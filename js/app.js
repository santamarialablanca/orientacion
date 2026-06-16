/**
 * Orquestacion: formulario, persistencia, validacion, delegacion a modulos WISC / graficos / informe.
 */
(function () {
  'use strict';

  var Baremos = window.Baremos;
  var PERFILES_BATERIA = window.PERFILES_BATERIA;
  var OW = window.OrientacionWisc;
  var OI = window.OrientacionInforme;
  var OG = window.OrientacionGraficos;
  var OP = window.OrientacionPersistencia;
  var WV = window.WiscValidacion;
  if (!Baremos || !PERFILES_BATERIA || !OW || !OI || !OG) {
    console.error('Cargar baremos, perfiles, wisc-ui, informe y graficos-app antes de app.js');
    return;
  }

  var recalcTimer = null;
  var persistTimer = null;
  var ELLIPSIS = '\u2026';

  function $(id) {
    return document.getElementById(id);
  }

  function getItemsBateria() {
    var bateria = $('bateria').value;
    var arr = PERFILES_BATERIA[bateria] || PERFILES_BATERIA.generica;
    if (bateria === 'sena' && window.SenaFiltro && PERFILES_BATERIA.sena) {
      var inf = $('sena-informante') ? $('sena-informante').value : 'familia';
      var ed = $('sena-banda-edad') ? $('sena-banda-edad').value : 'primaria';
      return window.SenaFiltro.filtrar(PERFILES_BATERIA.sena, inf, ed);
    }
    if (bateria === 'celf5' && window.Celf5Filtro && PERFILES_BATERIA.celf5) {
      var banda = $('celf-banda') ? $('celf-banda').value : '5-8';
      return window.Celf5Filtro.filtrar(PERFILES_BATERIA.celf5, banda);
    }
    return arr;
  }

  function parseNumInput(id) {
    var el = $(id);
    if (!el || el.value === '') return null;
    var n = Number(el.value);
    return Number.isNaN(n) ? null : n;
  }

  function escapeHtml(s) {
    var div = document.createElement('div');
    div.textContent = s;
    return div.innerHTML;
  }

  function actualizarSalidasInforme(resultados) {
    var ctx = { $: $, parseNumInput: parseNumInput, Baremos: Baremos };
    var profesional =
      typeof OI.generarInformeProfesional === 'function'
        ? OI.generarInformeProfesional(resultados, ctx)
        : OI.generarTextoInforme(resultados, ctx);
    $('informe-texto').value = profesional;
    var anexo = $('informe-anexo-texto');
    if (anexo) anexo.value = OI.generarTextoInforme(resultados, ctx);
  }

  function copiarTextarea(id, botonId, textoNormal) {
    var t = $(id);
    var btn = $(botonId);
    if (!t || !btn) return;
    function marcarCopiado() {
      btn.textContent = 'Copiado';
      setTimeout(function () {
        btn.textContent = textoNormal;
      }, 2000);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(t.value).then(marcarCopiado);
    } else {
      t.select();
      document.execCommand('copy');
      marcarCopiado();
    }
  }

  function actualizarResumenSenaFiltro() {
    var res = $('sena-filtro-resumen');
    if (!res) return;
    if ($('bateria').value !== 'sena') {
      res.classList.add('hidden');
      res.textContent = '';
      return;
    }
    var items = getItemsBateria();
    var inf = $('sena-informante') ? $('sena-informante').value : 'familia';
    var ed = $('sena-banda-edad') ? $('sena-banda-edad').value : 'primaria';
    var labInf = { familia: 'Familia', escuela: 'Escuela', autoinforme: 'Autoinforme' };
    var labEd = { infantil: 'Infantil (3-6)', primaria: 'Primaria (6-12)', secundaria: 'Secundaria (12-18)' };
    if (items.length === 0) {
      res.classList.add('hidden');
      res.textContent = '';
      return;
    }
    res.textContent =
      'Mostrando ' +
      items.length +
      ' escalas para informante \u00ab' +
      (labInf[inf] || inf) +
      '\u00bb y cuestionario \u00ab' +
      (labEd[ed] || ed) +
      '\u00bb (Nivel 3: hoja Padres / Profesores / Autoinforme segun manual TEA). Compruebe el ejemplar.';
    res.classList.remove('hidden');
  }

  function actualizarResumenCelfFiltro() {
    var res = $('celf-filtro-resumen');
    if (!res) return;
    if ($('bateria').value !== 'celf5') {
      res.classList.add('hidden');
      res.textContent = '';
      return;
    }
    var items = getItemsBateria();
    var banda = $('celf-banda') ? $('celf-banda').value : '5-8';
    var lab = { '5-8': '5:0\u20138:11', '9-12': '9:0\u201312:11', '13-21': '13:0\u201321:11' };
    res.textContent =
      'Banda de edad CELF-5: ' +
      (lab[banda] || banda) +
      '. Se muestran ' +
      items.length +
      ' filas (subpruebas e indices). Compruebe el cuadernillo de su edicion.';
    res.classList.remove('hidden');
  }

  function actualizarModoWisc() {
    var automatico = OW.modoAutomaticoWisc ? OW.modoAutomaticoWisc($) : true;
    var ids = ['ICV', 'IVE', 'IRF', 'IMT', 'IVP', 'ICG'];
    for (var i = 0; i < ids.length; i++) {
      var ic = $('wisc-ic-' + ids[i]);
      var intv = $('wisc-int-' + ids[i]);
      var pc = $('wisc-pc-' + ids[i]);
      if (ic) ic.readOnly = automatico;
      if (intv) intv.readOnly = automatico;
      if (pc) pc.readOnly = automatico;
    }
    var cit = $('inp-fsiq');
    var citInt = $('wisc-int-cit');
    var citPc = $('wisc-pc-cit');
    if (cit) cit.readOnly = automatico;
    if (citInt) citInt.readOnly = automatico;
    if (citPc) citPc.readOnly = automatico;
    var btn = $('btn-wisc-sugerir-ic');
    if (btn) {
      btn.disabled = !automatico;
      btn.title = automatico ? '' : 'Disponible solo en modo automático con tablas locales.';
    }
  }

  function renderFormularioBateria() {
    var b = $('bateria').value;
    var tr = $('tabla-resumen-wisc');
    if (b !== 'wisc-v' && tr) {
      tr.innerHTML = '';
      delete tr.dataset.wiscResumenV;
    }
    if (b === 'wisc-v') {
      OW.renderWiscCuadernilloTable($, getItemsBateria);
      actualizarResumenSenaFiltro();
      actualizarResumenCelfFiltro();
      return;
    }
    var items = getItemsBateria();
    var cont = $('contenedor-subtests');
    if (b === 'sena' && items.length === 0) {
      var infE = $('sena-informante') ? $('sena-informante').value : 'familia';
      var edE = $('sena-banda-edad') ? $('sena-banda-edad').value : 'primaria';
      var vacioTxt =
        window.SenaFiltro && window.SenaFiltro.mensajeVacio(infE, edE)
          ? window.SenaFiltro.mensajeVacio(infE, edE)
          : 'No hay escalas que mostrar para esta combinacion. Cambie informante o banda de edad, o revise el manual.';
      cont.innerHTML =
        '<p class="card__hint sena-filtro-vacio" role="status">' + escapeHtml(vacioTxt) + '</p>';
      actualizarResumenSenaFiltro();
      actualizarResumenCelfFiltro();
      return;
    }
    var lastGrupo = null;
    var html = '';
    var hintBruta = 'Bruta';
    if (b === 'sena') hintBruta = 'T';
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      if (item.grupo && item.grupo !== lastGrupo) {
        lastGrupo = item.grupo;
        html += '<div class="subtest-grupo">' + escapeHtml(item.grupo) + '</div>';
      }
      var attrs = ' placeholder="0"';
      if (b === 'celf5') {
        var hintCelf = item.tipo === 'ci' ? 'IC' : 'PE';
        var abCelf = item.abrev
          ? '<span class="sena-abrev" style="color:#0f766e">' + escapeHtml(item.abrev) + '</span> '
          : '';
        html +=
          '<div class="subtest-row">' +
          '<p class="subtest-row__label">' +
          abCelf +
          '<label for="inp-' +
          item.id +
          '">' +
          escapeHtml(item.nombre) +
          '</label></p>' +
          '<div class="subtest-row__inputs">' +
          '<span class="subtest-row__hint">' +
          hintCelf +
          '</span>' +
          '<input type="number" id="inp-' +
          item.id +
          '" class="input input--narrow" data-tipo="' +
          item.tipo +
          '" data-id="' +
          item.id +
          '"' +
          attrs +
          ' />' +
          '<span class="resultado-escala" id="out-' +
          item.id +
          '">\u2014</span>' +
          '</div></div>';
        continue;
      }
      if (b === 'sena') {
        var abHtml = item.abrev
          ? '<span class="sena-abrev">' + escapeHtml(item.abrev) + '</span> '
          : '';
        html +=
          '<div class="subtest-row subtest-row--sena">' +
          '<p class="subtest-row__label">' +
          abHtml +
          '<label for="inp-' +
          item.id +
          '">' +
          escapeHtml(item.nombre) +
          '</label></p>' +
          '<div class="subtest-row__inputs sena-inputs">' +
          '<span class="subtest-row__hint">PD</span>' +
          '<input type="number" id="inp-pd-' +
          item.id +
          '" class="input input--narrow input--sena-pd" inputmode="numeric" placeholder="PD"' +
          attrs +
          ' />' +
          '<span class="subtest-row__hint">' +
          hintBruta +
          '</span>' +
          '<input type="number" id="inp-' +
          item.id +
          '" class="input input--narrow input--sena-t" data-tipo="' +
          item.tipo +
          '" data-id="' +
          item.id +
          '"' +
          attrs +
          ' />' +
          '<span class="resultado-escala" id="out-' +
          item.id +
          '">\u2014</span>' +
          '</div></div>';
      } else {
        html +=
          '<div class="subtest-row">' +
          '<p class="subtest-row__label"><label for="inp-' +
          item.id +
          '">' +
          escapeHtml(item.nombre) +
          '</label></p>' +
          '<div class="subtest-row__inputs">' +
          '<span class="subtest-row__hint">' +
          hintBruta +
          '</span>' +
          '<input type="number" id="inp-' +
          item.id +
          '" class="input input--narrow" data-tipo="' +
          item.tipo +
          '" data-id="' +
          item.id +
          '"' +
          attrs +
          ' />' +
          '<span class="resultado-escala" id="out-' +
          item.id +
          '">\u2014</span>' +
          '</div></div>';
      }
    }
    cont.innerHTML = html;
    actualizarResumenSenaFiltro();
    actualizarResumenCelfFiltro();
  }

  function actualizarHintBateria() {
    var el = $('card-hint-puntuaciones');
    if (!el) return;
    var key = $('bateria').value;
    var textos = {
      'wisc-v':
        'WISC-V por bloques (ICV\u2013IVP) y CIT; ICG en tabla de indices. PD->PE usa la tabla A.1 del manual local (orientacion/manuales), por intervalos semestrales (x:0-x:5 y x:6-x:11). Preferir fechas de nacimiento/aplicacion.',
      sena:
        'Elija informante y banda como en su ejemplar (p. ej. Primaria-Familia Nivel 3). PD y T como en la hoja de perfil; el grafico usa T (10-90, linea en 50). Verifique el manual TEA.',
      celf5:
        'Seleccione la banda de edad del cuadernillo (5-8, 9-12, 13-21). Introduzca PE e IC tal como figuren en la correccion (manual Pearson); la app no convierte PD a PE.',
      generica: 'Plantilla generica: introduce brutas o valores segun tu criterio. La conversion es solo demostracion.'
    };
    el.textContent = textos[key] || textos.generica;
  }

  function actualizarVistaBateria() {
    var w = $('bateria').value === 'wisc-v';
    var b = $('bloque-wisc-cuadernillo');
    if (b) b.classList.toggle('hidden', !w);
    var t = $('envoltorio-tabla-wisc');
    if (t) t.classList.toggle('hidden', !w);
    var g = $('envoltorio-grafico-compuestos');
    if (g) g.classList.toggle('hidden', !w && $('bateria').value !== 'celf5');
    var camp = $('envoltorio-campana-cit');
    if (camp) camp.classList.toggle('hidden', !w);
    var diag = $('wisc-diagnostico-orientativo');
    if (diag) diag.classList.toggle('hidden', !w);
    var cond = $('wisc-diagnostico-conducta');
    if (cond) cond.classList.toggle('hidden', !w);
    var senaBlk = $('bloque-sena-opciones');
    if (senaBlk) senaBlk.classList.toggle('hidden', $('bateria').value !== 'sena');
    var celfBlk = $('bloque-celf5-opciones');
    if (celfBlk) celfBlk.classList.toggle('hidden', $('bateria').value !== 'celf5');
    var lbl = $('label-grafico-perfil');
    if (lbl) {
      if (w) {
        lbl.textContent = 'Perfil de puntuaciones escalares (1-19), linea y media 10';
      } else if ($('bateria').value === 'sena') {
        lbl.textContent =
          'Perfil T (10-90) como hoja oficial: bandas de riesgo/clinico; linea vertical en T=50 (M=50, DE=10)';
      } else if ($('bateria').value === 'celf5') {
        lbl.textContent = 'Perfil PE (1-19) subpruebas CELF-5; linea en 10 (M=10, DE=3). Indices IC en texto.';
      } else {
        lbl.textContent = 'Barras / perfil por subtest';
      }
    }
    var lr = $('label-grafico-radar');
    if (lr) {
      if ($('bateria').value === 'sena') {
        lr.textContent = 'Radar — puntuaciones T (10-90; M=50)';
      } else if ($('bateria').value === 'celf5') {
        lr.textContent = 'Radar — PE subpruebas (1-19; misma escala que el perfil)';
      } else if (w) {
        lr.textContent = 'Radar — PE / escala 1-19 (misma escala que el perfil)';
      } else {
        lr.textContent = 'Radar — misma escala que el perfil (1-19 o valores introducidos)';
      }
    }
    var lc = $('label-grafico-compuestos');
    if (lc) {
      if (w) {
        lc.textContent =
          'Indices compuestos WISC-V (ICV-IVP + ICG + CIT): barras horizontales IC 40-160, linea vertical en 100';
      } else if ($('bateria').value === 'celf5') {
        lc.textContent =
          'Indices compuestos CELF-5 (IC): barras horizontales 40-160, linea vertical en 100 (como hoja de indices)';
      } else {
        lc.textContent = 'Indices compuestos';
      }
    }
  }

  function rellenarRejillaEdadWisc() {
    var WC = window.WiscCuadernillo;
    if (!WC || !WC.desgloseFechaISO) return;
    var fn = $('fecha-nacimiento');
    var fa = $('fecha-aplicacion');
    var dn = fn && fn.value ? WC.desgloseFechaISO(fn.value) : null;
    var da = fa && fa.value ? WC.desgloseFechaISO(fa.value) : null;
    function setCell(suf, d) {
      var a = $('wisc-grid-' + suf + '-a');
      var m = $('wisc-grid-' + suf + '-m');
      var di = $('wisc-grid-' + suf + '-d');
      if (!a || !m || !di) return;
      if (d) {
        a.textContent = String(d.anio);
        m.textContent = String(d.mes);
        di.textContent = String(d.dia);
      } else {
        a.textContent = '\u2014';
        m.textContent = '\u2014';
        di.textContent = '\u2014';
      }
    }
    setCell('app', da);
    setCell('nac', dn);
    var ecA = $('wisc-grid-ec-a');
    var ecM = $('wisc-grid-ec-m');
    var ecD = $('wisc-grid-ec-d');
    if (ecA && ecM && ecD && WC.edadCronologicaDesdeFechas && fn && fa && fn.value && fa.value) {
      var dec = WC.edadCronologicaDesdeFechas(fn.value, fa.value);
      if (dec) {
        ecA.textContent = String(dec.anos);
        ecM.textContent = String(dec.meses);
        ecD.textContent = String(dec.dias);
      } else {
        ecA.textContent = '\u2014';
        ecM.textContent = '\u2014';
        ecD.textContent = '\u2014';
      }
    } else if (ecA && ecM && ecD) {
      ecA.textContent = '\u2014';
      ecM.textContent = '\u2014';
      ecD.textContent = '\u2014';
    }
  }

  function syncEdadDesdeFechas() {
    var fn = $('fecha-nacimiento');
    var fa = $('fecha-aplicacion');
    var out = $('wisc-edad-computada');
    var edadInput = $('edad-anos');
    if (!fn || !fa || !out || !window.WiscCuadernillo) return;
    rellenarRejillaEdadWisc();
    if (!fn.value || !fa.value) {
      out.textContent = 'Indica fecha de nacimiento y fecha de aplicacion.';
      OW.actualizarResumenEdadEnTabla($);
      return;
    }
    var d = window.WiscCuadernillo.edadCronologicaDesdeFechas(fn.value, fa.value);
    if (!d) {
      out.textContent = 'Fechas no validas (la aplicacion debe ser posterior al nacimiento).';
      OW.actualizarResumenEdadEnTabla($);
      return;
    }
    out.textContent = d.texto + ' (~' + d.anosDecimal.toFixed(2) + ' anos)';
    if (edadInput) edadInput.value = String(d.anosDecimal.toFixed(2));
    OW.actualizarResumenEdadEnTabla($);
    recalcularTodo();
  }

  function obtenerResultados() {
    var items = getItemsBateria();
    var resultados = [];
    var esWisc = $('bateria').value === 'wisc-v';
    var esSena = $('bateria').value === 'sena';
    var esCelf5 = $('bateria').value === 'celf5';
    var parsePE = OW.parsePuntuacionEscalaWisc;
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      var bruta = '';
      var valor = null;
      if (esWisc) {
        if (item.tipo === 'ci') {
          var inpF = $('inp-fsiq');
          bruta = inpF ? inpF.value : '';
          valor = bruta === '' ? null : Number(bruta);
          if (valor !== null && Number.isNaN(valor)) valor = null;
        } else {
          var pd = $('wisc-pd-' + item.id);
          var pe = $('wisc-pe-' + item.id);
          bruta = pd ? pd.value : '';
          valor = pe && pe.value ? parsePE(pe.value) : null;
        }
      } else if (esSena) {
        var inpS = $('inp-' + item.id);
        bruta = inpS ? inpS.value : '';
        if (item.tipo === 'ci') {
          valor = bruta === '' ? null : Number(bruta);
          if (valor !== null && Number.isNaN(valor)) valor = null;
        } else {
          valor = bruta === '' ? null : Number(bruta);
          if (valor !== null && Number.isNaN(valor)) valor = null;
        }
        var inpPd = $('inp-pd-' + item.id);
        var pdVal = inpPd && inpPd.value !== '' ? inpPd.value : '';
        resultados.push(
          Object.assign({}, item, { bruta: bruta, valor: valor, pdBruta: pdVal })
        );
        var out = $('out-' + item.id);
        if (out) {
          if (valor === null) out.textContent = '\u2014';
          else if (item.tipo === 'ci') out.textContent = 'CI ' + valor;
          else out.textContent = 'T ' + valor;
        }
        continue;
      } else if (esCelf5) {
        var inpCe = $('inp-' + item.id);
        bruta = inpCe ? inpCe.value : '';
        valor = bruta === '' ? null : Number(bruta);
        if (valor !== null && Number.isNaN(valor)) valor = null;
        resultados.push(Object.assign({}, item, { bruta: bruta, valor: valor }));
        var outCe = $('out-' + item.id);
        if (outCe) {
          if (valor === null) outCe.textContent = '\u2014';
          else if (item.tipo === 'ci') outCe.textContent = 'IC ' + valor;
          else outCe.textContent = 'PE ' + valor;
        }
        continue;
      } else {
        var inp = $('inp-' + item.id);
        bruta = inp ? inp.value : '';
        if (item.tipo === 'ci') {
          valor = bruta === '' ? null : Number(bruta);
          if (valor !== null && Number.isNaN(valor)) valor = null;
        } else {
          valor = Baremos.brutaAEscalaSimulada(bruta, item.id);
        }
      }
      resultados.push(Object.assign({}, item, { bruta: bruta, valor: valor }));
      var out = $('out-' + item.id);
      if (out) {
        if (valor === null) out.textContent = '\u2014';
        else if (item.tipo === 'ci') out.textContent = 'CI ' + valor;
        else if (esSena) out.textContent = 'T ' + valor;
        else out.textContent = 'Escala ' + valor;
      }
    }
    return resultados;
  }

  function actualizarAdvertenciasWisc() {
    var box = $('wisc-validacion-warnings');
    if (!box || $('bateria').value !== 'wisc-v') {
      if (box) {
        box.innerHTML = '';
        box.classList.add('hidden');
      }
      return;
    }
    var items = getItemsBateria().filter(function (it) {
      return it.tipo === 'escala';
    });
    var adv = WV.recolectarAdvertenciasDom(document, $, items);
    if (WV.advertenciaEdad) {
      var advEdad = WV.advertenciaEdad(OW.edadParaBaremoWisc($));
      if (advEdad) adv.unshift(advEdad);
    }
    for (var vi = 0; vi < items.length; vi++) {
      var pdV = $('wisc-pd-' + items[vi].id);
      var peV = $('wisc-pe-' + items[vi].id);
      if (pdV && peV && String(pdV.value).trim() !== '' && String(peV.value).trim() === '') {
        adv.push(items[vi].nombre + ': no existe conversión automática PD→PE para la edad y puntuación indicadas.');
      }
    }
    if (!adv.length) {
      box.innerHTML = '';
      box.classList.add('hidden');
      return;
    }
    box.classList.remove('hidden');
    var html = '<p class="wisc-validacion-warnings__titulo">Avisos de validación:</p><ul class="wisc-validacion-warnings__list">';
    for (var i = 0; i < adv.length; i++) {
      html += '<li>' + escapeHtml(adv[i]) + '</li>';
    }
    html += '</ul>';
    box.innerHTML = html;
  }

  function actualizarLeyenda(resultados) {
    var el = $('leyenda-interpretacion');
    var partes = [];
    var bat = $('bateria').value;
    var SI = window.SenaInterpretacion;
    for (var i = 0; i < resultados.length; i++) {
      var r = resultados[i];
      if (r.valor === null) continue;
      if (r.tipo === 'ci') {
        var etiquetaIc = bat === 'celf5' ? 'IC' : 'CI';
        partes.push(
          '<p><strong>' +
            escapeHtml(r.nombre) +
            ':</strong> ' +
            etiquetaIc +
            ' ' +
            r.valor +
            ' \u2014 <span class="text-slate-800">' +
            escapeHtml(Baremos.interpretarCI(r.valor)) +
            '</span></p>'
        );
      } else if (bat === 'sena' && SI) {
        var interpS = SI.interpretarZonaManual
          ? { etiqueta: SI.interpretarZonaManual(r.valor, r.polaridad), clase: 'text-slate-800' }
          : SI.interpretarT(r.valor);
        var notaPol = '';
        if (r.polaridad === 'recurso') {
          notaPol =
            ' <span class="text-slate-500">(recursos: T baja = menos recursos)</span>';
        } else if (r.polaridad === 'problema') {
          notaPol =
            ' <span class="text-slate-500">(problemas: T alta = mas indicadores)</span>';
        }
        partes.push(
          '<p><strong>' +
            escapeHtml(r.nombre) +
            ':</strong> T ' +
            r.valor +
            ' \u2014 <span class="' +
            interpS.clase +
            '">' +
            escapeHtml(interpS.etiqueta) +
            '</span>' +
            notaPol +
            '</p>'
        );
      } else {
        var interp = Baremos.interpretarEscala(r.valor);
        var prefPe = bat === 'celf5' ? 'PE' : 'escala';
        partes.push(
          '<p><strong>' +
            escapeHtml(r.nombre) +
            ':</strong> ' +
            prefPe +
            ' ' +
            r.valor +
            ' \u2014 <span class="' +
            interp.clase +
            '">' +
            escapeHtml(interp.etiqueta) +
            '</span></p>'
        );
      }
    }
    if (bat === 'celf5' && window.Celf5Modelo && partes.length) {
      partes.unshift(
        '<p class="text-xs text-slate-500">' + escapeHtml(window.Celf5Modelo.notaLegal) + '</p>'
      );
    }
    if (bat === 'sena' && SI && partes.length) {
      partes.unshift(
        '<p class="text-xs text-slate-500">' + escapeHtml(SI.notaLegal) + '</p>'
      );
    }
    if (partes.length) {
      el.className = 'leyenda';
      el.innerHTML = partes.join('');
    } else {
      el.className = 'leyenda leyenda--empty';
      el.innerHTML =
        '<p>Introduce puntuaciones y pulsa \u00abAplicar baremos e interpretar\u00bb.</p>';
    }
  }

  function actualizarDiagnosticoOrientativoWisc() {
    var wrap = $('wisc-diagnostico-orientativo');
    if (!wrap) return;
    if ($('bateria').value !== 'wisc-v' || !window.WiscDiagnosticoOrientativo) {
      wrap.innerHTML = '';
      return;
    }
    var idx = {
      icv: parseNumInput('wisc-ic-ICV'),
      ive: parseNumInput('wisc-ic-IVE'),
      irf: parseNumInput('wisc-ic-IRF'),
      imt: parseNumInput('wisc-ic-IMT'),
      ivp: parseNumInput('wisc-ic-IVP'),
      cit: parseNumInput('inp-fsiq')
    };
    var alguno = false;
    for (var key in idx) {
      if (idx[key] != null) alguno = true;
    }
    var introFlujo =
      typeof window.WiscDiagnosticoOrientativo.textoIntroFlujo === 'function'
        ? '<p class="wisc-diagnostico__intro">' +
          escapeHtml(window.WiscDiagnosticoOrientativo.textoIntroFlujo()) +
          '</p>'
        : '';
    if (!alguno) {
      wrap.innerHTML =
        '<h3 class="wisc-diagnostico__titulo">A partir del WISC-V (orientativo)</h3>' +
        introFlujo +
        '<p class="wisc-diagnostico__vacio">Indique los indices compuestos (IC) en la tabla de conversion para aplicar los criterios orientativos (ICV, IVE, IRF, etc.). En edad infantil el equivalente habitual es WPPSI-IV.</p>';
      return;
    }
    var hallazgos = window.WiscDiagnosticoOrientativo.evaluar(idx);
    var html =
      '<h3 class="wisc-diagnostico__titulo">A partir del WISC-V (orientativo)</h3>' +
      introFlujo +
      '<p class="wisc-diagnostico__aviso">No sustituye valoracion clinica ni criterios oficiales. Umbrales heuristicos: CIT &lt; ' +
      window.WiscDiagnosticoOrientativo.UMBRAL_CIT_DI +
      ' (valoracion muy baja); AACC homogeneo: CIT y los cinco indices &gt;= ' +
      window.WiscDiagnosticoOrientativo.UMBRAL_AACC +
      '; CIT alto sin todos los indices o con dispersion: mensajes aparte; ICV &lt; ' +
      window.WiscDiagnosticoOrientativo.UMBRAL_ICV_TEL +
      ' (lenguaje); diferencias ICV vs otros &gt; ' +
      window.WiscDiagnosticoOrientativo.UMBRAL_DIFERENCIA +
      ' puntos; perfil medio 90-110 (dislexia); IMT/IRF bajos (discalculia heuristica).</p>';
    for (var i = 0; i < hallazgos.length; i++) {
      var h = hallazgos[i];
      html +=
        '<div class="wisc-diagnostico__item wisc-diagnostico__item--' +
        escapeHtml(h.severidad) +
        '">' +
        '<p class="wisc-diagnostico__item-titulo">' +
        escapeHtml(h.titulo) +
        '</p>' +
        '<p class="wisc-diagnostico__item-texto">' +
        escapeHtml(h.texto) +
        '</p></div>';
    }
    wrap.innerHTML = html;
  }

  function schedulePersistir() {
    var chk = $('persist-local-habilitado');
    if (!chk || !chk.checked) return;
    if (persistTimer) clearTimeout(persistTimer);
    persistTimer = setTimeout(function () {
      persistTimer = null;
      var panel = OP.getPanel();
      if (panel) OP.guardar(panel);
    }, 400);
  }

  function recalcularTodo() {
    OG.configure({
      $: $,
      Baremos: Baremos,
      parseNumInput: parseNumInput
    });
    var batAct = $('bateria').value;
    if (batAct === 'wisc-v') {
      OW.autocompletarPeWiscDesdePd($, getItemsBateria(), OW.edadParaBaremoWisc($));
    }
    var resultados = obtenerResultados();
    if (batAct === 'wisc-v') {
      OW.actualizarTablaResumenWisc($, batAct, resultados);
      actualizarModoWisc();
      OW.autocompletarCompuestosWiscDesdeSumas($, resultados);
      resultados = obtenerResultados();
    }
    var bat = $('bateria').value;
    OW.actualizarTablaResumenWisc($, bat, resultados);
    OW.actualizarPercentilesTablaWisc($, parseNumInput, Baremos, bat);
    if (bat === 'wisc-v') {
      OW.actualizarAvisoIcGWisc($, obtenerResultados());
    }
    actualizarSalidasInforme(resultados);
    OG.actualizarGrafico(resultados);
    OG.actualizarGraficoCompuestos(resultados);
    OG.actualizarCampanaCIT();
    actualizarLeyenda(resultados);
    actualizarDiagnosticoOrientativoWisc();
    actualizarAdvertenciasWisc();
    OW.actualizarResumenEdadEnTabla($);
    schedulePersistir();
  }

  function scheduleRecalcularTodo() {
    if (recalcTimer) clearTimeout(recalcTimer);
    recalcTimer = setTimeout(function () {
      recalcTimer = null;
      recalcularTodo();
    }, 100);
  }

  function init() {
    OG.configure({
      $: $,
      Baremos: Baremos,
      parseNumInput: parseNumInput
    });

    $('bateria').addEventListener('change', function () {
      actualizarHintBateria();
      renderFormularioBateria();
      actualizarVistaBateria();
      recalcularTodo();
    });
    var senaInf = $('sena-informante');
    var senaEd = $('sena-banda-edad');
    var celfBand = $('celf-banda');
    function onFiltroBateriaSecundario() {
      renderFormularioBateria();
      recalcularTodo();
    }
    if (senaInf) senaInf.addEventListener('change', onFiltroBateriaSecundario);
    if (senaEd) senaEd.addEventListener('change', onFiltroBateriaSecundario);
    if (celfBand) celfBand.addEventListener('change', onFiltroBateriaSecundario);
    var fuenteIc = $('wisc-fuente-ic');
    if (fuenteIc) fuenteIc.addEventListener('change', recalcularTodo);
    $('btn-recalcular').addEventListener('click', recalcularTodo);
    $('btn-generar-texto').addEventListener('click', function () {
      var resultados = obtenerResultados();
      OW.actualizarTablaResumenWisc($, $('bateria').value, resultados);
      actualizarSalidasInforme(resultados);
      OG.actualizarGraficoCompuestos(resultados);
      OG.actualizarCampanaCIT();
      actualizarDiagnosticoOrientativoWisc();
    });
    $('btn-copiar').addEventListener('click', function () {
      copiarTextarea('informe-texto', 'btn-copiar', 'Copiar al portapapeles');
    });
    var btnCopiarAnexo = $('btn-copiar-anexo');
    if (btnCopiarAnexo) {
      btnCopiarAnexo.addEventListener('click', function () {
        copiarTextarea('informe-anexo-texto', 'btn-copiar-anexo', 'Copiar anexo');
      });
    }
    var btnImprimir = $('btn-imprimir');
    if (btnImprimir) {
      btnImprimir.addEventListener('click', function () {
        window.print();
      });
    }

    var fn = $('fecha-nacimiento');
    var fa = $('fecha-aplicacion');
    if (fn) fn.addEventListener('change', syncEdadDesdeFechas);
    if (fa) fa.addEventListener('change', syncEdadDesdeFechas);

    var panel = $('panel-estandar');
    if (panel) {
      panel.addEventListener('input', scheduleRecalcularTodo);
      panel.addEventListener('change', scheduleRecalcularTodo);
    }

    var btnSug = $('btn-wisc-sugerir-ic');
    if (btnSug) {
      btnSug.addEventListener('click', function () {
        OW.aplicarSugerenciaIcDemoWisc($, parseNumInput, {
          actualizarPercentilesTablaWisc: function () {
            OW.actualizarPercentilesTablaWisc($, parseNumInput, Baremos, $('bateria').value);
          },
          actualizarGraficoCompuestosWisc: function () {
            OG.actualizarGraficoCompuestos(obtenerResultados());
          },
          actualizarCampanaCIT: function () {
            OG.actualizarCampanaCIT();
          },
          actualizarDiagnosticoOrientativoWisc: actualizarDiagnosticoOrientativoWisc,
          obtenerResultados: obtenerResultados,
          actualizarAvisoIcGWisc: function () {
            OW.actualizarAvisoIcGWisc($, obtenerResultados());
          }
        });
        schedulePersistir();
      });
    }

    var chkP = $('persist-local-habilitado');
    if (chkP) {
      chkP.addEventListener('change', function () {
        if (chkP.checked) {
          schedulePersistir();
        } else {
          OP.limpiar();
        }
      });
    }

    var btnRest = $('btn-persist-restaurar');
    if (btnRest) {
      btnRest.addEventListener('click', function () {
        if (OP.cargar(OP.getPanel())) {
          if (chkP) chkP.checked = true;
          renderFormularioBateria();
          actualizarVistaBateria();
          rellenarRejillaEdadWisc();
          OW.actualizarResumenEdadEnTabla($);
          recalcularTodo();
        }
      });
    }

    var btnLimpiar = $('btn-persist-limpiar');
    if (btnLimpiar) {
      btnLimpiar.addEventListener('click', function () {
        OP.limpiar();
        if (chkP) chkP.checked = false;
      });
    }

    window.addEventListener('resize', function () {
      OG.actualizarCampanaCIT();
    });
    window.addEventListener('beforeprint', function () {
      var informe = $('informe-texto');
      if (informe) informe.style.height = informe.scrollHeight + 'px';
    });
    window.addEventListener('afterprint', function () {
      var informe = $('informe-texto');
      if (informe) informe.style.height = '';
    });

    var btnImp = $('btn-import-pe-aplicar');
    var txtImp = $('wisc-import-pe-texto');
    if (btnImp && txtImp && window.OrientacionImportacionWisc) {
      btnImp.addEventListener('click', function () {
        var filas = window.OrientacionImportacionWisc.parseFilasPE(txtImp.value);
        window.OrientacionImportacionWisc.aplicarFilasPE(filas, $);
        scheduleRecalcularTodo();
      });
    }

    actualizarHintBateria();
    renderFormularioBateria();
    actualizarVistaBateria();
    rellenarRejillaEdadWisc();

    recalcularTodo();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
