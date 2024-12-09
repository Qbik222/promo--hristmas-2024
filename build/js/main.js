"use strict";

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
(function () {
  var apiURL = 'https://fav-prom.com/api_wheel_2025';
  var unauthMsgs = document.querySelectorAll('.unauth-msg'),
    participateBtns = document.querySelectorAll('.btn-join'),
    mainPage = document.querySelector('.fav-page'),
    ballWrap = document.querySelector(".ball"),
    guideWrap = document.querySelector(".guide"),
    gameWrap = document.querySelector(".games");
  var ukLeng = document.querySelector('#ukLeng');
  var enLeng = document.querySelector('#enLeng');
  var locale = sessionStorage.getItem('locale') || 'en',
    week = 1;
  console.log(week);
  function setState(newLocale) {
    locale = newLocale;
    sessionStorage.setItem('locale', locale);
  }
  function toggleState() {
    var newLocale = locale === 'en' ? 'uk' : 'en';
    setState(newLocale);
    window.location.reload();
  }
  document.querySelector('.en-btn').addEventListener('click', function () {
    toggleState();
  });
  document.querySelector('.week-btn').addEventListener('click', function () {
    console.log(week);
    if (week === 1) {
      document.querySelector('._week1').style.display = "flex";
      document.querySelector('._week2').style.display = "none";
      return week = 2;
    }
    if (week === 2) {
      document.querySelector('._week2').style.display = "flex";
      document.querySelector('._week1').style.display = "none";
      week = 1;
    }
  });
  if (ukLeng) locale = 'uk';
  if (enLeng) locale = 'en';
  var i18nData = {};
  var debug = true;
  var userId;
  userId = Number(sessionStorage.getItem("userId"));
  console.log(_typeof(userId));
  document.querySelector(".lock-btn").addEventListener("click", function () {
    userId ? sessionStorage.removeItem("userId") : sessionStorage.setItem("userId", '101234861');
    window.location.reload();
  });

  // userId = 9999;

  if (week === 1) {
    document.querySelector('._week1').style.display = "flex";
  }
  if (week === 2) {
    document.querySelector('._week2').style.display = "flex";
  }
  function loadTranslations() {
    return fetch("".concat(apiURL, "/translates/").concat(locale)).then(function (res) {
      return res.json();
    }).then(function (json) {
      i18nData = json;
      translate();
      var mutationObserver = new MutationObserver(function (mutations) {
        translate();
      });
      mutationObserver.observe(document.getElementById('ball'), {
        childList: true,
        subtree: true
      });
    });
  }
  function translate() {
    var elems = document.querySelectorAll('[data-translate]');
    if (elems && elems.length) {
      elems.forEach(function (elem) {
        var key = elem.getAttribute('data-translate');
        elem.innerHTML = i18nData[key] || '*----NEED TO BE TRANSLATED----*   key:  ' + key;
        elem.removeAttribute('data-translate');
      });
      // console.log("translate working")
    }

    if (locale === 'en') {
      mainPage.classList.add('en');
    }
    refreshLocalizedClass();
  }
  loadTranslations().then(init);
  function refreshLocalizedClass(element, baseCssClass) {
    if (!element) {
      return;
    }
    for (var _i = 0, _arr = ['hr', 'en']; _i < _arr.length; _i++) {
      var lang = _arr[_i];
      element.classList.remove(baseCssClass + lang);
    }
    element.classList.add(baseCssClass + locale);
  }
  function init() {
    if (window.store) {
      var state = window.store.getState();
      userId = state.auth.isAuthorized && state.auth.id || '';
      setupPage();
    } else {
      setupPage();
      var c = 0;
      var i = setInterval(function () {
        if (c < 50) {
          if (!!window.g_user_id) {
            userId = window.g_user_id;
            setupPage();
            checkUserAuth();
            clearInterval(i);
          }
        } else {
          clearInterval(i);
        }
      }, 200);
    }
    checkUserAuth();
    participateBtns.forEach(function (authBtn, i) {
      authBtn.addEventListener('click', function (e) {
        e.preventDefault();
        participate();
      });
    });
  }
  function setupPage() {}
  function participate() {
    if (!userId) {
      return;
    }
    var params = {
      userid: userId
    };
    request('/user', {
      method: 'POST',
      body: JSON.stringify(params)
    }).then(function (res) {
      participateBtns.forEach(function (item) {
        return item.classList.add('hide');
      });
      ballWrap.classList.remove('_sign');
      setupPage();
    });
  }
  var request = function request(link, extraOptions) {
    return fetch(apiURL + link, _objectSpread({
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }, extraOptions || {})).then(function (res) {
      return res.json();
    });
  };
  function checkUserAuth() {
    console.log(userId);
    if (userId) {
      var _iterator = _createForOfIteratorHelper(unauthMsgs),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var unauthMes = _step.value;
          unauthMes.classList.add('hide');
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      request("/favuser/".concat(userId, "?nocache=1")).then(function (res) {
        console.log(res);
        if (res.userid) {
          participateBtns.forEach(function (item) {
            return item.classList.add('hide');
          });
          ballWrap.classList.remove('_sign');
          guideWrap.classList.remove('_sign');
          gameWrap.classList.remove('_sign');
          document.querySelector(".banner__btn").classList.remove("hide");
          document.querySelector(".progress").classList.remove("_sign");
          if (debug) {
            res.pointsPerDay = 30;
            res.spinAllowed = true;
            res.spinsStreak = 3;
            res.spins = [];
          }
          // refreshUserInfo(res);
          // console.log(res.spins)
          displayUserSpins(res.spins);
        } else {
          document.querySelector(".banner__btn").classList.add("hide");
          participateBtns.forEach(function (item) {
            return item.classList.remove('hide');
          });
        }
      });
    } else {
      document.querySelector(".banner__btn").classList.add("hide");
      var _iterator2 = _createForOfIteratorHelper(participateBtns),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var participateBtn = _step2.value;
          participateBtn.classList.add('hide');
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      var _iterator3 = _createForOfIteratorHelper(unauthMsgs),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _unauthMes = _step3.value;
          _unauthMes.classList.remove('hide');
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  }
  function translateKey(key) {
    if (!key) {
      return;
    }
    return i18nData[key] || '*----NEED TO BE TRANSLATED----*   key:  ' + key;
  }
  function displayUserSpins(spins) {
    var spinItem = document.querySelector('.spins-row');
    var noSpinItem = document.querySelector('.no-spins');
    if (!spins || spins.length === 0) {
      spinItem.classList.add('hide');
      noSpinItem.classList.remove('hide');
      console.log(spins);
      return;
    }

    // const spinsContainer = document.querySelector('.spins-row');
    spinItem.innerHTML = '';
    spinItem.classList.remove('hide');
    noSpinItem.classList.add('hide');
    console.log(noSpinItem);
    spins.forEach(function (spin) {
      var spinDate = new Date(spin.date);
      var formattedDate = spinDate.toLocaleDateString('hr-HR');
      var spinName = translateKey(spin.name) || '';
      var spinElement = document.createElement('div');
      spinElement.classList.add('spins-row-item');
      spinElement.innerHTML = "\n            <span class=\"content-date\">".concat(formattedDate, "</span>\n            <span class=\"content-prize\">").concat(spinName, "</span>\n        ");
      spinItem.appendChild(spinElement);
    });
  }

  // Cards slider
  var cardsContainer = document.querySelector('.prize__list'),
    cards = document.querySelectorAll('.prize__list-item'),
    cardsWrap = document.querySelector('.prize__list-scroll'),
    moveRightButton = document.querySelector('.prize__slider-move-right'),
    moveLeftButton = document.querySelector('.prize__slider-move-left'),
    tabsContainer = document.querySelector('.prize__tabs'),
    isMobile = window.innerWidth < 600,
    totalCards = cards.length,
    cardWidth = cards[0].clientWidth,
    cardsMargin = (cardsWrap.clientWidth - cardWidth * totalCards) / (totalCards - 1),
    visibleSlides = isMobile ? 1 : Math.ceil(cardsContainer.clientWidth / (cardWidth + cardsMargin)),
    totalTabs = Math.ceil(totalCards / visibleSlides),
    tabWidth = visibleSlides * (cardWidth + cardsMargin);
  var currentSlide = 1,
    cardsPosition = 0,
    leftSlide,
    rightSlide;
  var updateActiveCard = function updateActiveCard(cards, activeIndex) {
    cards.forEach(function (card, i) {
      activeIndex - 1 === i ? card.classList.add("_active") : card.classList.remove("_active");
    });
  };
  updateActiveCard(cards, currentSlide);
  function leftSlideTab() {
    leftSlide = currentSlide;
  }
  function rightSlideTab() {
    rightSlide = currentSlide + (visibleSlides - 1);
  }
  function firstLastSlides() {
    if (isMobile) return;
    leftSlideTab();
    rightSlideTab();
    cards.forEach(function (card, i) {
      i + 1 === leftSlide ? card.classList.add("_left") : card.classList.remove("_left");
      i + 1 === rightSlide ? card.classList.add("_right") : card.classList.remove("_right");
    });
  }
  firstLastSlides();
  function setCardsPosition(position) {
    cardsWrap.style.transform = "translateX(-".concat(position, "px)");
  }
  ;
  var moveRight = function moveRight() {
    if (currentSlide >= totalCards - (visibleSlides - 1) && isMobile === false) {
      firstLastSlides();
      currentSlide = 1;
      cardsPosition = 0;
      rightSlide++;
      leftSlide++;
    } else if (currentSlide === totalCards) {
      console.log(currentSlide);
      currentSlide = 1;
      cardsPosition = 0;
    } else if (currentSlide === totalCards - (visibleSlides + 1) && isMobile === true) {
      currentSlide = totalCards;
      cardsPosition = cardsWrap.clientWidth - (window.innerWidth - cardsMargin / 2);
      console.log(cardsPosition);
    } else {
      var maxPosition = (totalCards - visibleSlides) * (cardWidth + cardsMargin);
      if (cardsPosition + cardWidth + cardsMargin > maxPosition) {
        cardsPosition = maxPosition;
        currentSlide = totalCards - visibleSlides + 1;
      } else {
        cardsPosition += cardWidth + cardsMargin;
        currentSlide++;
      }
    }
    setCardsPosition(cardsPosition);
    updateActiveCard(cards, currentSlide);
    firstLastSlides();
    hidePopupsOnBtn(prizePopupItem);
    // centerPopup(".prize__list-popup")
  };

  var moveLeft = function moveLeft() {
    if (currentSlide === 1 && isMobile === false) {
      currentSlide = totalCards - (visibleSlides - 1);
      cardsPosition = (totalCards - (visibleSlides - 1)) * (cardWidth + cardsMargin) - (cardWidth + cardsMargin);
    } else if (currentSlide === 2) {
      cardsPosition = 0;
      currentSlide = 1;
    } else if (currentSlide === 1 && isMobile === true) {
      currentSlide = totalCards;
      cardsPosition = cardsWrap.clientWidth - (window.innerWidth - cardsMargin / 2);
    } else {
      cardsPosition -= cardWidth + cardsMargin;
      currentSlide--;
    }
    setCardsPosition(cardsPosition);
    updateActiveCard(cards, currentSlide);
    firstLastSlides();
    hidePopupsOnBtn(prizePopupItem);
    // centerPopup(".prize__list-popup")
  };

  // centerPopup(".prize__list-popup")

  // popups logic

  function setPopups(popups, popupsBtns) {
    popupsBtns.forEach(function (btn, i) {
      btn.addEventListener("click", function (e) {
        popups.forEach(function (popup, j) {
          i === j ? popup.classList.add("_popup") : popup.classList.remove("_popup");
        });
      });
    });
  }
  function hidePopupsOnBtn(popups) {
    popups.forEach(function (popup) {
      popup.classList.remove("_popup");
    });
  }

  // popups
  var prizeOpenBtns = document.querySelectorAll(".prize__list-item-btn"),
    prizeCloseBtns = document.querySelectorAll(".prize__list-popup-close"),
    guidePopupsWrap = document.querySelectorAll(".guide__item"),
    guideOpenBtns = document.querySelectorAll(".guide__item-info-btn"),
    guideCloseBtns = document.querySelectorAll(".guide__item-popup-close"),
    tablePopup = document.querySelector(".table__popup"),
    tablePopupClose = document.querySelector(".table__popup-close"),
    tablePopupOpen = document.querySelector(".table__info"),
    ballPopup = document.querySelector(".progress__popup"),
    ballPopupClose = document.querySelector(".progress__popup-close"),
    ballPopupOpen = document.querySelector(".progress__popup-btn"),
    prizePopupItem = document.querySelectorAll(".prize__container-item");
  document.addEventListener("click", function (e) {
    //  prizePopupItem.forEach(card =>{
    //         if(e.target !== card){
    //             prizeOpenBtns.forEach(btn =>{
    //                 if(e.target !== btn && e.target !== card){
    //                     console.log(e.target )
    //                     // card.classList.remove("_popup")
    //                 }
    //             })
    //         }
    // })
    guidePopupsWrap.forEach(function (popup) {
      if (!popup.contains(e.target)) {
        popup.classList.remove("_popup");
      }
    });
    if (!ballPopup.contains(e.target) && e.target !== ballPopupOpen) {
      ballPopup.classList.add("hide");
    }
  });
  setPopups(prizePopupItem, prizeOpenBtns);
  setPopups(guidePopupsWrap, guideOpenBtns);
  guideCloseBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      hidePopupsOnBtn(guidePopupsWrap);
    });
  });
  prizeCloseBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      hidePopupsOnBtn(prizePopupItem);
    });
  });
  tablePopupOpen.addEventListener("click", function () {
    tablePopup.classList.remove("hide");
    document.body.style.overflow = "hidden";
  });
  tablePopupClose.addEventListener("click", function () {
    tablePopup.classList.add("hide");
    document.body.style.overflow = "auto";
  });
  ballPopupOpen.addEventListener("click", function () {
    ballPopup.classList.remove("hide");
  });
  ballPopupClose.addEventListener("click", function () {
    ballPopup.classList.add("hide");
  });
  window.addEventListener("DOMContentLoaded", function () {
    (function () {
      var COUNT = 400;
      function Snowstorm(element) {
        this.masthead = element;
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.width = this.masthead.clientWidth;
        this.height = this.masthead.clientHeight;
        this.active = false;
        this.snowflakes = [];
        this.init();
      }
      Snowstorm.prototype.init = function () {
        this.canvas.style.position = 'absolute';
        this.canvas.style.left = this.canvas.style.top = '0';
        this.masthead.appendChild(this.canvas);
        this.onResize();
        window.addEventListener('resize', this.onResize.bind(this), false);
        for (var i = 0; i < COUNT; i++) {
          var snowflake = new this.Snowflake(this);
          snowflake.reset();
          this.snowflakes.push(snowflake);
        }
        if (this.active) {
          requestAnimFrame(this.update.bind(this));
        }
      };
      Snowstorm.prototype.onResize = function () {
        this.width = this.masthead.clientWidth;
        this.height = this.masthead.clientHeight;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.ctx.fillStyle = '#FFF';
        var wasActive = this.active;
        this.active = this.width > 80;
        this.width > 280 ? COUNT = 150 : null;
        if (!wasActive && this.active) {
          requestAnimFrame(this.update.bind(this));
        }
      };
      Snowstorm.prototype.update = function () {
        this.ctx.clearRect(0, 0, this.width, this.height);
        if (!this.active) {
          return;
        }
        for (var i = 0; i < COUNT; i++) {
          var snowflake = this.snowflakes[i];
          snowflake.y += snowflake.vy;
          snowflake.x += snowflake.vx;
          this.ctx.globalAlpha = snowflake.o;
          this.ctx.beginPath();
          this.ctx.arc(snowflake.x, snowflake.y, snowflake.r, 0, Math.PI * 2, false);
          this.ctx.closePath();
          this.ctx.fill();
          if (snowflake.y > this.height) {
            snowflake.reset();
          }
        }
        requestAnimFrame(this.update.bind(this));
      };
      Snowstorm.prototype.Snowflake = function (snowstorm) {
        this.snowstorm = snowstorm;
        this.reset();
      };
      Snowstorm.prototype.Snowflake.prototype.reset = function () {
        this.x = Math.random() * this.snowstorm.width;
        this.y = Math.random() * -this.snowstorm.height;
        this.vy = 0.3 + Math.random() * 0.00001;
        this.vx = 0.6 - Math.random();
        this.r = 1 + Math.random() * 2;
        this.o = 1;
      };
      window.requestAnimFrame = function () {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
          window.setTimeout(callback, 1000 / 60);
        };
      }();
      var skies = document.querySelectorAll('.sky');
      skies.forEach(function (sky) {
        new Snowstorm(sky);
      });

      // ball shake snow
      var canvas = document.querySelector('.snowCanvas');
      var ctx = canvas.getContext('2d');
      var ball = document.querySelector('.sphere');
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
      var snowflakes = [];
      var maxSnowflakes = 100;
      var maxSpeed = 7;
      var stormCounter = 1;
      var snowflakesRemoved = 0;
      var Snowflake = /*#__PURE__*/function () {
        function Snowflake() {
          _classCallCheck(this, Snowflake);
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
          this.radius = Math.random() * 3 + 1;
          this.speedX = (Math.random() - 0.5) * 10;
          this.speedY = Math.random() * 1.5 + 1;
          this.acceleration = 0;
          this.movingToBottom = false;
        }
        _createClass(Snowflake, [{
          key: "update",
          value: function update(ballX, ballY, ballRadius, ballShaking) {
            if (this.movingToBottom) {
              var targetSpeed = 0.1;
              var speedDecayFactor = 0.05; // Коефіцієнт для плавного сповільнення

              this.speedX = this.speedX - (this.speedX - targetSpeed) * speedDecayFactor;
              this.speedY = this.speedY - (this.speedY - targetSpeed) * speedDecayFactor;

              // Оновлення позиції сніжинки
              this.y += this.speedY;
              if (this.y > canvas.height) {
                this.remove();
              }
              return;
            }
            this.x += this.speedX;
            this.y += this.speedY;

            // Обмеження швидкості
            this.speedX = Math.max(-maxSpeed, Math.min(maxSpeed, this.speedX));
            this.speedY = Math.max(-maxSpeed, Math.min(maxSpeed, this.speedY));

            // Додавання швидкості через "трусіння" кулі
            if (ballShaking) {
              this.acceleration += 0.05;
            } else {
              this.acceleration *= 0.95;
            }
            this.speedX += this.acceleration * (Math.random() - 0.5);
            this.speedY += this.acceleration * (Math.random() - 0.5);
            if (this.y > canvas.height) {
              this.y = 0;
              this.x = Math.random() * canvas.width;
            }
            if (this.x > canvas.width) {
              this.x = 0;
            } else if (this.x < 0) {
              this.x = canvas.width;
            }

            // Відстань до центру кулі
            var dx = this.x - ballX;
            var dy = this.y - ballY;
            var distance = Math.sqrt(dx * dx + dy * dy);

            // Відскок від кулі
            if (distance < ballRadius + this.radius) {
              var angle = Math.atan2(dy, dx); // Кут зіткнення
              var overlap = ballRadius + this.radius - distance;

              // Переміщення сніжинки
              this.x += Math.cos(angle) * overlap;
              this.y += Math.sin(angle) * overlap;

              // Реверс швидкості
              this.speedX *= -0.7;
              this.speedY *= -0.7;
            }
          }
        }, {
          key: "moveToBottom",
          value: function moveToBottom() {
            this.movingToBottom = true;
          }
        }, {
          key: "remove",
          value: function remove() {
            snowflakes.splice(snowflakes.indexOf(this), 1);
            snowflakesRemoved++;
            if (stormCounter === 1) {
              new Snowstorm(document.querySelector(".sphere__body"));
              stormCounter++;
            }
          }
        }, {
          key: "draw",
          value: function draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = 'white';
            ctx.fill();
            ctx.closePath();
          }
        }]);
        return Snowflake;
      }();
      var lastBallShakingState = false;
      for (var _i2 = 0; _i2 < maxSnowflakes; _i2++) {
        snowflakes.push(new Snowflake());
      }
      function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        var ballTransform = window.getComputedStyle(ball).transform;
        var ballX = canvas.width / 2;
        var ballY = canvas.height / 2;
        var ballRadius = ball.offsetWidth / 2;
        var ballShaking = ballTransform !== 'none';
        if (ballTransform !== 'none') {
          var matrix = new DOMMatrix(ballTransform);
          ballX = ball.offsetLeft + matrix.m41 + ballRadius;
          ballY = ball.offsetTop + matrix.m42 + ballRadius;
        }
        if (ballShaking && !lastBallShakingState) {
          snowflakes = [];
          snowflakesRemoved = 0;
          for (var _i3 = 0; _i3 < maxSnowflakes; _i3++) {
            snowflakes.push(new Snowflake());
          }
        }
        lastBallShakingState = ballShaking;
        snowflakes.forEach(function (snowflake) {
          if (!ballShaking) snowflake.moveToBottom();
          snowflake.update(ballX, ballY, ballRadius, ballShaking);
          snowflake.draw();
        });
        requestAnimationFrame(animate);
      }
      animate();
    })();
  });

  // snowfall animatio

  var i = 1;
  function sendShakeRequest() {
    if (!userId) {
      return;
    }
    if (debug) {
      return Promise.resolve({
        // number: i++,
        type: 'test'
      });
    }
    var params = {
      userid: userId
    };
    return request('/spin', {
      method: 'POST',
      body: JSON.stringify(params)
    });
  }
  var btnShake = document.querySelector(".progress__shake"),
    ball = document.querySelector(".sphere"),
    ballBox = document.querySelector(".sphere__box");
  var currentPrize;
  var pastPrize;

  // Кожен клас відповідає виграному призу:
  // "_iphone" - виграно iPhone
  // "_tv" - виграно телевізор
  // "_jbl" - виграно JBL-колонку
  // "_megogo" - виграно підписку Megogo
  // "_respin" - додаткове обертання
  // "_nothing" - нічого не виграно
  // "_points50" - виграно 50 бонусних балів
  // "_fs10" - виграно 10 фріспінів
  // "_fs25" - виграно 25 фріспінів
  // "_fs50" - виграно 50 фріспінів
  // "_saveBet100" - виграно страховку на 100 ставок
  // "_saveBet150" - виграно страховку на 150 ставок
  // "_saveBet200" - виграно страховку на 200 ставок
  // функція initShake прокидує класи відповідні призам на блок .sphere для відображення призу
  var winClasses = ["_iphone", "_tv", "_jbl", "_megogo", "_respin", "_nothing", "_fs10", "_fs25", "_fs50", "_saveBet100", "_saveBet150", "_saveBet200", "_points50"];
  function removePrize(ball, box, btn) {
    ball.classList.remove("_before-hide");
    winClasses.forEach(function (item) {
      ball.classList.remove("".concat(item));
    });
    box.classList.remove("_box-opacity");
    btn.classList.remove("_disabled");
  }
  function animateShake(_x, _x2, _x3, _x4, _x5) {
    return _animateShake.apply(this, arguments);
  }
  function _animateShake() {
    _animateShake = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(ball, box, btn, prize, prizeNum) {
      var delay;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            delay = function delay(ms) {
              return new Promise(function (resolve) {
                return setTimeout(resolve, ms);
              });
            };
            removePrize(ball, box, btn);
            if (!prizeNum) {
              _context.next = 18;
              break;
            }
            console.log(prizeNum);
            btn.classList.add("_disabled");
            ball.classList.add("_shake");
            box.classList.add("_shake-reverse");
            _context.next = 9;
            return delay(2000);
          case 9:
            ball.classList.remove("_shake");
            ball.classList.add("_before-hide");
            box.classList.remove("_shake-reverse");
            box.classList.add("_box-opacity");
            _context.next = 15;
            return delay(200);
          case 15:
            ball.classList.add("".concat(prize));
            _context.next = 29;
            break;
          case 18:
            btn.classList.add("_disabled");
            ball.classList.add("_shake");
            box.classList.add("_shake-reverse");

            // await delay(2000)

            ball.classList.remove("_shake");
            ball.classList.add("_before-hide");
            box.classList.remove("_shake-reverse");
            box.classList.add("_box-opacity");
            if (!(prizeNum === 0)) {
              _context.next = 28;
              break;
            }
            _context.next = 28;
            return delay(200);
          case 28:
            ball.classList.add("".concat(prize));
          case 29:
            return _context.abrupt("return", pastPrize = prize);
          case 30:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _animateShake.apply(this, arguments);
  }
  sessionStorage.setItem("prizeNum", 0);
  var prizeState = winClasses[sessionStorage.getItem("prizeNum")];
  var btnPrize1 = document.querySelector('.prize1');
  var btnPrize2 = document.querySelector('.prize2');
  var btnPrize3 = document.querySelector('.prize3');
  var btnPrize4 = document.querySelector('.prize4');
  var btnPrize5 = document.querySelector('.prize5');
  var btnPrize6 = document.querySelector('.prize6');
  var btnPrize7 = document.querySelector('.prize7');
  var btnPrize8 = document.querySelector('.prize8');
  var btnPrize9 = document.querySelector('.prize9');
  var btnPrize10 = document.querySelector('.prize10');
  var btnPrize11 = document.querySelector('.prize11');
  var btnPrize12 = document.querySelector('.prize12');
  var btnPrize13 = document.querySelector('.prize13');
  function setPrizeNum(btn, num) {
    btn.addEventListener("click", function (e) {
      sessionStorage.setItem("prizeNum", num);
      prizeState = winClasses[sessionStorage.getItem("prizeNum")];
    });
  }
  setPrizeNum(btnPrize1, 0);
  setPrizeNum(btnPrize2, 1);
  setPrizeNum(btnPrize3, 2);
  setPrizeNum(btnPrize4, 3);
  setPrizeNum(btnPrize5, 4);
  setPrizeNum(btnPrize6, 5);
  setPrizeNum(btnPrize7, 6);
  setPrizeNum(btnPrize8, 7);
  setPrizeNum(btnPrize9, 8);
  setPrizeNum(btnPrize10, 9);
  setPrizeNum(btnPrize11, 10);
  setPrizeNum(btnPrize12, 11);
  setPrizeNum(btnPrize13, 12);
  function initShake(ball, btn, box, prizeNum) {
    btn.addEventListener("click", function () {
      sendShakeRequest().then(function (res) {
        console.log(res);
        if (!res || !!res.error) {
          // btnShake.classList.add('pulse-btn');
          btnShake.classList.remove('_disabled');
          return;
        }
        // const prize = res.number;
        var prize = prizeState;
        var streakBonus = res.streakBonus || debug;
        animateShake(ball, box, btn, prize, prizeNum)["catch"](function (err) {
          return console.error("anim error:", err);
        });
      });
    });
  }
  initShake(ball, btnShake, ballBox, sessionStorage.getItem("prizeNum"));
  initShake(ball, btnPrize1, ballBox);
  initShake(ball, btnPrize2, ballBox);
  initShake(ball, btnPrize3, ballBox);
  initShake(ball, btnPrize4, ballBox);
  initShake(ball, btnPrize5, ballBox);
  initShake(ball, btnPrize6, ballBox);
  initShake(ball, btnPrize7, ballBox);
  initShake(ball, btnPrize8, ballBox);
  initShake(ball, btnPrize9, ballBox);
  initShake(ball, btnPrize10, ballBox);
  initShake(ball, btnPrize11, ballBox);
  initShake(ball, btnPrize12, ballBox);
  initShake(ball, btnPrize13, ballBox);

  // table toggle

  var toggleItems = document.querySelectorAll('.table__toggle-item'),
    tables = document.querySelectorAll('.table__body');
  toggleItems.forEach(function (toggleItem, index) {
    toggleItem.addEventListener('click', function () {
      toggleItems.forEach(function (item) {
        return item.classList.remove('_active');
      });
      tables.forEach(function (table) {
        return table.classList.remove('_active');
      });
      toggleItem.classList.add('_active');
      tables[index].classList.add('_active');
    });
  });
  var btns = document.querySelectorAll(".btn"),
    os = detectOS();
  if (os === "macOS" || os === "iOS") {
    btns.forEach(function (btn) {
      btn.classList.add("_ios");
    });
  }
  function detectOS() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    var platform = navigator.platform || "unknown";
    var os;
    if (/android/i.test(userAgent) && /linux arm/i.test(platform)) {
      os = "Android";
    }
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      os = "iOS";
    }
    if (/Macintosh|MacIntel|MacPPC|Mac68K/.test(platform)) {
      os = "macOS";
    }
    if (/Win32|Win64|Windows|WOW64/.test(platform)) {
      os = "Windows";
    }
    if (/Linux/.test(platform) && !/android/i.test(userAgent)) {
      os = "Linux";
    }
    return os;
  }
  console.log("Операційна система:", os);
  var handleResize = function handleResize() {
    var touchStartX = 0;
    var touchEndX = 0;
    cardsContainer.addEventListener('touchstart', function (event) {
      touchStartX = event.changedTouches[0].screenX;
    }, false);
    cardsContainer.addEventListener('touchend', function (event) {
      touchEndX = event.changedTouches[0].screenX;
      handleSwipe();
    }, false);
    function handleSwipe() {
      var swipeThreshold = 50;
      if (touchEndX < touchStartX - swipeThreshold) {
        moveRight();
      }
      if (touchEndX > touchStartX + swipeThreshold) {
        moveLeft();
      }
    }
    moveRightButton.addEventListener('click', moveRight);
    moveLeftButton.addEventListener('click', moveLeft);
    window.addEventListener("orientationchange", function () {
      location.reload();
    });
  };
  handleResize();

  // for test
  document.querySelector(".dark-btn").addEventListener("click", function () {
    document.body.classList.toggle("dark");
  });
  document.querySelector(".en-btn").addEventListener("click", function () {
    document.querySelector(".fav-page").classList.toggle("en");
  });
  document.querySelector(".testMenu").addEventListener("click", function () {
    document.querySelector(".prizes-btns").classList.toggle("hide");
  });
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwidW5hdXRoTXNncyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInBhcnRpY2lwYXRlQnRucyIsIm1haW5QYWdlIiwicXVlcnlTZWxlY3RvciIsImJhbGxXcmFwIiwiZ3VpZGVXcmFwIiwiZ2FtZVdyYXAiLCJ1a0xlbmciLCJlbkxlbmciLCJsb2NhbGUiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJ3ZWVrIiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwibmV3TG9jYWxlIiwic2V0SXRlbSIsInRvZ2dsZVN0YXRlIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJhZGRFdmVudExpc3RlbmVyIiwic3R5bGUiLCJkaXNwbGF5IiwiaTE4bkRhdGEiLCJkZWJ1ZyIsInVzZXJJZCIsIk51bWJlciIsInJlbW92ZUl0ZW0iLCJsb2FkVHJhbnNsYXRpb25zIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsInRyYW5zbGF0ZSIsIm11dGF0aW9uT2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwibXV0YXRpb25zIiwib2JzZXJ2ZSIsImdldEVsZW1lbnRCeUlkIiwiY2hpbGRMaXN0Iiwic3VidHJlZSIsImVsZW1zIiwibGVuZ3RoIiwiZm9yRWFjaCIsImVsZW0iLCJrZXkiLCJnZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJyZW1vdmVBdHRyaWJ1dGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZWZyZXNoTG9jYWxpemVkQ2xhc3MiLCJpbml0IiwiZWxlbWVudCIsImJhc2VDc3NDbGFzcyIsImxhbmciLCJyZW1vdmUiLCJzdG9yZSIsInN0YXRlIiwiZ2V0U3RhdGUiLCJhdXRoIiwiaXNBdXRob3JpemVkIiwiaWQiLCJzZXR1cFBhZ2UiLCJjIiwiaSIsInNldEludGVydmFsIiwiZ191c2VyX2lkIiwiY2hlY2tVc2VyQXV0aCIsImNsZWFySW50ZXJ2YWwiLCJhdXRoQnRuIiwiZSIsInByZXZlbnREZWZhdWx0IiwicGFydGljaXBhdGUiLCJwYXJhbXMiLCJ1c2VyaWQiLCJyZXF1ZXN0IiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJpdGVtIiwibGluayIsImV4dHJhT3B0aW9ucyIsImhlYWRlcnMiLCJ1bmF1dGhNZXMiLCJwb2ludHNQZXJEYXkiLCJzcGluQWxsb3dlZCIsInNwaW5zU3RyZWFrIiwic3BpbnMiLCJkaXNwbGF5VXNlclNwaW5zIiwicGFydGljaXBhdGVCdG4iLCJ0cmFuc2xhdGVLZXkiLCJzcGluSXRlbSIsIm5vU3Bpbkl0ZW0iLCJzcGluIiwic3BpbkRhdGUiLCJEYXRlIiwiZGF0ZSIsImZvcm1hdHRlZERhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJzcGluTmFtZSIsIm5hbWUiLCJzcGluRWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsImNhcmRzQ29udGFpbmVyIiwiY2FyZHMiLCJjYXJkc1dyYXAiLCJtb3ZlUmlnaHRCdXR0b24iLCJtb3ZlTGVmdEJ1dHRvbiIsInRhYnNDb250YWluZXIiLCJpc01vYmlsZSIsImlubmVyV2lkdGgiLCJ0b3RhbENhcmRzIiwiY2FyZFdpZHRoIiwiY2xpZW50V2lkdGgiLCJjYXJkc01hcmdpbiIsInZpc2libGVTbGlkZXMiLCJNYXRoIiwiY2VpbCIsInRvdGFsVGFicyIsInRhYldpZHRoIiwiY3VycmVudFNsaWRlIiwiY2FyZHNQb3NpdGlvbiIsImxlZnRTbGlkZSIsInJpZ2h0U2xpZGUiLCJ1cGRhdGVBY3RpdmVDYXJkIiwiYWN0aXZlSW5kZXgiLCJjYXJkIiwibGVmdFNsaWRlVGFiIiwicmlnaHRTbGlkZVRhYiIsImZpcnN0TGFzdFNsaWRlcyIsInNldENhcmRzUG9zaXRpb24iLCJwb3NpdGlvbiIsInRyYW5zZm9ybSIsIm1vdmVSaWdodCIsIm1heFBvc2l0aW9uIiwiaGlkZVBvcHVwc09uQnRuIiwicHJpemVQb3B1cEl0ZW0iLCJtb3ZlTGVmdCIsInNldFBvcHVwcyIsInBvcHVwcyIsInBvcHVwc0J0bnMiLCJidG4iLCJwb3B1cCIsImoiLCJwcml6ZU9wZW5CdG5zIiwicHJpemVDbG9zZUJ0bnMiLCJndWlkZVBvcHVwc1dyYXAiLCJndWlkZU9wZW5CdG5zIiwiZ3VpZGVDbG9zZUJ0bnMiLCJ0YWJsZVBvcHVwIiwidGFibGVQb3B1cENsb3NlIiwidGFibGVQb3B1cE9wZW4iLCJiYWxsUG9wdXAiLCJiYWxsUG9wdXBDbG9zZSIsImJhbGxQb3B1cE9wZW4iLCJjb250YWlucyIsInRhcmdldCIsIm92ZXJmbG93IiwiQ09VTlQiLCJTbm93c3Rvcm0iLCJtYXN0aGVhZCIsImNhbnZhcyIsImN0eCIsImdldENvbnRleHQiLCJ3aWR0aCIsImhlaWdodCIsImNsaWVudEhlaWdodCIsImFjdGl2ZSIsInNub3dmbGFrZXMiLCJwcm90b3R5cGUiLCJsZWZ0IiwidG9wIiwib25SZXNpemUiLCJiaW5kIiwic25vd2ZsYWtlIiwiU25vd2ZsYWtlIiwicmVzZXQiLCJwdXNoIiwicmVxdWVzdEFuaW1GcmFtZSIsInVwZGF0ZSIsImZpbGxTdHlsZSIsIndhc0FjdGl2ZSIsImNsZWFyUmVjdCIsInkiLCJ2eSIsIngiLCJ2eCIsImdsb2JhbEFscGhhIiwibyIsImJlZ2luUGF0aCIsImFyYyIsInIiLCJQSSIsImNsb3NlUGF0aCIsImZpbGwiLCJzbm93c3Rvcm0iLCJyYW5kb20iLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ3ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjYWxsYmFjayIsInNldFRpbWVvdXQiLCJza2llcyIsInNreSIsImJhbGwiLCJwYXJlbnRFbGVtZW50IiwibWF4U25vd2ZsYWtlcyIsIm1heFNwZWVkIiwic3Rvcm1Db3VudGVyIiwic25vd2ZsYWtlc1JlbW92ZWQiLCJyYWRpdXMiLCJzcGVlZFgiLCJzcGVlZFkiLCJhY2NlbGVyYXRpb24iLCJtb3ZpbmdUb0JvdHRvbSIsImJhbGxYIiwiYmFsbFkiLCJiYWxsUmFkaXVzIiwiYmFsbFNoYWtpbmciLCJ0YXJnZXRTcGVlZCIsInNwZWVkRGVjYXlGYWN0b3IiLCJtYXgiLCJtaW4iLCJkeCIsImR5IiwiZGlzdGFuY2UiLCJzcXJ0IiwiYW5nbGUiLCJhdGFuMiIsIm92ZXJsYXAiLCJjb3MiLCJzaW4iLCJzcGxpY2UiLCJpbmRleE9mIiwibGFzdEJhbGxTaGFraW5nU3RhdGUiLCJhbmltYXRlIiwiYmFsbFRyYW5zZm9ybSIsImdldENvbXB1dGVkU3R5bGUiLCJvZmZzZXRXaWR0aCIsIm1hdHJpeCIsIkRPTU1hdHJpeCIsIm9mZnNldExlZnQiLCJtNDEiLCJvZmZzZXRUb3AiLCJtNDIiLCJtb3ZlVG9Cb3R0b20iLCJkcmF3Iiwic2VuZFNoYWtlUmVxdWVzdCIsIlByb21pc2UiLCJyZXNvbHZlIiwidHlwZSIsImJ0blNoYWtlIiwiYmFsbEJveCIsImN1cnJlbnRQcml6ZSIsInBhc3RQcml6ZSIsIndpbkNsYXNzZXMiLCJyZW1vdmVQcml6ZSIsImJveCIsImFuaW1hdGVTaGFrZSIsInByaXplIiwicHJpemVOdW0iLCJkZWxheSIsIm1zIiwicHJpemVTdGF0ZSIsImJ0blByaXplMSIsImJ0blByaXplMiIsImJ0blByaXplMyIsImJ0blByaXplNCIsImJ0blByaXplNSIsImJ0blByaXplNiIsImJ0blByaXplNyIsImJ0blByaXplOCIsImJ0blByaXplOSIsImJ0blByaXplMTAiLCJidG5Qcml6ZTExIiwiYnRuUHJpemUxMiIsImJ0blByaXplMTMiLCJzZXRQcml6ZU51bSIsIm51bSIsImluaXRTaGFrZSIsImVycm9yIiwic3RyZWFrQm9udXMiLCJlcnIiLCJ0b2dnbGVJdGVtcyIsInRhYmxlcyIsInRvZ2dsZUl0ZW0iLCJpbmRleCIsInRhYmxlIiwiYnRucyIsIm9zIiwiZGV0ZWN0T1MiLCJ1c2VyQWdlbnQiLCJuYXZpZ2F0b3IiLCJ2ZW5kb3IiLCJvcGVyYSIsInBsYXRmb3JtIiwidGVzdCIsIk1TU3RyZWFtIiwiaGFuZGxlUmVzaXplIiwidG91Y2hTdGFydFgiLCJ0b3VjaEVuZFgiLCJldmVudCIsImNoYW5n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QUFDRyxnQkFBZ0IsQ0FBQyxtQkFBbUIsRUFBRSxZQUFLO01BQzlDRixRQUFRLENBQUNDLE1BQU0sRUFBRTtJQUNyQixDQUFDLENBQUM7RUFDTixDQUFDO0VBRUQwUixZQUFZLEVBQUU7O0VBR2Q7RUFDQWhULFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDbUIsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQUs7SUFDL0R2QixRQUFRLENBQUNpRixJQUFJLENBQUM3QixTQUFTLENBQUNvUSxNQUFNLENBQUMsTUFBTSxDQUFDO0VBQzFDLENBQUMsQ0FBQztFQUNGeFQsUUFBUSxDQUFDSSxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUNtQixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBSztJQUM3RHZCLFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDZ0QsU0FBUyxDQUFDb1EsTUFBTSxDQUFDLElBQUksQ0FBQztFQUM5RCxDQUFDLENBQUM7RUFFRnhULFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDbUIsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQUk7SUFDOUR2QixRQUFRLENBQUNJLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQ2dELFNBQVMsQ0FBQ29RLE1BQU0sQ0FBQyxNQUFNLENBQUM7RUFDbkUsQ0FBQyxDQUFDO0FBRU4sQ0FBQyxHQUFHIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGFwaVVSTCA9ICdodHRwczovL2Zhdi1wcm9tLmNvbS9hcGlfd2hlZWxfMjAyNSdcblxuICAgIGNvbnN0XG4gICAgICAgIHVuYXV0aE1zZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudW5hdXRoLW1zZycpLFxuICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuLWpvaW4nKSxcbiAgICAgICAgbWFpblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmF2LXBhZ2UnKSxcbiAgICAgICAgYmFsbFdyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhbGxcIiksXG4gICAgICAgIGd1aWRlV3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ3VpZGVcIiksXG4gICAgICAgIGdhbWVXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lc1wiKTtcblxuICAgIGNvbnN0IHVrTGVuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1a0xlbmcnKTtcbiAgICBjb25zdCBlbkxlbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW5MZW5nJyk7XG5cbiAgICBsZXQgbG9jYWxlID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnbG9jYWxlJykgfHwgJ2VuJyxcbiAgICAgICAgd2VlayA9IDE7XG5cbiAgICBjb25zb2xlLmxvZyh3ZWVrKVxuXG4gICAgZnVuY3Rpb24gc2V0U3RhdGUobmV3TG9jYWxlKSB7XG4gICAgICAgIGxvY2FsZSA9IG5ld0xvY2FsZTtcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnbG9jYWxlJywgbG9jYWxlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdG9nZ2xlU3RhdGUoKSB7XG4gICAgICAgIGNvbnN0IG5ld0xvY2FsZSA9IGxvY2FsZSA9PT0gJ2VuJyA/ICd1aycgOiAnZW4nO1xuICAgICAgICBzZXRTdGF0ZShuZXdMb2NhbGUpO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgICB9XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVuLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0b2dnbGVTdGF0ZSgpO1xuICAgIH0pO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWVrLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyh3ZWVrKVxuICAgICAgICBpZih3ZWVrID09PSAxKXtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5fd2VlazEnKS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5fd2VlazInKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAgICAgICAgIHJldHVybiB3ZWVrID0gMlxuICAgICAgICB9XG4gICAgICAgIGlmKHdlZWsgPT09IDIpe1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLl93ZWVrMicpLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLl93ZWVrMScpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgICAgICAgd2VlayA9IDFcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHVrTGVuZykgbG9jYWxlID0gJ3VrJztcbiAgICBpZiAoZW5MZW5nKSBsb2NhbGUgPSAnZW4nO1xuXG5cbiAgICBsZXQgaTE4bkRhdGEgPSB7fTtcbiAgICBjb25zdCBkZWJ1ZyA9IHRydWU7XG4gICAgbGV0IHVzZXJJZDtcbiAgICB1c2VySWQgPSBOdW1iZXIoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKSk7XG5cbiAgICBjb25zb2xlLmxvZyh0eXBlb2YgdXNlcklkKVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2NrLWJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIHVzZXJJZCA/IHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJ1c2VySWRcIikgOiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwidXNlcklkXCIsICcxMDEyMzQ4NjEnKVxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgICB9KVxuXG4gICAgLy8gdXNlcklkID0gOTk5OTtcblxuICAgIGlmKHdlZWsgPT09IDEpe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuX3dlZWsxJykuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXG4gICAgfVxuICAgIGlmKHdlZWsgPT09IDIpe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuX3dlZWsyJykuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9hZFRyYW5zbGF0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke2FwaVVSTH0vdHJhbnNsYXRlcy8ke2xvY2FsZX1gKS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICAgICAgaTE4bkRhdGEgPSBqc29uO1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgdmFyIG11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAobXV0YXRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIG11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFsbCcpLCB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgc3VidHJlZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJhbnNsYXRlKCkge1xuICAgICAgICBjb25zdCBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRyYW5zbGF0ZV0nKVxuICAgICAgICBpZiAoZWxlbXMgJiYgZWxlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBlbGVtcy5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgICAgICAgICAgICAgIGVsZW0uaW5uZXJIVE1MID0gaTE4bkRhdGFba2V5XSB8fCAnKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiAgIGtleTogICcgKyBrZXk7XG4gICAgICAgICAgICAgICAgZWxlbS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJ0cmFuc2xhdGUgd29ya2luZ1wiKVxuICAgICAgICB9XG4gICAgICAgIGlmIChsb2NhbGUgPT09ICdlbicpIHtcbiAgICAgICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5hZGQoJ2VuJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmVmcmVzaExvY2FsaXplZENsYXNzKCk7XG4gICAgfVxuICAgIGxvYWRUcmFuc2xhdGlvbnMoKVxuICAgICAgICAudGhlbihpbml0KTtcbiAgICBmdW5jdGlvbiByZWZyZXNoTG9jYWxpemVkQ2xhc3MoZWxlbWVudCwgYmFzZUNzc0NsYXNzKSB7XG4gICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgbGFuZyBvZiBbJ2hyJywgJ2VuJ10pIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShiYXNlQ3NzQ2xhc3MgKyBsYW5nKTtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYmFzZUNzc0NsYXNzICsgbG9jYWxlKTtcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIGlmICh3aW5kb3cuc3RvcmUpIHtcbiAgICAgICAgICAgIHZhciBzdGF0ZSA9IHdpbmRvdy5zdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgICAgICAgdXNlcklkID0gc3RhdGUuYXV0aC5pc0F1dGhvcml6ZWQgJiYgc3RhdGUuYXV0aC5pZCB8fCAnJztcbiAgICAgICAgICAgIHNldHVwUGFnZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0dXBQYWdlKCk7XG4gICAgICAgICAgICBsZXQgYyA9IDA7XG4gICAgICAgICAgICB2YXIgaSA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoYyA8IDUwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghIXdpbmRvdy5nX3VzZXJfaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZCA9IHdpbmRvdy5nX3VzZXJfaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR1cFBhZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrVXNlckF1dGgoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgIH1cblxuICAgICAgICBjaGVja1VzZXJBdXRoKCk7XG5cbiAgICAgICAgcGFydGljaXBhdGVCdG5zLmZvckVhY2goKGF1dGhCdG4sIGkpID0+IHtcbiAgICAgICAgICAgIGF1dGhCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldHVwUGFnZSgpIHt9XG4gICAgZnVuY3Rpb24gcGFydGljaXBhdGUoKSB7XG4gICAgICAgIGlmICghdXNlcklkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwYXJhbXMgPSB7dXNlcmlkOiB1c2VySWR9O1xuICAgICAgICByZXF1ZXN0KCcvdXNlcicsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGFyYW1zKVxuICAgICAgICB9KS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpKTtcbiAgICAgICAgICAgIGJhbGxXcmFwLmNsYXNzTGlzdC5yZW1vdmUoJ19zaWduJyk7XG4gICAgICAgICAgICBzZXR1cFBhZ2UoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVxdWVzdCA9IGZ1bmN0aW9uIChsaW5rLCBleHRyYU9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKGFwaVVSTCArIGxpbmssIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAuLi4oZXh0cmFPcHRpb25zIHx8IHt9KVxuICAgICAgICB9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrVXNlckF1dGgoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJJZClcbiAgICAgICAgaWYgKHVzZXJJZCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCB1bmF1dGhNZXMgb2YgdW5hdXRoTXNncykge1xuICAgICAgICAgICAgICAgIHVuYXV0aE1lcy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXF1ZXN0KGAvZmF2dXNlci8ke3VzZXJJZH0/bm9jYWNoZT0xYClcbiAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMudXNlcmlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhbGxXcmFwLmNsYXNzTGlzdC5yZW1vdmUoJ19zaWduJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBndWlkZVdyYXAuY2xhc3NMaXN0LnJlbW92ZSgnX3NpZ24nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVXcmFwLmNsYXNzTGlzdC5yZW1vdmUoJ19zaWduJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhbm5lcl9fYnRuXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2dyZXNzXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJfc2lnblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkZWJ1Zykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5wb2ludHNQZXJEYXkgPSAzMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc3BpbkFsbG93ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zcGluc1N0cmVhayA9IDM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnNwaW5zID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZWZyZXNoVXNlckluZm8ocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcy5zcGlucylcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlVc2VyU3BpbnMocmVzLnNwaW5zKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFubmVyX19idG5cIikuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFubmVyX19idG5cIikuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICAgICAgICAgIGZvciAobGV0IHBhcnRpY2lwYXRlQnRuIG9mIHBhcnRpY2lwYXRlQnRucykge1xuICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoY29uc3QgdW5hdXRoTWVzIG9mIHVuYXV0aE1zZ3MpIHtcbiAgICAgICAgICAgICAgICB1bmF1dGhNZXMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJhbnNsYXRlS2V5KGtleSkge1xuICAgICAgICBpZiAoIWtleSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpMThuRGF0YVtrZXldIHx8ICcqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qICAga2V5OiAgJyArIGtleTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5VXNlclNwaW5zKHNwaW5zKSB7XG4gICAgICAgIGNvbnN0IHNwaW5JdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNwaW5zLXJvdycpO1xuICAgICAgICBjb25zdCBub1NwaW5JdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vLXNwaW5zJyk7XG5cbiAgICAgICAgaWYgKCFzcGlucyB8fCBzcGlucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHNwaW5JdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIG5vU3Bpbkl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coc3BpbnMpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjb25zdCBzcGluc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zcGlucy1yb3cnKTtcbiAgICAgICAgc3Bpbkl0ZW0uaW5uZXJIVE1MID0gJyc7XG5cbiAgICAgICAgc3Bpbkl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICBub1NwaW5JdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgY29uc29sZS5sb2cobm9TcGluSXRlbSlcblxuICAgICAgICBzcGlucy5mb3JFYWNoKHNwaW4gPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3BpbkRhdGUgPSBuZXcgRGF0ZShzcGluLmRhdGUpO1xuICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkRGF0ZSA9IHNwaW5EYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygnaHItSFInKTtcbiAgICAgICAgICAgIGNvbnN0IHNwaW5OYW1lID0gdHJhbnNsYXRlS2V5KHNwaW4ubmFtZSkgfHwgJyc7XG5cbiAgICAgICAgICAgIGNvbnN0IHNwaW5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBzcGluRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzcGlucy1yb3ctaXRlbScpO1xuXG4gICAgICAgICAgICBzcGluRWxlbWVudC5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbnRlbnQtZGF0ZVwiPiR7Zm9ybWF0dGVkRGF0ZX08L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbnRlbnQtcHJpemVcIj4ke3NwaW5OYW1lfTwvc3Bhbj5cbiAgICAgICAgYDtcblxuICAgICAgICAgICAgc3Bpbkl0ZW0uYXBwZW5kQ2hpbGQoc3BpbkVsZW1lbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIC8vIENhcmRzIHNsaWRlclxuICAgIGNvbnN0IGNhcmRzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaXplX19saXN0JyksXG4gICAgICAgICAgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJpemVfX2xpc3QtaXRlbScpLFxuICAgICAgICAgIGNhcmRzV3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcml6ZV9fbGlzdC1zY3JvbGwnKSxcbiAgICAgICAgICBtb3ZlUmlnaHRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpemVfX3NsaWRlci1tb3ZlLXJpZ2h0JyksXG4gICAgICAgICAgbW92ZUxlZnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpemVfX3NsaWRlci1tb3ZlLWxlZnQnKSxcbiAgICAgICAgICB0YWJzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaXplX190YWJzJyksXG4gICAgICAgICAgaXNNb2JpbGUgPSB3aW5kb3cuaW5uZXJXaWR0aCA8IDYwMCxcbiAgICAgICAgICB0b3RhbENhcmRzID0gY2FyZHMubGVuZ3RoLFxuICAgICAgICAgIGNhcmRXaWR0aCA9IGNhcmRzWzBdLmNsaWVudFdpZHRoLFxuICAgICAgICAgIGNhcmRzTWFyZ2luID0gKGNhcmRzV3JhcC5jbGllbnRXaWR0aCAtIGNhcmRXaWR0aCAqIHRvdGFsQ2FyZHMpIC8gKHRvdGFsQ2FyZHMgLSAxKSxcbiAgICAgICAgICB2aXNpYmxlU2xpZGVzID0gaXNNb2JpbGUgPyAxIDogTWF0aC5jZWlsKGNhcmRzQ29udGFpbmVyLmNsaWVudFdpZHRoIC8gKGNhcmRXaWR0aCArIGNhcmRzTWFyZ2luKSksXG4gICAgICAgICAgdG90YWxUYWJzID0gTWF0aC5jZWlsKHRvdGFsQ2FyZHMgLyB2aXNpYmxlU2xpZGVzKSxcbiAgICAgICAgICB0YWJXaWR0aD0gdmlzaWJsZVNsaWRlcyAqIChjYXJkV2lkdGggKyBjYXJkc01hcmdpbilcblxuXG4gICAgbGV0IGN1cnJlbnRTbGlkZSA9IDEsXG4gICAgICAgIGNhcmRzUG9zaXRpb24gPSAwLFxuICAgICAgICBsZWZ0U2xpZGUsXG4gICAgICAgIHJpZ2h0U2xpZGU7XG5cbiAgICBjb25zdCB1cGRhdGVBY3RpdmVDYXJkID0gKGNhcmRzLCBhY3RpdmVJbmRleCkgPT4ge1xuICAgICAgICBjYXJkcy5mb3JFYWNoKChjYXJkLCBpKSA9PntcbiAgICAgICAgICAgIGFjdGl2ZUluZGV4IC0gMSA9PT0gaSA/IGNhcmQuY2xhc3NMaXN0LmFkZChcIl9hY3RpdmVcIikgOiBjYXJkLmNsYXNzTGlzdC5yZW1vdmUoXCJfYWN0aXZlXCIpXG4gICAgICAgIH0pXG4gICAgfVxuICAgIHVwZGF0ZUFjdGl2ZUNhcmQoY2FyZHMsIGN1cnJlbnRTbGlkZSlcblxuICAgIGZ1bmN0aW9uIGxlZnRTbGlkZVRhYigpe1xuICAgICAgICBsZWZ0U2xpZGUgPSBjdXJyZW50U2xpZGVcbiAgICB9XG4gICAgZnVuY3Rpb24gcmlnaHRTbGlkZVRhYigpe1xuICAgICAgICByaWdodFNsaWRlID0gY3VycmVudFNsaWRlICsgKHZpc2libGVTbGlkZXMgLSAxKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZpcnN0TGFzdFNsaWRlcygpe1xuICAgICAgICBpZihpc01vYmlsZSkgcmV0dXJuXG4gICAgICAgIGxlZnRTbGlkZVRhYigpXG4gICAgICAgIHJpZ2h0U2xpZGVUYWIoKVxuICAgICAgICBjYXJkcy5mb3JFYWNoKChjYXJkICwgaSkgPT57XG4gICAgICAgICAgICBpICsgMSA9PT0gbGVmdFNsaWRlID8gY2FyZC5jbGFzc0xpc3QuYWRkKFwiX2xlZnRcIikgOiBjYXJkLmNsYXNzTGlzdC5yZW1vdmUoXCJfbGVmdFwiKVxuICAgICAgICAgICAgaSArIDEgPT09IHJpZ2h0U2xpZGUgPyBjYXJkLmNsYXNzTGlzdC5hZGQoXCJfcmlnaHRcIikgOiBjYXJkLmNsYXNzTGlzdC5yZW1vdmUoXCJfcmlnaHRcIilcbiAgICAgICAgfSlcbiAgICB9XG4gICAgZmlyc3RMYXN0U2xpZGVzKClcblxuICAgIGZ1bmN0aW9uIHNldENhcmRzUG9zaXRpb24gKHBvc2l0aW9uKSB7XG4gICAgICAgIGNhcmRzV3JhcC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgtJHtwb3NpdGlvbn1weClgO1xuICAgIH07XG4gICAgY29uc3QgbW92ZVJpZ2h0ID0gKCkgPT4ge1xuXG4gICAgICAgIGlmIChjdXJyZW50U2xpZGUgPj0gdG90YWxDYXJkcyAtICh2aXNpYmxlU2xpZGVzIC0gMSkgJiYgaXNNb2JpbGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBmaXJzdExhc3RTbGlkZXMoKVxuICAgICAgICAgICAgY3VycmVudFNsaWRlID0gMTtcbiAgICAgICAgICAgIGNhcmRzUG9zaXRpb24gPSAwO1xuICAgICAgICAgICAgcmlnaHRTbGlkZSsrXG4gICAgICAgICAgICBsZWZ0U2xpZGUrK1xuICAgICAgICB9ZWxzZSBpZihjdXJyZW50U2xpZGUgPT09IHRvdGFsQ2FyZHMpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRTbGlkZSlcbiAgICAgICAgICAgIGN1cnJlbnRTbGlkZSA9IDE7XG4gICAgICAgICAgICBjYXJkc1Bvc2l0aW9uID0gMDtcbiAgICAgICAgfWVsc2UgaWYoY3VycmVudFNsaWRlID09PSB0b3RhbENhcmRzIC0gKCB2aXNpYmxlU2xpZGVzICsgMSkgJiYgaXNNb2JpbGUgPT09IHRydWUpe1xuICAgICAgICAgICAgY3VycmVudFNsaWRlID0gdG90YWxDYXJkc1xuICAgICAgICAgICAgY2FyZHNQb3NpdGlvbiA9IGNhcmRzV3JhcC5jbGllbnRXaWR0aCAtICh3aW5kb3cuaW5uZXJXaWR0aCAtIChjYXJkc01hcmdpbiAvIDIpKVxuICAgICAgICAgICAgY29uc29sZS5sb2coY2FyZHNQb3NpdGlvbilcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IG1heFBvc2l0aW9uID0gKHRvdGFsQ2FyZHMgLSB2aXNpYmxlU2xpZGVzKSAqIChjYXJkV2lkdGggKyBjYXJkc01hcmdpbik7XG4gICAgICAgICAgICBpZiAoY2FyZHNQb3NpdGlvbiArIGNhcmRXaWR0aCArIGNhcmRzTWFyZ2luID4gbWF4UG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgICBjYXJkc1Bvc2l0aW9uID0gbWF4UG9zaXRpb247XG4gICAgICAgICAgICAgICAgY3VycmVudFNsaWRlID0gdG90YWxDYXJkcyAtIHZpc2libGVTbGlkZXMgKyAxO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYXJkc1Bvc2l0aW9uICs9IGNhcmRXaWR0aCArIGNhcmRzTWFyZ2luO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRTbGlkZSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNldENhcmRzUG9zaXRpb24oY2FyZHNQb3NpdGlvbik7XG4gICAgICAgIHVwZGF0ZUFjdGl2ZUNhcmQoY2FyZHMsIGN1cnJlbnRTbGlkZSlcbiAgICAgICAgZmlyc3RMYXN0U2xpZGVzKClcbiAgICAgICAgaGlkZVBvcHVwc09uQnRuKHByaXplUG9wdXBJdGVtKVxuICAgICAgICAvLyBjZW50ZXJQb3B1cChcIi5wcml6ZV9fbGlzdC1wb3B1cFwiKVxuXG4gICAgfTtcbiAgICBjb25zdCBtb3ZlTGVmdCA9ICgpID0+IHtcbiAgICAgICAgaWYoY3VycmVudFNsaWRlID09PSAxICYmIGlzTW9iaWxlID09PSBmYWxzZSl7XG4gICAgICAgICAgICBjdXJyZW50U2xpZGUgPSB0b3RhbENhcmRzIC0gKHZpc2libGVTbGlkZXMgLSAxKTtcbiAgICAgICAgICAgIGNhcmRzUG9zaXRpb24gPSAoKHRvdGFsQ2FyZHMgLSAodmlzaWJsZVNsaWRlcyAtIDEpKSAqIChjYXJkV2lkdGggKyBjYXJkc01hcmdpbikpIC0oY2FyZFdpZHRoICsgY2FyZHNNYXJnaW4pO1xuICAgICAgICB9ZWxzZSBpZiAoY3VycmVudFNsaWRlID09PSAyKSB7XG4gICAgICAgICAgICBjYXJkc1Bvc2l0aW9uID0gMFxuICAgICAgICAgICAgY3VycmVudFNsaWRlID0gMVxuICAgICAgICB9ZWxzZSBpZihjdXJyZW50U2xpZGUgPT09IDEgJiYgaXNNb2JpbGUgPT09IHRydWUpe1xuICAgICAgICAgICAgY3VycmVudFNsaWRlID0gdG90YWxDYXJkc1xuICAgICAgICAgICAgY2FyZHNQb3NpdGlvbiA9IGNhcmRzV3JhcC5jbGllbnRXaWR0aCAtICh3aW5kb3cuaW5uZXJXaWR0aCAtIChjYXJkc01hcmdpbiAvIDIpKVxuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICBjYXJkc1Bvc2l0aW9uIC09IGNhcmRXaWR0aCArIGNhcmRzTWFyZ2luO1xuICAgICAgICAgICAgY3VycmVudFNsaWRlLS1cbiAgICAgICAgfVxuICAgICAgICBzZXRDYXJkc1Bvc2l0aW9uKGNhcmRzUG9zaXRpb24pO1xuICAgICAgICB1cGRhdGVBY3RpdmVDYXJkKGNhcmRzLCBjdXJyZW50U2xpZGUpXG4gICAgICAgIGZpcnN0TGFzdFNsaWRlcygpXG4gICAgICAgIGhpZGVQb3B1cHNPbkJ0bihwcml6ZVBvcHVwSXRlbSlcbiAgICAgICAgLy8gY2VudGVyUG9wdXAoXCIucHJpemVfX2xpc3QtcG9wdXBcIilcbiAgICB9O1xuXG4gICAgLy8gY2VudGVyUG9wdXAoXCIucHJpemVfX2xpc3QtcG9wdXBcIilcblxuXG4gICAgLy8gcG9wdXBzIGxvZ2ljXG5cbiAgICBmdW5jdGlvbiBzZXRQb3B1cHMocG9wdXBzLCBwb3B1cHNCdG5zKSB7XG4gICAgICAgIHBvcHVwc0J0bnMuZm9yRWFjaCgoYnRuLCBpKSA9PiB7XG4gICAgICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgcG9wdXBzLmZvckVhY2goKHBvcHVwLCBqKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGkgPT09IGogPyBwb3B1cC5jbGFzc0xpc3QuYWRkKFwiX3BvcHVwXCIpIDogcG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcIl9wb3B1cFwiKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiAgIGhpZGVQb3B1cHNPbkJ0bihwb3B1cHMpe1xuICAgICAgICBwb3B1cHMuZm9yRWFjaChwb3B1cCA9PntcbiAgICAgICAgICAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcIl9wb3B1cFwiKVxuICAgICAgICB9KVxuICAgIH1cblxuXG5cblxuXG4vLyBwb3B1cHNcbiAgICBjb25zdCBwcml6ZU9wZW5CdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcml6ZV9fbGlzdC1pdGVtLWJ0blwiKSxcbiAgICAgICAgICBwcml6ZUNsb3NlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJpemVfX2xpc3QtcG9wdXAtY2xvc2VcIiksXG4gICAgICAgICAgZ3VpZGVQb3B1cHNXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ndWlkZV9faXRlbVwiKSxcbiAgICAgICAgICBndWlkZU9wZW5CdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ndWlkZV9faXRlbS1pbmZvLWJ0blwiKSxcbiAgICAgICAgICBndWlkZUNsb3NlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZ3VpZGVfX2l0ZW0tcG9wdXAtY2xvc2VcIiksXG4gICAgICAgICAgdGFibGVQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFibGVfX3BvcHVwXCIpLFxuICAgICAgICAgIHRhYmxlUG9wdXBDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFibGVfX3BvcHVwLWNsb3NlXCIpLFxuICAgICAgICAgIHRhYmxlUG9wdXBPcGVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YWJsZV9faW5mb1wiKSxcbiAgICAgICAgICBiYWxsUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2dyZXNzX19wb3B1cFwiKSxcbiAgICAgICAgICBiYWxsUG9wdXBDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZ3Jlc3NfX3BvcHVwLWNsb3NlXCIpLFxuICAgICAgICAgIGJhbGxQb3B1cE9wZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2dyZXNzX19wb3B1cC1idG5cIiksXG4gICAgICAgICAgcHJpemVQb3B1cEl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByaXplX19jb250YWluZXItaXRlbVwiKVxuXG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+e1xuXG4gICAgICAgIC8vICBwcml6ZVBvcHVwSXRlbS5mb3JFYWNoKGNhcmQgPT57XG4gICAgICAgIC8vICAgICAgICAgaWYoZS50YXJnZXQgIT09IGNhcmQpe1xuICAgICAgICAvLyAgICAgICAgICAgICBwcml6ZU9wZW5CdG5zLmZvckVhY2goYnRuID0+e1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgaWYoZS50YXJnZXQgIT09IGJ0biAmJiBlLnRhcmdldCAhPT0gY2FyZCl7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQgKVxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIC8vIGNhcmQuY2xhc3NMaXN0LnJlbW92ZShcIl9wb3B1cFwiKVxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICAgICAgICB9KVxuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gfSlcbiAgICAgICAgZ3VpZGVQb3B1cHNXcmFwLmZvckVhY2gocG9wdXAgPT57XG4gICAgICAgICAgICBpZighcG9wdXAuY29udGFpbnMoZS50YXJnZXQpKXtcbiAgICAgICAgICAgICAgICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwiX3BvcHVwXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYoIWJhbGxQb3B1cC5jb250YWlucyhlLnRhcmdldCkgJiYgZS50YXJnZXQgIT09IGJhbGxQb3B1cE9wZW4pe1xuICAgICAgICAgICAgICAgIGJhbGxQb3B1cC5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgICAgICB9XG5cbiAgICB9KVxuXG5cbiAgICBzZXRQb3B1cHMocHJpemVQb3B1cEl0ZW0sIHByaXplT3BlbkJ0bnMpO1xuICAgIHNldFBvcHVwcyhndWlkZVBvcHVwc1dyYXAsIGd1aWRlT3BlbkJ0bnMpO1xuXG4gICAgZ3VpZGVDbG9zZUJ0bnMuZm9yRWFjaChidG4gPT57XG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xuICAgICAgICAgICAgICBoaWRlUG9wdXBzT25CdG4oZ3VpZGVQb3B1cHNXcmFwKVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIHByaXplQ2xvc2VCdG5zLmZvckVhY2goYnRuID0+e1xuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcbiAgICAgICAgICAgICAgaGlkZVBvcHVwc09uQnRuKHByaXplUG9wdXBJdGVtKVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRhYmxlUG9wdXBPcGVuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICB0YWJsZVBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiXG4gICAgfSk7XG5cbiAgICB0YWJsZVBvcHVwQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICB0YWJsZVBvcHVwLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIlxuICAgIH0pO1xuXG4gICAgYmFsbFBvcHVwT3Blbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgICAgICBiYWxsUG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIilcbiAgICB9KTtcblxuICAgIGJhbGxQb3B1cENsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgICAgIGJhbGxQb3B1cC5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgIH0pO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT57XG4gICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIENPVU5UID0gNDAwO1xuXG4gICAgICAgIGZ1bmN0aW9uIFNub3dzdG9ybShlbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLm1hc3RoZWFkID0gZWxlbWVudDtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgICAgICB0aGlzLndpZHRoID0gdGhpcy5tYXN0aGVhZC5jbGllbnRXaWR0aDtcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5tYXN0aGVhZC5jbGllbnRIZWlnaHQ7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zbm93Zmxha2VzID0gW107XG5cbiAgICAgICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgU25vd3N0b3JtLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUubGVmdCA9IHRoaXMuY2FudmFzLnN0eWxlLnRvcCA9ICcwJztcbiAgICAgICAgICAgIHRoaXMubWFzdGhlYWQuYXBwZW5kQ2hpbGQodGhpcy5jYW52YXMpO1xuXG4gICAgICAgICAgICB0aGlzLm9uUmVzaXplKCk7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpLCBmYWxzZSk7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgQ09VTlQ7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBzbm93Zmxha2UgPSBuZXcgdGhpcy5Tbm93Zmxha2UodGhpcyk7XG4gICAgICAgICAgICAgICAgc25vd2ZsYWtlLnJlc2V0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zbm93Zmxha2VzLnB1c2goc25vd2ZsYWtlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1GcmFtZSh0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBTbm93c3Rvcm0ucHJvdG90eXBlLm9uUmVzaXplID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMubWFzdGhlYWQuY2xpZW50V2lkdGg7XG4gICAgICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMubWFzdGhlYWQuY2xpZW50SGVpZ2h0O1xuICAgICAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB0aGlzLndpZHRoO1xuICAgICAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnI0ZGRic7XG5cbiAgICAgICAgICAgIHZhciB3YXNBY3RpdmUgPSB0aGlzLmFjdGl2ZTtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlID0gdGhpcy53aWR0aCA+IDgwO1xuICAgICAgICAgICAgdGhpcy53aWR0aCA+IDI4MCA/IENPVU5UID0gMTUwIDogbnVsbFxuXG4gICAgICAgICAgICBpZiAoIXdhc0FjdGl2ZSAmJiB0aGlzLmFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltRnJhbWUodGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgU25vd3N0b3JtLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuXG4gICAgICAgICAgICBpZiAoIXRoaXMuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IENPVU5UOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgc25vd2ZsYWtlID0gdGhpcy5zbm93Zmxha2VzW2ldO1xuICAgICAgICAgICAgICAgIHNub3dmbGFrZS55ICs9IHNub3dmbGFrZS52eTtcbiAgICAgICAgICAgICAgICBzbm93Zmxha2UueCArPSBzbm93Zmxha2Uudng7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5nbG9iYWxBbHBoYSA9IHNub3dmbGFrZS5vO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmFyYyhzbm93Zmxha2UueCwgc25vd2ZsYWtlLnksIHNub3dmbGFrZS5yLCAwLCBNYXRoLlBJICogMiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcblxuICAgICAgICAgICAgICAgIGlmIChzbm93Zmxha2UueSA+IHRoaXMuaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIHNub3dmbGFrZS5yZXNldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVxdWVzdEFuaW1GcmFtZSh0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgfTtcblxuICAgICAgICBTbm93c3Rvcm0ucHJvdG90eXBlLlNub3dmbGFrZSA9IGZ1bmN0aW9uIChzbm93c3Rvcm0pIHtcbiAgICAgICAgICAgIHRoaXMuc25vd3N0b3JtID0gc25vd3N0b3JtO1xuICAgICAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIFNub3dzdG9ybS5wcm90b3R5cGUuU25vd2ZsYWtlLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMueCA9IE1hdGgucmFuZG9tKCkgKiB0aGlzLnNub3dzdG9ybS53aWR0aDtcbiAgICAgICAgICAgIHRoaXMueSA9IE1hdGgucmFuZG9tKCkgKiAtdGhpcy5zbm93c3Rvcm0uaGVpZ2h0O1xuICAgICAgICAgICAgdGhpcy52eSA9IDAuMyArIE1hdGgucmFuZG9tKCkgKiAwLjAwMDAxO1xuICAgICAgICAgICAgdGhpcy52eCA9IDAuNiAtIE1hdGgucmFuZG9tKCk7XG4gICAgICAgICAgICB0aGlzLnIgPSAxICsgTWF0aC5yYW5kb20oKSAqIDI7XG4gICAgICAgICAgICB0aGlzLm8gPSAxO1xuICAgICAgICB9O1xuXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbUZyYW1lID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgICAgICAgICAgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICAgICAgICAgIHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoY2FsbGJhY2ssIDEwMDAgLyA2MCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgfSkoKTtcblxuICAgICAgICB2YXIgc2tpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2t5Jyk7XG4gICAgICAgIHNraWVzLmZvckVhY2goZnVuY3Rpb24gKHNreSkge1xuICAgICAgICAgICAgbmV3IFNub3dzdG9ybShza3kpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBiYWxsIHNoYWtlIHNub3dcbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNub3dDYW52YXMnKTtcbiAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIGNvbnN0IGJhbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3BoZXJlJyk7XG5cbiAgICAgICAgY2FudmFzLndpZHRoID0gY2FudmFzLnBhcmVudEVsZW1lbnQuY2xpZW50V2lkdGg7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBjYW52YXMucGFyZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XG5cbiAgICAgICAgbGV0IHNub3dmbGFrZXMgPSBbXTtcbiAgICAgICAgY29uc3QgbWF4U25vd2ZsYWtlcyA9IDEwMDtcbiAgICAgICAgY29uc3QgbWF4U3BlZWQgPSA3O1xuICAgICAgICBsZXQgc3Rvcm1Db3VudGVyID0gMVxuXG5cbiAgICAgICAgbGV0IHNub3dmbGFrZXNSZW1vdmVkID0gMDtcblxuICAgICAgICBjbGFzcyBTbm93Zmxha2Uge1xuICAgICAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy54ID0gTWF0aC5yYW5kb20oKSAqIGNhbnZhcy53aWR0aDtcbiAgICAgICAgICAgICAgICB0aGlzLnkgPSBNYXRoLnJhbmRvbSgpICogY2FudmFzLmhlaWdodDtcbiAgICAgICAgICAgICAgICB0aGlzLnJhZGl1cyA9IE1hdGgucmFuZG9tKCkgKiAzICsgMTtcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVkWCA9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDEwO1xuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWRZID0gTWF0aC5yYW5kb20oKSAqIDEuNSArIDE7XG4gICAgICAgICAgICAgICAgdGhpcy5hY2NlbGVyYXRpb24gPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMubW92aW5nVG9Cb3R0b20gPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdXBkYXRlKGJhbGxYLCBiYWxsWSwgYmFsbFJhZGl1cywgYmFsbFNoYWtpbmcpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tb3ZpbmdUb0JvdHRvbSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXRTcGVlZCA9IDAuMTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3BlZWREZWNheUZhY3RvciA9IDAuMDU7IC8vINCa0L7QtdGE0ZbRhtGW0ZTQvdGCINC00LvRjyDQv9C70LDQstC90L7Qs9C+INGB0L/QvtCy0ZbQu9GM0L3QtdC90L3Rj1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3BlZWRYID0gdGhpcy5zcGVlZFggLSAodGhpcy5zcGVlZFggLSB0YXJnZXRTcGVlZCkgKiBzcGVlZERlY2F5RmFjdG9yO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwZWVkWSA9IHRoaXMuc3BlZWRZIC0gKHRoaXMuc3BlZWRZIC0gdGFyZ2V0U3BlZWQpICogc3BlZWREZWNheUZhY3RvcjtcblxuICAgICAgICAgICAgICAgICAgICAvLyDQntC90L7QstC70LXQvdC90Y8g0L/QvtC30LjRhtGW0Zcg0YHQvdGW0LbQuNC90LrQuFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnkgKz0gdGhpcy5zcGVlZFk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMueSA+IGNhbnZhcy5oZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMueCArPSB0aGlzLnNwZWVkWDtcbiAgICAgICAgICAgICAgICB0aGlzLnkgKz0gdGhpcy5zcGVlZFk7XG5cbiAgICAgICAgICAgICAgICAvLyDQntCx0LzQtdC20LXQvdC90Y8g0YjQstC40LTQutC+0YHRgtGWXG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlZFggPSBNYXRoLm1heCgtbWF4U3BlZWQsIE1hdGgubWluKG1heFNwZWVkLCB0aGlzLnNwZWVkWCkpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWRZID0gTWF0aC5tYXgoLW1heFNwZWVkLCBNYXRoLm1pbihtYXhTcGVlZCwgdGhpcy5zcGVlZFkpKTtcblxuICAgICAgICAgICAgICAgIC8vINCU0L7QtNCw0LLQsNC90L3RjyDRiNCy0LjQtNC60L7RgdGC0ZYg0YfQtdGA0LXQtyBcItGC0YDRg9GB0ZbQvdC90Y9cIiDQutGD0LvRllxuICAgICAgICAgICAgICAgIGlmIChiYWxsU2hha2luZykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjY2VsZXJhdGlvbiArPSAwLjA1O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWNjZWxlcmF0aW9uICo9IDAuOTU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWRYICs9IHRoaXMuYWNjZWxlcmF0aW9uICogKE1hdGgucmFuZG9tKCkgLSAwLjUpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWRZICs9IHRoaXMuYWNjZWxlcmF0aW9uICogKE1hdGgucmFuZG9tKCkgLSAwLjUpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMueSA+IGNhbnZhcy5oZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54ID0gTWF0aC5yYW5kb20oKSAqIGNhbnZhcy53aWR0aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMueCA+IGNhbnZhcy53aWR0aCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnggPSAwO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy54IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnggPSBjYW52YXMud2lkdGg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8g0JLRltC00YHRgtCw0L3RjCDQtNC+INGG0LXQvdGC0YDRgyDQutGD0LvRllxuICAgICAgICAgICAgICAgIGNvbnN0IGR4ID0gdGhpcy54IC0gYmFsbFg7XG4gICAgICAgICAgICAgICAgY29uc3QgZHkgPSB0aGlzLnkgLSBiYWxsWTtcbiAgICAgICAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG5cbiAgICAgICAgICAgICAgICAvLyDQktGW0LTRgdC60L7QuiDQstGW0LQg0LrRg9C70ZZcbiAgICAgICAgICAgICAgICBpZiAoZGlzdGFuY2UgPCBiYWxsUmFkaXVzICsgdGhpcy5yYWRpdXMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYW5nbGUgPSBNYXRoLmF0YW4yKGR5LCBkeCk7IC8vINCa0YPRgiDQt9GW0YLQutC90LXQvdC90Y9cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3ZlcmxhcCA9IGJhbGxSYWRpdXMgKyB0aGlzLnJhZGl1cyAtIGRpc3RhbmNlO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vINCf0LXRgNC10LzRltGJ0LXQvdC90Y8g0YHQvdGW0LbQuNC90LrQuFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnggKz0gTWF0aC5jb3MoYW5nbGUpICogb3ZlcmxhcDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55ICs9IE1hdGguc2luKGFuZ2xlKSAqIG92ZXJsYXA7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8g0KDQtdCy0LXRgNGBINGI0LLQuNC00LrQvtGB0YLRllxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwZWVkWCAqPSAtMC43O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwZWVkWSAqPSAtMC43O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbW92ZVRvQm90dG9tKCkge1xuICAgICAgICAgICAgICAgIHRoaXMubW92aW5nVG9Cb3R0b20gPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZW1vdmUoKSB7XG4gICAgICAgICAgICAgICAgc25vd2ZsYWtlcy5zcGxpY2Uoc25vd2ZsYWtlcy5pbmRleE9mKHRoaXMpLCAxKTtcbiAgICAgICAgICAgICAgICBzbm93Zmxha2VzUmVtb3ZlZCsrO1xuICAgICAgICAgICAgICAgIGlmIChzdG9ybUNvdW50ZXIgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3IFNub3dzdG9ybShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNwaGVyZV9fYm9keVwiKSk7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JtQ291bnRlcisrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZHJhdygpIHtcbiAgICAgICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIDAsIE1hdGguUEkgKiAyKTtcbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gJ3doaXRlJztcbiAgICAgICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBsYXN0QmFsbFNoYWtpbmdTdGF0ZSA9IGZhbHNlO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF4U25vd2ZsYWtlczsgaSsrKSB7XG4gICAgICAgICAgICBzbm93Zmxha2VzLnB1c2gobmV3IFNub3dmbGFrZSgpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGFuaW1hdGUoKSB7XG4gICAgICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGJhbGxUcmFuc2Zvcm0gPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShiYWxsKS50cmFuc2Zvcm07XG4gICAgICAgICAgICBsZXQgYmFsbFggPSBjYW52YXMud2lkdGggLyAyO1xuICAgICAgICAgICAgbGV0IGJhbGxZID0gY2FudmFzLmhlaWdodCAvIDI7XG4gICAgICAgICAgICBjb25zdCBiYWxsUmFkaXVzID0gYmFsbC5vZmZzZXRXaWR0aCAvIDI7XG4gICAgICAgICAgICBjb25zdCBiYWxsU2hha2luZyA9IGJhbGxUcmFuc2Zvcm0gIT09ICdub25lJztcblxuICAgICAgICAgICAgaWYgKGJhbGxUcmFuc2Zvcm0gIT09ICdub25lJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1hdHJpeCA9IG5ldyBET01NYXRyaXgoYmFsbFRyYW5zZm9ybSk7XG4gICAgICAgICAgICAgICAgYmFsbFggPSBiYWxsLm9mZnNldExlZnQgKyBtYXRyaXgubTQxICsgYmFsbFJhZGl1cztcbiAgICAgICAgICAgICAgICBiYWxsWSA9IGJhbGwub2Zmc2V0VG9wICsgbWF0cml4Lm00MiArIGJhbGxSYWRpdXM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChiYWxsU2hha2luZyAmJiAhbGFzdEJhbGxTaGFraW5nU3RhdGUpIHtcbiAgICAgICAgICAgICAgICBzbm93Zmxha2VzID0gW107XG4gICAgICAgICAgICAgICAgc25vd2ZsYWtlc1JlbW92ZWQgPSAwO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF4U25vd2ZsYWtlczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHNub3dmbGFrZXMucHVzaChuZXcgU25vd2ZsYWtlKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGFzdEJhbGxTaGFraW5nU3RhdGUgPSBiYWxsU2hha2luZztcblxuICAgICAgICAgICAgc25vd2ZsYWtlcy5mb3JFYWNoKHNub3dmbGFrZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFiYWxsU2hha2luZykgc25vd2ZsYWtlLm1vdmVUb0JvdHRvbSgpO1xuICAgICAgICAgICAgICAgIHNub3dmbGFrZS51cGRhdGUoYmFsbFgsIGJhbGxZLCBiYWxsUmFkaXVzLCBiYWxsU2hha2luZyk7XG4gICAgICAgICAgICAgICAgc25vd2ZsYWtlLmRyYXcoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBhbmltYXRlKCk7XG5cbiAgICB9KSgpO1xufSlcblxuLy8gc25vd2ZhbGwgYW5pbWF0aW9cblxuICAgIGxldCBpID0gMTtcbiAgICBmdW5jdGlvbiBzZW5kU2hha2VSZXF1ZXN0KCkge1xuICAgICAgICBpZiAoIXVzZXJJZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRlYnVnKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtcbiAgICAgICAgICAgICAgICAvLyBudW1iZXI6IGkrKyxcbiAgICAgICAgICAgICAgICB0eXBlOiAndGVzdCdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcGFyYW1zID0ge3VzZXJpZDogdXNlcklkfTtcbiAgICAgICAgcmV0dXJuIHJlcXVlc3QoJy9zcGluJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXJhbXMpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGJ0blNoYWtlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9ncmVzc19fc2hha2VcIiksXG4gICAgICAgICAgYmFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3BoZXJlXCIpLFxuICAgICAgICAgIGJhbGxCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNwaGVyZV9fYm94XCIpXG5cbiAgICBsZXQgY3VycmVudFByaXplO1xuICAgIGxldCBwYXN0UHJpemU7XG5cblxuXG4gICAgLy8g0JrQvtC20LXQvSDQutC70LDRgSDQstGW0LTQv9C+0LLRltC00LDRlCDQstC40LPRgNCw0L3QvtC80YMg0L/RgNC40LfRgzpcbiAgICAvLyBcIl9pcGhvbmVcIiAtINCy0LjQs9GA0LDQvdC+IGlQaG9uZVxuICAgIC8vIFwiX3R2XCIgLSDQstC40LPRgNCw0L3QviDRgtC10LvQtdCy0ZbQt9C+0YBcbiAgICAvLyBcIl9qYmxcIiAtINCy0LjQs9GA0LDQvdC+IEpCTC3QutC+0LvQvtC90LrRg1xuICAgIC8vIFwiX21lZ29nb1wiIC0g0LLQuNCz0YDQsNC90L4g0L/RltC00L/QuNGB0LrRgyBNZWdvZ29cbiAgICAvLyBcIl9yZXNwaW5cIiAtINC00L7QtNCw0YLQutC+0LLQtSDQvtCx0LXRgNGC0LDQvdC90Y9cbiAgICAvLyBcIl9ub3RoaW5nXCIgLSDQvdGW0YfQvtCz0L4g0L3QtSDQstC40LPRgNCw0L3QvlxuICAgIC8vIFwiX3BvaW50czUwXCIgLSDQstC40LPRgNCw0L3QviA1MCDQsdC+0L3Rg9GB0L3QuNGFINCx0LDQu9GW0LJcbiAgICAvLyBcIl9mczEwXCIgLSDQstC40LPRgNCw0L3QviAxMCDRhNGA0ZbRgdC/0ZbQvdGW0LJcbiAgICAvLyBcIl9mczI1XCIgLSDQstC40LPRgNCw0L3QviAyNSDRhNGA0ZbRgdC/0ZbQvdGW0LJcbiAgICAvLyBcIl9mczUwXCIgLSDQstC40LPRgNCw0L3QviA1MCDRhNGA0ZbRgdC/0ZbQvdGW0LJcbiAgICAvLyBcIl9zYXZlQmV0MTAwXCIgLSDQstC40LPRgNCw0L3QviDRgdGC0YDQsNGF0L7QstC60YMg0L3QsCAxMDAg0YHRgtCw0LLQvtC6XG4gICAgLy8gXCJfc2F2ZUJldDE1MFwiIC0g0LLQuNCz0YDQsNC90L4g0YHRgtGA0LDRhdC+0LLQutGDINC90LAgMTUwINGB0YLQsNCy0L7QulxuICAgIC8vIFwiX3NhdmVCZXQyMDBcIiAtINCy0LjQs9GA0LDQvdC+INGB0YLRgNCw0YXQvtCy0LrRgyDQvdCwIDIwMCDRgdGC0LDQstC+0LpcbiAgICAvLyDRhNGD0L3QutGG0ZbRjyBpbml0U2hha2Ug0L/RgNC+0LrQuNC00YPRlCDQutC70LDRgdC4INCy0ZbQtNC/0L7QstGW0LTQvdGWINC/0YDQuNC30LDQvCDQvdCwINCx0LvQvtC6IC5zcGhlcmUg0LTQu9GPINCy0ZbQtNC+0LHRgNCw0LbQtdC90L3RjyDQv9GA0LjQt9GDXG4gICAgY29uc3Qgd2luQ2xhc3NlcyA9IFtcbiAgICAgICAgXCJfaXBob25lXCIsIFwiX3R2XCIsIFwiX2pibFwiLCBcIl9tZWdvZ29cIiwgXCJfcmVzcGluXCIsIFwiX25vdGhpbmdcIiwgXCJfZnMxMFwiLCBcIl9mczI1XCIsXG4gICAgICAgIFwiX2ZzNTBcIiwgXCJfc2F2ZUJldDEwMFwiLCBcIl9zYXZlQmV0MTUwXCIsIFwiX3NhdmVCZXQyMDBcIiwgXCJfcG9pbnRzNTBcIlxuICAgIF07XG5cblxuICAgIGZ1bmN0aW9uIHJlbW92ZVByaXplKGJhbGwsIGJveCwgYnRuKXtcbiAgICAgICAgYmFsbC5jbGFzc0xpc3QucmVtb3ZlKFwiX2JlZm9yZS1oaWRlXCIpO1xuICAgICAgICB3aW5DbGFzc2VzLmZvckVhY2goaXRlbSA9PntcbiAgICAgICAgICAgIGJhbGwuY2xhc3NMaXN0LnJlbW92ZShgJHtpdGVtfWApXG4gICAgICAgIH0pXG4gICAgICAgIGJveC5jbGFzc0xpc3QucmVtb3ZlKFwiX2JveC1vcGFjaXR5XCIpXG4gICAgICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiX2Rpc2FibGVkXCIpXG5cbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBhbmltYXRlU2hha2UoYmFsbCwgYm94LCBidG4sIHByaXplLCBwcml6ZU51bSkge1xuXG5cbiAgICAgICAgY29uc3QgZGVsYXkgPSAobXMpID0+IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpXG5cbiAgICAgICAgcmVtb3ZlUHJpemUoYmFsbCwgYm94LCBidG4pXG5cbiAgICAgICAgaWYocHJpemVOdW0pe1xuICAgICAgICAgICAgY29uc29sZS5sb2cocHJpemVOdW0pXG4gICAgICAgICAgICBidG4uY2xhc3NMaXN0LmFkZChcIl9kaXNhYmxlZFwiKTtcbiAgICAgICAgICAgIGJhbGwuY2xhc3NMaXN0LmFkZChcIl9zaGFrZVwiKTtcbiAgICAgICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwiX3NoYWtlLXJldmVyc2VcIik7XG5cbiAgICAgICAgICAgIGF3YWl0IGRlbGF5KDIwMDApXG5cbiAgICAgICAgICAgIGJhbGwuY2xhc3NMaXN0LnJlbW92ZShcIl9zaGFrZVwiKTtcbiAgICAgICAgICAgIGJhbGwuY2xhc3NMaXN0LmFkZChcIl9iZWZvcmUtaGlkZVwiKTtcbiAgICAgICAgICAgIGJveC5jbGFzc0xpc3QucmVtb3ZlKFwiX3NoYWtlLXJldmVyc2VcIik7XG4gICAgICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcIl9ib3gtb3BhY2l0eVwiKTtcblxuICAgICAgICAgICAgYXdhaXQgZGVsYXkoMjAwKTtcblxuICAgICAgICAgICAgYmFsbC5jbGFzc0xpc3QuYWRkKGAke3ByaXplfWApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBidG4uY2xhc3NMaXN0LmFkZChcIl9kaXNhYmxlZFwiKTtcbiAgICAgICAgICAgIGJhbGwuY2xhc3NMaXN0LmFkZChcIl9zaGFrZVwiKTtcbiAgICAgICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwiX3NoYWtlLXJldmVyc2VcIik7XG5cbiAgICAgICAgICAgIC8vIGF3YWl0IGRlbGF5KDIwMDApXG5cbiAgICAgICAgICAgIGJhbGwuY2xhc3NMaXN0LnJlbW92ZShcIl9zaGFrZVwiKTtcbiAgICAgICAgICAgIGJhbGwuY2xhc3NMaXN0LmFkZChcIl9iZWZvcmUtaGlkZVwiKTtcbiAgICAgICAgICAgIGJveC5jbGFzc0xpc3QucmVtb3ZlKFwiX3NoYWtlLXJldmVyc2VcIik7XG4gICAgICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcIl9ib3gtb3BhY2l0eVwiKTtcblxuICAgICAgICAgICAgaWYocHJpemVOdW0gPT09IDApIGF3YWl0IGRlbGF5KDIwMCk7XG5cbiAgICAgICAgICAgIGJhbGwuY2xhc3NMaXN0LmFkZChgJHtwcml6ZX1gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGFzdFByaXplID0gcHJpemU7XG5cblxuICAgIH1cblxuXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcInByaXplTnVtXCIsIDApXG5cblxuICAgIGxldCBwcml6ZVN0YXRlID0gd2luQ2xhc3Nlc1tzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwicHJpemVOdW1cIildXG5cbiAgICBjb25zdCBidG5Qcml6ZTEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpemUxJyk7XG4gICAgY29uc3QgYnRuUHJpemUyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaXplMicpO1xuICAgIGNvbnN0IGJ0blByaXplMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcml6ZTMnKTtcbiAgICBjb25zdCBidG5Qcml6ZTQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpemU0Jyk7XG4gICAgY29uc3QgYnRuUHJpemU1ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaXplNScpO1xuICAgIGNvbnN0IGJ0blByaXplNiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcml6ZTYnKTtcbiAgICBjb25zdCBidG5Qcml6ZTcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpemU3Jyk7XG4gICAgY29uc3QgYnRuUHJpemU4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaXplOCcpO1xuICAgIGNvbnN0IGJ0blByaXplOSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcml6ZTknKTtcbiAgICBjb25zdCBidG5Qcml6ZTEwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaXplMTAnKTtcbiAgICBjb25zdCBidG5Qcml6ZTExID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaXplMTEnKTtcbiAgICBjb25zdCBidG5Qcml6ZTEyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaXplMTInKTtcbiAgICBjb25zdCBidG5Qcml6ZTEzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaXplMTMnKTtcblxuICAgIGZ1bmN0aW9uIHNldFByaXplTnVtKGJ0biwgbnVtKXtcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT57XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwicHJpemVOdW1cIiwgbnVtKVxuICAgICAgICAgICAgcHJpemVTdGF0ZSA9IHdpbkNsYXNzZXNbc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInByaXplTnVtXCIpXVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHNldFByaXplTnVtKGJ0blByaXplMSwgMClcbiAgICBzZXRQcml6ZU51bShidG5Qcml6ZTIsIDEpXG4gICAgc2V0UHJpemVOdW0oYnRuUHJpemUzLCAyKVxuICAgIHNldFByaXplTnVtKGJ0blByaXplNCwgMylcbiAgICBzZXRQcml6ZU51bShidG5Qcml6ZTUsIDQpXG4gICAgc2V0UHJpemVOdW0oYnRuUHJpemU2LCA1KVxuICAgIHNldFByaXplTnVtKGJ0blByaXplNywgNilcbiAgICBzZXRQcml6ZU51bShidG5Qcml6ZTgsIDcpXG4gICAgc2V0UHJpemVOdW0oYnRuUHJpemU5LCA4KVxuICAgIHNldFByaXplTnVtKGJ0blByaXplMTAsOSlcbiAgICBzZXRQcml6ZU51bShidG5Qcml6ZTExLCAxMClcbiAgICBzZXRQcml6ZU51bShidG5Qcml6ZTEyLCAxMSlcbiAgICBzZXRQcml6ZU51bShidG5Qcml6ZTEzLCAxMilcblxuICAgIGZ1bmN0aW9uIGluaXRTaGFrZShiYWxsLCBidG4sIGJveCwgcHJpemVOdW0pIHtcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgICAgIHNlbmRTaGFrZVJlcXVlc3QoKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcyB8fCAhIXJlcy5lcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAvLyBidG5TaGFrZS5jbGFzc0xpc3QuYWRkKCdwdWxzZS1idG4nKTtcbiAgICAgICAgICAgICAgICAgICAgYnRuU2hha2UuY2xhc3NMaXN0LnJlbW92ZSgnX2Rpc2FibGVkJylcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBjb25zdCBwcml6ZSA9IHJlcy5udW1iZXI7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJpemUgPSBwcml6ZVN0YXRlO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0cmVha0JvbnVzID0gcmVzLnN0cmVha0JvbnVzIHx8IGRlYnVnO1xuICAgICAgICAgICAgICAgIGFuaW1hdGVTaGFrZShiYWxsLCBib3gsIGJ0biwgcHJpemUsIHByaXplTnVtKS5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihcImFuaW0gZXJyb3I6XCIsIGVycikpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgaW5pdFNoYWtlKGJhbGwsIGJ0blNoYWtlLCBiYWxsQm94LCBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwicHJpemVOdW1cIikpXG4gICAgaW5pdFNoYWtlKGJhbGwsIGJ0blByaXplMSwgYmFsbEJveClcbiAgICBpbml0U2hha2UoYmFsbCwgYnRuUHJpemUyLCBiYWxsQm94IClcbiAgICBpbml0U2hha2UoYmFsbCwgYnRuUHJpemUzLCBiYWxsQm94IClcbiAgICBpbml0U2hha2UoYmFsbCwgYnRuUHJpemU0LCBiYWxsQm94IClcbiAgICBpbml0U2hha2UoYmFsbCwgYnRuUHJpemU1LCBiYWxsQm94IClcbiAgICBpbml0U2hha2UoYmFsbCwgYnRuUHJpemU2LCBiYWxsQm94IClcbiAgICBpbml0U2hha2UoYmFsbCwgYnRuUHJpemU3LCBiYWxsQm94IClcbiAgICBpbml0U2hha2UoYmFsbCwgYnRuUHJpemU4LCBiYWxsQm94IClcbiAgICBpbml0U2hha2UoYmFsbCwgYnRuUHJpemU5LCBiYWxsQm94IClcbiAgICBpbml0U2hha2UoYmFsbCwgYnRuUHJpemUxMCwgYmFsbEJveCApXG4gICAgaW5pdFNoYWtlKGJhbGwsIGJ0blByaXplMTEsIGJhbGxCb3ggKVxuICAgIGluaXRTaGFrZShiYWxsLCBidG5Qcml6ZTEyLCBiYWxsQm94IClcbiAgICBpbml0U2hha2UoYmFsbCwgYnRuUHJpemUxMywgYmFsbEJveCApXG5cblxuLy8gdGFibGUgdG9nZ2xlXG5cbiAgICBjb25zdCB0b2dnbGVJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJsZV9fdG9nZ2xlLWl0ZW0nKSxcbiAgICAgICAgICB0YWJsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFibGVfX2JvZHknKVxuXG4gICAgdG9nZ2xlSXRlbXMuZm9yRWFjaCgodG9nZ2xlSXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgdG9nZ2xlSXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRvZ2dsZUl0ZW1zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ19hY3RpdmUnKSk7XG4gICAgICAgICAgICB0YWJsZXMuZm9yRWFjaCh0YWJsZSA9PiB0YWJsZS5jbGFzc0xpc3QucmVtb3ZlKCdfYWN0aXZlJykpO1xuICAgICAgICAgICAgdG9nZ2xlSXRlbS5jbGFzc0xpc3QuYWRkKCdfYWN0aXZlJyk7XG4gICAgICAgICAgICB0YWJsZXNbaW5kZXhdLmNsYXNzTGlzdC5hZGQoJ19hY3RpdmUnKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cblxuXG4gICAgY29uc3QgYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYnRuXCIpLFxuICAgICAgICAgIG9zID0gZGV0ZWN0T1MoKVxuXG4gICAgaWYgKG9zID09PSBcIm1hY09TXCIgfHwgb3MgPT09IFwiaU9TXCIpe1xuICAgICAgICBidG5zLmZvckVhY2goYnRuID0+e1xuICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJfaW9zXCIpXG4gICAgICAgIH0pXG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBkZXRlY3RPUygpIHtcbiAgICAgICAgY29uc3QgdXNlckFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudCB8fCBuYXZpZ2F0b3IudmVuZG9yIHx8IHdpbmRvdy5vcGVyYTtcbiAgICAgICAgY29uc3QgcGxhdGZvcm0gPSBuYXZpZ2F0b3IucGxhdGZvcm0gfHwgXCJ1bmtub3duXCI7XG4gICAgICAgIGxldCBvcztcblxuICAgICAgICBpZiAoL2FuZHJvaWQvaS50ZXN0KHVzZXJBZ2VudCkgJiYgL2xpbnV4IGFybS9pLnRlc3QocGxhdGZvcm0pKSB7XG4gICAgICAgICAgICBvcyA9IFwiQW5kcm9pZFwiO1xuICAgICAgICB9XG4gICAgICAgIGlmICgvaVBhZHxpUGhvbmV8aVBvZC8udGVzdCh1c2VyQWdlbnQpICYmICF3aW5kb3cuTVNTdHJlYW0pIHtcbiAgICAgICAgICAgIG9zID0gXCJpT1NcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoL01hY2ludG9zaHxNYWNJbnRlbHxNYWNQUEN8TWFjNjhLLy50ZXN0KHBsYXRmb3JtKSkge1xuICAgICAgICAgICAgb3MgPSBcIm1hY09TXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKC9XaW4zMnxXaW42NHxXaW5kb3dzfFdPVzY0Ly50ZXN0KHBsYXRmb3JtKSkge1xuICAgICAgICAgICAgb3MgPSBcIldpbmRvd3NcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoL0xpbnV4Ly50ZXN0KHBsYXRmb3JtKSAmJiAhL2FuZHJvaWQvaS50ZXN0KHVzZXJBZ2VudCkpIHtcbiAgICAgICAgICAgIG9zID0gXCJMaW51eFwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvc1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKFwi0J7Qv9C10YDQsNGG0ZbQudC90LAg0YHQuNGB0YLQtdC80LA6XCIsIG9zKTtcblxuICAgIGNvbnN0IGhhbmRsZVJlc2l6ZSA9ICgpID0+e1xuICAgICAgICBsZXQgdG91Y2hTdGFydFggPSAwO1xuICAgICAgICBsZXQgdG91Y2hFbmRYID0gMDtcblxuICAgICAgICBjYXJkc0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0b3VjaFN0YXJ0WCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnNjcmVlblg7XG4gICAgICAgIH0sIGZhbHNlKTtcbiAgICAgICAgY2FyZHNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRvdWNoRW5kWCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnNjcmVlblg7XG4gICAgICAgICAgICBoYW5kbGVTd2lwZSgpO1xuICAgICAgICB9LCBmYWxzZSk7XG5cbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlU3dpcGUoKSB7XG4gICAgICAgICAgICBjb25zdCBzd2lwZVRocmVzaG9sZCA9IDUwO1xuICAgICAgICAgICAgaWYgKHRvdWNoRW5kWCA8IHRvdWNoU3RhcnRYIC0gc3dpcGVUaHJlc2hvbGQpIHtcbiAgICAgICAgICAgICAgICBtb3ZlUmlnaHQoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRvdWNoRW5kWCA+IHRvdWNoU3RhcnRYICsgc3dpcGVUaHJlc2hvbGQpIHtcbiAgICAgICAgICAgICAgICBtb3ZlTGVmdCgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbW92ZVJpZ2h0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbW92ZVJpZ2h0KTtcbiAgICAgICAgbW92ZUxlZnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtb3ZlTGVmdCk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwib3JpZW50YXRpb25jaGFuZ2VcIiwgKCkgPT57XG4gICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGhhbmRsZVJlc2l6ZSgpXG5cblxuICAgIC8vIGZvciB0ZXN0XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXJrLWJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZShcImRhcmtcIilcbiAgICB9KVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZW4tYnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mYXYtcGFnZVwiKS5jbGFzc0xpc3QudG9nZ2xlKFwiZW5cIilcbiAgICB9KVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZXN0TWVudVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcml6ZXMtYnRuc1wiKS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKVxuICAgIH0pXG5cbn0pKCk7Il19
