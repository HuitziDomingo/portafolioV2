(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../profile */ "./profile.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "D:\\next\\pruebaUno\\pages\\index.js";




const Index = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
      className: "row",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col-md-12",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "card card-body bg-secondary",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "row",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "col-md-4",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: "perfil.jpg",
                className: "img-fluid",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 15,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 14,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "col-md-8",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
                children: "Huitzitzili Domingo Leon Nieves"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 18,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                children: "Frontend Developer"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 19,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                children: "Soy un desarrollador semi senior web, me gusta el dise\xF1o y programacion de softaware, suelo practicar con algunas tecnologias como Laravel, React, Next, React Native y el sistema de paqutes de Node; NPM. Tengo algunos conocimientos en el desarrollo de aplicaciones moviles, usando react native y express. Pero lo que mas me apasiona es el dise\xF1o frontend tanto en web como en movil."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 20,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: "btn btn-primary rounded-pill px-2",
                href: "/contratar",
                children: "Contratar"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 27,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 17,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "row py-2",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col-md-4 mar-responsive",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "card bg-light",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "card-body",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
              children: "Habilidades"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 29
            }, undefined), _profile__WEBPACK_IMPORTED_MODULE_2__.skills.map(({
              skill,
              percentage,
              num
            }, k) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "py-3",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
                children: skill
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 42,
                columnNumber: 41
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "progress",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "progress-bar progress-bar-striped progress-bar-animated",
                  role: "progressbar",
                  style: {
                    width: `${percentage}%`
                  },
                  "aria-valuenow": "0",
                  "aria-valuemin": "0",
                  "aria-valuemax": "100",
                  children: num
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 44,
                  columnNumber: 45
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 43,
                columnNumber: 41
              }, undefined)]
            }, k, true, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 37
            }, undefined))]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col-md-8",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "card bg-light",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "card-body",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
              children: "Experiencia"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
              children: _profile__WEBPACK_IMPORTED_MODULE_2__.expirencies.map(({
                title,
                description,
                from,
                to
              }, k) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                  children: title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 62,
                  columnNumber: 45
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
                  children: [from, "-", to]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 63,
                  columnNumber: 45
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  children: description
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 64,
                  columnNumber: 45
                }, undefined)]
              }, k, true, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 41
              }, undefined))
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "row",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col-md-12",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "card card-body bg-dark",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "row",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "col-md-12",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
                className: "text-center text-light",
                children: "Portafolio"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 29
            }, undefined), _profile__WEBPACK_IMPORTED_MODULE_2__.projects.map(({
              name,
              description,
              image,
              url
            }, k) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "col-md-4 mar-responsive",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "card h-100",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "overflow",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                    src: image,
                    alt: "",
                    className: "card-img-top"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 87,
                    columnNumber: 49
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 86,
                  columnNumber: 45
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "card-body",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                    children: name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 90,
                    columnNumber: 49
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                    children: description
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 91,
                    columnNumber: 49
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    href: url,
                    target: "_blank",
                    className: "btn btn-secondary",
                    children: "Visitar"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 92,
                    columnNumber: 49
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 89,
                  columnNumber: 45
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 41
              }, undefined)
            }, k, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 37
            }, undefined))]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "text-center",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
              href: "/portafolio",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: "btn btn-outline-light mt-2",
                children: " Portafolio"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

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
  percentage: 100,
  num: "100%"
}, {
  skill: 'Php',
  percentage: 85,
  num: "85%"
}, {
  skill: 'Node',
  percentage: 70,
  num: "70%"
}, {
  skill: 'React',
  percentage: 80,
  num: "80%"
}, {
  skill: 'React Native',
  percentage: 70,
  num: "70%"
}, {
  skill: 'Express',
  percentage: 70,
  num: "70%"
}];
const expirencies = [{
  title: 'Frontend Developer en Prossa',
  description: "Ajustes de aplicaiones web usando tecnologias como HTML, CSS, Java Script y la libreria de jQuery. Contratado por proyecto",
  from: 2018,
  to: "Ago"
}, {
  title: 'Frontend Developer en Deq',
  description: "Diseño de sitios web apartir de un mock-up en el software de AdobeXD . Uso de algunas herramientas de CSS como Bootstrap y de Java Script como jQuery Para la construccion y diseño de aplicaciones web",
  from: 2019,
  to: "Feb"
}, {
  title: 'Backend Developer en Anemona',
  description: "Colaboracion para un aplicaciones de mapas usando como lenguajes principales PHP y Java Script, asicomo algunos frameorks, tales como jQuery y Bootstrap",
  from: 2021,
  to: "Feb"
}];
const projects = [{
  name: "Santo Sazon",
  description: "Una tienda en linea para el servicio de Catering en CDMX. Todo el contenido frontend fue ralizado con CSS puro y Java Script puro. El CMS sera programado principalmente con PHP y la base de datos usara MySql.",
  image: "santosazon.jpg",
  url: "http://santosazon.com.mx/"
}, {
  name: "Dalyza",
  description: "Un sitio web estatico para el servicio de limpiado e instalacion de alfombras, percienas y cortinas. La web fue realiazada y diseñada con codigo nativo de CSS, Java Script y PHP.",
  image: "dalyza.jpg",
  url: "https://dalyza.com/"
}, {
  name: "A.U.M",
  description: "Un sitio web estatico con contenido espiritual y tradicion iniciatica. La web fue realiazada con codigo nativo de css, JavaScript y php. Esta web tambien cuenta con un Back Office programado con el lenguaje php.",
  image: "aum.jpg",
  url: "http://auminternacional.org/"
}];
const posts = [{
  title: "php8",
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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_Layout_js"], function() { return __webpack_exec__("./pages/index.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcnVlYmEvLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcnVlYmEvLi9wcm9maWxlLmpzIiwid2VicGFjazovL3BydWViYS9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9wcnVlYmEvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vcHJ1ZWJhL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9wcnVlYmEvZXh0ZXJuYWwgXCJucHJvZ3Jlc3NcIiIsIndlYnBhY2s6Ly9wcnVlYmEvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3BydWViYS9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vcHJ1ZWJhL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiSW5kZXgiLCJza2lsbHMiLCJza2lsbCIsInBlcmNlbnRhZ2UiLCJudW0iLCJrIiwid2lkdGgiLCJleHBpcmVuY2llcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJmcm9tIiwidG8iLCJwcm9qZWN0cyIsIm5hbWUiLCJpbWFnZSIsInVybCIsInBvc3RzIiwiY29udGVudCIsImltYWdlVXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1BLEtBQUssR0FBRyxNQUFNO0FBQ2hCLHNCQUVJLDhEQUFDLHVEQUFEO0FBQUEsNEJBRUk7QUFBUSxlQUFTLEVBQUMsS0FBbEI7QUFBQSw2QkFDSTtBQUFLLGlCQUFTLEVBQUMsV0FBZjtBQUFBLCtCQUNJO0FBQUssbUJBQVMsRUFBQyw2QkFBZjtBQUFBLGlDQUNJO0FBQUsscUJBQVMsRUFBQyxLQUFmO0FBQUEsb0NB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QUFHSUMsVUFBUSxFQUFDO0FBSGIsQ0FYaUIsQ0FBZCxDOzs7Ozs7Ozs7OztBQzNFUCx5RTs7Ozs7Ozs7Ozs7QUNBQSxpRzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXHJcbmltcG9ydCB7IHNraWxscywgZXhwaXJlbmNpZXMsIHByb2plY3RzIH0gZnJvbSAnLi4vcHJvZmlsZSdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICB7LypQcmltZXJhIFNlY2Npb24qL31cclxuICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtYm9keSBiZy1zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cInBlcmZpbC5qcGdcIiBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPkh1aXR6aXR6aWxpIERvbWluZ28gTGVvbiBOaWV2ZXM8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5Gcm9udGVuZCBEZXZlbG9wZXI8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTb3kgdW4gZGVzYXJyb2xsYWRvciBzZW1pIHNlbmlvciB3ZWIsIG1lIGd1c3RhIGVsIGRpc2XDsW8geSBwcm9ncmFtYWNpb24gZGUgc29mdGF3YXJlLCBzdWVsbyBwcmFjdGljYXIgY29uIGFsZ3VuYXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVjbm9sb2dpYXMgY29tbyBMYXJhdmVsLCBSZWFjdCwgTmV4dCwgUmVhY3QgTmF0aXZlIHkgZWwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpc3RlbWEgZGUgcGFxdXRlcyBkZSBOb2RlOyBOUE0uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRlbmdvIGFsZ3Vub3MgY29ub2NpbWllbnRvcyBlbiBlbCBkZXNhcnJvbGxvIGRlIGFwbGljYWNpb25lcyBtb3ZpbGVzLCB1c2FuZG8gcmVhY3QgbmF0aXZlIHkgZXhwcmVzcy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGVybyBsbyBxdWUgbWFzIG1lIGFwYXNpb25hIGVzIGVsIGRpc2XDsW8gZnJvbnRlbmQgdGFudG8gZW4gd2ViIGNvbW8gZW4gbW92aWwuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSByb3VuZGVkLXBpbGwgcHgtMlwiIGhyZWY9XCIvY29udHJhdGFyXCI+Q29udHJhdGFyPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgICAgICB7LypTZWd1bmRhIHNlY2Npb24qL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcHktMlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNCBtYXItcmVzcG9uc2l2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBiZy1saWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPkhhYmlsaWRhZGVzPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBza2lsbHMubWFwKCh7IHNraWxsLCBwZXJjZW50YWdlLCBudW0gfSwgaykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTNcIiBrZXk9e2t9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1Pntza2lsbH08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3MtYmFyIHByb2dyZXNzLWJhci1zdHJpcGVkIHByb2dyZXNzLWJhci1hbmltYXRlZFwiIHJvbGU9XCJwcm9ncmVzc2JhclwiIHN0eWxlPXt7IHdpZHRoOiBgJHtwZXJjZW50YWdlfSVgIH19IGFyaWEtdmFsdWVub3c9XCIwXCIgYXJpYS12YWx1ZW1pbj1cIjBcIiBhcmlhLXZhbHVlbWF4PVwiMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge251bX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBiZy1saWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPkV4cGVyaWVuY2lhPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGlyZW5jaWVzLm1hcCgoeyB0aXRsZSwgZGVzY3JpcHRpb24sIGZyb20sIHRvIH0sIGspID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2t9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57dGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+e2Zyb219LXt0b308L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntkZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qVGVyY2VyYSBTZWNpb24gUG9ydGFmb2xpbyovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1ib2R5IGJnLWRhcmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtbGlnaHRcIj5Qb3J0YWZvbGlvPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RzLm1hcCgoeyBuYW1lLCBkZXNjcmlwdGlvbiwgaW1hZ2UsIHVybCB9LCBrKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTQgbWFyLXJlc3BvbnNpdmVcIiBrZXk9e2t9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGgtMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2V9IGFsdD1cIlwiIGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPntuYW1lfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntkZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3VybH0gdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIj5WaXNpdGFyPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wb3J0YWZvbGlvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWxpZ2h0IG10LTJcIj4gUG9ydGFmb2xpbzwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXgiLCJleHBvcnQgY29uc3Qgc2tpbGxzID0gW1xyXG4gICAge1xyXG4gICAgICAgIHNraWxsOiAnSmF2YXNjcmlwdCcsXHJcbiAgICAgICAgcGVyY2VudGFnZTogMTAwLFxyXG4gICAgICAgIG51bTogXCIxMDAlXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc2tpbGw6ICdQaHAnLFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6IDg1LFxyXG4gICAgICAgIG51bTogXCI4NSVcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBza2lsbDogJ05vZGUnLFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6IDcwLFxyXG4gICAgICAgIG51bTogXCI3MCVcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBza2lsbDogJ1JlYWN0JyxcclxuICAgICAgICBwZXJjZW50YWdlOiA4MCxcclxuICAgICAgICBudW06IFwiODAlXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc2tpbGw6ICdSZWFjdCBOYXRpdmUnLFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6IDcwLFxyXG4gICAgICAgIG51bTogXCI3MCVcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBza2lsbDogJ0V4cHJlc3MnLFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6IDcwLFxyXG4gICAgICAgIG51bTogXCI3MCVcIlxyXG4gICAgfSxcclxuXVxyXG5cclxuZXhwb3J0IGNvbnN0IGV4cGlyZW5jaWVzID0gW1xyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnRnJvbnRlbmQgRGV2ZWxvcGVyIGVuIFByb3NzYScsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQWp1c3RlcyBkZSBhcGxpY2Fpb25lcyB3ZWIgdXNhbmRvIHRlY25vbG9naWFzIGNvbW8gSFRNTCwgQ1NTLCBKYXZhIFNjcmlwdCB5IGxhIGxpYnJlcmlhIGRlIGpRdWVyeS4gQ29udHJhdGFkbyBwb3IgcHJveWVjdG9cIixcclxuICAgICAgICBmcm9tOiAyMDE4LFxyXG4gICAgICAgIHRvOiBcIkFnb1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnRnJvbnRlbmQgRGV2ZWxvcGVyIGVuIERlcScsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiRGlzZcOxbyBkZSBzaXRpb3Mgd2ViIGFwYXJ0aXIgZGUgdW4gbW9jay11cCBlbiBlbCBzb2Z0d2FyZSBkZSBBZG9iZVhEIC4gVXNvIGRlIGFsZ3VuYXMgaGVycmFtaWVudGFzIGRlIENTUyBjb21vIEJvb3RzdHJhcCB5IGRlIEphdmEgU2NyaXB0IGNvbW8galF1ZXJ5IFBhcmEgbGEgY29uc3RydWNjaW9uIHkgZGlzZcOxbyBkZSBhcGxpY2FjaW9uZXMgd2ViXCIsXHJcbiAgICAgICAgZnJvbTogMjAxOSxcclxuICAgICAgICB0bzogXCJGZWJcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ0JhY2tlbmQgRGV2ZWxvcGVyIGVuIEFuZW1vbmEnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkNvbGFib3JhY2lvbiBwYXJhIHVuIGFwbGljYWNpb25lcyBkZSBtYXBhcyB1c2FuZG8gY29tbyBsZW5ndWFqZXMgcHJpbmNpcGFsZXMgUEhQIHkgSmF2YSBTY3JpcHQsIGFzaWNvbW8gYWxndW5vcyBmcmFtZW9ya3MsIHRhbGVzIGNvbW8galF1ZXJ5IHkgQm9vdHN0cmFwXCIsXHJcbiAgICAgICAgZnJvbTogMjAyMSxcclxuICAgICAgICB0bzogXCJGZWJcIlxyXG4gICAgfSxcclxuXVxyXG5cclxuZXhwb3J0IGNvbnN0IHByb2plY3RzID0gW1xyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiU2FudG8gU2F6b25cIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJVbmEgdGllbmRhIGVuIGxpbmVhIHBhcmEgZWwgc2VydmljaW8gZGUgQ2F0ZXJpbmcgZW4gQ0RNWC4gVG9kbyBlbCBjb250ZW5pZG8gZnJvbnRlbmQgZnVlIHJhbGl6YWRvIGNvbiBDU1MgcHVybyB5IEphdmEgU2NyaXB0IHB1cm8uIEVsIENNUyBzZXJhIHByb2dyYW1hZG8gcHJpbmNpcGFsbWVudGUgY29uIFBIUCB5IGxhIGJhc2UgZGUgZGF0b3MgdXNhcmEgTXlTcWwuXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwic2FudG9zYXpvbi5qcGdcIixcclxuICAgICAgICB1cmw6IFwiaHR0cDovL3NhbnRvc2F6b24uY29tLm14L1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiRGFseXphXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVW4gc2l0aW8gd2ViIGVzdGF0aWNvIHBhcmEgZWwgc2VydmljaW8gZGUgbGltcGlhZG8gZSBpbnN0YWxhY2lvbiBkZSBhbGZvbWJyYXMsIHBlcmNpZW5hcyB5IGNvcnRpbmFzLiBMYSB3ZWIgZnVlIHJlYWxpYXphZGEgeSBkaXNlw7FhZGEgY29uIGNvZGlnbyBuYXRpdm8gZGUgQ1NTLCBKYXZhIFNjcmlwdCB5IFBIUC5cIixcclxuICAgICAgICBpbWFnZTogXCJkYWx5emEuanBnXCIsXHJcbiAgICAgICAgdXJsOiBcImh0dHBzOi8vZGFseXphLmNvbS9cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIkEuVS5NXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVW4gc2l0aW8gd2ViIGVzdGF0aWNvIGNvbiBjb250ZW5pZG8gZXNwaXJpdHVhbCB5IHRyYWRpY2lvbiBpbmljaWF0aWNhLiBMYSB3ZWIgZnVlIHJlYWxpYXphZGEgY29uIGNvZGlnbyBuYXRpdm8gZGUgY3NzLCBKYXZhU2NyaXB0IHkgcGhwLiBFc3RhIHdlYiB0YW1iaWVuIGN1ZW50YSBjb24gdW4gQmFjayBPZmZpY2UgcHJvZ3JhbWFkbyBjb24gZWwgbGVuZ3VhamUgcGhwLlwiLFxyXG4gICAgICAgIGltYWdlOiBcImF1bS5qcGdcIixcclxuICAgICAgICB1cmw6IFwiaHR0cDovL2F1bWludGVybmFjaW9uYWwub3JnL1wiXHJcbiAgICB9LFxyXG5dXHJcblxyXG5leHBvcnQgY29uc3QgcG9zdHMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwicGhwOFwiLFxyXG4gICAgICAgIGNvbnRlbnQ6IFwiSW4gYXVjdG9yIGNvbnNlY3RldHVyIGV4LCBlZ2V0IHBvc3VlcmUgbG9yZW0gY29udmFsbGlzIGlkLiBEb25lYyBsb2JvcnRpcyBvcm5hcmUgbG9yZW0sIHZlbCB1bHRyaWNlcyB0b3J0b3IgbWF4aW11cyBlZ2V0LiBDcmFzIHF1aXMgY29uZ3VlIGR1aS4gUGVsbGVudGVzcXVlIGV1aXNtb2QgYXVndWUgYSBiaWJlbmR1bSBwb3N1ZXJlLiBVdCBldCB1bGxhbWNvcnBlciBhcmN1LlwiLFxyXG4gICAgICAgIGltYWdlVXJsOidodHRwczovL3d3dy5waHAubmV0L2ltYWdlcy9waHA4L3BocF84X3JlbGVhc2VkLnBuZydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiTGFyYXZlbFwiLFxyXG4gICAgICAgIGNvbnRlbnQ6IFwiSW4gYXVjdG9yIGNvbnNlY3RldHVyIGV4LCBlZ2V0IHBvc3VlcmUgbG9yZW0gY29udmFsbGlzIGlkLiBEb25lYyBsb2JvcnRpcyBvcm5hcmUgbG9yZW0sIHZlbCB1bHRyaWNlcyB0b3J0b3IgbWF4aW11cyBlZ2V0LiBDcmFzIHF1aXMgY29uZ3VlIGR1aS4gUGVsbGVudGVzcXVlIGV1aXNtb2QgYXVndWUgYSBiaWJlbmR1bSBwb3N1ZXJlLiBVdCBldCB1bGxhbWNvcnBlciBhcmN1LlwiLFxyXG4gICAgICAgIGltYWdlVXJsOidodHRwczovL3d3dy5waHAubmV0L2ltYWdlcy9waHA4L3BocF84X3JlbGVhc2VkLnBuZydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiTmV4dEpTXCIsXHJcbiAgICAgICAgY29udGVudDogXCJJbiBhdWN0b3IgY29uc2VjdGV0dXIgZXgsIGVnZXQgcG9zdWVyZSBsb3JlbSBjb252YWxsaXMgaWQuIERvbmVjIGxvYm9ydGlzIG9ybmFyZSBsb3JlbSwgdmVsIHVsdHJpY2VzIHRvcnRvciBtYXhpbXVzIGVnZXQuIENyYXMgcXVpcyBjb25ndWUgZHVpLiBQZWxsZW50ZXNxdWUgZXVpc21vZCBhdWd1ZSBhIGJpYmVuZHVtIHBvc3VlcmUuIFV0IGV0IHVsbGFtY29ycGVyIGFyY3UuXCIsXHJcbiAgICAgICAgaW1hZ2VVcmw6J2h0dHBzOi8vd3d3LnBocC5uZXQvaW1hZ2VzL3BocDgvcGhwXzhfcmVsZWFzZWQucG5nJ1xyXG4gICAgfSxcclxuXSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJucHJvZ3Jlc3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9