/**
 * Interpretacion orientativa de puntuaciones tipo T (M=50, DE=10) habituales en informes clinicos.
 * Zonas de la hoja de perfil (problemas / vulnerabilidades vs recursos) alineadas con el manual TEA.
 */
(function (global) {
  'use strict';

  var RANGOS_T = [
    { max: 32, etiqueta: 'Muy bajo / clinico (orientativo)', clase: 'text-rose-700' },
    { max: 36, etiqueta: 'Bajo (orientativo)', clase: 'text-amber-700' },
    { max: 43, etiqueta: 'Limite bajo (orientativo)', clase: 'text-amber-800' },
    { max: 57, etiqueta: 'Media (T 44-57 aprox.)', clase: 'text-slate-700' },
    { max: 64, etiqueta: 'Limite alto (orientativo)', clase: 'text-sky-800' },
    { max: 69, etiqueta: 'Elevado (orientativo)', clase: 'text-orange-700' },
    { max: Infinity, etiqueta: 'Muy elevado / clinico (orientativo)', clase: 'text-rose-800' }
  ];

  /**
   * @param {number|string|null} t - puntuacion T (habitual 20-80 en informes)
   * @returns {{ etiqueta: string, clase: string }}
   */
  function interpretarT(t) {
    var n = Number(t);
    if (Number.isNaN(n) || t === '' || t == null) {
      return { etiqueta: 'Sin dato', clase: 'text-slate-400' };
    }
    var v = Math.round(n);
    for (var i = 0; i < RANGOS_T.length; i++) {
      if (v <= RANGOS_T[i].max) {
        return { etiqueta: RANGOS_T[i].etiqueta, clase: RANGOS_T[i].clase };
      }
    }
    return { etiqueta: '\u2014', clase: 'text-slate-500' };
  }

  /** Texto breve para leyenda (sin clases CSS). */
  function etiquetaTTexto(t) {
    return interpretarT(t).etiqueta;
  }

  /**
   * Color de la barra del perfil (hoja oficial: barras verdes sobre bandas de fondo).
   */
  function colorBarraT(t, polaridad) {
    var n = Number(t);
    if (Number.isNaN(n)) return 'rgba(148, 163, 184, 0.45)';
    return 'rgba(22, 163, 74, 0.92)';
  }

  /**
   * Interpretacion por zonas del manual (problemas: T alto = mas indicadores; recursos: T bajo = menos recursos).
   */
  function interpretarZonaManual(t, polaridad) {
    var n = Number(t);
    if (Number.isNaN(n) || t === '' || t == null) {
      return 'Sin dato';
    }
    var v = Math.round(n);
    var pol = polaridad || 'problema';
    if (pol === 'neutral') {
      return 'Escala de control (validez); ver manual TEA';
    }
    if (pol === 'recurso') {
      if (v < 30) return 'Clinico (recursos bajos)';
      if (v < 40) return 'En riesgo (recursos bajos)';
      if (v < 60) return 'Adecuado';
      return 'Alto (fortaleza)';
    }
    if (v < 60) return 'Adecuado';
    if (v < 70) return 'En riesgo';
    return 'Clinico elevado';
  }

  global.SenaInterpretacion = {
    interpretarT: interpretarT,
    etiquetaTTexto: etiquetaTTexto,
    colorBarraT: colorBarraT,
    interpretarZonaManual: interpretarZonaManual,
    RANGOS_T: RANGOS_T,
    notaLegal:
      'Las categorias T son orientativas (referencia M=50, DE=10). Los cortes clinicos del SENA figuran en el manual y en la hoja de perfil TEA Ediciones.'
  };
})(typeof window !== 'undefined' ? window : this);
