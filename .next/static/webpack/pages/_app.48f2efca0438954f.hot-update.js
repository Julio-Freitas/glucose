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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ListContext\": function() { return /* binding */ ListContext; },\n/* harmony export */   \"ListProvider\": function() { return /* binding */ ListProvider; },\n/* harmony export */   \"UseListGlucoseContext\": function() { return /* binding */ UseListGlucoseContext; }\n/* harmony export */ });\n/* harmony import */ var _home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/home/juliofreitas/\\xC1rea de Trabalho/glucose/src/context/list/contextList.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\n\n\nvar ListContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n  listItem: [],\n  setListItem: function setListItem() {},\n  date: null,\n  setDate: function setDate() {} //   onDeleteItem: () => {},\n  //   onEditItem: () => {},\n  //   addGlucose: () => {},\n\n});\nListContext.displayName = \"listGlucose\";\nvar ListProvider = function ListProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([{\n    id: null,\n    date: null,\n    time: null,\n    glucose: null,\n    correction: null,\n    documentId: null,\n    pressure: null\n  }]),\n      listItem = _useState[0],\n      setListItem = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),\n      date = _useState2[0],\n      setDate = _useState2[1]; //   const getAllList = useCallback(async () => {\n  //     setListItem(await getAllGlucose());\n  //     console.log(listItem);\n  //   }, []);\n  //   useEffect(() => {\n  //     getAllList();\n  //   }, [getAllList]);\n\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(ListContext.Provider, {\n    value: {\n      listItem: listItem,\n      setListItem: setListItem,\n      date: date,\n      setDate: setDate\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 56,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ListProvider, \"a77HYpFYmQu1J1Af3MA4JpR8g9M=\");\n\n_c = ListProvider;\nvar UseListGlucoseContext = function UseListGlucoseContext() {\n  _s2();\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ListContext),\n      listItem = _useContext.listItem,\n      setListItem = _useContext.setListItem,\n      setDate = _useContext.setDate,\n      date = _useContext.date;\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),\n      time = _useState3[0],\n      setTime = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),\n      glucose = _useState4[0],\n      setGlucose = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),\n      correction = _useState5[0],\n      setCorrection = _useState5[1];\n\n  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),\n      pressure = _useState6[0],\n      setPressure = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),\n      documentId = _useState7[0],\n      setDocumentId = _useState7[1];\n\n  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"),\n      newId = _useState8[0],\n      setNewId = _useState8[1];\n\n  var addItemGlucose = function addItemGlucose(item) {\n    setListItem(function (prev) {\n      return [].concat((0,_home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(prev), [item]);\n    });\n  };\n\n  var removeItemGLucose = function removeItemGLucose(documentId) {\n    setListItem(listItem.filter(function (item) {\n      return item.id !== documentId;\n    }));\n  };\n\n  var updateItemGLucose = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (newItem) {\n    // const newList = listItem.map((glucose) => {\n    //   if (glucose.id === newItem.id) {\n    //     return {\n    //       ...glucose,\n    //       newItem,\n    //     };\n    //   }\n    //   return glucose;\n    // });\n    var correction = newItem.correction,\n        date = newItem.date,\n        documentId = newItem.documentId,\n        glucose = newItem.glucose,\n        pressure = newItem.pressure,\n        time = newItem.time;\n    setDate(newItem === null || newItem === void 0 ? void 0 : newItem.date);\n    setTime(time);\n    setGlucose(glucose);\n    setCorrection(correction);\n    setPressure(pressure);\n    setDocumentId(documentId); // setListItem(newList);\n  }, []);\n  return {\n    listItem: listItem,\n    addItemGlucose: addItemGlucose,\n    removeItemGLucose: removeItemGLucose,\n    updateItemGLucose: updateItemGLucose,\n    time: time,\n    glucose: glucose,\n    correction: correction,\n    pressure: pressure,\n    documentId: documentId,\n    newId: newId,\n    setDate: setDate,\n    setTime: setTime,\n    setGlucose: setGlucose,\n    setCorrection: setCorrection,\n    setPressure: setPressure,\n    setDocumentId: setDocumentId,\n    setNewId: setNewId\n  };\n};\n\n_s2(UseListGlucoseContext, \"dXz2d0rKGCo8g/qEyESi22DvWAY=\");\n\n_c2 = UseListGlucoseContext;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"ListProvider\");\n$RefreshReg$(_c2, \"UseListGlucoseContext\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUxFLFFBQVEsRUFBUkEsUUFSSztJQVNMRCxVQUFVLEVBQVZBLFVBVEs7SUFVTFEsS0FBSyxFQUFMQSxLQVZLO0lBV0xoQixPQUFPLEVBQVBBLE9BWEs7SUFZTFcsT0FBTyxFQUFQQSxPQVpLO0lBYUxDLFVBQVUsRUFBVkEsVUFiSztJQWNMQyxhQUFhLEVBQWJBLGFBZEs7SUFlTEMsV0FBVyxFQUFYQSxXQWZLO0lBZ0JMQyxhQUFhLEVBQWJBLGFBaEJLO0lBaUJMRSxRQUFRLEVBQVJBO0VBakJLLENBQVA7QUFtQkQsQ0E3RE07O0lBQU1QOztNQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29udGV4dC9saXN0L2NvbnRleHRMaXN0LnRzeD9iNmNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldEFsbEdsdWNvc2UgfSBmcm9tIFwibGliL3NlcnZpY2UvZ2x1Y29zZVwiO1xuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEl0ZW0gfSBmcm9tIFwidHlwZXMvbGlzdFwiO1xuXG50eXBlIENvbnRleHRMaXN0ID0ge1xuICBsaXN0SXRlbTogSXRlbVtdO1xuICBzZXRMaXN0SXRlbTogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248SXRlbVtdPj47XG4gIGRhdGU6IHN0cmluZyB8IG51bGw7XG4gIHNldERhdGU6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPHN0cmluZyB8IG51bGw+PjtcbiAgLy8gICBvbkRlbGV0ZUl0ZW06IChkb2N1bWVudElkOiBzdHJpbmcpID0+IHZvaWQ7XG4gIC8vICAgb25FZGl0SXRlbTogKGl0ZW06IEl0ZW0pID0+IHZvaWQ7XG4gIC8vICAgYWRkR2x1Y29zZTogKGl0ZW06IEl0ZW0pID0+IHZvaWQ7XG59O1xuXG5leHBvcnQgY29uc3QgTGlzdENvbnRleHQgPSBjcmVhdGVDb250ZXh0PENvbnRleHRMaXN0Pih7XG4gIGxpc3RJdGVtOiBbXSxcbiAgc2V0TGlzdEl0ZW06ICgpID0+IHt9LFxuICBkYXRlOiBudWxsLFxuICBzZXREYXRlOiAoKSA9PiB7fSxcbiAgLy8gICBvbkRlbGV0ZUl0ZW06ICgpID0+IHt9LFxuICAvLyAgIG9uRWRpdEl0ZW06ICgpID0+IHt9LFxuICAvLyAgIGFkZEdsdWNvc2U6ICgpID0+IHt9LFxufSk7XG5cbkxpc3RDb250ZXh0LmRpc3BsYXlOYW1lID0gXCJsaXN0R2x1Y29zZVwiO1xuXG50eXBlIFByb3BzTGlzdCA9IHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbn07XG5cbmV4cG9ydCBjb25zdCBMaXN0UHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9OiBQcm9wc0xpc3QpID0+IHtcbiAgY29uc3QgW2xpc3RJdGVtLCBzZXRMaXN0SXRlbV0gPSB1c2VTdGF0ZTxJdGVtW10+KFtcbiAgICB7XG4gICAgICBpZDogbnVsbCxcbiAgICAgIGRhdGU6IG51bGwsXG4gICAgICB0aW1lOiBudWxsLFxuICAgICAgZ2x1Y29zZTogbnVsbCxcbiAgICAgIGNvcnJlY3Rpb246IG51bGwsXG4gICAgICBkb2N1bWVudElkOiBudWxsLFxuICAgICAgcHJlc3N1cmU6IG51bGwsXG4gICAgfSxcbiAgXSk7XG4gIGNvbnN0IFtkYXRlLCBzZXREYXRlXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpXG5cbiAgLy8gICBjb25zdCBnZXRBbGxMaXN0ID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xuICAvLyAgICAgc2V0TGlzdEl0ZW0oYXdhaXQgZ2V0QWxsR2x1Y29zZSgpKTtcbiAgLy8gICAgIGNvbnNvbGUubG9nKGxpc3RJdGVtKTtcbiAgLy8gICB9LCBbXSk7XG4gIC8vICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICAgIGdldEFsbExpc3QoKTtcbiAgLy8gICB9LCBbZ2V0QWxsTGlzdF0pO1xuXG4gIHJldHVybiAoXG4gICAgPExpc3RDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGxpc3RJdGVtLCBzZXRMaXN0SXRlbSwgZGF0ZSwgc2V0RGF0ZSB9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0xpc3RDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IFVzZUxpc3RHbHVjb3NlQ29udGV4dCA9ICgpID0+IHtcbiAgY29uc3QgeyBsaXN0SXRlbSwgc2V0TGlzdEl0ZW0sIHNldERhdGUsIGRhdGUgfSA9IHVzZUNvbnRleHQoTGlzdENvbnRleHQpO1xuICBjb25zdCBbdGltZSwgc2V0VGltZV0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2dsdWNvc2UsIHNldEdsdWNvc2VdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtjb3JyZWN0aW9uLCBzZXRDb3JyZWN0aW9uXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbcHJlc3N1cmUsIHNldFByZXNzdXJlXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbZG9jdW1lbnRJZCwgc2V0RG9jdW1lbnRJZF0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW25ld0lkLCBzZXROZXdJZF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBhZGRJdGVtR2x1Y29zZSA9IChpdGVtOiBJdGVtKSA9PiB7XG4gICAgc2V0TGlzdEl0ZW0oKHByZXYpID0+IFsuLi5wcmV2LCBpdGVtXSk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlSXRlbUdMdWNvc2UgPSAoZG9jdW1lbnRJZDogc3RyaW5nKSA9PiB7XG4gICAgc2V0TGlzdEl0ZW0obGlzdEl0ZW0uZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkICE9PSBkb2N1bWVudElkKSk7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlSXRlbUdMdWNvc2UgPSB1c2VDYWxsYmFjaygobmV3SXRlbTogSXRlbSkgPT4ge1xuICAgIC8vIGNvbnN0IG5ld0xpc3QgPSBsaXN0SXRlbS5tYXAoKGdsdWNvc2UpID0+IHtcbiAgICAvLyAgIGlmIChnbHVjb3NlLmlkID09PSBuZXdJdGVtLmlkKSB7XG4gICAgLy8gICAgIHJldHVybiB7XG4gICAgLy8gICAgICAgLi4uZ2x1Y29zZSxcbiAgICAvLyAgICAgICBuZXdJdGVtLFxuICAgIC8vICAgICB9O1xuICAgIC8vICAgfVxuICAgIC8vICAgcmV0dXJuIGdsdWNvc2U7XG4gICAgLy8gfSk7XG4gICAgY29uc3QgeyBjb3JyZWN0aW9uLCBkYXRlLCBkb2N1bWVudElkLCBnbHVjb3NlLCBwcmVzc3VyZSwgdGltZSB9ID0gbmV3SXRlbTtcblxuXG4gICAgc2V0RGF0ZShuZXdJdGVtPy5kYXRlKTtcbiAgICBzZXRUaW1lKHRpbWUgYXMgc3RyaW5nKTtcbiAgICBzZXRHbHVjb3NlKGdsdWNvc2UgYXMgc3RyaW5nKTtcbiAgICBzZXRDb3JyZWN0aW9uKGNvcnJlY3Rpb24pO1xuICAgIHNldFByZXNzdXJlKHByZXNzdXJlIGFzIHN0cmluZyk7XG4gICAgc2V0RG9jdW1lbnRJZChkb2N1bWVudElkIGFzIHN0cmluZyk7XG4gICAgLy8gc2V0TGlzdEl0ZW0obmV3TGlzdCk7XG4gIH0sW10pO1xuXG5cblxuXG4gIHJldHVybiB7XG4gICAgbGlzdEl0ZW0sXG4gICAgYWRkSXRlbUdsdWNvc2UsXG4gICAgcmVtb3ZlSXRlbUdMdWNvc2UsXG4gICAgdXBkYXRlSXRlbUdMdWNvc2UsXG4gICAgdGltZSxcbiAgICBnbHVjb3NlLFxuICAgIGNvcnJlY3Rpb24sXG4gICAgcHJlc3N1cmUsXG4gICAgZG9jdW1lbnRJZCxcbiAgICBuZXdJZCxcbiAgICBzZXREYXRlLFxuICAgIHNldFRpbWUsXG4gICAgc2V0R2x1Y29zZSxcbiAgICBzZXRDb3JyZWN0aW9uLFxuICAgIHNldFByZXNzdXJlLFxuICAgIHNldERvY3VtZW50SWQsXG4gICAgc2V0TmV3SWQsXG4gIH07XG59O1xuIl0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJ1c2VDYWxsYmFjayIsImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIkxpc3RDb250ZXh0IiwibGlzdEl0ZW0iLCJzZXRMaXN0SXRlbSIsImRhdGUiLCJzZXREYXRlIiwiZGlzcGxheU5hbWUiLCJMaXN0UHJvdmlkZXIiLCJjaGlsZHJlbiIsImlkIiwidGltZSIsImdsdWNvc2UiLCJjb3JyZWN0aW9uIiwiZG9jdW1lbnRJZCIsInByZXNzdXJlIiwiVXNlTGlzdEdsdWNvc2VDb250ZXh0Iiwic2V0VGltZSIsInNldEdsdWNvc2UiLCJzZXRDb3JyZWN0aW9uIiwic2V0UHJlc3N1cmUiLCJzZXREb2N1bWVudElkIiwibmV3SWQiLCJzZXROZXdJZCIsImFkZEl0ZW1HbHVjb3NlIiwiaXRlbSIsInByZXYiLCJyZW1vdmVJdGVtR0x1Y29zZSIsImZpbHRlciIsInVwZGF0ZUl0ZW1HTHVjb3NlIiwibmV3SXRlbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/context/list/contextList.tsx\n"));

/***/ })

});