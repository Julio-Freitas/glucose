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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var context_alert_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! context/alert/context */ \"./src/context/alert/context.tsx\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ \"./src/components/alert/style.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/home/juliofreitas/\\xC1rea de Trabalho/glucose/src/components/alert/alert.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar interval = null;\n\nvar Alert = function Alert(_ref) {\n  _s();\n\n  var delay = _ref.delay,\n      type = _ref.type;\n\n  var _UseAlertContext = (0,context_alert_context__WEBPACK_IMPORTED_MODULE_1__.UseAlertContext)(),\n      statusAlert = _UseAlertContext.statusAlert,\n      hiddenAlert = _UseAlertContext.hiddenAlert;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n      progress = _useState[0],\n      setprogress = _useState[1];\n\n  var delayref = (delay || 100) / 100;\n  var msg = statusAlert.msg,\n      hidden = statusAlert.hidden;\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (hidden) {\n      interval = setInterval(function () {\n        setprogress(function (oldvalue) {\n          var newValue = oldvalue + 1;\n\n          if (newValue >= 100) {\n            clearInterval(interval);\n            return 100;\n          }\n\n          return newValue;\n        });\n      }, delayref);\n    }\n\n    setprogress(0);\n    return function () {\n      return clearInterval(interval);\n    };\n  }, [hidden]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (progress === 100) hiddenAlert(true);\n  }, [progress]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_2__.ContainerAlert, {\n    type: type,\n    hidden: hidden,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_2__.Progress, {\n      width: \"\".concat(progress, \"%\")\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_2__.Context, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_2__.Text, {\n        children: msg\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 49,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Alert, \"l7e/impLaX72EZqw4gug1g8xW48=\");\n\n_c = Alert;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(Alert));\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Alert\");\n$RefreshReg$(_c2, \"%default%\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9hbGVydC9hbGVydC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSUssUUFBYSxHQUFHLElBQXBCOztBQVVBLElBQU1DLEtBQTJCLEdBQUcsU0FBOUJBLEtBQThCLE9BSzlCO0VBQUE7O0VBQUEsSUFKSkMsS0FJSSxRQUpKQSxLQUlJO0VBQUEsSUFESkMsSUFDSSxRQURKQSxJQUNJOztFQUNKLHVCQUFtQ0wsc0VBQWUsRUFBbEQ7RUFBQSxJQUFPTSxXQUFQLG9CQUFPQSxXQUFQO0VBQUEsSUFBb0JDLFdBQXBCLG9CQUFvQkEsV0FBcEI7O0VBQ0EsZ0JBQWdDUiwrQ0FBUSxDQUFDLENBQUQsQ0FBeEM7RUFBQSxJQUFPUyxRQUFQO0VBQUEsSUFBaUJDLFdBQWpCOztFQUNBLElBQU1DLFFBQVEsR0FBRyxDQUFDTixLQUFLLElBQUksR0FBVixJQUFpQixHQUFsQztFQUNBLElBQU9PLEdBQVAsR0FBc0JMLFdBQXRCLENBQU9LLEdBQVA7RUFBQSxJQUFZQyxNQUFaLEdBQXNCTixXQUF0QixDQUFZTSxNQUFaO0VBRUFkLGdEQUFTLENBQUMsWUFBTTtJQUNkLElBQUljLE1BQUosRUFBWTtNQUNWVixRQUFRLEdBQUdXLFdBQVcsQ0FBQyxZQUFNO1FBQzNCSixXQUFXLENBQUMsVUFBQ0ssUUFBRCxFQUFjO1VBQ3hCLElBQUlDLFFBQVEsR0FBR0QsUUFBUSxHQUFHLENBQTFCOztVQUNBLElBQUlDLFFBQVEsSUFBSSxHQUFoQixFQUFxQjtZQUNuQkMsYUFBYSxDQUFDZCxRQUFELENBQWI7WUFDQSxPQUFPLEdBQVA7VUFDRDs7VUFDRCxPQUFPYSxRQUFQO1FBQ0QsQ0FQVSxDQUFYO01BUUQsQ0FUcUIsRUFTbkJMLFFBVG1CLENBQXRCO0lBVUQ7O0lBQ0RELFdBQVcsQ0FBQyxDQUFELENBQVg7SUFFQSxPQUFPO01BQUEsT0FBTU8sYUFBYSxDQUFDZCxRQUFELENBQW5CO0lBQUEsQ0FBUDtFQUNELENBaEJRLEVBZ0JOLENBQUNVLE1BQUQsQ0FoQk0sQ0FBVDtFQWtCQWQsZ0RBQVMsQ0FBQyxZQUFNO0lBQ2QsSUFBSVUsUUFBUSxLQUFLLEdBQWpCLEVBQXNCRCxXQUFXLENBQUMsSUFBRCxDQUFYO0VBQ3ZCLENBRlEsRUFFTixDQUFDQyxRQUFELENBRk0sQ0FBVDtFQUlBLG9CQUNFLDhEQUFDLGtEQUFEO0lBQXVCLElBQUksRUFBRUgsSUFBN0I7SUFBbUMsTUFBTSxFQUFFTyxNQUEzQztJQUFBLHdCQUNFLDhEQUFDLDRDQUFEO01BQWlCLEtBQUssWUFBS0osUUFBTDtJQUF0QjtNQUFBO01BQUE7TUFBQTtJQUFBLFNBREYsZUFFRSw4REFBQywyQ0FBRDtNQUFBLHVCQUNFLDhEQUFDLHdDQUFEO1FBQUEsVUFBY0c7TUFBZDtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBREY7TUFBQTtNQUFBO01BQUE7SUFBQSxTQUZGO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxTQURGO0FBUUQsQ0F6Q0Q7O0dBQU1SOztLQUFBQTtBQTBDTiwrREFBZSxtQkFBQU4saURBQUEsQ0FBV00sS0FBWCxDQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2FsZXJ0L2FsZXJ0LnRzeD9hNzgxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBVc2VBbGVydENvbnRleHQgfSBmcm9tIFwiY29udGV4dC9hbGVydC9jb250ZXh0XCI7XG5pbXBvcnQgKiBhcyBTdHlsZWQgZnJvbSBcIi4vc3R5bGVcIjtcblxubGV0IGludGVydmFsOiBhbnkgPSBudWxsO1xudHlwZSBBbGVydFByb3BzID0ge1xuICBkZWxheT86IG51bWJlcjtcbiAgaGlkZGVuQWxlcnQ6ICh0aW1lOiBib29sZWFuKSA9PiB2b2lkO1xuICBtc2c6IHN0cmluZztcbiAgaGlkZGVuOiBib29sZWFuO1xuICB0eXBlOiBcInN1Y2Vzc1wiIHwgXCJlcnJvclwiIHwgXCJ3YXJuXCI7XG59O1xuXG5cbmNvbnN0IEFsZXJ0OiBSZWFjdC5GQzxBbGVydFByb3BzPiA9ICh7XG4gIGRlbGF5LFxuXG5cbiAgdHlwZSxcbn0pID0+IHtcbiAgY29uc3Qge3N0YXR1c0FsZXJ0LCBoaWRkZW5BbGVydH0gPSBVc2VBbGVydENvbnRleHQoKVxuICBjb25zdCBbcHJvZ3Jlc3MsIHNldHByb2dyZXNzXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBkZWxheXJlZiA9IChkZWxheSB8fCAxMDApIC8gMTAwO1xuICBjb25zdCB7bXNnLCBoaWRkZW59ID0gc3RhdHVzQWxlcnRcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChoaWRkZW4pIHtcbiAgICAgIGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBzZXRwcm9ncmVzcygob2xkdmFsdWUpID0+IHtcbiAgICAgICAgICBsZXQgbmV3VmFsdWUgPSBvbGR2YWx1ZSArIDE7XG4gICAgICAgICAgaWYgKG5ld1ZhbHVlID49IDEwMCkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICByZXR1cm4gMTAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbmV3VmFsdWU7XG4gICAgICAgIH0pO1xuICAgICAgfSwgZGVsYXlyZWYpO1xuICAgIH1cbiAgICBzZXRwcm9ncmVzcygwKTtcblxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgfSwgW2hpZGRlbl0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHByb2dyZXNzID09PSAxMDApIGhpZGRlbkFsZXJ0KHRydWUpO1xuICB9LCBbcHJvZ3Jlc3NdKTtcblxuICByZXR1cm4gKFxuICAgIDxTdHlsZWQuQ29udGFpbmVyQWxlcnQgdHlwZT17dHlwZX0gaGlkZGVuPXtoaWRkZW59PlxuICAgICAgPFN0eWxlZC5Qcm9ncmVzcyB3aWR0aD17YCR7cHJvZ3Jlc3N9JWB9IC8+XG4gICAgICA8U3R5bGVkLkNvbnRleHQ+XG4gICAgICAgIDxTdHlsZWQuVGV4dD57bXNnfTwvU3R5bGVkLlRleHQ+XG4gICAgICA8L1N0eWxlZC5Db250ZXh0PlxuICAgIDwvU3R5bGVkLkNvbnRhaW5lckFsZXJ0PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oQWxlcnQpO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJVc2VBbGVydENvbnRleHQiLCJTdHlsZWQiLCJpbnRlcnZhbCIsIkFsZXJ0IiwiZGVsYXkiLCJ0eXBlIiwic3RhdHVzQWxlcnQiLCJoaWRkZW5BbGVydCIsInByb2dyZXNzIiwic2V0cHJvZ3Jlc3MiLCJkZWxheXJlZiIsIm1zZyIsImhpZGRlbiIsInNldEludGVydmFsIiwib2xkdmFsdWUiLCJuZXdWYWx1ZSIsImNsZWFySW50ZXJ2YWwiLCJtZW1vIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/alert/alert.tsx\n"));

/***/ })

});