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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var context_alert_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! context/alert/context */ \"./src/context/alert/context.tsx\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ \"./src/components/alert/style.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/home/juliofreitas/\\xC1rea de Trabalho/glucose/src/components/alert/alert.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar interval = null;\n\nvar Alert = function Alert(_ref) {\n  _s();\n\n  var delay = _ref.delay,\n      hiddenAlert = _ref.hiddenAlert,\n      msg = _ref.msg,\n      hidden = _ref.hidden,\n      type = _ref.type;\n\n  var _UseAlertContext = (0,context_alert_context__WEBPACK_IMPORTED_MODULE_1__.UseAlertContext)(),\n      statusAlert = _UseAlertContext.statusAlert;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n      progress = _useState[0],\n      setprogress = _useState[1];\n\n  var delayref = (delay || 100) / 100;\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (hidden) {\n      interval = setInterval(function () {\n        setprogress(function (oldvalue) {\n          var newValue = oldvalue + 1;\n\n          if (newValue >= 100) {\n            clearInterval(interval);\n            return 100;\n          }\n\n          return newValue;\n        });\n      }, delayref);\n    }\n\n    setprogress(0);\n    console.log(statusAlert);\n    return function () {\n      return clearInterval(interval);\n    };\n  }, [hidden]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (progress === 100) hiddenAlert(true);\n  }, [progress]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_2__.ContainerAlert, {\n    type: type,\n    hidden: hidden,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_2__.Progress, {\n      width: \"\".concat(progress, \"%\")\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_2__.Context, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_2__.Text, {\n        children: msg\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 49,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Alert, \"l7e/impLaX72EZqw4gug1g8xW48=\");\n\n_c = Alert;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(Alert));\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Alert\");\n$RefreshReg$(_c2, \"%default%\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9hbGVydC9hbGVydC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSUssUUFBYSxHQUFHLElBQXBCOztBQVVBLElBQU1DLEtBQTJCLEdBQUcsU0FBOUJBLEtBQThCLE9BTTlCO0VBQUE7O0VBQUEsSUFMSkMsS0FLSSxRQUxKQSxLQUtJO0VBQUEsSUFKSkMsV0FJSSxRQUpKQSxXQUlJO0VBQUEsSUFISkMsR0FHSSxRQUhKQSxHQUdJO0VBQUEsSUFGSkMsTUFFSSxRQUZKQSxNQUVJO0VBQUEsSUFESkMsSUFDSSxRQURKQSxJQUNJOztFQUNKLHVCQUFzQlIsc0VBQWUsRUFBckM7RUFBQSxJQUFPUyxXQUFQLG9CQUFPQSxXQUFQOztFQUNBLGdCQUFnQ1YsK0NBQVEsQ0FBQyxDQUFELENBQXhDO0VBQUEsSUFBT1csUUFBUDtFQUFBLElBQWlCQyxXQUFqQjs7RUFDQSxJQUFNQyxRQUFRLEdBQUcsQ0FBQ1IsS0FBSyxJQUFJLEdBQVYsSUFBaUIsR0FBbEM7RUFFQU4sZ0RBQVMsQ0FBQyxZQUFNO0lBQ2QsSUFBSVMsTUFBSixFQUFZO01BQ1ZMLFFBQVEsR0FBR1csV0FBVyxDQUFDLFlBQU07UUFDM0JGLFdBQVcsQ0FBQyxVQUFDRyxRQUFELEVBQWM7VUFDeEIsSUFBSUMsUUFBUSxHQUFHRCxRQUFRLEdBQUcsQ0FBMUI7O1VBQ0EsSUFBSUMsUUFBUSxJQUFJLEdBQWhCLEVBQXFCO1lBQ25CQyxhQUFhLENBQUNkLFFBQUQsQ0FBYjtZQUNBLE9BQU8sR0FBUDtVQUNEOztVQUNELE9BQU9hLFFBQVA7UUFDRCxDQVBVLENBQVg7TUFRRCxDQVRxQixFQVNuQkgsUUFUbUIsQ0FBdEI7SUFVRDs7SUFDREQsV0FBVyxDQUFDLENBQUQsQ0FBWDtJQUNBTSxPQUFPLENBQUNDLEdBQVIsQ0FBWVQsV0FBWjtJQUNBLE9BQU87TUFBQSxPQUFNTyxhQUFhLENBQUNkLFFBQUQsQ0FBbkI7SUFBQSxDQUFQO0VBQ0QsQ0FoQlEsRUFnQk4sQ0FBQ0ssTUFBRCxDQWhCTSxDQUFUO0VBa0JBVCxnREFBUyxDQUFDLFlBQU07SUFDZCxJQUFJWSxRQUFRLEtBQUssR0FBakIsRUFBc0JMLFdBQVcsQ0FBQyxJQUFELENBQVg7RUFDdkIsQ0FGUSxFQUVOLENBQUNLLFFBQUQsQ0FGTSxDQUFUO0VBSUEsb0JBQ0UsOERBQUMsa0RBQUQ7SUFBdUIsSUFBSSxFQUFFRixJQUE3QjtJQUFtQyxNQUFNLEVBQUVELE1BQTNDO0lBQUEsd0JBQ0UsOERBQUMsNENBQUQ7TUFBaUIsS0FBSyxZQUFLRyxRQUFMO0lBQXRCO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FERixlQUVFLDhEQUFDLDJDQUFEO01BQUEsdUJBQ0UsOERBQUMsd0NBQUQ7UUFBQSxVQUFjSjtNQUFkO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFERjtNQUFBO01BQUE7TUFBQTtJQUFBLFNBRkY7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBLFNBREY7QUFRRCxDQXpDRDs7R0FBTUg7O0tBQUFBO0FBMENOLCtEQUFlLG1CQUFBTixpREFBQSxDQUFXTSxLQUFYLENBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYWxlcnQvYWxlcnQudHN4P2E3ODEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFVzZUFsZXJ0Q29udGV4dCB9IGZyb20gXCJjb250ZXh0L2FsZXJ0L2NvbnRleHRcIjtcbmltcG9ydCAqIGFzIFN0eWxlZCBmcm9tIFwiLi9zdHlsZVwiO1xuXG5sZXQgaW50ZXJ2YWw6IGFueSA9IG51bGw7XG50eXBlIEFsZXJ0UHJvcHMgPSB7XG4gIGRlbGF5PzogbnVtYmVyO1xuICBoaWRkZW5BbGVydDogKHRpbWU6IGJvb2xlYW4pID0+IHZvaWQ7XG4gIG1zZzogc3RyaW5nO1xuICBoaWRkZW46IGJvb2xlYW47XG4gIHR5cGU6IFwic3VjZXNzXCIgfCBcImVycm9yXCIgfCBcIndhcm5cIjtcbn07XG5cblxuY29uc3QgQWxlcnQ6IFJlYWN0LkZDPEFsZXJ0UHJvcHM+ID0gKHtcbiAgZGVsYXksXG4gIGhpZGRlbkFsZXJ0LFxuICBtc2csXG4gIGhpZGRlbixcbiAgdHlwZSxcbn0pID0+IHtcbiAgY29uc3Qge3N0YXR1c0FsZXJ0fSA9IFVzZUFsZXJ0Q29udGV4dCgpXG4gIGNvbnN0IFtwcm9ncmVzcywgc2V0cHJvZ3Jlc3NdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IGRlbGF5cmVmID0gKGRlbGF5IHx8IDEwMCkgLyAxMDA7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaGlkZGVuKSB7XG4gICAgICBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgc2V0cHJvZ3Jlc3MoKG9sZHZhbHVlKSA9PiB7XG4gICAgICAgICAgbGV0IG5ld1ZhbHVlID0gb2xkdmFsdWUgKyAxO1xuICAgICAgICAgIGlmIChuZXdWYWx1ZSA+PSAxMDApIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgcmV0dXJuIDEwMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG5ld1ZhbHVlO1xuICAgICAgICB9KTtcbiAgICAgIH0sIGRlbGF5cmVmKTtcbiAgICB9XG4gICAgc2V0cHJvZ3Jlc3MoMCk7XG4gICAgY29uc29sZS5sb2coc3RhdHVzQWxlcnQpXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICB9LCBbaGlkZGVuXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocHJvZ3Jlc3MgPT09IDEwMCkgaGlkZGVuQWxlcnQodHJ1ZSk7XG4gIH0sIFtwcm9ncmVzc10pO1xuXG4gIHJldHVybiAoXG4gICAgPFN0eWxlZC5Db250YWluZXJBbGVydCB0eXBlPXt0eXBlfSBoaWRkZW49e2hpZGRlbn0+XG4gICAgICA8U3R5bGVkLlByb2dyZXNzIHdpZHRoPXtgJHtwcm9ncmVzc30lYH0gLz5cbiAgICAgIDxTdHlsZWQuQ29udGV4dD5cbiAgICAgICAgPFN0eWxlZC5UZXh0Pnttc2d9PC9TdHlsZWQuVGV4dD5cbiAgICAgIDwvU3R5bGVkLkNvbnRleHQ+XG4gICAgPC9TdHlsZWQuQ29udGFpbmVyQWxlcnQ+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhBbGVydCk7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlVzZUFsZXJ0Q29udGV4dCIsIlN0eWxlZCIsImludGVydmFsIiwiQWxlcnQiLCJkZWxheSIsImhpZGRlbkFsZXJ0IiwibXNnIiwiaGlkZGVuIiwidHlwZSIsInN0YXR1c0FsZXJ0IiwicHJvZ3Jlc3MiLCJzZXRwcm9ncmVzcyIsImRlbGF5cmVmIiwic2V0SW50ZXJ2YWwiLCJvbGR2YWx1ZSIsIm5ld1ZhbHVlIiwiY2xlYXJJbnRlcnZhbCIsImNvbnNvbGUiLCJsb2ciLCJtZW1vIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/alert/alert.tsx\n"));

/***/ })

});