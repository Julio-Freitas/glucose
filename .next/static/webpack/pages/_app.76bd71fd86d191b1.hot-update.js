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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ListContext\": function() { return /* binding */ ListContext; },\n/* harmony export */   \"ListProvider\": function() { return /* binding */ ListProvider; },\n/* harmony export */   \"UseListGlucoseContext\": function() { return /* binding */ UseListGlucoseContext; }\n/* harmony export */ });\n/* harmony import */ var _home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/home/juliofreitas/\\xC1rea de Trabalho/glucose/src/context/list/contextList.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\n\n\nvar ListContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n  listItem: [],\n  setListItem: function setListItem() {},\n  date: '',\n  setDate: function setDate() {} //   onDeleteItem: () => {},\n  //   onEditItem: () => {},\n  //   addGlucose: () => {},\n\n});\nListContext.displayName = \"listGlucose\";\nvar ListProvider = function ListProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([{\n    id: null,\n    date: null,\n    time: null,\n    glucose: null,\n    correction: null,\n    documentId: null,\n    pressure: null\n  }]),\n      listItem = _useState[0],\n      setListItem = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),\n      date = _useState2[0],\n      setDate = _useState2[1]; //   const getAllList = useCallback(async () => {\n  //     setListItem(await getAllGlucose());\n  //     console.log(listItem);\n  //   }, []);\n  //   useEffect(() => {\n  //     getAllList();\n  //   }, [getAllList]);\n\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(ListContext.Provider, {\n    value: {\n      listItem: listItem,\n      setListItem: setListItem,\n      date: date,\n      setDate: setDate\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 56,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ListProvider, \"VgWhksKZR8VuKQEPu+BVwM00+jQ=\");\n\n_c = ListProvider;\nvar UseListGlucoseContext = function UseListGlucoseContext() {\n  _s2();\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ListContext),\n      listItem = _useContext.listItem,\n      setListItem = _useContext.setListItem,\n      setDate = _useContext.setDate;\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),\n      time = _useState3[0],\n      setTime = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),\n      glucose = _useState4[0],\n      setGlucose = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),\n      correction = _useState5[0],\n      setCorrection = _useState5[1];\n\n  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),\n      pressure = _useState6[0],\n      setPressure = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),\n      documentId = _useState7[0],\n      setDocumentId = _useState7[1];\n\n  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"),\n      newId = _useState8[0],\n      setNewId = _useState8[1];\n\n  var addItemGlucose = function addItemGlucose(item) {\n    setListItem(function (prev) {\n      return [].concat((0,_home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(prev), [item]);\n    });\n  };\n\n  var removeItemGLucose = function removeItemGLucose(documentId) {\n    setListItem(listItem.filter(function (item) {\n      return item.id !== documentId;\n    }));\n  };\n\n  var updateItemGLucose = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (newItem) {\n    // const newList = listItem.map((glucose) => {\n    //   if (glucose.id === newItem.id) {\n    //     return {\n    //       ...glucose,\n    //       newItem,\n    //     };\n    //   }\n    //   return glucose;\n    // });\n    var correction = newItem.correction,\n        date = newItem.date,\n        documentId = newItem.documentId,\n        glucose = newItem.glucose,\n        pressure = newItem.pressure,\n        time = newItem.time;\n    setDate(newItem.date);\n    setTime(time);\n    setGlucose(glucose);\n    setCorrection(correction);\n    setPressure(pressure);\n    setDocumentId(documentId); // setListItem(newList);\n  }, []);\n  return {\n    listItem: listItem,\n    addItemGlucose: addItemGlucose,\n    removeItemGLucose: removeItemGLucose,\n    updateItemGLucose: updateItemGLucose,\n    date: date,\n    time: time,\n    glucose: glucose,\n    correction: correction,\n    pressure: pressure,\n    documentId: documentId,\n    newId: newId,\n    setDate: setDate,\n    setTime: setTime,\n    setGlucose: setGlucose,\n    setCorrection: setCorrection,\n    setPressure: setPressure,\n    setDocumentId: setDocumentId,\n    setNewId: setNewId\n  };\n};\n\n_s2(UseListGlucoseContext, \"rZ+DI4YQ+expmvsUgZD14AvgEow=\");\n\n_c2 = UseListGlucoseContext;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"ListProvider\");\n$RefreshReg$(_c2, \"UseListGlucoseContext\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9saXN0L2NvbnRleHRMaXN0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7O0FBYU8sSUFBTUksV0FBVyxnQkFBR0Ysb0RBQWEsQ0FBYztFQUNwREcsUUFBUSxFQUFFLEVBRDBDO0VBRXBEQyxXQUFXLEVBQUUsdUJBQU0sQ0FBRSxDQUYrQjtFQUdwREMsSUFBSSxFQUFFLEVBSDhDO0VBSXBEQyxPQUFPLEVBQUUsbUJBQU0sQ0FBRSxDQUptQyxDQUtwRDtFQUNBO0VBQ0E7O0FBUG9ELENBQWQsQ0FBakM7QUFVUEosV0FBVyxDQUFDSyxXQUFaLEdBQTBCLGFBQTFCO0FBTU8sSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBNkI7RUFBQTs7RUFBQSxJQUExQkMsUUFBMEIsUUFBMUJBLFFBQTBCOztFQUN2RCxnQkFBZ0NSLCtDQUFRLENBQVMsQ0FDL0M7SUFDRVMsRUFBRSxFQUFFLElBRE47SUFFRUwsSUFBSSxFQUFFLElBRlI7SUFHRU0sSUFBSSxFQUFFLElBSFI7SUFJRUMsT0FBTyxFQUFFLElBSlg7SUFLRUMsVUFBVSxFQUFFLElBTGQ7SUFNRUMsVUFBVSxFQUFFLElBTmQ7SUFPRUMsUUFBUSxFQUFFO0VBUFosQ0FEK0MsQ0FBVCxDQUF4QztFQUFBLElBQU9aLFFBQVA7RUFBQSxJQUFpQkMsV0FBakI7O0VBV0EsaUJBQXdCSCwrQ0FBUSxDQUFDLEVBQUQsQ0FBaEM7RUFBQSxJQUFPSSxJQUFQO0VBQUEsSUFBYUMsT0FBYixpQkFadUQsQ0FjdkQ7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7OztFQUVBLG9CQUNFLDhEQUFDLFdBQUQsQ0FBYSxRQUFiO0lBQXNCLEtBQUssRUFBRTtNQUFFSCxRQUFRLEVBQVJBLFFBQUY7TUFBWUMsV0FBVyxFQUFYQSxXQUFaO01BQXlCQyxJQUFJLEVBQUpBLElBQXpCO01BQStCQyxPQUFPLEVBQVBBO0lBQS9CLENBQTdCO0lBQUEsVUFDR0c7RUFESDtJQUFBO0lBQUE7SUFBQTtFQUFBLFNBREY7QUFLRCxDQTNCTTs7R0FBTUQ7O0tBQUFBO0FBNkJOLElBQU1RLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsR0FBTTtFQUFBOztFQUN6QyxrQkFBMkNsQixpREFBVSxDQUFDSSxXQUFELENBQXJEO0VBQUEsSUFBUUMsUUFBUixlQUFRQSxRQUFSO0VBQUEsSUFBa0JDLFdBQWxCLGVBQWtCQSxXQUFsQjtFQUFBLElBQStCRSxPQUEvQixlQUErQkEsT0FBL0I7O0VBQ0EsaUJBQXdCTCwrQ0FBUSxDQUFnQixJQUFoQixDQUFoQztFQUFBLElBQU9VLElBQVA7RUFBQSxJQUFhTSxPQUFiOztFQUNBLGlCQUE4QmhCLCtDQUFRLENBQWdCLElBQWhCLENBQXRDO0VBQUEsSUFBT1csT0FBUDtFQUFBLElBQWdCTSxVQUFoQjs7RUFDQSxpQkFBb0NqQiwrQ0FBUSxDQUFnQixJQUFoQixDQUE1QztFQUFBLElBQU9ZLFVBQVA7RUFBQSxJQUFtQk0sYUFBbkI7O0VBQ0EsaUJBQWdDbEIsK0NBQVEsQ0FBZ0IsSUFBaEIsQ0FBeEM7RUFBQSxJQUFPYyxRQUFQO0VBQUEsSUFBaUJLLFdBQWpCOztFQUNBLGlCQUFvQ25CLCtDQUFRLENBQWdCLElBQWhCLENBQTVDO0VBQUEsSUFBT2EsVUFBUDtFQUFBLElBQW1CTyxhQUFuQjs7RUFDQSxpQkFBMEJwQiwrQ0FBUSxDQUFDLEVBQUQsQ0FBbEM7RUFBQSxJQUFPcUIsS0FBUDtFQUFBLElBQWNDLFFBQWQ7O0VBRUEsSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxJQUFELEVBQWdCO0lBQ3JDckIsV0FBVyxDQUFDLFVBQUNzQixJQUFEO01BQUEsdUxBQWNBLElBQWQsSUFBb0JELElBQXBCO0lBQUEsQ0FBRCxDQUFYO0VBQ0QsQ0FGRDs7RUFJQSxJQUFNRSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNiLFVBQUQsRUFBd0I7SUFDaERWLFdBQVcsQ0FBQ0QsUUFBUSxDQUFDeUIsTUFBVCxDQUFnQixVQUFDSCxJQUFEO01BQUEsT0FBVUEsSUFBSSxDQUFDZixFQUFMLEtBQVlJLFVBQXRCO0lBQUEsQ0FBaEIsQ0FBRCxDQUFYO0VBQ0QsQ0FGRDs7RUFJQSxJQUFNZSxpQkFBaUIsR0FBRzlCLGtEQUFXLENBQUMsVUFBQytCLE9BQUQsRUFBbUI7SUFDdkQ7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0EsSUFBUWpCLFVBQVIsR0FBa0VpQixPQUFsRSxDQUFRakIsVUFBUjtJQUFBLElBQW9CUixJQUFwQixHQUFrRXlCLE9BQWxFLENBQW9CekIsSUFBcEI7SUFBQSxJQUEwQlMsVUFBMUIsR0FBa0VnQixPQUFsRSxDQUEwQmhCLFVBQTFCO0lBQUEsSUFBc0NGLE9BQXRDLEdBQWtFa0IsT0FBbEUsQ0FBc0NsQixPQUF0QztJQUFBLElBQStDRyxRQUEvQyxHQUFrRWUsT0FBbEUsQ0FBK0NmLFFBQS9DO0lBQUEsSUFBeURKLElBQXpELEdBQWtFbUIsT0FBbEUsQ0FBeURuQixJQUF6RDtJQUdBTCxPQUFPLENBQUN3QixPQUFPLENBQUN6QixJQUFULENBQVA7SUFDQVksT0FBTyxDQUFDTixJQUFELENBQVA7SUFDQU8sVUFBVSxDQUFDTixPQUFELENBQVY7SUFDQU8sYUFBYSxDQUFDTixVQUFELENBQWI7SUFDQU8sV0FBVyxDQUFDTCxRQUFELENBQVg7SUFDQU0sYUFBYSxDQUFDUCxVQUFELENBQWIsQ0FsQnVELENBbUJ2RDtFQUNELENBcEJvQyxFQW9CbkMsRUFwQm1DLENBQXJDO0VBeUJBLE9BQU87SUFDTFgsUUFBUSxFQUFSQSxRQURLO0lBRUxxQixjQUFjLEVBQWRBLGNBRks7SUFHTEcsaUJBQWlCLEVBQWpCQSxpQkFISztJQUlMRSxpQkFBaUIsRUFBakJBLGlCQUpLO0lBS0x4QixJQUFJLEVBQUpBLElBTEs7SUFNTE0sSUFBSSxFQUFKQSxJQU5LO0lBT0xDLE9BQU8sRUFBUEEsT0FQSztJQVFMQyxVQUFVLEVBQVZBLFVBUks7SUFTTEUsUUFBUSxFQUFSQSxRQVRLO0lBVUxELFVBQVUsRUFBVkEsVUFWSztJQVdMUSxLQUFLLEVBQUxBLEtBWEs7SUFZTGhCLE9BQU8sRUFBUEEsT0FaSztJQWFMVyxPQUFPLEVBQVBBLE9BYks7SUFjTEMsVUFBVSxFQUFWQSxVQWRLO0lBZUxDLGFBQWEsRUFBYkEsYUFmSztJQWdCTEMsV0FBVyxFQUFYQSxXQWhCSztJQWlCTEMsYUFBYSxFQUFiQSxhQWpCSztJQWtCTEUsUUFBUSxFQUFSQTtFQWxCSyxDQUFQO0FBb0JELENBOURNOztJQUFNUDs7TUFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHQvbGlzdC9jb250ZXh0TGlzdC50c3g/YjZjYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRBbGxHbHVjb3NlIH0gZnJvbSBcImxpYi9zZXJ2aWNlL2dsdWNvc2VcIjtcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJdGVtIH0gZnJvbSBcInR5cGVzL2xpc3RcIjtcblxudHlwZSBDb250ZXh0TGlzdCA9IHtcbiAgbGlzdEl0ZW06IEl0ZW1bXTtcbiAgc2V0TGlzdEl0ZW06IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPEl0ZW1bXT4+O1xuICBkYXRlOiBzdHJpbmcgfCBudWxsO1xuICBzZXREYXRlOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxzdHJpbmc+PjtcbiAgLy8gICBvbkRlbGV0ZUl0ZW06IChkb2N1bWVudElkOiBzdHJpbmcpID0+IHZvaWQ7XG4gIC8vICAgb25FZGl0SXRlbTogKGl0ZW06IEl0ZW0pID0+IHZvaWQ7XG4gIC8vICAgYWRkR2x1Y29zZTogKGl0ZW06IEl0ZW0pID0+IHZvaWQ7XG59O1xuXG5leHBvcnQgY29uc3QgTGlzdENvbnRleHQgPSBjcmVhdGVDb250ZXh0PENvbnRleHRMaXN0Pih7XG4gIGxpc3RJdGVtOiBbXSxcbiAgc2V0TGlzdEl0ZW06ICgpID0+IHt9LFxuICBkYXRlOiAnJyxcbiAgc2V0RGF0ZTogKCkgPT4ge30sXG4gIC8vICAgb25EZWxldGVJdGVtOiAoKSA9PiB7fSxcbiAgLy8gICBvbkVkaXRJdGVtOiAoKSA9PiB7fSxcbiAgLy8gICBhZGRHbHVjb3NlOiAoKSA9PiB7fSxcbn0pO1xuXG5MaXN0Q29udGV4dC5kaXNwbGF5TmFtZSA9IFwibGlzdEdsdWNvc2VcIjtcblxudHlwZSBQcm9wc0xpc3QgPSB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG59O1xuXG5leHBvcnQgY29uc3QgTGlzdFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfTogUHJvcHNMaXN0KSA9PiB7XG4gIGNvbnN0IFtsaXN0SXRlbSwgc2V0TGlzdEl0ZW1dID0gdXNlU3RhdGU8SXRlbVtdPihbXG4gICAge1xuICAgICAgaWQ6IG51bGwsXG4gICAgICBkYXRlOiBudWxsLFxuICAgICAgdGltZTogbnVsbCxcbiAgICAgIGdsdWNvc2U6IG51bGwsXG4gICAgICBjb3JyZWN0aW9uOiBudWxsLFxuICAgICAgZG9jdW1lbnRJZDogbnVsbCxcbiAgICAgIHByZXNzdXJlOiBudWxsLFxuICAgIH0sXG4gIF0pO1xuICBjb25zdCBbZGF0ZSwgc2V0RGF0ZV0gPSB1c2VTdGF0ZSgnJylcblxuICAvLyAgIGNvbnN0IGdldEFsbExpc3QgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XG4gIC8vICAgICBzZXRMaXN0SXRlbShhd2FpdCBnZXRBbGxHbHVjb3NlKCkpO1xuICAvLyAgICAgY29uc29sZS5sb2cobGlzdEl0ZW0pO1xuICAvLyAgIH0sIFtdKTtcbiAgLy8gICB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgICAgZ2V0QWxsTGlzdCgpO1xuICAvLyAgIH0sIFtnZXRBbGxMaXN0XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGlzdENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgbGlzdEl0ZW0sIHNldExpc3RJdGVtLCBkYXRlLCBzZXREYXRlIH19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvTGlzdENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgVXNlTGlzdEdsdWNvc2VDb250ZXh0ID0gKCkgPT4ge1xuICBjb25zdCB7IGxpc3RJdGVtLCBzZXRMaXN0SXRlbSwgc2V0RGF0ZSB9ID0gdXNlQ29udGV4dChMaXN0Q29udGV4dCk7XG4gIGNvbnN0IFt0aW1lLCBzZXRUaW1lXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbZ2x1Y29zZSwgc2V0R2x1Y29zZV0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2NvcnJlY3Rpb24sIHNldENvcnJlY3Rpb25dID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtwcmVzc3VyZSwgc2V0UHJlc3N1cmVdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtkb2N1bWVudElkLCBzZXREb2N1bWVudElkXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbbmV3SWQsIHNldE5ld0lkXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IGFkZEl0ZW1HbHVjb3NlID0gKGl0ZW06IEl0ZW0pID0+IHtcbiAgICBzZXRMaXN0SXRlbSgocHJldikgPT4gWy4uLnByZXYsIGl0ZW1dKTtcbiAgfTtcblxuICBjb25zdCByZW1vdmVJdGVtR0x1Y29zZSA9IChkb2N1bWVudElkOiBzdHJpbmcpID0+IHtcbiAgICBzZXRMaXN0SXRlbShsaXN0SXRlbS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgIT09IGRvY3VtZW50SWQpKTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVJdGVtR0x1Y29zZSA9IHVzZUNhbGxiYWNrKChuZXdJdGVtOiBJdGVtKSA9PiB7XG4gICAgLy8gY29uc3QgbmV3TGlzdCA9IGxpc3RJdGVtLm1hcCgoZ2x1Y29zZSkgPT4ge1xuICAgIC8vICAgaWYgKGdsdWNvc2UuaWQgPT09IG5ld0l0ZW0uaWQpIHtcbiAgICAvLyAgICAgcmV0dXJuIHtcbiAgICAvLyAgICAgICAuLi5nbHVjb3NlLFxuICAgIC8vICAgICAgIG5ld0l0ZW0sXG4gICAgLy8gICAgIH07XG4gICAgLy8gICB9XG4gICAgLy8gICByZXR1cm4gZ2x1Y29zZTtcbiAgICAvLyB9KTtcbiAgICBjb25zdCB7IGNvcnJlY3Rpb24sIGRhdGUsIGRvY3VtZW50SWQsIGdsdWNvc2UsIHByZXNzdXJlLCB0aW1lIH0gPSBuZXdJdGVtO1xuXG5cbiAgICBzZXREYXRlKG5ld0l0ZW0uZGF0ZSk7XG4gICAgc2V0VGltZSh0aW1lIGFzIHN0cmluZyk7XG4gICAgc2V0R2x1Y29zZShnbHVjb3NlIGFzIHN0cmluZyk7XG4gICAgc2V0Q29ycmVjdGlvbihjb3JyZWN0aW9uKTtcbiAgICBzZXRQcmVzc3VyZShwcmVzc3VyZSBhcyBzdHJpbmcpO1xuICAgIHNldERvY3VtZW50SWQoZG9jdW1lbnRJZCBhcyBzdHJpbmcpO1xuICAgIC8vIHNldExpc3RJdGVtKG5ld0xpc3QpO1xuICB9LFtdKTtcblxuXG5cblxuICByZXR1cm4ge1xuICAgIGxpc3RJdGVtLFxuICAgIGFkZEl0ZW1HbHVjb3NlLFxuICAgIHJlbW92ZUl0ZW1HTHVjb3NlLFxuICAgIHVwZGF0ZUl0ZW1HTHVjb3NlLFxuICAgIGRhdGUsXG4gICAgdGltZSxcbiAgICBnbHVjb3NlLFxuICAgIGNvcnJlY3Rpb24sXG4gICAgcHJlc3N1cmUsXG4gICAgZG9jdW1lbnRJZCxcbiAgICBuZXdJZCxcbiAgICBzZXREYXRlLFxuICAgIHNldFRpbWUsXG4gICAgc2V0R2x1Y29zZSxcbiAgICBzZXRDb3JyZWN0aW9uLFxuICAgIHNldFByZXNzdXJlLFxuICAgIHNldERvY3VtZW50SWQsXG4gICAgc2V0TmV3SWQsXG4gIH07XG59O1xuIl0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJ1c2VDYWxsYmFjayIsImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIkxpc3RDb250ZXh0IiwibGlzdEl0ZW0iLCJzZXRMaXN0SXRlbSIsImRhdGUiLCJzZXREYXRlIiwiZGlzcGxheU5hbWUiLCJMaXN0UHJvdmlkZXIiLCJjaGlsZHJlbiIsImlkIiwidGltZSIsImdsdWNvc2UiLCJjb3JyZWN0aW9uIiwiZG9jdW1lbnRJZCIsInByZXNzdXJlIiwiVXNlTGlzdEdsdWNvc2VDb250ZXh0Iiwic2V0VGltZSIsInNldEdsdWNvc2UiLCJzZXRDb3JyZWN0aW9uIiwic2V0UHJlc3N1cmUiLCJzZXREb2N1bWVudElkIiwibmV3SWQiLCJzZXROZXdJZCIsImFkZEl0ZW1HbHVjb3NlIiwiaXRlbSIsInByZXYiLCJyZW1vdmVJdGVtR0x1Y29zZSIsImZpbHRlciIsInVwZGF0ZUl0ZW1HTHVjb3NlIiwibmV3SXRlbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/context/list/contextList.tsx\n"));

/***/ })

});