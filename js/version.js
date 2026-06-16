/**
 * Metadatos de la aplicacion (trazabilidad en informes y documentacion).
 */
(function (global) {
  'use strict';
  global.OrientacionApp = global.OrientacionApp || {};
  global.OrientacionApp.VERSION = '0.4.0';
  /** Debe coincidir con el script Chart.js en index.html */
  global.OrientacionApp.CHART_JS_VERSION = '4.4.1';

  /**
   * Linea para pie de informe / auditoria.
   * @param {Date} [ahora]
   */
  global.OrientacionApp.lineaGeneracion = function (ahora) {
    var d = ahora || new Date();
    var iso = d.toISOString().slice(0, 19).replace('T', ' ');
    return 'Generado: ' + iso + ' UTC | Orientacion v' + global.OrientacionApp.VERSION;
  };
})(typeof window !== 'undefined' ? window : this);
