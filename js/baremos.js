/**
 * Interpretacion por rangos (escala 1-19, CI) y conversion bruta->escala simulada (no WISC-V).
 * WISC-V: las PE y los CI se introducen a mano desde el manual Pearson; sin conversion automatica aqui.
 */
(function (global) {
  'use strict';

  var RANGOS_ESCALA = [
    { max: 3, etiqueta: 'Muy bajo', clase: 'text-rose-700' },
    { max: 5, etiqueta: 'Bajo', clase: 'text-amber-700' },
    { max: 7, etiqueta: 'Medio-bajo', clase: 'text-amber-700' },
    { max: 12, etiqueta: 'Medio', clase: 'text-slate-700' },
    { max: 14, etiqueta: 'Medio-alto', clase: 'text-emerald-700' },
    { max: 16, etiqueta: 'Alto', clase: 'text-emerald-700' },
    { max: Infinity, etiqueta: 'Muy alto', clase: 'text-violet-700' }
  ];

  var RANGOS_CI = [
    { max: 70, etiqueta: 'Muy bajo' },
    { max: 79, etiqueta: 'Baja' },
    { max: 89, etiqueta: 'Media/baja' },
    { max: 109, etiqueta: 'Media' },
    { max: 119, etiqueta: 'Media/alta' },
    { max: 129, etiqueta: 'Alto' },
    { max: Infinity, etiqueta: 'Muy alto' }
  ];

  function interpretarEscala(puntuacion) {
    var n = Number(puntuacion);
    if (Number.isNaN(n)) {
      return { etiqueta: 'Sin dato', clase: 'text-slate-400' };
    }
    for (var i = 0; i < RANGOS_ESCALA.length; i++) {
      if (n <= RANGOS_ESCALA[i].max) {
        return { etiqueta: RANGOS_ESCALA[i].etiqueta, clase: RANGOS_ESCALA[i].clase };
      }
    }
    return { etiqueta: '\u2014', clase: 'text-slate-500' };
  }

  function interpretarCI(ci) {
    var n = Number(ci);
    if (Number.isNaN(n)) return 'Sin dato';
    for (var i = 0; i < RANGOS_CI.length; i++) {
      if (n <= RANGOS_CI[i].max) return RANGOS_CI[i].etiqueta;
    }
    return '\u2014';
  }

  function rangoEscala(puntuacion) {
    return interpretarEscala(puntuacion).etiqueta.toLowerCase();
  }

  function rangoCI(ci) {
    return interpretarCI(ci).toLowerCase();
  }

  /**
   * Simulacion generica bruta -> escala (no clinica).
   */
  function brutaAEscalaSimulada(bruta, indice) {
    var b = Number(bruta);
    if (Number.isNaN(b)) return null;
    var sesgo = (String(indice).length % 7) * 0.3;
    var escala = Math.min(19, Math.max(1, Math.round(10 + (b - 20) * 0.15 + sesgo)));
    return escala;
  }

  /**
   * CDF normal estandar (aprox. Abramowitz-Stegun). Para percentil ~ a partir de IC (M=100, DE=15).
   */
  function normalCDF(z) {
    var a1 = 0.254829592;
    var a2 = -0.284496736;
    var a3 = 1.421413741;
    var a4 = -1.453152027;
    var a5 = 1.061405429;
    var p = 0.3275911;
    var sign = z < 0 ? -1 : 1;
    var x = Math.abs(z) / Math.SQRT2;
    var t = 1.0 / (1.0 + p * x);
    var y =
      1.0 -
      (((((a5 * t + a4) * t + a3) * t + a2) * t + a1) * t * Math.exp(-x * x));
    return 0.5 * (1.0 + sign * y);
  }

  /**
   * Percentil aproximado (0-100) desde puntuacion compuesta tipo IC.
   * Supone distribucion normal M=100, DE=15 (verificar con tablas del manual).
   */
  function percentilAproxDesdeIC(ic) {
    var n = Number(ic);
    if (Number.isNaN(n)) return null;
    var z = (n - 100) / 15;
    return Math.round(normalCDF(z) * 1000) / 10;
  }

  global.Baremos = {
    interpretarEscala: interpretarEscala,
    interpretarCI: interpretarCI,
    rangoEscala: rangoEscala,
    rangoCI: rangoCI,
    brutaAEscalaSimulada: brutaAEscalaSimulada,
    normalCDF: normalCDF,
    percentilAproxDesdeIC: percentilAproxDesdeIC,
    RANGOS_ESCALA: RANGOS_ESCALA,
    RANGOS_CI: RANGOS_CI
  };
})(typeof window !== 'undefined' ? window : this);
