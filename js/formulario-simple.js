/**
 * Formulario simple 0-100: rangos demo, tabla, informe y grafico de barras.
 */
(function () {
  'use strict';

  var RANGOS = [
    { max: 39, etiqueta: 'Bajo', color: 'text-rose-700', bg: 'bg-rose-50', bar: 'rgba(225, 29, 72, 0.75)' },
    { max: 69, etiqueta: 'Medio-bajo', color: 'text-amber-700', bg: 'bg-amber-50', bar: 'rgba(128, 24, 54, 0.75)' },
    { max: 84, etiqueta: 'Medio-alto', color: 'text-amber-800', bg: 'bg-amber-50/80', bar: 'rgba(128, 24, 54, 0.75)' },
    { max: 100, etiqueta: 'Alto', color: 'text-emerald-700', bg: 'bg-emerald-50', bar: 'rgba(5, 150, 105, 0.7)' }
  ];

  var DIMENSIONES = [
    { id: 'p1', nombre: 'Comprensi\u00f3n verbal' },
    { id: 'p2', nombre: 'Razonamiento' },
    { id: 'p3', nombre: 'Memoria de trabajo' },
    { id: 'p4', nombre: 'Velocidad / procesamiento' }
  ];

  var EMDASH = '\u2014';
  var ARROW = '\u2192';
  var ELLIPSIS = '\u2026';

  var chartInstancia = null;

  function interpretar(valor) {
    var n = Number(valor);
    if (Number.isNaN(n) || valor === '' || valor === null) {
      return { etiqueta: 'Sin dato', color: 'text-slate-400', bg: 'bg-slate-50', bar: 'rgba(148, 163, 184, 0.5)' };
    }
    n = Math.max(0, Math.min(100, n));
    for (var i = 0; i < RANGOS.length; i++) {
      if (n <= RANGOS[i].max) {
        return {
          etiqueta: RANGOS[i].etiqueta,
          color: RANGOS[i].color,
          bg: RANGOS[i].bg,
          bar: RANGOS[i].bar,
          valor: n
        };
      }
    }
    return { etiqueta: 'Alto', color: 'text-emerald-700', bg: 'bg-emerald-50', bar: 'rgba(5, 150, 105, 0.7)', valor: n };
  }

  function leerPuntuaciones() {
    var filas = [];
    for (var i = 0; i < DIMENSIONES.length; i++) {
      var d = DIMENSIONES[i];
      var el = document.getElementById(d.id);
      var raw = el ? el.value.trim() : '';
      var num = raw === '' ? null : Number(raw);
      filas.push({
        clave: d.id,
        nombre: d.nombre,
        raw: raw,
        numero: num,
        interp: interpretar(raw === '' ? null : num)
      });
    }
    return filas;
  }

  function escapeHtml(s) {
    var div = document.createElement('div');
    div.textContent = s;
    return div.innerHTML;
  }

  function renderTabla(filas) {
    var html =
      '<table class="min-w-full text-left text-sm"><thead><tr class="border-b border-slate-200 bg-slate-50">' +
      '<th class="px-3 py-2 font-semibold text-slate-700">Dimensi\u00f3n</th>' +
      '<th class="px-3 py-2 font-semibold text-slate-700">Puntuaci\u00f3n</th>' +
      '<th class="px-3 py-2 font-semibold text-slate-700">Interpretaci\u00f3n</th></tr></thead><tbody>';
    for (var i = 0; i < filas.length; i++) {
      var f = filas[i];
      var punt = f.numero === null ? EMDASH : String(f.numero);
      html +=
        '<tr class="border-b border-slate-100">' +
        '<td class="px-3 py-2 text-slate-800">' +
        escapeHtml(f.nombre) +
        '</td>' +
        '<td class="px-3 py-2 font-mono">' +
        punt +
        '</td>' +
        '<td class="px-3 py-2"><span class="inline-flex rounded px-2 py-0.5 text-xs font-medium ' +
        f.interp.bg +
        ' ' +
        f.interp.color +
        '">' +
        escapeHtml(f.interp.etiqueta) +
        '</span></td></tr>';
    }
    html += '</tbody></table>';
    return html;
  }

  function mediaValidos(filas) {
    var sum = 0;
    var c = 0;
    for (var i = 0; i < filas.length; i++) {
      if (filas[i].numero !== null && !Number.isNaN(filas[i].numero)) {
        sum += filas[i].numero;
        c++;
      }
    }
    return c === 0 ? null : sum / c;
  }

  function generarInforme(filas, nombre, fecha) {
    var m = mediaValidos(filas);
    var lineas = [];
    lineas.push('=== Informe breve (demo) ===');
    lineas.push('Referencia: ' + (nombre || 'Sin nombre'));
    lineas.push('Fecha: ' + (fecha || 'No indicada'));
    lineas.push('');
    if (m === null) {
      lineas.push('No hay puntuaciones num\u00e9ricas v\u00e1lidas.');
    } else {
      lineas.push('Media de las dimensiones informadas: ' + m.toFixed(1) + ' / 100.');
      lineas.push('Interpretaci\u00f3n global (rangos de ejemplo): ' + interpretar(m).etiqueta + '.');
      lineas.push('');
      lineas.push('Detalle:');
      for (var i = 0; i < filas.length; i++) {
        var f = filas[i];
        if (f.numero === null) {
          lineas.push('- ' + f.nombre + ': sin dato.');
        } else {
          lineas.push('- ' + f.nombre + ': ' + f.numero + ' ' + ARROW + ' ' + f.interp.etiqueta + '.');
        }
      }
    }
    lineas.push('');
    lineas.push('Nota: los rangos son orientativos; sustituir por baremos del instrumento real.');
    return lineas.join('\n');
  }

  function actualizarGrafico(filas) {
    if (typeof Chart === 'undefined') return;
    var labels = [];
    var data = [];
    var colors = [];
    for (var i = 0; i < filas.length; i++) {
      var f = filas[i];
      labels.push(f.nombre.length > 22 ? f.nombre.slice(0, 20) + ELLIPSIS : f.nombre);
      if (f.numero === null) {
        data.push(0);
        colors.push('rgba(148, 163, 184, 0.45)');
      } else {
        data.push(f.numero);
        colors.push(f.interp.bar);
      }
    }
    var ctx = document.getElementById('grafico-resultados');
    if (!ctx) return;
    if (chartInstancia) chartInstancia.destroy();
    chartInstancia = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Puntuaci\u00f3n (0\u2013100)',
            data: data,
            backgroundColor: colors,
            borderRadius: 8
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            min: 0,
            max: 100,
            title: { display: true, text: 'Puntuaci\u00f3n' }
          },
          x: {
            ticks: { maxRotation: 45, minRotation: 0, font: { size: 11 } }
          }
        },
        plugins: {
          legend: { display: false }
        }
      }
    });
  }

  function procesar() {
    var filas = leerPuntuaciones();
    var nombre = document.getElementById('nombre').value.trim();
    var fecha = document.getElementById('fecha').value;

    document.getElementById('resultados-tabla').innerHTML = renderTabla(filas);

    var m = mediaValidos(filas);
    var resumenEl = document.getElementById('resultados-resumen');
    if (m === null) {
      resumenEl.innerHTML =
        '<p class="font-medium text-amber-800">Introduce al menos una puntuaci\u00f3n entre 0 y 100 para obtener una media e interpretaci\u00f3n global.</p>';
    } else {
      var interpM = interpretar(m);
      resumenEl.innerHTML =
        '<p><span class="font-semibold text-slate-900">Media global:</span> ' +
        m.toFixed(1) +
        ' / 100</p>' +
        '<p class="mt-1"><span class="font-semibold text-slate-900">Nivel global (rangos de ejemplo):</span> ' +
        '<span class="' +
        interpM.color +
        '">' +
        escapeHtml(interpM.etiqueta) +
        '</span></p>';
    }

    document.getElementById('informe-simple-texto').textContent = generarInforme(filas, nombre, fecha);

    document.getElementById('seccion-resultados').classList.remove('hidden');
    document.getElementById('seccion-grafica').classList.remove('hidden');
    actualizarGrafico(filas);
  }

  function init() {
    var btn = document.getElementById('btn-procesar');
    if (btn) btn.addEventListener('click', procesar);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
