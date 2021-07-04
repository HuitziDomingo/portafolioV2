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
  description: "Diseño de sitios web apartir de un mock'up en el software de AdobeXD .",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJza2lsbHMiLCJza2lsbCIsInBlcmNlbnRhZ2UiLCJudW0iLCJleHBpcmVuY2llcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJmcm9tIiwidG8iLCJwcm9qZWN0cyIsIm5hbWUiLCJpbWFnZSIsInVybCIsInBvc3RzIiwiY29udGVudCIsImltYWdlVXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLE1BQU0sR0FBRyxDQUNsQjtBQUNJQyxPQUFLLEVBQUUsWUFEWDtBQUVJQyxZQUFVLEVBQUUsR0FGaEI7QUFHSUMsS0FBRyxFQUFFO0FBSFQsQ0FEa0IsRUFNbEI7QUFDSUYsT0FBSyxFQUFFLEtBRFg7QUFFSUMsWUFBVSxFQUFFLEVBRmhCO0FBR0lDLEtBQUcsRUFBRTtBQUhULENBTmtCLEVBV2xCO0FBQ0lGLE9BQUssRUFBRSxNQURYO0FBRUlDLFlBQVUsRUFBRSxFQUZoQjtBQUdJQyxLQUFHLEVBQUU7QUFIVCxDQVhrQixFQWdCbEI7QUFDSUYsT0FBSyxFQUFFLE9BRFg7QUFFSUMsWUFBVSxFQUFFLEVBRmhCO0FBR0lDLEtBQUcsRUFBRTtBQUhULENBaEJrQixFQXFCbEI7QUFDSUYsT0FBSyxFQUFFLGNBRFg7QUFFSUMsWUFBVSxFQUFFLEVBRmhCO0FBR0lDLEtBQUcsRUFBRTtBQUhULENBckJrQixFQTBCbEI7QUFDSUYsT0FBSyxFQUFFLFNBRFg7QUFFSUMsWUFBVSxFQUFFLEVBRmhCO0FBR0lDLEtBQUcsRUFBRTtBQUhULENBMUJrQixDQUFmO0FBaUNBLElBQU1DLFdBQVcsR0FBRyxDQUN2QjtBQUNJQyxPQUFLLEVBQUUsOEJBRFg7QUFFSUMsYUFBVyxFQUFFLDRIQUZqQjtBQUdJQyxNQUFJLEVBQUUsSUFIVjtBQUlJQyxJQUFFLEVBQUU7QUFKUixDQUR1QixFQU92QjtBQUNJSCxPQUFLLEVBQUUsMkJBRFg7QUFFSUMsYUFBVyxFQUFFLHdFQUZqQjtBQUdJQyxNQUFJLEVBQUUsSUFIVjtBQUlJQyxJQUFFLEVBQUU7QUFKUixDQVB1QixFQWF2QjtBQUNJSCxPQUFLLEVBQUUsOEJBRFg7QUFFSUMsYUFBVyxFQUFFLGd0QkFGakI7QUFHSUMsTUFBSSxFQUFFLElBSFY7QUFJSUMsSUFBRSxFQUFFO0FBSlIsQ0FidUIsQ0FBcEI7QUFxQkEsSUFBTUMsUUFBUSxHQUFHLENBQ3BCO0FBQ0lDLE1BQUksRUFBRSxhQURWO0FBRUlKLGFBQVcsRUFBRSxvSUFGakI7QUFHSUssT0FBSyxFQUFFLGdCQUhYO0FBSUlDLEtBQUcsRUFBRTtBQUpULENBRG9CLEVBT3BCO0FBQ0lGLE1BQUksRUFBRSxRQURWO0FBRUlKLGFBQVcsRUFBRSx3S0FGakI7QUFHSUssT0FBSyxFQUFFLFlBSFg7QUFJSUMsS0FBRyxFQUFFO0FBSlQsQ0FQb0IsRUFhcEI7QUFDSUYsTUFBSSxFQUFFLE9BRFY7QUFFSUosYUFBVyxFQUFFLG9OQUZqQjtBQUdJSyxPQUFLLEVBQUUsU0FIWDtBQUlJQyxLQUFHLEVBQUU7QUFKVCxDQWJvQixDQUFqQjtBQXFCQSxJQUFNQyxLQUFLLEdBQUcsQ0FDakI7QUFDSVIsT0FBSyxFQUFFLE1BRFg7QUFFSVMsU0FBTyxFQUFFLHdOQUZiO0FBR0lDLFVBQVEsRUFBQztBQUhiLENBRGlCLEVBTWpCO0FBQ0lWLE9BQUssRUFBRSxTQURYO0FBRUlTLFNBQU8sRUFBRSx3TkFGYjtBQUdJQyxVQUFRLEVBQUM7QUFIYixDQU5pQixFQVdqQjtBQUNJVixPQUFLLEVBQUUsUUFEWDtBQUVJUyxTQUFPLEVBQUUsd05BRmI7QUFHSUMsVUFBUSxFQUFDO0FBSGIsQ0FYaUIsQ0FBZCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jZDBkN2RkMTJmN2RlMmZmMzkzZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHNraWxscyA9IFtcclxuICAgIHtcclxuICAgICAgICBza2lsbDogJ0phdmFzY3JpcHQnLFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6IDEwMCxcclxuICAgICAgICBudW06IFwiMTAwJVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNraWxsOiAnUGhwJyxcclxuICAgICAgICBwZXJjZW50YWdlOiA4NSxcclxuICAgICAgICBudW06IFwiODUlXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc2tpbGw6ICdOb2RlJyxcclxuICAgICAgICBwZXJjZW50YWdlOiA3MCxcclxuICAgICAgICBudW06IFwiNzAlXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc2tpbGw6ICdSZWFjdCcsXHJcbiAgICAgICAgcGVyY2VudGFnZTogODAsXHJcbiAgICAgICAgbnVtOiBcIjgwJVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNraWxsOiAnUmVhY3QgTmF0aXZlJyxcclxuICAgICAgICBwZXJjZW50YWdlOiA3MCxcclxuICAgICAgICBudW06IFwiNzAlXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc2tpbGw6ICdFeHByZXNzJyxcclxuICAgICAgICBwZXJjZW50YWdlOiA3MCxcclxuICAgICAgICBudW06IFwiNzAlXCJcclxuICAgIH0sXHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBleHBpcmVuY2llcyA9IFtcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ0Zyb250ZW5kIERldmVsb3BlciBlbiBQcm9zc2EnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkFqdXN0ZXMgZGUgYXBsaWNhaW9uZXMgd2ViIHVzYW5kbyB0ZWNub2xvZ2lhcyBjb21vIEhUTUwsIENTUywgSmF2YSBTY3JpcHQgeSBsYSBsaWJyZXJpYSBkZSBqUXVlcnkuIENvbnRyYXRhZG8gcG9yIHByb3llY3RvXCIsXHJcbiAgICAgICAgZnJvbTogMjAxOCxcclxuICAgICAgICB0bzogXCJBZ29cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ0Zyb250ZW5kIERldmVsb3BlciBlbiBEZXEnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkRpc2XDsW8gZGUgc2l0aW9zIHdlYiBhcGFydGlyIGRlIHVuIG1vY2sndXAgZW4gZWwgc29mdHdhcmUgZGUgQWRvYmVYRCAuXCIsXHJcbiAgICAgICAgZnJvbTogMjAxOSxcclxuICAgICAgICB0bzogXCJGZWJcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ0JhY2tlbmQgRGV2ZWxvcGVyIGVuIEFuZW1vbmEnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIERvbmVjIGV1IHF1YW0gaWFjdWxpcywgY29uc2VxdWF0IGVyb3MgcXVpcywgYWxpcXVhbSBsaWd1bGEuIFN1c3BlbmRpc3NlIHBvdGVudGkuIENyYXMgbGFjaW5pYSBuZXF1ZSBhYyBzZW0gYmxhbmRpdCBwbGFjZXJhdC4gQ3VyYWJpdHVyIHZpdGFlIGVsaXQgbHVjdHVzIGZlbGlzIGhlbmRyZXJpdCBmcmluZ2lsbGEuIFV0IHF1aXMgdXJuYSBwaGFyZXRyYSwgZmluaWJ1cyBleCBhYywgb3JuYXJlIGxhY3VzLiBNb3JiaSBldCBuZXF1ZSBub24ganVzdG8gZnJpbmdpbGxhIGhlbmRyZXJpdC4gUGVsbGVudGVzcXVlIG5lYyBkaWN0dW0gbGlndWxhLiBDdXJhYml0dXIgZWxlbWVudHVtIG5pc2kgc2VkIG1hdXJpcyBvcm5hcmUgdGVtcHVzLiBNb3JiaSB2ZWwgdWxsYW1jb3JwZXIgbGFjdXMsIHNlZCB2ZWhpY3VsYSBwdXJ1cy4gU3VzcGVuZGlzc2Ugc2VkIG1hc3NhIGF0IG5pc2wgZXVpc21vZCBmYXVjaWJ1cy4gU3VzcGVuZGlzc2UgZGljdHVtIHZpdmVycmEgdmVsaXQgZXUgc3VzY2lwaXQuIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIGN1cmFlOyBQaGFzZWxsdXMgbGFjaW5pYSBhdCBsYWN1cyBuZWMgb3JuYXJlLiBWZXN0aWJ1bHVtIGV1IGJpYmVuZHVtIHRvcnRvci5cIixcclxuICAgICAgICBmcm9tOiAyMDIxLFxyXG4gICAgICAgIHRvOiBcIkZlYlwiXHJcbiAgICB9LFxyXG5dXHJcblxyXG5leHBvcnQgY29uc3QgcHJvamVjdHMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJTYW50byBTYXpvblwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlVuYSB0aWVuZGEgZW4gbGluZWEgcGFyYSBlbCBzZXJ2aWNpbyBkZSBDYXRlcmluZyBlbiBDRE1YLiBUb2RvIGVsIGNvbnRlbmlkbyBmcm9udGVuZCBmdWUgcmFsaXphZG8gY29uIGNzcyBwdXJvIHkgSmFjdmFTY3JpcHQgcHVyby5cIixcclxuICAgICAgICBpbWFnZTogXCJzYW50b3Nhem9uLmpwZ1wiLFxyXG4gICAgICAgIHVybDogXCJodHRwOi8vc2FudG9zYXpvbi5jb20ubXgvXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJEYWx5emFcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJVbiBzaXRpbyB3ZWIgZXN0YXRpY28gcGFyYSBlbCBzZXJ2aWNpbyBkZSBsaW1waWFkbyBlIGluc3RhbGFjaW9uIGRlIGFsZm9tYnJhcywgcGVyY2llbmFzIHkgY29ydGluYXMuIExhIHdlYiBmdWUgcmVhbGlhemFkYSBjb24gY29kaWdvIG5hdGl2byBkZSBjc3MsIEphdmFTY3JpcHQgeSBwaHAuXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwiZGFseXphLmpwZ1wiLFxyXG4gICAgICAgIHVybDogXCJodHRwczovL2RhbHl6YS5jb20vXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJBLlUuTVwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlVuIHNpdGlvIHdlYiBlc3RhdGljbyBjb24gY29udGVuaWRvIGVzcGlyaXR1YWwgeSB0cmFkaWNpb24gaW5pY2lhdGljYS4gTGEgd2ViIGZ1ZSByZWFsaWF6YWRhIGNvbiBjb2RpZ28gbmF0aXZvIGRlIGNzcywgSmF2YVNjcmlwdCB5IHBocC4gRXN0YSB3ZWIgdGFtYmllbiBjdWVudGEgY29uIHVuIEJhY2tPZmZpY2UgcHJvZ3JhbWFkbyBjb24gZWwgbGVuZ3VhamUgcGhwLlwiLFxyXG4gICAgICAgIGltYWdlOiBcImF1bS5qcGdcIixcclxuICAgICAgICB1cmw6IFwiaHR0cDovL2F1bWludGVybmFjaW9uYWwub3JnL1wiXHJcbiAgICB9LFxyXG5dXHJcblxyXG5leHBvcnQgY29uc3QgcG9zdHMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwicGhwOFwiLFxyXG4gICAgICAgIGNvbnRlbnQ6IFwiSW4gYXVjdG9yIGNvbnNlY3RldHVyIGV4LCBlZ2V0IHBvc3VlcmUgbG9yZW0gY29udmFsbGlzIGlkLiBEb25lYyBsb2JvcnRpcyBvcm5hcmUgbG9yZW0sIHZlbCB1bHRyaWNlcyB0b3J0b3IgbWF4aW11cyBlZ2V0LiBDcmFzIHF1aXMgY29uZ3VlIGR1aS4gUGVsbGVudGVzcXVlIGV1aXNtb2QgYXVndWUgYSBiaWJlbmR1bSBwb3N1ZXJlLiBVdCBldCB1bGxhbWNvcnBlciBhcmN1LlwiLFxyXG4gICAgICAgIGltYWdlVXJsOidodHRwczovL3d3dy5waHAubmV0L2ltYWdlcy9waHA4L3BocF84X3JlbGVhc2VkLnBuZydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiTGFyYXZlbFwiLFxyXG4gICAgICAgIGNvbnRlbnQ6IFwiSW4gYXVjdG9yIGNvbnNlY3RldHVyIGV4LCBlZ2V0IHBvc3VlcmUgbG9yZW0gY29udmFsbGlzIGlkLiBEb25lYyBsb2JvcnRpcyBvcm5hcmUgbG9yZW0sIHZlbCB1bHRyaWNlcyB0b3J0b3IgbWF4aW11cyBlZ2V0LiBDcmFzIHF1aXMgY29uZ3VlIGR1aS4gUGVsbGVudGVzcXVlIGV1aXNtb2QgYXVndWUgYSBiaWJlbmR1bSBwb3N1ZXJlLiBVdCBldCB1bGxhbWNvcnBlciBhcmN1LlwiLFxyXG4gICAgICAgIGltYWdlVXJsOidodHRwczovL3d3dy5waHAubmV0L2ltYWdlcy9waHA4L3BocF84X3JlbGVhc2VkLnBuZydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiTmV4dEpTXCIsXHJcbiAgICAgICAgY29udGVudDogXCJJbiBhdWN0b3IgY29uc2VjdGV0dXIgZXgsIGVnZXQgcG9zdWVyZSBsb3JlbSBjb252YWxsaXMgaWQuIERvbmVjIGxvYm9ydGlzIG9ybmFyZSBsb3JlbSwgdmVsIHVsdHJpY2VzIHRvcnRvciBtYXhpbXVzIGVnZXQuIENyYXMgcXVpcyBjb25ndWUgZHVpLiBQZWxsZW50ZXNxdWUgZXVpc21vZCBhdWd1ZSBhIGJpYmVuZHVtIHBvc3VlcmUuIFV0IGV0IHVsbGFtY29ycGVyIGFyY3UuXCIsXHJcbiAgICAgICAgaW1hZ2VVcmw6J2h0dHBzOi8vd3d3LnBocC5uZXQvaW1hZ2VzL3BocDgvcGhwXzhfcmVsZWFzZWQucG5nJ1xyXG4gICAgfSxcclxuXSJdLCJzb3VyY2VSb290IjoiIn0=