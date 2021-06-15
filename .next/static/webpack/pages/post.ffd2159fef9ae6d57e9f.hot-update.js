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
/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../profile */ "./profile.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\next\\pruebaUno\\pages\\post.js",
    _this = undefined,
    _s = $RefreshSig$();

 // import { useRouter } from "next/router"



var Post = function Post() {
  _s();

  var router = useRouter(); // console.log(router.query.title)

  var currentPost = _profile__WEBPACK_IMPORTED_MODULE_2__.posts.filter(function (post) {
    return post.title == router.query.title;
  })[0]; // console.log(currentPost)

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

_s(Post, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", true);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC5qcyJdLCJuYW1lcyI6WyJQb3N0Iiwicm91dGVyIiwidXNlUm91dGVyIiwiY3VycmVudFBvc3QiLCJwb3N0cyIsInBvc3QiLCJ0aXRsZSIsInF1ZXJ5IiwiaW1hZ2VVcmwiLCJ3aWR0aCIsImNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUNBOztBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFFZixNQUFNQyxNQUFNLEdBQUdDLFNBQVMsRUFBeEIsQ0FGZSxDQUdmOztBQUNBLE1BQU1DLFdBQVcsR0FBR0Msa0RBQUEsQ0FBYSxVQUFBQyxJQUFJO0FBQUEsV0FBSUEsSUFBSSxDQUFDQyxLQUFMLElBQWNMLE1BQU0sQ0FBQ00sS0FBUCxDQUFhRCxLQUEvQjtBQUFBLEdBQWpCLEVBQXVELENBQXZELENBQXBCLENBSmUsQ0FLZjs7QUFDQSxzQkFDSSw4REFBQyx1REFBRDtBQUFRLFVBQU0sRUFBRSxLQUFoQjtBQUFBLDJCQUNJO0FBQUssZUFBUyxFQUFDLGFBQWY7QUFBQSw4QkFDSTtBQUFBLGtCQUFLSCxXQUFXLENBQUNHO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJO0FBQUssV0FBRyxFQUFFSCxXQUFXLENBQUNLLFFBQXRCO0FBQWdDLGlCQUFTLEVBQUMsV0FBMUM7QUFBc0QsYUFBSyxFQUFFO0FBQUVDLGVBQUssRUFBRTtBQUFULFNBQTdEO0FBQStFLFdBQUcsRUFBQztBQUFuRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkosZUFHSTtBQUFBLGtCQUFJTixXQUFXLENBQUNPO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFTSCxDQWZEOztHQUFNVixJOztLQUFBQSxJO0FBaUJOLCtEQUFlQSxJQUFmLEUsQ0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdC5mZmQyMTU5ZmVmOWFlNmQ1N2U5Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIlxyXG4vLyBpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5pbXBvcnQgeyBwb3N0cyB9IGZyb20gJy4uL3Byb2ZpbGUnXHJcblxyXG5jb25zdCBQb3N0ID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgLy8gY29uc29sZS5sb2cocm91dGVyLnF1ZXJ5LnRpdGxlKVxyXG4gICAgY29uc3QgY3VycmVudFBvc3QgPSBwb3N0cy5maWx0ZXIocG9zdCA9PiBwb3N0LnRpdGxlID09IHJvdXRlci5xdWVyeS50aXRsZSlbMF1cclxuICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRQb3N0KVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0IGZvb3Rlcj17ZmFsc2V9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDE+e2N1cnJlbnRQb3N0LnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17Y3VycmVudFBvc3QuaW1hZ2VVcmx9IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHN0eWxlPXt7IHdpZHRoOiAnNTAlJyB9fSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHA+e2N1cnJlbnRQb3N0LmNvbnRlbnR9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdFxyXG5cclxuLy8gY29uc3QgUG9zdCA9ICgpID0+IChcclxuLy8gICAgIDxMYXlvdXQ+XHJcbi8vICAgICAgICAgPGgxPkFxdWkgdmEgZWwgY29udGVuaWRlbyBkZSBsb3MgcG9zdHM8L2gxPlxyXG4vLyAgICAgPC9MYXlvdXQ+XHJcbi8vIClcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IFBvc3QiXSwic291cmNlUm9vdCI6IiJ9