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
  var apiURL = 'https://fav-prom.com/api_wheel_2025';
  var resultsTableOther = document.querySelector('.table__user'),
    progressTitle = document.querySelector('.progress__title-lock'),
    unauthMsgs = document.querySelectorAll('.unauth-msg'),
    participateBtns = document.querySelectorAll('.btn-join'),
    redirectBtns = document.querySelectorAll('.took-part'),
    topResultsTable = document.getElementById('top-users'),
    weeksSelector = document.querySelectorAll('.table__toggle-item'),
    // weeksContainer = document.querySelector('.table__toggle'),
    mainPage = document.querySelector('.fav-page'),
    ballWrap = document.querySelector('.ball'),
    guideWrap = document.querySelector('.guide'),
    gameWrap = document.querySelector('.games');
  var ukLeng = document.querySelector('#ukLeng');
  var enLeng = document.querySelector('#enLeng');
  var locale = 'uk';

  // console.log(week)
  //
  // function setState(newLocale) {
  //     locale = newLocale;
  //     sessionStorage.setItem('locale', locale);
  // }
  // function toggleState() {
  //     const newLocale = locale === 'en' ? 'uk' : 'en';
  //     setState(newLocale);
  //     window.location.reload()
  // }
  // document.querySelector('.en-btn').addEventListener('click', () => {
  //     toggleState();
  // });

  // document.querySelector('.week-btn').addEventListener('click', () => {
  //     console.log(week)
  //     if(week === 1){
  //         document.querySelector('._week1').style.display = "flex"
  //         document.querySelector('._week2').style.display = "none"
  //         return week = 2
  //     }
  //     if(week === 2){
  //         document.querySelector('._week2').style.display = "flex"
  //         document.querySelector('._week1').style.display = "none"
  //         week = 1
  //     }
  // });

  if (ukLeng) locale = 'uk';
  if (enLeng) locale = 'en';
  var i18nData = {};
  var debug = false;
  var selectedWeekTabId = 0;
  var userId;
  // userId = 7777777;

  // userId = Number(sessionStorage.getItem("userId"));
  //
  // console.log(typeof userId)
  //
  // document.querySelector(".lock-btn").addEventListener("click", () =>{
  //     userId ? sessionStorage.removeItem("userId") : sessionStorage.setItem("userId", '101234861')
  //     window.location.reload()
  // })

  // if(week === 1){
  //     document.querySelector('._week1').style.display = "flex"
  // }
  // if(week === 2){
  //     document.querySelector('._week2').style.display = "flex"
  // }

  function loadTranslations() {
    return fetch("".concat(apiURL, "/translates/").concat(locale)).then(function (res) {
      return res.json();
    }).then(function (json) {
      i18nData = json;
      translate();
      var mutationObserver = new MutationObserver(function (mutations) {
        translate();
      });
      mutationObserver.observe(document.getElementById('sam'), {
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
    }
    if (locale === 'en') {
      mainPage.classList.add('en');
    }
    refreshLocalizedClass();
  }
  function refreshLocalizedClass(element, baseCssClass) {
    if (!element) {
      return;
    }
    for (var _i = 0, _arr = ['uk', 'en']; _i < _arr.length; _i++) {
      var lang = _arr[_i];
      element.classList.remove(baseCssClass + lang);
    }
    element.classList.add(baseCssClass + locale);
  }

  //new
  function getUsers(week) {
    var url = resolveUsersUrl(week);
    return request(url).then(function (users) {
      return users.map(function (userOrId) {
        return typeof userOrId === 'number' ? {
          userid: userOrId
        } : userOrId;
      });
    });
  }
  function resolveUsersUrl(week) {
    return week ? "/week-users/".concat(week) : '/users';
  }
  var InitPage = function InitPage() {
    weeksSelector.forEach(function (w, i) {
      return w.addEventListener('click', function (e) {
        if (i === selectedWeekTabId) {
          return;
        }
        weeksSelector.forEach(function (s) {
          return s.classList.remove('_active');
        });
        w.classList.add('_active');
        selectedWeekTabId = i;
        refreshUsers(selectedWeekTabId + 1);
      });
    });
    refreshUsers();
  };
  function init() {
    refreshWeekTabs();
    if (window.store) {
      var state = window.store.getState();
      userId = state.auth.isAuthorized && state.auth.id || '';
      checkUserAuth().then(setupPage);
    } else {
      checkUserAuth().then(setupPage);
      var c = 0;
      var i = setInterval(function () {
        if (c < 50) {
          if (!!window.g_user_id) {
            userId = window.g_user_id;
            checkUserAuth().then(setupPage);
            clearInterval(i);
          }
        } else {
          clearInterval(i);
        }
      }, 200);
    }
    participateBtns.forEach(function (authBtn, i) {
      authBtn.addEventListener('click', function (e) {
        e.preventDefault();
        participate();
      });
    });
  }
  function setupPage() {
    InitPage();
  }
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
      redirectBtns.forEach(function (item) {
        return item.classList.remove('hide');
      });
      ballWrap.classList.remove('_sign');
      refreshWheel(res);
      setupPage();
    });
  }
  function refreshUsers(week) {
    getUsers(week).then(function (users) {
      renderUsers(users);
      translate();
    });
  }
  function renderUsers(users) {
    topResultsTable.classList.remove('hide');
    if (users && users.length) {
      var topUsers = users.slice(0, 10);
      populateUsersTable(topUsers, userId, topResultsTable, users);
      var currentUser = userId && users.find(function (user) {
        return user.userid === userId;
      });
      var currentUserIndex = currentUser && users.indexOf(currentUser);
      var otherUsers;
      if (!currentUserIndex || currentUserIndex < 10) {
        otherUsers = users.slice(10, 13);
      } else {
        otherUsers = users.slice(Math.max(currentUserIndex - 1, 10), currentUserIndex + 2);
      }
      if (otherUsers && otherUsers.length) {
        populateUsersTable(otherUsers, userId, resultsTableOther, users);
      }
    }
  }
  function updateWager(rank) {
    var prizeText = '-';
    if (rank >= 11 && rank <= 50) {
      prizeText = 'x1';
    } else if (rank >= 51 && rank <= 150) {
      prizeText = 'x2';
    } else if (rank >= 151 && rank <= 300) {
      prizeText = 'x3';
    } else if (rank >= 301 && rank <= 400) {
      prizeText = 'x4';
    } else if (rank >= 401 && rank <= 550) {
      prizeText = 'x5';
    } else if (rank >= 551 && rank <= 750) {
      prizeText = '-';
    }
    return prizeText;
  }
  function populateUsersTable(users, currentUserId, table, allUsers) {
    table.innerHTML = '';
    if (users && users.length) {
      users.forEach(function (user, index) {
        var checkCurrentUser = currentUserId && currentUserId === user.userid;
        var additionalUserRow = document.createElement('div');
        if (checkCurrentUser) {
          additionalUserRow.classList.add('you');
        }
        var place = allUsers.indexOf(user) + 1;
        var placeClass;
        if (table.id === 'top-users' || table.id === 'questsTable') {
          if (index === 0) {
            placeClass = 'gold';
          } else if (index === 1) {
            placeClass = 'silver';
          } else if (index === 2) {
            placeClass = 'bronze';
          }
        }
        var prizeKey = getPrizeTranslationKey(place);
        var prizeValue = updateWager(place);
        additionalUserRow.classList.add('table__body-row');
        if (placeClass) {
          additionalUserRow.classList.add(placeClass);
        }
        additionalUserRow.innerHTML = "\n                <div class=\"table__body-row-item\">".concat(place, "</div>\n                <div class=\"table__body-row-item\">").concat(checkCurrentUser ? user.userid : maskUserId(user.userid), "</div>\n                <div class=\"table__body-row-item\">").concat(user.points && !isNaN(user.points) ? user.points : 0, "</div>\n                <div class=\"table__body-row-item\">").concat(prizeKey ? translateKey(prizeKey) : ' - ', "</div>\n                <div class=\"table__body-row-item\">").concat(prizeValue, "</div>\n            ");
        table.append(additionalUserRow);
      });
    }
  }
  function getPrizeTranslationKey(place) {
    if (place <= 10) {
      return "prize_".concat(place);
    } else if (place <= 20) {
      return "prize_11-20";
    } else if (place <= 30) {
      return "prize_21-30";
    } else if (place <= 40) {
      return "prize_31-40";
    } else if (place <= 50) {
      return "prize_41-50";
    } else if (place <= 70) {
      return "prize_51-70";
    } else if (place <= 100) {
      return "prize_71-100";
    } else if (place <= 150) {
      return "prize_101-150";
    } else if (place <= 200) {
      return "prize_151-200";
    } else if (place <= 250) {
      return "prize_201-250";
    } else if (place <= 300) {
      return "prize_251-300";
    } else if (place <= 350) {
      return "prize_301-350";
    } else if (place <= 400) {
      return "prize_351-400";
    } else if (place <= 450) {
      return "prize_401-450";
    } else if (place <= 500) {
      return "prize_451-500";
    } else if (place <= 550) {
      return "prize_501-550";
    } else if (place <= 600) {
      return "prize_551-600";
    } else if (place <= 650) {
      return "prize_601-650";
    } else if (place <= 700) {
      return "prize_651-700";
    } else if (place <= 750) {
      return "prize_701-750";
    }
  }
  function maskUserId(userId) {
    return "**" + userId.toString().slice(2);
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
    // console.log(userId)
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
      return request("/favuser/".concat(userId, "?nocache=1")).then(function (res) {
        if (res.userid) {
          participateBtns.forEach(function (item) {
            return item.classList.add('hide');
          });
          redirectBtns.forEach(function (item) {
            return item.classList.remove('hide');
          });
          ballWrap.classList.remove('_sign');
          guideWrap.classList.remove('_sign');
          gameWrap.classList.remove('_sign');
          document.querySelector(".progress").classList.remove("_sign");
          if (debug) {
            res.pointsPerDay = 30;
            res.spinAllowed = true;
            res.spinsStreak = 3;
            res.spins = [];
          }
          refreshWheel(res);
          refreshDailyPointsSection(res);
          // console.log(res.spins)
          displayUserSpins(res.spins);
        } else {
          participateBtns.forEach(function (item) {
            return item.classList.remove('hide');
          });
        }
      });
    } else {
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
      return Promise.resolve(false);
    }
  }
  loadTranslations().then(init);
  function refreshWeekTabs() {
    selectedWeekTabId = calculateRecentPromoWeeks() - 1;
    if (!selectedWeekTabId || selectedWeekTabId === 0) {
      // promo not started yet
      // weeksContainer.classList.add('hide');
      return;
    }
    for (var _i2 = 0; _i2 < 2; _i2++) {
      var weekSelector = weeksSelector[_i2];
      if (selectedWeekTabId < _i2) {
        weekSelector.classList.add('hide');
      }
    }
    weeksSelector.forEach(function (w, i) {
      w.classList.remove('active');
      if (i === selectedWeekTabId) {
        w.classList.add('active');
      }
    });
  }
  function calculateRecentPromoWeeks() {
    var date = Date.now();
    if (date < new Date("2024-12-17T22:00:00Z")) {
      return 1;
    } else {
      return 2;
    }
  }
  function translateKey(key) {
    if (!key) {
      return;
    }
    return i18nData[key] || '*----NEED TO BE TRANSLATED----*   key:  ' + key;
  }
  function refreshWheel(userInfo) {
    if (userInfo.spinAllowed) {
      return;
    }
    if (userInfo.pointsPerDay >= 50) {
      ballWrap.classList.add('_lock');
      progressTitle.classList.add('hide');
    } else {
      progressTitle.classList.remove('hide');
      ballWrap.classList.add('_block');
    }
  }
  function refreshDailyPointsSection(userInfo) {
    var points = Math.min(userInfo.pointsPerDay || 0, 50);
    // const progressStatus = document.querySelector('.progressStatus');
    // progressStatus.innerHTML = `${points}/50`;
    var currentSpan = document.querySelector('.current');
    currentSpan.innerHTML = "".concat(points);
    var progressLine = document.querySelector('.progress__bar-thumb');
    var progress = points / 50.0 * 100;
    progressLine.style.width = "".concat(progress, "%");
  }
  function displayUserSpins(spins) {
    var spinItem = document.querySelector('.spins-row');
    var noSpinItem = document.querySelector('.no-spins');
    if (!spins || spins.length === 0) {
      spinItem.classList.add('hide');
      noSpinItem.classList.remove('hide');
      return;
    }

    // const spinsContainer = document.querySelector('.spins-row');
    spinItem.innerHTML = "\n       <div class=\"spins-row-head\">\n            <div class=\"content-date\" data-translate=\"mySpinsDate\"></div>\n            <div class=\"content-prize\" data-translate=\"mySpinsPrize\"></div>\n        </div>\n        ";
    spinItem.classList.remove('hide');
    noSpinItem.classList.add('hide');
    // console.log(noSpinItem)

    spins.forEach(function (spin) {
      var spinDate = new Date(spin.date);
      var formattedDate = spinDate.toLocaleDateString('uk-UA');
      var spinName = translateKey(spin.name) || '';
      var spinElement = document.createElement('div');
      spinElement.classList.add('spins-row-item');
      spinElement.innerHTML = "\n            <span class=\"content-date\">".concat(formattedDate, "</span>\n            <span class=\"content-prize\">").concat(spinName, "</span>\n        ");
      spinItem.appendChild(spinElement);
    });
  }
  setTimeout(function () {
    return mainPage.classList.add('overflow');
  }, 1000);

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
    for (var _i3 = 0; _i3 < maxSnowflakes; _i3++) {
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
        for (var _i4 = 0; _i4 < maxSnowflakes; _i4++) {
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

  // snowfall animation
  var i = 1;
  function sendShakeRequest() {
    if (!userId) {
      return;
    }
    if (debug) {
      return Promise.resolve({
        // number: i++,
        number: 'winRespin'
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
  var winClasses = ["_winIphone", "_winTv", "_winJbl", "_winMegogo", "_winRespin", "_winNothing", "_winFs10", "_winFs25", "_winFs50", "_winSaveBet100", "_winSaveBet150", "_winSaveBet200", "_winPoints50"];
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
              _context.next = 19;
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
            if (prize === "_winRespin") {
              btn.classList.remove("_disabled");
            }
            _context.next = 30;
            break;
          case 19:
            btn.classList.add("_disabled");
            ball.classList.add("_shake");
            box.classList.add("_shake-reverse");

            // await delay(2000)

            ball.classList.remove("_shake");
            ball.classList.add("_before-hide");
            box.classList.remove("_shake-reverse");
            box.classList.add("_box-opacity");
            if (!(prizeNum === 0)) {
              _context.next = 29;
              break;
            }
            _context.next = 29;
            return delay(200);
          case 29:
            ball.classList.add("".concat(prize));
          case 30:
            return _context.abrupt("return", pastPrize = prize);
          case 31:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _animateShake.apply(this, arguments);
  }
  function initShake(ball, btn, box) {
    btn.addEventListener("click", function () {
      sendShakeRequest().then(function (res) {
        console.log(res);
        if (!res || !!res.error) {
          // btnShake.classList.add('pulse-btn');
          btnShake.classList.remove('_disabled');
          return;
        }
        var prize = "_".concat(res.number);
        var prizeNum = winClasses.indexOf(prize);
        console.log('Prize:', prize);
        console.log('Prize Num:', prizeNum);
        animateShake(ball, box, btn, prize, prizeNum)["catch"](function (err) {
          return console.error("anim error:", err);
        });
      }).then(checkUserAuth);
    });
  }
  initShake(ball, btnShake, ballBox);
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
  // document.querySelector(".dark-btn").addEventListener("click", () =>{
  //     document.body.classList.toggle("dark")
  // })
  // document.querySelector(".en-btn").addEventListener("click", () =>{
  //     document.querySelector(".fav-page").classList.toggle("en")
  // })
  //
  // document.querySelector(".testMenu").addEventListener("click", ()=>{
  //     document.querySelector(".prizes-btns").classList.toggle("hide")
  // })
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwicmVzdWx0c1RhYmxlT3RoZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwcm9ncmVzc1RpdGxlIiwidW5hdXRoTXNncyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwYXJ0aWNpcGF0ZUJ0bnMiLCJyZWRpcmVjdEJ0bnMiLCJ0b3BSZXN1bHRzVGFibGUiLCJnZXRFbGVtZW50QnlJZCIsIndlZWtzU2VsZWN0b3IiLCJtYWluUGFnZSIsImJhbGxXcmFwIiwiZ3VpZGVXcmFwIiwiZ2FtZVdyYXAiLCJ1a0xlbmciLCJlbkxlbmciLCJsb2NhbGUiLCJpMThuRGF0YSIsImRlYnVnIiwic2VsZWN0ZWRXZWVrVGFiSWQiLCJ1c2VySWQiLCJsb2FkVHJhbnNsYXRpb25zIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsInRyYW5zbGF0ZSIsIm11dGF0aW9uT2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwibXV0YXRpb25zIiwib2JzZXJ2ZSIsImNoaWxkTGlzdCIsInN1YnRyZWUiLCJlbGVtcyIsImxlbmd0aCIsImZvckVhY2giLCJlbGVtIiwia2V5IiwiZ2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIiwicmVtb3ZlQXR0cmlidXRlIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVmcmVzaExvY2FsaXplZENsYXNzIiwiZWxlbWVudCIsImJhc2VDc3NDbGFzcyIsImxhbmciLCJyZW1vdmUiLCJnZXRVc2VycyIsIndlZWsiLCJ1cmwiLCJyZXNvbHZlVXNlcnNVcmwiLCJyZXF1ZXN0IiwidXNlcnMiLCJtYXAiLCJ1c2VyT3JJZCIsInVzZXJpZCIsIkluaXRQYWdlIiwidyIsImkiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInMiLCJyZWZyZXNoVXNlcnMiLCJpbml0IiwicmVmcmVzaFdlZWtUYWJzIiwid2luZG93Iiwic3RvcmUiLCJzdGF0ZSIsImdldFN0YXRlIiwiYXV0aCIsImlzQXV0aG9yaXplZCIsImlkIiwiY2hlY2tVc2VyQXV0aCIsInNldHVwUGFnZSIsImMiLCJzZXRJbnRlcnZhbCIsImdfdXNlcl9pZCIsImNsZWFySW50ZXJ2YWwiLCJhdXRoQnRuIiwicHJldmVudERlZmF1bHQiLCJwYXJ0aWNpcGF0ZSIsInBhcmFtcyIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaXRlbSIsInJlZnJlc2hXaGVlbCIsInJlbmRlclVzZXJzIiwidG9wVXNlcnMiLCJzbGljZSIsInBvcHVsYXRlVXNlcnNUYWJsZSIsImN1cnJlbnRVc2VyIiwiZmluZCIsInVzZXIiLCJjdXJyZW50VXNlckluZGV4IiwiaW5kZXhPZiIsIm90aGVyVXNlcnMiLCJNYXRoIiwibWF4IiwidXBkYXRlV2FnZXIiLCJyYW5rIiwicHJpemVUZXh0IiwiY3VycmVudFVzZXJJZCIsInRhYmxlIiwiYWxsVXNlcnMiLCJpbmRleCIsImNoZWNrQ3VycmVudFVzZXIiLCJhZGRpdGlvbmFsVXNlclJvdyIsImNyZWF0ZUVsZW1lbnQiLCJwbGFjZSIsInBsYWNlQ2xhc3MiLCJwcml6ZUtleSIsImdldFByaXplVHJhbnNsYXRpb25LZXkiLCJwcml6ZVZhbHVlIiwibWFza1VzZXJJZCIsInBvaW50cyIsImlzTmFOIiwidHJhbnNsYXRlS2V5IiwiYXBwZW5kIiwidG9TdHJpbmciLCJsaW5rIiwiZXh0cmFPcHRpb25zIiwiaGVhZGVycyIsInVuYXV0aE1lcyIsInBvaW50c1BlckRheSIsInNwaW5BbGxvd2VkIiwic3BpbnNTdHJlYWsiLCJzcGlucyIsInJlZnJlc2hEYWlseVBvaW50c1NlY3Rpb24iLCJkaXNwbGF5VXNlclNwaW5zIiwicGFydGljaXBhdGVCdG4iLCJQcm9taXNlIiwicmVzb2x2ZSIsImNhbGN1bGF0ZVJlY2VudFByb21vV2Vla3MiLCJ3ZWVrU2VsZWN0b3IiLCJkYXRlIiwiRGF0ZSIsIm5vdyIsInVzZXJJbmZvIiwibWluIiwiY3VycmVudFNwYW4iLCJwcm9ncmVzc0xpbmUiLCJwcm9ncmVzcyIsInN0eWxlIiwid2lkdGgiLCJzcGluSXRlbSIsIm5vU3Bpbkl0ZW0iLCJzcGluIiwic3BpbkRhdGUiLCJmb3JtYXR0ZWREYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwic3Bpbk5hbWUiLCJuYW1lIiwic3BpbkVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsInNldFRpbWVvdXQiLCJjYXJkc0NvbnRhaW5lciIsImNhcmRzIiwiY2FyZHNXcmFwIiwibW92ZVJpZ2h0QnV0dG9uIiwibW92ZUxlZnRCdXR0b24iLCJ0YWJzQ29udGFpbmVyIiwiaXNNb2JpbGUiLCJpbm5lcldpZHRoIiwidG90YWxDYXJkcyIsImNhcmRXaWR0aCIsImNsaWVudFdpZHRoIiwiY2FyZHNNYXJnaW4iLCJ2aXNpYmxlU2xpZGVzIiwiY2VpbCIsInRvdGFsVGFicyIsInRhYldpZHRoIiwiY3VycmVudFNsaWRlIiwiY2FyZHNQb3NpdGlvbiIsImxlZnRTbGlkZSIsInJpZ2h0U2xpZGUiLCJ1cGRhdGVBY3RpdmVDYXJkIiwiYWN0aXZlSW5kZXgiLCJjYXJkIiwibGVmdFNsaWRlVGFiIiwicmlnaHRTbGlkZVRhYiIsImZpcnN0TGFzdFNsaWRlcyIsInNldENhcmRzUG9zaXRpb24iLCJwb3NpdGlvbiIsInRyYW5zZm9ybSIsIm1vdmVSaWdodCIsImNvbnNvbGUiLCJsb2ciLCJtYXhQb3NpdGlvbiIsImhpZGVQb3B1cHNPbkJ0biIsInByaXplUG9wdXBJdGVtIiwibW92ZUxlZnQiLCJzZXRQb3B1cHMiLCJwb3B1cHMiLCJwb3B1cHNCdG5zIiwiYnRuIiwicG9wdXAiLCJqIiwicHJpemVPcGVuQnRucyIsInByaXplQ2xvc2VCdG5zIiwiZ3VpZGVQb3B1cHNXcmFwIiwiZ3VpZGVPcGVuQnRucyIsImd1aWRlQ2xvc2VCdG5zIiwidGFibGVQb3B1cCIsInRhYmxlUG9wdXBDbG9zZSIsInRhYmxlUG9wdXBPcGVuIiwiYmFsbFBvcHVwIiwiYmFsbFBvcHVwQ2xvc2UiLCJiYWxsUG9wdXBPcGVuIiwiY29udGFpbnMiLCJ0YXJnZXQiLCJvdmVyZmxvdyIsIkNPVU5UIiwiU25vd3N0b3JtIiwibWFzdGhlYWQiLCJjYW52YXMiLCJjdHgiLCJnZXRDb250ZXh0IiwiaGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiYWN0aXZlIiwic25vd2ZsYWtlcyIsInByb3RvdHlwZSIsImxlZnQiLCJ0b3AiLCJvblJlc2l6ZSIsImJpbmQiLCJzbm93Zmxha2UiLCJTbm93Zmxha2UiLCJyZXNldCIsInB1c2giLCJyZXF1ZXN0QW5pbUZyYW1lIiwidXBkYXRlIiwiZmlsbFN0eWxlIiwid2FzQWN0aXZlIiwiY2xlYXJSZWN0IiwieSIsInZ5IiwieCIsInZ4IiwiZ2xvYmFsQWxwaGEiLCJvIiwiYmVnaW5QYXRoIiwiYXJjIiwiciIsIlBJIiwiY2xvc2VQYXRoIiwiZmlsbCIsInNub3dzdG9ybSIsInJhbmRvbSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1velJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbGxiYWNrIiwic2tpZXMiLCJza3kiLCJiYWxsIiwicGFyZW50RWxlbWVudCIsIm1heFNub3dmbGFrZXMiLCJtYXhTcGVlZCIsInN0b3JtQ291bnRlciIsInNub3dmbGFrZXNSZW1vdmVkIiwicmFkaXVzIiwic3BlZWRYIiwic3BlZWRZIiwiYWNjZWxlcmF0aW9uIiwibW92aW5nVG9Cb3R0b20iLCJiYWxsWCIsImJhbGxZIiwiYmFsbFJhZGl1cyIsImJhbGxTaGFraW5nIiwidGFyZ2V0U3BlZWQiLCJzcGVlZERlY2F5RmFjdG9yIiwiZHgiLCJkeSIsImRpc3RhbmNlIiwic3FydCIsImFuZ2xlIiwiYXRhbjIiLCJvdmVybGFwIiwiY29zIiwic2luIiwic3BsaWNlIiwibGFzdEJhbGxTaGFraW5nU3RhdGUiLCJhbmltYXRlIiwiYmFsbFRyYW5zZm9ybSIsImdldENvbXB1dGVkU3R5bGUiLCJvZmZzZXRXaWR0aCIsIm1hdHJpeCIsIkRPTU1hdHJpeCIsIm9mZnNldExlZnQiLCJtNDEiLCJvZmZzZXRUb3AiLCJtNDIiLCJtb3ZlVG9Cb3R0b20iLCJkcmF3Iiwic2VuZFNoYWtlUmVxdWVzdCIsIm51bWJlciIsImJ0blNoYWtlIiwiYmFsbEJveCIsImN1cnJlbnRQcml6ZSIsInBhc3RQcml6ZSIsIndpbkNsYXNzZXMiLCJyZW1vdmVQcml6ZSIsImJveCIsImFuaW1hdGVTaGFrZSIsInByaXplIiwicHJpemVOdW0iLCJkZWxheSIsIm1zIiwiaW5pdFNoYWtlIiwiZXJyb3IiLCJlcnIiLCJidG5zIiwib3MiLCJkZXRlY3RPUyIsInVzZXJBZ2VudCIsIm5hdmlnYXRvciIsInZlbmRvciIsIm9wZXJhIiwicGxhdGZvcm0iLCJ0ZXN0IiwiTVNTdHJlYW0iLCJoYW5kbGVSZXNpemUiLCJ0b3VjaFN0YXJ0WCIsInRvdWNoRW5kWCIsImV2ZW50IiwiY2hhbmdlZFRvdWNoZXMiLCJzY3JlZW5YIiwiaGFuZGxlU3dpcGUiLCJzd2lwZVRocmVzaG9sZCIsImxvY2F0aW9uIiwicmVsb2FkIl0sIm1hcHBpbmdzIjoiOzs7K0NBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBLENBQUMsWUFBWTtFQUNULElBQU1BLE1BQU0sR0FBRyxxQ0FBcUM7RUFFcEQsSUFDSUMsaUJBQWlCLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGNBQWMsQ0FBQztJQUMxREMsYUFBYSxHQUFHRixRQUFRLENBQUNDLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQztJQUMvREUsVUFBVSxHQUFHSCxRQUFRLENBQUNJLGdCQUFnQixDQUFDLGFBQWEsQ0FBQztJQUNyREMsZUFBZSxHQUFHTCxRQUFRLENBQUNJLGdCQUFnQixDQUFDLFdBQVcsQ0FBQztJQUN4REUsWUFBWSxHQUFHTixRQUFRLENBQUNJLGdCQUFnQixDQUFDLFlBQVksQ0FBQztJQUN0REcsZUFBZSxHQUFHUCxRQUFRLENBQUNRLGNBQWMsQ0FBQyxXQUFXLENBQUM7SUFDdERDLGFBQWEsR0FBR1QsUUFBUSxDQUFDSSxnQkFBZ0IsQ0FBQyxxQkFBcUIsQ0FBQztJQUNoRTtJQUNB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RCxTQUFTLEdBQUdDLEtBQUssQ0FBQ0MsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxPQUFPO01BQzNDQyxXQUFXLEVBQUU7SUFDakIsQ0FBQyxFQUFFLEtBQUssQ0FBQztJQUVULFNBQVNBLFdBQVcsR0FBRztNQUNuQixJQUFNQyxjQUFjLEdBQUcsRUFBRTtNQUN6QixJQUFJTCxTQUFTLEdBQUdELFdBQVcsR0FBR00sY0FBYyxFQUFFO1FBQzFDakosU0FBUyxFQUFFO01BQ2Y7TUFDQSxJQUFJNEksU0FBUyxHQUFHRCxXQUFXLEdBQUdNLGNBQWMsRUFBRTtRQUMxQzNJLFFBQVEsRUFBRTtNQUNkO0lBQ0o7SUFDQWhDLGVBQWUsQ0FBQ3JHLGdCQUFnQixDQUFDLE9BQU8sRUFBRStILFNBQVMsQ0FBQztJQUNwRHpCLGNBQWMsQ0FBQ3RHLGdCQUFnQixDQUFDLE9BQU8sRUFBRXFJLFFBQVEsQ0FBQztJQUNsRC9ILE1BQU0sQ0FBQ04sZ0JBQWdCLENBQUMsbUJBQW1CLEVBQUUsWUFBSztNQUM5Q2lSLFFBQVEsQ0FBQ0MsTUFBTSxFQUFFO0lBQ3JCLENBQUMsQ0FBQztFQUNOLENBQUM7RUFFRFQsWUFBWSxFQUFFOztFQUdkO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7QUFFSixDQUFDLEdBQUciLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgYXBpVVJMID0gJ2h0dHBzOi8vZmF2LXByb20uY29tL2FwaV93aGVlbF8yMDI1J1xuXG4gICAgY29uc3RcbiAgICAgICAgcmVzdWx0c1RhYmxlT3RoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFibGVfX3VzZXInKSxcbiAgICAgICAgcHJvZ3Jlc3NUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9ncmVzc19fdGl0bGUtbG9jaycpLFxuICAgICAgICB1bmF1dGhNc2dzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnVuYXV0aC1tc2cnKSxcbiAgICAgICAgcGFydGljaXBhdGVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bi1qb2luJyksXG4gICAgICAgIHJlZGlyZWN0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b29rLXBhcnQnKSxcbiAgICAgICAgdG9wUmVzdWx0c1RhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvcC11c2VycycpLFxuICAgICAgICB3ZWVrc1NlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYmxlX190b2dnbGUtaXRlbScpLFxuICAgICAgICAvLyB3ZWVrc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWJsZV9fdG9nZ2xlJyksXG4gICAgICAgIG1haW5QYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhdi1wYWdlJyksXG4gICAgICAgIGJhbGxXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhbGwnKSxcbiAgICAgICAgZ3VpZGVXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmd1aWRlJyksXG4gICAgICAgIGdhbWVXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVzJyk7XG5cbiAgICBjb25zdCB1a0xlbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdWtMZW5nJyk7XG4gICAgY29uc3QgZW5MZW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VuTGVuZycpO1xuXG5cbiAgICBsZXQgbG9jYWxlID0gJ3VrJztcblxuICAgIC8vIGNvbnNvbGUubG9nKHdlZWspXG4gICAgLy9cbiAgICAvLyBmdW5jdGlvbiBzZXRTdGF0ZShuZXdMb2NhbGUpIHtcbiAgICAvLyAgICAgbG9jYWxlID0gbmV3TG9jYWxlO1xuICAgIC8vICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdsb2NhbGUnLCBsb2NhbGUpO1xuICAgIC8vIH1cbiAgICAvLyBmdW5jdGlvbiB0b2dnbGVTdGF0ZSgpIHtcbiAgICAvLyAgICAgY29uc3QgbmV3TG9jYWxlID0gbG9jYWxlID09PSAnZW4nID8gJ3VrJyA6ICdlbic7XG4gICAgLy8gICAgIHNldFN0YXRlKG5ld0xvY2FsZSk7XG4gICAgLy8gICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICAgIC8vIH1cbiAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW4tYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgLy8gICAgIHRvZ2dsZVN0YXRlKCk7XG4gICAgLy8gfSk7XG5cbiAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2Vlay1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAvLyAgICAgY29uc29sZS5sb2cod2VlaylcbiAgICAvLyAgICAgaWYod2VlayA9PT0gMSl7XG4gICAgLy8gICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuX3dlZWsxJykuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXG4gICAgLy8gICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuX3dlZWsyJykuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgLy8gICAgICAgICByZXR1cm4gd2VlayA9IDJcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBpZih3ZWVrID09PSAyKXtcbiAgICAvLyAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5fd2VlazInKS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCJcbiAgICAvLyAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5fd2VlazEnKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAvLyAgICAgICAgIHdlZWsgPSAxXG4gICAgLy8gICAgIH1cbiAgICAvLyB9KTtcblxuICAgIGlmICh1a0xlbmcpIGxvY2FsZSA9ICd1ayc7XG4gICAgaWYgKGVuTGVuZykgbG9jYWxlID0gJ2VuJztcblxuXG4gICAgbGV0IGkxOG5EYXRhID0ge307XG4gICAgY29uc3QgZGVidWcgPSBmYWxzZTtcbiAgICBsZXQgc2VsZWN0ZWRXZWVrVGFiSWQgPSAwO1xuICAgIGxldCB1c2VySWQ7XG4gICAgLy8gdXNlcklkID0gNzc3Nzc3NztcblxuICAgIC8vIHVzZXJJZCA9IE51bWJlcihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpKTtcbiAgICAvL1xuICAgIC8vIGNvbnNvbGUubG9nKHR5cGVvZiB1c2VySWQpXG4gICAgLy9cbiAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvY2stYnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAvLyAgICAgdXNlcklkID8gc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcInVzZXJJZFwiKSA6IHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJ1c2VySWRcIiwgJzEwMTIzNDg2MScpXG4gICAgLy8gICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICAgIC8vIH0pXG5cbiAgICAvLyBpZih3ZWVrID09PSAxKXtcbiAgICAvLyAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLl93ZWVrMScpLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxuICAgIC8vIH1cbiAgICAvLyBpZih3ZWVrID09PSAyKXtcbiAgICAvLyAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLl93ZWVrMicpLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxuICAgIC8vIH1cblxuICAgIGZ1bmN0aW9uIGxvYWRUcmFuc2xhdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiBmZXRjaChgJHthcGlVUkx9L3RyYW5zbGF0ZXMvJHtsb2NhbGV9YCkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgICAgIGkxOG5EYXRhID0ganNvbjtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGUoKTtcblxuICAgICAgICAgICAgICAgIHZhciBtdXRhdGlvbk9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKG11dGF0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NhbScpLCB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgc3VidHJlZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJhbnNsYXRlKCkge1xuICAgICAgICBjb25zdCBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRyYW5zbGF0ZV0nKVxuICAgICAgICBpZiAoZWxlbXMgJiYgZWxlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBlbGVtcy5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgICAgICAgICAgICAgIGVsZW0uaW5uZXJIVE1MID0gaTE4bkRhdGFba2V5XSB8fCAnKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiAgIGtleTogICcgKyBrZXk7XG4gICAgICAgICAgICAgICAgZWxlbS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGlmIChsb2NhbGUgPT09ICdlbicpIHtcbiAgICAgICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5hZGQoJ2VuJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmVmcmVzaExvY2FsaXplZENsYXNzKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVmcmVzaExvY2FsaXplZENsYXNzKGVsZW1lbnQsIGJhc2VDc3NDbGFzcykge1xuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGxhbmcgb2YgWyd1aycsICdlbiddKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoYmFzZUNzc0NsYXNzICsgbGFuZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGJhc2VDc3NDbGFzcyArIGxvY2FsZSk7XG4gICAgfVxuXG5cbiAgICAvL25ld1xuICAgIGZ1bmN0aW9uIGdldFVzZXJzKHdlZWspIHtcbiAgICAgICAgY29uc3QgdXJsID0gcmVzb2x2ZVVzZXJzVXJsKHdlZWspO1xuICAgICAgICByZXR1cm4gcmVxdWVzdCh1cmwpXG4gICAgICAgICAgICAudGhlbih1c2VycyA9PiB1c2Vycy5tYXAodXNlck9ySWQgPT4gdHlwZW9mIHVzZXJPcklkID09PSAnbnVtYmVyJyA/IHt1c2VyaWQ6IHVzZXJPcklkfSA6IHVzZXJPcklkKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzb2x2ZVVzZXJzVXJsKHdlZWspIHtcbiAgICAgICAgcmV0dXJuIHdlZWsgPyBgL3dlZWstdXNlcnMvJHt3ZWVrfWAgOiAnL3VzZXJzJztcbiAgICB9XG5cbiAgICBjb25zdCBJbml0UGFnZSA9ICgpID0+IHtcbiAgICAgICAgd2Vla3NTZWxlY3Rvci5mb3JFYWNoKCh3LCBpKSA9PiB3LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICBpZiAoaSA9PT0gc2VsZWN0ZWRXZWVrVGFiSWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3ZWVrc1NlbGVjdG9yLmZvckVhY2gocyA9PiBzLmNsYXNzTGlzdC5yZW1vdmUoJ19hY3RpdmUnKSk7XG4gICAgICAgICAgICB3LmNsYXNzTGlzdC5hZGQoJ19hY3RpdmUnKTtcbiAgICAgICAgICAgIHNlbGVjdGVkV2Vla1RhYklkID0gaTtcbiAgICAgICAgICAgIHJlZnJlc2hVc2VycyhzZWxlY3RlZFdlZWtUYWJJZCArIDEpO1xuICAgICAgICB9KSk7XG5cbiAgICAgICAgcmVmcmVzaFVzZXJzKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgcmVmcmVzaFdlZWtUYWJzKCk7XG4gICAgICAgIGlmICh3aW5kb3cuc3RvcmUpIHtcbiAgICAgICAgICAgIHZhciBzdGF0ZSA9IHdpbmRvdy5zdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgICAgICAgdXNlcklkID0gc3RhdGUuYXV0aC5pc0F1dGhvcml6ZWQgJiYgc3RhdGUuYXV0aC5pZCB8fCAnJztcbiAgICAgICAgICAgIGNoZWNrVXNlckF1dGgoKS50aGVuKHNldHVwUGFnZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaGVja1VzZXJBdXRoKCkudGhlbihzZXR1cFBhZ2UpO1xuICAgICAgICAgICAgbGV0IGMgPSAwO1xuICAgICAgICAgICAgdmFyIGkgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGMgPCA1MCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoISF3aW5kb3cuZ191c2VyX2lkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQgPSB3aW5kb3cuZ191c2VyX2lkO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tVc2VyQXV0aCgpLnRoZW4oc2V0dXBQYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgIH1cblxuICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaCgoYXV0aEJ0biwgaSkgPT4ge1xuICAgICAgICAgICAgYXV0aEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0dXBQYWdlKCkge1xuICAgICAgICBJbml0UGFnZSgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBhcnRpY2lwYXRlKCkge1xuICAgICAgICBpZiAoIXVzZXJJZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcGFyYW1zID0ge3VzZXJpZDogdXNlcklkfTtcbiAgICAgICAgcmVxdWVzdCgnL3VzZXInLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhcmFtcylcbiAgICAgICAgfSkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgcGFydGljaXBhdGVCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XG4gICAgICAgICAgICByZWRpcmVjdEJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcbiAgICAgICAgICAgIGJhbGxXcmFwLmNsYXNzTGlzdC5yZW1vdmUoJ19zaWduJyk7XG4gICAgICAgICAgICByZWZyZXNoV2hlZWwocmVzKTtcbiAgICAgICAgICAgIHNldHVwUGFnZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWZyZXNoVXNlcnMod2Vlaykge1xuICAgICAgICBnZXRVc2Vycyh3ZWVrKS50aGVuKHVzZXJzID0+IHtcbiAgICAgICAgICAgIHJlbmRlclVzZXJzKHVzZXJzKTtcbiAgICAgICAgICAgIHRyYW5zbGF0ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJVc2Vycyh1c2Vycykge1xuICAgICAgICB0b3BSZXN1bHRzVGFibGUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuXG4gICAgICAgIGlmICh1c2VycyAmJiB1c2Vycy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGxldCB0b3BVc2VycyA9IHVzZXJzLnNsaWNlKDAsIDEwKTtcbiAgICAgICAgICAgIHBvcHVsYXRlVXNlcnNUYWJsZSh0b3BVc2VycywgdXNlcklkLCB0b3BSZXN1bHRzVGFibGUsIHVzZXJzKTtcblxuICAgICAgICAgICAgY29uc3QgY3VycmVudFVzZXIgPSB1c2VySWQgJiYgdXNlcnMuZmluZCh1c2VyID0+IHVzZXIudXNlcmlkID09PSB1c2VySWQpO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFVzZXJJbmRleCA9IGN1cnJlbnRVc2VyICYmIHVzZXJzLmluZGV4T2YoY3VycmVudFVzZXIpO1xuXG4gICAgICAgICAgICBsZXQgb3RoZXJVc2VycztcblxuICAgICAgICAgICAgaWYgKCFjdXJyZW50VXNlckluZGV4IHx8IGN1cnJlbnRVc2VySW5kZXggPCAxMCkge1xuICAgICAgICAgICAgICAgIG90aGVyVXNlcnMgPSB1c2Vycy5zbGljZSgxMCwgMTMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBvdGhlclVzZXJzID0gdXNlcnMuc2xpY2UoTWF0aC5tYXgoY3VycmVudFVzZXJJbmRleCAtIDEsIDEwKSwgY3VycmVudFVzZXJJbmRleCArIDIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAob3RoZXJVc2VycyAmJiBvdGhlclVzZXJzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHBvcHVsYXRlVXNlcnNUYWJsZShvdGhlclVzZXJzLCB1c2VySWQsIHJlc3VsdHNUYWJsZU90aGVyLCB1c2Vycyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVXYWdlcihyYW5rKSB7XG4gICAgICAgIGxldCBwcml6ZVRleHQgPSAnLSc7XG4gICAgICAgIGlmIChyYW5rID49IDExICYmIHJhbmsgPD0gNTApIHtcbiAgICAgICAgICAgIHByaXplVGV4dCA9ICd4MSc7XG4gICAgICAgIH0gZWxzZSBpZiAocmFuayA+PSA1MSAmJiByYW5rIDw9IDE1MCkge1xuICAgICAgICAgICAgcHJpemVUZXh0ID0gJ3gyJztcbiAgICAgICAgfSBlbHNlIGlmIChyYW5rID49IDE1MSAmJiByYW5rIDw9IDMwMCkge1xuICAgICAgICAgICAgcHJpemVUZXh0ID0gJ3gzJztcbiAgICAgICAgfSBlbHNlIGlmIChyYW5rID49IDMwMSAmJiByYW5rIDw9IDQwMCkge1xuICAgICAgICAgICAgcHJpemVUZXh0ID0gJ3g0JztcbiAgICAgICAgfSBlbHNlIGlmIChyYW5rID49IDQwMSAmJiByYW5rIDw9IDU1MCkge1xuICAgICAgICAgICAgcHJpemVUZXh0ID0gJ3g1JztcbiAgICAgICAgfSBlbHNlIGlmIChyYW5rID49IDU1MSAmJiByYW5rIDw9IDc1MCkge1xuICAgICAgICAgICAgcHJpemVUZXh0ID0gJy0nO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcml6ZVRleHQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcG9wdWxhdGVVc2Vyc1RhYmxlKHVzZXJzLCBjdXJyZW50VXNlcklkLCB0YWJsZSwgYWxsVXNlcnMpIHtcbiAgICAgICAgdGFibGUuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGlmICh1c2VycyAmJiB1c2Vycy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHVzZXJzLmZvckVhY2goKHVzZXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hlY2tDdXJyZW50VXNlciA9IGN1cnJlbnRVc2VySWQgJiYgY3VycmVudFVzZXJJZCA9PT0gdXNlci51c2VyaWQ7XG4gICAgICAgICAgICAgICAgY29uc3QgYWRkaXRpb25hbFVzZXJSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tDdXJyZW50VXNlcikge1xuICAgICAgICAgICAgICAgICAgICBhZGRpdGlvbmFsVXNlclJvdy5jbGFzc0xpc3QuYWRkKCd5b3UnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBwbGFjZSA9IGFsbFVzZXJzLmluZGV4T2YodXNlcikgKyAxO1xuXG4gICAgICAgICAgICAgICAgbGV0IHBsYWNlQ2xhc3M7XG4gICAgICAgICAgICAgICAgaWYgKHRhYmxlLmlkID09PSAndG9wLXVzZXJzJyB8fCB0YWJsZS5pZCA9PT0gJ3F1ZXN0c1RhYmxlJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlQ2xhc3MgPSAnZ29sZCc7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlQ2xhc3MgPSAnc2lsdmVyJztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpbmRleCA9PT0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VDbGFzcyA9ICdicm9uemUnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgcHJpemVLZXkgPSBnZXRQcml6ZVRyYW5zbGF0aW9uS2V5KHBsYWNlKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwcml6ZVZhbHVlID0gdXBkYXRlV2FnZXIocGxhY2UpO1xuICAgICAgICAgICAgICAgIGFkZGl0aW9uYWxVc2VyUm93LmNsYXNzTGlzdC5hZGQoJ3RhYmxlX19ib2R5LXJvdycpO1xuICAgICAgICAgICAgICAgIGlmIChwbGFjZUNsYXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZGl0aW9uYWxVc2VyUm93LmNsYXNzTGlzdC5hZGQocGxhY2VDbGFzcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFkZGl0aW9uYWxVc2VyUm93LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX2JvZHktcm93LWl0ZW1cIj4ke3BsYWNlfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fYm9keS1yb3ctaXRlbVwiPiR7Y2hlY2tDdXJyZW50VXNlciA/IHVzZXIudXNlcmlkIDogbWFza1VzZXJJZCh1c2VyLnVzZXJpZCl9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19ib2R5LXJvdy1pdGVtXCI+JHt1c2VyLnBvaW50cyAmJiAhaXNOYU4odXNlci5wb2ludHMpID8gdXNlci5wb2ludHMgOiAwfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fYm9keS1yb3ctaXRlbVwiPiR7cHJpemVLZXkgPyB0cmFuc2xhdGVLZXkocHJpemVLZXkpIDogJyAtICd9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19ib2R5LXJvdy1pdGVtXCI+JHtwcml6ZVZhbHVlfTwvZGl2PlxuICAgICAgICAgICAgYDtcbiAgICAgICAgICAgICAgICB0YWJsZS5hcHBlbmQoYWRkaXRpb25hbFVzZXJSb3cpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRQcml6ZVRyYW5zbGF0aW9uS2V5KHBsYWNlKSB7XG4gICAgICAgIGlmIChwbGFjZSA8PSAxMCkge1xuICAgICAgICAgICAgcmV0dXJuIGBwcml6ZV8ke3BsYWNlfWA7XG4gICAgICAgIH0gZWxzZSBpZiAocGxhY2UgPD0gMjApIHtcbiAgICAgICAgICAgIHJldHVybiBgcHJpemVfMTEtMjBgO1xuICAgICAgICB9IGVsc2UgaWYgKHBsYWNlIDw9IDMwKSB7XG4gICAgICAgICAgICByZXR1cm4gYHByaXplXzIxLTMwYDtcbiAgICAgICAgfSBlbHNlIGlmIChwbGFjZSA8PSA0MCkge1xuICAgICAgICAgICAgcmV0dXJuIGBwcml6ZV8zMS00MGA7XG4gICAgICAgIH0gZWxzZSBpZiAocGxhY2UgPD0gNTApIHtcbiAgICAgICAgICAgIHJldHVybiBgcHJpemVfNDEtNTBgO1xuICAgICAgICB9IGVsc2UgaWYgKHBsYWNlIDw9IDcwKSB7XG4gICAgICAgICAgICByZXR1cm4gYHByaXplXzUxLTcwYDtcbiAgICAgICAgfSBlbHNlIGlmIChwbGFjZSA8PSAxMDApIHtcbiAgICAgICAgICAgIHJldHVybiBgcHJpemVfNzEtMTAwYDtcbiAgICAgICAgfSBlbHNlIGlmIChwbGFjZSA8PSAxNTApIHtcbiAgICAgICAgICAgIHJldHVybiBgcHJpemVfMTAxLTE1MGA7XG4gICAgICAgIH0gZWxzZSBpZiAocGxhY2UgPD0gMjAwKSB7XG4gICAgICAgICAgICByZXR1cm4gYHByaXplXzE1MS0yMDBgO1xuICAgICAgICB9IGVsc2UgaWYgKHBsYWNlIDw9IDI1MCkge1xuICAgICAgICAgICAgcmV0dXJuIGBwcml6ZV8yMDEtMjUwYDtcbiAgICAgICAgfSBlbHNlIGlmIChwbGFjZSA8PSAzMDApIHtcbiAgICAgICAgICAgIHJldHVybiBgcHJpemVfMjUxLTMwMGA7XG4gICAgICAgIH0gZWxzZSBpZiAocGxhY2UgPD0gMzUwKSB7XG4gICAgICAgICAgICByZXR1cm4gYHByaXplXzMwMS0zNTBgO1xuICAgICAgICB9IGVsc2UgaWYgKHBsYWNlIDw9IDQwMCkge1xuICAgICAgICAgICAgcmV0dXJuIGBwcml6ZV8zNTEtNDAwYDtcbiAgICAgICAgfSBlbHNlIGlmIChwbGFjZSA8PSA0NTApIHtcbiAgICAgICAgICAgIHJldHVybiBgcHJpemVfNDAxLTQ1MGA7XG4gICAgICAgIH0gZWxzZSBpZiAocGxhY2UgPD0gNTAwKSB7XG4gICAgICAgICAgICByZXR1cm4gYHByaXplXzQ1MS01MDBgO1xuICAgICAgICB9IGVsc2UgaWYgKHBsYWNlIDw9IDU1MCkge1xuICAgICAgICAgICAgcmV0dXJuIGBwcml6ZV81MDEtNTUwYDtcbiAgICAgICAgfSBlbHNlIGlmIChwbGFjZSA8PSA2MDApIHtcbiAgICAgICAgICAgIHJldHVybiBgcHJpemVfNTUxLTYwMGA7XG4gICAgICAgIH0gZWxzZSBpZiAocGxhY2UgPD0gNjUwKSB7XG4gICAgICAgICAgICByZXR1cm4gYHByaXplXzYwMS02NTBgO1xuICAgICAgICB9IGVsc2UgaWYgKHBsYWNlIDw9IDcwMCkge1xuICAgICAgICAgICAgcmV0dXJuIGBwcml6ZV82NTEtNzAwYDtcbiAgICAgICAgfSBlbHNlIGlmIChwbGFjZSA8PSA3NTApIHtcbiAgICAgICAgICAgIHJldHVybiBgcHJpemVfNzAxLTc1MGA7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIG1hc2tVc2VySWQodXNlcklkKSB7XG4gICAgICAgIHJldHVybiBcIioqXCIgKyB1c2VySWQudG9TdHJpbmcoKS5zbGljZSgyKTtcbiAgICB9XG5cbiAgICBjb25zdCByZXF1ZXN0ID0gZnVuY3Rpb24gKGxpbmssIGV4dHJhT3B0aW9ucykge1xuICAgICAgICByZXR1cm4gZmV0Y2goYXBpVVJMICsgbGluaywge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC4uLihleHRyYU9wdGlvbnMgfHwge30pXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tVc2VyQXV0aCgpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2codXNlcklkKVxuICAgICAgICBpZiAodXNlcklkKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHVuYXV0aE1lcyBvZiB1bmF1dGhNc2dzKSB7XG4gICAgICAgICAgICAgICAgdW5hdXRoTWVzLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0KGAvZmF2dXNlci8ke3VzZXJJZH0/bm9jYWNoZT0xYClcbiAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLnVzZXJpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhdGVCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWRpcmVjdEJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhbGxXcmFwLmNsYXNzTGlzdC5yZW1vdmUoJ19zaWduJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBndWlkZVdyYXAuY2xhc3NMaXN0LnJlbW92ZSgnX3NpZ24nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVXcmFwLmNsYXNzTGlzdC5yZW1vdmUoJ19zaWduJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2dyZXNzXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJfc2lnblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkZWJ1Zykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5wb2ludHNQZXJEYXkgPSAzMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc3BpbkFsbG93ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zcGluc1N0cmVhayA9IDM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnNwaW5zID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZWZyZXNoV2hlZWwocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZnJlc2hEYWlseVBvaW50c1NlY3Rpb24ocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcy5zcGlucylcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlVc2VyU3BpbnMocmVzLnNwaW5zKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IHBhcnRpY2lwYXRlQnRuIG9mIHBhcnRpY2lwYXRlQnRucykge1xuICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoY29uc3QgdW5hdXRoTWVzIG9mIHVuYXV0aE1zZ3MpIHtcbiAgICAgICAgICAgICAgICB1bmF1dGhNZXMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsb2FkVHJhbnNsYXRpb25zKClcbiAgICAgICAgLnRoZW4oaW5pdCk7XG5cbiAgICBmdW5jdGlvbiByZWZyZXNoV2Vla1RhYnMoKSB7XG4gICAgICAgIHNlbGVjdGVkV2Vla1RhYklkID0gY2FsY3VsYXRlUmVjZW50UHJvbW9XZWVrcygpIC0gMTtcbiAgICAgICAgaWYgKCFzZWxlY3RlZFdlZWtUYWJJZCB8fCBzZWxlY3RlZFdlZWtUYWJJZCA9PT0gMCkgeyAvLyBwcm9tbyBub3Qgc3RhcnRlZCB5ZXRcbiAgICAgICAgICAgIC8vIHdlZWtzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCB3ZWVrU2VsZWN0b3IgPSB3ZWVrc1NlbGVjdG9yW2ldO1xuICAgICAgICAgICAgaWYgKHNlbGVjdGVkV2Vla1RhYklkIDwgaSkge1xuICAgICAgICAgICAgICAgIHdlZWtTZWxlY3Rvci5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB3ZWVrc1NlbGVjdG9yLmZvckVhY2goKHcsIGkpID0+IHtcbiAgICAgICAgICAgIHcuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICBpZiAoaSA9PT0gc2VsZWN0ZWRXZWVrVGFiSWQpIHtcbiAgICAgICAgICAgICAgICB3LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVSZWNlbnRQcm9tb1dlZWtzKCkge1xuICAgICAgICBjb25zdCBkYXRlID0gRGF0ZS5ub3coKTtcbiAgICAgICAgaWYgKGRhdGUgPCBuZXcgRGF0ZShcIjIwMjQtMTItMTdUMjI6MDA6MDBaXCIpKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAyO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiB0cmFuc2xhdGVLZXkoa2V5KSB7XG4gICAgICAgIGlmICgha2V5KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGkxOG5EYXRhW2tleV0gfHwgJyotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSogICBrZXk6ICAnICsga2V5O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlZnJlc2hXaGVlbCh1c2VySW5mbykge1xuICAgICAgICBpZiAodXNlckluZm8uc3BpbkFsbG93ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodXNlckluZm8ucG9pbnRzUGVyRGF5ID49IDUwKSB7XG4gICAgICAgICAgICBiYWxsV3JhcC5jbGFzc0xpc3QuYWRkKCdfbG9jaycpO1xuICAgICAgICAgICAgcHJvZ3Jlc3NUaXRsZS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9ncmVzc1RpdGxlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgICAgIGJhbGxXcmFwLmNsYXNzTGlzdC5hZGQoJ19ibG9jaycpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVmcmVzaERhaWx5UG9pbnRzU2VjdGlvbih1c2VySW5mbykge1xuICAgICAgICBjb25zdCBwb2ludHMgPSBNYXRoLm1pbih1c2VySW5mby5wb2ludHNQZXJEYXkgfHwgMCwgNTApO1xuICAgICAgICAvLyBjb25zdCBwcm9ncmVzc1N0YXR1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9ncmVzc1N0YXR1cycpO1xuICAgICAgICAvLyBwcm9ncmVzc1N0YXR1cy5pbm5lckhUTUwgPSBgJHtwb2ludHN9LzUwYDtcbiAgICAgICAgY29uc3QgY3VycmVudFNwYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudCcpO1xuICAgICAgICBjdXJyZW50U3Bhbi5pbm5lckhUTUwgPSBgJHtwb2ludHN9YDtcbiAgICAgICAgY29uc3QgcHJvZ3Jlc3NMaW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2dyZXNzX19iYXItdGh1bWInKTtcbiAgICAgICAgY29uc3QgcHJvZ3Jlc3MgPSBwb2ludHMgLyA1MC4wICogMTAwO1xuICAgICAgICBwcm9ncmVzc0xpbmUuc3R5bGUud2lkdGggPSBgJHtwcm9ncmVzc30lYDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5VXNlclNwaW5zKHNwaW5zKSB7XG4gICAgICAgIGNvbnN0IHNwaW5JdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNwaW5zLXJvdycpO1xuICAgICAgICBjb25zdCBub1NwaW5JdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vLXNwaW5zJyk7XG5cbiAgICAgICAgaWYgKCFzcGlucyB8fCBzcGlucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHNwaW5JdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIG5vU3Bpbkl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY29uc3Qgc3BpbnNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3BpbnMtcm93Jyk7XG4gICAgICAgIHNwaW5JdGVtLmlubmVySFRNTCA9XG4gICAgICAgICAgICBgXG4gICAgICAgPGRpdiBjbGFzcz1cInNwaW5zLXJvdy1oZWFkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1kYXRlXCIgZGF0YS10cmFuc2xhdGU9XCJteVNwaW5zRGF0ZVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtcHJpemVcIiBkYXRhLXRyYW5zbGF0ZT1cIm15U3BpbnNQcml6ZVwiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgYFxuXG4gICAgICAgIHNwaW5JdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgbm9TcGluSXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG5vU3Bpbkl0ZW0pXG5cbiAgICAgICAgc3BpbnMuZm9yRWFjaChzcGluID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNwaW5EYXRlID0gbmV3IERhdGUoc3Bpbi5kYXRlKTtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRlZERhdGUgPSBzcGluRGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoJ3VrLVVBJyk7XG4gICAgICAgICAgICBjb25zdCBzcGluTmFtZSA9IHRyYW5zbGF0ZUtleShzcGluLm5hbWUpIHx8ICcnO1xuXG4gICAgICAgICAgICBjb25zdCBzcGluRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgc3BpbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc3BpbnMtcm93LWl0ZW0nKTtcblxuICAgICAgICAgICAgc3BpbkVsZW1lbnQuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb250ZW50LWRhdGVcIj4ke2Zvcm1hdHRlZERhdGV9PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb250ZW50LXByaXplXCI+JHtzcGluTmFtZX08L3NwYW4+XG4gICAgICAgIGA7XG5cbiAgICAgICAgICAgIHNwaW5JdGVtLmFwcGVuZENoaWxkKHNwaW5FbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0VGltZW91dCgoKSA9PiBtYWluUGFnZS5jbGFzc0xpc3QuYWRkKCdvdmVyZmxvdycpLCAxMDAwKTtcblxuXG4gICAgLy8gQ2FyZHMgc2xpZGVyXG4gICAgY29uc3QgY2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpemVfX2xpc3QnKSxcbiAgICAgICAgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJpemVfX2xpc3QtaXRlbScpLFxuICAgICAgICBjYXJkc1dyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpemVfX2xpc3Qtc2Nyb2xsJyksXG4gICAgICAgIG1vdmVSaWdodEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcml6ZV9fc2xpZGVyLW1vdmUtcmlnaHQnKSxcbiAgICAgICAgbW92ZUxlZnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpemVfX3NsaWRlci1tb3ZlLWxlZnQnKSxcbiAgICAgICAgdGFic0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcml6ZV9fdGFicycpLFxuICAgICAgICBpc01vYmlsZSA9IHdpbmRvdy5pbm5lcldpZHRoIDwgNjAwLFxuICAgICAgICB0b3RhbENhcmRzID0gY2FyZHMubGVuZ3RoLFxuICAgICAgICBjYXJkV2lkdGggPSBjYXJkc1swXS5jbGllbnRXaWR0aCxcbiAgICAgICAgY2FyZHNNYXJnaW4gPSAoY2FyZHNXcmFwLmNsaWVudFdpZHRoIC0gY2FyZFdpZHRoICogdG90YWxDYXJkcykgLyAodG90YWxDYXJkcyAtIDEpLFxuICAgICAgICB2aXNpYmxlU2xpZGVzID0gaXNNb2JpbGUgPyAxIDogTWF0aC5jZWlsKGNhcmRzQ29udGFpbmVyLmNsaWVudFdpZHRoIC8gKGNhcmRXaWR0aCArIGNhcmRzTWFyZ2luKSksXG4gICAgICAgIHRvdGFsVGFicyA9IE1hdGguY2VpbCh0b3RhbENhcmRzIC8gdmlzaWJsZVNsaWRlcyksXG4gICAgICAgIHRhYldpZHRoPSB2aXNpYmxlU2xpZGVzICogKGNhcmRXaWR0aCArIGNhcmRzTWFyZ2luKVxuXG5cbiAgICBsZXQgY3VycmVudFNsaWRlID0gMSxcbiAgICAgICAgY2FyZHNQb3NpdGlvbiA9IDAsXG4gICAgICAgIGxlZnRTbGlkZSxcbiAgICAgICAgcmlnaHRTbGlkZTtcblxuICAgIGNvbnN0IHVwZGF0ZUFjdGl2ZUNhcmQgPSAoY2FyZHMsIGFjdGl2ZUluZGV4KSA9PiB7XG4gICAgICAgIGNhcmRzLmZvckVhY2goKGNhcmQsIGkpID0+e1xuICAgICAgICAgICAgYWN0aXZlSW5kZXggLSAxID09PSBpID8gY2FyZC5jbGFzc0xpc3QuYWRkKFwiX2FjdGl2ZVwiKSA6IGNhcmQuY2xhc3NMaXN0LnJlbW92ZShcIl9hY3RpdmVcIilcbiAgICAgICAgfSlcbiAgICB9XG4gICAgdXBkYXRlQWN0aXZlQ2FyZChjYXJkcywgY3VycmVudFNsaWRlKVxuXG4gICAgZnVuY3Rpb24gbGVmdFNsaWRlVGFiKCl7XG4gICAgICAgIGxlZnRTbGlkZSA9IGN1cnJlbnRTbGlkZVxuICAgIH1cbiAgICBmdW5jdGlvbiByaWdodFNsaWRlVGFiKCl7XG4gICAgICAgIHJpZ2h0U2xpZGUgPSBjdXJyZW50U2xpZGUgKyAodmlzaWJsZVNsaWRlcyAtIDEpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZmlyc3RMYXN0U2xpZGVzKCl7XG4gICAgICAgIGlmKGlzTW9iaWxlKSByZXR1cm5cbiAgICAgICAgbGVmdFNsaWRlVGFiKClcbiAgICAgICAgcmlnaHRTbGlkZVRhYigpXG4gICAgICAgIGNhcmRzLmZvckVhY2goKGNhcmQgLCBpKSA9PntcbiAgICAgICAgICAgIGkgKyAxID09PSBsZWZ0U2xpZGUgPyBjYXJkLmNsYXNzTGlzdC5hZGQoXCJfbGVmdFwiKSA6IGNhcmQuY2xhc3NMaXN0LnJlbW92ZShcIl9sZWZ0XCIpXG4gICAgICAgICAgICBpICsgMSA9PT0gcmlnaHRTbGlkZSA/IGNhcmQuY2xhc3NMaXN0LmFkZChcIl9yaWdodFwiKSA6IGNhcmQuY2xhc3NMaXN0LnJlbW92ZShcIl9yaWdodFwiKVxuICAgICAgICB9KVxuICAgIH1cbiAgICBmaXJzdExhc3RTbGlkZXMoKVxuXG4gICAgZnVuY3Rpb24gc2V0Q2FyZHNQb3NpdGlvbiAocG9zaXRpb24pIHtcbiAgICAgICAgY2FyZHNXcmFwLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKC0ke3Bvc2l0aW9ufXB4KWA7XG4gICAgfTtcbiAgICBjb25zdCBtb3ZlUmlnaHQgPSAoKSA9PiB7XG5cbiAgICAgICAgaWYgKGN1cnJlbnRTbGlkZSA+PSB0b3RhbENhcmRzIC0gKHZpc2libGVTbGlkZXMgLSAxKSAmJiBpc01vYmlsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGZpcnN0TGFzdFNsaWRlcygpXG4gICAgICAgICAgICBjdXJyZW50U2xpZGUgPSAxO1xuICAgICAgICAgICAgY2FyZHNQb3NpdGlvbiA9IDA7XG4gICAgICAgICAgICByaWdodFNsaWRlKytcbiAgICAgICAgICAgIGxlZnRTbGlkZSsrXG4gICAgICAgIH1lbHNlIGlmKGN1cnJlbnRTbGlkZSA9PT0gdG90YWxDYXJkcykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudFNsaWRlKVxuICAgICAgICAgICAgY3VycmVudFNsaWRlID0gMTtcbiAgICAgICAgICAgIGNhcmRzUG9zaXRpb24gPSAwO1xuICAgICAgICB9ZWxzZSBpZihjdXJyZW50U2xpZGUgPT09IHRvdGFsQ2FyZHMgLSAoIHZpc2libGVTbGlkZXMgKyAxKSAmJiBpc01vYmlsZSA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICBjdXJyZW50U2xpZGUgPSB0b3RhbENhcmRzXG4gICAgICAgICAgICBjYXJkc1Bvc2l0aW9uID0gY2FyZHNXcmFwLmNsaWVudFdpZHRoIC0gKHdpbmRvdy5pbm5lcldpZHRoIC0gKGNhcmRzTWFyZ2luIC8gMikpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjYXJkc1Bvc2l0aW9uKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgbWF4UG9zaXRpb24gPSAodG90YWxDYXJkcyAtIHZpc2libGVTbGlkZXMpICogKGNhcmRXaWR0aCArIGNhcmRzTWFyZ2luKTtcbiAgICAgICAgICAgIGlmIChjYXJkc1Bvc2l0aW9uICsgY2FyZFdpZHRoICsgY2FyZHNNYXJnaW4gPiBtYXhQb3NpdGlvbikge1xuICAgICAgICAgICAgICAgIGNhcmRzUG9zaXRpb24gPSBtYXhQb3NpdGlvbjtcbiAgICAgICAgICAgICAgICBjdXJyZW50U2xpZGUgPSB0b3RhbENhcmRzIC0gdmlzaWJsZVNsaWRlcyArIDE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNhcmRzUG9zaXRpb24gKz0gY2FyZFdpZHRoICsgY2FyZHNNYXJnaW47XG4gICAgICAgICAgICAgICAgY3VycmVudFNsaWRlKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc2V0Q2FyZHNQb3NpdGlvbihjYXJkc1Bvc2l0aW9uKTtcbiAgICAgICAgdXBkYXRlQWN0aXZlQ2FyZChjYXJkcywgY3VycmVudFNsaWRlKVxuICAgICAgICBmaXJzdExhc3RTbGlkZXMoKVxuICAgICAgICBoaWRlUG9wdXBzT25CdG4ocHJpemVQb3B1cEl0ZW0pXG4gICAgICAgIC8vIGNlbnRlclBvcHVwKFwiLnByaXplX19saXN0LXBvcHVwXCIpXG5cbiAgICB9O1xuICAgIGNvbnN0IG1vdmVMZWZ0ID0gKCkgPT4ge1xuICAgICAgICBpZihjdXJyZW50U2xpZGUgPT09IDEgJiYgaXNNb2JpbGUgPT09IGZhbHNlKXtcbiAgICAgICAgICAgIGN1cnJlbnRTbGlkZSA9IHRvdGFsQ2FyZHMgLSAodmlzaWJsZVNsaWRlcyAtIDEpO1xuICAgICAgICAgICAgY2FyZHNQb3NpdGlvbiA9ICgodG90YWxDYXJkcyAtICh2aXNpYmxlU2xpZGVzIC0gMSkpICogKGNhcmRXaWR0aCArIGNhcmRzTWFyZ2luKSkgLShjYXJkV2lkdGggKyBjYXJkc01hcmdpbik7XG4gICAgICAgIH1lbHNlIGlmIChjdXJyZW50U2xpZGUgPT09IDIpIHtcbiAgICAgICAgICAgIGNhcmRzUG9zaXRpb24gPSAwXG4gICAgICAgICAgICBjdXJyZW50U2xpZGUgPSAxXG4gICAgICAgIH1lbHNlIGlmKGN1cnJlbnRTbGlkZSA9PT0gMSAmJiBpc01vYmlsZSA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICBjdXJyZW50U2xpZGUgPSB0b3RhbENhcmRzXG4gICAgICAgICAgICBjYXJkc1Bvc2l0aW9uID0gY2FyZHNXcmFwLmNsaWVudFdpZHRoIC0gKHdpbmRvdy5pbm5lcldpZHRoIC0gKGNhcmRzTWFyZ2luIC8gMikpXG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIGNhcmRzUG9zaXRpb24gLT0gY2FyZFdpZHRoICsgY2FyZHNNYXJnaW47XG4gICAgICAgICAgICBjdXJyZW50U2xpZGUtLVxuICAgICAgICB9XG4gICAgICAgIHNldENhcmRzUG9zaXRpb24oY2FyZHNQb3NpdGlvbik7XG4gICAgICAgIHVwZGF0ZUFjdGl2ZUNhcmQoY2FyZHMsIGN1cnJlbnRTbGlkZSlcbiAgICAgICAgZmlyc3RMYXN0U2xpZGVzKClcbiAgICAgICAgaGlkZVBvcHVwc09uQnRuKHByaXplUG9wdXBJdGVtKVxuICAgICAgICAvLyBjZW50ZXJQb3B1cChcIi5wcml6ZV9fbGlzdC1wb3B1cFwiKVxuICAgIH07XG5cbiAgICAvLyBjZW50ZXJQb3B1cChcIi5wcml6ZV9fbGlzdC1wb3B1cFwiKVxuXG5cbiAgICAvLyBwb3B1cHMgbG9naWNcblxuICAgIGZ1bmN0aW9uIHNldFBvcHVwcyhwb3B1cHMsIHBvcHVwc0J0bnMpIHtcbiAgICAgICAgcG9wdXBzQnRucy5mb3JFYWNoKChidG4sIGkpID0+IHtcbiAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBwb3B1cHMuZm9yRWFjaCgocG9wdXAsIGopID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaSA9PT0gaiA/IHBvcHVwLmNsYXNzTGlzdC5hZGQoXCJfcG9wdXBcIikgOiBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwiX3BvcHVwXCIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uICAgaGlkZVBvcHVwc09uQnRuKHBvcHVwcyl7XG4gICAgICAgIHBvcHVwcy5mb3JFYWNoKHBvcHVwID0+e1xuICAgICAgICAgICAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcIl9wb3B1cFwiKVxuICAgICAgICB9KVxuICAgIH1cblxuLy8gcG9wdXBzXG4gICAgY29uc3QgcHJpemVPcGVuQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJpemVfX2xpc3QtaXRlbS1idG5cIiksXG4gICAgICAgIHByaXplQ2xvc2VCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcml6ZV9fbGlzdC1wb3B1cC1jbG9zZVwiKSxcbiAgICAgICAgZ3VpZGVQb3B1cHNXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ndWlkZV9faXRlbVwiKSxcbiAgICAgICAgZ3VpZGVPcGVuQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZ3VpZGVfX2l0ZW0taW5mby1idG5cIiksXG4gICAgICAgIGd1aWRlQ2xvc2VCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ndWlkZV9faXRlbS1wb3B1cC1jbG9zZVwiKSxcbiAgICAgICAgdGFibGVQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFibGVfX3BvcHVwXCIpLFxuICAgICAgICB0YWJsZVBvcHVwQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhYmxlX19wb3B1cC1jbG9zZVwiKSxcbiAgICAgICAgdGFibGVQb3B1cE9wZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhYmxlX19pbmZvXCIpLFxuICAgICAgICBiYWxsUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2dyZXNzX19wb3B1cFwiKSxcbiAgICAgICAgYmFsbFBvcHVwQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2dyZXNzX19wb3B1cC1jbG9zZVwiKSxcbiAgICAgICAgYmFsbFBvcHVwT3BlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZ3Jlc3NfX3BvcHVwLWJ0blwiKSxcbiAgICAgICAgcHJpemVQb3B1cEl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByaXplX19jb250YWluZXItaXRlbVwiKVxuXG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+e1xuXG4gICAgICAgIC8vICBwcml6ZVBvcHVwSXRlbS5mb3JFYWNoKGNhcmQgPT57XG4gICAgICAgIC8vICAgICAgICAgaWYoZS50YXJnZXQgIT09IGNhcmQpe1xuICAgICAgICAvLyAgICAgICAgICAgICBwcml6ZU9wZW5CdG5zLmZvckVhY2goYnRuID0+e1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgaWYoZS50YXJnZXQgIT09IGJ0biAmJiBlLnRhcmdldCAhPT0gY2FyZCl7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQgKVxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIC8vIGNhcmQuY2xhc3NMaXN0LnJlbW92ZShcIl9wb3B1cFwiKVxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICAgICAgICB9KVxuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gfSlcbiAgICAgICAgZ3VpZGVQb3B1cHNXcmFwLmZvckVhY2gocG9wdXAgPT57XG4gICAgICAgICAgICBpZighcG9wdXAuY29udGFpbnMoZS50YXJnZXQpKXtcbiAgICAgICAgICAgICAgICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwiX3BvcHVwXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYoIWJhbGxQb3B1cC5jb250YWlucyhlLnRhcmdldCkgJiYgZS50YXJnZXQgIT09IGJhbGxQb3B1cE9wZW4pe1xuICAgICAgICAgICAgYmFsbFBvcHVwLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgICAgIH1cblxuICAgIH0pXG5cblxuICAgIHNldFBvcHVwcyhwcml6ZVBvcHVwSXRlbSwgcHJpemVPcGVuQnRucyk7XG4gICAgc2V0UG9wdXBzKGd1aWRlUG9wdXBzV3JhcCwgZ3VpZGVPcGVuQnRucyk7XG5cbiAgICBndWlkZUNsb3NlQnRucy5mb3JFYWNoKGJ0biA9PntcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XG4gICAgICAgICAgICBoaWRlUG9wdXBzT25CdG4oZ3VpZGVQb3B1cHNXcmFwKVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIHByaXplQ2xvc2VCdG5zLmZvckVhY2goYnRuID0+e1xuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcbiAgICAgICAgICAgIGhpZGVQb3B1cHNPbkJ0bihwcml6ZVBvcHVwSXRlbSlcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0YWJsZVBvcHVwT3Blbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIHRhYmxlUG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIilcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCJcbiAgICB9KTtcblxuICAgIHRhYmxlUG9wdXBDbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIHRhYmxlUG9wdXAuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiXG4gICAgfSk7XG5cbiAgICBiYWxsUG9wdXBPcGVuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgYmFsbFBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpXG4gICAgfSk7XG5cbiAgICBiYWxsUG9wdXBDbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIGJhbGxQb3B1cC5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgIH0pO1xuXG4gICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIENPVU5UID0gNDAwO1xuXG4gICAgICAgIGZ1bmN0aW9uIFNub3dzdG9ybShlbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLm1hc3RoZWFkID0gZWxlbWVudDtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgICAgICB0aGlzLndpZHRoID0gdGhpcy5tYXN0aGVhZC5jbGllbnRXaWR0aDtcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5tYXN0aGVhZC5jbGllbnRIZWlnaHQ7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zbm93Zmxha2VzID0gW107XG5cbiAgICAgICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgU25vd3N0b3JtLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUubGVmdCA9IHRoaXMuY2FudmFzLnN0eWxlLnRvcCA9ICcwJztcbiAgICAgICAgICAgIHRoaXMubWFzdGhlYWQuYXBwZW5kQ2hpbGQodGhpcy5jYW52YXMpO1xuXG4gICAgICAgICAgICB0aGlzLm9uUmVzaXplKCk7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpLCBmYWxzZSk7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgQ09VTlQ7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBzbm93Zmxha2UgPSBuZXcgdGhpcy5Tbm93Zmxha2UodGhpcyk7XG4gICAgICAgICAgICAgICAgc25vd2ZsYWtlLnJlc2V0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zbm93Zmxha2VzLnB1c2goc25vd2ZsYWtlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1GcmFtZSh0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBTbm93c3Rvcm0ucHJvdG90eXBlLm9uUmVzaXplID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMubWFzdGhlYWQuY2xpZW50V2lkdGg7XG4gICAgICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMubWFzdGhlYWQuY2xpZW50SGVpZ2h0O1xuICAgICAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB0aGlzLndpZHRoO1xuICAgICAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnI0ZGRic7XG5cbiAgICAgICAgICAgIHZhciB3YXNBY3RpdmUgPSB0aGlzLmFjdGl2ZTtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlID0gdGhpcy53aWR0aCA+IDgwO1xuICAgICAgICAgICAgdGhpcy53aWR0aCA+IDI4MCA/IENPVU5UID0gMTUwIDogbnVsbFxuXG4gICAgICAgICAgICBpZiAoIXdhc0FjdGl2ZSAmJiB0aGlzLmFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltRnJhbWUodGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgU25vd3N0b3JtLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuXG4gICAgICAgICAgICBpZiAoIXRoaXMuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IENPVU5UOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgc25vd2ZsYWtlID0gdGhpcy5zbm93Zmxha2VzW2ldO1xuICAgICAgICAgICAgICAgIHNub3dmbGFrZS55ICs9IHNub3dmbGFrZS52eTtcbiAgICAgICAgICAgICAgICBzbm93Zmxha2UueCArPSBzbm93Zmxha2Uudng7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5nbG9iYWxBbHBoYSA9IHNub3dmbGFrZS5vO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmFyYyhzbm93Zmxha2UueCwgc25vd2ZsYWtlLnksIHNub3dmbGFrZS5yLCAwLCBNYXRoLlBJICogMiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcblxuICAgICAgICAgICAgICAgIGlmIChzbm93Zmxha2UueSA+IHRoaXMuaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIHNub3dmbGFrZS5yZXNldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVxdWVzdEFuaW1GcmFtZSh0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgfTtcblxuICAgICAgICBTbm93c3Rvcm0ucHJvdG90eXBlLlNub3dmbGFrZSA9IGZ1bmN0aW9uIChzbm93c3Rvcm0pIHtcbiAgICAgICAgICAgIHRoaXMuc25vd3N0b3JtID0gc25vd3N0b3JtO1xuICAgICAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIFNub3dzdG9ybS5wcm90b3R5cGUuU25vd2ZsYWtlLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMueCA9IE1hdGgucmFuZG9tKCkgKiB0aGlzLnNub3dzdG9ybS53aWR0aDtcbiAgICAgICAgICAgIHRoaXMueSA9IE1hdGgucmFuZG9tKCkgKiAtdGhpcy5zbm93c3Rvcm0uaGVpZ2h0O1xuICAgICAgICAgICAgdGhpcy52eSA9IDAuMyArIE1hdGgucmFuZG9tKCkgKiAwLjAwMDAxO1xuICAgICAgICAgICAgdGhpcy52eCA9IDAuNiAtIE1hdGgucmFuZG9tKCk7XG4gICAgICAgICAgICB0aGlzLnIgPSAxICsgTWF0aC5yYW5kb20oKSAqIDI7XG4gICAgICAgICAgICB0aGlzLm8gPSAxO1xuICAgICAgICB9O1xuXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbUZyYW1lID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgICAgICAgICAgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICAgICAgICAgIHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoY2FsbGJhY2ssIDEwMDAgLyA2MCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgfSkoKTtcblxuICAgICAgICB2YXIgc2tpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2t5Jyk7XG4gICAgICAgIHNraWVzLmZvckVhY2goZnVuY3Rpb24gKHNreSkge1xuICAgICAgICAgICAgbmV3IFNub3dzdG9ybShza3kpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBiYWxsIHNoYWtlIHNub3dcbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNub3dDYW52YXMnKTtcbiAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIGNvbnN0IGJhbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3BoZXJlJyk7XG5cbiAgICAgICAgY2FudmFzLndpZHRoID0gY2FudmFzLnBhcmVudEVsZW1lbnQuY2xpZW50V2lkdGg7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBjYW52YXMucGFyZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XG5cbiAgICAgICAgbGV0IHNub3dmbGFrZXMgPSBbXTtcbiAgICAgICAgY29uc3QgbWF4U25vd2ZsYWtlcyA9IDEwMDtcbiAgICAgICAgY29uc3QgbWF4U3BlZWQgPSA3O1xuICAgICAgICBsZXQgc3Rvcm1Db3VudGVyID0gMVxuXG5cbiAgICAgICAgbGV0IHNub3dmbGFrZXNSZW1vdmVkID0gMDtcblxuICAgICAgICBjbGFzcyBTbm93Zmxha2Uge1xuICAgICAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy54ID0gTWF0aC5yYW5kb20oKSAqIGNhbnZhcy53aWR0aDtcbiAgICAgICAgICAgICAgICB0aGlzLnkgPSBNYXRoLnJhbmRvbSgpICogY2FudmFzLmhlaWdodDtcbiAgICAgICAgICAgICAgICB0aGlzLnJhZGl1cyA9IE1hdGgucmFuZG9tKCkgKiAzICsgMTtcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVkWCA9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDEwO1xuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWRZID0gTWF0aC5yYW5kb20oKSAqIDEuNSArIDE7XG4gICAgICAgICAgICAgICAgdGhpcy5hY2NlbGVyYXRpb24gPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMubW92aW5nVG9Cb3R0b20gPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdXBkYXRlKGJhbGxYLCBiYWxsWSwgYmFsbFJhZGl1cywgYmFsbFNoYWtpbmcpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tb3ZpbmdUb0JvdHRvbSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXRTcGVlZCA9IDAuMTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3BlZWREZWNheUZhY3RvciA9IDAuMDU7IC8vINCa0L7QtdGE0ZbRhtGW0ZTQvdGCINC00LvRjyDQv9C70LDQstC90L7Qs9C+INGB0L/QvtCy0ZbQu9GM0L3QtdC90L3Rj1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3BlZWRYID0gdGhpcy5zcGVlZFggLSAodGhpcy5zcGVlZFggLSB0YXJnZXRTcGVlZCkgKiBzcGVlZERlY2F5RmFjdG9yO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwZWVkWSA9IHRoaXMuc3BlZWRZIC0gKHRoaXMuc3BlZWRZIC0gdGFyZ2V0U3BlZWQpICogc3BlZWREZWNheUZhY3RvcjtcblxuICAgICAgICAgICAgICAgICAgICAvLyDQntC90L7QstC70LXQvdC90Y8g0L/QvtC30LjRhtGW0Zcg0YHQvdGW0LbQuNC90LrQuFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnkgKz0gdGhpcy5zcGVlZFk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMueSA+IGNhbnZhcy5oZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMueCArPSB0aGlzLnNwZWVkWDtcbiAgICAgICAgICAgICAgICB0aGlzLnkgKz0gdGhpcy5zcGVlZFk7XG5cbiAgICAgICAgICAgICAgICAvLyDQntCx0LzQtdC20LXQvdC90Y8g0YjQstC40LTQutC+0YHRgtGWXG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlZFggPSBNYXRoLm1heCgtbWF4U3BlZWQsIE1hdGgubWluKG1heFNwZWVkLCB0aGlzLnNwZWVkWCkpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWRZID0gTWF0aC5tYXgoLW1heFNwZWVkLCBNYXRoLm1pbihtYXhTcGVlZCwgdGhpcy5zcGVlZFkpKTtcblxuICAgICAgICAgICAgICAgIC8vINCU0L7QtNCw0LLQsNC90L3RjyDRiNCy0LjQtNC60L7RgdGC0ZYg0YfQtdGA0LXQtyBcItGC0YDRg9GB0ZbQvdC90Y9cIiDQutGD0LvRllxuICAgICAgICAgICAgICAgIGlmIChiYWxsU2hha2luZykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjY2VsZXJhdGlvbiArPSAwLjA1O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWNjZWxlcmF0aW9uICo9IDAuOTU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWRYICs9IHRoaXMuYWNjZWxlcmF0aW9uICogKE1hdGgucmFuZG9tKCkgLSAwLjUpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWRZICs9IHRoaXMuYWNjZWxlcmF0aW9uICogKE1hdGgucmFuZG9tKCkgLSAwLjUpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMueSA+IGNhbnZhcy5oZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54ID0gTWF0aC5yYW5kb20oKSAqIGNhbnZhcy53aWR0aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMueCA+IGNhbnZhcy53aWR0aCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnggPSAwO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy54IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnggPSBjYW52YXMud2lkdGg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8g0JLRltC00YHRgtCw0L3RjCDQtNC+INGG0LXQvdGC0YDRgyDQutGD0LvRllxuICAgICAgICAgICAgICAgIGNvbnN0IGR4ID0gdGhpcy54IC0gYmFsbFg7XG4gICAgICAgICAgICAgICAgY29uc3QgZHkgPSB0aGlzLnkgLSBiYWxsWTtcbiAgICAgICAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG5cbiAgICAgICAgICAgICAgICAvLyDQktGW0LTRgdC60L7QuiDQstGW0LQg0LrRg9C70ZZcbiAgICAgICAgICAgICAgICBpZiAoZGlzdGFuY2UgPCBiYWxsUmFkaXVzICsgdGhpcy5yYWRpdXMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYW5nbGUgPSBNYXRoLmF0YW4yKGR5LCBkeCk7IC8vINCa0YPRgiDQt9GW0YLQutC90LXQvdC90Y9cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3ZlcmxhcCA9IGJhbGxSYWRpdXMgKyB0aGlzLnJhZGl1cyAtIGRpc3RhbmNlO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vINCf0LXRgNC10LzRltGJ0LXQvdC90Y8g0YHQvdGW0LbQuNC90LrQuFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnggKz0gTWF0aC5jb3MoYW5nbGUpICogb3ZlcmxhcDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55ICs9IE1hdGguc2luKGFuZ2xlKSAqIG92ZXJsYXA7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8g0KDQtdCy0LXRgNGBINGI0LLQuNC00LrQvtGB0YLRllxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwZWVkWCAqPSAtMC43O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwZWVkWSAqPSAtMC43O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbW92ZVRvQm90dG9tKCkge1xuICAgICAgICAgICAgICAgIHRoaXMubW92aW5nVG9Cb3R0b20gPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZW1vdmUoKSB7XG4gICAgICAgICAgICAgICAgc25vd2ZsYWtlcy5zcGxpY2Uoc25vd2ZsYWtlcy5pbmRleE9mKHRoaXMpLCAxKTtcbiAgICAgICAgICAgICAgICBzbm93Zmxha2VzUmVtb3ZlZCsrO1xuICAgICAgICAgICAgICAgIGlmIChzdG9ybUNvdW50ZXIgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3IFNub3dzdG9ybShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNwaGVyZV9fYm9keVwiKSk7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JtQ291bnRlcisrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZHJhdygpIHtcbiAgICAgICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIDAsIE1hdGguUEkgKiAyKTtcbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gJ3doaXRlJztcbiAgICAgICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBsYXN0QmFsbFNoYWtpbmdTdGF0ZSA9IGZhbHNlO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF4U25vd2ZsYWtlczsgaSsrKSB7XG4gICAgICAgICAgICBzbm93Zmxha2VzLnB1c2gobmV3IFNub3dmbGFrZSgpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGFuaW1hdGUoKSB7XG4gICAgICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGJhbGxUcmFuc2Zvcm0gPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShiYWxsKS50cmFuc2Zvcm07XG4gICAgICAgICAgICBsZXQgYmFsbFggPSBjYW52YXMud2lkdGggLyAyO1xuICAgICAgICAgICAgbGV0IGJhbGxZID0gY2FudmFzLmhlaWdodCAvIDI7XG4gICAgICAgICAgICBjb25zdCBiYWxsUmFkaXVzID0gYmFsbC5vZmZzZXRXaWR0aCAvIDI7XG4gICAgICAgICAgICBjb25zdCBiYWxsU2hha2luZyA9IGJhbGxUcmFuc2Zvcm0gIT09ICdub25lJztcblxuICAgICAgICAgICAgaWYgKGJhbGxUcmFuc2Zvcm0gIT09ICdub25lJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1hdHJpeCA9IG5ldyBET01NYXRyaXgoYmFsbFRyYW5zZm9ybSk7XG4gICAgICAgICAgICAgICAgYmFsbFggPSBiYWxsLm9mZnNldExlZnQgKyBtYXRyaXgubTQxICsgYmFsbFJhZGl1cztcbiAgICAgICAgICAgICAgICBiYWxsWSA9IGJhbGwub2Zmc2V0VG9wICsgbWF0cml4Lm00MiArIGJhbGxSYWRpdXM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChiYWxsU2hha2luZyAmJiAhbGFzdEJhbGxTaGFraW5nU3RhdGUpIHtcbiAgICAgICAgICAgICAgICBzbm93Zmxha2VzID0gW107XG4gICAgICAgICAgICAgICAgc25vd2ZsYWtlc1JlbW92ZWQgPSAwO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF4U25vd2ZsYWtlczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHNub3dmbGFrZXMucHVzaChuZXcgU25vd2ZsYWtlKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGFzdEJhbGxTaGFraW5nU3RhdGUgPSBiYWxsU2hha2luZztcblxuICAgICAgICAgICAgc25vd2ZsYWtlcy5mb3JFYWNoKHNub3dmbGFrZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFiYWxsU2hha2luZykgc25vd2ZsYWtlLm1vdmVUb0JvdHRvbSgpO1xuICAgICAgICAgICAgICAgIHNub3dmbGFrZS51cGRhdGUoYmFsbFgsIGJhbGxZLCBiYWxsUmFkaXVzLCBiYWxsU2hha2luZyk7XG4gICAgICAgICAgICAgICAgc25vd2ZsYWtlLmRyYXcoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBhbmltYXRlKCk7XG5cbiAgICB9KSgpO1xuXG4vLyBzbm93ZmFsbCBhbmltYXRpb25cbiAgICBsZXQgaSA9IDE7XG4gICAgZnVuY3Rpb24gc2VuZFNoYWtlUmVxdWVzdCgpIHtcbiAgICAgICAgaWYgKCF1c2VySWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkZWJ1Zykge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgLy8gbnVtYmVyOiBpKyssXG4gICAgICAgICAgICAgICAgbnVtYmVyOiAnd2luUmVzcGluJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwYXJhbXMgPSB7dXNlcmlkOiB1c2VySWR9O1xuICAgICAgICByZXR1cm4gcmVxdWVzdCgnL3NwaW4nLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhcmFtcylcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgYnRuU2hha2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2dyZXNzX19zaGFrZVwiKSxcbiAgICAgICAgYmFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3BoZXJlXCIpLFxuICAgICAgICBiYWxsQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zcGhlcmVfX2JveFwiKVxuXG4gICAgbGV0IGN1cnJlbnRQcml6ZTtcbiAgICBsZXQgcGFzdFByaXplO1xuXG5cblxuICAgIC8vINCa0L7QttC10L0g0LrQu9Cw0YEg0LLRltC00L/QvtCy0ZbQtNCw0ZQg0LLQuNCz0YDQsNC90L7QvNGDINC/0YDQuNC30YM6XG4gICAgLy8gXCJfaXBob25lXCIgLSDQstC40LPRgNCw0L3QviBpUGhvbmVcbiAgICAvLyBcIl90dlwiIC0g0LLQuNCz0YDQsNC90L4g0YLQtdC70LXQstGW0LfQvtGAXG4gICAgLy8gXCJfamJsXCIgLSDQstC40LPRgNCw0L3QviBKQkwt0LrQvtC70L7QvdC60YNcbiAgICAvLyBcIl9tZWdvZ29cIiAtINCy0LjQs9GA0LDQvdC+INC/0ZbQtNC/0LjRgdC60YMgTWVnb2dvXG4gICAgLy8gXCJfcmVzcGluXCIgLSDQtNC+0LTQsNGC0LrQvtCy0LUg0L7QsdC10YDRgtCw0L3QvdGPXG4gICAgLy8gXCJfbm90aGluZ1wiIC0g0L3RltGH0L7Qs9C+INC90LUg0LLQuNCz0YDQsNC90L5cbiAgICAvLyBcIl9wb2ludHM1MFwiIC0g0LLQuNCz0YDQsNC90L4gNTAg0LHQvtC90YPRgdC90LjRhSDQsdCw0LvRltCyXG4gICAgLy8gXCJfZnMxMFwiIC0g0LLQuNCz0YDQsNC90L4gMTAg0YTRgNGW0YHQv9GW0L3RltCyXG4gICAgLy8gXCJfZnMyNVwiIC0g0LLQuNCz0YDQsNC90L4gMjUg0YTRgNGW0YHQv9GW0L3RltCyXG4gICAgLy8gXCJfZnM1MFwiIC0g0LLQuNCz0YDQsNC90L4gNTAg0YTRgNGW0YHQv9GW0L3RltCyXG4gICAgLy8gXCJfc2F2ZUJldDEwMFwiIC0g0LLQuNCz0YDQsNC90L4g0YHRgtGA0LDRhdC+0LLQutGDINC90LAgMTAwINGB0YLQsNCy0L7QulxuICAgIC8vIFwiX3NhdmVCZXQxNTBcIiAtINCy0LjQs9GA0LDQvdC+INGB0YLRgNCw0YXQvtCy0LrRgyDQvdCwIDE1MCDRgdGC0LDQstC+0LpcbiAgICAvLyBcIl9zYXZlQmV0MjAwXCIgLSDQstC40LPRgNCw0L3QviDRgdGC0YDQsNGF0L7QstC60YMg0L3QsCAyMDAg0YHRgtCw0LLQvtC6XG4gICAgLy8g0YTRg9C90LrRhtGW0Y8gaW5pdFNoYWtlINC/0YDQvtC60LjQtNGD0ZQg0LrQu9Cw0YHQuCDQstGW0LTQv9C+0LLRltC00L3RliDQv9GA0LjQt9Cw0Lwg0L3QsCDQsdC70L7QuiAuc3BoZXJlINC00LvRjyDQstGW0LTQvtCx0YDQsNC20LXQvdC90Y8g0L/RgNC40LfRg1xuICAgIGNvbnN0IHdpbkNsYXNzZXMgPSBbXG4gICAgICAgIFwiX3dpbklwaG9uZVwiLCBcIl93aW5UdlwiLCBcIl93aW5KYmxcIiwgXCJfd2luTWVnb2dvXCIsIFwiX3dpblJlc3BpblwiLCBcIl93aW5Ob3RoaW5nXCIsIFwiX3dpbkZzMTBcIiwgXCJfd2luRnMyNVwiLFxuICAgICAgICBcIl93aW5GczUwXCIsIFwiX3dpblNhdmVCZXQxMDBcIiwgXCJfd2luU2F2ZUJldDE1MFwiLCBcIl93aW5TYXZlQmV0MjAwXCIsIFwiX3dpblBvaW50czUwXCJcbiAgICBdO1xuXG5cbiAgICBmdW5jdGlvbiByZW1vdmVQcml6ZShiYWxsLCBib3gsIGJ0bil7XG4gICAgICAgIGJhbGwuY2xhc3NMaXN0LnJlbW92ZShcIl9iZWZvcmUtaGlkZVwiKTtcbiAgICAgICAgd2luQ2xhc3Nlcy5mb3JFYWNoKGl0ZW0gPT57XG4gICAgICAgICAgICBiYWxsLmNsYXNzTGlzdC5yZW1vdmUoYCR7aXRlbX1gKVxuICAgICAgICB9KVxuICAgICAgICBib3guY2xhc3NMaXN0LnJlbW92ZShcIl9ib3gtb3BhY2l0eVwiKVxuICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZShcIl9kaXNhYmxlZFwiKVxuXG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gYW5pbWF0ZVNoYWtlKGJhbGwsIGJveCwgYnRuLCBwcml6ZSwgcHJpemVOdW0pIHtcblxuXG4gICAgICAgIGNvbnN0IGRlbGF5ID0gKG1zKSA9PiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKVxuXG4gICAgICAgIHJlbW92ZVByaXplKGJhbGwsIGJveCwgYnRuKVxuXG4gICAgICAgIGlmKHByaXplTnVtKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHByaXplTnVtKVxuICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJfZGlzYWJsZWRcIik7XG4gICAgICAgICAgICBiYWxsLmNsYXNzTGlzdC5hZGQoXCJfc2hha2VcIik7XG4gICAgICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcIl9zaGFrZS1yZXZlcnNlXCIpO1xuXG4gICAgICAgICAgICBhd2FpdCBkZWxheSgyMDAwKVxuXG4gICAgICAgICAgICBiYWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJfc2hha2VcIik7XG4gICAgICAgICAgICBiYWxsLmNsYXNzTGlzdC5hZGQoXCJfYmVmb3JlLWhpZGVcIik7XG4gICAgICAgICAgICBib3guY2xhc3NMaXN0LnJlbW92ZShcIl9zaGFrZS1yZXZlcnNlXCIpO1xuICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJfYm94LW9wYWNpdHlcIik7XG5cbiAgICAgICAgICAgIGF3YWl0IGRlbGF5KDIwMCk7XG5cbiAgICAgICAgICAgIGJhbGwuY2xhc3NMaXN0LmFkZChgJHtwcml6ZX1gKTtcblxuICAgICAgICAgICAgaWYgKHByaXplID09PSBcIl93aW5SZXNwaW5cIikge1xuICAgICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiX2Rpc2FibGVkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBidG4uY2xhc3NMaXN0LmFkZChcIl9kaXNhYmxlZFwiKTtcbiAgICAgICAgICAgIGJhbGwuY2xhc3NMaXN0LmFkZChcIl9zaGFrZVwiKTtcbiAgICAgICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwiX3NoYWtlLXJldmVyc2VcIik7XG5cbiAgICAgICAgICAgIC8vIGF3YWl0IGRlbGF5KDIwMDApXG5cbiAgICAgICAgICAgIGJhbGwuY2xhc3NMaXN0LnJlbW92ZShcIl9zaGFrZVwiKTtcbiAgICAgICAgICAgIGJhbGwuY2xhc3NMaXN0LmFkZChcIl9iZWZvcmUtaGlkZVwiKTtcbiAgICAgICAgICAgIGJveC5jbGFzc0xpc3QucmVtb3ZlKFwiX3NoYWtlLXJldmVyc2VcIik7XG4gICAgICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcIl9ib3gtb3BhY2l0eVwiKTtcblxuICAgICAgICAgICAgaWYocHJpemVOdW0gPT09IDApIGF3YWl0IGRlbGF5KDIwMCk7XG5cbiAgICAgICAgICAgIGJhbGwuY2xhc3NMaXN0LmFkZChgJHtwcml6ZX1gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGFzdFByaXplID0gcHJpemU7XG5cblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluaXRTaGFrZShiYWxsLCBidG4sIGJveCkge1xuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICAgICAgc2VuZFNoYWtlUmVxdWVzdCgpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAgICAgICAgIGlmICghcmVzIHx8ICEhcmVzLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGJ0blNoYWtlLmNsYXNzTGlzdC5hZGQoJ3B1bHNlLWJ0bicpO1xuICAgICAgICAgICAgICAgICAgICBidG5TaGFrZS5jbGFzc0xpc3QucmVtb3ZlKCdfZGlzYWJsZWQnKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHByaXplID0gYF8ke3Jlcy5udW1iZXJ9YDtcbiAgICAgICAgICAgICAgICBjb25zdCBwcml6ZU51bSA9IHdpbkNsYXNzZXMuaW5kZXhPZihwcml6ZSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1ByaXplOicsIHByaXplKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUHJpemUgTnVtOicsIHByaXplTnVtKVxuICAgICAgICAgICAgICAgIGFuaW1hdGVTaGFrZShiYWxsLCBib3gsIGJ0biwgcHJpemUsIHByaXplTnVtKS5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihcImFuaW0gZXJyb3I6XCIsIGVycikpO1xuICAgICAgICAgICAgfSkudGhlbihjaGVja1VzZXJBdXRoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5pdFNoYWtlKGJhbGwsIGJ0blNoYWtlLCBiYWxsQm94KVxuXG4gICAgY29uc3QgYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYnRuXCIpLFxuICAgICAgICBvcyA9IGRldGVjdE9TKClcblxuICAgIGlmIChvcyA9PT0gXCJtYWNPU1wiIHx8IG9zID09PSBcImlPU1wiKXtcbiAgICAgICAgYnRucy5mb3JFYWNoKGJ0biA9PntcbiAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiX2lvc1wiKVxuICAgICAgICB9KVxuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gZGV0ZWN0T1MoKSB7XG4gICAgICAgIGNvbnN0IHVzZXJBZ2VudCA9IG5hdmlnYXRvci51c2VyQWdlbnQgfHwgbmF2aWdhdG9yLnZlbmRvciB8fCB3aW5kb3cub3BlcmE7XG4gICAgICAgIGNvbnN0IHBsYXRmb3JtID0gbmF2aWdhdG9yLnBsYXRmb3JtIHx8IFwidW5rbm93blwiO1xuICAgICAgICBsZXQgb3M7XG5cbiAgICAgICAgaWYgKC9hbmRyb2lkL2kudGVzdCh1c2VyQWdlbnQpICYmIC9saW51eCBhcm0vaS50ZXN0KHBsYXRmb3JtKSkge1xuICAgICAgICAgICAgb3MgPSBcIkFuZHJvaWRcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoL2lQYWR8aVBob25lfGlQb2QvLnRlc3QodXNlckFnZW50KSAmJiAhd2luZG93Lk1TU3RyZWFtKSB7XG4gICAgICAgICAgICBvcyA9IFwiaU9TXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKC9NYWNpbnRvc2h8TWFjSW50ZWx8TWFjUFBDfE1hYzY4Sy8udGVzdChwbGF0Zm9ybSkpIHtcbiAgICAgICAgICAgIG9zID0gXCJtYWNPU1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmICgvV2luMzJ8V2luNjR8V2luZG93c3xXT1c2NC8udGVzdChwbGF0Zm9ybSkpIHtcbiAgICAgICAgICAgIG9zID0gXCJXaW5kb3dzXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKC9MaW51eC8udGVzdChwbGF0Zm9ybSkgJiYgIS9hbmRyb2lkL2kudGVzdCh1c2VyQWdlbnQpKSB7XG4gICAgICAgICAgICBvcyA9IFwiTGludXhcIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3NcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhcItCe0L/QtdGA0LDRhtGW0LnQvdCwINGB0LjRgdGC0LXQvNCwOlwiLCBvcyk7XG5cbiAgICBjb25zdCBoYW5kbGVSZXNpemUgPSAoKSA9PntcbiAgICAgICAgbGV0IHRvdWNoU3RhcnRYID0gMDtcbiAgICAgICAgbGV0IHRvdWNoRW5kWCA9IDA7XG5cbiAgICAgICAgY2FyZHNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdG91Y2hTdGFydFggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5zY3JlZW5YO1xuICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgIGNhcmRzQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0b3VjaEVuZFggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5zY3JlZW5YO1xuICAgICAgICAgICAgaGFuZGxlU3dpcGUoKTtcbiAgICAgICAgfSwgZmFsc2UpO1xuXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZVN3aXBlKCkge1xuICAgICAgICAgICAgY29uc3Qgc3dpcGVUaHJlc2hvbGQgPSA1MDtcbiAgICAgICAgICAgIGlmICh0b3VjaEVuZFggPCB0b3VjaFN0YXJ0WCAtIHN3aXBlVGhyZXNob2xkKSB7XG4gICAgICAgICAgICAgICAgbW92ZVJpZ2h0KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0b3VjaEVuZFggPiB0b3VjaFN0YXJ0WCArIHN3aXBlVGhyZXNob2xkKSB7XG4gICAgICAgICAgICAgICAgbW92ZUxlZnQoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG1vdmVSaWdodEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1vdmVSaWdodCk7XG4gICAgICAgIG1vdmVMZWZ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbW92ZUxlZnQpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9yaWVudGF0aW9uY2hhbmdlXCIsICgpID0+e1xuICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBoYW5kbGVSZXNpemUoKVxuXG5cbiAgICAvLyBmb3IgdGVzdFxuICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGFyay1idG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgIC8vICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJkYXJrXCIpXG4gICAgLy8gfSlcbiAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVuLWJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgLy8gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmF2LXBhZ2VcIikuY2xhc3NMaXN0LnRvZ2dsZShcImVuXCIpXG4gICAgLy8gfSlcbiAgICAvL1xuICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVzdE1lbnVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG4gICAgLy8gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJpemVzLWJ0bnNcIikuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIilcbiAgICAvLyB9KVxuXG59KSgpO1xuIl19
