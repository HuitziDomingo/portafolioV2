(function() {
var exports = {};
exports.id = "pages/post";
exports.ids = ["pages/post"];
exports.modules = {

/***/ "./pages/post.js":
/*!***********************!*\
  !*** ./pages/post.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../profile */ "./profile.js");

var _jsxFileName = "D:\\next\\pruebaUno\\pages\\post.js";




const Post = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)(); // console.log(router.query.title)

  const currentPost = _profile__WEBPACK_IMPORTED_MODULE_3__.posts.filter(post => post.title == router.query.title)[0]; // console.log(currentPost)

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
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
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
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: currentPost.content
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Post); // const Post = () => (
//     <Layout>
//         <h1>Aqui va el contenideo de los posts</h1>
//     </Layout>
// )
// export default Post

/***/ }),

/***/ "./profile.js":
/*!********************!*\
  !*** ./profile.js ***!
  \********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "skills": function() { return /* binding */ skills; },
/* harmony export */   "expirencies": function() { return /* binding */ expirencies; },
/* harmony export */   "projects": function() { return /* binding */ projects; },
/* harmony export */   "posts": function() { return /* binding */ posts; }
/* harmony export */ });
const skills = [{
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
const expirencies = [{
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
const projects = [{
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
const posts = [{
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

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("nprogress");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_Layout_js"], function() { return __webpack_exec__("./pages/post.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcnVlYmEvLi9wYWdlcy9wb3N0LmpzIiwid2VicGFjazovL3BydWViYS8uL3Byb2ZpbGUuanMiLCJ3ZWJwYWNrOi8vcHJ1ZWJhL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL3BydWViYS9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9wcnVlYmEvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL3BydWViYS9leHRlcm5hbCBcIm5wcm9ncmVzc1wiIiwid2VicGFjazovL3BydWViYS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vcHJ1ZWJhL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9wcnVlYmEvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJQb3N0Iiwicm91dGVyIiwidXNlUm91dGVyIiwiY3VycmVudFBvc3QiLCJwb3N0cyIsInBvc3QiLCJ0aXRsZSIsInF1ZXJ5IiwiaW1hZ2VVcmwiLCJ3aWR0aCIsImNvbnRlbnQiLCJza2lsbHMiLCJza2lsbCIsInBlcmNlbnRhZ2UiLCJleHBpcmVuY2llcyIsImRlc2NyaXB0aW9uIiwiZnJvbSIsInRvIiwicHJvamVjdHMiLCJuYW1lIiwiaW1hZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsSUFBSSxHQUFHLE1BQU07QUFFZixRQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCLENBRmUsQ0FHZjs7QUFDQSxRQUFNQyxXQUFXLEdBQUdDLGtEQUFBLENBQWFDLElBQUksSUFBSUEsSUFBSSxDQUFDQyxLQUFMLElBQWNMLE1BQU0sQ0FBQ00sS0FBUCxD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QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9wb3N0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIlxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5pbXBvcnQgeyBwb3N0cyB9IGZyb20gJy4uL3Byb2ZpbGUnXHJcblxyXG5jb25zdCBQb3N0ID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgLy8gY29uc29sZS5sb2cocm91dGVyLnF1ZXJ5LnRpdGxlKVxyXG4gICAgY29uc3QgY3VycmVudFBvc3QgPSBwb3N0cy5maWx0ZXIocG9zdCA9PiBwb3N0LnRpdGxlID09IHJvdXRlci5xdWVyeS50aXRsZSlbMF1cclxuICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRQb3N0KVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0IGZvb3Rlcj17ZmFsc2V9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDE+e2N1cnJlbnRQb3N0LnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17Y3VycmVudFBvc3QuaW1hZ2VVcmx9IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHN0eWxlPXt7IHdpZHRoOiAnNTAlJyB9fSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHA+e2N1cnJlbnRQb3N0LmNvbnRlbnR9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdFxyXG5cclxuLy8gY29uc3QgUG9zdCA9ICgpID0+IChcclxuLy8gICAgIDxMYXlvdXQ+XHJcbi8vICAgICAgICAgPGgxPkFxdWkgdmEgZWwgY29udGVuaWRlbyBkZSBsb3MgcG9zdHM8L2gxPlxyXG4vLyAgICAgPC9MYXlvdXQ+XHJcbi8vIClcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IFBvc3QiLCJleHBvcnQgY29uc3Qgc2tpbGxzID0gW1xyXG4gICAge1xyXG4gICAgICAgIHNraWxsOiAnSmF2YXNjcmlwdCcsXHJcbiAgICAgICAgcGVyY2VudGFnZTogMTAwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNraWxsOiAnUGhwJyxcclxuICAgICAgICBwZXJjZW50YWdlOiA4NVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBza2lsbDogJ05vZGUnLFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6IDcwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNraWxsOiAnUmVhY3QnLFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6IDgwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNraWxsOiAnUmVhY3QgTmF0aXZlJyxcclxuICAgICAgICBwZXJjZW50YWdlOiA3MFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBza2lsbDogJ0V4cHJlc3MnLFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6IDcwXHJcbiAgICB9LFxyXG5dXHJcblxyXG5leHBvcnQgY29uc3QgZXhwaXJlbmNpZXMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdGcm9udGVuZCBEZXZlbG9wZXIgZW4gUHJvc3NhJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBEb25lYyBldSBxdWFtIGlhY3VsaXMsIGNvbnNlcXVhdCBlcm9zIHF1aXMsIGFsaXF1YW0gbGlndWxhLiBTdXNwZW5kaXNzZSBwb3RlbnRpLiBDcmFzIGxhY2luaWEgbmVxdWUgYWMgc2VtIGJsYW5kaXQgcGxhY2VyYXQuIEN1cmFiaXR1ciB2aXRhZSBlbGl0IGx1Y3R1cyBmZWxpcyBoZW5kcmVyaXQgZnJpbmdpbGxhLiBVdCBxdWlzIHVybmEgcGhhcmV0cmEsIGZpbmlidXMgZXggYWMsIG9ybmFyZSBsYWN1cy4gTW9yYmkgZXQgbmVxdWUgbm9uIGp1c3RvIGZyaW5naWxsYSBoZW5kcmVyaXQuIFBlbGxlbnRlc3F1ZSBuZWMgZGljdHVtIGxpZ3VsYS4gQ3VyYWJpdHVyIGVsZW1lbnR1bSBuaXNpIHNlZCBtYXVyaXMgb3JuYXJlIHRlbXB1cy4gTW9yYmkgdmVsIHVsbGFtY29ycGVyIGxhY3VzLCBzZWQgdmVoaWN1bGEgcHVydXMuIFN1c3BlbmRpc3NlIHNlZCBtYXNzYSBhdCBuaXNsIGV1aXNtb2QgZmF1Y2lidXMuIFN1c3BlbmRpc3NlIGRpY3R1bSB2aXZlcnJhIHZlbGl0IGV1IHN1c2NpcGl0LiBWZXN0aWJ1bHVtIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzIG9yY2kgbHVjdHVzIGV0IHVsdHJpY2VzIHBvc3VlcmUgY3ViaWxpYSBjdXJhZTsgUGhhc2VsbHVzIGxhY2luaWEgYXQgbGFjdXMgbmVjIG9ybmFyZS4gVmVzdGlidWx1bSBldSBiaWJlbmR1bSB0b3J0b3IuXCIsXHJcbiAgICAgICAgZnJvbTogMjAxOCxcclxuICAgICAgICB0bzogMjAxOVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ0Zyb250ZW5kIERldmVsb3BlciBlbiBEZXEnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIERvbmVjIGV1IHF1YW0gaWFjdWxpcywgY29uc2VxdWF0IGVyb3MgcXVpcywgYWxpcXVhbSBsaWd1bGEuIFN1c3BlbmRpc3NlIHBvdGVudGkuIENyYXMgbGFjaW5pYSBuZXF1ZSBhYyBzZW0gYmxhbmRpdCBwbGFjZXJhdC4gQ3VyYWJpdHVyIHZpdGFlIGVsaXQgbHVjdHVzIGZlbGlzIGhlbmRyZXJpdCBmcmluZ2lsbGEuIFV0IHF1aXMgdXJuYSBwaGFyZXRyYSwgZmluaWJ1cyBleCBhYywgb3JuYXJlIGxhY3VzLiBNb3JiaSBldCBuZXF1ZSBub24ganVzdG8gZnJpbmdpbGxhIGhlbmRyZXJpdC4gUGVsbGVudGVzcXVlIG5lYyBkaWN0dW0gbGlndWxhLiBDdXJhYml0dXIgZWxlbWVudHVtIG5pc2kgc2VkIG1hdXJpcyBvcm5hcmUgdGVtcHVzLiBNb3JiaSB2ZWwgdWxsYW1jb3JwZXIgbGFjdXMsIHNlZCB2ZWhpY3VsYSBwdXJ1cy4gU3VzcGVuZGlzc2Ugc2VkIG1hc3NhIGF0IG5pc2wgZXVpc21vZCBmYXVjaWJ1cy4gU3VzcGVuZGlzc2UgZGljdHVtIHZpdmVycmEgdmVsaXQgZXUgc3VzY2lwaXQuIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIGN1cmFlOyBQaGFzZWxsdXMgbGFjaW5pYSBhdCBsYWN1cyBuZWMgb3JuYXJlLiBWZXN0aWJ1bHVtIGV1IGJpYmVuZHVtIHRvcnRvci5cIixcclxuICAgICAgICBmcm9tOiAyMDE5LFxyXG4gICAgICAgIHRvOiAyMDIwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnQmFja2VuZCBEZXZlbG9wZXIgZW4gQW5lbW9uYScsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gRG9uZWMgZXUgcXVhbSBpYWN1bGlzLCBjb25zZXF1YXQgZXJvcyBxdWlzLCBhbGlxdWFtIGxpZ3VsYS4gU3VzcGVuZGlzc2UgcG90ZW50aS4gQ3JhcyBsYWNpbmlhIG5lcXVlIGFjIHNlbSBibGFuZGl0IHBsYWNlcmF0LiBDdXJhYml0dXIgdml0YWUgZWxpdCBsdWN0dXMgZmVsaXMgaGVuZHJlcml0IGZyaW5naWxsYS4gVXQgcXVpcyB1cm5hIHBoYXJldHJhLCBmaW5pYnVzIGV4IGFjLCBvcm5hcmUgbGFjdXMuIE1vcmJpIGV0IG5lcXVlIG5vbiBqdXN0byBmcmluZ2lsbGEgaGVuZHJlcml0LiBQZWxsZW50ZXNxdWUgbmVjIGRpY3R1bSBsaWd1bGEuIEN1cmFiaXR1ciBlbGVtZW50dW0gbmlzaSBzZWQgbWF1cmlzIG9ybmFyZSB0ZW1wdXMuIE1vcmJpIHZlbCB1bGxhbWNvcnBlciBsYWN1cywgc2VkIHZlaGljdWxhIHB1cnVzLiBTdXNwZW5kaXNzZSBzZWQgbWFzc2EgYXQgbmlzbCBldWlzbW9kIGZhdWNpYnVzLiBTdXNwZW5kaXNzZSBkaWN0dW0gdml2ZXJyYSB2ZWxpdCBldSBzdXNjaXBpdC4gVmVzdGlidWx1bSBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgY3VyYWU7IFBoYXNlbGx1cyBsYWNpbmlhIGF0IGxhY3VzIG5lYyBvcm5hcmUuIFZlc3RpYnVsdW0gZXUgYmliZW5kdW0gdG9ydG9yLlwiLFxyXG4gICAgICAgIGZyb206IDIwMjAsXHJcbiAgICAgICAgdG86IDIwMjFcclxuICAgIH0sXHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBwcm9qZWN0cyA9IFtcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIlNhbnRvIFNhem9uXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiSW4gYXVjdG9yIGNvbnNlY3RldHVyIGV4LCBlZ2V0IHBvc3VlcmUgbG9yZW0gY29udmFsbGlzIGlkLiBEb25lYyBsb2JvcnRpcyBvcm5hcmUgbG9yZW0sIHZlbCB1bHRyaWNlcyB0b3J0b3IgbWF4aW11cyBlZ2V0LiBDcmFzIHF1aXMgY29uZ3VlIGR1aS4gUGVsbGVudGVzcXVlIGV1aXNtb2QgYXVndWUgYSBiaWJlbmR1bSBwb3N1ZXJlLiBVdCBldCB1bGxhbWNvcnBlciBhcmN1LlwiLFxyXG4gICAgICAgIGltYWdlOiBcImNhbmFkYS5qcGdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIkRhbHl6YVwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkluIGF1Y3RvciBjb25zZWN0ZXR1ciBleCwgZWdldCBwb3N1ZXJlIGxvcmVtIGNvbnZhbGxpcyBpZC4gRG9uZWMgbG9ib3J0aXMgb3JuYXJlIGxvcmVtLCB2ZWwgdWx0cmljZXMgdG9ydG9yIG1heGltdXMgZWdldC4gQ3JhcyBxdWlzIGNvbmd1ZSBkdWkuIFBlbGxlbnRlc3F1ZSBldWlzbW9kIGF1Z3VlIGEgYmliZW5kdW0gcG9zdWVyZS4gVXQgZXQgdWxsYW1jb3JwZXIgYXJjdS5cIixcclxuICAgICAgICBpbWFnZTogXCJjYW5hZGEuanBnXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJBLlUuTVwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkluIGF1Y3RvciBjb25zZWN0ZXR1ciBleCwgZWdldCBwb3N1ZXJlIGxvcmVtIGNvbnZhbGxpcyBpZC4gRG9uZWMgbG9ib3J0aXMgb3JuYXJlIGxvcmVtLCB2ZWwgdWx0cmljZXMgdG9ydG9yIG1heGltdXMgZWdldC4gQ3JhcyBxdWlzIGNvbmd1ZSBkdWkuIFBlbGxlbnRlc3F1ZSBldWlzbW9kIGF1Z3VlIGEgYmliZW5kdW0gcG9zdWVyZS4gVXQgZXQgdWxsYW1jb3JwZXIgYXJjdS5cIixcclxuICAgICAgICBpbWFnZTogXCJjYW5hZGEuanBnXCJcclxuICAgIH0sXHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBwb3N0cyA9IFtcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJwaHAgOFwiLFxyXG4gICAgICAgIGNvbnRlbnQ6IFwiSW4gYXVjdG9yIGNvbnNlY3RldHVyIGV4LCBlZ2V0IHBvc3VlcmUgbG9yZW0gY29udmFsbGlzIGlkLiBEb25lYyBsb2JvcnRpcyBvcm5hcmUgbG9yZW0sIHZlbCB1bHRyaWNlcyB0b3J0b3IgbWF4aW11cyBlZ2V0LiBDcmFzIHF1aXMgY29uZ3VlIGR1aS4gUGVsbGVudGVzcXVlIGV1aXNtb2QgYXVndWUgYSBiaWJlbmR1bSBwb3N1ZXJlLiBVdCBldCB1bGxhbWNvcnBlciBhcmN1LlwiLFxyXG4gICAgICAgIGltYWdlVXJsOidodHRwczovL3d3dy5waHAubmV0L2ltYWdlcy9waHA4L3BocF84X3JlbGVhc2VkLnBuZydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiTGFyYXZlbFwiLFxyXG4gICAgICAgIGNvbnRlbnQ6IFwiSW4gYXVjdG9yIGNvbnNlY3RldHVyIGV4LCBlZ2V0IHBvc3VlcmUgbG9yZW0gY29udmFsbGlzIGlkLiBEb25lYyBsb2JvcnRpcyBvcm5hcmUgbG9yZW0sIHZlbCB1bHRyaWNlcyB0b3J0b3IgbWF4aW11cyBlZ2V0LiBDcmFzIHF1aXMgY29uZ3VlIGR1aS4gUGVsbGVudGVzcXVlIGV1aXNtb2QgYXVndWUgYSBiaWJlbmR1bSBwb3N1ZXJlLiBVdCBldCB1bGxhbWNvcnBlciBhcmN1LlwiLFxyXG4gICAgICAgIGltYWdlVXJsOidodHRwczovL3d3dy5waHAubmV0L2ltYWdlcy9waHA4L3BocF84X3JlbGVhc2VkLnBuZydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiTmV4dEpTXCIsXHJcbiAgICAgICAgY29udGVudDogXCJJbiBhdWN0b3IgY29uc2VjdGV0dXIgZXgsIGVnZXQgcG9zdWVyZSBsb3JlbSBjb252YWxsaXMgaWQuIERvbmVjIGxvYm9ydGlzIG9ybmFyZSBsb3JlbSwgdmVsIHVsdHJpY2VzIHRvcnRvciBtYXhpbXVzIGVnZXQuIENyYXMgcXVpcyBjb25ndWUgZHVpLiBQZWxsZW50ZXNxdWUgZXVpc21vZCBhdWd1ZSBhIGJpYmVuZHVtIHBvc3VlcmUuIFV0IGV0IHVsbGFtY29ycGVyIGFyY3UuXCIsXHJcbiAgICAgICAgaW1hZ2VVcmw6J2h0dHBzOi8vd3d3LnBocC5uZXQvaW1hZ2VzL3BocDgvcGhwXzhfcmVsZWFzZWQucG5nJ1xyXG4gICAgfSxcclxuXSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJucHJvZ3Jlc3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9