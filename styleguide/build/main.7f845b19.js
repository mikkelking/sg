(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/react-styleguidist/loaders/examples-loader.js!./src/components/button/Button.md":
/*!******************************************************************************************************!*\
  !*** ./node_modules/react-styleguidist/loaders/examples-loader.js!./src/components/button/Button.md ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nif (false) {}\n\nvar requireMap = { 'react': __webpack_require__(/*! react */ \"./node_modules/react/index.js\") };\nvar requireInRuntimeBase = __webpack_require__(/*! ./node_modules/react-styleguidist/loaders/utils/client/requireInRuntime */ \"./node_modules/react-styleguidist/loaders/utils/client/requireInRuntime.js\");\nvar requireInRuntime = requireInRuntimeBase.bind(null, requireMap);\nvar evalInContextBase = __webpack_require__(/*! ./node_modules/react-styleguidist/loaders/utils/client/evalInContext */ \"./node_modules/react-styleguidist/loaders/utils/client/evalInContext.js\");\nvar evalInContext = evalInContextBase.bind(null, \"var React = require('react');\", requireInRuntime);\n\nmodule.exports = [{\n        'type': 'code',\n        'content': '  <Button> Hello </Button>\\n  <Button style={{color: \\'white\\'}}> Hello </Button>',\n        'settings': {},\n        'evalInContext': evalInContext\n    }]\n\t\n\n//# sourceURL=webpack:///./src/components/button/Button.md?./node_modules/react-styleguidist/loaders/examples-loader.js");

/***/ }),

/***/ "./node_modules/react-styleguidist/loaders/props-loader.js!./src/components/button/Button.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/react-styleguidist/loaders/props-loader.js!./src/components/button/Button.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nif (false) {}\n\nmodule.exports = {\n    'methods': [],\n    'doclets': {},\n    'displayName': 'Button',\n    'examples': __webpack_require__(/*! !./node_modules/react-styleguidist/loaders/examples-loader.js!./src/components/button/Button.md */ \"./node_modules/react-styleguidist/loaders/examples-loader.js!./src/components/button/Button.md\")\n}\n\t\n\n//# sourceURL=webpack:///./src/components/button/Button.js?./node_modules/react-styleguidist/loaders/props-loader.js");

/***/ }),

/***/ "./src/components/button/Button.js":
/*!*****************************************!*\
  !*** ./src/components/button/Button.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_mikkel_sg_sg2_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _Users_mikkel_sg_sg2_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_Button_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/Button.style */ \"./src/styles/Button.style.js\");\n\n\n\nfunction _templateObject() {\n  var data = Object(_Users_mikkel_sg_sg2_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\", \"\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\nfunction Button(_ref) {\n  var className = _ref.className,\n      children = _ref.children,\n      props = Object(_Users_mikkel_sg_sg2_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref, [\"className\", \"children\"]);\n\n  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"button\", Object.assign({\n    className: className\n  }, props), children);\n}\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Button)(_templateObject(), _styles_Button_style__WEBPACK_IMPORTED_MODULE_4__[\"default\"]));\n\n//# sourceURL=webpack:///./src/components/button/Button.js?");

/***/ }),

/***/ "./src/styles/Button.style.js":
/*!************************************!*\
  !*** ./src/styles/Button.style.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** @component */\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"\\n  border: 4px solid #E5E5E5;\\n  min-height: 50px;\\n  min-width: 100px;\\n  background: white;\\n  color: red;\\n  font-size: 14px;\\n  background-color: black;\\n  transition: all 0.25s;\\n  outline: none;\\n  &:hover {\\n    cursor: pointer;\\n    background: #888;\\n  }\\n  &:focus, &:active {\\n    background: #DBDBDB;\\n    border: 1px solid #7F7F7F;\\n  }\\n\");\n\n//# sourceURL=webpack:///./src/styles/Button.style.js?");

/***/ }),

/***/ 0:
/*!*********************************************************!*\
  !*** multi ./node_modules/react-styleguidist/lib/index ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /Users/mikkel/sg/sg2/node_modules/react-styleguidist/lib/index */\"./node_modules/react-styleguidist/lib/index.js\");\n\n\n//# sourceURL=webpack:///multi_./node_modules/react-styleguidist/lib/index?");

/***/ })

},[[0,"runtime~main",0]]]);