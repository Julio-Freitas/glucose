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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var context_alert_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! context/alert/context */ \"./src/context/alert/context.tsx\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ \"./src/components/alert/style.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/home/juliofreitas/\\xC1rea de Trabalho/glucose/src/components/alert/alert.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar interval = null;\n\nvar Alert = function Alert(_ref) {\n  _s();\n\n  var delay = _ref.delay,\n      hiddenAlert = _ref.hiddenAlert,\n      type = _ref.type;\n\n  var _UseAlertContext = (0,context_alert_context__WEBPACK_IMPORTED_MODULE_1__.UseAlertContext)(),\n      statusAlert = _UseAlertContext.statusAlert;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n      progress = _useState[0],\n      setprogress = _useState[1];\n\n  var delayref = (delay || 100) / 100;\n  var msg = statusAlert.msg,\n      hidden = statusAlert.hidden;\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (hidden) {\n      interval = setInterval(function () {\n        setprogress(function (oldvalue) {\n          var newValue = oldvalue + 1;\n\n          if (newValue >= 100) {\n            clearInterval(interval);\n            return 100;\n          }\n\n          return newValue;\n        });\n      }, delayref);\n    }\n\n    setprogress(0);\n    return function () {\n      return clearInterval(interval);\n    };\n  }, [hidden]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (progress === 100) hiddenAlert(true);\n  }, [progress]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_2__.ContainerAlert, {\n    type: type,\n    hidden: hidden,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_2__.Progress, {\n      width: \"\".concat(progress, \"%\")\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_2__.Context, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_2__.Text, {\n        children: msg\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 49,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Alert, \"l7e/impLaX72EZqw4gug1g8xW48=\");\n\n_c = Alert;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(Alert));\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Alert\");\n$RefreshReg$(_c2, \"%default%\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9hbGVydC9hbGVydC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSUssUUFBYSxHQUFHLElBQXBCOztBQVVBLElBQU1DLEtBQTJCLEdBQUcsU0FBOUJBLEtBQThCLE9BSzlCO0VBQUE7O0VBQUEsSUFKSkMsS0FJSSxRQUpKQSxLQUlJO0VBQUEsSUFISkMsV0FHSSxRQUhKQSxXQUdJO0VBQUEsSUFESkMsSUFDSSxRQURKQSxJQUNJOztFQUNKLHVCQUFzQk4sc0VBQWUsRUFBckM7RUFBQSxJQUFPTyxXQUFQLG9CQUFPQSxXQUFQOztFQUNBLGdCQUFnQ1IsK0NBQVEsQ0FBQyxDQUFELENBQXhDO0VBQUEsSUFBT1MsUUFBUDtFQUFBLElBQWlCQyxXQUFqQjs7RUFDQSxJQUFNQyxRQUFRLEdBQUcsQ0FBQ04sS0FBSyxJQUFJLEdBQVYsSUFBaUIsR0FBbEM7RUFDQSxJQUFPTyxHQUFQLEdBQXNCSixXQUF0QixDQUFPSSxHQUFQO0VBQUEsSUFBWUMsTUFBWixHQUFzQkwsV0FBdEIsQ0FBWUssTUFBWjtFQUVBZCxnREFBUyxDQUFDLFlBQU07SUFDZCxJQUFJYyxNQUFKLEVBQVk7TUFDVlYsUUFBUSxHQUFHVyxXQUFXLENBQUMsWUFBTTtRQUMzQkosV0FBVyxDQUFDLFVBQUNLLFFBQUQsRUFBYztVQUN4QixJQUFJQyxRQUFRLEdBQUdELFFBQVEsR0FBRyxDQUExQjs7VUFDQSxJQUFJQyxRQUFRLElBQUksR0FBaEIsRUFBcUI7WUFDbkJDLGFBQWEsQ0FBQ2QsUUFBRCxDQUFiO1lBQ0EsT0FBTyxHQUFQO1VBQ0Q7O1VBQ0QsT0FBT2EsUUFBUDtRQUNELENBUFUsQ0FBWDtNQVFELENBVHFCLEVBU25CTCxRQVRtQixDQUF0QjtJQVVEOztJQUNERCxXQUFXLENBQUMsQ0FBRCxDQUFYO0lBRUEsT0FBTztNQUFBLE9BQU1PLGFBQWEsQ0FBQ2QsUUFBRCxDQUFuQjtJQUFBLENBQVA7RUFDRCxDQWhCUSxFQWdCTixDQUFDVSxNQUFELENBaEJNLENBQVQ7RUFrQkFkLGdEQUFTLENBQUMsWUFBTTtJQUNkLElBQUlVLFFBQVEsS0FBSyxHQUFqQixFQUFzQkgsV0FBVyxDQUFDLElBQUQsQ0FBWDtFQUN2QixDQUZRLEVBRU4sQ0FBQ0csUUFBRCxDQUZNLENBQVQ7RUFJQSxvQkFDRSw4REFBQyxrREFBRDtJQUF1QixJQUFJLEVBQUVGLElBQTdCO0lBQW1DLE1BQU0sRUFBRU0sTUFBM0M7SUFBQSx3QkFDRSw4REFBQyw0Q0FBRDtNQUFpQixLQUFLLFlBQUtKLFFBQUw7SUFBdEI7TUFBQTtNQUFBO01BQUE7SUFBQSxTQURGLGVBRUUsOERBQUMsMkNBQUQ7TUFBQSx1QkFDRSw4REFBQyx3Q0FBRDtRQUFBLFVBQWNHO01BQWQ7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQURGO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FGRjtFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsU0FERjtBQVFELENBekNEOztHQUFNUjs7S0FBQUE7QUEwQ04sK0RBQWUsbUJBQUFOLGlEQUFBLENBQVdNLEtBQVgsQ0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9hbGVydC9hbGVydC50c3g/YTc4MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVXNlQWxlcnRDb250ZXh0IH0gZnJvbSBcImNvbnRleHQvYWxlcnQvY29udGV4dFwiO1xuaW1wb3J0ICogYXMgU3R5bGVkIGZyb20gXCIuL3N0eWxlXCI7XG5cbmxldCBpbnRlcnZhbDogYW55ID0gbnVsbDtcbnR5cGUgQWxlcnRQcm9wcyA9IHtcbiAgZGVsYXk/OiBudW1iZXI7XG4gIGhpZGRlbkFsZXJ0OiAodGltZTogYm9vbGVhbikgPT4gdm9pZDtcbiAgbXNnOiBzdHJpbmc7XG4gIGhpZGRlbjogYm9vbGVhbjtcbiAgdHlwZTogXCJzdWNlc3NcIiB8IFwiZXJyb3JcIiB8IFwid2FyblwiO1xufTtcblxuXG5jb25zdCBBbGVydDogUmVhY3QuRkM8QWxlcnRQcm9wcz4gPSAoe1xuICBkZWxheSxcbiAgaGlkZGVuQWxlcnQsXG5cbiAgdHlwZSxcbn0pID0+IHtcbiAgY29uc3Qge3N0YXR1c0FsZXJ0fSA9IFVzZUFsZXJ0Q29udGV4dCgpXG4gIGNvbnN0IFtwcm9ncmVzcywgc2V0cHJvZ3Jlc3NdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IGRlbGF5cmVmID0gKGRlbGF5IHx8IDEwMCkgLyAxMDA7XG4gIGNvbnN0IHttc2csIGhpZGRlbn0gPSBzdGF0dXNBbGVydFxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGhpZGRlbikge1xuICAgICAgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIHNldHByb2dyZXNzKChvbGR2YWx1ZSkgPT4ge1xuICAgICAgICAgIGxldCBuZXdWYWx1ZSA9IG9sZHZhbHVlICsgMTtcbiAgICAgICAgICBpZiAobmV3VmFsdWUgPj0gMTAwKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgIHJldHVybiAxMDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBuZXdWYWx1ZTtcbiAgICAgICAgfSk7XG4gICAgICB9LCBkZWxheXJlZik7XG4gICAgfVxuICAgIHNldHByb2dyZXNzKDApO1xuXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICB9LCBbaGlkZGVuXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocHJvZ3Jlc3MgPT09IDEwMCkgaGlkZGVuQWxlcnQodHJ1ZSk7XG4gIH0sIFtwcm9ncmVzc10pO1xuXG4gIHJldHVybiAoXG4gICAgPFN0eWxlZC5Db250YWluZXJBbGVydCB0eXBlPXt0eXBlfSBoaWRkZW49e2hpZGRlbn0+XG4gICAgICA8U3R5bGVkLlByb2dyZXNzIHdpZHRoPXtgJHtwcm9ncmVzc30lYH0gLz5cbiAgICAgIDxTdHlsZWQuQ29udGV4dD5cbiAgICAgICAgPFN0eWxlZC5UZXh0Pnttc2d9PC9TdHlsZWQuVGV4dD5cbiAgICAgIDwvU3R5bGVkLkNvbnRleHQ+XG4gICAgPC9TdHlsZWQuQ29udGFpbmVyQWxlcnQ+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhBbGVydCk7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlVzZUFsZXJ0Q29udGV4dCIsIlN0eWxlZCIsImludGVydmFsIiwiQWxlcnQiLCJkZWxheSIsImhpZGRlbkFsZXJ0IiwidHlwZSIsInN0YXR1c0FsZXJ0IiwicHJvZ3Jlc3MiLCJzZXRwcm9ncmVzcyIsImRlbGF5cmVmIiwibXNnIiwiaGlkZGVuIiwic2V0SW50ZXJ2YWwiLCJvbGR2YWx1ZSIsIm5ld1ZhbHVlIiwiY2xlYXJJbnRlcnZhbCIsIm1lbW8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/alert/alert.tsx\n"));

/***/ })

});