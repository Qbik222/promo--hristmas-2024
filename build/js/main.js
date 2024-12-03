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
  var locale = 'uk';
  if (ukLeng) locale = 'uk';
  if (enLeng) locale = 'en';
  var i18nData = {};
  var debug = true;
  // let userId;
  var userId = 101234861;
  // let userId = 9999;

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwidW5hdXRoTXNncyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInBhcnRpY2lwYXRlQnRucyIsIm1haW5QYWdlIiwicXVlcnlTZWxlY3RvciIsImJhbGxXcmFwIiwiZ3VpZGVXcmFwIiwiZ2FtZVdyYXAiLCJ1a0xlbmciLCJlbkxlbmciLCJsb2NhbGUiLCJpMThuRGF0YSIsImRlYnVnIiwidXNlcklkIiwibG9hZFRyYW5zbGF0aW9ucyIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJ0cmFuc2xhdGUiLCJtdXRhdGlvbk9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9ucyIsIm9ic2VydmUiLCJnZXRFbGVtZW50QnlJZCIsImNoaWxkTGlzdCIsInN1YnRyZWUiLCJlbGVtcyIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJjbGFzc0xpc3QiLCJhZGQiLCJyZWZyZXNoTG9jYWxpemVkQ2xhc3MiLCJpbml0IiwiZWxlbWVudCIsImJhc2VDc3NDbGFzcyIsImxhbmciLCJyZW1vdmUiLCJ3aW5kb3ciLCJzdG9yZSIsInN0YXRlIiwiZ2V0U3RhdGUiLCJhdXRoIiwiaXNBdXRob3JpemVkIiwiaWQiLCJzZXR1cFBhZ2UiLCJjIiwiaSIsInNldEludGVydmFsIiwiZ191c2VyX2lkIiwiY2hlY2tVc2VyQXV0aCIsImNsZWFySW50ZXJ2YWwiLCJmb3JFYWNoIiwiYXV0aEJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJwYXJ0aWNpcGF0ZSIsInBhcmFtcyIsInVzZXJpZCIsInJlcXVlc3QiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIml0ZW0iLCJsaW5rIiwiZXh0cmFPcHRpb25zIiwiaGVhZGVycyIsInVuYXV0aE1lcyIsInBvaW50c1BlckRheSIsInNwaW5BbGxvd2VkIiwic3BpbnNTdHJlYWsiLCJkaXNwbGF5VXNlclNwaW5zIiwic3BpbnMiLCJwYXJ0aWNpcGF0ZUJ0biIsInRyYW5zbGF0ZUtleSIsImtleSIsInNwaW5JdGVtIiwibm9TcGluSXRlbSIsInNwaW5zQ29udGFpbmVyIiwiaW5uZXJIVE1MIiwic3BpbiIsInNwaW5EYXRlIiwiRGF0ZSIsImRhdGUiLCJmb3JtYXR0ZWREYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwic3Bpbk5hbWUiLCJuYW1lIiwic3BpbkVsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJjYXJkc0NvbnRhaW5lciIsImNhcmRzIiwiY2FyZHNXcmFwIiwibW92ZVJpZ2h0QnV0dG9uIiwibW92ZUxlZnRCdXR0b24iLCJ0YWJzQ29udGFpbmVyIiwiaXNNb2JpbGUiLCJpbm5lcldpZHRoIiwidG90YWxDYXJkcyIsImNhcmRXaWR0aCIsImNsaWVudFdpZHRoIiwiY2FyZHNNYXJnaW4iLCJ2aXNpYmxlU2xpZGVzIiwiTWF0aCIsImNlaWwiLCJ0b3RhbFRhYnMiLCJ0YWJXaWR0aCIsImN1cnJlbnRTbGlkZSIsImNhcmRzUG9zaXRpb24iLCJsZWZ0U2xpZGUiLCJyaWdodFNsaWRlIiwidXBkYXRlQWN0aXZlQ2FyZCIsImFjdGl2ZUluZGV4IiwiY2FyZCIsImxlZnRTbGlkZVRhYiIsInJpZ2h0U2xpZGVUYWIiLCJmaXJzdExhc3RTbGlkZXMiLCJzZXRDYXJkc1Bvc2l0aW9uIiwicG9zaXRpb24iLCJzdHlsZSIsInRyYW5zZm9ybSIsIm1vdmVSaWdodCIsIm1heFBvc2l0aW9uIiwiaGlkZVBvcHVwcyIsIm1vdmVMZWZ0Iiwic2V0UG9wdXBzIiwicG9wdXBzIiwicG9wdXBzQnRucyIsImJ0biIsInBvcHVwIiwiaiIsInByaXplT3BlbkJ0bnMiLCJwcml6ZUNsb3NlQnRucyIsImd1aWRlUG9wdXBzV3JhcCIsImd1aWRlT3BlbkJ0bnMiLCJndWlkZUNsb3NlQnRucyIsInRhYmxlUG9wdXAiLCJ0YWJsZVBvcHVwQ2xvc2UiLCJ0YWJsZVBvcHVwT3BlbiIsImJhbGxQb3B1cCIsImJhbGxQb3B1cENsb3NlIiwiYmFsbFBvcHVwT3BlbiIsIm92ZXJmbG93IiwiQ09VTlQiLCJTbm93c3Rvcm0iLCJtYXN0aGVhZCIsImNhbnZhcyIsImN0eCIsImdldENvbnRleHQiLCJ3aWR0aCIsImhlaWdodCIsImNsaWVudEhlaWdodCIsImFjdGl2ZSIsInNub3dmbGFrZXMiLCJwcm90b3R5cGUiLCJsZWZ0IiwidG9wIiwib25SZXNpemUiLCJiaW5kIiwic25vd2ZsYWtlIiwiU25vd2ZsYWtlIiwicmVzZXQiLCJwdXNoIiwicmVxdWVzdEFuaW1GcmFtZSIsInVwZGF0ZSIsImZpbGxTdHlsZSIsIndhc0FjdGl2ZSIsImNsZWFyUmVjdCIsInkiLCJ2eSIsIngiLCJ2eCIsImdsb2JhbEFscGhhIiwibyIsImJlZ2luUGF0aCIsImFyYyIsInIiLCJQSSIsImNsb3NlUGF0aCIsImZpbGwiLCJzbm93c3Rvcm0iLCJyYW5kb20iLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ3ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjYWxsYmFjayIsInNldFRpbWVvdXQiLCJza2llcyIsInNreSIsImJhbGwiLCJwYXJlbnRFbGVtZW50IiwibWF4U25vd2ZsYWtlcyIsIm1heFNwZWVkIiwic3Rvcm1Db3VudGVyIiwic25vd2ZsYWtlc1JlbW92ZWQiLCJyYWRpdXMiLCJzcGVlZFgiLCJzcGVlZFkiLCJhY2NlbGVyYXRpb24iLCJtb3ZpbmdUb0JvdHRvbSIsImJhbGxYIiwiYmFsbFkiLCJiYWxsUmFkaXVzIiwiYmFsbFNoYWtpbmciLCJ0YXJnZXRTcGVlZCIsInNwZWVkRGVjYXlGYWN0b3IiLCJtYXgiLCJtaW4iLCJkeCIsImR5IiwiZGlzdGFuY2UiLCJzcXJ0IiwiYW5nbGUiLCJhdGFuMiIsIm92ZXJsYXAiLCJjb3MiLCJzaW4iLCJzcGxpY2UiLCJpbmRleE9mIiwibGFzdEJhbGxTaGFraW5nU3RhdGUiLCJhbmltYXRlIiwiYmFsbFRyYW5zZm9ybSIsImdldENvbXB1dGVkU3R5bGUiLCJvZmZzZXRXaWR0aCIsIm1hdHJpeCIsIkRPTU1hdHJpeCIsIm9mZnNldExlZnQiLCJtNDEiLCJvZmZzZXRUb3AiLCJtNDIiLCJtb3ZlVG9Cb3R0b20iLCJkcmF3Iiwic2VuZFNoYWtlUmVxdWVzdCIsIlByb21pc2UiLCJyZXNvbHZlIiwidHlwZSIsImJ0blNoYWtlIiwiYmFsbEJveCIsImFuaW1hdGVTaGFrZSIsImJveCIsInByaXplIiwiZGVsYXkiLCJtcyIsIndpbkNsYXNzZXMiLCJpbml0U2hha2UiLCJlcnJvciIsInN0cmVha0JvbnVzIiwiZXJyIiwidG9nZ2xlSXRlbXMiLCJ0YWJsZXMiLCJ0b2dnbGVJdGVtIiwiaW5kZXgiLCJ0YWJsZSIsImhhbmRsZVJlc2l6ZSIsInRvdWNoU3RhcnRYIiwidG91Y2hFbmRYIiwiZXZlbnQiLCJjaGFuZ2VkVG91Y2hlcyIsInNjcmVlblgiLCJoYW5kbGVTd2lwZSIsInN3aXBlVGhyZXNob2xkIiwibG9jYXRpb24iLCJyZWxvYWQiLCJ0b2dnbGUiXSwibWFwcGluZ3MiOiI7OzsrQ0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREEsQ0FBQyxZQUFZO0VBQ1QsSUFBTUEsTUFBTSxHQUFHLCtCQUErQjtFQUU5QyxJQUNJQyxVQUFVLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsYUFBYSxDQUFDO0lBQ3JEQyxlQUFlLEdBQUdGLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsV0FBVyxDQUFDO0lBQ3hERSxRQUFRLEdBQUdILFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLFdBQVcsQ0FBQztJQUM5Q0MsUUFBUSxHQUFHTCxRQUFRLENBQUNJLGFBQWEsQ0FBQyxPQUFPLENBQUM7SUFDMUNFLFNBQVMsR0FBR04sUUFBUSxDQUFDSSxhQUFhLENBQUMsUUFBUSxDQUFDO0lBQzVDRyxRQUFRLEdBQUdQLFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLFFBQVEsQ0FBQztFQUUvQyxJQUFNSSxNQUFNLEdBQUdS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LFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDbUQsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQUs7SUFDL0R2RCxRQUFRLENBQUMrRCxJQUFJLENBQUNoQyxTQUFTLENBQUM0TyxNQUFNLENBQUMsTUFBTSxDQUFDO0VBQzFDLENBQUMsQ0FBQztFQUNGM1EsUUFBUSxDQUFDSSxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUNtRCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBSztJQUM3RHZELFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDMkIsU0FBUyxDQUFDNE8sTUFBTSxDQUFDLElBQUksQ0FBQztFQUM5RCxDQUFDLENBQUM7QUFFTixDQUFDLEdBQUciLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgYXBpVVJMID0gJ2h0dHBzOi8vZmF2LXByb20uY29tL2FwaV9jc2dvJ1xuXG4gICAgY29uc3RcbiAgICAgICAgdW5hdXRoTXNncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy51bmF1dGgtbXNnJyksXG4gICAgICAgIHBhcnRpY2lwYXRlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tam9pbicpLFxuICAgICAgICBtYWluUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXYtcGFnZScpLFxuICAgICAgICBiYWxsV3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFsbFwiKSxcbiAgICAgICAgZ3VpZGVXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ndWlkZVwiKSxcbiAgICAgICAgZ2FtZVdyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWVzXCIpO1xuXG4gICAgY29uc3QgdWtMZW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VrTGVuZycpO1xuICAgIGNvbnN0IGVuTGVuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbkxlbmcnKTtcblxuICAgIGxldCBsb2NhbGUgPSAndWsnO1xuXG4gICAgaWYgKHVrTGVuZykgbG9jYWxlID0gJ3VrJztcbiAgICBpZiAoZW5MZW5nKSBsb2NhbGUgPSAnZW4nO1xuXG5cbiAgICBsZXQgaTE4bkRhdGEgPSB7fTtcbiAgICBjb25zdCBkZWJ1ZyA9IHRydWU7XG4gICAgLy8gbGV0IHVzZXJJZDtcbiAgICBsZXQgdXNlcklkID0gMTAxMjM0ODYxO1xuICAgIC8vIGxldCB1c2VySWQgPSA5OTk5O1xuXG4gICAgZnVuY3Rpb24gbG9hZFRyYW5zbGF0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke2FwaVVSTH0vdHJhbnNsYXRlcy8ke2xvY2FsZX1gKS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICAgICAgaTE4bkRhdGEgPSBqc29uO1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgdmFyIG11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAobXV0YXRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIG11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFsbCcpLCB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgc3VidHJlZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJhbnNsYXRlKCkge1xuICAgICAgICBjb25zdCBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRyYW5zbGF0ZV0nKVxuICAgICAgICBpZiAoZWxlbXMgJiYgZWxlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyBlbGVtcy5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgICAgICAgLy8gICAgIGNvbnN0IGtleSA9IGVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgICAgICAgICAgLy8gICAgIGVsZW0uaW5uZXJIVE1MID0gaTE4bkRhdGFba2V5XSB8fCAnKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiAgIGtleTogICcgKyBrZXk7XG4gICAgICAgICAgICAvLyAgICAgZWxlbS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgICAgICAgICAvLyB9KVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0cmFuc2xhdGUgd29ya2luZ1wiKVxuICAgICAgICB9XG4gICAgICAgIGlmIChsb2NhbGUgPT09ICdlbicpIHtcbiAgICAgICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5hZGQoJ2VuJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmVmcmVzaExvY2FsaXplZENsYXNzKCk7XG4gICAgfVxuICAgIGxvYWRUcmFuc2xhdGlvbnMoKVxuICAgICAgICAudGhlbihpbml0KTtcbiAgICBmdW5jdGlvbiByZWZyZXNoTG9jYWxpemVkQ2xhc3MoZWxlbWVudCwgYmFzZUNzc0NsYXNzKSB7XG4gICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgbGFuZyBvZiBbJ2hyJywgJ2VuJ10pIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShiYXNlQ3NzQ2xhc3MgKyBsYW5nKTtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYmFzZUNzc0NsYXNzICsgbG9jYWxlKTtcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIGlmICh3aW5kb3cuc3RvcmUpIHtcbiAgICAgICAgICAgIHZhciBzdGF0ZSA9IHdpbmRvdy5zdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgICAgICAgdXNlcklkID0gc3RhdGUuYXV0aC5pc0F1dGhvcml6ZWQgJiYgc3RhdGUuYXV0aC5pZCB8fCAnJztcbiAgICAgICAgICAgIHNldHVwUGFnZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0dXBQYWdlKCk7XG4gICAgICAgICAgICBsZXQgYyA9IDA7XG4gICAgICAgICAgICB2YXIgaSA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoYyA8IDUwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghIXdpbmRvdy5nX3VzZXJfaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZCA9IHdpbmRvdy5nX3VzZXJfaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR1cFBhZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrVXNlckF1dGgoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgIH1cblxuICAgICAgICBjaGVja1VzZXJBdXRoKCk7XG5cbiAgICAgICAgcGFydGljaXBhdGVCdG5zLmZvckVhY2goKGF1dGhCdG4sIGkpID0+IHtcbiAgICAgICAgICAgIGF1dGhCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldHVwUGFnZSgpIHt9XG4gICAgZnVuY3Rpb24gcGFydGljaXBhdGUoKSB7XG4gICAgICAgIGlmICghdXNlcklkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwYXJhbXMgPSB7dXNlcmlkOiB1c2VySWR9O1xuICAgICAgICByZXF1ZXN0KCcvdXNlcicsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGFyYW1zKVxuICAgICAgICB9KS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpKTtcbiAgICAgICAgICAgIGJhbGxXcmFwLmNsYXNzTGlzdC5yZW1vdmUoJ19zaWduJyk7XG4gICAgICAgICAgICBzZXR1cFBhZ2UoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVxdWVzdCA9IGZ1bmN0aW9uIChsaW5rLCBleHRyYU9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKGFwaVVSTCArIGxpbmssIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAuLi4oZXh0cmFPcHRpb25zIHx8IHt9KVxuICAgICAgICB9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrVXNlckF1dGgoKSB7XG4gICAgICAgIGlmICh1c2VySWQpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgdW5hdXRoTWVzIG9mIHVuYXV0aE1zZ3MpIHtcbiAgICAgICAgICAgICAgICB1bmF1dGhNZXMuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVxdWVzdChgL2ZhdnVzZXIvJHt1c2VySWR9P25vY2FjaGU9MWApXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy51c2VyaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFsbFdyYXAuY2xhc3NMaXN0LnJlbW92ZSgnX3NpZ24nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGd1aWRlV3JhcC5jbGFzc0xpc3QucmVtb3ZlKCdfc2lnbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZVdyYXAuY2xhc3NMaXN0LnJlbW92ZSgnX3NpZ24nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFubmVyX19idG5cIikuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZ3Jlc3NcIikuY2xhc3NMaXN0LnJlbW92ZShcIl9zaWduXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRlYnVnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnBvaW50c1BlckRheSA9IDMwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zcGluQWxsb3dlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnNwaW5zU3RyZWFrID0gMztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZXMuc3BpbnMgPSBbXCJcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZWZyZXNoVXNlckluZm8ocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlVc2VyU3BpbnMocmVzLnNwaW5zKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFubmVyX19idG5cIikuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFubmVyX19idG5cIikuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICAgICAgICAgIGZvciAobGV0IHBhcnRpY2lwYXRlQnRuIG9mIHBhcnRpY2lwYXRlQnRucykge1xuICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoY29uc3QgdW5hdXRoTWVzIG9mIHVuYXV0aE1zZ3MpIHtcbiAgICAgICAgICAgICAgICB1bmF1dGhNZXMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJhbnNsYXRlS2V5KGtleSkge1xuICAgICAgICBpZiAoIWtleSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpMThuRGF0YVtrZXldIHx8ICcqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qICAga2V5OiAgJyArIGtleTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5VXNlclNwaW5zKHNwaW5zKSB7XG4gICAgICAgIGNvbnN0IHNwaW5JdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNwaW5zLXJvdycpO1xuICAgICAgICBjb25zdCBub1NwaW5JdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vLXNwaW5zJyk7XG4gICAgICAgIGlmICghc3BpbnMgfHwgc3BpbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBzcGluSXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICBub1NwaW5JdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNwaW5zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNwaW5zLXJvdycpO1xuICAgICAgICBzcGluc0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcblxuICAgICAgICBzcGluSXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgIG5vU3Bpbkl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuXG4gICAgICAgIHNwaW5zLmZvckVhY2goc3BpbiA9PiB7XG4gICAgICAgICAgICBjb25zdCBzcGluRGF0ZSA9IG5ldyBEYXRlKHNwaW4uZGF0ZSk7XG4gICAgICAgICAgICBjb25zdCBmb3JtYXR0ZWREYXRlID0gc3BpbkRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCdoci1IUicpO1xuICAgICAgICAgICAgY29uc3Qgc3Bpbk5hbWUgPSB0cmFuc2xhdGVLZXkoc3Bpbi5uYW1lKSB8fCAnJztcblxuICAgICAgICAgICAgY29uc3Qgc3BpbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHNwaW5FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NwaW5zLXJvdy1pdGVtJyk7XG5cbiAgICAgICAgICAgIHNwaW5FbGVtZW50LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29udGVudC1kYXRlXCI+JHtmb3JtYXR0ZWREYXRlfTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29udGVudC1wcml6ZVwiPiR7c3Bpbk5hbWV9PC9zcGFuPlxuICAgICAgICBgO1xuXG4gICAgICAgICAgICBzcGluc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzcGluRWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgLy8gQ2FyZHMgc2xpZGVyXG4gICAgY29uc3QgY2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpemVfX2xpc3QnKSxcbiAgICAgICAgICBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcml6ZV9fbGlzdC1pdGVtJyksXG4gICAgICAgICAgY2FyZHNXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaXplX19saXN0LXNjcm9sbCcpLFxuICAgICAgICAgIG1vdmVSaWdodEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcml6ZV9fc2xpZGVyLW1vdmUtcmlnaHQnKSxcbiAgICAgICAgICBtb3ZlTGVmdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcml6ZV9fc2xpZGVyLW1vdmUtbGVmdCcpLFxuICAgICAgICAgIHRhYnNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpemVfX3RhYnMnKSxcbiAgICAgICAgICBpc01vYmlsZSA9IHdpbmRvdy5pbm5lcldpZHRoIDwgNjAwLFxuICAgICAgICAgIHRvdGFsQ2FyZHMgPSBjYXJkcy5sZW5ndGgsXG4gICAgICAgICAgY2FyZFdpZHRoID0gY2FyZHNbMF0uY2xpZW50V2lkdGgsXG4gICAgICAgICAgY2FyZHNNYXJnaW4gPSAoY2FyZHNXcmFwLmNsaWVudFdpZHRoIC0gY2FyZFdpZHRoICogdG90YWxDYXJkcykgLyAodG90YWxDYXJkcyAtIDEpLFxuICAgICAgICAgIHZpc2libGVTbGlkZXMgPSBpc01vYmlsZSA/IDEgOiBNYXRoLmNlaWwoY2FyZHNDb250YWluZXIuY2xpZW50V2lkdGggLyAoY2FyZFdpZHRoICsgY2FyZHNNYXJnaW4pKSxcbiAgICAgICAgICB0b3RhbFRhYnMgPSBNYXRoLmNlaWwodG90YWxDYXJkcyAvIHZpc2libGVTbGlkZXMpLFxuICAgICAgICAgIHRhYldpZHRoPSB2aXNpYmxlU2xpZGVzICogKGNhcmRXaWR0aCArIGNhcmRzTWFyZ2luKVxuXG5cbiAgICBsZXQgY3VycmVudFNsaWRlID0gMSxcbiAgICAgICAgY2FyZHNQb3NpdGlvbiA9IDAsXG4gICAgICAgIGxlZnRTbGlkZSxcbiAgICAgICAgcmlnaHRTbGlkZTtcblxuICAgIGNvbnN0IHVwZGF0ZUFjdGl2ZUNhcmQgPSAoY2FyZHMsIGFjdGl2ZUluZGV4KSA9PiB7XG4gICAgICAgIGNhcmRzLmZvckVhY2goKGNhcmQsIGkpID0+e1xuICAgICAgICAgICAgYWN0aXZlSW5kZXggLSAxID09PSBpID8gY2FyZC5jbGFzc0xpc3QuYWRkKFwiX2FjdGl2ZVwiKSA6IGNhcmQuY2xhc3NMaXN0LnJlbW92ZShcIl9hY3RpdmVcIilcbiAgICAgICAgfSlcbiAgICB9XG4gICAgdXBkYXRlQWN0aXZlQ2FyZChjYXJkcywgY3VycmVudFNsaWRlKVxuXG4gICAgZnVuY3Rpb24gbGVmdFNsaWRlVGFiKCl7XG4gICAgICAgIGxlZnRTbGlkZSA9IGN1cnJlbnRTbGlkZVxuICAgIH1cbiAgICBmdW5jdGlvbiByaWdodFNsaWRlVGFiKCl7XG4gICAgICAgIHJpZ2h0U2xpZGUgPSBjdXJyZW50U2xpZGUgKyAodmlzaWJsZVNsaWRlcyAtIDEpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZmlyc3RMYXN0U2xpZGVzKCl7XG4gICAgICAgIGlmKGlzTW9iaWxlKSByZXR1cm5cbiAgICAgICAgbGVmdFNsaWRlVGFiKClcbiAgICAgICAgcmlnaHRTbGlkZVRhYigpXG4gICAgICAgIGNhcmRzLmZvckVhY2goKGNhcmQgLCBpKSA9PntcbiAgICAgICAgICAgIGkgKyAxID09PSBsZWZ0U2xpZGUgPyBjYXJkLmNsYXNzTGlzdC5hZGQoXCJfbGVmdFwiKSA6IGNhcmQuY2xhc3NMaXN0LnJlbW92ZShcIl9sZWZ0XCIpXG4gICAgICAgICAgICBpICsgMSA9PT0gcmlnaHRTbGlkZSA/IGNhcmQuY2xhc3NMaXN0LmFkZChcIl9yaWdodFwiKSA6IGNhcmQuY2xhc3NMaXN0LnJlbW92ZShcIl9yaWdodFwiKVxuICAgICAgICB9KVxuICAgIH1cbiAgICBmaXJzdExhc3RTbGlkZXMoKVxuXG4gICAgZnVuY3Rpb24gc2V0Q2FyZHNQb3NpdGlvbiAocG9zaXRpb24pIHtcbiAgICAgICAgY2FyZHNXcmFwLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKC0ke3Bvc2l0aW9ufXB4KWA7XG4gICAgfTtcbiAgICBjb25zdCBtb3ZlUmlnaHQgPSAoKSA9PiB7XG5cbiAgICAgICAgaWYgKGN1cnJlbnRTbGlkZSA+PSB0b3RhbENhcmRzIC0gKHZpc2libGVTbGlkZXMgLSAxKSAmJiBpc01vYmlsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGZpcnN0TGFzdFNsaWRlcygpXG4gICAgICAgICAgICBjdXJyZW50U2xpZGUgPSAxO1xuICAgICAgICAgICAgY2FyZHNQb3NpdGlvbiA9IDA7XG4gICAgICAgICAgICByaWdodFNsaWRlKytcbiAgICAgICAgICAgIGxlZnRTbGlkZSsrXG4gICAgICAgIH1lbHNlIGlmKGN1cnJlbnRTbGlkZSA9PT0gdG90YWxDYXJkcykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudFNsaWRlKVxuICAgICAgICAgICAgY3VycmVudFNsaWRlID0gMTtcbiAgICAgICAgICAgIGNhcmRzUG9zaXRpb24gPSAwO1xuICAgICAgICB9ZWxzZSBpZihjdXJyZW50U2xpZGUgPT09IHRvdGFsQ2FyZHMgLSAoIHZpc2libGVTbGlkZXMgKyAxKSl7XG4gICAgICAgICAgICBjdXJyZW50U2xpZGUgPSB0b3RhbENhcmRzXG4gICAgICAgICAgICBjYXJkc1Bvc2l0aW9uID0gY2FyZHNXcmFwLmNsaWVudFdpZHRoIC0gKHdpbmRvdy5pbm5lcldpZHRoIC0gKGNhcmRzTWFyZ2luIC8gMikpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjYXJkc1Bvc2l0aW9uKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgbWF4UG9zaXRpb24gPSAodG90YWxDYXJkcyAtIHZpc2libGVTbGlkZXMpICogKGNhcmRXaWR0aCArIGNhcmRzTWFyZ2luKTtcbiAgICAgICAgICAgIGlmIChjYXJkc1Bvc2l0aW9uICsgY2FyZFdpZHRoICsgY2FyZHNNYXJnaW4gPiBtYXhQb3NpdGlvbikge1xuICAgICAgICAgICAgICAgIGNhcmRzUG9zaXRpb24gPSBtYXhQb3NpdGlvbjtcbiAgICAgICAgICAgICAgICBjdXJyZW50U2xpZGUgPSB0b3RhbENhcmRzIC0gdmlzaWJsZVNsaWRlcyArIDE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNhcmRzUG9zaXRpb24gKz0gY2FyZFdpZHRoICsgY2FyZHNNYXJnaW47XG4gICAgICAgICAgICAgICAgY3VycmVudFNsaWRlKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc2V0Q2FyZHNQb3NpdGlvbihjYXJkc1Bvc2l0aW9uKTtcbiAgICAgICAgdXBkYXRlQWN0aXZlQ2FyZChjYXJkcywgY3VycmVudFNsaWRlKVxuICAgICAgICBmaXJzdExhc3RTbGlkZXMoKVxuICAgICAgICBoaWRlUG9wdXBzKGNhcmRzKVxuICAgIH07XG4gICAgY29uc3QgbW92ZUxlZnQgPSAoKSA9PiB7XG4gICAgICAgIGlmKGN1cnJlbnRTbGlkZSA9PT0gMSAmJiBpc01vYmlsZSA9PT0gZmFsc2Upe1xuICAgICAgICAgICAgY3VycmVudFNsaWRlID0gdG90YWxDYXJkcyAtICh2aXNpYmxlU2xpZGVzIC0gMSk7XG4gICAgICAgICAgICBjYXJkc1Bvc2l0aW9uID0gKCh0b3RhbENhcmRzIC0gKHZpc2libGVTbGlkZXMgLSAxKSkgKiAoY2FyZFdpZHRoICsgY2FyZHNNYXJnaW4pKSAtKGNhcmRXaWR0aCArIGNhcmRzTWFyZ2luKTtcbiAgICAgICAgfWVsc2UgaWYgKGN1cnJlbnRTbGlkZSA9PT0gMikge1xuICAgICAgICAgICAgY2FyZHNQb3NpdGlvbiA9IDBcbiAgICAgICAgICAgIGN1cnJlbnRTbGlkZSA9IDFcbiAgICAgICAgfWVsc2UgaWYoY3VycmVudFNsaWRlID09PSAxICYmIGlzTW9iaWxlID09PSB0cnVlKXtcbiAgICAgICAgICAgIGN1cnJlbnRTbGlkZSA9IHRvdGFsQ2FyZHNcbiAgICAgICAgICAgIGNhcmRzUG9zaXRpb24gPSBjYXJkc1dyYXAuY2xpZW50V2lkdGggLSAod2luZG93LmlubmVyV2lkdGggLSAoY2FyZHNNYXJnaW4gLyAyKSlcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgY2FyZHNQb3NpdGlvbiAtPSBjYXJkV2lkdGggKyBjYXJkc01hcmdpbjtcbiAgICAgICAgICAgIGN1cnJlbnRTbGlkZS0tXG4gICAgICAgIH1cbiAgICAgICAgc2V0Q2FyZHNQb3NpdGlvbihjYXJkc1Bvc2l0aW9uKTtcbiAgICAgICAgdXBkYXRlQWN0aXZlQ2FyZChjYXJkcywgY3VycmVudFNsaWRlKVxuICAgICAgICBmaXJzdExhc3RTbGlkZXMoKVxuICAgICAgICBoaWRlUG9wdXBzKGNhcmRzKVxuICAgIH07XG5cbiAgICAvLyBwb3B1cHMgbG9naWNcblxuICAgIGZ1bmN0aW9uIHNldFBvcHVwcyhwb3B1cHMsIHBvcHVwc0J0bnMpIHtcbiAgICAgICAgcG9wdXBzQnRucy5mb3JFYWNoKChidG4sIGkpID0+IHtcbiAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBwb3B1cHMuZm9yRWFjaCgocG9wdXAsIGopID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaSA9PT0gaiA/IHBvcHVwLmNsYXNzTGlzdC5hZGQoXCJfcG9wdXBcIikgOiBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwiX3BvcHVwXCIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhpZGVQb3B1cHMocG9wdXBzKXtcbiAgICAgICAgcG9wdXBzLmZvckVhY2gocG9wdXAgPT57XG4gICAgICAgICAgIHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoXCJfcG9wdXBcIilcbiAgICAgICAgfSlcbiAgICB9XG4vLyBwb3B1cHNcbiAgICBjb25zdCBwcml6ZU9wZW5CdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcml6ZV9fbGlzdC1pdGVtLWJ0blwiKSxcbiAgICAgICAgICBwcml6ZUNsb3NlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJpemVfX2xpc3QtcG9wdXAtY2xvc2VcIiksXG4gICAgICAgICAgZ3VpZGVQb3B1cHNXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ndWlkZV9faXRlbVwiKSxcbiAgICAgICAgICBndWlkZU9wZW5CdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ndWlkZV9faXRlbS1pbmZvLWJ0blwiKSxcbiAgICAgICAgICBndWlkZUNsb3NlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZ3VpZGVfX2l0ZW0tcG9wdXAtY2xvc2VcIiksXG4gICAgICAgICAgdGFibGVQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFibGVfX3BvcHVwXCIpLFxuICAgICAgICAgIHRhYmxlUG9wdXBDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFibGVfX3BvcHVwLWNsb3NlXCIpLFxuICAgICAgICAgIHRhYmxlUG9wdXBPcGVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YWJsZV9faW5mb1wiKSxcbiAgICAgICAgICBiYWxsUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2dyZXNzX19wb3B1cFwiKSxcbiAgICAgICAgICBiYWxsUG9wdXBDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZ3Jlc3NfX3BvcHVwLWNsb3NlXCIpLFxuICAgICAgICAgIGJhbGxQb3B1cE9wZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2dyZXNzX19wb3B1cC1idG5cIilcblxuICAgIHNldFBvcHVwcyhjYXJkcywgcHJpemVPcGVuQnRucyk7XG4gICAgc2V0UG9wdXBzKGd1aWRlUG9wdXBzV3JhcCwgZ3VpZGVPcGVuQnRucyk7XG5cbiAgICBndWlkZUNsb3NlQnRucy5mb3JFYWNoKGJ0biA9PntcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XG4gICAgICAgICAgICBoaWRlUG9wdXBzKGd1aWRlUG9wdXBzV3JhcClcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBwcml6ZUNsb3NlQnRucy5mb3JFYWNoKGJ0biA9PntcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XG4gICAgICAgICAgICBoaWRlUG9wdXBzKGNhcmRzKVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRhYmxlUG9wdXBPcGVuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICB0YWJsZVBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiXG4gICAgfSk7XG5cbiAgICB0YWJsZVBvcHVwQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICB0YWJsZVBvcHVwLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIlxuICAgIH0pO1xuXG4gICAgYmFsbFBvcHVwT3Blbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIGJhbGxQb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKVxuICAgIH0pO1xuXG4gICAgYmFsbFBvcHVwQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBiYWxsUG9wdXAuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICB9KTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+e1xuICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBDT1VOVCA9IDQwMDtcblxuICAgICAgICBmdW5jdGlvbiBTbm93c3Rvcm0oZWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5tYXN0aGVhZCA9IGVsZW1lbnQ7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMubWFzdGhlYWQuY2xpZW50V2lkdGg7XG4gICAgICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMubWFzdGhlYWQuY2xpZW50SGVpZ2h0O1xuICAgICAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc25vd2ZsYWtlcyA9IFtdO1xuXG4gICAgICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFNub3dzdG9ybS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmxlZnQgPSB0aGlzLmNhbnZhcy5zdHlsZS50b3AgPSAnMCc7XG4gICAgICAgICAgICB0aGlzLm1hc3RoZWFkLmFwcGVuZENoaWxkKHRoaXMuY2FudmFzKTtcblxuICAgICAgICAgICAgdGhpcy5vblJlc2l6ZSgpO1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25SZXNpemUuYmluZCh0aGlzKSwgZmFsc2UpO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IENPVU5UOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgc25vd2ZsYWtlID0gbmV3IHRoaXMuU25vd2ZsYWtlKHRoaXMpO1xuICAgICAgICAgICAgICAgIHNub3dmbGFrZS5yZXNldCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc25vd2ZsYWtlcy5wdXNoKHNub3dmbGFrZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltRnJhbWUodGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgU25vd3N0b3JtLnByb3RvdHlwZS5vblJlc2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMud2lkdGggPSB0aGlzLm1hc3RoZWFkLmNsaWVudFdpZHRoO1xuICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLm1hc3RoZWFkLmNsaWVudEhlaWdodDtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gdGhpcy53aWR0aDtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHRoaXMuaGVpZ2h0O1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJyNGRkYnO1xuXG4gICAgICAgICAgICB2YXIgd2FzQWN0aXZlID0gdGhpcy5hY3RpdmU7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZSA9IHRoaXMud2lkdGggPiA4MDtcbiAgICAgICAgICAgIHRoaXMud2lkdGggPiAyODAgPyBDT1VOVCA9IDE1MCA6IG51bGxcblxuICAgICAgICAgICAgaWYgKCF3YXNBY3RpdmUgJiYgdGhpcy5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbUZyYW1lKHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIFNub3dzdG9ybS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcblxuICAgICAgICAgICAgaWYgKCF0aGlzLmFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBDT1VOVDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNub3dmbGFrZSA9IHRoaXMuc25vd2ZsYWtlc1tpXTtcbiAgICAgICAgICAgICAgICBzbm93Zmxha2UueSArPSBzbm93Zmxha2Uudnk7XG4gICAgICAgICAgICAgICAgc25vd2ZsYWtlLnggKz0gc25vd2ZsYWtlLnZ4O1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZ2xvYmFsQWxwaGEgPSBzbm93Zmxha2UubztcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5hcmMoc25vd2ZsYWtlLngsIHNub3dmbGFrZS55LCBzbm93Zmxha2UuciwgMCwgTWF0aC5QSSAqIDIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoc25vd2ZsYWtlLnkgPiB0aGlzLmhlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICBzbm93Zmxha2UucmVzZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlcXVlc3RBbmltRnJhbWUodGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgU25vd3N0b3JtLnByb3RvdHlwZS5Tbm93Zmxha2UgPSBmdW5jdGlvbiAoc25vd3N0b3JtKSB7XG4gICAgICAgICAgICB0aGlzLnNub3dzdG9ybSA9IHNub3dzdG9ybTtcbiAgICAgICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgfTtcblxuICAgICAgICBTbm93c3Rvcm0ucHJvdG90eXBlLlNub3dmbGFrZS5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLnggPSBNYXRoLnJhbmRvbSgpICogdGhpcy5zbm93c3Rvcm0ud2lkdGg7XG4gICAgICAgICAgICB0aGlzLnkgPSBNYXRoLnJhbmRvbSgpICogLXRoaXMuc25vd3N0b3JtLmhlaWdodDtcbiAgICAgICAgICAgIHRoaXMudnkgPSAwLjMgKyBNYXRoLnJhbmRvbSgpICogMC4wMDAwMTtcbiAgICAgICAgICAgIHRoaXMudnggPSAwLjYgLSBNYXRoLnJhbmRvbSgpO1xuICAgICAgICAgICAgdGhpcy5yID0gMSArIE1hdGgucmFuZG9tKCkgKiAyO1xuICAgICAgICAgICAgdGhpcy5vID0gMTtcbiAgICAgICAgfTtcblxuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1GcmFtZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICAgICAgICAgIHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgICAgICAgICB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCAxMDAwIC8gNjApO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgIH0pKCk7XG5cbiAgICAgICAgdmFyIHNraWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNreScpO1xuICAgICAgICBza2llcy5mb3JFYWNoKGZ1bmN0aW9uIChza3kpIHtcbiAgICAgICAgICAgIG5ldyBTbm93c3Rvcm0oc2t5KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gYmFsbCBzaGFrZSBzbm93XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbm93Q2FudmFzJyk7XG4gICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBjb25zdCBiYWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNwaGVyZScpO1xuXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IGNhbnZhcy5wYXJlbnRFbGVtZW50LmNsaWVudFdpZHRoO1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gY2FudmFzLnBhcmVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuXG4gICAgICAgIGxldCBzbm93Zmxha2VzID0gW107XG4gICAgICAgIGNvbnN0IG1heFNub3dmbGFrZXMgPSAxMDA7XG4gICAgICAgIGNvbnN0IG1heFNwZWVkID0gNztcbiAgICAgICAgbGV0IHN0b3JtQ291bnRlciA9IDFcblxuXG4gICAgICAgIGxldCBzbm93Zmxha2VzUmVtb3ZlZCA9IDA7XG5cbiAgICAgICAgY2xhc3MgU25vd2ZsYWtlIHtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgICAgIHRoaXMueCA9IE1hdGgucmFuZG9tKCkgKiBjYW52YXMud2lkdGg7XG4gICAgICAgICAgICAgICAgdGhpcy55ID0gTWF0aC5yYW5kb20oKSAqIGNhbnZhcy5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgdGhpcy5yYWRpdXMgPSBNYXRoLnJhbmRvbSgpICogMyArIDE7XG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlZFggPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiAxMDtcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVkWSA9IE1hdGgucmFuZG9tKCkgKiAxLjUgKyAxO1xuICAgICAgICAgICAgICAgIHRoaXMuYWNjZWxlcmF0aW9uID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmluZ1RvQm90dG9tID0gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVwZGF0ZShiYWxsWCwgYmFsbFksIGJhbGxSYWRpdXMsIGJhbGxTaGFraW5nKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubW92aW5nVG9Cb3R0b20pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0U3BlZWQgPSAwLjE7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNwZWVkRGVjYXlGYWN0b3IgPSAwLjA1OyAvLyDQmtC+0LXRhNGW0YbRltGU0L3RgiDQtNC70Y8g0L/Qu9Cw0LLQvdC+0LPQviDRgdC/0L7QstGW0LvRjNC90LXQvdC90Y9cblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwZWVkWCA9IHRoaXMuc3BlZWRYIC0gKHRoaXMuc3BlZWRYIC0gdGFyZ2V0U3BlZWQpICogc3BlZWREZWNheUZhY3RvcjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGVlZFkgPSB0aGlzLnNwZWVkWSAtICh0aGlzLnNwZWVkWSAtIHRhcmdldFNwZWVkKSAqIHNwZWVkRGVjYXlGYWN0b3I7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8g0J7QvdC+0LLQu9C10L3QvdGPINC/0L7Qt9C40YbRltGXINGB0L3RltC20LjQvdC60LhcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55ICs9IHRoaXMuc3BlZWRZO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnkgPiBjYW52YXMuaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLnggKz0gdGhpcy5zcGVlZFg7XG4gICAgICAgICAgICAgICAgdGhpcy55ICs9IHRoaXMuc3BlZWRZO1xuXG4gICAgICAgICAgICAgICAgLy8g0J7QsdC80LXQttC10L3QvdGPINGI0LLQuNC00LrQvtGB0YLRllxuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWRYID0gTWF0aC5tYXgoLW1heFNwZWVkLCBNYXRoLm1pbihtYXhTcGVlZCwgdGhpcy5zcGVlZFgpKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVkWSA9IE1hdGgubWF4KC1tYXhTcGVlZCwgTWF0aC5taW4obWF4U3BlZWQsIHRoaXMuc3BlZWRZKSk7XG5cbiAgICAgICAgICAgICAgICAvLyDQlNC+0LTQsNCy0LDQvdC90Y8g0YjQstC40LTQutC+0YHRgtGWINGH0LXRgNC10LcgXCLRgtGA0YPRgdGW0L3QvdGPXCIg0LrRg9C70ZZcbiAgICAgICAgICAgICAgICBpZiAoYmFsbFNoYWtpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY2NlbGVyYXRpb24gKz0gMC4wNTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjY2VsZXJhdGlvbiAqPSAwLjk1O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVkWCArPSB0aGlzLmFjY2VsZXJhdGlvbiAqIChNYXRoLnJhbmRvbSgpIC0gMC41KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVkWSArPSB0aGlzLmFjY2VsZXJhdGlvbiAqIChNYXRoLnJhbmRvbSgpIC0gMC41KTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnkgPiBjYW52YXMuaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMueSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMueCA9IE1hdGgucmFuZG9tKCkgKiBjYW52YXMud2lkdGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnggPiBjYW52YXMud2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54ID0gMDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMueCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54ID0gY2FudmFzLndpZHRoO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vINCS0ZbQtNGB0YLQsNC90Ywg0LTQviDRhtC10L3RgtGA0YMg0LrRg9C70ZZcbiAgICAgICAgICAgICAgICBjb25zdCBkeCA9IHRoaXMueCAtIGJhbGxYO1xuICAgICAgICAgICAgICAgIGNvbnN0IGR5ID0gdGhpcy55IC0gYmFsbFk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuXG4gICAgICAgICAgICAgICAgLy8g0JLRltC00YHQutC+0Log0LLRltC0INC60YPQu9GWXG4gICAgICAgICAgICAgICAgaWYgKGRpc3RhbmNlIDwgYmFsbFJhZGl1cyArIHRoaXMucmFkaXVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFuZ2xlID0gTWF0aC5hdGFuMihkeSwgZHgpOyAvLyDQmtGD0YIg0LfRltGC0LrQvdC10L3QvdGPXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG92ZXJsYXAgPSBiYWxsUmFkaXVzICsgdGhpcy5yYWRpdXMgLSBkaXN0YW5jZTtcblxuICAgICAgICAgICAgICAgICAgICAvLyDQn9C10YDQtdC80ZbRidC10L3QvdGPINGB0L3RltC20LjQvdC60LhcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54ICs9IE1hdGguY29zKGFuZ2xlKSAqIG92ZXJsYXA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMueSArPSBNYXRoLnNpbihhbmdsZSkgKiBvdmVybGFwO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vINCg0LXQstC10YDRgSDRiNCy0LjQtNC60L7RgdGC0ZZcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGVlZFggKj0gLTAuNztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGVlZFkgKj0gLTAuNztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1vdmVUb0JvdHRvbSgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmluZ1RvQm90dG9tID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVtb3ZlKCkge1xuICAgICAgICAgICAgICAgIHNub3dmbGFrZXMuc3BsaWNlKHNub3dmbGFrZXMuaW5kZXhPZih0aGlzKSwgMSk7XG4gICAgICAgICAgICAgICAgc25vd2ZsYWtlc1JlbW92ZWQrKztcbiAgICAgICAgICAgICAgICBpZiAoc3Rvcm1Db3VudGVyID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ldyBTbm93c3Rvcm0oZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zcGhlcmVfX2JvZHlcIikpO1xuICAgICAgICAgICAgICAgICAgICBzdG9ybUNvdW50ZXIrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRyYXcoKSB7XG4gICAgICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIGN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCAwLCBNYXRoLlBJICogMik7XG4gICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICd3aGl0ZSc7XG4gICAgICAgICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbGFzdEJhbGxTaGFraW5nU3RhdGUgPSBmYWxzZTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1heFNub3dmbGFrZXM7IGkrKykge1xuICAgICAgICAgICAgc25vd2ZsYWtlcy5wdXNoKG5ldyBTbm93Zmxha2UoKSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBhbmltYXRlKCkge1xuICAgICAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXG4gICAgICAgICAgICBjb25zdCBiYWxsVHJhbnNmb3JtID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoYmFsbCkudHJhbnNmb3JtO1xuICAgICAgICAgICAgbGV0IGJhbGxYID0gY2FudmFzLndpZHRoIC8gMjtcbiAgICAgICAgICAgIGxldCBiYWxsWSA9IGNhbnZhcy5oZWlnaHQgLyAyO1xuICAgICAgICAgICAgY29uc3QgYmFsbFJhZGl1cyA9IGJhbGwub2Zmc2V0V2lkdGggLyAyO1xuICAgICAgICAgICAgY29uc3QgYmFsbFNoYWtpbmcgPSBiYWxsVHJhbnNmb3JtICE9PSAnbm9uZSc7XG5cbiAgICAgICAgICAgIGlmIChiYWxsVHJhbnNmb3JtICE9PSAnbm9uZScpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtYXRyaXggPSBuZXcgRE9NTWF0cml4KGJhbGxUcmFuc2Zvcm0pO1xuICAgICAgICAgICAgICAgIGJhbGxYID0gYmFsbC5vZmZzZXRMZWZ0ICsgbWF0cml4Lm00MSArIGJhbGxSYWRpdXM7XG4gICAgICAgICAgICAgICAgYmFsbFkgPSBiYWxsLm9mZnNldFRvcCArIG1hdHJpeC5tNDIgKyBiYWxsUmFkaXVzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYmFsbFNoYWtpbmcgJiYgIWxhc3RCYWxsU2hha2luZ1N0YXRlKSB7XG4gICAgICAgICAgICAgICAgc25vd2ZsYWtlcyA9IFtdO1xuICAgICAgICAgICAgICAgIHNub3dmbGFrZXNSZW1vdmVkID0gMDtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1heFNub3dmbGFrZXM7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBzbm93Zmxha2VzLnB1c2gobmV3IFNub3dmbGFrZSgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxhc3RCYWxsU2hha2luZ1N0YXRlID0gYmFsbFNoYWtpbmc7XG5cbiAgICAgICAgICAgIHNub3dmbGFrZXMuZm9yRWFjaChzbm93Zmxha2UgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghYmFsbFNoYWtpbmcpIHNub3dmbGFrZS5tb3ZlVG9Cb3R0b20oKTtcbiAgICAgICAgICAgICAgICBzbm93Zmxha2UudXBkYXRlKGJhbGxYLCBiYWxsWSwgYmFsbFJhZGl1cywgYmFsbFNoYWtpbmcpO1xuICAgICAgICAgICAgICAgIHNub3dmbGFrZS5kcmF3KCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgYW5pbWF0ZSgpO1xuXG4gICAgfSkoKTtcbn0pXG5cbi8vIHNub3dmYWxsIGFuaW1hdGlvXG5cbiAgICBsZXQgaSA9IDE7XG4gICAgZnVuY3Rpb24gc2VuZFNoYWtlUmVxdWVzdCgpIHtcbiAgICAgICAgaWYgKCF1c2VySWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkZWJ1Zykge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgLy8gbnVtYmVyOiBpKyssXG4gICAgICAgICAgICAgICAgdHlwZTogJ3Rlc3QnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHt1c2VyaWQ6IHVzZXJJZH07XG4gICAgICAgIHJldHVybiByZXF1ZXN0KCcvc3BpbicsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGFyYW1zKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBidG5TaGFrZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZ3Jlc3NfX3NoYWtlXCIpLFxuICAgICAgICAgIGJhbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNwaGVyZVwiKSxcbiAgICAgICAgICBiYWxsQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zcGhlcmVfX2JveFwiKVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gYW5pbWF0ZVNoYWtlKGJhbGwsIGJveCwgYnRuLCBwcml6ZSkge1xuICAgICAgICBjb25zdCBkZWxheSA9IChtcykgPT4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSlcblxuICAgICAgICBidG4uY2xhc3NMaXN0LmFkZChcIl9kaXNhYmxlZFwiKTtcbiAgICAgICAgYmFsbC5jbGFzc0xpc3QuYWRkKFwiX3NoYWtlXCIpO1xuICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcIl9zaGFrZS1yZXZlcnNlXCIpO1xuXG4gICAgICAgIGF3YWl0IGRlbGF5KDIwMDApO1xuXG4gICAgICAgIGJhbGwuY2xhc3NMaXN0LnJlbW92ZShcIl9zaGFrZVwiKTtcbiAgICAgICAgYmFsbC5jbGFzc0xpc3QuYWRkKFwiX2JlZm9yZS1oaWRlXCIpO1xuICAgICAgICBib3guY2xhc3NMaXN0LnJlbW92ZShcIl9zaGFrZS1yZXZlcnNlXCIpO1xuICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcIl9ib3gtb3BhY2l0eVwiKTtcblxuICAgICAgICBhd2FpdCBkZWxheSgyMDApO1xuXG4gICAgICAgIGJhbGwuY2xhc3NMaXN0LmFkZChgJHtwcml6ZX1gKTtcbiAgICB9XG5cbiAgICAvLyDQmtC+0LbQtdC9INC60LvQsNGBINCy0ZbQtNC/0L7QstGW0LTQsNGUINCy0LjQs9GA0LDQvdC+0LzRgyDQv9GA0LjQt9GDOlxuICAgIC8vIFwiX2lwaG9uZVwiIC0g0LLQuNCz0YDQsNC90L4gaVBob25lXG4gICAgLy8gXCJfdHZcIiAtINCy0LjQs9GA0LDQvdC+INGC0LXQu9C10LLRltC30L7RgFxuICAgIC8vIFwiX2pibFwiIC0g0LLQuNCz0YDQsNC90L4gSkJMLdC60L7Qu9C+0L3QutGDXG4gICAgLy8gXCJfbWVnb2dvXCIgLSDQstC40LPRgNCw0L3QviDQv9GW0LTQv9C40YHQutGDIE1lZ29nb1xuICAgIC8vIFwiX3Jlc3BpblwiIC0g0LTQvtC00LDRgtC60L7QstC1INC+0LHQtdGA0YLQsNC90L3Rj1xuICAgIC8vIFwiX25vdGhpbmdcIiAtINC90ZbRh9C+0LPQviDQvdC1INCy0LjQs9GA0LDQvdC+XG4gICAgLy8gXCJfcG9pbnRzNTBcIiAtINCy0LjQs9GA0LDQvdC+IDUwINCx0L7QvdGD0YHQvdC40YUg0LHQsNC70ZbQslxuICAgIC8vIFwiX2ZzMTBcIiAtINCy0LjQs9GA0LDQvdC+IDEwINGE0YDRltGB0L/RltC90ZbQslxuICAgIC8vIFwiX2ZzMjVcIiAtINCy0LjQs9GA0LDQvdC+IDI1INGE0YDRltGB0L/RltC90ZbQslxuICAgIC8vIFwiX2ZzNTBcIiAtINCy0LjQs9GA0LDQvdC+IDUwINGE0YDRltGB0L/RltC90ZbQslxuICAgIC8vIFwiX3NhdmVCZXQxMDBcIiAtINCy0LjQs9GA0LDQvdC+INGB0YLRgNCw0YXQvtCy0LrRgyDQvdCwIDEwMCDRgdGC0LDQstC+0LpcbiAgICAvLyBcIl9zYXZlQmV0MTUwXCIgLSDQstC40LPRgNCw0L3QviDRgdGC0YDQsNGF0L7QstC60YMg0L3QsCAxNTAg0YHRgtCw0LLQvtC6XG4gICAgLy8gXCJfc2F2ZUJldDIwMFwiIC0g0LLQuNCz0YDQsNC90L4g0YHRgtGA0LDRhdC+0LLQutGDINC90LAgMjAwINGB0YLQsNCy0L7QulxuICAgIC8vINGE0YPQvdC60YbRltGPIGluaXRTaGFrZSDQv9GA0L7QutC40LTRg9GUINC60LvQsNGB0Lgg0LLRltC00L/QvtCy0ZbQtNC90ZYg0L/RgNC40LfQsNC8INC90LAg0LHQu9C+0LogLnNwaGVyZSDQtNC70Y8g0LLRltC00L7QsdGA0LDQttC10L3QvdGPINC/0YDQuNC30YNcbiAgICBjb25zdCB3aW5DbGFzc2VzID0gW1xuICAgICAgICBcIl9pcGhvbmVcIiwgXCJfdHZcIiwgXCJfamJsXCIsIFwiX21lZ29nb1wiLCBcIl9yZXNwaW5cIiwgXCJfbm90aGluZ1wiLFxuICAgICAgICBcIl9wb2ludHM1MFwiLCBcIl9mczEwXCIsIFwiX2ZzMjVcIiwgXCJfZnM1MFwiLCBcIl9zYXZlQmV0MTAwXCIsIFwiX3NhdmVCZXQxNTBcIiwgXCJfc2F2ZUJldDIwMFwiXG4gICAgXTtcbiAgICBmdW5jdGlvbiBpbml0U2hha2UoYmFsbCwgYnRuLCBib3gpIHtcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgICAgIHNlbmRTaGFrZVJlcXVlc3QoKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcyB8fCAhIXJlcy5lcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAvLyBidG5TaGFrZS5jbGFzc0xpc3QuYWRkKCdwdWxzZS1idG4nKTtcbiAgICAgICAgICAgICAgICAgICAgYnRuU2hha2UuY2xhc3NMaXN0LnJlbW92ZSgnX2Rpc2FibGVkJylcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBjb25zdCBwcml6ZSA9IHJlcy5udW1iZXI7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJpemUgPSB3aW5DbGFzc2VzWzEyXTtcbiAgICAgICAgICAgICAgICBjb25zdCBzdHJlYWtCb251cyA9IHJlcy5zdHJlYWtCb251cyB8fCBkZWJ1ZztcbiAgICAgICAgICAgICAgICBhbmltYXRlU2hha2UoYmFsbCwgYm94LCBidG4sIHByaXplKS5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihcImFuaW0gZXJyb3I6XCIsIGVycikpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgaW5pdFNoYWtlKGJhbGwsIGJ0blNoYWtlLCBiYWxsQm94KVxuXG4vLyB0YWJsZSB0b2dnbGVcblxuICAgIGNvbnN0IHRvZ2dsZUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYmxlX190b2dnbGUtaXRlbScpLFxuICAgICAgICAgIHRhYmxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJsZV9fYm9keScpXG5cbiAgICB0b2dnbGVJdGVtcy5mb3JFYWNoKCh0b2dnbGVJdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICB0b2dnbGVJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdG9nZ2xlSXRlbXMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnX2FjdGl2ZScpKTtcbiAgICAgICAgICAgIHRhYmxlcy5mb3JFYWNoKHRhYmxlID0+IHRhYmxlLmNsYXNzTGlzdC5yZW1vdmUoJ19hY3RpdmUnKSk7XG4gICAgICAgICAgICB0b2dnbGVJdGVtLmNsYXNzTGlzdC5hZGQoJ19hY3RpdmUnKTtcbiAgICAgICAgICAgIHRhYmxlc1tpbmRleF0uY2xhc3NMaXN0LmFkZCgnX2FjdGl2ZScpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGhhbmRsZVJlc2l6ZSA9ICgpID0+e1xuICAgICAgICBsZXQgdG91Y2hTdGFydFggPSAwO1xuICAgICAgICBsZXQgdG91Y2hFbmRYID0gMDtcblxuICAgICAgICBjYXJkc0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0b3VjaFN0YXJ0WCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnNjcmVlblg7XG4gICAgICAgIH0sIGZhbHNlKTtcbiAgICAgICAgY2FyZHNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRvdWNoRW5kWCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnNjcmVlblg7XG4gICAgICAgICAgICBoYW5kbGVTd2lwZSgpO1xuICAgICAgICB9LCBmYWxzZSk7XG5cbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlU3dpcGUoKSB7XG4gICAgICAgICAgICBjb25zdCBzd2lwZVRocmVzaG9sZCA9IDUwO1xuICAgICAgICAgICAgaWYgKHRvdWNoRW5kWCA8IHRvdWNoU3RhcnRYIC0gc3dpcGVUaHJlc2hvbGQpIHtcbiAgICAgICAgICAgICAgICBtb3ZlUmlnaHQoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRvdWNoRW5kWCA+IHRvdWNoU3RhcnRYICsgc3dpcGVUaHJlc2hvbGQpIHtcbiAgICAgICAgICAgICAgICBtb3ZlTGVmdCgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbW92ZVJpZ2h0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbW92ZVJpZ2h0KTtcbiAgICAgICAgbW92ZUxlZnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtb3ZlTGVmdCk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwib3JpZW50YXRpb25jaGFuZ2VcIiwgKCkgPT57XG4gICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGhhbmRsZVJlc2l6ZSgpXG5cblxuICAgIC8vIGZvciB0ZXN0XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXJrLWJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZShcImRhcmtcIilcbiAgICB9KVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZW4tYnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mYXYtcGFnZVwiKS5jbGFzc0xpc3QudG9nZ2xlKFwiZW5cIilcbiAgICB9KVxuXG59KSgpOyJdfQ==
