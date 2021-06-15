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
  // const currentPost = posts.filter(post => post.title == router.query.title)[0]
  // console.log(currentPost)

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__.default, {
    footer: false,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "text-center",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: _profile__WEBPACK_IMPORTED_MODULE_2__.posts.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: _profile__WEBPACK_IMPORTED_MODULE_2__.posts.imageUrl,
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
        children: _profile__WEBPACK_IMPORTED_MODULE_2__.posts.content
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


/***/ }),

/***/ "./profile.js":
/*!********************!*\
  !*** ./profile.js ***!
  \********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "skills": function() { return /* binding */ skills; },
/* harmony export */   "expirencies": function() { return /* binding */ expirencies; },
/* harmony export */   "projects": function() { return /* binding */ projects; },
/* harmony export */   "posts": function() { return /* binding */ posts; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
var skills = [{
  skill: 'Javascript',
  percentage: 100
}, {
  skill: 'Php',
  percentage: 85
}, {
  skill: 'Node',
  percentage: 70
}, {
  skill: 'React',
  percentage: 80
}, {
  skill: 'React Native',
  percentage: 70
}, {
  skill: 'Express',
  percentage: 70
}];
var expirencies = [{
  title: 'Frontend Developer en Prossa',
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu quam iaculis, consequat eros quis, aliquam ligula. Suspendisse potenti. Cras lacinia neque ac sem blandit placerat. Curabitur vitae elit luctus felis hendrerit fringilla. Ut quis urna pharetra, finibus ex ac, ornare lacus. Morbi et neque non justo fringilla hendrerit. Pellentesque nec dictum ligula. Curabitur elementum nisi sed mauris ornare tempus. Morbi vel ullamcorper lacus, sed vehicula purus. Suspendisse sed massa at nisl euismod faucibus. Suspendisse dictum viverra velit eu suscipit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus lacinia at lacus nec ornare. Vestibulum eu bibendum tortor.",
  from: 2018,
  to: 2019
}, {
  title: 'Frontend Developer en Deq',
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu quam iaculis, consequat eros quis, aliquam ligula. Suspendisse potenti. Cras lacinia neque ac sem blandit placerat. Curabitur vitae elit luctus felis hendrerit fringilla. Ut quis urna pharetra, finibus ex ac, ornare lacus. Morbi et neque non justo fringilla hendrerit. Pellentesque nec dictum ligula. Curabitur elementum nisi sed mauris ornare tempus. Morbi vel ullamcorper lacus, sed vehicula purus. Suspendisse sed massa at nisl euismod faucibus. Suspendisse dictum viverra velit eu suscipit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus lacinia at lacus nec ornare. Vestibulum eu bibendum tortor.",
  from: 2019,
  to: 2020
}, {
  title: 'Backend Developer en Anemona',
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu quam iaculis, consequat eros quis, aliquam ligula. Suspendisse potenti. Cras lacinia neque ac sem blandit placerat. Curabitur vitae elit luctus felis hendrerit fringilla. Ut quis urna pharetra, finibus ex ac, ornare lacus. Morbi et neque non justo fringilla hendrerit. Pellentesque nec dictum ligula. Curabitur elementum nisi sed mauris ornare tempus. Morbi vel ullamcorper lacus, sed vehicula purus. Suspendisse sed massa at nisl euismod faucibus. Suspendisse dictum viverra velit eu suscipit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus lacinia at lacus nec ornare. Vestibulum eu bibendum tortor.",
  from: 2020,
  to: 2021
}];
var projects = [{
  name: "Santo Sazon",
  description: "In auctor consectetur ex, eget posuere lorem convallis id. Donec lobortis ornare lorem, vel ultrices tortor maximus eget. Cras quis congue dui. Pellentesque euismod augue a bibendum posuere. Ut et ullamcorper arcu.",
  image: "canada.jpg"
}, {
  name: "Dalyza",
  description: "In auctor consectetur ex, eget posuere lorem convallis id. Donec lobortis ornare lorem, vel ultrices tortor maximus eget. Cras quis congue dui. Pellentesque euismod augue a bibendum posuere. Ut et ullamcorper arcu.",
  image: "canada.jpg"
}, {
  name: "A.U.M",
  description: "In auctor consectetur ex, eget posuere lorem convallis id. Donec lobortis ornare lorem, vel ultrices tortor maximus eget. Cras quis congue dui. Pellentesque euismod augue a bibendum posuere. Ut et ullamcorper arcu.",
  image: "canada.jpg"
}];
var posts = [{
  title: "php 8",
  content: "In auctor consectetur ex, eget posuere lorem convallis id. Donec lobortis ornare lorem, vel ultrices tortor maximus eget. Cras quis congue dui. Pellentesque euismod augue a bibendum posuere. Ut et ullamcorper arcu.",
  imageUrl: 'https://www.php.net/images/php8/php_8_released.png'
}, {
  title: "Laravel",
  content: "In auctor consectetur ex, eget posuere lorem convallis id. Donec lobortis ornare lorem, vel ultrices tortor maximus eget. Cras quis congue dui. Pellentesque euismod augue a bibendum posuere. Ut et ullamcorper arcu.",
  imageUrl: 'https://www.php.net/images/php8/php_8_released.png'
}, {
  title: "NextJS",
  content: "In auctor consectetur ex, eget posuere lorem convallis id. Donec lobortis ornare lorem, vel ultrices tortor maximus eget. Cras quis congue dui. Pellentesque euismod augue a bibendum posuere. Ut et ullamcorper arcu.",
  imageUrl: 'https://www.php.net/images/php8/php_8_released.png'
}];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJQb3N0Iiwicm91dGVyIiwidXNlUm91dGVyIiwicG9zdHMiLCJ0aXRsZSIsIndpZHRoIiwiY29udGVudCIsInNraWxscyIsInNraWxsIiwicGVyY2VudGFnZSIsImV4cGlyZW5jaWVzIiwiZGVzY3JpcHRpb24iLCJmcm9tIiwidG8iLCJwcm9qZWN0cyIsIm5hbWUiLCJpbWFnZSIsImltYWdlVXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBRWYsTUFBTUMsTUFBTSxHQUFHQyxTQUFTLEVBQXhCLENBRmUsQ0FHZjtBQUNBO0FBQ0E7O0FBQ0Esc0JBQ0ksOERBQUMsdURBQUQ7QUFBUSxVQUFNLEVBQUUsS0FBaEI7QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBQyxhQUFmO0FBQUEsOEJBQ0k7QUFBQSxrQkFBS0MsaURBQVdDO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJO0FBQUssV0FBRyxFQUFFRCxvREFBVjtBQUEwQixpQkFBUyxFQUFDLFdBQXBDO0FBQWdELGFBQUssRUFBRTtBQUFFRSxlQUFLLEVBQUU7QUFBVCxTQUF2RDtBQUF5RSxXQUFHLEVBQUM7QUFBN0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKLGVBR0k7QUFBQSxrQkFBSUYsbURBQWFHO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFTSCxDQWZEOztHQUFNTixJOztLQUFBQSxJO0FBaUJOLCtEQUFlQSxJQUFmLEUsQ0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Qk8sSUFBTU8sTUFBTSxHQUFHLENBQ2xCO0FBQ0lDLE9BQUssRUFBRSxZQURYO0FBRUlDLFlBQVUsRUFBRTtBQUZoQixDQURrQixFQUtsQjtBQUNJRCxPQUFLLEVBQUUsS0FEWDtBQUVJQyxZQUFVLEVBQUU7QUFGaEIsQ0FMa0IsRUFTbEI7QUFDSUQsT0FBSyxFQUFFLE1BRFg7QUFFSUMsWUFBVSxFQUFFO0FBRmhCLENBVGtCLEVBYWxCO0FBQ0lELE9BQUssRUFBRSxPQURYO0FBRUlDLFlBQVUsRUFBRTtBQUZoQixDQWJrQixFQWlCbEI7QUFDSUQsT0FBSyxFQUFFLGNBRFg7QUFFSUMsWUFBVSxFQUFFO0FBRmhCLENBakJrQixFQXFCbEI7QUFDSUQsT0FBSyxFQUFFLFNBRFg7QUFFSUMsWUFBVSxFQUFFO0FBRmhCLENBckJrQixDQUFmO0FBMkJBLElBQU1DLFdBQVcsR0FBRyxDQUN2QjtBQUNJTixPQUFLLEVBQUUsOEJBRFg7QUFFSU8sYUFBVyxFQUFFLGd0QkFGakI7QUFHSUMsTUFBSSxFQUFFLElBSFY7QUFJSUMsSUFBRSxFQUFFO0FBSlIsQ0FEdUIsRUFPdkI7QUFDSVQsT0FBSyxFQUFFLDJCQURYO0FBRUlPLGFBQVcsRUFBRSxndEJBRmpCO0FBR0lDLE1BQUksRUFBRSxJQUhWO0FBSUlDLElBQUUsRUFBRTtBQUpSLENBUHVCLEVBYXZCO0FBQ0lULE9BQUssRUFBRSw4QkFEWDtBQUVJTyxhQUFXLEVBQUUsZ3RCQUZqQjtBQUdJQyxNQUFJLEVBQUUsSUFIVjtBQUlJQyxJQUFFLEVBQUU7QUFKUixDQWJ1QixDQUFwQjtBQXFCQSxJQUFNQyxRQUFRLEdBQUcsQ0FDcEI7QUFDSUMsTUFBSSxFQUFFLGFBRFY7QUFFSUosYUFBVyxFQUFFLHdOQUZqQjtBQUdJSyxPQUFLLEVBQUU7QUFIWCxDQURvQixFQU1wQjtBQUNJRCxNQUFJLEVBQUUsUUFEVjtBQUVJSixhQUFXLEVBQUUsd05BRmpCO0FBR0lLLE9BQUssRUFBRTtBQUhYLENBTm9CLEVBV3BCO0FBQ0lELE1BQUksRUFBRSxPQURWO0FBRUlKLGFBQVcsRUFBRSx3TkFGakI7QUFHSUssT0FBSyxFQUFFO0FBSFgsQ0FYb0IsQ0FBakI7QUFrQkEsSUFBTWIsS0FBSyxHQUFHLENBQ2pCO0FBQ0lDLE9BQUssRUFBRSxPQURYO0FBRUlFLFNBQU8sRUFBRSx3TkFGYjtBQUdJVyxVQUFRLEVBQUM7QUFIYixDQURpQixFQU1qQjtBQUNJYixPQUFLLEVBQUUsU0FEWDtBQUVJRSxTQUFPLEVBQUUsd05BRmI7QUFHSVcsVUFBUSxFQUFDO0FBSGIsQ0FOaUIsRUFXakI7QUFDSWIsT0FBSyxFQUFFLFFBRFg7QUFFSUUsU0FBTyxFQUFFLHdOQUZiO0FBR0lXLFVBQVEsRUFBQztBQUhiLENBWGlCLENBQWQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdC4yM2M3YzU4OTMyNTkxYWE5ODgxZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIlxyXG4vLyBpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5pbXBvcnQgeyBwb3N0cyB9IGZyb20gJy4uL3Byb2ZpbGUnXHJcblxyXG5jb25zdCBQb3N0ID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgLy8gY29uc29sZS5sb2cocm91dGVyLnF1ZXJ5LnRpdGxlKVxyXG4gICAgLy8gY29uc3QgY3VycmVudFBvc3QgPSBwb3N0cy5maWx0ZXIocG9zdCA9PiBwb3N0LnRpdGxlID09IHJvdXRlci5xdWVyeS50aXRsZSlbMF1cclxuICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRQb3N0KVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0IGZvb3Rlcj17ZmFsc2V9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDE+e3Bvc3RzLnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17cG9zdHMuaW1hZ2VVcmx9IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHN0eWxlPXt7IHdpZHRoOiAnNTAlJyB9fSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHA+e3Bvc3RzLmNvbnRlbnR9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdFxyXG5cclxuLy8gY29uc3QgUG9zdCA9ICgpID0+IChcclxuLy8gICAgIDxMYXlvdXQ+XHJcbi8vICAgICAgICAgPGgxPkFxdWkgdmEgZWwgY29udGVuaWRlbyBkZSBsb3MgcG9zdHM8L2gxPlxyXG4vLyAgICAgPC9MYXlvdXQ+XHJcbi8vIClcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IFBvc3QiLCJleHBvcnQgY29uc3Qgc2tpbGxzID0gW1xyXG4gICAge1xyXG4gICAgICAgIHNraWxsOiAnSmF2YXNjcmlwdCcsXHJcbiAgICAgICAgcGVyY2VudGFnZTogMTAwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNraWxsOiAnUGhwJyxcclxuICAgICAgICBwZXJjZW50YWdlOiA4NVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBza2lsbDogJ05vZGUnLFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6IDcwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNraWxsOiAnUmVhY3QnLFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6IDgwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNraWxsOiAnUmVhY3QgTmF0aXZlJyxcclxuICAgICAgICBwZXJjZW50YWdlOiA3MFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBza2lsbDogJ0V4cHJlc3MnLFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6IDcwXHJcbiAgICB9LFxyXG5dXHJcblxyXG5leHBvcnQgY29uc3QgZXhwaXJlbmNpZXMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdGcm9udGVuZCBEZXZlbG9wZXIgZW4gUHJvc3NhJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBEb25lYyBldSBxdWFtIGlhY3VsaXMsIGNvbnNlcXVhdCBlcm9zIHF1aXMsIGFsaXF1YW0gbGlndWxhLiBTdXNwZW5kaXNzZSBwb3RlbnRpLiBDcmFzIGxhY2luaWEgbmVxdWUgYWMgc2VtIGJsYW5kaXQgcGxhY2VyYXQuIEN1cmFiaXR1ciB2aXRhZSBlbGl0IGx1Y3R1cyBmZWxpcyBoZW5kcmVyaXQgZnJpbmdpbGxhLiBVdCBxdWlzIHVybmEgcGhhcmV0cmEsIGZpbmlidXMgZXggYWMsIG9ybmFyZSBsYWN1cy4gTW9yYmkgZXQgbmVxdWUgbm9uIGp1c3RvIGZyaW5naWxsYSBoZW5kcmVyaXQuIFBlbGxlbnRlc3F1ZSBuZWMgZGljdHVtIGxpZ3VsYS4gQ3VyYWJpdHVyIGVsZW1lbnR1bSBuaXNpIHNlZCBtYXVyaXMgb3JuYXJlIHRlbXB1cy4gTW9yYmkgdmVsIHVsbGFtY29ycGVyIGxhY3VzLCBzZWQgdmVoaWN1bGEgcHVydXMuIFN1c3BlbmRpc3NlIHNlZCBtYXNzYSBhdCBuaXNsIGV1aXNtb2QgZmF1Y2lidXMuIFN1c3BlbmRpc3NlIGRpY3R1bSB2aXZlcnJhIHZlbGl0IGV1IHN1c2NpcGl0LiBWZXN0aWJ1bHVtIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzIG9yY2kgbHVjdHVzIGV0IHVsdHJpY2VzIHBvc3VlcmUgY3ViaWxpYSBjdXJhZTsgUGhhc2VsbHVzIGxhY2luaWEgYXQgbGFjdXMgbmVjIG9ybmFyZS4gVmVzdGlidWx1bSBldSBiaWJlbmR1bSB0b3J0b3IuXCIsXHJcbiAgICAgICAgZnJvbTogMjAxOCxcclxuICAgICAgICB0bzogMjAxOVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ0Zyb250ZW5kIERldmVsb3BlciBlbiBEZXEnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIERvbmVjIGV1IHF1YW0gaWFjdWxpcywgY29uc2VxdWF0IGVyb3MgcXVpcywgYWxpcXVhbSBsaWd1bGEuIFN1c3BlbmRpc3NlIHBvdGVudGkuIENyYXMgbGFjaW5pYSBuZXF1ZSBhYyBzZW0gYmxhbmRpdCBwbGFjZXJhdC4gQ3VyYWJpdHVyIHZpdGFlIGVsaXQgbHVjdHVzIGZlbGlzIGhlbmRyZXJpdCBmcmluZ2lsbGEuIFV0IHF1aXMgdXJuYSBwaGFyZXRyYSwgZmluaWJ1cyBleCBhYywgb3JuYXJlIGxhY3VzLiBNb3JiaSBldCBuZXF1ZSBub24ganVzdG8gZnJpbmdpbGxhIGhlbmRyZXJpdC4gUGVsbGVudGVzcXVlIG5lYyBkaWN0dW0gbGlndWxhLiBDdXJhYml0dXIgZWxlbWVudHVtIG5pc2kgc2VkIG1hdXJpcyBvcm5hcmUgdGVtcHVzLiBNb3JiaSB2ZWwgdWxsYW1jb3JwZXIgbGFjdXMsIHNlZCB2ZWhpY3VsYSBwdXJ1cy4gU3VzcGVuZGlzc2Ugc2VkIG1hc3NhIGF0IG5pc2wgZXVpc21vZCBmYXVjaWJ1cy4gU3VzcGVuZGlzc2UgZGljdHVtIHZpdmVycmEgdmVsaXQgZXUgc3VzY2lwaXQuIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIGN1cmFlOyBQaGFzZWxsdXMgbGFjaW5pYSBhdCBsYWN1cyBuZWMgb3JuYXJlLiBWZXN0aWJ1bHVtIGV1IGJpYmVuZHVtIHRvcnRvci5cIixcclxuICAgICAgICBmcm9tOiAyMDE5LFxyXG4gICAgICAgIHRvOiAyMDIwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnQmFja2VuZCBEZXZlbG9wZXIgZW4gQW5lbW9uYScsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gRG9uZWMgZXUgcXVhbSBpYWN1bGlzLCBjb25zZXF1YXQgZXJvcyBxdWlzLCBhbGlxdWFtIGxpZ3VsYS4gU3VzcGVuZGlzc2UgcG90ZW50aS4gQ3JhcyBsYWNpbmlhIG5lcXVlIGFjIHNlbSBibGFuZGl0IHBsYWNlcmF0LiBDdXJhYml0dXIgdml0YWUgZWxpdCBsdWN0dXMgZmVsaXMgaGVuZHJlcml0IGZyaW5naWxsYS4gVXQgcXVpcyB1cm5hIHBoYXJldHJhLCBmaW5pYnVzIGV4IGFjLCBvcm5hcmUgbGFjdXMuIE1vcmJpIGV0IG5lcXVlIG5vbiBqdXN0byBmcmluZ2lsbGEgaGVuZHJlcml0LiBQZWxsZW50ZXNxdWUgbmVjIGRpY3R1bSBsaWd1bGEuIEN1cmFiaXR1ciBlbGVtZW50dW0gbmlzaSBzZWQgbWF1cmlzIG9ybmFyZSB0ZW1wdXMuIE1vcmJpIHZlbCB1bGxhbWNvcnBlciBsYWN1cywgc2VkIHZlaGljdWxhIHB1cnVzLiBTdXNwZW5kaXNzZSBzZWQgbWFzc2EgYXQgbmlzbCBldWlzbW9kIGZhdWNpYnVzLiBTdXNwZW5kaXNzZSBkaWN0dW0gdml2ZXJyYSB2ZWxpdCBldSBzdXNjaXBpdC4gVmVzdGlidWx1bSBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgY3VyYWU7IFBoYXNlbGx1cyBsYWNpbmlhIGF0IGxhY3VzIG5lYyBvcm5hcmUuIFZlc3RpYnVsdW0gZXUgYmliZW5kdW0gdG9ydG9yLlwiLFxyXG4gICAgICAgIGZyb206IDIwMjAsXHJcbiAgICAgICAgdG86IDIwMjFcclxuICAgIH0sXHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBwcm9qZWN0cyA9IFtcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIlNhbnRvIFNhem9uXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiSW4gYXVjdG9yIGNvbnNlY3RldHVyIGV4LCBlZ2V0IHBvc3VlcmUgbG9yZW0gY29udmFsbGlzIGlkLiBEb25lYyBsb2JvcnRpcyBvcm5hcmUgbG9yZW0sIHZlbCB1bHRyaWNlcyB0b3J0b3IgbWF4aW11cyBlZ2V0LiBDcmFzIHF1aXMgY29uZ3VlIGR1aS4gUGVsbGVudGVzcXVlIGV1aXNtb2QgYXVndWUgYSBiaWJlbmR1bSBwb3N1ZXJlLiBVdCBldCB1bGxhbWNvcnBlciBhcmN1LlwiLFxyXG4gICAgICAgIGltYWdlOiBcImNhbmFkYS5qcGdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIkRhbHl6YVwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkluIGF1Y3RvciBjb25zZWN0ZXR1ciBleCwgZWdldCBwb3N1ZXJlIGxvcmVtIGNvbnZhbGxpcyBpZC4gRG9uZWMgbG9ib3J0aXMgb3JuYXJlIGxvcmVtLCB2ZWwgdWx0cmljZXMgdG9ydG9yIG1heGltdXMgZWdldC4gQ3JhcyBxdWlzIGNvbmd1ZSBkdWkuIFBlbGxlbnRlc3F1ZSBldWlzbW9kIGF1Z3VlIGEgYmliZW5kdW0gcG9zdWVyZS4gVXQgZXQgdWxsYW1jb3JwZXIgYXJjdS5cIixcclxuICAgICAgICBpbWFnZTogXCJjYW5hZGEuanBnXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJBLlUuTVwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkluIGF1Y3RvciBjb25zZWN0ZXR1ciBleCwgZWdldCBwb3N1ZXJlIGxvcmVtIGNvbnZhbGxpcyBpZC4gRG9uZWMgbG9ib3J0aXMgb3JuYXJlIGxvcmVtLCB2ZWwgdWx0cmljZXMgdG9ydG9yIG1heGltdXMgZWdldC4gQ3JhcyBxdWlzIGNvbmd1ZSBkdWkuIFBlbGxlbnRlc3F1ZSBldWlzbW9kIGF1Z3VlIGEgYmliZW5kdW0gcG9zdWVyZS4gVXQgZXQgdWxsYW1jb3JwZXIgYXJjdS5cIixcclxuICAgICAgICBpbWFnZTogXCJjYW5hZGEuanBnXCJcclxuICAgIH0sXHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBwb3N0cyA9IFtcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJwaHAgOFwiLFxyXG4gICAgICAgIGNvbnRlbnQ6IFwiSW4gYXVjdG9yIGNvbnNlY3RldHVyIGV4LCBlZ2V0IHBvc3VlcmUgbG9yZW0gY29udmFsbGlzIGlkLiBEb25lYyBsb2JvcnRpcyBvcm5hcmUgbG9yZW0sIHZlbCB1bHRyaWNlcyB0b3J0b3IgbWF4aW11cyBlZ2V0LiBDcmFzIHF1aXMgY29uZ3VlIGR1aS4gUGVsbGVudGVzcXVlIGV1aXNtb2QgYXVndWUgYSBiaWJlbmR1bSBwb3N1ZXJlLiBVdCBldCB1bGxhbWNvcnBlciBhcmN1LlwiLFxyXG4gICAgICAgIGltYWdlVXJsOidodHRwczovL3d3dy5waHAubmV0L2ltYWdlcy9waHA4L3BocF84X3JlbGVhc2VkLnBuZydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiTGFyYXZlbFwiLFxyXG4gICAgICAgIGNvbnRlbnQ6IFwiSW4gYXVjdG9yIGNvbnNlY3RldHVyIGV4LCBlZ2V0IHBvc3VlcmUgbG9yZW0gY29udmFsbGlzIGlkLiBEb25lYyBsb2JvcnRpcyBvcm5hcmUgbG9yZW0sIHZlbCB1bHRyaWNlcyB0b3J0b3IgbWF4aW11cyBlZ2V0LiBDcmFzIHF1aXMgY29uZ3VlIGR1aS4gUGVsbGVudGVzcXVlIGV1aXNtb2QgYXVndWUgYSBiaWJlbmR1bSBwb3N1ZXJlLiBVdCBldCB1bGxhbWNvcnBlciBhcmN1LlwiLFxyXG4gICAgICAgIGltYWdlVXJsOidodHRwczovL3d3dy5waHAubmV0L2ltYWdlcy9waHA4L3BocF84X3JlbGVhc2VkLnBuZydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiTmV4dEpTXCIsXHJcbiAgICAgICAgY29udGVudDogXCJJbiBhdWN0b3IgY29uc2VjdGV0dXIgZXgsIGVnZXQgcG9zdWVyZSBsb3JlbSBjb252YWxsaXMgaWQuIERvbmVjIGxvYm9ydGlzIG9ybmFyZSBsb3JlbSwgdmVsIHVsdHJpY2VzIHRvcnRvciBtYXhpbXVzIGVnZXQuIENyYXMgcXVpcyBjb25ndWUgZHVpLiBQZWxsZW50ZXNxdWUgZXVpc21vZCBhdWd1ZSBhIGJpYmVuZHVtIHBvc3VlcmUuIFV0IGV0IHVsbGFtY29ycGVyIGFyY3UuXCIsXHJcbiAgICAgICAgaW1hZ2VVcmw6J2h0dHBzOi8vd3d3LnBocC5uZXQvaW1hZ2VzL3BocDgvcGhwXzhfcmVsZWFzZWQucG5nJ1xyXG4gICAgfSxcclxuXSJdLCJzb3VyY2VSb290IjoiIn0=