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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ListContext\": function() { return /* binding */ ListContext; },\n/* harmony export */   \"ListProvider\": function() { return /* binding */ ListProvider; },\n/* harmony export */   \"UseListGlucoseContext\": function() { return /* binding */ UseListGlucoseContext; }\n/* harmony export */ });\n/* harmony import */ var _home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var lib_service_glucose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lib/service/glucose */ \"./src/lib/service/glucose.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/home/juliofreitas/\\xC1rea de Trabalho/glucose/src/context/list/contextList.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\n\n\n\nvar ListContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)({\n  listItem: [],\n  date: null,\n  time: null,\n  glucose: null,\n  correction: null,\n  pressure: null,\n  documentId: null,\n  newId: null,\n  setListItem: function setListItem() {},\n  setDate: function setDate() {},\n  setTime: function setTime() {},\n  setGlucose: function setGlucose() {},\n  setCorrection: function setCorrection() {},\n  setPressure: function setPressure() {},\n  setDocumentId: function setDocumentId() {},\n  setNewId: function setNewId() {} //   onDeleteItem: () => {},\n  //   onEditItem: () => {},\n  //   addGlucose: () => {},\n\n});\nListContext.displayName = \"listGlucose\";\nvar ListProvider = function ListProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([{\n    id: null,\n    date: null,\n    time: null,\n    glucose: null,\n    correction: null,\n    documentId: null,\n    pressure: null\n  }]),\n      listItem = _useState[0],\n      setListItem = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),\n      date = _useState2[0],\n      setDate = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),\n      time = _useState3[0],\n      setTime = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),\n      glucose = _useState4[0],\n      setGlucose = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),\n      correction = _useState5[0],\n      setCorrection = _useState5[1];\n\n  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),\n      pressure = _useState6[0],\n      setPressure = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),\n      documentId = _useState7[0],\n      setDocumentId = _useState7[1];\n\n  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"),\n      newId = _useState8[0],\n      setNewId = _useState8[1]; // const getAllList = useCallback(async () => {\n  //   setListItem(await getAllGlucose());\n  // }, []);\n  // useEffect(() => {\n  //   getAllList();\n  // }, [getAllList]);\n\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(ListContext.Provider, {\n    value: {\n      listItem: listItem,\n      setListItem: setListItem,\n      date: date,\n      setDate: setDate,\n      time: time,\n      glucose: glucose,\n      correction: correction,\n      pressure: pressure,\n      documentId: documentId,\n      newId: newId,\n      setTime: setTime,\n      setGlucose: setGlucose,\n      setCorrection: setCorrection,\n      setPressure: setPressure,\n      setDocumentId: setDocumentId,\n      setNewId: setNewId\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 87,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ListProvider, \"4DDZS934CjFA9V63bqJ3T9E/Lu0=\");\n\n_c = ListProvider;\nvar UseListGlucoseContext = function UseListGlucoseContext() {\n  _s2();\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(ListContext),\n      listItem = _useContext.listItem,\n      setListItem = _useContext.setListItem,\n      setDate = _useContext.setDate,\n      date = _useContext.date,\n      time = _useContext.time,\n      setTime = _useContext.setTime,\n      correction = _useContext.correction,\n      setCorrection = _useContext.setCorrection,\n      documentId = _useContext.documentId,\n      setDocumentId = _useContext.setDocumentId,\n      glucose = _useContext.glucose,\n      setGlucose = _useContext.setGlucose,\n      newId = _useContext.newId,\n      setNewId = _useContext.setNewId,\n      pressure = _useContext.pressure,\n      setPressure = _useContext.setPressure;\n\n  var addItemGlucose = function addItemGlucose(item) {\n    setListItem(function (prev) {\n      return [].concat((0,_home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(prev), [item]);\n    });\n    (0,lib_service_glucose__WEBPACK_IMPORTED_MODULE_1__.addGlucose)(item);\n  };\n\n  var updateItemGLucose = function updateItemGLucose(documentId, item) {\n    (0,lib_service_glucose__WEBPACK_IMPORTED_MODULE_1__.updateGLucose)(documentId, item);\n  };\n\n  var removeItemGLucose = function removeItemGLucose(documentId) {\n    setListItem(listItem.filter(function (item) {\n      return item.id !== documentId;\n    }));\n  };\n\n  var editiItemGLucose = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function (newItem) {\n    var correction = newItem.correction,\n        date = newItem.date,\n        documentId = newItem.documentId,\n        glucose = newItem.glucose,\n        pressure = newItem.pressure,\n        time = newItem.time;\n    setDate(date);\n    setTime(time);\n    setGlucose(glucose);\n    setCorrection(correction);\n    setPressure(pressure);\n    setDocumentId(documentId);\n  }, []);\n  return {\n    listItem: listItem,\n    addItemGlucose: addItemGlucose,\n    removeItemGLucose: removeItemGLucose,\n    editiItemGLucose: editiItemGLucose,\n    time: time,\n    date: date,\n    glucose: glucose,\n    correction: correction,\n    pressure: pressure,\n    documentId: documentId,\n    newId: newId,\n    setDate: setDate,\n    setTime: setTime,\n    setGlucose: setGlucose,\n    setCorrection: setCorrection,\n    setPressure: setPressure,\n    setDocumentId: setDocumentId,\n    setNewId: setNewId\n  };\n};\n\n_s2(UseListGlucoseContext, \"U1LQ/ec/YGK2Sl/75SAFlPgAbeE=\");\n\n_c2 = UseListGlucoseContext;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"ListProvider\");\n$RefreshReg$(_c2, \"UseListGlucoseContext\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9saXN0L2NvbnRleHRMaXN0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBeUJPLElBQU1NLFdBQVcsZ0JBQUdGLG9EQUFhLENBQWM7RUFDcERHLFFBQVEsRUFBRSxFQUQwQztFQUVwREMsSUFBSSxFQUFFLElBRjhDO0VBR3BEQyxJQUFJLEVBQUUsSUFIOEM7RUFJcERDLE9BQU8sRUFBRSxJQUoyQztFQUtwREMsVUFBVSxFQUFFLElBTHdDO0VBTXBEQyxRQUFRLEVBQUUsSUFOMEM7RUFPcERDLFVBQVUsRUFBRSxJQVB3QztFQVFwREMsS0FBSyxFQUFFLElBUjZDO0VBU3BEQyxXQUFXLEVBQUUsdUJBQU0sQ0FBRSxDQVQrQjtFQVVwREMsT0FBTyxFQUFFLG1CQUFNLENBQUUsQ0FWbUM7RUFXcERDLE9BQU8sRUFBRSxtQkFBTSxDQUFFLENBWG1DO0VBWXBEQyxVQUFVLEVBQUUsc0JBQU0sQ0FBRSxDQVpnQztFQWFwREMsYUFBYSxFQUFFLHlCQUFNLENBQUUsQ0FiNkI7RUFjcERDLFdBQVcsRUFBRSx1QkFBTSxDQUFFLENBZCtCO0VBZXBEQyxhQUFhLEVBQUUseUJBQU0sQ0FBRSxDQWY2QjtFQWdCcERDLFFBQVEsRUFBRSxvQkFBTSxDQUFFLENBaEJrQyxDQWtCcEQ7RUFDQTtFQUNBOztBQXBCb0QsQ0FBZCxDQUFqQztBQXVCUGhCLFdBQVcsQ0FBQ2lCLFdBQVosR0FBMEIsYUFBMUI7QUFNTyxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUE2QjtFQUFBOztFQUFBLElBQTFCQyxRQUEwQixRQUExQkEsUUFBMEI7O0VBQ3ZELGdCQUFnQ3BCLCtDQUFRLENBQVMsQ0FDL0M7SUFDRXFCLEVBQUUsRUFBRSxJQUROO0lBRUVsQixJQUFJLEVBQUUsSUFGUjtJQUdFQyxJQUFJLEVBQUUsSUFIUjtJQUlFQyxPQUFPLEVBQUUsSUFKWDtJQUtFQyxVQUFVLEVBQUUsSUFMZDtJQU1FRSxVQUFVLEVBQUUsSUFOZDtJQU9FRCxRQUFRLEVBQUU7RUFQWixDQUQrQyxDQUFULENBQXhDO0VBQUEsSUFBT0wsUUFBUDtFQUFBLElBQWlCUSxXQUFqQjs7RUFXQSxpQkFBd0JWLCtDQUFRLENBQWdCLElBQWhCLENBQWhDO0VBQUEsSUFBT0csSUFBUDtFQUFBLElBQWFRLE9BQWI7O0VBQ0EsaUJBQXdCWCwrQ0FBUSxDQUFnQixJQUFoQixDQUFoQztFQUFBLElBQU9JLElBQVA7RUFBQSxJQUFhUSxPQUFiOztFQUNBLGlCQUE4QlosK0NBQVEsQ0FBZ0IsSUFBaEIsQ0FBdEM7RUFBQSxJQUFPSyxPQUFQO0VBQUEsSUFBZ0JRLFVBQWhCOztFQUNBLGlCQUFvQ2IsK0NBQVEsQ0FBZ0IsSUFBaEIsQ0FBNUM7RUFBQSxJQUFPTSxVQUFQO0VBQUEsSUFBbUJRLGFBQW5COztFQUNBLGlCQUFnQ2QsK0NBQVEsQ0FBZ0IsSUFBaEIsQ0FBeEM7RUFBQSxJQUFPTyxRQUFQO0VBQUEsSUFBaUJRLFdBQWpCOztFQUNBLGlCQUFvQ2YsK0NBQVEsQ0FBZ0IsSUFBaEIsQ0FBNUM7RUFBQSxJQUFPUSxVQUFQO0VBQUEsSUFBbUJRLGFBQW5COztFQUNBLGlCQUEwQmhCLCtDQUFRLENBQWdCLEVBQWhCLENBQWxDO0VBQUEsSUFBT1MsS0FBUDtFQUFBLElBQWNRLFFBQWQsaUJBbEJ1RCxDQW9CckQ7RUFDQTtFQUNBO0VBRUE7RUFDQTtFQUNBOzs7RUFFRixvQkFDRSw4REFBQyxXQUFELENBQWEsUUFBYjtJQUNFLEtBQUssRUFBRTtNQUNMZixRQUFRLEVBQVJBLFFBREs7TUFFTFEsV0FBVyxFQUFYQSxXQUZLO01BR0xQLElBQUksRUFBSkEsSUFISztNQUlMUSxPQUFPLEVBQVBBLE9BSks7TUFLTFAsSUFBSSxFQUFKQSxJQUxLO01BTUxDLE9BQU8sRUFBUEEsT0FOSztNQU9MQyxVQUFVLEVBQVZBLFVBUEs7TUFRTEMsUUFBUSxFQUFSQSxRQVJLO01BU0xDLFVBQVUsRUFBVkEsVUFUSztNQVVMQyxLQUFLLEVBQUxBLEtBVks7TUFXTEcsT0FBTyxFQUFQQSxPQVhLO01BWUxDLFVBQVUsRUFBVkEsVUFaSztNQWFMQyxhQUFhLEVBQWJBLGFBYks7TUFjTEMsV0FBVyxFQUFYQSxXQWRLO01BZUxDLGFBQWEsRUFBYkEsYUFmSztNQWdCTEMsUUFBUSxFQUFSQTtJQWhCSyxDQURUO0lBQUEsVUFvQkdHO0VBcEJIO0lBQUE7SUFBQTtJQUFBO0VBQUEsU0FERjtBQXdCRCxDQXBETTs7R0FBTUQ7O0tBQUFBO0FBc0ROLElBQU1HLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsR0FBTTtFQUFBOztFQUN6QyxrQkFpQkl6QixpREFBVSxDQUFDSSxXQUFELENBakJkO0VBQUEsSUFDRUMsUUFERixlQUNFQSxRQURGO0VBQUEsSUFFRVEsV0FGRixlQUVFQSxXQUZGO0VBQUEsSUFHRUMsT0FIRixlQUdFQSxPQUhGO0VBQUEsSUFJRVIsSUFKRixlQUlFQSxJQUpGO0VBQUEsSUFLRUMsSUFMRixlQUtFQSxJQUxGO0VBQUEsSUFNRVEsT0FORixlQU1FQSxPQU5GO0VBQUEsSUFPRU4sVUFQRixlQU9FQSxVQVBGO0VBQUEsSUFRRVEsYUFSRixlQVFFQSxhQVJGO0VBQUEsSUFTRU4sVUFURixlQVNFQSxVQVRGO0VBQUEsSUFVRVEsYUFWRixlQVVFQSxhQVZGO0VBQUEsSUFXRVgsT0FYRixlQVdFQSxPQVhGO0VBQUEsSUFZRVEsVUFaRixlQVlFQSxVQVpGO0VBQUEsSUFhRUosS0FiRixlQWFFQSxLQWJGO0VBQUEsSUFjRVEsUUFkRixlQWNFQSxRQWRGO0VBQUEsSUFlRVYsUUFmRixlQWVFQSxRQWZGO0VBQUEsSUFnQkVRLFdBaEJGLGVBZ0JFQSxXQWhCRjs7RUFtQkEsSUFBTVEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxJQUFELEVBQWdCO0lBQ3JDZCxXQUFXLENBQUMsVUFBQ2UsSUFBRDtNQUFBLHVMQUFjQSxJQUFkLElBQW9CRCxJQUFwQjtJQUFBLENBQUQsQ0FBWDtJQUNBN0IsK0RBQVUsQ0FBQzZCLElBQUQsQ0FBVjtFQUNELENBSEQ7O0VBS0EsSUFBTUUsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDbEIsVUFBRCxFQUFxQmdCLElBQXJCLEVBQW1DO0lBQzNENUIsa0VBQWEsQ0FBQ1ksVUFBRCxFQUFhZ0IsSUFBYixDQUFiO0VBQ0QsQ0FGRDs7RUFJQSxJQUFNRyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNuQixVQUFELEVBQXdCO0lBQ2hERSxXQUFXLENBQUNSLFFBQVEsQ0FBQzBCLE1BQVQsQ0FBZ0IsVUFBQ0osSUFBRDtNQUFBLE9BQVVBLElBQUksQ0FBQ0gsRUFBTCxLQUFZYixVQUF0QjtJQUFBLENBQWhCLENBQUQsQ0FBWDtFQUNELENBRkQ7O0VBSUEsSUFBTXFCLGdCQUFnQixHQUFHL0Isa0RBQVcsQ0FBQyxVQUFDZ0MsT0FBRCxFQUFtQjtJQUN0RCxJQUFReEIsVUFBUixHQUFrRXdCLE9BQWxFLENBQVF4QixVQUFSO0lBQUEsSUFBb0JILElBQXBCLEdBQWtFMkIsT0FBbEUsQ0FBb0IzQixJQUFwQjtJQUFBLElBQTBCSyxVQUExQixHQUFrRXNCLE9BQWxFLENBQTBCdEIsVUFBMUI7SUFBQSxJQUFzQ0gsT0FBdEMsR0FBa0V5QixPQUFsRSxDQUFzQ3pCLE9BQXRDO0lBQUEsSUFBK0NFLFFBQS9DLEdBQWtFdUIsT0FBbEUsQ0FBK0N2QixRQUEvQztJQUFBLElBQXlESCxJQUF6RCxHQUFrRTBCLE9BQWxFLENBQXlEMUIsSUFBekQ7SUFDQU8sT0FBTyxDQUFDUixJQUFELENBQVA7SUFDQVMsT0FBTyxDQUFDUixJQUFELENBQVA7SUFDQVMsVUFBVSxDQUFDUixPQUFELENBQVY7SUFDQVMsYUFBYSxDQUFDUixVQUFELENBQWI7SUFDQVMsV0FBVyxDQUFDUixRQUFELENBQVg7SUFDQVMsYUFBYSxDQUFDUixVQUFELENBQWI7RUFFRCxDQVRtQyxFQVNqQyxFQVRpQyxDQUFwQztFQVdBLE9BQU87SUFDTE4sUUFBUSxFQUFSQSxRQURLO0lBRUxxQixjQUFjLEVBQWRBLGNBRks7SUFHTEksaUJBQWlCLEVBQWpCQSxpQkFISztJQUlMRSxnQkFBZ0IsRUFBaEJBLGdCQUpLO0lBS0x6QixJQUFJLEVBQUpBLElBTEs7SUFNTEQsSUFBSSxFQUFKQSxJQU5LO0lBT0xFLE9BQU8sRUFBUEEsT0FQSztJQVFMQyxVQUFVLEVBQVZBLFVBUks7SUFTTEMsUUFBUSxFQUFSQSxRQVRLO0lBVUxDLFVBQVUsRUFBVkEsVUFWSztJQVdMQyxLQUFLLEVBQUxBLEtBWEs7SUFZTEUsT0FBTyxFQUFQQSxPQVpLO0lBYUxDLE9BQU8sRUFBUEEsT0FiSztJQWNMQyxVQUFVLEVBQVZBLFVBZEs7SUFlTEMsYUFBYSxFQUFiQSxhQWZLO0lBZ0JMQyxXQUFXLEVBQVhBLFdBaEJLO0lBaUJMQyxhQUFhLEVBQWJBLGFBakJLO0lBa0JMQyxRQUFRLEVBQVJBO0VBbEJLLENBQVA7QUFvQkQsQ0FoRU07O0lBQU1LOztNQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29udGV4dC9saXN0L2NvbnRleHRMaXN0LnRzeD9iNmNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFkZEdsdWNvc2UsIGdldEFsbEdsdWNvc2UsIHVwZGF0ZUdMdWNvc2UgfSBmcm9tIFwibGliL3NlcnZpY2UvZ2x1Y29zZVwiO1xuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEl0ZW0gfSBmcm9tIFwidHlwZXMvbGlzdFwiO1xuXG50eXBlIENvbnRleHRMaXN0ID0ge1xuICBsaXN0SXRlbTogSXRlbVtdO1xuICBkYXRlOiBzdHJpbmcgfCBudWxsO1xuICB0aW1lOiBzdHJpbmcgfCBudWxsO1xuICBnbHVjb3NlOiBzdHJpbmcgfCBudWxsO1xuICBjb3JyZWN0aW9uOiBzdHJpbmcgfCBudWxsO1xuICBwcmVzc3VyZTogc3RyaW5nIHwgbnVsbDtcbiAgZG9jdW1lbnRJZDogc3RyaW5nIHwgbnVsbDtcbiAgbmV3SWQ6IHN0cmluZyB8IG51bGw7XG4gIHNldExpc3RJdGVtOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxJdGVtW10+PjtcbiAgc2V0RGF0ZTogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248c3RyaW5nIHwgbnVsbD4+O1xuICBzZXRUaW1lOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxzdHJpbmcgfCBudWxsPj47XG4gIHNldEdsdWNvc2U6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPHN0cmluZyB8IG51bGw+PjtcbiAgc2V0Q29ycmVjdGlvbjogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248c3RyaW5nIHwgbnVsbD4+O1xuICBzZXRQcmVzc3VyZTogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248c3RyaW5nIHwgbnVsbD4+O1xuICBzZXREb2N1bWVudElkOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxzdHJpbmcgfCBudWxsPj47XG4gIHNldE5ld0lkOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxzdHJpbmcgfCBudWxsPj47XG4gIC8vICAgb25EZWxldGVJdGVtOiAoZG9jdW1lbnRJZDogc3RyaW5nKSA9PiB2b2lkO1xuICAvLyAgIG9uRWRpdEl0ZW06IChpdGVtOiBJdGVtKSA9PiB2b2lkO1xuICAvLyAgIGFkZEdsdWNvc2U6IChpdGVtOiBJdGVtKSA9PiB2b2lkO1xufTtcblxuZXhwb3J0IGNvbnN0IExpc3RDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxDb250ZXh0TGlzdD4oe1xuICBsaXN0SXRlbTogW10sXG4gIGRhdGU6IG51bGwsXG4gIHRpbWU6IG51bGwsXG4gIGdsdWNvc2U6IG51bGwsXG4gIGNvcnJlY3Rpb246IG51bGwsXG4gIHByZXNzdXJlOiBudWxsLFxuICBkb2N1bWVudElkOiBudWxsLFxuICBuZXdJZDogbnVsbCxcbiAgc2V0TGlzdEl0ZW06ICgpID0+IHt9LFxuICBzZXREYXRlOiAoKSA9PiB7fSxcbiAgc2V0VGltZTogKCkgPT4ge30sXG4gIHNldEdsdWNvc2U6ICgpID0+IHt9LFxuICBzZXRDb3JyZWN0aW9uOiAoKSA9PiB7fSxcbiAgc2V0UHJlc3N1cmU6ICgpID0+IHt9LFxuICBzZXREb2N1bWVudElkOiAoKSA9PiB7fSxcbiAgc2V0TmV3SWQ6ICgpID0+IHt9LFxuXG4gIC8vICAgb25EZWxldGVJdGVtOiAoKSA9PiB7fSxcbiAgLy8gICBvbkVkaXRJdGVtOiAoKSA9PiB7fSxcbiAgLy8gICBhZGRHbHVjb3NlOiAoKSA9PiB7fSxcbn0pO1xuXG5MaXN0Q29udGV4dC5kaXNwbGF5TmFtZSA9IFwibGlzdEdsdWNvc2VcIjtcblxudHlwZSBQcm9wc0xpc3QgPSB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG59O1xuXG5leHBvcnQgY29uc3QgTGlzdFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfTogUHJvcHNMaXN0KSA9PiB7XG4gIGNvbnN0IFtsaXN0SXRlbSwgc2V0TGlzdEl0ZW1dID0gdXNlU3RhdGU8SXRlbVtdPihbXG4gICAge1xuICAgICAgaWQ6IG51bGwsXG4gICAgICBkYXRlOiBudWxsLFxuICAgICAgdGltZTogbnVsbCxcbiAgICAgIGdsdWNvc2U6IG51bGwsXG4gICAgICBjb3JyZWN0aW9uOiBudWxsLFxuICAgICAgZG9jdW1lbnRJZDogbnVsbCxcbiAgICAgIHByZXNzdXJlOiBudWxsLFxuICAgIH0sXG4gIF0pO1xuICBjb25zdCBbZGF0ZSwgc2V0RGF0ZV0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW3RpbWUsIHNldFRpbWVdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtnbHVjb3NlLCBzZXRHbHVjb3NlXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbY29ycmVjdGlvbiwgc2V0Q29ycmVjdGlvbl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW3ByZXNzdXJlLCBzZXRQcmVzc3VyZV0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2RvY3VtZW50SWQsIHNldERvY3VtZW50SWRdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtuZXdJZCwgc2V0TmV3SWRdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4oXCJcIik7XG5cbiAgICAvLyBjb25zdCBnZXRBbGxMaXN0ID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xuICAgIC8vICAgc2V0TGlzdEl0ZW0oYXdhaXQgZ2V0QWxsR2x1Y29zZSgpKTtcbiAgICAvLyB9LCBbXSk7XG5cbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vICAgZ2V0QWxsTGlzdCgpO1xuICAgIC8vIH0sIFtnZXRBbGxMaXN0XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGlzdENvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIGxpc3RJdGVtLFxuICAgICAgICBzZXRMaXN0SXRlbSxcbiAgICAgICAgZGF0ZSxcbiAgICAgICAgc2V0RGF0ZSxcbiAgICAgICAgdGltZSxcbiAgICAgICAgZ2x1Y29zZSxcbiAgICAgICAgY29ycmVjdGlvbixcbiAgICAgICAgcHJlc3N1cmUsXG4gICAgICAgIGRvY3VtZW50SWQsXG4gICAgICAgIG5ld0lkLFxuICAgICAgICBzZXRUaW1lLFxuICAgICAgICBzZXRHbHVjb3NlLFxuICAgICAgICBzZXRDb3JyZWN0aW9uLFxuICAgICAgICBzZXRQcmVzc3VyZSxcbiAgICAgICAgc2V0RG9jdW1lbnRJZCxcbiAgICAgICAgc2V0TmV3SWQsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0xpc3RDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IFVzZUxpc3RHbHVjb3NlQ29udGV4dCA9ICgpID0+IHtcbiAgY29uc3Qge1xuICAgIGxpc3RJdGVtLFxuICAgIHNldExpc3RJdGVtLFxuICAgIHNldERhdGUsXG4gICAgZGF0ZSxcbiAgICB0aW1lLFxuICAgIHNldFRpbWUsXG4gICAgY29ycmVjdGlvbixcbiAgICBzZXRDb3JyZWN0aW9uLFxuICAgIGRvY3VtZW50SWQsXG4gICAgc2V0RG9jdW1lbnRJZCxcbiAgICBnbHVjb3NlLFxuICAgIHNldEdsdWNvc2UsXG4gICAgbmV3SWQsXG4gICAgc2V0TmV3SWQsXG4gICAgcHJlc3N1cmUsXG4gICAgc2V0UHJlc3N1cmUsXG4gIH0gPSB1c2VDb250ZXh0KExpc3RDb250ZXh0KTtcblxuICBjb25zdCBhZGRJdGVtR2x1Y29zZSA9IChpdGVtOiBJdGVtKSA9PiB7XG4gICAgc2V0TGlzdEl0ZW0oKHByZXYpID0+IFsuLi5wcmV2LCBpdGVtXSk7XG4gICAgYWRkR2x1Y29zZShpdGVtKVxuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZUl0ZW1HTHVjb3NlID0gKGRvY3VtZW50SWQ6IHN0cmluZywgaXRlbTpJdGVtKSA9PiB7XG4gICAgdXBkYXRlR0x1Y29zZShkb2N1bWVudElkLCBpdGVtKVxuICB9XG5cbiAgY29uc3QgcmVtb3ZlSXRlbUdMdWNvc2UgPSAoZG9jdW1lbnRJZDogc3RyaW5nKSA9PiB7XG4gICAgc2V0TGlzdEl0ZW0obGlzdEl0ZW0uZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkICE9PSBkb2N1bWVudElkKSk7XG4gIH07XG5cbiAgY29uc3QgZWRpdGlJdGVtR0x1Y29zZSA9IHVzZUNhbGxiYWNrKChuZXdJdGVtOiBJdGVtKSA9PiB7XG4gICAgY29uc3QgeyBjb3JyZWN0aW9uLCBkYXRlLCBkb2N1bWVudElkLCBnbHVjb3NlLCBwcmVzc3VyZSwgdGltZSB9ID0gbmV3SXRlbTtcbiAgICBzZXREYXRlKGRhdGUpO1xuICAgIHNldFRpbWUodGltZSBhcyBzdHJpbmcpO1xuICAgIHNldEdsdWNvc2UoZ2x1Y29zZSBhcyBzdHJpbmcpO1xuICAgIHNldENvcnJlY3Rpb24oY29ycmVjdGlvbik7XG4gICAgc2V0UHJlc3N1cmUocHJlc3N1cmUgYXMgc3RyaW5nKTtcbiAgICBzZXREb2N1bWVudElkKGRvY3VtZW50SWQgYXMgc3RyaW5nKTtcblxuICB9LCBbXSk7XG5cbiAgcmV0dXJuIHtcbiAgICBsaXN0SXRlbSxcbiAgICBhZGRJdGVtR2x1Y29zZSxcbiAgICByZW1vdmVJdGVtR0x1Y29zZSxcbiAgICBlZGl0aUl0ZW1HTHVjb3NlLFxuICAgIHRpbWUsXG4gICAgZGF0ZSxcbiAgICBnbHVjb3NlLFxuICAgIGNvcnJlY3Rpb24sXG4gICAgcHJlc3N1cmUsXG4gICAgZG9jdW1lbnRJZCxcbiAgICBuZXdJZCxcbiAgICBzZXREYXRlLFxuICAgIHNldFRpbWUsXG4gICAgc2V0R2x1Y29zZSxcbiAgICBzZXRDb3JyZWN0aW9uLFxuICAgIHNldFByZXNzdXJlLFxuICAgIHNldERvY3VtZW50SWQsXG4gICAgc2V0TmV3SWQsXG4gIH07XG59O1xuIl0sIm5hbWVzIjpbImFkZEdsdWNvc2UiLCJ1cGRhdGVHTHVjb3NlIiwidXNlQ29udGV4dCIsInVzZUNhbGxiYWNrIiwiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwiTGlzdENvbnRleHQiLCJsaXN0SXRlbSIsImRhdGUiLCJ0aW1lIiwiZ2x1Y29zZSIsImNvcnJlY3Rpb24iLCJwcmVzc3VyZSIsImRvY3VtZW50SWQiLCJuZXdJZCIsInNldExpc3RJdGVtIiwic2V0RGF0ZSIsInNldFRpbWUiLCJzZXRHbHVjb3NlIiwic2V0Q29ycmVjdGlvbiIsInNldFByZXNzdXJlIiwic2V0RG9jdW1lbnRJZCIsInNldE5ld0lkIiwiZGlzcGxheU5hbWUiLCJMaXN0UHJvdmlkZXIiLCJjaGlsZHJlbiIsImlkIiwiVXNlTGlzdEdsdWNvc2VDb250ZXh0IiwiYWRkSXRlbUdsdWNvc2UiLCJpdGVtIiwicHJldiIsInVwZGF0ZUl0ZW1HTHVjb3NlIiwicmVtb3ZlSXRlbUdMdWNvc2UiLCJmaWx0ZXIiLCJlZGl0aUl0ZW1HTHVjb3NlIiwibmV3SXRlbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/context/list/contextList.tsx\n"));

/***/ })

});