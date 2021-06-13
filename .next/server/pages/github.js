(function() {
var exports = {};
exports.id = "pages/github";
exports.ids = ["pages/github"];
exports.modules = {

/***/ "./pages/github.js":
/*!*************************!*\
  !*** ./pages/github.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_error */ "./pages/_error.js");

var _jsxFileName = "D:\\next\\pruebaUno\\pages\\github.js";



const Github = ({
  user,
  codeStatus
}) => {
  // console.log(props)
  if (codeStatus) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_error__WEBPACK_IMPORTED_MODULE_2__.default, {
    codeStatus: codeStatus
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 27
  }, undefined);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__.default, {
    footer: false,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "row",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col-md-4 offset-md-4",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "card card-body text-center",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
            children: user.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: user.avatar_url,
            alt: "",
            className: "img-fluid"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: user.bio
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: user.blog,
            target: "_blank",
            className: "btn btn-primary my-2",
            children: "Mi Blog"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: user.html_url,
            target: "_blank",
            className: "btn btn-outline-secondary my-1",
            children: "Ir a mi GitHub"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, undefined);
};

async function getServerSideProps() {
  let res = await fetch('https://api.github.com/users/HuitziDomingo');
  let data = await res.json();
  let codeStatus = res.status > 200 ? res.status : false;
  return {
    props: {
      user: data,
      codeStatus
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (Github);

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_Layout_js","pages__error_js"], function() { return __webpack_exec__("./pages/github.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcnVlYmEvLi9wYWdlcy9naXRodWIuanMiLCJ3ZWJwYWNrOi8vcHJ1ZWJhL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL3BydWViYS9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9wcnVlYmEvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL3BydWViYS9leHRlcm5hbCBcIm5wcm9ncmVzc1wiIiwid2VicGFjazovL3BydWViYS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vcHJ1ZWJhL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9wcnVlYmEvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJHaXRodWIiLCJ1c2VyIiwiY29kZVN0YXR1cyIsIm5hbWUiLCJhdmF0YXJfdXJsIiwiYmlvIiwiYmxvZyIsImh0bWxfdXJsIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicmVzIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsInN0YXR1cyIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsTUFBTSxHQUFHLENBQUM7QUFBRUMsTUFBRjtBQUFRQztBQUFSLENBQUQsS0FBMEI7QUFDckM7QUFFQSxNQUFHQSxVQUFILEVBQWUsb0JBQU8sOERBQUMsMkNBQUQ7QUFBTyxjQUFVLEVBQUVBO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUVmLHNCQUNJLDhEQUFDLHVEQUFEO0FBQVEsVUFBTSxFQUFFLEtBQWhCO0FBQUEsMkJBQ0k7QUFBSyxlQUFTLEVBQUMsS0FBZjtBQUFBLDZCQUNJO0FBQUssaUJBQVMsRUFBQyxzQkFBZjtBQUFBLCtCQUNJO0FBQUssbUJBQVMsRUFBQyw0QkFBZjtBQUFBLGtDQUNJO0FBQUEsc0JBQUtELElBQUksQ0FBQ0U7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLGVBRUk7QUFBSyxlQUFHLEVBQUVGLElBQUksQ0FBQ0csVUFBZjtBQUEyQixlQUFHLEVBQUMsRUFBL0I7QUFBa0MscUJBQVMsRUFBQztBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZKLGVBR0k7QUFBQSxzQkFBSUgsSUFBSSxDQUFDSTtBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSEosZUFJSTtBQUFHLGdCQUFJLEVBQUVKLElBQUksQ0FBQ0ssSUFBZDtBQUFvQixrQkFBTSxFQUFDLFFBQTNCO0FBQW9DLHFCQUFTLEVBQUMsc0JBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUpKLGVBS0k7QUFBRyxnQkFBSSxFQUFFTCxJQUFJLENBQUNNLFFBQWQ7QUFBd0Isa0JBQU0sRUFBQyxRQUEvQjtBQUF3QyxxQkFBUyxFQUFDLGdDQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQWVILENBcEJEOztBQXNCTyxlQUFlQyxrQkFBZixHQUFvQztBQUN2QyxNQUFJQyxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFDLDRDQUFELENBQXJCO0FBQ0EsTUFBSUMsSUFBSSxHQUFHLE1BQU1GLEdBQUcsQ0FBQ0csSUFBSixFQUFqQjtBQUVBLE1BQUlWLFVBQVUsR0FBR08sR0FBRyxDQUFDSSxNQUFKLEdBQWEsR0FBYixHQUFtQkosR0FBRyxDQUFDSSxNQUF2QixHQUFnQyxLQUFqRDtBQUVBLFNBQU87QUFDSEMsU0FBSyxFQUFFO0FBQ0hiLFVBQUksRUFBRVUsSUFESDtBQUVIVDtBQUZHO0FBREosR0FBUDtBQU1IO0FBRUQsK0RBQWVGLE1BQWYsRTs7Ozs7Ozs7Ozs7QUN2Q0EseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvZ2l0aHViLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIlxyXG5pbXBvcnQgRXJyb3IgZnJvbSAnLi9fZXJyb3InXHJcblxyXG5jb25zdCBHaXRodWIgPSAoeyB1c2VyLCBjb2RlU3RhdHVzIH0pID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKHByb3BzKVxyXG5cclxuICAgIGlmKGNvZGVTdGF0dXMpIHJldHVybiA8RXJyb3IgY29kZVN0YXR1cz17Y29kZVN0YXR1c30gLz5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXQgZm9vdGVyPXtmYWxzZX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IG9mZnNldC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtYm9keSB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+e3VzZXIubmFtZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dXNlci5hdmF0YXJfdXJsfSBhbHQ9XCJcIiBjbGFzc05hbWU9XCJpbWctZmx1aWRcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt1c2VyLmJpb308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3VzZXIuYmxvZ30gdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IG15LTJcIj5NaSBCbG9nPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXt1c2VyLmh0bWxfdXJsfSB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IG15LTFcIj5JciBhIG1pIEdpdEh1YjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcclxuICAgIGxldCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9IdWl0emlEb21pbmdvJylcclxuICAgIGxldCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxyXG5cclxuICAgIGxldCBjb2RlU3RhdHVzID0gcmVzLnN0YXR1cyA+IDIwMCA/IHJlcy5zdGF0dXMgOiBmYWxzZVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgdXNlcjogZGF0YSxcclxuICAgICAgICAgICAgY29kZVN0YXR1c1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2l0aHViIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5wcm9ncmVzc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=