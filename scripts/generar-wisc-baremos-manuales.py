#!/usr/bin/env python3
"""
Genera orientacion/js/wisc-v-baremos-oficiales.js a partir de la Tabla A.1
del manual local en orientacion/manuales/WISC-V/Manual_Administracion_y_correccion_WISC.pdf.

Bandas de edad del manual: tramos semestrales (x:0-x:5 y x:6-x:11).
"""
from __future__ import annotations

import json
import re
from functools import lru_cache
from pathlib import Path

from pypdf import PdfReader

ROOT = Path(__file__).resolve().parents[1]
PDF = ROOT / "manuales" / "WISC-V" / "Manual_Administracion_y_correccion_WISC.pdf"
OUT = ROOT / "js" / "wisc-v-baremos-oficiales.js"

# Orden de columnas de Tabla A.1
COLS = ["CC", "AN", "MR", "RD", "CLA", "VOC", "BAL", "RV", "RI", "BS", "IN", "SLN", "CAN", "COM", "ARI"]

ID_BY_COL = {
    "CC": "cub",
    "AN": "sim",
    "MR": "mat",
    "RD": "dig",
    "CLA": "cla",
    "VOC": "voc",
    "BAL": "bal",
    "RV": "puz",
    "RI": "pic",
    "BS": "bus",
    "IN": "inf",
    "SLN": "lyn",
    "CAN": "can",
    "COM": "com",
    "ARI": "ari",
}


def norm(s: str) -> str:
    return s.replace("\u2013", "-").replace("\u2014", "-").replace("\u00a0", " ")


def extract_text() -> str:
    reader = PdfReader(str(PDF))
    return "\n".join(norm(p.extract_text() or "") for p in reader.pages)


def parse_cell(c: str):
    c = c.strip()
    if not c or c == "-":
        return None
    m = re.fullmatch(r"(\d+)\s*-\s*(\d+)", c)
    if m:
        a, b = int(m.group(1)), int(m.group(2))
        if b < a:
            a, b = b, a
        return (a, b)
    if re.fullmatch(r"\d+", c):
        n = int(c)
        return (n, n)
    return None


def split_cells_from_tokens(tokens: list[str], n_cells: int) -> list[str] | None:
    """Particiona tokens en n_cells celdas (num, num-num o '-')."""

    @lru_cache(maxsize=None)
    def solve(i: int, k: int):
        if k == n_cells:
            return (0, ()) if i == len(tokens) else None
        remaining = n_cells - k
        if i >= len(tokens):
            return None
        # poda rapida
        if len(tokens) - i < remaining:
            return None

        best = None

        # opcion 1: rango a-b
        if i + 2 < len(tokens) and re.fullmatch(r"\d+", tokens[i]) and tokens[i + 1] == "-" and re.fullmatch(r"\d+", tokens[i + 2]):
            nxt = solve(i + 3, k + 1)
            if nxt is not None:
                sc, cells = nxt
                cand = (sc + 3, (f"{tokens[i]}-{tokens[i+2]}",) + cells)
                best = cand if best is None or cand[0] > best[0] else best

        # opcion 2: celda vacia '-'
        if tokens[i] == "-":
            nxt = solve(i + 1, k + 1)
            if nxt is not None:
                sc, cells = nxt
                cand = (sc - 2, ("-",) + cells)
                best = cand if best is None or cand[0] > best[0] else best

        # opcion 3: numero suelto
        if re.fullmatch(r"\d+", tokens[i]):
            nxt = solve(i + 1, k + 1)
            if nxt is not None:
                sc, cells = nxt
                cand = (sc + 1, (tokens[i],) + cells)
                best = cand if best is None or cand[0] > best[0] else best

        return best

    out = solve(0, 0)
    return list(out[1]) if out is not None else None


def parse_table_sections(text: str):
    ini = text.find("6:0 - 6:5")
    if ini == -1:
        ini = text.find("Tabla A.1")
    fin = text.find("Tabla A.2 Puntaje compuesto", ini if ini != -1 else 0)
    if fin == -1:
        fin = text.find("Tabla A.2", ini if ini != -1 else 0)
    if fin == -1:
        fin = len(text)
    scope = text[ini:fin] if ini != -1 else text

    # Captura bloques de A.1 por banda x:0-x:5 o x:6-x:11
    sec_re = re.compile(r"(\d+):(\d+)\s*-\s*(\d+):(\d+)\s*\n")
    sections = []
    matches = list(sec_re.finditer(scope))
    for idx, m in enumerate(matches):
        y1, m1, y2, m2 = map(int, m.groups())
        if y1 < 6 or y1 > 16:
            continue
        start = m.end()
        end = matches[idx + 1].start() if idx + 1 < len(matches) else len(scope)
        body = scope[start:end]
        sections.append((y1, m1, y2, m2, body))
    return sections


def parse_rows(body: str):
    out = {pe: {} for pe in range(1, 20)}
    for ln in body.splitlines():
        ln = ln.strip()
        if not ln:
            continue
        # fila esperada: "1 ... 1"
        m = re.match(r"^(1[0-9]|[1-9])\s+(.*)\s+(1[0-9]|[1-9])\s*$", ln)
        if not m:
            continue
        pe_a = int(m.group(1))
        pe_b = int(m.group(3))
        if pe_a != pe_b or pe_a < 1 or pe_a > 19:
            continue
        mid = m.group(2)
        tokens = re.findall(r"\d+|-", mid)
        cells = split_cells_from_tokens(tokens, len(COLS))
        if not cells:
            continue
        for col, cell in zip(COLS, cells):
            rng = parse_cell(cell)
            if rng is not None:
                out[pe_a][col] = rng
    return out


def main():
    if not PDF.exists():
        raise FileNotFoundError(f"No se encuentra el manual: {PDF}")

    text = extract_text()
    sections = parse_table_sections(text)
    tabla = {sid: {} for sid in ID_BY_COL.values()}

    for y1, m1, _y2, _m2, body in sections:
        # Solo bandas semestrales validas del manual
        if m1 not in (0, 6):
            continue
        rows = parse_rows(body)
        key = f"{y1}_{m1}"
        for col, sid in ID_BY_COL.items():
            ranges = []
            for pe in range(1, 20):
                rng = rows.get(pe, {}).get(col)
                if not rng:
                    continue
                a, b = rng
                ranges.append({"pdMin": a, "pdMax": b, "pe": pe})
            if ranges:
                tabla[sid][key] = ranges

    js = (
        "/**\n"
        " * Conversion PD -> PE (puntuacion escalar) WISC-V.\n"
        " * Fuente: Manual local en orientacion/manuales (Tabla A.1, por grupo etario).\n"
        " * Bandas: tramos semestrales x:0-x:5 (clave x_0) y x:6-x:11 (clave x_6).\n"
        " */\n"
        "(function (global) {\n"
        "  'use strict';\n\n"
        "  var TABLA = "
        + json.dumps(tabla, ensure_ascii=False, indent=2)
        + ";\n\n"
        "  function pdAPE(subtestId, bandaEdad, pd) {\n"
        "    if (!subtestId || bandaEdad == null || bandaEdad === '') return null;\n"
        "    var p = Number(pd);\n"
        "    if (Number.isNaN(p)) return null;\n"
        "    var bySub = TABLA[subtestId];\n"
        "    if (!bySub) return null;\n"
        "    var rangos = bySub[bandaEdad];\n"
        "    if (!Array.isArray(rangos) || !rangos.length) return null;\n"
        "    for (var i = 0; i < rangos.length; i++) {\n"
        "      var r = rangos[i];\n"
        "      if (p >= r.pdMin && p <= r.pdMax) return r.pe;\n"
        "    }\n"
        "    return null;\n"
        "  }\n\n"
        "  global.WiscBaremosOficiales = {\n"
        "    TABLA: TABLA,\n"
        "    pdAPE: pdAPE\n"
        "  };\n"
        "})(typeof window !== 'undefined' ? window : this);\n"
    )
    OUT.write_text(js, encoding="utf-8")
    bandas = sorted({k for by_sub in tabla.values() for k in by_sub.keys()})
    print("Escrito", OUT)
    print("Bandas detectadas:", ", ".join(bandas[:8]), "...", "total", len(bandas))


if __name__ == "__main__":
    main()

