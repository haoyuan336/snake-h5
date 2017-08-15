/******/ (function(modules) { // webpackBootstrap
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

	__webpack_require__(1);
	module.exports = __webpack_require__(329);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	
	__webpack_require__(2);
	
	__webpack_require__(325);
	
	__webpack_require__(326);
	
	if (global._babelPolyfill) {
	  throw new Error("only one instance of babel-polyfill is allowed");
	}
	global._babelPolyfill = true;
	
	var DEFINE_PROPERTY = "defineProperty";
	function define(O, key, value) {
	  O[key] || Object[DEFINE_PROPERTY](O, key, {
	    writable: true,
	    configurable: true,
	    value: value
	  });
	}
	
	define(String.prototype, "padLeft", "".padStart);
	define(String.prototype, "padRight", "".padEnd);
	
	"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (key) {
	  [][key] && define(Array, key, Function.call.bind([][key]));
	});
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(3);
	__webpack_require__(52);
	__webpack_require__(53);
	__webpack_require__(54);
	__webpack_require__(55);
	__webpack_require__(57);
	__webpack_require__(60);
	__webpack_require__(61);
	__webpack_require__(62);
	__webpack_require__(63);
	__webpack_require__(64);
	__webpack_require__(65);
	__webpack_require__(66);
	__webpack_require__(67);
	__webpack_require__(68);
	__webpack_require__(70);
	__webpack_require__(72);
	__webpack_require__(74);
	__webpack_require__(76);
	__webpack_require__(79);
	__webpack_require__(80);
	__webpack_require__(81);
	__webpack_require__(85);
	__webpack_require__(87);
	__webpack_require__(89);
	__webpack_require__(92);
	__webpack_require__(93);
	__webpack_require__(94);
	__webpack_require__(95);
	__webpack_require__(97);
	__webpack_require__(98);
	__webpack_require__(99);
	__webpack_require__(100);
	__webpack_require__(101);
	__webpack_require__(102);
	__webpack_require__(103);
	__webpack_require__(105);
	__webpack_require__(106);
	__webpack_require__(107);
	__webpack_require__(109);
	__webpack_require__(110);
	__webpack_require__(111);
	__webpack_require__(113);
	__webpack_require__(115);
	__webpack_require__(116);
	__webpack_require__(117);
	__webpack_require__(118);
	__webpack_require__(119);
	__webpack_require__(120);
	__webpack_require__(121);
	__webpack_require__(122);
	__webpack_require__(123);
	__webpack_require__(124);
	__webpack_require__(125);
	__webpack_require__(126);
	__webpack_require__(127);
	__webpack_require__(132);
	__webpack_require__(133);
	__webpack_require__(137);
	__webpack_require__(138);
	__webpack_require__(139);
	__webpack_require__(140);
	__webpack_require__(142);
	__webpack_require__(143);
	__webpack_require__(144);
	__webpack_require__(145);
	__webpack_require__(146);
	__webpack_require__(147);
	__webpack_require__(148);
	__webpack_require__(149);
	__webpack_require__(150);
	__webpack_require__(151);
	__webpack_require__(152);
	__webpack_require__(153);
	__webpack_require__(154);
	__webpack_require__(155);
	__webpack_require__(156);
	__webpack_require__(158);
	__webpack_require__(159);
	__webpack_require__(161);
	__webpack_require__(162);
	__webpack_require__(168);
	__webpack_require__(169);
	__webpack_require__(171);
	__webpack_require__(172);
	__webpack_require__(173);
	__webpack_require__(177);
	__webpack_require__(178);
	__webpack_require__(179);
	__webpack_require__(180);
	__webpack_require__(181);
	__webpack_require__(183);
	__webpack_require__(184);
	__webpack_require__(185);
	__webpack_require__(186);
	__webpack_require__(189);
	__webpack_require__(191);
	__webpack_require__(192);
	__webpack_require__(193);
	__webpack_require__(195);
	__webpack_require__(197);
	__webpack_require__(199);
	__webpack_require__(200);
	__webpack_require__(201);
	__webpack_require__(203);
	__webpack_require__(204);
	__webpack_require__(205);
	__webpack_require__(206);
	__webpack_require__(216);
	__webpack_require__(220);
	__webpack_require__(221);
	__webpack_require__(223);
	__webpack_require__(224);
	__webpack_require__(228);
	__webpack_require__(229);
	__webpack_require__(231);
	__webpack_require__(232);
	__webpack_require__(233);
	__webpack_require__(234);
	__webpack_require__(235);
	__webpack_require__(236);
	__webpack_require__(237);
	__webpack_require__(238);
	__webpack_require__(239);
	__webpack_require__(240);
	__webpack_require__(241);
	__webpack_require__(242);
	__webpack_require__(243);
	__webpack_require__(244);
	__webpack_require__(245);
	__webpack_require__(246);
	__webpack_require__(247);
	__webpack_require__(248);
	__webpack_require__(249);
	__webpack_require__(251);
	__webpack_require__(252);
	__webpack_require__(253);
	__webpack_require__(254);
	__webpack_require__(255);
	__webpack_require__(257);
	__webpack_require__(258);
	__webpack_require__(259);
	__webpack_require__(261);
	__webpack_require__(262);
	__webpack_require__(263);
	__webpack_require__(264);
	__webpack_require__(265);
	__webpack_require__(266);
	__webpack_require__(267);
	__webpack_require__(268);
	__webpack_require__(270);
	__webpack_require__(271);
	__webpack_require__(273);
	__webpack_require__(274);
	__webpack_require__(275);
	__webpack_require__(276);
	__webpack_require__(279);
	__webpack_require__(280);
	__webpack_require__(282);
	__webpack_require__(283);
	__webpack_require__(284);
	__webpack_require__(285);
	__webpack_require__(287);
	__webpack_require__(288);
	__webpack_require__(289);
	__webpack_require__(290);
	__webpack_require__(291);
	__webpack_require__(292);
	__webpack_require__(293);
	__webpack_require__(294);
	__webpack_require__(295);
	__webpack_require__(296);
	__webpack_require__(298);
	__webpack_require__(299);
	__webpack_require__(300);
	__webpack_require__(301);
	__webpack_require__(302);
	__webpack_require__(303);
	__webpack_require__(304);
	__webpack_require__(305);
	__webpack_require__(306);
	__webpack_require__(307);
	__webpack_require__(308);
	__webpack_require__(310);
	__webpack_require__(311);
	__webpack_require__(312);
	__webpack_require__(313);
	__webpack_require__(314);
	__webpack_require__(315);
	__webpack_require__(316);
	__webpack_require__(317);
	__webpack_require__(318);
	__webpack_require__(319);
	__webpack_require__(320);
	__webpack_require__(323);
	__webpack_require__(324);
	module.exports = __webpack_require__(9);


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global = __webpack_require__(4);
	var has = __webpack_require__(5);
	var DESCRIPTORS = __webpack_require__(6);
	var $export = __webpack_require__(8);
	var redefine = __webpack_require__(18);
	var META = __webpack_require__(22).KEY;
	var $fails = __webpack_require__(7);
	var shared = __webpack_require__(23);
	var setToStringTag = __webpack_require__(24);
	var uid = __webpack_require__(19);
	var wks = __webpack_require__(25);
	var wksExt = __webpack_require__(26);
	var wksDefine = __webpack_require__(27);
	var keyOf = __webpack_require__(29);
	var enumKeys = __webpack_require__(42);
	var isArray = __webpack_require__(45);
	var anObject = __webpack_require__(12);
	var toIObject = __webpack_require__(32);
	var toPrimitive = __webpack_require__(16);
	var createDesc = __webpack_require__(17);
	var _create = __webpack_require__(46);
	var gOPNExt = __webpack_require__(49);
	var $GOPD = __webpack_require__(51);
	var $DP = __webpack_require__(11);
	var $keys = __webpack_require__(30);
	var gOPD = $GOPD.f;
	var dP = $DP.f;
	var gOPN = gOPNExt.f;
	var $Symbol = global.Symbol;
	var $JSON = global.JSON;
	var _stringify = $JSON && $JSON.stringify;
	var PROTOTYPE = 'prototype';
	var HIDDEN = wks('_hidden');
	var TO_PRIMITIVE = wks('toPrimitive');
	var isEnum = {}.propertyIsEnumerable;
	var SymbolRegistry = shared('symbol-registry');
	var AllSymbols = shared('symbols');
	var OPSymbols = shared('op-symbols');
	var ObjectProto = Object[PROTOTYPE];
	var USE_NATIVE = typeof $Symbol == 'function';
	var QObject = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function () {
	  return _create(dP({}, 'a', {
	    get: function () { return dP(this, 'a', { value: 7 }).a; }
	  })).a != 7;
	}) ? function (it, key, D) {
	  var protoDesc = gOPD(ObjectProto, key);
	  if (protoDesc) delete ObjectProto[key];
	  dP(it, key, D);
	  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
	} : dP;
	
	var wrap = function (tag) {
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};
	
	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  return it instanceof $Symbol;
	};
	
	var $defineProperty = function defineProperty(it, key, D) {
	  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if (has(AllSymbols, key)) {
	    if (!D.enumerable) {
	      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
	      D = _create(D, { enumerable: createDesc(0, false) });
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P) {
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P));
	  var i = 0;
	  var l = keys.length;
	  var key;
	  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P) {
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key) {
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
	  it = toIObject(it);
	  key = toPrimitive(key, true);
	  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
	  var D = gOPD(it, key);
	  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it) {
	  var names = gOPN(toIObject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
	  var IS_OP = it === ObjectProto;
	  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
	  } return result;
	};
	
	// 19.4.1.1 Symbol([description])
	if (!USE_NATIVE) {
	  $Symbol = function Symbol() {
	    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function (value) {
	      if (this === ObjectProto) $set.call(OPSymbols, value);
	      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
	    return this._k;
	  });
	
	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f = $defineProperty;
	  __webpack_require__(50).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(44).f = $propertyIsEnumerable;
	  __webpack_require__(43).f = $getOwnPropertySymbols;
	
	  if (DESCRIPTORS && !__webpack_require__(28)) {
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	
	  wksExt.f = function (name) {
	    return wrap(wks(name));
	  };
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });
	
	for (var es6Symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);
	
	for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);
	
	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function (key) {
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key) {
	    if (isSymbol(key)) return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function () { setter = true; },
	  useSimple: function () { setter = false; }
	});
	
	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it) {
	    if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
	    var args = [it];
	    var i = 1;
	    var replacer, $replacer;
	    while (arguments.length > i) args.push(arguments[i++]);
	    replacer = args[1];
	    if (typeof replacer == 'function') $replacer = replacer;
	    if ($replacer || !isArray(replacer)) replacer = function (key, value) {
	      if ($replacer) value = $replacer.call(this, key, value);
	      if (!isSymbol(value)) return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});
	
	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(10)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);


/***/ },
/* 4 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self
	  // eslint-disable-next-line no-new-func
	  : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ },
/* 5 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(7)(function () {
	  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
	});


/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(4);
	var core = __webpack_require__(9);
	var hide = __webpack_require__(10);
	var redefine = __webpack_require__(18);
	var ctx = __webpack_require__(20);
	var PROTOTYPE = 'prototype';
	
	var $export = function (type, name, source) {
	  var IS_FORCED = type & $export.F;
	  var IS_GLOBAL = type & $export.G;
	  var IS_STATIC = type & $export.S;
	  var IS_PROTO = type & $export.P;
	  var IS_BIND = type & $export.B;
	  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
	  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
	  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
	  var key, own, out, exp;
	  if (IS_GLOBAL) source = name;
	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // extend global
	    if (target) redefine(target, key, out, type & $export.U);
	    // export
	    if (exports[key] != out) hide(exports, key, exp);
	    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
	  }
	};
	global.core = core;
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library`
	module.exports = $export;


/***/ },
/* 9 */
/***/ function(module, exports) {

	var core = module.exports = { version: '2.5.0' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var dP = __webpack_require__(11);
	var createDesc = __webpack_require__(17);
	module.exports = __webpack_require__(6) ? function (object, key, value) {
	  return dP.f(object, key, createDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(12);
	var IE8_DOM_DEFINE = __webpack_require__(14);
	var toPrimitive = __webpack_require__(16);
	var dP = Object.defineProperty;
	
	exports.f = __webpack_require__(6) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return dP(O, P, Attributes);
	  } catch (e) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13);
	module.exports = function (it) {
	  if (!isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};


/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(6) && !__webpack_require__(7)(function () {
	  return Object.defineProperty(__webpack_require__(15)('div'), 'a', { get: function () { return 7; } }).a != 7;
	});


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13);
	var document = __webpack_require__(4).document;
	// typeof document.createElement is 'object' in old IE
	var is = isObject(document) && isObject(document.createElement);
	module.exports = function (it) {
	  return is ? document.createElement(it) : {};
	};


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(13);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function (it, S) {
	  if (!isObject(it)) return it;
	  var fn, val;
	  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};


/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(4);
	var hide = __webpack_require__(10);
	var has = __webpack_require__(5);
	var SRC = __webpack_require__(19)('src');
	var TO_STRING = 'toString';
	var $toString = Function[TO_STRING];
	var TPL = ('' + $toString).split(TO_STRING);
	
	__webpack_require__(9).inspectSource = function (it) {
	  return $toString.call(it);
	};
	
	(module.exports = function (O, key, val, safe) {
	  var isFunction = typeof val == 'function';
	  if (isFunction) has(val, 'name') || hide(val, 'name', key);
	  if (O[key] === val) return;
	  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	  if (O === global) {
	    O[key] = val;
	  } else if (!safe) {
	    delete O[key];
	    hide(O, key, val);
	  } else if (O[key]) {
	    O[key] = val;
	  } else {
	    hide(O, key, val);
	  }
	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, TO_STRING, function toString() {
	  return typeof this == 'function' && this[SRC] || $toString.call(this);
	});


/***/ },
/* 19 */
/***/ function(module, exports) {

	var id = 0;
	var px = Math.random();
	module.exports = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(21);
	module.exports = function (fn, that, length) {
	  aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 1: return function (a) {
	      return fn.call(that, a);
	    };
	    case 2: return function (a, b) {
	      return fn.call(that, a, b);
	    };
	    case 3: return function (a, b, c) {
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};


/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var META = __webpack_require__(19)('meta');
	var isObject = __webpack_require__(13);
	var has = __webpack_require__(5);
	var setDesc = __webpack_require__(11).f;
	var id = 0;
	var isExtensible = Object.isExtensible || function () {
	  return true;
	};
	var FREEZE = !__webpack_require__(7)(function () {
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function (it) {
	  setDesc(it, META, { value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  } });
	};
	var fastKey = function (it, create) {
	  // return primitive with prefix
	  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return 'F';
	    // not necessary to add metadata
	    if (!create) return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function (it, create) {
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return true;
	    // not necessary to add metadata
	    if (!create) return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function (it) {
	  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY: META,
	  NEED: false,
	  fastKey: fastKey,
	  getWeak: getWeak,
	  onFreeze: onFreeze
	};


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(4);
	var SHARED = '__core-js_shared__';
	var store = global[SHARED] || (global[SHARED] = {});
	module.exports = function (key) {
	  return store[key] || (store[key] = {});
	};


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(11).f;
	var has = __webpack_require__(5);
	var TAG = __webpack_require__(25)('toStringTag');
	
	module.exports = function (it, tag, stat) {
	  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
	};


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var store = __webpack_require__(23)('wks');
	var uid = __webpack_require__(19);
	var Symbol = __webpack_require__(4).Symbol;
	var USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function (name) {
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(25);


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(4);
	var core = __webpack_require__(9);
	var LIBRARY = __webpack_require__(28);
	var wksExt = __webpack_require__(26);
	var defineProperty = __webpack_require__(11).f;
	module.exports = function (name) {
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
	};


/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = false;


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys = __webpack_require__(30);
	var toIObject = __webpack_require__(32);
	module.exports = function (object, el) {
	  var O = toIObject(object);
	  var keys = getKeys(O);
	  var length = keys.length;
	  var index = 0;
	  var key;
	  while (length > index) if (O[key = keys[index++]] === el) return key;
	};


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys = __webpack_require__(31);
	var enumBugKeys = __webpack_require__(41);
	
	module.exports = Object.keys || function keys(O) {
	  return $keys(O, enumBugKeys);
	};


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var has = __webpack_require__(5);
	var toIObject = __webpack_require__(32);
	var arrayIndexOf = __webpack_require__(36)(false);
	var IE_PROTO = __webpack_require__(40)('IE_PROTO');
	
	module.exports = function (object, names) {
	  var O = toIObject(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (has(O, key = names[i++])) {
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(33);
	var defined = __webpack_require__(35);
	module.exports = function (it) {
	  return IObject(defined(it));
	};


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(34);
	// eslint-disable-next-line no-prototype-builtins
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};


/***/ },
/* 34 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function (it) {
	  return toString.call(it).slice(8, -1);
	};


/***/ },
/* 35 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(32);
	var toLength = __webpack_require__(37);
	var toAbsoluteIndex = __webpack_require__(39);
	module.exports = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIObject($this);
	    var length = toLength(O.length);
	    var index = toAbsoluteIndex(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare
	      if (value != value) return true;
	    // Array#indexOf ignores holes, Array#includes - not
	    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
	      if (O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(38);
	var min = Math.min;
	module.exports = function (it) {
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};


/***/ },
/* 38 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil = Math.ceil;
	var floor = Math.floor;
	module.exports = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(38);
	var max = Math.max;
	var min = Math.min;
	module.exports = function (index, length) {
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(23)('keys');
	var uid = __webpack_require__(19);
	module.exports = function (key) {
	  return shared[key] || (shared[key] = uid(key));
	};


/***/ },
/* 41 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(30);
	var gOPS = __webpack_require__(43);
	var pIE = __webpack_require__(44);
	module.exports = function (it) {
	  var result = getKeys(it);
	  var getSymbols = gOPS.f;
	  if (getSymbols) {
	    var symbols = getSymbols(it);
	    var isEnum = pIE.f;
	    var i = 0;
	    var key;
	    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
	  } return result;
	};


/***/ },
/* 43 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;


/***/ },
/* 44 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(34);
	module.exports = Array.isArray || function isArray(arg) {
	  return cof(arg) == 'Array';
	};


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject = __webpack_require__(12);
	var dPs = __webpack_require__(47);
	var enumBugKeys = __webpack_require__(41);
	var IE_PROTO = __webpack_require__(40)('IE_PROTO');
	var Empty = function () { /* empty */ };
	var PROTOTYPE = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(15)('iframe');
	  var i = enumBugKeys.length;
	  var lt = '<';
	  var gt = '>';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(48).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};
	
	module.exports = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty();
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var dP = __webpack_require__(11);
	var anObject = __webpack_require__(12);
	var getKeys = __webpack_require__(30);
	
	module.exports = __webpack_require__(6) ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject(O);
	  var keys = getKeys(Properties);
	  var length = keys.length;
	  var i = 0;
	  var P;
	  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var document = __webpack_require__(4).document;
	module.exports = document && document.documentElement;


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(32);
	var gOPN = __webpack_require__(50).f;
	var toString = {}.toString;
	
	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function (it) {
	  try {
	    return gOPN(it);
	  } catch (e) {
	    return windowNames.slice();
	  }
	};
	
	module.exports.f = function getOwnPropertyNames(it) {
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys = __webpack_require__(31);
	var hiddenKeys = __webpack_require__(41).concat('length', 'prototype');
	
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return $keys(O, hiddenKeys);
	};


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var pIE = __webpack_require__(44);
	var createDesc = __webpack_require__(17);
	var toIObject = __webpack_require__(32);
	var toPrimitive = __webpack_require__(16);
	var has = __webpack_require__(5);
	var IE8_DOM_DEFINE = __webpack_require__(14);
	var gOPD = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__(6) ? gOPD : function getOwnPropertyDescriptor(O, P) {
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if (IE8_DOM_DEFINE) try {
	    return gOPD(O, P);
	  } catch (e) { /* empty */ }
	  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
	};


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', { create: __webpack_require__(46) });


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(6), 'Object', { defineProperty: __webpack_require__(11).f });


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
	$export($export.S + $export.F * !__webpack_require__(6), 'Object', { defineProperties: __webpack_require__(47) });


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject = __webpack_require__(32);
	var $getOwnPropertyDescriptor = __webpack_require__(51).f;
	
	__webpack_require__(56)('getOwnPropertyDescriptor', function () {
	  return function getOwnPropertyDescriptor(it, key) {
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(8);
	var core = __webpack_require__(9);
	var fails = __webpack_require__(7);
	module.exports = function (KEY, exec) {
	  var fn = (core.Object || {})[KEY] || Object[KEY];
	  var exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
	};


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject = __webpack_require__(58);
	var $getPrototypeOf = __webpack_require__(59);
	
	__webpack_require__(56)('getPrototypeOf', function () {
	  return function getPrototypeOf(it) {
	    return $getPrototypeOf(toObject(it));
	  };
	});


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(35);
	module.exports = function (it) {
	  return Object(defined(it));
	};


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has = __webpack_require__(5);
	var toObject = __webpack_require__(58);
	var IE_PROTO = __webpack_require__(40)('IE_PROTO');
	var ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function (O) {
	  O = toObject(O);
	  if (has(O, IE_PROTO)) return O[IE_PROTO];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(58);
	var $keys = __webpack_require__(30);
	
	__webpack_require__(56)('keys', function () {
	  return function keys(it) {
	    return $keys(toObject(it));
	  };
	});


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 Object.getOwnPropertyNames(O)
	__webpack_require__(56)('getOwnPropertyNames', function () {
	  return __webpack_require__(49).f;
	});


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.5 Object.freeze(O)
	var isObject = __webpack_require__(13);
	var meta = __webpack_require__(22).onFreeze;
	
	__webpack_require__(56)('freeze', function ($freeze) {
	  return function freeze(it) {
	    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
	  };
	});


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.17 Object.seal(O)
	var isObject = __webpack_require__(13);
	var meta = __webpack_require__(22).onFreeze;
	
	__webpack_require__(56)('seal', function ($seal) {
	  return function seal(it) {
	    return $seal && isObject(it) ? $seal(meta(it)) : it;
	  };
	});


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.15 Object.preventExtensions(O)
	var isObject = __webpack_require__(13);
	var meta = __webpack_require__(22).onFreeze;
	
	__webpack_require__(56)('preventExtensions', function ($preventExtensions) {
	  return function preventExtensions(it) {
	    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
	  };
	});


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.12 Object.isFrozen(O)
	var isObject = __webpack_require__(13);
	
	__webpack_require__(56)('isFrozen', function ($isFrozen) {
	  return function isFrozen(it) {
	    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
	  };
	});


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.13 Object.isSealed(O)
	var isObject = __webpack_require__(13);
	
	__webpack_require__(56)('isSealed', function ($isSealed) {
	  return function isSealed(it) {
	    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
	  };
	});


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.11 Object.isExtensible(O)
	var isObject = __webpack_require__(13);
	
	__webpack_require__(56)('isExtensible', function ($isExtensible) {
	  return function isExtensible(it) {
	    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
	  };
	});


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(8);
	
	$export($export.S + $export.F, 'Object', { assign: __webpack_require__(69) });


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys = __webpack_require__(30);
	var gOPS = __webpack_require__(43);
	var pIE = __webpack_require__(44);
	var toObject = __webpack_require__(58);
	var IObject = __webpack_require__(33);
	var $assign = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(7)(function () {
	  var A = {};
	  var B = {};
	  // eslint-disable-next-line no-undef
	  var S = Symbol();
	  var K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function (k) { B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
	  var T = toObject(target);
	  var aLen = arguments.length;
	  var index = 1;
	  var getSymbols = gOPS.f;
	  var isEnum = pIE.f;
	  while (aLen > index) {
	    var S = IObject(arguments[index++]);
	    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
	    var length = keys.length;
	    var j = 0;
	    var key;
	    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
	  } return T;
	} : $assign;


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.10 Object.is(value1, value2)
	var $export = __webpack_require__(8);
	$export($export.S, 'Object', { is: __webpack_require__(71) });


/***/ },
/* 71 */
/***/ function(module, exports) {

	// 7.2.9 SameValue(x, y)
	module.exports = Object.is || function is(x, y) {
	  // eslint-disable-next-line no-self-compare
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(8);
	$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(73).set });


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(13);
	var anObject = __webpack_require__(12);
	var check = function (O, proto) {
	  anObject(O);
	  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function (test, buggy, set) {
	      try {
	        set = __webpack_require__(20)(Function.call, __webpack_require__(51).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch (e) { buggy = true; }
	      return function setPrototypeOf(O, proto) {
	        check(O, proto);
	        if (buggy) O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.3.6 Object.prototype.toString()
	var classof = __webpack_require__(75);
	var test = {};
	test[__webpack_require__(25)('toStringTag')] = 'z';
	if (test + '' != '[object z]') {
	  __webpack_require__(18)(Object.prototype, 'toString', function toString() {
	    return '[object ' + classof(this) + ']';
	  }, true);
	}


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(34);
	var TAG = __webpack_require__(25)('toStringTag');
	// ES3 wrong here
	var ARG = cof(function () { return arguments; }()) == 'Arguments';
	
	// fallback for IE11 Script Access Denied error
	var tryGet = function (it, key) {
	  try {
	    return it[key];
	  } catch (e) { /* empty */ }
	};
	
	module.exports = function (it) {
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
	var $export = __webpack_require__(8);
	
	$export($export.P, 'Function', { bind: __webpack_require__(77) });


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var aFunction = __webpack_require__(21);
	var isObject = __webpack_require__(13);
	var invoke = __webpack_require__(78);
	var arraySlice = [].slice;
	var factories = {};
	
	var construct = function (F, len, args) {
	  if (!(len in factories)) {
	    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
	    // eslint-disable-next-line no-new-func
	    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
	  } return factories[len](F, args);
	};
	
	module.exports = Function.bind || function bind(that /* , ...args */) {
	  var fn = aFunction(this);
	  var partArgs = arraySlice.call(arguments, 1);
	  var bound = function (/* args... */) {
	    var args = partArgs.concat(arraySlice.call(arguments));
	    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
	  };
	  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
	  return bound;
	};


/***/ },
/* 78 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function (fn, args, that) {
	  var un = that === undefined;
	  switch (args.length) {
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return fn.apply(that, args);
	};


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var dP = __webpack_require__(11).f;
	var FProto = Function.prototype;
	var nameRE = /^\s*function ([^ (]*)/;
	var NAME = 'name';
	
	// 19.2.4.2 name
	NAME in FProto || __webpack_require__(6) && dP(FProto, NAME, {
	  configurable: true,
	  get: function () {
	    try {
	      return ('' + this).match(nameRE)[1];
	    } catch (e) {
	      return '';
	    }
	  }
	});


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var isObject = __webpack_require__(13);
	var getPrototypeOf = __webpack_require__(59);
	var HAS_INSTANCE = __webpack_require__(25)('hasInstance');
	var FunctionProto = Function.prototype;
	// 19.2.3.6 Function.prototype[@@hasInstance](V)
	if (!(HAS_INSTANCE in FunctionProto)) __webpack_require__(11).f(FunctionProto, HAS_INSTANCE, { value: function (O) {
	  if (typeof this != 'function' || !isObject(O)) return false;
	  if (!isObject(this.prototype)) return O instanceof this;
	  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
	  while (O = getPrototypeOf(O)) if (this.prototype === O) return true;
	  return false;
	} });


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	var $parseInt = __webpack_require__(82);
	// 18.2.5 parseInt(string, radix)
	$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });


/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var $parseInt = __webpack_require__(4).parseInt;
	var $trim = __webpack_require__(83).trim;
	var ws = __webpack_require__(84);
	var hex = /^[-+]?0[xX]/;
	
	module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
	  var string = $trim(String(str), 3);
	  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
	} : $parseInt;


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	var defined = __webpack_require__(35);
	var fails = __webpack_require__(7);
	var spaces = __webpack_require__(84);
	var space = '[' + spaces + ']';
	var non = '\u200b\u0085';
	var ltrim = RegExp('^' + space + space + '*');
	var rtrim = RegExp(space + space + '*$');
	
	var exporter = function (KEY, exec, ALIAS) {
	  var exp = {};
	  var FORCE = fails(function () {
	    return !!spaces[KEY]() || non[KEY]() != non;
	  });
	  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
	  if (ALIAS) exp[ALIAS] = fn;
	  $export($export.P + $export.F * FORCE, 'String', exp);
	};
	
	// 1 -> String#trimLeft
	// 2 -> String#trimRight
	// 3 -> String#trim
	var trim = exporter.trim = function (string, TYPE) {
	  string = String(defined(string));
	  if (TYPE & 1) string = string.replace(ltrim, '');
	  if (TYPE & 2) string = string.replace(rtrim, '');
	  return string;
	};
	
	module.exports = exporter;


/***/ },
/* 84 */
/***/ function(module, exports) {

	module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
	  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	var $parseFloat = __webpack_require__(86);
	// 18.2.4 parseFloat(string)
	$export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });


/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var $parseFloat = __webpack_require__(4).parseFloat;
	var $trim = __webpack_require__(83).trim;
	
	module.exports = 1 / $parseFloat(__webpack_require__(84) + '-0') !== -Infinity ? function parseFloat(str) {
	  var string = $trim(String(str), 3);
	  var result = $parseFloat(string);
	  return result === 0 && string.charAt(0) == '-' ? -0 : result;
	} : $parseFloat;


/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global = __webpack_require__(4);
	var has = __webpack_require__(5);
	var cof = __webpack_require__(34);
	var inheritIfRequired = __webpack_require__(88);
	var toPrimitive = __webpack_require__(16);
	var fails = __webpack_require__(7);
	var gOPN = __webpack_require__(50).f;
	var gOPD = __webpack_require__(51).f;
	var dP = __webpack_require__(11).f;
	var $trim = __webpack_require__(83).trim;
	var NUMBER = 'Number';
	var $Number = global[NUMBER];
	var Base = $Number;
	var proto = $Number.prototype;
	// Opera ~12 has broken Object#toString
	var BROKEN_COF = cof(__webpack_require__(46)(proto)) == NUMBER;
	var TRIM = 'trim' in String.prototype;
	
	// 7.1.3 ToNumber(argument)
	var toNumber = function (argument) {
	  var it = toPrimitive(argument, false);
	  if (typeof it == 'string' && it.length > 2) {
	    it = TRIM ? it.trim() : $trim(it, 3);
	    var first = it.charCodeAt(0);
	    var third, radix, maxCode;
	    if (first === 43 || first === 45) {
	      third = it.charCodeAt(2);
	      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
	    } else if (first === 48) {
	      switch (it.charCodeAt(1)) {
	        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
	        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
	        default: return +it;
	      }
	      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
	        code = digits.charCodeAt(i);
	        // parseInt parses a string to a first unavailable symbol
	        // but ToNumber should return NaN if a string contains unavailable symbols
	        if (code < 48 || code > maxCode) return NaN;
	      } return parseInt(digits, radix);
	    }
	  } return +it;
	};
	
	if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
	  $Number = function Number(value) {
	    var it = arguments.length < 1 ? 0 : value;
	    var that = this;
	    return that instanceof $Number
	      // check on 1..constructor(foo) case
	      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
	        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
	  };
	  for (var keys = __webpack_require__(6) ? gOPN(Base) : (
	    // ES3:
	    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
	    // ES6 (in case, if modules with ES6 Number statics required before):
	    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
	    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
	  ).split(','), j = 0, key; keys.length > j; j++) {
	    if (has(Base, key = keys[j]) && !has($Number, key)) {
	      dP($Number, key, gOPD(Base, key));
	    }
	  }
	  $Number.prototype = proto;
	  proto.constructor = $Number;
	  __webpack_require__(18)(global, NUMBER, $Number);
	}


/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13);
	var setPrototypeOf = __webpack_require__(73).set;
	module.exports = function (that, target, C) {
	  var S = target.constructor;
	  var P;
	  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
	    setPrototypeOf(that, P);
	  } return that;
	};


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var toInteger = __webpack_require__(38);
	var aNumberValue = __webpack_require__(90);
	var repeat = __webpack_require__(91);
	var $toFixed = 1.0.toFixed;
	var floor = Math.floor;
	var data = [0, 0, 0, 0, 0, 0];
	var ERROR = 'Number.toFixed: incorrect invocation!';
	var ZERO = '0';
	
	var multiply = function (n, c) {
	  var i = -1;
	  var c2 = c;
	  while (++i < 6) {
	    c2 += n * data[i];
	    data[i] = c2 % 1e7;
	    c2 = floor(c2 / 1e7);
	  }
	};
	var divide = function (n) {
	  var i = 6;
	  var c = 0;
	  while (--i >= 0) {
	    c += data[i];
	    data[i] = floor(c / n);
	    c = (c % n) * 1e7;
	  }
	};
	var numToString = function () {
	  var i = 6;
	  var s = '';
	  while (--i >= 0) {
	    if (s !== '' || i === 0 || data[i] !== 0) {
	      var t = String(data[i]);
	      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
	    }
	  } return s;
	};
	var pow = function (x, n, acc) {
	  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
	};
	var log = function (x) {
	  var n = 0;
	  var x2 = x;
	  while (x2 >= 4096) {
	    n += 12;
	    x2 /= 4096;
	  }
	  while (x2 >= 2) {
	    n += 1;
	    x2 /= 2;
	  } return n;
	};
	
	$export($export.P + $export.F * (!!$toFixed && (
	  0.00008.toFixed(3) !== '0.000' ||
	  0.9.toFixed(0) !== '1' ||
	  1.255.toFixed(2) !== '1.25' ||
	  1000000000000000128.0.toFixed(0) !== '1000000000000000128'
	) || !__webpack_require__(7)(function () {
	  // V8 ~ Android 4.3-
	  $toFixed.call({});
	})), 'Number', {
	  toFixed: function toFixed(fractionDigits) {
	    var x = aNumberValue(this, ERROR);
	    var f = toInteger(fractionDigits);
	    var s = '';
	    var m = ZERO;
	    var e, z, j, k;
	    if (f < 0 || f > 20) throw RangeError(ERROR);
	    // eslint-disable-next-line no-self-compare
	    if (x != x) return 'NaN';
	    if (x <= -1e21 || x >= 1e21) return String(x);
	    if (x < 0) {
	      s = '-';
	      x = -x;
	    }
	    if (x > 1e-21) {
	      e = log(x * pow(2, 69, 1)) - 69;
	      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
	      z *= 0x10000000000000;
	      e = 52 - e;
	      if (e > 0) {
	        multiply(0, z);
	        j = f;
	        while (j >= 7) {
	          multiply(1e7, 0);
	          j -= 7;
	        }
	        multiply(pow(10, j, 1), 0);
	        j = e - 1;
	        while (j >= 23) {
	          divide(1 << 23);
	          j -= 23;
	        }
	        divide(1 << j);
	        multiply(1, 1);
	        divide(2);
	        m = numToString();
	      } else {
	        multiply(0, z);
	        multiply(1 << -e, 0);
	        m = numToString() + repeat.call(ZERO, f);
	      }
	    }
	    if (f > 0) {
	      k = m.length;
	      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
	    } else {
	      m = s + m;
	    } return m;
	  }
	});


/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	var cof = __webpack_require__(34);
	module.exports = function (it, msg) {
	  if (typeof it != 'number' && cof(it) != 'Number') throw TypeError(msg);
	  return +it;
	};


/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var toInteger = __webpack_require__(38);
	var defined = __webpack_require__(35);
	
	module.exports = function repeat(count) {
	  var str = String(defined(this));
	  var res = '';
	  var n = toInteger(count);
	  if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
	  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;
	  return res;
	};


/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var $fails = __webpack_require__(7);
	var aNumberValue = __webpack_require__(90);
	var $toPrecision = 1.0.toPrecision;
	
	$export($export.P + $export.F * ($fails(function () {
	  // IE7-
	  return $toPrecision.call(1, undefined) !== '1';
	}) || !$fails(function () {
	  // V8 ~ Android 4.3-
	  $toPrecision.call({});
	})), 'Number', {
	  toPrecision: function toPrecision(precision) {
	    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
	    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
	  }
	});


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.1 Number.EPSILON
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Number', { EPSILON: Math.pow(2, -52) });


/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.2 Number.isFinite(number)
	var $export = __webpack_require__(8);
	var _isFinite = __webpack_require__(4).isFinite;
	
	$export($export.S, 'Number', {
	  isFinite: function isFinite(it) {
	    return typeof it == 'number' && _isFinite(it);
	  }
	});


/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Number', { isInteger: __webpack_require__(96) });


/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(13);
	var floor = Math.floor;
	module.exports = function isInteger(it) {
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};


/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.4 Number.isNaN(number)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Number', {
	  isNaN: function isNaN(number) {
	    // eslint-disable-next-line no-self-compare
	    return number != number;
	  }
	});


/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.5 Number.isSafeInteger(number)
	var $export = __webpack_require__(8);
	var isInteger = __webpack_require__(96);
	var abs = Math.abs;
	
	$export($export.S, 'Number', {
	  isSafeInteger: function isSafeInteger(number) {
	    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
	  }
	});


/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.6 Number.MAX_SAFE_INTEGER
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });


/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.10 Number.MIN_SAFE_INTEGER
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });


/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	var $parseFloat = __webpack_require__(86);
	// 20.1.2.12 Number.parseFloat(string)
	$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', { parseFloat: $parseFloat });


/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	var $parseInt = __webpack_require__(82);
	// 20.1.2.13 Number.parseInt(string, radix)
	$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', { parseInt: $parseInt });


/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.3 Math.acosh(x)
	var $export = __webpack_require__(8);
	var log1p = __webpack_require__(104);
	var sqrt = Math.sqrt;
	var $acosh = Math.acosh;
	
	$export($export.S + $export.F * !($acosh
	  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
	  && Math.floor($acosh(Number.MAX_VALUE)) == 710
	  // Tor Browser bug: Math.acosh(Infinity) -> NaN
	  && $acosh(Infinity) == Infinity
	), 'Math', {
	  acosh: function acosh(x) {
	    return (x = +x) < 1 ? NaN : x > 94906265.62425156
	      ? Math.log(x) + Math.LN2
	      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
	  }
	});


/***/ },
/* 104 */
/***/ function(module, exports) {

	// 20.2.2.20 Math.log1p(x)
	module.exports = Math.log1p || function log1p(x) {
	  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
	};


/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.5 Math.asinh(x)
	var $export = __webpack_require__(8);
	var $asinh = Math.asinh;
	
	function asinh(x) {
	  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
	}
	
	// Tor Browser bug: Math.asinh(0) -> -0
	$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh: asinh });


/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.7 Math.atanh(x)
	var $export = __webpack_require__(8);
	var $atanh = Math.atanh;
	
	// Tor Browser bug: Math.atanh(-0) -> 0
	$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
	  atanh: function atanh(x) {
	    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
	  }
	});


/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.9 Math.cbrt(x)
	var $export = __webpack_require__(8);
	var sign = __webpack_require__(108);
	
	$export($export.S, 'Math', {
	  cbrt: function cbrt(x) {
	    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
	  }
	});


/***/ },
/* 108 */
/***/ function(module, exports) {

	// 20.2.2.28 Math.sign(x)
	module.exports = Math.sign || function sign(x) {
	  // eslint-disable-next-line no-self-compare
	  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
	};


/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.11 Math.clz32(x)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {
	  clz32: function clz32(x) {
	    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
	  }
	});


/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.12 Math.cosh(x)
	var $export = __webpack_require__(8);
	var exp = Math.exp;
	
	$export($export.S, 'Math', {
	  cosh: function cosh(x) {
	    return (exp(x = +x) + exp(-x)) / 2;
	  }
	});


/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.14 Math.expm1(x)
	var $export = __webpack_require__(8);
	var $expm1 = __webpack_require__(112);
	
	$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', { expm1: $expm1 });


/***/ },
/* 112 */
/***/ function(module, exports) {

	// 20.2.2.14 Math.expm1(x)
	var $expm1 = Math.expm1;
	module.exports = (!$expm1
	  // Old FF bug
	  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
	  // Tor Browser bug
	  || $expm1(-2e-17) != -2e-17
	) ? function expm1(x) {
	  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
	} : $expm1;


/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.16 Math.fround(x)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', { fround: __webpack_require__(114) });


/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.16 Math.fround(x)
	var sign = __webpack_require__(108);
	var pow = Math.pow;
	var EPSILON = pow(2, -52);
	var EPSILON32 = pow(2, -23);
	var MAX32 = pow(2, 127) * (2 - EPSILON32);
	var MIN32 = pow(2, -126);
	
	var roundTiesToEven = function (n) {
	  return n + 1 / EPSILON - 1 / EPSILON;
	};
	
	module.exports = Math.fround || function fround(x) {
	  var $abs = Math.abs(x);
	  var $sign = sign(x);
	  var a, result;
	  if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
	  a = (1 + EPSILON32 / EPSILON) * $abs;
	  result = a - (a - $abs);
	  // eslint-disable-next-line no-self-compare
	  if (result > MAX32 || result != result) return $sign * Infinity;
	  return $sign * result;
	};


/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
	var $export = __webpack_require__(8);
	var abs = Math.abs;
	
	$export($export.S, 'Math', {
	  hypot: function hypot(value1, value2) { // eslint-disable-line no-unused-vars
	    var sum = 0;
	    var i = 0;
	    var aLen = arguments.length;
	    var larg = 0;
	    var arg, div;
	    while (i < aLen) {
	      arg = abs(arguments[i++]);
	      if (larg < arg) {
	        div = larg / arg;
	        sum = sum * div * div + 1;
	        larg = arg;
	      } else if (arg > 0) {
	        div = arg / larg;
	        sum += div * div;
	      } else sum += arg;
	    }
	    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
	  }
	});


/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.18 Math.imul(x, y)
	var $export = __webpack_require__(8);
	var $imul = Math.imul;
	
	// some WebKit versions fails with big numbers, some has wrong arity
	$export($export.S + $export.F * __webpack_require__(7)(function () {
	  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
	}), 'Math', {
	  imul: function imul(x, y) {
	    var UINT16 = 0xffff;
	    var xn = +x;
	    var yn = +y;
	    var xl = UINT16 & xn;
	    var yl = UINT16 & yn;
	    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
	  }
	});


/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.21 Math.log10(x)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {
	  log10: function log10(x) {
	    return Math.log(x) * Math.LOG10E;
	  }
	});


/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.20 Math.log1p(x)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', { log1p: __webpack_require__(104) });


/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.22 Math.log2(x)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {
	  log2: function log2(x) {
	    return Math.log(x) / Math.LN2;
	  }
	});


/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.28 Math.sign(x)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', { sign: __webpack_require__(108) });


/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.30 Math.sinh(x)
	var $export = __webpack_require__(8);
	var expm1 = __webpack_require__(112);
	var exp = Math.exp;
	
	// V8 near Chromium 38 has a problem with very small numbers
	$export($export.S + $export.F * __webpack_require__(7)(function () {
	  return !Math.sinh(-2e-17) != -2e-17;
	}), 'Math', {
	  sinh: function sinh(x) {
	    return Math.abs(x = +x) < 1
	      ? (expm1(x) - expm1(-x)) / 2
	      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
	  }
	});


/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.33 Math.tanh(x)
	var $export = __webpack_require__(8);
	var expm1 = __webpack_require__(112);
	var exp = Math.exp;
	
	$export($export.S, 'Math', {
	  tanh: function tanh(x) {
	    var a = expm1(x = +x);
	    var b = expm1(-x);
	    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
	  }
	});


/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.34 Math.trunc(x)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {
	  trunc: function trunc(it) {
	    return (it > 0 ? Math.floor : Math.ceil)(it);
	  }
	});


/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	var toAbsoluteIndex = __webpack_require__(39);
	var fromCharCode = String.fromCharCode;
	var $fromCodePoint = String.fromCodePoint;
	
	// length should be 1, old FF problem
	$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
	  // 21.1.2.2 String.fromCodePoint(...codePoints)
	  fromCodePoint: function fromCodePoint(x) { // eslint-disable-line no-unused-vars
	    var res = [];
	    var aLen = arguments.length;
	    var i = 0;
	    var code;
	    while (aLen > i) {
	      code = +arguments[i++];
	      if (toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
	      res.push(code < 0x10000
	        ? fromCharCode(code)
	        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
	      );
	    } return res.join('');
	  }
	});


/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	var toIObject = __webpack_require__(32);
	var toLength = __webpack_require__(37);
	
	$export($export.S, 'String', {
	  // 21.1.2.4 String.raw(callSite, ...substitutions)
	  raw: function raw(callSite) {
	    var tpl = toIObject(callSite.raw);
	    var len = toLength(tpl.length);
	    var aLen = arguments.length;
	    var res = [];
	    var i = 0;
	    while (len > i) {
	      res.push(String(tpl[i++]));
	      if (i < aLen) res.push(String(arguments[i]));
	    } return res.join('');
	  }
	});


/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.1.3.25 String.prototype.trim()
	__webpack_require__(83)('trim', function ($trim) {
	  return function trim() {
	    return $trim(this, 3);
	  };
	});


/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at = __webpack_require__(128)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(129)(String, 'String', function (iterated) {
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var index = this._i;
	  var point;
	  if (index >= O.length) return { value: undefined, done: true };
	  point = $at(O, index);
	  this._i += point.length;
	  return { value: point, done: false };
	});


/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(38);
	var defined = __webpack_require__(35);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function (TO_STRING) {
	  return function (that, pos) {
	    var s = String(defined(that));
	    var i = toInteger(pos);
	    var l = s.length;
	    var a, b;
	    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};


/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY = __webpack_require__(28);
	var $export = __webpack_require__(8);
	var redefine = __webpack_require__(18);
	var hide = __webpack_require__(10);
	var has = __webpack_require__(5);
	var Iterators = __webpack_require__(130);
	var $iterCreate = __webpack_require__(131);
	var setToStringTag = __webpack_require__(24);
	var getPrototypeOf = __webpack_require__(59);
	var ITERATOR = __webpack_require__(25)('iterator');
	var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
	var FF_ITERATOR = '@@iterator';
	var KEYS = 'keys';
	var VALUES = 'values';
	
	var returnThis = function () { return this; };
	
	module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function (kind) {
	    if (!BUGGY && kind in proto) return proto[kind];
	    switch (kind) {
	      case KEYS: return function keys() { return new Constructor(this, kind); };
	      case VALUES: return function values() { return new Constructor(this, kind); };
	    } return function entries() { return new Constructor(this, kind); };
	  };
	  var TAG = NAME + ' Iterator';
	  var DEF_VALUES = DEFAULT == VALUES;
	  var VALUES_BUG = false;
	  var proto = Base.prototype;
	  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
	  var $default = $native || getMethod(DEFAULT);
	  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
	  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
	  var methods, key, IteratorPrototype;
	  // Fix native
	  if ($anyNative) {
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
	    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if (DEF_VALUES && $native && $native.name !== VALUES) {
	    VALUES_BUG = true;
	    $default = function values() { return $native.call(this); };
	  }
	  // Define iterator
	  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG] = returnThis;
	  if (DEFAULT) {
	    methods = {
	      values: DEF_VALUES ? $default : getMethod(VALUES),
	      keys: IS_SET ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if (FORCED) for (key in methods) {
	      if (!(key in proto)) redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};


/***/ },
/* 130 */
/***/ function(module, exports) {

	module.exports = {};


/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create = __webpack_require__(46);
	var descriptor = __webpack_require__(17);
	var setToStringTag = __webpack_require__(24);
	var IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(10)(IteratorPrototype, __webpack_require__(25)('iterator'), function () { return this; });
	
	module.exports = function (Constructor, NAME, next) {
	  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
	  setToStringTag(Constructor, NAME + ' Iterator');
	};


/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var $at = __webpack_require__(128)(false);
	$export($export.P, 'String', {
	  // 21.1.3.3 String.prototype.codePointAt(pos)
	  codePointAt: function codePointAt(pos) {
	    return $at(this, pos);
	  }
	});


/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
	'use strict';
	var $export = __webpack_require__(8);
	var toLength = __webpack_require__(37);
	var context = __webpack_require__(134);
	var ENDS_WITH = 'endsWith';
	var $endsWith = ''[ENDS_WITH];
	
	$export($export.P + $export.F * __webpack_require__(136)(ENDS_WITH), 'String', {
	  endsWith: function endsWith(searchString /* , endPosition = @length */) {
	    var that = context(this, searchString, ENDS_WITH);
	    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
	    var len = toLength(that.length);
	    var end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);
	    var search = String(searchString);
	    return $endsWith
	      ? $endsWith.call(that, search, end)
	      : that.slice(end - search.length, end) === search;
	  }
	});


/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	// helper for String#{startsWith, endsWith, includes}
	var isRegExp = __webpack_require__(135);
	var defined = __webpack_require__(35);
	
	module.exports = function (that, searchString, NAME) {
	  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
	  return String(defined(that));
	};


/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.8 IsRegExp(argument)
	var isObject = __webpack_require__(13);
	var cof = __webpack_require__(34);
	var MATCH = __webpack_require__(25)('match');
	module.exports = function (it) {
	  var isRegExp;
	  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
	};


/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	var MATCH = __webpack_require__(25)('match');
	module.exports = function (KEY) {
	  var re = /./;
	  try {
	    '/./'[KEY](re);
	  } catch (e) {
	    try {
	      re[MATCH] = false;
	      return !'/./'[KEY](re);
	    } catch (f) { /* empty */ }
	  } return true;
	};


/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.7 String.prototype.includes(searchString, position = 0)
	'use strict';
	var $export = __webpack_require__(8);
	var context = __webpack_require__(134);
	var INCLUDES = 'includes';
	
	$export($export.P + $export.F * __webpack_require__(136)(INCLUDES), 'String', {
	  includes: function includes(searchString /* , position = 0 */) {
	    return !!~context(this, searchString, INCLUDES)
	      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});


/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	
	$export($export.P, 'String', {
	  // 21.1.3.13 String.prototype.repeat(count)
	  repeat: __webpack_require__(91)
	});


/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
	'use strict';
	var $export = __webpack_require__(8);
	var toLength = __webpack_require__(37);
	var context = __webpack_require__(134);
	var STARTS_WITH = 'startsWith';
	var $startsWith = ''[STARTS_WITH];
	
	$export($export.P + $export.F * __webpack_require__(136)(STARTS_WITH), 'String', {
	  startsWith: function startsWith(searchString /* , position = 0 */) {
	    var that = context(this, searchString, STARTS_WITH);
	    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
	    var search = String(searchString);
	    return $startsWith
	      ? $startsWith.call(that, search, index)
	      : that.slice(index, index + search.length) === search;
	  }
	});


/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.2 String.prototype.anchor(name)
	__webpack_require__(141)('anchor', function (createHTML) {
	  return function anchor(name) {
	    return createHTML(this, 'a', 'name', name);
	  };
	});


/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	var fails = __webpack_require__(7);
	var defined = __webpack_require__(35);
	var quot = /"/g;
	// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
	var createHTML = function (string, tag, attribute, value) {
	  var S = String(defined(string));
	  var p1 = '<' + tag;
	  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
	  return p1 + '>' + S + '</' + tag + '>';
	};
	module.exports = function (NAME, exec) {
	  var O = {};
	  O[NAME] = exec(createHTML);
	  $export($export.P + $export.F * fails(function () {
	    var test = ''[NAME]('"');
	    return test !== test.toLowerCase() || test.split('"').length > 3;
	  }), 'String', O);
	};


/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.3 String.prototype.big()
	__webpack_require__(141)('big', function (createHTML) {
	  return function big() {
	    return createHTML(this, 'big', '', '');
	  };
	});


/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.4 String.prototype.blink()
	__webpack_require__(141)('blink', function (createHTML) {
	  return function blink() {
	    return createHTML(this, 'blink', '', '');
	  };
	});


/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.5 String.prototype.bold()
	__webpack_require__(141)('bold', function (createHTML) {
	  return function bold() {
	    return createHTML(this, 'b', '', '');
	  };
	});


/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.6 String.prototype.fixed()
	__webpack_require__(141)('fixed', function (createHTML) {
	  return function fixed() {
	    return createHTML(this, 'tt', '', '');
	  };
	});


/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.7 String.prototype.fontcolor(color)
	__webpack_require__(141)('fontcolor', function (createHTML) {
	  return function fontcolor(color) {
	    return createHTML(this, 'font', 'color', color);
	  };
	});


/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.8 String.prototype.fontsize(size)
	__webpack_require__(141)('fontsize', function (createHTML) {
	  return function fontsize(size) {
	    return createHTML(this, 'font', 'size', size);
	  };
	});


/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.9 String.prototype.italics()
	__webpack_require__(141)('italics', function (createHTML) {
	  return function italics() {
	    return createHTML(this, 'i', '', '');
	  };
	});


/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.10 String.prototype.link(url)
	__webpack_require__(141)('link', function (createHTML) {
	  return function link(url) {
	    return createHTML(this, 'a', 'href', url);
	  };
	});


/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.11 String.prototype.small()
	__webpack_require__(141)('small', function (createHTML) {
	  return function small() {
	    return createHTML(this, 'small', '', '');
	  };
	});


/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.12 String.prototype.strike()
	__webpack_require__(141)('strike', function (createHTML) {
	  return function strike() {
	    return createHTML(this, 'strike', '', '');
	  };
	});


/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.13 String.prototype.sub()
	__webpack_require__(141)('sub', function (createHTML) {
	  return function sub() {
	    return createHTML(this, 'sub', '', '');
	  };
	});


/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.14 String.prototype.sup()
	__webpack_require__(141)('sup', function (createHTML) {
	  return function sup() {
	    return createHTML(this, 'sup', '', '');
	  };
	});


/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	// 20.3.3.1 / 15.9.4.4 Date.now()
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Date', { now: function () { return new Date().getTime(); } });


/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var toObject = __webpack_require__(58);
	var toPrimitive = __webpack_require__(16);
	
	$export($export.P + $export.F * __webpack_require__(7)(function () {
	  return new Date(NaN).toJSON() !== null
	    || Date.prototype.toJSON.call({ toISOString: function () { return 1; } }) !== 1;
	}), 'Date', {
	  // eslint-disable-next-line no-unused-vars
	  toJSON: function toJSON(key) {
	    var O = toObject(this);
	    var pv = toPrimitive(O);
	    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
	  }
	});


/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
	var $export = __webpack_require__(8);
	var toISOString = __webpack_require__(157);
	
	// PhantomJS / old WebKit has a broken implementations
	$export($export.P + $export.F * (Date.prototype.toISOString !== toISOString), 'Date', {
	  toISOString: toISOString
	});


/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
	var fails = __webpack_require__(7);
	var getTime = Date.prototype.getTime;
	var $toISOString = Date.prototype.toISOString;
	
	var lz = function (num) {
	  return num > 9 ? num : '0' + num;
	};
	
	// PhantomJS / old WebKit has a broken implementations
	module.exports = (fails(function () {
	  return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
	}) || !fails(function () {
	  $toISOString.call(new Date(NaN));
	})) ? function toISOString() {
	  if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
	  var d = this;
	  var y = d.getUTCFullYear();
	  var m = d.getUTCMilliseconds();
	  var s = y < 0 ? '-' : y > 9999 ? '+' : '';
	  return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
	    '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
	    'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
	    ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
	} : $toISOString;


/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	var DateProto = Date.prototype;
	var INVALID_DATE = 'Invalid Date';
	var TO_STRING = 'toString';
	var $toString = DateProto[TO_STRING];
	var getTime = DateProto.getTime;
	if (new Date(NaN) + '' != INVALID_DATE) {
	  __webpack_require__(18)(DateProto, TO_STRING, function toString() {
	    var value = getTime.call(this);
	    // eslint-disable-next-line no-self-compare
	    return value === value ? $toString.call(this) : INVALID_DATE;
	  });
	}


/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	var TO_PRIMITIVE = __webpack_require__(25)('toPrimitive');
	var proto = Date.prototype;
	
	if (!(TO_PRIMITIVE in proto)) __webpack_require__(10)(proto, TO_PRIMITIVE, __webpack_require__(160));


/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var anObject = __webpack_require__(12);
	var toPrimitive = __webpack_require__(16);
	var NUMBER = 'number';
	
	module.exports = function (hint) {
	  if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');
	  return toPrimitive(anObject(this), hint != NUMBER);
	};


/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Array', { isArray: __webpack_require__(45) });


/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx = __webpack_require__(20);
	var $export = __webpack_require__(8);
	var toObject = __webpack_require__(58);
	var call = __webpack_require__(163);
	var isArrayIter = __webpack_require__(164);
	var toLength = __webpack_require__(37);
	var createProperty = __webpack_require__(165);
	var getIterFn = __webpack_require__(166);
	
	$export($export.S + $export.F * !__webpack_require__(167)(function (iter) { Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
	    var O = toObject(arrayLike);
	    var C = typeof this == 'function' ? this : Array;
	    var aLen = arguments.length;
	    var mapfn = aLen > 1 ? arguments[1] : undefined;
	    var mapping = mapfn !== undefined;
	    var index = 0;
	    var iterFn = getIterFn(O);
	    var length, result, step, iterator;
	    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
	      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for (result = new C(length); length > index; index++) {
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(12);
	module.exports = function (iterator, fn, value, entries) {
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch (e) {
	    var ret = iterator['return'];
	    if (ret !== undefined) anObject(ret.call(iterator));
	    throw e;
	  }
	};


/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators = __webpack_require__(130);
	var ITERATOR = __webpack_require__(25)('iterator');
	var ArrayProto = Array.prototype;
	
	module.exports = function (it) {
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};


/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(11);
	var createDesc = __webpack_require__(17);
	
	module.exports = function (object, index, value) {
	  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};


/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	var classof = __webpack_require__(75);
	var ITERATOR = __webpack_require__(25)('iterator');
	var Iterators = __webpack_require__(130);
	module.exports = __webpack_require__(9).getIteratorMethod = function (it) {
	  if (it != undefined) return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};


/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR = __webpack_require__(25)('iterator');
	var SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function () { SAFE_CLOSING = true; };
	  // eslint-disable-next-line no-throw-literal
	  Array.from(riter, function () { throw 2; });
	} catch (e) { /* empty */ }
	
	module.exports = function (exec, skipClosing) {
	  if (!skipClosing && !SAFE_CLOSING) return false;
	  var safe = false;
	  try {
	    var arr = [7];
	    var iter = arr[ITERATOR]();
	    iter.next = function () { return { done: safe = true }; };
	    arr[ITERATOR] = function () { return iter; };
	    exec(arr);
	  } catch (e) { /* empty */ }
	  return safe;
	};


/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var createProperty = __webpack_require__(165);
	
	// WebKit Array.of isn't generic
	$export($export.S + $export.F * __webpack_require__(7)(function () {
	  function F() { /* empty */ }
	  return !(Array.of.call(F) instanceof F);
	}), 'Array', {
	  // 22.1.2.3 Array.of( ...items)
	  of: function of(/* ...args */) {
	    var index = 0;
	    var aLen = arguments.length;
	    var result = new (typeof this == 'function' ? this : Array)(aLen);
	    while (aLen > index) createProperty(result, index, arguments[index++]);
	    result.length = aLen;
	    return result;
	  }
	});


/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.13 Array.prototype.join(separator)
	var $export = __webpack_require__(8);
	var toIObject = __webpack_require__(32);
	var arrayJoin = [].join;
	
	// fallback for not array-like strings
	$export($export.P + $export.F * (__webpack_require__(33) != Object || !__webpack_require__(170)(arrayJoin)), 'Array', {
	  join: function join(separator) {
	    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
	  }
	});


/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var fails = __webpack_require__(7);
	
	module.exports = function (method, arg) {
	  return !!method && fails(function () {
	    // eslint-disable-next-line no-useless-call
	    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
	  });
	};


/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var html = __webpack_require__(48);
	var cof = __webpack_require__(34);
	var toAbsoluteIndex = __webpack_require__(39);
	var toLength = __webpack_require__(37);
	var arraySlice = [].slice;
	
	// fallback for not array-like ES3 strings and DOM objects
	$export($export.P + $export.F * __webpack_require__(7)(function () {
	  if (html) arraySlice.call(html);
	}), 'Array', {
	  slice: function slice(begin, end) {
	    var len = toLength(this.length);
	    var klass = cof(this);
	    end = end === undefined ? len : end;
	    if (klass == 'Array') return arraySlice.call(this, begin, end);
	    var start = toAbsoluteIndex(begin, len);
	    var upTo = toAbsoluteIndex(end, len);
	    var size = toLength(upTo - start);
	    var cloned = Array(size);
	    var i = 0;
	    for (; i < size; i++) cloned[i] = klass == 'String'
	      ? this.charAt(start + i)
	      : this[start + i];
	    return cloned;
	  }
	});


/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var aFunction = __webpack_require__(21);
	var toObject = __webpack_require__(58);
	var fails = __webpack_require__(7);
	var $sort = [].sort;
	var test = [1, 2, 3];
	
	$export($export.P + $export.F * (fails(function () {
	  // IE8-
	  test.sort(undefined);
	}) || !fails(function () {
	  // V8 bug
	  test.sort(null);
	  // Old WebKit
	}) || !__webpack_require__(170)($sort)), 'Array', {
	  // 22.1.3.25 Array.prototype.sort(comparefn)
	  sort: function sort(comparefn) {
	    return comparefn === undefined
	      ? $sort.call(toObject(this))
	      : $sort.call(toObject(this), aFunction(comparefn));
	  }
	});


/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var $forEach = __webpack_require__(174)(0);
	var STRICT = __webpack_require__(170)([].forEach, true);
	
	$export($export.P + $export.F * !STRICT, 'Array', {
	  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
	  forEach: function forEach(callbackfn /* , thisArg */) {
	    return $forEach(this, callbackfn, arguments[1]);
	  }
	});


/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx = __webpack_require__(20);
	var IObject = __webpack_require__(33);
	var toObject = __webpack_require__(58);
	var toLength = __webpack_require__(37);
	var asc = __webpack_require__(175);
	module.exports = function (TYPE, $create) {
	  var IS_MAP = TYPE == 1;
	  var IS_FILTER = TYPE == 2;
	  var IS_SOME = TYPE == 3;
	  var IS_EVERY = TYPE == 4;
	  var IS_FIND_INDEX = TYPE == 6;
	  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
	  var create = $create || asc;
	  return function ($this, callbackfn, that) {
	    var O = toObject($this);
	    var self = IObject(O);
	    var f = ctx(callbackfn, that, 3);
	    var length = toLength(self.length);
	    var index = 0;
	    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
	    var val, res;
	    for (;length > index; index++) if (NO_HOLES || index in self) {
	      val = self[index];
	      res = f(val, index, O);
	      if (TYPE) {
	        if (IS_MAP) result[index] = res;   // map
	        else if (res) switch (TYPE) {
	          case 3: return true;             // some
	          case 5: return val;              // find
	          case 6: return index;            // findIndex
	          case 2: result.push(val);        // filter
	        } else if (IS_EVERY) return false; // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};


/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var speciesConstructor = __webpack_require__(176);
	
	module.exports = function (original, length) {
	  return new (speciesConstructor(original))(length);
	};


/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13);
	var isArray = __webpack_require__(45);
	var SPECIES = __webpack_require__(25)('species');
	
	module.exports = function (original) {
	  var C;
	  if (isArray(original)) {
	    C = original.constructor;
	    // cross-realm fallback
	    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
	    if (isObject(C)) {
	      C = C[SPECIES];
	      if (C === null) C = undefined;
	    }
	  } return C === undefined ? Array : C;
	};


/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var $map = __webpack_require__(174)(1);
	
	$export($export.P + $export.F * !__webpack_require__(170)([].map, true), 'Array', {
	  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
	  map: function map(callbackfn /* , thisArg */) {
	    return $map(this, callbackfn, arguments[1]);
	  }
	});


/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var $filter = __webpack_require__(174)(2);
	
	$export($export.P + $export.F * !__webpack_require__(170)([].filter, true), 'Array', {
	  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
	  filter: function filter(callbackfn /* , thisArg */) {
	    return $filter(this, callbackfn, arguments[1]);
	  }
	});


/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var $some = __webpack_require__(174)(3);
	
	$export($export.P + $export.F * !__webpack_require__(170)([].some, true), 'Array', {
	  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
	  some: function some(callbackfn /* , thisArg */) {
	    return $some(this, callbackfn, arguments[1]);
	  }
	});


/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var $every = __webpack_require__(174)(4);
	
	$export($export.P + $export.F * !__webpack_require__(170)([].every, true), 'Array', {
	  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
	  every: function every(callbackfn /* , thisArg */) {
	    return $every(this, callbackfn, arguments[1]);
	  }
	});


/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var $reduce = __webpack_require__(182);
	
	$export($export.P + $export.F * !__webpack_require__(170)([].reduce, true), 'Array', {
	  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
	  reduce: function reduce(callbackfn /* , initialValue */) {
	    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
	  }
	});


/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	var aFunction = __webpack_require__(21);
	var toObject = __webpack_require__(58);
	var IObject = __webpack_require__(33);
	var toLength = __webpack_require__(37);
	
	module.exports = function (that, callbackfn, aLen, memo, isRight) {
	  aFunction(callbackfn);
	  var O = toObject(that);
	  var self = IObject(O);
	  var length = toLength(O.length);
	  var index = isRight ? length - 1 : 0;
	  var i = isRight ? -1 : 1;
	  if (aLen < 2) for (;;) {
	    if (index in self) {
	      memo = self[index];
	      index += i;
	      break;
	    }
	    index += i;
	    if (isRight ? index < 0 : length <= index) {
	      throw TypeError('Reduce of empty array with no initial value');
	    }
	  }
	  for (;isRight ? index >= 0 : length > index; index += i) if (index in self) {
	    memo = callbackfn(memo, self[index], index, O);
	  }
	  return memo;
	};


/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var $reduce = __webpack_require__(182);
	
	$export($export.P + $export.F * !__webpack_require__(170)([].reduceRight, true), 'Array', {
	  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
	  reduceRight: function reduceRight(callbackfn /* , initialValue */) {
	    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
	  }
	});


/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var $indexOf = __webpack_require__(36)(false);
	var $native = [].indexOf;
	var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;
	
	$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(170)($native)), 'Array', {
	  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
	  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
	    return NEGATIVE_ZERO
	      // convert -0 to +0
	      ? $native.apply(this, arguments) || 0
	      : $indexOf(this, searchElement, arguments[1]);
	  }
	});


/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var toIObject = __webpack_require__(32);
	var toInteger = __webpack_require__(38);
	var toLength = __webpack_require__(37);
	var $native = [].lastIndexOf;
	var NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;
	
	$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(170)($native)), 'Array', {
	  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
	  lastIndexOf: function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
	    // convert -0 to +0
	    if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
	    var O = toIObject(this);
	    var length = toLength(O.length);
	    var index = length - 1;
	    if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));
	    if (index < 0) index = length + index;
	    for (;index >= 0; index--) if (index in O) if (O[index] === searchElement) return index || 0;
	    return -1;
	  }
	});


/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	var $export = __webpack_require__(8);
	
	$export($export.P, 'Array', { copyWithin: __webpack_require__(187) });
	
	__webpack_require__(188)('copyWithin');


/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	'use strict';
	var toObject = __webpack_require__(58);
	var toAbsoluteIndex = __webpack_require__(39);
	var toLength = __webpack_require__(37);
	
	module.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
	  var O = toObject(this);
	  var len = toLength(O.length);
	  var to = toAbsoluteIndex(target, len);
	  var from = toAbsoluteIndex(start, len);
	  var end = arguments.length > 2 ? arguments[2] : undefined;
	  var count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
	  var inc = 1;
	  if (from < to && to < from + count) {
	    inc = -1;
	    from += count - 1;
	    to += count - 1;
	  }
	  while (count-- > 0) {
	    if (from in O) O[to] = O[from];
	    else delete O[to];
	    to += inc;
	    from += inc;
	  } return O;
	};


/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = __webpack_require__(25)('unscopables');
	var ArrayProto = Array.prototype;
	if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(10)(ArrayProto, UNSCOPABLES, {});
	module.exports = function (key) {
	  ArrayProto[UNSCOPABLES][key] = true;
	};


/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	var $export = __webpack_require__(8);
	
	$export($export.P, 'Array', { fill: __webpack_require__(190) });
	
	__webpack_require__(188)('fill');


/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	'use strict';
	var toObject = __webpack_require__(58);
	var toAbsoluteIndex = __webpack_require__(39);
	var toLength = __webpack_require__(37);
	module.exports = function fill(value /* , start = 0, end = @length */) {
	  var O = toObject(this);
	  var length = toLength(O.length);
	  var aLen = arguments.length;
	  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
	  var end = aLen > 2 ? arguments[2] : undefined;
	  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
	  while (endPos > index) O[index++] = value;
	  return O;
	};


/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
	var $export = __webpack_require__(8);
	var $find = __webpack_require__(174)(5);
	var KEY = 'find';
	var forced = true;
	// Shouldn't skip holes
	if (KEY in []) Array(1)[KEY](function () { forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  find: function find(callbackfn /* , that = undefined */) {
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(188)(KEY);


/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
	var $export = __webpack_require__(8);
	var $find = __webpack_require__(174)(6);
	var KEY = 'findIndex';
	var forced = true;
	// Shouldn't skip holes
	if (KEY in []) Array(1)[KEY](function () { forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  findIndex: function findIndex(callbackfn /* , that = undefined */) {
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(188)(KEY);


/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(194)('Array');


/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global = __webpack_require__(4);
	var dP = __webpack_require__(11);
	var DESCRIPTORS = __webpack_require__(6);
	var SPECIES = __webpack_require__(25)('species');
	
	module.exports = function (KEY) {
	  var C = global[KEY];
	  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
	    configurable: true,
	    get: function () { return this; }
	  });
	};


/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(188);
	var step = __webpack_require__(196);
	var Iterators = __webpack_require__(130);
	var toIObject = __webpack_require__(32);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(129)(Array, 'Array', function (iterated, kind) {
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var kind = this._k;
	  var index = this._i++;
	  if (!O || index >= O.length) {
	    this._t = undefined;
	    return step(1);
	  }
	  if (kind == 'keys') return step(0, index);
	  if (kind == 'values') return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');


/***/ },
/* 196 */
/***/ function(module, exports) {

	module.exports = function (done, value) {
	  return { value: value, done: !!done };
	};


/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(4);
	var inheritIfRequired = __webpack_require__(88);
	var dP = __webpack_require__(11).f;
	var gOPN = __webpack_require__(50).f;
	var isRegExp = __webpack_require__(135);
	var $flags = __webpack_require__(198);
	var $RegExp = global.RegExp;
	var Base = $RegExp;
	var proto = $RegExp.prototype;
	var re1 = /a/g;
	var re2 = /a/g;
	// "new" creates a new object, old webkit buggy here
	var CORRECT_NEW = new $RegExp(re1) !== re1;
	
	if (__webpack_require__(6) && (!CORRECT_NEW || __webpack_require__(7)(function () {
	  re2[__webpack_require__(25)('match')] = false;
	  // RegExp constructor can alter flags and IsRegExp works correct with @@match
	  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
	}))) {
	  $RegExp = function RegExp(p, f) {
	    var tiRE = this instanceof $RegExp;
	    var piRE = isRegExp(p);
	    var fiU = f === undefined;
	    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
	      : inheritIfRequired(CORRECT_NEW
	        ? new Base(piRE && !fiU ? p.source : p, f)
	        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
	      , tiRE ? this : proto, $RegExp);
	  };
	  var proxy = function (key) {
	    key in $RegExp || dP($RegExp, key, {
	      configurable: true,
	      get: function () { return Base[key]; },
	      set: function (it) { Base[key] = it; }
	    });
	  };
	  for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
	  proto.constructor = $RegExp;
	  $RegExp.prototype = proto;
	  __webpack_require__(18)(global, 'RegExp', $RegExp);
	}
	
	__webpack_require__(194)('RegExp');


/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.2.5.3 get RegExp.prototype.flags
	var anObject = __webpack_require__(12);
	module.exports = function () {
	  var that = anObject(this);
	  var result = '';
	  if (that.global) result += 'g';
	  if (that.ignoreCase) result += 'i';
	  if (that.multiline) result += 'm';
	  if (that.unicode) result += 'u';
	  if (that.sticky) result += 'y';
	  return result;
	};


/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	__webpack_require__(200);
	var anObject = __webpack_require__(12);
	var $flags = __webpack_require__(198);
	var DESCRIPTORS = __webpack_require__(6);
	var TO_STRING = 'toString';
	var $toString = /./[TO_STRING];
	
	var define = function (fn) {
	  __webpack_require__(18)(RegExp.prototype, TO_STRING, fn, true);
	};
	
	// 21.2.5.14 RegExp.prototype.toString()
	if (__webpack_require__(7)(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
	  define(function toString() {
	    var R = anObject(this);
	    return '/'.concat(R.source, '/',
	      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
	  });
	// FF44- RegExp#toString has a wrong name
	} else if ($toString.name != TO_STRING) {
	  define(function toString() {
	    return $toString.call(this);
	  });
	}


/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	// 21.2.5.3 get RegExp.prototype.flags()
	if (__webpack_require__(6) && /./g.flags != 'g') __webpack_require__(11).f(RegExp.prototype, 'flags', {
	  configurable: true,
	  get: __webpack_require__(198)
	});


/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	// @@match logic
	__webpack_require__(202)('match', 1, function (defined, MATCH, $match) {
	  // 21.1.3.11 String.prototype.match(regexp)
	  return [function match(regexp) {
	    'use strict';
	    var O = defined(this);
	    var fn = regexp == undefined ? undefined : regexp[MATCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
	  }, $match];
	});


/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var hide = __webpack_require__(10);
	var redefine = __webpack_require__(18);
	var fails = __webpack_require__(7);
	var defined = __webpack_require__(35);
	var wks = __webpack_require__(25);
	
	module.exports = function (KEY, length, exec) {
	  var SYMBOL = wks(KEY);
	  var fns = exec(defined, SYMBOL, ''[KEY]);
	  var strfn = fns[0];
	  var rxfn = fns[1];
	  if (fails(function () {
	    var O = {};
	    O[SYMBOL] = function () { return 7; };
	    return ''[KEY](O) != 7;
	  })) {
	    redefine(String.prototype, KEY, strfn);
	    hide(RegExp.prototype, SYMBOL, length == 2
	      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
	      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
	      ? function (string, arg) { return rxfn.call(string, this, arg); }
	      // 21.2.5.6 RegExp.prototype[@@match](string)
	      // 21.2.5.9 RegExp.prototype[@@search](string)
	      : function (string) { return rxfn.call(string, this); }
	    );
	  }
	};


/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	// @@replace logic
	__webpack_require__(202)('replace', 2, function (defined, REPLACE, $replace) {
	  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
	  return [function replace(searchValue, replaceValue) {
	    'use strict';
	    var O = defined(this);
	    var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
	    return fn !== undefined
	      ? fn.call(searchValue, O, replaceValue)
	      : $replace.call(String(O), searchValue, replaceValue);
	  }, $replace];
	});


/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	// @@search logic
	__webpack_require__(202)('search', 1, function (defined, SEARCH, $search) {
	  // 21.1.3.15 String.prototype.search(regexp)
	  return [function search(regexp) {
	    'use strict';
	    var O = defined(this);
	    var fn = regexp == undefined ? undefined : regexp[SEARCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
	  }, $search];
	});


/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	// @@split logic
	__webpack_require__(202)('split', 2, function (defined, SPLIT, $split) {
	  'use strict';
	  var isRegExp = __webpack_require__(135);
	  var _split = $split;
	  var $push = [].push;
	  var $SPLIT = 'split';
	  var LENGTH = 'length';
	  var LAST_INDEX = 'lastIndex';
	  if (
	    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
	    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
	    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
	    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
	    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
	    ''[$SPLIT](/.?/)[LENGTH]
	  ) {
	    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
	    // based on es5-shim implementation, need to rework it
	    $split = function (separator, limit) {
	      var string = String(this);
	      if (separator === undefined && limit === 0) return [];
	      // If `separator` is not a regex, use native split
	      if (!isRegExp(separator)) return _split.call(string, separator, limit);
	      var output = [];
	      var flags = (separator.ignoreCase ? 'i' : '') +
	                  (separator.multiline ? 'm' : '') +
	                  (separator.unicode ? 'u' : '') +
	                  (separator.sticky ? 'y' : '');
	      var lastLastIndex = 0;
	      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
	      // Make `global` and avoid `lastIndex` issues by working with a copy
	      var separatorCopy = new RegExp(separator.source, flags + 'g');
	      var separator2, match, lastIndex, lastLength, i;
	      // Doesn't need flags gy, but they don't hurt
	      if (!NPCG) separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
	      while (match = separatorCopy.exec(string)) {
	        // `separatorCopy.lastIndex` is not reliable cross-browser
	        lastIndex = match.index + match[0][LENGTH];
	        if (lastIndex > lastLastIndex) {
	          output.push(string.slice(lastLastIndex, match.index));
	          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
	          // eslint-disable-next-line no-loop-func
	          if (!NPCG && match[LENGTH] > 1) match[0].replace(separator2, function () {
	            for (i = 1; i < arguments[LENGTH] - 2; i++) if (arguments[i] === undefined) match[i] = undefined;
	          });
	          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
	          lastLength = match[0][LENGTH];
	          lastLastIndex = lastIndex;
	          if (output[LENGTH] >= splitLimit) break;
	        }
	        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
	      }
	      if (lastLastIndex === string[LENGTH]) {
	        if (lastLength || !separatorCopy.test('')) output.push('');
	      } else output.push(string.slice(lastLastIndex));
	      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
	    };
	  // Chakra, V8
	  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
	    $split = function (separator, limit) {
	      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
	    };
	  }
	  // 21.1.3.17 String.prototype.split(separator, limit)
	  return [function split(separator, limit) {
	    var O = defined(this);
	    var fn = separator == undefined ? undefined : separator[SPLIT];
	    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
	  }, $split];
	});


/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY = __webpack_require__(28);
	var global = __webpack_require__(4);
	var ctx = __webpack_require__(20);
	var classof = __webpack_require__(75);
	var $export = __webpack_require__(8);
	var isObject = __webpack_require__(13);
	var aFunction = __webpack_require__(21);
	var anInstance = __webpack_require__(207);
	var forOf = __webpack_require__(208);
	var speciesConstructor = __webpack_require__(209);
	var task = __webpack_require__(210).set;
	var microtask = __webpack_require__(211)();
	var newPromiseCapabilityModule = __webpack_require__(212);
	var perform = __webpack_require__(213);
	var promiseResolve = __webpack_require__(214);
	var PROMISE = 'Promise';
	var TypeError = global.TypeError;
	var process = global.process;
	var $Promise = global[PROMISE];
	var isNode = classof(process) == 'process';
	var empty = function () { /* empty */ };
	var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
	var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;
	
	var USE_NATIVE = !!function () {
	  try {
	    // correct subclassing with @@species support
	    var promise = $Promise.resolve(1);
	    var FakePromise = (promise.constructor = {})[__webpack_require__(25)('species')] = function (exec) {
	      exec(empty, empty);
	    };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch (e) { /* empty */ }
	}();
	
	// helpers
	var sameConstructor = LIBRARY ? function (a, b) {
	  // with library wrapper special case
	  return a === b || a === $Promise && b === Wrapper;
	} : function (a, b) {
	  return a === b;
	};
	var isThenable = function (it) {
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var notify = function (promise, isReject) {
	  if (promise._n) return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function () {
	    var value = promise._v;
	    var ok = promise._s == 1;
	    var i = 0;
	    var run = function (reaction) {
	      var handler = ok ? reaction.ok : reaction.fail;
	      var resolve = reaction.resolve;
	      var reject = reaction.reject;
	      var domain = reaction.domain;
	      var result, then;
	      try {
	        if (handler) {
	          if (!ok) {
	            if (promise._h == 2) onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if (handler === true) result = value;
	          else {
	            if (domain) domain.enter();
	            result = handler(value);
	            if (domain) domain.exit();
	          }
	          if (result === reaction.promise) {
	            reject(TypeError('Promise-chain cycle'));
	          } else if (then = isThenable(result)) {
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch (e) {
	        reject(e);
	      }
	    };
	    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if (isReject && !promise._h) onUnhandled(promise);
	  });
	};
	var onUnhandled = function (promise) {
	  task.call(global, function () {
	    var value = promise._v;
	    var unhandled = isUnhandled(promise);
	    var result, handler, console;
	    if (unhandled) {
	      result = perform(function () {
	        if (isNode) {
	          process.emit('unhandledRejection', value, promise);
	        } else if (handler = global.onunhandledrejection) {
	          handler({ promise: promise, reason: value });
	        } else if ((console = global.console) && console.error) {
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    } promise._a = undefined;
	    if (unhandled && result.e) throw result.v;
	  });
	};
	var isUnhandled = function (promise) {
	  if (promise._h == 1) return false;
	  var chain = promise._a || promise._c;
	  var i = 0;
	  var reaction;
	  while (chain.length > i) {
	    reaction = chain[i++];
	    if (reaction.fail || !isUnhandled(reaction.promise)) return false;
	  } return true;
	};
	var onHandleUnhandled = function (promise) {
	  task.call(global, function () {
	    var handler;
	    if (isNode) {
	      process.emit('rejectionHandled', promise);
	    } else if (handler = global.onrejectionhandled) {
	      handler({ promise: promise, reason: promise._v });
	    }
	  });
	};
	var $reject = function (value) {
	  var promise = this;
	  if (promise._d) return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if (!promise._a) promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function (value) {
	  var promise = this;
	  var then;
	  if (promise._d) return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if (promise === value) throw TypeError("Promise can't be resolved itself");
	    if (then = isThenable(value)) {
	      microtask(function () {
	        var wrapper = { _w: promise, _d: false }; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch (e) {
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch (e) {
	    $reject.call({ _w: promise, _d: false }, e); // wrap
	  }
	};
	
	// constructor polyfill
	if (!USE_NATIVE) {
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor) {
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch (err) {
	      $reject.call(this, err);
	    }
	  };
	  // eslint-disable-next-line no-unused-vars
	  Internal = function Promise(executor) {
	    this._c = [];             // <- awaiting reactions
	    this._a = undefined;      // <- checked in isUnhandled reactions
	    this._s = 0;              // <- state
	    this._d = false;          // <- done
	    this._v = undefined;      // <- value
	    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false;          // <- notify
	  };
	  Internal.prototype = __webpack_require__(215)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected) {
	      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if (this._a) this._a.push(reaction);
	      if (this._s) notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function (onRejected) {
	      return this.then(undefined, onRejected);
	    }
	  });
	  OwnPromiseCapability = function () {
	    var promise = new Internal();
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject = ctx($reject, promise, 1);
	  };
	  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
	    return sameConstructor($Promise, C)
	      ? new OwnPromiseCapability(C)
	      : newGenericPromiseCapability(C);
	  };
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
	__webpack_require__(24)($Promise, PROMISE);
	__webpack_require__(194)(PROMISE);
	Wrapper = __webpack_require__(9)[PROMISE];
	
	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r) {
	    var capability = newPromiseCapability(this);
	    var $$reject = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x) {
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if (x instanceof $Promise && sameConstructor(x.constructor, this)) return x;
	    return promiseResolve(this, x);
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(167)(function (iter) {
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable) {
	    var C = this;
	    var capability = newPromiseCapability(C);
	    var resolve = capability.resolve;
	    var reject = capability.reject;
	    var result = perform(function () {
	      var values = [];
	      var index = 0;
	      var remaining = 1;
	      forOf(iterable, false, function (promise) {
	        var $index = index++;
	        var alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function (value) {
	          if (alreadyCalled) return;
	          alreadyCalled = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if (result.e) reject(result.v);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable) {
	    var C = this;
	    var capability = newPromiseCapability(C);
	    var reject = capability.reject;
	    var result = perform(function () {
	      forOf(iterable, false, function (promise) {
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if (result.e) reject(result.v);
	    return capability.promise;
	  }
	});


/***/ },
/* 207 */
/***/ function(module, exports) {

	module.exports = function (it, Constructor, name, forbiddenField) {
	  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};


/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	var ctx = __webpack_require__(20);
	var call = __webpack_require__(163);
	var isArrayIter = __webpack_require__(164);
	var anObject = __webpack_require__(12);
	var toLength = __webpack_require__(37);
	var getIterFn = __webpack_require__(166);
	var BREAK = {};
	var RETURN = {};
	var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
	  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
	  var f = ctx(fn, that, entries ? 2 : 1);
	  var index = 0;
	  var length, step, iterator, result;
	  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if (result === BREAK || result === RETURN) return result;
	  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
	    result = call(iterator, f, step.value, entries);
	    if (result === BREAK || result === RETURN) return result;
	  }
	};
	exports.BREAK = BREAK;
	exports.RETURN = RETURN;


/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject = __webpack_require__(12);
	var aFunction = __webpack_require__(21);
	var SPECIES = __webpack_require__(25)('species');
	module.exports = function (O, D) {
	  var C = anObject(O).constructor;
	  var S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};


/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	var ctx = __webpack_require__(20);
	var invoke = __webpack_require__(78);
	var html = __webpack_require__(48);
	var cel = __webpack_require__(15);
	var global = __webpack_require__(4);
	var process = global.process;
	var setTask = global.setImmediate;
	var clearTask = global.clearImmediate;
	var MessageChannel = global.MessageChannel;
	var Dispatch = global.Dispatch;
	var counter = 0;
	var queue = {};
	var ONREADYSTATECHANGE = 'onreadystatechange';
	var defer, channel, port;
	var run = function () {
	  var id = +this;
	  // eslint-disable-next-line no-prototype-builtins
	  if (queue.hasOwnProperty(id)) {
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function (event) {
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if (!setTask || !clearTask) {
	  setTask = function setImmediate(fn) {
	    var args = [];
	    var i = 1;
	    while (arguments.length > i) args.push(arguments[i++]);
	    queue[++counter] = function () {
	      // eslint-disable-next-line no-new-func
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id) {
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if (__webpack_require__(34)(process) == 'process') {
	    defer = function (id) {
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Sphere (JS game engine) Dispatch API
	  } else if (Dispatch && Dispatch.now) {
	    defer = function (id) {
	      Dispatch.now(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if (MessageChannel) {
	    channel = new MessageChannel();
	    port = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
	    defer = function (id) {
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	  // IE8-
	  } else if (ONREADYSTATECHANGE in cel('script')) {
	    defer = function (id) {
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function (id) {
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set: setTask,
	  clear: clearTask
	};


/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(4);
	var macrotask = __webpack_require__(210).set;
	var Observer = global.MutationObserver || global.WebKitMutationObserver;
	var process = global.process;
	var Promise = global.Promise;
	var isNode = __webpack_require__(34)(process) == 'process';
	
	module.exports = function () {
	  var head, last, notify;
	
	  var flush = function () {
	    var parent, fn;
	    if (isNode && (parent = process.domain)) parent.exit();
	    while (head) {
	      fn = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch (e) {
	        if (head) notify();
	        else last = undefined;
	        throw e;
	      }
	    } last = undefined;
	    if (parent) parent.enter();
	  };
	
	  // Node.js
	  if (isNode) {
	    notify = function () {
	      process.nextTick(flush);
	    };
	  // browsers with MutationObserver
	  } else if (Observer) {
	    var toggle = true;
	    var node = document.createTextNode('');
	    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
	    notify = function () {
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if (Promise && Promise.resolve) {
	    var promise = Promise.resolve();
	    notify = function () {
	      promise.then(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function () {
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }
	
	  return function (fn) {
	    var task = { fn: fn, next: undefined };
	    if (last) last.next = task;
	    if (!head) {
	      head = task;
	      notify();
	    } last = task;
	  };
	};


/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 25.4.1.5 NewPromiseCapability(C)
	var aFunction = __webpack_require__(21);
	
	function PromiseCapability(C) {
	  var resolve, reject;
	  this.promise = new C(function ($$resolve, $$reject) {
	    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject = aFunction(reject);
	}
	
	module.exports.f = function (C) {
	  return new PromiseCapability(C);
	};


/***/ },
/* 213 */
/***/ function(module, exports) {

	module.exports = function (exec) {
	  try {
	    return { e: false, v: exec() };
	  } catch (e) {
	    return { e: true, v: e };
	  }
	};


/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	var newPromiseCapability = __webpack_require__(212);
	
	module.exports = function (C, x) {
	  var promiseCapability = newPromiseCapability.f(C);
	  var resolve = promiseCapability.resolve;
	  resolve(x);
	  return promiseCapability.promise;
	};


/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__(18);
	module.exports = function (target, src, safe) {
	  for (var key in src) redefine(target, key, src[key], safe);
	  return target;
	};


/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(217);
	var validate = __webpack_require__(218);
	var MAP = 'Map';
	
	// 23.1 Map Objects
	module.exports = __webpack_require__(219)(MAP, function (get) {
	  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.1.3.6 Map.prototype.get(key)
	  get: function get(key) {
	    var entry = strong.getEntry(validate(this, MAP), key);
	    return entry && entry.v;
	  },
	  // 23.1.3.9 Map.prototype.set(key, value)
	  set: function set(key, value) {
	    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
	  }
	}, strong, true);


/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var dP = __webpack_require__(11).f;
	var create = __webpack_require__(46);
	var redefineAll = __webpack_require__(215);
	var ctx = __webpack_require__(20);
	var anInstance = __webpack_require__(207);
	var forOf = __webpack_require__(208);
	var $iterDefine = __webpack_require__(129);
	var step = __webpack_require__(196);
	var setSpecies = __webpack_require__(194);
	var DESCRIPTORS = __webpack_require__(6);
	var fastKey = __webpack_require__(22).fastKey;
	var validate = __webpack_require__(218);
	var SIZE = DESCRIPTORS ? '_s' : 'size';
	
	var getEntry = function (that, key) {
	  // fast case
	  var index = fastKey(key);
	  var entry;
	  if (index !== 'F') return that._i[index];
	  // frozen object case
	  for (entry = that._f; entry; entry = entry.n) {
	    if (entry.k == key) return entry;
	  }
	};
	
	module.exports = {
	  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
	    var C = wrapper(function (that, iterable) {
	      anInstance(that, C, NAME, '_i');
	      that._t = NAME;         // collection type
	      that._i = create(null); // index
	      that._f = undefined;    // first entry
	      that._l = undefined;    // last entry
	      that[SIZE] = 0;         // size
	      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear() {
	        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
	          entry.r = true;
	          if (entry.p) entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function (key) {
	        var that = validate(this, NAME);
	        var entry = getEntry(that, key);
	        if (entry) {
	          var next = entry.n;
	          var prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if (prev) prev.n = next;
	          if (next) next.p = prev;
	          if (that._f == entry) that._f = next;
	          if (that._l == entry) that._l = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /* , that = undefined */) {
	        validate(this, NAME);
	        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
	        var entry;
	        while (entry = entry ? entry.n : this._f) {
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while (entry && entry.r) entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key) {
	        return !!getEntry(validate(this, NAME), key);
	      }
	    });
	    if (DESCRIPTORS) dP(C.prototype, 'size', {
	      get: function () {
	        return validate(this, NAME)[SIZE];
	      }
	    });
	    return C;
	  },
	  def: function (that, key, value) {
	    var entry = getEntry(that, key);
	    var prev, index;
	    // change existing entry
	    if (entry) {
	      entry.v = value;
	    // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that._l,             // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if (!that._f) that._f = entry;
	      if (prev) prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if (index !== 'F') that._i[index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  setStrong: function (C, NAME, IS_MAP) {
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    $iterDefine(C, NAME, function (iterated, kind) {
	      this._t = validate(iterated, NAME); // target
	      this._k = kind;                     // kind
	      this._l = undefined;                // previous
	    }, function () {
	      var that = this;
	      var kind = that._k;
	      var entry = that._l;
	      // revert to the last existing entry
	      while (entry && entry.r) entry = entry.p;
	      // get next entry
	      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if (kind == 'keys') return step(0, entry.k);
	      if (kind == 'values') return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);
	
	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(NAME);
	  }
	};


/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13);
	module.exports = function (it, TYPE) {
	  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
	  return it;
	};


/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global = __webpack_require__(4);
	var $export = __webpack_require__(8);
	var redefine = __webpack_require__(18);
	var redefineAll = __webpack_require__(215);
	var meta = __webpack_require__(22);
	var forOf = __webpack_require__(208);
	var anInstance = __webpack_require__(207);
	var isObject = __webpack_require__(13);
	var fails = __webpack_require__(7);
	var $iterDetect = __webpack_require__(167);
	var setToStringTag = __webpack_require__(24);
	var inheritIfRequired = __webpack_require__(88);
	
	module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
	  var Base = global[NAME];
	  var C = Base;
	  var ADDER = IS_MAP ? 'set' : 'add';
	  var proto = C && C.prototype;
	  var O = {};
	  var fixMethod = function (KEY) {
	    var fn = proto[KEY];
	    redefine(proto, KEY,
	      KEY == 'delete' ? function (a) {
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'has' ? function has(a) {
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'get' ? function get(a) {
	        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
	        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
	    );
	  };
	  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
	    new C().entries().next();
	  }))) {
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	    meta.NEED = true;
	  } else {
	    var instance = new C();
	    // early implementations not supports chaining
	    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
	    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
	    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
	    // most early implementations doesn't supports iterables, most modern - not close it correctly
	    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
	    // for early implementations -0 and +0 not the same
	    var BUGGY_ZERO = !IS_WEAK && fails(function () {
	      // V8 ~ Chromium 42- fails only with 5+ elements
	      var $instance = new C();
	      var index = 5;
	      while (index--) $instance[ADDER](index, index);
	      return !$instance.has(-0);
	    });
	    if (!ACCEPT_ITERABLES) {
	      C = wrapper(function (target, iterable) {
	        anInstance(target, C, NAME);
	        var that = inheritIfRequired(new Base(), target, C);
	        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
	        return that;
	      });
	      C.prototype = proto;
	      proto.constructor = C;
	    }
	    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
	      fixMethod('delete');
	      fixMethod('has');
	      IS_MAP && fixMethod('get');
	    }
	    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
	    // weak collections should not contains .clear method
	    if (IS_WEAK && proto.clear) delete proto.clear;
	  }
	
	  setToStringTag(C, NAME);
	
	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F * (C != Base), O);
	
	  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);
	
	  return C;
	};


/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(217);
	var validate = __webpack_require__(218);
	var SET = 'Set';
	
	// 23.2 Set Objects
	module.exports = __webpack_require__(219)(SET, function (get) {
	  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value) {
	    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
	  }
	}, strong);


/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var each = __webpack_require__(174)(0);
	var redefine = __webpack_require__(18);
	var meta = __webpack_require__(22);
	var assign = __webpack_require__(69);
	var weak = __webpack_require__(222);
	var isObject = __webpack_require__(13);
	var fails = __webpack_require__(7);
	var validate = __webpack_require__(218);
	var WEAK_MAP = 'WeakMap';
	var getWeak = meta.getWeak;
	var isExtensible = Object.isExtensible;
	var uncaughtFrozenStore = weak.ufstore;
	var tmp = {};
	var InternalMap;
	
	var wrapper = function (get) {
	  return function WeakMap() {
	    return get(this, arguments.length > 0 ? arguments[0] : undefined);
	  };
	};
	
	var methods = {
	  // 23.3.3.3 WeakMap.prototype.get(key)
	  get: function get(key) {
	    if (isObject(key)) {
	      var data = getWeak(key);
	      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
	      return data ? data[this._i] : undefined;
	    }
	  },
	  // 23.3.3.5 WeakMap.prototype.set(key, value)
	  set: function set(key, value) {
	    return weak.def(validate(this, WEAK_MAP), key, value);
	  }
	};
	
	// 23.3 WeakMap Objects
	var $WeakMap = module.exports = __webpack_require__(219)(WEAK_MAP, wrapper, methods, weak, true, true);
	
	// IE11 WeakMap frozen keys fix
	if (fails(function () { return new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7; })) {
	  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
	  assign(InternalMap.prototype, methods);
	  meta.NEED = true;
	  each(['delete', 'has', 'get', 'set'], function (key) {
	    var proto = $WeakMap.prototype;
	    var method = proto[key];
	    redefine(proto, key, function (a, b) {
	      // store frozen objects on internal weakmap shim
	      if (isObject(a) && !isExtensible(a)) {
	        if (!this._f) this._f = new InternalMap();
	        var result = this._f[key](a, b);
	        return key == 'set' ? this : result;
	      // store all the rest on native weakmap
	      } return method.call(this, a, b);
	    });
	  });
	}


/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var redefineAll = __webpack_require__(215);
	var getWeak = __webpack_require__(22).getWeak;
	var anObject = __webpack_require__(12);
	var isObject = __webpack_require__(13);
	var anInstance = __webpack_require__(207);
	var forOf = __webpack_require__(208);
	var createArrayMethod = __webpack_require__(174);
	var $has = __webpack_require__(5);
	var validate = __webpack_require__(218);
	var arrayFind = createArrayMethod(5);
	var arrayFindIndex = createArrayMethod(6);
	var id = 0;
	
	// fallback for uncaught frozen keys
	var uncaughtFrozenStore = function (that) {
	  return that._l || (that._l = new UncaughtFrozenStore());
	};
	var UncaughtFrozenStore = function () {
	  this.a = [];
	};
	var findUncaughtFrozen = function (store, key) {
	  return arrayFind(store.a, function (it) {
	    return it[0] === key;
	  });
	};
	UncaughtFrozenStore.prototype = {
	  get: function (key) {
	    var entry = findUncaughtFrozen(this, key);
	    if (entry) return entry[1];
	  },
	  has: function (key) {
	    return !!findUncaughtFrozen(this, key);
	  },
	  set: function (key, value) {
	    var entry = findUncaughtFrozen(this, key);
	    if (entry) entry[1] = value;
	    else this.a.push([key, value]);
	  },
	  'delete': function (key) {
	    var index = arrayFindIndex(this.a, function (it) {
	      return it[0] === key;
	    });
	    if (~index) this.a.splice(index, 1);
	    return !!~index;
	  }
	};
	
	module.exports = {
	  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
	    var C = wrapper(function (that, iterable) {
	      anInstance(that, C, NAME, '_i');
	      that._t = NAME;      // collection type
	      that._i = id++;      // collection id
	      that._l = undefined; // leak store for uncaught frozen objects
	      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.3.3.2 WeakMap.prototype.delete(key)
	      // 23.4.3.3 WeakSet.prototype.delete(value)
	      'delete': function (key) {
	        if (!isObject(key)) return false;
	        var data = getWeak(key);
	        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
	        return data && $has(data, this._i) && delete data[this._i];
	      },
	      // 23.3.3.4 WeakMap.prototype.has(key)
	      // 23.4.3.4 WeakSet.prototype.has(value)
	      has: function has(key) {
	        if (!isObject(key)) return false;
	        var data = getWeak(key);
	        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
	        return data && $has(data, this._i);
	      }
	    });
	    return C;
	  },
	  def: function (that, key, value) {
	    var data = getWeak(anObject(key), true);
	    if (data === true) uncaughtFrozenStore(that).set(key, value);
	    else data[that._i] = value;
	    return that;
	  },
	  ufstore: uncaughtFrozenStore
	};


/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var weak = __webpack_require__(222);
	var validate = __webpack_require__(218);
	var WEAK_SET = 'WeakSet';
	
	// 23.4 WeakSet Objects
	__webpack_require__(219)(WEAK_SET, function (get) {
	  return function WeakSet() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.4.3.1 WeakSet.prototype.add(value)
	  add: function add(value) {
	    return weak.def(validate(this, WEAK_SET), value, true);
	  }
	}, weak, false, true);


/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var $typed = __webpack_require__(225);
	var buffer = __webpack_require__(226);
	var anObject = __webpack_require__(12);
	var toAbsoluteIndex = __webpack_require__(39);
	var toLength = __webpack_require__(37);
	var isObject = __webpack_require__(13);
	var ArrayBuffer = __webpack_require__(4).ArrayBuffer;
	var speciesConstructor = __webpack_require__(209);
	var $ArrayBuffer = buffer.ArrayBuffer;
	var $DataView = buffer.DataView;
	var $isView = $typed.ABV && ArrayBuffer.isView;
	var $slice = $ArrayBuffer.prototype.slice;
	var VIEW = $typed.VIEW;
	var ARRAY_BUFFER = 'ArrayBuffer';
	
	$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), { ArrayBuffer: $ArrayBuffer });
	
	$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
	  // 24.1.3.1 ArrayBuffer.isView(arg)
	  isView: function isView(it) {
	    return $isView && $isView(it) || isObject(it) && VIEW in it;
	  }
	});
	
	$export($export.P + $export.U + $export.F * __webpack_require__(7)(function () {
	  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
	}), ARRAY_BUFFER, {
	  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
	  slice: function slice(start, end) {
	    if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix
	    var len = anObject(this).byteLength;
	    var first = toAbsoluteIndex(start, len);
	    var final = toAbsoluteIndex(end === undefined ? len : end, len);
	    var result = new (speciesConstructor(this, $ArrayBuffer))(toLength(final - first));
	    var viewS = new $DataView(this);
	    var viewT = new $DataView(result);
	    var index = 0;
	    while (first < final) {
	      viewT.setUint8(index++, viewS.getUint8(first++));
	    } return result;
	  }
	});
	
	__webpack_require__(194)(ARRAY_BUFFER);


/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(4);
	var hide = __webpack_require__(10);
	var uid = __webpack_require__(19);
	var TYPED = uid('typed_array');
	var VIEW = uid('view');
	var ABV = !!(global.ArrayBuffer && global.DataView);
	var CONSTR = ABV;
	var i = 0;
	var l = 9;
	var Typed;
	
	var TypedArrayConstructors = (
	  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
	).split(',');
	
	while (i < l) {
	  if (Typed = global[TypedArrayConstructors[i++]]) {
	    hide(Typed.prototype, TYPED, true);
	    hide(Typed.prototype, VIEW, true);
	  } else CONSTR = false;
	}
	
	module.exports = {
	  ABV: ABV,
	  CONSTR: CONSTR,
	  TYPED: TYPED,
	  VIEW: VIEW
	};


/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global = __webpack_require__(4);
	var DESCRIPTORS = __webpack_require__(6);
	var LIBRARY = __webpack_require__(28);
	var $typed = __webpack_require__(225);
	var hide = __webpack_require__(10);
	var redefineAll = __webpack_require__(215);
	var fails = __webpack_require__(7);
	var anInstance = __webpack_require__(207);
	var toInteger = __webpack_require__(38);
	var toLength = __webpack_require__(37);
	var toIndex = __webpack_require__(227);
	var gOPN = __webpack_require__(50).f;
	var dP = __webpack_require__(11).f;
	var arrayFill = __webpack_require__(190);
	var setToStringTag = __webpack_require__(24);
	var ARRAY_BUFFER = 'ArrayBuffer';
	var DATA_VIEW = 'DataView';
	var PROTOTYPE = 'prototype';
	var WRONG_LENGTH = 'Wrong length!';
	var WRONG_INDEX = 'Wrong index!';
	var $ArrayBuffer = global[ARRAY_BUFFER];
	var $DataView = global[DATA_VIEW];
	var Math = global.Math;
	var RangeError = global.RangeError;
	// eslint-disable-next-line no-shadow-restricted-names
	var Infinity = global.Infinity;
	var BaseBuffer = $ArrayBuffer;
	var abs = Math.abs;
	var pow = Math.pow;
	var floor = Math.floor;
	var log = Math.log;
	var LN2 = Math.LN2;
	var BUFFER = 'buffer';
	var BYTE_LENGTH = 'byteLength';
	var BYTE_OFFSET = 'byteOffset';
	var $BUFFER = DESCRIPTORS ? '_b' : BUFFER;
	var $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH;
	var $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;
	
	// IEEE754 conversions based on https://github.com/feross/ieee754
	function packIEEE754(value, mLen, nBytes) {
	  var buffer = Array(nBytes);
	  var eLen = nBytes * 8 - mLen - 1;
	  var eMax = (1 << eLen) - 1;
	  var eBias = eMax >> 1;
	  var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
	  var i = 0;
	  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
	  var e, m, c;
	  value = abs(value);
	  // eslint-disable-next-line no-self-compare
	  if (value != value || value === Infinity) {
	    // eslint-disable-next-line no-self-compare
	    m = value != value ? 1 : 0;
	    e = eMax;
	  } else {
	    e = floor(log(value) / LN2);
	    if (value * (c = pow(2, -e)) < 1) {
	      e--;
	      c *= 2;
	    }
	    if (e + eBias >= 1) {
	      value += rt / c;
	    } else {
	      value += rt * pow(2, 1 - eBias);
	    }
	    if (value * c >= 2) {
	      e++;
	      c /= 2;
	    }
	    if (e + eBias >= eMax) {
	      m = 0;
	      e = eMax;
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * pow(2, mLen);
	      e = e + eBias;
	    } else {
	      m = value * pow(2, eBias - 1) * pow(2, mLen);
	      e = 0;
	    }
	  }
	  for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
	  e = e << mLen | m;
	  eLen += mLen;
	  for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
	  buffer[--i] |= s * 128;
	  return buffer;
	}
	function unpackIEEE754(buffer, mLen, nBytes) {
	  var eLen = nBytes * 8 - mLen - 1;
	  var eMax = (1 << eLen) - 1;
	  var eBias = eMax >> 1;
	  var nBits = eLen - 7;
	  var i = nBytes - 1;
	  var s = buffer[i--];
	  var e = s & 127;
	  var m;
	  s >>= 7;
	  for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
	  m = e & (1 << -nBits) - 1;
	  e >>= -nBits;
	  nBits += mLen;
	  for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
	  if (e === 0) {
	    e = 1 - eBias;
	  } else if (e === eMax) {
	    return m ? NaN : s ? -Infinity : Infinity;
	  } else {
	    m = m + pow(2, mLen);
	    e = e - eBias;
	  } return (s ? -1 : 1) * m * pow(2, e - mLen);
	}
	
	function unpackI32(bytes) {
	  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
	}
	function packI8(it) {
	  return [it & 0xff];
	}
	function packI16(it) {
	  return [it & 0xff, it >> 8 & 0xff];
	}
	function packI32(it) {
	  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
	}
	function packF64(it) {
	  return packIEEE754(it, 52, 8);
	}
	function packF32(it) {
	  return packIEEE754(it, 23, 4);
	}
	
	function addGetter(C, key, internal) {
	  dP(C[PROTOTYPE], key, { get: function () { return this[internal]; } });
	}
	
	function get(view, bytes, index, isLittleEndian) {
	  var numIndex = +index;
	  var intIndex = toIndex(numIndex);
	  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b;
	  var start = intIndex + view[$OFFSET];
	  var pack = store.slice(start, start + bytes);
	  return isLittleEndian ? pack : pack.reverse();
	}
	function set(view, bytes, index, conversion, value, isLittleEndian) {
	  var numIndex = +index;
	  var intIndex = toIndex(numIndex);
	  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b;
	  var start = intIndex + view[$OFFSET];
	  var pack = conversion(+value);
	  for (var i = 0; i < bytes; i++) store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
	}
	
	if (!$typed.ABV) {
	  $ArrayBuffer = function ArrayBuffer(length) {
	    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
	    var byteLength = toIndex(length);
	    this._b = arrayFill.call(Array(byteLength), 0);
	    this[$LENGTH] = byteLength;
	  };
	
	  $DataView = function DataView(buffer, byteOffset, byteLength) {
	    anInstance(this, $DataView, DATA_VIEW);
	    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
	    var bufferLength = buffer[$LENGTH];
	    var offset = toInteger(byteOffset);
	    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
	    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
	    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
	    this[$BUFFER] = buffer;
	    this[$OFFSET] = offset;
	    this[$LENGTH] = byteLength;
	  };
	
	  if (DESCRIPTORS) {
	    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
	    addGetter($DataView, BUFFER, '_b');
	    addGetter($DataView, BYTE_LENGTH, '_l');
	    addGetter($DataView, BYTE_OFFSET, '_o');
	  }
	
	  redefineAll($DataView[PROTOTYPE], {
	    getInt8: function getInt8(byteOffset) {
	      return get(this, 1, byteOffset)[0] << 24 >> 24;
	    },
	    getUint8: function getUint8(byteOffset) {
	      return get(this, 1, byteOffset)[0];
	    },
	    getInt16: function getInt16(byteOffset /* , littleEndian */) {
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
	    },
	    getUint16: function getUint16(byteOffset /* , littleEndian */) {
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return bytes[1] << 8 | bytes[0];
	    },
	    getInt32: function getInt32(byteOffset /* , littleEndian */) {
	      return unpackI32(get(this, 4, byteOffset, arguments[1]));
	    },
	    getUint32: function getUint32(byteOffset /* , littleEndian */) {
	      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
	    },
	    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
	      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
	    },
	    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
	      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
	    },
	    setInt8: function setInt8(byteOffset, value) {
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setUint8: function setUint8(byteOffset, value) {
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
	      set(this, 4, byteOffset, packF32, value, arguments[2]);
	    },
	    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
	      set(this, 8, byteOffset, packF64, value, arguments[2]);
	    }
	  });
	} else {
	  if (!fails(function () {
	    $ArrayBuffer(1);
	  }) || !fails(function () {
	    new $ArrayBuffer(-1); // eslint-disable-line no-new
	  }) || fails(function () {
	    new $ArrayBuffer(); // eslint-disable-line no-new
	    new $ArrayBuffer(1.5); // eslint-disable-line no-new
	    new $ArrayBuffer(NaN); // eslint-disable-line no-new
	    return $ArrayBuffer.name != ARRAY_BUFFER;
	  })) {
	    $ArrayBuffer = function ArrayBuffer(length) {
	      anInstance(this, $ArrayBuffer);
	      return new BaseBuffer(toIndex(length));
	    };
	    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
	    for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
	      if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
	    }
	    if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
	  }
	  // iOS Safari 7.x bug
	  var view = new $DataView(new $ArrayBuffer(2));
	  var $setInt8 = $DataView[PROTOTYPE].setInt8;
	  view.setInt8(0, 2147483648);
	  view.setInt8(1, 2147483649);
	  if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
	    setInt8: function setInt8(byteOffset, value) {
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    },
	    setUint8: function setUint8(byteOffset, value) {
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    }
	  }, true);
	}
	setToStringTag($ArrayBuffer, ARRAY_BUFFER);
	setToStringTag($DataView, DATA_VIEW);
	hide($DataView[PROTOTYPE], $typed.VIEW, true);
	exports[ARRAY_BUFFER] = $ArrayBuffer;
	exports[DATA_VIEW] = $DataView;


/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	// https://tc39.github.io/ecma262/#sec-toindex
	var toInteger = __webpack_require__(38);
	var toLength = __webpack_require__(37);
	module.exports = function (it) {
	  if (it === undefined) return 0;
	  var number = toInteger(it);
	  var length = toLength(number);
	  if (number !== length) throw RangeError('Wrong length!');
	  return length;
	};


/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	$export($export.G + $export.W + $export.F * !__webpack_require__(225).ABV, {
	  DataView: __webpack_require__(226).DataView
	});


/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(230)('Int8', 1, function (init) {
	  return function Int8Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});


/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	if (__webpack_require__(6)) {
	  var LIBRARY = __webpack_require__(28);
	  var global = __webpack_require__(4);
	  var fails = __webpack_require__(7);
	  var $export = __webpack_require__(8);
	  var $typed = __webpack_require__(225);
	  var $buffer = __webpack_require__(226);
	  var ctx = __webpack_require__(20);
	  var anInstance = __webpack_require__(207);
	  var propertyDesc = __webpack_require__(17);
	  var hide = __webpack_require__(10);
	  var redefineAll = __webpack_require__(215);
	  var toInteger = __webpack_require__(38);
	  var toLength = __webpack_require__(37);
	  var toIndex = __webpack_require__(227);
	  var toAbsoluteIndex = __webpack_require__(39);
	  var toPrimitive = __webpack_require__(16);
	  var has = __webpack_require__(5);
	  var classof = __webpack_require__(75);
	  var isObject = __webpack_require__(13);
	  var toObject = __webpack_require__(58);
	  var isArrayIter = __webpack_require__(164);
	  var create = __webpack_require__(46);
	  var getPrototypeOf = __webpack_require__(59);
	  var gOPN = __webpack_require__(50).f;
	  var getIterFn = __webpack_require__(166);
	  var uid = __webpack_require__(19);
	  var wks = __webpack_require__(25);
	  var createArrayMethod = __webpack_require__(174);
	  var createArrayIncludes = __webpack_require__(36);
	  var speciesConstructor = __webpack_require__(209);
	  var ArrayIterators = __webpack_require__(195);
	  var Iterators = __webpack_require__(130);
	  var $iterDetect = __webpack_require__(167);
	  var setSpecies = __webpack_require__(194);
	  var arrayFill = __webpack_require__(190);
	  var arrayCopyWithin = __webpack_require__(187);
	  var $DP = __webpack_require__(11);
	  var $GOPD = __webpack_require__(51);
	  var dP = $DP.f;
	  var gOPD = $GOPD.f;
	  var RangeError = global.RangeError;
	  var TypeError = global.TypeError;
	  var Uint8Array = global.Uint8Array;
	  var ARRAY_BUFFER = 'ArrayBuffer';
	  var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;
	  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
	  var PROTOTYPE = 'prototype';
	  var ArrayProto = Array[PROTOTYPE];
	  var $ArrayBuffer = $buffer.ArrayBuffer;
	  var $DataView = $buffer.DataView;
	  var arrayForEach = createArrayMethod(0);
	  var arrayFilter = createArrayMethod(2);
	  var arraySome = createArrayMethod(3);
	  var arrayEvery = createArrayMethod(4);
	  var arrayFind = createArrayMethod(5);
	  var arrayFindIndex = createArrayMethod(6);
	  var arrayIncludes = createArrayIncludes(true);
	  var arrayIndexOf = createArrayIncludes(false);
	  var arrayValues = ArrayIterators.values;
	  var arrayKeys = ArrayIterators.keys;
	  var arrayEntries = ArrayIterators.entries;
	  var arrayLastIndexOf = ArrayProto.lastIndexOf;
	  var arrayReduce = ArrayProto.reduce;
	  var arrayReduceRight = ArrayProto.reduceRight;
	  var arrayJoin = ArrayProto.join;
	  var arraySort = ArrayProto.sort;
	  var arraySlice = ArrayProto.slice;
	  var arrayToString = ArrayProto.toString;
	  var arrayToLocaleString = ArrayProto.toLocaleString;
	  var ITERATOR = wks('iterator');
	  var TAG = wks('toStringTag');
	  var TYPED_CONSTRUCTOR = uid('typed_constructor');
	  var DEF_CONSTRUCTOR = uid('def_constructor');
	  var ALL_CONSTRUCTORS = $typed.CONSTR;
	  var TYPED_ARRAY = $typed.TYPED;
	  var VIEW = $typed.VIEW;
	  var WRONG_LENGTH = 'Wrong length!';
	
	  var $map = createArrayMethod(1, function (O, length) {
	    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
	  });
	
	  var LITTLE_ENDIAN = fails(function () {
	    // eslint-disable-next-line no-undef
	    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
	  });
	
	  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
	    new Uint8Array(1).set({});
	  });
	
	  var toOffset = function (it, BYTES) {
	    var offset = toInteger(it);
	    if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
	    return offset;
	  };
	
	  var validate = function (it) {
	    if (isObject(it) && TYPED_ARRAY in it) return it;
	    throw TypeError(it + ' is not a typed array!');
	  };
	
	  var allocate = function (C, length) {
	    if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
	      throw TypeError('It is not a typed array constructor!');
	    } return new C(length);
	  };
	
	  var speciesFromList = function (O, list) {
	    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
	  };
	
	  var fromList = function (C, list) {
	    var index = 0;
	    var length = list.length;
	    var result = allocate(C, length);
	    while (length > index) result[index] = list[index++];
	    return result;
	  };
	
	  var addGetter = function (it, key, internal) {
	    dP(it, key, { get: function () { return this._d[internal]; } });
	  };
	
	  var $from = function from(source /* , mapfn, thisArg */) {
	    var O = toObject(source);
	    var aLen = arguments.length;
	    var mapfn = aLen > 1 ? arguments[1] : undefined;
	    var mapping = mapfn !== undefined;
	    var iterFn = getIterFn(O);
	    var i, length, values, result, step, iterator;
	    if (iterFn != undefined && !isArrayIter(iterFn)) {
	      for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
	        values.push(step.value);
	      } O = values;
	    }
	    if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);
	    for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
	      result[i] = mapping ? mapfn(O[i], i) : O[i];
	    }
	    return result;
	  };
	
	  var $of = function of(/* ...items */) {
	    var index = 0;
	    var length = arguments.length;
	    var result = allocate(this, length);
	    while (length > index) result[index] = arguments[index++];
	    return result;
	  };
	
	  // iOS Safari 6.x fails here
	  var TO_LOCALE_BUG = !!Uint8Array && fails(function () { arrayToLocaleString.call(new Uint8Array(1)); });
	
	  var $toLocaleString = function toLocaleString() {
	    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
	  };
	
	  var proto = {
	    copyWithin: function copyWithin(target, start /* , end */) {
	      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
	    },
	    every: function every(callbackfn /* , thisArg */) {
	      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    fill: function fill(value /* , start, end */) { // eslint-disable-line no-unused-vars
	      return arrayFill.apply(validate(this), arguments);
	    },
	    filter: function filter(callbackfn /* , thisArg */) {
	      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
	        arguments.length > 1 ? arguments[1] : undefined));
	    },
	    find: function find(predicate /* , thisArg */) {
	      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    findIndex: function findIndex(predicate /* , thisArg */) {
	      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    forEach: function forEach(callbackfn /* , thisArg */) {
	      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    indexOf: function indexOf(searchElement /* , fromIndex */) {
	      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    includes: function includes(searchElement /* , fromIndex */) {
	      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    join: function join(separator) { // eslint-disable-line no-unused-vars
	      return arrayJoin.apply(validate(this), arguments);
	    },
	    lastIndexOf: function lastIndexOf(searchElement /* , fromIndex */) { // eslint-disable-line no-unused-vars
	      return arrayLastIndexOf.apply(validate(this), arguments);
	    },
	    map: function map(mapfn /* , thisArg */) {
	      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    reduce: function reduce(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
	      return arrayReduce.apply(validate(this), arguments);
	    },
	    reduceRight: function reduceRight(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
	      return arrayReduceRight.apply(validate(this), arguments);
	    },
	    reverse: function reverse() {
	      var that = this;
	      var length = validate(that).length;
	      var middle = Math.floor(length / 2);
	      var index = 0;
	      var value;
	      while (index < middle) {
	        value = that[index];
	        that[index++] = that[--length];
	        that[length] = value;
	      } return that;
	    },
	    some: function some(callbackfn /* , thisArg */) {
	      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    sort: function sort(comparefn) {
	      return arraySort.call(validate(this), comparefn);
	    },
	    subarray: function subarray(begin, end) {
	      var O = validate(this);
	      var length = O.length;
	      var $begin = toAbsoluteIndex(begin, length);
	      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
	        O.buffer,
	        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
	        toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin)
	      );
	    }
	  };
	
	  var $slice = function slice(start, end) {
	    return speciesFromList(this, arraySlice.call(validate(this), start, end));
	  };
	
	  var $set = function set(arrayLike /* , offset */) {
	    validate(this);
	    var offset = toOffset(arguments[1], 1);
	    var length = this.length;
	    var src = toObject(arrayLike);
	    var len = toLength(src.length);
	    var index = 0;
	    if (len + offset > length) throw RangeError(WRONG_LENGTH);
	    while (index < len) this[offset + index] = src[index++];
	  };
	
	  var $iterators = {
	    entries: function entries() {
	      return arrayEntries.call(validate(this));
	    },
	    keys: function keys() {
	      return arrayKeys.call(validate(this));
	    },
	    values: function values() {
	      return arrayValues.call(validate(this));
	    }
	  };
	
	  var isTAIndex = function (target, key) {
	    return isObject(target)
	      && target[TYPED_ARRAY]
	      && typeof key != 'symbol'
	      && key in target
	      && String(+key) == String(key);
	  };
	  var $getDesc = function getOwnPropertyDescriptor(target, key) {
	    return isTAIndex(target, key = toPrimitive(key, true))
	      ? propertyDesc(2, target[key])
	      : gOPD(target, key);
	  };
	  var $setDesc = function defineProperty(target, key, desc) {
	    if (isTAIndex(target, key = toPrimitive(key, true))
	      && isObject(desc)
	      && has(desc, 'value')
	      && !has(desc, 'get')
	      && !has(desc, 'set')
	      // TODO: add validation descriptor w/o calling accessors
	      && !desc.configurable
	      && (!has(desc, 'writable') || desc.writable)
	      && (!has(desc, 'enumerable') || desc.enumerable)
	    ) {
	      target[key] = desc.value;
	      return target;
	    } return dP(target, key, desc);
	  };
	
	  if (!ALL_CONSTRUCTORS) {
	    $GOPD.f = $getDesc;
	    $DP.f = $setDesc;
	  }
	
	  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
	    getOwnPropertyDescriptor: $getDesc,
	    defineProperty: $setDesc
	  });
	
	  if (fails(function () { arrayToString.call({}); })) {
	    arrayToString = arrayToLocaleString = function toString() {
	      return arrayJoin.call(this);
	    };
	  }
	
	  var $TypedArrayPrototype$ = redefineAll({}, proto);
	  redefineAll($TypedArrayPrototype$, $iterators);
	  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
	  redefineAll($TypedArrayPrototype$, {
	    slice: $slice,
	    set: $set,
	    constructor: function () { /* noop */ },
	    toString: arrayToString,
	    toLocaleString: $toLocaleString
	  });
	  addGetter($TypedArrayPrototype$, 'buffer', 'b');
	  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
	  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
	  addGetter($TypedArrayPrototype$, 'length', 'e');
	  dP($TypedArrayPrototype$, TAG, {
	    get: function () { return this[TYPED_ARRAY]; }
	  });
	
	  // eslint-disable-next-line max-statements
	  module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
	    CLAMPED = !!CLAMPED;
	    var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';
	    var GETTER = 'get' + KEY;
	    var SETTER = 'set' + KEY;
	    var TypedArray = global[NAME];
	    var Base = TypedArray || {};
	    var TAC = TypedArray && getPrototypeOf(TypedArray);
	    var FORCED = !TypedArray || !$typed.ABV;
	    var O = {};
	    var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
	    var getter = function (that, index) {
	      var data = that._d;
	      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
	    };
	    var setter = function (that, index, value) {
	      var data = that._d;
	      if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
	      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
	    };
	    var addElement = function (that, index) {
	      dP(that, index, {
	        get: function () {
	          return getter(this, index);
	        },
	        set: function (value) {
	          return setter(this, index, value);
	        },
	        enumerable: true
	      });
	    };
	    if (FORCED) {
	      TypedArray = wrapper(function (that, data, $offset, $length) {
	        anInstance(that, TypedArray, NAME, '_d');
	        var index = 0;
	        var offset = 0;
	        var buffer, byteLength, length, klass;
	        if (!isObject(data)) {
	          length = toIndex(data);
	          byteLength = length * BYTES;
	          buffer = new $ArrayBuffer(byteLength);
	        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
	          buffer = data;
	          offset = toOffset($offset, BYTES);
	          var $len = data.byteLength;
	          if ($length === undefined) {
	            if ($len % BYTES) throw RangeError(WRONG_LENGTH);
	            byteLength = $len - offset;
	            if (byteLength < 0) throw RangeError(WRONG_LENGTH);
	          } else {
	            byteLength = toLength($length) * BYTES;
	            if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
	          }
	          length = byteLength / BYTES;
	        } else if (TYPED_ARRAY in data) {
	          return fromList(TypedArray, data);
	        } else {
	          return $from.call(TypedArray, data);
	        }
	        hide(that, '_d', {
	          b: buffer,
	          o: offset,
	          l: byteLength,
	          e: length,
	          v: new $DataView(buffer)
	        });
	        while (index < length) addElement(that, index++);
	      });
	      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
	      hide(TypedArrayPrototype, 'constructor', TypedArray);
	    } else if (!fails(function () {
	      TypedArray(1);
	    }) || !fails(function () {
	      new TypedArray(-1); // eslint-disable-line no-new
	    }) || !$iterDetect(function (iter) {
	      new TypedArray(); // eslint-disable-line no-new
	      new TypedArray(null); // eslint-disable-line no-new
	      new TypedArray(1.5); // eslint-disable-line no-new
	      new TypedArray(iter); // eslint-disable-line no-new
	    }, true)) {
	      TypedArray = wrapper(function (that, data, $offset, $length) {
	        anInstance(that, TypedArray, NAME);
	        var klass;
	        // `ws` module bug, temporarily remove validation length for Uint8Array
	        // https://github.com/websockets/ws/pull/645
	        if (!isObject(data)) return new Base(toIndex(data));
	        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
	          return $length !== undefined
	            ? new Base(data, toOffset($offset, BYTES), $length)
	            : $offset !== undefined
	              ? new Base(data, toOffset($offset, BYTES))
	              : new Base(data);
	        }
	        if (TYPED_ARRAY in data) return fromList(TypedArray, data);
	        return $from.call(TypedArray, data);
	      });
	      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
	        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
	      });
	      TypedArray[PROTOTYPE] = TypedArrayPrototype;
	      if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
	    }
	    var $nativeIterator = TypedArrayPrototype[ITERATOR];
	    var CORRECT_ITER_NAME = !!$nativeIterator
	      && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);
	    var $iterator = $iterators.values;
	    hide(TypedArray, TYPED_CONSTRUCTOR, true);
	    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
	    hide(TypedArrayPrototype, VIEW, true);
	    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);
	
	    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
	      dP(TypedArrayPrototype, TAG, {
	        get: function () { return NAME; }
	      });
	    }
	
	    O[NAME] = TypedArray;
	
	    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);
	
	    $export($export.S, NAME, {
	      BYTES_PER_ELEMENT: BYTES
	    });
	
	    $export($export.S + $export.F * fails(function () { Base.of.call(TypedArray, 1); }), NAME, {
	      from: $from,
	      of: $of
	    });
	
	    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);
	
	    $export($export.P, NAME, proto);
	
	    setSpecies(NAME);
	
	    $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });
	
	    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);
	
	    if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;
	
	    $export($export.P + $export.F * fails(function () {
	      new TypedArray(1).slice();
	    }), NAME, { slice: $slice });
	
	    $export($export.P + $export.F * (fails(function () {
	      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
	    }) || !fails(function () {
	      TypedArrayPrototype.toLocaleString.call([1, 2]);
	    })), NAME, { toLocaleString: $toLocaleString });
	
	    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
	    if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
	  };
	} else module.exports = function () { /* empty */ };


/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(230)('Uint8', 1, function (init) {
	  return function Uint8Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});


/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(230)('Uint8', 1, function (init) {
	  return function Uint8ClampedArray(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	}, true);


/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(230)('Int16', 2, function (init) {
	  return function Int16Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});


/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(230)('Uint16', 2, function (init) {
	  return function Uint16Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});


/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(230)('Int32', 4, function (init) {
	  return function Int32Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});


/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(230)('Uint32', 4, function (init) {
	  return function Uint32Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});


/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(230)('Float32', 4, function (init) {
	  return function Float32Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});


/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(230)('Float64', 8, function (init) {
	  return function Float64Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});


/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
	var $export = __webpack_require__(8);
	var aFunction = __webpack_require__(21);
	var anObject = __webpack_require__(12);
	var rApply = (__webpack_require__(4).Reflect || {}).apply;
	var fApply = Function.apply;
	// MS Edge argumentsList argument is optional
	$export($export.S + $export.F * !__webpack_require__(7)(function () {
	  rApply(function () { /* empty */ });
	}), 'Reflect', {
	  apply: function apply(target, thisArgument, argumentsList) {
	    var T = aFunction(target);
	    var L = anObject(argumentsList);
	    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
	  }
	});


/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
	var $export = __webpack_require__(8);
	var create = __webpack_require__(46);
	var aFunction = __webpack_require__(21);
	var anObject = __webpack_require__(12);
	var isObject = __webpack_require__(13);
	var fails = __webpack_require__(7);
	var bind = __webpack_require__(77);
	var rConstruct = (__webpack_require__(4).Reflect || {}).construct;
	
	// MS Edge supports only 2 arguments and argumentsList argument is optional
	// FF Nightly sets third argument as `new.target`, but does not create `this` from it
	var NEW_TARGET_BUG = fails(function () {
	  function F() { /* empty */ }
	  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);
	});
	var ARGS_BUG = !fails(function () {
	  rConstruct(function () { /* empty */ });
	});
	
	$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
	  construct: function construct(Target, args /* , newTarget */) {
	    aFunction(Target);
	    anObject(args);
	    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
	    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
	    if (Target == newTarget) {
	      // w/o altered newTarget, optimization for 0-4 arguments
	      switch (args.length) {
	        case 0: return new Target();
	        case 1: return new Target(args[0]);
	        case 2: return new Target(args[0], args[1]);
	        case 3: return new Target(args[0], args[1], args[2]);
	        case 4: return new Target(args[0], args[1], args[2], args[3]);
	      }
	      // w/o altered newTarget, lot of arguments case
	      var $args = [null];
	      $args.push.apply($args, args);
	      return new (bind.apply(Target, $args))();
	    }
	    // with altered newTarget, not support built-in constructors
	    var proto = newTarget.prototype;
	    var instance = create(isObject(proto) ? proto : Object.prototype);
	    var result = Function.apply.call(Target, instance, args);
	    return isObject(result) ? result : instance;
	  }
	});


/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
	var dP = __webpack_require__(11);
	var $export = __webpack_require__(8);
	var anObject = __webpack_require__(12);
	var toPrimitive = __webpack_require__(16);
	
	// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
	$export($export.S + $export.F * __webpack_require__(7)(function () {
	  // eslint-disable-next-line no-undef
	  Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });
	}), 'Reflect', {
	  defineProperty: function defineProperty(target, propertyKey, attributes) {
	    anObject(target);
	    propertyKey = toPrimitive(propertyKey, true);
	    anObject(attributes);
	    try {
	      dP.f(target, propertyKey, attributes);
	      return true;
	    } catch (e) {
	      return false;
	    }
	  }
	});


/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.4 Reflect.deleteProperty(target, propertyKey)
	var $export = __webpack_require__(8);
	var gOPD = __webpack_require__(51).f;
	var anObject = __webpack_require__(12);
	
	$export($export.S, 'Reflect', {
	  deleteProperty: function deleteProperty(target, propertyKey) {
	    var desc = gOPD(anObject(target), propertyKey);
	    return desc && !desc.configurable ? false : delete target[propertyKey];
	  }
	});


/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 26.1.5 Reflect.enumerate(target)
	var $export = __webpack_require__(8);
	var anObject = __webpack_require__(12);
	var Enumerate = function (iterated) {
	  this._t = anObject(iterated); // target
	  this._i = 0;                  // next index
	  var keys = this._k = [];      // keys
	  var key;
	  for (key in iterated) keys.push(key);
	};
	__webpack_require__(131)(Enumerate, 'Object', function () {
	  var that = this;
	  var keys = that._k;
	  var key;
	  do {
	    if (that._i >= keys.length) return { value: undefined, done: true };
	  } while (!((key = keys[that._i++]) in that._t));
	  return { value: key, done: false };
	});
	
	$export($export.S, 'Reflect', {
	  enumerate: function enumerate(target) {
	    return new Enumerate(target);
	  }
	});


/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.6 Reflect.get(target, propertyKey [, receiver])
	var gOPD = __webpack_require__(51);
	var getPrototypeOf = __webpack_require__(59);
	var has = __webpack_require__(5);
	var $export = __webpack_require__(8);
	var isObject = __webpack_require__(13);
	var anObject = __webpack_require__(12);
	
	function get(target, propertyKey /* , receiver */) {
	  var receiver = arguments.length < 3 ? target : arguments[2];
	  var desc, proto;
	  if (anObject(target) === receiver) return target[propertyKey];
	  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value')
	    ? desc.value
	    : desc.get !== undefined
	      ? desc.get.call(receiver)
	      : undefined;
	  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
	}
	
	$export($export.S, 'Reflect', { get: get });


/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
	var gOPD = __webpack_require__(51);
	var $export = __webpack_require__(8);
	var anObject = __webpack_require__(12);
	
	$export($export.S, 'Reflect', {
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
	    return gOPD.f(anObject(target), propertyKey);
	  }
	});


/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.8 Reflect.getPrototypeOf(target)
	var $export = __webpack_require__(8);
	var getProto = __webpack_require__(59);
	var anObject = __webpack_require__(12);
	
	$export($export.S, 'Reflect', {
	  getPrototypeOf: function getPrototypeOf(target) {
	    return getProto(anObject(target));
	  }
	});


/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.9 Reflect.has(target, propertyKey)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Reflect', {
	  has: function has(target, propertyKey) {
	    return propertyKey in target;
	  }
	});


/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.10 Reflect.isExtensible(target)
	var $export = __webpack_require__(8);
	var anObject = __webpack_require__(12);
	var $isExtensible = Object.isExtensible;
	
	$export($export.S, 'Reflect', {
	  isExtensible: function isExtensible(target) {
	    anObject(target);
	    return $isExtensible ? $isExtensible(target) : true;
	  }
	});


/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.11 Reflect.ownKeys(target)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Reflect', { ownKeys: __webpack_require__(250) });


/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	// all object keys, includes non-enumerable and symbols
	var gOPN = __webpack_require__(50);
	var gOPS = __webpack_require__(43);
	var anObject = __webpack_require__(12);
	var Reflect = __webpack_require__(4).Reflect;
	module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
	  var keys = gOPN.f(anObject(it));
	  var getSymbols = gOPS.f;
	  return getSymbols ? keys.concat(getSymbols(it)) : keys;
	};


/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.12 Reflect.preventExtensions(target)
	var $export = __webpack_require__(8);
	var anObject = __webpack_require__(12);
	var $preventExtensions = Object.preventExtensions;
	
	$export($export.S, 'Reflect', {
	  preventExtensions: function preventExtensions(target) {
	    anObject(target);
	    try {
	      if ($preventExtensions) $preventExtensions(target);
	      return true;
	    } catch (e) {
	      return false;
	    }
	  }
	});


/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
	var dP = __webpack_require__(11);
	var gOPD = __webpack_require__(51);
	var getPrototypeOf = __webpack_require__(59);
	var has = __webpack_require__(5);
	var $export = __webpack_require__(8);
	var createDesc = __webpack_require__(17);
	var anObject = __webpack_require__(12);
	var isObject = __webpack_require__(13);
	
	function set(target, propertyKey, V /* , receiver */) {
	  var receiver = arguments.length < 4 ? target : arguments[3];
	  var ownDesc = gOPD.f(anObject(target), propertyKey);
	  var existingDescriptor, proto;
	  if (!ownDesc) {
	    if (isObject(proto = getPrototypeOf(target))) {
	      return set(proto, propertyKey, V, receiver);
	    }
	    ownDesc = createDesc(0);
	  }
	  if (has(ownDesc, 'value')) {
	    if (ownDesc.writable === false || !isObject(receiver)) return false;
	    existingDescriptor = gOPD.f(receiver, propertyKey) || createDesc(0);
	    existingDescriptor.value = V;
	    dP.f(receiver, propertyKey, existingDescriptor);
	    return true;
	  }
	  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
	}
	
	$export($export.S, 'Reflect', { set: set });


/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.14 Reflect.setPrototypeOf(target, proto)
	var $export = __webpack_require__(8);
	var setProto = __webpack_require__(73);
	
	if (setProto) $export($export.S, 'Reflect', {
	  setPrototypeOf: function setPrototypeOf(target, proto) {
	    setProto.check(target, proto);
	    try {
	      setProto.set(target, proto);
	      return true;
	    } catch (e) {
	      return false;
	    }
	  }
	});


/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/Array.prototype.includes
	var $export = __webpack_require__(8);
	var $includes = __webpack_require__(36)(true);
	
	$export($export.P, 'Array', {
	  includes: function includes(el /* , fromIndex = 0 */) {
	    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	
	__webpack_require__(188)('includes');


/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap
	var $export = __webpack_require__(8);
	var flattenIntoArray = __webpack_require__(256);
	var toObject = __webpack_require__(58);
	var toLength = __webpack_require__(37);
	var aFunction = __webpack_require__(21);
	var arraySpeciesCreate = __webpack_require__(175);
	
	$export($export.P, 'Array', {
	  flatMap: function flatMap(callbackfn /* , thisArg */) {
	    var O = toObject(this);
	    var sourceLen, A;
	    aFunction(callbackfn);
	    sourceLen = toLength(O.length);
	    A = arraySpeciesCreate(O, 0);
	    flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);
	    return A;
	  }
	});
	
	__webpack_require__(188)('flatMap');


/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
	var isArray = __webpack_require__(45);
	var isObject = __webpack_require__(13);
	var toLength = __webpack_require__(37);
	var ctx = __webpack_require__(20);
	var IS_CONCAT_SPREADABLE = __webpack_require__(25)('isConcatSpreadable');
	
	function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
	  var targetIndex = start;
	  var sourceIndex = 0;
	  var mapFn = mapper ? ctx(mapper, thisArg, 3) : false;
	  var element, spreadable;
	
	  while (sourceIndex < sourceLen) {
	    if (sourceIndex in source) {
	      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];
	
	      spreadable = false;
	      if (isObject(element)) {
	        spreadable = element[IS_CONCAT_SPREADABLE];
	        spreadable = spreadable !== undefined ? !!spreadable : isArray(element);
	      }
	
	      if (spreadable && depth > 0) {
	        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
	      } else {
	        if (targetIndex >= 0x1fffffffffffff) throw TypeError();
	        target[targetIndex] = element;
	      }
	
	      targetIndex++;
	    }
	    sourceIndex++;
	  }
	  return targetIndex;
	}
	
	module.exports = flattenIntoArray;


/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatten
	var $export = __webpack_require__(8);
	var flattenIntoArray = __webpack_require__(256);
	var toObject = __webpack_require__(58);
	var toLength = __webpack_require__(37);
	var toInteger = __webpack_require__(38);
	var arraySpeciesCreate = __webpack_require__(175);
	
	$export($export.P, 'Array', {
	  flatten: function flatten(/* depthArg = 1 */) {
	    var depthArg = arguments[0];
	    var O = toObject(this);
	    var sourceLen = toLength(O.length);
	    var A = arraySpeciesCreate(O, 0);
	    flattenIntoArray(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toInteger(depthArg));
	    return A;
	  }
	});
	
	__webpack_require__(188)('flatten');


/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/mathiasbynens/String.prototype.at
	var $export = __webpack_require__(8);
	var $at = __webpack_require__(128)(true);
	
	$export($export.P, 'String', {
	  at: function at(pos) {
	    return $at(this, pos);
	  }
	});


/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end
	var $export = __webpack_require__(8);
	var $pad = __webpack_require__(260);
	
	$export($export.P, 'String', {
	  padStart: function padStart(maxLength /* , fillString = ' ' */) {
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
	  }
	});


/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-string-pad-start-end
	var toLength = __webpack_require__(37);
	var repeat = __webpack_require__(91);
	var defined = __webpack_require__(35);
	
	module.exports = function (that, maxLength, fillString, left) {
	  var S = String(defined(that));
	  var stringLength = S.length;
	  var fillStr = fillString === undefined ? ' ' : String(fillString);
	  var intMaxLength = toLength(maxLength);
	  if (intMaxLength <= stringLength || fillStr == '') return S;
	  var fillLen = intMaxLength - stringLength;
	  var stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
	  if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
	  return left ? stringFiller + S : S + stringFiller;
	};


/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end
	var $export = __webpack_require__(8);
	var $pad = __webpack_require__(260);
	
	$export($export.P, 'String', {
	  padEnd: function padEnd(maxLength /* , fillString = ' ' */) {
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
	  }
	});


/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(83)('trimLeft', function ($trim) {
	  return function trimLeft() {
	    return $trim(this, 1);
	  };
	}, 'trimStart');


/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(83)('trimRight', function ($trim) {
	  return function trimRight() {
	    return $trim(this, 2);
	  };
	}, 'trimEnd');


/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://tc39.github.io/String.prototype.matchAll/
	var $export = __webpack_require__(8);
	var defined = __webpack_require__(35);
	var toLength = __webpack_require__(37);
	var isRegExp = __webpack_require__(135);
	var getFlags = __webpack_require__(198);
	var RegExpProto = RegExp.prototype;
	
	var $RegExpStringIterator = function (regexp, string) {
	  this._r = regexp;
	  this._s = string;
	};
	
	__webpack_require__(131)($RegExpStringIterator, 'RegExp String', function next() {
	  var match = this._r.exec(this._s);
	  return { value: match, done: match === null };
	});
	
	$export($export.P, 'String', {
	  matchAll: function matchAll(regexp) {
	    defined(this);
	    if (!isRegExp(regexp)) throw TypeError(regexp + ' is not a regexp!');
	    var S = String(this);
	    var flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp);
	    var rx = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
	    rx.lastIndex = toLength(regexp.lastIndex);
	    return new $RegExpStringIterator(rx, S);
	  }
	});


/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(27)('asyncIterator');


/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(27)('observable');


/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-getownpropertydescriptors
	var $export = __webpack_require__(8);
	var ownKeys = __webpack_require__(250);
	var toIObject = __webpack_require__(32);
	var gOPD = __webpack_require__(51);
	var createProperty = __webpack_require__(165);
	
	$export($export.S, 'Object', {
	  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
	    var O = toIObject(object);
	    var getDesc = gOPD.f;
	    var keys = ownKeys(O);
	    var result = {};
	    var i = 0;
	    var key, desc;
	    while (keys.length > i) {
	      desc = getDesc(O, key = keys[i++]);
	      if (desc !== undefined) createProperty(result, key, desc);
	    }
	    return result;
	  }
	});


/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export = __webpack_require__(8);
	var $values = __webpack_require__(269)(false);
	
	$export($export.S, 'Object', {
	  values: function values(it) {
	    return $values(it);
	  }
	});


/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys = __webpack_require__(30);
	var toIObject = __webpack_require__(32);
	var isEnum = __webpack_require__(44).f;
	module.exports = function (isEntries) {
	  return function (it) {
	    var O = toIObject(it);
	    var keys = getKeys(O);
	    var length = keys.length;
	    var i = 0;
	    var result = [];
	    var key;
	    while (length > i) if (isEnum.call(O, key = keys[i++])) {
	      result.push(isEntries ? [key, O[key]] : O[key]);
	    } return result;
	  };
	};


/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export = __webpack_require__(8);
	var $entries = __webpack_require__(269)(true);
	
	$export($export.S, 'Object', {
	  entries: function entries(it) {
	    return $entries(it);
	  }
	});


/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var toObject = __webpack_require__(58);
	var aFunction = __webpack_require__(21);
	var $defineProperty = __webpack_require__(11);
	
	// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
	__webpack_require__(6) && $export($export.P + __webpack_require__(272), 'Object', {
	  __defineGetter__: function __defineGetter__(P, getter) {
	    $defineProperty.f(toObject(this), P, { get: aFunction(getter), enumerable: true, configurable: true });
	  }
	});


/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// Forced replacement prototype accessors methods
	module.exports = __webpack_require__(28) || !__webpack_require__(7)(function () {
	  var K = Math.random();
	  // In FF throws only define methods
	  // eslint-disable-next-line no-undef, no-useless-call
	  __defineSetter__.call(null, K, function () { /* empty */ });
	  delete __webpack_require__(4)[K];
	});


/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var toObject = __webpack_require__(58);
	var aFunction = __webpack_require__(21);
	var $defineProperty = __webpack_require__(11);
	
	// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
	__webpack_require__(6) && $export($export.P + __webpack_require__(272), 'Object', {
	  __defineSetter__: function __defineSetter__(P, setter) {
	    $defineProperty.f(toObject(this), P, { set: aFunction(setter), enumerable: true, configurable: true });
	  }
	});


/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var toObject = __webpack_require__(58);
	var toPrimitive = __webpack_require__(16);
	var getPrototypeOf = __webpack_require__(59);
	var getOwnPropertyDescriptor = __webpack_require__(51).f;
	
	// B.2.2.4 Object.prototype.__lookupGetter__(P)
	__webpack_require__(6) && $export($export.P + __webpack_require__(272), 'Object', {
	  __lookupGetter__: function __lookupGetter__(P) {
	    var O = toObject(this);
	    var K = toPrimitive(P, true);
	    var D;
	    do {
	      if (D = getOwnPropertyDescriptor(O, K)) return D.get;
	    } while (O = getPrototypeOf(O));
	  }
	});


/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var toObject = __webpack_require__(58);
	var toPrimitive = __webpack_require__(16);
	var getPrototypeOf = __webpack_require__(59);
	var getOwnPropertyDescriptor = __webpack_require__(51).f;
	
	// B.2.2.5 Object.prototype.__lookupSetter__(P)
	__webpack_require__(6) && $export($export.P + __webpack_require__(272), 'Object', {
	  __lookupSetter__: function __lookupSetter__(P) {
	    var O = toObject(this);
	    var K = toPrimitive(P, true);
	    var D;
	    do {
	      if (D = getOwnPropertyDescriptor(O, K)) return D.set;
	    } while (O = getPrototypeOf(O));
	  }
	});


/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export = __webpack_require__(8);
	
	$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__(277)('Map') });


/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var classof = __webpack_require__(75);
	var from = __webpack_require__(278);
	module.exports = function (NAME) {
	  return function toJSON() {
	    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
	    return from(this);
	  };
	};


/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	var forOf = __webpack_require__(208);
	
	module.exports = function (iter, ITERATOR) {
	  var result = [];
	  forOf(iter, false, result.push, result, ITERATOR);
	  return result;
	};


/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export = __webpack_require__(8);
	
	$export($export.P + $export.R, 'Set', { toJSON: __webpack_require__(277)('Set') });


/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
	__webpack_require__(281)('Map');


/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://tc39.github.io/proposal-setmap-offrom/
	var $export = __webpack_require__(8);
	
	module.exports = function (COLLECTION) {
	  $export($export.S, COLLECTION, { of: function of() {
	    var length = arguments.length;
	    var A = Array(length);
	    while (length--) A[length] = arguments[length];
	    return new this(A);
	  } });
	};


/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
	__webpack_require__(281)('Set');


/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of
	__webpack_require__(281)('WeakMap');


/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.of
	__webpack_require__(281)('WeakSet');


/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
	__webpack_require__(286)('Map');


/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://tc39.github.io/proposal-setmap-offrom/
	var $export = __webpack_require__(8);
	var aFunction = __webpack_require__(21);
	var ctx = __webpack_require__(20);
	var forOf = __webpack_require__(208);
	
	module.exports = function (COLLECTION) {
	  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
	    var mapFn = arguments[1];
	    var mapping, A, n, cb;
	    aFunction(this);
	    mapping = mapFn !== undefined;
	    if (mapping) aFunction(mapFn);
	    if (source == undefined) return new this();
	    A = [];
	    if (mapping) {
	      n = 0;
	      cb = ctx(mapFn, arguments[2], 2);
	      forOf(source, false, function (nextItem) {
	        A.push(cb(nextItem, n++));
	      });
	    } else {
	      forOf(source, false, A.push, A);
	    }
	    return new this(A);
	  } });
	};


/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
	__webpack_require__(286)('Set');


/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from
	__webpack_require__(286)('WeakMap');


/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.from
	__webpack_require__(286)('WeakSet');


/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-global
	var $export = __webpack_require__(8);
	
	$export($export.G, { global: __webpack_require__(4) });


/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-global
	var $export = __webpack_require__(8);
	
	$export($export.S, 'System', { global: __webpack_require__(4) });


/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/ljharb/proposal-is-error
	var $export = __webpack_require__(8);
	var cof = __webpack_require__(34);
	
	$export($export.S, 'Error', {
	  isError: function isError(it) {
	    return cof(it) === 'Error';
	  }
	});


/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	// https://rwaldron.github.io/proposal-math-extensions/
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {
	  clamp: function clamp(x, lower, upper) {
	    return Math.min(upper, Math.max(lower, x));
	  }
	});


/***/ },
/* 294 */
/***/ function(module, exports, __webpack_require__) {

	// https://rwaldron.github.io/proposal-math-extensions/
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', { DEG_PER_RAD: Math.PI / 180 });


/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	// https://rwaldron.github.io/proposal-math-extensions/
	var $export = __webpack_require__(8);
	var RAD_PER_DEG = 180 / Math.PI;
	
	$export($export.S, 'Math', {
	  degrees: function degrees(radians) {
	    return radians * RAD_PER_DEG;
	  }
	});


/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	// https://rwaldron.github.io/proposal-math-extensions/
	var $export = __webpack_require__(8);
	var scale = __webpack_require__(297);
	var fround = __webpack_require__(114);
	
	$export($export.S, 'Math', {
	  fscale: function fscale(x, inLow, inHigh, outLow, outHigh) {
	    return fround(scale(x, inLow, inHigh, outLow, outHigh));
	  }
	});


/***/ },
/* 297 */
/***/ function(module, exports) {

	// https://rwaldron.github.io/proposal-math-extensions/
	module.exports = Math.scale || function scale(x, inLow, inHigh, outLow, outHigh) {
	  if (
	    arguments.length === 0
	      // eslint-disable-next-line no-self-compare
	      || x != x
	      // eslint-disable-next-line no-self-compare
	      || inLow != inLow
	      // eslint-disable-next-line no-self-compare
	      || inHigh != inHigh
	      // eslint-disable-next-line no-self-compare
	      || outLow != outLow
	      // eslint-disable-next-line no-self-compare
	      || outHigh != outHigh
	  ) return NaN;
	  if (x === Infinity || x === -Infinity) return x;
	  return (x - inLow) * (outHigh - outLow) / (inHigh - inLow) + outLow;
	};


/***/ },
/* 298 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {
	  iaddh: function iaddh(x0, x1, y0, y1) {
	    var $x0 = x0 >>> 0;
	    var $x1 = x1 >>> 0;
	    var $y0 = y0 >>> 0;
	    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
	  }
	});


/***/ },
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {
	  isubh: function isubh(x0, x1, y0, y1) {
	    var $x0 = x0 >>> 0;
	    var $x1 = x1 >>> 0;
	    var $y0 = y0 >>> 0;
	    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
	  }
	});


/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {
	  imulh: function imulh(u, v) {
	    var UINT16 = 0xffff;
	    var $u = +u;
	    var $v = +v;
	    var u0 = $u & UINT16;
	    var v0 = $v & UINT16;
	    var u1 = $u >> 16;
	    var v1 = $v >> 16;
	    var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
	  }
	});


/***/ },
/* 301 */
/***/ function(module, exports, __webpack_require__) {

	// https://rwaldron.github.io/proposal-math-extensions/
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', { RAD_PER_DEG: 180 / Math.PI });


/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	// https://rwaldron.github.io/proposal-math-extensions/
	var $export = __webpack_require__(8);
	var DEG_PER_RAD = Math.PI / 180;
	
	$export($export.S, 'Math', {
	  radians: function radians(degrees) {
	    return degrees * DEG_PER_RAD;
	  }
	});


/***/ },
/* 303 */
/***/ function(module, exports, __webpack_require__) {

	// https://rwaldron.github.io/proposal-math-extensions/
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', { scale: __webpack_require__(297) });


/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {
	  umulh: function umulh(u, v) {
	    var UINT16 = 0xffff;
	    var $u = +u;
	    var $v = +v;
	    var u0 = $u & UINT16;
	    var v0 = $v & UINT16;
	    var u1 = $u >>> 16;
	    var v1 = $v >>> 16;
	    var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
	  }
	});


/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

	// http://jfbastien.github.io/papers/Math.signbit.html
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', { signbit: function signbit(x) {
	  // eslint-disable-next-line no-self-compare
	  return (x = +x) != x ? x : x == 0 ? 1 / x == Infinity : x > 0;
	} });


/***/ },
/* 306 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-promise-finally
	'use strict';
	var $export = __webpack_require__(8);
	var core = __webpack_require__(9);
	var global = __webpack_require__(4);
	var speciesConstructor = __webpack_require__(209);
	var promiseResolve = __webpack_require__(214);
	
	$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
	  var C = speciesConstructor(this, core.Promise || global.Promise);
	  var isFunction = typeof onFinally == 'function';
	  return this.then(
	    isFunction ? function (x) {
	      return promiseResolve(C, onFinally()).then(function () { return x; });
	    } : onFinally,
	    isFunction ? function (e) {
	      return promiseResolve(C, onFinally()).then(function () { throw e; });
	    } : onFinally
	  );
	} });


/***/ },
/* 307 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-promise-try
	var $export = __webpack_require__(8);
	var newPromiseCapability = __webpack_require__(212);
	var perform = __webpack_require__(213);
	
	$export($export.S, 'Promise', { 'try': function (callbackfn) {
	  var promiseCapability = newPromiseCapability.f(this);
	  var result = perform(callbackfn);
	  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
	  return promiseCapability.promise;
	} });


/***/ },
/* 308 */
/***/ function(module, exports, __webpack_require__) {

	var metadata = __webpack_require__(309);
	var anObject = __webpack_require__(12);
	var toMetaKey = metadata.key;
	var ordinaryDefineOwnMetadata = metadata.set;
	
	metadata.exp({ defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey) {
	  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
	} });


/***/ },
/* 309 */
/***/ function(module, exports, __webpack_require__) {

	var Map = __webpack_require__(216);
	var $export = __webpack_require__(8);
	var shared = __webpack_require__(23)('metadata');
	var store = shared.store || (shared.store = new (__webpack_require__(221))());
	
	var getOrCreateMetadataMap = function (target, targetKey, create) {
	  var targetMetadata = store.get(target);
	  if (!targetMetadata) {
	    if (!create) return undefined;
	    store.set(target, targetMetadata = new Map());
	  }
	  var keyMetadata = targetMetadata.get(targetKey);
	  if (!keyMetadata) {
	    if (!create) return undefined;
	    targetMetadata.set(targetKey, keyMetadata = new Map());
	  } return keyMetadata;
	};
	var ordinaryHasOwnMetadata = function (MetadataKey, O, P) {
	  var metadataMap = getOrCreateMetadataMap(O, P, false);
	  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
	};
	var ordinaryGetOwnMetadata = function (MetadataKey, O, P) {
	  var metadataMap = getOrCreateMetadataMap(O, P, false);
	  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
	};
	var ordinaryDefineOwnMetadata = function (MetadataKey, MetadataValue, O, P) {
	  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
	};
	var ordinaryOwnMetadataKeys = function (target, targetKey) {
	  var metadataMap = getOrCreateMetadataMap(target, targetKey, false);
	  var keys = [];
	  if (metadataMap) metadataMap.forEach(function (_, key) { keys.push(key); });
	  return keys;
	};
	var toMetaKey = function (it) {
	  return it === undefined || typeof it == 'symbol' ? it : String(it);
	};
	var exp = function (O) {
	  $export($export.S, 'Reflect', O);
	};
	
	module.exports = {
	  store: store,
	  map: getOrCreateMetadataMap,
	  has: ordinaryHasOwnMetadata,
	  get: ordinaryGetOwnMetadata,
	  set: ordinaryDefineOwnMetadata,
	  keys: ordinaryOwnMetadataKeys,
	  key: toMetaKey,
	  exp: exp
	};


/***/ },
/* 310 */
/***/ function(module, exports, __webpack_require__) {

	var metadata = __webpack_require__(309);
	var anObject = __webpack_require__(12);
	var toMetaKey = metadata.key;
	var getOrCreateMetadataMap = metadata.map;
	var store = metadata.store;
	
	metadata.exp({ deleteMetadata: function deleteMetadata(metadataKey, target /* , targetKey */) {
	  var targetKey = arguments.length < 3 ? undefined : toMetaKey(arguments[2]);
	  var metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
	  if (metadataMap === undefined || !metadataMap['delete'](metadataKey)) return false;
	  if (metadataMap.size) return true;
	  var targetMetadata = store.get(target);
	  targetMetadata['delete'](targetKey);
	  return !!targetMetadata.size || store['delete'](target);
	} });


/***/ },
/* 311 */
/***/ function(module, exports, __webpack_require__) {

	var metadata = __webpack_require__(309);
	var anObject = __webpack_require__(12);
	var getPrototypeOf = __webpack_require__(59);
	var ordinaryHasOwnMetadata = metadata.has;
	var ordinaryGetOwnMetadata = metadata.get;
	var toMetaKey = metadata.key;
	
	var ordinaryGetMetadata = function (MetadataKey, O, P) {
	  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	  if (hasOwn) return ordinaryGetOwnMetadata(MetadataKey, O, P);
	  var parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
	};
	
	metadata.exp({ getMetadata: function getMetadata(metadataKey, target /* , targetKey */) {
	  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	} });


/***/ },
/* 312 */
/***/ function(module, exports, __webpack_require__) {

	var Set = __webpack_require__(220);
	var from = __webpack_require__(278);
	var metadata = __webpack_require__(309);
	var anObject = __webpack_require__(12);
	var getPrototypeOf = __webpack_require__(59);
	var ordinaryOwnMetadataKeys = metadata.keys;
	var toMetaKey = metadata.key;
	
	var ordinaryMetadataKeys = function (O, P) {
	  var oKeys = ordinaryOwnMetadataKeys(O, P);
	  var parent = getPrototypeOf(O);
	  if (parent === null) return oKeys;
	  var pKeys = ordinaryMetadataKeys(parent, P);
	  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
	};
	
	metadata.exp({ getMetadataKeys: function getMetadataKeys(target /* , targetKey */) {
	  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	} });


/***/ },
/* 313 */
/***/ function(module, exports, __webpack_require__) {

	var metadata = __webpack_require__(309);
	var anObject = __webpack_require__(12);
	var ordinaryGetOwnMetadata = metadata.get;
	var toMetaKey = metadata.key;
	
	metadata.exp({ getOwnMetadata: function getOwnMetadata(metadataKey, target /* , targetKey */) {
	  return ordinaryGetOwnMetadata(metadataKey, anObject(target)
	    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	} });


/***/ },
/* 314 */
/***/ function(module, exports, __webpack_require__) {

	var metadata = __webpack_require__(309);
	var anObject = __webpack_require__(12);
	var ordinaryOwnMetadataKeys = metadata.keys;
	var toMetaKey = metadata.key;
	
	metadata.exp({ getOwnMetadataKeys: function getOwnMetadataKeys(target /* , targetKey */) {
	  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	} });


/***/ },
/* 315 */
/***/ function(module, exports, __webpack_require__) {

	var metadata = __webpack_require__(309);
	var anObject = __webpack_require__(12);
	var getPrototypeOf = __webpack_require__(59);
	var ordinaryHasOwnMetadata = metadata.has;
	var toMetaKey = metadata.key;
	
	var ordinaryHasMetadata = function (MetadataKey, O, P) {
	  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	  if (hasOwn) return true;
	  var parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
	};
	
	metadata.exp({ hasMetadata: function hasMetadata(metadataKey, target /* , targetKey */) {
	  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	} });


/***/ },
/* 316 */
/***/ function(module, exports, __webpack_require__) {

	var metadata = __webpack_require__(309);
	var anObject = __webpack_require__(12);
	var ordinaryHasOwnMetadata = metadata.has;
	var toMetaKey = metadata.key;
	
	metadata.exp({ hasOwnMetadata: function hasOwnMetadata(metadataKey, target /* , targetKey */) {
	  return ordinaryHasOwnMetadata(metadataKey, anObject(target)
	    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	} });


/***/ },
/* 317 */
/***/ function(module, exports, __webpack_require__) {

	var $metadata = __webpack_require__(309);
	var anObject = __webpack_require__(12);
	var aFunction = __webpack_require__(21);
	var toMetaKey = $metadata.key;
	var ordinaryDefineOwnMetadata = $metadata.set;
	
	$metadata.exp({ metadata: function metadata(metadataKey, metadataValue) {
	  return function decorator(target, targetKey) {
	    ordinaryDefineOwnMetadata(
	      metadataKey, metadataValue,
	      (targetKey !== undefined ? anObject : aFunction)(target),
	      toMetaKey(targetKey)
	    );
	  };
	} });


/***/ },
/* 318 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
	var $export = __webpack_require__(8);
	var microtask = __webpack_require__(211)();
	var process = __webpack_require__(4).process;
	var isNode = __webpack_require__(34)(process) == 'process';
	
	$export($export.G, {
	  asap: function asap(fn) {
	    var domain = isNode && process.domain;
	    microtask(domain ? domain.bind(fn) : fn);
	  }
	});


/***/ },
/* 319 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/zenparsing/es-observable
	var $export = __webpack_require__(8);
	var global = __webpack_require__(4);
	var core = __webpack_require__(9);
	var microtask = __webpack_require__(211)();
	var OBSERVABLE = __webpack_require__(25)('observable');
	var aFunction = __webpack_require__(21);
	var anObject = __webpack_require__(12);
	var anInstance = __webpack_require__(207);
	var redefineAll = __webpack_require__(215);
	var hide = __webpack_require__(10);
	var forOf = __webpack_require__(208);
	var RETURN = forOf.RETURN;
	
	var getMethod = function (fn) {
	  return fn == null ? undefined : aFunction(fn);
	};
	
	var cleanupSubscription = function (subscription) {
	  var cleanup = subscription._c;
	  if (cleanup) {
	    subscription._c = undefined;
	    cleanup();
	  }
	};
	
	var subscriptionClosed = function (subscription) {
	  return subscription._o === undefined;
	};
	
	var closeSubscription = function (subscription) {
	  if (!subscriptionClosed(subscription)) {
	    subscription._o = undefined;
	    cleanupSubscription(subscription);
	  }
	};
	
	var Subscription = function (observer, subscriber) {
	  anObject(observer);
	  this._c = undefined;
	  this._o = observer;
	  observer = new SubscriptionObserver(this);
	  try {
	    var cleanup = subscriber(observer);
	    var subscription = cleanup;
	    if (cleanup != null) {
	      if (typeof cleanup.unsubscribe === 'function') cleanup = function () { subscription.unsubscribe(); };
	      else aFunction(cleanup);
	      this._c = cleanup;
	    }
	  } catch (e) {
	    observer.error(e);
	    return;
	  } if (subscriptionClosed(this)) cleanupSubscription(this);
	};
	
	Subscription.prototype = redefineAll({}, {
	  unsubscribe: function unsubscribe() { closeSubscription(this); }
	});
	
	var SubscriptionObserver = function (subscription) {
	  this._s = subscription;
	};
	
	SubscriptionObserver.prototype = redefineAll({}, {
	  next: function next(value) {
	    var subscription = this._s;
	    if (!subscriptionClosed(subscription)) {
	      var observer = subscription._o;
	      try {
	        var m = getMethod(observer.next);
	        if (m) return m.call(observer, value);
	      } catch (e) {
	        try {
	          closeSubscription(subscription);
	        } finally {
	          throw e;
	        }
	      }
	    }
	  },
	  error: function error(value) {
	    var subscription = this._s;
	    if (subscriptionClosed(subscription)) throw value;
	    var observer = subscription._o;
	    subscription._o = undefined;
	    try {
	      var m = getMethod(observer.error);
	      if (!m) throw value;
	      value = m.call(observer, value);
	    } catch (e) {
	      try {
	        cleanupSubscription(subscription);
	      } finally {
	        throw e;
	      }
	    } cleanupSubscription(subscription);
	    return value;
	  },
	  complete: function complete(value) {
	    var subscription = this._s;
	    if (!subscriptionClosed(subscription)) {
	      var observer = subscription._o;
	      subscription._o = undefined;
	      try {
	        var m = getMethod(observer.complete);
	        value = m ? m.call(observer, value) : undefined;
	      } catch (e) {
	        try {
	          cleanupSubscription(subscription);
	        } finally {
	          throw e;
	        }
	      } cleanupSubscription(subscription);
	      return value;
	    }
	  }
	});
	
	var $Observable = function Observable(subscriber) {
	  anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);
	};
	
	redefineAll($Observable.prototype, {
	  subscribe: function subscribe(observer) {
	    return new Subscription(observer, this._f);
	  },
	  forEach: function forEach(fn) {
	    var that = this;
	    return new (core.Promise || global.Promise)(function (resolve, reject) {
	      aFunction(fn);
	      var subscription = that.subscribe({
	        next: function (value) {
	          try {
	            return fn(value);
	          } catch (e) {
	            reject(e);
	            subscription.unsubscribe();
	          }
	        },
	        error: reject,
	        complete: resolve
	      });
	    });
	  }
	});
	
	redefineAll($Observable, {
	  from: function from(x) {
	    var C = typeof this === 'function' ? this : $Observable;
	    var method = getMethod(anObject(x)[OBSERVABLE]);
	    if (method) {
	      var observable = anObject(method.call(x));
	      return observable.constructor === C ? observable : new C(function (observer) {
	        return observable.subscribe(observer);
	      });
	    }
	    return new C(function (observer) {
	      var done = false;
	      microtask(function () {
	        if (!done) {
	          try {
	            if (forOf(x, false, function (it) {
	              observer.next(it);
	              if (done) return RETURN;
	            }) === RETURN) return;
	          } catch (e) {
	            if (done) throw e;
	            observer.error(e);
	            return;
	          } observer.complete();
	        }
	      });
	      return function () { done = true; };
	    });
	  },
	  of: function of() {
	    for (var i = 0, l = arguments.length, items = Array(l); i < l;) items[i] = arguments[i++];
	    return new (typeof this === 'function' ? this : $Observable)(function (observer) {
	      var done = false;
	      microtask(function () {
	        if (!done) {
	          for (var j = 0; j < items.length; ++j) {
	            observer.next(items[j]);
	            if (done) return;
	          } observer.complete();
	        }
	      });
	      return function () { done = true; };
	    });
	  }
	});
	
	hide($Observable.prototype, OBSERVABLE, function () { return this; });
	
	$export($export.G, { Observable: $Observable });
	
	__webpack_require__(194)('Observable');


/***/ },
/* 320 */
/***/ function(module, exports, __webpack_require__) {

	// ie9- setTimeout & setInterval additional parameters fix
	var global = __webpack_require__(4);
	var $export = __webpack_require__(8);
	var invoke = __webpack_require__(78);
	var partial = __webpack_require__(321);
	var navigator = global.navigator;
	var MSIE = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
	var wrap = function (set) {
	  return MSIE ? function (fn, time /* , ...args */) {
	    return set(invoke(
	      partial,
	      [].slice.call(arguments, 2),
	      // eslint-disable-next-line no-new-func
	      typeof fn == 'function' ? fn : Function(fn)
	    ), time);
	  } : set;
	};
	$export($export.G + $export.B + $export.F * MSIE, {
	  setTimeout: wrap(global.setTimeout),
	  setInterval: wrap(global.setInterval)
	});


/***/ },
/* 321 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var path = __webpack_require__(322);
	var invoke = __webpack_require__(78);
	var aFunction = __webpack_require__(21);
	module.exports = function (/* ...pargs */) {
	  var fn = aFunction(this);
	  var length = arguments.length;
	  var pargs = Array(length);
	  var i = 0;
	  var _ = path._;
	  var holder = false;
	  while (length > i) if ((pargs[i] = arguments[i++]) === _) holder = true;
	  return function (/* ...args */) {
	    var that = this;
	    var aLen = arguments.length;
	    var j = 0;
	    var k = 0;
	    var args;
	    if (!holder && !aLen) return invoke(fn, pargs, that);
	    args = pargs.slice();
	    if (holder) for (;length > j; j++) if (args[j] === _) args[j] = arguments[k++];
	    while (aLen > k) args.push(arguments[k++]);
	    return invoke(fn, args, that);
	  };
	};


/***/ },
/* 322 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(4);


/***/ },
/* 323 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	var $task = __webpack_require__(210);
	$export($export.G + $export.B, {
	  setImmediate: $task.set,
	  clearImmediate: $task.clear
	});


/***/ },
/* 324 */
/***/ function(module, exports, __webpack_require__) {

	var $iterators = __webpack_require__(195);
	var getKeys = __webpack_require__(30);
	var redefine = __webpack_require__(18);
	var global = __webpack_require__(4);
	var hide = __webpack_require__(10);
	var Iterators = __webpack_require__(130);
	var wks = __webpack_require__(25);
	var ITERATOR = wks('iterator');
	var TO_STRING_TAG = wks('toStringTag');
	var ArrayValues = Iterators.Array;
	
	var DOMIterables = {
	  CSSRuleList: true, // TODO: Not spec compliant, should be false.
	  CSSStyleDeclaration: false,
	  CSSValueList: false,
	  ClientRectList: false,
	  DOMRectList: false,
	  DOMStringList: false,
	  DOMTokenList: true,
	  DataTransferItemList: false,
	  FileList: false,
	  HTMLAllCollection: false,
	  HTMLCollection: false,
	  HTMLFormElement: false,
	  HTMLSelectElement: false,
	  MediaList: true, // TODO: Not spec compliant, should be false.
	  MimeTypeArray: false,
	  NamedNodeMap: false,
	  NodeList: true,
	  PaintRequestList: false,
	  Plugin: false,
	  PluginArray: false,
	  SVGLengthList: false,
	  SVGNumberList: false,
	  SVGPathSegList: false,
	  SVGPointList: false,
	  SVGStringList: false,
	  SVGTransformList: false,
	  SourceBufferList: false,
	  StyleSheetList: true, // TODO: Not spec compliant, should be false.
	  TextTrackCueList: false,
	  TextTrackList: false,
	  TouchList: false
	};
	
	for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
	  var NAME = collections[i];
	  var explicit = DOMIterables[NAME];
	  var Collection = global[NAME];
	  var proto = Collection && Collection.prototype;
	  var key;
	  if (proto) {
	    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
	    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
	    Iterators[NAME] = ArrayValues;
	    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
	  }
	}


/***/ },
/* 325 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */
	
	!(function(global) {
	  "use strict";
	
	  var Op = Object.prototype;
	  var hasOwn = Op.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
	
	  var inModule = typeof module === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }
	
	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};
	
	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
	    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
	    var generator = Object.create(protoGenerator.prototype);
	    var context = new Context(tryLocsList || []);
	
	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);
	
	    return generator;
	  }
	  runtime.wrap = wrap;
	
	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }
	
	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";
	
	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};
	
	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}
	
	  // This is a polyfill for %IteratorPrototype% for environments that
	  // don't natively support it.
	  var IteratorPrototype = {};
	  IteratorPrototype[iteratorSymbol] = function () {
	    return this;
	  };
	
	  var getProto = Object.getPrototypeOf;
	  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
	  if (NativeIteratorPrototype &&
	      NativeIteratorPrototype !== Op &&
	      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
	    // This environment has a native %IteratorPrototype%; use it instead
	    // of the polyfill.
	    IteratorPrototype = NativeIteratorPrototype;
	  }
	
	  var Gp = GeneratorFunctionPrototype.prototype =
	    Generator.prototype = Object.create(IteratorPrototype);
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] =
	    GeneratorFunction.displayName = "GeneratorFunction";
	
	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      prototype[method] = function(arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }
	
	  runtime.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };
	
	  runtime.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      if (!(toStringTagSymbol in genFun)) {
	        genFun[toStringTagSymbol] = "GeneratorFunction";
	      }
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };
	
	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `hasOwn.call(value, "__await")` to determine if the yielded value is
	  // meant to be awaited.
	  runtime.awrap = function(arg) {
	    return { __await: arg };
	  };
	
	  function AsyncIterator(generator) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value &&
	            typeof value === "object" &&
	            hasOwn.call(value, "__await")) {
	          return Promise.resolve(value.__await).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }
	
	        return Promise.resolve(value).then(function(unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration. If the Promise is rejected, however, the
	          // result for this iteration will be rejected with the same
	          // reason. Note that rejections of yielded Promises are not
	          // thrown back into the generator function, as is the case
	          // when an awaited Promise is rejected. This difference in
	          // behavior between yield and await is important, because it
	          // allows the consumer to decide what to do with the yielded
	          // rejection (swallow it and continue, manually .throw it back
	          // into the generator, abandon iteration, whatever). With
	          // await, by contrast, there is no opportunity to examine the
	          // rejection reason outside the generator function, so the
	          // only option is to throw it from the await expression, and
	          // let the generator function handle the exception.
	          result.value = unwrapped;
	          resolve(result);
	        }, reject);
	      }
	    }
	
	    if (typeof global.process === "object" && global.process.domain) {
	      invoke = global.process.domain.bind(invoke);
	    }
	
	    var previousPromise;
	
	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new Promise(function(resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }
	
	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : callInvokeWithMethodAndArg();
	    }
	
	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }
	
	  defineIteratorMethods(AsyncIterator.prototype);
	  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
	    return this;
	  };
	  runtime.AsyncIterator = AsyncIterator;
	
	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList)
	    );
	
	    return runtime.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };
	
	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;
	
	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }
	
	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }
	
	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }
	
	      context.method = method;
	      context.arg = arg;
	
	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          var delegateResult = maybeInvokeDelegate(delegate, context);
	          if (delegateResult) {
	            if (delegateResult === ContinueSentinel) continue;
	            return delegateResult;
	          }
	        }
	
	        if (context.method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = context.arg;
	
	        } else if (context.method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw context.arg;
	          }
	
	          context.dispatchException(context.arg);
	
	        } else if (context.method === "return") {
	          context.abrupt("return", context.arg);
	        }
	
	        state = GenStateExecuting;
	
	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;
	
	          if (record.arg === ContinueSentinel) {
	            continue;
	          }
	
	          return {
	            value: record.arg,
	            done: context.done
	          };
	
	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(context.arg) call above.
	          context.method = "throw";
	          context.arg = record.arg;
	        }
	      }
	    };
	  }
	
	  // Call delegate.iterator[context.method](context.arg) and handle the
	  // result, either by returning a { value, done } result from the
	  // delegate iterator, or by modifying context.method and context.arg,
	  // setting context.delegate to null, and returning the ContinueSentinel.
	  function maybeInvokeDelegate(delegate, context) {
	    var method = delegate.iterator[context.method];
	    if (method === undefined) {
	      // A .throw or .return when the delegate iterator has no .throw
	      // method always terminates the yield* loop.
	      context.delegate = null;
	
	      if (context.method === "throw") {
	        if (delegate.iterator.return) {
	          // If the delegate iterator has a return method, give it a
	          // chance to clean up.
	          context.method = "return";
	          context.arg = undefined;
	          maybeInvokeDelegate(delegate, context);
	
	          if (context.method === "throw") {
	            // If maybeInvokeDelegate(context) changed context.method from
	            // "return" to "throw", let that override the TypeError below.
	            return ContinueSentinel;
	          }
	        }
	
	        context.method = "throw";
	        context.arg = new TypeError(
	          "The iterator does not provide a 'throw' method");
	      }
	
	      return ContinueSentinel;
	    }
	
	    var record = tryCatch(method, delegate.iterator, context.arg);
	
	    if (record.type === "throw") {
	      context.method = "throw";
	      context.arg = record.arg;
	      context.delegate = null;
	      return ContinueSentinel;
	    }
	
	    var info = record.arg;
	
	    if (! info) {
	      context.method = "throw";
	      context.arg = new TypeError("iterator result is not an object");
	      context.delegate = null;
	      return ContinueSentinel;
	    }
	
	    if (info.done) {
	      // Assign the result of the finished delegate to the temporary
	      // variable specified by delegate.resultName (see delegateYield).
	      context[delegate.resultName] = info.value;
	
	      // Resume execution at the desired location (see delegateYield).
	      context.next = delegate.nextLoc;
	
	      // If context.method was "throw" but the delegate handled the
	      // exception, let the outer generator proceed normally. If
	      // context.method was "next", forget context.arg since it has been
	      // "consumed" by the delegate iterator. If context.method was
	      // "return", allow the original .return call to continue in the
	      // outer generator.
	      if (context.method !== "return") {
	        context.method = "next";
	        context.arg = undefined;
	      }
	
	    } else {
	      // Re-yield the result returned by the delegate method.
	      return info;
	    }
	
	    // The delegate iterator is finished, so forget it and continue with
	    // the outer generator.
	    context.delegate = null;
	    return ContinueSentinel;
	  }
	
	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);
	
	  Gp[toStringTagSymbol] = "Generator";
	
	  // A Generator should always return itself as the iterator object when the
	  // @@iterator function is called on it. Some browsers' implementations of the
	  // iterator prototype chain incorrectly implement this, causing the Generator
	  // object to not be returned from this call. This ensures that doesn't happen.
	  // See https://github.com/facebook/regenerator/issues/274 for more details.
	  Gp[iteratorSymbol] = function() {
	    return this;
	  };
	
	  Gp.toString = function() {
	    return "[object Generator]";
	  };
	
	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };
	
	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }
	
	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }
	
	    this.tryEntries.push(entry);
	  }
	
	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }
	
	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }
	
	  runtime.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();
	
	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }
	
	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };
	
	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }
	
	      if (typeof iterable.next === "function") {
	        return iterable;
	      }
	
	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }
	
	          next.value = undefined;
	          next.done = true;
	
	          return next;
	        };
	
	        return next.next = next;
	      }
	    }
	
	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;
	
	  function doneResult() {
	    return { value: undefined, done: true };
	  }
	
	  Context.prototype = {
	    constructor: Context,
	
	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined;
	      this.done = false;
	      this.delegate = null;
	
	      this.method = "next";
	      this.arg = undefined;
	
	      this.tryEntries.forEach(resetTryEntry);
	
	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },
	
	    stop: function() {
	      this.done = true;
	
	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }
	
	      return this.rval;
	    },
	
	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }
	
	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	
	        if (caught) {
	          // If the dispatched exception was caught by a catch block,
	          // then let that catch block handle the exception normally.
	          context.method = "next";
	          context.arg = undefined;
	        }
	
	        return !! caught;
	      }
	
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;
	
	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }
	
	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");
	
	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }
	
	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },
	
	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }
	
	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }
	
	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;
	
	      if (finallyEntry) {
	        this.method = "next";
	        this.next = finallyEntry.finallyLoc;
	        return ContinueSentinel;
	      }
	
	      return this.complete(record);
	    },
	
	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }
	
	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = this.arg = record.arg;
	        this.method = "return";
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
	
	      return ContinueSentinel;
	    },
	
	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },
	
	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }
	
	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },
	
	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };
	
	      if (this.method === "next") {
	        // Deliberately forget the last sent value so that we don't
	        // accidentally pass it on to the delegate.
	        this.arg = undefined;
	      }
	
	      return ContinueSentinel;
	    }
	  };
	})(
	  // Among the various tricks for obtaining a reference to the global
	  // object, this seems to be the most reliable technique that does not
	  // use indirect eval (which violates Content Security Policy).
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this
	);
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 326 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(327);
	module.exports = __webpack_require__(9).RegExp.escape;


/***/ },
/* 327 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/benjamingr/RexExp.escape
	var $export = __webpack_require__(8);
	var $re = __webpack_require__(328)(/[\\^$*+?.()|[\]{}]/g, '\\$&');
	
	$export($export.S, 'RegExp', { escape: function escape(it) { return $re(it); } });


/***/ },
/* 328 */
/***/ function(module, exports) {

	module.exports = function (regExp, replace) {
	  var replacer = replace === Object(replace) ? function (part) {
	    return replace[part];
	  } : replace;
	  return function (it) {
	    return String(it).replace(regExp, replacer);
	  };
	};


/***/ },
/* 329 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _imports = __webpack_require__(330);
	
	var _resources = __webpack_require__(372);
	
	var _resources2 = _interopRequireDefault(_resources);
	
	var _global = __webpack_require__(374);
	
	var _global2 = _interopRequireDefault(_global);
	
	var _gameController = __webpack_require__(376);
	
	var _gameController2 = _interopRequireDefault(_gameController);
	
	var _gameDefines = __webpack_require__(373);
	
	var _gameDefines2 = _interopRequireDefault(_gameDefines);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * Created by chuhaoyuan on 2017/8/14.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */
	
	
	window.onload = function () {
	  var _this = this;
	
	  var _getResolution = function _getResolution() {
	    var resolutionStr = _imports.Helper.getQueryString('resolution');
	    var resolution = 2;
	    if (resolutionStr) {
	      resolution = parseInt(resolutionStr);
	    }
	    resolution = 2;
	
	    return resolution >= 2 ? 2 : 1;
	  };
	
	  var resList = [];
	  for (var index in _resources2.default) {
	    resList.push(_resources2.default[index]);
	  }
	  _imports.ResourceManager.init(_resources2.default);
	  _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
	    return regeneratorRuntime.wrap(function _callee$(_context) {
	      while (1) {
	        switch (_context.prev = _context.next) {
	          case 0:
	            _context.next = 2;
	            return _imports.ResourceManager.loadList(resList);
	
	          case 2:
	            _context.next = 4;
	            return _imports.ResourceManager.loadFontList(_gameDefines2.default.fontList);
	
	          case 4:
	            _context.next = 6;
	            return _imports.Director.create(_gameDefines2.default.Canvas.width, _gameDefines2.default.Canvas.height, _getResolution(), _gameDefines2.default.direction.portrait);
	
	          case 6:
	
	            _gameController2.default.enterGameWorld();
	
	          case 7:
	          case 'end':
	            return _context.stop();
	        }
	      }
	    }, _callee, _this);
	  }))();
	};

/***/ },
/* 330 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Action = exports.Vector = exports.Vec2 = exports.AsyncRequest = exports.SRequest = exports.Director = exports.ResourceManager = exports.Helper = exports.Inherited = exports.DelayEvent = exports.Eventuality = exports.ModelLayer = exports.BaseLayer = exports.BaseWorld = exports.UIControl = exports.ActionFactor = exports.AnimationFactor = undefined;
	
	var _animationFactor = __webpack_require__(331);
	
	var _animationFactor2 = _interopRequireDefault(_animationFactor);
	
	var _actionFactor = __webpack_require__(335);
	
	var _actionFactor2 = _interopRequireDefault(_actionFactor);
	
	var _helper = __webpack_require__(338);
	
	var _helper2 = _interopRequireDefault(_helper);
	
	var _resourceManager = __webpack_require__(339);
	
	var _resourceManager2 = _interopRequireDefault(_resourceManager);
	
	var _director = __webpack_require__(341);
	
	var _director2 = _interopRequireDefault(_director);
	
	var _simpleRequest = __webpack_require__(344);
	
	var _simpleRequest2 = _interopRequireDefault(_simpleRequest);
	
	var _asyncRequest = __webpack_require__(345);
	
	var _asyncRequest2 = _interopRequireDefault(_asyncRequest);
	
	var _index = __webpack_require__(347);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _baseWorld = __webpack_require__(366);
	
	var _baseWorld2 = _interopRequireDefault(_baseWorld);
	
	var _baseLayer = __webpack_require__(367);
	
	var _baseLayer2 = _interopRequireDefault(_baseLayer);
	
	var _modelLayer = __webpack_require__(368);
	
	var _modelLayer2 = _interopRequireDefault(_modelLayer);
	
	var _eventuality = __webpack_require__(360);
	
	var _eventuality2 = _interopRequireDefault(_eventuality);
	
	var _inherited = __webpack_require__(350);
	
	var _inherited2 = _interopRequireDefault(_inherited);
	
	var _delayEvent = __webpack_require__(369);
	
	var _delayEvent2 = _interopRequireDefault(_delayEvent);
	
	var _vec = __webpack_require__(340);
	
	var _vec2 = _interopRequireDefault(_vec);
	
	var _action = __webpack_require__(370);
	
	var _action2 = _interopRequireDefault(_action);
	
	var _vector = __webpack_require__(371);
	
	var _vector2 = _interopRequireDefault(_vector);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.AnimationFactor = _animationFactor2.default;
	exports.ActionFactor = _actionFactor2.default;
	exports.UIControl = _index2.default;
	exports.BaseWorld = _baseWorld2.default;
	exports.BaseLayer = _baseLayer2.default;
	exports.ModelLayer = _modelLayer2.default;
	exports.Eventuality = _eventuality2.default;
	exports.DelayEvent = _delayEvent2.default;
	exports.Inherited = _inherited2.default;
	exports.Helper = _helper2.default;
	exports.ResourceManager = _resourceManager2.default;
	exports.Director = _director2.default;
	exports.SRequest = _simpleRequest2.default;
	exports.AsyncRequest = _asyncRequest2.default;
	exports.Vec2 = _vec2.default;
	exports.Vector = _vector2.default;
	exports.Action = _action2.default; /**
	                                    * Created by wizard on 16/3/30.
	                                    */

/***/ },
/* 331 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _frameAnimation = __webpack_require__(332);
	
	var _frameAnimation2 = _interopRequireDefault(_frameAnimation);
	
	var _spineAnimation = __webpack_require__(334);
	
	var _spineAnimation2 = _interopRequireDefault(_spineAnimation);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by wizard on 16/3/29.
	 */
	
	var animationFactor = function () {
	    var that = {};
	
	    that.createAnimation = function (options) {
	        if (options.type == "spine") {
	            return (0, _spineAnimation2.default)(options);
	        } else {
	            return (0, _frameAnimation2.default)(options);
	        }
	    };
	
	    return that;
	}();
	
	exports.default = animationFactor;

/***/ },
/* 332 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _animationInterface = __webpack_require__(333);
	
	var _animationInterface2 = _interopRequireDefault(_animationInterface);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var FrameAnimation = function FrameAnimation(spec) {
	  var that = (0, _animationInterface2.default)();
	
	  that.animates = {};
	
	  that.node = new PIXI.Container();
	
	  var _movieClip = null;
	
	  for (var index in spec.animates) {
	    var oneAnimate = spec.animates[index];
	    var frames = [];
	    for (var i = oneAnimate.start; i <= oneAnimate.end; ++i) {
	      frames.push(oneAnimate.pre + "_" + i + ".png");
	    }
	
	    that.animates[index] = {};
	    that.animates[index].frames = frames;
	    if (spec.animates[index].speed != undefined) {
	      that.animates[index].animationSpeed = spec.animates[index].speed;
	    } else {
	      that.animates[index].animationSpeed = 1;
	    }
	    //console.log("frame animation:" + JSON.stringify(that.animates) );
	  }
	
	  (function () {
	    if (spec.default) {
	      _movieClip = new PIXI.Sprite.fromFrame(spec.default);
	      that.node.addChild(_movieClip);
	      if (spec.anchor) {
	        _movieClip.anchor = spec.anchor;
	      } else {
	        _movieClip.anchor = { x: 0.5, y: 0.5 };
	      }
	    }
	  })();
	
	  var setupMovieClip = function setupMovieClip(frames, speed, isLoop, cb) {
	
	    if (_movieClip) {
	      that.node.removeChild(_movieClip);
	    }
	
	    _movieClip = new PIXI.extras.AnimatedSprite.fromFrames(frames);
	    _movieClip.animationSpeed = speed;
	    _movieClip.loop = isLoop;
	    _movieClip.gotoAndPlay(0);
	
	    if (!isLoop) {
	      _movieClip.onComplete = function () {
	        if (cb) {
	          cb.call(this);
	        }
	      };
	    }
	
	    that.node.addChild(_movieClip);
	    if (spec.anchor) {
	      _movieClip.anchor = spec.anchor;
	    } else {
	      _movieClip.anchor = { x: 0.5, y: 0.5 };
	    }
	  };
	
	  that.getAnimationNode = function () {
	    console.log('error: virtual getAnimationNode function');
	  };
	
	  that.stop = function (applyCb) {
	    //if (applyCb) {
	    //
	    //}
	  };
	
	  that.playOnce = function (actionName, cb) {
	    that.playTimes(actionName, 1, cb);
	  };
	
	  that.playTimes = function (actionName, times, cb) {
	
	    if (!that.animates[actionName]) {
	      console.log('error: wrong action name' + actionName);
	      return;
	    }
	
	    var frames = [];
	    for (var i = 0; i < times; ++i) {
	      frames = frames.concat(that.animates[actionName].frames);
	    }
	
	    setupMovieClip(frames, that.animates[actionName].animationSpeed, false, cb);
	  };
	
	  that.playList = function (actionList, cb) {
	    console.log('error: virtual function');
	  };
	
	  that.playLoop = function (actionName) {
	    if (!that.animates[actionName]) {
	      console.log('error: wrong action name' + actionName);
	      return;
	    }
	
	    setupMovieClip(that.animates[actionName].frames, that.animates[actionName].animationSpeed, true);
	  };
	
	  that.reset = function () {
	    console.log('error: virtual reset function');
	  };
	
	  that.setVisible = function (isVisible) {
	    that.node.visible = isVisible;
	  };
	
	  that.turnAround = function (faceTo) {
	    console.log('error: virtual  turnAround function');
	  };
	
	  that.setSlotVisible = function (slotName, isVisible) {
	    console.log('error: virtual setSlotVisible function');
	  };
	
	  that.setTimeScale = function (timeScale) {
	    that.node.animationSpeed = timeScale;
	  };
	
	  that.setSkin = function (name) {
	    console.log('error: virtual setSkin function');
	  };
	
	  return that;
	}; /**
	    * Created by wizard on 16/3/29.
	    */
	exports.default = FrameAnimation;

/***/ },
/* 333 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by hewenlong on 16-3-15.
	 */
	
	var AnimationInterface = function AnimationInterface(spec) {
	  var that = {};
	
	  that.getAnimationNode = function () {
	    console.log('error: virtual getAnimationNode function');
	  };
	
	  that.stop = function (applyCb) {
	    console.log('error: virtual stop function');
	  };
	
	  that.playOnce = function (actionName, cb) {
	    that.playTimes(actionName, 1, cb);
	  };
	
	  that.playTimes = function (actionName, times, cb) {
	    console.log('error: virtual playTimes function');
	  };
	
	  that.playList = function (actionList, cb) {
	    console.log('error: virtual function');
	  };
	
	  that.playLoop = function (actionName) {
	    console.log('error: virtual playLoop function');
	  };
	
	  that.reset = function () {
	    console.log('error: virtual reset function');
	  };
	
	  that.aimTo = function (direction) {
	    console.log('error: virtual function');
	  };
	
	  that.setVisible = function (isVisible) {
	    console.log('error: virtual setVisible function');
	  };
	
	  that.destroy = function () {
	    console.log('error: virtual destroy function');
	  };
	
	  that.turnAround = function (faceTo) {
	    console.log('error: virtual  turnAround function');
	  };
	
	  that.setSlotVisible = function (slotName, isVisible) {
	    console.log('error: virtual setSlotVisible function');
	  };
	
	  that.setTimeScale = function (timeScale) {
	    console.log('error: virtual setTimeScale function');
	  };
	  that.setSkin = function (name) {
	    console.log('error: virtual setSkin function');
	  };
	  that.setLocalZOrder = function (zOrder) {
	    console.log("error: virtual set local zOrder func");
	  };
	  that.hackTextureBySlotName = function (name, image, size) {
	    console.log('error: virtual hack Texture By Name');
	  };
	
	  return that;
	};
	
	exports.default = AnimationInterface;

/***/ },
/* 334 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _animationInterface = __webpack_require__(333);
	
	var _animationInterface2 = _interopRequireDefault(_animationInterface);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//const Spine = require('pixi-spine').Spine;
	var SpineAnimation = function SpineAnimation(spec) {
	  var that = (0, _animationInterface2.default)(spec);
	
	  var _spine = null;
	  var _actionList = [];
	  var _faceTo = 1;
	  that.zOrder = 0;
	  var spineData = spec.spineData;
	
	  that.setSkin = function (skin) {
	    //if(skin === null || skin === undefined) {
	    //  _spine.skeleton.setSkin(null);
	    //  return
	    //}
	    _spine.skeleton.setSkin(null);
	    _spine.skeleton.setSkinByName(skin);
	  };
	  that.hackTextureBySlotName = function (name, image, size) {
	    // image is resource path
	    // exchange texture size
	    // size = {
	    //   width: 100,
	    //   height: 100
	    // }
	    var texture = PIXI.Texture.fromImage(image);
	    if (size) {
	      _spine.hackTextureBySlotName(name, texture, size);
	    } else {
	      // console.log('texture size = ' + JSON.stringify(texture.orig));
	      _spine.hackTextureBySlotName(name, texture, texture.orig);
	    }
	  };
	  that.setTimeScale = function (timeScale) {
	    _spine.state.timeScale = timeScale;
	  };
	
	  that.turnAround = function (dir) {
	    var scaleX = _spine.scale.x;
	    _faceTo *= dir;
	    _spine.scale.x = scaleX * _faceTo;
	  };
	
	  that.playLoop = function (action, isSoft) {
	    if (!isSoft) {
	      applyAllCallBack();
	      _spine.skeleton.setToSetupPose();
	      _spine.state.setAnimation(0, action, true);
	    } else {
	      _spine.state.addAnimation(0, action, true, 0);
	    }
	  };
	
	  var applyAllCallBack = function applyAllCallBack() {
	    while (_actionList.length > 0) {
	      var action = _actionList.shift();
	      if (action.cb) {
	        action.cb();
	      }
	    }
	  };
	
	  that.getAnimationNode = function () {
	    return _spine;
	  };
	
	  that.playTimes = function (action, times, callBack, isSoft) {
	    var list = [];
	    for (var i = 0; i < times; i++) {
	      list.push(action);
	    }
	    that.playList(list, callBack, isSoft);
	  };
	
	  that.playList = function (list, callBack, isSoft) {
	    if (list.length === 0) {
	      if (callBack) {
	        callBack();
	      }
	    }
	    _spine.skeleton.setToSetupPose();
	    var track;
	
	    if (!isSoft) {
	      applyAllCallBack();
	      track = _spine.state.setAnimation(0, list[0], false);
	    } else {
	      track = _spine.state.addAnimation(0, list[0], false, 0);
	    }
	    if (!track) {
	      if (callBack) {
	        callBack();
	      }
	      return;
	    }
	    for (var i = 1; i < list.length; i++) {
	      _spine.state.addAnimation(0, list[i], false, 0);
	    }
	
	    if (callBack) {
	      var data = {
	        waitingCount: list.length,
	        cb: callBack
	      };
	      _actionList.push(data);
	    }
	  };
	
	  that.reset = function () {
	    _spine.skeleton.setBonesToSetupPose();
	    _spine.skeleton.setSlotsToSetupPose();
	    _spine.skeleton.clearTracks();
	    _actionList = [];
	  };
	
	  var _onComplete = function _onComplete() {
	    if (_actionList <= 0) {
	      return;
	    }
	
	    var data = _actionList[0];
	    data.waitingCount--;
	    if (data.waitingCount === 0) {
	      _actionList.shift();
	      data.cb();
	    }
	  };
	
	  var createSpine = function createSpine() {
	    _spine = new PIXI.spine.Spine(spineData);
	
	    if (spec.dir) {
	      that.turnAround(spec.dir);
	    }
	    if (spec.skin) {
	      that.setSkin(spec.skin);
	    }
	
	    //_spine.state.onComplete = _onComplete;
	
	    _spine.state.addListener({
	      complete: _onComplete,
	      start: function start(entry) {
	        console.log('animation is set at ' + entry.trackIndex);
	      },
	      end: function end(entry) {
	        console.log('animation was ended at ' + entry.trackIndex);
	      }
	    });
	
	    that.node = _spine;
	  };
	  createSpine();
	
	  return that;
	}; /**
	    * Created by hewenlong on 16-3-15.
	    */
	exports.default = SpineAnimation;

/***/ },
/* 335 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _tweenAction = __webpack_require__(336);
	
	var _tweenAction2 = _interopRequireDefault(_tweenAction);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ActionFactor = function ActionFactor() {
	  var that = {};
	
	  that.createAction = function (actionData) {
	    return (0, _tweenAction2.default)(actionData);
	  };
	
	  return that;
	}; /**
	    * Created by long on 2017/1/16.
	    */
	
	exports.default = ActionFactor;

/***/ },
/* 336 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _actionInterface = __webpack_require__(337);
	
	var _actionInterface2 = _interopRequireDefault(_actionInterface);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var TweenAction = function TweenAction(spec) {
	  var that = (0, _actionInterface2.default)();
	
	  that.action = null;
	  var _startData = {};
	  var _object = null;
	
	  that.easingType = {
	    'None': TWEEN.Easing.Linear.None,
	    'BackIn': TWEEN.Easing.Back.In,
	    'BackOut': TWEEN.Easing.Back.Out,
	    'BounceIn': TWEEN.Easing.Bounce.In,
	    'BounceOut': TWEEN.Easing.Bounce.Out
	  };
	
	  var _actionMaps = {};
	
	  _actionMaps['actionMove'] = function (data) {
	    var startData = data.startData;
	    var endData = data.endData;
	    var duration = data.duration;
	    var action = new TWEEN.Tween(startData).to(endData, duration).onUpdate(function () {
	      for (var i in startData) {
	        _object.position[i] = startData[i];
	      }
	    });
	    return action;
	  };
	
	  _actionMaps['actionScale'] = function (data) {
	    var startData = data.startData;
	    var endData = data.endData;
	    var duration = data.duration;
	    var action = new TWEEN.Tween(startData).to(endData, duration).onUpdate(function (dt) {
	      for (var i in startData) {
	        _object.scale[i] = startData[i];
	      }
	    });
	    return action;
	  };
	
	  _actionMaps['actionRotation'] = function (data) {
	    var startData = data.startData;
	    var endData = data.endData;
	    var duration = data.duration;
	    var action = new TWEEN.Tween(startData).to(endData, duration).onUpdate(function () {
	      _object.rotation = startData.rotation;
	    });
	    return action;
	  };
	
	  _actionMaps['actionFade'] = function (data) {
	    var startData = data.startData;
	    var endData = data.endData;
	    var duration = data.duration;
	    var action = new TWEEN.Tween(startData).to(endData, duration).onUpdate(function () {
	      _object.alpha = startData.alpha;
	    });
	    return action;
	  };
	
	  _actionMaps['actionDelay'] = function (data) {
	    var duration = data.duration;
	    var action = new TWEEN.Tween();
	    action.delay(duration);
	    return action;
	  };
	
	  that.createAction = function (data) {
	    _object = data.object;
	    if (!_object && data.actionType !== "Delay") {
	      console.log('action need object');
	      return;
	    }
	    if (_actionMaps.hasOwnProperty('action' + data.actionType)) {
	      console.log('test create action 1' + data.actionType);
	      that.action = _actionMaps['action' + data.actionType](data);
	      if (data.easing && that.easingType[data.easing]) {
	        that.action.easing(that.easingType[data.easing]);
	      }
	      if (data.repeat) {
	        that.action.repeat(data.repeat);
	      }
	      if (data.delay > 0) {
	        that.action.delay(data.delay);
	      }
	      that.action.onComplete(function () {
	        if (data.callBack) {
	          data.callBack();
	        }
	      });
	    } else {
	      console.log('error action type', data.actionType);
	    }
	  };
	
	  that.start = function () {
	    if (!that.action) {
	      console.error('no action can start!');
	      return;
	    }
	    //console.log('action start');
	    that.action.start();
	  };
	
	  that.stop = function () {
	    if (!that.action) {
	      console.error('no action stop!');
	      return;
	    }
	    that.action.stop();
	    _object = null;
	    _startData = {};
	  };
	
	  that.createAction(spec);
	
	  return that;
	}; /**
	    * Created by long on 2017/1/16.
	    */
	
	exports.default = TweenAction;

/***/ },
/* 337 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by long on 2017/1/16.
	 */
	
	var ActionInterface = function ActionInterface() {
	  var that = {};
	
	  var actionData = {
	    object: null,
	    actionType: '',
	    easing: "",
	    duration: 0,
	    delay: 0,
	    repeat: 0,
	    startData: {},
	    endData: {},
	    callBack: null
	  };
	
	  that.createAction = function (actionData) {
	    console.log('error: virtual createAction function');
	  };
	
	  that.start = function () {
	    console.log('error: virtual start function');
	  };
	
	  that.stop = function () {
	    console.log('error: virtual stop function');
	  };
	
	  return that;
	};
	
	exports.default = ActionInterface;

/***/ },
/* 338 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
	                                                                                                                                                                                                                                                                               * Created by wizard on 16/3/30.
	                                                                                                                                                                                                                                                                               */
	
	//import Tween from 'tween.js'
	
	
	var _resourceManager = __webpack_require__(339);
	
	var _resourceManager2 = _interopRequireDefault(_resourceManager);
	
	var _vec = __webpack_require__(340);
	
	var _vec2 = _interopRequireDefault(_vec);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var helper = helper || {};
	
	helper.reorderNode = function (node) {
	  var depthCompare = function depthCompare(a, b) {
	    var az = a.zorder;
	    var bz = b.zorder;
	    if (az == undefined) {
	      az = 0;
	    }
	    if (bz == undefined) {
	      bz = 0;
	    }
	    if (az < bz) return -1;
	    if (az > bz) return 1;
	    return 0;
	  };
	
	  node.children.sort(depthCompare);
	};
	
	helper.sleep = function (duration) {
	  return new Promise(function (resolve, reject) {
	    var action = new TWEEN.Tween({}).to({}, duration).onComplete(function () {
	      resolve();
	    }).start();
	    // setTimeout(()=> {
	    //   resolve();
	    // }, duration)
	  });
	};
	
	helper.delay = function (duration, cb) {
	  var tween = new TWEEN.Tween();
	  tween.delay(duration);
	  tween.onComplete(function () {
	    if (cb) {
	      cb();
	    }
	  });
	  tween.start();
	};
	
	helper.floorToFixed = function (value, count) {
	  var num = Math.floor(value * Math.pow(10, count)) / Math.pow(10, count);
	  // num = parseFloat(num);
	  // num.toFixed(2);
	  // return num;
	  return num.toFixed(count);
	  // return (value - 0.5 / Math.pow(10,count)).toFixed(count);
	};
	helper.isArray = function (obj) {
	  return obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) == "object" && obj.hasOwnProperty('length') && typeof obj.length == 'number';
	};
	
	helper.isObject = function (obj) {
	  return obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) == "object" && !helper.isArray(obj);
	};
	
	helper.cloneObject = function (sourceObj, targetObj) {
	
	  if (helper.isArray(sourceObj)) {
	    if (targetObj == undefined) {
	      targetObj = [];
	    }
	
	    if (!helper.isArray(targetObj)) {
	      return;
	    }
	
	    for (var i = 0; i < sourceObj.length; ++i) {
	      var subTargetObj;
	      if (helper.isArray(sourceObj[i]) || helper.isObject(sourceObj[i])) {
	        subTargetObj = helper.cloneObject(sourceObj[i]);
	      } else {
	        subTargetObj = sourceObj[i];
	      }
	
	      targetObj.push(subTargetObj);
	    }
	  } else if (helper.isObject(sourceObj)) {
	    if (targetObj == undefined) {
	      targetObj = {};
	    }
	
	    if (!helper.isObject(targetObj)) {
	      return;
	    }
	
	    for (var index in sourceObj) {
	      var subTargetObj;
	      if (helper.isArray(sourceObj[index]) || helper.isObject(sourceObj[index])) {
	        subTargetObj = helper.cloneObject(sourceObj[index]);
	      } else {
	        subTargetObj = sourceObj[index];
	      }
	
	      targetObj[index] = subTargetObj;
	    }
	  }
	
	  return targetObj;
	};
	
	helper.arrayFindOne = function (list, filter) {
	  for (var i = 0; i < list.length; i++) {
	    if (filter(list[i])) {
	      return list[i];
	    }
	  }
	  return null;
	};
	
	var _pSub = function _pSub(v1, v2) {
	  return { x: v1.x - v2.x, y: v1.y - v2.y };
	};
	
	helper.pSub = _pSub;
	
	var _pDistance = function _pDistance(v1, v2) {
	  var v = _pSub(v1, v2);
	  return Math.sqrt(v.x * v.x + v.y * v.y);
	};
	
	helper.pDistance = _pDistance;
	
	var _pVec = function _pVec(x, y) {
	  return { x: x, y: y };
	};
	helper.pVec = _pVec;
	
	helper.pAngle = function (v1, v2) {
	  var v = (0, _vec2.default)(v1.x, v1.y);
	  var v3 = (0, _vec2.default)(v2.x, v2.y);
	  console.log('v3 = ' + JSON.stringify(v3));
	  return v.getRadians(v3) * 180 / Math.PI;
	};
	var getVRadians = function getVRadians(v1, v2) {
	  var v = (0, _vec2.default)(v1.x, v1.y);
	  var v3 = (0, _vec2.default)(v2.x, v2.y);
	  return v.getRadians(v3);
	};
	
	helper.pRadians = function (v1, v2) {
	  return getVRadians(v1, v2);
	};
	helper.pNormal = function (v1, v2) {
	  var distance = _pDistance(v1, v2);
	  var vec = _pSub(v2, v1);
	  return { x: 1 / distance * vec.x, y: 1 / distance * vec.y };
	};
	
	var _addVec = function _addVec(v1, v2) {
	  return {
	    x: v1.x + v2.x,
	    y: v1.y + v2.y
	  };
	};
	helper.addVec = _addVec;
	
	var _multVec = function _multVec(v, m) {
	  ///向量放大
	  return {
	    x: v.x * m,
	    y: v.y * m
	  };
	};
	helper.multVec = _multVec;
	
	helper.randomInt = function (min, max) {
	  var range = max - min;
	  var random = Math.random();
	  var result = min + Math.floor(random * range);
	  return result;
	};
	
	helper.getQueryString = function (name) {
	  console.log('get data string = ' + window.location.search + ',' + name);
	  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	  console.log('reg = ' + reg);
	  var r = window.location.search.substr(1).match(reg);
	  if (r != null) return decodeURI(r[2]);
	  return null;
	};
	helper.getDataInString = function (url, name) {
	  var str = url;
	  for (var i = 0; i < str.length; i++) {
	    if (str[i] === '?') {
	      str = str.substr(i);
	    }
	  }
	  console.log('get data string = ' + str + ',' + name);
	  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	  console.log('reg = ' + reg);
	  var r = str.substr(1).match(reg);
	  if (r != null) return decodeURI(r[2]);
	  return null;
	};
	helper.getRandomObjInList = function (list) {
	  return list[Math.floor(Math.floor(Math.random() * list.length))];
	};
	helper.getImgUrlWithSize = function (url, size) {
	  console.log('getImgUrlWithSize', url);
	  var suffix = "jpg";
	  var strings = url.split(".");
	  if (strings.length > 0) {
	    suffix = strings[strings.length - 1];
	  }
	  var newUrl = url + "@1e_" + size + "w_" + size + "h_1c_0i_1o_90Q_1x." + suffix;
	  var resultUrl = url.indexOf("img1") !== -1 || url.indexOf("@1e_") !== -1 ? url : newUrl;
	  console.log('getImgUrlWithSize', resultUrl);
	  return resultUrl;
	};
	helper.getImgUrlWithRect = function (url, rect) {
	  console.log('getImgUrlWithSize', url);
	  var suffix = "jpg";
	  var strings = url.split(".");
	  if (strings.length > 0) {
	    suffix = strings[strings.length - 1];
	  }
	  var newUrl = url + "@1e_" + rect.width + "w_" + rect.height + "h_1c_0i_1o_90Q_1x." + suffix;
	  var resultUrl = url.indexOf("img1") !== -1 || url.indexOf("@1e_") !== -1 ? url : newUrl;
	  console.log('getImgUrlWithSize', resultUrl);
	  return resultUrl;
	};
	
	String.prototype.replaceAll = function (s1, s2) {
	  return this.replace(new RegExp(s1, "gm"), s2);
	};
	// helper.thing = undefined;
	
	helper.timeCountDown = function (node, value, cb, size, division) {
	
	  var countNum = 0;
	  var thing = new PIXI.Graphics();
	  thing.beginFill(0xffFF00, 0.5);
	  node.addChild(thing);
	  var speed = 360 / value;
	  console.log('speed =  ' + speed);
	  var normalSize = 200;
	  var normalDivision = 30;
	  if (size) {
	    normalSize = size;
	  }
	  if (division) {
	    normalDivision = division; //细分角度
	  }
	  var tween = new TWEEN.Tween({ value: value }).to({ value: 0 }, value).onUpdate(function () {
	    if (countNum > 10) {
	      var radio = this.value * speed;
	      thing.clear();
	      // thing.lineStyle(10, 0xff0000, 1);
	      thing.beginFill(0xffFF00, 0.5);
	
	      thing.moveTo(0, 0);
	      thing.lineTo(0, normalSize);
	
	      var count = Math.floor(radio / normalDivision);
	      var defaultVec = (0, _vec2.default)(0, normalSize);
	      var endVec = defaultVec;
	      for (var i = 1; i < count + 1; i++) {
	        endVec = defaultVec.rotateByAngle((0, _vec2.default)(0, 0), normalDivision * i / 180 * Math.PI);
	        thing.lineTo(endVec.x, endVec.y);
	      }
	      var normalEndVec = endVec.rotateByAngle((0, _vec2.default)(0, 0), (radio - normalDivision * count) / 180 * Math.PI);
	      thing.lineTo(normalEndVec.x, normalEndVec.y);
	      node.mask = thing;
	    }
	    countNum++;
	  }).onComplete(function () {
	    if (cb) {
	      cb();
	    }
	  });
	  tween.start();
	};
	
	exports.default = helper;

/***/ },
/* 339 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	/**
	 * Created by hewenlong on 16-3-18.
	 */
	var ResourceManager = ResourceManager || function () {
	  var that = {};
	
	  var _loadingMap = {};
	  var _pathCfg = null;
	
	  that.resource = {};
	
	  that.uiLoaded = {};
	
	  that.init = function (pathCfg) {
	    _pathCfg = pathCfg;
	  };
	
	  that.load = function (name) {
	    return new Promise(function (resolve, reject) {
	      if (that.resource[name]) {
	        resolve(that.resource[name]);
	        return;
	      }
	
	      var resolveList = _loadingMap[name];
	
	      if (!resolveList) {
	        _loadingMap[name] = [];
	        resolveList = _loadingMap[name];
	      }
	
	      if (resolveList.length == 0) {
	        resolveList.push(resolve);
	
	        PIXI.loader.add(name, name).load(function (loader, res) {
	          that.resource[name] = res[name];
	          var endList = _loadingMap[name];
	          delete _loadingMap[name];
	          for (var i = 0; i < endList.length; ++i) {
	            endList[i](that.resource[name]);
	          }
	        });
	      } else {
	        resolveList.push(resolve);
	      }
	    });
	  };
	
	  that.loadList = function () {
	    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(resList) {
	      return regeneratorRuntime.wrap(function _callee2$(_context2) {
	        while (1) {
	          switch (_context2.prev = _context2.next) {
	            case 0:
	              return _context2.abrupt('return', new Promise(function (resolve, reject) {
	                var _this = this;
	
	                var cnt = 0;
	                var checkEnd = function checkEnd() {
	                  if (cnt == resList.length) {
	                    resolve();
	                  }
	                };
	
	                checkEnd();
	
	                for (var i = 0; i < resList.length; ++i) {
	                  _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
	                    return regeneratorRuntime.wrap(function _callee$(_context) {
	                      while (1) {
	                        switch (_context.prev = _context.next) {
	                          case 0:
	                            _context.next = 2;
	                            return that.load(resList[i]);
	
	                          case 2:
	                            cnt++;
	                            checkEnd();
	
	                          case 4:
	                          case 'end':
	                            return _context.stop();
	                        }
	                      }
	                    }, _callee, _this);
	                  }))();
	                }
	              }));
	
	            case 1:
	            case 'end':
	              return _context2.stop();
	          }
	        }
	      }, _callee2, this);
	    }));
	
	    return function (_x) {
	      return _ref.apply(this, arguments);
	    };
	  }();
	
	  that.loadFontList = function () {
	    var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(fontList) {
	      return regeneratorRuntime.wrap(function _callee4$(_context4) {
	        while (1) {
	          switch (_context4.prev = _context4.next) {
	            case 0:
	              return _context4.abrupt('return', new Promise(function (resolve, reject) {
	                var _this2 = this;
	
	                var cnt = 0;
	                var checkEnd = function checkEnd() {
	                  if (cnt == fontList.length) {
	                    resolve();
	                  }
	                };
	
	                checkEnd();
	
	                for (var i = 0; i < fontList.length; ++i) {
	                  _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
	                    return regeneratorRuntime.wrap(function _callee3$(_context3) {
	                      while (1) {
	                        switch (_context3.prev = _context3.next) {
	                          case 0:
	                            _context3.next = 2;
	                            return that.loadFont(fontList[i]);
	
	                          case 2:
	                            cnt++;
	                            checkEnd();
	
	                          case 4:
	                          case 'end':
	                            return _context3.stop();
	                        }
	                      }
	                    }, _callee3, _this2);
	                  }))();
	                }
	              }));
	
	            case 1:
	            case 'end':
	              return _context4.stop();
	          }
	        }
	      }, _callee4, this);
	    }));
	
	    return function (_x2) {
	      return _ref3.apply(this, arguments);
	    };
	  }();
	
	  that.loadFont = function () {
	    var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(fontName) {
	      return regeneratorRuntime.wrap(function _callee6$(_context6) {
	        while (1) {
	          switch (_context6.prev = _context6.next) {
	            case 0:
	              return _context6.abrupt('return', new Promise(function (resolve, reject) {
	                var _this3 = this;
	
	                _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
	                  var path, font;
	                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
	                    while (1) {
	                      switch (_context5.prev = _context5.next) {
	                        case 0:
	                          if (!(_pathCfg == null)) {
	                            _context5.next = 3;
	                            break;
	                          }
	
	                          reject(new Error('not config font path yet'));
	                          return _context5.abrupt('return');
	
	                        case 3:
	                          path = _pathCfg['xml_' + fontName];
	                          //console.log('font name start load: ' + fontName);
	
	                          _context5.next = 6;
	                          return that.load(path);
	
	                        case 6:
	                          font = _context5.sent;
	
	                          //console.log('font name end load: ' + fontName);
	
	                          PIXI.extras.BitmapText.fonts[fontName] = font.bitmapFont;
	                          resolve(font);
	
	                        case 9:
	                        case 'end':
	                          return _context5.stop();
	                      }
	                    }
	                  }, _callee5, _this3);
	                }))();
	              }));
	
	            case 1:
	            case 'end':
	              return _context6.stop();
	          }
	        }
	      }, _callee6, undefined);
	    }));
	
	    return function (_x3) {
	      return _ref5.apply(this, arguments);
	    };
	  }();
	
	  return that;
	}();
	
	exports.default = ResourceManager;

/***/ },
/* 340 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by chuhaoyuan on 2016/10/11.
	 */
	var Vec2 = function Vec2(x, y) {
	  var that = { x: x, y: y };
	  that.getDistance = function (object) {
	    //两点之间距离
	    var a = (that.x - object.x) * (that.x - object.x) + (that.y - object.y) * (that.y - object.y);
	    var l = Math.sqrt(a);
	    var w = parseInt(l);
	    if (l - w < 0.00001) {
	      return w;
	    }
	
	    return l;
	  };
	  that.getNormal = function () {
	    //获取单位向量
	    var n = that.x * that.x + that.y * that.y;
	    if (n === 1) {
	      return that;
	    }
	    n = Math.sqrt(n);
	    if (n < Number.MIN_VALUE) {
	      return that;
	    }
	    n = 1 / n;
	    var x = that.x * n;
	    var y = that.y * n;
	    return Vec2(x, y);
	  };
	  that.normal = function () {
	    //转换成单位向量
	    return that.getNormal();
	  };
	  that.add = function (object) {
	    //向量加
	
	    var x = that.x + object.x;
	    var y = that.y + object.y;
	    return Vec2(x, y);
	  };
	  that.sub = function (object) {
	    //向量减
	
	    var x = that.x - object.x;
	    var y = that.y - object.y;
	    return Vec2(x, y);
	  };
	  that.multValue = function (value) {
	    var x = that.x * value;
	    var y = that.y * value;
	    return Vec2(x, y);
	  };
	  that.addValue = function (value) {
	    var x = that.x + value;
	    var y = that.y + value;
	    return Vec2(x, y);
	  };
	  that.cross = function (object) {
	    //向量积
	    return that.x * object.y - that.y * object.x;
	  };
	  that.dot = function (object) {
	    //点积
	    return that.x * object.x + that.y * object.y;
	  };
	  that.getRadians = function (object) {
	    //得到向量弧度
	    var a = that.getNormal();
	    var b = object.getNormal();
	
	    var angle = Math.atan2(a.cross(b), a.dot(b));
	    // console.log('angle = ' + angle);
	    if (Math.abs(angle) < Number.MIN_VALUE) {
	      return 0;
	    }
	    return angle;
	  };
	
	  that.equals = function (object) {
	    //判断向量是否绝对相等
	    return Math.abs(that.x - object.x) < Number.MIN_VALUE && Math.abs(that.y - object.y) < Number.MIN_VALUE;
	  };
	
	  that.getAngle = function (object) {
	    //得到向量角度
	    return that.getRadians(object) * 180 / Math.PI;
	  };
	
	  that.isZero = function () {
	    return Math.abs(that.x) < Number.MIN_VALUE && Math.abs(that.y) < Number.MIN_VALUE;
	  };
	
	  that.rotateByAngle = function (object, angle) {
	    //向量转一个角度
	    var sinAngle = Math.sin(angle);
	    var cosAngle = Math.cos(angle);
	    var x = 0;
	    var y = 0;
	    if (object.isZero()) {
	      //console.log('旋转点是0');
	      var tempX = that.x * cosAngle - that.y * sinAngle;
	      y = that.y * cosAngle + that.x * sinAngle;
	      x = tempX;
	    } else {
	      var _tempX = that.x - object.x;
	      var tempY = that.y - object.y;
	      x = _tempX * cosAngle - tempY * sinAngle + object.x;
	      y = tempY * cosAngle + _tempX * sinAngle + object.y;
	    }
	
	    return Vec2(x, y);
	  };
	
	  return that;
	};
	exports.default = Vec2;

/***/ },
/* 341 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _registry = __webpack_require__(342);
	
	var _registry2 = _interopRequireDefault(_registry);
	
	var _screenWidthAligner = __webpack_require__(343);
	
	var _screenWidthAligner2 = _interopRequireDefault(_screenWidthAligner);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by wizard on 16/3/30.
	 */
	
	var fpsLimits = 1000 / 60;
	//import TWEEN from 'tween.js'
	
	var Director = function Director(width, height, resolution, direction) {
	  var _this = this;
	
	  var that = {};
	
	  var _worldList = [];
	  that.root = null;
	
	  that.width = width;
	  that.height = height;
	
	  //that.renderer = new PIXI.CanvasRenderer(width, height,{resolution: resolution});
	  that.renderer = PIXI.autoDetectRenderer(width, height, { resolution: resolution });
	  document.body.appendChild(that.renderer.view);
	
	  that.widthAlginer = (0, _screenWidthAligner2.default)(that, direction);
	
	  that.root = new PIXI.Container();
	
	  var _getTopWorld = function _getTopWorld() {
	    if (_worldList.length > 0) {
	      return _worldList[_worldList.length - 1];
	    }
	    return null;
	  };
	
	  var _removeWorld = function _removeWorld(world) {
	    if (world) {
	      world.onPause();
	      world.destroy();
	      that.root.removeChild(world.node);
	    }
	  };
	
	  var _pauseWorld = function _pauseWorld(world) {
	    if (world) {
	      world.onPause();
	      that.root.removeChild(world.node);
	    }
	  };
	
	  var _resumeWorld = function _resumeWorld(world) {
	    if (world) {
	      that.root.addChild(world.node);
	      world.onResume();
	      window.dispatchEvent(new Event('resize'));
	    }
	  };
	
	  var _lastTime = 0; //performance.now();
	  var stepOnce = function stepOnce(timestamp) {
	    requestAnimationFrame(stepOnce);
	
	    //
	    //if(_lastTime === 0) {
	    //  _lastTime = timestamp;
	    //}
	
	    // that.audio.update();
	    var dt = timestamp - _lastTime;
	    //console.log("dt : " + dt);
	    if (dt <= 0) {
	      return;
	    }
	
	    var tmpTime = _lastTime;
	    ////todo(yuchenl): for slow render in Android
	    //while (dt > fpsLimits) {
	    //  tmpTime += fpsLimits;
	    //  PIXI.ticker.shared.update(tmpTime);
	    //  TWEEN.update(tmpTime);
	    //
	    //  that.updateExecute(fpsLimits);
	    //  dt -= fpsLimits;
	    //}
	
	
	    tmpTime += dt;
	    PIXI.ticker.shared.update(tmpTime);
	    TWEEN.update(tmpTime);
	    that.updateExecute(dt);
	
	    that.renderer.render(that.root);
	
	    if (that.onLoopEnd) {
	      that.onLoopEnd.call(_this);
	    }
	
	    _lastTime = timestamp;
	  };
	
	  (0, _registry2.default)(that, ['update']);
	
	  that.popWorld = function () {
	    var lastWorld = _worldList.pop();
	    _removeWorld(lastWorld);
	
	    var topWorld = _getTopWorld();
	    _resumeWorld(topWorld);
	  };
	
	  that.replaceWorld = function (newWorld) {
	    var topWorld = _worldList.pop();
	    _removeWorld(topWorld);
	
	    _worldList.push(newWorld);
	    _resumeWorld(newWorld);
	  };
	
	  that.startWorld = function (newWorld) {
	    var topWorld = _getTopWorld();
	    _pauseWorld(topWorld);
	
	    _worldList.push(newWorld);
	    _resumeWorld(newWorld);
	  };
	
	  that.screenShot = function () {
	    // let content = that.renderer.plugins.extract.image(that.runningWorld.node);
	    var dataUrl = that.renderer.plugins.extract.base64(that.runningWorld.node);
	    // window.open(dataUrl);
	    return dataUrl;
	  };
	
	  Object.defineProperties(that, {
	    'runningWorld': {
	      get: function get() {
	        return _getTopWorld();
	      }
	    }
	  });
	
	  document.addEventListener('visibilitychange', function () {
	    var isHidden = document.hidden;
	    if (isHidden) {
	      console.log('hidden');
	      if (that.onHide) {
	        that.onHide();
	      }
	    } else {
	      // 动画开始
	      console.log('not hidden');
	      _lastTime = performance.now();
	      if (that.onShow) {
	        that.onShow();
	      }
	    }
	  });
	
	  _lastTime = performance.now();
	  requestAnimationFrame(stepOnce);
	
	  return that;
	};
	
	var SharedDirector = SharedDirector || function () {
	  var that = {};
	  var sharedDirector = null;
	  that.create = function (width, height, resolution, direction) {
	    sharedDirector = Director(width, height, resolution, direction);
	    return sharedDirector;
	  };
	
	  that.sharedDirector = function () {
	    return sharedDirector;
	  };
	
	  return that;
	}();
	
	exports.default = SharedDirector;

/***/ },
/* 342 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by wizard on 16/5/30.
	 */
	var Registry = function Registry(obj, handleNames) {
	
	  var _listenerMap = {};
	
	  obj.addHandleType = function (handles) {
	    var _loop = function _loop(i) {
	      var handleName = handles[i];
	      var list = _listenerMap[handleName];
	      if (!list) {
	        _listenerMap[handleName] = list = [];
	      }
	      obj[handleName + 'Register'] = function (target) {
	        if (list.indexOf(target) !== -1) {
	          return;
	        }
	        list.push(target);
	      };
	
	      obj[handleName + 'UnRegister'] = function (target) {
	        var index = list.indexOf(target);
	        if (index === -1) {
	          return;
	        }
	        list.splice(index, 1);
	      };
	
	      obj[handleName + 'Execute'] = function () {
	        for (var _i = 0; _i < list.length; ++_i) {
	          list[_i][handleName].apply(null, arguments);
	        }
	      };
	    };
	
	    for (var i = 0; i < handles.length; ++i) {
	      _loop(i);
	    }
	  };
	
	  obj.addHandleType(handleNames);
	
	  return obj;
	};
	
	exports.default = Registry;

/***/ },
/* 343 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by wizard on 2017/1/1.
	 */
	
	var ScreenWidthAligner = function ScreenWidthAligner(director, direction) {
	  var that = {};
	
	  var _alignList = [];
	  var _screenSize = {
	    width: 100,
	    height: 100
	  };
	
	  that.init = function () {};
	
	  that.getScreenSize = function () {
	    return _screenSize;
	  };
	
	  //todo(yuchenl): only for portrait and align width
	  that.alignDirector = function () {
	    console.log("alignDirector ");
	    var realScale = window.innerWidth / director.width;
	
	    //var endWidth = that.width * realScale;
	    var endHeight = director.height * realScale;
	
	    var canvas = director.renderer.view;
	    canvas.style.padding = 0;
	    canvas.style.margin = 0;
	
	    console.log('test size alignDirector: ', window.innerWidth, window.innerHeight, realScale, director.width);
	
	    var offsetBottom = (window.innerHeight - endHeight) / 2;
	
	    var resolution = director.renderer.resolution;
	    director.renderer.resize(Math.ceil(window.innerWidth / resolution), Math.ceil(window.innerHeight / resolution));
	    director.root.scale.set(realScale / resolution, realScale / resolution);
	    director.root.position.set(0, Math.ceil(offsetBottom / resolution));
	    _screenSize = {
	      width: Math.ceil(window.innerWidth / resolution) / (realScale / resolution),
	      height: Math.ceil(window.innerHeight / resolution) / (realScale / resolution)
	    };
	
	    that.resortAlign();
	  };
	
	  that.portraitDirector = function () {
	    //横屏显示
	    console.log("portrait ");
	    if (window.innerWidth >= window.innerHeight) {
	      // 屏幕为宽屏，不需要翻转
	      director.root.rotation = 0;
	      that.alignDirector();
	      return;
	    }
	    // 旋转屏幕，交换宽高
	    var directorW = director.width;
	    var directorH = director.height;
	    var realScale = window.innerHeight / directorW;
	
	    //var endWidth = that.width * realScale;
	    var endHeight = directorH * realScale;
	
	    var canvas = director.renderer.view;
	    canvas.style.padding = 0;
	    canvas.style.margin = 0;
	
	    console.log('test size portrait : ', window.innerWidth, window.innerHeight, realScale, director.width);
	
	    var offsetBottom = (window.innerWidth - endHeight) / 2;
	
	    var resolution = director.renderer.resolution;
	    _screenSize = {
	      width: Math.ceil(window.innerHeight / resolution) / (realScale / resolution),
	      height: Math.ceil(window.innerWidth / resolution) / (realScale / resolution)
	    };
	    director.renderer.resize(Math.ceil(window.innerWidth / resolution), Math.ceil(window.innerHeight / resolution));
	    director.root.scale.set(realScale / resolution, realScale / resolution);
	    director.root.position.set(window.innerWidth / resolution - Math.ceil(offsetBottom / resolution), 0);
	    console.log('directorH', window.innerWidth, _screenSize.width, offsetBottom, Math.ceil(offsetBottom / resolution));
	    director.root.rotation = Math.PI / 180 * 90;
	
	    that.resortPortrait();
	  };
	
	  //pixi node,  side: "top"/"bottom", distance for side
	  that.registerAlign = function (node, side, distance) {
	    _alignList.push({
	      node: node,
	      side: side,
	      distance: distance
	    });
	  };
	
	  that.unRegisterAlign = function (node) {
	    for (var i = 0; i < _alignList.length; ++i) {
	      if (_alignList[i].node === node) {
	        _alignList.splice(i, 1);
	        break;
	      }
	    }
	  };
	
	  that.resortAlign = function () {
	    var item = void 0,
	        rootPos = void 0,
	        nodePos = void 0;
	    var resolution = director.renderer.resolution;
	    for (var i = 0; i < _alignList.length; ++i) {
	      item = _alignList[i];
	      switch (item.side) {
	        case 'top':
	          rootPos = director.root.toLocal({ x: 0, y: item.distance });
	          break;
	        case 'bottom':
	          rootPos = director.root.toLocal({ x: 0, y: Math.ceil((window.innerHeight - item.distance) / resolution) });
	          break;
	        default:
	          continue;
	          break;
	      }
	      nodePos = item.node.toLocal(rootPos, director.root);
	      item.node.position.y += nodePos.y;
	    }
	  };
	
	  that.resortPortrait = function () {
	    var item = void 0,
	        rootPos = void 0,
	        nodePos = void 0;
	    var resolution = director.renderer.resolution;
	    for (var i = 0; i < _alignList.length; ++i) {
	      item = _alignList[i];
	      switch (item.side) {
	        case 'top':
	          rootPos = director.root.toLocal({ x: Math.ceil((window.innerWidth - item.distance) / resolution), y: 0 });
	          break;
	        case 'bottom':
	          rootPos = director.root.toLocal({ x: item.distance, y: 0 });
	          break;
	        default:
	          continue;
	          break;
	      }
	      nodePos = item.node.toLocal(rootPos, director.root);
	      item.node.position.y += nodePos.y;
	    }
	  };
	
	  window.addEventListener('resize', function () {
	    if (direction === "portrait") {
	      that.portraitDirector();
	    } else {
	      that.alignDirector();
	    }
	  });
	
	  return that;
	};
	
	exports.default = ScreenWidthAligner;

/***/ },
/* 344 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by wizard on 16/4/1.
	 */
	
	var timeoutLimit = 30 * 1000;
	
	//SRequest.get(defines.gameHomeURL, "s/Info/GetBag", {test: 1, name: "haha"}, data=> {
	//  console.log('resp 1' + JSON.stringify(data));
	//});
	//
	//SRequest.post(defines.gameHomeURL, "s/Info/RenamePet", {"pet_id": 1000}, data=> {
	//  console.log('resp 2' + JSON.stringify(data));
	//})
	
	var SRequest = SRequest || function () {
	  var that = {};
	
	  that.get = function (baseURL, handlerURL, params, cb) {
	    var xhr = new XMLHttpRequest();
	
	    var paramStr = getURLParamsString(params);
	    console.log("get string: " + baseURL + handlerURL + paramStr);
	
	    xhr.open("GET", baseURL + handlerURL + paramStr, true);
	    xhr.timeout = timeoutLimit;
	    xhr.onload = function () {
	      var data = JSON.parse(xhr.responseText);
	      if (cb) {
	        cb.call(undefined, data);
	      }
	    };
	    xhr.ontimeout = function () {
	      if (cb) {
	        cb.call(undefined, { timeout: true });
	      }
	    };
	    xhr.send();
	  };
	
	  that.post = function (baseURL, handlerURL, urlParams, params, cb) {
	
	    var xhr = new XMLHttpRequest(); // new HttpRequest instance
	    console.log('post', baseURL + handlerURL + getURLParamsString(urlParams));
	    xhr.open("POST", baseURL + handlerURL + getURLParamsString(urlParams), true);
	    xhr.setRequestHeader("Content-Type", "application/json");
	    xhr.timeout = timeoutLimit;
	    xhr.onload = function () {
	      //console.log('xhr.onload',xhr.responseText);
	      var data = JSON.parse(xhr.responseText);
	      if (cb) {
	        cb.call(undefined, data);
	      }
	    };
	    xhr.ontimeout = function () {
	      if (cb) {
	        cb.call(undefined, { timeout: true });
	      }
	    };
	    console.log('xhr.onload', params);
	    var bodyContent = params ? JSON.stringify(params) : "";
	    xhr.onerror = function (e) {
	      console.log('server error ' + e);
	      if (cb) {
	        cb.call(this, { timeout: true });
	      }
	    };
	    xhr.send(bodyContent);
	  };
	
	  that.jump = function (url, params) {
	    var paramStr = getURLParamsString(params);
	    console.log("jump to url: " + url + paramStr);
	    window.location.href = url + paramStr;
	  };
	
	  var getURLParamsString = function getURLParamsString(params, isStart) {
	    var paramStr = "";
	    if (params) {
	      var start = isStart != undefined ? isStart : true;
	      for (var index in params) {
	        if (start) {
	          start = false;
	          paramStr += "?";
	        } else {
	          paramStr += "&";
	        }
	        paramStr += index + "=" + params[index];
	      }
	    }
	
	    return paramStr;
	  };
	
	  return that;
	}();
	
	exports.default = SRequest;

/***/ },
/* 345 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _urlUtility = __webpack_require__(346);
	
	var _urlUtility2 = _interopRequireDefault(_urlUtility);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var timeoutLimit = 30 * 1000; /**
	                               * Created by wizard on 2016/12/26.
	                               */
	
	
	var AsyncRequest = function AsyncRequest() {
	  var that = {};
	  var uid = '';
	  var auth = '';
	
	  that.get = function (url, params, body) {
	
	    return new Promise(function (resolve, reject) {
	
	      var xhr = new XMLHttpRequest();
	
	      var getURL = url + _urlUtility2.default.ropeParamsString(params);
	      console.log("get string: " + getURL);
	
	      xhr.open("GET", getURL + '&f=1', true);
	      // if (uid !== '') {
	      //   console.log('set uid', uid);
	      //   xhr.setRequestHeader('uid', uid);
	      // }
	      // if (auth !== '') {
	      //   console.log('set auth', auth);
	      //   xhr.setRequestHeader('Cookie', "auth=95637571%09941d769067ff240e39afe57920f0247e;");
	      // }
	      xhr.timeout = timeoutLimit;
	      xhr.onload = function () {
	        var data = JSON.parse(xhr.responseText);
	        resolve(data);
	      };
	      xhr.ontimeout = function () {
	        reject(Error('timeout'));
	      };
	      xhr.onerror = function (e) {
	        reject(e);
	      };
	      xhr.send();
	    });
	  };
	
	  that.post = function (url, params, body) {
	
	    return new Promise(function (resolve, reject) {
	
	      var xhr = new XMLHttpRequest(); // new HttpRequest instance
	      if (params) {
	        params['f'] = 1;
	      }
	      var postUrl = url + _urlUtility2.default.ropeParamsString(params);
	      console.log('post', postUrl);
	
	      xhr.open("POST", postUrl, true);
	
	      xhr.setRequestHeader("Content-Type", "application/json");
	      console.log('test uid auth: ', uid, auth);
	      xhr.timeout = timeoutLimit;
	      xhr.onload = function () {
	        console.log('xhr.onload', xhr.responseText);
	        var data = JSON.parse(xhr.responseText);
	        resolve(data);
	      };
	      xhr.ontimeout = function () {
	        reject(Error('timeout'));
	      };
	
	      if (!body) {
	        body = {};
	      }
	      console.log('xhr.onload 1', params, JSON.stringify(body));
	      var bodyContent = JSON.stringify(body);
	      xhr.onerror = function (e) {
	        reject(e);
	      };
	      xhr.send(bodyContent);
	    });
	  };
	
	  that.jump = function (url, params) {
	    var paramStr = _urlUtility2.default.ropeParamsString(params);
	    console.log("jump to url: " + url + paramStr);
	    window.location.href = url + paramStr;
	  };
	
	  that.setHeader = function (_uid, _auth) {
	    uid = _uid;
	    auth = _auth;
	  };
	
	  return that;
	};
	
	var asyncRequest = AsyncRequest();
	
	exports.default = asyncRequest;

/***/ },
/* 346 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by wizard on 2017/1/10.
	 */
	var URLUtility = function URLUtility() {
	  var that = {};
	
	  that.ropeParamsString = function (params, isStart) {
	    var paramStr = "";
	    if (params) {
	      var start = isStart != undefined ? isStart : true;
	      for (var index in params) {
	        if (start) {
	          start = false;
	          paramStr += "?";
	        } else {
	          paramStr += "&";
	        }
	        paramStr += index + "=" + params[index];
	      }
	    }
	
	    return paramStr;
	  };
	
	  return that;
	};
	
	var utilityURL = URLUtility();
	
	exports.default = utilityURL;

/***/ },
/* 347 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _scale3Sprite = __webpack_require__(348);
	
	var _scale3Sprite2 = _interopRequireDefault(_scale3Sprite);
	
	var _scale9Sprite = __webpack_require__(351);
	
	var _scale9Sprite2 = _interopRequireDefault(_scale9Sprite);
	
	var _scrollView = __webpack_require__(352);
	
	var _scrollView2 = _interopRequireDefault(_scrollView);
	
	var _listView = __webpack_require__(354);
	
	var _listView2 = _interopRequireDefault(_listView);
	
	var _pageView = __webpack_require__(355);
	
	var _pageView2 = _interopRequireDefault(_pageView);
	
	var _button = __webpack_require__(356);
	
	var _button2 = _interopRequireDefault(_button);
	
	var _progressBar = __webpack_require__(357);
	
	var _progressBar2 = _interopRequireDefault(_progressBar);
	
	var _radioButton = __webpack_require__(358);
	
	var _radioButton2 = _interopRequireDefault(_radioButton);
	
	var _radioGroup = __webpack_require__(359);
	
	var _radioGroup2 = _interopRequireDefault(_radioGroup);
	
	var _checkBox = __webpack_require__(361);
	
	var _checkBox2 = _interopRequireDefault(_checkBox);
	
	var _creater = __webpack_require__(362);
	
	var _creater2 = _interopRequireDefault(_creater);
	
	var _bmLabel = __webpack_require__(363);
	
	var _bmLabel2 = _interopRequireDefault(_bmLabel);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by wizard on 16/5/3.
	 */
	
	exports.default = {
	  Scale3Sprite: _scale3Sprite2.default,
	  Scale9Sprite: _scale9Sprite2.default,
	  ScrollView: _scrollView2.default,
	  ListView: _listView2.default,
	  PageView: _pageView2.default,
	  ProgressBar: _progressBar2.default,
	  RadioButton: _radioButton2.default,
	  RadioGroup: _radioGroup2.default,
	  Button: _button2.default,
	  CheckBox: _checkBox2.default,
	  BMLabel: _bmLabel2.default,
	  UIManager: _creater2.default,
	  create: _creater2.default.create,
	  addComponent: _creater2.default.addTemplete,
	  Type: {
	    Layout: "Layout",
	    Sprite: "Sprite",
	    Label: "Label",
	    Scale3Sprite: "Scale3Sprite",
	    Scale9Sprite: "Scale9Sprite",
	    ScrollView: "ScrollView",
	    ListView: "ListView",
	    PageView: "PageView",
	    ProgressBar: "ProgressBar",
	    RadioButton: "RadioButton",
	    RadioGroup: "RadioGroup",
	    Button: "Button",
	    CheckBox: "CheckBox",
	    BMLabel: "BMLabel"
	  }
	};
	//import UIManager from './ui-manager'

/***/ },
/* 348 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _uiExtends = __webpack_require__(349);
	
	var _uiExtends2 = _interopRequireDefault(_uiExtends);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Scale3Sprite = function Scale3Sprite(spec) {
	
	  var _baseTexture = null;
	  var _leftTexture = null;
	  var _centerTexture = null;
	  var _rightTexture = null;
	
	  var _node = new PIXI.Container();
	
	  (0, _uiExtends2.default)(spec.id, _node, {});
	
	  (function () {
	
	    _baseTexture = PIXI.Texture.fromImage(spec.bg);
	
	    var x = _baseTexture.frame.x;
	    var y = _baseTexture.frame.y;
	
	    _leftTexture = new PIXI.Texture(_baseTexture, new PIXI.Rectangle(x, y, spec.offsetX, _baseTexture.frame.height));
	    _centerTexture = new PIXI.Texture(_baseTexture, new PIXI.Rectangle(spec.offsetX + x, y, spec.tilingWidth, _baseTexture.frame.height));
	    _rightTexture = new PIXI.Texture(_baseTexture, new PIXI.Rectangle(spec.offsetX + spec.tilingWidth + x, y, _baseTexture.frame.width - spec.offsetX - spec.tilingWidth, _baseTexture.frame.height));
	
	    var leftSprite = new PIXI.Sprite(_leftTexture);
	    //leftSprite.width = spec.offsetX;
	
	    var centerSprite = new PIXI.Sprite(_centerTexture);
	    centerSprite.width = spec.width - spec.offsetX * 2;
	    centerSprite.position.x = spec.offsetX;
	
	    var rightSprite = new PIXI.Sprite(_rightTexture);
	    //rightSprite.width = rightWidth;
	
	    rightSprite.position.x = spec.width - spec.offsetX;
	    console.log('right pos: ' + rightSprite.position.x);
	
	    _node.addChild(leftSprite);
	    _node.addChild(centerSprite);
	    _node.addChild(rightSprite);
	
	    var _centerPosition = function _centerPosition(spriteList) {
	      for (var i = 0; i < spriteList.length; ++i) {
	        spriteList[i].position.x -= spec.width / 2;
	        spriteList[i].position.y -= _baseTexture.height / 2;
	      }
	    };
	
	    _centerPosition([leftSprite, centerSprite, rightSprite]);
	  })();
	  return _node;
	}; /**
	    * Created by wizard on 16/4/29.
	    */
	exports.default = Scale3Sprite;

/***/ },
/* 349 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _inherited = __webpack_require__(350);
	
	var _inherited2 = _interopRequireDefault(_inherited);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var UIExtends = function UIExtends(uid, obj, uiObj) {
	  Object.defineProperty(obj, 'node', {
	    get: function get() {
	      return obj;
	    }
	  });
	
	  if (uiObj) {
	    (0, _inherited2.default)(uiObj);
	    Object.defineProperty(obj, 'uiController', {
	      get: function get() {
	        return uiObj;
	      }
	    });
	  }
	
	  if (uid || uid === 0) {
	    var _uid = uid;
	    Object.defineProperty(obj, 'id', {
	      get: function get() {
	        return _uid;
	      }
	    });
	  }
	}; /**
	    * Created by wizard on 16/5/20.
	    */
	
	exports.default = UIExtends;

/***/ },
/* 350 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * Created by wizard on 15/3/3.
	 */
	var Inherited = function Inherited(obj) {
	    var registry = {};
	
	    obj.inheritOn = function (name, handler) {
	
	        if (!obj.hasOwnProperty(name)) {
	            obj[name] = handler;
	            return;
	        }
	
	        if (registry.hasOwnProperty(name)) {
	            registry[name].push(handler);
	        } else {
	            var parentHandler = obj[name];
	            registry[name] = [parentHandler, handler];
	
	            obj[name] = function () {
	                var result = void 0;
	                var handlerList = registry[name];
	                for (var index in handlerList) {
	                    result = handlerList[index].apply(this, arguments);
	                    if (result != undefined && !result) {
	                        return result;
	                    }
	                }
	
	                return result;
	            };
	        }
	    };
	
	    return obj;
	};
	
	exports.default = Inherited;

/***/ },
/* 351 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _uiExtends = __webpack_require__(349);
	
	var _uiExtends2 = _interopRequireDefault(_uiExtends);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Scale9Sprite = function Scale9Sprite(spec) {
	  var _baseTexture = null;
	
	  var _leftUpTexture = null;
	  var _upTexture = null;
	  var _rightUpTexture = null;
	
	  var _leftTexture = null;
	  var _centerTexture = null;
	  var _rightTexture = null;
	
	  var _leftDownTexture = null;
	  var _downTexture = null;
	  var _rightDownTexture = null;
	
	  var _node = new PIXI.Container();
	
	  (0, _uiExtends2.default)(spec.id, _node, {});
	
	  (function () {
	    _baseTexture = PIXI.Texture.fromImage(spec.bg);
	
	    var x = _baseTexture.frame.x;
	    var y = _baseTexture.frame.y;
	
	    var rightWidth = _baseTexture.frame.width - spec.offsetX - spec.tilingWidth;
	    var bottomHeight = _baseTexture.frame.height - spec.offsetY - spec.tilingHeight;
	
	    _leftUpTexture = new PIXI.Texture(_baseTexture, new PIXI.Rectangle(x, y, spec.offsetX, spec.offsetY));
	    _upTexture = new PIXI.Texture(_baseTexture, new PIXI.Rectangle(spec.offsetX + x, y, spec.tilingWidth, spec.offsetY));
	    _rightUpTexture = new PIXI.Texture(_baseTexture, new PIXI.Rectangle(spec.offsetX + spec.tilingWidth + x, y, rightWidth, spec.offsetY));
	
	    _leftTexture = new PIXI.Texture(_baseTexture, new PIXI.Rectangle(x, spec.offsetY + y, spec.offsetX, spec.tilingHeight));
	    _centerTexture = new PIXI.Texture(_baseTexture, new PIXI.Rectangle(spec.offsetX + x, spec.offsetY + y, spec.tilingWidth, spec.tilingHeight));
	    _rightTexture = new PIXI.Texture(_baseTexture, new PIXI.Rectangle(spec.offsetX + spec.tilingWidth + x, spec.offsetY + y, rightWidth, spec.tilingHeight));
	
	    _leftDownTexture = new PIXI.Texture(_baseTexture, new PIXI.Rectangle(x, spec.offsetY + spec.tilingHeight + y, spec.offsetX, bottomHeight));
	    _downTexture = new PIXI.Texture(_baseTexture, new PIXI.Rectangle(spec.offsetX + x, spec.offsetY + spec.tilingHeight + y, spec.tilingWidth, bottomHeight));
	    _rightDownTexture = new PIXI.Texture(_baseTexture, new PIXI.Rectangle(spec.offsetX + spec.tilingWidth + x, spec.offsetY + spec.tilingHeight + y, rightWidth, bottomHeight));
	
	    //up
	    var leftUpSprite = new PIXI.Sprite(_leftUpTexture);
	    leftUpSprite.width = spec.offsetX;
	    leftUpSprite.height = spec.offsetY;
	
	    var upSprite = new PIXI.Sprite(_upTexture);
	    upSprite.width = spec.width - spec.offsetX - rightWidth;
	    upSprite.height = spec.offsetY;
	
	    var rightUpSprite = new PIXI.Sprite(_rightUpTexture);
	    rightUpSprite.width = rightWidth;
	    rightUpSprite.height = spec.offsetY;
	
	    //middle
	    var leftSprite = new PIXI.Sprite(_leftTexture);
	    leftSprite.width = spec.offsetX;
	    leftSprite.height = spec.height - spec.offsetY - bottomHeight;
	
	    var centerSprite = new PIXI.Sprite(_centerTexture);
	    centerSprite.width = spec.width - spec.offsetX - rightWidth;
	    centerSprite.height = spec.height - spec.offsetY - bottomHeight;
	
	    var rightSprite = new PIXI.Sprite(_rightTexture);
	    rightSprite.width = rightWidth;
	    rightSprite.height = spec.height - spec.offsetY - bottomHeight;
	
	    //down
	    var leftDownSprite = new PIXI.Sprite(_leftDownTexture);
	    leftDownSprite.width = spec.offsetX;
	    leftDownSprite.height = bottomHeight;
	
	    var downSprite = new PIXI.Sprite(_downTexture);
	    downSprite.width = spec.width - spec.offsetX - rightWidth;
	    downSprite.height = bottomHeight;
	
	    var rightDownSprite = new PIXI.Sprite(_rightDownTexture);
	    rightDownSprite.width = rightWidth;
	    rightDownSprite.height = bottomHeight;
	
	    upSprite.position.x = spec.offsetX;
	    rightUpSprite.position.x = spec.width - rightWidth;
	
	    leftSprite.position = {
	      x: 0,
	      y: spec.offsetY
	    };
	    centerSprite.position = {
	      x: spec.offsetX,
	      y: spec.offsetY
	    };
	    rightSprite.position = {
	      x: spec.width - rightWidth,
	      y: spec.offsetY
	    };
	
	    leftDownSprite.position = {
	      x: 0,
	      y: spec.height - bottomHeight
	    };
	    downSprite.position = {
	      x: spec.offsetX,
	      y: spec.height - bottomHeight
	    };
	    rightDownSprite.position = {
	      x: spec.width - rightWidth,
	      y: spec.height - bottomHeight
	    };
	
	    var _putSprites = function _putSprites(spritesList) {
	      for (var i = 0; i < spritesList.length; ++i) {
	        spritesList[i].position.x -= spec.width / 2;
	        spritesList[i].position.y -= spec.height / 2;
	
	        _node.addChild(spritesList[i]);
	      }
	    };
	
	    _putSprites([leftUpSprite, upSprite, rightUpSprite, leftSprite, centerSprite, rightSprite, leftDownSprite, downSprite, rightDownSprite]);
	  })();
	
	  return _node;
	}; /**
	    * Created by wizard on 16/4/29.
	    */
	exports.default = Scale9Sprite;

/***/ },
/* 352 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _uiExtends = __webpack_require__(349);
	
	var _uiExtends2 = _interopRequireDefault(_uiExtends);
	
	var _defaultDefines = __webpack_require__(353);
	
	var _defaultDefines2 = _interopRequireDefault(_defaultDefines);
	
	var _vec = __webpack_require__(340);
	
	var _vec2 = _interopRequireDefault(_vec);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ScrollView = function ScrollView(spec) {
	  var _uiParts = {
	    bounceX: spec.bounceX != undefined ? spec.bounceX : _defaultDefines2.default.bounceMax,
	    bounceY: spec.bounceY != undefined ? spec.bounceY : _defaultDefines2.default.bounceMax,
	    bounceSpeed: spec.bounceSpeed != undefined ? spec.bounceSpeed : _defaultDefines2.default.bounceSpeed,
	    contentBounds: spec.bounds,
	
	    _state: null,
	
	    //behaviour
	    _collideBounds: null,
	    _controlMove: null,
	    _springMove: null,
	    _pushItem: null
	  };
	
	  var _scroll_speed = {
	    x: 0,
	    y: 0
	  };
	  var _node = null;
	  var _mask = null;
	  var _contentNode = null;
	  (function () {
	    _node = new PIXI.Container();
	    _mask = new PIXI.Graphics();
	    _mask.filling = true;
	    _mask.drawRect(0, 0, spec.width, spec.height);
	    _node.addChild(_mask);
	
	    _node.interactive = true;
	    _node.hitArea = new PIXI.Rectangle(0, 0, spec.width, spec.height);
	
	    _contentNode = new PIXI.Container();
	    _contentNode.mask = _mask;
	    _node.addChild(_contentNode);
	
	    (0, _uiExtends2.default)(spec.id, _node, _uiParts);
	  })();
	
	  //debug
	  if (_defaultDefines2.default.debugMode) {
	    (function () {
	      var debug = new PIXI.Graphics();
	      debug.lineStyle(1, 0x0000FF, 1);
	      debug.drawRect(0, 0, spec.width, spec.height);
	      _node.addChild(debug);
	    })();
	  }
	
	  var MovingState = {
	    auto: 0,
	    touching: 1
	  };
	
	  var _setState = function _setState(newState) {
	    if (_uiParts._state === newState) {
	      return;
	    }
	    switch (newState) {
	      case MovingState.auto:
	
	        break;
	        defaults: break;
	    }
	
	    _uiParts._state = newState;
	  };
	
	  _uiParts._controlMove = function (x, y) {
	    _contentNode.position.x += x;
	    _contentNode.position.y += y;
	
	    _contentNode.position.x = Math.min(_contentNode.position.x, _uiParts.contentBounds.right + _uiParts.bounceX);
	    _contentNode.position.x = Math.max(_contentNode.position.x, _uiParts.contentBounds.left - _uiParts.bounceX);
	
	    _contentNode.position.y = Math.min(_contentNode.position.y, _uiParts.contentBounds.bottom + _uiParts.bounceY);
	    _contentNode.position.y = Math.max(_contentNode.position.y, _uiParts.contentBounds.top - _uiParts.bounceY);
	  };
	
	  var _lastPos = null;
	  var _touchBeginPos = null;
	  var _onTouchBegin = function _onTouchBegin(event) {
	    _lastPos = {
	      x: event.data.global.x,
	      y: event.data.global.y
	    };
	
	    _touchBeginPos = _lastPos;
	    _setState(MovingState.touching);
	  };
	
	  var _onTouchMove = function _onTouchMove(event) {
	    if (!_lastPos) {
	      return;
	    }
	
	    var pos = event.data.global;
	
	    _uiParts._controlMove(pos.x - _lastPos.x, pos.y - _lastPos.y);
	
	    _lastPos = {
	      x: pos.x,
	      y: pos.y
	    };
	  };
	
	  var _onTouchEnd = function _onTouchEnd(event) {
	    //console.log('touch end : '+ JSON.stringify(event.data) );
	    var pos = event.data.global;
	    _scroll_speed = {
	      x: _touchBeginPos.x - pos.x,
	      y: _touchBeginPos.y - pos.y
	    };
	    _lastPos = null;
	
	    _setState(MovingState.auto);
	  };
	
	  (function () {
	    _node.on('touchstart', _onTouchBegin).on('mousedown', _onTouchBegin);
	
	    _node.on('mouseup', _onTouchEnd).on('touchend', _onTouchEnd).on('mouseupoutside', _onTouchEnd).on('touchendoutside', _onTouchEnd);
	
	    _node.on('touchmove', _onTouchMove).on('mousemove', _onTouchMove);
	  })();
	
	  _uiParts._pushItem = function (item) {
	    _contentNode.addChild(item);
	  };
	
	  _uiParts._collideBounds = function (dt) {
	    var isCollide = false;
	    if (_contentNode.position.x < _uiParts.contentBounds.left) {
	      _contentNode.position.x += dt * _uiParts.bounceSpeed / 1000;
	      if (Math.abs(_contentNode.position.x - _uiParts.contentBounds.left) <= 5) {
	        _contentNode.position.x = _uiParts.contentBounds.left;
	      }
	      isCollide = true;
	    }
	
	    if (_contentNode.position.x > _uiParts.contentBounds.right) {
	      _contentNode.position.x -= dt * _uiParts.bounceSpeed / 1000;
	      if (Math.abs(_contentNode.position.x - _uiParts.contentBounds.right) <= 5) {
	        _contentNode.position.x = _uiParts.contentBounds.right;
	      }
	      isCollide = true;
	    }
	
	    if (_contentNode.position.y < _uiParts.contentBounds.top) {
	      _contentNode.position.y += dt * _uiParts.bounceSpeed / 1000;
	      if (Math.abs(_contentNode.position.y - _uiParts.contentBounds.top) <= 5) {
	        _contentNode.position.y = _uiParts.contentBounds.top;
	      }
	      isCollide = true;
	    }
	
	    if (_contentNode.position.y > _uiParts.contentBounds.bottom) {
	      _contentNode.position.y -= dt * _uiParts.bounceSpeed / 1000;
	      if (Math.abs(_contentNode.position.y - _uiParts.contentBounds.bottom) <= 5) {
	        _contentNode.position.y = _uiParts.contentBounds.bottom;
	      }
	      isCollide = true;
	    }
	
	    return isCollide;
	  };
	
	  _uiParts._springMove = function (dt) {
	    // console.log('自动滑动');
	    if (Math.abs(_scroll_speed.x) > 5) {
	      _scroll_speed.x -= _scroll_speed.x / Math.abs(_scroll_speed.x) * 5;
	    } else {
	      _scroll_speed.x = 0;
	    }
	    if (Math.abs(_scroll_speed.y) > 5) {
	      _scroll_speed.y -= _scroll_speed.y / Math.abs(_scroll_speed.y) * 5;
	    } else {
	      _scroll_speed.y = 0;
	    }
	    // console.log('scroll speed = ' + JSON.stringify(_scroll_speed));
	
	    var vec = (0, _vec2.default)(_scroll_speed.x, _scroll_speed.y);
	    var dis = vec.getDistance((0, _vec2.default)(0, 0)) * 0.05;
	    // console.log("dis = " + dis);
	    var normal = vec.getNormal();
	    _uiParts._controlMove(normal.x * -dis, normal.y * -dis);
	  };
	
	  _uiParts.update = function (dt) {
	    if (_uiParts._state != MovingState.auto) {
	      return;
	    }
	
	    if (_uiParts._collideBounds(dt)) {
	
	      // _old_scroll_speed = {
	      //   x: _scroll_speed.x,
	      //   y: _scroll_speed.y
	      // };
	      // console.log("old scroll speed" + JSON.stringify(_old_scroll_speed));
	
	      _scroll_speed = {
	        x: 0,
	        y: 0
	      };
	      return;
	    }
	
	    _uiParts._springMove(dt);
	  };
	
	  PIXI.ticker.shared.add(function () {
	    // console.log('delta time: ' + PIXI.ticker.shared.deltaTime);
	    _uiParts.update(PIXI.ticker.shared.deltaTime * PIXI.ticker.shared.minFPS);
	  });
	
	  // _setState(MovingState.auto);
	
	  Object.defineProperty(_node, 'contentNode', {
	    get: function get() {
	      return _contentNode;
	    }
	  });
	
	  Object.defineProperty(_node, 'pushItem', {
	    get: function get() {
	      return _uiParts._pushItem;
	    }
	  });
	  Object.defineProperty(_node, "index", {
	    set: function set(index) {}
	  });
	
	  return _node;
	}; /**
	    * Created by wizard on 16/5/3.
	    */
	exports.default = ScrollView;

/***/ },
/* 353 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by wizard on 16/5/20.
	 */
	
	exports.default = {
	  bounceMax: 50,
	  bounceSpeed: 200,
	  itemSpacing: 5,
	  debugMode: true
	};

/***/ },
/* 354 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _scrollView = __webpack_require__(352);
	
	var _scrollView2 = _interopRequireDefault(_scrollView);
	
	var _defaultDefines = __webpack_require__(353);
	
	var _defaultDefines2 = _interopRequireDefault(_defaultDefines);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by wizard on 16/5/3.
	 */
	
	var ListItem = function ListItem(item, length) {
	  return {
	    item: item,
	    length: length
	  };
	};
	
	var ListView = function ListView(spec) {
	  spec.type = spec.type ? spec.type : "vertical";
	  spec.bounds = {
	    left: 0,
	    right: 0,
	    top: 0,
	    bottom: 0
	  };
	  if (spec.type == 'horizontal') {
	    spec.bounceY = 0;
	  } else {
	    spec.bounceX = 0;
	  }
	
	  var that = (0, _scrollView2.default)(spec);
	
	  var _itemList = [];
	  var _uiParts = that.uiController;
	
	  _uiParts._pushItem = function (child, customLength) {
	
	    var length = customLength ? customLength : spec.itemLength;
	    var spacing = spec.itemSpacing != undefined ? spec.itemSpacing : _defaultDefines2.default.itemSpacing;
	
	    that.contentNode.addChild(child);
	
	    var start = 0;
	    for (var i = 0; i < _itemList.length; ++i) {
	      start += _itemList[i].length + spacing;
	    }
	
	    if (spec.type == 'horizontal') {
	
	      child.position = {
	        x: start + length / 2,
	        y: spec.height / 2
	      };
	      _uiParts.contentBounds.left = Math.min(0, spec.width - start - length);
	      //console.log('list horizontal add child: ' + length);
	    } else if (spec.type == 'vertical') {
	      //console.log('list  vertical add child: ' + length);
	      child.position = {
	        x: spec.width / 2,
	        y: start + length / 2
	      };
	      _uiParts.contentBounds.top = Math.min(0, spec.height - start - length);
	    }
	
	    _itemList.push(ListItem(child, length));
	  };
	
	  var _clearItems = function _clearItems() {
	    for (var i = 0; i < _itemList.length; ++i) {
	      that.contentNode.removeChild(_itemList[i].item);
	    }
	
	    _itemList = [];
	    _uiParts.contentBounds = {
	      left: 0,
	      right: 0,
	      top: 0,
	      bottom: 0
	    };
	
	    that.contentNode.position.set(0, 0);
	  };
	
	  var _deleteItems = function _deleteItems(child, customLength) {
	    var n = 0;
	    for (var i = 0; i < _itemList.length; ++i) {
	      if (_itemList[i].item == child) {
	        that.contentNode.removeChild(_itemList[i].item);
	        n = i + 1;
	      }
	    }
	    if (n !== 0) {
	      for (n; n < _itemList.length; ++n) {
	        if (spec.type == 'horizontal') {
	          _itemList[n].item.position.x -= customLength;
	        } else if (spec.type == 'vertical') {
	          _itemList[n].item.position.y -= customLength;
	        }
	      }
	    }
	  };
	
	  Object.defineProperty(that, 'clearItems', {
	    get: function get() {
	      return _clearItems;
	    }
	  });
	
	  Object.defineProperty(that, 'deleteItems', {
	    get: function get() {
	      return _deleteItems;
	    }
	  });
	
	  return that;
	};
	
	exports.default = ListView;

/***/ },
/* 355 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _scrollView = __webpack_require__(352);
	
	var _scrollView2 = _interopRequireDefault(_scrollView);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var PageView = function PageView(spec) {
	  spec.type = spec.type ? spec.type : "vertical";
	  spec.bounds = {
	    left: 0,
	    right: 0,
	    top: 0,
	    bottom: 0
	  };
	  spec.bounceY = 0;
	  spec.bounceX = 0;
	
	  var that = (0, _scrollView2.default)(spec);
	  var _uiParts = that.uiController;
	
	  var _pageList = [];
	  _uiParts.currentIndex = 0;
	
	  _uiParts._pushItem = function (child) {
	    console.log('page push item');
	    that.contentNode.addChild(child);
	
	    var start = 0;
	
	    if (spec.type == 'horizontal') {
	      start = _pageList.length * spec.width;
	      child.position = {
	        x: start + spec.width / 2,
	        y: spec.height / 2
	      };
	      _uiParts.contentBounds.left = -_pageList.length * spec.width;
	    } else if (spec.type == 'vertical') {
	      start = _pageList.length * spec.height;
	      child.position = {
	        x: spec.width / 2,
	        y: start + spec.height / 2
	      };
	      _uiParts.contentBounds.top = -_pageList.length * spec.height;
	    }
	
	    _pageList.push(child);
	  };
	
	  _uiParts._springMove = function (dt) {
	    if (_pageList.length <= 0) {
	      return;
	    }
	
	    switch (spec.type) {
	      case 'horizontal':
	        var targetX = -_uiParts.currentIndex * spec.width;
	
	        if (Math.abs(that.contentNode.position.x - targetX) <= 10) {
	          that.contentNode.position.x = targetX;
	        } else {
	          that.contentNode.position.x += targetX > that.contentNode.position.x ? dt * 0.5 : dt * -0.5;
	        }
	        break;
	      case 'vertical':
	        var targetY = -_uiParts.currentIndex * spec.height;
	        if (Math.abs(that.contentNode.position.y - targetY) <= 10) {
	          that.contentNode.position.y = targetY;
	        } else {
	          that.contentNode.position.y += targetY > that.contentNode.position.y ? dt * 0.5 : dt * -0.5;
	        }
	        break;
	      default:
	        break;
	    }
	  };
	
	  _uiParts.inheritOn('_controlMove', function (x, y) {
	    switch (spec.type) {
	      case 'horizontal':
	        _uiParts.currentIndex = Math.floor((-that.contentNode.position.x + spec.width / 2) / spec.width);
	        break;
	      case 'vertical':
	        _uiParts.currentIndex = Math.floor((-that.contentNode.position.y + spec.height / 2) / spec.height);
	        break;
	      default:
	        break;
	    }
	  });
	
	  Object.defineProperty(that, 'pageCount', {
	    get: function get() {
	      return _pageList.length;
	    }
	  });
	
	  Object.defineProperty(that, 'length', {
	    set: function set(val) {
	      spec.width = val;
	    }
	  });
	
	  Object.defineProperty(that, 'currentIndex', {
	    get: function get() {
	      return _uiParts.currentIndex;
	    },
	    set: function set(val) {
	      _uiParts.currentIndex = val;
	    }
	  });
	
	  return that;
	}; /**
	    * Created by wizard on 16/5/12.
	    */
	exports.default = PageView;

/***/ },
/* 356 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _uiExtends = __webpack_require__(349);
	
	var _uiExtends2 = _interopRequireDefault(_uiExtends);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Button = function Button(spec) {
	
	  var _uiParts = {
	    normalTexture: null,
	    disableTexture: null,
	    enable: true,
	    onClick: null
	  };
	
	  var _sprite = null;
	  var _label = null;
	
	  (function () {
	    _uiParts.normalTexture = PIXI.Texture.fromImage(spec.bg);
	    if (spec.bg_disable) {
	      _uiParts.disableTexture = PIXI.Texture.fromImage(spec.bg_disable);
	    }
	
	    _sprite = new PIXI.Sprite();
	    _sprite.texture = _uiParts.normalTexture;
	
	    _sprite.anchor.set(0.5);
	
	    _sprite.interactive = true;
	
	    (0, _uiExtends2.default)(spec.id, _sprite, _uiParts);
	  })();
	
	  var _setTitle = function _setTitle(content) {
	    if (content == undefined || content == null) {
	      return;
	    }
	
	    if (!_label) {
	      var style = spec.style ? spec.style : { fontFamily: 'Arial', fontSize: "16px" };
	      var resolution = spec.resolution ? spec.resolution : 1;
	      _label = new PIXI.Text('', style, resolution);
	      if (spec.textAnchor) {
	        _label.anchor = spec.textAnchor;
	      } else {
	        _label.anchor.set(0.5);
	      }
	      _label.position.set(0);
	      _sprite.addChild(_label);
	    }
	
	    _label.text = content;
	  };
	  _setTitle(spec.text);
	
	  var _oriScale = null;
	
	  var _playClickDownAction = function _playClickDownAction() {
	    if (!_uiParts.enable) {
	      return;
	    }
	
	    //_oriPosY = that.node.position.y;
	    //that.node.position.y += 1;
	
	    _oriScale = {
	      x: _sprite.scale.x,
	      y: _sprite.scale.y
	    };
	
	    _sprite.scale = {
	      x: _oriScale.x * 0.98,
	      y: _oriScale.y * 0.98
	    };
	
	    _sprite.tint = 0xAAAAAA;
	
	    if (_sprite.touchStart && _uiParts.enable) {
	      _sprite.touchStart.call(undefined, _sprite);
	    }
	  };
	
	  var _playClickUpAction = function _playClickUpAction() {
	    if (!_uiParts.enable) {
	      return;
	    }
	
	    _sprite.tint = 0xFFFFFF;
	
	    if (!_oriScale) {
	      return;
	    }
	
	    _sprite.scale = _oriScale;
	
	    //
	    //if (!_oriPosY) {
	    //  return;
	    //}
	    //that.node.position.y = _oriPosY;
	    //_oriPosY = null;
	    if (_sprite.touchOver && _uiParts.enable) {
	      _sprite.touchOver.call(undefined, _sprite);
	    }
	  };
	
	  var _touchBegin = function _touchBegin(event, target) {
	    //console.log("touch Begin");
	    _playClickDownAction();
	    if (_uiParts.down) {
	      _uiParts.down.call(undefined, event);
	    }
	  };
	
	  var _touchMoved = function _touchMoved(event, target) {};
	
	  var _touchCancel = function _touchCancel(event, target) {
	    //console.log("touch Cancel");
	    _playClickUpAction();
	  };
	
	  var _touchEnd = function _touchEnd(event, target) {
	    //console.log("touch end");
	    _playClickUpAction();
	    if (_uiParts.up) {
	      _uiParts.up.call();
	    }
	  };
	
	  var _onClick = function _onClick() {
	    //console.log("btn click");
	    if (_uiParts.onClick && _uiParts.enable) {
	      _uiParts.onClick.call(undefined, _sprite);
	    }
	  };
	
	  (function () {
	    _sprite.on("mousedown", _touchBegin).on("mousemove", _touchMoved).on("mouseout", _touchCancel).on("mouseup", _touchEnd).on("touchstart", _touchBegin).on("touchmove", _touchMoved).on("touchendoutside", _touchCancel).on("touchend", _touchEnd).on("click", _onClick).on("tap", _onClick);
	  })();
	
	  Object.defineProperty(_sprite, "enable", {
	    get: function get() {
	      return _uiParts.enable;
	    },
	    set: function set(val) {
	      _uiParts.enable = val;
	      console.log('enable btn: ' + _uiParts.enable);
	      if (_uiParts.enable) {
	        _sprite.texture = _uiParts.normalTexture;
	        _sprite.tint = 0xFFFFFF;
	      } else {
	        if (_uiParts.disableTexture) {
	          _sprite.texture = _uiParts.disableTexture;
	        } else {
	          _sprite.tint = 0xAAAAAA;
	        }
	      }
	    }
	  });
	
	  Object.defineProperty(_sprite, "text", {
	    get: function get() {
	      return _label ? _label.text : '';
	    },
	    set: function set(val) {
	      _setTitle(val);
	    }
	  });
	
	  Object.defineProperty(_sprite, "onClick", {
	    get: function get() {
	      return _uiParts.onClick;
	    },
	    set: function set(val) {
	      _uiParts.onClick = val;
	    }
	  });
	
	  Object.defineProperty(_sprite, "down", {
	    set: function set(val) {
	      _uiParts.down = val;
	    }
	  });
	  Object.defineProperty(_sprite, "up", {
	    set: function set(val) {
	      _uiParts.up = val;
	    }
	  });
	
	  return _sprite;
	}; /**
	    * Created by hewenlong on 16-5-3.
	    */
	
	exports.default = Button;

/***/ },
/* 357 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _uiExtends = __webpack_require__(349);
	
	var _uiExtends2 = _interopRequireDefault(_uiExtends);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ProgressBar = function ProgressBar(spec) {
	
	  var _uiParts = {
	    direction: spec.direction ? spec.direction : 'left',
	    percent: 0
	  };
	
	  var _node = new PIXI.Container();
	
	  var _frontSprite = null;
	  var _backSprite = null;
	  var _label = null;
	  var _mask = null;
	
	  (function () {
	    (0, _uiExtends2.default)(spec.id, _node, _uiParts);
	
	    if (spec.bg) {
	      _backSprite = PIXI.Sprite.fromImage(spec.bg);
	      _backSprite.anchor = {
	        x: 0.5,
	        y: 0.5
	      };
	      _node.addChild(_backSprite);
	      if (spec.width) {
	        _backSprite.width = spec.width;
	      }
	    }
	
	    _frontSprite = PIXI.Sprite.fromImage(spec.fg);
	    if (spec.width) {
	      _frontSprite.width = spec.width;
	    }
	    if (spec.tint) {
	      _frontSprite.tint = spec.tint;
	    }
	
	    _frontSprite.anchor.set(0.5);
	
	    _mask = new PIXI.Graphics();
	    _mask.clear();
	    _mask.beginFill();
	    _mask.drawRect(0, 0, 0, 0);
	    _mask.endFill();
	    _frontSprite.mask = _mask;
	    _node.addChild(_mask);
	
	    _mask.position = {
	      x: -_frontSprite.width / 2,
	      y: -_frontSprite.height / 2
	    };
	
	    _node.addChild(_frontSprite);
	  })();
	
	  var _setContent = function _setContent(content) {
	    if (content == undefined || content == null) {
	      return;
	    }
	
	    if (!_label) {
	      var textStyle = spec.style ? spec.style : { font: '12px Arial', fill: '#FFFFFF' };
	      var resolution = spec.resolution ? spec.resolution : 1;
	      _label = new PIXI.Text('', textStyle, resolution);
	      _label.anchor.set(0.5);
	      _node.addChild(_label);
	    }
	
	    _label.text = content;
	  };
	  _setContent(spec.text);
	
	  //percent from 0 to 100
	  var _setPercent = function _setPercent(percent) {
	    _uiParts.percent = percent;
	    var realPercent = percent / 100;
	    var x = void 0,
	        y = void 0,
	        width = void 0,
	        height = void 0;
	    switch (_uiParts.direction) {
	      case 'left':
	        x = 0;
	        y = 0;
	        width = _frontSprite.width * realPercent;
	        height = _frontSprite.height;
	        break;
	      case 'right':
	        x = _frontSprite.width * (1 - realPercent);
	        y = 0;
	        width = _frontSprite.width * realPercent;
	        height = _frontSprite.height;
	        break;
	      case 'up':
	        x = 0;
	        y = 0;
	        width = _frontSprite.width;
	        height = _frontSprite.height * realPercent;
	        break;
	      case 'down':
	        x = 0;
	        y = _frontSprite.height * (1 - realPercent);
	        width = _frontSprite.width;
	        height = _frontSprite.height * realPercent;
	        break;
	      default:
	        console.log('wrong progress direction: ' + _uiParts.direction + '\n only support left|right|up|down');
	        break;
	    }
	
	    _mask.clear();
	    _mask.beginFill();
	    _mask.drawRect(x, y, width, height);
	    _mask.endFill();
	  };
	
	  Object.defineProperty(_node, "percent", {
	    get: function get() {
	      return _uiParts.percent;
	    },
	    set: function set(val) {
	      _setPercent(val);
	    }
	  });
	
	  Object.defineProperty(_node, "text", {
	    get: function get() {
	      return _label ? _label.text : '';
	    },
	    set: function set(val) {
	      _setContent(val);
	    }
	  });
	
	  Object.defineProperty(_node, "tint", {
	    set: function set(val) {
	      _frontSprite.tint = val;
	    }
	  });
	  Object.defineProperty(_node, "height", {
	    get: function get() {
	      return _backSprite.height;
	    }
	  });
	  Object.defineProperty(_node, "width", {
	    get: function get() {
	      return _backSprite.width;
	    }
	  });
	
	  return _node;
	}; /**
	    * Created by hewenlong on 16-5-4.
	    */
	
	exports.default = ProgressBar;

/***/ },
/* 358 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _uiExtends = __webpack_require__(349);
	
	var _uiExtends2 = _interopRequireDefault(_uiExtends);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var RadioButton = function RadioButton(spec) {
	
	  var RadioState = {
	    unchecked: 0,
	    checked: 1
	  };
	
	  var _sprite = null;
	  var _uiParts = {
	    //texture
	    checkedTexture: null,
	    uncheckedTexture: null,
	
	    _state: null,
	    group: null,
	
	    //events
	    onCheckOn: null,
	    onCheckOff: null,
	    onCheckChange: null,
	
	    //behaviour
	    _onClick: function _onClick() {
	      _sprite.checked = true;
	    }
	  };
	
	  (function () {
	
	    _uiParts.checkedTexture = PIXI.Texture.fromImage(spec.bg_on);
	    _uiParts.uncheckedTexture = PIXI.Texture.fromImage(spec.bg_off);
	
	    _sprite = new PIXI.Sprite();
	    _sprite.anchor.set(0.5);
	    _sprite.interactive = true;
	
	    //_onClick may be override later
	    _sprite.on('click', function () {
	      return _uiParts._onClick();
	    }).on('tap', function () {
	      return _uiParts._onClick();
	    });
	
	    (0, _uiExtends2.default)(spec.id, _sprite, _uiParts);
	  })();
	
	  var _setState = function _setState(newState) {
	    if (_uiParts._state == newState) {
	      return;
	    }
	
	    switch (newState) {
	      case RadioState.checked:
	        if (_uiParts.group) {
	          _uiParts.group.fire('ui_control:check_on', _sprite);
	        }
	        _sprite.texture = _uiParts.checkedTexture;
	        if (_uiParts.onCheckOn) {
	          _uiParts.onCheckOn.call(undefined, _sprite);
	        }
	        break;
	      case RadioState.unchecked:
	        _sprite.texture = _uiParts.uncheckedTexture;
	        if (_uiParts.onCheckOff) {
	          _uiParts.onCheckOff.call(undefined, _sprite);
	        }
	        break;
	      default:
	        console.log('wrong radio state' + newState);
	        break;
	    }
	    _uiParts._state = newState;
	    if (_uiParts.onCheckChange) {
	      _uiParts.onCheckChange.call(undefined, _sprite);
	    }
	  };
	
	  _setState(RadioState.unchecked);
	
	  Object.defineProperty(_sprite, 'checked', {
	    get: function get() {
	      return _uiParts._state == RadioState.checked ? true : false;
	    },
	    set: function set(val) {
	      if (val) {
	        _setState(RadioState.checked);
	      } else {
	        _setState(RadioState.unchecked);
	      }
	    }
	  });
	
	  (function () {
	    var handlerNames = ['group', 'onCheckOn', 'onCheckOff', 'onCheckChange'];
	
	    var _loop = function _loop(i) {
	      Object.defineProperty(_sprite, handlerNames[i], {
	        get: function get() {
	          return _uiParts[handlerNames[i]];
	        },
	        set: function set(val) {
	          _uiParts[handlerNames[i]] = val;
	        }
	      });
	    };
	
	    for (var i = 0; i < handlerNames.length; ++i) {
	      _loop(i);
	    }
	  })();
	
	  return _sprite;
	}; /**
	    * Created by wizard on 16/5/5.
	    */
	
	exports.default = RadioButton;

/***/ },
/* 359 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _eventuality = __webpack_require__(360);
	
	var _eventuality2 = _interopRequireDefault(_eventuality);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var RadioGroup = function RadioGroup() {
	  var that = (0, _eventuality2.default)({});
	
	  var _radioList = [];
	
	  that.addChild = function (radio) {
	    _radioList.push(radio);
	    radio.group = that;
	  };
	
	  that.on('ui_control:check_on', function (radio) {
	    for (var i = 0; i < _radioList.length; ++i) {
	      if (radio.id === _radioList[i].id) {
	        continue;
	      }
	
	      _radioList[i].checked = false;
	    }
	  });
	
	  return that;
	}; /**
	    * Created by wizard on 16/5/5.
	    */
	
	exports.default = RadioGroup;

/***/ },
/* 360 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var Eventuality = function Eventuality(obj) {
	    var registry = {};
	
	    obj.fire = function (event) {
	
	        var handler = null;
	
	        if (registry.hasOwnProperty(event)) {
	            var event_list = registry[event];
	            for (var i = 0; i < event_list.length; ++i) {
	                handler = event_list[i];
	                var args = [];
	
	                //not including event
	                for (var n = 1; n < arguments.length; ++n) {
	                    args.push(arguments[n]);
	                }
	                handler.apply(this, args);
	            }
	        }
	
	        return this;
	    };
	
	    obj.on = function (type, method) {
	        if (registry.hasOwnProperty(type)) {
	            registry[type].push(method);
	        } else {
	            registry[type] = [method];
	        }
	
	        return this;
	    };
	
	    obj.removeListener = function (type, method) {
	        if (!registry.hasOwnProperty(type)) {
	            return false;
	        }
	        var index = registry[type].indexOf(method);
	        if (index >= 0) {
	            registry[type].splice(index, 1);
	        }
	    };
	
	    obj.removeAllListeners = function () {
	        registry = {};
	    };
	    return obj;
	};
	exports.default = Eventuality;

/***/ },
/* 361 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _radioButton = __webpack_require__(358);
	
	var _radioButton2 = _interopRequireDefault(_radioButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var CheckBox = function CheckBox(spec) {
	  var that = (0, _radioButton2.default)(spec);
	
	  that.uiController._onClick = function () {
	    that.checked = !that.checked;
	  };
	
	  return that;
	}; /**
	    * Created by wizard on 16/5/5.
	    */
	
	exports.default = CheckBox;

/***/ },
/* 362 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _button = __webpack_require__(356);
	
	var _button2 = _interopRequireDefault(_button);
	
	var _scale3Sprite = __webpack_require__(348);
	
	var _scale3Sprite2 = _interopRequireDefault(_scale3Sprite);
	
	var _scale9Sprite = __webpack_require__(351);
	
	var _scale9Sprite2 = _interopRequireDefault(_scale9Sprite);
	
	var _scrollView = __webpack_require__(352);
	
	var _scrollView2 = _interopRequireDefault(_scrollView);
	
	var _listView = __webpack_require__(354);
	
	var _listView2 = _interopRequireDefault(_listView);
	
	var _progressBar = __webpack_require__(357);
	
	var _progressBar2 = _interopRequireDefault(_progressBar);
	
	var _pageView = __webpack_require__(355);
	
	var _pageView2 = _interopRequireDefault(_pageView);
	
	var _radioGroup = __webpack_require__(359);
	
	var _radioGroup2 = _interopRequireDefault(_radioGroup);
	
	var _radioButton = __webpack_require__(358);
	
	var _radioButton2 = _interopRequireDefault(_radioButton);
	
	var _checkBox = __webpack_require__(361);
	
	var _checkBox2 = _interopRequireDefault(_checkBox);
	
	var _bmLabel = __webpack_require__(363);
	
	var _bmLabel2 = _interopRequireDefault(_bmLabel);
	
	var _uiExtends = __webpack_require__(349);
	
	var _uiExtends2 = _interopRequireDefault(_uiExtends);
	
	var _input = __webpack_require__(364);
	
	var _input2 = _interopRequireDefault(_input);
	
	var _progressTouchBar = __webpack_require__(365);
	
	var _progressTouchBar2 = _interopRequireDefault(_progressTouchBar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by wizard on 16/5/9.
	 */
	
	var Create = function Create() {
	  var that = {};
	
	  var _factor = {};
	
	  var _handleGroup = function _handleGroup(group, groupID, obj) {
	    if (!groupID && groupID !== 0) {
	      return;
	    }
	
	    var groupObj = group[groupID];
	    if (!groupObj) {
	      groupObj = (0, _radioGroup2.default)();
	      group[groupID] = groupObj;
	    }
	
	    groupObj.addChild(obj);
	  };
	  var _inputList = [];
	
	  var create = function create(parent, json, owner) {
	    var creatorName = 'create' + json.component;
	    if (!_factor.hasOwnProperty(creatorName)) {
	      console.log('ui control cont create ' + json.component, JSON.stringify(json));
	      json.component = 'Node';
	      creatorName = 'createNode';
	      //return null;
	    }
	
	    if (!json.bg && json.image) {
	      json.bg = json.image;
	    }
	
	    var obj = _factor[creatorName].call(undefined, json);
	
	    if (parent) {
	      parent.addChild(obj.node);
	    }
	
	    if (json.id != undefined) {
	      owner[json.id] = obj;
	    }
	
	    var addChildren = function addChildren(oneObj, oneJson) {
	      if (!oneJson.children) {
	        return;
	      }
	      for (var i = 0; i < oneJson.children.length; ++i) {
	        create(oneObj.node, oneJson.children[i], owner);
	      }
	    };
	
	    var pushChildren = function pushChildren(oneObj, oneJson) {
	      if (!oneJson.children) {
	        return;
	      }
	
	      for (var i = 0; i < oneJson.children.length; ++i) {
	        var child = create(null, oneJson.children[i], owner);
	        oneObj.pushItem(child.node, oneJson.children[i].length);
	      }
	    };
	
	    switch (json.component) {
	      case 'List':
	      case 'ListView':
	      case 'ScrollView':
	      case 'PageView':
	        pushChildren(obj, json);
	        break;
	      case 'Radio':
	      case 'CheckBox':
	        _handleGroup(owner.group, json.group, obj);
	        obj.checked = json.check;
	        addChildren(obj, json);
	        break;
	      case 'Input':
	        _inputList.push(json.id);
	        break;
	      case 'Button':
	        obj.onClick = owner.onClick;
	        addChildren(obj, json);
	        break;
	      default:
	        addChildren(obj, json);
	        break;
	    }
	
	    return obj;
	  };
	
	  var _alignComponent = function _alignComponent(node, json) {
	    if (json.anchor != undefined) {
	      node.anchor = json.anchor;
	    } else {
	      node.anchor = {
	        x: 0.5,
	        y: 0.5
	      };
	    }
	
	    if (json.position != undefined) {
	      node.position = json.position;
	    }
	
	    if (json.scale != undefined) {
	      node.scale = json.scale;
	    }
	    if (json.rotation != undefined) {
	      node.rotation = json.rotation;
	    }
	    if (json.alpha != undefined) {
	      node.alpha = json.alpha;
	    }
	    if (json.visible != undefined) {
	      node.visible = json.visible;
	    }
	    if (json.name != undefined) {
	      node.name = json.name;
	    }
	    if (json.color != undefined) {
	      node.tint = json.color;
	    }
	  };
	
	  _factor.createLayout = _factor.createNode = function (json) {
	    var node = new PIXI.Container();
	    (0, _uiExtends2.default)(json.id, node);
	    _alignComponent(node, json);
	    return node;
	  };
	
	  _factor.createSprite = function (json) {
	    var sprite = json.bg ? PIXI.Sprite.fromImage(json.bg) : new PIXI.Sprite();
	    (0, _uiExtends2.default)(json.id, sprite);
	    _alignComponent(sprite, json);
	    return sprite;
	  };
	
	  _factor.createLabel = function (json) {
	    json.style = json.style ? json.style : { fontFamily: 'Arial', fontSize: '20px' };
	
	    var label = null;
	    if (json.style.bmfont) {
	      label = (0, _bmLabel2.default)(json);
	    } else {
	      var resolution = json.resolution ? json.resolution : 1;
	      label = new PIXI.Text(json.text, json.style, resolution);
	      (0, _uiExtends2.default)(json.id, label);
	    }
	    _alignComponent(label, json);
	    return label;
	  };
	
	  that.addTemplete = function (name, func) {
	    _factor['create' + name] = function (json) {
	      var layout = func(json);
	      _alignComponent(layout.node, json);
	      return layout;
	    };
	  };
	
	  that.addTemplete('Button', _button2.default);
	  that.addTemplete('Scale3Sprite', _scale3Sprite2.default);
	  that.addTemplete('Scale9Sprite', _scale9Sprite2.default);
	  that.addTemplete('ScrollView', _scrollView2.default);
	  that.addTemplete('ListView', _listView2.default);
	  that.addTemplete('List', _listView2.default);
	  that.addTemplete('ProgressBar', _progressBar2.default);
	  that.addTemplete('ProgressTouchBar', _progressTouchBar2.default);
	  that.addTemplete('Progress', _progressBar2.default);
	  that.addTemplete('PageView', _pageView2.default);
	  that.addTemplete('Radio', _radioButton2.default);
	  that.addTemplete('CheckBox', _checkBox2.default);
	  that.addTemplete('BMLabel', _bmLabel2.default);
	  that.addTemplete('Input', _input2.default);
	
	  that.create = function (json, onClick) {
	    var obj = {
	      group: {}, //for radio group
	      onClick: onClick
	    };
	    _inputList = [];
	    obj.node = create(null, json, obj).node;
	    Object.defineProperty(obj, 'components', {
	      get: function get() {
	        return obj;
	      }
	    });
	
	    obj.node.on('added', function (parent) {
	      for (var i = 0; i < _inputList.length; i++) {
	        obj[_inputList[i]].registerUpdate(parent);
	      }
	    });
	
	    obj.node.on('removed', function (parent) {
	      for (var i = 0; i < _inputList.length; i++) {
	        obj[_inputList[i]].destroy();
	      }
	    });
	
	    return obj;
	  };
	
	  return that;
	};
	
	var creater = Create();
	
	exports.default = creater;

/***/ },
/* 363 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _uiExtends = __webpack_require__(349);
	
	var _uiExtends2 = _interopRequireDefault(_uiExtends);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var BMLabel = function BMLabel(spec) {
	
	  var _node = null;
	  var _label = null;
	  var _anchor = new PIXI.Point();
	  var _uiParts = {};
	  (function () {
	    _node = new PIXI.Container();
	    //const resolution = spec.resolution ? spec.resolution : 1;
	    spec.style.font = spec.style.font ? spec.style.font : '20px font_yao';
	    console.log('font: ' + JSON.stringify(spec.style.font));
	    spec.style.align = 'left';
	    _label = new PIXI.extras.BitmapText(spec.text, spec.style);
	
	    _label.tint = spec.style.fill !== undefined ? spec.style.fill : 0xffffff;
	    _node.addChild(_label);
	    (0, _uiExtends2.default)(spec.id, _node, _uiParts);
	
	    //todo(yuchenl): PIXI  BitmapText bug, need call these
	    if (spec.style.maxWidth) {
	      _label.maxWidth = spec.style.maxWidth;
	      _label.updateText();
	    }
	  })();
	
	  Object.defineProperty(_node, 'text', {
	    get: function get() {
	      return _label.text;
	    },
	    set: function set(val) {
	      _label.text = val;
	      _label.updateText();
	      //console.log('label anchor: ' + JSON.stringify(_node.anchor) );
	      //console.log('label size: ' + _label.textWidth  + " : " + _label.textHeight);
	      _label.x = -_label.textWidth * _node.anchor.x;
	      _label.y = -_label.textHeight * _node.anchor.y;
	    }
	  });
	
	  Object.defineProperty(_node, 'anchor', {
	    get: function get() {
	      return _anchor;
	    },
	    set: function set(val) {
	      _anchor.set(val.x, val.y);
	      _label.x = -_label.textWidth * _node.anchor.x;
	      _label.y = -_label.textHeight * _node.anchor.y;
	    }
	  });
	
	  return _node;
	}; /**
	    * Created by wizard on 16/5/20.
	    */
	exports.default = BMLabel;

/***/ },
/* 364 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by guolei on 16/6/2.
	 */
	
	//todo(yuchenl): not finish yet
	var Input = function Input(spec) {
	  var that = {};
	  //only vase
	  that.node = new PIXI.Container();
	  var sprite = new PIXI.Sprite.fromImage();
	  that.node.addChild(sprite);
	
	  var game = document.getElementById('game');
	  var input = document.createElement("input");
	  input.style.position = 'absolute';
	  input.style.width = spec.width + 'px';
	  input.style.height = spec.height + 'px';
	  input.style.backgroundImage = "url('" + spec.image + "')";
	  input.id = spec.id;
	  //input.style.backgroundRepeat = 'no-repeat';
	  game.appendChild(input);
	
	  //Object.defineProperty(that, 'position', {
	  //  set: (val)=> {
	  //
	  //  },
	  //  get: ()=> {
	  //    return that.node.postion;
	  //  }
	  //});
	  var _updatePosition = function _updatePosition(parent) {
	    if (!that.node) return;
	    that.node.position = spec.position;
	    var pos = that.node.parent.toGlobal(spec.position);
	    input.style.width = spec.width * parent.scale.x + 'px';
	    input.style.height = spec.height * parent.scale.y + 'px';
	    input.style.left = pos.x + 'px';
	    input.style.top = pos.y + 'px';
	  };
	
	  that.registerUpdate = function (parent) {
	    //_updatePosition(parent);
	    window.addEventListener("resize", function (event) {
	      _updatePosition(parent);
	    });
	  };
	
	  that.destroy = function () {
	    game.removeChild(input);
	    that.node = null;
	  };
	
	  that.node.on('removed', function (parent) {
	    game.removeChild(input);
	    that.node.removeChild();
	  });
	
	  return that;
	};
	exports.default = Input;

/***/ },
/* 365 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _progressBar = __webpack_require__(357);
	
	var _progressBar2 = _interopRequireDefault(_progressBar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ProgressTouchBar = function ProgressTouchBar(spec) {
	
	  var that = (0, _progressBar2.default)(spec);
	
	  var _slide = PIXI.Sprite.fromImage(spec.slide);
	  _slide.interactive = true;
	  that.addChild(_slide);
	  _slide.anchor.set(0.5);
	  that.percent = 50;
	
	  var _isTouch = false;
	
	  var touchStatr = function touchStatr(event) {
	    _isTouch = true;
	  };
	
	  var touchEnd = function touchEnd() {
	    _isTouch = false;
	  };
	  var dragMoving = function dragMoving(event) {
	    if (_isTouch === false) {
	      return;
	    }
	    var data = event.data;
	    var pos = data.getLocalPosition(that);
	    _slide.position.x = pos.x;
	
	    if (_slide.position.x >= spec.width * 0.5) {
	      _slide.position.x = spec.width * 0.5;
	    }
	    if (_slide.position.x <= spec.width * -0.5) {
	      _slide.position.x = spec.width * -0.5;
	    }
	    // console.log('spec width =' + spec.width * -0.5);
	    // console.log('slide position x' + pos.x);
	    offsetProgressValue((_slide.position.x - spec.width * -0.5) / spec.width * 100);
	  };
	  var offsetProgressValue = function offsetProgressValue(percent) {
	    that.percent = percent;
	  };
	  // _slide.on('pointerdown',dragStart);
	
	  _slide.on('mousedown', touchStatr);
	  _slide.on('mousemove', dragMoving);
	  _slide.on('mouseout', touchEnd);
	  _slide.on('touchstart', touchStatr);
	  _slide.on('touchmove', dragMoving);
	  _slide.on('touchend', touchEnd);
	  // _slide.on('mouseupoutside',touchEnd);
	  // _slide.on('touchendoutside',touchEnd);
	
	
	  // _sprite.on("mousedown", _touchBegin)
	  //   .on("mousemove", _touchMoved)
	  //   .on("mouseout", _touchCancel)
	  //   .on("mouseup", _touchEnd)
	  //   .on("touchstart", _touchBegin)
	  //   .on("touchmove", _touchMoved)
	  //   .on("touchendoutside", _touchCancel)
	  //   .on("touchend", _touchEnd)
	  //   .on("click", _onClick)
	  //   .on("tap", _onClick);
	  //
	
	  return that;
	}; /**
	    * Created by chuhaoyuan on 2017/5/9.
	    */
	exports.default = ProgressTouchBar;

/***/ },
/* 366 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _helper = __webpack_require__(338);
	
	var _helper2 = _interopRequireDefault(_helper);
	
	var _director = __webpack_require__(341);
	
	var _director2 = _interopRequireDefault(_director);
	
	var _registry = __webpack_require__(342);
	
	var _registry2 = _interopRequireDefault(_registry);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var BaseWorld = function BaseWorld() {
	  var that = {};
	
	  that.node = new PIXI.Container();
	
	  that.init = function () {
	    return true;
	  };
	
	  that.destroy = function () {
	    that.destroyExecute();
	  };
	
	  that.update = function (dt) {
	    that.updateExecute(dt);
	  };
	
	  that.onResume = function () {
	    //console.log('world on resume');
	    _director2.default.sharedDirector().updateRegister(that);
	  };
	
	  that.onPause = function () {
	    //console.log('world on pause');
	    _director2.default.sharedDirector().updateUnRegister(that);
	  };
	
	  var _modelList = [];
	
	  that.lock2Layer = function (layer) {
	
	    _helper2.default.reorderNode(that.node);
	
	    for (var i = 0; i < that.node.children.length; ++i) {
	      if (that.node.children[i] === layer.node) {
	        break;
	      }
	      that.node.children[i].interactiveChildren = false;
	    }
	
	    _modelList.push(layer);
	    _modelList.sort(_sortByZorder);
	  };
	
	  that.popModelLayer = function () {
	    if (that.getModelNum() === 0) return;
	    var layer = _modelList[that.getModelNum() - 1];
	    if (layer) {
	      layer.removeFromWorld();
	      layer = null;
	    }
	  };
	  that.getModelNum = function () {
	    return _modelList.length;
	  };
	
	  that.unlock2Layer = function (layer) {
	    var index = _modelList.indexOf(layer);
	    if (index === -1) {
	      console.log('error: no dialog to pop');
	      return;
	    }
	
	    _modelList.splice(index, 1);
	    that.node.removeChild(layer.node);
	
	    var lastNode = null;
	    if (_modelList.length > 0 && _modelList[index - 1]) {
	      lastNode = _modelList[index - 1].node;
	    }
	
	    (function () {
	      var zorder = lastNode !== null ? lastNode.zorder : -1;
	      console.log('dialog remove to zorder: ' + zorder);
	    })();
	
	    //that.node.interactiveChildren = true;
	    for (var i = that.node.children.length - 1; i >= 0; --i) {
	      that.node.children[i].interactiveChildren = true;
	      if (that.node.children[i] === lastNode) {
	        break;
	      }
	    }
	  };
	
	  var _sortByZorder = function _sortByZorder(a, b) {
	    return a.node.zorder > b.node.zorder;
	  };
	
	  (0, _registry2.default)(that, ['destroy', 'update']);
	
	  return that;
	}; /**
	    * Created by wizard on 16/3/30.
	    */
	
	exports.default = BaseWorld;

/***/ },
/* 367 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _registry = __webpack_require__(342);
	
	var _registry2 = _interopRequireDefault(_registry);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var BaseLayer = function BaseLayer() {
	  var that = {};
	
	  that.node = new PIXI.Container();
	  that.node.zorder = 0;
	
	  that.owner = null;
	
	  that.init = function () {
	    return true;
	  };
	
	  that.destroy = function () {
	    that.destroyExecute();
	  };
	  that.update = function (dt) {
	    that.updateExecute(dt);
	  };
	
	  that.add2World = function (world) {
	    world.node.addChild(that.node);
	    that.owner = world;
	    world.updateRegister(that);
	    //world.destroyRegister(that);
	  };
	
	  that.removeFromWorld = function () {
	    that.owner.updateUnRegister(that);
	    that.owner.node.removeChild(that.node);
	    that.destroy();
	    that.owner = null;
	  };
	
	  (0, _registry2.default)(that, ['destroy', 'update']);
	
	  return that;
	}; /**
	    * Created by wizard on 16/3/30.
	    */
	
	exports.default = BaseLayer;

/***/ },
/* 368 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _inherited = __webpack_require__(350);
	
	var _inherited2 = _interopRequireDefault(_inherited);
	
	var _baseLayer = __webpack_require__(367);
	
	var _baseLayer2 = _interopRequireDefault(_baseLayer);
	
	var _director = __webpack_require__(341);
	
	var _director2 = _interopRequireDefault(_director);
	
	var _helper = __webpack_require__(338);
	
	var _helper2 = _interopRequireDefault(_helper);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by wizard on 16/3/31.
	 */
	
	var ModelLayer = function ModelLayer(blackArea) {
	  var that = (0, _inherited2.default)((0, _baseLayer2.default)());
	
	  var _blackBg = null;
	
	  if (blackArea) {
	    var x = void 0,
	        y = void 0,
	        width = void 0,
	        height = void 0;
	    var director = _director2.default.sharedDirector();
	    if (blackArea === true) {
	      x = 0;
	      y = 0;
	      width = director.width;
	      height = director.height;
	    } else {
	      x = blackArea.x;
	      y = blackArea.y;
	      width = blackArea.width;
	      height = blackArea.height;
	    }
	
	    // x -= director.screen.left;
	    // y -= director.screen.top;
	    x -= 0;
	    y -= 0;
	
	    _blackBg = new PIXI.Graphics();
	    _blackBg.lineStyle(2, 0x000000, 0.5);
	    _blackBg.beginFill(0x000000, 0.4);
	    _blackBg.drawRect(x, y, width, height * 1.2);
	    _blackBg.hitArea = new PIXI.Rectangle(x, y, _director2.default.sharedDirector().width, _director2.default.sharedDirector().height);
	
	    _blackBg.zorder = -1;
	    that.blackBg = _blackBg;
	    that.node.addChild(_blackBg);
	  }
	
	  that.inheritOn('init', function () {
	    _blackBg.interactive = true;
	    _blackBg.on('tap', that.onExit).on('click', that.onExit);
	  });
	
	  that.inheritOn('add2World', function (world) {
	    world.lock2Layer(that);
	    return true;
	  });
	
	  that.onExit = function () {
	    console.log('model layer on exit');
	  };
	
	  that.removeFromWorld = function () {
	    that.owner.unlock2Layer(that);
	    that.owner.updateUnRegister(that);
	    that.owner.node.removeChild(that.node);
	
	    that.destroy();
	    that.owner = null;
	  };
	
	  return that;
	};
	
	exports.default = ModelLayer;

/***/ },
/* 369 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by wizard on 16/5/28.
	 */
	var DelayEvent = function DelayEvent(obj) {
	
	  var registry = {};
	
	  var _delayList = [];
	  var _working = false;
	
	  obj.fire = function (event) {
	    if (!_working) {
	      _delayList.push(arguments);
	      return;
	    }
	
	    var handler = null;
	
	    if (registry.hasOwnProperty(event)) {
	      var event_list = registry[event];
	      for (var i = 0; i < event_list.length; ++i) {
	        handler = event_list[i];
	        var args = [];
	
	        //not including event
	        for (var n = 1; n < arguments.length; ++n) {
	          args.push(arguments[n]);
	        }
	        handler.apply(this, args);
	      }
	    }
	
	    return this;
	  };
	
	  obj.on = function (type, method) {
	    if (registry.hasOwnProperty(type)) {
	      registry[type].push(method);
	    } else {
	      registry[type] = [method];
	    }
	
	    return this;
	  };
	
	  obj.off = obj.removeListener = function (type, method) {
	    if (!registry.hasOwnProperty(type)) {
	      return false;
	    }
	    var index = registry[type].indexOf(method);
	    if (index >= 0) {
	      registry[type].splice(index, 1);
	    }
	  };
	
	  obj.removeAllListeners = function () {
	    registry = {};
	  };
	
	  obj.switchOn = function () {
	    console.log("switchOn");
	    _working = true;
	    for (var i = 0; i < _delayList.length; ++i) {
	
	      var params = _delayList[i];
	      var event = params[0];
	      var handler = null;
	
	      if (registry.hasOwnProperty(event)) {
	        var event_list = registry[event];
	        for (var _i = 0; _i < event_list.length; ++_i) {
	          handler = event_list[_i];
	          var args = [];
	
	          //not including event
	          for (var n = 1; n < params.length; ++n) {
	            args.push(params[n]);
	          }
	          handler.apply(undefined, args);
	        }
	      }
	    }
	  };
	
	  return obj;
	};
	
	exports.default = DelayEvent;

/***/ },
/* 370 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by chuhaoyuan on 2017/1/11.
	 */
	var Action = function Action() {
	  var that = {};
	  that.moveTo = function (node, position, time, easing) {
	    return new Promise(function (resolve, reject) {
	      var nowPosition = node.position;
	      var action = new TWEEN.Tween(nowPosition).to(position, time).onUpdate(function () {
	        node.position = {
	          x: this.x,
	          y: this.y
	        };
	      }).onComplete(function () {
	        resolve();
	      });
	      if (easing) {
	        action.easing(easing);
	      }
	      action.start();
	    });
	  };
	
	  that.alphaTo = function (node, alpha, time, easing) {
	    return new Promise(function (resolve, regect) {
	      var nowAlpha = node.alpha;
	      var action = new TWEEN.Tween({ alpha: nowAlpha }).to({ alpha: alpha }, time).onUpdate(function () {
	        node.alpha = this.alpha;
	      }).onComplete(function () {
	        resolve();
	      });
	      if (easing) {
	        action.easing(easing);
	      }
	      action.start();
	    });
	  };
	
	  that.scaleTo = function (node, scale, time, easing) {
	    return new Promise(function (resolve, regect) {
	      var nowScale = node.scale;
	      var action = new TWEEN.Tween(nowScale).to(scale, time).onUpdate(function () {
	        node.scale = {
	          x: this.x,
	          y: this.y
	        };
	      }).onComplete(function () {
	        resolve();
	      });
	      if (easing) {
	        action.easing(easing);
	      }
	      action();
	    });
	  };
	
	  return that;
	};
	exports.default = Action;

/***/ },
/* 371 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by guolei on 2017/4/19.
	 */
	/**
	 * The `Matter.Vector` module contains methods for creating and manipulating vectors.
	 * Vectors are the basis of all the geometry related operations in the engine.
	 * A `Matter.Vector` object is of the form `{ x: 0, y: 0 }`.
	 *
	 * See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
	 *
	 * @class Vector
	 */
	
	// TODO: consider params for reusing vector objects
	
	var Vector = {};
	(function () {
	
	  /**
	   * Creates a new vector.
	   * @method create
	   * @param {number} x
	   * @param {number} y
	   * @return {vector} A new vector
	   */
	  Vector.create = function (x, y) {
	    return { x: x || 0, y: y || 0 };
	  };
	
	  /**
	   * Returns a new vector with `x` and `y` copied from the given `vector`.
	   * @method clone
	   * @param {vector} vector
	   * @return {vector} A new cloned vector
	   */
	  Vector.clone = function (vector) {
	    return { x: vector.x, y: vector.y };
	  };
	
	  /**
	   * Returns the magnitude (length) of a vector.
	   * @method magnitude
	   * @param {vector} vector
	   * @return {number} The magnitude of the vector
	   */
	  Vector.magnitude = function (vector) {
	    return Math.sqrt(vector.x * vector.x + vector.y * vector.y);
	  };
	
	  /**
	   * Returns the magnitude (length) of a vector (therefore saving a `sqrt` operation).
	   * @method magnitudeSquared
	   * @param {vector} vector
	   * @return {number} The squared magnitude of the vector
	   */
	  Vector.magnitudeSquared = function (vector) {
	    return vector.x * vector.x + vector.y * vector.y;
	  };
	
	  /**
	   * Rotates the vector about (0, 0) by specified angle.
	   * @method rotate
	   * @param {vector} vector
	   * @param {number} angle
	   * @return {vector} A new vector rotated about (0, 0)
	   */
	  Vector.rotate = function (vector, angle) {
	    var cos = Math.cos(angle),
	        sin = Math.sin(angle);
	    return {
	      x: vector.x * cos - vector.y * sin,
	      y: vector.x * sin + vector.y * cos
	    };
	  };
	
	  /**
	   * Rotates the vector about a specified point by specified angle.
	   * @method rotateAbout
	   * @param {vector} vector
	   * @param {number} angle
	   * @param {vector} point
	   * @param {vector} [output]
	   * @return {vector} A new vector rotated about the point
	   */
	  Vector.rotateAbout = function (vector, angle, point, output) {
	    var cos = Math.cos(angle),
	        sin = Math.sin(angle);
	    if (!output) output = {};
	    var x = point.x + ((vector.x - point.x) * cos - (vector.y - point.y) * sin);
	    output.y = point.y + ((vector.x - point.x) * sin + (vector.y - point.y) * cos);
	    output.x = x;
	    return output;
	  };
	
	  /**
	   * Normalises a vector (such that its magnitude is `1`).
	   * @method normalise
	   * @param {vector} vector
	   * @return {vector} A new vector normalised
	   */
	  Vector.normalise = function (vector) {
	    var magnitude = Vector.magnitude(vector);
	    if (magnitude === 0) return { x: 0, y: 0 };
	    return { x: vector.x / magnitude, y: vector.y / magnitude };
	  };
	
	  /**
	   * Returns the dot-product of two vectors.
	   * @method dot
	   * @param {vector} vectorA
	   * @param {vector} vectorB
	   * @return {number} The dot product of the two vectors
	   */
	  Vector.dot = function (vectorA, vectorB) {
	    return vectorA.x * vectorB.x + vectorA.y * vectorB.y;
	  };
	
	  /**
	   * Returns the cross-product of two vectors.
	   * @method cross
	   * @param {vector} vectorA
	   * @param {vector} vectorB
	   * @return {number} The cross product of the two vectors
	   */
	  Vector.cross = function (vectorA, vectorB) {
	    return vectorA.x * vectorB.y - vectorA.y * vectorB.x;
	  };
	
	  /**
	   * Returns the cross-product of three vectors.
	   * @method cross3
	   * @param {vector} vectorA
	   * @param {vector} vectorB
	   * @param {vector} vectorC
	   * @return {number} The cross product of the three vectors
	   */
	  Vector.cross3 = function (vectorA, vectorB, vectorC) {
	    return (vectorB.x - vectorA.x) * (vectorC.y - vectorA.y) - (vectorB.y - vectorA.y) * (vectorC.x - vectorA.x);
	  };
	
	  /**
	   * Adds the two vectors.
	   * @method add
	   * @param {vector} vectorA
	   * @param {vector} vectorB
	   * @param {vector} [output]
	   * @return {vector} A new vector of vectorA and vectorB added
	   */
	  Vector.add = function (vectorA, vectorB, output) {
	    if (!output) output = {};
	    output.x = vectorA.x + vectorB.x;
	    output.y = vectorA.y + vectorB.y;
	    return output;
	  };
	
	  /**
	   * Subtracts the two vectors.
	   * @method sub
	   * @param {vector} vectorA
	   * @param {vector} vectorB
	   * @param {vector} [output]
	   * @return {vector} A new vector of vectorA and vectorB subtracted
	   */
	  Vector.sub = function (vectorA, vectorB, output) {
	    if (!output) output = {};
	    output.x = vectorA.x - vectorB.x;
	    output.y = vectorA.y - vectorB.y;
	    return output;
	  };
	
	  /**
	   * Multiplies a vector and a scalar.
	   * @method mult
	   * @param {vector} vector
	   * @param {number} scalar
	   * @return {vector} A new vector multiplied by scalar
	   */
	  Vector.mult = function (vector, scalar) {
	    return { x: vector.x * scalar, y: vector.y * scalar };
	  };
	
	  /**
	   * Divides a vector and a scalar.
	   * @method div
	   * @param {vector} vector
	   * @param {number} scalar
	   * @return {vector} A new vector divided by scalar
	   */
	  Vector.div = function (vector, scalar) {
	    return { x: vector.x / scalar, y: vector.y / scalar };
	  };
	
	  /**
	   * Returns the perpendicular vector. Set `negate` to true for the perpendicular in the opposite direction.
	   * @method perp
	   * @param {vector} vector
	   * @param {bool} [negate=false]
	   * @return {vector} The perpendicular vector
	   */
	  Vector.perp = function (vector, negate) {
	    negate = negate === true ? -1 : 1;
	    return { x: negate * -vector.y, y: negate * vector.x };
	  };
	
	  /**
	   * Negates both components of a vector such that it points in the opposite direction.
	   * @method neg
	   * @param {vector} vector
	   * @return {vector} The negated vector
	   */
	  Vector.neg = function (vector) {
	    return { x: -vector.x, y: -vector.y };
	  };
	
	  /**
	   * Returns the angle in radians between the two vectors relative to the x-axis.
	   * @method angle
	   * @param {vector} vectorA
	   * @param {vector} vectorB
	   * @return {number} The angle in radians
	   */
	  Vector.angle = function (vectorA, vectorB) {
	    return Math.atan2(Vector.cross(vectorA, vectorB), Vector.dot(vectorA, vectorB));
	  };
	
	  /**
	   * Temporary vector pool (not thread-safe).
	   * @property _temp
	   * @type {vector[]}
	   * @private
	   */
	  Vector._temp = [Vector.create(), Vector.create(), Vector.create(), Vector.create(), Vector.create(), Vector.create()];
	})();
	
	exports.default = Vector;

/***/ },
/* 372 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _gameDefines = __webpack_require__(373);
	
	var _gameDefines2 = _interopRequireDefault(_gameDefines);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var res = {
	  "background_3": "ui/background_3.png",
	  "bq04": "ui/bq04.png",
	  "bq05": "ui/bq05.png",
	  "direction_1": "ui/direction_1.png",
	  "direction_2": "ui/direction_2.png"
	};
	for (var i in res) {
	  res[i] = _gameDefines2.default.resPath + res[i];
	}
	exports.default = res;

/***/ },
/* 373 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by chuhaoyuan on 2017/8/14.
	 */
	var defines = {};
	defines.resPath = "./assets/";
	defines.fontList = [];
	defines.Canvas = {
	  width: 754,
	  height: 480
	};
	
	defines.direction = {
	  align: "align",
	  portrait: "portrait"
	};
	
	exports.default = defines;

/***/ },
/* 374 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _playerData = __webpack_require__(375);
	
	var _playerData2 = _interopRequireDefault(_playerData);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var global = {}; /**
	                  * Created by chuhaoyuan on 2017/8/14.
	                  */
	
	global.playerData = (0, _playerData2.default)();
	exports.default = global;

/***/ },
/* 375 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by chuhaoyuan on 2017/8/14.
	 */
	var PlayerData = function PlayerData() {
	  var that = {};
	  return that;
	};
	exports.default = PlayerData;

/***/ },
/* 376 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _imports = __webpack_require__(330);
	
	var _gameWorld = __webpack_require__(377);
	
	var _gameWorld2 = _interopRequireDefault(_gameWorld);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by chuhaoyuan on 2017/8/14.
	 */
	var GameController = function GameController() {
	  var that = {};
	
	  that.enterGameWorld = function () {
	    //进入游戏界面
	    var gameWorld = (0, _gameWorld2.default)();
	    gameWorld.init();
	    _imports.Director.sharedDirector().replaceWorld(gameWorld);
	  };
	
	  return that;
	};
	var gameController = GameController();
	exports.default = gameController;

/***/ },
/* 377 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _imports = __webpack_require__(330);
	
	var _global = __webpack_require__(374);
	
	var _global2 = _interopRequireDefault(_global);
	
	var _gameLayer2 = __webpack_require__(378);
	
	var _gameLayer3 = _interopRequireDefault(_gameLayer2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var GameWorld = function GameWorld() {
	  var that = (0, _imports.Inherited)((0, _imports.BaseWorld)());
	  that.inheritOn("init", function () {
	    return true;
	  });
	
	  _global2.default.socket = io("localhost:3000");
	
	  var _gameLayer = (0, _gameLayer3.default)();
	  _gameLayer.init(_gameLayer);
	  _gameLayer.add2World(that);
	
	  _global2.default.socket.on("sync_data", function (data) {
	    console.log("同步消息" + JSON.stringify(data));
	    _global2.default.playerData.uid = data.uid;
	    console.log("global player data = " + _global2.default.playerData.uid);
	    _gameLayer.syncData(data.data);
	  });
	  _global2.default.socket.on("create_player", function (data) {
	    _gameLayer.addPlayer(data);
	  });
	  _global2.default.socket.on("update_position_info", function (data) {
	    _gameLayer.updatePositionInfo(data);
	  });
	
	  that.inheritOn('destroy', function () {
	    //
	  });
	
	  return that;
	}; /**
	    * Created by chuhaoyuan on 2017/8/14.
	    */
	exports.default = GameWorld;

/***/ },
/* 378 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _imports = __webpack_require__(330);
	
	var _mapLayer2 = __webpack_require__(379);
	
	var _mapLayer3 = _interopRequireDefault(_mapLayer2);
	
	var _playerNode = __webpack_require__(380);
	
	var _playerNode2 = _interopRequireDefault(_playerNode);
	
	var _joyStrick2 = __webpack_require__(381);
	
	var _joyStrick3 = _interopRequireDefault(_joyStrick2);
	
	var _global = __webpack_require__(374);
	
	var _global2 = _interopRequireDefault(_global);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var GameLayer = function GameLayer() {
	  var that = (0, _imports.Inherited)((0, _imports.BaseLayer)());
	  that.inheritOn('init', function () {
	    return true;
	  });
	  var _event = (0, _imports.Eventuality)({});
	  var _playerList = [];
	  var _mapLayer = (0, _mapLayer3.default)({ event: _event });
	  var _sendDirectionTime = 0;
	  _mapLayer.init();
	  that.node.addChild(_mapLayer.node);
	
	  var _joyStrick = (0, _joyStrick3.default)();
	  _joyStrick.node.position = {
	    x: _imports.Director.sharedDirector().width - 100,
	    y: _imports.Director.sharedDirector().height - 100
	  };
	  _joyStrick.init();
	  that.node.addChild(_joyStrick.node);
	
	  that.syncData = function (data) {
	    //同步数据
	    for (var i = 0; i < data.length; i++) {
	      createPlayer(data[i]);
	    }
	  };
	
	  var createPlayer = function createPlayer(data) {
	    data.event = _event;
	    var player = (0, _playerNode2.default)(data);
	    player.init();
	    _mapLayer.node.addChild(player.node);
	    _playerList.push(player);
	  };
	
	  that.inheritOn('update', function (dt) {
	    for (var i in _playerList) {
	      _playerList[i].update(dt);
	    }
	    if (_sendDirectionTime > dt * 10) {
	      // console.log("发送 方向 的 时间");
	      _sendDirectionTime = 0;
	
	      if (_joyStrick.getDirection().x !== 0 || _joyStrick.getDirection().y !== 0) {
	        _global2.default.socket.emit("direction", _joyStrick.getDirection());
	      }
	    } else {
	      _sendDirectionTime += dt;
	    }
	  });
	
	  that.addPlayer = function (data) {
	    createPlayer(data);
	  };
	
	  that.updatePositionInfo = function (data) {
	    //更新玩家的位置信息
	    // console.log("update position info = " + JSON.stringify(data));
	    _event.fire("update_position_info", data);
	  };
	
	  return that;
	}; /**
	    * Created by chuhaoyuan on 2017/8/14.
	    */
	exports.default = GameLayer;

/***/ },
/* 379 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _imports = __webpack_require__(330);
	
	var MapLayer = function MapLayer(spec) {
	  var that = (0, _imports.Inherited)((0, _imports.BaseLayer)());
	
	  var _event = spec.event;
	  _event.on("update_player_position", function (position) {
	    // console.log("更新地图位置");
	    that.node.position = {
	      x: _imports.Director.sharedDirector().width * 0.5 - position.x,
	      y: _imports.Director.sharedDirector().height * 0.5 - position.y
	    };
	  });
	  return that;
	}; /**
	    * Created by chuhaoyuan on 2017/8/14.
	    */
	exports.default = MapLayer;

/***/ },
/* 380 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _imports = __webpack_require__(330);
	
	var _global = __webpack_require__(374);
	
	var _global2 = _interopRequireDefault(_global);
	
	var _resources = __webpack_require__(372);
	
	var _resources2 = _interopRequireDefault(_resources);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var PlayerNode = function PlayerNode(spec) {
	  console.log("spec = " + JSON.stringify(spec));
	  var that = (0, _imports.Inherited)((0, _imports.BaseLayer)());
	  var _uid = spec.uid;
	  console.log("uid = " + _uid);
	  console.log("player uid = " + _global2.default.playerData.uid);
	  var _event = spec.event;
	  var imageStr = "";
	  if (_global2.default.playerData.uid === spec.uid) {
	    imageStr = _resources2.default.bq04;
	  } else {
	    imageStr = _resources2.default.bq05;
	  };
	  var _head = PIXI.Sprite.fromImage(imageStr);
	  that.node.addChild(_head);
	  _head.position = spec.position;
	  _head.anchor.set(0.5);
	
	  that.inheritOn("init", function () {
	    return true;
	  });
	
	  that.update = function (dt) {
	    if (_uid === _global2.default.playerData.uid) {
	      // console.log("更新地图位置");
	      _event.fire("update_player_position", _head.position);
	    }
	  };
	
	  var updatePositionInfo = function updatePositionInfo(data) {
	    var time = data.time;
	    var list = data.data;
	    for (var i = 0; i < list.length; i++) {
	      var playerData = list[i];
	      if (playerData.uid === _uid) {
	        // console.log("更新位置" + JSON.stringify(_head.position));
	        // _head.position = playerData.position;
	      }
	    }
	  };
	
	  _event.on("update_position_info", updatePositionInfo);
	
	  return that;
	}; /**
	    * Created by chuhaoyuan on 2017/8/14.
	    */
	exports.default = PlayerNode;

/***/ },
/* 381 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _imports = __webpack_require__(330);
	
	var _resources = __webpack_require__(372);
	
	var _resources2 = _interopRequireDefault(_resources);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by chuhaoyuan on 2017/8/15.
	 */
	var JoyStrick = function JoyStrick() {
	  var that = (0, _imports.Inherited)((0, _imports.BaseLayer)());
	  var _direction = {
	    x: 0,
	    y: 0
	  };
	  that.inheritOn('init', function () {
	    return true;
	  });
	  that.update = function (dt) {};
	
	  var _bg = PIXI.Sprite.fromImage(_resources2.default.direction_1);
	  that.node.addChild(_bg);
	  _bg.anchor.set(0.5);
	  _bg.scale = {
	    x: 2,
	    y: 2
	  };
	  _bg.alpha = 0;
	  _bg.interactive = true;
	
	  var _joyStrickBg = PIXI.Sprite.fromImage(_resources2.default.direction_1);
	  that.node.addChild(_joyStrickBg);
	  _joyStrickBg.anchor.set(0.5);
	  var _joyStrick = PIXI.Sprite.fromImage(_resources2.default.direction_2);
	  that.node.addChild(_joyStrick);
	  _joyStrick.anchor.set(0.5);
	
	  var touchBegan = function touchBegan(event) {
	    moveToCurrentPos(event.data.getLocalPosition(that.node));
	  };
	  var touchMove = function touchMove(event) {
	    moveToCurrentPos(event.data.getLocalPosition(that.node));
	  };
	  var touchEnd = function touchEnd(event) {
	    moveToCurrentPos(_joyStrickBg.position);
	  };
	
	  var moveToCurrentPos = function moveToCurrentPos(pos) {
	    // _joyStrick.position = pos;
	    var touchPos = (0, _imports.Vec2)(pos.x, pos.y);
	    var bgPos = (0, _imports.Vec2)(_joyStrickBg.position.x, _joyStrickBg.position.y);
	    if (touchPos.getDistance(bgPos) > _joyStrickBg.width * 0.5) {
	      _joyStrick.position = touchPos.sub(bgPos).getNormal().multValue(_joyStrickBg.width * 0.5);
	    } else {
	      _joyStrick.position = pos;
	    }
	    _direction = touchPos.sub(bgPos).getNormal();
	  };
	
	  _bg.on('pointerdown', touchBegan).on('pointerup', touchEnd).on('pointerupoutside', touchEnd).on('pointermove', touchMove);
	
	  that.getDirection = function () {
	
	    return _direction;
	  };
	
	  return that;
	};
	exports.default = JoyStrick;

/***/ }
/******/ ]);
//# sourceMappingURL=snake.all.js.map