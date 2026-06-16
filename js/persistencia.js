/**
 * Persistencia opcional en localStorage (panel estandar).
 * Los datos son locales al navegador; no sustituyen registros clinicos formales.
 */
(function (global) {
  'use strict';

  var STORAGE_KEY = 'orientacion.panel-estandar.v1';
  var MAX_AGE_MS = 30 * 24 * 60 * 60 * 1000;

  function getPanel() {
    return document.getElementById('panel-estandar');
  }

  /**
   * Recoge valores de inputs, selects y textareas con id dentro del panel.
   * @returns {Record<string, string>}
   */
  function capturarEstado(panel) {
    if (!panel) return {};
    var out = {};
    var els = panel.querySelectorAll('input[id], select[id], textarea[id]');
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      var id = el.id;
      if (!id) continue;
      if (el.type === 'checkbox' || el.type === 'radio') {
        out[id] = el.checked ? '1' : '';
      } else {
        out[id] = el.value != null ? String(el.value) : '';
      }
    }
    return out;
  }

  /**
   * @param {Record<string, string>} data
   */
  function aplicarEstado(panel, data) {
    if (!panel || !data) return;
    for (var id in data) {
      var el = document.getElementById(id);
      if (!el) continue;
      if (el.type === 'checkbox') {
        el.checked = data[id] === '1';
      } else {
        el.value = data[id];
      }
    }
  }

  function guardar(panel) {
    try {
      var payload = {
        v: 1,
        ts: new Date().toISOString(),
        estado: capturarEstado(panel)
      };
      global.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
      return true;
    } catch (e) {
      return false;
    }
  }

  function cargar(panel) {
    try {
      var raw = global.localStorage.getItem(STORAGE_KEY);
      if (!raw) return false;
      var payload = JSON.parse(raw);
      if (!payload || !payload.estado) return false;
      if (!payload.ts || Date.now() - new Date(payload.ts).getTime() > MAX_AGE_MS) {
        limpiar();
        return false;
      }
      aplicarEstado(panel, payload.estado);
      return true;
    } catch (e) {
      return false;
    }
  }

  function limpiar() {
    try {
      global.localStorage.removeItem(STORAGE_KEY);
      return true;
    } catch (e) {
      return false;
    }
  }

  global.OrientacionPersistencia = {
    STORAGE_KEY: STORAGE_KEY,
    MAX_AGE_MS: MAX_AGE_MS,
    capturarEstado: capturarEstado,
    aplicarEstado: aplicarEstado,
    guardar: guardar,
    cargar: cargar,
    limpiar: limpiar,
    getPanel: getPanel
  };
})(typeof window !== 'undefined' ? window : this);
