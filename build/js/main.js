"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
(function () {
  var hrLeng = document.querySelector('#hrLeng');
  var enLeng = document.querySelector('#enLeng');
  var locale = 'en';
  if (hrLeng) locale = 'hr';
  if (enLeng) locale = 'en';
  var i18nData = {};
  var debug = true;
  // let userId;
  var userId = 99432;

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

  //     const cardsContainer = document.querySelector('.prize__list'),
  //         cards = document.querySelectorAll('.prize__list-item'),
  //         cardsWrap = document.querySelector('.prize__list-scroll'),
  //         moveRightButton = document.querySelector('.prize__slider-move-right'),
  //         moveLeftButton = document.querySelector('.prize__slider-move-left'),
  //         tabsContainer = document.querySelector('.prize__tabs'),
  //         isMobile = window.innerWidth < 600,
  //         totalCards = cards.length,
  //         cardWidth = cards[0].clientWidth,
  //         cardsMargin = (cardsWrap.clientWidth - cardWidth * totalCards) / (totalCards - 1),
  //         visibleSlides = isMobile ? 1 : Math.ceil(cardsContainer.clientWidth / (cardWidth + cardsMargin)),
  //         totalTabs = Math.ceil(totalCards / visibleSlides),
  //         tabWidth= visibleSlides * (cardWidth + cardsMargin)
  //
  //     let currentSlide = 1;
  //     let currentTab = 1;
  //     let cardsPosition = 0;
  //     let leftSlide;
  //     let rightSlide;
  //     console.log(totalTabs)
  //
  // // Створення табів
  //     for (let i = 1; i <= totalTabs; i++) {
  //         const tab = document.createElement('div');
  //         tab.classList.add('prize__tabs-item');
  //         tabsContainer.appendChild(tab);
  //     }
  //
  //     function leftSlideTab(){
  //         leftSlide = currentTab * visibleSlides - (visibleSlides - 1)
  //     }
  //     function rightSlideTab(){
  //         rightSlide = currentTab * visibleSlides
  //     }
  //
  //     function firstLastSlides(){
  //         if(isMobile) return
  //         leftSlideTab()
  //         rightSlideTab()
  //         cards.forEach((card , i) =>{
  //             i + 1 === leftSlide ? card.classList.add("_left") : card.classList.remove("_left")
  //             i + 1 === rightSlide ? card.classList.add("_right") : card.classList.remove("_right")
  //         })
  //     }
  //     firstLastSlides()
  //
  //     const updateActiveCard = (cards, activeIndex) => {
  //         cards.forEach((card, i) => {
  //             activeIndex - 1 === i ? card.classList.add("_active") : card.classList.remove("_active");
  //         });
  //     };
  //     updateActiveCard(cards, currentSlide);
  //
  //     const updateTabs = () => {
  //         if(isMobile){
  //             const activeTab = Math.ceil(currentSlide / visibleSlides);
  //             tabsContainer.childNodes.forEach((tab, index) => {
  //                 tab.classList.toggle('_active', index + 1 === activeTab);
  //             });
  //         }else{
  //             tabsContainer.childNodes.forEach((tab, index) => {
  //                 tab.classList.remove("_active")
  //                 console.log(currentTab, index)
  //                 index + 1 === currentTab ? tab.classList.add("_active") : null
  //             });
  //         }
  //
  //
  //     };
  //     updateTabs();
  //
  //     function setCardsPosition(position) {
  //         cardsWrap.style.transform = `translateX(-${position}px)`;
  //     };
  //
  //     const moveRight = () => {
  //         if (isMobile) {
  //             // Мобільна логіка
  //             if (currentSlide >= totalCards) {
  //                 currentSlide = 1;
  //                 cardsPosition = 0;
  //             } else {
  //                 cardsPosition += cardWidth + cardsMargin;
  //                 currentSlide++;
  //             }
  //         }
  //         else {
  //             if(currentTab === totalTabs){
  //                 cardsPosition = 0
  //                 currentTab = 1
  //             }else{
  //                 cardsPosition += tabWidth
  //                 ++currentTab
  //             }
  //         }
  //
  //         setCardsPosition(cardsPosition);
  //         updateTabs();
  //         updateActiveCard(cards, currentSlide);
  //             firstLastSlides()
  //         hidePopups(cards)

  //
  //     };
  //

  // const moveLeft = () => {
  //     if (isMobile) {
  //         // Мобільна логіка
  //         if (currentSlide === 1) {
  //             currentSlide = totalCards;
  //             cardsPosition = (totalCards - 1) * (cardWidth + cardsMargin);
  //         }else if(currentSlide === 2){
  //             currentSlide = 1;
  //             cardsPosition = 0
  //         }
  //         else {
  //             cardsPosition -= cardWidth + cardsMargin;
  //             currentSlide--;
  //         }
  //     } else {
  //
  //         if(currentTab === 1){
  //             currentTab = totalTabs
  //             cardsPosition = (currentTab * tabWidth) - tabWidth
  //         }else if(currentTab === 2){
  //             cardsPosition = 0
  //             currentTab = 1
  //         }
  //         else {
  //             cardsPosition -= tabWidth
  //             --currentTab
  //
  //         }
  //
  //     }
  //     setCardsPosition(cardsPosition);
  //     updateTabs();
  //     firstLastSlides()
  //     updateActiveCard(cards, currentSlide);
  //     hidePopups(cards)
  // };

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

      for (var _i = 0; _i < maxSnowflakes; _i++) {
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
          for (var _i2 = 0; _i2 < maxSnowflakes; _i2++) {
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiaHJMZW5nIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZW5MZW5nIiwibG9jYWxlIiwiaTE4bkRhdGEiLCJkZWJ1ZyIsInVzZXJJZCIsImNhcmRzQ29udGFpbmVyIiwiY2FyZHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2FyZHNXcmFwIiwibW92ZVJpZ2h0QnV0dG9uIiwibW92ZUxlZnRCdXR0b24iLCJ0YWJzQ29udGFpbmVyIiwiaXNNb2JpbGUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwidG90YWxDYXJkcyIsImxlbmd0aCIsImNhcmRXaWR0aCIsImNsaWVudFdpZHRoIiwiY2FyZHNNYXJnaW4iLCJ2aXNpYmxlU2xpZGVzIiwiTWF0aCIsImNlaWwiLCJ0b3RhbFRhYnMiLCJ0YWJXaWR0aCIsImN1cnJlbnRTbGlkZSIsImNhcmRzUG9zaXRpb24iLCJsZWZ0U2xpZGUiLCJyaWdodFNsaWRlIiwidXBkYXRlQWN0aXZlQ2FyZCIsImFjdGl2ZUluZGV4IiwiZm9yRWFjaCIsImNhcmQiLCJpIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwibGVmdFNsaWRlVGFiIiwicmlnaHRTbGlkZVRhYiIsImZpcnN0TGFzdFNsaWRlcyIsInNldENhcmRzUG9zaXRpb24iLCJwb3NpdGlvbiIsInN0eWxlIiwidHJhbnNmb3JtIiwibW92ZVJpZ2h0IiwibWF4UG9zaXRpb24iLCJoaWRlUG9wdXBzIiwibW92ZUxlZnQiLCJzZXRQb3B1cHMiLCJwb3B1cHMiLCJwb3B1cHNCdG5zIiwiYnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwb3B1cCIsImoiLCJwcml6ZU9wZW5CdG5zIiwicHJpemVDbG9zZUJ0bnMiLCJndWlkZVBvcHVwc1dyYXAiLCJndWlkZU9wZW5CdG5zIiwiZ3VpZGVDbG9zZUJ0bnMiLCJ0YWJsZVBvcHVwIiwidGFibGVQb3B1cENsb3NlIiwidGFibGVQb3B1cE9wZW4iLCJib2R5Iiwib3ZlcmZsb3ciLCJDT1VOVCIsIlNub3dzdG9ybSIsImVsZW1lbnQiLCJtYXN0aGVhZCIsImNhbnZhcyIsImNyZWF0ZUVsZW1lbnQiLCJjdHgiLCJnZXRDb250ZXh0Iiwid2lkdGgiLCJoZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJhY3RpdmUiLCJzbm93Zmxha2VzIiwiaW5pdCIsInByb3RvdHlwZSIsImxlZnQiLCJ0b3AiLCJhcHBlbmRDaGlsZCIsIm9uUmVzaXplIiwiYmluZCIsInNub3dmbGFrZSIsIlNub3dmbGFrZSIsInJlc2V0IiwicHVzaCIsInJlcXVlc3RBbmltRnJhbWUiLCJ1cGRhdGUiLCJmaWxsU3R5bGUiLCJ3YXNBY3RpdmUiLCJjbGVhclJlY3QiLCJ5IiwidnkiLCJ4IiwidngiLCJnbG9iYWxBbHBoYSIsIm8iLCJiZWdpblBhdGgiLCJhcmMiLCJyIiwiUEkiLCJjbG9zZVBhdGgiLCJmaWxsIiwic25vd3N0b3JtIiwicmFuZG9tIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwid2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2FsbGJhY2siLCJzZXRUaW1lb3V0Iiwic2tpZXMiLCJza3kiLCJiYWxsIiwicGFyZW50RWxlbWVudCIsIm1heFNub3dmbGFrZXMiLCJtYXhTcGVlZCIsInN0b3JtQ291bnRlciIsInNub3dmbGFrZXNSZW1vdmVkIiwicmFkaXVzIiwic3BlZWRYIiwic3BlZWRZIiwiYWNjZWxlcmF0aW9uIiwibW92aW5nVG9Cb3R0b20iLCJiYWxsWCIsImJhbGxZIiwiYmFsbFJhZGl1cyIsImJhbGxTaGFraW5nIiwidGFyZ2V0U3BlZWQiLCJzcGVlZERlY2F5RmFjdG9yIiwibWF4IiwibWluIiwiZHgiLCJkeSIsImRpc3RhbmNlIiwic3FydCIsImFuZ2xlIiwiYXRhbjIiLCJvdmVybGFwIiwiY29zIiwic2luIiwic3BsaWNlIiwiaW5kZXhPZiIsImxhc3RCYWxsU2hha2luZ1N0YXRlIiwiYW5pbWF0ZSIsImJhbGxUcmFuc2Zvcm0iLCJnZXRDb21wdXRlZFN0eWxlIiwib2Zmc2V0V2lkdGgiLCJtYXRyaXgiLCJET01NYXRyaXgiLCJvZmZzZXRMZWZ0IiwibTQxIiwib2Zmc2V0VG9wIiwibTQyIiwibW92ZVRvQm90dG9tIiwiZHJhdyIsInNlbmRTaGFrZVJlcXVlc3QiLCJQcm9taXNlIiwicmVzb2x2ZSIsInR5cGUiLCJwYXJhbXMiLCJ1c2VyaWQiLCJyZXF1ZXN0IiwibWV0aG9kIiwiSlNPTiIsInN0cmluZ2lmeSIsImJ0blNoYWtlIiwiYmFsbEJveCIsImFuaW1hdGVTaGFrZSIsImJveCIsInByaXplIiwiZGVsYXkiLCJtcyIsIndpbkNsYXNzZXMiLCJpbml0U2hha2UiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwic3RyZWFrQm9udXMiLCJlcnIiLCJoYW5kbGVSZXNpemUiLCJ0b3VjaFN0YXJ0WCIsInRvdWNoRW5kWCIsInRvdWNoU3RhcnRUaW1lIiwiaGFuZGxlVG91Y2hTdGFydCIsImV2ZW50IiwidG91Y2hlcyIsImNsaWVudFgiLCJEYXRlIiwibm93IiwiaGFuZGxlVG91Y2hNb3ZlIiwiaGFuZGxlVG91Y2hFbmQiLCJzd2lwZURpc3RhbmNlIiwic3dpcGVUaW1lIiwiYWJzIiwibG9jYXRpb24iLCJyZWxvYWQiXSwibWFwcGluZ3MiOiI7OzsrQ0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREEsQ0FBQyxZQUFZO0VBQ1QsSUFBTUEsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxTQUFTLENBQUM7RUFDaEQsSUFBTUMsTUFBTSxHQUFHRixRQUFRLENBQUNDLGFBQWEsQ0FBQyxTQUFTLENBQUM7RUFFaEQsSUFBSUUsTUFBTSxHQUFHLElBQUk7RUFFakIsSUFBSUosTUFBTSxFQUFFSSxNQUFNLEdBQUcsSUFBSTtFQUN6QixJQUFJRCxNQUFNLEVBQUVDLE1BQU0sR0FBRyxJQUFJO0VBR3pCLElBQUlDLFFBQVEsR0FBRyxDQUFDLENBQUM7RUFDakIsSUFBTUMsS0FBSyxHQUFHLElBQUk7RUFDbEI7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RUFBRTtJQUNyQixDQUFDLENBQUM7RUFDTixDQUFDO0VBRURoQixZQUFZLEVBQUU7QUFFbEIsQ0FBQyxHQUFHIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGhyTGVuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNockxlbmcnKTtcbiAgICBjb25zdCBlbkxlbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW5MZW5nJyk7XG5cbiAgICBsZXQgbG9jYWxlID0gJ2VuJztcblxuICAgIGlmIChockxlbmcpIGxvY2FsZSA9ICdocic7XG4gICAgaWYgKGVuTGVuZykgbG9jYWxlID0gJ2VuJztcblxuXG4gICAgbGV0IGkxOG5EYXRhID0ge307XG4gICAgY29uc3QgZGVidWcgPSB0cnVlO1xuICAgIC8vIGxldCB1c2VySWQ7XG4gICAgbGV0IHVzZXJJZCA9IDk5NDMyO1xuXG5cbiAgICAvLyBDYXJkcyBzbGlkZXJcbiAgICBjb25zdCBjYXJkc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcml6ZV9fbGlzdCcpLFxuICAgICAgICAgIGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByaXplX19saXN0LWl0ZW0nKSxcbiAgICAgICAgICBjYXJkc1dyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpemVfX2xpc3Qtc2Nyb2xsJyksXG4gICAgICAgICAgbW92ZVJpZ2h0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaXplX19zbGlkZXItbW92ZS1yaWdodCcpLFxuICAgICAgICAgIG1vdmVMZWZ0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaXplX19zbGlkZXItbW92ZS1sZWZ0JyksXG4gICAgICAgICAgdGFic0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcml6ZV9fdGFicycpLFxuICAgICAgICAgIGlzTW9iaWxlID0gd2luZG93LmlubmVyV2lkdGggPCA2MDAsXG4gICAgICAgICAgdG90YWxDYXJkcyA9IGNhcmRzLmxlbmd0aCxcbiAgICAgICAgICBjYXJkV2lkdGggPSBjYXJkc1swXS5jbGllbnRXaWR0aCxcbiAgICAgICAgICBjYXJkc01hcmdpbiA9IChjYXJkc1dyYXAuY2xpZW50V2lkdGggLSBjYXJkV2lkdGggKiB0b3RhbENhcmRzKSAvICh0b3RhbENhcmRzIC0gMSksXG4gICAgICAgICAgdmlzaWJsZVNsaWRlcyA9IGlzTW9iaWxlID8gMSA6IE1hdGguY2VpbChjYXJkc0NvbnRhaW5lci5jbGllbnRXaWR0aCAvIChjYXJkV2lkdGggKyBjYXJkc01hcmdpbikpLFxuICAgICAgICAgIHRvdGFsVGFicyA9IE1hdGguY2VpbCh0b3RhbENhcmRzIC8gdmlzaWJsZVNsaWRlcyksXG4gICAgICAgICAgdGFiV2lkdGg9IHZpc2libGVTbGlkZXMgKiAoY2FyZFdpZHRoICsgY2FyZHNNYXJnaW4pXG5cblxuICAgIGxldCBjdXJyZW50U2xpZGUgPSAxO1xuICAgIGxldCBjYXJkc1Bvc2l0aW9uID0gMDtcbiAgICBsZXQgbGVmdFNsaWRlO1xuICAgIGxldCByaWdodFNsaWRlO1xuXG4gICAgY29uc3QgdXBkYXRlQWN0aXZlQ2FyZCA9IChjYXJkcywgYWN0aXZlSW5kZXgpID0+IHtcbiAgICAgICAgY2FyZHMuZm9yRWFjaCgoY2FyZCwgaSkgPT57XG4gICAgICAgICAgICBhY3RpdmVJbmRleCAtIDEgPT09IGkgPyBjYXJkLmNsYXNzTGlzdC5hZGQoXCJfYWN0aXZlXCIpIDogY2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwiX2FjdGl2ZVwiKVxuICAgICAgICB9KVxuICAgIH1cbiAgICB1cGRhdGVBY3RpdmVDYXJkKGNhcmRzLCBjdXJyZW50U2xpZGUpXG5cbiAgICBmdW5jdGlvbiBsZWZ0U2xpZGVUYWIoKXtcbiAgICAgICAgbGVmdFNsaWRlID0gY3VycmVudFNsaWRlXG4gICAgfVxuICAgIGZ1bmN0aW9uIHJpZ2h0U2xpZGVUYWIoKXtcbiAgICAgICAgcmlnaHRTbGlkZSA9IGN1cnJlbnRTbGlkZSArICh2aXNpYmxlU2xpZGVzIC0gMSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmaXJzdExhc3RTbGlkZXMoKXtcbiAgICAgICAgaWYoaXNNb2JpbGUpIHJldHVyblxuICAgICAgICBsZWZ0U2xpZGVUYWIoKVxuICAgICAgICByaWdodFNsaWRlVGFiKClcbiAgICAgICAgY2FyZHMuZm9yRWFjaCgoY2FyZCAsIGkpID0+e1xuICAgICAgICAgICAgaSArIDEgPT09IGxlZnRTbGlkZSA/IGNhcmQuY2xhc3NMaXN0LmFkZChcIl9sZWZ0XCIpIDogY2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwiX2xlZnRcIilcbiAgICAgICAgICAgIGkgKyAxID09PSByaWdodFNsaWRlID8gY2FyZC5jbGFzc0xpc3QuYWRkKFwiX3JpZ2h0XCIpIDogY2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwiX3JpZ2h0XCIpXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGZpcnN0TGFzdFNsaWRlcygpXG5cbiAgICBmdW5jdGlvbiBzZXRDYXJkc1Bvc2l0aW9uIChwb3NpdGlvbikge1xuICAgICAgICBjYXJkc1dyYXAuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoLSR7cG9zaXRpb259cHgpYDtcbiAgICB9O1xuICAgIGNvbnN0IG1vdmVSaWdodCA9ICgpID0+IHtcblxuICAgICAgICBpZiAoY3VycmVudFNsaWRlID49IHRvdGFsQ2FyZHMgLSAodmlzaWJsZVNsaWRlcyAtIDEpICYmIGlzTW9iaWxlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgZmlyc3RMYXN0U2xpZGVzKClcbiAgICAgICAgICAgIGN1cnJlbnRTbGlkZSA9IDE7XG4gICAgICAgICAgICBjYXJkc1Bvc2l0aW9uID0gMDtcbiAgICAgICAgICAgIHJpZ2h0U2xpZGUrK1xuICAgICAgICAgICAgbGVmdFNsaWRlKytcbiAgICAgICAgfWVsc2UgaWYoY3VycmVudFNsaWRlID09PSB0b3RhbENhcmRzKSB7XG4gICAgICAgICAgICBjdXJyZW50U2xpZGUgPSAxO1xuICAgICAgICAgICAgY2FyZHNQb3NpdGlvbiA9IDA7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IG1heFBvc2l0aW9uID0gKHRvdGFsQ2FyZHMgLSB2aXNpYmxlU2xpZGVzKSAqIChjYXJkV2lkdGggKyBjYXJkc01hcmdpbik7XG4gICAgICAgICAgICBpZiAoY2FyZHNQb3NpdGlvbiArIGNhcmRXaWR0aCArIGNhcmRzTWFyZ2luID4gbWF4UG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgICBjYXJkc1Bvc2l0aW9uID0gbWF4UG9zaXRpb247XG4gICAgICAgICAgICAgICAgY3VycmVudFNsaWRlID0gdG90YWxDYXJkcyAtIHZpc2libGVTbGlkZXMgKyAxO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYXJkc1Bvc2l0aW9uICs9IGNhcmRXaWR0aCArIGNhcmRzTWFyZ2luO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRTbGlkZSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNldENhcmRzUG9zaXRpb24oY2FyZHNQb3NpdGlvbik7XG4gICAgICAgIHVwZGF0ZUFjdGl2ZUNhcmQoY2FyZHMsIGN1cnJlbnRTbGlkZSlcbiAgICAgICAgZmlyc3RMYXN0U2xpZGVzKClcbiAgICAgICAgaGlkZVBvcHVwcyhjYXJkcylcbiAgICB9O1xuICAgIGNvbnN0IG1vdmVMZWZ0ID0gKCkgPT4ge1xuICAgICAgICBpZihjdXJyZW50U2xpZGUgPT09IDEgJiYgaXNNb2JpbGUgPT09IGZhbHNlKXtcbiAgICAgICAgICAgIGN1cnJlbnRTbGlkZSA9IHRvdGFsQ2FyZHMgLSAodmlzaWJsZVNsaWRlcyAtIDEpO1xuICAgICAgICAgICAgY2FyZHNQb3NpdGlvbiA9ICgodG90YWxDYXJkcyAtICh2aXNpYmxlU2xpZGVzIC0gMSkpICogKGNhcmRXaWR0aCArIGNhcmRzTWFyZ2luKSkgLShjYXJkV2lkdGggKyBjYXJkc01hcmdpbik7XG4gICAgICAgIH1lbHNlIGlmIChjdXJyZW50U2xpZGUgPT09IDIpIHtcbiAgICAgICAgICAgIGNhcmRzUG9zaXRpb24gPSAwXG4gICAgICAgICAgICBjdXJyZW50U2xpZGUgPSAxXG4gICAgICAgIH1lbHNlIGlmKGN1cnJlbnRTbGlkZSA9PT0gMSAmJiBpc01vYmlsZSA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICBjdXJyZW50U2xpZGUgPSB0b3RhbENhcmRzXG4gICAgICAgICAgICBjYXJkc1Bvc2l0aW9uID0gdG90YWxDYXJkcyAgKiAoY2FyZFdpZHRoICsgY2FyZHNNYXJnaW4pIC0gKGNhcmRXaWR0aCArIGNhcmRzTWFyZ2luKVxuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICBjYXJkc1Bvc2l0aW9uIC09IGNhcmRXaWR0aCArIGNhcmRzTWFyZ2luO1xuICAgICAgICAgICAgY3VycmVudFNsaWRlLS1cbiAgICAgICAgfVxuICAgICAgICBzZXRDYXJkc1Bvc2l0aW9uKGNhcmRzUG9zaXRpb24pO1xuICAgICAgICB1cGRhdGVBY3RpdmVDYXJkKGNhcmRzLCBjdXJyZW50U2xpZGUpXG4gICAgICAgIGZpcnN0TGFzdFNsaWRlcygpXG4gICAgICAgIGhpZGVQb3B1cHMoY2FyZHMpXG4gICAgfTtcblxuLy8gICAgIGNvbnN0IGNhcmRzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaXplX19saXN0JyksXG4vLyAgICAgICAgIGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByaXplX19saXN0LWl0ZW0nKSxcbi8vICAgICAgICAgY2FyZHNXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaXplX19saXN0LXNjcm9sbCcpLFxuLy8gICAgICAgICBtb3ZlUmlnaHRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpemVfX3NsaWRlci1tb3ZlLXJpZ2h0JyksXG4vLyAgICAgICAgIG1vdmVMZWZ0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaXplX19zbGlkZXItbW92ZS1sZWZ0JyksXG4vLyAgICAgICAgIHRhYnNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpemVfX3RhYnMnKSxcbi8vICAgICAgICAgaXNNb2JpbGUgPSB3aW5kb3cuaW5uZXJXaWR0aCA8IDYwMCxcbi8vICAgICAgICAgdG90YWxDYXJkcyA9IGNhcmRzLmxlbmd0aCxcbi8vICAgICAgICAgY2FyZFdpZHRoID0gY2FyZHNbMF0uY2xpZW50V2lkdGgsXG4vLyAgICAgICAgIGNhcmRzTWFyZ2luID0gKGNhcmRzV3JhcC5jbGllbnRXaWR0aCAtIGNhcmRXaWR0aCAqIHRvdGFsQ2FyZHMpIC8gKHRvdGFsQ2FyZHMgLSAxKSxcbi8vICAgICAgICAgdmlzaWJsZVNsaWRlcyA9IGlzTW9iaWxlID8gMSA6IE1hdGguY2VpbChjYXJkc0NvbnRhaW5lci5jbGllbnRXaWR0aCAvIChjYXJkV2lkdGggKyBjYXJkc01hcmdpbikpLFxuLy8gICAgICAgICB0b3RhbFRhYnMgPSBNYXRoLmNlaWwodG90YWxDYXJkcyAvIHZpc2libGVTbGlkZXMpLFxuLy8gICAgICAgICB0YWJXaWR0aD0gdmlzaWJsZVNsaWRlcyAqIChjYXJkV2lkdGggKyBjYXJkc01hcmdpbilcbi8vXG4vLyAgICAgbGV0IGN1cnJlbnRTbGlkZSA9IDE7XG4vLyAgICAgbGV0IGN1cnJlbnRUYWIgPSAxO1xuLy8gICAgIGxldCBjYXJkc1Bvc2l0aW9uID0gMDtcbi8vICAgICBsZXQgbGVmdFNsaWRlO1xuLy8gICAgIGxldCByaWdodFNsaWRlO1xuLy8gICAgIGNvbnNvbGUubG9nKHRvdGFsVGFicylcbi8vXG4vLyAvLyDQodGC0LLQvtGA0LXQvdC90Y8g0YLQsNCx0ZbQslxuLy8gICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHRvdGFsVGFiczsgaSsrKSB7XG4vLyAgICAgICAgIGNvbnN0IHRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuLy8gICAgICAgICB0YWIuY2xhc3NMaXN0LmFkZCgncHJpemVfX3RhYnMtaXRlbScpO1xuLy8gICAgICAgICB0YWJzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhYik7XG4vLyAgICAgfVxuLy9cbi8vICAgICBmdW5jdGlvbiBsZWZ0U2xpZGVUYWIoKXtcbi8vICAgICAgICAgbGVmdFNsaWRlID0gY3VycmVudFRhYiAqIHZpc2libGVTbGlkZXMgLSAodmlzaWJsZVNsaWRlcyAtIDEpXG4vLyAgICAgfVxuLy8gICAgIGZ1bmN0aW9uIHJpZ2h0U2xpZGVUYWIoKXtcbi8vICAgICAgICAgcmlnaHRTbGlkZSA9IGN1cnJlbnRUYWIgKiB2aXNpYmxlU2xpZGVzXG4vLyAgICAgfVxuLy9cbi8vICAgICBmdW5jdGlvbiBmaXJzdExhc3RTbGlkZXMoKXtcbi8vICAgICAgICAgaWYoaXNNb2JpbGUpIHJldHVyblxuLy8gICAgICAgICBsZWZ0U2xpZGVUYWIoKVxuLy8gICAgICAgICByaWdodFNsaWRlVGFiKClcbi8vICAgICAgICAgY2FyZHMuZm9yRWFjaCgoY2FyZCAsIGkpID0+e1xuLy8gICAgICAgICAgICAgaSArIDEgPT09IGxlZnRTbGlkZSA/IGNhcmQuY2xhc3NMaXN0LmFkZChcIl9sZWZ0XCIpIDogY2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwiX2xlZnRcIilcbi8vICAgICAgICAgICAgIGkgKyAxID09PSByaWdodFNsaWRlID8gY2FyZC5jbGFzc0xpc3QuYWRkKFwiX3JpZ2h0XCIpIDogY2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwiX3JpZ2h0XCIpXG4vLyAgICAgICAgIH0pXG4vLyAgICAgfVxuLy8gICAgIGZpcnN0TGFzdFNsaWRlcygpXG4vL1xuLy8gICAgIGNvbnN0IHVwZGF0ZUFjdGl2ZUNhcmQgPSAoY2FyZHMsIGFjdGl2ZUluZGV4KSA9PiB7XG4vLyAgICAgICAgIGNhcmRzLmZvckVhY2goKGNhcmQsIGkpID0+IHtcbi8vICAgICAgICAgICAgIGFjdGl2ZUluZGV4IC0gMSA9PT0gaSA/IGNhcmQuY2xhc3NMaXN0LmFkZChcIl9hY3RpdmVcIikgOiBjYXJkLmNsYXNzTGlzdC5yZW1vdmUoXCJfYWN0aXZlXCIpO1xuLy8gICAgICAgICB9KTtcbi8vICAgICB9O1xuLy8gICAgIHVwZGF0ZUFjdGl2ZUNhcmQoY2FyZHMsIGN1cnJlbnRTbGlkZSk7XG4vL1xuLy8gICAgIGNvbnN0IHVwZGF0ZVRhYnMgPSAoKSA9PiB7XG4vLyAgICAgICAgIGlmKGlzTW9iaWxlKXtcbi8vICAgICAgICAgICAgIGNvbnN0IGFjdGl2ZVRhYiA9IE1hdGguY2VpbChjdXJyZW50U2xpZGUgLyB2aXNpYmxlU2xpZGVzKTtcbi8vICAgICAgICAgICAgIHRhYnNDb250YWluZXIuY2hpbGROb2Rlcy5mb3JFYWNoKCh0YWIsIGluZGV4KSA9PiB7XG4vLyAgICAgICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC50b2dnbGUoJ19hY3RpdmUnLCBpbmRleCArIDEgPT09IGFjdGl2ZVRhYik7XG4vLyAgICAgICAgICAgICB9KTtcbi8vICAgICAgICAgfWVsc2V7XG4vLyAgICAgICAgICAgICB0YWJzQ29udGFpbmVyLmNoaWxkTm9kZXMuZm9yRWFjaCgodGFiLCBpbmRleCkgPT4ge1xuLy8gICAgICAgICAgICAgICAgIHRhYi5jbGFzc0xpc3QucmVtb3ZlKFwiX2FjdGl2ZVwiKVxuLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRUYWIsIGluZGV4KVxuLy8gICAgICAgICAgICAgICAgIGluZGV4ICsgMSA9PT0gY3VycmVudFRhYiA/IHRhYi5jbGFzc0xpc3QuYWRkKFwiX2FjdGl2ZVwiKSA6IG51bGxcbi8vICAgICAgICAgICAgIH0pO1xuLy8gICAgICAgICB9XG4vL1xuLy9cbi8vICAgICB9O1xuLy8gICAgIHVwZGF0ZVRhYnMoKTtcbi8vXG4vLyAgICAgZnVuY3Rpb24gc2V0Q2FyZHNQb3NpdGlvbihwb3NpdGlvbikge1xuLy8gICAgICAgICBjYXJkc1dyYXAuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoLSR7cG9zaXRpb259cHgpYDtcbi8vICAgICB9O1xuLy9cbi8vICAgICBjb25zdCBtb3ZlUmlnaHQgPSAoKSA9PiB7XG4vLyAgICAgICAgIGlmIChpc01vYmlsZSkge1xuLy8gICAgICAgICAgICAgLy8g0JzQvtCx0ZbQu9GM0L3QsCDQu9C+0LPRltC60LBcbi8vICAgICAgICAgICAgIGlmIChjdXJyZW50U2xpZGUgPj0gdG90YWxDYXJkcykge1xuLy8gICAgICAgICAgICAgICAgIGN1cnJlbnRTbGlkZSA9IDE7XG4vLyAgICAgICAgICAgICAgICAgY2FyZHNQb3NpdGlvbiA9IDA7XG4vLyAgICAgICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgICAgIGNhcmRzUG9zaXRpb24gKz0gY2FyZFdpZHRoICsgY2FyZHNNYXJnaW47XG4vLyAgICAgICAgICAgICAgICAgY3VycmVudFNsaWRlKys7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgZWxzZSB7XG4vLyAgICAgICAgICAgICBpZihjdXJyZW50VGFiID09PSB0b3RhbFRhYnMpe1xuLy8gICAgICAgICAgICAgICAgIGNhcmRzUG9zaXRpb24gPSAwXG4vLyAgICAgICAgICAgICAgICAgY3VycmVudFRhYiA9IDFcbi8vICAgICAgICAgICAgIH1lbHNle1xuLy8gICAgICAgICAgICAgICAgIGNhcmRzUG9zaXRpb24gKz0gdGFiV2lkdGhcbi8vICAgICAgICAgICAgICAgICArK2N1cnJlbnRUYWJcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgfVxuLy9cbi8vICAgICAgICAgc2V0Q2FyZHNQb3NpdGlvbihjYXJkc1Bvc2l0aW9uKTtcbi8vICAgICAgICAgdXBkYXRlVGFicygpO1xuLy8gICAgICAgICB1cGRhdGVBY3RpdmVDYXJkKGNhcmRzLCBjdXJyZW50U2xpZGUpO1xuLy8gICAgICAgICAgICAgZmlyc3RMYXN0U2xpZGVzKClcbi8vICAgICAgICAgaGlkZVBvcHVwcyhjYXJkcylcblxuLy9cbi8vICAgICB9O1xuLy9cblxuXG4gICAgLy8gY29uc3QgbW92ZUxlZnQgPSAoKSA9PiB7XG4gICAgLy8gICAgIGlmIChpc01vYmlsZSkge1xuICAgIC8vICAgICAgICAgLy8g0JzQvtCx0ZbQu9GM0L3QsCDQu9C+0LPRltC60LBcbiAgICAvLyAgICAgICAgIGlmIChjdXJyZW50U2xpZGUgPT09IDEpIHtcbiAgICAvLyAgICAgICAgICAgICBjdXJyZW50U2xpZGUgPSB0b3RhbENhcmRzO1xuICAgIC8vICAgICAgICAgICAgIGNhcmRzUG9zaXRpb24gPSAodG90YWxDYXJkcyAtIDEpICogKGNhcmRXaWR0aCArIGNhcmRzTWFyZ2luKTtcbiAgICAvLyAgICAgICAgIH1lbHNlIGlmKGN1cnJlbnRTbGlkZSA9PT0gMil7XG4gICAgLy8gICAgICAgICAgICAgY3VycmVudFNsaWRlID0gMTtcbiAgICAvLyAgICAgICAgICAgICBjYXJkc1Bvc2l0aW9uID0gMFxuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICAgICAgZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgY2FyZHNQb3NpdGlvbiAtPSBjYXJkV2lkdGggKyBjYXJkc01hcmdpbjtcbiAgICAvLyAgICAgICAgICAgICBjdXJyZW50U2xpZGUtLTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAvL1xuICAgIC8vICAgICAgICAgaWYoY3VycmVudFRhYiA9PT0gMSl7XG4gICAgLy8gICAgICAgICAgICAgY3VycmVudFRhYiA9IHRvdGFsVGFic1xuICAgIC8vICAgICAgICAgICAgIGNhcmRzUG9zaXRpb24gPSAoY3VycmVudFRhYiAqIHRhYldpZHRoKSAtIHRhYldpZHRoXG4gICAgLy8gICAgICAgICB9ZWxzZSBpZihjdXJyZW50VGFiID09PSAyKXtcbiAgICAvLyAgICAgICAgICAgICBjYXJkc1Bvc2l0aW9uID0gMFxuICAgIC8vICAgICAgICAgICAgIGN1cnJlbnRUYWIgPSAxXG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgICBlbHNlIHtcbiAgICAvLyAgICAgICAgICAgICBjYXJkc1Bvc2l0aW9uIC09IHRhYldpZHRoXG4gICAgLy8gICAgICAgICAgICAgLS1jdXJyZW50VGFiXG4gICAgLy9cbiAgICAvLyAgICAgICAgIH1cbiAgICAvL1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIHNldENhcmRzUG9zaXRpb24oY2FyZHNQb3NpdGlvbik7XG4gICAgLy8gICAgIHVwZGF0ZVRhYnMoKTtcbiAgICAvLyAgICAgZmlyc3RMYXN0U2xpZGVzKClcbiAgICAvLyAgICAgdXBkYXRlQWN0aXZlQ2FyZChjYXJkcywgY3VycmVudFNsaWRlKTtcbiAgICAvLyAgICAgaGlkZVBvcHVwcyhjYXJkcylcbiAgICAvLyB9O1xuXG4gICAgLy8gcG9wdXBzIGxvZ2ljXG5cbiAgICBmdW5jdGlvbiBzZXRQb3B1cHMocG9wdXBzLCBwb3B1cHNCdG5zKSB7XG4gICAgICAgIHBvcHVwc0J0bnMuZm9yRWFjaCgoYnRuLCBpKSA9PiB7XG4gICAgICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgcG9wdXBzLmZvckVhY2goKHBvcHVwLCBqKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGkgPT09IGogPyBwb3B1cC5jbGFzc0xpc3QuYWRkKFwiX3BvcHVwXCIpIDogcG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcIl9wb3B1cFwiKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoaWRlUG9wdXBzKHBvcHVwcyl7XG4gICAgICAgIHBvcHVwcy5mb3JFYWNoKHBvcHVwID0+e1xuICAgICAgICAgICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwiX3BvcHVwXCIpXG4gICAgICAgIH0pXG4gICAgfVxuLy8gcG9wdXBzXG4gICAgY29uc3QgcHJpemVPcGVuQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJpemVfX2xpc3QtaXRlbS1idG5cIilcbiAgICBjb25zdCBwcml6ZUNsb3NlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJpemVfX2xpc3QtcG9wdXAtY2xvc2VcIilcbiAgICBjb25zdCBndWlkZVBvcHVwc1dyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmd1aWRlX19pdGVtXCIpXG4gICAgY29uc3QgZ3VpZGVPcGVuQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZ3VpZGVfX2l0ZW0taW5mby1idG5cIilcbiAgICBjb25zdCBndWlkZUNsb3NlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZ3VpZGVfX2l0ZW0tcG9wdXAtY2xvc2VcIilcbiAgICBjb25zdCB0YWJsZVBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YWJsZV9fcG9wdXBcIilcbiAgICBjb25zdCB0YWJsZVBvcHVwQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhYmxlX19wb3B1cC1jbG9zZVwiKVxuICAgIGNvbnN0IHRhYmxlUG9wdXBPcGVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YWJsZV9faW5mb1wiKVxuXG4gICAgc2V0UG9wdXBzKGNhcmRzLCBwcml6ZU9wZW5CdG5zKTtcbiAgICBzZXRQb3B1cHMoZ3VpZGVQb3B1cHNXcmFwLCBndWlkZU9wZW5CdG5zKTtcblxuICAgIGd1aWRlQ2xvc2VCdG5zLmZvckVhY2goYnRuID0+e1xuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcbiAgICAgICAgICAgIGhpZGVQb3B1cHMoZ3VpZGVQb3B1cHNXcmFwKVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIHByaXplQ2xvc2VCdG5zLmZvckVhY2goYnRuID0+e1xuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcbiAgICAgICAgICAgIGhpZGVQb3B1cHMoY2FyZHMpXG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGFibGVQb3B1cE9wZW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgIHRhYmxlUG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIilcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCJcbiAgICB9KTtcblxuICAgIHRhYmxlUG9wdXBDbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIHRhYmxlUG9wdXAuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiXG4gICAgfSk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PntcbiAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgQ09VTlQgPSA0MDA7XG5cbiAgICAgICAgZnVuY3Rpb24gU25vd3N0b3JtKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMubWFzdGhlYWQgPSBlbGVtZW50O1xuICAgICAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgICAgIHRoaXMud2lkdGggPSB0aGlzLm1hc3RoZWFkLmNsaWVudFdpZHRoO1xuICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLm1hc3RoZWFkLmNsaWVudEhlaWdodDtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnNub3dmbGFrZXMgPSBbXTtcblxuICAgICAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBTbm93c3Rvcm0ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5sZWZ0ID0gdGhpcy5jYW52YXMuc3R5bGUudG9wID0gJzAnO1xuICAgICAgICAgICAgdGhpcy5tYXN0aGVhZC5hcHBlbmRDaGlsZCh0aGlzLmNhbnZhcyk7XG5cbiAgICAgICAgICAgIHRoaXMub25SZXNpemUoKTtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uUmVzaXplLmJpbmQodGhpcyksIGZhbHNlKTtcblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBDT1VOVDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNub3dmbGFrZSA9IG5ldyB0aGlzLlNub3dmbGFrZSh0aGlzKTtcbiAgICAgICAgICAgICAgICBzbm93Zmxha2UucmVzZXQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNub3dmbGFrZXMucHVzaChzbm93Zmxha2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbUZyYW1lKHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIFNub3dzdG9ybS5wcm90b3R5cGUub25SZXNpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLndpZHRoID0gdGhpcy5tYXN0aGVhZC5jbGllbnRXaWR0aDtcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5tYXN0aGVhZC5jbGllbnRIZWlnaHQ7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHRoaXMud2lkdGg7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB0aGlzLmhlaWdodDtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICcjRkZGJztcblxuICAgICAgICAgICAgdmFyIHdhc0FjdGl2ZSA9IHRoaXMuYWN0aXZlO1xuICAgICAgICAgICAgdGhpcy5hY3RpdmUgPSB0aGlzLndpZHRoID4gODA7XG4gICAgICAgICAgICB0aGlzLndpZHRoID4gMjgwID8gQ09VTlQgPSAxNTAgOiBudWxsXG5cbiAgICAgICAgICAgIGlmICghd2FzQWN0aXZlICYmIHRoaXMuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1GcmFtZSh0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBTbm93c3Rvcm0ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgQ09VTlQ7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBzbm93Zmxha2UgPSB0aGlzLnNub3dmbGFrZXNbaV07XG4gICAgICAgICAgICAgICAgc25vd2ZsYWtlLnkgKz0gc25vd2ZsYWtlLnZ5O1xuICAgICAgICAgICAgICAgIHNub3dmbGFrZS54ICs9IHNub3dmbGFrZS52eDtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4Lmdsb2JhbEFscGhhID0gc25vd2ZsYWtlLm87XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguYXJjKHNub3dmbGFrZS54LCBzbm93Zmxha2UueSwgc25vd2ZsYWtlLnIsIDAsIE1hdGguUEkgKiAyLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHNub3dmbGFrZS55ID4gdGhpcy5oZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgc25vd2ZsYWtlLnJlc2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXF1ZXN0QW5pbUZyYW1lKHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xuICAgICAgICB9O1xuXG4gICAgICAgIFNub3dzdG9ybS5wcm90b3R5cGUuU25vd2ZsYWtlID0gZnVuY3Rpb24gKHNub3dzdG9ybSkge1xuICAgICAgICAgICAgdGhpcy5zbm93c3Rvcm0gPSBzbm93c3Rvcm07XG4gICAgICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgU25vd3N0b3JtLnByb3RvdHlwZS5Tbm93Zmxha2UucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy54ID0gTWF0aC5yYW5kb20oKSAqIHRoaXMuc25vd3N0b3JtLndpZHRoO1xuICAgICAgICAgICAgdGhpcy55ID0gTWF0aC5yYW5kb20oKSAqIC10aGlzLnNub3dzdG9ybS5oZWlnaHQ7XG4gICAgICAgICAgICB0aGlzLnZ5ID0gMC4zICsgTWF0aC5yYW5kb20oKSAqIDAuMDAwMDE7XG4gICAgICAgICAgICB0aGlzLnZ4ID0gMC42IC0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgICAgIHRoaXMuciA9IDEgKyBNYXRoLnJhbmRvbSgpICogMjtcbiAgICAgICAgICAgIHRoaXMubyA9IDE7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gc2hpbSBsYXllciB3aXRoIHNldFRpbWVvdXQgZmFsbGJhY2tcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltRnJhbWUgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgICAgICAgICB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgICAgICAgICAgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChjYWxsYmFjaywgMTAwMCAvIDYwKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICB9KSgpO1xuXG4gICAgICAgIC8vIEFwcGx5IFNub3dzdG9ybSB0byBhbGwgZWxlbWVudHMgd2l0aCB0aGUgY2xhc3MgJ3NreSdcbiAgICAgICAgdmFyIHNraWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNreScpO1xuICAgICAgICBza2llcy5mb3JFYWNoKGZ1bmN0aW9uIChza3kpIHtcbiAgICAgICAgICAgIG5ldyBTbm93c3Rvcm0oc2t5KTtcbiAgICAgICAgfSk7XG5cblxuXG4gICAgICAgIC8vIGJhbGwgc2hha2Ugc25vd1xuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc25vd0NhbnZhcycpO1xuICAgICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgY29uc3QgYmFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zcGhlcmUnKTtcblxuICAgICAgICBjYW52YXMud2lkdGggPSBjYW52YXMucGFyZW50RWxlbWVudC5jbGllbnRXaWR0aDtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGNhbnZhcy5wYXJlbnRFbGVtZW50LmNsaWVudEhlaWdodDtcblxuICAgICAgICBsZXQgc25vd2ZsYWtlcyA9IFtdO1xuICAgICAgICBjb25zdCBtYXhTbm93Zmxha2VzID0gMTAwO1xuICAgICAgICBjb25zdCBtYXhTcGVlZCA9IDc7IC8vINCc0LDQutGB0LjQvNCw0LvRjNC90LAg0YjQstC40LTQutGW0YHRgtGMINGB0L3RltC20LjQvdC60LhcbiAgICAgICAgbGV0IHN0b3JtQ291bnRlciA9IDFcblxuXG4gICAgICAgIGxldCBzbm93Zmxha2VzUmVtb3ZlZCA9IDA7XG5cbiAgICAgICAgY2xhc3MgU25vd2ZsYWtlIHtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgICAgIHRoaXMueCA9IE1hdGgucmFuZG9tKCkgKiBjYW52YXMud2lkdGg7XG4gICAgICAgICAgICAgICAgdGhpcy55ID0gTWF0aC5yYW5kb20oKSAqIGNhbnZhcy5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgdGhpcy5yYWRpdXMgPSBNYXRoLnJhbmRvbSgpICogMyArIDE7XG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlZFggPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiAxMDtcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVkWSA9IE1hdGgucmFuZG9tKCkgKiAxLjUgKyAxO1xuICAgICAgICAgICAgICAgIHRoaXMuYWNjZWxlcmF0aW9uID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmluZ1RvQm90dG9tID0gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVwZGF0ZShiYWxsWCwgYmFsbFksIGJhbGxSYWRpdXMsIGJhbGxTaGFraW5nKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubW92aW5nVG9Cb3R0b20pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0U3BlZWQgPSAwLjE7IC8vINCc0LDQu9C10L3RjNC60LAg0YjQstC40LTQutGW0YHRgtGMLCDQtNC+INGP0LrQvtGXINC/0YDQsNCz0L3QtdC80L5cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3BlZWREZWNheUZhY3RvciA9IDAuMDU7IC8vINCa0L7QtdGE0ZbRhtGW0ZTQvdGCINC00LvRjyDQv9C70LDQstC90L7Qs9C+INGB0L/QvtCy0ZbQu9GM0L3QtdC90L3Rj1xuXG4gICAgICAgICAgICAgICAgICAgIC8vINCf0LvQsNCy0L3QviDQvdCw0LHQu9C40LbQsNGU0LzQviDRiNCy0LjQtNC60ZbRgdGC0Ywg0LTQviB0YXJnZXRTcGVlZFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwZWVkWCA9IHRoaXMuc3BlZWRYIC0gKHRoaXMuc3BlZWRYIC0gdGFyZ2V0U3BlZWQpICogc3BlZWREZWNheUZhY3RvcjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGVlZFkgPSB0aGlzLnNwZWVkWSAtICh0aGlzLnNwZWVkWSAtIHRhcmdldFNwZWVkKSAqIHNwZWVkRGVjYXlGYWN0b3I7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8g0J7QvdC+0LLQu9C10L3QvdGPINC/0L7Qt9C40YbRltGXINGB0L3RltC20LjQvdC60LhcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55ICs9IHRoaXMuc3BlZWRZO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnkgPiBjYW52YXMuaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLnggKz0gdGhpcy5zcGVlZFg7XG4gICAgICAgICAgICAgICAgdGhpcy55ICs9IHRoaXMuc3BlZWRZO1xuXG4gICAgICAgICAgICAgICAgLy8g0J7QsdC80LXQttC10L3QvdGPINGI0LLQuNC00LrQvtGB0YLRllxuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWRYID0gTWF0aC5tYXgoLW1heFNwZWVkLCBNYXRoLm1pbihtYXhTcGVlZCwgdGhpcy5zcGVlZFgpKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVkWSA9IE1hdGgubWF4KC1tYXhTcGVlZCwgTWF0aC5taW4obWF4U3BlZWQsIHRoaXMuc3BlZWRZKSk7XG5cbiAgICAgICAgICAgICAgICAvLyDQlNC+0LTQsNCy0LDQvdC90Y8g0YjQstC40LTQutC+0YHRgtGWINGH0LXRgNC10LcgXCLRgtGA0YPRgdGW0L3QvdGPXCIg0LrRg9C70ZZcbiAgICAgICAgICAgICAgICBpZiAoYmFsbFNoYWtpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY2NlbGVyYXRpb24gKz0gMC4wNTsgLy8g0J3QsNGA0L7RidGD0LLQsNC90L3RjyDRiNCy0LjQtNC60L7RgdGC0ZZcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjY2VsZXJhdGlvbiAqPSAwLjk1OyAvLyDQn9C+0YHRgtGD0L/QvtCy0LUg0LfQvNC10L3RiNC10L3QvdGPXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWRYICs9IHRoaXMuYWNjZWxlcmF0aW9uICogKE1hdGgucmFuZG9tKCkgLSAwLjUpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWRZICs9IHRoaXMuYWNjZWxlcmF0aW9uICogKE1hdGgucmFuZG9tKCkgLSAwLjUpO1xuXG4gICAgICAgICAgICAgICAgLy8g0J/QtdGA0LXQstGW0YDQutCwINC90LAg0LzQtdC20ZYgY2FudmFzXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMueSA+IGNhbnZhcy5oZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54ID0gTWF0aC5yYW5kb20oKSAqIGNhbnZhcy53aWR0aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMueCA+IGNhbnZhcy53aWR0aCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnggPSAwO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy54IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnggPSBjYW52YXMud2lkdGg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8g0JLRltC00YHRgtCw0L3RjCDQtNC+INGG0LXQvdGC0YDRgyDQutGD0LvRllxuICAgICAgICAgICAgICAgIGNvbnN0IGR4ID0gdGhpcy54IC0gYmFsbFg7XG4gICAgICAgICAgICAgICAgY29uc3QgZHkgPSB0aGlzLnkgLSBiYWxsWTtcbiAgICAgICAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG5cbiAgICAgICAgICAgICAgICAvLyDQktGW0LTRgdC60L7QuiDQstGW0LQg0LrRg9C70ZZcbiAgICAgICAgICAgICAgICBpZiAoZGlzdGFuY2UgPCBiYWxsUmFkaXVzICsgdGhpcy5yYWRpdXMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYW5nbGUgPSBNYXRoLmF0YW4yKGR5LCBkeCk7IC8vINCa0YPRgiDQt9GW0YLQutC90LXQvdC90Y9cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3ZlcmxhcCA9IGJhbGxSYWRpdXMgKyB0aGlzLnJhZGl1cyAtIGRpc3RhbmNlO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vINCf0LXRgNC10LzRltGJ0LXQvdC90Y8g0YHQvdGW0LbQuNC90LrQuFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnggKz0gTWF0aC5jb3MoYW5nbGUpICogb3ZlcmxhcDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55ICs9IE1hdGguc2luKGFuZ2xlKSAqIG92ZXJsYXA7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8g0KDQtdCy0LXRgNGBINGI0LLQuNC00LrQvtGB0YLRllxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwZWVkWCAqPSAtMC43O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwZWVkWSAqPSAtMC43O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbW92ZVRvQm90dG9tKCkge1xuICAgICAgICAgICAgICAgIHRoaXMubW92aW5nVG9Cb3R0b20gPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZW1vdmUoKSB7XG4gICAgICAgICAgICAgICAgc25vd2ZsYWtlcy5zcGxpY2Uoc25vd2ZsYWtlcy5pbmRleE9mKHRoaXMpLCAxKTtcbiAgICAgICAgICAgICAgICBzbm93Zmxha2VzUmVtb3ZlZCsrO1xuICAgICAgICAgICAgICAgIGlmIChzdG9ybUNvdW50ZXIgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3IFNub3dzdG9ybShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNwaGVyZV9fYm9keVwiKSk7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JtQ291bnRlcisrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZHJhdygpIHtcbiAgICAgICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIDAsIE1hdGguUEkgKiAyKTtcbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gJ3doaXRlJztcbiAgICAgICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4vLyDQodC/0LDQstC90LjQvNC+INC90L7QstGWINGB0L3RltC20LjQvdC60Lgg0L/RgNC4INC30LzRltC90ZYg0YHRgtCw0L3RgyDQutGD0LvRllxuICAgICAgICBsZXQgbGFzdEJhbGxTaGFraW5nU3RhdGUgPSBmYWxzZTsgLy8g0JfQvNGW0L3QvdCwINC00LvRjyDQstGW0LTRgdGC0LXQttC10L3QvdGPINGB0YLQsNC90YMg0LrRg9C70ZZcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1heFNub3dmbGFrZXM7IGkrKykge1xuICAgICAgICAgICAgc25vd2ZsYWtlcy5wdXNoKG5ldyBTbm93Zmxha2UoKSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBhbmltYXRlKCkge1xuICAgICAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXG4gICAgICAgICAgICBjb25zdCBiYWxsVHJhbnNmb3JtID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoYmFsbCkudHJhbnNmb3JtO1xuICAgICAgICAgICAgbGV0IGJhbGxYID0gY2FudmFzLndpZHRoIC8gMjtcbiAgICAgICAgICAgIGxldCBiYWxsWSA9IGNhbnZhcy5oZWlnaHQgLyAyO1xuICAgICAgICAgICAgY29uc3QgYmFsbFJhZGl1cyA9IGJhbGwub2Zmc2V0V2lkdGggLyAyO1xuICAgICAgICAgICAgY29uc3QgYmFsbFNoYWtpbmcgPSBiYWxsVHJhbnNmb3JtICE9PSAnbm9uZSc7XG5cbiAgICAgICAgICAgIGlmIChiYWxsVHJhbnNmb3JtICE9PSAnbm9uZScpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtYXRyaXggPSBuZXcgRE9NTWF0cml4KGJhbGxUcmFuc2Zvcm0pO1xuICAgICAgICAgICAgICAgIGJhbGxYID0gYmFsbC5vZmZzZXRMZWZ0ICsgbWF0cml4Lm00MSArIGJhbGxSYWRpdXM7XG4gICAgICAgICAgICAgICAgYmFsbFkgPSBiYWxsLm9mZnNldFRvcCArIG1hdHJpeC5tNDIgKyBiYWxsUmFkaXVzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDQr9C60YnQviDRgdGC0LDQvSDQutGD0LvRliDQt9C80ZbQvdC40LLRgdGPINC90LAgXCLRgNGD0YVcIiwg0L/QtdGA0LXQt9Cw0L/Rg9GB0LrQsNGU0LzQviDRgdC90ZbQttC40L3QutC4XG4gICAgICAgICAgICBpZiAoYmFsbFNoYWtpbmcgJiYgIWxhc3RCYWxsU2hha2luZ1N0YXRlKSB7XG4gICAgICAgICAgICAgICAgLy8g0J7Rh9C40YnQsNGU0LzQviDQvNCw0YHQuNCyINGB0L3RltC20LjQvdC+0LpcbiAgICAgICAgICAgICAgICBzbm93Zmxha2VzID0gW107XG4gICAgICAgICAgICAgICAgc25vd2ZsYWtlc1JlbW92ZWQgPSAwO1xuICAgICAgICAgICAgICAgIC8vINCh0L/QsNCy0L3QuNC80L4g0L3QvtCy0ZYg0YHQvdGW0LbQuNC90LrQuFxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF4U25vd2ZsYWtlczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHNub3dmbGFrZXMucHVzaChuZXcgU25vd2ZsYWtlKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGFzdEJhbGxTaGFraW5nU3RhdGUgPSBiYWxsU2hha2luZztcblxuICAgICAgICAgICAgc25vd2ZsYWtlcy5mb3JFYWNoKHNub3dmbGFrZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFiYWxsU2hha2luZykgc25vd2ZsYWtlLm1vdmVUb0JvdHRvbSgpO1xuICAgICAgICAgICAgICAgIHNub3dmbGFrZS51cGRhdGUoYmFsbFgsIGJhbGxZLCBiYWxsUmFkaXVzLCBiYWxsU2hha2luZyk7XG4gICAgICAgICAgICAgICAgc25vd2ZsYWtlLmRyYXcoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBhbmltYXRlKCk7XG5cbiAgICB9KSgpO1xufSlcblxuLy8gc25vd2ZhbGwgYW5pbWF0aW9uXG5cblxuICAgIGxldCBpID0gMTtcbiAgICBmdW5jdGlvbiBzZW5kU2hha2VSZXF1ZXN0KCkge1xuICAgICAgICBpZiAoIXVzZXJJZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRlYnVnKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtcbiAgICAgICAgICAgICAgICAvLyBudW1iZXI6IGkrKyxcbiAgICAgICAgICAgICAgICB0eXBlOiAndGVzdCdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcGFyYW1zID0ge3VzZXJpZDogdXNlcklkfTtcbiAgICAgICAgcmV0dXJuIHJlcXVlc3QoJy9zcGluJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXJhbXMpXG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgY29uc3QgYnRuU2hha2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2dyZXNzX19zaGFrZVwiKVxuICAgIGNvbnN0IGJhbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNwaGVyZVwiKVxuICAgIGNvbnN0IGJhbGxCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNwaGVyZV9fYm94XCIpXG5cbiAgICBhc3luYyBmdW5jdGlvbiBhbmltYXRlU2hha2UoYmFsbCwgYm94LCBidG4sIHByaXplKSB7XG4gICAgICAgIGNvbnN0IGRlbGF5ID0gKG1zKSA9PiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKVxuXG4gICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiX2Rpc2FibGVkXCIpO1xuICAgICAgICBiYWxsLmNsYXNzTGlzdC5hZGQoXCJfc2hha2VcIik7XG4gICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwiX3NoYWtlLXJldmVyc2VcIik7XG5cbiAgICAgICAgYXdhaXQgZGVsYXkoMjAwMCk7XG5cbiAgICAgICAgYmFsbC5jbGFzc0xpc3QucmVtb3ZlKFwiX3NoYWtlXCIpO1xuICAgICAgICBiYWxsLmNsYXNzTGlzdC5hZGQoXCJfYmVmb3JlLWhpZGVcIik7XG4gICAgICAgIGJveC5jbGFzc0xpc3QucmVtb3ZlKFwiX3NoYWtlLXJldmVyc2VcIik7XG4gICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwiX2JveC1vcGFjaXR5XCIpO1xuXG4gICAgICAgIGF3YWl0IGRlbGF5KDIwMCk7XG5cbiAgICAgICAgYmFsbC5jbGFzc0xpc3QuYWRkKGAke3ByaXplfWApO1xuICAgIH1cblxuICAgIC8vINCa0L7QttC10L0g0LrQu9Cw0YEg0LLRltC00L/QvtCy0ZbQtNCw0ZQg0LLQuNCz0YDQsNC90L7QvNGDINC/0YDQuNC30YM6XG4gICAgLy8gXCJfaXBob25lXCIgLSDQstC40LPRgNCw0L3QviBpUGhvbmVcbiAgICAvLyBcIl90dlwiIC0g0LLQuNCz0YDQsNC90L4g0YLQtdC70LXQstGW0LfQvtGAXG4gICAgLy8gXCJfamJsXCIgLSDQstC40LPRgNCw0L3QviBKQkwt0LrQvtC70L7QvdC60YNcbiAgICAvLyBcIl9tZWdvZ29cIiAtINCy0LjQs9GA0LDQvdC+INC/0ZbQtNC/0LjRgdC60YMgTWVnb2dvXG4gICAgLy8gXCJfcmVzcGluXCIgLSDQtNC+0LTQsNGC0LrQvtCy0LUg0L7QsdC10YDRgtCw0L3QvdGPXG4gICAgLy8gXCJfbm90aGluZ1wiIC0g0L3RltGH0L7Qs9C+INC90LUg0LLQuNCz0YDQsNC90L5cbiAgICAvLyBcIl9wb2ludHM1MFwiIC0g0LLQuNCz0YDQsNC90L4gNTAg0LHQvtC90YPRgdC90LjRhSDQsdCw0LvRltCyXG4gICAgLy8gXCJfZnMxMFwiIC0g0LLQuNCz0YDQsNC90L4gMTAg0YTRgNGW0YHQv9GW0L3RltCyXG4gICAgLy8gXCJfZnMyNVwiIC0g0LLQuNCz0YDQsNC90L4gMjUg0YTRgNGW0YHQv9GW0L3RltCyXG4gICAgLy8gXCJfZnM1MFwiIC0g0LLQuNCz0YDQsNC90L4gNTAg0YTRgNGW0YHQv9GW0L3RltCyXG4gICAgLy8gXCJfc2F2ZUJldDEwMFwiIC0g0LLQuNCz0YDQsNC90L4g0YHRgtGA0LDRhdC+0LLQutGDINC90LAgMTAwINGB0YLQsNCy0L7QulxuICAgIC8vIFwiX3NhdmVCZXQxNTBcIiAtINCy0LjQs9GA0LDQvdC+INGB0YLRgNCw0YXQvtCy0LrRgyDQvdCwIDE1MCDRgdGC0LDQstC+0LpcbiAgICAvLyBcIl9zYXZlQmV0MjAwXCIgLSDQstC40LPRgNCw0L3QviDRgdGC0YDQsNGF0L7QstC60YMg0L3QsCAyMDAg0YHRgtCw0LLQvtC6XG4gICAgLy8g0YTRg9C90LrRhtGW0Y8gaW5pdFNoYWtlINC/0YDQvtC60LjQtNGD0ZQg0LrQu9Cw0YHQuCDQstGW0LTQv9C+0LLRltC00L3RliDQv9GA0LjQt9Cw0Lwg0L3QsCDQsdC70L7QuiAuc3BoZXJlINC00LvRjyDQstGW0LTQvtCx0YDQsNC20LXQvdC90Y8g0L/RgNC40LfRg1xuICAgIGNvbnN0IHdpbkNsYXNzZXMgPSBbXG4gICAgICAgIFwiX2lwaG9uZVwiLCBcIl90dlwiLCBcIl9qYmxcIiwgXCJfbWVnb2dvXCIsIFwiX3Jlc3BpblwiLCBcIl9ub3RoaW5nXCIsXG4gICAgICAgIFwiX3BvaW50czUwXCIsIFwiX2ZzMTBcIiwgXCJfZnMyNVwiLCBcIl9mczUwXCIsIFwiX3NhdmVCZXQxMDBcIiwgXCJfc2F2ZUJldDE1MFwiLCBcIl9zYXZlQmV0MjAwXCJcbiAgICBdO1xuICAgIGZ1bmN0aW9uIGluaXRTaGFrZShiYWxsLCBidG4sIGJveCkge1xuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICAgICAgc2VuZFNoYWtlUmVxdWVzdCgpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAgICAgICAgIGlmICghcmVzIHx8ICEhcmVzLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGJ0blNoYWtlLmNsYXNzTGlzdC5hZGQoJ3B1bHNlLWJ0bicpO1xuICAgICAgICAgICAgICAgICAgICBidG5TaGFrZS5jbGFzc0xpc3QucmVtb3ZlKCdfZGlzYWJsZWQnKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IHByaXplID0gcmVzLm51bWJlcjtcbiAgICAgICAgICAgICAgICBjb25zdCBwcml6ZSA9IHdpbkNsYXNzZXNbMTJdO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0cmVha0JvbnVzID0gcmVzLnN0cmVha0JvbnVzIHx8IGRlYnVnO1xuICAgICAgICAgICAgICAgIGFuaW1hdGVTaGFrZShiYWxsLCBib3gsIGJ0biwgcHJpemUpLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKFwiYW5pbSBlcnJvcjpcIiwgZXJyKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBpbml0U2hha2UoYmFsbCwgYnRuU2hha2UsIGJhbGxCb3gpXG5cbiAgICBjb25zdCBoYW5kbGVSZXNpemUgPSAoKSA9PntcbiAgICAgICAgbGV0IHRvdWNoU3RhcnRYID0gMDtcbiAgICAgICAgbGV0IHRvdWNoRW5kWCA9IDA7XG4gICAgICAgIGxldCB0b3VjaFN0YXJ0VGltZSA9IDA7IC8vINCn0LDRgSDQv9C+0YfQsNGC0LrRgyDQtNC+0YLQuNC60YNcblxuICAgICAgICBjb25zdCBoYW5kbGVUb3VjaFN0YXJ0ID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0b3VjaFN0YXJ0WCA9IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICAgICAgICAgIHRvdWNoU3RhcnRUaW1lID0gRGF0ZS5ub3coKTsgLy8g0JfQsNC/0LjRgdGD0ZTQvNC+INGH0LDRgSDQv9C+0YfQsNGC0LrRgyDQtNC+0YLQuNC60YNcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBoYW5kbGVUb3VjaE1vdmUgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRvdWNoRW5kWCA9IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBoYW5kbGVUb3VjaEVuZCA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN3aXBlRGlzdGFuY2UgPSB0b3VjaFN0YXJ0WCAtIHRvdWNoRW5kWDtcbiAgICAgICAgICAgIGNvbnN0IHN3aXBlVGltZSA9IERhdGUubm93KCkgLSB0b3VjaFN0YXJ0VGltZTsgLy8g0KLRgNC40LLQsNC70ZbRgdGC0Ywg0YHQstCw0LnQv9GDXG5cbiAgICAgICAgICAgIC8vINCk0ZbQu9GM0YLRgNCw0YbRltGPINC60LvRltC60ZbQsiDRgtCwINC90LXQutC+0YDQtdC60YLQvdC40YUg0YHQstCw0LnQv9GW0LJcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhzd2lwZURpc3RhbmNlKSA8IDUwIHx8IHN3aXBlVGltZSA+IDUwMCAmJiBzd2lwZVRpbWUgPiA1MCkge1xuICAgICAgICAgICAgICAgIC8vINCv0LrRidC+INGB0LLQsNC50L8g0LfQsNC90LDQtNGC0L4g0LrQvtGA0L7RgtC60LjQuSDQsNCx0L4g0L3QsNC00YLQviDQv9C+0LLRltC70YzQvdC40LksINC90LUg0LLQstCw0LbQsNGU0LzQviDQudC+0LPQviDRgdC/0YDQsNCy0LbQvdGW0LxcbiAgICAgICAgICAgICAgICB0b3VjaFN0YXJ0WCA9IDA7XG4gICAgICAgICAgICAgICAgdG91Y2hFbmRYID0gMDtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vINCf0LXRgNC10LLRltGA0Y/RlNC80L4g0L3QsNC/0YDRj9C80L7QuiDRgdCy0LDQudC/0YNcbiAgICAgICAgICAgIGlmIChzd2lwZURpc3RhbmNlID4gNTApIHtcbiAgICAgICAgICAgICAgICAvLyDQodCy0LDQudC/INC70ZbQstC+0YDRg9GHXG4gICAgICAgICAgICAgICAgbW92ZVJpZ2h0KCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHN3aXBlRGlzdGFuY2UgPCAtNTApIHtcbiAgICAgICAgICAgICAgICAvLyDQodCy0LDQudC/INC/0YDQsNCy0L7RgNGD0YdcbiAgICAgICAgICAgICAgICBtb3ZlTGVmdCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDQodC60LjQtNCw0ZTQvNC+INC30L3QsNGH0LXQvdC90Y9cbiAgICAgICAgICAgIHRvdWNoU3RhcnRYID0gMDtcbiAgICAgICAgICAgIHRvdWNoRW5kWCA9IDA7XG4gICAgICAgIH07XG5cblxuICAgICAgICBtb3ZlUmlnaHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtb3ZlUmlnaHQpO1xuICAgICAgICBtb3ZlTGVmdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1vdmVMZWZ0KTtcbiAgICAgICAgY2FyZHNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGhhbmRsZVRvdWNoU3RhcnQpO1xuICAgICAgICBjYXJkc0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBoYW5kbGVUb3VjaE1vdmUpO1xuICAgICAgICBjYXJkc0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGhhbmRsZVRvdWNoRW5kKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJvcmllbnRhdGlvbmNoYW5nZVwiLCAoKSA9PntcbiAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgaGFuZGxlUmVzaXplKClcblxufSkoKTsiXX0=
