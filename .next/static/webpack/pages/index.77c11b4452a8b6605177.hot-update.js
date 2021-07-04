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
  description: "Ajustes de aplicaiones web usando tecnologias como HTML, CSS, Java Script y la libreria de jQuery. Contratado por proyecto",
  from: 2018,
  to: "Ago"
}, {
  title: 'Frontend Developer en Deq',
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu quam iaculis, consequat eros quis, aliquam ligula. Suspendisse potenti. Cras lacinia neque ac sem blandit placerat. Curabitur vitae elit luctus felis hendrerit fringilla. Ut quis urna pharetra, finibus ex ac, ornare lacus. Morbi et neque non justo fringilla hendrerit. Pellentesque nec dictum ligula. Curabitur elementum nisi sed mauris ornare tempus. Morbi vel ullamcorper lacus, sed vehicula purus. Suspendisse sed massa at nisl euismod faucibus. Suspendisse dictum viverra velit eu suscipit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus lacinia at lacus nec ornare. Vestibulum eu bibendum tortor.",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJza2lsbHMiLCJza2lsbCIsInBlcmNlbnRhZ2UiLCJleHBpcmVuY2llcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJmcm9tIiwidG8iLCJwcm9qZWN0cyIsIm5hbWUiLCJpbWFnZSIsInVybCIsInBvc3RzIiwiY29udGVudCIsImltYWdlVXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLE1BQU0sR0FBRyxDQUNsQjtBQUNJQyxPQUFLLEVBQUUsWUFEWDtBQUVJQyxZQUFVLEVBQUU7QUFGaEIsQ0FEa0IsRUFLbEI7QUFDSUQsT0FBSyxFQUFFLEtBRFg7QUFFSUMsWUFBVSxFQUFFO0FBRmhCLENBTGtCLEVBU2xCO0FBQ0lELE9BQUssRUFBRSxNQURYO0FBRUlDLFlBQVUsRUFBRTtBQUZoQixDQVRrQixFQWFsQjtBQUNJRCxPQUFLLEVBQUUsT0FEWDtBQUVJQyxZQUFVLEVBQUU7QUFGaEIsQ0Fia0IsRUFpQmxCO0FBQ0lELE9BQUssRUFBRSxjQURYO0FBRUlDLFlBQVUsRUFBRTtBQUZoQixDQWpCa0IsRUFxQmxCO0FBQ0lELE9BQUssRUFBRSxTQURYO0FBRUlDLFlBQVUsRUFBRTtBQUZoQixDQXJCa0IsQ0FBZjtBQTJCQSxJQUFNQyxXQUFXLEdBQUcsQ0FDdkI7QUFDSUMsT0FBSyxFQUFFLDhCQURYO0FBRUlDLGFBQVcsRUFBRSw0SEFGakI7QUFHSUMsTUFBSSxFQUFFLElBSFY7QUFJSUMsSUFBRSxFQUFFO0FBSlIsQ0FEdUIsRUFPdkI7QUFDSUgsT0FBSyxFQUFFLDJCQURYO0FBRUlDLGFBQVcsRUFBRSxndEJBRmpCO0FBR0lDLE1BQUksRUFBRSxJQUhWO0FBSUlDLElBQUUsRUFBRTtBQUpSLENBUHVCLEVBYXZCO0FBQ0lILE9BQUssRUFBRSw4QkFEWDtBQUVJQyxhQUFXLEVBQUUsZ3RCQUZqQjtBQUdJQyxNQUFJLEVBQUUsSUFIVjtBQUlJQyxJQUFFLEVBQUU7QUFKUixDQWJ1QixDQUFwQjtBQXFCQSxJQUFNQyxRQUFRLEdBQUcsQ0FDcEI7QUFDSUMsTUFBSSxFQUFFLGFBRFY7QUFFSUosYUFBVyxFQUFFLG9JQUZqQjtBQUdJSyxPQUFLLEVBQUUsZ0JBSFg7QUFJSUMsS0FBRyxFQUFFO0FBSlQsQ0FEb0IsRUFPcEI7QUFDSUYsTUFBSSxFQUFFLFFBRFY7QUFFSUosYUFBVyxFQUFFLHdLQUZqQjtBQUdJSyxPQUFLLEVBQUUsWUFIWDtBQUlJQyxLQUFHLEVBQUU7QUFKVCxDQVBvQixFQWFwQjtBQUNJRixNQUFJLEVBQUUsT0FEVjtBQUVJSixhQUFXLEVBQUUsb05BRmpCO0FBR0lLLE9BQUssRUFBRSxTQUhYO0FBSUlDLEtBQUcsRUFBRTtBQUpULENBYm9CLENBQWpCO0FBcUJBLElBQU1DLEtBQUssR0FBRyxDQUNqQjtBQUNJUixPQUFLLEVBQUUsTUFEWDtBQUVJUyxTQUFPLEVBQUUsd05BRmI7QUFHSUMsVUFBUSxFQUFDO0FBSGIsQ0FEaUIsRUFNakI7QUFDSVYsT0FBSyxFQUFFLFNBRFg7QUFFSVMsU0FBTyxFQUFFLHdOQUZiO0FBR0lDLFVBQVEsRUFBQztBQUhiLENBTmlCLEVBV2pCO0FBQ0lWLE9BQUssRUFBRSxRQURYO0FBRUlTLFNBQU8sRUFBRSx3TkFGYjtBQUdJQyxVQUFRLEVBQUM7QUFIYixDQVhpQixDQUFkIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljc3YzExYjQ0NTJhOGI2NjA1MTc3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc2tpbGxzID0gW1xyXG4gICAge1xyXG4gICAgICAgIHNraWxsOiAnSmF2YXNjcmlwdCcsXHJcbiAgICAgICAgcGVyY2VudGFnZTogMTAwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNraWxsOiAnUGhwJyxcclxuICAgICAgICBwZXJjZW50YWdlOiA4NVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBza2lsbDogJ05vZGUnLFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6IDcwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNraWxsOiAnUmVhY3QnLFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6IDgwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNraWxsOiAnUmVhY3QgTmF0aXZlJyxcclxuICAgICAgICBwZXJjZW50YWdlOiA3MFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBza2lsbDogJ0V4cHJlc3MnLFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6IDcwXHJcbiAgICB9LFxyXG5dXHJcblxyXG5leHBvcnQgY29uc3QgZXhwaXJlbmNpZXMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdGcm9udGVuZCBEZXZlbG9wZXIgZW4gUHJvc3NhJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJBanVzdGVzIGRlIGFwbGljYWlvbmVzIHdlYiB1c2FuZG8gdGVjbm9sb2dpYXMgY29tbyBIVE1MLCBDU1MsIEphdmEgU2NyaXB0IHkgbGEgbGlicmVyaWEgZGUgalF1ZXJ5LiBDb250cmF0YWRvIHBvciBwcm95ZWN0b1wiLFxyXG4gICAgICAgIGZyb206IDIwMTgsXHJcbiAgICAgICAgdG86IFwiQWdvXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdGcm9udGVuZCBEZXZlbG9wZXIgZW4gRGVxJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBEb25lYyBldSBxdWFtIGlhY3VsaXMsIGNvbnNlcXVhdCBlcm9zIHF1aXMsIGFsaXF1YW0gbGlndWxhLiBTdXNwZW5kaXNzZSBwb3RlbnRpLiBDcmFzIGxhY2luaWEgbmVxdWUgYWMgc2VtIGJsYW5kaXQgcGxhY2VyYXQuIEN1cmFiaXR1ciB2aXRhZSBlbGl0IGx1Y3R1cyBmZWxpcyBoZW5kcmVyaXQgZnJpbmdpbGxhLiBVdCBxdWlzIHVybmEgcGhhcmV0cmEsIGZpbmlidXMgZXggYWMsIG9ybmFyZSBsYWN1cy4gTW9yYmkgZXQgbmVxdWUgbm9uIGp1c3RvIGZyaW5naWxsYSBoZW5kcmVyaXQuIFBlbGxlbnRlc3F1ZSBuZWMgZGljdHVtIGxpZ3VsYS4gQ3VyYWJpdHVyIGVsZW1lbnR1bSBuaXNpIHNlZCBtYXVyaXMgb3JuYXJlIHRlbXB1cy4gTW9yYmkgdmVsIHVsbGFtY29ycGVyIGxhY3VzLCBzZWQgdmVoaWN1bGEgcHVydXMuIFN1c3BlbmRpc3NlIHNlZCBtYXNzYSBhdCBuaXNsIGV1aXNtb2QgZmF1Y2lidXMuIFN1c3BlbmRpc3NlIGRpY3R1bSB2aXZlcnJhIHZlbGl0IGV1IHN1c2NpcGl0LiBWZXN0aWJ1bHVtIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzIG9yY2kgbHVjdHVzIGV0IHVsdHJpY2VzIHBvc3VlcmUgY3ViaWxpYSBjdXJhZTsgUGhhc2VsbHVzIGxhY2luaWEgYXQgbGFjdXMgbmVjIG9ybmFyZS4gVmVzdGlidWx1bSBldSBiaWJlbmR1bSB0b3J0b3IuXCIsXHJcbiAgICAgICAgZnJvbTogMjAxOSxcclxuICAgICAgICB0bzogXCJGZWJcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ0JhY2tlbmQgRGV2ZWxvcGVyIGVuIEFuZW1vbmEnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIERvbmVjIGV1IHF1YW0gaWFjdWxpcywgY29uc2VxdWF0IGVyb3MgcXVpcywgYWxpcXVhbSBsaWd1bGEuIFN1c3BlbmRpc3NlIHBvdGVudGkuIENyYXMgbGFjaW5pYSBuZXF1ZSBhYyBzZW0gYmxhbmRpdCBwbGFjZXJhdC4gQ3VyYWJpdHVyIHZpdGFlIGVsaXQgbHVjdHVzIGZlbGlzIGhlbmRyZXJpdCBmcmluZ2lsbGEuIFV0IHF1aXMgdXJuYSBwaGFyZXRyYSwgZmluaWJ1cyBleCBhYywgb3JuYXJlIGxhY3VzLiBNb3JiaSBldCBuZXF1ZSBub24ganVzdG8gZnJpbmdpbGxhIGhlbmRyZXJpdC4gUGVsbGVudGVzcXVlIG5lYyBkaWN0dW0gbGlndWxhLiBDdXJhYml0dXIgZWxlbWVudHVtIG5pc2kgc2VkIG1hdXJpcyBvcm5hcmUgdGVtcHVzLiBNb3JiaSB2ZWwgdWxsYW1jb3JwZXIgbGFjdXMsIHNlZCB2ZWhpY3VsYSBwdXJ1cy4gU3VzcGVuZGlzc2Ugc2VkIG1hc3NhIGF0IG5pc2wgZXVpc21vZCBmYXVjaWJ1cy4gU3VzcGVuZGlzc2UgZGljdHVtIHZpdmVycmEgdmVsaXQgZXUgc3VzY2lwaXQuIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIGN1cmFlOyBQaGFzZWxsdXMgbGFjaW5pYSBhdCBsYWN1cyBuZWMgb3JuYXJlLiBWZXN0aWJ1bHVtIGV1IGJpYmVuZHVtIHRvcnRvci5cIixcclxuICAgICAgICBmcm9tOiAyMDIxLFxyXG4gICAgICAgIHRvOiBcIkZlYlwiXHJcbiAgICB9LFxyXG5dXHJcblxyXG5leHBvcnQgY29uc3QgcHJvamVjdHMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJTYW50byBTYXpvblwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlVuYSB0aWVuZGEgZW4gbGluZWEgcGFyYSBlbCBzZXJ2aWNpbyBkZSBDYXRlcmluZyBlbiBDRE1YLiBUb2RvIGVsIGNvbnRlbmlkbyBmcm9udGVuZCBmdWUgcmFsaXphZG8gY29uIGNzcyBwdXJvIHkgSmFjdmFTY3JpcHQgcHVyby5cIixcclxuICAgICAgICBpbWFnZTogXCJzYW50b3Nhem9uLmpwZ1wiLFxyXG4gICAgICAgIHVybDogXCJodHRwOi8vc2FudG9zYXpvbi5jb20ubXgvXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJEYWx5emFcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJVbiBzaXRpbyB3ZWIgZXN0YXRpY28gcGFyYSBlbCBzZXJ2aWNpbyBkZSBsaW1waWFkbyBlIGluc3RhbGFjaW9uIGRlIGFsZm9tYnJhcywgcGVyY2llbmFzIHkgY29ydGluYXMuIExhIHdlYiBmdWUgcmVhbGlhemFkYSBjb24gY29kaWdvIG5hdGl2byBkZSBjc3MsIEphdmFTY3JpcHQgeSBwaHAuXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwiZGFseXphLmpwZ1wiLFxyXG4gICAgICAgIHVybDogXCJodHRwczovL2RhbHl6YS5jb20vXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJBLlUuTVwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlVuIHNpdGlvIHdlYiBlc3RhdGljbyBjb24gY29udGVuaWRvIGVzcGlyaXR1YWwgeSB0cmFkaWNpb24gaW5pY2lhdGljYS4gTGEgd2ViIGZ1ZSByZWFsaWF6YWRhIGNvbiBjb2RpZ28gbmF0aXZvIGRlIGNzcywgSmF2YVNjcmlwdCB5IHBocC4gRXN0YSB3ZWIgdGFtYmllbiBjdWVudGEgY29uIHVuIEJhY2tPZmZpY2UgcHJvZ3JhbWFkbyBjb24gZWwgbGVuZ3VhamUgcGhwLlwiLFxyXG4gICAgICAgIGltYWdlOiBcImF1bS5qcGdcIixcclxuICAgICAgICB1cmw6IFwiaHR0cDovL2F1bWludGVybmFjaW9uYWwub3JnL1wiXHJcbiAgICB9LFxyXG5dXHJcblxyXG5leHBvcnQgY29uc3QgcG9zdHMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwicGhwOFwiLFxyXG4gICAgICAgIGNvbnRlbnQ6IFwiSW4gYXVjdG9yIGNvbnNlY3RldHVyIGV4LCBlZ2V0IHBvc3VlcmUgbG9yZW0gY29udmFsbGlzIGlkLiBEb25lYyBsb2JvcnRpcyBvcm5hcmUgbG9yZW0sIHZlbCB1bHRyaWNlcyB0b3J0b3IgbWF4aW11cyBlZ2V0LiBDcmFzIHF1aXMgY29uZ3VlIGR1aS4gUGVsbGVudGVzcXVlIGV1aXNtb2QgYXVndWUgYSBiaWJlbmR1bSBwb3N1ZXJlLiBVdCBldCB1bGxhbWNvcnBlciBhcmN1LlwiLFxyXG4gICAgICAgIGltYWdlVXJsOidodHRwczovL3d3dy5waHAubmV0L2ltYWdlcy9waHA4L3BocF84X3JlbGVhc2VkLnBuZydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiTGFyYXZlbFwiLFxyXG4gICAgICAgIGNvbnRlbnQ6IFwiSW4gYXVjdG9yIGNvbnNlY3RldHVyIGV4LCBlZ2V0IHBvc3VlcmUgbG9yZW0gY29udmFsbGlzIGlkLiBEb25lYyBsb2JvcnRpcyBvcm5hcmUgbG9yZW0sIHZlbCB1bHRyaWNlcyB0b3J0b3IgbWF4aW11cyBlZ2V0LiBDcmFzIHF1aXMgY29uZ3VlIGR1aS4gUGVsbGVudGVzcXVlIGV1aXNtb2QgYXVndWUgYSBiaWJlbmR1bSBwb3N1ZXJlLiBVdCBldCB1bGxhbWNvcnBlciBhcmN1LlwiLFxyXG4gICAgICAgIGltYWdlVXJsOidodHRwczovL3d3dy5waHAubmV0L2ltYWdlcy9waHA4L3BocF84X3JlbGVhc2VkLnBuZydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiTmV4dEpTXCIsXHJcbiAgICAgICAgY29udGVudDogXCJJbiBhdWN0b3IgY29uc2VjdGV0dXIgZXgsIGVnZXQgcG9zdWVyZSBsb3JlbSBjb252YWxsaXMgaWQuIERvbmVjIGxvYm9ydGlzIG9ybmFyZSBsb3JlbSwgdmVsIHVsdHJpY2VzIHRvcnRvciBtYXhpbXVzIGVnZXQuIENyYXMgcXVpcyBjb25ndWUgZHVpLiBQZWxsZW50ZXNxdWUgZXVpc21vZCBhdWd1ZSBhIGJpYmVuZHVtIHBvc3VlcmUuIFV0IGV0IHVsbGFtY29ycGVyIGFyY3UuXCIsXHJcbiAgICAgICAgaW1hZ2VVcmw6J2h0dHBzOi8vd3d3LnBocC5uZXQvaW1hZ2VzL3BocDgvcGhwXzhfcmVsZWFzZWQucG5nJ1xyXG4gICAgfSxcclxuXSJdLCJzb3VyY2VSb290IjoiIn0=