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

/***/ "./src/components/list/list.tsx":
/*!**************************************!*\
  !*** ./src/components/list/list.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./src/components/list/styles.ts\");\n/* harmony import */ var utils_formartDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/formartDate */ \"./src/utils/formartDate.ts\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var context_list_contextList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! context/list/contextList */ \"./src/context/list/contextList.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/home/juliofreitas/\\xC1rea de Trabalho/glucose/src/components/list/list.tsx\",\n    _this = undefined;\n\n\n\n\n\n\n\n\nvar List = function List(_ref) {\n  var _ref$newItem = _ref.newItem,\n      newItem = _ref$newItem === void 0 ? false : _ref$newItem;\n\n  var _UseListGlucoseContex = (0,context_list_contextList__WEBPACK_IMPORTED_MODULE_3__.UseListGlucoseContext)(),\n      listItem = _UseListGlucoseContex.listItem,\n      removeItemGLucose = _UseListGlucoseContex.removeItemGLucose,\n      editiItemGLucose = _UseListGlucoseContex.editiItemGLucose;\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Ul, {\n    children: (listItem === null || listItem === void 0 ? void 0 : listItem.length) > 0 && listItem.filter(function (item) {\n      return item === null || item === void 0 ? void 0 : item.id;\n    }).map(function (item) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Li, {\n        newItem: newItem === item.id,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.TextSpan, {\n          children: (0,utils_formartDate__WEBPACK_IMPORTED_MODULE_2__.formatDateTo)({\n            lang: \"pt-br\",\n            dateString: item.date || \"\"\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 15\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.TextSpan, {\n          children: item.time\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 15\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.TextSpan, {\n          children: item.glucose\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 15\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.TextSpan, {\n          children: item.correction\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 15\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.TextSpan, {\n          children: item.pressure\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 15\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.GroupActions, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaTrash, {\n            onClick: function onClick() {\n              return item.id && removeItemGLucose(item.id);\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 30,\n            columnNumber: 17\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaEdit, {\n            onClick: function onClick() {\n              return editiItemGLucose(item);\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 17\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 15\n        }, _this)]\n      }, item === null || item === void 0 ? void 0 : item.id, true, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 13\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = List;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(List));\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"List\");\n$RefreshReg$(_c2, \"%default%\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9saXN0L2xpc3QudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7OztBQUdBLElBQU1NLElBQXdCLEdBQUcsU0FBM0JBLElBQTJCLE9BQXlCO0VBQUEsd0JBQXJCQyxPQUFxQjtFQUFBLElBQXJCQSxPQUFxQiw2QkFBWixLQUFZOztFQUN4RCw0QkFBdURGLCtFQUFxQixFQUE1RTtFQUFBLElBQU9HLFFBQVAseUJBQU9BLFFBQVA7RUFBQSxJQUFnQkMsaUJBQWhCLHlCQUFnQkEsaUJBQWhCO0VBQUEsSUFBbUNDLGdCQUFuQyx5QkFBbUNBLGdCQUFuQzs7RUFFQSxvQkFDRSw4REFBQyx1Q0FBRDtJQUFBLFVBQ0csQ0FBQUYsUUFBUSxTQUFSLElBQUFBLFFBQVEsV0FBUixZQUFBQSxRQUFRLENBQUVHLE1BQVYsSUFBbUIsQ0FBbkIsSUFDQ0gsUUFBUSxDQUNMSSxNQURILENBQ1UsVUFBQ0MsSUFBRDtNQUFBLE9BQVVBLElBQVYsYUFBVUEsSUFBVix1QkFBVUEsSUFBSSxDQUFFQyxFQUFoQjtJQUFBLENBRFYsRUFFR0MsR0FGSCxDQUVPLFVBQUNGLElBQUQ7TUFBQSxvQkFDSCw4REFBQyx1Q0FBRDtRQUF5QixPQUFPLEVBQUVOLE9BQU8sS0FBS00sSUFBSSxDQUFDQyxFQUFuRDtRQUFBLHdCQUNFLDhEQUFDLDZDQUFEO1VBQUEsVUFDR1osK0RBQVksQ0FBQztZQUNaYyxJQUFJLEVBQUUsT0FETTtZQUVaQyxVQUFVLEVBQUVKLElBQUksQ0FBQ0ssSUFBTCxJQUFhO1VBRmIsQ0FBRDtRQURmO1VBQUE7VUFBQTtVQUFBO1FBQUEsU0FERixlQU9FLDhEQUFDLDZDQUFEO1VBQUEsVUFBaUJMLElBQUksQ0FBQ007UUFBdEI7VUFBQTtVQUFBO1VBQUE7UUFBQSxTQVBGLGVBUUUsOERBQUMsNkNBQUQ7VUFBQSxVQUFpQk4sSUFBSSxDQUFDTztRQUF0QjtVQUFBO1VBQUE7VUFBQTtRQUFBLFNBUkYsZUFTRSw4REFBQyw2Q0FBRDtVQUFBLFVBQWlCUCxJQUFJLENBQUNRO1FBQXRCO1VBQUE7VUFBQTtVQUFBO1FBQUEsU0FURixlQVVFLDhEQUFDLDZDQUFEO1VBQUEsVUFBaUJSLElBQUksQ0FBQ1M7UUFBdEI7VUFBQTtVQUFBO1VBQUE7UUFBQSxTQVZGLGVBV0UsOERBQUMsaURBQUQ7VUFBQSx3QkFDRSw4REFBQyxtREFBRDtZQUNFLE9BQU8sRUFBRTtjQUFBLE9BQ1BULElBQUksQ0FBQ0MsRUFBTCxJQUFXTCxpQkFBaUIsQ0FBQ0ksSUFBSSxDQUFDQyxFQUFOLENBRHJCO1lBQUE7VUFEWDtZQUFBO1lBQUE7WUFBQTtVQUFBLFNBREYsZUFNRSw4REFBQyxrREFBRDtZQUFRLE9BQU8sRUFBRTtjQUFBLE9BQU1KLGdCQUFnQixDQUFDRyxJQUFELENBQXRCO1lBQUE7VUFBakI7WUFBQTtZQUFBO1lBQUE7VUFBQSxTQU5GO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQSxTQVhGO01BQUEsR0FBZUEsSUFBZixhQUFlQSxJQUFmLHVCQUFlQSxJQUFJLENBQUVDLEVBQXJCO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FERztJQUFBLENBRlA7RUFGSjtJQUFBO0lBQUE7SUFBQTtFQUFBLFNBREY7QUE2QkQsQ0FoQ0Q7O0tBQU1SO0FBa0NOLCtEQUFlLG1CQUFBTixpREFBQSxDQUFXTSxJQUFYLENBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbGlzdC9saXN0LnRzeD81YWZhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIFN0eWxlIGZyb20gXCIuL3N0eWxlc1wiO1xuaW1wb3J0IHsgTGlzdEl0ZW0gfSBmcm9tIFwidHlwZXMvbGlzdFwiO1xuaW1wb3J0IHsgZm9ybWF0RGF0ZVRvIH0gZnJvbSBcInV0aWxzL2Zvcm1hcnREYXRlXCI7XG5pbXBvcnQgeyBGYVRyYXNoLCBGYUVkaXQgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmltcG9ydCB7IFVzZUxpc3RHbHVjb3NlQ29udGV4dCB9IGZyb20gXCJjb250ZXh0L2xpc3QvY29udGV4dExpc3RcIjtcblxuXG5jb25zdCBMaXN0OiBSZWFjdC5GQzxMaXN0SXRlbT4gPSAoeyAgbmV3SXRlbT0gZmFsc2UgfSkgPT4ge1xuICBjb25zdCB7bGlzdEl0ZW0scmVtb3ZlSXRlbUdMdWNvc2UsIGVkaXRpSXRlbUdMdWNvc2V9ID0gVXNlTGlzdEdsdWNvc2VDb250ZXh0KClcblxuICByZXR1cm4gKFxuICAgIDxTdHlsZS5VbD5cbiAgICAgIHtsaXN0SXRlbT8ubGVuZ3RoID4gMCAmJlxuICAgICAgICBsaXN0SXRlbVxuICAgICAgICAgIC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0/LmlkKVxuICAgICAgICAgIC5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgIDxTdHlsZS5MaSBrZXk9e2l0ZW0/LmlkfSBuZXdJdGVtPXtuZXdJdGVtID09PSBpdGVtLmlkfT5cbiAgICAgICAgICAgICAgPFN0eWxlLlRleHRTcGFuPlxuICAgICAgICAgICAgICAgIHtmb3JtYXREYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgbGFuZzogXCJwdC1iclwiLFxuICAgICAgICAgICAgICAgICAgZGF0ZVN0cmluZzogaXRlbS5kYXRlIHx8IFwiXCIsXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvU3R5bGUuVGV4dFNwYW4+XG4gICAgICAgICAgICAgIDxTdHlsZS5UZXh0U3Bhbj57aXRlbS50aW1lfTwvU3R5bGUuVGV4dFNwYW4+XG4gICAgICAgICAgICAgIDxTdHlsZS5UZXh0U3Bhbj57aXRlbS5nbHVjb3NlfTwvU3R5bGUuVGV4dFNwYW4+XG4gICAgICAgICAgICAgIDxTdHlsZS5UZXh0U3Bhbj57aXRlbS5jb3JyZWN0aW9ufTwvU3R5bGUuVGV4dFNwYW4+XG4gICAgICAgICAgICAgIDxTdHlsZS5UZXh0U3Bhbj57aXRlbS5wcmVzc3VyZX08L1N0eWxlLlRleHRTcGFuPlxuICAgICAgICAgICAgICA8U3R5bGUuR3JvdXBBY3Rpb25zPlxuICAgICAgICAgICAgICAgIDxGYVRyYXNoXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICBpdGVtLmlkICYmIHJlbW92ZUl0ZW1HTHVjb3NlKGl0ZW0uaWQpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8RmFFZGl0IG9uQ2xpY2s9eygpID0+IGVkaXRpSXRlbUdMdWNvc2UoaXRlbSl9IC8+XG4gICAgICAgICAgICAgIDwvU3R5bGUuR3JvdXBBY3Rpb25zPlxuICAgICAgICAgICAgPC9TdHlsZS5MaT5cbiAgICAgICAgICApKX1cbiAgICA8L1N0eWxlLlVsPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhMaXN0KTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlN0eWxlIiwiZm9ybWF0RGF0ZVRvIiwiRmFUcmFzaCIsIkZhRWRpdCIsIlVzZUxpc3RHbHVjb3NlQ29udGV4dCIsIkxpc3QiLCJuZXdJdGVtIiwibGlzdEl0ZW0iLCJyZW1vdmVJdGVtR0x1Y29zZSIsImVkaXRpSXRlbUdMdWNvc2UiLCJsZW5ndGgiLCJmaWx0ZXIiLCJpdGVtIiwiaWQiLCJtYXAiLCJsYW5nIiwiZGF0ZVN0cmluZyIsImRhdGUiLCJ0aW1lIiwiZ2x1Y29zZSIsImNvcnJlY3Rpb24iLCJwcmVzc3VyZSIsIm1lbW8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/list/list.tsx\n"));

/***/ })

});