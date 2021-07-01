self["webpackHotUpdate_N_E"]("pages/post",{

/***/ "./pages/post.js":
/*!***********************!*\
  !*** ./pages/post.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../profile */ "./profile.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\next\\pruebaUno\\pages\\post.js",
    _this = undefined,
    _s = $RefreshSig$();





var Post = function Post() {
  _s();

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  console.log(router.query.title);
  var currentPost = _profile__WEBPACK_IMPORTED_MODULE_3__.posts.filter(function (post) {
    return post.title == router.query.title;
  })[0];
  console.log(currentPost);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__.default, {
    footer: false,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "text-center",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: currentPost.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: currentPost.imageUrl,
        className: "img-fluid",
        style: {
          width: '50%'
        },
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: currentPost.content
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, _this);
};

_s(Post, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];
});

_c = Post;
/* harmony default export */ __webpack_exports__["default"] = (Post); // const Post = () => (
//     <Layout>
//         <h1>Aqui va el contenideo de los posts</h1>
//     </Layout>
// )
// export default Post

var _c;

$RefreshReg$(_c, "Post");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC5qcyJdLCJuYW1lcyI6WyJQb3N0Iiwicm91dGVyIiwidXNlUm91dGVyIiwiY29uc29sZSIsImxvZyIsInF1ZXJ5IiwidGl0bGUiLCJjdXJyZW50UG9zdCIsInBvc3RzIiwicG9zdCIsImltYWdlVXJsIiwid2lkdGgiLCJjb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBRWYsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsTUFBTSxDQUFDSSxLQUFQLENBQWFDLEtBQXpCO0FBQ0EsTUFBTUMsV0FBVyxHQUFHQyxrREFBQSxDQUFhLFVBQUFDLElBQUk7QUFBQSxXQUFJQSxJQUFJLENBQUNILEtBQUwsSUFBY0wsTUFBTSxDQUFDSSxLQUFQLENBQWFDLEtBQS9CO0FBQUEsR0FBakIsRUFBdUQsQ0FBdkQsQ0FBcEI7QUFDQUgsU0FBTyxDQUFDQyxHQUFSLENBQVlHLFdBQVo7QUFDQSxzQkFDSSw4REFBQyx1REFBRDtBQUFRLFVBQU0sRUFBRSxLQUFoQjtBQUFBLDJCQUNJO0FBQUssZUFBUyxFQUFDLGFBQWY7QUFBQSw4QkFDSTtBQUFBLGtCQUFLQSxXQUFXLENBQUNEO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJO0FBQUssV0FBRyxFQUFFQyxXQUFXLENBQUNHLFFBQXRCO0FBQWdDLGlCQUFTLEVBQUMsV0FBMUM7QUFBc0QsYUFBSyxFQUFFO0FBQUVDLGVBQUssRUFBRTtBQUFULFNBQTdEO0FBQStFLFdBQUcsRUFBQztBQUFuRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkosZUFHSTtBQUFBLGtCQUFJSixXQUFXLENBQUNLO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFTSCxDQWZEOztHQUFNWixJO1VBRWFFLGtEOzs7S0FGYkYsSTtBQWlCTiwrREFBZUEsSUFBZixFLENBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3QuYTQ0MGFmMzlmODQ0YmE2NWRiMTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCJcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcclxuaW1wb3J0IHsgcG9zdHMgfSBmcm9tICcuLi9wcm9maWxlJ1xyXG5cclxuY29uc3QgUG9zdCA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnNvbGUubG9nKHJvdXRlci5xdWVyeS50aXRsZSlcclxuICAgIGNvbnN0IGN1cnJlbnRQb3N0ID0gcG9zdHMuZmlsdGVyKHBvc3QgPT4gcG9zdC50aXRsZSA9PSByb3V0ZXIucXVlcnkudGl0bGUpWzBdXHJcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50UG9zdClcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dCBmb290ZXI9e2ZhbHNlfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGgxPntjdXJyZW50UG9zdC50aXRsZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2N1cnJlbnRQb3N0LmltYWdlVXJsfSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzdHlsZT17eyB3aWR0aDogJzUwJScgfX0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgIDxwPntjdXJyZW50UG9zdC5jb250ZW50fTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RcclxuXHJcbi8vIGNvbnN0IFBvc3QgPSAoKSA9PiAoXHJcbi8vICAgICA8TGF5b3V0PlxyXG4vLyAgICAgICAgIDxoMT5BcXVpIHZhIGVsIGNvbnRlbmlkZW8gZGUgbG9zIHBvc3RzPC9oMT5cclxuLy8gICAgIDwvTGF5b3V0PlxyXG4vLyApXHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBQb3N0Il0sInNvdXJjZVJvb3QiOiIifQ==