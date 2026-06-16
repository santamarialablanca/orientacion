/**
 * Definicion de items por bateria.
 * WISC-V: orden por bloques ICV, IVE, IRF, IMT, IVP; luego escala total (CIT).
 */
(function (global) {
  'use strict';

  /** Encabezados de bloque como en la pagina de resumen del cuadernillo WISC-V (ES). */
  var G_ICV = 'Comp. verbal (ICV)';
  var G_IVE = 'Visoespacial (IVE)';
  var G_IRF = 'Razon. fluido (IRF)';
  var G_IMT = 'Mem. trabajo (IMT)';
  var G_IVP = 'Vel. proces. (IVP)';
  var G_GLOB = 'Compuesto global';

  global.PERFILES_BATERIA = {
    'wisc-v': [
      { id: 'sim', nombre: 'Semejanzas', tipo: 'escala', grupo: G_ICV, indice: 'ICV', abrev: 'Sim', nucleo: true },
      { id: 'voc', nombre: 'Vocabulario', tipo: 'escala', grupo: G_ICV, indice: 'ICV', abrev: 'Voc', nucleo: true },
      { id: 'inf', nombre: 'Informaci\u00f3n', tipo: 'escala', grupo: G_ICV, indice: 'ICV', abrev: 'Inf', nucleo: false },
      { id: 'com', nombre: 'Comprensi\u00f3n', tipo: 'escala', grupo: G_ICV, indice: 'ICV', abrev: 'Com', nucleo: false },
      { id: 'cub', nombre: 'Cubos', tipo: 'escala', grupo: G_IVE, indice: 'IVE', abrev: 'Cub', nucleo: true },
      { id: 'puz', nombre: 'Puzles visuales', tipo: 'escala', grupo: G_IVE, indice: 'IVE', abrev: 'Puz', nucleo: true },
      { id: 'mat', nombre: 'Matrices', tipo: 'escala', grupo: G_IRF, indice: 'IRF', abrev: 'Mat', nucleo: true },
      { id: 'bal', nombre: 'Balanzas', tipo: 'escala', grupo: G_IRF, indice: 'IRF', abrev: 'Bal', nucleo: true },
      { id: 'ari', nombre: 'Aritm\u00e9tica', tipo: 'escala', grupo: G_IRF, indice: 'IRF', abrev: 'Ari', nucleo: false },
      { id: 'dig', nombre: 'D\u00edgitos', tipo: 'escala', grupo: G_IMT, indice: 'IMT', abrev: 'Dig', nucleo: true },
      { id: 'pic', nombre: 'Span de dibujos', tipo: 'escala', grupo: G_IMT, indice: 'IMT', abrev: 'Pic', nucleo: true },
      { id: 'lyn', nombre: 'Letras y n\u00fameros', tipo: 'escala', grupo: G_IMT, indice: 'IMT', abrev: 'LyN', nucleo: false },
      { id: 'cla', nombre: 'Claves', tipo: 'escala', grupo: G_IVP, indice: 'IVP', abrev: 'Cla', nucleo: true },
      { id: 'bus', nombre: 'B\u00fasqueda de s\u00edmbolos', tipo: 'escala', grupo: G_IVP, indice: 'IVP', abrev: 'Bus', nucleo: true },
      { id: 'can', nombre: 'Cancelaci\u00f3n', tipo: 'escala', grupo: G_IVP, indice: 'IVP', abrev: 'Can', nucleo: false },
      { id: 'fsiq', nombre: 'Escala total (CIT)', tipo: 'ci', grupo: G_GLOB }
    ],
    /**
     * SENA: estructura alineada con hojas de perfil Nivel 3 (Padres, Profesores, Autoinforme).
     * senaInformantes: familia = Padres, escuela = Profesores, autoinforme = Autoinforme.
     * senaEdades: Nivel 3 habitual en primaria y secundaria; infantil incluye subconjunto + retraso desarrollo.
     * Contrastar siempre con el ejemplar y el manual TEA / manual tecnico.
     */
    sena: [
      { id: 'sena_inf', nombre: 'Infrecuencia', tipo: 'escala', grupo: 'Escalas de control', abrev: 'INF', polaridad: 'neutral', senaInformantes: ['familia', 'escuela', 'autoinforme'], senaEdades: ['primaria', 'secundaria'] },
      { id: 'sena_inc', nombre: 'Inconsistencia', tipo: 'escala', grupo: 'Escalas de control', abrev: 'INC', polaridad: 'neutral', senaInformantes: ['familia', 'escuela', 'autoinforme'], senaEdades: ['primaria', 'secundaria'] },
      { id: 'sena_inf_i', nombre: 'Infrecuencia', tipo: 'escala', grupo: 'Escalas de control', abrev: 'INF', polaridad: 'neutral', senaInformantes: ['familia', 'escuela'], senaEdades: ['infantil'] },
      { id: 'sena_inc_i', nombre: 'Inconsistencia', tipo: 'escala', grupo: 'Escalas de control', abrev: 'INC', polaridad: 'neutral', senaInformantes: ['familia', 'escuela'], senaEdades: ['infantil'] },
      { id: 'sena_tot', nombre: '\u00cdndice total de problemas', tipo: 'escala', grupo: '\u00cdndices globales', abrev: 'TOT', polaridad: 'problema', senaInformantes: ['familia', 'escuela', 'autoinforme'], senaEdades: ['primaria', 'secundaria'] },
      { id: 'sena_int', nombre: 'Problemas interiorizados', tipo: 'escala', grupo: '\u00cdndices globales', abrev: 'INT', polaridad: 'problema', senaInformantes: ['familia', 'escuela', 'autoinforme'], senaEdades: ['primaria', 'secundaria'] },
      { id: 'sena_ext', nombre: 'Problemas exteriorizados', tipo: 'escala', grupo: '\u00cdndices globales', abrev: 'EXT', polaridad: 'problema', senaInformantes: ['familia', 'escuela', 'autoinforme'], senaEdades: ['primaria', 'secundaria'] },
      { id: 'sena_eje', nombre: 'Problemas en funciones ejecutivas', tipo: 'escala', grupo: '\u00cdndices globales', abrev: 'EJE', polaridad: 'problema', senaInformantes: ['familia', 'escuela'], senaEdades: ['primaria', 'secundaria'] },
      { id: 'sena_ctx', nombre: 'Problemas contextuales', tipo: 'escala', grupo: '\u00cdndices globales', abrev: 'CTX', polaridad: 'problema', senaInformantes: ['autoinforme'], senaEdades: ['primaria', 'secundaria'] },
      { id: 'sena_rec', nombre: '\u00cdndice de recursos personales', tipo: 'escala', grupo: '\u00cdndices globales', abrev: 'REC', polaridad: 'recurso', senaInformantes: ['familia', 'escuela', 'autoinforme'], senaEdades: ['primaria', 'secundaria'] },
      { id: 'sena_tot_i', nombre: '\u00cdndice total de problemas', tipo: 'escala', grupo: '\u00cdndices globales', abrev: 'TOT', polaridad: 'problema', senaInformantes: ['familia', 'escuela'], senaEdades: ['infantil'] },
      { id: 'sena_int_i', nombre: 'Problemas interiorizados', tipo: 'escala', grupo: '\u00cdndices globales', abrev: 'INT', polaridad: 'problema', senaInformantes: ['familia', 'escuela'], senaEdades: ['infantil'] },
      { id: 'sena_ext_i', nombre: 'Problemas exteriorizados', tipo: 'escala', grupo: '\u00cdndices globales', abrev: 'EXT', polaridad: 'problema', senaInformantes: ['familia', 'escuela'], senaEdades: ['infantil'] },
      { id: 'sena_rec_i', nombre: '\u00cdndice de recursos personales', tipo: 'escala', grupo: '\u00cdndices globales', abrev: 'REC', polaridad: 'recurso', senaInformantes: ['familia', 'escuela'], senaEdades: ['infantil'] },
      { id: 'sena_dep', nombre: 'Depresi\u00f3n', tipo: 'escala', grupo: 'Problemas interiorizados', abrev: 'DEP', polaridad: 'problema', senaInformantes: ['familia', 'escuela', 'autoinforme'], senaEdades: ['primaria', 'secundaria'] },
      { id: 'sena_ans', nombre: 'Ansiedad', tipo: 'escala', grupo: 'Problemas interiorizados', abrev: 'ANS', polaridad: 'problema', senaInformantes: ['familia', 'escuela', 'autoinforme'], senaEdades: ['primaria', 'secundaria'] },
      { id: 'sena_asc', nombre: 'Ansiedad social', tipo: 'escala', grupo: 'Problemas interiorizados', abrev: 'ASC', polaridad: 'problema', senaInformantes: ['familia', 'escuela', 'autoinforme'], senaEdades: ['primaria', 'secundaria'] },
      { id: 'sena_som', nombre: 'Somatizaci\u00f3n', tipo: 'escala', grupo: 'Problemas interiorizados', abrev: 'SOM', polaridad: 'problema', senaInformantes: ['familia', 'escuela', 'autoinforme'], senaEdades: ['primaria', 'secundaria'] },
      { id: 'sena_dep_i', nombre: 'Depresi\u00f3n', tipo: 'escala', grupo: 'Problemas interiorizados', abrev: 'DEP', polaridad: 'problema', senaInformantes: ['familia', 'escuela'], senaEdades: ['infantil'] },
      { id: 'sena_ans_i', nombre: 'Ansiedad', tipo: 'escala', grupo: 'Problemas interiorizados', abrev: 'ANS', polaridad: 'problema', senaInformantes: ['familia', 'escuela'], senaEdades: ['infantil'] },
      { id: 'sena_asc_i', nombre: 'Ansiedad social', tipo: 'escala', grupo: 'Problemas interiorizados', abrev: 'ASC', polaridad: 'problema', senaInformantes: ['familia', 'escuela'], senaEdades: ['infantil'] },
      { id: 'sena_som_i', nombre: 'Somatizaci\u00f3n', tipo: 'escala', grupo: 'Problemas interiorizados', abrev: 'SOM', polaridad: 'problema', senaInformantes: ['familia', 'escuela'], senaEdades: ['infantil'] },
      { id: 'sena_ate', nombre: 'Problemas de atenci\u00f3n', tipo: 'escala', grupo: 'Problemas exteriorizados', abrev: 'ATE', polaridad: 'problema', senaInformantes: ['familia', 'escuela'], senaEdades: ['primaria', 'secundaria'] },
      { id: 'sena_hip', nombre: 'Hiperactividad e impulsividad', tipo: 'escala', grupo: 'Problemas exteriorizados', abrev: 'HIP', polaridad: 'problema', senaInformantes: ['familia', 'escuela', 'autoinforme'], senaEdades: ['primaria', 'secundaria'] },
      { id: 'sena_ira', nombre: 'Problemas de control de la ira', tipo: 'escala', grupo: 'Problemas exteriorizados', abrev: 'IRA', polaridad: 'problema', senaInformantes: ['familia', 'escuela', 'autoinforme'], senaEdades: ['primaria', 'secundaria'] },
      { id: 'sena_agr', nombre: 'Agresividad', tipo: 'escala', grupo: 'Problemas exteriorizados', abrev: 'AGR', polaridad: 'problema', senaInformantes: ['familia', 'escuela', 'autoinforme'], senaEdades: ['primaria', 'secundaria'] },
      { id: 'sena_des', nombre: 'Conducta desafiante', tipo: 'escala', grupo: 'Problemas exteriorizados', abrev: 'DES', polaridad: 'problema', senaInformantes: ['familia', 'escuela', 'autoinforme'], senaEdades: ['primaria', 'secundaria'] },
      { id: 'sena_ant', nombre: 'Conducta antisocial', tipo: 'escala', grupo: 'Problemas exteriorizados', abrev: 'ANT', polaridad: 'problema', senaInformantes: ['familia', 'escuela'], senaEdades: ['primaria', 'secundaria'] },
      { id: 'sena_hip_i', nombre: 'Hiperactividad e impulsividad', tipo: 'escala', grupo: 'Problemas exteriorizados', abrev: 'HIP', polaridad: 'problema', senaInformantes: ['familia', 'escuela'], senaEdades: ['infantil'] },
      { id: 'sena_ira_i', nombre: 'Problemas de control de la ira', tipo: 'escala', grupo: 'Problemas exteriorizados', abrev: 'IRA', polaridad: 'problema', senaInformantes: ['familia', 'escuela'], senaEdades: ['infantil'] },
      {
        id: 'p_sust',
        nombre: 'Consumo de sustancias',
        tipo: 'escala',
        grupo: 'Problemas exteriorizados',
        abrev: 'SUS',
        polaridad: 'problema',
        senaInformantes: ['familia', 'autoinforme'],
        senaEdades: ['primaria', 'secundaria']
      },
      { id: 'sena_esq', nombre: 'Esquizotipia', tipo: 'escala', grupo: 'Otros problemas', abrev: 'ESQ', polaridad: 'problema', senaInformantes: ['autoinforme'], senaEdades: ['primaria', 'secundaria'] },
      { id: 'sena_ali_f', nombre: 'Problemas de la conducta alimentaria', tipo: 'escala', grupo: 'Otros problemas', abrev: 'ALI', polaridad: 'problema', senaInformantes: ['familia'], senaEdades: ['primaria', 'secundaria'] },
      { id: 'sena_ali_a', nombre: 'Problemas de la conducta alimentaria', tipo: 'escala', grupo: 'Otros problemas', abrev: 'ALI', polaridad: 'problema', senaInformantes: ['autoinforme'], senaEdades: ['primaria', 'secundaria'] },
      { id: 'sena_inu_f', nombre: 'Comportamiento inusual', tipo: 'escala', grupo: 'Otros problemas', abrev: 'INU', polaridad: 'problema', senaInformantes: ['familia', 'escuela'], senaEdades: ['primaria', 'secundaria'] },
      { id: 'sena_apr', nombre: 'Problemas de aprendizaje', tipo: 'escala', grupo: 'Otros problemas', abrev: 'APR', polaridad: 'problema', senaInformantes: ['escuela'], senaEdades: ['primaria', 'secundaria'] },
      { id: 'sena_fam', nombre: 'Problemas familiares', tipo: 'escala', grupo: 'Problemas contextuales', abrev: 'FAM', polaridad: 'problema', senaInformantes: ['autoinforme'], senaEdades: ['primaria', 'secundaria'] },
      { id: 'sena_esc', nombre: 'Problemas con la escuela', tipo: 'escala', grupo: 'Problemas contextuales', abrev: 'ESC', polaridad: 'problema', senaInformantes: ['autoinforme'], senaEdades: ['primaria', 'secundaria'] },
      { id: 'sena_com', nombre: 'Problemas con los compa\u00f1eros', tipo: 'escala', grupo: 'Problemas contextuales', abrev: 'COM', polaridad: 'problema', senaInformantes: ['autoinforme'], senaEdades: ['primaria', 'secundaria'] },
      { id: 'sena_reg', nombre: 'Problemas de regulaci\u00f3n emocional', tipo: 'escala', grupo: 'Escalas de vulnerabilidades', abrev: 'REG', polaridad: 'problema', senaInformantes: ['familia', 'escuela', 'autoinforme'], senaEdades: ['primaria', 'secundaria'] },
      { id: 'sena_per', nombre: 'Perfeccionismo', tipo: 'escala', grupo: 'Escalas de vulnerabilidades', abrev: 'PER', polaridad: 'problema', senaInformantes: ['familia', 'escuela', 'autoinforme'], senaEdades: ['primaria', 'secundaria'] },
      { id: 'sena_rig', nombre: 'Rigidez', tipo: 'escala', grupo: 'Escalas de vulnerabilidades', abrev: 'RIG', polaridad: 'problema', senaInformantes: ['familia', 'escuela'], senaEdades: ['primaria', 'secundaria'] },
      { id: 'sena_ais', nombre: 'Aislamiento', tipo: 'escala', grupo: 'Escalas de vulnerabilidades', abrev: 'AIS', polaridad: 'problema', senaInformantes: ['familia', 'escuela'], senaEdades: ['primaria', 'secundaria'] },
      { id: 'sena_bus', nombre: 'B\u00fasqueda de sensaciones', tipo: 'escala', grupo: 'Escalas de vulnerabilidades', abrev: 'BUS', polaridad: 'problema', senaInformantes: ['autoinforme'], senaEdades: ['primaria', 'secundaria'] },
      { id: 'sena_reg_i', nombre: 'Problemas de regulaci\u00f3n emocional', tipo: 'escala', grupo: 'Escalas de vulnerabilidades', abrev: 'REG', polaridad: 'problema', senaInformantes: ['familia', 'escuela'], senaEdades: ['infantil'] },
      { id: 'sena_per_i', nombre: 'Perfeccionismo', tipo: 'escala', grupo: 'Escalas de vulnerabilidades', abrev: 'PER', polaridad: 'problema', senaInformantes: ['familia', 'escuela'], senaEdades: ['infantil'] },
      { id: 'sena_est', nombre: 'Disposici\u00f3n al estudio', tipo: 'escala', grupo: 'Escalas de recursos personales', abrev: 'EST', polaridad: 'recurso', senaInformantes: ['familia', 'escuela'], senaEdades: ['primaria', 'secundaria'] },
      { id: 'sena_iem', nombre: 'Inteligencia emocional', tipo: 'escala', grupo: 'Escalas de recursos personales', abrev: 'IEM', polaridad: 'recurso', senaInformantes: ['familia', 'escuela'], senaEdades: ['primaria', 'secundaria'] },
      { id: 'sena_soc_fe', nombre: 'Competencia social', tipo: 'escala', grupo: 'Escalas de recursos personales', abrev: 'SOC', polaridad: 'recurso', senaInformantes: ['familia', 'escuela'], senaEdades: ['primaria', 'secundaria'] },
      { id: 'sena_aut', nombre: 'Autoestima', tipo: 'escala', grupo: 'Escalas de recursos personales', abrev: 'AUT', polaridad: 'recurso', senaInformantes: ['autoinforme'], senaEdades: ['primaria', 'secundaria'] },
      { id: 'sena_soc_a', nombre: 'Competencia social', tipo: 'escala', grupo: 'Escalas de recursos personales', abrev: 'SOC', polaridad: 'recurso', senaInformantes: ['autoinforme'], senaEdades: ['primaria', 'secundaria'] },
      { id: 'sena_cam', nombre: 'Disposici\u00f3n al cambio', tipo: 'escala', grupo: 'Escalas de recursos personales', abrev: 'CAM', polaridad: 'recurso', senaInformantes: ['autoinforme'], senaEdades: ['primaria', 'secundaria'] },
      {
        id: 'p_desv',
        nombre: 'Retraso en el desarrollo',
        tipo: 'escala',
        grupo: 'Problemas espec\u00edficos (infantil)',
        abrev: 'Desv',
        polaridad: 'problema',
        senaInformantes: ['familia', 'escuela'],
        senaEdades: ['infantil', 'primaria']
      }
    ],
    generica: [
      { id: 'a', nombre: 'Factor A', tipo: 'escala' },
      { id: 'b', nombre: 'Factor B', tipo: 'escala' },
      { id: 'c', nombre: 'Puntuaci\u00f3n compuesta', tipo: 'ci' }
    ],
    /**
     * CELF-5: PE en subpruebas (M=10, DE=3); IC compuestos (M=100, DE=15 habitual).
     * Estructura por banda alineada al manual; contrastar nombres con su cuadernillo.
     */
    celf5: [
      { id: 'c58_co', nombre: 'Comprensi\u00f3n de oraciones', tipo: 'escala', grupo: 'Subpruebas (5:0\u20138:11)', abrev: 'CO', celfBandas: ['5-8'], celfBloque: 'receptivo' },
      { id: 'c58_ep', nombre: 'Estructura de palabras', tipo: 'escala', grupo: 'Subpruebas (5:0\u20138:11)', abrev: 'EP', celfBandas: ['5-8'], celfBloque: 'expresivo' },
      { id: 'c58_ve', nombre: 'Vocabulario expresivo', tipo: 'escala', grupo: 'Subpruebas (5:0\u20138:11)', abrev: 'VE', celfBandas: ['5-8'], celfBloque: 'expresivo' },
      { id: 'c58_io', nombre: 'Instrucciones orales', tipo: 'escala', grupo: 'Subpruebas (5:0\u20138:11)', abrev: 'IO', celfBandas: ['5-8'], celfBloque: 'receptivo' },
      { id: 'c58_mo', nombre: 'Memoria de oraciones', tipo: 'escala', grupo: 'Subpruebas (5:0\u20138:11)', abrev: 'MO', celfBandas: ['5-8'], celfBloque: 'expresivo' },
      { id: 'c58_cph', nombre: 'Comprensi\u00f3n de p\u00e1rrafos hablados', tipo: 'escala', grupo: 'Subpruebas (5:0\u20138:11)', abrev: 'CPH', celfBandas: ['5-8'], celfBloque: 'receptivo' },
      { id: 'c58_cp', nombre: 'Clases de palabras (total)', tipo: 'escala', grupo: 'Subpruebas (5:0\u20138:11)', abrev: 'CP', celfBandas: ['5-8'], celfBloque: 'receptivo' },
      { id: 'c58_fo', nombre: 'Formulaci\u00f3n de oraciones', tipo: 'escala', grupo: 'Subpruebas (5:0\u20138:11)', abrev: 'FO', celfBandas: ['5-8'], celfBloque: 'expresivo' },
      { id: 'c58_ilr', nombre: '\u00cdndice de lenguaje receptivo', tipo: 'ci', grupo: '\u00cdndices compuestos (5:0\u20138:11)', abrev: 'ILR', celfBandas: ['5-8'] },
      { id: 'c58_ile', nombre: '\u00cdndice de lenguaje expresivo', tipo: 'ci', grupo: '\u00cdndices compuestos (5:0\u20138:11)', abrev: 'ILE', celfBandas: ['5-8'] },
      { id: 'c58_icl', nombre: '\u00cdndice de contenido ling\u00fc\u00edstico', tipo: 'ci', grupo: '\u00cdndices compuestos (5:0\u20138:11)', abrev: 'ICL', celfBandas: ['5-8'] },
      { id: 'c58_plc', nombre: 'Puntuaci\u00f3n de lenguaje central (CLS)', tipo: 'ci', grupo: '\u00cdndices compuestos (5:0\u20138:11)', abrev: 'PLC', celfBandas: ['5-8'] },
      { id: 'c912_co', nombre: 'Comprensi\u00f3n de oraciones', tipo: 'escala', grupo: 'Subpruebas (9:0\u201312:11)', abrev: 'CO', celfBandas: ['9-12'], celfBloque: 'receptivo' },
      { id: 'c912_cp', nombre: 'Clases de palabras (total)', tipo: 'escala', grupo: 'Subpruebas (9:0\u201312:11)', abrev: 'CP', celfBandas: ['9-12'], celfBloque: 'receptivo' },
      { id: 'c912_fo', nombre: 'Formulaci\u00f3n de oraciones', tipo: 'escala', grupo: 'Subpruebas (9:0\u201312:11)', abrev: 'FO', celfBandas: ['9-12'], celfBloque: 'expresivo' },
      { id: 'c912_dp', nombre: 'Definiciones de palabras', tipo: 'escala', grupo: 'Subpruebas (9:0\u201312:11)', abrev: 'DP', celfBandas: ['9-12'], celfBloque: 'expresivo' },
      { id: 'c912_cph', nombre: 'Comprensi\u00f3n de p\u00e1rrafos hablados', tipo: 'escala', grupo: 'Subpruebas (9:0\u201312:11)', abrev: 'CPH', celfBandas: ['9-12'], celfBloque: 'receptivo' },
      { id: 'c912_mo', nombre: 'Memoria de oraciones', tipo: 'escala', grupo: 'Subpruebas (9:0\u201312:11)', abrev: 'MO', celfBandas: ['9-12'], celfBloque: 'expresivo' },
      { id: 'c912_cl', nombre: 'Comprensi\u00f3n lectora', tipo: 'escala', grupo: 'Subpruebas (9:0\u201312:11)', abrev: 'CL', celfBandas: ['9-12'], celfBloque: 'receptivo' },
      { id: 'c912_ee', nombre: 'Expresi\u00f3n escrita estructurada', tipo: 'escala', grupo: 'Subpruebas (9:0\u201312:11)', abrev: 'EE', celfBandas: ['9-12'], celfBloque: 'expresivo' },
      { id: 'c912_ilr', nombre: '\u00cdndice de lenguaje receptivo', tipo: 'ci', grupo: '\u00cdndices compuestos (9:0\u201312:11)', abrev: 'ILR', celfBandas: ['9-12'] },
      { id: 'c912_ile', nombre: '\u00cdndice de lenguaje expresivo', tipo: 'ci', grupo: '\u00cdndices compuestos (9:0\u201312:11)', abrev: 'ILE', celfBandas: ['9-12'] },
      { id: 'c912_icl', nombre: '\u00cdndice de contenido ling\u00fc\u00edstico', tipo: 'ci', grupo: '\u00cdndices compuestos (9:0\u201312:11)', abrev: 'ICL', celfBandas: ['9-12'] },
      { id: 'c912_plc', nombre: 'Puntuaci\u00f3n de lenguaje central (CLS)', tipo: 'ci', grupo: '\u00cdndices compuestos (9:0\u201312:11)', abrev: 'PLC', celfBandas: ['9-12'] },
      { id: 'c1321_co', nombre: 'Comprensi\u00f3n de oraciones', tipo: 'escala', grupo: 'Subpruebas (13:0\u201321:11)', abrev: 'CO', celfBandas: ['13-21'], celfBloque: 'receptivo' },
      { id: 'c1321_cp', nombre: 'Clases de palabras (total)', tipo: 'escala', grupo: 'Subpruebas (13:0\u201321:11)', abrev: 'CP', celfBandas: ['13-21'], celfBloque: 'receptivo' },
      { id: 'c1321_fo', nombre: 'Formulaci\u00f3n de oraciones', tipo: 'escala', grupo: 'Subpruebas (13:0\u201321:11)', abrev: 'FO', celfBandas: ['13-21'], celfBloque: 'expresivo' },
      { id: 'c1321_dp', nombre: 'Definiciones de palabras', tipo: 'escala', grupo: 'Subpruebas (13:0\u201321:11)', abrev: 'DP', celfBandas: ['13-21'], celfBloque: 'expresivo' },
      { id: 'c1321_cph', nombre: 'Comprensi\u00f3n de p\u00e1rrafos hablados', tipo: 'escala', grupo: 'Subpruebas (13:0\u201321:11)', abrev: 'CPH', celfBandas: ['13-21'], celfBloque: 'receptivo' },
      { id: 'c1321_mo', nombre: 'Memoria de oraciones', tipo: 'escala', grupo: 'Subpruebas (13:0\u201321:11)', abrev: 'MO', celfBandas: ['13-21'], celfBloque: 'expresivo' },
      { id: 'c1321_cl', nombre: 'Comprensi\u00f3n lectora', tipo: 'escala', grupo: 'Subpruebas (13:0\u201321:11)', abrev: 'CL', celfBandas: ['13-21'], celfBloque: 'receptivo' },
      { id: 'c1321_ee', nombre: 'Expresi\u00f3n escrita estructurada', tipo: 'escala', grupo: 'Subpruebas (13:0\u201321:11)', abrev: 'EE', celfBandas: ['13-21'], celfBloque: 'expresivo' },
      { id: 'c1321_ilr', nombre: '\u00cdndice de lenguaje receptivo', tipo: 'ci', grupo: '\u00cdndices compuestos (13:0\u201321:11)', abrev: 'ILR', celfBandas: ['13-21'] },
      { id: 'c1321_ile', nombre: '\u00cdndice de lenguaje expresivo', tipo: 'ci', grupo: '\u00cdndices compuestos (13:0\u201321:11)', abrev: 'ILE', celfBandas: ['13-21'] },
      { id: 'c1321_icl', nombre: '\u00cdndice de contenido ling\u00fc\u00edstico', tipo: 'ci', grupo: '\u00cdndices compuestos (13:0\u201321:11)', abrev: 'ICL', celfBandas: ['13-21'] },
      { id: 'c1321_plc', nombre: 'Puntuaci\u00f3n de lenguaje central (CLS)', tipo: 'ci', grupo: '\u00cdndices compuestos (13:0\u201321:11)', abrev: 'PLC', celfBandas: ['13-21'] }
    ]
  };
})(typeof window !== 'undefined' ? window : this);
