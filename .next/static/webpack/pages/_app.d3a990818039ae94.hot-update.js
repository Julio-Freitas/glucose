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

/***/ "./src/context/alert/context.tsx":
/*!***************************************!*\
  !*** ./src/context/alert/context.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AlertContext\": function() { return /* binding */ AlertContext; },\n/* harmony export */   \"AlertProvider\": function() { return /* binding */ AlertProvider; },\n/* harmony export */   \"UseAlertContext\": function() { return /* binding */ UseAlertContext; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/home/juliofreitas/\\xC1rea de Trabalho/glucose/src/context/alert/context.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\nvar AlertContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({\n  statusAlert: {\n    msg: \"\",\n    hidden: false,\n    type: \"warn\"\n  },\n  setStatusAlert: function setStatusAlert() {},\n  hiddenAlert: function hiddenAlert() {}\n});\nAlertContext.displayName = \"alert-context\";\nvar AlertProvider = function AlertProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    msg: \"\",\n    hidden: false,\n    type: \"warn\"\n  }),\n      statusAlert = _useState[0],\n      setStatusAlert = _useState[1];\n\n  var hiddenAlert = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (value) {\n    return console.log(value);\n  }, [statusAlert.hidden]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(AlertContext.Provider, {\n    value: {\n      statusAlert: statusAlert,\n      setStatusAlert: setStatusAlert,\n      hiddenAlert: hiddenAlert\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(AlertProvider, \"8k0yswnMHQyTFXxbLB4hmqUbOTg=\");\n\n_c = AlertProvider;\nvar UseAlertContext = function UseAlertContext() {\n  _s2();\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(AlertContext),\n      statusAlert = _useContext.statusAlert,\n      setStatusAlert = _useContext.setStatusAlert;\n\n  var onSetStatusAlert = function onSetStatusAlert(args) {\n    console.log(args, \"AQIU\");\n    setStatusAlert(args);\n  };\n\n  return {\n    statusAlert: statusAlert,\n    onSetStatusAlert: onSetStatusAlert\n  };\n};\n\n_s2(UseAlertContext, \"65liy018QEEvCpkVG7FAV8prcrA=\");\n\n_c2 = UseAlertContext;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"AlertProvider\");\n$RefreshReg$(_c2, \"UseAlertContext\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9hbGVydC9jb250ZXh0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFlTyxJQUFNSSxZQUFZLGdCQUFHSixvREFBYSxDQUFtQjtFQUMxREssV0FBVyxFQUFFO0lBQUVDLEdBQUcsRUFBRSxFQUFQO0lBQVdDLE1BQU0sRUFBRSxLQUFuQjtJQUEwQkMsSUFBSSxFQUFFO0VBQWhDLENBRDZDO0VBRTFEQyxjQUFjLEVBQUUsMEJBQU0sQ0FBRSxDQUZrQztFQUcxREMsV0FBVyxFQUFFLHVCQUFNLENBQUU7QUFIcUMsQ0FBbkIsQ0FBbEM7QUFNUE4sWUFBWSxDQUFDTyxXQUFiLEdBQTJCLGVBQTNCO0FBRU8sSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixPQUFpRDtFQUFBOztFQUFBLElBQTlDQyxRQUE4QyxRQUE5Q0EsUUFBOEM7O0VBQzVFLGdCQUFzQ1YsK0NBQVEsQ0FBYTtJQUN6REcsR0FBRyxFQUFFLEVBRG9EO0lBRXpEQyxNQUFNLEVBQUUsS0FGaUQ7SUFHekRDLElBQUksRUFBRTtFQUhtRCxDQUFiLENBQTlDO0VBQUEsSUFBT0gsV0FBUDtFQUFBLElBQW9CSSxjQUFwQjs7RUFLQSxJQUFNQyxXQUFXLEdBQUdULGtEQUFXLENBQzdCLFVBQUNhLEtBQUQ7SUFBQSxPQUFvQkMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVosQ0FBcEI7RUFBQSxDQUQ2QixFQUU3QixDQUFDVCxXQUFXLENBQUNFLE1BQWIsQ0FGNkIsQ0FBL0I7RUFJQSxvQkFDRSw4REFBQyxZQUFELENBQWMsUUFBZDtJQUF1QixLQUFLLEVBQUU7TUFBRUYsV0FBVyxFQUFYQSxXQUFGO01BQWVJLGNBQWMsRUFBZEEsY0FBZjtNQUErQkMsV0FBVyxFQUFYQTtJQUEvQixDQUE5QjtJQUFBLFVBQ0dHO0VBREg7SUFBQTtJQUFBO0lBQUE7RUFBQSxTQURGO0FBS0QsQ0FmTTs7R0FBTUQ7O0tBQUFBO0FBaUJOLElBQU1LLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtFQUFBOztFQUNuQyxrQkFBd0NmLGlEQUFVLENBQUNFLFlBQUQsQ0FBbEQ7RUFBQSxJQUFRQyxXQUFSLGVBQVFBLFdBQVI7RUFBQSxJQUFxQkksY0FBckIsZUFBcUJBLGNBQXJCOztFQUVBLElBQU1TLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsSUFBRCxFQUFzQjtJQUM3Q0osT0FBTyxDQUFDQyxHQUFSLENBQVlHLElBQVosRUFBa0IsTUFBbEI7SUFDQVYsY0FBYyxDQUFDVSxJQUFELENBQWQ7RUFDRCxDQUhEOztFQUtBLE9BQU87SUFDTGQsV0FBVyxFQUFYQSxXQURLO0lBRUxhLGdCQUFnQixFQUFoQkE7RUFGSyxDQUFQO0FBSUQsQ0FaTTs7SUFBTUQ7O01BQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb250ZXh0L2FsZXJ0L2NvbnRleHQudHN4Pzg1YzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgY3JlYXRlQ29udGV4dCxcbiAgU2V0U3RhdGVBY3Rpb24sXG4gIHVzZUNhbGxiYWNrLFxuICB1c2VDb250ZXh0LFxuICB1c2VTdGF0ZSxcbn0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBbGVydFN0YXRlIH0gZnJvbSBcInR5cGVzL2FsZXJ0XCI7XG5cbnR5cGUgQWxlcnRDb250ZXh0VHlwZSA9IHtcbiAgc3RhdHVzQWxlcnQ6IEFsZXJ0U3RhdGU7XG4gIHNldFN0YXR1c0FsZXJ0OiBSZWFjdC5EaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxBbGVydFN0YXRlPj47XG4gIGhpZGRlbkFsZXJ0OiAodGltZTogYm9vbGVhbikgPT4gdm9pZDtcbn07XG5cbmV4cG9ydCBjb25zdCBBbGVydENvbnRleHQgPSBjcmVhdGVDb250ZXh0PEFsZXJ0Q29udGV4dFR5cGU+KHtcbiAgc3RhdHVzQWxlcnQ6IHsgbXNnOiBcIlwiLCBoaWRkZW46IGZhbHNlLCB0eXBlOiBcIndhcm5cIiB9LFxuICBzZXRTdGF0dXNBbGVydDogKCkgPT4ge30sXG4gIGhpZGRlbkFsZXJ0OiAoKSA9PiB7fSxcbn0pO1xuXG5BbGVydENvbnRleHQuZGlzcGxheU5hbWUgPSBcImFsZXJ0LWNvbnRleHRcIjtcblxuZXhwb3J0IGNvbnN0IEFsZXJ0UHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfSkgPT4ge1xuICBjb25zdCBbc3RhdHVzQWxlcnQsIHNldFN0YXR1c0FsZXJ0XSA9IHVzZVN0YXRlPEFsZXJ0U3RhdGU+KHtcbiAgICBtc2c6IFwiXCIsXG4gICAgaGlkZGVuOiBmYWxzZSxcbiAgICB0eXBlOiBcIndhcm5cIixcbiAgfSk7XG4gIGNvbnN0IGhpZGRlbkFsZXJ0ID0gdXNlQ2FsbGJhY2soXG4gICAgKHZhbHVlOiBib29sZWFuKSA9PiBjb25zb2xlLmxvZyh2YWx1ZSksXG4gICAgW3N0YXR1c0FsZXJ0LmhpZGRlbl1cbiAgKTtcbiAgcmV0dXJuIChcbiAgICA8QWxlcnRDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHN0YXR1c0FsZXJ0LCBzZXRTdGF0dXNBbGVydCwgaGlkZGVuQWxlcnQgfX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9BbGVydENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgVXNlQWxlcnRDb250ZXh0ID0gKCkgPT4ge1xuICBjb25zdCB7IHN0YXR1c0FsZXJ0LCBzZXRTdGF0dXNBbGVydCB9ID0gdXNlQ29udGV4dChBbGVydENvbnRleHQpO1xuXG4gIGNvbnN0IG9uU2V0U3RhdHVzQWxlcnQgPSAoYXJnczogQWxlcnRTdGF0ZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGFyZ3MsIFwiQVFJVVwiKTtcbiAgICBzZXRTdGF0dXNBbGVydChhcmdzKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHN0YXR1c0FsZXJ0LFxuICAgIG9uU2V0U3RhdHVzQWxlcnQsXG4gIH07XG59O1xuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDYWxsYmFjayIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIkFsZXJ0Q29udGV4dCIsInN0YXR1c0FsZXJ0IiwibXNnIiwiaGlkZGVuIiwidHlwZSIsInNldFN0YXR1c0FsZXJ0IiwiaGlkZGVuQWxlcnQiLCJkaXNwbGF5TmFtZSIsIkFsZXJ0UHJvdmlkZXIiLCJjaGlsZHJlbiIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsIlVzZUFsZXJ0Q29udGV4dCIsIm9uU2V0U3RhdHVzQWxlcnQiLCJhcmdzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/context/alert/context.tsx\n"));

/***/ })

});