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

/***/ "./src/components/alert/style.ts":
/*!***************************************!*\
  !*** ./src/components/alert/style.ts ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AlertColors\": function() { return /* binding */ AlertColors; },\n/* harmony export */   \"ContainerAlert\": function() { return /* binding */ ContainerAlert; },\n/* harmony export */   \"Context\": function() { return /* binding */ Context; },\n/* harmony export */   \"Progress\": function() { return /* binding */ Progress; },\n/* harmony export */   \"Text\": function() { return /* binding */ Text; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nvar AlertColors;\n\n(function (AlertColors) {\n  AlertColors[\"sucess\"] = \"#63e6be\";\n  AlertColors[\"error\"] = \"#d9480f\";\n  AlertColors[\"warn\"] = \"#f59900\";\n})(AlertColors || (AlertColors = {}));\n\nvar ContainerAlert = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"style__ContainerAlert\",\n  componentId: \"sc-1ogilwv-0\"\n})([\"position:fixed;right:10px;display:flex;padding:10px 15px;border-radius:0 0 5px 5px;max-width:305px;background-color:\", \";box-shadow:0 0.25rem 0.3rem #120125;visibility:\", \";\"], function (_ref) {\n  var type = _ref.type;\n  return AlertColors[type];\n}, function (_ref2) {\n  var hidden = _ref2.hidden;\n  return hidden ? \"visible\" : \"hidden\";\n});\nvar Context = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"style__Context\",\n  componentId: \"sc-1ogilwv-1\"\n})([\"\"]);\nvar Text = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"style__Text\",\n  componentId: \"sc-1ogilwv-2\"\n})([\"color:#fff;font-size:14px;\"]);\nvar Progress = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"style__Progress\",\n  componentId: \"sc-1ogilwv-3\"\n})([\"position:absolute;left:0;top:-5px;width:100%;height:5px;background-color:#ccc;border-radius:5px 5px 0 0;::after{content:\\\"\\\";display:block;background-color:red;height:100%;transition:width ease-in-out 0.05s;width:\", \";}\"], function (_ref3) {\n  var width = _ref3.width;\n  return width || 0;\n});\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9hbGVydC9zdHlsZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUVPLElBQUtDLFdBQVo7O1dBQVlBO0VBQUFBO0VBQUFBO0VBQUFBO0dBQUFBLGdCQUFBQTs7QUFZTCxJQUFNQyxjQUFjLEdBQUdGLHdFQUFIO0VBQUE7RUFBQTtBQUFBLHNMQU9MO0VBQUEsSUFBR0ksSUFBSCxRQUFHQSxJQUFIO0VBQUEsT0FBY0gsV0FBVyxDQUFDRyxJQUFELENBQXpCO0FBQUEsQ0FQSyxFQVNYO0VBQUEsSUFBR0MsTUFBSCxTQUFHQSxNQUFIO0VBQUEsT0FBaUJBLE1BQU0sR0FBRyxTQUFILEdBQWUsUUFBdEM7QUFBQSxDQVRXLENBQXBCO0FBWUEsSUFBTUMsT0FBTyxHQUFHTix3RUFBSDtFQUFBO0VBQUE7QUFBQSxRQUFiO0FBRUEsSUFBTU8sSUFBSSxHQUFHUCx3RUFBSDtFQUFBO0VBQUE7QUFBQSxrQ0FBVjtBQVFBLElBQU1RLFFBQVEsR0FBR1Isd0VBQUg7RUFBQTtFQUFBO0FBQUEsb09BZVI7RUFBQSxJQUFFUyxLQUFGLFNBQUVBLEtBQUY7RUFBQSxPQUFhQSxLQUFLLElBQUksQ0FBdEI7QUFBQSxDQWZRLENBQWQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYWxlcnQvc3R5bGUudHM/ZmUzZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkICBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuZXhwb3J0IGVudW0gQWxlcnRDb2xvcnMge1xuICBzdWNlc3MgPSBcIiM2M2U2YmVcIixcbiAgZXJyb3IgPSBcIiNkOTQ4MGZcIixcbiAgd2FybiA9IFwiI2Y1OTkwMFwiLFxufVxuXG5leHBvcnQgdHlwZSBBbGVydEF0dHIgPSB7XG4gIHR5cGU6IGtleW9mIHR5cGVvZiBBbGVydENvbG9ycztcbn07XG5cblxuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyQWxlcnQgPSBzdHlsZWQuZGl2PEFsZXJ0QXR0cj5gXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDVweCA1cHg7XG4gIG1heC13aWR0aDogMzA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdHlwZSB9KSA9PiBBbGVydENvbG9yc1t0eXBlXX07XG4gIGJveC1zaGFkb3c6IDAgMC4yNXJlbSAwLjNyZW0gIzEyMDEyNTtcbiAgdmlzaWJpbGl0eTogJHsoeyBoaWRkZW4gfSkgPT4gKGhpZGRlbiA/IFwidmlzaWJsZVwiIDogXCJoaWRkZW5cIil9O1xuYDtcblxuZXhwb3J0IGNvbnN0IENvbnRleHQgPSBzdHlsZWQuZGl2YGA7XG5cbmV4cG9ydCBjb25zdCBUZXh0ID0gc3R5bGVkLmRpdmBcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbmA7XG5cbnR5cGUgRGVsYXlQcm9wcyA9IHtcbiAgICB3aWR0aDogc3RyaW5nO1xufTtcbmV4cG9ydCBjb25zdCBQcm9ncmVzcyA9IHN0eWxlZC5kaXY8RGVsYXlQcm9wcz5gXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAtNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xuXG4gIDo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCBlYXNlLWluLW91dCAwLjA1cztcbiAgICB3aWR0aDogJHsoe3dpZHRofSkgPT4gd2lkdGggfHwgMH0gO1xuICB9XG5gO1xuIl0sIm5hbWVzIjpbInN0eWxlZCIsIkFsZXJ0Q29sb3JzIiwiQ29udGFpbmVyQWxlcnQiLCJkaXYiLCJ0eXBlIiwiaGlkZGVuIiwiQ29udGV4dCIsIlRleHQiLCJQcm9ncmVzcyIsIndpZHRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/alert/style.ts\n"));

/***/ })

});