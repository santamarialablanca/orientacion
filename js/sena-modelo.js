/**
 * Metadatos del SENA (Sistema de Evaluacion de Ninos y Adolescentes), TEA Ediciones.
 * Resumen de dominios publico; no reproduce items ni tablas del manual.
 * Referencia: Fernandez-Pinto, I., et al. (2015). Manual de aplicacion, correccion e interpretacion. Madrid: TEA.
 */
(function (global) {
  'use strict';

  global.SenaModelo = {
    version: 3,
    notaFiltro:
      'Informante Familia = hoja Padres (Nivel 3), Escuela = Profesores, Autoinforme = Autoinforme. Primaria/Secundaria: listas alineadas con la hoja de perfil Nivel 3 del manual TEA. El autoinforme en infantil (3-6) no muestra filas: use familia/escuela o consulte el manual.',
    editorial: 'TEA Ediciones (Hogrefe-TEA)',
    edad: {
      infantil: '3-6 anos (educacion infantil)',
      primaria: '6-12 anos (educacion primaria)',
      secundaria: '12-18 anos (educacion secundaria)'
    },
    informantes: [
      { id: 'familia', nombre: 'Familia / cuidadores' },
      { id: 'escuela', nombre: 'Escuela' },
      { id: 'autoinforme', nombre: 'Autoinforme (desde 8 anos; 6-8 entrevista segun manual)' }
    ],
    dominios: [
      'Escalas de control (validez de la respuesta)',
      'Problemas interiorizados y exteriorizados',
      'Problemas contextuales y especificos',
      'Vulnerabilidades y recursos personales',
      'Indices globales e items criticos (manual)'
    ],
    enlacesLectura: [
      {
        titulo: 'Manual de aplicacion (referencia de trabajo; respetar derechos del editor)',
        url: 'https://www.scribd.com/document/699250355/Manual-de-Aplicacion-Test-Sena'
      },
      {
        titulo: 'Manual tecnico (referencia; no sustituye material oficial TEA)',
        url: 'https://www.scribd.com/document/807739985/Sena-Manual-Tecnico'
      },
      {
        titulo: 'Ejemplo de hoja de perfil (terceros; verificar con material oficial TEA)',
        url: 'https://www.scribd.com/document/600095121/Sena-Hoja-de-Perfil-1'
      }
    ]
  };
})(typeof window !== 'undefined' ? window : this);
