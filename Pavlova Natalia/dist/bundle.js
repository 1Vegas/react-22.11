/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/click.css":
/*!***********************!*\
  !*** ./src/click.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/click.css?");

/***/ }),

/***/ "./src/click.js":
/*!**********************!*\
  !*** ./src/click.js ***!
  \**********************/
/*! exports provided: Click */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Click\", function() { return Click; });\n/* harmony import */ var _click_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./click.css */ \"./src/click.css\");\n/* harmony import */ var _click_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_click_css__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass Click {\n\n    lookData() {\n        let date = new Date();\n        let day = date.getDate();\n        if (day < 10) {\n            day = `0${day}`;\n        }\n        let month = date.getMonth();\n        month += 1;\n        if (month < 10) {\n            month = `0${month}`;\n        }\n        const year = date.getFullYear();\n        return `${day}.${month}.${year}`;\n    }\n    onClick() {\n        document.getElementById('button').addEventListener('click', event => {\n            const data = this.lookData();\n            document.getElementById('data').innerHTML = data;\n        });\n    }\n}\n\n//# sourceURL=webpack:///./src/click.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ \"./src/user.js\");\n/* harmony import */ var _click__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./click */ \"./src/click.js\");\n\n\n\nwindow.onload = () => {\n    const user = new _user__WEBPACK_IMPORTED_MODULE_0__[\"User\"]('Василий', 'Иванов', 'Петрович');\n    user.sayName();\n    const click = new _click__WEBPACK_IMPORTED_MODULE_1__[\"Click\"]();\n    click.onClick();\n};\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/user.css":
/*!**********************!*\
  !*** ./src/user.css ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/user.css?");

/***/ }),

/***/ "./src/user.js":
/*!*********************!*\
  !*** ./src/user.js ***!
  \*********************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"User\", function() { return User; });\n/* harmony import */ var _user_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.css */ \"./src/user.css\");\n/* harmony import */ var _user_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_user_css__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass User {\n    constructor(name, surname, middleName) {\n        this.name = name;\n        this.surname = surname;\n        this.middleName = middleName;\n        this.regName = /^[a-zа-я\\-]{1,30}$/i;\n        this.regData = null;\n    }\n\n    sayName() {\n        if (this.validParam()) {\n            const text = document.getElementById('name');\n            text.innerHTML = `<p class=\"text\">${this.surname} ${this.name} ${this.middleName}</p>`;\n            return;\n        }\n    }\n    validParam() {\n        if (this.regName.test(this.name) && this.regName.test(this.surname) && this.regName.test(this.middleName)) {\n            return true;\n        }\n    }\n\n}\n\n//# sourceURL=webpack:///./src/user.js?");

/***/ })

/******/ });