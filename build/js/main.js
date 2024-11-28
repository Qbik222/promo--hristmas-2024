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
  // const cardsContainer = document.querySelector('.prize__list'),
  //       cards = document.querySelectorAll('.prize__list-item'),
  //       cardsWrap = document.querySelector('.prize__list-scroll'),
  //       moveRightButton = document.querySelector('.prize__slider-move-right'),
  //       moveLeftButton = document.querySelector('.prize__slider-move-left'),
  //       tabsContainer = document.querySelector('.prize__tabs'),
  //       isMobile = window.innerWidth < 600,
  //       totalCards = cards.length,
  //       cardWidth = cards[0].clientWidth,
  //       cardsMargin = (cardsWrap.clientWidth - cardWidth * totalCards) / (totalCards - 1),
  //       visibleSlides = isMobile ? 1 : Math.ceil(cardsContainer.clientWidth / (cardWidth + cardsMargin)),
  //       totalTabs = Math.ceil(totalCards / visibleSlides),
  //       tabWidth= visibleSlides * (cardWidth + cardsMargin)
  //
  // console.log(tabWidth)
  //
  // let currentSlide = 1;
  // let cardsPosition = 0
  //     for (let i = 1; i <= totalTabs; i++) {
  //         const tab = document.createElement('div');
  //         tab.classList.add('prize__tabs-item');
  //         tabsContainer.appendChild(tab);
  //     }
  //
  // const updateActiveCard = (cards, activeIndex) => {
  //     cards.forEach((card, i) =>{
  //         activeIndex - 1 === i ? card.classList.add("_active") : card.classList.remove("_active")
  //     })
  // }
  // updateActiveCard(cards, currentSlide)
  //
  // const updateTabs = () => {
  //     const activeTab = Math.ceil(currentSlide / visibleSlides);
  //     tabsContainer.childNodes.forEach((tab, index) => {
  //         tab.classList.toggle('_active', index + 1 === activeTab);
  //     });
  // };
  // updateTabs();
  // function setCardsPosition (position) {
  //     cardsWrap.style.transform = `translateX(-${position}px)`;
  // };
  // const moveRight = () => {
  //     if (currentSlide >= totalCards - visibleSlides && isMobile === false) {
  //         currentSlide = 1;
  //         cardsPosition = 0;
  //     }else if(currentSlide === totalCards) {
  //         currentSlide = 1;
  //         cardsPosition = 0;
  //     }else {
  //         const maxPosition = (totalCards - visibleSlides) * (cardWidth + cardsMargin);
  //         if (cardsPosition + cardWidth + cardsMargin > maxPosition) {
  //             cardsPosition = maxPosition;
  //             currentSlide = totalCards - visibleSlides + 1;
  //         } else {
  //             cardsPosition += cardWidth + cardsMargin;
  //             currentSlide++;
  //         }
  //     }
  //     setCardsPosition(cardsPosition);
  //     updateTabs();
  //     updateActiveCard(cards, currentSlide)
  // };
  // const moveLeft = () => {
  //     if(currentSlide === 1 && isMobile === false){
  //         currentSlide = totalCards - visibleSlides;
  //         cardsPosition = ((totalCards - visibleSlides) * (cardWidth + cardsMargin)) -(cardWidth + cardsMargin);
  //     }else if (currentSlide === 2) {
  //         cardsPosition = 0
  //         currentSlide = 1
  //     }else if(currentSlide === 1 && isMobile === true){
  //         currentSlide = totalCards
  //         cardsPosition = totalCards  * (cardWidth + cardsMargin) - (cardWidth + cardsMargin)
  //     }else {
  //         cardsPosition -= cardWidth + cardsMargin;
  //         currentSlide--
  //     }
  //     setCardsPosition(cardsPosition);
  //     updateTabs();
  //     updateActiveCard(cards, currentSlide)
  // };

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
  var currentTab = 1;
  var cardsPosition = 0;
  var leftSlide;
  var rightSlide;
  console.log(totalTabs);

  // Створення табів
  for (var _i = 1; _i <= totalTabs; _i++) {
    var tab = document.createElement('div');
    tab.classList.add('prize__tabs-item');
    tabsContainer.appendChild(tab);
  }
  function leftSlideTab() {
    leftSlide = currentTab * visibleSlides - (visibleSlides - 1);
  }
  function rightSlideTab() {
    rightSlide = currentTab * visibleSlides;
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
  var updateActiveCard = function updateActiveCard(cards, activeIndex) {
    cards.forEach(function (card, i) {
      activeIndex - 1 === i ? card.classList.add("_active") : card.classList.remove("_active");
    });
  };
  updateActiveCard(cards, currentSlide);
  var updateTabs = function updateTabs() {
    if (isMobile) {
      var activeTab = Math.ceil(currentSlide / visibleSlides);
      tabsContainer.childNodes.forEach(function (tab, index) {
        tab.classList.toggle('_active', index + 1 === activeTab);
      });
    } else {
      tabsContainer.childNodes.forEach(function (tab, index) {
        tab.classList.remove("_active");
        console.log(currentTab, index);
        index + 1 === currentTab ? tab.classList.add("_active") : null;
      });
    }
  };
  updateTabs();
  function setCardsPosition(position) {
    cardsWrap.style.transform = "translateX(-".concat(position, "px)");
  }
  ;
  var moveRight = function moveRight() {
    if (isMobile) {
      // Мобільна логіка
      if (currentSlide >= totalCards) {
        currentSlide = 1;
        cardsPosition = 0;
      } else {
        cardsPosition += cardWidth + cardsMargin;
        currentSlide++;
      }
    } else {
      if (currentTab === totalTabs) {
        cardsPosition = 0;
        currentTab = 1;
      } else {
        cardsPosition += tabWidth;
        ++currentTab;
      }
    }
    firstLastSlides();
    setCardsPosition(cardsPosition);
    updateTabs();
    updateActiveCard(cards, currentSlide);
    hidePopups(cards);
  };
  var moveLeft = function moveLeft() {
    if (isMobile) {
      // Мобільна логіка
      if (currentSlide === 1) {
        currentSlide = totalCards;
        cardsPosition = (totalCards - 1) * (cardWidth + cardsMargin);
      } else if (currentSlide === 2) {
        currentSlide = 1;
        cardsPosition = 0;
      } else {
        cardsPosition -= cardWidth + cardsMargin;
        currentSlide--;
      }
    } else {
      if (currentTab === 1) {
        currentTab = totalTabs;
        cardsPosition = currentTab * tabWidth - tabWidth;
      } else if (currentTab === 2) {
        cardsPosition = 0;
        currentTab = 1;
      } else {
        cardsPosition -= tabWidth;
        --currentTab;
      }
    }
    setCardsPosition(cardsPosition);
    updateTabs();
    firstLastSlides();
    updateActiveCard(cards, currentSlide);
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

  // snowfall animation
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
        var prize = "iphone";
        var streakBonus = res.streakBonus || debug;
        var delay = function delay(ms) {
          return new Promise(function (resolve) {
            return setTimeout(resolve, ms);
          });
        };
        if (prize === "iphone") {
          _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  btn.classList.add("_disabled");
                  ball.classList.add("_shake");
                  box.classList.add("_shake-reverse");
                  _context.next = 5;
                  return delay(2000);
                case 5:
                  ball.classList.remove("_shake");
                  ball.classList.add("_before-hide");
                  box.classList.remove("_shake-reverse");
                  box.classList.add("_box-opacity");
                  _context.next = 11;
                  return delay(200);
                case 11:
                  ball.classList.add("_".concat(prize));
                case 12:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }))();
        }
        // if(prize === "respin"){
        //     sections.addEventListener("animationend", () => showPopup(sections, wheel, "_bonus", streakBonus, spinBg, popupCloseBtn, popupContainer, popup, "respin"), {once: true})
        //     spinWheel(72.5, "respinAnim", sections, btn, wheel, arrow, prize, spinBg, salut)
        // }
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiaHJMZW5nIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZW5MZW5nIiwibG9jYWxlIiwiaTE4bkRhdGEiLCJkZWJ1ZyIsInVzZXJJZCIsImNhcmRzQ29udGFpbmVyIiwiY2FyZHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2FyZHNXcmFwIiwibW92ZVJpZ2h0QnV0dG9uIiwibW92ZUxlZnRCdXR0b24iLCJ0YWJzQ29udGFpbmVyIiwiaXNNb2JpbGUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwidG90YWxDYXJkcyIsImxlbmd0aCIsImNhcmRXaWR0aCIsImNsaWVudFdpZHRoIiwiY2FyZHNNYXJnaW4iLCJ2aXNpYmxlU2xpZGVzIiwiTWF0aCIsImNlaWwiLCJ0b3RhbFRhYnMiLCJ0YWJXaWR0aCIsImN1cnJlbnRTbGlkZSIsImN1cnJlbnRUYWIiLCJjYXJkc1Bvc2l0aW9uIiwibGVmdFNsaWRlIiwicmlnaHRTbGlkZSIsImNvbnNvbGUiLCJsb2ciLCJpIiwidGFiIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZENoaWxkIiwibGVmdFNsaWRlVGFiIiwicmlnaHRTbGlkZVRhYiIsImZpcnN0TGFzdFNsaWRlcyIsImZvckVhY2giLCJjYXJkIiwicmVtb3ZlIiwidXBkYXRlQWN0aXZlQ2FyZCIsImFjdGl2ZUluZGV4IiwidXBkYXRlVGFicyIsImFjdGl2ZVRhYiIsImNoaWxkTm9kZXMiLCJpbmRleCIsInRvZ2dsZSIsInNldENhcmRzUG9zaXRpb24iLCJwb3NpdGlvbiIsInN0eWxlIiwidHJhbnNmb3JtIiwibW92ZVJpZ2h0IiwiaGlkZVBvcHVwcyIsIm1vdmVMZWZ0Iiwic2V0UG9wdXBzIiwicG9wdXBzIiwicG9wdXBzQnRucyIsImJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicG9wdXAiLCJqIiwicHJpemVPcGVuQnRucyIsInByaXplQ2xvc2VCdG5zIiwiZ3VpZGVQb3B1cHNXcmFwIiwiZ3VpZGVPcGVuQnRucyIsImd1aWRlQ2xvc2VCdG5zIiwidGFibGVQb3B1cCIsInRhYmxlUG9wdXBDbG9zZSIsInRhYmxlUG9wdXBPcGVuIiwiYm9keSIsIm92ZXJmbG93IiwiQ09VTlQiLCJTbm93c3Rvcm0iLCJlbGVtZW50IiwibWFzdGhlYWQiLCJjYW52YXMiLCJjdHgiLCJnZXRDb250ZXh0Iiwid2lkdGgiLCJoZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJhY3RpdmUiLCJzbm93Zmxha2VzIiwiaW5pdCIsInByb3RvdHlwZSIsImxlZnQiLCJ0b3AiLCJvblJlc2l6ZSIsImJpbmQiLCJzbm93Zmxha2UiLCJTbm93Zmxha2UiLCJyZXNldCIsInB1c2giLCJyZXF1ZXN0QW5pbUZyYW1lIiwidXBkYXRlIiwiZmlsbFN0eWxlIiwid2FzQWN0aXZlIiwiY2xlYXJSZWN0IiwieSIsInZ5IiwieCIsInZ4IiwiZ2xvYmFsQWxwaGEiLCJvIiwiYmVnaW5QYXRoIiwiYXJjIiwiciIsIlBJIiwiY2xvc2VQYXRoIiwiZmlsbCIsInNub3dzdG9ybSIsInJhbmRvbSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1velJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbGxiYWNrIiwic2V0VGltZW91dCIsInNraWVzIiwic2t5IiwiYmFsbCIsInBhcmVudEVsZW1lbnQiLCJtYXhTbm93Zmxha2VzIiwibWF4U3BlZWQiLCJzdG9ybUNvdW50ZXIiLCJzbm93Zmxha2VzUmVtb3ZlZCIsInJhZGl1cyIsInNwZWVkWCIsInNwZWVkWSIsImFjY2VsZXJhdGlvbiIsIm1vdmluZ1RvQm90dG9tIiwiYmFsbFgiLCJiYWxsWSIsImJhbGxSYWRpdXMiLCJiYWxsU2hha2luZyIsInRhcmdldFNwZWVkIiwic3BlZWREZWNheUZhY3RvciIsIm1heCIsIm1pbiIsImR4IiwiZHkiLCJkaXN0YW5jZSIsInNxcnQiLCJhbmdsZSIsImF0YW4yIiwib3ZlcmxhcCIsImNvcyIsInNpbiIsInNwbGljZSIsImluZGV4T2YiLCJsYXN0QmFsbFNoYWtpbmdTdGF0ZSIsImFuaW1hdGUiLCJiYWxsVHJhbnNmb3JtIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIm9mZnNldFdpZHRoIiwibWF0cml4IiwiRE9NTWF0cml4Iiwib2Zmc2V0TGVmdCIsIm00MSIsIm9mZnNldFRvcCIsIm00MiIsIm1vdmVUb0JvdHRvbSIsImRyYXciLCJzZW5kU2hha2VSZXF1ZXN0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0eXBlIiwicGFyYW1zIiwidXNlcmlkIiwicmVxdWVzdCIsIm1ldGhvZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJidG5TaGFrZSIsImJhbGxCb3giLCJpbml0U2hha2UiLCJib3giLCJ0aGVuIiwicmVzIiwiZXJyb3IiLCJwcml6ZSIsInN0cmVha0JvbnVzIiwiZGVsYXkiLCJtcyIsImhhbmRsZVJlc2l6ZSIsInRvdWNoU3RhcnRYIiwidG91Y2hFbmRYIiwidG91Y2hTdGFydFRpbWUiLCJoYW5kbGVUb3VjaFN0YXJ0IiwiZXZlbnQiLCJ0b3VjaGVzIiwiY2xpZW50WCIsIkRhdGUiLCJub3ciLCJoYW5kbGVUb3VjaE1vdmUiLCJoYW5kbGVUb3VjaEVuZCIsInN3aXBlRGlzdGFuY2UiLCJzd2lwZVRpbWUiLCJhYnMiLCJsb2NhdGlvbiIsInJlbG9hZCJdLCJtYXBwaW5ncyI6Ijs7OytDQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQSxDQUFDLFlBQVk7RUFDVCxJQUFNQSxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFNBQVMsQ0FBQztFQUNoRCxJQUFNQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFNBQVMsQ0FBQztFQUVoRCxJQUFJRSxNQUFNLEdBQUcsSUFBSTtFQUVqQixJQUFJSixNQUFNLEVBQUVJLE1BQU0sR0FBRyxJQUFJO0VBQ3pCLElBQUlELE1BQU0sRUFBRUMsTUFBTSxHQUFHLElBQUk7RUFHekIsSUFBSUMsUUFBUSxHQUFHLENBQUMsQ0FBQztFQUNqQixJ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Q0FBQyxtQkFBbUIsRUFBRSxZQUFLO01BQzlDNkksUUFBUSxDQUFDQyxNQUFNLEVBQUU7SUFDckIsQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUVEaEIsWUFBWSxFQUFFO0FBRWxCLENBQUMsR0FBRyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBockxlbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaHJMZW5nJyk7XG4gICAgY29uc3QgZW5MZW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VuTGVuZycpO1xuXG4gICAgbGV0IGxvY2FsZSA9ICdlbic7XG5cbiAgICBpZiAoaHJMZW5nKSBsb2NhbGUgPSAnaHInO1xuICAgIGlmIChlbkxlbmcpIGxvY2FsZSA9ICdlbic7XG5cblxuICAgIGxldCBpMThuRGF0YSA9IHt9O1xuICAgIGNvbnN0IGRlYnVnID0gdHJ1ZTtcbiAgICAvLyBsZXQgdXNlcklkO1xuICAgIGxldCB1c2VySWQgPSA5OTQzMjtcblxuXG4gICAgLy8gQ2FyZHMgc2xpZGVyXG4gICAgLy8gY29uc3QgY2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpemVfX2xpc3QnKSxcbiAgICAvLyAgICAgICBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcml6ZV9fbGlzdC1pdGVtJyksXG4gICAgLy8gICAgICAgY2FyZHNXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaXplX19saXN0LXNjcm9sbCcpLFxuICAgIC8vICAgICAgIG1vdmVSaWdodEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcml6ZV9fc2xpZGVyLW1vdmUtcmlnaHQnKSxcbiAgICAvLyAgICAgICBtb3ZlTGVmdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcml6ZV9fc2xpZGVyLW1vdmUtbGVmdCcpLFxuICAgIC8vICAgICAgIHRhYnNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpemVfX3RhYnMnKSxcbiAgICAvLyAgICAgICBpc01vYmlsZSA9IHdpbmRvdy5pbm5lcldpZHRoIDwgNjAwLFxuICAgIC8vICAgICAgIHRvdGFsQ2FyZHMgPSBjYXJkcy5sZW5ndGgsXG4gICAgLy8gICAgICAgY2FyZFdpZHRoID0gY2FyZHNbMF0uY2xpZW50V2lkdGgsXG4gICAgLy8gICAgICAgY2FyZHNNYXJnaW4gPSAoY2FyZHNXcmFwLmNsaWVudFdpZHRoIC0gY2FyZFdpZHRoICogdG90YWxDYXJkcykgLyAodG90YWxDYXJkcyAtIDEpLFxuICAgIC8vICAgICAgIHZpc2libGVTbGlkZXMgPSBpc01vYmlsZSA/IDEgOiBNYXRoLmNlaWwoY2FyZHNDb250YWluZXIuY2xpZW50V2lkdGggLyAoY2FyZFdpZHRoICsgY2FyZHNNYXJnaW4pKSxcbiAgICAvLyAgICAgICB0b3RhbFRhYnMgPSBNYXRoLmNlaWwodG90YWxDYXJkcyAvIHZpc2libGVTbGlkZXMpLFxuICAgIC8vICAgICAgIHRhYldpZHRoPSB2aXNpYmxlU2xpZGVzICogKGNhcmRXaWR0aCArIGNhcmRzTWFyZ2luKVxuICAgIC8vXG4gICAgLy8gY29uc29sZS5sb2codGFiV2lkdGgpXG4gICAgLy9cbiAgICAvLyBsZXQgY3VycmVudFNsaWRlID0gMTtcbiAgICAvLyBsZXQgY2FyZHNQb3NpdGlvbiA9IDBcbiAgICAvLyAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gdG90YWxUYWJzOyBpKyspIHtcbiAgICAvLyAgICAgICAgIGNvbnN0IHRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIC8vICAgICAgICAgdGFiLmNsYXNzTGlzdC5hZGQoJ3ByaXplX190YWJzLWl0ZW0nKTtcbiAgICAvLyAgICAgICAgIHRhYnNDb250YWluZXIuYXBwZW5kQ2hpbGQodGFiKTtcbiAgICAvLyAgICAgfVxuICAgIC8vXG4gICAgLy8gY29uc3QgdXBkYXRlQWN0aXZlQ2FyZCA9IChjYXJkcywgYWN0aXZlSW5kZXgpID0+IHtcbiAgICAvLyAgICAgY2FyZHMuZm9yRWFjaCgoY2FyZCwgaSkgPT57XG4gICAgLy8gICAgICAgICBhY3RpdmVJbmRleCAtIDEgPT09IGkgPyBjYXJkLmNsYXNzTGlzdC5hZGQoXCJfYWN0aXZlXCIpIDogY2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwiX2FjdGl2ZVwiKVxuICAgIC8vICAgICB9KVxuICAgIC8vIH1cbiAgICAvLyB1cGRhdGVBY3RpdmVDYXJkKGNhcmRzLCBjdXJyZW50U2xpZGUpXG4gICAgLy9cbiAgICAvLyBjb25zdCB1cGRhdGVUYWJzID0gKCkgPT4ge1xuICAgIC8vICAgICBjb25zdCBhY3RpdmVUYWIgPSBNYXRoLmNlaWwoY3VycmVudFNsaWRlIC8gdmlzaWJsZVNsaWRlcyk7XG4gICAgLy8gICAgIHRhYnNDb250YWluZXIuY2hpbGROb2Rlcy5mb3JFYWNoKCh0YWIsIGluZGV4KSA9PiB7XG4gICAgLy8gICAgICAgICB0YWIuY2xhc3NMaXN0LnRvZ2dsZSgnX2FjdGl2ZScsIGluZGV4ICsgMSA9PT0gYWN0aXZlVGFiKTtcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gfTtcbiAgICAvLyB1cGRhdGVUYWJzKCk7XG4gICAgLy8gZnVuY3Rpb24gc2V0Q2FyZHNQb3NpdGlvbiAocG9zaXRpb24pIHtcbiAgICAvLyAgICAgY2FyZHNXcmFwLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKC0ke3Bvc2l0aW9ufXB4KWA7XG4gICAgLy8gfTtcbiAgICAvLyBjb25zdCBtb3ZlUmlnaHQgPSAoKSA9PiB7XG4gICAgLy8gICAgIGlmIChjdXJyZW50U2xpZGUgPj0gdG90YWxDYXJkcyAtIHZpc2libGVTbGlkZXMgJiYgaXNNb2JpbGUgPT09IGZhbHNlKSB7XG4gICAgLy8gICAgICAgICBjdXJyZW50U2xpZGUgPSAxO1xuICAgIC8vICAgICAgICAgY2FyZHNQb3NpdGlvbiA9IDA7XG4gICAgLy8gICAgIH1lbHNlIGlmKGN1cnJlbnRTbGlkZSA9PT0gdG90YWxDYXJkcykge1xuICAgIC8vICAgICAgICAgY3VycmVudFNsaWRlID0gMTtcbiAgICAvLyAgICAgICAgIGNhcmRzUG9zaXRpb24gPSAwO1xuICAgIC8vICAgICB9ZWxzZSB7XG4gICAgLy8gICAgICAgICBjb25zdCBtYXhQb3NpdGlvbiA9ICh0b3RhbENhcmRzIC0gdmlzaWJsZVNsaWRlcykgKiAoY2FyZFdpZHRoICsgY2FyZHNNYXJnaW4pO1xuICAgIC8vICAgICAgICAgaWYgKGNhcmRzUG9zaXRpb24gKyBjYXJkV2lkdGggKyBjYXJkc01hcmdpbiA+IG1heFBvc2l0aW9uKSB7XG4gICAgLy8gICAgICAgICAgICAgY2FyZHNQb3NpdGlvbiA9IG1heFBvc2l0aW9uO1xuICAgIC8vICAgICAgICAgICAgIGN1cnJlbnRTbGlkZSA9IHRvdGFsQ2FyZHMgLSB2aXNpYmxlU2xpZGVzICsgMTtcbiAgICAvLyAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgY2FyZHNQb3NpdGlvbiArPSBjYXJkV2lkdGggKyBjYXJkc01hcmdpbjtcbiAgICAvLyAgICAgICAgICAgICBjdXJyZW50U2xpZGUrKztcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBzZXRDYXJkc1Bvc2l0aW9uKGNhcmRzUG9zaXRpb24pO1xuICAgIC8vICAgICB1cGRhdGVUYWJzKCk7XG4gICAgLy8gICAgIHVwZGF0ZUFjdGl2ZUNhcmQoY2FyZHMsIGN1cnJlbnRTbGlkZSlcbiAgICAvLyB9O1xuICAgIC8vIGNvbnN0IG1vdmVMZWZ0ID0gKCkgPT4ge1xuICAgIC8vICAgICBpZihjdXJyZW50U2xpZGUgPT09IDEgJiYgaXNNb2JpbGUgPT09IGZhbHNlKXtcbiAgICAvLyAgICAgICAgIGN1cnJlbnRTbGlkZSA9IHRvdGFsQ2FyZHMgLSB2aXNpYmxlU2xpZGVzO1xuICAgIC8vICAgICAgICAgY2FyZHNQb3NpdGlvbiA9ICgodG90YWxDYXJkcyAtIHZpc2libGVTbGlkZXMpICogKGNhcmRXaWR0aCArIGNhcmRzTWFyZ2luKSkgLShjYXJkV2lkdGggKyBjYXJkc01hcmdpbik7XG4gICAgLy8gICAgIH1lbHNlIGlmIChjdXJyZW50U2xpZGUgPT09IDIpIHtcbiAgICAvLyAgICAgICAgIGNhcmRzUG9zaXRpb24gPSAwXG4gICAgLy8gICAgICAgICBjdXJyZW50U2xpZGUgPSAxXG4gICAgLy8gICAgIH1lbHNlIGlmKGN1cnJlbnRTbGlkZSA9PT0gMSAmJiBpc01vYmlsZSA9PT0gdHJ1ZSl7XG4gICAgLy8gICAgICAgICBjdXJyZW50U2xpZGUgPSB0b3RhbENhcmRzXG4gICAgLy8gICAgICAgICBjYXJkc1Bvc2l0aW9uID0gdG90YWxDYXJkcyAgKiAoY2FyZFdpZHRoICsgY2FyZHNNYXJnaW4pIC0gKGNhcmRXaWR0aCArIGNhcmRzTWFyZ2luKVxuICAgIC8vICAgICB9ZWxzZSB7XG4gICAgLy8gICAgICAgICBjYXJkc1Bvc2l0aW9uIC09IGNhcmRXaWR0aCArIGNhcmRzTWFyZ2luO1xuICAgIC8vICAgICAgICAgY3VycmVudFNsaWRlLS1cbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBzZXRDYXJkc1Bvc2l0aW9uKGNhcmRzUG9zaXRpb24pO1xuICAgIC8vICAgICB1cGRhdGVUYWJzKCk7XG4gICAgLy8gICAgIHVwZGF0ZUFjdGl2ZUNhcmQoY2FyZHMsIGN1cnJlbnRTbGlkZSlcbiAgICAvLyB9O1xuXG4gICAgY29uc3QgY2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpemVfX2xpc3QnKSxcbiAgICAgICAgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJpemVfX2xpc3QtaXRlbScpLFxuICAgICAgICBjYXJkc1dyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpemVfX2xpc3Qtc2Nyb2xsJyksXG4gICAgICAgIG1vdmVSaWdodEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcml6ZV9fc2xpZGVyLW1vdmUtcmlnaHQnKSxcbiAgICAgICAgbW92ZUxlZnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpemVfX3NsaWRlci1tb3ZlLWxlZnQnKSxcbiAgICAgICAgdGFic0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcml6ZV9fdGFicycpLFxuICAgICAgICBpc01vYmlsZSA9IHdpbmRvdy5pbm5lcldpZHRoIDwgNjAwLFxuICAgICAgICB0b3RhbENhcmRzID0gY2FyZHMubGVuZ3RoLFxuICAgICAgICBjYXJkV2lkdGggPSBjYXJkc1swXS5jbGllbnRXaWR0aCxcbiAgICAgICAgY2FyZHNNYXJnaW4gPSAoY2FyZHNXcmFwLmNsaWVudFdpZHRoIC0gY2FyZFdpZHRoICogdG90YWxDYXJkcykgLyAodG90YWxDYXJkcyAtIDEpLFxuICAgICAgICB2aXNpYmxlU2xpZGVzID0gaXNNb2JpbGUgPyAxIDogTWF0aC5jZWlsKGNhcmRzQ29udGFpbmVyLmNsaWVudFdpZHRoIC8gKGNhcmRXaWR0aCArIGNhcmRzTWFyZ2luKSksXG4gICAgICAgIHRvdGFsVGFicyA9IE1hdGguY2VpbCh0b3RhbENhcmRzIC8gdmlzaWJsZVNsaWRlcyksXG4gICAgICAgIHRhYldpZHRoPSB2aXNpYmxlU2xpZGVzICogKGNhcmRXaWR0aCArIGNhcmRzTWFyZ2luKVxuXG4gICAgbGV0IGN1cnJlbnRTbGlkZSA9IDE7XG4gICAgbGV0IGN1cnJlbnRUYWIgPSAxO1xuICAgIGxldCBjYXJkc1Bvc2l0aW9uID0gMDtcbiAgICBsZXQgbGVmdFNsaWRlO1xuICAgIGxldCByaWdodFNsaWRlO1xuICAgIGNvbnNvbGUubG9nKHRvdGFsVGFicylcblxuLy8g0KHRgtCy0L7RgNC10L3QvdGPINGC0LDQsdGW0LJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSB0b3RhbFRhYnM7IGkrKykge1xuICAgICAgICBjb25zdCB0YWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFiLmNsYXNzTGlzdC5hZGQoJ3ByaXplX190YWJzLWl0ZW0nKTtcbiAgICAgICAgdGFic0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YWIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxlZnRTbGlkZVRhYigpe1xuICAgICAgICBsZWZ0U2xpZGUgPSBjdXJyZW50VGFiICogdmlzaWJsZVNsaWRlcyAtICh2aXNpYmxlU2xpZGVzIC0gMSlcbiAgICB9XG4gICAgZnVuY3Rpb24gcmlnaHRTbGlkZVRhYigpe1xuICAgICAgICByaWdodFNsaWRlID0gY3VycmVudFRhYiAqIHZpc2libGVTbGlkZXNcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmaXJzdExhc3RTbGlkZXMoKXtcbiAgICAgICAgaWYoaXNNb2JpbGUpIHJldHVyblxuICAgICAgICBsZWZ0U2xpZGVUYWIoKVxuICAgICAgICByaWdodFNsaWRlVGFiKClcbiAgICAgICAgY2FyZHMuZm9yRWFjaCgoY2FyZCAsIGkpID0+e1xuICAgICAgICAgICAgaSArIDEgPT09IGxlZnRTbGlkZSA/IGNhcmQuY2xhc3NMaXN0LmFkZChcIl9sZWZ0XCIpIDogY2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwiX2xlZnRcIilcbiAgICAgICAgICAgIGkgKyAxID09PSByaWdodFNsaWRlID8gY2FyZC5jbGFzc0xpc3QuYWRkKFwiX3JpZ2h0XCIpIDogY2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwiX3JpZ2h0XCIpXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGZpcnN0TGFzdFNsaWRlcygpXG5cbiAgICBjb25zdCB1cGRhdGVBY3RpdmVDYXJkID0gKGNhcmRzLCBhY3RpdmVJbmRleCkgPT4ge1xuICAgICAgICBjYXJkcy5mb3JFYWNoKChjYXJkLCBpKSA9PiB7XG4gICAgICAgICAgICBhY3RpdmVJbmRleCAtIDEgPT09IGkgPyBjYXJkLmNsYXNzTGlzdC5hZGQoXCJfYWN0aXZlXCIpIDogY2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwiX2FjdGl2ZVwiKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICB1cGRhdGVBY3RpdmVDYXJkKGNhcmRzLCBjdXJyZW50U2xpZGUpO1xuXG4gICAgY29uc3QgdXBkYXRlVGFicyA9ICgpID0+IHtcbiAgICAgICAgaWYoaXNNb2JpbGUpe1xuICAgICAgICAgICAgY29uc3QgYWN0aXZlVGFiID0gTWF0aC5jZWlsKGN1cnJlbnRTbGlkZSAvIHZpc2libGVTbGlkZXMpO1xuICAgICAgICAgICAgdGFic0NvbnRhaW5lci5jaGlsZE5vZGVzLmZvckVhY2goKHRhYiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICB0YWIuY2xhc3NMaXN0LnRvZ2dsZSgnX2FjdGl2ZScsIGluZGV4ICsgMSA9PT0gYWN0aXZlVGFiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRhYnNDb250YWluZXIuY2hpbGROb2Rlcy5mb3JFYWNoKCh0YWIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC5yZW1vdmUoXCJfYWN0aXZlXCIpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudFRhYiwgaW5kZXgpXG4gICAgICAgICAgICAgICAgaW5kZXggKyAxID09PSBjdXJyZW50VGFiID8gdGFiLmNsYXNzTGlzdC5hZGQoXCJfYWN0aXZlXCIpIDogbnVsbFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuXG4gICAgfTtcbiAgICB1cGRhdGVUYWJzKCk7XG5cbiAgICBmdW5jdGlvbiBzZXRDYXJkc1Bvc2l0aW9uKHBvc2l0aW9uKSB7XG4gICAgICAgIGNhcmRzV3JhcC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgtJHtwb3NpdGlvbn1weClgO1xuICAgIH07XG5cbiAgICBjb25zdCBtb3ZlUmlnaHQgPSAoKSA9PiB7XG4gICAgICAgIGlmIChpc01vYmlsZSkge1xuICAgICAgICAgICAgLy8g0JzQvtCx0ZbQu9GM0L3QsCDQu9C+0LPRltC60LBcbiAgICAgICAgICAgIGlmIChjdXJyZW50U2xpZGUgPj0gdG90YWxDYXJkcykge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRTbGlkZSA9IDE7XG4gICAgICAgICAgICAgICAgY2FyZHNQb3NpdGlvbiA9IDA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNhcmRzUG9zaXRpb24gKz0gY2FyZFdpZHRoICsgY2FyZHNNYXJnaW47XG4gICAgICAgICAgICAgICAgY3VycmVudFNsaWRlKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZihjdXJyZW50VGFiID09PSB0b3RhbFRhYnMpe1xuICAgICAgICAgICAgICAgIGNhcmRzUG9zaXRpb24gPSAwXG4gICAgICAgICAgICAgICAgY3VycmVudFRhYiA9IDFcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGNhcmRzUG9zaXRpb24gKz0gdGFiV2lkdGhcbiAgICAgICAgICAgICAgICArK2N1cnJlbnRUYWJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmaXJzdExhc3RTbGlkZXMoKVxuICAgICAgICBzZXRDYXJkc1Bvc2l0aW9uKGNhcmRzUG9zaXRpb24pO1xuICAgICAgICB1cGRhdGVUYWJzKCk7XG4gICAgICAgIHVwZGF0ZUFjdGl2ZUNhcmQoY2FyZHMsIGN1cnJlbnRTbGlkZSk7XG4gICAgICAgIGhpZGVQb3B1cHMoY2FyZHMpXG5cbiAgICB9O1xuXG5cblxuICAgIGNvbnN0IG1vdmVMZWZ0ID0gKCkgPT4ge1xuICAgICAgICBpZiAoaXNNb2JpbGUpIHtcbiAgICAgICAgICAgIC8vINCc0L7QsdGW0LvRjNC90LAg0LvQvtCz0ZbQutCwXG4gICAgICAgICAgICBpZiAoY3VycmVudFNsaWRlID09PSAxKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFNsaWRlID0gdG90YWxDYXJkcztcbiAgICAgICAgICAgICAgICBjYXJkc1Bvc2l0aW9uID0gKHRvdGFsQ2FyZHMgLSAxKSAqIChjYXJkV2lkdGggKyBjYXJkc01hcmdpbik7XG4gICAgICAgICAgICB9ZWxzZSBpZihjdXJyZW50U2xpZGUgPT09IDIpe1xuICAgICAgICAgICAgICAgIGN1cnJlbnRTbGlkZSA9IDE7XG4gICAgICAgICAgICAgICAgY2FyZHNQb3NpdGlvbiA9IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNhcmRzUG9zaXRpb24gLT0gY2FyZFdpZHRoICsgY2FyZHNNYXJnaW47XG4gICAgICAgICAgICAgICAgY3VycmVudFNsaWRlLS07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGlmKGN1cnJlbnRUYWIgPT09IDEpe1xuICAgICAgICAgICAgICAgIGN1cnJlbnRUYWIgPSB0b3RhbFRhYnNcbiAgICAgICAgICAgICAgICBjYXJkc1Bvc2l0aW9uID0gKGN1cnJlbnRUYWIgKiB0YWJXaWR0aCkgLSB0YWJXaWR0aFxuICAgICAgICAgICAgfWVsc2UgaWYoY3VycmVudFRhYiA9PT0gMil7XG4gICAgICAgICAgICAgICAgY2FyZHNQb3NpdGlvbiA9IDBcbiAgICAgICAgICAgICAgICBjdXJyZW50VGFiID0gMVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY2FyZHNQb3NpdGlvbiAtPSB0YWJXaWR0aFxuICAgICAgICAgICAgICAgIC0tY3VycmVudFRhYlxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICBzZXRDYXJkc1Bvc2l0aW9uKGNhcmRzUG9zaXRpb24pO1xuICAgICAgICB1cGRhdGVUYWJzKCk7XG4gICAgICAgIGZpcnN0TGFzdFNsaWRlcygpXG4gICAgICAgIHVwZGF0ZUFjdGl2ZUNhcmQoY2FyZHMsIGN1cnJlbnRTbGlkZSk7XG4gICAgICAgIGhpZGVQb3B1cHMoY2FyZHMpXG4gICAgfTtcblxuICAgIC8vIHBvcHVwcyBsb2dpY1xuXG4gICAgZnVuY3Rpb24gc2V0UG9wdXBzKHBvcHVwcywgcG9wdXBzQnRucykge1xuICAgICAgICBwb3B1cHNCdG5zLmZvckVhY2goKGJ0biwgaSkgPT4ge1xuICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHBvcHVwcy5mb3JFYWNoKChwb3B1cCwgaikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpID09PSBqID8gcG9wdXAuY2xhc3NMaXN0LmFkZChcIl9wb3B1cFwiKSA6IHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoXCJfcG9wdXBcIik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZVBvcHVwcyhwb3B1cHMpe1xuICAgICAgICBwb3B1cHMuZm9yRWFjaChwb3B1cCA9PntcbiAgICAgICAgICAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcIl9wb3B1cFwiKVxuICAgICAgICB9KVxuICAgIH1cbi8vIHBvcHVwc1xuICAgIGNvbnN0IHByaXplT3BlbkJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByaXplX19saXN0LWl0ZW0tYnRuXCIpXG4gICAgY29uc3QgcHJpemVDbG9zZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByaXplX19saXN0LXBvcHVwLWNsb3NlXCIpXG4gICAgY29uc3QgZ3VpZGVQb3B1cHNXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ndWlkZV9faXRlbVwiKVxuICAgIGNvbnN0IGd1aWRlT3BlbkJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmd1aWRlX19pdGVtLWluZm8tYnRuXCIpXG4gICAgY29uc3QgZ3VpZGVDbG9zZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmd1aWRlX19pdGVtLXBvcHVwLWNsb3NlXCIpXG4gICAgY29uc3QgdGFibGVQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFibGVfX3BvcHVwXCIpXG4gICAgY29uc3QgdGFibGVQb3B1cENsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YWJsZV9fcG9wdXAtY2xvc2VcIilcbiAgICBjb25zdCB0YWJsZVBvcHVwT3BlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFibGVfX2luZm9cIilcblxuICAgIHNldFBvcHVwcyhjYXJkcywgcHJpemVPcGVuQnRucyk7XG4gICAgc2V0UG9wdXBzKGd1aWRlUG9wdXBzV3JhcCwgZ3VpZGVPcGVuQnRucyk7XG5cbiAgICBndWlkZUNsb3NlQnRucy5mb3JFYWNoKGJ0biA9PntcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XG4gICAgICAgICAgICBoaWRlUG9wdXBzKGd1aWRlUG9wdXBzV3JhcClcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBwcml6ZUNsb3NlQnRucy5mb3JFYWNoKGJ0biA9PntcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XG4gICAgICAgICAgICBoaWRlUG9wdXBzKGNhcmRzKVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRhYmxlUG9wdXBPcGVuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICB0YWJsZVBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiXG4gICAgfSk7XG5cbiAgICB0YWJsZVBvcHVwQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICB0YWJsZVBvcHVwLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIlxuICAgIH0pO1xuXG4vLyBzbm93ZmFsbCBhbmltYXRpb25cbiAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgQ09VTlQgPSA0MDA7XG5cbiAgICAgICAgZnVuY3Rpb24gU25vd3N0b3JtKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMubWFzdGhlYWQgPSBlbGVtZW50O1xuICAgICAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgICAgIHRoaXMud2lkdGggPSB0aGlzLm1hc3RoZWFkLmNsaWVudFdpZHRoO1xuICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLm1hc3RoZWFkLmNsaWVudEhlaWdodDtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnNub3dmbGFrZXMgPSBbXTtcblxuICAgICAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBTbm93c3Rvcm0ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5sZWZ0ID0gdGhpcy5jYW52YXMuc3R5bGUudG9wID0gJzAnO1xuICAgICAgICAgICAgdGhpcy5tYXN0aGVhZC5hcHBlbmRDaGlsZCh0aGlzLmNhbnZhcyk7XG5cbiAgICAgICAgICAgIHRoaXMub25SZXNpemUoKTtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uUmVzaXplLmJpbmQodGhpcyksIGZhbHNlKTtcblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBDT1VOVDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNub3dmbGFrZSA9IG5ldyB0aGlzLlNub3dmbGFrZSh0aGlzKTtcbiAgICAgICAgICAgICAgICBzbm93Zmxha2UucmVzZXQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNub3dmbGFrZXMucHVzaChzbm93Zmxha2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbUZyYW1lKHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIFNub3dzdG9ybS5wcm90b3R5cGUub25SZXNpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLndpZHRoID0gdGhpcy5tYXN0aGVhZC5jbGllbnRXaWR0aDtcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5tYXN0aGVhZC5jbGllbnRIZWlnaHQ7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHRoaXMud2lkdGg7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB0aGlzLmhlaWdodDtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICcjRkZGJztcblxuICAgICAgICAgICAgdmFyIHdhc0FjdGl2ZSA9IHRoaXMuYWN0aXZlO1xuICAgICAgICAgICAgdGhpcy5hY3RpdmUgPSB0aGlzLndpZHRoID4gODA7XG4gICAgICAgICAgICB0aGlzLndpZHRoID4gMjgwID8gQ09VTlQgPSAxNTAgOiBudWxsXG5cbiAgICAgICAgICAgIGlmICghd2FzQWN0aXZlICYmIHRoaXMuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1GcmFtZSh0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBTbm93c3Rvcm0ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgQ09VTlQ7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBzbm93Zmxha2UgPSB0aGlzLnNub3dmbGFrZXNbaV07XG4gICAgICAgICAgICAgICAgc25vd2ZsYWtlLnkgKz0gc25vd2ZsYWtlLnZ5O1xuICAgICAgICAgICAgICAgIHNub3dmbGFrZS54ICs9IHNub3dmbGFrZS52eDtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4Lmdsb2JhbEFscGhhID0gc25vd2ZsYWtlLm87XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguYXJjKHNub3dmbGFrZS54LCBzbm93Zmxha2UueSwgc25vd2ZsYWtlLnIsIDAsIE1hdGguUEkgKiAyLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHNub3dmbGFrZS55ID4gdGhpcy5oZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgc25vd2ZsYWtlLnJlc2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXF1ZXN0QW5pbUZyYW1lKHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xuICAgICAgICB9O1xuXG4gICAgICAgIFNub3dzdG9ybS5wcm90b3R5cGUuU25vd2ZsYWtlID0gZnVuY3Rpb24gKHNub3dzdG9ybSkge1xuICAgICAgICAgICAgdGhpcy5zbm93c3Rvcm0gPSBzbm93c3Rvcm07XG4gICAgICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgU25vd3N0b3JtLnByb3RvdHlwZS5Tbm93Zmxha2UucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy54ID0gTWF0aC5yYW5kb20oKSAqIHRoaXMuc25vd3N0b3JtLndpZHRoO1xuICAgICAgICAgICAgdGhpcy55ID0gTWF0aC5yYW5kb20oKSAqIC10aGlzLnNub3dzdG9ybS5oZWlnaHQ7XG4gICAgICAgICAgICB0aGlzLnZ5ID0gMC4zICsgTWF0aC5yYW5kb20oKSAqIDAuMDAwMDE7XG4gICAgICAgICAgICB0aGlzLnZ4ID0gMC42IC0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgICAgIHRoaXMuciA9IDEgKyBNYXRoLnJhbmRvbSgpICogMjtcbiAgICAgICAgICAgIHRoaXMubyA9IDE7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gc2hpbSBsYXllciB3aXRoIHNldFRpbWVvdXQgZmFsbGJhY2tcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltRnJhbWUgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgICAgICAgICB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgICAgICAgICAgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChjYWxsYmFjaywgMTAwMCAvIDYwKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICB9KSgpO1xuXG4gICAgICAgIC8vIEFwcGx5IFNub3dzdG9ybSB0byBhbGwgZWxlbWVudHMgd2l0aCB0aGUgY2xhc3MgJ3NreSdcbiAgICAgICAgdmFyIHNraWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNreScpO1xuICAgICAgICBza2llcy5mb3JFYWNoKGZ1bmN0aW9uIChza3kpIHtcbiAgICAgICAgICAgIG5ldyBTbm93c3Rvcm0oc2t5KTtcbiAgICAgICAgfSk7XG5cblxuXG4gICAgICAgIC8vIGJhbGwgc2hha2Ugc25vd1xuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc25vd0NhbnZhcycpO1xuICAgICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgY29uc3QgYmFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zcGhlcmUnKTtcblxuICAgICAgICBjYW52YXMud2lkdGggPSBjYW52YXMucGFyZW50RWxlbWVudC5jbGllbnRXaWR0aDtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGNhbnZhcy5wYXJlbnRFbGVtZW50LmNsaWVudEhlaWdodDtcblxuICAgICAgICBsZXQgc25vd2ZsYWtlcyA9IFtdO1xuICAgICAgICBjb25zdCBtYXhTbm93Zmxha2VzID0gMTAwO1xuICAgICAgICBjb25zdCBtYXhTcGVlZCA9IDc7IC8vINCc0LDQutGB0LjQvNCw0LvRjNC90LAg0YjQstC40LTQutGW0YHRgtGMINGB0L3RltC20LjQvdC60LhcbiAgICAgICAgbGV0IHN0b3JtQ291bnRlciA9IDFcblxuXG4gICAgICAgIGxldCBzbm93Zmxha2VzUmVtb3ZlZCA9IDA7XG5cbiAgICAgICAgY2xhc3MgU25vd2ZsYWtlIHtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgICAgIHRoaXMueCA9IE1hdGgucmFuZG9tKCkgKiBjYW52YXMud2lkdGg7XG4gICAgICAgICAgICAgICAgdGhpcy55ID0gTWF0aC5yYW5kb20oKSAqIGNhbnZhcy5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgdGhpcy5yYWRpdXMgPSBNYXRoLnJhbmRvbSgpICogMyArIDE7XG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlZFggPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiAxMDtcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVkWSA9IE1hdGgucmFuZG9tKCkgKiAxLjUgKyAxO1xuICAgICAgICAgICAgICAgIHRoaXMuYWNjZWxlcmF0aW9uID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmluZ1RvQm90dG9tID0gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVwZGF0ZShiYWxsWCwgYmFsbFksIGJhbGxSYWRpdXMsIGJhbGxTaGFraW5nKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubW92aW5nVG9Cb3R0b20pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0U3BlZWQgPSAwLjE7IC8vINCc0LDQu9C10L3RjNC60LAg0YjQstC40LTQutGW0YHRgtGMLCDQtNC+INGP0LrQvtGXINC/0YDQsNCz0L3QtdC80L5cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3BlZWREZWNheUZhY3RvciA9IDAuMDU7IC8vINCa0L7QtdGE0ZbRhtGW0ZTQvdGCINC00LvRjyDQv9C70LDQstC90L7Qs9C+INGB0L/QvtCy0ZbQu9GM0L3QtdC90L3Rj1xuXG4gICAgICAgICAgICAgICAgICAgIC8vINCf0LvQsNCy0L3QviDQvdCw0LHQu9C40LbQsNGU0LzQviDRiNCy0LjQtNC60ZbRgdGC0Ywg0LTQviB0YXJnZXRTcGVlZFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwZWVkWCA9IHRoaXMuc3BlZWRYIC0gKHRoaXMuc3BlZWRYIC0gdGFyZ2V0U3BlZWQpICogc3BlZWREZWNheUZhY3RvcjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGVlZFkgPSB0aGlzLnNwZWVkWSAtICh0aGlzLnNwZWVkWSAtIHRhcmdldFNwZWVkKSAqIHNwZWVkRGVjYXlGYWN0b3I7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8g0J7QvdC+0LLQu9C10L3QvdGPINC/0L7Qt9C40YbRltGXINGB0L3RltC20LjQvdC60LhcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55ICs9IHRoaXMuc3BlZWRZO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnkgPiBjYW52YXMuaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLnggKz0gdGhpcy5zcGVlZFg7XG4gICAgICAgICAgICAgICAgdGhpcy55ICs9IHRoaXMuc3BlZWRZO1xuXG4gICAgICAgICAgICAgICAgLy8g0J7QsdC80LXQttC10L3QvdGPINGI0LLQuNC00LrQvtGB0YLRllxuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWRYID0gTWF0aC5tYXgoLW1heFNwZWVkLCBNYXRoLm1pbihtYXhTcGVlZCwgdGhpcy5zcGVlZFgpKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVkWSA9IE1hdGgubWF4KC1tYXhTcGVlZCwgTWF0aC5taW4obWF4U3BlZWQsIHRoaXMuc3BlZWRZKSk7XG5cbiAgICAgICAgICAgICAgICAvLyDQlNC+0LTQsNCy0LDQvdC90Y8g0YjQstC40LTQutC+0YHRgtGWINGH0LXRgNC10LcgXCLRgtGA0YPRgdGW0L3QvdGPXCIg0LrRg9C70ZZcbiAgICAgICAgICAgICAgICBpZiAoYmFsbFNoYWtpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY2NlbGVyYXRpb24gKz0gMC4wNTsgLy8g0J3QsNGA0L7RidGD0LLQsNC90L3RjyDRiNCy0LjQtNC60L7RgdGC0ZZcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjY2VsZXJhdGlvbiAqPSAwLjk1OyAvLyDQn9C+0YHRgtGD0L/QvtCy0LUg0LfQvNC10L3RiNC10L3QvdGPXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWRYICs9IHRoaXMuYWNjZWxlcmF0aW9uICogKE1hdGgucmFuZG9tKCkgLSAwLjUpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWRZICs9IHRoaXMuYWNjZWxlcmF0aW9uICogKE1hdGgucmFuZG9tKCkgLSAwLjUpO1xuXG4gICAgICAgICAgICAgICAgLy8g0J/QtdGA0LXQstGW0YDQutCwINC90LAg0LzQtdC20ZYgY2FudmFzXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMueSA+IGNhbnZhcy5oZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54ID0gTWF0aC5yYW5kb20oKSAqIGNhbnZhcy53aWR0aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMueCA+IGNhbnZhcy53aWR0aCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnggPSAwO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy54IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnggPSBjYW52YXMud2lkdGg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8g0JLRltC00YHRgtCw0L3RjCDQtNC+INGG0LXQvdGC0YDRgyDQutGD0LvRllxuICAgICAgICAgICAgICAgIGNvbnN0IGR4ID0gdGhpcy54IC0gYmFsbFg7XG4gICAgICAgICAgICAgICAgY29uc3QgZHkgPSB0aGlzLnkgLSBiYWxsWTtcbiAgICAgICAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG5cbiAgICAgICAgICAgICAgICAvLyDQktGW0LTRgdC60L7QuiDQstGW0LQg0LrRg9C70ZZcbiAgICAgICAgICAgICAgICBpZiAoZGlzdGFuY2UgPCBiYWxsUmFkaXVzICsgdGhpcy5yYWRpdXMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYW5nbGUgPSBNYXRoLmF0YW4yKGR5LCBkeCk7IC8vINCa0YPRgiDQt9GW0YLQutC90LXQvdC90Y9cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3ZlcmxhcCA9IGJhbGxSYWRpdXMgKyB0aGlzLnJhZGl1cyAtIGRpc3RhbmNlO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vINCf0LXRgNC10LzRltGJ0LXQvdC90Y8g0YHQvdGW0LbQuNC90LrQuFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnggKz0gTWF0aC5jb3MoYW5nbGUpICogb3ZlcmxhcDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55ICs9IE1hdGguc2luKGFuZ2xlKSAqIG92ZXJsYXA7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8g0KDQtdCy0LXRgNGBINGI0LLQuNC00LrQvtGB0YLRllxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwZWVkWCAqPSAtMC43O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwZWVkWSAqPSAtMC43O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbW92ZVRvQm90dG9tKCkge1xuICAgICAgICAgICAgICAgIHRoaXMubW92aW5nVG9Cb3R0b20gPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZW1vdmUoKSB7XG4gICAgICAgICAgICAgICAgc25vd2ZsYWtlcy5zcGxpY2Uoc25vd2ZsYWtlcy5pbmRleE9mKHRoaXMpLCAxKTtcbiAgICAgICAgICAgICAgICBzbm93Zmxha2VzUmVtb3ZlZCsrO1xuICAgICAgICAgICAgICAgIGlmIChzdG9ybUNvdW50ZXIgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3IFNub3dzdG9ybShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNwaGVyZV9fYm9keVwiKSk7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JtQ291bnRlcisrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZHJhdygpIHtcbiAgICAgICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIDAsIE1hdGguUEkgKiAyKTtcbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gJ3doaXRlJztcbiAgICAgICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4vLyDQodC/0LDQstC90LjQvNC+INC90L7QstGWINGB0L3RltC20LjQvdC60Lgg0L/RgNC4INC30LzRltC90ZYg0YHRgtCw0L3RgyDQutGD0LvRllxuICAgICAgICBsZXQgbGFzdEJhbGxTaGFraW5nU3RhdGUgPSBmYWxzZTsgLy8g0JfQvNGW0L3QvdCwINC00LvRjyDQstGW0LTRgdGC0LXQttC10L3QvdGPINGB0YLQsNC90YMg0LrRg9C70ZZcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1heFNub3dmbGFrZXM7IGkrKykge1xuICAgICAgICAgICAgc25vd2ZsYWtlcy5wdXNoKG5ldyBTbm93Zmxha2UoKSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBhbmltYXRlKCkge1xuICAgICAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXG4gICAgICAgICAgICBjb25zdCBiYWxsVHJhbnNmb3JtID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoYmFsbCkudHJhbnNmb3JtO1xuICAgICAgICAgICAgbGV0IGJhbGxYID0gY2FudmFzLndpZHRoIC8gMjtcbiAgICAgICAgICAgIGxldCBiYWxsWSA9IGNhbnZhcy5oZWlnaHQgLyAyO1xuICAgICAgICAgICAgY29uc3QgYmFsbFJhZGl1cyA9IGJhbGwub2Zmc2V0V2lkdGggLyAyO1xuICAgICAgICAgICAgY29uc3QgYmFsbFNoYWtpbmcgPSBiYWxsVHJhbnNmb3JtICE9PSAnbm9uZSc7XG5cbiAgICAgICAgICAgIGlmIChiYWxsVHJhbnNmb3JtICE9PSAnbm9uZScpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtYXRyaXggPSBuZXcgRE9NTWF0cml4KGJhbGxUcmFuc2Zvcm0pO1xuICAgICAgICAgICAgICAgIGJhbGxYID0gYmFsbC5vZmZzZXRMZWZ0ICsgbWF0cml4Lm00MSArIGJhbGxSYWRpdXM7XG4gICAgICAgICAgICAgICAgYmFsbFkgPSBiYWxsLm9mZnNldFRvcCArIG1hdHJpeC5tNDIgKyBiYWxsUmFkaXVzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDQr9C60YnQviDRgdGC0LDQvSDQutGD0LvRliDQt9C80ZbQvdC40LLRgdGPINC90LAgXCLRgNGD0YVcIiwg0L/QtdGA0LXQt9Cw0L/Rg9GB0LrQsNGU0LzQviDRgdC90ZbQttC40L3QutC4XG4gICAgICAgICAgICBpZiAoYmFsbFNoYWtpbmcgJiYgIWxhc3RCYWxsU2hha2luZ1N0YXRlKSB7XG4gICAgICAgICAgICAgICAgLy8g0J7Rh9C40YnQsNGU0LzQviDQvNCw0YHQuNCyINGB0L3RltC20LjQvdC+0LpcbiAgICAgICAgICAgICAgICBzbm93Zmxha2VzID0gW107XG4gICAgICAgICAgICAgICAgc25vd2ZsYWtlc1JlbW92ZWQgPSAwO1xuICAgICAgICAgICAgICAgIC8vINCh0L/QsNCy0L3QuNC80L4g0L3QvtCy0ZYg0YHQvdGW0LbQuNC90LrQuFxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF4U25vd2ZsYWtlczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHNub3dmbGFrZXMucHVzaChuZXcgU25vd2ZsYWtlKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGFzdEJhbGxTaGFraW5nU3RhdGUgPSBiYWxsU2hha2luZztcblxuICAgICAgICAgICAgc25vd2ZsYWtlcy5mb3JFYWNoKHNub3dmbGFrZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFiYWxsU2hha2luZykgc25vd2ZsYWtlLm1vdmVUb0JvdHRvbSgpO1xuICAgICAgICAgICAgICAgIHNub3dmbGFrZS51cGRhdGUoYmFsbFgsIGJhbGxZLCBiYWxsUmFkaXVzLCBiYWxsU2hha2luZyk7XG4gICAgICAgICAgICAgICAgc25vd2ZsYWtlLmRyYXcoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBhbmltYXRlKCk7XG5cbiAgICB9KSgpO1xuXG4gICAgbGV0IGkgPSAxO1xuICAgIGZ1bmN0aW9uIHNlbmRTaGFrZVJlcXVlc3QoKSB7XG4gICAgICAgIGlmICghdXNlcklkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGVidWcpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgICAgICAgICAgIC8vIG51bWJlcjogaSsrLFxuICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXN0J1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwYXJhbXMgPSB7dXNlcmlkOiB1c2VySWR9O1xuICAgICAgICByZXR1cm4gcmVxdWVzdCgnL3NwaW4nLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhcmFtcylcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBjb25zdCBidG5TaGFrZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZ3Jlc3NfX3NoYWtlXCIpXG4gICAgY29uc3QgYmFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3BoZXJlXCIpXG4gICAgY29uc3QgYmFsbEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3BoZXJlX19ib3hcIilcblxuICAgIGZ1bmN0aW9uIGluaXRTaGFrZShiYWxsLCBidG4sIGJveCkge1xuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICAgICAgc2VuZFNoYWtlUmVxdWVzdCgpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAgICAgICAgIGlmICghcmVzIHx8ICEhcmVzLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGJ0blNoYWtlLmNsYXNzTGlzdC5hZGQoJ3B1bHNlLWJ0bicpO1xuICAgICAgICAgICAgICAgICAgICBidG5TaGFrZS5jbGFzc0xpc3QucmVtb3ZlKCdfZGlzYWJsZWQnKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IHByaXplID0gcmVzLm51bWJlcjtcbiAgICAgICAgICAgICAgICBjb25zdCBwcml6ZSA9IFwiaXBob25lXCI7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RyZWFrQm9udXMgPSByZXMuc3RyZWFrQm9udXMgfHwgZGVidWc7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVsYXkgPSAobXMpID0+IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpXG4gICAgICAgICAgICAgICAgaWYocHJpemUgPT09IFwiaXBob25lXCIpe1xuICAgICAgICAgICAgICAgICAgICAoIGFzeW5jIGZ1bmN0aW9uICgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJfZGlzYWJsZWRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWxsLmNsYXNzTGlzdC5hZGQoXCJfc2hha2VcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcIl9zaGFrZS1yZXZlcnNlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgZGVsYXkoMjAwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJfc2hha2VcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWxsLmNsYXNzTGlzdC5hZGQoXCJfYmVmb3JlLWhpZGVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3guY2xhc3NMaXN0LnJlbW92ZShcIl9zaGFrZS1yZXZlcnNlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJfYm94LW9wYWNpdHlcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBkZWxheSgyMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFsbC5jbGFzc0xpc3QuYWRkKGBfJHtwcml6ZX1gKTtcblxuICAgICAgICAgICAgICAgICAgICB9KSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBpZihwcml6ZSA9PT0gXCJyZXNwaW5cIil7XG4gICAgICAgICAgICAgICAgLy8gICAgIHNlY3Rpb25zLmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgKCkgPT4gc2hvd1BvcHVwKHNlY3Rpb25zLCB3aGVlbCwgXCJfYm9udXNcIiwgc3RyZWFrQm9udXMsIHNwaW5CZywgcG9wdXBDbG9zZUJ0biwgcG9wdXBDb250YWluZXIsIHBvcHVwLCBcInJlc3BpblwiKSwge29uY2U6IHRydWV9KVxuICAgICAgICAgICAgICAgIC8vICAgICBzcGluV2hlZWwoNzIuNSwgXCJyZXNwaW5BbmltXCIsIHNlY3Rpb25zLCBidG4sIHdoZWVsLCBhcnJvdywgcHJpemUsIHNwaW5CZywgc2FsdXQpXG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgaW5pdFNoYWtlKGJhbGwsIGJ0blNoYWtlLCBiYWxsQm94KVxuXG4gICAgY29uc3QgaGFuZGxlUmVzaXplID0gKCkgPT57XG4gICAgICAgIGxldCB0b3VjaFN0YXJ0WCA9IDA7XG4gICAgICAgIGxldCB0b3VjaEVuZFggPSAwO1xuICAgICAgICBsZXQgdG91Y2hTdGFydFRpbWUgPSAwOyAvLyDQp9Cw0YEg0L/QvtGH0LDRgtC60YMg0LTQvtGC0LjQutGDXG5cbiAgICAgICAgY29uc3QgaGFuZGxlVG91Y2hTdGFydCA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgdG91Y2hTdGFydFggPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICAgICAgICB0b3VjaFN0YXJ0VGltZSA9IERhdGUubm93KCk7IC8vINCX0LDQv9C40YHRg9GU0LzQviDRh9Cw0YEg0L/QvtGH0LDRgtC60YMg0LTQvtGC0LjQutGDXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgaGFuZGxlVG91Y2hNb3ZlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0b3VjaEVuZFggPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgaGFuZGxlVG91Y2hFbmQgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzd2lwZURpc3RhbmNlID0gdG91Y2hTdGFydFggLSB0b3VjaEVuZFg7XG4gICAgICAgICAgICBjb25zdCBzd2lwZVRpbWUgPSBEYXRlLm5vdygpIC0gdG91Y2hTdGFydFRpbWU7IC8vINCi0YDQuNCy0LDQu9GW0YHRgtGMINGB0LLQsNC50L/Rg1xuXG4gICAgICAgICAgICAvLyDQpNGW0LvRjNGC0YDQsNGG0ZbRjyDQutC70ZbQutGW0LIg0YLQsCDQvdC10LrQvtGA0LXQutGC0L3QuNGFINGB0LLQsNC50L/RltCyXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoc3dpcGVEaXN0YW5jZSkgPCA1MCB8fCBzd2lwZVRpbWUgPiA1MDAgJiYgc3dpcGVUaW1lID4gNTApIHtcbiAgICAgICAgICAgICAgICAvLyDQr9C60YnQviDRgdCy0LDQudC/INC30LDQvdCw0LTRgtC+INC60L7RgNC+0YLQutC40Lkg0LDQsdC+INC90LDQtNGC0L4g0L/QvtCy0ZbQu9GM0L3QuNC5LCDQvdC1INCy0LLQsNC20LDRlNC80L4g0LnQvtCz0L4g0YHQv9GA0LDQstC20L3RltC8XG4gICAgICAgICAgICAgICAgdG91Y2hTdGFydFggPSAwO1xuICAgICAgICAgICAgICAgIHRvdWNoRW5kWCA9IDA7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNGP0ZTQvNC+INC90LDQv9GA0Y/QvNC+0Log0YHQstCw0LnQv9GDXG4gICAgICAgICAgICBpZiAoc3dpcGVEaXN0YW5jZSA+IDUwKSB7XG4gICAgICAgICAgICAgICAgLy8g0KHQstCw0LnQvyDQu9GW0LLQvtGA0YPRh1xuICAgICAgICAgICAgICAgIG1vdmVSaWdodCgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzd2lwZURpc3RhbmNlIDwgLTUwKSB7XG4gICAgICAgICAgICAgICAgLy8g0KHQstCw0LnQvyDQv9GA0LDQstC+0YDRg9GHXG4gICAgICAgICAgICAgICAgbW92ZUxlZnQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8g0KHQutC40LTQsNGU0LzQviDQt9C90LDRh9C10L3QvdGPXG4gICAgICAgICAgICB0b3VjaFN0YXJ0WCA9IDA7XG4gICAgICAgICAgICB0b3VjaEVuZFggPSAwO1xuICAgICAgICB9O1xuXG5cbiAgICAgICAgbW92ZVJpZ2h0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbW92ZVJpZ2h0KTtcbiAgICAgICAgbW92ZUxlZnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtb3ZlTGVmdCk7XG4gICAgICAgIGNhcmRzQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBoYW5kbGVUb3VjaFN0YXJ0KTtcbiAgICAgICAgY2FyZHNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgaGFuZGxlVG91Y2hNb3ZlKTtcbiAgICAgICAgY2FyZHNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBoYW5kbGVUb3VjaEVuZCk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwib3JpZW50YXRpb25jaGFuZ2VcIiwgKCkgPT57XG4gICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGhhbmRsZVJlc2l6ZSgpXG5cbn0pKCk7Il19
