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

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* harmony import */ var styles_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styles/styles */ \"./src/styles/styles.ts\");\n/* harmony import */ var components_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/button */ \"./src/components/button/index.ts\");\n/* harmony import */ var components_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/input */ \"./src/components/input/index.ts\");\n/* harmony import */ var components_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/list */ \"./src/components/list/index.ts\");\n/* harmony import */ var components_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/table */ \"./src/components/table/index.ts\");\n/* harmony import */ var components_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/modal */ \"./src/components/modal/index.ts\");\n/* harmony import */ var lib_service_glucose__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lib/service/glucose */ \"./src/lib/service/glucose.ts\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var components_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/dropdown */ \"./src/components/dropdown/index.ts\");\n/* harmony import */ var context_list_contextList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! context/list/contextList */ \"./src/context/list/contextList.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__);\n\n\nvar _jsxFileName = \"/home/juliofreitas/\\xC1rea de Trabalho/glucose/src/pages/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Home = function Home() {\n  _s();\n\n  var _UseListGlucoseContex = (0,context_list_contextList__WEBPACK_IMPORTED_MODULE_11__.UseListGlucoseContext)(),\n      addItemGlucose = _UseListGlucoseContex.addItemGlucose,\n      date = _UseListGlucoseContex.date,\n      time = _UseListGlucoseContex.time,\n      glucose = _UseListGlucoseContex.glucose,\n      correction = _UseListGlucoseContex.correction,\n      pressure = _UseListGlucoseContex.pressure,\n      documentId = _UseListGlucoseContex.documentId,\n      newId = _UseListGlucoseContex.newId,\n      setDate = _UseListGlucoseContex.setDate,\n      setTime = _UseListGlucoseContex.setTime,\n      setGlucose = _UseListGlucoseContex.setGlucose,\n      setCorrection = _UseListGlucoseContex.setCorrection,\n      setPressure = _UseListGlucoseContex.setPressure,\n      setDocumentId = _UseListGlucoseContex.setDocumentId,\n      setNewId = _UseListGlucoseContex.setNewId;\n\n  console.log(date);\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      showModal = _useState[0],\n      setShowModal = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n    msg: \"\",\n    hidden: false,\n    type: \"warn\"\n  }),\n      statusAlert = _useState2[0],\n      setStatusAlert = _useState2[1]; // const getAllList = useCallback(\n  //   async () => setListItem(await getAllGlucose()),\n  //   []\n  // );\n\n\n  var filterGlucose = /*#__PURE__*/function () {\n    var _ref = (0,_home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n      var result;\n      return _home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return (0,lib_service_glucose__WEBPACK_IMPORTED_MODULE_9__.glucoseLastThreeDays)();\n\n            case 2:\n              result = _context.sent;\n\n            case 3:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function filterGlucose() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var clearAllFields = function clearAllFields() {\n    setDate(\"\");\n    setTime(\"\");\n    setGlucose(\"\");\n    setCorrection(\"\");\n    setPressure(\"\");\n    setDocumentId(null);\n    setTimeout(function () {\n      return setNewId(\"\");\n    }, 600);\n  };\n\n  var canAddField = function canAddField() {\n    var isFill = !date || !time || !glucose;\n    var monthCurrent = new Date().getMonth() + 1;\n    var monthForm = Number(date === null || date === void 0 ? void 0 : date.split(\"-\")[1]);\n\n    if (isFill) {\n      setStatusAlert({\n        msg: \"Os campo date, hora ou glicemia devem ser preenchidos!\",\n        hidden: true,\n        type: \"warn\"\n      });\n      return false;\n    }\n\n    if (monthForm > monthCurrent) {\n      setStatusAlert({\n        msg: \"Não é possivel lançar datas futuras\",\n        hidden: true,\n        type: \"warn\"\n      });\n      return false;\n    }\n\n    return true;\n  };\n\n  var _handleOnSubmit = /*#__PURE__*/function () {\n    var _ref2 = (0,_home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(event) {\n      var msg, newItem;\n      return _home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              event.preventDefault(); // if (!canAddField()) return;\n\n              msg = documentId ? \"Atualizado com sucesso!\" : \"Adicionado com sucesso!\";\n              newItem = {\n                id: (0,uuid__WEBPACK_IMPORTED_MODULE_13__.v4)(),\n                date: date,\n                time: time,\n                glucose: glucose,\n                correction: correction,\n                pressure: pressure\n              };\n              setNewId(newItem.id);\n              addItemGlucose(newItem); // documentId ? updateGLucose(documentId, newItem) : addGlucose(newItem);\n\n              setStatusAlert({\n                msg: msg,\n                hidden: true,\n                type: \"sucess\"\n              }); // getAllList();\n\n              clearAllFields();\n\n            case 7:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function _handleOnSubmit(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var handleFilter = function handleFilter(value) {// if (value === \"all\") return getAllList();\n    // if (value === \"last-3-days\") return filterGlucose();\n  }; // const _handleDeletedItem = (documentId: string) => {\n  //   deleteGlucose(documentId);\n  //   // getAllList();\n  //   setStatusAlert({\n  //     msg: \"Deletado com sucesso!\",\n  //     hidden: true,\n  //     type: \"sucess\",\n  //   });\n  // };\n\n\n  var _handleEditItem = function _handleEditItem(item) {\n    var correction = item.correction,\n        date = item.date,\n        documentId = item.documentId,\n        glucose = item.glucose,\n        pressure = item.pressure,\n        time = item.time;\n    setDate(date);\n    setTime(time);\n    setGlucose(glucose);\n    setCorrection(correction);\n    setPressure(pressure);\n    setDocumentId(documentId);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(styles_styles__WEBPACK_IMPORTED_MODULE_3__.Container, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(styles_styles__WEBPACK_IMPORTED_MODULE_3__.WrapperButtons, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(components_dropdown__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n        optionSelected: handleFilter,\n        className: \"dropdown\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 162,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(components_button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        type: \"button\",\n        width: \"170px\",\n        height: \"auto\",\n        onClick: function onClick() {\n          return setShowModal(!showModal);\n        },\n        text: \"Consultar Tabela de Glicose\",\n        icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_14__.FaEye, {\n          width: \"50px\",\n          height: \"100px\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 169,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 163,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 161,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(styles_styles__WEBPACK_IMPORTED_MODULE_3__.Form, {\n      action: \"/\",\n      onSubmit: _handleOnSubmit,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(components_input__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        type: \"date\",\n        name: \"date\",\n        placeholder: \"Data\",\n        value: date || \"\",\n        onChange: function onChange(_ref3) {\n          var target = _ref3.target;\n          return setDate(target === null || target === void 0 ? void 0 : target.value);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 174,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(components_input__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        type: \"time\",\n        name: \"time\",\n        placeholder: \"Hora\",\n        value: time || \"\",\n        onChange: function onChange(_ref4) {\n          var target = _ref4.target;\n          return setTime(target === null || target === void 0 ? void 0 : target.value);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 181,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(components_input__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        type: \"text\",\n        name: \"glucose\",\n        placeholder: \"Glicemia\",\n        value: glucose || \"\",\n        onChange: function onChange(_ref5) {\n          var target = _ref5.target;\n          return setGlucose(target === null || target === void 0 ? void 0 : target.value.replace(/\\D/, \"\"));\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 188,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(components_input__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        type: \"text\",\n        name: \"correction\",\n        placeholder: \"corre\\xE7\\xE3o\",\n        value: correction || \"\",\n        onChange: function onChange(_ref6) {\n          var target = _ref6.target;\n          return setCorrection(target === null || target === void 0 ? void 0 : target.value);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 195,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(components_input__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        type: \"text\",\n        name: \"pressure\",\n        placeholder: \"Press\\xE3o\",\n        value: pressure || \"\",\n        onChange: function onChange(_ref7) {\n          var target = _ref7.target;\n          return setPressure(target === null || target === void 0 ? void 0 : target.value.replace(/[A-Z]/gi, \"\"));\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 202,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(styles_styles__WEBPACK_IMPORTED_MODULE_3__.WrapperButtons, {\n        content: \"flex-end\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(components_button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n          type: \"submit\",\n          width: \"170px\",\n          text: documentId ? \"Atualizar\" : \"Salvar\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 212,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(components_button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n          type: \"button\",\n          width: \"170px\",\n          text: \"limpar\",\n          onClick: clearAllFields\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 217,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 211,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 173,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(components_table__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(components_list__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        newItem: newId\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 227,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 226,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(components_modal__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n      statusModal: showModal,\n      onCloseModal: function onCloseModal(status) {\n        return setShowModal(status);\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 230,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 160,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Home, \"WfgVl9BXkah4vPvBKBdbgR6a9L4=\");\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1FBQUE7TUFBQSxTQXRDRjtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FiRixlQWtFRSwrREFBQyx3REFBRDtNQUFBLHVCQUNFLCtEQUFDLHVEQUFEO1FBQU0sT0FBTyxFQUFFbkI7TUFBZjtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBREY7TUFBQTtNQUFBO01BQUE7SUFBQSxTQWxFRixlQXNFRSwrREFBQyx3REFBRDtNQUNFLFdBQVcsRUFBRVUsU0FEZjtNQUVFLFlBQVksRUFBRSxzQkFBQzhCLE1BQUQ7UUFBQSxPQUFZN0IsWUFBWSxDQUFDNkIsTUFBRCxDQUF4QjtNQUFBO0lBRmhCO01BQUE7TUFBQTtNQUFBO0lBQUEsU0F0RUY7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBLFNBREY7QUF1RkQsQ0ExTkQ7O0dBQU1oRDs7S0FBQUE7QUE0Tk4sK0RBQWVBLElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm1FdmVudCwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5pbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCAqIGFzIFN0eWxlcyBmcm9tIFwic3R5bGVzL3N0eWxlc1wiO1xuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCJ0eXBlcy9saXN0XCI7XG5cbmltcG9ydCBCdXR0b24gZnJvbSBcImNvbXBvbmVudHMvYnV0dG9uXCI7XG5pbXBvcnQgSW5wdXQgZnJvbSBcImNvbXBvbmVudHMvaW5wdXRcIjtcbmltcG9ydCBMaXN0IGZyb20gXCJjb21wb25lbnRzL2xpc3RcIjtcbmltcG9ydCBUYWJsZSBmcm9tIFwiY29tcG9uZW50cy90YWJsZVwiO1xuaW1wb3J0IE1vZGFsIGZyb20gXCJjb21wb25lbnRzL21vZGFsXCI7XG5cbmltcG9ydCB7XG4gIGFkZEdsdWNvc2UsXG4gIGdsdWNvc2VMYXN0VGhyZWVEYXlzLFxuICBnZXRBbGxHbHVjb3NlLFxuICBkZWxldGVHbHVjb3NlLFxuICB1cGRhdGVHTHVjb3NlLFxufSBmcm9tIFwibGliL3NlcnZpY2UvZ2x1Y29zZVwiO1xuXG5pbXBvcnQgeyBGYUV5ZSB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuaW1wb3J0IERyb3Bkb3duTWVudSBmcm9tIFwiY29tcG9uZW50cy9kcm9wZG93blwiO1xuaW1wb3J0IEFsZXJ0IGZyb20gXCJjb21wb25lbnRzL2FsZXJ0XCI7XG5pbXBvcnQgeyBBbGVydFN0YXRlIH0gZnJvbSBcInR5cGVzL2FsZXJ0XCI7XG5pbXBvcnQgeyBVc2VMaXN0R2x1Y29zZUNvbnRleHQgfSBmcm9tIFwiY29udGV4dC9saXN0L2NvbnRleHRMaXN0XCI7XG5cblxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBhZGRJdGVtR2x1Y29zZSxcbiAgICBkYXRlLFxuICAgIHRpbWUsXG4gICAgZ2x1Y29zZSxcbiAgICBjb3JyZWN0aW9uLFxuICAgIHByZXNzdXJlLFxuICAgIGRvY3VtZW50SWQsXG4gICAgbmV3SWQsXG4gICAgc2V0RGF0ZSxcbiAgICBzZXRUaW1lLFxuICAgIHNldEdsdWNvc2UsXG4gICAgc2V0Q29ycmVjdGlvbixcbiAgICBzZXRQcmVzc3VyZSxcbiAgICBzZXREb2N1bWVudElkLFxuICAgIHNldE5ld0lkLFxuICB9ID0gVXNlTGlzdEdsdWNvc2VDb250ZXh0KCk7XG5cbiAgY29uc29sZS5sb2coZGF0ZSlcblxuICBjb25zdCBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIGNvbnN0IFtzdGF0dXNBbGVydCwgc2V0U3RhdHVzQWxlcnRdID0gdXNlU3RhdGU8QWxlcnRTdGF0ZT4oe1xuICAgIG1zZzogXCJcIixcbiAgICBoaWRkZW46IGZhbHNlLFxuICAgIHR5cGU6IFwid2FyblwiLFxuICB9KTtcblxuICAvLyBjb25zdCBnZXRBbGxMaXN0ID0gdXNlQ2FsbGJhY2soXG4gIC8vICAgYXN5bmMgKCkgPT4gc2V0TGlzdEl0ZW0oYXdhaXQgZ2V0QWxsR2x1Y29zZSgpKSxcbiAgLy8gICBbXVxuICAvLyApO1xuXG4gIGNvbnN0IGZpbHRlckdsdWNvc2UgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2x1Y29zZUxhc3RUaHJlZURheXMoKTtcbiAgICAvLyBzZXRMaXN0SXRlbShyZXN1bHQpO1xuICB9O1xuXG4gIGNvbnN0IGNsZWFyQWxsRmllbGRzID0gKCkgPT4ge1xuICAgIHNldERhdGUoXCJcIik7XG4gICAgc2V0VGltZShcIlwiKTtcbiAgICBzZXRHbHVjb3NlKFwiXCIpO1xuICAgIHNldENvcnJlY3Rpb24oXCJcIik7XG4gICAgc2V0UHJlc3N1cmUoXCJcIik7XG4gICAgc2V0RG9jdW1lbnRJZChudWxsKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHNldE5ld0lkKFwiXCIpLCA2MDApO1xuICB9O1xuXG4gIGNvbnN0IGNhbkFkZEZpZWxkID0gKCkgPT4ge1xuICAgIGNvbnN0IGlzRmlsbCA9ICFkYXRlIHx8ICF0aW1lIHx8ICFnbHVjb3NlO1xuICAgIGNvbnN0IG1vbnRoQ3VycmVudCA9IG5ldyBEYXRlKCkuZ2V0TW9udGgoKSArIDE7XG4gICAgY29uc3QgbW9udGhGb3JtID0gTnVtYmVyKGRhdGU/LnNwbGl0KFwiLVwiKVsxXSk7XG5cbiAgICBpZiAoaXNGaWxsKSB7XG4gICAgICBzZXRTdGF0dXNBbGVydCh7XG4gICAgICAgIG1zZzogXCJPcyBjYW1wbyBkYXRlLCBob3JhIG91IGdsaWNlbWlhIGRldmVtIHNlciBwcmVlbmNoaWRvcyFcIixcbiAgICAgICAgaGlkZGVuOiB0cnVlLFxuICAgICAgICB0eXBlOiBcIndhcm5cIixcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChtb250aEZvcm0gPiBtb250aEN1cnJlbnQpIHtcbiAgICAgIHNldFN0YXR1c0FsZXJ0KHtcbiAgICAgICAgbXNnOiBcIk7Do28gw6kgcG9zc2l2ZWwgbGFuw6dhciBkYXRhcyBmdXR1cmFzXCIsXG4gICAgICAgIGhpZGRlbjogdHJ1ZSxcbiAgICAgICAgdHlwZTogXCJ3YXJuXCIsXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBfaGFuZGxlT25TdWJtaXQgPSBhc3luYyAoZXZlbnQ6IEZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIC8vIGlmICghY2FuQWRkRmllbGQoKSkgcmV0dXJuO1xuICAgIGNvbnN0IG1zZyA9IGRvY3VtZW50SWRcbiAgICAgID8gXCJBdHVhbGl6YWRvIGNvbSBzdWNlc3NvIVwiXG4gICAgICA6IFwiQWRpY2lvbmFkbyBjb20gc3VjZXNzbyFcIjtcbiAgICBjb25zdCBuZXdJdGVtOiBJdGVtID0ge1xuICAgICAgaWQ6IHV1aWR2NCgpLFxuICAgICAgZGF0ZSxcbiAgICAgIHRpbWUsXG4gICAgICBnbHVjb3NlLFxuICAgICAgY29ycmVjdGlvbixcbiAgICAgIHByZXNzdXJlLFxuICAgIH07XG5cbiAgICBzZXROZXdJZChuZXdJdGVtLmlkIGFzIHN0cmluZyk7XG4gICAgYWRkSXRlbUdsdWNvc2UobmV3SXRlbSk7XG4gICAgLy8gZG9jdW1lbnRJZCA/IHVwZGF0ZUdMdWNvc2UoZG9jdW1lbnRJZCwgbmV3SXRlbSkgOiBhZGRHbHVjb3NlKG5ld0l0ZW0pO1xuXG4gICAgc2V0U3RhdHVzQWxlcnQoe1xuICAgICAgbXNnLFxuICAgICAgaGlkZGVuOiB0cnVlLFxuICAgICAgdHlwZTogXCJzdWNlc3NcIixcbiAgICB9KTtcbiAgICAvLyBnZXRBbGxMaXN0KCk7XG4gICAgY2xlYXJBbGxGaWVsZHMoKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVGaWx0ZXIgPSAodmFsdWU6IHN0cmluZykgPT4ge1xuICAgIC8vIGlmICh2YWx1ZSA9PT0gXCJhbGxcIikgcmV0dXJuIGdldEFsbExpc3QoKTtcbiAgICAvLyBpZiAodmFsdWUgPT09IFwibGFzdC0zLWRheXNcIikgcmV0dXJuIGZpbHRlckdsdWNvc2UoKTtcbiAgfTtcblxuICAvLyBjb25zdCBfaGFuZGxlRGVsZXRlZEl0ZW0gPSAoZG9jdW1lbnRJZDogc3RyaW5nKSA9PiB7XG4gIC8vICAgZGVsZXRlR2x1Y29zZShkb2N1bWVudElkKTtcbiAgLy8gICAvLyBnZXRBbGxMaXN0KCk7XG5cbiAgLy8gICBzZXRTdGF0dXNBbGVydCh7XG4gIC8vICAgICBtc2c6IFwiRGVsZXRhZG8gY29tIHN1Y2Vzc28hXCIsXG4gIC8vICAgICBoaWRkZW46IHRydWUsXG4gIC8vICAgICB0eXBlOiBcInN1Y2Vzc1wiLFxuICAvLyAgIH0pO1xuICAvLyB9O1xuXG4gIGNvbnN0IF9oYW5kbGVFZGl0SXRlbSA9IChpdGVtOiBJdGVtKSA9PiB7XG4gICAgY29uc3QgeyBjb3JyZWN0aW9uLCBkYXRlLCBkb2N1bWVudElkLCBnbHVjb3NlLCBwcmVzc3VyZSwgdGltZSB9ID0gaXRlbTtcblxuICAgIHNldERhdGUoZGF0ZSk7XG4gICAgc2V0VGltZSh0aW1lIGFzIHN0cmluZyk7XG4gICAgc2V0R2x1Y29zZShnbHVjb3NlIGFzIHN0cmluZyk7XG4gICAgc2V0Q29ycmVjdGlvbihjb3JyZWN0aW9uKTtcbiAgICBzZXRQcmVzc3VyZShwcmVzc3VyZSBhcyBzdHJpbmcpO1xuICAgIHNldERvY3VtZW50SWQoZG9jdW1lbnRJZCBhcyBzdHJpbmcpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFN0eWxlcy5Db250YWluZXI+XG4gICAgICA8U3R5bGVzLldyYXBwZXJCdXR0b25zPlxuICAgICAgICA8RHJvcGRvd25NZW51IG9wdGlvblNlbGVjdGVkPXtoYW5kbGVGaWx0ZXJ9IGNsYXNzTmFtZT1cImRyb3Bkb3duXCIgLz5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIHdpZHRoPVwiMTcwcHhcIlxuICAgICAgICAgIGhlaWdodD1cImF1dG9cIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dNb2RhbCghc2hvd01vZGFsKX1cbiAgICAgICAgICB0ZXh0PVwiQ29uc3VsdGFyIFRhYmVsYSBkZSBHbGljb3NlXCJcbiAgICAgICAgICBpY29uPXs8RmFFeWUgd2lkdGg9XCI1MHB4XCIgaGVpZ2h0PVwiMTAwcHhcIiAvPn1cbiAgICAgICAgLz5cbiAgICAgIDwvU3R5bGVzLldyYXBwZXJCdXR0b25zPlxuXG4gICAgICA8U3R5bGVzLkZvcm0gYWN0aW9uPVwiL1wiIG9uU3VibWl0PXtfaGFuZGxlT25TdWJtaXR9PlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICB0eXBlPVwiZGF0ZVwiXG4gICAgICAgICAgbmFtZT1cImRhdGVcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGF0YVwiXG4gICAgICAgICAgdmFsdWU9e2RhdGUgfHwgXCJcIn1cbiAgICAgICAgICBvbkNoYW5nZT17KHsgdGFyZ2V0IH0pID0+IHNldERhdGUodGFyZ2V0Py52YWx1ZSl9XG4gICAgICAgIC8+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0aW1lXCJcbiAgICAgICAgICBuYW1lPVwidGltZVwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJIb3JhXCJcbiAgICAgICAgICB2YWx1ZT17dGltZSB8fCBcIlwifVxuICAgICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQgfSkgPT4gc2V0VGltZSh0YXJnZXQ/LnZhbHVlKX1cbiAgICAgICAgLz5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIG5hbWU9XCJnbHVjb3NlXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkdsaWNlbWlhXCJcbiAgICAgICAgICB2YWx1ZT17Z2x1Y29zZSB8fCBcIlwifVxuICAgICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQgfSkgPT4gc2V0R2x1Y29zZSh0YXJnZXQ/LnZhbHVlLnJlcGxhY2UoL1xcRC8sIFwiXCIpKX1cbiAgICAgICAgLz5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIG5hbWU9XCJjb3JyZWN0aW9uXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cImNvcnJlw6fDo29cIlxuICAgICAgICAgIHZhbHVlPXtjb3JyZWN0aW9uIHx8IFwiXCJ9XG4gICAgICAgICAgb25DaGFuZ2U9eyh7IHRhcmdldCB9KSA9PiBzZXRDb3JyZWN0aW9uKHRhcmdldD8udmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgbmFtZT1cInByZXNzdXJlXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlByZXNzw6NvXCJcbiAgICAgICAgICB2YWx1ZT17cHJlc3N1cmUgfHwgXCJcIn1cbiAgICAgICAgICBvbkNoYW5nZT17KHsgdGFyZ2V0IH0pID0+XG4gICAgICAgICAgICBzZXRQcmVzc3VyZSh0YXJnZXQ/LnZhbHVlLnJlcGxhY2UoL1tBLVpdL2dpLCBcIlwiKSlcbiAgICAgICAgICB9XG4gICAgICAgIC8+XG4gICAgICAgIDxTdHlsZXMuV3JhcHBlckJ1dHRvbnMgY29udGVudD1cImZsZXgtZW5kXCI+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICB3aWR0aD1cIjE3MHB4XCJcbiAgICAgICAgICAgIHRleHQ9e2RvY3VtZW50SWQgPyBcIkF0dWFsaXphclwiIDogXCJTYWx2YXJcIn1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgd2lkdGg9XCIxNzBweFwiXG4gICAgICAgICAgICB0ZXh0PVwibGltcGFyXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2NsZWFyQWxsRmllbGRzfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvU3R5bGVzLldyYXBwZXJCdXR0b25zPlxuICAgICAgPC9TdHlsZXMuRm9ybT5cblxuICAgICAgPFRhYmxlPlxuICAgICAgICA8TGlzdCBuZXdJdGVtPXtuZXdJZH0gLz5cbiAgICAgIDwvVGFibGU+XG5cbiAgICAgIDxNb2RhbFxuICAgICAgICBzdGF0dXNNb2RhbD17c2hvd01vZGFsfVxuICAgICAgICBvbkNsb3NlTW9kYWw9eyhzdGF0dXMpID0+IHNldFNob3dNb2RhbChzdGF0dXMpfVxuICAgICAgLz5cblxuICAgICAgey8qIDxBbGVydFxuICAgICAgICBkZWxheT17MjAwMH1cbiAgICAgICAgaGlkZGVuQWxlcnQ9eyhzdGF0dXMpID0+XG4gICAgICAgICAgc2V0U3RhdHVzQWxlcnQoeyBtc2c6IFwiXCIsIGhpZGRlbjogIXN0YXR1cywgdHlwZTogXCJ3YXJuXCIgfSlcbiAgICAgICAgfVxuICAgICAgICBtc2c9e3N0YXR1c0FsZXJ0Lm1zZ31cbiAgICAgICAgaGlkZGVuPXtzdGF0dXNBbGVydC5oaWRkZW59XG4gICAgICAgIHR5cGU9e3N0YXR1c0FsZXJ0LnR5cGV9XG4gICAgICAvPiAqL31cbiAgICA8L1N0eWxlcy5Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidjQiLCJ1dWlkdjQiLCJTdHlsZXMiLCJCdXR0b24iLCJJbnB1dCIsIkxpc3QiLCJUYWJsZSIsIk1vZGFsIiwiZ2x1Y29zZUxhc3RUaHJlZURheXMiLCJGYUV5ZSIsIkRyb3Bkb3duTWVudSIsIlVzZUxpc3RHbHVjb3NlQ29udGV4dCIsIkhvbWUiLCJhZGRJdGVtR2x1Y29zZSIsImRhdGUiLCJ0aW1lIiwiZ2x1Y29zZSIsImNvcnJlY3Rpb24iLCJwcmVzc3VyZSIsImRvY3VtZW50SWQiLCJuZXdJZCIsInNldERhdGUiLCJzZXRUaW1lIiwic2V0R2x1Y29zZSIsInNldENvcnJlY3Rpb24iLCJzZXRQcmVzc3VyZSIsInNldERvY3VtZW50SWQiLCJzZXROZXdJZCIsImNvbnNvbGUiLCJsb2ciLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJtc2ciLCJoaWRkZW4iLCJ0eXBlIiwic3RhdHVzQWxlcnQiLCJzZXRTdGF0dXNBbGVydCIsImZpbHRlckdsdWNvc2UiLCJyZXN1bHQiLCJjbGVhckFsbEZpZWxkcyIsInNldFRpbWVvdXQiLCJjYW5BZGRGaWVsZCIsImlzRmlsbCIsIm1vbnRoQ3VycmVudCIsIkRhdGUiLCJnZXRNb250aCIsIm1vbnRoRm9ybSIsIk51bWJlciIsInNwbGl0IiwiX2hhbmRsZU9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIm5ld0l0ZW0iLCJpZCIsImhhbmRsZUZpbHRlciIsInZhbHVlIiwiX2hhbmRsZUVkaXRJdGVtIiwiaXRlbSIsInRhcmdldCIsInJlcGxhY2UiLCJzdGF0dXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});