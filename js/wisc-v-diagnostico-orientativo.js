/**
 * Criterios orientativos a partir de indices compuestos (IC) introducidos en la tabla.
 * Flujo habitual (notas clinicas): primero WISC-V o WPPSI-IV segun edad; luego, segun IC/percentiles,
 * se orientan cribados y baterias complementarias. No constituye diagnostico ni criterios Pearson.
 */
(function (global) {
  'use strict';

  var UMBRAL_ICV_TEL = 80;
  var UMBRAL_DIFERENCIA = 20;
  /** Escala total (CIT) por debajo del cual se sugiere valorar DI / perfil muy bajo (orientativo). */
  var UMBRAL_CIT_DI = 60;
  /** Umbral orientativo altas capacidades (criterios de mesa; contrastar con protocolo local). */
  var UMBRAL_AACC = 130;
  /** Rango "medio" aproximado en IC para patrones tipo dislexia (90-110). */
  var RANGO_MEDIO_LO = 90;
  var RANGO_MEDIO_HI = 110;

  function n(v) {
    if (v == null || v === '') return null;
    var x = Number(v);
    return Number.isNaN(x) ? null : x;
  }

  function textoIntroFlujo() {
    return (
      'En la practica habitual, el primer paso es una bateria cognitiva acorde con la edad: WPPSI-IV en edad infantil ' +
      'y WISC-V en edad escolar. Los resultados se interpretan en percentiles o IC contrastando tablas por edad. ' +
      'A partir de ese perfil (ICV, IVE, IRF, IMT, IVP, CIT, y si aplica ICG) se plantean hipotesis y pruebas ' +
      'complementarias; lo siguiente es orientativo y no sustituye criterio clinico ni manuales oficiales.'
    );
  }

  /** Mismo contenido orientativo que el bloque de conducta en la UI (informe y panel). */
  function textoRecordatorioConducta() {
    return (
      'El perfil cognitivo del WISC-V no criba por si mismo problemas de conducta. Si la historia o la observacion lo sugieren, ' +
      'la valoracion suele integrar cuestionarios y escalas (por ejemplo indices de problemas conductuales o emocionales en SENA, ATENTO, ABAS II) ' +
      'y entrevistas con familia y escuela. Los umbrales y la interpretacion dependen de cada manual y del criterio clinico.\n\n' +
      'Orientativo; no sustituye entrevista clinica ni criterios diagnosticos oficiales.'
    );
  }

  /**
   * TEL (notas): ICV bajo y IVE/IRF al menos 20 puntos por encima de ICV.
   */
  function patronTEL(ICV, IVE, IRF) {
    if (ICV == null || IVE == null || IRF == null) return false;
    if (ICV >= UMBRAL_ICV_TEL) return false;
    return IVE >= ICV + UMBRAL_DIFERENCIA && IRF >= ICV + UMBRAL_DIFERENCIA;
  }

  /**
   * Patron tipo IMT/IVP bajos frente a ICV+IVE+IRF (TDAH / ICG; notas: calcular ICG cuando aplica).
   */
  function patronTDAH_ICG(ICV, IVE, IRF, IMT, IVP) {
    if (ICV == null || IVE == null || IRF == null || IMT == null || IVP == null) return false;
    var m3 = (ICV + IVE + IRF) / 3;
    var m2 = (IMT + IVP) / 2;
    return m3 - m2 >= UMBRAL_DIFERENCIA;
  }

  function todosEnRango(lo, hi, vals) {
    for (var i = 0; i < vals.length; i++) {
      if (vals[i] == null) return false;
      if (vals[i] < lo || vals[i] > hi) return false;
    }
    return true;
  }

  /** Perfil "en media" en los cinco indices y CIT: orientativo para plantear dificultades especificas de aprendizaje si el rendimiento academico no acompana. */
  function patronDislexia(icv, ive, irf, imt, ivp, cit) {
    return todosEnRango(RANGO_MEDIO_LO, RANGO_MEDIO_HI, [icv, ive, irf, imt, ivp, cit]);
  }

  /** IMT e IRF bajos con resto en rango medio (notas: digitos / balanza). */
  function patronDiscalculia(icv, ive, irf, imt, ivp, cit) {
    if (imt == null || irf == null) return false;
    if (imt >= RANGO_MEDIO_LO || irf >= RANGO_MEDIO_LO) return false;
    if (icv == null || ive == null || ivp == null || cit == null) return false;
    return (
      todosEnRango(RANGO_MEDIO_LO, RANGO_MEDIO_HI, [icv, ive, ivp, cit]) &&
      cit >= RANGO_MEDIO_LO &&
      cit <= RANGO_MEDIO_HI
    );
  }

  function indicesPrimariosCompletos(icv, ive, irf, imt, ivp) {
    return icv != null && ive != null && irf != null && imt != null && ivp != null;
  }

  /**
   * AACC homogeneo (notas PEAC): CIT y los cinco indices primarios todos >= umbral.
   */
  function patronAACC_estricto(cit, icv, ive, irf, imt, ivp) {
    if (cit == null || cit < UMBRAL_AACC) return false;
    if (!indicesPrimariosCompletos(icv, ive, irf, imt, ivp)) return false;
    return (
      icv >= UMBRAL_AACC &&
      ive >= UMBRAL_AACC &&
      irf >= UMBRAL_AACC &&
      imt >= UMBRAL_AACC &&
      ivp >= UMBRAL_AACC
    );
  }

  /** CIT alto con los cinco indices informados pero alguno < umbral (perfil heterogeneo). */
  function patronAACC_cit_alto_heterogeneo(cit, icv, ive, irf, imt, ivp) {
    if (cit == null || cit < UMBRAL_AACC) return false;
    if (!indicesPrimariosCompletos(icv, ive, irf, imt, ivp)) return false;
    return !patronAACC_estricto(cit, icv, ive, irf, imt, ivp);
  }

  /** CIT alto pero faltan indices para valorar homogeneidad / programas tipo PEAC. */
  function patronAACC_cit_alto_incompleto(cit, icv, ive, irf, imt, ivp) {
    if (cit == null || cit < UMBRAL_AACC) return false;
    return !indicesPrimariosCompletos(icv, ive, irf, imt, ivp);
  }

  function patronCITbajoDI(cit) {
    return cit != null && cit < UMBRAL_CIT_DI;
  }

  /**
   * @param {{ icv?: number|null, ive?: number|null, irf?: number|null, imt?: number|null, ivp?: number|null, cit?: number|null }} idx
   * @returns {{ codigo: string, titulo: string, texto: string, severidad: string }[]}
   */
  function evaluar(idx) {
    var ICV = n(idx.icv);
    var IVE = n(idx.ive);
    var IRF = n(idx.irf);
    var IMT = n(idx.imt);
    var IVP = n(idx.ivp);
    var CIT = n(idx.cit);
    var hallazgos = [];
    var telEstricto = patronTEL(ICV, IVE, IRF);

    if (patronCITbajoDI(CIT)) {
      hallazgos.push({
        codigo: 'cit_muy_bajo_di',
        titulo: 'CIT muy bajo (orientativo)',
        texto:
          'CIT inferior a ' +
          UMBRAL_CIT_DI +
          ' (valor: ' +
          CIT +
          '). En contexto clinico suele valorarse un perfil de capacidad cognitiva muy bajo y otras fuentes ' +
          '(adaptativo, desarrollo, contexto). No basta un solo dato para diagnostico de discapacidad intelectual; ' +
          'integrar criterios DSM/ICD y evaluacion completa.',
        severidad: 'atencion'
      });
    }

    if (patronAACC_estricto(CIT, ICV, IVE, IRF, IMT, IVP)) {
      hallazgos.push({
        codigo: 'aacc_perfil_homogeneo_alto',
        titulo: 'Altas capacidades: perfil homogeneo alto (orientativo)',
        texto:
          'CIT ' +
          CIT +
          ' y los cinco indices primarios (ICV, IVE, IRF, IMT, IVP) son al menos ' +
          UMBRAL_AACC +
          '. Criterio heuristico alineado a protocolos que exigen coherencia entre indices (p. ej. PEAC en algunos centros). ' +
          'Pruebas complementarias habituales en cribado: RIAS, BAS II, creatividad (CREA/CTI/PIC-N), SENA, etc., segun criterio local.',
        severidad: 'info'
      });
    } else if (patronAACC_cit_alto_heterogeneo(CIT, ICV, IVE, IRF, IMT, IVP)) {
      hallazgos.push({
        codigo: 'aacc_cit_alto_heterogeneo',
        titulo: 'CIT elevado con perfil heterogeneo (orientativo)',
        texto:
          'CIT ' +
          CIT +
          ' (>= ' +
          UMBRAL_AACC +
          ') pero no todos los indices primarios alcanzan ' +
          UMBRAL_AACC +
          '. Puede haber fortalezas puntuales sin perfil homogeneo alto; muchos programas (p. ej. PEAC) no aplican si no hay coherencia entre indices. ' +
          'Valorar AACC y necesidades educativas con criterio clinico y protocolo del centro.',
        severidad: 'info'
      });
    } else if (patronAACC_cit_alto_incompleto(CIT, ICV, IVE, IRF, IMT, IVP)) {
      hallazgos.push({
        codigo: 'aacc_cit_alto_indices_incompletos',
        titulo: 'CIT elevado: complete indices para valorar homogeneidad (orientativo)',
        texto:
          'CIT ' +
          CIT +
          ' (>= ' +
          UMBRAL_AACC +
          ') pero faltan uno o mas indices primarios en la tabla. Para valorar un perfil homogeneo tipo altas capacidades / PEAC ' +
          'suelen necesitarse los cinco indices y el contexto escolar.',
        severidad: 'info'
      });
    }

    if (telEstricto) {
      hallazgos.push({
        codigo: 'tel_criterios_estrictos',
        titulo: 'Patron tipo TEL a explorar (ICV bajo; IVE/IRF altos frente a ICV)',
        texto:
          'ICV ' +
          ICV +
          ' (< ' +
          UMBRAL_ICV_TEL +
          ') con IVE (' +
          IVE +
          ') y IRF (' +
          IRF +
          ') al menos ' +
          UMBRAL_DIFERENCIA +
          ' puntos por encima del ICV. Criterio orientativo alineado a cribado de lenguaje: valorar CELF-5, PLON-R, CEG ' +
          'u otras pruebas de lenguaje segun edad e idioma, mas historia del desarrollo.',
        severidad: 'atencion'
      });
    } else if (ICV != null && ICV < UMBRAL_ICV_TEL) {
      hallazgos.push({
        codigo: 'icv_bajo_tel',
        titulo: 'ICV bajo: explorar lenguaje (orientativo)',
        texto:
          'El ICV es inferior a ' +
          UMBRAL_ICV_TEL +
          ' (valor actual: ' +
          ICV +
          '). Puede asociarse a dificultades en comprension verbal o lenguaje; conviene valorar evaluacion especifica ' +
          '(cribado o bateria de lenguaje) e integrar escolar y clinica. No es por si solo un diagnostico de TEL.',
        severidad: 'atencion'
      });
    }

    if (patronTDAH_ICG(ICV, IVE, IRF, IMT, IVP)) {
      hallazgos.push({
        codigo: 'patron_imt_ivp_tdah_icg',
        titulo: 'IMT e IVP bajos frente a ICV/IVE/IRF (orientativo; ICG)',
        texto:
          'La media de ICV, IVE y IRF supera en al menos ' +
          UMBRAL_DIFERENCIA +
          ' puntos a la media de IMT e IVP. Patron compatible con solicitar ICG en el manual cuando aplique y con cribado ' +
          'de atencion/ejecutivas (p. ej. cuestionarios digitales tipo ATENTO, baterias ENFEN u otras segun protocolo). ' +
          'La confirmacion de TDAH es clinica y multimodal.',
        severidad: 'atencion'
      });
    }

    if (patronDislexia(ICV, IVE, IRF, IMT, IVP, CIT)) {
      hallazgos.push({
        codigo: 'perfil_medio_dislexia',
        titulo: 'Indices en rango medio: plantear lectura si hay queja escolar (orientativo)',
        texto:
          'Los cinco indices y el CIT estan aproximadamente entre ' +
          RANGO_MEDIO_LO +
          ' y ' +
          RANGO_MEDIO_HI +
          '. Si existen dificultades de lectura/escritura pese a este perfil, puede valorarse evaluacion especifica de ' +
          'procesos lectores (p. ej. PROLEC, PROLEXIA digital) segun curso y material disponible.',
        severidad: 'info'
      });
    }

    if (patronDiscalculia(ICV, IVE, IRF, IMT, IVP, CIT)) {
      hallazgos.push({
        codigo: 'patron_discalculia_heuristico',
        titulo: 'IMT e IRF bajos con resto en media (orientativo; discalculia)',
        texto:
          'IMT (' +
          IMT +
          ') e IRF (' +
          IRF +
          ') por debajo de ' +
          RANGO_MEDIO_LO +
          ' con otros indices y CIT en rango medio. Patron heuristico compatible con explorar dificultades de calculo ' +
          '(p. ej. PREDISCAL u otras) e integrar pruebas curriculares de matematicas.',
        severidad: 'atencion'
      });
    }

    if (!telEstricto && ICV != null && IVE != null && Math.abs(IVE - ICV) > UMBRAL_DIFERENCIA) {
      var d = Math.abs(IVE - ICV);
      var txt;
      if (IVE > ICV) {
        txt =
          'La puntuacion IVE (' +
          IVE +
          ') supera al ICV (' +
          ICV +
          ') en mas de ' +
          UMBRAL_DIFERENCIA +
          ' puntos (diferencia ' +
          d +
          '). Fortaleza visuoespacial relativa frente al verbal; interpretar con criterio clinico y tablas de discrepancia del manual si aplica.';
      } else {
        txt =
          'El ICV (' +
          ICV +
          ') supera a la IVE (' +
          IVE +
          ') en mas de ' +
          UMBRAL_DIFERENCIA +
          ' puntos (diferencia ' +
          d +
          '). Fortaleza verbal relativa frente al visuoespacial; integrar con observacion y criterios del manual.';
      }
      hallazgos.push({
        codigo: 'discrepancia_ive_icv',
        titulo: 'Discrepancia marcada entre ICV e IVE',
        texto: txt,
        severidad: 'info'
      });
    }

    function pushDiscrepanciaVsICV(otro, etiqueta, codigo, titulo) {
      if (ICV == null || otro == null || Math.abs(otro - ICV) <= UMBRAL_DIFERENCIA) return;
      var d = Math.abs(otro - ICV);
      var txt;
      if (otro > ICV) {
        txt =
          'La puntuacion ' +
          etiqueta +
          ' (' +
          otro +
          ') supera al ICV (' +
          ICV +
          ') en mas de ' +
          UMBRAL_DIFERENCIA +
          ' puntos (diferencia ' +
          d +
          '). Valorar significacion clinica y tablas de discrepancia del manual (orientativo).';
      } else {
        txt =
          'El ICV (' +
          ICV +
          ') supera a ' +
          etiqueta +
          ' (' +
          otro +
          ') en mas de ' +
          UMBRAL_DIFERENCIA +
          ' puntos (diferencia ' +
          d +
          '). Interpretar en contexto segun manual.';
      }
      hallazgos.push({
        codigo: codigo,
        titulo: titulo,
        texto: txt,
        severidad: 'info'
      });
    }

    pushDiscrepanciaVsICV(IMT, 'IMT', 'discrepancia_imt_icv', 'Discrepancia marcada entre ICV e IMT');
    pushDiscrepanciaVsICV(IVP, 'IVP', 'discrepancia_ivp_icv', 'Discrepancia marcada entre ICV e IVP');

    if (!telEstricto && ICV != null && IRF != null && Math.abs(IRF - ICV) > UMBRAL_DIFERENCIA) {
      var d2 = Math.abs(IRF - ICV);
      var txt2;
      if (IRF > ICV) {
        txt2 =
          'La puntuacion IRF (' +
          IRF +
          ') supera al ICV (' +
          ICV +
          ') en mas de ' +
          UMBRAL_DIFERENCIA +
          ' puntos (diferencia ' +
          d2 +
          '). Razonamiento fluido relativamente mas alto que comprension verbal; valorar significacion clinica y criterios del manual.';
      } else {
        txt2 =
          'El ICV (' +
          ICV +
          ') supera al IRF (' +
          IRF +
          ') en mas de ' +
          UMBRAL_DIFERENCIA +
          ' puntos (diferencia ' +
          d2 +
          '). Patron verbal relativamente mas fuerte que razonamiento fluido; interpretar en contexto.';
      }
      hallazgos.push({
        codigo: 'discrepancia_irf_icv',
        titulo: 'Discrepancia marcada entre ICV e IRF',
        texto: txt2,
        severidad: 'info'
      });
    }

    if (
      hallazgos.length === 0 &&
      (ICV != null || IVE != null || IRF != null || IMT != null || IVP != null || CIT != null)
    ) {
      hallazgos.push({
        codigo: 'sin_flags',
        titulo: 'Sin criterios heuristicos adicionales activados',
        texto:
          'Con los indices informados no se cumplen las reglas configuradas (CIT < ' +
          UMBRAL_CIT_DI +
          ', AACC estricto con 5 indices >= ' +
          UMBRAL_AACC +
          ', CIT alto heterogeneo/incompleto, patron TEL estricto, patron IMT/IVP vs otros, perfil medio dislexia, discalculia heuristica, ' +
          'ni discrepancias > ' +
          UMBRAL_DIFERENCIA +
          ' puntos entre ICV e IVE/IRF/IMT/IVP). La interpretacion completa sigue dependiendo del profesional, del manual y del contexto.',
        severidad: 'ok'
      });
    }

    return hallazgos;
  }

  global.WiscDiagnosticoOrientativo = {
    evaluar: evaluar,
    textoIntroFlujo: textoIntroFlujo,
    textoRecordatorioConducta: textoRecordatorioConducta,
    patronTEL: patronTEL,
    patronTDAH_ICG: patronTDAH_ICG,
    patronDislexia: patronDislexia,
    patronDiscalculia: patronDiscalculia,
    patronAACC_estricto: patronAACC_estricto,
    patronAACC_cit_alto_heterogeneo: patronAACC_cit_alto_heterogeneo,
    patronAACC_cit_alto_incompleto: patronAACC_cit_alto_incompleto,
    indicesPrimariosCompletos: indicesPrimariosCompletos,
    UMBRAL_ICV_TEL: UMBRAL_ICV_TEL,
    UMBRAL_DIFERENCIA: UMBRAL_DIFERENCIA,
    UMBRAL_CIT_DI: UMBRAL_CIT_DI,
    UMBRAL_AACC: UMBRAL_AACC,
    RANGO_MEDIO_LO: RANGO_MEDIO_LO,
    RANGO_MEDIO_HI: RANGO_MEDIO_HI
  };
})(typeof window !== 'undefined' ? window : this);
