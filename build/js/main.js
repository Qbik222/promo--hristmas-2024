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
  var userId = 100300268;
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
        // res.userid = userId
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
          }
          // refreshUserInfo(res);
          // displayUserSpins(res.spins);
        } else {
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
  var currentSlide = 1;
  var cardsPosition = 0;
  var leftSlide;
  var rightSlide;
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
      currentSlide = 1;
      cardsPosition = 0;
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
      cardsPosition = totalCards * (cardWidth + cardsMargin) - (cardWidth + cardsMargin);
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
  var prizeOpenBtns = document.querySelectorAll(".prize__list-item-btn");
  var prizeCloseBtns = document.querySelectorAll(".prize__list-popup-close");
  var guidePopupsWrap = document.querySelectorAll(".guide__item");
  var guideOpenBtns = document.querySelectorAll(".guide__item-info-btn");
  var guideCloseBtns = document.querySelectorAll(".guide__item-popup-close");
  var tablePopup = document.querySelector(".table__popup");
  var tablePopupClose = document.querySelector(".table__popup-close");
  var tablePopupOpen = document.querySelector(".table__info");
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

      // shim layer with setTimeout fallback
      window.requestAnimFrame = function () {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
          window.setTimeout(callback, 1000 / 60);
        };
      }();

      // Apply Snowstorm to all elements with the class 'sky'
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
      var maxSpeed = 7; // Максимальна швидкість сніжинки
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
              var targetSpeed = 0.1; // Маленька швидкість, до якої прагнемо
              var speedDecayFactor = 0.05; // Коефіцієнт для плавного сповільнення

              // Плавно наближаємо швидкість до targetSpeed
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
              this.acceleration += 0.05; // Нарощування швидкості
            } else {
              this.acceleration *= 0.95; // Поступове зменшення
            }

            this.speedX += this.acceleration * (Math.random() - 0.5);
            this.speedY += this.acceleration * (Math.random() - 0.5);

            // Перевірка на межі canvas
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
      }(); // Спавнимо нові сніжинки при зміні стану кулі
      var lastBallShakingState = false; // Змінна для відстеження стану кулі

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

        // Якщо стан кулі змінився на "рух", перезапускаємо сніжинки
        if (ballShaking && !lastBallShakingState) {
          // Очищаємо масив сніжинок
          snowflakes = [];
          snowflakesRemoved = 0;
          // Спавнимо нові сніжинки
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

  // snowfall animation

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
  var btnShake = document.querySelector(".progress__shake");
  var ball = document.querySelector(".sphere");
  var ballBox = document.querySelector(".sphere__box");
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
  var handleResize = function handleResize() {
    var touchStartX = 0;
    var touchEndX = 0;
    var touchStartTime = 0; // Час початку дотику

    var handleTouchStart = function handleTouchStart(event) {
      touchStartX = event.touches[0].clientX;
      touchStartTime = Date.now(); // Записуємо час початку дотику
    };

    var handleTouchMove = function handleTouchMove(event) {
      touchEndX = event.touches[0].clientX;
    };
    var handleTouchEnd = function handleTouchEnd() {
      var swipeDistance = touchStartX - touchEndX;
      var swipeTime = Date.now() - touchStartTime; // Тривалість свайпу

      // Фільтрація кліків та некоректних свайпів
      if (Math.abs(swipeDistance) < 50 || swipeTime > 500 && swipeTime > 50) {
        // Якщо свайп занадто короткий або надто повільний, не вважаємо його справжнім
        touchStartX = 0;
        touchEndX = 0;
        return;
      }

      // Перевіряємо напрямок свайпу
      if (swipeDistance > 50) {
        // Свайп ліворуч
        moveRight();
      } else if (swipeDistance < -50) {
        // Свайп праворуч
        moveLeft();
      }

      // Скидаємо значення
      touchStartX = 0;
      touchEndX = 0;
    };
    moveRightButton.addEventListener('click', moveRight);
    moveLeftButton.addEventListener('click', moveLeft);
    cardsContainer.addEventListener('touchstart', handleTouchStart);
    cardsContainer.addEventListener('touchmove', handleTouchMove);
    cardsContainer.addEventListener('touchend', handleTouchEnd);
    window.addEventListener("orientationchange", function () {
      location.reload();
    });
  };
  handleResize();
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwidW5hdXRoTXNncyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInBhcnRpY2lwYXRlQnRucyIsIm1haW5QYWdlIiwicXVlcnlTZWxlY3RvciIsImJhbGxXcmFwIiwiZ3VpZGVXcmFwIiwiZ2FtZVdyYXAiLCJ1a0xlbmciLCJlbkxlbmciLCJsb2NhbGUiLCJpMThuRGF0YSIsImRlYnVnIiwidXNlcklkIiwibG9hZFRyYW5zbGF0aW9ucyIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJ0cmFuc2xhdGUiLCJtdXRhdGlvbk9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9ucyIsIm9ic2VydmUiLCJnZXRFbGVtZW50QnlJZCIsImNoaWxkTGlzdCIsInN1YnRyZWUiLCJlbGVtcyIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJjbGFzc0xpc3QiLCJhZGQiLCJyZWZyZXNoTG9jYWxpemVkQ2xhc3MiLCJpbml0IiwiZWxlbWVudCIsImJhc2VDc3NDbGFzcyIsImxhbmciLCJyZW1vdmUiLCJ3aW5kb3ciLCJzdG9yZSIsInN0YXRlIiwiZ2V0U3RhdGUiLCJhdXRoIiwiaXNBdXRob3JpemVkIiwiaWQiLCJzZXR1cFBhZ2UiLCJjIiwiaSIsInNldEludGVydmFsIiwiZ191c2VyX2lkIiwiY2hlY2tVc2VyQXV0aCIsImNsZWFySW50ZXJ2YWwiLCJmb3JFYWNoIiwiYXV0aEJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJwYXJ0aWNpcGF0ZSIsInBhcmFtcyIsInVzZXJpZCIsInJlcXVlc3QiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIml0ZW0iLCJsaW5rIiwiZXh0cmFPcHRpb25zIiwiaGVhZGVycyIsInVuYXV0aE1lcyIsInBvaW50c1BlckRheSIsInNwaW5BbGxvd2VkIiwic3BpbnNTdHJlYWsiLCJwYXJ0aWNpcGF0ZUJ0biIsImNhcmRzQ29udGFpbmVyIiwiY2FyZHMiLCJjYXJkc1dyYXAiLCJtb3ZlUmlnaHRCdXR0b24iLCJtb3ZlTGVmdEJ1dHRvbiIsInRhYnNDb250YWluZXIiLCJpc01vYmlsZSIsImlubmVyV2lkdGgiLCJ0b3RhbENhcmRzIiwiY2FyZFdpZHRoIiwiY2xpZW50V2lkdGgiLCJjYXJkc01hcmdpbiIsInZpc2libGVTbGlkZXMiLCJNYXRoIiwiY2VpbCIsInRvdGFsVGFicyIsInRhYldpZHRoIiwiY3VycmVudFNsaWRlIiwiY2FyZHNQb3NpdGlvbiIsImxlZnRTbGlkZSIsInJpZ2h0U2xpZGUiLCJ1cGRhdGVBY3RpdmVDYXJkIiwiYWN0aXZlSW5kZXgiLCJjYXJkIiwibGVmdFNsaWRlVGFiIiwicmlnaHRTbGlkZVRhYiIsImZpcnN0TGFzdFNsaWRlcyIsInNldENhcmRzUG9zaXRpb24iLCJwb3NpdGlvbiIsInN0eWxlIiwidHJhbnNmb3JtIiwibW92ZVJpZ2h0IiwibWF4UG9zaXRpb24iLCJoaWRlUG9wdXBzIiwibW92ZUxlZnQiLCJzZXRQb3B1cHMiLCJwb3B1cHMiLCJwb3B1cHNCdG5zIiwiYnRuIiwicG9wdXAiLCJqIiwicHJpemVPcGVuQnRucyIsInByaXplQ2xvc2VCdG5zIiwiZ3VpZGVQb3B1cHNXcmFwIiwiZ3VpZGVPcGVuQnRucyIsImd1aWRlQ2xvc2VCdG5zIiwidGFibGVQb3B1cCIsInRhYmxlUG9wdXBDbG9zZSIsInRhYmxlUG9wdXBPcGVuIiwib3ZlcmZsb3ciLCJDT1VOVCIsIlNub3dzdG9ybSIsIm1hc3RoZWFkIiwiY2FudmFzIiwiY3JlYXRlRWxlbWVudCIsImN0eCIsImdldENvbnRleHQiLCJ3aWR0aCIsImhlaWdodCIsImNsaWVudEhlaWdodCIsImFjdGl2ZSIsInNub3dmbGFrZXMiLCJwcm90b3R5cGUiLCJsZWZ0IiwidG9wIiwiYXBwZW5kQ2hpbGQiLCJvblJlc2l6ZSIsImJpbmQiLCJzbm93Zmxha2UiLCJTbm93Zmxha2UiLCJyZXNldCIsInB1c2giLCJyZXF1ZXN0QW5pbUZyYW1lIiwidXBkYXRlIiwiZmlsbFN0eWxlIiwid2FzQWN0aXZlIiwiY2xlYXJSZWN0IiwieSIsInZ5IiwieCIsInZ4IiwiZ2xvYmFsQWxwaGEiLCJvIiwiYmVnaW5QYXRoIiwiYXJjIiwiciIsIlBJIiwiY2xvc2VQYXRoIiwiZmlsbCIsInNub3dzdG9ybSIsInJhbmRvbSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1velJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbGxiYWNrIiwic2V0VGltZW91dCIsInNraWVzIiwic2t5IiwiYmFsbCIsInBhcmVudEVsZW1lbnQiLCJtYXhTbm93Zmxha2VzIiwibWF4U3BlZWQiLCJzdG9ybUNvdW50ZXIiLCJzbm93Zmxha2VzUmVtb3ZlZCIsInJhZGl1cyIsInNwZWVkWCIsInNwZWVkWSIsImFjY2VsZXJhdGlvbiIsIm1vdmluZ1RvQm90dG9tIiwiYmFsbFgiLCJiYWxsWSIsImJhbGxSYWRpdXMiLCJiYWxsU2hha2luZyIsInRhcmdldFNwZWVkIiwic3BlZWREZWNheUZhY3RvciIsIm1heCIsIm1pbiIsImR4IiwiZHkiLCJkaXN0YW5jZSIsInNxcnQiLCJhbmdsZSIsImF0YW4yIiwib3ZlcmxhcCIsImNvcyIsInNpbiIsInNwbGljZSIsImluZGV4T2YiLCJsYXN0QmFsbFNoYWtpbmdTdGF0ZSIsImFuaW1hdGUiLCJiYWxsVHJhbnNmb3JtIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIm9mZnNldFdpZHRoIiwibWF0cml4IiwiRE9NTWF0cml4Iiwib2Zmc2V0TGVmdCIsIm00MSIsIm9mZnNldFRvcCIsIm00MiIsIm1vdmVUb0JvdHRvbSIsImRyYXciLCJzZW5kU2hha2VSZXF1ZXN0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0eXBlIiwiYnRuU2hha2UiLCJiYWxsQm94IiwiYW5pbWF0ZVNoYWtlIiwiYm94IiwicHJpemUiLCJkZWxheSIsIm1zIiwid2luQ2xhc3NlcyIsImluaXRTaGFrZSIsImVycm9yIiwic3RyZWFrQm9udXMiLCJlcnIiLCJoYW5kbGVSZXNpemUiLCJ0b3VjaFN0YXJ0WCIsInRvdWNoRW5kWCIsInRvdWNoU3RhcnRUaW1lIiwiaGFuZGxlVG91Y2hTdGFydCIsImV2ZW50IiwidG91Y2hlcyIsImNsaWVudFgiLCJEYXRlIiwibm93IiwiaGFuZGxlVG91Y2hNb3ZlIiwiaGFuZGxlVG91Y2hFbmQiLCJzd2lwZURpc3RhbmNlIiwic3dpcGVUaW1lIiwiYWJzIiwibG9jYXRpb24iLCJyZWxvYWQiXSwibWFwcGluZ3MiOiI7OzsrQ0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREEsQ0FBQyxZQUFZO0VBQ1QsSUFBTUEsTUFBTSxHQUFHLCtCQUErQjtFQUU5QyxJQUNJQyxVQUFVLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsYUFBYSxDQUFDO0lBQ3JEQyxlQUFlLEdBQUdGLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsV0FBVyxDQUFDO0lBQ3hERSxRQUFRLEdBQUdILFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLFdBQVcsQ0FBQztJQUM5Q0MsUUFBUSxHQUFHTCxRQUFRLENBQUNJLGFBQWEsQ0FBQyxPQUFPLENBQUM7SUFDMUNFLFNBQVMsR0FBR04sUUFBUSxDQUFDSSxhQUFhLENBQUMsUUFBUSxDQUFDO0lBQzVDRyxRQUFRLEdBQUdQLFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLFFBQVEsQ0FBQztFQUUvQyxJQUFNSSxNQUFNLEdBQUdSLFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLFNBQVMsQ0FBQztFQUNoRCxJQUFNSyxNQUFNLEdBQUdULFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLFNBQVMsQ0FBQztFQUVoRCxJQUFJTSxNQUFNLEdBQUcsSUFBSTtFQUVqQixJQUFJRixNQUFNLEVBQUVFLE1BQU0sR0FBRyxJQUFJO0VBQ3pCLElBQUlELE1BQU0sRUFBRUMsTUFBTSxHQUFHLElBQUk7RUFHekIsSUFBSUMsUUFBUSxHQUFHLENBQUMsQ0FBQztFQUNqQixJ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LENBQUNGLGFBQWEsQ0FBQyxHQUFHLEVBQUUsSUFBSUMsU0FBUyxHQUFHLEdBQUcsSUFBSUEsU0FBUyxHQUFHLEVBQUUsRUFBRTtRQUNuRTtRQUNBWixXQUFXLEdBQUcsQ0FBQztRQUNmQyxTQUFTLEdBQUcsQ0FBQztRQUNiO01BQ0o7O01BRUE7TUFDQSxJQUFJVSxhQUFhLEdBQUcsRUFBRSxFQUFFO1FBQ3BCO1FBQ0ExSSxTQUFTLEVBQUU7TUFDZixDQUFDLE1BQU0sSUFBSTBJLGFBQWEsR0FBRyxDQUFDLEVBQUUsRUFBRTtRQUM1QjtRQUNBdkksUUFBUSxFQUFFO01BQ2Q7O01BRUE7TUFDQTRILFdBQVcsR0FBRyxDQUFDO01BQ2ZDLFNBQVMsR0FBRyxDQUFDO0lBQ2pCLENBQUM7SUFHRDVKLGVBQWUsQ0FBQ3ZCLGdCQUFnQixDQUFDLE9BQU8sRUFBRW1ELFNBQVMsQ0FBQztJQUNwRDNCLGNBQWMsQ0FBQ3hCLGdCQUFnQixDQUFDLE9BQU8sRUFBRXNELFFBQVEsQ0FBQztJQUNsRGxDLGNBQWMsQ0FBQ3BCLGdCQUFnQixDQUFDLFlBQVksRUFBRXFMLGdCQUFnQixDQUFDO0lBQy9EakssY0FBYyxDQUFDcEIsZ0JBQWdCLENBQUMsV0FBVyxFQUFFMkwsZUFBZSxDQUFDO0lBQzdEdkssY0FBYyxDQUFDcEIsZ0JBQWdCLENBQUMsVUFBVSxFQUFFNEwsY0FBYyxDQUFDO0lBQzNENU0sTUFBTSxDQUFDZ0IsZ0JBQWdCLENBQUMsbUJBQW1CLEVBQUUsWUFBSztNQUM5Q2dNLFFBQVEsQ0FBQ0MsTUFBTSxFQUFFO0lBQ3JCLENBQUMsQ0FBQztFQUNOLENBQUM7RUFFRGhCLFlBQVksRUFBRTtBQUVsQixDQUFDLEdBQUciLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgYXBpVVJMID0gJ2h0dHBzOi8vZmF2LXByb20uY29tL2FwaV9jc2dvJ1xuXG4gICAgY29uc3RcbiAgICAgICAgdW5hdXRoTXNncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy51bmF1dGgtbXNnJyksXG4gICAgICAgIHBhcnRpY2lwYXRlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tam9pbicpLFxuICAgICAgICBtYWluUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXYtcGFnZScpLFxuICAgICAgICBiYWxsV3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFsbFwiKSxcbiAgICAgICAgZ3VpZGVXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ndWlkZVwiKSxcbiAgICAgICAgZ2FtZVdyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWVzXCIpO1xuXG4gICAgY29uc3QgdWtMZW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VrTGVuZycpO1xuICAgIGNvbnN0IGVuTGVuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbkxlbmcnKTtcblxuICAgIGxldCBsb2NhbGUgPSAndWsnO1xuXG4gICAgaWYgKHVrTGVuZykgbG9jYWxlID0gJ3VrJztcbiAgICBpZiAoZW5MZW5nKSBsb2NhbGUgPSAnZW4nO1xuXG5cbiAgICBsZXQgaTE4bkRhdGEgPSB7fTtcbiAgICBjb25zdCBkZWJ1ZyA9IHRydWU7XG4gICAgLy8gbGV0IHVzZXJJZDtcbiAgICBsZXQgdXNlcklkID0gMTAwMzAwMjY4O1xuXG5cbiAgICBmdW5jdGlvbiBsb2FkVHJhbnNsYXRpb25zKCkge1xuICAgICAgICByZXR1cm4gZmV0Y2goYCR7YXBpVVJMfS90cmFuc2xhdGVzLyR7bG9jYWxlfWApLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgICAgICBpMThuRGF0YSA9IGpzb247XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlKCk7XG5cbiAgICAgICAgICAgICAgICB2YXIgbXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChtdXRhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWxsJyksIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBzdWJ0cmVlOiB0cnVlLFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmFuc2xhdGUoKSB7XG4gICAgICAgIGNvbnN0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdHJhbnNsYXRlXScpXG4gICAgICAgIGlmIChlbGVtcyAmJiBlbGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIGVsZW1zLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAgICAgICAvLyAgICAgY29uc3Qga2V5ID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgICAgICAgICAvLyAgICAgZWxlbS5pbm5lckhUTUwgPSBpMThuRGF0YVtrZXldIHx8ICcqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qICAga2V5OiAgJyArIGtleTtcbiAgICAgICAgICAgIC8vICAgICBlbGVtLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgIC8vIH0pXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRyYW5zbGF0ZSB3b3JraW5nXCIpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxvY2FsZSA9PT0gJ2VuJykge1xuICAgICAgICAgICAgbWFpblBhZ2UuY2xhc3NMaXN0LmFkZCgnZW4nKTtcbiAgICAgICAgfVxuICAgICAgICByZWZyZXNoTG9jYWxpemVkQ2xhc3MoKTtcbiAgICB9XG4gICAgbG9hZFRyYW5zbGF0aW9ucygpXG4gICAgICAgIC50aGVuKGluaXQpO1xuICAgIGZ1bmN0aW9uIHJlZnJlc2hMb2NhbGl6ZWRDbGFzcyhlbGVtZW50LCBiYXNlQ3NzQ2xhc3MpIHtcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBsYW5nIG9mIFsnaHInLCAnZW4nXSkge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGJhc2VDc3NDbGFzcyArIGxhbmcpO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChiYXNlQ3NzQ2xhc3MgKyBsb2NhbGUpO1xuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5zdG9yZSkge1xuICAgICAgICAgICAgdmFyIHN0YXRlID0gd2luZG93LnN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgICAgICB1c2VySWQgPSBzdGF0ZS5hdXRoLmlzQXV0aG9yaXplZCAmJiBzdGF0ZS5hdXRoLmlkIHx8ICcnO1xuICAgICAgICAgICAgc2V0dXBQYWdlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXR1cFBhZ2UoKTtcbiAgICAgICAgICAgIGxldCBjID0gMDtcbiAgICAgICAgICAgIHZhciBpID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChjIDwgNTApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEhd2luZG93LmdfdXNlcl9pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklkID0gd2luZG93LmdfdXNlcl9pZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHVwUGFnZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tVc2VyQXV0aCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNoZWNrVXNlckF1dGgoKTtcblxuICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaCgoYXV0aEJ0biwgaSkgPT4ge1xuICAgICAgICAgICAgYXV0aEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0dXBQYWdlKCkge31cbiAgICBmdW5jdGlvbiBwYXJ0aWNpcGF0ZSgpIHtcbiAgICAgICAgaWYgKCF1c2VySWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHt1c2VyaWQ6IHVzZXJJZH07XG4gICAgICAgIHJlcXVlc3QoJy91c2VyJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXJhbXMpXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuICAgICAgICAgICAgYmFsbFdyYXAuY2xhc3NMaXN0LnJlbW92ZSgnX3NpZ24nKTtcbiAgICAgICAgICAgIHNldHVwUGFnZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCByZXF1ZXN0ID0gZnVuY3Rpb24gKGxpbmssIGV4dHJhT3B0aW9ucykge1xuICAgICAgICByZXR1cm4gZmV0Y2goYXBpVVJMICsgbGluaywge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC4uLihleHRyYU9wdGlvbnMgfHwge30pXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tVc2VyQXV0aCgpIHtcbiAgICAgICAgaWYgKHVzZXJJZCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCB1bmF1dGhNZXMgb2YgdW5hdXRoTXNncykge1xuICAgICAgICAgICAgICAgIHVuYXV0aE1lcy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXF1ZXN0KGAvZmF2dXNlci8ke3VzZXJJZH0/bm9jYWNoZT0xYClcbiAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyByZXMudXNlcmlkID0gdXNlcklkXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy51c2VyaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFsbFdyYXAuY2xhc3NMaXN0LnJlbW92ZSgnX3NpZ24nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGd1aWRlV3JhcC5jbGFzc0xpc3QucmVtb3ZlKCdfc2lnbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZVdyYXAuY2xhc3NMaXN0LnJlbW92ZSgnX3NpZ24nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFubmVyX19idG5cIikuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZ3Jlc3NcIikuY2xhc3NMaXN0LnJlbW92ZShcIl9zaWduXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRlYnVnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnBvaW50c1BlckRheSA9IDMwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zcGluQWxsb3dlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnNwaW5zU3RyZWFrID0gMztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlZnJlc2hVc2VySW5mbyhyZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGlzcGxheVVzZXJTcGlucyhyZXMuc3BpbnMpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhdGVCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYW5uZXJfX2J0blwiKS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgICAgICAgICAgZm9yIChsZXQgcGFydGljaXBhdGVCdG4gb2YgcGFydGljaXBhdGVCdG5zKSB7XG4gICAgICAgICAgICAgICAgcGFydGljaXBhdGVCdG4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChjb25zdCB1bmF1dGhNZXMgb2YgdW5hdXRoTXNncykge1xuICAgICAgICAgICAgICAgIHVuYXV0aE1lcy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDYXJkcyBzbGlkZXJcbiAgICBjb25zdCBjYXJkc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcml6ZV9fbGlzdCcpLFxuICAgICAgICAgIGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByaXplX19saXN0LWl0ZW0nKSxcbiAgICAgICAgICBjYXJkc1dyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpemVfX2xpc3Qtc2Nyb2xsJyksXG4gICAgICAgICAgbW92ZVJpZ2h0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaXplX19zbGlkZXItbW92ZS1yaWdodCcpLFxuICAgICAgICAgIG1vdmVMZWZ0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaXplX19zbGlkZXItbW92ZS1sZWZ0JyksXG4gICAgICAgICAgdGFic0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcml6ZV9fdGFicycpLFxuICAgICAgICAgIGlzTW9iaWxlID0gd2luZG93LmlubmVyV2lkdGggPCA2MDAsXG4gICAgICAgICAgdG90YWxDYXJkcyA9IGNhcmRzLmxlbmd0aCxcbiAgICAgICAgICBjYXJkV2lkdGggPSBjYXJkc1swXS5jbGllbnRXaWR0aCxcbiAgICAgICAgICBjYXJkc01hcmdpbiA9IChjYXJkc1dyYXAuY2xpZW50V2lkdGggLSBjYXJkV2lkdGggKiB0b3RhbENhcmRzKSAvICh0b3RhbENhcmRzIC0gMSksXG4gICAgICAgICAgdmlzaWJsZVNsaWRlcyA9IGlzTW9iaWxlID8gMSA6IE1hdGguY2VpbChjYXJkc0NvbnRhaW5lci5jbGllbnRXaWR0aCAvIChjYXJkV2lkdGggKyBjYXJkc01hcmdpbikpLFxuICAgICAgICAgIHRvdGFsVGFicyA9IE1hdGguY2VpbCh0b3RhbENhcmRzIC8gdmlzaWJsZVNsaWRlcyksXG4gICAgICAgICAgdGFiV2lkdGg9IHZpc2libGVTbGlkZXMgKiAoY2FyZFdpZHRoICsgY2FyZHNNYXJnaW4pXG5cblxuICAgIGxldCBjdXJyZW50U2xpZGUgPSAxO1xuICAgIGxldCBjYXJkc1Bvc2l0aW9uID0gMDtcbiAgICBsZXQgbGVmdFNsaWRlO1xuICAgIGxldCByaWdodFNsaWRlO1xuXG4gICAgY29uc3QgdXBkYXRlQWN0aXZlQ2FyZCA9IChjYXJkcywgYWN0aXZlSW5kZXgpID0+IHtcbiAgICAgICAgY2FyZHMuZm9yRWFjaCgoY2FyZCwgaSkgPT57XG4gICAgICAgICAgICBhY3RpdmVJbmRleCAtIDEgPT09IGkgPyBjYXJkLmNsYXNzTGlzdC5hZGQoXCJfYWN0aXZlXCIpIDogY2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwiX2FjdGl2ZVwiKVxuICAgICAgICB9KVxuICAgIH1cbiAgICB1cGRhdGVBY3RpdmVDYXJkKGNhcmRzLCBjdXJyZW50U2xpZGUpXG5cbiAgICBmdW5jdGlvbiBsZWZ0U2xpZGVUYWIoKXtcbiAgICAgICAgbGVmdFNsaWRlID0gY3VycmVudFNsaWRlXG4gICAgfVxuICAgIGZ1bmN0aW9uIHJpZ2h0U2xpZGVUYWIoKXtcbiAgICAgICAgcmlnaHRTbGlkZSA9IGN1cnJlbnRTbGlkZSArICh2aXNpYmxlU2xpZGVzIC0gMSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmaXJzdExhc3RTbGlkZXMoKXtcbiAgICAgICAgaWYoaXNNb2JpbGUpIHJldHVyblxuICAgICAgICBsZWZ0U2xpZGVUYWIoKVxuICAgICAgICByaWdodFNsaWRlVGFiKClcbiAgICAgICAgY2FyZHMuZm9yRWFjaCgoY2FyZCAsIGkpID0+e1xuICAgICAgICAgICAgaSArIDEgPT09IGxlZnRTbGlkZSA/IGNhcmQuY2xhc3NMaXN0LmFkZChcIl9sZWZ0XCIpIDogY2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwiX2xlZnRcIilcbiAgICAgICAgICAgIGkgKyAxID09PSByaWdodFNsaWRlID8gY2FyZC5jbGFzc0xpc3QuYWRkKFwiX3JpZ2h0XCIpIDogY2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwiX3JpZ2h0XCIpXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGZpcnN0TGFzdFNsaWRlcygpXG5cbiAgICBmdW5jdGlvbiBzZXRDYXJkc1Bvc2l0aW9uIChwb3NpdGlvbikge1xuICAgICAgICBjYXJkc1dyYXAuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoLSR7cG9zaXRpb259cHgpYDtcbiAgICB9O1xuICAgIGNvbnN0IG1vdmVSaWdodCA9ICgpID0+IHtcblxuICAgICAgICBpZiAoY3VycmVudFNsaWRlID49IHRvdGFsQ2FyZHMgLSAodmlzaWJsZVNsaWRlcyAtIDEpICYmIGlzTW9iaWxlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgZmlyc3RMYXN0U2xpZGVzKClcbiAgICAgICAgICAgIGN1cnJlbnRTbGlkZSA9IDE7XG4gICAgICAgICAgICBjYXJkc1Bvc2l0aW9uID0gMDtcbiAgICAgICAgICAgIHJpZ2h0U2xpZGUrK1xuICAgICAgICAgICAgbGVmdFNsaWRlKytcbiAgICAgICAgfWVsc2UgaWYoY3VycmVudFNsaWRlID09PSB0b3RhbENhcmRzKSB7XG4gICAgICAgICAgICBjdXJyZW50U2xpZGUgPSAxO1xuICAgICAgICAgICAgY2FyZHNQb3NpdGlvbiA9IDA7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IG1heFBvc2l0aW9uID0gKHRvdGFsQ2FyZHMgLSB2aXNpYmxlU2xpZGVzKSAqIChjYXJkV2lkdGggKyBjYXJkc01hcmdpbik7XG4gICAgICAgICAgICBpZiAoY2FyZHNQb3NpdGlvbiArIGNhcmRXaWR0aCArIGNhcmRzTWFyZ2luID4gbWF4UG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgICBjYXJkc1Bvc2l0aW9uID0gbWF4UG9zaXRpb247XG4gICAgICAgICAgICAgICAgY3VycmVudFNsaWRlID0gdG90YWxDYXJkcyAtIHZpc2libGVTbGlkZXMgKyAxO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYXJkc1Bvc2l0aW9uICs9IGNhcmRXaWR0aCArIGNhcmRzTWFyZ2luO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRTbGlkZSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNldENhcmRzUG9zaXRpb24oY2FyZHNQb3NpdGlvbik7XG4gICAgICAgIHVwZGF0ZUFjdGl2ZUNhcmQoY2FyZHMsIGN1cnJlbnRTbGlkZSlcbiAgICAgICAgZmlyc3RMYXN0U2xpZGVzKClcbiAgICAgICAgaGlkZVBvcHVwcyhjYXJkcylcbiAgICB9O1xuICAgIGNvbnN0IG1vdmVMZWZ0ID0gKCkgPT4ge1xuICAgICAgICBpZihjdXJyZW50U2xpZGUgPT09IDEgJiYgaXNNb2JpbGUgPT09IGZhbHNlKXtcbiAgICAgICAgICAgIGN1cnJlbnRTbGlkZSA9IHRvdGFsQ2FyZHMgLSAodmlzaWJsZVNsaWRlcyAtIDEpO1xuICAgICAgICAgICAgY2FyZHNQb3NpdGlvbiA9ICgodG90YWxDYXJkcyAtICh2aXNpYmxlU2xpZGVzIC0gMSkpICogKGNhcmRXaWR0aCArIGNhcmRzTWFyZ2luKSkgLShjYXJkV2lkdGggKyBjYXJkc01hcmdpbik7XG4gICAgICAgIH1lbHNlIGlmIChjdXJyZW50U2xpZGUgPT09IDIpIHtcbiAgICAgICAgICAgIGNhcmRzUG9zaXRpb24gPSAwXG4gICAgICAgICAgICBjdXJyZW50U2xpZGUgPSAxXG4gICAgICAgIH1lbHNlIGlmKGN1cnJlbnRTbGlkZSA9PT0gMSAmJiBpc01vYmlsZSA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICBjdXJyZW50U2xpZGUgPSB0b3RhbENhcmRzXG4gICAgICAgICAgICBjYXJkc1Bvc2l0aW9uID0gdG90YWxDYXJkcyAgKiAoY2FyZFdpZHRoICsgY2FyZHNNYXJnaW4pIC0gKGNhcmRXaWR0aCArIGNhcmRzTWFyZ2luKVxuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICBjYXJkc1Bvc2l0aW9uIC09IGNhcmRXaWR0aCArIGNhcmRzTWFyZ2luO1xuICAgICAgICAgICAgY3VycmVudFNsaWRlLS1cbiAgICAgICAgfVxuICAgICAgICBzZXRDYXJkc1Bvc2l0aW9uKGNhcmRzUG9zaXRpb24pO1xuICAgICAgICB1cGRhdGVBY3RpdmVDYXJkKGNhcmRzLCBjdXJyZW50U2xpZGUpXG4gICAgICAgIGZpcnN0TGFzdFNsaWRlcygpXG4gICAgICAgIGhpZGVQb3B1cHMoY2FyZHMpXG4gICAgfTtcblxuICAgIC8vIHBvcHVwcyBsb2dpY1xuXG4gICAgZnVuY3Rpb24gc2V0UG9wdXBzKHBvcHVwcywgcG9wdXBzQnRucykge1xuICAgICAgICBwb3B1cHNCdG5zLmZvckVhY2goKGJ0biwgaSkgPT4ge1xuICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHBvcHVwcy5mb3JFYWNoKChwb3B1cCwgaikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpID09PSBqID8gcG9wdXAuY2xhc3NMaXN0LmFkZChcIl9wb3B1cFwiKSA6IHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoXCJfcG9wdXBcIik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZVBvcHVwcyhwb3B1cHMpe1xuICAgICAgICBwb3B1cHMuZm9yRWFjaChwb3B1cCA9PntcbiAgICAgICAgICAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcIl9wb3B1cFwiKVxuICAgICAgICB9KVxuICAgIH1cbi8vIHBvcHVwc1xuICAgIGNvbnN0IHByaXplT3BlbkJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByaXplX19saXN0LWl0ZW0tYnRuXCIpXG4gICAgY29uc3QgcHJpemVDbG9zZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByaXplX19saXN0LXBvcHVwLWNsb3NlXCIpXG4gICAgY29uc3QgZ3VpZGVQb3B1cHNXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ndWlkZV9faXRlbVwiKVxuICAgIGNvbnN0IGd1aWRlT3BlbkJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmd1aWRlX19pdGVtLWluZm8tYnRuXCIpXG4gICAgY29uc3QgZ3VpZGVDbG9zZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmd1aWRlX19pdGVtLXBvcHVwLWNsb3NlXCIpXG4gICAgY29uc3QgdGFibGVQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFibGVfX3BvcHVwXCIpXG4gICAgY29uc3QgdGFibGVQb3B1cENsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YWJsZV9fcG9wdXAtY2xvc2VcIilcbiAgICBjb25zdCB0YWJsZVBvcHVwT3BlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFibGVfX2luZm9cIilcblxuICAgIHNldFBvcHVwcyhjYXJkcywgcHJpemVPcGVuQnRucyk7XG4gICAgc2V0UG9wdXBzKGd1aWRlUG9wdXBzV3JhcCwgZ3VpZGVPcGVuQnRucyk7XG5cbiAgICBndWlkZUNsb3NlQnRucy5mb3JFYWNoKGJ0biA9PntcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XG4gICAgICAgICAgICBoaWRlUG9wdXBzKGd1aWRlUG9wdXBzV3JhcClcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBwcml6ZUNsb3NlQnRucy5mb3JFYWNoKGJ0biA9PntcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XG4gICAgICAgICAgICBoaWRlUG9wdXBzKGNhcmRzKVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRhYmxlUG9wdXBPcGVuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICB0YWJsZVBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiXG4gICAgfSk7XG5cbiAgICB0YWJsZVBvcHVwQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICB0YWJsZVBvcHVwLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIlxuICAgIH0pO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT57XG4gICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIENPVU5UID0gNDAwO1xuXG4gICAgICAgIGZ1bmN0aW9uIFNub3dzdG9ybShlbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLm1hc3RoZWFkID0gZWxlbWVudDtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgICAgICB0aGlzLndpZHRoID0gdGhpcy5tYXN0aGVhZC5jbGllbnRXaWR0aDtcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5tYXN0aGVhZC5jbGllbnRIZWlnaHQ7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zbm93Zmxha2VzID0gW107XG5cbiAgICAgICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgU25vd3N0b3JtLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUubGVmdCA9IHRoaXMuY2FudmFzLnN0eWxlLnRvcCA9ICcwJztcbiAgICAgICAgICAgIHRoaXMubWFzdGhlYWQuYXBwZW5kQ2hpbGQodGhpcy5jYW52YXMpO1xuXG4gICAgICAgICAgICB0aGlzLm9uUmVzaXplKCk7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpLCBmYWxzZSk7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgQ09VTlQ7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBzbm93Zmxha2UgPSBuZXcgdGhpcy5Tbm93Zmxha2UodGhpcyk7XG4gICAgICAgICAgICAgICAgc25vd2ZsYWtlLnJlc2V0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zbm93Zmxha2VzLnB1c2goc25vd2ZsYWtlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1GcmFtZSh0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBTbm93c3Rvcm0ucHJvdG90eXBlLm9uUmVzaXplID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMubWFzdGhlYWQuY2xpZW50V2lkdGg7XG4gICAgICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMubWFzdGhlYWQuY2xpZW50SGVpZ2h0O1xuICAgICAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB0aGlzLndpZHRoO1xuICAgICAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnI0ZGRic7XG5cbiAgICAgICAgICAgIHZhciB3YXNBY3RpdmUgPSB0aGlzLmFjdGl2ZTtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlID0gdGhpcy53aWR0aCA+IDgwO1xuICAgICAgICAgICAgdGhpcy53aWR0aCA+IDI4MCA/IENPVU5UID0gMTUwIDogbnVsbFxuXG4gICAgICAgICAgICBpZiAoIXdhc0FjdGl2ZSAmJiB0aGlzLmFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltRnJhbWUodGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgU25vd3N0b3JtLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuXG4gICAgICAgICAgICBpZiAoIXRoaXMuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IENPVU5UOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgc25vd2ZsYWtlID0gdGhpcy5zbm93Zmxha2VzW2ldO1xuICAgICAgICAgICAgICAgIHNub3dmbGFrZS55ICs9IHNub3dmbGFrZS52eTtcbiAgICAgICAgICAgICAgICBzbm93Zmxha2UueCArPSBzbm93Zmxha2Uudng7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5nbG9iYWxBbHBoYSA9IHNub3dmbGFrZS5vO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmFyYyhzbm93Zmxha2UueCwgc25vd2ZsYWtlLnksIHNub3dmbGFrZS5yLCAwLCBNYXRoLlBJICogMiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcblxuICAgICAgICAgICAgICAgIGlmIChzbm93Zmxha2UueSA+IHRoaXMuaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIHNub3dmbGFrZS5yZXNldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVxdWVzdEFuaW1GcmFtZSh0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgfTtcblxuICAgICAgICBTbm93c3Rvcm0ucHJvdG90eXBlLlNub3dmbGFrZSA9IGZ1bmN0aW9uIChzbm93c3Rvcm0pIHtcbiAgICAgICAgICAgIHRoaXMuc25vd3N0b3JtID0gc25vd3N0b3JtO1xuICAgICAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIFNub3dzdG9ybS5wcm90b3R5cGUuU25vd2ZsYWtlLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMueCA9IE1hdGgucmFuZG9tKCkgKiB0aGlzLnNub3dzdG9ybS53aWR0aDtcbiAgICAgICAgICAgIHRoaXMueSA9IE1hdGgucmFuZG9tKCkgKiAtdGhpcy5zbm93c3Rvcm0uaGVpZ2h0O1xuICAgICAgICAgICAgdGhpcy52eSA9IDAuMyArIE1hdGgucmFuZG9tKCkgKiAwLjAwMDAxO1xuICAgICAgICAgICAgdGhpcy52eCA9IDAuNiAtIE1hdGgucmFuZG9tKCk7XG4gICAgICAgICAgICB0aGlzLnIgPSAxICsgTWF0aC5yYW5kb20oKSAqIDI7XG4gICAgICAgICAgICB0aGlzLm8gPSAxO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIHNoaW0gbGF5ZXIgd2l0aCBzZXRUaW1lb3V0IGZhbGxiYWNrXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbUZyYW1lID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgICAgICAgICAgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICAgICAgICAgIHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoY2FsbGJhY2ssIDEwMDAgLyA2MCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgfSkoKTtcblxuICAgICAgICAvLyBBcHBseSBTbm93c3Rvcm0gdG8gYWxsIGVsZW1lbnRzIHdpdGggdGhlIGNsYXNzICdza3knXG4gICAgICAgIHZhciBza2llcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5za3knKTtcbiAgICAgICAgc2tpZXMuZm9yRWFjaChmdW5jdGlvbiAoc2t5KSB7XG4gICAgICAgICAgICBuZXcgU25vd3N0b3JtKHNreSk7XG4gICAgICAgIH0pO1xuXG5cblxuICAgICAgICAvLyBiYWxsIHNoYWtlIHNub3dcbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNub3dDYW52YXMnKTtcbiAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIGNvbnN0IGJhbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3BoZXJlJyk7XG5cbiAgICAgICAgY2FudmFzLndpZHRoID0gY2FudmFzLnBhcmVudEVsZW1lbnQuY2xpZW50V2lkdGg7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBjYW52YXMucGFyZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XG5cbiAgICAgICAgbGV0IHNub3dmbGFrZXMgPSBbXTtcbiAgICAgICAgY29uc3QgbWF4U25vd2ZsYWtlcyA9IDEwMDtcbiAgICAgICAgY29uc3QgbWF4U3BlZWQgPSA3OyAvLyDQnNCw0LrRgdC40LzQsNC70YzQvdCwINGI0LLQuNC00LrRltGB0YLRjCDRgdC90ZbQttC40L3QutC4XG4gICAgICAgIGxldCBzdG9ybUNvdW50ZXIgPSAxXG5cblxuICAgICAgICBsZXQgc25vd2ZsYWtlc1JlbW92ZWQgPSAwO1xuXG4gICAgICAgIGNsYXNzIFNub3dmbGFrZSB7XG4gICAgICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnggPSBNYXRoLnJhbmRvbSgpICogY2FudmFzLndpZHRoO1xuICAgICAgICAgICAgICAgIHRoaXMueSA9IE1hdGgucmFuZG9tKCkgKiBjYW52YXMuaGVpZ2h0O1xuICAgICAgICAgICAgICAgIHRoaXMucmFkaXVzID0gTWF0aC5yYW5kb20oKSAqIDMgKyAxO1xuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWRYID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMTA7XG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlZFkgPSBNYXRoLnJhbmRvbSgpICogMS41ICsgMTtcbiAgICAgICAgICAgICAgICB0aGlzLmFjY2VsZXJhdGlvbiA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZpbmdUb0JvdHRvbSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1cGRhdGUoYmFsbFgsIGJhbGxZLCBiYWxsUmFkaXVzLCBiYWxsU2hha2luZykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1vdmluZ1RvQm90dG9tKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldFNwZWVkID0gMC4xOyAvLyDQnNCw0LvQtdC90YzQutCwINGI0LLQuNC00LrRltGB0YLRjCwg0LTQviDRj9C60L7RlyDQv9GA0LDQs9C90LXQvNC+XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNwZWVkRGVjYXlGYWN0b3IgPSAwLjA1OyAvLyDQmtC+0LXRhNGW0YbRltGU0L3RgiDQtNC70Y8g0L/Qu9Cw0LLQvdC+0LPQviDRgdC/0L7QstGW0LvRjNC90LXQvdC90Y9cblxuICAgICAgICAgICAgICAgICAgICAvLyDQn9C70LDQstC90L4g0L3QsNCx0LvQuNC20LDRlNC80L4g0YjQstC40LTQutGW0YHRgtGMINC00L4gdGFyZ2V0U3BlZWRcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGVlZFggPSB0aGlzLnNwZWVkWCAtICh0aGlzLnNwZWVkWCAtIHRhcmdldFNwZWVkKSAqIHNwZWVkRGVjYXlGYWN0b3I7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3BlZWRZID0gdGhpcy5zcGVlZFkgLSAodGhpcy5zcGVlZFkgLSB0YXJnZXRTcGVlZCkgKiBzcGVlZERlY2F5RmFjdG9yO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vINCe0L3QvtCy0LvQtdC90L3RjyDQv9C+0LfQuNGG0ZbRlyDRgdC90ZbQttC40L3QutC4XG4gICAgICAgICAgICAgICAgICAgIHRoaXMueSArPSB0aGlzLnNwZWVkWTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy55ID4gY2FudmFzLmhlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy54ICs9IHRoaXMuc3BlZWRYO1xuICAgICAgICAgICAgICAgIHRoaXMueSArPSB0aGlzLnNwZWVkWTtcblxuICAgICAgICAgICAgICAgIC8vINCe0LHQvNC10LbQtdC90L3RjyDRiNCy0LjQtNC60L7RgdGC0ZZcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVkWCA9IE1hdGgubWF4KC1tYXhTcGVlZCwgTWF0aC5taW4obWF4U3BlZWQsIHRoaXMuc3BlZWRYKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlZFkgPSBNYXRoLm1heCgtbWF4U3BlZWQsIE1hdGgubWluKG1heFNwZWVkLCB0aGlzLnNwZWVkWSkpO1xuXG4gICAgICAgICAgICAgICAgLy8g0JTQvtC00LDQstCw0L3QvdGPINGI0LLQuNC00LrQvtGB0YLRliDRh9C10YDQtdC3IFwi0YLRgNGD0YHRltC90L3Rj1wiINC60YPQu9GWXG4gICAgICAgICAgICAgICAgaWYgKGJhbGxTaGFraW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWNjZWxlcmF0aW9uICs9IDAuMDU7IC8vINCd0LDRgNC+0YnRg9Cy0LDQvdC90Y8g0YjQstC40LTQutC+0YHRgtGWXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY2NlbGVyYXRpb24gKj0gMC45NTsgLy8g0J/QvtGB0YLRg9C/0L7QstC1INC30LzQtdC90YjQtdC90L3Rj1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVkWCArPSB0aGlzLmFjY2VsZXJhdGlvbiAqIChNYXRoLnJhbmRvbSgpIC0gMC41KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVkWSArPSB0aGlzLmFjY2VsZXJhdGlvbiAqIChNYXRoLnJhbmRvbSgpIC0gMC41KTtcblxuICAgICAgICAgICAgICAgIC8vINCf0LXRgNC10LLRltGA0LrQsCDQvdCwINC80LXQttGWIGNhbnZhc1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnkgPiBjYW52YXMuaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMueSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMueCA9IE1hdGgucmFuZG9tKCkgKiBjYW52YXMud2lkdGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnggPiBjYW52YXMud2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54ID0gMDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMueCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54ID0gY2FudmFzLndpZHRoO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vINCS0ZbQtNGB0YLQsNC90Ywg0LTQviDRhtC10L3RgtGA0YMg0LrRg9C70ZZcbiAgICAgICAgICAgICAgICBjb25zdCBkeCA9IHRoaXMueCAtIGJhbGxYO1xuICAgICAgICAgICAgICAgIGNvbnN0IGR5ID0gdGhpcy55IC0gYmFsbFk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuXG4gICAgICAgICAgICAgICAgLy8g0JLRltC00YHQutC+0Log0LLRltC0INC60YPQu9GWXG4gICAgICAgICAgICAgICAgaWYgKGRpc3RhbmNlIDwgYmFsbFJhZGl1cyArIHRoaXMucmFkaXVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFuZ2xlID0gTWF0aC5hdGFuMihkeSwgZHgpOyAvLyDQmtGD0YIg0LfRltGC0LrQvdC10L3QvdGPXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG92ZXJsYXAgPSBiYWxsUmFkaXVzICsgdGhpcy5yYWRpdXMgLSBkaXN0YW5jZTtcblxuICAgICAgICAgICAgICAgICAgICAvLyDQn9C10YDQtdC80ZbRidC10L3QvdGPINGB0L3RltC20LjQvdC60LhcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54ICs9IE1hdGguY29zKGFuZ2xlKSAqIG92ZXJsYXA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMueSArPSBNYXRoLnNpbihhbmdsZSkgKiBvdmVybGFwO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vINCg0LXQstC10YDRgSDRiNCy0LjQtNC60L7RgdGC0ZZcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGVlZFggKj0gLTAuNztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGVlZFkgKj0gLTAuNztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1vdmVUb0JvdHRvbSgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmluZ1RvQm90dG9tID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVtb3ZlKCkge1xuICAgICAgICAgICAgICAgIHNub3dmbGFrZXMuc3BsaWNlKHNub3dmbGFrZXMuaW5kZXhPZih0aGlzKSwgMSk7XG4gICAgICAgICAgICAgICAgc25vd2ZsYWtlc1JlbW92ZWQrKztcbiAgICAgICAgICAgICAgICBpZiAoc3Rvcm1Db3VudGVyID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ldyBTbm93c3Rvcm0oZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zcGhlcmVfX2JvZHlcIikpO1xuICAgICAgICAgICAgICAgICAgICBzdG9ybUNvdW50ZXIrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRyYXcoKSB7XG4gICAgICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIGN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCAwLCBNYXRoLlBJICogMik7XG4gICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICd3aGl0ZSc7XG4gICAgICAgICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuLy8g0KHQv9Cw0LLQvdC40LzQviDQvdC+0LLRliDRgdC90ZbQttC40L3QutC4INC/0YDQuCDQt9C80ZbQvdGWINGB0YLQsNC90YMg0LrRg9C70ZZcbiAgICAgICAgbGV0IGxhc3RCYWxsU2hha2luZ1N0YXRlID0gZmFsc2U7IC8vINCX0LzRltC90L3QsCDQtNC70Y8g0LLRltC00YHRgtC10LbQtdC90L3RjyDRgdGC0LDQvdGDINC60YPQu9GWXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXhTbm93Zmxha2VzOyBpKyspIHtcbiAgICAgICAgICAgIHNub3dmbGFrZXMucHVzaChuZXcgU25vd2ZsYWtlKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgICAgICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcblxuICAgICAgICAgICAgY29uc3QgYmFsbFRyYW5zZm9ybSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGJhbGwpLnRyYW5zZm9ybTtcbiAgICAgICAgICAgIGxldCBiYWxsWCA9IGNhbnZhcy53aWR0aCAvIDI7XG4gICAgICAgICAgICBsZXQgYmFsbFkgPSBjYW52YXMuaGVpZ2h0IC8gMjtcbiAgICAgICAgICAgIGNvbnN0IGJhbGxSYWRpdXMgPSBiYWxsLm9mZnNldFdpZHRoIC8gMjtcbiAgICAgICAgICAgIGNvbnN0IGJhbGxTaGFraW5nID0gYmFsbFRyYW5zZm9ybSAhPT0gJ25vbmUnO1xuXG4gICAgICAgICAgICBpZiAoYmFsbFRyYW5zZm9ybSAhPT0gJ25vbmUnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWF0cml4ID0gbmV3IERPTU1hdHJpeChiYWxsVHJhbnNmb3JtKTtcbiAgICAgICAgICAgICAgICBiYWxsWCA9IGJhbGwub2Zmc2V0TGVmdCArIG1hdHJpeC5tNDEgKyBiYWxsUmFkaXVzO1xuICAgICAgICAgICAgICAgIGJhbGxZID0gYmFsbC5vZmZzZXRUb3AgKyBtYXRyaXgubTQyICsgYmFsbFJhZGl1cztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8g0K/QutGJ0L4g0YHRgtCw0L0g0LrRg9C70ZYg0LfQvNGW0L3QuNCy0YHRjyDQvdCwIFwi0YDRg9GFXCIsINC/0LXRgNC10LfQsNC/0YPRgdC60LDRlNC80L4g0YHQvdGW0LbQuNC90LrQuFxuICAgICAgICAgICAgaWYgKGJhbGxTaGFraW5nICYmICFsYXN0QmFsbFNoYWtpbmdTdGF0ZSkge1xuICAgICAgICAgICAgICAgIC8vINCe0YfQuNGJ0LDRlNC80L4g0LzQsNGB0LjQsiDRgdC90ZbQttC40L3QvtC6XG4gICAgICAgICAgICAgICAgc25vd2ZsYWtlcyA9IFtdO1xuICAgICAgICAgICAgICAgIHNub3dmbGFrZXNSZW1vdmVkID0gMDtcbiAgICAgICAgICAgICAgICAvLyDQodC/0LDQstC90LjQvNC+INC90L7QstGWINGB0L3RltC20LjQvdC60LhcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1heFNub3dmbGFrZXM7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBzbm93Zmxha2VzLnB1c2gobmV3IFNub3dmbGFrZSgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxhc3RCYWxsU2hha2luZ1N0YXRlID0gYmFsbFNoYWtpbmc7XG5cbiAgICAgICAgICAgIHNub3dmbGFrZXMuZm9yRWFjaChzbm93Zmxha2UgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghYmFsbFNoYWtpbmcpIHNub3dmbGFrZS5tb3ZlVG9Cb3R0b20oKTtcbiAgICAgICAgICAgICAgICBzbm93Zmxha2UudXBkYXRlKGJhbGxYLCBiYWxsWSwgYmFsbFJhZGl1cywgYmFsbFNoYWtpbmcpO1xuICAgICAgICAgICAgICAgIHNub3dmbGFrZS5kcmF3KCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgYW5pbWF0ZSgpO1xuXG4gICAgfSkoKTtcbn0pXG5cbi8vIHNub3dmYWxsIGFuaW1hdGlvblxuXG5cbiAgICBsZXQgaSA9IDE7XG4gICAgZnVuY3Rpb24gc2VuZFNoYWtlUmVxdWVzdCgpIHtcbiAgICAgICAgaWYgKCF1c2VySWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkZWJ1Zykge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgLy8gbnVtYmVyOiBpKyssXG4gICAgICAgICAgICAgICAgdHlwZTogJ3Rlc3QnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHt1c2VyaWQ6IHVzZXJJZH07XG4gICAgICAgIHJldHVybiByZXF1ZXN0KCcvc3BpbicsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGFyYW1zKVxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGNvbnN0IGJ0blNoYWtlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9ncmVzc19fc2hha2VcIilcbiAgICBjb25zdCBiYWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zcGhlcmVcIilcbiAgICBjb25zdCBiYWxsQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zcGhlcmVfX2JveFwiKVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gYW5pbWF0ZVNoYWtlKGJhbGwsIGJveCwgYnRuLCBwcml6ZSkge1xuICAgICAgICBjb25zdCBkZWxheSA9IChtcykgPT4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSlcblxuICAgICAgICBidG4uY2xhc3NMaXN0LmFkZChcIl9kaXNhYmxlZFwiKTtcbiAgICAgICAgYmFsbC5jbGFzc0xpc3QuYWRkKFwiX3NoYWtlXCIpO1xuICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcIl9zaGFrZS1yZXZlcnNlXCIpO1xuXG4gICAgICAgIGF3YWl0IGRlbGF5KDIwMDApO1xuXG4gICAgICAgIGJhbGwuY2xhc3NMaXN0LnJlbW92ZShcIl9zaGFrZVwiKTtcbiAgICAgICAgYmFsbC5jbGFzc0xpc3QuYWRkKFwiX2JlZm9yZS1oaWRlXCIpO1xuICAgICAgICBib3guY2xhc3NMaXN0LnJlbW92ZShcIl9zaGFrZS1yZXZlcnNlXCIpO1xuICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcIl9ib3gtb3BhY2l0eVwiKTtcblxuICAgICAgICBhd2FpdCBkZWxheSgyMDApO1xuXG4gICAgICAgIGJhbGwuY2xhc3NMaXN0LmFkZChgJHtwcml6ZX1gKTtcbiAgICB9XG5cbiAgICAvLyDQmtC+0LbQtdC9INC60LvQsNGBINCy0ZbQtNC/0L7QstGW0LTQsNGUINCy0LjQs9GA0LDQvdC+0LzRgyDQv9GA0LjQt9GDOlxuICAgIC8vIFwiX2lwaG9uZVwiIC0g0LLQuNCz0YDQsNC90L4gaVBob25lXG4gICAgLy8gXCJfdHZcIiAtINCy0LjQs9GA0LDQvdC+INGC0LXQu9C10LLRltC30L7RgFxuICAgIC8vIFwiX2pibFwiIC0g0LLQuNCz0YDQsNC90L4gSkJMLdC60L7Qu9C+0L3QutGDXG4gICAgLy8gXCJfbWVnb2dvXCIgLSDQstC40LPRgNCw0L3QviDQv9GW0LTQv9C40YHQutGDIE1lZ29nb1xuICAgIC8vIFwiX3Jlc3BpblwiIC0g0LTQvtC00LDRgtC60L7QstC1INC+0LHQtdGA0YLQsNC90L3Rj1xuICAgIC8vIFwiX25vdGhpbmdcIiAtINC90ZbRh9C+0LPQviDQvdC1INCy0LjQs9GA0LDQvdC+XG4gICAgLy8gXCJfcG9pbnRzNTBcIiAtINCy0LjQs9GA0LDQvdC+IDUwINCx0L7QvdGD0YHQvdC40YUg0LHQsNC70ZbQslxuICAgIC8vIFwiX2ZzMTBcIiAtINCy0LjQs9GA0LDQvdC+IDEwINGE0YDRltGB0L/RltC90ZbQslxuICAgIC8vIFwiX2ZzMjVcIiAtINCy0LjQs9GA0LDQvdC+IDI1INGE0YDRltGB0L/RltC90ZbQslxuICAgIC8vIFwiX2ZzNTBcIiAtINCy0LjQs9GA0LDQvdC+IDUwINGE0YDRltGB0L/RltC90ZbQslxuICAgIC8vIFwiX3NhdmVCZXQxMDBcIiAtINCy0LjQs9GA0LDQvdC+INGB0YLRgNCw0YXQvtCy0LrRgyDQvdCwIDEwMCDRgdGC0LDQstC+0LpcbiAgICAvLyBcIl9zYXZlQmV0MTUwXCIgLSDQstC40LPRgNCw0L3QviDRgdGC0YDQsNGF0L7QstC60YMg0L3QsCAxNTAg0YHRgtCw0LLQvtC6XG4gICAgLy8gXCJfc2F2ZUJldDIwMFwiIC0g0LLQuNCz0YDQsNC90L4g0YHRgtGA0LDRhdC+0LLQutGDINC90LAgMjAwINGB0YLQsNCy0L7QulxuICAgIC8vINGE0YPQvdC60YbRltGPIGluaXRTaGFrZSDQv9GA0L7QutC40LTRg9GUINC60LvQsNGB0Lgg0LLRltC00L/QvtCy0ZbQtNC90ZYg0L/RgNC40LfQsNC8INC90LAg0LHQu9C+0LogLnNwaGVyZSDQtNC70Y8g0LLRltC00L7QsdGA0LDQttC10L3QvdGPINC/0YDQuNC30YNcbiAgICBjb25zdCB3aW5DbGFzc2VzID0gW1xuICAgICAgICBcIl9pcGhvbmVcIiwgXCJfdHZcIiwgXCJfamJsXCIsIFwiX21lZ29nb1wiLCBcIl9yZXNwaW5cIiwgXCJfbm90aGluZ1wiLFxuICAgICAgICBcIl9wb2ludHM1MFwiLCBcIl9mczEwXCIsIFwiX2ZzMjVcIiwgXCJfZnM1MFwiLCBcIl9zYXZlQmV0MTAwXCIsIFwiX3NhdmVCZXQxNTBcIiwgXCJfc2F2ZUJldDIwMFwiXG4gICAgXTtcbiAgICBmdW5jdGlvbiBpbml0U2hha2UoYmFsbCwgYnRuLCBib3gpIHtcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgICAgIHNlbmRTaGFrZVJlcXVlc3QoKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcyB8fCAhIXJlcy5lcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAvLyBidG5TaGFrZS5jbGFzc0xpc3QuYWRkKCdwdWxzZS1idG4nKTtcbiAgICAgICAgICAgICAgICAgICAgYnRuU2hha2UuY2xhc3NMaXN0LnJlbW92ZSgnX2Rpc2FibGVkJylcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBjb25zdCBwcml6ZSA9IHJlcy5udW1iZXI7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJpemUgPSB3aW5DbGFzc2VzWzEyXTtcbiAgICAgICAgICAgICAgICBjb25zdCBzdHJlYWtCb251cyA9IHJlcy5zdHJlYWtCb251cyB8fCBkZWJ1ZztcbiAgICAgICAgICAgICAgICBhbmltYXRlU2hha2UoYmFsbCwgYm94LCBidG4sIHByaXplKS5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihcImFuaW0gZXJyb3I6XCIsIGVycikpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgaW5pdFNoYWtlKGJhbGwsIGJ0blNoYWtlLCBiYWxsQm94KVxuXG4gICAgY29uc3QgaGFuZGxlUmVzaXplID0gKCkgPT57XG4gICAgICAgIGxldCB0b3VjaFN0YXJ0WCA9IDA7XG4gICAgICAgIGxldCB0b3VjaEVuZFggPSAwO1xuICAgICAgICBsZXQgdG91Y2hTdGFydFRpbWUgPSAwOyAvLyDQp9Cw0YEg0L/QvtGH0LDRgtC60YMg0LTQvtGC0LjQutGDXG5cbiAgICAgICAgY29uc3QgaGFuZGxlVG91Y2hTdGFydCA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgdG91Y2hTdGFydFggPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICAgICAgICB0b3VjaFN0YXJ0VGltZSA9IERhdGUubm93KCk7IC8vINCX0LDQv9C40YHRg9GU0LzQviDRh9Cw0YEg0L/QvtGH0LDRgtC60YMg0LTQvtGC0LjQutGDXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgaGFuZGxlVG91Y2hNb3ZlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0b3VjaEVuZFggPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgaGFuZGxlVG91Y2hFbmQgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzd2lwZURpc3RhbmNlID0gdG91Y2hTdGFydFggLSB0b3VjaEVuZFg7XG4gICAgICAgICAgICBjb25zdCBzd2lwZVRpbWUgPSBEYXRlLm5vdygpIC0gdG91Y2hTdGFydFRpbWU7IC8vINCi0YDQuNCy0LDQu9GW0YHRgtGMINGB0LLQsNC50L/Rg1xuXG4gICAgICAgICAgICAvLyDQpNGW0LvRjNGC0YDQsNGG0ZbRjyDQutC70ZbQutGW0LIg0YLQsCDQvdC10LrQvtGA0LXQutGC0L3QuNGFINGB0LLQsNC50L/RltCyXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoc3dpcGVEaXN0YW5jZSkgPCA1MCB8fCBzd2lwZVRpbWUgPiA1MDAgJiYgc3dpcGVUaW1lID4gNTApIHtcbiAgICAgICAgICAgICAgICAvLyDQr9C60YnQviDRgdCy0LDQudC/INC30LDQvdCw0LTRgtC+INC60L7RgNC+0YLQutC40Lkg0LDQsdC+INC90LDQtNGC0L4g0L/QvtCy0ZbQu9GM0L3QuNC5LCDQvdC1INCy0LLQsNC20LDRlNC80L4g0LnQvtCz0L4g0YHQv9GA0LDQstC20L3RltC8XG4gICAgICAgICAgICAgICAgdG91Y2hTdGFydFggPSAwO1xuICAgICAgICAgICAgICAgIHRvdWNoRW5kWCA9IDA7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNGP0ZTQvNC+INC90LDQv9GA0Y/QvNC+0Log0YHQstCw0LnQv9GDXG4gICAgICAgICAgICBpZiAoc3dpcGVEaXN0YW5jZSA+IDUwKSB7XG4gICAgICAgICAgICAgICAgLy8g0KHQstCw0LnQvyDQu9GW0LLQvtGA0YPRh1xuICAgICAgICAgICAgICAgIG1vdmVSaWdodCgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzd2lwZURpc3RhbmNlIDwgLTUwKSB7XG4gICAgICAgICAgICAgICAgLy8g0KHQstCw0LnQvyDQv9GA0LDQstC+0YDRg9GHXG4gICAgICAgICAgICAgICAgbW92ZUxlZnQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8g0KHQutC40LTQsNGU0LzQviDQt9C90LDRh9C10L3QvdGPXG4gICAgICAgICAgICB0b3VjaFN0YXJ0WCA9IDA7XG4gICAgICAgICAgICB0b3VjaEVuZFggPSAwO1xuICAgICAgICB9O1xuXG5cbiAgICAgICAgbW92ZVJpZ2h0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbW92ZVJpZ2h0KTtcbiAgICAgICAgbW92ZUxlZnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtb3ZlTGVmdCk7XG4gICAgICAgIGNhcmRzQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBoYW5kbGVUb3VjaFN0YXJ0KTtcbiAgICAgICAgY2FyZHNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgaGFuZGxlVG91Y2hNb3ZlKTtcbiAgICAgICAgY2FyZHNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBoYW5kbGVUb3VjaEVuZCk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwib3JpZW50YXRpb25jaGFuZ2VcIiwgKCkgPT57XG4gICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGhhbmRsZVJlc2l6ZSgpXG5cbn0pKCk7Il19
