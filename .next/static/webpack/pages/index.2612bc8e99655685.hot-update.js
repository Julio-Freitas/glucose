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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* harmony import */ var styles_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styles/styles */ \"./src/styles/styles.ts\");\n/* harmony import */ var components_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/button */ \"./src/components/button/index.ts\");\n/* harmony import */ var components_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/input */ \"./src/components/input/index.ts\");\n/* harmony import */ var components_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/list */ \"./src/components/list/index.ts\");\n/* harmony import */ var components_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/table */ \"./src/components/table/index.ts\");\n/* harmony import */ var components_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/modal */ \"./src/components/modal/index.ts\");\n/* harmony import */ var lib_service_glucose__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lib/service/glucose */ \"./src/lib/service/glucose.ts\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var components_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/dropdown */ \"./src/components/dropdown/index.ts\");\n/* harmony import */ var components_alert__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/alert */ \"./src/components/alert/index.ts\");\n/* harmony import */ var context_list_contextList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! context/list/contextList */ \"./src/context/list/contextList.tsx\");\n/* harmony import */ var utils_validationForm__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! utils/validationForm */ \"./src/utils/validationForm.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__);\n\n\nvar _jsxFileName = \"/home/juliofreitas/\\xC1rea de Trabalho/glucose/src/pages/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Home = function Home() {\n  _s();\n\n  var _UseListGlucoseContex = (0,context_list_contextList__WEBPACK_IMPORTED_MODULE_12__.UseListGlucoseContext)(),\n      addItemGlucose = _UseListGlucoseContex.addItemGlucose,\n      date = _UseListGlucoseContex.date,\n      time = _UseListGlucoseContex.time,\n      glucose = _UseListGlucoseContex.glucose,\n      correction = _UseListGlucoseContex.correction,\n      pressure = _UseListGlucoseContex.pressure,\n      documentId = _UseListGlucoseContex.documentId,\n      newId = _UseListGlucoseContex.newId,\n      setDate = _UseListGlucoseContex.setDate,\n      setTime = _UseListGlucoseContex.setTime,\n      setGlucose = _UseListGlucoseContex.setGlucose,\n      setCorrection = _UseListGlucoseContex.setCorrection,\n      setPressure = _UseListGlucoseContex.setPressure,\n      setNewId = _UseListGlucoseContex.setNewId,\n      updateItemGLucose = _UseListGlucoseContex.updateItemGLucose,\n      clearAllFields = _UseListGlucoseContex.clearAllFields,\n      setListItem = _UseListGlucoseContex.setListItem,\n      getAllList = _UseListGlucoseContex.getAllList;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      showModal = _useState[0],\n      setShowModal = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n    msg: \"\",\n    hidden: false,\n    type: \"warn\"\n  }),\n      statusAlert = _useState2[0],\n      setStatusAlert = _useState2[1];\n\n  var filterGlucose = /*#__PURE__*/function () {\n    var _ref = (0,_home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n      var result;\n      return _home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return (0,lib_service_glucose__WEBPACK_IMPORTED_MODULE_9__.glucoseLastThreeDays)();\n\n            case 2:\n              result = _context.sent;\n              setListItem(result);\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function filterGlucose() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var canAddField = function canAddField() {\n    var isFill = !date || !time || !glucose;\n    var monthCurrent = new Date().getMonth() + 1;\n    var monthForm = Number(date === null || date === void 0 ? void 0 : date.split(\"-\")[1]);\n\n    if (isFill) {\n      setStatusAlert({\n        msg: \"Os campo date, hora ou glicemia devem ser preenchidos!\",\n        hidden: true,\n        type: \"warn\"\n      });\n      return false;\n    }\n\n    if (monthForm > monthCurrent) {\n      setStatusAlert({\n        msg: \"Não é possivel lançar datas futuras\",\n        hidden: true,\n        type: \"warn\"\n      });\n      return false;\n    }\n\n    return true;\n  };\n\n  var _handleOnSubmit = /*#__PURE__*/function () {\n    var _ref2 = (0,_home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(event) {\n      var _validationForm, send, msg, newItem;\n\n      return _home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              event.preventDefault();\n              _validationForm = (0,utils_validationForm__WEBPACK_IMPORTED_MODULE_13__.validationForm)({\n                date: date,\n                glucose: glucose,\n                time: time\n              }), send = _validationForm.send, msg = _validationForm.msg;\n\n              if (send) {\n                _context2.next = 4;\n                break;\n              }\n\n              return _context2.abrupt(\"return\", setStatusAlert({\n                msg: msg,\n                hidden: true,\n                type: \"warn\"\n              }));\n\n            case 4:\n              // const msg = documentId\n              //   ? \"Atualizado com sucesso!\"\n              //   : \"Adicionado com sucesso!\";\n              newItem = {\n                id: (0,uuid__WEBPACK_IMPORTED_MODULE_15__.v4)(),\n                date: date,\n                time: time,\n                glucose: glucose,\n                correction: correction,\n                pressure: pressure\n              };\n              setNewId(newItem.id); // documentId\n              //   ? updateItemGLucose(documentId, newItem)\n              //   : addItemGlucose(newItem);\n\n              setStatusAlert({\n                msg: msg,\n                hidden: true,\n                type: \"sucess\"\n              });\n              clearAllFields();\n\n            case 8:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function _handleOnSubmit(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var handleFilter = function handleFilter(value) {\n    if (value === \"all\") return getAllList();\n    if (value === \"last-3-days\") return filterGlucose();\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(styles_styles__WEBPACK_IMPORTED_MODULE_3__.Container, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(styles_styles__WEBPACK_IMPORTED_MODULE_3__.WrapperButtons, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(components_dropdown__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n        optionSelected: handleFilter,\n        className: \"dropdown\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 127,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(components_button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        type: \"button\",\n        width: \"170px\",\n        height: \"auto\",\n        onClick: function onClick() {\n          return setShowModal(!showModal);\n        },\n        text: \"Consultar Tabela de Glicose\",\n        icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_16__.FaEye, {\n          width: \"50px\",\n          height: \"100px\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 134,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 128,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(styles_styles__WEBPACK_IMPORTED_MODULE_3__.Form, {\n      action: \"/\",\n      onSubmit: _handleOnSubmit,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(components_input__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        type: \"date\",\n        name: \"date\",\n        placeholder: \"Data\",\n        value: date || \"\",\n        onChange: function onChange(_ref3) {\n          var target = _ref3.target;\n          return setDate(target === null || target === void 0 ? void 0 : target.value);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 139,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(components_input__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        type: \"time\",\n        name: \"time\",\n        placeholder: \"Hora\",\n        value: time || \"\",\n        onChange: function onChange(_ref4) {\n          var target = _ref4.target;\n          return setTime(target === null || target === void 0 ? void 0 : target.value);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 146,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(components_input__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        type: \"text\",\n        name: \"glucose\",\n        placeholder: \"Glicemia\",\n        value: glucose || \"\",\n        onChange: function onChange(_ref5) {\n          var target = _ref5.target;\n          return setGlucose(target === null || target === void 0 ? void 0 : target.value.replace(/\\D/, \"\"));\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 153,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(components_input__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        type: \"text\",\n        name: \"correction\",\n        placeholder: \"corre\\xE7\\xE3o\",\n        value: correction || \"\",\n        onChange: function onChange(_ref6) {\n          var target = _ref6.target;\n          return setCorrection(target === null || target === void 0 ? void 0 : target.value);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 160,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(components_input__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        type: \"text\",\n        name: \"pressure\",\n        placeholder: \"Press\\xE3o\",\n        value: pressure || \"\",\n        onChange: function onChange(_ref7) {\n          var target = _ref7.target;\n          return setPressure(target === null || target === void 0 ? void 0 : target.value.replace(/[A-Z]/gi, \"\"));\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 167,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(styles_styles__WEBPACK_IMPORTED_MODULE_3__.WrapperButtons, {\n        content: \"flex-end\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(components_button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n          type: \"submit\",\n          width: \"170px\",\n          text: documentId ? \"Atualizar\" : \"Salvar\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 177,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(components_button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n          type: \"button\",\n          width: \"170px\",\n          text: \"limpar\",\n          onClick: clearAllFields\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 182,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 176,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 138,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(components_table__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(components_list__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        newItem: newId || \"\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 192,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 191,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(components_modal__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n      statusModal: showModal,\n      onCloseModal: function onCloseModal(status) {\n        return setShowModal(status);\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 195,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(components_alert__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n      delay: 2000,\n      hiddenAlert: function hiddenAlert(status) {\n        return setStatusAlert({\n          msg: \"\",\n          hidden: !status,\n          type: \"warn\"\n        });\n      },\n      msg: statusAlert.msg,\n      hidden: statusAlert.hidden,\n      type: statusAlert.type\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 200,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 125,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Home, \"WfgVl9BXkah4vPvBKBdbgR6a9L4=\");\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFBNEJ2QixJQUFJLEVBQUU7UUFBbEMsQ0FBRCxDQURIO01BQUEsQ0FGZjtNQUtFLEdBQUcsRUFBRUMsV0FBVyxDQUFDSCxHQUxuQjtNQU1FLE1BQU0sRUFBRUcsV0FBVyxDQUFDRixNQU50QjtNQU9FLElBQUksRUFBRUUsV0FBVyxDQUFDRDtJQVBwQjtNQUFBO01BQUE7TUFBQTtJQUFBLFNBM0VGO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxTQURGO0FBdUZELENBN0xEOztHQUFNdkI7O0tBQUFBO0FBK0xOLCtEQUFlQSxJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtRXZlbnQsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgKiBhcyBTdHlsZXMgZnJvbSBcInN0eWxlcy9zdHlsZXNcIjtcbmltcG9ydCB7IEl0ZW0gfSBmcm9tIFwidHlwZXMvbGlzdFwiO1xuXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJjb21wb25lbnRzL2J1dHRvblwiO1xuaW1wb3J0IElucHV0IGZyb20gXCJjb21wb25lbnRzL2lucHV0XCI7XG5pbXBvcnQgTGlzdCBmcm9tIFwiY29tcG9uZW50cy9saXN0XCI7XG5pbXBvcnQgVGFibGUgZnJvbSBcImNvbXBvbmVudHMvdGFibGVcIjtcbmltcG9ydCBNb2RhbCBmcm9tIFwiY29tcG9uZW50cy9tb2RhbFwiO1xuXG5pbXBvcnQgeyBnbHVjb3NlTGFzdFRocmVlRGF5cyB9IGZyb20gXCJsaWIvc2VydmljZS9nbHVjb3NlXCI7XG5cbmltcG9ydCB7IEZhRXllIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5pbXBvcnQgRHJvcGRvd25NZW51IGZyb20gXCJjb21wb25lbnRzL2Ryb3Bkb3duXCI7XG5pbXBvcnQgQWxlcnQgZnJvbSBcImNvbXBvbmVudHMvYWxlcnRcIjtcbmltcG9ydCB7IEFsZXJ0U3RhdGUgfSBmcm9tIFwidHlwZXMvYWxlcnRcIjtcbmltcG9ydCB7IFVzZUxpc3RHbHVjb3NlQ29udGV4dCB9IGZyb20gXCJjb250ZXh0L2xpc3QvY29udGV4dExpc3RcIjtcbmltcG9ydCB7IHZhbGlkYXRpb25Gb3JtIH0gZnJvbSBcInV0aWxzL3ZhbGlkYXRpb25Gb3JtXCI7XG5cbmNvbnN0IEhvbWU6IE5leHRQYWdlID0gKCkgPT4ge1xuICBjb25zdCB7XG4gICAgYWRkSXRlbUdsdWNvc2UsXG4gICAgZGF0ZSxcbiAgICB0aW1lLFxuICAgIGdsdWNvc2UsXG4gICAgY29ycmVjdGlvbixcbiAgICBwcmVzc3VyZSxcbiAgICBkb2N1bWVudElkLFxuICAgIG5ld0lkLFxuICAgIHNldERhdGUsXG4gICAgc2V0VGltZSxcbiAgICBzZXRHbHVjb3NlLFxuICAgIHNldENvcnJlY3Rpb24sXG4gICAgc2V0UHJlc3N1cmUsXG4gICAgc2V0TmV3SWQsXG4gICAgdXBkYXRlSXRlbUdMdWNvc2UsXG4gICAgY2xlYXJBbGxGaWVsZHMsXG4gICAgc2V0TGlzdEl0ZW0sXG4gICAgZ2V0QWxsTGlzdCxcbiAgfSA9IFVzZUxpc3RHbHVjb3NlQ29udGV4dCgpO1xuXG4gIGNvbnN0IFtzaG93TW9kYWwsIHNldFNob3dNb2RhbF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFtzdGF0dXNBbGVydCwgc2V0U3RhdHVzQWxlcnRdID0gdXNlU3RhdGU8QWxlcnRTdGF0ZT4oe1xuICAgIG1zZzogXCJcIixcbiAgICBoaWRkZW46IGZhbHNlLFxuICAgIHR5cGU6IFwid2FyblwiLFxuICB9KTtcblxuICBjb25zdCBmaWx0ZXJHbHVjb3NlID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdsdWNvc2VMYXN0VGhyZWVEYXlzKCk7XG4gICAgc2V0TGlzdEl0ZW0ocmVzdWx0KTtcbiAgfTtcblxuICBjb25zdCBjYW5BZGRGaWVsZCA9ICgpID0+IHtcbiAgICBjb25zdCBpc0ZpbGwgPSAhZGF0ZSB8fCAhdGltZSB8fCAhZ2x1Y29zZTtcbiAgICBjb25zdCBtb250aEN1cnJlbnQgPSBuZXcgRGF0ZSgpLmdldE1vbnRoKCkgKyAxO1xuICAgIGNvbnN0IG1vbnRoRm9ybSA9IE51bWJlcihkYXRlPy5zcGxpdChcIi1cIilbMV0pO1xuXG4gICAgaWYgKGlzRmlsbCkge1xuICAgICAgc2V0U3RhdHVzQWxlcnQoe1xuICAgICAgICBtc2c6IFwiT3MgY2FtcG8gZGF0ZSwgaG9yYSBvdSBnbGljZW1pYSBkZXZlbSBzZXIgcHJlZW5jaGlkb3MhXCIsXG4gICAgICAgIGhpZGRlbjogdHJ1ZSxcbiAgICAgICAgdHlwZTogXCJ3YXJuXCIsXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAobW9udGhGb3JtID4gbW9udGhDdXJyZW50KSB7XG4gICAgICBzZXRTdGF0dXNBbGVydCh7XG4gICAgICAgIG1zZzogXCJOw6NvIMOpIHBvc3NpdmVsIGxhbsOnYXIgZGF0YXMgZnV0dXJhc1wiLFxuICAgICAgICBoaWRkZW46IHRydWUsXG4gICAgICAgIHR5cGU6IFwid2FyblwiLFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgY29uc3QgX2hhbmRsZU9uU3VibWl0ID0gYXN5bmMgKGV2ZW50OiBGb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgeyBzZW5kLCBtc2cgfSA9IHZhbGlkYXRpb25Gb3JtKHsgZGF0ZSwgZ2x1Y29zZSwgdGltZSB9KTtcbiAgICBpZiAoIXNlbmQpXG4gICAgICByZXR1cm4gc2V0U3RhdHVzQWxlcnQoe1xuICAgICAgICBtc2csXG4gICAgICAgIGhpZGRlbjogdHJ1ZSxcbiAgICAgICAgdHlwZTogXCJ3YXJuXCIsXG4gICAgICB9KTtcblxuICAgIC8vIGNvbnN0IG1zZyA9IGRvY3VtZW50SWRcbiAgICAvLyAgID8gXCJBdHVhbGl6YWRvIGNvbSBzdWNlc3NvIVwiXG4gICAgLy8gICA6IFwiQWRpY2lvbmFkbyBjb20gc3VjZXNzbyFcIjtcblxuICAgIGNvbnN0IG5ld0l0ZW06IEl0ZW0gPSB7XG4gICAgICBpZDogdXVpZHY0KCksXG4gICAgICBkYXRlLFxuICAgICAgdGltZSxcbiAgICAgIGdsdWNvc2UsXG4gICAgICBjb3JyZWN0aW9uLFxuICAgICAgcHJlc3N1cmUsXG4gICAgfTtcblxuICAgIHNldE5ld0lkKG5ld0l0ZW0uaWQgYXMgc3RyaW5nKTtcblxuICAgIC8vIGRvY3VtZW50SWRcbiAgICAvLyAgID8gdXBkYXRlSXRlbUdMdWNvc2UoZG9jdW1lbnRJZCwgbmV3SXRlbSlcbiAgICAvLyAgIDogYWRkSXRlbUdsdWNvc2UobmV3SXRlbSk7XG5cbiAgICBzZXRTdGF0dXNBbGVydCh7XG4gICAgICBtc2csXG4gICAgICBoaWRkZW46IHRydWUsXG4gICAgICB0eXBlOiBcInN1Y2Vzc1wiLFxuICAgIH0pO1xuICAgIGNsZWFyQWxsRmllbGRzKCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRmlsdGVyID0gKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICBpZiAodmFsdWUgPT09IFwiYWxsXCIpIHJldHVybiBnZXRBbGxMaXN0KCk7XG4gICAgaWYgKHZhbHVlID09PSBcImxhc3QtMy1kYXlzXCIpIHJldHVybiBmaWx0ZXJHbHVjb3NlKCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8U3R5bGVzLkNvbnRhaW5lcj5cbiAgICAgIDxTdHlsZXMuV3JhcHBlckJ1dHRvbnM+XG4gICAgICAgIDxEcm9wZG93bk1lbnUgb3B0aW9uU2VsZWN0ZWQ9e2hhbmRsZUZpbHRlcn0gY2xhc3NOYW1lPVwiZHJvcGRvd25cIiAvPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgd2lkdGg9XCIxNzBweFwiXG4gICAgICAgICAgaGVpZ2h0PVwiYXV0b1wiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd01vZGFsKCFzaG93TW9kYWwpfVxuICAgICAgICAgIHRleHQ9XCJDb25zdWx0YXIgVGFiZWxhIGRlIEdsaWNvc2VcIlxuICAgICAgICAgIGljb249ezxGYUV5ZSB3aWR0aD1cIjUwcHhcIiBoZWlnaHQ9XCIxMDBweFwiIC8+fVxuICAgICAgICAvPlxuICAgICAgPC9TdHlsZXMuV3JhcHBlckJ1dHRvbnM+XG5cbiAgICAgIDxTdHlsZXMuRm9ybSBhY3Rpb249XCIvXCIgb25TdWJtaXQ9e19oYW5kbGVPblN1Ym1pdH0+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIHR5cGU9XCJkYXRlXCJcbiAgICAgICAgICBuYW1lPVwiZGF0ZVwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJEYXRhXCJcbiAgICAgICAgICB2YWx1ZT17ZGF0ZSB8fCBcIlwifVxuICAgICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQgfSkgPT4gc2V0RGF0ZSh0YXJnZXQ/LnZhbHVlKX1cbiAgICAgICAgLz5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgdHlwZT1cInRpbWVcIlxuICAgICAgICAgIG5hbWU9XCJ0aW1lXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkhvcmFcIlxuICAgICAgICAgIHZhbHVlPXt0aW1lIHx8IFwiXCJ9XG4gICAgICAgICAgb25DaGFuZ2U9eyh7IHRhcmdldCB9KSA9PiBzZXRUaW1lKHRhcmdldD8udmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgbmFtZT1cImdsdWNvc2VcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiR2xpY2VtaWFcIlxuICAgICAgICAgIHZhbHVlPXtnbHVjb3NlIHx8IFwiXCJ9XG4gICAgICAgICAgb25DaGFuZ2U9eyh7IHRhcmdldCB9KSA9PiBzZXRHbHVjb3NlKHRhcmdldD8udmFsdWUucmVwbGFjZSgvXFxELywgXCJcIikpfVxuICAgICAgICAvPlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgbmFtZT1cImNvcnJlY3Rpb25cIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiY29ycmXDp8Ojb1wiXG4gICAgICAgICAgdmFsdWU9e2NvcnJlY3Rpb24gfHwgXCJcIn1cbiAgICAgICAgICBvbkNoYW5nZT17KHsgdGFyZ2V0IH0pID0+IHNldENvcnJlY3Rpb24odGFyZ2V0Py52YWx1ZSl9XG4gICAgICAgIC8+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBuYW1lPVwicHJlc3N1cmVcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUHJlc3PDo29cIlxuICAgICAgICAgIHZhbHVlPXtwcmVzc3VyZSB8fCBcIlwifVxuICAgICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQgfSkgPT5cbiAgICAgICAgICAgIHNldFByZXNzdXJlKHRhcmdldD8udmFsdWUucmVwbGFjZSgvW0EtWl0vZ2ksIFwiXCIpKVxuICAgICAgICAgIH1cbiAgICAgICAgLz5cbiAgICAgICAgPFN0eWxlcy5XcmFwcGVyQnV0dG9ucyBjb250ZW50PVwiZmxleC1lbmRcIj5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgIHdpZHRoPVwiMTcwcHhcIlxuICAgICAgICAgICAgdGV4dD17ZG9jdW1lbnRJZCA/IFwiQXR1YWxpemFyXCIgOiBcIlNhbHZhclwifVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICB3aWR0aD1cIjE3MHB4XCJcbiAgICAgICAgICAgIHRleHQ9XCJsaW1wYXJcIlxuICAgICAgICAgICAgb25DbGljaz17Y2xlYXJBbGxGaWVsZHN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9TdHlsZXMuV3JhcHBlckJ1dHRvbnM+XG4gICAgICA8L1N0eWxlcy5Gb3JtPlxuXG4gICAgICA8VGFibGU+XG4gICAgICAgIDxMaXN0IG5ld0l0ZW09e25ld0lkIHx8IFwiXCJ9IC8+XG4gICAgICA8L1RhYmxlPlxuXG4gICAgICA8TW9kYWxcbiAgICAgICAgc3RhdHVzTW9kYWw9e3Nob3dNb2RhbH1cbiAgICAgICAgb25DbG9zZU1vZGFsPXsoc3RhdHVzKSA9PiBzZXRTaG93TW9kYWwoc3RhdHVzKX1cbiAgICAgIC8+XG5cbiAgICAgIDxBbGVydFxuICAgICAgICBkZWxheT17MjAwMH1cbiAgICAgICAgaGlkZGVuQWxlcnQ9eyhzdGF0dXMpID0+XG4gICAgICAgICAgc2V0U3RhdHVzQWxlcnQoeyBtc2c6IFwiXCIsIGhpZGRlbjogIXN0YXR1cywgdHlwZTogXCJ3YXJuXCIgfSlcbiAgICAgICAgfVxuICAgICAgICBtc2c9e3N0YXR1c0FsZXJ0Lm1zZ31cbiAgICAgICAgaGlkZGVuPXtzdGF0dXNBbGVydC5oaWRkZW59XG4gICAgICAgIHR5cGU9e3N0YXR1c0FsZXJ0LnR5cGV9XG4gICAgICAvPlxuICAgIDwvU3R5bGVzLkNvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ2NCIsInV1aWR2NCIsIlN0eWxlcyIsIkJ1dHRvbiIsIklucHV0IiwiTGlzdCIsIlRhYmxlIiwiTW9kYWwiLCJnbHVjb3NlTGFzdFRocmVlRGF5cyIsIkZhRXllIiwiRHJvcGRvd25NZW51IiwiQWxlcnQiLCJVc2VMaXN0R2x1Y29zZUNvbnRleHQiLCJ2YWxpZGF0aW9uRm9ybSIsIkhvbWUiLCJhZGRJdGVtR2x1Y29zZSIsImRhdGUiLCJ0aW1lIiwiZ2x1Y29zZSIsImNvcnJlY3Rpb24iLCJwcmVzc3VyZSIsImRvY3VtZW50SWQiLCJuZXdJZCIsInNldERhdGUiLCJzZXRUaW1lIiwic2V0R2x1Y29zZSIsInNldENvcnJlY3Rpb24iLCJzZXRQcmVzc3VyZSIsInNldE5ld0lkIiwidXBkYXRlSXRlbUdMdWNvc2UiLCJjbGVhckFsbEZpZWxkcyIsInNldExpc3RJdGVtIiwiZ2V0QWxsTGlzdCIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsIm1zZyIsImhpZGRlbiIsInR5cGUiLCJzdGF0dXNBbGVydCIsInNldFN0YXR1c0FsZXJ0IiwiZmlsdGVyR2x1Y29zZSIsInJlc3VsdCIsImNhbkFkZEZpZWxkIiwiaXNGaWxsIiwibW9udGhDdXJyZW50IiwiRGF0ZSIsImdldE1vbnRoIiwibW9udGhGb3JtIiwiTnVtYmVyIiwic3BsaXQiLCJfaGFuZGxlT25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2VuZCIsIm5ld0l0ZW0iLCJpZCIsImhhbmRsZUZpbHRlciIsInZhbHVlIiwidGFyZ2V0IiwicmVwbGFjZSIsInN0YXR1cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});