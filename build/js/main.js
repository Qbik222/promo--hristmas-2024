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
    console.log(window.g_user_id);
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
    console.log(spins);
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwidW5hdXRoTXNncyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInBhcnRpY2lwYXRlQnRucyIsIm1haW5QYWdlIiwicXVlcnlTZWxlY3RvciIsImJhbGxXcmFwIiwiZ3VpZGVXcmFwIiwiZ2FtZVdyYXAiLCJ1a0xlbmciLCJlbkxlbmciLCJsb2NhbGUiLCJpMThuRGF0YSIsImRlYnVnIiwidXNlcklkIiwibG9hZFRyYW5zbGF0aW9ucyIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJ0cmFuc2xhdGUiLCJtdXRhdGlvbk9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9ucyIsIm9ic2VydmUiLCJnZXRFbGVtZW50QnlJZCIsImNoaWxkTGlzdCIsInN1YnRyZWUiLCJlbGVtcyIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJjbGFzc0xpc3QiLCJhZGQiLCJyZWZyZXNoTG9jYWxpemVkQ2xhc3MiLCJpbml0IiwiZWxlbWVudCIsImJhc2VDc3NDbGFzcyIsImxhbmciLCJyZW1vdmUiLCJ3aW5kb3ciLCJnX3VzZXJfaWQiLCJzdG9yZSIsInN0YXRlIiwiZ2V0U3RhdGUiLCJhdXRoIiwiaXNBdXRob3JpemVkIiwiaWQiLCJzZXR1cFBhZ2UiLCJjIiwiaSIsInNldEludGVydmFsIiwiY2hlY2tVc2VyQXV0aCIsImNsZWFySW50ZXJ2YWwiLCJmb3JFYWNoIiwiYXV0aEJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJwYXJ0aWNpcGF0ZSIsInBhcmFtcyIsInVzZXJpZCIsInJlcXVlc3QiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIml0ZW0iLCJsaW5rIiwiZXh0cmFPcHRpb25zIiwiaGVhZGVycyIsInVuYXV0aE1lcyIsInBvaW50c1BlckRheSIsInNwaW5BbGxvd2VkIiwic3BpbnNTdHJlYWsiLCJkaXNwbGF5VXNlclNwaW5zIiwic3BpbnMiLCJwYXJ0aWNpcGF0ZUJ0biIsInRyYW5zbGF0ZUtleSIsImtleSIsInNwaW5JdGVtIiwibm9TcGluSXRlbSIsInNwaW5zQ29udGFpbmVyIiwiaW5uZXJIVE1MIiwic3BpbiIsInNwaW5EYXRlIiwiRGF0ZSIsImRhdGUiLCJmb3JtYXR0ZWREYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwic3Bpbk5hbWUiLCJuYW1lIiwic3BpbkVsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJjYXJkc0NvbnRhaW5lciIsImNhcmRzIiwiY2FyZHNXcmFwIiwibW92ZVJpZ2h0QnV0dG9uIiwibW92ZUxlZnRCdXR0b24iLCJ0YWJzQ29udGFpbmVyIiwiaXNNb2JpbGUiLCJpbm5lcldpZHRoIiwidG90YWxDYXJkcyIsImNhcmRXaWR0aCIsImNsaWVudFdpZHRoIiwiY2FyZHNNYXJnaW4iLCJ2aXNpYmxlU2xpZGVzIiwiTWF0aCIsImNlaWwiLCJ0b3RhbFRhYnMiLCJ0YWJXaWR0aCIsImN1cnJlbnRTbGlkZSIsImNhcmRzUG9zaXRpb24iLCJsZWZ0U2xpZGUiLCJyaWdodFNsaWRlIiwidXBkYXRlQWN0aXZlQ2FyZCIsImFjdGl2ZUluZGV4IiwiY2FyZCIsImxlZnRTbGlkZVRhYiIsInJpZ2h0U2xpZGVUYWIiLCJmaXJzdExhc3RTbGlkZXMiLCJzZXRDYXJkc1Bvc2l0aW9uIiwicG9zaXRpb24iLCJzdHlsZSIsInRyYW5zZm9ybSIsIm1vdmVSaWdodCIsIm1heFBvc2l0aW9uIiwiaGlkZVBvcHVwcyIsIm1vdmVMZWZ0Iiwic2V0UG9wdXBzIiwicG9wdXBzIiwicG9wdXBzQnRucyIsImJ0biIsInBvcHVwIiwiaiIsInByaXplT3BlbkJ0bnMiLCJwcml6ZUNsb3NlQnRucyIsImd1aWRlUG9wdXBzV3JhcCIsImd1aWRlT3BlbkJ0bnMiLCJndWlkZUNsb3NlQnRucyIsInRhYmxlUG9wdXAiLCJ0YWJsZVBvcHVwQ2xvc2UiLCJ0YWJsZVBvcHVwT3BlbiIsIm92ZXJmbG93IiwiQ09VTlQiLCJTbm93c3Rvcm0iLCJtYXN0aGVhZCIsImNhbnZhcyIsImN0eCIsImdldENvbnRleHQiLCJ3aWR0aCIsImhlaWdodCIsImNsaWVudEhlaWdodCIsImFjdGl2ZSIsInNub3dmbGFrZXMiLCJwcm90b3R5cGUiLCJsZWZ0IiwidG9wIiwib25SZXNpemUiLCJiaW5kIiwic25vd2ZsYWtlIiwiU25vd2ZsYWtlIiwicmVzZXQiLCJwdXNoIiwicmVxdWVzdEFuaW1GcmFtZSIsInVwZGF0ZSIsImZpbGxTdHlsZSIsIndhc0FjdGl2ZSIsImNsZWFyUmVjdCIsInkiLCJ2eSIsIngiLCJ2eCIsImdsb2JhbEFscGhhIiwibyIsImJlZ2luUGF0aCIsImFyYyIsInIiLCJQSSIsImNsb3NlUGF0aCIsImZpbGwiLCJzbm93c3Rvcm0iLCJyYW5kb20iLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ3ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjYWxsYmFjayIsInNldFRpbWVvdXQiLCJza2llcyIsInNreSIsImJhbGwiLCJwYXJlbnRFbGVtZW50IiwibWF4U25vd2ZsYWtlcyIsIm1heFNwZWVkIiwic3Rvcm1Db3VudGVyIiwic25vd2ZsYWtlc1JlbW92ZWQiLCJyYWRpdXMiLCJzcGVlZFgiLCJzcGVlZFkiLCJhY2NlbGVyYXRpb24iLCJtb3ZpbmdUb0JvdHRvbSIsImJhbGxYIiwiYmFsbFkiLCJiYWxsUmFkaXVzIiwiYmFsbFNoYWtpbmciLCJ0YXJnZXRTcGVlZCIsInNwZWVkRGVjYXlGYWN0b3IiLCJtYXgiLCJtaW4iLCJkeCIsImR5IiwiZGlzdGFuY2UiLCJzcXJ0IiwiYW5nbGUiLCJhdGFuMiIsIm92ZXJsYXAiLCJjb3MiLCJzaW4iLCJzcGxpY2UiLCJpbmRleE9mIiwibGFzdEJhbGxTaGFraW5nU3RhdGUiLCJhbmltYXRlIiwiYmFsbFRyYW5zZm9ybSIsImdldENvbXB1dGVkU3R5bGUiLCJvZmZzZXRXaWR0aCIsIm1hdHJpeCIsIkRPTU1hdHJpeCIsIm9mZnNldExlZnQiLCJtNDEiLCJvZmZzZXRUb3AiLCJtNDIiLCJtb3ZlVG9Cb3R0b20iLCJkcmF3Iiwic2VuZFNoYWtlUmVxdWVzdCIsIlByb21pc2UiLCJyZXNvbHZlIiwidHlwZSIsImJ0blNoYWtlIiwiYmFsbEJveCIsImFuaW1hdGVTaGFrZSIsImJveCIsInByaXplIiwiZGVsYXkiLCJtcyIsIndpbkNsYXNzZXMiLCJpbml0U2hha2UiLCJlcnJvciIsInN0cmVha0JvbnVzIiwiZXJyIiwiaGFuZGxlUmVzaXplIiwidG91Y2hTdGFydFgiLCJ0b3VjaEVuZFgiLCJ0b3VjaFN0YXJ0VGltZSIsImhhbmRsZVRvdWNoU3RhcnQiLCJldmVudCIsInRvdWNoZXMiLCJjbGllbnRYIiwibm93IiwiaGFuZGxlVG91Y2hNb3ZlIiwiaGFuZGxlVG91Y2hFbmQiLCJzd2lwZURpc3RhbmNlIiwic3dpcGVUaW1lIiwiYWJzIiwibG9jYXRpb24iLCJyZWxvYWQiXSwibWFwcGluZ3MiOiI7OzsrQ0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREEsQ0FBQyxZQUFZO0VBQ1QsSUFBTUEsTUFBTSxHQUFHLCtCQUErQjtFQUU5QyxJQUNJQyxVQUFVLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsYUFBYSxDQUFDO0lBQ3JEQyxlQUFlLEdBQUdGLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsV0FBVyxDQUFDO0lBQ3hERSxRQUFRLEdBQUdILFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLFdBQVcsQ0FBQztJQUM5Q0MsUUFBUSxHQUFHTCxRQUFRLENBQUNJLGFBQWEsQ0FBQyxPQUFPLENBQUM7SUFDMUNFLFNBQVMsR0FBR04sUUFBUSxDQUFDSSxhQUFhLENBQUMsUUFBUSxDQUFDO0lBQzVDRyxRQUFRLEdBQUdQLFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLFFBQVEsQ0FBQztFQUUvQyxJQUFNSSxNQUFNLEdBQUdSLFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLFNBQVMsQ0FBQztF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QztNQUNmQyxTQUFTLEdBQUcsQ0FBQztJQUNqQixDQUFDO0lBR0QxSixlQUFlLENBQUMxQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUVzRSxTQUFTLENBQUM7SUFDcEQzQixjQUFjLENBQUMzQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUV5RSxRQUFRLENBQUM7SUFDbERsQyxjQUFjLENBQUN2QyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUVzTSxnQkFBZ0IsQ0FBQztJQUMvRC9KLGNBQWMsQ0FBQ3ZDLGdCQUFnQixDQUFDLFdBQVcsRUFBRTJNLGVBQWUsQ0FBQztJQUM3RHBLLGNBQWMsQ0FBQ3ZDLGdCQUFnQixDQUFDLFVBQVUsRUFBRTRNLGNBQWMsQ0FBQztJQUMzRDVOLE1BQU0sQ0FBQ2dCLGdCQUFnQixDQUFDLG1CQUFtQixFQUFFLFlBQUs7TUFDOUNnTixRQUFRLENBQUNDLE1BQU0sRUFBRTtJQUNyQixDQUFDLENBQUM7RUFDTixDQUFDO0VBRURmLFlBQVksRUFBRTtBQUVsQixDQUFDLEdBQUciLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgYXBpVVJMID0gJ2h0dHBzOi8vZmF2LXByb20uY29tL2FwaV9jc2dvJ1xuXG4gICAgY29uc3RcbiAgICAgICAgdW5hdXRoTXNncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy51bmF1dGgtbXNnJyksXG4gICAgICAgIHBhcnRpY2lwYXRlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tam9pbicpLFxuICAgICAgICBtYWluUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXYtcGFnZScpLFxuICAgICAgICBiYWxsV3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFsbFwiKSxcbiAgICAgICAgZ3VpZGVXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ndWlkZVwiKSxcbiAgICAgICAgZ2FtZVdyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWVzXCIpO1xuXG4gICAgY29uc3QgdWtMZW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VrTGVuZycpO1xuICAgIGNvbnN0IGVuTGVuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbkxlbmcnKTtcblxuICAgIGxldCBsb2NhbGUgPSAndWsnO1xuXG4gICAgaWYgKHVrTGVuZykgbG9jYWxlID0gJ3VrJztcbiAgICBpZiAoZW5MZW5nKSBsb2NhbGUgPSAnZW4nO1xuXG5cbiAgICBsZXQgaTE4bkRhdGEgPSB7fTtcbiAgICBjb25zdCBkZWJ1ZyA9IHRydWU7XG4gICAgLy8gbGV0IHVzZXJJZDtcbiAgICBsZXQgdXNlcklkID0gMTAxMjM0ODYxO1xuICAgIC8vIGxldCB1c2VySWQgPSA5OTk5O1xuXG5cbiAgICBmdW5jdGlvbiBsb2FkVHJhbnNsYXRpb25zKCkge1xuICAgICAgICByZXR1cm4gZmV0Y2goYCR7YXBpVVJMfS90cmFuc2xhdGVzLyR7bG9jYWxlfWApLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgICAgICBpMThuRGF0YSA9IGpzb247XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlKCk7XG5cbiAgICAgICAgICAgICAgICB2YXIgbXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChtdXRhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWxsJyksIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBzdWJ0cmVlOiB0cnVlLFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmFuc2xhdGUoKSB7XG4gICAgICAgIGNvbnN0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdHJhbnNsYXRlXScpXG4gICAgICAgIGlmIChlbGVtcyAmJiBlbGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIGVsZW1zLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAgICAgICAvLyAgICAgY29uc3Qga2V5ID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgICAgICAgICAvLyAgICAgZWxlbS5pbm5lckhUTUwgPSBpMThuRGF0YVtrZXldIHx8ICcqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qICAga2V5OiAgJyArIGtleTtcbiAgICAgICAgICAgIC8vICAgICBlbGVtLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgIC8vIH0pXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRyYW5zbGF0ZSB3b3JraW5nXCIpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxvY2FsZSA9PT0gJ2VuJykge1xuICAgICAgICAgICAgbWFpblBhZ2UuY2xhc3NMaXN0LmFkZCgnZW4nKTtcbiAgICAgICAgfVxuICAgICAgICByZWZyZXNoTG9jYWxpemVkQ2xhc3MoKTtcbiAgICB9XG4gICAgbG9hZFRyYW5zbGF0aW9ucygpXG4gICAgICAgIC50aGVuKGluaXQpO1xuICAgIGZ1bmN0aW9uIHJlZnJlc2hMb2NhbGl6ZWRDbGFzcyhlbGVtZW50LCBiYXNlQ3NzQ2xhc3MpIHtcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBsYW5nIG9mIFsnaHInLCAnZW4nXSkge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGJhc2VDc3NDbGFzcyArIGxhbmcpO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChiYXNlQ3NzQ2xhc3MgKyBsb2NhbGUpO1xuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgY29uc29sZS5sb2cod2luZG93LmdfdXNlcl9pZClcbiAgICAgICAgaWYgKHdpbmRvdy5zdG9yZSkge1xuICAgICAgICAgICAgdmFyIHN0YXRlID0gd2luZG93LnN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgICAgICB1c2VySWQgPSBzdGF0ZS5hdXRoLmlzQXV0aG9yaXplZCAmJiBzdGF0ZS5hdXRoLmlkIHx8ICcnO1xuICAgICAgICAgICAgc2V0dXBQYWdlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXR1cFBhZ2UoKTtcbiAgICAgICAgICAgIGxldCBjID0gMDtcbiAgICAgICAgICAgIHZhciBpID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChjIDwgNTApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEhd2luZG93LmdfdXNlcl9pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklkID0gd2luZG93LmdfdXNlcl9pZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHVwUGFnZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tVc2VyQXV0aCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNoZWNrVXNlckF1dGgoKTtcblxuICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaCgoYXV0aEJ0biwgaSkgPT4ge1xuICAgICAgICAgICAgYXV0aEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0dXBQYWdlKCkge31cbiAgICBmdW5jdGlvbiBwYXJ0aWNpcGF0ZSgpIHtcbiAgICAgICAgaWYgKCF1c2VySWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHt1c2VyaWQ6IHVzZXJJZH07XG4gICAgICAgIHJlcXVlc3QoJy91c2VyJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXJhbXMpXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuICAgICAgICAgICAgYmFsbFdyYXAuY2xhc3NMaXN0LnJlbW92ZSgnX3NpZ24nKTtcbiAgICAgICAgICAgIHNldHVwUGFnZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCByZXF1ZXN0ID0gZnVuY3Rpb24gKGxpbmssIGV4dHJhT3B0aW9ucykge1xuICAgICAgICByZXR1cm4gZmV0Y2goYXBpVVJMICsgbGluaywge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC4uLihleHRyYU9wdGlvbnMgfHwge30pXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tVc2VyQXV0aCgpIHtcbiAgICAgICAgaWYgKHVzZXJJZCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCB1bmF1dGhNZXMgb2YgdW5hdXRoTXNncykge1xuICAgICAgICAgICAgICAgIHVuYXV0aE1lcy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXF1ZXN0KGAvZmF2dXNlci8ke3VzZXJJZH0/bm9jYWNoZT0xYClcbiAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyByZXMudXNlcmlkID0gdXNlcklkXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy51c2VyaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFsbFdyYXAuY2xhc3NMaXN0LnJlbW92ZSgnX3NpZ24nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGd1aWRlV3JhcC5jbGFzc0xpc3QucmVtb3ZlKCdfc2lnbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZVdyYXAuY2xhc3NMaXN0LnJlbW92ZSgnX3NpZ24nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFubmVyX19idG5cIikuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZ3Jlc3NcIikuY2xhc3NMaXN0LnJlbW92ZShcIl9zaWduXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRlYnVnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnBvaW50c1BlckRheSA9IDMwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zcGluQWxsb3dlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnNwaW5zU3RyZWFrID0gMztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZXMuc3BpbnMgPSBbXCJcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZWZyZXNoVXNlckluZm8ocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlVc2VyU3BpbnMocmVzLnNwaW5zKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFubmVyX19idG5cIikuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFubmVyX19idG5cIikuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICAgICAgICAgIGZvciAobGV0IHBhcnRpY2lwYXRlQnRuIG9mIHBhcnRpY2lwYXRlQnRucykge1xuICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoY29uc3QgdW5hdXRoTWVzIG9mIHVuYXV0aE1zZ3MpIHtcbiAgICAgICAgICAgICAgICB1bmF1dGhNZXMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJhbnNsYXRlS2V5KGtleSkge1xuICAgICAgICBpZiAoIWtleSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpMThuRGF0YVtrZXldIHx8ICcqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qICAga2V5OiAgJyArIGtleTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5VXNlclNwaW5zKHNwaW5zKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHNwaW5zKVxuICAgICAgICBjb25zdCBzcGluSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zcGlucy1yb3cnKTtcbiAgICAgICAgY29uc3Qgbm9TcGluSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uby1zcGlucycpO1xuXG4gICAgICAgIGlmICghc3BpbnMgfHwgc3BpbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBzcGluSXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICBub1NwaW5JdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNwaW5zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNwaW5zLXJvdycpO1xuICAgICAgICBzcGluc0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcblxuICAgICAgICBzcGluSXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgIG5vU3Bpbkl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuXG4gICAgICAgIHNwaW5zLmZvckVhY2goc3BpbiA9PiB7XG4gICAgICAgICAgICBjb25zdCBzcGluRGF0ZSA9IG5ldyBEYXRlKHNwaW4uZGF0ZSk7XG4gICAgICAgICAgICBjb25zdCBmb3JtYXR0ZWREYXRlID0gc3BpbkRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCdoci1IUicpO1xuICAgICAgICAgICAgY29uc3Qgc3Bpbk5hbWUgPSB0cmFuc2xhdGVLZXkoc3Bpbi5uYW1lKSB8fCAnJztcblxuICAgICAgICAgICAgY29uc3Qgc3BpbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHNwaW5FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NwaW5zLXJvdy1pdGVtJyk7XG5cbiAgICAgICAgICAgIHNwaW5FbGVtZW50LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29udGVudC1kYXRlXCI+JHtmb3JtYXR0ZWREYXRlfTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29udGVudC1wcml6ZVwiPiR7c3Bpbk5hbWV9PC9zcGFuPlxuICAgICAgICBgO1xuXG4gICAgICAgICAgICBzcGluc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzcGluRWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgLy8gQ2FyZHMgc2xpZGVyXG4gICAgY29uc3QgY2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpemVfX2xpc3QnKSxcbiAgICAgICAgICBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcml6ZV9fbGlzdC1pdGVtJyksXG4gICAgICAgICAgY2FyZHNXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaXplX19saXN0LXNjcm9sbCcpLFxuICAgICAgICAgIG1vdmVSaWdodEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcml6ZV9fc2xpZGVyLW1vdmUtcmlnaHQnKSxcbiAgICAgICAgICBtb3ZlTGVmdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcml6ZV9fc2xpZGVyLW1vdmUtbGVmdCcpLFxuICAgICAgICAgIHRhYnNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpemVfX3RhYnMnKSxcbiAgICAgICAgICBpc01vYmlsZSA9IHdpbmRvdy5pbm5lcldpZHRoIDwgNjAwLFxuICAgICAgICAgIHRvdGFsQ2FyZHMgPSBjYXJkcy5sZW5ndGgsXG4gICAgICAgICAgY2FyZFdpZHRoID0gY2FyZHNbMF0uY2xpZW50V2lkdGgsXG4gICAgICAgICAgY2FyZHNNYXJnaW4gPSAoY2FyZHNXcmFwLmNsaWVudFdpZHRoIC0gY2FyZFdpZHRoICogdG90YWxDYXJkcykgLyAodG90YWxDYXJkcyAtIDEpLFxuICAgICAgICAgIHZpc2libGVTbGlkZXMgPSBpc01vYmlsZSA/IDEgOiBNYXRoLmNlaWwoY2FyZHNDb250YWluZXIuY2xpZW50V2lkdGggLyAoY2FyZFdpZHRoICsgY2FyZHNNYXJnaW4pKSxcbiAgICAgICAgICB0b3RhbFRhYnMgPSBNYXRoLmNlaWwodG90YWxDYXJkcyAvIHZpc2libGVTbGlkZXMpLFxuICAgICAgICAgIHRhYldpZHRoPSB2aXNpYmxlU2xpZGVzICogKGNhcmRXaWR0aCArIGNhcmRzTWFyZ2luKVxuXG5cbiAgICBsZXQgY3VycmVudFNsaWRlID0gMTtcbiAgICBsZXQgY2FyZHNQb3NpdGlvbiA9IDA7XG4gICAgbGV0IGxlZnRTbGlkZTtcbiAgICBsZXQgcmlnaHRTbGlkZTtcblxuICAgIGNvbnN0IHVwZGF0ZUFjdGl2ZUNhcmQgPSAoY2FyZHMsIGFjdGl2ZUluZGV4KSA9PiB7XG4gICAgICAgIGNhcmRzLmZvckVhY2goKGNhcmQsIGkpID0+e1xuICAgICAgICAgICAgYWN0aXZlSW5kZXggLSAxID09PSBpID8gY2FyZC5jbGFzc0xpc3QuYWRkKFwiX2FjdGl2ZVwiKSA6IGNhcmQuY2xhc3NMaXN0LnJlbW92ZShcIl9hY3RpdmVcIilcbiAgICAgICAgfSlcbiAgICB9XG4gICAgdXBkYXRlQWN0aXZlQ2FyZChjYXJkcywgY3VycmVudFNsaWRlKVxuXG4gICAgZnVuY3Rpb24gbGVmdFNsaWRlVGFiKCl7XG4gICAgICAgIGxlZnRTbGlkZSA9IGN1cnJlbnRTbGlkZVxuICAgIH1cbiAgICBmdW5jdGlvbiByaWdodFNsaWRlVGFiKCl7XG4gICAgICAgIHJpZ2h0U2xpZGUgPSBjdXJyZW50U2xpZGUgKyAodmlzaWJsZVNsaWRlcyAtIDEpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZmlyc3RMYXN0U2xpZGVzKCl7XG4gICAgICAgIGlmKGlzTW9iaWxlKSByZXR1cm5cbiAgICAgICAgbGVmdFNsaWRlVGFiKClcbiAgICAgICAgcmlnaHRTbGlkZVRhYigpXG4gICAgICAgIGNhcmRzLmZvckVhY2goKGNhcmQgLCBpKSA9PntcbiAgICAgICAgICAgIGkgKyAxID09PSBsZWZ0U2xpZGUgPyBjYXJkLmNsYXNzTGlzdC5hZGQoXCJfbGVmdFwiKSA6IGNhcmQuY2xhc3NMaXN0LnJlbW92ZShcIl9sZWZ0XCIpXG4gICAgICAgICAgICBpICsgMSA9PT0gcmlnaHRTbGlkZSA/IGNhcmQuY2xhc3NMaXN0LmFkZChcIl9yaWdodFwiKSA6IGNhcmQuY2xhc3NMaXN0LnJlbW92ZShcIl9yaWdodFwiKVxuICAgICAgICB9KVxuICAgIH1cbiAgICBmaXJzdExhc3RTbGlkZXMoKVxuXG4gICAgZnVuY3Rpb24gc2V0Q2FyZHNQb3NpdGlvbiAocG9zaXRpb24pIHtcbiAgICAgICAgY2FyZHNXcmFwLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKC0ke3Bvc2l0aW9ufXB4KWA7XG4gICAgfTtcbiAgICBjb25zdCBtb3ZlUmlnaHQgPSAoKSA9PiB7XG5cbiAgICAgICAgaWYgKGN1cnJlbnRTbGlkZSA+PSB0b3RhbENhcmRzIC0gKHZpc2libGVTbGlkZXMgLSAxKSAmJiBpc01vYmlsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGZpcnN0TGFzdFNsaWRlcygpXG4gICAgICAgICAgICBjdXJyZW50U2xpZGUgPSAxO1xuICAgICAgICAgICAgY2FyZHNQb3NpdGlvbiA9IDA7XG4gICAgICAgICAgICByaWdodFNsaWRlKytcbiAgICAgICAgICAgIGxlZnRTbGlkZSsrXG4gICAgICAgIH1lbHNlIGlmKGN1cnJlbnRTbGlkZSA9PT0gdG90YWxDYXJkcykge1xuICAgICAgICAgICAgY3VycmVudFNsaWRlID0gMTtcbiAgICAgICAgICAgIGNhcmRzUG9zaXRpb24gPSAwO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBtYXhQb3NpdGlvbiA9ICh0b3RhbENhcmRzIC0gdmlzaWJsZVNsaWRlcykgKiAoY2FyZFdpZHRoICsgY2FyZHNNYXJnaW4pO1xuICAgICAgICAgICAgaWYgKGNhcmRzUG9zaXRpb24gKyBjYXJkV2lkdGggKyBjYXJkc01hcmdpbiA+IG1heFBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgY2FyZHNQb3NpdGlvbiA9IG1heFBvc2l0aW9uO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRTbGlkZSA9IHRvdGFsQ2FyZHMgLSB2aXNpYmxlU2xpZGVzICsgMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2FyZHNQb3NpdGlvbiArPSBjYXJkV2lkdGggKyBjYXJkc01hcmdpbjtcbiAgICAgICAgICAgICAgICBjdXJyZW50U2xpZGUrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzZXRDYXJkc1Bvc2l0aW9uKGNhcmRzUG9zaXRpb24pO1xuICAgICAgICB1cGRhdGVBY3RpdmVDYXJkKGNhcmRzLCBjdXJyZW50U2xpZGUpXG4gICAgICAgIGZpcnN0TGFzdFNsaWRlcygpXG4gICAgICAgIGhpZGVQb3B1cHMoY2FyZHMpXG4gICAgfTtcbiAgICBjb25zdCBtb3ZlTGVmdCA9ICgpID0+IHtcbiAgICAgICAgaWYoY3VycmVudFNsaWRlID09PSAxICYmIGlzTW9iaWxlID09PSBmYWxzZSl7XG4gICAgICAgICAgICBjdXJyZW50U2xpZGUgPSB0b3RhbENhcmRzIC0gKHZpc2libGVTbGlkZXMgLSAxKTtcbiAgICAgICAgICAgIGNhcmRzUG9zaXRpb24gPSAoKHRvdGFsQ2FyZHMgLSAodmlzaWJsZVNsaWRlcyAtIDEpKSAqIChjYXJkV2lkdGggKyBjYXJkc01hcmdpbikpIC0oY2FyZFdpZHRoICsgY2FyZHNNYXJnaW4pO1xuICAgICAgICB9ZWxzZSBpZiAoY3VycmVudFNsaWRlID09PSAyKSB7XG4gICAgICAgICAgICBjYXJkc1Bvc2l0aW9uID0gMFxuICAgICAgICAgICAgY3VycmVudFNsaWRlID0gMVxuICAgICAgICB9ZWxzZSBpZihjdXJyZW50U2xpZGUgPT09IDEgJiYgaXNNb2JpbGUgPT09IHRydWUpe1xuICAgICAgICAgICAgY3VycmVudFNsaWRlID0gdG90YWxDYXJkc1xuICAgICAgICAgICAgY2FyZHNQb3NpdGlvbiA9IHRvdGFsQ2FyZHMgICogKGNhcmRXaWR0aCArIGNhcmRzTWFyZ2luKSAtIChjYXJkV2lkdGggKyBjYXJkc01hcmdpbilcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgY2FyZHNQb3NpdGlvbiAtPSBjYXJkV2lkdGggKyBjYXJkc01hcmdpbjtcbiAgICAgICAgICAgIGN1cnJlbnRTbGlkZS0tXG4gICAgICAgIH1cbiAgICAgICAgc2V0Q2FyZHNQb3NpdGlvbihjYXJkc1Bvc2l0aW9uKTtcbiAgICAgICAgdXBkYXRlQWN0aXZlQ2FyZChjYXJkcywgY3VycmVudFNsaWRlKVxuICAgICAgICBmaXJzdExhc3RTbGlkZXMoKVxuICAgICAgICBoaWRlUG9wdXBzKGNhcmRzKVxuICAgIH07XG5cbiAgICAvLyBwb3B1cHMgbG9naWNcblxuICAgIGZ1bmN0aW9uIHNldFBvcHVwcyhwb3B1cHMsIHBvcHVwc0J0bnMpIHtcbiAgICAgICAgcG9wdXBzQnRucy5mb3JFYWNoKChidG4sIGkpID0+IHtcbiAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBwb3B1cHMuZm9yRWFjaCgocG9wdXAsIGopID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaSA9PT0gaiA/IHBvcHVwLmNsYXNzTGlzdC5hZGQoXCJfcG9wdXBcIikgOiBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwiX3BvcHVwXCIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhpZGVQb3B1cHMocG9wdXBzKXtcbiAgICAgICAgcG9wdXBzLmZvckVhY2gocG9wdXAgPT57XG4gICAgICAgICAgIHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoXCJfcG9wdXBcIilcbiAgICAgICAgfSlcbiAgICB9XG4vLyBwb3B1cHNcbiAgICBjb25zdCBwcml6ZU9wZW5CdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcml6ZV9fbGlzdC1pdGVtLWJ0blwiKVxuICAgIGNvbnN0IHByaXplQ2xvc2VCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcml6ZV9fbGlzdC1wb3B1cC1jbG9zZVwiKVxuICAgIGNvbnN0IGd1aWRlUG9wdXBzV3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZ3VpZGVfX2l0ZW1cIilcbiAgICBjb25zdCBndWlkZU9wZW5CdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ndWlkZV9faXRlbS1pbmZvLWJ0blwiKVxuICAgIGNvbnN0IGd1aWRlQ2xvc2VCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ndWlkZV9faXRlbS1wb3B1cC1jbG9zZVwiKVxuICAgIGNvbnN0IHRhYmxlUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhYmxlX19wb3B1cFwiKVxuICAgIGNvbnN0IHRhYmxlUG9wdXBDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFibGVfX3BvcHVwLWNsb3NlXCIpXG4gICAgY29uc3QgdGFibGVQb3B1cE9wZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhYmxlX19pbmZvXCIpXG5cbiAgICBzZXRQb3B1cHMoY2FyZHMsIHByaXplT3BlbkJ0bnMpO1xuICAgIHNldFBvcHVwcyhndWlkZVBvcHVwc1dyYXAsIGd1aWRlT3BlbkJ0bnMpO1xuXG4gICAgZ3VpZGVDbG9zZUJ0bnMuZm9yRWFjaChidG4gPT57XG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xuICAgICAgICAgICAgaGlkZVBvcHVwcyhndWlkZVBvcHVwc1dyYXApXG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcHJpemVDbG9zZUJ0bnMuZm9yRWFjaChidG4gPT57XG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xuICAgICAgICAgICAgaGlkZVBvcHVwcyhjYXJkcylcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0YWJsZVBvcHVwT3Blbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgdGFibGVQb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKVxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIlxuICAgIH0pO1xuXG4gICAgdGFibGVQb3B1cENsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgdGFibGVQb3B1cC5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCJcbiAgICB9KTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+e1xuICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBDT1VOVCA9IDQwMDtcblxuICAgICAgICBmdW5jdGlvbiBTbm93c3Rvcm0oZWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5tYXN0aGVhZCA9IGVsZW1lbnQ7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMubWFzdGhlYWQuY2xpZW50V2lkdGg7XG4gICAgICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMubWFzdGhlYWQuY2xpZW50SGVpZ2h0O1xuICAgICAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc25vd2ZsYWtlcyA9IFtdO1xuXG4gICAgICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFNub3dzdG9ybS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmxlZnQgPSB0aGlzLmNhbnZhcy5zdHlsZS50b3AgPSAnMCc7XG4gICAgICAgICAgICB0aGlzLm1hc3RoZWFkLmFwcGVuZENoaWxkKHRoaXMuY2FudmFzKTtcblxuICAgICAgICAgICAgdGhpcy5vblJlc2l6ZSgpO1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25SZXNpemUuYmluZCh0aGlzKSwgZmFsc2UpO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IENPVU5UOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgc25vd2ZsYWtlID0gbmV3IHRoaXMuU25vd2ZsYWtlKHRoaXMpO1xuICAgICAgICAgICAgICAgIHNub3dmbGFrZS5yZXNldCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc25vd2ZsYWtlcy5wdXNoKHNub3dmbGFrZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltRnJhbWUodGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgU25vd3N0b3JtLnByb3RvdHlwZS5vblJlc2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMud2lkdGggPSB0aGlzLm1hc3RoZWFkLmNsaWVudFdpZHRoO1xuICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLm1hc3RoZWFkLmNsaWVudEhlaWdodDtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gdGhpcy53aWR0aDtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHRoaXMuaGVpZ2h0O1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJyNGRkYnO1xuXG4gICAgICAgICAgICB2YXIgd2FzQWN0aXZlID0gdGhpcy5hY3RpdmU7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZSA9IHRoaXMud2lkdGggPiA4MDtcbiAgICAgICAgICAgIHRoaXMud2lkdGggPiAyODAgPyBDT1VOVCA9IDE1MCA6IG51bGxcblxuICAgICAgICAgICAgaWYgKCF3YXNBY3RpdmUgJiYgdGhpcy5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbUZyYW1lKHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIFNub3dzdG9ybS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcblxuICAgICAgICAgICAgaWYgKCF0aGlzLmFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBDT1VOVDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNub3dmbGFrZSA9IHRoaXMuc25vd2ZsYWtlc1tpXTtcbiAgICAgICAgICAgICAgICBzbm93Zmxha2UueSArPSBzbm93Zmxha2Uudnk7XG4gICAgICAgICAgICAgICAgc25vd2ZsYWtlLnggKz0gc25vd2ZsYWtlLnZ4O1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZ2xvYmFsQWxwaGEgPSBzbm93Zmxha2UubztcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5hcmMoc25vd2ZsYWtlLngsIHNub3dmbGFrZS55LCBzbm93Zmxha2UuciwgMCwgTWF0aC5QSSAqIDIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoc25vd2ZsYWtlLnkgPiB0aGlzLmhlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICBzbm93Zmxha2UucmVzZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlcXVlc3RBbmltRnJhbWUodGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgU25vd3N0b3JtLnByb3RvdHlwZS5Tbm93Zmxha2UgPSBmdW5jdGlvbiAoc25vd3N0b3JtKSB7XG4gICAgICAgICAgICB0aGlzLnNub3dzdG9ybSA9IHNub3dzdG9ybTtcbiAgICAgICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgfTtcblxuICAgICAgICBTbm93c3Rvcm0ucHJvdG90eXBlLlNub3dmbGFrZS5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLnggPSBNYXRoLnJhbmRvbSgpICogdGhpcy5zbm93c3Rvcm0ud2lkdGg7XG4gICAgICAgICAgICB0aGlzLnkgPSBNYXRoLnJhbmRvbSgpICogLXRoaXMuc25vd3N0b3JtLmhlaWdodDtcbiAgICAgICAgICAgIHRoaXMudnkgPSAwLjMgKyBNYXRoLnJhbmRvbSgpICogMC4wMDAwMTtcbiAgICAgICAgICAgIHRoaXMudnggPSAwLjYgLSBNYXRoLnJhbmRvbSgpO1xuICAgICAgICAgICAgdGhpcy5yID0gMSArIE1hdGgucmFuZG9tKCkgKiAyO1xuICAgICAgICAgICAgdGhpcy5vID0gMTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBzaGltIGxheWVyIHdpdGggc2V0VGltZW91dCBmYWxsYmFja1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1GcmFtZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICAgICAgICAgIHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgICAgICAgICB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCAxMDAwIC8gNjApO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgIH0pKCk7XG5cbiAgICAgICAgLy8gQXBwbHkgU25vd3N0b3JtIHRvIGFsbCBlbGVtZW50cyB3aXRoIHRoZSBjbGFzcyAnc2t5J1xuICAgICAgICB2YXIgc2tpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2t5Jyk7XG4gICAgICAgIHNraWVzLmZvckVhY2goZnVuY3Rpb24gKHNreSkge1xuICAgICAgICAgICAgbmV3IFNub3dzdG9ybShza3kpO1xuICAgICAgICB9KTtcblxuXG5cbiAgICAgICAgLy8gYmFsbCBzaGFrZSBzbm93XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbm93Q2FudmFzJyk7XG4gICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBjb25zdCBiYWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNwaGVyZScpO1xuXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IGNhbnZhcy5wYXJlbnRFbGVtZW50LmNsaWVudFdpZHRoO1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gY2FudmFzLnBhcmVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuXG4gICAgICAgIGxldCBzbm93Zmxha2VzID0gW107XG4gICAgICAgIGNvbnN0IG1heFNub3dmbGFrZXMgPSAxMDA7XG4gICAgICAgIGNvbnN0IG1heFNwZWVkID0gNzsgLy8g0JzQsNC60YHQuNC80LDQu9GM0L3QsCDRiNCy0LjQtNC60ZbRgdGC0Ywg0YHQvdGW0LbQuNC90LrQuFxuICAgICAgICBsZXQgc3Rvcm1Db3VudGVyID0gMVxuXG5cbiAgICAgICAgbGV0IHNub3dmbGFrZXNSZW1vdmVkID0gMDtcblxuICAgICAgICBjbGFzcyBTbm93Zmxha2Uge1xuICAgICAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy54ID0gTWF0aC5yYW5kb20oKSAqIGNhbnZhcy53aWR0aDtcbiAgICAgICAgICAgICAgICB0aGlzLnkgPSBNYXRoLnJhbmRvbSgpICogY2FudmFzLmhlaWdodDtcbiAgICAgICAgICAgICAgICB0aGlzLnJhZGl1cyA9IE1hdGgucmFuZG9tKCkgKiAzICsgMTtcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVkWCA9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDEwO1xuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWRZID0gTWF0aC5yYW5kb20oKSAqIDEuNSArIDE7XG4gICAgICAgICAgICAgICAgdGhpcy5hY2NlbGVyYXRpb24gPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMubW92aW5nVG9Cb3R0b20gPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdXBkYXRlKGJhbGxYLCBiYWxsWSwgYmFsbFJhZGl1cywgYmFsbFNoYWtpbmcpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tb3ZpbmdUb0JvdHRvbSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXRTcGVlZCA9IDAuMTsgLy8g0JzQsNC70LXQvdGM0LrQsCDRiNCy0LjQtNC60ZbRgdGC0YwsINC00L4g0Y/QutC+0Zcg0L/RgNCw0LPQvdC10LzQvlxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzcGVlZERlY2F5RmFjdG9yID0gMC4wNTsgLy8g0JrQvtC10YTRltGG0ZbRlNC90YIg0LTQu9GPINC/0LvQsNCy0L3QvtCz0L4g0YHQv9C+0LLRltC70YzQvdC10L3QvdGPXG5cbiAgICAgICAgICAgICAgICAgICAgLy8g0J/Qu9Cw0LLQvdC+INC90LDQsdC70LjQttCw0ZTQvNC+INGI0LLQuNC00LrRltGB0YLRjCDQtNC+IHRhcmdldFNwZWVkXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3BlZWRYID0gdGhpcy5zcGVlZFggLSAodGhpcy5zcGVlZFggLSB0YXJnZXRTcGVlZCkgKiBzcGVlZERlY2F5RmFjdG9yO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwZWVkWSA9IHRoaXMuc3BlZWRZIC0gKHRoaXMuc3BlZWRZIC0gdGFyZ2V0U3BlZWQpICogc3BlZWREZWNheUZhY3RvcjtcblxuICAgICAgICAgICAgICAgICAgICAvLyDQntC90L7QstC70LXQvdC90Y8g0L/QvtC30LjRhtGW0Zcg0YHQvdGW0LbQuNC90LrQuFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnkgKz0gdGhpcy5zcGVlZFk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMueSA+IGNhbnZhcy5oZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMueCArPSB0aGlzLnNwZWVkWDtcbiAgICAgICAgICAgICAgICB0aGlzLnkgKz0gdGhpcy5zcGVlZFk7XG5cbiAgICAgICAgICAgICAgICAvLyDQntCx0LzQtdC20LXQvdC90Y8g0YjQstC40LTQutC+0YHRgtGWXG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlZFggPSBNYXRoLm1heCgtbWF4U3BlZWQsIE1hdGgubWluKG1heFNwZWVkLCB0aGlzLnNwZWVkWCkpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWRZID0gTWF0aC5tYXgoLW1heFNwZWVkLCBNYXRoLm1pbihtYXhTcGVlZCwgdGhpcy5zcGVlZFkpKTtcblxuICAgICAgICAgICAgICAgIC8vINCU0L7QtNCw0LLQsNC90L3RjyDRiNCy0LjQtNC60L7RgdGC0ZYg0YfQtdGA0LXQtyBcItGC0YDRg9GB0ZbQvdC90Y9cIiDQutGD0LvRllxuICAgICAgICAgICAgICAgIGlmIChiYWxsU2hha2luZykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjY2VsZXJhdGlvbiArPSAwLjA1OyAvLyDQndCw0YDQvtGJ0YPQstCw0L3QvdGPINGI0LLQuNC00LrQvtGB0YLRllxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWNjZWxlcmF0aW9uICo9IDAuOTU7IC8vINCf0L7RgdGC0YPQv9C+0LLQtSDQt9C80LXQvdGI0LXQvdC90Y9cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlZFggKz0gdGhpcy5hY2NlbGVyYXRpb24gKiAoTWF0aC5yYW5kb20oKSAtIDAuNSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlZFkgKz0gdGhpcy5hY2NlbGVyYXRpb24gKiAoTWF0aC5yYW5kb20oKSAtIDAuNSk7XG5cbiAgICAgICAgICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNC60LAg0L3QsCDQvNC10LbRliBjYW52YXNcbiAgICAgICAgICAgICAgICBpZiAodGhpcy55ID4gY2FudmFzLmhlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnkgPSAwO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnggPSBNYXRoLnJhbmRvbSgpICogY2FudmFzLndpZHRoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy54ID4gY2FudmFzLndpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMueCA9IDA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnggPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMueCA9IGNhbnZhcy53aWR0aDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyDQktGW0LTRgdGC0LDQvdGMINC00L4g0YbQtdC90YLRgNGDINC60YPQu9GWXG4gICAgICAgICAgICAgICAgY29uc3QgZHggPSB0aGlzLnggLSBiYWxsWDtcbiAgICAgICAgICAgICAgICBjb25zdCBkeSA9IHRoaXMueSAtIGJhbGxZO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcblxuICAgICAgICAgICAgICAgIC8vINCS0ZbQtNGB0LrQvtC6INCy0ZbQtCDQutGD0LvRllxuICAgICAgICAgICAgICAgIGlmIChkaXN0YW5jZSA8IGJhbGxSYWRpdXMgKyB0aGlzLnJhZGl1cykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhbmdsZSA9IE1hdGguYXRhbjIoZHksIGR4KTsgLy8g0JrRg9GCINC30ZbRgtC60L3QtdC90L3Rj1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBvdmVybGFwID0gYmFsbFJhZGl1cyArIHRoaXMucmFkaXVzIC0gZGlzdGFuY2U7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8g0J/QtdGA0LXQvNGW0YnQtdC90L3RjyDRgdC90ZbQttC40L3QutC4XG4gICAgICAgICAgICAgICAgICAgIHRoaXMueCArPSBNYXRoLmNvcyhhbmdsZSkgKiBvdmVybGFwO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnkgKz0gTWF0aC5zaW4oYW5nbGUpICogb3ZlcmxhcDtcblxuICAgICAgICAgICAgICAgICAgICAvLyDQoNC10LLQtdGA0YEg0YjQstC40LTQutC+0YHRgtGWXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3BlZWRYICo9IC0wLjc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3BlZWRZICo9IC0wLjc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtb3ZlVG9Cb3R0b20oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZpbmdUb0JvdHRvbSA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlbW92ZSgpIHtcbiAgICAgICAgICAgICAgICBzbm93Zmxha2VzLnNwbGljZShzbm93Zmxha2VzLmluZGV4T2YodGhpcyksIDEpO1xuICAgICAgICAgICAgICAgIHNub3dmbGFrZXNSZW1vdmVkKys7XG4gICAgICAgICAgICAgICAgaWYgKHN0b3JtQ291bnRlciA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBuZXcgU25vd3N0b3JtKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3BoZXJlX19ib2R5XCIpKTtcbiAgICAgICAgICAgICAgICAgICAgc3Rvcm1Db3VudGVyKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkcmF3KCkge1xuICAgICAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICBjdHguYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgMCwgTWF0aC5QSSAqIDIpO1xuICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSAnd2hpdGUnO1xuICAgICAgICAgICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbi8vINCh0L/QsNCy0L3QuNC80L4g0L3QvtCy0ZYg0YHQvdGW0LbQuNC90LrQuCDQv9GA0Lgg0LfQvNGW0L3RliDRgdGC0LDQvdGDINC60YPQu9GWXG4gICAgICAgIGxldCBsYXN0QmFsbFNoYWtpbmdTdGF0ZSA9IGZhbHNlOyAvLyDQl9C80ZbQvdC90LAg0LTQu9GPINCy0ZbQtNGB0YLQtdC20LXQvdC90Y8g0YHRgtCw0L3RgyDQutGD0LvRllxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF4U25vd2ZsYWtlczsgaSsrKSB7XG4gICAgICAgICAgICBzbm93Zmxha2VzLnB1c2gobmV3IFNub3dmbGFrZSgpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGFuaW1hdGUoKSB7XG4gICAgICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGJhbGxUcmFuc2Zvcm0gPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShiYWxsKS50cmFuc2Zvcm07XG4gICAgICAgICAgICBsZXQgYmFsbFggPSBjYW52YXMud2lkdGggLyAyO1xuICAgICAgICAgICAgbGV0IGJhbGxZID0gY2FudmFzLmhlaWdodCAvIDI7XG4gICAgICAgICAgICBjb25zdCBiYWxsUmFkaXVzID0gYmFsbC5vZmZzZXRXaWR0aCAvIDI7XG4gICAgICAgICAgICBjb25zdCBiYWxsU2hha2luZyA9IGJhbGxUcmFuc2Zvcm0gIT09ICdub25lJztcblxuICAgICAgICAgICAgaWYgKGJhbGxUcmFuc2Zvcm0gIT09ICdub25lJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1hdHJpeCA9IG5ldyBET01NYXRyaXgoYmFsbFRyYW5zZm9ybSk7XG4gICAgICAgICAgICAgICAgYmFsbFggPSBiYWxsLm9mZnNldExlZnQgKyBtYXRyaXgubTQxICsgYmFsbFJhZGl1cztcbiAgICAgICAgICAgICAgICBiYWxsWSA9IGJhbGwub2Zmc2V0VG9wICsgbWF0cml4Lm00MiArIGJhbGxSYWRpdXM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vINCv0LrRidC+INGB0YLQsNC9INC60YPQu9GWINC30LzRltC90LjQstGB0Y8g0L3QsCBcItGA0YPRhVwiLCDQv9C10YDQtdC30LDQv9GD0YHQutCw0ZTQvNC+INGB0L3RltC20LjQvdC60LhcbiAgICAgICAgICAgIGlmIChiYWxsU2hha2luZyAmJiAhbGFzdEJhbGxTaGFraW5nU3RhdGUpIHtcbiAgICAgICAgICAgICAgICAvLyDQntGH0LjRidCw0ZTQvNC+INC80LDRgdC40LIg0YHQvdGW0LbQuNC90L7QulxuICAgICAgICAgICAgICAgIHNub3dmbGFrZXMgPSBbXTtcbiAgICAgICAgICAgICAgICBzbm93Zmxha2VzUmVtb3ZlZCA9IDA7XG4gICAgICAgICAgICAgICAgLy8g0KHQv9Cw0LLQvdC40LzQviDQvdC+0LLRliDRgdC90ZbQttC40L3QutC4XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXhTbm93Zmxha2VzOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc25vd2ZsYWtlcy5wdXNoKG5ldyBTbm93Zmxha2UoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsYXN0QmFsbFNoYWtpbmdTdGF0ZSA9IGJhbGxTaGFraW5nO1xuXG4gICAgICAgICAgICBzbm93Zmxha2VzLmZvckVhY2goc25vd2ZsYWtlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWJhbGxTaGFraW5nKSBzbm93Zmxha2UubW92ZVRvQm90dG9tKCk7XG4gICAgICAgICAgICAgICAgc25vd2ZsYWtlLnVwZGF0ZShiYWxsWCwgYmFsbFksIGJhbGxSYWRpdXMsIGJhbGxTaGFraW5nKTtcbiAgICAgICAgICAgICAgICBzbm93Zmxha2UuZHJhdygpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFuaW1hdGUoKTtcblxuICAgIH0pKCk7XG59KVxuXG4vLyBzbm93ZmFsbCBhbmltYXRpb25cblxuXG4gICAgbGV0IGkgPSAxO1xuICAgIGZ1bmN0aW9uIHNlbmRTaGFrZVJlcXVlc3QoKSB7XG4gICAgICAgIGlmICghdXNlcklkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGVidWcpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgICAgICAgICAgIC8vIG51bWJlcjogaSsrLFxuICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXN0J1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwYXJhbXMgPSB7dXNlcmlkOiB1c2VySWR9O1xuICAgICAgICByZXR1cm4gcmVxdWVzdCgnL3NwaW4nLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhcmFtcylcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBjb25zdCBidG5TaGFrZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZ3Jlc3NfX3NoYWtlXCIpXG4gICAgY29uc3QgYmFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3BoZXJlXCIpXG4gICAgY29uc3QgYmFsbEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3BoZXJlX19ib3hcIilcblxuICAgIGFzeW5jIGZ1bmN0aW9uIGFuaW1hdGVTaGFrZShiYWxsLCBib3gsIGJ0biwgcHJpemUpIHtcbiAgICAgICAgY29uc3QgZGVsYXkgPSAobXMpID0+IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpXG5cbiAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJfZGlzYWJsZWRcIik7XG4gICAgICAgIGJhbGwuY2xhc3NMaXN0LmFkZChcIl9zaGFrZVwiKTtcbiAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJfc2hha2UtcmV2ZXJzZVwiKTtcblxuICAgICAgICBhd2FpdCBkZWxheSgyMDAwKTtcblxuICAgICAgICBiYWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJfc2hha2VcIik7XG4gICAgICAgIGJhbGwuY2xhc3NMaXN0LmFkZChcIl9iZWZvcmUtaGlkZVwiKTtcbiAgICAgICAgYm94LmNsYXNzTGlzdC5yZW1vdmUoXCJfc2hha2UtcmV2ZXJzZVwiKTtcbiAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJfYm94LW9wYWNpdHlcIik7XG5cbiAgICAgICAgYXdhaXQgZGVsYXkoMjAwKTtcblxuICAgICAgICBiYWxsLmNsYXNzTGlzdC5hZGQoYCR7cHJpemV9YCk7XG4gICAgfVxuXG4gICAgLy8g0JrQvtC20LXQvSDQutC70LDRgSDQstGW0LTQv9C+0LLRltC00LDRlCDQstC40LPRgNCw0L3QvtC80YMg0L/RgNC40LfRgzpcbiAgICAvLyBcIl9pcGhvbmVcIiAtINCy0LjQs9GA0LDQvdC+IGlQaG9uZVxuICAgIC8vIFwiX3R2XCIgLSDQstC40LPRgNCw0L3QviDRgtC10LvQtdCy0ZbQt9C+0YBcbiAgICAvLyBcIl9qYmxcIiAtINCy0LjQs9GA0LDQvdC+IEpCTC3QutC+0LvQvtC90LrRg1xuICAgIC8vIFwiX21lZ29nb1wiIC0g0LLQuNCz0YDQsNC90L4g0L/RltC00L/QuNGB0LrRgyBNZWdvZ29cbiAgICAvLyBcIl9yZXNwaW5cIiAtINC00L7QtNCw0YLQutC+0LLQtSDQvtCx0LXRgNGC0LDQvdC90Y9cbiAgICAvLyBcIl9ub3RoaW5nXCIgLSDQvdGW0YfQvtCz0L4g0L3QtSDQstC40LPRgNCw0L3QvlxuICAgIC8vIFwiX3BvaW50czUwXCIgLSDQstC40LPRgNCw0L3QviA1MCDQsdC+0L3Rg9GB0L3QuNGFINCx0LDQu9GW0LJcbiAgICAvLyBcIl9mczEwXCIgLSDQstC40LPRgNCw0L3QviAxMCDRhNGA0ZbRgdC/0ZbQvdGW0LJcbiAgICAvLyBcIl9mczI1XCIgLSDQstC40LPRgNCw0L3QviAyNSDRhNGA0ZbRgdC/0ZbQvdGW0LJcbiAgICAvLyBcIl9mczUwXCIgLSDQstC40LPRgNCw0L3QviA1MCDRhNGA0ZbRgdC/0ZbQvdGW0LJcbiAgICAvLyBcIl9zYXZlQmV0MTAwXCIgLSDQstC40LPRgNCw0L3QviDRgdGC0YDQsNGF0L7QstC60YMg0L3QsCAxMDAg0YHRgtCw0LLQvtC6XG4gICAgLy8gXCJfc2F2ZUJldDE1MFwiIC0g0LLQuNCz0YDQsNC90L4g0YHRgtGA0LDRhdC+0LLQutGDINC90LAgMTUwINGB0YLQsNCy0L7QulxuICAgIC8vIFwiX3NhdmVCZXQyMDBcIiAtINCy0LjQs9GA0LDQvdC+INGB0YLRgNCw0YXQvtCy0LrRgyDQvdCwIDIwMCDRgdGC0LDQstC+0LpcbiAgICAvLyDRhNGD0L3QutGG0ZbRjyBpbml0U2hha2Ug0L/RgNC+0LrQuNC00YPRlCDQutC70LDRgdC4INCy0ZbQtNC/0L7QstGW0LTQvdGWINC/0YDQuNC30LDQvCDQvdCwINCx0LvQvtC6IC5zcGhlcmUg0LTQu9GPINCy0ZbQtNC+0LHRgNCw0LbQtdC90L3RjyDQv9GA0LjQt9GDXG4gICAgY29uc3Qgd2luQ2xhc3NlcyA9IFtcbiAgICAgICAgXCJfaXBob25lXCIsIFwiX3R2XCIsIFwiX2pibFwiLCBcIl9tZWdvZ29cIiwgXCJfcmVzcGluXCIsIFwiX25vdGhpbmdcIixcbiAgICAgICAgXCJfcG9pbnRzNTBcIiwgXCJfZnMxMFwiLCBcIl9mczI1XCIsIFwiX2ZzNTBcIiwgXCJfc2F2ZUJldDEwMFwiLCBcIl9zYXZlQmV0MTUwXCIsIFwiX3NhdmVCZXQyMDBcIlxuICAgIF07XG4gICAgZnVuY3Rpb24gaW5pdFNoYWtlKGJhbGwsIGJ0biwgYm94KSB7XG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgICAgICBzZW5kU2hha2VSZXF1ZXN0KCkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXMgfHwgISFyZXMuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gYnRuU2hha2UuY2xhc3NMaXN0LmFkZCgncHVsc2UtYnRuJyk7XG4gICAgICAgICAgICAgICAgICAgIGJ0blNoYWtlLmNsYXNzTGlzdC5yZW1vdmUoJ19kaXNhYmxlZCcpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gY29uc3QgcHJpemUgPSByZXMubnVtYmVyO1xuICAgICAgICAgICAgICAgIGNvbnN0IHByaXplID0gd2luQ2xhc3Nlc1sxMl07XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RyZWFrQm9udXMgPSByZXMuc3RyZWFrQm9udXMgfHwgZGVidWc7XG4gICAgICAgICAgICAgICAgYW5pbWF0ZVNoYWtlKGJhbGwsIGJveCwgYnRuLCBwcml6ZSkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoXCJhbmltIGVycm9yOlwiLCBlcnIpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGluaXRTaGFrZShiYWxsLCBidG5TaGFrZSwgYmFsbEJveClcblxuICAgIGNvbnN0IGhhbmRsZVJlc2l6ZSA9ICgpID0+e1xuICAgICAgICBsZXQgdG91Y2hTdGFydFggPSAwO1xuICAgICAgICBsZXQgdG91Y2hFbmRYID0gMDtcbiAgICAgICAgbGV0IHRvdWNoU3RhcnRUaW1lID0gMDsgLy8g0KfQsNGBINC/0L7Rh9Cw0YLQutGDINC00L7RgtC40LrRg1xuXG4gICAgICAgIGNvbnN0IGhhbmRsZVRvdWNoU3RhcnQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRvdWNoU3RhcnRYID0gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYO1xuICAgICAgICAgICAgdG91Y2hTdGFydFRpbWUgPSBEYXRlLm5vdygpOyAvLyDQl9Cw0L/QuNGB0YPRlNC80L4g0YfQsNGBINC/0L7Rh9Cw0YLQutGDINC00L7RgtC40LrRg1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGhhbmRsZVRvdWNoTW92ZSA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgdG91Y2hFbmRYID0gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGhhbmRsZVRvdWNoRW5kID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3dpcGVEaXN0YW5jZSA9IHRvdWNoU3RhcnRYIC0gdG91Y2hFbmRYO1xuICAgICAgICAgICAgY29uc3Qgc3dpcGVUaW1lID0gRGF0ZS5ub3coKSAtIHRvdWNoU3RhcnRUaW1lOyAvLyDQotGA0LjQstCw0LvRltGB0YLRjCDRgdCy0LDQudC/0YNcblxuICAgICAgICAgICAgLy8g0KTRltC70YzRgtGA0LDRhtGW0Y8g0LrQu9GW0LrRltCyINGC0LAg0L3QtdC60L7RgNC10LrRgtC90LjRhSDRgdCy0LDQudC/0ZbQslxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKHN3aXBlRGlzdGFuY2UpIDwgNTAgfHwgc3dpcGVUaW1lID4gNTAwICYmIHN3aXBlVGltZSA+IDUwKSB7XG4gICAgICAgICAgICAgICAgLy8g0K/QutGJ0L4g0YHQstCw0LnQvyDQt9Cw0L3QsNC00YLQviDQutC+0YDQvtGC0LrQuNC5INCw0LHQviDQvdCw0LTRgtC+INC/0L7QstGW0LvRjNC90LjQuSwg0L3QtSDQstCy0LDQttCw0ZTQvNC+INC50L7Qs9C+INGB0L/RgNCw0LLQttC90ZbQvFxuICAgICAgICAgICAgICAgIHRvdWNoU3RhcnRYID0gMDtcbiAgICAgICAgICAgICAgICB0b3VjaEVuZFggPSAwO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8g0J/QtdGA0LXQstGW0YDRj9GU0LzQviDQvdCw0L/RgNGP0LzQvtC6INGB0LLQsNC50L/Rg1xuICAgICAgICAgICAgaWYgKHN3aXBlRGlzdGFuY2UgPiA1MCkge1xuICAgICAgICAgICAgICAgIC8vINCh0LLQsNC50L8g0LvRltCy0L7RgNGD0YdcbiAgICAgICAgICAgICAgICBtb3ZlUmlnaHQoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc3dpcGVEaXN0YW5jZSA8IC01MCkge1xuICAgICAgICAgICAgICAgIC8vINCh0LLQsNC50L8g0L/RgNCw0LLQvtGA0YPRh1xuICAgICAgICAgICAgICAgIG1vdmVMZWZ0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vINCh0LrQuNC00LDRlNC80L4g0LfQvdCw0YfQtdC90L3Rj1xuICAgICAgICAgICAgdG91Y2hTdGFydFggPSAwO1xuICAgICAgICAgICAgdG91Y2hFbmRYID0gMDtcbiAgICAgICAgfTtcblxuXG4gICAgICAgIG1vdmVSaWdodEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1vdmVSaWdodCk7XG4gICAgICAgIG1vdmVMZWZ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbW92ZUxlZnQpO1xuICAgICAgICBjYXJkc0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgaGFuZGxlVG91Y2hTdGFydCk7XG4gICAgICAgIGNhcmRzQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGhhbmRsZVRvdWNoTW92ZSk7XG4gICAgICAgIGNhcmRzQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgaGFuZGxlVG91Y2hFbmQpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9yaWVudGF0aW9uY2hhbmdlXCIsICgpID0+e1xuICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBoYW5kbGVSZXNpemUoKVxuXG59KSgpOyJdfQ==
