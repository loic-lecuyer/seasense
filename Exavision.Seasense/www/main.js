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
/* harmony export */   "httpInterceptorProviders": () => (/* binding */ httpInterceptorProviders),
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home/home.component */ 5245);
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/login/login.component */ 4902);
/* harmony import */ var _pages_configuration_configuration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/configuration/configuration.component */ 6034);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/header/header.component */ 3646);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/http.service */ 6858);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/user.service */ 3071);
/* harmony import */ var _interceptor_jwt_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./interceptor/jwt-interceptor */ 8690);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/select */ 1434);
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/tree */ 4972);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/cdk/scrolling */ 5752);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/menu */ 2796);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/list */ 6131);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/divider */ 9975);
/* harmony import */ var _components_hud_ui_hud_ui_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/hud-ui/hud-ui.component */ 8677);
/* harmony import */ var _components_hud_stream_hud_stream_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/hud-stream/hud-stream.component */ 6444);
/* harmony import */ var _components_hud_pan_ruller_hud_pan_ruller_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/hud-pan-ruller/hud-pan-ruller.component */ 210);
/* harmony import */ var _components_hud_tilt_ruller_hud_tilt_ruller_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/hud-tilt-ruller/hud-tilt-ruller.component */ 8324);
/* harmony import */ var _components_hud_status_hud_status_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/hud-status/hud-status.component */ 973);
/* harmony import */ var _components_compass_compass_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/compass/compass.component */ 2549);
/* harmony import */ var _components_stick_stick_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/stick/stick.component */ 2203);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 3184);

































/** Http interceptor providers in outside-in order */
const httpInterceptorProviders = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HTTP_INTERCEPTORS, useClass: _interceptor_jwt_interceptor__WEBPACK_IMPORTED_MODULE_8__.JwtInterceptor, multi: true },
];
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({ providers: [_services_http_service__WEBPACK_IMPORTED_MODULE_6__.HttpService, _services_user_service__WEBPACK_IMPORTED_MODULE_7__.UserService, httpInterceptorProviders], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__.BrowserAnimationsModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatButtonModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_21__.MatSelectModule,
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_22__.ScrollingModule,
            _angular_material_list__WEBPACK_IMPORTED_MODULE_23__.MatListModule,
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_24__.MatTreeModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_25__.MatToolbarModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_26__.MatCardModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__.MatIconModule,
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_28__.MatDividerModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__.MatMenuModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_30__.MatFormFieldModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_31__.MatInputModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_32__.FormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClientModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent,
        _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent,
        _pages_configuration_configuration_component__WEBPACK_IMPORTED_MODULE_4__.ConfigurationComponent,
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__.HeaderComponent,
        _components_hud_ui_hud_ui_component__WEBPACK_IMPORTED_MODULE_9__.HudUiComponent,
        _components_hud_stream_hud_stream_component__WEBPACK_IMPORTED_MODULE_10__.HudStreamComponent,
        _components_hud_pan_ruller_hud_pan_ruller_component__WEBPACK_IMPORTED_MODULE_11__.HudPanRullerComponent,
        _components_hud_tilt_ruller_hud_tilt_ruller_component__WEBPACK_IMPORTED_MODULE_12__.HudTiltRullerComponent,
        _components_hud_status_hud_status_component__WEBPACK_IMPORTED_MODULE_13__.HudStatusComponent, _components_compass_compass_component__WEBPACK_IMPORTED_MODULE_14__.CompassComponent, _components_stick_stick_component__WEBPACK_IMPORTED_MODULE_15__.StickComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__.BrowserAnimationsModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatButtonModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_21__.MatSelectModule,
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_22__.ScrollingModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_23__.MatListModule,
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_24__.MatTreeModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_25__.MatToolbarModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_26__.MatCardModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__.MatIconModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_28__.MatDividerModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__.MatMenuModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_30__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_31__.MatInputModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_32__.FormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClientModule] }); })();


/***/ }),

/***/ 2549:
/*!*********************************************************!*\
  !*** ./src/app/components/compass/compass.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompassComponent": () => (/* binding */ CompassComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class CompassComponent {
    constructor() { }
    ngOnInit() {
    }
}
CompassComponent.ɵfac = function CompassComponent_Factory(t) { return new (t || CompassComponent)(); };
CompassComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CompassComponent, selectors: [["app-compass"]], decls: 9, vars: 0, consts: [[1, "container"], [1, "svg-center"], ["alt", "compass background", "src", "assets/compass-next-fond.svg"], ["alt", "compass turret", "src", "assets/compass-next-turret.svg"], ["svgTurret", ""], ["alt", "compase rose", "src", "assets/compass-next-rose.svg"], ["svgDirection", ""]], template: function CompassComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } }, styles: [".container[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n          user-select: none;\n  height: 136px;\n  width: 136px;\n  padding: 0px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 16px;\n}\n\n.svg-center[_ngcontent-%COMP%] {\n  position: absolute;\n  -webkit-user-select: none;\n          user-select: none;\n  height: 120px;\n  width: 120px;\n  margin: 0px;\n  padding: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBhc3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSx5QkFBQTtVQUFBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0YiLCJmaWxlIjoiY29tcGFzcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uY29udGFpbmVyIHtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBoZWlnaHQ6IDEzNnB4O1xyXG4gIHdpZHRoOiAxMzZweDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6YXV0bztcclxuICBtYXJnaW4tcmlnaHQ6YXV0bztcclxuICBtYXJnaW4tdG9wOjE2cHg7XHJcbn1cclxuLnN2Zy1jZW50ZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBoZWlnaHQ6IDEyMHB4O1xyXG4gIHdpZHRoOiAxMjBweDtcclxuICBtYXJnaW46IDBweDtcclxuICBwYWRkaW5nOjBweDtcclxufVxyXG4iXX0= */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/user.service */ 3071);
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/http.service */ 6858);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_site_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/site.service */ 6633);
/* harmony import */ var _services_ws_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/ws.service */ 4885);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ 2796);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ 89);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ 1434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ 8133);















function HeaderComponent_div_18_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const unit_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", unit_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", unit_r5.displayName, " ");
} }
function HeaderComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 12)(1, "mat-label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Unit :");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-select", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("valueChange", function HeaderComponent_div_18_Template_mat_select_valueChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r6.selectedUnitId = $event; })("selectionChange", function HeaderComponent_div_18_Template_mat_select_selectionChange_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r8.onSelectedUnitChange(_r3.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, HeaderComponent_div_18_mat_option_5_Template, 2, 2, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx_r1.selectedUnitId);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.units);
} }
function HeaderComponent_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HeaderComponent_button_19_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r9.onLogoutClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
class HeaderComponent {
    constructor(userService, httpService, router, siteService, wsService) {
        this.userService = userService;
        this.httpService = httpService;
        this.router = router;
        this.siteService = siteService;
        this.wsService = wsService;
        this.units = [];
        this.selectedUnitId = undefined;
        this.siteLoadedSubscription = this.siteService.siteLoadedSubject.subscribe((site) => {
            var _a;
            if (site == null)
                this.units = [];
            else
                this.units = site.units;
            this.selectedUnitId = (_a = this.siteService.selectedUnit) === null || _a === void 0 ? void 0 : _a.id;
        });
    }
    onConfigurationButtonClick() {
        this.router.navigate(['/configuration']);
    }
    ngOnDestroy() {
        this.siteLoadedSubscription.unsubscribe();
    }
    ngOnInit() {
    }
    onHomeClick() {
    }
    onSelectedUnitChange(unitId) {
        this.siteService.selectUnitById(unitId);
    }
    onLogoutClick() {
        this.httpService.logout().subscribe({
            next: (response) => {
                this.wsService.stop();
                this.userService.clearToken();
                this.userService.clearUser();
                this.router.navigate(['/login']);
            },
            error: (err) => {
                this.userService.clearToken();
                this.userService.clearUser();
                this.router.navigate(['/login']);
            },
        });
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_http_service__WEBPACK_IMPORTED_MODULE_1__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_site_service__WEBPACK_IMPORTED_MODULE_2__.SiteService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_ws_service__WEBPACK_IMPORTED_MODULE_3__.WsService)); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 20, vars: 3, consts: [["color", "primary", 1, "display-flex"], [1, "display-flex", "flex-1", "flex-align-end"], ["mat-button", "", 3, "matMenuTriggerFor"], ["aria-hidden", "false", "aria-label", "Example home icon"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["mat-menu-item", ""], ["matTooltip", "Go to home page", 1, "title", 3, "click"], ["matTooltip", "Go to home page", 1, "sub-title", 3, "click"], [1, "flex-1"], ["class", "display-flex", 4, "ngIf"], ["mat-raised-button", "", "color", "accent", 3, "click", 4, "ngIf"], [1, "display-flex"], [1, "margin-4"], [1, "unit-select", "margin-4", 3, "value", "valueChange", "selectionChange"], ["unitSelect", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["mat-raised-button", "", "color", "accent", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-toolbar", 0)(1, "div", 1)(2, "button", 2)(3, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "view_headline");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-menu", null, 4)(7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_7_listener() { return ctx.onConfigurationButtonClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Configuration");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Camera");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Sav");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_13_listener() { return ctx.onHomeClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Seasens");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_15_listener() { return ctx.onHomeClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "By Exavision");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, HeaderComponent_div_18_Template, 6, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, HeaderComponent_button_19_Template, 2, 0, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.userService.user != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.userService.user != null);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__.MatToolbar, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuTrigger, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuItem, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__.MatTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatOption], styles: [".title[_ngcontent-%COMP%] {\n  font-family: \"Expansivabold\", Arial, Verdana, Tahoma, sans-serif;\n  font-size: 32px;\n  margin: 0px;\n  padding: 0px;\n  margin-top: 8px;\n  -webkit-user-select: none;\n          user-select: none;\n  line-height: 32px;\n  margin-left: 8px;\n}\n\n.sub-title[_ngcontent-%COMP%] {\n  font-family: \"Expansivabold\", Arial, Verdana, Tahoma, sans-serif;\n  font-size: 12px !important;\n  margin: 0px;\n  padding: 0px;\n  -webkit-user-select: none;\n          user-select: none;\n  line-height: 24px;\n  height: 24px;\n  font-style: italic;\n  margin-left: 8px;\n}\n\n.unit-select[_ngcontent-%COMP%] {\n  width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdFQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnRUFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUNBO0VBQ0ksWUFBQTtBQUVKIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiRXhwYW5zaXZhYm9sZFwiLCBBcmlhbCwgVmVyZGFuYSwgVGFob21hLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxuICBtYXJnaW46IDBweDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbn1cclxuXHJcbi5zdWItdGl0bGUge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkV4cGFuc2l2YWJvbGRcIiwgQXJpYWwsIFZlcmRhbmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxuICBtYXJnaW46IDBweDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBtYXJnaW4tbGVmdDogOHB4O1xyXG59XHJcbi51bml0LXNlbGVjdHtcclxuICAgIHdpZHRoOjIwMHB4O1xyXG5cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 210:
/*!***********************************************************************!*\
  !*** ./src/app/components/hud-pan-ruller/hud-pan-ruller.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HudPanRullerComponent": () => (/* binding */ HudPanRullerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class HudPanRullerComponent {
    constructor() { }
    ngOnInit() {
    }
}
HudPanRullerComponent.ɵfac = function HudPanRullerComponent_Factory(t) { return new (t || HudPanRullerComponent)(); };
HudPanRullerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HudPanRullerComponent, selectors: [["app-hud-pan-ruller"]], hostAttrs: [1, "hud-layer"], decls: 2, vars: 0, consts: [[1, "flex-1"], [1, "ruller"]], template: function HudPanRullerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0)(1, "div", 1);
    } }, styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.ruller[_ngcontent-%COMP%] {\n  height: 64px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh1ZC1wYW4tcnVsbGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBQ0E7RUFDRSxZQUFBO0FBRUYiLCJmaWxlIjoiaHVkLXBhbi1ydWxsZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxufVxyXG4ucnVsbGVyIHtcclxuICBoZWlnaHQ6IDY0cHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 973:
/*!***************************************************************!*\
  !*** ./src/app/components/hud-status/hud-status.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HudStatusComponent": () => (/* binding */ HudStatusComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class HudStatusComponent {
    constructor() { }
    ngOnInit() {
    }
}
HudStatusComponent.ɵfac = function HudStatusComponent_Factory(t) { return new (t || HudStatusComponent)(); };
HudStatusComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HudStatusComponent, selectors: [["app-hud-status"]], hostAttrs: [1, "hud-layer"], decls: 2, vars: 0, consts: [[1, "status"], [1, "flex-1"]], template: function HudStatusComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0)(1, "div", 1);
    } }, styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.status[_ngcontent-%COMP%] {\n  height: 64px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh1ZC1zdGF0dXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFDQTtFQUNFLFlBQUE7QUFFRiIsImZpbGUiOiJodWQtc3RhdHVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4uc3RhdHVzIHtcclxuICBoZWlnaHQ6IDY0cHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 6444:
/*!***************************************************************!*\
  !*** ./src/app/components/hud-stream/hud-stream.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HudStreamComponent": () => (/* binding */ HudStreamComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class HudStreamComponent {
    constructor() { }
    ngOnInit() {
    }
}
HudStreamComponent.ɵfac = function HudStreamComponent_Factory(t) { return new (t || HudStreamComponent)(); };
HudStreamComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HudStreamComponent, selectors: [["app-hud-stream"]], hostAttrs: [1, "hud-layer"], decls: 0, vars: 0, template: function HudStreamComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJodWQtc3RyZWFtLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 8324:
/*!*************************************************************************!*\
  !*** ./src/app/components/hud-tilt-ruller/hud-tilt-ruller.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HudTiltRullerComponent": () => (/* binding */ HudTiltRullerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class HudTiltRullerComponent {
    constructor() { }
    ngOnInit() {
    }
}
HudTiltRullerComponent.ɵfac = function HudTiltRullerComponent_Factory(t) { return new (t || HudTiltRullerComponent)(); };
HudTiltRullerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HudTiltRullerComponent, selectors: [["app-hud-tilt-ruller"]], hostAttrs: [1, "hud-layer"], decls: 2, vars: 0, consts: [[1, "flex-1"], [1, "ruller"]], template: function HudTiltRullerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0)(1, "div", 1);
    } }, styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n.ruller[_ngcontent-%COMP%] {\n  width: 64px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh1ZC10aWx0LXJ1bGxlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUNBO0VBQ0UsV0FBQTtBQUVGIiwiZmlsZSI6Imh1ZC10aWx0LXJ1bGxlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuLnJ1bGxlciB7XHJcbiAgd2lkdGg6IDY0cHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 8677:
/*!*******************************************************!*\
  !*** ./src/app/components/hud-ui/hud-ui.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HudUiComponent": () => (/* binding */ HudUiComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_site_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/site.service */ 6633);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _compass_compass_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../compass/compass.component */ 2549);
/* harmony import */ var _stick_stick_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stick/stick.component */ 2203);





function HudUiComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 3);
} }
function HudUiComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 3);
} }
function HudUiComponent_div_3_app_stick_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-stick");
} }
function HudUiComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-compass")(2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, HudUiComponent_div_3_app_stick_3_Template, 1, 0, "app-stick", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.hasMoveSpeedCapability);
} }
function HudUiComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 3);
} }
class HudUiComponent {
    constructor(siteService) {
        this.siteService = siteService;
        this.isLeftToRight = true;
        this.hasMoveSpeedCapability = false;
        this.unitSelectedSubscription = this.siteService.unitSelectedSubject.subscribe(() => { this.updateVisibilityFlags(); });
    }
    ngOnDestroy() {
        this.unitSelectedSubscription.unsubscribe();
    }
    ngOnInit() {
        this.updateVisibilityFlags();
    }
    updateVisibilityFlags() {
        if (this.siteService.selectedUnit != null) {
            this.hasMoveSpeedCapability = this.siteService.selectedUnit.hasMaterialWithCapability("Turret" /* Turret */, "TurretMoveSpeed" /* TurretMoveSpeed */);
        }
    }
}
HudUiComponent.ɵfac = function HudUiComponent_Factory(t) { return new (t || HudUiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_site_service__WEBPACK_IMPORTED_MODULE_0__.SiteService)); };
HudUiComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: HudUiComponent, selectors: [["app-hud-ui"]], hostAttrs: [1, "hud-layer"], decls: 5, vars: 4, consts: [["class", "hud-column", 4, "ngIf"], [1, "spacer"], ["class", "hud-column flex-dir-col", 4, "ngIf"], [1, "hud-column"], [1, "hud-column", "flex-dir-col"], [1, "flex-1"], [4, "ngIf"]], template: function HudUiComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, HudUiComponent_div_0_Template, 1, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, HudUiComponent_div_1_Template, 1, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, HudUiComponent_div_3_Template, 4, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, HudUiComponent_div_4_Template, 1, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLeftToRight);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isLeftToRight);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLeftToRight);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isLeftToRight);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _compass_compass_component__WEBPACK_IMPORTED_MODULE_1__.CompassComponent, _stick_stick_component__WEBPACK_IMPORTED_MODULE_2__.StickComponent], styles: [".spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.hud-column[_ngcontent-%COMP%] {\n  width: 200px;\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh1ZC11aS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLE9BQUE7QUFBSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBQ0oiLCJmaWxlIjoiaHVkLXVpLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwYWNlclxyXG57XHJcbiAgICBmbGV4OjE7XHJcbn1cclxuLmh1ZC1jb2x1bW4ge1xyXG4gICAgd2lkdGg6MjAwcHg7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 2203:
/*!*****************************************************!*\
  !*** ./src/app/components/stick/stick.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StickComponent": () => (/* binding */ StickComponent)
/* harmony export */ });
/* harmony import */ var nipplejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nipplejs */ 1465);
/* harmony import */ var nipplejs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nipplejs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_site_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/site.service */ 6633);



const _c0 = ["nipplejshost"];
class StickComponent {
    constructor(cdref, siteService) {
        this.cdref = cdref;
        this.siteService = siteService;
        this.nipplejshost = null;
        this.commandInterval = 100;
        this.nippleControl = undefined;
        this.turretMoveSpeedCapability = undefined;
        this.axisX = 0;
        this.axisY = 0;
        this.lastSendAxisX = 0;
        this.lastSendAxisY = 0;
        this.commandIntervalTimer = setInterval(() => {
            this.updateStickInfos();
        }, this.commandInterval);
        this.findTurretMoveSpeedCapability();
        this.unitSelectedSubscription = this.siteService.unitSelectedSubject.subscribe(this.findTurretMoveSpeedCapability);
    }
    findTurretMoveSpeedCapability() {
        var _a;
        this.turretMoveSpeedCapability = (_a = this.siteService.selectedUnit) === null || _a === void 0 ? void 0 : _a.getMaterialCapability("Turret" /* Turret */, "TurretMoveSpeed" /* TurretMoveSpeed */);
        console.log("findTurretMoveSpeedCapability ", this.turretMoveSpeedCapability);
    }
    ngOnInit() {
    }
    updateStickInfos() {
        if (this.lastSendAxisX != this.axisX || this.lastSendAxisY != this.axisY) {
            if (this.turretMoveSpeedCapability != null) {
                this.turretMoveSpeedCapability.moveSpeed(this.axisX, this.axisY);
            }
        }
        this.lastSendAxisX = this.axisX;
        this.lastSendAxisY = this.axisY;
    }
    ngOnDestroy() {
        clearInterval(this.commandIntervalTimer);
        this.unitSelectedSubscription.unsubscribe();
    }
    ngOnChanges(changes) {
    }
    ngAfterContentInit() {
    }
    ngAfterViewInit() {
        // NippleJs creation is deffered.
        // without deffred instanciation stick initialization is corrupted.
        setTimeout(() => {
            this.nippleControl = nipplejs__WEBPACK_IMPORTED_MODULE_0__.create({
                zone: this.nipplejshost.nativeElement,
                mode: 'static',
                position: { left: '80px', top: '80px' },
                color: 'blue',
                restOpacity: 0.8,
            });
            this.nippleControl.on('start', (evt, data) => {
                this.axisX = 0;
                this.axisY = 0;
            });
            this.nippleControl.on('end', (evt, data) => {
                this.axisX = 0;
                this.axisY = 0;
            });
            this.nippleControl.on('move', (evt, data) => {
                this.axisX = data.vector.x;
                this.axisY = data.vector.y;
            });
        }, 500);
    }
}
StickComponent.ɵfac = function StickComponent_Factory(t) { return new (t || StickComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_site_service__WEBPACK_IMPORTED_MODULE_1__.SiteService)); };
StickComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: StickComponent, selectors: [["app-stick"]], viewQuery: function StickComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.nipplejshost = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 0, consts: [[1, "stick-host"], ["nipplejshost", ""]], template: function StickComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 0, 1);
    } }, styles: ["[_nghost-%COMP%] {\n  width: 160px;\n  height: 160px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.stick-host[_ngcontent-%COMP%] {\n  position: relative;\n  width: 160px;\n  height: 160px;\n}\n\n.stick-host[_ngcontent-%COMP%]    > div.nipple[_ngcontent-%COMP%] {\n  position: relative !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0aWNrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFFSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBQ0E7RUFDSSw2QkFBQTtBQUVKIiwiZmlsZSI6InN0aWNrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICB3aWR0aDogMTYwcHg7XG4gIGhlaWdodDogMTYwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4uc3RpY2staG9zdFxue1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgIHdpZHRoOjE2MHB4O1xuICAgIGhlaWdodDoxNjBweDtcbn1cbi5zdGljay1ob3N0ID4gZGl2Lm5pcHBsZXtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZSAhaW1wb3J0YW50O1xufVxuIl19 */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/user.service */ 3071);
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/http.service */ 6858);




class JwtGuard {
    constructor(router, userService, httpService) {
        this.router = router;
        this.userService = userService;
        this.httpService = httpService;
    }
    canActivate(route, state) {
        return new Promise((resolve, reject) => {
            this.httpService.validateToken().subscribe({
                next: (response) => {
                    resolve(true);
                },
                error: (err) => {
                    this.router.navigate(['/login']);
                    reject(false);
                },
            });
        });
    }
}
JwtGuard.ɵfac = function JwtGuard_Factory(t) { return new (t || JwtGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_http_service__WEBPACK_IMPORTED_MODULE_1__.HttpService)); };
JwtGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: JwtGuard, factory: JwtGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8690:
/*!************************************************!*\
  !*** ./src/app/interceptor/jwt-interceptor.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JwtInterceptor": () => (/* binding */ JwtInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/user.service */ 3071);


/** Pass untouched request through to the next request handler. */
class JwtInterceptor {
    constructor(userService) {
        this.userService = userService;
    }
    intercept(req, next) {
        const userToken = this.userService.token;
        if (userToken != undefined) {
            const modifiedReq = req.clone({
                headers: req.headers.set('Authorization', `Bearer ${userToken}`),
            });
            return next.handle(modifiedReq);
        }
        return next.handle(req);
    }
}
JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) { return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService)); };
JwtInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: JwtInterceptor, factory: JwtInterceptor.ɵfac });


/***/ }),

/***/ 3620:
/*!**********************************************************************************!*\
  !*** ./src/app/materials/capabilities/turret/turret-move-absolute-capability.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TurretMoveAbsoluteCapability": () => (/* binding */ TurretMoveAbsoluteCapability)
/* harmony export */ });
class TurretMoveAbsoluteCapability {
    constructor(settingCapability) {
        this.id = settingCapability.id;
        this.capabilityType = "TurretMoveAbsolute" /* TurretMoveAbsolute */;
    }
}


/***/ }),

/***/ 1687:
/*!*******************************************************************************!*\
  !*** ./src/app/materials/capabilities/turret/turret-move-speed-capability.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TurretMoveSpeedCapability": () => (/* binding */ TurretMoveSpeedCapability)
/* harmony export */ });
class TurretMoveSpeedCapability {
    constructor(settingCapability) {
        this.id = settingCapability.id;
        this.capabilityType = "TurretMoveSpeed" /* TurretMoveSpeed */;
    }
    moveSpeed(axisX, axisY) {
        var _a;
        if (this.material == null)
            return;
        if (this.material.unit == null)
            return;
        (_a = this.material) === null || _a === void 0 ? void 0 : _a.wsService.turretMoveSpeed(this.material.unit.id, this.material.id, axisX, axisY);
    }
}


/***/ }),

/***/ 4386:
/*!***********************************************************************!*\
  !*** ./src/app/materials/capabilities/unit/unit-reboot-capability.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnitRebootCapability": () => (/* binding */ UnitRebootCapability)
/* harmony export */ });
class UnitRebootCapability {
    constructor(settingCapability) {
        this.id = settingCapability.id;
        this.capabilityType = "UnitReboot" /* UnitReboot */;
    }
}


/***/ }),

/***/ 1920:
/*!*****************************************!*\
  !*** ./src/app/materials/day-camera.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DayCamera": () => (/* binding */ DayCamera)
/* harmony export */ });
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory */ 7568);

class DayCamera {
    constructor(settingMaterial, site, unit, wsService) {
        this.capabilities = [];
        this.id = settingMaterial.id;
        this.materials = [];
        this.site = site;
        this.unit = unit;
        this.wsService = wsService;
        this.materialType = "DayCamera" /* DayCamera */;
        this.displayName = settingMaterial.displayName;
        let factory = new _factory__WEBPACK_IMPORTED_MODULE_0__.Factory();
        settingMaterial.materials.forEach((settingMaterialChild) => {
            let material = factory.createMaterial(settingMaterialChild, site, unit, this.wsService);
            this.materials.push(material);
        });
        settingMaterial.capabilities.forEach((settingCapability) => {
            let capability = factory.createCapability(settingCapability);
            capability.material = this;
            this.capabilities.push(capability);
        });
    }
}


/***/ }),

/***/ 7568:
/*!**************************************!*\
  !*** ./src/app/materials/factory.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Factory": () => (/* binding */ Factory)
/* harmony export */ });
/* harmony import */ var _day_camera__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./day-camera */ 1920);
/* harmony import */ var _thermal_camera__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./thermal-camera */ 8134);
/* harmony import */ var _inertial_measurement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inertial-measurement */ 7327);
/* harmony import */ var _lazer_measurement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lazer-measurement */ 9785);
/* harmony import */ var _unit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./unit */ 5396);
/* harmony import */ var _turret__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./turret */ 2491);
/* harmony import */ var _capabilities_turret_turret_move_speed_capability__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./capabilities/turret/turret-move-speed-capability */ 1687);
/* harmony import */ var _capabilities_unit_unit_reboot_capability__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./capabilities/unit/unit-reboot-capability */ 4386);
/* harmony import */ var _capabilities_turret_turret_move_absolute_capability__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./capabilities/turret/turret-move-absolute-capability */ 3620);









class Factory {
    createCapability(settingCapability) {
        let capability = null;
        switch (settingCapability.capabilityType) {
            case "TurretMoveSpeed" /* TurretMoveSpeed */:
                capability = new _capabilities_turret_turret_move_speed_capability__WEBPACK_IMPORTED_MODULE_6__.TurretMoveSpeedCapability(settingCapability);
                break;
            case "TurretMoveAbsolute" /* TurretMoveAbsolute */:
                capability = new _capabilities_turret_turret_move_absolute_capability__WEBPACK_IMPORTED_MODULE_8__.TurretMoveAbsoluteCapability(settingCapability);
                break;
            case "UnitReboot" /* UnitReboot */:
                capability = new _capabilities_unit_unit_reboot_capability__WEBPACK_IMPORTED_MODULE_7__.UnitRebootCapability(settingCapability);
                break;
        }
        if (capability == null)
            throw 'Capability ' + settingCapability.capabilityType + ' not implemented !!!';
        return capability;
    }
    createMaterial(settingMaterial, site, unit, wsService) {
        let material = null;
        switch (settingMaterial.materialType) {
            case "DayCamera" /* DayCamera */:
                material = new _day_camera__WEBPACK_IMPORTED_MODULE_0__.DayCamera(settingMaterial, site, unit, wsService);
                break;
            case "ThermalCamera" /* ThermalCamera */:
                material = new _thermal_camera__WEBPACK_IMPORTED_MODULE_1__.ThermalCamera(settingMaterial, site, unit, wsService);
                break;
            case "InertialMeasurement" /* InertialMeasurement */:
                material = new _inertial_measurement__WEBPACK_IMPORTED_MODULE_2__.InertialMeasurement(settingMaterial, site, unit, wsService);
                break;
            case "LazerMeasurement" /* LazerMeasurement */:
                material = new _lazer_measurement__WEBPACK_IMPORTED_MODULE_3__.LazerMeasurement(settingMaterial, site, unit, wsService);
                break;
            case "Unit" /* Unit */:
                material = new _unit__WEBPACK_IMPORTED_MODULE_4__.Unit(settingMaterial, site, wsService);
                break;
            case "Turret" /* Turret */:
                material = new _turret__WEBPACK_IMPORTED_MODULE_5__.Turret(settingMaterial, site, unit, wsService);
                break;
        }
        if (material == null)
            throw 'Material ' + settingMaterial.materialType + ' not implemented !!!';
        return material;
    }
}


/***/ }),

/***/ 7327:
/*!***************************************************!*\
  !*** ./src/app/materials/inertial-measurement.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InertialMeasurement": () => (/* binding */ InertialMeasurement)
/* harmony export */ });
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory */ 7568);

class InertialMeasurement {
    constructor(settingMaterial, site, unit, wsService) {
        this.capabilities = [];
        this.id = settingMaterial.id;
        this.materials = [];
        this.wsService = wsService;
        this.site = site;
        this.unit = unit;
        this.materialType = "InertialMeasurement" /* InertialMeasurement */;
        this.displayName = settingMaterial.displayName;
        let factory = new _factory__WEBPACK_IMPORTED_MODULE_0__.Factory();
        settingMaterial.materials.forEach((settingMaterialChild) => {
            let material = factory.createMaterial(settingMaterialChild, site, unit, this.wsService);
            this.materials.push(material);
        });
        settingMaterial.capabilities.forEach((settingCapability) => {
            let capability = factory.createCapability(settingCapability);
            capability.material = this;
            this.capabilities.push(capability);
        });
    }
}


/***/ }),

/***/ 9785:
/*!************************************************!*\
  !*** ./src/app/materials/lazer-measurement.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LazerMeasurement": () => (/* binding */ LazerMeasurement)
/* harmony export */ });
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory */ 7568);

class LazerMeasurement {
    constructor(settingMaterial, site, unit, wsService) {
        this.capabilities = [];
        this.id = settingMaterial.id;
        this.materials = [];
        this.wsService = wsService;
        this.site = site;
        this.unit = unit;
        this.materialType = "LazerMeasurement" /* LazerMeasurement */;
        this.displayName = settingMaterial.displayName;
        let factory = new _factory__WEBPACK_IMPORTED_MODULE_0__.Factory();
        settingMaterial.materials.forEach((settingMaterialChild) => {
            let material = factory.createMaterial(settingMaterialChild, site, unit, this.wsService);
            this.materials.push(material);
        });
        settingMaterial.capabilities.forEach((settingCapability) => {
            let capability = factory.createCapability(settingCapability);
            capability.material = this;
            this.capabilities.push(capability);
        });
    }
}


/***/ }),

/***/ 4753:
/*!***********************************!*\
  !*** ./src/app/materials/site.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Site": () => (/* binding */ Site)
/* harmony export */ });
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory */ 7568);
/* harmony import */ var _unit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unit */ 5396);


class Site {
    constructor(settingSite, wsService) {
        this.units = [];
        this.capabilities = [];
        this.id = settingSite.id;
        let factory = new _factory__WEBPACK_IMPORTED_MODULE_0__.Factory();
        settingSite.units.forEach((settingUnit) => {
            let unit = new _unit__WEBPACK_IMPORTED_MODULE_1__.Unit(settingUnit, this, wsService);
            this.units.push(unit);
        });
        settingSite.capabilities.forEach((settingCapability) => {
            let capability = factory.createCapability(settingCapability);
            this.capabilities.push(capability);
        });
    }
}


/***/ }),

/***/ 8134:
/*!*********************************************!*\
  !*** ./src/app/materials/thermal-camera.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThermalCamera": () => (/* binding */ ThermalCamera)
/* harmony export */ });
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory */ 7568);

class ThermalCamera {
    constructor(settingMaterial, site, unit, wsService) {
        this.capabilities = [];
        this.id = settingMaterial.id;
        this.materials = [];
        this.site = site;
        this.unit = unit;
        this.wsService = wsService;
        this.materialType = "ThermalCamera" /* ThermalCamera */;
        this.displayName = settingMaterial.displayName;
        let factory = new _factory__WEBPACK_IMPORTED_MODULE_0__.Factory();
        settingMaterial.materials.forEach((settingMaterialChild) => {
            let material = factory.createMaterial(settingMaterialChild, site, unit, this.wsService);
            this.materials.push(material);
        });
        settingMaterial.capabilities.forEach((settingCapability) => {
            let capability = factory.createCapability(settingCapability);
            capability.material = this;
            this.capabilities.push(capability);
        });
    }
}


/***/ }),

/***/ 2491:
/*!*************************************!*\
  !*** ./src/app/materials/turret.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Turret": () => (/* binding */ Turret)
/* harmony export */ });
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory */ 7568);

class Turret {
    constructor(settingMaterial, site, unit, wsService) {
        this.capabilities = [];
        this.id = settingMaterial.id;
        this.materials = [];
        this.site = site;
        this.unit = unit;
        this.materialType = "Turret" /* Turret */;
        this.wsService = wsService;
        this.displayName = settingMaterial.displayName;
        let factory = new _factory__WEBPACK_IMPORTED_MODULE_0__.Factory();
        settingMaterial.materials.forEach((settingMaterialChild) => {
            let material = factory.createMaterial(settingMaterialChild, site, unit, this.wsService);
            this.materials.push(material);
        });
        settingMaterial.capabilities.forEach((settingCapability) => {
            let capability = factory.createCapability(settingCapability);
            capability.material = this;
            this.capabilities.push(capability);
        });
    }
}


/***/ }),

/***/ 5396:
/*!***********************************!*\
  !*** ./src/app/materials/unit.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Unit": () => (/* binding */ Unit)
/* harmony export */ });
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory */ 7568);

class Unit {
    constructor(settingMaterial, site, wsService) {
        this.capabilities = [];
        let factory = new _factory__WEBPACK_IMPORTED_MODULE_0__.Factory();
        this.unit = this;
        this.site = site;
        this.id = settingMaterial.id;
        this.materials = [];
        this.wsService = wsService;
        this.materialType = "Unit" /* Unit */;
        this.displayName = settingMaterial.displayName;
        settingMaterial.materials.forEach((settingMaterialChild) => {
            let material = factory.createMaterial(settingMaterialChild, site, this, this.wsService);
            this.materials.push(material);
        });
        settingMaterial.capabilities.forEach((settingCapability) => {
            let capability = factory.createCapability(settingCapability);
            capability.material = this;
            this.capabilities.push(capability);
        });
    }
    // Pour coder cette methode il faut au mmoins une deuxième capability qui ne soit pas du type recherché
    hasMaterialWithCapability(materialType, capabilityType) {
        let material = this.getMaterial(materialType);
        if (material != null) {
            let cap = material.capabilities.find((value) => {
                return (value.capabilityType == capabilityType);
            });
            if (cap != null)
                return true;
        }
        return false;
    }
    getMaterialCapability(materialType, capabilityType) {
        let material = this.getMaterial(materialType);
        if (material != null) {
            let cap = material.capabilities.find((value) => {
                return (value.capabilityType == capabilityType);
            });
            if (cap != null) {
                let result = cap;
                return result;
            }
        }
        return undefined;
    }
    getMaterial(materialType) {
        return this.materials.find((value) => { return value.materialType == materialType; });
    }
}


/***/ }),

/***/ 9405:
/*!***********************************************************!*\
  !*** ./src/app/pages/configuration/configuration-node.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigurationNode": () => (/* binding */ ConfigurationNode)
/* harmony export */ });
class ConfigurationNode {
    constructor(item, childs) {
        this.selected = false;
        this.item = item;
        this.childs = childs;
    }
}


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
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/tree */ 8205);
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tree */ 4972);
/* harmony import */ var _configuration_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configuration-node */ 9405);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_site_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/site.service */ 6633);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/http.service */ 6858);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/divider */ 9975);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ 1434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ 8133);


















function ConfigurationComponent_mat_tree_node_12_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-tree-node", 13)(1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ConfigurationComponent_mat_tree_node_12_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const node_r4 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r5.selectNode(node_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const node_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](node_r4.selected == true ? "node-bold" : "node-normal");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](node_r4.item.displayName);
} }
function ConfigurationComponent_mat_nested_tree_node_13_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-nested-tree-node")(1, "div", 15)(2, "button", 16)(3, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ConfigurationComponent_mat_nested_tree_node_13_Template_button_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); const node_r7 = restoredCtx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r8.selectNode(node_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](9, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const node_r7 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-label", "Toggle " + node_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.treeControl.isExpanded(node_r7) ? "expand_more" : "chevron_right", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](node_r7.selected == true ? "node-bold" : "node-normal");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](node_r7.item.displayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("configuration-tree-invisible", !ctx_r1.treeControl.isExpanded(node_r7));
} }
function ConfigurationComponent_mat_card_16_div_5_mat_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const unitType_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", unitType_r19.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", unitType_r19.displayName, " ");
} }
function ConfigurationComponent_mat_card_16_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 24)(1, "div", 25)(2, "mat-form-field", 26)(3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Display name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ConfigurationComponent_mat_card_16_div_5_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r20.selectedNode.item.displayName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 29)(8, "mat-label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Add unit of type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "mat-select", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function ConfigurationComponent_mat_card_16_div_5_Template_mat_select_valueChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r22.selectedUnitTypeValue = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, ConfigurationComponent_mat_card_16_div_5_mat_option_11_Template, 2, 2, "mat-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ConfigurationComponent_mat_card_16_div_5_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r21); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r23.onAddUnitButtonClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r10.selectedNode.item.displayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r10.selectedUnitTypeValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r10.unitTypes);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r10.selectedUnitTypeValue == null);
} }
function ConfigurationComponent_mat_card_16_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 35)(1, "mat-form-field", 26)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Display name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ConfigurationComponent_mat_card_16_div_6_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r24.selectedNode.item.displayName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-form-field", 26)(6, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Hardware IP");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ConfigurationComponent_mat_card_16_div_6_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r25); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r26.selectedNode.item.hardwareCardIp = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-form-field", 26)(10, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Hardware Port");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ConfigurationComponent_mat_card_16_div_6_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r25); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r27.selectedNode.item.hardwareCardPort = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ConfigurationComponent_mat_card_16_div_6_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r25); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r28.onRemoveSelectedNodeButtonClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Remove this unit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r11.selectedNode.item.displayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r11.selectedNode.item.hardwareCardIp);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r11.selectedNode.item.hardwareCardPort);
} }
function ConfigurationComponent_mat_card_16_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 35)(1, "mat-form-field", 26)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Display name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ConfigurationComponent_mat_card_16_div_7_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r29.selectedNode.item.displayName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-form-field", 26)(6, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Stream URL");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ConfigurationComponent_mat_card_16_div_7_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r31.selectedNode.item.streamUrl = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r12.selectedNode.item.displayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r12.selectedNode.item.streamUrl);
} }
function ConfigurationComponent_mat_card_16_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 35)(1, "mat-form-field", 26)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Display name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ConfigurationComponent_mat_card_16_div_8_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r32.selectedNode.item.displayName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-form-field", 26)(6, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Stream URL");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ConfigurationComponent_mat_card_16_div_8_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r33); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r34.selectedNode.item.streamUrl = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r13.selectedNode.item.displayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r13.selectedNode.item.streamUrl);
} }
function ConfigurationComponent_mat_card_16_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 24)(1, "mat-form-field", 26)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Display name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ConfigurationComponent_mat_card_16_div_9_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r35.selectedNode.item.displayName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r14.selectedNode.item.displayName);
} }
function ConfigurationComponent_mat_card_16_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 24)(1, "mat-form-field", 26)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Display name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ConfigurationComponent_mat_card_16_div_10_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r37.selectedNode.item.displayName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r15.selectedNode.item.displayName);
} }
function ConfigurationComponent_mat_card_16_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 24)(1, "mat-form-field", 26)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Display name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ConfigurationComponent_mat_card_16_div_11_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r39.selectedNode.item.displayName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r16.selectedNode.item.displayName);
} }
function ConfigurationComponent_mat_card_16_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 24)(1, "div", 25)(2, "mat-form-field", 26)(3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Max Pan Speed (\u00B0/sec)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ConfigurationComponent_mat_card_16_div_12_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r42); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r41.selectedNode.item.maxPanSpeed = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-form-field", 26)(7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Max Tilt Speed (\u00B0/sec)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ConfigurationComponent_mat_card_16_div_12_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r42); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r43.selectedNode.item.maxTiltSpeed = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r17.selectedNode.item.maxPanSpeed);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r17.selectedNode.item.maxTiltSpeed);
} }
function ConfigurationComponent_mat_card_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-card", 20)(1, "mat-card-header")(2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-card-content", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ConfigurationComponent_mat_card_16_div_5_Template, 14, 4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, ConfigurationComponent_mat_card_16_div_6_Template, 16, 3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, ConfigurationComponent_mat_card_16_div_7_Template, 9, 2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, ConfigurationComponent_mat_card_16_div_8_Template, 9, 2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ConfigurationComponent_mat_card_16_div_9_Template, 5, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, ConfigurationComponent_mat_card_16_div_10_Template, 5, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, ConfigurationComponent_mat_card_16_div_11_Template, 5, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, ConfigurationComponent_mat_card_16_div_12_Template, 10, 2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.selectedNode.item.displayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.selectedNode.item.type == "SettingSite");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.selectedNode.item.type == "SettingSeamosUnit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.selectedNode.item.type == "SettingSeamosDayCamera");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.selectedNode.item.type == "SettingSeamosThermalCamera");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.selectedNode.item.type == "SettingSeamosInertialMeasurement");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.selectedNode.item.type == "SettingSeamosLazerMeasurement");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.selectedNode.item.type == "SettingSeamosTurret");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.selectedNode.item.type == "SettingSeamosTurretMoveSpeedCapability");
} }
function ConfigurationComponent_mat_error_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.errorMessage);
} }
class ConfigurationComponent {
    constructor(siteService, router, httpService) {
        this.siteService = siteService;
        this.router = router;
        this.httpService = httpService;
        this.errorMessage = undefined;
        this.unitTypes = [];
        this.rootNode = new _configuration_node__WEBPACK_IMPORTED_MODULE_0__.ConfigurationNode(null, []);
        this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_4__.NestedTreeControl(node => node.childs);
        this.dataSource = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_5__.MatTreeNestedDataSource();
        this.selectedNode = undefined;
        this.selectedUnitTypeValue = undefined;
        this.hasChild = (_, node) => !!node.childs && node.childs.length > 0;
        this.site = JSON.parse(JSON.stringify(this.siteService.siteSetting));
        this.unitTypes.push({
            displayName: "Seamos",
            value: "SeamosUnit"
        });
        this.createTreeNodes();
    }
    onAddUnitButtonClick() {
        if (this.selectedUnitTypeValue != null) {
            this.httpService.createEmptyUnit(this.selectedUnitTypeValue).subscribe({
                next: (response) => {
                    this.site.units = this.site.units.concat([response.settingUnit]);
                    this.createTreeNodes();
                    this.selectedNode = this.rootNode;
                },
                error: (err) => {
                    this.errorMessage = err.message;
                },
            });
        }
    }
    onRemoveSelectedNodeButtonClick() {
        if (this.selectedNode != null) {
            let index = this.site.units.indexOf(this.selectedNode.item);
            this.site.units.splice(index, 1);
            this.createTreeNodes();
            this.selectedNode = this.rootNode;
        }
    }
    findParent(node, searchNode) {
        if (node.childs.indexOf(searchNode) != -1)
            return node;
        else {
            let result = undefined;
            node.childs.forEach((child) => {
                let findedParent = this.findParent(child, searchNode);
                if (findedParent != null) {
                    result = findedParent;
                }
            });
            return result;
        }
    }
    selectNode(node) {
        this.deselectChild(this.rootNode);
        node.selected = true;
        this.selectedNode = node;
    }
    deselectChild(node) {
        node.selected = false;
        node.childs.forEach((n) => {
            n.selected = false;
            this.deselectChild(n);
        });
    }
    createTreeNodes() {
        let childs = [];
        this.site.units.forEach((settingUnit) => {
            let node = new _configuration_node__WEBPACK_IMPORTED_MODULE_0__.ConfigurationNode(settingUnit, this.createUnitChild(settingUnit));
            childs.push(node);
        });
        this.site.capabilities.forEach((settingCapability) => {
            let props = Object.getOwnPropertyNames(settingCapability);
            if (props.length > 5) {
                let node = new _configuration_node__WEBPACK_IMPORTED_MODULE_0__.ConfigurationNode(settingCapability, []);
                childs.push(node);
            }
        });
        this.rootNode = new _configuration_node__WEBPACK_IMPORTED_MODULE_0__.ConfigurationNode(this.site, childs);
        this.rootNode.selected = true;
        this.dataSource.data = [this.rootNode];
    }
    createUnitChild(settingUnit) {
        let childs = [];
        settingUnit.capabilities.forEach((settingCapability) => {
            let props = Object.getOwnPropertyNames(settingCapability);
            if (props.length > 5) {
                let node = new _configuration_node__WEBPACK_IMPORTED_MODULE_0__.ConfigurationNode(settingCapability, []);
                childs.push(node);
            }
        });
        settingUnit.materials.forEach((settingMaterial) => {
            let node = new _configuration_node__WEBPACK_IMPORTED_MODULE_0__.ConfigurationNode(settingMaterial, this.createMaterialChild(settingMaterial));
            childs.push(node);
        });
        return childs;
    }
    createMaterialChild(settingMaterial) {
        let childs = [];
        settingMaterial.capabilities.forEach((settingCapability) => {
            let props = Object.getOwnPropertyNames(settingCapability);
            if (props.length > 5) {
                let node = new _configuration_node__WEBPACK_IMPORTED_MODULE_0__.ConfigurationNode(settingCapability, []);
                childs.push(node);
            }
        });
        settingMaterial.materials.forEach((settingMaterialChild) => {
            let node = new _configuration_node__WEBPACK_IMPORTED_MODULE_0__.ConfigurationNode(settingMaterialChild, this.createMaterialChild(settingMaterialChild));
            childs.push(node);
        });
        return childs;
    }
    ngOnInit() {
    }
    onCancelButtonClick() {
        this.router.navigate(['/home']);
    }
    onApplyButtonClick() {
        this.httpService.setSetting(this.site).subscribe({
            next: (response) => {
                this.router.navigate(['/home']);
            },
            error: (err) => {
                this.errorMessage = err.message;
            },
        });
    }
}
ConfigurationComponent.ɵfac = function ConfigurationComponent_Factory(t) { return new (t || ConfigurationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_site_service__WEBPACK_IMPORTED_MODULE_1__.SiteService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService)); };
ConfigurationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ConfigurationComponent, selectors: [["app-configuration"]], decls: 24, vars: 5, consts: [[1, "card-configuration"], [1, "icon-title"], [1, "display-flex", "flex-1"], [1, "configuration-tree-container"], [1, "configuration-tree", 3, "dataSource", "treeControl"], ["matTreeNodeToggle", "", 4, "matTreeNodeDef"], [4, "matTreeNodeDef", "matTreeNodeDefWhen"], ["vertical", "true"], [1, "flex-1", "display-flex"], ["class", "display-flex flex-1 mat-elevation-z0", 4, "ngIf"], [4, "ngIf"], [1, "display-flex"], ["mat-button", "", 1, "full-width", 3, "click"], ["matTreeNodeToggle", ""], ["mat-button", "", 3, "click"], [1, "mat-tree-node"], ["mat-icon-button", "", "matTreeNodeToggle", ""], [1, "mat-icon-rtl-mirror"], ["role", "group"], ["matTreeNodeOutlet", ""], [1, "display-flex", "flex-1", "mat-elevation-z0"], [1, "full-size", "flex-1", "display-flex"], ["class", "full-size display-flex", 4, "ngIf"], ["class", "full-size display-flex flex-dir-col", 4, "ngIf"], [1, "full-size", "display-flex"], [1, "flex-1", "display-flex", "flex-dir-col"], ["appearance", "fill", 1, "full-width"], ["name", "displayName", "matInput", "", 3, "ngModel", "ngModelChange"], [1, "flex-1"], [1, "flex-dir-row", "display-flex", "flex-align-center"], [1, "margin-4"], [1, "flex-1", "margin-4", 3, "value", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-button", "", 1, "flex-1", "margin-4", 3, "disabled", "click"], [3, "value"], [1, "full-size", "display-flex", "flex-dir-col"], ["name", "hardwareIP", "matInput", "", 3, "ngModel", "ngModelChange"], ["name", "hardwarePort", "matInput", "", 3, "ngModel", "ngModelChange"], ["name", "streamUrl", "matInput", "", 3, "ngModel", "ngModelChange"], ["name", "maxPanSpeed", "matInput", "", 3, "ngModel", "ngModelChange"], ["name", "maxTiltSpeed", "matInput", "", 3, "ngModel", "ngModelChange"]], template: function ConfigurationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-card", 0)(1, "mat-card-header")(2, "mat-card-title")(3, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "face");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Configuration");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Configure Seasense");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-card-content")(9, "form", 2)(10, "div", 3)(11, "mat-tree", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, ConfigurationComponent_mat_tree_node_12_Template, 4, 3, "mat-tree-node", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, ConfigurationComponent_mat_nested_tree_node_13_Template, 10, 7, "mat-nested-tree-node", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "mat-divider", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, ConfigurationComponent_mat_card_16_Template, 13, 9, "mat-card", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, ConfigurationComponent_mat_error_17_Template, 2, 1, "mat-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "mat-card-actions")(19, "div", 11)(20, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ConfigurationComponent_Template_button_click_20_listener() { return ctx.onCancelButtonClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ConfigurationComponent_Template_button_click_22_listener() { return ctx.onApplyButtonClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Apply");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTreeNodeDefWhen", ctx.hasChild);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.selectedNode != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.errorMessage != "");
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardTitle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgForm, _angular_material_tree__WEBPACK_IMPORTED_MODULE_5__.MatTree, _angular_material_tree__WEBPACK_IMPORTED_MODULE_5__.MatTreeNodeDef, _angular_material_tree__WEBPACK_IMPORTED_MODULE_5__.MatTreeNode, _angular_material_tree__WEBPACK_IMPORTED_MODULE_5__.MatTreeNodeToggle, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_tree__WEBPACK_IMPORTED_MODULE_5__.MatNestedTreeNode, _angular_material_tree__WEBPACK_IMPORTED_MODULE_5__.MatTreeNodeOutlet, _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__.MatDivider, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MatOption, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatError, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardActions], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex: 1;\n}\n\n.card-configuration[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 100px;\n  margin-bottom: auto;\n  width: 800px;\n  height: 600px;\n}\n\n.configuration-tree-container[_ngcontent-%COMP%] {\n  height: 400px;\n  width: 400px;\n  overflow-x: hidden;\n  overflow-y: visible;\n}\n\n.icon-title[_ngcontent-%COMP%] {\n  font-size: 32px;\n  width: 32px;\n  height: 32px;\n  margin: 8px;\n}\n\n.configuration-tree-invisible[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.configuration-tree[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .configuration-tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 0;\n  list-style-type: none;\n}\n\n\n\n.configuration-tree[_ngcontent-%COMP%]   .mat-nested-tree-node[_ngcontent-%COMP%]   div[role=group][_ngcontent-%COMP%] {\n  padding-left: 32px;\n}\n\n\n\n.configuration-tree[_ngcontent-%COMP%]   div[role=group][_ngcontent-%COMP%]    > .mat-tree-node[_ngcontent-%COMP%] {\n  padding-left: 32px;\n}\n\n.node-bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.node-normal[_ngcontent-%COMP%] {\n  font-weight: normal;\n}\n\n.full-size[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZ3VyYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsT0FBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBRUY7O0FBQUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBR0Y7O0FBREE7RUFDRSxhQUFBO0FBSUY7O0FBREE7O0VBRUUsYUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFJRjs7QUFEQTs7RUFBQTs7QUFHQTtFQUNFLGtCQUFBO0FBSUY7O0FBREE7Ozs7RUFBQTs7QUFLQTtFQUNFLGtCQUFBO0FBSUY7O0FBRkE7RUFDSSxpQkFBQTtBQUtKOztBQUhBO0VBQ0ksbUJBQUE7QUFNSjs7QUFIQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUFNRiIsImZpbGUiOiJjb25maWd1cmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLmNhcmQtY29uZmlndXJhdGlvbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbiAgd2lkdGg6IDgwMHB4O1xyXG4gIGhlaWdodDo2MDBweDtcclxufVxyXG4uY29uZmlndXJhdGlvbi10cmVlLWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICB3aWR0aDo0MDBweDtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgb3ZlcmZsb3cteTp2aXNpYmxlO1xyXG59XHJcbi5pY29uLXRpdGxlIHtcclxuICBmb250LXNpemU6IDMycHg7XHJcbiAgd2lkdGg6IDMycHg7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG4gIG1hcmdpbjogOHB4O1xyXG59XHJcbi5jb25maWd1cmF0aW9uLXRyZWUtaW52aXNpYmxlIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uY29uZmlndXJhdGlvbi10cmVlIHVsLFxyXG4uY29uZmlndXJhdGlvbi10cmVlIGxpIHtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59XHJcblxyXG4vKlxyXG4gKiBUaGlzIHBhZGRpbmcgc2V0cyBhbGlnbm1lbnQgb2YgdGhlIG5lc3RlZCBub2Rlcy5cclxuICovXHJcbi5jb25maWd1cmF0aW9uLXRyZWUgLm1hdC1uZXN0ZWQtdHJlZS1ub2RlIGRpdltyb2xlPWdyb3VwXSB7XHJcbiAgcGFkZGluZy1sZWZ0OiAzMnB4O1xyXG59XHJcblxyXG4vKlxyXG4gKiBQYWRkaW5nIGZvciBsZWFmIG5vZGVzLlxyXG4gKiBMZWFmIG5vZGVzIG5lZWQgdG8gaGF2ZSBwYWRkaW5nIHNvIGFzIHRvIGFsaWduIHdpdGggb3RoZXIgbm9uLWxlYWYgbm9kZXNcclxuICogdW5kZXIgdGhlIHNhbWUgcGFyZW50LlxyXG4gKi9cclxuLmNvbmZpZ3VyYXRpb24tdHJlZSBkaXZbcm9sZT1ncm91cF0gPiAubWF0LXRyZWUtbm9kZSB7XHJcbiAgcGFkZGluZy1sZWZ0OiAzMnB4O1xyXG59XHJcbi5ub2RlLWJvbGR7XHJcbiAgICBmb250LXdlaWdodDpib2xkO1xyXG59XHJcbi5ub2RlLW5vcm1hbHtcclxuICAgIGZvbnQtd2VpZ2h0Om5vcm1hbDtcclxufVxyXG5cclxuLmZ1bGwtc2l6ZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuIl19 */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/http.service */ 6858);
/* harmony import */ var _services_site_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/site.service */ 6633);
/* harmony import */ var _components_hud_stream_hud_stream_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/hud-stream/hud-stream.component */ 6444);
/* harmony import */ var _components_hud_ui_hud_ui_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/hud-ui/hud-ui.component */ 8677);
/* harmony import */ var _components_hud_tilt_ruller_hud_tilt_ruller_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/hud-tilt-ruller/hud-tilt-ruller.component */ 8324);
/* harmony import */ var _components_hud_pan_ruller_hud_pan_ruller_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/hud-pan-ruller/hud-pan-ruller.component */ 210);
/* harmony import */ var _components_hud_status_hud_status_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/hud-status/hud-status.component */ 973);








class HomeComponent {
    constructor(httpService, siteService) {
        this.httpService = httpService;
        this.siteService = siteService;
    }
    ngOnInit() {
        this.httpService.getSetting().subscribe({
            next: (response) => {
                this.siteService.createSite(response);
            },
            error: (err) => {
            },
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_http_service__WEBPACK_IMPORTED_MODULE_0__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_site_service__WEBPACK_IMPORTED_MODULE_1__.SiteService)); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 5, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-hud-stream")(1, "app-hud-ui")(2, "app-hud-tilt-ruller")(3, "app-hud-pan-ruller")(4, "app-hud-status");
    } }, directives: [_components_hud_stream_hud_stream_component__WEBPACK_IMPORTED_MODULE_2__.HudStreamComponent, _components_hud_ui_hud_ui_component__WEBPACK_IMPORTED_MODULE_3__.HudUiComponent, _components_hud_tilt_ruller_hud_tilt_ruller_component__WEBPACK_IMPORTED_MODULE_4__.HudTiltRullerComponent, _components_hud_pan_ruller_hud_pan_ruller_component__WEBPACK_IMPORTED_MODULE_5__.HudPanRullerComponent, _components_hud_status_hud_status_component__WEBPACK_IMPORTED_MODULE_6__.HudStatusComponent], styles: ["[_nghost-%COMP%] {\n  flex: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxPQUFBO0FBQ0oiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xyXG4gICAgZmxleDoxO1xyXG59XHJcbiJdfQ== */"] });


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
/* harmony import */ var C_Dev_Seasense_Exavision_Seasense_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var js_sha512__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-sha512 */ 2414);
/* harmony import */ var js_sha512__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_sha512__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/http.service */ 6858);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ 3071);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_ws_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/ws.service */ 4885);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 7317);















function LoginComponent_mat_error_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.errorMessage);
  }
}

class LoginComponent {
  constructor(httpService, userService, router, wsService) {
    this.httpService = httpService;
    this.userService = userService;
    this.router = router;
    this.wsService = wsService;
    this.login = "sav";
    this.password = "sav";
    this.loginRunning = false;
    this.errorMessage = "";
  }

  ngOnInit() {}

  onConnectButtonClick() {
    var _this = this;

    return (0,C_Dev_Seasense_Exavision_Seasense_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.loginRunning = true;

      _this.userService.clearToken();

      _this.userService.clearUser();

      _this.errorMessage = "";
      let hash = (0,js_sha512__WEBPACK_IMPORTED_MODULE_1__.sha512)(_this.password);

      _this.httpService.login(_this.login, hash).subscribe({
        next: response => {
          _this.userService.setToken(response.token);

          _this.userService.setUser(response.user);

          _this.loginRunning = false;

          _this.wsService.start();

          _this.router.navigate(['/home']);
        },
        error: err => {
          _this.errorMessage = err.message;
          _this.loginRunning = false;
        }
      });
    })();
  }

}

LoginComponent.ɵfac = function LoginComponent_Factory(t) {
  return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_ws_service__WEBPACK_IMPORTED_MODULE_4__.WsService));
};

LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: LoginComponent,
  selectors: [["app-login"]],
  decls: 22,
  vars: 6,
  consts: [[1, "card-login"], [1, "icon-title"], [1, "full-width"], ["name", "login", "matInput", "", 3, "disabled", "ngModel", "ngModelChange"], ["name", "password", "type", "password", "matInput", "", 3, "disabled", "ngModel", "ngModelChange"], [4, "ngIf"], ["mat-button", "", 1, "full-width", 3, "disabled", "click"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-card", 0)(1, "mat-card-header")(2, "mat-card-title")(3, "mat-icon", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "face");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Authentification");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-card-subtitle");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Please identify yourself");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-card-content")(9, "form")(10, "mat-form-field", 2)(11, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Login");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "input", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_13_listener($event) {
        return ctx.login = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "mat-form-field", 2)(15, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_17_listener($event) {
        return ctx.password = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, LoginComponent_mat_error_18_Template, 2, 1, "mat-error", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "mat-card-actions")(20, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_20_listener() {
        return ctx.onConnectButtonClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Connect");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.loginRunning)("ngModel", ctx.login);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.loginRunning)("ngModel", ctx.password);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.errorMessage != "");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.loginRunning);
    }
  },
  directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardTitle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgForm, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatError, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton],
  styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex: 1;\n}\n\n.card-login[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 100px;\n  margin-bottom: auto;\n  width: 400px;\n}\n\n.icon-title[_ngcontent-%COMP%] {\n  font-size: 32px;\n  width: 32px;\n  height: 32px;\n  margin: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLE9BQUE7QUFDSjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUNBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUVGIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3R7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBmbGV4OjE7XHJcbiAgICBcclxufVxyXG4uY2FyZC1sb2dpbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi10b3A6MTAwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTphdXRvO1xyXG4gIHdpZHRoOiA0MDBweDtcclxufVxyXG4uaWNvbi10aXRsZSB7XHJcbiAgZm9udC1zaXplOjMycHg7XHJcbiAgd2lkdGg6IDMycHg7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG4gIG1hcmdpbjo4cHg7XHJcbn1cclxuIl19 */"]
});

/***/ }),

/***/ 6858:
/*!******************************************!*\
  !*** ./src/app/services/http.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpService": () => (/* binding */ HttpService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class HttpService {
    constructor(http) {
        this.http = http;
        this.baseApiUrl = "";
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    }
    getApiUrl(path) {
        if (this.baseApiUrl == "") {
            let url = "";
            if (location.protocol !== 'https:') {
                url += "http://";
            }
            else {
                url += "https://";
            }
            url += window.location.hostname;
            url += ":";
            url += window.location.port;
            url += "/api/";
            this.baseApiUrl = url;
        }
        return this.baseApiUrl + path;
    }
    login(login, hash) {
        let url = this.getApiUrl("login");
        let req = {
            login: login,
            passwordHash: hash
        };
        return this.http.post(url, req, { headers: this.headers });
    }
    logout() {
        let url = this.getApiUrl("logout");
        let req = {};
        return this.http.post(url, req, { headers: this.headers });
    }
    validateToken() {
        let url = this.getApiUrl("token/validate");
        let req = {};
        return this.http.post(url, req, { headers: this.headers });
    }
    getSetting() {
        let url = this.getApiUrl("setting/get");
        let req = {};
        return this.http.post(url, req, { headers: this.headers });
    }
    setSetting(settingSite) {
        let url = this.getApiUrl("setting/set");
        let req = {
            site: settingSite
        };
        return this.http.post(url, req, { headers: this.headers });
    }
    createEmptyUnit(unitType) {
        let url = this.getApiUrl("unit/create/empty");
        let req = {
            unitType: unitType
        };
        return this.http.post(url, req, { headers: this.headers });
    }
}
HttpService.ɵfac = function HttpService_Factory(t) { return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient)); };
HttpService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: HttpService, factory: HttpService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6633:
/*!******************************************!*\
  !*** ./src/app/services/site.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SiteService": () => (/* binding */ SiteService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var _materials_site__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../materials/site */ 4753);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ws_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ws.service */ 4885);




class SiteService {
    constructor(wsService) {
        this.wsService = wsService;
        this.siteLoadedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        this.unitSelectedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        this.site = undefined;
        this.selectedUnit = undefined;
        this.siteSetting = {
            id: 'none',
            capabilities: [],
            units: [],
            type: 'Site',
            displayName: 'Site'
        };
    }
    createSite(response) {
        this.site = undefined;
        if (response.site != null) {
            this.siteSetting = response.site;
            this.site = new _materials_site__WEBPACK_IMPORTED_MODULE_0__.Site(response.site, this.wsService);
        }
        if (this.site != null && this.site.units.length > 0) {
            this.selectUnitById(this.site.units[0].id);
        }
        this.siteLoadedSubject.next(this.site);
    }
    selectUnitById(unitId) {
        var _a;
        let unit = (_a = this.site) === null || _a === void 0 ? void 0 : _a.units.find((value) => {
            return value.id == unitId;
        });
        this.selectedUnit = unit;
        this.unitSelectedSubject.next(unit);
    }
}
SiteService.ɵfac = function SiteService_Factory(t) { return new (t || SiteService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ws_service__WEBPACK_IMPORTED_MODULE_1__.WsService)); };
SiteService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: SiteService, factory: SiteService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3071:
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class UserService {
    constructor() {
        this.user = null;
        this.token = null;
        this.localStorage = window.localStorage;
    }
    clearUser() {
        this.user = null;
    }
    clearToken() {
        this.token = null;
    }
    setUser(user) {
        this.user = user;
    }
    setToken(token) {
        this.token = token;
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(); };
UserService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4885:
/*!****************************************!*\
  !*** ./src/app/services/ws.service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WsService": () => (/* binding */ WsService)
/* harmony export */ });
/* harmony import */ var C_Dev_Seasense_Exavision_Seasense_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ 2535);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.service */ 3071);




class WsService {
  constructor(userService) {
    this.userService = userService;
    this.stateInterval = 100;
    this.socket = null;
  }

  tryGetState() {
    try {
      this.getStates();
    } catch (_a) {}
  }

  start() {
    var _this = this;

    if (this.socket != null) {
      this.socket.close();
      this.socket = null;
    }

    let scheme = document.location.protocol === "https:" ? "wss" : "ws";
    let port = document.location.port ? ":" + document.location.port : "";
    let connectionUrl = scheme + "://" + document.location.hostname + port + "/ws";
    this.socket = new WebSocket(connectionUrl);

    this.socket.onopen = event => {
      this.wsOpen(event);
    };

    this.socket.onclose = /*#__PURE__*/function () {
      var _ref = (0,C_Dev_Seasense_Exavision_Seasense_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (event) {
        _this.wsClose(event);
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    this.socket.onmessage = event => {
      this.wsMessage(event);
    };

    this.socket.onerror = event => {
      this.wsError(event);
    };

    this.stateTimer = setInterval(() => {
      this.tryGetState();
    }, this.stateInterval);
  }

  wsError(event) {
    console.error("wsError", event);
  }

  wsMessage(event) {
    console.log("Message ", event);
  }

  wsClose(event) {
    return (0,C_Dev_Seasense_Exavision_Seasense_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("wsClose", event);
    })();
  }

  wsOpen(event) {
    console.log("wsOpen", event);
  }

  stop() {
    if (this.socket != null) {
      this.socket.close();
    }

    clearInterval(this.stateTimer);
  }

  getStates() {
    var _a;

    if (this.userService.token == null) return;
    let request = {
      $type: "WsGetStateRequest",
      requestId: uuid__WEBPACK_IMPORTED_MODULE_2__["default"](),
      token: this.userService.token
    };
    let data = JSON.stringify(request);
    (_a = this.socket) === null || _a === void 0 ? void 0 : _a.send(data);
  }

  turretMoveSpeed(unitId, materialId, axisX, axisY) {
    var _a;

    if (this.userService.token == null) return;
    let request = {
      $type: "WsTurretMoveSpeedRequest",
      requestId: uuid__WEBPACK_IMPORTED_MODULE_2__["default"](),
      unitId: unitId,
      materialId: materialId,
      axisX: axisX,
      axisY: axisX,
      token: this.userService.token
    };
    let data = JSON.stringify(request);
    (_a = this.socket) === null || _a === void 0 ? void 0 : _a.send(data);
  }

}

WsService.ɵfac = function WsService_Factory(t) {
  return new (t || WsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService));
};

WsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: WsService,
  factory: WsService.ɵfac,
  providedIn: 'root'
});

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
    production: false,
    apiServer: '/'
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