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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJza2lsbHMiLCJza2lsbCIsInBlcmNlbnRhZ2UiLCJudW0iLCJleHBpcmVuY2llcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJmcm9tIiwidG8iLCJwcm9qZWN0cyIsIm5hbWUiLCJpbWFnZSIsInVybCIsInBvc3RzIiwiY29udGVudCIsImltYWdlVXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLE1BQU0sR0FBRyxDQUNsQjtBQUNJQyxPQUFLLEVBQUUsWUFEWDtBQUVJQyxZQUFVLEVBQUUsR0FGaEI7QUFHSUMsS0FBRyxFQUFFO0FBSFQsQ0FEa0IsRUFNbEI7QUFDSUYsT0FBSyxFQUFFLEtBRFg7QUFFSUMsWUFBVSxFQUFFO0FBRmhCLENBTmtCLEVBVWxCO0FBQ0lELE9BQUssRUFBRSxNQURYO0FBRUlDLFlBQVUsRUFBRTtBQUZoQixDQVZrQixFQWNsQjtBQUNJRCxPQUFLLEVBQUUsT0FEWDtBQUVJQyxZQUFVLEVBQUU7QUFGaEIsQ0Fka0IsRUFrQmxCO0FBQ0lELE9BQUssRUFBRSxjQURYO0FBRUlDLFlBQVUsRUFBRTtBQUZoQixDQWxCa0IsRUFzQmxCO0FBQ0lELE9BQUssRUFBRSxTQURYO0FBRUlDLFlBQVUsRUFBRTtBQUZoQixDQXRCa0IsQ0FBZjtBQTRCQSxJQUFNRSxXQUFXLEdBQUcsQ0FDdkI7QUFDSUMsT0FBSyxFQUFFLDhCQURYO0FBRUlDLGFBQVcsRUFBRSw0SEFGakI7QUFHSUMsTUFBSSxFQUFFLElBSFY7QUFJSUMsSUFBRSxFQUFFO0FBSlIsQ0FEdUIsRUFPdkI7QUFDSUgsT0FBSyxFQUFFLDJCQURYO0FBRUlDLGFBQVcsRUFBRSx3RUFGakI7QUFHSUMsTUFBSSxFQUFFLElBSFY7QUFJSUMsSUFBRSxFQUFFO0FBSlIsQ0FQdUIsRUFhdkI7QUFDSUgsT0FBSyxFQUFFLDhCQURYO0FBRUlDLGFBQVcsRUFBRSxndEJBRmpCO0FBR0lDLE1BQUksRUFBRSxJQUhWO0FBSUlDLElBQUUsRUFBRTtBQUpSLENBYnVCLENBQXBCO0FBcUJBLElBQU1DLFFBQVEsR0FBRyxDQUNwQjtBQUNJQyxNQUFJLEVBQUUsYUFEVjtBQUVJSixhQUFXLEVBQUUsb0lBRmpCO0FBR0lLLE9BQUssRUFBRSxnQkFIWDtBQUlJQyxLQUFHLEVBQUU7QUFKVCxDQURvQixFQU9wQjtBQUNJRixNQUFJLEVBQUUsUUFEVjtBQUVJSixhQUFXLEVBQUUsd0tBRmpCO0FBR0lLLE9BQUssRUFBRSxZQUhYO0FBSUlDLEtBQUcsRUFBRTtBQUpULENBUG9CLEVBYXBCO0FBQ0lGLE1BQUksRUFBRSxPQURWO0FBRUlKLGFBQVcsRUFBRSxvTkFGakI7QUFHSUssT0FBSyxFQUFFLFNBSFg7QUFJSUMsS0FBRyxFQUFFO0FBSlQsQ0Fib0IsQ0FBakI7QUFxQkEsSUFBTUMsS0FBSyxHQUFHLENBQ2pCO0FBQ0lSLE9BQUssRUFBRSxNQURYO0FBRUlTLFNBQU8sRUFBRSx3TkFGYjtBQUdJQyxVQUFRLEVBQUM7QUFIYixDQURpQixFQU1qQjtBQUNJVixPQUFLLEVBQUUsU0FEWDtBQUVJUyxTQUFPLEVBQUUsd05BRmI7QUFHSUMsVUFBUSxFQUFDO0FBSGIsQ0FOaUIsRUFXakI7QUFDSVYsT0FBSyxFQUFFLFFBRFg7QUFFSVMsU0FBTyxFQUFFLHdOQUZiO0FBR0lDLFVBQVEsRUFBQztBQUhiLENBWGlCLENBQWQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODUxM2ZkYzk3NmMzZjNhNTczNmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBza2lsbHMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgc2tpbGw6ICdKYXZhc2NyaXB0JyxcclxuICAgICAgICBwZXJjZW50YWdlOiAxMDAsXHJcbiAgICAgICAgbnVtOiBcIjEwMCVcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBza2lsbDogJ1BocCcsXHJcbiAgICAgICAgcGVyY2VudGFnZTogODVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc2tpbGw6ICdOb2RlJyxcclxuICAgICAgICBwZXJjZW50YWdlOiA3MFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBza2lsbDogJ1JlYWN0JyxcclxuICAgICAgICBwZXJjZW50YWdlOiA4MFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBza2lsbDogJ1JlYWN0IE5hdGl2ZScsXHJcbiAgICAgICAgcGVyY2VudGFnZTogNzBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc2tpbGw6ICdFeHByZXNzJyxcclxuICAgICAgICBwZXJjZW50YWdlOiA3MFxyXG4gICAgfSxcclxuXVxyXG5cclxuZXhwb3J0IGNvbnN0IGV4cGlyZW5jaWVzID0gW1xyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnRnJvbnRlbmQgRGV2ZWxvcGVyIGVuIFByb3NzYScsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQWp1c3RlcyBkZSBhcGxpY2Fpb25lcyB3ZWIgdXNhbmRvIHRlY25vbG9naWFzIGNvbW8gSFRNTCwgQ1NTLCBKYXZhIFNjcmlwdCB5IGxhIGxpYnJlcmlhIGRlIGpRdWVyeS4gQ29udHJhdGFkbyBwb3IgcHJveWVjdG9cIixcclxuICAgICAgICBmcm9tOiAyMDE4LFxyXG4gICAgICAgIHRvOiBcIkFnb1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnRnJvbnRlbmQgRGV2ZWxvcGVyIGVuIERlcScsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiRGlzZcOxbyBkZSBzaXRpb3Mgd2ViIGFwYXJ0aXIgZGUgdW4gbW9jayd1cCBlbiBlbCBzb2Z0d2FyZSBkZSBBZG9iZVhEIC5cIixcclxuICAgICAgICBmcm9tOiAyMDE5LFxyXG4gICAgICAgIHRvOiBcIkZlYlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnQmFja2VuZCBEZXZlbG9wZXIgZW4gQW5lbW9uYScsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gRG9uZWMgZXUgcXVhbSBpYWN1bGlzLCBjb25zZXF1YXQgZXJvcyBxdWlzLCBhbGlxdWFtIGxpZ3VsYS4gU3VzcGVuZGlzc2UgcG90ZW50aS4gQ3JhcyBsYWNpbmlhIG5lcXVlIGFjIHNlbSBibGFuZGl0IHBsYWNlcmF0LiBDdXJhYml0dXIgdml0YWUgZWxpdCBsdWN0dXMgZmVsaXMgaGVuZHJlcml0IGZyaW5naWxsYS4gVXQgcXVpcyB1cm5hIHBoYXJldHJhLCBmaW5pYnVzIGV4IGFjLCBvcm5hcmUgbGFjdXMuIE1vcmJpIGV0IG5lcXVlIG5vbiBqdXN0byBmcmluZ2lsbGEgaGVuZHJlcml0LiBQZWxsZW50ZXNxdWUgbmVjIGRpY3R1bSBsaWd1bGEuIEN1cmFiaXR1ciBlbGVtZW50dW0gbmlzaSBzZWQgbWF1cmlzIG9ybmFyZSB0ZW1wdXMuIE1vcmJpIHZlbCB1bGxhbWNvcnBlciBsYWN1cywgc2VkIHZlaGljdWxhIHB1cnVzLiBTdXNwZW5kaXNzZSBzZWQgbWFzc2EgYXQgbmlzbCBldWlzbW9kIGZhdWNpYnVzLiBTdXNwZW5kaXNzZSBkaWN0dW0gdml2ZXJyYSB2ZWxpdCBldSBzdXNjaXBpdC4gVmVzdGlidWx1bSBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgY3VyYWU7IFBoYXNlbGx1cyBsYWNpbmlhIGF0IGxhY3VzIG5lYyBvcm5hcmUuIFZlc3RpYnVsdW0gZXUgYmliZW5kdW0gdG9ydG9yLlwiLFxyXG4gICAgICAgIGZyb206IDIwMjEsXHJcbiAgICAgICAgdG86IFwiRmViXCJcclxuICAgIH0sXHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBwcm9qZWN0cyA9IFtcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIlNhbnRvIFNhem9uXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVW5hIHRpZW5kYSBlbiBsaW5lYSBwYXJhIGVsIHNlcnZpY2lvIGRlIENhdGVyaW5nIGVuIENETVguIFRvZG8gZWwgY29udGVuaWRvIGZyb250ZW5kIGZ1ZSByYWxpemFkbyBjb24gY3NzIHB1cm8geSBKYWN2YVNjcmlwdCBwdXJvLlwiLFxyXG4gICAgICAgIGltYWdlOiBcInNhbnRvc2F6b24uanBnXCIsXHJcbiAgICAgICAgdXJsOiBcImh0dHA6Ly9zYW50b3Nhem9uLmNvbS5teC9cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIkRhbHl6YVwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlVuIHNpdGlvIHdlYiBlc3RhdGljbyBwYXJhIGVsIHNlcnZpY2lvIGRlIGxpbXBpYWRvIGUgaW5zdGFsYWNpb24gZGUgYWxmb21icmFzLCBwZXJjaWVuYXMgeSBjb3J0aW5hcy4gTGEgd2ViIGZ1ZSByZWFsaWF6YWRhIGNvbiBjb2RpZ28gbmF0aXZvIGRlIGNzcywgSmF2YVNjcmlwdCB5IHBocC5cIixcclxuICAgICAgICBpbWFnZTogXCJkYWx5emEuanBnXCIsXHJcbiAgICAgICAgdXJsOiBcImh0dHBzOi8vZGFseXphLmNvbS9cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIkEuVS5NXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVW4gc2l0aW8gd2ViIGVzdGF0aWNvIGNvbiBjb250ZW5pZG8gZXNwaXJpdHVhbCB5IHRyYWRpY2lvbiBpbmljaWF0aWNhLiBMYSB3ZWIgZnVlIHJlYWxpYXphZGEgY29uIGNvZGlnbyBuYXRpdm8gZGUgY3NzLCBKYXZhU2NyaXB0IHkgcGhwLiBFc3RhIHdlYiB0YW1iaWVuIGN1ZW50YSBjb24gdW4gQmFja09mZmljZSBwcm9ncmFtYWRvIGNvbiBlbCBsZW5ndWFqZSBwaHAuXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwiYXVtLmpwZ1wiLFxyXG4gICAgICAgIHVybDogXCJodHRwOi8vYXVtaW50ZXJuYWNpb25hbC5vcmcvXCJcclxuICAgIH0sXHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBwb3N0cyA9IFtcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJwaHA4XCIsXHJcbiAgICAgICAgY29udGVudDogXCJJbiBhdWN0b3IgY29uc2VjdGV0dXIgZXgsIGVnZXQgcG9zdWVyZSBsb3JlbSBjb252YWxsaXMgaWQuIERvbmVjIGxvYm9ydGlzIG9ybmFyZSBsb3JlbSwgdmVsIHVsdHJpY2VzIHRvcnRvciBtYXhpbXVzIGVnZXQuIENyYXMgcXVpcyBjb25ndWUgZHVpLiBQZWxsZW50ZXNxdWUgZXVpc21vZCBhdWd1ZSBhIGJpYmVuZHVtIHBvc3VlcmUuIFV0IGV0IHVsbGFtY29ycGVyIGFyY3UuXCIsXHJcbiAgICAgICAgaW1hZ2VVcmw6J2h0dHBzOi8vd3d3LnBocC5uZXQvaW1hZ2VzL3BocDgvcGhwXzhfcmVsZWFzZWQucG5nJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJMYXJhdmVsXCIsXHJcbiAgICAgICAgY29udGVudDogXCJJbiBhdWN0b3IgY29uc2VjdGV0dXIgZXgsIGVnZXQgcG9zdWVyZSBsb3JlbSBjb252YWxsaXMgaWQuIERvbmVjIGxvYm9ydGlzIG9ybmFyZSBsb3JlbSwgdmVsIHVsdHJpY2VzIHRvcnRvciBtYXhpbXVzIGVnZXQuIENyYXMgcXVpcyBjb25ndWUgZHVpLiBQZWxsZW50ZXNxdWUgZXVpc21vZCBhdWd1ZSBhIGJpYmVuZHVtIHBvc3VlcmUuIFV0IGV0IHVsbGFtY29ycGVyIGFyY3UuXCIsXHJcbiAgICAgICAgaW1hZ2VVcmw6J2h0dHBzOi8vd3d3LnBocC5uZXQvaW1hZ2VzL3BocDgvcGhwXzhfcmVsZWFzZWQucG5nJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJOZXh0SlNcIixcclxuICAgICAgICBjb250ZW50OiBcIkluIGF1Y3RvciBjb25zZWN0ZXR1ciBleCwgZWdldCBwb3N1ZXJlIGxvcmVtIGNvbnZhbGxpcyBpZC4gRG9uZWMgbG9ib3J0aXMgb3JuYXJlIGxvcmVtLCB2ZWwgdWx0cmljZXMgdG9ydG9yIG1heGltdXMgZWdldC4gQ3JhcyBxdWlzIGNvbmd1ZSBkdWkuIFBlbGxlbnRlc3F1ZSBldWlzbW9kIGF1Z3VlIGEgYmliZW5kdW0gcG9zdWVyZS4gVXQgZXQgdWxsYW1jb3JwZXIgYXJjdS5cIixcclxuICAgICAgICBpbWFnZVVybDonaHR0cHM6Ly93d3cucGhwLm5ldC9pbWFnZXMvcGhwOC9waHBfOF9yZWxlYXNlZC5wbmcnXHJcbiAgICB9LFxyXG5dIl0sInNvdXJjZVJvb3QiOiIifQ==