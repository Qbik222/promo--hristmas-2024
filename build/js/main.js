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
            // res.spins = [""];
          }
          // refreshUserInfo(res);
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
      return;
    }
    var spinsContainer = document.querySelector('.spins-row');
    spinsContainer.innerHTML = '';
    spinItem.classList.remove('hide');
    noSpinItem.classList.add('hide');
    spins.forEach(function (spin) {
      var spinDate = new Date(spin.date);
      var formattedDate = spinDate.toLocaleDateString('hr-HR');
      var spinName = translateKey(spin.name) || '';
      var spinElement = document.createElement('div');
      spinElement.classList.add('spins-row-item');
      spinElement.innerHTML = "\n            <span class=\"content-date\">".concat(formattedDate, "</span>\n            <span class=\"content-prize\">").concat(spinName, "</span>\n        ");
      spinsContainer.appendChild(spinElement);
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwidW5hdXRoTXNncyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInBhcnRpY2lwYXRlQnRucyIsIm1haW5QYWdlIiwicXVlcnlTZWxlY3RvciIsImJhbGxXcmFwIiwiZ3VpZGVXcmFwIiwiZ2FtZVdyYXAiLCJ1a0xlbmciLCJlbkxlbmciLCJsb2NhbGUiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJ3ZWVrIiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwibmV3TG9jYWxlIiwic2V0SXRlbSIsInRvZ2dsZVN0YXRlIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJhZGRFdmVudExpc3RlbmVyIiwic3R5bGUiLCJkaXNwbGF5IiwiaTE4bkRhdGEiLCJkZWJ1ZyIsInVzZXJJZCIsIk51bWJlciIsInJlbW92ZUl0ZW0iLCJsb2FkVHJhbnNsYXRpb25zIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsInRyYW5zbGF0ZSIsIm11dGF0aW9uT2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwibXV0YXRpb25zIiwib2JzZXJ2ZSIsImdldEVsZW1lbnRCeUlkIiwiY2hpbGRMaXN0Iiwic3VidHJlZSIsImVsZW1zIiwibGVuZ3RoIiwiZm9yRWFjaCIsImVsZW0iLCJrZXkiLCJnZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJyZW1vdmVBdHRyaWJ1dGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZWZyZXNoTG9jYWxpemVkQ2xhc3MiLCJpbml0IiwiZWxlbWVudCIsImJhc2VDc3NDbGFzcyIsImxhbmciLCJyZW1vdmUiLCJzdG9yZSIsInN0YXRlIiwiZ2V0U3RhdGUiLCJhdXRoIiwiaXNBdXRob3JpemVkIiwiaWQiLCJzZXR1cFBhZ2UiLCJjIiwiaSIsInNldEludGVydmFsIiwiZ191c2VyX2lkIiwiY2hlY2tVc2VyQXV0aCIsImNsZWFySW50ZXJ2YWwiLCJhdXRoQnRuIiwiZSIsInByZXZlbnREZWZhdWx0IiwicGFydGljaXBhdGUiLCJwYXJhbXMiLCJ1c2VyaWQiLCJyZXF1ZXN0IiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJpdGVtIiwibGluayIsImV4dHJhT3B0aW9ucyIsImhlYWRlcnMiLCJ1bmF1dGhNZXMiLCJwb2ludHNQZXJEYXkiLCJzcGluQWxsb3dlZCIsInNwaW5zU3RyZWFrIiwiZGlzcGxheVVzZXJTcGlucyIsInNwaW5zIiwicGFydGljaXBhdGVCdG4iLCJ0cmFuc2xhdGVLZXkiLCJzcGluSXRlbSIsIm5vU3Bpbkl0ZW0iLCJzcGluc0NvbnRhaW5lciIsInNwaW4iLCJzcGluRGF0ZSIsIkRhdGUiLCJkYXRlIiwiZm9ybWF0dGVkRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsInNwaW5OYW1lIiwibmFtZSIsInNwaW5FbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwiY2FyZHNDb250YWluZXIiLCJjYXJkcyIsImNhcmRzV3JhcCIsIm1vdmVSaWdodEJ1dHRvbiIsIm1vdmVMZWZ0QnV0dG9uIiwidGFic0NvbnRhaW5lciIsImlzTW9iaWxlIiwiaW5uZXJXaWR0aCIsInRvdGFsQ2FyZHMiLCJjYXJkV2lkdGgiLCJjbGllbnRXaWR0aCIsImNhcmRzTWFyZ2luIiwidmlzaWJsZVNsaWRlcyIsIk1hdGgiLCJjZWlsIiwidG90YWxUYWJzIiwidGFiV2lkdGgiLCJjdXJyZW50U2xpZGUiLCJjYXJkc1Bvc2l0aW9uIiwibGVmdFNsaWRlIiwicmlnaHRTbGlkZSIsInVwZGF0ZUFjdGl2ZUNhcmQiLCJhY3RpdmVJbmRleCIsImNhcmQiLCJsZWZ0U2xpZGVUYWIiLCJyaWdodFNsaWRlVGFiIiwiZmlyc3RMYXN0U2xpZGVzIiwic2V0Q2FyZHNQb3NpdGlvbiIsInBvc2l0aW9uIiwidHJhbnNmb3JtIiwibW92ZVJpZ2h0IiwibWF4UG9zaXRpb24iLCJoaWRlUG9wdXBzT25CdG4iLCJwcml6ZVBvcHVwSXRlbSIsIm1vdmVMZWZ0Iiwic2V0UG9wdXBzIiwicG9wdXBzIiwicG9wdXBzQnRucyIsImJ0biIsInBvcHVwIiwiaiIsInByaXplT3BlbkJ0bnMiLCJwcml6ZUNsb3NlQnRucyIsImd1aWRlUG9wdXBzV3JhcCIsImd1aWRlT3BlbkJ0bnMiLCJndWlkZUNsb3NlQnRucyIsInRhYmxlUG9wdXAiLCJ0YWJsZVBvcHVwQ2xvc2UiLCJ0YWJsZVBvcHVwT3BlbiIsImJhbGxQb3B1cCIsImJhbGxQb3B1cENsb3NlIiwiYmFsbFBvcHVwT3BlbiIsImNvbnRhaW5zIiwidGFyZ2V0Iiwib3ZlcmZsb3ciLCJDT1VOVCIsIlNub3dzdG9ybSIsIm1hc3RoZWFkIiwiY2FudmFzIiwiY3R4IiwiZ2V0Q29udGV4dCIsIndpZHRoIiwiaGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiYWN0aXZlIiwic25vd2ZsYWtlcyIsInByb3RvdHlwZSIsImxlZnQiLCJ0b3AiLCJvblJlc2l6ZSIsImJpbmQiLCJzbm93Zmxha2UiLCJTbm93Zmxha2UiLCJyZXNldCIsInB1c2giLCJyZXF1ZXN0QW5pbUZyYW1lIiwidXBkYXRlIiwiZmlsbFN0eWxlIiwid2FzQWN0aXZlIiwiY2xlYXJSZWN0IiwieSIsInZ5IiwieCIsInZ4IiwiZ2xvYmFsQWxwaGEiLCJvIiwiYmVnaW5QYXRoIiwiYXJjIiwiciIsIlBJIiwiY2xvc2VQYXRoIiwiZmlsbCIsInNub3dzdG9ybSIsInJhbmRvbSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1velJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbGxiYWNrIiwic2V0VGltZW91dCIsInNraWVzIiwic2t5IiwiYmFsbCIsInBhcmVudEVsZW1lbnQiLCJtYXhTbm93Zmxha2VzIiwibWF4U3BlZWQiLCJzdG9ybUNvdW50ZXIiLCJzbm93Zmxha2VzUmVtb3ZlZCIsInJhZGl1cyIsInNwZWVkWCIsInNwZWVkWSIsImFjY2VsZXJhdGlvbiIsIm1vdmluZ1RvQm90dG9tIiwiYmFsbFgiLCJiYWxsWSIsImJhbGxSYWRpdXMiLCJiYWxsU2hha2luZyIsInRhcmdldFNwZWVkIiwic3BlZWREZWNheUZhY3RvciIsIm1heCIsIm1pbiIsImR4IiwiZHkiLCJkaXN0YW5jZSIsInNxcnQiLCJhbmdsZSIsImF0YW4yIiwib3ZlcmxhcCIsImNvcyIsInNpbiIsInNwbGljZSIsImluZGV4T2YiLCJsYXN0QmFsbFNoYWtpbmdTdGF0ZSIsImFuaW1hdGUiLCJiYWxsVHJhbnNmb3JtIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIm9mZnNldFdpZHRoIiwibWF0cml4IiwiRE9NTWF0cml4Iiwib2Zmc2V0TGVmdCIsIm00MSIsIm9mZnNldFRvcCIsIm00MiIsIm1vdmVUb0JvdHRvbSIsImRyYXciLCJzZW5kU2hha2VSZXF1ZXN0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0eXBlIiwiYnRuU2hha2UiLCJiYWxsQm94IiwiY3VycmVudFByaXplIiwicGFzdFByaXplIiwid2luQ2xhc3NlcyIsInJlbW92ZVByaXplIiwiYm94IiwiYW5pbWF0ZVNoYWtlIiwicHJpemUiLCJwcml6ZU51bSIsImRlbGF5IiwibXMiLCJwcml6ZVN0YXRlIiwiYnRuUHJpemUxIiwiYnRuUHJpemUyIiwiYnRuUHJpemUzIiwiYnRuUHJpemU0IiwiYnRuUHJpemU1IiwiYnRuUHJpemU2IiwiYnRuUHJpemU3IiwiYnRuUHJpemU4IiwiYnRuUHJpemU5IiwiYnRuUHJpemUxMCIsImJ0blByaXplMTEiLCJidG5Qcml6ZTEyIiwiYnRuUHJpemUxMyIsInNldFByaXplTnVtIiwibnVtIiwiaW5pdFNoYWtlIiwiZXJyb3IiLCJzdHJlYWtCb251cyIsImVyciIsInRvZ2dsZUl0ZW1zIiwidGFibGVzIiwidG9nZ2xlSXRlbSIsImluZGV4IiwidGFibGUiLCJidG5zIiwib3MiLCJkZXRlY3RPUyIsInVzZXJBZ2VudCIsIm5hdmlnYXRvciIsInZlbmRvciIsIm9wZXJhIiwicGxhdGZvcm0iLCJ0ZXN0IiwiTVNTdHJlYW0iLCJoYW5kbGVSZXNpemUiLCJ0b3VjaFN0YXJ0WCIsInRvdWNoRW5kWCIsImV2ZW50IiwiY2hhbmdlZFRvdWNoZXMiLCJzY3JlZW5YIiwiaGFuZGxlU3dpcGUiLCJzd2lwZVRocmVzaG9sZCIsInRvZ2dsZSJdLCJtYXBwaW5ncyI6Ijs7K0NBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREEsQ0FBQyxZQUFZO0VBQ1QsSUFBTUEsTUFBTSxHQUFHLHFDQUFxQztFQUVwRCxJQUNJQyxVQUFVLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsYUFBYSxDQUFDO0lBQ3JEQyxlQUFlLEdBQUdGLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsV0FBVyxDQUFDO0lBQ3hERSxRQUFRLEdBQUdILFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLFdBQVcsQ0FBQztJQUM5Q0MsUUFBUSxHQUFHTCxRQUFRLENBQUNJLGFBQWEsQ0FBQyxPQUFPLENBQUM7SUFDMUNFLFNBQVMsR0FBR04sUUFBUSxDQUFDSSxhQUFhLENBQUMsUUFBUSxDQUFDO0lBQzVDRyxRQUFRLEdBQUdQLFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLFFBQVEsQ0FBQztFQUUvQyxJQUFNSSxNQUFNLEdBQUdSLFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLFNBQVMsQ0FBQztFQUNoRCxJQUFNSyxNQUFNLEdBQUdULFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLFNBQVMsQ0FBQztFQUVoRCxJQUFJTSxNQUFNLEdBQUdDLGNBQWMsQ0FBQ0MsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUk7SUFDakRDLElBQUksR0FBRyxDQUFDO0VBRVpDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixJQUFJLENBQUM7RUFFakIsU0FBU0csUUFBUSxDQUFDQyxTQUFTLEVBQUU7SUFDekJQLE1BQU0sR0FBR08sU0FBUztJQUNsQk4sY0FBYyxDQUFDTyxPQUFPLENBQUMsUUFBUSxFQUFFUixNQUFNLENBQUM7RUFDNUM7RUFDQSxTQUFTUyxXQUFXLEdBQUc7SUFDbkIsSUFBTUYsU0FBUyxHQUFH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QUNDLE1BQU0sRUFBRTtJQUNyQixDQUFDLENBQUM7RUFDTixDQUFDO0VBRUQyUixZQUFZLEVBQUU7O0VBR2Q7RUFDQWpULFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDbUIsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQUs7SUFDL0R2QixRQUFRLENBQUNpRixJQUFJLENBQUM3QixTQUFTLENBQUNxUSxNQUFNLENBQUMsTUFBTSxDQUFDO0VBQzFDLENBQUMsQ0FBQztFQUNGelQsUUFBUSxDQUFDSSxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUNtQixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBSztJQUM3RHZCLFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDZ0QsU0FBUyxDQUFDcVEsTUFBTSxDQUFDLElBQUksQ0FBQztFQUM5RCxDQUFDLENBQUM7RUFFRnpULFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDbUIsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQUk7SUFDOUR2QixRQUFRLENBQUNJLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQ2dELFNBQVMsQ0FBQ3FRLE1BQU0sQ0FBQyxNQUFNLENBQUM7RUFDbkUsQ0FBQyxDQUFDO0FBRU4sQ0FBQyxHQUFHIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGFwaVVSTCA9ICdodHRwczovL2Zhdi1wcm9tLmNvbS9hcGlfd2hlZWxfMjAyNSdcblxuICAgIGNvbnN0XG4gICAgICAgIHVuYXV0aE1zZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudW5hdXRoLW1zZycpLFxuICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuLWpvaW4nKSxcbiAgICAgICAgbWFpblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmF2LXBhZ2UnKSxcbiAgICAgICAgYmFsbFdyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhbGxcIiksXG4gICAgICAgIGd1aWRlV3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ3VpZGVcIiksXG4gICAgICAgIGdhbWVXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lc1wiKTtcblxuICAgIGNvbnN0IHVrTGVuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1a0xlbmcnKTtcbiAgICBjb25zdCBlbkxlbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW5MZW5nJyk7XG5cbiAgICBsZXQgbG9jYWxlID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnbG9jYWxlJykgfHwgJ2VuJyxcbiAgICAgICAgd2VlayA9IDE7XG5cbiAgICBjb25zb2xlLmxvZyh3ZWVrKVxuXG4gICAgZnVuY3Rpb24gc2V0U3RhdGUobmV3TG9jYWxlKSB7XG4gICAgICAgIGxvY2FsZSA9IG5ld0xvY2FsZTtcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnbG9jYWxlJywgbG9jYWxlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdG9nZ2xlU3RhdGUoKSB7XG4gICAgICAgIGNvbnN0IG5ld0xvY2FsZSA9IGxvY2FsZSA9PT0gJ2VuJyA/ICd1aycgOiAnZW4nO1xuICAgICAgICBzZXRTdGF0ZShuZXdMb2NhbGUpO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgICB9XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVuLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0b2dnbGVTdGF0ZSgpO1xuICAgIH0pO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWVrLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyh3ZWVrKVxuICAgICAgICBpZih3ZWVrID09PSAxKXtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5fd2VlazEnKS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5fd2VlazInKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAgICAgICAgIHJldHVybiB3ZWVrID0gMlxuICAgICAgICB9XG4gICAgICAgIGlmKHdlZWsgPT09IDIpe1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLl93ZWVrMicpLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLl93ZWVrMScpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgICAgICAgd2VlayA9IDFcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHVrTGVuZykgbG9jYWxlID0gJ3VrJztcbiAgICBpZiAoZW5MZW5nKSBsb2NhbGUgPSAnZW4nO1xuXG5cbiAgICBsZXQgaTE4bkRhdGEgPSB7fTtcbiAgICBjb25zdCBkZWJ1ZyA9IHRydWU7XG4gICAgbGV0IHVzZXJJZDtcbiAgICB1c2VySWQgPSBOdW1iZXIoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKSk7XG5cbiAgICBjb25zb2xlLmxvZyh0eXBlb2YgdXNlcklkKVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2NrLWJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIHVzZXJJZCA/IHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJ1c2VySWRcIikgOiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwidXNlcklkXCIsICcxMDEyMzQ4NjEnKVxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgICB9KVxuXG4gICAgLy8gdXNlcklkID0gOTk5OTtcblxuICAgIGlmKHdlZWsgPT09IDEpe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuX3dlZWsxJykuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXG4gICAgfVxuICAgIGlmKHdlZWsgPT09IDIpe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuX3dlZWsyJykuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9hZFRyYW5zbGF0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke2FwaVVSTH0vdHJhbnNsYXRlcy8ke2xvY2FsZX1gKS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICAgICAgaTE4bkRhdGEgPSBqc29uO1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgdmFyIG11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAobXV0YXRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIG11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFsbCcpLCB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgc3VidHJlZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJhbnNsYXRlKCkge1xuICAgICAgICBjb25zdCBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRyYW5zbGF0ZV0nKVxuICAgICAgICBpZiAoZWxlbXMgJiYgZWxlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBlbGVtcy5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgICAgICAgICAgICAgIGVsZW0uaW5uZXJIVE1MID0gaTE4bkRhdGFba2V5XSB8fCAnKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiAgIGtleTogICcgKyBrZXk7XG4gICAgICAgICAgICAgICAgZWxlbS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJ0cmFuc2xhdGUgd29ya2luZ1wiKVxuICAgICAgICB9XG4gICAgICAgIGlmIChsb2NhbGUgPT09ICdlbicpIHtcbiAgICAgICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5hZGQoJ2VuJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmVmcmVzaExvY2FsaXplZENsYXNzKCk7XG4gICAgfVxuICAgIGxvYWRUcmFuc2xhdGlvbnMoKVxuICAgICAgICAudGhlbihpbml0KTtcbiAgICBmdW5jdGlvbiByZWZyZXNoTG9jYWxpemVkQ2xhc3MoZWxlbWVudCwgYmFzZUNzc0NsYXNzKSB7XG4gICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgbGFuZyBvZiBbJ2hyJywgJ2VuJ10pIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShiYXNlQ3NzQ2xhc3MgKyBsYW5nKTtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYmFzZUNzc0NsYXNzICsgbG9jYWxlKTtcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIGlmICh3aW5kb3cuc3RvcmUpIHtcbiAgICAgICAgICAgIHZhciBzdGF0ZSA9IHdpbmRvdy5zdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgICAgICAgdXNlcklkID0gc3RhdGUuYXV0aC5pc0F1dGhvcml6ZWQgJiYgc3RhdGUuYXV0aC5pZCB8fCAnJztcbiAgICAgICAgICAgIHNldHVwUGFnZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0dXBQYWdlKCk7XG4gICAgICAgICAgICBsZXQgYyA9IDA7XG4gICAgICAgICAgICB2YXIgaSA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoYyA8IDUwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghIXdpbmRvdy5nX3VzZXJfaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZCA9IHdpbmRvdy5nX3VzZXJfaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR1cFBhZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrVXNlckF1dGgoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgIH1cblxuICAgICAgICBjaGVja1VzZXJBdXRoKCk7XG5cbiAgICAgICAgcGFydGljaXBhdGVCdG5zLmZvckVhY2goKGF1dGhCdG4sIGkpID0+IHtcbiAgICAgICAgICAgIGF1dGhCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldHVwUGFnZSgpIHt9XG4gICAgZnVuY3Rpb24gcGFydGljaXBhdGUoKSB7XG4gICAgICAgIGlmICghdXNlcklkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwYXJhbXMgPSB7dXNlcmlkOiB1c2VySWR9O1xuICAgICAgICByZXF1ZXN0KCcvdXNlcicsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGFyYW1zKVxuICAgICAgICB9KS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpKTtcbiAgICAgICAgICAgIGJhbGxXcmFwLmNsYXNzTGlzdC5yZW1vdmUoJ19zaWduJyk7XG4gICAgICAgICAgICBzZXR1cFBhZ2UoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVxdWVzdCA9IGZ1bmN0aW9uIChsaW5rLCBleHRyYU9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKGFwaVVSTCArIGxpbmssIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAuLi4oZXh0cmFPcHRpb25zIHx8IHt9KVxuICAgICAgICB9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrVXNlckF1dGgoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJJZClcbiAgICAgICAgaWYgKHVzZXJJZCkge1xuXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHVuYXV0aE1lcyBvZiB1bmF1dGhNc2dzKSB7XG4gICAgICAgICAgICAgICAgdW5hdXRoTWVzLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlcXVlc3QoYC9mYXZ1c2VyLyR7dXNlcklkfT9ub2NhY2hlPTFgKVxuICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy51c2VyaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFsbFdyYXAuY2xhc3NMaXN0LnJlbW92ZSgnX3NpZ24nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGd1aWRlV3JhcC5jbGFzc0xpc3QucmVtb3ZlKCdfc2lnbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZVdyYXAuY2xhc3NMaXN0LnJlbW92ZSgnX3NpZ24nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFubmVyX19idG5cIikuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZ3Jlc3NcIikuY2xhc3NMaXN0LnJlbW92ZShcIl9zaWduXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRlYnVnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnBvaW50c1BlckRheSA9IDMwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zcGluQWxsb3dlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnNwaW5zU3RyZWFrID0gMztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZXMuc3BpbnMgPSBbXCJcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZWZyZXNoVXNlckluZm8ocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlVc2VyU3BpbnMocmVzLnNwaW5zKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFubmVyX19idG5cIikuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFubmVyX19idG5cIikuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICAgICAgICAgIGZvciAobGV0IHBhcnRpY2lwYXRlQnRuIG9mIHBhcnRpY2lwYXRlQnRucykge1xuICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoY29uc3QgdW5hdXRoTWVzIG9mIHVuYXV0aE1zZ3MpIHtcbiAgICAgICAgICAgICAgICB1bmF1dGhNZXMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJhbnNsYXRlS2V5KGtleSkge1xuICAgICAgICBpZiAoIWtleSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpMThuRGF0YVtrZXldIHx8ICcqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qICAga2V5OiAgJyArIGtleTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5VXNlclNwaW5zKHNwaW5zKSB7XG4gICAgICAgIGNvbnN0IHNwaW5JdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNwaW5zLXJvdycpO1xuICAgICAgICBjb25zdCBub1NwaW5JdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vLXNwaW5zJyk7XG4gICAgICAgIGlmICghc3BpbnMgfHwgc3BpbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBzcGluSXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICBub1NwaW5JdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNwaW5zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNwaW5zLXJvdycpO1xuICAgICAgICBzcGluc0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcblxuICAgICAgICBzcGluSXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgIG5vU3Bpbkl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuXG4gICAgICAgIHNwaW5zLmZvckVhY2goc3BpbiA9PiB7XG4gICAgICAgICAgICBjb25zdCBzcGluRGF0ZSA9IG5ldyBEYXRlKHNwaW4uZGF0ZSk7XG4gICAgICAgICAgICBjb25zdCBmb3JtYXR0ZWREYXRlID0gc3BpbkRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCdoci1IUicpO1xuICAgICAgICAgICAgY29uc3Qgc3Bpbk5hbWUgPSB0cmFuc2xhdGVLZXkoc3Bpbi5uYW1lKSB8fCAnJztcblxuICAgICAgICAgICAgY29uc3Qgc3BpbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHNwaW5FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NwaW5zLXJvdy1pdGVtJyk7XG5cbiAgICAgICAgICAgIHNwaW5FbGVtZW50LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29udGVudC1kYXRlXCI+JHtmb3JtYXR0ZWREYXRlfTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29udGVudC1wcml6ZVwiPiR7c3Bpbk5hbWV9PC9zcGFuPlxuICAgICAgICBgO1xuXG4gICAgICAgICAgICBzcGluc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzcGluRWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgLy8gQ2FyZHMgc2xpZGVyXG4gICAgY29uc3QgY2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpemVfX2xpc3QnKSxcbiAgICAgICAgICBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcml6ZV9fbGlzdC1pdGVtJyksXG4gICAgICAgICAgY2FyZHNXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaXplX19saXN0LXNjcm9sbCcpLFxuICAgICAgICAgIG1vdmVSaWdodEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcml6ZV9fc2xpZGVyLW1vdmUtcmlnaHQnKSxcbiAgICAgICAgICBtb3ZlTGVmdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcml6ZV9fc2xpZGVyLW1vdmUtbGVmdCcpLFxuICAgICAgICAgIHRhYnNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpemVfX3RhYnMnKSxcbiAgICAgICAgICBpc01vYmlsZSA9IHdpbmRvdy5pbm5lcldpZHRoIDwgNjAwLFxuICAgICAgICAgIHRvdGFsQ2FyZHMgPSBjYXJkcy5sZW5ndGgsXG4gICAgICAgICAgY2FyZFdpZHRoID0gY2FyZHNbMF0uY2xpZW50V2lkdGgsXG4gICAgICAgICAgY2FyZHNNYXJnaW4gPSAoY2FyZHNXcmFwLmNsaWVudFdpZHRoIC0gY2FyZFdpZHRoICogdG90YWxDYXJkcykgLyAodG90YWxDYXJkcyAtIDEpLFxuICAgICAgICAgIHZpc2libGVTbGlkZXMgPSBpc01vYmlsZSA/IDEgOiBNYXRoLmNlaWwoY2FyZHNDb250YWluZXIuY2xpZW50V2lkdGggLyAoY2FyZFdpZHRoICsgY2FyZHNNYXJnaW4pKSxcbiAgICAgICAgICB0b3RhbFRhYnMgPSBNYXRoLmNlaWwodG90YWxDYXJkcyAvIHZpc2libGVTbGlkZXMpLFxuICAgICAgICAgIHRhYldpZHRoPSB2aXNpYmxlU2xpZGVzICogKGNhcmRXaWR0aCArIGNhcmRzTWFyZ2luKVxuXG5cbiAgICBsZXQgY3VycmVudFNsaWRlID0gMSxcbiAgICAgICAgY2FyZHNQb3NpdGlvbiA9IDAsXG4gICAgICAgIGxlZnRTbGlkZSxcbiAgICAgICAgcmlnaHRTbGlkZTtcblxuICAgIGNvbnN0IHVwZGF0ZUFjdGl2ZUNhcmQgPSAoY2FyZHMsIGFjdGl2ZUluZGV4KSA9PiB7XG4gICAgICAgIGNhcmRzLmZvckVhY2goKGNhcmQsIGkpID0+e1xuICAgICAgICAgICAgYWN0aXZlSW5kZXggLSAxID09PSBpID8gY2FyZC5jbGFzc0xpc3QuYWRkKFwiX2FjdGl2ZVwiKSA6IGNhcmQuY2xhc3NMaXN0LnJlbW92ZShcIl9hY3RpdmVcIilcbiAgICAgICAgfSlcbiAgICB9XG4gICAgdXBkYXRlQWN0aXZlQ2FyZChjYXJkcywgY3VycmVudFNsaWRlKVxuXG4gICAgZnVuY3Rpb24gbGVmdFNsaWRlVGFiKCl7XG4gICAgICAgIGxlZnRTbGlkZSA9IGN1cnJlbnRTbGlkZVxuICAgIH1cbiAgICBmdW5jdGlvbiByaWdodFNsaWRlVGFiKCl7XG4gICAgICAgIHJpZ2h0U2xpZGUgPSBjdXJyZW50U2xpZGUgKyAodmlzaWJsZVNsaWRlcyAtIDEpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZmlyc3RMYXN0U2xpZGVzKCl7XG4gICAgICAgIGlmKGlzTW9iaWxlKSByZXR1cm5cbiAgICAgICAgbGVmdFNsaWRlVGFiKClcbiAgICAgICAgcmlnaHRTbGlkZVRhYigpXG4gICAgICAgIGNhcmRzLmZvckVhY2goKGNhcmQgLCBpKSA9PntcbiAgICAgICAgICAgIGkgKyAxID09PSBsZWZ0U2xpZGUgPyBjYXJkLmNsYXNzTGlzdC5hZGQoXCJfbGVmdFwiKSA6IGNhcmQuY2xhc3NMaXN0LnJlbW92ZShcIl9sZWZ0XCIpXG4gICAgICAgICAgICBpICsgMSA9PT0gcmlnaHRTbGlkZSA/IGNhcmQuY2xhc3NMaXN0LmFkZChcIl9yaWdodFwiKSA6IGNhcmQuY2xhc3NMaXN0LnJlbW92ZShcIl9yaWdodFwiKVxuICAgICAgICB9KVxuICAgIH1cbiAgICBmaXJzdExhc3RTbGlkZXMoKVxuXG4gICAgZnVuY3Rpb24gc2V0Q2FyZHNQb3NpdGlvbiAocG9zaXRpb24pIHtcbiAgICAgICAgY2FyZHNXcmFwLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKC0ke3Bvc2l0aW9ufXB4KWA7XG4gICAgfTtcbiAgICBjb25zdCBtb3ZlUmlnaHQgPSAoKSA9PiB7XG5cbiAgICAgICAgaWYgKGN1cnJlbnRTbGlkZSA+PSB0b3RhbENhcmRzIC0gKHZpc2libGVTbGlkZXMgLSAxKSAmJiBpc01vYmlsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGZpcnN0TGFzdFNsaWRlcygpXG4gICAgICAgICAgICBjdXJyZW50U2xpZGUgPSAxO1xuICAgICAgICAgICAgY2FyZHNQb3NpdGlvbiA9IDA7XG4gICAgICAgICAgICByaWdodFNsaWRlKytcbiAgICAgICAgICAgIGxlZnRTbGlkZSsrXG4gICAgICAgIH1lbHNlIGlmKGN1cnJlbnRTbGlkZSA9PT0gdG90YWxDYXJkcykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudFNsaWRlKVxuICAgICAgICAgICAgY3VycmVudFNsaWRlID0gMTtcbiAgICAgICAgICAgIGNhcmRzUG9zaXRpb24gPSAwO1xuICAgICAgICB9ZWxzZSBpZihjdXJyZW50U2xpZGUgPT09IHRvdGFsQ2FyZHMgLSAoIHZpc2libGVTbGlkZXMgKyAxKSAmJiBpc01vYmlsZSA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICBjdXJyZW50U2xpZGUgPSB0b3RhbENhcmRzXG4gICAgICAgICAgICBjYXJkc1Bvc2l0aW9uID0gY2FyZHNXcmFwLmNsaWVudFdpZHRoIC0gKHdpbmRvdy5pbm5lcldpZHRoIC0gKGNhcmRzTWFyZ2luIC8gMikpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjYXJkc1Bvc2l0aW9uKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgbWF4UG9zaXRpb24gPSAodG90YWxDYXJkcyAtIHZpc2libGVTbGlkZXMpICogKGNhcmRXaWR0aCArIGNhcmRzTWFyZ2luKTtcbiAgICAgICAgICAgIGlmIChjYXJkc1Bvc2l0aW9uICsgY2FyZFdpZHRoICsgY2FyZHNNYXJnaW4gPiBtYXhQb3NpdGlvbikge1xuICAgICAgICAgICAgICAgIGNhcmRzUG9zaXRpb24gPSBtYXhQb3NpdGlvbjtcbiAgICAgICAgICAgICAgICBjdXJyZW50U2xpZGUgPSB0b3RhbENhcmRzIC0gdmlzaWJsZVNsaWRlcyArIDE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNhcmRzUG9zaXRpb24gKz0gY2FyZFdpZHRoICsgY2FyZHNNYXJnaW47XG4gICAgICAgICAgICAgICAgY3VycmVudFNsaWRlKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc2V0Q2FyZHNQb3NpdGlvbihjYXJkc1Bvc2l0aW9uKTtcbiAgICAgICAgdXBkYXRlQWN0aXZlQ2FyZChjYXJkcywgY3VycmVudFNsaWRlKVxuICAgICAgICBmaXJzdExhc3RTbGlkZXMoKVxuICAgICAgICBoaWRlUG9wdXBzT25CdG4ocHJpemVQb3B1cEl0ZW0pXG4gICAgICAgIC8vIGNlbnRlclBvcHVwKFwiLnByaXplX19saXN0LXBvcHVwXCIpXG5cbiAgICB9O1xuICAgIGNvbnN0IG1vdmVMZWZ0ID0gKCkgPT4ge1xuICAgICAgICBpZihjdXJyZW50U2xpZGUgPT09IDEgJiYgaXNNb2JpbGUgPT09IGZhbHNlKXtcbiAgICAgICAgICAgIGN1cnJlbnRTbGlkZSA9IHRvdGFsQ2FyZHMgLSAodmlzaWJsZVNsaWRlcyAtIDEpO1xuICAgICAgICAgICAgY2FyZHNQb3NpdGlvbiA9ICgodG90YWxDYXJkcyAtICh2aXNpYmxlU2xpZGVzIC0gMSkpICogKGNhcmRXaWR0aCArIGNhcmRzTWFyZ2luKSkgLShjYXJkV2lkdGggKyBjYXJkc01hcmdpbik7XG4gICAgICAgIH1lbHNlIGlmIChjdXJyZW50U2xpZGUgPT09IDIpIHtcbiAgICAgICAgICAgIGNhcmRzUG9zaXRpb24gPSAwXG4gICAgICAgICAgICBjdXJyZW50U2xpZGUgPSAxXG4gICAgICAgIH1lbHNlIGlmKGN1cnJlbnRTbGlkZSA9PT0gMSAmJiBpc01vYmlsZSA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICBjdXJyZW50U2xpZGUgPSB0b3RhbENhcmRzXG4gICAgICAgICAgICBjYXJkc1Bvc2l0aW9uID0gY2FyZHNXcmFwLmNsaWVudFdpZHRoIC0gKHdpbmRvdy5pbm5lcldpZHRoIC0gKGNhcmRzTWFyZ2luIC8gMikpXG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIGNhcmRzUG9zaXRpb24gLT0gY2FyZFdpZHRoICsgY2FyZHNNYXJnaW47XG4gICAgICAgICAgICBjdXJyZW50U2xpZGUtLVxuICAgICAgICB9XG4gICAgICAgIHNldENhcmRzUG9zaXRpb24oY2FyZHNQb3NpdGlvbik7XG4gICAgICAgIHVwZGF0ZUFjdGl2ZUNhcmQoY2FyZHMsIGN1cnJlbnRTbGlkZSlcbiAgICAgICAgZmlyc3RMYXN0U2xpZGVzKClcbiAgICAgICAgaGlkZVBvcHVwc09uQnRuKHByaXplUG9wdXBJdGVtKVxuICAgICAgICAvLyBjZW50ZXJQb3B1cChcIi5wcml6ZV9fbGlzdC1wb3B1cFwiKVxuICAgIH07XG5cbiAgICAvLyBjZW50ZXJQb3B1cChcIi5wcml6ZV9fbGlzdC1wb3B1cFwiKVxuXG5cbiAgICAvLyBwb3B1cHMgbG9naWNcblxuICAgIGZ1bmN0aW9uIHNldFBvcHVwcyhwb3B1cHMsIHBvcHVwc0J0bnMpIHtcbiAgICAgICAgcG9wdXBzQnRucy5mb3JFYWNoKChidG4sIGkpID0+IHtcbiAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBwb3B1cHMuZm9yRWFjaCgocG9wdXAsIGopID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaSA9PT0gaiA/IHBvcHVwLmNsYXNzTGlzdC5hZGQoXCJfcG9wdXBcIikgOiBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwiX3BvcHVwXCIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uICAgaGlkZVBvcHVwc09uQnRuKHBvcHVwcyl7XG4gICAgICAgIHBvcHVwcy5mb3JFYWNoKHBvcHVwID0+e1xuICAgICAgICAgICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwiX3BvcHVwXCIpXG4gICAgICAgIH0pXG4gICAgfVxuXG5cblxuXG5cbi8vIHBvcHVwc1xuICAgIGNvbnN0IHByaXplT3BlbkJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByaXplX19saXN0LWl0ZW0tYnRuXCIpLFxuICAgICAgICAgIHByaXplQ2xvc2VCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcml6ZV9fbGlzdC1wb3B1cC1jbG9zZVwiKSxcbiAgICAgICAgICBndWlkZVBvcHVwc1dyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmd1aWRlX19pdGVtXCIpLFxuICAgICAgICAgIGd1aWRlT3BlbkJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmd1aWRlX19pdGVtLWluZm8tYnRuXCIpLFxuICAgICAgICAgIGd1aWRlQ2xvc2VCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ndWlkZV9faXRlbS1wb3B1cC1jbG9zZVwiKSxcbiAgICAgICAgICB0YWJsZVBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YWJsZV9fcG9wdXBcIiksXG4gICAgICAgICAgdGFibGVQb3B1cENsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YWJsZV9fcG9wdXAtY2xvc2VcIiksXG4gICAgICAgICAgdGFibGVQb3B1cE9wZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhYmxlX19pbmZvXCIpLFxuICAgICAgICAgIGJhbGxQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZ3Jlc3NfX3BvcHVwXCIpLFxuICAgICAgICAgIGJhbGxQb3B1cENsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9ncmVzc19fcG9wdXAtY2xvc2VcIiksXG4gICAgICAgICAgYmFsbFBvcHVwT3BlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZ3Jlc3NfX3BvcHVwLWJ0blwiKSxcbiAgICAgICAgICBwcml6ZVBvcHVwSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJpemVfX2NvbnRhaW5lci1pdGVtXCIpXG5cblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT57XG5cbiAgICAgICAgLy8gIHByaXplUG9wdXBJdGVtLmZvckVhY2goY2FyZCA9PntcbiAgICAgICAgLy8gICAgICAgICBpZihlLnRhcmdldCAhPT0gY2FyZCl7XG4gICAgICAgIC8vICAgICAgICAgICAgIHByaXplT3BlbkJ0bnMuZm9yRWFjaChidG4gPT57XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBpZihlLnRhcmdldCAhPT0gYnRuICYmIGUudGFyZ2V0ICE9PSBjYXJkKXtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldCApXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgLy8gY2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwiX3BvcHVwXCIpXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB9XG4gICAgICAgIC8vICAgICAgICAgICAgIH0pXG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyB9KVxuICAgICAgICBndWlkZVBvcHVwc1dyYXAuZm9yRWFjaChwb3B1cCA9PntcbiAgICAgICAgICAgIGlmKCFwb3B1cC5jb250YWlucyhlLnRhcmdldCkpe1xuICAgICAgICAgICAgICAgIHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoXCJfcG9wdXBcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBpZighYmFsbFBvcHVwLmNvbnRhaW5zKGUudGFyZ2V0KSAmJiBlLnRhcmdldCAhPT0gYmFsbFBvcHVwT3Blbil7XG4gICAgICAgICAgICAgICAgYmFsbFBvcHVwLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgICAgIH1cblxuICAgIH0pXG5cblxuICAgIHNldFBvcHVwcyhwcml6ZVBvcHVwSXRlbSwgcHJpemVPcGVuQnRucyk7XG4gICAgc2V0UG9wdXBzKGd1aWRlUG9wdXBzV3JhcCwgZ3VpZGVPcGVuQnRucyk7XG5cbiAgICBndWlkZUNsb3NlQnRucy5mb3JFYWNoKGJ0biA9PntcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XG4gICAgICAgICAgICAgIGhpZGVQb3B1cHNPbkJ0bihndWlkZVBvcHVwc1dyYXApXG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcHJpemVDbG9zZUJ0bnMuZm9yRWFjaChidG4gPT57XG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xuICAgICAgICAgICAgICBoaWRlUG9wdXBzT25CdG4ocHJpemVQb3B1cEl0ZW0pXG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGFibGVQb3B1cE9wZW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgIHRhYmxlUG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIilcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCJcbiAgICB9KTtcblxuICAgIHRhYmxlUG9wdXBDbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIHRhYmxlUG9wdXAuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiXG4gICAgfSk7XG5cbiAgICBiYWxsUG9wdXBPcGVuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgICAgIGJhbGxQb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKVxuICAgIH0pO1xuXG4gICAgYmFsbFBvcHVwQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICAgICAgYmFsbFBvcHVwLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgfSk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PntcbiAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgQ09VTlQgPSA0MDA7XG5cbiAgICAgICAgZnVuY3Rpb24gU25vd3N0b3JtKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMubWFzdGhlYWQgPSBlbGVtZW50O1xuICAgICAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgICAgIHRoaXMud2lkdGggPSB0aGlzLm1hc3RoZWFkLmNsaWVudFdpZHRoO1xuICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLm1hc3RoZWFkLmNsaWVudEhlaWdodDtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnNub3dmbGFrZXMgPSBbXTtcblxuICAgICAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBTbm93c3Rvcm0ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5sZWZ0ID0gdGhpcy5jYW52YXMuc3R5bGUudG9wID0gJzAnO1xuICAgICAgICAgICAgdGhpcy5tYXN0aGVhZC5hcHBlbmRDaGlsZCh0aGlzLmNhbnZhcyk7XG5cbiAgICAgICAgICAgIHRoaXMub25SZXNpemUoKTtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uUmVzaXplLmJpbmQodGhpcyksIGZhbHNlKTtcblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBDT1VOVDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNub3dmbGFrZSA9IG5ldyB0aGlzLlNub3dmbGFrZSh0aGlzKTtcbiAgICAgICAgICAgICAgICBzbm93Zmxha2UucmVzZXQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNub3dmbGFrZXMucHVzaChzbm93Zmxha2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbUZyYW1lKHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIFNub3dzdG9ybS5wcm90b3R5cGUub25SZXNpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLndpZHRoID0gdGhpcy5tYXN0aGVhZC5jbGllbnRXaWR0aDtcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5tYXN0aGVhZC5jbGllbnRIZWlnaHQ7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHRoaXMud2lkdGg7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB0aGlzLmhlaWdodDtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICcjRkZGJztcblxuICAgICAgICAgICAgdmFyIHdhc0FjdGl2ZSA9IHRoaXMuYWN0aXZlO1xuICAgICAgICAgICAgdGhpcy5hY3RpdmUgPSB0aGlzLndpZHRoID4gODA7XG4gICAgICAgICAgICB0aGlzLndpZHRoID4gMjgwID8gQ09VTlQgPSAxNTAgOiBudWxsXG5cbiAgICAgICAgICAgIGlmICghd2FzQWN0aXZlICYmIHRoaXMuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1GcmFtZSh0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBTbm93c3Rvcm0ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgQ09VTlQ7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBzbm93Zmxha2UgPSB0aGlzLnNub3dmbGFrZXNbaV07XG4gICAgICAgICAgICAgICAgc25vd2ZsYWtlLnkgKz0gc25vd2ZsYWtlLnZ5O1xuICAgICAgICAgICAgICAgIHNub3dmbGFrZS54ICs9IHNub3dmbGFrZS52eDtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4Lmdsb2JhbEFscGhhID0gc25vd2ZsYWtlLm87XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguYXJjKHNub3dmbGFrZS54LCBzbm93Zmxha2UueSwgc25vd2ZsYWtlLnIsIDAsIE1hdGguUEkgKiAyLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHNub3dmbGFrZS55ID4gdGhpcy5oZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgc25vd2ZsYWtlLnJlc2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXF1ZXN0QW5pbUZyYW1lKHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xuICAgICAgICB9O1xuXG4gICAgICAgIFNub3dzdG9ybS5wcm90b3R5cGUuU25vd2ZsYWtlID0gZnVuY3Rpb24gKHNub3dzdG9ybSkge1xuICAgICAgICAgICAgdGhpcy5zbm93c3Rvcm0gPSBzbm93c3Rvcm07XG4gICAgICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgU25vd3N0b3JtLnByb3RvdHlwZS5Tbm93Zmxha2UucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy54ID0gTWF0aC5yYW5kb20oKSAqIHRoaXMuc25vd3N0b3JtLndpZHRoO1xuICAgICAgICAgICAgdGhpcy55ID0gTWF0aC5yYW5kb20oKSAqIC10aGlzLnNub3dzdG9ybS5oZWlnaHQ7XG4gICAgICAgICAgICB0aGlzLnZ5ID0gMC4zICsgTWF0aC5yYW5kb20oKSAqIDAuMDAwMDE7XG4gICAgICAgICAgICB0aGlzLnZ4ID0gMC42IC0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgICAgIHRoaXMuciA9IDEgKyBNYXRoLnJhbmRvbSgpICogMjtcbiAgICAgICAgICAgIHRoaXMubyA9IDE7XG4gICAgICAgIH07XG5cbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltRnJhbWUgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgICAgICAgICB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgICAgICAgICAgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChjYWxsYmFjaywgMTAwMCAvIDYwKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICB9KSgpO1xuXG4gICAgICAgIHZhciBza2llcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5za3knKTtcbiAgICAgICAgc2tpZXMuZm9yRWFjaChmdW5jdGlvbiAoc2t5KSB7XG4gICAgICAgICAgICBuZXcgU25vd3N0b3JtKHNreSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGJhbGwgc2hha2Ugc25vd1xuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc25vd0NhbnZhcycpO1xuICAgICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgY29uc3QgYmFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zcGhlcmUnKTtcblxuICAgICAgICBjYW52YXMud2lkdGggPSBjYW52YXMucGFyZW50RWxlbWVudC5jbGllbnRXaWR0aDtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGNhbnZhcy5wYXJlbnRFbGVtZW50LmNsaWVudEhlaWdodDtcblxuICAgICAgICBsZXQgc25vd2ZsYWtlcyA9IFtdO1xuICAgICAgICBjb25zdCBtYXhTbm93Zmxha2VzID0gMTAwO1xuICAgICAgICBjb25zdCBtYXhTcGVlZCA9IDc7XG4gICAgICAgIGxldCBzdG9ybUNvdW50ZXIgPSAxXG5cblxuICAgICAgICBsZXQgc25vd2ZsYWtlc1JlbW92ZWQgPSAwO1xuXG4gICAgICAgIGNsYXNzIFNub3dmbGFrZSB7XG4gICAgICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnggPSBNYXRoLnJhbmRvbSgpICogY2FudmFzLndpZHRoO1xuICAgICAgICAgICAgICAgIHRoaXMueSA9IE1hdGgucmFuZG9tKCkgKiBjYW52YXMuaGVpZ2h0O1xuICAgICAgICAgICAgICAgIHRoaXMucmFkaXVzID0gTWF0aC5yYW5kb20oKSAqIDMgKyAxO1xuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWRYID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMTA7XG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlZFkgPSBNYXRoLnJhbmRvbSgpICogMS41ICsgMTtcbiAgICAgICAgICAgICAgICB0aGlzLmFjY2VsZXJhdGlvbiA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZpbmdUb0JvdHRvbSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1cGRhdGUoYmFsbFgsIGJhbGxZLCBiYWxsUmFkaXVzLCBiYWxsU2hha2luZykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1vdmluZ1RvQm90dG9tKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldFNwZWVkID0gMC4xO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzcGVlZERlY2F5RmFjdG9yID0gMC4wNTsgLy8g0JrQvtC10YTRltGG0ZbRlNC90YIg0LTQu9GPINC/0LvQsNCy0L3QvtCz0L4g0YHQv9C+0LLRltC70YzQvdC10L3QvdGPXG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGVlZFggPSB0aGlzLnNwZWVkWCAtICh0aGlzLnNwZWVkWCAtIHRhcmdldFNwZWVkKSAqIHNwZWVkRGVjYXlGYWN0b3I7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3BlZWRZID0gdGhpcy5zcGVlZFkgLSAodGhpcy5zcGVlZFkgLSB0YXJnZXRTcGVlZCkgKiBzcGVlZERlY2F5RmFjdG9yO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vINCe0L3QvtCy0LvQtdC90L3RjyDQv9C+0LfQuNGG0ZbRlyDRgdC90ZbQttC40L3QutC4XG4gICAgICAgICAgICAgICAgICAgIHRoaXMueSArPSB0aGlzLnNwZWVkWTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy55ID4gY2FudmFzLmhlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy54ICs9IHRoaXMuc3BlZWRYO1xuICAgICAgICAgICAgICAgIHRoaXMueSArPSB0aGlzLnNwZWVkWTtcblxuICAgICAgICAgICAgICAgIC8vINCe0LHQvNC10LbQtdC90L3RjyDRiNCy0LjQtNC60L7RgdGC0ZZcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVkWCA9IE1hdGgubWF4KC1tYXhTcGVlZCwgTWF0aC5taW4obWF4U3BlZWQsIHRoaXMuc3BlZWRYKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlZFkgPSBNYXRoLm1heCgtbWF4U3BlZWQsIE1hdGgubWluKG1heFNwZWVkLCB0aGlzLnNwZWVkWSkpO1xuXG4gICAgICAgICAgICAgICAgLy8g0JTQvtC00LDQstCw0L3QvdGPINGI0LLQuNC00LrQvtGB0YLRliDRh9C10YDQtdC3IFwi0YLRgNGD0YHRltC90L3Rj1wiINC60YPQu9GWXG4gICAgICAgICAgICAgICAgaWYgKGJhbGxTaGFraW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWNjZWxlcmF0aW9uICs9IDAuMDU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY2NlbGVyYXRpb24gKj0gMC45NTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlZFggKz0gdGhpcy5hY2NlbGVyYXRpb24gKiAoTWF0aC5yYW5kb20oKSAtIDAuNSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlZFkgKz0gdGhpcy5hY2NlbGVyYXRpb24gKiAoTWF0aC5yYW5kb20oKSAtIDAuNSk7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy55ID4gY2FudmFzLmhlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnkgPSAwO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnggPSBNYXRoLnJhbmRvbSgpICogY2FudmFzLndpZHRoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy54ID4gY2FudmFzLndpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMueCA9IDA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnggPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMueCA9IGNhbnZhcy53aWR0aDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyDQktGW0LTRgdGC0LDQvdGMINC00L4g0YbQtdC90YLRgNGDINC60YPQu9GWXG4gICAgICAgICAgICAgICAgY29uc3QgZHggPSB0aGlzLnggLSBiYWxsWDtcbiAgICAgICAgICAgICAgICBjb25zdCBkeSA9IHRoaXMueSAtIGJhbGxZO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcblxuICAgICAgICAgICAgICAgIC8vINCS0ZbQtNGB0LrQvtC6INCy0ZbQtCDQutGD0LvRllxuICAgICAgICAgICAgICAgIGlmIChkaXN0YW5jZSA8IGJhbGxSYWRpdXMgKyB0aGlzLnJhZGl1cykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhbmdsZSA9IE1hdGguYXRhbjIoZHksIGR4KTsgLy8g0JrRg9GCINC30ZbRgtC60L3QtdC90L3Rj1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBvdmVybGFwID0gYmFsbFJhZGl1cyArIHRoaXMucmFkaXVzIC0gZGlzdGFuY2U7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8g0J/QtdGA0LXQvNGW0YnQtdC90L3RjyDRgdC90ZbQttC40L3QutC4XG4gICAgICAgICAgICAgICAgICAgIHRoaXMueCArPSBNYXRoLmNvcyhhbmdsZSkgKiBvdmVybGFwO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnkgKz0gTWF0aC5zaW4oYW5nbGUpICogb3ZlcmxhcDtcblxuICAgICAgICAgICAgICAgICAgICAvLyDQoNC10LLQtdGA0YEg0YjQstC40LTQutC+0YHRgtGWXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3BlZWRYICo9IC0wLjc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3BlZWRZICo9IC0wLjc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtb3ZlVG9Cb3R0b20oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZpbmdUb0JvdHRvbSA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlbW92ZSgpIHtcbiAgICAgICAgICAgICAgICBzbm93Zmxha2VzLnNwbGljZShzbm93Zmxha2VzLmluZGV4T2YodGhpcyksIDEpO1xuICAgICAgICAgICAgICAgIHNub3dmbGFrZXNSZW1vdmVkKys7XG4gICAgICAgICAgICAgICAgaWYgKHN0b3JtQ291bnRlciA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBuZXcgU25vd3N0b3JtKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3BoZXJlX19ib2R5XCIpKTtcbiAgICAgICAgICAgICAgICAgICAgc3Rvcm1Db3VudGVyKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkcmF3KCkge1xuICAgICAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICBjdHguYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgMCwgTWF0aC5QSSAqIDIpO1xuICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSAnd2hpdGUnO1xuICAgICAgICAgICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGxhc3RCYWxsU2hha2luZ1N0YXRlID0gZmFsc2U7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXhTbm93Zmxha2VzOyBpKyspIHtcbiAgICAgICAgICAgIHNub3dmbGFrZXMucHVzaChuZXcgU25vd2ZsYWtlKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgICAgICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcblxuICAgICAgICAgICAgY29uc3QgYmFsbFRyYW5zZm9ybSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGJhbGwpLnRyYW5zZm9ybTtcbiAgICAgICAgICAgIGxldCBiYWxsWCA9IGNhbnZhcy53aWR0aCAvIDI7XG4gICAgICAgICAgICBsZXQgYmFsbFkgPSBjYW52YXMuaGVpZ2h0IC8gMjtcbiAgICAgICAgICAgIGNvbnN0IGJhbGxSYWRpdXMgPSBiYWxsLm9mZnNldFdpZHRoIC8gMjtcbiAgICAgICAgICAgIGNvbnN0IGJhbGxTaGFraW5nID0gYmFsbFRyYW5zZm9ybSAhPT0gJ25vbmUnO1xuXG4gICAgICAgICAgICBpZiAoYmFsbFRyYW5zZm9ybSAhPT0gJ25vbmUnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWF0cml4ID0gbmV3IERPTU1hdHJpeChiYWxsVHJhbnNmb3JtKTtcbiAgICAgICAgICAgICAgICBiYWxsWCA9IGJhbGwub2Zmc2V0TGVmdCArIG1hdHJpeC5tNDEgKyBiYWxsUmFkaXVzO1xuICAgICAgICAgICAgICAgIGJhbGxZID0gYmFsbC5vZmZzZXRUb3AgKyBtYXRyaXgubTQyICsgYmFsbFJhZGl1cztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGJhbGxTaGFraW5nICYmICFsYXN0QmFsbFNoYWtpbmdTdGF0ZSkge1xuICAgICAgICAgICAgICAgIHNub3dmbGFrZXMgPSBbXTtcbiAgICAgICAgICAgICAgICBzbm93Zmxha2VzUmVtb3ZlZCA9IDA7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXhTbm93Zmxha2VzOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc25vd2ZsYWtlcy5wdXNoKG5ldyBTbm93Zmxha2UoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsYXN0QmFsbFNoYWtpbmdTdGF0ZSA9IGJhbGxTaGFraW5nO1xuXG4gICAgICAgICAgICBzbm93Zmxha2VzLmZvckVhY2goc25vd2ZsYWtlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWJhbGxTaGFraW5nKSBzbm93Zmxha2UubW92ZVRvQm90dG9tKCk7XG4gICAgICAgICAgICAgICAgc25vd2ZsYWtlLnVwZGF0ZShiYWxsWCwgYmFsbFksIGJhbGxSYWRpdXMsIGJhbGxTaGFraW5nKTtcbiAgICAgICAgICAgICAgICBzbm93Zmxha2UuZHJhdygpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFuaW1hdGUoKTtcblxuICAgIH0pKCk7XG59KVxuXG4vLyBzbm93ZmFsbCBhbmltYXRpb1xuXG4gICAgbGV0IGkgPSAxO1xuICAgIGZ1bmN0aW9uIHNlbmRTaGFrZVJlcXVlc3QoKSB7XG4gICAgICAgIGlmICghdXNlcklkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGVidWcpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgICAgICAgICAgIC8vIG51bWJlcjogaSsrLFxuICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXN0J1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwYXJhbXMgPSB7dXNlcmlkOiB1c2VySWR9O1xuICAgICAgICByZXR1cm4gcmVxdWVzdCgnL3NwaW4nLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhcmFtcylcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgYnRuU2hha2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2dyZXNzX19zaGFrZVwiKSxcbiAgICAgICAgICBiYWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zcGhlcmVcIiksXG4gICAgICAgICAgYmFsbEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3BoZXJlX19ib3hcIilcblxuICAgIGxldCBjdXJyZW50UHJpemU7XG4gICAgbGV0IHBhc3RQcml6ZTtcblxuXG5cbiAgICAvLyDQmtC+0LbQtdC9INC60LvQsNGBINCy0ZbQtNC/0L7QstGW0LTQsNGUINCy0LjQs9GA0LDQvdC+0LzRgyDQv9GA0LjQt9GDOlxuICAgIC8vIFwiX2lwaG9uZVwiIC0g0LLQuNCz0YDQsNC90L4gaVBob25lXG4gICAgLy8gXCJfdHZcIiAtINCy0LjQs9GA0LDQvdC+INGC0LXQu9C10LLRltC30L7RgFxuICAgIC8vIFwiX2pibFwiIC0g0LLQuNCz0YDQsNC90L4gSkJMLdC60L7Qu9C+0L3QutGDXG4gICAgLy8gXCJfbWVnb2dvXCIgLSDQstC40LPRgNCw0L3QviDQv9GW0LTQv9C40YHQutGDIE1lZ29nb1xuICAgIC8vIFwiX3Jlc3BpblwiIC0g0LTQvtC00LDRgtC60L7QstC1INC+0LHQtdGA0YLQsNC90L3Rj1xuICAgIC8vIFwiX25vdGhpbmdcIiAtINC90ZbRh9C+0LPQviDQvdC1INCy0LjQs9GA0LDQvdC+XG4gICAgLy8gXCJfcG9pbnRzNTBcIiAtINCy0LjQs9GA0LDQvdC+IDUwINCx0L7QvdGD0YHQvdC40YUg0LHQsNC70ZbQslxuICAgIC8vIFwiX2ZzMTBcIiAtINCy0LjQs9GA0LDQvdC+IDEwINGE0YDRltGB0L/RltC90ZbQslxuICAgIC8vIFwiX2ZzMjVcIiAtINCy0LjQs9GA0LDQvdC+IDI1INGE0YDRltGB0L/RltC90ZbQslxuICAgIC8vIFwiX2ZzNTBcIiAtINCy0LjQs9GA0LDQvdC+IDUwINGE0YDRltGB0L/RltC90ZbQslxuICAgIC8vIFwiX3NhdmVCZXQxMDBcIiAtINCy0LjQs9GA0LDQvdC+INGB0YLRgNCw0YXQvtCy0LrRgyDQvdCwIDEwMCDRgdGC0LDQstC+0LpcbiAgICAvLyBcIl9zYXZlQmV0MTUwXCIgLSDQstC40LPRgNCw0L3QviDRgdGC0YDQsNGF0L7QstC60YMg0L3QsCAxNTAg0YHRgtCw0LLQvtC6XG4gICAgLy8gXCJfc2F2ZUJldDIwMFwiIC0g0LLQuNCz0YDQsNC90L4g0YHRgtGA0LDRhdC+0LLQutGDINC90LAgMjAwINGB0YLQsNCy0L7QulxuICAgIC8vINGE0YPQvdC60YbRltGPIGluaXRTaGFrZSDQv9GA0L7QutC40LTRg9GUINC60LvQsNGB0Lgg0LLRltC00L/QvtCy0ZbQtNC90ZYg0L/RgNC40LfQsNC8INC90LAg0LHQu9C+0LogLnNwaGVyZSDQtNC70Y8g0LLRltC00L7QsdGA0LDQttC10L3QvdGPINC/0YDQuNC30YNcbiAgICBjb25zdCB3aW5DbGFzc2VzID0gW1xuICAgICAgICBcIl9pcGhvbmVcIiwgXCJfdHZcIiwgXCJfamJsXCIsIFwiX21lZ29nb1wiLCBcIl9yZXNwaW5cIiwgXCJfbm90aGluZ1wiLCBcIl9mczEwXCIsIFwiX2ZzMjVcIixcbiAgICAgICAgXCJfZnM1MFwiLCBcIl9zYXZlQmV0MTAwXCIsIFwiX3NhdmVCZXQxNTBcIiwgXCJfc2F2ZUJldDIwMFwiLCBcIl9wb2ludHM1MFwiXG4gICAgXTtcblxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlUHJpemUoYmFsbCwgYm94LCBidG4pe1xuICAgICAgICBiYWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJfYmVmb3JlLWhpZGVcIik7XG4gICAgICAgIHdpbkNsYXNzZXMuZm9yRWFjaChpdGVtID0+e1xuICAgICAgICAgICAgYmFsbC5jbGFzc0xpc3QucmVtb3ZlKGAke2l0ZW19YClcbiAgICAgICAgfSlcbiAgICAgICAgYm94LmNsYXNzTGlzdC5yZW1vdmUoXCJfYm94LW9wYWNpdHlcIilcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJfZGlzYWJsZWRcIilcblxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGFuaW1hdGVTaGFrZShiYWxsLCBib3gsIGJ0biwgcHJpemUsIHByaXplTnVtKSB7XG5cblxuICAgICAgICBjb25zdCBkZWxheSA9IChtcykgPT4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSlcblxuICAgICAgICByZW1vdmVQcml6ZShiYWxsLCBib3gsIGJ0bilcblxuICAgICAgICBpZihwcml6ZU51bSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcml6ZU51bSlcbiAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiX2Rpc2FibGVkXCIpO1xuICAgICAgICAgICAgYmFsbC5jbGFzc0xpc3QuYWRkKFwiX3NoYWtlXCIpO1xuICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJfc2hha2UtcmV2ZXJzZVwiKTtcblxuICAgICAgICAgICAgYXdhaXQgZGVsYXkoMjAwMClcblxuICAgICAgICAgICAgYmFsbC5jbGFzc0xpc3QucmVtb3ZlKFwiX3NoYWtlXCIpO1xuICAgICAgICAgICAgYmFsbC5jbGFzc0xpc3QuYWRkKFwiX2JlZm9yZS1oaWRlXCIpO1xuICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5yZW1vdmUoXCJfc2hha2UtcmV2ZXJzZVwiKTtcbiAgICAgICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwiX2JveC1vcGFjaXR5XCIpO1xuXG4gICAgICAgICAgICBhd2FpdCBkZWxheSgyMDApO1xuXG4gICAgICAgICAgICBiYWxsLmNsYXNzTGlzdC5hZGQoYCR7cHJpemV9YCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiX2Rpc2FibGVkXCIpO1xuICAgICAgICAgICAgYmFsbC5jbGFzc0xpc3QuYWRkKFwiX3NoYWtlXCIpO1xuICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJfc2hha2UtcmV2ZXJzZVwiKTtcblxuICAgICAgICAgICAgLy8gYXdhaXQgZGVsYXkoMjAwMClcblxuICAgICAgICAgICAgYmFsbC5jbGFzc0xpc3QucmVtb3ZlKFwiX3NoYWtlXCIpO1xuICAgICAgICAgICAgYmFsbC5jbGFzc0xpc3QuYWRkKFwiX2JlZm9yZS1oaWRlXCIpO1xuICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5yZW1vdmUoXCJfc2hha2UtcmV2ZXJzZVwiKTtcbiAgICAgICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwiX2JveC1vcGFjaXR5XCIpO1xuXG4gICAgICAgICAgICBpZihwcml6ZU51bSA9PT0gMCkgYXdhaXQgZGVsYXkoMjAwKTtcblxuICAgICAgICAgICAgYmFsbC5jbGFzc0xpc3QuYWRkKGAke3ByaXplfWApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXN0UHJpemUgPSBwcml6ZTtcblxuXG4gICAgfVxuXG5cbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwicHJpemVOdW1cIiwgMClcblxuXG4gICAgbGV0IHByaXplU3RhdGUgPSB3aW5DbGFzc2VzW3Nlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJwcml6ZU51bVwiKV1cblxuICAgIGNvbnN0IGJ0blByaXplMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcml6ZTEnKTtcbiAgICBjb25zdCBidG5Qcml6ZTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpemUyJyk7XG4gICAgY29uc3QgYnRuUHJpemUzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaXplMycpO1xuICAgIGNvbnN0IGJ0blByaXplNCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcml6ZTQnKTtcbiAgICBjb25zdCBidG5Qcml6ZTUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpemU1Jyk7XG4gICAgY29uc3QgYnRuUHJpemU2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaXplNicpO1xuICAgIGNvbnN0IGJ0blByaXplNyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcml6ZTcnKTtcbiAgICBjb25zdCBidG5Qcml6ZTggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpemU4Jyk7XG4gICAgY29uc3QgYnRuUHJpemU5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaXplOScpO1xuICAgIGNvbnN0IGJ0blByaXplMTAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpemUxMCcpO1xuICAgIGNvbnN0IGJ0blByaXplMTEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpemUxMScpO1xuICAgIGNvbnN0IGJ0blByaXplMTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpemUxMicpO1xuICAgIGNvbnN0IGJ0blByaXplMTMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpemUxMycpO1xuXG4gICAgZnVuY3Rpb24gc2V0UHJpemVOdW0oYnRuLCBudW0pe1xuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PntcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJwcml6ZU51bVwiLCBudW0pXG4gICAgICAgICAgICBwcml6ZVN0YXRlID0gd2luQ2xhc3Nlc1tzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwicHJpemVOdW1cIildXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgc2V0UHJpemVOdW0oYnRuUHJpemUxLCAwKVxuICAgIHNldFByaXplTnVtKGJ0blByaXplMiwgMSlcbiAgICBzZXRQcml6ZU51bShidG5Qcml6ZTMsIDIpXG4gICAgc2V0UHJpemVOdW0oYnRuUHJpemU0LCAzKVxuICAgIHNldFByaXplTnVtKGJ0blByaXplNSwgNClcbiAgICBzZXRQcml6ZU51bShidG5Qcml6ZTYsIDUpXG4gICAgc2V0UHJpemVOdW0oYnRuUHJpemU3LCA2KVxuICAgIHNldFByaXplTnVtKGJ0blByaXplOCwgNylcbiAgICBzZXRQcml6ZU51bShidG5Qcml6ZTksIDgpXG4gICAgc2V0UHJpemVOdW0oYnRuUHJpemUxMCw5KVxuICAgIHNldFByaXplTnVtKGJ0blByaXplMTEsIDEwKVxuICAgIHNldFByaXplTnVtKGJ0blByaXplMTIsIDExKVxuICAgIHNldFByaXplTnVtKGJ0blByaXplMTMsIDEyKVxuXG4gICAgZnVuY3Rpb24gaW5pdFNoYWtlKGJhbGwsIGJ0biwgYm94LCBwcml6ZU51bSkge1xuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICAgICAgc2VuZFNoYWtlUmVxdWVzdCgpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAgICAgICAgIGlmICghcmVzIHx8ICEhcmVzLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGJ0blNoYWtlLmNsYXNzTGlzdC5hZGQoJ3B1bHNlLWJ0bicpO1xuICAgICAgICAgICAgICAgICAgICBidG5TaGFrZS5jbGFzc0xpc3QucmVtb3ZlKCdfZGlzYWJsZWQnKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IHByaXplID0gcmVzLm51bWJlcjtcbiAgICAgICAgICAgICAgICBjb25zdCBwcml6ZSA9IHByaXplU3RhdGU7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RyZWFrQm9udXMgPSByZXMuc3RyZWFrQm9udXMgfHwgZGVidWc7XG4gICAgICAgICAgICAgICAgYW5pbWF0ZVNoYWtlKGJhbGwsIGJveCwgYnRuLCBwcml6ZSwgcHJpemVOdW0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKFwiYW5pbSBlcnJvcjpcIiwgZXJyKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBpbml0U2hha2UoYmFsbCwgYnRuU2hha2UsIGJhbGxCb3gsIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJwcml6ZU51bVwiKSlcbiAgICBpbml0U2hha2UoYmFsbCwgYnRuUHJpemUxLCBiYWxsQm94KVxuICAgIGluaXRTaGFrZShiYWxsLCBidG5Qcml6ZTIsIGJhbGxCb3ggKVxuICAgIGluaXRTaGFrZShiYWxsLCBidG5Qcml6ZTMsIGJhbGxCb3ggKVxuICAgIGluaXRTaGFrZShiYWxsLCBidG5Qcml6ZTQsIGJhbGxCb3ggKVxuICAgIGluaXRTaGFrZShiYWxsLCBidG5Qcml6ZTUsIGJhbGxCb3ggKVxuICAgIGluaXRTaGFrZShiYWxsLCBidG5Qcml6ZTYsIGJhbGxCb3ggKVxuICAgIGluaXRTaGFrZShiYWxsLCBidG5Qcml6ZTcsIGJhbGxCb3ggKVxuICAgIGluaXRTaGFrZShiYWxsLCBidG5Qcml6ZTgsIGJhbGxCb3ggKVxuICAgIGluaXRTaGFrZShiYWxsLCBidG5Qcml6ZTksIGJhbGxCb3ggKVxuICAgIGluaXRTaGFrZShiYWxsLCBidG5Qcml6ZTEwLCBiYWxsQm94IClcbiAgICBpbml0U2hha2UoYmFsbCwgYnRuUHJpemUxMSwgYmFsbEJveCApXG4gICAgaW5pdFNoYWtlKGJhbGwsIGJ0blByaXplMTIsIGJhbGxCb3ggKVxuICAgIGluaXRTaGFrZShiYWxsLCBidG5Qcml6ZTEzLCBiYWxsQm94IClcblxuXG4vLyB0YWJsZSB0b2dnbGVcblxuICAgIGNvbnN0IHRvZ2dsZUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYmxlX190b2dnbGUtaXRlbScpLFxuICAgICAgICAgIHRhYmxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJsZV9fYm9keScpXG5cbiAgICB0b2dnbGVJdGVtcy5mb3JFYWNoKCh0b2dnbGVJdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICB0b2dnbGVJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdG9nZ2xlSXRlbXMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnX2FjdGl2ZScpKTtcbiAgICAgICAgICAgIHRhYmxlcy5mb3JFYWNoKHRhYmxlID0+IHRhYmxlLmNsYXNzTGlzdC5yZW1vdmUoJ19hY3RpdmUnKSk7XG4gICAgICAgICAgICB0b2dnbGVJdGVtLmNsYXNzTGlzdC5hZGQoJ19hY3RpdmUnKTtcbiAgICAgICAgICAgIHRhYmxlc1tpbmRleF0uY2xhc3NMaXN0LmFkZCgnX2FjdGl2ZScpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuXG5cbiAgICBjb25zdCBidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5idG5cIiksXG4gICAgICAgICAgb3MgPSBkZXRlY3RPUygpXG5cbiAgICBpZiAob3MgPT09IFwibWFjT1NcIiB8fCBvcyA9PT0gXCJpT1NcIil7XG4gICAgICAgIGJ0bnMuZm9yRWFjaChidG4gPT57XG4gICAgICAgICAgICBidG4uY2xhc3NMaXN0LmFkZChcIl9pb3NcIilcbiAgICAgICAgfSlcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIGRldGVjdE9TKCkge1xuICAgICAgICBjb25zdCB1c2VyQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50IHx8IG5hdmlnYXRvci52ZW5kb3IgfHwgd2luZG93Lm9wZXJhO1xuICAgICAgICBjb25zdCBwbGF0Zm9ybSA9IG5hdmlnYXRvci5wbGF0Zm9ybSB8fCBcInVua25vd25cIjtcbiAgICAgICAgbGV0IG9zO1xuXG4gICAgICAgIGlmICgvYW5kcm9pZC9pLnRlc3QodXNlckFnZW50KSAmJiAvbGludXggYXJtL2kudGVzdChwbGF0Zm9ybSkpIHtcbiAgICAgICAgICAgIG9zID0gXCJBbmRyb2lkXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKC9pUGFkfGlQaG9uZXxpUG9kLy50ZXN0KHVzZXJBZ2VudCkgJiYgIXdpbmRvdy5NU1N0cmVhbSkge1xuICAgICAgICAgICAgb3MgPSBcImlPU1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmICgvTWFjaW50b3NofE1hY0ludGVsfE1hY1BQQ3xNYWM2OEsvLnRlc3QocGxhdGZvcm0pKSB7XG4gICAgICAgICAgICBvcyA9IFwibWFjT1NcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoL1dpbjMyfFdpbjY0fFdpbmRvd3N8V09XNjQvLnRlc3QocGxhdGZvcm0pKSB7XG4gICAgICAgICAgICBvcyA9IFwiV2luZG93c1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmICgvTGludXgvLnRlc3QocGxhdGZvcm0pICYmICEvYW5kcm9pZC9pLnRlc3QodXNlckFnZW50KSkge1xuICAgICAgICAgICAgb3MgPSBcIkxpbnV4XCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9zXG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coXCLQntC/0LXRgNCw0YbRltC50L3QsCDRgdC40YHRgtC10LzQsDpcIiwgb3MpO1xuXG4gICAgY29uc3QgaGFuZGxlUmVzaXplID0gKCkgPT57XG4gICAgICAgIGxldCB0b3VjaFN0YXJ0WCA9IDA7XG4gICAgICAgIGxldCB0b3VjaEVuZFggPSAwO1xuXG4gICAgICAgIGNhcmRzQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRvdWNoU3RhcnRYID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uc2NyZWVuWDtcbiAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgICBjYXJkc0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdG91Y2hFbmRYID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uc2NyZWVuWDtcbiAgICAgICAgICAgIGhhbmRsZVN3aXBlKCk7XG4gICAgICAgIH0sIGZhbHNlKTtcblxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVTd2lwZSgpIHtcbiAgICAgICAgICAgIGNvbnN0IHN3aXBlVGhyZXNob2xkID0gNTA7XG4gICAgICAgICAgICBpZiAodG91Y2hFbmRYIDwgdG91Y2hTdGFydFggLSBzd2lwZVRocmVzaG9sZCkge1xuICAgICAgICAgICAgICAgIG1vdmVSaWdodCgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodG91Y2hFbmRYID4gdG91Y2hTdGFydFggKyBzd2lwZVRocmVzaG9sZCkge1xuICAgICAgICAgICAgICAgIG1vdmVMZWZ0KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBtb3ZlUmlnaHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtb3ZlUmlnaHQpO1xuICAgICAgICBtb3ZlTGVmdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1vdmVMZWZ0KTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJvcmllbnRhdGlvbmNoYW5nZVwiLCAoKSA9PntcbiAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgaGFuZGxlUmVzaXplKClcblxuXG4gICAgLy8gZm9yIHRlc3RcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhcmstYnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKFwiZGFya1wiKVxuICAgIH0pXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbi1idG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhdi1wYWdlXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJlblwiKVxuICAgIH0pXG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlc3RNZW51XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByaXplcy1idG5zXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpXG4gICAgfSlcblxufSkoKTsiXX0=
