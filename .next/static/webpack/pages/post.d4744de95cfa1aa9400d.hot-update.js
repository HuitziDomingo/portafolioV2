self["webpackHotUpdate_N_E"]("pages/post",{

/***/ "./pages/post.js":
/*!***********************!*\
  !*** ./pages/post.js ***!
  \***********************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
// import Layout from "../components/Layout"
// import { useRouter } from "next/router"
// import { posts } from '../profile'
// const Post = () => {
//     const router = useRouter();
//     // console.log(router.query.title)
//     // const currentPost = posts.filter(post => post.title == router.query.title)[0]
//     // console.log(currentPost)
//     return (
//         <Layout footer={false}>
//             <div className="text-center">
//                 <h1>{posts.title}</h1>
//                 <img src={posts.imageUrl} className="img-fluid" style={{ width: '50%' }} alt="" />
//                 <p>{posts.content}</p>
//             </div>
//         </Layout>
//     )
// }
// export default Post

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0LmQ0NzQ0ZGU5NWNmYTFhYTk0MDBkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiXHJcbi8vIGltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbi8vIGltcG9ydCB7IHBvc3RzIH0gZnJvbSAnLi4vcHJvZmlsZSdcclxuXHJcbi8vIGNvbnN0IFBvc3QgPSAoKSA9PiB7XHJcblxyXG4vLyAgICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbi8vICAgICAvLyBjb25zb2xlLmxvZyhyb3V0ZXIucXVlcnkudGl0bGUpXHJcbi8vICAgICAvLyBjb25zdCBjdXJyZW50UG9zdCA9IHBvc3RzLmZpbHRlcihwb3N0ID0+IHBvc3QudGl0bGUgPT0gcm91dGVyLnF1ZXJ5LnRpdGxlKVswXVxyXG4vLyAgICAgLy8gY29uc29sZS5sb2coY3VycmVudFBvc3QpXHJcbi8vICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgIDxMYXlvdXQgZm9vdGVyPXtmYWxzZX0+XHJcbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuLy8gICAgICAgICAgICAgICAgIDxoMT57cG9zdHMudGl0bGV9PC9oMT5cclxuLy8gICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwb3N0cy5pbWFnZVVybH0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3R5bGU9e3sgd2lkdGg6ICc1MCUnIH19IGFsdD1cIlwiIC8+XHJcbi8vICAgICAgICAgICAgICAgICA8cD57cG9zdHMuY29udGVudH08L3A+XHJcbi8vICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgIDwvTGF5b3V0PlxyXG4vLyAgICAgKVxyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBQb3N0Il0sInNvdXJjZVJvb3QiOiIifQ==