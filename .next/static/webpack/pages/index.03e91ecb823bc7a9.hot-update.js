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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* harmony import */ var styles_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styles/styles */ \"./src/styles/styles.ts\");\n/* harmony import */ var components_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/button */ \"./src/components/button/index.ts\");\n/* harmony import */ var components_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/input */ \"./src/components/input/index.ts\");\n/* harmony import */ var components_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/list */ \"./src/components/list/index.ts\");\n/* harmony import */ var components_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/table */ \"./src/components/table/index.ts\");\n/* harmony import */ var components_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/modal */ \"./src/components/modal/index.ts\");\n/* harmony import */ var lib_service_glucose__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lib/service/glucose */ \"./src/lib/service/glucose.ts\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var components_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/dropdown */ \"./src/components/dropdown/index.ts\");\n/* harmony import */ var components_alert__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/alert */ \"./src/components/alert/index.ts\");\n/* harmony import */ var context_list_contextList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! context/list/contextList */ \"./src/context/list/contextList.tsx\");\n/* harmony import */ var utils_validationForm__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! utils/validationForm */ \"./src/utils/validationForm.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__);\n\n\nvar _jsxFileName = \"/home/juliofreitas/\\xC1rea de Trabalho/glucose/src/pages/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Home = function Home() {\n  _s();\n\n  var _UseListGlucoseContex = (0,context_list_contextList__WEBPACK_IMPORTED_MODULE_12__.UseListGlucoseContext)(),\n      addItemGlucose = _UseListGlucoseContex.addItemGlucose,\n      date = _UseListGlucoseContex.date,\n      time = _UseListGlucoseContex.time,\n      glucose = _UseListGlucoseContex.glucose,\n      correction = _UseListGlucoseContex.correction,\n      pressure = _UseListGlucoseContex.pressure,\n      documentId = _UseListGlucoseContex.documentId,\n      newId = _UseListGlucoseContex.newId,\n      setDate = _UseListGlucoseContex.setDate,\n      setTime = _UseListGlucoseContex.setTime,\n      setGlucose = _UseListGlucoseContex.setGlucose,\n      setCorrection = _UseListGlucoseContex.setCorrection,\n      setPressure = _UseListGlucoseContex.setPressure,\n      setNewId = _UseListGlucoseContex.setNewId,\n      updateItemGLucose = _UseListGlucoseContex.updateItemGLucose,\n      clearAllFields = _UseListGlucoseContex.clearAllFields,\n      setListItem = _UseListGlucoseContex.setListItem,\n      getAllList = _UseListGlucoseContex.getAllList;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      showModal = _useState[0],\n      setShowModal = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n    msg: \"\",\n    hidden: false,\n    type: \"warn\"\n  }),\n      statusAlert = _useState2[0],\n      setStatusAlert = _useState2[1];\n\n  var filterGlucose = /*#__PURE__*/function () {\n    var _ref = (0,_home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n      var result;\n      return _home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return (0,lib_service_glucose__WEBPACK_IMPORTED_MODULE_9__.glucoseLastThreeDays)();\n\n            case 2:\n              result = _context.sent;\n              setListItem(result);\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function filterGlucose() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var canAddField = function canAddField() {\n    var isFill = !date || !time || !glucose;\n    var monthCurrent = new Date().getMonth() + 1;\n    var monthForm = Number(date === null || date === void 0 ? void 0 : date.split(\"-\")[1]);\n\n    if (isFill) {\n      setStatusAlert({\n        msg: \"Os campo date, hora ou glicemia devem ser preenchidos!\",\n        hidden: true,\n        type: \"warn\"\n      });\n      return false;\n    }\n\n    if (monthForm > monthCurrent) {\n      setStatusAlert({\n        msg: \"Não é possivel lançar datas futuras\",\n        hidden: true,\n        type: \"warn\"\n      });\n      return false;\n    }\n\n    return true;\n  };\n\n  var _handleOnSubmit = /*#__PURE__*/function () {\n    var _ref2 = (0,_home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(event) {\n      var _validationForm, send, msg, newItem;\n\n      return _home_juliofreitas_rea_de_Trabalho_glucose_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              event.preventDefault();\n              _validationForm = (0,utils_validationForm__WEBPACK_IMPORTED_MODULE_13__.validationForm)({\n                date: date,\n                glucose: glucose,\n                time: time\n              }), send = _validationForm.send, msg = _validationForm.msg;\n\n              if (!send) {\n                setStatusAlert({\n                  msg: msg,\n                  hidden: true,\n                  type: \"warn\"\n                });\n              } // const msg = documentId\n              //   ? \"Atualizado com sucesso!\"\n              //   : \"Adicionado com sucesso!\";\n\n\n              newItem = {\n                id: (0,uuid__WEBPACK_IMPORTED_MODULE_15__.v4)(),\n                date: date,\n                time: time,\n                glucose: glucose,\n                correction: correction,\n                pressure: pressure\n              };\n              setNewId(newItem.id);\n              documentId ? updateItemGLucose(documentId, newItem) : addItemGlucose(newItem);\n              setStatusAlert({\n                msg: msg,\n                hidden: true,\n                type: \"sucess\"\n              });\n              clearAllFields();\n\n            case 8:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function _handleOnSubmit(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var handleFilter = function handleFilter(value) {\n    if (value === \"all\") return getAllList();\n    if (value === \"last-3-days\") return filterGlucose();\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(styles_styles__WEBPACK_IMPORTED_MODULE_3__.Container, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(styles_styles__WEBPACK_IMPORTED_MODULE_3__.WrapperButtons, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(components_dropdown__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n        optionSelected: handleFilter,\n        className: \"dropdown\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 133,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(components_button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        type: \"button\",\n        width: \"170px\",\n        height: \"auto\",\n        onClick: function onClick() {\n          return setShowModal(!showModal);\n        },\n        text: \"Consultar Tabela de Glicose\",\n        icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_16__.FaEye, {\n          width: \"50px\",\n          height: \"100px\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 140,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 134,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 132,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(styles_styles__WEBPACK_IMPORTED_MODULE_3__.Form, {\n      action: \"/\",\n      onSubmit: _handleOnSubmit,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(components_input__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        type: \"date\",\n        name: \"date\",\n        placeholder: \"Data\",\n        value: date || \"\",\n        onChange: function onChange(_ref3) {\n          var target = _ref3.target;\n          return setDate(target === null || target === void 0 ? void 0 : target.value);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 145,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(components_input__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        type: \"time\",\n        name: \"time\",\n        placeholder: \"Hora\",\n        value: time || \"\",\n        onChange: function onChange(_ref4) {\n          var target = _ref4.target;\n          return setTime(target === null || target === void 0 ? void 0 : target.value);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 152,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(components_input__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        type: \"text\",\n        name: \"glucose\",\n        placeholder: \"Glicemia\",\n        value: glucose || \"\",\n        onChange: function onChange(_ref5) {\n          var target = _ref5.target;\n          return setGlucose(target === null || target === void 0 ? void 0 : target.value.replace(/\\D/, \"\"));\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 159,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(components_input__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        type: \"text\",\n        name: \"correction\",\n        placeholder: \"corre\\xE7\\xE3o\",\n        value: correction || \"\",\n        onChange: function onChange(_ref6) {\n          var target = _ref6.target;\n          return setCorrection(target === null || target === void 0 ? void 0 : target.value);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 166,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(components_input__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        type: \"text\",\n        name: \"pressure\",\n        placeholder: \"Press\\xE3o\",\n        value: pressure || \"\",\n        onChange: function onChange(_ref7) {\n          var target = _ref7.target;\n          return setPressure(target === null || target === void 0 ? void 0 : target.value.replace(/[A-Z]/gi, \"\"));\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 173,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(styles_styles__WEBPACK_IMPORTED_MODULE_3__.WrapperButtons, {\n        content: \"flex-end\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(components_button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n          type: \"submit\",\n          width: \"170px\",\n          text: documentId ? \"Atualizar\" : \"Salvar\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 183,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(components_button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n          type: \"button\",\n          width: \"170px\",\n          text: \"limpar\",\n          onClick: clearAllFields\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 188,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 182,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 144,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(components_table__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(components_list__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        newItem: newId || ''\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 198,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 197,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(components_modal__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n      statusModal: showModal,\n      onCloseModal: function onCloseModal(status) {\n        return setShowModal(status);\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 201,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(components_alert__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n      delay: 2000,\n      hiddenAlert: function hiddenAlert(status) {\n        return setStatusAlert({\n          msg: \"\",\n          hidden: !status,\n          type: \"warn\"\n        });\n      },\n      msg: statusAlert.msg,\n      hidden: statusAlert.hidden,\n      type: statusAlert.type\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 206,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 130,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Home, \"WfgVl9BXkah4vPvBKBdbgR6a9L4=\");\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFSixHQUFHLEVBQUUsRUFBUDtVQUFXQyxNQUFNLEVBQUUsQ0FBQ3dCLE1BQXBCO1VBQTRCdkIsSUFBSSxFQUFFO1FBQWxDLENBQUQsQ0FESDtNQUFBLENBRmY7TUFLRSxHQUFHLEVBQUVDLFdBQVcsQ0FBQ0gsR0FMbkI7TUFNRSxNQUFNLEVBQUVHLFdBQVcsQ0FBQ0YsTUFOdEI7TUFPRSxJQUFJLEVBQUVFLFdBQVcsQ0FBQ0Q7SUFQcEI7TUFBQTtNQUFBO01BQUE7SUFBQSxTQTVFRjtFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsU0FERjtBQXdGRCxDQWpNRDs7R0FBTXZCOztLQUFBQTtBQW1NTiwrREFBZUEsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybUV2ZW50LCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcbmltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0ICogYXMgU3R5bGVzIGZyb20gXCJzdHlsZXMvc3R5bGVzXCI7XG5pbXBvcnQgeyBJdGVtIH0gZnJvbSBcInR5cGVzL2xpc3RcIjtcblxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiY29tcG9uZW50cy9idXR0b25cIjtcbmltcG9ydCBJbnB1dCBmcm9tIFwiY29tcG9uZW50cy9pbnB1dFwiO1xuaW1wb3J0IExpc3QgZnJvbSBcImNvbXBvbmVudHMvbGlzdFwiO1xuaW1wb3J0IFRhYmxlIGZyb20gXCJjb21wb25lbnRzL3RhYmxlXCI7XG5pbXBvcnQgTW9kYWwgZnJvbSBcImNvbXBvbmVudHMvbW9kYWxcIjtcblxuaW1wb3J0IHtcbiAgZ2x1Y29zZUxhc3RUaHJlZURheXNcbn0gZnJvbSBcImxpYi9zZXJ2aWNlL2dsdWNvc2VcIjtcblxuaW1wb3J0IHsgRmFFeWUgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmltcG9ydCBEcm9wZG93bk1lbnUgZnJvbSBcImNvbXBvbmVudHMvZHJvcGRvd25cIjtcbmltcG9ydCBBbGVydCBmcm9tIFwiY29tcG9uZW50cy9hbGVydFwiO1xuaW1wb3J0IHsgQWxlcnRTdGF0ZSB9IGZyb20gXCJ0eXBlcy9hbGVydFwiO1xuaW1wb3J0IHsgVXNlTGlzdEdsdWNvc2VDb250ZXh0IH0gZnJvbSBcImNvbnRleHQvbGlzdC9jb250ZXh0TGlzdFwiO1xuaW1wb3J0IHsgdmFsaWRhdGlvbkZvcm0gfSBmcm9tIFwidXRpbHMvdmFsaWRhdGlvbkZvcm1cIjtcblxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBhZGRJdGVtR2x1Y29zZSxcbiAgICBkYXRlLFxuICAgIHRpbWUsXG4gICAgZ2x1Y29zZSxcbiAgICBjb3JyZWN0aW9uLFxuICAgIHByZXNzdXJlLFxuICAgIGRvY3VtZW50SWQsXG4gICAgbmV3SWQsXG4gICAgc2V0RGF0ZSxcbiAgICBzZXRUaW1lLFxuICAgIHNldEdsdWNvc2UsXG4gICAgc2V0Q29ycmVjdGlvbixcbiAgICBzZXRQcmVzc3VyZSxcbiAgICBzZXROZXdJZCxcbiAgICB1cGRhdGVJdGVtR0x1Y29zZSxcbiAgICBjbGVhckFsbEZpZWxkcyxcbiAgICBzZXRMaXN0SXRlbSxcbiAgICBnZXRBbGxMaXN0LFxuXG4gIH0gPSBVc2VMaXN0R2x1Y29zZUNvbnRleHQoKTtcblxuICBjb25zdCBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbc3RhdHVzQWxlcnQsIHNldFN0YXR1c0FsZXJ0XSA9IHVzZVN0YXRlPEFsZXJ0U3RhdGU+KHtcbiAgICBtc2c6IFwiXCIsXG4gICAgaGlkZGVuOiBmYWxzZSxcbiAgICB0eXBlOiBcIndhcm5cIixcbiAgfSk7XG5cbiAgY29uc3QgZmlsdGVyR2x1Y29zZSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnbHVjb3NlTGFzdFRocmVlRGF5cygpO1xuICAgIHNldExpc3RJdGVtKHJlc3VsdCk7XG4gIH07XG5cblxuICBjb25zdCBjYW5BZGRGaWVsZCA9ICgpID0+IHtcbiAgICBjb25zdCBpc0ZpbGwgPSAhZGF0ZSB8fCAhdGltZSB8fCAhZ2x1Y29zZTtcbiAgICBjb25zdCBtb250aEN1cnJlbnQgPSBuZXcgRGF0ZSgpLmdldE1vbnRoKCkgKyAxO1xuICAgIGNvbnN0IG1vbnRoRm9ybSA9IE51bWJlcihkYXRlPy5zcGxpdChcIi1cIilbMV0pO1xuXG4gICAgaWYgKGlzRmlsbCkge1xuICAgICAgc2V0U3RhdHVzQWxlcnQoe1xuICAgICAgICBtc2c6IFwiT3MgY2FtcG8gZGF0ZSwgaG9yYSBvdSBnbGljZW1pYSBkZXZlbSBzZXIgcHJlZW5jaGlkb3MhXCIsXG4gICAgICAgIGhpZGRlbjogdHJ1ZSxcbiAgICAgICAgdHlwZTogXCJ3YXJuXCIsXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAobW9udGhGb3JtID4gbW9udGhDdXJyZW50KSB7XG4gICAgICBzZXRTdGF0dXNBbGVydCh7XG4gICAgICAgIG1zZzogXCJOw6NvIMOpIHBvc3NpdmVsIGxhbsOnYXIgZGF0YXMgZnV0dXJhc1wiLFxuICAgICAgICBoaWRkZW46IHRydWUsXG4gICAgICAgIHR5cGU6IFwid2FyblwiLFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgY29uc3QgX2hhbmRsZU9uU3VibWl0ID0gYXN5bmMgKGV2ZW50OiBGb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgeyBzZW5kLCBtc2cgfSA9IHZhbGlkYXRpb25Gb3JtKHsgZGF0ZSwgZ2x1Y29zZSwgdGltZSB9KVxuICAgIGlmICghc2VuZCkge1xuICAgICAgc2V0U3RhdHVzQWxlcnQoe1xuICAgICAgICBtc2csXG4gICAgICAgIGhpZGRlbjogdHJ1ZSxcbiAgICAgICAgdHlwZTogXCJ3YXJuXCIsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBjb25zdCBtc2cgPSBkb2N1bWVudElkXG4gICAgLy8gICA/IFwiQXR1YWxpemFkbyBjb20gc3VjZXNzbyFcIlxuICAgIC8vICAgOiBcIkFkaWNpb25hZG8gY29tIHN1Y2Vzc28hXCI7XG5cbiAgICBjb25zdCBuZXdJdGVtOiBJdGVtID0ge1xuICAgICAgaWQ6IHV1aWR2NCgpLFxuICAgICAgZGF0ZSxcbiAgICAgIHRpbWUsXG4gICAgICBnbHVjb3NlLFxuICAgICAgY29ycmVjdGlvbixcbiAgICAgIHByZXNzdXJlLFxuICAgIH07XG5cbiAgICBzZXROZXdJZChuZXdJdGVtLmlkIGFzIHN0cmluZyk7XG5cbiAgICBkb2N1bWVudElkID8gdXBkYXRlSXRlbUdMdWNvc2UoZG9jdW1lbnRJZCwgbmV3SXRlbSkgOiBhZGRJdGVtR2x1Y29zZShuZXdJdGVtKTtcblxuICAgIHNldFN0YXR1c0FsZXJ0KHtcbiAgICAgIG1zZyxcbiAgICAgIGhpZGRlbjogdHJ1ZSxcbiAgICAgIHR5cGU6IFwic3VjZXNzXCIsXG4gICAgfSk7XG4gICAgY2xlYXJBbGxGaWVsZHMoKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVGaWx0ZXIgPSAodmFsdWU6IHN0cmluZykgPT4ge1xuICAgIGlmICh2YWx1ZSA9PT0gXCJhbGxcIikgcmV0dXJuIGdldEFsbExpc3QoKTtcbiAgICBpZiAodmFsdWUgPT09IFwibGFzdC0zLWRheXNcIikgcmV0dXJuIGZpbHRlckdsdWNvc2UoKTtcbiAgfTtcblxuXG5cbiAgcmV0dXJuIChcbiAgICA8U3R5bGVzLkNvbnRhaW5lcj5cblxuICAgICAgPFN0eWxlcy5XcmFwcGVyQnV0dG9ucz5cbiAgICAgICAgPERyb3Bkb3duTWVudSBvcHRpb25TZWxlY3RlZD17aGFuZGxlRmlsdGVyfSBjbGFzc05hbWU9XCJkcm9wZG93blwiIC8+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICB3aWR0aD1cIjE3MHB4XCJcbiAgICAgICAgICBoZWlnaHQ9XCJhdXRvXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9kYWwoIXNob3dNb2RhbCl9XG4gICAgICAgICAgdGV4dD1cIkNvbnN1bHRhciBUYWJlbGEgZGUgR2xpY29zZVwiXG4gICAgICAgICAgaWNvbj17PEZhRXllIHdpZHRoPVwiNTBweFwiIGhlaWdodD1cIjEwMHB4XCIgLz59XG4gICAgICAgIC8+XG4gICAgICA8L1N0eWxlcy5XcmFwcGVyQnV0dG9ucz5cblxuICAgICAgPFN0eWxlcy5Gb3JtIGFjdGlvbj1cIi9cIiBvblN1Ym1pdD17X2hhbmRsZU9uU3VibWl0fT5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgdHlwZT1cImRhdGVcIlxuICAgICAgICAgIG5hbWU9XCJkYXRlXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRhdGFcIlxuICAgICAgICAgIHZhbHVlPXtkYXRlIHx8IFwiXCJ9XG4gICAgICAgICAgb25DaGFuZ2U9eyh7IHRhcmdldCB9KSA9PiBzZXREYXRlKHRhcmdldD8udmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICB0eXBlPVwidGltZVwiXG4gICAgICAgICAgbmFtZT1cInRpbWVcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSG9yYVwiXG4gICAgICAgICAgdmFsdWU9e3RpbWUgfHwgXCJcIn1cbiAgICAgICAgICBvbkNoYW5nZT17KHsgdGFyZ2V0IH0pID0+IHNldFRpbWUodGFyZ2V0Py52YWx1ZSl9XG4gICAgICAgIC8+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBuYW1lPVwiZ2x1Y29zZVwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJHbGljZW1pYVwiXG4gICAgICAgICAgdmFsdWU9e2dsdWNvc2UgfHwgXCJcIn1cbiAgICAgICAgICBvbkNoYW5nZT17KHsgdGFyZ2V0IH0pID0+IHNldEdsdWNvc2UodGFyZ2V0Py52YWx1ZS5yZXBsYWNlKC9cXEQvLCBcIlwiKSl9XG4gICAgICAgIC8+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBuYW1lPVwiY29ycmVjdGlvblwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJjb3JyZcOnw6NvXCJcbiAgICAgICAgICB2YWx1ZT17Y29ycmVjdGlvbiB8fCBcIlwifVxuICAgICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQgfSkgPT4gc2V0Q29ycmVjdGlvbih0YXJnZXQ/LnZhbHVlKX1cbiAgICAgICAgLz5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIG5hbWU9XCJwcmVzc3VyZVwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJQcmVzc8Ojb1wiXG4gICAgICAgICAgdmFsdWU9e3ByZXNzdXJlIHx8IFwiXCJ9XG4gICAgICAgICAgb25DaGFuZ2U9eyh7IHRhcmdldCB9KSA9PlxuICAgICAgICAgICAgc2V0UHJlc3N1cmUodGFyZ2V0Py52YWx1ZS5yZXBsYWNlKC9bQS1aXS9naSwgXCJcIikpXG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgICA8U3R5bGVzLldyYXBwZXJCdXR0b25zIGNvbnRlbnQ9XCJmbGV4LWVuZFwiPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgd2lkdGg9XCIxNzBweFwiXG4gICAgICAgICAgICB0ZXh0PXtkb2N1bWVudElkID8gXCJBdHVhbGl6YXJcIiA6IFwiU2FsdmFyXCJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIHdpZHRoPVwiMTcwcHhcIlxuICAgICAgICAgICAgdGV4dD1cImxpbXBhclwiXG4gICAgICAgICAgICBvbkNsaWNrPXtjbGVhckFsbEZpZWxkc31cbiAgICAgICAgICAvPlxuICAgICAgICA8L1N0eWxlcy5XcmFwcGVyQnV0dG9ucz5cbiAgICAgIDwvU3R5bGVzLkZvcm0+XG5cbiAgICAgIDxUYWJsZT5cbiAgICAgICAgPExpc3QgbmV3SXRlbT17bmV3SWQgfHwgJyd9IC8+XG4gICAgICA8L1RhYmxlPlxuXG4gICAgICA8TW9kYWxcbiAgICAgICAgc3RhdHVzTW9kYWw9e3Nob3dNb2RhbH1cbiAgICAgICAgb25DbG9zZU1vZGFsPXsoc3RhdHVzKSA9PiBzZXRTaG93TW9kYWwoc3RhdHVzKX1cbiAgICAgIC8+XG5cbiAgICAgIDxBbGVydFxuICAgICAgICBkZWxheT17MjAwMH1cbiAgICAgICAgaGlkZGVuQWxlcnQ9eyhzdGF0dXMpID0+XG4gICAgICAgICAgc2V0U3RhdHVzQWxlcnQoeyBtc2c6IFwiXCIsIGhpZGRlbjogIXN0YXR1cywgdHlwZTogXCJ3YXJuXCIgfSlcbiAgICAgICAgfVxuICAgICAgICBtc2c9e3N0YXR1c0FsZXJ0Lm1zZ31cbiAgICAgICAgaGlkZGVuPXtzdGF0dXNBbGVydC5oaWRkZW59XG4gICAgICAgIHR5cGU9e3N0YXR1c0FsZXJ0LnR5cGV9XG4gICAgICAvPlxuICAgIDwvU3R5bGVzLkNvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG5cblxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidjQiLCJ1dWlkdjQiLCJTdHlsZXMiLCJCdXR0b24iLCJJbnB1dCIsIkxpc3QiLCJUYWJsZSIsIk1vZGFsIiwiZ2x1Y29zZUxhc3RUaHJlZURheXMiLCJGYUV5ZSIsIkRyb3Bkb3duTWVudSIsIkFsZXJ0IiwiVXNlTGlzdEdsdWNvc2VDb250ZXh0IiwidmFsaWRhdGlvbkZvcm0iLCJIb21lIiwiYWRkSXRlbUdsdWNvc2UiLCJkYXRlIiwidGltZSIsImdsdWNvc2UiLCJjb3JyZWN0aW9uIiwicHJlc3N1cmUiLCJkb2N1bWVudElkIiwibmV3SWQiLCJzZXREYXRlIiwic2V0VGltZSIsInNldEdsdWNvc2UiLCJzZXRDb3JyZWN0aW9uIiwic2V0UHJlc3N1cmUiLCJzZXROZXdJZCIsInVwZGF0ZUl0ZW1HTHVjb3NlIiwiY2xlYXJBbGxGaWVsZHMiLCJzZXRMaXN0SXRlbSIsImdldEFsbExpc3QiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJtc2ciLCJoaWRkZW4iLCJ0eXBlIiwic3RhdHVzQWxlcnQiLCJzZXRTdGF0dXNBbGVydCIsImZpbHRlckdsdWNvc2UiLCJyZXN1bHQiLCJjYW5BZGRGaWVsZCIsImlzRmlsbCIsIm1vbnRoQ3VycmVudCIsIkRhdGUiLCJnZXRNb250aCIsIm1vbnRoRm9ybSIsIk51bWJlciIsInNwbGl0IiwiX2hhbmRsZU9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNlbmQiLCJuZXdJdGVtIiwiaWQiLCJoYW5kbGVGaWx0ZXIiLCJ2YWx1ZSIsInRhcmdldCIsInJlcGxhY2UiLCJzdGF0dXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});