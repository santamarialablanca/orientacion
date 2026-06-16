/**
 * CELF-5 (Clinical Evaluation of Language Fundamentals � Fifth Edition).
 * Metadatos orientativos; no reproduce items, tablas de conversion ni baremos del editor.
 * Nombres de subpruebas e indices alineados de forma generica al manual; verifique su edicion.
 */
(function (global) {
  'use strict';

  global.Celf5Modelo = {
    version: 1,
    editorial: 'Pearson / adaptacion en castellano segun edicion',
    notaLegal:
      'Las PE (puntuaciones escalares) tienen media 10 y desviacion tipica 3; los IC (indices compuestos) suelen tener media 100 y DE 15. Los valores exactos dependen de la edad cronologica y de las tablas del manual; esta app no calcula conversiones.',
    enlacesLectura: [
      {
        titulo: 'Manual de aplicacion y correccion (referencia Scribd; no sustituye material del editor)',
        url: 'https://www.scribd.com/document/538608023/celf-5-manual-de-aplicacion-y-correccion'
      },
      {
        titulo: 'Cuadernillo de anotacion 5-8 anos (ejemplo en Scribd)',
        url: 'https://www.scribd.com/document/436351600/CELF-5-Cuadernillo-de-anotacio-n-5-8-an-os'
      },
      {
        titulo: 'Ejemplo de anotaciones / resultados (Scribd)',
        url: 'https://www.scribd.com/document/603465721/Cuadernillo-de-Aplicacion-CELF-5'
      },
      {
        titulo: 'Ejemplo de informe (ficticio; Scribd)',
        url: 'https://www.scribd.com/document/434246844/CELF-5-Informe'
      }
    ]
  };
})(typeof window !== 'undefined' ? window : this);
