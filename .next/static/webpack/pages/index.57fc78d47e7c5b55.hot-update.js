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

/***/ "./src/styles/styles.ts":
/*!******************************!*\
  !*** ./src/styles/styles.ts ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Container\": function() { return /* binding */ Container; },\n/* harmony export */   \"Form\": function() { return /* binding */ Form; },\n/* harmony export */   \"ThemeButton\": function() { return /* binding */ ThemeButton; },\n/* harmony export */   \"WrapperButtons\": function() { return /* binding */ WrapperButtons; }\n/* harmony export */ });\n/* harmony import */ var components_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/button */ \"./src/components/button/index.ts\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].section.withConfig({\n  displayName: \"styles__Container\",\n  componentId: \"sc-1kyq06j-0\"\n})([\"padding:15px 25px;max-width:980px;margin:0 auto;display:flex;flex-direction:column;gap:20px;> button{font-size:12px;border-radius:6px;align-self:flex-end;}\"]);\nvar Form = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].form.withConfig({\n  displayName: \"styles__Form\",\n  componentId: \"sc-1kyq06j-1\"\n})([\"display:flex;flex-wrap:wrap;gap:15px;max-width:100%;margin:0 auto;justify-content:right;\"]);\nvar WrapperButtons = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"styles__WrapperButtons\",\n  componentId: \"sc-1kyq06j-2\"\n})([\"display:flex;align-items:stretch;justify-content:space-between;flex-wrap:wrap;gap:20px;width:100%;@media (max-width:768px){.dropdown,button{min-width:auto;flex:0.5;}}@media (max-width:480px){.dropdown,button{flex:1;width:100%;font-size:12px;font-weight:500;}}@media (max-width:320px){flex-direction:column;}\"]);\nvar ThemeButton = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(components_button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]).withConfig({\n  displayName: \"styles__ThemeButton\",\n  componentId: \"sc-1kyq06j-3\"\n})([\"position:absolute;right:10px;\"]);\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL3N0eWxlcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sSUFBTUUsU0FBUyxHQUFHRCw0RUFBSDtFQUFBO0VBQUE7QUFBQSxtS0FBZjtBQWdCQSxJQUFNRyxJQUFJLEdBQUdILHlFQUFIO0VBQUE7RUFBQTtBQUFBLGdHQUFWO0FBU0EsSUFBTUssY0FBYyxHQUFHTCx3RUFBSDtFQUFBO0VBQUE7QUFBQSwyVEFBcEI7QUErQkEsSUFBTU8sV0FBVyxHQUFHUCw2REFBTSxDQUFDRCx5REFBRCxDQUFUO0VBQUE7RUFBQTtBQUFBLHFDQUFqQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc3R5bGVzL3N0eWxlcy50cz8zMmVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCdXR0b24gZnJvbSBcImNvbXBvbmVudHMvYnV0dG9uXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLnNlY3Rpb25gXG4gIHBhZGRpbmc6IDE1cHggMjVweDtcbiAgbWF4LXdpZHRoOiA5ODBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMjBweDtcblxuXG4gID4gYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgRm9ybSA9IHN0eWxlZC5mb3JtYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMTVweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAganVzdGlmeS1jb250ZW50OiByaWdodDtcbmA7XG5cbmV4cG9ydCBjb25zdCBXcmFwcGVyQnV0dG9ucyA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAyMHB4O1xuICB3aWR0aDogMTAwJTtcblxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC5kcm9wZG93biwgYnV0dG9uIHtcbiAgICAgIG1pbi13aWR0aDogYXV0bztcbiAgICAgIGZsZXg6IDAuNTtcbiAgICB9XG4gIH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAuZHJvcGRvd24sXG4gICAgYnV0dG9uIHtcbiAgICAgIGZsZXg6IDE7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDMyMHB4KSB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBUaGVtZUJ1dHRvbiA9IHN0eWxlZChCdXR0b24pYFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuYFxuIl0sIm5hbWVzIjpbIkJ1dHRvbiIsInN0eWxlZCIsIkNvbnRhaW5lciIsInNlY3Rpb24iLCJGb3JtIiwiZm9ybSIsIldyYXBwZXJCdXR0b25zIiwiZGl2IiwiVGhlbWVCdXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/styles/styles.ts\n"));

/***/ })

});