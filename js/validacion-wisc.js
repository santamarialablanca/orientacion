/**
 * Validacion de entradas WISC-V (advertencias; no bloquea el flujo).
 * Funciones puras testeables + ayuda para recorrer el DOM.
 */
(function (global) {
  'use strict';

  var PE_MIN = 1;
  var PE_MAX = 19;
  var IC_MIN = 40;
  var IC_MAX = 160;

  function advertenciaEdad(edadContext) {
    if (!edadContext) return 'Edad cronologica no disponible: no se puede seleccionar la tabla A.1.';
    var anos = Number(edadContext.anos);
    var meses = Number(edadContext.meses);
    if (Number.isNaN(anos) || Number.isNaN(meses)) {
      return 'Edad cronologica no valida: no se puede seleccionar la tabla A.1.';
    }
    if (anos < 6 || anos > 16 || meses < 0 || meses > 11) {
      return 'Edad fuera del rango de baremacion WISC-V disponible (6:0-16:11).';
    }
    return null;
  }

  /**
   * @param {string} raw - valor del input PE
   * @param {string} etiquetaPrueba
   * @returns {string|null}
   */
  function advertenciaPE(raw, etiquetaPrueba) {
    if (raw === '' || raw == null) return null;
    var n = Number(raw);
    if (Number.isNaN(n)) {
      return etiquetaPrueba + ': PE no numerica.';
    }
    var e = Math.round(n);
    if (e < PE_MIN || e > PE_MAX) {
      return (
        etiquetaPrueba +
        ': PE ' +
        e +
        ' fuera del rango valido de puntuacion escalar (' +
        PE_MIN +
        '-' +
        PE_MAX +
        '). Revise el manual.'
      );
    }
    return null;
  }

  /**
   * @param {string} raw
   * @param {string} campo
   * @returns {string|null}
   */
  function advertenciaIC(raw, campo) {
    if (raw === '' || raw == null) return null;
    var n = Number(raw);
    if (Number.isNaN(n)) {
      return campo + ': valor no numerico.';
    }
    var v = Math.round(n);
    if (v < IC_MIN || v > IC_MAX) {
      return (
        campo +
        ': IC ' +
        v +
        ' fuera del rango habitual (' +
        IC_MIN +
        '-' +
        IC_MAX +
        '). Verifique con las tablas del manual.'
      );
    }
    return null;
  }

  /**
   * @param {Document} doc
   * @param {function(string): HTMLElement|null} getById - ej. document.getElementById
   * @param {{ id: string, nombre: string }[]} itemsEscala - items de la bateria WISC
   * @returns {string[]}
   */
  function recolectarAdvertenciasDom(doc, getById, itemsEscala) {
    var adv = [];
    var i;
    for (i = 0; i < itemsEscala.length; i++) {
      var it = itemsEscala[i];
      if (it.tipo !== 'escala') continue;
      var inp = getById('wisc-pe-' + it.id);
      if (!inp) continue;
      var a = advertenciaPE(inp.value, it.nombre || it.id);
      if (a) adv.push(a);
    }
    var prim = global.WiscCuadernillo && global.WiscCuadernillo.INDICES_PRIMARIOS;
    if (prim) {
      for (i = 0; i < prim.length; i++) {
        var id = prim[i];
        var icIn = getById('wisc-ic-' + id);
        if (icIn) {
          var ai = advertenciaIC(icIn.value, 'IC ' + id);
          if (ai) adv.push(ai);
        }
      }
    }
    var icg = getById('wisc-ic-ICG');
    if (icg) {
      var ag = advertenciaIC(icg.value, 'IC ICG');
      if (ag) adv.push(ag);
    }
    var fsiq = getById('inp-fsiq');
    if (fsiq) {
      var af = advertenciaIC(fsiq.value, 'Escala total (CIT)');
      if (af) adv.push(af);
    }
    return adv;
  }

  global.WiscValidacion = {
    PE_MIN: PE_MIN,
    PE_MAX: PE_MAX,
    IC_MIN: IC_MIN,
    IC_MAX: IC_MAX,
    advertenciaPE: advertenciaPE,
    advertenciaIC: advertenciaIC,
    advertenciaEdad: advertenciaEdad,
    recolectarAdvertenciasDom: recolectarAdvertenciasDom
  };
})(typeof window !== 'undefined' ? window : this);
