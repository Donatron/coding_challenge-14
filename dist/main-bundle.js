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

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./src/style.css":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/postcss-loader/src!./src/style.css ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Imports\nvar urlEscape = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/url-escape.js */ \"./node_modules/css-loader/dist/runtime/url-escape.js\");\nvar ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ./fonts/game-of-thrones.ttf */ \"./src/fonts/game-of-thrones.ttf\"));\nvar ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(/*! ./img/covers/snow.jpg */ \"./src/img/covers/snow.jpg\"));\n\n// Module\nexports.push([module.i, \"@font-face {\\n  font-family: \\\"game-of-thrones\\\";\\n  src: url(\" + ___CSS_LOADER_URL___0___ + \") format(\\\"truetype\\\");\\n}\\n\\n* {\\n  border: 0;\\n  margin: 0;\\n  padding: 0;\\n}\\n\\nbody {\\n  min-height: 100vh;\\n  width: 100%;\\n  background-image: url(\" + ___CSS_LOADER_URL___1___ + \");\\n  background-size: cover;\\n  background-repeat: no-repeat;\\n  background-position: center;\\n  font-family: \\\"game-of-thrones\\\";\\n  display: inline-block;\\n  letter-spacing: 0.1em;\\n}\\n\\n.content {\\n  width: 80%;\\n  margin-left: auto;\\n  margin-right: auto;\\n  min-height: 100vh;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-orient: vertical;\\n  -webkit-box-direction: normal;\\n      -ms-flex-direction: column;\\n          flex-direction: column;\\n  -ms-flex-line-pack: center;\\n      align-content: center;\\n  padding: 30px 0;\\n}\\n\\n.header {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-orient: vertical;\\n  -webkit-box-direction: normal;\\n      -ms-flex-direction: column;\\n          flex-direction: column;\\n  text-align: center;\\n  width: 100%;\\n  height: 100%;\\n  color: #1f1f1f;\\n}\\n\\nh1 {\\n  padding: 1rem;\\n}\\n\\n.game-info {\\n  width: 100%;\\n  display: grid;\\n  grid-template-columns: 1fr 4fr 1fr;\\n  padding: 30px 0;\\n  color: white;\\n}\\n\\n#game-button {\\n  color: white;\\n  padding: 10px 10px;\\n  border: solid 1px #f5f5f5;\\n  border-radius: 3px;\\n  font-family: \\\"game-of-thrones\\\";\\n  background-color: transparent;\\n  margin-bottom: 0;\\n  outline: none;\\n  width: 120px;\\n  letter-spacing: 0.1em;\\n  -webkit-transition: all 0.1s ease-in;\\n  -o-transition: all 0.1s ease-in;\\n  transition: all 0.1s ease-in;\\n}\\n\\n#game-button:active {\\n  -webkit-transform: scale(0.9);\\n      -ms-transform: scale(0.9);\\n          transform: scale(0.9);\\n}\\n\\n.stats,\\n.success {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-orient: vertical;\\n  -webkit-box-direction: normal;\\n      -ms-flex-direction: column;\\n          flex-direction: column;\\n  background-color: rgba(0, 0, 0, 0.2);\\n  border-radius: 3px;\\n  padding: 20px 12px;\\n  line-height: 1.25rem;\\n}\\n\\n.stats {\\n  height: 100px;\\n  width: 200px;\\n  visibility: hidden;\\n}\\n\\n.stats h4,\\n.success h4 {\\n  margin-bottom: 0.75rem;\\n  text-align: center;\\n}\\n\\n.stats div {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-orient: horizontal;\\n  -webkit-box-direction: normal;\\n      -ms-flex-direction: row;\\n          flex-direction: row;\\n  -ms-flex-pack: distribute;\\n      justify-content: space-around;\\n  padding: 0;\\n}\\n\\n.stats div h6 {\\n  margin-right: 20px;\\n}\\n\\n.board,\\n.success {\\n  width: 70%;\\n  margin-left: auto;\\n  margin-right: auto;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-orient: vertical;\\n  -webkit-box-direction: normal;\\n      -ms-flex-direction: column;\\n          flex-direction: column;\\n  -webkit-box-pack: center;\\n      -ms-flex-pack: center;\\n          justify-content: center;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  text-align: center;\\n}\\n\\n.success p {\\n  line-height: 1.75em;\\n}\\n\\n/* .tile-container {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: space-around;\\n  background-color: rgba(0, 0, 0, 0.3);\\n} */\\n\\n.tile-container {\\n  display: grid;\\n  grid-template-columns: repeat(4, 1fr);\\n}\\n\\n.tile {\\n  height: 100px;\\n  width: 100px;\\n  border-radius: 5px;\\n  -webkit-box-shadow: 6px 10px 54px -3px rgba(0, 0, 0, 0.75);\\n          box-shadow: 6px 10px 54px -3px rgba(0, 0, 0, 0.75);\\n}\\n\\n.side-a,\\n.side-b {\\n  -webkit-backface-visibility: hidden;\\n          backface-visibility: hidden;\\n}\\n\\n.side-a {\\n  position: relative;\\n  background: -webkit-gradient(\\n    linear,\\n    left top, left bottom,\\n    from(rgba(255, 255, 255, 0.3)),\\n    color-stop(30%, rgba(246, 246, 246, 0.5)),\\n    to(rgba(10, 2, 10, 0.8))\\n  );\\n  background: -webkit-linear-gradient(\\n    top,\\n    rgba(255, 255, 255, 0.3) 0%,\\n    rgba(246, 246, 246, 0.5) 30%,\\n    rgba(10, 2, 10, 0.8) 100%\\n  );\\n  background: -o-linear-gradient(\\n    top,\\n    rgba(255, 255, 255, 0.3) 0%,\\n    rgba(246, 246, 246, 0.5) 30%,\\n    rgba(10, 2, 10, 0.8) 100%\\n  );\\n  background: linear-gradient(\\n    to bottom,\\n    rgba(255, 255, 255, 0.3) 0%,\\n    rgba(246, 246, 246, 0.5) 30%,\\n    rgba(10, 2, 10, 0.8) 100%\\n  );\\n}\\n\\n.side-b {\\n  position: absolute;\\n  border-radius: 5px;\\n  text-align: center;\\n  top: 0;\\n  bottom: 0;\\n  left: 0;\\n  right: 0;\\n  -webkit-transform: rotateY(180deg);\\n          transform: rotateY(180deg);\\n  background: rgba(0, 0, 0, 0);\\n  overflow: hidden;\\n}\\n\\n.side-b img {\\n  width: 100%;\\n  -ms-flex-item-align: center;\\n      align-self: center;\\n  border-radius: 5px;\\n}\\n\\n.card {\\n  -webkit-transition: -webkit-transform 0.2s ease-out;\\n  transition: -webkit-transform 0.2s ease-out;\\n  -o-transition: transform 0.2s ease-out;\\n  transition: transform 0.2s ease-out;\\n  transition: transform 0.2s ease-out, -webkit-transform 0.2s ease-out;\\n  -webkit-transform-style: preserve-3d;\\n          transform-style: preserve-3d;\\n  margin: 10px;\\n}\\n\\nfooter {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-orient: horizontal;\\n  -webkit-box-direction: normal;\\n      -ms-flex-direction: row;\\n          flex-direction: row;\\n  -webkit-box-pack: center;\\n      -ms-flex-pack: center;\\n          justify-content: center;\\n  padding: 30px 0;\\n  background-color: rgba(0, 0, 0, 0.2);\\n  color: white;\\n}\\n\\nfooter p {\\n  font-size: 0.5em;\\n  letter-spacing: 0.75em;\\n}\\n\\nfooter a {\\n  text-decoration: none;\\n  color: inherit;\\n  -webkit-transition: all 0.3s ease-in;\\n  -o-transition: all 0.3s ease-in;\\n  transition: all 0.3s ease-in;\\n}\\n\\nfooter a:hover {\\n  color: #1f1f1f;\\n  opacity: 0.65;\\n}\\n\\n@media screen and (max-width: 1080px) {\\n  .game-info {\\n    display: -webkit-box;\\n    display: -ms-flexbox;\\n    display: flex;\\n    -webkit-box-orient: vertical;\\n    -webkit-box-direction: normal;\\n        -ms-flex-direction: column;\\n            flex-direction: column;\\n    -webkit-box-align: center;\\n        -ms-flex-align: center;\\n            align-items: center;\\n  }\\n\\n  .board {\\n    margin: 20px 0;\\n  }\\n\\n  .tile {\\n    height: 75px;\\n    width: 75px;\\n  }\\n\\n  .success,\\n  .stats {\\n    width: 80%;\\n  }\\n\\n  footer {\\n    font-size: 1rem;\\n  }\\n}\\n\\n@media screen and (max-width: 720px) {\\n  .tile {\\n    height: 50px;\\n    width: 50px;\\n  }\\n\\n  .success,\\n  .stats {\\n    width: 100%;\\n  }\\n\\n  footer {\\n    font-size: 0.75rem;\\n  }\\n}\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/style.css?./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/postcss-loader/src");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return '@media ' + item[2] + '{' + content + '}';\n      } else {\n        return content;\n      }\n    }).join('');\n  }; // import a list of modules into the list\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (i = 0; i < modules.length; i++) {\n      var item = modules[i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || '';\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n  return '/*# ' + data + ' */';\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/url-escape.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/url-escape.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function escape(url, needQuotes) {\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || needQuotes) {\n    return '\"' + url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n') + '\"';\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/url-escape.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target, parent) {\n  if (parent){\n    return parent.querySelector(target);\n  }\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target, parent) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target, parent);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertAt.before, target);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\n\tif(options.attrs.nonce === undefined) {\n\t\tvar nonce = getNonce();\n\t\tif (nonce) {\n\t\t\toptions.attrs.nonce = nonce;\n\t\t}\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction getNonce() {\n\tif (false) {}\n\n\treturn __webpack_require__.nc;\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = typeof options.transform === 'function'\n\t\t ? options.transform(obj.css) \n\t\t : options.transform.default(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn't a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn't a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn't a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^\"(.*)\"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^'(.*)'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

/***/ }),

/***/ "./src/fonts/game-of-thrones.ttf":
/*!***************************************!*\
  !*** ./src/fonts/game-of-thrones.ttf ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"fonts/game-of-thrones.ttf\";\n\n//# sourceURL=webpack:///./src/fonts/game-of-thrones.ttf?");

/***/ }),

/***/ "./src/img/characters/arya-stark.jpg":
/*!*******************************************!*\
  !*** ./src/img/characters/arya-stark.jpg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/characters/arya-stark.jpg\";\n\n//# sourceURL=webpack:///./src/img/characters/arya-stark.jpg?");

/***/ }),

/***/ "./src/img/characters/cersei-lannister.jpg":
/*!*************************************************!*\
  !*** ./src/img/characters/cersei-lannister.jpg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/characters/cersei-lannister.jpg\";\n\n//# sourceURL=webpack:///./src/img/characters/cersei-lannister.jpg?");

/***/ }),

/***/ "./src/img/characters/danaerys-targaeryan.jpg":
/*!****************************************************!*\
  !*** ./src/img/characters/danaerys-targaeryan.jpg ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/characters/danaerys-targaeryan.jpg\";\n\n//# sourceURL=webpack:///./src/img/characters/danaerys-targaeryan.jpg?");

/***/ }),

/***/ "./src/img/characters/jaime-lannister.jpg":
/*!************************************************!*\
  !*** ./src/img/characters/jaime-lannister.jpg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/characters/jaime-lannister.jpg\";\n\n//# sourceURL=webpack:///./src/img/characters/jaime-lannister.jpg?");

/***/ }),

/***/ "./src/img/characters/jon-snow.jpg":
/*!*****************************************!*\
  !*** ./src/img/characters/jon-snow.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/characters/jon-snow.jpg\";\n\n//# sourceURL=webpack:///./src/img/characters/jon-snow.jpg?");

/***/ }),

/***/ "./src/img/characters/ned-stark.jpg":
/*!******************************************!*\
  !*** ./src/img/characters/ned-stark.jpg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/characters/ned-stark.jpg\";\n\n//# sourceURL=webpack:///./src/img/characters/ned-stark.jpg?");

/***/ }),

/***/ "./src/img/characters/sansa-stark.jpg":
/*!********************************************!*\
  !*** ./src/img/characters/sansa-stark.jpg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/characters/sansa-stark.jpg\";\n\n//# sourceURL=webpack:///./src/img/characters/sansa-stark.jpg?");

/***/ }),

/***/ "./src/img/characters/tyrion-lannister.jpg":
/*!*************************************************!*\
  !*** ./src/img/characters/tyrion-lannister.jpg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/characters/tyrion-lannister.jpg\";\n\n//# sourceURL=webpack:///./src/img/characters/tyrion-lannister.jpg?");

/***/ }),

/***/ "./src/img/covers/iron-throne.png":
/*!****************************************!*\
  !*** ./src/img/covers/iron-throne.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/covers/iron-throne.png\";\n\n//# sourceURL=webpack:///./src/img/covers/iron-throne.png?");

/***/ }),

/***/ "./src/img/covers/snow.jpg":
/*!*********************************!*\
  !*** ./src/img/covers/snow.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/covers/snow.jpg\";\n\n//# sourceURL=webpack:///./src/img/covers/snow.jpg?");

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"index.html\";\n\n//# sourceURL=webpack:///./src/index.html?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Import CSS and Font\n__webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n__webpack_require__(/*! ./fonts/game-of-thrones.ttf */ \"./src/fonts/game-of-thrones.ttf\"); // Import HTML file\n\n\n__webpack_require__(/*! ./index.html */ \"./src/index.html\"); // Import card images\n\n\n__webpack_require__(/*! ./img/characters/arya-stark.jpg */ \"./src/img/characters/arya-stark.jpg\");\n\n__webpack_require__(/*! ./img/characters/cersei-lannister.jpg */ \"./src/img/characters/cersei-lannister.jpg\");\n\n__webpack_require__(/*! ./img/characters/danaerys-targaeryan.jpg */ \"./src/img/characters/danaerys-targaeryan.jpg\");\n\n__webpack_require__(/*! ./img/characters/jaime-lannister.jpg */ \"./src/img/characters/jaime-lannister.jpg\");\n\n__webpack_require__(/*! ./img/characters/jon-snow.jpg */ \"./src/img/characters/jon-snow.jpg\");\n\n__webpack_require__(/*! ./img/characters/ned-stark.jpg */ \"./src/img/characters/ned-stark.jpg\");\n\n__webpack_require__(/*! ./img/characters/sansa-stark.jpg */ \"./src/img/characters/sansa-stark.jpg\");\n\n__webpack_require__(/*! ./img/characters/tyrion-lannister.jpg */ \"./src/img/characters/tyrion-lannister.jpg\");\n\n__webpack_require__(/*! ./img/covers/iron-throne.png */ \"./src/img/covers/iron-throne.png\"); // Declare variables for document elements\n\n\nvar footer = document.querySelector(\"#footer\");\nvar moves = document.querySelector(\"#moves\");\nvar matches = document.querySelector(\"#matches\");\nvar time = document.querySelector(\"#time\");\nvar stats = document.querySelector(\".stats\");\nvar gameButton = document.querySelector(\"#game-button\");\nvar boardElement = document.querySelector(\".board\"); // Declare variables for game information\n\nvar numberOfMoves = 0;\nvar numberOfMatches = 0;\nvar timeElapsed = \"00 : 00\";\nvar flippedCards = 0;\nvar cardOneSource;\nvar cardTwoSource;\nvar cardOneId;\nvar cardTwoId;\nvar match = false;\nvar gameTimer;\nvar timer;\nvar gameTime;\nvar timerRunning = false;\nvar gameStatus = \"Stopped\"; // Create array of card image source files\n\nvar imagesArray = [\"arya-stark.jpg\", \"cersei-lannister.jpg\", \"danaerys-targaeryan.jpg\", \"jaime-lannister.jpg\", \"jon-snow.jpg\", \"ned-stark.jpg\", \"sansa-stark.jpg\", \"tyrion-lannister.jpg\", \"arya-stark.jpg\", \"cersei-lannister.jpg\", \"danaerys-targaeryan.jpg\", \"jaime-lannister.jpg\", \"jon-snow.jpg\", \"ned-stark.jpg\", \"sansa-stark.jpg\", \"tyrion-lannister.jpg\"]; // Get all available character names\n\nvar getCharacterNames = function getCharacterNames() {\n  var characters = [];\n\n  for (var _i = 0; _i < imagesArray.length; _i++) {\n    var image = imagesArray[_i];\n    characters.push(image);\n  }\n\n  return characters;\n};\n\nvar characters = getCharacterNames(); // Create array of random characters;\n\nvar getRandomCharacters = function getRandomCharacters() {\n  var randomCharacters = [];\n\n  while (characters.length) {\n    var index = Math.floor(Math.random(characters.length) * characters.length);\n    randomCharacters.push(characters[index]);\n    characters.splice(index, 1);\n  }\n\n  return randomCharacters;\n}; // Assign random characters to variable for creation of game board\n\n\nvar randomCharacters = getRandomCharacters(); // Add rows to Game Board\n\nvar createRows = function createRows(n) {\n  // Create HTML variable\n  var html = \"\"; // Iternate 'n' times and create a row for each iteration\n\n  for (var i = 1; i <= n; i++) {\n    html += \"<div class=\\\"row-\".concat(i, \"\\\"><div class=\\\"tile-container\\\"></div></div>\");\n  }\n\n  boardElement.innerHTML = html;\n}; // Declare function to create cards\n\n\nvar createCard = function createCard(src, id) {\n  var html = \"<div class=\\\"card\\\" id=\\\"card-\".concat(id, \"\\\">\");\n  html += '<img src=\"img/covers/iron-throne.png\" alt=\"\" class=\"tile side-a\" />';\n  html += '<div class=\"side-b\">';\n  html += \"<img src=\\\"img/characters/\".concat(src, \"\\\" alt=\\\"\").concat(src, \"\\\" />\");\n  html += \"</div></div>\";\n  return html;\n}; // Create game board\n\n\nvar createBoard = function createBoard() {\n  var boardArray = [];\n\n  for (var i = 0; i < randomCharacters.length; i++) {\n    var card = createCard(randomCharacters[i], i);\n    boardArray.push(card);\n  }\n\n  return boardArray;\n}; // Iterate over board array and add items to game board\n\n\nvar displayBoard = function displayBoard(board) {\n  // iterate over each row of game board\n  for (var i = 1; i <= 4; i++) {\n    var row = document.querySelector(\".row-\".concat(i, \" .tile-container\")); // Add four cards to each row\n\n    for (var j = 0; j < 4; j++) {\n      var card = board.shift();\n      row.innerHTML += card;\n    }\n  }\n}; // Declare function to update number of moves and matches\n\n\nvar updateStats = function updateStats() {\n  moves.innerHTML = numberOfMoves;\n  matches.innerHTML = numberOfMatches;\n}; // Function to update game button and game status\n\n\nvar updateGameStatus = function updateGameStatus() {\n  if (gameStatus === \"Stopped\") {\n    // Update text on game button\n    updateGameButton(\"Pause\"); // Reinstate click functionality to board\n\n    boardElement.addEventListener(\"click\", handleBoardClick); // Update game status\n\n    gameStatus = \"Playing\";\n  } else if (gameStatus === \"Playing\") {\n    // Update text on game button\n    updateGameButton(\"Resume\"); // Remove click functionality from board\n\n    boardElement.removeEventListener(\"click\", handleBoardClick); // Stop timer\n\n    clearInterval(gameTimer); // Update game status\n\n    gameStatus = \"Paused\";\n  } else if (gameStatus === \"Paused\") {\n    // Update text on game button\n    updateGameButton(\"Pause\"); // Reinstate click functionality to board\n\n    boardElement.addEventListener(\"click\", handleBoardClick); // Restart timer\n\n    gameTimer = setInterval(timer, 1000); // Update game status\n\n    gameStatus = \"Playing\";\n  }\n}; // Function to update Game Button Text content\n\n\nvar updateGameButton = function updateGameButton(value) {\n  return gameButton.textContent = value;\n}; // Start game\n\n\nvar startGame = function startGame() {\n  // Add rows to game board\n  createRows(4); // Assign all cards to board;\n\n  var board = createBoard(); // Display game board\n\n  displayBoard(board);\n  initGame();\n}; // Check number of matches\n\n\nvar checkMatches = function checkMatches() {\n  if (numberOfMatches === 8) {\n    // Show success message\n    completeGame(); // Clear timer\n\n    clearTimeout(createTimer);\n  }\n}; // Reset number of flipped cards\n\n\nvar resetFlipped = function resetFlipped() {\n  flippedCards = 0;\n}; // Complete game\n\n\nvar completeGame = function completeGame() {\n  // Display success message\n  gameFinsihedMessage(numberOfMoves, gameTime); // Update game status\n\n  gameStatus = \"Stopped\"; // Update game button\n\n  updateGameButton(\"Play Again\"); // Clear Timer\n\n  clearInterval(gameTimer);\n}; // Format gameTime for finish message\n\n\nvar formatGameTime = function formatGameTime(time) {\n  var sec = Math.floor(time % 60);\n  var min = Math.floor(time / 60);\n\n  if (sec < 10) {\n    sec = \"0\".concat(sec);\n  }\n\n  if (min < 10) {\n    min = \"0\".concat(min);\n  }\n\n  return \"\".concat(min, \" : \").concat(sec);\n}; // Create game completed message\n\n\nvar gameFinsihedMessage = function gameFinsihedMessage(moves, time) {\n  var totalTime = formatGameTime(time);\n  var html = \"<div class='success'>\";\n  html += \"<h4>CONGRATULATIONS!</h4>\";\n  html += \"<p>You found all matches in \".concat(moves, \" moves</p>\");\n  html += \"<p>And you took \".concat(totalTime, \" minutes</p>\");\n  html += \"<p>You've managed to ward off the white walkers.</p>\";\n  html += \"<p>For now.......</p>\";\n  html += \"</div>\";\n  boardElement.innerHTML = html;\n}; // Create game rules message\n\n\nvar gameRulesMessage = function gameRulesMessage() {\n  var html = \"<div class='success'>\";\n  html += \"<h4>How to play</h4>\";\n  html += \"<p>Click the \\\"Start Game\\\" button to reveal 16 random cards</p>\";\n  html += \"<p>Select any card to reveal the hidden character.</p>\";\n  html += \"<p>Select a second card to try to find a matching pair.</p>\";\n  html += \"<p>Reveal all 8 matching characters to win</p>\";\n  html += \"</div>\";\n  boardElement.innerHTML = html;\n}; // Add game button click functionality\n\n\ngameButton.addEventListener(\"click\", function (e) {\n  e.preventDefault(); // If between games, create game board and start game\n\n  if (gameStatus === \"Stopped\") {\n    startGame();\n  } // Update Game and Game Button Status\n\n\n  updateGameStatus();\n}); // Reset all game variables;\n\nvar resetGame = function resetGame() {\n  numberOfMoves = 0;\n  numberOfMatches = 0;\n  gameTime = 0;\n  resetFlipped();\n}; // Create timer\n\n\ntimer = function timer() {\n  gameTime++;\n  var min = Math.floor(gameTime / 60);\n  var sec = Math.floor(gameTime % 60);\n\n  if (min < 10) {\n    min = \"0\".concat(min);\n  }\n\n  if (sec < 10) {\n    sec = \"0\".concat(sec);\n  }\n\n  time.innerHTML = \"\".concat(min, \" : \").concat(sec);\n}; // Assign id and source variables to selected card;\n\n\nvar getCardVariables = function getCardVariables(src, id) {\n  if (flippedCards === 1) {\n    cardOneSource = src;\n    cardOneId = id;\n  } else {\n    cardTwoSource = src;\n    cardTwoId = id;\n  }\n}; // function to find card element\n\n\nvar handleBoardClick = function handleBoardClick(event) {\n  // Do nothing if user clicks on something other than card\n  if (!event.target.parentNode || !event.target.parentNode.classList.contains(\"card\")) {\n    return;\n  } // Create card variable\n\n\n  var card = event.target.parentNode; // Do nothing if card already matched\n\n  if (card.classList.contains(\"matched\")) {\n    return;\n  }\n\n  card.classList.toggle(\"flipped\");\n  flippedCards++;\n\n  if (card.classList.contains(\"flipped\")) {\n    card.style.transform = \"rotateY(180deg)\";\n  } //assign photo src to variable\n\n\n  var sideB = card.querySelector(\".side-b img\");\n  var src = sideB.getAttribute(\"src\");\n  var id = card.getAttribute(\"id\"); // Get card Variables\n\n  getCardVariables(src, id);\n\n  if (flippedCards === 2) {\n    numberOfMoves++;\n    var cardOne = document.querySelector(\"#\".concat(cardOneId));\n    var cardTwo = document.querySelector(\"#\".concat(cardTwoId));\n\n    if (checkMatch(cardOneSource, cardTwoSource)) {\n      numberOfMatches++; // add \"matched\" class to cards\n\n      cardOne.classList.add(\"matched\");\n      cardTwo.classList.add(\"matched\");\n    } else {\n      // Turn cards back over\n      setTimeout(function () {\n        cardOne.style.transform = \"rotateY(0deg)\";\n        cardTwo.style.transform = \"rotateY(0deg)\";\n      }, 500); // Remove \"flipped\" class\n\n      cardOne.classList.remove(\"flipped\");\n      cardTwo.classList.remove(\"flipped\");\n    } // Update number of moves and matches\n\n\n    updateStats(); // Check number of matches\n\n    checkMatches(); // Reset number of flipped cards\n\n    resetFlipped();\n  }\n};\n\nboardElement.addEventListener(\"click\", handleBoardClick); // Check whether matched pair found\n\nvar checkMatch = function checkMatch(cardOne, cardTwo) {\n  return cardOne === cardTwo;\n};\n\nvar initGame = function initGame() {\n  resetGame();\n  moves.innerHTML = numberOfMoves;\n  matches.innerHTML = numberOfMatches;\n  time.innerHTML = timeElapsed;\n  stats.style.visibility = \"visible\"; // Start timer\n\n  gameTimer = setInterval(timer, 1000);\n};\n\nvar init = function init() {\n  gameRulesMessage();\n};\n\ninit(); // Add copyright tags to footer\n\nvar generateCopyright = function generateCopyright() {\n  var html = \"\";\n  var year = new Date().getFullYear();\n  html += \"<p>Copyright &copy \".concat(year);\n  html += \" | \";\n  html += \"<a href='https://donatron.github.io/portfolio' target='_blank' >\";\n  html += \"Don Macarthur </a></p>\";\n  return html;\n};\n\nfooter.innerHTML = generateCopyright();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-1!../node_modules/postcss-loader/src!./style.css */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./src/style.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ })

/******/ });