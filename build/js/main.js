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
  userId = 100300268;

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
        number: 'winNothing'
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwicmVzdWx0c1RhYmxlT3RoZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ1bmF1dGhNc2dzIiwicXVlcnlTZWxlY3RvckFsbCIsInBhcnRpY2lwYXRlQnRucyIsInJlZGlyZWN0QnRucyIsInRvcFJlc3VsdHNUYWJsZSIsImdldEVsZW1lbnRCeUlkIiwid2Vla3NTZWxlY3RvciIsIm1haW5QYWdlIiwiYmFsbFdyYXAiLCJndWlkZVdyYXAiLCJnYW1lV3JhcCIsInVrTGVuZyIsImVuTGVuZyIsImxvY2FsZSIsImkxOG5EYXRhIiwiZGVidWciLCJzZWxlY3RlZFdlZWtUYWJJZCIsInVzZXJJZCIsImxvYWRUcmFuc2xhdGlvbnMiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwidHJhbnNsYXRlIiwibXV0YXRpb25PYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJtdXRhdGlvbnMiLCJvYnNlcnZlIiwiY2hpbGRMaXN0Iiwic3VidHJlZSIsImVsZW1zIiwibGVuZ3RoIiwiZm9yRWFjaCIsImVsZW0iLCJrZXkiLCJnZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJyZW1vdmVBdHRyaWJ1dGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZWZyZXNoTG9jYWxpemVkQ2xhc3MiLCJlbGVtZW50IiwiYmFzZUNzc0NsYXNzIiwibGFuZyIsInJlbW92ZSIsImdldFVzZXJzIiwid2VlayIsInVybCIsInJlc29sdmVVc2Vyc1VybCIsInJlcXVlc3QiLCJ1c2VycyIsIm1hcCIsInVzZXJPcklkIiwidXNlcmlkIiwiSW5pdFBhZ2UiLCJ3IiwiaSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicyIsInJlZnJlc2hVc2VycyIsImluaXQiLCJyZWZyZXNoV2Vla1RhYnMiLCJ3aW5kb3ciLCJzdG9yZSIsInN0YXRlIiwiZ2V0U3RhdGUiLCJhdXRoIiwiaXNBdXRob3JpemVkIiwiaWQiLCJjaGVja1VzZXJBdXRoIiwic2V0dXBQYWdlIiwiYyIsInNldEludGVydmFsIiwiZ191c2VyX2lkIiwiY2xlYXJJbnRlcnZhbCIsImF1dGhCdG4iLCJwcmV2ZW50RGVmYXVsdCIsInBhcnRpY2lwYXRlIiwicGFyYW1zIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJpdGVtIiwicmVuZGVyVXNlcnMiLCJ0b3BVc2VycyIsInNsaWNlIiwicG9wdWxhdGVVc2Vyc1RhYmxlIiwiY3VycmVudFVzZXIiLCJmaW5kIiwidXNlciIsImN1cnJlbnRVc2VySW5kZXgiLCJpbmRleE9mIiwib3RoZXJVc2VycyIsIk1hdGgiLCJtYXgiLCJ1cGRhdGVXYWdlciIsInJhbmsiLCJwcml6ZVRleHQiLCJjdXJyZW50VXNlcklkIiwidGFibGUiLCJhbGxVc2VycyIsImluZGV4IiwiY2hlY2tDdXJyZW50VXNlciIsImFkZGl0aW9uYWxVc2VyUm93IiwiY3JlYXRlRWxlbWVudCIsInBsYWNlIiwicGxhY2VDbGFzcyIsInByaXplS2V5IiwiZ2V0UHJpemVUcmFuc2xhdGlvbktleSIsInByaXplVmFsdWUiLCJtYXNrVXNlcklkIiwicG9pbnRzIiwiaXNOYU4iLCJ0cmFuc2xhdGVLZXkiLCJhcHBlbmQiLCJ0b1N0cmluZyIsImxpbmsiLCJleHRyYU9wdGlvbnMiLCJoZWFkZXJzIiwidW5hdXRoTWVzIiwicG9pbnRzUGVyRGF5Iiwic3BpbkFsbG93ZWQiLCJzcGluc1N0cmVhayIsInNwaW5zIiwicmVmcmVzaFdoZWVsIiwicmVmcmVzaERhaWx5UG9pbnRzU2VjdGlvbiIsImRpc3BsYXlVc2VyU3BpbnMiLCJwYXJ0aWNpcGF0ZUJ0biIsIlByb21pc2UiLCJyZXNvbHZlIiwiY2FsY3VsYXRlUmVjZW50UHJvbW9XZWVrcyIsIndlZWtTZWxlY3RvciIsImRhdGUiLCJEYXRlIiwibm93IiwidXNlckluZm8iLCJtaW4iLCJjdXJyZW50U3BhbiIsInByb2dyZXNzTGluZSIsInByb2dyZXNzIiwic3R5bGUiLCJ3aWR0aCIsInNwaW5JdGVtIiwibm9TcGluSXRlbSIsInNwaW4iLCJzcGluRGF0ZSIsImZvcm1hdHRlZERhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJzcGluTmFtZSIsIm5hbWUiLCJzcGluRWxlbWVudCIsImFwcGVuZENoaWxkIiwic2V0VGltZW91dCIsImNhcmRzQ29udGFpbmVyIiwiY2FyZHMiLCJjYXJkc1dyYXAiLCJtb3ZlUmlnaHRCdXR0b24iLCJtb3ZlTGVmdEJ1dHRvbiIsInRhYnNDb250YWluZXIiLCJpc01vYmlsZSIsImlubmVyV2lkdGgiLCJ0b3RhbENhcmRzIiwiY2FyZFdpZHRoIiwiY2xpZW50V2lkdGgiLCJjYXJkc01hcmdpbiIsInZpc2libGVTbGlkZXMiLCJjZWlsIiwidG90YWxUYWJzIiwidGFiV2lkdGgiLCJjdXJyZW50U2xpZGUiLCJjYXJkc1Bvc2l0aW9uIiwibGVmdFNsaWRlIiwicmlnaHRTbGlkZSIsInVwZGF0ZUFjdGl2ZUNhcmQiLCJhY3RpdmVJbmRleCIsImNhcmQiLCJsZWZ0U2xpZGVUYWIiLCJyaWdodFNsaWRlVGFiIiwiZmlyc3RMYXN0U2xpZGVzIiwic2V0Q2FyZHNQb3NpdGlvbiIsInBvc2l0aW9uIiwidHJhbnNmb3JtIiwibW92ZVJpZ2h0IiwiY29uc29sZSIsImxvZyIsIm1heFBvc2l0aW9uIiwiaGlkZVBvcHVwc09uQnRuIiwicHJpemVQb3B1cEl0ZW0iLCJtb3ZlTGVmdCIsInNldFBvcHVwcyIsInBvcHVwcyIsInBvcHVwc0J0bnMiLCJidG4iLCJwb3B1cCIsImoiLCJwcml6ZU9wZW5CdG5zIiwicHJpemVDbG9zZUJ0bnMiLCJndWlkZVBvcHVwc1dyYXAiLCJndWlkZU9wZW5CdG5zIiwiZ3VpZGVDbG9zZUJ0bnMiLCJ0YWJsZVBvcHVwIiwidGFibGVQb3B1cENsb3NlIiwidGFibGVQb3B1cE9wZW4iLCJiYWxsUG9wdXAiLCJiYWxsUG9wdXBDbG9zZSIsImJhbGxQb3B1cE9wZW4iLCJjb250YWlucyIsInRhcmdldCIsIm92ZXJmbG93IiwiQ09VTlQiLCJTbm93c3Rvcm0iLCJtYXN0aGVhZCIsImNhbnZhcyIsImN0eCIsImdldENvbnRleHQiLCJoZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJhY3RpdmUiLCJzbm93Zmxha2VzIiwicHJvdG90eXBlIiwibGVmdCIsInRvcCIsIm9uUmVzaXplIiwiYmluZCIsInNub3dmbGFrZSIsIlNub3dmbGFrZSIsInJlc2V0IiwicHVzaCIsInJlcXVlc3RBbmltRnJhbWUiLCJ1cGRhdGUiLCJmaWxsU3R5bGUiLCJ3YXNBY3RpdmUiLCJjbGVhclJlY3QiLCJ5IiwidnkiLCJ4IiwidngiLCJnbG9iYWxBbHBoYSIsIm8iLCJiZWdpblBhdGgiLCJhcmMiLCJyIiwiUEkiLCJjbG9zZVBhdGgiLCJmaWxsIiwic25vd3N0b3JtIiwicmFuZG9tIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwid2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2FsbGJhY2siLCJza2llcyIsInNreSIsImJhbGwiLCJwYXJlbnRFbGVtZW50IiwibWF4U25vd2ZsYWtlcyIsIm1heFNwZWVkIiwic3Rvcm1Db3VudGVyIiwic25vd2ZsYWtlc1JlbW92ZWQiLCJyYWRpdXMiLCJzcGVlZFgiLCJzcGVlZFkiLCJhY2NlbGVyYXRpb24iLCJtb3ZpbmdUb0JvdHRvbSIsImJhbGxYIiwiYmFsbFkiLCJiYWxsUmFkaXVzIiwiYmFsbFNoYWtpbmciLCJ0YXJnZXRTcGVlZCIsInNwZWVkRGVjYXlGYWN0b3IiLCJkeCIsImR5IiwiZGlzdGFuY2UiLCJzcXJ0IiwiYW5nbGUiLCJhdGFuMiIsIm92ZXJsYXAiLCJjb3MiLCJzaW4iLCJzcGxpY2UiLCJsYXN0QmFsbFNoYWtpbmdTdGF0ZSIsImFuaW1hdGUiLCJiYWxsVHJhbnNmb3JtIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIm9mZnNldFdpZHRoIiwibWF0cml4IiwiRE9NTWF0cml4Iiwib2Zmc2V0TGVmdCIsIm00MSIsIm9mZnNldFRvcCIsIm00MiIsIm1vdmVUb0JvdHRvbSIsImRyYXciLCJzZW5kU2hha2VSZXF1ZXN0IiwibnVtYmVyIiwiYnRuU2hha2UiLCJiYWxsQm94IiwiY3VycmVudFByaXplIiwicGFzdFByaXplIiwid2luQ2xhc3NlcyIsInJlbW92ZVByaXplIiwiYm94IiwiYW5pbWF0ZVNoYWtlIiwicHJpemUiLCJwcml6ZU51bSIsImRlbGF5IiwibXMiLCJpbml0U2hha2UiLCJlcnJvciIsInN0cmVha0JvbnVzIiwiZXJyIiwiYnRucyIsIm9zIiwiZGV0ZWN0T1MiLCJ1c2VyQWdlbnQiLCJuYXZpZ2F0b3IiLCJ2ZW5kb3IiLCJvcGVyYSIsInBsYXRmb3JtIiwidGVzdCIsIk1TU3RyZWFtIiwiaGFuZGxlUmVzaXplIiwidG91Y2hTdGFydFgiLCJ0b3VjaEVuZFgiLCJldmVudCIsImNoYW5nZWRUb3VjaGVzIiwic2NyZWVuWCIsImhhbmRsZVN3aXBlIiwic3dpcGVUaHJlc2hvbGQiLCJsb2NhdGlvbiIsInJlbG9hZCJdLCJtYXBwaW5ncyI6Ijs7OytDQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQSxDQUFDLFlBQVk7RUFDVCxJQUFNQSxNQUFNLEdBQUcscUNBQXFDO0VBRXBELElBQ0lDLGlCQUFpQixHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxjQUFjLENBQUM7SUFDMURDLFVBQVUsR0FBR0YsUUFBUSxDQUFDRyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUM7SUFDckRDLGVBQWUsR0FBR0osUUFBUSxDQUFDRyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUM7SUFDeERFLFlBQVksR0FBR0wsUUFBUSxDQUFDRyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUM7SUFDdERHLGVBQWUsR0FBR04sUUFBUSxDQUFDTyxjQUFjLENBQUMsV0FBVyxDQUFDO0lBQ3REQyxhQUFhLEdBQUdSLFFBQVEsQ0FBQ0csZ0JBQWdCLENBQUMscUJBQXFCLENBQUM7SUFDaEU7SUFDQU0sUUFBUSxHQUFHVCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxXQUFXLENBQUM7SUFDOUNTLFFB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QUFLO0lBQ3pCLENBQUMsTUFBTSxJQUFJQSxLQUFLLElBQUksRUFBRSxFQUFFO01BQ3BCO0lBQ0osQ0FBQyxNQUFNLElBQUlBLEtBQUssSUFBSSxFQUFFLEVBQUU7TUFDcEI7SUFDSixDQUFDLE1BQU0sSUFBSUEsS0FBSyxJQUFJLEVBQUUsRUFBRTtNQUNwQjtJQUNKLENBQUMsTUFBTSxJQUFJQSxLQUFLLElBQUksRUFBRSxFQUFFO01BQ3BCO0lBQ0osQ0FBQyxNQUFNLElBQUlBLEtBQUssSUFBSSxFQUFFLEVBQUU7TUFDcEI7SUFDSixDQUFDLE1BQU0sSUFBSUEsS0FBSyxJQUFJLEdBQUcsRUFBRTtNQUNyQjtJQUNKLENBQUMsTUFBTSxJQUFJQSxLQUFLLElBQUksR0FBRyxFQUFFO01BQ3JCO0lBQ0osQ0FBQyxNQUFNLElBQUlBLEtBQUssSUFBSSxHQUFHLEVBQUU7TUFDckI7SUFDSixDQUFDLE1BQU0sSUFBSUEsS0FBSyxJQUFJLEdBQUcsRUFBRTtNQUNyQjtJQUNKLENBQUMsTUFBTSxJQUFJQSxLQUFLLElBQUksR0FBRyxFQUFFO01BQ3JCO0lBQ0osQ0FBQyxNQUFNLElBQUlBLEtBQUssSUFBSSxHQUFHLEVBQUU7TUFDckI7SUFDSixDQUFDLE1BQU0sSUFBSUEsS0FBSyxJQUFJLEdBQUcsRUFBRTtNQUNyQjtJQUNKLENBQUMsTUFBTSxJQUFJQSxLQUFLLElBQUksR0FBRyxFQUFFO01BQ3JCO0lBQ0osQ0FBQyxNQUFNLElBQUlBLEtBQUssSUFBSSxHQUFHLEVBQUU7TUFDckI7SUFDSixDQUFDLE1BQU0sSUFBSUEsS0FBSyxJQUFJLEdBQUcsRUFBRTtNQUNyQjtJQUNKLENBQUMsTUFBTSxJQUFJQSxLQUFLLElBQUksR0FBRyxFQUFFO01BQ3JCO0lBQ0osQ0FBQyxNQUFNLElBQUlBLEtBQUssSUFBSSxHQUFHLEVBQUU7TUFDckI7SUFDSixDQUFDLE1BQU0sSUFBSUEsS0FBSyxJQUFJLEdBQUcsRUFBRTtNQUNyQjtJQUNKLENBQUMsTUFBTSxJQUFJQSxLQUFLLElBQUksR0FBRyxFQUFFO01BQ3JCO0lB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ekIsY0FBYyxDQUFDdEcsZ0JBQWdCLENBQUMsT0FBTyxFQUFFcUksUUFBUSxDQUFDO0lBQ2xEL0gsTUFBTSxDQUFDTixnQkFBZ0IsQ0FBQyxtQkFBbUIsRUFBRSxZQUFLO01BQzlDa1IsUUFBUSxDQUFDQyxNQUFNLEVBQUU7SUFDckIsQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUVEVCxZQUFZLEVBQUU7O0VBR2Q7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtBQUVKLENBQUMsR0FBRyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBhcGlVUkwgPSAnaHR0cHM6Ly9mYXYtcHJvbS5jb20vYXBpX3doZWVsXzIwMjUnXG5cbiAgICBjb25zdFxuICAgICAgICByZXN1bHRzVGFibGVPdGhlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWJsZV9fdXNlcicpLFxuICAgICAgICB1bmF1dGhNc2dzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnVuYXV0aC1tc2cnKSxcbiAgICAgICAgcGFydGljaXBhdGVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bi1qb2luJyksXG4gICAgICAgIHJlZGlyZWN0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b29rLXBhcnQnKSxcbiAgICAgICAgdG9wUmVzdWx0c1RhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvcC11c2VycycpLFxuICAgICAgICB3ZWVrc1NlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYmxlX190b2dnbGUtaXRlbScpLFxuICAgICAgICAvLyB3ZWVrc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWJsZV9fdG9nZ2xlJyksXG4gICAgICAgIG1haW5QYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhdi1wYWdlJyksXG4gICAgICAgIGJhbGxXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhbGwnKSxcbiAgICAgICAgZ3VpZGVXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmd1aWRlJyksXG4gICAgICAgIGdhbWVXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVzJyk7XG5cbiAgICBjb25zdCB1a0xlbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdWtMZW5nJyk7XG4gICAgY29uc3QgZW5MZW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VuTGVuZycpO1xuXG5cbiAgICBsZXQgbG9jYWxlID0gJ3VrJztcblxuICAgIC8vIGNvbnNvbGUubG9nKHdlZWspXG4gICAgLy9cbiAgICAvLyBmdW5jdGlvbiBzZXRTdGF0ZShuZXdMb2NhbGUpIHtcbiAgICAvLyAgICAgbG9jYWxlID0gbmV3TG9jYWxlO1xuICAgIC8vICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdsb2NhbGUnLCBsb2NhbGUpO1xuICAgIC8vIH1cbiAgICAvLyBmdW5jdGlvbiB0b2dnbGVTdGF0ZSgpIHtcbiAgICAvLyAgICAgY29uc3QgbmV3TG9jYWxlID0gbG9jYWxlID09PSAnZW4nID8gJ3VrJyA6ICdlbic7XG4gICAgLy8gICAgIHNldFN0YXRlKG5ld0xvY2FsZSk7XG4gICAgLy8gICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICAgIC8vIH1cbiAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW4tYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgLy8gICAgIHRvZ2dsZVN0YXRlKCk7XG4gICAgLy8gfSk7XG5cbiAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2Vlay1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAvLyAgICAgY29uc29sZS5sb2cod2VlaylcbiAgICAvLyAgICAgaWYod2VlayA9PT0gMSl7XG4gICAgLy8gICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuX3dlZWsxJykuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXG4gICAgLy8gICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuX3dlZWsyJykuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgLy8gICAgICAgICByZXR1cm4gd2VlayA9IDJcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBpZih3ZWVrID09PSAyKXtcbiAgICAvLyAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5fd2VlazInKS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCJcbiAgICAvLyAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5fd2VlazEnKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAvLyAgICAgICAgIHdlZWsgPSAxXG4gICAgLy8gICAgIH1cbiAgICAvLyB9KTtcblxuICAgIGlmICh1a0xlbmcpIGxvY2FsZSA9ICd1ayc7XG4gICAgaWYgKGVuTGVuZykgbG9jYWxlID0gJ2VuJztcblxuXG4gICAgbGV0IGkxOG5EYXRhID0ge307XG4gICAgY29uc3QgZGVidWcgPSBmYWxzZTtcbiAgICBsZXQgc2VsZWN0ZWRXZWVrVGFiSWQgPSAwO1xuICAgIGxldCB1c2VySWQ7XG4gICAgdXNlcklkID0gMTAwMzAwMjY4O1xuXG4gICAgLy8gdXNlcklkID0gTnVtYmVyKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIikpO1xuICAgIC8vXG4gICAgLy8gY29uc29sZS5sb2codHlwZW9mIHVzZXJJZClcbiAgICAvL1xuICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9jay1idG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgIC8vICAgICB1c2VySWQgPyBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwidXNlcklkXCIpIDogc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcInVzZXJJZFwiLCAnMTAxMjM0ODYxJylcbiAgICAvLyAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gICAgLy8gfSlcblxuICAgIC8vIGlmKHdlZWsgPT09IDEpe1xuICAgIC8vICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuX3dlZWsxJykuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXG4gICAgLy8gfVxuICAgIC8vIGlmKHdlZWsgPT09IDIpe1xuICAgIC8vICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuX3dlZWsyJykuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXG4gICAgLy8gfVxuXG4gICAgZnVuY3Rpb24gbG9hZFRyYW5zbGF0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke2FwaVVSTH0vdHJhbnNsYXRlcy8ke2xvY2FsZX1gKS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICAgICAgaTE4bkRhdGEgPSBqc29uO1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgdmFyIG11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAobXV0YXRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIG11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2FtJyksIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBzdWJ0cmVlOiB0cnVlLFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmFuc2xhdGUoKSB7XG4gICAgICAgIGNvbnN0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdHJhbnNsYXRlXScpXG4gICAgICAgIGlmIChlbGVtcyAmJiBlbGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGVsZW1zLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgICAgICAgICAgICAgZWxlbS5pbm5lckhUTUwgPSBpMThuRGF0YVtrZXldIHx8ICcqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qICAga2V5OiAgJyArIGtleTtcbiAgICAgICAgICAgICAgICBlbGVtLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxvY2FsZSA9PT0gJ2VuJykge1xuICAgICAgICAgICAgbWFpblBhZ2UuY2xhc3NMaXN0LmFkZCgnZW4nKTtcbiAgICAgICAgfVxuICAgICAgICByZWZyZXNoTG9jYWxpemVkQ2xhc3MoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWZyZXNoTG9jYWxpemVkQ2xhc3MoZWxlbWVudCwgYmFzZUNzc0NsYXNzKSB7XG4gICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgbGFuZyBvZiBbJ3VrJywgJ2VuJ10pIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShiYXNlQ3NzQ2xhc3MgKyBsYW5nKTtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYmFzZUNzc0NsYXNzICsgbG9jYWxlKTtcbiAgICB9XG5cblxuICAgIC8vbmV3XG4gICAgZnVuY3Rpb24gZ2V0VXNlcnMod2Vlaykge1xuICAgICAgICBjb25zdCB1cmwgPSByZXNvbHZlVXNlcnNVcmwod2Vlayk7XG4gICAgICAgIHJldHVybiByZXF1ZXN0KHVybClcbiAgICAgICAgICAgIC50aGVuKHVzZXJzID0+IHVzZXJzLm1hcCh1c2VyT3JJZCA9PiB0eXBlb2YgdXNlck9ySWQgPT09ICdudW1iZXInID8ge3VzZXJpZDogdXNlck9ySWR9IDogdXNlck9ySWQpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXNvbHZlVXNlcnNVcmwod2Vlaykge1xuICAgICAgICByZXR1cm4gd2VlayA/IGAvd2Vlay11c2Vycy8ke3dlZWt9YCA6ICcvdXNlcnMnO1xuICAgIH1cblxuICAgIGNvbnN0IEluaXRQYWdlID0gKCkgPT4ge1xuICAgICAgICB3ZWVrc1NlbGVjdG9yLmZvckVhY2goKHcsIGkpID0+IHcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgIGlmIChpID09PSBzZWxlY3RlZFdlZWtUYWJJZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdlZWtzU2VsZWN0b3IuZm9yRWFjaChzID0+IHMuY2xhc3NMaXN0LnJlbW92ZSgnX2FjdGl2ZScpKTtcbiAgICAgICAgICAgIHcuY2xhc3NMaXN0LmFkZCgnX2FjdGl2ZScpO1xuICAgICAgICAgICAgc2VsZWN0ZWRXZWVrVGFiSWQgPSBpO1xuICAgICAgICAgICAgcmVmcmVzaFVzZXJzKHNlbGVjdGVkV2Vla1RhYklkICsgMSk7XG4gICAgICAgIH0pKTtcblxuICAgICAgICByZWZyZXNoVXNlcnMoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICByZWZyZXNoV2Vla1RhYnMoKTtcbiAgICAgICAgaWYgKHdpbmRvdy5zdG9yZSkge1xuICAgICAgICAgICAgdmFyIHN0YXRlID0gd2luZG93LnN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgICAgICB1c2VySWQgPSBzdGF0ZS5hdXRoLmlzQXV0aG9yaXplZCAmJiBzdGF0ZS5hdXRoLmlkIHx8ICcnO1xuICAgICAgICAgICAgY2hlY2tVc2VyQXV0aCgpLnRoZW4oc2V0dXBQYWdlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNoZWNrVXNlckF1dGgoKS50aGVuKHNldHVwUGFnZSk7XG4gICAgICAgICAgICBsZXQgYyA9IDA7XG4gICAgICAgICAgICB2YXIgaSA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoYyA8IDUwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghIXdpbmRvdy5nX3VzZXJfaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZCA9IHdpbmRvdy5nX3VzZXJfaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja1VzZXJBdXRoKCkudGhlbihzZXR1cFBhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcnRpY2lwYXRlQnRucy5mb3JFYWNoKChhdXRoQnRuLCBpKSA9PiB7XG4gICAgICAgICAgICBhdXRoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgcGFydGljaXBhdGUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXR1cFBhZ2UoKSB7XG4gICAgICAgIEluaXRQYWdlKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGFydGljaXBhdGUoKSB7XG4gICAgICAgIGlmICghdXNlcklkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwYXJhbXMgPSB7dXNlcmlkOiB1c2VySWR9O1xuICAgICAgICByZXF1ZXN0KCcvdXNlcicsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGFyYW1zKVxuICAgICAgICB9KS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpKTtcbiAgICAgICAgICAgIHJlZGlyZWN0QnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xuICAgICAgICAgICAgYmFsbFdyYXAuY2xhc3NMaXN0LnJlbW92ZSgnX3NpZ24nKTtcbiAgICAgICAgICAgIHNldHVwUGFnZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWZyZXNoVXNlcnMod2Vlaykge1xuICAgICAgICBnZXRVc2Vycyh3ZWVrKS50aGVuKHVzZXJzID0+IHtcbiAgICAgICAgICAgIHJlbmRlclVzZXJzKHVzZXJzKTtcbiAgICAgICAgICAgIHRyYW5zbGF0ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJVc2Vycyh1c2Vycykge1xuICAgICAgICB0b3BSZXN1bHRzVGFibGUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuXG4gICAgICAgIGlmICh1c2VycyAmJiB1c2Vycy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGxldCB0b3BVc2VycyA9IHVzZXJzLnNsaWNlKDAsIDEwKTtcbiAgICAgICAgICAgIHBvcHVsYXRlVXNlcnNUYWJsZSh0b3BVc2VycywgdXNlcklkLCB0b3BSZXN1bHRzVGFibGUsIHVzZXJzKTtcblxuICAgICAgICAgICAgY29uc3QgY3VycmVudFVzZXIgPSB1c2VySWQgJiYgdXNlcnMuZmluZCh1c2VyID0+IHVzZXIudXNlcmlkID09PSB1c2VySWQpO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFVzZXJJbmRleCA9IGN1cnJlbnRVc2VyICYmIHVzZXJzLmluZGV4T2YoY3VycmVudFVzZXIpO1xuXG4gICAgICAgICAgICBsZXQgb3RoZXJVc2VycztcblxuICAgICAgICAgICAgaWYgKCFjdXJyZW50VXNlckluZGV4IHx8IGN1cnJlbnRVc2VySW5kZXggPCAxMCkge1xuICAgICAgICAgICAgICAgIG90aGVyVXNlcnMgPSB1c2Vycy5zbGljZSgxMCwgMTMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBvdGhlclVzZXJzID0gdXNlcnMuc2xpY2UoTWF0aC5tYXgoY3VycmVudFVzZXJJbmRleCAtIDEsIDEwKSwgY3VycmVudFVzZXJJbmRleCArIDIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAob3RoZXJVc2VycyAmJiBvdGhlclVzZXJzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHBvcHVsYXRlVXNlcnNUYWJsZShvdGhlclVzZXJzLCB1c2VySWQsIHJlc3VsdHNUYWJsZU90aGVyLCB1c2Vycyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVXYWdlcihyYW5rKSB7XG4gICAgICAgIGxldCBwcml6ZVRleHQgPSAnLSc7XG4gICAgICAgIGlmIChyYW5rID49IDExICYmIHJhbmsgPD0gNTApIHtcbiAgICAgICAgICAgIHByaXplVGV4dCA9ICd4MSc7XG4gICAgICAgIH0gZWxzZSBpZiAocmFuayA+PSA1MSAmJiByYW5rIDw9IDE1MCkge1xuICAgICAgICAgICAgcHJpemVUZXh0ID0gJ3gyJztcbiAgICAgICAgfSBlbHNlIGlmIChyYW5rID49IDE1MSAmJiByYW5rIDw9IDMwMCkge1xuICAgICAgICAgICAgcHJpemVUZXh0ID0gJ3gzJztcbiAgICAgICAgfSBlbHNlIGlmIChyYW5rID49IDMwMSAmJiByYW5rIDw9IDQwMCkge1xuICAgICAgICAgICAgcHJpemVUZXh0ID0gJ3g0JztcbiAgICAgICAgfSBlbHNlIGlmIChyYW5rID49IDQwMSAmJiByYW5rIDw9IDU1MCkge1xuICAgICAgICAgICAgcHJpemVUZXh0ID0gJ3g1JztcbiAgICAgICAgfSBlbHNlIGlmIChyYW5rID49IDU1MSAmJiByYW5rIDw9IDc1MCkge1xuICAgICAgICAgICAgcHJpemVUZXh0ID0gJy0nO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcml6ZVRleHQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcG9wdWxhdGVVc2Vyc1RhYmxlKHVzZXJzLCBjdXJyZW50VXNlcklkLCB0YWJsZSwgYWxsVXNlcnMpIHtcbiAgICAgICAgdGFibGUuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGlmICh1c2VycyAmJiB1c2Vycy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHVzZXJzLmZvckVhY2goKHVzZXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hlY2tDdXJyZW50VXNlciA9IGN1cnJlbnRVc2VySWQgJiYgY3VycmVudFVzZXJJZCA9PT0gdXNlci51c2VyaWQ7XG4gICAgICAgICAgICAgICAgY29uc3QgYWRkaXRpb25hbFVzZXJSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tDdXJyZW50VXNlcikge1xuICAgICAgICAgICAgICAgICAgICBhZGRpdGlvbmFsVXNlclJvdy5jbGFzc0xpc3QuYWRkKCd5b3UnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBwbGFjZSA9IGFsbFVzZXJzLmluZGV4T2YodXNlcikgKyAxO1xuXG4gICAgICAgICAgICAgICAgbGV0IHBsYWNlQ2xhc3M7XG4gICAgICAgICAgICAgICAgaWYgKHRhYmxlLmlkID09PSAndG9wLXVzZXJzJyB8fCB0YWJsZS5pZCA9PT0gJ3F1ZXN0c1RhYmxlJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlQ2xhc3MgPSAnZ29sZCc7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlQ2xhc3MgPSAnc2lsdmVyJztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpbmRleCA9PT0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VDbGFzcyA9ICdicm9uemUnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgcHJpemVLZXkgPSBnZXRQcml6ZVRyYW5zbGF0aW9uS2V5KHBsYWNlKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwcml6ZVZhbHVlID0gdXBkYXRlV2FnZXIocGxhY2UpO1xuICAgICAgICAgICAgICAgIGFkZGl0aW9uYWxVc2VyUm93LmNsYXNzTGlzdC5hZGQoJ3RhYmxlX19ib2R5LXJvdycpO1xuICAgICAgICAgICAgICAgIGlmIChwbGFjZUNsYXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZGl0aW9uYWxVc2VyUm93LmNsYXNzTGlzdC5hZGQocGxhY2VDbGFzcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFkZGl0aW9uYWxVc2VyUm93LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX2JvZHktcm93LWl0ZW1cIj4ke3BsYWNlfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fYm9keS1yb3ctaXRlbVwiPiR7Y2hlY2tDdXJyZW50VXNlciA/IHVzZXIudXNlcmlkIDogbWFza1VzZXJJZCh1c2VyLnVzZXJpZCl9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19ib2R5LXJvdy1pdGVtXCI+JHt1c2VyLnBvaW50cyAmJiAhaXNOYU4odXNlci5wb2ludHMpID8gdXNlci5wb2ludHMgOiAwfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fYm9keS1yb3ctaXRlbVwiPiR7cHJpemVLZXkgPyB0cmFuc2xhdGVLZXkocHJpemVLZXkpIDogJyAtICd9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19ib2R5LXJvdy1pdGVtXCI+JHtwcml6ZVZhbHVlfTwvZGl2PlxuICAgICAgICAgICAgYDtcbiAgICAgICAgICAgICAgICB0YWJsZS5hcHBlbmQoYWRkaXRpb25hbFVzZXJSb3cpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRQcml6ZVRyYW5zbGF0aW9uS2V5KHBsYWNlKSB7XG4gICAgICAgIGlmIChwbGFjZSA8PSAxMCkge1xuICAgICAgICAgICAgcmV0dXJuIGBwcml6ZV8ke3BsYWNlfWA7XG4gICAgICAgIH0gZWxzZSBpZiAocGxhY2UgPD0gMjApIHtcbiAgICAgICAgICAgIHJldHVybiBgcHJpemVfMTEtMjBgO1xuICAgICAgICB9IGVsc2UgaWYgKHBsYWNlIDw9IDMwKSB7XG4gICAgICAgICAgICByZXR1cm4gYHByaXplXzIxLTMwYDtcbiAgICAgICAgfSBlbHNlIGlmIChwbGFjZSA8PSA0MCkge1xuICAgICAgICAgICAgcmV0dXJuIGBwcml6ZV8zMS00MGA7XG4gICAgICAgIH0gZWxzZSBpZiAocGxhY2UgPD0gNTApIHtcbiAgICAgICAgICAgIHJldHVybiBgcHJpemVfNDEtNTBgO1xuICAgICAgICB9IGVsc2UgaWYgKHBsYWNlIDw9IDcwKSB7XG4gICAgICAgICAgICByZXR1cm4gYHByaXplXzUxLTcwYDtcbiAgICAgICAgfSBlbHNlIGlmIChwbGFjZSA8PSAxMDApIHtcbiAgICAgICAgICAgIHJldHVybiBgcHJpemVfNzEtMTAwYDtcbiAgICAgICAgfSBlbHNlIGlmIChwbGFjZSA8PSAxNTApIHtcbiAgICAgICAgICAgIHJldHVybiBgcHJpemVfMTAxLTE1MGA7XG4gICAgICAgIH0gZWxzZSBpZiAocGxhY2UgPD0gMjAwKSB7XG4gICAgICAgICAgICByZXR1cm4gYHByaXplXzE1MS0yMDBgO1xuICAgICAgICB9IGVsc2UgaWYgKHBsYWNlIDw9IDI1MCkge1xuICAgICAgICAgICAgcmV0dXJuIGBwcml6ZV8yMDEtMjUwYDtcbiAgICAgICAgfSBlbHNlIGlmIChwbGFjZSA8PSAzMDApIHtcbiAgICAgICAgICAgIHJldHVybiBgcHJpemVfMjUxLTMwMGA7XG4gICAgICAgIH0gZWxzZSBpZiAocGxhY2UgPD0gMzUwKSB7XG4gICAgICAgICAgICByZXR1cm4gYHByaXplXzMwMS0zNTBgO1xuICAgICAgICB9IGVsc2UgaWYgKHBsYWNlIDw9IDQwMCkge1xuICAgICAgICAgICAgcmV0dXJuIGBwcml6ZV8zNTEtNDAwYDtcbiAgICAgICAgfSBlbHNlIGlmIChwbGFjZSA8PSA0NTApIHtcbiAgICAgICAgICAgIHJldHVybiBgcHJpemVfNDAxLTQ1MGA7XG4gICAgICAgIH0gZWxzZSBpZiAocGxhY2UgPD0gNTAwKSB7XG4gICAgICAgICAgICByZXR1cm4gYHByaXplXzQ1MS01MDBgO1xuICAgICAgICB9IGVsc2UgaWYgKHBsYWNlIDw9IDU1MCkge1xuICAgICAgICAgICAgcmV0dXJuIGBwcml6ZV81MDEtNTUwYDtcbiAgICAgICAgfSBlbHNlIGlmIChwbGFjZSA8PSA2MDApIHtcbiAgICAgICAgICAgIHJldHVybiBgcHJpemVfNTUxLTYwMGA7XG4gICAgICAgIH0gZWxzZSBpZiAocGxhY2UgPD0gNjUwKSB7XG4gICAgICAgICAgICByZXR1cm4gYHByaXplXzYwMS02NTBgO1xuICAgICAgICB9IGVsc2UgaWYgKHBsYWNlIDw9IDcwMCkge1xuICAgICAgICAgICAgcmV0dXJuIGBwcml6ZV82NTEtNzAwYDtcbiAgICAgICAgfSBlbHNlIGlmIChwbGFjZSA8PSA3NTApIHtcbiAgICAgICAgICAgIHJldHVybiBgcHJpemVfNzAxLTc1MGA7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIG1hc2tVc2VySWQodXNlcklkKSB7XG4gICAgICAgIHJldHVybiBcIioqXCIgKyB1c2VySWQudG9TdHJpbmcoKS5zbGljZSgyKTtcbiAgICB9XG5cbiAgICBjb25zdCByZXF1ZXN0ID0gZnVuY3Rpb24gKGxpbmssIGV4dHJhT3B0aW9ucykge1xuICAgICAgICByZXR1cm4gZmV0Y2goYXBpVVJMICsgbGluaywge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC4uLihleHRyYU9wdGlvbnMgfHwge30pXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tVc2VyQXV0aCgpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2codXNlcklkKVxuICAgICAgICBpZiAodXNlcklkKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHVuYXV0aE1lcyBvZiB1bmF1dGhNc2dzKSB7XG4gICAgICAgICAgICAgICAgdW5hdXRoTWVzLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0KGAvZmF2dXNlci8ke3VzZXJJZH0/bm9jYWNoZT0xYClcbiAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLnVzZXJpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhdGVCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWRpcmVjdEJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhbGxXcmFwLmNsYXNzTGlzdC5yZW1vdmUoJ19zaWduJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBndWlkZVdyYXAuY2xhc3NMaXN0LnJlbW92ZSgnX3NpZ24nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVXcmFwLmNsYXNzTGlzdC5yZW1vdmUoJ19zaWduJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2dyZXNzXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJfc2lnblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkZWJ1Zykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5wb2ludHNQZXJEYXkgPSAzMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc3BpbkFsbG93ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zcGluc1N0cmVhayA9IDM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnNwaW5zID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZWZyZXNoV2hlZWwocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZnJlc2hEYWlseVBvaW50c1NlY3Rpb24ocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcy5zcGlucylcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlVc2VyU3BpbnMocmVzLnNwaW5zKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IHBhcnRpY2lwYXRlQnRuIG9mIHBhcnRpY2lwYXRlQnRucykge1xuICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoY29uc3QgdW5hdXRoTWVzIG9mIHVuYXV0aE1zZ3MpIHtcbiAgICAgICAgICAgICAgICB1bmF1dGhNZXMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsb2FkVHJhbnNsYXRpb25zKClcbiAgICAgICAgLnRoZW4oaW5pdCk7XG5cbiAgICBmdW5jdGlvbiByZWZyZXNoV2Vla1RhYnMoKSB7XG4gICAgICAgIHNlbGVjdGVkV2Vla1RhYklkID0gY2FsY3VsYXRlUmVjZW50UHJvbW9XZWVrcygpIC0gMTtcbiAgICAgICAgaWYgKCFzZWxlY3RlZFdlZWtUYWJJZCB8fCBzZWxlY3RlZFdlZWtUYWJJZCA9PT0gMCkgeyAvLyBwcm9tbyBub3Qgc3RhcnRlZCB5ZXRcbiAgICAgICAgICAgIC8vIHdlZWtzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCB3ZWVrU2VsZWN0b3IgPSB3ZWVrc1NlbGVjdG9yW2ldO1xuICAgICAgICAgICAgaWYgKHNlbGVjdGVkV2Vla1RhYklkIDwgaSkge1xuICAgICAgICAgICAgICAgIHdlZWtTZWxlY3Rvci5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB3ZWVrc1NlbGVjdG9yLmZvckVhY2goKHcsIGkpID0+IHtcbiAgICAgICAgICAgIHcuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICBpZiAoaSA9PT0gc2VsZWN0ZWRXZWVrVGFiSWQpIHtcbiAgICAgICAgICAgICAgICB3LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVSZWNlbnRQcm9tb1dlZWtzKCkge1xuICAgICAgICBjb25zdCBkYXRlID0gRGF0ZS5ub3coKTtcbiAgICAgICAgaWYgKGRhdGUgPCBuZXcgRGF0ZShcIjIwMjQtMTItMTdUMjI6MDA6MDBaXCIpKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAyO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiB0cmFuc2xhdGVLZXkoa2V5KSB7XG4gICAgICAgIGlmICgha2V5KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGkxOG5EYXRhW2tleV0gfHwgJyotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSogICBrZXk6ICAnICsga2V5O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlZnJlc2hXaGVlbCh1c2VySW5mbykge1xuICAgICAgICBpZiAoIXVzZXJJbmZvLnNwaW5BbGxvd2VkKSB7XG4gICAgICAgICAgICBiYWxsV3JhcC5jbGFzc0xpc3QuYWRkKCdfbG9jaycpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVmcmVzaERhaWx5UG9pbnRzU2VjdGlvbih1c2VySW5mbykge1xuICAgICAgICBjb25zdCBwb2ludHMgPSBNYXRoLm1pbih1c2VySW5mby5wb2ludHNQZXJEYXkgfHwgMCwgNTApO1xuICAgICAgICAvLyBjb25zdCBwcm9ncmVzc1N0YXR1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9ncmVzc1N0YXR1cycpO1xuICAgICAgICAvLyBwcm9ncmVzc1N0YXR1cy5pbm5lckhUTUwgPSBgJHtwb2ludHN9LzUwYDtcbiAgICAgICAgY29uc3QgY3VycmVudFNwYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudCcpO1xuICAgICAgICBjdXJyZW50U3Bhbi5pbm5lckhUTUwgPSBgJHtwb2ludHN9YDtcbiAgICAgICAgY29uc3QgcHJvZ3Jlc3NMaW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2dyZXNzX19iYXItdGh1bWInKTtcbiAgICAgICAgY29uc3QgcHJvZ3Jlc3MgPSBwb2ludHMgLyA1MC4wICogMTAwO1xuICAgICAgICBwcm9ncmVzc0xpbmUuc3R5bGUud2lkdGggPSBgJHtwcm9ncmVzc30lYDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5VXNlclNwaW5zKHNwaW5zKSB7XG4gICAgICAgIGNvbnN0IHNwaW5JdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNwaW5zLXJvdycpO1xuICAgICAgICBjb25zdCBub1NwaW5JdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vLXNwaW5zJyk7XG5cbiAgICAgICAgaWYgKCFzcGlucyB8fCBzcGlucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHNwaW5JdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIG5vU3Bpbkl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY29uc3Qgc3BpbnNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3BpbnMtcm93Jyk7XG4gICAgICAgIHNwaW5JdGVtLmlubmVySFRNTCA9XG4gICAgICAgIGBcbiAgICAgICA8ZGl2IGNsYXNzPVwic3BpbnMtcm93LWhlYWRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LWRhdGVcIiBkYXRhLXRyYW5zbGF0ZT1cIm15U3BpbnNEYXRlXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1wcml6ZVwiIGRhdGEtdHJhbnNsYXRlPVwibXlTcGluc1ByaXplXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBgXG5cbiAgICAgICAgc3Bpbkl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICBub1NwaW5JdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2cobm9TcGluSXRlbSlcblxuICAgICAgICBzcGlucy5mb3JFYWNoKHNwaW4gPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3BpbkRhdGUgPSBuZXcgRGF0ZShzcGluLmRhdGUpO1xuICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkRGF0ZSA9IHNwaW5EYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygndWstVUEnKTtcbiAgICAgICAgICAgIGNvbnN0IHNwaW5OYW1lID0gdHJhbnNsYXRlS2V5KHNwaW4ubmFtZSkgfHwgJyc7XG5cbiAgICAgICAgICAgIGNvbnN0IHNwaW5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBzcGluRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzcGlucy1yb3ctaXRlbScpO1xuXG4gICAgICAgICAgICBzcGluRWxlbWVudC5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbnRlbnQtZGF0ZVwiPiR7Zm9ybWF0dGVkRGF0ZX08L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbnRlbnQtcHJpemVcIj4ke3NwaW5OYW1lfTwvc3Bhbj5cbiAgICAgICAgYDtcblxuICAgICAgICAgICAgc3Bpbkl0ZW0uYXBwZW5kQ2hpbGQoc3BpbkVsZW1lbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IG1haW5QYWdlLmNsYXNzTGlzdC5hZGQoJ292ZXJmbG93JyksIDEwMDApO1xuXG5cbiAgICAvLyBDYXJkcyBzbGlkZXJcbiAgICBjb25zdCBjYXJkc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcml6ZV9fbGlzdCcpLFxuICAgICAgICBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcml6ZV9fbGlzdC1pdGVtJyksXG4gICAgICAgIGNhcmRzV3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcml6ZV9fbGlzdC1zY3JvbGwnKSxcbiAgICAgICAgbW92ZVJpZ2h0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaXplX19zbGlkZXItbW92ZS1yaWdodCcpLFxuICAgICAgICBtb3ZlTGVmdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcml6ZV9fc2xpZGVyLW1vdmUtbGVmdCcpLFxuICAgICAgICB0YWJzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaXplX190YWJzJyksXG4gICAgICAgIGlzTW9iaWxlID0gd2luZG93LmlubmVyV2lkdGggPCA2MDAsXG4gICAgICAgIHRvdGFsQ2FyZHMgPSBjYXJkcy5sZW5ndGgsXG4gICAgICAgIGNhcmRXaWR0aCA9IGNhcmRzWzBdLmNsaWVudFdpZHRoLFxuICAgICAgICBjYXJkc01hcmdpbiA9IChjYXJkc1dyYXAuY2xpZW50V2lkdGggLSBjYXJkV2lkdGggKiB0b3RhbENhcmRzKSAvICh0b3RhbENhcmRzIC0gMSksXG4gICAgICAgIHZpc2libGVTbGlkZXMgPSBpc01vYmlsZSA/IDEgOiBNYXRoLmNlaWwoY2FyZHNDb250YWluZXIuY2xpZW50V2lkdGggLyAoY2FyZFdpZHRoICsgY2FyZHNNYXJnaW4pKSxcbiAgICAgICAgdG90YWxUYWJzID0gTWF0aC5jZWlsKHRvdGFsQ2FyZHMgLyB2aXNpYmxlU2xpZGVzKSxcbiAgICAgICAgdGFiV2lkdGg9IHZpc2libGVTbGlkZXMgKiAoY2FyZFdpZHRoICsgY2FyZHNNYXJnaW4pXG5cblxuICAgIGxldCBjdXJyZW50U2xpZGUgPSAxLFxuICAgICAgICBjYXJkc1Bvc2l0aW9uID0gMCxcbiAgICAgICAgbGVmdFNsaWRlLFxuICAgICAgICByaWdodFNsaWRlO1xuXG4gICAgY29uc3QgdXBkYXRlQWN0aXZlQ2FyZCA9IChjYXJkcywgYWN0aXZlSW5kZXgpID0+IHtcbiAgICAgICAgY2FyZHMuZm9yRWFjaCgoY2FyZCwgaSkgPT57XG4gICAgICAgICAgICBhY3RpdmVJbmRleCAtIDEgPT09IGkgPyBjYXJkLmNsYXNzTGlzdC5hZGQoXCJfYWN0aXZlXCIpIDogY2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwiX2FjdGl2ZVwiKVxuICAgICAgICB9KVxuICAgIH1cbiAgICB1cGRhdGVBY3RpdmVDYXJkKGNhcmRzLCBjdXJyZW50U2xpZGUpXG5cbiAgICBmdW5jdGlvbiBsZWZ0U2xpZGVUYWIoKXtcbiAgICAgICAgbGVmdFNsaWRlID0gY3VycmVudFNsaWRlXG4gICAgfVxuICAgIGZ1bmN0aW9uIHJpZ2h0U2xpZGVUYWIoKXtcbiAgICAgICAgcmlnaHRTbGlkZSA9IGN1cnJlbnRTbGlkZSArICh2aXNpYmxlU2xpZGVzIC0gMSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmaXJzdExhc3RTbGlkZXMoKXtcbiAgICAgICAgaWYoaXNNb2JpbGUpIHJldHVyblxuICAgICAgICBsZWZ0U2xpZGVUYWIoKVxuICAgICAgICByaWdodFNsaWRlVGFiKClcbiAgICAgICAgY2FyZHMuZm9yRWFjaCgoY2FyZCAsIGkpID0+e1xuICAgICAgICAgICAgaSArIDEgPT09IGxlZnRTbGlkZSA/IGNhcmQuY2xhc3NMaXN0LmFkZChcIl9sZWZ0XCIpIDogY2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwiX2xlZnRcIilcbiAgICAgICAgICAgIGkgKyAxID09PSByaWdodFNsaWRlID8gY2FyZC5jbGFzc0xpc3QuYWRkKFwiX3JpZ2h0XCIpIDogY2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwiX3JpZ2h0XCIpXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGZpcnN0TGFzdFNsaWRlcygpXG5cbiAgICBmdW5jdGlvbiBzZXRDYXJkc1Bvc2l0aW9uIChwb3NpdGlvbikge1xuICAgICAgICBjYXJkc1dyYXAuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoLSR7cG9zaXRpb259cHgpYDtcbiAgICB9O1xuICAgIGNvbnN0IG1vdmVSaWdodCA9ICgpID0+IHtcblxuICAgICAgICBpZiAoY3VycmVudFNsaWRlID49IHRvdGFsQ2FyZHMgLSAodmlzaWJsZVNsaWRlcyAtIDEpICYmIGlzTW9iaWxlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgZmlyc3RMYXN0U2xpZGVzKClcbiAgICAgICAgICAgIGN1cnJlbnRTbGlkZSA9IDE7XG4gICAgICAgICAgICBjYXJkc1Bvc2l0aW9uID0gMDtcbiAgICAgICAgICAgIHJpZ2h0U2xpZGUrK1xuICAgICAgICAgICAgbGVmdFNsaWRlKytcbiAgICAgICAgfWVsc2UgaWYoY3VycmVudFNsaWRlID09PSB0b3RhbENhcmRzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50U2xpZGUpXG4gICAgICAgICAgICBjdXJyZW50U2xpZGUgPSAxO1xuICAgICAgICAgICAgY2FyZHNQb3NpdGlvbiA9IDA7XG4gICAgICAgIH1lbHNlIGlmKGN1cnJlbnRTbGlkZSA9PT0gdG90YWxDYXJkcyAtICggdmlzaWJsZVNsaWRlcyArIDEpICYmIGlzTW9iaWxlID09PSB0cnVlKXtcbiAgICAgICAgICAgIGN1cnJlbnRTbGlkZSA9IHRvdGFsQ2FyZHNcbiAgICAgICAgICAgIGNhcmRzUG9zaXRpb24gPSBjYXJkc1dyYXAuY2xpZW50V2lkdGggLSAod2luZG93LmlubmVyV2lkdGggLSAoY2FyZHNNYXJnaW4gLyAyKSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNhcmRzUG9zaXRpb24pXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBtYXhQb3NpdGlvbiA9ICh0b3RhbENhcmRzIC0gdmlzaWJsZVNsaWRlcykgKiAoY2FyZFdpZHRoICsgY2FyZHNNYXJnaW4pO1xuICAgICAgICAgICAgaWYgKGNhcmRzUG9zaXRpb24gKyBjYXJkV2lkdGggKyBjYXJkc01hcmdpbiA+IG1heFBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgY2FyZHNQb3NpdGlvbiA9IG1heFBvc2l0aW9uO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRTbGlkZSA9IHRvdGFsQ2FyZHMgLSB2aXNpYmxlU2xpZGVzICsgMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2FyZHNQb3NpdGlvbiArPSBjYXJkV2lkdGggKyBjYXJkc01hcmdpbjtcbiAgICAgICAgICAgICAgICBjdXJyZW50U2xpZGUrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzZXRDYXJkc1Bvc2l0aW9uKGNhcmRzUG9zaXRpb24pO1xuICAgICAgICB1cGRhdGVBY3RpdmVDYXJkKGNhcmRzLCBjdXJyZW50U2xpZGUpXG4gICAgICAgIGZpcnN0TGFzdFNsaWRlcygpXG4gICAgICAgIGhpZGVQb3B1cHNPbkJ0bihwcml6ZVBvcHVwSXRlbSlcbiAgICAgICAgLy8gY2VudGVyUG9wdXAoXCIucHJpemVfX2xpc3QtcG9wdXBcIilcblxuICAgIH07XG4gICAgY29uc3QgbW92ZUxlZnQgPSAoKSA9PiB7XG4gICAgICAgIGlmKGN1cnJlbnRTbGlkZSA9PT0gMSAmJiBpc01vYmlsZSA9PT0gZmFsc2Upe1xuICAgICAgICAgICAgY3VycmVudFNsaWRlID0gdG90YWxDYXJkcyAtICh2aXNpYmxlU2xpZGVzIC0gMSk7XG4gICAgICAgICAgICBjYXJkc1Bvc2l0aW9uID0gKCh0b3RhbENhcmRzIC0gKHZpc2libGVTbGlkZXMgLSAxKSkgKiAoY2FyZFdpZHRoICsgY2FyZHNNYXJnaW4pKSAtKGNhcmRXaWR0aCArIGNhcmRzTWFyZ2luKTtcbiAgICAgICAgfWVsc2UgaWYgKGN1cnJlbnRTbGlkZSA9PT0gMikge1xuICAgICAgICAgICAgY2FyZHNQb3NpdGlvbiA9IDBcbiAgICAgICAgICAgIGN1cnJlbnRTbGlkZSA9IDFcbiAgICAgICAgfWVsc2UgaWYoY3VycmVudFNsaWRlID09PSAxICYmIGlzTW9iaWxlID09PSB0cnVlKXtcbiAgICAgICAgICAgIGN1cnJlbnRTbGlkZSA9IHRvdGFsQ2FyZHNcbiAgICAgICAgICAgIGNhcmRzUG9zaXRpb24gPSBjYXJkc1dyYXAuY2xpZW50V2lkdGggLSAod2luZG93LmlubmVyV2lkdGggLSAoY2FyZHNNYXJnaW4gLyAyKSlcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgY2FyZHNQb3NpdGlvbiAtPSBjYXJkV2lkdGggKyBjYXJkc01hcmdpbjtcbiAgICAgICAgICAgIGN1cnJlbnRTbGlkZS0tXG4gICAgICAgIH1cbiAgICAgICAgc2V0Q2FyZHNQb3NpdGlvbihjYXJkc1Bvc2l0aW9uKTtcbiAgICAgICAgdXBkYXRlQWN0aXZlQ2FyZChjYXJkcywgY3VycmVudFNsaWRlKVxuICAgICAgICBmaXJzdExhc3RTbGlkZXMoKVxuICAgICAgICBoaWRlUG9wdXBzT25CdG4ocHJpemVQb3B1cEl0ZW0pXG4gICAgICAgIC8vIGNlbnRlclBvcHVwKFwiLnByaXplX19saXN0LXBvcHVwXCIpXG4gICAgfTtcblxuICAgIC8vIGNlbnRlclBvcHVwKFwiLnByaXplX19saXN0LXBvcHVwXCIpXG5cblxuICAgIC8vIHBvcHVwcyBsb2dpY1xuXG4gICAgZnVuY3Rpb24gc2V0UG9wdXBzKHBvcHVwcywgcG9wdXBzQnRucykge1xuICAgICAgICBwb3B1cHNCdG5zLmZvckVhY2goKGJ0biwgaSkgPT4ge1xuICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHBvcHVwcy5mb3JFYWNoKChwb3B1cCwgaikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpID09PSBqID8gcG9wdXAuY2xhc3NMaXN0LmFkZChcIl9wb3B1cFwiKSA6IHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoXCJfcG9wdXBcIik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gICBoaWRlUG9wdXBzT25CdG4ocG9wdXBzKXtcbiAgICAgICAgcG9wdXBzLmZvckVhY2gocG9wdXAgPT57XG4gICAgICAgICAgICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwiX3BvcHVwXCIpXG4gICAgICAgIH0pXG4gICAgfVxuXG4vLyBwb3B1cHNcbiAgICBjb25zdCBwcml6ZU9wZW5CdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcml6ZV9fbGlzdC1pdGVtLWJ0blwiKSxcbiAgICAgICAgcHJpemVDbG9zZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByaXplX19saXN0LXBvcHVwLWNsb3NlXCIpLFxuICAgICAgICBndWlkZVBvcHVwc1dyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmd1aWRlX19pdGVtXCIpLFxuICAgICAgICBndWlkZU9wZW5CdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ndWlkZV9faXRlbS1pbmZvLWJ0blwiKSxcbiAgICAgICAgZ3VpZGVDbG9zZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmd1aWRlX19pdGVtLXBvcHVwLWNsb3NlXCIpLFxuICAgICAgICB0YWJsZVBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YWJsZV9fcG9wdXBcIiksXG4gICAgICAgIHRhYmxlUG9wdXBDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFibGVfX3BvcHVwLWNsb3NlXCIpLFxuICAgICAgICB0YWJsZVBvcHVwT3BlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFibGVfX2luZm9cIiksXG4gICAgICAgIGJhbGxQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZ3Jlc3NfX3BvcHVwXCIpLFxuICAgICAgICBiYWxsUG9wdXBDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZ3Jlc3NfX3BvcHVwLWNsb3NlXCIpLFxuICAgICAgICBiYWxsUG9wdXBPcGVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9ncmVzc19fcG9wdXAtYnRuXCIpLFxuICAgICAgICBwcml6ZVBvcHVwSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJpemVfX2NvbnRhaW5lci1pdGVtXCIpXG5cblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT57XG5cbiAgICAgICAgLy8gIHByaXplUG9wdXBJdGVtLmZvckVhY2goY2FyZCA9PntcbiAgICAgICAgLy8gICAgICAgICBpZihlLnRhcmdldCAhPT0gY2FyZCl7XG4gICAgICAgIC8vICAgICAgICAgICAgIHByaXplT3BlbkJ0bnMuZm9yRWFjaChidG4gPT57XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBpZihlLnRhcmdldCAhPT0gYnRuICYmIGUudGFyZ2V0ICE9PSBjYXJkKXtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldCApXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgLy8gY2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwiX3BvcHVwXCIpXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB9XG4gICAgICAgIC8vICAgICAgICAgICAgIH0pXG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyB9KVxuICAgICAgICBndWlkZVBvcHVwc1dyYXAuZm9yRWFjaChwb3B1cCA9PntcbiAgICAgICAgICAgIGlmKCFwb3B1cC5jb250YWlucyhlLnRhcmdldCkpe1xuICAgICAgICAgICAgICAgIHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoXCJfcG9wdXBcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBpZighYmFsbFBvcHVwLmNvbnRhaW5zKGUudGFyZ2V0KSAmJiBlLnRhcmdldCAhPT0gYmFsbFBvcHVwT3Blbil7XG4gICAgICAgICAgICBiYWxsUG9wdXAuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICAgICAgfVxuXG4gICAgfSlcblxuXG4gICAgc2V0UG9wdXBzKHByaXplUG9wdXBJdGVtLCBwcml6ZU9wZW5CdG5zKTtcbiAgICBzZXRQb3B1cHMoZ3VpZGVQb3B1cHNXcmFwLCBndWlkZU9wZW5CdG5zKTtcblxuICAgIGd1aWRlQ2xvc2VCdG5zLmZvckVhY2goYnRuID0+e1xuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcbiAgICAgICAgICAgIGhpZGVQb3B1cHNPbkJ0bihndWlkZVBvcHVwc1dyYXApXG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcHJpemVDbG9zZUJ0bnMuZm9yRWFjaChidG4gPT57XG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xuICAgICAgICAgICAgaGlkZVBvcHVwc09uQnRuKHByaXplUG9wdXBJdGVtKVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRhYmxlUG9wdXBPcGVuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgdGFibGVQb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKVxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIlxuICAgIH0pO1xuXG4gICAgdGFibGVQb3B1cENsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgdGFibGVQb3B1cC5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCJcbiAgICB9KTtcblxuICAgIGJhbGxQb3B1cE9wZW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBiYWxsUG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIilcbiAgICB9KTtcblxuICAgIGJhbGxQb3B1cENsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgYmFsbFBvcHVwLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgfSk7XG5cbiAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIENPVU5UID0gNDAwO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBTbm93c3Rvcm0oZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMubWFzdGhlYWQgPSBlbGVtZW50O1xuICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICAgICAgICAgIHRoaXMud2lkdGggPSB0aGlzLm1hc3RoZWFkLmNsaWVudFdpZHRoO1xuICAgICAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5tYXN0aGVhZC5jbGllbnRIZWlnaHQ7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNub3dmbGFrZXMgPSBbXTtcblxuICAgICAgICAgICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBTbm93c3Rvcm0ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmxlZnQgPSB0aGlzLmNhbnZhcy5zdHlsZS50b3AgPSAnMCc7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXN0aGVhZC5hcHBlbmRDaGlsZCh0aGlzLmNhbnZhcyk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLm9uUmVzaXplKCk7XG4gICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25SZXNpemUuYmluZCh0aGlzKSwgZmFsc2UpO1xuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBDT1VOVDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzbm93Zmxha2UgPSBuZXcgdGhpcy5Tbm93Zmxha2UodGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIHNub3dmbGFrZS5yZXNldCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNub3dmbGFrZXMucHVzaChzbm93Zmxha2UpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbUZyYW1lKHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIFNub3dzdG9ybS5wcm90b3R5cGUub25SZXNpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMubWFzdGhlYWQuY2xpZW50V2lkdGg7XG4gICAgICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLm1hc3RoZWFkLmNsaWVudEhlaWdodDtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHRoaXMud2lkdGg7XG4gICAgICAgICAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJyNGRkYnO1xuXG4gICAgICAgICAgICAgICAgdmFyIHdhc0FjdGl2ZSA9IHRoaXMuYWN0aXZlO1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlID0gdGhpcy53aWR0aCA+IDgwO1xuICAgICAgICAgICAgICAgIHRoaXMud2lkdGggPiAyODAgPyBDT1VOVCA9IDE1MCA6IG51bGxcblxuICAgICAgICAgICAgICAgIGlmICghd2FzQWN0aXZlICYmIHRoaXMuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltRnJhbWUodGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgU25vd3N0b3JtLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcblxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgQ09VTlQ7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc25vd2ZsYWtlID0gdGhpcy5zbm93Zmxha2VzW2ldO1xuICAgICAgICAgICAgICAgICAgICBzbm93Zmxha2UueSArPSBzbm93Zmxha2Uudnk7XG4gICAgICAgICAgICAgICAgICAgIHNub3dmbGFrZS54ICs9IHNub3dmbGFrZS52eDtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN0eC5nbG9iYWxBbHBoYSA9IHNub3dmbGFrZS5vO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdHguYXJjKHNub3dmbGFrZS54LCBzbm93Zmxha2UueSwgc25vd2ZsYWtlLnIsIDAsIE1hdGguUEkgKiAyLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHNub3dmbGFrZS55ID4gdGhpcy5oZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNub3dmbGFrZS5yZXNldCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1GcmFtZSh0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIFNub3dzdG9ybS5wcm90b3R5cGUuU25vd2ZsYWtlID0gZnVuY3Rpb24gKHNub3dzdG9ybSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc25vd3N0b3JtID0gc25vd3N0b3JtO1xuICAgICAgICAgICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIFNub3dzdG9ybS5wcm90b3R5cGUuU25vd2ZsYWtlLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnggPSBNYXRoLnJhbmRvbSgpICogdGhpcy5zbm93c3Rvcm0ud2lkdGg7XG4gICAgICAgICAgICAgICAgdGhpcy55ID0gTWF0aC5yYW5kb20oKSAqIC10aGlzLnNub3dzdG9ybS5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgdGhpcy52eSA9IDAuMyArIE1hdGgucmFuZG9tKCkgKiAwLjAwMDAxO1xuICAgICAgICAgICAgICAgIHRoaXMudnggPSAwLjYgLSBNYXRoLnJhbmRvbSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuciA9IDEgKyBNYXRoLnJhbmRvbSgpICogMjtcbiAgICAgICAgICAgICAgICB0aGlzLm8gPSAxO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltRnJhbWUgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCAxMDAwIC8gNjApO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSkoKTtcblxuICAgICAgICAgICAgdmFyIHNraWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNreScpO1xuICAgICAgICAgICAgc2tpZXMuZm9yRWFjaChmdW5jdGlvbiAoc2t5KSB7XG4gICAgICAgICAgICAgICAgbmV3IFNub3dzdG9ybShza3kpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIGJhbGwgc2hha2Ugc25vd1xuICAgICAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNub3dDYW52YXMnKTtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICAgICAgY29uc3QgYmFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zcGhlcmUnKTtcblxuICAgICAgICAgICAgY2FudmFzLndpZHRoID0gY2FudmFzLnBhcmVudEVsZW1lbnQuY2xpZW50V2lkdGg7XG4gICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gY2FudmFzLnBhcmVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuXG4gICAgICAgICAgICBsZXQgc25vd2ZsYWtlcyA9IFtdO1xuICAgICAgICAgICAgY29uc3QgbWF4U25vd2ZsYWtlcyA9IDEwMDtcbiAgICAgICAgICAgIGNvbnN0IG1heFNwZWVkID0gNztcbiAgICAgICAgICAgIGxldCBzdG9ybUNvdW50ZXIgPSAxXG5cblxuICAgICAgICAgICAgbGV0IHNub3dmbGFrZXNSZW1vdmVkID0gMDtcblxuICAgICAgICAgICAgY2xhc3MgU25vd2ZsYWtlIHtcbiAgICAgICAgICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54ID0gTWF0aC5yYW5kb20oKSAqIGNhbnZhcy53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55ID0gTWF0aC5yYW5kb20oKSAqIGNhbnZhcy5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmFkaXVzID0gTWF0aC5yYW5kb20oKSAqIDMgKyAxO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwZWVkWCA9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDEwO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwZWVkWSA9IE1hdGgucmFuZG9tKCkgKiAxLjUgKyAxO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjY2VsZXJhdGlvbiA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92aW5nVG9Cb3R0b20gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB1cGRhdGUoYmFsbFgsIGJhbGxZLCBiYWxsUmFkaXVzLCBiYWxsU2hha2luZykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5tb3ZpbmdUb0JvdHRvbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0U3BlZWQgPSAwLjE7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzcGVlZERlY2F5RmFjdG9yID0gMC4wNTsgLy8g0JrQvtC10YTRltGG0ZbRlNC90YIg0LTQu9GPINC/0LvQsNCy0L3QvtCz0L4g0YHQv9C+0LLRltC70YzQvdC10L3QvdGPXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3BlZWRYID0gdGhpcy5zcGVlZFggLSAodGhpcy5zcGVlZFggLSB0YXJnZXRTcGVlZCkgKiBzcGVlZERlY2F5RmFjdG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGVlZFkgPSB0aGlzLnNwZWVkWSAtICh0aGlzLnNwZWVkWSAtIHRhcmdldFNwZWVkKSAqIHNwZWVkRGVjYXlGYWN0b3I7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vINCe0L3QvtCy0LvQtdC90L3RjyDQv9C+0LfQuNGG0ZbRlyDRgdC90ZbQttC40L3QutC4XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnkgKz0gdGhpcy5zcGVlZFk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnkgPiBjYW52YXMuaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueCArPSB0aGlzLnNwZWVkWDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55ICs9IHRoaXMuc3BlZWRZO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vINCe0LHQvNC10LbQtdC90L3RjyDRiNCy0LjQtNC60L7RgdGC0ZZcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGVlZFggPSBNYXRoLm1heCgtbWF4U3BlZWQsIE1hdGgubWluKG1heFNwZWVkLCB0aGlzLnNwZWVkWCkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwZWVkWSA9IE1hdGgubWF4KC1tYXhTcGVlZCwgTWF0aC5taW4obWF4U3BlZWQsIHRoaXMuc3BlZWRZKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8g0JTQvtC00LDQstCw0L3QvdGPINGI0LLQuNC00LrQvtGB0YLRliDRh9C10YDQtdC3IFwi0YLRgNGD0YHRltC90L3Rj1wiINC60YPQu9GWXG4gICAgICAgICAgICAgICAgICAgIGlmIChiYWxsU2hha2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY2NlbGVyYXRpb24gKz0gMC4wNTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWNjZWxlcmF0aW9uICo9IDAuOTU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGVlZFggKz0gdGhpcy5hY2NlbGVyYXRpb24gKiAoTWF0aC5yYW5kb20oKSAtIDAuNSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3BlZWRZICs9IHRoaXMuYWNjZWxlcmF0aW9uICogKE1hdGgucmFuZG9tKCkgLSAwLjUpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnkgPiBjYW52YXMuaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnkgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy54ID0gTWF0aC5yYW5kb20oKSAqIGNhbnZhcy53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy54ID4gY2FudmFzLndpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnggPSAwO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMueCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueCA9IGNhbnZhcy53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vINCS0ZbQtNGB0YLQsNC90Ywg0LTQviDRhtC10L3RgtGA0YMg0LrRg9C70ZZcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZHggPSB0aGlzLnggLSBiYWxsWDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZHkgPSB0aGlzLnkgLSBiYWxsWTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vINCS0ZbQtNGB0LrQvtC6INCy0ZbQtCDQutGD0LvRllxuICAgICAgICAgICAgICAgICAgICBpZiAoZGlzdGFuY2UgPCBiYWxsUmFkaXVzICsgdGhpcy5yYWRpdXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFuZ2xlID0gTWF0aC5hdGFuMihkeSwgZHgpOyAvLyDQmtGD0YIg0LfRltGC0LrQvdC10L3QvdGPXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvdmVybGFwID0gYmFsbFJhZGl1cyArIHRoaXMucmFkaXVzIC0gZGlzdGFuY2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vINCf0LXRgNC10LzRltGJ0LXQvdC90Y8g0YHQvdGW0LbQuNC90LrQuFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy54ICs9IE1hdGguY29zKGFuZ2xlKSAqIG92ZXJsYXA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnkgKz0gTWF0aC5zaW4oYW5nbGUpICogb3ZlcmxhcDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g0KDQtdCy0LXRgNGBINGI0LLQuNC00LrQvtGB0YLRllxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGVlZFggKj0gLTAuNztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3BlZWRZICo9IC0wLjc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBtb3ZlVG9Cb3R0b20oKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92aW5nVG9Cb3R0b20gPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJlbW92ZSgpIHtcbiAgICAgICAgICAgICAgICAgICAgc25vd2ZsYWtlcy5zcGxpY2Uoc25vd2ZsYWtlcy5pbmRleE9mKHRoaXMpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgc25vd2ZsYWtlc1JlbW92ZWQrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0b3JtQ291bnRlciA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFNub3dzdG9ybShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNwaGVyZV9fYm9keVwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9ybUNvdW50ZXIrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGRyYXcoKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIDAsIE1hdGguUEkgKiAyKTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICd3aGl0ZSc7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBsYXN0QmFsbFNoYWtpbmdTdGF0ZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1heFNub3dmbGFrZXM7IGkrKykge1xuICAgICAgICAgICAgICAgIHNub3dmbGFrZXMucHVzaChuZXcgU25vd2ZsYWtlKCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBhbmltYXRlKCkge1xuICAgICAgICAgICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGJhbGxUcmFuc2Zvcm0gPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShiYWxsKS50cmFuc2Zvcm07XG4gICAgICAgICAgICAgICAgbGV0IGJhbGxYID0gY2FudmFzLndpZHRoIC8gMjtcbiAgICAgICAgICAgICAgICBsZXQgYmFsbFkgPSBjYW52YXMuaGVpZ2h0IC8gMjtcbiAgICAgICAgICAgICAgICBjb25zdCBiYWxsUmFkaXVzID0gYmFsbC5vZmZzZXRXaWR0aCAvIDI7XG4gICAgICAgICAgICAgICAgY29uc3QgYmFsbFNoYWtpbmcgPSBiYWxsVHJhbnNmb3JtICE9PSAnbm9uZSc7XG5cbiAgICAgICAgICAgICAgICBpZiAoYmFsbFRyYW5zZm9ybSAhPT0gJ25vbmUnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hdHJpeCA9IG5ldyBET01NYXRyaXgoYmFsbFRyYW5zZm9ybSk7XG4gICAgICAgICAgICAgICAgICAgIGJhbGxYID0gYmFsbC5vZmZzZXRMZWZ0ICsgbWF0cml4Lm00MSArIGJhbGxSYWRpdXM7XG4gICAgICAgICAgICAgICAgICAgIGJhbGxZID0gYmFsbC5vZmZzZXRUb3AgKyBtYXRyaXgubTQyICsgYmFsbFJhZGl1cztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoYmFsbFNoYWtpbmcgJiYgIWxhc3RCYWxsU2hha2luZ1N0YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHNub3dmbGFrZXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgc25vd2ZsYWtlc1JlbW92ZWQgPSAwO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1heFNub3dmbGFrZXM7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc25vd2ZsYWtlcy5wdXNoKG5ldyBTbm93Zmxha2UoKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsYXN0QmFsbFNoYWtpbmdTdGF0ZSA9IGJhbGxTaGFraW5nO1xuXG4gICAgICAgICAgICAgICAgc25vd2ZsYWtlcy5mb3JFYWNoKHNub3dmbGFrZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghYmFsbFNoYWtpbmcpIHNub3dmbGFrZS5tb3ZlVG9Cb3R0b20oKTtcbiAgICAgICAgICAgICAgICAgICAgc25vd2ZsYWtlLnVwZGF0ZShiYWxsWCwgYmFsbFksIGJhbGxSYWRpdXMsIGJhbGxTaGFraW5nKTtcbiAgICAgICAgICAgICAgICAgICAgc25vd2ZsYWtlLmRyYXcoKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYW5pbWF0ZSgpO1xuXG59KSgpO1xuXG4vLyBzbm93ZmFsbCBhbmltYXRpb25cbiAgICBsZXQgaSA9IDE7XG4gICAgZnVuY3Rpb24gc2VuZFNoYWtlUmVxdWVzdCgpIHtcbiAgICAgICAgaWYgKCF1c2VySWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkZWJ1Zykge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgLy8gbnVtYmVyOiBpKyssXG4gICAgICAgICAgICAgICAgbnVtYmVyOiAnd2luTm90aGluZydcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcGFyYW1zID0ge3VzZXJpZDogdXNlcklkfTtcbiAgICAgICAgcmV0dXJuIHJlcXVlc3QoJy9zcGluJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXJhbXMpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGJ0blNoYWtlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9ncmVzc19fc2hha2VcIiksXG4gICAgICAgIGJhbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNwaGVyZVwiKSxcbiAgICAgICAgYmFsbEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3BoZXJlX19ib3hcIilcblxuICAgIGxldCBjdXJyZW50UHJpemU7XG4gICAgbGV0IHBhc3RQcml6ZTtcblxuXG5cbiAgICAvLyDQmtC+0LbQtdC9INC60LvQsNGBINCy0ZbQtNC/0L7QstGW0LTQsNGUINCy0LjQs9GA0LDQvdC+0LzRgyDQv9GA0LjQt9GDOlxuICAgIC8vIFwiX2lwaG9uZVwiIC0g0LLQuNCz0YDQsNC90L4gaVBob25lXG4gICAgLy8gXCJfdHZcIiAtINCy0LjQs9GA0LDQvdC+INGC0LXQu9C10LLRltC30L7RgFxuICAgIC8vIFwiX2pibFwiIC0g0LLQuNCz0YDQsNC90L4gSkJMLdC60L7Qu9C+0L3QutGDXG4gICAgLy8gXCJfbWVnb2dvXCIgLSDQstC40LPRgNCw0L3QviDQv9GW0LTQv9C40YHQutGDIE1lZ29nb1xuICAgIC8vIFwiX3Jlc3BpblwiIC0g0LTQvtC00LDRgtC60L7QstC1INC+0LHQtdGA0YLQsNC90L3Rj1xuICAgIC8vIFwiX25vdGhpbmdcIiAtINC90ZbRh9C+0LPQviDQvdC1INCy0LjQs9GA0LDQvdC+XG4gICAgLy8gXCJfcG9pbnRzNTBcIiAtINCy0LjQs9GA0LDQvdC+IDUwINCx0L7QvdGD0YHQvdC40YUg0LHQsNC70ZbQslxuICAgIC8vIFwiX2ZzMTBcIiAtINCy0LjQs9GA0LDQvdC+IDEwINGE0YDRltGB0L/RltC90ZbQslxuICAgIC8vIFwiX2ZzMjVcIiAtINCy0LjQs9GA0LDQvdC+IDI1INGE0YDRltGB0L/RltC90ZbQslxuICAgIC8vIFwiX2ZzNTBcIiAtINCy0LjQs9GA0LDQvdC+IDUwINGE0YDRltGB0L/RltC90ZbQslxuICAgIC8vIFwiX3NhdmVCZXQxMDBcIiAtINCy0LjQs9GA0LDQvdC+INGB0YLRgNCw0YXQvtCy0LrRgyDQvdCwIDEwMCDRgdGC0LDQstC+0LpcbiAgICAvLyBcIl9zYXZlQmV0MTUwXCIgLSDQstC40LPRgNCw0L3QviDRgdGC0YDQsNGF0L7QstC60YMg0L3QsCAxNTAg0YHRgtCw0LLQvtC6XG4gICAgLy8gXCJfc2F2ZUJldDIwMFwiIC0g0LLQuNCz0YDQsNC90L4g0YHRgtGA0LDRhdC+0LLQutGDINC90LAgMjAwINGB0YLQsNCy0L7QulxuICAgIC8vINGE0YPQvdC60YbRltGPIGluaXRTaGFrZSDQv9GA0L7QutC40LTRg9GUINC60LvQsNGB0Lgg0LLRltC00L/QvtCy0ZbQtNC90ZYg0L/RgNC40LfQsNC8INC90LAg0LHQu9C+0LogLnNwaGVyZSDQtNC70Y8g0LLRltC00L7QsdGA0LDQttC10L3QvdGPINC/0YDQuNC30YNcbiAgICBjb25zdCB3aW5DbGFzc2VzID0gW1xuICAgICAgICBcIl9pcGhvbmVcIiwgXCJfdHZcIiwgXCJfamJsXCIsIFwiX21lZ29nb1wiLCBcIl9yZXNwaW5cIiwgXCJfbm90aGluZ1wiLCBcIl9mczEwXCIsIFwiX2ZzMjVcIixcbiAgICAgICAgXCJfZnM1MFwiLCBcIl9zYXZlQmV0MTAwXCIsIFwiX3NhdmVCZXQxNTBcIiwgXCJfc2F2ZUJldDIwMFwiLCBcIl9wb2ludHM1MFwiXG4gICAgXTtcblxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlUHJpemUoYmFsbCwgYm94LCBidG4pe1xuICAgICAgICBiYWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJfYmVmb3JlLWhpZGVcIik7XG4gICAgICAgIHdpbkNsYXNzZXMuZm9yRWFjaChpdGVtID0+e1xuICAgICAgICAgICAgYmFsbC5jbGFzc0xpc3QucmVtb3ZlKGAke2l0ZW19YClcbiAgICAgICAgfSlcbiAgICAgICAgYm94LmNsYXNzTGlzdC5yZW1vdmUoXCJfYm94LW9wYWNpdHlcIilcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJfZGlzYWJsZWRcIilcblxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGFuaW1hdGVTaGFrZShiYWxsLCBib3gsIGJ0biwgcHJpemUsIHByaXplTnVtKSB7XG5cblxuICAgICAgICBjb25zdCBkZWxheSA9IChtcykgPT4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSlcblxuICAgICAgICByZW1vdmVQcml6ZShiYWxsLCBib3gsIGJ0bilcblxuICAgICAgICBpZihwcml6ZU51bSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcml6ZU51bSlcbiAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiX2Rpc2FibGVkXCIpO1xuICAgICAgICAgICAgYmFsbC5jbGFzc0xpc3QuYWRkKFwiX3NoYWtlXCIpO1xuICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJfc2hha2UtcmV2ZXJzZVwiKTtcblxuICAgICAgICAgICAgYXdhaXQgZGVsYXkoMjAwMClcblxuICAgICAgICAgICAgYmFsbC5jbGFzc0xpc3QucmVtb3ZlKFwiX3NoYWtlXCIpO1xuICAgICAgICAgICAgYmFsbC5jbGFzc0xpc3QuYWRkKFwiX2JlZm9yZS1oaWRlXCIpO1xuICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5yZW1vdmUoXCJfc2hha2UtcmV2ZXJzZVwiKTtcbiAgICAgICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwiX2JveC1vcGFjaXR5XCIpO1xuXG4gICAgICAgICAgICBhd2FpdCBkZWxheSgyMDApO1xuXG4gICAgICAgICAgICBiYWxsLmNsYXNzTGlzdC5hZGQoYCR7cHJpemV9YCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiX2Rpc2FibGVkXCIpO1xuICAgICAgICAgICAgYmFsbC5jbGFzc0xpc3QuYWRkKFwiX3NoYWtlXCIpO1xuICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJfc2hha2UtcmV2ZXJzZVwiKTtcblxuICAgICAgICAgICAgLy8gYXdhaXQgZGVsYXkoMjAwMClcblxuICAgICAgICAgICAgYmFsbC5jbGFzc0xpc3QucmVtb3ZlKFwiX3NoYWtlXCIpO1xuICAgICAgICAgICAgYmFsbC5jbGFzc0xpc3QuYWRkKFwiX2JlZm9yZS1oaWRlXCIpO1xuICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5yZW1vdmUoXCJfc2hha2UtcmV2ZXJzZVwiKTtcbiAgICAgICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwiX2JveC1vcGFjaXR5XCIpO1xuXG4gICAgICAgICAgICBpZihwcml6ZU51bSA9PT0gMCkgYXdhaXQgZGVsYXkoMjAwKTtcblxuICAgICAgICAgICAgYmFsbC5jbGFzc0xpc3QuYWRkKGAke3ByaXplfWApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXN0UHJpemUgPSBwcml6ZTtcblxuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdFNoYWtlKGJhbGwsIGJ0biwgYm94LCBwcml6ZU51bSkge1xuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICAgICAgc2VuZFNoYWtlUmVxdWVzdCgpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAgICAgICAgIGlmICghcmVzIHx8ICEhcmVzLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGJ0blNoYWtlLmNsYXNzTGlzdC5hZGQoJ3B1bHNlLWJ0bicpO1xuICAgICAgICAgICAgICAgICAgICBidG5TaGFrZS5jbGFzc0xpc3QucmVtb3ZlKCdfZGlzYWJsZWQnKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHByaXplID0gYF8ke3Jlcy5udW1iZXJ9YDtcbiAgICAgICAgICAgICAgICBjb25zdCBwcml6ZU51bSA9IHdpbkNsYXNzZXMuaW5kZXhPZihwcml6ZSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1ByaXplOicsIHByaXplKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUHJpemUgTnVtOicsIHByaXplTnVtKVxuICAgICAgICAgICAgICAgIGNvbnN0IHN0cmVha0JvbnVzID0gcmVzLnN0cmVha0JvbnVzIHx8IGRlYnVnO1xuICAgICAgICAgICAgICAgIGFuaW1hdGVTaGFrZShiYWxsLCBib3gsIGJ0biwgcHJpemUsIHByaXplTnVtKS5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihcImFuaW0gZXJyb3I6XCIsIGVycikpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgaW5pdFNoYWtlKGJhbGwsIGJ0blNoYWtlLCBiYWxsQm94KVxuXG4gICAgY29uc3QgYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYnRuXCIpLFxuICAgICAgICBvcyA9IGRldGVjdE9TKClcblxuICAgIGlmIChvcyA9PT0gXCJtYWNPU1wiIHx8IG9zID09PSBcImlPU1wiKXtcbiAgICAgICAgYnRucy5mb3JFYWNoKGJ0biA9PntcbiAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiX2lvc1wiKVxuICAgICAgICB9KVxuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gZGV0ZWN0T1MoKSB7XG4gICAgICAgIGNvbnN0IHVzZXJBZ2VudCA9IG5hdmlnYXRvci51c2VyQWdlbnQgfHwgbmF2aWdhdG9yLnZlbmRvciB8fCB3aW5kb3cub3BlcmE7XG4gICAgICAgIGNvbnN0IHBsYXRmb3JtID0gbmF2aWdhdG9yLnBsYXRmb3JtIHx8IFwidW5rbm93blwiO1xuICAgICAgICBsZXQgb3M7XG5cbiAgICAgICAgaWYgKC9hbmRyb2lkL2kudGVzdCh1c2VyQWdlbnQpICYmIC9saW51eCBhcm0vaS50ZXN0KHBsYXRmb3JtKSkge1xuICAgICAgICAgICAgb3MgPSBcIkFuZHJvaWRcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoL2lQYWR8aVBob25lfGlQb2QvLnRlc3QodXNlckFnZW50KSAmJiAhd2luZG93Lk1TU3RyZWFtKSB7XG4gICAgICAgICAgICBvcyA9IFwiaU9TXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKC9NYWNpbnRvc2h8TWFjSW50ZWx8TWFjUFBDfE1hYzY4Sy8udGVzdChwbGF0Zm9ybSkpIHtcbiAgICAgICAgICAgIG9zID0gXCJtYWNPU1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmICgvV2luMzJ8V2luNjR8V2luZG93c3xXT1c2NC8udGVzdChwbGF0Zm9ybSkpIHtcbiAgICAgICAgICAgIG9zID0gXCJXaW5kb3dzXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKC9MaW51eC8udGVzdChwbGF0Zm9ybSkgJiYgIS9hbmRyb2lkL2kudGVzdCh1c2VyQWdlbnQpKSB7XG4gICAgICAgICAgICBvcyA9IFwiTGludXhcIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3NcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhcItCe0L/QtdGA0LDRhtGW0LnQvdCwINGB0LjRgdGC0LXQvNCwOlwiLCBvcyk7XG5cbiAgICBjb25zdCBoYW5kbGVSZXNpemUgPSAoKSA9PntcbiAgICAgICAgbGV0IHRvdWNoU3RhcnRYID0gMDtcbiAgICAgICAgbGV0IHRvdWNoRW5kWCA9IDA7XG5cbiAgICAgICAgY2FyZHNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdG91Y2hTdGFydFggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5zY3JlZW5YO1xuICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgIGNhcmRzQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0b3VjaEVuZFggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5zY3JlZW5YO1xuICAgICAgICAgICAgaGFuZGxlU3dpcGUoKTtcbiAgICAgICAgfSwgZmFsc2UpO1xuXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZVN3aXBlKCkge1xuICAgICAgICAgICAgY29uc3Qgc3dpcGVUaHJlc2hvbGQgPSA1MDtcbiAgICAgICAgICAgIGlmICh0b3VjaEVuZFggPCB0b3VjaFN0YXJ0WCAtIHN3aXBlVGhyZXNob2xkKSB7XG4gICAgICAgICAgICAgICAgbW92ZVJpZ2h0KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0b3VjaEVuZFggPiB0b3VjaFN0YXJ0WCArIHN3aXBlVGhyZXNob2xkKSB7XG4gICAgICAgICAgICAgICAgbW92ZUxlZnQoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG1vdmVSaWdodEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1vdmVSaWdodCk7XG4gICAgICAgIG1vdmVMZWZ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbW92ZUxlZnQpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9yaWVudGF0aW9uY2hhbmdlXCIsICgpID0+e1xuICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBoYW5kbGVSZXNpemUoKVxuXG5cbiAgICAvLyBmb3IgdGVzdFxuICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGFyay1idG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgIC8vICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJkYXJrXCIpXG4gICAgLy8gfSlcbiAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVuLWJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgLy8gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmF2LXBhZ2VcIikuY2xhc3NMaXN0LnRvZ2dsZShcImVuXCIpXG4gICAgLy8gfSlcbiAgICAvL1xuICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVzdE1lbnVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG4gICAgLy8gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJpemVzLWJ0bnNcIikuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIilcbiAgICAvLyB9KVxuXG59KSgpO1xuIl19
