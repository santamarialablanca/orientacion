/**
 * Filtrado de items SENA por informante y banda de edad (formulario manual TEA).
 * Los metadatos en cada item (senaInformantes / senaEdades) son orientativos;
 * contrastar con el ejemplar concreto (Infantil-Familia, Primaria-Escuela, etc.).
 */
(function (global) {
  'use strict';

  var INF = ['familia', 'escuela', 'autoinforme'];
  var EDAD = ['infantil', 'primaria', 'secundaria'];

  function normalizarLista(allowed, fallback) {
    if (!allowed || !allowed.length) return fallback.slice();
    return allowed;
  }

  /**
   * @param {object[]} items - PERFILES_BATERIA.sena
   * @param {string} informante - familia | escuela | autoinforme
   * @param {string} bandaEdad - infantil | primaria | secundaria
   * @returns {object[]}
   */
  function filtrar(items, informante, bandaEdad) {
    var inf = INF.indexOf(informante) >= 0 ? informante : 'familia';
    var ed = EDAD.indexOf(bandaEdad) >= 0 ? bandaEdad : 'primaria';

    if (inf === 'autoinforme' && ed === 'infantil') {
      return [];
    }

    var out = [];
    for (var i = 0; i < items.length; i++) {
      var it = items[i];
      var infOk = normalizarLista(it.senaInformantes, INF).indexOf(inf) >= 0;
      var edOk = normalizarLista(it.senaEdades, EDAD).indexOf(ed) >= 0;
      if (infOk && edOk) out.push(it);
    }
    return out;
  }

  function mensajeVacio(informante, bandaEdad) {
    if (informante === 'autoinforme' && bandaEdad === 'infantil') {
      return (
        'No hay formulario de autoinforme equivalente en educacion infantil (3-6) en la logica habitual del SENA; use Familia o Escuela, o consulte el manual para la entrevista en 6-8 anos (primaria).'
      );
    }
    return '';
  }

  global.SenaFiltro = {
    filtrar: filtrar,
    mensajeVacio: mensajeVacio,
    INFORMANTES: INF,
    BANDAS_EDAD: EDAD
  };
})(typeof window !== 'undefined' ? window : this);
