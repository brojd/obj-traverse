(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Library", [], factory);
	else if(typeof exports === 'object')
		exports["Library"] = factory();
	else
		root["Library"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.findAll = exports.findFirst = undefined;
	
	var _findFirst = __webpack_require__(1);
	
	var _findAll = __webpack_require__(2);
	
	exports.findFirst = _findFirst.findFirst;
	exports.findAll = _findAll.findAll;

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/* It iterates through each level and if finds object that has prop and value specified in objToFindBy argument,
	it stops the walk and return the object */
	
	var findFirst = function findFirst(tree, childrenKey, objToFindBy) {
	  var objToReturn = false;
	  var found = false;
	  function innerFunc(tree, childrenKey, objToFindBy) {
	    var findKey = Object.keys(objToFindBy)[0];
	    var findValue = objToFindBy[findKey];
	    if (tree[findKey] === findValue) {
	      objToReturn = tree;
	      return;
	    } else if (tree[childrenKey]) {
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;
	
	      try {
	        for (var _iterator = tree[childrenKey][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var n = _step.value;
	
	          if (n[findKey] === findValue) {
	            objToReturn = n;
	            found = true;
	            break;
	          } else if (n.hasOwnProperty(childrenKey)) {
	            if (!found) {
	              innerFunc(n, childrenKey, objToFindBy);
	            }
	          }
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }
	
	      return;
	    }
	  }
	  if (!found) {
	    innerFunc(tree, childrenKey, objToFindBy);
	  }
	  return objToReturn;
	};
	
	exports.findFirst = findFirst;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var findAll = function findAll() {
	  return true;
	};
	
	exports.findAll = findAll;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=Library.js.map