/**
 * Generacion del texto del informe (bloques) y utilidades de redaccion.
 */
(function (global) {
  'use strict';

  function mediasPorGrupoWisc(resultados) {
    var map = {};
    for (var i = 0; i < resultados.length; i++) {
      var r = resultados[i];
      if (r.tipo !== 'escala' || r.valor === null || !r.grupo) continue;
      if (!map[r.grupo]) map[r.grupo] = { sum: 0, n: 0 };
      map[r.grupo].sum += r.valor;
      map[r.grupo].n += 1;
    }
    var lineas = [];
    for (var g in map) {
      if (map[g].n) {
        lineas.push(
          '  \u00b7 ' +
            g +
            ': media escala aprox. ' +
            (map[g].sum / map[g].n).toFixed(1) +
            ' (subtests con dato).'
        );
      }
    }
    return lineas;
  }

  function etiquetaFuenteIc($) {
    var s = $('wisc-fuente-ic');
    if (!s || s.selectedIndex < 0) return 'No indicada';
    var opt = s.options[s.selectedIndex];
    return opt ? opt.textContent.trim() : 'No indicada';
  }

  function valorTexto($, id) {
    var el = $(id);
    if (!el) return '';
    if (typeof el.value === 'string') return el.value.trim();
    if (typeof el.textContent === 'string') return el.textContent.trim();
    return '';
  }

  function valorIndiceWisc($, codigo) {
    if (codigo === 'CIT') {
      return {
        suma: valorTexto($, 'wisc-sum-total'),
        ic: valorTexto($, 'inp-fsiq'),
        percentil: valorTexto($, 'wisc-pc-cit'),
        ic95: valorTexto($, 'wisc-int-cit')
      };
    }
    return {
      suma: valorTexto($, 'wisc-sum-' + codigo),
      ic: valorTexto($, 'wisc-ic-' + codigo),
      percentil: valorTexto($, 'wisc-pc-' + codigo),
      ic95: valorTexto($, 'wisc-int-' + codigo)
    };
  }

  function rangoCi(Baremos, ic) {
    if (Baremos && typeof Baremos.rangoCI === 'function') return Baremos.rangoCI(ic);
    var n = Number(ic);
    if (Number.isNaN(n)) return 'sin dato';
    if (n <= 70) return 'muy bajo';
    if (n <= 79) return 'baja';
    if (n <= 89) return 'media/baja';
    if (n <= 109) return 'media';
    if (n <= 119) return 'media/alta';
    if (n <= 129) return 'alto';
    return 'muy alto';
  }

  function rangoPe(Baremos, pe) {
    if (Baremos && typeof Baremos.rangoEscala === 'function') return Baremos.rangoEscala(pe);
    var n = Number(pe);
    if (Number.isNaN(n)) return 'sin dato';
    if (n <= 3) return 'muy bajo';
    if (n <= 5) return 'bajo';
    if (n <= 7) return 'medio-bajo';
    if (n <= 12) return 'medio';
    if (n <= 14) return 'medio-alto';
    if (n <= 16) return 'alto';
    return 'muy alto';
  }

  function intervaloEnFrase(ic95) {
    var t = String(ic95 || '').trim();
    var m = t.match(/^(\d+)\s*-\s*(\d+)$/);
    if (m) return 'entre los valores ' + m[1] + ' y ' + m[2];
    return t ? 'entre los valores ' + t : 'sin intervalo informado';
  }

  function nombreInforme(idEval) {
    var n = String(idEval || '').trim();
    if (!n || n === 'No especificado') return 'el/la menor';
    return n;
  }

  function peSubtest(resultados, id) {
    for (var i = 0; i < resultados.length; i++) {
      if (resultados[i].id === id && resultados[i].tipo === 'escala' && resultados[i].valor != null) {
        return resultados[i].valor;
      }
    }
    return null;
  }

  function fraseSubtest(Baremos, resultados, id, nombre, detalle) {
    var pe = peSubtest(resultados, id);
    if (pe == null) return null;
    return (
      nombre +
      ' (PE ' +
      pe +
      ', rango ' +
      rangoPe(Baremos, pe) +
      '). ' +
      detalle
    );
  }

  function orientacionIndice(codigo, ic) {
    var n = Number(ic);
    if (Number.isNaN(n)) return '';
    if (n >= 120) {
      return 'Este resultado representa una fortaleza destacada dentro del perfil, con recursos claramente superiores en las tareas propias de este indice.';
    }
    if (n >= 110) {
      return 'Este resultado sugiere una fortaleza relativa, con buen rendimiento en las tareas propias de este indice.';
    }
    if (n >= 90) {
      return 'Este resultado indica un rendimiento acorde a lo esperado para su edad en las tareas propias de este indice.';
    }
    if (n >= 80) {
      if (codigo === 'ICV') {
        return 'Este resultado sugiere que la comprension y expresion verbal, asi como el razonamiento mediado por el lenguaje, pueden requerir mayor esfuerzo que otras areas del perfil.';
      }
      return 'Este resultado sugiere una posible debilidad relativa, por lo que conviene interpretarlo junto con la observacion, la historia escolar y el resto de indices.';
    }
    return 'Este resultado se situa por debajo de lo esperado y requiere una interpretacion clinica cuidadosa, integrada con el funcionamiento escolar y adaptativo.';
  }

  function etiquetaIndice(codigo) {
    var nombres = {
      ICV: 'comprension verbal',
      IVE: 'razonamiento visoespacial',
      IRF: 'razonamiento fluido',
      IMT: 'memoria de trabajo',
      IVP: 'velocidad de procesamiento'
    };
    return nombres[codigo] || codigo;
  }

  function listaNatural(items) {
    if (!items.length) return '';
    if (items.length === 1) return items[0];
    if (items.length === 2) return items[0] + ' y ' + items[1];
    return items.slice(0, -1).join(', ') + ' y ' + items[items.length - 1];
  }

  function indicesWiscNumericos($, parseNumInput) {
    var codigos = ['ICV', 'IVE', 'IRF', 'IMT', 'IVP'];
    var out = [];
    for (var i = 0; i < codigos.length; i++) {
      var ic = parseNumInput('wisc-ic-' + codigos[i]);
      if (ic != null) out.push({ codigo: codigos[i], ic: ic });
    }
    return out;
  }

  function resumenExtremosIndices(indices) {
    if (!indices.length) return null;
    var min = indices[0];
    var max = indices[0];
    for (var i = 1; i < indices.length; i++) {
      if (indices[i].ic < min.ic) min = indices[i];
      if (indices[i].ic > max.ic) max = indices[i];
    }
    return { min: min, max: max, diferencia: max.ic - min.ic };
  }

  function indicePorCodigo(indices, codigo) {
    for (var i = 0; i < indices.length; i++) {
      if (indices[i].codigo === codigo) return indices[i];
    }
    return null;
  }

  function parejaDiscrepanciaConclusion(indices, extremos) {
    var pares = [['ICV', 'IVE'], ['ICV', 'IRF'], ['IMT', 'IVP']];
    for (var i = 0; i < pares.length; i++) {
      var a = indicePorCodigo(indices, pares[i][0]);
      var b = indicePorCodigo(indices, pares[i][1]);
      if (a && b && Math.abs(a.ic - b.ic) > 20) {
        return { a: a.codigo, b: b.codigo, diferencia: Math.abs(a.ic - b.ic) };
      }
    }
    return null;
  }

  function textoConclusionesWisc($, Baremos, idEval, parseNumInput) {
    var nombre = nombreInforme(idEval);
    var cit = valorIndiceWisc($, 'CIT');
    var icg = valorIndiceWisc($, 'ICG');
    var indices = indicesWiscNumericos($, parseNumInput);
    var extremos = resumenExtremosIndices(indices);
    var parejaDisc = parejaDiscrepanciaConclusion(indices, extremos);
    var heterogeneo = !!parejaDisc;
    var fortalezas = [];
    var adecuados = [];
    var dificultades = [];
    var i;

    for (i = 0; i < indices.length; i++) {
      if (indices[i].ic >= 110) fortalezas.push(etiquetaIndice(indices[i].codigo));
      else if (indices[i].ic >= 90) adecuados.push(etiquetaIndice(indices[i].codigo));
      else dificultades.push(etiquetaIndice(indices[i].codigo));
    }

    if (!fortalezas.length && extremos) fortalezas.push(etiquetaIndice(extremos.max.codigo));
    if (!dificultades.length && extremos && extremos.min.ic < 90) dificultades.push(etiquetaIndice(extremos.min.codigo));

    var partes = [];
    partes.push(
      'Tras la evaluacion realizada, ' +
        nombre +
        ' presenta un perfil cognitivo ' +
        (heterogeneo ? 'heterogeneo' : 'globalmente homogeneo') +
        '.'
    );
    if (cit.ic) {
      partes.push(
        'Los resultados de la escala WISC-V ponen de manifiesto un CIT de ' +
          cit.ic +
          ', situado en el rango ' +
          rangoCi(Baremos, cit.ic) +
          ', que corresponde con un percentil ' +
          (cit.percentil || 'no informado') +
          ', con una probabilidad del 95% de que su verdadero CIT se situe ' +
          intervaloEnFrase(cit.ic95) +
          '.'
      );
    }
    if (heterogeneo && icg.ic) {
      partes.push(
        'Por la diferencia entre los indices ' +
          parejaDisc.a +
          ' e ' +
          parejaDisc.b +
          ' de mas de 20 puntos, se considera que el Indice de Capacidad General (ICG) es una medida complementaria relevante de su funcionamiento intelectual. El ICG es de ' +
          icg.ic +
          ', situado en el rango ' +
          rangoCi(Baremos, icg.ic) +
          ', que corresponde con un percentil ' +
          (icg.percentil || 'no informado') +
          ', con una probabilidad del 95% de que su verdadero ICG se situe ' +
          intervaloEnFrase(icg.ic95) +
          '.'
      );
    }
    if (fortalezas.length) {
      partes.push(
        'Segun los resultados, destaca especialmente su fortaleza en ' +
          listaNatural(fortalezas) +
          ', areas en las que muestra un rendimiento superior o comparativamente mas elevado dentro de su perfil.'
      );
    }
    if (adecuados.length) {
      partes.push(
        'Asimismo, ' +
          listaNatural(adecuados) +
          (adecuados.length === 1 ? ' se situa' : ' se situan') +
          ' en niveles adecuados para su edad.'
      );
    }
    if (dificultades.length) {
      partes.push(
        'Por el contrario, se observan mayores dificultades relativas en ' +
          listaNatural(dificultades) +
          ', donde el rendimiento es mas bajo en comparacion con el resto de sus capacidades.'
      );
    }
    partes.push(
      'Este perfil sugiere que ' +
        nombre +
        ' dispone de potencial cognitivo, especialmente en las tareas que coinciden con sus areas de mayor rendimiento, aunque puede requerir apoyo en aquellas actividades vinculadas a sus indices comparativamente mas bajos.'
    );
    return partes.join(' ');
  }

  function descripcionIndice(codigo) {
    var textos = {
      ICV:
        'El Indice de Comprension Verbal (ICV) evalua la capacidad para adquirir, comprender y utilizar conocimiento verbal previamente aprendido. Implica formacion de conceptos, razonamiento verbal, comprension de significados y expresion linguistica.',
      IVE:
        'El Indice Visoespacial (IVE) evalua la capacidad para percibir y analizar detalles visuales, comprender relaciones espaciales y construir disenos a partir de un modelo. Integra razonamiento visoespacial, analisis parte-todo, atencion al detalle y coordinacion visomotora.',
      IRF:
        'El Indice de Razonamiento Fluido (IRF) evalua la capacidad para identificar relaciones conceptuales entre estimulos visuales y aplicar reglas de forma flexible. Implica razonamiento inductivo, cuantitativo y pensamiento abstracto.',
      IMT:
        'El Indice de Memoria de Trabajo (IMT) evalua la aptitud para registrar, mantener y manipular informacion visual y auditiva de manera consciente. Requiere atencion, concentracion y manejo activo de la informacion a corto plazo.',
      IVP:
        'El Indice de Velocidad de Procesamiento (IVP) mide la rapidez y precision en la identificacion visual, la toma de decisiones y la ejecucion grafomotora. Se relaciona con rastreo visual, discriminacion visual, memoria visual a corto plazo y concentracion.'
    };
    return textos[codigo] || '';
  }

  function subtestsIndice(Baremos, resultados, codigo) {
    var filas = {
      ICV: [
        ['sim', 'Semejanzas', 'Refleja la capacidad para identificar relaciones entre conceptos y establecer categorias mediante razonamiento verbal.'],
        ['voc', 'Vocabulario', 'Informa sobre conocimiento lexico, precision expresiva y riqueza del lenguaje.']
      ],
      IVE: [
        ['cub', 'Cubos', 'Informa sobre analisis y reproduccion de modelos visuales mediante material manipulativo.'],
        ['puz', 'Puzles visuales', 'Explora razonamiento visual abstracto y manipulacion mental de figuras.']
      ],
      IRF: [
        ['mat', 'Matrices', 'Refleja identificacion de relaciones visuales y aplicacion de razonamiento inductivo.'],
        ['bal', 'Balanzas', 'Informa sobre razonamiento cuantitativo, equilibrio, proporcion y aplicacion de reglas logicas.']
      ],
      IMT: [
        ['dig', 'Digitos', 'Explora memoria auditiva inmediata y manipulacion de informacion verbal a corto plazo.'],
        ['pic', 'Span de dibujos', 'Explora memoria visual inmediata y manejo de secuencias de imagenes.']
      ],
      IVP: [
        ['cla', 'Claves', 'Informa sobre rapidez de procesamiento, aprendizaje asociativo, atencion y coordinacion visomotora.'],
        ['bus', 'Busqueda de simbolos', 'Explora discriminacion visual rapida, atencion sostenida y precision bajo demanda temporal.']
      ]
    };
    var cfg = filas[codigo] || [];
    var out = [];
    for (var i = 0; i < cfg.length; i++) {
      var f = fraseSubtest(Baremos, resultados, cfg[i][0], cfg[i][1], cfg[i][2]);
      if (f) out.push(f);
    }
    return out;
  }

  function textoNarrativoWisc(resultados, $, Baremos, idEval, parseNumInput) {
    var nombre = nombreInforme(idEval);
    var lineas = [];
    var cit = valorIndiceWisc($, 'CIT');
    var icg = valorIndiceWisc($, 'ICG');

    lineas.push('WISC-V (Escala de Inteligencia de Wechsler para ninos-V).');
    lineas.push(
      'El WISC-V es una prueba que tiene como objetivo obtener una estimacion del funcionamiento intelectual de ninos, ninas y adolescentes a traves del CIT y de indices especificos.'
    );
    if (cit.ic) {
      lineas.push(
        'Los resultados obtenidos por ' +
          nombre +
          ' en la prueba de inteligencia WISC-V ponen de manifiesto un CIT de ' +
          cit.ic +
          ', situado en el rango ' +
          rangoCi(Baremos, cit.ic) +
          ', que corresponde con un percentil ' +
          (cit.percentil || 'no informado') +
          ', con una probabilidad del 95% de que su verdadero CIT se situe ' +
          intervaloEnFrase(cit.ic95) +
          '.'
      );
    }

    var idx = {
      icv: parseNumInput('wisc-ic-ICV'),
      ive: parseNumInput('wisc-ic-IVE'),
      irf: parseNumInput('wisc-ic-IRF'),
      imt: parseNumInput('wisc-ic-IMT'),
      ivp: parseNumInput('wisc-ic-IVP')
    };
    var disc = global.WiscCuadernillo
      ? global.WiscCuadernillo.criterioDiscrepanciaParaIcG(idx.icv, idx.ive, idx.irf, idx.imt, idx.ivp, 20)
      : { aplica: false };
    if (disc && disc.aplica && icg.ic) {
      lineas.push(
        'Por la diferencia entre los indices, de mas de 20 puntos, se considera pertinente analizar el Indice de Capacidad General (ICG) como medida complementaria del funcionamiento intelectual. En el caso de ' +
          nombre +
          ', el ICG es de ' +
          icg.ic +
          ', situado en el rango ' +
          rangoCi(Baremos, icg.ic) +
          ', correspondiente al percentil ' +
          (icg.percentil || 'no informado') +
          ', con una probabilidad del 95% de que su puntuacion verdadera se situe ' +
          intervaloEnFrase(icg.ic95) +
          '.'
      );
    }

    var codigos = ['ICV', 'IVE', 'IRF', 'IMT', 'IVP'];
    var nombres = {
      ICV: 'Indice de Comprension Verbal (ICV)',
      IVE: 'Indice Visoespacial (IVE)',
      IRF: 'Indice de Razonamiento Fluido (IRF)',
      IMT: 'Indice de Memoria de Trabajo (IMT)',
      IVP: 'Indice de Velocidad de Procesamiento (IVP)'
    };
    for (var i = 0; i < codigos.length; i++) {
      var cod = codigos[i];
      var v = valorIndiceWisc($, cod);
      if (!v.ic) continue;
      lineas.push('');
      lineas.push(descripcionIndice(cod));
      lineas.push(
        'En el ' +
          nombres[cod] +
          ', ' +
          nombre +
          ' ha obtenido una puntuacion compuesta de ' +
          v.ic +
          ', situada en el percentil ' +
          (v.percentil || 'no informado') +
          ', lo que situa la puntuacion en el rango ' +
          rangoCi(Baremos, v.ic) +
          '. Con un nivel de confianza del 95%, se estima que su puntuacion verdadera se situa ' +
          intervaloEnFrase(v.ic95) +
          '. ' +
          orientacionIndice(cod, v.ic)
      );
      var subs = subtestsIndice(Baremos, resultados, cod);
      if (subs.length) {
        lineas.push('Los subtests nucleares que componen este indice son:');
        for (var si = 0; si < subs.length; si++) lineas.push('- ' + subs[si]);
      }
    }

    return lineas;
  }

  /**
   * @param {object[]} resultados
   * @param {{ $: function, parseNumInput: function, Baremos: object }} ctx
   */
  function generarTextoInforme(resultados, ctx) {
    var $ = ctx.$;
    var parseNumInput = ctx.parseNumInput;
    var Baremos = ctx.Baremos;
    var OA = global.OrientacionApp || {};

    var idEval = $('id-evaluado').value || 'No especificado';
    var edad = $('edad-anos').value || '\u2014';
    var bateriaVal = $('bateria').value;
    var bateriaLabel = $('bateria').selectedOptions[0].text;
    var lineas = [];

    lineas.push(OA.lineaGeneracion ? OA.lineaGeneracion() : '');
    lineas.push('');
    lineas.push('Evaluado: ' + idEval + '. Edad (anos, campo numerico): ' + edad + '.');
    lineas.push('Instrumento: ' + bateriaLabel + '.');
    lineas.push('');

    if (bateriaVal === 'wisc-v') {
      lineas.push('--- CONTEXTO CLINICO / TRAZABILIDAD ---');
      lineas.push(
        'Fuente declarada de los IC / CIT: ' +
          etiquetaFuenteIc($) +
          '. Contraste obligatorio con tablas por edad del manual Pearson o software homologado.'
      );
      lineas.push(
        'Advertencia: esta plantilla no sustituye el criterio clinico ni las normas oficiales del editor.'
      );
      lineas.push('');

      var ex = $('wisc-examinador') ? $('wisc-examinador').value : '';
      var fap = $('fecha-aplicacion') ? $('fecha-aplicacion').value : '';
      var fnac = $('fecha-nacimiento') ? $('fecha-nacimiento').value : '';
      var edadCuad = $('wisc-edad-computada') ? $('wisc-edad-computada').textContent : '';
      lineas.push('Examinador: ' + (ex || 'No indicado'));
      lineas.push(
        'Fecha aplicacion: ' +
          (fap || 'No indicada') +
          ' | Fecha nacimiento: ' +
          (fnac || 'No indicada')
      );
      lineas.push('Edad cronologica (desde fechas / cuadernillo): ' + (edadCuad || '\u2014'));
      lineas.push('');
      lineas.push(
        'Estructura tipo hoja resumen: indices ICV\u2013IVP, ICG (capacidad general) y CIT. Percentiles e intervalos desde tablas locales cuando hay suma valida; contrastar con manual por edad.'
      );
      lineas.push('');
      lineas.push('--- 1. RESUMEN: PUNTUACIONES DIRECTAS Y ESCALARES ---');
      lineas.push('');
      for (var wi = 0; wi < resultados.length; wi++) {
        var rw = resultados[wi];
        if (rw.tipo === 'escala') {
          var pdStr = rw.bruta === '' || rw.bruta == null ? '\u2014' : String(rw.bruta);
          var peStr = rw.valor != null ? String(rw.valor) : 'sin PE';
          lineas.push('- ' + rw.nombre + ': PD ' + pdStr + ' | PE ' + peStr);
          if (rw.valor != null) {
            var interpw = Baremos.interpretarEscala(rw.valor);
            lineas.push('  Categoria (orientativa, M=10, DE=3): ' + interpw.etiqueta);
          }
        } else if (rw.tipo === 'ci') {
          if (rw.valor != null) {
            lineas.push('- ' + rw.nombre + ': CI ' + rw.valor + ' (' + Baremos.interpretarCI(rw.valor) + ').');
          } else {
            lineas.push('- ' + rw.nombre + ': sin dato.');
          }
        }
      }
      lineas.push('', '--- 2. INDICES: SUMA PE, IC, PERCENTIL, IC 95% ---', '');
      var WCi = global.WiscCuadernillo;
      if (WCi && WCi.INDICES_PRIMARIOS) {
        var ordI = WCi.INDICES_PRIMARIOS;
        for (var oi = 0; oi < ordI.length; oi++) {
          var kk = ordI[oi];
          var icE = $('wisc-ic-' + kk);
          var pcE = $('wisc-pc-' + kk);
          var intE = $('wisc-int-' + kk);
          var sumE = $('wisc-sum-' + kk);
          var pctStr = pcE && pcE.value ? pcE.value.trim() : '\u2014';
          lineas.push(
            '- ' +
              kk +
              ': Suma PE ' +
              (sumE ? sumE.textContent : '\u2014') +
              ' | IC ' +
              (icE && icE.value ? icE.value : '\u2014') +
              ' | % ' +
              pctStr +
              ' | IC 95% ' +
              (intE && intE.value ? intE.value : '\u2014')
          );
        }
      }
      var sumIcg = $('wisc-sum-ICG');
      var icIcgE = $('wisc-ic-ICG');
      var pcIcgE = $('wisc-pc-ICG');
      var intIcgE = $('wisc-int-ICG');
      lineas.push(
        '- ICG: Suma PE ' +
          (sumIcg ? sumIcg.textContent : '\u2014') +
          ' | IC ' +
          (icIcgE && icIcgE.value ? icIcgE.value : '\u2014') +
          ' | % ' +
          (pcIcgE && pcIcgE.value ? pcIcgE.value.trim() : '\u2014') +
          ' | IC 95% ' +
          (intIcgE && intIcgE.value ? intIcgE.value : '\u2014')
      );
      var sumTot = $('wisc-sum-total');
      var inpFs = $('inp-fsiq');
      var pcCitE = $('wisc-pc-cit');
      var intCitE = $('wisc-int-cit');
      lineas.push(
        '- Escala total (CIT): Suma PE ' +
          (sumTot ? sumTot.textContent : '\u2014') +
          ' | CI ' +
          (inpFs && inpFs.value ? inpFs.value : '\u2014') +
          ' | % ' +
          (pcCitE && pcCitE.value ? pcCitE.value.trim() : '\u2014') +
          ' | IC 95% ' +
          (intCitE && intCitE.value ? intCitE.value : '\u2014')
      );
      lineas.push('', '--- 3. INTERPRETACION CUALITATIVA WISC-V ---', '');
      lineas = lineas.concat(textoNarrativoWisc(resultados, $, Baremos, idEval, parseNumInput));
      lineas.push(
        '',
        '--- 4. ANALISIS COMPARATIVO (referencia: tablas B y C del manual) ---',
        'Comparaciones entre pruebas (B5-B8), entre indices (B1-B4), indices secundarios (C1-C8), procesamiento (C9-C15): no calculadas en esta plantilla; copie valores criticos y significacion desde el manual o software homologado.',
        ''
      );
      var fac = mediasPorGrupoWisc(resultados);
      if (fac.length) {
        lineas.push('Sintesis por factor (media de PE; subtests con dato):');
        lineas = lineas.concat(fac);
        lineas.push('');
      }
      lineas.push(
        '',
        '--- 5. CRITERIOS ORIENTATIVOS (heuristicos; no diagnostico clinico) ---',
        'Flujo habitual: WPPSI-IV (infantil) o WISC-V (escolar) primero; luego se orientan cribados segun IC/percentiles y contexto.',
        ''
      );
      var idxInf = {
        icv: parseNumInput('wisc-ic-ICV'),
        ive: parseNumInput('wisc-ic-IVE'),
        irf: parseNumInput('wisc-ic-IRF'),
        imt: parseNumInput('wisc-ic-IMT'),
        ivp: parseNumInput('wisc-ic-IVP'),
        cit: parseNumInput('inp-fsiq')
      };
      var algunoInf = false;
      for (var kInf in idxInf) {
        if (idxInf[kInf] != null) algunoInf = true;
      }
      if (global.WiscDiagnosticoOrientativo && algunoInf) {
        var hallInf = global.WiscDiagnosticoOrientativo.evaluar(idxInf);
        for (var hiInf = 0; hiInf < hallInf.length; hiInf++) {
          lineas.push('* ' + hallInf[hiInf].titulo + ': ' + hallInf[hiInf].texto);
        }
      } else {
        lineas.push('Indique indices compuestos (IC) en la tabla para evaluar criterios orientativos.');
      }
      lineas.push('', '--- 6. CONCLUSIONES ---', '');
      lineas.push(textoConclusionesWisc($, Baremos, idEval, parseNumInput));
      lineas.push(
        '',
        '--- 7. CONDUCTA Y REGULACION EMOCIONAL (orientativo; sin criterio automatico desde el WISC) ---',
        ''
      );
      if (global.WiscDiagnosticoOrientativo && typeof global.WiscDiagnosticoOrientativo.textoRecordatorioConducta === 'function') {
        lineas.push(global.WiscDiagnosticoOrientativo.textoRecordatorioConducta());
      } else {
        lineas.push(
          'El perfil cognitivo del WISC-V no sustituye valoracion de conducta; valorar cuestionarios y contexto segun criterio clinico.'
        );
      }
    } else if (bateriaVal === 'sena') {
      var SM = global.SenaModelo;
      var SenaI = global.SenaInterpretacion;
      var infSel = $('sena-informante') ? $('sena-informante').value : 'familia';
      var edSel = $('sena-banda-edad') ? $('sena-banda-edad').value : 'primaria';
      var labInf = { familia: 'Familia', escuela: 'Escuela', autoinforme: 'Autoinforme' };
      var labEd = { infantil: 'Infantil (3-6)', primaria: 'Primaria (6-12)', secundaria: 'Secundaria (12-18)' };
      lineas.push('--- CONTEXTO SENA ---');
      lineas.push(
        'Informante seleccionado en la app: ' +
          (labInf[infSel] || infSel) +
          '. Banda de edad / cuestionario: ' +
          (labEd[edSel] || edSel) +
          '. Debe coincidir con el ejemplar administrado (p. ej. kit Primaria-Familia).'
      );
      lineas.push(
        'SENA (Sistema de Evaluacion de Ninos y Adolescentes), TEA Ediciones. Rangos de edad e informantes segun manual de aplicacion y correccion.'
      );
      if (SM && SM.version != null) {
        lineas.push(
          'Estructura en esta plantilla (modelo v' +
            SM.version +
            '): escalas de control, problemas interiorizados/exteriorizados, especificos, vulnerabilidades, recursos e indices globales. No reproduce items ni tablas; use la hoja de perfil oficial.'
        );
      }
      lineas.push(
        'Introduzca las puntuaciones T (u otras metricas del informe) tal como aparecen en la correccion homologada.'
      );
      lineas.push('');
      lineas.push('--- 1. PERFIL DE ESCALAS (T; orientativo) ---');
      lineas.push('');
      for (var si = 0; si < resultados.length; si++) {
        var rs = resultados[si];
        if (rs.valor === null) {
          lineas.push('- ' + rs.nombre + ': sin dato.');
          continue;
        }
        if (rs.tipo === 'ci') {
          lineas.push('- ' + rs.nombre + ': CI ' + rs.valor + ' (' + Baremos.interpretarCI(rs.valor) + ').');
        } else {
          var labT = SenaI
            ? SenaI.interpretarZonaManual
              ? SenaI.interpretarZonaManual(rs.valor, rs.polaridad)
              : SenaI.interpretarT(rs.valor).etiqueta
            : '';
          var pol =
            rs.polaridad === 'recurso'
              ? ' [recursos: T baja = menos recursos]'
              : rs.polaridad === 'problema'
                ? ' [problemas: T alta = mas indicadores]'
                : '';
          var pdPart = rs.pdBruta ? 'PD ' + rs.pdBruta + ' / ' : '';
          lineas.push('- ' + rs.nombre + ': ' + pdPart + 'T ' + rs.valor + ' \u2014 ' + labT + pol + '.');
        }
      }
      lineas.push('');
      if (SenaI) lineas.push(SenaI.notaLegal);
      lineas.push('');
      lineas.push('--- 2. CONDUCTA Y AFECTIVIDAD (complementario; orientativo) ---', '');
      if (
        global.WiscDiagnosticoOrientativo &&
        typeof global.WiscDiagnosticoOrientativo.textoRecordatorioConducta === 'function'
      ) {
        lineas.push(global.WiscDiagnosticoOrientativo.textoRecordatorioConducta());
      } else {
        lineas.push('Integrar con entrevista y otros informes segun criterio clinico.');
      }
    } else if (bateriaVal === 'celf5') {
      var CM = global.Celf5Modelo;
      var bandaC = $('celf-banda') ? $('celf-banda').value : '5-8';
      var labBand = { '5-8': '5:0\u20138:11', '9-12': '9:0\u201312:11', '13-21': '13:0\u201321:11' };
      lineas.push('--- CONTEXTO CELF-5 ---');
      lineas.push(
        'Banda de edad / cuadernillo en la app: ' +
          (labBand[bandaC] || bandaC) +
          '. Debe coincidir con el ejemplar administrado (manual y correccion Pearson).'
      );
      if (CM && CM.version != null) {
        lineas.push('Modelo de datos en plantilla: v' + CM.version + '. No calcula conversiones PD\u2192PE ni IC; introduzca valores ya corregidos.');
      }
      if (CM && CM.enlacesLectura && CM.enlacesLectura.length) {
        lineas.push('Referencias de terceros (Scribd; no oficiales): manual, cuadernillo y ejemplos de informe; ver `js/celf5-modelo.js`.');
      }
      lineas.push('');
      lineas.push('--- 1. SUBPRUEBAS (PE) E INDICES (IC) ---');
      lineas.push('');
      for (var ci = 0; ci < resultados.length; ci++) {
        var rc = resultados[ci];
        if (rc.valor === null) {
          lineas.push('- ' + rc.nombre + ': sin dato.');
          continue;
        }
        if (rc.tipo === 'ci') {
          var pctC = Baremos.percentilAproxDesdeIC(rc.valor);
          lineas.push(
            '- ' +
              rc.nombre +
              ': IC ' +
              rc.valor +
              ' (' +
              Baremos.interpretarCI(rc.valor) +
              ')' +
              (pctC != null ? '. Percentil aproximado: ' + pctC + '.' : '.')
          );
        } else {
          var interpc = Baremos.interpretarEscala(rc.valor);
          lineas.push(
            '- ' +
              rc.nombre +
              ': PE ' +
              rc.valor +
              ' \u2014 categoria orientativa (M=10, DE=3): ' +
              interpc.etiqueta +
              '.'
          );
        }
      }
      lineas.push('');
      if (CM && CM.notaLegal) lineas.push(CM.notaLegal);
    } else {
      lineas.push('Resumen de puntuaciones:', '');
      for (var i = 0; i < resultados.length; i++) {
        var r = resultados[i];
        if (r.valor === null) {
          lineas.push('- ' + r.nombre + ': sin dato.');
          continue;
        }
        if (r.tipo === 'ci') {
          lineas.push('- ' + r.nombre + ': CI ' + r.valor + ' (' + Baremos.interpretarCI(r.valor) + ').');
        } else {
          var interp = Baremos.interpretarEscala(r.valor);
          lineas.push('- ' + r.nombre + ': escala ' + r.valor + ' \u2014 ' + interp.etiqueta + '.');
        }
      }
    }

    lineas.push('');
    if (bateriaVal === 'wisc-v') {
      lineas.push(
        '--- CIERRE ---',
        'Interpretacion: Las categorias por escala (M=10, DE=3) y CI (M=100, DE=15) son orientativas; la practica clinica debe ajustarse al manual oficial y normas aplicables.'
      );
    } else if (bateriaVal === 'sena') {
      lineas.push(
        '--- CIERRE ---',
        'Interpretacion: Las categorias T en esta plantilla son orientativas (referencia M=50, DE=10). Los cortes clinicos, items criticos y escalas de validez deben tomarse del manual y de la hoja de perfil TEA Ediciones.',
        'Referencias de lectura de terceros (no oficiales): manual y hoja de perfil en Scribd u otros repositorios no sustituyen el material adquirido al editor.'
      );
    } else if (bateriaVal === 'celf5') {
      lineas.push(
        '--- CIERRE ---',
        'Interpretacion: PE y rangos de subprueba (M=10, DE=3) e IC (M=100, DE=15) son orientativos en esta plantilla. Los valores definitivos, percentiles y criterios clinicos deben tomarse del manual de aplicacion y correccion y del software homologado del editor.',
        'Los documentos enlazados en Scribd (manual, cuadernillo, informes de ejemplo) no sustituyen el material adquirido a Pearson / distribuidor autorizado.'
      );
    } else {
      lineas.push(
        'Interpretacion: Las categorias anteriores siguen rangos orientativos de demostracion. La redaccion clinica debe integrar contexto, observacion conductual y criterios del manual.'
      );
    }
    return lineas.join('\n');
  }

  function generarInformeProfesional(resultados, ctx) {
    var $ = ctx.$;
    var Baremos = ctx.Baremos;
    var parseNumInput = ctx.parseNumInput;
    var bateriaVal = $('bateria').value;
    if (bateriaVal !== 'wisc-v') return generarTextoInforme(resultados, ctx);
    var idEval = $('id-evaluado').value || 'No especificado';
    var lineas = textoNarrativoWisc(resultados, $, Baremos, idEval, parseNumInput);
    lineas.push('');
    lineas.push('CONCLUSIONES');
    lineas.push(textoConclusionesWisc($, Baremos, idEval, parseNumInput));
    return lineas.join('\n');
  }

  global.OrientacionInforme = {
    mediasPorGrupoWisc: mediasPorGrupoWisc,
    generarTextoInforme: generarTextoInforme,
    generarInformeProfesional: generarInformeProfesional
  };
})(typeof window !== 'undefined' ? window : this);
