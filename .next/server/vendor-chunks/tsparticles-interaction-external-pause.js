"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/tsparticles-interaction-external-pause";
exports.ids = ["vendor-chunks/tsparticles-interaction-external-pause"];
exports.modules = {

/***/ "(ssr)/./node_modules/tsparticles-interaction-external-pause/esm/Pauser.js":
/*!***************************************************************************!*\
  !*** ./node_modules/tsparticles-interaction-external-pause/esm/Pauser.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Pauser: () => (/* binding */ Pauser)\n/* harmony export */ });\n/* harmony import */ var tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/esm/Core/Utils/ExternalInteractorBase.js\");\n\nclass Pauser extends tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.ExternalInteractorBase {\n    constructor(container){\n        super(container);\n        this.handleClickMode = (mode)=>{\n            if (mode !== \"pause\") {\n                return;\n            }\n            const container = this.container;\n            if (container.getAnimationStatus()) {\n                container.pause();\n            } else {\n                container.play();\n            }\n        };\n    }\n    clear() {}\n    init() {}\n    async interact() {}\n    isEnabled() {\n        return true;\n    }\n    reset() {}\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtaW50ZXJhY3Rpb24tZXh0ZXJuYWwtcGF1c2UvZXNtL1BhdXNlci5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE0RDtBQUNyRCxNQUFNQyxlQUFlRCxzRUFBc0JBO0lBQzlDRSxZQUFZQyxTQUFTLENBQUU7UUFDbkIsS0FBSyxDQUFDQTtRQUNOLElBQUksQ0FBQ0MsZUFBZSxHQUFHLENBQUNDO1lBQ3BCLElBQUlBLFNBQVMsU0FBUztnQkFDbEI7WUFDSjtZQUNBLE1BQU1GLFlBQVksSUFBSSxDQUFDQSxTQUFTO1lBQ2hDLElBQUlBLFVBQVVHLGtCQUFrQixJQUFJO2dCQUNoQ0gsVUFBVUksS0FBSztZQUNuQixPQUNLO2dCQUNESixVQUFVSyxJQUFJO1lBQ2xCO1FBQ0o7SUFDSjtJQUNBQyxRQUFRLENBQ1I7SUFDQUMsT0FBTyxDQUNQO0lBQ0EsTUFBTUMsV0FBVyxDQUNqQjtJQUNBQyxZQUFZO1FBQ1IsT0FBTztJQUNYO0lBQ0FDLFFBQVEsQ0FDUjtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmEvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtaW50ZXJhY3Rpb24tZXh0ZXJuYWwtcGF1c2UvZXNtL1BhdXNlci5qcz9iZDMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV4dGVybmFsSW50ZXJhY3RvckJhc2UgfSBmcm9tIFwidHNwYXJ0aWNsZXMtZW5naW5lXCI7XG5leHBvcnQgY2xhc3MgUGF1c2VyIGV4dGVuZHMgRXh0ZXJuYWxJbnRlcmFjdG9yQmFzZSB7XG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyKSB7XG4gICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2xpY2tNb2RlID0gKG1vZGUpID0+IHtcbiAgICAgICAgICAgIGlmIChtb2RlICE9PSBcInBhdXNlXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNvbnRhaW5lcjtcbiAgICAgICAgICAgIGlmIChjb250YWluZXIuZ2V0QW5pbWF0aW9uU3RhdHVzKCkpIHtcbiAgICAgICAgICAgICAgICBjb250YWluZXIucGF1c2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5wbGF5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuICAgIGNsZWFyKCkge1xuICAgIH1cbiAgICBpbml0KCkge1xuICAgIH1cbiAgICBhc3luYyBpbnRlcmFjdCgpIHtcbiAgICB9XG4gICAgaXNFbmFibGVkKCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmVzZXQoKSB7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbIkV4dGVybmFsSW50ZXJhY3RvckJhc2UiLCJQYXVzZXIiLCJjb25zdHJ1Y3RvciIsImNvbnRhaW5lciIsImhhbmRsZUNsaWNrTW9kZSIsIm1vZGUiLCJnZXRBbmltYXRpb25TdGF0dXMiLCJwYXVzZSIsInBsYXkiLCJjbGVhciIsImluaXQiLCJpbnRlcmFjdCIsImlzRW5hYmxlZCIsInJlc2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-interaction-external-pause/esm/Pauser.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-interaction-external-pause/esm/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/tsparticles-interaction-external-pause/esm/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadExternalPauseInteraction: () => (/* binding */ loadExternalPauseInteraction)\n/* harmony export */ });\n/* harmony import */ var _Pauser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pauser */ \"(ssr)/./node_modules/tsparticles-interaction-external-pause/esm/Pauser.js\");\n\nasync function loadExternalPauseInteraction(engine, refresh = true) {\n    await engine.addInteractor(\"externalPause\", (container)=>new _Pauser__WEBPACK_IMPORTED_MODULE_0__.Pauser(container), refresh);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtaW50ZXJhY3Rpb24tZXh0ZXJuYWwtcGF1c2UvZXNtL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWtDO0FBQzNCLGVBQWVDLDZCQUE2QkMsTUFBTSxFQUFFQyxVQUFVLElBQUk7SUFDckUsTUFBTUQsT0FBT0UsYUFBYSxDQUFDLGlCQUFpQixDQUFDQyxZQUFjLElBQUlMLDJDQUFNQSxDQUFDSyxZQUFZRjtBQUN0RiIsInNvdXJjZXMiOlsid2VicGFjazovL2JhLy4vbm9kZV9tb2R1bGVzL3RzcGFydGljbGVzLWludGVyYWN0aW9uLWV4dGVybmFsLXBhdXNlL2VzbS9pbmRleC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhdXNlciB9IGZyb20gXCIuL1BhdXNlclwiO1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRFeHRlcm5hbFBhdXNlSW50ZXJhY3Rpb24oZW5naW5lLCByZWZyZXNoID0gdHJ1ZSkge1xuICAgIGF3YWl0IGVuZ2luZS5hZGRJbnRlcmFjdG9yKFwiZXh0ZXJuYWxQYXVzZVwiLCAoY29udGFpbmVyKSA9PiBuZXcgUGF1c2VyKGNvbnRhaW5lciksIHJlZnJlc2gpO1xufVxuIl0sIm5hbWVzIjpbIlBhdXNlciIsImxvYWRFeHRlcm5hbFBhdXNlSW50ZXJhY3Rpb24iLCJlbmdpbmUiLCJyZWZyZXNoIiwiYWRkSW50ZXJhY3RvciIsImNvbnRhaW5lciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-interaction-external-pause/esm/index.js\n");

/***/ })

};
;