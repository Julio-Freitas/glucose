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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ListContext\": function() { return /* binding */ ListContext; },\n/* harmony export */   \"ListProvider\": function() { return /* binding */ ListProvider; },\n/* harmony export */   \"UseListGlucoseContext\": function() { return /* binding */ UseListGlucoseContext; }\n/* harmony export */ });\n/* harmony import */ var _home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lib_service_glucose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lib/service/glucose */ \"./src/lib/service/glucose.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\nvar _jsxFileName = \"/home/juliofreitas/\\xC1rea de Trabalho/glucose/src/context/list/contextList.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\n\n\n\n\nvar ListContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_4__.createContext)({\n  listItem: [],\n  date: null,\n  time: null,\n  glucose: null,\n  correction: null,\n  pressure: null,\n  documentId: null,\n  newId: null,\n  setListItem: function setListItem() {},\n  setDate: function setDate() {},\n  setTime: function setTime() {},\n  setGlucose: function setGlucose() {},\n  setCorrection: function setCorrection() {},\n  setPressure: function setPressure() {},\n  setDocumentId: function setDocumentId() {},\n  setNewId: function setNewId() {} //   onDeleteItem: () => {},\n  //   onEditItem: () => {},\n  //   addGlucose: () => {},\n\n});\nListContext.displayName = \"listGlucose\";\nvar ListProvider = function ListProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([{\n    id: null,\n    date: null,\n    time: null,\n    glucose: null,\n    correction: null,\n    documentId: null,\n    pressure: null\n  }]),\n      listItem = _useState[0],\n      setListItem = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null),\n      date = _useState2[0],\n      setDate = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null),\n      time = _useState3[0],\n      setTime = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null),\n      glucose = _useState4[0],\n      setGlucose = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null),\n      correction = _useState5[0],\n      setCorrection = _useState5[1];\n\n  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null),\n      pressure = _useState6[0],\n      setPressure = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null),\n      documentId = _useState7[0],\n      setDocumentId = _useState7[1];\n\n  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\"),\n      newId = _useState8[0],\n      setNewId = _useState8[1];\n\n  var getAllList = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)( /*#__PURE__*/(0,_home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {\n    return _home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.t0 = setListItem;\n            _context.next = 3;\n            return (0,lib_service_glucose__WEBPACK_IMPORTED_MODULE_3__.getAllGlucose)();\n\n          case 3:\n            _context.t1 = _context.sent;\n            (0, _context.t0)(_context.t1);\n\n          case 5:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  })), []);\n  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {\n    getAllList();\n  }, [getAllList]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(ListContext.Provider, {\n    value: {\n      listItem: listItem,\n      setListItem: setListItem,\n      date: date,\n      setDate: setDate,\n      time: time,\n      glucose: glucose,\n      correction: correction,\n      pressure: pressure,\n      documentId: documentId,\n      newId: newId,\n      setTime: setTime,\n      setGlucose: setGlucose,\n      setCorrection: setCorrection,\n      setPressure: setPressure,\n      setDocumentId: setDocumentId,\n      setNewId: setNewId\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 87,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ListProvider, \"pMkpJX5iBub0uCkZqw3lvhzxTwA=\");\n\n_c = ListProvider;\nvar UseListGlucoseContext = function UseListGlucoseContext() {\n  _s2();\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(ListContext),\n      listItem = _useContext.listItem,\n      setListItem = _useContext.setListItem,\n      setDate = _useContext.setDate,\n      date = _useContext.date,\n      time = _useContext.time,\n      setTime = _useContext.setTime,\n      correction = _useContext.correction,\n      setCorrection = _useContext.setCorrection,\n      documentId = _useContext.documentId,\n      setDocumentId = _useContext.setDocumentId,\n      glucose = _useContext.glucose,\n      setGlucose = _useContext.setGlucose,\n      newId = _useContext.newId,\n      setNewId = _useContext.setNewId,\n      pressure = _useContext.pressure,\n      setPressure = _useContext.setPressure;\n\n  var addItemGlucose = function addItemGlucose(item) {\n    setListItem(function (prev) {\n      return [].concat((0,_home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(prev), [item]);\n    });\n    (0,lib_service_glucose__WEBPACK_IMPORTED_MODULE_3__.addGlucose)(item);\n  };\n\n  var updateItemGLucose = function updateItemGLucose(documentId, item) {\n    (0,lib_service_glucose__WEBPACK_IMPORTED_MODULE_3__.updateGLucose)(documentId, item);\n  };\n\n  var removeItemGLucose = function removeItemGLucose(documentId) {\n    setListItem(listItem.filter(function (item) {\n      return item.id !== documentId;\n    }));\n    (0,lib_service_glucose__WEBPACK_IMPORTED_MODULE_3__.deleteGlucose)(documentId);\n  };\n\n  var editiItemGLucose = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(function (newItem) {\n    var correction = newItem.correction,\n        date = newItem.date,\n        documentId = newItem.documentId,\n        glucose = newItem.glucose,\n        pressure = newItem.pressure,\n        time = newItem.time;\n    setDocumentId((newItem === null || newItem === void 0 ? void 0 : newItem.documentId) || null);\n    setDate(date);\n    setTime(time);\n    setGlucose(glucose);\n    setCorrection(correction);\n    setPressure(pressure);\n    setDocumentId(documentId);\n  }, []);\n\n  var clearAllFields = function clearAllFields() {\n    setDate(\"\");\n    setTime(\"\");\n    setGlucose(\"\");\n    setCorrection(\"\");\n    setPressure(\"\");\n    setDocumentId(null);\n    setTimeout(function () {\n      return setNewId(\"\");\n    }, 600);\n  };\n\n  return {\n    listItem: listItem,\n    addItemGlucose: addItemGlucose,\n    removeItemGLucose: removeItemGLucose,\n    editiItemGLucose: editiItemGLucose,\n    updateItemGLucose: updateItemGLucose,\n    time: time,\n    date: date,\n    glucose: glucose,\n    correction: correction,\n    pressure: pressure,\n    documentId: documentId,\n    newId: newId,\n    setDate: setDate,\n    setTime: setTime,\n    setGlucose: setGlucose,\n    setCorrection: setCorrection,\n    setPressure: setPressure,\n    setDocumentId: setDocumentId,\n    setNewId: setNewId,\n    clearAllFields: clearAllFields\n  };\n};\n\n_s2(UseListGlucoseContext, \"U1LQ/ec/YGK2Sl/75SAFlPgAbeE=\");\n\n_c2 = UseListGlucoseContext;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"ListProvider\");\n$RefreshReg$(_c2, \"UseListGlucoseContext\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aEJLO0lBaUJMQyxXQUFXLEVBQVhBLFdBakJLO0lBa0JMQyxhQUFhLEVBQWJBLGFBbEJLO0lBbUJMQyxRQUFRLEVBQVJBLFFBbkJLO0lBb0JMZSxjQUFjLEVBQWRBO0VBcEJLLENBQVA7QUFzQkQsQ0EvRU07O0lBQU1UOztNQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29udGV4dC9saXN0L2NvbnRleHRMaXN0LnRzeD9iNmNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFkZEdsdWNvc2UsIGRlbGV0ZUdsdWNvc2UsIGdldEFsbEdsdWNvc2UsIHVwZGF0ZUdMdWNvc2UgfSBmcm9tIFwibGliL3NlcnZpY2UvZ2x1Y29zZVwiO1xuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEl0ZW0gfSBmcm9tIFwidHlwZXMvbGlzdFwiO1xuXG50eXBlIENvbnRleHRMaXN0ID0ge1xuICBsaXN0SXRlbTogSXRlbVtdO1xuICBkYXRlOiBzdHJpbmcgfCBudWxsO1xuICB0aW1lOiBzdHJpbmcgfCBudWxsO1xuICBnbHVjb3NlOiBzdHJpbmcgfCBudWxsO1xuICBjb3JyZWN0aW9uOiBzdHJpbmcgfCBudWxsO1xuICBwcmVzc3VyZTogc3RyaW5nIHwgbnVsbDtcbiAgZG9jdW1lbnRJZDogc3RyaW5nIHwgbnVsbDtcbiAgbmV3SWQ6IHN0cmluZyB8IG51bGw7XG4gIHNldExpc3RJdGVtOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxJdGVtW10+PjtcbiAgc2V0RGF0ZTogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248c3RyaW5nIHwgbnVsbD4+O1xuICBzZXRUaW1lOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxzdHJpbmcgfCBudWxsPj47XG4gIHNldEdsdWNvc2U6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPHN0cmluZyB8IG51bGw+PjtcbiAgc2V0Q29ycmVjdGlvbjogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248c3RyaW5nIHwgbnVsbD4+O1xuICBzZXRQcmVzc3VyZTogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248c3RyaW5nIHwgbnVsbD4+O1xuICBzZXREb2N1bWVudElkOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxzdHJpbmcgfCBudWxsPj47XG4gIHNldE5ld0lkOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxzdHJpbmcgfCBudWxsPj47XG4gIC8vICAgb25EZWxldGVJdGVtOiAoZG9jdW1lbnRJZDogc3RyaW5nKSA9PiB2b2lkO1xuICAvLyAgIG9uRWRpdEl0ZW06IChpdGVtOiBJdGVtKSA9PiB2b2lkO1xuICAvLyAgIGFkZEdsdWNvc2U6IChpdGVtOiBJdGVtKSA9PiB2b2lkO1xufTtcblxuZXhwb3J0IGNvbnN0IExpc3RDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxDb250ZXh0TGlzdD4oe1xuICBsaXN0SXRlbTogW10sXG4gIGRhdGU6IG51bGwsXG4gIHRpbWU6IG51bGwsXG4gIGdsdWNvc2U6IG51bGwsXG4gIGNvcnJlY3Rpb246IG51bGwsXG4gIHByZXNzdXJlOiBudWxsLFxuICBkb2N1bWVudElkOiBudWxsLFxuICBuZXdJZDogbnVsbCxcbiAgc2V0TGlzdEl0ZW06ICgpID0+IHt9LFxuICBzZXREYXRlOiAoKSA9PiB7fSxcbiAgc2V0VGltZTogKCkgPT4ge30sXG4gIHNldEdsdWNvc2U6ICgpID0+IHt9LFxuICBzZXRDb3JyZWN0aW9uOiAoKSA9PiB7fSxcbiAgc2V0UHJlc3N1cmU6ICgpID0+IHt9LFxuICBzZXREb2N1bWVudElkOiAoKSA9PiB7fSxcbiAgc2V0TmV3SWQ6ICgpID0+IHt9LFxuXG4gIC8vICAgb25EZWxldGVJdGVtOiAoKSA9PiB7fSxcbiAgLy8gICBvbkVkaXRJdGVtOiAoKSA9PiB7fSxcbiAgLy8gICBhZGRHbHVjb3NlOiAoKSA9PiB7fSxcbn0pO1xuXG5MaXN0Q29udGV4dC5kaXNwbGF5TmFtZSA9IFwibGlzdEdsdWNvc2VcIjtcblxudHlwZSBQcm9wc0xpc3QgPSB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG59O1xuXG5leHBvcnQgY29uc3QgTGlzdFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfTogUHJvcHNMaXN0KSA9PiB7XG4gIGNvbnN0IFtsaXN0SXRlbSwgc2V0TGlzdEl0ZW1dID0gdXNlU3RhdGU8SXRlbVtdPihbXG4gICAge1xuICAgICAgaWQ6IG51bGwsXG4gICAgICBkYXRlOiBudWxsLFxuICAgICAgdGltZTogbnVsbCxcbiAgICAgIGdsdWNvc2U6IG51bGwsXG4gICAgICBjb3JyZWN0aW9uOiBudWxsLFxuICAgICAgZG9jdW1lbnRJZDogbnVsbCxcbiAgICAgIHByZXNzdXJlOiBudWxsLFxuICAgIH0sXG4gIF0pO1xuICBjb25zdCBbZGF0ZSwgc2V0RGF0ZV0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW3RpbWUsIHNldFRpbWVdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtnbHVjb3NlLCBzZXRHbHVjb3NlXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbY29ycmVjdGlvbiwgc2V0Q29ycmVjdGlvbl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW3ByZXNzdXJlLCBzZXRQcmVzc3VyZV0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2RvY3VtZW50SWQsIHNldERvY3VtZW50SWRdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtuZXdJZCwgc2V0TmV3SWRdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4oXCJcIik7XG5cbiAgICBjb25zdCBnZXRBbGxMaXN0ID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xuICAgICAgc2V0TGlzdEl0ZW0oYXdhaXQgZ2V0QWxsR2x1Y29zZSgpKTtcbiAgICB9LCBbXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgZ2V0QWxsTGlzdCgpO1xuICAgIH0sIFtnZXRBbGxMaXN0XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGlzdENvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIGxpc3RJdGVtLFxuICAgICAgICBzZXRMaXN0SXRlbSxcbiAgICAgICAgZGF0ZSxcbiAgICAgICAgc2V0RGF0ZSxcbiAgICAgICAgdGltZSxcbiAgICAgICAgZ2x1Y29zZSxcbiAgICAgICAgY29ycmVjdGlvbixcbiAgICAgICAgcHJlc3N1cmUsXG4gICAgICAgIGRvY3VtZW50SWQsXG4gICAgICAgIG5ld0lkLFxuICAgICAgICBzZXRUaW1lLFxuICAgICAgICBzZXRHbHVjb3NlLFxuICAgICAgICBzZXRDb3JyZWN0aW9uLFxuICAgICAgICBzZXRQcmVzc3VyZSxcbiAgICAgICAgc2V0RG9jdW1lbnRJZCxcbiAgICAgICAgc2V0TmV3SWQsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0xpc3RDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IFVzZUxpc3RHbHVjb3NlQ29udGV4dCA9ICgpID0+IHtcbiAgY29uc3Qge1xuICAgIGxpc3RJdGVtLFxuICAgIHNldExpc3RJdGVtLFxuICAgIHNldERhdGUsXG4gICAgZGF0ZSxcbiAgICB0aW1lLFxuICAgIHNldFRpbWUsXG4gICAgY29ycmVjdGlvbixcbiAgICBzZXRDb3JyZWN0aW9uLFxuICAgIGRvY3VtZW50SWQsXG4gICAgc2V0RG9jdW1lbnRJZCxcbiAgICBnbHVjb3NlLFxuICAgIHNldEdsdWNvc2UsXG4gICAgbmV3SWQsXG4gICAgc2V0TmV3SWQsXG4gICAgcHJlc3N1cmUsXG4gICAgc2V0UHJlc3N1cmUsXG4gIH0gPSB1c2VDb250ZXh0KExpc3RDb250ZXh0KTtcblxuICBjb25zdCBhZGRJdGVtR2x1Y29zZSA9IChpdGVtOiBJdGVtKSA9PiB7XG4gICAgc2V0TGlzdEl0ZW0oKHByZXYpID0+IFsuLi5wcmV2LCBpdGVtXSk7XG4gICAgYWRkR2x1Y29zZShpdGVtKVxuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZUl0ZW1HTHVjb3NlID0gKGRvY3VtZW50SWQ6IHN0cmluZywgaXRlbTpJdGVtKSA9PiB7XG4gICAgdXBkYXRlR0x1Y29zZShkb2N1bWVudElkLCBpdGVtKVxuICB9XG5cbiAgY29uc3QgcmVtb3ZlSXRlbUdMdWNvc2UgPSAoZG9jdW1lbnRJZDogc3RyaW5nKSA9PiB7XG4gICAgc2V0TGlzdEl0ZW0obGlzdEl0ZW0uZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkICE9PSBkb2N1bWVudElkKSk7XG4gICAgZGVsZXRlR2x1Y29zZShkb2N1bWVudElkKTtcbiAgfTtcblxuICBjb25zdCBlZGl0aUl0ZW1HTHVjb3NlID0gdXNlQ2FsbGJhY2soKG5ld0l0ZW06IEl0ZW0pID0+IHtcbiAgICBjb25zdCB7IGNvcnJlY3Rpb24sIGRhdGUsIGRvY3VtZW50SWQsIGdsdWNvc2UsIHByZXNzdXJlLCB0aW1lIH0gPSBuZXdJdGVtO1xuICAgIHNldERvY3VtZW50SWQobmV3SXRlbT8uZG9jdW1lbnRJZCB8fCBudWxsKVxuICAgIHNldERhdGUoZGF0ZSk7XG4gICAgc2V0VGltZSh0aW1lIGFzIHN0cmluZyk7XG4gICAgc2V0R2x1Y29zZShnbHVjb3NlIGFzIHN0cmluZyk7XG4gICAgc2V0Q29ycmVjdGlvbihjb3JyZWN0aW9uKTtcbiAgICBzZXRQcmVzc3VyZShwcmVzc3VyZSBhcyBzdHJpbmcpO1xuICAgIHNldERvY3VtZW50SWQoZG9jdW1lbnRJZCBhcyBzdHJpbmcpO1xuXG4gIH0sIFtdKTtcblxuICBjb25zdCBjbGVhckFsbEZpZWxkcyA9ICgpID0+IHtcbiAgICBzZXREYXRlKFwiXCIpO1xuICAgIHNldFRpbWUoXCJcIik7XG4gICAgc2V0R2x1Y29zZShcIlwiKTtcbiAgICBzZXRDb3JyZWN0aW9uKFwiXCIpO1xuICAgIHNldFByZXNzdXJlKFwiXCIpO1xuICAgIHNldERvY3VtZW50SWQobnVsbCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiBzZXROZXdJZChcIlwiKSwgNjAwKTtcbiAgfTtcblxuXG4gIHJldHVybiB7XG4gICAgbGlzdEl0ZW0sXG4gICAgYWRkSXRlbUdsdWNvc2UsXG4gICAgcmVtb3ZlSXRlbUdMdWNvc2UsXG4gICAgZWRpdGlJdGVtR0x1Y29zZSxcbiAgICB1cGRhdGVJdGVtR0x1Y29zZSxcbiAgICB0aW1lLFxuICAgIGRhdGUsXG4gICAgZ2x1Y29zZSxcbiAgICBjb3JyZWN0aW9uLFxuICAgIHByZXNzdXJlLFxuICAgIGRvY3VtZW50SWQsXG4gICAgbmV3SWQsXG4gICAgc2V0RGF0ZSxcbiAgICBzZXRUaW1lLFxuICAgIHNldEdsdWNvc2UsXG4gICAgc2V0Q29ycmVjdGlvbixcbiAgICBzZXRQcmVzc3VyZSxcbiAgICBzZXREb2N1bWVudElkLFxuICAgIHNldE5ld0lkLFxuICAgIGNsZWFyQWxsRmllbGRzXG4gIH07XG59O1xuIl0sIm5hbWVzIjpbImFkZEdsdWNvc2UiLCJkZWxldGVHbHVjb3NlIiwiZ2V0QWxsR2x1Y29zZSIsInVwZGF0ZUdMdWNvc2UiLCJ1c2VDb250ZXh0IiwidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJMaXN0Q29udGV4dCIsImxpc3RJdGVtIiwiZGF0ZSIsInRpbWUiLCJnbHVjb3NlIiwiY29ycmVjdGlvbiIsInByZXNzdXJlIiwiZG9jdW1lbnRJZCIsIm5ld0lkIiwic2V0TGlzdEl0ZW0iLCJzZXREYXRlIiwic2V0VGltZSIsInNldEdsdWNvc2UiLCJzZXRDb3JyZWN0aW9uIiwic2V0UHJlc3N1cmUiLCJzZXREb2N1bWVudElkIiwic2V0TmV3SWQiLCJkaXNwbGF5TmFtZSIsIkxpc3RQcm92aWRlciIsImNoaWxkcmVuIiwiaWQiLCJnZXRBbGxMaXN0IiwiVXNlTGlzdEdsdWNvc2VDb250ZXh0IiwiYWRkSXRlbUdsdWNvc2UiLCJpdGVtIiwicHJldiIsInVwZGF0ZUl0ZW1HTHVjb3NlIiwicmVtb3ZlSXRlbUdMdWNvc2UiLCJmaWx0ZXIiLCJlZGl0aUl0ZW1HTHVjb3NlIiwibmV3SXRlbSIsImNsZWFyQWxsRmllbGRzIiwic2V0VGltZW91dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/context/list/contextList.tsx\n"));

/***/ })

});