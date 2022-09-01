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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addGlucose\": function() { return /* binding */ addGlucose; },\n/* harmony export */   \"deleteGlucose\": function() { return /* binding */ deleteGlucose; },\n/* harmony export */   \"getAllGlucose\": function() { return /* binding */ getAllGlucose; },\n/* harmony export */   \"glucoseLastThreeDays\": function() { return /* binding */ glucoseLastThreeDays; },\n/* harmony export */   \"updateGLucose\": function() { return /* binding */ updateGLucose; }\n/* harmony export */ });\n/* harmony import */ var _home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @firebase/firestore */ \"./node_modules/@firebase/firestore/dist/index.esm2017.js\");\n/* harmony import */ var lib_firebase_initFirebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lib/firebase/initFirebase */ \"./src/lib/firebase/initFirebase.ts\");\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\n\n\nvar todosCollection = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(lib_firebase_initFirebase__WEBPACK_IMPORTED_MODULE_4__.firestore, \"glucose\");\nvar getAllGlucose = /*#__PURE__*/function () {\n  var _ref = (0,_home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {\n    var glucoseQuery, querySnapshot, results, allGlucose;\n    return _home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            glucoseQuery = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)(todosCollection);\n            _context.next = 3;\n            return (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)(glucoseQuery);\n\n          case 3:\n            querySnapshot = _context.sent;\n            results = [];\n            querySnapshot.forEach(function (snapshot) {\n              return results.push(snapshot);\n            });\n            allGlucose = results.map(function (data) {\n              return _objectSpread(_objectSpread({}, data.data()), {}, {\n                documentId: data.id\n              });\n            });\n            return _context.abrupt(\"return\", allGlucose.sort(function (a, b) {\n              return new Date(b.date) - new Date(a.date);\n            }));\n\n          case 8:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function getAllGlucose() {\n    return _ref.apply(this, arguments);\n  };\n}();\nvar updateGLucose = /*#__PURE__*/function () {\n  var _ref2 = (0,_home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2(documentId, glucoseData) {\n    var _glucose;\n\n    return _home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _glucose = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(lib_firebase_initFirebase__WEBPACK_IMPORTED_MODULE_4__.firestore, \"glucose/\".concat(documentId));\n            _context2.next = 3;\n            return (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.updateDoc)(_glucose, _objectSpread({}, glucoseData));\n\n          case 3:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function updateGLucose(_x, _x2) {\n    return _ref2.apply(this, arguments);\n  };\n}();\nvar deleteGlucose = /*#__PURE__*/function () {\n  var _ref3 = (0,_home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3(documentId) {\n    var _glucose;\n\n    return _home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            _glucose = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(lib_firebase_initFirebase__WEBPACK_IMPORTED_MODULE_4__.firestore, \"glucose/\".concat(documentId));\n            _context3.next = 3;\n            return (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.deleteDoc)(_glucose);\n\n          case 3:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3);\n  }));\n\n  return function deleteGlucose(_x3) {\n    return _ref3.apply(this, arguments);\n  };\n}();\nvar addGlucose = /*#__PURE__*/function () {\n  var _ref4 = (0,_home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4(glucoseData) {\n    var timestamp, _glucose;\n\n    return _home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {\n      while (1) {\n        switch (_context4.prev = _context4.next) {\n          case 0:\n            timestamp = Date.now().toString();\n            _glucose = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(lib_firebase_initFirebase__WEBPACK_IMPORTED_MODULE_4__.firestore, \"glucose/\".concat(timestamp));\n            _context4.prev = 2;\n            _context4.next = 5;\n            return (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.setDoc)(_glucose, glucoseData);\n\n          case 5:\n            _context4.next = 10;\n            break;\n\n          case 7:\n            _context4.prev = 7;\n            _context4.t0 = _context4[\"catch\"](2);\n            console.log(\"An error occurred while adding todo\");\n\n          case 10:\n          case \"end\":\n            return _context4.stop();\n        }\n      }\n    }, _callee4, null, [[2, 7]]);\n  }));\n\n  return function addGlucose(_x4) {\n    return _ref4.apply(this, arguments);\n  };\n}();\nvar glucoseLastThreeDays = /*#__PURE__*/function () {\n  var _ref5 = (0,_home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee5() {\n    var allGlucose, filter;\n    return _home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee5$(_context5) {\n      while (1) {\n        switch (_context5.prev = _context5.next) {\n          case 0:\n            _context5.next = 2;\n            return getAllGlucose();\n\n          case 2:\n            allGlucose = _context5.sent;\n            filter = allGlucose.filter(function (item) {\n              return getDateFor(item.date) <= 3;\n            });\n            return _context5.abrupt(\"return\", filter);\n\n          case 5:\n          case \"end\":\n            return _context5.stop();\n        }\n      }\n    }, _callee5);\n  }));\n\n  return function glucoseLastThreeDays() {\n    return _ref5.apply(this, arguments);\n  };\n}();\n\nfunction getDateFor(date) {\n  var now = new Date();\n  var ms = 1000;\n  var seconds = 60;\n  var minutes = 60;\n  var day = 24;\n  var timeOfOneDay = ms * minutes * seconds * day;\n  var pastDate = new Date(date);\n  var diff = Math.abs(now.getTime() - pastDate.getTime());\n  var days = Math.ceil(diff / timeOfOneDay);\n  return days;\n}\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cUIsTUFINEIsR0FHbkJyQixVQUFVLENBQUNxQixNQUFYLENBQ2IsVUFBQ0MsSUFBRDtjQUFBLE9BQVVDLFVBQVUsQ0FBQ0QsSUFBSSxDQUFDYixJQUFOLENBQVYsSUFBbUMsQ0FBN0M7WUFBQSxDQURhLENBSG1CO1lBQUEsa0NBTzNCWSxNQVAyQjs7VUFBQTtVQUFBO1lBQUE7UUFBQTtNQUFBO0lBQUE7RUFBQSxDQUFIOztFQUFBLGdCQUFwQkQsb0JBQW9CO0lBQUE7RUFBQTtBQUFBLEdBQTFCOztBQVVQLFNBQVNHLFVBQVQsQ0FBb0JkLElBQXBCLEVBQTBDO0VBQ3hDLElBQU1PLEdBQUcsR0FBRyxJQUFJUixJQUFKLEVBQVo7RUFDQSxJQUFNZ0IsRUFBRSxHQUFHLElBQVg7RUFDQSxJQUFNQyxPQUFPLEdBQUcsRUFBaEI7RUFDQSxJQUFNQyxPQUFPLEdBQUcsRUFBaEI7RUFDQSxJQUFNQyxHQUFHLEdBQUcsRUFBWjtFQUVBLElBQU1DLFlBQVksR0FBR0osRUFBRSxHQUFHRSxPQUFMLEdBQWVELE9BQWYsR0FBeUJFLEdBQTlDO0VBQ0EsSUFBTUUsUUFBUSxHQUFHLElBQUlyQixJQUFKLENBQVNDLElBQVQsQ0FBakI7RUFDQSxJQUFNcUIsSUFBSSxHQUFHQyxJQUFJLENBQUNDLEdBQUwsQ0FBU2hCLEdBQUcsQ0FBQ2lCLE9BQUosS0FBZ0JKLFFBQVEsQ0FBQ0ksT0FBVCxFQUF6QixDQUFiO0VBQ0EsSUFBTUMsSUFBSSxHQUFHSCxJQUFJLENBQUNJLElBQUwsQ0FBVUwsSUFBSSxHQUFHRixZQUFqQixDQUFiO0VBQ0EsT0FBT00sSUFBUDtBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9saWIvc2VydmljZS9nbHVjb3NlLnRzPzBjMjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgY29sbGVjdGlvbixcbiAgUXVlcnlEb2N1bWVudFNuYXBzaG90LFxuICBEb2N1bWVudERhdGEsXG4gIHF1ZXJ5LFxuICBnZXREb2NzLFxuICBkb2MsXG4gIHNldERvYyxcbiAgdXBkYXRlRG9jLFxuICBkZWxldGVEb2MsXG59IGZyb20gXCJAZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG5pbXBvcnQgeyBmaXJlc3RvcmUgfSBmcm9tIFwibGliL2ZpcmViYXNlL2luaXRGaXJlYmFzZVwiO1xuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCJ0eXBlcy9saXN0XCI7XG5cbmNvbnN0IHRvZG9zQ29sbGVjdGlvbiA9IGNvbGxlY3Rpb24oZmlyZXN0b3JlLCBcImdsdWNvc2VcIik7XG50eXBlIFR5cGVTbmFwc2hvdCA9IFF1ZXJ5RG9jdW1lbnRTbmFwc2hvdDxEb2N1bWVudERhdGE+W10gJiBJdGVtW11cbmV4cG9ydCBjb25zdCBnZXRBbGxHbHVjb3NlID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBnbHVjb3NlUXVlcnkgPSBxdWVyeSh0b2Rvc0NvbGxlY3Rpb24pO1xuICBjb25zdCBxdWVyeVNuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyhnbHVjb3NlUXVlcnkpO1xuICBjb25zdCByZXN1bHRzOiBUeXBlU25hcHNob3QgPSBbXTtcblxuICBxdWVyeVNuYXBzaG90LmZvckVhY2goKHNuYXBzaG90KSA9PiByZXN1bHRzLnB1c2goc25hcHNob3QpKTtcbiAgY29uc3QgYWxsR2x1Y29zZSA9IHJlc3VsdHNcbiAgICAubWFwKChkYXRhKSA9PiAoe1xuICAgICAgLi4uZGF0YS5kYXRhKCksXG4gICAgICBkb2N1bWVudElkOiBkYXRhLmlkLFxuICAgIH0pKSBhcyBJdGVtW11cblxuICByZXR1cm4gYWxsR2x1Y29zZS5zb3J0KChhOkl0ZW0sIGI6IEl0ZW0pID0+IHtcblxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKGIuZGF0ZSBhcyBzdHJpbmcpIC0gbmV3IERhdGUoYS5kYXRlKVxuICB9KVxuICA7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlR0x1Y29zZSA9IGFzeW5jIChkb2N1bWVudElkOiBzdHJpbmcsIGdsdWNvc2VEYXRhOiBhbnkpID0+IHtcbiAgY29uc3QgX2dsdWNvc2UgPSBkb2MoZmlyZXN0b3JlLCBgZ2x1Y29zZS8ke2RvY3VtZW50SWR9YCk7XG4gIGF3YWl0IHVwZGF0ZURvYyhfZ2x1Y29zZSwgeyAuLi5nbHVjb3NlRGF0YSB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBkZWxldGVHbHVjb3NlID0gYXN5bmMgKGRvY3VtZW50SWQ6IHN0cmluZykgPT4ge1xuICBjb25zdCBfZ2x1Y29zZSA9IGRvYyhmaXJlc3RvcmUsIGBnbHVjb3NlLyR7ZG9jdW1lbnRJZH1gKTtcbiAgYXdhaXQgZGVsZXRlRG9jKF9nbHVjb3NlKTtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRHbHVjb3NlID0gYXN5bmMgKGdsdWNvc2VEYXRhOiBhbnkpID0+IHtcbiAgY29uc3QgdGltZXN0YW1wOiBzdHJpbmcgPSBEYXRlLm5vdygpLnRvU3RyaW5nKCk7XG4gIGNvbnN0IF9nbHVjb3NlID0gZG9jKGZpcmVzdG9yZSwgYGdsdWNvc2UvJHt0aW1lc3RhbXB9YCk7XG5cbiAgdHJ5IHtcbiAgICBhd2FpdCBzZXREb2MoX2dsdWNvc2UsIGdsdWNvc2VEYXRhKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhcIkFuIGVycm9yIG9jY3VycmVkIHdoaWxlIGFkZGluZyB0b2RvXCIpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZ2x1Y29zZUxhc3RUaHJlZURheXMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGFsbEdsdWNvc2UgPSAoYXdhaXQgZ2V0QWxsR2x1Y29zZSgpKSBhcyBJdGVtW107XG5cbiAgY29uc3QgZmlsdGVyID0gYWxsR2x1Y29zZS5maWx0ZXIoXG4gICAgKGl0ZW0pID0+IGdldERhdGVGb3IoaXRlbS5kYXRlIGFzIHN0cmluZykgPD0gM1xuICApO1xuXG4gIHJldHVybiBmaWx0ZXI7XG59O1xuXG5mdW5jdGlvbiBnZXREYXRlRm9yKGRhdGU6IHN0cmluZyk6IG51bWJlciB7XG4gIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IG1zID0gMTAwMDtcbiAgY29uc3Qgc2Vjb25kcyA9IDYwO1xuICBjb25zdCBtaW51dGVzID0gNjA7XG4gIGNvbnN0IGRheSA9IDI0O1xuXG4gIGNvbnN0IHRpbWVPZk9uZURheSA9IG1zICogbWludXRlcyAqIHNlY29uZHMgKiBkYXk7XG4gIGNvbnN0IHBhc3REYXRlID0gbmV3IERhdGUoZGF0ZSk7XG4gIGNvbnN0IGRpZmYgPSBNYXRoLmFicyhub3cuZ2V0VGltZSgpIC0gcGFzdERhdGUuZ2V0VGltZSgpKTtcbiAgY29uc3QgZGF5cyA9IE1hdGguY2VpbChkaWZmIC8gdGltZU9mT25lRGF5KTtcbiAgcmV0dXJuIGRheXM7XG59XG4iXSwibmFtZXMiOlsiY29sbGVjdGlvbiIsInF1ZXJ5IiwiZ2V0RG9jcyIsImRvYyIsInNldERvYyIsInVwZGF0ZURvYyIsImRlbGV0ZURvYyIsImZpcmVzdG9yZSIsInRvZG9zQ29sbGVjdGlvbiIsImdldEFsbEdsdWNvc2UiLCJnbHVjb3NlUXVlcnkiLCJxdWVyeVNuYXBzaG90IiwicmVzdWx0cyIsImZvckVhY2giLCJzbmFwc2hvdCIsInB1c2giLCJhbGxHbHVjb3NlIiwibWFwIiwiZGF0YSIsImRvY3VtZW50SWQiLCJpZCIsInNvcnQiLCJhIiwiYiIsIkRhdGUiLCJkYXRlIiwidXBkYXRlR0x1Y29zZSIsImdsdWNvc2VEYXRhIiwiX2dsdWNvc2UiLCJkZWxldGVHbHVjb3NlIiwiYWRkR2x1Y29zZSIsInRpbWVzdGFtcCIsIm5vdyIsInRvU3RyaW5nIiwiY29uc29sZSIsImxvZyIsImdsdWNvc2VMYXN0VGhyZWVEYXlzIiwiZmlsdGVyIiwiaXRlbSIsImdldERhdGVGb3IiLCJtcyIsInNlY29uZHMiLCJtaW51dGVzIiwiZGF5IiwidGltZU9mT25lRGF5IiwicGFzdERhdGUiLCJkaWZmIiwiTWF0aCIsImFicyIsImdldFRpbWUiLCJkYXlzIiwiY2VpbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/lib/service/glucose.ts\n"));

/***/ })

});