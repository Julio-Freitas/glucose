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

/***/ "./src/components/alert/alert.tsx":
/*!****************************************!*\
  !*** ./src/components/alert/alert.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ \"./src/components/alert/style.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/home/juliofreitas/\\xC1rea de Trabalho/glucose/src/components/alert/alert.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar interval = null;\n\nvar Alert = function Alert(_ref) {\n  _s();\n\n  var delay = _ref.delay,\n      hiddenAlert = _ref.hiddenAlert,\n      msg = _ref.msg,\n      hidden = _ref.hidden,\n      type = _ref.type;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n      progress = _useState[0],\n      setprogress = _useState[1];\n\n  var delayref = (delay || 100) / 100;\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (hidden) {\n      interval = setInterval(function () {\n        setprogress(function (oldvalue) {\n          var newValue = oldvalue + 1;\n\n          if (newValue >= 100) {\n            clearInterval(interval);\n            hiddenAlert(true);\n            return 100;\n          }\n\n          return newValue;\n        });\n      }, delayref);\n    }\n\n    setprogress(0);\n    return function () {\n      clearInterval(interval);\n    };\n  }, [hidden]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_1__.ContainerAlert, {\n    type: type,\n    hidden: hidden,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_1__.Progress, {\n      width: \"\".concat(progress, \"%\")\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_1__.Context, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_1__.Text, {\n        children: msg\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 49,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Alert, \"ggvhidKGcwKD6JV6XUhF5FaRido=\");\n\n_c = Alert;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Alert);\n\nvar _c;\n\n$RefreshReg$(_c, \"Alert\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9hbGVydC9hbGVydC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBSUcsUUFBYSxHQUFHLElBQXBCOztBQVNBLElBQU1DLEtBQTJCLEdBQUcsU0FBOUJBLEtBQThCLE9BTTlCO0VBQUE7O0VBQUEsSUFMSkMsS0FLSSxRQUxKQSxLQUtJO0VBQUEsSUFKSkMsV0FJSSxRQUpKQSxXQUlJO0VBQUEsSUFISkMsR0FHSSxRQUhKQSxHQUdJO0VBQUEsSUFGSkMsTUFFSSxRQUZKQSxNQUVJO0VBQUEsSUFESkMsSUFDSSxRQURKQSxJQUNJOztFQUNKLGdCQUFnQ1IsK0NBQVEsQ0FBQyxDQUFELENBQXhDO0VBQUEsSUFBT1MsUUFBUDtFQUFBLElBQWlCQyxXQUFqQjs7RUFDQSxJQUFNQyxRQUFRLEdBQUcsQ0FBQ1AsS0FBSyxJQUFJLEdBQVYsSUFBaUIsR0FBbEM7RUFFQUwsZ0RBQVMsQ0FBQyxZQUFNO0lBRWQsSUFBSVEsTUFBSixFQUFZO01BQ1RMLFFBQVEsR0FBR1UsV0FBVyxDQUFDLFlBQU07UUFDNUJGLFdBQVcsQ0FBQyxVQUFDRyxRQUFELEVBQWM7VUFDeEIsSUFBSUMsUUFBUSxHQUFHRCxRQUFRLEdBQUcsQ0FBMUI7O1VBQ0EsSUFBSUMsUUFBUSxJQUFJLEdBQWhCLEVBQXFCO1lBQ25CQyxhQUFhLENBQUNiLFFBQUQsQ0FBYjtZQUNBRyxXQUFXLENBQUMsSUFBRCxDQUFYO1lBQ0EsT0FBTyxHQUFQO1VBQ0Q7O1VBQ0QsT0FBT1MsUUFBUDtRQUNELENBUlUsQ0FBWDtNQVVELENBWHNCLEVBV3BCSCxRQVhvQixDQUF0QjtJQWNGOztJQUNERCxXQUFXLENBQUMsQ0FBRCxDQUFYO0lBQ0EsT0FBTyxZQUFRO01BQ2JLLGFBQWEsQ0FBQ2IsUUFBRCxDQUFiO0lBQ0QsQ0FGRDtFQUlELENBdkJRLEVBdUJOLENBQUNLLE1BQUQsQ0F2Qk0sQ0FBVDtFQXlCQSxvQkFDRSw4REFBQyxrREFBRDtJQUF1QixJQUFJLEVBQUVDLElBQTdCO0lBQW1DLE1BQU0sRUFBRUQsTUFBM0M7SUFBQSx3QkFDRSw4REFBQyw0Q0FBRDtNQUFpQixLQUFLLFlBQUtFLFFBQUw7SUFBdEI7TUFBQTtNQUFBO01BQUE7SUFBQSxTQURGLGVBRUUsOERBQUMsMkNBQUQ7TUFBQSx1QkFDRSw4REFBQyx3Q0FBRDtRQUFBLFVBQWNIO01BQWQ7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQURGO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FGRjtFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsU0FERjtBQVFELENBM0NEOztHQUFNSDs7S0FBQUE7QUE0Q04sK0RBQWVBLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYWxlcnQvYWxlcnQudHN4P2E3ODEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgU3R5bGVkIGZyb20gXCIuL3N0eWxlXCI7XG5cbmxldCBpbnRlcnZhbDogYW55ID0gbnVsbFxudHlwZSBBbGVydFByb3BzID0ge1xuICBkZWxheT86IG51bWJlcjtcbiAgaGlkZGVuQWxlcnQ6ICh0aW1lOiBib29sZWFuKSA9PiB2b2lkO1xuICBtc2c6IHN0cmluZztcbiAgaGlkZGVuOiBib29sZWFuO1xuICB0eXBlOiBcInN1Y2Vzc1wiIHwgXCJlcnJvclwiIHwgXCJ3YXJuXCI7XG59O1xuXG5jb25zdCBBbGVydDogUmVhY3QuRkM8QWxlcnRQcm9wcz4gPSAoe1xuICBkZWxheSxcbiAgaGlkZGVuQWxlcnQsXG4gIG1zZyxcbiAgaGlkZGVuLFxuICB0eXBlLFxufSkgPT4ge1xuICBjb25zdCBbcHJvZ3Jlc3MsIHNldHByb2dyZXNzXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBkZWxheXJlZiA9IChkZWxheSB8fCAxMDApIC8gMTAwO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG5cbiAgICBpZiAoaGlkZGVuKSB7XG4gICAgICAgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIHNldHByb2dyZXNzKChvbGR2YWx1ZSkgPT4ge1xuICAgICAgICAgIGxldCBuZXdWYWx1ZSA9IG9sZHZhbHVlICsgMTtcbiAgICAgICAgICBpZiAobmV3VmFsdWUgPj0gMTAwKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgIGhpZGRlbkFsZXJ0KHRydWUpO1xuICAgICAgICAgICAgcmV0dXJuIDEwMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG5ld1ZhbHVlO1xuICAgICAgICB9KTtcblxuICAgICAgfSwgZGVsYXlyZWYpO1xuXG5cbiAgICB9XG4gICAgc2V0cHJvZ3Jlc3MoMCk7XG4gICAgcmV0dXJuICgpID0+ICAge1xuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgfTtcblxuICB9LCBbaGlkZGVuXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkLkNvbnRhaW5lckFsZXJ0IHR5cGU9e3R5cGV9IGhpZGRlbj17aGlkZGVufT5cbiAgICAgIDxTdHlsZWQuUHJvZ3Jlc3Mgd2lkdGg9e2Ake3Byb2dyZXNzfSVgfSAvPlxuICAgICAgPFN0eWxlZC5Db250ZXh0PlxuICAgICAgICA8U3R5bGVkLlRleHQ+e21zZ308L1N0eWxlZC5UZXh0PlxuICAgICAgPC9TdHlsZWQuQ29udGV4dD5cbiAgICA8L1N0eWxlZC5Db250YWluZXJBbGVydD5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBBbGVydDtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlN0eWxlZCIsImludGVydmFsIiwiQWxlcnQiLCJkZWxheSIsImhpZGRlbkFsZXJ0IiwibXNnIiwiaGlkZGVuIiwidHlwZSIsInByb2dyZXNzIiwic2V0cHJvZ3Jlc3MiLCJkZWxheXJlZiIsInNldEludGVydmFsIiwib2xkdmFsdWUiLCJuZXdWYWx1ZSIsImNsZWFySW50ZXJ2YWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/alert/alert.tsx\n"));

/***/ })

});