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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AlertContext\": function() { return /* binding */ AlertContext; },\n/* harmony export */   \"AlertProvider\": function() { return /* binding */ AlertProvider; },\n/* harmony export */   \"UseAlertContext\": function() { return /* binding */ UseAlertContext; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/home/juliofreitas/\\xC1rea de Trabalho/glucose/src/context/alert/context.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\nvar interval = null;\nvar AlertContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({\n  statusAlert: {\n    msg: \"\",\n    hidden: false,\n    type: \"warn\"\n  },\n  setStatusAlert: function setStatusAlert() {},\n  hiddenAlert: function hiddenAlert() {}\n});\nAlertContext.displayName = \"alert-context\";\nvar AlertProvider = function AlertProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    msg: \"\",\n    hidden: false,\n    type: \"warn\"\n  }),\n      statusAlert = _useState[0],\n      setStatusAlert = _useState[1];\n\n  var delay = 1000;\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n      progress = _useState2[0],\n      setprogress = _useState2[1];\n\n  var delayref = (delay || 100) / 100;\n  var msg = statusAlert.msg,\n      hidden = statusAlert.hidden;\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (hidden) {\n      interval = setInterval(function () {\n        setprogress(function (oldvalue) {\n          var newValue = oldvalue + 1;\n\n          if (newValue >= 100) {\n            clearInterval(interval);\n            return 100;\n          }\n\n          return newValue;\n        });\n      }, delayref);\n    }\n\n    setprogress(0);\n    return function () {\n      return clearInterval(interval);\n    };\n  }, [hidden]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (progress === 100) hiddenAlert(true);\n  }, [progress]);\n  var hiddenAlert = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (status) {\n    return setStatusAlert({\n      msg: \"\",\n      hidden: !status,\n      type: \"warn\"\n    });\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(AlertContext.Provider, {\n    value: {\n      statusAlert: statusAlert,\n      setStatusAlert: setStatusAlert,\n      hiddenAlert: hiddenAlert\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 67,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(AlertProvider, \"JPHKJ/rNgQSF7q5GXoIBdoKbs4A=\");\n\n_c = AlertProvider;\nvar UseAlertContext = function UseAlertContext() {\n  _s2();\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(AlertContext),\n      statusAlert = _useContext.statusAlert,\n      setStatusAlert = _useContext.setStatusAlert,\n      hiddenAlert = _useContext.hiddenAlert;\n\n  var onSetStatusAlert = function onSetStatusAlert(args) {\n    setStatusAlert(args);\n  };\n\n  return {\n    statusAlert: statusAlert,\n    onSetStatusAlert: onSetStatusAlert,\n    hiddenAlert: hiddenAlert\n  };\n};\n\n_s2(UseAlertContext, \"dahAAv1T7gYc3gXUCM6zSbR6GDA=\");\n\n_c2 = UseAlertContext;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"AlertProvider\");\n$RefreshReg$(_c2, \"UseAlertContext\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBUixlQUFRQSxXQUFSO0VBQUEsSUFBcUJJLGNBQXJCLGVBQXFCQSxjQUFyQjtFQUFBLElBQXFDQyxXQUFyQyxlQUFxQ0EsV0FBckM7O0VBRUEsSUFBTWMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxJQUFELEVBQXNCO0lBQzdDaEIsY0FBYyxDQUFDZ0IsSUFBRCxDQUFkO0VBQ0QsQ0FGRDs7RUFNQSxPQUFPO0lBQ0xwQixXQUFXLEVBQVhBLFdBREs7SUFFTG1CLGdCQUFnQixFQUFoQkEsZ0JBRks7SUFHTGQsV0FBVyxFQUFYQTtFQUhLLENBQVA7QUFLRCxDQWRNOztJQUFNYTs7TUFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHQvYWxlcnQvY29udGV4dC50c3g/ODVjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBjcmVhdGVDb250ZXh0LFxuICBTZXRTdGF0ZUFjdGlvbixcbiAgdXNlQ2FsbGJhY2ssXG4gIHVzZUNvbnRleHQsXG4gIHVzZUVmZmVjdCxcbiAgdXNlU3RhdGUsXG59IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQWxlcnRTdGF0ZSB9IGZyb20gXCJ0eXBlcy9hbGVydFwiO1xuXG50eXBlIEFsZXJ0Q29udGV4dFR5cGUgPSB7XG4gIHN0YXR1c0FsZXJ0OiBBbGVydFN0YXRlO1xuICBzZXRTdGF0dXNBbGVydDogUmVhY3QuRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248QWxlcnRTdGF0ZT4+O1xuICBoaWRkZW5BbGVydDogKHRpbWU6IGJvb2xlYW4pID0+IHZvaWQ7XG4gIGRlbGF5PzogbnVtYmVyXG59O1xuXG5sZXQgaW50ZXJ2YWw6IGFueSA9IG51bGw7XG5leHBvcnQgY29uc3QgQWxlcnRDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxBbGVydENvbnRleHRUeXBlPih7XG4gIHN0YXR1c0FsZXJ0OiB7IG1zZzogXCJcIiwgaGlkZGVuOiBmYWxzZSwgdHlwZTogXCJ3YXJuXCIgfSxcbiAgc2V0U3RhdHVzQWxlcnQ6ICgpID0+IHt9LFxuICBoaWRkZW5BbGVydDogKCkgPT4ge30sXG5cbn0pO1xuXG5BbGVydENvbnRleHQuZGlzcGxheU5hbWUgPSBcImFsZXJ0LWNvbnRleHRcIjtcblxuZXhwb3J0IGNvbnN0IEFsZXJ0UHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfSkgPT4ge1xuICBjb25zdCBbc3RhdHVzQWxlcnQsIHNldFN0YXR1c0FsZXJ0XSA9IHVzZVN0YXRlPEFsZXJ0U3RhdGU+KHtcbiAgICBtc2c6IFwiXCIsXG4gICAgaGlkZGVuOiBmYWxzZSxcbiAgICB0eXBlOiBcIndhcm5cIixcbiAgfSk7XG4gIGNvbnN0IGRlbGF5ID0gMTAwMFxuXG4gIGNvbnN0IFtwcm9ncmVzcywgc2V0cHJvZ3Jlc3NdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IGRlbGF5cmVmID0gKGRlbGF5IHx8IDEwMCkgLyAxMDA7XG4gIGNvbnN0IHttc2csIGhpZGRlbn0gPSBzdGF0dXNBbGVydFxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGhpZGRlbikge1xuICAgICAgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIHNldHByb2dyZXNzKChvbGR2YWx1ZSkgPT4ge1xuICAgICAgICAgIGxldCBuZXdWYWx1ZSA9IG9sZHZhbHVlICsgMTtcbiAgICAgICAgICBpZiAobmV3VmFsdWUgPj0gMTAwKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgIHJldHVybiAxMDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBuZXdWYWx1ZTtcbiAgICAgICAgfSk7XG4gICAgICB9LCBkZWxheXJlZik7XG4gICAgfVxuICAgIHNldHByb2dyZXNzKDApO1xuXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICB9LCBbaGlkZGVuXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocHJvZ3Jlc3MgPT09IDEwMCkgaGlkZGVuQWxlcnQodHJ1ZSk7XG4gIH0sIFtwcm9ncmVzc10pO1xuXG4gIGNvbnN0IGhpZGRlbkFsZXJ0ID0gdXNlQ2FsbGJhY2soXG4gICAgKHN0YXR1czogYm9vbGVhbikgPT4gIHNldFN0YXR1c0FsZXJ0KHsgbXNnOiBcIlwiLCBoaWRkZW46ICFzdGF0dXMsIHR5cGU6IFwid2FyblwiIH0pLFxuICAgIFtdXG4gICk7XG4gIHJldHVybiAoXG4gICAgPEFsZXJ0Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBzdGF0dXNBbGVydCwgc2V0U3RhdHVzQWxlcnQsIGhpZGRlbkFsZXJ0IH19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQWxlcnRDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IFVzZUFsZXJ0Q29udGV4dCA9ICgpID0+IHtcbiAgY29uc3QgeyBzdGF0dXNBbGVydCwgc2V0U3RhdHVzQWxlcnQsIGhpZGRlbkFsZXJ0IH0gPSB1c2VDb250ZXh0KEFsZXJ0Q29udGV4dCk7XG5cbiAgY29uc3Qgb25TZXRTdGF0dXNBbGVydCA9IChhcmdzOiBBbGVydFN0YXRlKSA9PiB7XG4gICAgc2V0U3RhdHVzQWxlcnQoYXJncyk7XG4gIH07XG5cblxuXG4gIHJldHVybiB7XG4gICAgc3RhdHVzQWxlcnQsXG4gICAgb25TZXRTdGF0dXNBbGVydCxcbiAgICBoaWRkZW5BbGVydFxuICB9O1xufTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlQ2FsbGJhY2siLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJpbnRlcnZhbCIsIkFsZXJ0Q29udGV4dCIsInN0YXR1c0FsZXJ0IiwibXNnIiwiaGlkZGVuIiwidHlwZSIsInNldFN0YXR1c0FsZXJ0IiwiaGlkZGVuQWxlcnQiLCJkaXNwbGF5TmFtZSIsIkFsZXJ0UHJvdmlkZXIiLCJjaGlsZHJlbiIsImRlbGF5IiwicHJvZ3Jlc3MiLCJzZXRwcm9ncmVzcyIsImRlbGF5cmVmIiwic2V0SW50ZXJ2YWwiLCJvbGR2YWx1ZSIsIm5ld1ZhbHVlIiwiY2xlYXJJbnRlcnZhbCIsInN0YXR1cyIsIlVzZUFsZXJ0Q29udGV4dCIsIm9uU2V0U3RhdHVzQWxlcnQiLCJhcmdzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/context/alert/context.tsx\n"));

/***/ })

});