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

/***/ "./src/context/alert/context.tsx":
/*!***************************************!*\
  !*** ./src/context/alert/context.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AlertContext\": function() { return /* binding */ AlertContext; },\n/* harmony export */   \"AlertProvider\": function() { return /* binding */ AlertProvider; },\n/* harmony export */   \"UseAlertContext\": function() { return /* binding */ UseAlertContext; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/home/juliofreitas/\\xC1rea de Trabalho/glucose/src/context/alert/context.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\nvar AlertContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({\n  statusAlert: {\n    msg: \"\",\n    hidden: false,\n    type: \"warn\"\n  },\n  setStatusAlert: function setStatusAlert() {}\n});\nAlertContext.displayName = \"alert-context\";\nvar AlertProvider = function AlertProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    msg: \"\",\n    hidden: false,\n    type: \"warn\"\n  }),\n      statusAlert = _useState[0],\n      setStatusAlert = _useState[1];\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(AlertContext.Provider, {\n    value: {\n      statusAlert: statusAlert,\n      setStatusAlert: setStatusAlert\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(AlertProvider, \"0SDvNLN4GygHjdrW0wxyjrobbIA=\");\n\n_c = AlertProvider;\nvar UseAlertContext = function UseAlertContext() {\n  _s2();\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(AlertContext),\n      statusAlert = _useContext.statusAlert,\n      setStatusAlert = _useContext.setStatusAlert;\n\n  var onSetStatusAlert = function onSetStatusAlert(args) {\n    console.log(args); // setStatusAlert(args);\n  };\n\n  return {\n    statusAlert: statusAlert,\n    onSetStatusAlert: onSetStatusAlert\n  };\n};\n\n_s2(UseAlertContext, \"65liy018QEEvCpkVG7FAV8prcrA=\");\n\n_c2 = UseAlertContext;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"AlertProvider\");\n$RefreshReg$(_c2, \"UseAlertContext\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9hbGVydC9jb250ZXh0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFRTyxJQUFNRyxZQUFZLGdCQUFHSCxvREFBYSxDQUFtQjtFQUMxREksV0FBVyxFQUFFO0lBQUVDLEdBQUcsRUFBRSxFQUFQO0lBQVdDLE1BQU0sRUFBRSxLQUFuQjtJQUEwQkMsSUFBSSxFQUFFO0VBQWhDLENBRDZDO0VBRTFEQyxjQUFjLEVBQUUsMEJBQU0sQ0FBRTtBQUZrQyxDQUFuQixDQUFsQztBQUtQTCxZQUFZLENBQUNNLFdBQWIsR0FBMkIsZUFBM0I7QUFFTyxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLE9BQWlEO0VBQUE7O0VBQUEsSUFBOUNDLFFBQThDLFFBQTlDQSxRQUE4Qzs7RUFDNUUsZ0JBQXNDVCwrQ0FBUSxDQUFhO0lBQ3pERyxHQUFHLEVBQUUsRUFEb0Q7SUFFekRDLE1BQU0sRUFBRSxLQUZpRDtJQUd6REMsSUFBSSxFQUFFO0VBSG1ELENBQWIsQ0FBOUM7RUFBQSxJQUFPSCxXQUFQO0VBQUEsSUFBb0JJLGNBQXBCOztFQU1BLG9CQUNFLDhEQUFDLFlBQUQsQ0FBYyxRQUFkO0lBQXVCLEtBQUssRUFBRTtNQUFFSixXQUFXLEVBQVhBLFdBQUY7TUFBZUksY0FBYyxFQUFkQTtJQUFmLENBQTlCO0lBQUEsVUFDR0c7RUFESDtJQUFBO0lBQUE7SUFBQTtFQUFBLFNBREY7QUFLRCxDQVpNOztHQUFNRDs7S0FBQUE7QUFjTixJQUFNRSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07RUFBQTs7RUFDbkMsa0JBQXdDWCxpREFBVSxDQUFDRSxZQUFELENBQWxEO0VBQUEsSUFBUUMsV0FBUixlQUFRQSxXQUFSO0VBQUEsSUFBcUJJLGNBQXJCLGVBQXFCQSxjQUFyQjs7RUFFQSxJQUFNSyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLElBQUQsRUFBc0I7SUFDN0NDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaLEVBRDZDLENBRTdDO0VBQ0QsQ0FIRDs7RUFNQSxPQUFPO0lBQ0xWLFdBQVcsRUFBWEEsV0FESztJQUVMUyxnQkFBZ0IsRUFBaEJBO0VBRkssQ0FBUDtBQUlELENBYk07O0lBQU1EOztNQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29udGV4dC9hbGVydC9jb250ZXh0LnRzeD84NWM5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIFNldFN0YXRlQWN0aW9uLCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQWxlcnRTdGF0ZSB9IGZyb20gXCJ0eXBlcy9hbGVydFwiO1xuXG50eXBlIEFsZXJ0Q29udGV4dFR5cGUgPSB7XG4gIHN0YXR1c0FsZXJ0OiBBbGVydFN0YXRlO1xuICBzZXRTdGF0dXNBbGVydDogUmVhY3QuRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248QWxlcnRTdGF0ZT4+O1xufTtcblxuZXhwb3J0IGNvbnN0IEFsZXJ0Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8QWxlcnRDb250ZXh0VHlwZT4oe1xuICBzdGF0dXNBbGVydDogeyBtc2c6IFwiXCIsIGhpZGRlbjogZmFsc2UsIHR5cGU6IFwid2FyblwiIH0sXG4gIHNldFN0YXR1c0FsZXJ0OiAoKSA9PiB7fSxcbn0pO1xuXG5BbGVydENvbnRleHQuZGlzcGxheU5hbWUgPSBcImFsZXJ0LWNvbnRleHRcIjtcblxuZXhwb3J0IGNvbnN0IEFsZXJ0UHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfSkgPT4ge1xuICBjb25zdCBbc3RhdHVzQWxlcnQsIHNldFN0YXR1c0FsZXJ0XSA9IHVzZVN0YXRlPEFsZXJ0U3RhdGU+KHtcbiAgICBtc2c6IFwiXCIsXG4gICAgaGlkZGVuOiBmYWxzZSxcbiAgICB0eXBlOiBcIndhcm5cIixcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8QWxlcnRDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHN0YXR1c0FsZXJ0LCBzZXRTdGF0dXNBbGVydCB9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0FsZXJ0Q29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBVc2VBbGVydENvbnRleHQgPSAoKSA9PiB7XG4gIGNvbnN0IHsgc3RhdHVzQWxlcnQsIHNldFN0YXR1c0FsZXJ0IH0gPSB1c2VDb250ZXh0KEFsZXJ0Q29udGV4dCk7XG5cbiAgY29uc3Qgb25TZXRTdGF0dXNBbGVydCA9IChhcmdzOiBBbGVydFN0YXRlKSA9PiB7XG4gICAgY29uc29sZS5sb2coYXJncylcbiAgICAvLyBzZXRTdGF0dXNBbGVydChhcmdzKTtcbiAgfTtcblxuXG4gIHJldHVybiB7XG4gICAgc3RhdHVzQWxlcnQsXG4gICAgb25TZXRTdGF0dXNBbGVydCxcbiAgfTtcbn07XG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIkFsZXJ0Q29udGV4dCIsInN0YXR1c0FsZXJ0IiwibXNnIiwiaGlkZGVuIiwidHlwZSIsInNldFN0YXR1c0FsZXJ0IiwiZGlzcGxheU5hbWUiLCJBbGVydFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJVc2VBbGVydENvbnRleHQiLCJvblNldFN0YXR1c0FsZXJ0IiwiYXJncyIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/context/alert/context.tsx\n"));

/***/ })

});