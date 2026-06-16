/**
 * UI y tablas especificas WISC-V (cuadernillo PD-PE, resumen de indices).
 */
(function (global) {
  'use strict';

  var WISC_ETIQUETA_INDICE = {
    ICV: 'Comp. verbal (ICV)',
    IVE: 'Visoespacial (IVE)',
    IRF: 'Razon. fluido (IRF)',
    IMT: 'Mem. trabajo (IMT)',
    IVP: 'Vel. proces. (IVP)',
    ICG: 'Capacidad general (ICG)'
  };

  function parsePuntuacionEscalaWisc(s) {
    if (s === '' || s == null) return null;
    var n = Number(s);
    if (Number.isNaN(n)) return null;
    var e = Math.round(n);
    if (e < 1 || e > 19) return null;
    return e;
  }

  function escapeHtml(s) {
    var div = document.createElement('div');
    div.textContent = s;
    return div.innerHTML;
  }

  function renderWiscCuadernilloTable($, getItemsBateria) {
    var items = getItemsBateria();
    var cont = $('contenedor-subtests');
    var WC = global.WiscCuadernillo;
    var ordenIds = WC && WC.ORDEN_PRUEBAS_CUADERNILLO_ES ? WC.ORDEN_PRUEBAS_CUADERNILLO_ES : null;
    var porId = {};
    for (var i = 0; i < items.length; i++) {
      var it0 = items[i];
      if (it0.tipo === 'ci') continue;
      porId[it0.id] = it0;
    }
    function filaPrueba(item) {
      var supMark = item.nucleo === false ? ' <span class="tabla-wisc-pd-pe__sup">(sup.)</span>' : '';
      return (
        '<tr><td>' +
        escapeHtml(item.nombre) +
        supMark +
        '</td><td><input type="number" min="0" class="input input--table" id="wisc-pd-' +
        item.id +
        '" /></td><td><input type="number" min="1" max="19" step="1" class="input input--table" id="wisc-pe-' +
        item.id +
        '" placeholder="1-19" /></td></tr>'
      );
    }
    var html =
      '<div class="tabla-wisc-outer">' +
      '<table class="tabla-wisc-pd-pe"><caption class="tabla-wisc-pd-pe__caption">Conversi\u00f3n de puntuaciones directas a puntuaciones escalares</caption>' +
      '<thead><tr><th>Prueba</th><th>Puntuaci\u00f3n directa (PD)</th><th>Puntuaci\u00f3n escalar (PE)</th></tr></thead><tbody>';
    if (ordenIds) {
      for (var oi = 0; oi < ordenIds.length; oi++) {
        var oid = ordenIds[oi];
        if (porId[oid]) html += filaPrueba(porId[oid]);
      }
    } else {
      var ordenIdx =
        WC && WC.INDICES_PRIMARIOS ? WC.INDICES_PRIMARIOS.slice() : ['ICV', 'IVE', 'IRF', 'IMT', 'IVP'];
      var porIndice = {};
      for (var oj = 0; oj < ordenIdx.length; oj++) {
        porIndice[ordenIdx[oj]] = [];
      }
      for (var j = 0; j < items.length; j++) {
        var it1 = items[j];
        if (it1.tipo === 'ci') continue;
        if (porIndice[it1.indice]) porIndice[it1.indice].push(it1);
      }
      function ordenarNucleoPrimero(a, b) {
        if (a.nucleo === false && b.nucleo !== false) return 1;
        if (a.nucleo !== false && b.nucleo === false) return -1;
        return 0;
      }
      for (var key in porIndice) {
        if (porIndice[key].length) porIndice[key].sort(ordenarNucleoPrimero);
      }
      for (var gi = 0; gi < ordenIdx.length; gi++) {
        var idx = ordenIdx[gi];
        var bloque = porIndice[idx];
        if (!bloque || !bloque.length) continue;
        html +=
          '<tr class="tabla-wisc-pd-pe__grupo"><td colspan="3">' +
          escapeHtml(WISC_ETIQUETA_INDICE[idx] || idx) +
          '</td></tr>';
        for (var bi = 0; bi < bloque.length; bi++) html += filaPrueba(bloque[bi]);
      }
    }
    html +=
      '<tr class="tabla-wisc-pd-pe__fsiq"><td><strong>Escala total (CIT)</strong></td><td class="tabla-wisc-pd-pe__na">\u2014</td><td><input type="number" min="0" max="133" step="1" class="input input--table" id="wisc-sum-cit-pdpe" placeholder="Suma PE" readonly /></td></tr>';
    html += '</tbody></table>';
    html +=
      '<p class="tabla-wisc-pd-pe__ayuda">Orden de filas como en el cuadernillo ES. En la hoja, cada columna de PE tiene celdas activas por bloque: la <strong>suma por \u00edndice</strong> abajo usa esas pruebas (p. ej. ICV = Semejanzas + Vocabulario; IVE = Cubos + Puzles visuales). La <strong>suma CIT</strong> son las 7 PE de la columna CIT (las siete primeras filas nucleo de esta tabla).</p>';
    html += '</div>';
    cont.innerHTML = html;
  }

  function construirHtmlTablaIndicesWisc() {
    var orden = global.WiscCuadernillo.INDICES_PRIMARIOS;
    var html =
      '<div id="wisc-icg-criterio-aviso" class="wisc-icg-criterio-aviso hidden" role="status" aria-live="polite"></div>' +
      '<table class="tabla-resumen-wisc tabla-resumen-wisc--indices"><thead><tr><th>Escala</th><th>Suma punt. escalares</th><th>Puntuaci\u00f3n compuesta</th><th>Rango percentil</th><th>Intervalo de confianza (95%)</th></tr></thead><tbody>';
    for (var j = 0; j < orden.length; j++) {
      var k = orden[j];
      html +=
        '<tr><td>' +
        escapeHtml(WISC_ETIQUETA_INDICE[k] || k) +
        '</td><td class="tabla-resumen-wisc__suma" id="wisc-sum-' +
        k +
        '">\u2014</td><td><input type="number" min="40" max="160" step="1" class="input input--table input--compact" id="wisc-ic-' +
        k +
        '" placeholder="IC" readonly /></td><td class="tabla-resumen-wisc__pct"><input type="text" class="input input--table input--compact tabla-resumen-wisc__pcval" id="wisc-pc-' +
        k +
        '" placeholder="Percentil" readonly /></td><td><input type="text" class="input input--table input--compact" id="wisc-int-' +
        k +
        '" placeholder="p. ej. 95-105" readonly /></td></tr>';
    }
    html +=
      '<tr id="wisc-row-ICG" class="tabla-resumen-wisc__icg-row"><td>' +
      escapeHtml(WISC_ETIQUETA_INDICE.ICG) +
      '</td><td class="tabla-resumen-wisc__suma" id="wisc-sum-ICG">\u2014</td><td><input type="number" min="40" max="160" step="1" class="input input--table input--compact" id="wisc-ic-ICG" placeholder="IC" readonly /></td><td class="tabla-resumen-wisc__pct"><input type="text" class="input input--table input--compact tabla-resumen-wisc__pcval" id="wisc-pc-ICG" placeholder="Percentil" readonly /></td><td><input type="text" class="input input--table input--compact" id="wisc-int-ICG" placeholder="p. ej. 95-105" readonly /></td></tr>';
    html +=
      '<tr class="tabla-resumen-wisc__total"><td><strong>Escala total (CIT)</strong></td><td class="tabla-resumen-wisc__suma" id="wisc-sum-total">\u2014</td><td><input type="number" min="40" max="160" step="1" class="input input--table input--compact" id="inp-fsiq" placeholder="IC" readonly /> <span id="wisc-display-ic-cit" class="tabla-resumen-wisc__cit-ic hidden">\u2014</span></td><td class="tabla-resumen-wisc__pct"><input type="text" class="input input--table input--compact tabla-resumen-wisc__pcval" id="wisc-pc-cit" placeholder="Percentil" readonly /></td><td><input type="text" class="input input--table input--compact" id="wisc-int-cit" placeholder="Intervalo 95% (manual)" readonly /></td></tr></tbody></table>';
    html +=
      '<p class="tabla-resumen-wisc__nota">Los <strong>IC, percentiles e intervalos</strong> se autocompletan desde las tablas oficiales de conversi\u00f3n de suma PE a puntuaci\u00f3n compuesta del manual local cuando hay una suma v\u00e1lida. Indique la <strong>fuente</strong> en el selector superior. <strong>Suma CIT (columna del cuadernillo):</strong> 7 PE nucleo: Cubos, Semejanzas, Matrices, D\u00edgitos, Claves, Vocabulario, Balanzas. <strong>Sumas por \u00edndice (columnas):</strong> ICV = Semejanzas + Vocabulario; IVE = Cubos + Puzles visuales; IRF = Matrices + Balanzas; IMT = D\u00edgitos + Span de dibujos; IVP = Claves + B\u00fasqueda de s\u00edmbolos (solo pruebas de cada bloque; no se suman suplementarias salvo normas del manual). <strong>ICG/IHG (cuando procede por discrepancias &gt;20 pt entre ICV-IVE, ICV-IRF o IMT-IVP):</strong> suma de 5 PE: Semejanzas + Vocabulario + Cubos + Matrices + Balanzas (sin MT ni VP). Si adem\u00e1s |ICG \u2212 CIT| &gt; 20, el CIT puede estar muy arrastrado por memoria/velocidad frente al ICG.</p>';
    return html;
  }

  function leerIcIndiceResumen($, id, sumas, Demo) {
    var el = $('wisc-ic-' + id);
    if (el && String(el.value).trim() !== '') {
      var v = Number(el.value);
      return Number.isNaN(v) ? null : v;
    }
    var s = sumas && sumas[id];
    if (s && s.n >= 2 && Demo && typeof Demo.icDesdeSuma === 'function') {
      return Demo.icDesdeSuma(id, s.suma);
    }
    return null;
  }

  /**
   * Aviso criterio ICG (discrepancias >20) y comparacion ICG vs CIT.
   * @param {function} $ id getter
   * @param {Array} resultados resultados WISC con PE
   */
  function actualizarAvisoIcGWisc($, resultados) {
    var av = $('wisc-icg-criterio-aviso');
    var rowIcg = $('wisc-row-ICG');
    if (!av) return;
    var bat = $('bateria');
    if (!bat || bat.value !== 'wisc-v' || !resultados) {
      av.classList.add('hidden');
      av.innerHTML = '';
      if (rowIcg) rowIcg.classList.remove('wisc-fila-icg--destacada');
      return;
    }
    var WC = global.WiscCuadernillo;
    var Demo = global.WiscIcDesdeSumaDemo;
    if (!WC || !WC.criterioDiscrepanciaParaIcG || !Demo) {
      av.classList.add('hidden');
      av.innerHTML = '';
      return;
    }
    var sumas = WC.sumarEscalaresPorIndice(resultados);
    var icv = leerIcIndiceResumen($, 'ICV', sumas, Demo);
    var ive = leerIcIndiceResumen($, 'IVE', sumas, Demo);
    var irf = leerIcIndiceResumen($, 'IRF', sumas, Demo);
    var imt = leerIcIndiceResumen($, 'IMT', sumas, Demo);
    var ivp = leerIcIndiceResumen($, 'IVP', sumas, Demo);
    var crit = WC.criterioDiscrepanciaParaIcG(icv, ive, irf, imt, ivp, 20);
    var icgSum = WC.sumarEscalaresICG ? WC.sumarEscalaresICG(resultados) : null;

    function readNum(id) {
      var el = $(id);
      if (!el || String(el.value).trim() === '') return null;
      var x = Number(el.value);
      return Number.isNaN(x) ? null : x;
    }
    var icgIc = readNum('wisc-ic-ICG');
    var cit = readNum('inp-fsiq');

    var parts = [];
    if (crit.aplica && icgSum && icgSum.n === 5) {
      if (rowIcg) rowIcg.classList.add('wisc-fila-icg--destacada');
      parts.push(
        '<p class="wisc-icg-criterio-aviso__tit"><strong>ICG</strong> (orientativo): discrepancias mayores a 20 puntos: ' +
          escapeHtml(crit.detalle) +
          '. Suma PE para ICG: <strong>' +
          icgSum.suma +
          '</strong> (Semejanzas, Vocabulario, Cubos, Matrices, Balanzas). Contrastar IC, percentil e IC 95&nbsp;% con el manual Pearson.</p>'
      );
      if (icgIc != null && cit != null && WC.discrepanciaImportanteIcGvsCit(icgIc, cit, 20)) {
        parts.push(
          '<p class="wisc-icg-criterio-aviso__cit"><strong>|ICG \u2212 CIT| mayor a 20:</strong> el CIT integra memoria de trabajo y velocidad de procesamiento; el ICG no. El CIT puede alejarse del nivel reflejado por el ICG: revise ambos en el manual para la interpretaci\u00f3n del CI.</p>'
        );
      }
    } else if (crit.aplica && icgSum && icgSum.n < 5) {
      if (rowIcg) rowIcg.classList.remove('wisc-fila-icg--destacada');
      parts.push(
        '<p class="wisc-icg-criterio-aviso__warn">Discrepancias mayores a 20 pt (' +
          escapeHtml(crit.detalle) +
          '), pero faltan puntuaciones escalares para completar la suma ICG (5 pruebas). Revise las celdas PE.</p>'
      );
    } else {
      if (rowIcg) rowIcg.classList.remove('wisc-fila-icg--destacada');
      parts.push(
        '<p class="wisc-icg-criterio-aviso__info">Con los \u00edndices compuestos actuales <strong>no</strong> se detectan discrepancias mayores a 20 puntos entre ICV\u2013IVE, ICV\u2013IRF ni IMT\u2013IVP; la app <strong>no autocompleta el ICG</strong>. Si el manual indica calcularlo por otro criterio, introd\u00fazcalo a mano tras tabular la suma PE (Semejanzas, Vocabulario, Cubos, Matrices, Balanzas).</p>'
      );
    }
    av.innerHTML = parts.join('');
    av.classList.remove('hidden');
  }

  function actualizarTablaResumenWisc($, bateriaVal, resultados) {
    var wrap = $('tabla-resumen-wisc');
    if (!wrap || bateriaVal !== 'wisc-v') {
      if (wrap) wrap.innerHTML = '';
      return;
    }
    var WC = global.WiscCuadernillo;
    if (!WC) return;
    var sumas = WC.sumarEscalaresPorIndice(resultados);
    var orden = WC.INDICES_PRIMARIOS;
    var sCitPrim =
      typeof WC.sumarEscalaresCITPrimaria === 'function'
        ? WC.sumarEscalaresCITPrimaria(resultados)
        : null;
    if (!wrap.dataset.wiscResumenV || wrap.dataset.wiscResumenV !== '7') {
      wrap.innerHTML = construirHtmlTablaIndicesWisc();
      wrap.dataset.wiscResumenV = '7';
    }
    for (var j = 0; j < orden.length; j++) {
      var k = orden[j];
      var el = $('wisc-sum-' + k);
      var s = sumas[k];
      if (el) el.textContent = s && s.n ? String(s.suma) : '\u2014';
    }
    var sIcg = WC.sumarEscalaresICG ? WC.sumarEscalaresICG(resultados) : null;
    var elIcg = $('wisc-sum-ICG');
    if (elIcg) elIcg.textContent = sIcg && sIcg.n ? String(sIcg.suma) : '\u2014';
    var elTot = $('wisc-sum-total');
    var elTotPdPe = $('wisc-sum-cit-pdpe');
    var sumaCitTexto = '\u2014';
    var sumaCitValor = '';
    if (sCitPrim && sCitPrim.n >= 7) {
      sumaCitTexto = String(sCitPrim.suma);
      sumaCitValor = String(sCitPrim.suma);
    } else if (sCitPrim && sCitPrim.n > 0) {
      sumaCitTexto = String(sCitPrim.suma) + ' (' + sCitPrim.n + '/7)';
      sumaCitValor = String(sCitPrim.suma);
    }
    if (elTot) {
      elTot.textContent = sumaCitTexto;
    }
    if (elTotPdPe) {
      elTotPdPe.value = sumaCitValor;
    }
  }

  function modoAutomaticoWisc($) {
    var fuente = $('wisc-fuente-ic');
    return !fuente || fuente.value === 'demo';
  }

  function actualizarPercentilesTablaWisc($, parseNumInput, Baremos, bateriaVal) {
    if (bateriaVal !== 'wisc-v' || !Baremos.percentilAproxDesdeIC) return;
    var prim = global.WiscCuadernillo && global.WiscCuadernillo.INDICES_PRIMARIOS;
    var Demo = global.WiscIcDesdeSumaDemo;
    var automatico = modoAutomaticoWisc($);

    function sumaEnteraDesdeCelda(id) {
      var el = $(id);
      if (!el) return null;
      var txt = String(el.textContent || '').trim();
      return /^\d+$/.test(txt) ? Number(txt) : null;
    }

    function percentilOficial(codigo, suma) {
      if (Demo && typeof Demo.percentilDesdeSuma === 'function' && suma != null) {
        var p = Demo.percentilDesdeSuma(codigo, suma);
        if (p != null) return p;
      }
      return null;
    }

    function setPercentil(el, valor) {
      if (!el) return;
      el.value = valor == null ? '' : String(valor);
    }

    if (!automatico) {
      var fsiqManual = parseNumInput('inp-fsiq');
      var dispManual = $('wisc-display-ic-cit');
      if (dispManual) dispManual.textContent = fsiqManual != null ? String(fsiqManual) : '\u2014';
      return;
    }

    if (prim) {
      for (var pi = 0; pi < prim.length; pi++) {
        var id = prim[pi];
        var ic = parseNumInput('wisc-ic-' + id);
        var sp = $('wisc-pc-' + id);
        if (sp) {
          if (ic != null) {
            var pct = percentilOficial(id, sumaEnteraDesdeCelda('wisc-sum-' + id));
            setPercentil(sp, pct);
          } else {
            setPercentil(sp, null);
          }
        }
      }
    }
    var icIcg = parseNumInput('wisc-ic-ICG');
    var spIcg = $('wisc-pc-ICG');
    if (spIcg) {
      if (icIcg != null) {
        var pIcg = percentilOficial('ICG', sumaEnteraDesdeCelda('wisc-sum-ICG'));
        setPercentil(spIcg, pIcg);
      } else {
        setPercentil(spIcg, null);
      }
    }
    var fsiq = parseNumInput('inp-fsiq');
    var disp = $('wisc-display-ic-cit');
    if (disp) disp.textContent = fsiq != null ? String(fsiq) : '\u2014';
    var spCit = $('wisc-pc-cit');
    if (spCit) {
      if (fsiq != null) {
        var pCit = percentilOficial('CIT', sumaEnteraDesdeCelda('wisc-sum-total'));
        setPercentil(spCit, pCit);
      } else {
        setPercentil(spCit, null);
      }
    }
  }

  function edadParaBaremoWisc($) {
    var WC = global.WiscCuadernillo;
    if (!WC) return null;
    var fn = $('fecha-nacimiento');
    var fa = $('fecha-aplicacion');
    if (fn && fa && fn.value && fa.value && WC.edadCronologicaDesdeFechas) {
      var d = WC.edadCronologicaDesdeFechas(fn.value, fa.value);
      if (d) return { anos: d.anos, meses: d.meses };
    }
    var ed = $('edad-anos');
    if (ed && ed.value !== '') {
      var n = Number(ed.value);
      if (!Number.isNaN(n)) {
        var y = Math.floor(n + 1e-9);
        var m = Math.floor((n - y) * 12 + 1e-6);
        return { anos: y, meses: m };
      }
    }
    return null;
  }

  function autocompletarPeWiscDesdePd($, items, edadContext) {
    var WC = global.WiscCuadernillo;
    if (!WC || typeof WC.peDesdePdEdad !== 'function') return;
    for (var i = 0; i < items.length; i++) {
      var it = items[i];
      if (it.tipo !== 'escala') continue;
      var pdEl = $('wisc-pd-' + it.id);
      var peEl = $('wisc-pe-' + it.id);
      if (!pdEl || !peEl) continue;
      if (pdEl.value == null || String(pdEl.value).trim() === '') {
        if (peEl.dataset.autoWisc === '1') {
          peEl.value = '';
          delete peEl.dataset.autoWisc;
        }
        continue;
      }
      var pe = WC.peDesdePdEdad(pdEl.value, it.id, edadContext);
      peEl.value = pe == null ? '' : String(pe);
      if (pe == null) delete peEl.dataset.autoWisc;
      else peEl.dataset.autoWisc = '1';
    }
  }

  function autocompletarCompuestosWiscDesdeSumas($, resultados) {
    var WC = global.WiscCuadernillo;
    var Demo = global.WiscIcDesdeSumaDemo;
    if (!WC || !Demo || !modoAutomaticoWisc($)) return;
    var prim = WC.INDICES_PRIMARIOS || [];
    var sumas = WC.sumarEscalaresPorIndice(resultados);
    var derivados = prim.concat(['ICG']);
    for (var di = 0; di < derivados.length; di++) {
      var dId = derivados[di];
      var dIc = $('wisc-ic-' + dId);
      var dInt = $('wisc-int-' + dId);
      if (dIc) dIc.value = '';
      if (dInt) dInt.value = '';
    }
    var citClear = $('inp-fsiq');
    var citIntClear = $('wisc-int-cit');
    if (citClear) citClear.value = '';
    if (citIntClear) citIntClear.value = '';
    for (var i = 0; i < prim.length; i++) {
      var id = prim[i];
      var s = sumas[id];
      if (!s || s.n !== 2) continue;
      var ic = Demo.icDesdeSuma(id, s.suma);
      if (ic == null) continue;
      var icEl = $('wisc-ic-' + id);
      var intEl = $('wisc-int-' + id);
      if (icEl) icEl.value = String(ic);
      if (intEl) intEl.value = Demo.intervalo95Aprox(ic, id, s.suma);
    }
    var icv = leerIcIndiceResumen($, 'ICV', sumas, Demo);
    var ive = leerIcIndiceResumen($, 'IVE', sumas, Demo);
    var irf = leerIcIndiceResumen($, 'IRF', sumas, Demo);
    var imt = leerIcIndiceResumen($, 'IMT', sumas, Demo);
    var ivp = leerIcIndiceResumen($, 'IVP', sumas, Demo);
    var crit = WC.criterioDiscrepanciaParaIcG ? WC.criterioDiscrepanciaParaIcG(icv, ive, irf, imt, ivp, 20) : { aplica: false };
    var icgSum = WC.sumarEscalaresICG ? WC.sumarEscalaresICG(resultados) : null;
    if (crit.aplica && icgSum && icgSum.n === 5) {
      var icg = Demo.icDesdeSuma('ICG', icgSum.suma);
      if (icg != null) {
        var icgEl = $('wisc-ic-ICG');
        var icgInt = $('wisc-int-ICG');
        if (icgEl) icgEl.value = String(icg);
        if (icgInt) icgInt.value = Demo.intervalo95Aprox(icg, 'ICG', icgSum.suma);
      }
    }
    var citSum = WC.sumarEscalaresCITPrimaria ? WC.sumarEscalaresCITPrimaria(resultados) : null;
    if (citSum && citSum.n === 7) {
      var cit = Demo.icDesdeSuma('CIT', citSum.suma);
      if (cit != null) {
        var citEl = $('inp-fsiq');
        var citInt = $('wisc-int-cit');
        if (citEl) citEl.value = String(cit);
        if (citInt) citInt.value = Demo.intervalo95Aprox(cit, 'CIT', citSum.suma);
      }
    }
  }

  /**
   * @param {function} parseNumInput
   * @param {{
   *   actualizarPercentilesTablaWisc: function,
   *   actualizarGraficoCompuestosWisc: function,
   *   actualizarCampanaCIT: function,
   *   actualizarDiagnosticoOrientativoWisc: function,
   *   obtenerResultados?: function,
   *   actualizarAvisoIcGWisc?: function
   * }} post
   */
  function aplicarSugerenciaIcDemoWisc($, parseNumInput, post) {
    var Demo = global.WiscIcDesdeSumaDemo;
    if (!Demo || $('bateria').value !== 'wisc-v' || !modoAutomaticoWisc($)) return;
    var WC = global.WiscCuadernillo;
    if (!WC || !WC.INDICES_PRIMARIOS) return;
    var prim = WC.INDICES_PRIMARIOS;
    var resSnap = typeof post.obtenerResultados === 'function' ? post.obtenerResultados() : null;
    var sumasSnap = resSnap && WC.sumarEscalaresPorIndice ? WC.sumarEscalaresPorIndice(resSnap) : null;
    var i;
    for (i = 0; i < prim.length; i++) {
      var id = prim[i];
      var sumEl = $('wisc-sum-' + id);
      var icEl = $('wisc-ic-' + id);
      var intEl = $('wisc-int-' + id);
      if (!sumEl || !icEl) continue;
      if (icEl.value && String(icEl.value).trim() !== '') continue;
      var sObj = sumasSnap && sumasSnap[id];
      if (!sObj || sObj.n !== 2) continue;
      var s = sObj.suma;
      if (Number.isNaN(s)) continue;
      var ic = Demo.icDesdeSuma(id, s);
      if (ic == null) continue;
      icEl.value = String(ic);
      if (intEl && (!intEl.value || String(intEl.value).trim() === '')) {
        intEl.value = Demo.intervalo95Aprox(ic, id, s);
      }
    }
    var icvL = sumasSnap ? leerIcIndiceResumen($, 'ICV', sumasSnap, Demo) : null;
    var iveL = sumasSnap ? leerIcIndiceResumen($, 'IVE', sumasSnap, Demo) : null;
    var irfL = sumasSnap ? leerIcIndiceResumen($, 'IRF', sumasSnap, Demo) : null;
    var imtL = sumasSnap ? leerIcIndiceResumen($, 'IMT', sumasSnap, Demo) : null;
    var ivpL = sumasSnap ? leerIcIndiceResumen($, 'IVP', sumasSnap, Demo) : null;
    var critL =
      sumasSnap && WC.criterioDiscrepanciaParaIcG
        ? WC.criterioDiscrepanciaParaIcG(icvL, iveL, irfL, imtL, ivpL, 20)
        : { aplica: false };
    var icgSumObj = resSnap && WC.sumarEscalaresICG ? WC.sumarEscalaresICG(resSnap) : null;
    var icgIc = $('wisc-ic-ICG');
    var icgInt = $('wisc-int-ICG');
    if (icgIc && (!icgIc.value || String(icgIc.value).trim() === '') && critL.aplica && icgSumObj && icgSumObj.n === 5) {
      var icg = Demo.icDesdeSuma('ICG', icgSumObj.suma);
      if (icg != null) {
        icgIc.value = String(icg);
        if (icgInt && (!icgInt.value || String(icgInt.value).trim() === '')) {
          icgInt.value = Demo.intervalo95Aprox(icg, 'ICG', icgSumObj.suma);
        }
      }
    }
    var fsiq = $('inp-fsiq');
    var intCit = $('wisc-int-cit');
    var citSumObj = resSnap && WC.sumarEscalaresCITPrimaria ? WC.sumarEscalaresCITPrimaria(resSnap) : null;
    if (fsiq && (!fsiq.value || String(fsiq.value).trim() === '') && citSumObj && citSumObj.n === 7) {
      var st = citSumObj.suma;
      if (!Number.isNaN(st)) {
        var citIc = Demo.icDesdeSuma('CIT', st);
        if (citIc != null) {
          fsiq.value = String(citIc);
          if (intCit && (!intCit.value || String(intCit.value).trim() === '')) {
            intCit.value = Demo.intervalo95Aprox(citIc, 'CIT', st);
          }
        }
      }
    }
    post.actualizarPercentilesTablaWisc();
    post.actualizarGraficoCompuestosWisc();
    post.actualizarCampanaCIT();
    post.actualizarDiagnosticoOrientativoWisc();
    if (typeof post.actualizarAvisoIcGWisc === 'function') {
      post.actualizarAvisoIcGWisc();
    }
  }

  function actualizarResumenEdadEnTabla($) {
    var out = $('wisc-edad-resumen-tabla');
    if (!out) return;
    var edadCampo = $('edad-anos');
    var cuad = $('wisc-edad-computada');
    var t = '';
    if (cuad && cuad.textContent && cuad.textContent.indexOf('Indica') === -1) {
      t = 'Edad cronologica (fechas; calendario gregoriano): ' + cuad.textContent.trim();
    }
    if (edadCampo && edadCampo.value) {
      if (t) t += ' | ';
      t += 'Campo edad (anos): ' + edadCampo.value;
    }
    out.textContent =
      t || 'Indique fechas o edad en anos; baremos WISC por edad cronologica (contrastar tablas Pearson por intervalo de edad).';
  }

  global.OrientacionWisc = {
    WISC_ETIQUETA_INDICE: WISC_ETIQUETA_INDICE,
    parsePuntuacionEscalaWisc: parsePuntuacionEscalaWisc,
    renderWiscCuadernilloTable: renderWiscCuadernilloTable,
    construirHtmlTablaIndicesWisc: construirHtmlTablaIndicesWisc,
    actualizarTablaResumenWisc: actualizarTablaResumenWisc,
    actualizarPercentilesTablaWisc: actualizarPercentilesTablaWisc,
    edadParaBaremoWisc: edadParaBaremoWisc,
    modoAutomaticoWisc: modoAutomaticoWisc,
    autocompletarPeWiscDesdePd: autocompletarPeWiscDesdePd,
    autocompletarCompuestosWiscDesdeSumas: autocompletarCompuestosWiscDesdeSumas,
    aplicarSugerenciaIcDemoWisc: aplicarSugerenciaIcDemoWisc,
    actualizarAvisoIcGWisc: actualizarAvisoIcGWisc,
    actualizarResumenEdadEnTabla: actualizarResumenEdadEnTabla
  };
})(typeof window !== 'undefined' ? window : this);
