"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/context/list/contextList.tsx":
/*!******************************************!*\
  !*** ./src/context/list/contextList.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ListContext\": function() { return /* binding */ ListContext; },\n/* harmony export */   \"ListProvider\": function() { return /* binding */ ListProvider; },\n/* harmony export */   \"UseListGlucoseContext\": function() { return /* binding */ UseListGlucoseContext; }\n/* harmony export */ });\n/* harmony import */ var _home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lib_service_glucose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lib/service/glucose */ \"./src/lib/service/glucose.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\nvar _jsxFileName = \"/home/juliofreitas/\\xC1rea de Trabalho/glucose/src/context/list/contextList.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\n\n\n\n\nvar ListContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_4__.createContext)({\n  listItem: [],\n  date: null,\n  time: null,\n  glucose: null,\n  correction: null,\n  pressure: null,\n  documentId: null,\n  newId: null,\n  setListItem: function setListItem() {},\n  setDate: function setDate() {},\n  setTime: function setTime() {},\n  setGlucose: function setGlucose() {},\n  setCorrection: function setCorrection() {},\n  setPressure: function setPressure() {},\n  setDocumentId: function setDocumentId() {},\n  setNewId: function setNewId() {},\n  getAllList: function getAllList() {} //   onDeleteItem: () => {},\n  //   onEditItem: () => {},\n  //   addGlucose: () => {},\n\n});\nListContext.displayName = \"listGlucose\";\nvar ListProvider = function ListProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([{\n    id: null,\n    date: null,\n    time: null,\n    glucose: null,\n    correction: null,\n    documentId: null,\n    pressure: null\n  }]),\n      listItem = _useState[0],\n      setListItem = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null),\n      date = _useState2[0],\n      setDate = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null),\n      time = _useState3[0],\n      setTime = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null),\n      glucose = _useState4[0],\n      setGlucose = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null),\n      correction = _useState5[0],\n      setCorrection = _useState5[1];\n\n  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null),\n      pressure = _useState6[0],\n      setPressure = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null),\n      documentId = _useState7[0],\n      setDocumentId = _useState7[1];\n\n  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\"),\n      newId = _useState8[0],\n      setNewId = _useState8[1];\n\n  var getAllList = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)( /*#__PURE__*/(0,_home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {\n    return _home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.t0 = setListItem;\n            _context.next = 3;\n            return (0,lib_service_glucose__WEBPACK_IMPORTED_MODULE_3__.getAllGlucose)();\n\n          case 3:\n            _context.t1 = _context.sent;\n            (0, _context.t0)(_context.t1);\n\n          case 5:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  })), []);\n  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {\n    getAllList();\n  }, [getAllList]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(ListContext.Provider, {\n    value: {\n      listItem: listItem,\n      setListItem: setListItem,\n      date: date,\n      setDate: setDate,\n      time: time,\n      glucose: glucose,\n      correction: correction,\n      pressure: pressure,\n      documentId: documentId,\n      newId: newId,\n      setTime: setTime,\n      setGlucose: setGlucose,\n      setCorrection: setCorrection,\n      setPressure: setPressure,\n      setDocumentId: setDocumentId,\n      setNewId: setNewId,\n      getAllList: getAllList\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 89,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ListProvider, \"pMkpJX5iBub0uCkZqw3lvhzxTwA=\");\n\n_c = ListProvider;\nvar UseListGlucoseContext = function UseListGlucoseContext() {\n  _s2();\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(ListContext),\n      listItem = _useContext.listItem,\n      setListItem = _useContext.setListItem,\n      setDate = _useContext.setDate,\n      date = _useContext.date,\n      time = _useContext.time,\n      setTime = _useContext.setTime,\n      correction = _useContext.correction,\n      setCorrection = _useContext.setCorrection,\n      documentId = _useContext.documentId,\n      setDocumentId = _useContext.setDocumentId,\n      glucose = _useContext.glucose,\n      setGlucose = _useContext.setGlucose,\n      newId = _useContext.newId,\n      setNewId = _useContext.setNewId,\n      pressure = _useContext.pressure,\n      setPressure = _useContext.setPressure,\n      getAllList = _useContext.getAllList;\n\n  var addItemGlucose = function addItemGlucose(item) {\n    setListItem(function (prev) {\n      return [].concat((0,_home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(prev), [item]);\n    });\n    (0,lib_service_glucose__WEBPACK_IMPORTED_MODULE_3__.addGlucose)(item);\n  };\n\n  var updateItemGLucose = function updateItemGLucose(documentId, item) {\n    (0,lib_service_glucose__WEBPACK_IMPORTED_MODULE_3__.updateGLucose)(documentId, item);\n    getAllList();\n  };\n\n  var removeItemGLucose = function removeItemGLucose(documentId) {\n    setListItem(listItem.filter(function (item) {\n      return item.id !== documentId;\n    }));\n    (0,lib_service_glucose__WEBPACK_IMPORTED_MODULE_3__.deleteGlucose)(documentId);\n    getAllList();\n  };\n\n  var editiItemGLucose = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(function (newItem) {\n    var correction = newItem.correction,\n        date = newItem.date,\n        documentId = newItem.documentId,\n        glucose = newItem.glucose,\n        pressure = newItem.pressure,\n        time = newItem.time;\n    setDocumentId((newItem === null || newItem === void 0 ? void 0 : newItem.documentId) || null);\n    setDate(date);\n    setTime(time);\n    setGlucose(glucose);\n    setCorrection(correction);\n    setPressure(pressure);\n    setDocumentId(documentId);\n  }, []);\n\n  var clearAllFields = function clearAllFields() {\n    setDate(\"\");\n    setTime(\"\");\n    setGlucose(\"\");\n    setCorrection(\"\");\n    setPressure(\"\");\n    setDocumentId(null);\n    setTimeout(function () {\n      return setNewId(\"\");\n    }, 600);\n  };\n\n  return {\n    listItem: listItem,\n    addItemGlucose: addItemGlucose,\n    removeItemGLucose: removeItemGLucose,\n    editiItemGLucose: editiItemGLucose,\n    updateItemGLucose: updateItemGLucose,\n    time: time,\n    date: date,\n    glucose: glucose,\n    correction: correction,\n    pressure: pressure,\n    documentId: documentId,\n    newId: newId,\n    setDate: setDate,\n    setTime: setTime,\n    setGlucose: setGlucose,\n    setCorrection: setCorrection,\n    setPressure: setPressure,\n    setDocumentId: setDocumentId,\n    setNewId: setNewId,\n    clearAllFields: clearAllFields,\n    setListItem: setListItem,\n    getAllList: getAllList\n  };\n};\n\n_s2(UseListGlucoseContext, \"bXumzpxQ/foPaawmoAAsOG0wVl8=\");\n\n_c2 = UseListGlucoseContext;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"ListProvider\");\n$RefreshReg$(_c2, \"UseListGlucoseContext\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVhLO0lBWUxDLEtBQUssRUFBTEEsS0FaSztJQWFMRSxPQUFPLEVBQVBBLE9BYks7SUFjTEMsT0FBTyxFQUFQQSxPQWRLO0lBZUxDLFVBQVUsRUFBVkEsVUFmSztJQWdCTEMsYUFBYSxFQUFiQSxhQWhCSztJQWlCTEMsV0FBVyxFQUFYQSxXQWpCSztJQWtCTEMsYUFBYSxFQUFiQSxhQWxCSztJQW1CTEMsUUFBUSxFQUFSQSxRQW5CSztJQW9CTGUsY0FBYyxFQUFkQSxjQXBCSztJQXFCTHRCLFdBQVcsRUFBWEEsV0FyQks7SUFzQkxRLFVBQVUsRUFBVkE7RUF0QkssQ0FBUDtBQXdCRCxDQXJGTTs7SUFBTUs7O01BQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb250ZXh0L2xpc3QvY29udGV4dExpc3QudHN4P2I2Y2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWRkR2x1Y29zZSwgZGVsZXRlR2x1Y29zZSwgZ2V0QWxsR2x1Y29zZSwgdXBkYXRlR0x1Y29zZSB9IGZyb20gXCJsaWIvc2VydmljZS9nbHVjb3NlXCI7XG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCJ0eXBlcy9saXN0XCI7XG5cbnR5cGUgQ29udGV4dExpc3QgPSB7XG4gIGxpc3RJdGVtOiBJdGVtW107XG4gIGRhdGU6IHN0cmluZyB8IG51bGw7XG4gIHRpbWU6IHN0cmluZyB8IG51bGw7XG4gIGdsdWNvc2U6IHN0cmluZyB8IG51bGw7XG4gIGNvcnJlY3Rpb246IHN0cmluZyB8IG51bGw7XG4gIHByZXNzdXJlOiBzdHJpbmcgfCBudWxsO1xuICBkb2N1bWVudElkOiBzdHJpbmcgfCBudWxsO1xuICBuZXdJZDogc3RyaW5nIHwgbnVsbDtcbiAgc2V0TGlzdEl0ZW06IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPEl0ZW1bXT4+O1xuICBzZXREYXRlOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxzdHJpbmcgfCBudWxsPj47XG4gIHNldFRpbWU6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPHN0cmluZyB8IG51bGw+PjtcbiAgc2V0R2x1Y29zZTogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248c3RyaW5nIHwgbnVsbD4+O1xuICBzZXRDb3JyZWN0aW9uOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxzdHJpbmcgfCBudWxsPj47XG4gIHNldFByZXNzdXJlOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxzdHJpbmcgfCBudWxsPj47XG4gIHNldERvY3VtZW50SWQ6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPHN0cmluZyB8IG51bGw+PjtcbiAgc2V0TmV3SWQ6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPHN0cmluZyB8IG51bGw+PjtcbiAgZ2V0QWxsTGlzdDogKCkgPT4gdm9pZFxuXG4gIC8vICAgb25EZWxldGVJdGVtOiAoZG9jdW1lbnRJZDogc3RyaW5nKSA9PiB2b2lkO1xuICAvLyAgIG9uRWRpdEl0ZW06IChpdGVtOiBJdGVtKSA9PiB2b2lkO1xuICAvLyAgIGFkZEdsdWNvc2U6IChpdGVtOiBJdGVtKSA9PiB2b2lkO1xufTtcblxuZXhwb3J0IGNvbnN0IExpc3RDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxDb250ZXh0TGlzdD4oe1xuICBsaXN0SXRlbTogW10sXG4gIGRhdGU6IG51bGwsXG4gIHRpbWU6IG51bGwsXG4gIGdsdWNvc2U6IG51bGwsXG4gIGNvcnJlY3Rpb246IG51bGwsXG4gIHByZXNzdXJlOiBudWxsLFxuICBkb2N1bWVudElkOiBudWxsLFxuICBuZXdJZDogbnVsbCxcbiAgc2V0TGlzdEl0ZW06ICgpID0+IHt9LFxuICBzZXREYXRlOiAoKSA9PiB7fSxcbiAgc2V0VGltZTogKCkgPT4ge30sXG4gIHNldEdsdWNvc2U6ICgpID0+IHt9LFxuICBzZXRDb3JyZWN0aW9uOiAoKSA9PiB7fSxcbiAgc2V0UHJlc3N1cmU6ICgpID0+IHt9LFxuICBzZXREb2N1bWVudElkOiAoKSA9PiB7fSxcbiAgc2V0TmV3SWQ6ICgpID0+IHt9LFxuICBnZXRBbGxMaXN0OiAoKSA9PiB7fVxuICAvLyAgIG9uRGVsZXRlSXRlbTogKCkgPT4ge30sXG4gIC8vICAgb25FZGl0SXRlbTogKCkgPT4ge30sXG4gIC8vICAgYWRkR2x1Y29zZTogKCkgPT4ge30sXG59KTtcblxuTGlzdENvbnRleHQuZGlzcGxheU5hbWUgPSBcImxpc3RHbHVjb3NlXCI7XG5cbnR5cGUgUHJvcHNMaXN0ID0ge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xufTtcblxuZXhwb3J0IGNvbnN0IExpc3RQcm92aWRlciA9ICh7IGNoaWxkcmVuIH06IFByb3BzTGlzdCkgPT4ge1xuICBjb25zdCBbbGlzdEl0ZW0sIHNldExpc3RJdGVtXSA9IHVzZVN0YXRlPEl0ZW1bXT4oW1xuICAgIHtcbiAgICAgIGlkOiBudWxsLFxuICAgICAgZGF0ZTogbnVsbCxcbiAgICAgIHRpbWU6IG51bGwsXG4gICAgICBnbHVjb3NlOiBudWxsLFxuICAgICAgY29ycmVjdGlvbjogbnVsbCxcbiAgICAgIGRvY3VtZW50SWQ6IG51bGwsXG4gICAgICBwcmVzc3VyZTogbnVsbCxcbiAgICB9LFxuICBdKTtcbiAgY29uc3QgW2RhdGUsIHNldERhdGVdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFt0aW1lLCBzZXRUaW1lXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbZ2x1Y29zZSwgc2V0R2x1Y29zZV0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2NvcnJlY3Rpb24sIHNldENvcnJlY3Rpb25dID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtwcmVzc3VyZSwgc2V0UHJlc3N1cmVdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtkb2N1bWVudElkLCBzZXREb2N1bWVudElkXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbbmV3SWQsIHNldE5ld0lkXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KFwiXCIpO1xuXG4gICAgY29uc3QgZ2V0QWxsTGlzdCA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcbiAgICAgIHNldExpc3RJdGVtKGF3YWl0IGdldEFsbEdsdWNvc2UoKSk7XG4gICAgfSwgW10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGdldEFsbExpc3QoKTtcbiAgICB9LCBbZ2V0QWxsTGlzdF0pO1xuXG4gIHJldHVybiAoXG4gICAgPExpc3RDb250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17e1xuICAgICAgICBsaXN0SXRlbSxcbiAgICAgICAgc2V0TGlzdEl0ZW0sXG4gICAgICAgIGRhdGUsXG4gICAgICAgIHNldERhdGUsXG4gICAgICAgIHRpbWUsXG4gICAgICAgIGdsdWNvc2UsXG4gICAgICAgIGNvcnJlY3Rpb24sXG4gICAgICAgIHByZXNzdXJlLFxuICAgICAgICBkb2N1bWVudElkLFxuICAgICAgICBuZXdJZCxcbiAgICAgICAgc2V0VGltZSxcbiAgICAgICAgc2V0R2x1Y29zZSxcbiAgICAgICAgc2V0Q29ycmVjdGlvbixcbiAgICAgICAgc2V0UHJlc3N1cmUsXG4gICAgICAgIHNldERvY3VtZW50SWQsXG4gICAgICAgIHNldE5ld0lkLFxuICAgICAgICBnZXRBbGxMaXN0XG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0xpc3RDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IFVzZUxpc3RHbHVjb3NlQ29udGV4dCA9ICgpID0+IHtcbiAgY29uc3Qge1xuICAgIGxpc3RJdGVtLFxuICAgIHNldExpc3RJdGVtLFxuICAgIHNldERhdGUsXG4gICAgZGF0ZSxcbiAgICB0aW1lLFxuICAgIHNldFRpbWUsXG4gICAgY29ycmVjdGlvbixcbiAgICBzZXRDb3JyZWN0aW9uLFxuICAgIGRvY3VtZW50SWQsXG4gICAgc2V0RG9jdW1lbnRJZCxcbiAgICBnbHVjb3NlLFxuICAgIHNldEdsdWNvc2UsXG4gICAgbmV3SWQsXG4gICAgc2V0TmV3SWQsXG4gICAgcHJlc3N1cmUsXG4gICAgc2V0UHJlc3N1cmUsXG4gICAgZ2V0QWxsTGlzdFxuICB9ID0gdXNlQ29udGV4dChMaXN0Q29udGV4dCk7XG5cbiAgY29uc3QgYWRkSXRlbUdsdWNvc2UgPSAoaXRlbTogSXRlbSkgPT4ge1xuICAgIHNldExpc3RJdGVtKChwcmV2KSA9PiBbLi4ucHJldiwgaXRlbV0pO1xuICAgIGFkZEdsdWNvc2UoaXRlbSlcbiAgfTtcblxuICBjb25zdCB1cGRhdGVJdGVtR0x1Y29zZSA9IChkb2N1bWVudElkOiBzdHJpbmcsIGl0ZW06SXRlbSkgPT4ge1xuICAgIHVwZGF0ZUdMdWNvc2UoZG9jdW1lbnRJZCwgaXRlbSlcbiAgICBnZXRBbGxMaXN0KClcbiAgfVxuXG4gIGNvbnN0IHJlbW92ZUl0ZW1HTHVjb3NlID0gKGRvY3VtZW50SWQ6IHN0cmluZykgPT4ge1xuICAgIHNldExpc3RJdGVtKGxpc3RJdGVtLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCAhPT0gZG9jdW1lbnRJZCkpO1xuICAgIGRlbGV0ZUdsdWNvc2UoZG9jdW1lbnRJZCk7XG4gICAgZ2V0QWxsTGlzdCgpXG4gIH07XG5cbiAgY29uc3QgZWRpdGlJdGVtR0x1Y29zZSA9IHVzZUNhbGxiYWNrKChuZXdJdGVtOiBJdGVtKSA9PiB7XG4gICAgY29uc3QgeyBjb3JyZWN0aW9uLCBkYXRlLCBkb2N1bWVudElkLCBnbHVjb3NlLCBwcmVzc3VyZSwgdGltZSB9ID0gbmV3SXRlbTtcbiAgICBzZXREb2N1bWVudElkKG5ld0l0ZW0/LmRvY3VtZW50SWQgfHwgbnVsbClcblxuICAgIHNldERhdGUoZGF0ZSk7XG4gICAgc2V0VGltZSh0aW1lIGFzIHN0cmluZyk7XG4gICAgc2V0R2x1Y29zZShnbHVjb3NlIGFzIHN0cmluZyk7XG4gICAgc2V0Q29ycmVjdGlvbihjb3JyZWN0aW9uKTtcbiAgICBzZXRQcmVzc3VyZShwcmVzc3VyZSBhcyBzdHJpbmcpO1xuICAgIHNldERvY3VtZW50SWQoZG9jdW1lbnRJZCBhcyBzdHJpbmcpO1xuXG4gIH0sIFtdKTtcblxuICBjb25zdCBjbGVhckFsbEZpZWxkcyA9ICgpID0+IHtcbiAgICBzZXREYXRlKFwiXCIpO1xuICAgIHNldFRpbWUoXCJcIik7XG4gICAgc2V0R2x1Y29zZShcIlwiKTtcbiAgICBzZXRDb3JyZWN0aW9uKFwiXCIpO1xuICAgIHNldFByZXNzdXJlKFwiXCIpO1xuICAgIHNldERvY3VtZW50SWQobnVsbCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiBzZXROZXdJZChcIlwiKSwgNjAwKTtcbiAgfTtcblxuXG4gIHJldHVybiB7XG4gICAgbGlzdEl0ZW0sXG4gICAgYWRkSXRlbUdsdWNvc2UsXG4gICAgcmVtb3ZlSXRlbUdMdWNvc2UsXG4gICAgZWRpdGlJdGVtR0x1Y29zZSxcbiAgICB1cGRhdGVJdGVtR0x1Y29zZSxcbiAgICB0aW1lLFxuICAgIGRhdGUsXG4gICAgZ2x1Y29zZSxcbiAgICBjb3JyZWN0aW9uLFxuICAgIHByZXNzdXJlLFxuICAgIGRvY3VtZW50SWQsXG4gICAgbmV3SWQsXG4gICAgc2V0RGF0ZSxcbiAgICBzZXRUaW1lLFxuICAgIHNldEdsdWNvc2UsXG4gICAgc2V0Q29ycmVjdGlvbixcbiAgICBzZXRQcmVzc3VyZSxcbiAgICBzZXREb2N1bWVudElkLFxuICAgIHNldE5ld0lkLFxuICAgIGNsZWFyQWxsRmllbGRzLFxuICAgIHNldExpc3RJdGVtLFxuICAgIGdldEFsbExpc3RcbiAgfTtcbn07XG4iXSwibmFtZXMiOlsiYWRkR2x1Y29zZSIsImRlbGV0ZUdsdWNvc2UiLCJnZXRBbGxHbHVjb3NlIiwidXBkYXRlR0x1Y29zZSIsInVzZUNvbnRleHQiLCJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIkxpc3RDb250ZXh0IiwibGlzdEl0ZW0iLCJkYXRlIiwidGltZSIsImdsdWNvc2UiLCJjb3JyZWN0aW9uIiwicHJlc3N1cmUiLCJkb2N1bWVudElkIiwibmV3SWQiLCJzZXRMaXN0SXRlbSIsInNldERhdGUiLCJzZXRUaW1lIiwic2V0R2x1Y29zZSIsInNldENvcnJlY3Rpb24iLCJzZXRQcmVzc3VyZSIsInNldERvY3VtZW50SWQiLCJzZXROZXdJZCIsImdldEFsbExpc3QiLCJkaXNwbGF5TmFtZSIsIkxpc3RQcm92aWRlciIsImNoaWxkcmVuIiwiaWQiLCJVc2VMaXN0R2x1Y29zZUNvbnRleHQiLCJhZGRJdGVtR2x1Y29zZSIsIml0ZW0iLCJwcmV2IiwidXBkYXRlSXRlbUdMdWNvc2UiLCJyZW1vdmVJdGVtR0x1Y29zZSIsImZpbHRlciIsImVkaXRpSXRlbUdMdWNvc2UiLCJuZXdJdGVtIiwiY2xlYXJBbGxGaWVsZHMiLCJzZXRUaW1lb3V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/context/list/contextList.tsx\n"));

/***/ })

});