/**
 * Importacion futura de PE/IC desde CSV o software homologado.
 * Formato previsto: una fila por subtest: id_subtest,PE o id_subtest;PE
 */
(function (global) {
  'use strict';

  /**
   * @param {string} texto
   * @returns {{ id: string, pe: number }[]}
   */
  function parseFilasPE(texto) {
    var out = [];
    if (!texto || !String(texto).trim()) return out;
    var lineas = String(texto).split(/\r?\n/);
    for (var i = 0; i < lineas.length; i++) {
      var ln = lineas[i].trim();
      if (!ln || ln.indexOf('#') === 0) continue;
      var sep = ln.indexOf(',') >= 0 ? ',' : ln.indexOf(';') >= 0 ? ';' : '\t';
      var partes = ln.split(sep);
      if (partes.length < 2) continue;
      var id = partes[0].trim().toLowerCase();
      var pe = parseInt(partes[1].trim(), 10);
      if (!id || Number.isNaN(pe)) continue;
      out.push({ id: id, pe: pe });
    }
    return out;
  }

  /**
   * Aplica PE a inputs wisc-pe-{id} si existen.
   * @param {{ id: string, pe: number }[]} filas
   * @param {function(string): HTMLElement|null} getById
   */
  function aplicarFilasPE(filas, getById) {
    var n = 0;
    for (var i = 0; i < filas.length; i++) {
      var f = filas[i];
      var inp = getById('wisc-pe-' + f.id);
      if (inp) {
        inp.value = String(f.pe);
        n++;
      }
    }
    return n;
  }

  global.OrientacionImportacionWisc = {
    parseFilasPE: parseFilasPE,
    aplicarFilasPE: aplicarFilasPE
  };
})(typeof window !== 'undefined' ? window : this);
