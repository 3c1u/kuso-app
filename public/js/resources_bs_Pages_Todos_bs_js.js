(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_bs_Pages_Todos_bs_js"],{

/***/ "./resources/bs/App.bs.js":
/*!********************************!*\
  !*** ./resources/bs/App.bs.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "stateSelector": () => /* binding */ stateSelector,
/* harmony export */   "make": () => /* binding */ make
/* harmony export */ });
/* harmony import */ var bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bs-platform/lib/es6/curry.js */ "./node_modules/bs-platform/lib/es6/curry.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var bs_platform_lib_es6_belt_Array_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bs-platform/lib/es6/belt_Array.js */ "./node_modules/bs-platform/lib/es6/belt_Array.js");
/* harmony import */ var bs_platform_lib_es6_caml_option_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bs-platform/lib/es6/caml_option.js */ "./node_modules/bs-platform/lib/es6/caml_option.js");
/* harmony import */ var _Store_bs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Store.bs.js */ "./resources/bs/Store.bs.js");
/* harmony import */ var _Header_bs_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Header.bs.js */ "./resources/bs/Header.bs.js");
/* harmony import */ var _UserIcon_bs_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./UserIcon.bs.js */ "./resources/bs/UserIcon.bs.js");
/* harmony import */ var _ReduxThunk_bs_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ReduxThunk.bs.js */ "./resources/bs/ReduxThunk.bs.js");
/* harmony import */ var _DeleteButton_bs_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DeleteButton.bs.js */ "./resources/bs/DeleteButton.bs.js");
// Generated by ReScript, PLEASE EDIT WITH CARE










function stateSelector(state) {
  return state;
}

function App(Props) {
  var match = react__WEBPACK_IMPORTED_MODULE_1__.useState(function () {
    return "";
  });
  var setTodo = match[1];
  var todo = match[0];

  var dispatch = bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_0__._1(_Store_bs_js__WEBPACK_IMPORTED_MODULE_4__.useDispatch, undefined);

  var handleSubmit = function handleSubmit(e) {
    if (todo.length !== 0) {
      bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_0__._1(dispatch, {
        RE_EXN_ID: _ReduxThunk_bs_js__WEBPACK_IMPORTED_MODULE_7__.Thunk,
        _1: function _1(param) {
          return _Store_bs_js__WEBPACK_IMPORTED_MODULE_4__.pushTodo(todo, param);
        }
      });

      bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_0__._1(setTodo, function (param) {
        return "";
      });
    }

    e.preventDefault();
  };

  var match$1 = bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_0__._1(_Store_bs_js__WEBPACK_IMPORTED_MODULE_4__.useSelector, stateSelector);

  var user = match$1.user;

  var isDeletable = function isDeletable(t) {
    var match = t.user;

    if (match == null) {
      return true;
    } else if (user !== undefined) {
      return match.id === user.id;
    } else {
      return false;
    }
  };

  var handleChange = function handleChange(e) {
    var target = e.target;
    return bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_0__._1(setTodo, target.value);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", undefined, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Header_bs_js__WEBPACK_IMPORTED_MODULE_5__.make, {}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "app-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "app-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h2", {
    className: "todos-heading"
  }, "Todos"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "todos"
  }, match$1.loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", undefined, "loading...") : bs_platform_lib_es6_belt_Array_js__WEBPACK_IMPORTED_MODULE_2__.map(match$1.todos, function (v) {
    var user = v.user;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {
      key: String(v.id),
      className: "todo-item"
    }, isDeletable(v) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_DeleteButton_bs_js__WEBPACK_IMPORTED_MODULE_8__.make, {
      onClick: function onClick(param) {
        var partial_arg = v.id;

        bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_0__._1(dispatch, {
          RE_EXN_ID: _ReduxThunk_bs_js__WEBPACK_IMPORTED_MODULE_7__.Thunk,
          _1: function _1(param) {
            return _Store_bs_js__WEBPACK_IMPORTED_MODULE_4__.removeTodo(partial_arg, param);
          }
        });
      }
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_UserIcon_bs_js__WEBPACK_IMPORTED_MODULE_6__.make, {
      user: bs_platform_lib_es6_caml_option_js__WEBPACK_IMPORTED_MODULE_3__.nullable_to_opt(v.user)
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
      className: "todo-label"
    }, v.title), user == null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", undefined) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
      className: "user-label"
    }, "（" + user.name + "）"));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("form", {
    className: "todo-form",
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", {
    className: "todo-input",
    placeholder: "Lorem ipsum...",
    type: "text",
    value: todo,
    onChange: handleChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
    className: "add-button",
    disabled: match$1.sending || todo.length === 0
  }, "Add"))))));
}

var make = App;

/* react Not a pure module */

/***/ }),

/***/ "./resources/bs/DeleteButton.bs.js":
/*!*****************************************!*\
  !*** ./resources/bs/DeleteButton.bs.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "make": () => /* binding */ make
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
// Generated by ReScript, PLEASE EDIT WITH CARE


function DeleteButton(Props) {
  var onClick = Props.onClick;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "delete-button",
    onClick: onClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", undefined, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", undefined, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
    height: "24",
    width: "24",
    opacity: "0",
    transform: "rotate(180 12 12)"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"
  })))));
}

var make = DeleteButton;

/* react Not a pure module */

/***/ }),

/***/ "./resources/bs/Header.bs.js":
/*!***********************************!*\
  !*** ./resources/bs/Header.bs.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "stateSelector": () => /* binding */ stateSelector,
/* harmony export */   "make": () => /* binding */ make
/* harmony export */ });
/* harmony import */ var bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bs-platform/lib/es6/curry.js */ "./node_modules/bs-platform/lib/es6/curry.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Store_bs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Store.bs.js */ "./resources/bs/Store.bs.js");
/* harmony import */ var _ReduxThunk_bs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ReduxThunk.bs.js */ "./resources/bs/ReduxThunk.bs.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
// Generated by ReScript, PLEASE EDIT WITH CARE







function stateSelector(state) {
  return state;
}

function Header(Props) {
  var dispatch = bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_0__._1(_Store_bs_js__WEBPACK_IMPORTED_MODULE_3__.useDispatch, undefined);

  var match = bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_0__._1(_Store_bs_js__WEBPACK_IMPORTED_MODULE_3__.useSelector, stateSelector);

  var user = match.user;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: "header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("h1", {
    className: "header-branding"
  }, "Kuso App"), user !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: "logout-group flex flex-row items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("p", {
    className: "m-0 p-0 text-sm"
  }, "Logged as: " + user.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("form", {
    className: "flex",
    onSubmit: function onSubmit(e) {
      e.preventDefault();

      var __x = axios__WEBPACK_IMPORTED_MODULE_1__.post("/api/logout");

      __x.then(function (param) {
        bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_0__._1(dispatch, {
          RE_EXN_ID: _ReduxThunk_bs_js__WEBPACK_IMPORTED_MODULE_4__.Thunk,
          _1: _Store_bs_js__WEBPACK_IMPORTED_MODULE_3__.loadUser
        });

        return Promise.resolve(undefined);
      });
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("button", {
    className: "fancy-link text-sm m-0 ml-2"
  }, "Logout"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: "login-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_5__.InertiaLink, {
    href: "/login",
    children: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", {
      className: "fancy-link"
    }, "Login")
  })));
}

var make = Header;

/* axios Not a pure module */

/***/ }),

/***/ "./resources/bs/Pages/Todos.bs.js":
/*!****************************************!*\
  !*** ./resources/bs/Pages/Todos.bs.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "make": () => /* binding */ make,
/* harmony export */   "$$default": () => /* binding */ $$default,
/* harmony export */   "default": () => /* binding */ $$default
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _App_bs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../App.bs.js */ "./resources/bs/App.bs.js");
// Generated by ReScript, PLEASE EDIT WITH CARE



function Todos(Props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_App_bs_js__WEBPACK_IMPORTED_MODULE_1__.make, {});
}

var make = Todos;
var $$default = Todos;

/* react Not a pure module */

/***/ }),

/***/ "./resources/bs/UserIcon.bs.js":
/*!*************************************!*\
  !*** ./resources/bs/UserIcon.bs.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "make": () => /* binding */ make
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
// Generated by ReScript, PLEASE EDIT WITH CARE


function UserIcon(Props) {
  var user = Props.user;

  if (user === undefined) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "icon-skeleton"
    });
  }

  var avatar = user.avatar;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: "icon",
    alt: user.name,
    src: avatar !== undefined ? avatar : "",
    width: "24"
  });
}

var make = UserIcon;

/* react Not a pure module */

/***/ }),

/***/ "./node_modules/bs-platform/lib/es6/belt_Array.js":
/*!********************************************************!*\
  !*** ./node_modules/bs-platform/lib/es6/belt_Array.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "get": () => /* binding */ get,
/* harmony export */   "getExn": () => /* binding */ getExn,
/* harmony export */   "set": () => /* binding */ set,
/* harmony export */   "setExn": () => /* binding */ setExn,
/* harmony export */   "shuffleInPlace": () => /* binding */ shuffleInPlace,
/* harmony export */   "shuffle": () => /* binding */ shuffle,
/* harmony export */   "reverseInPlace": () => /* binding */ reverseInPlace,
/* harmony export */   "reverse": () => /* binding */ reverse,
/* harmony export */   "make": () => /* binding */ make,
/* harmony export */   "range": () => /* binding */ range,
/* harmony export */   "rangeBy": () => /* binding */ rangeBy,
/* harmony export */   "makeByU": () => /* binding */ makeByU,
/* harmony export */   "makeBy": () => /* binding */ makeBy,
/* harmony export */   "makeByAndShuffleU": () => /* binding */ makeByAndShuffleU,
/* harmony export */   "makeByAndShuffle": () => /* binding */ makeByAndShuffle,
/* harmony export */   "zip": () => /* binding */ zip,
/* harmony export */   "zipByU": () => /* binding */ zipByU,
/* harmony export */   "zipBy": () => /* binding */ zipBy,
/* harmony export */   "unzip": () => /* binding */ unzip,
/* harmony export */   "concat": () => /* binding */ concat,
/* harmony export */   "concatMany": () => /* binding */ concatMany,
/* harmony export */   "slice": () => /* binding */ slice,
/* harmony export */   "sliceToEnd": () => /* binding */ sliceToEnd,
/* harmony export */   "fill": () => /* binding */ fill,
/* harmony export */   "blit": () => /* binding */ blit,
/* harmony export */   "blitUnsafe": () => /* binding */ blitUnsafe,
/* harmony export */   "forEachU": () => /* binding */ forEachU,
/* harmony export */   "forEach": () => /* binding */ forEach,
/* harmony export */   "mapU": () => /* binding */ mapU,
/* harmony export */   "map": () => /* binding */ map,
/* harmony export */   "getByU": () => /* binding */ getByU,
/* harmony export */   "getBy": () => /* binding */ getBy,
/* harmony export */   "getIndexByU": () => /* binding */ getIndexByU,
/* harmony export */   "getIndexBy": () => /* binding */ getIndexBy,
/* harmony export */   "keepU": () => /* binding */ keepU,
/* harmony export */   "keep": () => /* binding */ keep,
/* harmony export */   "keepWithIndexU": () => /* binding */ keepWithIndexU,
/* harmony export */   "keepWithIndex": () => /* binding */ keepWithIndex,
/* harmony export */   "keepMapU": () => /* binding */ keepMapU,
/* harmony export */   "keepMap": () => /* binding */ keepMap,
/* harmony export */   "forEachWithIndexU": () => /* binding */ forEachWithIndexU,
/* harmony export */   "forEachWithIndex": () => /* binding */ forEachWithIndex,
/* harmony export */   "mapWithIndexU": () => /* binding */ mapWithIndexU,
/* harmony export */   "mapWithIndex": () => /* binding */ mapWithIndex,
/* harmony export */   "partitionU": () => /* binding */ partitionU,
/* harmony export */   "partition": () => /* binding */ partition,
/* harmony export */   "reduceU": () => /* binding */ reduceU,
/* harmony export */   "reduce": () => /* binding */ reduce,
/* harmony export */   "reduceReverseU": () => /* binding */ reduceReverseU,
/* harmony export */   "reduceReverse": () => /* binding */ reduceReverse,
/* harmony export */   "reduceReverse2U": () => /* binding */ reduceReverse2U,
/* harmony export */   "reduceReverse2": () => /* binding */ reduceReverse2,
/* harmony export */   "reduceWithIndexU": () => /* binding */ reduceWithIndexU,
/* harmony export */   "reduceWithIndex": () => /* binding */ reduceWithIndex,
/* harmony export */   "joinWithU": () => /* binding */ joinWithU,
/* harmony export */   "joinWith": () => /* binding */ joinWith,
/* harmony export */   "someU": () => /* binding */ someU,
/* harmony export */   "some": () => /* binding */ some,
/* harmony export */   "everyU": () => /* binding */ everyU,
/* harmony export */   "every": () => /* binding */ every,
/* harmony export */   "every2U": () => /* binding */ every2U,
/* harmony export */   "every2": () => /* binding */ every2,
/* harmony export */   "some2U": () => /* binding */ some2U,
/* harmony export */   "some2": () => /* binding */ some2,
/* harmony export */   "cmpU": () => /* binding */ cmpU,
/* harmony export */   "cmp": () => /* binding */ cmp,
/* harmony export */   "eqU": () => /* binding */ eqU,
/* harmony export */   "eq": () => /* binding */ eq
/* harmony export */ });
/* harmony import */ var _curry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry.js */ "./node_modules/bs-platform/lib/es6/curry.js");
/* harmony import */ var _js_math_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js_math.js */ "./node_modules/bs-platform/lib/es6/js_math.js");
/* harmony import */ var _caml_option_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./caml_option.js */ "./node_modules/bs-platform/lib/es6/caml_option.js");
/* harmony import */ var _caml_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./caml_primitive.js */ "./node_modules/bs-platform/lib/es6/caml_primitive.js");







function get(arr, i) {
  if (i >= 0 && i < arr.length) {
    return _caml_option_js__WEBPACK_IMPORTED_MODULE_2__.some(arr[i]);
  }
  
}

function getExn(arr, i) {
  if (!(i >= 0 && i < arr.length)) {
    throw {
          RE_EXN_ID: "Assert_failure",
          _1: [
            "belt_Array.ml",
            27,
            4
          ],
          Error: new Error()
        };
  }
  return arr[i];
}

function set(arr, i, v) {
  if (i >= 0 && i < arr.length) {
    arr[i] = v;
    return true;
  } else {
    return false;
  }
}

function setExn(arr, i, v) {
  if (!(i >= 0 && i < arr.length)) {
    throw {
          RE_EXN_ID: "Assert_failure",
          _1: [
            "belt_Array.ml",
            33,
            2
          ],
          Error: new Error()
        };
  }
  arr[i] = v;
  
}

function swapUnsafe(xs, i, j) {
  var tmp = xs[i];
  xs[i] = xs[j];
  xs[j] = tmp;
  
}

function shuffleInPlace(xs) {
  var len = xs.length;
  for(var i = 0; i < len; ++i){
    swapUnsafe(xs, i, _js_math_js__WEBPACK_IMPORTED_MODULE_1__.random_int(i, len));
  }
  
}

function shuffle(xs) {
  var result = xs.slice(0);
  shuffleInPlace(result);
  return result;
}

function reverseInPlace(xs) {
  var len = xs.length;
  var ofs = 0;
  for(var i = 0 ,i_finish = len / 2 | 0; i < i_finish; ++i){
    swapUnsafe(xs, ofs + i | 0, ((ofs + len | 0) - i | 0) - 1 | 0);
  }
  
}

function reverse(xs) {
  var len = xs.length;
  var result = new Array(len);
  for(var i = 0; i < len; ++i){
    result[i] = xs[(len - 1 | 0) - i | 0];
  }
  return result;
}

function make(l, f) {
  if (l <= 0) {
    return [];
  }
  var res = new Array(l);
  for(var i = 0; i < l; ++i){
    res[i] = f;
  }
  return res;
}

function makeByU(l, f) {
  if (l <= 0) {
    return [];
  }
  var res = new Array(l);
  for(var i = 0; i < l; ++i){
    res[i] = f(i);
  }
  return res;
}

function makeBy(l, f) {
  return makeByU(l, _curry_js__WEBPACK_IMPORTED_MODULE_0__.__1(f));
}

function makeByAndShuffleU(l, f) {
  var u = makeByU(l, f);
  shuffleInPlace(u);
  return u;
}

function makeByAndShuffle(l, f) {
  return makeByAndShuffleU(l, _curry_js__WEBPACK_IMPORTED_MODULE_0__.__1(f));
}

function range(start, finish) {
  var cut = finish - start | 0;
  if (cut < 0) {
    return [];
  }
  var arr = new Array(cut + 1 | 0);
  for(var i = 0; i <= cut; ++i){
    arr[i] = start + i | 0;
  }
  return arr;
}

function rangeBy(start, finish, step) {
  var cut = finish - start | 0;
  if (cut < 0 || step <= 0) {
    return [];
  }
  var nb = (cut / step | 0) + 1 | 0;
  var arr = new Array(nb);
  var cur = start;
  for(var i = 0; i < nb; ++i){
    arr[i] = cur;
    cur = cur + step | 0;
  }
  return arr;
}

function zip(xs, ys) {
  var lenx = xs.length;
  var leny = ys.length;
  var len = lenx < leny ? lenx : leny;
  var s = new Array(len);
  for(var i = 0; i < len; ++i){
    s[i] = [
      xs[i],
      ys[i]
    ];
  }
  return s;
}

function zipByU(xs, ys, f) {
  var lenx = xs.length;
  var leny = ys.length;
  var len = lenx < leny ? lenx : leny;
  var s = new Array(len);
  for(var i = 0; i < len; ++i){
    s[i] = f(xs[i], ys[i]);
  }
  return s;
}

function zipBy(xs, ys, f) {
  return zipByU(xs, ys, _curry_js__WEBPACK_IMPORTED_MODULE_0__.__2(f));
}

function concat(a1, a2) {
  var l1 = a1.length;
  var l2 = a2.length;
  var a1a2 = new Array(l1 + l2 | 0);
  for(var i = 0; i < l1; ++i){
    a1a2[i] = a1[i];
  }
  for(var i$1 = 0; i$1 < l2; ++i$1){
    a1a2[l1 + i$1 | 0] = a2[i$1];
  }
  return a1a2;
}

function concatMany(arrs) {
  var lenArrs = arrs.length;
  var totalLen = 0;
  for(var i = 0; i < lenArrs; ++i){
    totalLen = totalLen + arrs[i].length | 0;
  }
  var result = new Array(totalLen);
  totalLen = 0;
  for(var j = 0; j < lenArrs; ++j){
    var cur = arrs[j];
    for(var k = 0 ,k_finish = cur.length; k < k_finish; ++k){
      result[totalLen] = cur[k];
      totalLen = totalLen + 1 | 0;
    }
  }
  return result;
}

function slice(a, offset, len) {
  if (len <= 0) {
    return [];
  }
  var lena = a.length;
  var ofs = offset < 0 ? _caml_primitive_js__WEBPACK_IMPORTED_MODULE_3__.caml_int_max(lena + offset | 0, 0) : offset;
  var hasLen = lena - ofs | 0;
  var copyLength = hasLen < len ? hasLen : len;
  if (copyLength <= 0) {
    return [];
  }
  var result = new Array(copyLength);
  for(var i = 0; i < copyLength; ++i){
    result[i] = a[ofs + i | 0];
  }
  return result;
}

function sliceToEnd(a, offset) {
  var lena = a.length;
  var ofs = offset < 0 ? _caml_primitive_js__WEBPACK_IMPORTED_MODULE_3__.caml_int_max(lena + offset | 0, 0) : offset;
  var len = lena - ofs | 0;
  var result = new Array(len);
  for(var i = 0; i < len; ++i){
    result[i] = a[ofs + i | 0];
  }
  return result;
}

function fill(a, offset, len, v) {
  if (len <= 0) {
    return ;
  }
  var lena = a.length;
  var ofs = offset < 0 ? _caml_primitive_js__WEBPACK_IMPORTED_MODULE_3__.caml_int_max(lena + offset | 0, 0) : offset;
  var hasLen = lena - ofs | 0;
  var fillLength = hasLen < len ? hasLen : len;
  if (fillLength <= 0) {
    return ;
  }
  for(var i = ofs ,i_finish = ofs + fillLength | 0; i < i_finish; ++i){
    a[i] = v;
  }
  
}

function blitUnsafe(a1, srcofs1, a2, srcofs2, blitLength) {
  if (srcofs2 <= srcofs1) {
    for(var j = 0; j < blitLength; ++j){
      a2[j + srcofs2 | 0] = a1[j + srcofs1 | 0];
    }
    return ;
  }
  for(var j$1 = blitLength - 1 | 0; j$1 >= 0; --j$1){
    a2[j$1 + srcofs2 | 0] = a1[j$1 + srcofs1 | 0];
  }
  
}

function blit(a1, ofs1, a2, ofs2, len) {
  var lena1 = a1.length;
  var lena2 = a2.length;
  var srcofs1 = ofs1 < 0 ? _caml_primitive_js__WEBPACK_IMPORTED_MODULE_3__.caml_int_max(lena1 + ofs1 | 0, 0) : ofs1;
  var srcofs2 = ofs2 < 0 ? _caml_primitive_js__WEBPACK_IMPORTED_MODULE_3__.caml_int_max(lena2 + ofs2 | 0, 0) : ofs2;
  var blitLength = _caml_primitive_js__WEBPACK_IMPORTED_MODULE_3__.caml_int_min(len, _caml_primitive_js__WEBPACK_IMPORTED_MODULE_3__.caml_int_min(lena1 - srcofs1 | 0, lena2 - srcofs2 | 0));
  if (srcofs2 <= srcofs1) {
    for(var j = 0; j < blitLength; ++j){
      a2[j + srcofs2 | 0] = a1[j + srcofs1 | 0];
    }
    return ;
  }
  for(var j$1 = blitLength - 1 | 0; j$1 >= 0; --j$1){
    a2[j$1 + srcofs2 | 0] = a1[j$1 + srcofs1 | 0];
  }
  
}

function forEachU(a, f) {
  for(var i = 0 ,i_finish = a.length; i < i_finish; ++i){
    f(a[i]);
  }
  
}

function forEach(a, f) {
  return forEachU(a, _curry_js__WEBPACK_IMPORTED_MODULE_0__.__1(f));
}

function mapU(a, f) {
  var l = a.length;
  var r = new Array(l);
  for(var i = 0; i < l; ++i){
    r[i] = f(a[i]);
  }
  return r;
}

function map(a, f) {
  return mapU(a, _curry_js__WEBPACK_IMPORTED_MODULE_0__.__1(f));
}

function getByU(a, p) {
  var l = a.length;
  var i = 0;
  var r;
  while(r === undefined && i < l) {
    var v = a[i];
    if (p(v)) {
      r = _caml_option_js__WEBPACK_IMPORTED_MODULE_2__.some(v);
    }
    i = i + 1 | 0;
  };
  return r;
}

function getBy(a, p) {
  return getByU(a, _curry_js__WEBPACK_IMPORTED_MODULE_0__.__1(p));
}

function getIndexByU(a, p) {
  var l = a.length;
  var i = 0;
  var r;
  while(r === undefined && i < l) {
    var v = a[i];
    if (p(v)) {
      r = i;
    }
    i = i + 1 | 0;
  };
  return r;
}

function getIndexBy(a, p) {
  return getIndexByU(a, _curry_js__WEBPACK_IMPORTED_MODULE_0__.__1(p));
}

function keepU(a, f) {
  var l = a.length;
  var r = new Array(l);
  var j = 0;
  for(var i = 0; i < l; ++i){
    var v = a[i];
    if (f(v)) {
      r[j] = v;
      j = j + 1 | 0;
    }
    
  }
  r.length = j;
  return r;
}

function keep(a, f) {
  return keepU(a, _curry_js__WEBPACK_IMPORTED_MODULE_0__.__1(f));
}

function keepWithIndexU(a, f) {
  var l = a.length;
  var r = new Array(l);
  var j = 0;
  for(var i = 0; i < l; ++i){
    var v = a[i];
    if (f(v, i)) {
      r[j] = v;
      j = j + 1 | 0;
    }
    
  }
  r.length = j;
  return r;
}

function keepWithIndex(a, f) {
  return keepWithIndexU(a, _curry_js__WEBPACK_IMPORTED_MODULE_0__.__2(f));
}

function keepMapU(a, f) {
  var l = a.length;
  var r = new Array(l);
  var j = 0;
  for(var i = 0; i < l; ++i){
    var v = a[i];
    var v$1 = f(v);
    if (v$1 !== undefined) {
      r[j] = _caml_option_js__WEBPACK_IMPORTED_MODULE_2__.valFromOption(v$1);
      j = j + 1 | 0;
    }
    
  }
  r.length = j;
  return r;
}

function keepMap(a, f) {
  return keepMapU(a, _curry_js__WEBPACK_IMPORTED_MODULE_0__.__1(f));
}

function forEachWithIndexU(a, f) {
  for(var i = 0 ,i_finish = a.length; i < i_finish; ++i){
    f(i, a[i]);
  }
  
}

function forEachWithIndex(a, f) {
  return forEachWithIndexU(a, _curry_js__WEBPACK_IMPORTED_MODULE_0__.__2(f));
}

function mapWithIndexU(a, f) {
  var l = a.length;
  var r = new Array(l);
  for(var i = 0; i < l; ++i){
    r[i] = f(i, a[i]);
  }
  return r;
}

function mapWithIndex(a, f) {
  return mapWithIndexU(a, _curry_js__WEBPACK_IMPORTED_MODULE_0__.__2(f));
}

function reduceU(a, x, f) {
  var r = x;
  for(var i = 0 ,i_finish = a.length; i < i_finish; ++i){
    r = f(r, a[i]);
  }
  return r;
}

function reduce(a, x, f) {
  return reduceU(a, x, _curry_js__WEBPACK_IMPORTED_MODULE_0__.__2(f));
}

function reduceReverseU(a, x, f) {
  var r = x;
  for(var i = a.length - 1 | 0; i >= 0; --i){
    r = f(r, a[i]);
  }
  return r;
}

function reduceReverse(a, x, f) {
  return reduceReverseU(a, x, _curry_js__WEBPACK_IMPORTED_MODULE_0__.__2(f));
}

function reduceReverse2U(a, b, x, f) {
  var r = x;
  var len = _caml_primitive_js__WEBPACK_IMPORTED_MODULE_3__.caml_int_min(a.length, b.length);
  for(var i = len - 1 | 0; i >= 0; --i){
    r = f(r, a[i], b[i]);
  }
  return r;
}

function reduceReverse2(a, b, x, f) {
  return reduceReverse2U(a, b, x, _curry_js__WEBPACK_IMPORTED_MODULE_0__.__3(f));
}

function reduceWithIndexU(a, x, f) {
  var r = x;
  for(var i = 0 ,i_finish = a.length; i < i_finish; ++i){
    r = f(r, a[i], i);
  }
  return r;
}

function reduceWithIndex(a, x, f) {
  return reduceWithIndexU(a, x, _curry_js__WEBPACK_IMPORTED_MODULE_0__.__3(f));
}

function everyU(arr, b) {
  var len = arr.length;
  var _i = 0;
  while(true) {
    var i = _i;
    if (i === len) {
      return true;
    }
    if (!b(arr[i])) {
      return false;
    }
    _i = i + 1 | 0;
    continue ;
  };
}

function every(arr, f) {
  return everyU(arr, _curry_js__WEBPACK_IMPORTED_MODULE_0__.__1(f));
}

function someU(arr, b) {
  var len = arr.length;
  var _i = 0;
  while(true) {
    var i = _i;
    if (i === len) {
      return false;
    }
    if (b(arr[i])) {
      return true;
    }
    _i = i + 1 | 0;
    continue ;
  };
}

function some(arr, f) {
  return someU(arr, _curry_js__WEBPACK_IMPORTED_MODULE_0__.__1(f));
}

function everyAux2(arr1, arr2, _i, b, len) {
  while(true) {
    var i = _i;
    if (i === len) {
      return true;
    }
    if (!b(arr1[i], arr2[i])) {
      return false;
    }
    _i = i + 1 | 0;
    continue ;
  };
}

function every2U(a, b, p) {
  return everyAux2(a, b, 0, p, _caml_primitive_js__WEBPACK_IMPORTED_MODULE_3__.caml_int_min(a.length, b.length));
}

function every2(a, b, p) {
  return every2U(a, b, _curry_js__WEBPACK_IMPORTED_MODULE_0__.__2(p));
}

function some2U(a, b, p) {
  var _i = 0;
  var len = _caml_primitive_js__WEBPACK_IMPORTED_MODULE_3__.caml_int_min(a.length, b.length);
  while(true) {
    var i = _i;
    if (i === len) {
      return false;
    }
    if (p(a[i], b[i])) {
      return true;
    }
    _i = i + 1 | 0;
    continue ;
  };
}

function some2(a, b, p) {
  return some2U(a, b, _curry_js__WEBPACK_IMPORTED_MODULE_0__.__2(p));
}

function eqU(a, b, p) {
  var lena = a.length;
  var lenb = b.length;
  if (lena === lenb) {
    return everyAux2(a, b, 0, p, lena);
  } else {
    return false;
  }
}

function eq(a, b, p) {
  return eqU(a, b, _curry_js__WEBPACK_IMPORTED_MODULE_0__.__2(p));
}

function cmpU(a, b, p) {
  var lena = a.length;
  var lenb = b.length;
  if (lena > lenb) {
    return 1;
  } else if (lena < lenb) {
    return -1;
  } else {
    var _i = 0;
    while(true) {
      var i = _i;
      if (i === lena) {
        return 0;
      }
      var c = p(a[i], b[i]);
      if (c !== 0) {
        return c;
      }
      _i = i + 1 | 0;
      continue ;
    };
  }
}

function cmp(a, b, p) {
  return cmpU(a, b, _curry_js__WEBPACK_IMPORTED_MODULE_0__.__2(p));
}

function partitionU(a, f) {
  var l = a.length;
  var i = 0;
  var j = 0;
  var a1 = new Array(l);
  var a2 = new Array(l);
  for(var ii = 0; ii < l; ++ii){
    var v = a[ii];
    if (f(v)) {
      a1[i] = v;
      i = i + 1 | 0;
    } else {
      a2[j] = v;
      j = j + 1 | 0;
    }
  }
  a1.length = i;
  a2.length = j;
  return [
          a1,
          a2
        ];
}

function partition(a, f) {
  return partitionU(a, _curry_js__WEBPACK_IMPORTED_MODULE_0__.__1(f));
}

function unzip(a) {
  var l = a.length;
  var a1 = new Array(l);
  var a2 = new Array(l);
  for(var i = 0; i < l; ++i){
    var match = a[i];
    a1[i] = match[0];
    a2[i] = match[1];
  }
  return [
          a1,
          a2
        ];
}

function joinWithU(a, sep, toString) {
  var l = a.length;
  if (l === 0) {
    return "";
  }
  var lastIndex = l - 1 | 0;
  var _i = 0;
  var _res = "";
  while(true) {
    var res = _res;
    var i = _i;
    if (i === lastIndex) {
      return res + toString(a[i]);
    }
    _res = res + (toString(a[i]) + sep);
    _i = i + 1 | 0;
    continue ;
  };
}

function joinWith(a, sep, toString) {
  return joinWithU(a, sep, _curry_js__WEBPACK_IMPORTED_MODULE_0__.__1(toString));
}


/* No side effect */


/***/ }),

/***/ "./node_modules/bs-platform/lib/es6/js_int.js":
/*!****************************************************!*\
  !*** ./node_modules/bs-platform/lib/es6/js_int.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "equal": () => /* binding */ equal,
/* harmony export */   "max": () => /* binding */ max,
/* harmony export */   "min": () => /* binding */ min
/* harmony export */ });



function equal(x, y) {
  return x === y;
}

var max = 2147483647;

var min = -2147483648;


/* No side effect */


/***/ }),

/***/ "./node_modules/bs-platform/lib/es6/js_math.js":
/*!*****************************************************!*\
  !*** ./node_modules/bs-platform/lib/es6/js_math.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "unsafe_ceil": () => /* binding */ unsafe_ceil,
/* harmony export */   "ceil_int": () => /* binding */ ceil_int,
/* harmony export */   "ceil": () => /* binding */ ceil,
/* harmony export */   "unsafe_floor": () => /* binding */ unsafe_floor,
/* harmony export */   "floor_int": () => /* binding */ floor_int,
/* harmony export */   "floor": () => /* binding */ floor,
/* harmony export */   "random_int": () => /* binding */ random_int
/* harmony export */ });
/* harmony import */ var _js_int_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js_int.js */ "./node_modules/bs-platform/lib/es6/js_int.js");




function unsafe_ceil(prim) {
  return Math.ceil(prim);
}

function ceil_int(f) {
  if (f > _js_int_js__WEBPACK_IMPORTED_MODULE_0__.max) {
    return _js_int_js__WEBPACK_IMPORTED_MODULE_0__.max;
  } else if (f < _js_int_js__WEBPACK_IMPORTED_MODULE_0__.min) {
    return _js_int_js__WEBPACK_IMPORTED_MODULE_0__.min;
  } else {
    return Math.ceil(f);
  }
}

function unsafe_floor(prim) {
  return Math.floor(prim);
}

function floor_int(f) {
  if (f > _js_int_js__WEBPACK_IMPORTED_MODULE_0__.max) {
    return _js_int_js__WEBPACK_IMPORTED_MODULE_0__.max;
  } else if (f < _js_int_js__WEBPACK_IMPORTED_MODULE_0__.min) {
    return _js_int_js__WEBPACK_IMPORTED_MODULE_0__.min;
  } else {
    return Math.floor(f);
  }
}

function random_int(min, max) {
  return floor_int(Math.random() * (max - min | 0)) + min | 0;
}

var ceil = ceil_int;

var floor = floor_int;


/* No side effect */


/***/ })

}]);