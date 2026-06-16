/**
 * Utilidades alineadas al cuadernillo de anotacion WISC-V / hoja resumen.
 * Suma de PE por indice a partir de valores ya convertidos (manual Pearson).
 * Banda de edad para baremos: intervalos semestrales (p. ej. 11:0-11:5 -> 11_0;
 * 11:6-11:11 -> 11_6), alineados al apendice de tablas del manual WISC-V.
 * Los valores PD->PE se consultan exclusivamente en WiscBaremosA1Manual
 * (tabla A.1 extraida del manual local). Si falta una celda, no se convierte.
 */
(function (global) {
  'use strict';

  var INDICES_PRIMARIOS = ['ICV', 'IVE', 'IRF', 'IMT', 'IVP'];

  /** Suma PE para ICG (criterio discrepancias): Semejanzas + Vocabulario + Cubos + Matrices + Balanzas (sin MT ni VP). */
  var IDS_SUMA_ICG = ['sim', 'voc', 'cub', 'mat', 'bal'];

  /** 7 subtests tipicos del CIT en bateria primaria (Sim, Voc, Cub, Mat, Dig, Cla, Bal). */
  var IDS_SUMA_CIT_PRIMARIA = ['sim', 'voc', 'cub', 'mat', 'dig', 'cla', 'bal'];

  /**
   * Pruebas que suman en cada columna de indice primario (cuadernillo ES: celdas blancas por bloque).
   * Las suplementarias del mismo factor (p. ej. Informacion) no entran en la suma de columna salvo normas de sustitucion del manual.
   */
  var IDS_SUMA_POR_INDICE = {
    ICV: ['sim', 'voc'],
    IVE: ['cub', 'puz'],
    IRF: ['mat', 'bal'],
    IMT: ['dig', 'pic'],
    IVP: ['cla', 'bus']
  };

  /**
   * Orden de filas de la tabla PD-PE como en la hoja de conversion del cuadernillo WISC-V (ES).
   * Las siete primeras corresponden a la columna CIT (suma de sus PE).
   */
  var ORDEN_PRUEBAS_CUADERNILLO_ES = [
    'cub',
    'sim',
    'mat',
    'dig',
    'cla',
    'voc',
    'bal',
    'puz',
    'pic',
    'bus',
    'inf',
    'com',
    'ari',
    'lyn',
    'can'
  ];

  function desgloseFechaISO(fechaStr) {
    if (!fechaStr || !/^\d{4}-\d{2}-\d{2}$/.test(fechaStr)) return null;
    var p = fechaStr.split('-');
    return { anio: parseInt(p[0], 10), mes: parseInt(p[1], 10), dia: parseInt(p[2], 10) };
  }

  /**
   * Edad cronologica entre fecha de nacimiento y fecha de aplicacion (calendario gregoriano).
   * Los meses son meses naturales; al compensar dias negativos se suman los dias del mes anterior real.
   * anosDecimal: dias completos entre fechas / 365.25 (aprox. uso clinico; contrastar con manual si aplica).
   */
  function edadCronologicaDesdeFechas(fechaNacStr, fechaAppStr) {
    if (!fechaNacStr || !fechaAppStr) return null;
    var n = desgloseFechaISO(fechaNacStr);
    var a = desgloseFechaISO(fechaAppStr);
    if (!n || !a) return null;
    var dn = new Date(fechaNacStr + 'T12:00:00');
    var da = new Date(fechaAppStr + 'T12:00:00');
    if (isNaN(dn.getTime()) || isNaN(da.getTime()) || da < dn) return null;

    var y = a.anio - n.anio;
    var m = a.mes - n.mes;
    var d = a.dia - n.dia;

    var refY = a.anio;
    var refM0 = a.mes - 1;
    while (d < 0) {
      m -= 1;
      d += new Date(refY, refM0, 0).getDate();
      refM0 -= 1;
      if (refM0 < 0) {
        refM0 = 11;
        refY -= 1;
      }
    }
    while (m < 0) {
      y -= 1;
      m += 12;
    }
    if (y < 0) return null;

    var msPorDia = 86400000;
    var totalDias = Math.round((da.getTime() - dn.getTime()) / msPorDia);
    var anosDecimal = totalDias / 365.25;
    var texto = y + ' anos, ' + m + ' meses, ' + d + ' dias';
    return { anos: y, meses: m, dias: d, texto: texto, anosDecimal: anosDecimal };
  }

  /**
   * Clave de banda segun manual local A.1:
   * anio 6-16 y mes 0-11 -> semestre 0 o 6.
   * Ej.: 11 anos 5 meses -> 11_0 (intervalo 11:0-11:5).
   */
  function bandaBaremoWiscDesdeDesglose(anos, meses) {
    var y = Number(anos);
    var mo = Number(meses);
    if (Number.isNaN(y) || Number.isNaN(mo)) return null;
    if (y < 6 || y > 16 || mo < 0 || mo > 11) return null;
    var q = mo < 6 ? 0 : 6;
    return String(y) + '_' + q;
  }

  function bandaBaremoWiscDesdeDecimal(anosDecimal) {
    var n = Number(anosDecimal);
    if (Number.isNaN(n)) return null;
    var y = Math.floor(n + 1e-9);
    var m = Math.floor((n - y) * 12 + 1e-6);
    return bandaBaremoWiscDesdeDesglose(y, m);
  }

  function peDesdeTablaBaremos(pd, subtestId, bandaKey) {
    var WA1 = global.WiscBaremosA1Manual;
    if (!WA1 || typeof WA1.pdAPE !== 'function') return null;
    return WA1.pdAPE(subtestId, bandaKey, pd);
  }

  /**
   * @param {number} pd
   * @param {string} subtestId
   * @param {{ anos: number, meses: number } | number | null} edadContext - preferir anos/mes desde fechas
   */
  function peDesdePdEdad(pd, subtestId, edadContext) {
    var p = Number(pd);
    if (Number.isNaN(p)) return null;
    var bandaKey = null;
    if (edadContext != null && typeof edadContext === 'object') {
      bandaKey = bandaBaremoWiscDesdeDesglose(edadContext.anos, edadContext.meses);
    } else if (typeof edadContext === 'number') {
      bandaKey = bandaBaremoWiscDesdeDecimal(edadContext);
    }
    if (!bandaKey) return null;
    return peDesdeTablaBaremos(p, subtestId, bandaKey);
  }

  function sumarEscalaresPorIndice(resultados) {
    var out = {};
    for (var k = 0; k < INDICES_PRIMARIOS.length; k++) {
      out[INDICES_PRIMARIOS[k]] = { suma: 0, n: 0 };
    }
    for (var i = 0; i < resultados.length; i++) {
      var r = resultados[i];
      if (r.tipo !== 'escala' || r.valor === null || !r.indice) continue;
      var permitidos = IDS_SUMA_POR_INDICE[r.indice];
      if (!permitidos || permitidos.indexOf(r.id) === -1) continue;
      if (!out[r.indice]) continue;
      out[r.indice].suma += r.valor;
      out[r.indice].n += 1;
    }
    for (var key in out) {
      if (out[key].n === 0) {
        out[key] = null;
      }
    }
    return out;
  }

  function sumarEscalaresCITPrimaria(resultados) {
    var suma = 0;
    var n = 0;
    for (var i = 0; i < resultados.length; i++) {
      var r = resultados[i];
      if (r.tipo !== 'escala' || r.valor === null) continue;
      if (IDS_SUMA_CIT_PRIMARIA.indexOf(r.id) === -1) continue;
      suma += r.valor;
      n += 1;
    }
    if (n === 0) return null;
    return { suma: suma, n: n };
  }

  function sumarEscalaresICG(resultados) {
    var suma = 0;
    var n = 0;
    for (var i = 0; i < resultados.length; i++) {
      var r = resultados[i];
      if (r.tipo !== 'escala' || r.valor === null) continue;
      if (IDS_SUMA_ICG.indexOf(r.id) === -1) continue;
      suma += r.valor;
      n += 1;
    }
    if (n === 0) return null;
    return { suma: suma, n: n };
  }

  /**
   * Criterio orientativo para calcular / interpretar ICG: discrepancia > umbral (por defecto 20)
   * entre IC verbal (ICV) y visoespacial (IVE) o fluido (IRF), o entre memoria de trabajo (IMT) y velocidad (IVP).
   * Los IC deben ser los compuestos del manual; aqui se usan los valores ya calculados o introducidos.
   */
  function criterioDiscrepanciaParaIcG(icv, ive, irf, imt, ivp, umbral) {
    var u = umbral == null ? 20 : Number(umbral);
    if (Number.isNaN(u)) u = 20;
    if (icv == null || ive == null || irf == null || imt == null || ivp == null) {
      return { aplica: false, motivos: [], detalle: '' };
    }
    var motivos = [];
    if (Math.abs(icv - ive) > u) motivos.push('ICV vs IVE (> ' + u + ' pt)');
    if (Math.abs(icv - irf) > u) motivos.push('ICV vs IRF (> ' + u + ' pt)');
    if (Math.abs(imt - ivp) > u) motivos.push('IMT vs IVP (> ' + u + ' pt)');
    return {
      aplica: motivos.length > 0,
      motivos: motivos,
      detalle: motivos.join('; ')
    };
  }

  /** Si |ICG - CIT| > umbral, el CIT puede estar muy influido por MT/VP frente al ICG. */
  function discrepanciaImportanteIcGvsCit(icg, cit, umbral) {
    var u = umbral == null ? 20 : Number(umbral);
    if (Number.isNaN(u)) u = 20;
    if (icg == null || cit == null) return false;
    return Math.abs(icg - cit) > u;
  }

  global.WiscCuadernillo = {
    INDICES_PRIMARIOS: INDICES_PRIMARIOS,
    IDS_SUMA_ICG: IDS_SUMA_ICG,
    IDS_SUMA_CIT_PRIMARIA: IDS_SUMA_CIT_PRIMARIA,
    IDS_SUMA_POR_INDICE: IDS_SUMA_POR_INDICE,
    ORDEN_PRUEBAS_CUADERNILLO_ES: ORDEN_PRUEBAS_CUADERNILLO_ES,
    edadCronologicaDesdeFechas: edadCronologicaDesdeFechas,
    bandaBaremoWiscDesdeDesglose: bandaBaremoWiscDesdeDesglose,
    bandaBaremoWiscDesdeDecimal: bandaBaremoWiscDesdeDecimal,
    peDesdePdEdad: peDesdePdEdad,
    sumarEscalaresPorIndice: sumarEscalaresPorIndice,
    sumarEscalaresCITPrimaria: sumarEscalaresCITPrimaria,
    sumarEscalaresICG: sumarEscalaresICG,
    desgloseFechaISO: desgloseFechaISO,
    criterioDiscrepanciaParaIcG: criterioDiscrepanciaParaIcG,
    discrepanciaImportanteIcGvsCit: discrepanciaImportanteIcGvsCit
  };
})(typeof window !== 'undefined' ? window : this);
