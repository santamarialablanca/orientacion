/**
 * Tests de funciones puras cargando los mismos IIFE que el navegador (vm + global window).
 */
'use strict';

var fs = require('fs');
var path = require('path');
var vm = require('vm');

var root = path.join(__dirname, '..');
var js = path.join.bind(path, path.join(root, 'js'));

function loadScript(file) {
  var code = fs.readFileSync(file, 'utf8');
  var sandbox = {
    window: {},
    console: console,
    document: {},
    navigator: {},
    Chart: function () {}
  };
  sandbox.window = sandbox;
  vm.createContext(sandbox);
  vm.runInContext(code, sandbox);
  return sandbox;
}

function loadScripts(files) {
  var sandbox = {
    window: {},
    console: console,
    document: {},
    navigator: {},
    Chart: function () {}
  };
  sandbox.window = sandbox;
  vm.createContext(sandbox);
  for (var i = 0; i < files.length; i++) {
    vm.runInContext(fs.readFileSync(files[i], 'utf8'), sandbox);
  }
  return sandbox;
}

var assert = function (cond, msg) {
  if (!cond) throw new Error(msg || 'Assertion failed');
};

var n = 0;
function ok(label) {
  n++;
  console.log('ok: ' + label);
}

try {
  var baremosCtx = loadScript(js('baremos.js'));
  var Baremos = baremosCtx.Baremos;
  assert(Baremos.percentilAproxDesdeIC(100) === 50, 'percentil 100 -> 50');
  assert(Baremos.percentilAproxDesdeIC(85) < 50, 'percentil 85 < 50');
  ok('baremos percentilAproxDesdeIC');

  assert(Baremos.interpretarEscala(5).etiqueta.indexOf('Bajo') >= 0, 'escala 5 bajo');
  assert(Baremos.interpretarEscala(1).etiqueta.indexOf('Muy bajo') >= 0, 'escala 1');
  assert(Baremos.interpretarEscala(19).etiqueta.indexOf('Muy alto') >= 0, 'escala 19');
  assert(Baremos.percentilAproxDesdeIC(40) < 1, 'percentil IC 40 bajo');
  assert(Baremos.percentilAproxDesdeIC(160) > 99, 'percentil IC 160 alto');
  assert(Baremos.interpretarCI(70) === 'Muy bajo', 'CI 70 muy bajo');
  assert(Baremos.interpretarCI(71) === 'Baja', 'CI 71 baja');
  assert(Baremos.interpretarCI(80) === 'Media/baja', 'CI 80 media/baja');
  assert(Baremos.interpretarCI(110) === 'Media/alta', 'CI 110 media/alta');
  assert(Baremos.interpretarCI(130) === 'Muy alto', 'CI 130 muy alto');
  assert(Baremos.interpretarEscala(4).etiqueta === 'Bajo', 'PE 4 bajo unificado');
  assert(Baremos.interpretarEscala(7).etiqueta === 'Medio-bajo', 'PE 7 medio-bajo unificado');
  ok('baremos interpretarEscala');

  var cuadCtx = loadScripts([
    js('wisc-v-baremos-oficiales.js'),
    js('wisc-v-baremos-a1-manual.js'),
    js('wisc-v-cuadernillo.js')
  ]);
  var WB = cuadCtx.WiscBaremosOficiales;
  assert(WB && WB.procedencia && WB.procedencia.tablasReextraidasDesdePdfUsuario === false, 'baremos procedencia pdf');
  assert(cuadCtx.WiscBaremosA1Manual && cuadCtx.WiscBaremosA1Manual.procedencia.tabla === 'A.1', 'baremos A1 manual cargados');
  var WC = cuadCtx.WiscCuadernillo;
  var res = [
    { tipo: 'escala', valor: 7, indice: 'ICV', id: 'sim' },
    { tipo: 'escala', valor: 6, indice: 'ICV', id: 'voc' },
    { tipo: 'escala', valor: 12, indice: 'IVE', id: 'cub' }
  ];
  var sumas = WC.sumarEscalaresPorIndice(res);
  assert(sumas.ICV.suma === 13 && sumas.ICV.n === 2, 'suma ICV');
  assert(sumas.IVE.suma === 12, 'suma IVE');
  var cit = WC.sumarEscalaresCITPrimaria([
    { tipo: 'escala', valor: 7, id: 'sim' },
    { tipo: 'escala', valor: 6, id: 'voc' },
    { tipo: 'escala', valor: 12, id: 'cub' },
    { tipo: 'escala', valor: 8, id: 'mat' },
    { tipo: 'escala', valor: 6, id: 'dig' },
    { tipo: 'escala', valor: 3, id: 'cla' },
    { tipo: 'escala', valor: 19, id: 'bal' }
  ]);
  assert(cit.suma === 61 && cit.n === 7, 'CIT primaria 7 subtests');
  var vacios = WC.sumarEscalaresPorIndice([]);
  assert(vacios.ICV === null && vacios.IVE === null, 'indices vacios sin datos');
  var edadCorta = WC.edadCronologicaDesdeFechas('2010-01-31', '2010-03-01');
  assert(edadCorta && edadCorta.anos === 0 && edadCorta.meses === 0 && edadCorta.dias === 29, 'edad cronologica calendario ene-31 a mar-1');
  var edadEjemplo = WC.edadCronologicaDesdeFechas('2015-08-11', '2026-04-13');
  assert(
    edadEjemplo && edadEjemplo.anos === 10 && edadEjemplo.meses === 8 && edadEjemplo.dias === 2,
    'edad cronologica 11-ago-2015 a 13-abr-2026'
  );
  assert(WC.bandaBaremoWiscDesdeDesglose(edadCorta.anos, edadCorta.meses) === null, 'edad inferior fuera de rango WISC');
  assert(WC.bandaBaremoWiscDesdeDesglose(17, 0) === null, 'edad superior fuera de rango WISC');
  var edadNoRedondeo = WC.edadCronologicaDesdeFechas('2008-12-16', '2017-12-12');
  assert(edadNoRedondeo && edadNoRedondeo.anos === 8 && edadNoRedondeo.meses === 11, 'edad sin redondeo por dias');
  assert(WC.bandaBaremoWiscDesdeDesglose(edadNoRedondeo.anos, edadNoRedondeo.meses) === '8_6', 'banda 8_6 desde 8a11m');
  var resInf = [
    { tipo: 'escala', valor: 7, indice: 'ICV', id: 'sim' },
    { tipo: 'escala', valor: 6, indice: 'ICV', id: 'voc' },
    { tipo: 'escala', valor: 20, indice: 'ICV', id: 'inf' }
  ];
  var sumInf = WC.sumarEscalaresPorIndice(resInf);
  assert(sumInf.ICV.suma === 13 && sumInf.ICV.n === 2, 'ICV solo nucleo columna');
  assert(WC.ORDEN_PRUEBAS_CUADERNILLO_ES && WC.ORDEN_PRUEBAS_CUADERNILLO_ES.length === 15, 'orden cuadernillo ES');
  assert(WC.bandaBaremoWiscDesdeDesglose(11, 5) === '11_0', 'banda 11 anos 5 meses -> 11_0');
  assert(WC.IDS_SUMA_ICG.length === 5, 'ICG suma 5 PE');
  assert(
    WC.IDS_SUMA_ICG.join(',') === 'sim,voc,cub,mat,bal',
    'ICG subtests sim voc cub mat bal'
  );
  var icgRes5 = [
    { tipo: 'escala', valor: 10, id: 'sim' },
    { tipo: 'escala', valor: 10, id: 'voc' },
    { tipo: 'escala', valor: 10, id: 'cub' },
    { tipo: 'escala', valor: 10, id: 'mat' },
    { tipo: 'escala', valor: 10, id: 'bal' }
  ];
  var sIcg5 = WC.sumarEscalaresICG(icgRes5);
  assert(sIcg5.suma === 50 && sIcg5.n === 5, 'suma ICG 5 PE');
  assert(WC.sumarEscalaresICG(icgRes5.slice(0, 4)).n === 4, 'ICG incompleto n<5');
  assert(WC.criterioDiscrepanciaParaIcG(100, 70, 95, 100, 100, 20).aplica === true, 'crit ICV-IVE >20');
  assert(WC.criterioDiscrepanciaParaIcG(100, 95, 95, 100, 100, 20).aplica === false, 'crit sin discrepancia');
  assert(WC.discrepanciaImportanteIcGvsCit(120, 90, 20) === true, '|ICG-CIT| >20');
  assert(WC.discrepanciaImportanteIcGvsCit(100, 95, 20) === false, '|ICG-CIT| <=20');
  var ed11 = { anos: 11, meses: 5 };
  assert(WC.peDesdePdEdad(34, 'sim', ed11) === 15, 'Semejanzas PD34 PE15 (tabla 11_0 manual)');
  assert(WC.peDesdePdEdad(34, 'voc', ed11) === 15, 'Vocabulario PD34 PE15 (tabla 11_0 manual)');
  assert(WC.peDesdePdEdad(49, 'cub', ed11) === 19, 'Cubos PD49 PE19 (tabla 11_0 manual)');
  var ed7 = WC.edadCronologicaDesdeFechas('2018-12-18', '2026-05-25');
  assert(WC.bandaBaremoWiscDesdeDesglose(ed7.anos, ed7.meses) === '7_0', 'banda 7 anos 5 meses -> 7_0');
  assert(WC.peDesdePdEdad(26, 'cub', ed7) === 13, 'Cubos PD26 PE13 (tabla 7_0 manual)');
  assert(WC.peDesdePdEdad(22, 'sim', ed7) === 15, 'Semejanzas PD22 PE15 (tabla 7_0 manual)');
  assert(WC.peDesdePdEdad(17, 'mat', ed7) === 15, 'Matrices PD17 PE15 (tabla 7_0 manual)');
  assert(WC.peDesdePdEdad(21, 'dig', ed7) === 14, 'Digitos PD21 PE14 (tabla 7_0 manual)');
  assert(WC.peDesdePdEdad(15, 'bal', ed7) === 12, 'Balanzas PD15 PE12 (tabla 7_0 manual)');
  assert(WC.peDesdePdEdad(26, 'cub', { anos: 5, meses: 11 }) === null, 'PD no convierte fuera de edad WISC');
  ok('wisc-v-cuadernillo sumas');

  var demoCtx = loadScript(js('wisc-v-ic-desde-suma-demo.js'));
  var Demo = demoCtx.WiscIcDesdeSumaDemo;
  assert(Demo.icDesdeSuma('ICV', 13) === 81, 'manual ICV 13 -> 81');
  assert(Demo.icDesdeSuma('ICV', 15) === 86, 'manual ICV 15 -> 86');
  assert(Demo.icDesdeSuma('IVP', 15) === 86, 'manual IVP 15 -> 86');
  assert(Demo.icDesdeSuma('CIT', 61) === 91, 'manual CIT 61 -> 91');
  assert(Demo.icDesdeSuma('ICV', 1) === null, 'manual ICV suma fuera de tabla');
  assert(Demo.icDesdeSuma('CIT', 133) === 160, 'manual CIT 133 -> 160');
  assert(Demo.icDesdeSuma('IVE', 29) === 126, 'manual IVE 29 -> 126');
  assert(Demo.icDesdeSuma('ICG', 50) === 100, 'manual ICG/IHG 50 -> 100');
  assert(Demo.icDesdeSuma('XYZ', 10) === null, 'manual codigo desconocido');
  assert(Demo.percentilDesdeSuma('CIT', 69) === '47', 'manual CIT 69 percentil 47');
  assert(Demo.intervalo95Aprox(99, 'CIT', 69) === '93-105', 'manual CIT 69 IC95');
  ok('wisc-v-ic-desde-suma-demo tablas manual');

  var valCtx = loadScript(js('validacion-wisc.js'));
  var WV = valCtx.WiscValidacion;
  assert(WV.advertenciaEdad({ anos: 5, meses: 11 }) !== null, 'edad WISC inferior advertida');
  assert(WV.advertenciaEdad({ anos: 16, meses: 11 }) === null, 'edad WISC limite valida');
  assert(WV.advertenciaPE('25', 'X') !== null, 'PE 25 fuera rango');
  assert(WV.advertenciaPE('10', 'X') === null, 'PE 10 ok');
  assert(WV.advertenciaPE('', 'X') === null, 'PE vacia sin aviso');
  assert(WV.advertenciaPE('1', 'X') === null, 'PE 1 limite');
  assert(WV.advertenciaPE('19', 'X') === null, 'PE 19 limite');
  assert(WV.advertenciaPE('0', 'X') !== null, 'PE 0 fuera');
  assert(WV.advertenciaIC('200', 'IC') !== null, 'IC 200 fuera');
  assert(WV.advertenciaIC('40', 'IC') === null, 'IC 40 limite');
  assert(WV.advertenciaIC('160', 'IC') === null, 'IC 160 limite');
  assert(WV.advertenciaIC('', 'IC') === null, 'IC vacio sin aviso');
  ok('validacion-wisc advertencias');

  var wiscUiSrc = fs.readFileSync(js('wisc-ui.js'), 'utf8');
  assert(wiscUiSrc.indexOf('Escala total (CIT)') >= 0, 'wisc-ui etiqueta CIT');
  assert(wiscUiSrc.indexOf('wisc-int-ICG') >= 0 && wiscUiSrc.indexOf('p. ej. 95-105') >= 0, 'ICG placeholder');
  assert(wiscUiSrc.indexOf('wisc-sum-cit-pdpe') >= 0 && wiscUiSrc.indexOf('Suma PE') >= 0, 'fila CIT suma PE');
  assert(wiscUiSrc.indexOf('Suma CIT (columna del cuadernillo)') >= 0, 'nota CIT columna');
  assert(wiscUiSrc.indexOf('tabla-wisc-pd-pe__ayuda') >= 0, 'ayuda orden PD-PE');
  assert(wiscUiSrc.indexOf('Puzles visuales') >= 0, 'nota bloques indice');
  var idxHtml = fs.readFileSync(path.join(root, 'tests.html'), 'utf8');
  assert(
    idxHtml.indexOf('Conversión de suma de puntuaciones escalares a puntuaciones compuestas') >= 0,
    'h3 conversion compuestas'
  );
  assert(
    idxHtml.indexOf('assets/brand/la-parra-logo-crop.png') >= 0 &&
      fs.existsSync(path.join(root, 'assets', 'brand', 'la-parra-logo-crop.png')),
    'logo La Parra integrado'
  );
  assert(
    idxHtml.indexOf('informe-anexo-texto') >= 0 &&
      idxHtml.indexOf('Automático — tablas locales del manual') >= 0 &&
      idxHtml.indexOf('btn-imprimir') >= 0,
    'informe profesional y modo automatico'
  );
  assert(idxHtml.indexOf('js/wisc-v-baremos-a1-manual.js') >= 0, 'HTML carga baremos A1 manual');
  assert(idxHtml.indexOf('js/wisc-v-baremos-oficiales.js') < 0, 'HTML no carga fallback de normas US');
  assert(
    idxHtml.indexOf('css/tailwind.css') >= 0 &&
      idxHtml.indexOf('cdn.tailwindcss.com') < 0 &&
      fs.existsSync(path.join(root, 'css', 'tailwind.css')),
    'Tailwind compilado localmente'
  );
  var selectorHtml = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  assert(
    selectorHtml.indexOf('Selector de instrumentos') >= 0 &&
      selectorHtml.indexOf('tests.html?bateria=wisc-v') >= 0,
    'index selector restaurado'
  );
  assert(wiscUiSrc.indexOf('modoAutomaticoWisc') >= 0 && wiscUiSrc.indexOf('s.n !== 2') >= 0, 'IC automaticos solo con sumas completas');
  assert(
    wiscUiSrc.indexOf("if (!automatico)") >= 0 &&
      wiscUiSrc.indexOf("el.value = valor == null ? '' : String(valor)") >= 0,
    'percentiles manuales no se sobrescriben'
  );
  var appSrc = fs.readFileSync(js('app.js'), 'utf8');
  assert(
    appSrc.indexOf("var pc = $('wisc-pc-' + ids[i])") >= 0 &&
      appSrc.indexOf('if (pc) pc.readOnly = automatico') >= 0,
    'percentiles editables segun fuente'
  );
  var grafSrc = fs.readFileSync(js('graficos-app.js'), 'utf8');
  assert(grafSrc.indexOf('escala total (CIT)') >= 0 && grafSrc.indexOf('FSIQ') === -1, 'graficos leyenda CIT');
  assert(
    grafSrc.indexOf("cfg.parseNumInput('inp-fsiq')") >= 0 &&
      grafSrc.indexOf("'CIT ' +") >= 0 &&
      grafSrc.indexOf('mediaCi = 100') >= 0,
    'campana CIT usa puntuacion compuesta'
  );
  assert(
    grafSrc.indexOf('Media/baja') >= 0 &&
      grafSrc.indexOf('Media/alta') >= 0 &&
      grafSrc.indexOf('BANDAS_CI') >= 0,
    'graficos tramos CI'
  );
  var polarSrc = fs.readFileSync(js('diagrama-polar-dco.js'), 'utf8');
  assert(
    polarSrc.indexOf('Media PE 10') >= 0 &&
      polarSrc.indexOf('radioDesdeProporcion') >= 0 &&
      polarSrc.indexOf('stroke-dasharray') >= 0,
    'diagrama polar anillos media'
  );
  var informeSrc = fs.readFileSync(js('informe.js'), 'utf8');
  assert(
    informeSrc.indexOf('INTERPRETACION CUALITATIVA WISC-V') >= 0 &&
      informeSrc.indexOf('Los resultados obtenidos por') >= 0 &&
      informeSrc.indexOf('Percentiles e intervalos desde tablas locales') >= 0 &&
      informeSrc.indexOf('CONCLUSIONES') >= 0 &&
      informeSrc.indexOf('perfil cognitivo') >= 0 &&
      informeSrc.indexOf('generarInformeProfesional') >= 0 &&
      informeSrc.indexOf('pcE && pcE.value') >= 0,
    'informe WISC narrativo'
  );
  ok('wisc-ui textos cuadernillo ES');

  var diagCtx = loadScript(js('wisc-v-diagnostico-orientativo.js'));
  var WD = diagCtx.WiscDiagnosticoOrientativo;
  assert(WD.patronTEL(70, 95, 92) === true, 'TEL estricto IVE/IRF +20 sobre ICV');
  assert(WD.patronTEL(70, 89, 95) === false, 'TEL no cumple si IVE no alcanza');
  assert(WD.patronTDAH_ICG(100, 100, 100, 70, 75) === true, 'TDAH/ICG gap medias');
  assert(WD.patronTDAH_ICG(100, 100, 100, 85, 85) === false, 'TDAH sin gap 20');
  assert(WD.patronDislexia(100, 100, 100, 100, 100, 100) === true, 'perfil medio dislexia');
  assert(WD.patronDiscalculia(100, 100, 75, 85, 100, 100) === true, 'discalculia heuristica');
  var evDi = WD.evaluar({ icv: 100, ive: 100, irf: 100, imt: 100, ivp: 100, cit: 55 });
  assert(evDi.length >= 1 && evDi[0].codigo === 'cit_muy_bajo_di', 'evaluar CIT bajo');
  assert(WD.patronAACC_estricto(132, 132, 132, 132, 132, 132) === true, 'AACC estricto');
  assert(WD.patronAACC_estricto(132, 132, 132, 132, 125, 132) === false, 'AACC no estricto si un indice bajo');
  assert(WD.patronAACC_cit_alto_heterogeneo(135, 135, 135, 135, 100, 135) === true, 'CIT alto heterogeneo');
  assert(WD.patronAACC_cit_alto_incompleto(135, 135, null, null, null, null) === true, 'CIT alto indices incompletos');
  assert(
    typeof WD.textoRecordatorioConducta === 'function' && WD.textoRecordatorioConducta().indexOf('SENA') >= 0,
    'texto recordatorio conducta'
  );
  ok('wisc-v-diagnostico-orientativo patrones');

  var senaCtx = loadScript(js('sena-interpretacion.js'));
  var SenaI = senaCtx.SenaInterpretacion;
  assert(SenaI.interpretarT(50).etiqueta.indexOf('Media') >= 0, 'SENA T 50 media');
  assert(SenaI.colorBarraT(65, 'problema').indexOf('22') >= 0, 'SENA bar verde perfil');
  ok('sena-interpretacion');

  var perfCtx = loadScript(js('perfiles.js'));
  var senaLista = perfCtx.PERFILES_BATERIA.sena;
  var filtCtx = loadScript(js('sena-filtro.js'));
  var SF = filtCtx.SenaFiltro;
  assert(SF.filtrar(senaLista, 'autoinforme', 'infantil').length === 0, 'SENA autoinforme infantil sin filas');
  var secFam = SF.filtrar(senaLista, 'familia', 'secundaria');
  assert(secFam.some(function (x) { return x.id === 'p_sust'; }), 'consumo sustancias en secundaria');
  var infFam = SF.filtrar(senaLista, 'familia', 'infantil');
  assert(!infFam.some(function (x) { return x.id === 'p_sust'; }), 'sustancias no en infantil');
  assert(infFam.some(function (x) { return x.id === 'p_desv'; }), 'desarrollo en infantil');
  ok('sena-filtro');

  var celfFiltCtx = loadScript(js('celf5-filtro.js'));
  var CF = celfFiltCtx.Celf5Filtro;
  var celfLista = perfCtx.PERFILES_BATERIA.celf5;
  assert(celfLista && celfLista.length > 0, 'CELF perfiles definidos');
  assert(CF.filtrar(celfLista, '5-8').length === 12, 'CELF 5-8 doce filas');
  assert(CF.filtrar(celfLista, '9-12').length === 12, 'CELF 9-12 doce filas');
  assert(CF.filtrar(celfLista, '13-21').length === 12, 'CELF 13-21 doce filas');
  ok('celf5-filtro');

  console.log('');
  console.log('Pasaron ' + n + ' grupos de tests.');
  process.exit(0);
} catch (e) {
  console.error('FAIL:', e.message);
  process.exit(1);
}
