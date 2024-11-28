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
          box.addEventListener("animationiteration", function () {
            box.classList.remove("_boxFloat");
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
          });
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiaHJMZW5nIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZW5MZW5nIiwibG9jYWxlIiwiaTE4bkRhdGEiLCJkZWJ1ZyIsInVzZXJJZCIsImNhcmRzQ29udGFpbmVyIiwiY2FyZHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2FyZHNXcmFwIiwibW92ZVJpZ2h0QnV0dG9uIiwibW92ZUxlZnRCdXR0b24iLCJ0YWJzQ29udGFpbmVyIiwiaXNNb2JpbGUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwidG90YWxDYXJkcyIsImxlbmd0aCIsImNhcmRXaWR0aCIsImNsaWVudFdpZHRoIiwiY2FyZHNNYXJnaW4iLCJ2aXNpYmxlU2xpZGVzIiwiTWF0aCIsImNlaWwiLCJ0b3RhbFRhYnMiLCJ0YWJXaWR0aCIsImN1cnJlbnRTbGlkZSIsImN1cnJlbnRUYWIiLCJjYXJkc1Bvc2l0aW9uIiwibGVmdFNsaWRlIiwicmlnaHRTbGlkZSIsImNvbnNvbGUiLCJsb2ciLCJpIiwidGFiIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZENoaWxkIiwibGVmdFNsaWRlVGFiIiwicmlnaHRTbGlkZVRhYiIsImZpcnN0TGFzdFNsaWRlcyIsImZvckVhY2giLCJjYXJkIiwicmVtb3ZlIiwidXBkYXRlQWN0aXZlQ2FyZCIsImFjdGl2ZUluZGV4IiwidXBkYXRlVGFicyIsImFjdGl2ZVRhYiIsImNoaWxkTm9kZXMiLCJpbmRleCIsInRvZ2dsZSIsInNldENhcmRzUG9zaXRpb24iLCJwb3NpdGlvbiIsInN0eWxlIiwidHJhbnNmb3JtIiwibW92ZVJpZ2h0IiwiaGlkZVBvcHVwcyIsIm1vdmVMZWZ0Iiwic2V0UG9wdXBzIiwicG9wdXBzIiwicG9wdXBzQnRucyIsImJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicG9wdXAiLCJqIiwicHJpemVPcGVuQnRucyIsInByaXplQ2xvc2VCdG5zIiwiZ3VpZGVQb3B1cHNXcmFwIiwiZ3VpZGVPcGVuQnRucyIsImd1aWRlQ2xvc2VCdG5zIiwidGFibGVQb3B1cCIsInRhYmxlUG9wdXBDbG9zZSIsInRhYmxlUG9wdXBPcGVuIiwiYm9keSIsIm92ZXJmbG93IiwiQ09VTlQiLCJTbm93c3Rvcm0iLCJlbGVtZW50IiwibWFzdGhlYWQiLCJjYW52YXMiLCJjdHgiLCJnZXRDb250ZXh0Iiwid2lkdGgiLCJoZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJhY3RpdmUiLCJzbm93Zmxha2VzIiwiaW5pdCIsInByb3RvdHlwZSIsImxlZnQiLCJ0b3AiLCJvblJlc2l6ZSIsImJpbmQiLCJzbm93Zmxha2UiLCJTbm93Zmxha2UiLCJyZXNldCIsInB1c2giLCJyZXF1ZXN0QW5pbUZyYW1lIiwidXBkYXRlIiwiZmlsbFN0eWxlIiwid2FzQWN0aXZlIiwiY2xlYXJSZWN0IiwieSIsInZ5IiwieCIsInZ4IiwiZ2xvYmFsQWxwaGEiLCJvIiwiYmVnaW5QYXRoIiwiYXJjIiwiciIsIlBJIiwiY2xvc2VQYXRoIiwiZmlsbCIsInNub3dzdG9ybSIsInJhbmRvbSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1velJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbGxiYWNrIiwic2V0VGltZW91dCIsInNraWVzIiwic2t5IiwiYmFsbCIsInBhcmVudEVsZW1lbnQiLCJtYXhTbm93Zmxha2VzIiwibWF4U3BlZWQiLCJzdG9ybUNvdW50ZXIiLCJzbm93Zmxha2VzUmVtb3ZlZCIsInJhZGl1cyIsInNwZWVkWCIsInNwZWVkWSIsImFjY2VsZXJhdGlvbiIsIm1vdmluZ1RvQm90dG9tIiwiYmFsbFgiLCJiYWxsWSIsImJhbGxSYWRpdXMiLCJiYWxsU2hha2luZyIsInRhcmdldFNwZWVkIiwic3BlZWREZWNheUZhY3RvciIsIm1heCIsIm1pbiIsImR4IiwiZHkiLCJkaXN0YW5jZSIsInNxcnQiLCJhbmdsZSIsImF0YW4yIiwib3ZlcmxhcCIsImNvcyIsInNpbiIsInNwbGljZSIsImluZGV4T2YiLCJsYXN0QmFsbFNoYWtpbmdTdGF0ZSIsImFuaW1hdGUiLCJiYWxsVHJhbnNmb3JtIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIm9mZnNldFdpZHRoIiwibWF0cml4IiwiRE9NTWF0cml4Iiwib2Zmc2V0TGVmdCIsIm00MSIsIm9mZnNldFRvcCIsIm00MiIsIm1vdmVUb0JvdHRvbSIsImRyYXciLCJzZW5kU2hha2VSZXF1ZXN0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0eXBlIiwicGFyYW1zIiwidXNlcmlkIiwicmVxdWVzdCIsIm1ldGhvZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJidG5TaGFrZSIsImJhbGxCb3giLCJpbml0U2hha2UiLCJib3giLCJ0aGVuIiwicmVzIiwiZXJyb3IiLCJwcml6ZSIsInN0cmVha0JvbnVzIiwiZGVsYXkiLCJtcyIsImhhbmRsZVJlc2l6ZSIsInRvdWNoU3RhcnRYIiwidG91Y2hFbmRYIiwidG91Y2hTdGFydFRpbWUiLCJoYW5kbGVUb3VjaFN0YXJ0IiwiZXZlbnQiLCJ0b3VjaGVzIiwiY2xpZW50WCIsIkRhdGUiLCJub3ciLCJoYW5kbGVUb3VjaE1vdmUiLCJoYW5kbGVUb3VjaEVuZCIsInN3aXBlRGlzdGFuY2UiLCJzd2lwZVRpbWUiLCJhYnMiLCJsb2NhdGlvbiIsInJlbG9hZCJdLCJtYXBwaW5ncyI6Ijs7OytDQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQSxDQUFDLFlBQVk7RUFDVCxJQUFNQSxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFNBQVMsQ0FBQztFQUNoRCxJQUFNQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFNBQVMsQ0FBQztFQUVoRCxJQUFJRSxNQUFNLEdBQUcsSUFBSTtFQUVqQixJQUFJSixNQUFNLEVBQUVJLE1BQU0sR0FBRyxJQUFJO0VBQ3pCLElBQUlELE1BQU0sRUFBRUMsTUFBTSxHQUFHLElBQUk7RUFHekIsSUFBSUMsUUFBUSxHQUFHLENBQUMsQ0FBQztFQUNqQixJ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LGdCQUFnQixDQUFDLFdBQVcsRUFBRXdJLGVBQWUsQ0FBQztJQUM3RGpNLGNBQWMsQ0FBQ3lELGdCQUFnQixDQUFDLFVBQVUsRUFBRXlJLGNBQWMsQ0FBQztJQUMzRDFMLE1BQU0sQ0FBQ2lELGdCQUFnQixDQUFDLG1CQUFtQixFQUFFLFlBQUs7TUFDOUM2SSxRQUFRLENBQUNDLE1BQU0sRUFBRTtJQUNyQixDQUFDLENBQUM7RUFDTixDQUFDO0VBRURoQixZQUFZLEVBQUU7QUFFbEIsQ0FBQyxHQUFHIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGhyTGVuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNockxlbmcnKTtcbiAgICBjb25zdCBlbkxlbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW5MZW5nJyk7XG5cbiAgICBsZXQgbG9jYWxlID0gJ2VuJztcblxuICAgIGlmIChockxlbmcpIGxvY2FsZSA9ICdocic7XG4gICAgaWYgKGVuTGVuZykgbG9jYWxlID0gJ2VuJztcblxuXG4gICAgbGV0IGkxOG5EYXRhID0ge307XG4gICAgY29uc3QgZGVidWcgPSB0cnVlO1xuICAgIC8vIGxldCB1c2VySWQ7XG4gICAgbGV0IHVzZXJJZCA9IDk5NDMyO1xuXG5cbiAgICAvLyBDYXJkcyBzbGlkZXJcbiAgICAvLyBjb25zdCBjYXJkc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcml6ZV9fbGlzdCcpLFxuICAgIC8vICAgICAgIGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByaXplX19saXN0LWl0ZW0nKSxcbiAgICAvLyAgICAgICBjYXJkc1dyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpemVfX2xpc3Qtc2Nyb2xsJyksXG4gICAgLy8gICAgICAgbW92ZVJpZ2h0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaXplX19zbGlkZXItbW92ZS1yaWdodCcpLFxuICAgIC8vICAgICAgIG1vdmVMZWZ0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaXplX19zbGlkZXItbW92ZS1sZWZ0JyksXG4gICAgLy8gICAgICAgdGFic0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcml6ZV9fdGFicycpLFxuICAgIC8vICAgICAgIGlzTW9iaWxlID0gd2luZG93LmlubmVyV2lkdGggPCA2MDAsXG4gICAgLy8gICAgICAgdG90YWxDYXJkcyA9IGNhcmRzLmxlbmd0aCxcbiAgICAvLyAgICAgICBjYXJkV2lkdGggPSBjYXJkc1swXS5jbGllbnRXaWR0aCxcbiAgICAvLyAgICAgICBjYXJkc01hcmdpbiA9IChjYXJkc1dyYXAuY2xpZW50V2lkdGggLSBjYXJkV2lkdGggKiB0b3RhbENhcmRzKSAvICh0b3RhbENhcmRzIC0gMSksXG4gICAgLy8gICAgICAgdmlzaWJsZVNsaWRlcyA9IGlzTW9iaWxlID8gMSA6IE1hdGguY2VpbChjYXJkc0NvbnRhaW5lci5jbGllbnRXaWR0aCAvIChjYXJkV2lkdGggKyBjYXJkc01hcmdpbikpLFxuICAgIC8vICAgICAgIHRvdGFsVGFicyA9IE1hdGguY2VpbCh0b3RhbENhcmRzIC8gdmlzaWJsZVNsaWRlcyksXG4gICAgLy8gICAgICAgdGFiV2lkdGg9IHZpc2libGVTbGlkZXMgKiAoY2FyZFdpZHRoICsgY2FyZHNNYXJnaW4pXG4gICAgLy9cbiAgICAvLyBjb25zb2xlLmxvZyh0YWJXaWR0aClcbiAgICAvL1xuICAgIC8vIGxldCBjdXJyZW50U2xpZGUgPSAxO1xuICAgIC8vIGxldCBjYXJkc1Bvc2l0aW9uID0gMFxuICAgIC8vICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSB0b3RhbFRhYnM7IGkrKykge1xuICAgIC8vICAgICAgICAgY29uc3QgdGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgLy8gICAgICAgICB0YWIuY2xhc3NMaXN0LmFkZCgncHJpemVfX3RhYnMtaXRlbScpO1xuICAgIC8vICAgICAgICAgdGFic0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YWIpO1xuICAgIC8vICAgICB9XG4gICAgLy9cbiAgICAvLyBjb25zdCB1cGRhdGVBY3RpdmVDYXJkID0gKGNhcmRzLCBhY3RpdmVJbmRleCkgPT4ge1xuICAgIC8vICAgICBjYXJkcy5mb3JFYWNoKChjYXJkLCBpKSA9PntcbiAgICAvLyAgICAgICAgIGFjdGl2ZUluZGV4IC0gMSA9PT0gaSA/IGNhcmQuY2xhc3NMaXN0LmFkZChcIl9hY3RpdmVcIikgOiBjYXJkLmNsYXNzTGlzdC5yZW1vdmUoXCJfYWN0aXZlXCIpXG4gICAgLy8gICAgIH0pXG4gICAgLy8gfVxuICAgIC8vIHVwZGF0ZUFjdGl2ZUNhcmQoY2FyZHMsIGN1cnJlbnRTbGlkZSlcbiAgICAvL1xuICAgIC8vIGNvbnN0IHVwZGF0ZVRhYnMgPSAoKSA9PiB7XG4gICAgLy8gICAgIGNvbnN0IGFjdGl2ZVRhYiA9IE1hdGguY2VpbChjdXJyZW50U2xpZGUgLyB2aXNpYmxlU2xpZGVzKTtcbiAgICAvLyAgICAgdGFic0NvbnRhaW5lci5jaGlsZE5vZGVzLmZvckVhY2goKHRhYiwgaW5kZXgpID0+IHtcbiAgICAvLyAgICAgICAgIHRhYi5jbGFzc0xpc3QudG9nZ2xlKCdfYWN0aXZlJywgaW5kZXggKyAxID09PSBhY3RpdmVUYWIpO1xuICAgIC8vICAgICB9KTtcbiAgICAvLyB9O1xuICAgIC8vIHVwZGF0ZVRhYnMoKTtcbiAgICAvLyBmdW5jdGlvbiBzZXRDYXJkc1Bvc2l0aW9uIChwb3NpdGlvbikge1xuICAgIC8vICAgICBjYXJkc1dyYXAuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoLSR7cG9zaXRpb259cHgpYDtcbiAgICAvLyB9O1xuICAgIC8vIGNvbnN0IG1vdmVSaWdodCA9ICgpID0+IHtcbiAgICAvLyAgICAgaWYgKGN1cnJlbnRTbGlkZSA+PSB0b3RhbENhcmRzIC0gdmlzaWJsZVNsaWRlcyAmJiBpc01vYmlsZSA9PT0gZmFsc2UpIHtcbiAgICAvLyAgICAgICAgIGN1cnJlbnRTbGlkZSA9IDE7XG4gICAgLy8gICAgICAgICBjYXJkc1Bvc2l0aW9uID0gMDtcbiAgICAvLyAgICAgfWVsc2UgaWYoY3VycmVudFNsaWRlID09PSB0b3RhbENhcmRzKSB7XG4gICAgLy8gICAgICAgICBjdXJyZW50U2xpZGUgPSAxO1xuICAgIC8vICAgICAgICAgY2FyZHNQb3NpdGlvbiA9IDA7XG4gICAgLy8gICAgIH1lbHNlIHtcbiAgICAvLyAgICAgICAgIGNvbnN0IG1heFBvc2l0aW9uID0gKHRvdGFsQ2FyZHMgLSB2aXNpYmxlU2xpZGVzKSAqIChjYXJkV2lkdGggKyBjYXJkc01hcmdpbik7XG4gICAgLy8gICAgICAgICBpZiAoY2FyZHNQb3NpdGlvbiArIGNhcmRXaWR0aCArIGNhcmRzTWFyZ2luID4gbWF4UG9zaXRpb24pIHtcbiAgICAvLyAgICAgICAgICAgICBjYXJkc1Bvc2l0aW9uID0gbWF4UG9zaXRpb247XG4gICAgLy8gICAgICAgICAgICAgY3VycmVudFNsaWRlID0gdG90YWxDYXJkcyAtIHZpc2libGVTbGlkZXMgKyAxO1xuICAgIC8vICAgICAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgICAgICBjYXJkc1Bvc2l0aW9uICs9IGNhcmRXaWR0aCArIGNhcmRzTWFyZ2luO1xuICAgIC8vICAgICAgICAgICAgIGN1cnJlbnRTbGlkZSsrO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9XG4gICAgLy8gICAgIHNldENhcmRzUG9zaXRpb24oY2FyZHNQb3NpdGlvbik7XG4gICAgLy8gICAgIHVwZGF0ZVRhYnMoKTtcbiAgICAvLyAgICAgdXBkYXRlQWN0aXZlQ2FyZChjYXJkcywgY3VycmVudFNsaWRlKVxuICAgIC8vIH07XG4gICAgLy8gY29uc3QgbW92ZUxlZnQgPSAoKSA9PiB7XG4gICAgLy8gICAgIGlmKGN1cnJlbnRTbGlkZSA9PT0gMSAmJiBpc01vYmlsZSA9PT0gZmFsc2Upe1xuICAgIC8vICAgICAgICAgY3VycmVudFNsaWRlID0gdG90YWxDYXJkcyAtIHZpc2libGVTbGlkZXM7XG4gICAgLy8gICAgICAgICBjYXJkc1Bvc2l0aW9uID0gKCh0b3RhbENhcmRzIC0gdmlzaWJsZVNsaWRlcykgKiAoY2FyZFdpZHRoICsgY2FyZHNNYXJnaW4pKSAtKGNhcmRXaWR0aCArIGNhcmRzTWFyZ2luKTtcbiAgICAvLyAgICAgfWVsc2UgaWYgKGN1cnJlbnRTbGlkZSA9PT0gMikge1xuICAgIC8vICAgICAgICAgY2FyZHNQb3NpdGlvbiA9IDBcbiAgICAvLyAgICAgICAgIGN1cnJlbnRTbGlkZSA9IDFcbiAgICAvLyAgICAgfWVsc2UgaWYoY3VycmVudFNsaWRlID09PSAxICYmIGlzTW9iaWxlID09PSB0cnVlKXtcbiAgICAvLyAgICAgICAgIGN1cnJlbnRTbGlkZSA9IHRvdGFsQ2FyZHNcbiAgICAvLyAgICAgICAgIGNhcmRzUG9zaXRpb24gPSB0b3RhbENhcmRzICAqIChjYXJkV2lkdGggKyBjYXJkc01hcmdpbikgLSAoY2FyZFdpZHRoICsgY2FyZHNNYXJnaW4pXG4gICAgLy8gICAgIH1lbHNlIHtcbiAgICAvLyAgICAgICAgIGNhcmRzUG9zaXRpb24gLT0gY2FyZFdpZHRoICsgY2FyZHNNYXJnaW47XG4gICAgLy8gICAgICAgICBjdXJyZW50U2xpZGUtLVxuICAgIC8vICAgICB9XG4gICAgLy8gICAgIHNldENhcmRzUG9zaXRpb24oY2FyZHNQb3NpdGlvbik7XG4gICAgLy8gICAgIHVwZGF0ZVRhYnMoKTtcbiAgICAvLyAgICAgdXBkYXRlQWN0aXZlQ2FyZChjYXJkcywgY3VycmVudFNsaWRlKVxuICAgIC8vIH07XG5cbiAgICBjb25zdCBjYXJkc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcml6ZV9fbGlzdCcpLFxuICAgICAgICBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcml6ZV9fbGlzdC1pdGVtJyksXG4gICAgICAgIGNhcmRzV3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcml6ZV9fbGlzdC1zY3JvbGwnKSxcbiAgICAgICAgbW92ZVJpZ2h0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaXplX19zbGlkZXItbW92ZS1yaWdodCcpLFxuICAgICAgICBtb3ZlTGVmdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcml6ZV9fc2xpZGVyLW1vdmUtbGVmdCcpLFxuICAgICAgICB0YWJzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaXplX190YWJzJyksXG4gICAgICAgIGlzTW9iaWxlID0gd2luZG93LmlubmVyV2lkdGggPCA2MDAsXG4gICAgICAgIHRvdGFsQ2FyZHMgPSBjYXJkcy5sZW5ndGgsXG4gICAgICAgIGNhcmRXaWR0aCA9IGNhcmRzWzBdLmNsaWVudFdpZHRoLFxuICAgICAgICBjYXJkc01hcmdpbiA9IChjYXJkc1dyYXAuY2xpZW50V2lkdGggLSBjYXJkV2lkdGggKiB0b3RhbENhcmRzKSAvICh0b3RhbENhcmRzIC0gMSksXG4gICAgICAgIHZpc2libGVTbGlkZXMgPSBpc01vYmlsZSA/IDEgOiBNYXRoLmNlaWwoY2FyZHNDb250YWluZXIuY2xpZW50V2lkdGggLyAoY2FyZFdpZHRoICsgY2FyZHNNYXJnaW4pKSxcbiAgICAgICAgdG90YWxUYWJzID0gTWF0aC5jZWlsKHRvdGFsQ2FyZHMgLyB2aXNpYmxlU2xpZGVzKSxcbiAgICAgICAgdGFiV2lkdGg9IHZpc2libGVTbGlkZXMgKiAoY2FyZFdpZHRoICsgY2FyZHNNYXJnaW4pXG5cbiAgICBsZXQgY3VycmVudFNsaWRlID0gMTtcbiAgICBsZXQgY3VycmVudFRhYiA9IDE7XG4gICAgbGV0IGNhcmRzUG9zaXRpb24gPSAwO1xuICAgIGxldCBsZWZ0U2xpZGU7XG4gICAgbGV0IHJpZ2h0U2xpZGU7XG4gICAgY29uc29sZS5sb2codG90YWxUYWJzKVxuXG4vLyDQodGC0LLQvtGA0LXQvdC90Y8g0YLQsNCx0ZbQslxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHRvdGFsVGFiczsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YWIuY2xhc3NMaXN0LmFkZCgncHJpemVfX3RhYnMtaXRlbScpO1xuICAgICAgICB0YWJzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhYik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGVmdFNsaWRlVGFiKCl7XG4gICAgICAgIGxlZnRTbGlkZSA9IGN1cnJlbnRUYWIgKiB2aXNpYmxlU2xpZGVzIC0gKHZpc2libGVTbGlkZXMgLSAxKVxuICAgIH1cbiAgICBmdW5jdGlvbiByaWdodFNsaWRlVGFiKCl7XG4gICAgICAgIHJpZ2h0U2xpZGUgPSBjdXJyZW50VGFiICogdmlzaWJsZVNsaWRlc1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZpcnN0TGFzdFNsaWRlcygpe1xuICAgICAgICBpZihpc01vYmlsZSkgcmV0dXJuXG4gICAgICAgIGxlZnRTbGlkZVRhYigpXG4gICAgICAgIHJpZ2h0U2xpZGVUYWIoKVxuICAgICAgICBjYXJkcy5mb3JFYWNoKChjYXJkICwgaSkgPT57XG4gICAgICAgICAgICBpICsgMSA9PT0gbGVmdFNsaWRlID8gY2FyZC5jbGFzc0xpc3QuYWRkKFwiX2xlZnRcIikgOiBjYXJkLmNsYXNzTGlzdC5yZW1vdmUoXCJfbGVmdFwiKVxuICAgICAgICAgICAgaSArIDEgPT09IHJpZ2h0U2xpZGUgPyBjYXJkLmNsYXNzTGlzdC5hZGQoXCJfcmlnaHRcIikgOiBjYXJkLmNsYXNzTGlzdC5yZW1vdmUoXCJfcmlnaHRcIilcbiAgICAgICAgfSlcbiAgICB9XG4gICAgZmlyc3RMYXN0U2xpZGVzKClcblxuICAgIGNvbnN0IHVwZGF0ZUFjdGl2ZUNhcmQgPSAoY2FyZHMsIGFjdGl2ZUluZGV4KSA9PiB7XG4gICAgICAgIGNhcmRzLmZvckVhY2goKGNhcmQsIGkpID0+IHtcbiAgICAgICAgICAgIGFjdGl2ZUluZGV4IC0gMSA9PT0gaSA/IGNhcmQuY2xhc3NMaXN0LmFkZChcIl9hY3RpdmVcIikgOiBjYXJkLmNsYXNzTGlzdC5yZW1vdmUoXCJfYWN0aXZlXCIpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHVwZGF0ZUFjdGl2ZUNhcmQoY2FyZHMsIGN1cnJlbnRTbGlkZSk7XG5cbiAgICBjb25zdCB1cGRhdGVUYWJzID0gKCkgPT4ge1xuICAgICAgICBpZihpc01vYmlsZSl7XG4gICAgICAgICAgICBjb25zdCBhY3RpdmVUYWIgPSBNYXRoLmNlaWwoY3VycmVudFNsaWRlIC8gdmlzaWJsZVNsaWRlcyk7XG4gICAgICAgICAgICB0YWJzQ29udGFpbmVyLmNoaWxkTm9kZXMuZm9yRWFjaCgodGFiLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHRhYi5jbGFzc0xpc3QudG9nZ2xlKCdfYWN0aXZlJywgaW5kZXggKyAxID09PSBhY3RpdmVUYWIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGFic0NvbnRhaW5lci5jaGlsZE5vZGVzLmZvckVhY2goKHRhYiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICB0YWIuY2xhc3NMaXN0LnJlbW92ZShcIl9hY3RpdmVcIilcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50VGFiLCBpbmRleClcbiAgICAgICAgICAgICAgICBpbmRleCArIDEgPT09IGN1cnJlbnRUYWIgPyB0YWIuY2xhc3NMaXN0LmFkZChcIl9hY3RpdmVcIikgOiBudWxsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG5cbiAgICB9O1xuICAgIHVwZGF0ZVRhYnMoKTtcblxuICAgIGZ1bmN0aW9uIHNldENhcmRzUG9zaXRpb24ocG9zaXRpb24pIHtcbiAgICAgICAgY2FyZHNXcmFwLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKC0ke3Bvc2l0aW9ufXB4KWA7XG4gICAgfTtcblxuICAgIGNvbnN0IG1vdmVSaWdodCA9ICgpID0+IHtcbiAgICAgICAgaWYgKGlzTW9iaWxlKSB7XG4gICAgICAgICAgICAvLyDQnNC+0LHRltC70YzQvdCwINC70L7Qs9GW0LrQsFxuICAgICAgICAgICAgaWYgKGN1cnJlbnRTbGlkZSA+PSB0b3RhbENhcmRzKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFNsaWRlID0gMTtcbiAgICAgICAgICAgICAgICBjYXJkc1Bvc2l0aW9uID0gMDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2FyZHNQb3NpdGlvbiArPSBjYXJkV2lkdGggKyBjYXJkc01hcmdpbjtcbiAgICAgICAgICAgICAgICBjdXJyZW50U2xpZGUrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmKGN1cnJlbnRUYWIgPT09IHRvdGFsVGFicyl7XG4gICAgICAgICAgICAgICAgY2FyZHNQb3NpdGlvbiA9IDBcbiAgICAgICAgICAgICAgICBjdXJyZW50VGFiID0gMVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgY2FyZHNQb3NpdGlvbiArPSB0YWJXaWR0aFxuICAgICAgICAgICAgICAgICsrY3VycmVudFRhYlxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZpcnN0TGFzdFNsaWRlcygpXG4gICAgICAgIHNldENhcmRzUG9zaXRpb24oY2FyZHNQb3NpdGlvbik7XG4gICAgICAgIHVwZGF0ZVRhYnMoKTtcbiAgICAgICAgdXBkYXRlQWN0aXZlQ2FyZChjYXJkcywgY3VycmVudFNsaWRlKTtcbiAgICAgICAgaGlkZVBvcHVwcyhjYXJkcylcblxuICAgIH07XG5cblxuXG4gICAgY29uc3QgbW92ZUxlZnQgPSAoKSA9PiB7XG4gICAgICAgIGlmIChpc01vYmlsZSkge1xuICAgICAgICAgICAgLy8g0JzQvtCx0ZbQu9GM0L3QsCDQu9C+0LPRltC60LBcbiAgICAgICAgICAgIGlmIChjdXJyZW50U2xpZGUgPT09IDEpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50U2xpZGUgPSB0b3RhbENhcmRzO1xuICAgICAgICAgICAgICAgIGNhcmRzUG9zaXRpb24gPSAodG90YWxDYXJkcyAtIDEpICogKGNhcmRXaWR0aCArIGNhcmRzTWFyZ2luKTtcbiAgICAgICAgICAgIH1lbHNlIGlmKGN1cnJlbnRTbGlkZSA9PT0gMil7XG4gICAgICAgICAgICAgICAgY3VycmVudFNsaWRlID0gMTtcbiAgICAgICAgICAgICAgICBjYXJkc1Bvc2l0aW9uID0gMFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY2FyZHNQb3NpdGlvbiAtPSBjYXJkV2lkdGggKyBjYXJkc01hcmdpbjtcbiAgICAgICAgICAgICAgICBjdXJyZW50U2xpZGUtLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgaWYoY3VycmVudFRhYiA9PT0gMSl7XG4gICAgICAgICAgICAgICAgY3VycmVudFRhYiA9IHRvdGFsVGFic1xuICAgICAgICAgICAgICAgIGNhcmRzUG9zaXRpb24gPSAoY3VycmVudFRhYiAqIHRhYldpZHRoKSAtIHRhYldpZHRoXG4gICAgICAgICAgICB9ZWxzZSBpZihjdXJyZW50VGFiID09PSAyKXtcbiAgICAgICAgICAgICAgICBjYXJkc1Bvc2l0aW9uID0gMFxuICAgICAgICAgICAgICAgIGN1cnJlbnRUYWIgPSAxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYXJkc1Bvc2l0aW9uIC09IHRhYldpZHRoXG4gICAgICAgICAgICAgICAgLS1jdXJyZW50VGFiXG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIHNldENhcmRzUG9zaXRpb24oY2FyZHNQb3NpdGlvbik7XG4gICAgICAgIHVwZGF0ZVRhYnMoKTtcbiAgICAgICAgZmlyc3RMYXN0U2xpZGVzKClcbiAgICAgICAgdXBkYXRlQWN0aXZlQ2FyZChjYXJkcywgY3VycmVudFNsaWRlKTtcbiAgICAgICAgaGlkZVBvcHVwcyhjYXJkcylcbiAgICB9O1xuXG4gICAgLy8gcG9wdXBzIGxvZ2ljXG5cbiAgICBmdW5jdGlvbiBzZXRQb3B1cHMocG9wdXBzLCBwb3B1cHNCdG5zKSB7XG4gICAgICAgIHBvcHVwc0J0bnMuZm9yRWFjaCgoYnRuLCBpKSA9PiB7XG4gICAgICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgcG9wdXBzLmZvckVhY2goKHBvcHVwLCBqKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGkgPT09IGogPyBwb3B1cC5jbGFzc0xpc3QuYWRkKFwiX3BvcHVwXCIpIDogcG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcIl9wb3B1cFwiKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoaWRlUG9wdXBzKHBvcHVwcyl7XG4gICAgICAgIHBvcHVwcy5mb3JFYWNoKHBvcHVwID0+e1xuICAgICAgICAgICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwiX3BvcHVwXCIpXG4gICAgICAgIH0pXG4gICAgfVxuLy8gcG9wdXBzXG4gICAgY29uc3QgcHJpemVPcGVuQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJpemVfX2xpc3QtaXRlbS1idG5cIilcbiAgICBjb25zdCBwcml6ZUNsb3NlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJpemVfX2xpc3QtcG9wdXAtY2xvc2VcIilcbiAgICBjb25zdCBndWlkZVBvcHVwc1dyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmd1aWRlX19pdGVtXCIpXG4gICAgY29uc3QgZ3VpZGVPcGVuQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZ3VpZGVfX2l0ZW0taW5mby1idG5cIilcbiAgICBjb25zdCBndWlkZUNsb3NlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZ3VpZGVfX2l0ZW0tcG9wdXAtY2xvc2VcIilcbiAgICBjb25zdCB0YWJsZVBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YWJsZV9fcG9wdXBcIilcbiAgICBjb25zdCB0YWJsZVBvcHVwQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhYmxlX19wb3B1cC1jbG9zZVwiKVxuICAgIGNvbnN0IHRhYmxlUG9wdXBPcGVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YWJsZV9faW5mb1wiKVxuXG4gICAgc2V0UG9wdXBzKGNhcmRzLCBwcml6ZU9wZW5CdG5zKTtcbiAgICBzZXRQb3B1cHMoZ3VpZGVQb3B1cHNXcmFwLCBndWlkZU9wZW5CdG5zKTtcblxuICAgIGd1aWRlQ2xvc2VCdG5zLmZvckVhY2goYnRuID0+e1xuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcbiAgICAgICAgICAgIGhpZGVQb3B1cHMoZ3VpZGVQb3B1cHNXcmFwKVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIHByaXplQ2xvc2VCdG5zLmZvckVhY2goYnRuID0+e1xuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcbiAgICAgICAgICAgIGhpZGVQb3B1cHMoY2FyZHMpXG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGFibGVQb3B1cE9wZW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgIHRhYmxlUG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIilcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCJcbiAgICB9KTtcblxuICAgIHRhYmxlUG9wdXBDbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIHRhYmxlUG9wdXAuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiXG4gICAgfSk7XG5cbi8vIHNub3dmYWxsIGFuaW1hdGlvblxuICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBDT1VOVCA9IDQwMDtcblxuICAgICAgICBmdW5jdGlvbiBTbm93c3Rvcm0oZWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5tYXN0aGVhZCA9IGVsZW1lbnQ7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMubWFzdGhlYWQuY2xpZW50V2lkdGg7XG4gICAgICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMubWFzdGhlYWQuY2xpZW50SGVpZ2h0O1xuICAgICAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc25vd2ZsYWtlcyA9IFtdO1xuXG4gICAgICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFNub3dzdG9ybS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmxlZnQgPSB0aGlzLmNhbnZhcy5zdHlsZS50b3AgPSAnMCc7XG4gICAgICAgICAgICB0aGlzLm1hc3RoZWFkLmFwcGVuZENoaWxkKHRoaXMuY2FudmFzKTtcblxuICAgICAgICAgICAgdGhpcy5vblJlc2l6ZSgpO1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25SZXNpemUuYmluZCh0aGlzKSwgZmFsc2UpO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IENPVU5UOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgc25vd2ZsYWtlID0gbmV3IHRoaXMuU25vd2ZsYWtlKHRoaXMpO1xuICAgICAgICAgICAgICAgIHNub3dmbGFrZS5yZXNldCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc25vd2ZsYWtlcy5wdXNoKHNub3dmbGFrZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltRnJhbWUodGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgU25vd3N0b3JtLnByb3RvdHlwZS5vblJlc2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMud2lkdGggPSB0aGlzLm1hc3RoZWFkLmNsaWVudFdpZHRoO1xuICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLm1hc3RoZWFkLmNsaWVudEhlaWdodDtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gdGhpcy53aWR0aDtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHRoaXMuaGVpZ2h0O1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJyNGRkYnO1xuXG4gICAgICAgICAgICB2YXIgd2FzQWN0aXZlID0gdGhpcy5hY3RpdmU7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZSA9IHRoaXMud2lkdGggPiA4MDtcbiAgICAgICAgICAgIHRoaXMud2lkdGggPiAyODAgPyBDT1VOVCA9IDE1MCA6IG51bGxcblxuICAgICAgICAgICAgaWYgKCF3YXNBY3RpdmUgJiYgdGhpcy5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbUZyYW1lKHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIFNub3dzdG9ybS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcblxuICAgICAgICAgICAgaWYgKCF0aGlzLmFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBDT1VOVDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNub3dmbGFrZSA9IHRoaXMuc25vd2ZsYWtlc1tpXTtcbiAgICAgICAgICAgICAgICBzbm93Zmxha2UueSArPSBzbm93Zmxha2Uudnk7XG4gICAgICAgICAgICAgICAgc25vd2ZsYWtlLnggKz0gc25vd2ZsYWtlLnZ4O1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZ2xvYmFsQWxwaGEgPSBzbm93Zmxha2UubztcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5hcmMoc25vd2ZsYWtlLngsIHNub3dmbGFrZS55LCBzbm93Zmxha2UuciwgMCwgTWF0aC5QSSAqIDIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoc25vd2ZsYWtlLnkgPiB0aGlzLmhlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICBzbm93Zmxha2UucmVzZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlcXVlc3RBbmltRnJhbWUodGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgU25vd3N0b3JtLnByb3RvdHlwZS5Tbm93Zmxha2UgPSBmdW5jdGlvbiAoc25vd3N0b3JtKSB7XG4gICAgICAgICAgICB0aGlzLnNub3dzdG9ybSA9IHNub3dzdG9ybTtcbiAgICAgICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgfTtcblxuICAgICAgICBTbm93c3Rvcm0ucHJvdG90eXBlLlNub3dmbGFrZS5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLnggPSBNYXRoLnJhbmRvbSgpICogdGhpcy5zbm93c3Rvcm0ud2lkdGg7XG4gICAgICAgICAgICB0aGlzLnkgPSBNYXRoLnJhbmRvbSgpICogLXRoaXMuc25vd3N0b3JtLmhlaWdodDtcbiAgICAgICAgICAgIHRoaXMudnkgPSAwLjMgKyBNYXRoLnJhbmRvbSgpICogMC4wMDAwMTtcbiAgICAgICAgICAgIHRoaXMudnggPSAwLjYgLSBNYXRoLnJhbmRvbSgpO1xuICAgICAgICAgICAgdGhpcy5yID0gMSArIE1hdGgucmFuZG9tKCkgKiAyO1xuICAgICAgICAgICAgdGhpcy5vID0gMTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBzaGltIGxheWVyIHdpdGggc2V0VGltZW91dCBmYWxsYmFja1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1GcmFtZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICAgICAgICAgIHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgICAgICAgICB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCAxMDAwIC8gNjApO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgIH0pKCk7XG5cbiAgICAgICAgLy8gQXBwbHkgU25vd3N0b3JtIHRvIGFsbCBlbGVtZW50cyB3aXRoIHRoZSBjbGFzcyAnc2t5J1xuICAgICAgICB2YXIgc2tpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2t5Jyk7XG4gICAgICAgIHNraWVzLmZvckVhY2goZnVuY3Rpb24gKHNreSkge1xuICAgICAgICAgICAgbmV3IFNub3dzdG9ybShza3kpO1xuICAgICAgICB9KTtcblxuXG5cbiAgICAgICAgLy8gYmFsbCBzaGFrZSBzbm93XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbm93Q2FudmFzJyk7XG4gICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBjb25zdCBiYWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNwaGVyZScpO1xuXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IGNhbnZhcy5wYXJlbnRFbGVtZW50LmNsaWVudFdpZHRoO1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gY2FudmFzLnBhcmVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuXG4gICAgICAgIGxldCBzbm93Zmxha2VzID0gW107XG4gICAgICAgIGNvbnN0IG1heFNub3dmbGFrZXMgPSAxMDA7XG4gICAgICAgIGNvbnN0IG1heFNwZWVkID0gNzsgLy8g0JzQsNC60YHQuNC80LDQu9GM0L3QsCDRiNCy0LjQtNC60ZbRgdGC0Ywg0YHQvdGW0LbQuNC90LrQuFxuICAgICAgICBsZXQgc3Rvcm1Db3VudGVyID0gMVxuXG5cbiAgICAgICAgbGV0IHNub3dmbGFrZXNSZW1vdmVkID0gMDtcblxuICAgICAgICBjbGFzcyBTbm93Zmxha2Uge1xuICAgICAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy54ID0gTWF0aC5yYW5kb20oKSAqIGNhbnZhcy53aWR0aDtcbiAgICAgICAgICAgICAgICB0aGlzLnkgPSBNYXRoLnJhbmRvbSgpICogY2FudmFzLmhlaWdodDtcbiAgICAgICAgICAgICAgICB0aGlzLnJhZGl1cyA9IE1hdGgucmFuZG9tKCkgKiAzICsgMTtcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVkWCA9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDEwO1xuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWRZID0gTWF0aC5yYW5kb20oKSAqIDEuNSArIDE7XG4gICAgICAgICAgICAgICAgdGhpcy5hY2NlbGVyYXRpb24gPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMubW92aW5nVG9Cb3R0b20gPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdXBkYXRlKGJhbGxYLCBiYWxsWSwgYmFsbFJhZGl1cywgYmFsbFNoYWtpbmcpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tb3ZpbmdUb0JvdHRvbSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXRTcGVlZCA9IDAuMTsgLy8g0JzQsNC70LXQvdGM0LrQsCDRiNCy0LjQtNC60ZbRgdGC0YwsINC00L4g0Y/QutC+0Zcg0L/RgNCw0LPQvdC10LzQvlxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzcGVlZERlY2F5RmFjdG9yID0gMC4wNTsgLy8g0JrQvtC10YTRltGG0ZbRlNC90YIg0LTQu9GPINC/0LvQsNCy0L3QvtCz0L4g0YHQv9C+0LLRltC70YzQvdC10L3QvdGPXG5cbiAgICAgICAgICAgICAgICAgICAgLy8g0J/Qu9Cw0LLQvdC+INC90LDQsdC70LjQttCw0ZTQvNC+INGI0LLQuNC00LrRltGB0YLRjCDQtNC+IHRhcmdldFNwZWVkXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3BlZWRYID0gdGhpcy5zcGVlZFggLSAodGhpcy5zcGVlZFggLSB0YXJnZXRTcGVlZCkgKiBzcGVlZERlY2F5RmFjdG9yO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwZWVkWSA9IHRoaXMuc3BlZWRZIC0gKHRoaXMuc3BlZWRZIC0gdGFyZ2V0U3BlZWQpICogc3BlZWREZWNheUZhY3RvcjtcblxuICAgICAgICAgICAgICAgICAgICAvLyDQntC90L7QstC70LXQvdC90Y8g0L/QvtC30LjRhtGW0Zcg0YHQvdGW0LbQuNC90LrQuFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnkgKz0gdGhpcy5zcGVlZFk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMueSA+IGNhbnZhcy5oZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMueCArPSB0aGlzLnNwZWVkWDtcbiAgICAgICAgICAgICAgICB0aGlzLnkgKz0gdGhpcy5zcGVlZFk7XG5cbiAgICAgICAgICAgICAgICAvLyDQntCx0LzQtdC20LXQvdC90Y8g0YjQstC40LTQutC+0YHRgtGWXG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlZFggPSBNYXRoLm1heCgtbWF4U3BlZWQsIE1hdGgubWluKG1heFNwZWVkLCB0aGlzLnNwZWVkWCkpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWRZID0gTWF0aC5tYXgoLW1heFNwZWVkLCBNYXRoLm1pbihtYXhTcGVlZCwgdGhpcy5zcGVlZFkpKTtcblxuICAgICAgICAgICAgICAgIC8vINCU0L7QtNCw0LLQsNC90L3RjyDRiNCy0LjQtNC60L7RgdGC0ZYg0YfQtdGA0LXQtyBcItGC0YDRg9GB0ZbQvdC90Y9cIiDQutGD0LvRllxuICAgICAgICAgICAgICAgIGlmIChiYWxsU2hha2luZykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjY2VsZXJhdGlvbiArPSAwLjA1OyAvLyDQndCw0YDQvtGJ0YPQstCw0L3QvdGPINGI0LLQuNC00LrQvtGB0YLRllxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWNjZWxlcmF0aW9uICo9IDAuOTU7IC8vINCf0L7RgdGC0YPQv9C+0LLQtSDQt9C80LXQvdGI0LXQvdC90Y9cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlZFggKz0gdGhpcy5hY2NlbGVyYXRpb24gKiAoTWF0aC5yYW5kb20oKSAtIDAuNSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlZFkgKz0gdGhpcy5hY2NlbGVyYXRpb24gKiAoTWF0aC5yYW5kb20oKSAtIDAuNSk7XG5cbiAgICAgICAgICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNC60LAg0L3QsCDQvNC10LbRliBjYW52YXNcbiAgICAgICAgICAgICAgICBpZiAodGhpcy55ID4gY2FudmFzLmhlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnkgPSAwO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnggPSBNYXRoLnJhbmRvbSgpICogY2FudmFzLndpZHRoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy54ID4gY2FudmFzLndpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMueCA9IDA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnggPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMueCA9IGNhbnZhcy53aWR0aDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyDQktGW0LTRgdGC0LDQvdGMINC00L4g0YbQtdC90YLRgNGDINC60YPQu9GWXG4gICAgICAgICAgICAgICAgY29uc3QgZHggPSB0aGlzLnggLSBiYWxsWDtcbiAgICAgICAgICAgICAgICBjb25zdCBkeSA9IHRoaXMueSAtIGJhbGxZO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcblxuICAgICAgICAgICAgICAgIC8vINCS0ZbQtNGB0LrQvtC6INCy0ZbQtCDQutGD0LvRllxuICAgICAgICAgICAgICAgIGlmIChkaXN0YW5jZSA8IGJhbGxSYWRpdXMgKyB0aGlzLnJhZGl1cykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhbmdsZSA9IE1hdGguYXRhbjIoZHksIGR4KTsgLy8g0JrRg9GCINC30ZbRgtC60L3QtdC90L3Rj1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBvdmVybGFwID0gYmFsbFJhZGl1cyArIHRoaXMucmFkaXVzIC0gZGlzdGFuY2U7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8g0J/QtdGA0LXQvNGW0YnQtdC90L3RjyDRgdC90ZbQttC40L3QutC4XG4gICAgICAgICAgICAgICAgICAgIHRoaXMueCArPSBNYXRoLmNvcyhhbmdsZSkgKiBvdmVybGFwO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnkgKz0gTWF0aC5zaW4oYW5nbGUpICogb3ZlcmxhcDtcblxuICAgICAgICAgICAgICAgICAgICAvLyDQoNC10LLQtdGA0YEg0YjQstC40LTQutC+0YHRgtGWXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3BlZWRYICo9IC0wLjc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3BlZWRZICo9IC0wLjc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtb3ZlVG9Cb3R0b20oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZpbmdUb0JvdHRvbSA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlbW92ZSgpIHtcbiAgICAgICAgICAgICAgICBzbm93Zmxha2VzLnNwbGljZShzbm93Zmxha2VzLmluZGV4T2YodGhpcyksIDEpO1xuICAgICAgICAgICAgICAgIHNub3dmbGFrZXNSZW1vdmVkKys7XG4gICAgICAgICAgICAgICAgaWYgKHN0b3JtQ291bnRlciA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBuZXcgU25vd3N0b3JtKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3BoZXJlX19ib2R5XCIpKTtcbiAgICAgICAgICAgICAgICAgICAgc3Rvcm1Db3VudGVyKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkcmF3KCkge1xuICAgICAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICBjdHguYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgMCwgTWF0aC5QSSAqIDIpO1xuICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSAnd2hpdGUnO1xuICAgICAgICAgICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbi8vINCh0L/QsNCy0L3QuNC80L4g0L3QvtCy0ZYg0YHQvdGW0LbQuNC90LrQuCDQv9GA0Lgg0LfQvNGW0L3RliDRgdGC0LDQvdGDINC60YPQu9GWXG4gICAgICAgIGxldCBsYXN0QmFsbFNoYWtpbmdTdGF0ZSA9IGZhbHNlOyAvLyDQl9C80ZbQvdC90LAg0LTQu9GPINCy0ZbQtNGB0YLQtdC20LXQvdC90Y8g0YHRgtCw0L3RgyDQutGD0LvRllxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF4U25vd2ZsYWtlczsgaSsrKSB7XG4gICAgICAgICAgICBzbm93Zmxha2VzLnB1c2gobmV3IFNub3dmbGFrZSgpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGFuaW1hdGUoKSB7XG4gICAgICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGJhbGxUcmFuc2Zvcm0gPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShiYWxsKS50cmFuc2Zvcm07XG4gICAgICAgICAgICBsZXQgYmFsbFggPSBjYW52YXMud2lkdGggLyAyO1xuICAgICAgICAgICAgbGV0IGJhbGxZID0gY2FudmFzLmhlaWdodCAvIDI7XG4gICAgICAgICAgICBjb25zdCBiYWxsUmFkaXVzID0gYmFsbC5vZmZzZXRXaWR0aCAvIDI7XG4gICAgICAgICAgICBjb25zdCBiYWxsU2hha2luZyA9IGJhbGxUcmFuc2Zvcm0gIT09ICdub25lJztcblxuICAgICAgICAgICAgaWYgKGJhbGxUcmFuc2Zvcm0gIT09ICdub25lJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1hdHJpeCA9IG5ldyBET01NYXRyaXgoYmFsbFRyYW5zZm9ybSk7XG4gICAgICAgICAgICAgICAgYmFsbFggPSBiYWxsLm9mZnNldExlZnQgKyBtYXRyaXgubTQxICsgYmFsbFJhZGl1cztcbiAgICAgICAgICAgICAgICBiYWxsWSA9IGJhbGwub2Zmc2V0VG9wICsgbWF0cml4Lm00MiArIGJhbGxSYWRpdXM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vINCv0LrRidC+INGB0YLQsNC9INC60YPQu9GWINC30LzRltC90LjQstGB0Y8g0L3QsCBcItGA0YPRhVwiLCDQv9C10YDQtdC30LDQv9GD0YHQutCw0ZTQvNC+INGB0L3RltC20LjQvdC60LhcbiAgICAgICAgICAgIGlmIChiYWxsU2hha2luZyAmJiAhbGFzdEJhbGxTaGFraW5nU3RhdGUpIHtcbiAgICAgICAgICAgICAgICAvLyDQntGH0LjRidCw0ZTQvNC+INC80LDRgdC40LIg0YHQvdGW0LbQuNC90L7QulxuICAgICAgICAgICAgICAgIHNub3dmbGFrZXMgPSBbXTtcbiAgICAgICAgICAgICAgICBzbm93Zmxha2VzUmVtb3ZlZCA9IDA7XG4gICAgICAgICAgICAgICAgLy8g0KHQv9Cw0LLQvdC40LzQviDQvdC+0LLRliDRgdC90ZbQttC40L3QutC4XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXhTbm93Zmxha2VzOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc25vd2ZsYWtlcy5wdXNoKG5ldyBTbm93Zmxha2UoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsYXN0QmFsbFNoYWtpbmdTdGF0ZSA9IGJhbGxTaGFraW5nO1xuXG4gICAgICAgICAgICBzbm93Zmxha2VzLmZvckVhY2goc25vd2ZsYWtlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWJhbGxTaGFraW5nKSBzbm93Zmxha2UubW92ZVRvQm90dG9tKCk7XG4gICAgICAgICAgICAgICAgc25vd2ZsYWtlLnVwZGF0ZShiYWxsWCwgYmFsbFksIGJhbGxSYWRpdXMsIGJhbGxTaGFraW5nKTtcbiAgICAgICAgICAgICAgICBzbm93Zmxha2UuZHJhdygpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFuaW1hdGUoKTtcblxuICAgIH0pKCk7XG5cbiAgICBsZXQgaSA9IDE7XG4gICAgZnVuY3Rpb24gc2VuZFNoYWtlUmVxdWVzdCgpIHtcbiAgICAgICAgaWYgKCF1c2VySWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkZWJ1Zykge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgLy8gbnVtYmVyOiBpKyssXG4gICAgICAgICAgICAgICAgdHlwZTogJ3Rlc3QnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHt1c2VyaWQ6IHVzZXJJZH07XG4gICAgICAgIHJldHVybiByZXF1ZXN0KCcvc3BpbicsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGFyYW1zKVxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGNvbnN0IGJ0blNoYWtlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9ncmVzc19fc2hha2VcIilcbiAgICBjb25zdCBiYWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zcGhlcmVcIilcbiAgICBjb25zdCBiYWxsQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zcGhlcmVfX2JveFwiKVxuXG4gICAgZnVuY3Rpb24gaW5pdFNoYWtlKGJhbGwsIGJ0biwgYm94KSB7XG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgICAgICBzZW5kU2hha2VSZXF1ZXN0KCkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXMgfHwgISFyZXMuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gYnRuU2hha2UuY2xhc3NMaXN0LmFkZCgncHVsc2UtYnRuJyk7XG4gICAgICAgICAgICAgICAgICAgIGJ0blNoYWtlLmNsYXNzTGlzdC5yZW1vdmUoJ19kaXNhYmxlZCcpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gY29uc3QgcHJpemUgPSByZXMubnVtYmVyO1xuICAgICAgICAgICAgICAgIGNvbnN0IHByaXplID0gXCJpcGhvbmVcIjtcbiAgICAgICAgICAgICAgICBjb25zdCBzdHJlYWtCb251cyA9IHJlcy5zdHJlYWtCb251cyB8fCBkZWJ1ZztcbiAgICAgICAgICAgICAgICBjb25zdCBkZWxheSA9IChtcykgPT4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSlcbiAgICAgICAgICAgICAgICBpZihwcml6ZSA9PT0gXCJpcGhvbmVcIil7XG4gICAgICAgICAgICAgICAgICAgIGJveC5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uaXRlcmF0aW9uXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC5jbGFzc0xpc3QucmVtb3ZlKFwiX2JveEZsb2F0XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgKCBhc3luYyBmdW5jdGlvbiAoKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LmFkZChcIl9kaXNhYmxlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWxsLmNsYXNzTGlzdC5hZGQoXCJfc2hha2VcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJfc2hha2UtcmV2ZXJzZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBkZWxheSgyMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJfc2hha2VcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFsbC5jbGFzc0xpc3QuYWRkKFwiX2JlZm9yZS1oaWRlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC5jbGFzc0xpc3QucmVtb3ZlKFwiX3NoYWtlLXJldmVyc2VcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJfYm94LW9wYWNpdHlcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgZGVsYXkoMjAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWxsLmNsYXNzTGlzdC5hZGQoYF8ke3ByaXplfWApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSgpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBpZihwcml6ZSA9PT0gXCJyZXNwaW5cIil7XG4gICAgICAgICAgICAgICAgLy8gICAgIHNlY3Rpb25zLmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgKCkgPT4gc2hvd1BvcHVwKHNlY3Rpb25zLCB3aGVlbCwgXCJfYm9udXNcIiwgc3RyZWFrQm9udXMsIHNwaW5CZywgcG9wdXBDbG9zZUJ0biwgcG9wdXBDb250YWluZXIsIHBvcHVwLCBcInJlc3BpblwiKSwge29uY2U6IHRydWV9KVxuICAgICAgICAgICAgICAgIC8vICAgICBzcGluV2hlZWwoNzIuNSwgXCJyZXNwaW5BbmltXCIsIHNlY3Rpb25zLCBidG4sIHdoZWVsLCBhcnJvdywgcHJpemUsIHNwaW5CZywgc2FsdXQpXG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgaW5pdFNoYWtlKGJhbGwsIGJ0blNoYWtlLCBiYWxsQm94KVxuXG4gICAgY29uc3QgaGFuZGxlUmVzaXplID0gKCkgPT57XG4gICAgICAgIGxldCB0b3VjaFN0YXJ0WCA9IDA7XG4gICAgICAgIGxldCB0b3VjaEVuZFggPSAwO1xuICAgICAgICBsZXQgdG91Y2hTdGFydFRpbWUgPSAwOyAvLyDQp9Cw0YEg0L/QvtGH0LDRgtC60YMg0LTQvtGC0LjQutGDXG5cbiAgICAgICAgY29uc3QgaGFuZGxlVG91Y2hTdGFydCA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgdG91Y2hTdGFydFggPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICAgICAgICB0b3VjaFN0YXJ0VGltZSA9IERhdGUubm93KCk7IC8vINCX0LDQv9C40YHRg9GU0LzQviDRh9Cw0YEg0L/QvtGH0LDRgtC60YMg0LTQvtGC0LjQutGDXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgaGFuZGxlVG91Y2hNb3ZlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0b3VjaEVuZFggPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgaGFuZGxlVG91Y2hFbmQgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzd2lwZURpc3RhbmNlID0gdG91Y2hTdGFydFggLSB0b3VjaEVuZFg7XG4gICAgICAgICAgICBjb25zdCBzd2lwZVRpbWUgPSBEYXRlLm5vdygpIC0gdG91Y2hTdGFydFRpbWU7IC8vINCi0YDQuNCy0LDQu9GW0YHRgtGMINGB0LLQsNC50L/Rg1xuXG4gICAgICAgICAgICAvLyDQpNGW0LvRjNGC0YDQsNGG0ZbRjyDQutC70ZbQutGW0LIg0YLQsCDQvdC10LrQvtGA0LXQutGC0L3QuNGFINGB0LLQsNC50L/RltCyXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoc3dpcGVEaXN0YW5jZSkgPCA1MCB8fCBzd2lwZVRpbWUgPiA1MDAgJiYgc3dpcGVUaW1lID4gNTApIHtcbiAgICAgICAgICAgICAgICAvLyDQr9C60YnQviDRgdCy0LDQudC/INC30LDQvdCw0LTRgtC+INC60L7RgNC+0YLQutC40Lkg0LDQsdC+INC90LDQtNGC0L4g0L/QvtCy0ZbQu9GM0L3QuNC5LCDQvdC1INCy0LLQsNC20LDRlNC80L4g0LnQvtCz0L4g0YHQv9GA0LDQstC20L3RltC8XG4gICAgICAgICAgICAgICAgdG91Y2hTdGFydFggPSAwO1xuICAgICAgICAgICAgICAgIHRvdWNoRW5kWCA9IDA7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNGP0ZTQvNC+INC90LDQv9GA0Y/QvNC+0Log0YHQstCw0LnQv9GDXG4gICAgICAgICAgICBpZiAoc3dpcGVEaXN0YW5jZSA+IDUwKSB7XG4gICAgICAgICAgICAgICAgLy8g0KHQstCw0LnQvyDQu9GW0LLQvtGA0YPRh1xuICAgICAgICAgICAgICAgIG1vdmVSaWdodCgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzd2lwZURpc3RhbmNlIDwgLTUwKSB7XG4gICAgICAgICAgICAgICAgLy8g0KHQstCw0LnQvyDQv9GA0LDQstC+0YDRg9GHXG4gICAgICAgICAgICAgICAgbW92ZUxlZnQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8g0KHQutC40LTQsNGU0LzQviDQt9C90LDRh9C10L3QvdGPXG4gICAgICAgICAgICB0b3VjaFN0YXJ0WCA9IDA7XG4gICAgICAgICAgICB0b3VjaEVuZFggPSAwO1xuICAgICAgICB9O1xuXG5cbiAgICAgICAgbW92ZVJpZ2h0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbW92ZVJpZ2h0KTtcbiAgICAgICAgbW92ZUxlZnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtb3ZlTGVmdCk7XG4gICAgICAgIGNhcmRzQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBoYW5kbGVUb3VjaFN0YXJ0KTtcbiAgICAgICAgY2FyZHNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgaGFuZGxlVG91Y2hNb3ZlKTtcbiAgICAgICAgY2FyZHNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBoYW5kbGVUb3VjaEVuZCk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwib3JpZW50YXRpb25jaGFuZ2VcIiwgKCkgPT57XG4gICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGhhbmRsZVJlc2l6ZSgpXG5cbn0pKCk7Il19
