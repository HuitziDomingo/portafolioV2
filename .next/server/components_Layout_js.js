exports.id = "components_Layout_js";
exports.ids = ["components_Layout_js"];
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
          children: ["\xA9 - ", new Date().getFullYear()]
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "D:\\next\\pruebaUno\\components\\Navbar.js";



const Navbar = () => {
  const {
    0: collapsed,
    1: setCollapsed
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);

  const handleNavCollaps = () => setCollapsed(!collapsed);

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
          lineNumber: 14,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "navbar-toggler",
        "data-bs-toggle": "collapse",
        "data-bs-target": "#navbarNav",
        "aria-controls": "navbarNav",
        "aria-expanded": !collapsed ? true : false,
        "aria-label": "Toggle navigation",
        onClick: handleNavCollaps,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "navbar-toggler-icon"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: `${collapsed ? 'collapse' : ''} navbar-collapse justify-content-center`,
        id: "navbarNav",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
          className: "navbar-nav",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: "nav-item",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
              href: "/",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: "nav-link",
                children: "Inicio"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 23,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: "nav-item",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
              href: "/blog",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: "nav-link",
                children: "Blog"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 28,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
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
                lineNumber: 33,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcnVlYmEvLi9jb21wb25lbnRzL0xheW91dC5qcyIsIndlYnBhY2s6Ly9wcnVlYmEvLi9jb21wb25lbnRzL05hdmJhci5qcyIsIndlYnBhY2s6Ly9wcnVlYmEvaWdub3JlZHxEOlxcbmV4dFxccHJ1ZWJhVW5vXFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXG5leHQtc2VydmVyXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwibmFtZXMiOlsiTGF5b3V0IiwiY2hpbGRyZW4iLCJmb290ZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJoYW5kbGVSb3V0ZXJDaGFuZ2UiLCJ1cmwiLCJjb25zb2xlIiwibG9nIiwiTlByb2dyZXNzIiwiZXZlbnRzIiwib24iLCJvZmYiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJOYXZiYXIiLCJjb2xsYXBzZWQiLCJzZXRDb2xsYXBzZWQiLCJ1c2VTdGF0ZSIsImhhbmRsZU5hdkNvbGxhcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLE1BQU0sR0FBRyxDQUFDO0FBQUVDLFVBQUY7QUFBWUMsUUFBTSxHQUFHO0FBQXJCLENBQUQsS0FBaUM7QUFFNUMsUUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUNBQyxrREFBUyxDQUFDLE1BQU07QUFDWixVQUFNQyxrQkFBa0IsR0FBR0MsR0FBRyxJQUFJO0FBQzlCQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNBRyw0REFBQTtBQUNILEtBSEQ7O0FBSUFQLFVBQU0sQ0FBQ1EsTUFBUCxDQUFjQyxFQUFkLENBQWlCLGtCQUFqQixFQUFxQ04sa0JBQXJDO0FBQ0FILFVBQU0sQ0FBQ1EsTUFBUCxDQUFjQyxFQUFkLENBQWlCLHFCQUFqQixFQUF3QyxNQUFNRixxREFBQSxFQUE5QztBQUNBLFdBQU8sTUFBTTtBQUNUUCxZQUFNLENB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QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQStCSCxDQXJDRDs7QUF1Q0EsK0RBQWVELE1BQWYsRTs7Ozs7Ozs7OztBQzFDQSxlIiwiZmlsZSI6ImNvbXBvbmVudHNfTGF5b3V0X2pzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5hdmJhciBmcm9tICcuL05hdmJhcidcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgTlByb2dyZXNzIGZyb20gJ25wcm9ncmVzcydcclxuXHJcbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuLCBmb290ZXIgPSB0cnVlIH0pID0+IHtcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaGFuZGxlUm91dGVyQ2hhbmdlID0gdXJsID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codXJsKVxyXG4gICAgICAgICAgICBOUHJvZ3Jlc3Muc3RhcnQoKVxyXG4gICAgICAgIH1cclxuICAgICAgICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZVN0YXJ0JywgaGFuZGxlUm91dGVyQ2hhbmdlKVxyXG4gICAgICAgIHJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpKVxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJvdXRlci5ldmVudHMub2ZmKCdyb3V0ZUNoYW5nZVN0YXJ0JywgaGFuZGxlUm91dGVyQ2hhbmdlKVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPE5hdmJhciAvPlxyXG4gICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJjb250YWluZXIgcHktNFwiPlxyXG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICA8L21haW4+XHJcblxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmb290ZXIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiYmctZGFyayB0ZXh0LWxpZ2h0IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHAtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPkh1aXR6aXR6aWxpIERvbWluZ28gTGVvbiBOaWV2ZXM8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+JmNvcHk7IC0ge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5EZXJlY2hvcyByZXNlcnZhZG9zPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQiLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2NvbGxhcHNlZCwgc2V0Q29sbGFwc2VkXSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgICBjb25zdCBoYW5kbGVOYXZDb2xsYXBzID0gKCkgPT4gc2V0Q29sbGFwc2VkKCFjb2xsYXBzZWQpXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1sZyBuYXZiYXItZGFyayBiZy1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiPlBvcnRhZm9saW8gSHVpdHppdHppbGk8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyXCIgZGF0YS1icy10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtYnMtdGFyZ2V0PVwiI25hdmJhck5hdlwiIGFyaWEtY29udHJvbHM9XCJuYXZiYXJOYXZcIiBhcmlhLWV4cGFuZGVkPXshY29sbGFwc2VkID8gdHJ1ZSA6IGZhbHNlfSBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIiBvbkNsaWNrPXtoYW5kbGVOYXZDb2xsYXBzfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlci1pY29uXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y29sbGFwc2VkID8gJ2NvbGxhcHNlJyA6ICcnfSBuYXZiYXItY29sbGFwc2UganVzdGlmeS1jb250ZW50LWNlbnRlcmB9IGlkPVwibmF2YmFyTmF2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+SW5pY2lvPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYmxvZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+QmxvZzwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2dpdGh1YlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+R2l0aHViPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhciIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=