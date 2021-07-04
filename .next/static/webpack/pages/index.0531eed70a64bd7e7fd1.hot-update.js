self["webpackHotUpdate_N_E"]("pages/index",{

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
var expirencies = [{
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
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu quam iaculis, consequat eros quis, aliquam ligula. Suspendisse potenti. Cras lacinia neque ac sem blandit placerat. Curabitur vitae elit luctus felis hendrerit fringilla. Ut quis urna pharetra, finibus ex ac, ornare lacus. Morbi et neque non justo fringilla hendrerit. Pellentesque nec dictum ligula. Curabitur elementum nisi sed mauris ornare tempus. Morbi vel ullamcorper lacus, sed vehicula purus. Suspendisse sed massa at nisl euismod faucibus. Suspendisse dictum viverra velit eu suscipit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus lacinia at lacus nec ornare. Vestibulum eu bibendum tortor.",
  from: 2021,
  to: "Feb"
}];
var projects = [{
  name: "Santo Sazon",
  description: "Una tienda en linea para el servicio de Catering en CDMX. Todo el contenido frontend fue ralizado con css puro y JacvaScript puro.",
  image: "santosazon.jpg",
  url: "http://santosazon.com.mx/"
}, {
  name: "Dalyza",
  description: "Un sitio web estatico para el servicio de limpiado e instalacion de alfombras, percienas y cortinas. La web fue realiazada con codigo nativo de css, JavaScript y php.",
  image: "dalyza.jpg",
  url: "https://dalyza.com/"
}, {
  name: "A.U.M",
  description: "Un sitio web estatico con contenido espiritual y tradicion iniciatica. La web fue realiazada con codigo nativo de css, JavaScript y php. Esta web tambien cuenta con un BackOffice programado con el lenguaje php.",
  image: "aum.jpg",
  url: "http://auminternacional.org/"
}];
var posts = [{
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJza2lsbHMiLCJza2lsbCIsInBlcmNlbnRhZ2UiLCJudW0iLCJleHBpcmVuY2llcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJmcm9tIiwidG8iLCJwcm9qZWN0cyIsIm5hbWUiLCJpbWFnZSIsInVybCIsInBvc3RzIiwiY29udGVudCIsImltYWdlVXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLE1BQU0sR0FBRyxDQUNsQjtBQUNJQyxPQUFLLEVBQUUsWUFEWDtBQUVJQyxZQUFVLEVBQUUsR0FGaEI7QUFHSUMsS0FBRyxFQUFFO0FBSFQsQ0FEa0IsRUFNbEI7QUFDSUYsT0FBSyxFQUFFLEtBRFg7QUFFSUMsWUFBVSxFQUFFLEVBRmhCO0FBR0lDLEtBQUcsRUFBRTtBQUhULENBTmtCLEVBV2xCO0FBQ0lGLE9BQUssRUFBRSxNQURYO0FBRUlDLFlBQVUsRUFBRSxFQUZoQjtBQUdJQyxLQUFHLEVBQUU7QUFIVCxDQVhrQixFQWdCbEI7QUFDSUYsT0FBSyxFQUFFLE9BRFg7QUFFSUMsWUFBVSxFQUFFLEVBRmhCO0FBR0lDLEtBQUcsRUFBRTtBQUhULENBaEJrQixFQXFCbEI7QUFDSUYsT0FBSyxFQUFFLGNBRFg7QUFFSUMsWUFBVSxFQUFFLEVBRmhCO0FBR0lDLEtBQUcsRUFBRTtBQUhULENBckJrQixFQTBCbEI7QUFDSUYsT0FBSyxFQUFFLFNBRFg7QUFFSUMsWUFBVSxFQUFFLEVBRmhCO0FBR0lDLEtBQUcsRUFBRTtBQUhULENBMUJrQixDQUFmO0FBaUNBLElBQU1DLFdBQVcsR0FBRyxDQUN2QjtBQUNJQyxPQUFLLEVBQUUsOEJBRFg7QUFFSUMsYUFBVyxFQUFFLDRIQUZqQjtBQUdJQyxNQUFJLEVBQUUsSUFIVjtBQUlJQyxJQUFFLEVBQUU7QUFKUixDQUR1QixFQU92QjtBQUNJSCxPQUFLLEVBQUUsMkJBRFg7QUFFSUMsYUFBVyxFQUFFLHlNQUZqQjtBQUdJQyxNQUFJLEVBQUUsSUFIVjtBQUlJQyxJQUFFLEVBQUU7QUFKUixDQVB1QixFQWF2QjtBQUNJSCxPQUFLLEVBQUUsOEJBRFg7QUFFSUMsYUFBVyxFQUFFLGd0QkFGakI7QUFHSUMsTUFBSSxFQUFFLElBSFY7QUFJSUMsSUFBRSxFQUFFO0FBSlIsQ0FidUIsQ0FBcEI7QUFxQkEsSUFBTUMsUUFBUSxHQUFHLENBQ3BCO0FBQ0lDLE1BQUksRUFBRSxhQURWO0FBRUlKLGFBQVcsRUFBRSxvSUFGakI7QUFHSUssT0FBSyxFQUFFLGdCQUhYO0FBSUlDLEtBQUcsRUFBRTtBQUpULENBRG9CLEVBT3BCO0FBQ0lGLE1BQUksRUFBRSxRQURWO0FBRUlKLGFBQVcsRUFBRSx3S0FGakI7QUFHSUssT0FBSyxFQUFFLFlBSFg7QUFJSUMsS0FBRyxFQUFFO0FBSlQsQ0FQb0IsRUFhcEI7QUFDSUYsTUFBSSxFQUFFLE9BRFY7QUFFSUosYUFBVyxFQUFFLG9OQUZqQjtBQUdJSyxPQUFLLEVBQUUsU0FIWDtBQUlJQyxLQUFHLEVBQUU7QUFKVCxDQWJvQixDQUFqQjtBQXFCQSxJQUFNQyxLQUFLLEdBQUcsQ0FDakI7QUFDSVIsT0FBSyxFQUFFLE1BRFg7QUFFSVMsU0FBTyxFQUFFLHdOQUZiO0FBR0lDLFVBQVEsRUFBQztBQUhiLENBRGlCLEVBTWpCO0FBQ0lWLE9BQUssRUFBRSxTQURYO0FBRUlTLFNBQU8sRUFBRSx3TkFGYjtBQUdJQyxVQUFRLEVBQUM7QUFIYixDQU5pQixFQVdqQjtBQUNJVixPQUFLLEVBQUUsUUFEWDtBQUVJUyxTQUFPLEVBQUUsd05BRmI7QUFHSUMsVUFBUSxFQUFDO0FBSGIsQ0FYaUIsQ0FBZCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wNTMxZWVkNzBhNjRiZDdlN2ZkMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHNraWxscyA9IFtcclxuICAgIHtcclxuICAgICAgICBza2lsbDogJ0phdmFzY3JpcHQnLFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6IDEwMCxcclxuICAgICAgICBudW06IFwiMTAwJVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNraWxsOiAnUGhwJyxcclxuICAgICAgICBwZXJjZW50YWdlOiA4NSxcclxuICAgICAgICBudW06IFwiODUlXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc2tpbGw6ICdOb2RlJyxcclxuICAgICAgICBwZXJjZW50YWdlOiA3MCxcclxuICAgICAgICBudW06IFwiNzAlXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc2tpbGw6ICdSZWFjdCcsXHJcbiAgICAgICAgcGVyY2VudGFnZTogODAsXHJcbiAgICAgICAgbnVtOiBcIjgwJVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNraWxsOiAnUmVhY3QgTmF0aXZlJyxcclxuICAgICAgICBwZXJjZW50YWdlOiA3MCxcclxuICAgICAgICBudW06IFwiNzAlXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc2tpbGw6ICdFeHByZXNzJyxcclxuICAgICAgICBwZXJjZW50YWdlOiA3MCxcclxuICAgICAgICBudW06IFwiNzAlXCJcclxuICAgIH0sXHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBleHBpcmVuY2llcyA9IFtcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ0Zyb250ZW5kIERldmVsb3BlciBlbiBQcm9zc2EnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkFqdXN0ZXMgZGUgYXBsaWNhaW9uZXMgd2ViIHVzYW5kbyB0ZWNub2xvZ2lhcyBjb21vIEhUTUwsIENTUywgSmF2YSBTY3JpcHQgeSBsYSBsaWJyZXJpYSBkZSBqUXVlcnkuIENvbnRyYXRhZG8gcG9yIHByb3llY3RvXCIsXHJcbiAgICAgICAgZnJvbTogMjAxOCxcclxuICAgICAgICB0bzogXCJBZ29cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ0Zyb250ZW5kIERldmVsb3BlciBlbiBEZXEnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkRpc2XDsW8gZGUgc2l0aW9zIHdlYiBhcGFydGlyIGRlIHVuIG1vY2stdXAgZW4gZWwgc29mdHdhcmUgZGUgQWRvYmVYRCAuIFVzbyBkZSBhbGd1bmFzIGhlcnJhbWllbnRhcyBkZSBDU1MgY29tbyBCb290c3RyYXAgeSBkZSBKYXZhIFNjcmlwdCBjb21vIGpRdWVyeSBQYXJhIGxhIGNvbnN0cnVjY2lvbiB5IGRpc2XDsW8gZGUgYXBsaWNhY2lvbmVzIHdlYlwiLFxyXG4gICAgICAgIGZyb206IDIwMTksXHJcbiAgICAgICAgdG86IFwiRmViXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdCYWNrZW5kIERldmVsb3BlciBlbiBBbmVtb25hJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBEb25lYyBldSBxdWFtIGlhY3VsaXMsIGNvbnNlcXVhdCBlcm9zIHF1aXMsIGFsaXF1YW0gbGlndWxhLiBTdXNwZW5kaXNzZSBwb3RlbnRpLiBDcmFzIGxhY2luaWEgbmVxdWUgYWMgc2VtIGJsYW5kaXQgcGxhY2VyYXQuIEN1cmFiaXR1ciB2aXRhZSBlbGl0IGx1Y3R1cyBmZWxpcyBoZW5kcmVyaXQgZnJpbmdpbGxhLiBVdCBxdWlzIHVybmEgcGhhcmV0cmEsIGZpbmlidXMgZXggYWMsIG9ybmFyZSBsYWN1cy4gTW9yYmkgZXQgbmVxdWUgbm9uIGp1c3RvIGZyaW5naWxsYSBoZW5kcmVyaXQuIFBlbGxlbnRlc3F1ZSBuZWMgZGljdHVtIGxpZ3VsYS4gQ3VyYWJpdHVyIGVsZW1lbnR1bSBuaXNpIHNlZCBtYXVyaXMgb3JuYXJlIHRlbXB1cy4gTW9yYmkgdmVsIHVsbGFtY29ycGVyIGxhY3VzLCBzZWQgdmVoaWN1bGEgcHVydXMuIFN1c3BlbmRpc3NlIHNlZCBtYXNzYSBhdCBuaXNsIGV1aXNtb2QgZmF1Y2lidXMuIFN1c3BlbmRpc3NlIGRpY3R1bSB2aXZlcnJhIHZlbGl0IGV1IHN1c2NpcGl0LiBWZXN0aWJ1bHVtIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzIG9yY2kgbHVjdHVzIGV0IHVsdHJpY2VzIHBvc3VlcmUgY3ViaWxpYSBjdXJhZTsgUGhhc2VsbHVzIGxhY2luaWEgYXQgbGFjdXMgbmVjIG9ybmFyZS4gVmVzdGlidWx1bSBldSBiaWJlbmR1bSB0b3J0b3IuXCIsXHJcbiAgICAgICAgZnJvbTogMjAyMSxcclxuICAgICAgICB0bzogXCJGZWJcIlxyXG4gICAgfSxcclxuXVxyXG5cclxuZXhwb3J0IGNvbnN0IHByb2plY3RzID0gW1xyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiU2FudG8gU2F6b25cIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJVbmEgdGllbmRhIGVuIGxpbmVhIHBhcmEgZWwgc2VydmljaW8gZGUgQ2F0ZXJpbmcgZW4gQ0RNWC4gVG9kbyBlbCBjb250ZW5pZG8gZnJvbnRlbmQgZnVlIHJhbGl6YWRvIGNvbiBjc3MgcHVybyB5IEphY3ZhU2NyaXB0IHB1cm8uXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwic2FudG9zYXpvbi5qcGdcIixcclxuICAgICAgICB1cmw6IFwiaHR0cDovL3NhbnRvc2F6b24uY29tLm14L1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiRGFseXphXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVW4gc2l0aW8gd2ViIGVzdGF0aWNvIHBhcmEgZWwgc2VydmljaW8gZGUgbGltcGlhZG8gZSBpbnN0YWxhY2lvbiBkZSBhbGZvbWJyYXMsIHBlcmNpZW5hcyB5IGNvcnRpbmFzLiBMYSB3ZWIgZnVlIHJlYWxpYXphZGEgY29uIGNvZGlnbyBuYXRpdm8gZGUgY3NzLCBKYXZhU2NyaXB0IHkgcGhwLlwiLFxyXG4gICAgICAgIGltYWdlOiBcImRhbHl6YS5qcGdcIixcclxuICAgICAgICB1cmw6IFwiaHR0cHM6Ly9kYWx5emEuY29tL1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiQS5VLk1cIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJVbiBzaXRpbyB3ZWIgZXN0YXRpY28gY29uIGNvbnRlbmlkbyBlc3Bpcml0dWFsIHkgdHJhZGljaW9uIGluaWNpYXRpY2EuIExhIHdlYiBmdWUgcmVhbGlhemFkYSBjb24gY29kaWdvIG5hdGl2byBkZSBjc3MsIEphdmFTY3JpcHQgeSBwaHAuIEVzdGEgd2ViIHRhbWJpZW4gY3VlbnRhIGNvbiB1biBCYWNrT2ZmaWNlIHByb2dyYW1hZG8gY29uIGVsIGxlbmd1YWplIHBocC5cIixcclxuICAgICAgICBpbWFnZTogXCJhdW0uanBnXCIsXHJcbiAgICAgICAgdXJsOiBcImh0dHA6Ly9hdW1pbnRlcm5hY2lvbmFsLm9yZy9cIlxyXG4gICAgfSxcclxuXVxyXG5cclxuZXhwb3J0IGNvbnN0IHBvc3RzID0gW1xyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcInBocDhcIixcclxuICAgICAgICBjb250ZW50OiBcIkluIGF1Y3RvciBjb25zZWN0ZXR1ciBleCwgZWdldCBwb3N1ZXJlIGxvcmVtIGNvbnZhbGxpcyBpZC4gRG9uZWMgbG9ib3J0aXMgb3JuYXJlIGxvcmVtLCB2ZWwgdWx0cmljZXMgdG9ydG9yIG1heGltdXMgZWdldC4gQ3JhcyBxdWlzIGNvbmd1ZSBkdWkuIFBlbGxlbnRlc3F1ZSBldWlzbW9kIGF1Z3VlIGEgYmliZW5kdW0gcG9zdWVyZS4gVXQgZXQgdWxsYW1jb3JwZXIgYXJjdS5cIixcclxuICAgICAgICBpbWFnZVVybDonaHR0cHM6Ly93d3cucGhwLm5ldC9pbWFnZXMvcGhwOC9waHBfOF9yZWxlYXNlZC5wbmcnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIkxhcmF2ZWxcIixcclxuICAgICAgICBjb250ZW50OiBcIkluIGF1Y3RvciBjb25zZWN0ZXR1ciBleCwgZWdldCBwb3N1ZXJlIGxvcmVtIGNvbnZhbGxpcyBpZC4gRG9uZWMgbG9ib3J0aXMgb3JuYXJlIGxvcmVtLCB2ZWwgdWx0cmljZXMgdG9ydG9yIG1heGltdXMgZWdldC4gQ3JhcyBxdWlzIGNvbmd1ZSBkdWkuIFBlbGxlbnRlc3F1ZSBldWlzbW9kIGF1Z3VlIGEgYmliZW5kdW0gcG9zdWVyZS4gVXQgZXQgdWxsYW1jb3JwZXIgYXJjdS5cIixcclxuICAgICAgICBpbWFnZVVybDonaHR0cHM6Ly93d3cucGhwLm5ldC9pbWFnZXMvcGhwOC9waHBfOF9yZWxlYXNlZC5wbmcnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIk5leHRKU1wiLFxyXG4gICAgICAgIGNvbnRlbnQ6IFwiSW4gYXVjdG9yIGNvbnNlY3RldHVyIGV4LCBlZ2V0IHBvc3VlcmUgbG9yZW0gY29udmFsbGlzIGlkLiBEb25lYyBsb2JvcnRpcyBvcm5hcmUgbG9yZW0sIHZlbCB1bHRyaWNlcyB0b3J0b3IgbWF4aW11cyBlZ2V0LiBDcmFzIHF1aXMgY29uZ3VlIGR1aS4gUGVsbGVudGVzcXVlIGV1aXNtb2QgYXVndWUgYSBiaWJlbmR1bSBwb3N1ZXJlLiBVdCBldCB1bGxhbWNvcnBlciBhcmN1LlwiLFxyXG4gICAgICAgIGltYWdlVXJsOidodHRwczovL3d3dy5waHAubmV0L2ltYWdlcy9waHA4L3BocF84X3JlbGVhc2VkLnBuZydcclxuICAgIH0sXHJcbl0iXSwic291cmNlUm9vdCI6IiJ9