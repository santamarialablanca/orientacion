/**
 * Filtrado de items CELF-5 por banda de edad del manual (cuadernillos distintos).
 * celfBandas en cada item: p. ej. ['5-8']. Contrastar con el ejemplar administrado.
 */
(function (global) {
  'use strict';

  var BANDAS = ['5-8', '9-12', '13-21'];

  function normalizar(banda) {
    return BANDAS.indexOf(banda) >= 0 ? banda : '5-8';
  }

  /**
   * @param {object[]} items - PERFILES_BATERIA.celf5
   * @param {string} banda - '5-8' | '9-12' | '13-21'
   */
  function filtrar(items, banda) {
    var b = normalizar(banda);
    var out = [];
    for (var i = 0; i < items.length; i++) {
      var it = items[i];
      var allowed = it.celfBandas;
      if (!allowed || !allowed.length) continue;
      if (allowed.indexOf(b) >= 0) out.push(it);
    }
    return out;
  }

  global.Celf5Filtro = {
    filtrar: filtrar,
    BANDAS: BANDAS
  };
})(typeof window !== 'undefined' ? window : this);
