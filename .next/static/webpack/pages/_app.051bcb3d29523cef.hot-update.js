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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ListContext\": function() { return /* binding */ ListContext; },\n/* harmony export */   \"ListProvider\": function() { return /* binding */ ListProvider; },\n/* harmony export */   \"UseListGlucoseContext\": function() { return /* binding */ UseListGlucoseContext; }\n/* harmony export */ });\n/* harmony import */ var _home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/home/juliofreitas/\\xC1rea de Trabalho/glucose/src/context/list/contextList.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\n\n\nvar ListContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n  listItem: [],\n  date: null,\n  time: null,\n  glucose: null,\n  correction: null,\n  pressure: null,\n  documentId: null,\n  newId: null,\n  setListItem: function setListItem() {},\n  setDate: function setDate() {},\n  setTime: function setTime() {},\n  setGlucose: function setGlucose() {},\n  setCorrection: function setCorrection() {},\n  setPressure: function setPressure() {},\n  setDocumentId: function setDocumentId() {} //   onDeleteItem: () => {},\n  //   onEditItem: () => {},\n  //   addGlucose: () => {},\n\n});\nListContext.displayName = \"listGlucose\";\nvar ListProvider = function ListProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([{\n    id: null,\n    date: null,\n    time: null,\n    glucose: null,\n    correction: null,\n    documentId: null,\n    pressure: null\n  }]),\n      listItem = _useState[0],\n      setListItem = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),\n      date = _useState2[0],\n      setDate = _useState2[1]; //   const getAllList = useCallback(async () => {\n  //     setListItem(await getAllGlucose());\n  //     console.log(listItem);\n  //   }, []);\n  //   useEffect(() => {\n  //     getAllList();\n  //   }, [getAllList]);\n\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(ListContext.Provider, {\n    value: {\n      listItem: listItem,\n      setListItem: setListItem,\n      date: date,\n      setDate: setDate\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 79,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ListProvider, \"a77HYpFYmQu1J1Af3MA4JpR8g9M=\");\n\n_c = ListProvider;\nvar UseListGlucoseContext = function UseListGlucoseContext() {\n  _s2();\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ListContext),\n      listItem = _useContext.listItem,\n      setListItem = _useContext.setListItem,\n      setDate = _useContext.setDate,\n      date = _useContext.date;\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),\n      time = _useState3[0],\n      setTime = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),\n      glucose = _useState4[0],\n      setGlucose = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),\n      correction = _useState5[0],\n      setCorrection = _useState5[1];\n\n  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),\n      pressure = _useState6[0],\n      setPressure = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),\n      documentId = _useState7[0],\n      setDocumentId = _useState7[1];\n\n  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"),\n      newId = _useState8[0],\n      setNewId = _useState8[1];\n\n  var addItemGlucose = function addItemGlucose(item) {\n    setListItem(function (prev) {\n      return [].concat((0,_home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(prev), [item]);\n    });\n  };\n\n  var removeItemGLucose = function removeItemGLucose(documentId) {\n    setListItem(listItem.filter(function (item) {\n      return item.id !== documentId;\n    }));\n  };\n\n  var updateItemGLucose = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (newItem) {\n    // const newList = listItem.map((glucose) => {\n    //   if (glucose.id === newItem.id) {\n    //     return {\n    //       ...glucose,\n    //       newItem,\n    //     };\n    //   }\n    //   return glucose;\n    // });\n    var correction = newItem.correction,\n        date = newItem.date,\n        documentId = newItem.documentId,\n        glucose = newItem.glucose,\n        pressure = newItem.pressure,\n        time = newItem.time;\n    setDate(newItem === null || newItem === void 0 ? void 0 : newItem.date);\n    setTime(time);\n    setGlucose(glucose);\n    setCorrection(correction);\n    setPressure(pressure);\n    setDocumentId(documentId); // setListItem(newList);\n  }, []);\n  return {\n    listItem: listItem,\n    addItemGlucose: addItemGlucose,\n    removeItemGLucose: removeItemGLucose,\n    updateItemGLucose: updateItemGLucose,\n    time: time,\n    date: date,\n    glucose: glucose,\n    correction: correction,\n    pressure: pressure,\n    documentId: documentId,\n    newId: newId,\n    setDate: setDate,\n    setTime: setTime,\n    setGlucose: setGlucose,\n    setCorrection: setCorrection,\n    setPressure: setPressure,\n    setDocumentId: setDocumentId,\n    setNewId: setNewId\n  };\n};\n\n_s2(UseListGlucoseContext, \"dXz2d0rKGCo8g/qEyESi22DvWAY=\");\n\n_c2 = UseListGlucoseContext;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"ListProvider\");\n$RefreshReg$(_c2, \"UseListGlucoseContext\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFELENBQVY7SUFDQVMsYUFBYSxDQUFDUixVQUFELENBQWI7SUFDQVMsV0FBVyxDQUFDUixRQUFELENBQVg7SUFDQVMsYUFBYSxDQUFDUixVQUFELENBQWIsQ0FqQnVELENBa0J2RDtFQUNELENBbkJvQyxFQW1CbEMsRUFuQmtDLENBQXJDO0VBcUJBLE9BQU87SUFDTE4sUUFBUSxFQUFSQSxRQURLO0lBRUxxQixjQUFjLEVBQWRBLGNBRks7SUFHTEcsaUJBQWlCLEVBQWpCQSxpQkFISztJQUlMRSxpQkFBaUIsRUFBakJBLGlCQUpLO0lBS0x4QixJQUFJLEVBQUpBLElBTEs7SUFNTEQsSUFBSSxFQUFKQSxJQU5LO0lBT0xFLE9BQU8sRUFBUEEsT0FQSztJQVFMQyxVQUFVLEVBQVZBLFVBUks7SUFTTEMsUUFBUSxFQUFSQSxRQVRLO0lBVUxDLFVBQVUsRUFBVkEsVUFWSztJQVdMQyxLQUFLLEVBQUxBLEtBWEs7SUFZTEUsT0FBTyxFQUFQQSxPQVpLO0lBYUxDLE9BQU8sRUFBUEEsT0FiSztJQWNMQyxVQUFVLEVBQVZBLFVBZEs7SUFlTEMsYUFBYSxFQUFiQSxhQWZLO0lBZ0JMQyxXQUFXLEVBQVhBLFdBaEJLO0lBaUJMQyxhQUFhLEVBQWJBLGFBakJLO0lBa0JMTSxRQUFRLEVBQVJBO0VBbEJLLENBQVA7QUFvQkQsQ0ExRE07O0lBQU1EOztNQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29udGV4dC9saXN0L2NvbnRleHRMaXN0LnRzeD9iNmNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldEFsbEdsdWNvc2UgfSBmcm9tIFwibGliL3NlcnZpY2UvZ2x1Y29zZVwiO1xuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEl0ZW0gfSBmcm9tIFwidHlwZXMvbGlzdFwiO1xuXG50eXBlIENvbnRleHRMaXN0ID0ge1xuICBsaXN0SXRlbTogSXRlbVtdO1xuICBkYXRlOiBzdHJpbmcgfCBudWxsO1xuICB0aW1lOiBzdHJpbmcgfCBudWxsO1xuICBnbHVjb3NlOiBzdHJpbmcgfCBudWxsO1xuICBjb3JyZWN0aW9uOiBzdHJpbmcgfCBudWxsO1xuICBwcmVzc3VyZTogc3RyaW5nIHwgbnVsbDtcbiAgZG9jdW1lbnRJZDogc3RyaW5nIHwgbnVsbDtcbiAgbmV3SWQ6IHN0cmluZyB8IG51bGw7XG4gIHNldExpc3RJdGVtOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxJdGVtW10+PjtcbiAgc2V0RGF0ZTogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248c3RyaW5nIHwgbnVsbD4+O1xuICBzZXRUaW1lOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxzdHJpbmcgfCBudWxsPj47XG4gIHNldEdsdWNvc2U6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPHN0cmluZyB8IG51bGw+PjtcbiAgc2V0Q29ycmVjdGlvbjogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248c3RyaW5nIHwgbnVsbD4+O1xuICBzZXRQcmVzc3VyZTogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248c3RyaW5nIHwgbnVsbD4+O1xuICBzZXREb2N1bWVudElkOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxzdHJpbmcgfCBudWxsPj47XG4gIC8vICAgb25EZWxldGVJdGVtOiAoZG9jdW1lbnRJZDogc3RyaW5nKSA9PiB2b2lkO1xuICAvLyAgIG9uRWRpdEl0ZW06IChpdGVtOiBJdGVtKSA9PiB2b2lkO1xuICAvLyAgIGFkZEdsdWNvc2U6IChpdGVtOiBJdGVtKSA9PiB2b2lkO1xufTtcblxuZXhwb3J0IGNvbnN0IExpc3RDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxDb250ZXh0TGlzdD4oe1xuICBsaXN0SXRlbTogW10sXG4gIGRhdGU6IG51bGwsXG4gIHRpbWU6IG51bGwsXG5nbHVjb3NlOiBudWxsLFxuY29ycmVjdGlvbjogbnVsbCxcbnByZXNzdXJlOiBudWxsLFxuZG9jdW1lbnRJZDogbnVsbCxcbm5ld0lkOiBudWxsLFxuICBzZXRMaXN0SXRlbTogKCkgPT4ge30sXG4gIHNldERhdGU6ICgpID0+IHt9LFxuc2V0VGltZTogKCkgPT4ge30sXG5zZXRHbHVjb3NlOiAoKSA9PiB7fSxcbnNldENvcnJlY3Rpb246ICgpID0+IHt9LFxuc2V0UHJlc3N1cmU6ICgpID0+IHt9LFxuc2V0RG9jdW1lbnRJZDogKCkgPT4ge30sXG5cbiAgLy8gICBvbkRlbGV0ZUl0ZW06ICgpID0+IHt9LFxuICAvLyAgIG9uRWRpdEl0ZW06ICgpID0+IHt9LFxuICAvLyAgIGFkZEdsdWNvc2U6ICgpID0+IHt9LFxufSk7XG5cbkxpc3RDb250ZXh0LmRpc3BsYXlOYW1lID0gXCJsaXN0R2x1Y29zZVwiO1xuXG50eXBlIFByb3BzTGlzdCA9IHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbn07XG5cbmV4cG9ydCBjb25zdCBMaXN0UHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9OiBQcm9wc0xpc3QpID0+IHtcbiAgY29uc3QgW2xpc3RJdGVtLCBzZXRMaXN0SXRlbV0gPSB1c2VTdGF0ZTxJdGVtW10+KFtcbiAgICB7XG4gICAgICBpZDogbnVsbCxcbiAgICAgIGRhdGU6IG51bGwsXG4gICAgICB0aW1lOiBudWxsLFxuICAgICAgZ2x1Y29zZTogbnVsbCxcbiAgICAgIGNvcnJlY3Rpb246IG51bGwsXG4gICAgICBkb2N1bWVudElkOiBudWxsLFxuICAgICAgcHJlc3N1cmU6IG51bGwsXG4gICAgfSxcbiAgXSk7XG4gIGNvbnN0IFtkYXRlLCBzZXREYXRlXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuXG4gIC8vICAgY29uc3QgZ2V0QWxsTGlzdCA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcbiAgLy8gICAgIHNldExpc3RJdGVtKGF3YWl0IGdldEFsbEdsdWNvc2UoKSk7XG4gIC8vICAgICBjb25zb2xlLmxvZyhsaXN0SXRlbSk7XG4gIC8vICAgfSwgW10pO1xuICAvLyAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgICBnZXRBbGxMaXN0KCk7XG4gIC8vICAgfSwgW2dldEFsbExpc3RdKTtcblxuICByZXR1cm4gKFxuICAgIDxMaXN0Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBsaXN0SXRlbSwgc2V0TGlzdEl0ZW0sIGRhdGUsIHNldERhdGUgfX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9MaXN0Q29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBVc2VMaXN0R2x1Y29zZUNvbnRleHQgPSAoKSA9PiB7XG4gIGNvbnN0IHsgbGlzdEl0ZW0sIHNldExpc3RJdGVtLCBzZXREYXRlLCBkYXRlIH0gPSB1c2VDb250ZXh0KExpc3RDb250ZXh0KTtcbiAgY29uc3QgW3RpbWUsIHNldFRpbWVdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtnbHVjb3NlLCBzZXRHbHVjb3NlXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbY29ycmVjdGlvbiwgc2V0Q29ycmVjdGlvbl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW3ByZXNzdXJlLCBzZXRQcmVzc3VyZV0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2RvY3VtZW50SWQsIHNldERvY3VtZW50SWRdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtuZXdJZCwgc2V0TmV3SWRdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgYWRkSXRlbUdsdWNvc2UgPSAoaXRlbTogSXRlbSkgPT4ge1xuICAgIHNldExpc3RJdGVtKChwcmV2KSA9PiBbLi4ucHJldiwgaXRlbV0pO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZUl0ZW1HTHVjb3NlID0gKGRvY3VtZW50SWQ6IHN0cmluZykgPT4ge1xuICAgIHNldExpc3RJdGVtKGxpc3RJdGVtLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCAhPT0gZG9jdW1lbnRJZCkpO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZUl0ZW1HTHVjb3NlID0gdXNlQ2FsbGJhY2soKG5ld0l0ZW06IEl0ZW0pID0+IHtcbiAgICAvLyBjb25zdCBuZXdMaXN0ID0gbGlzdEl0ZW0ubWFwKChnbHVjb3NlKSA9PiB7XG4gICAgLy8gICBpZiAoZ2x1Y29zZS5pZCA9PT0gbmV3SXRlbS5pZCkge1xuICAgIC8vICAgICByZXR1cm4ge1xuICAgIC8vICAgICAgIC4uLmdsdWNvc2UsXG4gICAgLy8gICAgICAgbmV3SXRlbSxcbiAgICAvLyAgICAgfTtcbiAgICAvLyAgIH1cbiAgICAvLyAgIHJldHVybiBnbHVjb3NlO1xuICAgIC8vIH0pO1xuICAgIGNvbnN0IHsgY29ycmVjdGlvbiwgZGF0ZSwgZG9jdW1lbnRJZCwgZ2x1Y29zZSwgcHJlc3N1cmUsIHRpbWUgfSA9IG5ld0l0ZW07XG5cbiAgICBzZXREYXRlKG5ld0l0ZW0/LmRhdGUpO1xuICAgIHNldFRpbWUodGltZSBhcyBzdHJpbmcpO1xuICAgIHNldEdsdWNvc2UoZ2x1Y29zZSBhcyBzdHJpbmcpO1xuICAgIHNldENvcnJlY3Rpb24oY29ycmVjdGlvbik7XG4gICAgc2V0UHJlc3N1cmUocHJlc3N1cmUgYXMgc3RyaW5nKTtcbiAgICBzZXREb2N1bWVudElkKGRvY3VtZW50SWQgYXMgc3RyaW5nKTtcbiAgICAvLyBzZXRMaXN0SXRlbShuZXdMaXN0KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiB7XG4gICAgbGlzdEl0ZW0sXG4gICAgYWRkSXRlbUdsdWNvc2UsXG4gICAgcmVtb3ZlSXRlbUdMdWNvc2UsXG4gICAgdXBkYXRlSXRlbUdMdWNvc2UsXG4gICAgdGltZSxcbiAgICBkYXRlLFxuICAgIGdsdWNvc2UsXG4gICAgY29ycmVjdGlvbixcbiAgICBwcmVzc3VyZSxcbiAgICBkb2N1bWVudElkLFxuICAgIG5ld0lkLFxuICAgIHNldERhdGUsXG4gICAgc2V0VGltZSxcbiAgICBzZXRHbHVjb3NlLFxuICAgIHNldENvcnJlY3Rpb24sXG4gICAgc2V0UHJlc3N1cmUsXG4gICAgc2V0RG9jdW1lbnRJZCxcbiAgICBzZXROZXdJZCxcbiAgfTtcbn07XG4iXSwibmFtZXMiOlsidXNlQ29udGV4dCIsInVzZUNhbGxiYWNrIiwiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwiTGlzdENvbnRleHQiLCJsaXN0SXRlbSIsImRhdGUiLCJ0aW1lIiwiZ2x1Y29zZSIsImNvcnJlY3Rpb24iLCJwcmVzc3VyZSIsImRvY3VtZW50SWQiLCJuZXdJZCIsInNldExpc3RJdGVtIiwic2V0RGF0ZSIsInNldFRpbWUiLCJzZXRHbHVjb3NlIiwic2V0Q29ycmVjdGlvbiIsInNldFByZXNzdXJlIiwic2V0RG9jdW1lbnRJZCIsImRpc3BsYXlOYW1lIiwiTGlzdFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJpZCIsIlVzZUxpc3RHbHVjb3NlQ29udGV4dCIsInNldE5ld0lkIiwiYWRkSXRlbUdsdWNvc2UiLCJpdGVtIiwicHJldiIsInJlbW92ZUl0ZW1HTHVjb3NlIiwiZmlsdGVyIiwidXBkYXRlSXRlbUdMdWNvc2UiLCJuZXdJdGVtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/context/list/contextList.tsx\n"));

/***/ })

});