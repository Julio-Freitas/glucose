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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AlertContext\": function() { return /* binding */ AlertContext; },\n/* harmony export */   \"AlertProvider\": function() { return /* binding */ AlertProvider; },\n/* harmony export */   \"UseAlertContext\": function() { return /* binding */ UseAlertContext; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/home/juliofreitas/\\xC1rea de Trabalho/glucose/src/context/alert/context.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\nvar interval = null;\nvar AlertContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({\n  statusAlert: {\n    msg: \"\",\n    hidden: false,\n    type: \"warn\"\n  },\n  setStatusAlert: function setStatusAlert() {},\n  hiddenAlert: function hiddenAlert() {},\n  progress: 0\n});\nAlertContext.displayName = \"alert-context\";\nvar AlertProvider = function AlertProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    msg: \"\",\n    hidden: false,\n    type: \"warn\"\n  }),\n      statusAlert = _useState[0],\n      setStatusAlert = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n      progress = _useState2[0],\n      setprogress = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(100),\n      delay = _useState3[0],\n      setDelay = _useState3[1];\n\n  var delayref = (delay || 100) / 100;\n  var hidden = statusAlert.hidden;\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (hidden) {\n      interval = setInterval(function () {\n        setprogress(function (oldvalue) {\n          var newValue = oldvalue + 1;\n\n          if (newValue >= 100) {\n            clearInterval(interval);\n            return 100;\n          }\n\n          return newValue;\n        });\n      }, delayref);\n    }\n\n    setprogress(0);\n    return function () {\n      return clearInterval(interval);\n    };\n  }, [hidden]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (progress === 100) hiddenAlert(true);\n  }, [progress]);\n  var hiddenAlert = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (status) {\n    return setStatusAlert({\n      msg: \"\",\n      hidden: !status,\n      type: \"warn\"\n    });\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(AlertContext.Provider, {\n    value: {\n      statusAlert: statusAlert,\n      setStatusAlert: setStatusAlert,\n      hiddenAlert: hiddenAlert,\n      progress: progress,\n      setDelay: setDelay\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 71,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(AlertProvider, \"4CsmOchLGnbNP8+PjMg77JPK1dk=\");\n\n_c = AlertProvider;\nvar UseAlertContext = function UseAlertContext() {\n  _s2();\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(AlertContext),\n      statusAlert = _useContext.statusAlert,\n      setStatusAlert = _useContext.setStatusAlert,\n      hiddenAlert = _useContext.hiddenAlert,\n      progress = _useContext.progress,\n      setDelay = _useContext.setDelay;\n\n  var onSetStatusAlert = function onSetStatusAlert(args) {\n    setStatusAlert(args);\n  };\n\n  return {\n    statusAlert: statusAlert,\n    onSetStatusAlert: onSetStatusAlert,\n    hiddenAlert: hiddenAlert,\n    progress: progress,\n    setDelay: setDelay\n  };\n};\n\n_s2(UseAlertContext, \"N5VmtyE+7ajysrjHeBRA3jx3auA=\");\n\n_c2 = UseAlertContext;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"AlertProvider\");\n$RefreshReg$(_c2, \"UseAlertContext\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9hbGVydC9jb250ZXh0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFrQkEsSUFBSUssUUFBYSxHQUFHLElBQXBCO0FBQ08sSUFBTUMsWUFBWSxnQkFBR04sb0RBQWEsQ0FBbUI7RUFDMURPLFdBQVcsRUFBRTtJQUFFQyxHQUFHLEVBQUUsRUFBUDtJQUFXQyxNQUFNLEVBQUUsS0FBbkI7SUFBMEJDLElBQUksRUFBRTtFQUFoQyxDQUQ2QztFQUUxREMsY0FBYyxFQUFFLDBCQUFNLENBQUUsQ0FGa0M7RUFHMURDLFdBQVcsRUFBRSx1QkFBTSxDQUFFLENBSHFDO0VBSTFEQyxRQUFRLEVBQUU7QUFKZ0QsQ0FBbkIsQ0FBbEM7QUFRUFAsWUFBWSxDQUFDUSxXQUFiLEdBQTJCLGVBQTNCO0FBRU8sSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixPQUFpRDtFQUFBOztFQUFBLElBQTlDQyxRQUE4QyxRQUE5Q0EsUUFBOEM7O0VBQzVFLGdCQUFzQ1osK0NBQVEsQ0FBYTtJQUN6REksR0FBRyxFQUFFLEVBRG9EO0lBRXpEQyxNQUFNLEVBQUUsS0FGaUQ7SUFHekRDLElBQUksRUFBRTtFQUhtRCxDQUFiLENBQTlDO0VBQUEsSUFBT0gsV0FBUDtFQUFBLElBQW9CSSxjQUFwQjs7RUFPQSxpQkFBZ0NQLCtDQUFRLENBQUMsQ0FBRCxDQUF4QztFQUFBLElBQU9TLFFBQVA7RUFBQSxJQUFpQkksV0FBakI7O0VBQ0EsaUJBQTBCYiwrQ0FBUSxDQUFDLEdBQUQsQ0FBbEM7RUFBQSxJQUFPYyxLQUFQO0VBQUEsSUFBY0MsUUFBZDs7RUFDQSxJQUFNQyxRQUFRLEdBQUcsQ0FBQ0YsS0FBSyxJQUFJLEdBQVYsSUFBaUIsR0FBbEM7RUFDQSxJQUFRVCxNQUFSLEdBQW1CRixXQUFuQixDQUFRRSxNQUFSO0VBRUFOLGdEQUFTLENBQUMsWUFBTTtJQUNkLElBQUlNLE1BQUosRUFBWTtNQUNWSixRQUFRLEdBQUdnQixXQUFXLENBQUMsWUFBTTtRQUMzQkosV0FBVyxDQUFDLFVBQUNLLFFBQUQsRUFBYztVQUN4QixJQUFJQyxRQUFRLEdBQUdELFFBQVEsR0FBRyxDQUExQjs7VUFDQSxJQUFJQyxRQUFRLElBQUksR0FBaEIsRUFBcUI7WUFDbkJDLGFBQWEsQ0FBQ25CLFFBQUQsQ0FBYjtZQUNBLE9BQU8sR0FBUDtVQUNEOztVQUNELE9BQU9rQixRQUFQO1FBQ0QsQ0FQVSxDQUFYO01BUUQsQ0FUcUIsRUFTbkJILFFBVG1CLENBQXRCO0lBVUQ7O0lBQ0RILFdBQVcsQ0FBQyxDQUFELENBQVg7SUFFQSxPQUFPO01BQUEsT0FBTU8sYUFBYSxDQUFDbkIsUUFBRCxDQUFuQjtJQUFBLENBQVA7RUFDRCxDQWhCUSxFQWdCTixDQUFDSSxNQUFELENBaEJNLENBQVQ7RUFrQkFOLGdEQUFTLENBQUMsWUFBTTtJQUNkLElBQUlVLFFBQVEsS0FBSyxHQUFqQixFQUFzQkQsV0FBVyxDQUFDLElBQUQsQ0FBWDtFQUN2QixDQUZRLEVBRU4sQ0FBQ0MsUUFBRCxDQUZNLENBQVQ7RUFJQSxJQUFNRCxXQUFXLEdBQUdYLGtEQUFXLENBQzdCLFVBQUN3QixNQUFEO0lBQUEsT0FDRWQsY0FBYyxDQUFDO01BQUVILEdBQUcsRUFBRSxFQUFQO01BQVdDLE1BQU0sRUFBRSxDQUFDZ0IsTUFBcEI7TUFBNEJmLElBQUksRUFBRTtJQUFsQyxDQUFELENBRGhCO0VBQUEsQ0FENkIsRUFHN0IsRUFINkIsQ0FBL0I7RUFLQSxvQkFDRSw4REFBQyxZQUFELENBQWMsUUFBZDtJQUF1QixLQUFLLEVBQUU7TUFBRUgsV0FBVyxFQUFYQSxXQUFGO01BQWVJLGNBQWMsRUFBZEEsY0FBZjtNQUErQkMsV0FBVyxFQUFYQSxXQUEvQjtNQUE0Q0MsUUFBUSxFQUFSQSxRQUE1QztNQUFxRE0sUUFBUSxFQUFSQTtJQUFyRCxDQUE5QjtJQUFBLFVBQ0dIO0VBREg7SUFBQTtJQUFBO0lBQUE7RUFBQSxTQURGO0FBS0QsQ0E3Q007O0dBQU1EOztLQUFBQTtBQStDTixJQUFNVyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07RUFBQTs7RUFDbkMsa0JBQXlFeEIsaURBQVUsQ0FBQ0ksWUFBRCxDQUFuRjtFQUFBLElBQVFDLFdBQVIsZUFBUUEsV0FBUjtFQUFBLElBQXFCSSxjQUFyQixlQUFxQkEsY0FBckI7RUFBQSxJQUFxQ0MsV0FBckMsZUFBcUNBLFdBQXJDO0VBQUEsSUFBa0RDLFFBQWxELGVBQWtEQSxRQUFsRDtFQUFBLElBQTRETSxRQUE1RCxlQUE0REEsUUFBNUQ7O0VBRUEsSUFBTVEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxJQUFELEVBQXNCO0lBQzdDakIsY0FBYyxDQUFDaUIsSUFBRCxDQUFkO0VBQ0QsQ0FGRDs7RUFJQSxPQUFPO0lBQ0xyQixXQUFXLEVBQVhBLFdBREs7SUFFTG9CLGdCQUFnQixFQUFoQkEsZ0JBRks7SUFHTGYsV0FBVyxFQUFYQSxXQUhLO0lBSUxDLFFBQVEsRUFBUkEsUUFKSztJQUtMTSxRQUFRLEVBQVJBO0VBTEssQ0FBUDtBQU9ELENBZE07O0lBQU1POztNQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29udGV4dC9hbGVydC9jb250ZXh0LnRzeD84NWM5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGNyZWF0ZUNvbnRleHQsXG4gIFNldFN0YXRlQWN0aW9uLFxuICB1c2VDYWxsYmFjayxcbiAgdXNlQ29udGV4dCxcbiAgdXNlRWZmZWN0LFxuICB1c2VTdGF0ZSxcbn0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBbGVydFN0YXRlIH0gZnJvbSBcInR5cGVzL2FsZXJ0XCI7XG5cbnR5cGUgQWxlcnRDb250ZXh0VHlwZSA9IHtcbiAgc3RhdHVzQWxlcnQ6IEFsZXJ0U3RhdGU7XG4gIHNldFN0YXR1c0FsZXJ0OiBSZWFjdC5EaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxBbGVydFN0YXRlPj47XG4gIGhpZGRlbkFsZXJ0OiAodGltZTogYm9vbGVhbikgPT4gdm9pZDtcbiAgZGVsYXk/OiBudW1iZXI7XG4gIHByb2dyZXNzOiAgbnVtYmVyXG59O1xuXG5sZXQgaW50ZXJ2YWw6IGFueSA9IG51bGw7XG5leHBvcnQgY29uc3QgQWxlcnRDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxBbGVydENvbnRleHRUeXBlPih7XG4gIHN0YXR1c0FsZXJ0OiB7IG1zZzogXCJcIiwgaGlkZGVuOiBmYWxzZSwgdHlwZTogXCJ3YXJuXCIgfSxcbiAgc2V0U3RhdHVzQWxlcnQ6ICgpID0+IHt9LFxuICBoaWRkZW5BbGVydDogKCkgPT4ge30sXG4gIHByb2dyZXNzOiAwLFxuXG59KTtcblxuQWxlcnRDb250ZXh0LmRpc3BsYXlOYW1lID0gXCJhbGVydC1jb250ZXh0XCI7XG5cbmV4cG9ydCBjb25zdCBBbGVydFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0pID0+IHtcbiAgY29uc3QgW3N0YXR1c0FsZXJ0LCBzZXRTdGF0dXNBbGVydF0gPSB1c2VTdGF0ZTxBbGVydFN0YXRlPih7XG4gICAgbXNnOiBcIlwiLFxuICAgIGhpZGRlbjogZmFsc2UsXG4gICAgdHlwZTogXCJ3YXJuXCIsXG4gIH0pO1xuXG5cbiAgY29uc3QgW3Byb2dyZXNzLCBzZXRwcm9ncmVzc10gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2RlbGF5LCBzZXREZWxheV0gPSB1c2VTdGF0ZSgxMDApO1xuICBjb25zdCBkZWxheXJlZiA9IChkZWxheSB8fCAxMDApIC8gMTAwO1xuICBjb25zdCB7IGhpZGRlbiB9ID0gc3RhdHVzQWxlcnQ7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaGlkZGVuKSB7XG4gICAgICBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgc2V0cHJvZ3Jlc3MoKG9sZHZhbHVlKSA9PiB7XG4gICAgICAgICAgbGV0IG5ld1ZhbHVlID0gb2xkdmFsdWUgKyAxO1xuICAgICAgICAgIGlmIChuZXdWYWx1ZSA+PSAxMDApIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgcmV0dXJuIDEwMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG5ld1ZhbHVlO1xuICAgICAgICB9KTtcbiAgICAgIH0sIGRlbGF5cmVmKTtcbiAgICB9XG4gICAgc2V0cHJvZ3Jlc3MoMCk7XG5cbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gIH0sIFtoaWRkZW5dKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChwcm9ncmVzcyA9PT0gMTAwKSBoaWRkZW5BbGVydCh0cnVlKTtcbiAgfSwgW3Byb2dyZXNzXSk7XG5cbiAgY29uc3QgaGlkZGVuQWxlcnQgPSB1c2VDYWxsYmFjayhcbiAgICAoc3RhdHVzOiBib29sZWFuKSA9PlxuICAgICAgc2V0U3RhdHVzQWxlcnQoeyBtc2c6IFwiXCIsIGhpZGRlbjogIXN0YXR1cywgdHlwZTogXCJ3YXJuXCIgfSksXG4gICAgW11cbiAgKTtcbiAgcmV0dXJuIChcbiAgICA8QWxlcnRDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHN0YXR1c0FsZXJ0LCBzZXRTdGF0dXNBbGVydCwgaGlkZGVuQWxlcnQsIHByb2dyZXNzLHNldERlbGF5IH19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQWxlcnRDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IFVzZUFsZXJ0Q29udGV4dCA9ICgpID0+IHtcbiAgY29uc3QgeyBzdGF0dXNBbGVydCwgc2V0U3RhdHVzQWxlcnQsIGhpZGRlbkFsZXJ0LCBwcm9ncmVzcywgc2V0RGVsYXkgfSA9IHVzZUNvbnRleHQoQWxlcnRDb250ZXh0KTtcblxuICBjb25zdCBvblNldFN0YXR1c0FsZXJ0ID0gKGFyZ3M6IEFsZXJ0U3RhdGUpID0+IHtcbiAgICBzZXRTdGF0dXNBbGVydChhcmdzKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHN0YXR1c0FsZXJ0LFxuICAgIG9uU2V0U3RhdHVzQWxlcnQsXG4gICAgaGlkZGVuQWxlcnQsXG4gICAgcHJvZ3Jlc3MsXG4gICAgc2V0RGVsYXlcbiAgfTtcbn07XG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNhbGxiYWNrIiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiaW50ZXJ2YWwiLCJBbGVydENvbnRleHQiLCJzdGF0dXNBbGVydCIsIm1zZyIsImhpZGRlbiIsInR5cGUiLCJzZXRTdGF0dXNBbGVydCIsImhpZGRlbkFsZXJ0IiwicHJvZ3Jlc3MiLCJkaXNwbGF5TmFtZSIsIkFsZXJ0UHJvdmlkZXIiLCJjaGlsZHJlbiIsInNldHByb2dyZXNzIiwiZGVsYXkiLCJzZXREZWxheSIsImRlbGF5cmVmIiwic2V0SW50ZXJ2YWwiLCJvbGR2YWx1ZSIsIm5ld1ZhbHVlIiwiY2xlYXJJbnRlcnZhbCIsInN0YXR1cyIsIlVzZUFsZXJ0Q29udGV4dCIsIm9uU2V0U3RhdHVzQWxlcnQiLCJhcmdzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/context/alert/context.tsx\n"));

/***/ })

});