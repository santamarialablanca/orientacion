/**
 * Diagrama polar por sectores - l-gica adaptada de Evaluaci-n DCO (DigCompOrg).
 * Referencia: https://fastidious-pudding-277df2.netlify.app/ (DCO_v2.js, funci-n Change).
 *
 * Cada -tem ocupa 360/n grados; el radio del sector va de rm (vac-o) a r (m-ximo)
 * seg-n p = valorNormalizado en [0, 1], igual que: rr = rm + (r - rm) * p.
 */
(function (global) {
  'use strict';

  var deg2rad = Math.PI / 180;

  /**
   * Construye el atributo d del path como en DCO original (mismos -ngulos y arco).
   * @param {number} cx - centro X
   * @param {number} cy - centro Y
   * @param {number} rr - radio exterior del sector (proporcional al valor)
   * @param {number} a - -ngulo inicial (radianes)
   * @param {number} da - amplitud angular del sector (radianes, negativo en DCO)
   */
  function pathDSectorDCO(cx, cy, rr, a, da) {
    var x1 = cx + rr * Math.cos(a);
    var y1 = cy - rr * Math.sin(a);
    var x2 = cx + rr * Math.cos(a + da);
    var y2 = cy - rr * Math.sin(a + da);
    var largeArc = Math.abs(da) > Math.PI ? 1 : 0;
    var sweep = da < 0 ? 1 : 0;
    return (
      'M ' +
      cx +
      ' ' +
      cy +
      ' L ' +
      x1 +
      ' ' +
      y1 +
      ' A ' +
      rr +
      ' ' +
      rr +
      ' 0 ' +
      largeArc +
      ' ' +
      sweep +
      ' ' +
      x2 +
      ' ' +
      y2 +
      ' Z'
    );
  }

  /**
   * p en [0,1]: proporci-n del anillo (0 = radio m-nimo, 1 = radio m-ximo).
   * id: 1..n (como en DCO: id = -ndice + 1).
   * offsetDeg: en DCO fijo 36 (rotaci-n del diagrama).
   */
  function paramsSector(id, n, p, cx, cy, r, rm, offsetDeg) {
    offsetDeg = offsetDeg == null ? 36 : offsetDeg;
    var a = (-360 / n * (id - 1) + 180 - offsetDeg) * deg2rad;
    var da = (-360 / n) * deg2rad;
    var rr = rm + (r - rm) * Math.max(0, Math.min(1, p));
    return { a: a, da: da, rr: rr, d: pathDSectorDCO(cx, cy, rr, a, da) };
  }

  /**
   * Normaliza puntuaci-n escala tipo WISC (1-19) a [0,1] para el anillo.
   */
  function normalizarEscala119(valor) {
    if (valor == null || Number.isNaN(Number(valor))) return 0;
    return Math.max(0, Math.min(1, (Number(valor) - 1) / 18));
  }

  function radioDesdeProporcion(r, rm, p) {
    return rm + (r - rm) * Math.max(0, Math.min(1, p));
  }

  /**
   * Dibuja sectores en un elemento <svg>. Borra contenido previo.
   * @param {SVGSVGElement} svg
   * @param {number[]} valoresNorm - longitud n, cada uno en [0,1]
   * @param {object} [opts] cx, cy, r, rm, offsetDeg, labels (texto por sector, opcional)
   */
  function render(svg, valoresNorm, opts) {
    opts = opts || {};
    var n = valoresNorm.length;
    if (!n) {
      svg.innerHTML = '';
      return;
    }

    var cx = opts.cx != null ? opts.cx : 400;
    var cy = opts.cy != null ? opts.cy : 400;
    var r = opts.r != null ? opts.r : 250;
    var rm = opts.rm != null ? opts.rm : 70;
    var offsetDeg = opts.offsetDeg != null ? opts.offsetDeg : 36;
    var labels = opts.labels;

    var ns = 'http://www.w3.org/2000/svg';
    svg.innerHTML = '';

    var anillos = opts.anillos || [
      { p: normalizarEscala119(7), label: 'PE 7' },
      { p: normalizarEscala119(10), label: 'Media PE 10', media: true },
      { p: normalizarEscala119(13), label: 'PE 13' },
      { p: 1, label: 'PE 19' }
    ];
    for (var ai = 0; ai < anillos.length; ai++) {
      var an = anillos[ai];
      var rrAn = radioDesdeProporcion(r, rm, an.p);
      var ring = document.createElementNS(ns, 'circle');
      ring.setAttribute('cx', String(cx));
      ring.setAttribute('cy', String(cy));
      ring.setAttribute('r', String(rrAn));
      ring.setAttribute('fill', 'none');
      ring.setAttribute('stroke', an.media ? 'rgba(15, 23, 42, 0.42)' : 'rgba(148, 163, 184, 0.28)');
      ring.setAttribute('stroke-width', an.media ? '2' : '1');
      ring.setAttribute('stroke-dasharray', an.media ? 'none' : '5 6');
      svg.appendChild(ring);
      if (an.label) {
        var ringText = document.createElementNS(ns, 'text');
        ringText.setAttribute('x', String(cx + rrAn + 8));
        ringText.setAttribute('y', String(cy - 4));
        ringText.setAttribute('text-anchor', 'start');
        ringText.setAttribute('dominant-baseline', 'middle');
        ringText.setAttribute('fill', an.media ? '#0f172a' : '#64748b');
        ringText.setAttribute('font-size', an.media ? '11' : '9');
        ringText.setAttribute('font-family', 'system-ui, sans-serif');
        ringText.setAttribute('font-weight', an.media ? '700' : '500');
        ringText.setAttribute('pointer-events', 'none');
        ringText.textContent = an.label;
        svg.appendChild(ringText);
      }
    }

    var sectores = [];
    for (var i = 0; i < n; i++) {
      var p = valoresNorm[i] != null ? Number(valoresNorm[i]) : 0;
      var id = i + 1;
      var sec = paramsSector(id, n, p, cx, cy, r, rm, offsetDeg);
      sectores.push(sec);
      var pathEl = document.createElementNS(ns, 'path');
      pathEl.setAttribute('d', sec.d);
      var alpha = 0.2 + 0.55 * p;
      pathEl.setAttribute('fill', 'rgba(2, 132, 199, ' + alpha + ')');
      pathEl.setAttribute('stroke', 'rgba(15, 23, 42, 0.25)');
      pathEl.setAttribute('stroke-width', '1');
      pathEl.setAttribute('data-indice', String(i));
      pathEl.setAttribute('role', 'graphics-symbol');
      svg.appendChild(pathEl);
    }
    if (labels) {
      for (var j = 0; j < n; j++) {
        if (!labels[j]) continue;
        var lab = String(labels[j]);
        if (lab.length > 11) lab = lab.slice(0, 10) + '\u2026';
        var secL = sectores[j];
        var midA = secL.a + secL.da / 2;
        var rrLab = rm + (r - rm) * 0.52;
        var tx = cx + rrLab * Math.cos(midA);
        var ty = cy - rrLab * Math.sin(midA);
        var textEl = document.createElementNS(ns, 'text');
        textEl.setAttribute('x', String(tx));
        textEl.setAttribute('y', String(ty));
        textEl.setAttribute('text-anchor', 'middle');
        textEl.setAttribute('dominant-baseline', 'middle');
        textEl.setAttribute('fill', '#334155');
        textEl.setAttribute('font-size', n > 12 ? '8' : n > 8 ? '9' : '10');
        textEl.setAttribute('font-family', 'system-ui, sans-serif');
        textEl.setAttribute('pointer-events', 'none');
        textEl.textContent = lab;
        svg.appendChild(textEl);
      }
    }

    var circleIn = document.createElementNS(ns, 'circle');
    circleIn.setAttribute('cx', String(cx));
    circleIn.setAttribute('cy', String(cy));
    circleIn.setAttribute('r', String(rm));
    circleIn.setAttribute('fill', 'rgba(248, 250, 252, 0.95)');
    circleIn.setAttribute('stroke', 'rgba(148, 163, 184, 0.45)');
    circleIn.setAttribute('stroke-width', '1');
    svg.appendChild(circleIn);
  }

  global.DiagramaPolarDCO = {
    deg2rad: deg2rad,
    pathDSectorDCO: pathDSectorDCO,
    paramsSector: paramsSector,
    normalizarEscala119: normalizarEscala119,
    radioDesdeProporcion: radioDesdeProporcion,
    render: render
  };
})(typeof window !== 'undefined' ? window : this);
