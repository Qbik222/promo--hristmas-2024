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
  var unauthMsgs = document.querySelectorAll('.unauth-msg'),
    participateBtns = document.querySelectorAll('.btn-join'),
    redirectBtns = document.querySelectorAll('.took-part'),
    topResultsTable = document.getElementById('top-users'),
    weeksSelector = document.querySelectorAll('.table__toggle-item'),
    weeksContainer = document.querySelector('.table__toggle'),
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
  userId = 7777771;

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
  var renderUsers = function renderUsers(users) {
    topResultsTable.classList.remove('hide');
    // resultsTableOther.classList.remove('hide');

    if (users && users.length) {
      var topUsers = users.slice(0, 10);
      var currentUser = userId && users.find(function (user) {
        return user.userid === userId;
      });
      var currentUserIndex = currentUser && users.indexOf(currentUser);
      if (currentUserIndex > 10) {
        topUsers.push(currentUser);
      }
      populateUsersTable(topUsers, userId, topResultsTable, users);

      //     const currentUserQuestIndex = currentUser && questUsers.indexOf(currentUser);

      //     let otherUsers;
      //     if (!currentUserIndex || currentUserIndex < 10) {
      //         otherUsers = users.slice(10, 13);
      //     } else {
      //         otherUsers = users.slice(Math.max(currentUserIndex - 1, 10), currentUserIndex + 2);
      //     }

      //     let otherQuestUsers;
      //     if (!currentUserQuestIndex || currentUserQuestIndex < 10) {
      //         otherQuestUsers = questUsers.slice(10, 13);
      //     } else {
      //         otherQuestUsers = questUsers.slice(Math.max(currentUserQuestIndex - 1, 10), currentUserQuestIndex + 2);
      //     }

      //     if (otherUsers && otherUsers.length) {
      //         populateUsersTable(otherUsers, userId, resultsTableOther, users);
      //         populateUsersTable(otherQuestUsers, userId, questTableOther, questUsers, true);
      //     }
    }
  };

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
        console.log(res);
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
      weeksContainer.classList.add('hide');
      return;
    }
    for (var _i2 = 0; _i2 < 4; _i2++) {
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
    } else {
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
    console.log(noSpinItem);
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwidW5hdXRoTXNncyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInBhcnRpY2lwYXRlQnRucyIsInJlZGlyZWN0QnRucyIsInRvcFJlc3VsdHNUYWJsZSIsImdldEVsZW1lbnRCeUlkIiwid2Vla3NTZWxlY3RvciIsIndlZWtzQ29udGFpbmVyIiwicXVlcnlTZWxlY3RvciIsIm1haW5QYWdlIiwiYmFsbFdyYXAiLCJndWlkZVdyYXAiLCJnYW1lV3JhcCIsInVrTGVuZyIsImVuTGVuZyIsImxvY2FsZSIsImkxOG5EYXRhIiwiZGVidWciLCJzZWxlY3RlZFdlZWtUYWJJZCIsInVzZXJJZCIsImxvYWRUcmFuc2xhdGlvbnMiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwidHJhbnNsYXRlIiwibXV0YXRpb25PYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJtdXRhdGlvbnMiLCJvYnNlcnZlIiwiY2hpbGRMaXN0Iiwic3VidHJlZSIsImVsZW1zIiwibGVuZ3RoIiwiZm9yRWFjaCIsImVsZW0iLCJrZXkiLCJnZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJyZW1vdmVBdHRyaWJ1dGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZWZyZXNoTG9jYWxpemVkQ2xhc3MiLCJlbGVtZW50IiwiYmFzZUNzc0NsYXNzIiwibGFuZyIsInJlbW92ZSIsImdldFVzZXJzIiwid2VlayIsInVybCIsInJlc29sdmVVc2Vyc1VybCIsInJlcXVlc3QiLCJ1c2VycyIsIm1hcCIsInVzZXJPcklkIiwidXNlcmlkIiwiSW5pdFBhZ2UiLCJ3IiwiaSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicyIsInJlZnJlc2hVc2VycyIsImluaXQiLCJyZWZyZXNoV2Vla1RhYnMiLCJ3aW5kb3ciLCJzdG9yZSIsInN0YXRlIiwiZ2V0U3RhdGUiLCJhdXRoIiwiaXNBdXRob3JpemVkIiwiaWQiLCJjaGVja1VzZXJBdXRoIiwic2V0dXBQYWdlIiwiYyIsInNldEludGVydmFsIiwiZ191c2VyX2lkIiwiY2xlYXJJbnRlcnZhbCIsImF1dGhCdG4iLCJwcmV2ZW50RGVmYXVsdCIsInBhcnRpY2lwYXRlIiwicGFyYW1zIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJpdGVtIiwicmVuZGVyVXNlcnMiLCJ0b3BVc2VycyIsInNsaWNlIiwiY3VycmVudFVzZXIiLCJmaW5kIiwidXNlciIsImN1cnJlbnRVc2VySW5kZXgiLCJpbmRleE9mIiwicHVzaCIsInBvcHVsYXRlVXNlcnNUYWJsZSIsInVwZGF0ZVdhZ2VyIiwicmFuayIsInByaXplVGV4dCIsImN1cnJlbnRVc2VySWQiLCJ0YWJsZSIsImFsbFVzZXJzIiwiaW5kZXgiLCJjaGVja0N1cnJlbnRVc2VyIiwiYWRkaXRpb25hbFVzZXJSb3ciLCJjcmVhdGVFbGVtZW50IiwicGxhY2UiLCJwbGFjZUNsYXNzIiwicHJpemVLZXkiLCJnZXRQcml6ZVRyYW5zbGF0aW9uS2V5IiwicHJpemVWYWx1ZSIsIm1hc2tVc2VySWQiLCJwb2ludHMiLCJpc05hTiIsInRyYW5zbGF0ZUtleSIsImFwcGVuZCIsInRvU3RyaW5nIiwibGluayIsImV4dHJhT3B0aW9ucyIsImhlYWRlcnMiLCJ1bmF1dGhNZXMiLCJjb25zb2xlIiwibG9nIiwicG9pbnRzUGVyRGF5Iiwic3BpbkFsbG93ZWQiLCJzcGluc1N0cmVhayIsInNwaW5zIiwicmVmcmVzaFdoZWVsIiwicmVmcmVzaERhaWx5UG9pbnRzU2VjdGlvbiIsImRpc3BsYXlVc2VyU3BpbnMiLCJwYXJ0aWNpcGF0ZUJ0biIsIlByb21pc2UiLCJyZXNvbHZlIiwiY2FsY3VsYXRlUmVjZW50UHJvbW9XZWVrcyIsIndlZWtTZWxlY3RvciIsImRhdGUiLCJEYXRlIiwibm93IiwidXNlckluZm8iLCJNYXRoIiwibWluIiwiY3VycmVudFNwYW4iLCJwcm9ncmVzc0xpbmUiLCJwcm9ncmVzcyIsInN0eWxlIiwid2lkdGgiLCJzcGluSXRlbSIsIm5vU3Bpbkl0ZW0iLCJzcGluIiwic3BpbkRhdGUiLCJmb3JtYXR0ZWREYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwic3Bpbk5hbWUiLCJuYW1lIiwic3BpbkVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsInNldFRpbWVvdXQiLCJjYXJkc0NvbnRhaW5lciIsImNhcmRzIiwiY2FyZHNXcmFwIiwibW92ZVJpZ2h0QnV0dG9uIiwibW92ZUxlZnRCdXR0b24iLCJ0YWJzQ29udGFpbmVyIiwiaXNNb2JpbGUiLCJpbm5lcldpZHRoIiwidG90YWxDYXJkcyIsImNhcmRXaWR0aCIsImNsaWVudFdpZHRoIiwiY2FyZHNNYXJnaW4iLCJ2aXNpYmxlU2xpZGVzIiwiY2VpbCIsInRvdGFsVGFicyIsInRhYldpZHRoIiwiY3VycmVudFNsaWRlIiwiY2FyZHNQb3NpdGlvbiIsImxlZnRTbGlkZSIsInJpZ2h0U2xpZGUiLCJ1cGRhdGVBY3RpdmVDYXJkIiwiYWN0aXZlSW5kZXgiLCJjYXJkIiwibGVmdFNsaWRlVGFiIiwicmlnaHRTbGlkZVRhYiIsImZpcnN0TGFzdFNsaWRlcyIsInNldENhcmRzUG9zaXRpb24iLCJwb3NpdGlvbiIsInRyYW5zZm9ybSIsIm1vdmVSaWdodCIsIm1heFBvc2l0aW9uIiwiaGlkZVBvcHVwc09uQnRuIiwicHJpemVQb3B1cEl0ZW0iLCJtb3ZlTGVmdCIsInNldFBvcHVwcyIsInBvcHVwcyIsInBvcHVwc0J0bnMiLCJidG4iLCJwb3B1cCIsImoiLCJwcml6ZU9wZW5CdG5zIiwicHJpemVDbG9zZUJ0bnMiLCJndWlkZVBvcHVwc1dyYXAiLCJndWlkZU9wZW5CdG5zIiwiZ3VpZGVDbG9zZUJ0bnMiLCJ0YWJsZVBvcHVwIiwidGFibGVQb3B1cENsb3NlIiwidGFibGVQb3B1cE9wZW4iLCJiYWxsUG9wdXAiLCJiYWxsUG9wdXBDbG9zZSIsImJhbGxQb3B1cE9wZW4iLCJjb250YWlucyIsInRhcmdldCIsIm92ZXJmbG93IiwiQ09VTlQiLCJTbm93c3Rvcm0iLCJtYXN0aGVhZCIsImNhbnZhcyIsImN0eCIsImdldENvbnRleHQiLCJoZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJhY3RpdmUiLCJzbm93Zmxha2VzIiwicHJvdG90eXBlIiwibGVmdCIsInRvcCIsIm9uUmVzaXplIiwiYmluZCIsInNub3dmbGFrZSIsIlNub3dmbGFrZSIsInJlc2V0IiwicmVxdWVzdEFuaW1GcmFtZSIsInVwZGF0ZSIsImZpbGxTdHlsZSIsIndhc0FjdGl2ZSIsImNsZWFyUmVjdCIsInkiLCJ2eSIsIngiLCJ2eCIsImdsb2JhbEFscGhhIiwibyIsImJlZ2luUGF0aCIsImFyYyIsInIiLCJQSSIsImNsb3NlUGF0aCIsImZpbGwiLCJzbm93c3Rvcm0iLCJyYW5kb20iLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ3ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjYWxsYmFjayIsInNraWVzIiwic2t5IiwiYmFsbCIsInBhcmVudEVsZW1lbnQiLCJtYXhTbm93Zmxha2VzIiwibWF4U3BlZWQiLCJzdG9ybUNvdW50ZXIiLCJzbm93Zmxha2VzUmVtb3ZlZCIsInJhZGl1cyIsInNwZWVkWCIsInNwZWVkWSIsImFjY2VsZXJhdGlvbiIsIm1vdmluZ1RvQm90dG9tIiwiYmFsbFgiLCJiYWxsWSIsImJhbGxSYWRpdXMiLCJiYWxsU2hha2luZyIsInRhcmdldFNwZWVkIiwic3BlZWREZWNheUZhY3RvciIsIm1heCIsImR4IiwiZHkiLCJkaXN0YW5jZSIsInNxcnQiLCJhbmdsZSIsImF0YW4yIiwib3ZlcmxhcCIsImNvcyIsInNpbiIsInNwbGljZSIsImxhc3RCYWxsU2hha2luZ1N0YXRlIiwiYW5pbWF0ZSIsImJhbGxUcmFuc2Zvcm0iLCJnZXRDb21wdXRlZFN0eWxlIiwib2Zmc2V0V2lkdGgiLCJtYXRyaXgiLCJET01NYXRyaXgiLCJvZmZzZXRMZWZ0IiwibTQxIiwib2Zmc2V0VG9wIiwibTQyIiwibW92ZVRvQm90dG9tIiwiZHJhdyIsInNlbmRTaGFrZVJlcXVlc3QiLCJudW1iZXIiLCJidG5TaGFrZSIsImJhbGxCb3giLCJjdXJyZW50UHJpemUiLCJwYXN0UHJpemUiLCJ3aW5DbGFzc2VzIiwicmVtb3ZlUHJpemUiLCJib3giLCJhbmltYXRlU2hha2UiLCJwcml6ZSIsInByaXplTnVtIiwiZGVsYXkiLCJtcyIsImluaXRTaGFrZSIsImVycm9yIiwic3RyZWFrQm9udXMiLCJlcnIiLCJidG5zIiwib3MiLCJkZXRlY3RPUyIsInVzZXJBZ2VudCIsIm5hdmlnYXRvciIsInZlbmRvciIsIm9wZXJhIiwicGxhdGZvcm0iLCJ0ZXN0IiwiTVNTdHJlYW0iLCJoYW5kbGVSZXNpemUiLCJ0b3VjaFN0YXJ0WCIsInRvdWNoRW5kWCIsImV2ZW50IiwiY2hhbmdlZFRvdWNoZXMiLCJzY3JlZW5YIiwiaGFuZGxlU3dpcGUiLCJzd2lwZVRocmVzaG9sZCIsImxvY2F0aW9uIiwicmVsb2FkIl0sIm1hcHBpbmdzIjoiOzs7K0NBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBLENBQUMsWUFBWTtFQUNULElBQU1BLE1BQU0sR0FBRyxxQ0FBcUM7RUFFcEQsSUFDSUMsVUFBVSxHQUFHQyxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQztJQUNyREMsZUFBZSxHQUFHRixRQUFRLENBQUNDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQztJQUN4REUsWUFBWSxHQUFHSCxRQUFRLENBQUNDLGdCQUFnQixDQUFDLFlBQVksQ0FBQztJQUN0REcsZUFBZSxHQUFHSixRQUFRLENBQUNLLGNBQWMsQ0FBQyxXQUFXLENBQUM7SUFDdERDLGFBQWEsR0FBR04sUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxxQkFBcUIsQ0FBQztJQUNoRU0sY0FBYyxHQUFHUCxRQUFRLENBQUNRLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztJQUN6REMsUUFBUSxHQUFHVCxRQUFRLENBQUNRLGFBQWEsQ0FBQyxXQUFXLENBQUM7SUFDOUNFLFFBQVEsR0FBR1YsUUFBUSxDQUFDUSxh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O1FBQzFDNUksUUFBUSxFQUFFO01BQ2Q7SUFDSjtJQUNBOUIsZUFBZSxDQUFDdEcsZ0JBQWdCLENBQUMsT0FBTyxFQUFFZ0ksU0FBUyxDQUFDO0lBQ3BEekIsY0FBYyxDQUFDdkcsZ0JBQWdCLENBQUMsT0FBTyxFQUFFb0ksUUFBUSxDQUFDO0lBQ2xEOUgsTUFBTSxDQUFDTixnQkFBZ0IsQ0FBQyxtQkFBbUIsRUFBRSxZQUFLO01BQzlDaVIsUUFBUSxDQUFDQyxNQUFNLEVBQUU7SUFDckIsQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUVEVCxZQUFZLEVBQUU7O0VBR2Q7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtBQUVKLENBQUMsR0FBRyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBhcGlVUkwgPSAnaHR0cHM6Ly9mYXYtcHJvbS5jb20vYXBpX3doZWVsXzIwMjUnXG5cbiAgICBjb25zdFxuICAgICAgICB1bmF1dGhNc2dzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnVuYXV0aC1tc2cnKSxcbiAgICAgICAgcGFydGljaXBhdGVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bi1qb2luJyksXG4gICAgICAgIHJlZGlyZWN0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b29rLXBhcnQnKSxcbiAgICAgICAgdG9wUmVzdWx0c1RhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvcC11c2VycycpLFxuICAgICAgICB3ZWVrc1NlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYmxlX190b2dnbGUtaXRlbScpLFxuICAgICAgICB3ZWVrc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWJsZV9fdG9nZ2xlJyksXG4gICAgICAgIG1haW5QYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhdi1wYWdlJyksXG4gICAgICAgIGJhbGxXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhbGwnKSxcbiAgICAgICAgZ3VpZGVXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmd1aWRlJyksXG4gICAgICAgIGdhbWVXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVzJyk7XG5cbiAgICBjb25zdCB1a0xlbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdWtMZW5nJyk7XG4gICAgY29uc3QgZW5MZW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VuTGVuZycpO1xuXG5cbiAgICBsZXQgbG9jYWxlID0gJ3VrJztcblxuICAgIC8vIGNvbnNvbGUubG9nKHdlZWspXG4gICAgLy9cbiAgICAvLyBmdW5jdGlvbiBzZXRTdGF0ZShuZXdMb2NhbGUpIHtcbiAgICAvLyAgICAgbG9jYWxlID0gbmV3TG9jYWxlO1xuICAgIC8vICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdsb2NhbGUnLCBsb2NhbGUpO1xuICAgIC8vIH1cbiAgICAvLyBmdW5jdGlvbiB0b2dnbGVTdGF0ZSgpIHtcbiAgICAvLyAgICAgY29uc3QgbmV3TG9jYWxlID0gbG9jYWxlID09PSAnZW4nID8gJ3VrJyA6ICdlbic7XG4gICAgLy8gICAgIHNldFN0YXRlKG5ld0xvY2FsZSk7XG4gICAgLy8gICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICAgIC8vIH1cbiAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW4tYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgLy8gICAgIHRvZ2dsZVN0YXRlKCk7XG4gICAgLy8gfSk7XG5cbiAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2Vlay1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAvLyAgICAgY29uc29sZS5sb2cod2VlaylcbiAgICAvLyAgICAgaWYod2VlayA9PT0gMSl7XG4gICAgLy8gICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuX3dlZWsxJykuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXG4gICAgLy8gICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuX3dlZWsyJykuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgLy8gICAgICAgICByZXR1cm4gd2VlayA9IDJcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBpZih3ZWVrID09PSAyKXtcbiAgICAvLyAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5fd2VlazInKS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCJcbiAgICAvLyAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5fd2VlazEnKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAvLyAgICAgICAgIHdlZWsgPSAxXG4gICAgLy8gICAgIH1cbiAgICAvLyB9KTtcblxuICAgIGlmICh1a0xlbmcpIGxvY2FsZSA9ICd1ayc7XG4gICAgaWYgKGVuTGVuZykgbG9jYWxlID0gJ2VuJztcblxuXG4gICAgbGV0IGkxOG5EYXRhID0ge307XG4gICAgY29uc3QgZGVidWcgPSBmYWxzZTtcbiAgICBsZXQgc2VsZWN0ZWRXZWVrVGFiSWQgPSAwO1xuICAgIGxldCB1c2VySWQ7XG4gICAgdXNlcklkID0gNzc3Nzc3MTtcblxuICAgIC8vIHVzZXJJZCA9IE51bWJlcihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpKTtcbiAgICAvL1xuICAgIC8vIGNvbnNvbGUubG9nKHR5cGVvZiB1c2VySWQpXG4gICAgLy9cbiAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvY2stYnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAvLyAgICAgdXNlcklkID8gc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcInVzZXJJZFwiKSA6IHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJ1c2VySWRcIiwgJzEwMTIzNDg2MScpXG4gICAgLy8gICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICAgIC8vIH0pXG5cbiAgICAvLyBpZih3ZWVrID09PSAxKXtcbiAgICAvLyAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLl93ZWVrMScpLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxuICAgIC8vIH1cbiAgICAvLyBpZih3ZWVrID09PSAyKXtcbiAgICAvLyAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLl93ZWVrMicpLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxuICAgIC8vIH1cblxuICAgIGZ1bmN0aW9uIGxvYWRUcmFuc2xhdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiBmZXRjaChgJHthcGlVUkx9L3RyYW5zbGF0ZXMvJHtsb2NhbGV9YCkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgICAgIGkxOG5EYXRhID0ganNvbjtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGUoKTtcblxuICAgICAgICAgICAgICAgIHZhciBtdXRhdGlvbk9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKG11dGF0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NhbScpLCB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgc3VidHJlZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJhbnNsYXRlKCkge1xuICAgICAgICBjb25zdCBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRyYW5zbGF0ZV0nKVxuICAgICAgICBpZiAoZWxlbXMgJiYgZWxlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBlbGVtcy5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgICAgICAgICAgICAgIGVsZW0uaW5uZXJIVE1MID0gaTE4bkRhdGFba2V5XSB8fCAnKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiAgIGtleTogICcgKyBrZXk7XG4gICAgICAgICAgICAgICAgZWxlbS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGlmIChsb2NhbGUgPT09ICdlbicpIHtcbiAgICAgICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5hZGQoJ2VuJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmVmcmVzaExvY2FsaXplZENsYXNzKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVmcmVzaExvY2FsaXplZENsYXNzKGVsZW1lbnQsIGJhc2VDc3NDbGFzcykge1xuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGxhbmcgb2YgWyd1aycsICdlbiddKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoYmFzZUNzc0NsYXNzICsgbGFuZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGJhc2VDc3NDbGFzcyArIGxvY2FsZSk7XG4gICAgfVxuXG5cbiAgICAvL25ld1xuICAgIGZ1bmN0aW9uIGdldFVzZXJzKHdlZWspIHtcbiAgICAgICAgY29uc3QgdXJsID0gcmVzb2x2ZVVzZXJzVXJsKHdlZWspO1xuICAgICAgICByZXR1cm4gcmVxdWVzdCh1cmwpXG4gICAgICAgICAgICAudGhlbih1c2VycyA9PiB1c2Vycy5tYXAodXNlck9ySWQgPT4gdHlwZW9mIHVzZXJPcklkID09PSAnbnVtYmVyJyA/IHt1c2VyaWQ6IHVzZXJPcklkfSA6IHVzZXJPcklkKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzb2x2ZVVzZXJzVXJsKHdlZWspIHtcbiAgICAgICAgcmV0dXJuIHdlZWsgPyBgL3dlZWstdXNlcnMvJHt3ZWVrfWAgOiAnL3VzZXJzJztcbiAgICB9XG5cbiAgICBjb25zdCBJbml0UGFnZSA9ICgpID0+IHtcbiAgICAgICAgd2Vla3NTZWxlY3Rvci5mb3JFYWNoKCh3LCBpKSA9PiB3LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICBpZiAoaSA9PT0gc2VsZWN0ZWRXZWVrVGFiSWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3ZWVrc1NlbGVjdG9yLmZvckVhY2gocyA9PiBzLmNsYXNzTGlzdC5yZW1vdmUoJ19hY3RpdmUnKSk7XG4gICAgICAgICAgICB3LmNsYXNzTGlzdC5hZGQoJ19hY3RpdmUnKTtcbiAgICAgICAgICAgIHNlbGVjdGVkV2Vla1RhYklkID0gaTtcbiAgICAgICAgICAgIHJlZnJlc2hVc2VycyhzZWxlY3RlZFdlZWtUYWJJZCArIDEpO1xuICAgICAgICB9KSk7XG5cbiAgICAgICAgcmVmcmVzaFVzZXJzKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgcmVmcmVzaFdlZWtUYWJzKCk7XG4gICAgICAgIGlmICh3aW5kb3cuc3RvcmUpIHtcbiAgICAgICAgICAgIHZhciBzdGF0ZSA9IHdpbmRvdy5zdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgICAgICAgdXNlcklkID0gc3RhdGUuYXV0aC5pc0F1dGhvcml6ZWQgJiYgc3RhdGUuYXV0aC5pZCB8fCAnJztcbiAgICAgICAgICAgIGNoZWNrVXNlckF1dGgoKS50aGVuKHNldHVwUGFnZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaGVja1VzZXJBdXRoKCkudGhlbihzZXR1cFBhZ2UpO1xuICAgICAgICAgICAgbGV0IGMgPSAwO1xuICAgICAgICAgICAgdmFyIGkgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGMgPCA1MCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoISF3aW5kb3cuZ191c2VyX2lkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQgPSB3aW5kb3cuZ191c2VyX2lkO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tVc2VyQXV0aCgpLnRoZW4oc2V0dXBQYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgIH1cblxuICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaCgoYXV0aEJ0biwgaSkgPT4ge1xuICAgICAgICAgICAgYXV0aEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0dXBQYWdlKCkge1xuICAgICAgICBJbml0UGFnZSgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBhcnRpY2lwYXRlKCkge1xuICAgICAgICBpZiAoIXVzZXJJZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcGFyYW1zID0ge3VzZXJpZDogdXNlcklkfTtcbiAgICAgICAgcmVxdWVzdCgnL3VzZXInLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhcmFtcylcbiAgICAgICAgfSkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgcGFydGljaXBhdGVCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XG4gICAgICAgICAgICByZWRpcmVjdEJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcbiAgICAgICAgICAgIGJhbGxXcmFwLmNsYXNzTGlzdC5yZW1vdmUoJ19zaWduJyk7XG4gICAgICAgICAgICBzZXR1cFBhZ2UoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVmcmVzaFVzZXJzKHdlZWspIHtcbiAgICAgICAgZ2V0VXNlcnMod2VlaykudGhlbih1c2VycyA9PiB7XG4gICAgICAgICAgICByZW5kZXJVc2Vycyh1c2Vycyk7XG4gICAgICAgICAgICB0cmFuc2xhdGUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyVXNlcnMgPSAodXNlcnMpID0+IHtcbiAgICAgICAgdG9wUmVzdWx0c1RhYmxlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgLy8gcmVzdWx0c1RhYmxlT3RoZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuXG4gICAgICAgIGlmICh1c2VycyAmJiB1c2Vycy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGxldCB0b3BVc2VycyA9IHVzZXJzLnNsaWNlKDAsIDEwKTtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRVc2VyID0gdXNlcklkICYmIHVzZXJzLmZpbmQodXNlciA9PiB1c2VyLnVzZXJpZCA9PT0gdXNlcklkKTtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRVc2VySW5kZXggPSBjdXJyZW50VXNlciAmJiB1c2Vycy5pbmRleE9mKGN1cnJlbnRVc2VyKTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50VXNlckluZGV4ID4gMTApIHtcbiAgICAgICAgICAgICAgICB0b3BVc2Vycy5wdXNoKGN1cnJlbnRVc2VyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBvcHVsYXRlVXNlcnNUYWJsZSh0b3BVc2VycywgdXNlcklkLCB0b3BSZXN1bHRzVGFibGUsIHVzZXJzKTtcblxuICAgICAgICAgICAgLy8gICAgIGNvbnN0IGN1cnJlbnRVc2VyUXVlc3RJbmRleCA9IGN1cnJlbnRVc2VyICYmIHF1ZXN0VXNlcnMuaW5kZXhPZihjdXJyZW50VXNlcik7XG5cbiAgICAgICAgICAgIC8vICAgICBsZXQgb3RoZXJVc2VycztcbiAgICAgICAgICAgIC8vICAgICBpZiAoIWN1cnJlbnRVc2VySW5kZXggfHwgY3VycmVudFVzZXJJbmRleCA8IDEwKSB7XG4gICAgICAgICAgICAvLyAgICAgICAgIG90aGVyVXNlcnMgPSB1c2Vycy5zbGljZSgxMCwgMTMpO1xuICAgICAgICAgICAgLy8gICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyAgICAgICAgIG90aGVyVXNlcnMgPSB1c2Vycy5zbGljZShNYXRoLm1heChjdXJyZW50VXNlckluZGV4IC0gMSwgMTApLCBjdXJyZW50VXNlckluZGV4ICsgMik7XG4gICAgICAgICAgICAvLyAgICAgfVxuXG4gICAgICAgICAgICAvLyAgICAgbGV0IG90aGVyUXVlc3RVc2VycztcbiAgICAgICAgICAgIC8vICAgICBpZiAoIWN1cnJlbnRVc2VyUXVlc3RJbmRleCB8fCBjdXJyZW50VXNlclF1ZXN0SW5kZXggPCAxMCkge1xuICAgICAgICAgICAgLy8gICAgICAgICBvdGhlclF1ZXN0VXNlcnMgPSBxdWVzdFVzZXJzLnNsaWNlKDEwLCAxMyk7XG4gICAgICAgICAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgb3RoZXJRdWVzdFVzZXJzID0gcXVlc3RVc2Vycy5zbGljZShNYXRoLm1heChjdXJyZW50VXNlclF1ZXN0SW5kZXggLSAxLCAxMCksIGN1cnJlbnRVc2VyUXVlc3RJbmRleCArIDIpO1xuICAgICAgICAgICAgLy8gICAgIH1cblxuICAgICAgICAgICAgLy8gICAgIGlmIChvdGhlclVzZXJzICYmIG90aGVyVXNlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyAgICAgICAgIHBvcHVsYXRlVXNlcnNUYWJsZShvdGhlclVzZXJzLCB1c2VySWQsIHJlc3VsdHNUYWJsZU90aGVyLCB1c2Vycyk7XG4gICAgICAgICAgICAvLyAgICAgICAgIHBvcHVsYXRlVXNlcnNUYWJsZShvdGhlclF1ZXN0VXNlcnMsIHVzZXJJZCwgcXVlc3RUYWJsZU90aGVyLCBxdWVzdFVzZXJzLCB0cnVlKTtcbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVXYWdlcihyYW5rKSB7XG4gICAgICAgIGxldCBwcml6ZVRleHQgPSAnLSc7XG4gICAgICAgIGlmIChyYW5rID49IDExICYmIHJhbmsgPD0gNTApIHtcbiAgICAgICAgICAgIHByaXplVGV4dCA9ICd4MSc7XG4gICAgICAgIH0gZWxzZSBpZiAocmFuayA+PSA1MSAmJiByYW5rIDw9IDE1MCkge1xuICAgICAgICAgICAgcHJpemVUZXh0ID0gJ3gyJztcbiAgICAgICAgfSBlbHNlIGlmIChyYW5rID49IDE1MSAmJiByYW5rIDw9IDMwMCkge1xuICAgICAgICAgICAgcHJpemVUZXh0ID0gJ3gzJztcbiAgICAgICAgfSBlbHNlIGlmIChyYW5rID49IDMwMSAmJiByYW5rIDw9IDQwMCkge1xuICAgICAgICAgICAgcHJpemVUZXh0ID0gJ3g0JztcbiAgICAgICAgfSBlbHNlIGlmIChyYW5rID49IDQwMSAmJiByYW5rIDw9IDU1MCkge1xuICAgICAgICAgICAgcHJpemVUZXh0ID0gJ3g1JztcbiAgICAgICAgfSBlbHNlIGlmIChyYW5rID49IDU1MSAmJiByYW5rIDw9IDc1MCkge1xuICAgICAgICAgICAgcHJpemVUZXh0ID0gJy0nO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcml6ZVRleHQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcG9wdWxhdGVVc2Vyc1RhYmxlKHVzZXJzLCBjdXJyZW50VXNlcklkLCB0YWJsZSwgYWxsVXNlcnMpIHtcbiAgICAgICAgdGFibGUuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGlmICh1c2VycyAmJiB1c2Vycy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHVzZXJzLmZvckVhY2goKHVzZXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hlY2tDdXJyZW50VXNlciA9IGN1cnJlbnRVc2VySWQgJiYgY3VycmVudFVzZXJJZCA9PT0gdXNlci51c2VyaWQ7XG4gICAgICAgICAgICAgICAgY29uc3QgYWRkaXRpb25hbFVzZXJSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tDdXJyZW50VXNlcikge1xuICAgICAgICAgICAgICAgICAgICBhZGRpdGlvbmFsVXNlclJvdy5jbGFzc0xpc3QuYWRkKCd5b3UnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBwbGFjZSA9IGFsbFVzZXJzLmluZGV4T2YodXNlcikgKyAxO1xuXG4gICAgICAgICAgICAgICAgbGV0IHBsYWNlQ2xhc3M7XG4gICAgICAgICAgICAgICAgaWYgKHRhYmxlLmlkID09PSAndG9wLXVzZXJzJyB8fCB0YWJsZS5pZCA9PT0gJ3F1ZXN0c1RhYmxlJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlQ2xhc3MgPSAnZ29sZCc7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlQ2xhc3MgPSAnc2lsdmVyJztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpbmRleCA9PT0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VDbGFzcyA9ICdicm9uemUnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgcHJpemVLZXkgPSBnZXRQcml6ZVRyYW5zbGF0aW9uS2V5KHBsYWNlKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwcml6ZVZhbHVlID0gdXBkYXRlV2FnZXIocGxhY2UpO1xuICAgICAgICAgICAgICAgIGFkZGl0aW9uYWxVc2VyUm93LmNsYXNzTGlzdC5hZGQoJ3RhYmxlX19ib2R5LXJvdycpO1xuICAgICAgICAgICAgICAgIGlmIChwbGFjZUNsYXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZGl0aW9uYWxVc2VyUm93LmNsYXNzTGlzdC5hZGQocGxhY2VDbGFzcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFkZGl0aW9uYWxVc2VyUm93LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX2JvZHktcm93LWl0ZW1cIj4ke3BsYWNlfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fYm9keS1yb3ctaXRlbVwiPiR7Y2hlY2tDdXJyZW50VXNlciA/IHVzZXIudXNlcmlkIDogbWFza1VzZXJJZCh1c2VyLnVzZXJpZCl9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19ib2R5LXJvdy1pdGVtXCI+JHt1c2VyLnBvaW50cyAmJiAhaXNOYU4odXNlci5wb2ludHMpID8gdXNlci5wb2ludHMgOiAwfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fYm9keS1yb3ctaXRlbVwiPiR7cHJpemVLZXkgPyB0cmFuc2xhdGVLZXkocHJpemVLZXkpIDogJyAtICd9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19ib2R5LXJvdy1pdGVtXCI+JHtwcml6ZVZhbHVlfTwvZGl2PlxuICAgICAgICAgICAgYDtcbiAgICAgICAgICAgICAgICB0YWJsZS5hcHBlbmQoYWRkaXRpb25hbFVzZXJSb3cpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRQcml6ZVRyYW5zbGF0aW9uS2V5KHBsYWNlKSB7XG4gICAgICAgIGlmIChwbGFjZSA8PSAxMCkge1xuICAgICAgICAgICAgcmV0dXJuIGBwcml6ZV8ke3BsYWNlfWA7XG4gICAgICAgIH0gZWxzZSBpZiAocGxhY2UgPD0gMjApIHtcbiAgICAgICAgICAgIHJldHVybiBgcHJpemVfMTEtMjBgO1xuICAgICAgICB9IGVsc2UgaWYgKHBsYWNlIDw9IDMwKSB7XG4gICAgICAgICAgICByZXR1cm4gYHByaXplXzIxLTMwYDtcbiAgICAgICAgfSBlbHNlIGlmIChwbGFjZSA8PSA0MCkge1xuICAgICAgICAgICAgcmV0dXJuIGBwcml6ZV8zMS00MGA7XG4gICAgICAgIH0gZWxzZSBpZiAocGxhY2UgPD0gNTApIHtcbiAgICAgICAgICAgIHJldHVybiBgcHJpemVfNDEtNTBgO1xuICAgICAgICB9IGVsc2UgaWYgKHBsYWNlIDw9IDcwKSB7XG4gICAgICAgICAgICByZXR1cm4gYHByaXplXzUxLTcwYDtcbiAgICAgICAgfSBlbHNlIGlmIChwbGFjZSA8PSAxMDApIHtcbiAgICAgICAgICAgIHJldHVybiBgcHJpemVfNzEtMTAwYDtcbiAgICAgICAgfSBlbHNlIGlmIChwbGFjZSA8PSAxNTApIHtcbiAgICAgICAgICAgIHJldHVybiBgcHJpemVfMTAxLTE1MGA7XG4gICAgICAgIH0gZWxzZSBpZiAocGxhY2UgPD0gMjAwKSB7XG4gICAgICAgICAgICByZXR1cm4gYHByaXplXzE1MS0yMDBgO1xuICAgICAgICB9IGVsc2UgaWYgKHBsYWNlIDw9IDI1MCkge1xuICAgICAgICAgICAgcmV0dXJuIGBwcml6ZV8yMDEtMjUwYDtcbiAgICAgICAgfSBlbHNlIGlmIChwbGFjZSA8PSAzMDApIHtcbiAgICAgICAgICAgIHJldHVybiBgcHJpemVfMjUxLTMwMGA7XG4gICAgICAgIH0gZWxzZSBpZiAocGxhY2UgPD0gMzUwKSB7XG4gICAgICAgICAgICByZXR1cm4gYHByaXplXzMwMS0zNTBgO1xuICAgICAgICB9IGVsc2UgaWYgKHBsYWNlIDw9IDQwMCkge1xuICAgICAgICAgICAgcmV0dXJuIGBwcml6ZV8zNTEtNDAwYDtcbiAgICAgICAgfSBlbHNlIGlmIChwbGFjZSA8PSA0NTApIHtcbiAgICAgICAgICAgIHJldHVybiBgcHJpemVfNDAxLTQ1MGA7XG4gICAgICAgIH0gZWxzZSBpZiAocGxhY2UgPD0gNTAwKSB7XG4gICAgICAgICAgICByZXR1cm4gYHByaXplXzQ1MS01MDBgO1xuICAgICAgICB9IGVsc2UgaWYgKHBsYWNlIDw9IDU1MCkge1xuICAgICAgICAgICAgcmV0dXJuIGBwcml6ZV81MDEtNTUwYDtcbiAgICAgICAgfSBlbHNlIGlmIChwbGFjZSA8PSA2MDApIHtcbiAgICAgICAgICAgIHJldHVybiBgcHJpemVfNTUxLTYwMGA7XG4gICAgICAgIH0gZWxzZSBpZiAocGxhY2UgPD0gNjUwKSB7XG4gICAgICAgICAgICByZXR1cm4gYHByaXplXzYwMS02NTBgO1xuICAgICAgICB9IGVsc2UgaWYgKHBsYWNlIDw9IDcwMCkge1xuICAgICAgICAgICAgcmV0dXJuIGBwcml6ZV82NTEtNzAwYDtcbiAgICAgICAgfSBlbHNlIGlmIChwbGFjZSA8PSA3NTApIHtcbiAgICAgICAgICAgIHJldHVybiBgcHJpemVfNzAxLTc1MGA7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIG1hc2tVc2VySWQodXNlcklkKSB7XG4gICAgICAgIHJldHVybiBcIioqXCIgKyB1c2VySWQudG9TdHJpbmcoKS5zbGljZSgyKTtcbiAgICB9XG5cbiAgICBjb25zdCByZXF1ZXN0ID0gZnVuY3Rpb24gKGxpbmssIGV4dHJhT3B0aW9ucykge1xuICAgICAgICByZXR1cm4gZmV0Y2goYXBpVVJMICsgbGluaywge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC4uLihleHRyYU9wdGlvbnMgfHwge30pXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tVc2VyQXV0aCgpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2codXNlcklkKVxuICAgICAgICBpZiAodXNlcklkKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHVuYXV0aE1lcyBvZiB1bmF1dGhNc2dzKSB7XG4gICAgICAgICAgICAgICAgdW5hdXRoTWVzLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0KGAvZmF2dXNlci8ke3VzZXJJZH0/bm9jYWNoZT0xYClcbiAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMudXNlcmlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0QnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFsbFdyYXAuY2xhc3NMaXN0LnJlbW92ZSgnX3NpZ24nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGd1aWRlV3JhcC5jbGFzc0xpc3QucmVtb3ZlKCdfc2lnbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZVdyYXAuY2xhc3NMaXN0LnJlbW92ZSgnX3NpZ24nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZ3Jlc3NcIikuY2xhc3NMaXN0LnJlbW92ZShcIl9zaWduXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRlYnVnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnBvaW50c1BlckRheSA9IDMwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zcGluQWxsb3dlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnNwaW5zU3RyZWFrID0gMztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc3BpbnMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZnJlc2hXaGVlbChyZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVmcmVzaERhaWx5UG9pbnRzU2VjdGlvbihyZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzLnNwaW5zKVxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheVVzZXJTcGlucyhyZXMuc3BpbnMpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhdGVCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgcGFydGljaXBhdGVCdG4gb2YgcGFydGljaXBhdGVCdG5zKSB7XG4gICAgICAgICAgICAgICAgcGFydGljaXBhdGVCdG4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChjb25zdCB1bmF1dGhNZXMgb2YgdW5hdXRoTXNncykge1xuICAgICAgICAgICAgICAgIHVuYXV0aE1lcy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxvYWRUcmFuc2xhdGlvbnMoKVxuICAgICAgICAudGhlbihpbml0KTtcblxuICAgIGZ1bmN0aW9uIHJlZnJlc2hXZWVrVGFicygpIHtcbiAgICAgICAgc2VsZWN0ZWRXZWVrVGFiSWQgPSBjYWxjdWxhdGVSZWNlbnRQcm9tb1dlZWtzKCkgLSAxO1xuICAgICAgICBpZiAoIXNlbGVjdGVkV2Vla1RhYklkIHx8IHNlbGVjdGVkV2Vla1RhYklkID09PSAwKSB7IC8vIHByb21vIG5vdCBzdGFydGVkIHlldFxuICAgICAgICAgICAgd2Vla3NDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHdlZWtTZWxlY3RvciA9IHdlZWtzU2VsZWN0b3JbaV07XG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRXZWVrVGFiSWQgPCBpKSB7XG4gICAgICAgICAgICAgICAgd2Vla1NlbGVjdG9yLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHdlZWtzU2VsZWN0b3IuZm9yRWFjaCgodywgaSkgPT4ge1xuICAgICAgICAgICAgdy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGlmIChpID09PSBzZWxlY3RlZFdlZWtUYWJJZCkge1xuICAgICAgICAgICAgICAgIHcuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZVJlY2VudFByb21vV2Vla3MoKSB7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBEYXRlLm5vdygpO1xuICAgICAgICBpZiAoZGF0ZSA8IG5ldyBEYXRlKFwiMjAyNC0xMi0xN1QyMjowMDowMFpcIikpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIDI7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIHRyYW5zbGF0ZUtleShrZXkpIHtcbiAgICAgICAgaWYgKCFrZXkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaTE4bkRhdGFba2V5XSB8fCAnKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiAgIGtleTogICcgKyBrZXk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVmcmVzaFdoZWVsKHVzZXJJbmZvKSB7XG4gICAgICAgIGlmICh1c2VySW5mby5zcGluQWxsb3dlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh1c2VySW5mby5wb2ludHNQZXJEYXkgPj0gNTApIHtcbiAgICAgICAgICAgIGJhbGxXcmFwLmNsYXNzTGlzdC5hZGQoJ19sb2NrJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBiYWxsV3JhcC5jbGFzc0xpc3QuYWRkKCdfbG9jaycpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVmcmVzaERhaWx5UG9pbnRzU2VjdGlvbih1c2VySW5mbykge1xuICAgICAgICBjb25zdCBwb2ludHMgPSBNYXRoLm1pbih1c2VySW5mby5wb2ludHNQZXJEYXkgfHwgMCwgNTApO1xuICAgICAgICAvLyBjb25zdCBwcm9ncmVzc1N0YXR1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9ncmVzc1N0YXR1cycpO1xuICAgICAgICAvLyBwcm9ncmVzc1N0YXR1cy5pbm5lckhUTUwgPSBgJHtwb2ludHN9LzUwYDtcbiAgICAgICAgY29uc3QgY3VycmVudFNwYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudCcpO1xuICAgICAgICBjdXJyZW50U3Bhbi5pbm5lckhUTUwgPSBgJHtwb2ludHN9YDtcbiAgICAgICAgY29uc3QgcHJvZ3Jlc3NMaW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2dyZXNzX19iYXItdGh1bWInKTtcbiAgICAgICAgY29uc3QgcHJvZ3Jlc3MgPSBwb2ludHMgLyA1MC4wICogMTAwO1xuICAgICAgICBwcm9ncmVzc0xpbmUuc3R5bGUud2lkdGggPSBgJHtwcm9ncmVzc30lYDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5VXNlclNwaW5zKHNwaW5zKSB7XG4gICAgICAgIGNvbnN0IHNwaW5JdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNwaW5zLXJvdycpO1xuICAgICAgICBjb25zdCBub1NwaW5JdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vLXNwaW5zJyk7XG5cbiAgICAgICAgaWYgKCFzcGlucyB8fCBzcGlucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHNwaW5JdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIG5vU3Bpbkl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY29uc3Qgc3BpbnNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3BpbnMtcm93Jyk7XG4gICAgICAgIHNwaW5JdGVtLmlubmVySFRNTCA9ICcnO1xuXG4gICAgICAgIHNwaW5JdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgbm9TcGluSXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKG5vU3Bpbkl0ZW0pXG5cbiAgICAgICAgc3BpbnMuZm9yRWFjaChzcGluID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNwaW5EYXRlID0gbmV3IERhdGUoc3Bpbi5kYXRlKTtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRlZERhdGUgPSBzcGluRGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoJ3VrLVVBJyk7XG4gICAgICAgICAgICBjb25zdCBzcGluTmFtZSA9IHRyYW5zbGF0ZUtleShzcGluLm5hbWUpIHx8ICcnO1xuXG4gICAgICAgICAgICBjb25zdCBzcGluRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgc3BpbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc3BpbnMtcm93LWl0ZW0nKTtcblxuICAgICAgICAgICAgc3BpbkVsZW1lbnQuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb250ZW50LWRhdGVcIj4ke2Zvcm1hdHRlZERhdGV9PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb250ZW50LXByaXplXCI+JHtzcGluTmFtZX08L3NwYW4+XG4gICAgICAgIGA7XG5cbiAgICAgICAgICAgIHNwaW5JdGVtLmFwcGVuZENoaWxkKHNwaW5FbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0VGltZW91dCgoKSA9PiBtYWluUGFnZS5jbGFzc0xpc3QuYWRkKCdvdmVyZmxvdycpLCAxMDAwKTtcblxuXG4gICAgLy8gQ2FyZHMgc2xpZGVyXG4gICAgY29uc3QgY2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpemVfX2xpc3QnKSxcbiAgICAgICAgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJpemVfX2xpc3QtaXRlbScpLFxuICAgICAgICBjYXJkc1dyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpemVfX2xpc3Qtc2Nyb2xsJyksXG4gICAgICAgIG1vdmVSaWdodEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcml6ZV9fc2xpZGVyLW1vdmUtcmlnaHQnKSxcbiAgICAgICAgbW92ZUxlZnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpemVfX3NsaWRlci1tb3ZlLWxlZnQnKSxcbiAgICAgICAgdGFic0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcml6ZV9fdGFicycpLFxuICAgICAgICBpc01vYmlsZSA9IHdpbmRvdy5pbm5lcldpZHRoIDwgNjAwLFxuICAgICAgICB0b3RhbENhcmRzID0gY2FyZHMubGVuZ3RoLFxuICAgICAgICBjYXJkV2lkdGggPSBjYXJkc1swXS5jbGllbnRXaWR0aCxcbiAgICAgICAgY2FyZHNNYXJnaW4gPSAoY2FyZHNXcmFwLmNsaWVudFdpZHRoIC0gY2FyZFdpZHRoICogdG90YWxDYXJkcykgLyAodG90YWxDYXJkcyAtIDEpLFxuICAgICAgICB2aXNpYmxlU2xpZGVzID0gaXNNb2JpbGUgPyAxIDogTWF0aC5jZWlsKGNhcmRzQ29udGFpbmVyLmNsaWVudFdpZHRoIC8gKGNhcmRXaWR0aCArIGNhcmRzTWFyZ2luKSksXG4gICAgICAgIHRvdGFsVGFicyA9IE1hdGguY2VpbCh0b3RhbENhcmRzIC8gdmlzaWJsZVNsaWRlcyksXG4gICAgICAgIHRhYldpZHRoPSB2aXNpYmxlU2xpZGVzICogKGNhcmRXaWR0aCArIGNhcmRzTWFyZ2luKVxuXG5cbiAgICBsZXQgY3VycmVudFNsaWRlID0gMSxcbiAgICAgICAgY2FyZHNQb3NpdGlvbiA9IDAsXG4gICAgICAgIGxlZnRTbGlkZSxcbiAgICAgICAgcmlnaHRTbGlkZTtcblxuICAgIGNvbnN0IHVwZGF0ZUFjdGl2ZUNhcmQgPSAoY2FyZHMsIGFjdGl2ZUluZGV4KSA9PiB7XG4gICAgICAgIGNhcmRzLmZvckVhY2goKGNhcmQsIGkpID0+e1xuICAgICAgICAgICAgYWN0aXZlSW5kZXggLSAxID09PSBpID8gY2FyZC5jbGFzc0xpc3QuYWRkKFwiX2FjdGl2ZVwiKSA6IGNhcmQuY2xhc3NMaXN0LnJlbW92ZShcIl9hY3RpdmVcIilcbiAgICAgICAgfSlcbiAgICB9XG4gICAgdXBkYXRlQWN0aXZlQ2FyZChjYXJkcywgY3VycmVudFNsaWRlKVxuXG4gICAgZnVuY3Rpb24gbGVmdFNsaWRlVGFiKCl7XG4gICAgICAgIGxlZnRTbGlkZSA9IGN1cnJlbnRTbGlkZVxuICAgIH1cbiAgICBmdW5jdGlvbiByaWdodFNsaWRlVGFiKCl7XG4gICAgICAgIHJpZ2h0U2xpZGUgPSBjdXJyZW50U2xpZGUgKyAodmlzaWJsZVNsaWRlcyAtIDEpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZmlyc3RMYXN0U2xpZGVzKCl7XG4gICAgICAgIGlmKGlzTW9iaWxlKSByZXR1cm5cbiAgICAgICAgbGVmdFNsaWRlVGFiKClcbiAgICAgICAgcmlnaHRTbGlkZVRhYigpXG4gICAgICAgIGNhcmRzLmZvckVhY2goKGNhcmQgLCBpKSA9PntcbiAgICAgICAgICAgIGkgKyAxID09PSBsZWZ0U2xpZGUgPyBjYXJkLmNsYXNzTGlzdC5hZGQoXCJfbGVmdFwiKSA6IGNhcmQuY2xhc3NMaXN0LnJlbW92ZShcIl9sZWZ0XCIpXG4gICAgICAgICAgICBpICsgMSA9PT0gcmlnaHRTbGlkZSA/IGNhcmQuY2xhc3NMaXN0LmFkZChcIl9yaWdodFwiKSA6IGNhcmQuY2xhc3NMaXN0LnJlbW92ZShcIl9yaWdodFwiKVxuICAgICAgICB9KVxuICAgIH1cbiAgICBmaXJzdExhc3RTbGlkZXMoKVxuXG4gICAgZnVuY3Rpb24gc2V0Q2FyZHNQb3NpdGlvbiAocG9zaXRpb24pIHtcbiAgICAgICAgY2FyZHNXcmFwLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKC0ke3Bvc2l0aW9ufXB4KWA7XG4gICAgfTtcbiAgICBjb25zdCBtb3ZlUmlnaHQgPSAoKSA9PiB7XG5cbiAgICAgICAgaWYgKGN1cnJlbnRTbGlkZSA+PSB0b3RhbENhcmRzIC0gKHZpc2libGVTbGlkZXMgLSAxKSAmJiBpc01vYmlsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGZpcnN0TGFzdFNsaWRlcygpXG4gICAgICAgICAgICBjdXJyZW50U2xpZGUgPSAxO1xuICAgICAgICAgICAgY2FyZHNQb3NpdGlvbiA9IDA7XG4gICAgICAgICAgICByaWdodFNsaWRlKytcbiAgICAgICAgICAgIGxlZnRTbGlkZSsrXG4gICAgICAgIH1lbHNlIGlmKGN1cnJlbnRTbGlkZSA9PT0gdG90YWxDYXJkcykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudFNsaWRlKVxuICAgICAgICAgICAgY3VycmVudFNsaWRlID0gMTtcbiAgICAgICAgICAgIGNhcmRzUG9zaXRpb24gPSAwO1xuICAgICAgICB9ZWxzZSBpZihjdXJyZW50U2xpZGUgPT09IHRvdGFsQ2FyZHMgLSAoIHZpc2libGVTbGlkZXMgKyAxKSAmJiBpc01vYmlsZSA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICBjdXJyZW50U2xpZGUgPSB0b3RhbENhcmRzXG4gICAgICAgICAgICBjYXJkc1Bvc2l0aW9uID0gY2FyZHNXcmFwLmNsaWVudFdpZHRoIC0gKHdpbmRvdy5pbm5lcldpZHRoIC0gKGNhcmRzTWFyZ2luIC8gMikpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjYXJkc1Bvc2l0aW9uKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgbWF4UG9zaXRpb24gPSAodG90YWxDYXJkcyAtIHZpc2libGVTbGlkZXMpICogKGNhcmRXaWR0aCArIGNhcmRzTWFyZ2luKTtcbiAgICAgICAgICAgIGlmIChjYXJkc1Bvc2l0aW9uICsgY2FyZFdpZHRoICsgY2FyZHNNYXJnaW4gPiBtYXhQb3NpdGlvbikge1xuICAgICAgICAgICAgICAgIGNhcmRzUG9zaXRpb24gPSBtYXhQb3NpdGlvbjtcbiAgICAgICAgICAgICAgICBjdXJyZW50U2xpZGUgPSB0b3RhbENhcmRzIC0gdmlzaWJsZVNsaWRlcyArIDE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNhcmRzUG9zaXRpb24gKz0gY2FyZFdpZHRoICsgY2FyZHNNYXJnaW47XG4gICAgICAgICAgICAgICAgY3VycmVudFNsaWRlKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc2V0Q2FyZHNQb3NpdGlvbihjYXJkc1Bvc2l0aW9uKTtcbiAgICAgICAgdXBkYXRlQWN0aXZlQ2FyZChjYXJkcywgY3VycmVudFNsaWRlKVxuICAgICAgICBmaXJzdExhc3RTbGlkZXMoKVxuICAgICAgICBoaWRlUG9wdXBzT25CdG4ocHJpemVQb3B1cEl0ZW0pXG4gICAgICAgIC8vIGNlbnRlclBvcHVwKFwiLnByaXplX19saXN0LXBvcHVwXCIpXG5cbiAgICB9O1xuICAgIGNvbnN0IG1vdmVMZWZ0ID0gKCkgPT4ge1xuICAgICAgICBpZihjdXJyZW50U2xpZGUgPT09IDEgJiYgaXNNb2JpbGUgPT09IGZhbHNlKXtcbiAgICAgICAgICAgIGN1cnJlbnRTbGlkZSA9IHRvdGFsQ2FyZHMgLSAodmlzaWJsZVNsaWRlcyAtIDEpO1xuICAgICAgICAgICAgY2FyZHNQb3NpdGlvbiA9ICgodG90YWxDYXJkcyAtICh2aXNpYmxlU2xpZGVzIC0gMSkpICogKGNhcmRXaWR0aCArIGNhcmRzTWFyZ2luKSkgLShjYXJkV2lkdGggKyBjYXJkc01hcmdpbik7XG4gICAgICAgIH1lbHNlIGlmIChjdXJyZW50U2xpZGUgPT09IDIpIHtcbiAgICAgICAgICAgIGNhcmRzUG9zaXRpb24gPSAwXG4gICAgICAgICAgICBjdXJyZW50U2xpZGUgPSAxXG4gICAgICAgIH1lbHNlIGlmKGN1cnJlbnRTbGlkZSA9PT0gMSAmJiBpc01vYmlsZSA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICBjdXJyZW50U2xpZGUgPSB0b3RhbENhcmRzXG4gICAgICAgICAgICBjYXJkc1Bvc2l0aW9uID0gY2FyZHNXcmFwLmNsaWVudFdpZHRoIC0gKHdpbmRvdy5pbm5lcldpZHRoIC0gKGNhcmRzTWFyZ2luIC8gMikpXG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIGNhcmRzUG9zaXRpb24gLT0gY2FyZFdpZHRoICsgY2FyZHNNYXJnaW47XG4gICAgICAgICAgICBjdXJyZW50U2xpZGUtLVxuICAgICAgICB9XG4gICAgICAgIHNldENhcmRzUG9zaXRpb24oY2FyZHNQb3NpdGlvbik7XG4gICAgICAgIHVwZGF0ZUFjdGl2ZUNhcmQoY2FyZHMsIGN1cnJlbnRTbGlkZSlcbiAgICAgICAgZmlyc3RMYXN0U2xpZGVzKClcbiAgICAgICAgaGlkZVBvcHVwc09uQnRuKHByaXplUG9wdXBJdGVtKVxuICAgICAgICAvLyBjZW50ZXJQb3B1cChcIi5wcml6ZV9fbGlzdC1wb3B1cFwiKVxuICAgIH07XG5cbiAgICAvLyBjZW50ZXJQb3B1cChcIi5wcml6ZV9fbGlzdC1wb3B1cFwiKVxuXG5cbiAgICAvLyBwb3B1cHMgbG9naWNcblxuICAgIGZ1bmN0aW9uIHNldFBvcHVwcyhwb3B1cHMsIHBvcHVwc0J0bnMpIHtcbiAgICAgICAgcG9wdXBzQnRucy5mb3JFYWNoKChidG4sIGkpID0+IHtcbiAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBwb3B1cHMuZm9yRWFjaCgocG9wdXAsIGopID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaSA9PT0gaiA/IHBvcHVwLmNsYXNzTGlzdC5hZGQoXCJfcG9wdXBcIikgOiBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwiX3BvcHVwXCIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uICAgaGlkZVBvcHVwc09uQnRuKHBvcHVwcyl7XG4gICAgICAgIHBvcHVwcy5mb3JFYWNoKHBvcHVwID0+e1xuICAgICAgICAgICAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcIl9wb3B1cFwiKVxuICAgICAgICB9KVxuICAgIH1cblxuLy8gcG9wdXBzXG4gICAgY29uc3QgcHJpemVPcGVuQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJpemVfX2xpc3QtaXRlbS1idG5cIiksXG4gICAgICAgIHByaXplQ2xvc2VCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcml6ZV9fbGlzdC1wb3B1cC1jbG9zZVwiKSxcbiAgICAgICAgZ3VpZGVQb3B1cHNXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ndWlkZV9faXRlbVwiKSxcbiAgICAgICAgZ3VpZGVPcGVuQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZ3VpZGVfX2l0ZW0taW5mby1idG5cIiksXG4gICAgICAgIGd1aWRlQ2xvc2VCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ndWlkZV9faXRlbS1wb3B1cC1jbG9zZVwiKSxcbiAgICAgICAgdGFibGVQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFibGVfX3BvcHVwXCIpLFxuICAgICAgICB0YWJsZVBvcHVwQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhYmxlX19wb3B1cC1jbG9zZVwiKSxcbiAgICAgICAgdGFibGVQb3B1cE9wZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhYmxlX19pbmZvXCIpLFxuICAgICAgICBiYWxsUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2dyZXNzX19wb3B1cFwiKSxcbiAgICAgICAgYmFsbFBvcHVwQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2dyZXNzX19wb3B1cC1jbG9zZVwiKSxcbiAgICAgICAgYmFsbFBvcHVwT3BlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZ3Jlc3NfX3BvcHVwLWJ0blwiKSxcbiAgICAgICAgcHJpemVQb3B1cEl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByaXplX19jb250YWluZXItaXRlbVwiKVxuXG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+e1xuXG4gICAgICAgIC8vICBwcml6ZVBvcHVwSXRlbS5mb3JFYWNoKGNhcmQgPT57XG4gICAgICAgIC8vICAgICAgICAgaWYoZS50YXJnZXQgIT09IGNhcmQpe1xuICAgICAgICAvLyAgICAgICAgICAgICBwcml6ZU9wZW5CdG5zLmZvckVhY2goYnRuID0+e1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgaWYoZS50YXJnZXQgIT09IGJ0biAmJiBlLnRhcmdldCAhPT0gY2FyZCl7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQgKVxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIC8vIGNhcmQuY2xhc3NMaXN0LnJlbW92ZShcIl9wb3B1cFwiKVxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICAgICAgICB9KVxuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gfSlcbiAgICAgICAgZ3VpZGVQb3B1cHNXcmFwLmZvckVhY2gocG9wdXAgPT57XG4gICAgICAgICAgICBpZighcG9wdXAuY29udGFpbnMoZS50YXJnZXQpKXtcbiAgICAgICAgICAgICAgICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwiX3BvcHVwXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYoIWJhbGxQb3B1cC5jb250YWlucyhlLnRhcmdldCkgJiYgZS50YXJnZXQgIT09IGJhbGxQb3B1cE9wZW4pe1xuICAgICAgICAgICAgYmFsbFBvcHVwLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgICAgIH1cblxuICAgIH0pXG5cblxuICAgIHNldFBvcHVwcyhwcml6ZVBvcHVwSXRlbSwgcHJpemVPcGVuQnRucyk7XG4gICAgc2V0UG9wdXBzKGd1aWRlUG9wdXBzV3JhcCwgZ3VpZGVPcGVuQnRucyk7XG5cbiAgICBndWlkZUNsb3NlQnRucy5mb3JFYWNoKGJ0biA9PntcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XG4gICAgICAgICAgICBoaWRlUG9wdXBzT25CdG4oZ3VpZGVQb3B1cHNXcmFwKVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIHByaXplQ2xvc2VCdG5zLmZvckVhY2goYnRuID0+e1xuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcbiAgICAgICAgICAgIGhpZGVQb3B1cHNPbkJ0bihwcml6ZVBvcHVwSXRlbSlcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0YWJsZVBvcHVwT3Blbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIHRhYmxlUG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIilcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCJcbiAgICB9KTtcblxuICAgIHRhYmxlUG9wdXBDbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIHRhYmxlUG9wdXAuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiXG4gICAgfSk7XG5cbiAgICBiYWxsUG9wdXBPcGVuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgYmFsbFBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpXG4gICAgfSk7XG5cbiAgICBiYWxsUG9wdXBDbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIGJhbGxQb3B1cC5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgIH0pO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+e1xuICAgICAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIENPVU5UID0gNDAwO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBTbm93c3Rvcm0oZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMubWFzdGhlYWQgPSBlbGVtZW50O1xuICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICAgICAgICAgIHRoaXMud2lkdGggPSB0aGlzLm1hc3RoZWFkLmNsaWVudFdpZHRoO1xuICAgICAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5tYXN0aGVhZC5jbGllbnRIZWlnaHQ7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNub3dmbGFrZXMgPSBbXTtcblxuICAgICAgICAgICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBTbm93c3Rvcm0ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmxlZnQgPSB0aGlzLmNhbnZhcy5zdHlsZS50b3AgPSAnMCc7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXN0aGVhZC5hcHBlbmRDaGlsZCh0aGlzLmNhbnZhcyk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLm9uUmVzaXplKCk7XG4gICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25SZXNpemUuYmluZCh0aGlzKSwgZmFsc2UpO1xuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBDT1VOVDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzbm93Zmxha2UgPSBuZXcgdGhpcy5Tbm93Zmxha2UodGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIHNub3dmbGFrZS5yZXNldCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNub3dmbGFrZXMucHVzaChzbm93Zmxha2UpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbUZyYW1lKHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIFNub3dzdG9ybS5wcm90b3R5cGUub25SZXNpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMubWFzdGhlYWQuY2xpZW50V2lkdGg7XG4gICAgICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLm1hc3RoZWFkLmNsaWVudEhlaWdodDtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHRoaXMud2lkdGg7XG4gICAgICAgICAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJyNGRkYnO1xuXG4gICAgICAgICAgICAgICAgdmFyIHdhc0FjdGl2ZSA9IHRoaXMuYWN0aXZlO1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlID0gdGhpcy53aWR0aCA+IDgwO1xuICAgICAgICAgICAgICAgIHRoaXMud2lkdGggPiAyODAgPyBDT1VOVCA9IDE1MCA6IG51bGxcblxuICAgICAgICAgICAgICAgIGlmICghd2FzQWN0aXZlICYmIHRoaXMuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltRnJhbWUodGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgU25vd3N0b3JtLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcblxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgQ09VTlQ7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc25vd2ZsYWtlID0gdGhpcy5zbm93Zmxha2VzW2ldO1xuICAgICAgICAgICAgICAgICAgICBzbm93Zmxha2UueSArPSBzbm93Zmxha2Uudnk7XG4gICAgICAgICAgICAgICAgICAgIHNub3dmbGFrZS54ICs9IHNub3dmbGFrZS52eDtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN0eC5nbG9iYWxBbHBoYSA9IHNub3dmbGFrZS5vO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdHguYXJjKHNub3dmbGFrZS54LCBzbm93Zmxha2UueSwgc25vd2ZsYWtlLnIsIDAsIE1hdGguUEkgKiAyLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHNub3dmbGFrZS55ID4gdGhpcy5oZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNub3dmbGFrZS5yZXNldCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1GcmFtZSh0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIFNub3dzdG9ybS5wcm90b3R5cGUuU25vd2ZsYWtlID0gZnVuY3Rpb24gKHNub3dzdG9ybSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc25vd3N0b3JtID0gc25vd3N0b3JtO1xuICAgICAgICAgICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIFNub3dzdG9ybS5wcm90b3R5cGUuU25vd2ZsYWtlLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnggPSBNYXRoLnJhbmRvbSgpICogdGhpcy5zbm93c3Rvcm0ud2lkdGg7XG4gICAgICAgICAgICAgICAgdGhpcy55ID0gTWF0aC5yYW5kb20oKSAqIC10aGlzLnNub3dzdG9ybS5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgdGhpcy52eSA9IDAuMyArIE1hdGgucmFuZG9tKCkgKiAwLjAwMDAxO1xuICAgICAgICAgICAgICAgIHRoaXMudnggPSAwLjYgLSBNYXRoLnJhbmRvbSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuciA9IDEgKyBNYXRoLnJhbmRvbSgpICogMjtcbiAgICAgICAgICAgICAgICB0aGlzLm8gPSAxO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltRnJhbWUgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCAxMDAwIC8gNjApO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSkoKTtcblxuICAgICAgICAgICAgdmFyIHNraWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNreScpO1xuICAgICAgICAgICAgc2tpZXMuZm9yRWFjaChmdW5jdGlvbiAoc2t5KSB7XG4gICAgICAgICAgICAgICAgbmV3IFNub3dzdG9ybShza3kpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIGJhbGwgc2hha2Ugc25vd1xuICAgICAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNub3dDYW52YXMnKTtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICAgICAgY29uc3QgYmFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zcGhlcmUnKTtcblxuICAgICAgICAgICAgY2FudmFzLndpZHRoID0gY2FudmFzLnBhcmVudEVsZW1lbnQuY2xpZW50V2lkdGg7XG4gICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gY2FudmFzLnBhcmVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuXG4gICAgICAgICAgICBsZXQgc25vd2ZsYWtlcyA9IFtdO1xuICAgICAgICAgICAgY29uc3QgbWF4U25vd2ZsYWtlcyA9IDEwMDtcbiAgICAgICAgICAgIGNvbnN0IG1heFNwZWVkID0gNztcbiAgICAgICAgICAgIGxldCBzdG9ybUNvdW50ZXIgPSAxXG5cblxuICAgICAgICAgICAgbGV0IHNub3dmbGFrZXNSZW1vdmVkID0gMDtcblxuICAgICAgICAgICAgY2xhc3MgU25vd2ZsYWtlIHtcbiAgICAgICAgICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54ID0gTWF0aC5yYW5kb20oKSAqIGNhbnZhcy53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55ID0gTWF0aC5yYW5kb20oKSAqIGNhbnZhcy5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmFkaXVzID0gTWF0aC5yYW5kb20oKSAqIDMgKyAxO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwZWVkWCA9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDEwO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwZWVkWSA9IE1hdGgucmFuZG9tKCkgKiAxLjUgKyAxO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjY2VsZXJhdGlvbiA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92aW5nVG9Cb3R0b20gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB1cGRhdGUoYmFsbFgsIGJhbGxZLCBiYWxsUmFkaXVzLCBiYWxsU2hha2luZykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5tb3ZpbmdUb0JvdHRvbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0U3BlZWQgPSAwLjE7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzcGVlZERlY2F5RmFjdG9yID0gMC4wNTsgLy8g0JrQvtC10YTRltGG0ZbRlNC90YIg0LTQu9GPINC/0LvQsNCy0L3QvtCz0L4g0YHQv9C+0LLRltC70YzQvdC10L3QvdGPXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3BlZWRYID0gdGhpcy5zcGVlZFggLSAodGhpcy5zcGVlZFggLSB0YXJnZXRTcGVlZCkgKiBzcGVlZERlY2F5RmFjdG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGVlZFkgPSB0aGlzLnNwZWVkWSAtICh0aGlzLnNwZWVkWSAtIHRhcmdldFNwZWVkKSAqIHNwZWVkRGVjYXlGYWN0b3I7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vINCe0L3QvtCy0LvQtdC90L3RjyDQv9C+0LfQuNGG0ZbRlyDRgdC90ZbQttC40L3QutC4XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnkgKz0gdGhpcy5zcGVlZFk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnkgPiBjYW52YXMuaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueCArPSB0aGlzLnNwZWVkWDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55ICs9IHRoaXMuc3BlZWRZO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vINCe0LHQvNC10LbQtdC90L3RjyDRiNCy0LjQtNC60L7RgdGC0ZZcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGVlZFggPSBNYXRoLm1heCgtbWF4U3BlZWQsIE1hdGgubWluKG1heFNwZWVkLCB0aGlzLnNwZWVkWCkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwZWVkWSA9IE1hdGgubWF4KC1tYXhTcGVlZCwgTWF0aC5taW4obWF4U3BlZWQsIHRoaXMuc3BlZWRZKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8g0JTQvtC00LDQstCw0L3QvdGPINGI0LLQuNC00LrQvtGB0YLRliDRh9C10YDQtdC3IFwi0YLRgNGD0YHRltC90L3Rj1wiINC60YPQu9GWXG4gICAgICAgICAgICAgICAgICAgIGlmIChiYWxsU2hha2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY2NlbGVyYXRpb24gKz0gMC4wNTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWNjZWxlcmF0aW9uICo9IDAuOTU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGVlZFggKz0gdGhpcy5hY2NlbGVyYXRpb24gKiAoTWF0aC5yYW5kb20oKSAtIDAuNSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3BlZWRZICs9IHRoaXMuYWNjZWxlcmF0aW9uICogKE1hdGgucmFuZG9tKCkgLSAwLjUpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnkgPiBjYW52YXMuaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnkgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy54ID0gTWF0aC5yYW5kb20oKSAqIGNhbnZhcy53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy54ID4gY2FudmFzLndpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnggPSAwO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMueCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueCA9IGNhbnZhcy53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vINCS0ZbQtNGB0YLQsNC90Ywg0LTQviDRhtC10L3RgtGA0YMg0LrRg9C70ZZcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZHggPSB0aGlzLnggLSBiYWxsWDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZHkgPSB0aGlzLnkgLSBiYWxsWTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vINCS0ZbQtNGB0LrQvtC6INCy0ZbQtCDQutGD0LvRllxuICAgICAgICAgICAgICAgICAgICBpZiAoZGlzdGFuY2UgPCBiYWxsUmFkaXVzICsgdGhpcy5yYWRpdXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFuZ2xlID0gTWF0aC5hdGFuMihkeSwgZHgpOyAvLyDQmtGD0YIg0LfRltGC0LrQvdC10L3QvdGPXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvdmVybGFwID0gYmFsbFJhZGl1cyArIHRoaXMucmFkaXVzIC0gZGlzdGFuY2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vINCf0LXRgNC10LzRltGJ0LXQvdC90Y8g0YHQvdGW0LbQuNC90LrQuFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy54ICs9IE1hdGguY29zKGFuZ2xlKSAqIG92ZXJsYXA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnkgKz0gTWF0aC5zaW4oYW5nbGUpICogb3ZlcmxhcDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g0KDQtdCy0LXRgNGBINGI0LLQuNC00LrQvtGB0YLRllxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGVlZFggKj0gLTAuNztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3BlZWRZICo9IC0wLjc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBtb3ZlVG9Cb3R0b20oKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92aW5nVG9Cb3R0b20gPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJlbW92ZSgpIHtcbiAgICAgICAgICAgICAgICAgICAgc25vd2ZsYWtlcy5zcGxpY2Uoc25vd2ZsYWtlcy5pbmRleE9mKHRoaXMpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgc25vd2ZsYWtlc1JlbW92ZWQrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0b3JtQ291bnRlciA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFNub3dzdG9ybShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNwaGVyZV9fYm9keVwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9ybUNvdW50ZXIrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGRyYXcoKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIDAsIE1hdGguUEkgKiAyKTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICd3aGl0ZSc7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBsYXN0QmFsbFNoYWtpbmdTdGF0ZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1heFNub3dmbGFrZXM7IGkrKykge1xuICAgICAgICAgICAgICAgIHNub3dmbGFrZXMucHVzaChuZXcgU25vd2ZsYWtlKCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBhbmltYXRlKCkge1xuICAgICAgICAgICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGJhbGxUcmFuc2Zvcm0gPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShiYWxsKS50cmFuc2Zvcm07XG4gICAgICAgICAgICAgICAgbGV0IGJhbGxYID0gY2FudmFzLndpZHRoIC8gMjtcbiAgICAgICAgICAgICAgICBsZXQgYmFsbFkgPSBjYW52YXMuaGVpZ2h0IC8gMjtcbiAgICAgICAgICAgICAgICBjb25zdCBiYWxsUmFkaXVzID0gYmFsbC5vZmZzZXRXaWR0aCAvIDI7XG4gICAgICAgICAgICAgICAgY29uc3QgYmFsbFNoYWtpbmcgPSBiYWxsVHJhbnNmb3JtICE9PSAnbm9uZSc7XG5cbiAgICAgICAgICAgICAgICBpZiAoYmFsbFRyYW5zZm9ybSAhPT0gJ25vbmUnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hdHJpeCA9IG5ldyBET01NYXRyaXgoYmFsbFRyYW5zZm9ybSk7XG4gICAgICAgICAgICAgICAgICAgIGJhbGxYID0gYmFsbC5vZmZzZXRMZWZ0ICsgbWF0cml4Lm00MSArIGJhbGxSYWRpdXM7XG4gICAgICAgICAgICAgICAgICAgIGJhbGxZID0gYmFsbC5vZmZzZXRUb3AgKyBtYXRyaXgubTQyICsgYmFsbFJhZGl1cztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoYmFsbFNoYWtpbmcgJiYgIWxhc3RCYWxsU2hha2luZ1N0YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHNub3dmbGFrZXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgc25vd2ZsYWtlc1JlbW92ZWQgPSAwO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1heFNub3dmbGFrZXM7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc25vd2ZsYWtlcy5wdXNoKG5ldyBTbm93Zmxha2UoKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsYXN0QmFsbFNoYWtpbmdTdGF0ZSA9IGJhbGxTaGFraW5nO1xuXG4gICAgICAgICAgICAgICAgc25vd2ZsYWtlcy5mb3JFYWNoKHNub3dmbGFrZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghYmFsbFNoYWtpbmcpIHNub3dmbGFrZS5tb3ZlVG9Cb3R0b20oKTtcbiAgICAgICAgICAgICAgICAgICAgc25vd2ZsYWtlLnVwZGF0ZShiYWxsWCwgYmFsbFksIGJhbGxSYWRpdXMsIGJhbGxTaGFraW5nKTtcbiAgICAgICAgICAgICAgICAgICAgc25vd2ZsYWtlLmRyYXcoKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYW5pbWF0ZSgpO1xuXG4gICAgICAgIH0pKCk7XG4gICAgfSlcblxuLy8gc25vd2ZhbGwgYW5pbWF0aW9uXG4gICAgbGV0IGkgPSAxO1xuICAgIGZ1bmN0aW9uIHNlbmRTaGFrZVJlcXVlc3QoKSB7XG4gICAgICAgIGlmICghdXNlcklkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGVidWcpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgICAgICAgICAgIC8vIG51bWJlcjogaSsrLFxuICAgICAgICAgICAgICAgIG51bWJlcjogJ2pibCdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcGFyYW1zID0ge3VzZXJpZDogdXNlcklkfTtcbiAgICAgICAgcmV0dXJuIHJlcXVlc3QoJy9zcGluJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXJhbXMpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGJ0blNoYWtlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9ncmVzc19fc2hha2VcIiksXG4gICAgICAgIGJhbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNwaGVyZVwiKSxcbiAgICAgICAgYmFsbEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3BoZXJlX19ib3hcIilcblxuICAgIGxldCBjdXJyZW50UHJpemU7XG4gICAgbGV0IHBhc3RQcml6ZTtcblxuXG5cbiAgICAvLyDQmtC+0LbQtdC9INC60LvQsNGBINCy0ZbQtNC/0L7QstGW0LTQsNGUINCy0LjQs9GA0LDQvdC+0LzRgyDQv9GA0LjQt9GDOlxuICAgIC8vIFwiX2lwaG9uZVwiIC0g0LLQuNCz0YDQsNC90L4gaVBob25lXG4gICAgLy8gXCJfdHZcIiAtINCy0LjQs9GA0LDQvdC+INGC0LXQu9C10LLRltC30L7RgFxuICAgIC8vIFwiX2pibFwiIC0g0LLQuNCz0YDQsNC90L4gSkJMLdC60L7Qu9C+0L3QutGDXG4gICAgLy8gXCJfbWVnb2dvXCIgLSDQstC40LPRgNCw0L3QviDQv9GW0LTQv9C40YHQutGDIE1lZ29nb1xuICAgIC8vIFwiX3Jlc3BpblwiIC0g0LTQvtC00LDRgtC60L7QstC1INC+0LHQtdGA0YLQsNC90L3Rj1xuICAgIC8vIFwiX25vdGhpbmdcIiAtINC90ZbRh9C+0LPQviDQvdC1INCy0LjQs9GA0LDQvdC+XG4gICAgLy8gXCJfcG9pbnRzNTBcIiAtINCy0LjQs9GA0LDQvdC+IDUwINCx0L7QvdGD0YHQvdC40YUg0LHQsNC70ZbQslxuICAgIC8vIFwiX2ZzMTBcIiAtINCy0LjQs9GA0LDQvdC+IDEwINGE0YDRltGB0L/RltC90ZbQslxuICAgIC8vIFwiX2ZzMjVcIiAtINCy0LjQs9GA0LDQvdC+IDI1INGE0YDRltGB0L/RltC90ZbQslxuICAgIC8vIFwiX2ZzNTBcIiAtINCy0LjQs9GA0LDQvdC+IDUwINGE0YDRltGB0L/RltC90ZbQslxuICAgIC8vIFwiX3NhdmVCZXQxMDBcIiAtINCy0LjQs9GA0LDQvdC+INGB0YLRgNCw0YXQvtCy0LrRgyDQvdCwIDEwMCDRgdGC0LDQstC+0LpcbiAgICAvLyBcIl9zYXZlQmV0MTUwXCIgLSDQstC40LPRgNCw0L3QviDRgdGC0YDQsNGF0L7QstC60YMg0L3QsCAxNTAg0YHRgtCw0LLQvtC6XG4gICAgLy8gXCJfc2F2ZUJldDIwMFwiIC0g0LLQuNCz0YDQsNC90L4g0YHRgtGA0LDRhdC+0LLQutGDINC90LAgMjAwINGB0YLQsNCy0L7QulxuICAgIC8vINGE0YPQvdC60YbRltGPIGluaXRTaGFrZSDQv9GA0L7QutC40LTRg9GUINC60LvQsNGB0Lgg0LLRltC00L/QvtCy0ZbQtNC90ZYg0L/RgNC40LfQsNC8INC90LAg0LHQu9C+0LogLnNwaGVyZSDQtNC70Y8g0LLRltC00L7QsdGA0LDQttC10L3QvdGPINC/0YDQuNC30YNcbiAgICBjb25zdCB3aW5DbGFzc2VzID0gW1xuICAgICAgICBcIl9pcGhvbmVcIiwgXCJfdHZcIiwgXCJfamJsXCIsIFwiX21lZ29nb1wiLCBcIl9yZXNwaW5cIiwgXCJfbm90aGluZ1wiLCBcIl9mczEwXCIsIFwiX2ZzMjVcIixcbiAgICAgICAgXCJfZnM1MFwiLCBcIl9zYXZlQmV0MTAwXCIsIFwiX3NhdmVCZXQxNTBcIiwgXCJfc2F2ZUJldDIwMFwiLCBcIl9wb2ludHM1MFwiXG4gICAgXTtcblxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlUHJpemUoYmFsbCwgYm94LCBidG4pe1xuICAgICAgICBiYWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJfYmVmb3JlLWhpZGVcIik7XG4gICAgICAgIHdpbkNsYXNzZXMuZm9yRWFjaChpdGVtID0+e1xuICAgICAgICAgICAgYmFsbC5jbGFzc0xpc3QucmVtb3ZlKGAke2l0ZW19YClcbiAgICAgICAgfSlcbiAgICAgICAgYm94LmNsYXNzTGlzdC5yZW1vdmUoXCJfYm94LW9wYWNpdHlcIilcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJfZGlzYWJsZWRcIilcblxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGFuaW1hdGVTaGFrZShiYWxsLCBib3gsIGJ0biwgcHJpemUsIHByaXplTnVtKSB7XG5cblxuICAgICAgICBjb25zdCBkZWxheSA9IChtcykgPT4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSlcblxuICAgICAgICByZW1vdmVQcml6ZShiYWxsLCBib3gsIGJ0bilcblxuICAgICAgICBpZihwcml6ZU51bSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcml6ZU51bSlcbiAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiX2Rpc2FibGVkXCIpO1xuICAgICAgICAgICAgYmFsbC5jbGFzc0xpc3QuYWRkKFwiX3NoYWtlXCIpO1xuICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJfc2hha2UtcmV2ZXJzZVwiKTtcblxuICAgICAgICAgICAgYXdhaXQgZGVsYXkoMjAwMClcblxuICAgICAgICAgICAgYmFsbC5jbGFzc0xpc3QucmVtb3ZlKFwiX3NoYWtlXCIpO1xuICAgICAgICAgICAgYmFsbC5jbGFzc0xpc3QuYWRkKFwiX2JlZm9yZS1oaWRlXCIpO1xuICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5yZW1vdmUoXCJfc2hha2UtcmV2ZXJzZVwiKTtcbiAgICAgICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwiX2JveC1vcGFjaXR5XCIpO1xuXG4gICAgICAgICAgICBhd2FpdCBkZWxheSgyMDApO1xuXG4gICAgICAgICAgICBiYWxsLmNsYXNzTGlzdC5hZGQoYCR7cHJpemV9YCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiX2Rpc2FibGVkXCIpO1xuICAgICAgICAgICAgYmFsbC5jbGFzc0xpc3QuYWRkKFwiX3NoYWtlXCIpO1xuICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJfc2hha2UtcmV2ZXJzZVwiKTtcblxuICAgICAgICAgICAgLy8gYXdhaXQgZGVsYXkoMjAwMClcblxuICAgICAgICAgICAgYmFsbC5jbGFzc0xpc3QucmVtb3ZlKFwiX3NoYWtlXCIpO1xuICAgICAgICAgICAgYmFsbC5jbGFzc0xpc3QuYWRkKFwiX2JlZm9yZS1oaWRlXCIpO1xuICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5yZW1vdmUoXCJfc2hha2UtcmV2ZXJzZVwiKTtcbiAgICAgICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwiX2JveC1vcGFjaXR5XCIpO1xuXG4gICAgICAgICAgICBpZihwcml6ZU51bSA9PT0gMCkgYXdhaXQgZGVsYXkoMjAwKTtcblxuICAgICAgICAgICAgYmFsbC5jbGFzc0xpc3QuYWRkKGAke3ByaXplfWApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXN0UHJpemUgPSBwcml6ZTtcblxuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdFNoYWtlKGJhbGwsIGJ0biwgYm94LCBwcml6ZU51bSkge1xuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICAgICAgc2VuZFNoYWtlUmVxdWVzdCgpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAgICAgICAgIGlmICghcmVzIHx8ICEhcmVzLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGJ0blNoYWtlLmNsYXNzTGlzdC5hZGQoJ3B1bHNlLWJ0bicpO1xuICAgICAgICAgICAgICAgICAgICBidG5TaGFrZS5jbGFzc0xpc3QucmVtb3ZlKCdfZGlzYWJsZWQnKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHByaXplID0gYF8ke3Jlcy5udW1iZXJ9YDtcbiAgICAgICAgICAgICAgICBjb25zdCBwcml6ZU51bSA9IHdpbkNsYXNzZXMuaW5kZXhPZihwcml6ZSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1ByaXplOicsIHByaXplKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUHJpemUgTnVtOicsIHByaXplTnVtKVxuICAgICAgICAgICAgICAgIGNvbnN0IHN0cmVha0JvbnVzID0gcmVzLnN0cmVha0JvbnVzIHx8IGRlYnVnO1xuICAgICAgICAgICAgICAgIGFuaW1hdGVTaGFrZShiYWxsLCBib3gsIGJ0biwgcHJpemUsIHByaXplTnVtKS5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihcImFuaW0gZXJyb3I6XCIsIGVycikpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgaW5pdFNoYWtlKGJhbGwsIGJ0blNoYWtlLCBiYWxsQm94KVxuXG4gICAgY29uc3QgYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYnRuXCIpLFxuICAgICAgICBvcyA9IGRldGVjdE9TKClcblxuICAgIGlmIChvcyA9PT0gXCJtYWNPU1wiIHx8IG9zID09PSBcImlPU1wiKXtcbiAgICAgICAgYnRucy5mb3JFYWNoKGJ0biA9PntcbiAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiX2lvc1wiKVxuICAgICAgICB9KVxuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gZGV0ZWN0T1MoKSB7XG4gICAgICAgIGNvbnN0IHVzZXJBZ2VudCA9IG5hdmlnYXRvci51c2VyQWdlbnQgfHwgbmF2aWdhdG9yLnZlbmRvciB8fCB3aW5kb3cub3BlcmE7XG4gICAgICAgIGNvbnN0IHBsYXRmb3JtID0gbmF2aWdhdG9yLnBsYXRmb3JtIHx8IFwidW5rbm93blwiO1xuICAgICAgICBsZXQgb3M7XG5cbiAgICAgICAgaWYgKC9hbmRyb2lkL2kudGVzdCh1c2VyQWdlbnQpICYmIC9saW51eCBhcm0vaS50ZXN0KHBsYXRmb3JtKSkge1xuICAgICAgICAgICAgb3MgPSBcIkFuZHJvaWRcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoL2lQYWR8aVBob25lfGlQb2QvLnRlc3QodXNlckFnZW50KSAmJiAhd2luZG93Lk1TU3RyZWFtKSB7XG4gICAgICAgICAgICBvcyA9IFwiaU9TXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKC9NYWNpbnRvc2h8TWFjSW50ZWx8TWFjUFBDfE1hYzY4Sy8udGVzdChwbGF0Zm9ybSkpIHtcbiAgICAgICAgICAgIG9zID0gXCJtYWNPU1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmICgvV2luMzJ8V2luNjR8V2luZG93c3xXT1c2NC8udGVzdChwbGF0Zm9ybSkpIHtcbiAgICAgICAgICAgIG9zID0gXCJXaW5kb3dzXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKC9MaW51eC8udGVzdChwbGF0Zm9ybSkgJiYgIS9hbmRyb2lkL2kudGVzdCh1c2VyQWdlbnQpKSB7XG4gICAgICAgICAgICBvcyA9IFwiTGludXhcIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3NcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhcItCe0L/QtdGA0LDRhtGW0LnQvdCwINGB0LjRgdGC0LXQvNCwOlwiLCBvcyk7XG5cbiAgICBjb25zdCBoYW5kbGVSZXNpemUgPSAoKSA9PntcbiAgICAgICAgbGV0IHRvdWNoU3RhcnRYID0gMDtcbiAgICAgICAgbGV0IHRvdWNoRW5kWCA9IDA7XG5cbiAgICAgICAgY2FyZHNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdG91Y2hTdGFydFggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5zY3JlZW5YO1xuICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgIGNhcmRzQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0b3VjaEVuZFggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5zY3JlZW5YO1xuICAgICAgICAgICAgaGFuZGxlU3dpcGUoKTtcbiAgICAgICAgfSwgZmFsc2UpO1xuXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZVN3aXBlKCkge1xuICAgICAgICAgICAgY29uc3Qgc3dpcGVUaHJlc2hvbGQgPSA1MDtcbiAgICAgICAgICAgIGlmICh0b3VjaEVuZFggPCB0b3VjaFN0YXJ0WCAtIHN3aXBlVGhyZXNob2xkKSB7XG4gICAgICAgICAgICAgICAgbW92ZVJpZ2h0KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0b3VjaEVuZFggPiB0b3VjaFN0YXJ0WCArIHN3aXBlVGhyZXNob2xkKSB7XG4gICAgICAgICAgICAgICAgbW92ZUxlZnQoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG1vdmVSaWdodEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1vdmVSaWdodCk7XG4gICAgICAgIG1vdmVMZWZ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbW92ZUxlZnQpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9yaWVudGF0aW9uY2hhbmdlXCIsICgpID0+e1xuICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBoYW5kbGVSZXNpemUoKVxuXG5cbiAgICAvLyBmb3IgdGVzdFxuICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGFyay1idG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgIC8vICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJkYXJrXCIpXG4gICAgLy8gfSlcbiAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVuLWJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgLy8gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmF2LXBhZ2VcIikuY2xhc3NMaXN0LnRvZ2dsZShcImVuXCIpXG4gICAgLy8gfSlcbiAgICAvL1xuICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVzdE1lbnVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG4gICAgLy8gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJpemVzLWJ0bnNcIikuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIilcbiAgICAvLyB9KVxuXG59KSgpO1xuIl19
