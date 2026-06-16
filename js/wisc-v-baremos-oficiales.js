/**
 * Conversion PD -> PE (puntuacion escalar) WISC-V.
 * Base: normas US en TABLA (Technical Report #6; claves trimestrales y_0, y_4, y_8).
 * Cuadernillo ES (semestres y_0 / y_6): pdAPE prueba bandas US en orden y solo acepta PE 1-19.
 * Excepciones en PE_EXCEPCION_MANUAL alineadas al manual LATAM 495997789 (PDF en
 * orientacion/manuales/WISC-V/). Amplie ese objeto si contrasta mas celdas con su manual.
 */
(function (global) {
  'use strict';

  var TABLA = {
  "cub": {
    "6_0": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 3
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 4
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 5
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 6
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 7
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 8
      },
      {
        "pdMin": 16,
        "pdMax": 18,
        "pe": 9
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 10
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 11
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 12
      },
      {
        "pdMin": 25,
        "pdMax": 26,
        "pe": 13
      },
      {
        "pdMin": 27,
        "pdMax": 28,
        "pe": 14
      },
      {
        "pdMin": 29,
        "pdMax": 30,
        "pe": 15
      },
      {
        "pdMin": 31,
        "pdMax": 32,
        "pe": 16
      },
      {
        "pdMin": 33,
        "pdMax": 35,
        "pe": 17
      },
      {
        "pdMin": 36,
        "pdMax": 38,
        "pe": 18
      },
      {
        "pdMin": 39,
        "pdMax": 41,
        "pe": 19
      },
      {
        "pdMin": 42,
        "pdMax": 44,
        "pe": 20
      },
      {
        "pdMin": 45,
        "pdMax": 46,
        "pe": 21
      },
      {
        "pdMin": 47,
        "pdMax": 48,
        "pe": 22
      },
      {
        "pdMin": 49,
        "pdMax": 50,
        "pe": 23
      },
      {
        "pdMin": 51,
        "pdMax": 52,
        "pe": 24
      },
      {
        "pdMin": 53,
        "pdMax": 53,
        "pe": 25
      },
      {
        "pdMin": 54,
        "pdMax": 54,
        "pe": 26
      },
      {
        "pdMin": 55,
        "pdMax": 55,
        "pe": 27
      },
      {
        "pdMin": 56,
        "pdMax": 58,
        "pe": 28
      }
    ],
    "6_4": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 3
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 4
      },
      {
        "pdMin": 8,
        "pdMax": 10,
        "pe": 5
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 6
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 7
      },
      {
        "pdMin": 15,
        "pdMax": 16,
        "pe": 8
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 9
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 10
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 11
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 12
      },
      {
        "pdMin": 25,
        "pdMax": 27,
        "pe": 13
      },
      {
        "pdMin": 28,
        "pdMax": 29,
        "pe": 14
      },
      {
        "pdMin": 30,
        "pdMax": 31,
        "pe": 15
      },
      {
        "pdMin": 32,
        "pdMax": 33,
        "pe": 16
      },
      {
        "pdMin": 34,
        "pdMax": 36,
        "pe": 17
      },
      {
        "pdMin": 37,
        "pdMax": 39,
        "pe": 18
      },
      {
        "pdMin": 40,
        "pdMax": 42,
        "pe": 19
      },
      {
        "pdMin": 43,
        "pdMax": 45,
        "pe": 20
      },
      {
        "pdMin": 46,
        "pdMax": 47,
        "pe": 21
      },
      {
        "pdMin": 48,
        "pdMax": 49,
        "pe": 22
      },
      {
        "pdMin": 50,
        "pdMax": 51,
        "pe": 23
      },
      {
        "pdMin": 52,
        "pdMax": 53,
        "pe": 24
      },
      {
        "pdMin": 54,
        "pdMax": 54,
        "pe": 25
      },
      {
        "pdMin": 55,
        "pdMax": 55,
        "pe": 26
      },
      {
        "pdMin": 56,
        "pdMax": 56,
        "pe": 27
      },
      {
        "pdMin": 57,
        "pdMax": 58,
        "pe": 28
      }
    ],
    "6_8": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 6,
        "pe": 3
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 4
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 5
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 6
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 7
      },
      {
        "pdMin": 15,
        "pdMax": 16,
        "pe": 8
      },
      {
        "pdMin": 17,
        "pdMax": 19,
        "pe": 9
      },
      {
        "pdMin": 20,
        "pdMax": 21,
        "pe": 10
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 11
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 12
      },
      {
        "pdMin": 26,
        "pdMax": 27,
        "pe": 13
      },
      {
        "pdMin": 28,
        "pdMax": 29,
        "pe": 14
      },
      {
        "pdMin": 30,
        "pdMax": 32,
        "pe": 15
      },
      {
        "pdMin": 33,
        "pdMax": 34,
        "pe": 16
      },
      {
        "pdMin": 35,
        "pdMax": 37,
        "pe": 17
      },
      {
        "pdMin": 38,
        "pdMax": 40,
        "pe": 18
      },
      {
        "pdMin": 41,
        "pdMax": 42,
        "pe": 19
      },
      {
        "pdMin": 43,
        "pdMax": 45,
        "pe": 20
      },
      {
        "pdMin": 46,
        "pdMax": 48,
        "pe": 21
      },
      {
        "pdMin": 49,
        "pdMax": 50,
        "pe": 22
      },
      {
        "pdMin": 51,
        "pdMax": 52,
        "pe": 23
      },
      {
        "pdMin": 53,
        "pdMax": 53,
        "pe": 24
      },
      {
        "pdMin": 54,
        "pdMax": 54,
        "pe": 25
      },
      {
        "pdMin": 55,
        "pdMax": 55,
        "pe": 26
      },
      {
        "pdMin": 56,
        "pdMax": 56,
        "pe": 27
      },
      {
        "pdMin": 57,
        "pdMax": 58,
        "pe": 28
      }
    ],
    "7_0": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 6,
        "pe": 3
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 4
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 5
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 6
      },
      {
        "pdMin": 13,
        "pdMax": 15,
        "pe": 7
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 8
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 9
      },
      {
        "pdMin": 20,
        "pdMax": 21,
        "pe": 10
      },
      {
        "pdMin": 22,
        "pdMax": 24,
        "pe": 11
      },
      {
        "pdMin": 25,
        "pdMax": 26,
        "pe": 12
      },
      {
        "pdMin": 27,
        "pdMax": 28,
        "pe": 13
      },
      {
        "pdMin": 29,
        "pdMax": 30,
        "pe": 14
      },
      {
        "pdMin": 31,
        "pdMax": 33,
        "pe": 15
      },
      {
        "pdMin": 34,
        "pdMax": 35,
        "pe": 16
      },
      {
        "pdMin": 36,
        "pdMax": 38,
        "pe": 17
      },
      {
        "pdMin": 39,
        "pdMax": 41,
        "pe": 18
      },
      {
        "pdMin": 42,
        "pdMax": 43,
        "pe": 19
      },
      {
        "pdMin": 44,
        "pdMax": 46,
        "pe": 20
      },
      {
        "pdMin": 47,
        "pdMax": 49,
        "pe": 21
      },
      {
        "pdMin": 50,
        "pdMax": 51,
        "pe": 22
      },
      {
        "pdMin": 52,
        "pdMax": 52,
        "pe": 23
      },
      {
        "pdMin": 53,
        "pdMax": 53,
        "pe": 24
      },
      {
        "pdMin": 54,
        "pdMax": 54,
        "pe": 25
      },
      {
        "pdMin": 55,
        "pdMax": 55,
        "pe": 26
      },
      {
        "pdMin": 56,
        "pdMax": 56,
        "pe": 27
      },
      {
        "pdMin": 57,
        "pdMax": 58,
        "pe": 28
      }
    ],
    "7_4": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 3
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 4
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 5
      },
      {
        "pdMin": 11,
        "pdMax": 13,
        "pe": 6
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 7
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 8
      },
      {
        "pdMin": 18,
        "pdMax": 20,
        "pe": 9
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 10
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 11
      },
      {
        "pdMin": 25,
        "pdMax": 27,
        "pe": 12
      },
      {
        "pdMin": 28,
        "pdMax": 29,
        "pe": 13
      },
      {
        "pdMin": 30,
        "pdMax": 31,
        "pe": 14
      },
      {
        "pdMin": 32,
        "pdMax": 33,
        "pe": 15
      },
      {
        "pdMin": 34,
        "pdMax": 36,
        "pe": 16
      },
      {
        "pdMin": 37,
        "pdMax": 39,
        "pe": 17
      },
      {
        "pdMin": 40,
        "pdMax": 42,
        "pe": 18
      },
      {
        "pdMin": 43,
        "pdMax": 44,
        "pe": 19
      },
      {
        "pdMin": 45,
        "pdMax": 47,
        "pe": 20
      },
      {
        "pdMin": 48,
        "pdMax": 49,
        "pe": 21
      },
      {
        "pdMin": 50,
        "pdMax": 51,
        "pe": 22
      },
      {
        "pdMin": 52,
        "pdMax": 53,
        "pe": 23
      },
      {
        "pdMin": 54,
        "pdMax": 54,
        "pe": 24
      },
      {
        "pdMin": 55,
        "pdMax": 55,
        "pe": 25
      },
      {
        "pdMin": 56,
        "pdMax": 56,
        "pe": 26
      },
      {
        "pdMin": 57,
        "pdMax": 57,
        "pe": 27
      },
      {
        "pdMin": 58,
        "pdMax": 58,
        "pe": 28
      }
    ],
    "7_8": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 3
      },
      {
        "pdMin": 7,
        "pdMax": 9,
        "pe": 4
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 5
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 6
      },
      {
        "pdMin": 14,
        "pdMax": 16,
        "pe": 7
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 8
      },
      {
        "pdMin": 19,
        "pdMax": 21,
        "pe": 9
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 10
      },
      {
        "pdMin": 24,
        "pdMax": 26,
        "pe": 11
      },
      {
        "pdMin": 27,
        "pdMax": 28,
        "pe": 12
      },
      {
        "pdMin": 29,
        "pdMax": 30,
        "pe": 13
      },
      {
        "pdMin": 31,
        "pdMax": 33,
        "pe": 14
      },
      {
        "pdMin": 34,
        "pdMax": 35,
        "pe": 15
      },
      {
        "pdMin": 36,
        "pdMax": 38,
        "pe": 16
      },
      {
        "pdMin": 39,
        "pdMax": 41,
        "pe": 17
      },
      {
        "pdMin": 42,
        "pdMax": 43,
        "pe": 18
      },
      {
        "pdMin": 44,
        "pdMax": 45,
        "pe": 19
      },
      {
        "pdMin": 46,
        "pdMax": 48,
        "pe": 20
      },
      {
        "pdMin": 49,
        "pdMax": 50,
        "pe": 21
      },
      {
        "pdMin": 51,
        "pdMax": 52,
        "pe": 22
      },
      {
        "pdMin": 53,
        "pdMax": 53,
        "pe": 23
      },
      {
        "pdMin": 54,
        "pdMax": 54,
        "pe": 24
      },
      {
        "pdMin": 55,
        "pdMax": 55,
        "pe": 25
      },
      {
        "pdMin": 56,
        "pdMax": 56,
        "pe": 26
      },
      {
        "pdMin": 57,
        "pdMax": 57,
        "pe": 27
      },
      {
        "pdMin": 58,
        "pdMax": 58,
        "pe": 28
      }
    ],
    "8_0": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 3
      },
      {
        "pdMin": 7,
        "pdMax": 9,
        "pe": 4
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 5
      },
      {
        "pdMin": 12,
        "pdMax": 14,
        "pe": 6
      },
      {
        "pdMin": 15,
        "pdMax": 16,
        "pe": 7
      },
      {
        "pdMin": 17,
        "pdMax": 19,
        "pe": 8
      },
      {
        "pdMin": 20,
        "pdMax": 21,
        "pe": 9
      },
      {
        "pdMin": 22,
        "pdMax": 24,
        "pe": 10
      },
      {
        "pdMin": 25,
        "pdMax": 26,
        "pe": 11
      },
      {
        "pdMin": 27,
        "pdMax": 29,
        "pe": 12
      },
      {
        "pdMin": 30,
        "pdMax": 31,
        "pe": 13
      },
      {
        "pdMin": 32,
        "pdMax": 34,
        "pe": 14
      },
      {
        "pdMin": 35,
        "pdMax": 36,
        "pe": 15
      },
      {
        "pdMin": 37,
        "pdMax": 39,
        "pe": 16
      },
      {
        "pdMin": 40,
        "pdMax": 42,
        "pe": 17
      },
      {
        "pdMin": 43,
        "pdMax": 44,
        "pe": 18
      },
      {
        "pdMin": 45,
        "pdMax": 46,
        "pe": 19
      },
      {
        "pdMin": 47,
        "pdMax": 48,
        "pe": 20
      },
      {
        "pdMin": 49,
        "pdMax": 50,
        "pe": 21
      },
      {
        "pdMin": 51,
        "pdMax": 52,
        "pe": 22
      },
      {
        "pdMin": 53,
        "pdMax": 53,
        "pe": 23
      },
      {
        "pdMin": 54,
        "pdMax": 54,
        "pe": 24
      },
      {
        "pdMin": 55,
        "pdMax": 55,
        "pe": 25
      },
      {
        "pdMin": 56,
        "pdMax": 56,
        "pe": 26
      },
      {
        "pdMin": 57,
        "pdMax": 57,
        "pe": 27
      },
      {
        "pdMin": 58,
        "pdMax": 58,
        "pe": 28
      }
    ],
    "8_4": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 7,
        "pe": 3
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 4
      },
      {
        "pdMin": 10,
        "pdMax": 12,
        "pe": 5
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 6
      },
      {
        "pdMin": 15,
        "pdMax": 17,
        "pe": 7
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 8
      },
      {
        "pdMin": 20,
        "pdMax": 22,
        "pe": 9
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 10
      },
      {
        "pdMin": 25,
        "pdMax": 27,
        "pe": 11
      },
      {
        "pdMin": 28,
        "pdMax": 29,
        "pe": 12
      },
      {
        "pdMin": 30,
        "pdMax": 32,
        "pe": 13
      },
      {
        "pdMin": 33,
        "pdMax": 34,
        "pe": 14
      },
      {
        "pdMin": 35,
        "pdMax": 37,
        "pe": 15
      },
      {
        "pdMin": 38,
        "pdMax": 39,
        "pe": 16
      },
      {
        "pdMin": 40,
        "pdMax": 43,
        "pe": 17
      },
      {
        "pdMin": 44,
        "pdMax": 45,
        "pe": 18
      },
      {
        "pdMin": 46,
        "pdMax": 47,
        "pe": 19
      },
      {
        "pdMin": 48,
        "pdMax": 49,
        "pe": 20
      },
      {
        "pdMin": 50,
        "pdMax": 51,
        "pe": 21
      },
      {
        "pdMin": 52,
        "pdMax": 52,
        "pe": 22
      },
      {
        "pdMin": 53,
        "pdMax": 53,
        "pe": 23
      },
      {
        "pdMin": 54,
        "pdMax": 54,
        "pe": 24
      },
      {
        "pdMin": 55,
        "pdMax": 55,
        "pe": 25
      },
      {
        "pdMin": 56,
        "pdMax": 56,
        "pe": 26
      },
      {
        "pdMin": 57,
        "pdMax": 57,
        "pe": 27
      },
      {
        "pdMin": 58,
        "pdMax": 58,
        "pe": 28
      }
    ],
    "8_8": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 7,
        "pe": 3
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 4
      },
      {
        "pdMin": 10,
        "pdMax": 12,
        "pe": 5
      },
      {
        "pdMin": 13,
        "pdMax": 15,
        "pe": 6
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 7
      },
      {
        "pdMin": 18,
        "pdMax": 20,
        "pe": 8
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 9
      },
      {
        "pdMin": 23,
        "pdMax": 25,
        "pe": 10
      },
      {
        "pdMin": 26,
        "pdMax": 27,
        "pe": 11
      },
      {
        "pdMin": 28,
        "pdMax": 30,
        "pe": 12
      },
      {
        "pdMin": 31,
        "pdMax": 33,
        "pe": 13
      },
      {
        "pdMin": 34,
        "pdMax": 35,
        "pe": 14
      },
      {
        "pdMin": 36,
        "pdMax": 38,
        "pe": 15
      },
      {
        "pdMin": 39,
        "pdMax": 40,
        "pe": 16
      },
      {
        "pdMin": 41,
        "pdMax": 44,
        "pe": 17
      },
      {
        "pdMin": 45,
        "pdMax": 46,
        "pe": 18
      },
      {
        "pdMin": 47,
        "pdMax": 48,
        "pe": 19
      },
      {
        "pdMin": 49,
        "pdMax": 50,
        "pe": 20
      },
      {
        "pdMin": 51,
        "pdMax": 51,
        "pe": 21
      },
      {
        "pdMin": 52,
        "pdMax": 52,
        "pe": 22
      },
      {
        "pdMin": 53,
        "pdMax": 53,
        "pe": 23
      },
      {
        "pdMin": 54,
        "pdMax": 54,
        "pe": 24
      },
      {
        "pdMin": 55,
        "pdMax": 55,
        "pe": 25
      },
      {
        "pdMin": 56,
        "pdMax": 56,
        "pe": 26
      },
      {
        "pdMin": 57,
        "pdMax": 57,
        "pe": 27
      },
      {
        "pdMin": 58,
        "pdMax": 58,
        "pe": 28
      }
    ],
    "9_0": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 7,
        "pe": 3
      },
      {
        "pdMin": 8,
        "pdMax": 10,
        "pe": 4
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 5
      },
      {
        "pdMin": 13,
        "pdMax": 15,
        "pe": 6
      },
      {
        "pdMin": 16,
        "pdMax": 18,
        "pe": 7
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 8
      },
      {
        "pdMin": 21,
        "pdMax": 23,
        "pe": 9
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 10
      },
      {
        "pdMin": 26,
        "pdMax": 28,
        "pe": 11
      },
      {
        "pdMin": 29,
        "pdMax": 31,
        "pe": 12
      },
      {
        "pdMin": 32,
        "pdMax": 33,
        "pe": 13
      },
      {
        "pdMin": 34,
        "pdMax": 36,
        "pe": 14
      },
      {
        "pdMin": 37,
        "pdMax": 39,
        "pe": 15
      },
      {
        "pdMin": 40,
        "pdMax": 41,
        "pe": 16
      },
      {
        "pdMin": 42,
        "pdMax": 45,
        "pe": 17
      },
      {
        "pdMin": 46,
        "pdMax": 47,
        "pe": 18
      },
      {
        "pdMin": 48,
        "pdMax": 49,
        "pe": 19
      },
      {
        "pdMin": 50,
        "pdMax": 50,
        "pe": 20
      },
      {
        "pdMin": 51,
        "pdMax": 51,
        "pe": 21
      },
      {
        "pdMin": 52,
        "pdMax": 52,
        "pe": 22
      },
      {
        "pdMin": 53,
        "pdMax": 53,
        "pe": 23
      },
      {
        "pdMin": 54,
        "pdMax": 54,
        "pe": 24
      },
      {
        "pdMin": 55,
        "pdMax": 55,
        "pe": 25
      },
      {
        "pdMin": 56,
        "pdMax": 56,
        "pe": 26
      },
      {
        "pdMin": 57,
        "pdMax": 57,
        "pe": 27
      },
      {
        "pdMin": 58,
        "pdMax": 58,
        "pe": 28
      }
    ],
    "9_4": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 7,
        "pe": 3
      },
      {
        "pdMin": 8,
        "pdMax": 10,
        "pe": 4
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 5
      },
      {
        "pdMin": 13,
        "pdMax": 15,
        "pe": 6
      },
      {
        "pdMin": 16,
        "pdMax": 18,
        "pe": 7
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 8
      },
      {
        "pdMin": 21,
        "pdMax": 23,
        "pe": 9
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 10
      },
      {
        "pdMin": 26,
        "pdMax": 28,
        "pe": 11
      },
      {
        "pdMin": 29,
        "pdMax": 31,
        "pe": 12
      },
      {
        "pdMin": 32,
        "pdMax": 33,
        "pe": 13
      },
      {
        "pdMin": 34,
        "pdMax": 36,
        "pe": 14
      },
      {
        "pdMin": 37,
        "pdMax": 39,
        "pe": 15
      },
      {
        "pdMin": 40,
        "pdMax": 41,
        "pe": 16
      },
      {
        "pdMin": 42,
        "pdMax": 45,
        "pe": 17
      },
      {
        "pdMin": 46,
        "pdMax": 47,
        "pe": 18
      },
      {
        "pdMin": 48,
        "pdMax": 49,
        "pe": 19
      },
      {
        "pdMin": 50,
        "pdMax": 51,
        "pe": 20
      },
      {
        "pdMin": 52,
        "pdMax": 52,
        "pe": 21
      },
      {
        "pdMin": 53,
        "pdMax": 53,
        "pe": 22
      },
      {
        "pdMin": 54,
        "pdMax": 54,
        "pe": 23
      },
      {
        "pdMin": 55,
        "pdMax": 55,
        "pe": 24
      },
      {
        "pdMin": 56,
        "pdMax": 56,
        "pe": 25
      },
      {
        "pdMin": 57,
        "pdMax": 57,
        "pe": 26
      },
      {
        "pdMin": 58,
        "pdMax": 58,
        "pe": 27
      }
    ],
    "9_8": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 7,
        "pe": 3
      },
      {
        "pdMin": 8,
        "pdMax": 10,
        "pe": 4
      },
      {
        "pdMin": 11,
        "pdMax": 13,
        "pe": 5
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 6
      },
      {
        "pdMin": 16,
        "pdMax": 18,
        "pe": 7
      },
      {
        "pdMin": 19,
        "pdMax": 21,
        "pe": 8
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 9
      },
      {
        "pdMin": 24,
        "pdMax": 26,
        "pe": 10
      },
      {
        "pdMin": 27,
        "pdMax": 29,
        "pe": 11
      },
      {
        "pdMin": 30,
        "pdMax": 31,
        "pe": 12
      },
      {
        "pdMin": 32,
        "pdMax": 34,
        "pe": 13
      },
      {
        "pdMin": 35,
        "pdMax": 37,
        "pe": 14
      },
      {
        "pdMin": 38,
        "pdMax": 40,
        "pe": 15
      },
      {
        "pdMin": 41,
        "pdMax": 42,
        "pe": 16
      },
      {
        "pdMin": 43,
        "pdMax": 46,
        "pe": 17
      },
      {
        "pdMin": 47,
        "pdMax": 48,
        "pe": 18
      },
      {
        "pdMin": 49,
        "pdMax": 50,
        "pe": 19
      },
      {
        "pdMin": 51,
        "pdMax": 51,
        "pe": 20
      },
      {
        "pdMin": 52,
        "pdMax": 52,
        "pe": 21
      },
      {
        "pdMin": 53,
        "pdMax": 53,
        "pe": 22
      },
      {
        "pdMin": 54,
        "pdMax": 54,
        "pe": 23
      },
      {
        "pdMin": 55,
        "pdMax": 55,
        "pe": 24
      },
      {
        "pdMin": 56,
        "pdMax": 56,
        "pe": 25
      },
      {
        "pdMin": 57,
        "pdMax": 57,
        "pe": 26
      },
      {
        "pdMin": 58,
        "pdMax": 58,
        "pe": 27
      }
    ],
    "10_0": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 5,
        "pe": 2
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 3
      },
      {
        "pdMin": 8,
        "pdMax": 10,
        "pe": 4
      },
      {
        "pdMin": 11,
        "pdMax": 13,
        "pe": 5
      },
      {
        "pdMin": 14,
        "pdMax": 16,
        "pe": 6
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 7
      },
      {
        "pdMin": 19,
        "pdMax": 21,
        "pe": 8
      },
      {
        "pdMin": 22,
        "pdMax": 24,
        "pe": 9
      },
      {
        "pdMin": 25,
        "pdMax": 27,
        "pe": 10
      },
      {
        "pdMin": 28,
        "pdMax": 29,
        "pe": 11
      },
      {
        "pdMin": 30,
        "pdMax": 32,
        "pe": 12
      },
      {
        "pdMin": 33,
        "pdMax": 35,
        "pe": 13
      },
      {
        "pdMin": 36,
        "pdMax": 38,
        "pe": 14
      },
      {
        "pdMin": 39,
        "pdMax": 40,
        "pe": 15
      },
      {
        "pdMin": 41,
        "pdMax": 43,
        "pe": 16
      },
      {
        "pdMin": 44,
        "pdMax": 47,
        "pe": 17
      },
      {
        "pdMin": 48,
        "pdMax": 49,
        "pe": 18
      },
      {
        "pdMin": 50,
        "pdMax": 51,
        "pe": 19
      },
      {
        "pdMin": 52,
        "pdMax": 52,
        "pe": 20
      },
      {
        "pdMin": 53,
        "pdMax": 53,
        "pe": 21
      },
      {
        "pdMin": 54,
        "pdMax": 54,
        "pe": 22
      },
      {
        "pdMin": 55,
        "pdMax": 55,
        "pe": 23
      },
      {
        "pdMin": 56,
        "pdMax": 56,
        "pe": 24
      },
      {
        "pdMin": 57,
        "pdMax": 57,
        "pe": 25
      },
      {
        "pdMin": 58,
        "pdMax": 58,
        "pe": 27
      }
    ],
    "10_4": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 5,
        "pe": 2
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 3
      },
      {
        "pdMin": 8,
        "pdMax": 10,
        "pe": 4
      },
      {
        "pdMin": 11,
        "pdMax": 13,
        "pe": 5
      },
      {
        "pdMin": 14,
        "pdMax": 16,
        "pe": 6
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 7
      },
      {
        "pdMin": 19,
        "pdMax": 21,
        "pe": 8
      },
      {
        "pdMin": 22,
        "pdMax": 24,
        "pe": 9
      },
      {
        "pdMin": 25,
        "pdMax": 27,
        "pe": 10
      },
      {
        "pdMin": 28,
        "pdMax": 29,
        "pe": 11
      },
      {
        "pdMin": 30,
        "pdMax": 32,
        "pe": 12
      },
      {
        "pdMin": 33,
        "pdMax": 35,
        "pe": 13
      },
      {
        "pdMin": 36,
        "pdMax": 38,
        "pe": 14
      },
      {
        "pdMin": 39,
        "pdMax": 40,
        "pe": 15
      },
      {
        "pdMin": 41,
        "pdMax": 43,
        "pe": 16
      },
      {
        "pdMin": 44,
        "pdMax": 47,
        "pe": 17
      },
      {
        "pdMin": 48,
        "pdMax": 50,
        "pe": 18
      },
      {
        "pdMin": 51,
        "pdMax": 51,
        "pe": 19
      },
      {
        "pdMin": 52,
        "pdMax": 52,
        "pe": 20
      },
      {
        "pdMin": 53,
        "pdMax": 53,
        "pe": 21
      },
      {
        "pdMin": 54,
        "pdMax": 54,
        "pe": 22
      },
      {
        "pdMin": 55,
        "pdMax": 55,
        "pe": 23
      },
      {
        "pdMin": 56,
        "pdMax": 56,
        "pe": 24
      },
      {
        "pdMin": 57,
        "pdMax": 57,
        "pe": 25
      },
      {
        "pdMin": 58,
        "pdMax": 58,
        "pe": 27
      }
    ],
    "10_8": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 5,
        "pe": 2
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 3
      },
      {
        "pdMin": 8,
        "pdMax": 10,
        "pe": 4
      },
      {
        "pdMin": 11,
        "pdMax": 13,
        "pe": 5
      },
      {
        "pdMin": 14,
        "pdMax": 16,
        "pe": 6
      },
      {
        "pdMin": 17,
        "pdMax": 19,
        "pe": 7
      },
      {
        "pdMin": 20,
        "pdMax": 22,
        "pe": 8
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 9
      },
      {
        "pdMin": 25,
        "pdMax": 27,
        "pe": 10
      },
      {
        "pdMin": 28,
        "pdMax": 30,
        "pe": 11
      },
      {
        "pdMin": 31,
        "pdMax": 33,
        "pe": 12
      },
      {
        "pdMin": 34,
        "pdMax": 36,
        "pe": 13
      },
      {
        "pdMin": 37,
        "pdMax": 39,
        "pe": 14
      },
      {
        "pdMin": 40,
        "pdMax": 41,
        "pe": 15
      },
      {
        "pdMin": 42,
        "pdMax": 44,
        "pe": 16
      },
      {
        "pdMin": 45,
        "pdMax": 48,
        "pe": 17
      },
      {
        "pdMin": 49,
        "pdMax": 50,
        "pe": 18
      },
      {
        "pdMin": 51,
        "pdMax": 51,
        "pe": 19
      },
      {
        "pdMin": 52,
        "pdMax": 52,
        "pe": 20
      },
      {
        "pdMin": 53,
        "pdMax": 53,
        "pe": 21
      },
      {
        "pdMin": 54,
        "pdMax": 54,
        "pe": 22
      },
      {
        "pdMin": 55,
        "pdMax": 55,
        "pe": 23
      },
      {
        "pdMin": 56,
        "pdMax": 56,
        "pe": 24
      },
      {
        "pdMin": 57,
        "pdMax": 57,
        "pe": 25
      },
      {
        "pdMin": 58,
        "pdMax": 58,
        "pe": 27
      }
    ],
    "11_0": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 5,
        "pe": 2
      },
      {
        "pdMin": 6,
        "pdMax": 8,
        "pe": 3
      },
      {
        "pdMin": 9,
        "pdMax": 11,
        "pe": 4
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 5
      },
      {
        "pdMin": 14,
        "pdMax": 16,
        "pe": 6
      },
      {
        "pdMin": 17,
        "pdMax": 19,
        "pe": 7
      },
      {
        "pdMin": 20,
        "pdMax": 22,
        "pe": 8
      },
      {
        "pdMin": 23,
        "pdMax": 25,
        "pe": 9
      },
      {
        "pdMin": 26,
        "pdMax": 28,
        "pe": 10
      },
      {
        "pdMin": 29,
        "pdMax": 31,
        "pe": 11
      },
      {
        "pdMin": 32,
        "pdMax": 34,
        "pe": 12
      },
      {
        "pdMin": 35,
        "pdMax": 36,
        "pe": 13
      },
      {
        "pdMin": 37,
        "pdMax": 39,
        "pe": 14
      },
      {
        "pdMin": 40,
        "pdMax": 42,
        "pe": 15
      },
      {
        "pdMin": 43,
        "pdMax": 45,
        "pe": 16
      },
      {
        "pdMin": 46,
        "pdMax": 49,
        "pe": 17
      },
      {
        "pdMin": 50,
        "pdMax": 51,
        "pe": 18
      },
      {
        "pdMin": 52,
        "pdMax": 52,
        "pe": 19
      },
      {
        "pdMin": 53,
        "pdMax": 53,
        "pe": 20
      },
      {
        "pdMin": 54,
        "pdMax": 54,
        "pe": 21
      },
      {
        "pdMin": 55,
        "pdMax": 55,
        "pe": 22
      },
      {
        "pdMin": 56,
        "pdMax": 56,
        "pe": 23
      },
      {
        "pdMin": 57,
        "pdMax": 57,
        "pe": 25
      },
      {
        "pdMin": 58,
        "pdMax": 58,
        "pe": 27
      }
    ],
    "11_4": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 5,
        "pe": 2
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 3
      },
      {
        "pdMin": 8,
        "pdMax": 10,
        "pe": 4
      },
      {
        "pdMin": 11,
        "pdMax": 13,
        "pe": 5
      },
      {
        "pdMin": 14,
        "pdMax": 16,
        "pe": 6
      },
      {
        "pdMin": 17,
        "pdMax": 19,
        "pe": 7
      },
      {
        "pdMin": 20,
        "pdMax": 22,
        "pe": 8
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 9
      },
      {
        "pdMin": 25,
        "pdMax": 27,
        "pe": 10
      },
      {
        "pdMin": 28,
        "pdMax": 30,
        "pe": 11
      },
      {
        "pdMin": 31,
        "pdMax": 33,
        "pe": 12
      },
      {
        "pdMin": 34,
        "pdMax": 36,
        "pe": 13
      },
      {
        "pdMin": 37,
        "pdMax": 39,
        "pe": 14
      },
      {
        "pdMin": 40,
        "pdMax": 41,
        "pe": 15
      },
      {
        "pdMin": 42,
        "pdMax": 44,
        "pe": 16
      },
      {
        "pdMin": 45,
        "pdMax": 48,
        "pe": 17
      },
      {
        "pdMin": 49,
        "pdMax": 51,
        "pe": 18
      },
      {
        "pdMin": 52,
        "pdMax": 52,
        "pe": 19
      },
      {
        "pdMin": 53,
        "pdMax": 53,
        "pe": 20
      },
      {
        "pdMin": 54,
        "pdMax": 54,
        "pe": 21
      },
      {
        "pdMin": 55,
        "pdMax": 55,
        "pe": 22
      },
      {
        "pdMin": 56,
        "pdMax": 56,
        "pe": 23
      },
      {
        "pdMin": 57,
        "pdMax": 57,
        "pe": 25
      },
      {
        "pdMin": 58,
        "pdMax": 58,
        "pe": 27
      }
    ],
    "11_8": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 5,
        "pe": 2
      },
      {
        "pdMin": 6,
        "pdMax": 8,
        "pe": 3
      },
      {
        "pdMin": 9,
        "pdMax": 11,
        "pe": 4
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 5
      },
      {
        "pdMin": 14,
        "pdMax": 16,
        "pe": 6
      },
      {
        "pdMin": 17,
        "pdMax": 19,
        "pe": 7
      },
      {
        "pdMin": 20,
        "pdMax": 22,
        "pe": 8
      },
      {
        "pdMin": 23,
        "pdMax": 25,
        "pe": 9
      },
      {
        "pdMin": 26,
        "pdMax": 28,
        "pe": 10
      },
      {
        "pdMin": 29,
        "pdMax": 31,
        "pe": 11
      },
      {
        "pdMin": 32,
        "pdMax": 34,
        "pe": 12
      },
      {
        "pdMin": 35,
        "pdMax": 36,
        "pe": 13
      },
      {
        "pdMin": 37,
        "pdMax": 39,
        "pe": 14
      },
      {
        "pdMin": 40,
        "pdMax": 42,
        "pe": 15
      },
      {
        "pdMin": 43,
        "pdMax": 45,
        "pe": 16
      },
      {
        "pdMin": 46,
        "pdMax": 49,
        "pe": 17
      },
      {
        "pdMin": 50,
        "pdMax": 51,
        "pe": 18
      },
      {
        "pdMin": 52,
        "pdMax": 52,
        "pe": 19
      },
      {
        "pdMin": 53,
        "pdMax": 53,
        "pe": 20
      },
      {
        "pdMin": 54,
        "pdMax": 54,
        "pe": 21
      },
      {
        "pdMin": 55,
        "pdMax": 55,
        "pe": 22
      },
      {
        "pdMin": 56,
        "pdMax": 56,
        "pe": 23
      },
      {
        "pdMin": 57,
        "pdMax": 57,
        "pe": 25
      },
      {
        "pdMin": 58,
        "pdMax": 58,
        "pe": 27
      }
    ],
    "12_0": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 5,
        "pe": 2
      },
      {
        "pdMin": 6,
        "pdMax": 8,
        "pe": 3
      },
      {
        "pdMin": 9,
        "pdMax": 11,
        "pe": 4
      },
      {
        "pdMin": 12,
        "pdMax": 14,
        "pe": 5
      },
      {
        "pdMin": 15,
        "pdMax": 17,
        "pe": 6
      },
      {
        "pdMin": 18,
        "pdMax": 20,
        "pe": 7
      },
      {
        "pdMin": 21,
        "pdMax": 23,
        "pe": 8
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 9
      },
      {
        "pdMin": 26,
        "pdMax": 28,
        "pe": 10
      },
      {
        "pdMin": 29,
        "pdMax": 31,
        "pe": 11
      },
      {
        "pdMin": 32,
        "pdMax": 34,
        "pe": 12
      },
      {
        "pdMin": 35,
        "pdMax": 37,
        "pe": 13
      },
      {
        "pdMin": 38,
        "pdMax": 40,
        "pe": 14
      },
      {
        "pdMin": 41,
        "pdMax": 43,
        "pe": 15
      },
      {
        "pdMin": 44,
        "pdMax": 46,
        "pe": 16
      },
      {
        "pdMin": 47,
        "pdMax": 50,
        "pe": 17
      },
      {
        "pdMin": 51,
        "pdMax": 52,
        "pe": 18
      },
      {
        "pdMin": 53,
        "pdMax": 53,
        "pe": 19
      },
      {
        "pdMin": 54,
        "pdMax": 54,
        "pe": 20
      },
      {
        "pdMin": 55,
        "pdMax": 55,
        "pe": 21
      },
      {
        "pdMin": 56,
        "pdMax": 56,
        "pe": 22
      },
      {
        "pdMin": 57,
        "pdMax": 57,
        "pe": 24
      },
      {
        "pdMin": 58,
        "pdMax": 58,
        "pe": 26
      }
    ],
    "12_4": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 5,
        "pe": 2
      },
      {
        "pdMin": 6,
        "pdMax": 8,
        "pe": 3
      },
      {
        "pdMin": 9,
        "pdMax": 11,
        "pe": 4
      },
      {
        "pdMin": 12,
        "pdMax": 14,
        "pe": 5
      },
      {
        "pdMin": 15,
        "pdMax": 17,
        "pe": 6
      },
      {
        "pdMin": 18,
        "pdMax": 20,
        "pe": 7
      },
      {
        "pdMin": 21,
        "pdMax": 23,
        "pe": 8
      },
      {
        "pdMin": 24,
        "pdMax": 26,
        "pe": 9
      },
      {
        "pdMin": 27,
        "pdMax": 29,
        "pe": 10
      },
      {
        "pdMin": 30,
        "pdMax": 32,
        "pe": 11
      },
      {
        "pdMin": 33,
        "pdMax": 35,
        "pe": 12
      },
      {
        "pdMin": 36,
        "pdMax": 38,
        "pe": 13
      },
      {
        "pdMin": 39,
        "pdMax": 41,
        "pe": 14
      },
      {
        "pdMin": 42,
        "pdMax": 44,
        "pe": 15
      },
      {
        "pdMin": 45,
        "pdMax": 47,
        "pe": 16
      },
      {
        "pdMin": 48,
        "pdMax": 51,
        "pe": 17
      },
      {
        "pdMin": 52,
        "pdMax": 52,
        "pe": 18
      },
      {
        "pdMin": 53,
        "pdMax": 53,
        "pe": 19
      },
      {
        "pdMin": 54,
        "pdMax": 54,
        "pe": 20
      },
      {
        "pdMin": 55,
        "pdMax": 55,
        "pe": 21
      },
      {
        "pdMin": 56,
        "pdMax": 56,
        "pe": 22
      },
      {
        "pdMin": 57,
        "pdMax": 57,
        "pe": 24
      },
      {
        "pdMin": 58,
        "pdMax": 58,
        "pe": 26
      }
    ],
    "12_8": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 5,
        "pe": 2
      },
      {
        "pdMin": 6,
        "pdMax": 8,
        "pe": 3
      },
      {
        "pdMin": 9,
        "pdMax": 11,
        "pe": 4
      },
      {
        "pdMin": 12,
        "pdMax": 14,
        "pe": 5
      },
      {
        "pdMin": 15,
        "pdMax": 17,
        "pe": 6
      },
      {
        "pdMin": 18,
        "pdMax": 20,
        "pe": 7
      },
      {
        "pdMin": 21,
        "pdMax": 23,
        "pe": 8
      },
      {
        "pdMin": 24,
        "pdMax": 26,
        "pe": 9
      },
      {
        "pdMin": 27,
        "pdMax": 29,
        "pe": 10
      },
      {
        "pdMin": 30,
        "pdMax": 32,
        "pe": 11
      },
      {
        "pdMin": 33,
        "pdMax": 35,
        "pe": 12
      },
      {
        "pdMin": 36,
        "pdMax": 38,
        "pe": 13
      },
      {
        "pdMin": 39,
        "pdMax": 41,
        "pe": 14
      },
      {
        "pdMin": 42,
        "pdMax": 44,
        "pe": 15
      },
      {
        "pdMin": 45,
        "pdMax": 47,
        "pe": 16
      },
      {
        "pdMin": 48,
        "pdMax": 51,
        "pe": 17
      },
      {
        "pdMin": 52,
        "pdMax": 52,
        "pe": 18
      },
      {
        "pdMin": 53,
        "pdMax": 53,
        "pe": 19
      },
      {
        "pdMin": 54,
        "pdMax": 54,
        "pe": 20
      },
      {
        "pdMin": 55,
        "pdMax": 55,
        "pe": 21
      },
      {
        "pdMin": 56,
        "pdMax": 56,
        "pe": 22
      },
      {
        "pdMin": 57,
        "pdMax": 57,
        "pe": 24
      },
      {
        "pdMin": 58,
        "pdMax": 58,
        "pe": 26
      }
    ],
    "13_0": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 5,
        "pe": 2
      },
      {
        "pdMin": 6,
        "pdMax": 8,
        "pe": 3
      },
      {
        "pdMin": 9,
        "pdMax": 11,
        "pe": 4
      },
      {
        "pdMin": 12,
        "pdMax": 14,
        "pe": 5
      },
      {
        "pdMin": 15,
        "pdMax": 17,
        "pe": 6
      },
      {
        "pdMin": 18,
        "pdMax": 20,
        "pe": 7
      },
      {
        "pdMin": 21,
        "pdMax": 23,
        "pe": 8
      },
      {
        "pdMin": 24,
        "pdMax": 26,
        "pe": 9
      },
      {
        "pdMin": 27,
        "pdMax": 29,
        "pe": 10
      },
      {
        "pdMin": 30,
        "pdMax": 32,
        "pe": 11
      },
      {
        "pdMin": 33,
        "pdMax": 35,
        "pe": 12
      },
      {
        "pdMin": 36,
        "pdMax": 38,
        "pe": 13
      },
      {
        "pdMin": 39,
        "pdMax": 41,
        "pe": 14
      },
      {
        "pdMin": 42,
        "pdMax": 44,
        "pe": 15
      },
      {
        "pdMin": 45,
        "pdMax": 47,
        "pe": 16
      },
      {
        "pdMin": 48,
        "pdMax": 51,
        "pe": 17
      },
      {
        "pdMin": 52,
        "pdMax": 53,
        "pe": 18
      },
      {
        "pdMin": 54,
        "pdMax": 54,
        "pe": 19
      },
      {
        "pdMin": 55,
        "pdMax": 55,
        "pe": 20
      },
      {
        "pdMin": 56,
        "pdMax": 56,
        "pe": 22
      },
      {
        "pdMin": 57,
        "pdMax": 57,
        "pe": 24
      },
      {
        "pdMin": 58,
        "pdMax": 58,
        "pe": 26
      }
    ],
    "13_4": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 5,
        "pe": 2
      },
      {
        "pdMin": 6,
        "pdMax": 8,
        "pe": 3
      },
      {
        "pdMin": 9,
        "pdMax": 11,
        "pe": 4
      },
      {
        "pdMin": 12,
        "pdMax": 14,
        "pe": 5
      },
      {
        "pdMin": 15,
        "pdMax": 17,
        "pe": 6
      },
      {
        "pdMin": 18,
        "pdMax": 20,
        "pe": 7
      },
      {
        "pdMin": 21,
        "pdMax": 23,
        "pe": 8
      },
      {
        "pdMin": 24,
        "pdMax": 26,
        "pe": 9
      },
      {
        "pdMin": 27,
        "pdMax": 29,
        "pe": 10
      },
      {
        "pdMin": 30,
        "pdMax": 32,
        "pe": 11
      },
      {
        "pdMin": 33,
        "pdMax": 35,
        "pe": 12
      },
      {
        "pdMin": 36,
        "pdMax": 38,
        "pe": 13
      },
      {
        "pdMin": 39,
        "pdMax": 41,
        "pe": 14
      },
      {
        "pdMin": 42,
        "pdMax": 44,
        "pe": 15
      },
      {
        "pdMin": 45,
        "pdMax": 47,
        "pe": 16
      },
      {
        "pdMin": 48,
        "pdMax": 51,
        "pe": 17
      },
      {
        "pdMin": 52,
        "pdMax": 53,
        "pe": 18
      },
      {
        "pdMin": 54,
        "pdMax": 54,
        "pe": 19
      },
      {
        "pdMin": 55,
        "pdMax": 55,
        "pe": 20
      },
      {
        "pdMin": 56,
        "pdMax": 56,
        "pe": 21
      },
      {
        "pdMin": 57,
        "pdMax": 57,
        "pe": 23
      },
      {
        "pdMin": 58,
        "pdMax": 58,
        "pe": 25
      }
    ],
    "13_8": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 5,
        "pe": 2
      },
      {
        "pdMin": 6,
        "pdMax": 8,
        "pe": 3
      },
      {
        "pdMin": 9,
        "pdMax": 11,
        "pe": 4
      },
      {
        "pdMin": 12,
        "pdMax": 14,
        "pe": 5
      },
      {
        "pdMin": 15,
        "pdMax": 17,
        "pe": 6
      },
      {
        "pdMin": 18,
        "pdMax": 20,
        "pe": 7
      },
      {
        "pdMin": 21,
        "pdMax": 23,
        "pe": 8
      },
      {
        "pdMin": 24,
        "pdMax": 27,
        "pe": 9
      },
      {
        "pdMin": 28,
        "pdMax": 30,
        "pe": 10
      },
      {
        "pdMin": 31,
        "pdMax": 33,
        "pe": 11
      },
      {
        "pdMin": 34,
        "pdMax": 36,
        "pe": 12
      },
      {
        "pdMin": 37,
        "pdMax": 39,
        "pe": 13
      },
      {
        "pdMin": 40,
        "pdMax": 42,
        "pe": 14
      },
      {
        "pdMin": 43,
        "pdMax": 45,
        "pe": 15
      },
      {
        "pdMin": 46,
        "pdMax": 48,
        "pe": 16
      },
      {
        "pdMin": 49,
        "pdMax": 52,
        "pe": 17
      },
      {
        "pdMin": 53,
        "pdMax": 53,
        "pe": 18
      },
      {
        "pdMin": 54,
        "pdMax": 54,
        "pe": 19
      },
      {
        "pdMin": 55,
        "pdMax": 55,
        "pe": 20
      },
      {
        "pdMin": 56,
        "pdMax": 56,
        "pe": 21
      },
      {
        "pdMin": 57,
        "pdMax": 57,
        "pe": 23
      },
      {
        "pdMin": 58,
        "pdMax": 58,
        "pe": 25
      }
    ],
    "14_0": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 5,
        "pe": 2
      },
      {
        "pdMin": 6,
        "pdMax": 8,
        "pe": 3
      },
      {
        "pdMin": 9,
        "pdMax": 11,
        "pe": 4
      },
      {
        "pdMin": 12,
        "pdMax": 14,
        "pe": 5
      },
      {
        "pdMin": 15,
        "pdMax": 17,
        "pe": 6
      },
      {
        "pdMin": 18,
        "pdMax": 20,
        "pe": 7
      },
      {
        "pdMin": 21,
        "pdMax": 23,
        "pe": 8
      },
      {
        "pdMin": 24,
        "pdMax": 27,
        "pe": 9
      },
      {
        "pdMin": 28,
        "pdMax": 30,
        "pe": 10
      },
      {
        "pdMin": 31,
        "pdMax": 33,
        "pe": 11
      },
      {
        "pdMin": 34,
        "pdMax": 36,
        "pe": 12
      },
      {
        "pdMin": 37,
        "pdMax": 39,
        "pe": 13
      },
      {
        "pdMin": 40,
        "pdMax": 42,
        "pe": 14
      },
      {
        "pdMin": 43,
        "pdMax": 45,
        "pe": 15
      },
      {
        "pdMin": 46,
        "pdMax": 48,
        "pe": 16
      },
      {
        "pdMin": 49,
        "pdMax": 52,
        "pe": 17
      },
      {
        "pdMin": 53,
        "pdMax": 53,
        "pe": 18
      },
      {
        "pdMin": 54,
        "pdMax": 54,
        "pe": 19
      },
      {
        "pdMin": 55,
        "pdMax": 55,
        "pe": 20
      },
      {
        "pdMin": 56,
        "pdMax": 56,
        "pe": 21
      },
      {
        "pdMin": 57,
        "pdMax": 57,
        "pe": 22
      },
      {
        "pdMin": 58,
        "pdMax": 58,
        "pe": 25
      }
    ],
    "14_4": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 5,
        "pe": 2
      },
      {
        "pdMin": 6,
        "pdMax": 8,
        "pe": 3
      },
      {
        "pdMin": 9,
        "pdMax": 11,
        "pe": 4
      },
      {
        "pdMin": 12,
        "pdMax": 14,
        "pe": 5
      },
      {
        "pdMin": 15,
        "pdMax": 17,
        "pe": 6
      },
      {
        "pdMin": 18,
        "pdMax": 20,
        "pe": 7
      },
      {
        "pdMin": 21,
        "pdMax": 23,
        "pe": 8
      },
      {
        "pdMin": 24,
        "pdMax": 27,
        "pe": 9
      },
      {
        "pdMin": 28,
        "pdMax": 30,
        "pe": 10
      },
      {
        "pdMin": 31,
        "pdMax": 33,
        "pe": 11
      },
      {
        "pdMin": 34,
        "pdMax": 36,
        "pe": 12
      },
      {
        "pdMin": 37,
        "pdMax": 39,
        "pe": 13
      },
      {
        "pdMin": 40,
        "pdMax": 42,
        "pe": 14
      },
      {
        "pdMin": 43,
        "pdMax": 45,
        "pe": 15
      },
      {
        "pdMin": 46,
        "pdMax": 48,
        "pe": 16
      },
      {
        "pdMin": 49,
        "pdMax": 52,
        "pe": 17
      },
      {
        "pdMin": 53,
        "pdMax": 53,
        "pe": 18
      },
      {
        "pdMin": 54,
        "pdMax": 54,
        "pe": 19
      },
      {
        "pdMin": 55,
        "pdMax": 55,
        "pe": 20
      },
      {
        "pdMin": 56,
        "pdMax": 56,
        "pe": 21
      },
      {
        "pdMin": 57,
        "pdMax": 57,
        "pe": 22
      },
      {
        "pdMin": 58,
        "pdMax": 58,
        "pe": 25
      }
    ],
    "14_8": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 5,
        "pe": 2
      },
      {
        "pdMin": 6,
        "pdMax": 8,
        "pe": 3
      },
      {
        "pdMin": 9,
        "pdMax": 11,
        "pe": 4
      },
      {
        "pdMin": 12,
        "pdMax": 14,
        "pe": 5
      },
      {
        "pdMin": 15,
        "pdMax": 17,
        "pe": 6
      },
      {
        "pdMin": 18,
        "pdMax": 20,
        "pe": 7
      },
      {
        "pdMin": 21,
        "pdMax": 23,
        "pe": 8
      },
      {
        "pdMin": 24,
        "pdMax": 27,
        "pe": 9
      },
      {
        "pdMin": 28,
        "pdMax": 30,
        "pe": 10
      },
      {
        "pdMin": 31,
        "pdMax": 33,
        "pe": 11
      },
      {
        "pdMin": 34,
        "pdMax": 36,
        "pe": 12
      },
      {
        "pdMin": 37,
        "pdMax": 39,
        "pe": 13
      },
      {
        "pdMin": 40,
        "pdMax": 42,
        "pe": 14
      },
      {
        "pdMin": 43,
        "pdMax": 45,
        "pe": 15
      },
      {
        "pdMin": 46,
        "pdMax": 48,
        "pe": 16
      },
      {
        "pdMin": 49,
        "pdMax": 52,
        "pe": 17
      },
      {
        "pdMin": 53,
        "pdMax": 53,
        "pe": 18
      },
      {
        "pdMin": 54,
        "pdMax": 54,
        "pe": 19
      },
      {
        "pdMin": 55,
        "pdMax": 55,
        "pe": 20
      },
      {
        "pdMin": 56,
        "pdMax": 56,
        "pe": 21
      },
      {
        "pdMin": 57,
        "pdMax": 57,
        "pe": 22
      },
      {
        "pdMin": 58,
        "pdMax": 58,
        "pe": 25
      }
    ],
    "15_0": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 5,
        "pe": 2
      },
      {
        "pdMin": 6,
        "pdMax": 8,
        "pe": 3
      },
      {
        "pdMin": 9,
        "pdMax": 11,
        "pe": 4
      },
      {
        "pdMin": 12,
        "pdMax": 14,
        "pe": 5
      },
      {
        "pdMin": 15,
        "pdMax": 17,
        "pe": 6
      },
      {
        "pdMin": 18,
        "pdMax": 20,
        "pe": 7
      },
      {
        "pdMin": 21,
        "pdMax": 23,
        "pe": 8
      },
      {
        "pdMin": 24,
        "pdMax": 27,
        "pe": 9
      },
      {
        "pdMin": 28,
        "pdMax": 30,
        "pe": 10
      },
      {
        "pdMin": 31,
        "pdMax": 33,
        "pe": 11
      },
      {
        "pdMin": 34,
        "pdMax": 36,
        "pe": 12
      },
      {
        "pdMin": 37,
        "pdMax": 39,
        "pe": 13
      },
      {
        "pdMin": 40,
        "pdMax": 42,
        "pe": 14
      },
      {
        "pdMin": 43,
        "pdMax": 45,
        "pe": 15
      },
      {
        "pdMin": 46,
        "pdMax": 48,
        "pe": 16
      },
      {
        "pdMin": 49,
        "pdMax": 52,
        "pe": 17
      },
      {
        "pdMin": 53,
        "pdMax": 53,
        "pe": 18
      },
      {
        "pdMin": 54,
        "pdMax": 54,
        "pe": 19
      },
      {
        "pdMin": 55,
        "pdMax": 55,
        "pe": 20
      },
      {
        "pdMin": 56,
        "pdMax": 56,
        "pe": 21
      },
      {
        "pdMin": 57,
        "pdMax": 57,
        "pe": 22
      },
      {
        "pdMin": 58,
        "pdMax": 58,
        "pe": 25
      }
    ],
    "15_4": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 5,
        "pe": 2
      },
      {
        "pdMin": 6,
        "pdMax": 8,
        "pe": 3
      },
      {
        "pdMin": 9,
        "pdMax": 11,
        "pe": 4
      },
      {
        "pdMin": 12,
        "pdMax": 15,
        "pe": 5
      },
      {
        "pdMin": 16,
        "pdMax": 18,
        "pe": 6
      },
      {
        "pdMin": 19,
        "pdMax": 21,
        "pe": 7
      },
      {
        "pdMin": 22,
        "pdMax": 24,
        "pe": 8
      },
      {
        "pdMin": 25,
        "pdMax": 27,
        "pe": 9
      },
      {
        "pdMin": 28,
        "pdMax": 30,
        "pe": 10
      },
      {
        "pdMin": 31,
        "pdMax": 33,
        "pe": 11
      },
      {
        "pdMin": 34,
        "pdMax": 36,
        "pe": 12
      },
      {
        "pdMin": 37,
        "pdMax": 40,
        "pe": 13
      },
      {
        "pdMin": 41,
        "pdMax": 43,
        "pe": 14
      },
      {
        "pdMin": 44,
        "pdMax": 46,
        "pe": 15
      },
      {
        "pdMin": 47,
        "pdMax": 49,
        "pe": 16
      },
      {
        "pdMin": 50,
        "pdMax": 53,
        "pe": 17
      },
      {
        "pdMin": 54,
        "pdMax": 54,
        "pe": 18
      },
      {
        "pdMin": 55,
        "pdMax": 55,
        "pe": 19
      },
      {
        "pdMin": 56,
        "pdMax": 56,
        "pe": 20
      },
      {
        "pdMin": 57,
        "pdMax": 57,
        "pe": 21
      },
      {
        "pdMin": 58,
        "pdMax": 58,
        "pe": 24
      }
    ],
    "15_8": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 5,
        "pe": 2
      },
      {
        "pdMin": 6,
        "pdMax": 8,
        "pe": 3
      },
      {
        "pdMin": 9,
        "pdMax": 11,
        "pe": 4
      },
      {
        "pdMin": 12,
        "pdMax": 15,
        "pe": 5
      },
      {
        "pdMin": 16,
        "pdMax": 18,
        "pe": 6
      },
      {
        "pdMin": 19,
        "pdMax": 21,
        "pe": 7
      },
      {
        "pdMin": 22,
        "pdMax": 24,
        "pe": 8
      },
      {
        "pdMin": 25,
        "pdMax": 27,
        "pe": 9
      },
      {
        "pdMin": 28,
        "pdMax": 30,
        "pe": 10
      },
      {
        "pdMin": 31,
        "pdMax": 33,
        "pe": 11
      },
      {
        "pdMin": 34,
        "pdMax": 36,
        "pe": 12
      },
      {
        "pdMin": 37,
        "pdMax": 40,
        "pe": 13
      },
      {
        "pdMin": 41,
        "pdMax": 43,
        "pe": 14
      },
      {
        "pdMin": 44,
        "pdMax": 46,
        "pe": 15
      },
      {
        "pdMin": 47,
        "pdMax": 49,
        "pe": 16
      },
      {
        "pdMin": 50,
        "pdMax": 53,
        "pe": 17
      },
      {
        "pdMin": 54,
        "pdMax": 54,
        "pe": 18
      },
      {
        "pdMin": 55,
        "pdMax": 55,
        "pe": 19
      },
      {
        "pdMin": 56,
        "pdMax": 56,
        "pe": 20
      },
      {
        "pdMin": 57,
        "pdMax": 57,
        "pe": 21
      },
      {
        "pdMin": 58,
        "pdMax": 58,
        "pe": 24
      }
    ],
    "16_0": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 5,
        "pe": 2
      },
      {
        "pdMin": 6,
        "pdMax": 9,
        "pe": 3
      },
      {
        "pdMin": 10,
        "pdMax": 12,
        "pe": 4
      },
      {
        "pdMin": 13,
        "pdMax": 15,
        "pe": 5
      },
      {
        "pdMin": 16,
        "pdMax": 18,
        "pe": 6
      },
      {
        "pdMin": 19,
        "pdMax": 21,
        "pe": 7
      },
      {
        "pdMin": 22,
        "pdMax": 24,
        "pe": 8
      },
      {
        "pdMin": 25,
        "pdMax": 28,
        "pe": 9
      },
      {
        "pdMin": 29,
        "pdMax": 31,
        "pe": 10
      },
      {
        "pdMin": 32,
        "pdMax": 34,
        "pe": 11
      },
      {
        "pdMin": 35,
        "pdMax": 37,
        "pe": 12
      },
      {
        "pdMin": 38,
        "pdMax": 40,
        "pe": 13
      },
      {
        "pdMin": 41,
        "pdMax": 43,
        "pe": 14
      },
      {
        "pdMin": 44,
        "pdMax": 47,
        "pe": 15
      },
      {
        "pdMin": 48,
        "pdMax": 50,
        "pe": 16
      },
      {
        "pdMin": 51,
        "pdMax": 54,
        "pe": 17
      },
      {
        "pdMin": 55,
        "pdMax": 55,
        "pe": 18
      },
      {
        "pdMin": 56,
        "pdMax": 56,
        "pe": 19
      },
      {
        "pdMin": 57,
        "pdMax": 57,
        "pe": 20
      },
      {
        "pdMin": 58,
        "pdMax": 58,
        "pe": 23
      }
    ],
    "16_4": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 5,
        "pe": 2
      },
      {
        "pdMin": 6,
        "pdMax": 9,
        "pe": 3
      },
      {
        "pdMin": 10,
        "pdMax": 12,
        "pe": 4
      },
      {
        "pdMin": 13,
        "pdMax": 15,
        "pe": 5
      },
      {
        "pdMin": 16,
        "pdMax": 18,
        "pe": 6
      },
      {
        "pdMin": 19,
        "pdMax": 21,
        "pe": 7
      },
      {
        "pdMin": 22,
        "pdMax": 24,
        "pe": 8
      },
      {
        "pdMin": 25,
        "pdMax": 28,
        "pe": 9
      },
      {
        "pdMin": 29,
        "pdMax": 31,
        "pe": 10
      },
      {
        "pdMin": 32,
        "pdMax": 34,
        "pe": 11
      },
      {
        "pdMin": 35,
        "pdMax": 37,
        "pe": 12
      },
      {
        "pdMin": 38,
        "pdMax": 40,
        "pe": 13
      },
      {
        "pdMin": 41,
        "pdMax": 43,
        "pe": 14
      },
      {
        "pdMin": 44,
        "pdMax": 47,
        "pe": 15
      },
      {
        "pdMin": 48,
        "pdMax": 50,
        "pe": 16
      },
      {
        "pdMin": 51,
        "pdMax": 54,
        "pe": 17
      },
      {
        "pdMin": 55,
        "pdMax": 55,
        "pe": 18
      },
      {
        "pdMin": 56,
        "pdMax": 56,
        "pe": 19
      },
      {
        "pdMin": 57,
        "pdMax": 57,
        "pe": 20
      },
      {
        "pdMin": 58,
        "pdMax": 58,
        "pe": 23
      }
    ],
    "16_8": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 5,
        "pe": 2
      },
      {
        "pdMin": 6,
        "pdMax": 9,
        "pe": 3
      },
      {
        "pdMin": 10,
        "pdMax": 12,
        "pe": 4
      },
      {
        "pdMin": 13,
        "pdMax": 15,
        "pe": 5
      },
      {
        "pdMin": 16,
        "pdMax": 18,
        "pe": 6
      },
      {
        "pdMin": 19,
        "pdMax": 21,
        "pe": 7
      },
      {
        "pdMin": 22,
        "pdMax": 24,
        "pe": 8
      },
      {
        "pdMin": 25,
        "pdMax": 28,
        "pe": 9
      },
      {
        "pdMin": 29,
        "pdMax": 31,
        "pe": 10
      },
      {
        "pdMin": 32,
        "pdMax": 34,
        "pe": 11
      },
      {
        "pdMin": 35,
        "pdMax": 37,
        "pe": 12
      },
      {
        "pdMin": 38,
        "pdMax": 40,
        "pe": 13
      },
      {
        "pdMin": 41,
        "pdMax": 43,
        "pe": 14
      },
      {
        "pdMin": 44,
        "pdMax": 47,
        "pe": 15
      },
      {
        "pdMin": 48,
        "pdMax": 50,
        "pe": 16
      },
      {
        "pdMin": 51,
        "pdMax": 54,
        "pe": 17
      },
      {
        "pdMin": 55,
        "pdMax": 55,
        "pe": 18
      },
      {
        "pdMin": 56,
        "pdMax": 56,
        "pe": 19
      },
      {
        "pdMin": 57,
        "pdMax": 57,
        "pe": 20
      },
      {
        "pdMin": 58,
        "pdMax": 58,
        "pe": 23
      }
    ]
  },
  "sim": {
    "6_0": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 4
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 5
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 6
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 7
      },
      {
        "pdMin": 11,
        "pdMax": 11,
        "pe": 8
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 9
      },
      {
        "pdMin": 14,
        "pdMax": 14,
        "pe": 10
      },
      {
        "pdMin": 15,
        "pdMax": 16,
        "pe": 11
      },
      {
        "pdMin": 17,
        "pdMax": 17,
        "pe": 12
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 13
      },
      {
        "pdMin": 20,
        "pdMax": 20,
        "pe": 14
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 15
      },
      {
        "pdMin": 23,
        "pdMax": 23,
        "pe": 16
      },
      {
        "pdMin": 24,
        "pdMax": 26,
        "pe": 17
      },
      {
        "pdMin": 27,
        "pdMax": 28,
        "pe": 18
      },
      {
        "pdMin": 29,
        "pdMax": 30,
        "pe": 19
      },
      {
        "pdMin": 31,
        "pdMax": 32,
        "pe": 20
      },
      {
        "pdMin": 33,
        "pdMax": 34,
        "pe": 21
      },
      {
        "pdMin": 35,
        "pdMax": 36,
        "pe": 22
      },
      {
        "pdMin": 37,
        "pdMax": 37,
        "pe": 23
      },
      {
        "pdMin": 38,
        "pdMax": 38,
        "pe": 24
      },
      {
        "pdMin": 39,
        "pdMax": 39,
        "pe": 25
      },
      {
        "pdMin": 40,
        "pdMax": 41,
        "pe": 26
      },
      {
        "pdMin": 42,
        "pdMax": 43,
        "pe": 27
      },
      {
        "pdMin": 44,
        "pdMax": 46,
        "pe": 28
      }
    ],
    "6_4": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 4
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 5
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 6
      },
      {
        "pdMin": 10,
        "pdMax": 10,
        "pe": 7
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 8
      },
      {
        "pdMin": 13,
        "pdMax": 13,
        "pe": 9
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 10
      },
      {
        "pdMin": 16,
        "pdMax": 16,
        "pe": 11
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 12
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 13
      },
      {
        "pdMin": 21,
        "pdMax": 21,
        "pe": 14
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 15
      },
      {
        "pdMin": 24,
        "pdMax": 24,
        "pe": 16
      },
      {
        "pdMin": 25,
        "pdMax": 27,
        "pe": 17
      },
      {
        "pdMin": 28,
        "pdMax": 29,
        "pe": 18
      },
      {
        "pdMin": 30,
        "pdMax": 31,
        "pe": 19
      },
      {
        "pdMin": 32,
        "pdMax": 33,
        "pe": 20
      },
      {
        "pdMin": 34,
        "pdMax": 35,
        "pe": 21
      },
      {
        "pdMin": 36,
        "pdMax": 37,
        "pe": 22
      },
      {
        "pdMin": 38,
        "pdMax": 38,
        "pe": 23
      },
      {
        "pdMin": 39,
        "pdMax": 39,
        "pe": 24
      },
      {
        "pdMin": 40,
        "pdMax": 40,
        "pe": 25
      },
      {
        "pdMin": 41,
        "pdMax": 42,
        "pe": 26
      },
      {
        "pdMin": 43,
        "pdMax": 44,
        "pe": 27
      },
      {
        "pdMin": 45,
        "pdMax": 46,
        "pe": 28
      }
    ],
    "6_8": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 4
      },
      {
        "pdMin": 7,
        "pdMax": 7,
        "pe": 5
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 6
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 7
      },
      {
        "pdMin": 12,
        "pdMax": 12,
        "pe": 8
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 9
      },
      {
        "pdMin": 15,
        "pdMax": 15,
        "pe": 10
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 11
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 12
      },
      {
        "pdMin": 20,
        "pdMax": 20,
        "pe": 13
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 14
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 15
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 16
      },
      {
        "pdMin": 26,
        "pdMax": 28,
        "pe": 17
      },
      {
        "pdMin": 29,
        "pdMax": 30,
        "pe": 18
      },
      {
        "pdMin": 31,
        "pdMax": 32,
        "pe": 19
      },
      {
        "pdMin": 33,
        "pdMax": 33,
        "pe": 20
      },
      {
        "pdMin": 34,
        "pdMax": 35,
        "pe": 21
      },
      {
        "pdMin": 36,
        "pdMax": 37,
        "pe": 22
      },
      {
        "pdMin": 38,
        "pdMax": 38,
        "pe": 23
      },
      {
        "pdMin": 39,
        "pdMax": 39,
        "pe": 24
      },
      {
        "pdMin": 40,
        "pdMax": 40,
        "pe": 25
      },
      {
        "pdMin": 41,
        "pdMax": 42,
        "pe": 26
      },
      {
        "pdMin": 43,
        "pdMax": 44,
        "pe": 27
      },
      {
        "pdMin": 45,
        "pdMax": 46,
        "pe": 28
      }
    ],
    "7_0": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 4
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 5
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 6
      },
      {
        "pdMin": 11,
        "pdMax": 11,
        "pe": 7
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 8
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 9
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 10
      },
      {
        "pdMin": 18,
        "pdMax": 18,
        "pe": 11
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 12
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 13
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 14
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 15
      },
      {
        "pdMin": 26,
        "pdMax": 27,
        "pe": 16
      },
      {
        "pdMin": 28,
        "pdMax": 30,
        "pe": 17
      },
      {
        "pdMin": 31,
        "pdMax": 31,
        "pe": 18
      },
      {
        "pdMin": 32,
        "pdMax": 33,
        "pe": 19
      },
      {
        "pdMin": 34,
        "pdMax": 34,
        "pe": 20
      },
      {
        "pdMin": 35,
        "pdMax": 36,
        "pe": 21
      },
      {
        "pdMin": 37,
        "pdMax": 38,
        "pe": 22
      },
      {
        "pdMin": 39,
        "pdMax": 39,
        "pe": 23
      },
      {
        "pdMin": 40,
        "pdMax": 40,
        "pe": 24
      },
      {
        "pdMin": 41,
        "pdMax": 41,
        "pe": 25
      },
      {
        "pdMin": 42,
        "pdMax": 43,
        "pe": 26
      },
      {
        "pdMin": 44,
        "pdMax": 45,
        "pe": 27
      },
      {
        "pdMin": 46,
        "pdMax": 46,
        "pe": 28
      }
    ],
    "7_4": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 4
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 5
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 6
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 7
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 8
      },
      {
        "pdMin": 15,
        "pdMax": 15,
        "pe": 9
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 10
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 11
      },
      {
        "pdMin": 20,
        "pdMax": 21,
        "pe": 12
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 13
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 14
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 15
      },
      {
        "pdMin": 27,
        "pdMax": 28,
        "pe": 16
      },
      {
        "pdMin": 29,
        "pdMax": 31,
        "pe": 17
      },
      {
        "pdMin": 32,
        "pdMax": 33,
        "pe": 18
      },
      {
        "pdMin": 34,
        "pdMax": 34,
        "pe": 19
      },
      {
        "pdMin": 35,
        "pdMax": 35,
        "pe": 20
      },
      {
        "pdMin": 36,
        "pdMax": 37,
        "pe": 21
      },
      {
        "pdMin": 38,
        "pdMax": 39,
        "pe": 22
      },
      {
        "pdMin": 40,
        "pdMax": 40,
        "pe": 23
      },
      {
        "pdMin": 41,
        "pdMax": 41,
        "pe": 24
      },
      {
        "pdMin": 42,
        "pdMax": 42,
        "pe": 25
      },
      {
        "pdMin": 43,
        "pdMax": 44,
        "pe": 26
      },
      {
        "pdMin": 45,
        "pdMax": 45,
        "pe": 27
      },
      {
        "pdMin": 46,
        "pdMax": 46,
        "pe": 28
      }
    ],
    "7_8": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 4
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 5
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 6
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 7
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 8
      },
      {
        "pdMin": 15,
        "pdMax": 15,
        "pe": 9
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 10
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 11
      },
      {
        "pdMin": 20,
        "pdMax": 21,
        "pe": 12
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 13
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 14
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 15
      },
      {
        "pdMin": 27,
        "pdMax": 28,
        "pe": 16
      },
      {
        "pdMin": 29,
        "pdMax": 31,
        "pe": 17
      },
      {
        "pdMin": 32,
        "pdMax": 33,
        "pe": 18
      },
      {
        "pdMin": 34,
        "pdMax": 34,
        "pe": 19
      },
      {
        "pdMin": 35,
        "pdMax": 36,
        "pe": 20
      },
      {
        "pdMin": 37,
        "pdMax": 38,
        "pe": 21
      },
      {
        "pdMin": 39,
        "pdMax": 40,
        "pe": 22
      },
      {
        "pdMin": 41,
        "pdMax": 41,
        "pe": 23
      },
      {
        "pdMin": 42,
        "pdMax": 42,
        "pe": 24
      },
      {
        "pdMin": 43,
        "pdMax": 43,
        "pe": 25
      },
      {
        "pdMin": 44,
        "pdMax": 44,
        "pe": 26
      },
      {
        "pdMin": 45,
        "pdMax": 45,
        "pe": 27
      },
      {
        "pdMin": 46,
        "pdMax": 46,
        "pe": 28
      }
    ],
    "8_0": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 3
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 4
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 5
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 6
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 7
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 8
      },
      {
        "pdMin": 15,
        "pdMax": 16,
        "pe": 9
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 10
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 11
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 12
      },
      {
        "pdMin": 23,
        "pdMax": 23,
        "pe": 13
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 14
      },
      {
        "pdMin": 26,
        "pdMax": 27,
        "pe": 15
      },
      {
        "pdMin": 28,
        "pdMax": 29,
        "pe": 16
      },
      {
        "pdMin": 30,
        "pdMax": 32,
        "pe": 17
      },
      {
        "pdMin": 33,
        "pdMax": 33,
        "pe": 18
      },
      {
        "pdMin": 34,
        "pdMax": 34,
        "pe": 19
      },
      {
        "pdMin": 35,
        "pdMax": 36,
        "pe": 20
      },
      {
        "pdMin": 37,
        "pdMax": 38,
        "pe": 21
      },
      {
        "pdMin": 39,
        "pdMax": 40,
        "pe": 22
      },
      {
        "pdMin": 41,
        "pdMax": 41,
        "pe": 23
      },
      {
        "pdMin": 42,
        "pdMax": 42,
        "pe": 24
      },
      {
        "pdMin": 43,
        "pdMax": 43,
        "pe": 25
      },
      {
        "pdMin": 44,
        "pdMax": 44,
        "pe": 26
      },
      {
        "pdMin": 45,
        "pdMax": 45,
        "pe": 27
      },
      {
        "pdMin": 46,
        "pdMax": 46,
        "pe": 28
      }
    ],
    "8_4": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 3
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 4
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 5
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 6
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 7
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 8
      },
      {
        "pdMin": 16,
        "pdMax": 16,
        "pe": 9
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 10
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 11
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 12
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 13
      },
      {
        "pdMin": 25,
        "pdMax": 26,
        "pe": 14
      },
      {
        "pdMin": 27,
        "pdMax": 28,
        "pe": 15
      },
      {
        "pdMin": 29,
        "pdMax": 30,
        "pe": 16
      },
      {
        "pdMin": 31,
        "pdMax": 33,
        "pe": 17
      },
      {
        "pdMin": 34,
        "pdMax": 34,
        "pe": 18
      },
      {
        "pdMin": 35,
        "pdMax": 36,
        "pe": 19
      },
      {
        "pdMin": 37,
        "pdMax": 38,
        "pe": 20
      },
      {
        "pdMin": 39,
        "pdMax": 40,
        "pe": 21
      },
      {
        "pdMin": 41,
        "pdMax": 41,
        "pe": 22
      },
      {
        "pdMin": 42,
        "pdMax": 42,
        "pe": 23
      },
      {
        "pdMin": 43,
        "pdMax": 43,
        "pe": 24
      },
      {
        "pdMin": 44,
        "pdMax": 44,
        "pe": 25
      },
      {
        "pdMin": 45,
        "pdMax": 45,
        "pe": 26
      },
      {
        "pdMin": 46,
        "pdMax": 46,
        "pe": 27
      }
    ],
    "8_8": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 3
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 4
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 5
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 6
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 7
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 8
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 9
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 10
      },
      {
        "pdMin": 20,
        "pdMax": 21,
        "pe": 11
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 12
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 13
      },
      {
        "pdMin": 26,
        "pdMax": 27,
        "pe": 14
      },
      {
        "pdMin": 28,
        "pdMax": 29,
        "pe": 15
      },
      {
        "pdMin": 30,
        "pdMax": 31,
        "pe": 16
      },
      {
        "pdMin": 32,
        "pdMax": 34,
        "pe": 17
      },
      {
        "pdMin": 35,
        "pdMax": 36,
        "pe": 18
      },
      {
        "pdMin": 37,
        "pdMax": 37,
        "pe": 19
      },
      {
        "pdMin": 38,
        "pdMax": 38,
        "pe": 20
      },
      {
        "pdMin": 39,
        "pdMax": 40,
        "pe": 21
      },
      {
        "pdMin": 41,
        "pdMax": 42,
        "pe": 22
      },
      {
        "pdMin": 43,
        "pdMax": 43,
        "pe": 23
      },
      {
        "pdMin": 44,
        "pdMax": 44,
        "pe": 24
      },
      {
        "pdMin": 45,
        "pdMax": 45,
        "pe": 25
      },
      {
        "pdMin": 46,
        "pdMax": 46,
        "pe": 26
      }
    ],
    "9_0": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 3
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 4
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 5
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 6
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 7
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 8
      },
      {
        "pdMin": 16,
        "pdMax": 18,
        "pe": 9
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 10
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 11
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 12
      },
      {
        "pdMin": 25,
        "pdMax": 26,
        "pe": 13
      },
      {
        "pdMin": 27,
        "pdMax": 28,
        "pe": 14
      },
      {
        "pdMin": 29,
        "pdMax": 30,
        "pe": 15
      },
      {
        "pdMin": 31,
        "pdMax": 32,
        "pe": 16
      },
      {
        "pdMin": 33,
        "pdMax": 35,
        "pe": 17
      },
      {
        "pdMin": 36,
        "pdMax": 36,
        "pe": 18
      },
      {
        "pdMin": 37,
        "pdMax": 37,
        "pe": 19
      },
      {
        "pdMin": 38,
        "pdMax": 38,
        "pe": 20
      },
      {
        "pdMin": 39,
        "pdMax": 40,
        "pe": 21
      },
      {
        "pdMin": 41,
        "pdMax": 42,
        "pe": 22
      },
      {
        "pdMin": 43,
        "pdMax": 43,
        "pe": 23
      },
      {
        "pdMin": 44,
        "pdMax": 44,
        "pe": 24
      },
      {
        "pdMin": 45,
        "pdMax": 45,
        "pe": 25
      },
      {
        "pdMin": 46,
        "pdMax": 46,
        "pe": 26
      }
    ],
    "9_4": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 3
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 4
      },
      {
        "pdMin": 8,
        "pdMax": 10,
        "pe": 5
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 6
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 7
      },
      {
        "pdMin": 15,
        "pdMax": 16,
        "pe": 8
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 9
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 10
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 11
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 12
      },
      {
        "pdMin": 25,
        "pdMax": 27,
        "pe": 13
      },
      {
        "pdMin": 28,
        "pdMax": 29,
        "pe": 14
      },
      {
        "pdMin": 30,
        "pdMax": 31,
        "pe": 15
      },
      {
        "pdMin": 32,
        "pdMax": 33,
        "pe": 16
      },
      {
        "pdMin": 34,
        "pdMax": 36,
        "pe": 17
      },
      {
        "pdMin": 37,
        "pdMax": 37,
        "pe": 18
      },
      {
        "pdMin": 38,
        "pdMax": 38,
        "pe": 19
      },
      {
        "pdMin": 39,
        "pdMax": 39,
        "pe": 20
      },
      {
        "pdMin": 40,
        "pdMax": 41,
        "pe": 21
      },
      {
        "pdMin": 42,
        "pdMax": 43,
        "pe": 22
      },
      {
        "pdMin": 44,
        "pdMax": 44,
        "pe": 23
      },
      {
        "pdMin": 45,
        "pdMax": 45,
        "pe": 24
      },
      {
        "pdMin": 46,
        "pdMax": 46,
        "pe": 25
      }
    ],
    "9_8": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 6,
        "pe": 3
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 4
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 5
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 6
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 7
      },
      {
        "pdMin": 15,
        "pdMax": 16,
        "pe": 8
      },
      {
        "pdMin": 17,
        "pdMax": 19,
        "pe": 9
      },
      {
        "pdMin": 20,
        "pdMax": 21,
        "pe": 10
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 11
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 12
      },
      {
        "pdMin": 26,
        "pdMax": 27,
        "pe": 13
      },
      {
        "pdMin": 28,
        "pdMax": 29,
        "pe": 14
      },
      {
        "pdMin": 30,
        "pdMax": 32,
        "pe": 15
      },
      {
        "pdMin": 33,
        "pdMax": 34,
        "pe": 16
      },
      {
        "pdMin": 35,
        "pdMax": 37,
        "pe": 17
      },
      {
        "pdMin": 38,
        "pdMax": 38,
        "pe": 18
      },
      {
        "pdMin": 39,
        "pdMax": 39,
        "pe": 19
      },
      {
        "pdMin": 40,
        "pdMax": 40,
        "pe": 20
      },
      {
        "pdMin": 41,
        "pdMax": 42,
        "pe": 21
      },
      {
        "pdMin": 43,
        "pdMax": 44,
        "pe": 22
      },
      {
        "pdMin": 45,
        "pdMax": 45,
        "pe": 23
      },
      {
        "pdMin": 46,
        "pdMax": 46,
        "pe": 24
      }
    ],
    "10_0": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 6,
        "pe": 3
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 4
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 5
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 6
      },
      {
        "pdMin": 13,
        "pdMax": 15,
        "pe": 7
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 8
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 9
      },
      {
        "pdMin": 20,
        "pdMax": 21,
        "pe": 10
      },
      {
        "pdMin": 22,
        "pdMax": 24,
        "pe": 11
      },
      {
        "pdMin": 25,
        "pdMax": 26,
        "pe": 12
      },
      {
        "pdMin": 27,
        "pdMax": 28,
        "pe": 13
      },
      {
        "pdMin": 29,
        "pdMax": 30,
        "pe": 14
      },
      {
        "pdMin": 31,
        "pdMax": 33,
        "pe": 15
      },
      {
        "pdMin": 34,
        "pdMax": 35,
        "pe": 16
      },
      {
        "pdMin": 36,
        "pdMax": 38,
        "pe": 17
      },
      {
        "pdMin": 39,
        "pdMax": 39,
        "pe": 18
      },
      {
        "pdMin": 40,
        "pdMax": 40,
        "pe": 19
      },
      {
        "pdMin": 41,
        "pdMax": 41,
        "pe": 20
      },
      {
        "pdMin": 42,
        "pdMax": 43,
        "pe": 21
      },
      {
        "pdMin": 44,
        "pdMax": 44,
        "pe": 22
      },
      {
        "pdMin": 45,
        "pdMax": 45,
        "pe": 23
      },
      {
        "pdMin": 46,
        "pdMax": 46,
        "pe": 24
      }
    ],
    "10_4": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 3
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 4
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 5
      },
      {
        "pdMin": 11,
        "pdMax": 13,
        "pe": 6
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 7
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 8
      },
      {
        "pdMin": 18,
        "pdMax": 20,
        "pe": 9
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 10
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 11
      },
      {
        "pdMin": 25,
        "pdMax": 27,
        "pe": 12
      },
      {
        "pdMin": 28,
        "pdMax": 29,
        "pe": 13
      },
      {
        "pdMin": 30,
        "pdMax": 31,
        "pe": 14
      },
      {
        "pdMin": 32,
        "pdMax": 33,
        "pe": 15
      },
      {
        "pdMin": 34,
        "pdMax": 36,
        "pe": 16
      },
      {
        "pdMin": 37,
        "pdMax": 39,
        "pe": 17
      },
      {
        "pdMin": 40,
        "pdMax": 40,
        "pe": 18
      },
      {
        "pdMin": 41,
        "pdMax": 41,
        "pe": 19
      },
      {
        "pdMin": 42,
        "pdMax": 42,
        "pe": 20
      },
      {
        "pdMin": 43,
        "pdMax": 44,
        "pe": 21
      },
      {
        "pdMin": 45,
        "pdMax": 45,
        "pe": 22
      },
      {
        "pdMin": 46,
        "pdMax": 46,
        "pe": 23
      }
    ],
    "10_8": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 3
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 4
      },
      {
        "pdMin": 9,
        "pdMax": 11,
        "pe": 5
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 6
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 7
      },
      {
        "pdMin": 16,
        "pdMax": 18,
        "pe": 8
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 9
      },
      {
        "pdMin": 21,
        "pdMax": 23,
        "pe": 10
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 11
      },
      {
        "pdMin": 26,
        "pdMax": 27,
        "pe": 12
      },
      {
        "pdMin": 28,
        "pdMax": 30,
        "pe": 13
      },
      {
        "pdMin": 31,
        "pdMax": 32,
        "pe": 14
      },
      {
        "pdMin": 33,
        "pdMax": 34,
        "pe": 15
      },
      {
        "pdMin": 35,
        "pdMax": 37,
        "pe": 16
      },
      {
        "pdMin": 38,
        "pdMax": 40,
        "pe": 17
      },
      {
        "pdMin": 41,
        "pdMax": 41,
        "pe": 18
      },
      {
        "pdMin": 42,
        "pdMax": 42,
        "pe": 19
      },
      {
        "pdMin": 43,
        "pdMax": 43,
        "pe": 20
      },
      {
        "pdMin": 44,
        "pdMax": 44,
        "pe": 21
      },
      {
        "pdMin": 45,
        "pdMax": 45,
        "pe": 22
      },
      {
        "pdMin": 46,
        "pdMax": 46,
        "pe": 23
      }
    ],
    "11_0": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 3
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 4
      },
      {
        "pdMin": 9,
        "pdMax": 11,
        "pe": 5
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 6
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 7
      },
      {
        "pdMin": 16,
        "pdMax": 18,
        "pe": 8
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 9
      },
      {
        "pdMin": 21,
        "pdMax": 23,
        "pe": 10
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 11
      },
      {
        "pdMin": 26,
        "pdMax": 27,
        "pe": 12
      },
      {
        "pdMin": 28,
        "pdMax": 30,
        "pe": 13
      },
      {
        "pdMin": 31,
        "pdMax": 32,
        "pe": 14
      },
      {
        "pdMin": 33,
        "pdMax": 34,
        "pe": 15
      },
      {
        "pdMin": 35,
        "pdMax": 37,
        "pe": 16
      },
      {
        "pdMin": 38,
        "pdMax": 40,
        "pe": 17
      },
      {
        "pdMin": 41,
        "pdMax": 41,
        "pe": 18
      },
      {
        "pdMin": 42,
        "pdMax": 42,
        "pe": 19
      },
      {
        "pdMin": 43,
        "pdMax": 43,
        "pe": 20
      },
      {
        "pdMin": 44,
        "pdMax": 44,
        "pe": 21
      },
      {
        "pdMin": 45,
        "pdMax": 45,
        "pe": 22
      },
      {
        "pdMin": 46,
        "pdMax": 46,
        "pe": 23
      }
    ],
    "11_4": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 3
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 4
      },
      {
        "pdMin": 9,
        "pdMax": 11,
        "pe": 5
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 6
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 7
      },
      {
        "pdMin": 16,
        "pdMax": 18,
        "pe": 8
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 9
      },
      {
        "pdMin": 21,
        "pdMax": 23,
        "pe": 10
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 11
      },
      {
        "pdMin": 26,
        "pdMax": 34,
        "pe": 12
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 13
      },
      {
        "pdMin": 31,
        "pdMax": 32,
        "pe": 14
      },
      {
        "pdMin": 33,
        "pdMax": 34,
        "pe": 15
      },
      {
        "pdMin": 35,
        "pdMax": 37,
        "pe": 16
      },
      {
        "pdMin": 38,
        "pdMax": 40,
        "pe": 17
      },
      {
        "pdMin": 41,
        "pdMax": 41,
        "pe": 18
      },
      {
        "pdMin": 42,
        "pdMax": 42,
        "pe": 19
      },
      {
        "pdMin": 43,
        "pdMax": 43,
        "pe": 20
      },
      {
        "pdMin": 44,
        "pdMax": 44,
        "pe": 21
      },
      {
        "pdMin": 45,
        "pdMax": 45,
        "pe": 22
      },
      {
        "pdMin": 46,
        "pdMax": 46,
        "pe": 23
      }
    ],
    "11_8": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 3
      },
      {
        "pdMin": 7,
        "pdMax": 9,
        "pe": 4
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 5
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 6
      },
      {
        "pdMin": 14,
        "pdMax": 16,
        "pe": 7
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 8
      },
      {
        "pdMin": 19,
        "pdMax": 21,
        "pe": 9
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 10
      },
      {
        "pdMin": 24,
        "pdMax": 26,
        "pe": 11
      },
      {
        "pdMin": 27,
        "pdMax": 28,
        "pe": 12
      },
      {
        "pdMin": 29,
        "pdMax": 30,
        "pe": 13
      },
      {
        "pdMin": 31,
        "pdMax": 33,
        "pe": 14
      },
      {
        "pdMin": 34,
        "pdMax": 35,
        "pe": 15
      },
      {
        "pdMin": 36,
        "pdMax": 38,
        "pe": 16
      },
      {
        "pdMin": 39,
        "pdMax": 41,
        "pe": 17
      },
      {
        "pdMin": 42,
        "pdMax": 42,
        "pe": 18
      },
      {
        "pdMin": 43,
        "pdMax": 43,
        "pe": 19
      },
      {
        "pdMin": 44,
        "pdMax": 44,
        "pe": 20
      },
      {
        "pdMin": 45,
        "pdMax": 45,
        "pe": 21
      },
      {
        "pdMin": 46,
        "pdMax": 46,
        "pe": 22
      }
    ],
    "12_0": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 3
      },
      {
        "pdMin": 7,
        "pdMax": 9,
        "pe": 4
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 5
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 6
      },
      {
        "pdMin": 14,
        "pdMax": 16,
        "pe": 7
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 8
      },
      {
        "pdMin": 19,
        "pdMax": 21,
        "pe": 9
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 10
      },
      {
        "pdMin": 24,
        "pdMax": 26,
        "pe": 11
      },
      {
        "pdMin": 27,
        "pdMax": 28,
        "pe": 12
      },
      {
        "pdMin": 29,
        "pdMax": 30,
        "pe": 13
      },
      {
        "pdMin": 31,
        "pdMax": 33,
        "pe": 14
      },
      {
        "pdMin": 34,
        "pdMax": 35,
        "pe": 15
      },
      {
        "pdMin": 36,
        "pdMax": 38,
        "pe": 16
      },
      {
        "pdMin": 39,
        "pdMax": 41,
        "pe": 17
      },
      {
        "pdMin": 42,
        "pdMax": 42,
        "pe": 18
      },
      {
        "pdMin": 43,
        "pdMax": 43,
        "pe": 19
      },
      {
        "pdMin": 44,
        "pdMax": 44,
        "pe": 20
      },
      {
        "pdMin": 45,
        "pdMax": 45,
        "pe": 21
      },
      {
        "pdMin": 46,
        "pdMax": 46,
        "pe": 22
      }
    ],
    "12_4": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 3
      },
      {
        "pdMin": 7,
        "pdMax": 9,
        "pe": 4
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 5
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 6
      },
      {
        "pdMin": 14,
        "pdMax": 16,
        "pe": 7
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 8
      },
      {
        "pdMin": 19,
        "pdMax": 21,
        "pe": 9
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 10
      },
      {
        "pdMin": 24,
        "pdMax": 26,
        "pe": 11
      },
      {
        "pdMin": 27,
        "pdMax": 28,
        "pe": 12
      },
      {
        "pdMin": 29,
        "pdMax": 30,
        "pe": 13
      },
      {
        "pdMin": 31,
        "pdMax": 33,
        "pe": 14
      },
      {
        "pdMin": 34,
        "pdMax": 35,
        "pe": 15
      },
      {
        "pdMin": 36,
        "pdMax": 38,
        "pe": 16
      },
      {
        "pdMin": 39,
        "pdMax": 41,
        "pe": 17
      },
      {
        "pdMin": 42,
        "pdMax": 42,
        "pe": 18
      },
      {
        "pdMin": 43,
        "pdMax": 43,
        "pe": 19
      },
      {
        "pdMin": 44,
        "pdMax": 44,
        "pe": 20
      },
      {
        "pdMin": 45,
        "pdMax": 45,
        "pe": 21
      },
      {
        "pdMin": 46,
        "pdMax": 46,
        "pe": 22
      }
    ],
    "12_8": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 3
      },
      {
        "pdMin": 7,
        "pdMax": 9,
        "pe": 4
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 5
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 6
      },
      {
        "pdMin": 14,
        "pdMax": 16,
        "pe": 7
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 8
      },
      {
        "pdMin": 19,
        "pdMax": 21,
        "pe": 9
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 10
      },
      {
        "pdMin": 24,
        "pdMax": 26,
        "pe": 11
      },
      {
        "pdMin": 27,
        "pdMax": 28,
        "pe": 12
      },
      {
        "pdMin": 29,
        "pdMax": 30,
        "pe": 13
      },
      {
        "pdMin": 31,
        "pdMax": 33,
        "pe": 14
      },
      {
        "pdMin": 34,
        "pdMax": 35,
        "pe": 15
      },
      {
        "pdMin": 36,
        "pdMax": 38,
        "pe": 16
      },
      {
        "pdMin": 39,
        "pdMax": 41,
        "pe": 17
      },
      {
        "pdMin": 42,
        "pdMax": 42,
        "pe": 18
      },
      {
        "pdMin": 43,
        "pdMax": 43,
        "pe": 19
      },
      {
        "pdMin": 44,
        "pdMax": 44,
        "pe": 20
      },
      {
        "pdMin": 45,
        "pdMax": 45,
        "pe": 21
      },
      {
        "pdMin": 46,
        "pdMax": 46,
        "pe": 22
      }
    ],
    "13_0": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 3
      },
      {
        "pdMin": 7,
        "pdMax": 9,
        "pe": 4
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 5
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 6
      },
      {
        "pdMin": 14,
        "pdMax": 16,
        "pe": 7
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 8
      },
      {
        "pdMin": 19,
        "pdMax": 21,
        "pe": 9
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 10
      },
      {
        "pdMin": 24,
        "pdMax": 26,
        "pe": 11
      },
      {
        "pdMin": 27,
        "pdMax": 28,
        "pe": 12
      },
      {
        "pdMin": 29,
        "pdMax": 30,
        "pe": 13
      },
      {
        "pdMin": 31,
        "pdMax": 33,
        "pe": 14
      },
      {
        "pdMin": 34,
        "pdMax": 35,
        "pe": 15
      },
      {
        "pdMin": 36,
        "pdMax": 38,
        "pe": 16
      },
      {
        "pdMin": 39,
        "pdMax": 41,
        "pe": 17
      },
      {
        "pdMin": 42,
        "pdMax": 42,
        "pe": 18
      },
      {
        "pdMin": 43,
        "pdMax": 43,
        "pe": 19
      },
      {
        "pdMin": 44,
        "pdMax": 44,
        "pe": 20
      },
      {
        "pdMin": 45,
        "pdMax": 45,
        "pe": 21
      },
      {
        "pdMin": 46,
        "pdMax": 46,
        "pe": 22
      }
    ],
    "13_4": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 3
      },
      {
        "pdMin": 7,
        "pdMax": 9,
        "pe": 4
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 5
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 6
      },
      {
        "pdMin": 14,
        "pdMax": 16,
        "pe": 7
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 8
      },
      {
        "pdMin": 19,
        "pdMax": 21,
        "pe": 9
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 10
      },
      {
        "pdMin": 24,
        "pdMax": 26,
        "pe": 11
      },
      {
        "pdMin": 27,
        "pdMax": 28,
        "pe": 12
      },
      {
        "pdMin": 29,
        "pdMax": 30,
        "pe": 13
      },
      {
        "pdMin": 31,
        "pdMax": 33,
        "pe": 14
      },
      {
        "pdMin": 34,
        "pdMax": 35,
        "pe": 15
      },
      {
        "pdMin": 36,
        "pdMax": 38,
        "pe": 16
      },
      {
        "pdMin": 39,
        "pdMax": 41,
        "pe": 17
      },
      {
        "pdMin": 42,
        "pdMax": 42,
        "pe": 18
      },
      {
        "pdMin": 43,
        "pdMax": 43,
        "pe": 19
      },
      {
        "pdMin": 44,
        "pdMax": 44,
        "pe": 20
      },
      {
        "pdMin": 45,
        "pdMax": 45,
        "pe": 21
      },
      {
        "pdMin": 46,
        "pdMax": 46,
        "pe": 22
      }
    ],
    "13_8": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 3
      },
      {
        "pdMin": 7,
        "pdMax": 9,
        "pe": 4
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 5
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 6
      },
      {
        "pdMin": 14,
        "pdMax": 16,
        "pe": 7
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 8
      },
      {
        "pdMin": 19,
        "pdMax": 21,
        "pe": 9
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 10
      },
      {
        "pdMin": 24,
        "pdMax": 26,
        "pe": 11
      },
      {
        "pdMin": 27,
        "pdMax": 28,
        "pe": 12
      },
      {
        "pdMin": 29,
        "pdMax": 30,
        "pe": 13
      },
      {
        "pdMin": 31,
        "pdMax": 33,
        "pe": 14
      },
      {
        "pdMin": 34,
        "pdMax": 35,
        "pe": 15
      },
      {
        "pdMin": 36,
        "pdMax": 38,
        "pe": 16
      },
      {
        "pdMin": 39,
        "pdMax": 41,
        "pe": 17
      },
      {
        "pdMin": 42,
        "pdMax": 42,
        "pe": 18
      },
      {
        "pdMin": 43,
        "pdMax": 43,
        "pe": 19
      },
      {
        "pdMin": 44,
        "pdMax": 44,
        "pe": 20
      },
      {
        "pdMin": 45,
        "pdMax": 45,
        "pe": 21
      },
      {
        "pdMin": 46,
        "pdMax": 46,
        "pe": 22
      }
    ],
    "14_0": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 3
      },
      {
        "pdMin": 7,
        "pdMax": 9,
        "pe": 4
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 5
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 6
      },
      {
        "pdMin": 14,
        "pdMax": 16,
        "pe": 7
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 8
      },
      {
        "pdMin": 19,
        "pdMax": 21,
        "pe": 9
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 10
      },
      {
        "pdMin": 24,
        "pdMax": 26,
        "pe": 11
      },
      {
        "pdMin": 27,
        "pdMax": 28,
        "pe": 12
      },
      {
        "pdMin": 29,
        "pdMax": 30,
        "pe": 13
      },
      {
        "pdMin": 31,
        "pdMax": 33,
        "pe": 14
      },
      {
        "pdMin": 34,
        "pdMax": 35,
        "pe": 15
      },
      {
        "pdMin": 36,
        "pdMax": 38,
        "pe": 16
      },
      {
        "pdMin": 39,
        "pdMax": 41,
        "pe": 17
      },
      {
        "pdMin": 42,
        "pdMax": 42,
        "pe": 18
      },
      {
        "pdMin": 43,
        "pdMax": 43,
        "pe": 19
      },
      {
        "pdMin": 44,
        "pdMax": 44,
        "pe": 20
      },
      {
        "pdMin": 45,
        "pdMax": 45,
        "pe": 21
      },
      {
        "pdMin": 46,
        "pdMax": 46,
        "pe": 22
      }
    ],
    "14_4": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 3
      },
      {
        "pdMin": 7,
        "pdMax": 9,
        "pe": 4
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 5
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 6
      },
      {
        "pdMin": 14,
        "pdMax": 16,
        "pe": 7
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 8
      },
      {
        "pdMin": 19,
        "pdMax": 21,
        "pe": 9
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 10
      },
      {
        "pdMin": 24,
        "pdMax": 26,
        "pe": 11
      },
      {
        "pdMin": 27,
        "pdMax": 28,
        "pe": 12
      },
      {
        "pdMin": 29,
        "pdMax": 30,
        "pe": 13
      },
      {
        "pdMin": 31,
        "pdMax": 33,
        "pe": 14
      },
      {
        "pdMin": 34,
        "pdMax": 35,
        "pe": 15
      },
      {
        "pdMin": 36,
        "pdMax": 38,
        "pe": 16
      },
      {
        "pdMin": 39,
        "pdMax": 41,
        "pe": 17
      },
      {
        "pdMin": 42,
        "pdMax": 42,
        "pe": 18
      },
      {
        "pdMin": 43,
        "pdMax": 43,
        "pe": 19
      },
      {
        "pdMin": 44,
        "pdMax": 44,
        "pe": 20
      },
      {
        "pdMin": 45,
        "pdMax": 45,
        "pe": 21
      },
      {
        "pdMin": 46,
        "pdMax": 46,
        "pe": 22
      }
    ],
    "14_8": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 3
      },
      {
        "pdMin": 7,
        "pdMax": 9,
        "pe": 4
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 5
      },
      {
        "pdMin": 12,
        "pdMax": 14,
        "pe": 6
      },
      {
        "pdMin": 15,
        "pdMax": 16,
        "pe": 7
      },
      {
        "pdMin": 17,
        "pdMax": 19,
        "pe": 8
      },
      {
        "pdMin": 20,
        "pdMax": 21,
        "pe": 9
      },
      {
        "pdMin": 22,
        "pdMax": 24,
        "pe": 10
      },
      {
        "pdMin": 25,
        "pdMax": 26,
        "pe": 11
      },
      {
        "pdMin": 27,
        "pdMax": 29,
        "pe": 12
      },
      {
        "pdMin": 30,
        "pdMax": 31,
        "pe": 13
      },
      {
        "pdMin": 32,
        "pdMax": 34,
        "pe": 14
      },
      {
        "pdMin": 35,
        "pdMax": 36,
        "pe": 15
      },
      {
        "pdMin": 37,
        "pdMax": 39,
        "pe": 16
      },
      {
        "pdMin": 40,
        "pdMax": 42,
        "pe": 17
      },
      {
        "pdMin": 43,
        "pdMax": 43,
        "pe": 18
      },
      {
        "pdMin": 44,
        "pdMax": 44,
        "pe": 19
      },
      {
        "pdMin": 45,
        "pdMax": 45,
        "pe": 20
      },
      {
        "pdMin": 46,
        "pdMax": 46,
        "pe": 21
      }
    ],
    "15_0": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 3
      },
      {
        "pdMin": 7,
        "pdMax": 9,
        "pe": 4
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 5
      },
      {
        "pdMin": 12,
        "pdMax": 14,
        "pe": 6
      },
      {
        "pdMin": 15,
        "pdMax": 16,
        "pe": 7
      },
      {
        "pdMin": 17,
        "pdMax": 19,
        "pe": 8
      },
      {
        "pdMin": 20,
        "pdMax": 21,
        "pe": 9
      },
      {
        "pdMin": 22,
        "pdMax": 24,
        "pe": 10
      },
      {
        "pdMin": 25,
        "pdMax": 26,
        "pe": 11
      },
      {
        "pdMin": 27,
        "pdMax": 29,
        "pe": 12
      },
      {
        "pdMin": 30,
        "pdMax": 31,
        "pe": 13
      },
      {
        "pdMin": 32,
        "pdMax": 34,
        "pe": 14
      },
      {
        "pdMin": 35,
        "pdMax": 36,
        "pe": 15
      },
      {
        "pdMin": 37,
        "pdMax": 39,
        "pe": 16
      },
      {
        "pdMin": 40,
        "pdMax": 42,
        "pe": 17
      },
      {
        "pdMin": 43,
        "pdMax": 43,
        "pe": 18
      },
      {
        "pdMin": 44,
        "pdMax": 44,
        "pe": 19
      },
      {
        "pdMin": 45,
        "pdMax": 45,
        "pe": 20
      },
      {
        "pdMin": 46,
        "pdMax": 46,
        "pe": 21
      }
    ],
    "15_4": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 7,
        "pe": 3
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 4
      },
      {
        "pdMin": 10,
        "pdMax": 12,
        "pe": 5
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 6
      },
      {
        "pdMin": 15,
        "pdMax": 17,
        "pe": 7
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 8
      },
      {
        "pdMin": 20,
        "pdMax": 22,
        "pe": 9
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 10
      },
      {
        "pdMin": 25,
        "pdMax": 27,
        "pe": 11
      },
      {
        "pdMin": 28,
        "pdMax": 29,
        "pe": 12
      },
      {
        "pdMin": 30,
        "pdMax": 32,
        "pe": 13
      },
      {
        "pdMin": 33,
        "pdMax": 34,
        "pe": 14
      },
      {
        "pdMin": 35,
        "pdMax": 37,
        "pe": 15
      },
      {
        "pdMin": 38,
        "pdMax": 39,
        "pe": 16
      },
      {
        "pdMin": 40,
        "pdMax": 43,
        "pe": 17
      },
      {
        "pdMin": 44,
        "pdMax": 44,
        "pe": 18
      },
      {
        "pdMin": 45,
        "pdMax": 45,
        "pe": 19
      },
      {
        "pdMin": 46,
        "pdMax": 46,
        "pe": 20
      }
    ],
    "15_8": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 7,
        "pe": 3
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 4
      },
      {
        "pdMin": 10,
        "pdMax": 12,
        "pe": 5
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 6
      },
      {
        "pdMin": 15,
        "pdMax": 17,
        "pe": 7
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 8
      },
      {
        "pdMin": 20,
        "pdMax": 22,
        "pe": 9
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 10
      },
      {
        "pdMin": 25,
        "pdMax": 27,
        "pe": 11
      },
      {
        "pdMin": 28,
        "pdMax": 29,
        "pe": 12
      },
      {
        "pdMin": 30,
        "pdMax": 32,
        "pe": 13
      },
      {
        "pdMin": 33,
        "pdMax": 34,
        "pe": 14
      },
      {
        "pdMin": 35,
        "pdMax": 37,
        "pe": 15
      },
      {
        "pdMin": 38,
        "pdMax": 39,
        "pe": 16
      },
      {
        "pdMin": 40,
        "pdMax": 43,
        "pe": 17
      },
      {
        "pdMin": 44,
        "pdMax": 44,
        "pe": 18
      },
      {
        "pdMin": 45,
        "pdMax": 45,
        "pe": 19
      },
      {
        "pdMin": 46,
        "pdMax": 46,
        "pe": 20
      }
    ],
    "16_0": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 7,
        "pe": 3
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 4
      },
      {
        "pdMin": 10,
        "pdMax": 12,
        "pe": 5
      },
      {
        "pdMin": 13,
        "pdMax": 15,
        "pe": 6
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 7
      },
      {
        "pdMin": 18,
        "pdMax": 20,
        "pe": 8
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 9
      },
      {
        "pdMin": 23,
        "pdMax": 25,
        "pe": 10
      },
      {
        "pdMin": 26,
        "pdMax": 27,
        "pe": 11
      },
      {
        "pdMin": 28,
        "pdMax": 30,
        "pe": 12
      },
      {
        "pdMin": 31,
        "pdMax": 33,
        "pe": 13
      },
      {
        "pdMin": 34,
        "pdMax": 35,
        "pe": 14
      },
      {
        "pdMin": 36,
        "pdMax": 38,
        "pe": 15
      },
      {
        "pdMin": 39,
        "pdMax": 40,
        "pe": 16
      },
      {
        "pdMin": 41,
        "pdMax": 44,
        "pe": 17
      },
      {
        "pdMin": 45,
        "pdMax": 45,
        "pe": 18
      },
      {
        "pdMin": 46,
        "pdMax": 46,
        "pe": 19
      }
    ],
    "16_4": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 7,
        "pe": 3
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 4
      },
      {
        "pdMin": 10,
        "pdMax": 12,
        "pe": 5
      },
      {
        "pdMin": 13,
        "pdMax": 15,
        "pe": 6
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 7
      },
      {
        "pdMin": 18,
        "pdMax": 20,
        "pe": 8
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 9
      },
      {
        "pdMin": 23,
        "pdMax": 25,
        "pe": 10
      },
      {
        "pdMin": 26,
        "pdMax": 27,
        "pe": 11
      },
      {
        "pdMin": 28,
        "pdMax": 30,
        "pe": 12
      },
      {
        "pdMin": 31,
        "pdMax": 33,
        "pe": 13
      },
      {
        "pdMin": 34,
        "pdMax": 35,
        "pe": 14
      },
      {
        "pdMin": 36,
        "pdMax": 38,
        "pe": 15
      },
      {
        "pdMin": 39,
        "pdMax": 40,
        "pe": 16
      },
      {
        "pdMin": 41,
        "pdMax": 44,
        "pe": 17
      },
      {
        "pdMin": 45,
        "pdMax": 45,
        "pe": 18
      },
      {
        "pdMin": 46,
        "pdMax": 46,
        "pe": 19
      }
    ]
  },
  "mat": {
    "6_0": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 2
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 3
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 4
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 5
      },
      {
        "pdMin": 6,
        "pdMax": 6,
        "pe": 6
      },
      {
        "pdMin": 7,
        "pdMax": 7,
        "pe": 7
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 8
      },
      {
        "pdMin": 9,
        "pdMax": 9,
        "pe": 9
      },
      {
        "pdMin": 10,
        "pdMax": 10,
        "pe": 10
      },
      {
        "pdMin": 11,
        "pdMax": 11,
        "pe": 11
      },
      {
        "pdMin": 12,
        "pdMax": 12,
        "pe": 12
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 13
      },
      {
        "pdMin": 15,
        "pdMax": 15,
        "pe": 14
      },
      {
        "pdMin": 16,
        "pdMax": 16,
        "pe": 15
      },
      {
        "pdMin": 17,
        "pdMax": 17,
        "pe": 16
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 17
      },
      {
        "pdMin": 20,
        "pdMax": 20,
        "pe": 18
      },
      {
        "pdMin": 21,
        "pdMax": 21,
        "pe": 19
      },
      {
        "pdMin": 22,
        "pdMax": 22,
        "pe": 20
      },
      {
        "pdMin": 23,
        "pdMax": 23,
        "pe": 22
      },
      {
        "pdMin": 24,
        "pdMax": 24,
        "pe": 24
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 26
      },
      {
        "pdMin": 26,
        "pdMax": 32,
        "pe": 28
      }
    ],
    "6_4": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 2
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 3
      },
      {
        "pdMin": 4,
        "pdMax": 4,
        "pe": 4
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 5
      },
      {
        "pdMin": 6,
        "pdMax": 6,
        "pe": 6
      },
      {
        "pdMin": 7,
        "pdMax": 7,
        "pe": 7
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 8
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 9
      },
      {
        "pdMin": 11,
        "pdMax": 11,
        "pe": 10
      },
      {
        "pdMin": 12,
        "pdMax": 12,
        "pe": 11
      },
      {
        "pdMin": 13,
        "pdMax": 13,
        "pe": 12
      },
      {
        "pdMin": 14,
        "pdMax": 14,
        "pe": 13
      },
      {
        "pdMin": 15,
        "pdMax": 15,
        "pe": 14
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 15
      },
      {
        "pdMin": 18,
        "pdMax": 18,
        "pe": 16
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 17
      },
      {
        "pdMin": 21,
        "pdMax": 21,
        "pe": 18
      },
      {
        "pdMin": 22,
        "pdMax": 22,
        "pe": 19
      },
      {
        "pdMin": 23,
        "pdMax": 23,
        "pe": 20
      },
      {
        "pdMin": 24,
        "pdMax": 24,
        "pe": 22
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 24
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 26
      },
      {
        "pdMin": 27,
        "pdMax": 32,
        "pe": 28
      }
    ],
    "6_8": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 2
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 3
      },
      {
        "pdMin": 4,
        "pdMax": 4,
        "pe": 4
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 5
      },
      {
        "pdMin": 6,
        "pdMax": 6,
        "pe": 6
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 7
      },
      {
        "pdMin": 9,
        "pdMax": 9,
        "pe": 8
      },
      {
        "pdMin": 10,
        "pdMax": 10,
        "pe": 9
      },
      {
        "pdMin": 11,
        "pdMax": 11,
        "pe": 10
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 11
      },
      {
        "pdMin": 14,
        "pdMax": 14,
        "pe": 12
      },
      {
        "pdMin": 15,
        "pdMax": 15,
        "pe": 13
      },
      {
        "pdMin": 16,
        "pdMax": 16,
        "pe": 14
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 15
      },
      {
        "pdMin": 19,
        "pdMax": 19,
        "pe": 16
      },
      {
        "pdMin": 20,
        "pdMax": 21,
        "pe": 17
      },
      {
        "pdMin": 22,
        "pdMax": 22,
        "pe": 18
      },
      {
        "pdMin": 23,
        "pdMax": 23,
        "pe": 19
      },
      {
        "pdMin": 24,
        "pdMax": 24,
        "pe": 20
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 22
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 24
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 26
      },
      {
        "pdMin": 28,
        "pdMax": 32,
        "pe": 28
      }
    ],
    "7_0": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 1,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 3
      },
      {
        "pdMin": 4,
        "pdMax": 4,
        "pe": 4
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 5
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 6
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 7
      },
      {
        "pdMin": 9,
        "pdMax": 9,
        "pe": 8
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 9
      },
      {
        "pdMin": 12,
        "pdMax": 12,
        "pe": 10
      },
      {
        "pdMin": 13,
        "pdMax": 13,
        "pe": 11
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 12
      },
      {
        "pdMin": 16,
        "pdMax": 16,
        "pe": 13
      },
      {
        "pdMin": 17,
        "pdMax": 17,
        "pe": 14
      },
      {
        "pdMin": 18,
        "pdMax": 18,
        "pe": 15
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 16
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 17
      },
      {
        "pdMin": 23,
        "pdMax": 23,
        "pe": 18
      },
      {
        "pdMin": 24,
        "pdMax": 24,
        "pe": 19
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 20
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 22
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 24
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 26
      },
      {
        "pdMin": 29,
        "pdMax": 32,
        "pe": 28
      }
    ],
    "7_4": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 1,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 3
      },
      {
        "pdMin": 4,
        "pdMax": 4,
        "pe": 4
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 5
      },
      {
        "pdMin": 7,
        "pdMax": 7,
        "pe": 6
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 7
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 8
      },
      {
        "pdMin": 11,
        "pdMax": 11,
        "pe": 9
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 10
      },
      {
        "pdMin": 14,
        "pdMax": 14,
        "pe": 11
      },
      {
        "pdMin": 15,
        "pdMax": 15,
        "pe": 12
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 13
      },
      {
        "pdMin": 18,
        "pdMax": 18,
        "pe": 14
      },
      {
        "pdMin": 19,
        "pdMax": 19,
        "pe": 15
      },
      {
        "pdMin": 20,
        "pdMax": 21,
        "pe": 16
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 17
      },
      {
        "pdMin": 24,
        "pdMax": 24,
        "pe": 18
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 19
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 21
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 23
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 25
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 27
      },
      {
        "pdMin": 30,
        "pdMax": 32,
        "pe": 28
      }
    ],
    "7_8": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 1,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 3
      },
      {
        "pdMin": 4,
        "pdMax": 4,
        "pe": 4
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 5
      },
      {
        "pdMin": 7,
        "pdMax": 7,
        "pe": 6
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 7
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 8
      },
      {
        "pdMin": 11,
        "pdMax": 11,
        "pe": 9
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 10
      },
      {
        "pdMin": 14,
        "pdMax": 14,
        "pe": 11
      },
      {
        "pdMin": 15,
        "pdMax": 15,
        "pe": 12
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 13
      },
      {
        "pdMin": 18,
        "pdMax": 18,
        "pe": 14
      },
      {
        "pdMin": 19,
        "pdMax": 19,
        "pe": 15
      },
      {
        "pdMin": 20,
        "pdMax": 21,
        "pe": 16
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 17
      },
      {
        "pdMin": 24,
        "pdMax": 24,
        "pe": 18
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 19
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 20
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 22
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 24
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 26
      },
      {
        "pdMin": 30,
        "pdMax": 32,
        "pe": 28
      }
    ],
    "8_0": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 1,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 3
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 4
      },
      {
        "pdMin": 6,
        "pdMax": 6,
        "pe": 5
      },
      {
        "pdMin": 7,
        "pdMax": 7,
        "pe": 6
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 7
      },
      {
        "pdMin": 10,
        "pdMax": 10,
        "pe": 8
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 9
      },
      {
        "pdMin": 13,
        "pdMax": 13,
        "pe": 10
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 11
      },
      {
        "pdMin": 16,
        "pdMax": 16,
        "pe": 12
      },
      {
        "pdMin": 17,
        "pdMax": 17,
        "pe": 13
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 14
      },
      {
        "pdMin": 20,
        "pdMax": 20,
        "pe": 15
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 16
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 17
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 18
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 19
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 21
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 23
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 25
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 27
      },
      {
        "pdMin": 31,
        "pdMax": 32,
        "pe": 28
      }
    ],
    "8_4": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 1,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 3
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 4
      },
      {
        "pdMin": 6,
        "pdMax": 6,
        "pe": 5
      },
      {
        "pdMin": 7,
        "pdMax": 7,
        "pe": 6
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 7
      },
      {
        "pdMin": 10,
        "pdMax": 10,
        "pe": 8
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 9
      },
      {
        "pdMin": 13,
        "pdMax": 13,
        "pe": 10
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 11
      },
      {
        "pdMin": 16,
        "pdMax": 16,
        "pe": 12
      },
      {
        "pdMin": 17,
        "pdMax": 17,
        "pe": 13
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 14
      },
      {
        "pdMin": 20,
        "pdMax": 20,
        "pe": 15
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 16
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 17
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 18
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 19
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 20
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 22
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 24
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 26
      },
      {
        "pdMin": 31,
        "pdMax": 32,
        "pe": 28
      }
    ],
    "8_8": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 1,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 3
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 4
      },
      {
        "pdMin": 6,
        "pdMax": 6,
        "pe": 5
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 6
      },
      {
        "pdMin": 9,
        "pdMax": 9,
        "pe": 7
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 8
      },
      {
        "pdMin": 12,
        "pdMax": 12,
        "pe": 9
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 10
      },
      {
        "pdMin": 15,
        "pdMax": 15,
        "pe": 11
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 12
      },
      {
        "pdMin": 18,
        "pdMax": 18,
        "pe": 13
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 14
      },
      {
        "pdMin": 21,
        "pdMax": 21,
        "pe": 15
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 16
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 17
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 18
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 20
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 22
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 24
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 26
      },
      {
        "pdMin": 31,
        "pdMax": 32,
        "pe": 28
      }
    ],
    "9_0": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 1,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 3
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 4
      },
      {
        "pdMin": 6,
        "pdMax": 6,
        "pe": 5
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 6
      },
      {
        "pdMin": 9,
        "pdMax": 9,
        "pe": 7
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 8
      },
      {
        "pdMin": 12,
        "pdMax": 12,
        "pe": 9
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 10
      },
      {
        "pdMin": 15,
        "pdMax": 15,
        "pe": 11
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 12
      },
      {
        "pdMin": 18,
        "pdMax": 18,
        "pe": 13
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 14
      },
      {
        "pdMin": 21,
        "pdMax": 21,
        "pe": 15
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 16
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 17
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 18
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 19
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 21
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 23
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 25
      },
      {
        "pdMin": 31,
        "pdMax": 31,
        "pe": 27
      },
      {
        "pdMin": 32,
        "pdMax": 32,
        "pe": 28
      }
    ],
    "9_8": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 4
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 5
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 6
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 7
      },
      {
        "pdMin": 11,
        "pdMax": 11,
        "pe": 8
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 9
      },
      {
        "pdMin": 14,
        "pdMax": 14,
        "pe": 10
      },
      {
        "pdMin": 15,
        "pdMax": 16,
        "pe": 11
      },
      {
        "pdMin": 17,
        "pdMax": 17,
        "pe": 12
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 13
      },
      {
        "pdMin": 20,
        "pdMax": 20,
        "pe": 14
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 15
      },
      {
        "pdMin": 23,
        "pdMax": 23,
        "pe": 16
      },
      {
        "pdMin": 24,
        "pdMax": 26,
        "pe": 17
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 18
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 20
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 22
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 24
      },
      {
        "pdMin": 31,
        "pdMax": 31,
        "pe": 26
      },
      {
        "pdMin": 32,
        "pdMax": 32,
        "pe": 28
      }
    ],
    "10_0": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 4
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 5
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 6
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 7
      },
      {
        "pdMin": 11,
        "pdMax": 11,
        "pe": 8
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 9
      },
      {
        "pdMin": 14,
        "pdMax": 14,
        "pe": 10
      },
      {
        "pdMin": 15,
        "pdMax": 16,
        "pe": 11
      },
      {
        "pdMin": 17,
        "pdMax": 17,
        "pe": 12
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 13
      },
      {
        "pdMin": 20,
        "pdMax": 20,
        "pe": 14
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 15
      },
      {
        "pdMin": 23,
        "pdMax": 23,
        "pe": 16
      },
      {
        "pdMin": 24,
        "pdMax": 26,
        "pe": 17
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 18
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 20
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 22
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 24
      },
      {
        "pdMin": 31,
        "pdMax": 31,
        "pe": 26
      },
      {
        "pdMin": 32,
        "pdMax": 32,
        "pe": 28
      }
    ],
    "10_4": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 4
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 5
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 6
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 7
      },
      {
        "pdMin": 11,
        "pdMax": 11,
        "pe": 8
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 9
      },
      {
        "pdMin": 14,
        "pdMax": 14,
        "pe": 10
      },
      {
        "pdMin": 15,
        "pdMax": 16,
        "pe": 11
      },
      {
        "pdMin": 17,
        "pdMax": 17,
        "pe": 12
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 13
      },
      {
        "pdMin": 20,
        "pdMax": 20,
        "pe": 14
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 15
      },
      {
        "pdMin": 23,
        "pdMax": 23,
        "pe": 16
      },
      {
        "pdMin": 24,
        "pdMax": 26,
        "pe": 17
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 18
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 19
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 21
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 23
      },
      {
        "pdMin": 31,
        "pdMax": 31,
        "pe": 25
      },
      {
        "pdMin": 32,
        "pdMax": 32,
        "pe": 27
      }
    ],
    "11_0": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 4
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 5
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 6
      },
      {
        "pdMin": 10,
        "pdMax": 10,
        "pe": 7
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 8
      },
      {
        "pdMin": 13,
        "pdMax": 13,
        "pe": 9
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 10
      },
      {
        "pdMin": 16,
        "pdMax": 16,
        "pe": 11
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 12
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 13
      },
      {
        "pdMin": 21,
        "pdMax": 21,
        "pe": 14
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 15
      },
      {
        "pdMin": 24,
        "pdMax": 24,
        "pe": 16
      },
      {
        "pdMin": 25,
        "pdMax": 27,
        "pe": 17
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 18
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 21
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 23
      },
      {
        "pdMin": 31,
        "pdMax": 31,
        "pe": 25
      },
      {
        "pdMin": 32,
        "pdMax": 32,
        "pe": 27
      }
    ],
    "11_4": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 4
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 5
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 6
      },
      {
        "pdMin": 10,
        "pdMax": 10,
        "pe": 7
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 8
      },
      {
        "pdMin": 13,
        "pdMax": 13,
        "pe": 9
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 10
      },
      {
        "pdMin": 16,
        "pdMax": 16,
        "pe": 11
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 12
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 13
      },
      {
        "pdMin": 21,
        "pdMax": 21,
        "pe": 14
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 15
      },
      {
        "pdMin": 24,
        "pdMax": 24,
        "pe": 16
      },
      {
        "pdMin": 25,
        "pdMax": 27,
        "pe": 17
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 18
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 20
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 22
      },
      {
        "pdMin": 31,
        "pdMax": 31,
        "pe": 24
      },
      {
        "pdMin": 32,
        "pdMax": 32,
        "pe": 27
      }
    ],
    "11_8": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 4
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 5
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 6
      },
      {
        "pdMin": 10,
        "pdMax": 10,
        "pe": 7
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 8
      },
      {
        "pdMin": 13,
        "pdMax": 13,
        "pe": 9
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 10
      },
      {
        "pdMin": 16,
        "pdMax": 16,
        "pe": 11
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 12
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 13
      },
      {
        "pdMin": 21,
        "pdMax": 21,
        "pe": 14
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 15
      },
      {
        "pdMin": 24,
        "pdMax": 24,
        "pe": 16
      },
      {
        "pdMin": 25,
        "pdMax": 27,
        "pe": 17
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 18
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 20
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 22
      },
      {
        "pdMin": 31,
        "pdMax": 31,
        "pe": 24
      },
      {
        "pdMin": 32,
        "pdMax": 32,
        "pe": 27
      }
    ],
    "12_0": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 4
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 5
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 6
      },
      {
        "pdMin": 10,
        "pdMax": 10,
        "pe": 7
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 8
      },
      {
        "pdMin": 13,
        "pdMax": 13,
        "pe": 9
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 10
      },
      {
        "pdMin": 16,
        "pdMax": 16,
        "pe": 11
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 12
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 13
      },
      {
        "pdMin": 21,
        "pdMax": 21,
        "pe": 14
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 15
      },
      {
        "pdMin": 24,
        "pdMax": 24,
        "pe": 16
      },
      {
        "pdMin": 25,
        "pdMax": 27,
        "pe": 17
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 18
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 20
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 22
      },
      {
        "pdMin": 31,
        "pdMax": 31,
        "pe": 24
      },
      {
        "pdMin": 32,
        "pdMax": 32,
        "pe": 27
      }
    ],
    "15_8": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 4
      },
      {
        "pdMin": 7,
        "pdMax": 7,
        "pe": 5
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 6
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 7
      },
      {
        "pdMin": 12,
        "pdMax": 12,
        "pe": 8
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 9
      },
      {
        "pdMin": 15,
        "pdMax": 15,
        "pe": 10
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 11
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 12
      },
      {
        "pdMin": 20,
        "pdMax": 20,
        "pe": 13
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 14
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 15
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 16
      },
      {
        "pdMin": 26,
        "pdMax": 28,
        "pe": 17
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 18
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 20
      },
      {
        "pdMin": 31,
        "pdMax": 31,
        "pe": 22
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 25
      }
    ],
    "16_0": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 4
      },
      {
        "pdMin": 7,
        "pdMax": 7,
        "pe": 5
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 6
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 7
      },
      {
        "pdMin": 12,
        "pdMax": 12,
        "pe": 8
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 9
      },
      {
        "pdMin": 15,
        "pdMax": 15,
        "pe": 10
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 11
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 12
      },
      {
        "pdMin": 20,
        "pdMax": 20,
        "pe": 13
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 14
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 15
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 16
      },
      {
        "pdMin": 26,
        "pdMax": 28,
        "pe": 17
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 18
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 20
      },
      {
        "pdMin": 31,
        "pdMax": 31,
        "pe": 22
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 25
      }
    ]
  },
  "dig": {
    "6_0": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 4
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 5
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 6
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 7
      },
      {
        "pdMin": 11,
        "pdMax": 11,
        "pe": 8
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 9
      },
      {
        "pdMin": 14,
        "pdMax": 14,
        "pe": 10
      },
      {
        "pdMin": 15,
        "pdMax": 16,
        "pe": 11
      },
      {
        "pdMin": 17,
        "pdMax": 17,
        "pe": 12
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 13
      },
      {
        "pdMin": 20,
        "pdMax": 20,
        "pe": 14
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 15
      },
      {
        "pdMin": 23,
        "pdMax": 23,
        "pe": 16
      },
      {
        "pdMin": 24,
        "pdMax": 26,
        "pe": 17
      },
      {
        "pdMin": 27,
        "pdMax": 28,
        "pe": 18
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 19
      },
      {
        "pdMin": 30,
        "pdMax": 31,
        "pe": 20
      },
      {
        "pdMin": 32,
        "pdMax": 32,
        "pe": 21
      },
      {
        "pdMin": 33,
        "pdMax": 33,
        "pe": 22
      },
      {
        "pdMin": 34,
        "pdMax": 34,
        "pe": 23
      },
      {
        "pdMin": 35,
        "pdMax": 35,
        "pe": 24
      },
      {
        "pdMin": 36,
        "pdMax": 36,
        "pe": 25
      },
      {
        "pdMin": 37,
        "pdMax": 37,
        "pe": 26
      },
      {
        "pdMin": 38,
        "pdMax": 38,
        "pe": 27
      },
      {
        "pdMin": 39,
        "pdMax": 54,
        "pe": 28
      }
    ],
    "6_4": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 4
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 5
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 6
      },
      {
        "pdMin": 10,
        "pdMax": 10,
        "pe": 7
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 8
      },
      {
        "pdMin": 13,
        "pdMax": 13,
        "pe": 9
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 10
      },
      {
        "pdMin": 16,
        "pdMax": 16,
        "pe": 11
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 12
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 13
      },
      {
        "pdMin": 21,
        "pdMax": 21,
        "pe": 14
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 15
      },
      {
        "pdMin": 24,
        "pdMax": 24,
        "pe": 16
      },
      {
        "pdMin": 25,
        "pdMax": 27,
        "pe": 17
      },
      {
        "pdMin": 28,
        "pdMax": 29,
        "pe": 18
      },
      {
        "pdMin": 30,
        "pdMax": 31,
        "pe": 19
      },
      {
        "pdMin": 32,
        "pdMax": 32,
        "pe": 20
      },
      {
        "pdMin": 33,
        "pdMax": 33,
        "pe": 21
      },
      {
        "pdMin": 34,
        "pdMax": 34,
        "pe": 22
      },
      {
        "pdMin": 35,
        "pdMax": 35,
        "pe": 23
      },
      {
        "pdMin": 36,
        "pdMax": 36,
        "pe": 24
      },
      {
        "pdMin": 37,
        "pdMax": 37,
        "pe": 25
      },
      {
        "pdMin": 38,
        "pdMax": 38,
        "pe": 26
      },
      {
        "pdMin": 39,
        "pdMax": 39,
        "pe": 27
      },
      {
        "pdMin": 40,
        "pdMax": 54,
        "pe": 28
      }
    ],
    "6_8": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 4
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 5
      },
      {
        "pdMin": 9,
        "pdMax": 9,
        "pe": 6
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 7
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 8
      },
      {
        "pdMin": 14,
        "pdMax": 14,
        "pe": 9
      },
      {
        "pdMin": 15,
        "pdMax": 16,
        "pe": 10
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 11
      },
      {
        "pdMin": 19,
        "pdMax": 19,
        "pe": 12
      },
      {
        "pdMin": 20,
        "pdMax": 21,
        "pe": 13
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 14
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 15
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 16
      },
      {
        "pdMin": 27,
        "pdMax": 29,
        "pe": 17
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 18
      },
      {
        "pdMin": 31,
        "pdMax": 32,
        "pe": 19
      },
      {
        "pdMin": 33,
        "pdMax": 33,
        "pe": 20
      },
      {
        "pdMin": 34,
        "pdMax": 34,
        "pe": 21
      },
      {
        "pdMin": 35,
        "pdMax": 35,
        "pe": 22
      },
      {
        "pdMin": 36,
        "pdMax": 36,
        "pe": 23
      },
      {
        "pdMin": 37,
        "pdMax": 37,
        "pe": 24
      },
      {
        "pdMin": 38,
        "pdMax": 38,
        "pe": 25
      },
      {
        "pdMin": 39,
        "pdMax": 39,
        "pe": 26
      },
      {
        "pdMin": 40,
        "pdMax": 40,
        "pe": 27
      },
      {
        "pdMin": 41,
        "pdMax": 54,
        "pe": 28
      }
    ],
    "7_0": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 4
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 5
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 6
      },
      {
        "pdMin": 11,
        "pdMax": 11,
        "pe": 7
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 8
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 9
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 10
      },
      {
        "pdMin": 18,
        "pdMax": 18,
        "pe": 11
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 12
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 13
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 14
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 15
      },
      {
        "pdMin": 26,
        "pdMax": 27,
        "pe": 16
      },
      {
        "pdMin": 28,
        "pdMax": 30,
        "pe": 17
      },
      {
        "pdMin": 31,
        "pdMax": 32,
        "pe": 18
      },
      {
        "pdMin": 33,
        "pdMax": 33,
        "pe": 19
      },
      {
        "pdMin": 34,
        "pdMax": 34,
        "pe": 20
      },
      {
        "pdMin": 35,
        "pdMax": 35,
        "pe": 21
      },
      {
        "pdMin": 36,
        "pdMax": 36,
        "pe": 22
      },
      {
        "pdMin": 37,
        "pdMax": 37,
        "pe": 23
      },
      {
        "pdMin": 38,
        "pdMax": 38,
        "pe": 24
      },
      {
        "pdMin": 39,
        "pdMax": 39,
        "pe": 25
      },
      {
        "pdMin": 40,
        "pdMax": 40,
        "pe": 26
      },
      {
        "pdMin": 41,
        "pdMax": 41,
        "pe": 27
      },
      {
        "pdMin": 42,
        "pdMax": 54,
        "pe": 28
      }
    ],
    "7_4": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 4
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 5
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 6
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 7
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 8
      },
      {
        "pdMin": 15,
        "pdMax": 15,
        "pe": 9
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 10
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 11
      },
      {
        "pdMin": 20,
        "pdMax": 21,
        "pe": 12
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 13
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 14
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 15
      },
      {
        "pdMin": 27,
        "pdMax": 28,
        "pe": 16
      },
      {
        "pdMin": 29,
        "pdMax": 31,
        "pe": 17
      },
      {
        "pdMin": 32,
        "pdMax": 33,
        "pe": 18
      },
      {
        "pdMin": 34,
        "pdMax": 34,
        "pe": 19
      },
      {
        "pdMin": 35,
        "pdMax": 35,
        "pe": 20
      },
      {
        "pdMin": 36,
        "pdMax": 36,
        "pe": 21
      },
      {
        "pdMin": 37,
        "pdMax": 37,
        "pe": 22
      },
      {
        "pdMin": 38,
        "pdMax": 38,
        "pe": 23
      },
      {
        "pdMin": 39,
        "pdMax": 39,
        "pe": 24
      },
      {
        "pdMin": 40,
        "pdMax": 40,
        "pe": 25
      },
      {
        "pdMin": 41,
        "pdMax": 41,
        "pe": 26
      },
      {
        "pdMin": 42,
        "pdMax": 42,
        "pe": 27
      },
      {
        "pdMin": 43,
        "pdMax": 54,
        "pe": 28
      }
    ],
    "7_8": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 3
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 4
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 5
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 6
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 7
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 8
      },
      {
        "pdMin": 15,
        "pdMax": 16,
        "pe": 9
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 10
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 11
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 12
      },
      {
        "pdMin": 23,
        "pdMax": 23,
        "pe": 13
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 14
      },
      {
        "pdMin": 26,
        "pdMax": 27,
        "pe": 15
      },
      {
        "pdMin": 28,
        "pdMax": 29,
        "pe": 16
      },
      {
        "pdMin": 30,
        "pdMax": 32,
        "pe": 17
      },
      {
        "pdMin": 33,
        "pdMax": 34,
        "pe": 18
      },
      {
        "pdMin": 35,
        "pdMax": 35,
        "pe": 19
      },
      {
        "pdMin": 36,
        "pdMax": 36,
        "pe": 20
      },
      {
        "pdMin": 37,
        "pdMax": 37,
        "pe": 21
      },
      {
        "pdMin": 38,
        "pdMax": 38,
        "pe": 22
      },
      {
        "pdMin": 39,
        "pdMax": 39,
        "pe": 23
      },
      {
        "pdMin": 40,
        "pdMax": 40,
        "pe": 24
      },
      {
        "pdMin": 41,
        "pdMax": 41,
        "pe": 25
      },
      {
        "pdMin": 42,
        "pdMax": 42,
        "pe": 26
      },
      {
        "pdMin": 43,
        "pdMax": 43,
        "pe": 27
      },
      {
        "pdMin": 44,
        "pdMax": 54,
        "pe": 28
      }
    ],
    "8_0": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 3
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 4
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 5
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 6
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 7
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 8
      },
      {
        "pdMin": 15,
        "pdMax": 16,
        "pe": 9
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 10
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 11
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 12
      },
      {
        "pdMin": 23,
        "pdMax": 23,
        "pe": 13
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 14
      },
      {
        "pdMin": 26,
        "pdMax": 27,
        "pe": 15
      },
      {
        "pdMin": 28,
        "pdMax": 29,
        "pe": 16
      },
      {
        "pdMin": 30,
        "pdMax": 32,
        "pe": 17
      },
      {
        "pdMin": 33,
        "pdMax": 34,
        "pe": 18
      },
      {
        "pdMin": 35,
        "pdMax": 35,
        "pe": 19
      },
      {
        "pdMin": 36,
        "pdMax": 36,
        "pe": 20
      },
      {
        "pdMin": 37,
        "pdMax": 37,
        "pe": 21
      },
      {
        "pdMin": 38,
        "pdMax": 38,
        "pe": 22
      },
      {
        "pdMin": 39,
        "pdMax": 39,
        "pe": 23
      },
      {
        "pdMin": 40,
        "pdMax": 40,
        "pe": 24
      },
      {
        "pdMin": 41,
        "pdMax": 41,
        "pe": 25
      },
      {
        "pdMin": 42,
        "pdMax": 42,
        "pe": 26
      },
      {
        "pdMin": 43,
        "pdMax": 43,
        "pe": 27
      },
      {
        "pdMin": 44,
        "pdMax": 54,
        "pe": 28
      }
    ],
    "8_4": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 3
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 4
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 5
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 6
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 7
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 8
      },
      {
        "pdMin": 16,
        "pdMax": 16,
        "pe": 9
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 10
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 11
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 12
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 13
      },
      {
        "pdMin": 25,
        "pdMax": 26,
        "pe": 14
      },
      {
        "pdMin": 27,
        "pdMax": 28,
        "pe": 15
      },
      {
        "pdMin": 29,
        "pdMax": 30,
        "pe": 16
      },
      {
        "pdMin": 31,
        "pdMax": 33,
        "pe": 17
      },
      {
        "pdMin": 34,
        "pdMax": 35,
        "pe": 18
      },
      {
        "pdMin": 36,
        "pdMax": 36,
        "pe": 19
      },
      {
        "pdMin": 37,
        "pdMax": 37,
        "pe": 20
      },
      {
        "pdMin": 38,
        "pdMax": 38,
        "pe": 21
      },
      {
        "pdMin": 39,
        "pdMax": 39,
        "pe": 22
      },
      {
        "pdMin": 40,
        "pdMax": 40,
        "pe": 23
      },
      {
        "pdMin": 41,
        "pdMax": 41,
        "pe": 24
      },
      {
        "pdMin": 42,
        "pdMax": 42,
        "pe": 25
      },
      {
        "pdMin": 43,
        "pdMax": 43,
        "pe": 26
      },
      {
        "pdMin": 44,
        "pdMax": 44,
        "pe": 27
      },
      {
        "pdMin": 45,
        "pdMax": 54,
        "pe": 28
      }
    ],
    "8_8": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 3
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 4
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 5
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 6
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 7
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 8
      },
      {
        "pdMin": 16,
        "pdMax": 16,
        "pe": 9
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 10
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 11
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 12
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 13
      },
      {
        "pdMin": 25,
        "pdMax": 26,
        "pe": 14
      },
      {
        "pdMin": 27,
        "pdMax": 28,
        "pe": 15
      },
      {
        "pdMin": 29,
        "pdMax": 30,
        "pe": 16
      },
      {
        "pdMin": 31,
        "pdMax": 33,
        "pe": 17
      },
      {
        "pdMin": 34,
        "pdMax": 35,
        "pe": 18
      },
      {
        "pdMin": 36,
        "pdMax": 37,
        "pe": 19
      },
      {
        "pdMin": 38,
        "pdMax": 38,
        "pe": 20
      },
      {
        "pdMin": 39,
        "pdMax": 39,
        "pe": 21
      },
      {
        "pdMin": 40,
        "pdMax": 40,
        "pe": 22
      },
      {
        "pdMin": 41,
        "pdMax": 41,
        "pe": 23
      },
      {
        "pdMin": 42,
        "pdMax": 42,
        "pe": 24
      },
      {
        "pdMin": 43,
        "pdMax": 43,
        "pe": 25
      },
      {
        "pdMin": 44,
        "pdMax": 44,
        "pe": 26
      },
      {
        "pdMin": 45,
        "pdMax": 45,
        "pe": 27
      },
      {
        "pdMin": 46,
        "pdMax": 54,
        "pe": 28
      }
    ],
    "9_0": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 3
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 4
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 5
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 6
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 7
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 8
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 9
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 10
      },
      {
        "pdMin": 20,
        "pdMax": 21,
        "pe": 11
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 12
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 13
      },
      {
        "pdMin": 26,
        "pdMax": 27,
        "pe": 14
      },
      {
        "pdMin": 28,
        "pdMax": 29,
        "pe": 15
      },
      {
        "pdMin": 30,
        "pdMax": 31,
        "pe": 16
      },
      {
        "pdMin": 32,
        "pdMax": 34,
        "pe": 17
      },
      {
        "pdMin": 35,
        "pdMax": 36,
        "pe": 18
      },
      {
        "pdMin": 37,
        "pdMax": 37,
        "pe": 19
      },
      {
        "pdMin": 38,
        "pdMax": 38,
        "pe": 20
      },
      {
        "pdMin": 39,
        "pdMax": 39,
        "pe": 21
      },
      {
        "pdMin": 40,
        "pdMax": 40,
        "pe": 22
      },
      {
        "pdMin": 41,
        "pdMax": 41,
        "pe": 23
      },
      {
        "pdMin": 42,
        "pdMax": 42,
        "pe": 24
      },
      {
        "pdMin": 43,
        "pdMax": 43,
        "pe": 25
      },
      {
        "pdMin": 44,
        "pdMax": 44,
        "pe": 26
      },
      {
        "pdMin": 45,
        "pdMax": 45,
        "pe": 27
      },
      {
        "pdMin": 46,
        "pdMax": 54,
        "pe": 28
      }
    ],
    "9_4": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 3
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 4
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 5
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 6
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 7
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 8
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 9
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 10
      },
      {
        "pdMin": 20,
        "pdMax": 21,
        "pe": 11
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 12
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 13
      },
      {
        "pdMin": 26,
        "pdMax": 27,
        "pe": 14
      },
      {
        "pdMin": 28,
        "pdMax": 29,
        "pe": 15
      },
      {
        "pdMin": 30,
        "pdMax": 31,
        "pe": 16
      },
      {
        "pdMin": 32,
        "pdMax": 34,
        "pe": 17
      },
      {
        "pdMin": 35,
        "pdMax": 36,
        "pe": 18
      },
      {
        "pdMin": 37,
        "pdMax": 38,
        "pe": 19
      },
      {
        "pdMin": 39,
        "pdMax": 39,
        "pe": 20
      },
      {
        "pdMin": 40,
        "pdMax": 40,
        "pe": 21
      },
      {
        "pdMin": 41,
        "pdMax": 41,
        "pe": 22
      },
      {
        "pdMin": 42,
        "pdMax": 42,
        "pe": 23
      },
      {
        "pdMin": 43,
        "pdMax": 43,
        "pe": 24
      },
      {
        "pdMin": 44,
        "pdMax": 44,
        "pe": 25
      },
      {
        "pdMin": 45,
        "pdMax": 45,
        "pe": 26
      },
      {
        "pdMin": 46,
        "pdMax": 46,
        "pe": 27
      },
      {
        "pdMin": 47,
        "pdMax": 54,
        "pe": 28
      }
    ],
    "9_8": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 3
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 4
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 5
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 6
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 7
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 8
      },
      {
        "pdMin": 16,
        "pdMax": 18,
        "pe": 9
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 10
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 11
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 12
      },
      {
        "pdMin": 25,
        "pdMax": 26,
        "pe": 13
      },
      {
        "pdMin": 27,
        "pdMax": 28,
        "pe": 14
      },
      {
        "pdMin": 29,
        "pdMax": 30,
        "pe": 15
      },
      {
        "pdMin": 31,
        "pdMax": 32,
        "pe": 16
      },
      {
        "pdMin": 33,
        "pdMax": 35,
        "pe": 17
      },
      {
        "pdMin": 36,
        "pdMax": 37,
        "pe": 18
      },
      {
        "pdMin": 38,
        "pdMax": 38,
        "pe": 19
      },
      {
        "pdMin": 39,
        "pdMax": 40,
        "pe": 20
      },
      {
        "pdMin": 41,
        "pdMax": 41,
        "pe": 21
      },
      {
        "pdMin": 42,
        "pdMax": 42,
        "pe": 22
      },
      {
        "pdMin": 43,
        "pdMax": 43,
        "pe": 23
      },
      {
        "pdMin": 44,
        "pdMax": 44,
        "pe": 24
      },
      {
        "pdMin": 45,
        "pdMax": 45,
        "pe": 25
      },
      {
        "pdMin": 46,
        "pdMax": 46,
        "pe": 26
      },
      {
        "pdMin": 47,
        "pdMax": 47,
        "pe": 27
      },
      {
        "pdMin": 48,
        "pdMax": 54,
        "pe": 28
      }
    ],
    "10_0": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 3
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 4
      },
      {
        "pdMin": 8,
        "pdMax": 10,
        "pe": 5
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 6
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 7
      },
      {
        "pdMin": 15,
        "pdMax": 16,
        "pe": 8
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 9
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 10
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 11
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 12
      },
      {
        "pdMin": 25,
        "pdMax": 27,
        "pe": 13
      },
      {
        "pdMin": 28,
        "pdMax": 29,
        "pe": 14
      },
      {
        "pdMin": 30,
        "pdMax": 31,
        "pe": 15
      },
      {
        "pdMin": 32,
        "pdMax": 33,
        "pe": 16
      },
      {
        "pdMin": 34,
        "pdMax": 36,
        "pe": 17
      },
      {
        "pdMin": 37,
        "pdMax": 37,
        "pe": 18
      },
      {
        "pdMin": 38,
        "pdMax": 39,
        "pe": 19
      },
      {
        "pdMin": 40,
        "pdMax": 41,
        "pe": 20
      },
      {
        "pdMin": 42,
        "pdMax": 42,
        "pe": 21
      },
      {
        "pdMin": 43,
        "pdMax": 43,
        "pe": 22
      },
      {
        "pdMin": 44,
        "pdMax": 44,
        "pe": 23
      },
      {
        "pdMin": 45,
        "pdMax": 45,
        "pe": 24
      },
      {
        "pdMin": 46,
        "pdMax": 46,
        "pe": 25
      },
      {
        "pdMin": 47,
        "pdMax": 47,
        "pe": 26
      },
      {
        "pdMin": 48,
        "pdMax": 48,
        "pe": 27
      },
      {
        "pdMin": 49,
        "pdMax": 54,
        "pe": 28
      }
    ],
    "10_4": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 3
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 4
      },
      {
        "pdMin": 8,
        "pdMax": 10,
        "pe": 5
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 6
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 7
      },
      {
        "pdMin": 15,
        "pdMax": 16,
        "pe": 8
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 9
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 10
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 11
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 12
      },
      {
        "pdMin": 25,
        "pdMax": 27,
        "pe": 13
      },
      {
        "pdMin": 28,
        "pdMax": 29,
        "pe": 14
      },
      {
        "pdMin": 30,
        "pdMax": 31,
        "pe": 15
      },
      {
        "pdMin": 32,
        "pdMax": 33,
        "pe": 16
      },
      {
        "pdMin": 34,
        "pdMax": 36,
        "pe": 17
      },
      {
        "pdMin": 37,
        "pdMax": 38,
        "pe": 18
      },
      {
        "pdMin": 39,
        "pdMax": 40,
        "pe": 19
      },
      {
        "pdMin": 41,
        "pdMax": 41,
        "pe": 20
      },
      {
        "pdMin": 42,
        "pdMax": 42,
        "pe": 21
      },
      {
        "pdMin": 43,
        "pdMax": 43,
        "pe": 22
      },
      {
        "pdMin": 44,
        "pdMax": 44,
        "pe": 23
      },
      {
        "pdMin": 45,
        "pdMax": 45,
        "pe": 24
      },
      {
        "pdMin": 46,
        "pdMax": 46,
        "pe": 25
      },
      {
        "pdMin": 47,
        "pdMax": 47,
        "pe": 26
      },
      {
        "pdMin": 48,
        "pdMax": 48,
        "pe": 27
      },
      {
        "pdMin": 49,
        "pdMax": 54,
        "pe": 28
      }
    ],
    "10_8": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 6,
        "pe": 3
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 4
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 5
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 6
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 7
      },
      {
        "pdMin": 15,
        "pdMax": 16,
        "pe": 8
      },
      {
        "pdMin": 17,
        "pdMax": 19,
        "pe": 9
      },
      {
        "pdMin": 20,
        "pdMax": 21,
        "pe": 10
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 11
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 12
      },
      {
        "pdMin": 26,
        "pdMax": 27,
        "pe": 13
      },
      {
        "pdMin": 28,
        "pdMax": 29,
        "pe": 14
      },
      {
        "pdMin": 30,
        "pdMax": 32,
        "pe": 15
      },
      {
        "pdMin": 33,
        "pdMax": 34,
        "pe": 16
      },
      {
        "pdMin": 35,
        "pdMax": 37,
        "pe": 17
      },
      {
        "pdMin": 38,
        "pdMax": 39,
        "pe": 18
      },
      {
        "pdMin": 40,
        "pdMax": 40,
        "pe": 19
      },
      {
        "pdMin": 41,
        "pdMax": 42,
        "pe": 20
      },
      {
        "pdMin": 43,
        "pdMax": 43,
        "pe": 21
      },
      {
        "pdMin": 44,
        "pdMax": 44,
        "pe": 22
      },
      {
        "pdMin": 45,
        "pdMax": 45,
        "pe": 23
      },
      {
        "pdMin": 46,
        "pdMax": 46,
        "pe": 24
      },
      {
        "pdMin": 47,
        "pdMax": 47,
        "pe": 25
      },
      {
        "pdMin": 48,
        "pdMax": 48,
        "pe": 26
      },
      {
        "pdMin": 49,
        "pdMax": 49,
        "pe": 27
      },
      {
        "pdMin": 50,
        "pdMax": 54,
        "pe": 28
      }
    ],
    "11_0": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 6,
        "pe": 3
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 4
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 5
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 6
      },
      {
        "pdMin": 13,
        "pdMax": 15,
        "pe": 7
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 8
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 9
      },
      {
        "pdMin": 20,
        "pdMax": 21,
        "pe": 10
      },
      {
        "pdMin": 22,
        "pdMax": 24,
        "pe": 11
      },
      {
        "pdMin": 25,
        "pdMax": 26,
        "pe": 12
      },
      {
        "pdMin": 27,
        "pdMax": 28,
        "pe": 13
      },
      {
        "pdMin": 29,
        "pdMax": 30,
        "pe": 14
      },
      {
        "pdMin": 31,
        "pdMax": 33,
        "pe": 15
      },
      {
        "pdMin": 34,
        "pdMax": 35,
        "pe": 16
      },
      {
        "pdMin": 36,
        "pdMax": 38,
        "pe": 17
      },
      {
        "pdMin": 39,
        "pdMax": 39,
        "pe": 18
      },
      {
        "pdMin": 40,
        "pdMax": 41,
        "pe": 19
      },
      {
        "pdMin": 42,
        "pdMax": 42,
        "pe": 20
      },
      {
        "pdMin": 43,
        "pdMax": 43,
        "pe": 21
      },
      {
        "pdMin": 44,
        "pdMax": 44,
        "pe": 22
      },
      {
        "pdMin": 45,
        "pdMax": 45,
        "pe": 23
      },
      {
        "pdMin": 46,
        "pdMax": 46,
        "pe": 24
      },
      {
        "pdMin": 47,
        "pdMax": 47,
        "pe": 25
      },
      {
        "pdMin": 48,
        "pdMax": 48,
        "pe": 26
      },
      {
        "pdMin": 49,
        "pdMax": 49,
        "pe": 27
      },
      {
        "pdMin": 50,
        "pdMax": 54,
        "pe": 28
      }
    ],
    "11_4": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 3
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 4
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 5
      },
      {
        "pdMin": 11,
        "pdMax": 13,
        "pe": 6
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 7
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 8
      },
      {
        "pdMin": 18,
        "pdMax": 20,
        "pe": 9
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 10
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 11
      },
      {
        "pdMin": 25,
        "pdMax": 27,
        "pe": 12
      },
      {
        "pdMin": 28,
        "pdMax": 29,
        "pe": 13
      },
      {
        "pdMin": 30,
        "pdMax": 31,
        "pe": 14
      },
      {
        "pdMin": 32,
        "pdMax": 33,
        "pe": 15
      },
      {
        "pdMin": 34,
        "pdMax": 36,
        "pe": 16
      },
      {
        "pdMin": 37,
        "pdMax": 39,
        "pe": 17
      },
      {
        "pdMin": 40,
        "pdMax": 40,
        "pe": 18
      },
      {
        "pdMin": 41,
        "pdMax": 41,
        "pe": 19
      },
      {
        "pdMin": 42,
        "pdMax": 42,
        "pe": 20
      },
      {
        "pdMin": 43,
        "pdMax": 43,
        "pe": 21
      },
      {
        "pdMin": 44,
        "pdMax": 44,
        "pe": 22
      },
      {
        "pdMin": 45,
        "pdMax": 45,
        "pe": 23
      },
      {
        "pdMin": 46,
        "pdMax": 46,
        "pe": 24
      },
      {
        "pdMin": 47,
        "pdMax": 47,
        "pe": 25
      },
      {
        "pdMin": 48,
        "pdMax": 48,
        "pe": 26
      },
      {
        "pdMin": 49,
        "pdMax": 49,
        "pe": 27
      },
      {
        "pdMin": 50,
        "pdMax": 54,
        "pe": 28
      }
    ],
    "11_8": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 3
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 4
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 5
      },
      {
        "pdMin": 11,
        "pdMax": 13,
        "pe": 6
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 7
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 8
      },
      {
        "pdMin": 18,
        "pdMax": 20,
        "pe": 9
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 10
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 11
      },
      {
        "pdMin": 25,
        "pdMax": 27,
        "pe": 12
      },
      {
        "pdMin": 28,
        "pdMax": 29,
        "pe": 13
      },
      {
        "pdMin": 30,
        "pdMax": 31,
        "pe": 14
      },
      {
        "pdMin": 32,
        "pdMax": 33,
        "pe": 15
      },
      {
        "pdMin": 34,
        "pdMax": 36,
        "pe": 16
      },
      {
        "pdMin": 37,
        "pdMax": 39,
        "pe": 17
      },
      {
        "pdMin": 40,
        "pdMax": 40,
        "pe": 18
      },
      {
        "pdMin": 41,
        "pdMax": 41,
        "pe": 19
      },
      {
        "pdMin": 42,
        "pdMax": 43,
        "pe": 20
      },
      {
        "pdMin": 44,
        "pdMax": 44,
        "pe": 21
      },
      {
        "pdMin": 45,
        "pdMax": 45,
        "pe": 22
      },
      {
        "pdMin": 46,
        "pdMax": 46,
        "pe": 23
      },
      {
        "pdMin": 47,
        "pdMax": 47,
        "pe": 24
      },
      {
        "pdMin": 48,
        "pdMax": 48,
        "pe": 25
      },
      {
        "pdMin": 49,
        "pdMax": 49,
        "pe": 26
      },
      {
        "pdMin": 50,
        "pdMax": 50,
        "pe": 27
      },
      {
        "pdMin": 51,
        "pdMax": 54,
        "pe": 28
      }
    ],
    "12_0": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 3
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 4
      },
      {
        "pdMin": 9,
        "pdMax": 11,
        "pe": 5
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 6
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 7
      },
      {
        "pdMin": 16,
        "pdMax": 18,
        "pe": 8
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 9
      },
      {
        "pdMin": 21,
        "pdMax": 23,
        "pe": 10
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 11
      },
      {
        "pdMin": 26,
        "pdMax": 27,
        "pe": 12
      },
      {
        "pdMin": 28,
        "pdMax": 30,
        "pe": 13
      },
      {
        "pdMin": 31,
        "pdMax": 32,
        "pe": 14
      },
      {
        "pdMin": 33,
        "pdMax": 34,
        "pe": 15
      },
      {
        "pdMin": 35,
        "pdMax": 37,
        "pe": 16
      },
      {
        "pdMin": 38,
        "pdMax": 40,
        "pe": 17
      },
      {
        "pdMin": 41,
        "pdMax": 41,
        "pe": 18
      },
      {
        "pdMin": 42,
        "pdMax": 42,
        "pe": 19
      },
      {
        "pdMin": 43,
        "pdMax": 43,
        "pe": 20
      },
      {
        "pdMin": 44,
        "pdMax": 44,
        "pe": 21
      },
      {
        "pdMin": 45,
        "pdMax": 45,
        "pe": 22
      },
      {
        "pdMin": 46,
        "pdMax": 46,
        "pe": 23
      },
      {
        "pdMin": 47,
        "pdMax": 47,
        "pe": 24
      },
      {
        "pdMin": 48,
        "pdMax": 48,
        "pe": 25
      },
      {
        "pdMin": 49,
        "pdMax": 49,
        "pe": 26
      },
      {
        "pdMin": 50,
        "pdMax": 50,
        "pe": 27
      },
      {
        "pdMin": 51,
        "pdMax": 54,
        "pe": 28
      }
    ],
    "12_4": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 3
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 4
      },
      {
        "pdMin": 9,
        "pdMax": 11,
        "pe": 5
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 6
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 7
      },
      {
        "pdMin": 16,
        "pdMax": 18,
        "pe": 8
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 9
      },
      {
        "pdMin": 21,
        "pdMax": 23,
        "pe": 10
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 11
      },
      {
        "pdMin": 26,
        "pdMax": 27,
        "pe": 12
      },
      {
        "pdMin": 28,
        "pdMax": 30,
        "pe": 13
      },
      {
        "pdMin": 31,
        "pdMax": 32,
        "pe": 14
      },
      {
        "pdMin": 33,
        "pdMax": 34,
        "pe": 15
      },
      {
        "pdMin": 35,
        "pdMax": 37,
        "pe": 16
      },
      {
        "pdMin": 38,
        "pdMax": 40,
        "pe": 17
      },
      {
        "pdMin": 41,
        "pdMax": 41,
        "pe": 18
      },
      {
        "pdMin": 42,
        "pdMax": 42,
        "pe": 19
      },
      {
        "pdMin": 43,
        "pdMax": 44,
        "pe": 20
      },
      {
        "pdMin": 45,
        "pdMax": 45,
        "pe": 21
      },
      {
        "pdMin": 46,
        "pdMax": 46,
        "pe": 22
      },
      {
        "pdMin": 47,
        "pdMax": 47,
        "pe": 23
      },
      {
        "pdMin": 48,
        "pdMax": 48,
        "pe": 24
      },
      {
        "pdMin": 49,
        "pdMax": 49,
        "pe": 25
      },
      {
        "pdMin": 50,
        "pdMax": 50,
        "pe": 26
      },
      {
        "pdMin": 51,
        "pdMax": 51,
        "pe": 27
      },
      {
        "pdMin": 52,
        "pdMax": 54,
        "pe": 28
      }
    ],
    "12_8": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 3
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 4
      },
      {
        "pdMin": 9,
        "pdMax": 11,
        "pe": 5
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 6
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 7
      },
      {
        "pdMin": 16,
        "pdMax": 18,
        "pe": 8
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 9
      },
      {
        "pdMin": 21,
        "pdMax": 23,
        "pe": 10
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 11
      },
      {
        "pdMin": 26,
        "pdMax": 27,
        "pe": 12
      },
      {
        "pdMin": 28,
        "pdMax": 30,
        "pe": 13
      },
      {
        "pdMin": 31,
        "pdMax": 32,
        "pe": 14
      },
      {
        "pdMin": 33,
        "pdMax": 34,
        "pe": 15
      },
      {
        "pdMin": 35,
        "pdMax": 37,
        "pe": 16
      },
      {
        "pdMin": 38,
        "pdMax": 40,
        "pe": 17
      },
      {
        "pdMin": 41,
        "pdMax": 41,
        "pe": 18
      },
      {
        "pdMin": 42,
        "pdMax": 43,
        "pe": 19
      },
      {
        "pdMin": 44,
        "pdMax": 44,
        "pe": 20
      },
      {
        "pdMin": 45,
        "pdMax": 45,
        "pe": 21
      },
      {
        "pdMin": 46,
        "pdMax": 46,
        "pe": 22
      },
      {
        "pdMin": 47,
        "pdMax": 47,
        "pe": 23
      },
      {
        "pdMin": 48,
        "pdMax": 48,
        "pe": 24
      },
      {
        "pdMin": 49,
        "pdMax": 49,
        "pe": 25
      },
      {
        "pdMin": 50,
        "pdMax": 50,
        "pe": 26
      },
      {
        "pdMin": 51,
        "pdMax": 51,
        "pe": 27
      },
      {
        "pdMin": 52,
        "pdMax": 54,
        "pe": 28
      }
    ],
    "13_0": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 3
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 4
      },
      {
        "pdMin": 9,
        "pdMax": 11,
        "pe": 5
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 6
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 7
      },
      {
        "pdMin": 16,
        "pdMax": 18,
        "pe": 8
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 9
      },
      {
        "pdMin": 21,
        "pdMax": 23,
        "pe": 10
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 11
      },
      {
        "pdMin": 26,
        "pdMax": 27,
        "pe": 12
      },
      {
        "pdMin": 28,
        "pdMax": 30,
        "pe": 13
      },
      {
        "pdMin": 31,
        "pdMax": 32,
        "pe": 14
      },
      {
        "pdMin": 33,
        "pdMax": 34,
        "pe": 15
      },
      {
        "pdMin": 35,
        "pdMax": 37,
        "pe": 16
      },
      {
        "pdMin": 38,
        "pdMax": 40,
        "pe": 17
      },
      {
        "pdMin": 41,
        "pdMax": 41,
        "pe": 18
      },
      {
        "pdMin": 42,
        "pdMax": 43,
        "pe": 19
      },
      {
        "pdMin": 44,
        "pdMax": 44,
        "pe": 20
      },
      {
        "pdMin": 45,
        "pdMax": 46,
        "pe": 21
      },
      {
        "pdMin": 47,
        "pdMax": 47,
        "pe": 22
      },
      {
        "pdMin": 48,
        "pdMax": 48,
        "pe": 23
      },
      {
        "pdMin": 49,
        "pdMax": 49,
        "pe": 24
      },
      {
        "pdMin": 50,
        "pdMax": 50,
        "pe": 25
      },
      {
        "pdMin": 51,
        "pdMax": 51,
        "pe": 26
      },
      {
        "pdMin": 52,
        "pdMax": 52,
        "pe": 27
      },
      {
        "pdMin": 53,
        "pdMax": 54,
        "pe": 28
      }
    ],
    "13_4": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 3
      },
      {
        "pdMin": 7,
        "pdMax": 9,
        "pe": 4
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 5
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 6
      },
      {
        "pdMin": 14,
        "pdMax": 16,
        "pe": 7
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 8
      },
      {
        "pdMin": 19,
        "pdMax": 21,
        "pe": 9
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 10
      },
      {
        "pdMin": 24,
        "pdMax": 26,
        "pe": 11
      },
      {
        "pdMin": 27,
        "pdMax": 28,
        "pe": 12
      },
      {
        "pdMin": 29,
        "pdMax": 30,
        "pe": 13
      },
      {
        "pdMin": 31,
        "pdMax": 33,
        "pe": 14
      },
      {
        "pdMin": 34,
        "pdMax": 35,
        "pe": 15
      },
      {
        "pdMin": 36,
        "pdMax": 38,
        "pe": 16
      },
      {
        "pdMin": 39,
        "pdMax": 41,
        "pe": 17
      },
      {
        "pdMin": 42,
        "pdMax": 42,
        "pe": 18
      },
      {
        "pdMin": 43,
        "pdMax": 43,
        "pe": 19
      },
      {
        "pdMin": 44,
        "pdMax": 45,
        "pe": 20
      },
      {
        "pdMin": 46,
        "pdMax": 46,
        "pe": 21
      },
      {
        "pdMin": 47,
        "pdMax": 47,
        "pe": 22
      },
      {
        "pdMin": 48,
        "pdMax": 48,
        "pe": 23
      },
      {
        "pdMin": 49,
        "pdMax": 49,
        "pe": 24
      },
      {
        "pdMin": 50,
        "pdMax": 50,
        "pe": 25
      },
      {
        "pdMin": 51,
        "pdMax": 51,
        "pe": 26
      },
      {
        "pdMin": 52,
        "pdMax": 52,
        "pe": 27
      },
      {
        "pdMin": 53,
        "pdMax": 54,
        "pe": 28
      }
    ],
    "13_8": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 3
      },
      {
        "pdMin": 7,
        "pdMax": 9,
        "pe": 4
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 5
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 6
      },
      {
        "pdMin": 14,
        "pdMax": 16,
        "pe": 7
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 8
      },
      {
        "pdMin": 19,
        "pdMax": 21,
        "pe": 9
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 10
      },
      {
        "pdMin": 24,
        "pdMax": 26,
        "pe": 11
      },
      {
        "pdMin": 27,
        "pdMax": 28,
        "pe": 12
      },
      {
        "pdMin": 29,
        "pdMax": 30,
        "pe": 13
      },
      {
        "pdMin": 31,
        "pdMax": 33,
        "pe": 14
      },
      {
        "pdMin": 34,
        "pdMax": 35,
        "pe": 15
      },
      {
        "pdMin": 36,
        "pdMax": 38,
        "pe": 16
      },
      {
        "pdMin": 39,
        "pdMax": 41,
        "pe": 17
      },
      {
        "pdMin": 42,
        "pdMax": 42,
        "pe": 18
      },
      {
        "pdMin": 43,
        "pdMax": 44,
        "pe": 19
      },
      {
        "pdMin": 45,
        "pdMax": 45,
        "pe": 20
      },
      {
        "pdMin": 46,
        "pdMax": 46,
        "pe": 21
      },
      {
        "pdMin": 47,
        "pdMax": 47,
        "pe": 22
      },
      {
        "pdMin": 48,
        "pdMax": 48,
        "pe": 23
      },
      {
        "pdMin": 49,
        "pdMax": 49,
        "pe": 24
      },
      {
        "pdMin": 50,
        "pdMax": 50,
        "pe": 25
      },
      {
        "pdMin": 51,
        "pdMax": 51,
        "pe": 26
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 27
      },
      {
        "pdMin": 53,
        "pdMax": 54,
        "pe": 28
      }
    ],
    "14_0": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 3
      },
      {
        "pdMin": 7,
        "pdMax": 9,
        "pe": 4
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 5
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 6
      },
      {
        "pdMin": 14,
        "pdMax": 16,
        "pe": 7
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 8
      },
      {
        "pdMin": 19,
        "pdMax": 21,
        "pe": 9
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 10
      },
      {
        "pdMin": 24,
        "pdMax": 26,
        "pe": 11
      },
      {
        "pdMin": 27,
        "pdMax": 28,
        "pe": 12
      },
      {
        "pdMin": 29,
        "pdMax": 30,
        "pe": 13
      },
      {
        "pdMin": 31,
        "pdMax": 33,
        "pe": 14
      },
      {
        "pdMin": 34,
        "pdMax": 35,
        "pe": 15
      },
      {
        "pdMin": 36,
        "pdMax": 38,
        "pe": 16
      },
      {
        "pdMin": 39,
        "pdMax": 41,
        "pe": 17
      },
      {
        "pdMin": 42,
        "pdMax": 43,
        "pe": 18
      },
      {
        "pdMin": 44,
        "pdMax": 44,
        "pe": 19
      },
      {
        "pdMin": 45,
        "pdMax": 46,
        "pe": 20
      },
      {
        "pdMin": 47,
        "pdMax": 47,
        "pe": 21
      },
      {
        "pdMin": 48,
        "pdMax": 48,
        "pe": 22
      },
      {
        "pdMin": 49,
        "pdMax": 49,
        "pe": 23
      },
      {
        "pdMin": 50,
        "pdMax": 50,
        "pe": 24
      },
      {
        "pdMin": 51,
        "pdMax": 51,
        "pe": 25
      },
      {
        "pdMin": 52,
        "pdMax": 52,
        "pe": 26
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 27
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 28
      }
    ],
    "14_4": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 3
      },
      {
        "pdMin": 7,
        "pdMax": 9,
        "pe": 4
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 5
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 6
      },
      {
        "pdMin": 14,
        "pdMax": 16,
        "pe": 7
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 8
      },
      {
        "pdMin": 19,
        "pdMax": 21,
        "pe": 9
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 10
      },
      {
        "pdMin": 24,
        "pdMax": 26,
        "pe": 11
      },
      {
        "pdMin": 27,
        "pdMax": 28,
        "pe": 12
      },
      {
        "pdMin": 29,
        "pdMax": 30,
        "pe": 13
      },
      {
        "pdMin": 31,
        "pdMax": 33,
        "pe": 14
      },
      {
        "pdMin": 34,
        "pdMax": 35,
        "pe": 15
      },
      {
        "pdMin": 36,
        "pdMax": 38,
        "pe": 16
      },
      {
        "pdMin": 39,
        "pdMax": 41,
        "pe": 17
      },
      {
        "pdMin": 42,
        "pdMax": 43,
        "pe": 18
      },
      {
        "pdMin": 44,
        "pdMax": 45,
        "pe": 19
      },
      {
        "pdMin": 46,
        "pdMax": 46,
        "pe": 20
      },
      {
        "pdMin": 47,
        "pdMax": 47,
        "pe": 21
      },
      {
        "pdMin": 48,
        "pdMax": 48,
        "pe": 22
      },
      {
        "pdMin": 49,
        "pdMax": 49,
        "pe": 23
      },
      {
        "pdMin": 50,
        "pdMax": 50,
        "pe": 24
      },
      {
        "pdMin": 51,
        "pdMax": 51,
        "pe": 25
      },
      {
        "pdMin": 52,
        "pdMax": 52,
        "pe": 26
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 27
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 28
      }
    ],
    "14_8": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 3
      },
      {
        "pdMin": 7,
        "pdMax": 9,
        "pe": 4
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 5
      },
      {
        "pdMin": 12,
        "pdMax": 14,
        "pe": 6
      },
      {
        "pdMin": 15,
        "pdMax": 16,
        "pe": 7
      },
      {
        "pdMin": 17,
        "pdMax": 19,
        "pe": 8
      },
      {
        "pdMin": 20,
        "pdMax": 21,
        "pe": 9
      },
      {
        "pdMin": 22,
        "pdMax": 24,
        "pe": 10
      },
      {
        "pdMin": 25,
        "pdMax": 26,
        "pe": 11
      },
      {
        "pdMin": 27,
        "pdMax": 29,
        "pe": 12
      },
      {
        "pdMin": 30,
        "pdMax": 31,
        "pe": 13
      },
      {
        "pdMin": 32,
        "pdMax": 34,
        "pe": 14
      },
      {
        "pdMin": 35,
        "pdMax": 36,
        "pe": 15
      },
      {
        "pdMin": 37,
        "pdMax": 39,
        "pe": 16
      },
      {
        "pdMin": 40,
        "pdMax": 42,
        "pe": 17
      },
      {
        "pdMin": 43,
        "pdMax": 43,
        "pe": 18
      },
      {
        "pdMin": 44,
        "pdMax": 45,
        "pe": 19
      },
      {
        "pdMin": 46,
        "pdMax": 46,
        "pe": 20
      },
      {
        "pdMin": 47,
        "pdMax": 48,
        "pe": 21
      },
      {
        "pdMin": 49,
        "pdMax": 49,
        "pe": 22
      },
      {
        "pdMin": 50,
        "pdMax": 50,
        "pe": 23
      },
      {
        "pdMin": 51,
        "pdMax": 51,
        "pe": 24
      },
      {
        "pdMin": 52,
        "pdMax": 52,
        "pe": 25
      },
      {
        "pdMin": 53,
        "pdMax": 53,
        "pe": 26
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 28
      }
    ],
    "15_0": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 3
      },
      {
        "pdMin": 7,
        "pdMax": 9,
        "pe": 4
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 5
      },
      {
        "pdMin": 12,
        "pdMax": 14,
        "pe": 6
      },
      {
        "pdMin": 15,
        "pdMax": 16,
        "pe": 7
      },
      {
        "pdMin": 17,
        "pdMax": 19,
        "pe": 8
      },
      {
        "pdMin": 20,
        "pdMax": 21,
        "pe": 9
      },
      {
        "pdMin": 22,
        "pdMax": 24,
        "pe": 10
      },
      {
        "pdMin": 25,
        "pdMax": 26,
        "pe": 11
      },
      {
        "pdMin": 27,
        "pdMax": 29,
        "pe": 12
      },
      {
        "pdMin": 30,
        "pdMax": 31,
        "pe": 13
      },
      {
        "pdMin": 32,
        "pdMax": 34,
        "pe": 14
      },
      {
        "pdMin": 35,
        "pdMax": 36,
        "pe": 15
      },
      {
        "pdMin": 37,
        "pdMax": 39,
        "pe": 16
      },
      {
        "pdMin": 40,
        "pdMax": 42,
        "pe": 17
      },
      {
        "pdMin": 43,
        "pdMax": 44,
        "pe": 18
      },
      {
        "pdMin": 45,
        "pdMax": 45,
        "pe": 19
      },
      {
        "pdMin": 46,
        "pdMax": 47,
        "pe": 20
      },
      {
        "pdMin": 48,
        "pdMax": 48,
        "pe": 21
      },
      {
        "pdMin": 49,
        "pdMax": 49,
        "pe": 22
      },
      {
        "pdMin": 50,
        "pdMax": 50,
        "pe": 23
      },
      {
        "pdMin": 51,
        "pdMax": 51,
        "pe": 24
      },
      {
        "pdMin": 52,
        "pdMax": 52,
        "pe": 25
      },
      {
        "pdMin": 53,
        "pdMax": 53,
        "pe": 26
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 28
      }
    ],
    "15_4": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 7,
        "pe": 3
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 4
      },
      {
        "pdMin": 10,
        "pdMax": 12,
        "pe": 5
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 6
      },
      {
        "pdMin": 15,
        "pdMax": 17,
        "pe": 7
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 8
      },
      {
        "pdMin": 20,
        "pdMax": 22,
        "pe": 9
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 10
      },
      {
        "pdMin": 25,
        "pdMax": 27,
        "pe": 11
      },
      {
        "pdMin": 28,
        "pdMax": 29,
        "pe": 12
      },
      {
        "pdMin": 30,
        "pdMax": 32,
        "pe": 13
      },
      {
        "pdMin": 33,
        "pdMax": 34,
        "pe": 14
      },
      {
        "pdMin": 35,
        "pdMax": 37,
        "pe": 15
      },
      {
        "pdMin": 38,
        "pdMax": 39,
        "pe": 16
      },
      {
        "pdMin": 40,
        "pdMax": 43,
        "pe": 17
      },
      {
        "pdMin": 44,
        "pdMax": 44,
        "pe": 18
      },
      {
        "pdMin": 45,
        "pdMax": 46,
        "pe": 19
      },
      {
        "pdMin": 47,
        "pdMax": 47,
        "pe": 20
      },
      {
        "pdMin": 48,
        "pdMax": 48,
        "pe": 21
      },
      {
        "pdMin": 49,
        "pdMax": 49,
        "pe": 22
      },
      {
        "pdMin": 50,
        "pdMax": 50,
        "pe": 23
      },
      {
        "pdMin": 51,
        "pdMax": 51,
        "pe": 24
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 25
      },
      {
        "pdMin": 53,
        "pdMax": 53,
        "pe": 26
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 28
      }
    ],
    "15_8": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 7,
        "pe": 3
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 4
      },
      {
        "pdMin": 10,
        "pdMax": 12,
        "pe": 5
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 6
      },
      {
        "pdMin": 15,
        "pdMax": 17,
        "pe": 7
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 8
      },
      {
        "pdMin": 20,
        "pdMax": 22,
        "pe": 9
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 10
      },
      {
        "pdMin": 25,
        "pdMax": 27,
        "pe": 11
      },
      {
        "pdMin": 28,
        "pdMax": 29,
        "pe": 12
      },
      {
        "pdMin": 30,
        "pdMax": 32,
        "pe": 13
      },
      {
        "pdMin": 33,
        "pdMax": 34,
        "pe": 14
      },
      {
        "pdMin": 35,
        "pdMax": 37,
        "pe": 15
      },
      {
        "pdMin": 38,
        "pdMax": 39,
        "pe": 16
      },
      {
        "pdMin": 40,
        "pdMax": 43,
        "pe": 17
      },
      {
        "pdMin": 44,
        "pdMax": 45,
        "pe": 18
      },
      {
        "pdMin": 46,
        "pdMax": 47,
        "pe": 19
      },
      {
        "pdMin": 48,
        "pdMax": 48,
        "pe": 20
      },
      {
        "pdMin": 49,
        "pdMax": 49,
        "pe": 21
      },
      {
        "pdMin": 50,
        "pdMax": 50,
        "pe": 22
      },
      {
        "pdMin": 51,
        "pdMax": 51,
        "pe": 23
      },
      {
        "pdMin": 52,
        "pdMax": 52,
        "pe": 24
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 25
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 26
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 28
      }
    ],
    "16_0": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 7,
        "pe": 3
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 4
      },
      {
        "pdMin": 10,
        "pdMax": 12,
        "pe": 5
      },
      {
        "pdMin": 13,
        "pdMax": 15,
        "pe": 6
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 7
      },
      {
        "pdMin": 18,
        "pdMax": 20,
        "pe": 8
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 9
      },
      {
        "pdMin": 23,
        "pdMax": 25,
        "pe": 10
      },
      {
        "pdMin": 26,
        "pdMax": 27,
        "pe": 11
      },
      {
        "pdMin": 28,
        "pdMax": 30,
        "pe": 12
      },
      {
        "pdMin": 31,
        "pdMax": 33,
        "pe": 13
      },
      {
        "pdMin": 34,
        "pdMax": 35,
        "pe": 14
      },
      {
        "pdMin": 36,
        "pdMax": 38,
        "pe": 15
      },
      {
        "pdMin": 39,
        "pdMax": 40,
        "pe": 16
      },
      {
        "pdMin": 41,
        "pdMax": 44,
        "pe": 17
      },
      {
        "pdMin": 45,
        "pdMax": 45,
        "pe": 18
      },
      {
        "pdMin": 46,
        "pdMax": 47,
        "pe": 19
      },
      {
        "pdMin": 48,
        "pdMax": 48,
        "pe": 20
      },
      {
        "pdMin": 49,
        "pdMax": 49,
        "pe": 21
      },
      {
        "pdMin": 50,
        "pdMax": 50,
        "pe": 22
      },
      {
        "pdMin": 51,
        "pdMax": 51,
        "pe": 23
      },
      {
        "pdMin": 52,
        "pdMax": 52,
        "pe": 24
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 25
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 26
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 28
      }
    ],
    "16_4": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 7,
        "pe": 3
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 4
      },
      {
        "pdMin": 10,
        "pdMax": 12,
        "pe": 5
      },
      {
        "pdMin": 13,
        "pdMax": 15,
        "pe": 6
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 7
      },
      {
        "pdMin": 18,
        "pdMax": 20,
        "pe": 8
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 9
      },
      {
        "pdMin": 23,
        "pdMax": 25,
        "pe": 10
      },
      {
        "pdMin": 26,
        "pdMax": 27,
        "pe": 11
      },
      {
        "pdMin": 28,
        "pdMax": 30,
        "pe": 12
      },
      {
        "pdMin": 31,
        "pdMax": 33,
        "pe": 13
      },
      {
        "pdMin": 34,
        "pdMax": 35,
        "pe": 14
      },
      {
        "pdMin": 36,
        "pdMax": 38,
        "pe": 15
      },
      {
        "pdMin": 39,
        "pdMax": 40,
        "pe": 16
      },
      {
        "pdMin": 41,
        "pdMax": 44,
        "pe": 17
      },
      {
        "pdMin": 45,
        "pdMax": 46,
        "pe": 18
      },
      {
        "pdMin": 47,
        "pdMax": 47,
        "pe": 19
      },
      {
        "pdMin": 48,
        "pdMax": 48,
        "pe": 20
      },
      {
        "pdMin": 49,
        "pdMax": 49,
        "pe": 21
      },
      {
        "pdMin": 50,
        "pdMax": 50,
        "pe": 22
      },
      {
        "pdMin": 51,
        "pdMax": 51,
        "pe": 23
      },
      {
        "pdMin": 52,
        "pdMax": 52,
        "pe": 24
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 26
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 28
      }
    ],
    "16_8": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 7,
        "pe": 3
      },
      {
        "pdMin": 8,
        "pdMax": 10,
        "pe": 4
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 5
      },
      {
        "pdMin": 13,
        "pdMax": 15,
        "pe": 6
      },
      {
        "pdMin": 16,
        "pdMax": 18,
        "pe": 7
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 8
      },
      {
        "pdMin": 21,
        "pdMax": 23,
        "pe": 9
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 10
      },
      {
        "pdMin": 26,
        "pdMax": 28,
        "pe": 11
      },
      {
        "pdMin": 29,
        "pdMax": 31,
        "pe": 12
      },
      {
        "pdMin": 32,
        "pdMax": 33,
        "pe": 13
      },
      {
        "pdMin": 34,
        "pdMax": 36,
        "pe": 14
      },
      {
        "pdMin": 37,
        "pdMax": 39,
        "pe": 15
      },
      {
        "pdMin": 40,
        "pdMax": 41,
        "pe": 16
      },
      {
        "pdMin": 42,
        "pdMax": 45,
        "pe": 17
      },
      {
        "pdMin": 46,
        "pdMax": 46,
        "pe": 18
      },
      {
        "pdMin": 47,
        "pdMax": 47,
        "pe": 19
      },
      {
        "pdMin": 48,
        "pdMax": 48,
        "pe": 20
      },
      {
        "pdMin": 49,
        "pdMax": 49,
        "pe": 21
      },
      {
        "pdMin": 50,
        "pdMax": 50,
        "pe": 22
      },
      {
        "pdMin": 51,
        "pdMax": 51,
        "pe": 23
      },
      {
        "pdMin": 52,
        "pdMax": 52,
        "pe": 24
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 26
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 28
      }
    ]
  },
  "cla": {
    "6_0": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 5,
        "pe": 2
      },
      {
        "pdMin": 6,
        "pdMax": 8,
        "pe": 3
      },
      {
        "pdMin": 9,
        "pdMax": 11,
        "pe": 4
      },
      {
        "pdMin": 12,
        "pdMax": 14,
        "pe": 5
      },
      {
        "pdMin": 15,
        "pdMax": 17,
        "pe": 6
      },
      {
        "pdMin": 18,
        "pdMax": 20,
        "pe": 7
      },
      {
        "pdMin": 21,
        "pdMax": 23,
        "pe": 8
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 9
      },
      {
        "pdMin": 26,
        "pdMax": 28,
        "pe": 10
      },
      {
        "pdMin": 29,
        "pdMax": 31,
        "pe": 11
      },
      {
        "pdMin": 32,
        "pdMax": 34,
        "pe": 12
      },
      {
        "pdMin": 35,
        "pdMax": 37,
        "pe": 13
      },
      {
        "pdMin": 38,
        "pdMax": 40,
        "pe": 14
      },
      {
        "pdMin": 41,
        "pdMax": 43,
        "pe": 15
      },
      {
        "pdMin": 44,
        "pdMax": 46,
        "pe": 16
      },
      {
        "pdMin": 47,
        "pdMax": 50,
        "pe": 17
      },
      {
        "pdMin": 51,
        "pdMax": 55,
        "pe": 18
      },
      {
        "pdMin": 56,
        "pdMax": 59,
        "pe": 19
      },
      {
        "pdMin": 60,
        "pdMax": 63,
        "pe": 20
      },
      {
        "pdMin": 64,
        "pdMax": 67,
        "pe": 21
      },
      {
        "pdMin": 68,
        "pdMax": 70,
        "pe": 22
      },
      {
        "pdMin": 71,
        "pdMax": 73,
        "pe": 23
      },
      {
        "pdMin": 74,
        "pdMax": 75,
        "pe": 24
      }
    ],
    "6_4": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 5,
        "pe": 2
      },
      {
        "pdMin": 6,
        "pdMax": 9,
        "pe": 3
      },
      {
        "pdMin": 10,
        "pdMax": 12,
        "pe": 4
      },
      {
        "pdMin": 13,
        "pdMax": 15,
        "pe": 5
      },
      {
        "pdMin": 16,
        "pdMax": 18,
        "pe": 6
      },
      {
        "pdMin": 19,
        "pdMax": 21,
        "pe": 7
      },
      {
        "pdMin": 22,
        "pdMax": 24,
        "pe": 8
      },
      {
        "pdMin": 25,
        "pdMax": 28,
        "pe": 9
      },
      {
        "pdMin": 29,
        "pdMax": 31,
        "pe": 10
      },
      {
        "pdMin": 32,
        "pdMax": 34,
        "pe": 11
      },
      {
        "pdMin": 35,
        "pdMax": 37,
        "pe": 12
      },
      {
        "pdMin": 38,
        "pdMax": 40,
        "pe": 13
      },
      {
        "pdMin": 41,
        "pdMax": 43,
        "pe": 14
      },
      {
        "pdMin": 44,
        "pdMax": 47,
        "pe": 15
      },
      {
        "pdMin": 48,
        "pdMax": 50,
        "pe": 16
      },
      {
        "pdMin": 51,
        "pdMax": 54,
        "pe": 17
      },
      {
        "pdMin": 55,
        "pdMax": 59,
        "pe": 18
      },
      {
        "pdMin": 60,
        "pdMax": 63,
        "pe": 19
      },
      {
        "pdMin": 64,
        "pdMax": 67,
        "pe": 20
      },
      {
        "pdMin": 68,
        "pdMax": 70,
        "pe": 21
      },
      {
        "pdMin": 71,
        "pdMax": 73,
        "pe": 22
      },
      {
        "pdMin": 74,
        "pdMax": 75,
        "pe": 23
      }
    ],
    "6_8": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 6,
        "pe": 2
      },
      {
        "pdMin": 7,
        "pdMax": 9,
        "pe": 3
      },
      {
        "pdMin": 10,
        "pdMax": 13,
        "pe": 4
      },
      {
        "pdMin": 14,
        "pdMax": 16,
        "pe": 5
      },
      {
        "pdMin": 17,
        "pdMax": 19,
        "pe": 6
      },
      {
        "pdMin": 20,
        "pdMax": 23,
        "pe": 7
      },
      {
        "pdMin": 24,
        "pdMax": 26,
        "pe": 8
      },
      {
        "pdMin": 27,
        "pdMax": 30,
        "pe": 9
      },
      {
        "pdMin": 31,
        "pdMax": 33,
        "pe": 10
      },
      {
        "pdMin": 34,
        "pdMax": 37,
        "pe": 11
      },
      {
        "pdMin": 38,
        "pdMax": 40,
        "pe": 12
      },
      {
        "pdMin": 41,
        "pdMax": 43,
        "pe": 13
      },
      {
        "pdMin": 44,
        "pdMax": 47,
        "pe": 14
      },
      {
        "pdMin": 48,
        "pdMax": 50,
        "pe": 15
      },
      {
        "pdMin": 51,
        "pdMax": 54,
        "pe": 16
      },
      {
        "pdMin": 55,
        "pdMax": 58,
        "pe": 17
      },
      {
        "pdMin": 59,
        "pdMax": 63,
        "pe": 18
      },
      {
        "pdMin": 64,
        "pdMax": 67,
        "pe": 19
      },
      {
        "pdMin": 68,
        "pdMax": 70,
        "pe": 20
      },
      {
        "pdMin": 71,
        "pdMax": 73,
        "pe": 21
      },
      {
        "pdMin": 74,
        "pdMax": 75,
        "pe": 22
      }
    ],
    "7_0": [
      {
        "pdMin": 0,
        "pdMax": 3,
        "pe": 1
      },
      {
        "pdMin": 4,
        "pdMax": 6,
        "pe": 2
      },
      {
        "pdMin": 7,
        "pdMax": 10,
        "pe": 3
      },
      {
        "pdMin": 11,
        "pdMax": 13,
        "pe": 4
      },
      {
        "pdMin": 14,
        "pdMax": 17,
        "pe": 5
      },
      {
        "pdMin": 18,
        "pdMax": 21,
        "pe": 6
      },
      {
        "pdMin": 22,
        "pdMax": 24,
        "pe": 7
      },
      {
        "pdMin": 25,
        "pdMax": 28,
        "pe": 8
      },
      {
        "pdMin": 29,
        "pdMax": 31,
        "pe": 9
      },
      {
        "pdMin": 32,
        "pdMax": 35,
        "pe": 10
      },
      {
        "pdMin": 36,
        "pdMax": 38,
        "pe": 11
      },
      {
        "pdMin": 39,
        "pdMax": 42,
        "pe": 12
      },
      {
        "pdMin": 43,
        "pdMax": 46,
        "pe": 13
      },
      {
        "pdMin": 47,
        "pdMax": 49,
        "pe": 14
      },
      {
        "pdMin": 50,
        "pdMax": 53,
        "pe": 15
      },
      {
        "pdMin": 54,
        "pdMax": 56,
        "pe": 16
      },
      {
        "pdMin": 57,
        "pdMax": 61,
        "pe": 17
      },
      {
        "pdMin": 62,
        "pdMax": 66,
        "pe": 18
      },
      {
        "pdMin": 67,
        "pdMax": 70,
        "pe": 19
      },
      {
        "pdMin": 71,
        "pdMax": 73,
        "pe": 20
      },
      {
        "pdMin": 74,
        "pdMax": 75,
        "pe": 21
      }
    ],
    "7_4": [
      {
        "pdMin": 0,
        "pdMax": 3,
        "pe": 1
      },
      {
        "pdMin": 4,
        "pdMax": 7,
        "pe": 2
      },
      {
        "pdMin": 8,
        "pdMax": 10,
        "pe": 3
      },
      {
        "pdMin": 11,
        "pdMax": 14,
        "pe": 4
      },
      {
        "pdMin": 15,
        "pdMax": 18,
        "pe": 5
      },
      {
        "pdMin": 19,
        "pdMax": 22,
        "pe": 6
      },
      {
        "pdMin": 23,
        "pdMax": 25,
        "pe": 7
      },
      {
        "pdMin": 26,
        "pdMax": 29,
        "pe": 8
      },
      {
        "pdMin": 30,
        "pdMax": 33,
        "pe": 9
      },
      {
        "pdMin": 34,
        "pdMax": 37,
        "pe": 10
      },
      {
        "pdMin": 38,
        "pdMax": 40,
        "pe": 11
      },
      {
        "pdMin": 41,
        "pdMax": 44,
        "pe": 12
      },
      {
        "pdMin": 45,
        "pdMax": 48,
        "pe": 13
      },
      {
        "pdMin": 49,
        "pdMax": 52,
        "pe": 14
      },
      {
        "pdMin": 53,
        "pdMax": 55,
        "pe": 15
      },
      {
        "pdMin": 56,
        "pdMax": 59,
        "pe": 16
      },
      {
        "pdMin": 60,
        "pdMax": 64,
        "pe": 17
      },
      {
        "pdMin": 65,
        "pdMax": 69,
        "pe": 18
      },
      {
        "pdMin": 70,
        "pdMax": 72,
        "pe": 19
      },
      {
        "pdMin": 73,
        "pdMax": 74,
        "pe": 20
      },
      {
        "pdMin": 75,
        "pdMax": 75,
        "pe": 21
      }
    ],
    "7_8": [
      {
        "pdMin": 0,
        "pdMax": 3,
        "pe": 1
      },
      {
        "pdMin": 4,
        "pdMax": 7,
        "pe": 2
      },
      {
        "pdMin": 8,
        "pdMax": 11,
        "pe": 3
      },
      {
        "pdMin": 12,
        "pdMax": 15,
        "pe": 4
      },
      {
        "pdMin": 16,
        "pdMax": 19,
        "pe": 5
      },
      {
        "pdMin": 20,
        "pdMax": 23,
        "pe": 6
      },
      {
        "pdMin": 24,
        "pdMax": 27,
        "pe": 7
      },
      {
        "pdMin": 28,
        "pdMax": 31,
        "pe": 8
      },
      {
        "pdMin": 32,
        "pdMax": 34,
        "pe": 9
      },
      {
        "pdMin": 35,
        "pdMax": 38,
        "pe": 10
      },
      {
        "pdMin": 39,
        "pdMax": 42,
        "pe": 11
      },
      {
        "pdMin": 43,
        "pdMax": 46,
        "pe": 12
      },
      {
        "pdMin": 47,
        "pdMax": 50,
        "pe": 13
      },
      {
        "pdMin": 51,
        "pdMax": 54,
        "pe": 14
      },
      {
        "pdMin": 55,
        "pdMax": 58,
        "pe": 15
      },
      {
        "pdMin": 59,
        "pdMax": 62,
        "pe": 16
      },
      {
        "pdMin": 63,
        "pdMax": 67,
        "pe": 17
      },
      {
        "pdMin": 68,
        "pdMax": 71,
        "pe": 18
      },
      {
        "pdMin": 72,
        "pdMax": 74,
        "pe": 19
      },
      {
        "pdMin": 75,
        "pdMax": 75,
        "pe": 20
      }
    ],
    "8_0": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 5,
        "pe": 2
      },
      {
        "pdMin": 6,
        "pdMax": 9,
        "pe": 3
      },
      {
        "pdMin": 10,
        "pdMax": 12,
        "pe": 4
      },
      {
        "pdMin": 13,
        "pdMax": 15,
        "pe": 5
      },
      {
        "pdMin": 16,
        "pdMax": 18,
        "pe": 6
      },
      {
        "pdMin": 19,
        "pdMax": 22,
        "pe": 7
      },
      {
        "pdMin": 23,
        "pdMax": 25,
        "pe": 8
      },
      {
        "pdMin": 26,
        "pdMax": 28,
        "pe": 9
      },
      {
        "pdMin": 29,
        "pdMax": 31,
        "pe": 10
      },
      {
        "pdMin": 32,
        "pdMax": 35,
        "pe": 11
      },
      {
        "pdMin": 36,
        "pdMax": 38,
        "pe": 12
      },
      {
        "pdMin": 39,
        "pdMax": 41,
        "pe": 13
      },
      {
        "pdMin": 42,
        "pdMax": 44,
        "pe": 14
      },
      {
        "pdMin": 45,
        "pdMax": 48,
        "pe": 15
      },
      {
        "pdMin": 49,
        "pdMax": 51,
        "pe": 16
      },
      {
        "pdMin": 52,
        "pdMax": 55,
        "pe": 17
      },
      {
        "pdMin": 56,
        "pdMax": 59,
        "pe": 18
      },
      {
        "pdMin": 60,
        "pdMax": 63,
        "pe": 19
      },
      {
        "pdMin": 64,
        "pdMax": 67,
        "pe": 20
      },
      {
        "pdMin": 68,
        "pdMax": 70,
        "pe": 21
      },
      {
        "pdMin": 71,
        "pdMax": 74,
        "pe": 22
      },
      {
        "pdMin": 75,
        "pdMax": 77,
        "pe": 23
      },
      {
        "pdMin": 78,
        "pdMax": 80,
        "pe": 24
      },
      {
        "pdMin": 81,
        "pdMax": 83,
        "pe": 25
      },
      {
        "pdMin": 84,
        "pdMax": 86,
        "pe": 26
      },
      {
        "pdMin": 87,
        "pdMax": 89,
        "pe": 27
      },
      {
        "pdMin": 90,
        "pdMax": 117,
        "pe": 28
      }
    ],
    "8_4": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 6,
        "pe": 2
      },
      {
        "pdMin": 7,
        "pdMax": 9,
        "pe": 3
      },
      {
        "pdMin": 10,
        "pdMax": 13,
        "pe": 4
      },
      {
        "pdMin": 14,
        "pdMax": 16,
        "pe": 5
      },
      {
        "pdMin": 17,
        "pdMax": 19,
        "pe": 6
      },
      {
        "pdMin": 20,
        "pdMax": 23,
        "pe": 7
      },
      {
        "pdMin": 24,
        "pdMax": 26,
        "pe": 8
      },
      {
        "pdMin": 27,
        "pdMax": 30,
        "pe": 9
      },
      {
        "pdMin": 31,
        "pdMax": 33,
        "pe": 10
      },
      {
        "pdMin": 34,
        "pdMax": 37,
        "pe": 11
      },
      {
        "pdMin": 38,
        "pdMax": 40,
        "pe": 12
      },
      {
        "pdMin": 41,
        "pdMax": 43,
        "pe": 13
      },
      {
        "pdMin": 44,
        "pdMax": 47,
        "pe": 14
      },
      {
        "pdMin": 48,
        "pdMax": 50,
        "pe": 15
      },
      {
        "pdMin": 51,
        "pdMax": 54,
        "pe": 16
      },
      {
        "pdMin": 55,
        "pdMax": 58,
        "pe": 17
      },
      {
        "pdMin": 59,
        "pdMax": 62,
        "pe": 18
      },
      {
        "pdMin": 63,
        "pdMax": 66,
        "pe": 19
      },
      {
        "pdMin": 67,
        "pdMax": 70,
        "pe": 20
      },
      {
        "pdMin": 71,
        "pdMax": 74,
        "pe": 21
      },
      {
        "pdMin": 75,
        "pdMax": 77,
        "pe": 22
      },
      {
        "pdMin": 78,
        "pdMax": 80,
        "pe": 23
      },
      {
        "pdMin": 81,
        "pdMax": 83,
        "pe": 24
      },
      {
        "pdMin": 84,
        "pdMax": 86,
        "pe": 25
      },
      {
        "pdMin": 87,
        "pdMax": 89,
        "pe": 26
      },
      {
        "pdMin": 90,
        "pdMax": 92,
        "pe": 27
      },
      {
        "pdMin": 93,
        "pdMax": 117,
        "pe": 28
      }
    ],
    "8_8": [
      {
        "pdMin": 0,
        "pdMax": 3,
        "pe": 1
      },
      {
        "pdMin": 4,
        "pdMax": 6,
        "pe": 2
      },
      {
        "pdMin": 7,
        "pdMax": 10,
        "pe": 3
      },
      {
        "pdMin": 11,
        "pdMax": 13,
        "pe": 4
      },
      {
        "pdMin": 14,
        "pdMax": 17,
        "pe": 5
      },
      {
        "pdMin": 18,
        "pdMax": 21,
        "pe": 6
      },
      {
        "pdMin": 22,
        "pdMax": 24,
        "pe": 7
      },
      {
        "pdMin": 25,
        "pdMax": 28,
        "pe": 8
      },
      {
        "pdMin": 29,
        "pdMax": 31,
        "pe": 9
      },
      {
        "pdMin": 32,
        "pdMax": 35,
        "pe": 10
      },
      {
        "pdMin": 36,
        "pdMax": 38,
        "pe": 11
      },
      {
        "pdMin": 39,
        "pdMax": 42,
        "pe": 12
      },
      {
        "pdMin": 43,
        "pdMax": 46,
        "pe": 13
      },
      {
        "pdMin": 47,
        "pdMax": 49,
        "pe": 14
      },
      {
        "pdMin": 50,
        "pdMax": 53,
        "pe": 15
      },
      {
        "pdMin": 54,
        "pdMax": 56,
        "pe": 16
      },
      {
        "pdMin": 57,
        "pdMax": 61,
        "pe": 17
      },
      {
        "pdMin": 62,
        "pdMax": 65,
        "pe": 18
      },
      {
        "pdMin": 66,
        "pdMax": 70,
        "pe": 19
      },
      {
        "pdMin": 71,
        "pdMax": 74,
        "pe": 20
      },
      {
        "pdMin": 75,
        "pdMax": 77,
        "pe": 21
      },
      {
        "pdMin": 78,
        "pdMax": 80,
        "pe": 22
      },
      {
        "pdMin": 81,
        "pdMax": 83,
        "pe": 23
      },
      {
        "pdMin": 84,
        "pdMax": 86,
        "pe": 24
      },
      {
        "pdMin": 87,
        "pdMax": 89,
        "pe": 25
      },
      {
        "pdMin": 90,
        "pdMax": 92,
        "pe": 26
      },
      {
        "pdMin": 93,
        "pdMax": 95,
        "pe": 27
      },
      {
        "pdMin": 96,
        "pdMax": 117,
        "pe": 28
      }
    ],
    "9_0": [
      {
        "pdMin": 0,
        "pdMax": 3,
        "pe": 1
      },
      {
        "pdMin": 4,
        "pdMax": 7,
        "pe": 2
      },
      {
        "pdMin": 8,
        "pdMax": 10,
        "pe": 3
      },
      {
        "pdMin": 11,
        "pdMax": 14,
        "pe": 4
      },
      {
        "pdMin": 15,
        "pdMax": 18,
        "pe": 5
      },
      {
        "pdMin": 19,
        "pdMax": 22,
        "pe": 6
      },
      {
        "pdMin": 23,
        "pdMax": 25,
        "pe": 7
      },
      {
        "pdMin": 26,
        "pdMax": 29,
        "pe": 8
      },
      {
        "pdMin": 30,
        "pdMax": 33,
        "pe": 9
      },
      {
        "pdMin": 34,
        "pdMax": 37,
        "pe": 10
      },
      {
        "pdMin": 38,
        "pdMax": 40,
        "pe": 11
      },
      {
        "pdMin": 41,
        "pdMax": 44,
        "pe": 12
      },
      {
        "pdMin": 45,
        "pdMax": 48,
        "pe": 13
      },
      {
        "pdMin": 49,
        "pdMax": 52,
        "pe": 14
      },
      {
        "pdMin": 53,
        "pdMax": 55,
        "pe": 15
      },
      {
        "pdMin": 56,
        "pdMax": 59,
        "pe": 16
      },
      {
        "pdMin": 60,
        "pdMax": 64,
        "pe": 17
      },
      {
        "pdMin": 65,
        "pdMax": 69,
        "pe": 18
      },
      {
        "pdMin": 70,
        "pdMax": 73,
        "pe": 19
      },
      {
        "pdMin": 74,
        "pdMax": 77,
        "pe": 20
      },
      {
        "pdMin": 78,
        "pdMax": 80,
        "pe": 21
      },
      {
        "pdMin": 81,
        "pdMax": 83,
        "pe": 22
      },
      {
        "pdMin": 84,
        "pdMax": 86,
        "pe": 23
      },
      {
        "pdMin": 87,
        "pdMax": 89,
        "pe": 24
      },
      {
        "pdMin": 90,
        "pdMax": 92,
        "pe": 25
      },
      {
        "pdMin": 93,
        "pdMax": 95,
        "pe": 26
      },
      {
        "pdMin": 96,
        "pdMax": 98,
        "pe": 27
      },
      {
        "pdMin": 99,
        "pdMax": 117,
        "pe": 28
      }
    ],
    "9_4": [
      {
        "pdMin": 0,
        "pdMax": 3,
        "pe": 1
      },
      {
        "pdMin": 4,
        "pdMax": 7,
        "pe": 2
      },
      {
        "pdMin": 8,
        "pdMax": 11,
        "pe": 3
      },
      {
        "pdMin": 12,
        "pdMax": 15,
        "pe": 4
      },
      {
        "pdMin": 16,
        "pdMax": 19,
        "pe": 5
      },
      {
        "pdMin": 20,
        "pdMax": 23,
        "pe": 6
      },
      {
        "pdMin": 24,
        "pdMax": 27,
        "pe": 7
      },
      {
        "pdMin": 28,
        "pdMax": 31,
        "pe": 8
      },
      {
        "pdMin": 32,
        "pdMax": 34,
        "pe": 9
      },
      {
        "pdMin": 35,
        "pdMax": 38,
        "pe": 10
      },
      {
        "pdMin": 39,
        "pdMax": 42,
        "pe": 11
      },
      {
        "pdMin": 43,
        "pdMax": 46,
        "pe": 12
      },
      {
        "pdMin": 47,
        "pdMax": 50,
        "pe": 13
      },
      {
        "pdMin": 51,
        "pdMax": 54,
        "pe": 14
      },
      {
        "pdMin": 55,
        "pdMax": 58,
        "pe": 15
      },
      {
        "pdMin": 59,
        "pdMax": 62,
        "pe": 16
      },
      {
        "pdMin": 63,
        "pdMax": 67,
        "pe": 17
      },
      {
        "pdMin": 68,
        "pdMax": 72,
        "pe": 18
      },
      {
        "pdMin": 73,
        "pdMax": 76,
        "pe": 19
      },
      {
        "pdMin": 77,
        "pdMax": 80,
        "pe": 20
      },
      {
        "pdMin": 81,
        "pdMax": 83,
        "pe": 21
      },
      {
        "pdMin": 84,
        "pdMax": 86,
        "pe": 22
      },
      {
        "pdMin": 87,
        "pdMax": 89,
        "pe": 23
      },
      {
        "pdMin": 90,
        "pdMax": 92,
        "pe": 24
      },
      {
        "pdMin": 93,
        "pdMax": 95,
        "pe": 25
      },
      {
        "pdMin": 96,
        "pdMax": 98,
        "pe": 26
      },
      {
        "pdMin": 99,
        "pdMax": 101,
        "pe": 27
      },
      {
        "pdMin": 102,
        "pdMax": 117,
        "pe": 28
      }
    ],
    "9_8": [
      {
        "pdMin": 0,
        "pdMax": 3,
        "pe": 1
      },
      {
        "pdMin": 4,
        "pdMax": 7,
        "pe": 2
      },
      {
        "pdMin": 8,
        "pdMax": 11,
        "pe": 3
      },
      {
        "pdMin": 12,
        "pdMax": 15,
        "pe": 4
      },
      {
        "pdMin": 16,
        "pdMax": 20,
        "pe": 5
      },
      {
        "pdMin": 21,
        "pdMax": 24,
        "pe": 6
      },
      {
        "pdMin": 25,
        "pdMax": 28,
        "pe": 7
      },
      {
        "pdMin": 29,
        "pdMax": 32,
        "pe": 8
      },
      {
        "pdMin": 33,
        "pdMax": 36,
        "pe": 9
      },
      {
        "pdMin": 37,
        "pdMax": 40,
        "pe": 10
      },
      {
        "pdMin": 41,
        "pdMax": 44,
        "pe": 11
      },
      {
        "pdMin": 45,
        "pdMax": 48,
        "pe": 12
      },
      {
        "pdMin": 49,
        "pdMax": 53,
        "pe": 13
      },
      {
        "pdMin": 54,
        "pdMax": 57,
        "pe": 14
      },
      {
        "pdMin": 58,
        "pdMax": 61,
        "pe": 15
      },
      {
        "pdMin": 62,
        "pdMax": 65,
        "pe": 16
      },
      {
        "pdMin": 66,
        "pdMax": 70,
        "pe": 17
      },
      {
        "pdMin": 71,
        "pdMax": 75,
        "pe": 18
      },
      {
        "pdMin": 76,
        "pdMax": 78,
        "pe": 19
      },
      {
        "pdMin": 79,
        "pdMax": 82,
        "pe": 20
      },
      {
        "pdMin": 83,
        "pdMax": 85,
        "pe": 21
      },
      {
        "pdMin": 86,
        "pdMax": 88,
        "pe": 22
      },
      {
        "pdMin": 89,
        "pdMax": 91,
        "pe": 23
      },
      {
        "pdMin": 92,
        "pdMax": 94,
        "pe": 24
      },
      {
        "pdMin": 95,
        "pdMax": 97,
        "pe": 25
      },
      {
        "pdMin": 98,
        "pdMax": 100,
        "pe": 26
      },
      {
        "pdMin": 101,
        "pdMax": 103,
        "pe": 27
      },
      {
        "pdMin": 104,
        "pdMax": 117,
        "pe": 28
      }
    ],
    "10_0": [
      {
        "pdMin": 0,
        "pdMax": 3,
        "pe": 1
      },
      {
        "pdMin": 4,
        "pdMax": 8,
        "pe": 2
      },
      {
        "pdMin": 9,
        "pdMax": 12,
        "pe": 3
      },
      {
        "pdMin": 13,
        "pdMax": 16,
        "pe": 4
      },
      {
        "pdMin": 17,
        "pdMax": 20,
        "pe": 5
      },
      {
        "pdMin": 21,
        "pdMax": 25,
        "pe": 6
      },
      {
        "pdMin": 26,
        "pdMax": 29,
        "pe": 7
      },
      {
        "pdMin": 30,
        "pdMax": 33,
        "pe": 8
      },
      {
        "pdMin": 34,
        "pdMax": 38,
        "pe": 9
      },
      {
        "pdMin": 39,
        "pdMax": 42,
        "pe": 10
      },
      {
        "pdMin": 43,
        "pdMax": 46,
        "pe": 11
      },
      {
        "pdMin": 47,
        "pdMax": 51,
        "pe": 12
      },
      {
        "pdMin": 52,
        "pdMax": 55,
        "pe": 13
      },
      {
        "pdMin": 56,
        "pdMax": 59,
        "pe": 14
      },
      {
        "pdMin": 60,
        "pdMax": 63,
        "pe": 15
      },
      {
        "pdMin": 64,
        "pdMax": 68,
        "pe": 16
      },
      {
        "pdMin": 69,
        "pdMax": 73,
        "pe": 17
      },
      {
        "pdMin": 74,
        "pdMax": 77,
        "pe": 18
      },
      {
        "pdMin": 78,
        "pdMax": 81,
        "pe": 19
      },
      {
        "pdMin": 82,
        "pdMax": 85,
        "pe": 20
      },
      {
        "pdMin": 86,
        "pdMax": 88,
        "pe": 21
      },
      {
        "pdMin": 89,
        "pdMax": 91,
        "pe": 22
      },
      {
        "pdMin": 92,
        "pdMax": 94,
        "pe": 23
      },
      {
        "pdMin": 95,
        "pdMax": 97,
        "pe": 24
      },
      {
        "pdMin": 98,
        "pdMax": 100,
        "pe": 25
      },
      {
        "pdMin": 101,
        "pdMax": 103,
        "pe": 26
      },
      {
        "pdMin": 104,
        "pdMax": 106,
        "pe": 27
      },
      {
        "pdMin": 107,
        "pdMax": 117,
        "pe": 28
      }
    ],
    "10_4": [
      {
        "pdMin": 0,
        "pdMax": 3,
        "pe": 1
      },
      {
        "pdMin": 4,
        "pdMax": 8,
        "pe": 2
      },
      {
        "pdMin": 9,
        "pdMax": 12,
        "pe": 3
      },
      {
        "pdMin": 13,
        "pdMax": 17,
        "pe": 4
      },
      {
        "pdMin": 18,
        "pdMax": 21,
        "pe": 5
      },
      {
        "pdMin": 22,
        "pdMax": 25,
        "pe": 6
      },
      {
        "pdMin": 26,
        "pdMax": 30,
        "pe": 7
      },
      {
        "pdMin": 31,
        "pdMax": 34,
        "pe": 8
      },
      {
        "pdMin": 35,
        "pdMax": 39,
        "pe": 9
      },
      {
        "pdMin": 40,
        "pdMax": 43,
        "pe": 10
      },
      {
        "pdMin": 44,
        "pdMax": 48,
        "pe": 11
      },
      {
        "pdMin": 49,
        "pdMax": 52,
        "pe": 12
      },
      {
        "pdMin": 53,
        "pdMax": 56,
        "pe": 13
      },
      {
        "pdMin": 57,
        "pdMax": 61,
        "pe": 14
      },
      {
        "pdMin": 62,
        "pdMax": 65,
        "pe": 15
      },
      {
        "pdMin": 66,
        "pdMax": 70,
        "pe": 16
      },
      {
        "pdMin": 71,
        "pdMax": 75,
        "pe": 17
      },
      {
        "pdMin": 76,
        "pdMax": 79,
        "pe": 18
      },
      {
        "pdMin": 80,
        "pdMax": 83,
        "pe": 19
      },
      {
        "pdMin": 84,
        "pdMax": 87,
        "pe": 20
      },
      {
        "pdMin": 88,
        "pdMax": 90,
        "pe": 21
      },
      {
        "pdMin": 91,
        "pdMax": 93,
        "pe": 22
      },
      {
        "pdMin": 94,
        "pdMax": 96,
        "pe": 23
      },
      {
        "pdMin": 97,
        "pdMax": 99,
        "pe": 24
      },
      {
        "pdMin": 100,
        "pdMax": 102,
        "pe": 25
      },
      {
        "pdMin": 103,
        "pdMax": 105,
        "pe": 26
      },
      {
        "pdMin": 106,
        "pdMax": 108,
        "pe": 27
      },
      {
        "pdMin": 109,
        "pdMax": 117,
        "pe": 28
      }
    ],
    "10_8": [
      {
        "pdMin": 0,
        "pdMax": 4,
        "pe": 1
      },
      {
        "pdMin": 5,
        "pdMax": 8,
        "pe": 2
      },
      {
        "pdMin": 9,
        "pdMax": 13,
        "pe": 3
      },
      {
        "pdMin": 14,
        "pdMax": 17,
        "pe": 4
      },
      {
        "pdMin": 18,
        "pdMax": 22,
        "pe": 5
      },
      {
        "pdMin": 23,
        "pdMax": 27,
        "pe": 6
      },
      {
        "pdMin": 28,
        "pdMax": 31,
        "pe": 7
      },
      {
        "pdMin": 32,
        "pdMax": 36,
        "pe": 8
      },
      {
        "pdMin": 37,
        "pdMax": 40,
        "pe": 9
      },
      {
        "pdMin": 41,
        "pdMax": 45,
        "pe": 10
      },
      {
        "pdMin": 46,
        "pdMax": 49,
        "pe": 11
      },
      {
        "pdMin": 50,
        "pdMax": 54,
        "pe": 12
      },
      {
        "pdMin": 55,
        "pdMax": 59,
        "pe": 13
      },
      {
        "pdMin": 60,
        "pdMax": 63,
        "pe": 14
      },
      {
        "pdMin": 64,
        "pdMax": 68,
        "pe": 15
      },
      {
        "pdMin": 69,
        "pdMax": 72,
        "pe": 16
      },
      {
        "pdMin": 73,
        "pdMax": 78,
        "pe": 17
      },
      {
        "pdMin": 79,
        "pdMax": 82,
        "pe": 18
      },
      {
        "pdMin": 83,
        "pdMax": 86,
        "pe": 19
      },
      {
        "pdMin": 87,
        "pdMax": 90,
        "pe": 20
      },
      {
        "pdMin": 91,
        "pdMax": 93,
        "pe": 21
      },
      {
        "pdMin": 94,
        "pdMax": 96,
        "pe": 22
      },
      {
        "pdMin": 97,
        "pdMax": 99,
        "pe": 23
      },
      {
        "pdMin": 100,
        "pdMax": 102,
        "pe": 24
      },
      {
        "pdMin": 103,
        "pdMax": 105,
        "pe": 25
      },
      {
        "pdMin": 106,
        "pdMax": 107,
        "pe": 26
      },
      {
        "pdMin": 108,
        "pdMax": 110,
        "pe": 27
      },
      {
        "pdMin": 111,
        "pdMax": 117,
        "pe": 28
      }
    ],
    "11_0": [
      {
        "pdMin": 0,
        "pdMax": 4,
        "pe": 1
      },
      {
        "pdMin": 5,
        "pdMax": 8,
        "pe": 2
      },
      {
        "pdMin": 9,
        "pdMax": 13,
        "pe": 3
      },
      {
        "pdMin": 14,
        "pdMax": 18,
        "pe": 4
      },
      {
        "pdMin": 19,
        "pdMax": 23,
        "pe": 5
      },
      {
        "pdMin": 24,
        "pdMax": 27,
        "pe": 6
      },
      {
        "pdMin": 28,
        "pdMax": 32,
        "pe": 7
      },
      {
        "pdMin": 33,
        "pdMax": 37,
        "pe": 8
      },
      {
        "pdMin": 38,
        "pdMax": 41,
        "pe": 9
      },
      {
        "pdMin": 42,
        "pdMax": 46,
        "pe": 10
      },
      {
        "pdMin": 47,
        "pdMax": 51,
        "pe": 11
      },
      {
        "pdMin": 52,
        "pdMax": 55,
        "pe": 12
      },
      {
        "pdMin": 56,
        "pdMax": 60,
        "pe": 13
      },
      {
        "pdMin": 61,
        "pdMax": 65,
        "pe": 14
      },
      {
        "pdMin": 66,
        "pdMax": 70,
        "pe": 15
      },
      {
        "pdMin": 71,
        "pdMax": 74,
        "pe": 16
      },
      {
        "pdMin": 75,
        "pdMax": 80,
        "pe": 17
      },
      {
        "pdMin": 81,
        "pdMax": 84,
        "pe": 18
      },
      {
        "pdMin": 85,
        "pdMax": 88,
        "pe": 19
      },
      {
        "pdMin": 89,
        "pdMax": 92,
        "pe": 20
      },
      {
        "pdMin": 93,
        "pdMax": 95,
        "pe": 21
      },
      {
        "pdMin": 96,
        "pdMax": 98,
        "pe": 22
      },
      {
        "pdMin": 99,
        "pdMax": 101,
        "pe": 23
      },
      {
        "pdMin": 102,
        "pdMax": 103,
        "pe": 24
      },
      {
        "pdMin": 104,
        "pdMax": 106,
        "pe": 25
      },
      {
        "pdMin": 107,
        "pdMax": 108,
        "pe": 26
      },
      {
        "pdMin": 109,
        "pdMax": 111,
        "pe": 27
      },
      {
        "pdMin": 112,
        "pdMax": 117,
        "pe": 28
      }
    ],
    "11_4": [
      {
        "pdMin": 0,
        "pdMax": 4,
        "pe": 1
      },
      {
        "pdMin": 5,
        "pdMax": 9,
        "pe": 2
      },
      {
        "pdMin": 10,
        "pdMax": 13,
        "pe": 3
      },
      {
        "pdMin": 14,
        "pdMax": 18,
        "pe": 4
      },
      {
        "pdMin": 19,
        "pdMax": 23,
        "pe": 5
      },
      {
        "pdMin": 24,
        "pdMax": 28,
        "pe": 6
      },
      {
        "pdMin": 29,
        "pdMax": 33,
        "pe": 7
      },
      {
        "pdMin": 34,
        "pdMax": 38,
        "pe": 8
      },
      {
        "pdMin": 39,
        "pdMax": 42,
        "pe": 9
      },
      {
        "pdMin": 43,
        "pdMax": 47,
        "pe": 10
      },
      {
        "pdMin": 48,
        "pdMax": 52,
        "pe": 11
      },
      {
        "pdMin": 53,
        "pdMax": 57,
        "pe": 12
      },
      {
        "pdMin": 58,
        "pdMax": 62,
        "pe": 13
      },
      {
        "pdMin": 63,
        "pdMax": 67,
        "pe": 14
      },
      {
        "pdMin": 68,
        "pdMax": 71,
        "pe": 15
      },
      {
        "pdMin": 72,
        "pdMax": 76,
        "pe": 16
      },
      {
        "pdMin": 77,
        "pdMax": 82,
        "pe": 17
      },
      {
        "pdMin": 83,
        "pdMax": 86,
        "pe": 18
      },
      {
        "pdMin": 87,
        "pdMax": 90,
        "pe": 19
      },
      {
        "pdMin": 91,
        "pdMax": 94,
        "pe": 20
      },
      {
        "pdMin": 95,
        "pdMax": 97,
        "pe": 21
      },
      {
        "pdMin": 98,
        "pdMax": 100,
        "pe": 22
      },
      {
        "pdMin": 101,
        "pdMax": 103,
        "pe": 23
      },
      {
        "pdMin": 104,
        "pdMax": 106,
        "pe": 24
      },
      {
        "pdMin": 107,
        "pdMax": 108,
        "pe": 25
      },
      {
        "pdMin": 109,
        "pdMax": 110,
        "pe": 26
      },
      {
        "pdMin": 111,
        "pdMax": 113,
        "pe": 27
      },
      {
        "pdMin": 114,
        "pdMax": 117,
        "pe": 28
      }
    ],
    "11_8": [
      {
        "pdMin": 0,
        "pdMax": 4,
        "pe": 1
      },
      {
        "pdMin": 5,
        "pdMax": 9,
        "pe": 2
      },
      {
        "pdMin": 10,
        "pdMax": 14,
        "pe": 3
      },
      {
        "pdMin": 15,
        "pdMax": 19,
        "pe": 4
      },
      {
        "pdMin": 20,
        "pdMax": 24,
        "pe": 5
      },
      {
        "pdMin": 25,
        "pdMax": 29,
        "pe": 6
      },
      {
        "pdMin": 30,
        "pdMax": 34,
        "pe": 7
      },
      {
        "pdMin": 35,
        "pdMax": 39,
        "pe": 8
      },
      {
        "pdMin": 40,
        "pdMax": 43,
        "pe": 9
      },
      {
        "pdMin": 44,
        "pdMax": 48,
        "pe": 10
      },
      {
        "pdMin": 49,
        "pdMax": 53,
        "pe": 11
      },
      {
        "pdMin": 54,
        "pdMax": 58,
        "pe": 12
      },
      {
        "pdMin": 59,
        "pdMax": 63,
        "pe": 13
      },
      {
        "pdMin": 64,
        "pdMax": 68,
        "pe": 14
      },
      {
        "pdMin": 69,
        "pdMax": 73,
        "pe": 15
      },
      {
        "pdMin": 74,
        "pdMax": 78,
        "pe": 16
      },
      {
        "pdMin": 79,
        "pdMax": 84,
        "pe": 17
      },
      {
        "pdMin": 85,
        "pdMax": 88,
        "pe": 18
      },
      {
        "pdMin": 89,
        "pdMax": 92,
        "pe": 19
      },
      {
        "pdMin": 93,
        "pdMax": 96,
        "pe": 20
      },
      {
        "pdMin": 97,
        "pdMax": 99,
        "pe": 21
      },
      {
        "pdMin": 100,
        "pdMax": 102,
        "pe": 22
      },
      {
        "pdMin": 103,
        "pdMax": 105,
        "pe": 23
      },
      {
        "pdMin": 106,
        "pdMax": 107,
        "pe": 24
      },
      {
        "pdMin": 108,
        "pdMax": 110,
        "pe": 25
      },
      {
        "pdMin": 111,
        "pdMax": 112,
        "pe": 26
      },
      {
        "pdMin": 113,
        "pdMax": 114,
        "pe": 27
      },
      {
        "pdMin": 115,
        "pdMax": 117,
        "pe": 28
      }
    ],
    "12_0": [
      {
        "pdMin": 0,
        "pdMax": 4,
        "pe": 1
      },
      {
        "pdMin": 5,
        "pdMax": 9,
        "pe": 2
      },
      {
        "pdMin": 10,
        "pdMax": 14,
        "pe": 3
      },
      {
        "pdMin": 15,
        "pdMax": 19,
        "pe": 4
      },
      {
        "pdMin": 20,
        "pdMax": 24,
        "pe": 5
      },
      {
        "pdMin": 25,
        "pdMax": 29,
        "pe": 6
      },
      {
        "pdMin": 30,
        "pdMax": 34,
        "pe": 7
      },
      {
        "pdMin": 35,
        "pdMax": 39,
        "pe": 8
      },
      {
        "pdMin": 40,
        "pdMax": 45,
        "pe": 9
      },
      {
        "pdMin": 46,
        "pdMax": 50,
        "pe": 10
      },
      {
        "pdMin": 51,
        "pdMax": 55,
        "pe": 11
      },
      {
        "pdMin": 56,
        "pdMax": 60,
        "pe": 12
      },
      {
        "pdMin": 61,
        "pdMax": 65,
        "pe": 13
      },
      {
        "pdMin": 66,
        "pdMax": 70,
        "pe": 14
      },
      {
        "pdMin": 71,
        "pdMax": 75,
        "pe": 15
      },
      {
        "pdMin": 76,
        "pdMax": 80,
        "pe": 16
      },
      {
        "pdMin": 81,
        "pdMax": 86,
        "pe": 17
      },
      {
        "pdMin": 87,
        "pdMax": 90,
        "pe": 18
      },
      {
        "pdMin": 91,
        "pdMax": 94,
        "pe": 19
      },
      {
        "pdMin": 95,
        "pdMax": 98,
        "pe": 20
      },
      {
        "pdMin": 99,
        "pdMax": 101,
        "pe": 21
      },
      {
        "pdMin": 102,
        "pdMax": 104,
        "pe": 22
      },
      {
        "pdMin": 105,
        "pdMax": 107,
        "pe": 23
      },
      {
        "pdMin": 108,
        "pdMax": 109,
        "pe": 24
      },
      {
        "pdMin": 110,
        "pdMax": 111,
        "pe": 25
      },
      {
        "pdMin": 112,
        "pdMax": 113,
        "pe": 26
      },
      {
        "pdMin": 114,
        "pdMax": 115,
        "pe": 27
      },
      {
        "pdMin": 116,
        "pdMax": 117,
        "pe": 28
      }
    ],
    "12_4": [
      {
        "pdMin": 0,
        "pdMax": 4,
        "pe": 1
      },
      {
        "pdMin": 5,
        "pdMax": 9,
        "pe": 2
      },
      {
        "pdMin": 10,
        "pdMax": 15,
        "pe": 3
      },
      {
        "pdMin": 16,
        "pdMax": 20,
        "pe": 4
      },
      {
        "pdMin": 21,
        "pdMax": 25,
        "pe": 5
      },
      {
        "pdMin": 26,
        "pdMax": 30,
        "pe": 6
      },
      {
        "pdMin": 31,
        "pdMax": 35,
        "pe": 7
      },
      {
        "pdMin": 36,
        "pdMax": 40,
        "pe": 8
      },
      {
        "pdMin": 41,
        "pdMax": 46,
        "pe": 9
      },
      {
        "pdMin": 47,
        "pdMax": 51,
        "pe": 10
      },
      {
        "pdMin": 52,
        "pdMax": 56,
        "pe": 11
      },
      {
        "pdMin": 57,
        "pdMax": 61,
        "pe": 12
      },
      {
        "pdMin": 62,
        "pdMax": 66,
        "pe": 13
      },
      {
        "pdMin": 67,
        "pdMax": 71,
        "pe": 14
      },
      {
        "pdMin": 72,
        "pdMax": 77,
        "pe": 15
      },
      {
        "pdMin": 78,
        "pdMax": 82,
        "pe": 16
      },
      {
        "pdMin": 83,
        "pdMax": 88,
        "pe": 17
      },
      {
        "pdMin": 89,
        "pdMax": 92,
        "pe": 18
      },
      {
        "pdMin": 93,
        "pdMax": 96,
        "pe": 19
      },
      {
        "pdMin": 97,
        "pdMax": 99,
        "pe": 20
      },
      {
        "pdMin": 100,
        "pdMax": 102,
        "pe": 21
      },
      {
        "pdMin": 103,
        "pdMax": 105,
        "pe": 22
      },
      {
        "pdMin": 106,
        "pdMax": 108,
        "pe": 23
      },
      {
        "pdMin": 109,
        "pdMax": 110,
        "pe": 24
      },
      {
        "pdMin": 111,
        "pdMax": 112,
        "pe": 25
      },
      {
        "pdMin": 113,
        "pdMax": 114,
        "pe": 26
      },
      {
        "pdMin": 115,
        "pdMax": 116,
        "pe": 27
      },
      {
        "pdMin": 117,
        "pdMax": 117,
        "pe": 28
      }
    ],
    "12_8": [
      {
        "pdMin": 0,
        "pdMax": 4,
        "pe": 1
      },
      {
        "pdMin": 5,
        "pdMax": 10,
        "pe": 2
      },
      {
        "pdMin": 11,
        "pdMax": 15,
        "pe": 3
      },
      {
        "pdMin": 16,
        "pdMax": 20,
        "pe": 4
      },
      {
        "pdMin": 21,
        "pdMax": 25,
        "pe": 5
      },
      {
        "pdMin": 26,
        "pdMax": 31,
        "pe": 6
      },
      {
        "pdMin": 32,
        "pdMax": 36,
        "pe": 7
      },
      {
        "pdMin": 37,
        "pdMax": 41,
        "pe": 8
      },
      {
        "pdMin": 42,
        "pdMax": 47,
        "pe": 9
      },
      {
        "pdMin": 48,
        "pdMax": 52,
        "pe": 10
      },
      {
        "pdMin": 53,
        "pdMax": 57,
        "pe": 11
      },
      {
        "pdMin": 58,
        "pdMax": 63,
        "pe": 12
      },
      {
        "pdMin": 64,
        "pdMax": 68,
        "pe": 13
      },
      {
        "pdMin": 69,
        "pdMax": 73,
        "pe": 14
      },
      {
        "pdMin": 74,
        "pdMax": 78,
        "pe": 15
      },
      {
        "pdMin": 79,
        "pdMax": 84,
        "pe": 16
      },
      {
        "pdMin": 85,
        "pdMax": 90,
        "pe": 17
      },
      {
        "pdMin": 91,
        "pdMax": 94,
        "pe": 18
      },
      {
        "pdMin": 95,
        "pdMax": 97,
        "pe": 19
      },
      {
        "pdMin": 98,
        "pdMax": 100,
        "pe": 20
      },
      {
        "pdMin": 101,
        "pdMax": 103,
        "pe": 21
      },
      {
        "pdMin": 104,
        "pdMax": 106,
        "pe": 22
      },
      {
        "pdMin": 107,
        "pdMax": 109,
        "pe": 23
      },
      {
        "pdMin": 110,
        "pdMax": 111,
        "pe": 24
      },
      {
        "pdMin": 112,
        "pdMax": 113,
        "pe": 25
      },
      {
        "pdMin": 114,
        "pdMax": 115,
        "pe": 26
      },
      {
        "pdMin": 116,
        "pdMax": 117,
        "pe": 27
      }
    ],
    "13_0": [
      {
        "pdMin": 0,
        "pdMax": 4,
        "pe": 1
      },
      {
        "pdMin": 5,
        "pdMax": 10,
        "pe": 2
      },
      {
        "pdMin": 11,
        "pdMax": 15,
        "pe": 3
      },
      {
        "pdMin": 16,
        "pdMax": 21,
        "pe": 4
      },
      {
        "pdMin": 22,
        "pdMax": 26,
        "pe": 5
      },
      {
        "pdMin": 27,
        "pdMax": 31,
        "pe": 6
      },
      {
        "pdMin": 32,
        "pdMax": 37,
        "pe": 7
      },
      {
        "pdMin": 38,
        "pdMax": 42,
        "pe": 8
      },
      {
        "pdMin": 43,
        "pdMax": 48,
        "pe": 9
      },
      {
        "pdMin": 49,
        "pdMax": 53,
        "pe": 10
      },
      {
        "pdMin": 54,
        "pdMax": 59,
        "pe": 11
      },
      {
        "pdMin": 60,
        "pdMax": 64,
        "pe": 12
      },
      {
        "pdMin": 65,
        "pdMax": 69,
        "pe": 13
      },
      {
        "pdMin": 70,
        "pdMax": 75,
        "pe": 14
      },
      {
        "pdMin": 76,
        "pdMax": 80,
        "pe": 15
      },
      {
        "pdMin": 81,
        "pdMax": 86,
        "pe": 16
      },
      {
        "pdMin": 87,
        "pdMax": 92,
        "pe": 17
      },
      {
        "pdMin": 93,
        "pdMax": 95,
        "pe": 18
      },
      {
        "pdMin": 96,
        "pdMax": 98,
        "pe": 19
      },
      {
        "pdMin": 99,
        "pdMax": 101,
        "pe": 20
      },
      {
        "pdMin": 102,
        "pdMax": 104,
        "pe": 21
      },
      {
        "pdMin": 105,
        "pdMax": 107,
        "pe": 22
      },
      {
        "pdMin": 108,
        "pdMax": 110,
        "pe": 23
      },
      {
        "pdMin": 111,
        "pdMax": 112,
        "pe": 24
      },
      {
        "pdMin": 113,
        "pdMax": 114,
        "pe": 25
      },
      {
        "pdMin": 115,
        "pdMax": 116,
        "pe": 26
      },
      {
        "pdMin": 117,
        "pdMax": 117,
        "pe": 27
      }
    ],
    "13_4": [
      {
        "pdMin": 0,
        "pdMax": 5,
        "pe": 1
      },
      {
        "pdMin": 6,
        "pdMax": 10,
        "pe": 2
      },
      {
        "pdMin": 11,
        "pdMax": 16,
        "pe": 3
      },
      {
        "pdMin": 17,
        "pdMax": 21,
        "pe": 4
      },
      {
        "pdMin": 22,
        "pdMax": 27,
        "pe": 5
      },
      {
        "pdMin": 28,
        "pdMax": 32,
        "pe": 6
      },
      {
        "pdMin": 33,
        "pdMax": 38,
        "pe": 7
      },
      {
        "pdMin": 39,
        "pdMax": 43,
        "pe": 8
      },
      {
        "pdMin": 44,
        "pdMax": 49,
        "pe": 9
      },
      {
        "pdMin": 50,
        "pdMax": 54,
        "pe": 10
      },
      {
        "pdMin": 55,
        "pdMax": 60,
        "pe": 11
      },
      {
        "pdMin": 61,
        "pdMax": 65,
        "pe": 12
      },
      {
        "pdMin": 66,
        "pdMax": 71,
        "pe": 13
      },
      {
        "pdMin": 72,
        "pdMax": 76,
        "pe": 14
      },
      {
        "pdMin": 77,
        "pdMax": 82,
        "pe": 15
      },
      {
        "pdMin": 83,
        "pdMax": 87,
        "pe": 16
      },
      {
        "pdMin": 88,
        "pdMax": 94,
        "pe": 17
      },
      {
        "pdMin": 95,
        "pdMax": 97,
        "pe": 18
      },
      {
        "pdMin": 98,
        "pdMax": 100,
        "pe": 19
      },
      {
        "pdMin": 101,
        "pdMax": 103,
        "pe": 20
      },
      {
        "pdMin": 104,
        "pdMax": 106,
        "pe": 21
      },
      {
        "pdMin": 107,
        "pdMax": 108,
        "pe": 22
      },
      {
        "pdMin": 109,
        "pdMax": 111,
        "pe": 23
      },
      {
        "pdMin": 112,
        "pdMax": 113,
        "pe": 24
      },
      {
        "pdMin": 114,
        "pdMax": 115,
        "pe": 25
      },
      {
        "pdMin": 116,
        "pdMax": 116,
        "pe": 26
      },
      {
        "pdMin": 117,
        "pdMax": 117,
        "pe": 27
      }
    ],
    "13_8": [
      {
        "pdMin": 0,
        "pdMax": 5,
        "pe": 1
      },
      {
        "pdMin": 6,
        "pdMax": 10,
        "pe": 2
      },
      {
        "pdMin": 11,
        "pdMax": 16,
        "pe": 3
      },
      {
        "pdMin": 17,
        "pdMax": 21,
        "pe": 4
      },
      {
        "pdMin": 22,
        "pdMax": 27,
        "pe": 5
      },
      {
        "pdMin": 28,
        "pdMax": 33,
        "pe": 6
      },
      {
        "pdMin": 34,
        "pdMax": 38,
        "pe": 7
      },
      {
        "pdMin": 39,
        "pdMax": 44,
        "pe": 8
      },
      {
        "pdMin": 45,
        "pdMax": 49,
        "pe": 9
      },
      {
        "pdMin": 50,
        "pdMax": 55,
        "pe": 10
      },
      {
        "pdMin": 56,
        "pdMax": 60,
        "pe": 11
      },
      {
        "pdMin": 61,
        "pdMax": 66,
        "pe": 12
      },
      {
        "pdMin": 67,
        "pdMax": 72,
        "pe": 13
      },
      {
        "pdMin": 73,
        "pdMax": 77,
        "pe": 14
      },
      {
        "pdMin": 78,
        "pdMax": 83,
        "pe": 15
      },
      {
        "pdMin": 84,
        "pdMax": 88,
        "pe": 16
      },
      {
        "pdMin": 89,
        "pdMax": 95,
        "pe": 17
      },
      {
        "pdMin": 96,
        "pdMax": 98,
        "pe": 18
      },
      {
        "pdMin": 99,
        "pdMax": 101,
        "pe": 19
      },
      {
        "pdMin": 102,
        "pdMax": 104,
        "pe": 20
      },
      {
        "pdMin": 105,
        "pdMax": 107,
        "pe": 21
      },
      {
        "pdMin": 108,
        "pdMax": 110,
        "pe": 22
      },
      {
        "pdMin": 111,
        "pdMax": 112,
        "pe": 23
      },
      {
        "pdMin": 113,
        "pdMax": 114,
        "pe": 24
      },
      {
        "pdMin": 115,
        "pdMax": 116,
        "pe": 25
      },
      {
        "pdMin": 117,
        "pdMax": 117,
        "pe": 26
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 27
      }
    ],
    "14_0": [
      {
        "pdMin": 0,
        "pdMax": 5,
        "pe": 1
      },
      {
        "pdMin": 6,
        "pdMax": 10,
        "pe": 2
      },
      {
        "pdMin": 11,
        "pdMax": 16,
        "pe": 3
      },
      {
        "pdMin": 17,
        "pdMax": 22,
        "pe": 4
      },
      {
        "pdMin": 23,
        "pdMax": 27,
        "pe": 5
      },
      {
        "pdMin": 28,
        "pdMax": 33,
        "pe": 6
      },
      {
        "pdMin": 34,
        "pdMax": 39,
        "pe": 7
      },
      {
        "pdMin": 40,
        "pdMax": 44,
        "pe": 8
      },
      {
        "pdMin": 45,
        "pdMax": 50,
        "pe": 9
      },
      {
        "pdMin": 51,
        "pdMax": 55,
        "pe": 10
      },
      {
        "pdMin": 56,
        "pdMax": 61,
        "pe": 11
      },
      {
        "pdMin": 62,
        "pdMax": 67,
        "pe": 12
      },
      {
        "pdMin": 68,
        "pdMax": 72,
        "pe": 13
      },
      {
        "pdMin": 73,
        "pdMax": 78,
        "pe": 14
      },
      {
        "pdMin": 79,
        "pdMax": 84,
        "pe": 15
      },
      {
        "pdMin": 85,
        "pdMax": 89,
        "pe": 16
      },
      {
        "pdMin": 90,
        "pdMax": 96,
        "pe": 17
      },
      {
        "pdMin": 97,
        "pdMax": 100,
        "pe": 18
      },
      {
        "pdMin": 101,
        "pdMax": 103,
        "pe": 19
      },
      {
        "pdMin": 104,
        "pdMax": 106,
        "pe": 20
      },
      {
        "pdMin": 107,
        "pdMax": 109,
        "pe": 21
      },
      {
        "pdMin": 110,
        "pdMax": 111,
        "pe": 22
      },
      {
        "pdMin": 112,
        "pdMax": 113,
        "pe": 23
      },
      {
        "pdMin": 114,
        "pdMax": 115,
        "pe": 24
      },
      {
        "pdMin": 116,
        "pdMax": 117,
        "pe": 25
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 27
      },
      {
        "pdMin": 4,
        "pdMax": 4,
        "pe": 28
      }
    ],
    "14_4": [
      {
        "pdMin": 0,
        "pdMax": 5,
        "pe": 1
      },
      {
        "pdMin": 6,
        "pdMax": 10,
        "pe": 2
      },
      {
        "pdMin": 11,
        "pdMax": 16,
        "pe": 3
      },
      {
        "pdMin": 17,
        "pdMax": 22,
        "pe": 4
      },
      {
        "pdMin": 23,
        "pdMax": 28,
        "pe": 5
      },
      {
        "pdMin": 29,
        "pdMax": 33,
        "pe": 6
      },
      {
        "pdMin": 34,
        "pdMax": 39,
        "pe": 7
      },
      {
        "pdMin": 40,
        "pdMax": 45,
        "pe": 8
      },
      {
        "pdMin": 46,
        "pdMax": 50,
        "pe": 9
      },
      {
        "pdMin": 51,
        "pdMax": 56,
        "pe": 10
      },
      {
        "pdMin": 57,
        "pdMax": 62,
        "pe": 11
      },
      {
        "pdMin": 63,
        "pdMax": 67,
        "pe": 12
      },
      {
        "pdMin": 68,
        "pdMax": 73,
        "pe": 13
      },
      {
        "pdMin": 74,
        "pdMax": 79,
        "pe": 14
      },
      {
        "pdMin": 80,
        "pdMax": 85,
        "pe": 15
      },
      {
        "pdMin": 86,
        "pdMax": 90,
        "pe": 16
      },
      {
        "pdMin": 91,
        "pdMax": 97,
        "pe": 17
      },
      {
        "pdMin": 98,
        "pdMax": 101,
        "pe": 18
      },
      {
        "pdMin": 102,
        "pdMax": 104,
        "pe": 19
      },
      {
        "pdMin": 105,
        "pdMax": 107,
        "pe": 20
      },
      {
        "pdMin": 108,
        "pdMax": 110,
        "pe": 21
      },
      {
        "pdMin": 111,
        "pdMax": 112,
        "pe": 22
      },
      {
        "pdMin": 113,
        "pdMax": 114,
        "pe": 23
      },
      {
        "pdMin": 115,
        "pdMax": 116,
        "pe": 24
      },
      {
        "pdMin": 117,
        "pdMax": 117,
        "pe": 25
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 27
      },
      {
        "pdMin": 4,
        "pdMax": 4,
        "pe": 28
      }
    ],
    "14_8": [
      {
        "pdMin": 0,
        "pdMax": 5,
        "pe": 1
      },
      {
        "pdMin": 6,
        "pdMax": 11,
        "pe": 2
      },
      {
        "pdMin": 12,
        "pdMax": 16,
        "pe": 3
      },
      {
        "pdMin": 17,
        "pdMax": 22,
        "pe": 4
      },
      {
        "pdMin": 23,
        "pdMax": 28,
        "pe": 5
      },
      {
        "pdMin": 29,
        "pdMax": 34,
        "pe": 6
      },
      {
        "pdMin": 35,
        "pdMax": 39,
        "pe": 7
      },
      {
        "pdMin": 40,
        "pdMax": 45,
        "pe": 8
      },
      {
        "pdMin": 46,
        "pdMax": 51,
        "pe": 9
      },
      {
        "pdMin": 52,
        "pdMax": 57,
        "pe": 10
      },
      {
        "pdMin": 58,
        "pdMax": 62,
        "pe": 11
      },
      {
        "pdMin": 63,
        "pdMax": 68,
        "pe": 12
      },
      {
        "pdMin": 69,
        "pdMax": 74,
        "pe": 13
      },
      {
        "pdMin": 75,
        "pdMax": 80,
        "pe": 14
      },
      {
        "pdMin": 81,
        "pdMax": 85,
        "pe": 15
      },
      {
        "pdMin": 86,
        "pdMax": 91,
        "pe": 16
      },
      {
        "pdMin": 92,
        "pdMax": 98,
        "pe": 17
      },
      {
        "pdMin": 99,
        "pdMax": 102,
        "pe": 18
      },
      {
        "pdMin": 103,
        "pdMax": 105,
        "pe": 19
      },
      {
        "pdMin": 106,
        "pdMax": 108,
        "pe": 20
      },
      {
        "pdMin": 109,
        "pdMax": 111,
        "pe": 21
      },
      {
        "pdMin": 112,
        "pdMax": 113,
        "pe": 22
      },
      {
        "pdMin": 114,
        "pdMax": 115,
        "pe": 23
      },
      {
        "pdMin": 116,
        "pdMax": 117,
        "pe": 24
      },
      {
        "pdMin": 4,
        "pdMax": 4,
        "pe": 28
      }
    ],
    "15_0": [
      {
        "pdMin": 0,
        "pdMax": 5,
        "pe": 1
      },
      {
        "pdMin": 6,
        "pdMax": 11,
        "pe": 2
      },
      {
        "pdMin": 12,
        "pdMax": 16,
        "pe": 3
      },
      {
        "pdMin": 17,
        "pdMax": 22,
        "pe": 4
      },
      {
        "pdMin": 23,
        "pdMax": 28,
        "pe": 5
      },
      {
        "pdMin": 29,
        "pdMax": 34,
        "pe": 6
      },
      {
        "pdMin": 35,
        "pdMax": 40,
        "pe": 7
      },
      {
        "pdMin": 41,
        "pdMax": 46,
        "pe": 8
      },
      {
        "pdMin": 47,
        "pdMax": 51,
        "pe": 9
      },
      {
        "pdMin": 52,
        "pdMax": 57,
        "pe": 10
      },
      {
        "pdMin": 58,
        "pdMax": 63,
        "pe": 11
      },
      {
        "pdMin": 64,
        "pdMax": 69,
        "pe": 12
      },
      {
        "pdMin": 70,
        "pdMax": 75,
        "pe": 13
      },
      {
        "pdMin": 76,
        "pdMax": 81,
        "pe": 14
      },
      {
        "pdMin": 82,
        "pdMax": 86,
        "pe": 15
      },
      {
        "pdMin": 87,
        "pdMax": 92,
        "pe": 16
      },
      {
        "pdMin": 93,
        "pdMax": 99,
        "pe": 17
      },
      {
        "pdMin": 100,
        "pdMax": 103,
        "pe": 18
      },
      {
        "pdMin": 104,
        "pdMax": 106,
        "pe": 19
      },
      {
        "pdMin": 107,
        "pdMax": 109,
        "pe": 20
      },
      {
        "pdMin": 110,
        "pdMax": 112,
        "pe": 21
      },
      {
        "pdMin": 113,
        "pdMax": 114,
        "pe": 22
      },
      {
        "pdMin": 115,
        "pdMax": 116,
        "pe": 23
      },
      {
        "pdMin": 117,
        "pdMax": 117,
        "pe": 24
      },
      {
        "pdMin": 4,
        "pdMax": 4,
        "pe": 28
      }
    ],
    "15_4": [
      {
        "pdMin": 0,
        "pdMax": 5,
        "pe": 1
      },
      {
        "pdMin": 6,
        "pdMax": 11,
        "pe": 2
      },
      {
        "pdMin": 12,
        "pdMax": 17,
        "pe": 3
      },
      {
        "pdMin": 18,
        "pdMax": 23,
        "pe": 4
      },
      {
        "pdMin": 24,
        "pdMax": 28,
        "pe": 5
      },
      {
        "pdMin": 29,
        "pdMax": 34,
        "pe": 6
      },
      {
        "pdMin": 35,
        "pdMax": 40,
        "pe": 7
      },
      {
        "pdMin": 41,
        "pdMax": 46,
        "pe": 8
      },
      {
        "pdMin": 47,
        "pdMax": 52,
        "pe": 9
      },
      {
        "pdMin": 53,
        "pdMax": 58,
        "pe": 10
      },
      {
        "pdMin": 59,
        "pdMax": 64,
        "pe": 11
      },
      {
        "pdMin": 65,
        "pdMax": 70,
        "pe": 12
      },
      {
        "pdMin": 71,
        "pdMax": 75,
        "pe": 13
      },
      {
        "pdMin": 76,
        "pdMax": 81,
        "pe": 14
      },
      {
        "pdMin": 82,
        "pdMax": 87,
        "pe": 15
      },
      {
        "pdMin": 88,
        "pdMax": 93,
        "pe": 16
      },
      {
        "pdMin": 94,
        "pdMax": 100,
        "pe": 17
      },
      {
        "pdMin": 101,
        "pdMax": 104,
        "pe": 18
      },
      {
        "pdMin": 105,
        "pdMax": 107,
        "pe": 19
      },
      {
        "pdMin": 108,
        "pdMax": 110,
        "pe": 20
      },
      {
        "pdMin": 111,
        "pdMax": 113,
        "pe": 21
      },
      {
        "pdMin": 114,
        "pdMax": 115,
        "pe": 22
      },
      {
        "pdMin": 116,
        "pdMax": 116,
        "pe": 23
      },
      {
        "pdMin": 117,
        "pdMax": 117,
        "pe": 24
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 25
      },
      {
        "pdMin": 4,
        "pdMax": 4,
        "pe": 28
      }
    ],
    "15_8": [
      {
        "pdMin": 0,
        "pdMax": 5,
        "pe": 1
      },
      {
        "pdMin": 6,
        "pdMax": 11,
        "pe": 2
      },
      {
        "pdMin": 12,
        "pdMax": 17,
        "pe": 3
      },
      {
        "pdMin": 18,
        "pdMax": 23,
        "pe": 4
      },
      {
        "pdMin": 24,
        "pdMax": 29,
        "pe": 5
      },
      {
        "pdMin": 30,
        "pdMax": 35,
        "pe": 6
      },
      {
        "pdMin": 36,
        "pdMax": 41,
        "pe": 7
      },
      {
        "pdMin": 42,
        "pdMax": 47,
        "pe": 8
      },
      {
        "pdMin": 48,
        "pdMax": 52,
        "pe": 9
      },
      {
        "pdMin": 53,
        "pdMax": 58,
        "pe": 10
      },
      {
        "pdMin": 59,
        "pdMax": 64,
        "pe": 11
      },
      {
        "pdMin": 65,
        "pdMax": 70,
        "pe": 12
      },
      {
        "pdMin": 71,
        "pdMax": 76,
        "pe": 13
      },
      {
        "pdMin": 77,
        "pdMax": 82,
        "pe": 14
      },
      {
        "pdMin": 83,
        "pdMax": 88,
        "pe": 15
      },
      {
        "pdMin": 89,
        "pdMax": 94,
        "pe": 16
      },
      {
        "pdMin": 95,
        "pdMax": 101,
        "pe": 17
      },
      {
        "pdMin": 102,
        "pdMax": 105,
        "pe": 18
      },
      {
        "pdMin": 106,
        "pdMax": 108,
        "pe": 19
      },
      {
        "pdMin": 109,
        "pdMax": 111,
        "pe": 20
      },
      {
        "pdMin": 112,
        "pdMax": 113,
        "pe": 21
      },
      {
        "pdMin": 114,
        "pdMax": 115,
        "pe": 22
      },
      {
        "pdMin": 116,
        "pdMax": 116,
        "pe": 23
      },
      {
        "pdMin": 117,
        "pdMax": 117,
        "pe": 24
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 26
      },
      {
        "pdMin": 4,
        "pdMax": 4,
        "pe": 28
      }
    ],
    "16_0": [
      {
        "pdMin": 0,
        "pdMax": 5,
        "pe": 1
      },
      {
        "pdMin": 6,
        "pdMax": 11,
        "pe": 2
      },
      {
        "pdMin": 12,
        "pdMax": 17,
        "pe": 3
      },
      {
        "pdMin": 18,
        "pdMax": 23,
        "pe": 4
      },
      {
        "pdMin": 24,
        "pdMax": 29,
        "pe": 5
      },
      {
        "pdMin": 30,
        "pdMax": 35,
        "pe": 6
      },
      {
        "pdMin": 36,
        "pdMax": 41,
        "pe": 7
      },
      {
        "pdMin": 42,
        "pdMax": 47,
        "pe": 8
      },
      {
        "pdMin": 48,
        "pdMax": 53,
        "pe": 9
      },
      {
        "pdMin": 54,
        "pdMax": 59,
        "pe": 10
      },
      {
        "pdMin": 60,
        "pdMax": 65,
        "pe": 11
      },
      {
        "pdMin": 66,
        "pdMax": 71,
        "pe": 12
      },
      {
        "pdMin": 72,
        "pdMax": 77,
        "pe": 13
      },
      {
        "pdMin": 78,
        "pdMax": 83,
        "pe": 14
      },
      {
        "pdMin": 84,
        "pdMax": 89,
        "pe": 15
      },
      {
        "pdMin": 90,
        "pdMax": 95,
        "pe": 16
      },
      {
        "pdMin": 96,
        "pdMax": 102,
        "pe": 17
      },
      {
        "pdMin": 103,
        "pdMax": 106,
        "pe": 18
      },
      {
        "pdMin": 107,
        "pdMax": 109,
        "pe": 19
      },
      {
        "pdMin": 110,
        "pdMax": 112,
        "pe": 20
      },
      {
        "pdMin": 113,
        "pdMax": 114,
        "pe": 21
      },
      {
        "pdMin": 115,
        "pdMax": 115,
        "pe": 22
      },
      {
        "pdMin": 116,
        "pdMax": 116,
        "pe": 23
      },
      {
        "pdMin": 117,
        "pdMax": 117,
        "pe": 24
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 26
      },
      {
        "pdMin": 4,
        "pdMax": 4,
        "pe": 28
      }
    ],
    "16_4": [
      {
        "pdMin": 0,
        "pdMax": 5,
        "pe": 1
      },
      {
        "pdMin": 6,
        "pdMax": 11,
        "pe": 2
      },
      {
        "pdMin": 12,
        "pdMax": 17,
        "pe": 3
      },
      {
        "pdMin": 18,
        "pdMax": 23,
        "pe": 4
      },
      {
        "pdMin": 24,
        "pdMax": 29,
        "pe": 5
      },
      {
        "pdMin": 30,
        "pdMax": 35,
        "pe": 6
      },
      {
        "pdMin": 36,
        "pdMax": 41,
        "pe": 7
      },
      {
        "pdMin": 42,
        "pdMax": 47,
        "pe": 8
      },
      {
        "pdMin": 48,
        "pdMax": 54,
        "pe": 9
      },
      {
        "pdMin": 55,
        "pdMax": 60,
        "pe": 10
      },
      {
        "pdMin": 61,
        "pdMax": 66,
        "pe": 11
      },
      {
        "pdMin": 67,
        "pdMax": 72,
        "pe": 12
      },
      {
        "pdMin": 73,
        "pdMax": 78,
        "pe": 13
      },
      {
        "pdMin": 79,
        "pdMax": 84,
        "pe": 14
      },
      {
        "pdMin": 85,
        "pdMax": 90,
        "pe": 15
      },
      {
        "pdMin": 91,
        "pdMax": 96,
        "pe": 16
      },
      {
        "pdMin": 97,
        "pdMax": 103,
        "pe": 17
      },
      {
        "pdMin": 104,
        "pdMax": 107,
        "pe": 18
      },
      {
        "pdMin": 108,
        "pdMax": 110,
        "pe": 19
      },
      {
        "pdMin": 111,
        "pdMax": 113,
        "pe": 20
      },
      {
        "pdMin": 114,
        "pdMax": 115,
        "pe": 21
      },
      {
        "pdMin": 116,
        "pdMax": 116,
        "pe": 22
      },
      {
        "pdMin": 117,
        "pdMax": 117,
        "pe": 23
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 26
      },
      {
        "pdMin": 4,
        "pdMax": 4,
        "pe": 28
      }
    ],
    "16_8": [
      {
        "pdMin": 0,
        "pdMax": 5,
        "pe": 1
      },
      {
        "pdMin": 6,
        "pdMax": 11,
        "pe": 2
      },
      {
        "pdMin": 12,
        "pdMax": 17,
        "pe": 3
      },
      {
        "pdMin": 18,
        "pdMax": 23,
        "pe": 4
      },
      {
        "pdMin": 24,
        "pdMax": 29,
        "pe": 5
      },
      {
        "pdMin": 30,
        "pdMax": 35,
        "pe": 6
      },
      {
        "pdMin": 36,
        "pdMax": 41,
        "pe": 7
      },
      {
        "pdMin": 42,
        "pdMax": 47,
        "pe": 8
      },
      {
        "pdMin": 48,
        "pdMax": 54,
        "pe": 9
      },
      {
        "pdMin": 55,
        "pdMax": 60,
        "pe": 10
      },
      {
        "pdMin": 61,
        "pdMax": 66,
        "pe": 11
      },
      {
        "pdMin": 67,
        "pdMax": 72,
        "pe": 12
      },
      {
        "pdMin": 73,
        "pdMax": 78,
        "pe": 13
      },
      {
        "pdMin": 79,
        "pdMax": 84,
        "pe": 14
      },
      {
        "pdMin": 85,
        "pdMax": 90,
        "pe": 15
      },
      {
        "pdMin": 91,
        "pdMax": 96,
        "pe": 16
      },
      {
        "pdMin": 97,
        "pdMax": 103,
        "pe": 17
      },
      {
        "pdMin": 104,
        "pdMax": 107,
        "pe": 18
      },
      {
        "pdMin": 108,
        "pdMax": 110,
        "pe": 19
      },
      {
        "pdMin": 111,
        "pdMax": 113,
        "pe": 20
      },
      {
        "pdMin": 114,
        "pdMax": 115,
        "pe": 21
      },
      {
        "pdMin": 116,
        "pdMax": 116,
        "pe": 22
      },
      {
        "pdMin": 117,
        "pdMax": 117,
        "pe": 23
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 26
      },
      {
        "pdMin": 4,
        "pdMax": 4,
        "pe": 28
      }
    ]
  },
  "voc": {
    "6_0": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 4
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 5
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 6
      },
      {
        "pdMin": 10,
        "pdMax": 10,
        "pe": 7
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 8
      },
      {
        "pdMin": 13,
        "pdMax": 13,
        "pe": 9
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 10
      },
      {
        "pdMin": 16,
        "pdMax": 16,
        "pe": 11
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 12
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 13
      },
      {
        "pdMin": 21,
        "pdMax": 21,
        "pe": 14
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 15
      },
      {
        "pdMin": 24,
        "pdMax": 24,
        "pe": 16
      },
      {
        "pdMin": 25,
        "pdMax": 27,
        "pe": 17
      },
      {
        "pdMin": 28,
        "pdMax": 30,
        "pe": 18
      },
      {
        "pdMin": 31,
        "pdMax": 32,
        "pe": 19
      },
      {
        "pdMin": 33,
        "pdMax": 34,
        "pe": 20
      },
      {
        "pdMin": 35,
        "pdMax": 36,
        "pe": 21
      },
      {
        "pdMin": 37,
        "pdMax": 38,
        "pe": 22
      },
      {
        "pdMin": 39,
        "pdMax": 40,
        "pe": 23
      },
      {
        "pdMin": 41,
        "pdMax": 42,
        "pe": 24
      },
      {
        "pdMin": 43,
        "pdMax": 44,
        "pe": 25
      },
      {
        "pdMin": 45,
        "pdMax": 46,
        "pe": 26
      },
      {
        "pdMin": 47,
        "pdMax": 48,
        "pe": 27
      },
      {
        "pdMin": 49,
        "pdMax": 54,
        "pe": 28
      }
    ],
    "6_4": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 4
      },
      {
        "pdMin": 7,
        "pdMax": 7,
        "pe": 5
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 6
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 7
      },
      {
        "pdMin": 12,
        "pdMax": 12,
        "pe": 8
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 9
      },
      {
        "pdMin": 15,
        "pdMax": 15,
        "pe": 10
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 11
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 12
      },
      {
        "pdMin": 20,
        "pdMax": 20,
        "pe": 13
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 14
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 15
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 16
      },
      {
        "pdMin": 26,
        "pdMax": 28,
        "pe": 17
      },
      {
        "pdMin": 29,
        "pdMax": 31,
        "pe": 18
      },
      {
        "pdMin": 32,
        "pdMax": 33,
        "pe": 19
      },
      {
        "pdMin": 34,
        "pdMax": 35,
        "pe": 20
      },
      {
        "pdMin": 36,
        "pdMax": 37,
        "pe": 21
      },
      {
        "pdMin": 38,
        "pdMax": 39,
        "pe": 22
      },
      {
        "pdMin": 40,
        "pdMax": 41,
        "pe": 23
      },
      {
        "pdMin": 42,
        "pdMax": 43,
        "pe": 24
      },
      {
        "pdMin": 44,
        "pdMax": 45,
        "pe": 25
      },
      {
        "pdMin": 46,
        "pdMax": 47,
        "pe": 26
      },
      {
        "pdMin": 48,
        "pdMax": 49,
        "pe": 27
      },
      {
        "pdMin": 50,
        "pdMax": 54,
        "pe": 28
      }
    ],
    "6_8": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 4
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 5
      },
      {
        "pdMin": 9,
        "pdMax": 9,
        "pe": 6
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 7
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 8
      },
      {
        "pdMin": 14,
        "pdMax": 14,
        "pe": 9
      },
      {
        "pdMin": 15,
        "pdMax": 16,
        "pe": 10
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 11
      },
      {
        "pdMin": 19,
        "pdMax": 19,
        "pe": 12
      },
      {
        "pdMin": 20,
        "pdMax": 21,
        "pe": 13
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 14
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 15
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 16
      },
      {
        "pdMin": 27,
        "pdMax": 29,
        "pe": 17
      },
      {
        "pdMin": 30,
        "pdMax": 32,
        "pe": 18
      },
      {
        "pdMin": 33,
        "pdMax": 34,
        "pe": 19
      },
      {
        "pdMin": 35,
        "pdMax": 36,
        "pe": 20
      },
      {
        "pdMin": 37,
        "pdMax": 38,
        "pe": 21
      },
      {
        "pdMin": 39,
        "pdMax": 40,
        "pe": 22
      },
      {
        "pdMin": 41,
        "pdMax": 42,
        "pe": 23
      },
      {
        "pdMin": 43,
        "pdMax": 44,
        "pe": 24
      },
      {
        "pdMin": 45,
        "pdMax": 46,
        "pe": 25
      },
      {
        "pdMin": 47,
        "pdMax": 48,
        "pe": 26
      },
      {
        "pdMin": 49,
        "pdMax": 50,
        "pe": 27
      },
      {
        "pdMin": 51,
        "pdMax": 54,
        "pe": 28
      }
    ],
    "7_0": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 4
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 5
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 6
      },
      {
        "pdMin": 11,
        "pdMax": 11,
        "pe": 7
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 8
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 9
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 10
      },
      {
        "pdMin": 18,
        "pdMax": 18,
        "pe": 11
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 12
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 13
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 14
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 15
      },
      {
        "pdMin": 26,
        "pdMax": 27,
        "pe": 16
      },
      {
        "pdMin": 28,
        "pdMax": 30,
        "pe": 17
      },
      {
        "pdMin": 31,
        "pdMax": 33,
        "pe": 18
      },
      {
        "pdMin": 34,
        "pdMax": 35,
        "pe": 19
      },
      {
        "pdMin": 36,
        "pdMax": 37,
        "pe": 20
      },
      {
        "pdMin": 38,
        "pdMax": 39,
        "pe": 21
      },
      {
        "pdMin": 40,
        "pdMax": 41,
        "pe": 22
      },
      {
        "pdMin": 42,
        "pdMax": 43,
        "pe": 23
      },
      {
        "pdMin": 44,
        "pdMax": 45,
        "pe": 24
      },
      {
        "pdMin": 46,
        "pdMax": 47,
        "pe": 25
      },
      {
        "pdMin": 48,
        "pdMax": 49,
        "pe": 26
      },
      {
        "pdMin": 50,
        "pdMax": 51,
        "pe": 27
      },
      {
        "pdMin": 52,
        "pdMax": 54,
        "pe": 28
      }
    ],
    "7_4": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 4
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 5
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 6
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 7
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 8
      },
      {
        "pdMin": 15,
        "pdMax": 15,
        "pe": 9
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 10
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 11
      },
      {
        "pdMin": 20,
        "pdMax": 21,
        "pe": 12
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 13
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 14
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 15
      },
      {
        "pdMin": 27,
        "pdMax": 28,
        "pe": 16
      },
      {
        "pdMin": 29,
        "pdMax": 31,
        "pe": 17
      },
      {
        "pdMin": 32,
        "pdMax": 34,
        "pe": 18
      },
      {
        "pdMin": 35,
        "pdMax": 36,
        "pe": 19
      },
      {
        "pdMin": 37,
        "pdMax": 38,
        "pe": 20
      },
      {
        "pdMin": 39,
        "pdMax": 40,
        "pe": 21
      },
      {
        "pdMin": 41,
        "pdMax": 42,
        "pe": 22
      },
      {
        "pdMin": 43,
        "pdMax": 44,
        "pe": 23
      },
      {
        "pdMin": 45,
        "pdMax": 46,
        "pe": 24
      },
      {
        "pdMin": 47,
        "pdMax": 48,
        "pe": 25
      },
      {
        "pdMin": 49,
        "pdMax": 50,
        "pe": 26
      },
      {
        "pdMin": 51,
        "pdMax": 52,
        "pe": 27
      },
      {
        "pdMin": 53,
        "pdMax": 54,
        "pe": 28
      }
    ],
    "7_8": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 3
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 4
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 5
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 6
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 7
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 8
      },
      {
        "pdMin": 15,
        "pdMax": 16,
        "pe": 9
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 10
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 11
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 12
      },
      {
        "pdMin": 23,
        "pdMax": 23,
        "pe": 13
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 14
      },
      {
        "pdMin": 26,
        "pdMax": 27,
        "pe": 15
      },
      {
        "pdMin": 28,
        "pdMax": 29,
        "pe": 16
      },
      {
        "pdMin": 30,
        "pdMax": 32,
        "pe": 17
      },
      {
        "pdMin": 33,
        "pdMax": 35,
        "pe": 18
      },
      {
        "pdMin": 36,
        "pdMax": 37,
        "pe": 19
      },
      {
        "pdMin": 38,
        "pdMax": 39,
        "pe": 20
      },
      {
        "pdMin": 40,
        "pdMax": 41,
        "pe": 21
      },
      {
        "pdMin": 42,
        "pdMax": 43,
        "pe": 22
      },
      {
        "pdMin": 44,
        "pdMax": 45,
        "pe": 23
      },
      {
        "pdMin": 46,
        "pdMax": 47,
        "pe": 24
      },
      {
        "pdMin": 48,
        "pdMax": 49,
        "pe": 25
      },
      {
        "pdMin": 50,
        "pdMax": 51,
        "pe": 26
      },
      {
        "pdMin": 52,
        "pdMax": 54,
        "pe": 27
      }
    ],
    "8_0": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 3
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 4
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 5
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 6
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 7
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 8
      },
      {
        "pdMin": 16,
        "pdMax": 16,
        "pe": 9
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 10
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 11
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 12
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 13
      },
      {
        "pdMin": 25,
        "pdMax": 26,
        "pe": 14
      },
      {
        "pdMin": 27,
        "pdMax": 28,
        "pe": 15
      },
      {
        "pdMin": 29,
        "pdMax": 30,
        "pe": 16
      },
      {
        "pdMin": 31,
        "pdMax": 33,
        "pe": 17
      },
      {
        "pdMin": 34,
        "pdMax": 36,
        "pe": 18
      },
      {
        "pdMin": 37,
        "pdMax": 38,
        "pe": 19
      },
      {
        "pdMin": 39,
        "pdMax": 40,
        "pe": 20
      },
      {
        "pdMin": 41,
        "pdMax": 42,
        "pe": 21
      },
      {
        "pdMin": 43,
        "pdMax": 44,
        "pe": 22
      },
      {
        "pdMin": 45,
        "pdMax": 46,
        "pe": 23
      },
      {
        "pdMin": 47,
        "pdMax": 48,
        "pe": 24
      },
      {
        "pdMin": 49,
        "pdMax": 50,
        "pe": 25
      },
      {
        "pdMin": 51,
        "pdMax": 52,
        "pe": 26
      },
      {
        "pdMin": 53,
        "pdMax": 54,
        "pe": 27
      }
    ],
    "8_4": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 3
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 4
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 5
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 6
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 7
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 8
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 9
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 10
      },
      {
        "pdMin": 20,
        "pdMax": 21,
        "pe": 11
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 12
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 13
      },
      {
        "pdMin": 26,
        "pdMax": 27,
        "pe": 14
      },
      {
        "pdMin": 28,
        "pdMax": 29,
        "pe": 15
      },
      {
        "pdMin": 30,
        "pdMax": 31,
        "pe": 16
      },
      {
        "pdMin": 32,
        "pdMax": 34,
        "pe": 17
      },
      {
        "pdMin": 35,
        "pdMax": 37,
        "pe": 18
      },
      {
        "pdMin": 38,
        "pdMax": 39,
        "pe": 19
      },
      {
        "pdMin": 40,
        "pdMax": 41,
        "pe": 20
      },
      {
        "pdMin": 42,
        "pdMax": 43,
        "pe": 21
      },
      {
        "pdMin": 44,
        "pdMax": 45,
        "pe": 22
      },
      {
        "pdMin": 46,
        "pdMax": 47,
        "pe": 23
      },
      {
        "pdMin": 48,
        "pdMax": 49,
        "pe": 24
      },
      {
        "pdMin": 50,
        "pdMax": 51,
        "pe": 25
      },
      {
        "pdMin": 52,
        "pdMax": 53,
        "pe": 26
      },
      {
        "pdMin": 54,
        "pdMax": 54,
        "pe": 27
      }
    ],
    "8_8": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 3
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 4
      },
      {
        "pdMin": 8,
        "pdMax": 10,
        "pe": 5
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 6
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 7
      },
      {
        "pdMin": 15,
        "pdMax": 16,
        "pe": 8
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 9
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 10
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 11
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 12
      },
      {
        "pdMin": 25,
        "pdMax": 27,
        "pe": 13
      },
      {
        "pdMin": 28,
        "pdMax": 29,
        "pe": 14
      },
      {
        "pdMin": 30,
        "pdMax": 31,
        "pe": 15
      },
      {
        "pdMin": 32,
        "pdMax": 33,
        "pe": 16
      },
      {
        "pdMin": 34,
        "pdMax": 36,
        "pe": 17
      },
      {
        "pdMin": 37,
        "pdMax": 38,
        "pe": 18
      },
      {
        "pdMin": 39,
        "pdMax": 40,
        "pe": 19
      },
      {
        "pdMin": 41,
        "pdMax": 42,
        "pe": 20
      },
      {
        "pdMin": 43,
        "pdMax": 44,
        "pe": 21
      },
      {
        "pdMin": 45,
        "pdMax": 46,
        "pe": 22
      },
      {
        "pdMin": 47,
        "pdMax": 48,
        "pe": 23
      },
      {
        "pdMin": 49,
        "pdMax": 50,
        "pe": 24
      },
      {
        "pdMin": 51,
        "pdMax": 52,
        "pe": 25
      },
      {
        "pdMin": 53,
        "pdMax": 54,
        "pe": 26
      }
    ],
    "9_0": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 6,
        "pe": 3
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 4
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 5
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 6
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 7
      },
      {
        "pdMin": 15,
        "pdMax": 16,
        "pe": 8
      },
      {
        "pdMin": 17,
        "pdMax": 19,
        "pe": 9
      },
      {
        "pdMin": 20,
        "pdMax": 21,
        "pe": 10
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 11
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 12
      },
      {
        "pdMin": 26,
        "pdMax": 27,
        "pe": 13
      },
      {
        "pdMin": 28,
        "pdMax": 29,
        "pe": 14
      },
      {
        "pdMin": 30,
        "pdMax": 32,
        "pe": 15
      },
      {
        "pdMin": 33,
        "pdMax": 34,
        "pe": 16
      },
      {
        "pdMin": 35,
        "pdMax": 37,
        "pe": 17
      },
      {
        "pdMin": 38,
        "pdMax": 39,
        "pe": 18
      },
      {
        "pdMin": 40,
        "pdMax": 41,
        "pe": 19
      },
      {
        "pdMin": 42,
        "pdMax": 43,
        "pe": 20
      },
      {
        "pdMin": 44,
        "pdMax": 45,
        "pe": 21
      },
      {
        "pdMin": 46,
        "pdMax": 47,
        "pe": 22
      },
      {
        "pdMin": 48,
        "pdMax": 49,
        "pe": 23
      },
      {
        "pdMin": 50,
        "pdMax": 51,
        "pe": 24
      },
      {
        "pdMin": 52,
        "pdMax": 53,
        "pe": 25
      },
      {
        "pdMin": 54,
        "pdMax": 54,
        "pe": 26
      }
    ],
    "9_4": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 6,
        "pe": 3
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 4
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 5
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 6
      },
      {
        "pdMin": 13,
        "pdMax": 15,
        "pe": 7
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 8
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 9
      },
      {
        "pdMin": 20,
        "pdMax": 21,
        "pe": 10
      },
      {
        "pdMin": 22,
        "pdMax": 24,
        "pe": 11
      },
      {
        "pdMin": 25,
        "pdMax": 26,
        "pe": 12
      },
      {
        "pdMin": 27,
        "pdMax": 28,
        "pe": 13
      },
      {
        "pdMin": 29,
        "pdMax": 30,
        "pe": 14
      },
      {
        "pdMin": 31,
        "pdMax": 33,
        "pe": 15
      },
      {
        "pdMin": 34,
        "pdMax": 35,
        "pe": 16
      },
      {
        "pdMin": 36,
        "pdMax": 38,
        "pe": 17
      },
      {
        "pdMin": 39,
        "pdMax": 40,
        "pe": 18
      },
      {
        "pdMin": 41,
        "pdMax": 42,
        "pe": 19
      },
      {
        "pdMin": 43,
        "pdMax": 44,
        "pe": 20
      },
      {
        "pdMin": 45,
        "pdMax": 46,
        "pe": 21
      },
      {
        "pdMin": 47,
        "pdMax": 48,
        "pe": 22
      },
      {
        "pdMin": 49,
        "pdMax": 50,
        "pe": 23
      },
      {
        "pdMin": 51,
        "pdMax": 52,
        "pe": 24
      },
      {
        "pdMin": 53,
        "pdMax": 54,
        "pe": 25
      }
    ],
    "9_8": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 3
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 4
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 5
      },
      {
        "pdMin": 11,
        "pdMax": 13,
        "pe": 6
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 7
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 8
      },
      {
        "pdMin": 18,
        "pdMax": 20,
        "pe": 9
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 10
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 11
      },
      {
        "pdMin": 25,
        "pdMax": 27,
        "pe": 12
      },
      {
        "pdMin": 28,
        "pdMax": 29,
        "pe": 13
      },
      {
        "pdMin": 30,
        "pdMax": 31,
        "pe": 14
      },
      {
        "pdMin": 32,
        "pdMax": 33,
        "pe": 15
      },
      {
        "pdMin": 34,
        "pdMax": 36,
        "pe": 16
      },
      {
        "pdMin": 37,
        "pdMax": 39,
        "pe": 17
      },
      {
        "pdMin": 40,
        "pdMax": 41,
        "pe": 18
      },
      {
        "pdMin": 42,
        "pdMax": 43,
        "pe": 19
      },
      {
        "pdMin": 44,
        "pdMax": 45,
        "pe": 20
      },
      {
        "pdMin": 46,
        "pdMax": 47,
        "pe": 21
      },
      {
        "pdMin": 48,
        "pdMax": 49,
        "pe": 22
      },
      {
        "pdMin": 50,
        "pdMax": 51,
        "pe": 23
      },
      {
        "pdMin": 52,
        "pdMax": 53,
        "pe": 24
      },
      {
        "pdMin": 54,
        "pdMax": 54,
        "pe": 25
      }
    ],
    "10_0": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 3
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 4
      },
      {
        "pdMin": 9,
        "pdMax": 11,
        "pe": 5
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 6
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 7
      },
      {
        "pdMin": 16,
        "pdMax": 18,
        "pe": 8
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 9
      },
      {
        "pdMin": 21,
        "pdMax": 23,
        "pe": 10
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 11
      },
      {
        "pdMin": 26,
        "pdMax": 27,
        "pe": 12
      },
      {
        "pdMin": 28,
        "pdMax": 30,
        "pe": 13
      },
      {
        "pdMin": 31,
        "pdMax": 32,
        "pe": 14
      },
      {
        "pdMin": 33,
        "pdMax": 34,
        "pe": 15
      },
      {
        "pdMin": 35,
        "pdMax": 37,
        "pe": 16
      },
      {
        "pdMin": 38,
        "pdMax": 40,
        "pe": 17
      },
      {
        "pdMin": 41,
        "pdMax": 42,
        "pe": 18
      },
      {
        "pdMin": 43,
        "pdMax": 44,
        "pe": 19
      },
      {
        "pdMin": 45,
        "pdMax": 46,
        "pe": 20
      },
      {
        "pdMin": 47,
        "pdMax": 48,
        "pe": 21
      },
      {
        "pdMin": 49,
        "pdMax": 50,
        "pe": 22
      },
      {
        "pdMin": 51,
        "pdMax": 52,
        "pe": 23
      },
      {
        "pdMin": 53,
        "pdMax": 54,
        "pe": 24
      }
    ],
    "10_4": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 3
      },
      {
        "pdMin": 7,
        "pdMax": 9,
        "pe": 4
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 5
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 6
      },
      {
        "pdMin": 14,
        "pdMax": 16,
        "pe": 7
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 8
      },
      {
        "pdMin": 19,
        "pdMax": 21,
        "pe": 9
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 10
      },
      {
        "pdMin": 24,
        "pdMax": 26,
        "pe": 11
      },
      {
        "pdMin": 27,
        "pdMax": 28,
        "pe": 12
      },
      {
        "pdMin": 29,
        "pdMax": 30,
        "pe": 13
      },
      {
        "pdMin": 31,
        "pdMax": 33,
        "pe": 14
      },
      {
        "pdMin": 34,
        "pdMax": 35,
        "pe": 15
      },
      {
        "pdMin": 36,
        "pdMax": 38,
        "pe": 16
      },
      {
        "pdMin": 39,
        "pdMax": 41,
        "pe": 17
      },
      {
        "pdMin": 42,
        "pdMax": 43,
        "pe": 18
      },
      {
        "pdMin": 44,
        "pdMax": 45,
        "pe": 19
      },
      {
        "pdMin": 46,
        "pdMax": 47,
        "pe": 20
      },
      {
        "pdMin": 48,
        "pdMax": 49,
        "pe": 21
      },
      {
        "pdMin": 50,
        "pdMax": 51,
        "pe": 22
      },
      {
        "pdMin": 52,
        "pdMax": 53,
        "pe": 23
      },
      {
        "pdMin": 54,
        "pdMax": 54,
        "pe": 24
      }
    ],
    "10_8": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 3
      },
      {
        "pdMin": 7,
        "pdMax": 9,
        "pe": 4
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 5
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 6
      },
      {
        "pdMin": 14,
        "pdMax": 16,
        "pe": 7
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 8
      },
      {
        "pdMin": 19,
        "pdMax": 21,
        "pe": 9
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 10
      },
      {
        "pdMin": 24,
        "pdMax": 26,
        "pe": 11
      },
      {
        "pdMin": 27,
        "pdMax": 28,
        "pe": 12
      },
      {
        "pdMin": 29,
        "pdMax": 30,
        "pe": 13
      },
      {
        "pdMin": 31,
        "pdMax": 33,
        "pe": 14
      },
      {
        "pdMin": 34,
        "pdMax": 35,
        "pe": 15
      },
      {
        "pdMin": 36,
        "pdMax": 38,
        "pe": 16
      },
      {
        "pdMin": 39,
        "pdMax": 41,
        "pe": 17
      },
      {
        "pdMin": 42,
        "pdMax": 43,
        "pe": 18
      },
      {
        "pdMin": 44,
        "pdMax": 45,
        "pe": 19
      },
      {
        "pdMin": 46,
        "pdMax": 47,
        "pe": 20
      },
      {
        "pdMin": 48,
        "pdMax": 49,
        "pe": 21
      },
      {
        "pdMin": 50,
        "pdMax": 51,
        "pe": 22
      },
      {
        "pdMin": 52,
        "pdMax": 53,
        "pe": 23
      },
      {
        "pdMin": 54,
        "pdMax": 54,
        "pe": 24
      }
    ],
    "11_0": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 3
      },
      {
        "pdMin": 7,
        "pdMax": 9,
        "pe": 4
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 5
      },
      {
        "pdMin": 12,
        "pdMax": 14,
        "pe": 6
      },
      {
        "pdMin": 15,
        "pdMax": 16,
        "pe": 7
      },
      {
        "pdMin": 17,
        "pdMax": 19,
        "pe": 8
      },
      {
        "pdMin": 20,
        "pdMax": 21,
        "pe": 9
      },
      {
        "pdMin": 22,
        "pdMax": 24,
        "pe": 10
      },
      {
        "pdMin": 25,
        "pdMax": 26,
        "pe": 11
      },
      {
        "pdMin": 27,
        "pdMax": 29,
        "pe": 12
      },
      {
        "pdMin": 30,
        "pdMax": 31,
        "pe": 13
      },
      {
        "pdMin": 32,
        "pdMax": 34,
        "pe": 14
      },
      {
        "pdMin": 35,
        "pdMax": 36,
        "pe": 15
      },
      {
        "pdMin": 37,
        "pdMax": 39,
        "pe": 16
      },
      {
        "pdMin": 40,
        "pdMax": 42,
        "pe": 17
      },
      {
        "pdMin": 43,
        "pdMax": 44,
        "pe": 18
      },
      {
        "pdMin": 45,
        "pdMax": 46,
        "pe": 19
      },
      {
        "pdMin": 47,
        "pdMax": 48,
        "pe": 20
      },
      {
        "pdMin": 49,
        "pdMax": 50,
        "pe": 21
      },
      {
        "pdMin": 51,
        "pdMax": 52,
        "pe": 22
      },
      {
        "pdMin": 53,
        "pdMax": 54,
        "pe": 23
      }
    ],
    "11_4": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 7,
        "pe": 3
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 4
      },
      {
        "pdMin": 10,
        "pdMax": 12,
        "pe": 5
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 6
      },
      {
        "pdMin": 15,
        "pdMax": 17,
        "pe": 7
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 8
      },
      {
        "pdMin": 20,
        "pdMax": 22,
        "pe": 9
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 10
      },
      {
        "pdMin": 25,
        "pdMax": 27,
        "pe": 11
      },
      {
        "pdMin": 28,
        "pdMax": 34,
        "pe": 12
      },
      {
        "pdMin": 32,
        "pdMax": 32,
        "pe": 13
      },
      {
        "pdMin": 33,
        "pdMax": 34,
        "pe": 14
      },
      {
        "pdMin": 35,
        "pdMax": 37,
        "pe": 15
      },
      {
        "pdMin": 38,
        "pdMax": 39,
        "pe": 16
      },
      {
        "pdMin": 40,
        "pdMax": 43,
        "pe": 17
      },
      {
        "pdMin": 44,
        "pdMax": 45,
        "pe": 18
      },
      {
        "pdMin": 46,
        "pdMax": 47,
        "pe": 19
      },
      {
        "pdMin": 48,
        "pdMax": 49,
        "pe": 20
      },
      {
        "pdMin": 50,
        "pdMax": 51,
        "pe": 21
      },
      {
        "pdMin": 52,
        "pdMax": 53,
        "pe": 22
      },
      {
        "pdMin": 54,
        "pdMax": 54,
        "pe": 23
      }
    ],
    "11_8": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 7,
        "pe": 3
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 4
      },
      {
        "pdMin": 10,
        "pdMax": 12,
        "pe": 5
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 6
      },
      {
        "pdMin": 15,
        "pdMax": 17,
        "pe": 7
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 8
      },
      {
        "pdMin": 20,
        "pdMax": 22,
        "pe": 9
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 10
      },
      {
        "pdMin": 25,
        "pdMax": 27,
        "pe": 11
      },
      {
        "pdMin": 28,
        "pdMax": 29,
        "pe": 12
      },
      {
        "pdMin": 30,
        "pdMax": 32,
        "pe": 13
      },
      {
        "pdMin": 33,
        "pdMax": 34,
        "pe": 14
      },
      {
        "pdMin": 35,
        "pdMax": 37,
        "pe": 15
      },
      {
        "pdMin": 38,
        "pdMax": 39,
        "pe": 16
      },
      {
        "pdMin": 40,
        "pdMax": 43,
        "pe": 17
      },
      {
        "pdMin": 44,
        "pdMax": 45,
        "pe": 18
      },
      {
        "pdMin": 46,
        "pdMax": 47,
        "pe": 19
      },
      {
        "pdMin": 48,
        "pdMax": 49,
        "pe": 20
      },
      {
        "pdMin": 50,
        "pdMax": 51,
        "pe": 21
      },
      {
        "pdMin": 52,
        "pdMax": 53,
        "pe": 22
      },
      {
        "pdMin": 54,
        "pdMax": 54,
        "pe": 23
      }
    ],
    "12_0": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 7,
        "pe": 3
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 4
      },
      {
        "pdMin": 10,
        "pdMax": 12,
        "pe": 5
      },
      {
        "pdMin": 13,
        "pdMax": 15,
        "pe": 6
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 7
      },
      {
        "pdMin": 18,
        "pdMax": 20,
        "pe": 8
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 9
      },
      {
        "pdMin": 23,
        "pdMax": 25,
        "pe": 10
      },
      {
        "pdMin": 26,
        "pdMax": 27,
        "pe": 11
      },
      {
        "pdMin": 28,
        "pdMax": 30,
        "pe": 12
      },
      {
        "pdMin": 31,
        "pdMax": 33,
        "pe": 13
      },
      {
        "pdMin": 34,
        "pdMax": 35,
        "pe": 14
      },
      {
        "pdMin": 36,
        "pdMax": 38,
        "pe": 15
      },
      {
        "pdMin": 39,
        "pdMax": 40,
        "pe": 16
      },
      {
        "pdMin": 41,
        "pdMax": 44,
        "pe": 17
      },
      {
        "pdMin": 45,
        "pdMax": 46,
        "pe": 18
      },
      {
        "pdMin": 47,
        "pdMax": 48,
        "pe": 19
      },
      {
        "pdMin": 49,
        "pdMax": 50,
        "pe": 20
      },
      {
        "pdMin": 51,
        "pdMax": 52,
        "pe": 21
      },
      {
        "pdMin": 53,
        "pdMax": 54,
        "pe": 22
      }
    ],
    "12_4": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 7,
        "pe": 3
      },
      {
        "pdMin": 8,
        "pdMax": 10,
        "pe": 4
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 5
      },
      {
        "pdMin": 13,
        "pdMax": 15,
        "pe": 6
      },
      {
        "pdMin": 16,
        "pdMax": 18,
        "pe": 7
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 8
      },
      {
        "pdMin": 21,
        "pdMax": 23,
        "pe": 9
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 10
      },
      {
        "pdMin": 26,
        "pdMax": 28,
        "pe": 11
      },
      {
        "pdMin": 29,
        "pdMax": 31,
        "pe": 12
      },
      {
        "pdMin": 32,
        "pdMax": 33,
        "pe": 13
      },
      {
        "pdMin": 34,
        "pdMax": 36,
        "pe": 14
      },
      {
        "pdMin": 37,
        "pdMax": 39,
        "pe": 15
      },
      {
        "pdMin": 40,
        "pdMax": 41,
        "pe": 16
      },
      {
        "pdMin": 42,
        "pdMax": 45,
        "pe": 17
      },
      {
        "pdMin": 46,
        "pdMax": 47,
        "pe": 18
      },
      {
        "pdMin": 48,
        "pdMax": 49,
        "pe": 19
      },
      {
        "pdMin": 50,
        "pdMax": 51,
        "pe": 20
      },
      {
        "pdMin": 52,
        "pdMax": 53,
        "pe": 21
      },
      {
        "pdMin": 54,
        "pdMax": 54,
        "pe": 22
      }
    ],
    "12_8": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 7,
        "pe": 3
      },
      {
        "pdMin": 8,
        "pdMax": 10,
        "pe": 4
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 5
      },
      {
        "pdMin": 13,
        "pdMax": 15,
        "pe": 6
      },
      {
        "pdMin": 16,
        "pdMax": 18,
        "pe": 7
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 8
      },
      {
        "pdMin": 21,
        "pdMax": 23,
        "pe": 9
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 10
      },
      {
        "pdMin": 26,
        "pdMax": 28,
        "pe": 11
      },
      {
        "pdMin": 29,
        "pdMax": 31,
        "pe": 12
      },
      {
        "pdMin": 32,
        "pdMax": 33,
        "pe": 13
      },
      {
        "pdMin": 34,
        "pdMax": 36,
        "pe": 14
      },
      {
        "pdMin": 37,
        "pdMax": 39,
        "pe": 15
      },
      {
        "pdMin": 40,
        "pdMax": 41,
        "pe": 16
      },
      {
        "pdMin": 42,
        "pdMax": 45,
        "pe": 17
      },
      {
        "pdMin": 46,
        "pdMax": 47,
        "pe": 18
      },
      {
        "pdMin": 48,
        "pdMax": 49,
        "pe": 19
      },
      {
        "pdMin": 50,
        "pdMax": 51,
        "pe": 20
      },
      {
        "pdMin": 52,
        "pdMax": 53,
        "pe": 21
      },
      {
        "pdMin": 54,
        "pdMax": 54,
        "pe": 22
      }
    ],
    "13_0": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 7,
        "pe": 3
      },
      {
        "pdMin": 8,
        "pdMax": 10,
        "pe": 4
      },
      {
        "pdMin": 11,
        "pdMax": 13,
        "pe": 5
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 6
      },
      {
        "pdMin": 16,
        "pdMax": 18,
        "pe": 7
      },
      {
        "pdMin": 19,
        "pdMax": 21,
        "pe": 8
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 9
      },
      {
        "pdMin": 24,
        "pdMax": 26,
        "pe": 10
      },
      {
        "pdMin": 27,
        "pdMax": 29,
        "pe": 11
      },
      {
        "pdMin": 30,
        "pdMax": 31,
        "pe": 12
      },
      {
        "pdMin": 32,
        "pdMax": 34,
        "pe": 13
      },
      {
        "pdMin": 35,
        "pdMax": 37,
        "pe": 14
      },
      {
        "pdMin": 38,
        "pdMax": 40,
        "pe": 15
      },
      {
        "pdMin": 41,
        "pdMax": 42,
        "pe": 16
      },
      {
        "pdMin": 43,
        "pdMax": 46,
        "pe": 17
      },
      {
        "pdMin": 47,
        "pdMax": 48,
        "pe": 18
      },
      {
        "pdMin": 49,
        "pdMax": 49,
        "pe": 19
      },
      {
        "pdMin": 50,
        "pdMax": 51,
        "pe": 20
      },
      {
        "pdMin": 52,
        "pdMax": 53,
        "pe": 21
      },
      {
        "pdMin": 54,
        "pdMax": 54,
        "pe": 22
      }
    ],
    "13_4": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 7,
        "pe": 3
      },
      {
        "pdMin": 8,
        "pdMax": 10,
        "pe": 4
      },
      {
        "pdMin": 11,
        "pdMax": 13,
        "pe": 5
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 6
      },
      {
        "pdMin": 16,
        "pdMax": 18,
        "pe": 7
      },
      {
        "pdMin": 19,
        "pdMax": 21,
        "pe": 8
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 9
      },
      {
        "pdMin": 24,
        "pdMax": 26,
        "pe": 10
      },
      {
        "pdMin": 27,
        "pdMax": 29,
        "pe": 11
      },
      {
        "pdMin": 30,
        "pdMax": 31,
        "pe": 12
      },
      {
        "pdMin": 32,
        "pdMax": 34,
        "pe": 13
      },
      {
        "pdMin": 35,
        "pdMax": 37,
        "pe": 14
      },
      {
        "pdMin": 38,
        "pdMax": 40,
        "pe": 15
      },
      {
        "pdMin": 41,
        "pdMax": 42,
        "pe": 16
      },
      {
        "pdMin": 43,
        "pdMax": 46,
        "pe": 17
      },
      {
        "pdMin": 47,
        "pdMax": 48,
        "pe": 18
      },
      {
        "pdMin": 49,
        "pdMax": 50,
        "pe": 19
      },
      {
        "pdMin": 51,
        "pdMax": 52,
        "pe": 20
      },
      {
        "pdMin": 53,
        "pdMax": 54,
        "pe": 21
      }
    ],
    "13_8": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 7,
        "pe": 3
      },
      {
        "pdMin": 8,
        "pdMax": 10,
        "pe": 4
      },
      {
        "pdMin": 11,
        "pdMax": 13,
        "pe": 5
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 6
      },
      {
        "pdMin": 16,
        "pdMax": 18,
        "pe": 7
      },
      {
        "pdMin": 19,
        "pdMax": 21,
        "pe": 8
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 9
      },
      {
        "pdMin": 24,
        "pdMax": 26,
        "pe": 10
      },
      {
        "pdMin": 27,
        "pdMax": 29,
        "pe": 11
      },
      {
        "pdMin": 30,
        "pdMax": 31,
        "pe": 12
      },
      {
        "pdMin": 32,
        "pdMax": 34,
        "pe": 13
      },
      {
        "pdMin": 35,
        "pdMax": 37,
        "pe": 14
      },
      {
        "pdMin": 38,
        "pdMax": 40,
        "pe": 15
      },
      {
        "pdMin": 41,
        "pdMax": 42,
        "pe": 16
      },
      {
        "pdMin": 43,
        "pdMax": 46,
        "pe": 17
      },
      {
        "pdMin": 47,
        "pdMax": 48,
        "pe": 18
      },
      {
        "pdMin": 49,
        "pdMax": 50,
        "pe": 19
      },
      {
        "pdMin": 51,
        "pdMax": 52,
        "pe": 20
      },
      {
        "pdMin": 53,
        "pdMax": 54,
        "pe": 21
      }
    ],
    "14_0": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 5,
        "pe": 2
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 3
      },
      {
        "pdMin": 8,
        "pdMax": 10,
        "pe": 4
      },
      {
        "pdMin": 11,
        "pdMax": 13,
        "pe": 5
      },
      {
        "pdMin": 14,
        "pdMax": 16,
        "pe": 6
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 7
      },
      {
        "pdMin": 19,
        "pdMax": 21,
        "pe": 8
      },
      {
        "pdMin": 22,
        "pdMax": 24,
        "pe": 9
      },
      {
        "pdMin": 25,
        "pdMax": 27,
        "pe": 10
      },
      {
        "pdMin": 28,
        "pdMax": 29,
        "pe": 11
      },
      {
        "pdMin": 30,
        "pdMax": 32,
        "pe": 12
      },
      {
        "pdMin": 33,
        "pdMax": 35,
        "pe": 13
      },
      {
        "pdMin": 36,
        "pdMax": 38,
        "pe": 14
      },
      {
        "pdMin": 39,
        "pdMax": 40,
        "pe": 15
      },
      {
        "pdMin": 41,
        "pdMax": 43,
        "pe": 16
      },
      {
        "pdMin": 44,
        "pdMax": 47,
        "pe": 17
      },
      {
        "pdMin": 48,
        "pdMax": 49,
        "pe": 18
      },
      {
        "pdMin": 50,
        "pdMax": 51,
        "pe": 19
      },
      {
        "pdMin": 52,
        "pdMax": 53,
        "pe": 20
      },
      {
        "pdMin": 54,
        "pdMax": 54,
        "pe": 21
      }
    ],
    "14_4": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 5,
        "pe": 2
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 3
      },
      {
        "pdMin": 8,
        "pdMax": 10,
        "pe": 4
      },
      {
        "pdMin": 11,
        "pdMax": 13,
        "pe": 5
      },
      {
        "pdMin": 14,
        "pdMax": 16,
        "pe": 6
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 7
      },
      {
        "pdMin": 19,
        "pdMax": 21,
        "pe": 8
      },
      {
        "pdMin": 22,
        "pdMax": 24,
        "pe": 9
      },
      {
        "pdMin": 25,
        "pdMax": 27,
        "pe": 10
      },
      {
        "pdMin": 28,
        "pdMax": 29,
        "pe": 11
      },
      {
        "pdMin": 30,
        "pdMax": 32,
        "pe": 12
      },
      {
        "pdMin": 33,
        "pdMax": 35,
        "pe": 13
      },
      {
        "pdMin": 36,
        "pdMax": 38,
        "pe": 14
      },
      {
        "pdMin": 39,
        "pdMax": 40,
        "pe": 15
      },
      {
        "pdMin": 41,
        "pdMax": 43,
        "pe": 16
      },
      {
        "pdMin": 44,
        "pdMax": 47,
        "pe": 17
      },
      {
        "pdMin": 48,
        "pdMax": 49,
        "pe": 18
      },
      {
        "pdMin": 50,
        "pdMax": 51,
        "pe": 19
      },
      {
        "pdMin": 52,
        "pdMax": 53,
        "pe": 20
      },
      {
        "pdMin": 54,
        "pdMax": 54,
        "pe": 21
      }
    ],
    "14_8": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 5,
        "pe": 2
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 3
      },
      {
        "pdMin": 8,
        "pdMax": 10,
        "pe": 4
      },
      {
        "pdMin": 11,
        "pdMax": 13,
        "pe": 5
      },
      {
        "pdMin": 14,
        "pdMax": 16,
        "pe": 6
      },
      {
        "pdMin": 17,
        "pdMax": 19,
        "pe": 7
      },
      {
        "pdMin": 20,
        "pdMax": 22,
        "pe": 8
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 9
      },
      {
        "pdMin": 25,
        "pdMax": 27,
        "pe": 10
      },
      {
        "pdMin": 28,
        "pdMax": 30,
        "pe": 11
      },
      {
        "pdMin": 31,
        "pdMax": 33,
        "pe": 12
      },
      {
        "pdMin": 34,
        "pdMax": 36,
        "pe": 13
      },
      {
        "pdMin": 37,
        "pdMax": 39,
        "pe": 14
      },
      {
        "pdMin": 40,
        "pdMax": 41,
        "pe": 15
      },
      {
        "pdMin": 42,
        "pdMax": 44,
        "pe": 16
      },
      {
        "pdMin": 45,
        "pdMax": 48,
        "pe": 17
      },
      {
        "pdMin": 49,
        "pdMax": 50,
        "pe": 18
      },
      {
        "pdMin": 51,
        "pdMax": 51,
        "pe": 19
      },
      {
        "pdMin": 52,
        "pdMax": 53,
        "pe": 20
      },
      {
        "pdMin": 54,
        "pdMax": 54,
        "pe": 21
      }
    ],
    "15_0": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 5,
        "pe": 2
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 3
      },
      {
        "pdMin": 8,
        "pdMax": 10,
        "pe": 4
      },
      {
        "pdMin": 11,
        "pdMax": 13,
        "pe": 5
      },
      {
        "pdMin": 14,
        "pdMax": 16,
        "pe": 6
      },
      {
        "pdMin": 17,
        "pdMax": 19,
        "pe": 7
      },
      {
        "pdMin": 20,
        "pdMax": 22,
        "pe": 8
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 9
      },
      {
        "pdMin": 25,
        "pdMax": 27,
        "pe": 10
      },
      {
        "pdMin": 28,
        "pdMax": 30,
        "pe": 11
      },
      {
        "pdMin": 31,
        "pdMax": 33,
        "pe": 12
      },
      {
        "pdMin": 34,
        "pdMax": 36,
        "pe": 13
      },
      {
        "pdMin": 37,
        "pdMax": 39,
        "pe": 14
      },
      {
        "pdMin": 40,
        "pdMax": 41,
        "pe": 15
      },
      {
        "pdMin": 42,
        "pdMax": 44,
        "pe": 16
      },
      {
        "pdMin": 45,
        "pdMax": 48,
        "pe": 17
      },
      {
        "pdMin": 49,
        "pdMax": 50,
        "pe": 18
      },
      {
        "pdMin": 51,
        "pdMax": 51,
        "pe": 19
      },
      {
        "pdMin": 52,
        "pdMax": 53,
        "pe": 20
      },
      {
        "pdMin": 54,
        "pdMax": 54,
        "pe": 21
      }
    ],
    "15_4": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 5,
        "pe": 2
      },
      {
        "pdMin": 6,
        "pdMax": 8,
        "pe": 3
      },
      {
        "pdMin": 9,
        "pdMax": 11,
        "pe": 4
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 5
      },
      {
        "pdMin": 14,
        "pdMax": 16,
        "pe": 6
      },
      {
        "pdMin": 17,
        "pdMax": 19,
        "pe": 7
      },
      {
        "pdMin": 20,
        "pdMax": 22,
        "pe": 8
      },
      {
        "pdMin": 23,
        "pdMax": 25,
        "pe": 9
      },
      {
        "pdMin": 26,
        "pdMax": 28,
        "pe": 10
      },
      {
        "pdMin": 29,
        "pdMax": 31,
        "pe": 11
      },
      {
        "pdMin": 32,
        "pdMax": 34,
        "pe": 12
      },
      {
        "pdMin": 35,
        "pdMax": 36,
        "pe": 13
      },
      {
        "pdMin": 37,
        "pdMax": 39,
        "pe": 14
      },
      {
        "pdMin": 40,
        "pdMax": 42,
        "pe": 15
      },
      {
        "pdMin": 43,
        "pdMax": 45,
        "pe": 16
      },
      {
        "pdMin": 46,
        "pdMax": 49,
        "pe": 17
      },
      {
        "pdMin": 50,
        "pdMax": 51,
        "pe": 18
      },
      {
        "pdMin": 52,
        "pdMax": 52,
        "pe": 19
      },
      {
        "pdMin": 53,
        "pdMax": 53,
        "pe": 20
      },
      {
        "pdMin": 54,
        "pdMax": 54,
        "pe": 21
      }
    ],
    "15_8": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 5,
        "pe": 2
      },
      {
        "pdMin": 6,
        "pdMax": 8,
        "pe": 3
      },
      {
        "pdMin": 9,
        "pdMax": 11,
        "pe": 4
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 5
      },
      {
        "pdMin": 14,
        "pdMax": 16,
        "pe": 6
      },
      {
        "pdMin": 17,
        "pdMax": 19,
        "pe": 7
      },
      {
        "pdMin": 20,
        "pdMax": 22,
        "pe": 8
      },
      {
        "pdMin": 23,
        "pdMax": 25,
        "pe": 9
      },
      {
        "pdMin": 26,
        "pdMax": 28,
        "pe": 10
      },
      {
        "pdMin": 29,
        "pdMax": 31,
        "pe": 11
      },
      {
        "pdMin": 32,
        "pdMax": 34,
        "pe": 12
      },
      {
        "pdMin": 35,
        "pdMax": 36,
        "pe": 13
      },
      {
        "pdMin": 37,
        "pdMax": 39,
        "pe": 14
      },
      {
        "pdMin": 40,
        "pdMax": 42,
        "pe": 15
      },
      {
        "pdMin": 43,
        "pdMax": 45,
        "pe": 16
      },
      {
        "pdMin": 46,
        "pdMax": 49,
        "pe": 17
      },
      {
        "pdMin": 50,
        "pdMax": 51,
        "pe": 18
      },
      {
        "pdMin": 52,
        "pdMax": 52,
        "pe": 19
      },
      {
        "pdMin": 53,
        "pdMax": 53,
        "pe": 20
      },
      {
        "pdMin": 54,
        "pdMax": 54,
        "pe": 21
      }
    ],
    "16_0": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 5,
        "pe": 2
      },
      {
        "pdMin": 6,
        "pdMax": 8,
        "pe": 3
      },
      {
        "pdMin": 9,
        "pdMax": 11,
        "pe": 4
      },
      {
        "pdMin": 12,
        "pdMax": 14,
        "pe": 5
      },
      {
        "pdMin": 15,
        "pdMax": 17,
        "pe": 6
      },
      {
        "pdMin": 18,
        "pdMax": 20,
        "pe": 7
      },
      {
        "pdMin": 21,
        "pdMax": 23,
        "pe": 8
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 9
      },
      {
        "pdMin": 26,
        "pdMax": 28,
        "pe": 10
      },
      {
        "pdMin": 29,
        "pdMax": 31,
        "pe": 11
      },
      {
        "pdMin": 32,
        "pdMax": 34,
        "pe": 12
      },
      {
        "pdMin": 35,
        "pdMax": 37,
        "pe": 13
      },
      {
        "pdMin": 38,
        "pdMax": 40,
        "pe": 14
      },
      {
        "pdMin": 41,
        "pdMax": 43,
        "pe": 15
      },
      {
        "pdMin": 44,
        "pdMax": 46,
        "pe": 16
      },
      {
        "pdMin": 47,
        "pdMax": 50,
        "pe": 17
      },
      {
        "pdMin": 51,
        "pdMax": 51,
        "pe": 18
      },
      {
        "pdMin": 52,
        "pdMax": 52,
        "pe": 19
      },
      {
        "pdMin": 53,
        "pdMax": 53,
        "pe": 20
      },
      {
        "pdMin": 54,
        "pdMax": 54,
        "pe": 21
      }
    ],
    "16_4": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 5,
        "pe": 2
      },
      {
        "pdMin": 6,
        "pdMax": 8,
        "pe": 3
      },
      {
        "pdMin": 9,
        "pdMax": 11,
        "pe": 4
      },
      {
        "pdMin": 12,
        "pdMax": 14,
        "pe": 5
      },
      {
        "pdMin": 15,
        "pdMax": 17,
        "pe": 6
      },
      {
        "pdMin": 18,
        "pdMax": 20,
        "pe": 7
      },
      {
        "pdMin": 21,
        "pdMax": 23,
        "pe": 8
      },
      {
        "pdMin": 24,
        "pdMax": 26,
        "pe": 9
      },
      {
        "pdMin": 27,
        "pdMax": 29,
        "pe": 10
      },
      {
        "pdMin": 30,
        "pdMax": 32,
        "pe": 11
      },
      {
        "pdMin": 33,
        "pdMax": 35,
        "pe": 12
      },
      {
        "pdMin": 36,
        "pdMax": 38,
        "pe": 13
      },
      {
        "pdMin": 39,
        "pdMax": 41,
        "pe": 14
      },
      {
        "pdMin": 42,
        "pdMax": 44,
        "pe": 15
      },
      {
        "pdMin": 45,
        "pdMax": 47,
        "pe": 16
      },
      {
        "pdMin": 48,
        "pdMax": 51,
        "pe": 17
      },
      {
        "pdMin": 52,
        "pdMax": 52,
        "pe": 18
      },
      {
        "pdMin": 53,
        "pdMax": 53,
        "pe": 19
      },
      {
        "pdMin": 54,
        "pdMax": 54,
        "pe": 20
      }
    ],
    "16_8": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 5,
        "pe": 2
      },
      {
        "pdMin": 6,
        "pdMax": 8,
        "pe": 3
      },
      {
        "pdMin": 9,
        "pdMax": 11,
        "pe": 4
      },
      {
        "pdMin": 12,
        "pdMax": 14,
        "pe": 5
      },
      {
        "pdMin": 15,
        "pdMax": 17,
        "pe": 6
      },
      {
        "pdMin": 18,
        "pdMax": 20,
        "pe": 7
      },
      {
        "pdMin": 21,
        "pdMax": 23,
        "pe": 8
      },
      {
        "pdMin": 24,
        "pdMax": 26,
        "pe": 9
      },
      {
        "pdMin": 27,
        "pdMax": 29,
        "pe": 10
      },
      {
        "pdMin": 30,
        "pdMax": 32,
        "pe": 11
      },
      {
        "pdMin": 33,
        "pdMax": 35,
        "pe": 12
      },
      {
        "pdMin": 36,
        "pdMax": 38,
        "pe": 13
      },
      {
        "pdMin": 39,
        "pdMax": 41,
        "pe": 14
      },
      {
        "pdMin": 42,
        "pdMax": 44,
        "pe": 15
      },
      {
        "pdMin": 45,
        "pdMax": 47,
        "pe": 16
      },
      {
        "pdMin": 48,
        "pdMax": 51,
        "pe": 17
      },
      {
        "pdMin": 52,
        "pdMax": 52,
        "pe": 18
      },
      {
        "pdMin": 53,
        "pdMax": 53,
        "pe": 19
      },
      {
        "pdMin": 54,
        "pdMax": 54,
        "pe": 20
      }
    ]
  },
  "bal": {
    "6_0": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 1,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 3
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 4
      },
      {
        "pdMin": 6,
        "pdMax": 6,
        "pe": 5
      },
      {
        "pdMin": 7,
        "pdMax": 7,
        "pe": 6
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 7
      },
      {
        "pdMin": 10,
        "pdMax": 10,
        "pe": 8
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 9
      },
      {
        "pdMin": 13,
        "pdMax": 13,
        "pe": 10
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 11
      },
      {
        "pdMin": 16,
        "pdMax": 16,
        "pe": 12
      },
      {
        "pdMin": 17,
        "pdMax": 17,
        "pe": 13
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 14
      },
      {
        "pdMin": 20,
        "pdMax": 20,
        "pe": 15
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 16
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 17
      },
      {
        "pdMin": 25,
        "pdMax": 26,
        "pe": 18
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 19
      },
      {
        "pdMin": 28,
        "pdMax": 29,
        "pe": 20
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 21
      },
      {
        "pdMin": 31,
        "pdMax": 31,
        "pe": 22
      },
      {
        "pdMin": 32,
        "pdMax": 32,
        "pe": 23
      },
      {
        "pdMin": 33,
        "pdMax": 33,
        "pe": 24
      },
      {
        "pdMin": 34,
        "pdMax": 34,
        "pe": 25
      }
    ],
    "6_4": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 1,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 3
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 4
      },
      {
        "pdMin": 6,
        "pdMax": 6,
        "pe": 5
      },
      {
        "pdMin": 7,
        "pdMax": 7,
        "pe": 6
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 7
      },
      {
        "pdMin": 10,
        "pdMax": 10,
        "pe": 8
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 9
      },
      {
        "pdMin": 13,
        "pdMax": 13,
        "pe": 10
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 11
      },
      {
        "pdMin": 16,
        "pdMax": 16,
        "pe": 12
      },
      {
        "pdMin": 17,
        "pdMax": 17,
        "pe": 13
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 14
      },
      {
        "pdMin": 20,
        "pdMax": 20,
        "pe": 15
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 16
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 17
      },
      {
        "pdMin": 25,
        "pdMax": 26,
        "pe": 18
      },
      {
        "pdMin": 27,
        "pdMax": 28,
        "pe": 19
      },
      {
        "pdMin": 29,
        "pdMax": 30,
        "pe": 20
      },
      {
        "pdMin": 31,
        "pdMax": 31,
        "pe": 21
      },
      {
        "pdMin": 32,
        "pdMax": 32,
        "pe": 22
      },
      {
        "pdMin": 33,
        "pdMax": 33,
        "pe": 23
      },
      {
        "pdMin": 34,
        "pdMax": 34,
        "pe": 24
      }
    ],
    "6_8": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 1,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 3
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 4
      },
      {
        "pdMin": 6,
        "pdMax": 6,
        "pe": 5
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 6
      },
      {
        "pdMin": 9,
        "pdMax": 9,
        "pe": 7
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 8
      },
      {
        "pdMin": 12,
        "pdMax": 12,
        "pe": 9
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 10
      },
      {
        "pdMin": 15,
        "pdMax": 15,
        "pe": 11
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 12
      },
      {
        "pdMin": 18,
        "pdMax": 18,
        "pe": 13
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 14
      },
      {
        "pdMin": 21,
        "pdMax": 21,
        "pe": 15
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 16
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 17
      },
      {
        "pdMin": 26,
        "pdMax": 27,
        "pe": 18
      },
      {
        "pdMin": 28,
        "pdMax": 29,
        "pe": 19
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 20
      },
      {
        "pdMin": 31,
        "pdMax": 31,
        "pe": 21
      },
      {
        "pdMin": 32,
        "pdMax": 32,
        "pe": 22
      },
      {
        "pdMin": 33,
        "pdMax": 33,
        "pe": 23
      },
      {
        "pdMin": 34,
        "pdMax": 34,
        "pe": 24
      }
    ],
    "7_0": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 4
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 5
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 6
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 7
      },
      {
        "pdMin": 11,
        "pdMax": 11,
        "pe": 8
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 9
      },
      {
        "pdMin": 14,
        "pdMax": 14,
        "pe": 10
      },
      {
        "pdMin": 15,
        "pdMax": 16,
        "pe": 11
      },
      {
        "pdMin": 17,
        "pdMax": 17,
        "pe": 12
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 13
      },
      {
        "pdMin": 20,
        "pdMax": 20,
        "pe": 14
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 15
      },
      {
        "pdMin": 23,
        "pdMax": 23,
        "pe": 16
      },
      {
        "pdMin": 24,
        "pdMax": 26,
        "pe": 17
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 18
      },
      {
        "pdMin": 28,
        "pdMax": 29,
        "pe": 19
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 20
      },
      {
        "pdMin": 31,
        "pdMax": 31,
        "pe": 21
      },
      {
        "pdMin": 32,
        "pdMax": 32,
        "pe": 22
      },
      {
        "pdMin": 33,
        "pdMax": 33,
        "pe": 23
      },
      {
        "pdMin": 34,
        "pdMax": 34,
        "pe": 24
      }
    ],
    "7_4": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 4
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 5
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 6
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 7
      },
      {
        "pdMin": 11,
        "pdMax": 11,
        "pe": 8
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 9
      },
      {
        "pdMin": 14,
        "pdMax": 14,
        "pe": 10
      },
      {
        "pdMin": 15,
        "pdMax": 16,
        "pe": 11
      },
      {
        "pdMin": 17,
        "pdMax": 17,
        "pe": 12
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 13
      },
      {
        "pdMin": 20,
        "pdMax": 20,
        "pe": 14
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 15
      },
      {
        "pdMin": 23,
        "pdMax": 23,
        "pe": 16
      },
      {
        "pdMin": 24,
        "pdMax": 26,
        "pe": 17
      },
      {
        "pdMin": 27,
        "pdMax": 28,
        "pe": 18
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 19
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 20
      },
      {
        "pdMin": 31,
        "pdMax": 31,
        "pe": 21
      },
      {
        "pdMin": 32,
        "pdMax": 32,
        "pe": 22
      },
      {
        "pdMin": 33,
        "pdMax": 33,
        "pe": 23
      },
      {
        "pdMin": 34,
        "pdMax": 34,
        "pe": 24
      }
    ],
    "7_8": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 4
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 5
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 6
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 7
      },
      {
        "pdMin": 11,
        "pdMax": 11,
        "pe": 8
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 9
      },
      {
        "pdMin": 14,
        "pdMax": 14,
        "pe": 10
      },
      {
        "pdMin": 15,
        "pdMax": 16,
        "pe": 11
      },
      {
        "pdMin": 17,
        "pdMax": 17,
        "pe": 12
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 13
      },
      {
        "pdMin": 20,
        "pdMax": 20,
        "pe": 14
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 15
      },
      {
        "pdMin": 23,
        "pdMax": 23,
        "pe": 16
      },
      {
        "pdMin": 24,
        "pdMax": 26,
        "pe": 17
      },
      {
        "pdMin": 27,
        "pdMax": 28,
        "pe": 18
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 19
      },
      {
        "pdMin": 30,
        "pdMax": 31,
        "pe": 20
      },
      {
        "pdMin": 32,
        "pdMax": 32,
        "pe": 21
      },
      {
        "pdMin": 33,
        "pdMax": 33,
        "pe": 22
      },
      {
        "pdMin": 34,
        "pdMax": 34,
        "pe": 23
      }
    ],
    "8_0": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 4
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 5
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 6
      },
      {
        "pdMin": 10,
        "pdMax": 10,
        "pe": 7
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 8
      },
      {
        "pdMin": 13,
        "pdMax": 13,
        "pe": 9
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 10
      },
      {
        "pdMin": 16,
        "pdMax": 16,
        "pe": 11
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 12
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 13
      },
      {
        "pdMin": 21,
        "pdMax": 21,
        "pe": 14
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 15
      },
      {
        "pdMin": 24,
        "pdMax": 24,
        "pe": 16
      },
      {
        "pdMin": 25,
        "pdMax": 27,
        "pe": 17
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 18
      },
      {
        "pdMin": 29,
        "pdMax": 30,
        "pe": 19
      },
      {
        "pdMin": 31,
        "pdMax": 31,
        "pe": 20
      },
      {
        "pdMin": 32,
        "pdMax": 32,
        "pe": 21
      },
      {
        "pdMin": 33,
        "pdMax": 33,
        "pe": 22
      },
      {
        "pdMin": 34,
        "pdMax": 34,
        "pe": 23
      }
    ],
    "8_4": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 4
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 5
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 6
      },
      {
        "pdMin": 10,
        "pdMax": 10,
        "pe": 7
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 8
      },
      {
        "pdMin": 13,
        "pdMax": 13,
        "pe": 9
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 10
      },
      {
        "pdMin": 16,
        "pdMax": 16,
        "pe": 11
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 12
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 13
      },
      {
        "pdMin": 21,
        "pdMax": 21,
        "pe": 14
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 15
      },
      {
        "pdMin": 24,
        "pdMax": 24,
        "pe": 16
      },
      {
        "pdMin": 25,
        "pdMax": 27,
        "pe": 17
      },
      {
        "pdMin": 28,
        "pdMax": 29,
        "pe": 18
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 19
      },
      {
        "pdMin": 31,
        "pdMax": 31,
        "pe": 20
      },
      {
        "pdMin": 32,
        "pdMax": 32,
        "pe": 21
      },
      {
        "pdMin": 33,
        "pdMax": 33,
        "pe": 22
      },
      {
        "pdMin": 34,
        "pdMax": 34,
        "pe": 23
      }
    ],
    "8_8": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 4
      },
      {
        "pdMin": 7,
        "pdMax": 7,
        "pe": 5
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 6
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 7
      },
      {
        "pdMin": 12,
        "pdMax": 12,
        "pe": 8
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 9
      },
      {
        "pdMin": 15,
        "pdMax": 15,
        "pe": 10
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 11
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 12
      },
      {
        "pdMin": 20,
        "pdMax": 20,
        "pe": 13
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 14
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 15
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 16
      },
      {
        "pdMin": 26,
        "pdMax": 28,
        "pe": 17
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 18
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 19
      },
      {
        "pdMin": 31,
        "pdMax": 31,
        "pe": 20
      },
      {
        "pdMin": 32,
        "pdMax": 32,
        "pe": 21
      },
      {
        "pdMin": 33,
        "pdMax": 33,
        "pe": 22
      },
      {
        "pdMin": 34,
        "pdMax": 34,
        "pe": 23
      }
    ],
    "9_0": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 4
      },
      {
        "pdMin": 7,
        "pdMax": 7,
        "pe": 5
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 6
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 7
      },
      {
        "pdMin": 12,
        "pdMax": 12,
        "pe": 8
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 9
      },
      {
        "pdMin": 15,
        "pdMax": 15,
        "pe": 10
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 11
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 12
      },
      {
        "pdMin": 20,
        "pdMax": 20,
        "pe": 13
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 14
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 15
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 16
      },
      {
        "pdMin": 26,
        "pdMax": 28,
        "pe": 17
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 18
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 19
      },
      {
        "pdMin": 31,
        "pdMax": 31,
        "pe": 20
      },
      {
        "pdMin": 32,
        "pdMax": 32,
        "pe": 21
      },
      {
        "pdMin": 33,
        "pdMax": 33,
        "pe": 22
      },
      {
        "pdMin": 34,
        "pdMax": 34,
        "pe": 23
      }
    ],
    "9_4": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 4
      },
      {
        "pdMin": 7,
        "pdMax": 7,
        "pe": 5
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 6
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 7
      },
      {
        "pdMin": 12,
        "pdMax": 12,
        "pe": 8
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 9
      },
      {
        "pdMin": 15,
        "pdMax": 15,
        "pe": 10
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 11
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 12
      },
      {
        "pdMin": 20,
        "pdMax": 20,
        "pe": 13
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 14
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 15
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 16
      },
      {
        "pdMin": 26,
        "pdMax": 28,
        "pe": 17
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 18
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 19
      },
      {
        "pdMin": 31,
        "pdMax": 31,
        "pe": 20
      },
      {
        "pdMin": 32,
        "pdMax": 32,
        "pe": 21
      },
      {
        "pdMin": 33,
        "pdMax": 33,
        "pe": 22
      },
      {
        "pdMin": 34,
        "pdMax": 34,
        "pe": 23
      }
    ],
    "9_8": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 4
      },
      {
        "pdMin": 7,
        "pdMax": 7,
        "pe": 5
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 6
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 7
      },
      {
        "pdMin": 12,
        "pdMax": 12,
        "pe": 8
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 9
      },
      {
        "pdMin": 15,
        "pdMax": 15,
        "pe": 10
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 11
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 12
      },
      {
        "pdMin": 20,
        "pdMax": 20,
        "pe": 13
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 14
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 15
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 16
      },
      {
        "pdMin": 26,
        "pdMax": 28,
        "pe": 17
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 18
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 19
      },
      {
        "pdMin": 31,
        "pdMax": 31,
        "pe": 20
      },
      {
        "pdMin": 32,
        "pdMax": 32,
        "pe": 21
      },
      {
        "pdMin": 33,
        "pdMax": 33,
        "pe": 22
      },
      {
        "pdMin": 34,
        "pdMax": 34,
        "pe": 23
      }
    ],
    "10_0": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 4
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 5
      },
      {
        "pdMin": 9,
        "pdMax": 9,
        "pe": 6
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 7
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 8
      },
      {
        "pdMin": 14,
        "pdMax": 14,
        "pe": 9
      },
      {
        "pdMin": 15,
        "pdMax": 16,
        "pe": 10
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 11
      },
      {
        "pdMin": 19,
        "pdMax": 19,
        "pe": 12
      },
      {
        "pdMin": 20,
        "pdMax": 21,
        "pe": 13
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 14
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 15
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 16
      },
      {
        "pdMin": 27,
        "pdMax": 29,
        "pe": 17
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 18
      },
      {
        "pdMin": 31,
        "pdMax": 31,
        "pe": 19
      },
      {
        "pdMin": 32,
        "pdMax": 32,
        "pe": 20
      },
      {
        "pdMin": 33,
        "pdMax": 33,
        "pe": 21
      },
      {
        "pdMin": 34,
        "pdMax": 34,
        "pe": 22
      }
    ],
    "10_4": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 4
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 5
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 6
      },
      {
        "pdMin": 11,
        "pdMax": 11,
        "pe": 7
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 8
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 9
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 10
      },
      {
        "pdMin": 18,
        "pdMax": 18,
        "pe": 11
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 12
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 13
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 14
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 15
      },
      {
        "pdMin": 26,
        "pdMax": 27,
        "pe": 16
      },
      {
        "pdMin": 28,
        "pdMax": 30,
        "pe": 17
      },
      {
        "pdMin": 31,
        "pdMax": 31,
        "pe": 18
      },
      {
        "pdMin": 32,
        "pdMax": 32,
        "pe": 19
      },
      {
        "pdMin": 33,
        "pdMax": 33,
        "pe": 20
      },
      {
        "pdMin": 34,
        "pdMax": 34,
        "pe": 21
      }
    ],
    "10_8": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 4
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 5
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 6
      },
      {
        "pdMin": 11,
        "pdMax": 11,
        "pe": 7
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 8
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 9
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 10
      },
      {
        "pdMin": 18,
        "pdMax": 18,
        "pe": 11
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 12
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 13
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 14
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 15
      },
      {
        "pdMin": 26,
        "pdMax": 27,
        "pe": 16
      },
      {
        "pdMin": 28,
        "pdMax": 30,
        "pe": 17
      },
      {
        "pdMin": 31,
        "pdMax": 31,
        "pe": 18
      },
      {
        "pdMin": 32,
        "pdMax": 32,
        "pe": 19
      },
      {
        "pdMin": 33,
        "pdMax": 33,
        "pe": 20
      },
      {
        "pdMin": 34,
        "pdMax": 34,
        "pe": 21
      }
    ],
    "11_0": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 4
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 5
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 6
      },
      {
        "pdMin": 11,
        "pdMax": 11,
        "pe": 7
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 8
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 9
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 10
      },
      {
        "pdMin": 18,
        "pdMax": 18,
        "pe": 11
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 12
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 13
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 14
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 15
      },
      {
        "pdMin": 26,
        "pdMax": 27,
        "pe": 16
      },
      {
        "pdMin": 28,
        "pdMax": 30,
        "pe": 17
      },
      {
        "pdMin": 31,
        "pdMax": 31,
        "pe": 18
      },
      {
        "pdMin": 32,
        "pdMax": 32,
        "pe": 19
      },
      {
        "pdMin": 33,
        "pdMax": 33,
        "pe": 20
      },
      {
        "pdMin": 34,
        "pdMax": 34,
        "pe": 21
      }
    ],
    "11_4": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 4
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 5
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 6
      },
      {
        "pdMin": 11,
        "pdMax": 11,
        "pe": 7
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 8
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 9
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 10
      },
      {
        "pdMin": 18,
        "pdMax": 18,
        "pe": 11
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 12
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 13
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 14
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 15
      },
      {
        "pdMin": 26,
        "pdMax": 27,
        "pe": 16
      },
      {
        "pdMin": 28,
        "pdMax": 30,
        "pe": 17
      },
      {
        "pdMin": 31,
        "pdMax": 31,
        "pe": 18
      },
      {
        "pdMin": 32,
        "pdMax": 32,
        "pe": 19
      },
      {
        "pdMin": 33,
        "pdMax": 33,
        "pe": 20
      },
      {
        "pdMin": 34,
        "pdMax": 34,
        "pe": 21
      }
    ],
    "11_8": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 4
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 5
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 6
      },
      {
        "pdMin": 11,
        "pdMax": 11,
        "pe": 7
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 8
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 9
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 10
      },
      {
        "pdMin": 18,
        "pdMax": 18,
        "pe": 11
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 12
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 13
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 14
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 15
      },
      {
        "pdMin": 26,
        "pdMax": 27,
        "pe": 16
      },
      {
        "pdMin": 28,
        "pdMax": 30,
        "pe": 17
      },
      {
        "pdMin": 31,
        "pdMax": 31,
        "pe": 18
      },
      {
        "pdMin": 32,
        "pdMax": 32,
        "pe": 19
      },
      {
        "pdMin": 33,
        "pdMax": 33,
        "pe": 20
      },
      {
        "pdMin": 34,
        "pdMax": 34,
        "pe": 21
      }
    ],
    "12_0": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 4
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 5
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 6
      },
      {
        "pdMin": 11,
        "pdMax": 11,
        "pe": 7
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 8
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 9
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 10
      },
      {
        "pdMin": 18,
        "pdMax": 18,
        "pe": 11
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 12
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 13
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 14
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 15
      },
      {
        "pdMin": 26,
        "pdMax": 27,
        "pe": 16
      },
      {
        "pdMin": 28,
        "pdMax": 30,
        "pe": 17
      },
      {
        "pdMin": 31,
        "pdMax": 31,
        "pe": 18
      },
      {
        "pdMin": 32,
        "pdMax": 32,
        "pe": 19
      },
      {
        "pdMin": 33,
        "pdMax": 33,
        "pe": 20
      },
      {
        "pdMin": 34,
        "pdMax": 34,
        "pe": 21
      }
    ],
    "12_4": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 4
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 5
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 6
      },
      {
        "pdMin": 11,
        "pdMax": 11,
        "pe": 7
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 8
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 9
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 10
      },
      {
        "pdMin": 18,
        "pdMax": 18,
        "pe": 11
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 12
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 13
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 14
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 15
      },
      {
        "pdMin": 26,
        "pdMax": 27,
        "pe": 16
      },
      {
        "pdMin": 28,
        "pdMax": 30,
        "pe": 17
      },
      {
        "pdMin": 31,
        "pdMax": 31,
        "pe": 18
      },
      {
        "pdMin": 32,
        "pdMax": 32,
        "pe": 19
      },
      {
        "pdMin": 33,
        "pdMax": 33,
        "pe": 20
      },
      {
        "pdMin": 34,
        "pdMax": 34,
        "pe": 21
      }
    ],
    "12_8": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 4
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 5
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 6
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 7
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 8
      },
      {
        "pdMin": 15,
        "pdMax": 15,
        "pe": 9
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 10
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 11
      },
      {
        "pdMin": 20,
        "pdMax": 21,
        "pe": 12
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 13
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 14
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 15
      },
      {
        "pdMin": 27,
        "pdMax": 28,
        "pe": 16
      },
      {
        "pdMin": 29,
        "pdMax": 31,
        "pe": 17
      },
      {
        "pdMin": 32,
        "pdMax": 32,
        "pe": 18
      },
      {
        "pdMin": 33,
        "pdMax": 33,
        "pe": 19
      },
      {
        "pdMin": 34,
        "pdMax": 34,
        "pe": 20
      }
    ],
    "13_0": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 4
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 5
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 6
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 7
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 8
      },
      {
        "pdMin": 15,
        "pdMax": 15,
        "pe": 9
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 10
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 11
      },
      {
        "pdMin": 20,
        "pdMax": 21,
        "pe": 12
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 13
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 14
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 15
      },
      {
        "pdMin": 27,
        "pdMax": 28,
        "pe": 16
      },
      {
        "pdMin": 29,
        "pdMax": 31,
        "pe": 17
      },
      {
        "pdMin": 32,
        "pdMax": 32,
        "pe": 18
      },
      {
        "pdMin": 33,
        "pdMax": 33,
        "pe": 19
      },
      {
        "pdMin": 34,
        "pdMax": 34,
        "pe": 20
      }
    ],
    "13_4": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 4
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 5
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 6
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 7
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 8
      },
      {
        "pdMin": 15,
        "pdMax": 15,
        "pe": 9
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 10
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 11
      },
      {
        "pdMin": 20,
        "pdMax": 21,
        "pe": 12
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 13
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 14
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 15
      },
      {
        "pdMin": 27,
        "pdMax": 28,
        "pe": 16
      },
      {
        "pdMin": 29,
        "pdMax": 31,
        "pe": 17
      },
      {
        "pdMin": 32,
        "pdMax": 32,
        "pe": 18
      },
      {
        "pdMin": 33,
        "pdMax": 33,
        "pe": 19
      },
      {
        "pdMin": 34,
        "pdMax": 34,
        "pe": 20
      }
    ],
    "13_8": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 4
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 5
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 6
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 7
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 8
      },
      {
        "pdMin": 15,
        "pdMax": 15,
        "pe": 9
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 10
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 11
      },
      {
        "pdMin": 20,
        "pdMax": 21,
        "pe": 12
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 13
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 14
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 15
      },
      {
        "pdMin": 27,
        "pdMax": 28,
        "pe": 16
      },
      {
        "pdMin": 29,
        "pdMax": 31,
        "pe": 17
      },
      {
        "pdMin": 32,
        "pdMax": 32,
        "pe": 18
      },
      {
        "pdMin": 33,
        "pdMax": 33,
        "pe": 19
      },
      {
        "pdMin": 34,
        "pdMax": 34,
        "pe": 20
      }
    ],
    "14_0": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 4
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 5
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 6
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 7
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 8
      },
      {
        "pdMin": 15,
        "pdMax": 15,
        "pe": 9
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 10
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 11
      },
      {
        "pdMin": 20,
        "pdMax": 21,
        "pe": 12
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 13
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 14
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 15
      },
      {
        "pdMin": 27,
        "pdMax": 28,
        "pe": 16
      },
      {
        "pdMin": 29,
        "pdMax": 31,
        "pe": 17
      },
      {
        "pdMin": 32,
        "pdMax": 32,
        "pe": 18
      },
      {
        "pdMin": 33,
        "pdMax": 33,
        "pe": 19
      },
      {
        "pdMin": 34,
        "pdMax": 34,
        "pe": 20
      }
    ],
    "14_4": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 3
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 4
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 5
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 6
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 7
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 8
      },
      {
        "pdMin": 15,
        "pdMax": 16,
        "pe": 9
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 10
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 11
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 12
      },
      {
        "pdMin": 23,
        "pdMax": 23,
        "pe": 13
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 14
      },
      {
        "pdMin": 26,
        "pdMax": 27,
        "pe": 15
      },
      {
        "pdMin": 28,
        "pdMax": 29,
        "pe": 16
      },
      {
        "pdMin": 30,
        "pdMax": 32,
        "pe": 17
      },
      {
        "pdMin": 33,
        "pdMax": 33,
        "pe": 18
      },
      {
        "pdMin": 34,
        "pdMax": 34,
        "pe": 19
      }
    ],
    "14_8": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 3
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 4
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 5
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 6
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 7
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 8
      },
      {
        "pdMin": 15,
        "pdMax": 16,
        "pe": 9
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 10
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 11
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 12
      },
      {
        "pdMin": 23,
        "pdMax": 23,
        "pe": 13
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 14
      },
      {
        "pdMin": 26,
        "pdMax": 27,
        "pe": 15
      },
      {
        "pdMin": 28,
        "pdMax": 29,
        "pe": 16
      },
      {
        "pdMin": 30,
        "pdMax": 32,
        "pe": 17
      },
      {
        "pdMin": 33,
        "pdMax": 33,
        "pe": 18
      },
      {
        "pdMin": 34,
        "pdMax": 34,
        "pe": 19
      }
    ],
    "15_0": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 3
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 4
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 5
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 6
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 7
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 8
      },
      {
        "pdMin": 15,
        "pdMax": 16,
        "pe": 9
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 10
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 11
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 12
      },
      {
        "pdMin": 23,
        "pdMax": 23,
        "pe": 13
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 14
      },
      {
        "pdMin": 26,
        "pdMax": 27,
        "pe": 15
      },
      {
        "pdMin": 28,
        "pdMax": 29,
        "pe": 16
      },
      {
        "pdMin": 30,
        "pdMax": 32,
        "pe": 17
      },
      {
        "pdMin": 33,
        "pdMax": 33,
        "pe": 18
      },
      {
        "pdMin": 34,
        "pdMax": 34,
        "pe": 19
      }
    ],
    "15_4": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 3
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 4
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 5
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 6
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 7
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 8
      },
      {
        "pdMin": 15,
        "pdMax": 16,
        "pe": 9
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 10
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 11
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 12
      },
      {
        "pdMin": 23,
        "pdMax": 23,
        "pe": 13
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 14
      },
      {
        "pdMin": 26,
        "pdMax": 27,
        "pe": 15
      },
      {
        "pdMin": 28,
        "pdMax": 29,
        "pe": 16
      },
      {
        "pdMin": 30,
        "pdMax": 32,
        "pe": 17
      },
      {
        "pdMin": 33,
        "pdMax": 33,
        "pe": 18
      },
      {
        "pdMin": 34,
        "pdMax": 34,
        "pe": 19
      }
    ],
    "15_8": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 3
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 4
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 5
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 6
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 7
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 8
      },
      {
        "pdMin": 15,
        "pdMax": 16,
        "pe": 9
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 10
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 11
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 12
      },
      {
        "pdMin": 23,
        "pdMax": 23,
        "pe": 13
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 14
      },
      {
        "pdMin": 26,
        "pdMax": 27,
        "pe": 15
      },
      {
        "pdMin": 28,
        "pdMax": 29,
        "pe": 16
      },
      {
        "pdMin": 30,
        "pdMax": 32,
        "pe": 17
      },
      {
        "pdMin": 33,
        "pdMax": 33,
        "pe": 18
      },
      {
        "pdMin": 34,
        "pdMax": 34,
        "pe": 19
      }
    ],
    "16_0": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 3
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 4
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 5
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 6
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 7
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 8
      },
      {
        "pdMin": 15,
        "pdMax": 16,
        "pe": 9
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 10
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 11
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 12
      },
      {
        "pdMin": 23,
        "pdMax": 23,
        "pe": 13
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 14
      },
      {
        "pdMin": 26,
        "pdMax": 27,
        "pe": 15
      },
      {
        "pdMin": 28,
        "pdMax": 29,
        "pe": 16
      },
      {
        "pdMin": 30,
        "pdMax": 32,
        "pe": 17
      },
      {
        "pdMin": 33,
        "pdMax": 33,
        "pe": 18
      },
      {
        "pdMin": 34,
        "pdMax": 34,
        "pe": 19
      }
    ]
  },
  "puz": {
    "6_0": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 2
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 3
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 4
      },
      {
        "pdMin": 4,
        "pdMax": 4,
        "pe": 5
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 6
      },
      {
        "pdMin": 6,
        "pdMax": 6,
        "pe": 7
      },
      {
        "pdMin": 7,
        "pdMax": 7,
        "pe": 8
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 9
      },
      {
        "pdMin": 9,
        "pdMax": 9,
        "pe": 10
      },
      {
        "pdMin": 10,
        "pdMax": 10,
        "pe": 11
      },
      {
        "pdMin": 11,
        "pdMax": 11,
        "pe": 12
      },
      {
        "pdMin": 12,
        "pdMax": 12,
        "pe": 13
      },
      {
        "pdMin": 13,
        "pdMax": 13,
        "pe": 14
      },
      {
        "pdMin": 14,
        "pdMax": 14,
        "pe": 15
      },
      {
        "pdMin": 15,
        "pdMax": 15,
        "pe": 16
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 17
      },
      {
        "pdMin": 18,
        "pdMax": 18,
        "pe": 18
      },
      {
        "pdMin": 19,
        "pdMax": 19,
        "pe": 19
      },
      {
        "pdMin": 20,
        "pdMax": 20,
        "pe": 20
      },
      {
        "pdMin": 21,
        "pdMax": 21,
        "pe": 21
      },
      {
        "pdMin": 22,
        "pdMax": 22,
        "pe": 22
      },
      {
        "pdMin": 23,
        "pdMax": 23,
        "pe": 24
      },
      {
        "pdMin": 24,
        "pdMax": 24,
        "pe": 26
      },
      {
        "pdMin": 25,
        "pdMax": 29,
        "pe": 28
      }
    ],
    "6_4": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 2
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 3
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 4
      },
      {
        "pdMin": 4,
        "pdMax": 4,
        "pe": 5
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 6
      },
      {
        "pdMin": 6,
        "pdMax": 6,
        "pe": 7
      },
      {
        "pdMin": 7,
        "pdMax": 7,
        "pe": 8
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 9
      },
      {
        "pdMin": 10,
        "pdMax": 10,
        "pe": 10
      },
      {
        "pdMin": 11,
        "pdMax": 11,
        "pe": 11
      },
      {
        "pdMin": 12,
        "pdMax": 12,
        "pe": 12
      },
      {
        "pdMin": 13,
        "pdMax": 13,
        "pe": 13
      },
      {
        "pdMin": 14,
        "pdMax": 14,
        "pe": 14
      },
      {
        "pdMin": 15,
        "pdMax": 15,
        "pe": 15
      },
      {
        "pdMin": 16,
        "pdMax": 16,
        "pe": 16
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 17
      },
      {
        "pdMin": 19,
        "pdMax": 19,
        "pe": 18
      },
      {
        "pdMin": 20,
        "pdMax": 20,
        "pe": 19
      },
      {
        "pdMin": 21,
        "pdMax": 21,
        "pe": 20
      },
      {
        "pdMin": 22,
        "pdMax": 22,
        "pe": 21
      },
      {
        "pdMin": 23,
        "pdMax": 23,
        "pe": 22
      },
      {
        "pdMin": 24,
        "pdMax": 24,
        "pe": 24
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 26
      },
      {
        "pdMin": 26,
        "pdMax": 29,
        "pe": 28
      }
    ],
    "6_8": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 2
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 3
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 4
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 5
      },
      {
        "pdMin": 6,
        "pdMax": 6,
        "pe": 6
      },
      {
        "pdMin": 7,
        "pdMax": 7,
        "pe": 7
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 8
      },
      {
        "pdMin": 9,
        "pdMax": 9,
        "pe": 9
      },
      {
        "pdMin": 10,
        "pdMax": 10,
        "pe": 10
      },
      {
        "pdMin": 11,
        "pdMax": 11,
        "pe": 11
      },
      {
        "pdMin": 12,
        "pdMax": 12,
        "pe": 12
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 13
      },
      {
        "pdMin": 15,
        "pdMax": 15,
        "pe": 14
      },
      {
        "pdMin": 16,
        "pdMax": 16,
        "pe": 15
      },
      {
        "pdMin": 17,
        "pdMax": 17,
        "pe": 16
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 17
      },
      {
        "pdMin": 20,
        "pdMax": 20,
        "pe": 18
      },
      {
        "pdMin": 21,
        "pdMax": 21,
        "pe": 19
      },
      {
        "pdMin": 22,
        "pdMax": 22,
        "pe": 20
      },
      {
        "pdMin": 23,
        "pdMax": 23,
        "pe": 21
      },
      {
        "pdMin": 24,
        "pdMax": 24,
        "pe": 23
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 25
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 27
      },
      {
        "pdMin": 27,
        "pdMax": 29,
        "pe": 28
      }
    ],
    "7_0": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 2
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 3
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 4
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 5
      },
      {
        "pdMin": 6,
        "pdMax": 6,
        "pe": 6
      },
      {
        "pdMin": 7,
        "pdMax": 7,
        "pe": 7
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 8
      },
      {
        "pdMin": 9,
        "pdMax": 9,
        "pe": 9
      },
      {
        "pdMin": 10,
        "pdMax": 10,
        "pe": 10
      },
      {
        "pdMin": 11,
        "pdMax": 11,
        "pe": 11
      },
      {
        "pdMin": 12,
        "pdMax": 12,
        "pe": 12
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 13
      },
      {
        "pdMin": 15,
        "pdMax": 15,
        "pe": 14
      },
      {
        "pdMin": 16,
        "pdMax": 16,
        "pe": 15
      },
      {
        "pdMin": 17,
        "pdMax": 17,
        "pe": 16
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 17
      },
      {
        "pdMin": 20,
        "pdMax": 20,
        "pe": 18
      },
      {
        "pdMin": 21,
        "pdMax": 21,
        "pe": 19
      },
      {
        "pdMin": 22,
        "pdMax": 22,
        "pe": 20
      },
      {
        "pdMin": 23,
        "pdMax": 23,
        "pe": 21
      },
      {
        "pdMin": 24,
        "pdMax": 24,
        "pe": 22
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 24
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 26
      },
      {
        "pdMin": 27,
        "pdMax": 29,
        "pe": 28
      }
    ],
    "7_4": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 2
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 3
      },
      {
        "pdMin": 4,
        "pdMax": 4,
        "pe": 4
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 5
      },
      {
        "pdMin": 6,
        "pdMax": 6,
        "pe": 6
      },
      {
        "pdMin": 7,
        "pdMax": 7,
        "pe": 7
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 8
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 9
      },
      {
        "pdMin": 11,
        "pdMax": 11,
        "pe": 10
      },
      {
        "pdMin": 12,
        "pdMax": 12,
        "pe": 11
      },
      {
        "pdMin": 13,
        "pdMax": 13,
        "pe": 12
      },
      {
        "pdMin": 14,
        "pdMax": 14,
        "pe": 13
      },
      {
        "pdMin": 15,
        "pdMax": 15,
        "pe": 14
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 15
      },
      {
        "pdMin": 18,
        "pdMax": 18,
        "pe": 16
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 17
      },
      {
        "pdMin": 21,
        "pdMax": 21,
        "pe": 18
      },
      {
        "pdMin": 22,
        "pdMax": 22,
        "pe": 19
      },
      {
        "pdMin": 23,
        "pdMax": 23,
        "pe": 20
      },
      {
        "pdMin": 24,
        "pdMax": 24,
        "pe": 21
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 22
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 24
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 26
      },
      {
        "pdMin": 28,
        "pdMax": 29,
        "pe": 28
      }
    ],
    "7_8": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 2
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 3
      },
      {
        "pdMin": 4,
        "pdMax": 4,
        "pe": 4
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 5
      },
      {
        "pdMin": 6,
        "pdMax": 6,
        "pe": 6
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 7
      },
      {
        "pdMin": 9,
        "pdMax": 9,
        "pe": 8
      },
      {
        "pdMin": 10,
        "pdMax": 10,
        "pe": 9
      },
      {
        "pdMin": 11,
        "pdMax": 11,
        "pe": 10
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 11
      },
      {
        "pdMin": 14,
        "pdMax": 14,
        "pe": 12
      },
      {
        "pdMin": 15,
        "pdMax": 15,
        "pe": 13
      },
      {
        "pdMin": 16,
        "pdMax": 16,
        "pe": 14
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 15
      },
      {
        "pdMin": 19,
        "pdMax": 19,
        "pe": 16
      },
      {
        "pdMin": 20,
        "pdMax": 21,
        "pe": 17
      },
      {
        "pdMin": 22,
        "pdMax": 22,
        "pe": 18
      },
      {
        "pdMin": 23,
        "pdMax": 23,
        "pe": 19
      },
      {
        "pdMin": 24,
        "pdMax": 24,
        "pe": 20
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 21
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 22
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 24
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 26
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 28
      }
    ],
    "8_0": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 1,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 3
      },
      {
        "pdMin": 4,
        "pdMax": 4,
        "pe": 4
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 5
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 6
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 7
      },
      {
        "pdMin": 9,
        "pdMax": 9,
        "pe": 8
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 9
      },
      {
        "pdMin": 12,
        "pdMax": 12,
        "pe": 10
      },
      {
        "pdMin": 13,
        "pdMax": 13,
        "pe": 11
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 12
      },
      {
        "pdMin": 16,
        "pdMax": 16,
        "pe": 13
      },
      {
        "pdMin": 17,
        "pdMax": 17,
        "pe": 14
      },
      {
        "pdMin": 18,
        "pdMax": 18,
        "pe": 15
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 16
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 17
      },
      {
        "pdMin": 23,
        "pdMax": 23,
        "pe": 18
      },
      {
        "pdMin": 24,
        "pdMax": 24,
        "pe": 19
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 20
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 21
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 23
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 25
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 27
      }
    ],
    "8_4": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 1,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 3
      },
      {
        "pdMin": 4,
        "pdMax": 4,
        "pe": 4
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 5
      },
      {
        "pdMin": 7,
        "pdMax": 7,
        "pe": 6
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 7
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 8
      },
      {
        "pdMin": 11,
        "pdMax": 11,
        "pe": 9
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 10
      },
      {
        "pdMin": 14,
        "pdMax": 14,
        "pe": 11
      },
      {
        "pdMin": 15,
        "pdMax": 15,
        "pe": 12
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 13
      },
      {
        "pdMin": 18,
        "pdMax": 18,
        "pe": 14
      },
      {
        "pdMin": 19,
        "pdMax": 19,
        "pe": 15
      },
      {
        "pdMin": 20,
        "pdMax": 21,
        "pe": 16
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 17
      },
      {
        "pdMin": 24,
        "pdMax": 24,
        "pe": 18
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 19
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 20
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 22
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 24
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 26
      }
    ],
    "8_8": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 1,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 3
      },
      {
        "pdMin": 4,
        "pdMax": 4,
        "pe": 4
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 5
      },
      {
        "pdMin": 7,
        "pdMax": 7,
        "pe": 6
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 7
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 8
      },
      {
        "pdMin": 11,
        "pdMax": 11,
        "pe": 9
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 10
      },
      {
        "pdMin": 14,
        "pdMax": 14,
        "pe": 11
      },
      {
        "pdMin": 15,
        "pdMax": 15,
        "pe": 12
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 13
      },
      {
        "pdMin": 18,
        "pdMax": 18,
        "pe": 14
      },
      {
        "pdMin": 19,
        "pdMax": 19,
        "pe": 15
      },
      {
        "pdMin": 20,
        "pdMax": 21,
        "pe": 16
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 17
      },
      {
        "pdMin": 24,
        "pdMax": 24,
        "pe": 18
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 19
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 20
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 21
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 23
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 25
      }
    ],
    "9_0": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 1,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 3
      },
      {
        "pdMin": 4,
        "pdMax": 4,
        "pe": 4
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 5
      },
      {
        "pdMin": 7,
        "pdMax": 7,
        "pe": 6
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 7
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 8
      },
      {
        "pdMin": 11,
        "pdMax": 11,
        "pe": 9
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 10
      },
      {
        "pdMin": 14,
        "pdMax": 14,
        "pe": 11
      },
      {
        "pdMin": 15,
        "pdMax": 15,
        "pe": 12
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 13
      },
      {
        "pdMin": 18,
        "pdMax": 18,
        "pe": 14
      },
      {
        "pdMin": 19,
        "pdMax": 19,
        "pe": 15
      },
      {
        "pdMin": 20,
        "pdMax": 21,
        "pe": 16
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 17
      },
      {
        "pdMin": 24,
        "pdMax": 24,
        "pe": 18
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 19
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 20
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 21
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 23
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 25
      }
    ],
    "9_4": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 1,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 3
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 4
      },
      {
        "pdMin": 6,
        "pdMax": 6,
        "pe": 5
      },
      {
        "pdMin": 7,
        "pdMax": 7,
        "pe": 6
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 7
      },
      {
        "pdMin": 10,
        "pdMax": 10,
        "pe": 8
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 9
      },
      {
        "pdMin": 13,
        "pdMax": 13,
        "pe": 10
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 11
      },
      {
        "pdMin": 16,
        "pdMax": 16,
        "pe": 12
      },
      {
        "pdMin": 17,
        "pdMax": 17,
        "pe": 13
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 14
      },
      {
        "pdMin": 20,
        "pdMax": 20,
        "pe": 15
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 16
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 17
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 18
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 19
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 20
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 22
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 24
      }
    ],
    "9_8": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 1,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 3
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 4
      },
      {
        "pdMin": 6,
        "pdMax": 6,
        "pe": 5
      },
      {
        "pdMin": 7,
        "pdMax": 7,
        "pe": 6
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 7
      },
      {
        "pdMin": 10,
        "pdMax": 10,
        "pe": 8
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 9
      },
      {
        "pdMin": 13,
        "pdMax": 13,
        "pe": 10
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 11
      },
      {
        "pdMin": 16,
        "pdMax": 16,
        "pe": 12
      },
      {
        "pdMin": 17,
        "pdMax": 17,
        "pe": 13
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 14
      },
      {
        "pdMin": 20,
        "pdMax": 20,
        "pe": 15
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 16
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 17
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 18
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 19
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 20
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 22
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 24
      }
    ],
    "10_0": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 1,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 3
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 4
      },
      {
        "pdMin": 6,
        "pdMax": 6,
        "pe": 5
      },
      {
        "pdMin": 7,
        "pdMax": 7,
        "pe": 6
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 7
      },
      {
        "pdMin": 10,
        "pdMax": 10,
        "pe": 8
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 9
      },
      {
        "pdMin": 13,
        "pdMax": 13,
        "pe": 10
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 11
      },
      {
        "pdMin": 16,
        "pdMax": 16,
        "pe": 12
      },
      {
        "pdMin": 17,
        "pdMax": 17,
        "pe": 13
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 14
      },
      {
        "pdMin": 20,
        "pdMax": 20,
        "pe": 15
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 16
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 17
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 18
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 19
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 20
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 22
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 24
      }
    ],
    "10_4": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 1,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 3
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 4
      },
      {
        "pdMin": 6,
        "pdMax": 6,
        "pe": 5
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 6
      },
      {
        "pdMin": 9,
        "pdMax": 9,
        "pe": 7
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 8
      },
      {
        "pdMin": 12,
        "pdMax": 12,
        "pe": 9
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 10
      },
      {
        "pdMin": 15,
        "pdMax": 15,
        "pe": 11
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 12
      },
      {
        "pdMin": 18,
        "pdMax": 18,
        "pe": 13
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 14
      },
      {
        "pdMin": 21,
        "pdMax": 21,
        "pe": 15
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 16
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 17
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 18
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 19
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 21
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 23
      }
    ],
    "10_8": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 1,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 3
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 4
      },
      {
        "pdMin": 6,
        "pdMax": 6,
        "pe": 5
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 6
      },
      {
        "pdMin": 9,
        "pdMax": 9,
        "pe": 7
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 8
      },
      {
        "pdMin": 12,
        "pdMax": 12,
        "pe": 9
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 10
      },
      {
        "pdMin": 15,
        "pdMax": 15,
        "pe": 11
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 12
      },
      {
        "pdMin": 18,
        "pdMax": 18,
        "pe": 13
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 14
      },
      {
        "pdMin": 21,
        "pdMax": 21,
        "pe": 15
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 16
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 17
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 18
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 19
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 21
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 23
      }
    ],
    "11_0": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 1,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 3
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 4
      },
      {
        "pdMin": 6,
        "pdMax": 6,
        "pe": 5
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 6
      },
      {
        "pdMin": 9,
        "pdMax": 9,
        "pe": 7
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 8
      },
      {
        "pdMin": 12,
        "pdMax": 12,
        "pe": 9
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 10
      },
      {
        "pdMin": 15,
        "pdMax": 15,
        "pe": 11
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 12
      },
      {
        "pdMin": 18,
        "pdMax": 18,
        "pe": 13
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 14
      },
      {
        "pdMin": 21,
        "pdMax": 21,
        "pe": 15
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 16
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 17
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 18
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 19
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 21
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 23
      }
    ],
    "11_4": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 1,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 3
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 4
      },
      {
        "pdMin": 6,
        "pdMax": 6,
        "pe": 5
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 6
      },
      {
        "pdMin": 9,
        "pdMax": 9,
        "pe": 7
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 8
      },
      {
        "pdMin": 12,
        "pdMax": 12,
        "pe": 9
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 10
      },
      {
        "pdMin": 15,
        "pdMax": 15,
        "pe": 11
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 12
      },
      {
        "pdMin": 18,
        "pdMax": 18,
        "pe": 13
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 14
      },
      {
        "pdMin": 21,
        "pdMax": 21,
        "pe": 15
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 16
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 17
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 18
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 19
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 21
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 23
      }
    ],
    "11_8": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 4
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 5
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 6
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 7
      },
      {
        "pdMin": 11,
        "pdMax": 11,
        "pe": 8
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 9
      },
      {
        "pdMin": 14,
        "pdMax": 14,
        "pe": 10
      },
      {
        "pdMin": 15,
        "pdMax": 16,
        "pe": 11
      },
      {
        "pdMin": 17,
        "pdMax": 17,
        "pe": 12
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 13
      },
      {
        "pdMin": 20,
        "pdMax": 20,
        "pe": 14
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 15
      },
      {
        "pdMin": 23,
        "pdMax": 23,
        "pe": 16
      },
      {
        "pdMin": 24,
        "pdMax": 26,
        "pe": 17
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 18
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 20
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 22
      }
    ],
    "12_0": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 4
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 5
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 6
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 7
      },
      {
        "pdMin": 11,
        "pdMax": 11,
        "pe": 8
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 9
      },
      {
        "pdMin": 14,
        "pdMax": 14,
        "pe": 10
      },
      {
        "pdMin": 15,
        "pdMax": 16,
        "pe": 11
      },
      {
        "pdMin": 17,
        "pdMax": 17,
        "pe": 12
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 13
      },
      {
        "pdMin": 20,
        "pdMax": 20,
        "pe": 14
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 15
      },
      {
        "pdMin": 23,
        "pdMax": 23,
        "pe": 16
      },
      {
        "pdMin": 24,
        "pdMax": 26,
        "pe": 17
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 18
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 20
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 22
      }
    ],
    "12_4": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 4
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 5
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 6
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 7
      },
      {
        "pdMin": 11,
        "pdMax": 11,
        "pe": 8
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 9
      },
      {
        "pdMin": 14,
        "pdMax": 14,
        "pe": 10
      },
      {
        "pdMin": 15,
        "pdMax": 16,
        "pe": 11
      },
      {
        "pdMin": 17,
        "pdMax": 17,
        "pe": 12
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 13
      },
      {
        "pdMin": 20,
        "pdMax": 20,
        "pe": 14
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 15
      },
      {
        "pdMin": 23,
        "pdMax": 23,
        "pe": 16
      },
      {
        "pdMin": 24,
        "pdMax": 26,
        "pe": 17
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 18
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 20
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 22
      }
    ],
    "12_8": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 4
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 5
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 6
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 7
      },
      {
        "pdMin": 11,
        "pdMax": 11,
        "pe": 8
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 9
      },
      {
        "pdMin": 14,
        "pdMax": 14,
        "pe": 10
      },
      {
        "pdMin": 15,
        "pdMax": 16,
        "pe": 11
      },
      {
        "pdMin": 17,
        "pdMax": 17,
        "pe": 12
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 13
      },
      {
        "pdMin": 20,
        "pdMax": 20,
        "pe": 14
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 15
      },
      {
        "pdMin": 23,
        "pdMax": 23,
        "pe": 16
      },
      {
        "pdMin": 24,
        "pdMax": 26,
        "pe": 17
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 18
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 20
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 22
      }
    ],
    "13_0": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 4
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 5
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 6
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 7
      },
      {
        "pdMin": 11,
        "pdMax": 11,
        "pe": 8
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 9
      },
      {
        "pdMin": 14,
        "pdMax": 14,
        "pe": 10
      },
      {
        "pdMin": 15,
        "pdMax": 16,
        "pe": 11
      },
      {
        "pdMin": 17,
        "pdMax": 17,
        "pe": 12
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 13
      },
      {
        "pdMin": 20,
        "pdMax": 20,
        "pe": 14
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 15
      },
      {
        "pdMin": 23,
        "pdMax": 23,
        "pe": 16
      },
      {
        "pdMin": 24,
        "pdMax": 26,
        "pe": 17
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 18
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 20
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 22
      }
    ],
    "13_4": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 4
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 5
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 6
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 7
      },
      {
        "pdMin": 11,
        "pdMax": 11,
        "pe": 8
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 9
      },
      {
        "pdMin": 14,
        "pdMax": 14,
        "pe": 10
      },
      {
        "pdMin": 15,
        "pdMax": 16,
        "pe": 11
      },
      {
        "pdMin": 17,
        "pdMax": 17,
        "pe": 12
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 13
      },
      {
        "pdMin": 20,
        "pdMax": 20,
        "pe": 14
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 15
      },
      {
        "pdMin": 23,
        "pdMax": 23,
        "pe": 16
      },
      {
        "pdMin": 24,
        "pdMax": 26,
        "pe": 17
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 18
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 20
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 22
      }
    ],
    "13_8": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 4
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 5
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 6
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 7
      },
      {
        "pdMin": 11,
        "pdMax": 11,
        "pe": 8
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 9
      },
      {
        "pdMin": 14,
        "pdMax": 14,
        "pe": 10
      },
      {
        "pdMin": 15,
        "pdMax": 16,
        "pe": 11
      },
      {
        "pdMin": 17,
        "pdMax": 17,
        "pe": 12
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 13
      },
      {
        "pdMin": 20,
        "pdMax": 20,
        "pe": 14
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 15
      },
      {
        "pdMin": 23,
        "pdMax": 23,
        "pe": 16
      },
      {
        "pdMin": 24,
        "pdMax": 26,
        "pe": 17
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 18
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 20
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 22
      }
    ],
    "14_0": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 4
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 5
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 6
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 7
      },
      {
        "pdMin": 11,
        "pdMax": 11,
        "pe": 8
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 9
      },
      {
        "pdMin": 14,
        "pdMax": 14,
        "pe": 10
      },
      {
        "pdMin": 15,
        "pdMax": 16,
        "pe": 11
      },
      {
        "pdMin": 17,
        "pdMax": 17,
        "pe": 12
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 13
      },
      {
        "pdMin": 20,
        "pdMax": 20,
        "pe": 14
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 15
      },
      {
        "pdMin": 23,
        "pdMax": 23,
        "pe": 16
      },
      {
        "pdMin": 24,
        "pdMax": 26,
        "pe": 17
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 18
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 20
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 22
      }
    ],
    "14_4": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 4
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 5
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 6
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 7
      },
      {
        "pdMin": 11,
        "pdMax": 11,
        "pe": 8
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 9
      },
      {
        "pdMin": 14,
        "pdMax": 14,
        "pe": 10
      },
      {
        "pdMin": 15,
        "pdMax": 16,
        "pe": 11
      },
      {
        "pdMin": 17,
        "pdMax": 17,
        "pe": 12
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 13
      },
      {
        "pdMin": 20,
        "pdMax": 20,
        "pe": 14
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 15
      },
      {
        "pdMin": 23,
        "pdMax": 23,
        "pe": 16
      },
      {
        "pdMin": 24,
        "pdMax": 26,
        "pe": 17
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 18
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 20
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 22
      }
    ],
    "14_8": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 4
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 5
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 6
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 7
      },
      {
        "pdMin": 11,
        "pdMax": 11,
        "pe": 8
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 9
      },
      {
        "pdMin": 14,
        "pdMax": 14,
        "pe": 10
      },
      {
        "pdMin": 15,
        "pdMax": 16,
        "pe": 11
      },
      {
        "pdMin": 17,
        "pdMax": 17,
        "pe": 12
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 13
      },
      {
        "pdMin": 20,
        "pdMax": 20,
        "pe": 14
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 15
      },
      {
        "pdMin": 23,
        "pdMax": 23,
        "pe": 16
      },
      {
        "pdMin": 24,
        "pdMax": 26,
        "pe": 17
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 18
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 20
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 22
      }
    ],
    "16_4": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 4
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 5
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 6
      },
      {
        "pdMin": 10,
        "pdMax": 10,
        "pe": 7
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 8
      },
      {
        "pdMin": 13,
        "pdMax": 13,
        "pe": 9
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 10
      },
      {
        "pdMin": 16,
        "pdMax": 16,
        "pe": 11
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 12
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 13
      },
      {
        "pdMin": 21,
        "pdMax": 21,
        "pe": 14
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 15
      },
      {
        "pdMin": 24,
        "pdMax": 24,
        "pe": 16
      },
      {
        "pdMin": 25,
        "pdMax": 27,
        "pe": 17
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 18
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 20
      }
    ],
    "16_8": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 4
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 5
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 6
      },
      {
        "pdMin": 10,
        "pdMax": 10,
        "pe": 7
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 8
      },
      {
        "pdMin": 13,
        "pdMax": 13,
        "pe": 9
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 10
      },
      {
        "pdMin": 16,
        "pdMax": 16,
        "pe": 11
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 12
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 13
      },
      {
        "pdMin": 21,
        "pdMax": 21,
        "pe": 14
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 15
      },
      {
        "pdMin": 24,
        "pdMax": 24,
        "pe": 16
      },
      {
        "pdMin": 25,
        "pdMax": 27,
        "pe": 17
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 18
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 20
      }
    ]
  },
  "pic": {
    "6_0": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 3
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 4
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 5
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 6
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 7
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 8
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 9
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 10
      },
      {
        "pdMin": 20,
        "pdMax": 21,
        "pe": 11
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 12
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 13
      },
      {
        "pdMin": 26,
        "pdMax": 27,
        "pe": 14
      },
      {
        "pdMin": 28,
        "pdMax": 29,
        "pe": 15
      },
      {
        "pdMin": 30,
        "pdMax": 31,
        "pe": 16
      },
      {
        "pdMin": 32,
        "pdMax": 34,
        "pe": 17
      },
      {
        "pdMin": 35,
        "pdMax": 36,
        "pe": 18
      },
      {
        "pdMin": 37,
        "pdMax": 39,
        "pe": 19
      },
      {
        "pdMin": 40,
        "pdMax": 41,
        "pe": 20
      },
      {
        "pdMin": 42,
        "pdMax": 43,
        "pe": 21
      },
      {
        "pdMin": 44,
        "pdMax": 45,
        "pe": 22
      },
      {
        "pdMin": 46,
        "pdMax": 47,
        "pe": 23
      },
      {
        "pdMin": 48,
        "pdMax": 49,
        "pe": 24
      }
    ],
    "6_4": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 3
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 4
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 5
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 6
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 7
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 8
      },
      {
        "pdMin": 16,
        "pdMax": 18,
        "pe": 9
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 10
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 11
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 12
      },
      {
        "pdMin": 25,
        "pdMax": 26,
        "pe": 13
      },
      {
        "pdMin": 27,
        "pdMax": 28,
        "pe": 14
      },
      {
        "pdMin": 29,
        "pdMax": 30,
        "pe": 15
      },
      {
        "pdMin": 31,
        "pdMax": 32,
        "pe": 16
      },
      {
        "pdMin": 33,
        "pdMax": 35,
        "pe": 17
      },
      {
        "pdMin": 36,
        "pdMax": 37,
        "pe": 18
      },
      {
        "pdMin": 38,
        "pdMax": 40,
        "pe": 19
      },
      {
        "pdMin": 41,
        "pdMax": 42,
        "pe": 20
      },
      {
        "pdMin": 43,
        "pdMax": 44,
        "pe": 21
      },
      {
        "pdMin": 45,
        "pdMax": 46,
        "pe": 22
      },
      {
        "pdMin": 47,
        "pdMax": 48,
        "pe": 23
      },
      {
        "pdMin": 49,
        "pdMax": 49,
        "pe": 24
      }
    ],
    "6_8": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 3
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 4
      },
      {
        "pdMin": 8,
        "pdMax": 10,
        "pe": 5
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 6
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 7
      },
      {
        "pdMin": 15,
        "pdMax": 16,
        "pe": 8
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 9
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 10
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 11
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 12
      },
      {
        "pdMin": 25,
        "pdMax": 27,
        "pe": 13
      },
      {
        "pdMin": 28,
        "pdMax": 29,
        "pe": 14
      },
      {
        "pdMin": 30,
        "pdMax": 31,
        "pe": 15
      },
      {
        "pdMin": 32,
        "pdMax": 33,
        "pe": 16
      },
      {
        "pdMin": 34,
        "pdMax": 36,
        "pe": 17
      },
      {
        "pdMin": 37,
        "pdMax": 38,
        "pe": 18
      },
      {
        "pdMin": 39,
        "pdMax": 41,
        "pe": 19
      },
      {
        "pdMin": 42,
        "pdMax": 43,
        "pe": 20
      },
      {
        "pdMin": 44,
        "pdMax": 45,
        "pe": 21
      },
      {
        "pdMin": 46,
        "pdMax": 47,
        "pe": 22
      },
      {
        "pdMin": 48,
        "pdMax": 49,
        "pe": 23
      }
    ],
    "7_0": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 6,
        "pe": 3
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 4
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 5
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 6
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 7
      },
      {
        "pdMin": 15,
        "pdMax": 16,
        "pe": 8
      },
      {
        "pdMin": 17,
        "pdMax": 19,
        "pe": 9
      },
      {
        "pdMin": 20,
        "pdMax": 21,
        "pe": 10
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 11
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 12
      },
      {
        "pdMin": 26,
        "pdMax": 27,
        "pe": 13
      },
      {
        "pdMin": 28,
        "pdMax": 29,
        "pe": 14
      },
      {
        "pdMin": 30,
        "pdMax": 32,
        "pe": 15
      },
      {
        "pdMin": 33,
        "pdMax": 34,
        "pe": 16
      },
      {
        "pdMin": 35,
        "pdMax": 37,
        "pe": 17
      },
      {
        "pdMin": 38,
        "pdMax": 39,
        "pe": 18
      },
      {
        "pdMin": 40,
        "pdMax": 42,
        "pe": 19
      },
      {
        "pdMin": 43,
        "pdMax": 44,
        "pe": 20
      },
      {
        "pdMin": 45,
        "pdMax": 46,
        "pe": 21
      },
      {
        "pdMin": 47,
        "pdMax": 48,
        "pe": 22
      },
      {
        "pdMin": 49,
        "pdMax": 49,
        "pe": 23
      }
    ],
    "7_4": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 6,
        "pe": 3
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 4
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 5
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 6
      },
      {
        "pdMin": 13,
        "pdMax": 15,
        "pe": 7
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 8
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 9
      },
      {
        "pdMin": 20,
        "pdMax": 21,
        "pe": 10
      },
      {
        "pdMin": 22,
        "pdMax": 24,
        "pe": 11
      },
      {
        "pdMin": 25,
        "pdMax": 26,
        "pe": 12
      },
      {
        "pdMin": 27,
        "pdMax": 28,
        "pe": 13
      },
      {
        "pdMin": 29,
        "pdMax": 30,
        "pe": 14
      },
      {
        "pdMin": 31,
        "pdMax": 33,
        "pe": 15
      },
      {
        "pdMin": 34,
        "pdMax": 35,
        "pe": 16
      },
      {
        "pdMin": 36,
        "pdMax": 38,
        "pe": 17
      },
      {
        "pdMin": 39,
        "pdMax": 40,
        "pe": 18
      },
      {
        "pdMin": 41,
        "pdMax": 43,
        "pe": 19
      },
      {
        "pdMin": 44,
        "pdMax": 45,
        "pe": 20
      },
      {
        "pdMin": 46,
        "pdMax": 47,
        "pe": 21
      },
      {
        "pdMin": 48,
        "pdMax": 48,
        "pe": 22
      },
      {
        "pdMin": 49,
        "pdMax": 49,
        "pe": 23
      }
    ],
    "7_8": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 3
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 4
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 5
      },
      {
        "pdMin": 11,
        "pdMax": 13,
        "pe": 6
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 7
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 8
      },
      {
        "pdMin": 18,
        "pdMax": 20,
        "pe": 9
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 10
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 11
      },
      {
        "pdMin": 25,
        "pdMax": 27,
        "pe": 12
      },
      {
        "pdMin": 28,
        "pdMax": 29,
        "pe": 13
      },
      {
        "pdMin": 30,
        "pdMax": 31,
        "pe": 14
      },
      {
        "pdMin": 32,
        "pdMax": 33,
        "pe": 15
      },
      {
        "pdMin": 34,
        "pdMax": 36,
        "pe": 16
      },
      {
        "pdMin": 37,
        "pdMax": 39,
        "pe": 17
      },
      {
        "pdMin": 40,
        "pdMax": 41,
        "pe": 18
      },
      {
        "pdMin": 42,
        "pdMax": 43,
        "pe": 19
      },
      {
        "pdMin": 44,
        "pdMax": 45,
        "pe": 20
      },
      {
        "pdMin": 46,
        "pdMax": 47,
        "pe": 21
      },
      {
        "pdMin": 48,
        "pdMax": 48,
        "pe": 22
      },
      {
        "pdMin": 49,
        "pdMax": 49,
        "pe": 23
      }
    ],
    "8_0": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 3
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 4
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 5
      },
      {
        "pdMin": 11,
        "pdMax": 13,
        "pe": 6
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 7
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 8
      },
      {
        "pdMin": 18,
        "pdMax": 20,
        "pe": 9
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 10
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 11
      },
      {
        "pdMin": 25,
        "pdMax": 27,
        "pe": 12
      },
      {
        "pdMin": 28,
        "pdMax": 29,
        "pe": 13
      },
      {
        "pdMin": 30,
        "pdMax": 31,
        "pe": 14
      },
      {
        "pdMin": 32,
        "pdMax": 33,
        "pe": 15
      },
      {
        "pdMin": 34,
        "pdMax": 36,
        "pe": 16
      },
      {
        "pdMin": 37,
        "pdMax": 39,
        "pe": 17
      },
      {
        "pdMin": 40,
        "pdMax": 42,
        "pe": 18
      },
      {
        "pdMin": 43,
        "pdMax": 44,
        "pe": 19
      },
      {
        "pdMin": 45,
        "pdMax": 46,
        "pe": 20
      },
      {
        "pdMin": 47,
        "pdMax": 48,
        "pe": 21
      },
      {
        "pdMin": 49,
        "pdMax": 49,
        "pe": 22
      }
    ],
    "8_4": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 3
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 4
      },
      {
        "pdMin": 9,
        "pdMax": 11,
        "pe": 5
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 6
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 7
      },
      {
        "pdMin": 16,
        "pdMax": 18,
        "pe": 8
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 9
      },
      {
        "pdMin": 21,
        "pdMax": 23,
        "pe": 10
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 11
      },
      {
        "pdMin": 26,
        "pdMax": 27,
        "pe": 12
      },
      {
        "pdMin": 28,
        "pdMax": 30,
        "pe": 13
      },
      {
        "pdMin": 31,
        "pdMax": 32,
        "pe": 14
      },
      {
        "pdMin": 33,
        "pdMax": 34,
        "pe": 15
      },
      {
        "pdMin": 35,
        "pdMax": 37,
        "pe": 16
      },
      {
        "pdMin": 38,
        "pdMax": 40,
        "pe": 17
      },
      {
        "pdMin": 41,
        "pdMax": 42,
        "pe": 18
      },
      {
        "pdMin": 43,
        "pdMax": 45,
        "pe": 19
      },
      {
        "pdMin": 46,
        "pdMax": 47,
        "pe": 20
      },
      {
        "pdMin": 48,
        "pdMax": 48,
        "pe": 21
      },
      {
        "pdMin": 49,
        "pdMax": 49,
        "pe": 22
      }
    ],
    "8_8": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 3
      },
      {
        "pdMin": 7,
        "pdMax": 9,
        "pe": 4
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 5
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 6
      },
      {
        "pdMin": 14,
        "pdMax": 16,
        "pe": 7
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 8
      },
      {
        "pdMin": 19,
        "pdMax": 21,
        "pe": 9
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 10
      },
      {
        "pdMin": 24,
        "pdMax": 26,
        "pe": 11
      },
      {
        "pdMin": 27,
        "pdMax": 28,
        "pe": 12
      },
      {
        "pdMin": 29,
        "pdMax": 30,
        "pe": 13
      },
      {
        "pdMin": 31,
        "pdMax": 33,
        "pe": 14
      },
      {
        "pdMin": 34,
        "pdMax": 35,
        "pe": 15
      },
      {
        "pdMin": 36,
        "pdMax": 38,
        "pe": 16
      },
      {
        "pdMin": 39,
        "pdMax": 41,
        "pe": 17
      },
      {
        "pdMin": 42,
        "pdMax": 43,
        "pe": 18
      },
      {
        "pdMin": 44,
        "pdMax": 45,
        "pe": 19
      },
      {
        "pdMin": 46,
        "pdMax": 47,
        "pe": 20
      },
      {
        "pdMin": 48,
        "pdMax": 48,
        "pe": 21
      },
      {
        "pdMin": 49,
        "pdMax": 49,
        "pe": 22
      }
    ],
    "9_0": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 3
      },
      {
        "pdMin": 7,
        "pdMax": 9,
        "pe": 4
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 5
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 6
      },
      {
        "pdMin": 14,
        "pdMax": 16,
        "pe": 7
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 8
      },
      {
        "pdMin": 19,
        "pdMax": 21,
        "pe": 9
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 10
      },
      {
        "pdMin": 24,
        "pdMax": 26,
        "pe": 11
      },
      {
        "pdMin": 27,
        "pdMax": 28,
        "pe": 12
      },
      {
        "pdMin": 29,
        "pdMax": 30,
        "pe": 13
      },
      {
        "pdMin": 31,
        "pdMax": 33,
        "pe": 14
      },
      {
        "pdMin": 34,
        "pdMax": 35,
        "pe": 15
      },
      {
        "pdMin": 36,
        "pdMax": 38,
        "pe": 16
      },
      {
        "pdMin": 39,
        "pdMax": 41,
        "pe": 17
      },
      {
        "pdMin": 42,
        "pdMax": 43,
        "pe": 18
      },
      {
        "pdMin": 44,
        "pdMax": 45,
        "pe": 19
      },
      {
        "pdMin": 46,
        "pdMax": 47,
        "pe": 20
      },
      {
        "pdMin": 48,
        "pdMax": 48,
        "pe": 21
      },
      {
        "pdMin": 49,
        "pdMax": 49,
        "pe": 22
      }
    ],
    "9_4": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 3
      },
      {
        "pdMin": 7,
        "pdMax": 9,
        "pe": 4
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 5
      },
      {
        "pdMin": 12,
        "pdMax": 14,
        "pe": 6
      },
      {
        "pdMin": 15,
        "pdMax": 16,
        "pe": 7
      },
      {
        "pdMin": 17,
        "pdMax": 19,
        "pe": 8
      },
      {
        "pdMin": 20,
        "pdMax": 21,
        "pe": 9
      },
      {
        "pdMin": 22,
        "pdMax": 24,
        "pe": 10
      },
      {
        "pdMin": 25,
        "pdMax": 26,
        "pe": 11
      },
      {
        "pdMin": 27,
        "pdMax": 29,
        "pe": 12
      },
      {
        "pdMin": 30,
        "pdMax": 31,
        "pe": 13
      },
      {
        "pdMin": 32,
        "pdMax": 34,
        "pe": 14
      },
      {
        "pdMin": 35,
        "pdMax": 36,
        "pe": 15
      },
      {
        "pdMin": 37,
        "pdMax": 39,
        "pe": 16
      },
      {
        "pdMin": 40,
        "pdMax": 42,
        "pe": 17
      },
      {
        "pdMin": 43,
        "pdMax": 44,
        "pe": 18
      },
      {
        "pdMin": 45,
        "pdMax": 46,
        "pe": 19
      },
      {
        "pdMin": 47,
        "pdMax": 47,
        "pe": 20
      },
      {
        "pdMin": 48,
        "pdMax": 48,
        "pe": 21
      },
      {
        "pdMin": 49,
        "pdMax": 49,
        "pe": 22
      }
    ],
    "9_8": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 3
      },
      {
        "pdMin": 7,
        "pdMax": 9,
        "pe": 4
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 5
      },
      {
        "pdMin": 12,
        "pdMax": 14,
        "pe": 6
      },
      {
        "pdMin": 15,
        "pdMax": 16,
        "pe": 7
      },
      {
        "pdMin": 17,
        "pdMax": 19,
        "pe": 8
      },
      {
        "pdMin": 20,
        "pdMax": 21,
        "pe": 9
      },
      {
        "pdMin": 22,
        "pdMax": 24,
        "pe": 10
      },
      {
        "pdMin": 25,
        "pdMax": 26,
        "pe": 11
      },
      {
        "pdMin": 27,
        "pdMax": 29,
        "pe": 12
      },
      {
        "pdMin": 30,
        "pdMax": 31,
        "pe": 13
      },
      {
        "pdMin": 32,
        "pdMax": 34,
        "pe": 14
      },
      {
        "pdMin": 35,
        "pdMax": 36,
        "pe": 15
      },
      {
        "pdMin": 37,
        "pdMax": 39,
        "pe": 16
      },
      {
        "pdMin": 40,
        "pdMax": 42,
        "pe": 17
      },
      {
        "pdMin": 43,
        "pdMax": 44,
        "pe": 18
      },
      {
        "pdMin": 45,
        "pdMax": 46,
        "pe": 19
      },
      {
        "pdMin": 47,
        "pdMax": 47,
        "pe": 20
      },
      {
        "pdMin": 48,
        "pdMax": 48,
        "pe": 21
      },
      {
        "pdMin": 49,
        "pdMax": 49,
        "pe": 22
      }
    ],
    "10_0": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 7,
        "pe": 3
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 4
      },
      {
        "pdMin": 10,
        "pdMax": 12,
        "pe": 5
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 6
      },
      {
        "pdMin": 15,
        "pdMax": 17,
        "pe": 7
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 8
      },
      {
        "pdMin": 20,
        "pdMax": 22,
        "pe": 9
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 10
      },
      {
        "pdMin": 25,
        "pdMax": 27,
        "pe": 11
      },
      {
        "pdMin": 28,
        "pdMax": 29,
        "pe": 12
      },
      {
        "pdMin": 30,
        "pdMax": 32,
        "pe": 13
      },
      {
        "pdMin": 33,
        "pdMax": 34,
        "pe": 14
      },
      {
        "pdMin": 35,
        "pdMax": 37,
        "pe": 15
      },
      {
        "pdMin": 38,
        "pdMax": 39,
        "pe": 16
      },
      {
        "pdMin": 40,
        "pdMax": 43,
        "pe": 17
      },
      {
        "pdMin": 44,
        "pdMax": 45,
        "pe": 18
      },
      {
        "pdMin": 46,
        "pdMax": 46,
        "pe": 19
      },
      {
        "pdMin": 47,
        "pdMax": 47,
        "pe": 20
      },
      {
        "pdMin": 48,
        "pdMax": 48,
        "pe": 21
      },
      {
        "pdMin": 49,
        "pdMax": 49,
        "pe": 22
      }
    ],
    "10_4": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 7,
        "pe": 3
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 4
      },
      {
        "pdMin": 10,
        "pdMax": 12,
        "pe": 5
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 6
      },
      {
        "pdMin": 15,
        "pdMax": 17,
        "pe": 7
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 8
      },
      {
        "pdMin": 20,
        "pdMax": 22,
        "pe": 9
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 10
      },
      {
        "pdMin": 25,
        "pdMax": 27,
        "pe": 11
      },
      {
        "pdMin": 28,
        "pdMax": 29,
        "pe": 12
      },
      {
        "pdMin": 30,
        "pdMax": 32,
        "pe": 13
      },
      {
        "pdMin": 33,
        "pdMax": 34,
        "pe": 14
      },
      {
        "pdMin": 35,
        "pdMax": 37,
        "pe": 15
      },
      {
        "pdMin": 38,
        "pdMax": 39,
        "pe": 16
      },
      {
        "pdMin": 40,
        "pdMax": 43,
        "pe": 17
      },
      {
        "pdMin": 44,
        "pdMax": 45,
        "pe": 18
      },
      {
        "pdMin": 46,
        "pdMax": 46,
        "pe": 19
      },
      {
        "pdMin": 47,
        "pdMax": 47,
        "pe": 20
      },
      {
        "pdMin": 48,
        "pdMax": 48,
        "pe": 21
      },
      {
        "pdMin": 49,
        "pdMax": 49,
        "pe": 22
      }
    ],
    "10_8": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 7,
        "pe": 3
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 4
      },
      {
        "pdMin": 10,
        "pdMax": 12,
        "pe": 5
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 6
      },
      {
        "pdMin": 15,
        "pdMax": 17,
        "pe": 7
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 8
      },
      {
        "pdMin": 20,
        "pdMax": 22,
        "pe": 9
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 10
      },
      {
        "pdMin": 25,
        "pdMax": 27,
        "pe": 11
      },
      {
        "pdMin": 28,
        "pdMax": 29,
        "pe": 12
      },
      {
        "pdMin": 30,
        "pdMax": 32,
        "pe": 13
      },
      {
        "pdMin": 33,
        "pdMax": 34,
        "pe": 14
      },
      {
        "pdMin": 35,
        "pdMax": 37,
        "pe": 15
      },
      {
        "pdMin": 38,
        "pdMax": 39,
        "pe": 16
      },
      {
        "pdMin": 40,
        "pdMax": 43,
        "pe": 17
      },
      {
        "pdMin": 44,
        "pdMax": 45,
        "pe": 18
      },
      {
        "pdMin": 46,
        "pdMax": 46,
        "pe": 19
      },
      {
        "pdMin": 47,
        "pdMax": 47,
        "pe": 20
      },
      {
        "pdMin": 48,
        "pdMax": 48,
        "pe": 21
      },
      {
        "pdMin": 49,
        "pdMax": 49,
        "pe": 22
      }
    ],
    "11_0": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 7,
        "pe": 3
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 4
      },
      {
        "pdMin": 10,
        "pdMax": 12,
        "pe": 5
      },
      {
        "pdMin": 13,
        "pdMax": 15,
        "pe": 6
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 7
      },
      {
        "pdMin": 18,
        "pdMax": 20,
        "pe": 8
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 9
      },
      {
        "pdMin": 23,
        "pdMax": 25,
        "pe": 10
      },
      {
        "pdMin": 26,
        "pdMax": 27,
        "pe": 11
      },
      {
        "pdMin": 28,
        "pdMax": 30,
        "pe": 12
      },
      {
        "pdMin": 31,
        "pdMax": 33,
        "pe": 13
      },
      {
        "pdMin": 34,
        "pdMax": 35,
        "pe": 14
      },
      {
        "pdMin": 36,
        "pdMax": 38,
        "pe": 15
      },
      {
        "pdMin": 39,
        "pdMax": 40,
        "pe": 16
      },
      {
        "pdMin": 41,
        "pdMax": 44,
        "pe": 17
      },
      {
        "pdMin": 45,
        "pdMax": 45,
        "pe": 18
      },
      {
        "pdMin": 46,
        "pdMax": 46,
        "pe": 19
      },
      {
        "pdMin": 47,
        "pdMax": 47,
        "pe": 20
      },
      {
        "pdMin": 48,
        "pdMax": 48,
        "pe": 21
      },
      {
        "pdMin": 49,
        "pdMax": 49,
        "pe": 22
      }
    ],
    "11_4": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 7,
        "pe": 3
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 4
      },
      {
        "pdMin": 10,
        "pdMax": 12,
        "pe": 5
      },
      {
        "pdMin": 13,
        "pdMax": 15,
        "pe": 6
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 7
      },
      {
        "pdMin": 18,
        "pdMax": 20,
        "pe": 8
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 9
      },
      {
        "pdMin": 23,
        "pdMax": 25,
        "pe": 10
      },
      {
        "pdMin": 26,
        "pdMax": 27,
        "pe": 11
      },
      {
        "pdMin": 28,
        "pdMax": 30,
        "pe": 12
      },
      {
        "pdMin": 31,
        "pdMax": 33,
        "pe": 13
      },
      {
        "pdMin": 34,
        "pdMax": 35,
        "pe": 14
      },
      {
        "pdMin": 36,
        "pdMax": 38,
        "pe": 15
      },
      {
        "pdMin": 39,
        "pdMax": 40,
        "pe": 16
      },
      {
        "pdMin": 41,
        "pdMax": 44,
        "pe": 17
      },
      {
        "pdMin": 45,
        "pdMax": 45,
        "pe": 18
      },
      {
        "pdMin": 46,
        "pdMax": 46,
        "pe": 19
      },
      {
        "pdMin": 47,
        "pdMax": 47,
        "pe": 20
      },
      {
        "pdMin": 48,
        "pdMax": 48,
        "pe": 21
      },
      {
        "pdMin": 49,
        "pdMax": 49,
        "pe": 22
      }
    ],
    "11_8": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 7,
        "pe": 3
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 4
      },
      {
        "pdMin": 10,
        "pdMax": 12,
        "pe": 5
      },
      {
        "pdMin": 13,
        "pdMax": 15,
        "pe": 6
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 7
      },
      {
        "pdMin": 18,
        "pdMax": 20,
        "pe": 8
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 9
      },
      {
        "pdMin": 23,
        "pdMax": 25,
        "pe": 10
      },
      {
        "pdMin": 26,
        "pdMax": 27,
        "pe": 11
      },
      {
        "pdMin": 28,
        "pdMax": 30,
        "pe": 12
      },
      {
        "pdMin": 31,
        "pdMax": 33,
        "pe": 13
      },
      {
        "pdMin": 34,
        "pdMax": 35,
        "pe": 14
      },
      {
        "pdMin": 36,
        "pdMax": 38,
        "pe": 15
      },
      {
        "pdMin": 39,
        "pdMax": 40,
        "pe": 16
      },
      {
        "pdMin": 41,
        "pdMax": 44,
        "pe": 17
      },
      {
        "pdMin": 45,
        "pdMax": 45,
        "pe": 18
      },
      {
        "pdMin": 46,
        "pdMax": 46,
        "pe": 19
      },
      {
        "pdMin": 47,
        "pdMax": 47,
        "pe": 20
      },
      {
        "pdMin": 48,
        "pdMax": 48,
        "pe": 21
      },
      {
        "pdMin": 49,
        "pdMax": 49,
        "pe": 22
      }
    ],
    "12_0": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 7,
        "pe": 3
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 4
      },
      {
        "pdMin": 10,
        "pdMax": 12,
        "pe": 5
      },
      {
        "pdMin": 13,
        "pdMax": 15,
        "pe": 6
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 7
      },
      {
        "pdMin": 18,
        "pdMax": 20,
        "pe": 8
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 9
      },
      {
        "pdMin": 23,
        "pdMax": 25,
        "pe": 10
      },
      {
        "pdMin": 26,
        "pdMax": 27,
        "pe": 11
      },
      {
        "pdMin": 28,
        "pdMax": 30,
        "pe": 12
      },
      {
        "pdMin": 31,
        "pdMax": 33,
        "pe": 13
      },
      {
        "pdMin": 34,
        "pdMax": 35,
        "pe": 14
      },
      {
        "pdMin": 36,
        "pdMax": 38,
        "pe": 15
      },
      {
        "pdMin": 39,
        "pdMax": 40,
        "pe": 16
      },
      {
        "pdMin": 41,
        "pdMax": 44,
        "pe": 17
      },
      {
        "pdMin": 45,
        "pdMax": 45,
        "pe": 18
      },
      {
        "pdMin": 46,
        "pdMax": 46,
        "pe": 19
      },
      {
        "pdMin": 47,
        "pdMax": 47,
        "pe": 20
      },
      {
        "pdMin": 48,
        "pdMax": 48,
        "pe": 21
      },
      {
        "pdMin": 49,
        "pdMax": 49,
        "pe": 22
      }
    ],
    "12_4": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 7,
        "pe": 3
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 4
      },
      {
        "pdMin": 10,
        "pdMax": 12,
        "pe": 5
      },
      {
        "pdMin": 13,
        "pdMax": 15,
        "pe": 6
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 7
      },
      {
        "pdMin": 18,
        "pdMax": 20,
        "pe": 8
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 9
      },
      {
        "pdMin": 23,
        "pdMax": 25,
        "pe": 10
      },
      {
        "pdMin": 26,
        "pdMax": 27,
        "pe": 11
      },
      {
        "pdMin": 28,
        "pdMax": 30,
        "pe": 12
      },
      {
        "pdMin": 31,
        "pdMax": 33,
        "pe": 13
      },
      {
        "pdMin": 34,
        "pdMax": 35,
        "pe": 14
      },
      {
        "pdMin": 36,
        "pdMax": 38,
        "pe": 15
      },
      {
        "pdMin": 39,
        "pdMax": 40,
        "pe": 16
      },
      {
        "pdMin": 41,
        "pdMax": 44,
        "pe": 17
      },
      {
        "pdMin": 45,
        "pdMax": 45,
        "pe": 18
      },
      {
        "pdMin": 46,
        "pdMax": 46,
        "pe": 19
      },
      {
        "pdMin": 47,
        "pdMax": 47,
        "pe": 20
      },
      {
        "pdMin": 48,
        "pdMax": 48,
        "pe": 21
      },
      {
        "pdMin": 49,
        "pdMax": 49,
        "pe": 22
      }
    ],
    "12_8": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 7,
        "pe": 3
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 4
      },
      {
        "pdMin": 10,
        "pdMax": 12,
        "pe": 5
      },
      {
        "pdMin": 13,
        "pdMax": 15,
        "pe": 6
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 7
      },
      {
        "pdMin": 18,
        "pdMax": 20,
        "pe": 8
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 9
      },
      {
        "pdMin": 23,
        "pdMax": 25,
        "pe": 10
      },
      {
        "pdMin": 26,
        "pdMax": 27,
        "pe": 11
      },
      {
        "pdMin": 28,
        "pdMax": 30,
        "pe": 12
      },
      {
        "pdMin": 31,
        "pdMax": 33,
        "pe": 13
      },
      {
        "pdMin": 34,
        "pdMax": 35,
        "pe": 14
      },
      {
        "pdMin": 36,
        "pdMax": 38,
        "pe": 15
      },
      {
        "pdMin": 39,
        "pdMax": 40,
        "pe": 16
      },
      {
        "pdMin": 41,
        "pdMax": 44,
        "pe": 17
      },
      {
        "pdMin": 45,
        "pdMax": 45,
        "pe": 18
      },
      {
        "pdMin": 46,
        "pdMax": 46,
        "pe": 19
      },
      {
        "pdMin": 47,
        "pdMax": 47,
        "pe": 20
      },
      {
        "pdMin": 48,
        "pdMax": 48,
        "pe": 21
      },
      {
        "pdMin": 49,
        "pdMax": 49,
        "pe": 22
      }
    ],
    "13_0": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 7,
        "pe": 3
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 4
      },
      {
        "pdMin": 10,
        "pdMax": 12,
        "pe": 5
      },
      {
        "pdMin": 13,
        "pdMax": 15,
        "pe": 6
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 7
      },
      {
        "pdMin": 18,
        "pdMax": 20,
        "pe": 8
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 9
      },
      {
        "pdMin": 23,
        "pdMax": 25,
        "pe": 10
      },
      {
        "pdMin": 26,
        "pdMax": 27,
        "pe": 11
      },
      {
        "pdMin": 28,
        "pdMax": 30,
        "pe": 12
      },
      {
        "pdMin": 31,
        "pdMax": 33,
        "pe": 13
      },
      {
        "pdMin": 34,
        "pdMax": 35,
        "pe": 14
      },
      {
        "pdMin": 36,
        "pdMax": 38,
        "pe": 15
      },
      {
        "pdMin": 39,
        "pdMax": 40,
        "pe": 16
      },
      {
        "pdMin": 41,
        "pdMax": 44,
        "pe": 17
      },
      {
        "pdMin": 45,
        "pdMax": 45,
        "pe": 18
      },
      {
        "pdMin": 46,
        "pdMax": 46,
        "pe": 19
      },
      {
        "pdMin": 47,
        "pdMax": 47,
        "pe": 20
      },
      {
        "pdMin": 48,
        "pdMax": 48,
        "pe": 21
      },
      {
        "pdMin": 49,
        "pdMax": 49,
        "pe": 22
      }
    ],
    "13_4": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 7,
        "pe": 3
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 4
      },
      {
        "pdMin": 10,
        "pdMax": 12,
        "pe": 5
      },
      {
        "pdMin": 13,
        "pdMax": 15,
        "pe": 6
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 7
      },
      {
        "pdMin": 18,
        "pdMax": 20,
        "pe": 8
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 9
      },
      {
        "pdMin": 23,
        "pdMax": 25,
        "pe": 10
      },
      {
        "pdMin": 26,
        "pdMax": 27,
        "pe": 11
      },
      {
        "pdMin": 28,
        "pdMax": 30,
        "pe": 12
      },
      {
        "pdMin": 31,
        "pdMax": 33,
        "pe": 13
      },
      {
        "pdMin": 34,
        "pdMax": 35,
        "pe": 14
      },
      {
        "pdMin": 36,
        "pdMax": 38,
        "pe": 15
      },
      {
        "pdMin": 39,
        "pdMax": 40,
        "pe": 16
      },
      {
        "pdMin": 41,
        "pdMax": 44,
        "pe": 17
      },
      {
        "pdMin": 45,
        "pdMax": 45,
        "pe": 18
      },
      {
        "pdMin": 46,
        "pdMax": 46,
        "pe": 19
      },
      {
        "pdMin": 47,
        "pdMax": 47,
        "pe": 20
      },
      {
        "pdMin": 48,
        "pdMax": 48,
        "pe": 21
      },
      {
        "pdMin": 49,
        "pdMax": 49,
        "pe": 22
      }
    ],
    "13_8": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 7,
        "pe": 3
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 4
      },
      {
        "pdMin": 10,
        "pdMax": 12,
        "pe": 5
      },
      {
        "pdMin": 13,
        "pdMax": 15,
        "pe": 6
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 7
      },
      {
        "pdMin": 18,
        "pdMax": 20,
        "pe": 8
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 9
      },
      {
        "pdMin": 23,
        "pdMax": 25,
        "pe": 10
      },
      {
        "pdMin": 26,
        "pdMax": 27,
        "pe": 11
      },
      {
        "pdMin": 28,
        "pdMax": 30,
        "pe": 12
      },
      {
        "pdMin": 31,
        "pdMax": 33,
        "pe": 13
      },
      {
        "pdMin": 34,
        "pdMax": 35,
        "pe": 14
      },
      {
        "pdMin": 36,
        "pdMax": 38,
        "pe": 15
      },
      {
        "pdMin": 39,
        "pdMax": 40,
        "pe": 16
      },
      {
        "pdMin": 41,
        "pdMax": 44,
        "pe": 17
      },
      {
        "pdMin": 45,
        "pdMax": 45,
        "pe": 18
      },
      {
        "pdMin": 46,
        "pdMax": 46,
        "pe": 19
      },
      {
        "pdMin": 47,
        "pdMax": 47,
        "pe": 20
      },
      {
        "pdMin": 48,
        "pdMax": 48,
        "pe": 21
      },
      {
        "pdMin": 49,
        "pdMax": 49,
        "pe": 22
      }
    ],
    "14_0": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 7,
        "pe": 3
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 4
      },
      {
        "pdMin": 10,
        "pdMax": 12,
        "pe": 5
      },
      {
        "pdMin": 13,
        "pdMax": 15,
        "pe": 6
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 7
      },
      {
        "pdMin": 18,
        "pdMax": 20,
        "pe": 8
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 9
      },
      {
        "pdMin": 23,
        "pdMax": 25,
        "pe": 10
      },
      {
        "pdMin": 26,
        "pdMax": 27,
        "pe": 11
      },
      {
        "pdMin": 28,
        "pdMax": 30,
        "pe": 12
      },
      {
        "pdMin": 31,
        "pdMax": 33,
        "pe": 13
      },
      {
        "pdMin": 34,
        "pdMax": 35,
        "pe": 14
      },
      {
        "pdMin": 36,
        "pdMax": 38,
        "pe": 15
      },
      {
        "pdMin": 39,
        "pdMax": 40,
        "pe": 16
      },
      {
        "pdMin": 41,
        "pdMax": 44,
        "pe": 17
      },
      {
        "pdMin": 45,
        "pdMax": 45,
        "pe": 18
      },
      {
        "pdMin": 46,
        "pdMax": 46,
        "pe": 19
      },
      {
        "pdMin": 47,
        "pdMax": 47,
        "pe": 20
      },
      {
        "pdMin": 48,
        "pdMax": 48,
        "pe": 21
      },
      {
        "pdMin": 49,
        "pdMax": 49,
        "pe": 22
      }
    ],
    "14_4": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 7,
        "pe": 3
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 4
      },
      {
        "pdMin": 10,
        "pdMax": 12,
        "pe": 5
      },
      {
        "pdMin": 13,
        "pdMax": 15,
        "pe": 6
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 7
      },
      {
        "pdMin": 18,
        "pdMax": 20,
        "pe": 8
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 9
      },
      {
        "pdMin": 23,
        "pdMax": 25,
        "pe": 10
      },
      {
        "pdMin": 26,
        "pdMax": 27,
        "pe": 11
      },
      {
        "pdMin": 28,
        "pdMax": 30,
        "pe": 12
      },
      {
        "pdMin": 31,
        "pdMax": 33,
        "pe": 13
      },
      {
        "pdMin": 34,
        "pdMax": 35,
        "pe": 14
      },
      {
        "pdMin": 36,
        "pdMax": 38,
        "pe": 15
      },
      {
        "pdMin": 39,
        "pdMax": 40,
        "pe": 16
      },
      {
        "pdMin": 41,
        "pdMax": 44,
        "pe": 17
      },
      {
        "pdMin": 45,
        "pdMax": 45,
        "pe": 18
      },
      {
        "pdMin": 46,
        "pdMax": 46,
        "pe": 19
      },
      {
        "pdMin": 47,
        "pdMax": 47,
        "pe": 20
      },
      {
        "pdMin": 48,
        "pdMax": 48,
        "pe": 21
      },
      {
        "pdMin": 49,
        "pdMax": 49,
        "pe": 22
      }
    ],
    "14_8": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 7,
        "pe": 3
      },
      {
        "pdMin": 8,
        "pdMax": 10,
        "pe": 4
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 5
      },
      {
        "pdMin": 13,
        "pdMax": 15,
        "pe": 6
      },
      {
        "pdMin": 16,
        "pdMax": 18,
        "pe": 7
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 8
      },
      {
        "pdMin": 21,
        "pdMax": 23,
        "pe": 9
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 10
      },
      {
        "pdMin": 26,
        "pdMax": 28,
        "pe": 11
      },
      {
        "pdMin": 29,
        "pdMax": 31,
        "pe": 12
      },
      {
        "pdMin": 32,
        "pdMax": 33,
        "pe": 13
      },
      {
        "pdMin": 34,
        "pdMax": 36,
        "pe": 14
      },
      {
        "pdMin": 37,
        "pdMax": 39,
        "pe": 15
      },
      {
        "pdMin": 40,
        "pdMax": 41,
        "pe": 16
      },
      {
        "pdMin": 42,
        "pdMax": 45,
        "pe": 17
      },
      {
        "pdMin": 46,
        "pdMax": 46,
        "pe": 18
      },
      {
        "pdMin": 47,
        "pdMax": 47,
        "pe": 19
      },
      {
        "pdMin": 48,
        "pdMax": 48,
        "pe": 20
      },
      {
        "pdMin": 49,
        "pdMax": 49,
        "pe": 21
      }
    ],
    "15_0": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 7,
        "pe": 3
      },
      {
        "pdMin": 8,
        "pdMax": 10,
        "pe": 4
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 5
      },
      {
        "pdMin": 13,
        "pdMax": 15,
        "pe": 6
      },
      {
        "pdMin": 16,
        "pdMax": 18,
        "pe": 7
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 8
      },
      {
        "pdMin": 21,
        "pdMax": 23,
        "pe": 9
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 10
      },
      {
        "pdMin": 26,
        "pdMax": 28,
        "pe": 11
      },
      {
        "pdMin": 29,
        "pdMax": 31,
        "pe": 12
      },
      {
        "pdMin": 32,
        "pdMax": 33,
        "pe": 13
      },
      {
        "pdMin": 34,
        "pdMax": 36,
        "pe": 14
      },
      {
        "pdMin": 37,
        "pdMax": 39,
        "pe": 15
      },
      {
        "pdMin": 40,
        "pdMax": 41,
        "pe": 16
      },
      {
        "pdMin": 42,
        "pdMax": 45,
        "pe": 17
      },
      {
        "pdMin": 46,
        "pdMax": 46,
        "pe": 18
      },
      {
        "pdMin": 47,
        "pdMax": 47,
        "pe": 19
      },
      {
        "pdMin": 48,
        "pdMax": 48,
        "pe": 20
      },
      {
        "pdMin": 49,
        "pdMax": 49,
        "pe": 21
      }
    ],
    "15_4": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 7,
        "pe": 3
      },
      {
        "pdMin": 8,
        "pdMax": 10,
        "pe": 4
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 5
      },
      {
        "pdMin": 13,
        "pdMax": 15,
        "pe": 6
      },
      {
        "pdMin": 16,
        "pdMax": 18,
        "pe": 7
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 8
      },
      {
        "pdMin": 21,
        "pdMax": 23,
        "pe": 9
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 10
      },
      {
        "pdMin": 26,
        "pdMax": 28,
        "pe": 11
      },
      {
        "pdMin": 29,
        "pdMax": 31,
        "pe": 12
      },
      {
        "pdMin": 32,
        "pdMax": 33,
        "pe": 13
      },
      {
        "pdMin": 34,
        "pdMax": 36,
        "pe": 14
      },
      {
        "pdMin": 37,
        "pdMax": 39,
        "pe": 15
      },
      {
        "pdMin": 40,
        "pdMax": 41,
        "pe": 16
      },
      {
        "pdMin": 42,
        "pdMax": 45,
        "pe": 17
      },
      {
        "pdMin": 46,
        "pdMax": 46,
        "pe": 18
      },
      {
        "pdMin": 47,
        "pdMax": 47,
        "pe": 19
      },
      {
        "pdMin": 48,
        "pdMax": 48,
        "pe": 20
      },
      {
        "pdMin": 49,
        "pdMax": 49,
        "pe": 21
      }
    ],
    "15_8": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 7,
        "pe": 3
      },
      {
        "pdMin": 8,
        "pdMax": 10,
        "pe": 4
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 5
      },
      {
        "pdMin": 13,
        "pdMax": 15,
        "pe": 6
      },
      {
        "pdMin": 16,
        "pdMax": 18,
        "pe": 7
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 8
      },
      {
        "pdMin": 21,
        "pdMax": 23,
        "pe": 9
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 10
      },
      {
        "pdMin": 26,
        "pdMax": 28,
        "pe": 11
      },
      {
        "pdMin": 29,
        "pdMax": 31,
        "pe": 12
      },
      {
        "pdMin": 32,
        "pdMax": 33,
        "pe": 13
      },
      {
        "pdMin": 34,
        "pdMax": 36,
        "pe": 14
      },
      {
        "pdMin": 37,
        "pdMax": 39,
        "pe": 15
      },
      {
        "pdMin": 40,
        "pdMax": 41,
        "pe": 16
      },
      {
        "pdMin": 42,
        "pdMax": 45,
        "pe": 17
      },
      {
        "pdMin": 46,
        "pdMax": 46,
        "pe": 18
      },
      {
        "pdMin": 47,
        "pdMax": 47,
        "pe": 19
      },
      {
        "pdMin": 48,
        "pdMax": 48,
        "pe": 20
      },
      {
        "pdMin": 49,
        "pdMax": 49,
        "pe": 21
      }
    ],
    "16_0": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 7,
        "pe": 3
      },
      {
        "pdMin": 8,
        "pdMax": 10,
        "pe": 4
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 5
      },
      {
        "pdMin": 13,
        "pdMax": 15,
        "pe": 6
      },
      {
        "pdMin": 16,
        "pdMax": 18,
        "pe": 7
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 8
      },
      {
        "pdMin": 21,
        "pdMax": 23,
        "pe": 9
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 10
      },
      {
        "pdMin": 26,
        "pdMax": 28,
        "pe": 11
      },
      {
        "pdMin": 29,
        "pdMax": 31,
        "pe": 12
      },
      {
        "pdMin": 32,
        "pdMax": 33,
        "pe": 13
      },
      {
        "pdMin": 34,
        "pdMax": 36,
        "pe": 14
      },
      {
        "pdMin": 37,
        "pdMax": 39,
        "pe": 15
      },
      {
        "pdMin": 40,
        "pdMax": 41,
        "pe": 16
      },
      {
        "pdMin": 42,
        "pdMax": 45,
        "pe": 17
      },
      {
        "pdMin": 46,
        "pdMax": 46,
        "pe": 18
      },
      {
        "pdMin": 47,
        "pdMax": 47,
        "pe": 19
      },
      {
        "pdMin": 48,
        "pdMax": 48,
        "pe": 20
      },
      {
        "pdMin": 49,
        "pdMax": 49,
        "pe": 21
      }
    ],
    "16_4": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 7,
        "pe": 3
      },
      {
        "pdMin": 8,
        "pdMax": 10,
        "pe": 4
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 5
      },
      {
        "pdMin": 13,
        "pdMax": 15,
        "pe": 6
      },
      {
        "pdMin": 16,
        "pdMax": 18,
        "pe": 7
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 8
      },
      {
        "pdMin": 21,
        "pdMax": 23,
        "pe": 9
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 10
      },
      {
        "pdMin": 26,
        "pdMax": 28,
        "pe": 11
      },
      {
        "pdMin": 29,
        "pdMax": 31,
        "pe": 12
      },
      {
        "pdMin": 32,
        "pdMax": 33,
        "pe": 13
      },
      {
        "pdMin": 34,
        "pdMax": 36,
        "pe": 14
      },
      {
        "pdMin": 37,
        "pdMax": 39,
        "pe": 15
      },
      {
        "pdMin": 40,
        "pdMax": 41,
        "pe": 16
      },
      {
        "pdMin": 42,
        "pdMax": 45,
        "pe": 17
      },
      {
        "pdMin": 46,
        "pdMax": 46,
        "pe": 18
      },
      {
        "pdMin": 47,
        "pdMax": 47,
        "pe": 19
      },
      {
        "pdMin": 48,
        "pdMax": 48,
        "pe": 20
      },
      {
        "pdMin": 49,
        "pdMax": 49,
        "pe": 21
      }
    ],
    "16_8": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 7,
        "pe": 3
      },
      {
        "pdMin": 8,
        "pdMax": 10,
        "pe": 4
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 5
      },
      {
        "pdMin": 13,
        "pdMax": 15,
        "pe": 6
      },
      {
        "pdMin": 16,
        "pdMax": 18,
        "pe": 7
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 8
      },
      {
        "pdMin": 21,
        "pdMax": 23,
        "pe": 9
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 10
      },
      {
        "pdMin": 26,
        "pdMax": 28,
        "pe": 11
      },
      {
        "pdMin": 29,
        "pdMax": 31,
        "pe": 12
      },
      {
        "pdMin": 32,
        "pdMax": 33,
        "pe": 13
      },
      {
        "pdMin": 34,
        "pdMax": 36,
        "pe": 14
      },
      {
        "pdMin": 37,
        "pdMax": 39,
        "pe": 15
      },
      {
        "pdMin": 40,
        "pdMax": 41,
        "pe": 16
      },
      {
        "pdMin": 42,
        "pdMax": 45,
        "pe": 17
      },
      {
        "pdMin": 46,
        "pdMax": 46,
        "pe": 18
      },
      {
        "pdMin": 47,
        "pdMax": 47,
        "pe": 19
      },
      {
        "pdMin": 48,
        "pdMax": 48,
        "pe": 20
      },
      {
        "pdMin": 49,
        "pdMax": 49,
        "pe": 21
      }
    ]
  },
  "bus": {
    "6_0": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 3
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 4
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 5
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 6
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 7
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 8
      },
      {
        "pdMin": 16,
        "pdMax": 18,
        "pe": 9
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 10
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 11
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 12
      },
      {
        "pdMin": 25,
        "pdMax": 26,
        "pe": 13
      },
      {
        "pdMin": 27,
        "pdMax": 28,
        "pe": 14
      },
      {
        "pdMin": 29,
        "pdMax": 30,
        "pe": 15
      },
      {
        "pdMin": 31,
        "pdMax": 32,
        "pe": 16
      },
      {
        "pdMin": 33,
        "pdMax": 35,
        "pe": 17
      },
      {
        "pdMin": 36,
        "pdMax": 37,
        "pe": 18
      },
      {
        "pdMin": 38,
        "pdMax": 39,
        "pe": 19
      },
      {
        "pdMin": 40,
        "pdMax": 40,
        "pe": 20
      },
      {
        "pdMin": 41,
        "pdMax": 41,
        "pe": 21
      },
      {
        "pdMin": 42,
        "pdMax": 42,
        "pe": 22
      }
    ],
    "6_4": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 3
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 4
      },
      {
        "pdMin": 8,
        "pdMax": 10,
        "pe": 5
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 6
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 7
      },
      {
        "pdMin": 15,
        "pdMax": 16,
        "pe": 8
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 9
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 10
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 11
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 12
      },
      {
        "pdMin": 25,
        "pdMax": 27,
        "pe": 13
      },
      {
        "pdMin": 28,
        "pdMax": 29,
        "pe": 14
      },
      {
        "pdMin": 30,
        "pdMax": 31,
        "pe": 15
      },
      {
        "pdMin": 32,
        "pdMax": 33,
        "pe": 16
      },
      {
        "pdMin": 34,
        "pdMax": 36,
        "pe": 17
      },
      {
        "pdMin": 37,
        "pdMax": 38,
        "pe": 18
      },
      {
        "pdMin": 39,
        "pdMax": 40,
        "pe": 19
      },
      {
        "pdMin": 41,
        "pdMax": 41,
        "pe": 20
      },
      {
        "pdMin": 42,
        "pdMax": 42,
        "pe": 21
      }
    ],
    "6_8": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 6,
        "pe": 3
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 4
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 5
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 6
      },
      {
        "pdMin": 13,
        "pdMax": 15,
        "pe": 7
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 8
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 9
      },
      {
        "pdMin": 20,
        "pdMax": 21,
        "pe": 10
      },
      {
        "pdMin": 22,
        "pdMax": 24,
        "pe": 11
      },
      {
        "pdMin": 25,
        "pdMax": 26,
        "pe": 12
      },
      {
        "pdMin": 27,
        "pdMax": 28,
        "pe": 13
      },
      {
        "pdMin": 29,
        "pdMax": 30,
        "pe": 14
      },
      {
        "pdMin": 31,
        "pdMax": 33,
        "pe": 15
      },
      {
        "pdMin": 34,
        "pdMax": 35,
        "pe": 16
      },
      {
        "pdMin": 36,
        "pdMax": 38,
        "pe": 17
      },
      {
        "pdMin": 39,
        "pdMax": 39,
        "pe": 18
      },
      {
        "pdMin": 40,
        "pdMax": 41,
        "pe": 19
      },
      {
        "pdMin": 42,
        "pdMax": 42,
        "pe": 20
      }
    ],
    "7_0": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 3
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 4
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 5
      },
      {
        "pdMin": 11,
        "pdMax": 13,
        "pe": 6
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 7
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 8
      },
      {
        "pdMin": 18,
        "pdMax": 20,
        "pe": 9
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 10
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 11
      },
      {
        "pdMin": 25,
        "pdMax": 27,
        "pe": 12
      },
      {
        "pdMin": 28,
        "pdMax": 29,
        "pe": 13
      },
      {
        "pdMin": 30,
        "pdMax": 31,
        "pe": 14
      },
      {
        "pdMin": 32,
        "pdMax": 33,
        "pe": 15
      },
      {
        "pdMin": 34,
        "pdMax": 36,
        "pe": 16
      },
      {
        "pdMin": 37,
        "pdMax": 39,
        "pe": 17
      },
      {
        "pdMin": 40,
        "pdMax": 40,
        "pe": 18
      },
      {
        "pdMin": 41,
        "pdMax": 41,
        "pe": 19
      },
      {
        "pdMin": 42,
        "pdMax": 42,
        "pe": 20
      }
    ],
    "7_4": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 3
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 4
      },
      {
        "pdMin": 9,
        "pdMax": 11,
        "pe": 5
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 6
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 7
      },
      {
        "pdMin": 16,
        "pdMax": 18,
        "pe": 8
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 9
      },
      {
        "pdMin": 21,
        "pdMax": 23,
        "pe": 10
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 11
      },
      {
        "pdMin": 26,
        "pdMax": 27,
        "pe": 12
      },
      {
        "pdMin": 28,
        "pdMax": 30,
        "pe": 13
      },
      {
        "pdMin": 31,
        "pdMax": 32,
        "pe": 14
      },
      {
        "pdMin": 33,
        "pdMax": 34,
        "pe": 15
      },
      {
        "pdMin": 35,
        "pdMax": 37,
        "pe": 16
      },
      {
        "pdMin": 38,
        "pdMax": 40,
        "pe": 17
      },
      {
        "pdMin": 41,
        "pdMax": 41,
        "pe": 18
      },
      {
        "pdMin": 42,
        "pdMax": 42,
        "pe": 19
      }
    ],
    "8_0": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 3
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 4
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 5
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 6
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 7
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 8
      },
      {
        "pdMin": 15,
        "pdMax": 16,
        "pe": 9
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 10
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 11
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 12
      },
      {
        "pdMin": 23,
        "pdMax": 23,
        "pe": 13
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 14
      },
      {
        "pdMin": 26,
        "pdMax": 27,
        "pe": 15
      },
      {
        "pdMin": 28,
        "pdMax": 29,
        "pe": 16
      },
      {
        "pdMin": 30,
        "pdMax": 32,
        "pe": 17
      },
      {
        "pdMin": 33,
        "pdMax": 34,
        "pe": 18
      },
      {
        "pdMin": 35,
        "pdMax": 36,
        "pe": 19
      },
      {
        "pdMin": 37,
        "pdMax": 38,
        "pe": 20
      },
      {
        "pdMin": 39,
        "pdMax": 40,
        "pe": 21
      },
      {
        "pdMin": 41,
        "pdMax": 42,
        "pe": 22
      },
      {
        "pdMin": 43,
        "pdMax": 44,
        "pe": 23
      },
      {
        "pdMin": 45,
        "pdMax": 46,
        "pe": 24
      },
      {
        "pdMin": 47,
        "pdMax": 48,
        "pe": 25
      },
      {
        "pdMin": 49,
        "pdMax": 50,
        "pe": 26
      },
      {
        "pdMin": 51,
        "pdMax": 52,
        "pe": 27
      },
      {
        "pdMin": 53,
        "pdMax": 60,
        "pe": 28
      }
    ],
    "8_4": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 3
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 4
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 5
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 6
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 7
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 8
      },
      {
        "pdMin": 16,
        "pdMax": 16,
        "pe": 9
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 10
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 11
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 12
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 13
      },
      {
        "pdMin": 25,
        "pdMax": 26,
        "pe": 14
      },
      {
        "pdMin": 27,
        "pdMax": 28,
        "pe": 15
      },
      {
        "pdMin": 29,
        "pdMax": 30,
        "pe": 16
      },
      {
        "pdMin": 31,
        "pdMax": 33,
        "pe": 17
      },
      {
        "pdMin": 34,
        "pdMax": 35,
        "pe": 18
      },
      {
        "pdMin": 36,
        "pdMax": 37,
        "pe": 19
      },
      {
        "pdMin": 38,
        "pdMax": 39,
        "pe": 20
      },
      {
        "pdMin": 40,
        "pdMax": 41,
        "pe": 21
      },
      {
        "pdMin": 42,
        "pdMax": 43,
        "pe": 22
      },
      {
        "pdMin": 44,
        "pdMax": 45,
        "pe": 23
      },
      {
        "pdMin": 46,
        "pdMax": 47,
        "pe": 24
      },
      {
        "pdMin": 48,
        "pdMax": 49,
        "pe": 25
      },
      {
        "pdMin": 50,
        "pdMax": 51,
        "pe": 26
      },
      {
        "pdMin": 52,
        "pdMax": 53,
        "pe": 27
      },
      {
        "pdMin": 54,
        "pdMax": 60,
        "pe": 28
      }
    ],
    "8_8": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 3
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 4
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 5
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 6
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 7
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 8
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 9
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 10
      },
      {
        "pdMin": 20,
        "pdMax": 21,
        "pe": 11
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 12
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 13
      },
      {
        "pdMin": 26,
        "pdMax": 27,
        "pe": 14
      },
      {
        "pdMin": 28,
        "pdMax": 29,
        "pe": 15
      },
      {
        "pdMin": 30,
        "pdMax": 31,
        "pe": 16
      },
      {
        "pdMin": 32,
        "pdMax": 34,
        "pe": 17
      },
      {
        "pdMin": 35,
        "pdMax": 36,
        "pe": 18
      },
      {
        "pdMin": 37,
        "pdMax": 38,
        "pe": 19
      },
      {
        "pdMin": 39,
        "pdMax": 40,
        "pe": 20
      },
      {
        "pdMin": 41,
        "pdMax": 42,
        "pe": 21
      },
      {
        "pdMin": 43,
        "pdMax": 44,
        "pe": 22
      },
      {
        "pdMin": 45,
        "pdMax": 46,
        "pe": 23
      },
      {
        "pdMin": 47,
        "pdMax": 48,
        "pe": 24
      },
      {
        "pdMin": 49,
        "pdMax": 50,
        "pe": 25
      },
      {
        "pdMin": 51,
        "pdMax": 52,
        "pe": 26
      },
      {
        "pdMin": 53,
        "pdMax": 54,
        "pe": 27
      },
      {
        "pdMin": 55,
        "pdMax": 60,
        "pe": 28
      }
    ],
    "9_0": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 3
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 4
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 5
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 6
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 7
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 8
      },
      {
        "pdMin": 16,
        "pdMax": 18,
        "pe": 9
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 10
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 11
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 12
      },
      {
        "pdMin": 25,
        "pdMax": 26,
        "pe": 13
      },
      {
        "pdMin": 27,
        "pdMax": 28,
        "pe": 14
      },
      {
        "pdMin": 29,
        "pdMax": 30,
        "pe": 15
      },
      {
        "pdMin": 31,
        "pdMax": 32,
        "pe": 16
      },
      {
        "pdMin": 33,
        "pdMax": 35,
        "pe": 17
      },
      {
        "pdMin": 36,
        "pdMax": 37,
        "pe": 18
      },
      {
        "pdMin": 38,
        "pdMax": 39,
        "pe": 19
      },
      {
        "pdMin": 40,
        "pdMax": 41,
        "pe": 20
      },
      {
        "pdMin": 42,
        "pdMax": 43,
        "pe": 21
      },
      {
        "pdMin": 44,
        "pdMax": 45,
        "pe": 22
      },
      {
        "pdMin": 46,
        "pdMax": 47,
        "pe": 23
      },
      {
        "pdMin": 48,
        "pdMax": 49,
        "pe": 24
      },
      {
        "pdMin": 50,
        "pdMax": 51,
        "pe": 25
      },
      {
        "pdMin": 52,
        "pdMax": 53,
        "pe": 26
      },
      {
        "pdMin": 54,
        "pdMax": 55,
        "pe": 27
      },
      {
        "pdMin": 56,
        "pdMax": 60,
        "pe": 28
      }
    ],
    "9_4": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 3
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 4
      },
      {
        "pdMin": 8,
        "pdMax": 10,
        "pe": 5
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 6
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 7
      },
      {
        "pdMin": 15,
        "pdMax": 16,
        "pe": 8
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 9
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 10
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 11
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 12
      },
      {
        "pdMin": 25,
        "pdMax": 27,
        "pe": 13
      },
      {
        "pdMin": 28,
        "pdMax": 29,
        "pe": 14
      },
      {
        "pdMin": 30,
        "pdMax": 31,
        "pe": 15
      },
      {
        "pdMin": 32,
        "pdMax": 33,
        "pe": 16
      },
      {
        "pdMin": 34,
        "pdMax": 36,
        "pe": 17
      },
      {
        "pdMin": 37,
        "pdMax": 38,
        "pe": 18
      },
      {
        "pdMin": 39,
        "pdMax": 40,
        "pe": 19
      },
      {
        "pdMin": 41,
        "pdMax": 42,
        "pe": 20
      },
      {
        "pdMin": 43,
        "pdMax": 44,
        "pe": 21
      },
      {
        "pdMin": 45,
        "pdMax": 46,
        "pe": 22
      },
      {
        "pdMin": 47,
        "pdMax": 48,
        "pe": 23
      },
      {
        "pdMin": 49,
        "pdMax": 50,
        "pe": 24
      },
      {
        "pdMin": 51,
        "pdMax": 52,
        "pe": 25
      },
      {
        "pdMin": 53,
        "pdMax": 54,
        "pe": 26
      },
      {
        "pdMin": 55,
        "pdMax": 56,
        "pe": 27
      },
      {
        "pdMin": 57,
        "pdMax": 60,
        "pe": 28
      }
    ],
    "9_8": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 6,
        "pe": 3
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 4
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 5
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 6
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 7
      },
      {
        "pdMin": 15,
        "pdMax": 16,
        "pe": 8
      },
      {
        "pdMin": 17,
        "pdMax": 19,
        "pe": 9
      },
      {
        "pdMin": 20,
        "pdMax": 21,
        "pe": 10
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 11
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 12
      },
      {
        "pdMin": 26,
        "pdMax": 27,
        "pe": 13
      },
      {
        "pdMin": 28,
        "pdMax": 29,
        "pe": 14
      },
      {
        "pdMin": 30,
        "pdMax": 32,
        "pe": 15
      },
      {
        "pdMin": 33,
        "pdMax": 34,
        "pe": 16
      },
      {
        "pdMin": 35,
        "pdMax": 37,
        "pe": 17
      },
      {
        "pdMin": 38,
        "pdMax": 39,
        "pe": 18
      },
      {
        "pdMin": 40,
        "pdMax": 41,
        "pe": 19
      },
      {
        "pdMin": 42,
        "pdMax": 43,
        "pe": 20
      },
      {
        "pdMin": 44,
        "pdMax": 45,
        "pe": 21
      },
      {
        "pdMin": 46,
        "pdMax": 47,
        "pe": 22
      },
      {
        "pdMin": 48,
        "pdMax": 49,
        "pe": 23
      },
      {
        "pdMin": 50,
        "pdMax": 51,
        "pe": 24
      },
      {
        "pdMin": 52,
        "pdMax": 53,
        "pe": 25
      },
      {
        "pdMin": 54,
        "pdMax": 55,
        "pe": 26
      },
      {
        "pdMin": 56,
        "pdMax": 57,
        "pe": 27
      },
      {
        "pdMin": 58,
        "pdMax": 60,
        "pe": 28
      }
    ],
    "10_0": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 6,
        "pe": 3
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 4
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 5
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 6
      },
      {
        "pdMin": 13,
        "pdMax": 15,
        "pe": 7
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 8
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 9
      },
      {
        "pdMin": 20,
        "pdMax": 21,
        "pe": 10
      },
      {
        "pdMin": 22,
        "pdMax": 24,
        "pe": 11
      },
      {
        "pdMin": 25,
        "pdMax": 26,
        "pe": 12
      },
      {
        "pdMin": 27,
        "pdMax": 28,
        "pe": 13
      },
      {
        "pdMin": 29,
        "pdMax": 30,
        "pe": 14
      },
      {
        "pdMin": 31,
        "pdMax": 33,
        "pe": 15
      },
      {
        "pdMin": 34,
        "pdMax": 35,
        "pe": 16
      },
      {
        "pdMin": 36,
        "pdMax": 38,
        "pe": 17
      },
      {
        "pdMin": 39,
        "pdMax": 40,
        "pe": 18
      },
      {
        "pdMin": 41,
        "pdMax": 42,
        "pe": 19
      },
      {
        "pdMin": 43,
        "pdMax": 44,
        "pe": 20
      },
      {
        "pdMin": 45,
        "pdMax": 46,
        "pe": 21
      },
      {
        "pdMin": 47,
        "pdMax": 48,
        "pe": 22
      },
      {
        "pdMin": 49,
        "pdMax": 50,
        "pe": 23
      },
      {
        "pdMin": 51,
        "pdMax": 52,
        "pe": 24
      },
      {
        "pdMin": 53,
        "pdMax": 54,
        "pe": 25
      },
      {
        "pdMin": 55,
        "pdMax": 55,
        "pe": 26
      },
      {
        "pdMin": 56,
        "pdMax": 57,
        "pe": 27
      },
      {
        "pdMin": 58,
        "pdMax": 60,
        "pe": 28
      }
    ],
    "10_4": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 3
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 4
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 5
      },
      {
        "pdMin": 11,
        "pdMax": 13,
        "pe": 6
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 7
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 8
      },
      {
        "pdMin": 18,
        "pdMax": 20,
        "pe": 9
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 10
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 11
      },
      {
        "pdMin": 25,
        "pdMax": 27,
        "pe": 12
      },
      {
        "pdMin": 28,
        "pdMax": 29,
        "pe": 13
      },
      {
        "pdMin": 30,
        "pdMax": 31,
        "pe": 14
      },
      {
        "pdMin": 32,
        "pdMax": 33,
        "pe": 15
      },
      {
        "pdMin": 34,
        "pdMax": 36,
        "pe": 16
      },
      {
        "pdMin": 37,
        "pdMax": 39,
        "pe": 17
      },
      {
        "pdMin": 40,
        "pdMax": 41,
        "pe": 18
      },
      {
        "pdMin": 42,
        "pdMax": 43,
        "pe": 19
      },
      {
        "pdMin": 44,
        "pdMax": 45,
        "pe": 20
      },
      {
        "pdMin": 46,
        "pdMax": 47,
        "pe": 21
      },
      {
        "pdMin": 48,
        "pdMax": 49,
        "pe": 22
      },
      {
        "pdMin": 50,
        "pdMax": 51,
        "pe": 23
      },
      {
        "pdMin": 52,
        "pdMax": 52,
        "pe": 24
      },
      {
        "pdMin": 53,
        "pdMax": 54,
        "pe": 25
      },
      {
        "pdMin": 55,
        "pdMax": 56,
        "pe": 26
      },
      {
        "pdMin": 57,
        "pdMax": 58,
        "pe": 27
      },
      {
        "pdMin": 59,
        "pdMax": 60,
        "pe": 28
      }
    ],
    "10_8": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 3
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 4
      },
      {
        "pdMin": 9,
        "pdMax": 11,
        "pe": 5
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 6
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 7
      },
      {
        "pdMin": 16,
        "pdMax": 18,
        "pe": 8
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 9
      },
      {
        "pdMin": 21,
        "pdMax": 23,
        "pe": 10
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 11
      },
      {
        "pdMin": 26,
        "pdMax": 27,
        "pe": 12
      },
      {
        "pdMin": 28,
        "pdMax": 30,
        "pe": 13
      },
      {
        "pdMin": 31,
        "pdMax": 32,
        "pe": 14
      },
      {
        "pdMin": 33,
        "pdMax": 34,
        "pe": 15
      },
      {
        "pdMin": 35,
        "pdMax": 37,
        "pe": 16
      },
      {
        "pdMin": 38,
        "pdMax": 40,
        "pe": 17
      },
      {
        "pdMin": 41,
        "pdMax": 42,
        "pe": 18
      },
      {
        "pdMin": 43,
        "pdMax": 44,
        "pe": 19
      },
      {
        "pdMin": 45,
        "pdMax": 46,
        "pe": 20
      },
      {
        "pdMin": 47,
        "pdMax": 48,
        "pe": 21
      },
      {
        "pdMin": 49,
        "pdMax": 49,
        "pe": 22
      },
      {
        "pdMin": 50,
        "pdMax": 51,
        "pe": 23
      },
      {
        "pdMin": 52,
        "pdMax": 53,
        "pe": 24
      },
      {
        "pdMin": 54,
        "pdMax": 55,
        "pe": 25
      },
      {
        "pdMin": 56,
        "pdMax": 56,
        "pe": 26
      },
      {
        "pdMin": 57,
        "pdMax": 58,
        "pe": 27
      },
      {
        "pdMin": 59,
        "pdMax": 60,
        "pe": 28
      }
    ],
    "11_0": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 3
      },
      {
        "pdMin": 7,
        "pdMax": 9,
        "pe": 4
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 5
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 6
      },
      {
        "pdMin": 14,
        "pdMax": 16,
        "pe": 7
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 8
      },
      {
        "pdMin": 19,
        "pdMax": 21,
        "pe": 9
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 10
      },
      {
        "pdMin": 24,
        "pdMax": 26,
        "pe": 11
      },
      {
        "pdMin": 27,
        "pdMax": 28,
        "pe": 12
      },
      {
        "pdMin": 29,
        "pdMax": 30,
        "pe": 13
      },
      {
        "pdMin": 31,
        "pdMax": 33,
        "pe": 14
      },
      {
        "pdMin": 34,
        "pdMax": 35,
        "pe": 15
      },
      {
        "pdMin": 36,
        "pdMax": 38,
        "pe": 16
      },
      {
        "pdMin": 39,
        "pdMax": 41,
        "pe": 17
      },
      {
        "pdMin": 42,
        "pdMax": 43,
        "pe": 18
      },
      {
        "pdMin": 44,
        "pdMax": 45,
        "pe": 19
      },
      {
        "pdMin": 46,
        "pdMax": 47,
        "pe": 20
      },
      {
        "pdMin": 48,
        "pdMax": 49,
        "pe": 21
      },
      {
        "pdMin": 50,
        "pdMax": 50,
        "pe": 22
      },
      {
        "pdMin": 51,
        "pdMax": 52,
        "pe": 23
      },
      {
        "pdMin": 53,
        "pdMax": 53,
        "pe": 24
      },
      {
        "pdMin": 54,
        "pdMax": 55,
        "pe": 25
      },
      {
        "pdMin": 56,
        "pdMax": 56,
        "pe": 26
      },
      {
        "pdMin": 57,
        "pdMax": 58,
        "pe": 27
      },
      {
        "pdMin": 59,
        "pdMax": 60,
        "pe": 28
      }
    ],
    "11_4": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 3
      },
      {
        "pdMin": 7,
        "pdMax": 9,
        "pe": 4
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 5
      },
      {
        "pdMin": 12,
        "pdMax": 14,
        "pe": 6
      },
      {
        "pdMin": 15,
        "pdMax": 16,
        "pe": 7
      },
      {
        "pdMin": 17,
        "pdMax": 19,
        "pe": 8
      },
      {
        "pdMin": 20,
        "pdMax": 21,
        "pe": 9
      },
      {
        "pdMin": 22,
        "pdMax": 24,
        "pe": 10
      },
      {
        "pdMin": 25,
        "pdMax": 26,
        "pe": 11
      },
      {
        "pdMin": 27,
        "pdMax": 29,
        "pe": 12
      },
      {
        "pdMin": 30,
        "pdMax": 31,
        "pe": 13
      },
      {
        "pdMin": 32,
        "pdMax": 34,
        "pe": 14
      },
      {
        "pdMin": 35,
        "pdMax": 36,
        "pe": 15
      },
      {
        "pdMin": 37,
        "pdMax": 39,
        "pe": 16
      },
      {
        "pdMin": 40,
        "pdMax": 42,
        "pe": 17
      },
      {
        "pdMin": 43,
        "pdMax": 44,
        "pe": 18
      },
      {
        "pdMin": 45,
        "pdMax": 46,
        "pe": 19
      },
      {
        "pdMin": 47,
        "pdMax": 48,
        "pe": 20
      },
      {
        "pdMin": 49,
        "pdMax": 50,
        "pe": 21
      },
      {
        "pdMin": 51,
        "pdMax": 51,
        "pe": 22
      },
      {
        "pdMin": 52,
        "pdMax": 53,
        "pe": 23
      },
      {
        "pdMin": 54,
        "pdMax": 54,
        "pe": 24
      },
      {
        "pdMin": 55,
        "pdMax": 56,
        "pe": 25
      },
      {
        "pdMin": 57,
        "pdMax": 57,
        "pe": 26
      },
      {
        "pdMin": 58,
        "pdMax": 59,
        "pe": 27
      },
      {
        "pdMin": 60,
        "pdMax": 60,
        "pe": 28
      }
    ],
    "11_8": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 7,
        "pe": 3
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 4
      },
      {
        "pdMin": 10,
        "pdMax": 12,
        "pe": 5
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 6
      },
      {
        "pdMin": 15,
        "pdMax": 17,
        "pe": 7
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 8
      },
      {
        "pdMin": 20,
        "pdMax": 22,
        "pe": 9
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 10
      },
      {
        "pdMin": 25,
        "pdMax": 27,
        "pe": 11
      },
      {
        "pdMin": 28,
        "pdMax": 29,
        "pe": 12
      },
      {
        "pdMin": 30,
        "pdMax": 32,
        "pe": 13
      },
      {
        "pdMin": 33,
        "pdMax": 34,
        "pe": 14
      },
      {
        "pdMin": 35,
        "pdMax": 37,
        "pe": 15
      },
      {
        "pdMin": 38,
        "pdMax": 39,
        "pe": 16
      },
      {
        "pdMin": 40,
        "pdMax": 43,
        "pe": 17
      },
      {
        "pdMin": 44,
        "pdMax": 45,
        "pe": 18
      },
      {
        "pdMin": 46,
        "pdMax": 47,
        "pe": 19
      },
      {
        "pdMin": 48,
        "pdMax": 48,
        "pe": 20
      },
      {
        "pdMin": 49,
        "pdMax": 50,
        "pe": 21
      },
      {
        "pdMin": 51,
        "pdMax": 51,
        "pe": 22
      },
      {
        "pdMin": 52,
        "pdMax": 53,
        "pe": 23
      },
      {
        "pdMin": 54,
        "pdMax": 54,
        "pe": 24
      },
      {
        "pdMin": 55,
        "pdMax": 56,
        "pe": 25
      },
      {
        "pdMin": 57,
        "pdMax": 57,
        "pe": 26
      },
      {
        "pdMin": 58,
        "pdMax": 59,
        "pe": 27
      },
      {
        "pdMin": 60,
        "pdMax": 60,
        "pe": 28
      }
    ],
    "12_0": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 7,
        "pe": 3
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 4
      },
      {
        "pdMin": 10,
        "pdMax": 12,
        "pe": 5
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 6
      },
      {
        "pdMin": 15,
        "pdMax": 17,
        "pe": 7
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 8
      },
      {
        "pdMin": 20,
        "pdMax": 22,
        "pe": 9
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 10
      },
      {
        "pdMin": 25,
        "pdMax": 27,
        "pe": 11
      },
      {
        "pdMin": 28,
        "pdMax": 29,
        "pe": 12
      },
      {
        "pdMin": 30,
        "pdMax": 32,
        "pe": 13
      },
      {
        "pdMin": 33,
        "pdMax": 34,
        "pe": 14
      },
      {
        "pdMin": 35,
        "pdMax": 37,
        "pe": 15
      },
      {
        "pdMin": 38,
        "pdMax": 39,
        "pe": 16
      },
      {
        "pdMin": 40,
        "pdMax": 43,
        "pe": 17
      },
      {
        "pdMin": 44,
        "pdMax": 45,
        "pe": 18
      },
      {
        "pdMin": 46,
        "pdMax": 47,
        "pe": 19
      },
      {
        "pdMin": 48,
        "pdMax": 49,
        "pe": 20
      },
      {
        "pdMin": 50,
        "pdMax": 51,
        "pe": 21
      },
      {
        "pdMin": 52,
        "pdMax": 52,
        "pe": 22
      },
      {
        "pdMin": 53,
        "pdMax": 54,
        "pe": 23
      },
      {
        "pdMin": 55,
        "pdMax": 55,
        "pe": 24
      },
      {
        "pdMin": 56,
        "pdMax": 57,
        "pe": 25
      },
      {
        "pdMin": 58,
        "pdMax": 58,
        "pe": 26
      },
      {
        "pdMin": 59,
        "pdMax": 59,
        "pe": 27
      },
      {
        "pdMin": 60,
        "pdMax": 60,
        "pe": 28
      }
    ],
    "12_4": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 7,
        "pe": 3
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 4
      },
      {
        "pdMin": 10,
        "pdMax": 12,
        "pe": 5
      },
      {
        "pdMin": 13,
        "pdMax": 15,
        "pe": 6
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 7
      },
      {
        "pdMin": 18,
        "pdMax": 20,
        "pe": 8
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 9
      },
      {
        "pdMin": 23,
        "pdMax": 25,
        "pe": 10
      },
      {
        "pdMin": 26,
        "pdMax": 27,
        "pe": 11
      },
      {
        "pdMin": 28,
        "pdMax": 30,
        "pe": 12
      },
      {
        "pdMin": 31,
        "pdMax": 33,
        "pe": 13
      },
      {
        "pdMin": 34,
        "pdMax": 35,
        "pe": 14
      },
      {
        "pdMin": 36,
        "pdMax": 38,
        "pe": 15
      },
      {
        "pdMin": 39,
        "pdMax": 40,
        "pe": 16
      },
      {
        "pdMin": 41,
        "pdMax": 44,
        "pe": 17
      },
      {
        "pdMin": 45,
        "pdMax": 46,
        "pe": 18
      },
      {
        "pdMin": 47,
        "pdMax": 48,
        "pe": 19
      },
      {
        "pdMin": 49,
        "pdMax": 50,
        "pe": 20
      },
      {
        "pdMin": 51,
        "pdMax": 51,
        "pe": 21
      },
      {
        "pdMin": 52,
        "pdMax": 52,
        "pe": 22
      },
      {
        "pdMin": 53,
        "pdMax": 54,
        "pe": 23
      },
      {
        "pdMin": 55,
        "pdMax": 55,
        "pe": 24
      },
      {
        "pdMin": 56,
        "pdMax": 57,
        "pe": 25
      },
      {
        "pdMin": 58,
        "pdMax": 58,
        "pe": 26
      },
      {
        "pdMin": 59,
        "pdMax": 59,
        "pe": 27
      },
      {
        "pdMin": 60,
        "pdMax": 60,
        "pe": 28
      }
    ],
    "12_8": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 7,
        "pe": 3
      },
      {
        "pdMin": 8,
        "pdMax": 10,
        "pe": 4
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 5
      },
      {
        "pdMin": 13,
        "pdMax": 15,
        "pe": 6
      },
      {
        "pdMin": 16,
        "pdMax": 18,
        "pe": 7
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 8
      },
      {
        "pdMin": 21,
        "pdMax": 23,
        "pe": 9
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 10
      },
      {
        "pdMin": 26,
        "pdMax": 28,
        "pe": 11
      },
      {
        "pdMin": 29,
        "pdMax": 31,
        "pe": 12
      },
      {
        "pdMin": 32,
        "pdMax": 33,
        "pe": 13
      },
      {
        "pdMin": 34,
        "pdMax": 36,
        "pe": 14
      },
      {
        "pdMin": 37,
        "pdMax": 39,
        "pe": 15
      },
      {
        "pdMin": 40,
        "pdMax": 41,
        "pe": 16
      },
      {
        "pdMin": 42,
        "pdMax": 45,
        "pe": 17
      },
      {
        "pdMin": 46,
        "pdMax": 47,
        "pe": 18
      },
      {
        "pdMin": 48,
        "pdMax": 49,
        "pe": 19
      },
      {
        "pdMin": 50,
        "pdMax": 51,
        "pe": 20
      },
      {
        "pdMin": 52,
        "pdMax": 52,
        "pe": 21
      },
      {
        "pdMin": 53,
        "pdMax": 53,
        "pe": 22
      },
      {
        "pdMin": 54,
        "pdMax": 55,
        "pe": 23
      },
      {
        "pdMin": 56,
        "pdMax": 56,
        "pe": 24
      },
      {
        "pdMin": 57,
        "pdMax": 58,
        "pe": 25
      },
      {
        "pdMin": 59,
        "pdMax": 59,
        "pe": 26
      },
      {
        "pdMin": 60,
        "pdMax": 60,
        "pe": 27
      }
    ],
    "13_0": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 2
      },
      {
        "pdMin": 5,
        "pdMax": 7,
        "pe": 3
      },
      {
        "pdMin": 8,
        "pdMax": 10,
        "pe": 4
      },
      {
        "pdMin": 11,
        "pdMax": 13,
        "pe": 5
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 6
      },
      {
        "pdMin": 16,
        "pdMax": 18,
        "pe": 7
      },
      {
        "pdMin": 19,
        "pdMax": 21,
        "pe": 8
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 9
      },
      {
        "pdMin": 24,
        "pdMax": 26,
        "pe": 10
      },
      {
        "pdMin": 27,
        "pdMax": 29,
        "pe": 11
      },
      {
        "pdMin": 30,
        "pdMax": 31,
        "pe": 12
      },
      {
        "pdMin": 32,
        "pdMax": 34,
        "pe": 13
      },
      {
        "pdMin": 35,
        "pdMax": 37,
        "pe": 14
      },
      {
        "pdMin": 38,
        "pdMax": 40,
        "pe": 15
      },
      {
        "pdMin": 41,
        "pdMax": 42,
        "pe": 16
      },
      {
        "pdMin": 43,
        "pdMax": 46,
        "pe": 17
      },
      {
        "pdMin": 47,
        "pdMax": 48,
        "pe": 18
      },
      {
        "pdMin": 49,
        "pdMax": 50,
        "pe": 19
      },
      {
        "pdMin": 51,
        "pdMax": 52,
        "pe": 20
      },
      {
        "pdMin": 53,
        "pdMax": 53,
        "pe": 21
      },
      {
        "pdMin": 54,
        "pdMax": 54,
        "pe": 22
      },
      {
        "pdMin": 55,
        "pdMax": 55,
        "pe": 23
      },
      {
        "pdMin": 56,
        "pdMax": 56,
        "pe": 24
      },
      {
        "pdMin": 57,
        "pdMax": 58,
        "pe": 25
      },
      {
        "pdMin": 59,
        "pdMax": 59,
        "pe": 26
      },
      {
        "pdMin": 60,
        "pdMax": 60,
        "pe": 27
      }
    ],
    "13_4": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 5,
        "pe": 2
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 3
      },
      {
        "pdMin": 8,
        "pdMax": 10,
        "pe": 4
      },
      {
        "pdMin": 11,
        "pdMax": 13,
        "pe": 5
      },
      {
        "pdMin": 14,
        "pdMax": 16,
        "pe": 6
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 7
      },
      {
        "pdMin": 19,
        "pdMax": 21,
        "pe": 8
      },
      {
        "pdMin": 22,
        "pdMax": 24,
        "pe": 9
      },
      {
        "pdMin": 25,
        "pdMax": 27,
        "pe": 10
      },
      {
        "pdMin": 28,
        "pdMax": 29,
        "pe": 11
      },
      {
        "pdMin": 30,
        "pdMax": 32,
        "pe": 12
      },
      {
        "pdMin": 33,
        "pdMax": 35,
        "pe": 13
      },
      {
        "pdMin": 36,
        "pdMax": 38,
        "pe": 14
      },
      {
        "pdMin": 39,
        "pdMax": 40,
        "pe": 15
      },
      {
        "pdMin": 41,
        "pdMax": 43,
        "pe": 16
      },
      {
        "pdMin": 44,
        "pdMax": 47,
        "pe": 17
      },
      {
        "pdMin": 48,
        "pdMax": 49,
        "pe": 18
      },
      {
        "pdMin": 50,
        "pdMax": 51,
        "pe": 19
      },
      {
        "pdMin": 52,
        "pdMax": 53,
        "pe": 20
      },
      {
        "pdMin": 54,
        "pdMax": 54,
        "pe": 21
      },
      {
        "pdMin": 55,
        "pdMax": 55,
        "pe": 22
      },
      {
        "pdMin": 56,
        "pdMax": 56,
        "pe": 23
      },
      {
        "pdMin": 57,
        "pdMax": 57,
        "pe": 24
      },
      {
        "pdMin": 58,
        "pdMax": 58,
        "pe": 25
      },
      {
        "pdMin": 59,
        "pdMax": 59,
        "pe": 26
      },
      {
        "pdMin": 60,
        "pdMax": 60,
        "pe": 27
      }
    ],
    "13_8": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 5,
        "pe": 2
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 3
      },
      {
        "pdMin": 8,
        "pdMax": 10,
        "pe": 4
      },
      {
        "pdMin": 11,
        "pdMax": 13,
        "pe": 5
      },
      {
        "pdMin": 14,
        "pdMax": 16,
        "pe": 6
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 7
      },
      {
        "pdMin": 19,
        "pdMax": 21,
        "pe": 8
      },
      {
        "pdMin": 22,
        "pdMax": 24,
        "pe": 9
      },
      {
        "pdMin": 25,
        "pdMax": 27,
        "pe": 10
      },
      {
        "pdMin": 28,
        "pdMax": 29,
        "pe": 11
      },
      {
        "pdMin": 30,
        "pdMax": 32,
        "pe": 12
      },
      {
        "pdMin": 33,
        "pdMax": 35,
        "pe": 13
      },
      {
        "pdMin": 36,
        "pdMax": 38,
        "pe": 14
      },
      {
        "pdMin": 39,
        "pdMax": 40,
        "pe": 15
      },
      {
        "pdMin": 41,
        "pdMax": 43,
        "pe": 16
      },
      {
        "pdMin": 44,
        "pdMax": 47,
        "pe": 17
      },
      {
        "pdMin": 48,
        "pdMax": 49,
        "pe": 18
      },
      {
        "pdMin": 50,
        "pdMax": 51,
        "pe": 19
      },
      {
        "pdMin": 52,
        "pdMax": 53,
        "pe": 20
      },
      {
        "pdMin": 54,
        "pdMax": 54,
        "pe": 21
      },
      {
        "pdMin": 55,
        "pdMax": 55,
        "pe": 22
      },
      {
        "pdMin": 56,
        "pdMax": 56,
        "pe": 23
      },
      {
        "pdMin": 57,
        "pdMax": 57,
        "pe": 24
      },
      {
        "pdMin": 58,
        "pdMax": 59,
        "pe": 25
      },
      {
        "pdMin": 60,
        "pdMax": 60,
        "pe": 26
      }
    ],
    "14_0": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 5,
        "pe": 2
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 3
      },
      {
        "pdMin": 8,
        "pdMax": 10,
        "pe": 4
      },
      {
        "pdMin": 11,
        "pdMax": 13,
        "pe": 5
      },
      {
        "pdMin": 14,
        "pdMax": 16,
        "pe": 6
      },
      {
        "pdMin": 17,
        "pdMax": 19,
        "pe": 7
      },
      {
        "pdMin": 20,
        "pdMax": 22,
        "pe": 8
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 9
      },
      {
        "pdMin": 25,
        "pdMax": 27,
        "pe": 10
      },
      {
        "pdMin": 28,
        "pdMax": 30,
        "pe": 11
      },
      {
        "pdMin": 31,
        "pdMax": 33,
        "pe": 12
      },
      {
        "pdMin": 34,
        "pdMax": 36,
        "pe": 13
      },
      {
        "pdMin": 37,
        "pdMax": 39,
        "pe": 14
      },
      {
        "pdMin": 40,
        "pdMax": 41,
        "pe": 15
      },
      {
        "pdMin": 42,
        "pdMax": 44,
        "pe": 16
      },
      {
        "pdMin": 45,
        "pdMax": 48,
        "pe": 17
      },
      {
        "pdMin": 49,
        "pdMax": 50,
        "pe": 18
      },
      {
        "pdMin": 51,
        "pdMax": 52,
        "pe": 19
      },
      {
        "pdMin": 53,
        "pdMax": 54,
        "pe": 20
      },
      {
        "pdMin": 55,
        "pdMax": 55,
        "pe": 21
      },
      {
        "pdMin": 56,
        "pdMax": 56,
        "pe": 22
      },
      {
        "pdMin": 57,
        "pdMax": 57,
        "pe": 23
      },
      {
        "pdMin": 58,
        "pdMax": 58,
        "pe": 24
      },
      {
        "pdMin": 59,
        "pdMax": 59,
        "pe": 25
      },
      {
        "pdMin": 60,
        "pdMax": 60,
        "pe": 26
      }
    ],
    "14_4": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 5,
        "pe": 2
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 3
      },
      {
        "pdMin": 8,
        "pdMax": 10,
        "pe": 4
      },
      {
        "pdMin": 11,
        "pdMax": 13,
        "pe": 5
      },
      {
        "pdMin": 14,
        "pdMax": 16,
        "pe": 6
      },
      {
        "pdMin": 17,
        "pdMax": 19,
        "pe": 7
      },
      {
        "pdMin": 20,
        "pdMax": 22,
        "pe": 8
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 9
      },
      {
        "pdMin": 25,
        "pdMax": 27,
        "pe": 10
      },
      {
        "pdMin": 28,
        "pdMax": 30,
        "pe": 11
      },
      {
        "pdMin": 31,
        "pdMax": 33,
        "pe": 12
      },
      {
        "pdMin": 34,
        "pdMax": 36,
        "pe": 13
      },
      {
        "pdMin": 37,
        "pdMax": 39,
        "pe": 14
      },
      {
        "pdMin": 40,
        "pdMax": 41,
        "pe": 15
      },
      {
        "pdMin": 42,
        "pdMax": 44,
        "pe": 16
      },
      {
        "pdMin": 45,
        "pdMax": 48,
        "pe": 17
      },
      {
        "pdMin": 49,
        "pdMax": 50,
        "pe": 18
      },
      {
        "pdMin": 51,
        "pdMax": 52,
        "pe": 19
      },
      {
        "pdMin": 53,
        "pdMax": 54,
        "pe": 20
      },
      {
        "pdMin": 55,
        "pdMax": 55,
        "pe": 21
      },
      {
        "pdMin": 56,
        "pdMax": 56,
        "pe": 22
      },
      {
        "pdMin": 57,
        "pdMax": 57,
        "pe": 23
      },
      {
        "pdMin": 58,
        "pdMax": 58,
        "pe": 24
      },
      {
        "pdMin": 59,
        "pdMax": 59,
        "pe": 25
      },
      {
        "pdMin": 60,
        "pdMax": 60,
        "pe": 26
      }
    ],
    "14_8": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 5,
        "pe": 2
      },
      {
        "pdMin": 6,
        "pdMax": 8,
        "pe": 3
      },
      {
        "pdMin": 9,
        "pdMax": 11,
        "pe": 4
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 5
      },
      {
        "pdMin": 14,
        "pdMax": 16,
        "pe": 6
      },
      {
        "pdMin": 17,
        "pdMax": 19,
        "pe": 7
      },
      {
        "pdMin": 20,
        "pdMax": 22,
        "pe": 8
      },
      {
        "pdMin": 23,
        "pdMax": 25,
        "pe": 9
      },
      {
        "pdMin": 26,
        "pdMax": 28,
        "pe": 10
      },
      {
        "pdMin": 29,
        "pdMax": 31,
        "pe": 11
      },
      {
        "pdMin": 32,
        "pdMax": 34,
        "pe": 12
      },
      {
        "pdMin": 35,
        "pdMax": 36,
        "pe": 13
      },
      {
        "pdMin": 37,
        "pdMax": 39,
        "pe": 14
      },
      {
        "pdMin": 40,
        "pdMax": 42,
        "pe": 15
      },
      {
        "pdMin": 43,
        "pdMax": 45,
        "pe": 16
      },
      {
        "pdMin": 46,
        "pdMax": 49,
        "pe": 17
      },
      {
        "pdMin": 50,
        "pdMax": 51,
        "pe": 18
      },
      {
        "pdMin": 52,
        "pdMax": 53,
        "pe": 19
      },
      {
        "pdMin": 54,
        "pdMax": 55,
        "pe": 20
      },
      {
        "pdMin": 56,
        "pdMax": 56,
        "pe": 21
      },
      {
        "pdMin": 57,
        "pdMax": 57,
        "pe": 22
      },
      {
        "pdMin": 58,
        "pdMax": 58,
        "pe": 23
      },
      {
        "pdMin": 59,
        "pdMax": 59,
        "pe": 24
      },
      {
        "pdMin": 60,
        "pdMax": 60,
        "pe": 25
      }
    ],
    "15_0": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 5,
        "pe": 2
      },
      {
        "pdMin": 6,
        "pdMax": 8,
        "pe": 3
      },
      {
        "pdMin": 9,
        "pdMax": 11,
        "pe": 4
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 5
      },
      {
        "pdMin": 14,
        "pdMax": 16,
        "pe": 6
      },
      {
        "pdMin": 17,
        "pdMax": 19,
        "pe": 7
      },
      {
        "pdMin": 20,
        "pdMax": 22,
        "pe": 8
      },
      {
        "pdMin": 23,
        "pdMax": 25,
        "pe": 9
      },
      {
        "pdMin": 26,
        "pdMax": 28,
        "pe": 10
      },
      {
        "pdMin": 29,
        "pdMax": 31,
        "pe": 11
      },
      {
        "pdMin": 32,
        "pdMax": 34,
        "pe": 12
      },
      {
        "pdMin": 35,
        "pdMax": 36,
        "pe": 13
      },
      {
        "pdMin": 37,
        "pdMax": 39,
        "pe": 14
      },
      {
        "pdMin": 40,
        "pdMax": 42,
        "pe": 15
      },
      {
        "pdMin": 43,
        "pdMax": 45,
        "pe": 16
      },
      {
        "pdMin": 46,
        "pdMax": 49,
        "pe": 17
      },
      {
        "pdMin": 50,
        "pdMax": 51,
        "pe": 18
      },
      {
        "pdMin": 52,
        "pdMax": 53,
        "pe": 19
      },
      {
        "pdMin": 54,
        "pdMax": 55,
        "pe": 20
      },
      {
        "pdMin": 56,
        "pdMax": 56,
        "pe": 21
      },
      {
        "pdMin": 57,
        "pdMax": 57,
        "pe": 22
      },
      {
        "pdMin": 58,
        "pdMax": 58,
        "pe": 23
      },
      {
        "pdMin": 59,
        "pdMax": 59,
        "pe": 24
      },
      {
        "pdMin": 60,
        "pdMax": 60,
        "pe": 25
      }
    ],
    "15_4": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 5,
        "pe": 2
      },
      {
        "pdMin": 6,
        "pdMax": 8,
        "pe": 3
      },
      {
        "pdMin": 9,
        "pdMax": 11,
        "pe": 4
      },
      {
        "pdMin": 12,
        "pdMax": 14,
        "pe": 5
      },
      {
        "pdMin": 15,
        "pdMax": 17,
        "pe": 6
      },
      {
        "pdMin": 18,
        "pdMax": 20,
        "pe": 7
      },
      {
        "pdMin": 21,
        "pdMax": 23,
        "pe": 8
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 9
      },
      {
        "pdMin": 26,
        "pdMax": 28,
        "pe": 10
      },
      {
        "pdMin": 29,
        "pdMax": 31,
        "pe": 11
      },
      {
        "pdMin": 32,
        "pdMax": 34,
        "pe": 12
      },
      {
        "pdMin": 35,
        "pdMax": 37,
        "pe": 13
      },
      {
        "pdMin": 38,
        "pdMax": 40,
        "pe": 14
      },
      {
        "pdMin": 41,
        "pdMax": 43,
        "pe": 15
      },
      {
        "pdMin": 44,
        "pdMax": 46,
        "pe": 16
      },
      {
        "pdMin": 47,
        "pdMax": 50,
        "pe": 17
      },
      {
        "pdMin": 51,
        "pdMax": 52,
        "pe": 18
      },
      {
        "pdMin": 53,
        "pdMax": 54,
        "pe": 19
      },
      {
        "pdMin": 55,
        "pdMax": 56,
        "pe": 20
      },
      {
        "pdMin": 57,
        "pdMax": 57,
        "pe": 21
      },
      {
        "pdMin": 58,
        "pdMax": 58,
        "pe": 22
      },
      {
        "pdMin": 59,
        "pdMax": 59,
        "pe": 23
      },
      {
        "pdMin": 60,
        "pdMax": 60,
        "pe": 24
      }
    ],
    "15_8": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 5,
        "pe": 2
      },
      {
        "pdMin": 6,
        "pdMax": 8,
        "pe": 3
      },
      {
        "pdMin": 9,
        "pdMax": 11,
        "pe": 4
      },
      {
        "pdMin": 12,
        "pdMax": 14,
        "pe": 5
      },
      {
        "pdMin": 15,
        "pdMax": 17,
        "pe": 6
      },
      {
        "pdMin": 18,
        "pdMax": 20,
        "pe": 7
      },
      {
        "pdMin": 21,
        "pdMax": 23,
        "pe": 8
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 9
      },
      {
        "pdMin": 26,
        "pdMax": 28,
        "pe": 10
      },
      {
        "pdMin": 29,
        "pdMax": 31,
        "pe": 11
      },
      {
        "pdMin": 32,
        "pdMax": 34,
        "pe": 12
      },
      {
        "pdMin": 35,
        "pdMax": 37,
        "pe": 13
      },
      {
        "pdMin": 38,
        "pdMax": 40,
        "pe": 14
      },
      {
        "pdMin": 41,
        "pdMax": 43,
        "pe": 15
      },
      {
        "pdMin": 44,
        "pdMax": 46,
        "pe": 16
      },
      {
        "pdMin": 47,
        "pdMax": 50,
        "pe": 17
      },
      {
        "pdMin": 51,
        "pdMax": 52,
        "pe": 18
      },
      {
        "pdMin": 53,
        "pdMax": 54,
        "pe": 19
      },
      {
        "pdMin": 55,
        "pdMax": 56,
        "pe": 20
      },
      {
        "pdMin": 57,
        "pdMax": 58,
        "pe": 21
      },
      {
        "pdMin": 59,
        "pdMax": 59,
        "pe": 22
      },
      {
        "pdMin": 60,
        "pdMax": 60,
        "pe": 23
      }
    ],
    "16_0": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 5,
        "pe": 2
      },
      {
        "pdMin": 6,
        "pdMax": 8,
        "pe": 3
      },
      {
        "pdMin": 9,
        "pdMax": 11,
        "pe": 4
      },
      {
        "pdMin": 12,
        "pdMax": 14,
        "pe": 5
      },
      {
        "pdMin": 15,
        "pdMax": 17,
        "pe": 6
      },
      {
        "pdMin": 18,
        "pdMax": 20,
        "pe": 7
      },
      {
        "pdMin": 21,
        "pdMax": 23,
        "pe": 8
      },
      {
        "pdMin": 24,
        "pdMax": 26,
        "pe": 9
      },
      {
        "pdMin": 27,
        "pdMax": 29,
        "pe": 10
      },
      {
        "pdMin": 30,
        "pdMax": 32,
        "pe": 11
      },
      {
        "pdMin": 33,
        "pdMax": 35,
        "pe": 12
      },
      {
        "pdMin": 36,
        "pdMax": 38,
        "pe": 13
      },
      {
        "pdMin": 39,
        "pdMax": 41,
        "pe": 14
      },
      {
        "pdMin": 42,
        "pdMax": 44,
        "pe": 15
      },
      {
        "pdMin": 45,
        "pdMax": 47,
        "pe": 16
      },
      {
        "pdMin": 48,
        "pdMax": 51,
        "pe": 17
      },
      {
        "pdMin": 52,
        "pdMax": 53,
        "pe": 18
      },
      {
        "pdMin": 54,
        "pdMax": 55,
        "pe": 19
      },
      {
        "pdMin": 56,
        "pdMax": 57,
        "pe": 20
      },
      {
        "pdMin": 58,
        "pdMax": 58,
        "pe": 21
      },
      {
        "pdMin": 59,
        "pdMax": 59,
        "pe": 22
      },
      {
        "pdMin": 60,
        "pdMax": 60,
        "pe": 23
      }
    ],
    "16_4": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 5,
        "pe": 2
      },
      {
        "pdMin": 6,
        "pdMax": 8,
        "pe": 3
      },
      {
        "pdMin": 9,
        "pdMax": 11,
        "pe": 4
      },
      {
        "pdMin": 12,
        "pdMax": 14,
        "pe": 5
      },
      {
        "pdMin": 15,
        "pdMax": 17,
        "pe": 6
      },
      {
        "pdMin": 18,
        "pdMax": 20,
        "pe": 7
      },
      {
        "pdMin": 21,
        "pdMax": 23,
        "pe": 8
      },
      {
        "pdMin": 24,
        "pdMax": 27,
        "pe": 9
      },
      {
        "pdMin": 28,
        "pdMax": 30,
        "pe": 10
      },
      {
        "pdMin": 31,
        "pdMax": 33,
        "pe": 11
      },
      {
        "pdMin": 34,
        "pdMax": 36,
        "pe": 12
      },
      {
        "pdMin": 37,
        "pdMax": 39,
        "pe": 13
      },
      {
        "pdMin": 40,
        "pdMax": 42,
        "pe": 14
      },
      {
        "pdMin": 43,
        "pdMax": 45,
        "pe": 15
      },
      {
        "pdMin": 46,
        "pdMax": 48,
        "pe": 16
      },
      {
        "pdMin": 49,
        "pdMax": 52,
        "pe": 17
      },
      {
        "pdMin": 53,
        "pdMax": 54,
        "pe": 18
      },
      {
        "pdMin": 55,
        "pdMax": 56,
        "pe": 19
      },
      {
        "pdMin": 57,
        "pdMax": 58,
        "pe": 20
      },
      {
        "pdMin": 59,
        "pdMax": 59,
        "pe": 21
      },
      {
        "pdMin": 60,
        "pdMax": 60,
        "pe": 22
      }
    ],
    "16_8": [
      {
        "pdMin": 0,
        "pdMax": 2,
        "pe": 1
      },
      {
        "pdMin": 3,
        "pdMax": 5,
        "pe": 2
      },
      {
        "pdMin": 6,
        "pdMax": 8,
        "pe": 3
      },
      {
        "pdMin": 9,
        "pdMax": 11,
        "pe": 4
      },
      {
        "pdMin": 12,
        "pdMax": 15,
        "pe": 5
      },
      {
        "pdMin": 16,
        "pdMax": 18,
        "pe": 6
      },
      {
        "pdMin": 19,
        "pdMax": 21,
        "pe": 7
      },
      {
        "pdMin": 22,
        "pdMax": 24,
        "pe": 8
      },
      {
        "pdMin": 25,
        "pdMax": 27,
        "pe": 9
      },
      {
        "pdMin": 28,
        "pdMax": 30,
        "pe": 10
      },
      {
        "pdMin": 31,
        "pdMax": 33,
        "pe": 11
      },
      {
        "pdMin": 34,
        "pdMax": 36,
        "pe": 12
      },
      {
        "pdMin": 37,
        "pdMax": 40,
        "pe": 13
      },
      {
        "pdMin": 41,
        "pdMax": 43,
        "pe": 14
      },
      {
        "pdMin": 44,
        "pdMax": 46,
        "pe": 15
      },
      {
        "pdMin": 47,
        "pdMax": 49,
        "pe": 16
      },
      {
        "pdMin": 50,
        "pdMax": 53,
        "pe": 17
      },
      {
        "pdMin": 54,
        "pdMax": 55,
        "pe": 18
      },
      {
        "pdMin": 56,
        "pdMax": 57,
        "pe": 19
      },
      {
        "pdMin": 58,
        "pdMax": 58,
        "pe": 20
      },
      {
        "pdMin": 59,
        "pdMax": 59,
        "pe": 21
      },
      {
        "pdMin": 60,
        "pdMax": 60,
        "pe": 22
      }
    ]
  },
  "inf": {
    "6_0": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 2
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 3
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 4
      },
      {
        "pdMin": 4,
        "pdMax": 4,
        "pe": 5
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 6
      },
      {
        "pdMin": 6,
        "pdMax": 6,
        "pe": 7
      },
      {
        "pdMin": 7,
        "pdMax": 7,
        "pe": 8
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 9
      },
      {
        "pdMin": 9,
        "pdMax": 9,
        "pe": 10
      },
      {
        "pdMin": 10,
        "pdMax": 10,
        "pe": 11
      },
      {
        "pdMin": 11,
        "pdMax": 11,
        "pe": 12
      },
      {
        "pdMin": 12,
        "pdMax": 12,
        "pe": 13
      },
      {
        "pdMin": 13,
        "pdMax": 13,
        "pe": 14
      },
      {
        "pdMin": 14,
        "pdMax": 14,
        "pe": 15
      },
      {
        "pdMin": 15,
        "pdMax": 15,
        "pe": 16
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 17
      },
      {
        "pdMin": 18,
        "pdMax": 18,
        "pe": 18
      },
      {
        "pdMin": 19,
        "pdMax": 19,
        "pe": 19
      },
      {
        "pdMin": 20,
        "pdMax": 20,
        "pe": 20
      },
      {
        "pdMin": 21,
        "pdMax": 21,
        "pe": 21
      },
      {
        "pdMin": 22,
        "pdMax": 22,
        "pe": 22
      },
      {
        "pdMin": 23,
        "pdMax": 23,
        "pe": 23
      },
      {
        "pdMin": 24,
        "pdMax": 24,
        "pe": 24
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 25
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 26
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 27
      },
      {
        "pdMin": 28,
        "pdMax": 31,
        "pe": 28
      }
    ],
    "6_4": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 2
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 3
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 4
      },
      {
        "pdMin": 4,
        "pdMax": 4,
        "pe": 5
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 6
      },
      {
        "pdMin": 6,
        "pdMax": 6,
        "pe": 7
      },
      {
        "pdMin": 7,
        "pdMax": 7,
        "pe": 8
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 9
      },
      {
        "pdMin": 10,
        "pdMax": 10,
        "pe": 10
      },
      {
        "pdMin": 11,
        "pdMax": 11,
        "pe": 11
      },
      {
        "pdMin": 12,
        "pdMax": 12,
        "pe": 12
      },
      {
        "pdMin": 13,
        "pdMax": 13,
        "pe": 13
      },
      {
        "pdMin": 14,
        "pdMax": 14,
        "pe": 14
      },
      {
        "pdMin": 15,
        "pdMax": 15,
        "pe": 15
      },
      {
        "pdMin": 16,
        "pdMax": 16,
        "pe": 16
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 17
      },
      {
        "pdMin": 19,
        "pdMax": 19,
        "pe": 18
      },
      {
        "pdMin": 20,
        "pdMax": 20,
        "pe": 19
      },
      {
        "pdMin": 21,
        "pdMax": 21,
        "pe": 20
      },
      {
        "pdMin": 22,
        "pdMax": 22,
        "pe": 21
      },
      {
        "pdMin": 23,
        "pdMax": 23,
        "pe": 22
      },
      {
        "pdMin": 24,
        "pdMax": 24,
        "pe": 23
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 24
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 25
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 26
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 27
      },
      {
        "pdMin": 29,
        "pdMax": 31,
        "pe": 28
      }
    ],
    "6_8": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 2
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 3
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 4
      },
      {
        "pdMin": 4,
        "pdMax": 4,
        "pe": 5
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 6
      },
      {
        "pdMin": 6,
        "pdMax": 6,
        "pe": 7
      },
      {
        "pdMin": 7,
        "pdMax": 7,
        "pe": 8
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 9
      },
      {
        "pdMin": 10,
        "pdMax": 10,
        "pe": 10
      },
      {
        "pdMin": 11,
        "pdMax": 11,
        "pe": 11
      },
      {
        "pdMin": 12,
        "pdMax": 12,
        "pe": 12
      },
      {
        "pdMin": 13,
        "pdMax": 13,
        "pe": 13
      },
      {
        "pdMin": 14,
        "pdMax": 14,
        "pe": 14
      },
      {
        "pdMin": 15,
        "pdMax": 15,
        "pe": 15
      },
      {
        "pdMin": 16,
        "pdMax": 16,
        "pe": 16
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 17
      },
      {
        "pdMin": 19,
        "pdMax": 19,
        "pe": 18
      },
      {
        "pdMin": 20,
        "pdMax": 20,
        "pe": 19
      },
      {
        "pdMin": 21,
        "pdMax": 21,
        "pe": 20
      },
      {
        "pdMin": 22,
        "pdMax": 22,
        "pe": 21
      },
      {
        "pdMin": 23,
        "pdMax": 23,
        "pe": 22
      },
      {
        "pdMin": 24,
        "pdMax": 24,
        "pe": 23
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 24
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 25
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 26
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 27
      },
      {
        "pdMin": 29,
        "pdMax": 31,
        "pe": 28
      }
    ],
    "7_0": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 2
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 3
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 4
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 5
      },
      {
        "pdMin": 6,
        "pdMax": 6,
        "pe": 6
      },
      {
        "pdMin": 7,
        "pdMax": 7,
        "pe": 7
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 8
      },
      {
        "pdMin": 9,
        "pdMax": 9,
        "pe": 9
      },
      {
        "pdMin": 10,
        "pdMax": 10,
        "pe": 10
      },
      {
        "pdMin": 11,
        "pdMax": 11,
        "pe": 11
      },
      {
        "pdMin": 12,
        "pdMax": 12,
        "pe": 12
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 13
      },
      {
        "pdMin": 15,
        "pdMax": 15,
        "pe": 14
      },
      {
        "pdMin": 16,
        "pdMax": 16,
        "pe": 15
      },
      {
        "pdMin": 17,
        "pdMax": 17,
        "pe": 16
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 17
      },
      {
        "pdMin": 20,
        "pdMax": 20,
        "pe": 18
      },
      {
        "pdMin": 21,
        "pdMax": 21,
        "pe": 19
      },
      {
        "pdMin": 22,
        "pdMax": 22,
        "pe": 20
      },
      {
        "pdMin": 23,
        "pdMax": 23,
        "pe": 21
      },
      {
        "pdMin": 24,
        "pdMax": 24,
        "pe": 22
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 23
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 24
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 25
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 26
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 27
      },
      {
        "pdMin": 30,
        "pdMax": 31,
        "pe": 28
      }
    ],
    "7_4": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 2
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 3
      },
      {
        "pdMin": 4,
        "pdMax": 4,
        "pe": 4
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 5
      },
      {
        "pdMin": 6,
        "pdMax": 6,
        "pe": 6
      },
      {
        "pdMin": 7,
        "pdMax": 7,
        "pe": 7
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 8
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 9
      },
      {
        "pdMin": 11,
        "pdMax": 11,
        "pe": 10
      },
      {
        "pdMin": 12,
        "pdMax": 12,
        "pe": 11
      },
      {
        "pdMin": 13,
        "pdMax": 13,
        "pe": 12
      },
      {
        "pdMin": 14,
        "pdMax": 14,
        "pe": 13
      },
      {
        "pdMin": 15,
        "pdMax": 15,
        "pe": 14
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 15
      },
      {
        "pdMin": 18,
        "pdMax": 18,
        "pe": 16
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 17
      },
      {
        "pdMin": 21,
        "pdMax": 21,
        "pe": 18
      },
      {
        "pdMin": 22,
        "pdMax": 22,
        "pe": 19
      },
      {
        "pdMin": 23,
        "pdMax": 23,
        "pe": 20
      },
      {
        "pdMin": 24,
        "pdMax": 24,
        "pe": 21
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 22
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 23
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 24
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 25
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 26
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 27
      },
      {
        "pdMin": 31,
        "pdMax": 31,
        "pe": 28
      }
    ],
    "7_8": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 2
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 3
      },
      {
        "pdMin": 4,
        "pdMax": 4,
        "pe": 4
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 5
      },
      {
        "pdMin": 6,
        "pdMax": 6,
        "pe": 6
      },
      {
        "pdMin": 7,
        "pdMax": 7,
        "pe": 7
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 8
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 9
      },
      {
        "pdMin": 11,
        "pdMax": 11,
        "pe": 10
      },
      {
        "pdMin": 12,
        "pdMax": 12,
        "pe": 11
      },
      {
        "pdMin": 13,
        "pdMax": 13,
        "pe": 12
      },
      {
        "pdMin": 14,
        "pdMax": 14,
        "pe": 13
      },
      {
        "pdMin": 15,
        "pdMax": 15,
        "pe": 14
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 15
      },
      {
        "pdMin": 18,
        "pdMax": 18,
        "pe": 16
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 17
      },
      {
        "pdMin": 21,
        "pdMax": 21,
        "pe": 18
      },
      {
        "pdMin": 22,
        "pdMax": 22,
        "pe": 19
      },
      {
        "pdMin": 23,
        "pdMax": 23,
        "pe": 20
      },
      {
        "pdMin": 24,
        "pdMax": 24,
        "pe": 21
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 22
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 23
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 24
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 25
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 26
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 27
      },
      {
        "pdMin": 31,
        "pdMax": 31,
        "pe": 28
      }
    ],
    "8_0": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 2
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 3
      },
      {
        "pdMin": 4,
        "pdMax": 4,
        "pe": 4
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 5
      },
      {
        "pdMin": 6,
        "pdMax": 6,
        "pe": 6
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 7
      },
      {
        "pdMin": 9,
        "pdMax": 9,
        "pe": 8
      },
      {
        "pdMin": 10,
        "pdMax": 10,
        "pe": 9
      },
      {
        "pdMin": 11,
        "pdMax": 11,
        "pe": 10
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 11
      },
      {
        "pdMin": 14,
        "pdMax": 14,
        "pe": 12
      },
      {
        "pdMin": 15,
        "pdMax": 15,
        "pe": 13
      },
      {
        "pdMin": 16,
        "pdMax": 16,
        "pe": 14
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 15
      },
      {
        "pdMin": 19,
        "pdMax": 19,
        "pe": 16
      },
      {
        "pdMin": 20,
        "pdMax": 21,
        "pe": 17
      },
      {
        "pdMin": 22,
        "pdMax": 22,
        "pe": 18
      },
      {
        "pdMin": 23,
        "pdMax": 23,
        "pe": 19
      },
      {
        "pdMin": 24,
        "pdMax": 24,
        "pe": 20
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 21
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 22
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 23
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 24
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 25
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 26
      },
      {
        "pdMin": 31,
        "pdMax": 31,
        "pe": 27
      }
    ],
    "8_4": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 2
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 3
      },
      {
        "pdMin": 4,
        "pdMax": 4,
        "pe": 4
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 5
      },
      {
        "pdMin": 6,
        "pdMax": 6,
        "pe": 6
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 7
      },
      {
        "pdMin": 9,
        "pdMax": 9,
        "pe": 8
      },
      {
        "pdMin": 10,
        "pdMax": 10,
        "pe": 9
      },
      {
        "pdMin": 11,
        "pdMax": 11,
        "pe": 10
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 11
      },
      {
        "pdMin": 14,
        "pdMax": 14,
        "pe": 12
      },
      {
        "pdMin": 15,
        "pdMax": 15,
        "pe": 13
      },
      {
        "pdMin": 16,
        "pdMax": 16,
        "pe": 14
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 15
      },
      {
        "pdMin": 19,
        "pdMax": 19,
        "pe": 16
      },
      {
        "pdMin": 20,
        "pdMax": 21,
        "pe": 17
      },
      {
        "pdMin": 22,
        "pdMax": 22,
        "pe": 18
      },
      {
        "pdMin": 23,
        "pdMax": 23,
        "pe": 19
      },
      {
        "pdMin": 24,
        "pdMax": 24,
        "pe": 20
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 21
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 22
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 23
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 24
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 25
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 26
      },
      {
        "pdMin": 31,
        "pdMax": 31,
        "pe": 27
      }
    ],
    "8_8": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 1,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 3
      },
      {
        "pdMin": 4,
        "pdMax": 4,
        "pe": 4
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 5
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 6
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 7
      },
      {
        "pdMin": 9,
        "pdMax": 9,
        "pe": 8
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 9
      },
      {
        "pdMin": 12,
        "pdMax": 12,
        "pe": 10
      },
      {
        "pdMin": 13,
        "pdMax": 13,
        "pe": 11
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 12
      },
      {
        "pdMin": 16,
        "pdMax": 16,
        "pe": 13
      },
      {
        "pdMin": 17,
        "pdMax": 17,
        "pe": 14
      },
      {
        "pdMin": 18,
        "pdMax": 18,
        "pe": 15
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 16
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 17
      },
      {
        "pdMin": 23,
        "pdMax": 23,
        "pe": 18
      },
      {
        "pdMin": 24,
        "pdMax": 24,
        "pe": 19
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 20
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 21
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 22
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 23
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 24
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 25
      },
      {
        "pdMin": 31,
        "pdMax": 31,
        "pe": 26
      }
    ],
    "9_0": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 1,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 3
      },
      {
        "pdMin": 4,
        "pdMax": 4,
        "pe": 4
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 5
      },
      {
        "pdMin": 7,
        "pdMax": 7,
        "pe": 6
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 7
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 8
      },
      {
        "pdMin": 11,
        "pdMax": 11,
        "pe": 9
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 10
      },
      {
        "pdMin": 14,
        "pdMax": 14,
        "pe": 11
      },
      {
        "pdMin": 15,
        "pdMax": 15,
        "pe": 12
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 13
      },
      {
        "pdMin": 18,
        "pdMax": 18,
        "pe": 14
      },
      {
        "pdMin": 19,
        "pdMax": 19,
        "pe": 15
      },
      {
        "pdMin": 20,
        "pdMax": 21,
        "pe": 16
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 17
      },
      {
        "pdMin": 24,
        "pdMax": 24,
        "pe": 18
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 19
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 20
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 21
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 22
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 23
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 24
      },
      {
        "pdMin": 31,
        "pdMax": 31,
        "pe": 25
      }
    ],
    "9_4": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 1,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 3
      },
      {
        "pdMin": 4,
        "pdMax": 4,
        "pe": 4
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 5
      },
      {
        "pdMin": 7,
        "pdMax": 7,
        "pe": 6
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 7
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 8
      },
      {
        "pdMin": 11,
        "pdMax": 11,
        "pe": 9
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 10
      },
      {
        "pdMin": 14,
        "pdMax": 14,
        "pe": 11
      },
      {
        "pdMin": 15,
        "pdMax": 15,
        "pe": 12
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 13
      },
      {
        "pdMin": 18,
        "pdMax": 18,
        "pe": 14
      },
      {
        "pdMin": 19,
        "pdMax": 19,
        "pe": 15
      },
      {
        "pdMin": 20,
        "pdMax": 21,
        "pe": 16
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 17
      },
      {
        "pdMin": 24,
        "pdMax": 24,
        "pe": 18
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 19
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 20
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 21
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 22
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 23
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 24
      },
      {
        "pdMin": 31,
        "pdMax": 31,
        "pe": 25
      }
    ],
    "9_8": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 1,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 3
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 4
      },
      {
        "pdMin": 6,
        "pdMax": 6,
        "pe": 5
      },
      {
        "pdMin": 7,
        "pdMax": 7,
        "pe": 6
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 7
      },
      {
        "pdMin": 10,
        "pdMax": 10,
        "pe": 8
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 9
      },
      {
        "pdMin": 13,
        "pdMax": 13,
        "pe": 10
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 11
      },
      {
        "pdMin": 16,
        "pdMax": 16,
        "pe": 12
      },
      {
        "pdMin": 17,
        "pdMax": 17,
        "pe": 13
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 14
      },
      {
        "pdMin": 20,
        "pdMax": 20,
        "pe": 15
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 16
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 17
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 18
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 19
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 20
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 21
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 22
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 23
      },
      {
        "pdMin": 31,
        "pdMax": 31,
        "pe": 24
      }
    ],
    "10_0": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 1,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 3
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 4
      },
      {
        "pdMin": 6,
        "pdMax": 6,
        "pe": 5
      },
      {
        "pdMin": 7,
        "pdMax": 7,
        "pe": 6
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 7
      },
      {
        "pdMin": 10,
        "pdMax": 10,
        "pe": 8
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 9
      },
      {
        "pdMin": 13,
        "pdMax": 13,
        "pe": 10
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 11
      },
      {
        "pdMin": 16,
        "pdMax": 16,
        "pe": 12
      },
      {
        "pdMin": 17,
        "pdMax": 17,
        "pe": 13
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 14
      },
      {
        "pdMin": 20,
        "pdMax": 20,
        "pe": 15
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 16
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 17
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 18
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 19
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 20
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 21
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 22
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 23
      },
      {
        "pdMin": 31,
        "pdMax": 31,
        "pe": 24
      }
    ],
    "10_4": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 1,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 3
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 4
      },
      {
        "pdMin": 6,
        "pdMax": 6,
        "pe": 5
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 6
      },
      {
        "pdMin": 9,
        "pdMax": 9,
        "pe": 7
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 8
      },
      {
        "pdMin": 12,
        "pdMax": 12,
        "pe": 9
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 10
      },
      {
        "pdMin": 15,
        "pdMax": 15,
        "pe": 11
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 12
      },
      {
        "pdMin": 18,
        "pdMax": 18,
        "pe": 13
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 14
      },
      {
        "pdMin": 21,
        "pdMax": 21,
        "pe": 15
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 16
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 17
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 18
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 19
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 20
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 21
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 22
      },
      {
        "pdMin": 31,
        "pdMax": 31,
        "pe": 23
      }
    ],
    "10_8": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 1,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 3
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 4
      },
      {
        "pdMin": 6,
        "pdMax": 6,
        "pe": 5
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 6
      },
      {
        "pdMin": 9,
        "pdMax": 9,
        "pe": 7
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 8
      },
      {
        "pdMin": 12,
        "pdMax": 12,
        "pe": 9
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 10
      },
      {
        "pdMin": 15,
        "pdMax": 15,
        "pe": 11
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 12
      },
      {
        "pdMin": 18,
        "pdMax": 18,
        "pe": 13
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 14
      },
      {
        "pdMin": 21,
        "pdMax": 21,
        "pe": 15
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 16
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 17
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 18
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 19
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 20
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 21
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 22
      },
      {
        "pdMin": 31,
        "pdMax": 31,
        "pe": 23
      }
    ],
    "11_0": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 4
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 5
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 6
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 7
      },
      {
        "pdMin": 11,
        "pdMax": 11,
        "pe": 8
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 9
      },
      {
        "pdMin": 14,
        "pdMax": 14,
        "pe": 10
      },
      {
        "pdMin": 15,
        "pdMax": 16,
        "pe": 11
      },
      {
        "pdMin": 17,
        "pdMax": 17,
        "pe": 12
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 13
      },
      {
        "pdMin": 20,
        "pdMax": 20,
        "pe": 14
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 15
      },
      {
        "pdMin": 23,
        "pdMax": 23,
        "pe": 16
      },
      {
        "pdMin": 24,
        "pdMax": 26,
        "pe": 17
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 18
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 19
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 20
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 21
      },
      {
        "pdMin": 31,
        "pdMax": 31,
        "pe": 22
      }
    ],
    "11_4": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 4
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 5
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 6
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 7
      },
      {
        "pdMin": 11,
        "pdMax": 11,
        "pe": 8
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 9
      },
      {
        "pdMin": 14,
        "pdMax": 14,
        "pe": 10
      },
      {
        "pdMin": 15,
        "pdMax": 16,
        "pe": 11
      },
      {
        "pdMin": 17,
        "pdMax": 17,
        "pe": 12
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 13
      },
      {
        "pdMin": 20,
        "pdMax": 20,
        "pe": 14
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 15
      },
      {
        "pdMin": 23,
        "pdMax": 23,
        "pe": 16
      },
      {
        "pdMin": 24,
        "pdMax": 26,
        "pe": 17
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 18
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 19
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 20
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 21
      },
      {
        "pdMin": 31,
        "pdMax": 31,
        "pe": 22
      }
    ],
    "11_8": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 4
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 5
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 6
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 7
      },
      {
        "pdMin": 11,
        "pdMax": 11,
        "pe": 8
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 9
      },
      {
        "pdMin": 14,
        "pdMax": 14,
        "pe": 10
      },
      {
        "pdMin": 15,
        "pdMax": 16,
        "pe": 11
      },
      {
        "pdMin": 17,
        "pdMax": 17,
        "pe": 12
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 13
      },
      {
        "pdMin": 20,
        "pdMax": 20,
        "pe": 14
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 15
      },
      {
        "pdMin": 23,
        "pdMax": 23,
        "pe": 16
      },
      {
        "pdMin": 24,
        "pdMax": 26,
        "pe": 17
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 18
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 19
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 20
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 21
      },
      {
        "pdMin": 31,
        "pdMax": 31,
        "pe": 22
      }
    ],
    "12_0": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 4
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 5
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 6
      },
      {
        "pdMin": 10,
        "pdMax": 10,
        "pe": 7
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 8
      },
      {
        "pdMin": 13,
        "pdMax": 13,
        "pe": 9
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 10
      },
      {
        "pdMin": 16,
        "pdMax": 16,
        "pe": 11
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 12
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 13
      },
      {
        "pdMin": 21,
        "pdMax": 21,
        "pe": 14
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 15
      },
      {
        "pdMin": 24,
        "pdMax": 24,
        "pe": 16
      },
      {
        "pdMin": 25,
        "pdMax": 27,
        "pe": 17
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 18
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 19
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 20
      },
      {
        "pdMin": 31,
        "pdMax": 31,
        "pe": 21
      }
    ],
    "12_4": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 4
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 5
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 6
      },
      {
        "pdMin": 10,
        "pdMax": 10,
        "pe": 7
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 8
      },
      {
        "pdMin": 13,
        "pdMax": 13,
        "pe": 9
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 10
      },
      {
        "pdMin": 16,
        "pdMax": 16,
        "pe": 11
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 12
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 13
      },
      {
        "pdMin": 21,
        "pdMax": 21,
        "pe": 14
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 15
      },
      {
        "pdMin": 24,
        "pdMax": 24,
        "pe": 16
      },
      {
        "pdMin": 25,
        "pdMax": 27,
        "pe": 17
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 18
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 19
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 20
      },
      {
        "pdMin": 31,
        "pdMax": 31,
        "pe": 21
      }
    ],
    "12_8": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 4
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 5
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 6
      },
      {
        "pdMin": 10,
        "pdMax": 10,
        "pe": 7
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 8
      },
      {
        "pdMin": 13,
        "pdMax": 13,
        "pe": 9
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 10
      },
      {
        "pdMin": 16,
        "pdMax": 16,
        "pe": 11
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 12
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 13
      },
      {
        "pdMin": 21,
        "pdMax": 21,
        "pe": 14
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 15
      },
      {
        "pdMin": 24,
        "pdMax": 24,
        "pe": 16
      },
      {
        "pdMin": 25,
        "pdMax": 27,
        "pe": 17
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 18
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 19
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 20
      },
      {
        "pdMin": 31,
        "pdMax": 31,
        "pe": 21
      }
    ],
    "13_0": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 4
      },
      {
        "pdMin": 7,
        "pdMax": 7,
        "pe": 5
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 6
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 7
      },
      {
        "pdMin": 12,
        "pdMax": 12,
        "pe": 8
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 9
      },
      {
        "pdMin": 15,
        "pdMax": 15,
        "pe": 10
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 11
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 12
      },
      {
        "pdMin": 20,
        "pdMax": 20,
        "pe": 13
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 14
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 15
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 16
      },
      {
        "pdMin": 26,
        "pdMax": 28,
        "pe": 17
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 18
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 19
      },
      {
        "pdMin": 31,
        "pdMax": 31,
        "pe": 20
      }
    ],
    "13_4": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 4
      },
      {
        "pdMin": 7,
        "pdMax": 7,
        "pe": 5
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 6
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 7
      },
      {
        "pdMin": 12,
        "pdMax": 12,
        "pe": 8
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 9
      },
      {
        "pdMin": 15,
        "pdMax": 15,
        "pe": 10
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 11
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 12
      },
      {
        "pdMin": 20,
        "pdMax": 20,
        "pe": 13
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 14
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 15
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 16
      },
      {
        "pdMin": 26,
        "pdMax": 28,
        "pe": 17
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 18
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 19
      },
      {
        "pdMin": 31,
        "pdMax": 31,
        "pe": 20
      }
    ],
    "13_8": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 4
      },
      {
        "pdMin": 7,
        "pdMax": 7,
        "pe": 5
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 6
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 7
      },
      {
        "pdMin": 12,
        "pdMax": 12,
        "pe": 8
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 9
      },
      {
        "pdMin": 15,
        "pdMax": 15,
        "pe": 10
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 11
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 12
      },
      {
        "pdMin": 20,
        "pdMax": 20,
        "pe": 13
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 14
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 15
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 16
      },
      {
        "pdMin": 26,
        "pdMax": 28,
        "pe": 17
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 18
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 19
      },
      {
        "pdMin": 31,
        "pdMax": 31,
        "pe": 20
      }
    ],
    "14_0": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 4
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 5
      },
      {
        "pdMin": 9,
        "pdMax": 9,
        "pe": 6
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 7
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 8
      },
      {
        "pdMin": 14,
        "pdMax": 14,
        "pe": 9
      },
      {
        "pdMin": 15,
        "pdMax": 16,
        "pe": 10
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 11
      },
      {
        "pdMin": 19,
        "pdMax": 19,
        "pe": 12
      },
      {
        "pdMin": 20,
        "pdMax": 21,
        "pe": 13
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 14
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 15
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 16
      },
      {
        "pdMin": 27,
        "pdMax": 29,
        "pe": 17
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 18
      },
      {
        "pdMin": 31,
        "pdMax": 31,
        "pe": 19
      }
    ],
    "14_4": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 4
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 5
      },
      {
        "pdMin": 9,
        "pdMax": 9,
        "pe": 6
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 7
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 8
      },
      {
        "pdMin": 14,
        "pdMax": 14,
        "pe": 9
      },
      {
        "pdMin": 15,
        "pdMax": 16,
        "pe": 10
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 11
      },
      {
        "pdMin": 19,
        "pdMax": 19,
        "pe": 12
      },
      {
        "pdMin": 20,
        "pdMax": 21,
        "pe": 13
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 14
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 15
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 16
      },
      {
        "pdMin": 27,
        "pdMax": 29,
        "pe": 17
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 18
      },
      {
        "pdMin": 31,
        "pdMax": 31,
        "pe": 19
      }
    ],
    "14_8": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 4
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 5
      },
      {
        "pdMin": 9,
        "pdMax": 9,
        "pe": 6
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 7
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 8
      },
      {
        "pdMin": 14,
        "pdMax": 14,
        "pe": 9
      },
      {
        "pdMin": 15,
        "pdMax": 16,
        "pe": 10
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 11
      },
      {
        "pdMin": 19,
        "pdMax": 19,
        "pe": 12
      },
      {
        "pdMin": 20,
        "pdMax": 21,
        "pe": 13
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 14
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 15
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 16
      },
      {
        "pdMin": 27,
        "pdMax": 29,
        "pe": 17
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 18
      },
      {
        "pdMin": 31,
        "pdMax": 31,
        "pe": 19
      }
    ],
    "15_0": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 4
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 5
      },
      {
        "pdMin": 9,
        "pdMax": 9,
        "pe": 6
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 7
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 8
      },
      {
        "pdMin": 14,
        "pdMax": 14,
        "pe": 9
      },
      {
        "pdMin": 15,
        "pdMax": 16,
        "pe": 10
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 11
      },
      {
        "pdMin": 19,
        "pdMax": 19,
        "pe": 12
      },
      {
        "pdMin": 20,
        "pdMax": 21,
        "pe": 13
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 14
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 15
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 16
      },
      {
        "pdMin": 27,
        "pdMax": 29,
        "pe": 17
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 18
      },
      {
        "pdMin": 31,
        "pdMax": 31,
        "pe": 19
      }
    ]
  },
  "lyn": {
    "6_0": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 2
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 3
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 4
      },
      {
        "pdMin": 4,
        "pdMax": 4,
        "pe": 5
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 6
      },
      {
        "pdMin": 6,
        "pdMax": 6,
        "pe": 7
      },
      {
        "pdMin": 7,
        "pdMax": 7,
        "pe": 8
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 9
      },
      {
        "pdMin": 10,
        "pdMax": 10,
        "pe": 10
      },
      {
        "pdMin": 11,
        "pdMax": 11,
        "pe": 11
      },
      {
        "pdMin": 12,
        "pdMax": 12,
        "pe": 12
      },
      {
        "pdMin": 13,
        "pdMax": 13,
        "pe": 13
      },
      {
        "pdMin": 14,
        "pdMax": 14,
        "pe": 14
      },
      {
        "pdMin": 15,
        "pdMax": 15,
        "pe": 15
      },
      {
        "pdMin": 16,
        "pdMax": 16,
        "pe": 16
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 17
      },
      {
        "pdMin": 19,
        "pdMax": 19,
        "pe": 18
      },
      {
        "pdMin": 20,
        "pdMax": 20,
        "pe": 19
      },
      {
        "pdMin": 21,
        "pdMax": 21,
        "pe": 20
      },
      {
        "pdMin": 22,
        "pdMax": 22,
        "pe": 21
      },
      {
        "pdMin": 23,
        "pdMax": 23,
        "pe": 22
      },
      {
        "pdMin": 24,
        "pdMax": 24,
        "pe": 23
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 24
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 25
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 26
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 27
      },
      {
        "pdMin": 29,
        "pdMax": 30,
        "pe": 28
      }
    ],
    "6_4": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 2
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 3
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 4
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 5
      },
      {
        "pdMin": 6,
        "pdMax": 6,
        "pe": 6
      },
      {
        "pdMin": 7,
        "pdMax": 7,
        "pe": 7
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 8
      },
      {
        "pdMin": 9,
        "pdMax": 9,
        "pe": 9
      },
      {
        "pdMin": 10,
        "pdMax": 10,
        "pe": 10
      },
      {
        "pdMin": 11,
        "pdMax": 11,
        "pe": 11
      },
      {
        "pdMin": 12,
        "pdMax": 12,
        "pe": 12
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 13
      },
      {
        "pdMin": 15,
        "pdMax": 15,
        "pe": 14
      },
      {
        "pdMin": 16,
        "pdMax": 16,
        "pe": 15
      },
      {
        "pdMin": 17,
        "pdMax": 17,
        "pe": 16
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 17
      },
      {
        "pdMin": 20,
        "pdMax": 20,
        "pe": 18
      },
      {
        "pdMin": 21,
        "pdMax": 21,
        "pe": 19
      },
      {
        "pdMin": 22,
        "pdMax": 22,
        "pe": 20
      },
      {
        "pdMin": 23,
        "pdMax": 23,
        "pe": 21
      },
      {
        "pdMin": 24,
        "pdMax": 24,
        "pe": 22
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 23
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 24
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 25
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 26
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 27
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 28
      }
    ],
    "6_8": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 2
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 3
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 4
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 5
      },
      {
        "pdMin": 6,
        "pdMax": 6,
        "pe": 6
      },
      {
        "pdMin": 7,
        "pdMax": 7,
        "pe": 7
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 8
      },
      {
        "pdMin": 9,
        "pdMax": 9,
        "pe": 9
      },
      {
        "pdMin": 10,
        "pdMax": 10,
        "pe": 10
      },
      {
        "pdMin": 11,
        "pdMax": 11,
        "pe": 11
      },
      {
        "pdMin": 12,
        "pdMax": 12,
        "pe": 12
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 13
      },
      {
        "pdMin": 15,
        "pdMax": 15,
        "pe": 14
      },
      {
        "pdMin": 16,
        "pdMax": 16,
        "pe": 15
      },
      {
        "pdMin": 17,
        "pdMax": 17,
        "pe": 16
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 17
      },
      {
        "pdMin": 20,
        "pdMax": 20,
        "pe": 18
      },
      {
        "pdMin": 21,
        "pdMax": 21,
        "pe": 19
      },
      {
        "pdMin": 22,
        "pdMax": 22,
        "pe": 20
      },
      {
        "pdMin": 23,
        "pdMax": 23,
        "pe": 21
      },
      {
        "pdMin": 24,
        "pdMax": 24,
        "pe": 22
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 23
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 24
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 25
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 26
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 27
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 28
      }
    ],
    "7_0": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 2
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 3
      },
      {
        "pdMin": 4,
        "pdMax": 4,
        "pe": 4
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 5
      },
      {
        "pdMin": 6,
        "pdMax": 6,
        "pe": 6
      },
      {
        "pdMin": 7,
        "pdMax": 7,
        "pe": 7
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 8
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 9
      },
      {
        "pdMin": 11,
        "pdMax": 11,
        "pe": 10
      },
      {
        "pdMin": 12,
        "pdMax": 12,
        "pe": 11
      },
      {
        "pdMin": 13,
        "pdMax": 13,
        "pe": 12
      },
      {
        "pdMin": 14,
        "pdMax": 14,
        "pe": 13
      },
      {
        "pdMin": 15,
        "pdMax": 15,
        "pe": 14
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 15
      },
      {
        "pdMin": 18,
        "pdMax": 18,
        "pe": 16
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 17
      },
      {
        "pdMin": 21,
        "pdMax": 21,
        "pe": 18
      },
      {
        "pdMin": 22,
        "pdMax": 22,
        "pe": 19
      },
      {
        "pdMin": 23,
        "pdMax": 23,
        "pe": 20
      },
      {
        "pdMin": 24,
        "pdMax": 24,
        "pe": 21
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 22
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 23
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 24
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 25
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 26
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 27
      }
    ],
    "7_4": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 2
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 3
      },
      {
        "pdMin": 4,
        "pdMax": 4,
        "pe": 4
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 5
      },
      {
        "pdMin": 6,
        "pdMax": 6,
        "pe": 6
      },
      {
        "pdMin": 7,
        "pdMax": 7,
        "pe": 7
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 8
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 9
      },
      {
        "pdMin": 11,
        "pdMax": 11,
        "pe": 10
      },
      {
        "pdMin": 12,
        "pdMax": 12,
        "pe": 11
      },
      {
        "pdMin": 13,
        "pdMax": 13,
        "pe": 12
      },
      {
        "pdMin": 14,
        "pdMax": 14,
        "pe": 13
      },
      {
        "pdMin": 15,
        "pdMax": 15,
        "pe": 14
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 15
      },
      {
        "pdMin": 18,
        "pdMax": 18,
        "pe": 16
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 17
      },
      {
        "pdMin": 21,
        "pdMax": 21,
        "pe": 18
      },
      {
        "pdMin": 22,
        "pdMax": 22,
        "pe": 19
      },
      {
        "pdMin": 23,
        "pdMax": 23,
        "pe": 20
      },
      {
        "pdMin": 24,
        "pdMax": 24,
        "pe": 21
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 22
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 23
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 24
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 25
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 26
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 27
      }
    ],
    "7_8": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 2
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 3
      },
      {
        "pdMin": 4,
        "pdMax": 4,
        "pe": 4
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 5
      },
      {
        "pdMin": 6,
        "pdMax": 6,
        "pe": 6
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 7
      },
      {
        "pdMin": 9,
        "pdMax": 9,
        "pe": 8
      },
      {
        "pdMin": 10,
        "pdMax": 10,
        "pe": 9
      },
      {
        "pdMin": 11,
        "pdMax": 11,
        "pe": 10
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 11
      },
      {
        "pdMin": 14,
        "pdMax": 14,
        "pe": 12
      },
      {
        "pdMin": 15,
        "pdMax": 15,
        "pe": 13
      },
      {
        "pdMin": 16,
        "pdMax": 16,
        "pe": 14
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 15
      },
      {
        "pdMin": 19,
        "pdMax": 19,
        "pe": 16
      },
      {
        "pdMin": 20,
        "pdMax": 21,
        "pe": 17
      },
      {
        "pdMin": 22,
        "pdMax": 22,
        "pe": 18
      },
      {
        "pdMin": 23,
        "pdMax": 23,
        "pe": 19
      },
      {
        "pdMin": 24,
        "pdMax": 24,
        "pe": 20
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 21
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 22
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 23
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 25
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 26
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 27
      }
    ],
    "8_0": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 2
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 3
      },
      {
        "pdMin": 4,
        "pdMax": 4,
        "pe": 4
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 5
      },
      {
        "pdMin": 6,
        "pdMax": 6,
        "pe": 6
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 7
      },
      {
        "pdMin": 9,
        "pdMax": 9,
        "pe": 8
      },
      {
        "pdMin": 10,
        "pdMax": 10,
        "pe": 9
      },
      {
        "pdMin": 11,
        "pdMax": 11,
        "pe": 10
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 11
      },
      {
        "pdMin": 14,
        "pdMax": 14,
        "pe": 12
      },
      {
        "pdMin": 15,
        "pdMax": 15,
        "pe": 13
      },
      {
        "pdMin": 16,
        "pdMax": 16,
        "pe": 14
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 15
      },
      {
        "pdMin": 19,
        "pdMax": 19,
        "pe": 16
      },
      {
        "pdMin": 20,
        "pdMax": 21,
        "pe": 17
      },
      {
        "pdMin": 22,
        "pdMax": 22,
        "pe": 18
      },
      {
        "pdMin": 23,
        "pdMax": 23,
        "pe": 19
      },
      {
        "pdMin": 24,
        "pdMax": 24,
        "pe": 20
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 21
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 22
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 23
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 24
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 25
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 26
      }
    ],
    "8_4": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 2
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 3
      },
      {
        "pdMin": 4,
        "pdMax": 4,
        "pe": 4
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 5
      },
      {
        "pdMin": 6,
        "pdMax": 6,
        "pe": 6
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 7
      },
      {
        "pdMin": 9,
        "pdMax": 9,
        "pe": 8
      },
      {
        "pdMin": 10,
        "pdMax": 10,
        "pe": 9
      },
      {
        "pdMin": 11,
        "pdMax": 11,
        "pe": 10
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 11
      },
      {
        "pdMin": 14,
        "pdMax": 14,
        "pe": 12
      },
      {
        "pdMin": 15,
        "pdMax": 15,
        "pe": 13
      },
      {
        "pdMin": 16,
        "pdMax": 16,
        "pe": 14
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 15
      },
      {
        "pdMin": 19,
        "pdMax": 19,
        "pe": 16
      },
      {
        "pdMin": 20,
        "pdMax": 21,
        "pe": 17
      },
      {
        "pdMin": 22,
        "pdMax": 22,
        "pe": 18
      },
      {
        "pdMin": 23,
        "pdMax": 23,
        "pe": 19
      },
      {
        "pdMin": 24,
        "pdMax": 24,
        "pe": 20
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 21
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 22
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 23
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 24
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 25
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 26
      }
    ],
    "8_8": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 1,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 3
      },
      {
        "pdMin": 4,
        "pdMax": 4,
        "pe": 4
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 5
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 6
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 7
      },
      {
        "pdMin": 9,
        "pdMax": 9,
        "pe": 8
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 9
      },
      {
        "pdMin": 12,
        "pdMax": 12,
        "pe": 10
      },
      {
        "pdMin": 13,
        "pdMax": 13,
        "pe": 11
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 12
      },
      {
        "pdMin": 16,
        "pdMax": 16,
        "pe": 13
      },
      {
        "pdMin": 17,
        "pdMax": 17,
        "pe": 14
      },
      {
        "pdMin": 18,
        "pdMax": 18,
        "pe": 15
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 16
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 17
      },
      {
        "pdMin": 23,
        "pdMax": 23,
        "pe": 18
      },
      {
        "pdMin": 24,
        "pdMax": 24,
        "pe": 19
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 20
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 21
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 22
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 24
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 25
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 26
      }
    ],
    "9_0": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 1,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 3
      },
      {
        "pdMin": 4,
        "pdMax": 4,
        "pe": 4
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 5
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 6
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 7
      },
      {
        "pdMin": 9,
        "pdMax": 9,
        "pe": 8
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 9
      },
      {
        "pdMin": 12,
        "pdMax": 12,
        "pe": 10
      },
      {
        "pdMin": 13,
        "pdMax": 13,
        "pe": 11
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 12
      },
      {
        "pdMin": 16,
        "pdMax": 16,
        "pe": 13
      },
      {
        "pdMin": 17,
        "pdMax": 17,
        "pe": 14
      },
      {
        "pdMin": 18,
        "pdMax": 18,
        "pe": 15
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 16
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 17
      },
      {
        "pdMin": 23,
        "pdMax": 23,
        "pe": 18
      },
      {
        "pdMin": 24,
        "pdMax": 24,
        "pe": 19
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 20
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 21
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 22
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 24
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 25
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 26
      }
    ],
    "9_4": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 1,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 3
      },
      {
        "pdMin": 4,
        "pdMax": 4,
        "pe": 4
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 5
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 6
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 7
      },
      {
        "pdMin": 9,
        "pdMax": 9,
        "pe": 8
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 9
      },
      {
        "pdMin": 12,
        "pdMax": 12,
        "pe": 10
      },
      {
        "pdMin": 13,
        "pdMax": 13,
        "pe": 11
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 12
      },
      {
        "pdMin": 16,
        "pdMax": 16,
        "pe": 13
      },
      {
        "pdMin": 17,
        "pdMax": 17,
        "pe": 14
      },
      {
        "pdMin": 18,
        "pdMax": 18,
        "pe": 15
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 16
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 17
      },
      {
        "pdMin": 23,
        "pdMax": 23,
        "pe": 18
      },
      {
        "pdMin": 24,
        "pdMax": 24,
        "pe": 19
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 20
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 21
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 22
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 23
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 24
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 25
      }
    ],
    "9_8": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 1,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 3
      },
      {
        "pdMin": 4,
        "pdMax": 4,
        "pe": 4
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 5
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 6
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 7
      },
      {
        "pdMin": 9,
        "pdMax": 9,
        "pe": 8
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 9
      },
      {
        "pdMin": 12,
        "pdMax": 12,
        "pe": 10
      },
      {
        "pdMin": 13,
        "pdMax": 13,
        "pe": 11
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 12
      },
      {
        "pdMin": 16,
        "pdMax": 16,
        "pe": 13
      },
      {
        "pdMin": 17,
        "pdMax": 17,
        "pe": 14
      },
      {
        "pdMin": 18,
        "pdMax": 18,
        "pe": 15
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 16
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 17
      },
      {
        "pdMin": 23,
        "pdMax": 23,
        "pe": 18
      },
      {
        "pdMin": 24,
        "pdMax": 24,
        "pe": 19
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 20
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 21
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 22
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 23
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 24
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 25
      }
    ],
    "10_0": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 1,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 3
      },
      {
        "pdMin": 4,
        "pdMax": 4,
        "pe": 4
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 5
      },
      {
        "pdMin": 7,
        "pdMax": 7,
        "pe": 6
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 7
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 8
      },
      {
        "pdMin": 11,
        "pdMax": 11,
        "pe": 9
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 10
      },
      {
        "pdMin": 14,
        "pdMax": 14,
        "pe": 11
      },
      {
        "pdMin": 15,
        "pdMax": 15,
        "pe": 12
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 13
      },
      {
        "pdMin": 18,
        "pdMax": 18,
        "pe": 14
      },
      {
        "pdMin": 19,
        "pdMax": 19,
        "pe": 15
      },
      {
        "pdMin": 20,
        "pdMax": 21,
        "pe": 16
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 17
      },
      {
        "pdMin": 24,
        "pdMax": 24,
        "pe": 18
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 19
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 20
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 21
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 22
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 23
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 25
      }
    ],
    "10_4": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 1,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 3
      },
      {
        "pdMin": 4,
        "pdMax": 4,
        "pe": 4
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 5
      },
      {
        "pdMin": 7,
        "pdMax": 7,
        "pe": 6
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 7
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 8
      },
      {
        "pdMin": 11,
        "pdMax": 11,
        "pe": 9
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 10
      },
      {
        "pdMin": 14,
        "pdMax": 14,
        "pe": 11
      },
      {
        "pdMin": 15,
        "pdMax": 15,
        "pe": 12
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 13
      },
      {
        "pdMin": 18,
        "pdMax": 18,
        "pe": 14
      },
      {
        "pdMin": 19,
        "pdMax": 19,
        "pe": 15
      },
      {
        "pdMin": 20,
        "pdMax": 21,
        "pe": 16
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 17
      },
      {
        "pdMin": 24,
        "pdMax": 24,
        "pe": 18
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 19
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 20
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 21
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 22
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 23
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 25
      }
    ],
    "10_8": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 1,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 3
      },
      {
        "pdMin": 4,
        "pdMax": 4,
        "pe": 4
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 5
      },
      {
        "pdMin": 7,
        "pdMax": 7,
        "pe": 6
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 7
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 8
      },
      {
        "pdMin": 11,
        "pdMax": 11,
        "pe": 9
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 10
      },
      {
        "pdMin": 14,
        "pdMax": 14,
        "pe": 11
      },
      {
        "pdMin": 15,
        "pdMax": 15,
        "pe": 12
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 13
      },
      {
        "pdMin": 18,
        "pdMax": 18,
        "pe": 14
      },
      {
        "pdMin": 19,
        "pdMax": 19,
        "pe": 15
      },
      {
        "pdMin": 20,
        "pdMax": 21,
        "pe": 16
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 17
      },
      {
        "pdMin": 24,
        "pdMax": 24,
        "pe": 18
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 19
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 20
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 21
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 22
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 23
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 25
      }
    ],
    "11_0": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 1,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 3
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 4
      },
      {
        "pdMin": 6,
        "pdMax": 6,
        "pe": 5
      },
      {
        "pdMin": 7,
        "pdMax": 7,
        "pe": 6
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 7
      },
      {
        "pdMin": 10,
        "pdMax": 10,
        "pe": 8
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 9
      },
      {
        "pdMin": 13,
        "pdMax": 13,
        "pe": 10
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 11
      },
      {
        "pdMin": 16,
        "pdMax": 16,
        "pe": 12
      },
      {
        "pdMin": 17,
        "pdMax": 17,
        "pe": 13
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 14
      },
      {
        "pdMin": 20,
        "pdMax": 20,
        "pe": 15
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 16
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 17
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 18
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 19
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 20
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 21
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 22
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 24
      }
    ],
    "11_4": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 1,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 3
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 4
      },
      {
        "pdMin": 6,
        "pdMax": 6,
        "pe": 5
      },
      {
        "pdMin": 7,
        "pdMax": 7,
        "pe": 6
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 7
      },
      {
        "pdMin": 10,
        "pdMax": 10,
        "pe": 8
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 9
      },
      {
        "pdMin": 13,
        "pdMax": 13,
        "pe": 10
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 11
      },
      {
        "pdMin": 16,
        "pdMax": 16,
        "pe": 12
      },
      {
        "pdMin": 17,
        "pdMax": 17,
        "pe": 13
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 14
      },
      {
        "pdMin": 20,
        "pdMax": 20,
        "pe": 15
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 16
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 17
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 18
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 19
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 20
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 21
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 22
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 24
      }
    ],
    "11_8": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 1,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 3
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 4
      },
      {
        "pdMin": 6,
        "pdMax": 6,
        "pe": 5
      },
      {
        "pdMin": 7,
        "pdMax": 7,
        "pe": 6
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 7
      },
      {
        "pdMin": 10,
        "pdMax": 10,
        "pe": 8
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 9
      },
      {
        "pdMin": 13,
        "pdMax": 13,
        "pe": 10
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 11
      },
      {
        "pdMin": 16,
        "pdMax": 16,
        "pe": 12
      },
      {
        "pdMin": 17,
        "pdMax": 17,
        "pe": 13
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 14
      },
      {
        "pdMin": 20,
        "pdMax": 20,
        "pe": 15
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 16
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 17
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 18
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 19
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 20
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 21
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 22
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 24
      }
    ],
    "12_0": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 1,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 3
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 4
      },
      {
        "pdMin": 6,
        "pdMax": 6,
        "pe": 5
      },
      {
        "pdMin": 7,
        "pdMax": 7,
        "pe": 6
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 7
      },
      {
        "pdMin": 10,
        "pdMax": 10,
        "pe": 8
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 9
      },
      {
        "pdMin": 13,
        "pdMax": 13,
        "pe": 10
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 11
      },
      {
        "pdMin": 16,
        "pdMax": 16,
        "pe": 12
      },
      {
        "pdMin": 17,
        "pdMax": 17,
        "pe": 13
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 14
      },
      {
        "pdMin": 20,
        "pdMax": 20,
        "pe": 15
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 16
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 17
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 18
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 19
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 20
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 21
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 22
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 23
      }
    ],
    "12_4": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 1,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 3
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 4
      },
      {
        "pdMin": 6,
        "pdMax": 6,
        "pe": 5
      },
      {
        "pdMin": 7,
        "pdMax": 7,
        "pe": 6
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 7
      },
      {
        "pdMin": 10,
        "pdMax": 10,
        "pe": 8
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 9
      },
      {
        "pdMin": 13,
        "pdMax": 13,
        "pe": 10
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 11
      },
      {
        "pdMin": 16,
        "pdMax": 16,
        "pe": 12
      },
      {
        "pdMin": 17,
        "pdMax": 17,
        "pe": 13
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 14
      },
      {
        "pdMin": 20,
        "pdMax": 20,
        "pe": 15
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 16
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 17
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 18
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 19
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 20
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 21
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 22
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 23
      }
    ],
    "13_4": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 1,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 3
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 4
      },
      {
        "pdMin": 6,
        "pdMax": 6,
        "pe": 5
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 6
      },
      {
        "pdMin": 9,
        "pdMax": 9,
        "pe": 7
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 8
      },
      {
        "pdMin": 12,
        "pdMax": 12,
        "pe": 9
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 10
      },
      {
        "pdMin": 15,
        "pdMax": 15,
        "pe": 11
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 12
      },
      {
        "pdMin": 18,
        "pdMax": 18,
        "pe": 13
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 14
      },
      {
        "pdMin": 21,
        "pdMax": 21,
        "pe": 15
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 16
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 17
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 18
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 19
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 20
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 21
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 22
      }
    ],
    "13_8": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 1,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 3
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 4
      },
      {
        "pdMin": 6,
        "pdMax": 6,
        "pe": 5
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 6
      },
      {
        "pdMin": 9,
        "pdMax": 9,
        "pe": 7
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 8
      },
      {
        "pdMin": 12,
        "pdMax": 12,
        "pe": 9
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 10
      },
      {
        "pdMin": 15,
        "pdMax": 15,
        "pe": 11
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 12
      },
      {
        "pdMin": 18,
        "pdMax": 18,
        "pe": 13
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 14
      },
      {
        "pdMin": 21,
        "pdMax": 21,
        "pe": 15
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 16
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 17
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 18
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 19
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 20
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 21
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 22
      }
    ],
    "14_0": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 1,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 3
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 4
      },
      {
        "pdMin": 6,
        "pdMax": 6,
        "pe": 5
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 6
      },
      {
        "pdMin": 9,
        "pdMax": 9,
        "pe": 7
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 8
      },
      {
        "pdMin": 12,
        "pdMax": 12,
        "pe": 9
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 10
      },
      {
        "pdMin": 15,
        "pdMax": 15,
        "pe": 11
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 12
      },
      {
        "pdMin": 18,
        "pdMax": 18,
        "pe": 13
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 14
      },
      {
        "pdMin": 21,
        "pdMax": 21,
        "pe": 15
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 16
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 17
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 18
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 19
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 20
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 21
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 22
      }
    ],
    "14_4": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 1,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 3
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 4
      },
      {
        "pdMin": 6,
        "pdMax": 6,
        "pe": 5
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 6
      },
      {
        "pdMin": 9,
        "pdMax": 9,
        "pe": 7
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 8
      },
      {
        "pdMin": 12,
        "pdMax": 12,
        "pe": 9
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 10
      },
      {
        "pdMin": 15,
        "pdMax": 15,
        "pe": 11
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 12
      },
      {
        "pdMin": 18,
        "pdMax": 18,
        "pe": 13
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 14
      },
      {
        "pdMin": 21,
        "pdMax": 21,
        "pe": 15
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 16
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 17
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 18
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 19
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 20
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 21
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 22
      }
    ],
    "15_4": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 4
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 5
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 6
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 7
      },
      {
        "pdMin": 11,
        "pdMax": 11,
        "pe": 8
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 9
      },
      {
        "pdMin": 14,
        "pdMax": 14,
        "pe": 10
      },
      {
        "pdMin": 15,
        "pdMax": 16,
        "pe": 11
      },
      {
        "pdMin": 17,
        "pdMax": 17,
        "pe": 12
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 13
      },
      {
        "pdMin": 20,
        "pdMax": 20,
        "pe": 14
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 15
      },
      {
        "pdMin": 23,
        "pdMax": 23,
        "pe": 16
      },
      {
        "pdMin": 24,
        "pdMax": 26,
        "pe": 17
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 18
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 19
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 20
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 21
      }
    ],
    "15_8": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 4
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 5
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 6
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 7
      },
      {
        "pdMin": 11,
        "pdMax": 11,
        "pe": 8
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 9
      },
      {
        "pdMin": 14,
        "pdMax": 14,
        "pe": 10
      },
      {
        "pdMin": 15,
        "pdMax": 16,
        "pe": 11
      },
      {
        "pdMin": 17,
        "pdMax": 17,
        "pe": 12
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 13
      },
      {
        "pdMin": 20,
        "pdMax": 20,
        "pe": 14
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 15
      },
      {
        "pdMin": 23,
        "pdMax": 23,
        "pe": 16
      },
      {
        "pdMin": 24,
        "pdMax": 26,
        "pe": 17
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 18
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 19
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 20
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 21
      }
    ],
    "16_0": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 4
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 5
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 6
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 7
      },
      {
        "pdMin": 11,
        "pdMax": 11,
        "pe": 8
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 9
      },
      {
        "pdMin": 14,
        "pdMax": 14,
        "pe": 10
      },
      {
        "pdMin": 15,
        "pdMax": 16,
        "pe": 11
      },
      {
        "pdMin": 17,
        "pdMax": 17,
        "pe": 12
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 13
      },
      {
        "pdMin": 20,
        "pdMax": 20,
        "pe": 14
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 15
      },
      {
        "pdMin": 23,
        "pdMax": 23,
        "pe": 16
      },
      {
        "pdMin": 24,
        "pdMax": 26,
        "pe": 17
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 18
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 19
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 20
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 21
      }
    ],
    "16_4": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 4
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 5
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 6
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 7
      },
      {
        "pdMin": 11,
        "pdMax": 11,
        "pe": 8
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 9
      },
      {
        "pdMin": 14,
        "pdMax": 14,
        "pe": 10
      },
      {
        "pdMin": 15,
        "pdMax": 16,
        "pe": 11
      },
      {
        "pdMin": 17,
        "pdMax": 17,
        "pe": 12
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 13
      },
      {
        "pdMin": 20,
        "pdMax": 20,
        "pe": 14
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 15
      },
      {
        "pdMin": 23,
        "pdMax": 23,
        "pe": 16
      },
      {
        "pdMin": 24,
        "pdMax": 26,
        "pe": 17
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 18
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 19
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 20
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 21
      }
    ],
    "16_8": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 4
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 5
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 6
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 7
      },
      {
        "pdMin": 11,
        "pdMax": 11,
        "pe": 8
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 9
      },
      {
        "pdMin": 14,
        "pdMax": 14,
        "pe": 10
      },
      {
        "pdMin": 15,
        "pdMax": 16,
        "pe": 11
      },
      {
        "pdMin": 17,
        "pdMax": 17,
        "pe": 12
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 13
      },
      {
        "pdMin": 20,
        "pdMax": 20,
        "pe": 14
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 15
      },
      {
        "pdMin": 23,
        "pdMax": 23,
        "pe": 16
      },
      {
        "pdMin": 24,
        "pdMax": 26,
        "pe": 17
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 18
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 19
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 20
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 21
      }
    ]
  },
  "can": {
    "6_0": [
      {
        "pdMin": 0,
        "pdMax": 4,
        "pe": 1
      },
      {
        "pdMin": 5,
        "pdMax": 8,
        "pe": 2
      },
      {
        "pdMin": 9,
        "pdMax": 13,
        "pe": 3
      },
      {
        "pdMin": 14,
        "pdMax": 18,
        "pe": 4
      },
      {
        "pdMin": 19,
        "pdMax": 22,
        "pe": 5
      },
      {
        "pdMin": 23,
        "pdMax": 27,
        "pe": 6
      },
      {
        "pdMin": 28,
        "pdMax": 32,
        "pe": 7
      },
      {
        "pdMin": 33,
        "pdMax": 36,
        "pe": 8
      },
      {
        "pdMin": 37,
        "pdMax": 41,
        "pe": 9
      },
      {
        "pdMin": 42,
        "pdMax": 45,
        "pe": 10
      },
      {
        "pdMin": 46,
        "pdMax": 50,
        "pe": 11
      },
      {
        "pdMin": 51,
        "pdMax": 55,
        "pe": 12
      },
      {
        "pdMin": 56,
        "pdMax": 59,
        "pe": 13
      },
      {
        "pdMin": 60,
        "pdMax": 64,
        "pe": 14
      },
      {
        "pdMin": 65,
        "pdMax": 69,
        "pe": 15
      },
      {
        "pdMin": 70,
        "pdMax": 73,
        "pe": 16
      },
      {
        "pdMin": 74,
        "pdMax": 79,
        "pe": 17
      },
      {
        "pdMin": 80,
        "pdMax": 83,
        "pe": 18
      },
      {
        "pdMin": 84,
        "pdMax": 88,
        "pe": 19
      },
      {
        "pdMin": 89,
        "pdMax": 93,
        "pe": 20
      },
      {
        "pdMin": 94,
        "pdMax": 98,
        "pe": 21
      },
      {
        "pdMin": 99,
        "pdMax": 102,
        "pe": 22
      },
      {
        "pdMin": 103,
        "pdMax": 107,
        "pe": 23
      },
      {
        "pdMin": 108,
        "pdMax": 111,
        "pe": 24
      },
      {
        "pdMin": 112,
        "pdMax": 115,
        "pe": 25
      },
      {
        "pdMin": 116,
        "pdMax": 118,
        "pe": 26
      },
      {
        "pdMin": 119,
        "pdMax": 121,
        "pe": 27
      },
      {
        "pdMin": 122,
        "pdMax": 128,
        "pe": 28
      }
    ],
    "6_4": [
      {
        "pdMin": 0,
        "pdMax": 4,
        "pe": 1
      },
      {
        "pdMin": 5,
        "pdMax": 8,
        "pe": 2
      },
      {
        "pdMin": 9,
        "pdMax": 13,
        "pe": 3
      },
      {
        "pdMin": 14,
        "pdMax": 18,
        "pe": 4
      },
      {
        "pdMin": 19,
        "pdMax": 23,
        "pe": 5
      },
      {
        "pdMin": 24,
        "pdMax": 27,
        "pe": 6
      },
      {
        "pdMin": 28,
        "pdMax": 32,
        "pe": 7
      },
      {
        "pdMin": 33,
        "pdMax": 37,
        "pe": 8
      },
      {
        "pdMin": 38,
        "pdMax": 41,
        "pe": 9
      },
      {
        "pdMin": 42,
        "pdMax": 46,
        "pe": 10
      },
      {
        "pdMin": 47,
        "pdMax": 51,
        "pe": 11
      },
      {
        "pdMin": 52,
        "pdMax": 55,
        "pe": 12
      },
      {
        "pdMin": 56,
        "pdMax": 60,
        "pe": 13
      },
      {
        "pdMin": 61,
        "pdMax": 65,
        "pe": 14
      },
      {
        "pdMin": 66,
        "pdMax": 70,
        "pe": 15
      },
      {
        "pdMin": 71,
        "pdMax": 74,
        "pe": 16
      },
      {
        "pdMin": 75,
        "pdMax": 80,
        "pe": 17
      },
      {
        "pdMin": 81,
        "pdMax": 84,
        "pe": 18
      },
      {
        "pdMin": 85,
        "pdMax": 89,
        "pe": 19
      },
      {
        "pdMin": 90,
        "pdMax": 94,
        "pe": 20
      },
      {
        "pdMin": 95,
        "pdMax": 99,
        "pe": 21
      },
      {
        "pdMin": 100,
        "pdMax": 104,
        "pe": 22
      },
      {
        "pdMin": 105,
        "pdMax": 108,
        "pe": 23
      },
      {
        "pdMin": 109,
        "pdMax": 112,
        "pe": 24
      },
      {
        "pdMin": 113,
        "pdMax": 116,
        "pe": 25
      },
      {
        "pdMin": 117,
        "pdMax": 119,
        "pe": 26
      },
      {
        "pdMin": 120,
        "pdMax": 122,
        "pe": 27
      },
      {
        "pdMin": 123,
        "pdMax": 123,
        "pe": 28
      }
    ],
    "6_8": [
      {
        "pdMin": 0,
        "pdMax": 4,
        "pe": 1
      },
      {
        "pdMin": 5,
        "pdMax": 9,
        "pe": 2
      },
      {
        "pdMin": 10,
        "pdMax": 13,
        "pe": 3
      },
      {
        "pdMin": 14,
        "pdMax": 18,
        "pe": 4
      },
      {
        "pdMin": 19,
        "pdMax": 23,
        "pe": 5
      },
      {
        "pdMin": 24,
        "pdMax": 28,
        "pe": 6
      },
      {
        "pdMin": 29,
        "pdMax": 33,
        "pe": 7
      },
      {
        "pdMin": 34,
        "pdMax": 38,
        "pe": 8
      },
      {
        "pdMin": 39,
        "pdMax": 42,
        "pe": 9
      },
      {
        "pdMin": 43,
        "pdMax": 47,
        "pe": 10
      },
      {
        "pdMin": 48,
        "pdMax": 52,
        "pe": 11
      },
      {
        "pdMin": 53,
        "pdMax": 57,
        "pe": 12
      },
      {
        "pdMin": 58,
        "pdMax": 62,
        "pe": 13
      },
      {
        "pdMin": 63,
        "pdMax": 67,
        "pe": 14
      },
      {
        "pdMin": 68,
        "pdMax": 71,
        "pe": 15
      },
      {
        "pdMin": 72,
        "pdMax": 76,
        "pe": 16
      },
      {
        "pdMin": 77,
        "pdMax": 82,
        "pe": 17
      },
      {
        "pdMin": 83,
        "pdMax": 86,
        "pe": 18
      },
      {
        "pdMin": 87,
        "pdMax": 91,
        "pe": 19
      },
      {
        "pdMin": 92,
        "pdMax": 96,
        "pe": 20
      },
      {
        "pdMin": 97,
        "pdMax": 101,
        "pe": 21
      },
      {
        "pdMin": 102,
        "pdMax": 105,
        "pe": 22
      },
      {
        "pdMin": 106,
        "pdMax": 110,
        "pe": 23
      },
      {
        "pdMin": 111,
        "pdMax": 114,
        "pe": 24
      },
      {
        "pdMin": 115,
        "pdMax": 117,
        "pe": 25
      },
      {
        "pdMin": 118,
        "pdMax": 120,
        "pe": 26
      },
      {
        "pdMin": 121,
        "pdMax": 123,
        "pe": 27
      },
      {
        "pdMin": 124,
        "pdMax": 124,
        "pe": 28
      }
    ],
    "7_0": [
      {
        "pdMin": 0,
        "pdMax": 4,
        "pe": 1
      },
      {
        "pdMin": 5,
        "pdMax": 9,
        "pe": 2
      },
      {
        "pdMin": 10,
        "pdMax": 14,
        "pe": 3
      },
      {
        "pdMin": 15,
        "pdMax": 19,
        "pe": 4
      },
      {
        "pdMin": 20,
        "pdMax": 24,
        "pe": 5
      },
      {
        "pdMin": 25,
        "pdMax": 29,
        "pe": 6
      },
      {
        "pdMin": 30,
        "pdMax": 34,
        "pe": 7
      },
      {
        "pdMin": 35,
        "pdMax": 39,
        "pe": 8
      },
      {
        "pdMin": 40,
        "pdMax": 43,
        "pe": 9
      },
      {
        "pdMin": 44,
        "pdMax": 48,
        "pe": 10
      },
      {
        "pdMin": 49,
        "pdMax": 53,
        "pe": 11
      },
      {
        "pdMin": 54,
        "pdMax": 58,
        "pe": 12
      },
      {
        "pdMin": 59,
        "pdMax": 63,
        "pe": 13
      },
      {
        "pdMin": 64,
        "pdMax": 68,
        "pe": 14
      },
      {
        "pdMin": 69,
        "pdMax": 73,
        "pe": 15
      },
      {
        "pdMin": 74,
        "pdMax": 78,
        "pe": 16
      },
      {
        "pdMin": 79,
        "pdMax": 84,
        "pe": 17
      },
      {
        "pdMin": 85,
        "pdMax": 88,
        "pe": 18
      },
      {
        "pdMin": 89,
        "pdMax": 93,
        "pe": 19
      },
      {
        "pdMin": 94,
        "pdMax": 98,
        "pe": 20
      },
      {
        "pdMin": 99,
        "pdMax": 103,
        "pe": 21
      },
      {
        "pdMin": 104,
        "pdMax": 107,
        "pe": 22
      },
      {
        "pdMin": 108,
        "pdMax": 111,
        "pe": 23
      },
      {
        "pdMin": 112,
        "pdMax": 115,
        "pe": 24
      },
      {
        "pdMin": 116,
        "pdMax": 118,
        "pe": 25
      },
      {
        "pdMin": 119,
        "pdMax": 121,
        "pe": 26
      },
      {
        "pdMin": 122,
        "pdMax": 124,
        "pe": 27
      },
      {
        "pdMin": 125,
        "pdMax": 128,
        "pe": 28
      }
    ],
    "7_4": [
      {
        "pdMin": 0,
        "pdMax": 4,
        "pe": 1
      },
      {
        "pdMin": 5,
        "pdMax": 9,
        "pe": 2
      },
      {
        "pdMin": 10,
        "pdMax": 14,
        "pe": 3
      },
      {
        "pdMin": 15,
        "pdMax": 19,
        "pe": 4
      },
      {
        "pdMin": 20,
        "pdMax": 24,
        "pe": 5
      },
      {
        "pdMin": 25,
        "pdMax": 29,
        "pe": 6
      },
      {
        "pdMin": 30,
        "pdMax": 34,
        "pe": 7
      },
      {
        "pdMin": 35,
        "pdMax": 39,
        "pe": 8
      },
      {
        "pdMin": 40,
        "pdMax": 45,
        "pe": 9
      },
      {
        "pdMin": 46,
        "pdMax": 50,
        "pe": 10
      },
      {
        "pdMin": 51,
        "pdMax": 55,
        "pe": 11
      },
      {
        "pdMin": 56,
        "pdMax": 60,
        "pe": 12
      },
      {
        "pdMin": 61,
        "pdMax": 65,
        "pe": 13
      },
      {
        "pdMin": 66,
        "pdMax": 70,
        "pe": 14
      },
      {
        "pdMin": 71,
        "pdMax": 75,
        "pe": 15
      },
      {
        "pdMin": 76,
        "pdMax": 80,
        "pe": 16
      },
      {
        "pdMin": 81,
        "pdMax": 86,
        "pe": 17
      },
      {
        "pdMin": 87,
        "pdMax": 87,
        "pe": 18
      },
      {
        "pdMin": 90,
        "pdMax": 95,
        "pe": 19
      },
      {
        "pdMin": 96,
        "pdMax": 100,
        "pe": 20
      },
      {
        "pdMin": 101,
        "pdMax": 105,
        "pe": 21
      },
      {
        "pdMin": 106,
        "pdMax": 109,
        "pe": 22
      },
      {
        "pdMin": 110,
        "pdMax": 113,
        "pe": 23
      },
      {
        "pdMin": 114,
        "pdMax": 116,
        "pe": 24
      },
      {
        "pdMin": 117,
        "pdMax": 119,
        "pe": 25
      },
      {
        "pdMin": 120,
        "pdMax": 122,
        "pe": 26
      },
      {
        "pdMin": 123,
        "pdMax": 125,
        "pe": 27
      },
      {
        "pdMin": 126,
        "pdMax": 128,
        "pe": 28
      }
    ],
    "7_8": [
      {
        "pdMin": 0,
        "pdMax": 4,
        "pe": 1
      },
      {
        "pdMin": 5,
        "pdMax": 9,
        "pe": 2
      },
      {
        "pdMin": 10,
        "pdMax": 15,
        "pe": 3
      },
      {
        "pdMin": 16,
        "pdMax": 20,
        "pe": 4
      },
      {
        "pdMin": 21,
        "pdMax": 25,
        "pe": 5
      },
      {
        "pdMin": 26,
        "pdMax": 30,
        "pe": 6
      },
      {
        "pdMin": 31,
        "pdMax": 35,
        "pe": 7
      },
      {
        "pdMin": 36,
        "pdMax": 40,
        "pe": 8
      },
      {
        "pdMin": 41,
        "pdMax": 46,
        "pe": 9
      },
      {
        "pdMin": 47,
        "pdMax": 51,
        "pe": 10
      },
      {
        "pdMin": 52,
        "pdMax": 56,
        "pe": 11
      },
      {
        "pdMin": 57,
        "pdMax": 61,
        "pe": 12
      },
      {
        "pdMin": 62,
        "pdMax": 66,
        "pe": 13
      },
      {
        "pdMin": 67,
        "pdMax": 71,
        "pe": 14
      },
      {
        "pdMin": 72,
        "pdMax": 77,
        "pe": 15
      },
      {
        "pdMin": 78,
        "pdMax": 82,
        "pe": 16
      },
      {
        "pdMin": 83,
        "pdMax": 88,
        "pe": 17
      },
      {
        "pdMin": 89,
        "pdMax": 9,
        "pe": 18
      },
      {
        "pdMin": 93,
        "pdMax": 97,
        "pe": 19
      },
      {
        "pdMin": 98,
        "pdMax": 102,
        "pe": 20
      },
      {
        "pdMin": 103,
        "pdMax": 107,
        "pe": 21
      },
      {
        "pdMin": 108,
        "pdMax": 111,
        "pe": 22
      },
      {
        "pdMin": 112,
        "pdMax": 114,
        "pe": 23
      },
      {
        "pdMin": 115,
        "pdMax": 117,
        "pe": 24
      },
      {
        "pdMin": 118,
        "pdMax": 120,
        "pe": 25
      },
      {
        "pdMin": 121,
        "pdMax": 123,
        "pe": 26
      },
      {
        "pdMin": 124,
        "pdMax": 126,
        "pe": 27
      },
      {
        "pdMin": 127,
        "pdMax": 128,
        "pe": 28
      }
    ],
    "8_0": [
      {
        "pdMin": 0,
        "pdMax": 4,
        "pe": 1
      },
      {
        "pdMin": 5,
        "pdMax": 10,
        "pe": 2
      },
      {
        "pdMin": 11,
        "pdMax": 15,
        "pe": 3
      },
      {
        "pdMin": 16,
        "pdMax": 20,
        "pe": 4
      },
      {
        "pdMin": 21,
        "pdMax": 25,
        "pe": 5
      },
      {
        "pdMin": 26,
        "pdMax": 31,
        "pe": 6
      },
      {
        "pdMin": 32,
        "pdMax": 36,
        "pe": 7
      },
      {
        "pdMin": 37,
        "pdMax": 41,
        "pe": 8
      },
      {
        "pdMin": 42,
        "pdMax": 47,
        "pe": 9
      },
      {
        "pdMin": 48,
        "pdMax": 52,
        "pe": 10
      },
      {
        "pdMin": 53,
        "pdMax": 57,
        "pe": 11
      },
      {
        "pdMin": 58,
        "pdMax": 63,
        "pe": 12
      },
      {
        "pdMin": 64,
        "pdMax": 68,
        "pe": 13
      },
      {
        "pdMin": 69,
        "pdMax": 73,
        "pe": 14
      },
      {
        "pdMin": 74,
        "pdMax": 78,
        "pe": 15
      },
      {
        "pdMin": 79,
        "pdMax": 84,
        "pe": 16
      },
      {
        "pdMin": 85,
        "pdMax": 90,
        "pe": 17
      },
      {
        "pdMin": 91,
        "pdMax": 94,
        "pe": 18
      },
      {
        "pdMin": 95,
        "pdMax": 99,
        "pe": 19
      },
      {
        "pdMin": 100,
        "pdMax": 104,
        "pe": 20
      },
      {
        "pdMin": 105,
        "pdMax": 109,
        "pe": 21
      },
      {
        "pdMin": 110,
        "pdMax": 113,
        "pe": 22
      },
      {
        "pdMin": 114,
        "pdMax": 116,
        "pe": 23
      },
      {
        "pdMin": 117,
        "pdMax": 118,
        "pe": 24
      },
      {
        "pdMin": 119,
        "pdMax": 121,
        "pe": 25
      },
      {
        "pdMin": 122,
        "pdMax": 124,
        "pe": 26
      },
      {
        "pdMin": 125,
        "pdMax": 126,
        "pe": 27
      },
      {
        "pdMin": 127,
        "pdMax": 128,
        "pe": 28
      }
    ],
    "8_4": [
      {
        "pdMin": 0,
        "pdMax": 4,
        "pe": 1
      },
      {
        "pdMin": 5,
        "pdMax": 10,
        "pe": 2
      },
      {
        "pdMin": 11,
        "pdMax": 15,
        "pe": 3
      },
      {
        "pdMin": 16,
        "pdMax": 21,
        "pe": 4
      },
      {
        "pdMin": 22,
        "pdMax": 26,
        "pe": 5
      },
      {
        "pdMin": 27,
        "pdMax": 31,
        "pe": 6
      },
      {
        "pdMin": 32,
        "pdMax": 37,
        "pe": 7
      },
      {
        "pdMin": 38,
        "pdMax": 42,
        "pe": 8
      },
      {
        "pdMin": 43,
        "pdMax": 48,
        "pe": 9
      },
      {
        "pdMin": 49,
        "pdMax": 53,
        "pe": 10
      },
      {
        "pdMin": 54,
        "pdMax": 59,
        "pe": 11
      },
      {
        "pdMin": 60,
        "pdMax": 64,
        "pe": 12
      },
      {
        "pdMin": 65,
        "pdMax": 69,
        "pe": 13
      },
      {
        "pdMin": 70,
        "pdMax": 75,
        "pe": 14
      },
      {
        "pdMin": 76,
        "pdMax": 80,
        "pe": 15
      },
      {
        "pdMin": 81,
        "pdMax": 86,
        "pe": 16
      },
      {
        "pdMin": 87,
        "pdMax": 92,
        "pe": 17
      },
      {
        "pdMin": 93,
        "pdMax": 93,
        "pe": 18
      },
      {
        "pdMin": 97,
        "pdMax": 101,
        "pe": 19
      },
      {
        "pdMin": 102,
        "pdMax": 106,
        "pe": 20
      },
      {
        "pdMin": 107,
        "pdMax": 110,
        "pe": 21
      },
      {
        "pdMin": 111,
        "pdMax": 114,
        "pe": 22
      },
      {
        "pdMin": 115,
        "pdMax": 117,
        "pe": 23
      },
      {
        "pdMin": 118,
        "pdMax": 119,
        "pe": 24
      },
      {
        "pdMin": 120,
        "pdMax": 122,
        "pe": 25
      },
      {
        "pdMin": 123,
        "pdMax": 125,
        "pe": 26
      },
      {
        "pdMin": 126,
        "pdMax": 127,
        "pe": 27
      },
      {
        "pdMin": 128,
        "pdMax": 128,
        "pe": 28
      }
    ],
    "8_8": [
      {
        "pdMin": 0,
        "pdMax": 5,
        "pe": 1
      },
      {
        "pdMin": 6,
        "pdMax": 10,
        "pe": 2
      },
      {
        "pdMin": 11,
        "pdMax": 16,
        "pe": 3
      },
      {
        "pdMin": 17,
        "pdMax": 21,
        "pe": 4
      },
      {
        "pdMin": 22,
        "pdMax": 27,
        "pe": 5
      },
      {
        "pdMin": 28,
        "pdMax": 32,
        "pe": 6
      },
      {
        "pdMin": 33,
        "pdMax": 38,
        "pe": 7
      },
      {
        "pdMin": 39,
        "pdMax": 43,
        "pe": 8
      },
      {
        "pdMin": 44,
        "pdMax": 49,
        "pe": 9
      },
      {
        "pdMin": 50,
        "pdMax": 54,
        "pe": 10
      },
      {
        "pdMin": 55,
        "pdMax": 60,
        "pe": 11
      },
      {
        "pdMin": 61,
        "pdMax": 65,
        "pe": 12
      },
      {
        "pdMin": 66,
        "pdMax": 71,
        "pe": 13
      },
      {
        "pdMin": 72,
        "pdMax": 76,
        "pe": 14
      },
      {
        "pdMin": 77,
        "pdMax": 82,
        "pe": 15
      },
      {
        "pdMin": 83,
        "pdMax": 87,
        "pe": 16
      },
      {
        "pdMin": 88,
        "pdMax": 94,
        "pe": 17
      },
      {
        "pdMin": 95,
        "pdMax": 95,
        "pe": 18
      },
      {
        "pdMin": 99,
        "pdMax": 103,
        "pe": 19
      },
      {
        "pdMin": 104,
        "pdMax": 108,
        "pe": 20
      },
      {
        "pdMin": 109,
        "pdMax": 112,
        "pe": 21
      },
      {
        "pdMin": 113,
        "pdMax": 115,
        "pe": 22
      },
      {
        "pdMin": 116,
        "pdMax": 118,
        "pe": 23
      },
      {
        "pdMin": 119,
        "pdMax": 120,
        "pe": 24
      },
      {
        "pdMin": 121,
        "pdMax": 123,
        "pe": 25
      },
      {
        "pdMin": 124,
        "pdMax": 125,
        "pe": 26
      },
      {
        "pdMin": 126,
        "pdMax": 127,
        "pe": 27
      },
      {
        "pdMin": 128,
        "pdMax": 128,
        "pe": 28
      }
    ],
    "9_0": [
      {
        "pdMin": 0,
        "pdMax": 5,
        "pe": 1
      },
      {
        "pdMin": 6,
        "pdMax": 10,
        "pe": 2
      },
      {
        "pdMin": 11,
        "pdMax": 16,
        "pe": 3
      },
      {
        "pdMin": 17,
        "pdMax": 22,
        "pe": 4
      },
      {
        "pdMin": 23,
        "pdMax": 27,
        "pe": 5
      },
      {
        "pdMin": 28,
        "pdMax": 33,
        "pe": 6
      },
      {
        "pdMin": 34,
        "pdMax": 39,
        "pe": 7
      },
      {
        "pdMin": 40,
        "pdMax": 44,
        "pe": 8
      },
      {
        "pdMin": 45,
        "pdMax": 50,
        "pe": 9
      },
      {
        "pdMin": 51,
        "pdMax": 55,
        "pe": 10
      },
      {
        "pdMin": 56,
        "pdMax": 61,
        "pe": 11
      },
      {
        "pdMin": 62,
        "pdMax": 67,
        "pe": 12
      },
      {
        "pdMin": 68,
        "pdMax": 72,
        "pe": 13
      },
      {
        "pdMin": 73,
        "pdMax": 78,
        "pe": 14
      },
      {
        "pdMin": 79,
        "pdMax": 84,
        "pe": 15
      },
      {
        "pdMin": 85,
        "pdMax": 89,
        "pe": 16
      },
      {
        "pdMin": 90,
        "pdMax": 96,
        "pe": 17
      },
      {
        "pdMin": 97,
        "pdMax": 100,
        "pe": 18
      },
      {
        "pdMin": 101,
        "pdMax": 104,
        "pe": 19
      },
      {
        "pdMin": 105,
        "pdMax": 109,
        "pe": 20
      },
      {
        "pdMin": 110,
        "pdMax": 113,
        "pe": 21
      },
      {
        "pdMin": 114,
        "pdMax": 116,
        "pe": 22
      },
      {
        "pdMin": 117,
        "pdMax": 119,
        "pe": 23
      },
      {
        "pdMin": 120,
        "pdMax": 121,
        "pe": 24
      },
      {
        "pdMin": 122,
        "pdMax": 123,
        "pe": 25
      },
      {
        "pdMin": 124,
        "pdMax": 126,
        "pe": 26
      },
      {
        "pdMin": 127,
        "pdMax": 128,
        "pe": 27
      }
    ],
    "9_4": [
      {
        "pdMin": 0,
        "pdMax": 5,
        "pe": 1
      },
      {
        "pdMin": 6,
        "pdMax": 11,
        "pe": 2
      },
      {
        "pdMin": 12,
        "pdMax": 16,
        "pe": 3
      },
      {
        "pdMin": 17,
        "pdMax": 22,
        "pe": 4
      },
      {
        "pdMin": 23,
        "pdMax": 28,
        "pe": 5
      },
      {
        "pdMin": 29,
        "pdMax": 34,
        "pe": 6
      },
      {
        "pdMin": 35,
        "pdMax": 39,
        "pe": 7
      },
      {
        "pdMin": 40,
        "pdMax": 45,
        "pe": 8
      },
      {
        "pdMin": 46,
        "pdMax": 51,
        "pe": 9
      },
      {
        "pdMin": 52,
        "pdMax": 57,
        "pe": 10
      },
      {
        "pdMin": 58,
        "pdMax": 62,
        "pe": 11
      },
      {
        "pdMin": 63,
        "pdMax": 68,
        "pe": 12
      },
      {
        "pdMin": 69,
        "pdMax": 74,
        "pe": 13
      },
      {
        "pdMin": 75,
        "pdMax": 80,
        "pe": 14
      },
      {
        "pdMin": 81,
        "pdMax": 85,
        "pe": 15
      },
      {
        "pdMin": 86,
        "pdMax": 91,
        "pe": 16
      },
      {
        "pdMin": 92,
        "pdMax": 98,
        "pe": 17
      },
      {
        "pdMin": 99,
        "pdMax": 102,
        "pe": 18
      },
      {
        "pdMin": 103,
        "pdMax": 10,
        "pe": 19
      },
      {
        "pdMin": 107,
        "pdMax": 110,
        "pe": 20
      },
      {
        "pdMin": 111,
        "pdMax": 114,
        "pe": 21
      },
      {
        "pdMin": 115,
        "pdMax": 117,
        "pe": 22
      },
      {
        "pdMin": 118,
        "pdMax": 120,
        "pe": 23
      },
      {
        "pdMin": 121,
        "pdMax": 122,
        "pe": 24
      },
      {
        "pdMin": 123,
        "pdMax": 124,
        "pe": 25
      },
      {
        "pdMin": 125,
        "pdMax": 126,
        "pe": 26
      },
      {
        "pdMin": 127,
        "pdMax": 128,
        "pe": 27
      }
    ],
    "9_8": [
      {
        "pdMin": 0,
        "pdMax": 5,
        "pe": 1
      },
      {
        "pdMin": 6,
        "pdMax": 11,
        "pe": 2
      },
      {
        "pdMin": 12,
        "pdMax": 17,
        "pe": 3
      },
      {
        "pdMin": 18,
        "pdMax": 23,
        "pe": 4
      },
      {
        "pdMin": 24,
        "pdMax": 28,
        "pe": 5
      },
      {
        "pdMin": 29,
        "pdMax": 34,
        "pe": 6
      },
      {
        "pdMin": 35,
        "pdMax": 40,
        "pe": 7
      },
      {
        "pdMin": 41,
        "pdMax": 46,
        "pe": 8
      },
      {
        "pdMin": 47,
        "pdMax": 52,
        "pe": 9
      },
      {
        "pdMin": 53,
        "pdMax": 58,
        "pe": 10
      },
      {
        "pdMin": 59,
        "pdMax": 64,
        "pe": 11
      },
      {
        "pdMin": 65,
        "pdMax": 70,
        "pe": 12
      },
      {
        "pdMin": 71,
        "pdMax": 75,
        "pe": 13
      },
      {
        "pdMin": 76,
        "pdMax": 81,
        "pe": 14
      },
      {
        "pdMin": 82,
        "pdMax": 87,
        "pe": 15
      },
      {
        "pdMin": 88,
        "pdMax": 93,
        "pe": 16
      },
      {
        "pdMin": 94,
        "pdMax": 100,
        "pe": 17
      },
      {
        "pdMin": 101,
        "pdMax": 10,
        "pe": 18
      },
      {
        "pdMin": 105,
        "pdMax": 108,
        "pe": 19
      },
      {
        "pdMin": 109,
        "pdMax": 112,
        "pe": 20
      },
      {
        "pdMin": 113,
        "pdMax": 115,
        "pe": 21
      },
      {
        "pdMin": 116,
        "pdMax": 118,
        "pe": 22
      },
      {
        "pdMin": 119,
        "pdMax": 121,
        "pe": 23
      },
      {
        "pdMin": 122,
        "pdMax": 123,
        "pe": 24
      },
      {
        "pdMin": 124,
        "pdMax": 125,
        "pe": 25
      },
      {
        "pdMin": 126,
        "pdMax": 127,
        "pe": 26
      },
      {
        "pdMin": 128,
        "pdMax": 128,
        "pe": 27
      }
    ],
    "10_0": [
      {
        "pdMin": 0,
        "pdMax": 5,
        "pe": 1
      },
      {
        "pdMin": 6,
        "pdMax": 11,
        "pe": 2
      },
      {
        "pdMin": 12,
        "pdMax": 17,
        "pe": 3
      },
      {
        "pdMin": 18,
        "pdMax": 23,
        "pe": 4
      },
      {
        "pdMin": 24,
        "pdMax": 29,
        "pe": 5
      },
      {
        "pdMin": 30,
        "pdMax": 35,
        "pe": 6
      },
      {
        "pdMin": 36,
        "pdMax": 41,
        "pe": 7
      },
      {
        "pdMin": 42,
        "pdMax": 47,
        "pe": 8
      },
      {
        "pdMin": 48,
        "pdMax": 53,
        "pe": 9
      },
      {
        "pdMin": 54,
        "pdMax": 59,
        "pe": 10
      },
      {
        "pdMin": 60,
        "pdMax": 65,
        "pe": 11
      },
      {
        "pdMin": 66,
        "pdMax": 71,
        "pe": 12
      },
      {
        "pdMin": 72,
        "pdMax": 77,
        "pe": 13
      },
      {
        "pdMin": 78,
        "pdMax": 83,
        "pe": 14
      },
      {
        "pdMin": 84,
        "pdMax": 89,
        "pe": 15
      },
      {
        "pdMin": 90,
        "pdMax": 95,
        "pe": 16
      },
      {
        "pdMin": 96,
        "pdMax": 102,
        "pe": 17
      },
      {
        "pdMin": 103,
        "pdMax": 106,
        "pe": 18
      },
      {
        "pdMin": 107,
        "pdMax": 110,
        "pe": 19
      },
      {
        "pdMin": 111,
        "pdMax": 114,
        "pe": 20
      },
      {
        "pdMin": 115,
        "pdMax": 117,
        "pe": 21
      },
      {
        "pdMin": 118,
        "pdMax": 120,
        "pe": 22
      },
      {
        "pdMin": 121,
        "pdMax": 122,
        "pe": 23
      },
      {
        "pdMin": 123,
        "pdMax": 124,
        "pe": 24
      },
      {
        "pdMin": 125,
        "pdMax": 126,
        "pe": 25
      },
      {
        "pdMin": 127,
        "pdMax": 128,
        "pe": 26
      }
    ],
    "10_4": [
      {
        "pdMin": 0,
        "pdMax": 5,
        "pe": 1
      },
      {
        "pdMin": 6,
        "pdMax": 11,
        "pe": 2
      },
      {
        "pdMin": 12,
        "pdMax": 17,
        "pe": 3
      },
      {
        "pdMin": 18,
        "pdMax": 23,
        "pe": 4
      },
      {
        "pdMin": 24,
        "pdMax": 30,
        "pe": 5
      },
      {
        "pdMin": 31,
        "pdMax": 36,
        "pe": 6
      },
      {
        "pdMin": 37,
        "pdMax": 42,
        "pe": 7
      },
      {
        "pdMin": 43,
        "pdMax": 48,
        "pe": 8
      },
      {
        "pdMin": 49,
        "pdMax": 54,
        "pe": 9
      },
      {
        "pdMin": 55,
        "pdMax": 60,
        "pe": 10
      },
      {
        "pdMin": 61,
        "pdMax": 66,
        "pe": 11
      },
      {
        "pdMin": 67,
        "pdMax": 72,
        "pe": 12
      },
      {
        "pdMin": 73,
        "pdMax": 79,
        "pe": 13
      },
      {
        "pdMin": 80,
        "pdMax": 85,
        "pe": 14
      },
      {
        "pdMin": 86,
        "pdMax": 91,
        "pe": 15
      },
      {
        "pdMin": 92,
        "pdMax": 97,
        "pe": 16
      },
      {
        "pdMin": 98,
        "pdMax": 104,
        "pe": 17
      },
      {
        "pdMin": 105,
        "pdMax": 10,
        "pe": 18
      },
      {
        "pdMin": 109,
        "pdMax": 112,
        "pe": 19
      },
      {
        "pdMin": 113,
        "pdMax": 116,
        "pe": 20
      },
      {
        "pdMin": 117,
        "pdMax": 118,
        "pe": 21
      },
      {
        "pdMin": 119,
        "pdMax": 121,
        "pe": 22
      },
      {
        "pdMin": 122,
        "pdMax": 123,
        "pe": 23
      },
      {
        "pdMin": 124,
        "pdMax": 125,
        "pe": 24
      },
      {
        "pdMin": 126,
        "pdMax": 127,
        "pe": 25
      },
      {
        "pdMin": 128,
        "pdMax": 128,
        "pe": 26
      }
    ],
    "10_8": [
      {
        "pdMin": 0,
        "pdMax": 5,
        "pe": 1
      },
      {
        "pdMin": 6,
        "pdMax": 11,
        "pe": 2
      },
      {
        "pdMin": 12,
        "pdMax": 18,
        "pe": 3
      },
      {
        "pdMin": 19,
        "pdMax": 24,
        "pe": 4
      },
      {
        "pdMin": 25,
        "pdMax": 30,
        "pe": 5
      },
      {
        "pdMin": 31,
        "pdMax": 36,
        "pe": 6
      },
      {
        "pdMin": 37,
        "pdMax": 43,
        "pe": 7
      },
      {
        "pdMin": 44,
        "pdMax": 49,
        "pe": 8
      },
      {
        "pdMin": 50,
        "pdMax": 55,
        "pe": 9
      },
      {
        "pdMin": 56,
        "pdMax": 61,
        "pe": 10
      },
      {
        "pdMin": 62,
        "pdMax": 68,
        "pe": 11
      },
      {
        "pdMin": 69,
        "pdMax": 74,
        "pe": 12
      },
      {
        "pdMin": 75,
        "pdMax": 80,
        "pe": 13
      },
      {
        "pdMin": 81,
        "pdMax": 86,
        "pe": 14
      },
      {
        "pdMin": 87,
        "pdMax": 93,
        "pe": 15
      },
      {
        "pdMin": 94,
        "pdMax": 99,
        "pe": 16
      },
      {
        "pdMin": 100,
        "pdMax": 106,
        "pe": 17
      },
      {
        "pdMin": 107,
        "pdMax": 110,
        "pe": 18
      },
      {
        "pdMin": 111,
        "pdMax": 114,
        "pe": 19
      },
      {
        "pdMin": 115,
        "pdMax": 117,
        "pe": 20
      },
      {
        "pdMin": 118,
        "pdMax": 120,
        "pe": 21
      },
      {
        "pdMin": 121,
        "pdMax": 122,
        "pe": 22
      },
      {
        "pdMin": 123,
        "pdMax": 124,
        "pe": 23
      },
      {
        "pdMin": 125,
        "pdMax": 126,
        "pe": 24
      },
      {
        "pdMin": 127,
        "pdMax": 128,
        "pe": 25
      }
    ],
    "11_0": [
      {
        "pdMin": 0,
        "pdMax": 5,
        "pe": 1
      },
      {
        "pdMin": 6,
        "pdMax": 12,
        "pe": 2
      },
      {
        "pdMin": 13,
        "pdMax": 18,
        "pe": 3
      },
      {
        "pdMin": 19,
        "pdMax": 24,
        "pe": 4
      },
      {
        "pdMin": 25,
        "pdMax": 31,
        "pe": 5
      },
      {
        "pdMin": 32,
        "pdMax": 37,
        "pe": 6
      },
      {
        "pdMin": 38,
        "pdMax": 43,
        "pe": 7
      },
      {
        "pdMin": 44,
        "pdMax": 50,
        "pe": 8
      },
      {
        "pdMin": 51,
        "pdMax": 56,
        "pe": 9
      },
      {
        "pdMin": 57,
        "pdMax": 63,
        "pe": 10
      },
      {
        "pdMin": 64,
        "pdMax": 69,
        "pe": 11
      },
      {
        "pdMin": 70,
        "pdMax": 75,
        "pe": 12
      },
      {
        "pdMin": 76,
        "pdMax": 82,
        "pe": 13
      },
      {
        "pdMin": 83,
        "pdMax": 88,
        "pe": 14
      },
      {
        "pdMin": 89,
        "pdMax": 94,
        "pe": 15
      },
      {
        "pdMin": 95,
        "pdMax": 101,
        "pe": 16
      },
      {
        "pdMin": 102,
        "pdMax": 108,
        "pe": 17
      },
      {
        "pdMin": 109,
        "pdMax": 112,
        "pe": 18
      },
      {
        "pdMin": 113,
        "pdMax": 115,
        "pe": 19
      },
      {
        "pdMin": 116,
        "pdMax": 118,
        "pe": 20
      },
      {
        "pdMin": 119,
        "pdMax": 121,
        "pe": 21
      },
      {
        "pdMin": 122,
        "pdMax": 123,
        "pe": 22
      },
      {
        "pdMin": 124,
        "pdMax": 125,
        "pe": 23
      },
      {
        "pdMin": 126,
        "pdMax": 127,
        "pe": 24
      },
      {
        "pdMin": 128,
        "pdMax": 128,
        "pe": 25
      }
    ],
    "11_4": [
      {
        "pdMin": 0,
        "pdMax": 5,
        "pe": 1
      },
      {
        "pdMin": 6,
        "pdMax": 12,
        "pe": 2
      },
      {
        "pdMin": 13,
        "pdMax": 18,
        "pe": 3
      },
      {
        "pdMin": 19,
        "pdMax": 25,
        "pe": 4
      },
      {
        "pdMin": 26,
        "pdMax": 31,
        "pe": 5
      },
      {
        "pdMin": 32,
        "pdMax": 38,
        "pe": 6
      },
      {
        "pdMin": 39,
        "pdMax": 44,
        "pe": 7
      },
      {
        "pdMin": 45,
        "pdMax": 51,
        "pe": 8
      },
      {
        "pdMin": 52,
        "pdMax": 57,
        "pe": 9
      },
      {
        "pdMin": 58,
        "pdMax": 64,
        "pe": 10
      },
      {
        "pdMin": 65,
        "pdMax": 70,
        "pe": 11
      },
      {
        "pdMin": 71,
        "pdMax": 77,
        "pe": 12
      },
      {
        "pdMin": 78,
        "pdMax": 83,
        "pe": 13
      },
      {
        "pdMin": 84,
        "pdMax": 90,
        "pe": 14
      },
      {
        "pdMin": 91,
        "pdMax": 96,
        "pe": 15
      },
      {
        "pdMin": 97,
        "pdMax": 103,
        "pe": 16
      },
      {
        "pdMin": 104,
        "pdMax": 110,
        "pe": 17
      },
      {
        "pdMin": 111,
        "pdMax": 113,
        "pe": 18
      },
      {
        "pdMin": 114,
        "pdMax": 116,
        "pe": 19
      },
      {
        "pdMin": 117,
        "pdMax": 119,
        "pe": 20
      },
      {
        "pdMin": 120,
        "pdMax": 122,
        "pe": 21
      },
      {
        "pdMin": 123,
        "pdMax": 124,
        "pe": 22
      },
      {
        "pdMin": 125,
        "pdMax": 126,
        "pe": 23
      },
      {
        "pdMin": 127,
        "pdMax": 128,
        "pe": 24
      }
    ],
    "11_8": [
      {
        "pdMin": 0,
        "pdMax": 6,
        "pe": 1
      },
      {
        "pdMin": 7,
        "pdMax": 12,
        "pe": 2
      },
      {
        "pdMin": 13,
        "pdMax": 19,
        "pe": 3
      },
      {
        "pdMin": 20,
        "pdMax": 25,
        "pe": 4
      },
      {
        "pdMin": 26,
        "pdMax": 32,
        "pe": 5
      },
      {
        "pdMin": 33,
        "pdMax": 38,
        "pe": 6
      },
      {
        "pdMin": 39,
        "pdMax": 45,
        "pe": 7
      },
      {
        "pdMin": 46,
        "pdMax": 51,
        "pe": 8
      },
      {
        "pdMin": 52,
        "pdMax": 58,
        "pe": 9
      },
      {
        "pdMin": 59,
        "pdMax": 64,
        "pe": 10
      },
      {
        "pdMin": 65,
        "pdMax": 71,
        "pe": 11
      },
      {
        "pdMin": 72,
        "pdMax": 77,
        "pe": 12
      },
      {
        "pdMin": 78,
        "pdMax": 84,
        "pe": 13
      },
      {
        "pdMin": 85,
        "pdMax": 90,
        "pe": 14
      },
      {
        "pdMin": 91,
        "pdMax": 97,
        "pe": 15
      },
      {
        "pdMin": 98,
        "pdMax": 103,
        "pe": 16
      },
      {
        "pdMin": 104,
        "pdMax": 111,
        "pe": 17
      },
      {
        "pdMin": 112,
        "pdMax": 114,
        "pe": 18
      },
      {
        "pdMin": 115,
        "pdMax": 117,
        "pe": 19
      },
      {
        "pdMin": 118,
        "pdMax": 120,
        "pe": 20
      },
      {
        "pdMin": 121,
        "pdMax": 123,
        "pe": 21
      },
      {
        "pdMin": 124,
        "pdMax": 125,
        "pe": 22
      },
      {
        "pdMin": 126,
        "pdMax": 127,
        "pe": 23
      },
      {
        "pdMin": 128,
        "pdMax": 128,
        "pe": 24
      }
    ],
    "12_0": [
      {
        "pdMin": 0,
        "pdMax": 6,
        "pe": 1
      },
      {
        "pdMin": 7,
        "pdMax": 12,
        "pe": 2
      },
      {
        "pdMin": 13,
        "pdMax": 19,
        "pe": 3
      },
      {
        "pdMin": 20,
        "pdMax": 25,
        "pe": 4
      },
      {
        "pdMin": 26,
        "pdMax": 32,
        "pe": 5
      },
      {
        "pdMin": 33,
        "pdMax": 39,
        "pe": 6
      },
      {
        "pdMin": 40,
        "pdMax": 45,
        "pe": 7
      },
      {
        "pdMin": 46,
        "pdMax": 52,
        "pe": 8
      },
      {
        "pdMin": 53,
        "pdMax": 58,
        "pe": 9
      },
      {
        "pdMin": 59,
        "pdMax": 65,
        "pe": 10
      },
      {
        "pdMin": 66,
        "pdMax": 71,
        "pe": 11
      },
      {
        "pdMin": 72,
        "pdMax": 78,
        "pe": 12
      },
      {
        "pdMin": 79,
        "pdMax": 85,
        "pe": 13
      },
      {
        "pdMin": 86,
        "pdMax": 91,
        "pe": 14
      },
      {
        "pdMin": 92,
        "pdMax": 98,
        "pe": 15
      },
      {
        "pdMin": 99,
        "pdMax": 104,
        "pe": 16
      },
      {
        "pdMin": 105,
        "pdMax": 112,
        "pe": 17
      },
      {
        "pdMin": 113,
        "pdMax": 115,
        "pe": 18
      },
      {
        "pdMin": 116,
        "pdMax": 118,
        "pe": 19
      },
      {
        "pdMin": 119,
        "pdMax": 121,
        "pe": 20
      },
      {
        "pdMin": 122,
        "pdMax": 124,
        "pe": 21
      },
      {
        "pdMin": 125,
        "pdMax": 126,
        "pe": 22
      },
      {
        "pdMin": 127,
        "pdMax": 127,
        "pe": 23
      },
      {
        "pdMin": 128,
        "pdMax": 128,
        "pe": 24
      }
    ],
    "12_4": [
      {
        "pdMin": 0,
        "pdMax": 6,
        "pe": 1
      },
      {
        "pdMin": 7,
        "pdMax": 12,
        "pe": 2
      },
      {
        "pdMin": 13,
        "pdMax": 19,
        "pe": 3
      },
      {
        "pdMin": 20,
        "pdMax": 26,
        "pe": 4
      },
      {
        "pdMin": 27,
        "pdMax": 32,
        "pe": 5
      },
      {
        "pdMin": 33,
        "pdMax": 39,
        "pe": 6
      },
      {
        "pdMin": 40,
        "pdMax": 46,
        "pe": 7
      },
      {
        "pdMin": 47,
        "pdMax": 52,
        "pe": 8
      },
      {
        "pdMin": 53,
        "pdMax": 59,
        "pe": 9
      },
      {
        "pdMin": 60,
        "pdMax": 65,
        "pe": 10
      },
      {
        "pdMin": 66,
        "pdMax": 72,
        "pe": 11
      },
      {
        "pdMin": 73,
        "pdMax": 79,
        "pe": 12
      },
      {
        "pdMin": 80,
        "pdMax": 85,
        "pe": 13
      },
      {
        "pdMin": 86,
        "pdMax": 92,
        "pe": 14
      },
      {
        "pdMin": 93,
        "pdMax": 99,
        "pe": 15
      },
      {
        "pdMin": 100,
        "pdMax": 105,
        "pe": 16
      },
      {
        "pdMin": 106,
        "pdMax": 113,
        "pe": 17
      },
      {
        "pdMin": 114,
        "pdMax": 116,
        "pe": 18
      },
      {
        "pdMin": 117,
        "pdMax": 119,
        "pe": 19
      },
      {
        "pdMin": 120,
        "pdMax": 122,
        "pe": 20
      },
      {
        "pdMin": 123,
        "pdMax": 124,
        "pe": 21
      },
      {
        "pdMin": 125,
        "pdMax": 126,
        "pe": 22
      },
      {
        "pdMin": 127,
        "pdMax": 128,
        "pe": 23
      }
    ],
    "12_8": [
      {
        "pdMin": 0,
        "pdMax": 6,
        "pe": 1
      },
      {
        "pdMin": 7,
        "pdMax": 12,
        "pe": 2
      },
      {
        "pdMin": 13,
        "pdMax": 19,
        "pe": 3
      },
      {
        "pdMin": 20,
        "pdMax": 26,
        "pe": 4
      },
      {
        "pdMin": 27,
        "pdMax": 33,
        "pe": 5
      },
      {
        "pdMin": 34,
        "pdMax": 39,
        "pe": 6
      },
      {
        "pdMin": 40,
        "pdMax": 46,
        "pe": 7
      },
      {
        "pdMin": 47,
        "pdMax": 53,
        "pe": 8
      },
      {
        "pdMin": 54,
        "pdMax": 59,
        "pe": 9
      },
      {
        "pdMin": 60,
        "pdMax": 66,
        "pe": 10
      },
      {
        "pdMin": 67,
        "pdMax": 73,
        "pe": 11
      },
      {
        "pdMin": 74,
        "pdMax": 79,
        "pe": 12
      },
      {
        "pdMin": 80,
        "pdMax": 86,
        "pe": 13
      },
      {
        "pdMin": 87,
        "pdMax": 93,
        "pe": 14
      },
      {
        "pdMin": 94,
        "pdMax": 100,
        "pe": 15
      },
      {
        "pdMin": 101,
        "pdMax": 106,
        "pe": 16
      },
      {
        "pdMin": 107,
        "pdMax": 114,
        "pe": 17
      },
      {
        "pdMin": 115,
        "pdMax": 117,
        "pe": 18
      },
      {
        "pdMin": 118,
        "pdMax": 120,
        "pe": 19
      },
      {
        "pdMin": 121,
        "pdMax": 123,
        "pe": 20
      },
      {
        "pdMin": 124,
        "pdMax": 125,
        "pe": 21
      },
      {
        "pdMin": 126,
        "pdMax": 127,
        "pe": 22
      },
      {
        "pdMin": 128,
        "pdMax": 128,
        "pe": 23
      }
    ],
    "13_0": [
      {
        "pdMin": 0,
        "pdMax": 6,
        "pe": 1
      },
      {
        "pdMin": 7,
        "pdMax": 13,
        "pe": 2
      },
      {
        "pdMin": 14,
        "pdMax": 19,
        "pe": 3
      },
      {
        "pdMin": 20,
        "pdMax": 26,
        "pe": 4
      },
      {
        "pdMin": 27,
        "pdMax": 33,
        "pe": 5
      },
      {
        "pdMin": 34,
        "pdMax": 40,
        "pe": 6
      },
      {
        "pdMin": 41,
        "pdMax": 46,
        "pe": 7
      },
      {
        "pdMin": 47,
        "pdMax": 53,
        "pe": 8
      },
      {
        "pdMin": 54,
        "pdMax": 60,
        "pe": 9
      },
      {
        "pdMin": 61,
        "pdMax": 67,
        "pe": 10
      },
      {
        "pdMin": 68,
        "pdMax": 73,
        "pe": 11
      },
      {
        "pdMin": 74,
        "pdMax": 80,
        "pe": 12
      },
      {
        "pdMin": 81,
        "pdMax": 87,
        "pe": 13
      },
      {
        "pdMin": 88,
        "pdMax": 94,
        "pe": 14
      },
      {
        "pdMin": 95,
        "pdMax": 100,
        "pe": 15
      },
      {
        "pdMin": 101,
        "pdMax": 107,
        "pe": 16
      },
      {
        "pdMin": 108,
        "pdMax": 115,
        "pe": 17
      },
      {
        "pdMin": 116,
        "pdMax": 118,
        "pe": 18
      },
      {
        "pdMin": 119,
        "pdMax": 121,
        "pe": 19
      },
      {
        "pdMin": 122,
        "pdMax": 123,
        "pe": 20
      },
      {
        "pdMin": 124,
        "pdMax": 125,
        "pe": 21
      },
      {
        "pdMin": 126,
        "pdMax": 127,
        "pe": 22
      },
      {
        "pdMin": 128,
        "pdMax": 128,
        "pe": 23
      }
    ],
    "13_4": [
      {
        "pdMin": 0,
        "pdMax": 6,
        "pe": 1
      },
      {
        "pdMin": 7,
        "pdMax": 13,
        "pe": 2
      },
      {
        "pdMin": 14,
        "pdMax": 19,
        "pe": 3
      },
      {
        "pdMin": 20,
        "pdMax": 26,
        "pe": 4
      },
      {
        "pdMin": 27,
        "pdMax": 33,
        "pe": 5
      },
      {
        "pdMin": 34,
        "pdMax": 40,
        "pe": 6
      },
      {
        "pdMin": 41,
        "pdMax": 47,
        "pe": 7
      },
      {
        "pdMin": 48,
        "pdMax": 54,
        "pe": 8
      },
      {
        "pdMin": 55,
        "pdMax": 60,
        "pe": 9
      },
      {
        "pdMin": 61,
        "pdMax": 67,
        "pe": 10
      },
      {
        "pdMin": 68,
        "pdMax": 74,
        "pe": 11
      },
      {
        "pdMin": 75,
        "pdMax": 81,
        "pe": 12
      },
      {
        "pdMin": 82,
        "pdMax": 88,
        "pe": 13
      },
      {
        "pdMin": 89,
        "pdMax": 95,
        "pe": 14
      },
      {
        "pdMin": 96,
        "pdMax": 101,
        "pe": 15
      },
      {
        "pdMin": 102,
        "pdMax": 108,
        "pe": 16
      },
      {
        "pdMin": 109,
        "pdMax": 116,
        "pe": 17
      },
      {
        "pdMin": 117,
        "pdMax": 119,
        "pe": 18
      },
      {
        "pdMin": 120,
        "pdMax": 122,
        "pe": 19
      },
      {
        "pdMin": 123,
        "pdMax": 124,
        "pe": 20
      },
      {
        "pdMin": 125,
        "pdMax": 126,
        "pe": 21
      },
      {
        "pdMin": 127,
        "pdMax": 128,
        "pe": 22
      }
    ],
    "13_8": [
      {
        "pdMin": 0,
        "pdMax": 6,
        "pe": 1
      },
      {
        "pdMin": 7,
        "pdMax": 13,
        "pe": 2
      },
      {
        "pdMin": 14,
        "pdMax": 20,
        "pe": 3
      },
      {
        "pdMin": 21,
        "pdMax": 27,
        "pe": 4
      },
      {
        "pdMin": 28,
        "pdMax": 33,
        "pe": 5
      },
      {
        "pdMin": 34,
        "pdMax": 40,
        "pe": 6
      },
      {
        "pdMin": 41,
        "pdMax": 47,
        "pe": 7
      },
      {
        "pdMin": 48,
        "pdMax": 54,
        "pe": 8
      },
      {
        "pdMin": 55,
        "pdMax": 61,
        "pe": 9
      },
      {
        "pdMin": 62,
        "pdMax": 68,
        "pe": 10
      },
      {
        "pdMin": 69,
        "pdMax": 75,
        "pe": 11
      },
      {
        "pdMin": 76,
        "pdMax": 82,
        "pe": 12
      },
      {
        "pdMin": 83,
        "pdMax": 88,
        "pe": 13
      },
      {
        "pdMin": 89,
        "pdMax": 95,
        "pe": 14
      },
      {
        "pdMin": 96,
        "pdMax": 102,
        "pe": 15
      },
      {
        "pdMin": 103,
        "pdMax": 109,
        "pe": 16
      },
      {
        "pdMin": 110,
        "pdMax": 117,
        "pe": 17
      },
      {
        "pdMin": 118,
        "pdMax": 120,
        "pe": 18
      },
      {
        "pdMin": 121,
        "pdMax": 123,
        "pe": 19
      },
      {
        "pdMin": 124,
        "pdMax": 125,
        "pe": 20
      },
      {
        "pdMin": 126,
        "pdMax": 127,
        "pe": 21
      },
      {
        "pdMin": 128,
        "pdMax": 128,
        "pe": 22
      }
    ],
    "14_0": [
      {
        "pdMin": 0,
        "pdMax": 6,
        "pe": 1
      },
      {
        "pdMin": 7,
        "pdMax": 13,
        "pe": 2
      },
      {
        "pdMin": 14,
        "pdMax": 20,
        "pe": 3
      },
      {
        "pdMin": 21,
        "pdMax": 27,
        "pe": 4
      },
      {
        "pdMin": 28,
        "pdMax": 34,
        "pe": 5
      },
      {
        "pdMin": 35,
        "pdMax": 41,
        "pe": 6
      },
      {
        "pdMin": 42,
        "pdMax": 48,
        "pe": 7
      },
      {
        "pdMin": 49,
        "pdMax": 55,
        "pe": 8
      },
      {
        "pdMin": 56,
        "pdMax": 61,
        "pe": 9
      },
      {
        "pdMin": 62,
        "pdMax": 68,
        "pe": 10
      },
      {
        "pdMin": 69,
        "pdMax": 75,
        "pe": 11
      },
      {
        "pdMin": 76,
        "pdMax": 82,
        "pe": 12
      },
      {
        "pdMin": 83,
        "pdMax": 89,
        "pe": 13
      },
      {
        "pdMin": 90,
        "pdMax": 96,
        "pe": 14
      },
      {
        "pdMin": 97,
        "pdMax": 103,
        "pe": 15
      },
      {
        "pdMin": 104,
        "pdMax": 110,
        "pe": 16
      },
      {
        "pdMin": 111,
        "pdMax": 118,
        "pe": 17
      },
      {
        "pdMin": 119,
        "pdMax": 120,
        "pe": 18
      },
      {
        "pdMin": 121,
        "pdMax": 123,
        "pe": 19
      },
      {
        "pdMin": 124,
        "pdMax": 125,
        "pe": 20
      },
      {
        "pdMin": 126,
        "pdMax": 127,
        "pe": 21
      },
      {
        "pdMin": 128,
        "pdMax": 128,
        "pe": 22
      }
    ],
    "14_4": [
      {
        "pdMin": 0,
        "pdMax": 6,
        "pe": 1
      },
      {
        "pdMin": 7,
        "pdMax": 13,
        "pe": 2
      },
      {
        "pdMin": 14,
        "pdMax": 20,
        "pe": 3
      },
      {
        "pdMin": 21,
        "pdMax": 27,
        "pe": 4
      },
      {
        "pdMin": 28,
        "pdMax": 34,
        "pe": 5
      },
      {
        "pdMin": 35,
        "pdMax": 41,
        "pe": 6
      },
      {
        "pdMin": 42,
        "pdMax": 48,
        "pe": 7
      },
      {
        "pdMin": 49,
        "pdMax": 55,
        "pe": 8
      },
      {
        "pdMin": 56,
        "pdMax": 62,
        "pe": 9
      },
      {
        "pdMin": 63,
        "pdMax": 69,
        "pe": 10
      },
      {
        "pdMin": 70,
        "pdMax": 76,
        "pe": 11
      },
      {
        "pdMin": 77,
        "pdMax": 83,
        "pe": 12
      },
      {
        "pdMin": 84,
        "pdMax": 90,
        "pe": 13
      },
      {
        "pdMin": 91,
        "pdMax": 97,
        "pe": 14
      },
      {
        "pdMin": 98,
        "pdMax": 104,
        "pe": 15
      },
      {
        "pdMin": 105,
        "pdMax": 111,
        "pe": 16
      },
      {
        "pdMin": 112,
        "pdMax": 119,
        "pe": 17
      },
      {
        "pdMin": 120,
        "pdMax": 121,
        "pe": 18
      },
      {
        "pdMin": 122,
        "pdMax": 124,
        "pe": 19
      },
      {
        "pdMin": 125,
        "pdMax": 126,
        "pe": 20
      },
      {
        "pdMin": 127,
        "pdMax": 127,
        "pe": 21
      },
      {
        "pdMin": 128,
        "pdMax": 128,
        "pe": 22
      }
    ],
    "14_8": [
      {
        "pdMin": 0,
        "pdMax": 6,
        "pe": 1
      },
      {
        "pdMin": 7,
        "pdMax": 13,
        "pe": 2
      },
      {
        "pdMin": 14,
        "pdMax": 20,
        "pe": 3
      },
      {
        "pdMin": 21,
        "pdMax": 27,
        "pe": 4
      },
      {
        "pdMin": 28,
        "pdMax": 34,
        "pe": 5
      },
      {
        "pdMin": 35,
        "pdMax": 41,
        "pe": 6
      },
      {
        "pdMin": 42,
        "pdMax": 48,
        "pe": 7
      },
      {
        "pdMin": 49,
        "pdMax": 55,
        "pe": 8
      },
      {
        "pdMin": 56,
        "pdMax": 62,
        "pe": 9
      },
      {
        "pdMin": 63,
        "pdMax": 69,
        "pe": 10
      },
      {
        "pdMin": 70,
        "pdMax": 76,
        "pe": 11
      },
      {
        "pdMin": 77,
        "pdMax": 83,
        "pe": 12
      },
      {
        "pdMin": 84,
        "pdMax": 90,
        "pe": 13
      },
      {
        "pdMin": 91,
        "pdMax": 97,
        "pe": 14
      },
      {
        "pdMin": 98,
        "pdMax": 104,
        "pe": 15
      },
      {
        "pdMin": 105,
        "pdMax": 111,
        "pe": 16
      },
      {
        "pdMin": 112,
        "pdMax": 119,
        "pe": 17
      },
      {
        "pdMin": 120,
        "pdMax": 121,
        "pe": 18
      },
      {
        "pdMin": 122,
        "pdMax": 124,
        "pe": 19
      },
      {
        "pdMin": 125,
        "pdMax": 126,
        "pe": 20
      },
      {
        "pdMin": 127,
        "pdMax": 127,
        "pe": 21
      },
      {
        "pdMin": 128,
        "pdMax": 128,
        "pe": 22
      }
    ],
    "15_0": [
      {
        "pdMin": 0,
        "pdMax": 6,
        "pe": 1
      },
      {
        "pdMin": 7,
        "pdMax": 13,
        "pe": 2
      },
      {
        "pdMin": 14,
        "pdMax": 20,
        "pe": 3
      },
      {
        "pdMin": 21,
        "pdMax": 27,
        "pe": 4
      },
      {
        "pdMin": 28,
        "pdMax": 34,
        "pe": 5
      },
      {
        "pdMin": 35,
        "pdMax": 41,
        "pe": 6
      },
      {
        "pdMin": 42,
        "pdMax": 48,
        "pe": 7
      },
      {
        "pdMin": 49,
        "pdMax": 55,
        "pe": 8
      },
      {
        "pdMin": 56,
        "pdMax": 63,
        "pe": 9
      },
      {
        "pdMin": 64,
        "pdMax": 70,
        "pe": 10
      },
      {
        "pdMin": 71,
        "pdMax": 77,
        "pe": 11
      },
      {
        "pdMin": 78,
        "pdMax": 84,
        "pe": 12
      },
      {
        "pdMin": 85,
        "pdMax": 91,
        "pe": 13
      },
      {
        "pdMin": 92,
        "pdMax": 98,
        "pe": 14
      },
      {
        "pdMin": 99,
        "pdMax": 105,
        "pe": 15
      },
      {
        "pdMin": 106,
        "pdMax": 112,
        "pe": 16
      },
      {
        "pdMin": 113,
        "pdMax": 120,
        "pe": 17
      },
      {
        "pdMin": 121,
        "pdMax": 122,
        "pe": 18
      },
      {
        "pdMin": 123,
        "pdMax": 124,
        "pe": 19
      },
      {
        "pdMin": 125,
        "pdMax": 126,
        "pe": 20
      },
      {
        "pdMin": 127,
        "pdMax": 127,
        "pe": 21
      },
      {
        "pdMin": 128,
        "pdMax": 128,
        "pe": 22
      }
    ],
    "15_4": [
      {
        "pdMin": 0,
        "pdMax": 6,
        "pe": 1
      },
      {
        "pdMin": 7,
        "pdMax": 13,
        "pe": 2
      },
      {
        "pdMin": 14,
        "pdMax": 20,
        "pe": 3
      },
      {
        "pdMin": 21,
        "pdMax": 27,
        "pe": 4
      },
      {
        "pdMin": 28,
        "pdMax": 34,
        "pe": 5
      },
      {
        "pdMin": 35,
        "pdMax": 41,
        "pe": 6
      },
      {
        "pdMin": 42,
        "pdMax": 48,
        "pe": 7
      },
      {
        "pdMin": 49,
        "pdMax": 55,
        "pe": 8
      },
      {
        "pdMin": 56,
        "pdMax": 63,
        "pe": 9
      },
      {
        "pdMin": 64,
        "pdMax": 70,
        "pe": 10
      },
      {
        "pdMin": 71,
        "pdMax": 77,
        "pe": 11
      },
      {
        "pdMin": 78,
        "pdMax": 84,
        "pe": 12
      },
      {
        "pdMin": 85,
        "pdMax": 91,
        "pe": 13
      },
      {
        "pdMin": 92,
        "pdMax": 98,
        "pe": 14
      },
      {
        "pdMin": 99,
        "pdMax": 105,
        "pe": 15
      },
      {
        "pdMin": 106,
        "pdMax": 112,
        "pe": 16
      },
      {
        "pdMin": 113,
        "pdMax": 120,
        "pe": 17
      },
      {
        "pdMin": 121,
        "pdMax": 122,
        "pe": 18
      },
      {
        "pdMin": 123,
        "pdMax": 124,
        "pe": 19
      },
      {
        "pdMin": 125,
        "pdMax": 126,
        "pe": 20
      },
      {
        "pdMin": 127,
        "pdMax": 127,
        "pe": 21
      },
      {
        "pdMin": 128,
        "pdMax": 128,
        "pe": 22
      }
    ],
    "15_8": [
      {
        "pdMin": 0,
        "pdMax": 6,
        "pe": 1
      },
      {
        "pdMin": 7,
        "pdMax": 13,
        "pe": 2
      },
      {
        "pdMin": 14,
        "pdMax": 20,
        "pe": 3
      },
      {
        "pdMin": 21,
        "pdMax": 27,
        "pe": 4
      },
      {
        "pdMin": 28,
        "pdMax": 34,
        "pe": 5
      },
      {
        "pdMin": 35,
        "pdMax": 41,
        "pe": 6
      },
      {
        "pdMin": 42,
        "pdMax": 48,
        "pe": 7
      },
      {
        "pdMin": 49,
        "pdMax": 55,
        "pe": 8
      },
      {
        "pdMin": 56,
        "pdMax": 63,
        "pe": 9
      },
      {
        "pdMin": 64,
        "pdMax": 70,
        "pe": 10
      },
      {
        "pdMin": 71,
        "pdMax": 77,
        "pe": 11
      },
      {
        "pdMin": 78,
        "pdMax": 84,
        "pe": 12
      },
      {
        "pdMin": 85,
        "pdMax": 91,
        "pe": 13
      },
      {
        "pdMin": 92,
        "pdMax": 98,
        "pe": 14
      },
      {
        "pdMin": 99,
        "pdMax": 105,
        "pe": 15
      },
      {
        "pdMin": 106,
        "pdMax": 112,
        "pe": 16
      },
      {
        "pdMin": 113,
        "pdMax": 120,
        "pe": 17
      },
      {
        "pdMin": 121,
        "pdMax": 122,
        "pe": 18
      },
      {
        "pdMin": 123,
        "pdMax": 124,
        "pe": 19
      },
      {
        "pdMin": 125,
        "pdMax": 126,
        "pe": 20
      },
      {
        "pdMin": 127,
        "pdMax": 127,
        "pe": 21
      },
      {
        "pdMin": 128,
        "pdMax": 128,
        "pe": 22
      }
    ],
    "16_0": [
      {
        "pdMin": 0,
        "pdMax": 6,
        "pe": 1
      },
      {
        "pdMin": 7,
        "pdMax": 13,
        "pe": 2
      },
      {
        "pdMin": 14,
        "pdMax": 20,
        "pe": 3
      },
      {
        "pdMin": 21,
        "pdMax": 27,
        "pe": 4
      },
      {
        "pdMin": 28,
        "pdMax": 35,
        "pe": 5
      },
      {
        "pdMin": 36,
        "pdMax": 42,
        "pe": 6
      },
      {
        "pdMin": 43,
        "pdMax": 49,
        "pe": 7
      },
      {
        "pdMin": 50,
        "pdMax": 56,
        "pe": 8
      },
      {
        "pdMin": 57,
        "pdMax": 63,
        "pe": 9
      },
      {
        "pdMin": 64,
        "pdMax": 70,
        "pe": 10
      },
      {
        "pdMin": 71,
        "pdMax": 77,
        "pe": 11
      },
      {
        "pdMin": 78,
        "pdMax": 84,
        "pe": 12
      },
      {
        "pdMin": 85,
        "pdMax": 92,
        "pe": 13
      },
      {
        "pdMin": 93,
        "pdMax": 99,
        "pe": 14
      },
      {
        "pdMin": 100,
        "pdMax": 106,
        "pe": 15
      },
      {
        "pdMin": 107,
        "pdMax": 113,
        "pe": 16
      },
      {
        "pdMin": 114,
        "pdMax": 121,
        "pe": 17
      },
      {
        "pdMin": 122,
        "pdMax": 123,
        "pe": 18
      },
      {
        "pdMin": 124,
        "pdMax": 125,
        "pe": 19
      },
      {
        "pdMin": 126,
        "pdMax": 127,
        "pe": 20
      },
      {
        "pdMin": 128,
        "pdMax": 128,
        "pe": 21
      }
    ],
    "16_4": [
      {
        "pdMin": 0,
        "pdMax": 6,
        "pe": 1
      },
      {
        "pdMin": 7,
        "pdMax": 13,
        "pe": 2
      },
      {
        "pdMin": 14,
        "pdMax": 20,
        "pe": 3
      },
      {
        "pdMin": 21,
        "pdMax": 27,
        "pe": 4
      },
      {
        "pdMin": 28,
        "pdMax": 35,
        "pe": 5
      },
      {
        "pdMin": 36,
        "pdMax": 42,
        "pe": 6
      },
      {
        "pdMin": 43,
        "pdMax": 49,
        "pe": 7
      },
      {
        "pdMin": 50,
        "pdMax": 56,
        "pe": 8
      },
      {
        "pdMin": 57,
        "pdMax": 63,
        "pe": 9
      },
      {
        "pdMin": 64,
        "pdMax": 70,
        "pe": 10
      },
      {
        "pdMin": 71,
        "pdMax": 77,
        "pe": 11
      },
      {
        "pdMin": 78,
        "pdMax": 84,
        "pe": 12
      },
      {
        "pdMin": 85,
        "pdMax": 92,
        "pe": 13
      },
      {
        "pdMin": 93,
        "pdMax": 99,
        "pe": 14
      },
      {
        "pdMin": 100,
        "pdMax": 106,
        "pe": 15
      },
      {
        "pdMin": 107,
        "pdMax": 113,
        "pe": 16
      },
      {
        "pdMin": 114,
        "pdMax": 121,
        "pe": 17
      },
      {
        "pdMin": 122,
        "pdMax": 123,
        "pe": 18
      },
      {
        "pdMin": 124,
        "pdMax": 125,
        "pe": 19
      },
      {
        "pdMin": 126,
        "pdMax": 127,
        "pe": 20
      },
      {
        "pdMin": 128,
        "pdMax": 128,
        "pe": 21
      }
    ],
    "16_8": [
      {
        "pdMin": 0,
        "pdMax": 6,
        "pe": 1
      },
      {
        "pdMin": 7,
        "pdMax": 13,
        "pe": 2
      },
      {
        "pdMin": 14,
        "pdMax": 20,
        "pe": 3
      },
      {
        "pdMin": 21,
        "pdMax": 27,
        "pe": 4
      },
      {
        "pdMin": 28,
        "pdMax": 35,
        "pe": 5
      },
      {
        "pdMin": 36,
        "pdMax": 42,
        "pe": 6
      },
      {
        "pdMin": 43,
        "pdMax": 49,
        "pe": 7
      },
      {
        "pdMin": 50,
        "pdMax": 56,
        "pe": 8
      },
      {
        "pdMin": 57,
        "pdMax": 63,
        "pe": 9
      },
      {
        "pdMin": 64,
        "pdMax": 70,
        "pe": 10
      },
      {
        "pdMin": 71,
        "pdMax": 77,
        "pe": 11
      },
      {
        "pdMin": 78,
        "pdMax": 84,
        "pe": 12
      },
      {
        "pdMin": 85,
        "pdMax": 92,
        "pe": 13
      },
      {
        "pdMin": 93,
        "pdMax": 99,
        "pe": 14
      },
      {
        "pdMin": 100,
        "pdMax": 106,
        "pe": 15
      },
      {
        "pdMin": 107,
        "pdMax": 113,
        "pe": 16
      },
      {
        "pdMin": 114,
        "pdMax": 121,
        "pe": 17
      },
      {
        "pdMin": 122,
        "pdMax": 123,
        "pe": 18
      },
      {
        "pdMin": 124,
        "pdMax": 125,
        "pe": 19
      },
      {
        "pdMin": 126,
        "pdMax": 127,
        "pe": 20
      },
      {
        "pdMin": 128,
        "pdMax": 128,
        "pe": 21
      }
    ]
  },
  "com": {
    "6_0": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 2
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 3
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 4
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 5
      },
      {
        "pdMin": 6,
        "pdMax": 6,
        "pe": 6
      },
      {
        "pdMin": 7,
        "pdMax": 7,
        "pe": 7
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 8
      },
      {
        "pdMin": 9,
        "pdMax": 9,
        "pe": 9
      },
      {
        "pdMin": 10,
        "pdMax": 10,
        "pe": 10
      },
      {
        "pdMin": 11,
        "pdMax": 11,
        "pe": 11
      },
      {
        "pdMin": 12,
        "pdMax": 12,
        "pe": 12
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 13
      },
      {
        "pdMin": 15,
        "pdMax": 15,
        "pe": 14
      },
      {
        "pdMin": 16,
        "pdMax": 16,
        "pe": 15
      },
      {
        "pdMin": 17,
        "pdMax": 17,
        "pe": 16
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 17
      },
      {
        "pdMin": 20,
        "pdMax": 21,
        "pe": 18
      },
      {
        "pdMin": 22,
        "pdMax": 22,
        "pe": 19
      },
      {
        "pdMin": 23,
        "pdMax": 23,
        "pe": 20
      },
      {
        "pdMin": 24,
        "pdMax": 24,
        "pe": 21
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 22
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 23
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 24
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 25
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 26
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 27
      },
      {
        "pdMin": 31,
        "pdMax": 38,
        "pe": 28
      }
    ],
    "6_4": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 2
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 3
      },
      {
        "pdMin": 4,
        "pdMax": 4,
        "pe": 4
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 5
      },
      {
        "pdMin": 6,
        "pdMax": 6,
        "pe": 6
      },
      {
        "pdMin": 7,
        "pdMax": 7,
        "pe": 7
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 8
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 9
      },
      {
        "pdMin": 11,
        "pdMax": 11,
        "pe": 10
      },
      {
        "pdMin": 12,
        "pdMax": 12,
        "pe": 11
      },
      {
        "pdMin": 13,
        "pdMax": 13,
        "pe": 12
      },
      {
        "pdMin": 14,
        "pdMax": 14,
        "pe": 13
      },
      {
        "pdMin": 15,
        "pdMax": 15,
        "pe": 14
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 15
      },
      {
        "pdMin": 18,
        "pdMax": 18,
        "pe": 16
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 17
      },
      {
        "pdMin": 21,
        "pdMax": 21,
        "pe": 18
      },
      {
        "pdMin": 22,
        "pdMax": 22,
        "pe": 19
      },
      {
        "pdMin": 23,
        "pdMax": 23,
        "pe": 20
      },
      {
        "pdMin": 24,
        "pdMax": 24,
        "pe": 21
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 22
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 23
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 24
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 25
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 26
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 27
      }
    ],
    "6_8": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 2
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 3
      },
      {
        "pdMin": 4,
        "pdMax": 4,
        "pe": 4
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 5
      },
      {
        "pdMin": 6,
        "pdMax": 6,
        "pe": 6
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 7
      },
      {
        "pdMin": 9,
        "pdMax": 9,
        "pe": 8
      },
      {
        "pdMin": 10,
        "pdMax": 10,
        "pe": 9
      },
      {
        "pdMin": 11,
        "pdMax": 11,
        "pe": 10
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 11
      },
      {
        "pdMin": 14,
        "pdMax": 14,
        "pe": 12
      },
      {
        "pdMin": 15,
        "pdMax": 15,
        "pe": 13
      },
      {
        "pdMin": 16,
        "pdMax": 16,
        "pe": 14
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 15
      },
      {
        "pdMin": 19,
        "pdMax": 19,
        "pe": 16
      },
      {
        "pdMin": 20,
        "pdMax": 21,
        "pe": 17
      },
      {
        "pdMin": 22,
        "pdMax": 22,
        "pe": 18
      },
      {
        "pdMin": 23,
        "pdMax": 23,
        "pe": 19
      },
      {
        "pdMin": 24,
        "pdMax": 24,
        "pe": 20
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 21
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 22
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 23
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 24
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 25
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 26
      },
      {
        "pdMin": 31,
        "pdMax": 31,
        "pe": 27
      }
    ],
    "7_0": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 1,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 3
      },
      {
        "pdMin": 4,
        "pdMax": 4,
        "pe": 4
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 5
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 6
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 7
      },
      {
        "pdMin": 9,
        "pdMax": 9,
        "pe": 8
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 9
      },
      {
        "pdMin": 12,
        "pdMax": 12,
        "pe": 10
      },
      {
        "pdMin": 13,
        "pdMax": 13,
        "pe": 11
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 12
      },
      {
        "pdMin": 16,
        "pdMax": 16,
        "pe": 13
      },
      {
        "pdMin": 17,
        "pdMax": 17,
        "pe": 14
      },
      {
        "pdMin": 18,
        "pdMax": 18,
        "pe": 15
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 16
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 17
      },
      {
        "pdMin": 23,
        "pdMax": 23,
        "pe": 18
      },
      {
        "pdMin": 24,
        "pdMax": 24,
        "pe": 19
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 20
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 21
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 22
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 23
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 24
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 25
      },
      {
        "pdMin": 31,
        "pdMax": 31,
        "pe": 26
      },
      {
        "pdMin": 32,
        "pdMax": 32,
        "pe": 27
      },
      {
        "pdMin": 33,
        "pdMax": 38,
        "pe": 28
      }
    ],
    "7_8": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 2
      },
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 3
      },
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 4
      },
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 5
      },
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 6
      },
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 7
      },
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 8
      },
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 9
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 10
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 11
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 12
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 13
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 14
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 15
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 16
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 17
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 18
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 19
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 20
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 21
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 22
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 23
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 24
      },
      {
        "pdMin": 31,
        "pdMax": 31,
        "pe": 25
      },
      {
        "pdMin": 32,
        "pdMax": 32,
        "pe": 26
      },
      {
        "pdMin": 33,
        "pdMax": 33,
        "pe": 27
      },
      {
        "pdMin": 34,
        "pdMax": 38,
        "pe": 28
      }
    ],
    "8_0": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 1,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 3
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 4
      },
      {
        "pdMin": 6,
        "pdMax": 6,
        "pe": 5
      },
      {
        "pdMin": 7,
        "pdMax": 7,
        "pe": 6
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 7
      },
      {
        "pdMin": 10,
        "pdMax": 10,
        "pe": 8
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 9
      },
      {
        "pdMin": 13,
        "pdMax": 13,
        "pe": 10
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 11
      },
      {
        "pdMin": 16,
        "pdMax": 16,
        "pe": 12
      },
      {
        "pdMin": 17,
        "pdMax": 17,
        "pe": 13
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 14
      },
      {
        "pdMin": 20,
        "pdMax": 20,
        "pe": 15
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 16
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 17
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 18
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 19
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 20
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 21
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 22
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 23
      },
      {
        "pdMin": 31,
        "pdMax": 31,
        "pe": 24
      },
      {
        "pdMin": 32,
        "pdMax": 32,
        "pe": 25
      },
      {
        "pdMin": 33,
        "pdMax": 33,
        "pe": 26
      },
      {
        "pdMin": 34,
        "pdMax": 34,
        "pe": 27
      },
      {
        "pdMin": 35,
        "pdMax": 38,
        "pe": 28
      }
    ],
    "9_0": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 4
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 5
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 6
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 7
      },
      {
        "pdMin": 11,
        "pdMax": 11,
        "pe": 8
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 9
      },
      {
        "pdMin": 14,
        "pdMax": 14,
        "pe": 10
      },
      {
        "pdMin": 15,
        "pdMax": 16,
        "pe": 11
      },
      {
        "pdMin": 17,
        "pdMax": 17,
        "pe": 12
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 13
      },
      {
        "pdMin": 20,
        "pdMax": 20,
        "pe": 14
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 15
      },
      {
        "pdMin": 23,
        "pdMax": 23,
        "pe": 16
      },
      {
        "pdMin": 24,
        "pdMax": 26,
        "pe": 17
      },
      {
        "pdMin": 27,
        "pdMax": 28,
        "pe": 18
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 19
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 20
      },
      {
        "pdMin": 31,
        "pdMax": 31,
        "pe": 21
      },
      {
        "pdMin": 32,
        "pdMax": 32,
        "pe": 22
      },
      {
        "pdMin": 33,
        "pdMax": 33,
        "pe": 23
      },
      {
        "pdMin": 34,
        "pdMax": 34,
        "pe": 24
      },
      {
        "pdMin": 35,
        "pdMax": 35,
        "pe": 25
      },
      {
        "pdMin": 36,
        "pdMax": 36,
        "pe": 26
      },
      {
        "pdMin": 37,
        "pdMax": 37,
        "pe": 27
      },
      {
        "pdMin": 38,
        "pdMax": 38,
        "pe": 28
      }
    ],
    "9_4": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 4
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 5
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 6
      },
      {
        "pdMin": 10,
        "pdMax": 10,
        "pe": 7
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 8
      },
      {
        "pdMin": 13,
        "pdMax": 13,
        "pe": 9
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 10
      },
      {
        "pdMin": 16,
        "pdMax": 16,
        "pe": 11
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 12
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 13
      },
      {
        "pdMin": 21,
        "pdMax": 21,
        "pe": 14
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 15
      },
      {
        "pdMin": 24,
        "pdMax": 24,
        "pe": 16
      },
      {
        "pdMin": 25,
        "pdMax": 27,
        "pe": 17
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 18
      },
      {
        "pdMin": 6,
        "pdMax": 6,
        "pe": 19
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 20
      },
      {
        "pdMin": 31,
        "pdMax": 31,
        "pe": 21
      },
      {
        "pdMin": 32,
        "pdMax": 32,
        "pe": 22
      },
      {
        "pdMin": 33,
        "pdMax": 33,
        "pe": 23
      },
      {
        "pdMin": 34,
        "pdMax": 34,
        "pe": 24
      },
      {
        "pdMin": 35,
        "pdMax": 35,
        "pe": 25
      },
      {
        "pdMin": 36,
        "pdMax": 36,
        "pe": 26
      },
      {
        "pdMin": 37,
        "pdMax": 37,
        "pe": 27
      },
      {
        "pdMin": 38,
        "pdMax": 38,
        "pe": 28
      }
    ],
    "9_8": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 2
      },
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 3
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 4
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 5
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 6
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 7
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 8
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 9
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 10
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 11
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 12
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 13
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 14
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 15
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 16
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 17
      },
      {
        "pdMin": 4,
        "pdMax": 4,
        "pe": 18
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 19
      },
      {
        "pdMin": 31,
        "pdMax": 31,
        "pe": 20
      },
      {
        "pdMin": 32,
        "pdMax": 32,
        "pe": 21
      },
      {
        "pdMin": 33,
        "pdMax": 33,
        "pe": 22
      },
      {
        "pdMin": 34,
        "pdMax": 34,
        "pe": 23
      },
      {
        "pdMin": 35,
        "pdMax": 35,
        "pe": 24
      },
      {
        "pdMin": 36,
        "pdMax": 36,
        "pe": 25
      },
      {
        "pdMin": 37,
        "pdMax": 37,
        "pe": 26
      },
      {
        "pdMin": 38,
        "pdMax": 38,
        "pe": 27
      }
    ],
    "10_0": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 2
      },
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 3
      },
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 4
      },
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 5
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 6
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 7
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 8
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 9
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 10
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 11
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 12
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 13
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 14
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 15
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 16
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 17
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 18
      },
      {
        "pdMin": 31,
        "pdMax": 31,
        "pe": 19
      },
      {
        "pdMin": 32,
        "pdMax": 32,
        "pe": 20
      },
      {
        "pdMin": 33,
        "pdMax": 33,
        "pe": 21
      },
      {
        "pdMin": 34,
        "pdMax": 34,
        "pe": 22
      },
      {
        "pdMin": 35,
        "pdMax": 35,
        "pe": 23
      },
      {
        "pdMin": 36,
        "pdMax": 36,
        "pe": 24
      },
      {
        "pdMin": 37,
        "pdMax": 37,
        "pe": 25
      },
      {
        "pdMin": 38,
        "pdMax": 38,
        "pe": 26
      }
    ],
    "10_4": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 2
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 3
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 4
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 5
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 6
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 7
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 8
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 9
      },
      {
        "pdMin": 4,
        "pdMax": 4,
        "pe": 10
      },
      {
        "pdMin": 4,
        "pdMax": 4,
        "pe": 11
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 12
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 13
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 14
      },
      {
        "pdMin": 6,
        "pdMax": 6,
        "pe": 15
      },
      {
        "pdMin": 6,
        "pdMax": 6,
        "pe": 16
      },
      {
        "pdMin": 7,
        "pdMax": 7,
        "pe": 17
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 18
      },
      {
        "pdMin": 31,
        "pdMax": 31,
        "pe": 19
      },
      {
        "pdMin": 32,
        "pdMax": 32,
        "pe": 20
      },
      {
        "pdMin": 33,
        "pdMax": 33,
        "pe": 21
      },
      {
        "pdMin": 34,
        "pdMax": 34,
        "pe": 22
      },
      {
        "pdMin": 35,
        "pdMax": 35,
        "pe": 23
      },
      {
        "pdMin": 36,
        "pdMax": 36,
        "pe": 24
      },
      {
        "pdMin": 37,
        "pdMax": 37,
        "pe": 25
      },
      {
        "pdMin": 38,
        "pdMax": 38,
        "pe": 26
      }
    ],
    "10_8": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 2
      },
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 3
      },
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 4
      },
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 5
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 6
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 7
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 8
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 9
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 10
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 11
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 12
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 13
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 14
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 15
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 16
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 17
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 18
      },
      {
        "pdMin": 32,
        "pdMax": 32,
        "pe": 19
      },
      {
        "pdMin": 33,
        "pdMax": 33,
        "pe": 20
      },
      {
        "pdMin": 34,
        "pdMax": 34,
        "pe": 21
      },
      {
        "pdMin": 35,
        "pdMax": 35,
        "pe": 22
      },
      {
        "pdMin": 36,
        "pdMax": 36,
        "pe": 23
      },
      {
        "pdMin": 37,
        "pdMax": 37,
        "pe": 24
      },
      {
        "pdMin": 38,
        "pdMax": 38,
        "pe": 25
      }
    ],
    "11_0": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 4
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 5
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 6
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 7
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 8
      },
      {
        "pdMin": 15,
        "pdMax": 15,
        "pe": 9
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 10
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 11
      },
      {
        "pdMin": 20,
        "pdMax": 21,
        "pe": 12
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 13
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 14
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 15
      },
      {
        "pdMin": 27,
        "pdMax": 28,
        "pe": 16
      },
      {
        "pdMin": 29,
        "pdMax": 31,
        "pe": 17
      },
      {
        "pdMin": 32,
        "pdMax": 32,
        "pe": 18
      },
      {
        "pdMin": 33,
        "pdMax": 33,
        "pe": 19
      },
      {
        "pdMin": 34,
        "pdMax": 34,
        "pe": 20
      },
      {
        "pdMin": 35,
        "pdMax": 35,
        "pe": 21
      },
      {
        "pdMin": 36,
        "pdMax": 36,
        "pe": 22
      },
      {
        "pdMin": 37,
        "pdMax": 37,
        "pe": 23
      },
      {
        "pdMin": 38,
        "pdMax": 38,
        "pe": 24
      }
    ],
    "11_4": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 4
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 5
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 6
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 7
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 8
      },
      {
        "pdMin": 15,
        "pdMax": 15,
        "pe": 9
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 10
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 11
      },
      {
        "pdMin": 20,
        "pdMax": 21,
        "pe": 12
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 13
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 14
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 15
      },
      {
        "pdMin": 27,
        "pdMax": 28,
        "pe": 16
      },
      {
        "pdMin": 29,
        "pdMax": 31,
        "pe": 17
      },
      {
        "pdMin": 32,
        "pdMax": 32,
        "pe": 18
      },
      {
        "pdMin": 33,
        "pdMax": 33,
        "pe": 19
      },
      {
        "pdMin": 34,
        "pdMax": 34,
        "pe": 20
      },
      {
        "pdMin": 35,
        "pdMax": 35,
        "pe": 21
      },
      {
        "pdMin": 36,
        "pdMax": 36,
        "pe": 22
      },
      {
        "pdMin": 37,
        "pdMax": 37,
        "pe": 23
      },
      {
        "pdMin": 38,
        "pdMax": 38,
        "pe": 24
      }
    ],
    "11_8": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 3
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 4
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 5
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 6
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 7
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 8
      },
      {
        "pdMin": 15,
        "pdMax": 16,
        "pe": 9
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 10
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 11
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 12
      },
      {
        "pdMin": 23,
        "pdMax": 23,
        "pe": 13
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 14
      },
      {
        "pdMin": 26,
        "pdMax": 27,
        "pe": 15
      },
      {
        "pdMin": 28,
        "pdMax": 29,
        "pe": 16
      },
      {
        "pdMin": 30,
        "pdMax": 32,
        "pe": 17
      },
      {
        "pdMin": 33,
        "pdMax": 33,
        "pe": 18
      },
      {
        "pdMin": 34,
        "pdMax": 34,
        "pe": 19
      },
      {
        "pdMin": 35,
        "pdMax": 35,
        "pe": 20
      },
      {
        "pdMin": 36,
        "pdMax": 36,
        "pe": 21
      },
      {
        "pdMin": 37,
        "pdMax": 37,
        "pe": 22
      },
      {
        "pdMin": 38,
        "pdMax": 38,
        "pe": 23
      }
    ],
    "12_0": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 3
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 4
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 5
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 6
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 7
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 8
      },
      {
        "pdMin": 15,
        "pdMax": 16,
        "pe": 9
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 10
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 11
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 12
      },
      {
        "pdMin": 23,
        "pdMax": 23,
        "pe": 13
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 14
      },
      {
        "pdMin": 26,
        "pdMax": 27,
        "pe": 15
      },
      {
        "pdMin": 28,
        "pdMax": 29,
        "pe": 16
      },
      {
        "pdMin": 30,
        "pdMax": 32,
        "pe": 17
      },
      {
        "pdMin": 33,
        "pdMax": 33,
        "pe": 18
      },
      {
        "pdMin": 34,
        "pdMax": 34,
        "pe": 19
      },
      {
        "pdMin": 35,
        "pdMax": 35,
        "pe": 20
      },
      {
        "pdMin": 36,
        "pdMax": 36,
        "pe": 21
      },
      {
        "pdMin": 37,
        "pdMax": 37,
        "pe": 22
      },
      {
        "pdMin": 38,
        "pdMax": 38,
        "pe": 23
      }
    ],
    "12_4": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 3
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 4
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 5
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 6
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 7
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 8
      },
      {
        "pdMin": 16,
        "pdMax": 16,
        "pe": 9
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 10
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 11
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 12
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 13
      },
      {
        "pdMin": 25,
        "pdMax": 26,
        "pe": 14
      },
      {
        "pdMin": 27,
        "pdMax": 28,
        "pe": 15
      },
      {
        "pdMin": 29,
        "pdMax": 30,
        "pe": 16
      },
      {
        "pdMin": 31,
        "pdMax": 33,
        "pe": 17
      },
      {
        "pdMin": 34,
        "pdMax": 34,
        "pe": 18
      },
      {
        "pdMin": 35,
        "pdMax": 35,
        "pe": 19
      },
      {
        "pdMin": 36,
        "pdMax": 36,
        "pe": 20
      },
      {
        "pdMin": 37,
        "pdMax": 37,
        "pe": 21
      },
      {
        "pdMin": 38,
        "pdMax": 38,
        "pe": 22
      }
    ],
    "12_8": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 3
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 4
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 5
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 6
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 7
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 8
      },
      {
        "pdMin": 16,
        "pdMax": 16,
        "pe": 9
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 10
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 11
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 12
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 13
      },
      {
        "pdMin": 25,
        "pdMax": 26,
        "pe": 14
      },
      {
        "pdMin": 27,
        "pdMax": 28,
        "pe": 15
      },
      {
        "pdMin": 29,
        "pdMax": 30,
        "pe": 16
      },
      {
        "pdMin": 31,
        "pdMax": 33,
        "pe": 17
      },
      {
        "pdMin": 34,
        "pdMax": 34,
        "pe": 18
      },
      {
        "pdMin": 35,
        "pdMax": 35,
        "pe": 19
      },
      {
        "pdMin": 36,
        "pdMax": 36,
        "pe": 20
      },
      {
        "pdMin": 37,
        "pdMax": 37,
        "pe": 21
      },
      {
        "pdMin": 38,
        "pdMax": 38,
        "pe": 22
      }
    ],
    "13_0": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 3
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 4
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 5
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 6
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 7
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 8
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 9
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 10
      },
      {
        "pdMin": 20,
        "pdMax": 21,
        "pe": 11
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 12
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 13
      },
      {
        "pdMin": 26,
        "pdMax": 27,
        "pe": 14
      },
      {
        "pdMin": 28,
        "pdMax": 29,
        "pe": 15
      },
      {
        "pdMin": 30,
        "pdMax": 31,
        "pe": 16
      },
      {
        "pdMin": 32,
        "pdMax": 34,
        "pe": 17
      },
      {
        "pdMin": 35,
        "pdMax": 35,
        "pe": 18
      },
      {
        "pdMin": 36,
        "pdMax": 36,
        "pe": 19
      },
      {
        "pdMin": 37,
        "pdMax": 37,
        "pe": 20
      },
      {
        "pdMin": 38,
        "pdMax": 38,
        "pe": 21
      }
    ],
    "13_4": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 3
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 4
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 5
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 6
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 7
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 8
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 9
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 10
      },
      {
        "pdMin": 20,
        "pdMax": 21,
        "pe": 11
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 12
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 13
      },
      {
        "pdMin": 26,
        "pdMax": 27,
        "pe": 14
      },
      {
        "pdMin": 28,
        "pdMax": 29,
        "pe": 15
      },
      {
        "pdMin": 30,
        "pdMax": 31,
        "pe": 16
      },
      {
        "pdMin": 32,
        "pdMax": 34,
        "pe": 17
      },
      {
        "pdMin": 35,
        "pdMax": 35,
        "pe": 18
      },
      {
        "pdMin": 36,
        "pdMax": 36,
        "pe": 19
      },
      {
        "pdMin": 37,
        "pdMax": 37,
        "pe": 20
      },
      {
        "pdMin": 38,
        "pdMax": 38,
        "pe": 21
      }
    ],
    "13_8": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 3
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 4
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 5
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 6
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 7
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 8
      },
      {
        "pdMin": 16,
        "pdMax": 18,
        "pe": 9
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 10
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 11
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 12
      },
      {
        "pdMin": 25,
        "pdMax": 26,
        "pe": 13
      },
      {
        "pdMin": 27,
        "pdMax": 28,
        "pe": 14
      },
      {
        "pdMin": 29,
        "pdMax": 30,
        "pe": 15
      },
      {
        "pdMin": 31,
        "pdMax": 32,
        "pe": 16
      },
      {
        "pdMin": 33,
        "pdMax": 35,
        "pe": 17
      },
      {
        "pdMin": 36,
        "pdMax": 36,
        "pe": 18
      },
      {
        "pdMin": 37,
        "pdMax": 37,
        "pe": 19
      },
      {
        "pdMin": 38,
        "pdMax": 38,
        "pe": 20
      }
    ],
    "14_0": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 3
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 4
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 5
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 6
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 7
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 8
      },
      {
        "pdMin": 16,
        "pdMax": 18,
        "pe": 9
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 10
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 11
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 12
      },
      {
        "pdMin": 25,
        "pdMax": 26,
        "pe": 13
      },
      {
        "pdMin": 27,
        "pdMax": 28,
        "pe": 14
      },
      {
        "pdMin": 29,
        "pdMax": 30,
        "pe": 15
      },
      {
        "pdMin": 31,
        "pdMax": 32,
        "pe": 16
      },
      {
        "pdMin": 33,
        "pdMax": 35,
        "pe": 17
      },
      {
        "pdMin": 36,
        "pdMax": 36,
        "pe": 18
      },
      {
        "pdMin": 37,
        "pdMax": 37,
        "pe": 19
      },
      {
        "pdMin": 38,
        "pdMax": 38,
        "pe": 20
      }
    ],
    "14_4": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 3
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 4
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 5
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 6
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 7
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 8
      },
      {
        "pdMin": 16,
        "pdMax": 18,
        "pe": 9
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 10
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 11
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 12
      },
      {
        "pdMin": 25,
        "pdMax": 26,
        "pe": 13
      },
      {
        "pdMin": 27,
        "pdMax": 28,
        "pe": 14
      },
      {
        "pdMin": 29,
        "pdMax": 30,
        "pe": 15
      },
      {
        "pdMin": 31,
        "pdMax": 32,
        "pe": 16
      },
      {
        "pdMin": 33,
        "pdMax": 35,
        "pe": 17
      },
      {
        "pdMin": 36,
        "pdMax": 36,
        "pe": 18
      },
      {
        "pdMin": 37,
        "pdMax": 37,
        "pe": 19
      },
      {
        "pdMin": 38,
        "pdMax": 38,
        "pe": 20
      }
    ],
    "14_8": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 3
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 4
      },
      {
        "pdMin": 8,
        "pdMax": 10,
        "pe": 5
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 6
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 7
      },
      {
        "pdMin": 15,
        "pdMax": 16,
        "pe": 8
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 9
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 10
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 11
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 12
      },
      {
        "pdMin": 25,
        "pdMax": 27,
        "pe": 13
      },
      {
        "pdMin": 28,
        "pdMax": 29,
        "pe": 14
      },
      {
        "pdMin": 30,
        "pdMax": 31,
        "pe": 15
      },
      {
        "pdMin": 32,
        "pdMax": 33,
        "pe": 16
      },
      {
        "pdMin": 34,
        "pdMax": 36,
        "pe": 17
      },
      {
        "pdMin": 37,
        "pdMax": 37,
        "pe": 18
      },
      {
        "pdMin": 38,
        "pdMax": 38,
        "pe": 19
      }
    ],
    "15_0": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 3
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 4
      },
      {
        "pdMin": 8,
        "pdMax": 10,
        "pe": 5
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 6
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 7
      },
      {
        "pdMin": 15,
        "pdMax": 16,
        "pe": 8
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 9
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 10
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 11
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 12
      },
      {
        "pdMin": 25,
        "pdMax": 27,
        "pe": 13
      },
      {
        "pdMin": 28,
        "pdMax": 29,
        "pe": 14
      },
      {
        "pdMin": 30,
        "pdMax": 31,
        "pe": 15
      },
      {
        "pdMin": 32,
        "pdMax": 33,
        "pe": 16
      },
      {
        "pdMin": 34,
        "pdMax": 36,
        "pe": 17
      },
      {
        "pdMin": 37,
        "pdMax": 37,
        "pe": 18
      },
      {
        "pdMin": 38,
        "pdMax": 38,
        "pe": 19
      }
    ],
    "15_4": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 3
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 4
      },
      {
        "pdMin": 8,
        "pdMax": 10,
        "pe": 5
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 6
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 7
      },
      {
        "pdMin": 15,
        "pdMax": 16,
        "pe": 8
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 9
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 10
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 11
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 12
      },
      {
        "pdMin": 25,
        "pdMax": 27,
        "pe": 13
      },
      {
        "pdMin": 28,
        "pdMax": 29,
        "pe": 14
      },
      {
        "pdMin": 30,
        "pdMax": 31,
        "pe": 15
      },
      {
        "pdMin": 32,
        "pdMax": 33,
        "pe": 16
      },
      {
        "pdMin": 34,
        "pdMax": 36,
        "pe": 17
      },
      {
        "pdMin": 37,
        "pdMax": 37,
        "pe": 18
      },
      {
        "pdMin": 38,
        "pdMax": 38,
        "pe": 19
      }
    ],
    "15_8": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 3
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 4
      },
      {
        "pdMin": 8,
        "pdMax": 10,
        "pe": 5
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 6
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 7
      },
      {
        "pdMin": 15,
        "pdMax": 16,
        "pe": 8
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 9
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 10
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 11
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 12
      },
      {
        "pdMin": 25,
        "pdMax": 27,
        "pe": 13
      },
      {
        "pdMin": 28,
        "pdMax": 29,
        "pe": 14
      },
      {
        "pdMin": 30,
        "pdMax": 31,
        "pe": 15
      },
      {
        "pdMin": 32,
        "pdMax": 33,
        "pe": 16
      },
      {
        "pdMin": 34,
        "pdMax": 36,
        "pe": 17
      },
      {
        "pdMin": 37,
        "pdMax": 37,
        "pe": 18
      },
      {
        "pdMin": 38,
        "pdMax": 38,
        "pe": 19
      }
    ],
    "16_0": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 3
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 4
      },
      {
        "pdMin": 8,
        "pdMax": 10,
        "pe": 5
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 6
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 7
      },
      {
        "pdMin": 15,
        "pdMax": 16,
        "pe": 8
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 9
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 10
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 11
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 12
      },
      {
        "pdMin": 25,
        "pdMax": 27,
        "pe": 13
      },
      {
        "pdMin": 28,
        "pdMax": 29,
        "pe": 14
      },
      {
        "pdMin": 30,
        "pdMax": 31,
        "pe": 15
      },
      {
        "pdMin": 32,
        "pdMax": 33,
        "pe": 16
      },
      {
        "pdMin": 34,
        "pdMax": 36,
        "pe": 17
      },
      {
        "pdMin": 37,
        "pdMax": 37,
        "pe": 18
      },
      {
        "pdMin": 38,
        "pdMax": 38,
        "pe": 19
      }
    ],
    "16_4": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 3
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 4
      },
      {
        "pdMin": 8,
        "pdMax": 10,
        "pe": 5
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 6
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 7
      },
      {
        "pdMin": 15,
        "pdMax": 16,
        "pe": 8
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 9
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 10
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 11
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 12
      },
      {
        "pdMin": 25,
        "pdMax": 27,
        "pe": 13
      },
      {
        "pdMin": 28,
        "pdMax": 29,
        "pe": 14
      },
      {
        "pdMin": 30,
        "pdMax": 31,
        "pe": 15
      },
      {
        "pdMin": 32,
        "pdMax": 33,
        "pe": 16
      },
      {
        "pdMin": 34,
        "pdMax": 36,
        "pe": 17
      },
      {
        "pdMin": 37,
        "pdMax": 37,
        "pe": 18
      },
      {
        "pdMin": 38,
        "pdMax": 38,
        "pe": 19
      }
    ],
    "16_8": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 3
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 4
      },
      {
        "pdMin": 8,
        "pdMax": 10,
        "pe": 5
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 6
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 7
      },
      {
        "pdMin": 15,
        "pdMax": 16,
        "pe": 8
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 9
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 10
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 11
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 12
      },
      {
        "pdMin": 25,
        "pdMax": 27,
        "pe": 13
      },
      {
        "pdMin": 28,
        "pdMax": 29,
        "pe": 14
      },
      {
        "pdMin": 30,
        "pdMax": 31,
        "pe": 15
      },
      {
        "pdMin": 32,
        "pdMax": 33,
        "pe": 16
      },
      {
        "pdMin": 34,
        "pdMax": 36,
        "pe": 17
      },
      {
        "pdMin": 37,
        "pdMax": 37,
        "pe": 18
      },
      {
        "pdMin": 38,
        "pdMax": 38,
        "pe": 19
      }
    ]
  },
  "ari": {
    "6_0": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 2
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 3
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 4
      },
      {
        "pdMin": 4,
        "pdMax": 4,
        "pe": 5
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 6
      },
      {
        "pdMin": 6,
        "pdMax": 6,
        "pe": 7
      },
      {
        "pdMin": 7,
        "pdMax": 7,
        "pe": 8
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 9
      },
      {
        "pdMin": 10,
        "pdMax": 10,
        "pe": 10
      },
      {
        "pdMin": 11,
        "pdMax": 11,
        "pe": 11
      },
      {
        "pdMin": 12,
        "pdMax": 12,
        "pe": 12
      },
      {
        "pdMin": 13,
        "pdMax": 13,
        "pe": 13
      },
      {
        "pdMin": 14,
        "pdMax": 14,
        "pe": 14
      },
      {
        "pdMin": 15,
        "pdMax": 15,
        "pe": 15
      },
      {
        "pdMin": 16,
        "pdMax": 16,
        "pe": 16
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 17
      },
      {
        "pdMin": 19,
        "pdMax": 19,
        "pe": 18
      },
      {
        "pdMin": 20,
        "pdMax": 21,
        "pe": 19
      },
      {
        "pdMin": 22,
        "pdMax": 22,
        "pe": 20
      },
      {
        "pdMin": 23,
        "pdMax": 23,
        "pe": 21
      },
      {
        "pdMin": 24,
        "pdMax": 24,
        "pe": 22
      },
      {
        "pdMin": 25,
        "pdMax": 26,
        "pe": 23
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 24
      },
      {
        "pdMin": 28,
        "pdMax": 29,
        "pe": 25
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 26
      },
      {
        "pdMin": 31,
        "pdMax": 32,
        "pe": 27
      },
      {
        "pdMin": 33,
        "pdMax": 34,
        "pe": 28
      }
    ],
    "6_4": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 2
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 3
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 4
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 5
      },
      {
        "pdMin": 6,
        "pdMax": 6,
        "pe": 6
      },
      {
        "pdMin": 7,
        "pdMax": 7,
        "pe": 7
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 8
      },
      {
        "pdMin": 9,
        "pdMax": 9,
        "pe": 9
      },
      {
        "pdMin": 10,
        "pdMax": 10,
        "pe": 10
      },
      {
        "pdMin": 11,
        "pdMax": 11,
        "pe": 11
      },
      {
        "pdMin": 12,
        "pdMax": 12,
        "pe": 12
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 13
      },
      {
        "pdMin": 15,
        "pdMax": 15,
        "pe": 14
      },
      {
        "pdMin": 16,
        "pdMax": 16,
        "pe": 15
      },
      {
        "pdMin": 17,
        "pdMax": 17,
        "pe": 16
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 17
      },
      {
        "pdMin": 20,
        "pdMax": 20,
        "pe": 18
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 19
      },
      {
        "pdMin": 23,
        "pdMax": 23,
        "pe": 20
      },
      {
        "pdMin": 24,
        "pdMax": 24,
        "pe": 21
      },
      {
        "pdMin": 25,
        "pdMax": 26,
        "pe": 22
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 23
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 24
      },
      {
        "pdMin": 29,
        "pdMax": 30,
        "pe": 25
      },
      {
        "pdMin": 31,
        "pdMax": 31,
        "pe": 26
      },
      {
        "pdMin": 32,
        "pdMax": 33,
        "pe": 27
      },
      {
        "pdMin": 128,
        "pdMax": 128,
        "pe": 28
      }
    ],
    "6_8": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 2
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 3
      },
      {
        "pdMin": 4,
        "pdMax": 4,
        "pe": 4
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 5
      },
      {
        "pdMin": 6,
        "pdMax": 6,
        "pe": 6
      },
      {
        "pdMin": 7,
        "pdMax": 7,
        "pe": 7
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 8
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 9
      },
      {
        "pdMin": 11,
        "pdMax": 11,
        "pe": 10
      },
      {
        "pdMin": 12,
        "pdMax": 12,
        "pe": 11
      },
      {
        "pdMin": 13,
        "pdMax": 13,
        "pe": 12
      },
      {
        "pdMin": 14,
        "pdMax": 14,
        "pe": 13
      },
      {
        "pdMin": 15,
        "pdMax": 15,
        "pe": 14
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 15
      },
      {
        "pdMin": 18,
        "pdMax": 18,
        "pe": 16
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 17
      },
      {
        "pdMin": 21,
        "pdMax": 21,
        "pe": 18
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 19
      },
      {
        "pdMin": 24,
        "pdMax": 24,
        "pe": 20
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 21
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 22
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 23
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 24
      },
      {
        "pdMin": 30,
        "pdMax": 31,
        "pe": 25
      },
      {
        "pdMin": 32,
        "pdMax": 32,
        "pe": 26
      },
      {
        "pdMin": 33,
        "pdMax": 33,
        "pe": 27
      },
      {
        "pdMin": 128,
        "pdMax": 128,
        "pe": 28
      }
    ],
    "7_0": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 2
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 3
      },
      {
        "pdMin": 4,
        "pdMax": 4,
        "pe": 4
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 5
      },
      {
        "pdMin": 6,
        "pdMax": 6,
        "pe": 6
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 7
      },
      {
        "pdMin": 9,
        "pdMax": 9,
        "pe": 8
      },
      {
        "pdMin": 10,
        "pdMax": 10,
        "pe": 9
      },
      {
        "pdMin": 11,
        "pdMax": 11,
        "pe": 10
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 11
      },
      {
        "pdMin": 14,
        "pdMax": 14,
        "pe": 12
      },
      {
        "pdMin": 15,
        "pdMax": 15,
        "pe": 13
      },
      {
        "pdMin": 16,
        "pdMax": 16,
        "pe": 14
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 15
      },
      {
        "pdMin": 19,
        "pdMax": 19,
        "pe": 16
      },
      {
        "pdMin": 20,
        "pdMax": 21,
        "pe": 17
      },
      {
        "pdMin": 22,
        "pdMax": 22,
        "pe": 18
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 19
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 20
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 21
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 22
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 23
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 24
      },
      {
        "pdMin": 30,
        "pdMax": 31,
        "pe": 25
      },
      {
        "pdMin": 32,
        "pdMax": 32,
        "pe": 26
      },
      {
        "pdMin": 33,
        "pdMax": 33,
        "pe": 27
      },
      {
        "pdMin": 34,
        "pdMax": 34,
        "pe": 28
      }
    ],
    "7_4": [
      {
        "pdMin": 0,
        "pdMax": 4,
        "pe": 1
      },
      {
        "pdMin": 5,
        "pdMax": 9,
        "pe": 2
      },
      {
        "pdMin": 10,
        "pdMax": 15,
        "pe": 3
      },
      {
        "pdMin": 16,
        "pdMax": 20,
        "pe": 4
      },
      {
        "pdMin": 21,
        "pdMax": 25,
        "pe": 5
      },
      {
        "pdMin": 26,
        "pdMax": 30,
        "pe": 6
      },
      {
        "pdMin": 31,
        "pdMax": 35,
        "pe": 7
      },
      {
        "pdMin": 36,
        "pdMax": 40,
        "pe": 8
      },
      {
        "pdMin": 41,
        "pdMax": 46,
        "pe": 9
      },
      {
        "pdMin": 47,
        "pdMax": 51,
        "pe": 10
      },
      {
        "pdMin": 52,
        "pdMax": 56,
        "pe": 11
      },
      {
        "pdMin": 57,
        "pdMax": 61,
        "pe": 12
      },
      {
        "pdMin": 62,
        "pdMax": 66,
        "pe": 13
      },
      {
        "pdMin": 67,
        "pdMax": 71,
        "pe": 14
      },
      {
        "pdMin": 72,
        "pdMax": 77,
        "pe": 15
      },
      {
        "pdMin": 78,
        "pdMax": 82,
        "pe": 16
      },
      {
        "pdMin": 83,
        "pdMax": 88,
        "pe": 17
      },
      {
        "pdMin": 89,
        "pdMax": 89,
        "pe": 18
      },
      {
        "pdMin": 24,
        "pdMax": 24,
        "pe": 19
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 20
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 21
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 22
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 23
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 24
      },
      {
        "pdMin": 31,
        "pdMax": 31,
        "pe": 25
      },
      {
        "pdMin": 32,
        "pdMax": 32,
        "pe": 26
      },
      {
        "pdMin": 33,
        "pdMax": 33,
        "pe": 27
      },
      {
        "pdMin": 34,
        "pdMax": 34,
        "pe": 28
      }
    ],
    "7_8": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 1,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 3
      },
      {
        "pdMin": 4,
        "pdMax": 4,
        "pe": 4
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 5
      },
      {
        "pdMin": 7,
        "pdMax": 7,
        "pe": 6
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 7
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 8
      },
      {
        "pdMin": 11,
        "pdMax": 11,
        "pe": 9
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 10
      },
      {
        "pdMin": 14,
        "pdMax": 14,
        "pe": 11
      },
      {
        "pdMin": 15,
        "pdMax": 15,
        "pe": 12
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 13
      },
      {
        "pdMin": 18,
        "pdMax": 18,
        "pe": 14
      },
      {
        "pdMin": 19,
        "pdMax": 19,
        "pe": 15
      },
      {
        "pdMin": 20,
        "pdMax": 21,
        "pe": 16
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 17
      },
      {
        "pdMin": 24,
        "pdMax": 24,
        "pe": 18
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 19
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 20
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 21
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 22
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 23
      },
      {
        "pdMin": 31,
        "pdMax": 31,
        "pe": 24
      },
      {
        "pdMin": 32,
        "pdMax": 32,
        "pe": 25
      },
      {
        "pdMin": 33,
        "pdMax": 33,
        "pe": 26
      },
      {
        "pdMin": 34,
        "pdMax": 34,
        "pe": 27
      }
    ],
    "8_0": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 1,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 3
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 4
      },
      {
        "pdMin": 6,
        "pdMax": 6,
        "pe": 5
      },
      {
        "pdMin": 7,
        "pdMax": 7,
        "pe": 6
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 7
      },
      {
        "pdMin": 10,
        "pdMax": 10,
        "pe": 8
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 9
      },
      {
        "pdMin": 13,
        "pdMax": 13,
        "pe": 10
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 11
      },
      {
        "pdMin": 16,
        "pdMax": 16,
        "pe": 12
      },
      {
        "pdMin": 17,
        "pdMax": 17,
        "pe": 13
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 14
      },
      {
        "pdMin": 20,
        "pdMax": 20,
        "pe": 15
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 16
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 17
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 18
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 19
      },
      {
        "pdMin": 7,
        "pdMax": 7,
        "pe": 20
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 21
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 22
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 23
      },
      {
        "pdMin": 31,
        "pdMax": 31,
        "pe": 24
      },
      {
        "pdMin": 32,
        "pdMax": 32,
        "pe": 25
      },
      {
        "pdMin": 33,
        "pdMax": 33,
        "pe": 26
      },
      {
        "pdMin": 34,
        "pdMax": 34,
        "pe": 27
      }
    ],
    "8_4": [
      {
        "pdMin": 0,
        "pdMax": 5,
        "pe": 1
      },
      {
        "pdMin": 6,
        "pdMax": 10,
        "pe": 2
      },
      {
        "pdMin": 11,
        "pdMax": 16,
        "pe": 3
      },
      {
        "pdMin": 17,
        "pdMax": 21,
        "pe": 4
      },
      {
        "pdMin": 22,
        "pdMax": 27,
        "pe": 5
      },
      {
        "pdMin": 28,
        "pdMax": 33,
        "pe": 6
      },
      {
        "pdMin": 34,
        "pdMax": 38,
        "pe": 7
      },
      {
        "pdMin": 39,
        "pdMax": 44,
        "pe": 8
      },
      {
        "pdMin": 45,
        "pdMax": 49,
        "pe": 9
      },
      {
        "pdMin": 50,
        "pdMax": 55,
        "pe": 10
      },
      {
        "pdMin": 56,
        "pdMax": 60,
        "pe": 11
      },
      {
        "pdMin": 61,
        "pdMax": 66,
        "pe": 12
      },
      {
        "pdMin": 67,
        "pdMax": 72,
        "pe": 13
      },
      {
        "pdMin": 73,
        "pdMax": 77,
        "pe": 14
      },
      {
        "pdMin": 78,
        "pdMax": 83,
        "pe": 15
      },
      {
        "pdMin": 84,
        "pdMax": 88,
        "pe": 16
      },
      {
        "pdMin": 89,
        "pdMax": 95,
        "pe": 17
      },
      {
        "pdMin": 96,
        "pdMax": 96,
        "pe": 18
      },
      {
        "pdMin": 7,
        "pdMax": 7,
        "pe": 19
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 20
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 21
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 22
      },
      {
        "pdMin": 31,
        "pdMax": 31,
        "pe": 23
      },
      {
        "pdMin": 32,
        "pdMax": 32,
        "pe": 24
      },
      {
        "pdMin": 33,
        "pdMax": 33,
        "pe": 25
      },
      {
        "pdMin": 34,
        "pdMax": 34,
        "pe": 26
      }
    ],
    "8_8": [
      {
        "pdMin": 0,
        "pdMax": 5,
        "pe": 1
      },
      {
        "pdMin": 6,
        "pdMax": 10,
        "pe": 2
      },
      {
        "pdMin": 11,
        "pdMax": 16,
        "pe": 3
      },
      {
        "pdMin": 17,
        "pdMax": 22,
        "pe": 4
      },
      {
        "pdMin": 23,
        "pdMax": 28,
        "pe": 5
      },
      {
        "pdMin": 29,
        "pdMax": 33,
        "pe": 6
      },
      {
        "pdMin": 34,
        "pdMax": 39,
        "pe": 7
      },
      {
        "pdMin": 40,
        "pdMax": 45,
        "pe": 8
      },
      {
        "pdMin": 46,
        "pdMax": 50,
        "pe": 9
      },
      {
        "pdMin": 51,
        "pdMax": 56,
        "pe": 10
      },
      {
        "pdMin": 57,
        "pdMax": 62,
        "pe": 11
      },
      {
        "pdMin": 63,
        "pdMax": 67,
        "pe": 12
      },
      {
        "pdMin": 68,
        "pdMax": 73,
        "pe": 13
      },
      {
        "pdMin": 74,
        "pdMax": 79,
        "pe": 14
      },
      {
        "pdMin": 80,
        "pdMax": 85,
        "pe": 15
      },
      {
        "pdMin": 86,
        "pdMax": 90,
        "pe": 16
      },
      {
        "pdMin": 91,
        "pdMax": 97,
        "pe": 17
      },
      {
        "pdMin": 98,
        "pdMax": 98,
        "pe": 18
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 19
      },
      {
        "pdMin": 9,
        "pdMax": 9,
        "pe": 20
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 21
      },
      {
        "pdMin": 31,
        "pdMax": 31,
        "pe": 22
      },
      {
        "pdMin": 32,
        "pdMax": 32,
        "pe": 23
      },
      {
        "pdMin": 33,
        "pdMax": 33,
        "pe": 24
      },
      {
        "pdMin": 34,
        "pdMax": 34,
        "pe": 25
      }
    ],
    "9_0": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 4
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 5
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 6
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 7
      },
      {
        "pdMin": 11,
        "pdMax": 11,
        "pe": 8
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 9
      },
      {
        "pdMin": 14,
        "pdMax": 14,
        "pe": 10
      },
      {
        "pdMin": 15,
        "pdMax": 16,
        "pe": 11
      },
      {
        "pdMin": 17,
        "pdMax": 17,
        "pe": 12
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 13
      },
      {
        "pdMin": 20,
        "pdMax": 20,
        "pe": 14
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 15
      },
      {
        "pdMin": 23,
        "pdMax": 23,
        "pe": 16
      },
      {
        "pdMin": 24,
        "pdMax": 26,
        "pe": 17
      },
      {
        "pdMin": 27,
        "pdMax": 27,
        "pe": 18
      },
      {
        "pdMin": 9,
        "pdMax": 9,
        "pe": 19
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 20
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 21
      },
      {
        "pdMin": 31,
        "pdMax": 31,
        "pe": 22
      },
      {
        "pdMin": 32,
        "pdMax": 32,
        "pe": 23
      },
      {
        "pdMin": 33,
        "pdMax": 33,
        "pe": 24
      },
      {
        "pdMin": 34,
        "pdMax": 34,
        "pe": 25
      }
    ],
    "9_4": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 5,
        "pe": 4
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 5
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 6
      },
      {
        "pdMin": 10,
        "pdMax": 10,
        "pe": 7
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 8
      },
      {
        "pdMin": 13,
        "pdMax": 13,
        "pe": 9
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 10
      },
      {
        "pdMin": 16,
        "pdMax": 16,
        "pe": 11
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 12
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 13
      },
      {
        "pdMin": 21,
        "pdMax": 21,
        "pe": 14
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 15
      },
      {
        "pdMin": 24,
        "pdMax": 24,
        "pe": 16
      },
      {
        "pdMin": 25,
        "pdMax": 27,
        "pe": 17
      },
      {
        "pdMin": 28,
        "pdMax": 28,
        "pe": 18
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 19
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 20
      },
      {
        "pdMin": 31,
        "pdMax": 31,
        "pe": 21
      },
      {
        "pdMin": 32,
        "pdMax": 32,
        "pe": 22
      },
      {
        "pdMin": 33,
        "pdMax": 33,
        "pe": 23
      },
      {
        "pdMin": 34,
        "pdMax": 34,
        "pe": 24
      }
    ],
    "9_8": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 4
      },
      {
        "pdMin": 7,
        "pdMax": 7,
        "pe": 5
      },
      {
        "pdMin": 8,
        "pdMax": 9,
        "pe": 6
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 7
      },
      {
        "pdMin": 12,
        "pdMax": 12,
        "pe": 8
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 9
      },
      {
        "pdMin": 15,
        "pdMax": 15,
        "pe": 10
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 11
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 12
      },
      {
        "pdMin": 20,
        "pdMax": 20,
        "pe": 13
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 14
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 15
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 16
      },
      {
        "pdMin": 26,
        "pdMax": 28,
        "pe": 17
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 18
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 19
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 20
      },
      {
        "pdMin": 31,
        "pdMax": 31,
        "pe": 21
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 22
      },
      {
        "pdMin": 33,
        "pdMax": 33,
        "pe": 23
      },
      {
        "pdMin": 34,
        "pdMax": 34,
        "pe": 24
      }
    ],
    "10_0": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 2
      },
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 3
      },
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 4
      },
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 5
      },
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 6
      },
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 7
      },
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 8
      },
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 9
      },
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 10
      },
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 11
      },
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 12
      },
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 13
      },
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 14
      },
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 15
      },
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 16
      },
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 17
      },
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 18
      },
      {
        "pdMin": 29,
        "pdMax": 29,
        "pe": 19
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 20
      },
      {
        "pdMin": 31,
        "pdMax": 31,
        "pe": 21
      },
      {
        "pdMin": 32,
        "pdMax": 32,
        "pe": 22
      },
      {
        "pdMin": 33,
        "pdMax": 33,
        "pe": 23
      },
      {
        "pdMin": 34,
        "pdMax": 34,
        "pe": 24
      }
    ],
    "10_4": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 2
      },
      {
        "pdMin": 3,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 4
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 5
      },
      {
        "pdMin": 9,
        "pdMax": 9,
        "pe": 6
      },
      {
        "pdMin": 10,
        "pdMax": 11,
        "pe": 7
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 8
      },
      {
        "pdMin": 14,
        "pdMax": 14,
        "pe": 9
      },
      {
        "pdMin": 15,
        "pdMax": 16,
        "pe": 10
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 11
      },
      {
        "pdMin": 19,
        "pdMax": 19,
        "pe": 12
      },
      {
        "pdMin": 20,
        "pdMax": 21,
        "pe": 13
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 14
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 15
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 16
      },
      {
        "pdMin": 27,
        "pdMax": 29,
        "pe": 17
      },
      {
        "pdMin": 30,
        "pdMax": 30,
        "pe": 18
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 19
      },
      {
        "pdMin": 31,
        "pdMax": 31,
        "pe": 20
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 21
      },
      {
        "pdMin": 33,
        "pdMax": 33,
        "pe": 22
      },
      {
        "pdMin": 34,
        "pdMax": 34,
        "pe": 23
      }
    ],
    "10_8": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 2
      },
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 3
      },
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 4
      },
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 5
      },
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 6
      },
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 7
      },
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 8
      },
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 9
      },
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 10
      },
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 11
      },
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 12
      },
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 13
      },
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 14
      },
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 15
      },
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 16
      },
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 17
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 18
      },
      {
        "pdMin": 31,
        "pdMax": 31,
        "pe": 19
      },
      {
        "pdMin": 32,
        "pdMax": 32,
        "pe": 20
      },
      {
        "pdMin": 33,
        "pdMax": 33,
        "pe": 21
      },
      {
        "pdMin": 34,
        "pdMax": 34,
        "pe": 22
      }
    ],
    "11_0": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 2
      },
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 3
      },
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 4
      },
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 5
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 6
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 7
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 8
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 9
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 10
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 11
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 12
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 13
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 14
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 15
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 16
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 17
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 18
      },
      {
        "pdMin": 31,
        "pdMax": 31,
        "pe": 19
      },
      {
        "pdMin": 32,
        "pdMax": 32,
        "pe": 20
      },
      {
        "pdMin": 33,
        "pdMax": 33,
        "pe": 21
      },
      {
        "pdMin": 34,
        "pdMax": 34,
        "pe": 22
      }
    ],
    "11_4": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 2
      },
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 3
      },
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 4
      },
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 5
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 6
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 7
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 8
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 9
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 10
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 11
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 12
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 13
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 14
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 15
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 16
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 17
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 18
      },
      {
        "pdMin": 32,
        "pdMax": 32,
        "pe": 19
      },
      {
        "pdMin": 33,
        "pdMax": 33,
        "pe": 20
      },
      {
        "pdMin": 34,
        "pdMax": 34,
        "pe": 21
      }
    ],
    "11_8": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 2
      },
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 3
      },
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 4
      },
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 5
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 6
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 7
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 8
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 9
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 10
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 11
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 12
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 13
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 14
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 15
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 16
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 17
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 18
      },
      {
        "pdMin": 32,
        "pdMax": 32,
        "pe": 19
      },
      {
        "pdMin": 33,
        "pdMax": 33,
        "pe": 20
      },
      {
        "pdMin": 34,
        "pdMax": 34,
        "pe": 21
      }
    ],
    "12_0": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 2
      },
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 3
      },
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 4
      },
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 5
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 6
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 7
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 8
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 9
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 10
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 11
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 12
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 13
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 14
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 15
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 16
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 17
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 18
      },
      {
        "pdMin": 32,
        "pdMax": 32,
        "pe": 19
      },
      {
        "pdMin": 33,
        "pdMax": 33,
        "pe": 20
      },
      {
        "pdMin": 34,
        "pdMax": 34,
        "pe": 21
      }
    ],
    "12_4": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 4
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 5
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 6
      },
      {
        "pdMin": 11,
        "pdMax": 11,
        "pe": 7
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 8
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 9
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 10
      },
      {
        "pdMin": 18,
        "pdMax": 18,
        "pe": 11
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 12
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 13
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 14
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 15
      },
      {
        "pdMin": 26,
        "pdMax": 27,
        "pe": 16
      },
      {
        "pdMin": 28,
        "pdMax": 30,
        "pe": 17
      },
      {
        "pdMin": 31,
        "pdMax": 31,
        "pe": 18
      },
      {
        "pdMin": 32,
        "pdMax": 32,
        "pe": 19
      },
      {
        "pdMin": 33,
        "pdMax": 33,
        "pe": 20
      },
      {
        "pdMin": 34,
        "pdMax": 34,
        "pe": 21
      }
    ],
    "12_8": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 4
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 5
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 6
      },
      {
        "pdMin": 11,
        "pdMax": 11,
        "pe": 7
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 8
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 9
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 10
      },
      {
        "pdMin": 18,
        "pdMax": 18,
        "pe": 11
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 12
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 13
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 14
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 15
      },
      {
        "pdMin": 26,
        "pdMax": 27,
        "pe": 16
      },
      {
        "pdMin": 28,
        "pdMax": 30,
        "pe": 17
      },
      {
        "pdMin": 31,
        "pdMax": 31,
        "pe": 18
      },
      {
        "pdMin": 32,
        "pdMax": 32,
        "pe": 19
      },
      {
        "pdMin": 33,
        "pdMax": 33,
        "pe": 20
      },
      {
        "pdMin": 34,
        "pdMax": 34,
        "pe": 21
      }
    ],
    "13_0": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 4
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 5
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 6
      },
      {
        "pdMin": 11,
        "pdMax": 11,
        "pe": 7
      },
      {
        "pdMin": 12,
        "pdMax": 13,
        "pe": 8
      },
      {
        "pdMin": 14,
        "pdMax": 15,
        "pe": 9
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 10
      },
      {
        "pdMin": 18,
        "pdMax": 18,
        "pe": 11
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 12
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 13
      },
      {
        "pdMin": 23,
        "pdMax": 24,
        "pe": 14
      },
      {
        "pdMin": 25,
        "pdMax": 25,
        "pe": 15
      },
      {
        "pdMin": 26,
        "pdMax": 27,
        "pe": 16
      },
      {
        "pdMin": 28,
        "pdMax": 30,
        "pe": 17
      },
      {
        "pdMin": 31,
        "pdMax": 31,
        "pe": 18
      },
      {
        "pdMin": 32,
        "pdMax": 32,
        "pe": 19
      },
      {
        "pdMin": 33,
        "pdMax": 33,
        "pe": 20
      },
      {
        "pdMin": 34,
        "pdMax": 34,
        "pe": 21
      }
    ],
    "13_4": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 4
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 5
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 6
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 7
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 8
      },
      {
        "pdMin": 15,
        "pdMax": 15,
        "pe": 9
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 10
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 11
      },
      {
        "pdMin": 20,
        "pdMax": 21,
        "pe": 12
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 13
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 14
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 15
      },
      {
        "pdMin": 27,
        "pdMax": 28,
        "pe": 16
      },
      {
        "pdMin": 29,
        "pdMax": 31,
        "pe": 17
      },
      {
        "pdMin": 32,
        "pdMax": 32,
        "pe": 18
      },
      {
        "pdMin": 33,
        "pdMax": 33,
        "pe": 19
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 20
      }
    ],
    "13_8": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 4,
        "pe": 3
      },
      {
        "pdMin": 5,
        "pdMax": 6,
        "pe": 4
      },
      {
        "pdMin": 7,
        "pdMax": 8,
        "pe": 5
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 6
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 7
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 8
      },
      {
        "pdMin": 15,
        "pdMax": 15,
        "pe": 9
      },
      {
        "pdMin": 16,
        "pdMax": 17,
        "pe": 10
      },
      {
        "pdMin": 18,
        "pdMax": 19,
        "pe": 11
      },
      {
        "pdMin": 20,
        "pdMax": 21,
        "pe": 12
      },
      {
        "pdMin": 22,
        "pdMax": 23,
        "pe": 13
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 14
      },
      {
        "pdMin": 26,
        "pdMax": 26,
        "pe": 15
      },
      {
        "pdMin": 27,
        "pdMax": 28,
        "pe": 16
      },
      {
        "pdMin": 29,
        "pdMax": 31,
        "pe": 17
      },
      {
        "pdMin": 32,
        "pdMax": 32,
        "pe": 18
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 19
      },
      {
        "pdMin": 34,
        "pdMax": 34,
        "pe": 20
      }
    ],
    "14_0": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 2
      },
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 3
      },
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 4
      },
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 5
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 6
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 7
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 8
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 9
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 10
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 11
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 12
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 13
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 14
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 15
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 16
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 17
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 18
      },
      {
        "pdMin": 33,
        "pdMax": 33,
        "pe": 19
      },
      {
        "pdMin": 34,
        "pdMax": 34,
        "pe": 20
      }
    ],
    "14_4": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 2
      },
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 3
      },
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 4
      },
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 5
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 6
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 7
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 8
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 9
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 10
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 11
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 12
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 13
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 14
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 15
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 16
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 17
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 18
      },
      {
        "pdMin": 34,
        "pdMax": 34,
        "pe": 19
      }
    ],
    "14_8": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 3
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 4
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 5
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 6
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 7
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 8
      },
      {
        "pdMin": 15,
        "pdMax": 16,
        "pe": 9
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 10
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 11
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 12
      },
      {
        "pdMin": 23,
        "pdMax": 23,
        "pe": 13
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 14
      },
      {
        "pdMin": 26,
        "pdMax": 27,
        "pe": 15
      },
      {
        "pdMin": 28,
        "pdMax": 29,
        "pe": 16
      },
      {
        "pdMin": 30,
        "pdMax": 32,
        "pe": 17
      },
      {
        "pdMin": 33,
        "pdMax": 33,
        "pe": 18
      },
      {
        "pdMin": 34,
        "pdMax": 34,
        "pe": 19
      }
    ],
    "15_0": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 3
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 4
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 5
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 6
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 7
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 8
      },
      {
        "pdMin": 15,
        "pdMax": 16,
        "pe": 9
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 10
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 11
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 12
      },
      {
        "pdMin": 23,
        "pdMax": 23,
        "pe": 13
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 14
      },
      {
        "pdMin": 26,
        "pdMax": 27,
        "pe": 15
      },
      {
        "pdMin": 28,
        "pdMax": 29,
        "pe": 16
      },
      {
        "pdMin": 30,
        "pdMax": 32,
        "pe": 17
      },
      {
        "pdMin": 33,
        "pdMax": 33,
        "pe": 18
      },
      {
        "pdMin": 34,
        "pdMax": 34,
        "pe": 19
      }
    ],
    "15_4": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 3
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 4
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 5
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 6
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 7
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 8
      },
      {
        "pdMin": 15,
        "pdMax": 16,
        "pe": 9
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 10
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 11
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 12
      },
      {
        "pdMin": 23,
        "pdMax": 23,
        "pe": 13
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 14
      },
      {
        "pdMin": 26,
        "pdMax": 27,
        "pe": 15
      },
      {
        "pdMin": 28,
        "pdMax": 29,
        "pe": 16
      },
      {
        "pdMin": 30,
        "pdMax": 32,
        "pe": 17
      },
      {
        "pdMin": 33,
        "pdMax": 33,
        "pe": 18
      },
      {
        "pdMin": 34,
        "pdMax": 34,
        "pe": 19
      }
    ],
    "15_8": [
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 1
      },
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 2
      },
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 3
      },
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 4
      },
      {
        "pdMin": 0,
        "pdMax": 0,
        "pe": 5
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 6
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 7
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 8
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 9
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 10
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 11
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 12
      },
      {
        "pdMin": 1,
        "pdMax": 1,
        "pe": 13
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 14
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 15
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 16
      },
      {
        "pdMin": 2,
        "pdMax": 2,
        "pe": 17
      },
      {
        "pdMin": 3,
        "pdMax": 3,
        "pe": 18
      },
      {
        "pdMin": 34,
        "pdMax": 34,
        "pe": 19
      }
    ],
    "16_0": [
      {
        "pdMin": 0,
        "pdMax": 1,
        "pe": 1
      },
      {
        "pdMin": 2,
        "pdMax": 3,
        "pe": 2
      },
      {
        "pdMin": 4,
        "pdMax": 5,
        "pe": 3
      },
      {
        "pdMin": 6,
        "pdMax": 7,
        "pe": 4
      },
      {
        "pdMin": 8,
        "pdMax": 8,
        "pe": 5
      },
      {
        "pdMin": 9,
        "pdMax": 10,
        "pe": 6
      },
      {
        "pdMin": 11,
        "pdMax": 12,
        "pe": 7
      },
      {
        "pdMin": 13,
        "pdMax": 14,
        "pe": 8
      },
      {
        "pdMin": 15,
        "pdMax": 16,
        "pe": 9
      },
      {
        "pdMin": 17,
        "pdMax": 18,
        "pe": 10
      },
      {
        "pdMin": 19,
        "pdMax": 20,
        "pe": 11
      },
      {
        "pdMin": 21,
        "pdMax": 22,
        "pe": 12
      },
      {
        "pdMin": 23,
        "pdMax": 23,
        "pe": 13
      },
      {
        "pdMin": 24,
        "pdMax": 25,
        "pe": 14
      },
      {
        "pdMin": 26,
        "pdMax": 27,
        "pe": 15
      },
      {
        "pdMin": 28,
        "pdMax": 29,
        "pe": 16
      },
      {
        "pdMin": 30,
        "pdMax": 32,
        "pe": 17
      },
      {
        "pdMin": 33,
        "pdMax": 33,
        "pe": 18
      },
      {
        "pdMin": 34,
        "pdMax": 34,
        "pe": 19
      }
    ]
  }
};

  /**
   * Pares (banda cuadernillo ES semestral | subtest | PD) con PE fijadas frente al manual
   * 495997789 (LATAM) cuando difieren de la base US embebida en TABLA.
   * Ver orientacion/manuales/WISC-V/495997789-WISC-V-Manual-de-Administracion-y-Correccion.pdf
   */
  var PE_EXCEPCION_MANUAL = {
    '11_0|voc|34': 15,
    '11_0|cub|49': 19,
    '10_6|cub|42': 15,
    '10_6|sim|25': 8,
    '10_6|mat|20': 11,
    '10_6|dig|24': 9,
    '10_6|cla|46': 10,
    '10_6|voc|24': 7,
    '10_6|bal|18': 9,
    '10_6|puz|21': 14,
    '10_6|pic|25': 9,
    '10_6|bus|38': 16
  };

  function bandasFallbackCuadernilloEs(bandaEdad) {
    if (bandaEdad == null || bandaEdad === '') return [bandaEdad];
    var m = /^(\d{1,2})_(0|6)$/.exec(String(bandaEdad));
    if (!m) return [bandaEdad];
    var y = m[1];
    var sem = m[2];
    if (sem === '6') return [bandaEdad, y + '_8', y + '_4', y + '_0'];
    return [bandaEdad, y + '_0', y + '_4', y + '_8'];
  }

  function pdAPE(subtestId, bandaEdad, pd) {
    if (!subtestId || bandaEdad == null || bandaEdad === '') return null;
    var p = Number(pd);
    if (Number.isNaN(p)) return null;
    var exK = String(bandaEdad) + '|' + subtestId + '|' + String(p);
    if (Object.prototype.hasOwnProperty.call(PE_EXCEPCION_MANUAL, exK)) {
      return PE_EXCEPCION_MANUAL[exK];
    }
    var bySub = TABLA[subtestId];
    if (!bySub) return null;
    var ordenBand = bandasFallbackCuadernilloEs(bandaEdad);
    for (var bi = 0; bi < ordenBand.length; bi++) {
      var bandaTry = ordenBand[bi];
      var rangos = bySub[bandaTry];
      if (!Array.isArray(rangos) || !rangos.length) continue;
      for (var i = 0; i < rangos.length; i++) {
        var r = rangos[i];
        if (p >= r.pdMin && p <= r.pdMax) {
          var pe = r.pe;
          if (typeof pe === 'number' && pe >= 1 && pe <= 19) return pe;
        }
      }
    }
    return null;
  }

  global.WiscBaremosOficiales = {
    TABLA: TABLA,
    pdAPE: pdAPE,
    procedencia: {
      documentoPdf: '495997789-WISC-V-Manual-de-Administracion-y-Correccion.pdf',
      baseTabla: 'Normas US (Technical Report #6) en TABLA; PE fuera de 1-19 ignoradas en conversion automatica.',
      excepcionesManualLatam: Object.keys(PE_EXCEPCION_MANUAL).length,
      tablasReextraidasDesdePdfUsuario: false,
      nota:
        'Las claves de edad del cuadernillo ES (semestres x_0 / x_6) se resuelven frente a TABLA probando bandas US x_0, x_4, x_8 y solo se aceptan PE entre 1 y 19, salvo PE_EXCEPCION_MANUAL.'
    }
  };
})(typeof window !== 'undefined' ? window : this);
