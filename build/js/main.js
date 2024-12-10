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
  var locale = 'en';

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
  userId = 101234861;

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
    if (!userInfo.spinAllowed) {
      ballWrap.classList.add('_lock');
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
    spinItem.innerHTML = '';
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
        number: 'jbl'
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
  function initShake(ball, btn, box, prizeNum) {
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
        var streakBonus = res.streakBonus || debug;
        animateShake(ball, box, btn, prize, prizeNum)["catch"](function (err) {
          return console.error("anim error:", err);
        });
      });
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwicmVzdWx0c1RhYmxlT3RoZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ1bmF1dGhNc2dzIiwicXVlcnlTZWxlY3RvckFsbCIsInBhcnRpY2lwYXRlQnRucyIsInJlZGlyZWN0QnRucyIsInRvcFJlc3VsdHNUYWJsZSIsImdldEVsZW1lbnRCeUlkIiwid2Vla3NTZWxlY3RvciIsIm1haW5QYWdlIiwiYmFsbFdyYXAiLCJndWlkZVdyYXAiLCJnYW1lV3JhcCIsInVrTGVuZyIsImVuTGVuZyIsImxvY2FsZSIsImkxOG5EYXRhIiwiZGVidWciLCJzZWxlY3RlZFdlZWtUYWJJZCIsInVzZXJJZCIsImxvYWRUcmFuc2xhdGlvbnMiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwidHJhbnNsYXRlIiwibXV0YXRpb25PYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJtdXRhdGlvbnMiLCJvYnNlcnZlIiwiY2hpbGRMaXN0Iiwic3VidHJlZSIsImVsZW1zIiwibGVuZ3RoIiwiZm9yRWFjaCIsImVsZW0iLCJrZXkiLCJnZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJyZW1vdmVBdHRyaWJ1dGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZWZyZXNoTG9jYWxpemVkQ2xhc3MiLCJlbGVtZW50IiwiYmFzZUNzc0NsYXNzIiwibGFuZyIsInJlbW92ZSIsImdldFVzZXJzIiwid2VlayIsInVybCIsInJlc29sdmVVc2Vyc1VybCIsInJlcXVlc3QiLCJ1c2VycyIsIm1hcCIsInVzZXJPcklkIiwidXNlcmlkIiwiSW5pdFBhZ2UiLCJ3IiwiaSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicyIsInJlZnJlc2hVc2VycyIsImluaXQiLCJyZWZyZXNoV2Vla1RhYnMiLCJ3aW5kb3ciLCJzdG9yZSIsInN0YXRlIiwiZ2V0U3RhdGUiLCJhdXRoIiwiaXNBdXRob3JpemVkIiwiaWQiLCJjaGVja1VzZXJBdXRoIiwic2V0dXBQYWdlIiwiYyIsInNldEludGVydmFsIiwiZ191c2VyX2lkIiwiY2xlYXJJbnRlcnZhbCIsImF1dGhCdG4iLCJwcmV2ZW50RGVmYXVsdCIsInBhcnRpY2lwYXRlIiwicGFyYW1zIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJpdGVtIiwicmVuZGVyVXNlcnMiLCJ0b3BVc2VycyIsInNsaWNlIiwicG9wdWxhdGVVc2Vyc1RhYmxlIiwiY3VycmVudFVzZXIiLCJmaW5kIiwidXNlciIsImN1cnJlbnRVc2VySW5kZXgiLCJpbmRleE9mIiwib3RoZXJVc2VycyIsIk1hdGgiLCJtYXgiLCJ1cGRhdGVXYWdlciIsInJhbmsiLCJwcml6ZVRleHQiLCJjdXJyZW50VXNlcklkIiwidGFibGUiLCJhbGxVc2VycyIsImluZGV4IiwiY2hlY2tDdXJyZW50VXNlciIsImFkZGl0aW9uYWxVc2VyUm93IiwiY3JlYXRlRWxlbWVudCIsInBsYWNlIiwicGxhY2VDbGFzcyIsInByaXplS2V5IiwiZ2V0UHJpemVUcmFuc2xhdGlvbktleSIsInByaXplVmFsdWUiLCJtYXNrVXNlcklkIiwicG9pbnRzIiwiaXNOYU4iLCJ0cmFuc2xhdGVLZXkiLCJhcHBlbmQiLCJ0b1N0cmluZyIsImxpbmsiLCJleHRyYU9wdGlvbnMiLCJoZWFkZXJzIiwidW5hdXRoTWVzIiwicG9pbnRzUGVyRGF5Iiwic3BpbkFsbG93ZWQiLCJzcGluc1N0cmVhayIsInNwaW5zIiwicmVmcmVzaFdoZWVsIiwicmVmcmVzaERhaWx5UG9pbnRzU2VjdGlvbiIsImRpc3BsYXlVc2VyU3BpbnMiLCJwYXJ0aWNpcGF0ZUJ0biIsIlByb21pc2UiLCJyZXNvbHZlIiwiY2FsY3VsYXRlUmVjZW50UHJvbW9XZWVrcyIsIndlZWtTZWxlY3RvciIsImRhdGUiLCJEYXRlIiwibm93IiwidXNlckluZm8iLCJtaW4iLCJjdXJyZW50U3BhbiIsInByb2dyZXNzTGluZSIsInByb2dyZXNzIiwic3R5bGUiLCJ3aWR0aCIsInNwaW5JdGVtIiwibm9TcGluSXRlbSIsInNwaW4iLCJzcGluRGF0ZSIsImZvcm1hdHRlZERhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJzcGluTmFtZSIsIm5hbWUiLCJzcGluRWxlbWVudCIsImFwcGVuZENoaWxkIiwic2V0VGltZW91dCIsImNhcmRzQ29udGFpbmVyIiwiY2FyZHMiLCJjYXJkc1dyYXAiLCJtb3ZlUmlnaHRCdXR0b24iLCJtb3ZlTGVmdEJ1dHRvbiIsInRhYnNDb250YWluZXIiLCJpc01vYmlsZSIsImlubmVyV2lkdGgiLCJ0b3RhbENhcmRzIiwiY2FyZFdpZHRoIiwiY2xpZW50V2lkdGgiLCJjYXJkc01hcmdpbiIsInZpc2libGVTbGlkZXMiLCJjZWlsIiwidG90YWxUYWJzIiwidGFiV2lkdGgiLCJjdXJyZW50U2xpZGUiLCJjYXJkc1Bvc2l0aW9uIiwibGVmdFNsaWRlIiwicmlnaHRTbGlkZSIsInVwZGF0ZUFjdGl2ZUNhcmQiLCJhY3RpdmVJbmRleCIsImNhcmQiLCJsZWZ0U2xpZGVUYWIiLCJyaWdodFNsaWRlVGFiIiwiZmlyc3RMYXN0U2xpZGVzIiwic2V0Q2FyZHNQb3NpdGlvbiIsInBvc2l0aW9uIiwidHJhbnNmb3JtIiwibW92ZVJpZ2h0IiwiY29uc29sZSIsImxvZyIsIm1heFBvc2l0aW9uIiwiaGlkZVBvcHVwc09uQnRuIiwicHJpemVQb3B1cEl0ZW0iLCJtb3ZlTGVmdCIsInNldFBvcHVwcyIsInBvcHVwcyIsInBvcHVwc0J0bnMiLCJidG4iLCJwb3B1cCIsImoiLCJwcml6ZU9wZW5CdG5zIiwicHJpemVDbG9zZUJ0bnMiLCJndWlkZVBvcHVwc1dyYXAiLCJndWlkZU9wZW5CdG5zIiwiZ3VpZGVDbG9zZUJ0bnMiLCJ0YWJsZVBvcHVwIiwidGFibGVQb3B1cENsb3NlIiwidGFibGVQb3B1cE9wZW4iLCJiYWxsUG9wdXAiLCJiYWxsUG9wdXBDbG9zZSIsImJhbGxQb3B1cE9wZW4iLCJjb250YWlucyIsInRhcmdldCIsIm92ZXJmbG93IiwiQ09VTlQiLCJTbm93c3Rvcm0iLCJtYXN0aGVhZCIsImNhbnZhcyIsImN0eCIsImdldENvbnRleHQiLCJoZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJhY3RpdmUiLCJzbm93Zmxha2VzIiwicHJvdG90eXBlIiwibGVmdCIsInRvcCIsIm9uUmVzaXplIiwiYmluZCIsInNub3dmbGFrZSIsIlNub3dmbGFrZSIsInJlc2V0IiwicHVzaCIsInJlcXVlc3RBbmltRnJhbWUiLCJ1cGRhdGUiLCJmaWxsU3R5bGUiLCJ3YXNBY3RpdmUiLCJjbGVhclJlY3QiLCJ5IiwidnkiLCJ4IiwidngiLCJnbG9iYWxBbHBoYSIsIm8iLCJiZWdpblBhdGgiLCJhcmMiLCJyIiwiUEkiLCJjbG9zZVBhdGgiLCJmaWxsIiwic25vd3N0b3JtIiwicmFuZG9tIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwid2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2FsbGJhY2siLCJza2llcyIsInNreSIsImJhbGwiLCJwYXJlbnRFbGVtZW50IiwibWF4U25vd2ZsYWtlcyIsIm1heFNwZWVkIiwic3Rvcm1Db3VudGVyIiwic25vd2ZsYWtlc1JlbW92ZWQiLCJyYWRpdXMiLCJzcGVlZFgiLCJzcGVlZFkiLCJhY2NlbGVyYXRpb24iLCJtb3ZpbmdUb0JvdHRvbSIsImJhbGxYIiwiYmFsbFkiLCJiYWxsUmFkaXVzIiwiYmFsbFNoYWtpbmciLCJ0YXJnZXRTcGVlZCIsInNwZWVkRGVjYXlGYWN0b3IiLCJkeCIsImR5IiwiZGlzdGFuY2UiLCJzcXJ0IiwiYW5nbGUiLCJhdGFuMiIsIm92ZXJsYXAiLCJjb3MiLCJzaW4iLCJzcGxpY2UiLCJsYXN0QmFsbFNoYWtpbmdTdGF0ZSIsImFuaW1hdGUiLCJiYWxsVHJhbnNmb3JtIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIm9mZnNldFdpZHRoIiwibWF0cml4IiwiRE9NTWF0cml4Iiwib2Zmc2V0TGVmdCIsIm00MSIsIm9mZnNldFRvcCIsIm00MiIsIm1vdmVUb0JvdHRvbSIsImRyYXciLCJzZW5kU2hha2VSZXF1ZXN0IiwibnVtYmVyIiwiYnRuU2hha2UiLCJiYWxsQm94IiwiY3VycmVudFByaXplIiwicGFzdFByaXplIiwid2luQ2xhc3NlcyIsInJlbW92ZVByaXplIiwiYm94IiwiYW5pbWF0ZVNoYWtlIiwicHJpemUiLCJwcml6ZU51bSIsImRlbGF5IiwibXMiLCJpbml0U2hha2UiLCJlcnJvciIsInN0cmVha0JvbnVzIiwiZXJyIiwiYnRucyIsIm9zIiwiZGV0ZWN0T1MiLCJ1c2VyQWdlbnQiLCJuYXZpZ2F0b3IiLCJ2ZW5kb3IiLCJvcGVyYSIsInBsYXRmb3JtIiwidGVzdCIsIk1TU3RyZWFtIiwiaGFuZGxlUmVzaXplIiwidG91Y2hTdGFydFgiLCJ0b3VjaEVuZFgiLCJldmVudCIsImNoYW5nZWRUb3VjaGVzIiwic2NyZWVuWCIsImhhbmRsZVN3aXBlIiwic3dpcGVUaHJlc2hvbGQiLCJsb2NhdGlvbiIsInJlbG9hZCJdLCJtYXBwaW5ncyI6Ijs7OytDQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQSxDQUFDLFlBQVk7RUFDVCxJQUFNQSxNQUFNLEdBQUcscUNBQXFDO0VBRXBELElBQ0lDLGlCQUFpQixHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxjQUFjLENBQUM7SUFDMURDLFVBQVUsR0FBR0YsUUFBUSxDQUFDRyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUM7SUFDckRDLGVBQWUsR0FBR0osUUFBUSxDQUFDRyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUM7SUFDeERFLFlBQVksR0FBR0wsUUFBUSxDQUFDRyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUM7SUFDdERHLGVBQWUsR0FBR04sUUFBUSxDQUFDTyxjQUFjLENBQUMsV0FBVyxDQUFDO0lBQ3REQyxhQUFhLEdBQUdSLFFBQVEsQ0FBQ0csZ0JBQWdCLENBQUMscUJBQXFCLENBQUM7SUFDaEU7SUFDQU0sUUFBUSxHQUFHVCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxXQUFXLENBQUM7SUFDOUNTLFFB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QUFLO0lBQ3pCLENBQUMsTUFBTSxJQUFJQSxLQUFLLElBQUksRUFBRSxFQUFFO01BQ3BCO0lBQ0osQ0FBQyxNQUFNLElBQUlBLEtBQUssSUFBSSxFQUFFLEVBQUU7TUFDcEI7SUFDSixDQUFDLE1BQU0sSUFBSUEsS0FBSyxJQUFJLEVBQUUsRUFBRTtNQUNwQjtJQUNKLENBQUMsTUFBTSxJQUFJQSxLQUFLLElBQUksRUFBRSxFQUFFO01BQ3BCO0lBQ0osQ0FBQyxNQUFNLElBQUlBLEtBQUssSUFBSSxFQUFFLEVBQUU7TUFDcEI7SUFDSixDQUFDLE1BQU0sSUFBSUEsS0FBSyxJQUFJLEdBQUcsRUFBRTtNQUNyQjtJQUNKLENBQUMsTUFBTSxJQUFJQSxLQUFLLElBQUksR0FBRyxFQUFFO01BQ3JCO0lBQ0osQ0FBQyxNQUFNLElBQUlBLEtBQUssSUFBSSxHQUFHLEVBQUU7TUFDckI7SUFDSixDQUFDLE1BQU0sSUFBSUEsS0FBSyxJQUFJLEdBQUcsRUFBRTtNQUNyQjtJQUNKLENBQUMsTUFBTSxJQUFJQSxLQUFLLElBQUksR0FBRyxFQUFFO01BQ3JCO0lBQ0osQ0FBQyxNQUFNLElBQUlBLEtBQUssSUFBSSxHQUFHLEVBQUU7TUFDckI7SUFDSixDQUFDLE1BQU0sSUFBSUEsS0FBSyxJQUFJLEdBQUcsRUFBRTtNQUNyQjtJQUNKLENBQUMsTUFBTSxJQUFJQSxLQUFLLElBQUksR0FBRyxFQUFFO01BQ3JCO0lBQ0osQ0FBQyxNQUFNLElBQUlBLEtBQUssSUFBSSxHQUFHLEVBQUU7TUFDckI7SUFDSixDQUFDLE1BQU0sSUFBSUEsS0FBSyxJQUFJLEdBQUcsRUFBRTtNQUNyQjtJQUNKLENBQUMsTUFBTSxJQUFJQSxLQUFLLElBQUksR0FBRyxFQUFFO01BQ3JCO0lBQ0osQ0FBQyxNQUFNLElBQUlBLEtBQUssSUFBSSxHQUFHLEVBQUU7TUFDckI7SUFDSixDQUFDLE1BQU0sSUFBSUEsS0FBSyxJQUFJLEdBQUcsRUFBRTtNQUNyQjtJQUNKLENBQUMsTUFBTSxJQUFJQSxLQUFLLElBQUksR0FBRyxFQUFFO01BQ3JCO0lB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QUNwRHpCLGNBQWMsQ0FBQ3RHLGdCQUFnQixDQUFDLE9BQU8sRUFBRXFJLFFBQVEsQ0FBQztJQUNsRC9ILE1BQU0sQ0FBQ04sZ0JBQWdCLENBQUMsbUJBQW1CLEVBQUUsWUFBSztNQUM5Q2tSLFFBQVEsQ0FBQ0MsTUFBTSxFQUFFO0lBQ3JCLENBQUMsQ0FBQztFQUNOLENBQUM7RUFFRFQsWUFBWSxFQUFFOztFQUdkO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7QUFFSixDQUFDLEdBQUciLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgYXBpVVJMID0gJ2h0dHBzOi8vZmF2LXByb20uY29tL2FwaV93aGVlbF8yMDI1J1xuXG4gICAgY29uc3RcbiAgICAgICAgcmVzdWx0c1RhYmxlT3RoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFibGVfX3VzZXInKSxcbiAgICAgICAgdW5hdXRoTXNncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy51bmF1dGgtbXNnJyksXG4gICAgICAgIHBhcnRpY2lwYXRlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tam9pbicpLFxuICAgICAgICByZWRpcmVjdEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9vay1wYXJ0JyksXG4gICAgICAgIHRvcFJlc3VsdHNUYWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3AtdXNlcnMnKSxcbiAgICAgICAgd2Vla3NTZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJsZV9fdG9nZ2xlLWl0ZW0nKSxcbiAgICAgICAgLy8gd2Vla3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFibGVfX3RvZ2dsZScpLFxuICAgICAgICBtYWluUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXYtcGFnZScpLFxuICAgICAgICBiYWxsV3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYWxsJyksXG4gICAgICAgIGd1aWRlV3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ndWlkZScpLFxuICAgICAgICBnYW1lV3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lcycpO1xuXG4gICAgY29uc3QgdWtMZW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VrTGVuZycpO1xuICAgIGNvbnN0IGVuTGVuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbkxlbmcnKTtcblxuXG4gICAgbGV0IGxvY2FsZSA9ICdlbic7XG5cbiAgICAvLyBjb25zb2xlLmxvZyh3ZWVrKVxuICAgIC8vXG4gICAgLy8gZnVuY3Rpb24gc2V0U3RhdGUobmV3TG9jYWxlKSB7XG4gICAgLy8gICAgIGxvY2FsZSA9IG5ld0xvY2FsZTtcbiAgICAvLyAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnbG9jYWxlJywgbG9jYWxlKTtcbiAgICAvLyB9XG4gICAgLy8gZnVuY3Rpb24gdG9nZ2xlU3RhdGUoKSB7XG4gICAgLy8gICAgIGNvbnN0IG5ld0xvY2FsZSA9IGxvY2FsZSA9PT0gJ2VuJyA/ICd1aycgOiAnZW4nO1xuICAgIC8vICAgICBzZXRTdGF0ZShuZXdMb2NhbGUpO1xuICAgIC8vICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgICAvLyB9XG4gICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVuLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIC8vICAgICB0b2dnbGVTdGF0ZSgpO1xuICAgIC8vIH0pO1xuXG4gICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlZWstYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHdlZWspXG4gICAgLy8gICAgIGlmKHdlZWsgPT09IDEpe1xuICAgIC8vICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLl93ZWVrMScpLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxuICAgIC8vICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLl93ZWVrMicpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgIC8vICAgICAgICAgcmV0dXJuIHdlZWsgPSAyXG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgaWYod2VlayA9PT0gMil7XG4gICAgLy8gICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuX3dlZWsyJykuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXG4gICAgLy8gICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuX3dlZWsxJykuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgLy8gICAgICAgICB3ZWVrID0gMVxuICAgIC8vICAgICB9XG4gICAgLy8gfSk7XG5cbiAgICBpZiAodWtMZW5nKSBsb2NhbGUgPSAndWsnO1xuICAgIGlmIChlbkxlbmcpIGxvY2FsZSA9ICdlbic7XG5cblxuICAgIGxldCBpMThuRGF0YSA9IHt9O1xuICAgIGNvbnN0IGRlYnVnID0gZmFsc2U7XG4gICAgbGV0IHNlbGVjdGVkV2Vla1RhYklkID0gMDtcbiAgICBsZXQgdXNlcklkO1xuICAgIHVzZXJJZCA9IDEwMTIzNDg2MTtcblxuICAgIC8vIHVzZXJJZCA9IE51bWJlcihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpKTtcbiAgICAvL1xuICAgIC8vIGNvbnNvbGUubG9nKHR5cGVvZiB1c2VySWQpXG4gICAgLy9cbiAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvY2stYnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAvLyAgICAgdXNlcklkID8gc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcInVzZXJJZFwiKSA6IHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJ1c2VySWRcIiwgJzEwMTIzNDg2MScpXG4gICAgLy8gICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICAgIC8vIH0pXG5cbiAgICAvLyBpZih3ZWVrID09PSAxKXtcbiAgICAvLyAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLl93ZWVrMScpLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxuICAgIC8vIH1cbiAgICAvLyBpZih3ZWVrID09PSAyKXtcbiAgICAvLyAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLl93ZWVrMicpLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxuICAgIC8vIH1cblxuICAgIGZ1bmN0aW9uIGxvYWRUcmFuc2xhdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiBmZXRjaChgJHthcGlVUkx9L3RyYW5zbGF0ZXMvJHtsb2NhbGV9YCkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgICAgIGkxOG5EYXRhID0ganNvbjtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGUoKTtcblxuICAgICAgICAgICAgICAgIHZhciBtdXRhdGlvbk9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKG11dGF0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NhbScpLCB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgc3VidHJlZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJhbnNsYXRlKCkge1xuICAgICAgICBjb25zdCBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRyYW5zbGF0ZV0nKVxuICAgICAgICBpZiAoZWxlbXMgJiYgZWxlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBlbGVtcy5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgICAgICAgICAgICAgIGVsZW0uaW5uZXJIVE1MID0gaTE4bkRhdGFba2V5XSB8fCAnKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiAgIGtleTogICcgKyBrZXk7XG4gICAgICAgICAgICAgICAgZWxlbS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGlmIChsb2NhbGUgPT09ICdlbicpIHtcbiAgICAgICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5hZGQoJ2VuJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmVmcmVzaExvY2FsaXplZENsYXNzKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVmcmVzaExvY2FsaXplZENsYXNzKGVsZW1lbnQsIGJhc2VDc3NDbGFzcykge1xuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGxhbmcgb2YgWyd1aycsICdlbiddKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoYmFzZUNzc0NsYXNzICsgbGFuZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGJhc2VDc3NDbGFzcyArIGxvY2FsZSk7XG4gICAgfVxuXG5cbiAgICAvL25ld1xuICAgIGZ1bmN0aW9uIGdldFVzZXJzKHdlZWspIHtcbiAgICAgICAgY29uc3QgdXJsID0gcmVzb2x2ZVVzZXJzVXJsKHdlZWspO1xuICAgICAgICByZXR1cm4gcmVxdWVzdCh1cmwpXG4gICAgICAgICAgICAudGhlbih1c2VycyA9PiB1c2Vycy5tYXAodXNlck9ySWQgPT4gdHlwZW9mIHVzZXJPcklkID09PSAnbnVtYmVyJyA/IHt1c2VyaWQ6IHVzZXJPcklkfSA6IHVzZXJPcklkKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzb2x2ZVVzZXJzVXJsKHdlZWspIHtcbiAgICAgICAgcmV0dXJuIHdlZWsgPyBgL3dlZWstdXNlcnMvJHt3ZWVrfWAgOiAnL3VzZXJzJztcbiAgICB9XG5cbiAgICBjb25zdCBJbml0UGFnZSA9ICgpID0+IHtcbiAgICAgICAgd2Vla3NTZWxlY3Rvci5mb3JFYWNoKCh3LCBpKSA9PiB3LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICBpZiAoaSA9PT0gc2VsZWN0ZWRXZWVrVGFiSWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3ZWVrc1NlbGVjdG9yLmZvckVhY2gocyA9PiBzLmNsYXNzTGlzdC5yZW1vdmUoJ19hY3RpdmUnKSk7XG4gICAgICAgICAgICB3LmNsYXNzTGlzdC5hZGQoJ19hY3RpdmUnKTtcbiAgICAgICAgICAgIHNlbGVjdGVkV2Vla1RhYklkID0gaTtcbiAgICAgICAgICAgIHJlZnJlc2hVc2VycyhzZWxlY3RlZFdlZWtUYWJJZCArIDEpO1xuICAgICAgICB9KSk7XG5cbiAgICAgICAgcmVmcmVzaFVzZXJzKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgcmVmcmVzaFdlZWtUYWJzKCk7XG4gICAgICAgIGlmICh3aW5kb3cuc3RvcmUpIHtcbiAgICAgICAgICAgIHZhciBzdGF0ZSA9IHdpbmRvdy5zdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgICAgICAgdXNlcklkID0gc3RhdGUuYXV0aC5pc0F1dGhvcml6ZWQgJiYgc3RhdGUuYXV0aC5pZCB8fCAnJztcbiAgICAgICAgICAgIGNoZWNrVXNlckF1dGgoKS50aGVuKHNldHVwUGFnZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaGVja1VzZXJBdXRoKCkudGhlbihzZXR1cFBhZ2UpO1xuICAgICAgICAgICAgbGV0IGMgPSAwO1xuICAgICAgICAgICAgdmFyIGkgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGMgPCA1MCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoISF3aW5kb3cuZ191c2VyX2lkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQgPSB3aW5kb3cuZ191c2VyX2lkO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tVc2VyQXV0aCgpLnRoZW4oc2V0dXBQYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgIH1cblxuICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaCgoYXV0aEJ0biwgaSkgPT4ge1xuICAgICAgICAgICAgYXV0aEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0dXBQYWdlKCkge1xuICAgICAgICBJbml0UGFnZSgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBhcnRpY2lwYXRlKCkge1xuICAgICAgICBpZiAoIXVzZXJJZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcGFyYW1zID0ge3VzZXJpZDogdXNlcklkfTtcbiAgICAgICAgcmVxdWVzdCgnL3VzZXInLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhcmFtcylcbiAgICAgICAgfSkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgcGFydGljaXBhdGVCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XG4gICAgICAgICAgICByZWRpcmVjdEJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcbiAgICAgICAgICAgIGJhbGxXcmFwLmNsYXNzTGlzdC5yZW1vdmUoJ19zaWduJyk7XG4gICAgICAgICAgICBzZXR1cFBhZ2UoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVmcmVzaFVzZXJzKHdlZWspIHtcbiAgICAgICAgZ2V0VXNlcnMod2VlaykudGhlbih1c2VycyA9PiB7XG4gICAgICAgICAgICByZW5kZXJVc2Vycyh1c2Vycyk7XG4gICAgICAgICAgICB0cmFuc2xhdGUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyVXNlcnModXNlcnMpIHtcbiAgICAgICAgdG9wUmVzdWx0c1RhYmxlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcblxuICAgICAgICBpZiAodXNlcnMgJiYgdXNlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICBsZXQgdG9wVXNlcnMgPSB1c2Vycy5zbGljZSgwLCAxMCk7XG4gICAgICAgICAgICBwb3B1bGF0ZVVzZXJzVGFibGUodG9wVXNlcnMsIHVzZXJJZCwgdG9wUmVzdWx0c1RhYmxlLCB1c2Vycyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRVc2VyID0gdXNlcklkICYmIHVzZXJzLmZpbmQodXNlciA9PiB1c2VyLnVzZXJpZCA9PT0gdXNlcklkKTtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRVc2VySW5kZXggPSBjdXJyZW50VXNlciAmJiB1c2Vycy5pbmRleE9mKGN1cnJlbnRVc2VyKTtcblxuICAgICAgICAgICAgbGV0IG90aGVyVXNlcnM7XG5cbiAgICAgICAgICAgIGlmICghY3VycmVudFVzZXJJbmRleCB8fCBjdXJyZW50VXNlckluZGV4IDwgMTApIHtcbiAgICAgICAgICAgICAgICBvdGhlclVzZXJzID0gdXNlcnMuc2xpY2UoMTAsIDEzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgb3RoZXJVc2VycyA9IHVzZXJzLnNsaWNlKE1hdGgubWF4KGN1cnJlbnRVc2VySW5kZXggLSAxLCAxMCksIGN1cnJlbnRVc2VySW5kZXggKyAyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG90aGVyVXNlcnMgJiYgb3RoZXJVc2Vycy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBwb3B1bGF0ZVVzZXJzVGFibGUob3RoZXJVc2VycywgdXNlcklkLCByZXN1bHRzVGFibGVPdGhlciwgdXNlcnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlV2FnZXIocmFuaykge1xuICAgICAgICBsZXQgcHJpemVUZXh0ID0gJy0nO1xuICAgICAgICBpZiAocmFuayA+PSAxMSAmJiByYW5rIDw9IDUwKSB7XG4gICAgICAgICAgICBwcml6ZVRleHQgPSAneDEnO1xuICAgICAgICB9IGVsc2UgaWYgKHJhbmsgPj0gNTEgJiYgcmFuayA8PSAxNTApIHtcbiAgICAgICAgICAgIHByaXplVGV4dCA9ICd4Mic7XG4gICAgICAgIH0gZWxzZSBpZiAocmFuayA+PSAxNTEgJiYgcmFuayA8PSAzMDApIHtcbiAgICAgICAgICAgIHByaXplVGV4dCA9ICd4Myc7XG4gICAgICAgIH0gZWxzZSBpZiAocmFuayA+PSAzMDEgJiYgcmFuayA8PSA0MDApIHtcbiAgICAgICAgICAgIHByaXplVGV4dCA9ICd4NCc7XG4gICAgICAgIH0gZWxzZSBpZiAocmFuayA+PSA0MDEgJiYgcmFuayA8PSA1NTApIHtcbiAgICAgICAgICAgIHByaXplVGV4dCA9ICd4NSc7XG4gICAgICAgIH0gZWxzZSBpZiAocmFuayA+PSA1NTEgJiYgcmFuayA8PSA3NTApIHtcbiAgICAgICAgICAgIHByaXplVGV4dCA9ICctJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJpemVUZXh0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBvcHVsYXRlVXNlcnNUYWJsZSh1c2VycywgY3VycmVudFVzZXJJZCwgdGFibGUsIGFsbFVzZXJzKSB7XG4gICAgICAgIHRhYmxlLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBpZiAodXNlcnMgJiYgdXNlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICB1c2Vycy5mb3JFYWNoKCh1c2VyLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoZWNrQ3VycmVudFVzZXIgPSBjdXJyZW50VXNlcklkICYmIGN1cnJlbnRVc2VySWQgPT09IHVzZXIudXNlcmlkO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFkZGl0aW9uYWxVc2VyUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrQ3VycmVudFVzZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkaXRpb25hbFVzZXJSb3cuY2xhc3NMaXN0LmFkZCgneW91Jyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgcGxhY2UgPSBhbGxVc2Vycy5pbmRleE9mKHVzZXIpICsgMTtcblxuICAgICAgICAgICAgICAgIGxldCBwbGFjZUNsYXNzO1xuICAgICAgICAgICAgICAgIGlmICh0YWJsZS5pZCA9PT0gJ3RvcC11c2VycycgfHwgdGFibGUuaWQgPT09ICdxdWVzdHNUYWJsZScpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZUNsYXNzID0gJ2dvbGQnO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZUNsYXNzID0gJ3NpbHZlcic7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlQ2xhc3MgPSAnYnJvbnplJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IHByaXplS2V5ID0gZ2V0UHJpemVUcmFuc2xhdGlvbktleShwbGFjZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJpemVWYWx1ZSA9IHVwZGF0ZVdhZ2VyKHBsYWNlKTtcbiAgICAgICAgICAgICAgICBhZGRpdGlvbmFsVXNlclJvdy5jbGFzc0xpc3QuYWRkKCd0YWJsZV9fYm9keS1yb3cnKTtcbiAgICAgICAgICAgICAgICBpZiAocGxhY2VDbGFzcykge1xuICAgICAgICAgICAgICAgICAgICBhZGRpdGlvbmFsVXNlclJvdy5jbGFzc0xpc3QuYWRkKHBsYWNlQ2xhc3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhZGRpdGlvbmFsVXNlclJvdy5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19ib2R5LXJvdy1pdGVtXCI+JHtwbGFjZX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX2JvZHktcm93LWl0ZW1cIj4ke2NoZWNrQ3VycmVudFVzZXIgPyB1c2VyLnVzZXJpZCA6IG1hc2tVc2VySWQodXNlci51c2VyaWQpfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fYm9keS1yb3ctaXRlbVwiPiR7dXNlci5wb2ludHMgJiYgIWlzTmFOKHVzZXIucG9pbnRzKSA/IHVzZXIucG9pbnRzIDogMH08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX2JvZHktcm93LWl0ZW1cIj4ke3ByaXplS2V5ID8gdHJhbnNsYXRlS2V5KHByaXplS2V5KSA6ICcgLSAnfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fYm9keS1yb3ctaXRlbVwiPiR7cHJpemVWYWx1ZX08L2Rpdj5cbiAgICAgICAgICAgIGA7XG4gICAgICAgICAgICAgICAgdGFibGUuYXBwZW5kKGFkZGl0aW9uYWxVc2VyUm93KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UHJpemVUcmFuc2xhdGlvbktleShwbGFjZSkge1xuICAgICAgICBpZiAocGxhY2UgPD0gMTApIHtcbiAgICAgICAgICAgIHJldHVybiBgcHJpemVfJHtwbGFjZX1gO1xuICAgICAgICB9IGVsc2UgaWYgKHBsYWNlIDw9IDIwKSB7XG4gICAgICAgICAgICByZXR1cm4gYHByaXplXzExLTIwYDtcbiAgICAgICAgfSBlbHNlIGlmIChwbGFjZSA8PSAzMCkge1xuICAgICAgICAgICAgcmV0dXJuIGBwcml6ZV8yMS0zMGA7XG4gICAgICAgIH0gZWxzZSBpZiAocGxhY2UgPD0gNDApIHtcbiAgICAgICAgICAgIHJldHVybiBgcHJpemVfMzEtNDBgO1xuICAgICAgICB9IGVsc2UgaWYgKHBsYWNlIDw9IDUwKSB7XG4gICAgICAgICAgICByZXR1cm4gYHByaXplXzQxLTUwYDtcbiAgICAgICAgfSBlbHNlIGlmIChwbGFjZSA8PSA3MCkge1xuICAgICAgICAgICAgcmV0dXJuIGBwcml6ZV81MS03MGA7XG4gICAgICAgIH0gZWxzZSBpZiAocGxhY2UgPD0gMTAwKSB7XG4gICAgICAgICAgICByZXR1cm4gYHByaXplXzcxLTEwMGA7XG4gICAgICAgIH0gZWxzZSBpZiAocGxhY2UgPD0gMTUwKSB7XG4gICAgICAgICAgICByZXR1cm4gYHByaXplXzEwMS0xNTBgO1xuICAgICAgICB9IGVsc2UgaWYgKHBsYWNlIDw9IDIwMCkge1xuICAgICAgICAgICAgcmV0dXJuIGBwcml6ZV8xNTEtMjAwYDtcbiAgICAgICAgfSBlbHNlIGlmIChwbGFjZSA8PSAyNTApIHtcbiAgICAgICAgICAgIHJldHVybiBgcHJpemVfMjAxLTI1MGA7XG4gICAgICAgIH0gZWxzZSBpZiAocGxhY2UgPD0gMzAwKSB7XG4gICAgICAgICAgICByZXR1cm4gYHByaXplXzI1MS0zMDBgO1xuICAgICAgICB9IGVsc2UgaWYgKHBsYWNlIDw9IDM1MCkge1xuICAgICAgICAgICAgcmV0dXJuIGBwcml6ZV8zMDEtMzUwYDtcbiAgICAgICAgfSBlbHNlIGlmIChwbGFjZSA8PSA0MDApIHtcbiAgICAgICAgICAgIHJldHVybiBgcHJpemVfMzUxLTQwMGA7XG4gICAgICAgIH0gZWxzZSBpZiAocGxhY2UgPD0gNDUwKSB7XG4gICAgICAgICAgICByZXR1cm4gYHByaXplXzQwMS00NTBgO1xuICAgICAgICB9IGVsc2UgaWYgKHBsYWNlIDw9IDUwMCkge1xuICAgICAgICAgICAgcmV0dXJuIGBwcml6ZV80NTEtNTAwYDtcbiAgICAgICAgfSBlbHNlIGlmIChwbGFjZSA8PSA1NTApIHtcbiAgICAgICAgICAgIHJldHVybiBgcHJpemVfNTAxLTU1MGA7XG4gICAgICAgIH0gZWxzZSBpZiAocGxhY2UgPD0gNjAwKSB7XG4gICAgICAgICAgICByZXR1cm4gYHByaXplXzU1MS02MDBgO1xuICAgICAgICB9IGVsc2UgaWYgKHBsYWNlIDw9IDY1MCkge1xuICAgICAgICAgICAgcmV0dXJuIGBwcml6ZV82MDEtNjUwYDtcbiAgICAgICAgfSBlbHNlIGlmIChwbGFjZSA8PSA3MDApIHtcbiAgICAgICAgICAgIHJldHVybiBgcHJpemVfNjUxLTcwMGA7XG4gICAgICAgIH0gZWxzZSBpZiAocGxhY2UgPD0gNzUwKSB7XG4gICAgICAgICAgICByZXR1cm4gYHByaXplXzcwMS03NTBgO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBtYXNrVXNlcklkKHVzZXJJZCkge1xuICAgICAgICByZXR1cm4gXCIqKlwiICsgdXNlcklkLnRvU3RyaW5nKCkuc2xpY2UoMik7XG4gICAgfVxuXG4gICAgY29uc3QgcmVxdWVzdCA9IGZ1bmN0aW9uIChsaW5rLCBleHRyYU9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKGFwaVVSTCArIGxpbmssIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAuLi4oZXh0cmFPcHRpb25zIHx8IHt9KVxuICAgICAgICB9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrVXNlckF1dGgoKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHVzZXJJZClcbiAgICAgICAgaWYgKHVzZXJJZCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCB1bmF1dGhNZXMgb2YgdW5hdXRoTXNncykge1xuICAgICAgICAgICAgICAgIHVuYXV0aE1lcy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVxdWVzdChgL2ZhdnVzZXIvJHt1c2VySWR9P25vY2FjaGU9MWApXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy51c2VyaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3RCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWxsV3JhcC5jbGFzc0xpc3QucmVtb3ZlKCdfc2lnbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3VpZGVXcmFwLmNsYXNzTGlzdC5yZW1vdmUoJ19zaWduJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lV3JhcC5jbGFzc0xpc3QucmVtb3ZlKCdfc2lnbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9ncmVzc1wiKS5jbGFzc0xpc3QucmVtb3ZlKFwiX3NpZ25cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVidWcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMucG9pbnRzUGVyRGF5ID0gMzA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnNwaW5BbGxvd2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc3BpbnNTdHJlYWsgPSAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zcGlucyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmcmVzaFdoZWVsKHJlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWZyZXNoRGFpbHlQb2ludHNTZWN0aW9uKHJlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMuc3BpbnMpXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5VXNlclNwaW5zKHJlcy5zcGlucyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBwYXJ0aWNpcGF0ZUJ0biBvZiBwYXJ0aWNpcGF0ZUJ0bnMpIHtcbiAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHVuYXV0aE1lcyBvZiB1bmF1dGhNc2dzKSB7XG4gICAgICAgICAgICAgICAgdW5hdXRoTWVzLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbG9hZFRyYW5zbGF0aW9ucygpXG4gICAgICAgIC50aGVuKGluaXQpO1xuXG4gICAgZnVuY3Rpb24gcmVmcmVzaFdlZWtUYWJzKCkge1xuICAgICAgICBzZWxlY3RlZFdlZWtUYWJJZCA9IGNhbGN1bGF0ZVJlY2VudFByb21vV2Vla3MoKSAtIDE7XG4gICAgICAgIGlmICghc2VsZWN0ZWRXZWVrVGFiSWQgfHwgc2VsZWN0ZWRXZWVrVGFiSWQgPT09IDApIHsgLy8gcHJvbW8gbm90IHN0YXJ0ZWQgeWV0XG4gICAgICAgICAgICAvLyB3ZWVrc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgd2Vla1NlbGVjdG9yID0gd2Vla3NTZWxlY3RvcltpXTtcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZFdlZWtUYWJJZCA8IGkpIHtcbiAgICAgICAgICAgICAgICB3ZWVrU2VsZWN0b3IuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgd2Vla3NTZWxlY3Rvci5mb3JFYWNoKCh3LCBpKSA9PiB7XG4gICAgICAgICAgICB3LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgaWYgKGkgPT09IHNlbGVjdGVkV2Vla1RhYklkKSB7XG4gICAgICAgICAgICAgICAgdy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlUmVjZW50UHJvbW9XZWVrcygpIHtcbiAgICAgICAgY29uc3QgZGF0ZSA9IERhdGUubm93KCk7XG4gICAgICAgIGlmIChkYXRlIDwgbmV3IERhdGUoXCIyMDI0LTEyLTE3VDIyOjAwOjAwWlwiKSkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gMjtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gdHJhbnNsYXRlS2V5KGtleSkge1xuICAgICAgICBpZiAoIWtleSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpMThuRGF0YVtrZXldIHx8ICcqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qICAga2V5OiAgJyArIGtleTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWZyZXNoV2hlZWwodXNlckluZm8pIHtcbiAgICAgICAgaWYgKCF1c2VySW5mby5zcGluQWxsb3dlZCkge1xuICAgICAgICAgICAgYmFsbFdyYXAuY2xhc3NMaXN0LmFkZCgnX2xvY2snKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlZnJlc2hEYWlseVBvaW50c1NlY3Rpb24odXNlckluZm8pIHtcbiAgICAgICAgY29uc3QgcG9pbnRzID0gTWF0aC5taW4odXNlckluZm8ucG9pbnRzUGVyRGF5IHx8IDAsIDUwKTtcbiAgICAgICAgLy8gY29uc3QgcHJvZ3Jlc3NTdGF0dXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZ3Jlc3NTdGF0dXMnKTtcbiAgICAgICAgLy8gcHJvZ3Jlc3NTdGF0dXMuaW5uZXJIVE1MID0gYCR7cG9pbnRzfS81MGA7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRTcGFuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQnKTtcbiAgICAgICAgY3VycmVudFNwYW4uaW5uZXJIVE1MID0gYCR7cG9pbnRzfWA7XG4gICAgICAgIGNvbnN0IHByb2dyZXNzTGluZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9ncmVzc19fYmFyLXRodW1iJyk7XG4gICAgICAgIGNvbnN0IHByb2dyZXNzID0gcG9pbnRzIC8gNTAuMCAqIDEwMDtcbiAgICAgICAgcHJvZ3Jlc3NMaW5lLnN0eWxlLndpZHRoID0gYCR7cHJvZ3Jlc3N9JWA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcGxheVVzZXJTcGlucyhzcGlucykge1xuICAgICAgICBjb25zdCBzcGluSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zcGlucy1yb3cnKTtcbiAgICAgICAgY29uc3Qgbm9TcGluSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uby1zcGlucycpO1xuXG4gICAgICAgIGlmICghc3BpbnMgfHwgc3BpbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBzcGluSXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICBub1NwaW5JdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNvbnN0IHNwaW5zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNwaW5zLXJvdycpO1xuICAgICAgICBzcGluSXRlbS5pbm5lckhUTUwgPSAnJztcblxuICAgICAgICBzcGluSXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgIG5vU3Bpbkl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhub1NwaW5JdGVtKVxuXG4gICAgICAgIHNwaW5zLmZvckVhY2goc3BpbiA9PiB7XG4gICAgICAgICAgICBjb25zdCBzcGluRGF0ZSA9IG5ldyBEYXRlKHNwaW4uZGF0ZSk7XG4gICAgICAgICAgICBjb25zdCBmb3JtYXR0ZWREYXRlID0gc3BpbkRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCd1ay1VQScpO1xuICAgICAgICAgICAgY29uc3Qgc3Bpbk5hbWUgPSB0cmFuc2xhdGVLZXkoc3Bpbi5uYW1lKSB8fCAnJztcblxuICAgICAgICAgICAgY29uc3Qgc3BpbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHNwaW5FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NwaW5zLXJvdy1pdGVtJyk7XG5cbiAgICAgICAgICAgIHNwaW5FbGVtZW50LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29udGVudC1kYXRlXCI+JHtmb3JtYXR0ZWREYXRlfTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29udGVudC1wcml6ZVwiPiR7c3Bpbk5hbWV9PC9zcGFuPlxuICAgICAgICBgO1xuXG4gICAgICAgICAgICBzcGluSXRlbS5hcHBlbmRDaGlsZChzcGluRWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNldFRpbWVvdXQoKCkgPT4gbWFpblBhZ2UuY2xhc3NMaXN0LmFkZCgnb3ZlcmZsb3cnKSwgMTAwMCk7XG5cblxuICAgIC8vIENhcmRzIHNsaWRlclxuICAgIGNvbnN0IGNhcmRzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaXplX19saXN0JyksXG4gICAgICAgIGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByaXplX19saXN0LWl0ZW0nKSxcbiAgICAgICAgY2FyZHNXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaXplX19saXN0LXNjcm9sbCcpLFxuICAgICAgICBtb3ZlUmlnaHRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpemVfX3NsaWRlci1tb3ZlLXJpZ2h0JyksXG4gICAgICAgIG1vdmVMZWZ0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaXplX19zbGlkZXItbW92ZS1sZWZ0JyksXG4gICAgICAgIHRhYnNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpemVfX3RhYnMnKSxcbiAgICAgICAgaXNNb2JpbGUgPSB3aW5kb3cuaW5uZXJXaWR0aCA8IDYwMCxcbiAgICAgICAgdG90YWxDYXJkcyA9IGNhcmRzLmxlbmd0aCxcbiAgICAgICAgY2FyZFdpZHRoID0gY2FyZHNbMF0uY2xpZW50V2lkdGgsXG4gICAgICAgIGNhcmRzTWFyZ2luID0gKGNhcmRzV3JhcC5jbGllbnRXaWR0aCAtIGNhcmRXaWR0aCAqIHRvdGFsQ2FyZHMpIC8gKHRvdGFsQ2FyZHMgLSAxKSxcbiAgICAgICAgdmlzaWJsZVNsaWRlcyA9IGlzTW9iaWxlID8gMSA6IE1hdGguY2VpbChjYXJkc0NvbnRhaW5lci5jbGllbnRXaWR0aCAvIChjYXJkV2lkdGggKyBjYXJkc01hcmdpbikpLFxuICAgICAgICB0b3RhbFRhYnMgPSBNYXRoLmNlaWwodG90YWxDYXJkcyAvIHZpc2libGVTbGlkZXMpLFxuICAgICAgICB0YWJXaWR0aD0gdmlzaWJsZVNsaWRlcyAqIChjYXJkV2lkdGggKyBjYXJkc01hcmdpbilcblxuXG4gICAgbGV0IGN1cnJlbnRTbGlkZSA9IDEsXG4gICAgICAgIGNhcmRzUG9zaXRpb24gPSAwLFxuICAgICAgICBsZWZ0U2xpZGUsXG4gICAgICAgIHJpZ2h0U2xpZGU7XG5cbiAgICBjb25zdCB1cGRhdGVBY3RpdmVDYXJkID0gKGNhcmRzLCBhY3RpdmVJbmRleCkgPT4ge1xuICAgICAgICBjYXJkcy5mb3JFYWNoKChjYXJkLCBpKSA9PntcbiAgICAgICAgICAgIGFjdGl2ZUluZGV4IC0gMSA9PT0gaSA/IGNhcmQuY2xhc3NMaXN0LmFkZChcIl9hY3RpdmVcIikgOiBjYXJkLmNsYXNzTGlzdC5yZW1vdmUoXCJfYWN0aXZlXCIpXG4gICAgICAgIH0pXG4gICAgfVxuICAgIHVwZGF0ZUFjdGl2ZUNhcmQoY2FyZHMsIGN1cnJlbnRTbGlkZSlcblxuICAgIGZ1bmN0aW9uIGxlZnRTbGlkZVRhYigpe1xuICAgICAgICBsZWZ0U2xpZGUgPSBjdXJyZW50U2xpZGVcbiAgICB9XG4gICAgZnVuY3Rpb24gcmlnaHRTbGlkZVRhYigpe1xuICAgICAgICByaWdodFNsaWRlID0gY3VycmVudFNsaWRlICsgKHZpc2libGVTbGlkZXMgLSAxKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZpcnN0TGFzdFNsaWRlcygpe1xuICAgICAgICBpZihpc01vYmlsZSkgcmV0dXJuXG4gICAgICAgIGxlZnRTbGlkZVRhYigpXG4gICAgICAgIHJpZ2h0U2xpZGVUYWIoKVxuICAgICAgICBjYXJkcy5mb3JFYWNoKChjYXJkICwgaSkgPT57XG4gICAgICAgICAgICBpICsgMSA9PT0gbGVmdFNsaWRlID8gY2FyZC5jbGFzc0xpc3QuYWRkKFwiX2xlZnRcIikgOiBjYXJkLmNsYXNzTGlzdC5yZW1vdmUoXCJfbGVmdFwiKVxuICAgICAgICAgICAgaSArIDEgPT09IHJpZ2h0U2xpZGUgPyBjYXJkLmNsYXNzTGlzdC5hZGQoXCJfcmlnaHRcIikgOiBjYXJkLmNsYXNzTGlzdC5yZW1vdmUoXCJfcmlnaHRcIilcbiAgICAgICAgfSlcbiAgICB9XG4gICAgZmlyc3RMYXN0U2xpZGVzKClcblxuICAgIGZ1bmN0aW9uIHNldENhcmRzUG9zaXRpb24gKHBvc2l0aW9uKSB7XG4gICAgICAgIGNhcmRzV3JhcC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgtJHtwb3NpdGlvbn1weClgO1xuICAgIH07XG4gICAgY29uc3QgbW92ZVJpZ2h0ID0gKCkgPT4ge1xuXG4gICAgICAgIGlmIChjdXJyZW50U2xpZGUgPj0gdG90YWxDYXJkcyAtICh2aXNpYmxlU2xpZGVzIC0gMSkgJiYgaXNNb2JpbGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBmaXJzdExhc3RTbGlkZXMoKVxuICAgICAgICAgICAgY3VycmVudFNsaWRlID0gMTtcbiAgICAgICAgICAgIGNhcmRzUG9zaXRpb24gPSAwO1xuICAgICAgICAgICAgcmlnaHRTbGlkZSsrXG4gICAgICAgICAgICBsZWZ0U2xpZGUrK1xuICAgICAgICB9ZWxzZSBpZihjdXJyZW50U2xpZGUgPT09IHRvdGFsQ2FyZHMpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRTbGlkZSlcbiAgICAgICAgICAgIGN1cnJlbnRTbGlkZSA9IDE7XG4gICAgICAgICAgICBjYXJkc1Bvc2l0aW9uID0gMDtcbiAgICAgICAgfWVsc2UgaWYoY3VycmVudFNsaWRlID09PSB0b3RhbENhcmRzIC0gKCB2aXNpYmxlU2xpZGVzICsgMSkgJiYgaXNNb2JpbGUgPT09IHRydWUpe1xuICAgICAgICAgICAgY3VycmVudFNsaWRlID0gdG90YWxDYXJkc1xuICAgICAgICAgICAgY2FyZHNQb3NpdGlvbiA9IGNhcmRzV3JhcC5jbGllbnRXaWR0aCAtICh3aW5kb3cuaW5uZXJXaWR0aCAtIChjYXJkc01hcmdpbiAvIDIpKVxuICAgICAgICAgICAgY29uc29sZS5sb2coY2FyZHNQb3NpdGlvbilcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IG1heFBvc2l0aW9uID0gKHRvdGFsQ2FyZHMgLSB2aXNpYmxlU2xpZGVzKSAqIChjYXJkV2lkdGggKyBjYXJkc01hcmdpbik7XG4gICAgICAgICAgICBpZiAoY2FyZHNQb3NpdGlvbiArIGNhcmRXaWR0aCArIGNhcmRzTWFyZ2luID4gbWF4UG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgICBjYXJkc1Bvc2l0aW9uID0gbWF4UG9zaXRpb247XG4gICAgICAgICAgICAgICAgY3VycmVudFNsaWRlID0gdG90YWxDYXJkcyAtIHZpc2libGVTbGlkZXMgKyAxO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYXJkc1Bvc2l0aW9uICs9IGNhcmRXaWR0aCArIGNhcmRzTWFyZ2luO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRTbGlkZSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNldENhcmRzUG9zaXRpb24oY2FyZHNQb3NpdGlvbik7XG4gICAgICAgIHVwZGF0ZUFjdGl2ZUNhcmQoY2FyZHMsIGN1cnJlbnRTbGlkZSlcbiAgICAgICAgZmlyc3RMYXN0U2xpZGVzKClcbiAgICAgICAgaGlkZVBvcHVwc09uQnRuKHByaXplUG9wdXBJdGVtKVxuICAgICAgICAvLyBjZW50ZXJQb3B1cChcIi5wcml6ZV9fbGlzdC1wb3B1cFwiKVxuXG4gICAgfTtcbiAgICBjb25zdCBtb3ZlTGVmdCA9ICgpID0+IHtcbiAgICAgICAgaWYoY3VycmVudFNsaWRlID09PSAxICYmIGlzTW9iaWxlID09PSBmYWxzZSl7XG4gICAgICAgICAgICBjdXJyZW50U2xpZGUgPSB0b3RhbENhcmRzIC0gKHZpc2libGVTbGlkZXMgLSAxKTtcbiAgICAgICAgICAgIGNhcmRzUG9zaXRpb24gPSAoKHRvdGFsQ2FyZHMgLSAodmlzaWJsZVNsaWRlcyAtIDEpKSAqIChjYXJkV2lkdGggKyBjYXJkc01hcmdpbikpIC0oY2FyZFdpZHRoICsgY2FyZHNNYXJnaW4pO1xuICAgICAgICB9ZWxzZSBpZiAoY3VycmVudFNsaWRlID09PSAyKSB7XG4gICAgICAgICAgICBjYXJkc1Bvc2l0aW9uID0gMFxuICAgICAgICAgICAgY3VycmVudFNsaWRlID0gMVxuICAgICAgICB9ZWxzZSBpZihjdXJyZW50U2xpZGUgPT09IDEgJiYgaXNNb2JpbGUgPT09IHRydWUpe1xuICAgICAgICAgICAgY3VycmVudFNsaWRlID0gdG90YWxDYXJkc1xuICAgICAgICAgICAgY2FyZHNQb3NpdGlvbiA9IGNhcmRzV3JhcC5jbGllbnRXaWR0aCAtICh3aW5kb3cuaW5uZXJXaWR0aCAtIChjYXJkc01hcmdpbiAvIDIpKVxuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICBjYXJkc1Bvc2l0aW9uIC09IGNhcmRXaWR0aCArIGNhcmRzTWFyZ2luO1xuICAgICAgICAgICAgY3VycmVudFNsaWRlLS1cbiAgICAgICAgfVxuICAgICAgICBzZXRDYXJkc1Bvc2l0aW9uKGNhcmRzUG9zaXRpb24pO1xuICAgICAgICB1cGRhdGVBY3RpdmVDYXJkKGNhcmRzLCBjdXJyZW50U2xpZGUpXG4gICAgICAgIGZpcnN0TGFzdFNsaWRlcygpXG4gICAgICAgIGhpZGVQb3B1cHNPbkJ0bihwcml6ZVBvcHVwSXRlbSlcbiAgICAgICAgLy8gY2VudGVyUG9wdXAoXCIucHJpemVfX2xpc3QtcG9wdXBcIilcbiAgICB9O1xuXG4gICAgLy8gY2VudGVyUG9wdXAoXCIucHJpemVfX2xpc3QtcG9wdXBcIilcblxuXG4gICAgLy8gcG9wdXBzIGxvZ2ljXG5cbiAgICBmdW5jdGlvbiBzZXRQb3B1cHMocG9wdXBzLCBwb3B1cHNCdG5zKSB7XG4gICAgICAgIHBvcHVwc0J0bnMuZm9yRWFjaCgoYnRuLCBpKSA9PiB7XG4gICAgICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgcG9wdXBzLmZvckVhY2goKHBvcHVwLCBqKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGkgPT09IGogPyBwb3B1cC5jbGFzc0xpc3QuYWRkKFwiX3BvcHVwXCIpIDogcG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcIl9wb3B1cFwiKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiAgIGhpZGVQb3B1cHNPbkJ0bihwb3B1cHMpe1xuICAgICAgICBwb3B1cHMuZm9yRWFjaChwb3B1cCA9PntcbiAgICAgICAgICAgIHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoXCJfcG9wdXBcIilcbiAgICAgICAgfSlcbiAgICB9XG5cbi8vIHBvcHVwc1xuICAgIGNvbnN0IHByaXplT3BlbkJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByaXplX19saXN0LWl0ZW0tYnRuXCIpLFxuICAgICAgICBwcml6ZUNsb3NlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJpemVfX2xpc3QtcG9wdXAtY2xvc2VcIiksXG4gICAgICAgIGd1aWRlUG9wdXBzV3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZ3VpZGVfX2l0ZW1cIiksXG4gICAgICAgIGd1aWRlT3BlbkJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmd1aWRlX19pdGVtLWluZm8tYnRuXCIpLFxuICAgICAgICBndWlkZUNsb3NlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZ3VpZGVfX2l0ZW0tcG9wdXAtY2xvc2VcIiksXG4gICAgICAgIHRhYmxlUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhYmxlX19wb3B1cFwiKSxcbiAgICAgICAgdGFibGVQb3B1cENsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YWJsZV9fcG9wdXAtY2xvc2VcIiksXG4gICAgICAgIHRhYmxlUG9wdXBPcGVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YWJsZV9faW5mb1wiKSxcbiAgICAgICAgYmFsbFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9ncmVzc19fcG9wdXBcIiksXG4gICAgICAgIGJhbGxQb3B1cENsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9ncmVzc19fcG9wdXAtY2xvc2VcIiksXG4gICAgICAgIGJhbGxQb3B1cE9wZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2dyZXNzX19wb3B1cC1idG5cIiksXG4gICAgICAgIHByaXplUG9wdXBJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcml6ZV9fY29udGFpbmVyLWl0ZW1cIilcblxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PntcblxuICAgICAgICAvLyAgcHJpemVQb3B1cEl0ZW0uZm9yRWFjaChjYXJkID0+e1xuICAgICAgICAvLyAgICAgICAgIGlmKGUudGFyZ2V0ICE9PSBjYXJkKXtcbiAgICAgICAgLy8gICAgICAgICAgICAgcHJpemVPcGVuQnRucy5mb3JFYWNoKGJ0biA9PntcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGlmKGUudGFyZ2V0ICE9PSBidG4gJiYgZS50YXJnZXQgIT09IGNhcmQpe1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0IClcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAvLyBjYXJkLmNsYXNzTGlzdC5yZW1vdmUoXCJfcG9wdXBcIilcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICAgICAgfSlcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vIH0pXG4gICAgICAgIGd1aWRlUG9wdXBzV3JhcC5mb3JFYWNoKHBvcHVwID0+e1xuICAgICAgICAgICAgaWYoIXBvcHVwLmNvbnRhaW5zKGUudGFyZ2V0KSl7XG4gICAgICAgICAgICAgICAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcIl9wb3B1cFwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGlmKCFiYWxsUG9wdXAuY29udGFpbnMoZS50YXJnZXQpICYmIGUudGFyZ2V0ICE9PSBiYWxsUG9wdXBPcGVuKXtcbiAgICAgICAgICAgIGJhbGxQb3B1cC5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgICAgICB9XG5cbiAgICB9KVxuXG5cbiAgICBzZXRQb3B1cHMocHJpemVQb3B1cEl0ZW0sIHByaXplT3BlbkJ0bnMpO1xuICAgIHNldFBvcHVwcyhndWlkZVBvcHVwc1dyYXAsIGd1aWRlT3BlbkJ0bnMpO1xuXG4gICAgZ3VpZGVDbG9zZUJ0bnMuZm9yRWFjaChidG4gPT57XG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xuICAgICAgICAgICAgaGlkZVBvcHVwc09uQnRuKGd1aWRlUG9wdXBzV3JhcClcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBwcml6ZUNsb3NlQnRucy5mb3JFYWNoKGJ0biA9PntcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XG4gICAgICAgICAgICBoaWRlUG9wdXBzT25CdG4ocHJpemVQb3B1cEl0ZW0pXG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGFibGVQb3B1cE9wZW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICB0YWJsZVBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiXG4gICAgfSk7XG5cbiAgICB0YWJsZVBvcHVwQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICB0YWJsZVBvcHVwLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIlxuICAgIH0pO1xuXG4gICAgYmFsbFBvcHVwT3Blbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIGJhbGxQb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKVxuICAgIH0pO1xuXG4gICAgYmFsbFBvcHVwQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBiYWxsUG9wdXAuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICB9KTtcblxuICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgQ09VTlQgPSA0MDA7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIFNub3dzdG9ybShlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXN0aGVhZCA9IGVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMubWFzdGhlYWQuY2xpZW50V2lkdGg7XG4gICAgICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLm1hc3RoZWFkLmNsaWVudEhlaWdodDtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuc25vd2ZsYWtlcyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFNub3dzdG9ybS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgICAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUubGVmdCA9IHRoaXMuY2FudmFzLnN0eWxlLnRvcCA9ICcwJztcbiAgICAgICAgICAgICAgICB0aGlzLm1hc3RoZWFkLmFwcGVuZENoaWxkKHRoaXMuY2FudmFzKTtcblxuICAgICAgICAgICAgICAgIHRoaXMub25SZXNpemUoKTtcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpLCBmYWxzZSk7XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IENPVU5UOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNub3dmbGFrZSA9IG5ldyB0aGlzLlNub3dmbGFrZSh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgc25vd2ZsYWtlLnJlc2V0KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc25vd2ZsYWtlcy5wdXNoKHNub3dmbGFrZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltRnJhbWUodGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgU25vd3N0b3JtLnByb3RvdHlwZS5vblJlc2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLndpZHRoID0gdGhpcy5tYXN0aGVhZC5jbGllbnRXaWR0aDtcbiAgICAgICAgICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMubWFzdGhlYWQuY2xpZW50SGVpZ2h0O1xuICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gdGhpcy53aWR0aDtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB0aGlzLmhlaWdodDtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnI0ZGRic7XG5cbiAgICAgICAgICAgICAgICB2YXIgd2FzQWN0aXZlID0gdGhpcy5hY3RpdmU7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmUgPSB0aGlzLndpZHRoID4gODA7XG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCA+IDI4MCA/IENPVU5UID0gMTUwIDogbnVsbFxuXG4gICAgICAgICAgICAgICAgaWYgKCF3YXNBY3RpdmUgJiYgdGhpcy5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1GcmFtZSh0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBTbm93c3Rvcm0ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmFjdGl2ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBDT1VOVDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzbm93Zmxha2UgPSB0aGlzLnNub3dmbGFrZXNbaV07XG4gICAgICAgICAgICAgICAgICAgIHNub3dmbGFrZS55ICs9IHNub3dmbGFrZS52eTtcbiAgICAgICAgICAgICAgICAgICAgc25vd2ZsYWtlLnggKz0gc25vd2ZsYWtlLnZ4O1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3R4Lmdsb2JhbEFscGhhID0gc25vd2ZsYWtlLm87XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN0eC5hcmMoc25vd2ZsYWtlLngsIHNub3dmbGFrZS55LCBzbm93Zmxha2UuciwgMCwgTWF0aC5QSSAqIDIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoc25vd2ZsYWtlLnkgPiB0aGlzLmhlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc25vd2ZsYWtlLnJlc2V0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbUZyYW1lKHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgU25vd3N0b3JtLnByb3RvdHlwZS5Tbm93Zmxha2UgPSBmdW5jdGlvbiAoc25vd3N0b3JtKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zbm93c3Rvcm0gPSBzbm93c3Rvcm07XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgU25vd3N0b3JtLnByb3RvdHlwZS5Tbm93Zmxha2UucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRoaXMueCA9IE1hdGgucmFuZG9tKCkgKiB0aGlzLnNub3dzdG9ybS53aWR0aDtcbiAgICAgICAgICAgICAgICB0aGlzLnkgPSBNYXRoLnJhbmRvbSgpICogLXRoaXMuc25vd3N0b3JtLmhlaWdodDtcbiAgICAgICAgICAgICAgICB0aGlzLnZ5ID0gMC4zICsgTWF0aC5yYW5kb20oKSAqIDAuMDAwMDE7XG4gICAgICAgICAgICAgICAgdGhpcy52eCA9IDAuNiAtIE1hdGgucmFuZG9tKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5yID0gMSArIE1hdGgucmFuZG9tKCkgKiAyO1xuICAgICAgICAgICAgICAgIHRoaXMubyA9IDE7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1GcmFtZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoY2FsbGJhY2ssIDEwMDAgLyA2MCk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KSgpO1xuXG4gICAgICAgICAgICB2YXIgc2tpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2t5Jyk7XG4gICAgICAgICAgICBza2llcy5mb3JFYWNoKGZ1bmN0aW9uIChza3kpIHtcbiAgICAgICAgICAgICAgICBuZXcgU25vd3N0b3JtKHNreSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gYmFsbCBzaGFrZSBzbm93XG4gICAgICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc25vd0NhbnZhcycpO1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgICAgICBjb25zdCBiYWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNwaGVyZScpO1xuXG4gICAgICAgICAgICBjYW52YXMud2lkdGggPSBjYW52YXMucGFyZW50RWxlbWVudC5jbGllbnRXaWR0aDtcbiAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSBjYW52YXMucGFyZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XG5cbiAgICAgICAgICAgIGxldCBzbm93Zmxha2VzID0gW107XG4gICAgICAgICAgICBjb25zdCBtYXhTbm93Zmxha2VzID0gMTAwO1xuICAgICAgICAgICAgY29uc3QgbWF4U3BlZWQgPSA3O1xuICAgICAgICAgICAgbGV0IHN0b3JtQ291bnRlciA9IDFcblxuXG4gICAgICAgICAgICBsZXQgc25vd2ZsYWtlc1JlbW92ZWQgPSAwO1xuXG4gICAgICAgICAgICBjbGFzcyBTbm93Zmxha2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnggPSBNYXRoLnJhbmRvbSgpICogY2FudmFzLndpZHRoO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnkgPSBNYXRoLnJhbmRvbSgpICogY2FudmFzLmhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yYWRpdXMgPSBNYXRoLnJhbmRvbSgpICogMyArIDE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3BlZWRYID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMTA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3BlZWRZID0gTWF0aC5yYW5kb20oKSAqIDEuNSArIDE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWNjZWxlcmF0aW9uID0gMDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZpbmdUb0JvdHRvbSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHVwZGF0ZShiYWxsWCwgYmFsbFksIGJhbGxSYWRpdXMsIGJhbGxTaGFraW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm1vdmluZ1RvQm90dG9tKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXRTcGVlZCA9IDAuMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNwZWVkRGVjYXlGYWN0b3IgPSAwLjA1OyAvLyDQmtC+0LXRhNGW0YbRltGU0L3RgiDQtNC70Y8g0L/Qu9Cw0LLQvdC+0LPQviDRgdC/0L7QstGW0LvRjNC90LXQvdC90Y9cblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGVlZFggPSB0aGlzLnNwZWVkWCAtICh0aGlzLnNwZWVkWCAtIHRhcmdldFNwZWVkKSAqIHNwZWVkRGVjYXlGYWN0b3I7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNwZWVkWSA9IHRoaXMuc3BlZWRZIC0gKHRoaXMuc3BlZWRZIC0gdGFyZ2V0U3BlZWQpICogc3BlZWREZWNheUZhY3RvcjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g0J7QvdC+0LLQu9C10L3QvdGPINC/0L7Qt9C40YbRltGXINGB0L3RltC20LjQvdC60LhcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueSArPSB0aGlzLnNwZWVkWTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMueSA+IGNhbnZhcy5oZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy54ICs9IHRoaXMuc3BlZWRYO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnkgKz0gdGhpcy5zcGVlZFk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8g0J7QsdC80LXQttC10L3QvdGPINGI0LLQuNC00LrQvtGB0YLRllxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwZWVkWCA9IE1hdGgubWF4KC1tYXhTcGVlZCwgTWF0aC5taW4obWF4U3BlZWQsIHRoaXMuc3BlZWRYKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3BlZWRZID0gTWF0aC5tYXgoLW1heFNwZWVkLCBNYXRoLm1pbihtYXhTcGVlZCwgdGhpcy5zcGVlZFkpKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyDQlNC+0LTQsNCy0LDQvdC90Y8g0YjQstC40LTQutC+0YHRgtGWINGH0LXRgNC10LcgXCLRgtGA0YPRgdGW0L3QvdGPXCIg0LrRg9C70ZZcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJhbGxTaGFraW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjY2VsZXJhdGlvbiArPSAwLjA1O1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY2NlbGVyYXRpb24gKj0gMC45NTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwZWVkWCArPSB0aGlzLmFjY2VsZXJhdGlvbiAqIChNYXRoLnJhbmRvbSgpIC0gMC41KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGVlZFkgKz0gdGhpcy5hY2NlbGVyYXRpb24gKiAoTWF0aC5yYW5kb20oKSAtIDAuNSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMueSA+IGNhbnZhcy5oZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnggPSBNYXRoLnJhbmRvbSgpICogY2FudmFzLndpZHRoO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnggPiBjYW52YXMud2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy54IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy54ID0gY2FudmFzLndpZHRoO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8g0JLRltC00YHRgtCw0L3RjCDQtNC+INGG0LXQvdGC0YDRgyDQutGD0LvRllxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkeCA9IHRoaXMueCAtIGJhbGxYO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkeSA9IHRoaXMueSAtIGJhbGxZO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8g0JLRltC00YHQutC+0Log0LLRltC0INC60YPQu9GWXG4gICAgICAgICAgICAgICAgICAgIGlmIChkaXN0YW5jZSA8IGJhbGxSYWRpdXMgKyB0aGlzLnJhZGl1cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYW5nbGUgPSBNYXRoLmF0YW4yKGR5LCBkeCk7IC8vINCa0YPRgiDQt9GW0YLQutC90LXQvdC90Y9cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG92ZXJsYXAgPSBiYWxsUmFkaXVzICsgdGhpcy5yYWRpdXMgLSBkaXN0YW5jZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g0J/QtdGA0LXQvNGW0YnQtdC90L3RjyDRgdC90ZbQttC40L3QutC4XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnggKz0gTWF0aC5jb3MoYW5nbGUpICogb3ZlcmxhcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueSArPSBNYXRoLnNpbihhbmdsZSkgKiBvdmVybGFwO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDQoNC10LLQtdGA0YEg0YjQstC40LTQutC+0YHRgtGWXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNwZWVkWCAqPSAtMC43O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGVlZFkgKj0gLTAuNztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG1vdmVUb0JvdHRvbSgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZpbmdUb0JvdHRvbSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmVtb3ZlKCkge1xuICAgICAgICAgICAgICAgICAgICBzbm93Zmxha2VzLnNwbGljZShzbm93Zmxha2VzLmluZGV4T2YodGhpcyksIDEpO1xuICAgICAgICAgICAgICAgICAgICBzbm93Zmxha2VzUmVtb3ZlZCsrO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3Rvcm1Db3VudGVyID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgU25vd3N0b3JtKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3BoZXJlX19ib2R5XCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JtQ291bnRlcisrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZHJhdygpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgICAgICBjdHguYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgMCwgTWF0aC5QSSAqIDIpO1xuICAgICAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gJ3doaXRlJztcbiAgICAgICAgICAgICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGxhc3RCYWxsU2hha2luZ1N0YXRlID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF4U25vd2ZsYWtlczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgc25vd2ZsYWtlcy5wdXNoKG5ldyBTbm93Zmxha2UoKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGFuaW1hdGUoKSB7XG4gICAgICAgICAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgYmFsbFRyYW5zZm9ybSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGJhbGwpLnRyYW5zZm9ybTtcbiAgICAgICAgICAgICAgICBsZXQgYmFsbFggPSBjYW52YXMud2lkdGggLyAyO1xuICAgICAgICAgICAgICAgIGxldCBiYWxsWSA9IGNhbnZhcy5oZWlnaHQgLyAyO1xuICAgICAgICAgICAgICAgIGNvbnN0IGJhbGxSYWRpdXMgPSBiYWxsLm9mZnNldFdpZHRoIC8gMjtcbiAgICAgICAgICAgICAgICBjb25zdCBiYWxsU2hha2luZyA9IGJhbGxUcmFuc2Zvcm0gIT09ICdub25lJztcblxuICAgICAgICAgICAgICAgIGlmIChiYWxsVHJhbnNmb3JtICE9PSAnbm9uZScpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF0cml4ID0gbmV3IERPTU1hdHJpeChiYWxsVHJhbnNmb3JtKTtcbiAgICAgICAgICAgICAgICAgICAgYmFsbFggPSBiYWxsLm9mZnNldExlZnQgKyBtYXRyaXgubTQxICsgYmFsbFJhZGl1cztcbiAgICAgICAgICAgICAgICAgICAgYmFsbFkgPSBiYWxsLm9mZnNldFRvcCArIG1hdHJpeC5tNDIgKyBiYWxsUmFkaXVzO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChiYWxsU2hha2luZyAmJiAhbGFzdEJhbGxTaGFraW5nU3RhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgc25vd2ZsYWtlcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBzbm93Zmxha2VzUmVtb3ZlZCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF4U25vd2ZsYWtlczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbm93Zmxha2VzLnB1c2gobmV3IFNub3dmbGFrZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGxhc3RCYWxsU2hha2luZ1N0YXRlID0gYmFsbFNoYWtpbmc7XG5cbiAgICAgICAgICAgICAgICBzbm93Zmxha2VzLmZvckVhY2goc25vd2ZsYWtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFiYWxsU2hha2luZykgc25vd2ZsYWtlLm1vdmVUb0JvdHRvbSgpO1xuICAgICAgICAgICAgICAgICAgICBzbm93Zmxha2UudXBkYXRlKGJhbGxYLCBiYWxsWSwgYmFsbFJhZGl1cywgYmFsbFNoYWtpbmcpO1xuICAgICAgICAgICAgICAgICAgICBzbm93Zmxha2UuZHJhdygpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhbmltYXRlKCk7XG5cbn0pKCk7XG5cbi8vIHNub3dmYWxsIGFuaW1hdGlvblxuICAgIGxldCBpID0gMTtcbiAgICBmdW5jdGlvbiBzZW5kU2hha2VSZXF1ZXN0KCkge1xuICAgICAgICBpZiAoIXVzZXJJZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRlYnVnKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtcbiAgICAgICAgICAgICAgICAvLyBudW1iZXI6IGkrKyxcbiAgICAgICAgICAgICAgICBudW1iZXI6ICdqYmwnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHt1c2VyaWQ6IHVzZXJJZH07XG4gICAgICAgIHJldHVybiByZXF1ZXN0KCcvc3BpbicsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGFyYW1zKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBidG5TaGFrZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZ3Jlc3NfX3NoYWtlXCIpLFxuICAgICAgICBiYWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zcGhlcmVcIiksXG4gICAgICAgIGJhbGxCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNwaGVyZV9fYm94XCIpXG5cbiAgICBsZXQgY3VycmVudFByaXplO1xuICAgIGxldCBwYXN0UHJpemU7XG5cblxuXG4gICAgLy8g0JrQvtC20LXQvSDQutC70LDRgSDQstGW0LTQv9C+0LLRltC00LDRlCDQstC40LPRgNCw0L3QvtC80YMg0L/RgNC40LfRgzpcbiAgICAvLyBcIl9pcGhvbmVcIiAtINCy0LjQs9GA0LDQvdC+IGlQaG9uZVxuICAgIC8vIFwiX3R2XCIgLSDQstC40LPRgNCw0L3QviDRgtC10LvQtdCy0ZbQt9C+0YBcbiAgICAvLyBcIl9qYmxcIiAtINCy0LjQs9GA0LDQvdC+IEpCTC3QutC+0LvQvtC90LrRg1xuICAgIC8vIFwiX21lZ29nb1wiIC0g0LLQuNCz0YDQsNC90L4g0L/RltC00L/QuNGB0LrRgyBNZWdvZ29cbiAgICAvLyBcIl9yZXNwaW5cIiAtINC00L7QtNCw0YLQutC+0LLQtSDQvtCx0LXRgNGC0LDQvdC90Y9cbiAgICAvLyBcIl9ub3RoaW5nXCIgLSDQvdGW0YfQvtCz0L4g0L3QtSDQstC40LPRgNCw0L3QvlxuICAgIC8vIFwiX3BvaW50czUwXCIgLSDQstC40LPRgNCw0L3QviA1MCDQsdC+0L3Rg9GB0L3QuNGFINCx0LDQu9GW0LJcbiAgICAvLyBcIl9mczEwXCIgLSDQstC40LPRgNCw0L3QviAxMCDRhNGA0ZbRgdC/0ZbQvdGW0LJcbiAgICAvLyBcIl9mczI1XCIgLSDQstC40LPRgNCw0L3QviAyNSDRhNGA0ZbRgdC/0ZbQvdGW0LJcbiAgICAvLyBcIl9mczUwXCIgLSDQstC40LPRgNCw0L3QviA1MCDRhNGA0ZbRgdC/0ZbQvdGW0LJcbiAgICAvLyBcIl9zYXZlQmV0MTAwXCIgLSDQstC40LPRgNCw0L3QviDRgdGC0YDQsNGF0L7QstC60YMg0L3QsCAxMDAg0YHRgtCw0LLQvtC6XG4gICAgLy8gXCJfc2F2ZUJldDE1MFwiIC0g0LLQuNCz0YDQsNC90L4g0YHRgtGA0LDRhdC+0LLQutGDINC90LAgMTUwINGB0YLQsNCy0L7QulxuICAgIC8vIFwiX3NhdmVCZXQyMDBcIiAtINCy0LjQs9GA0LDQvdC+INGB0YLRgNCw0YXQvtCy0LrRgyDQvdCwIDIwMCDRgdGC0LDQstC+0LpcbiAgICAvLyDRhNGD0L3QutGG0ZbRjyBpbml0U2hha2Ug0L/RgNC+0LrQuNC00YPRlCDQutC70LDRgdC4INCy0ZbQtNC/0L7QstGW0LTQvdGWINC/0YDQuNC30LDQvCDQvdCwINCx0LvQvtC6IC5zcGhlcmUg0LTQu9GPINCy0ZbQtNC+0LHRgNCw0LbQtdC90L3RjyDQv9GA0LjQt9GDXG4gICAgY29uc3Qgd2luQ2xhc3NlcyA9IFtcbiAgICAgICAgXCJfaXBob25lXCIsIFwiX3R2XCIsIFwiX2pibFwiLCBcIl9tZWdvZ29cIiwgXCJfcmVzcGluXCIsIFwiX25vdGhpbmdcIiwgXCJfZnMxMFwiLCBcIl9mczI1XCIsXG4gICAgICAgIFwiX2ZzNTBcIiwgXCJfc2F2ZUJldDEwMFwiLCBcIl9zYXZlQmV0MTUwXCIsIFwiX3NhdmVCZXQyMDBcIiwgXCJfcG9pbnRzNTBcIlxuICAgIF07XG5cblxuICAgIGZ1bmN0aW9uIHJlbW92ZVByaXplKGJhbGwsIGJveCwgYnRuKXtcbiAgICAgICAgYmFsbC5jbGFzc0xpc3QucmVtb3ZlKFwiX2JlZm9yZS1oaWRlXCIpO1xuICAgICAgICB3aW5DbGFzc2VzLmZvckVhY2goaXRlbSA9PntcbiAgICAgICAgICAgIGJhbGwuY2xhc3NMaXN0LnJlbW92ZShgJHtpdGVtfWApXG4gICAgICAgIH0pXG4gICAgICAgIGJveC5jbGFzc0xpc3QucmVtb3ZlKFwiX2JveC1vcGFjaXR5XCIpXG4gICAgICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiX2Rpc2FibGVkXCIpXG5cbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBhbmltYXRlU2hha2UoYmFsbCwgYm94LCBidG4sIHByaXplLCBwcml6ZU51bSkge1xuXG5cbiAgICAgICAgY29uc3QgZGVsYXkgPSAobXMpID0+IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpXG5cbiAgICAgICAgcmVtb3ZlUHJpemUoYmFsbCwgYm94LCBidG4pXG5cbiAgICAgICAgaWYocHJpemVOdW0pe1xuICAgICAgICAgICAgY29uc29sZS5sb2cocHJpemVOdW0pXG4gICAgICAgICAgICBidG4uY2xhc3NMaXN0LmFkZChcIl9kaXNhYmxlZFwiKTtcbiAgICAgICAgICAgIGJhbGwuY2xhc3NMaXN0LmFkZChcIl9zaGFrZVwiKTtcbiAgICAgICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwiX3NoYWtlLXJldmVyc2VcIik7XG5cbiAgICAgICAgICAgIGF3YWl0IGRlbGF5KDIwMDApXG5cbiAgICAgICAgICAgIGJhbGwuY2xhc3NMaXN0LnJlbW92ZShcIl9zaGFrZVwiKTtcbiAgICAgICAgICAgIGJhbGwuY2xhc3NMaXN0LmFkZChcIl9iZWZvcmUtaGlkZVwiKTtcbiAgICAgICAgICAgIGJveC5jbGFzc0xpc3QucmVtb3ZlKFwiX3NoYWtlLXJldmVyc2VcIik7XG4gICAgICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcIl9ib3gtb3BhY2l0eVwiKTtcblxuICAgICAgICAgICAgYXdhaXQgZGVsYXkoMjAwKTtcblxuICAgICAgICAgICAgYmFsbC5jbGFzc0xpc3QuYWRkKGAke3ByaXplfWApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBidG4uY2xhc3NMaXN0LmFkZChcIl9kaXNhYmxlZFwiKTtcbiAgICAgICAgICAgIGJhbGwuY2xhc3NMaXN0LmFkZChcIl9zaGFrZVwiKTtcbiAgICAgICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwiX3NoYWtlLXJldmVyc2VcIik7XG5cbiAgICAgICAgICAgIC8vIGF3YWl0IGRlbGF5KDIwMDApXG5cbiAgICAgICAgICAgIGJhbGwuY2xhc3NMaXN0LnJlbW92ZShcIl9zaGFrZVwiKTtcbiAgICAgICAgICAgIGJhbGwuY2xhc3NMaXN0LmFkZChcIl9iZWZvcmUtaGlkZVwiKTtcbiAgICAgICAgICAgIGJveC5jbGFzc0xpc3QucmVtb3ZlKFwiX3NoYWtlLXJldmVyc2VcIik7XG4gICAgICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcIl9ib3gtb3BhY2l0eVwiKTtcblxuICAgICAgICAgICAgaWYocHJpemVOdW0gPT09IDApIGF3YWl0IGRlbGF5KDIwMCk7XG5cbiAgICAgICAgICAgIGJhbGwuY2xhc3NMaXN0LmFkZChgJHtwcml6ZX1gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGFzdFByaXplID0gcHJpemU7XG5cblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluaXRTaGFrZShiYWxsLCBidG4sIGJveCwgcHJpemVOdW0pIHtcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgICAgIHNlbmRTaGFrZVJlcXVlc3QoKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcyB8fCAhIXJlcy5lcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAvLyBidG5TaGFrZS5jbGFzc0xpc3QuYWRkKCdwdWxzZS1idG4nKTtcbiAgICAgICAgICAgICAgICAgICAgYnRuU2hha2UuY2xhc3NMaXN0LnJlbW92ZSgnX2Rpc2FibGVkJylcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBwcml6ZSA9IGBfJHtyZXMubnVtYmVyfWA7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJpemVOdW0gPSB3aW5DbGFzc2VzLmluZGV4T2YocHJpemUpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQcml6ZTonLCBwcml6ZSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1ByaXplIE51bTonLCBwcml6ZU51bSlcbiAgICAgICAgICAgICAgICBjb25zdCBzdHJlYWtCb251cyA9IHJlcy5zdHJlYWtCb251cyB8fCBkZWJ1ZztcbiAgICAgICAgICAgICAgICBhbmltYXRlU2hha2UoYmFsbCwgYm94LCBidG4sIHByaXplLCBwcml6ZU51bSkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoXCJhbmltIGVycm9yOlwiLCBlcnIpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGluaXRTaGFrZShiYWxsLCBidG5TaGFrZSwgYmFsbEJveClcblxuICAgIGNvbnN0IGJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJ0blwiKSxcbiAgICAgICAgb3MgPSBkZXRlY3RPUygpXG5cbiAgICBpZiAob3MgPT09IFwibWFjT1NcIiB8fCBvcyA9PT0gXCJpT1NcIil7XG4gICAgICAgIGJ0bnMuZm9yRWFjaChidG4gPT57XG4gICAgICAgICAgICBidG4uY2xhc3NMaXN0LmFkZChcIl9pb3NcIilcbiAgICAgICAgfSlcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIGRldGVjdE9TKCkge1xuICAgICAgICBjb25zdCB1c2VyQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50IHx8IG5hdmlnYXRvci52ZW5kb3IgfHwgd2luZG93Lm9wZXJhO1xuICAgICAgICBjb25zdCBwbGF0Zm9ybSA9IG5hdmlnYXRvci5wbGF0Zm9ybSB8fCBcInVua25vd25cIjtcbiAgICAgICAgbGV0IG9zO1xuXG4gICAgICAgIGlmICgvYW5kcm9pZC9pLnRlc3QodXNlckFnZW50KSAmJiAvbGludXggYXJtL2kudGVzdChwbGF0Zm9ybSkpIHtcbiAgICAgICAgICAgIG9zID0gXCJBbmRyb2lkXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKC9pUGFkfGlQaG9uZXxpUG9kLy50ZXN0KHVzZXJBZ2VudCkgJiYgIXdpbmRvdy5NU1N0cmVhbSkge1xuICAgICAgICAgICAgb3MgPSBcImlPU1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmICgvTWFjaW50b3NofE1hY0ludGVsfE1hY1BQQ3xNYWM2OEsvLnRlc3QocGxhdGZvcm0pKSB7XG4gICAgICAgICAgICBvcyA9IFwibWFjT1NcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoL1dpbjMyfFdpbjY0fFdpbmRvd3N8V09XNjQvLnRlc3QocGxhdGZvcm0pKSB7XG4gICAgICAgICAgICBvcyA9IFwiV2luZG93c1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmICgvTGludXgvLnRlc3QocGxhdGZvcm0pICYmICEvYW5kcm9pZC9pLnRlc3QodXNlckFnZW50KSkge1xuICAgICAgICAgICAgb3MgPSBcIkxpbnV4XCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9zXG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coXCLQntC/0LXRgNCw0YbRltC50L3QsCDRgdC40YHRgtC10LzQsDpcIiwgb3MpO1xuXG4gICAgY29uc3QgaGFuZGxlUmVzaXplID0gKCkgPT57XG4gICAgICAgIGxldCB0b3VjaFN0YXJ0WCA9IDA7XG4gICAgICAgIGxldCB0b3VjaEVuZFggPSAwO1xuXG4gICAgICAgIGNhcmRzQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRvdWNoU3RhcnRYID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uc2NyZWVuWDtcbiAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgICBjYXJkc0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdG91Y2hFbmRYID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uc2NyZWVuWDtcbiAgICAgICAgICAgIGhhbmRsZVN3aXBlKCk7XG4gICAgICAgIH0sIGZhbHNlKTtcblxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVTd2lwZSgpIHtcbiAgICAgICAgICAgIGNvbnN0IHN3aXBlVGhyZXNob2xkID0gNTA7XG4gICAgICAgICAgICBpZiAodG91Y2hFbmRYIDwgdG91Y2hTdGFydFggLSBzd2lwZVRocmVzaG9sZCkge1xuICAgICAgICAgICAgICAgIG1vdmVSaWdodCgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodG91Y2hFbmRYID4gdG91Y2hTdGFydFggKyBzd2lwZVRocmVzaG9sZCkge1xuICAgICAgICAgICAgICAgIG1vdmVMZWZ0KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBtb3ZlUmlnaHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtb3ZlUmlnaHQpO1xuICAgICAgICBtb3ZlTGVmdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1vdmVMZWZ0KTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJvcmllbnRhdGlvbmNoYW5nZVwiLCAoKSA9PntcbiAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgaGFuZGxlUmVzaXplKClcblxuXG4gICAgLy8gZm9yIHRlc3RcbiAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhcmstYnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAvLyAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKFwiZGFya1wiKVxuICAgIC8vIH0pXG4gICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbi1idG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgIC8vICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhdi1wYWdlXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJlblwiKVxuICAgIC8vIH0pXG4gICAgLy9cbiAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlc3RNZW51XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xuICAgIC8vICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByaXplcy1idG5zXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpXG4gICAgLy8gfSlcblxufSkoKTtcbiJdfQ==
