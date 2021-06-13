exports.id = "components_Layout_js-profile_js";
exports.ids = ["components_Layout_js-profile_js"];
exports.modules = {

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar */ "./components/Navbar.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "D:\\next\\pruebaUno\\components\\Layout.js";





const Layout = ({
  children,
  footer = true
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    const handleRouterChange = url => {
      console.log(url);
      nprogress__WEBPACK_IMPORTED_MODULE_4___default().start();
    };

    router.events.on('routeChangeStart', handleRouterChange);
    router.events.on('routeChangeComplete', () => nprogress__WEBPACK_IMPORTED_MODULE_4___default().done());
    return () => {
      router.events.off('routeChangeStart', handleRouterChange);
    };
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navbar__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      className: "container py-4",
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, undefined), footer && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
      className: "bg-dark text-light text-center",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "container p-4",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          children: "Huitzitzili Domingo Leon Nieves"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 29
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: ["\xA9 2020 - ", new Date().getFullYear()]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 29
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "Derechos reservados"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 29
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 25
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 21
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\next\\pruebaUno\\components\\Navbar.js";


const Navbar = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
    className: "navbar navbar-expand-lg navbar-dark bg-primary",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container-fluid",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          className: "navbar-brand",
          children: "Portafolio Huitzitzili"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "navbar-toggler",
        type: "button",
        "data-bs-toggle": "collapse",
        "data-bs-target": "#navbarNav",
        "aria-controls": "navbarNav",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "navbar-toggler-icon"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "collapse navbar-collapse d-flex justify-content-center",
        id: "navbarNav",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
          className: "navbar-nav",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: "nav-item",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
              href: "/blog",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: "nav-link",
                children: "Blog"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 17,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: "nav-item",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
              href: "/github",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: "nav-link",
                children: "Github"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 22,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

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

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcnVlYmEvcHJ1ZWJhVW5vLy4vY29tcG9uZW50cy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vcHJ1ZWJhL3BydWViYVVuby8uL2NvbXBvbmVudHMvTmF2YmFyLmpzIiwid2VicGFjazovL3BydWViYS9wcnVlYmFVbm8vLi9wcm9maWxlLmpzIiwid2VicGFjazovL3BydWViYS9wcnVlYmFVbm8vaWdub3JlZHxEOlxcbmV4dFxccHJ1ZWJhVW5vXFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXG5leHQtc2VydmVyXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwibmFtZXMiOlsiTGF5b3V0IiwiY2hpbGRyZW4iLCJmb290ZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJoYW5kbGVSb3V0ZXJDaGFuZ2UiLCJ1cmwiLCJjb25zb2xlIiwibG9nIiwiTlByb2dyZXNzIiwiZXZlbnRzIiwib24iLCJvZmYiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJOYXZiYXIiLCJza2lsbHMiLCJza2lsbCIsInBlcmNlbnRhZ2UiLCJleHBpcmVuY2llcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJmcm9tIiwidG8iLCJwcm9qZWN0cyIsIm5hbWUiLCJpbWFnZSIsInBvc3RzIiwiY29udGVudCIsImltYWdlVXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxNQUFNLEdBQUcsQ0FBQztBQUFFQyxVQUFGO0FBQVlDLFFBQU0sR0FBRztBQUFyQixDQUFELEtBQWlDO0FBRTVDLFFBQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFDQUMsa0RBQVMsQ0FBQyxNQUFNO0FBQ1osVUFBTUMsa0JBQWtCLEdBQUdDLEdBQUcsSUFBSTtBQUM5QkMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7QUFDQUcsNERBQUE7QUFDSCxLQUhEOztBQUlBUCxVQUFN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QUFFLHdOQUZqQjtBQUdJSyxPQUFLLEVBQUU7QUFIWCxDQVhvQixDQUFqQjtBQWtCQSxNQUFNQyxLQUFLLEdBQUcsQ0FDakI7QUFDSVAsT0FBSyxFQUFFLE9BRFg7QUFFSVEsU0FBTyxFQUFFLHdOQUZiO0FBR0lDLFVBQVEsRUFBQztBQUhiLENBRGlCLEVBTWpCO0FBQ0lULE9BQUssRUFBRSxTQURYO0FBRUlRLFNBQU8sRUFBRSx3TkFGYjtBQUdJQyxVQUFRLEVBQUM7QUFIYixDQU5pQixFQVdqQjtBQUNJVCxPQUFLLEVBQUUsUUFEWDtBQUVJUSxTQUFPLEVBQUUsd05BRmI7QUFHSUMsVUFBUSxFQUFDO0FBSGIsQ0FYaUIsQ0FBZCxDOzs7Ozs7Ozs7O0FDbEVQLGUiLCJmaWxlIjoiY29tcG9uZW50c19MYXlvdXRfanMtcHJvZmlsZV9qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOYXZiYXIgZnJvbSAnLi9OYXZiYXInXHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tICducHJvZ3Jlc3MnXHJcblxyXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiwgZm9vdGVyID0gdHJ1ZSB9KSA9PiB7XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGhhbmRsZVJvdXRlckNoYW5nZSA9IHVybCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHVybClcclxuICAgICAgICAgICAgTlByb2dyZXNzLnN0YXJ0KClcclxuICAgICAgICB9XHJcbiAgICAgICAgcm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VTdGFydCcsIGhhbmRsZVJvdXRlckNoYW5nZSlcclxuICAgICAgICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgKCkgPT4gTlByb2dyZXNzLmRvbmUoKSlcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICByb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VTdGFydCcsIGhhbmRsZVJvdXRlckNoYW5nZSlcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwiY29udGFpbmVyIHB5LTRcIj5cclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9tYWluPlxyXG5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZm9vdGVyICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImJnLWRhcmsgdGV4dC1saWdodCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBwLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5IdWl0eml0emlsaSBEb21pbmdvIExlb24gTmlldmVzPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiZjb3B5OyAyMDIwIC0ge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5EZXJlY2hvcyByZXNlcnZhZG9zPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQiLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1leHBhbmQtbGcgbmF2YmFyLWRhcmsgYmctcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIj5Qb3J0YWZvbGlvIEh1aXR6aXR6aWxpPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlclwiIHR5cGU9XCJidXR0b25cIiBkYXRhLWJzLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS1icy10YXJnZXQ9XCIjbmF2YmFyTmF2XCIgYXJpYS1jb250cm9scz1cIm5hdmJhck5hdlwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyLWljb25cIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCIgaWQ9XCJuYXZiYXJOYXZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYmxvZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+QmxvZzwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2dpdGh1YlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+R2l0aHViPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhciIsImV4cG9ydCBjb25zdCBza2lsbHMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgc2tpbGw6ICdKYXZhc2NyaXB0JyxcclxuICAgICAgICBwZXJjZW50YWdlOiAxMDBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc2tpbGw6ICdQaHAnLFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6IDg1XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNraWxsOiAnTm9kZScsXHJcbiAgICAgICAgcGVyY2VudGFnZTogNzBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc2tpbGw6ICdSZWFjdCcsXHJcbiAgICAgICAgcGVyY2VudGFnZTogODBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc2tpbGw6ICdSZWFjdCBOYXRpdmUnLFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6IDcwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNraWxsOiAnRXhwcmVzcycsXHJcbiAgICAgICAgcGVyY2VudGFnZTogNzBcclxuICAgIH0sXHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBleHBpcmVuY2llcyA9IFtcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ0Zyb250ZW5kIERldmVsb3BlciBlbiBQcm9zc2EnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIERvbmVjIGV1IHF1YW0gaWFjdWxpcywgY29uc2VxdWF0IGVyb3MgcXVpcywgYWxpcXVhbSBsaWd1bGEuIFN1c3BlbmRpc3NlIHBvdGVudGkuIENyYXMgbGFjaW5pYSBuZXF1ZSBhYyBzZW0gYmxhbmRpdCBwbGFjZXJhdC4gQ3VyYWJpdHVyIHZpdGFlIGVsaXQgbHVjdHVzIGZlbGlzIGhlbmRyZXJpdCBmcmluZ2lsbGEuIFV0IHF1aXMgdXJuYSBwaGFyZXRyYSwgZmluaWJ1cyBleCBhYywgb3JuYXJlIGxhY3VzLiBNb3JiaSBldCBuZXF1ZSBub24ganVzdG8gZnJpbmdpbGxhIGhlbmRyZXJpdC4gUGVsbGVudGVzcXVlIG5lYyBkaWN0dW0gbGlndWxhLiBDdXJhYml0dXIgZWxlbWVudHVtIG5pc2kgc2VkIG1hdXJpcyBvcm5hcmUgdGVtcHVzLiBNb3JiaSB2ZWwgdWxsYW1jb3JwZXIgbGFjdXMsIHNlZCB2ZWhpY3VsYSBwdXJ1cy4gU3VzcGVuZGlzc2Ugc2VkIG1hc3NhIGF0IG5pc2wgZXVpc21vZCBmYXVjaWJ1cy4gU3VzcGVuZGlzc2UgZGljdHVtIHZpdmVycmEgdmVsaXQgZXUgc3VzY2lwaXQuIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIGN1cmFlOyBQaGFzZWxsdXMgbGFjaW5pYSBhdCBsYWN1cyBuZWMgb3JuYXJlLiBWZXN0aWJ1bHVtIGV1IGJpYmVuZHVtIHRvcnRvci5cIixcclxuICAgICAgICBmcm9tOiAyMDE4LFxyXG4gICAgICAgIHRvOiAyMDE5XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnRnJvbnRlbmQgRGV2ZWxvcGVyIGVuIERlcScsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gRG9uZWMgZXUgcXVhbSBpYWN1bGlzLCBjb25zZXF1YXQgZXJvcyBxdWlzLCBhbGlxdWFtIGxpZ3VsYS4gU3VzcGVuZGlzc2UgcG90ZW50aS4gQ3JhcyBsYWNpbmlhIG5lcXVlIGFjIHNlbSBibGFuZGl0IHBsYWNlcmF0LiBDdXJhYml0dXIgdml0YWUgZWxpdCBsdWN0dXMgZmVsaXMgaGVuZHJlcml0IGZyaW5naWxsYS4gVXQgcXVpcyB1cm5hIHBoYXJldHJhLCBmaW5pYnVzIGV4IGFjLCBvcm5hcmUgbGFjdXMuIE1vcmJpIGV0IG5lcXVlIG5vbiBqdXN0byBmcmluZ2lsbGEgaGVuZHJlcml0LiBQZWxsZW50ZXNxdWUgbmVjIGRpY3R1bSBsaWd1bGEuIEN1cmFiaXR1ciBlbGVtZW50dW0gbmlzaSBzZWQgbWF1cmlzIG9ybmFyZSB0ZW1wdXMuIE1vcmJpIHZlbCB1bGxhbWNvcnBlciBsYWN1cywgc2VkIHZlaGljdWxhIHB1cnVzLiBTdXNwZW5kaXNzZSBzZWQgbWFzc2EgYXQgbmlzbCBldWlzbW9kIGZhdWNpYnVzLiBTdXNwZW5kaXNzZSBkaWN0dW0gdml2ZXJyYSB2ZWxpdCBldSBzdXNjaXBpdC4gVmVzdGlidWx1bSBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgY3VyYWU7IFBoYXNlbGx1cyBsYWNpbmlhIGF0IGxhY3VzIG5lYyBvcm5hcmUuIFZlc3RpYnVsdW0gZXUgYmliZW5kdW0gdG9ydG9yLlwiLFxyXG4gICAgICAgIGZyb206IDIwMTksXHJcbiAgICAgICAgdG86IDIwMjBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdCYWNrZW5kIERldmVsb3BlciBlbiBBbmVtb25hJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBEb25lYyBldSBxdWFtIGlhY3VsaXMsIGNvbnNlcXVhdCBlcm9zIHF1aXMsIGFsaXF1YW0gbGlndWxhLiBTdXNwZW5kaXNzZSBwb3RlbnRpLiBDcmFzIGxhY2luaWEgbmVxdWUgYWMgc2VtIGJsYW5kaXQgcGxhY2VyYXQuIEN1cmFiaXR1ciB2aXRhZSBlbGl0IGx1Y3R1cyBmZWxpcyBoZW5kcmVyaXQgZnJpbmdpbGxhLiBVdCBxdWlzIHVybmEgcGhhcmV0cmEsIGZpbmlidXMgZXggYWMsIG9ybmFyZSBsYWN1cy4gTW9yYmkgZXQgbmVxdWUgbm9uIGp1c3RvIGZyaW5naWxsYSBoZW5kcmVyaXQuIFBlbGxlbnRlc3F1ZSBuZWMgZGljdHVtIGxpZ3VsYS4gQ3VyYWJpdHVyIGVsZW1lbnR1bSBuaXNpIHNlZCBtYXVyaXMgb3JuYXJlIHRlbXB1cy4gTW9yYmkgdmVsIHVsbGFtY29ycGVyIGxhY3VzLCBzZWQgdmVoaWN1bGEgcHVydXMuIFN1c3BlbmRpc3NlIHNlZCBtYXNzYSBhdCBuaXNsIGV1aXNtb2QgZmF1Y2lidXMuIFN1c3BlbmRpc3NlIGRpY3R1bSB2aXZlcnJhIHZlbGl0IGV1IHN1c2NpcGl0LiBWZXN0aWJ1bHVtIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzIG9yY2kgbHVjdHVzIGV0IHVsdHJpY2VzIHBvc3VlcmUgY3ViaWxpYSBjdXJhZTsgUGhhc2VsbHVzIGxhY2luaWEgYXQgbGFjdXMgbmVjIG9ybmFyZS4gVmVzdGlidWx1bSBldSBiaWJlbmR1bSB0b3J0b3IuXCIsXHJcbiAgICAgICAgZnJvbTogMjAyMCxcclxuICAgICAgICB0bzogMjAyMVxyXG4gICAgfSxcclxuXVxyXG5cclxuZXhwb3J0IGNvbnN0IHByb2plY3RzID0gW1xyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiU2FudG8gU2F6b25cIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJJbiBhdWN0b3IgY29uc2VjdGV0dXIgZXgsIGVnZXQgcG9zdWVyZSBsb3JlbSBjb252YWxsaXMgaWQuIERvbmVjIGxvYm9ydGlzIG9ybmFyZSBsb3JlbSwgdmVsIHVsdHJpY2VzIHRvcnRvciBtYXhpbXVzIGVnZXQuIENyYXMgcXVpcyBjb25ndWUgZHVpLiBQZWxsZW50ZXNxdWUgZXVpc21vZCBhdWd1ZSBhIGJpYmVuZHVtIHBvc3VlcmUuIFV0IGV0IHVsbGFtY29ycGVyIGFyY3UuXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwiY2FuYWRhLmpwZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiRGFseXphXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiSW4gYXVjdG9yIGNvbnNlY3RldHVyIGV4LCBlZ2V0IHBvc3VlcmUgbG9yZW0gY29udmFsbGlzIGlkLiBEb25lYyBsb2JvcnRpcyBvcm5hcmUgbG9yZW0sIHZlbCB1bHRyaWNlcyB0b3J0b3IgbWF4aW11cyBlZ2V0LiBDcmFzIHF1aXMgY29uZ3VlIGR1aS4gUGVsbGVudGVzcXVlIGV1aXNtb2QgYXVndWUgYSBiaWJlbmR1bSBwb3N1ZXJlLiBVdCBldCB1bGxhbWNvcnBlciBhcmN1LlwiLFxyXG4gICAgICAgIGltYWdlOiBcImNhbmFkYS5qcGdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIkEuVS5NXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiSW4gYXVjdG9yIGNvbnNlY3RldHVyIGV4LCBlZ2V0IHBvc3VlcmUgbG9yZW0gY29udmFsbGlzIGlkLiBEb25lYyBsb2JvcnRpcyBvcm5hcmUgbG9yZW0sIHZlbCB1bHRyaWNlcyB0b3J0b3IgbWF4aW11cyBlZ2V0LiBDcmFzIHF1aXMgY29uZ3VlIGR1aS4gUGVsbGVudGVzcXVlIGV1aXNtb2QgYXVndWUgYSBiaWJlbmR1bSBwb3N1ZXJlLiBVdCBldCB1bGxhbWNvcnBlciBhcmN1LlwiLFxyXG4gICAgICAgIGltYWdlOiBcImNhbmFkYS5qcGdcIlxyXG4gICAgfSxcclxuXVxyXG5cclxuZXhwb3J0IGNvbnN0IHBvc3RzID0gW1xyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcInBocCA4XCIsXHJcbiAgICAgICAgY29udGVudDogXCJJbiBhdWN0b3IgY29uc2VjdGV0dXIgZXgsIGVnZXQgcG9zdWVyZSBsb3JlbSBjb252YWxsaXMgaWQuIERvbmVjIGxvYm9ydGlzIG9ybmFyZSBsb3JlbSwgdmVsIHVsdHJpY2VzIHRvcnRvciBtYXhpbXVzIGVnZXQuIENyYXMgcXVpcyBjb25ndWUgZHVpLiBQZWxsZW50ZXNxdWUgZXVpc21vZCBhdWd1ZSBhIGJpYmVuZHVtIHBvc3VlcmUuIFV0IGV0IHVsbGFtY29ycGVyIGFyY3UuXCIsXHJcbiAgICAgICAgaW1hZ2VVcmw6J2h0dHBzOi8vd3d3LnBocC5uZXQvaW1hZ2VzL3BocDgvcGhwXzhfcmVsZWFzZWQucG5nJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJMYXJhdmVsXCIsXHJcbiAgICAgICAgY29udGVudDogXCJJbiBhdWN0b3IgY29uc2VjdGV0dXIgZXgsIGVnZXQgcG9zdWVyZSBsb3JlbSBjb252YWxsaXMgaWQuIERvbmVjIGxvYm9ydGlzIG9ybmFyZSBsb3JlbSwgdmVsIHVsdHJpY2VzIHRvcnRvciBtYXhpbXVzIGVnZXQuIENyYXMgcXVpcyBjb25ndWUgZHVpLiBQZWxsZW50ZXNxdWUgZXVpc21vZCBhdWd1ZSBhIGJpYmVuZHVtIHBvc3VlcmUuIFV0IGV0IHVsbGFtY29ycGVyIGFyY3UuXCIsXHJcbiAgICAgICAgaW1hZ2VVcmw6J2h0dHBzOi8vd3d3LnBocC5uZXQvaW1hZ2VzL3BocDgvcGhwXzhfcmVsZWFzZWQucG5nJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJOZXh0SlNcIixcclxuICAgICAgICBjb250ZW50OiBcIkluIGF1Y3RvciBjb25zZWN0ZXR1ciBleCwgZWdldCBwb3N1ZXJlIGxvcmVtIGNvbnZhbGxpcyBpZC4gRG9uZWMgbG9ib3J0aXMgb3JuYXJlIGxvcmVtLCB2ZWwgdWx0cmljZXMgdG9ydG9yIG1heGltdXMgZWdldC4gQ3JhcyBxdWlzIGNvbmd1ZSBkdWkuIFBlbGxlbnRlc3F1ZSBldWlzbW9kIGF1Z3VlIGEgYmliZW5kdW0gcG9zdWVyZS4gVXQgZXQgdWxsYW1jb3JwZXIgYXJjdS5cIixcclxuICAgICAgICBpbWFnZVVybDonaHR0cHM6Ly93d3cucGhwLm5ldC9pbWFnZXMvcGhwOC9waHBfOF9yZWxlYXNlZC5wbmcnXHJcbiAgICB9LFxyXG5dIiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==