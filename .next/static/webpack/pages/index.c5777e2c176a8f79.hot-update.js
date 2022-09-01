"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/lib/service/glucose.ts":
/*!************************************!*\
  !*** ./src/lib/service/glucose.ts ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addGlucose\": function() { return /* binding */ addGlucose; },\n/* harmony export */   \"deleteGlucose\": function() { return /* binding */ deleteGlucose; },\n/* harmony export */   \"getAllGlucose\": function() { return /* binding */ getAllGlucose; },\n/* harmony export */   \"glucoseLastThreeDays\": function() { return /* binding */ glucoseLastThreeDays; },\n/* harmony export */   \"updateGLucose\": function() { return /* binding */ updateGLucose; }\n/* harmony export */ });\n/* harmony import */ var _home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @firebase/firestore */ \"./node_modules/@firebase/firestore/dist/index.esm2017.js\");\n/* harmony import */ var lib_firebase_initFirebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lib/firebase/initFirebase */ \"./src/lib/firebase/initFirebase.ts\");\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\n\n\nvar todosCollection = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(lib_firebase_initFirebase__WEBPACK_IMPORTED_MODULE_4__.firestore, \"glucose\");\nvar getAllGlucose = /*#__PURE__*/function () {\n  var _ref = (0,_home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {\n    var glucoseQuery, querySnapshot, results, allGlucose;\n    return _home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            glucoseQuery = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)(todosCollection);\n            _context.next = 3;\n            return (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)(glucoseQuery);\n\n          case 3:\n            querySnapshot = _context.sent;\n            results = [];\n            querySnapshot.forEach(function (snapshot) {\n              return results.push(snapshot);\n            });\n            allGlucose = results.map(function (data) {\n              return _objectSpread(_objectSpread({}, data.data()), {}, {\n                documentId: data.id\n              });\n            });\n            return _context.abrupt(\"return\", allGlucose.sort(function (a, b) {\n              return new Date(b.date) - new Date(a.date);\n            }));\n\n          case 8:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function getAllGlucose() {\n    return _ref.apply(this, arguments);\n  };\n}();\nvar updateGLucose = /*#__PURE__*/function () {\n  var _ref2 = (0,_home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2(documentId, glucoseData) {\n    var _glucose;\n\n    return _home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _glucose = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(lib_firebase_initFirebase__WEBPACK_IMPORTED_MODULE_4__.firestore, \"glucose/\".concat(documentId));\n            _context2.next = 3;\n            return (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.updateDoc)(_glucose, _objectSpread({}, glucoseData));\n\n          case 3:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function updateGLucose(_x, _x2) {\n    return _ref2.apply(this, arguments);\n  };\n}();\nvar deleteGlucose = /*#__PURE__*/function () {\n  var _ref3 = (0,_home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3(documentId) {\n    var _glucose;\n\n    return _home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            _glucose = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(lib_firebase_initFirebase__WEBPACK_IMPORTED_MODULE_4__.firestore, \"glucose/\".concat(documentId));\n            _context3.next = 3;\n            return (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.deleteDoc)(_glucose);\n\n          case 3:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3);\n  }));\n\n  return function deleteGlucose(_x3) {\n    return _ref3.apply(this, arguments);\n  };\n}();\nvar addGlucose = /*#__PURE__*/function () {\n  var _ref4 = (0,_home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4(glucoseData) {\n    var timestamp, _glucose;\n\n    return _home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {\n      while (1) {\n        switch (_context4.prev = _context4.next) {\n          case 0:\n            timestamp = Date.now().toString();\n            _glucose = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(lib_firebase_initFirebase__WEBPACK_IMPORTED_MODULE_4__.firestore, \"glucose/\".concat(timestamp));\n            _context4.prev = 2;\n            _context4.next = 5;\n            return (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.setDoc)(_glucose, glucoseData);\n\n          case 5:\n            _context4.next = 10;\n            break;\n\n          case 7:\n            _context4.prev = 7;\n            _context4.t0 = _context4[\"catch\"](2);\n            console.log(\"An error occurred while adding todo\");\n\n          case 10:\n          case \"end\":\n            return _context4.stop();\n        }\n      }\n    }, _callee4, null, [[2, 7]]);\n  }));\n\n  return function addGlucose(_x4) {\n    return _ref4.apply(this, arguments);\n  };\n}();\nvar glucoseLastThreeDays = /*#__PURE__*/function () {\n  var _ref5 = (0,_home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee5() {\n    var allGlucose, filter;\n    return _home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee5$(_context5) {\n      while (1) {\n        switch (_context5.prev = _context5.next) {\n          case 0:\n            _context5.next = 2;\n            return getAllGlucose();\n\n          case 2:\n            allGlucose = _context5.sent;\n            filter = allGlucose.filter(function (item) {\n              return getDateFor(item.date) <= 3;\n            });\n            return _context5.abrupt(\"return\", filter);\n\n          case 5:\n          case \"end\":\n            return _context5.stop();\n        }\n      }\n    }, _callee5);\n  }));\n\n  return function glucoseLastThreeDays() {\n    return _ref5.apply(this, arguments);\n  };\n}();\n\nfunction getDateFor(date) {\n  var now = new Date();\n  var ms = 1000;\n  var seconds = 60;\n  var minutes = 60;\n  var day = 24;\n  var timeOfOneDay = ms * minutes * seconds * day;\n  var pastDate = new Date(date);\n  var diff = Math.abs(now.getTime() - pastDate.getTime());\n  var days = Math.ceil(diff / timeOfOneDay);\n  return days;\n}\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QnFCLE1BSDRCLEdBR25CckIsVUFBVSxDQUFDcUIsTUFBWCxDQUNiLFVBQUNDLElBQUQ7Y0FBQSxPQUFVQyxVQUFVLENBQUNELElBQUksQ0FBQ2IsSUFBTixDQUFWLElBQW1DLENBQTdDO1lBQUEsQ0FEYSxDQUhtQjtZQUFBLGtDQU8zQlksTUFQMkI7O1VBQUE7VUFBQTtZQUFBO1FBQUE7TUFBQTtJQUFBO0VBQUEsQ0FBSDs7RUFBQSxnQkFBcEJELG9CQUFvQjtJQUFBO0VBQUE7QUFBQSxHQUExQjs7QUFVUCxTQUFTRyxVQUFULENBQW9CZCxJQUFwQixFQUEwQztFQUN4QyxJQUFNTyxHQUFHLEdBQUcsSUFBSVIsSUFBSixFQUFaO0VBQ0EsSUFBTWdCLEVBQUUsR0FBRyxJQUFYO0VBQ0EsSUFBTUMsT0FBTyxHQUFHLEVBQWhCO0VBQ0EsSUFBTUMsT0FBTyxHQUFHLEVBQWhCO0VBQ0EsSUFBTUMsR0FBRyxHQUFHLEVBQVo7RUFFQSxJQUFNQyxZQUFZLEdBQUdKLEVBQUUsR0FBR0UsT0FBTCxHQUFlRCxPQUFmLEdBQXlCRSxHQUE5QztFQUNBLElBQU1FLFFBQVEsR0FBRyxJQUFJckIsSUFBSixDQUFTQyxJQUFULENBQWpCO0VBQ0EsSUFBTXFCLElBQUksR0FBR0MsSUFBSSxDQUFDQyxHQUFMLENBQVNoQixHQUFHLENBQUNpQixPQUFKLEtBQWdCSixRQUFRLENBQUNJLE9BQVQsRUFBekIsQ0FBYjtFQUNBLElBQU1DLElBQUksR0FBR0gsSUFBSSxDQUFDSSxJQUFMLENBQVVMLElBQUksR0FBR0YsWUFBakIsQ0FBYjtFQUNBLE9BQU9NLElBQVA7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvbGliL3NlcnZpY2UvZ2x1Y29zZS50cz8wYzI2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGNvbGxlY3Rpb24sXG4gIFF1ZXJ5RG9jdW1lbnRTbmFwc2hvdCxcbiAgRG9jdW1lbnREYXRhLFxuICBxdWVyeSxcbiAgZ2V0RG9jcyxcbiAgZG9jLFxuICBzZXREb2MsXG4gIHVwZGF0ZURvYyxcbiAgZGVsZXRlRG9jLFxufSBmcm9tIFwiQGZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuaW1wb3J0IHsgZmlyZXN0b3JlIH0gZnJvbSBcImxpYi9maXJlYmFzZS9pbml0RmlyZWJhc2VcIjtcbmltcG9ydCB7IEl0ZW0gfSBmcm9tIFwidHlwZXMvbGlzdFwiO1xuXG5jb25zdCB0b2Rvc0NvbGxlY3Rpb24gPSBjb2xsZWN0aW9uKGZpcmVzdG9yZSwgXCJnbHVjb3NlXCIpO1xuXG5leHBvcnQgY29uc3QgZ2V0QWxsR2x1Y29zZSA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgZ2x1Y29zZVF1ZXJ5ID0gcXVlcnkodG9kb3NDb2xsZWN0aW9uKTtcbiAgY29uc3QgcXVlcnlTbmFwc2hvdCA9IGF3YWl0IGdldERvY3MoZ2x1Y29zZVF1ZXJ5KTtcbiAgY29uc3QgcmVzdWx0czogUXVlcnlEb2N1bWVudFNuYXBzaG90PERvY3VtZW50RGF0YT5bXSA9IFtdO1xuXG4gIHF1ZXJ5U25hcHNob3QuZm9yRWFjaCgoc25hcHNob3QpID0+IHJlc3VsdHMucHVzaChzbmFwc2hvdCkpO1xuICBjb25zdCBhbGxHbHVjb3NlID0gcmVzdWx0c1xuICAgIC5tYXAoKGRhdGE6IEl0ZW0pOkl0ZW1bXSA9PiAoe1xuICAgICAgLi4uZGF0YS5kYXRhKCksXG4gICAgICBkb2N1bWVudElkOiBkYXRhLmlkLFxuICAgIH0pKVxuXG4gIHJldHVybiBhbGxHbHVjb3NlLnNvcnQoKGEsIGIpID0+IHtcblxuICAgIHJldHVybiBuZXcgRGF0ZShiLmRhdGUgYXMgc3RyaW5nKSAtIG5ldyBEYXRlKGEuZGF0ZSBhcyBzdHJpbmcpXG4gIH0pXG4gIDtcbn07XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVHTHVjb3NlID0gYXN5bmMgKGRvY3VtZW50SWQ6IHN0cmluZywgZ2x1Y29zZURhdGE6IGFueSkgPT4ge1xuICBjb25zdCBfZ2x1Y29zZSA9IGRvYyhmaXJlc3RvcmUsIGBnbHVjb3NlLyR7ZG9jdW1lbnRJZH1gKTtcbiAgYXdhaXQgdXBkYXRlRG9jKF9nbHVjb3NlLCB7IC4uLmdsdWNvc2VEYXRhIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZUdsdWNvc2UgPSBhc3luYyAoZG9jdW1lbnRJZDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IF9nbHVjb3NlID0gZG9jKGZpcmVzdG9yZSwgYGdsdWNvc2UvJHtkb2N1bWVudElkfWApO1xuICBhd2FpdCBkZWxldGVEb2MoX2dsdWNvc2UpO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZEdsdWNvc2UgPSBhc3luYyAoZ2x1Y29zZURhdGE6IGFueSkgPT4ge1xuICBjb25zdCB0aW1lc3RhbXA6IHN0cmluZyA9IERhdGUubm93KCkudG9TdHJpbmcoKTtcbiAgY29uc3QgX2dsdWNvc2UgPSBkb2MoZmlyZXN0b3JlLCBgZ2x1Y29zZS8ke3RpbWVzdGFtcH1gKTtcblxuICB0cnkge1xuICAgIGF3YWl0IHNldERvYyhfZ2x1Y29zZSwgZ2x1Y29zZURhdGEpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKFwiQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgYWRkaW5nIHRvZG9cIik7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBnbHVjb3NlTGFzdFRocmVlRGF5cyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgYWxsR2x1Y29zZSA9IChhd2FpdCBnZXRBbGxHbHVjb3NlKCkpIGFzIEl0ZW1bXTtcblxuICBjb25zdCBmaWx0ZXIgPSBhbGxHbHVjb3NlLmZpbHRlcihcbiAgICAoaXRlbSkgPT4gZ2V0RGF0ZUZvcihpdGVtLmRhdGUgYXMgc3RyaW5nKSA8PSAzXG4gICk7XG5cbiAgcmV0dXJuIGZpbHRlcjtcbn07XG5cbmZ1bmN0aW9uIGdldERhdGVGb3IoZGF0ZTogc3RyaW5nKTogbnVtYmVyIHtcbiAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgY29uc3QgbXMgPSAxMDAwO1xuICBjb25zdCBzZWNvbmRzID0gNjA7XG4gIGNvbnN0IG1pbnV0ZXMgPSA2MDtcbiAgY29uc3QgZGF5ID0gMjQ7XG5cbiAgY29uc3QgdGltZU9mT25lRGF5ID0gbXMgKiBtaW51dGVzICogc2Vjb25kcyAqIGRheTtcbiAgY29uc3QgcGFzdERhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgY29uc3QgZGlmZiA9IE1hdGguYWJzKG5vdy5nZXRUaW1lKCkgLSBwYXN0RGF0ZS5nZXRUaW1lKCkpO1xuICBjb25zdCBkYXlzID0gTWF0aC5jZWlsKGRpZmYgLyB0aW1lT2ZPbmVEYXkpO1xuICByZXR1cm4gZGF5cztcbn1cbiJdLCJuYW1lcyI6WyJjb2xsZWN0aW9uIiwicXVlcnkiLCJnZXREb2NzIiwiZG9jIiwic2V0RG9jIiwidXBkYXRlRG9jIiwiZGVsZXRlRG9jIiwiZmlyZXN0b3JlIiwidG9kb3NDb2xsZWN0aW9uIiwiZ2V0QWxsR2x1Y29zZSIsImdsdWNvc2VRdWVyeSIsInF1ZXJ5U25hcHNob3QiLCJyZXN1bHRzIiwiZm9yRWFjaCIsInNuYXBzaG90IiwicHVzaCIsImFsbEdsdWNvc2UiLCJtYXAiLCJkYXRhIiwiZG9jdW1lbnRJZCIsImlkIiwic29ydCIsImEiLCJiIiwiRGF0ZSIsImRhdGUiLCJ1cGRhdGVHTHVjb3NlIiwiZ2x1Y29zZURhdGEiLCJfZ2x1Y29zZSIsImRlbGV0ZUdsdWNvc2UiLCJhZGRHbHVjb3NlIiwidGltZXN0YW1wIiwibm93IiwidG9TdHJpbmciLCJjb25zb2xlIiwibG9nIiwiZ2x1Y29zZUxhc3RUaHJlZURheXMiLCJmaWx0ZXIiLCJpdGVtIiwiZ2V0RGF0ZUZvciIsIm1zIiwic2Vjb25kcyIsIm1pbnV0ZXMiLCJkYXkiLCJ0aW1lT2ZPbmVEYXkiLCJwYXN0RGF0ZSIsImRpZmYiLCJNYXRoIiwiYWJzIiwiZ2V0VGltZSIsImRheXMiLCJjZWlsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/lib/service/glucose.ts\n"));

/***/ })

});