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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* harmony import */ var styles_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styles/styles */ \"./src/styles/styles.ts\");\n/* harmony import */ var components_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/button */ \"./src/components/button/index.ts\");\n/* harmony import */ var components_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/input */ \"./src/components/input/index.ts\");\n/* harmony import */ var components_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/list */ \"./src/components/list/index.ts\");\n/* harmony import */ var components_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/table */ \"./src/components/table/index.ts\");\n/* harmony import */ var components_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/modal */ \"./src/components/modal/index.ts\");\n/* harmony import */ var lib_service_glucose__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lib/service/glucose */ \"./src/lib/service/glucose.ts\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var components_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/dropdown */ \"./src/components/dropdown/index.ts\");\n/* harmony import */ var components_alert__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/alert */ \"./src/components/alert/index.ts\");\n/* harmony import */ var context_list_contextList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! context/list/contextList */ \"./src/context/list/contextList.tsx\");\n/* harmony import */ var utils_validationForm__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! utils/validationForm */ \"./src/utils/validationForm.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__);\n\n\nvar _jsxFileName = \"/home/juliofreitas/\\xC1rea de Trabalho/glucose/src/pages/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Home = function Home() {\n  _s();\n\n  var _UseListGlucoseContex = (0,context_list_contextList__WEBPACK_IMPORTED_MODULE_12__.UseListGlucoseContext)(),\n      addItemGlucose = _UseListGlucoseContex.addItemGlucose,\n      date = _UseListGlucoseContex.date,\n      time = _UseListGlucoseContex.time,\n      glucose = _UseListGlucoseContex.glucose,\n      correction = _UseListGlucoseContex.correction,\n      pressure = _UseListGlucoseContex.pressure,\n      documentId = _UseListGlucoseContex.documentId,\n      newId = _UseListGlucoseContex.newId,\n      setDate = _UseListGlucoseContex.setDate,\n      setTime = _UseListGlucoseContex.setTime,\n      setGlucose = _UseListGlucoseContex.setGlucose,\n      setCorrection = _UseListGlucoseContex.setCorrection,\n      setPressure = _UseListGlucoseContex.setPressure,\n      setNewId = _UseListGlucoseContex.setNewId,\n      updateItemGLucose = _UseListGlucoseContex.updateItemGLucose,\n      clearAllFields = _UseListGlucoseContex.clearAllFields,\n      setListItem = _UseListGlucoseContex.setListItem,\n      getAllList = _UseListGlucoseContex.getAllList;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      showModal = _useState[0],\n      setShowModal = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n    msg: \"\",\n    hidden: false,\n    type: \"warn\"\n  }),\n      statusAlert = _useState2[0],\n      setStatusAlert = _useState2[1];\n\n  var filterGlucose = /*#__PURE__*/function () {\n    var _ref = (0,_home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n      var result;\n      return _home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return (0,lib_service_glucose__WEBPACK_IMPORTED_MODULE_9__.glucoseLastThreeDays)();\n\n            case 2:\n              result = _context.sent;\n              setListItem(result);\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function filterGlucose() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var canAddField = function canAddField() {\n    var isFill = !date || !time || !glucose;\n    var monthCurrent = new Date().getMonth() + 1;\n    var monthForm = Number(date === null || date === void 0 ? void 0 : date.split(\"-\")[1]);\n\n    if (isFill) {\n      setStatusAlert({\n        msg: \"Os campo date, hora ou glicemia devem ser preenchidos!\",\n        hidden: true,\n        type: \"warn\"\n      });\n      return false;\n    }\n\n    if (monthForm > monthCurrent) {\n      setStatusAlert({\n        msg: \"Não é possivel lançar datas futuras\",\n        hidden: true,\n        type: \"warn\"\n      });\n      return false;\n    }\n\n    return true;\n  };\n\n  var _handleOnSubmit = /*#__PURE__*/function () {\n    var _ref2 = (0,_home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(event) {\n      var _validationForm, send, msg, newItem;\n\n      return _home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              event.preventDefault();\n              _validationForm = (0,utils_validationForm__WEBPACK_IMPORTED_MODULE_13__.validationForm)({\n                date: date,\n                glucose: glucose,\n                time: time\n              }), send = _validationForm.send, msg = _validationForm.msg;\n\n              if (send) {\n                _context2.next = 4;\n                break;\n              }\n\n              return _context2.abrupt(\"return\", setStatusAlert({\n                msg: msg,\n                hidden: true,\n                type: \"warn\"\n              }));\n\n            case 4:\n              newItem = {\n                id: (0,uuid__WEBPACK_IMPORTED_MODULE_15__.v4)(),\n                date: date,\n                time: time,\n                glucose: glucose,\n                correction: correction,\n                pressure: pressure\n              };\n              setNewId(newItem.id); // documentId\n              //   ? updateItemGLucose(documentId, newItem)\n              //   : addItemGlucose(newItem);\n\n              setStatusAlert({\n                msg: documentId ? \"Atualizado com sucesso!\" : \"Adicionado com sucesso!\",\n                hidden: true,\n                type: \"sucess\"\n              });\n              clearAllFields();\n\n            case 8:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function _handleOnSubmit(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var handleFilter = function handleFilter(value) {\n    if (value === \"all\") return getAllList();\n    if (value === \"last-3-days\") return filterGlucose();\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(styles_styles__WEBPACK_IMPORTED_MODULE_3__.Container, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(styles_styles__WEBPACK_IMPORTED_MODULE_3__.WrapperButtons, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(components_dropdown__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n        optionSelected: handleFilter,\n        className: \"dropdown\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 127,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(components_button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        type: \"button\",\n        width: \"170px\",\n        height: \"auto\",\n        onClick: function onClick() {\n          return setShowModal(!showModal);\n        },\n        text: \"Consultar Tabela de Glicose\",\n        icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_16__.FaEye, {\n          width: \"50px\",\n          height: \"100px\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 134,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 128,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(styles_styles__WEBPACK_IMPORTED_MODULE_3__.Form, {\n      action: \"/\",\n      onSubmit: _handleOnSubmit,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(components_input__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        type: \"date\",\n        name: \"date\",\n        placeholder: \"Data\",\n        value: date || \"\",\n        onChange: function onChange(_ref3) {\n          var target = _ref3.target;\n          return setDate(target === null || target === void 0 ? void 0 : target.value);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 139,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(components_input__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        type: \"time\",\n        name: \"time\",\n        placeholder: \"Hora\",\n        value: time || \"\",\n        onChange: function onChange(_ref4) {\n          var target = _ref4.target;\n          return setTime(target === null || target === void 0 ? void 0 : target.value);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 146,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(components_input__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        type: \"text\",\n        name: \"glucose\",\n        placeholder: \"Glicemia\",\n        value: glucose || \"\",\n        onChange: function onChange(_ref5) {\n          var target = _ref5.target;\n          return setGlucose(target === null || target === void 0 ? void 0 : target.value.replace(/\\D/, \"\"));\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 153,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(components_input__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        type: \"text\",\n        name: \"correction\",\n        placeholder: \"corre\\xE7\\xE3o\",\n        value: correction || \"\",\n        onChange: function onChange(_ref6) {\n          var target = _ref6.target;\n          return setCorrection(target === null || target === void 0 ? void 0 : target.value);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 160,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(components_input__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        type: \"text\",\n        name: \"pressure\",\n        placeholder: \"Press\\xE3o\",\n        value: pressure || \"\",\n        onChange: function onChange(_ref7) {\n          var target = _ref7.target;\n          return setPressure(target === null || target === void 0 ? void 0 : target.value.replace(/[A-Z]/gi, \"\"));\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 167,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(styles_styles__WEBPACK_IMPORTED_MODULE_3__.WrapperButtons, {\n        content: \"flex-end\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(components_button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n          type: \"submit\",\n          width: \"170px\",\n          text: documentId ? \"Atualizar\" : \"Salvar\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 177,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(components_button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n          type: \"button\",\n          width: \"170px\",\n          text: \"limpar\",\n          onClick: clearAllFields\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 182,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 176,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 138,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(components_table__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(components_list__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        newItem: newId || \"\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 192,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 191,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(components_modal__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n      statusModal: showModal,\n      onCloseModal: function onCloseModal(status) {\n        return setShowModal(status);\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 195,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(components_alert__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n      delay: 2000,\n      hiddenAlert: function hiddenAlert(status) {\n        return setStatusAlert({\n          msg: \"\",\n          hidden: !status,\n          type: \"warn\"\n        });\n      },\n      msg: statusAlert.msg,\n      hidden: statusAlert.hidden,\n      type: statusAlert.type\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 200,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 125,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Home, \"WfgVl9BXkah4vPvBKBdbgR6a9L4=\");\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQXBCO1VBQTRCdkIsSUFBSSxFQUFFO1FBQWxDLENBQUQsQ0FESDtNQUFBLENBRmY7TUFLRSxHQUFHLEVBQUVDLFdBQVcsQ0FBQ0gsR0FMbkI7TUFNRSxNQUFNLEVBQUVHLFdBQVcsQ0FBQ0YsTUFOdEI7TUFPRSxJQUFJLEVBQUVFLFdBQVcsQ0FBQ0Q7SUFQcEI7TUFBQTtNQUFBO01BQUE7SUFBQSxTQTNFRjtFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsU0FERjtBQXVGRCxDQTdMRDs7R0FBTXZCOztLQUFBQTtBQStMTiwrREFBZUEsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybUV2ZW50LCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcbmltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0ICogYXMgU3R5bGVzIGZyb20gXCJzdHlsZXMvc3R5bGVzXCI7XG5pbXBvcnQgeyBJdGVtIH0gZnJvbSBcInR5cGVzL2xpc3RcIjtcblxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiY29tcG9uZW50cy9idXR0b25cIjtcbmltcG9ydCBJbnB1dCBmcm9tIFwiY29tcG9uZW50cy9pbnB1dFwiO1xuaW1wb3J0IExpc3QgZnJvbSBcImNvbXBvbmVudHMvbGlzdFwiO1xuaW1wb3J0IFRhYmxlIGZyb20gXCJjb21wb25lbnRzL3RhYmxlXCI7XG5pbXBvcnQgTW9kYWwgZnJvbSBcImNvbXBvbmVudHMvbW9kYWxcIjtcblxuaW1wb3J0IHsgZ2x1Y29zZUxhc3RUaHJlZURheXMgfSBmcm9tIFwibGliL3NlcnZpY2UvZ2x1Y29zZVwiO1xuXG5pbXBvcnQgeyBGYUV5ZSB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuaW1wb3J0IERyb3Bkb3duTWVudSBmcm9tIFwiY29tcG9uZW50cy9kcm9wZG93blwiO1xuaW1wb3J0IEFsZXJ0IGZyb20gXCJjb21wb25lbnRzL2FsZXJ0XCI7XG5pbXBvcnQgeyBBbGVydFN0YXRlIH0gZnJvbSBcInR5cGVzL2FsZXJ0XCI7XG5pbXBvcnQgeyBVc2VMaXN0R2x1Y29zZUNvbnRleHQgfSBmcm9tIFwiY29udGV4dC9saXN0L2NvbnRleHRMaXN0XCI7XG5pbXBvcnQgeyB2YWxpZGF0aW9uRm9ybSB9IGZyb20gXCJ1dGlscy92YWxpZGF0aW9uRm9ybVwiO1xuXG5jb25zdCBIb21lOiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgY29uc3Qge1xuICAgIGFkZEl0ZW1HbHVjb3NlLFxuICAgIGRhdGUsXG4gICAgdGltZSxcbiAgICBnbHVjb3NlLFxuICAgIGNvcnJlY3Rpb24sXG4gICAgcHJlc3N1cmUsXG4gICAgZG9jdW1lbnRJZCxcbiAgICBuZXdJZCxcbiAgICBzZXREYXRlLFxuICAgIHNldFRpbWUsXG4gICAgc2V0R2x1Y29zZSxcbiAgICBzZXRDb3JyZWN0aW9uLFxuICAgIHNldFByZXNzdXJlLFxuICAgIHNldE5ld0lkLFxuICAgIHVwZGF0ZUl0ZW1HTHVjb3NlLFxuICAgIGNsZWFyQWxsRmllbGRzLFxuICAgIHNldExpc3RJdGVtLFxuICAgIGdldEFsbExpc3QsXG4gIH0gPSBVc2VMaXN0R2x1Y29zZUNvbnRleHQoKTtcblxuICBjb25zdCBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbc3RhdHVzQWxlcnQsIHNldFN0YXR1c0FsZXJ0XSA9IHVzZVN0YXRlPEFsZXJ0U3RhdGU+KHtcbiAgICBtc2c6IFwiXCIsXG4gICAgaGlkZGVuOiBmYWxzZSxcbiAgICB0eXBlOiBcIndhcm5cIixcbiAgfSk7XG5cbiAgY29uc3QgZmlsdGVyR2x1Y29zZSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnbHVjb3NlTGFzdFRocmVlRGF5cygpO1xuICAgIHNldExpc3RJdGVtKHJlc3VsdCk7XG4gIH07XG5cbiAgY29uc3QgY2FuQWRkRmllbGQgPSAoKSA9PiB7XG4gICAgY29uc3QgaXNGaWxsID0gIWRhdGUgfHwgIXRpbWUgfHwgIWdsdWNvc2U7XG4gICAgY29uc3QgbW9udGhDdXJyZW50ID0gbmV3IERhdGUoKS5nZXRNb250aCgpICsgMTtcbiAgICBjb25zdCBtb250aEZvcm0gPSBOdW1iZXIoZGF0ZT8uc3BsaXQoXCItXCIpWzFdKTtcblxuICAgIGlmIChpc0ZpbGwpIHtcbiAgICAgIHNldFN0YXR1c0FsZXJ0KHtcbiAgICAgICAgbXNnOiBcIk9zIGNhbXBvIGRhdGUsIGhvcmEgb3UgZ2xpY2VtaWEgZGV2ZW0gc2VyIHByZWVuY2hpZG9zIVwiLFxuICAgICAgICBoaWRkZW46IHRydWUsXG4gICAgICAgIHR5cGU6IFwid2FyblwiLFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKG1vbnRoRm9ybSA+IG1vbnRoQ3VycmVudCkge1xuICAgICAgc2V0U3RhdHVzQWxlcnQoe1xuICAgICAgICBtc2c6IFwiTsOjbyDDqSBwb3NzaXZlbCBsYW7Dp2FyIGRhdGFzIGZ1dHVyYXNcIixcbiAgICAgICAgaGlkZGVuOiB0cnVlLFxuICAgICAgICB0eXBlOiBcIndhcm5cIixcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IF9oYW5kbGVPblN1Ym1pdCA9IGFzeW5jIChldmVudDogRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHsgc2VuZCwgbXNnIH0gPSB2YWxpZGF0aW9uRm9ybSh7IGRhdGUsIGdsdWNvc2UsIHRpbWUgfSk7XG4gICAgaWYgKCFzZW5kKVxuICAgICAgcmV0dXJuIHNldFN0YXR1c0FsZXJ0KHtcbiAgICAgICAgbXNnLFxuICAgICAgICBoaWRkZW46IHRydWUsXG4gICAgICAgIHR5cGU6IFwid2FyblwiLFxuICAgICAgfSk7XG5cblxuXG4gICAgY29uc3QgbmV3SXRlbTogSXRlbSA9IHtcbiAgICAgIGlkOiB1dWlkdjQoKSxcbiAgICAgIGRhdGUsXG4gICAgICB0aW1lLFxuICAgICAgZ2x1Y29zZSxcbiAgICAgIGNvcnJlY3Rpb24sXG4gICAgICBwcmVzc3VyZSxcbiAgICB9O1xuXG4gICAgc2V0TmV3SWQobmV3SXRlbS5pZCBhcyBzdHJpbmcpO1xuXG4gICAgLy8gZG9jdW1lbnRJZFxuICAgIC8vICAgPyB1cGRhdGVJdGVtR0x1Y29zZShkb2N1bWVudElkLCBuZXdJdGVtKVxuICAgIC8vICAgOiBhZGRJdGVtR2x1Y29zZShuZXdJdGVtKTtcblxuICAgIHNldFN0YXR1c0FsZXJ0KHtcbiAgICAgIG1zZzogZG9jdW1lbnRJZFxuICAgICAgPyBcIkF0dWFsaXphZG8gY29tIHN1Y2Vzc28hXCJcbiAgICAgIDogXCJBZGljaW9uYWRvIGNvbSBzdWNlc3NvIVwiLFxuICAgICAgaGlkZGVuOiB0cnVlLFxuICAgICAgdHlwZTogXCJzdWNlc3NcIixcbiAgICB9KTtcbiAgICBjbGVhckFsbEZpZWxkcygpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUZpbHRlciA9ICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgaWYgKHZhbHVlID09PSBcImFsbFwiKSByZXR1cm4gZ2V0QWxsTGlzdCgpO1xuICAgIGlmICh2YWx1ZSA9PT0gXCJsYXN0LTMtZGF5c1wiKSByZXR1cm4gZmlsdGVyR2x1Y29zZSgpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFN0eWxlcy5Db250YWluZXI+XG4gICAgICA8U3R5bGVzLldyYXBwZXJCdXR0b25zPlxuICAgICAgICA8RHJvcGRvd25NZW51IG9wdGlvblNlbGVjdGVkPXtoYW5kbGVGaWx0ZXJ9IGNsYXNzTmFtZT1cImRyb3Bkb3duXCIgLz5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIHdpZHRoPVwiMTcwcHhcIlxuICAgICAgICAgIGhlaWdodD1cImF1dG9cIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dNb2RhbCghc2hvd01vZGFsKX1cbiAgICAgICAgICB0ZXh0PVwiQ29uc3VsdGFyIFRhYmVsYSBkZSBHbGljb3NlXCJcbiAgICAgICAgICBpY29uPXs8RmFFeWUgd2lkdGg9XCI1MHB4XCIgaGVpZ2h0PVwiMTAwcHhcIiAvPn1cbiAgICAgICAgLz5cbiAgICAgIDwvU3R5bGVzLldyYXBwZXJCdXR0b25zPlxuXG4gICAgICA8U3R5bGVzLkZvcm0gYWN0aW9uPVwiL1wiIG9uU3VibWl0PXtfaGFuZGxlT25TdWJtaXR9PlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICB0eXBlPVwiZGF0ZVwiXG4gICAgICAgICAgbmFtZT1cImRhdGVcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGF0YVwiXG4gICAgICAgICAgdmFsdWU9e2RhdGUgfHwgXCJcIn1cbiAgICAgICAgICBvbkNoYW5nZT17KHsgdGFyZ2V0IH0pID0+IHNldERhdGUodGFyZ2V0Py52YWx1ZSl9XG4gICAgICAgIC8+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0aW1lXCJcbiAgICAgICAgICBuYW1lPVwidGltZVwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJIb3JhXCJcbiAgICAgICAgICB2YWx1ZT17dGltZSB8fCBcIlwifVxuICAgICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQgfSkgPT4gc2V0VGltZSh0YXJnZXQ/LnZhbHVlKX1cbiAgICAgICAgLz5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIG5hbWU9XCJnbHVjb3NlXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkdsaWNlbWlhXCJcbiAgICAgICAgICB2YWx1ZT17Z2x1Y29zZSB8fCBcIlwifVxuICAgICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQgfSkgPT4gc2V0R2x1Y29zZSh0YXJnZXQ/LnZhbHVlLnJlcGxhY2UoL1xcRC8sIFwiXCIpKX1cbiAgICAgICAgLz5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIG5hbWU9XCJjb3JyZWN0aW9uXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cImNvcnJlw6fDo29cIlxuICAgICAgICAgIHZhbHVlPXtjb3JyZWN0aW9uIHx8IFwiXCJ9XG4gICAgICAgICAgb25DaGFuZ2U9eyh7IHRhcmdldCB9KSA9PiBzZXRDb3JyZWN0aW9uKHRhcmdldD8udmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgbmFtZT1cInByZXNzdXJlXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlByZXNzw6NvXCJcbiAgICAgICAgICB2YWx1ZT17cHJlc3N1cmUgfHwgXCJcIn1cbiAgICAgICAgICBvbkNoYW5nZT17KHsgdGFyZ2V0IH0pID0+XG4gICAgICAgICAgICBzZXRQcmVzc3VyZSh0YXJnZXQ/LnZhbHVlLnJlcGxhY2UoL1tBLVpdL2dpLCBcIlwiKSlcbiAgICAgICAgICB9XG4gICAgICAgIC8+XG4gICAgICAgIDxTdHlsZXMuV3JhcHBlckJ1dHRvbnMgY29udGVudD1cImZsZXgtZW5kXCI+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICB3aWR0aD1cIjE3MHB4XCJcbiAgICAgICAgICAgIHRleHQ9e2RvY3VtZW50SWQgPyBcIkF0dWFsaXphclwiIDogXCJTYWx2YXJcIn1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgd2lkdGg9XCIxNzBweFwiXG4gICAgICAgICAgICB0ZXh0PVwibGltcGFyXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2NsZWFyQWxsRmllbGRzfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvU3R5bGVzLldyYXBwZXJCdXR0b25zPlxuICAgICAgPC9TdHlsZXMuRm9ybT5cblxuICAgICAgPFRhYmxlPlxuICAgICAgICA8TGlzdCBuZXdJdGVtPXtuZXdJZCB8fCBcIlwifSAvPlxuICAgICAgPC9UYWJsZT5cblxuICAgICAgPE1vZGFsXG4gICAgICAgIHN0YXR1c01vZGFsPXtzaG93TW9kYWx9XG4gICAgICAgIG9uQ2xvc2VNb2RhbD17KHN0YXR1cykgPT4gc2V0U2hvd01vZGFsKHN0YXR1cyl9XG4gICAgICAvPlxuXG4gICAgICA8QWxlcnRcbiAgICAgICAgZGVsYXk9ezIwMDB9XG4gICAgICAgIGhpZGRlbkFsZXJ0PXsoc3RhdHVzKSA9PlxuICAgICAgICAgIHNldFN0YXR1c0FsZXJ0KHsgbXNnOiBcIlwiLCBoaWRkZW46ICFzdGF0dXMsIHR5cGU6IFwid2FyblwiIH0pXG4gICAgICAgIH1cbiAgICAgICAgbXNnPXtzdGF0dXNBbGVydC5tc2d9XG4gICAgICAgIGhpZGRlbj17c3RhdHVzQWxlcnQuaGlkZGVufVxuICAgICAgICB0eXBlPXtzdGF0dXNBbGVydC50eXBlfVxuICAgICAgLz5cbiAgICA8L1N0eWxlcy5Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidjQiLCJ1dWlkdjQiLCJTdHlsZXMiLCJCdXR0b24iLCJJbnB1dCIsIkxpc3QiLCJUYWJsZSIsIk1vZGFsIiwiZ2x1Y29zZUxhc3RUaHJlZURheXMiLCJGYUV5ZSIsIkRyb3Bkb3duTWVudSIsIkFsZXJ0IiwiVXNlTGlzdEdsdWNvc2VDb250ZXh0IiwidmFsaWRhdGlvbkZvcm0iLCJIb21lIiwiYWRkSXRlbUdsdWNvc2UiLCJkYXRlIiwidGltZSIsImdsdWNvc2UiLCJjb3JyZWN0aW9uIiwicHJlc3N1cmUiLCJkb2N1bWVudElkIiwibmV3SWQiLCJzZXREYXRlIiwic2V0VGltZSIsInNldEdsdWNvc2UiLCJzZXRDb3JyZWN0aW9uIiwic2V0UHJlc3N1cmUiLCJzZXROZXdJZCIsInVwZGF0ZUl0ZW1HTHVjb3NlIiwiY2xlYXJBbGxGaWVsZHMiLCJzZXRMaXN0SXRlbSIsImdldEFsbExpc3QiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJtc2ciLCJoaWRkZW4iLCJ0eXBlIiwic3RhdHVzQWxlcnQiLCJzZXRTdGF0dXNBbGVydCIsImZpbHRlckdsdWNvc2UiLCJyZXN1bHQiLCJjYW5BZGRGaWVsZCIsImlzRmlsbCIsIm1vbnRoQ3VycmVudCIsIkRhdGUiLCJnZXRNb250aCIsIm1vbnRoRm9ybSIsIk51bWJlciIsInNwbGl0IiwiX2hhbmRsZU9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNlbmQiLCJuZXdJdGVtIiwiaWQiLCJoYW5kbGVGaWx0ZXIiLCJ2YWx1ZSIsInRhcmdldCIsInJlcGxhY2UiLCJzdGF0dXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});