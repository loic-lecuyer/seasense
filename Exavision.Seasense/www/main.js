"use strict";
(self["webpackChunkseasense_client"] = self["webpackChunkseasense_client"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _guards_jwt_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guards/jwt-guard */ 5050);
/* harmony import */ var _pages_configuration_configuration_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/configuration/configuration.component */ 6034);
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home/home.component */ 5245);
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/login/login.component */ 4902);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ 89);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);








const routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent, canActivate: [_guards_jwt_guard__WEBPACK_IMPORTED_MODULE_0__.JwtGuard] },
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent },
    { path: 'configuration', component: _pages_configuration_configuration_component__WEBPACK_IMPORTED_MODULE_1__.ConfigurationComponent }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__.MatTooltipModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__.MatTooltipModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/header/header.component */ 3646);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);



class AppComponent {
    constructor() {
        this.title = 'seasense-client';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header")(1, "router-outlet");
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxPQUFBO0VBQ0Esc0JBQUE7QUFDRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4OiAxO1xyXG4gIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home/home.component */ 5245);
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/login/login.component */ 4902);
/* harmony import */ var _pages_configuration_configuration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/configuration/configuration.component */ 6034);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/header/header.component */ 3646);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);











class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__.MatToolbarModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent,
        _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent,
        _pages_configuration_configuration_component__WEBPACK_IMPORTED_MODULE_4__.ConfigurationComponent,
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__.HeaderComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__.MatToolbarModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardModule] }); })();


/***/ }),

/***/ 3646:
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/tooltip */ 89);



class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
    onHomeClick() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 6, vars: 0, consts: [["color", "primary"], ["matTooltip", "Go to home page", 1, "title", 3, "click"], ["matTooltip", "Go to home page", 1, "sub-title", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0)(1, "div")(2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_2_listener() { return ctx.onHomeClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Seasens");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_4_listener() { return ctx.onHomeClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "By Exavision");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__.MatToolbar, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_2__.MatTooltip], styles: [".title[_ngcontent-%COMP%] {\n  font-family: \"Expansivabold\", Arial, Verdana, Tahoma, sans-serif;\n  font-size: 32px;\n  margin: 0px;\n  padding: 0px;\n  margin-top: 8px;\n  -webkit-user-select: none;\n          user-select: none;\n  line-height: 32px;\n  margin-left: 8px;\n}\n\n.sub-title[_ngcontent-%COMP%] {\n  font-family: \"Expansivabold\", Arial, Verdana, Tahoma, sans-serif;\n  font-size: 12px !important;\n  margin: 0px;\n  padding: 0px;\n  -webkit-user-select: none;\n          user-select: none;\n  line-height: 24px;\n  height: 24px;\n  font-style: italic;\n  margin-left: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdFQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnRUFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNGIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiRXhwYW5zaXZhYm9sZFwiLCBBcmlhbCwgVmVyZGFuYSwgVGFob21hLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxuICBtYXJnaW46IDBweDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbn1cclxuXHJcbi5zdWItdGl0bGUge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkV4cGFuc2l2YWJvbGRcIiwgQXJpYWwsIFZlcmRhbmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxuICBtYXJnaW46IDBweDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBtYXJnaW4tbGVmdDogOHB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 5050:
/*!*************************************!*\
  !*** ./src/app/guards/jwt-guard.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JwtGuard": () => (/* binding */ JwtGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


class JwtGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(route, state) {
        console.log("Check JwtGuard");
        return this.router.parseUrl('/login');
    }
}
JwtGuard.ɵfac = function JwtGuard_Factory(t) { return new (t || JwtGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
JwtGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: JwtGuard, factory: JwtGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6034:
/*!****************************************************************!*\
  !*** ./src/app/pages/configuration/configuration.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigurationComponent": () => (/* binding */ ConfigurationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class ConfigurationComponent {
    constructor() { }
    ngOnInit() {
    }
}
ConfigurationComponent.ɵfac = function ConfigurationComponent_Factory(t) { return new (t || ConfigurationComponent)(); };
ConfigurationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfigurationComponent, selectors: [["app-configuration"]], decls: 2, vars: 0, template: function ConfigurationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "configuration works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maWd1cmF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 5245:
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 0, vars: 0, template: function HomeComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 4902:
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ 1961);


class LoginComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 2, vars: 0, consts: [["color", "primary", 1, "card-login"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Simple card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCard], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex: 1;\n}\n\n.card-login[_ngcontent-%COMP%] {\n  margin: auto;\n  width: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLE9BQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FBQ0oiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGZsZXg6MTtcclxuICAgIFxyXG59XHJcbi5jYXJkLWxvZ2lue1xyXG4gICAgbWFyZ2luOmF1dG87XHJcbiAgICB3aWR0aDo0MDBweDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map