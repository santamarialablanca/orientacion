/**
 * Roadmap: modelo de datos por instrumento (items, cortes, interpretacion) antes de UI.
 * Flujo general: bateria cognitiva por edad (WPPSI-IV infantil, WISC-V escolar) -> criterios -> pruebas complementarias.
 */
(function (global) {
  'use strict';
  global.OrientacionInstrumentosRoadmap = {
    version: 2,
    flujoPrimario: {
      infantil: 'WPPSI-IV',
      escolar: 'WISC-V',
      nota:
        'Los IC y percentiles deben contrastarse con tablas por edad; el modulo orientativo usa IC ya introducidos (manual o software homologado).'
    },
    ramas: [
      {
        id: 'tel',
        etiqueta: 'TEL / lenguaje',
        criteriosResumen:
          'ICV bajo; IVE e IRF claramente por encima del ICV (notas clinicas: al menos ~20 puntos).',
        testsSiguientes: ['CELF-5', 'PLON-R', 'CEG']
      },
      {
        id: 'tdah',
        etiqueta: 'TDAH / atencion',
        criteriosResumen:
          'IMT e IVP bajos frente a ICV, IVE e IRF; calcular ICG cuando aplique (manual).',
        testsSiguientes: ['ATENTO', 'ENFEN', 'ICG (tabla manual)']
      },
      {
        id: 'dislexia',
        etiqueta: 'Dislexia / lectura',
        criteriosResumen:
          'Indices en rango medio con dificultad lectora; confirmar con pruebas de proceso lector.',
        testsSiguientes: ['PROLEXIA', 'PROLEC']
      },
      {
        id: 'discalculia',
        etiqueta: 'Discalculia',
        criteriosResumen:
          'Patrones con IMT/IRF bajos segun subtests; integrar pruebas curriculares.',
        testsSiguientes: ['PREDISCAL']
      },
      {
        id: 'aacc',
        etiqueta: 'Altas capacidades',
        criteriosResumen:
          'Heuristica en app: CIT y los cinco indices primarios >= 130 (homogeneo alto). CIT alto con dispersion o indices incompletos: mensaje aparte; protocolos (p. ej. PEAC) suelen exigir coherencia.',
        testsSiguientes: ['RIAS', 'BAS II', 'CREA / CTI / PIC-N', 'SENA']
      },
      {
        id: 'conducta',
        etiqueta: 'Conducta',
        criteriosResumen:
          'Integrar escala de problemas conductuales / emocionales en SENA y otros cuestionarios.',
        testsSiguientes: ['SENA', 'ATENTO', 'ABAS II']
      },
      {
        id: 'tea',
        etiqueta: 'TEA',
        criteriosResumen:
          'Cribados para padres/profesores y comportamiento adaptativo; no dependen solo del WISC.',
        testsSiguientes: ['EDAI', 'CARS', 'M-CHAT', 'SCQ (corte orientativo 15)', 'ABAS II']
      }
    ],
    proximos: [
      'WPPSI-IV',
      'PLON-R',
      'CARS',
      'M-CHAT',
      'SCQ',
      'ABAS II',
      'RIAS'
    ],
    sena: {
      referenciaEditor: 'Fernandez-Pinto, I., et al. (2015). SENA. Manual de aplicacion, correccion e interpretacion. TEA Ediciones.',
      modeloEnApp:
        'js/sena-modelo.js, sena-filtro.js (informante + banda de edad), perfiles.sena (metadatos senaInformantes/senaEdades por escala).'
    },
    celf5: {
      referenciaEditor: 'CELF-5 (Pearson). Manual de aplicacion y correccion; cuadernillos por banda de edad.',
      modeloEnApp:
        'js/celf5-modelo.js, celf5-filtro.js (banda 5-8 / 9-12 / 13-21), perfiles.celf5 (celfBandas, celfBloque receptivo/expresivo).'
    },
    nota:
      'Cada instrumento nuevo debe mapear items, baremos y textos legales del editor; evitar duplicar logica de conversion fuera de modulos dedicados.'
  };
})(typeof window !== 'undefined' ? window : this);
