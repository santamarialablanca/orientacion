/**
 * Graficos Chart.js, campana CIT (canvas) y diagrama polar DCO.
 * Requiere OrientacionGraficos.configure({ $, Baremos, parseNumInput }) desde app.js.
 */
(function (global) {
  'use strict';

  var cfg = null;
  var chartInstance = null;
  var chartRadarInstance = null;
  var chartCompuestosInstance = null;
  var ELLIPSIS = '\u2026';
  var senaPerfilPluginRegistered = false;
  var manualPerfilPluginRegistered = false;
  var BANDAS_CI = [
    { min: 40, max: 70, etiqueta: 'Muy bajo', color: 'rgba(190, 18, 60, 0.2)', barra: 'rgba(190, 18, 60, 0.85)' },
    { min: 71, max: 79, etiqueta: 'Baja', color: 'rgba(234, 88, 12, 0.18)', barra: 'rgba(234, 88, 12, 0.85)' },
    { min: 80, max: 89, etiqueta: 'Media/baja', color: 'rgba(128, 24, 54, 0.12)', barra: 'rgba(128, 24, 54, 0.82)' },
    { min: 90, max: 109, etiqueta: 'Media', color: 'rgba(30, 64, 175, 0.28)', barra: 'rgba(30, 64, 175, 0.82)' },
    { min: 110, max: 119, etiqueta: 'Media/alta', color: 'rgba(13, 148, 136, 0.18)', barra: 'rgba(13, 148, 136, 0.82)' },
    { min: 120, max: 129, etiqueta: 'Alto', color: 'rgba(5, 150, 105, 0.18)', barra: 'rgba(5, 150, 105, 0.85)' },
    { min: 130, max: 160, etiqueta: 'Muy alto', color: 'rgba(124, 58, 237, 0.16)', barra: 'rgba(124, 58, 237, 0.85)' }
  ];

  function bandaCi(v) {
    if (v == null || Number.isNaN(Number(v))) return null;
    var n = Number(v);
    for (var i = 0; i < BANDAS_CI.length; i++) {
      var b = BANDAS_CI[i];
      if (n >= b.min && n <= b.max) return b;
    }
    if (n < BANDAS_CI[0].min) return BANDAS_CI[0];
    return BANDAS_CI[BANDAS_CI.length - 1];
  }

  function colorBarraCi(v) {
    var b = bandaCi(v);
    return b ? b.barra : 'rgba(148, 163, 184, 0.25)';
  }

  /** Barras tipo hoja Pearson / manual (PE 1-19). */
  function colorBarraPeManual(v) {
    if (v == null || Number.isNaN(Number(v))) return 'transparent';
    var n = Number(v);
    if (n <= 3) return 'rgba(185, 28, 28, 0.88)';
    if (n <= 7) return 'rgba(217, 119, 6, 0.88)';
    if (n <= 12) return 'rgba(30, 64, 175, 0.82)';
    return 'rgba(5, 150, 105, 0.88)';
  }

  function registerManualPerfilPlugins() {
    if (manualPerfilPluginRegistered || typeof Chart === 'undefined') return;
    manualPerfilPluginRegistered = true;
    Chart.register({
      id: 'manualPerfilHoja',
      beforeDatasetsDraw: function (chart) {
        var opts = chart.options.plugins && chart.options.plugins.manualPerfilHoja;
        if (!opts || !opts.fondosPe) return;
        var xScale = chart.scales.x;
        var ca = chart.chartArea;
        var ctx = chart.ctx;
        var bands = [
          { min: 0, max: 6, c: 'rgba(254, 226, 226, 0.28)' },
          { min: 6, max: 13, c: 'rgba(248, 250, 252, 0.65)' },
          { min: 13, max: 19, c: 'rgba(220, 252, 231, 0.28)' }
        ];
        ctx.save();
        for (var bi = 0; bi < bands.length; bi++) {
          var b = bands[bi];
          var x1 = xScale.getPixelForValue(b.min);
          var x2 = xScale.getPixelForValue(b.max);
          ctx.fillStyle = b.c;
          ctx.fillRect(Math.min(x1, x2), ca.top, Math.abs(x2 - x1), ca.bottom - ca.top);
        }
        ctx.restore();
      },
      afterDatasetsDraw: function (chart) {
        var opts = chart.options.plugins && chart.options.plugins.manualPerfilHoja;
        if (!opts) return;
        var xScale = chart.scales.x;
        var ctx = chart.ctx;
        var ca = chart.chartArea;
        ctx.save();
        var lineas = opts.lineas || [];
        for (var li = 0; li < lineas.length; li++) {
          var L = lineas[li];
          var x = xScale.getPixelForValue(L.valor);
          ctx.strokeStyle = L.color || 'rgba(51, 65, 85, 0.85)';
          ctx.lineWidth = L.lineWidth != null ? L.lineWidth : 1.5;
          ctx.setLineDash(L.dash || [5, 4]);
          ctx.beginPath();
          ctx.moveTo(x, ca.top);
          ctx.lineTo(x, ca.bottom);
          ctx.stroke();
        }
        if (opts.mostrarValores) {
          var meta = chart.getDatasetMeta(0);
          var datos = chart.data.datasets[0].data || [];
          ctx.setLineDash([]);
          ctx.fillStyle = '#334155';
          ctx.font = '600 10px system-ui,sans-serif';
          ctx.textAlign = 'left';
          ctx.textBaseline = 'middle';
          for (var vi = 0; vi < meta.data.length; vi++) {
            if (datos[vi] == null || !meta.data[vi]) continue;
            var vp = meta.data[vi].getProps(['x', 'y'], true);
            ctx.fillText(String(datos[vi]), Math.min(vp.x + 5, ca.right - 18), vp.y);
          }
        }
        if (opts.intervalos && opts.intervalos.length) {
          var metaInt = chart.getDatasetMeta(0);
          ctx.setLineDash([]);
          ctx.strokeStyle = 'rgba(15, 23, 42, 0.65)';
          ctx.lineWidth = 1.25;
          for (var ei = 0; ei < opts.intervalos.length; ei++) {
            var intervalo = opts.intervalos[ei];
            var elem = metaInt.data[ei];
            if (!intervalo || !elem) continue;
            var ep = elem.getProps(['y'], true);
            var ex1 = xScale.getPixelForValue(intervalo[0]);
            var ex2 = xScale.getPixelForValue(intervalo[1]);
            ctx.beginPath();
            ctx.moveTo(ex1, ep.y);
            ctx.lineTo(ex2, ep.y);
            ctx.moveTo(ex1, ep.y - 4);
            ctx.lineTo(ex1, ep.y + 4);
            ctx.moveTo(ex2, ep.y - 4);
            ctx.lineTo(ex2, ep.y + 4);
            ctx.stroke();
          }
        }
        ctx.restore();
      }
    });
  }

  function dibujarBandasSenaFila(ctx, xScale, top, bottom, polaridad) {
    var pol = polaridad || 'problema';
    var ranges;
    if (pol === 'recurso') {
      ranges = [
        { min: 10, max: 30, c: 'rgba(254, 215, 170, 0.55)' },
        { min: 30, max: 40, c: 'rgba(253, 224, 71, 0.38)' },
        { min: 40, max: 60, c: 'rgba(187, 247, 208, 0.52)' },
        { min: 60, max: 90, c: 'rgba(16, 185, 129, 0.26)' }
      ];
    } else {
      ranges = [
        { min: 10, max: 60, c: 'rgba(187, 247, 208, 0.5)' },
        { min: 60, max: 70, c: 'rgba(253, 224, 71, 0.38)' },
        { min: 70, max: 90, c: 'rgba(254, 215, 170, 0.52)' }
      ];
    }
    for (var r = 0; r < ranges.length; r++) {
      var rg = ranges[r];
      var x1 = xScale.getPixelForValue(rg.min);
      var x2 = xScale.getPixelForValue(rg.max);
      ctx.fillStyle = rg.c;
      ctx.fillRect(Math.min(x1, x2), top, Math.abs(x2 - x1), bottom - top);
    }
  }

  function registerSenaPerfilPlugin() {
    if (senaPerfilPluginRegistered || typeof Chart === 'undefined') return;
    senaPerfilPluginRegistered = true;
    Chart.register({
      id: 'senaPerfilFondos',
      beforeDatasetsDraw: function (chart) {
        var items = chart.options.plugins && chart.options.plugins.senaPerfilFondos;
        if (!items || !items.length) return;
        var ctx = chart.ctx;
        var chartArea = chart.chartArea;
        var xScale = chart.scales.x;
        var meta = chart.getDatasetMeta(0);
        if (!meta || !meta.data || !meta.data.length) return;
        ctx.save();
        var nLab = chart.data.labels ? chart.data.labels.length : 0;
        var hTot = chartArea.bottom - chartArea.top;
        var rowH = nLab > 0 ? (hTot / nLab) * 0.82 : 18;
        for (var i = 0; i < meta.data.length; i++) {
          var el = meta.data[i];
          if (!el) continue;
          var pol = items[i] && items[i].polaridad || 'problema';
          if (pol === 'neutral') pol = 'problema';
          var props = el.getProps(['y', 'height'], true);
          var y = props.y;
          var h = props.height;
          if (h == null || h === 0) h = rowH;
          if (y == null) continue;
          var top = y - h / 2;
          var bottom = y + h / 2;
          dibujarBandasSenaFila(ctx, xScale, top, bottom, pol);
        }
        ctx.restore();
      },
      afterDatasetsDraw: function (chart) {
        var draw = chart.options.plugins && chart.options.plugins.senaLinea50;
        if (!draw) return;
        var xScale = chart.scales.x;
        var ctx = chart.ctx;
        var chartArea = chart.chartArea;
        var x50 = xScale.getPixelForValue(50);
        ctx.save();
        ctx.strokeStyle = 'rgba(51, 65, 85, 0.75)';
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.moveTo(x50, chartArea.top);
        ctx.lineTo(x50, chartArea.bottom);
        ctx.stroke();
        ctx.restore();
      }
    });
  }

  function configure(c) {
    cfg = c;
  }

  function $id(id) {
    return cfg.$(id);
  }

function actualizarGraficoCompuestos(resultados) {
  var ctx = $id('grafico-compuestos');
  if (chartCompuestosInstance) {
    chartCompuestosInstance.destroy();
    chartCompuestosInstance = null;
  }
  if (!ctx) return;
  var bat = $id('bateria').value;
  if (bat === 'wisc-v') {
    var ordenIc = ['ICV', 'IVE', 'IRF', 'IMT', 'IVP', 'ICG'];
    var labelsIc = ['ICV', 'IVE', 'IRF', 'IMT', 'IVP', 'ICG', 'CIT'];
    var vals = [];
    var intervalos = [];
    var has = false;
    function leerIntervalo(id) {
      var el = $id(id);
      var m = el ? String(el.value || '').match(/^(\d+)\s*-\s*(\d+)$/) : null;
      return m ? [Number(m[1]), Number(m[2])] : null;
    }
    for (var i = 0; i < ordenIc.length; i++) {
      var v = cfg.parseNumInput('wisc-ic-' + ordenIc[i]);
      vals.push(v != null ? v : null);
      intervalos.push(leerIntervalo('wisc-int-' + ordenIc[i]));
      if (v != null) has = true;
    }
    var cit = cfg.parseNumInput('inp-fsiq');
    vals.push(cit != null ? cit : null);
    intervalos.push(leerIntervalo('wisc-int-cit'));
    if (cit != null) has = true;
    registerManualPerfilPlugins();
    chartCompuestosInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labelsIc,
        datasets: [
          {
            label: 'IC',
            data: vals,
            backgroundColor: vals.map(function (v) {
              return colorBarraCi(v);
            }),
            borderColor: 'rgba(15, 23, 42, 0.35)',
            borderWidth: 1,
            borderRadius: 4,
            maxBarThickness: 26
          }
        ]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        layout: { padding: { right: 10 } },
        scales: {
          x: {
            type: 'linear',
            min: 40,
            max: 160,
            title: { display: true, text: 'Indices compuestos (40\u2013160; linea M=100)' },
            ticks: { stepSize: 10, font: { size: 10 } },
            grid: { color: 'rgba(148, 163, 184, 0.3)' }
          },
          y: {
            type: 'category',
            reverse: true,
            grid: { display: false },
            ticks: { font: { size: 11 } }
          }
        },
        plugins: {
          legend: { display: false },
          title: {
            display: !has,
            text: has
              ? ''
              : 'Complete las PE o indique los IC según la fuente seleccionada',
            color: '#64748b',
            font: { size: 12, weight: '500' }
          },
          manualPerfilHoja: {
            fondosPe: false,
            lineas: [{ valor: 100, color: 'rgba(51, 65, 85, 0.8)', dash: [5, 4] }],
            mostrarValores: true,
            intervalos: intervalos
          },
          tooltip: {
            callbacks: {
              afterLabel: function (tooltipCtx) {
                var val = tooltipCtx.parsed.x;
                if (val == null) return '';
                return cfg.Baremos.interpretarCI(val);
              }
            }
          }
        }
      }
    });
    return;
  }
  if (bat === 'celf5' && resultados) {
    var cis = resultados.filter(function (r) {
      return r.tipo === 'ci' && r.valor !== null;
    });
    if (!cis.length) return;
    registerManualPerfilPlugins();
    chartCompuestosInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: cis.map(function (c) {
          return c.abrev || c.nombre.slice(0, 14);
        }),
        datasets: [
          {
            label: 'IC',
            data: cis.map(function (c) {
              return c.valor;
            }),
            backgroundColor: cis.map(function (c) {
              return colorBarraCi(c.valor);
            }),
            borderColor: 'rgba(15, 23, 42, 0.35)',
            borderWidth: 1,
            borderRadius: 4,
            maxBarThickness: 26
          }
        ]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        layout: { padding: { right: 10 } },
        scales: {
          x: {
            type: 'linear',
            min: 40,
            max: 160,
            title: { display: true, text: 'Indices compuestos IC (40\u2013160; linea M=100)' },
            ticks: { stepSize: 10, font: { size: 10 } },
            grid: { color: 'rgba(148, 163, 184, 0.3)' }
          },
          y: {
            type: 'category',
            reverse: true,
            grid: { display: false },
            ticks: { font: { size: 11 } }
          }
        },
        plugins: {
          legend: { display: false },
          manualPerfilHoja: {
            fondosPe: false,
            lineas: [{ valor: 100, color: 'rgba(13, 148, 136, 0.75)', dash: [5, 4] }],
            mostrarValores: true
          },
          tooltip: {
            callbacks: {
              afterLabel: function (tooltipCtx) {
                var val = tooltipCtx.parsed.x;
                if (val == null) return '';
                return cfg.Baremos.interpretarCI(val);
              }
            }
          }
        }
      }
    });
  }
}

function actualizarGraficoCompuestosWisc() {
  actualizarGraficoCompuestos(null);
}

function actualizarCampanaCIT() {
  var wrap = $id('envoltorio-campana-cit');
  var canvas = $id('grafico-campana-cit');
  var ley = $id('campana-cit-leyenda');
  if (!canvas || !wrap) return;
  if ($id('bateria').value !== 'wisc-v') {
    wrap.classList.add('hidden');
    return;
  }
  wrap.classList.remove('hidden');
  var cit = cfg.parseNumInput('inp-fsiq');
  var parent = canvas.parentElement;
  var w = parent && parent.clientWidth ? Math.max(280, parent.clientWidth) : 560;
  var h = 222;
  var dpr = typeof window.devicePixelRatio === 'number' ? window.devicePixelRatio : 1;
  canvas.width = Math.floor(w * dpr);
  canvas.height = Math.floor(h * dpr);
  canvas.style.width = w + 'px';
  canvas.style.height = h + 'px';
  var c2 = canvas.getContext('2d');
  c2.setTransform(1, 0, 0, 1, 0, 0);
  c2.scale(dpr, dpr);
  c2.clearRect(0, 0, w, h);
  var pad = 28;
  var x0 = pad;
  var x1 = w - pad;
  var xMin = 40;
  var xMax = 160;
  var mediaCi = 100;
  var deCi = 15;
  function xScale(s) {
    return x0 + ((s - xMin) / (xMax - xMin)) * (x1 - x0);
  }
  function pdf(x) {
    var z = (x - mediaCi) / deCi;
    return Math.exp(-0.5 * z * z);
  }
  var maxPdf = pdf(mediaCi);
  var yBase = h - 58;
  var yTop = 12;
  var amp = yBase - yTop;
  for (var bi = 0; bi < BANDAS_CI.length; bi++) {
    var banda = BANDAS_CI[bi];
    var bMin = Math.max(xMin, banda.min);
    var bMax = Math.min(xMax, banda.max);
    c2.beginPath();
    c2.moveTo(xScale(bMin), yBase);
    for (var sx = bMin; sx <= bMax; sx += 0.4) {
      c2.lineTo(xScale(sx), yBase - (pdf(sx) / maxPdf) * amp);
    }
    c2.lineTo(xScale(bMax), yBase);
    c2.closePath();
    c2.fillStyle = banda.color;
    c2.fill();
  }
  c2.beginPath();
  c2.moveTo(xScale(xMin), yBase);
  for (var xx = xMin; xx <= xMax; xx += 0.5) {
    c2.lineTo(xScale(xx), yBase - (pdf(xx) / maxPdf) * amp);
  }
  c2.strokeStyle = 'rgb(30, 58, 138)';
  c2.lineWidth = 2;
  c2.stroke();
  c2.strokeStyle = '#94a3b8';
  c2.lineWidth = 1;
  c2.beginPath();
  c2.moveTo(x0, yBase);
  c2.lineTo(x1, yBase);
  c2.stroke();
  var ticks = [40, 70, 80, 90, 100, 110, 120, 130, 160];
  c2.fillStyle = '#475569';
  c2.font = '10px system-ui,sans-serif';
  c2.textAlign = 'center';
  for (var ti = 0; ti < ticks.length; ti++) {
    var t = ticks[ti];
    var tx = xScale(t);
    c2.beginPath();
    c2.moveTo(tx, yBase);
    c2.lineTo(tx, yBase + 4);
    c2.stroke();
    c2.fillText(String(t), tx, yBase + 14);
  }
  c2.font = '9px system-ui,sans-serif';
  c2.textAlign = 'center';
  for (var bl = 0; bl < BANDAS_CI.length; bl++) {
    var bb = BANDAS_CI[bl];
    var bx = xScale((Math.max(xMin, bb.min) + Math.min(xMax, bb.max)) / 2);
    c2.fillStyle = '#334155';
    c2.fillText(bb.etiqueta, bx, yBase + 32);
  }
  if (cit != null) {
    var cx = xScale(Math.max(xMin, Math.min(xMax, cit)));
    c2.strokeStyle = '#b91c1c';
    c2.lineWidth = 2;
    c2.beginPath();
    c2.moveTo(cx, yTop);
    c2.lineTo(cx, yBase);
    c2.stroke();
    c2.fillStyle = '#b91c1c';
    c2.textAlign = 'center';
    c2.fillText('CIT ' + cit, cx, yTop + 10);
  }
  if (ley) {
    if (cit != null) {
      var pct = null;
      var Demo = global.WiscIcDesdeSumaDemo;
      var sumaCitEl = $id('wisc-sum-total');
      var sumaCitTexto = sumaCitEl ? String(sumaCitEl.textContent).trim() : '';
      var sumaCit = /^\d+$/.test(sumaCitTexto) ? Number(sumaCitTexto) : null;
      if (Demo && typeof Demo.percentilDesdeSuma === 'function' && sumaCit != null) {
        pct = Demo.percentilDesdeSuma('CIT', sumaCit);
      }
      ley.textContent =
        'CIT ' +
        cit +
        ' \u2014 ' +
        cfg.Baremos.interpretarCI(cit) +
        (pct != null ? '. Percentil de la tabla manual: ' + pct + '.' : '.');
    } else {
      ley.textContent =
        'Indique la puntuacion compuesta de la escala total (CIT) en la tabla de indices. Curva con M=100, DE=15 (referencia teorica).';
    }
  }
}
function actualizarGrafico(resultados) {
  var ctx = $id('grafico-perfil');
  if (!ctx) return;
  var escalaItems = resultados.filter(function (r) {
    return r.tipo === 'escala' && r.valor !== null;
  });
  var esWisc = $id('bateria').value === 'wisc-v';
  var esSena = $id('bateria').value === 'sena';
  var esCelf5 = $id('bateria').value === 'celf5';
  var SI = global.SenaInterpretacion;
  var maxLab = escalaItems.length > 8 ? 14 : 24;
  var labels = escalaItems.map(function (r) {
    if (esWisc && r.abrev) return r.abrev;
    if (esSena && r.abrev) return r.abrev;
    if (esCelf5 && r.abrev) return r.abrev;
    return r.nombre.length > maxLab ? r.nombre.slice(0, maxLab - 2) + ELLIPSIS : r.nombre;
  });
  var data = escalaItems.map(function (r) {
    return r.valor;
  });
  if (chartInstance) chartInstance.destroy();

  if (!escalaItems.length) {
    chartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Sin datos de escala'],
        datasets: [
          {
            label: 'Puntuacion escala (demo)',
            data: [0],
            backgroundColor: 'rgba(148, 163, 184, 0.45)',
            borderRadius: 6
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: { min: 0, max: 19, title: { display: true, text: 'Escala (demo)' } },
          x: { ticks: { maxRotation: 0 } }
        },
        plugins: { legend: { display: false }, tooltip: { enabled: false } }
      }
    });
    actualizarGraficoRadarVacio();
    actualizarDiagramaPolar([], false);
    return;
  }

  if (esWisc) {
    var segLabels = [];
    var segData = [];
    var segItems = [];
    var prevInd = null;
    for (var si = 0; si < escalaItems.length; si++) {
      var it = escalaItems[si];
      if (prevInd !== null && it.indice && it.indice !== prevInd) {
        segLabels.push('');
        segData.push(null);
        segItems.push(null);
      }
      segLabels.push(it.abrev || labels[si]);
      segData.push(it.valor);
      segItems.push(it);
      prevInd = it.indice || prevInd;
    }
    registerManualPerfilPlugins();
    chartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: segLabels,
        datasets: [
          {
            label: 'PE (hoja tipo manual)',
            data: segData,
            backgroundColor: segData.map(function (v) {
              return colorBarraPeManual(v);
            }),
            borderColor: 'rgba(15, 23, 42, 0.35)',
            borderWidth: 1,
            borderRadius: 4,
            maxBarThickness: 22
          }
        ]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        layout: { padding: { right: 8 } },
        scales: {
          x: {
            type: 'linear',
            min: 1,
            max: 19,
            title: { display: true, text: 'Puntuacion escalar (0\u201319; linea M=10)' },
            ticks: { stepSize: 1, maxTicksLimit: 22, font: { size: 10 } },
            grid: { color: 'rgba(148, 163, 184, 0.35)' }
          },
          y: {
            type: 'category',
            reverse: true,
            grid: { display: false },
            ticks: { autoSkip: false, font: { size: 11 } }
          }
        },
        plugins: {
          legend: { display: false },
          manualPerfilHoja: {
            fondosPe: true,
            lineas: [{ valor: 10, color: 'rgba(51, 65, 85, 0.75)', dash: [5, 4] }],
            mostrarValores: true
          },
          tooltip: {
            callbacks: {
              afterLabel: function (tooltipCtx) {
                var i = tooltipCtx.dataIndex;
                var item = segItems[i];
                if (!item || segData[i] == null) return '';
                return cfg.Baremos.interpretarEscala(item.valor).etiqueta;
              }
            }
          }
        }
      }
    });
  } else if (esCelf5) {
    var segLabelsC = [];
    var segDataC = [];
    var segItemsC = [];
    var prevBl = null;
    for (var sc = 0; sc < escalaItems.length; sc++) {
      var itc = escalaItems[sc];
      var bloque = itc.celfBloque || '';
      if (prevBl !== null && bloque && bloque !== prevBl) {
        segLabelsC.push('');
        segDataC.push(null);
        segItemsC.push(null);
      }
      segLabelsC.push(itc.abrev || labels[sc]);
      segDataC.push(itc.valor);
      segItemsC.push(itc);
      prevBl = bloque || prevBl;
    }
    registerManualPerfilPlugins();
    chartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: segLabelsC,
        datasets: [
          {
            label: 'PE CELF-5',
            data: segDataC,
            backgroundColor: segDataC.map(function (v) {
              return colorBarraPeManual(v);
            }),
            borderColor: 'rgba(15, 23, 42, 0.35)',
            borderWidth: 1,
            borderRadius: 4,
            maxBarThickness: 22
          }
        ]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        layout: { padding: { right: 8 } },
        scales: {
          x: {
            type: 'linear',
            min: 1,
            max: 19,
            title: { display: true, text: 'Puntuacion escalar PE (0\u201319; M=10, DE=3)' },
            ticks: { stepSize: 1, maxTicksLimit: 22, font: { size: 10 } },
            grid: { color: 'rgba(148, 163, 184, 0.35)' }
          },
          y: {
            type: 'category',
            reverse: true,
            grid: { display: false },
            ticks: { autoSkip: false, font: { size: 11 } }
          }
        },
        plugins: {
          legend: { display: false },
          manualPerfilHoja: {
            fondosPe: true,
            lineas: [{ valor: 10, color: 'rgba(13, 148, 136, 0.75)', dash: [5, 4] }],
            mostrarValores: true
          },
          tooltip: {
            callbacks: {
              afterLabel: function (tooltipCtx) {
                var ic = tooltipCtx.dataIndex;
                var itemC = segItemsC[ic];
                if (!itemC || segDataC[ic] == null) return '';
                return cfg.Baremos.interpretarEscala(itemC.valor).etiqueta;
              }
            }
          }
        }
      }
    });
  } else if (esSena && SI) {
    registerSenaPerfilPlugin();
    chartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Perfil T SENA (hoja oficial)',
            data: data,
            backgroundColor: data.map(function (v, i) {
              return SI.colorBarraT(v, escalaItems[i].polaridad || 'problema');
            }),
            borderColor: 'rgba(21, 128, 61, 0.35)',
            borderWidth: 1,
            borderRadius: 4,
            maxBarThickness: 22
          }
        ]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        layout: { padding: { right: 8 } },
        font: { family: "'Inter', system-ui, sans-serif", size: 12 },
        scales: {
          x: {
            type: 'linear',
            min: 10,
            max: 90,
            position: 'bottom',
            title: { display: true, text: 'Puntuacion T (M=50, DE=10)' },
            ticks: { stepSize: 10, maxRotation: 0, font: { size: 10 } },
            grid: { color: 'rgba(148, 163, 184, 0.3)' }
          },
          y: {
            type: 'category',
            reverse: true,
            grid: { display: false },
            ticks: { autoSkip: false, font: { size: 11 } }
          }
        },
        plugins: {
          legend: { display: false },
          senaPerfilFondos: escalaItems,
          senaLinea50: true,
          tooltip: {
            callbacks: {
              afterLabel: function (tooltipCtx) {
                var i = tooltipCtx.dataIndex;
                var it = escalaItems[i];
                if (!it) return '';
                var tVal =
                  tooltipCtx.parsed.x !== undefined && tooltipCtx.parsed.x !== null
                    ? tooltipCtx.parsed.x
                    : it.valor;
                var z = SI.interpretarZonaManual
                  ? SI.interpretarZonaManual(tVal, it.polaridad)
                  : SI.interpretarT(tVal).etiqueta;
                return z + ' (referencia general T; ver manual TEA)';
              }
            }
          }
        }
      }
    });
  } else {
    registerManualPerfilPlugins();
    chartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Perfil escalar',
            data: data,
            backgroundColor: data.map(function (v) {
              return colorBarraPeManual(v);
            }),
            borderColor: 'rgba(15, 23, 42, 0.3)',
            borderWidth: 1,
            borderRadius: 4,
            maxBarThickness: 22
          }
        ]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        layout: { padding: { right: 8 } },
        scales: {
          x: {
            type: 'linear',
            min: 0,
            max: 19,
            title: { display: true, text: 'Escala tipo PE (0\u201319; referencia M=10)' },
            ticks: { stepSize: 1, maxTicksLimit: 22, font: { size: 10 } },
            grid: { color: 'rgba(148, 163, 184, 0.35)' }
          },
          y: {
            type: 'category',
            reverse: true,
            grid: { display: false },
            ticks: { font: { size: 11 }, maxRotation: 0 }
          }
        },
        plugins: {
          legend: { display: false },
          manualPerfilHoja: {
            fondosPe: true,
            lineas: [{ valor: 10, color: 'rgba(51, 65, 85, 0.7)', dash: [5, 4] }],
            mostrarValores: true
          },
          tooltip: {
            callbacks: {
              afterLabel: function (tooltipCtx) {
                var i = tooltipCtx.dataIndex;
                return cfg.Baremos.interpretarEscala(escalaItems[i].valor).etiqueta;
              }
            }
          }
        }
      }
    });
  }
  actualizarGraficoRadar(escalaItems, labels, data, esSena);
  actualizarDiagramaPolar(escalaItems, esSena);
}

/**
 * Radar tipo perfil CCR (Chart.js): mismo eje 1-19 en cada dimension.
 * Referencia visual: https://jovial-cobbler-da27f2.netlify.app/
 */
function actualizarGraficoRadarVacio() {
  var ctx = $id('grafico-radar');
  if (!ctx) return;
  if (chartRadarInstance) chartRadarInstance.destroy();
  chartRadarInstance = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ['\u2014'],
      datasets: [
        {
          label: 'Escala',
          data: [10],
          borderColor: 'rgba(148, 163, 184, 0.25)',
          backgroundColor: 'rgba(148, 163, 184, 0.06)',
          borderWidth: 1,
          borderDash: [4, 4],
          pointRadius: 0
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
          min: 1,
          max: 19,
          ticks: { stepSize: 2, showLabelBackdrop: false },
          angleLines: { color: 'rgba(148, 163, 184, 0.35)' },
          grid: { color: 'rgba(148, 163, 184, 0.25)' },
          pointLabels: { font: { size: 11 } }
        }
      },
      plugins: { legend: { display: false }, tooltip: { enabled: false } }
    }
  });
}

function actualizarGraficoRadar(escalaItems, labels, data, esSena) {
  var ctx = $id('grafico-radar');
  if (!ctx) return;
  if (chartRadarInstance) chartRadarInstance.destroy();
  var esCelf5 = $id('bateria').value === 'celf5';
  var SI = global.SenaInterpretacion;
  var plFont = labels.length > 14 ? 7 : labels.length > 10 ? 8 : labels.length > 8 ? 9 : 10;
  var colors = data.map(function (v, i) {
    if (esSena && SI) {
      return SI.colorBarraT(v, escalaItems[i].polaridad || 'problema');
    }
    if (v < 7) return 'rgba(225, 29, 72, 0.85)';
    if (v < 9) return 'rgba(128, 24, 54, 0.82)';
    if (v <= 12) return 'rgba(100, 116, 139, 0.85)';
    return 'rgba(5, 150, 105, 0.85)';
  });
  var rMin = esSena ? 10 : 1;
  var rMax = esSena ? 90 : 19;
  chartRadarInstance = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: labels,
      datasets: [
        {
          label: esCelf5 ? 'PE CELF-5' : 'Puntuacion escala',
          data: data,
          fill: true,
          backgroundColor: esCelf5 ? 'rgba(13, 148, 136, 0.2)' : 'rgba(2, 132, 199, 0.22)',
          borderColor: esCelf5 ? 'rgba(13, 148, 136, 0.95)' : 'rgba(2, 132, 199, 0.95)',
          pointBackgroundColor: colors,
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          borderWidth: 2,
          pointRadius: 4
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: 'nearest', intersect: false },
      scales: {
        r: {
          min: rMin,
          max: rMax,
          ticks: {
            stepSize: esSena ? 10 : 2,
            showLabelBackdrop: false,
            precision: 0
          },
          angleLines: { color: 'rgba(148, 163, 184, 0.35)' },
          grid: { color: 'rgba(148, 163, 184, 0.25)' },
          pointLabels: {
            font: { size: plFont }
          }
        }
      },
      elements: {
        line: { borderJoinStyle: 'round' }
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: function (tooltipCtx) {
              var i = tooltipCtx.dataIndex;
              if (typeof i !== 'number' || escalaItems[i] == null) return '';
              if (esSena && SI) {
                var tlab = SI.interpretarZonaManual
                  ? SI.interpretarZonaManual(escalaItems[i].valor, escalaItems[i].polaridad)
                  : SI.interpretarT(escalaItems[i].valor).etiqueta;
                return 'T ' + data[i] + ' \u2014 ' + tlab;
              }
              return (
                'Escala ' +
                data[i] +
                ' \u2014 ' +
                cfg.Baremos.interpretarEscala(escalaItems[i].valor).etiqueta
              );
            }
          }
        }
      }
    }
  });
}

/**
 * Sectores con radio proporcional (logica DCO: rr = rm + (r-rm)*p).
 * https://fastidious-pudding-277df2.netlify.app/
 */
function tToPseudo119(t) {
  if (t == null || Number.isNaN(Number(t))) return 10;
  var x = Math.min(90, Math.max(10, Number(t)));
  return 1 + ((x - 10) / 80) * 18;
}

function actualizarDiagramaPolar(escalaItems, esSena) {
  var svg = $id('diagrama-polar');
  var DP = window.DiagramaPolarDCO;
  if (!svg || !DP) return;
  if (!escalaItems.length) {
    svg.innerHTML = '';
    var ns = 'http://www.w3.org/2000/svg';
    var t = document.createElementNS(ns, 'text');
    t.setAttribute('x', '400');
    t.setAttribute('y', '400');
    t.setAttribute('text-anchor', 'middle');
    t.setAttribute('fill', '#94a3b8');
    t.setAttribute('font-size', '18');
    t.textContent = 'Sin datos de escala';
    svg.appendChild(t);
    return;
  }
  var norms = escalaItems.map(function (r) {
    var v = esSena ? tToPseudo119(r.valor) : r.valor;
    return DP.normalizarEscala119(v);
  });
  var polarLabels = escalaItems.map(function (r) {
    return r.abrev || (r.nombre.length > 10 ? r.nombre.slice(0, 9) + '\u2026' : r.nombre);
  });
  DP.render(svg, norms, {
    cx: 400,
    cy: 400,
    r: 250,
    rm: 70,
    offsetDeg: 36,
    labels: polarLabels
  });
}
  global.OrientacionGraficos = {
    configure: configure,
    actualizarGraficoCompuestos: actualizarGraficoCompuestos,
    actualizarGraficoCompuestosWisc: actualizarGraficoCompuestosWisc,
    actualizarCampanaCIT: actualizarCampanaCIT,
    actualizarGrafico: actualizarGrafico,
    actualizarGraficoRadarVacio: actualizarGraficoRadarVacio,
    actualizarGraficoRadar: actualizarGraficoRadar,
    actualizarDiagramaPolar: actualizarDiagramaPolar
  };
})(typeof window !== 'undefined' ? window : this);
