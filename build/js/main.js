"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
(function () {
  var apiURL = 'https://fav-prom.com/api_csgo';
  var unauthMsgs = document.querySelectorAll('.unauth-msg'),
    participateBtns = document.querySelectorAll('.btn-join'),
    mainPage = document.querySelector('.fav-page'),
    ballWrap = document.querySelector(".ball"),
    guideWrap = document.querySelector(".guide"),
    gameWrap = document.querySelector(".games");
  var ukLeng = document.querySelector('#ukLeng');
  var enLeng = document.querySelector('#enLeng');
  var locale = 'uk',
    week = 1;
  if (ukLeng) locale = 'uk';
  if (enLeng) locale = 'en';
  var i18nData = {};
  var debug = true;
  // let userId;
  var userId = 101234861;
  // let userId = 9999;

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
      // elems.forEach(elem => {
      //     const key = elem.getAttribute('data-translate');
      //     elem.innerHTML = i18nData[key] || '*----NEED TO BE TRANSLATED----*   key:  ' + key;
      //     elem.removeAttribute('data-translate');
      // })
      console.log("translate working");
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
    } else if (currentSlide === totalCards - (visibleSlides + 1)) {
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
    hidePopups(cards);
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
    hidePopups(cards);
  };

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
  function hidePopups(popups) {
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
    ballPopupOpen = document.querySelector(".progress__popup-btn");
  setPopups(cards, prizeOpenBtns);
  setPopups(guidePopupsWrap, guideOpenBtns);
  guideCloseBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      hidePopups(guidePopupsWrap);
    });
  });
  prizeCloseBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      hidePopups(cards);
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
  function animateShake(_x, _x2, _x3, _x4) {
    return _animateShake.apply(this, arguments);
  } // Кожен клас відповідає виграному призу:
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
  function _animateShake() {
    _animateShake = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(ball, box, btn, prize) {
      var delay;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            delay = function delay(ms) {
              return new Promise(function (resolve) {
                return setTimeout(resolve, ms);
              });
            };
            btn.classList.add("_disabled");
            ball.classList.add("_shake");
            box.classList.add("_shake-reverse");
            _context.next = 6;
            return delay(2000);
          case 6:
            ball.classList.remove("_shake");
            ball.classList.add("_before-hide");
            box.classList.remove("_shake-reverse");
            box.classList.add("_box-opacity");
            _context.next = 12;
            return delay(200);
          case 12:
            ball.classList.add("".concat(prize));
          case 13:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _animateShake.apply(this, arguments);
  }
  var winClasses = ["_iphone", "_tv", "_jbl", "_megogo", "_respin", "_nothing", "_points50", "_fs10", "_fs25", "_fs50", "_saveBet100", "_saveBet150", "_saveBet200"];
  function initShake(ball, btn, box) {
    btn.addEventListener("click", function () {
      sendShakeRequest().then(function (res) {
        console.log(res);
        if (!res || !!res.error) {
          // btnShake.classList.add('pulse-btn');
          btnShake.classList.remove('_disabled');
          return;
        }
        // const prize = res.number;
        var prize = winClasses[12];
        var streakBonus = res.streakBonus || debug;
        animateShake(ball, box, btn, prize)["catch"](function (err) {
          return console.error("anim error:", err);
        });
      });
    });
  }
  initShake(ball, btnShake, ballBox);

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
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwidW5hdXRoTXNncyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInBhcnRpY2lwYXRlQnRucyIsIm1haW5QYWdlIiwicXVlcnlTZWxlY3RvciIsImJhbGxXcmFwIiwiZ3VpZGVXcmFwIiwiZ2FtZVdyYXAiLCJ1a0xlbmciLCJlbkxlbmciLCJsb2NhbGUiLCJ3ZWVrIiwiaTE4bkRhdGEiLCJkZWJ1ZyIsInVzZXJJZCIsInN0eWxlIiwiZGlzcGxheSIsImxvYWRUcmFuc2xhdGlvbnMiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwidHJhbnNsYXRlIiwibXV0YXRpb25PYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJtdXRhdGlvbnMiLCJvYnNlcnZlIiwiZ2V0RWxlbWVudEJ5SWQiLCJjaGlsZExpc3QiLCJzdWJ0cmVlIiwiZWxlbXMiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVmcmVzaExvY2FsaXplZENsYXNzIiwiaW5pdCIsImVsZW1lbnQiLCJiYXNlQ3NzQ2xhc3MiLCJsYW5nIiwicmVtb3ZlIiwid2luZG93Iiwic3RvcmUiLCJzdGF0ZSIsImdldFN0YXRlIiwiYXV0aCIsImlzQXV0aG9yaXplZCIsImlkIiwic2V0dXBQYWdlIiwiYyIsImkiLCJzZXRJbnRlcnZhbCIsImdfdXNlcl9pZCIsImNoZWNrVXNlckF1dGgiLCJjbGVhckludGVydmFsIiwiZm9yRWFjaCIsImF1dGhCdG4iLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwicGFydGljaXBhdGUiLCJwYXJhbXMiLCJ1c2VyaWQiLCJyZXF1ZXN0IiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJpdGVtIiwibGluayIsImV4dHJhT3B0aW9ucyIsImhlYWRlcnMiLCJ1bmF1dGhNZXMiLCJwb2ludHNQZXJEYXkiLCJzcGluQWxsb3dlZCIsInNwaW5zU3RyZWFrIiwiZGlzcGxheVVzZXJTcGlucyIsInNwaW5zIiwicGFydGljaXBhdGVCdG4iLCJ0cmFuc2xhdGVLZXkiLCJrZXkiLCJzcGluSXRlbSIsIm5vU3Bpbkl0ZW0iLCJzcGluc0NvbnRhaW5lciIsImlubmVySFRNTCIsInNwaW4iLCJzcGluRGF0ZSIsIkRhdGUiLCJkYXRlIiwiZm9ybWF0dGVkRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsInNwaW5OYW1lIiwibmFtZSIsInNwaW5FbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwiY2FyZHNDb250YWluZXIiLCJjYXJkcyIsImNhcmRzV3JhcCIsIm1vdmVSaWdodEJ1dHRvbiIsIm1vdmVMZWZ0QnV0dG9uIiwidGFic0NvbnRhaW5lciIsImlzTW9iaWxlIiwiaW5uZXJXaWR0aCIsInRvdGFsQ2FyZHMiLCJjYXJkV2lkdGgiLCJjbGllbnRXaWR0aCIsImNhcmRzTWFyZ2luIiwidmlzaWJsZVNsaWRlcyIsIk1hdGgiLCJjZWlsIiwidG90YWxUYWJzIiwidGFiV2lkdGgiLCJjdXJyZW50U2xpZGUiLCJjYXJkc1Bvc2l0aW9uIiwibGVmdFNsaWRlIiwicmlnaHRTbGlkZSIsInVwZGF0ZUFjdGl2ZUNhcmQiLCJhY3RpdmVJbmRleCIsImNhcmQiLCJsZWZ0U2xpZGVUYWIiLCJyaWdodFNsaWRlVGFiIiwiZmlyc3RMYXN0U2xpZGVzIiwic2V0Q2FyZHNQb3NpdGlvbiIsInBvc2l0aW9uIiwidHJhbnNmb3JtIiwibW92ZVJpZ2h0IiwibWF4UG9zaXRpb24iLCJoaWRlUG9wdXBzIiwibW92ZUxlZnQiLCJzZXRQb3B1cHMiLCJwb3B1cHMiLCJwb3B1cHNCdG5zIiwiYnRuIiwicG9wdXAiLCJqIiwicHJpemVPcGVuQnRucyIsInByaXplQ2xvc2VCdG5zIiwiZ3VpZGVQb3B1cHNXcmFwIiwiZ3VpZGVPcGVuQnRucyIsImd1aWRlQ2xvc2VCdG5zIiwidGFibGVQb3B1cCIsInRhYmxlUG9wdXBDbG9zZSIsInRhYmxlUG9wdXBPcGVuIiwiYmFsbFBvcHVwIiwiYmFsbFBvcHVwQ2xvc2UiLCJiYWxsUG9wdXBPcGVuIiwib3ZlcmZsb3ciLCJDT1VOVCIsIlNub3dzdG9ybSIsIm1hc3RoZWFkIiwiY2FudmFzIiwiY3R4IiwiZ2V0Q29udGV4dCIsIndpZHRoIiwiaGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiYWN0aXZlIiwic25vd2ZsYWtlcyIsInByb3RvdHlwZSIsImxlZnQiLCJ0b3AiLCJvblJlc2l6ZSIsImJpbmQiLCJzbm93Zmxha2UiLCJTbm93Zmxha2UiLCJyZXNldCIsInB1c2giLCJyZXF1ZXN0QW5pbUZyYW1lIiwidXBkYXRlIiwiZmlsbFN0eWxlIiwid2FzQWN0aXZlIiwiY2xlYXJSZWN0IiwieSIsInZ5IiwieCIsInZ4IiwiZ2xvYmFsQWxwaGEiLCJvIiwiYmVnaW5QYXRoIiwiYXJjIiwiciIsIlBJIiwiY2xvc2VQYXRoIiwiZmlsbCIsInNub3dzdG9ybSIsInJhbmRvbSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1velJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbGxiYWNrIiwic2V0VGltZW91dCIsInNraWVzIiwic2t5IiwiYmFsbCIsInBhcmVudEVsZW1lbnQiLCJtYXhTbm93Zmxha2VzIiwibWF4U3BlZWQiLCJzdG9ybUNvdW50ZXIiLCJzbm93Zmxha2VzUmVtb3ZlZCIsInJhZGl1cyIsInNwZWVkWCIsInNwZWVkWSIsImFjY2VsZXJhdGlvbiIsIm1vdmluZ1RvQm90dG9tIiwiYmFsbFgiLCJiYWxsWSIsImJhbGxSYWRpdXMiLCJiYWxsU2hha2luZyIsInRhcmdldFNwZWVkIiwic3BlZWREZWNheUZhY3RvciIsIm1heCIsIm1pbiIsImR4IiwiZHkiLCJkaXN0YW5jZSIsInNxcnQiLCJhbmdsZSIsImF0YW4yIiwib3ZlcmxhcCIsImNvcyIsInNpbiIsInNwbGljZSIsImluZGV4T2YiLCJsYXN0QmFsbFNoYWtpbmdTdGF0ZSIsImFuaW1hdGUiLCJiYWxsVHJhbnNmb3JtIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIm9mZnNldFdpZHRoIiwibWF0cml4IiwiRE9NTWF0cml4Iiwib2Zmc2V0TGVmdCIsIm00MSIsIm9mZnNldFRvcCIsIm00MiIsIm1vdmVUb0JvdHRvbSIsImRyYXciLCJzZW5kU2hha2VSZXF1ZXN0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0eXBlIiwiYnRuU2hha2UiLCJiYWxsQm94IiwiYW5pbWF0ZVNoYWtlIiwiYm94IiwicHJpemUiLCJkZWxheSIsIm1zIiwid2luQ2xhc3NlcyIsImluaXRTaGFrZSIsImVycm9yIiwic3RyZWFrQm9udXMiLCJlcnIiLCJ0b2dnbGVJdGVtcyIsInRhYmxlcyIsInRvZ2dsZUl0ZW0iLCJpbmRleCIsInRhYmxlIiwiYnRucyIsIm9zIiwiZGV0ZWN0T1MiLCJ1c2VyQWdlbnQiLCJuYXZpZ2F0b3IiLCJ2ZW5kb3IiLCJvcGVyYSIsInBsYXRmb3JtIiwidGVzdCIsIk1TU3RyZWFtIiwiaGFuZGxlUmVzaXplIiwidG91Y2hTdGFydFgiLCJ0b3VjaEVuZFgiLCJldmVudCIsImNoYW5nZWRUb3VjaGVzIiwic2NyZWVuWCIsImhhbmRsZVN3aXBlIiwic3dpcGVUaHJlc2hvbGQiLCJsb2NhdGlvbiIsInJlbG9hZCIsInRvZ2dsZSJdLCJtYXBwaW5ncyI6Ijs7OytDQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQSxDQUFDLFlBQVk7RUFDVCxJQUFNQSxNQUFNLEdBQUcsK0JBQStCO0VBRTlDLElBQ0lDLFVBQVUsR0FBR0MsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUM7SUFDckRDLGVBQWUsR0FBR0YsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUM7SUFDeERFLFFBQVEsR0FBR0gsUUFBUSxDQUFDSSxhQUFhLENBQUMsV0FBVyxDQUFDO0lBQzlDQyxRQUFRLEdBQUdMLFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLE9BQU8sQ0FBQztJQUMxQ0UsU0FB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QUssQ0FBQztJQUVULFNBQVNBLFdBQVcsR0FBRztNQUNuQixJQUFNQyxjQUFjLEdBQUcsRUFBRTtNQUN6QixJQUFJTCxTQUFTLEdBQUdELFdBQVcsR0FBR00sY0FBYyxFQUFFO1FBQzFDckosU0FBUyxFQUFFO01BQ2Y7TUFDQSxJQUFJZ0osU0FBUyxHQUFHRCxXQUFXLEdBQUdNLGNBQWMsRUFBRTtRQUMxQ2xKLFFBQVEsRUFBRTtNQUNkO0lBQ0o7SUFDQTlCLGVBQWUsQ0FBQzFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRXFFLFNBQVMsQ0FBQztJQUNwRDFCLGNBQWMsQ0FBQzNDLGdCQUFnQixDQUFDLE9BQU8sRUFBRXdFLFFBQVEsQ0FBQztJQUNsRHhGLE1BQU0sQ0FBQ2dCLGdCQUFnQixDQUFDLG1CQUFtQixFQUFFLFlBQUs7TUFDOUMyTixRQUFRLENBQUNDLE1BQU0sRUFBRTtJQUNyQixDQUFDLENBQUM7RUFDTixDQUFDO0VBRURULFlBQVksRUFBRTs7RUFHZDtFQUNBN1EsUUFBUSxDQUFDSSxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUNzRCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBSztJQUMvRDFELFFBQVEsQ0FBQ2tFLElBQUksQ0FBQ2hDLFNBQVMsQ0FBQ3FQLE1BQU0sQ0FBQyxNQUFNLENBQUM7RUFDMUMsQ0FBQyxDQUFDO0VBQ0Z2UixRQUFRLENBQUNJLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQ3NELGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFLO0lBQzdEMUQsUUFBUSxDQUFDSSxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUM4QixTQUFTLENBQUNxUCxNQUFNLENBQUMsSUFBSSxDQUFDO0VBQzlELENBQUMsQ0FBQztBQUVOLENBQUMsR0FBRyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBhcGlVUkwgPSAnaHR0cHM6Ly9mYXYtcHJvbS5jb20vYXBpX2NzZ28nXG5cbiAgICBjb25zdFxuICAgICAgICB1bmF1dGhNc2dzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnVuYXV0aC1tc2cnKSxcbiAgICAgICAgcGFydGljaXBhdGVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bi1qb2luJyksXG4gICAgICAgIG1haW5QYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhdi1wYWdlJyksXG4gICAgICAgIGJhbGxXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYWxsXCIpLFxuICAgICAgICBndWlkZVdyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmd1aWRlXCIpLFxuICAgICAgICBnYW1lV3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZXNcIik7XG5cbiAgICBjb25zdCB1a0xlbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdWtMZW5nJyk7XG4gICAgY29uc3QgZW5MZW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VuTGVuZycpO1xuXG4gICAgbGV0IGxvY2FsZSA9ICd1aycsXG4gICAgICAgIHdlZWsgPSAxO1xuXG4gICAgaWYgKHVrTGVuZykgbG9jYWxlID0gJ3VrJztcbiAgICBpZiAoZW5MZW5nKSBsb2NhbGUgPSAnZW4nO1xuXG5cbiAgICBsZXQgaTE4bkRhdGEgPSB7fTtcbiAgICBjb25zdCBkZWJ1ZyA9IHRydWU7XG4gICAgLy8gbGV0IHVzZXJJZDtcbiAgICBsZXQgdXNlcklkID0gMTAxMjM0ODYxO1xuICAgIC8vIGxldCB1c2VySWQgPSA5OTk5O1xuXG4gICAgaWYod2VlayA9PT0gMSl7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5fd2VlazEnKS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCJcbiAgICB9XG4gICAgaWYod2VlayA9PT0gMil7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5fd2VlazInKS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCJcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkVHJhbnNsYXRpb25zKCkge1xuICAgICAgICByZXR1cm4gZmV0Y2goYCR7YXBpVVJMfS90cmFuc2xhdGVzLyR7bG9jYWxlfWApLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgICAgICBpMThuRGF0YSA9IGpzb247XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlKCk7XG5cbiAgICAgICAgICAgICAgICB2YXIgbXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChtdXRhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWxsJyksIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBzdWJ0cmVlOiB0cnVlLFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmFuc2xhdGUoKSB7XG4gICAgICAgIGNvbnN0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdHJhbnNsYXRlXScpXG4gICAgICAgIGlmIChlbGVtcyAmJiBlbGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIGVsZW1zLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAgICAgICAvLyAgICAgY29uc3Qga2V5ID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgICAgICAgICAvLyAgICAgZWxlbS5pbm5lckhUTUwgPSBpMThuRGF0YVtrZXldIHx8ICcqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qICAga2V5OiAgJyArIGtleTtcbiAgICAgICAgICAgIC8vICAgICBlbGVtLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgIC8vIH0pXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRyYW5zbGF0ZSB3b3JraW5nXCIpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxvY2FsZSA9PT0gJ2VuJykge1xuICAgICAgICAgICAgbWFpblBhZ2UuY2xhc3NMaXN0LmFkZCgnZW4nKTtcbiAgICAgICAgfVxuICAgICAgICByZWZyZXNoTG9jYWxpemVkQ2xhc3MoKTtcbiAgICB9XG4gICAgbG9hZFRyYW5zbGF0aW9ucygpXG4gICAgICAgIC50aGVuKGluaXQpO1xuICAgIGZ1bmN0aW9uIHJlZnJlc2hMb2NhbGl6ZWRDbGFzcyhlbGVtZW50LCBiYXNlQ3NzQ2xhc3MpIHtcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBsYW5nIG9mIFsnaHInLCAnZW4nXSkge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGJhc2VDc3NDbGFzcyArIGxhbmcpO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChiYXNlQ3NzQ2xhc3MgKyBsb2NhbGUpO1xuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5zdG9yZSkge1xuICAgICAgICAgICAgdmFyIHN0YXRlID0gd2luZG93LnN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgICAgICB1c2VySWQgPSBzdGF0ZS5hdXRoLmlzQXV0aG9yaXplZCAmJiBzdGF0ZS5hdXRoLmlkIHx8ICcnO1xuICAgICAgICAgICAgc2V0dXBQYWdlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXR1cFBhZ2UoKTtcbiAgICAgICAgICAgIGxldCBjID0gMDtcbiAgICAgICAgICAgIHZhciBpID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChjIDwgNTApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEhd2luZG93LmdfdXNlcl9pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklkID0gd2luZG93LmdfdXNlcl9pZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHVwUGFnZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tVc2VyQXV0aCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNoZWNrVXNlckF1dGgoKTtcblxuICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaCgoYXV0aEJ0biwgaSkgPT4ge1xuICAgICAgICAgICAgYXV0aEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0dXBQYWdlKCkge31cbiAgICBmdW5jdGlvbiBwYXJ0aWNpcGF0ZSgpIHtcbiAgICAgICAgaWYgKCF1c2VySWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHt1c2VyaWQ6IHVzZXJJZH07XG4gICAgICAgIHJlcXVlc3QoJy91c2VyJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXJhbXMpXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuICAgICAgICAgICAgYmFsbFdyYXAuY2xhc3NMaXN0LnJlbW92ZSgnX3NpZ24nKTtcbiAgICAgICAgICAgIHNldHVwUGFnZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCByZXF1ZXN0ID0gZnVuY3Rpb24gKGxpbmssIGV4dHJhT3B0aW9ucykge1xuICAgICAgICByZXR1cm4gZmV0Y2goYXBpVVJMICsgbGluaywge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC4uLihleHRyYU9wdGlvbnMgfHwge30pXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tVc2VyQXV0aCgpIHtcbiAgICAgICAgaWYgKHVzZXJJZCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCB1bmF1dGhNZXMgb2YgdW5hdXRoTXNncykge1xuICAgICAgICAgICAgICAgIHVuYXV0aE1lcy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXF1ZXN0KGAvZmF2dXNlci8ke3VzZXJJZH0/bm9jYWNoZT0xYClcbiAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLnVzZXJpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhdGVCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWxsV3JhcC5jbGFzc0xpc3QucmVtb3ZlKCdfc2lnbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3VpZGVXcmFwLmNsYXNzTGlzdC5yZW1vdmUoJ19zaWduJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lV3JhcC5jbGFzc0xpc3QucmVtb3ZlKCdfc2lnbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYW5uZXJfX2J0blwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9ncmVzc1wiKS5jbGFzc0xpc3QucmVtb3ZlKFwiX3NpZ25cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVidWcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMucG9pbnRzUGVyRGF5ID0gMzA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnNwaW5BbGxvd2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc3BpbnNTdHJlYWsgPSAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlcy5zcGlucyA9IFtcIlwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlZnJlc2hVc2VySW5mbyhyZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheVVzZXJTcGlucyhyZXMuc3BpbnMpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYW5uZXJfX2J0blwiKS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhdGVCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYW5uZXJfX2J0blwiKS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgICAgICAgICAgZm9yIChsZXQgcGFydGljaXBhdGVCdG4gb2YgcGFydGljaXBhdGVCdG5zKSB7XG4gICAgICAgICAgICAgICAgcGFydGljaXBhdGVCdG4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChjb25zdCB1bmF1dGhNZXMgb2YgdW5hdXRoTXNncykge1xuICAgICAgICAgICAgICAgIHVuYXV0aE1lcy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmFuc2xhdGVLZXkoa2V5KSB7XG4gICAgICAgIGlmICgha2V5KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGkxOG5EYXRhW2tleV0gfHwgJyotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSogICBrZXk6ICAnICsga2V5O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlVc2VyU3BpbnMoc3BpbnMpIHtcbiAgICAgICAgY29uc3Qgc3Bpbkl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3BpbnMtcm93Jyk7XG4gICAgICAgIGNvbnN0IG5vU3Bpbkl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm8tc3BpbnMnKTtcbiAgICAgICAgaWYgKCFzcGlucyB8fCBzcGlucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHNwaW5JdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIG5vU3Bpbkl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3BpbnNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3BpbnMtcm93Jyk7XG4gICAgICAgIHNwaW5zQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuXG4gICAgICAgIHNwaW5JdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgbm9TcGluSXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG5cbiAgICAgICAgc3BpbnMuZm9yRWFjaChzcGluID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNwaW5EYXRlID0gbmV3IERhdGUoc3Bpbi5kYXRlKTtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRlZERhdGUgPSBzcGluRGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoJ2hyLUhSJyk7XG4gICAgICAgICAgICBjb25zdCBzcGluTmFtZSA9IHRyYW5zbGF0ZUtleShzcGluLm5hbWUpIHx8ICcnO1xuXG4gICAgICAgICAgICBjb25zdCBzcGluRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgc3BpbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc3BpbnMtcm93LWl0ZW0nKTtcblxuICAgICAgICAgICAgc3BpbkVsZW1lbnQuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb250ZW50LWRhdGVcIj4ke2Zvcm1hdHRlZERhdGV9PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb250ZW50LXByaXplXCI+JHtzcGluTmFtZX08L3NwYW4+XG4gICAgICAgIGA7XG5cbiAgICAgICAgICAgIHNwaW5zQ29udGFpbmVyLmFwcGVuZENoaWxkKHNwaW5FbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICAvLyBDYXJkcyBzbGlkZXJcbiAgICBjb25zdCBjYXJkc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcml6ZV9fbGlzdCcpLFxuICAgICAgICAgIGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByaXplX19saXN0LWl0ZW0nKSxcbiAgICAgICAgICBjYXJkc1dyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpemVfX2xpc3Qtc2Nyb2xsJyksXG4gICAgICAgICAgbW92ZVJpZ2h0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaXplX19zbGlkZXItbW92ZS1yaWdodCcpLFxuICAgICAgICAgIG1vdmVMZWZ0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaXplX19zbGlkZXItbW92ZS1sZWZ0JyksXG4gICAgICAgICAgdGFic0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcml6ZV9fdGFicycpLFxuICAgICAgICAgIGlzTW9iaWxlID0gd2luZG93LmlubmVyV2lkdGggPCA2MDAsXG4gICAgICAgICAgdG90YWxDYXJkcyA9IGNhcmRzLmxlbmd0aCxcbiAgICAgICAgICBjYXJkV2lkdGggPSBjYXJkc1swXS5jbGllbnRXaWR0aCxcbiAgICAgICAgICBjYXJkc01hcmdpbiA9IChjYXJkc1dyYXAuY2xpZW50V2lkdGggLSBjYXJkV2lkdGggKiB0b3RhbENhcmRzKSAvICh0b3RhbENhcmRzIC0gMSksXG4gICAgICAgICAgdmlzaWJsZVNsaWRlcyA9IGlzTW9iaWxlID8gMSA6IE1hdGguY2VpbChjYXJkc0NvbnRhaW5lci5jbGllbnRXaWR0aCAvIChjYXJkV2lkdGggKyBjYXJkc01hcmdpbikpLFxuICAgICAgICAgIHRvdGFsVGFicyA9IE1hdGguY2VpbCh0b3RhbENhcmRzIC8gdmlzaWJsZVNsaWRlcyksXG4gICAgICAgICAgdGFiV2lkdGg9IHZpc2libGVTbGlkZXMgKiAoY2FyZFdpZHRoICsgY2FyZHNNYXJnaW4pXG5cblxuICAgIGxldCBjdXJyZW50U2xpZGUgPSAxLFxuICAgICAgICBjYXJkc1Bvc2l0aW9uID0gMCxcbiAgICAgICAgbGVmdFNsaWRlLFxuICAgICAgICByaWdodFNsaWRlO1xuXG4gICAgY29uc3QgdXBkYXRlQWN0aXZlQ2FyZCA9IChjYXJkcywgYWN0aXZlSW5kZXgpID0+IHtcbiAgICAgICAgY2FyZHMuZm9yRWFjaCgoY2FyZCwgaSkgPT57XG4gICAgICAgICAgICBhY3RpdmVJbmRleCAtIDEgPT09IGkgPyBjYXJkLmNsYXNzTGlzdC5hZGQoXCJfYWN0aXZlXCIpIDogY2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwiX2FjdGl2ZVwiKVxuICAgICAgICB9KVxuICAgIH1cbiAgICB1cGRhdGVBY3RpdmVDYXJkKGNhcmRzLCBjdXJyZW50U2xpZGUpXG5cbiAgICBmdW5jdGlvbiBsZWZ0U2xpZGVUYWIoKXtcbiAgICAgICAgbGVmdFNsaWRlID0gY3VycmVudFNsaWRlXG4gICAgfVxuICAgIGZ1bmN0aW9uIHJpZ2h0U2xpZGVUYWIoKXtcbiAgICAgICAgcmlnaHRTbGlkZSA9IGN1cnJlbnRTbGlkZSArICh2aXNpYmxlU2xpZGVzIC0gMSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmaXJzdExhc3RTbGlkZXMoKXtcbiAgICAgICAgaWYoaXNNb2JpbGUpIHJldHVyblxuICAgICAgICBsZWZ0U2xpZGVUYWIoKVxuICAgICAgICByaWdodFNsaWRlVGFiKClcbiAgICAgICAgY2FyZHMuZm9yRWFjaCgoY2FyZCAsIGkpID0+e1xuICAgICAgICAgICAgaSArIDEgPT09IGxlZnRTbGlkZSA/IGNhcmQuY2xhc3NMaXN0LmFkZChcIl9sZWZ0XCIpIDogY2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwiX2xlZnRcIilcbiAgICAgICAgICAgIGkgKyAxID09PSByaWdodFNsaWRlID8gY2FyZC5jbGFzc0xpc3QuYWRkKFwiX3JpZ2h0XCIpIDogY2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwiX3JpZ2h0XCIpXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGZpcnN0TGFzdFNsaWRlcygpXG5cbiAgICBmdW5jdGlvbiBzZXRDYXJkc1Bvc2l0aW9uIChwb3NpdGlvbikge1xuICAgICAgICBjYXJkc1dyYXAuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoLSR7cG9zaXRpb259cHgpYDtcbiAgICB9O1xuICAgIGNvbnN0IG1vdmVSaWdodCA9ICgpID0+IHtcblxuICAgICAgICBpZiAoY3VycmVudFNsaWRlID49IHRvdGFsQ2FyZHMgLSAodmlzaWJsZVNsaWRlcyAtIDEpICYmIGlzTW9iaWxlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgZmlyc3RMYXN0U2xpZGVzKClcbiAgICAgICAgICAgIGN1cnJlbnRTbGlkZSA9IDE7XG4gICAgICAgICAgICBjYXJkc1Bvc2l0aW9uID0gMDtcbiAgICAgICAgICAgIHJpZ2h0U2xpZGUrK1xuICAgICAgICAgICAgbGVmdFNsaWRlKytcbiAgICAgICAgfWVsc2UgaWYoY3VycmVudFNsaWRlID09PSB0b3RhbENhcmRzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50U2xpZGUpXG4gICAgICAgICAgICBjdXJyZW50U2xpZGUgPSAxO1xuICAgICAgICAgICAgY2FyZHNQb3NpdGlvbiA9IDA7XG4gICAgICAgIH1lbHNlIGlmKGN1cnJlbnRTbGlkZSA9PT0gdG90YWxDYXJkcyAtICggdmlzaWJsZVNsaWRlcyArIDEpKXtcbiAgICAgICAgICAgIGN1cnJlbnRTbGlkZSA9IHRvdGFsQ2FyZHNcbiAgICAgICAgICAgIGNhcmRzUG9zaXRpb24gPSBjYXJkc1dyYXAuY2xpZW50V2lkdGggLSAod2luZG93LmlubmVyV2lkdGggLSAoY2FyZHNNYXJnaW4gLyAyKSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNhcmRzUG9zaXRpb24pXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBtYXhQb3NpdGlvbiA9ICh0b3RhbENhcmRzIC0gdmlzaWJsZVNsaWRlcykgKiAoY2FyZFdpZHRoICsgY2FyZHNNYXJnaW4pO1xuICAgICAgICAgICAgaWYgKGNhcmRzUG9zaXRpb24gKyBjYXJkV2lkdGggKyBjYXJkc01hcmdpbiA+IG1heFBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgY2FyZHNQb3NpdGlvbiA9IG1heFBvc2l0aW9uO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRTbGlkZSA9IHRvdGFsQ2FyZHMgLSB2aXNpYmxlU2xpZGVzICsgMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2FyZHNQb3NpdGlvbiArPSBjYXJkV2lkdGggKyBjYXJkc01hcmdpbjtcbiAgICAgICAgICAgICAgICBjdXJyZW50U2xpZGUrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzZXRDYXJkc1Bvc2l0aW9uKGNhcmRzUG9zaXRpb24pO1xuICAgICAgICB1cGRhdGVBY3RpdmVDYXJkKGNhcmRzLCBjdXJyZW50U2xpZGUpXG4gICAgICAgIGZpcnN0TGFzdFNsaWRlcygpXG4gICAgICAgIGhpZGVQb3B1cHMoY2FyZHMpXG4gICAgfTtcbiAgICBjb25zdCBtb3ZlTGVmdCA9ICgpID0+IHtcbiAgICAgICAgaWYoY3VycmVudFNsaWRlID09PSAxICYmIGlzTW9iaWxlID09PSBmYWxzZSl7XG4gICAgICAgICAgICBjdXJyZW50U2xpZGUgPSB0b3RhbENhcmRzIC0gKHZpc2libGVTbGlkZXMgLSAxKTtcbiAgICAgICAgICAgIGNhcmRzUG9zaXRpb24gPSAoKHRvdGFsQ2FyZHMgLSAodmlzaWJsZVNsaWRlcyAtIDEpKSAqIChjYXJkV2lkdGggKyBjYXJkc01hcmdpbikpIC0oY2FyZFdpZHRoICsgY2FyZHNNYXJnaW4pO1xuICAgICAgICB9ZWxzZSBpZiAoY3VycmVudFNsaWRlID09PSAyKSB7XG4gICAgICAgICAgICBjYXJkc1Bvc2l0aW9uID0gMFxuICAgICAgICAgICAgY3VycmVudFNsaWRlID0gMVxuICAgICAgICB9ZWxzZSBpZihjdXJyZW50U2xpZGUgPT09IDEgJiYgaXNNb2JpbGUgPT09IHRydWUpe1xuICAgICAgICAgICAgY3VycmVudFNsaWRlID0gdG90YWxDYXJkc1xuICAgICAgICAgICAgY2FyZHNQb3NpdGlvbiA9IGNhcmRzV3JhcC5jbGllbnRXaWR0aCAtICh3aW5kb3cuaW5uZXJXaWR0aCAtIChjYXJkc01hcmdpbiAvIDIpKVxuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICBjYXJkc1Bvc2l0aW9uIC09IGNhcmRXaWR0aCArIGNhcmRzTWFyZ2luO1xuICAgICAgICAgICAgY3VycmVudFNsaWRlLS1cbiAgICAgICAgfVxuICAgICAgICBzZXRDYXJkc1Bvc2l0aW9uKGNhcmRzUG9zaXRpb24pO1xuICAgICAgICB1cGRhdGVBY3RpdmVDYXJkKGNhcmRzLCBjdXJyZW50U2xpZGUpXG4gICAgICAgIGZpcnN0TGFzdFNsaWRlcygpXG4gICAgICAgIGhpZGVQb3B1cHMoY2FyZHMpXG4gICAgfTtcblxuICAgIC8vIHBvcHVwcyBsb2dpY1xuXG4gICAgZnVuY3Rpb24gc2V0UG9wdXBzKHBvcHVwcywgcG9wdXBzQnRucykge1xuICAgICAgICBwb3B1cHNCdG5zLmZvckVhY2goKGJ0biwgaSkgPT4ge1xuICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHBvcHVwcy5mb3JFYWNoKChwb3B1cCwgaikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpID09PSBqID8gcG9wdXAuY2xhc3NMaXN0LmFkZChcIl9wb3B1cFwiKSA6IHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoXCJfcG9wdXBcIik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZVBvcHVwcyhwb3B1cHMpe1xuICAgICAgICBwb3B1cHMuZm9yRWFjaChwb3B1cCA9PntcbiAgICAgICAgICAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcIl9wb3B1cFwiKVxuICAgICAgICB9KVxuICAgIH1cbi8vIHBvcHVwc1xuICAgIGNvbnN0IHByaXplT3BlbkJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByaXplX19saXN0LWl0ZW0tYnRuXCIpLFxuICAgICAgICAgIHByaXplQ2xvc2VCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcml6ZV9fbGlzdC1wb3B1cC1jbG9zZVwiKSxcbiAgICAgICAgICBndWlkZVBvcHVwc1dyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmd1aWRlX19pdGVtXCIpLFxuICAgICAgICAgIGd1aWRlT3BlbkJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmd1aWRlX19pdGVtLWluZm8tYnRuXCIpLFxuICAgICAgICAgIGd1aWRlQ2xvc2VCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ndWlkZV9faXRlbS1wb3B1cC1jbG9zZVwiKSxcbiAgICAgICAgICB0YWJsZVBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YWJsZV9fcG9wdXBcIiksXG4gICAgICAgICAgdGFibGVQb3B1cENsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YWJsZV9fcG9wdXAtY2xvc2VcIiksXG4gICAgICAgICAgdGFibGVQb3B1cE9wZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhYmxlX19pbmZvXCIpLFxuICAgICAgICAgIGJhbGxQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZ3Jlc3NfX3BvcHVwXCIpLFxuICAgICAgICAgIGJhbGxQb3B1cENsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9ncmVzc19fcG9wdXAtY2xvc2VcIiksXG4gICAgICAgICAgYmFsbFBvcHVwT3BlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZ3Jlc3NfX3BvcHVwLWJ0blwiKVxuXG4gICAgc2V0UG9wdXBzKGNhcmRzLCBwcml6ZU9wZW5CdG5zKTtcbiAgICBzZXRQb3B1cHMoZ3VpZGVQb3B1cHNXcmFwLCBndWlkZU9wZW5CdG5zKTtcblxuICAgIGd1aWRlQ2xvc2VCdG5zLmZvckVhY2goYnRuID0+e1xuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcbiAgICAgICAgICAgIGhpZGVQb3B1cHMoZ3VpZGVQb3B1cHNXcmFwKVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIHByaXplQ2xvc2VCdG5zLmZvckVhY2goYnRuID0+e1xuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcbiAgICAgICAgICAgIGhpZGVQb3B1cHMoY2FyZHMpXG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGFibGVQb3B1cE9wZW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgIHRhYmxlUG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIilcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCJcbiAgICB9KTtcblxuICAgIHRhYmxlUG9wdXBDbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIHRhYmxlUG9wdXAuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiXG4gICAgfSk7XG5cbiAgICBiYWxsUG9wdXBPcGVuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgYmFsbFBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpXG4gICAgfSk7XG5cbiAgICBiYWxsUG9wdXBDbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIGJhbGxQb3B1cC5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgIH0pO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT57XG4gICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIENPVU5UID0gNDAwO1xuXG4gICAgICAgIGZ1bmN0aW9uIFNub3dzdG9ybShlbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLm1hc3RoZWFkID0gZWxlbWVudDtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgICAgICB0aGlzLndpZHRoID0gdGhpcy5tYXN0aGVhZC5jbGllbnRXaWR0aDtcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5tYXN0aGVhZC5jbGllbnRIZWlnaHQ7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zbm93Zmxha2VzID0gW107XG5cbiAgICAgICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgU25vd3N0b3JtLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUubGVmdCA9IHRoaXMuY2FudmFzLnN0eWxlLnRvcCA9ICcwJztcbiAgICAgICAgICAgIHRoaXMubWFzdGhlYWQuYXBwZW5kQ2hpbGQodGhpcy5jYW52YXMpO1xuXG4gICAgICAgICAgICB0aGlzLm9uUmVzaXplKCk7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpLCBmYWxzZSk7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgQ09VTlQ7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBzbm93Zmxha2UgPSBuZXcgdGhpcy5Tbm93Zmxha2UodGhpcyk7XG4gICAgICAgICAgICAgICAgc25vd2ZsYWtlLnJlc2V0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zbm93Zmxha2VzLnB1c2goc25vd2ZsYWtlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1GcmFtZSh0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBTbm93c3Rvcm0ucHJvdG90eXBlLm9uUmVzaXplID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMubWFzdGhlYWQuY2xpZW50V2lkdGg7XG4gICAgICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMubWFzdGhlYWQuY2xpZW50SGVpZ2h0O1xuICAgICAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB0aGlzLndpZHRoO1xuICAgICAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnI0ZGRic7XG5cbiAgICAgICAgICAgIHZhciB3YXNBY3RpdmUgPSB0aGlzLmFjdGl2ZTtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlID0gdGhpcy53aWR0aCA+IDgwO1xuICAgICAgICAgICAgdGhpcy53aWR0aCA+IDI4MCA/IENPVU5UID0gMTUwIDogbnVsbFxuXG4gICAgICAgICAgICBpZiAoIXdhc0FjdGl2ZSAmJiB0aGlzLmFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltRnJhbWUodGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgU25vd3N0b3JtLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuXG4gICAgICAgICAgICBpZiAoIXRoaXMuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IENPVU5UOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgc25vd2ZsYWtlID0gdGhpcy5zbm93Zmxha2VzW2ldO1xuICAgICAgICAgICAgICAgIHNub3dmbGFrZS55ICs9IHNub3dmbGFrZS52eTtcbiAgICAgICAgICAgICAgICBzbm93Zmxha2UueCArPSBzbm93Zmxha2Uudng7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5nbG9iYWxBbHBoYSA9IHNub3dmbGFrZS5vO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmFyYyhzbm93Zmxha2UueCwgc25vd2ZsYWtlLnksIHNub3dmbGFrZS5yLCAwLCBNYXRoLlBJICogMiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcblxuICAgICAgICAgICAgICAgIGlmIChzbm93Zmxha2UueSA+IHRoaXMuaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIHNub3dmbGFrZS5yZXNldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVxdWVzdEFuaW1GcmFtZSh0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgfTtcblxuICAgICAgICBTbm93c3Rvcm0ucHJvdG90eXBlLlNub3dmbGFrZSA9IGZ1bmN0aW9uIChzbm93c3Rvcm0pIHtcbiAgICAgICAgICAgIHRoaXMuc25vd3N0b3JtID0gc25vd3N0b3JtO1xuICAgICAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIFNub3dzdG9ybS5wcm90b3R5cGUuU25vd2ZsYWtlLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMueCA9IE1hdGgucmFuZG9tKCkgKiB0aGlzLnNub3dzdG9ybS53aWR0aDtcbiAgICAgICAgICAgIHRoaXMueSA9IE1hdGgucmFuZG9tKCkgKiAtdGhpcy5zbm93c3Rvcm0uaGVpZ2h0O1xuICAgICAgICAgICAgdGhpcy52eSA9IDAuMyArIE1hdGgucmFuZG9tKCkgKiAwLjAwMDAxO1xuICAgICAgICAgICAgdGhpcy52eCA9IDAuNiAtIE1hdGgucmFuZG9tKCk7XG4gICAgICAgICAgICB0aGlzLnIgPSAxICsgTWF0aC5yYW5kb20oKSAqIDI7XG4gICAgICAgICAgICB0aGlzLm8gPSAxO1xuICAgICAgICB9O1xuXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbUZyYW1lID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgICAgICAgICAgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICAgICAgICAgIHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoY2FsbGJhY2ssIDEwMDAgLyA2MCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgfSkoKTtcblxuICAgICAgICB2YXIgc2tpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2t5Jyk7XG4gICAgICAgIHNraWVzLmZvckVhY2goZnVuY3Rpb24gKHNreSkge1xuICAgICAgICAgICAgbmV3IFNub3dzdG9ybShza3kpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBiYWxsIHNoYWtlIHNub3dcbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNub3dDYW52YXMnKTtcbiAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIGNvbnN0IGJhbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3BoZXJlJyk7XG5cbiAgICAgICAgY2FudmFzLndpZHRoID0gY2FudmFzLnBhcmVudEVsZW1lbnQuY2xpZW50V2lkdGg7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBjYW52YXMucGFyZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XG5cbiAgICAgICAgbGV0IHNub3dmbGFrZXMgPSBbXTtcbiAgICAgICAgY29uc3QgbWF4U25vd2ZsYWtlcyA9IDEwMDtcbiAgICAgICAgY29uc3QgbWF4U3BlZWQgPSA3O1xuICAgICAgICBsZXQgc3Rvcm1Db3VudGVyID0gMVxuXG5cbiAgICAgICAgbGV0IHNub3dmbGFrZXNSZW1vdmVkID0gMDtcblxuICAgICAgICBjbGFzcyBTbm93Zmxha2Uge1xuICAgICAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy54ID0gTWF0aC5yYW5kb20oKSAqIGNhbnZhcy53aWR0aDtcbiAgICAgICAgICAgICAgICB0aGlzLnkgPSBNYXRoLnJhbmRvbSgpICogY2FudmFzLmhlaWdodDtcbiAgICAgICAgICAgICAgICB0aGlzLnJhZGl1cyA9IE1hdGgucmFuZG9tKCkgKiAzICsgMTtcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVkWCA9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDEwO1xuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWRZID0gTWF0aC5yYW5kb20oKSAqIDEuNSArIDE7XG4gICAgICAgICAgICAgICAgdGhpcy5hY2NlbGVyYXRpb24gPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMubW92aW5nVG9Cb3R0b20gPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdXBkYXRlKGJhbGxYLCBiYWxsWSwgYmFsbFJhZGl1cywgYmFsbFNoYWtpbmcpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tb3ZpbmdUb0JvdHRvbSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXRTcGVlZCA9IDAuMTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3BlZWREZWNheUZhY3RvciA9IDAuMDU7IC8vINCa0L7QtdGE0ZbRhtGW0ZTQvdGCINC00LvRjyDQv9C70LDQstC90L7Qs9C+INGB0L/QvtCy0ZbQu9GM0L3QtdC90L3Rj1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3BlZWRYID0gdGhpcy5zcGVlZFggLSAodGhpcy5zcGVlZFggLSB0YXJnZXRTcGVlZCkgKiBzcGVlZERlY2F5RmFjdG9yO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwZWVkWSA9IHRoaXMuc3BlZWRZIC0gKHRoaXMuc3BlZWRZIC0gdGFyZ2V0U3BlZWQpICogc3BlZWREZWNheUZhY3RvcjtcblxuICAgICAgICAgICAgICAgICAgICAvLyDQntC90L7QstC70LXQvdC90Y8g0L/QvtC30LjRhtGW0Zcg0YHQvdGW0LbQuNC90LrQuFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnkgKz0gdGhpcy5zcGVlZFk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMueSA+IGNhbnZhcy5oZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMueCArPSB0aGlzLnNwZWVkWDtcbiAgICAgICAgICAgICAgICB0aGlzLnkgKz0gdGhpcy5zcGVlZFk7XG5cbiAgICAgICAgICAgICAgICAvLyDQntCx0LzQtdC20LXQvdC90Y8g0YjQstC40LTQutC+0YHRgtGWXG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlZFggPSBNYXRoLm1heCgtbWF4U3BlZWQsIE1hdGgubWluKG1heFNwZWVkLCB0aGlzLnNwZWVkWCkpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWRZID0gTWF0aC5tYXgoLW1heFNwZWVkLCBNYXRoLm1pbihtYXhTcGVlZCwgdGhpcy5zcGVlZFkpKTtcblxuICAgICAgICAgICAgICAgIC8vINCU0L7QtNCw0LLQsNC90L3RjyDRiNCy0LjQtNC60L7RgdGC0ZYg0YfQtdGA0LXQtyBcItGC0YDRg9GB0ZbQvdC90Y9cIiDQutGD0LvRllxuICAgICAgICAgICAgICAgIGlmIChiYWxsU2hha2luZykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjY2VsZXJhdGlvbiArPSAwLjA1O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWNjZWxlcmF0aW9uICo9IDAuOTU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWRYICs9IHRoaXMuYWNjZWxlcmF0aW9uICogKE1hdGgucmFuZG9tKCkgLSAwLjUpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWRZICs9IHRoaXMuYWNjZWxlcmF0aW9uICogKE1hdGgucmFuZG9tKCkgLSAwLjUpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMueSA+IGNhbnZhcy5oZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54ID0gTWF0aC5yYW5kb20oKSAqIGNhbnZhcy53aWR0aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMueCA+IGNhbnZhcy53aWR0aCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnggPSAwO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy54IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnggPSBjYW52YXMud2lkdGg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8g0JLRltC00YHRgtCw0L3RjCDQtNC+INGG0LXQvdGC0YDRgyDQutGD0LvRllxuICAgICAgICAgICAgICAgIGNvbnN0IGR4ID0gdGhpcy54IC0gYmFsbFg7XG4gICAgICAgICAgICAgICAgY29uc3QgZHkgPSB0aGlzLnkgLSBiYWxsWTtcbiAgICAgICAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG5cbiAgICAgICAgICAgICAgICAvLyDQktGW0LTRgdC60L7QuiDQstGW0LQg0LrRg9C70ZZcbiAgICAgICAgICAgICAgICBpZiAoZGlzdGFuY2UgPCBiYWxsUmFkaXVzICsgdGhpcy5yYWRpdXMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYW5nbGUgPSBNYXRoLmF0YW4yKGR5LCBkeCk7IC8vINCa0YPRgiDQt9GW0YLQutC90LXQvdC90Y9cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3ZlcmxhcCA9IGJhbGxSYWRpdXMgKyB0aGlzLnJhZGl1cyAtIGRpc3RhbmNlO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vINCf0LXRgNC10LzRltGJ0LXQvdC90Y8g0YHQvdGW0LbQuNC90LrQuFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnggKz0gTWF0aC5jb3MoYW5nbGUpICogb3ZlcmxhcDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55ICs9IE1hdGguc2luKGFuZ2xlKSAqIG92ZXJsYXA7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8g0KDQtdCy0LXRgNGBINGI0LLQuNC00LrQvtGB0YLRllxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwZWVkWCAqPSAtMC43O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwZWVkWSAqPSAtMC43O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbW92ZVRvQm90dG9tKCkge1xuICAgICAgICAgICAgICAgIHRoaXMubW92aW5nVG9Cb3R0b20gPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZW1vdmUoKSB7XG4gICAgICAgICAgICAgICAgc25vd2ZsYWtlcy5zcGxpY2Uoc25vd2ZsYWtlcy5pbmRleE9mKHRoaXMpLCAxKTtcbiAgICAgICAgICAgICAgICBzbm93Zmxha2VzUmVtb3ZlZCsrO1xuICAgICAgICAgICAgICAgIGlmIChzdG9ybUNvdW50ZXIgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3IFNub3dzdG9ybShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNwaGVyZV9fYm9keVwiKSk7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JtQ291bnRlcisrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZHJhdygpIHtcbiAgICAgICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIDAsIE1hdGguUEkgKiAyKTtcbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gJ3doaXRlJztcbiAgICAgICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBsYXN0QmFsbFNoYWtpbmdTdGF0ZSA9IGZhbHNlO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF4U25vd2ZsYWtlczsgaSsrKSB7XG4gICAgICAgICAgICBzbm93Zmxha2VzLnB1c2gobmV3IFNub3dmbGFrZSgpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGFuaW1hdGUoKSB7XG4gICAgICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGJhbGxUcmFuc2Zvcm0gPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShiYWxsKS50cmFuc2Zvcm07XG4gICAgICAgICAgICBsZXQgYmFsbFggPSBjYW52YXMud2lkdGggLyAyO1xuICAgICAgICAgICAgbGV0IGJhbGxZID0gY2FudmFzLmhlaWdodCAvIDI7XG4gICAgICAgICAgICBjb25zdCBiYWxsUmFkaXVzID0gYmFsbC5vZmZzZXRXaWR0aCAvIDI7XG4gICAgICAgICAgICBjb25zdCBiYWxsU2hha2luZyA9IGJhbGxUcmFuc2Zvcm0gIT09ICdub25lJztcblxuICAgICAgICAgICAgaWYgKGJhbGxUcmFuc2Zvcm0gIT09ICdub25lJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1hdHJpeCA9IG5ldyBET01NYXRyaXgoYmFsbFRyYW5zZm9ybSk7XG4gICAgICAgICAgICAgICAgYmFsbFggPSBiYWxsLm9mZnNldExlZnQgKyBtYXRyaXgubTQxICsgYmFsbFJhZGl1cztcbiAgICAgICAgICAgICAgICBiYWxsWSA9IGJhbGwub2Zmc2V0VG9wICsgbWF0cml4Lm00MiArIGJhbGxSYWRpdXM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChiYWxsU2hha2luZyAmJiAhbGFzdEJhbGxTaGFraW5nU3RhdGUpIHtcbiAgICAgICAgICAgICAgICBzbm93Zmxha2VzID0gW107XG4gICAgICAgICAgICAgICAgc25vd2ZsYWtlc1JlbW92ZWQgPSAwO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF4U25vd2ZsYWtlczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHNub3dmbGFrZXMucHVzaChuZXcgU25vd2ZsYWtlKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGFzdEJhbGxTaGFraW5nU3RhdGUgPSBiYWxsU2hha2luZztcblxuICAgICAgICAgICAgc25vd2ZsYWtlcy5mb3JFYWNoKHNub3dmbGFrZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFiYWxsU2hha2luZykgc25vd2ZsYWtlLm1vdmVUb0JvdHRvbSgpO1xuICAgICAgICAgICAgICAgIHNub3dmbGFrZS51cGRhdGUoYmFsbFgsIGJhbGxZLCBiYWxsUmFkaXVzLCBiYWxsU2hha2luZyk7XG4gICAgICAgICAgICAgICAgc25vd2ZsYWtlLmRyYXcoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBhbmltYXRlKCk7XG5cbiAgICB9KSgpO1xufSlcblxuLy8gc25vd2ZhbGwgYW5pbWF0aW9cblxuICAgIGxldCBpID0gMTtcbiAgICBmdW5jdGlvbiBzZW5kU2hha2VSZXF1ZXN0KCkge1xuICAgICAgICBpZiAoIXVzZXJJZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRlYnVnKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtcbiAgICAgICAgICAgICAgICAvLyBudW1iZXI6IGkrKyxcbiAgICAgICAgICAgICAgICB0eXBlOiAndGVzdCdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcGFyYW1zID0ge3VzZXJpZDogdXNlcklkfTtcbiAgICAgICAgcmV0dXJuIHJlcXVlc3QoJy9zcGluJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXJhbXMpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGJ0blNoYWtlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9ncmVzc19fc2hha2VcIiksXG4gICAgICAgICAgYmFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3BoZXJlXCIpLFxuICAgICAgICAgIGJhbGxCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNwaGVyZV9fYm94XCIpXG5cbiAgICBhc3luYyBmdW5jdGlvbiBhbmltYXRlU2hha2UoYmFsbCwgYm94LCBidG4sIHByaXplKSB7XG4gICAgICAgIGNvbnN0IGRlbGF5ID0gKG1zKSA9PiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKVxuXG4gICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiX2Rpc2FibGVkXCIpO1xuICAgICAgICBiYWxsLmNsYXNzTGlzdC5hZGQoXCJfc2hha2VcIik7XG4gICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwiX3NoYWtlLXJldmVyc2VcIik7XG5cbiAgICAgICAgYXdhaXQgZGVsYXkoMjAwMCk7XG5cbiAgICAgICAgYmFsbC5jbGFzc0xpc3QucmVtb3ZlKFwiX3NoYWtlXCIpO1xuICAgICAgICBiYWxsLmNsYXNzTGlzdC5hZGQoXCJfYmVmb3JlLWhpZGVcIik7XG4gICAgICAgIGJveC5jbGFzc0xpc3QucmVtb3ZlKFwiX3NoYWtlLXJldmVyc2VcIik7XG4gICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwiX2JveC1vcGFjaXR5XCIpO1xuXG4gICAgICAgIGF3YWl0IGRlbGF5KDIwMCk7XG5cbiAgICAgICAgYmFsbC5jbGFzc0xpc3QuYWRkKGAke3ByaXplfWApO1xuICAgIH1cblxuICAgIC8vINCa0L7QttC10L0g0LrQu9Cw0YEg0LLRltC00L/QvtCy0ZbQtNCw0ZQg0LLQuNCz0YDQsNC90L7QvNGDINC/0YDQuNC30YM6XG4gICAgLy8gXCJfaXBob25lXCIgLSDQstC40LPRgNCw0L3QviBpUGhvbmVcbiAgICAvLyBcIl90dlwiIC0g0LLQuNCz0YDQsNC90L4g0YLQtdC70LXQstGW0LfQvtGAXG4gICAgLy8gXCJfamJsXCIgLSDQstC40LPRgNCw0L3QviBKQkwt0LrQvtC70L7QvdC60YNcbiAgICAvLyBcIl9tZWdvZ29cIiAtINCy0LjQs9GA0LDQvdC+INC/0ZbQtNC/0LjRgdC60YMgTWVnb2dvXG4gICAgLy8gXCJfcmVzcGluXCIgLSDQtNC+0LTQsNGC0LrQvtCy0LUg0L7QsdC10YDRgtCw0L3QvdGPXG4gICAgLy8gXCJfbm90aGluZ1wiIC0g0L3RltGH0L7Qs9C+INC90LUg0LLQuNCz0YDQsNC90L5cbiAgICAvLyBcIl9wb2ludHM1MFwiIC0g0LLQuNCz0YDQsNC90L4gNTAg0LHQvtC90YPRgdC90LjRhSDQsdCw0LvRltCyXG4gICAgLy8gXCJfZnMxMFwiIC0g0LLQuNCz0YDQsNC90L4gMTAg0YTRgNGW0YHQv9GW0L3RltCyXG4gICAgLy8gXCJfZnMyNVwiIC0g0LLQuNCz0YDQsNC90L4gMjUg0YTRgNGW0YHQv9GW0L3RltCyXG4gICAgLy8gXCJfZnM1MFwiIC0g0LLQuNCz0YDQsNC90L4gNTAg0YTRgNGW0YHQv9GW0L3RltCyXG4gICAgLy8gXCJfc2F2ZUJldDEwMFwiIC0g0LLQuNCz0YDQsNC90L4g0YHRgtGA0LDRhdC+0LLQutGDINC90LAgMTAwINGB0YLQsNCy0L7QulxuICAgIC8vIFwiX3NhdmVCZXQxNTBcIiAtINCy0LjQs9GA0LDQvdC+INGB0YLRgNCw0YXQvtCy0LrRgyDQvdCwIDE1MCDRgdGC0LDQstC+0LpcbiAgICAvLyBcIl9zYXZlQmV0MjAwXCIgLSDQstC40LPRgNCw0L3QviDRgdGC0YDQsNGF0L7QstC60YMg0L3QsCAyMDAg0YHRgtCw0LLQvtC6XG4gICAgLy8g0YTRg9C90LrRhtGW0Y8gaW5pdFNoYWtlINC/0YDQvtC60LjQtNGD0ZQg0LrQu9Cw0YHQuCDQstGW0LTQv9C+0LLRltC00L3RliDQv9GA0LjQt9Cw0Lwg0L3QsCDQsdC70L7QuiAuc3BoZXJlINC00LvRjyDQstGW0LTQvtCx0YDQsNC20LXQvdC90Y8g0L/RgNC40LfRg1xuICAgIGNvbnN0IHdpbkNsYXNzZXMgPSBbXG4gICAgICAgIFwiX2lwaG9uZVwiLCBcIl90dlwiLCBcIl9qYmxcIiwgXCJfbWVnb2dvXCIsIFwiX3Jlc3BpblwiLCBcIl9ub3RoaW5nXCIsXG4gICAgICAgIFwiX3BvaW50czUwXCIsIFwiX2ZzMTBcIiwgXCJfZnMyNVwiLCBcIl9mczUwXCIsIFwiX3NhdmVCZXQxMDBcIiwgXCJfc2F2ZUJldDE1MFwiLCBcIl9zYXZlQmV0MjAwXCJcbiAgICBdO1xuICAgIGZ1bmN0aW9uIGluaXRTaGFrZShiYWxsLCBidG4sIGJveCkge1xuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICAgICAgc2VuZFNoYWtlUmVxdWVzdCgpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAgICAgICAgIGlmICghcmVzIHx8ICEhcmVzLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGJ0blNoYWtlLmNsYXNzTGlzdC5hZGQoJ3B1bHNlLWJ0bicpO1xuICAgICAgICAgICAgICAgICAgICBidG5TaGFrZS5jbGFzc0xpc3QucmVtb3ZlKCdfZGlzYWJsZWQnKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IHByaXplID0gcmVzLm51bWJlcjtcbiAgICAgICAgICAgICAgICBjb25zdCBwcml6ZSA9IHdpbkNsYXNzZXNbMTJdO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0cmVha0JvbnVzID0gcmVzLnN0cmVha0JvbnVzIHx8IGRlYnVnO1xuICAgICAgICAgICAgICAgIGFuaW1hdGVTaGFrZShiYWxsLCBib3gsIGJ0biwgcHJpemUpLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKFwiYW5pbSBlcnJvcjpcIiwgZXJyKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBpbml0U2hha2UoYmFsbCwgYnRuU2hha2UsIGJhbGxCb3gpXG5cbi8vIHRhYmxlIHRvZ2dsZVxuXG4gICAgY29uc3QgdG9nZ2xlSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFibGVfX3RvZ2dsZS1pdGVtJyksXG4gICAgICAgICAgdGFibGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYmxlX19ib2R5JylcblxuICAgIHRvZ2dsZUl0ZW1zLmZvckVhY2goKHRvZ2dsZUl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIHRvZ2dsZUl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0b2dnbGVJdGVtcy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdfYWN0aXZlJykpO1xuICAgICAgICAgICAgdGFibGVzLmZvckVhY2godGFibGUgPT4gdGFibGUuY2xhc3NMaXN0LnJlbW92ZSgnX2FjdGl2ZScpKTtcbiAgICAgICAgICAgIHRvZ2dsZUl0ZW0uY2xhc3NMaXN0LmFkZCgnX2FjdGl2ZScpO1xuICAgICAgICAgICAgdGFibGVzW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdfYWN0aXZlJyk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG5cblxuICAgIGNvbnN0IGJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJ0blwiKSxcbiAgICAgICAgICBvcyA9IGRldGVjdE9TKClcblxuICAgIGlmIChvcyA9PT0gXCJtYWNPU1wiIHx8IG9zID09PSBcImlPU1wiKXtcbiAgICAgICAgYnRucy5mb3JFYWNoKGJ0biA9PntcbiAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiX2lvc1wiKVxuICAgICAgICB9KVxuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gZGV0ZWN0T1MoKSB7XG4gICAgICAgIGNvbnN0IHVzZXJBZ2VudCA9IG5hdmlnYXRvci51c2VyQWdlbnQgfHwgbmF2aWdhdG9yLnZlbmRvciB8fCB3aW5kb3cub3BlcmE7XG4gICAgICAgIGNvbnN0IHBsYXRmb3JtID0gbmF2aWdhdG9yLnBsYXRmb3JtIHx8IFwidW5rbm93blwiO1xuICAgICAgICBsZXQgb3M7XG5cbiAgICAgICAgaWYgKC9hbmRyb2lkL2kudGVzdCh1c2VyQWdlbnQpICYmIC9saW51eCBhcm0vaS50ZXN0KHBsYXRmb3JtKSkge1xuICAgICAgICAgICAgb3MgPSBcIkFuZHJvaWRcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoL2lQYWR8aVBob25lfGlQb2QvLnRlc3QodXNlckFnZW50KSAmJiAhd2luZG93Lk1TU3RyZWFtKSB7XG4gICAgICAgICAgICBvcyA9IFwiaU9TXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKC9NYWNpbnRvc2h8TWFjSW50ZWx8TWFjUFBDfE1hYzY4Sy8udGVzdChwbGF0Zm9ybSkpIHtcbiAgICAgICAgICAgIG9zID0gXCJtYWNPU1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmICgvV2luMzJ8V2luNjR8V2luZG93c3xXT1c2NC8udGVzdChwbGF0Zm9ybSkpIHtcbiAgICAgICAgICAgIG9zID0gXCJXaW5kb3dzXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKC9MaW51eC8udGVzdChwbGF0Zm9ybSkgJiYgIS9hbmRyb2lkL2kudGVzdCh1c2VyQWdlbnQpKSB7XG4gICAgICAgICAgICBvcyA9IFwiTGludXhcIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3NcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhcItCe0L/QtdGA0LDRhtGW0LnQvdCwINGB0LjRgdGC0LXQvNCwOlwiLCBvcyk7XG5cbiAgICBjb25zdCBoYW5kbGVSZXNpemUgPSAoKSA9PntcbiAgICAgICAgbGV0IHRvdWNoU3RhcnRYID0gMDtcbiAgICAgICAgbGV0IHRvdWNoRW5kWCA9IDA7XG5cbiAgICAgICAgY2FyZHNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdG91Y2hTdGFydFggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5zY3JlZW5YO1xuICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgIGNhcmRzQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0b3VjaEVuZFggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5zY3JlZW5YO1xuICAgICAgICAgICAgaGFuZGxlU3dpcGUoKTtcbiAgICAgICAgfSwgZmFsc2UpO1xuXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZVN3aXBlKCkge1xuICAgICAgICAgICAgY29uc3Qgc3dpcGVUaHJlc2hvbGQgPSA1MDtcbiAgICAgICAgICAgIGlmICh0b3VjaEVuZFggPCB0b3VjaFN0YXJ0WCAtIHN3aXBlVGhyZXNob2xkKSB7XG4gICAgICAgICAgICAgICAgbW92ZVJpZ2h0KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0b3VjaEVuZFggPiB0b3VjaFN0YXJ0WCArIHN3aXBlVGhyZXNob2xkKSB7XG4gICAgICAgICAgICAgICAgbW92ZUxlZnQoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG1vdmVSaWdodEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1vdmVSaWdodCk7XG4gICAgICAgIG1vdmVMZWZ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbW92ZUxlZnQpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9yaWVudGF0aW9uY2hhbmdlXCIsICgpID0+e1xuICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBoYW5kbGVSZXNpemUoKVxuXG5cbiAgICAvLyBmb3IgdGVzdFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGFyay1idG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJkYXJrXCIpXG4gICAgfSlcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVuLWJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmF2LXBhZ2VcIikuY2xhc3NMaXN0LnRvZ2dsZShcImVuXCIpXG4gICAgfSlcblxufSkoKTsiXX0=
