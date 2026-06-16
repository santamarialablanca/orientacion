/**
 * Vista "Mapa de decision WISC" (Chart.js + contenido estatico).
 * Orientativo; no sustituye el documento en docs/ ni el criterio clinico.
 */
(function (global) {
  'use strict';

  var chartFiltro = null;
  var chartComplementarios = null;

  function getCanvas(id) {
    return document.getElementById(id);
  }

  function destroyIfChart(inst) {
    if (inst && typeof inst.destroy === 'function') {
      inst.destroy();
    }
    return null;
  }

  function initFlujoWiscCharts() {
    if (typeof Chart === 'undefined') return;

    var ctx1 = getCanvas('chart-flujo-filtro-cit');
    var ctx2 = getCanvas('chart-flujo-complementarios');

    chartFiltro = destroyIfChart(chartFiltro);
    chartComplementarios = destroyIfChart(chartComplementarios);

    if (ctx1) {
      chartFiltro = new Chart(ctx1, {
        type: 'doughnut',
        data: {
          labels: ['CI < 60 (DI / ABAS-II)', 'CI > 130 (AACC / RIAS, BAS-II�)', 'CI normal (analizar patron)'],
          datasets: [
            {
              data: [1, 1, 3],
              backgroundColor: ['rgba(220, 38, 38, 0.85)', 'rgba(22, 163, 74, 0.85)', 'rgba(128, 24, 54, 0.9)'],
              borderWidth: 2,
              borderColor: '#fff'
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          plugins: {
            legend: { position: 'bottom', labels: { boxWidth: 12, font: { size: 11 } } },
            title: {
              display: true,
              text: 'Primer filtro global (ilustrativo)',
              font: { size: 13, weight: '600' }
            },
            tooltip: {
              callbacks: {
                label: function (ctx) {
                  return ctx.label || '';
                }
              }
            }
          }
        }
      });
    }

    if (ctx2) {
      chartComplementarios = new Chart(ctx2, {
        type: 'bar',
        data: {
          labels: ['TEL', 'TDAH', 'Dislexia', 'Discalculia', 'Conducta', 'TEA'],
          datasets: [
            {
              label: 'Herramientas complementarias (recuento orientativo en el mapa)',
              data: [2, 2, 2, 1, 3, 4],
              backgroundColor: [
                'rgba(99, 102, 241, 0.75)',
                'rgba(234, 88, 12, 0.75)',
                'rgba(14, 165, 233, 0.75)',
                'rgba(147, 51, 234, 0.75)',
                'rgba(220, 38, 38, 0.7)',
                'rgba(5, 150, 105, 0.75)'
              ],
              borderRadius: 6
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          indexAxis: 'y',
          scales: {
            x: {
              beginAtZero: true,
              max: 6,
              ticks: { stepSize: 1 },
              title: { display: true, text: 'N. aproximado de pruebas citadas' }
            },
            y: { grid: { display: false } }
          },
          plugins: {
            legend: { display: false },
            title: {
              display: true,
              text: 'Eje transversal: pruebas por area (tras CIT normal)',
              font: { size: 13, weight: '600' }
            }
          }
        }
      });
    }
  }

  function destroyFlujoWiscCharts() {
    chartFiltro = destroyIfChart(chartFiltro);
    chartComplementarios = destroyIfChart(chartComplementarios);
  }

  global.initFlujoWiscCharts = initFlujoWiscCharts;
  global.destroyFlujoWiscCharts = destroyFlujoWiscCharts;
})(typeof window !== 'undefined' ? window : this);
