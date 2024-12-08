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
            removePrize(ball, box, иет);
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwidW5hdXRoTXNncyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInBhcnRpY2lwYXRlQnRucyIsIm1haW5QYWdlIiwicXVlcnlTZWxlY3RvciIsImJhbGxXcmFwIiwiZ3VpZGVXcmFwIiwiZ2FtZVdyYXAiLCJ1a0xlbmciLCJlbkxlbmciLCJsb2NhbGUiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJ3ZWVrIiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwibmV3TG9jYWxlIiwic2V0SXRlbSIsInRvZ2dsZVN0YXRlIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJhZGRFdmVudExpc3RlbmVyIiwic3R5bGUiLCJkaXNwbGF5IiwiaTE4bkRhdGEiLCJkZWJ1ZyIsInVzZXJJZCIsIk51bWJlciIsInJlbW92ZUl0ZW0iLCJsb2FkVHJhbnNsYXRpb25zIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsInRyYW5zbGF0ZSIsIm11dGF0aW9uT2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwibXV0YXRpb25zIiwib2JzZXJ2ZSIsImdldEVsZW1lbnRCeUlkIiwiY2hpbGRMaXN0Iiwic3VidHJlZSIsImVsZW1zIiwibGVuZ3RoIiwiZm9yRWFjaCIsImVsZW0iLCJrZXkiLCJnZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJyZW1vdmVBdHRyaWJ1dGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZWZyZXNoTG9jYWxpemVkQ2xhc3MiLCJpbml0IiwiZWxlbWVudCIsImJhc2VDc3NDbGFzcyIsImxhbmciLCJyZW1vdmUiLCJzdG9yZSIsInN0YXRlIiwiZ2V0U3RhdGUiLCJhdXRoIiwiaXNBdXRob3JpemVkIiwiaWQiLCJzZXR1cFBhZ2UiLCJjIiwiaSIsInNldEludGVydmFsIiwiZ191c2VyX2lkIiwiY2hlY2tVc2VyQXV0aCIsImNsZWFySW50ZXJ2YWwiLCJhdXRoQnRuIiwiZSIsInByZXZlbnREZWZhdWx0IiwicGFydGljaXBhdGUiLCJwYXJhbXMiLCJ1c2VyaWQiLCJyZXF1ZXN0IiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJpdGVtIiwibGluayIsImV4dHJhT3B0aW9ucyIsImhlYWRlcnMiLCJ1bmF1dGhNZXMiLCJwb2ludHNQZXJEYXkiLCJzcGluQWxsb3dlZCIsInNwaW5zU3RyZWFrIiwiZGlzcGxheVVzZXJTcGlucyIsInNwaW5zIiwicGFydGljaXBhdGVCdG4iLCJ0cmFuc2xhdGVLZXkiLCJzcGluSXRlbSIsIm5vU3Bpbkl0ZW0iLCJzcGluc0NvbnRhaW5lciIsInNwaW4iLCJzcGluRGF0ZSIsIkRhdGUiLCJkYXRlIiwiZm9ybWF0dGVkRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsInNwaW5OYW1lIiwibmFtZSIsInNwaW5FbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwiY2FyZHNDb250YWluZXIiLCJjYXJkcyIsImNhcmRzV3JhcCIsIm1vdmVSaWdodEJ1dHRvbiIsIm1vdmVMZWZ0QnV0dG9uIiwidGFic0NvbnRhaW5lciIsImlzTW9iaWxlIiwiaW5uZXJXaWR0aCIsInRvdGFsQ2FyZHMiLCJjYXJkV2lkdGgiLCJjbGllbnRXaWR0aCIsImNhcmRzTWFyZ2luIiwidmlzaWJsZVNsaWRlcyIsIk1hdGgiLCJjZWlsIiwidG90YWxUYWJzIiwidGFiV2lkdGgiLCJjdXJyZW50U2xpZGUiLCJjYXJkc1Bvc2l0aW9uIiwibGVmdFNsaWRlIiwicmlnaHRTbGlkZSIsInVwZGF0ZUFjdGl2ZUNhcmQiLCJhY3RpdmVJbmRleCIsImNhcmQiLCJsZWZ0U2xpZGVUYWIiLCJyaWdodFNsaWRlVGFiIiwiZmlyc3RMYXN0U2xpZGVzIiwic2V0Q2FyZHNQb3NpdGlvbiIsInBvc2l0aW9uIiwidHJhbnNmb3JtIiwibW92ZVJpZ2h0IiwibWF4UG9zaXRpb24iLCJoaWRlUG9wdXBzT25CdG4iLCJwcml6ZVBvcHVwSXRlbSIsIm1vdmVMZWZ0Iiwic2V0UG9wdXBzIiwicG9wdXBzIiwicG9wdXBzQnRucyIsImJ0biIsInBvcHVwIiwiaiIsInByaXplT3BlbkJ0bnMiLCJwcml6ZUNsb3NlQnRucyIsImd1aWRlUG9wdXBzV3JhcCIsImd1aWRlT3BlbkJ0bnMiLCJndWlkZUNsb3NlQnRucyIsInRhYmxlUG9wdXAiLCJ0YWJsZVBvcHVwQ2xvc2UiLCJ0YWJsZVBvcHVwT3BlbiIsImJhbGxQb3B1cCIsImJhbGxQb3B1cENsb3NlIiwiYmFsbFBvcHVwT3BlbiIsImNvbnRhaW5zIiwidGFyZ2V0Iiwib3ZlcmZsb3ciLCJDT1VOVCIsIlNub3dzdG9ybSIsIm1hc3RoZWFkIiwiY2FudmFzIiwiY3R4IiwiZ2V0Q29udGV4dCIsIndpZHRoIiwiaGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiYWN0aXZlIiwic25vd2ZsYWtlcyIsInByb3RvdHlwZSIsImxlZnQiLCJ0b3AiLCJvblJlc2l6ZSIsImJpbmQiLCJzbm93Zmxha2UiLCJTbm93Zmxha2UiLCJyZXNldCIsInB1c2giLCJyZXF1ZXN0QW5pbUZyYW1lIiwidXBkYXRlIiwiZmlsbFN0eWxlIiwid2FzQWN0aXZlIiwiY2xlYXJSZWN0IiwieSIsInZ5IiwieCIsInZ4IiwiZ2xvYmFsQWxwaGEiLCJvIiwiYmVnaW5QYXRoIiwiYXJjIiwiciIsIlBJIiwiY2xvc2VQYXRoIiwiZmlsbCIsInNub3dzdG9ybSIsInJhbmRvbSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1velJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbGxiYWNrIiwic2V0VGltZW91dCIsInNraWVzIiwic2t5IiwiYmFsbCIsInBhcmVudEVsZW1lbnQiLCJtYXhTbm93Zmxha2VzIiwibWF4U3BlZWQiLCJzdG9ybUNvdW50ZXIiLCJzbm93Zmxha2VzUmVtb3ZlZCIsInJhZGl1cyIsInNwZWVkWCIsInNwZWVkWSIsImFjY2VsZXJhdGlvbiIsIm1vdmluZ1RvQm90dG9tIiwiYmFsbFgiLCJiYWxsWSIsImJhbGxSYWRpdXMiLCJiYWxsU2hha2luZyIsInRhcmdldFNwZWVkIiwic3BlZWREZWNheUZhY3RvciIsIm1heCIsIm1pbiIsImR4IiwiZHkiLCJkaXN0YW5jZSIsInNxcnQiLCJhbmdsZSIsImF0YW4yIiwib3ZlcmxhcCIsImNvcyIsInNpbiIsInNwbGljZSIsImluZGV4T2YiLCJsYXN0QmFsbFNoYWtpbmdTdGF0ZSIsImFuaW1hdGUiLCJiYWxsVHJhbnNmb3JtIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIm9mZnNldFdpZHRoIiwibWF0cml4IiwiRE9NTWF0cml4Iiwib2Zmc2V0TGVmdCIsIm00MSIsIm9mZnNldFRvcCIsIm00MiIsIm1vdmVUb0JvdHRvbSIsImRyYXciLCJzZW5kU2hha2VSZXF1ZXN0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0eXBlIiwiYnRuU2hha2UiLCJiYWxsQm94IiwiY3VycmVudFByaXplIiwicGFzdFByaXplIiwid2luQ2xhc3NlcyIsInJlbW92ZVByaXplIiwiYm94IiwiYW5pbWF0ZVNoYWtlIiwicHJpemUiLCJwcml6ZU51bSIsImRlbGF5IiwibXMiLCLQuNC10YIiLCJwcml6ZVN0YXRlIiwiYnRuUHJpemUxIiwiYnRuUHJpemUyIiwiYnRuUHJpemUzIiwiYnRuUHJpemU0IiwiYnRuUHJpemU1IiwiYnRuUHJpemU2IiwiYnRuUHJpemU3IiwiYnRuUHJpemU4IiwiYnRuUHJpemU5IiwiYnRuUHJpemUxMCIsImJ0blByaXplMTEiLCJidG5Qcml6ZTEyIiwiYnRuUHJpemUxMyIsInNldFByaXplTnVtIiwibnVtIiwiaW5pdFNoYWtlIiwiZXJyb3IiLCJzdHJlYWtCb251cyIsImVyciIsInRvZ2dsZUl0ZW1zIiwidGFibGVzIiwidG9nZ2xlSXRlbSIsImluZGV4IiwidGFibGUiLCJidG5zIiwib3MiLCJkZXRlY3RPUyIsInVzZXJBZ2VudCIsIm5hdmlnYXRvciIsInZlbmRvciIsIm9wZXJhIiwicGxhdGZvcm0iLCJ0ZXN0IiwiTVNTdHJlYW0iLCJoYW5kbGVSZXNpemUiLCJ0b3VjaFN0YXJ0WCIsInRvdWNoRW5kWCIsImV2ZW50IiwiY2hhbmdlZFRvdWNoZXMiLCJzY3JlZW5YIiwiaGFuZGxlU3dpcGUiLCJzd2lwZVRocmVzaG9sZCIsInRvZ2dsZSJdLCJtYXBwaW5ncyI6Ijs7K0NBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREEsQ0FBQyxZQUFZO0VBQ1QsSUFBTUEsTUFBTSxHQUFHLHFDQUFxQztFQUVwRCxJQUNJQyxVQUFVLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsYUFBYSxDQUFDO0lBQ3JEQyxlQUFlLEdBQUdGLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsV0FBVyxDQUFDO0lBQ3hERSxRQUFRLEdBQUdILFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLFdBQVcsQ0FBQztJQUM5Q0MsUUFBUSxHQUFHTCxRQUFRLENBQUNJLGFBQWEsQ0FBQyxPQUFPLENBQUM7SUFDMUNFLFNBQVMsR0FBR04sUUFBUSxDQUFDSSxhQUFhLENBQUMsUUFBUSxDQUFDO0lBQzVDRyxRQUFRLEdBQUdQLFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLFFBQVEsQ0FBQztFQUUvQyxJQUFNSSxNQUFNLEdBQUdSLFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLFNBQVMsQ0FBQztFQUNoRCxJQUFNSyxNQUFNLEdBQUdULFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLFNBQVMsQ0FBQztFQUVoRCxJQUFJTSxNQUFNLEdBQUdDLGNBQWMsQ0FBQ0MsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUk7SUFDakRDLElBQUksR0FBRyxDQUFDO0VBRVpDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixJQUFJLENBQUM7RUFFakIsU0FBU0csUUFBUSxDQUFDQyxTQUFTLEVBQUU7SUFDekJQLE1BQU0sR0FBR08sU0FBUztJQUNsQk4sY0FBYyxDQUFDTyxPQUFPLENBQUMsUUFBUSxFQUFFUixNQUFNLENBQUM7RUFDNUM7RUFDQSxTQUFTUyxXQUFXLEdBQUc7SUFDbkIsSUFBTUYs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LFFBQVEsQ0FBQ0MsTUFBTSxFQUFFO0lBQ3JCLENBQUMsQ0FBQztFQUNOLENBQUM7RUFFRDRSLFlBQVksRUFBRTs7RUFHZDtFQUNBbFQsUUFBUSxDQUFDSSxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUNtQixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBSztJQUMvRHZCLFFBQVEsQ0FBQ2lGLElBQUksQ0FBQzdCLFNBQVMsQ0FBQ3NRLE1BQU0sQ0FBQyxNQUFNLENBQUM7RUFDMUMsQ0FBQyxDQUFDO0VBQ0YxVCxRQUFRLENBQUNJLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQ21CLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFLO0lBQzdEdkIsUUFBUSxDQUFDSSxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUNnRCxTQUFTLENBQUNzUSxNQUFNLENBQUMsSUFBSSxDQUFDO0VBQzlELENBQUMsQ0FBQztFQUVGMVQsUUFBUSxDQUFDSSxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUNtQixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBSTtJQUM5RHZCLFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDZ0QsU0FBUyxDQUFDc1EsTUFBTSxDQUFDLE1BQU0sQ0FBQztFQUNuRSxDQUFDLENBQUM7QUFFTixDQUFDLEdBQUciLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgYXBpVVJMID0gJ2h0dHBzOi8vZmF2LXByb20uY29tL2FwaV93aGVlbF8yMDI1J1xuXG4gICAgY29uc3RcbiAgICAgICAgdW5hdXRoTXNncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy51bmF1dGgtbXNnJyksXG4gICAgICAgIHBhcnRpY2lwYXRlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tam9pbicpLFxuICAgICAgICBtYWluUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXYtcGFnZScpLFxuICAgICAgICBiYWxsV3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFsbFwiKSxcbiAgICAgICAgZ3VpZGVXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ndWlkZVwiKSxcbiAgICAgICAgZ2FtZVdyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWVzXCIpO1xuXG4gICAgY29uc3QgdWtMZW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VrTGVuZycpO1xuICAgIGNvbnN0IGVuTGVuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbkxlbmcnKTtcblxuICAgIGxldCBsb2NhbGUgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdsb2NhbGUnKSB8fCAnZW4nLFxuICAgICAgICB3ZWVrID0gMTtcblxuICAgIGNvbnNvbGUubG9nKHdlZWspXG5cbiAgICBmdW5jdGlvbiBzZXRTdGF0ZShuZXdMb2NhbGUpIHtcbiAgICAgICAgbG9jYWxlID0gbmV3TG9jYWxlO1xuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdsb2NhbGUnLCBsb2NhbGUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiB0b2dnbGVTdGF0ZSgpIHtcbiAgICAgICAgY29uc3QgbmV3TG9jYWxlID0gbG9jYWxlID09PSAnZW4nID8gJ3VrJyA6ICdlbic7XG4gICAgICAgIHNldFN0YXRlKG5ld0xvY2FsZSk7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICAgIH1cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW4tYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRvZ2dsZVN0YXRlKCk7XG4gICAgfSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlZWstYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHdlZWspXG4gICAgICAgIGlmKHdlZWsgPT09IDEpe1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLl93ZWVrMScpLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLl93ZWVrMicpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgICAgICAgcmV0dXJuIHdlZWsgPSAyXG4gICAgICAgIH1cbiAgICAgICAgaWYod2VlayA9PT0gMil7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuX3dlZWsyJykuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuX3dlZWsxJykuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICAgICAgICB3ZWVrID0gMVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAodWtMZW5nKSBsb2NhbGUgPSAndWsnO1xuICAgIGlmIChlbkxlbmcpIGxvY2FsZSA9ICdlbic7XG5cblxuICAgIGxldCBpMThuRGF0YSA9IHt9O1xuICAgIGNvbnN0IGRlYnVnID0gdHJ1ZTtcbiAgICBsZXQgdXNlcklkO1xuICAgIHVzZXJJZCA9IE51bWJlcihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpKTtcblxuICAgIGNvbnNvbGUubG9nKHR5cGVvZiB1c2VySWQpXG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvY2stYnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgdXNlcklkID8gc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcInVzZXJJZFwiKSA6IHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJ1c2VySWRcIiwgJzEwMTIzNDg2MScpXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICAgIH0pXG5cbiAgICAvLyB1c2VySWQgPSA5OTk5O1xuXG4gICAgaWYod2VlayA9PT0gMSl7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5fd2VlazEnKS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCJcbiAgICB9XG4gICAgaWYod2VlayA9PT0gMil7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5fd2VlazInKS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCJcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkVHJhbnNsYXRpb25zKCkge1xuICAgICAgICByZXR1cm4gZmV0Y2goYCR7YXBpVVJMfS90cmFuc2xhdGVzLyR7bG9jYWxlfWApLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgICAgICBpMThuRGF0YSA9IGpzb247XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlKCk7XG5cbiAgICAgICAgICAgICAgICB2YXIgbXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChtdXRhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWxsJyksIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBzdWJ0cmVlOiB0cnVlLFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmFuc2xhdGUoKSB7XG4gICAgICAgIGNvbnN0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdHJhbnNsYXRlXScpXG4gICAgICAgIGlmIChlbGVtcyAmJiBlbGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGVsZW1zLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgICAgICAgICAgICAgZWxlbS5pbm5lckhUTUwgPSBpMThuRGF0YVtrZXldIHx8ICcqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qICAga2V5OiAgJyArIGtleTtcbiAgICAgICAgICAgICAgICBlbGVtLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInRyYW5zbGF0ZSB3b3JraW5nXCIpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxvY2FsZSA9PT0gJ2VuJykge1xuICAgICAgICAgICAgbWFpblBhZ2UuY2xhc3NMaXN0LmFkZCgnZW4nKTtcbiAgICAgICAgfVxuICAgICAgICByZWZyZXNoTG9jYWxpemVkQ2xhc3MoKTtcbiAgICB9XG4gICAgbG9hZFRyYW5zbGF0aW9ucygpXG4gICAgICAgIC50aGVuKGluaXQpO1xuICAgIGZ1bmN0aW9uIHJlZnJlc2hMb2NhbGl6ZWRDbGFzcyhlbGVtZW50LCBiYXNlQ3NzQ2xhc3MpIHtcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBsYW5nIG9mIFsnaHInLCAnZW4nXSkge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGJhc2VDc3NDbGFzcyArIGxhbmcpO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChiYXNlQ3NzQ2xhc3MgKyBsb2NhbGUpO1xuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5zdG9yZSkge1xuICAgICAgICAgICAgdmFyIHN0YXRlID0gd2luZG93LnN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgICAgICB1c2VySWQgPSBzdGF0ZS5hdXRoLmlzQXV0aG9yaXplZCAmJiBzdGF0ZS5hdXRoLmlkIHx8ICcnO1xuICAgICAgICAgICAgc2V0dXBQYWdlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXR1cFBhZ2UoKTtcbiAgICAgICAgICAgIGxldCBjID0gMDtcbiAgICAgICAgICAgIHZhciBpID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChjIDwgNTApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEhd2luZG93LmdfdXNlcl9pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklkID0gd2luZG93LmdfdXNlcl9pZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHVwUGFnZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tVc2VyQXV0aCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNoZWNrVXNlckF1dGgoKTtcblxuICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaCgoYXV0aEJ0biwgaSkgPT4ge1xuICAgICAgICAgICAgYXV0aEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0dXBQYWdlKCkge31cbiAgICBmdW5jdGlvbiBwYXJ0aWNpcGF0ZSgpIHtcbiAgICAgICAgaWYgKCF1c2VySWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHt1c2VyaWQ6IHVzZXJJZH07XG4gICAgICAgIHJlcXVlc3QoJy91c2VyJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXJhbXMpXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuICAgICAgICAgICAgYmFsbFdyYXAuY2xhc3NMaXN0LnJlbW92ZSgnX3NpZ24nKTtcbiAgICAgICAgICAgIHNldHVwUGFnZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCByZXF1ZXN0ID0gZnVuY3Rpb24gKGxpbmssIGV4dHJhT3B0aW9ucykge1xuICAgICAgICByZXR1cm4gZmV0Y2goYXBpVVJMICsgbGluaywge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC4uLihleHRyYU9wdGlvbnMgfHwge30pXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tVc2VyQXV0aCgpIHtcbiAgICAgICAgY29uc29sZS5sb2codXNlcklkKVxuICAgICAgICBpZiAodXNlcklkKSB7XG5cbiAgICAgICAgICAgIGZvciAoY29uc3QgdW5hdXRoTWVzIG9mIHVuYXV0aE1zZ3MpIHtcbiAgICAgICAgICAgICAgICB1bmF1dGhNZXMuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVxdWVzdChgL2ZhdnVzZXIvJHt1c2VySWR9P25vY2FjaGU9MWApXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLnVzZXJpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhdGVCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWxsV3JhcC5jbGFzc0xpc3QucmVtb3ZlKCdfc2lnbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3VpZGVXcmFwLmNsYXNzTGlzdC5yZW1vdmUoJ19zaWduJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lV3JhcC5jbGFzc0xpc3QucmVtb3ZlKCdfc2lnbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYW5uZXJfX2J0blwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9ncmVzc1wiKS5jbGFzc0xpc3QucmVtb3ZlKFwiX3NpZ25cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVidWcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMucG9pbnRzUGVyRGF5ID0gMzA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnNwaW5BbGxvd2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc3BpbnNTdHJlYWsgPSAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlcy5zcGlucyA9IFtcIlwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlZnJlc2hVc2VySW5mbyhyZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheVVzZXJTcGlucyhyZXMuc3BpbnMpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYW5uZXJfX2J0blwiKS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhdGVCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYW5uZXJfX2J0blwiKS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgICAgICAgICAgZm9yIChsZXQgcGFydGljaXBhdGVCdG4gb2YgcGFydGljaXBhdGVCdG5zKSB7XG4gICAgICAgICAgICAgICAgcGFydGljaXBhdGVCdG4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChjb25zdCB1bmF1dGhNZXMgb2YgdW5hdXRoTXNncykge1xuICAgICAgICAgICAgICAgIHVuYXV0aE1lcy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmFuc2xhdGVLZXkoa2V5KSB7XG4gICAgICAgIGlmICgha2V5KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGkxOG5EYXRhW2tleV0gfHwgJyotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSogICBrZXk6ICAnICsga2V5O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlVc2VyU3BpbnMoc3BpbnMpIHtcbiAgICAgICAgY29uc3Qgc3Bpbkl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3BpbnMtcm93Jyk7XG4gICAgICAgIGNvbnN0IG5vU3Bpbkl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm8tc3BpbnMnKTtcbiAgICAgICAgaWYgKCFzcGlucyB8fCBzcGlucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHNwaW5JdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIG5vU3Bpbkl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3BpbnNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3BpbnMtcm93Jyk7XG4gICAgICAgIHNwaW5zQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuXG4gICAgICAgIHNwaW5JdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgbm9TcGluSXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG5cbiAgICAgICAgc3BpbnMuZm9yRWFjaChzcGluID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNwaW5EYXRlID0gbmV3IERhdGUoc3Bpbi5kYXRlKTtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRlZERhdGUgPSBzcGluRGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoJ2hyLUhSJyk7XG4gICAgICAgICAgICBjb25zdCBzcGluTmFtZSA9IHRyYW5zbGF0ZUtleShzcGluLm5hbWUpIHx8ICcnO1xuXG4gICAgICAgICAgICBjb25zdCBzcGluRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgc3BpbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc3BpbnMtcm93LWl0ZW0nKTtcblxuICAgICAgICAgICAgc3BpbkVsZW1lbnQuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb250ZW50LWRhdGVcIj4ke2Zvcm1hdHRlZERhdGV9PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb250ZW50LXByaXplXCI+JHtzcGluTmFtZX08L3NwYW4+XG4gICAgICAgIGA7XG5cbiAgICAgICAgICAgIHNwaW5zQ29udGFpbmVyLmFwcGVuZENoaWxkKHNwaW5FbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICAvLyBDYXJkcyBzbGlkZXJcbiAgICBjb25zdCBjYXJkc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcml6ZV9fbGlzdCcpLFxuICAgICAgICAgIGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByaXplX19saXN0LWl0ZW0nKSxcbiAgICAgICAgICBjYXJkc1dyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpemVfX2xpc3Qtc2Nyb2xsJyksXG4gICAgICAgICAgbW92ZVJpZ2h0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaXplX19zbGlkZXItbW92ZS1yaWdodCcpLFxuICAgICAgICAgIG1vdmVMZWZ0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaXplX19zbGlkZXItbW92ZS1sZWZ0JyksXG4gICAgICAgICAgdGFic0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcml6ZV9fdGFicycpLFxuICAgICAgICAgIGlzTW9iaWxlID0gd2luZG93LmlubmVyV2lkdGggPCA2MDAsXG4gICAgICAgICAgdG90YWxDYXJkcyA9IGNhcmRzLmxlbmd0aCxcbiAgICAgICAgICBjYXJkV2lkdGggPSBjYXJkc1swXS5jbGllbnRXaWR0aCxcbiAgICAgICAgICBjYXJkc01hcmdpbiA9IChjYXJkc1dyYXAuY2xpZW50V2lkdGggLSBjYXJkV2lkdGggKiB0b3RhbENhcmRzKSAvICh0b3RhbENhcmRzIC0gMSksXG4gICAgICAgICAgdmlzaWJsZVNsaWRlcyA9IGlzTW9iaWxlID8gMSA6IE1hdGguY2VpbChjYXJkc0NvbnRhaW5lci5jbGllbnRXaWR0aCAvIChjYXJkV2lkdGggKyBjYXJkc01hcmdpbikpLFxuICAgICAgICAgIHRvdGFsVGFicyA9IE1hdGguY2VpbCh0b3RhbENhcmRzIC8gdmlzaWJsZVNsaWRlcyksXG4gICAgICAgICAgdGFiV2lkdGg9IHZpc2libGVTbGlkZXMgKiAoY2FyZFdpZHRoICsgY2FyZHNNYXJnaW4pXG5cblxuICAgIGxldCBjdXJyZW50U2xpZGUgPSAxLFxuICAgICAgICBjYXJkc1Bvc2l0aW9uID0gMCxcbiAgICAgICAgbGVmdFNsaWRlLFxuICAgICAgICByaWdodFNsaWRlO1xuXG4gICAgY29uc3QgdXBkYXRlQWN0aXZlQ2FyZCA9IChjYXJkcywgYWN0aXZlSW5kZXgpID0+IHtcbiAgICAgICAgY2FyZHMuZm9yRWFjaCgoY2FyZCwgaSkgPT57XG4gICAgICAgICAgICBhY3RpdmVJbmRleCAtIDEgPT09IGkgPyBjYXJkLmNsYXNzTGlzdC5hZGQoXCJfYWN0aXZlXCIpIDogY2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwiX2FjdGl2ZVwiKVxuICAgICAgICB9KVxuICAgIH1cbiAgICB1cGRhdGVBY3RpdmVDYXJkKGNhcmRzLCBjdXJyZW50U2xpZGUpXG5cbiAgICBmdW5jdGlvbiBsZWZ0U2xpZGVUYWIoKXtcbiAgICAgICAgbGVmdFNsaWRlID0gY3VycmVudFNsaWRlXG4gICAgfVxuICAgIGZ1bmN0aW9uIHJpZ2h0U2xpZGVUYWIoKXtcbiAgICAgICAgcmlnaHRTbGlkZSA9IGN1cnJlbnRTbGlkZSArICh2aXNpYmxlU2xpZGVzIC0gMSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmaXJzdExhc3RTbGlkZXMoKXtcbiAgICAgICAgaWYoaXNNb2JpbGUpIHJldHVyblxuICAgICAgICBsZWZ0U2xpZGVUYWIoKVxuICAgICAgICByaWdodFNsaWRlVGFiKClcbiAgICAgICAgY2FyZHMuZm9yRWFjaCgoY2FyZCAsIGkpID0+e1xuICAgICAgICAgICAgaSArIDEgPT09IGxlZnRTbGlkZSA/IGNhcmQuY2xhc3NMaXN0LmFkZChcIl9sZWZ0XCIpIDogY2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwiX2xlZnRcIilcbiAgICAgICAgICAgIGkgKyAxID09PSByaWdodFNsaWRlID8gY2FyZC5jbGFzc0xpc3QuYWRkKFwiX3JpZ2h0XCIpIDogY2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwiX3JpZ2h0XCIpXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGZpcnN0TGFzdFNsaWRlcygpXG5cbiAgICBmdW5jdGlvbiBzZXRDYXJkc1Bvc2l0aW9uIChwb3NpdGlvbikge1xuICAgICAgICBjYXJkc1dyYXAuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoLSR7cG9zaXRpb259cHgpYDtcbiAgICB9O1xuICAgIGNvbnN0IG1vdmVSaWdodCA9ICgpID0+IHtcblxuICAgICAgICBpZiAoY3VycmVudFNsaWRlID49IHRvdGFsQ2FyZHMgLSAodmlzaWJsZVNsaWRlcyAtIDEpICYmIGlzTW9iaWxlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgZmlyc3RMYXN0U2xpZGVzKClcbiAgICAgICAgICAgIGN1cnJlbnRTbGlkZSA9IDE7XG4gICAgICAgICAgICBjYXJkc1Bvc2l0aW9uID0gMDtcbiAgICAgICAgICAgIHJpZ2h0U2xpZGUrK1xuICAgICAgICAgICAgbGVmdFNsaWRlKytcbiAgICAgICAgfWVsc2UgaWYoY3VycmVudFNsaWRlID09PSB0b3RhbENhcmRzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50U2xpZGUpXG4gICAgICAgICAgICBjdXJyZW50U2xpZGUgPSAxO1xuICAgICAgICAgICAgY2FyZHNQb3NpdGlvbiA9IDA7XG4gICAgICAgIH1lbHNlIGlmKGN1cnJlbnRTbGlkZSA9PT0gdG90YWxDYXJkcyAtICggdmlzaWJsZVNsaWRlcyArIDEpICYmIGlzTW9iaWxlID09PSB0cnVlKXtcbiAgICAgICAgICAgIGN1cnJlbnRTbGlkZSA9IHRvdGFsQ2FyZHNcbiAgICAgICAgICAgIGNhcmRzUG9zaXRpb24gPSBjYXJkc1dyYXAuY2xpZW50V2lkdGggLSAod2luZG93LmlubmVyV2lkdGggLSAoY2FyZHNNYXJnaW4gLyAyKSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNhcmRzUG9zaXRpb24pXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBtYXhQb3NpdGlvbiA9ICh0b3RhbENhcmRzIC0gdmlzaWJsZVNsaWRlcykgKiAoY2FyZFdpZHRoICsgY2FyZHNNYXJnaW4pO1xuICAgICAgICAgICAgaWYgKGNhcmRzUG9zaXRpb24gKyBjYXJkV2lkdGggKyBjYXJkc01hcmdpbiA+IG1heFBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgY2FyZHNQb3NpdGlvbiA9IG1heFBvc2l0aW9uO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRTbGlkZSA9IHRvdGFsQ2FyZHMgLSB2aXNpYmxlU2xpZGVzICsgMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2FyZHNQb3NpdGlvbiArPSBjYXJkV2lkdGggKyBjYXJkc01hcmdpbjtcbiAgICAgICAgICAgICAgICBjdXJyZW50U2xpZGUrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzZXRDYXJkc1Bvc2l0aW9uKGNhcmRzUG9zaXRpb24pO1xuICAgICAgICB1cGRhdGVBY3RpdmVDYXJkKGNhcmRzLCBjdXJyZW50U2xpZGUpXG4gICAgICAgIGZpcnN0TGFzdFNsaWRlcygpXG4gICAgICAgIGhpZGVQb3B1cHNPbkJ0bihwcml6ZVBvcHVwSXRlbSlcbiAgICAgICAgLy8gY2VudGVyUG9wdXAoXCIucHJpemVfX2xpc3QtcG9wdXBcIilcblxuICAgIH07XG4gICAgY29uc3QgbW92ZUxlZnQgPSAoKSA9PiB7XG4gICAgICAgIGlmKGN1cnJlbnRTbGlkZSA9PT0gMSAmJiBpc01vYmlsZSA9PT0gZmFsc2Upe1xuICAgICAgICAgICAgY3VycmVudFNsaWRlID0gdG90YWxDYXJkcyAtICh2aXNpYmxlU2xpZGVzIC0gMSk7XG4gICAgICAgICAgICBjYXJkc1Bvc2l0aW9uID0gKCh0b3RhbENhcmRzIC0gKHZpc2libGVTbGlkZXMgLSAxKSkgKiAoY2FyZFdpZHRoICsgY2FyZHNNYXJnaW4pKSAtKGNhcmRXaWR0aCArIGNhcmRzTWFyZ2luKTtcbiAgICAgICAgfWVsc2UgaWYgKGN1cnJlbnRTbGlkZSA9PT0gMikge1xuICAgICAgICAgICAgY2FyZHNQb3NpdGlvbiA9IDBcbiAgICAgICAgICAgIGN1cnJlbnRTbGlkZSA9IDFcbiAgICAgICAgfWVsc2UgaWYoY3VycmVudFNsaWRlID09PSAxICYmIGlzTW9iaWxlID09PSB0cnVlKXtcbiAgICAgICAgICAgIGN1cnJlbnRTbGlkZSA9IHRvdGFsQ2FyZHNcbiAgICAgICAgICAgIGNhcmRzUG9zaXRpb24gPSBjYXJkc1dyYXAuY2xpZW50V2lkdGggLSAod2luZG93LmlubmVyV2lkdGggLSAoY2FyZHNNYXJnaW4gLyAyKSlcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgY2FyZHNQb3NpdGlvbiAtPSBjYXJkV2lkdGggKyBjYXJkc01hcmdpbjtcbiAgICAgICAgICAgIGN1cnJlbnRTbGlkZS0tXG4gICAgICAgIH1cbiAgICAgICAgc2V0Q2FyZHNQb3NpdGlvbihjYXJkc1Bvc2l0aW9uKTtcbiAgICAgICAgdXBkYXRlQWN0aXZlQ2FyZChjYXJkcywgY3VycmVudFNsaWRlKVxuICAgICAgICBmaXJzdExhc3RTbGlkZXMoKVxuICAgICAgICBoaWRlUG9wdXBzT25CdG4ocHJpemVQb3B1cEl0ZW0pXG4gICAgICAgIC8vIGNlbnRlclBvcHVwKFwiLnByaXplX19saXN0LXBvcHVwXCIpXG4gICAgfTtcblxuICAgIC8vIGNlbnRlclBvcHVwKFwiLnByaXplX19saXN0LXBvcHVwXCIpXG5cblxuICAgIC8vIHBvcHVwcyBsb2dpY1xuXG4gICAgZnVuY3Rpb24gc2V0UG9wdXBzKHBvcHVwcywgcG9wdXBzQnRucykge1xuICAgICAgICBwb3B1cHNCdG5zLmZvckVhY2goKGJ0biwgaSkgPT4ge1xuICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHBvcHVwcy5mb3JFYWNoKChwb3B1cCwgaikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpID09PSBqID8gcG9wdXAuY2xhc3NMaXN0LmFkZChcIl9wb3B1cFwiKSA6IHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoXCJfcG9wdXBcIik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gICBoaWRlUG9wdXBzT25CdG4ocG9wdXBzKXtcbiAgICAgICAgcG9wdXBzLmZvckVhY2gocG9wdXAgPT57XG4gICAgICAgICAgIHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoXCJfcG9wdXBcIilcbiAgICAgICAgfSlcbiAgICB9XG5cblxuXG5cblxuLy8gcG9wdXBzXG4gICAgY29uc3QgcHJpemVPcGVuQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJpemVfX2xpc3QtaXRlbS1idG5cIiksXG4gICAgICAgICAgcHJpemVDbG9zZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByaXplX19saXN0LXBvcHVwLWNsb3NlXCIpLFxuICAgICAgICAgIGd1aWRlUG9wdXBzV3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZ3VpZGVfX2l0ZW1cIiksXG4gICAgICAgICAgZ3VpZGVPcGVuQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZ3VpZGVfX2l0ZW0taW5mby1idG5cIiksXG4gICAgICAgICAgZ3VpZGVDbG9zZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmd1aWRlX19pdGVtLXBvcHVwLWNsb3NlXCIpLFxuICAgICAgICAgIHRhYmxlUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhYmxlX19wb3B1cFwiKSxcbiAgICAgICAgICB0YWJsZVBvcHVwQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhYmxlX19wb3B1cC1jbG9zZVwiKSxcbiAgICAgICAgICB0YWJsZVBvcHVwT3BlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFibGVfX2luZm9cIiksXG4gICAgICAgICAgYmFsbFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9ncmVzc19fcG9wdXBcIiksXG4gICAgICAgICAgYmFsbFBvcHVwQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2dyZXNzX19wb3B1cC1jbG9zZVwiKSxcbiAgICAgICAgICBiYWxsUG9wdXBPcGVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9ncmVzc19fcG9wdXAtYnRuXCIpLFxuICAgICAgICAgIHByaXplUG9wdXBJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcml6ZV9fY29udGFpbmVyLWl0ZW1cIilcblxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PntcblxuICAgICAgICAvLyAgcHJpemVQb3B1cEl0ZW0uZm9yRWFjaChjYXJkID0+e1xuICAgICAgICAvLyAgICAgICAgIGlmKGUudGFyZ2V0ICE9PSBjYXJkKXtcbiAgICAgICAgLy8gICAgICAgICAgICAgcHJpemVPcGVuQnRucy5mb3JFYWNoKGJ0biA9PntcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGlmKGUudGFyZ2V0ICE9PSBidG4gJiYgZS50YXJnZXQgIT09IGNhcmQpe1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0IClcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAvLyBjYXJkLmNsYXNzTGlzdC5yZW1vdmUoXCJfcG9wdXBcIilcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICAgICAgfSlcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vIH0pXG4gICAgICAgIGd1aWRlUG9wdXBzV3JhcC5mb3JFYWNoKHBvcHVwID0+e1xuICAgICAgICAgICAgaWYoIXBvcHVwLmNvbnRhaW5zKGUudGFyZ2V0KSl7XG4gICAgICAgICAgICAgICAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcIl9wb3B1cFwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGlmKCFiYWxsUG9wdXAuY29udGFpbnMoZS50YXJnZXQpICYmIGUudGFyZ2V0ICE9PSBiYWxsUG9wdXBPcGVuKXtcbiAgICAgICAgICAgICAgICBiYWxsUG9wdXAuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICAgICAgfVxuXG4gICAgfSlcblxuXG4gICAgc2V0UG9wdXBzKHByaXplUG9wdXBJdGVtLCBwcml6ZU9wZW5CdG5zKTtcbiAgICBzZXRQb3B1cHMoZ3VpZGVQb3B1cHNXcmFwLCBndWlkZU9wZW5CdG5zKTtcblxuICAgIGd1aWRlQ2xvc2VCdG5zLmZvckVhY2goYnRuID0+e1xuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcbiAgICAgICAgICAgICAgaGlkZVBvcHVwc09uQnRuKGd1aWRlUG9wdXBzV3JhcClcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBwcml6ZUNsb3NlQnRucy5mb3JFYWNoKGJ0biA9PntcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XG4gICAgICAgICAgICAgIGhpZGVQb3B1cHNPbkJ0bihwcml6ZVBvcHVwSXRlbSlcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0YWJsZVBvcHVwT3Blbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgdGFibGVQb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKVxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIlxuICAgIH0pO1xuXG4gICAgdGFibGVQb3B1cENsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgdGFibGVQb3B1cC5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCJcbiAgICB9KTtcblxuICAgIGJhbGxQb3B1cE9wZW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICAgICAgYmFsbFBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpXG4gICAgfSk7XG5cbiAgICBiYWxsUG9wdXBDbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgICAgICBiYWxsUG9wdXAuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICB9KTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+e1xuICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBDT1VOVCA9IDQwMDtcblxuICAgICAgICBmdW5jdGlvbiBTbm93c3Rvcm0oZWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5tYXN0aGVhZCA9IGVsZW1lbnQ7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMubWFzdGhlYWQuY2xpZW50V2lkdGg7XG4gICAgICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMubWFzdGhlYWQuY2xpZW50SGVpZ2h0O1xuICAgICAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc25vd2ZsYWtlcyA9IFtdO1xuXG4gICAgICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFNub3dzdG9ybS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmxlZnQgPSB0aGlzLmNhbnZhcy5zdHlsZS50b3AgPSAnMCc7XG4gICAgICAgICAgICB0aGlzLm1hc3RoZWFkLmFwcGVuZENoaWxkKHRoaXMuY2FudmFzKTtcblxuICAgICAgICAgICAgdGhpcy5vblJlc2l6ZSgpO1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25SZXNpemUuYmluZCh0aGlzKSwgZmFsc2UpO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IENPVU5UOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgc25vd2ZsYWtlID0gbmV3IHRoaXMuU25vd2ZsYWtlKHRoaXMpO1xuICAgICAgICAgICAgICAgIHNub3dmbGFrZS5yZXNldCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc25vd2ZsYWtlcy5wdXNoKHNub3dmbGFrZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltRnJhbWUodGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgU25vd3N0b3JtLnByb3RvdHlwZS5vblJlc2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMud2lkdGggPSB0aGlzLm1hc3RoZWFkLmNsaWVudFdpZHRoO1xuICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLm1hc3RoZWFkLmNsaWVudEhlaWdodDtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gdGhpcy53aWR0aDtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHRoaXMuaGVpZ2h0O1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJyNGRkYnO1xuXG4gICAgICAgICAgICB2YXIgd2FzQWN0aXZlID0gdGhpcy5hY3RpdmU7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZSA9IHRoaXMud2lkdGggPiA4MDtcbiAgICAgICAgICAgIHRoaXMud2lkdGggPiAyODAgPyBDT1VOVCA9IDE1MCA6IG51bGxcblxuICAgICAgICAgICAgaWYgKCF3YXNBY3RpdmUgJiYgdGhpcy5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbUZyYW1lKHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIFNub3dzdG9ybS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcblxuICAgICAgICAgICAgaWYgKCF0aGlzLmFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBDT1VOVDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNub3dmbGFrZSA9IHRoaXMuc25vd2ZsYWtlc1tpXTtcbiAgICAgICAgICAgICAgICBzbm93Zmxha2UueSArPSBzbm93Zmxha2Uudnk7XG4gICAgICAgICAgICAgICAgc25vd2ZsYWtlLnggKz0gc25vd2ZsYWtlLnZ4O1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZ2xvYmFsQWxwaGEgPSBzbm93Zmxha2UubztcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5hcmMoc25vd2ZsYWtlLngsIHNub3dmbGFrZS55LCBzbm93Zmxha2UuciwgMCwgTWF0aC5QSSAqIDIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoc25vd2ZsYWtlLnkgPiB0aGlzLmhlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICBzbm93Zmxha2UucmVzZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlcXVlc3RBbmltRnJhbWUodGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgU25vd3N0b3JtLnByb3RvdHlwZS5Tbm93Zmxha2UgPSBmdW5jdGlvbiAoc25vd3N0b3JtKSB7XG4gICAgICAgICAgICB0aGlzLnNub3dzdG9ybSA9IHNub3dzdG9ybTtcbiAgICAgICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgfTtcblxuICAgICAgICBTbm93c3Rvcm0ucHJvdG90eXBlLlNub3dmbGFrZS5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLnggPSBNYXRoLnJhbmRvbSgpICogdGhpcy5zbm93c3Rvcm0ud2lkdGg7XG4gICAgICAgICAgICB0aGlzLnkgPSBNYXRoLnJhbmRvbSgpICogLXRoaXMuc25vd3N0b3JtLmhlaWdodDtcbiAgICAgICAgICAgIHRoaXMudnkgPSAwLjMgKyBNYXRoLnJhbmRvbSgpICogMC4wMDAwMTtcbiAgICAgICAgICAgIHRoaXMudnggPSAwLjYgLSBNYXRoLnJhbmRvbSgpO1xuICAgICAgICAgICAgdGhpcy5yID0gMSArIE1hdGgucmFuZG9tKCkgKiAyO1xuICAgICAgICAgICAgdGhpcy5vID0gMTtcbiAgICAgICAgfTtcblxuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1GcmFtZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICAgICAgICAgIHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgICAgICAgICB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCAxMDAwIC8gNjApO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgIH0pKCk7XG5cbiAgICAgICAgdmFyIHNraWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNreScpO1xuICAgICAgICBza2llcy5mb3JFYWNoKGZ1bmN0aW9uIChza3kpIHtcbiAgICAgICAgICAgIG5ldyBTbm93c3Rvcm0oc2t5KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gYmFsbCBzaGFrZSBzbm93XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbm93Q2FudmFzJyk7XG4gICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBjb25zdCBiYWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNwaGVyZScpO1xuXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IGNhbnZhcy5wYXJlbnRFbGVtZW50LmNsaWVudFdpZHRoO1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gY2FudmFzLnBhcmVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuXG4gICAgICAgIGxldCBzbm93Zmxha2VzID0gW107XG4gICAgICAgIGNvbnN0IG1heFNub3dmbGFrZXMgPSAxMDA7XG4gICAgICAgIGNvbnN0IG1heFNwZWVkID0gNztcbiAgICAgICAgbGV0IHN0b3JtQ291bnRlciA9IDFcblxuXG4gICAgICAgIGxldCBzbm93Zmxha2VzUmVtb3ZlZCA9IDA7XG5cbiAgICAgICAgY2xhc3MgU25vd2ZsYWtlIHtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgICAgIHRoaXMueCA9IE1hdGgucmFuZG9tKCkgKiBjYW52YXMud2lkdGg7XG4gICAgICAgICAgICAgICAgdGhpcy55ID0gTWF0aC5yYW5kb20oKSAqIGNhbnZhcy5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgdGhpcy5yYWRpdXMgPSBNYXRoLnJhbmRvbSgpICogMyArIDE7XG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlZFggPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiAxMDtcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVkWSA9IE1hdGgucmFuZG9tKCkgKiAxLjUgKyAxO1xuICAgICAgICAgICAgICAgIHRoaXMuYWNjZWxlcmF0aW9uID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmluZ1RvQm90dG9tID0gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVwZGF0ZShiYWxsWCwgYmFsbFksIGJhbGxSYWRpdXMsIGJhbGxTaGFraW5nKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubW92aW5nVG9Cb3R0b20pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0U3BlZWQgPSAwLjE7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNwZWVkRGVjYXlGYWN0b3IgPSAwLjA1OyAvLyDQmtC+0LXRhNGW0YbRltGU0L3RgiDQtNC70Y8g0L/Qu9Cw0LLQvdC+0LPQviDRgdC/0L7QstGW0LvRjNC90LXQvdC90Y9cblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwZWVkWCA9IHRoaXMuc3BlZWRYIC0gKHRoaXMuc3BlZWRYIC0gdGFyZ2V0U3BlZWQpICogc3BlZWREZWNheUZhY3RvcjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGVlZFkgPSB0aGlzLnNwZWVkWSAtICh0aGlzLnNwZWVkWSAtIHRhcmdldFNwZWVkKSAqIHNwZWVkRGVjYXlGYWN0b3I7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8g0J7QvdC+0LLQu9C10L3QvdGPINC/0L7Qt9C40YbRltGXINGB0L3RltC20LjQvdC60LhcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55ICs9IHRoaXMuc3BlZWRZO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnkgPiBjYW52YXMuaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLnggKz0gdGhpcy5zcGVlZFg7XG4gICAgICAgICAgICAgICAgdGhpcy55ICs9IHRoaXMuc3BlZWRZO1xuXG4gICAgICAgICAgICAgICAgLy8g0J7QsdC80LXQttC10L3QvdGPINGI0LLQuNC00LrQvtGB0YLRllxuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWRYID0gTWF0aC5tYXgoLW1heFNwZWVkLCBNYXRoLm1pbihtYXhTcGVlZCwgdGhpcy5zcGVlZFgpKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVkWSA9IE1hdGgubWF4KC1tYXhTcGVlZCwgTWF0aC5taW4obWF4U3BlZWQsIHRoaXMuc3BlZWRZKSk7XG5cbiAgICAgICAgICAgICAgICAvLyDQlNC+0LTQsNCy0LDQvdC90Y8g0YjQstC40LTQutC+0YHRgtGWINGH0LXRgNC10LcgXCLRgtGA0YPRgdGW0L3QvdGPXCIg0LrRg9C70ZZcbiAgICAgICAgICAgICAgICBpZiAoYmFsbFNoYWtpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY2NlbGVyYXRpb24gKz0gMC4wNTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjY2VsZXJhdGlvbiAqPSAwLjk1O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVkWCArPSB0aGlzLmFjY2VsZXJhdGlvbiAqIChNYXRoLnJhbmRvbSgpIC0gMC41KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVkWSArPSB0aGlzLmFjY2VsZXJhdGlvbiAqIChNYXRoLnJhbmRvbSgpIC0gMC41KTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnkgPiBjYW52YXMuaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMueSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMueCA9IE1hdGgucmFuZG9tKCkgKiBjYW52YXMud2lkdGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnggPiBjYW52YXMud2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54ID0gMDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMueCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54ID0gY2FudmFzLndpZHRoO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vINCS0ZbQtNGB0YLQsNC90Ywg0LTQviDRhtC10L3RgtGA0YMg0LrRg9C70ZZcbiAgICAgICAgICAgICAgICBjb25zdCBkeCA9IHRoaXMueCAtIGJhbGxYO1xuICAgICAgICAgICAgICAgIGNvbnN0IGR5ID0gdGhpcy55IC0gYmFsbFk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuXG4gICAgICAgICAgICAgICAgLy8g0JLRltC00YHQutC+0Log0LLRltC0INC60YPQu9GWXG4gICAgICAgICAgICAgICAgaWYgKGRpc3RhbmNlIDwgYmFsbFJhZGl1cyArIHRoaXMucmFkaXVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFuZ2xlID0gTWF0aC5hdGFuMihkeSwgZHgpOyAvLyDQmtGD0YIg0LfRltGC0LrQvdC10L3QvdGPXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG92ZXJsYXAgPSBiYWxsUmFkaXVzICsgdGhpcy5yYWRpdXMgLSBkaXN0YW5jZTtcblxuICAgICAgICAgICAgICAgICAgICAvLyDQn9C10YDQtdC80ZbRidC10L3QvdGPINGB0L3RltC20LjQvdC60LhcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54ICs9IE1hdGguY29zKGFuZ2xlKSAqIG92ZXJsYXA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMueSArPSBNYXRoLnNpbihhbmdsZSkgKiBvdmVybGFwO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vINCg0LXQstC10YDRgSDRiNCy0LjQtNC60L7RgdGC0ZZcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGVlZFggKj0gLTAuNztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGVlZFkgKj0gLTAuNztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1vdmVUb0JvdHRvbSgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmluZ1RvQm90dG9tID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVtb3ZlKCkge1xuICAgICAgICAgICAgICAgIHNub3dmbGFrZXMuc3BsaWNlKHNub3dmbGFrZXMuaW5kZXhPZih0aGlzKSwgMSk7XG4gICAgICAgICAgICAgICAgc25vd2ZsYWtlc1JlbW92ZWQrKztcbiAgICAgICAgICAgICAgICBpZiAoc3Rvcm1Db3VudGVyID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ldyBTbm93c3Rvcm0oZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zcGhlcmVfX2JvZHlcIikpO1xuICAgICAgICAgICAgICAgICAgICBzdG9ybUNvdW50ZXIrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRyYXcoKSB7XG4gICAgICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIGN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCAwLCBNYXRoLlBJICogMik7XG4gICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICd3aGl0ZSc7XG4gICAgICAgICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbGFzdEJhbGxTaGFraW5nU3RhdGUgPSBmYWxzZTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1heFNub3dmbGFrZXM7IGkrKykge1xuICAgICAgICAgICAgc25vd2ZsYWtlcy5wdXNoKG5ldyBTbm93Zmxha2UoKSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBhbmltYXRlKCkge1xuICAgICAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXG4gICAgICAgICAgICBjb25zdCBiYWxsVHJhbnNmb3JtID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoYmFsbCkudHJhbnNmb3JtO1xuICAgICAgICAgICAgbGV0IGJhbGxYID0gY2FudmFzLndpZHRoIC8gMjtcbiAgICAgICAgICAgIGxldCBiYWxsWSA9IGNhbnZhcy5oZWlnaHQgLyAyO1xuICAgICAgICAgICAgY29uc3QgYmFsbFJhZGl1cyA9IGJhbGwub2Zmc2V0V2lkdGggLyAyO1xuICAgICAgICAgICAgY29uc3QgYmFsbFNoYWtpbmcgPSBiYWxsVHJhbnNmb3JtICE9PSAnbm9uZSc7XG5cbiAgICAgICAgICAgIGlmIChiYWxsVHJhbnNmb3JtICE9PSAnbm9uZScpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtYXRyaXggPSBuZXcgRE9NTWF0cml4KGJhbGxUcmFuc2Zvcm0pO1xuICAgICAgICAgICAgICAgIGJhbGxYID0gYmFsbC5vZmZzZXRMZWZ0ICsgbWF0cml4Lm00MSArIGJhbGxSYWRpdXM7XG4gICAgICAgICAgICAgICAgYmFsbFkgPSBiYWxsLm9mZnNldFRvcCArIG1hdHJpeC5tNDIgKyBiYWxsUmFkaXVzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYmFsbFNoYWtpbmcgJiYgIWxhc3RCYWxsU2hha2luZ1N0YXRlKSB7XG4gICAgICAgICAgICAgICAgc25vd2ZsYWtlcyA9IFtdO1xuICAgICAgICAgICAgICAgIHNub3dmbGFrZXNSZW1vdmVkID0gMDtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1heFNub3dmbGFrZXM7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBzbm93Zmxha2VzLnB1c2gobmV3IFNub3dmbGFrZSgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxhc3RCYWxsU2hha2luZ1N0YXRlID0gYmFsbFNoYWtpbmc7XG5cbiAgICAgICAgICAgIHNub3dmbGFrZXMuZm9yRWFjaChzbm93Zmxha2UgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghYmFsbFNoYWtpbmcpIHNub3dmbGFrZS5tb3ZlVG9Cb3R0b20oKTtcbiAgICAgICAgICAgICAgICBzbm93Zmxha2UudXBkYXRlKGJhbGxYLCBiYWxsWSwgYmFsbFJhZGl1cywgYmFsbFNoYWtpbmcpO1xuICAgICAgICAgICAgICAgIHNub3dmbGFrZS5kcmF3KCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgYW5pbWF0ZSgpO1xuXG4gICAgfSkoKTtcbn0pXG5cbi8vIHNub3dmYWxsIGFuaW1hdGlvXG5cbiAgICBsZXQgaSA9IDE7XG4gICAgZnVuY3Rpb24gc2VuZFNoYWtlUmVxdWVzdCgpIHtcbiAgICAgICAgaWYgKCF1c2VySWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkZWJ1Zykge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgLy8gbnVtYmVyOiBpKyssXG4gICAgICAgICAgICAgICAgdHlwZTogJ3Rlc3QnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHt1c2VyaWQ6IHVzZXJJZH07XG4gICAgICAgIHJldHVybiByZXF1ZXN0KCcvc3BpbicsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGFyYW1zKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBidG5TaGFrZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZ3Jlc3NfX3NoYWtlXCIpLFxuICAgICAgICAgIGJhbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNwaGVyZVwiKSxcbiAgICAgICAgICBiYWxsQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zcGhlcmVfX2JveFwiKVxuXG4gICAgbGV0IGN1cnJlbnRQcml6ZTtcbiAgICBsZXQgcGFzdFByaXplO1xuXG5cblxuICAgIC8vINCa0L7QttC10L0g0LrQu9Cw0YEg0LLRltC00L/QvtCy0ZbQtNCw0ZQg0LLQuNCz0YDQsNC90L7QvNGDINC/0YDQuNC30YM6XG4gICAgLy8gXCJfaXBob25lXCIgLSDQstC40LPRgNCw0L3QviBpUGhvbmVcbiAgICAvLyBcIl90dlwiIC0g0LLQuNCz0YDQsNC90L4g0YLQtdC70LXQstGW0LfQvtGAXG4gICAgLy8gXCJfamJsXCIgLSDQstC40LPRgNCw0L3QviBKQkwt0LrQvtC70L7QvdC60YNcbiAgICAvLyBcIl9tZWdvZ29cIiAtINCy0LjQs9GA0LDQvdC+INC/0ZbQtNC/0LjRgdC60YMgTWVnb2dvXG4gICAgLy8gXCJfcmVzcGluXCIgLSDQtNC+0LTQsNGC0LrQvtCy0LUg0L7QsdC10YDRgtCw0L3QvdGPXG4gICAgLy8gXCJfbm90aGluZ1wiIC0g0L3RltGH0L7Qs9C+INC90LUg0LLQuNCz0YDQsNC90L5cbiAgICAvLyBcIl9wb2ludHM1MFwiIC0g0LLQuNCz0YDQsNC90L4gNTAg0LHQvtC90YPRgdC90LjRhSDQsdCw0LvRltCyXG4gICAgLy8gXCJfZnMxMFwiIC0g0LLQuNCz0YDQsNC90L4gMTAg0YTRgNGW0YHQv9GW0L3RltCyXG4gICAgLy8gXCJfZnMyNVwiIC0g0LLQuNCz0YDQsNC90L4gMjUg0YTRgNGW0YHQv9GW0L3RltCyXG4gICAgLy8gXCJfZnM1MFwiIC0g0LLQuNCz0YDQsNC90L4gNTAg0YTRgNGW0YHQv9GW0L3RltCyXG4gICAgLy8gXCJfc2F2ZUJldDEwMFwiIC0g0LLQuNCz0YDQsNC90L4g0YHRgtGA0LDRhdC+0LLQutGDINC90LAgMTAwINGB0YLQsNCy0L7QulxuICAgIC8vIFwiX3NhdmVCZXQxNTBcIiAtINCy0LjQs9GA0LDQvdC+INGB0YLRgNCw0YXQvtCy0LrRgyDQvdCwIDE1MCDRgdGC0LDQstC+0LpcbiAgICAvLyBcIl9zYXZlQmV0MjAwXCIgLSDQstC40LPRgNCw0L3QviDRgdGC0YDQsNGF0L7QstC60YMg0L3QsCAyMDAg0YHRgtCw0LLQvtC6XG4gICAgLy8g0YTRg9C90LrRhtGW0Y8gaW5pdFNoYWtlINC/0YDQvtC60LjQtNGD0ZQg0LrQu9Cw0YHQuCDQstGW0LTQv9C+0LLRltC00L3RliDQv9GA0LjQt9Cw0Lwg0L3QsCDQsdC70L7QuiAuc3BoZXJlINC00LvRjyDQstGW0LTQvtCx0YDQsNC20LXQvdC90Y8g0L/RgNC40LfRg1xuICAgIGNvbnN0IHdpbkNsYXNzZXMgPSBbXG4gICAgICAgIFwiX2lwaG9uZVwiLCBcIl90dlwiLCBcIl9qYmxcIiwgXCJfbWVnb2dvXCIsIFwiX3Jlc3BpblwiLCBcIl9ub3RoaW5nXCIsIFwiX2ZzMTBcIiwgXCJfZnMyNVwiLFxuICAgICAgICBcIl9mczUwXCIsIFwiX3NhdmVCZXQxMDBcIiwgXCJfc2F2ZUJldDE1MFwiLCBcIl9zYXZlQmV0MjAwXCIsIFwiX3BvaW50czUwXCJcbiAgICBdO1xuXG5cbiAgICBmdW5jdGlvbiByZW1vdmVQcml6ZShiYWxsLCBib3gsIGJ0bil7XG4gICAgICAgIGJhbGwuY2xhc3NMaXN0LnJlbW92ZShcIl9iZWZvcmUtaGlkZVwiKTtcbiAgICAgICAgd2luQ2xhc3Nlcy5mb3JFYWNoKGl0ZW0gPT57XG4gICAgICAgICAgICBiYWxsLmNsYXNzTGlzdC5yZW1vdmUoYCR7aXRlbX1gKVxuICAgICAgICB9KVxuICAgICAgICBib3guY2xhc3NMaXN0LnJlbW92ZShcIl9ib3gtb3BhY2l0eVwiKVxuICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZShcIl9kaXNhYmxlZFwiKVxuXG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gYW5pbWF0ZVNoYWtlKGJhbGwsIGJveCwgYnRuLCBwcml6ZSwgcHJpemVOdW0pIHtcblxuXG4gICAgICAgIGNvbnN0IGRlbGF5ID0gKG1zKSA9PiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKVxuXG4gICAgICAgIHJlbW92ZVByaXplKGJhbGwsIGJveCwg0LjQtdGCKVxuXG4gICAgICAgIGlmKHByaXplTnVtKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHByaXplTnVtKVxuICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJfZGlzYWJsZWRcIik7XG4gICAgICAgICAgICBiYWxsLmNsYXNzTGlzdC5hZGQoXCJfc2hha2VcIik7XG4gICAgICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcIl9zaGFrZS1yZXZlcnNlXCIpO1xuXG4gICAgICAgICAgICBhd2FpdCBkZWxheSgyMDAwKVxuXG4gICAgICAgICAgICBiYWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJfc2hha2VcIik7XG4gICAgICAgICAgICBiYWxsLmNsYXNzTGlzdC5hZGQoXCJfYmVmb3JlLWhpZGVcIik7XG4gICAgICAgICAgICBib3guY2xhc3NMaXN0LnJlbW92ZShcIl9zaGFrZS1yZXZlcnNlXCIpO1xuICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJfYm94LW9wYWNpdHlcIik7XG5cbiAgICAgICAgICAgIGF3YWl0IGRlbGF5KDIwMCk7XG5cbiAgICAgICAgICAgIGJhbGwuY2xhc3NMaXN0LmFkZChgJHtwcml6ZX1gKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJfZGlzYWJsZWRcIik7XG4gICAgICAgICAgICBiYWxsLmNsYXNzTGlzdC5hZGQoXCJfc2hha2VcIik7XG4gICAgICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcIl9zaGFrZS1yZXZlcnNlXCIpO1xuXG4gICAgICAgICAgICAvLyBhd2FpdCBkZWxheSgyMDAwKVxuXG4gICAgICAgICAgICBiYWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJfc2hha2VcIik7XG4gICAgICAgICAgICBiYWxsLmNsYXNzTGlzdC5hZGQoXCJfYmVmb3JlLWhpZGVcIik7XG4gICAgICAgICAgICBib3guY2xhc3NMaXN0LnJlbW92ZShcIl9zaGFrZS1yZXZlcnNlXCIpO1xuICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJfYm94LW9wYWNpdHlcIik7XG5cbiAgICAgICAgICAgIGlmKHByaXplTnVtID09PSAwKSBhd2FpdCBkZWxheSgyMDApO1xuXG4gICAgICAgICAgICBiYWxsLmNsYXNzTGlzdC5hZGQoYCR7cHJpemV9YCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhc3RQcml6ZSA9IHByaXplO1xuXG5cbiAgICB9XG5cblxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJwcml6ZU51bVwiLCAwKVxuXG5cbiAgICBsZXQgcHJpemVTdGF0ZSA9IHdpbkNsYXNzZXNbc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInByaXplTnVtXCIpXVxuXG4gICAgY29uc3QgYnRuUHJpemUxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaXplMScpO1xuICAgIGNvbnN0IGJ0blByaXplMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcml6ZTInKTtcbiAgICBjb25zdCBidG5Qcml6ZTMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpemUzJyk7XG4gICAgY29uc3QgYnRuUHJpemU0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaXplNCcpO1xuICAgIGNvbnN0IGJ0blByaXplNSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcml6ZTUnKTtcbiAgICBjb25zdCBidG5Qcml6ZTYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpemU2Jyk7XG4gICAgY29uc3QgYnRuUHJpemU3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaXplNycpO1xuICAgIGNvbnN0IGJ0blByaXplOCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcml6ZTgnKTtcbiAgICBjb25zdCBidG5Qcml6ZTkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpemU5Jyk7XG4gICAgY29uc3QgYnRuUHJpemUxMCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcml6ZTEwJyk7XG4gICAgY29uc3QgYnRuUHJpemUxMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcml6ZTExJyk7XG4gICAgY29uc3QgYnRuUHJpemUxMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcml6ZTEyJyk7XG4gICAgY29uc3QgYnRuUHJpemUxMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcml6ZTEzJyk7XG5cbiAgICBmdW5jdGlvbiBzZXRQcml6ZU51bShidG4sIG51bSl7XG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+e1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcInByaXplTnVtXCIsIG51bSlcbiAgICAgICAgICAgIHByaXplU3RhdGUgPSB3aW5DbGFzc2VzW3Nlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJwcml6ZU51bVwiKV1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBzZXRQcml6ZU51bShidG5Qcml6ZTEsIDApXG4gICAgc2V0UHJpemVOdW0oYnRuUHJpemUyLCAxKVxuICAgIHNldFByaXplTnVtKGJ0blByaXplMywgMilcbiAgICBzZXRQcml6ZU51bShidG5Qcml6ZTQsIDMpXG4gICAgc2V0UHJpemVOdW0oYnRuUHJpemU1LCA0KVxuICAgIHNldFByaXplTnVtKGJ0blByaXplNiwgNSlcbiAgICBzZXRQcml6ZU51bShidG5Qcml6ZTcsIDYpXG4gICAgc2V0UHJpemVOdW0oYnRuUHJpemU4LCA3KVxuICAgIHNldFByaXplTnVtKGJ0blByaXplOSwgOClcbiAgICBzZXRQcml6ZU51bShidG5Qcml6ZTEwLDkpXG4gICAgc2V0UHJpemVOdW0oYnRuUHJpemUxMSwgMTApXG4gICAgc2V0UHJpemVOdW0oYnRuUHJpemUxMiwgMTEpXG4gICAgc2V0UHJpemVOdW0oYnRuUHJpemUxMywgMTIpXG5cbiAgICBmdW5jdGlvbiBpbml0U2hha2UoYmFsbCwgYnRuLCBib3gsIHByaXplTnVtKSB7XG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgICAgICBzZW5kU2hha2VSZXF1ZXN0KCkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXMgfHwgISFyZXMuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gYnRuU2hha2UuY2xhc3NMaXN0LmFkZCgncHVsc2UtYnRuJyk7XG4gICAgICAgICAgICAgICAgICAgIGJ0blNoYWtlLmNsYXNzTGlzdC5yZW1vdmUoJ19kaXNhYmxlZCcpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gY29uc3QgcHJpemUgPSByZXMubnVtYmVyO1xuICAgICAgICAgICAgICAgIGNvbnN0IHByaXplID0gcHJpemVTdGF0ZTtcbiAgICAgICAgICAgICAgICBjb25zdCBzdHJlYWtCb251cyA9IHJlcy5zdHJlYWtCb251cyB8fCBkZWJ1ZztcbiAgICAgICAgICAgICAgICBhbmltYXRlU2hha2UoYmFsbCwgYm94LCBidG4sIHByaXplLCBwcml6ZU51bSkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoXCJhbmltIGVycm9yOlwiLCBlcnIpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGluaXRTaGFrZShiYWxsLCBidG5TaGFrZSwgYmFsbEJveCwgc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInByaXplTnVtXCIpKVxuICAgIGluaXRTaGFrZShiYWxsLCBidG5Qcml6ZTEsIGJhbGxCb3gpXG4gICAgaW5pdFNoYWtlKGJhbGwsIGJ0blByaXplMiwgYmFsbEJveCApXG4gICAgaW5pdFNoYWtlKGJhbGwsIGJ0blByaXplMywgYmFsbEJveCApXG4gICAgaW5pdFNoYWtlKGJhbGwsIGJ0blByaXplNCwgYmFsbEJveCApXG4gICAgaW5pdFNoYWtlKGJhbGwsIGJ0blByaXplNSwgYmFsbEJveCApXG4gICAgaW5pdFNoYWtlKGJhbGwsIGJ0blByaXplNiwgYmFsbEJveCApXG4gICAgaW5pdFNoYWtlKGJhbGwsIGJ0blByaXplNywgYmFsbEJveCApXG4gICAgaW5pdFNoYWtlKGJhbGwsIGJ0blByaXplOCwgYmFsbEJveCApXG4gICAgaW5pdFNoYWtlKGJhbGwsIGJ0blByaXplOSwgYmFsbEJveCApXG4gICAgaW5pdFNoYWtlKGJhbGwsIGJ0blByaXplMTAsIGJhbGxCb3ggKVxuICAgIGluaXRTaGFrZShiYWxsLCBidG5Qcml6ZTExLCBiYWxsQm94IClcbiAgICBpbml0U2hha2UoYmFsbCwgYnRuUHJpemUxMiwgYmFsbEJveCApXG4gICAgaW5pdFNoYWtlKGJhbGwsIGJ0blByaXplMTMsIGJhbGxCb3ggKVxuXG5cbi8vIHRhYmxlIHRvZ2dsZVxuXG4gICAgY29uc3QgdG9nZ2xlSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFibGVfX3RvZ2dsZS1pdGVtJyksXG4gICAgICAgICAgdGFibGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYmxlX19ib2R5JylcblxuICAgIHRvZ2dsZUl0ZW1zLmZvckVhY2goKHRvZ2dsZUl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIHRvZ2dsZUl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0b2dnbGVJdGVtcy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdfYWN0aXZlJykpO1xuICAgICAgICAgICAgdGFibGVzLmZvckVhY2godGFibGUgPT4gdGFibGUuY2xhc3NMaXN0LnJlbW92ZSgnX2FjdGl2ZScpKTtcbiAgICAgICAgICAgIHRvZ2dsZUl0ZW0uY2xhc3NMaXN0LmFkZCgnX2FjdGl2ZScpO1xuICAgICAgICAgICAgdGFibGVzW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdfYWN0aXZlJyk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG5cblxuICAgIGNvbnN0IGJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJ0blwiKSxcbiAgICAgICAgICBvcyA9IGRldGVjdE9TKClcblxuICAgIGlmIChvcyA9PT0gXCJtYWNPU1wiIHx8IG9zID09PSBcImlPU1wiKXtcbiAgICAgICAgYnRucy5mb3JFYWNoKGJ0biA9PntcbiAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiX2lvc1wiKVxuICAgICAgICB9KVxuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gZGV0ZWN0T1MoKSB7XG4gICAgICAgIGNvbnN0IHVzZXJBZ2VudCA9IG5hdmlnYXRvci51c2VyQWdlbnQgfHwgbmF2aWdhdG9yLnZlbmRvciB8fCB3aW5kb3cub3BlcmE7XG4gICAgICAgIGNvbnN0IHBsYXRmb3JtID0gbmF2aWdhdG9yLnBsYXRmb3JtIHx8IFwidW5rbm93blwiO1xuICAgICAgICBsZXQgb3M7XG5cbiAgICAgICAgaWYgKC9hbmRyb2lkL2kudGVzdCh1c2VyQWdlbnQpICYmIC9saW51eCBhcm0vaS50ZXN0KHBsYXRmb3JtKSkge1xuICAgICAgICAgICAgb3MgPSBcIkFuZHJvaWRcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoL2lQYWR8aVBob25lfGlQb2QvLnRlc3QodXNlckFnZW50KSAmJiAhd2luZG93Lk1TU3RyZWFtKSB7XG4gICAgICAgICAgICBvcyA9IFwiaU9TXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKC9NYWNpbnRvc2h8TWFjSW50ZWx8TWFjUFBDfE1hYzY4Sy8udGVzdChwbGF0Zm9ybSkpIHtcbiAgICAgICAgICAgIG9zID0gXCJtYWNPU1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmICgvV2luMzJ8V2luNjR8V2luZG93c3xXT1c2NC8udGVzdChwbGF0Zm9ybSkpIHtcbiAgICAgICAgICAgIG9zID0gXCJXaW5kb3dzXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKC9MaW51eC8udGVzdChwbGF0Zm9ybSkgJiYgIS9hbmRyb2lkL2kudGVzdCh1c2VyQWdlbnQpKSB7XG4gICAgICAgICAgICBvcyA9IFwiTGludXhcIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3NcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhcItCe0L/QtdGA0LDRhtGW0LnQvdCwINGB0LjRgdGC0LXQvNCwOlwiLCBvcyk7XG5cbiAgICBjb25zdCBoYW5kbGVSZXNpemUgPSAoKSA9PntcbiAgICAgICAgbGV0IHRvdWNoU3RhcnRYID0gMDtcbiAgICAgICAgbGV0IHRvdWNoRW5kWCA9IDA7XG5cbiAgICAgICAgY2FyZHNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdG91Y2hTdGFydFggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5zY3JlZW5YO1xuICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgIGNhcmRzQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0b3VjaEVuZFggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5zY3JlZW5YO1xuICAgICAgICAgICAgaGFuZGxlU3dpcGUoKTtcbiAgICAgICAgfSwgZmFsc2UpO1xuXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZVN3aXBlKCkge1xuICAgICAgICAgICAgY29uc3Qgc3dpcGVUaHJlc2hvbGQgPSA1MDtcbiAgICAgICAgICAgIGlmICh0b3VjaEVuZFggPCB0b3VjaFN0YXJ0WCAtIHN3aXBlVGhyZXNob2xkKSB7XG4gICAgICAgICAgICAgICAgbW92ZVJpZ2h0KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0b3VjaEVuZFggPiB0b3VjaFN0YXJ0WCArIHN3aXBlVGhyZXNob2xkKSB7XG4gICAgICAgICAgICAgICAgbW92ZUxlZnQoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG1vdmVSaWdodEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1vdmVSaWdodCk7XG4gICAgICAgIG1vdmVMZWZ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbW92ZUxlZnQpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9yaWVudGF0aW9uY2hhbmdlXCIsICgpID0+e1xuICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBoYW5kbGVSZXNpemUoKVxuXG5cbiAgICAvLyBmb3IgdGVzdFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGFyay1idG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJkYXJrXCIpXG4gICAgfSlcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVuLWJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmF2LXBhZ2VcIikuY2xhc3NMaXN0LnRvZ2dsZShcImVuXCIpXG4gICAgfSlcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVzdE1lbnVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJpemVzLWJ0bnNcIikuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIilcbiAgICB9KVxuXG59KSgpOyJdfQ==
