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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home/home.component */ 5245);
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/login/login.component */ 4902);
/* harmony import */ var _pages_configuration_configuration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/configuration/configuration.component */ 6034);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/header/header.component */ 3646);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/http.service */ 6858);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/user.service */ 3071);
/* harmony import */ var _interceptor_jwt_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./interceptor/jwt-interceptor */ 8690);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/select */ 1434);
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/tree */ 4972);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/cdk/scrolling */ 5752);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/menu */ 2796);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/snack-bar */ 2528);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/list */ 6131);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/divider */ 9975);
/* harmony import */ var _components_hud_ui_hud_ui_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/hud-ui/hud-ui.component */ 8677);
/* harmony import */ var _components_hud_stream_hud_stream_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/hud-stream/hud-stream.component */ 6444);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/slider */ 1859);
/* harmony import */ var _components_hud_status_hud_status_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/hud-status/hud-status.component */ 973);
/* harmony import */ var _components_compass_compass_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/compass/compass.component */ 2549);
/* harmony import */ var _components_stick_stick_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/stick/stick.component */ 2203);
/* harmony import */ var _components_hud_button_hud_button_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/hud-button/hud-button.component */ 6999);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/core */ 8133);
/* harmony import */ var _components_hud_check_hud_check_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/hud-check/hud-check.component */ 7609);
/* harmony import */ var _components_hud_ruller_pan_hud_ruller_pan_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/hud-ruller-pan/hud-ruller-pan.component */ 4824);
/* harmony import */ var _components_hud_ruller_tilt_hud_ruller_tilt_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/hud-ruller-tilt/hud-ruller-tilt.component */ 5988);
/* harmony import */ var _components_hud_lrf_button_hud_lrf_button_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/hud-lrf-button/hud-lrf-button.component */ 2762);
/* harmony import */ var _components_panel_camera_panel_camera_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/panel-camera/panel-camera.component */ 7142);
/* harmony import */ var _services_ui_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/ui.service */ 9846);
/* harmony import */ var _components_async_slider_async_slider_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/async-slider/async-slider.component */ 7121);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/button-toggle */ 1959);
/* harmony import */ var _components_async_toggle_group_async_toggle_group_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/async-toggle-group/async-toggle-group.component */ 708);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/core */ 3184);












































/** Http interceptor providers in outside-in order */

const httpInterceptorProviders = [{
  provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_23__.HTTP_INTERCEPTORS,
  useClass: _interceptor_jwt_interceptor__WEBPACK_IMPORTED_MODULE_8__.JwtInterceptor,
  multi: true
}];
class AppModule {}

AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};

AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineInjector"]({
  providers: [_services_http_service__WEBPACK_IMPORTED_MODULE_6__.HttpService, _services_user_service__WEBPACK_IMPORTED_MODULE_7__.UserService, _services_ui_service__WEBPACK_IMPORTED_MODULE_20__.UiService, httpInterceptorProviders],
  imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_23__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.FormsModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_28__.MatButtonModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_29__.MatSliderModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_30__.MatSelectModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_31__.MatRippleModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_32__.ScrollingModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_33__.MatListModule, _angular_material_tree__WEBPACK_IMPORTED_MODULE_34__.MatTreeModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_35__.MatToolbarModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_36__.MatCardModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_37__.MatIconModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_38__.MatDividerModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_39__.MatSnackBarModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_40__.MatMenuModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_41__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_42__.MatInputModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_43__.MatButtonToggleModule]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent, _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent, _pages_configuration_configuration_component__WEBPACK_IMPORTED_MODULE_4__.ConfigurationComponent, _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__.HeaderComponent, _components_hud_ui_hud_ui_component__WEBPACK_IMPORTED_MODULE_9__.HudUiComponent, _components_hud_stream_hud_stream_component__WEBPACK_IMPORTED_MODULE_10__.HudStreamComponent, _components_hud_status_hud_status_component__WEBPACK_IMPORTED_MODULE_11__.HudStatusComponent, _components_compass_compass_component__WEBPACK_IMPORTED_MODULE_12__.CompassComponent, _components_stick_stick_component__WEBPACK_IMPORTED_MODULE_13__.StickComponent, _components_hud_button_hud_button_component__WEBPACK_IMPORTED_MODULE_14__.HudButtonComponent, _components_hud_check_hud_check_component__WEBPACK_IMPORTED_MODULE_15__.HudCheckComponent, _components_hud_ruller_pan_hud_ruller_pan_component__WEBPACK_IMPORTED_MODULE_16__.HudRullerPanComponent, _components_hud_ruller_tilt_hud_ruller_tilt_component__WEBPACK_IMPORTED_MODULE_17__.HudRullerTiltComponent, _components_hud_lrf_button_hud_lrf_button_component__WEBPACK_IMPORTED_MODULE_18__.HudLrfButtonComponent, _components_panel_camera_panel_camera_component__WEBPACK_IMPORTED_MODULE_19__.PanelCameraComponent, _components_async_slider_async_slider_component__WEBPACK_IMPORTED_MODULE_21__.AsyncSliderComponent, _components_async_toggle_group_async_toggle_group_component__WEBPACK_IMPORTED_MODULE_22__.AsyncToggleGroupComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_23__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.FormsModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_28__.MatButtonModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_29__.MatSliderModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_30__.MatSelectModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_31__.MatRippleModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_32__.ScrollingModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_33__.MatListModule, _angular_material_tree__WEBPACK_IMPORTED_MODULE_34__.MatTreeModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_35__.MatToolbarModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_36__.MatCardModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_37__.MatIconModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_38__.MatDividerModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_39__.MatSnackBarModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_40__.MatMenuModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_41__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_42__.MatInputModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_43__.MatButtonToggleModule]
  });
})();

/***/ }),

/***/ 7121:
/*!*******************************************************************!*\
  !*** ./src/app/components/async-slider/async-slider.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsyncSliderComponent": () => (/* binding */ AsyncSliderComponent)
/* harmony export */ });
/* harmony import */ var _materials_capabilities_double_value_capability__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../materials/capabilities/double-value-capability */ 7412);
/* harmony import */ var _materials_capabilities_double_value_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../materials/capabilities/double-value-type */ 3990);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/slider */ 1859);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);






class AsyncSliderComponent {
  constructor() {
    this.displayName = "";
    this.capability = new _materials_capabilities_double_value_capability__WEBPACK_IMPORTED_MODULE_0__.DoubleValueCapability({
      capabilityType: "DoubleValue"
      /* DoubleValue */
      ,
      displayName: "",
      doubleValueType: _materials_capabilities_double_value_type__WEBPACK_IMPORTED_MODULE_1__.DoubleValueType.BlackLevel,
      id: '',
      maxValue: 0,
      minValue: 0,
      type: ""
    });
  }

  ngOnInit() {}

}

AsyncSliderComponent.ɵfac = function AsyncSliderComponent_Factory(t) {
  return new (t || AsyncSliderComponent)();
};

AsyncSliderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AsyncSliderComponent,
  selectors: [["app-async-slider"]],
  inputs: {
    capability: "capability",
    displayName: "displayName"
  },
  decls: 6,
  vars: 8,
  consts: [[1, "slider-label"], [1, "container"], [1, "sliders-container"], [1, "slider-value", 3, "min", "max", "ngModel", "disabled", "ngModelChange"], ["matInput", "", 1, "slider-edit", 3, "min", "max", "ngModel", "ngModelChange"]],
  template: function AsyncSliderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-label", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1)(3, "div", 2)(4, "mat-slider", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AsyncSliderComponent_Template_mat_slider_ngModelChange_4_listener($event) {
        return ctx.capability.value = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-slider", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AsyncSliderComponent_Template_mat_slider_ngModelChange_5_listener($event) {
        return ctx.capability.editValue = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.displayName);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("min", ctx.capability.minValue)("max", ctx.capability.maxValue)("ngModel", ctx.capability.value)("disabled", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("min", ctx.capability.minValue)("max", ctx.capability.maxValue)("ngModel", ctx.capability.editValue);
    }
  },
  directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatLabel, _angular_material_slider__WEBPACK_IMPORTED_MODULE_4__.MatSlider, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel],
  styles: ["[_nghost-%COMP%] {\n  position: relative;\n  margin-top: 4px;\n  margin-bottom: 4px;\n}\n\n.sliders-container[_ngcontent-%COMP%] {\n  position: relative;\n  height: 48px;\n}\n\n.slider-value[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0px;\n  right: 0px;\n}\n\n.slider-edit[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0px;\n  right: 0px;\n}\n\n.slider-label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -4px;\n  left: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzeW5jLXNsaWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBQ0E7RUFFSSxrQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFFRjs7QUFBQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFHRjs7QUFEQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7QUFJRiIsImZpbGUiOiJhc3luYy1zbGlkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLXRvcDo0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOjRweDtcclxufVxyXG4uc2xpZGVycy1jb250YWluZXJcclxue1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6NDhweDtcclxufVxyXG4uc2xpZGVyLXZhbHVlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDowcHg7XHJcbiAgcmlnaHQ6MHB4O1xyXG59XHJcbi5zbGlkZXItZWRpdCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDBweDtcclxuICByaWdodDogMHB4O1xyXG59XHJcbi5zbGlkZXItbGFiZWwge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6LTRweDtcclxuICBsZWZ0OjBweDtcclxufVxyXG4iXX0= */"]
});

/***/ }),

/***/ 708:
/*!*******************************************************************************!*\
  !*** ./src/app/components/async-toggle-group/async-toggle-group.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsyncToggleGroupComponent": () => (/* binding */ AsyncToggleGroupComponent)
/* harmony export */ });
/* harmony import */ var _materials_capabilities_switch_value_capability__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../materials/capabilities/switch-value-capability */ 8035);
/* harmony import */ var _materials_capabilities_switch_value_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../materials/capabilities/switch-value-type */ 2063);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button-toggle */ 1959);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);








function AsyncToggleGroupComponent_mat_button_toggle_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-button-toggle", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", item_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.displayName);
  }
}

class AsyncToggleGroupComponent {
  constructor() {
    this.currentValue = "";
    this.displayName = "";
    this.capability = new _materials_capabilities_switch_value_capability__WEBPACK_IMPORTED_MODULE_0__.SwitchValueCapability({
      capabilityType: "SwitchValue"
      /* SwitchValue */
      ,
      displayName: "",
      id: "",
      switchValueType: _materials_capabilities_switch_value_type__WEBPACK_IMPORTED_MODULE_1__.SwitchValueType.ExposureTimeMode,
      type: "",
      values: []
    });
  }

  onToggleChnage(evt) {
    let finded = this.capability.values.find(val => {
      return val.value === evt.value;
    });

    if (finded != null) {
      this.capability.editValue = finded;
    }
  }

  ngOnInit() {
    this.currentValue = this.capability.value.value;
  }

}

AsyncToggleGroupComponent.ɵfac = function AsyncToggleGroupComponent_Factory(t) {
  return new (t || AsyncToggleGroupComponent)();
};

AsyncToggleGroupComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AsyncToggleGroupComponent,
  selectors: [["app-async-toggle-group"]],
  inputs: {
    capability: "capability",
    displayName: "displayName"
  },
  decls: 6,
  vars: 4,
  consts: [[1, "container"], [1, "toggle-group-container"], ["aria-label", "Font Style", 3, "ngModel", "name", "ngModelChange", "change"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
  template: function AsyncToggleGroupComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 0)(3, "div", 1)(4, "mat-button-toggle-group", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AsyncToggleGroupComponent_Template_mat_button_toggle_group_ngModelChange_4_listener($event) {
        return ctx.currentValue = $event;
      })("change", function AsyncToggleGroupComponent_Template_mat_button_toggle_group_change_4_listener($event) {
        return ctx.onToggleChnage($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, AsyncToggleGroupComponent_mat_button_toggle_5_Template, 2, 2, "mat-button-toggle", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.displayName);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.currentValue)("name", ctx.capability.id);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.capability.values);
    }
  },
  directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatLabel, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__.MatButtonToggleGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__.MatButtonToggle],
  styles: ["[_nghost-%COMP%] {\n  margin-bottom: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzeW5jLXRvZ2dsZS1ncm91cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FBQ0oiLCJmaWxlIjoiYXN5bmMtdG9nZ2xlLWdyb3VwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3R7XHJcbiAgICBtYXJnaW4tYm90dG9tOjE2cHg7XHJcbn1cclxuIl19 */"]
});

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_site_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/site.service */ 6633);


const _c0 = ["svgTurret"];
const _c1 = ["svgDirection"];
class CompassComponent {
    constructor(renderer, siteService) {
        this.renderer = renderer;
        this.siteService = siteService;
        this.svgTurret = null;
        this.svgDirection = null;
        this.siteStateSubscription = this.siteService.siteStateSubject.subscribe(() => { this.updateUi(); });
    }
    updateUi() {
        if (this.siteService.selectedUnit != null) {
            let cap = this.siteService.selectedUnit.getMaterialCapability("Turret" /* Turret */, "TurretAbsolutePosition" /* TurretAbsolutePosition */);
            if (cap != null) {
                let rotateInfoTurret = "rotate(" + cap.pan.toFixed(0) + "deg)";
                if (this.svgTurret != null) {
                    this.renderer.setStyle(this.svgTurret.nativeElement, 'transform', rotateInfoTurret);
                }
            }
        }
    }
    ngOnDestroy() {
        this.siteStateSubscription.unsubscribe();
    }
    ngOnInit() {
        this.updateUi();
    }
}
CompassComponent.ɵfac = function CompassComponent_Factory(t) { return new (t || CompassComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_site_service__WEBPACK_IMPORTED_MODULE_0__.SiteService)); };
CompassComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CompassComponent, selectors: [["app-compass"]], viewQuery: function CompassComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.svgTurret = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.svgDirection = _t.first);
    } }, decls: 9, vars: 0, consts: [[1, "container"], [1, "svg-center"], ["alt", "compass background", "src", "assets/compass-next-fond.svg"], ["alt", "compass turret", "src", "assets/compass-next-turret.svg"], ["svgTurret", ""], ["alt", "compase rose", "src", "assets/compass-next-rose.svg"], ["svgDirection", ""]], template: function CompassComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/user.service */ 3071);
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/http.service */ 6858);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_site_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/site.service */ 6633);
/* harmony import */ var _services_ws_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/ws.service */ 4885);
/* harmony import */ var _services_ui_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/ui.service */ 9846);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ 2796);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ 89);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ 1434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ 8133);
















function HeaderComponent_div_18_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const unit_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", unit_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", unit_r5.displayName, " ");
} }
function HeaderComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 12)(1, "mat-label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Unit :");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-select", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("valueChange", function HeaderComponent_div_18_Template_mat_select_valueChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r6.selectedUnitId = $event; })("selectionChange", function HeaderComponent_div_18_Template_mat_select_selectionChange_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](4); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r8.onSelectedUnitChange(_r3.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, HeaderComponent_div_18_mat_option_5_Template, 2, 2, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx_r1.selectedUnitId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.units);
} }
function HeaderComponent_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_button_19_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r9.onLogoutClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
class HeaderComponent {
    constructor(userService, httpService, router, siteService, wsService, uiService) {
        this.userService = userService;
        this.httpService = httpService;
        this.router = router;
        this.siteService = siteService;
        this.wsService = wsService;
        this.uiService = uiService;
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
    onCameraButtonClick() {
        this.uiService.showPanelCamera();
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
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_http_service__WEBPACK_IMPORTED_MODULE_1__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_site_service__WEBPACK_IMPORTED_MODULE_2__.SiteService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_ws_service__WEBPACK_IMPORTED_MODULE_3__.WsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_ui_service__WEBPACK_IMPORTED_MODULE_4__.UiService)); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 20, vars: 3, consts: [["color", "primary", 1, "display-flex"], [1, "display-flex", "flex-1", "flex-align-end"], ["mat-button", "", 3, "matMenuTriggerFor"], ["aria-hidden", "false", "aria-label", "Example home icon"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["mat-menu-item", ""], ["matTooltip", "Go to home page", 1, "title", 3, "click"], ["matTooltip", "Go to home page", 1, "sub-title", 3, "click"], [1, "flex-1"], ["class", "display-flex", 4, "ngIf"], ["mat-raised-button", "", "color", "accent", 3, "click", 4, "ngIf"], [1, "display-flex"], [1, "margin-4"], [1, "unit-select", "margin-4", 3, "value", "valueChange", "selectionChange"], ["unitSelect", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["mat-raised-button", "", "color", "accent", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-toolbar", 0)(1, "div", 1)(2, "button", 2)(3, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "view_headline");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-menu", null, 4)(7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_7_listener() { return ctx.onConfigurationButtonClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Configuration");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_9_listener() { return ctx.onCameraButtonClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Camera");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Sav");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_13_listener() { return ctx.onHomeClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Seasens");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_15_listener() { return ctx.onHomeClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "By Exavision");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, HeaderComponent_div_18_Template, 6, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, HeaderComponent_button_19_Template, 2, 0, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.userService.user != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.userService.user != null);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__.MatToolbar, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenuTrigger, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenuItem, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__.MatTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatOption], styles: [".title[_ngcontent-%COMP%] {\n  font-family: \"Expansivabold\", Arial, Verdana, Tahoma, sans-serif;\n  font-size: 32px;\n  margin: 0px;\n  padding: 0px;\n  margin-top: 8px;\n  -webkit-user-select: none;\n          user-select: none;\n  line-height: 32px;\n  margin-left: 8px;\n}\n\n.sub-title[_ngcontent-%COMP%] {\n  font-family: \"Expansivabold\", Arial, Verdana, Tahoma, sans-serif;\n  font-size: 12px !important;\n  margin: 0px;\n  padding: 0px;\n  -webkit-user-select: none;\n          user-select: none;\n  line-height: 24px;\n  height: 24px;\n  font-style: italic;\n  margin-left: 8px;\n}\n\n.unit-select[_ngcontent-%COMP%] {\n  width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdFQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnRUFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUNBO0VBQ0ksWUFBQTtBQUVKIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiRXhwYW5zaXZhYm9sZFwiLCBBcmlhbCwgVmVyZGFuYSwgVGFob21hLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxuICBtYXJnaW46IDBweDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbn1cclxuXHJcbi5zdWItdGl0bGUge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkV4cGFuc2l2YWJvbGRcIiwgQXJpYWwsIFZlcmRhbmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxuICBtYXJnaW46IDBweDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBtYXJnaW4tbGVmdDogOHB4O1xyXG59XHJcbi51bml0LXNlbGVjdHtcclxuICAgIHdpZHRoOjIwMHB4O1xyXG5cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 6999:
/*!***************************************************************!*\
  !*** ./src/app/components/hud-button/hud-button.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HudButtonComponent": () => (/* binding */ HudButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);


const _c0 = ["*"];
class HudButtonComponent {
    constructor() {
        this.buttonUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.buttonDown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.isMouseDown = false;
    }
    onMouseDown() {
        this.isMouseDown = true;
        this.buttonDown.emit(true);
    }
    onMouseUp() {
        if (this.isMouseDown === true) {
            this.isMouseDown = false;
            this.buttonUp.emit(true);
        }
    }
    ngOnInit() {
    }
    onDocumentPointerUp(evt) {
        if (this.isMouseDown === true) {
            this.isMouseDown = false;
            this.buttonUp.emit(true);
        }
    }
    onDocumentMouse(evt) {
        if (this.isMouseDown === true) {
            this.isMouseDown = false;
            this.buttonUp.emit(true);
        }
    }
}
HudButtonComponent.ɵfac = function HudButtonComponent_Factory(t) { return new (t || HudButtonComponent)(); };
HudButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HudButtonComponent, selectors: [["app-hud-button"]], hostBindings: function HudButtonComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pointerup", function HudButtonComponent_pointerup_HostBindingHandler($event) { return ctx.onDocumentPointerUp($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("mouseup", function HudButtonComponent_mouseup_HostBindingHandler($event) { return ctx.onDocumentMouse($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, outputs: { buttonUp: "buttonUp", buttonDown: "buttonDown" }, ngContentSelectors: _c0, decls: 7, vars: 0, consts: [[1, "hexagon", 3, "mousedown", "mouseup"], [1, "flex-1"], [1, "display-flex", "flex-dir-col"]], template: function HudButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function HudButtonComponent_Template_div_mousedown_0_listener() { return ctx.onMouseDown(); })("mouseup", function HudButtonComponent_Template_div_mouseup_0_listener() { return ctx.onMouseUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  -webkit-user-select: none !important;\n          user-select: none !important;\n  margin: 8px;\n  z-index: 200;\n  width: 81px;\n  height: 71px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.hexagon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  -webkit-user-select: none !important;\n          user-select: none !important;\n  background-image: url(\"/assets/hud-button-off.png\");\n  width: 81px;\n  height: 71px;\n  background-color: transparent;\n  border-width: 0px !important;\n  outline: none !important;\n  box-shadow: none !important;\n  display: flex;\n  color: white;\n  font-size: 24px;\n  font-weight: bold;\n}\n\n.hexagon[_ngcontent-%COMP%]:hover {\n  background-image: url(\"/assets/hud-button-hover.png\");\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh1ZC1idXR0b24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBQTtVQUFBLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxvQ0FBQTtVQUFBLDRCQUFBO0VBQ0EsbURBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFFQTtFQUNFLHFEQUFBO0FBQ0YiLCJmaWxlIjoiaHVkLWJ1dHRvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICB1c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjo4cHg7XHJcbiAgei1pbmRleDogMjAwO1xyXG4gIHdpZHRoOiA4MXB4O1xyXG4gIGhlaWdodDogNzFweDtcclxuICBtYXJnaW4tbGVmdDphdXRvO1xyXG4gIG1hcmdpbi1yaWdodDphdXRvO1xyXG5cclxuXHJcbn1cclxuLmhleGFnb24ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB1c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaHVkLWJ1dHRvbi1vZmYucG5nXCIpO1xyXG4gIHdpZHRoOiA4MXB4O1xyXG4gIGhlaWdodDogNzFweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItd2lkdGg6IDBweCAhaW1wb3J0YW50O1xyXG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5oZXhhZ29uOmhvdmVyIHsgIFxyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaHVkLWJ1dHRvbi1ob3Zlci5wbmdcIik7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 7609:
/*!*************************************************************!*\
  !*** ./src/app/components/hud-check/hud-check.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HudCheckComponent": () => (/* binding */ HudCheckComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);



const _c0 = ["*"];
class HudCheckComponent {
    constructor() {
        this.isChecked = false;
        this.checkChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() {
    }
    onMouseClick() {
        this.checkChange.emit(!this.isChecked);
    }
}
HudCheckComponent.ɵfac = function HudCheckComponent_Factory(t) { return new (t || HudCheckComponent)(); };
HudCheckComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HudCheckComponent, selectors: [["app-hud-check"]], inputs: { isChecked: "isChecked" }, outputs: { checkChange: "checkChange" }, ngContentSelectors: _c0, decls: 7, vars: 1, consts: [[3, "ngClass", "click"], [1, "flex-1"], [1, "display-flex", "flex-dir-col"]], template: function HudCheckComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HudCheckComponent_Template_div_click_0_listener() { return ctx.onMouseClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.isChecked ? "hexagon-checked" : "hexagon-unchecked");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass], styles: ["[_nghost-%COMP%] {\n  -webkit-user-select: none !important;\n          user-select: none !important;\n  margin: 8px;\n  z-index: 200;\n  width: 81px;\n  height: 71px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.hexagon-checked[_ngcontent-%COMP%] {\n  cursor: pointer;\n  -webkit-user-select: none !important;\n          user-select: none !important;\n  background-image: url(\"/assets/hud-check-checked-off.png\");\n  width: 81px;\n  height: 71px;\n  background-color: transparent;\n  border-width: 0px !important;\n  outline: none !important;\n  box-shadow: none !important;\n  display: flex;\n  color: white;\n  font-size: 24px;\n  font-weight: bold;\n}\n\n.hexagon-checked[_ngcontent-%COMP%]:hover {\n  background-image: url(\"/assets/hud-check-checked-hover.png\");\n}\n\n.hexagon-unchecked[_ngcontent-%COMP%] {\n  cursor: pointer;\n  -webkit-user-select: none !important;\n          user-select: none !important;\n  background-image: url(\"/assets/hud-check-unchecked-off.png\");\n  width: 81px;\n  height: 71px;\n  background-color: transparent;\n  border-width: 0px !important;\n  outline: none !important;\n  box-shadow: none !important;\n  display: flex;\n  color: white;\n  font-size: 24px;\n  font-weight: bold;\n}\n\n.hexagon-unchecked[_ngcontent-%COMP%]:hover {\n  background-image: url(\"/assets/hud-check-unchecked-hover.png\");\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh1ZC1jaGVjay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9DQUFBO1VBQUEsNEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUNBO0VBQ0UsZUFBQTtFQUNBLG9DQUFBO1VBQUEsNEJBQUE7RUFDQSwwREFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUVGOztBQUNBO0VBQ0UsNERBQUE7QUFFRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxvQ0FBQTtVQUFBLDRCQUFBO0VBQ0EsNERBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFFRjs7QUFDQTtFQUNFLDhEQUFBO0FBRUYiLCJmaWxlIjoiaHVkLWNoZWNrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIHVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiA4cHg7XHJcbiAgei1pbmRleDogMjAwO1xyXG4gIHdpZHRoOiA4MXB4O1xyXG4gIGhlaWdodDogNzFweDtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuLmhleGFnb24tY2hlY2tlZCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9odWQtY2hlY2stY2hlY2tlZC1vZmYucG5nXCIpO1xyXG4gIHdpZHRoOiA4MXB4O1xyXG4gIGhlaWdodDogNzFweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItd2lkdGg6IDBweCAhaW1wb3J0YW50O1xyXG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uaGV4YWdvbi1jaGVja2VkOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2h1ZC1jaGVjay1jaGVja2VkLWhvdmVyLnBuZ1wiKTtcclxufVxyXG5cclxuLmhleGFnb24tdW5jaGVja2VkIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmUgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2h1ZC1jaGVjay11bmNoZWNrZWQtb2ZmLnBuZ1wiKTtcclxuICB3aWR0aDogODFweDtcclxuICBoZWlnaHQ6IDcxcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXdpZHRoOiAwcHggIWltcG9ydGFudDtcclxuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmhleGFnb24tdW5jaGVja2VkOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2h1ZC1jaGVjay11bmNoZWNrZWQtaG92ZXIucG5nXCIpO1xyXG59XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ 2762:
/*!***********************************************************************!*\
  !*** ./src/app/components/hud-lrf-button/hud-lrf-button.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HudLrfButtonComponent": () => (/* binding */ HudLrfButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_site_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/site.service */ 6633);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);




const _c0 = ["*"];
class HudLrfButtonComponent {
    constructor(siteService) {
        this.siteService = siteService;
        this.isMouseDown = false;
        this.isContinuousMode = false;
        this.ignoreNextClick = false;
        this.shoot = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    lazerMeasurementShoot() {
        if (this.siteService.selectedUnit == null)
            return;
        let lazer = this.siteService.selectedUnit.getMaterial("LazerMeasurement" /* LazerMeasurement */);
        if (lazer == null)
            return;
        let cap = lazer.getCapability("LazerMeasurementShootCapability" /* LazerMeasurementShootCapability */);
        if (cap == null)
            return;
        cap.shootMeasure();
    }
    ngOnDestroy() {
        clearInterval(this.continuousShootTimer);
    }
    ngOnInit() {
        this.continuousShootTimer = setInterval(() => {
            if (this.isContinuousMode === true) {
                this.lazerMeasurementShoot();
            }
        }, 500);
    }
    onMouseDown() {
        this.isMouseDown = true;
        this.continuousTriggerTimer = setTimeout(() => {
            this.isContinuousMode = true;
            this.ignoreNextClick = true;
        }, 1000);
    }
    onMouseUp() {
        if (this.isMouseDown && this.isContinuousMode) {
            this.ignoreNextClick = true;
            this.isMouseDown = false;
        }
        else {
            this.isMouseDown = false;
            clearTimeout(this.continuousTriggerTimer);
        }
    }
    onMouseClick() {
        if (this.ignoreNextClick === true) {
            this.ignoreNextClick = false;
        }
        else {
            this.lazerMeasurementShoot();
            this.isContinuousMode = false;
        }
    }
    onDocumentPointerUp(evt) {
        if (this.isMouseDown === true && !this.ignoreNextClick === true) {
            this.isMouseDown = false;
            clearTimeout(this.continuousTriggerTimer);
        }
    }
    onDocumentMouse(evt) {
        if (this.isMouseDown === true && !this.ignoreNextClick === true) {
            this.isMouseDown = false;
            clearTimeout(this.continuousTriggerTimer);
        }
    }
}
HudLrfButtonComponent.ɵfac = function HudLrfButtonComponent_Factory(t) { return new (t || HudLrfButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_site_service__WEBPACK_IMPORTED_MODULE_0__.SiteService)); };
HudLrfButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HudLrfButtonComponent, selectors: [["app-hud-lrf-button"]], hostBindings: function HudLrfButtonComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pointerup", function HudLrfButtonComponent_pointerup_HostBindingHandler($event) { return ctx.onDocumentPointerUp($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveDocument"])("mouseup", function HudLrfButtonComponent_mouseup_HostBindingHandler($event) { return ctx.onDocumentMouse($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveDocument"]);
    } }, outputs: { shoot: "shoot" }, ngContentSelectors: _c0, decls: 7, vars: 1, consts: [[3, "ngClass", "click", "mousedown", "mouseup"], [1, "flex-1"], [1, "display-flex", "flex-dir-col"]], template: function HudLrfButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HudLrfButtonComponent_Template_div_click_0_listener() { return ctx.onMouseClick(); })("mousedown", function HudLrfButtonComponent_Template_div_mousedown_0_listener() { return ctx.onMouseDown(); })("mouseup", function HudLrfButtonComponent_Template_div_mouseup_0_listener() { return ctx.onMouseUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.isContinuousMode ? "continuous-mode-enabled" : "continuous-mode-disabled");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass], styles: ["[_nghost-%COMP%] {\n  -webkit-user-select: none !important;\n          user-select: none !important;\n  margin: 8px;\n  z-index: 200;\n  width: 81px;\n  height: 71px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.continuous-mode-enabled[_ngcontent-%COMP%] {\n  cursor: pointer;\n  -webkit-user-select: none !important;\n          user-select: none !important;\n  background-image: url(\"/assets/hud-lrf-continuous-off.png\");\n  width: 81px;\n  height: 71px;\n  background-color: transparent;\n  border-width: 0px !important;\n  outline: none !important;\n  box-shadow: none !important;\n  display: flex;\n  color: white;\n  font-size: 24px;\n  font-weight: bold;\n}\n\n.continuous-mode-enabled[_ngcontent-%COMP%]:hover {\n  background-image: url(\"/assets/hud-lrf-continuous-hover.png\");\n}\n\n.continuous-mode-disabled[_ngcontent-%COMP%] {\n  cursor: pointer;\n  -webkit-user-select: none !important;\n          user-select: none !important;\n  background-image: url(\"/assets/hud-button-off.png\");\n  width: 81px;\n  height: 71px;\n  background-color: transparent;\n  border-width: 0px !important;\n  outline: none !important;\n  box-shadow: none !important;\n  display: flex;\n  color: white;\n  font-size: 24px;\n  font-weight: bold;\n}\n\n.continuous-mode-disabled[_ngcontent-%COMP%]:hover {\n  background-image: url(\"/assets/hud-button-hover.png\");\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh1ZC1scmYtYnV0dG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQUE7VUFBQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0Esb0NBQUE7VUFBQSw0QkFBQTtFQUNBLDJEQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSw2REFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLG9DQUFBO1VBQUEsNEJBQUE7RUFDQSxtREFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UscURBQUE7QUFDRiIsImZpbGUiOiJodWQtbHJmLWJ1dHRvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICB1c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogOHB4O1xyXG4gIHotaW5kZXg6IDIwMDtcclxuICB3aWR0aDogODFweDtcclxuICBoZWlnaHQ6IDcxcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uY29udGludW91cy1tb2RlLWVuYWJsZWQge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB1c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaHVkLWxyZi1jb250aW51b3VzLW9mZi5wbmdcIik7XHJcbiAgd2lkdGg6IDgxcHg7XHJcbiAgaGVpZ2h0OiA3MXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5jb250aW51b3VzLW1vZGUtZW5hYmxlZDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9odWQtbHJmLWNvbnRpbnVvdXMtaG92ZXIucG5nXCIpO1xyXG59XHJcblxyXG4uY29udGludW91cy1tb2RlLWRpc2FibGVkIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmUgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2h1ZC1idXR0b24tb2ZmLnBuZ1wiKTtcclxuICB3aWR0aDogODFweDtcclxuICBoZWlnaHQ6IDcxcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXdpZHRoOiAwcHggIWltcG9ydGFudDtcclxuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmNvbnRpbnVvdXMtbW9kZS1kaXNhYmxlZDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9odWQtYnV0dG9uLWhvdmVyLnBuZ1wiKTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 4824:
/*!***********************************************************************!*\
  !*** ./src/app/components/hud-ruller-pan/hud-ruller-pan.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HudRullerPanComponent": () => (/* binding */ HudRullerPanComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_site_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/site.service */ 6633);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);



function HudRullerPanComponent__svg_svg_0__svg_line_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "line", 4);
} if (rf & 2) {
    const tick_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("opacity", tick_r3.opacity);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("x1", tick_r3.x1)("x2", tick_r3.x2)("y1", tick_r3.y1)("y2", tick_r3.y2);
} }
function HudRullerPanComponent__svg_svg_0__svg_text_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "text", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const text_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("opacity", text_r4.opacity);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("x", text_r4.x)("y", text_r4.y);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", text_r4.text, " ");
} }
function HudRullerPanComponent__svg_svg_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HudRullerPanComponent__svg_svg_0__svg_line_1_Template, 1, 6, "line", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HudRullerPanComponent__svg_svg_0__svg_text_2_Template, 2, 5, "text", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.ticks);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.texts);
} }
class HudRullerPanComponent {
    constructor(el, siteService) {
        this.el = el;
        this.siteService = siteService;
        this.isVisible = false;
        this.ticks = [];
        // Texts du vernier
        this.texts = [];
        // Nombre de texts affiché
        this.textCount = 30;
        this.initializeTickAndText();
        this.unitSelectedSubscription = this.siteService.unitSelectedSubject.subscribe(() => { this.updateTickAndText(); });
        this.cameraSelectedSubscription = this.siteService.cameraSelectedSubject.subscribe(() => { this.updateTickAndText(); });
        this.siteStateSubscription = this.siteService.siteStateSubject.subscribe(() => { this.updateTickAndText(); });
    }
    ngOnDestroy() {
        this.unitSelectedSubscription.unsubscribe();
        this.cameraSelectedSubscription.unsubscribe();
        this.siteStateSubscription.unsubscribe();
    }
    updateTickAndText() {
        if (this.siteService.selectedUnit == null) {
            this.isVisible = false;
            return;
        }
        if (this.siteService.selectedCamera == null) {
            this.isVisible = false;
            return;
        }
        let turret = this.siteService.selectedUnit.getMaterial("Turret" /* Turret */);
        if (turret == null) {
            this.isVisible = false;
            return;
        }
        let absolutPositionCap = turret.getCapability("TurretAbsolutePosition" /* TurretAbsolutePosition */);
        if (absolutPositionCap == null) {
            this.isVisible = false;
            return;
        }
        let absoluteZoomPositionCap = this.siteService.selectedCamera.getCapability("CameraZoomAbsolutePosition" /* CameraZoomAbsolutePosition */);
        if (absoluteZoomPositionCap == null) {
            this.isVisible = false;
            return;
        }
        this.isVisible = true;
        let hfov = absoluteZoomPositionCap.horizontalFieldOfView;
        let pan = absolutPositionCap.pan;
        let style = getComputedStyle(this.el.nativeElement);
        let displayWidth = parseFloat(style.width.replace('px', ''));
        let degreePerPixel = hfov / displayWidth;
        let minTick = Math.round(pan) - (this.textCount / 2);
        // Mise a jour des degrées
        let degree = minTick;
        this.ticks.forEach((tick, index) => {
            var rounded = Math.round(degree * 10) / 10;
            tick.degree = rounded;
            degree += 0.1;
        });
        this.texts.forEach((text, index) => {
            text.degree = minTick + index;
        });
        var x = 0;
        var y = 20;
        var delta = 0;
        // Calcul des position X
        let alternateVisibility = false;
        if (this.texts.length > 10) {
            alternateVisibility = true;
        }
        let textIndex = 0;
        this.texts.forEach((text) => {
            delta = text.degree - pan;
            let ratio = Math.abs(delta) / (displayWidth * degreePerPixel / 8);
            x = (displayWidth / 2) + (delta / degreePerPixel);
            let textDegree = (text.degree + 360) % 360;
            text.text = textDegree.toFixed(0) + "°";
            text.x = x - (text.degree.toFixed(0).length * 10 / 2);
            text.y = 20;
            text.opacity = 1;
            textIndex++;
        });
        this.ticks.forEach((tick) => {
            delta = tick.degree - pan;
            let ratio = Math.abs(delta) / (displayWidth * degreePerPixel / 8);
            x = (displayWidth / 2) + (delta / degreePerPixel);
            y = 28;
            if ((tick.degree % 1) == 0) {
                y = 24;
            }
            tick.x1 = x;
            tick.x2 = x;
            tick.y1 = y;
            tick.y2 = 32;
            tick.opacity = 1;
            degree += 0.1;
        });
    }
    initializeTickAndText() {
        let initTicks = [];
        let initTexts = [];
        var i;
        var y;
        for (i = 0; i < this.textCount; i++) {
            initTexts.push({
                x: 0,
                y: 0,
                text: "",
                degree: 0,
                opacity: 1
            });
        }
        this.texts = initTexts;
        for (i = 0; i < this.textCount * 10; i++) {
            initTicks.push({
                x1: 0,
                x2: 0,
                y1: 0,
                y2: 0,
                opacity: 0,
                degree: 0
            });
            this.ticks = initTicks;
        }
    }
    ngOnInit() {
    }
}
HudRullerPanComponent.ɵfac = function HudRullerPanComponent_Factory(t) { return new (t || HudRullerPanComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_site_service__WEBPACK_IMPORTED_MODULE_0__.SiteService)); };
HudRullerPanComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HudRullerPanComponent, selectors: [["app-hud-ruller-pan"]], hostAttrs: [1, "hud-layer"], decls: 1, vars: 1, consts: [["width", "100%", "height", "32", 4, "ngIf"], ["width", "100%", "height", "32"], ["class", "compas-tick", 3, "opacity", 4, "ngFor", "ngForOf"], ["class", "compas-text", 3, "opacity", 4, "ngFor", "ngForOf"], [1, "compas-tick"], [1, "compas-text"]], template: function HudRullerPanComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HudRullerPanComponent__svg_svg_0_Template, 3, 2, "svg", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isVisible);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], styles: ["[_nghost-%COMP%] {\n  position: absolute;\n  left: 0px;\n  width: 100%;\n  height: 32px;\n  bottom: 0px;\n  opacity: 0.8;\n  -webkit-user-select: none;\n          user-select: none;\n  overflow: hidden;\n  z-index: 4;\n  mask-image: linear-gradient(to right, transparent 0%, transparent 10%, black 35%, black 65%, transparent 90%, transparent 100%);\n  -webkit-mask-image: linear-gradient(to right, transparent 0%, transparent 10%, black 35%, black 65%, transparent 90%, transparent 100%);\n}\n\n.compas-tick[_ngcontent-%COMP%] {\n  stroke: white;\n  stroke-width: 1;\n}\n\n.compas-text[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: bold;\n  color: white;\n  fill: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh1ZC1ydWxsZXItcGFuLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSwrSEFBQTtFQUNBLHVJQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFDRiIsImZpbGUiOiJodWQtcnVsbGVyLXBhbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMzJweDtcclxuICBib3R0b206IDBweDtcclxuICBvcGFjaXR5OiAwLjg7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB6LWluZGV4OiA0O1xyXG4gIG1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdHJhbnNwYXJlbnQgMCUsIHRyYW5zcGFyZW50IDEwJSwgYmxhY2sgMzUlLCBibGFjayA2NSUsIHRyYW5zcGFyZW50IDkwJSwgdHJhbnNwYXJlbnQgMTAwJSk7XHJcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHRyYW5zcGFyZW50IDAlLCB0cmFuc3BhcmVudCAxMCUsIGJsYWNrIDM1JSwgYmxhY2sgNjUlLCB0cmFuc3BhcmVudCA5MCUsIHRyYW5zcGFyZW50IDEwMCUpO1xyXG59XHJcblxyXG4uY29tcGFzLXRpY2sge1xyXG4gIHN0cm9rZTogd2hpdGU7XHJcbiAgc3Ryb2tlLXdpZHRoOiAxO1xyXG59XHJcblxyXG4uY29tcGFzLXRleHQge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZmlsbDogd2hpdGU7XHJcbn1cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ 5988:
/*!*************************************************************************!*\
  !*** ./src/app/components/hud-ruller-tilt/hud-ruller-tilt.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HudRullerTiltComponent": () => (/* binding */ HudRullerTiltComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_site_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/site.service */ 6633);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);



function HudRullerTiltComponent__svg_svg_0__svg_line_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "line", 4);
} if (rf & 2) {
    const tick_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("opacity", tick_r3.opacity);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("x1", tick_r3.x1)("x2", tick_r3.x2)("y1", tick_r3.y1)("y2", tick_r3.y2);
} }
function HudRullerTiltComponent__svg_svg_0__svg_text_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "text", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const text_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("opacity", text_r4.opacity);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("x", text_r4.x)("y", text_r4.y);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", text_r4.text, " ");
} }
function HudRullerTiltComponent__svg_svg_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HudRullerTiltComponent__svg_svg_0__svg_line_1_Template, 1, 6, "line", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HudRullerTiltComponent__svg_svg_0__svg_text_2_Template, 2, 5, "text", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.ticks);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.texts);
} }
class HudRullerTiltComponent {
    constructor(el, siteService) {
        this.el = el;
        this.siteService = siteService;
        this.ticks = [];
        this.texts = [];
        this.isVisible = false;
        this.textCount = 30;
        this.initializeTickAndText();
        this.unitSelectedSubscription = this.siteService.unitSelectedSubject.subscribe(() => { this.updateTickAndText(); });
        this.cameraSelectedSubscription = this.siteService.cameraSelectedSubject.subscribe(() => { this.updateTickAndText(); });
        this.siteStateSubscription = this.siteService.siteStateSubject.subscribe(() => { this.updateTickAndText(); });
    }
    ngOnDestroy() {
        this.unitSelectedSubscription.unsubscribe();
        this.cameraSelectedSubscription.unsubscribe();
        this.siteStateSubscription.unsubscribe();
    }
    updateTickAndText() {
        if (this.siteService.selectedUnit == null) {
            this.isVisible = false;
            return;
        }
        if (this.siteService.selectedCamera == null) {
            this.isVisible = false;
            return;
        }
        let turret = this.siteService.selectedUnit.getMaterial("Turret" /* Turret */);
        if (turret == null) {
            this.isVisible = false;
            return;
        }
        let absolutPositionCap = turret.getCapability("TurretAbsolutePosition" /* TurretAbsolutePosition */);
        if (absolutPositionCap == null) {
            this.isVisible = false;
            return;
        }
        let absoluteZoomPositionCap = this.siteService.selectedCamera.getCapability("CameraZoomAbsolutePosition" /* CameraZoomAbsolutePosition */);
        if (absoluteZoomPositionCap == null) {
            this.isVisible = false;
            return;
        }
        this.isVisible = true;
        let hfov = absoluteZoomPositionCap.horizontalFieldOfView;
        let ratio = this.siteService.selectedCamera.streamWidth / this.siteService.selectedCamera.streamHeight;
        let vFov = hfov / ratio;
        let tilt = absolutPositionCap.tilt;
        let style = getComputedStyle(this.el.nativeElement);
        let displayHeight = parseFloat(style.height.replace('px', ''));
        let degreePerPixel = vFov / displayHeight;
        let minTick = Math.round(tilt) - (this.textCount / 2);
        // Mise a jour des degrées
        let degree = minTick;
        this.ticks.forEach((tick, index) => {
            var rounded = Math.round(degree * 10) / 10;
            tick.degree = rounded;
            degree += 0.1;
        });
        this.texts.forEach((text, index) => {
            text.degree = minTick + index;
        });
        var x = 0;
        var y = 20;
        var delta = 0;
        // Calcul des position Y
        this.texts.forEach((text) => {
            delta = (text.degree - tilt);
            let ratio = Math.abs(delta) / (displayHeight * degreePerPixel / 6);
            y = displayHeight - ((displayHeight / 2) + (delta / degreePerPixel));
            text.text = (text.degree).toFixed(0) + "°";
            text.x = 10;
            text.y = y + 5;
            text.opacity = 1;
        });
        this.ticks.forEach((tick) => {
            delta = (tick.degree - tilt);
            let ratio = Math.abs(delta) / (displayHeight * degreePerPixel / 6);
            x = 4;
            y = displayHeight - ((displayHeight / 2) + (delta / degreePerPixel));
            if ((tick.degree % 1) == 0) {
                x = 8;
            }
            tick.x1 = 0;
            tick.x2 = x;
            tick.y1 = y;
            tick.y2 = y;
            tick.opacity = 1;
            degree += 0.1;
        });
    }
    initializeTickAndText() {
        let initTicks = [];
        let initTexts = [];
        var i;
        var y;
        for (i = 0; i < this.textCount; i++) {
            initTexts.push({
                x: 0,
                y: 0,
                text: "",
                degree: 0,
                opacity: 1
            });
        }
        this.texts = initTexts;
        for (i = 0; i < this.textCount * 10; i++) {
            initTicks.push({
                x1: 0,
                x2: 0,
                y1: 0,
                y2: 0,
                opacity: 0,
                degree: 0
            });
            this.ticks = initTicks;
        }
    }
    ngOnInit() {
    }
}
HudRullerTiltComponent.ɵfac = function HudRullerTiltComponent_Factory(t) { return new (t || HudRullerTiltComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_site_service__WEBPACK_IMPORTED_MODULE_0__.SiteService)); };
HudRullerTiltComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HudRullerTiltComponent, selectors: [["app-hud-ruller-tilt"]], decls: 1, vars: 1, consts: [["height", "100%", "width", "64", 4, "ngIf"], ["height", "100%", "width", "64"], ["class", "compas-tick", 3, "opacity", 4, "ngFor", "ngForOf"], ["class", "compas-text", 3, "opacity", 4, "ngFor", "ngForOf"], [1, "compas-tick"], [1, "compas-text"]], template: function HudRullerTiltComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HudRullerTiltComponent__svg_svg_0_Template, 3, 2, "svg", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isVisible);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], styles: ["[_nghost-%COMP%] {\n  position: absolute;\n  top: 64px;\n  width: 64px !important;\n  min-width: 64px !important;\n  max-width: 64px !important;\n  height: calc(100% - 64px);\n  opacity: 0.8;\n  overflow: hidden;\n  -webkit-user-select: none;\n          user-select: none;\n  z-index: 4;\n  mask-image: linear-gradient(to top, transparent 0%, transparent 10%, black 35%, black 65%, transparent 90%, transparent 100%);\n  -webkit-mask-image: linear-gradient(to top, transparent 0%, transparent 10%, black 35%, black 65%, transparent 90%, transparent 100%);\n}\n\n.compas-tick[_ngcontent-%COMP%] {\n  stroke: white;\n  stroke-width: 1;\n}\n\n.compas-text[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: bold;\n  color: white;\n  fill: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh1ZC1ydWxsZXItdGlsdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSw2SEFBQTtFQUNBLHFJQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFDRiIsImZpbGUiOiJodWQtcnVsbGVyLXRpbHQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNjRweDtcclxuICB3aWR0aDogNjRweCAhaW1wb3J0YW50O1xyXG4gIG1pbi13aWR0aDogNjRweCAhaW1wb3J0YW50O1xyXG4gIG1heC13aWR0aDogNjRweCAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogY2FsYygxMDAlIC0gNjRweCk7XHJcbiAgb3BhY2l0eTogMC44O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgei1pbmRleDogNDtcclxuICBtYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCB0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgMTAlLCBibGFjayAzNSUsIGJsYWNrIDY1JSwgdHJhbnNwYXJlbnQgOTAlLCB0cmFuc3BhcmVudCAxMDAlKTtcclxuICAtd2Via2l0LW1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHRyYW5zcGFyZW50IDAlLCB0cmFuc3BhcmVudCAxMCUsIGJsYWNrIDM1JSwgYmxhY2sgNjUlLCB0cmFuc3BhcmVudCA5MCUsIHRyYW5zcGFyZW50IDEwMCUpO1xyXG59XHJcblxyXG4uY29tcGFzLXRpY2sge1xyXG4gIHN0cm9rZTogd2hpdGU7XHJcbiAgc3Ryb2tlLXdpZHRoOiAxO1xyXG59XHJcblxyXG4uY29tcGFzLXRleHQge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZmlsbDogd2hpdGU7XHJcbn1cclxuXHJcbiJdfQ== */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_site_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/site.service */ 6633);
/* harmony import */ var _services_ui_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/ui.service */ 9846);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);




function HudStreamComponent_img_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 2);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("width", ctx_r0.mainStream.displayWidth, "px")("height", ctx_r0.mainStream.displayHeight, "px")("top", ctx_r0.mainStream.displayTop, "px")("left", ctx_r0.mainStream.displayLeft, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r0.mainStream.url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function HudStreamComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("width", ctx_r1.mainStream.displayWidth / 2, "px")("height", ctx_r1.mainStream.displayHeight / 2, "px")("top", ctx_r1.mainStream.displayTop + ctx_r1.mainStream.displayHeight / 4, "px")("left", ctx_r1.mainStream.displayLeft + ctx_r1.mainStream.displayWidth / 4, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("top", ctx_r1.mainStream.displayHeight / -4, "px")("left", ctx_r1.mainStream.displayWidth / -4, "px")("width", ctx_r1.mainStream.displayWidth, "px")("height", ctx_r1.mainStream.displayHeight, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r1.mainStream.url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
class HudStreamComponent {
    constructor(siteService, el, renderer, uiService) {
        this.siteService = siteService;
        this.el = el;
        this.renderer = renderer;
        this.uiService = uiService;
        this.showMagnifier = false;
        this.mainStream = undefined;
        this.streams = [];
        this.unitSelectedSubscription = this.siteService.unitSelectedSubject.subscribe(() => { this.updateStreamList(); });
        this.cameraSelectedSubscription = this.siteService.cameraSelectedSubject.subscribe(() => { this.updateStreamList(); });
        this.showPipZoomSubscription = this.uiService.showPipZoomSubject.subscribe((value) => { this.showMagnifier = value; });
    }
    updateStreamList() {
        this.streams = [];
        if (this.siteService.selectedUnit != null) {
            let baseStreamUrl = "";
            if (window.location.protocol === "https:") {
                baseStreamUrl += "https://";
            }
            else {
                baseStreamUrl += "http://";
            }
            baseStreamUrl += window.location.host + ":" + window.location.port + "/stream/";
            this.siteService.selectedUnit.materials.forEach((value) => {
                var _a;
                if (value.materialType == "DayCamera" /* DayCamera */ || value.materialType == "ThermalCamera" /* ThermalCamera */) {
                    let camera = value;
                    let isSelectedCamera = value.id === ((_a = this.siteService.selectedCamera) === null || _a === void 0 ? void 0 : _a.id);
                    let stream = {
                        displayName: value.displayName,
                        isMainStream: isSelectedCamera,
                        materialId: value.id,
                        url: baseStreamUrl + "/" + value.id,
                        displayHeight: 0,
                        displayWidth: 0,
                        streamWidth: camera.streamWidth,
                        streamHeight: camera.streamHeight,
                        displayLeft: 0,
                        displayTop: 0
                    };
                    if (isSelectedCamera) {
                        this.mainStream = stream;
                    }
                    this.streams.push(stream);
                }
            });
        }
        this.setStreamSize();
    }
    onResized(evt) {
        this.setStreamSize();
    }
    setStreamSize() {
        let style = getComputedStyle(this.el.nativeElement);
        let displayWidth = parseFloat(style.width.replace('px', ''));
        let displayHeight = parseFloat(style.height.replace('px', ''));
        if (this.mainStream != null) {
            let ratioStream = this.mainStream.streamWidth / this.mainStream.streamHeight;
            let computedHeight = displayWidth / ratioStream;
            if (computedHeight > displayHeight) {
                let computedWidth = displayHeight * ratioStream;
                let left = (displayWidth - computedWidth) / 2;
                this.mainStream.displayTop = 0;
                this.mainStream.displayLeft = left;
                this.mainStream.displayWidth = computedWidth;
                this.mainStream.displayHeight = displayHeight;
            }
            else {
                let top = (displayHeight - computedHeight) / 2;
                this.mainStream.displayTop = top;
                this.mainStream.displayLeft = 0;
                this.mainStream.displayWidth = displayWidth;
                this.mainStream.displayHeight = computedHeight;
            }
        }
    }
    ngOnDestroy() {
        this.unitSelectedSubscription.unsubscribe();
        this.cameraSelectedSubscription.unsubscribe();
        this.showPipZoomSubscription.unsubscribe();
    }
    ngOnInit() {
        this.updateStreamList();
    }
}
HudStreamComponent.ɵfac = function HudStreamComponent_Factory(t) { return new (t || HudStreamComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_site_service__WEBPACK_IMPORTED_MODULE_0__.SiteService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_ui_service__WEBPACK_IMPORTED_MODULE_1__.UiService)); };
HudStreamComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HudStreamComponent, selectors: [["app-hud-stream"]], hostAttrs: [1, "hud-layer"], hostBindings: function HudStreamComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("resize", function HudStreamComponent_resize_HostBindingHandler($event) { return ctx.onResized($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
    } }, inputs: { showMagnifier: "showMagnifier" }, decls: 2, vars: 2, consts: [["class", "main-stream", 3, "width", "height", "top", "left", "src", 4, "ngIf"], [4, "ngIf"], [1, "main-stream", 3, "src"], [1, "stream-div-zoom"], ["alt", "stream zoom image", "referrerpolicy", "unsafe-url", 1, "stream-img-zoom", 3, "src"]], template: function HudStreamComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, HudStreamComponent_img_0_Template, 1, 9, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HudStreamComponent_div_1_Template, 3, 17, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.mainStream !== undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showMagnifier && ctx.mainStream !== undefined);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf], styles: [".main-stream[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0px;\n  right: 0px;\n}\n\n.stream-img-zoom[_ngcontent-%COMP%] {\n  position: relative;\n  transform: scale(2);\n  -webkit-user-select: none !important;\n          user-select: none !important;\n}\n\n.stream-div-zoom[_ngcontent-%COMP%] {\n  border-style: solid;\n  border-width: 1px;\n  border-color: rgba(0, 106, 180, 0.6);\n  position: absolute;\n  overflow: hidden;\n  -webkit-user-select: none !important;\n          user-select: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh1ZC1zdHJlYW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7VUFBQSw0QkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9DQUFBO1VBQUEsNEJBQUE7QUFDRiIsImZpbGUiOiJodWQtc3RyZWFtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tc3RyZWFte1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICBsZWZ0OjBweDtcclxuICAgIHJpZ2h0OjBweDtcclxuICAgXHJcbn1cclxuLnN0cmVhbS1pbWctem9vbSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMik7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnN0cmVhbS1kaXYtem9vbSB7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IDFweDtcclxuICBib3JkZXItY29sb3I6IHJnYmEoMCwxMDYsMTgwLCAwLjYpO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiJdfQ== */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_site_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/site.service */ 6633);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ 2528);
/* harmony import */ var _services_ui_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/ui.service */ 9846);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _hud_lrf_button_hud_lrf_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hud-lrf-button/hud-lrf-button.component */ 2762);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ 89);
/* harmony import */ var _hud_button_hud_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hud-button/hud-button.component */ 6999);
/* harmony import */ var _compass_compass_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../compass/compass.component */ 2549);
/* harmony import */ var _hud_check_hud_check_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hud-check/hud-check.component */ 7609);
/* harmony import */ var _stick_stick_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../stick/stick.component */ 2203);













function HudUiComponent_div_0_app_hud_lrf_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-hud-lrf-button")(1, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "sensors");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("inline", true);
} }
function HudUiComponent_div_0_app_hud_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-hud-button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("buttonDown", function HudUiComponent_div_0_app_hud_button_5_Template_app_hud_button_buttonDown_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r11.onZoomInDown(); })("buttonUp", function HudUiComponent_div_0_app_hud_button_5_Template_app_hud_button_buttonUp_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r13.onZoomUp(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "zoom_in");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("inline", true);
} }
function HudUiComponent_div_0_mat_icon_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "crop_free");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("inline", true);
} }
function HudUiComponent_div_0_app_hud_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-hud-button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("buttonDown", function HudUiComponent_div_0_app_hud_button_8_Template_app_hud_button_buttonDown_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r14.onZoomOutDown(); })("buttonUp", function HudUiComponent_div_0_app_hud_button_8_Template_app_hud_button_buttonUp_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r16.onZoomUp(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "zoom_out");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("inline", true);
} }
function HudUiComponent_div_0_app_hud_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-hud-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("buttonDown", function HudUiComponent_div_0_app_hud_button_9_Template_app_hud_button_buttonDown_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r17.onAutoFocusButtonDown(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " filter_center_focus");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("inline", true);
} }
function HudUiComponent_div_0_app_hud_button_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-hud-button")(1, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "portrait");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("inline", true);
} }
function HudUiComponent_div_0_app_hud_button_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-hud-button")(1, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "panorama");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("inline", true);
} }
function HudUiComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "mat-label", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, HudUiComponent_div_0_app_hud_lrf_button_4_Template, 3, 1, "app-hud-lrf-button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, HudUiComponent_div_0_app_hud_button_5_Template, 3, 1, "app-hud-button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "app-hud-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("buttonDown", function HudUiComponent_div_0_Template_app_hud_button_buttonDown_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r19.onPipZoomButtonDown(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, HudUiComponent_div_0_mat_icon_7_Template, 2, 1, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, HudUiComponent_div_0_app_hud_button_8_Template, 3, 1, "app-hud-button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, HudUiComponent_div_0_app_hud_button_9_Template, 3, 1, "app-hud-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, HudUiComponent_div_0_app_hud_button_10_Template, 3, 1, "app-hud-button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, HudUiComponent_div_0_app_hud_button_11_Template, 3, 1, "app-hud-button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.lrfInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.hasLrf);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.hasZoomContinuousCapability);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.hasPipZoom);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.hasZoomContinuousCapability);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.hasCameraAutoFocusCapability);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.hasCameraFocusContinuousCapability);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.hasCameraFocusContinuousCapability);
} }
function HudUiComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "div", 2);
} }
function HudUiComponent_div_3_app_hud_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-hud-button")(1, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "cleaning_services");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("inline", true);
} }
function HudUiComponent_div_3_app_hud_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-hud-button")(1, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "fiber_manual_record");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("inline", true);
} }
function HudUiComponent_div_3_app_hud_button_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-hud-button")(1, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "photo_camera");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("inline", true);
} }
function HudUiComponent_div_3_app_hud_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-hud-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("buttonDown", function HudUiComponent_div_3_app_hud_button_6_Template_app_hud_button_buttonDown_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r27.onSwitchCameraDown(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "swap_horizontal_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("inline", true);
} }
function HudUiComponent_div_3_app_hud_check_7_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-hud-check", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("checkChange", function HudUiComponent_div_3_app_hud_check_7_Template_app_hud_check_checkChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r29.onStablizationCheckChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "video_stable");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("isChecked", ctx_r25.isTurretGyroStabilizationEnabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("inline", true);
} }
function HudUiComponent_div_3_app_stick_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-stick");
} }
function HudUiComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-compass")(2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, HudUiComponent_div_3_app_hud_button_3_Template, 3, 1, "app-hud-button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, HudUiComponent_div_3_app_hud_button_4_Template, 3, 1, "app-hud-button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, HudUiComponent_div_3_app_hud_button_5_Template, 3, 1, "app-hud-button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, HudUiComponent_div_3_app_hud_button_6_Template, 3, 1, "app-hud-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, HudUiComponent_div_3_app_hud_check_7_Template, 3, 2, "app-hud-check", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, HudUiComponent_div_3_app_stick_9_Template, 1, 0, "app-stick", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.hasWasherCapability);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.hasRecordCapability);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.hasScreenshotCapability);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.hasMultipleCamera);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.hasGyroStabilizationCapability);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.hasMoveSpeedCapability);
} }
function HudUiComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "div", 2);
} }
class HudUiComponent {
    constructor(siteService, snackBar, uiService) {
        this.siteService = siteService;
        this.snackBar = snackBar;
        this.uiService = uiService;
        this.isLeftToRight = true;
        this.hasPipZoom = false;
        this.hasMultipleCamera = false;
        this.lrfInfo = "";
        this.hasMoveSpeedCapability = false;
        this.hasZoomContinuousCapability = false;
        this.hasCameraAutoFocusCapability = false;
        this.hasCameraFocusContinuousCapability = false;
        this.hasWasherCapability = false;
        this.hasRecordCapability = false;
        this.hasScreenshotCapability = false;
        this.hasGyroStabilizationCapability = false;
        this.hasLrf = false;
        this.isTurretGyroStabilizationEnabled = false;
        this.unitSelectedSubscription = this.siteService.unitSelectedSubject.subscribe(() => { this.updateVisibilityFlags(); });
        this.cameraSelectedSubscription = this.siteService.cameraSelectedSubject.subscribe(() => { this.updateVisibilityFlags(); });
        this.siteStateSubscription = this.siteService.siteStateSubject.subscribe(() => {
            this.updateCheckState();
            this.updateSwitchState();
            this.updateLrfInfo();
        });
    }
    onPipZoomButtonDown() {
        this.uiService.showHidePipZoom();
    }
    ngOnDestroy() {
        this.unitSelectedSubscription.unsubscribe();
        this.cameraSelectedSubscription.unsubscribe();
        this.siteStateSubscription.unsubscribe();
    }
    ngOnInit() {
        this.updateVisibilityFlags();
    }
    updateVisibilityFlags() {
        var _a, _b;
        if (this.siteService.selectedUnit != null) {
            this.hasMoveSpeedCapability = this.siteService.selectedUnit.hasMaterialWithCapability("Turret" /* Turret */, "TurretMoveSpeed" /* TurretMoveSpeed */);
            let cameraCount = 0;
            (_a = this.siteService.selectedUnit) === null || _a === void 0 ? void 0 : _a.materials.forEach((value) => {
                if (value.materialType == "DayCamera" /* DayCamera */ || value.materialType == "ThermalCamera" /* ThermalCamera */) {
                    cameraCount++;
                }
            });
            this.hasMultipleCamera = cameraCount > 1;
            this.hasPipZoom = cameraCount > 0 && this.siteService.selectedCamera != null;
            this.hasLrf = this.siteService.selectedUnit.getMaterial("LazerMeasurement" /* LazerMeasurement */) != null;
            this.hasGyroStabilizationCapability = this.siteService.selectedUnit.hasMaterialWithCapability("Turret" /* Turret */, "TurretGyrostabilization" /* TurretGyrostabilization */);
            if (this.siteService.selectedCamera != null) {
                this.hasCameraAutoFocusCapability = (_b = this.siteService.selectedCamera) === null || _b === void 0 ? void 0 : _b.hasCapability("CameraAutoFocusOnePush" /* CameraAutoFocusOnePush */);
                this.hasZoomContinuousCapability = this.siteService.selectedCamera.hasCapability("CameraZoomContinuous" /* CameraZoomContinuous */);
                this.hasRecordCapability = true;
                this.hasScreenshotCapability = true;
            }
            else {
                this.hasZoomContinuousCapability = false;
                this.hasCameraAutoFocusCapability = false;
                this.hasCameraFocusContinuousCapability = false;
                this.hasRecordCapability = false;
                this.hasScreenshotCapability = false;
            }
        }
        else {
            this.hasMultipleCamera = false;
            this.hasMoveSpeedCapability = false;
            this.hasZoomContinuousCapability = false;
            this.hasCameraAutoFocusCapability = false;
            this.hasCameraFocusContinuousCapability = false;
            this.hasRecordCapability = false;
            this.hasScreenshotCapability = false;
            this.hasWasherCapability = false;
            this.hasGyroStabilizationCapability = false;
            this.hasLrf = false;
        }
    }
    updateSwitchState() {
    }
    updateCheckState() {
        if (this.siteService.selectedUnit == null)
            return;
        let material = this.siteService.selectedUnit.getMaterial("Turret" /* Turret */);
        if (material != null) {
            let cap = material.getCapability("TurretGyrostabilization" /* TurretGyrostabilization */);
            if (cap != null) {
                this.isTurretGyroStabilizationEnabled = cap.isGyrostabilizationEnabled;
            }
        }
    }
    onZoomInDown() {
        if (this.siteService.selectedCamera == undefined)
            return;
        console.log("onZoomInDown");
        let cap = this.siteService.selectedCamera.getCapability("CameraZoomContinuous" /* CameraZoomContinuous */);
        if (cap != null)
            cap.zoomInStart();
    }
    onZoomUp() {
        console.log("onZoomUp");
        if (this.siteService.selectedCamera == undefined)
            return;
        let cap = this.siteService.selectedCamera.getCapability("CameraZoomContinuous" /* CameraZoomContinuous */);
        if (cap != null)
            cap.zoomStop();
    }
    onZoomOutDown() {
        console.log("onZoomOutDown");
        if (this.siteService.selectedCamera == undefined)
            return;
        let cap = this.siteService.selectedCamera.getCapability("CameraZoomContinuous" /* CameraZoomContinuous */);
        if (cap != null)
            cap.zoomOutStart();
    }
    onSwitchCameraDown() {
        let camera = this.siteService.selectNextCamera();
        if (camera == null)
            return;
        this.snackBar.open("Display : " + camera.displayName, "", {
            duration: 3000,
            panelClass: 'seasense-snackbar'
        });
    }
    onStablizationCheckChange(enabled) {
        if (this.siteService.selectedUnit == null)
            return;
        let material = this.siteService.selectedUnit.getMaterial("Turret" /* Turret */);
        if (material == null)
            return;
        let cap = material.getCapability("TurretGyrostabilization" /* TurretGyrostabilization */);
        if (cap == null)
            return;
        cap.setGyrostabilization(enabled);
    }
    onAutoFocusButtonDown() {
        if (this.siteService.selectedCamera == undefined)
            return;
        let cap = this.siteService.selectedCamera.getCapability("CameraAutoFocusOnePush" /* CameraAutoFocusOnePush */);
        if (cap != null)
            cap.autoFocusOnePush();
    }
    updateLrfInfo() {
        if (this.siteService.selectedUnit == null) {
            this.lrfInfo = "";
            return;
        }
        let lazer = this.siteService.selectedUnit.getMaterial("LazerMeasurement" /* LazerMeasurement */);
        if (lazer == null) {
            this.lrfInfo = "";
            return;
        }
        let cap = lazer.getCapability("LazerMeasurementShootCapability" /* LazerMeasurementShootCapability */);
        if (cap == null) {
            this.lrfInfo = "";
            return;
        }
        if (cap.lastShootDate == null) {
            this.lrfInfo = "";
            return;
        }
        if (cap.isOn === false) {
            this.lrfInfo = "";
            return;
        }
        let today = new Date();
        let shootDate = cap.lastShootDate;
        let seconds = (today.getTime() - cap.lastShootDate.getTime()) / 1000;
        if (seconds < 5) {
            if (cap.lastShootDistance != null) {
                this.lrfInfo = cap.lastShootDistance + " m";
            }
            else if (cap.error != null) {
                this.lrfInfo = cap.error;
            }
            else {
                this.lrfInfo = "";
            }
        }
        else {
            this.lrfInfo = "";
        }
    }
}
HudUiComponent.ɵfac = function HudUiComponent_Factory(t) { return new (t || HudUiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_site_service__WEBPACK_IMPORTED_MODULE_0__.SiteService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_ui_service__WEBPACK_IMPORTED_MODULE_1__.UiService)); };
HudUiComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: HudUiComponent, selectors: [["app-hud-ui"]], hostAttrs: [1, "hud-layer"], decls: 5, vars: 4, consts: [["class", "hud-column flex-dir-col", 4, "ngIf"], [1, "spacer"], [1, "hud-column", "flex-dir-col"], [1, "lrf-info-label"], [4, "ngIf"], [3, "buttonDown", "buttonUp", 4, "ngIf"], [3, "buttonDown"], ["class", "hud-button-icon", "matTooltip", "Switch Zoom Center On/Off", "aria-hidden", "false", "aria-label", "Switch Zoom Center On/Off", 3, "inline", 4, "ngIf"], [3, "buttonDown", 4, "ngIf"], ["matTooltip", "Lazer Measurement", "aria-hidden", "false", "aria-label", "Lazer Measurement", 1, "hud-button-icon", 3, "inline"], [3, "buttonDown", "buttonUp"], ["matTooltip", "Zoom In", "aria-hidden", "false", "aria-label", "Zoom In", 1, "hud-button-icon", 3, "inline"], ["matTooltip", "Switch Zoom Center On/Off", "aria-hidden", "false", "aria-label", "Switch Zoom Center On/Off", 1, "hud-button-icon", 3, "inline"], ["matTooltip", "Zoom Out", "aria-hidden", "false", "aria-label", "Zoom Out", 1, "hud-button-icon", 3, "inline"], ["matTooltip", "Auto Focus", "aria-hidden", "false", "aria-label", "Auto Focus", 1, "hud-button-icon", 3, "inline"], ["matTooltip", "Focus Near", "aria-hidden", "false", "aria-label", "Focus Near", 1, "hud-button-icon", 3, "inline"], ["matTooltip", "Focus Far", "aria-hidden", "false", "aria-label", "Focus Far", 1, "hud-button-icon", 3, "inline"], [3, "isChecked", "checkChange", 4, "ngIf"], ["matTooltip", "Start Recording", "aria-hidden", "false", "aria-label", "Start Recording", 1, "hud-button-icon", 3, "inline"], ["matTooltip", "Screenshot", "aria-hidden", "false", "aria-label", "Screenshot", 1, "hud-button-icon", 3, "inline"], ["matTooltip", "Switch to next camera", "aria-hidden", "false", "aria-label", "Switch to next camera", 1, "hud-button-icon", 3, "inline"], [3, "isChecked", "checkChange"], ["matTooltip", "Gyrostabilization", "aria-hidden", "false", "aria-label", "Gyrostabilization", 1, "hud-button-icon", 3, "inline"]], template: function HudUiComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, HudUiComponent_div_0_Template, 13, 8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, HudUiComponent_div_1_Template, 1, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, HudUiComponent_div_3_Template, 10, 6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, HudUiComponent_div_4_Template, 1, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isLeftToRight);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.isLeftToRight);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isLeftToRight);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.isLeftToRight);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _hud_lrf_button_hud_lrf_button_component__WEBPACK_IMPORTED_MODULE_2__.HudLrfButtonComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__.MatTooltip, _hud_button_hud_button_component__WEBPACK_IMPORTED_MODULE_3__.HudButtonComponent, _compass_compass_component__WEBPACK_IMPORTED_MODULE_4__.CompassComponent, _hud_check_hud_check_component__WEBPACK_IMPORTED_MODULE_5__.HudCheckComponent, _stick_stick_component__WEBPACK_IMPORTED_MODULE_6__.StickComponent], styles: [".spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.hud-column[_ngcontent-%COMP%] {\n  width: 200px;\n  display: flex;\n}\n\n.lrf-info-label[_ngcontent-%COMP%] {\n  color: white;\n  margin-left: auto;\n  margin-right: auto;\n  font-weight: bold;\n  min-height: 20px;\n  height: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh1ZC11aS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLE9BQUE7QUFBSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBQ0E7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBRUoiLCJmaWxlIjoiaHVkLXVpLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwYWNlclxyXG57XHJcbiAgICBmbGV4OjE7XHJcbn1cclxuLmh1ZC1jb2x1bW4ge1xyXG4gICAgd2lkdGg6MjAwcHg7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbn1cclxuLmxyZi1pbmZvLWxhYmVse1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBtYXJnaW4tbGVmdDphdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OmF1dG87XHJcbiAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgbWluLWhlaWdodDoyMHB4O1xyXG4gICAgaGVpZ2h0OjIwcHg7XHJcblxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 7142:
/*!*******************************************************************!*\
  !*** ./src/app/components/panel-camera/panel-camera.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelCameraComponent": () => (/* binding */ PanelCameraComponent)
/* harmony export */ });
/* harmony import */ var _materials_capabilities_double_value_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../materials/capabilities/double-value-type */ 3990);
/* harmony import */ var _materials_capabilities_switch_value_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../materials/capabilities/switch-value-type */ 2063);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_ui_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/ui.service */ 9846);
/* harmony import */ var _services_site_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/site.service */ 6633);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _async_slider_async_slider_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../async-slider/async-slider.component */ 7121);
/* harmony import */ var _async_toggle_group_async_toggle_group_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../async-toggle-group/async-toggle-group.component */ 708);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 7317);












function PanelCameraComponent_app_async_slider_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-async-slider", 14);
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("capability", ctx_r0.qualityCapability);
  }
}

function PanelCameraComponent_app_async_slider_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-async-slider", 15);
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("capability", ctx_r1.blackLevelCapability);
  }
}

function PanelCameraComponent_app_async_slider_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-async-slider", 16);
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("capability", ctx_r2.luminosityCapability);
  }
}

function PanelCameraComponent_app_async_slider_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-async-slider", 17);
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("capability", ctx_r3.gammaCapability);
  }
}

function PanelCameraComponent_app_async_toggle_group_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-async-toggle-group", 18);
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("capability", ctx_r4.exposureTimeModeCapability);
  }
}

function PanelCameraComponent_app_async_slider_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-async-slider", 19);
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("capability", ctx_r5.exposureTimeCapability);
  }
}

function PanelCameraComponent_app_async_toggle_group_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-async-toggle-group", 20);
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("capability", ctx_r6.gainModeCapability);
  }
}

function PanelCameraComponent_app_async_slider_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-async-slider", 21);
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("capability", ctx_r7.gainCapability);
  }
}

function PanelCameraComponent_app_async_toggle_group_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-async-toggle-group", 22);
  }

  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("capability", ctx_r8.whiteBalanceModeCapability);
  }
}

function PanelCameraComponent_app_async_slider_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-async-slider", 23);
  }

  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("capability", ctx_r9.whiteBalanceCapability);
  }
}

class PanelCameraComponent {
  constructor(uiService, siteService) {
    this.uiService = uiService;
    this.siteService = siteService;
    this.camera = undefined;
    this.qualityCapability = undefined;
    this.blackLevelCapability = undefined;
    this.exposureTimeModeCapability = undefined;
    this.exposureTimeCapability = undefined;
    this.gainModeCapability = undefined;
    this.gainCapability = undefined;
    this.gammaCapability = undefined;
    this.whiteBalanceModeCapability = undefined;
    this.whiteBalanceCapability = undefined;
    this.luminosityCapability = undefined;
    this.cameraSelectedSubscription = this.siteService.cameraSelectedSubject.subscribe(() => {
      this.camera = this.siteService.selectedCamera;
      this.updateVisibilityFlags();
      console.log("Current camera ", this.camera);
    });
  }

  updateVisibilityFlags() {
    if (this.camera != null) {
      this.qualityCapability = this.camera.getValueCapability(_materials_capabilities_double_value_type__WEBPACK_IMPORTED_MODULE_0__.DoubleValueType.Quality);
      if (this.qualityCapability != null) this.qualityCapability.beginEdit();
      this.blackLevelCapability = this.camera.getValueCapability(_materials_capabilities_double_value_type__WEBPACK_IMPORTED_MODULE_0__.DoubleValueType.BlackLevel);
      if (this.blackLevelCapability != null) this.blackLevelCapability.beginEdit();
      this.exposureTimeModeCapability = this.camera.getSwitchCapability(_materials_capabilities_switch_value_type__WEBPACK_IMPORTED_MODULE_1__.SwitchValueType.ExposureTimeMode);
      if (this.exposureTimeModeCapability != null) this.exposureTimeModeCapability.beginEdit();
      this.exposureTimeCapability = this.camera.getValueCapability(_materials_capabilities_double_value_type__WEBPACK_IMPORTED_MODULE_0__.DoubleValueType.ExposureTime);
      if (this.exposureTimeCapability != null) this.exposureTimeCapability.beginEdit();
      this.gainModeCapability = this.camera.getSwitchCapability(_materials_capabilities_switch_value_type__WEBPACK_IMPORTED_MODULE_1__.SwitchValueType.GainMode);
      if (this.gainModeCapability != null) this.gainModeCapability.beginEdit();
      this.gainCapability = this.camera.getValueCapability(_materials_capabilities_double_value_type__WEBPACK_IMPORTED_MODULE_0__.DoubleValueType.Gain);
      if (this.gainCapability != null) this.gainCapability.beginEdit();
      this.gammaCapability = this.camera.getValueCapability(_materials_capabilities_double_value_type__WEBPACK_IMPORTED_MODULE_0__.DoubleValueType.Gamma);
      if (this.gammaCapability != null) this.gammaCapability.beginEdit();
      this.whiteBalanceCapability = this.camera.getValueCapability(_materials_capabilities_double_value_type__WEBPACK_IMPORTED_MODULE_0__.DoubleValueType.WhiteBalance);
      if (this.whiteBalanceCapability != null) this.whiteBalanceCapability.beginEdit();
      this.whiteBalanceModeCapability = this.camera.getSwitchCapability(_materials_capabilities_switch_value_type__WEBPACK_IMPORTED_MODULE_1__.SwitchValueType.WhiteBalanceMode);
      if (this.whiteBalanceModeCapability != null) this.whiteBalanceModeCapability.beginEdit();
      this.luminosityCapability = this.camera.getValueCapability(_materials_capabilities_double_value_type__WEBPACK_IMPORTED_MODULE_0__.DoubleValueType.Luminosity);
      if (this.luminosityCapability != null) this.luminosityCapability.beginEdit();
    } else {
      this.gammaCapability = undefined;
      this.whiteBalanceCapability = undefined;
      this.whiteBalanceModeCapability = undefined;
      this.qualityCapability = undefined;
      this.blackLevelCapability = undefined;
      this.exposureTimeCapability = undefined;
      this.gainModeCapability = undefined;
      this.gainCapability = undefined;
      this.luminosityCapability = undefined;
    }
  }

  onCloseClick() {
    this.uiService.hidePanelCamera();
  }

  ngOnInit() {
    this.camera = this.siteService.selectedCamera;
    this.updateVisibilityFlags();
    console.log("Current camera ", this.camera);
  }

  ngOnDestroy() {
    this.cameraSelectedSubscription.unsubscribe();
  }

}

PanelCameraComponent.ɵfac = function PanelCameraComponent_Factory(t) {
  return new (t || PanelCameraComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_ui_service__WEBPACK_IMPORTED_MODULE_2__.UiService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_site_service__WEBPACK_IMPORTED_MODULE_3__.SiteService));
};

PanelCameraComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: PanelCameraComponent,
  selectors: [["app-panel-camera"]],
  decls: 23,
  vars: 10,
  consts: [[1, "card-login"], [1, "icon-title"], [1, "card-content-container"], ["displayName", "Quality", 3, "capability", 4, "ngIf"], ["displayName", "Black level", 3, "capability", 4, "ngIf"], ["displayName", "Luminosity", 3, "capability", 4, "ngIf"], ["displayName", "Gamma", 3, "capability", 4, "ngIf"], ["displayName", "Exposure Time Mode", 3, "capability", 4, "ngIf"], ["displayName", "Exposure Time", 3, "capability", 4, "ngIf"], ["displayName", "Gain Mode", 3, "capability", 4, "ngIf"], ["displayName", "Gain", 3, "capability", 4, "ngIf"], ["displayName", "White Balance Mode", 3, "capability", 4, "ngIf"], ["displayName", "White Balance", 3, "capability", 4, "ngIf"], ["mat-button", "", 1, "full-width", 3, "click"], ["displayName", "Quality", 3, "capability"], ["displayName", "Black level", 3, "capability"], ["displayName", "Luminosity", 3, "capability"], ["displayName", "Gamma", 3, "capability"], ["displayName", "Exposure Time Mode", 3, "capability"], ["displayName", "Exposure Time", 3, "capability"], ["displayName", "Gain Mode", 3, "capability"], ["displayName", "Gain", 3, "capability"], ["displayName", "White Balance Mode", 3, "capability"], ["displayName", "White Balance", 3, "capability"]],
  template: function PanelCameraComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-card", 0)(1, "mat-card-header")(2, "mat-card-title")(3, "mat-icon", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "camera_enhance");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Camera Advanced Parameters");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "mat-card-subtitle");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Be carefull with this settings");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "mat-card-content")(9, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, PanelCameraComponent_app_async_slider_10_Template, 1, 1, "app-async-slider", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, PanelCameraComponent_app_async_slider_11_Template, 1, 1, "app-async-slider", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, PanelCameraComponent_app_async_slider_12_Template, 1, 1, "app-async-slider", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, PanelCameraComponent_app_async_slider_13_Template, 1, 1, "app-async-slider", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, PanelCameraComponent_app_async_toggle_group_14_Template, 1, 1, "app-async-toggle-group", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, PanelCameraComponent_app_async_slider_15_Template, 1, 1, "app-async-slider", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, PanelCameraComponent_app_async_toggle_group_16_Template, 1, 1, "app-async-toggle-group", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, PanelCameraComponent_app_async_slider_17_Template, 1, 1, "app-async-slider", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, PanelCameraComponent_app_async_toggle_group_18_Template, 1, 1, "app-async-toggle-group", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, PanelCameraComponent_app_async_slider_19_Template, 1, 1, "app-async-slider", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "mat-card-actions")(21, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PanelCameraComponent_Template_button_click_21_listener() {
        return ctx.onCloseClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "Close");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.qualityCapability != null);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.blackLevelCapability != null);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.luminosityCapability != null);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.gammaCapability != null);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.exposureTimeModeCapability != null);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.exposureTimeCapability != null);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.gainModeCapability != null);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.gainCapability != null);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.whiteBalanceModeCapability != null);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.whiteBalanceCapability != null);
    }
  },
  directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardTitle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardContent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _async_slider_async_slider_component__WEBPACK_IMPORTED_MODULE_4__.AsyncSliderComponent, _async_toggle_group_async_toggle_group_component__WEBPACK_IMPORTED_MODULE_5__.AsyncToggleGroupComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton],
  styles: ["[_nghost-%COMP%] {\n  position: absolute;\n  top: 100px;\n  left: 100px;\n  width: 400px;\n  height: 600px;\n  z-index: 10000;\n}\n\n.camera-card[_ngcontent-%COMP%] {\n  position: relative;\n  width: 400px;\n  height: 600px;\n}\n\n.card-content-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.capability-container[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhbmVsLWNhbWVyYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUFDSjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFFRjs7QUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQUdKOztBQUFBO0VBQ0ksa0JBQUE7QUFHSiIsImZpbGUiOiJwYW5lbC1jYW1lcmEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgdG9wOjEwMHB4O1xyXG4gICAgbGVmdDoxMDBweDtcclxuICAgIHdpZHRoOjQwMHB4O1xyXG4gICAgaGVpZ2h0OjYwMHB4O1xyXG4gICAgei1pbmRleDoxMDAwMDtcclxufVxyXG4uY2FtZXJhLWNhcmQge1xyXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBoZWlnaHQ6IDYwMHB4O1xyXG59XHJcbi5jYXJkLWNvbnRlbnQtY29udGFpbmVye1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG59XHJcblxyXG4uY2FwYWJpbGl0eS1jb250YWluZXJ7XHJcbiAgICBtYXJnaW4tYm90dG9tOjhweDtcclxufVxyXG4iXX0= */"]
});

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
        if (this.siteService == null) {
            this.turretMoveSpeedCapability = undefined;
            return;
        }
        if (this.siteService.selectedUnit == null) {
            this.turretMoveSpeedCapability = undefined;
            return;
        }
        this.turretMoveSpeedCapability = this.siteService.selectedUnit.getMaterialCapability("Turret" /* Turret */, "TurretMoveSpeed" /* TurretMoveSpeed */);
    }
    ngOnInit() {
    }
    updateStickInfos() {
        if (this.lastSendAxisX != this.axisX || this.lastSendAxisY != this.axisY) {
            if (this.turretMoveSpeedCapability != null) {
                console.log("Call turretMoveSpeedCapability.moveSpeed " + this.axisX + " " + this.axisY);
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
                restOpacity: 1,
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
    } }, styles: ["[_nghost-%COMP%] {\n  width: 160px;\n  height: 160px;\n  margin-left: auto;\n  margin-right: auto;\n  background-repeat: no-repeat;\n  background-size: cover;\n  opacity: 0.8;\n  background-image: url(\"/assets/back-stick.svg\");\n}\n\n.stick-host[_ngcontent-%COMP%] {\n  position: relative;\n  width: 160px;\n  height: 160px;\n}\n\n.stick-host[_ngcontent-%COMP%]    > div.nipple[_ngcontent-%COMP%] {\n  position: relative !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0aWNrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSwrQ0FBQTtBQUNGOztBQUNBO0VBRUksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUNBO0VBQ0ksNkJBQUE7QUFFSiIsImZpbGUiOiJzdGljay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICB3aWR0aDogMTYwcHg7XHJcbiAgaGVpZ2h0OiAxNjBweDtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIG9wYWNpdHk6IDAuODtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2JhY2stc3RpY2suc3ZnXCIpO1xyXG59XHJcbi5zdGljay1ob3N0XHJcbntcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgd2lkdGg6MTYwcHg7XHJcbiAgICBoZWlnaHQ6MTYwcHg7XHJcbn1cclxuLnN0aWNrLWhvc3QgPiBkaXYubmlwcGxle1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmUgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"] });


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

/***/ 118:
/*!*************************************!*\
  !*** ./src/app/materials/camera.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Camera": () => (/* binding */ Camera)
/* harmony export */ });
class Camera {
    constructor(settingMaterial, site, unit, wsService, factory) {
        this.capabilities = [];
        this.id = settingMaterial.id;
        this.materials = [];
        this.site = site;
        this.unit = unit;
        this.wsService = wsService;
        this.materialType = "DayCamera" /* DayCamera */;
        this.displayName = settingMaterial.displayName;
        let settingCamera = settingMaterial;
        this.streamWidth = settingCamera.streamWidth;
        this.streamHeight = settingCamera.streamHeight;
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
    setState(state) {
        state.capabilities.forEach((valueState) => {
            let cap = this.capabilities.find((valueCap) => { return valueCap.id === valueState.id; });
            if (cap != null) {
                cap.setState(valueState);
            }
        });
        state.materials.forEach((valueState) => {
            let mat = this.materials.find((valueMat) => { return valueMat.id === valueState.id; });
            if (mat != null) {
                mat.setState(valueState);
            }
        });
    }
    getCapability(capabilityType) {
        let cap = this.capabilities.find((value) => { return value.capabilityType === capabilityType; });
        return cap;
    }
    hasCapability(capabilityType) {
        let cap = this.capabilities.find((value) => { return value.capabilityType === capabilityType; });
        return cap !== undefined;
    }
    getValueCapability(type) {
        return this.capabilities.find((val) => {
            return (val.capabilityType == "DoubleValue" /* DoubleValue */ && val.doubleValueType == type);
        });
    }
    getSwitchCapability(type) {
        let result = undefined;
        this.capabilities.forEach((val) => {
            if (val.capabilityType === "SwitchValue" /* SwitchValue */) {
                let cap = val;
                if (cap.switchValueType === type) {
                    result = cap;
                }
            }
        });
        return result;
    }
}


/***/ }),

/***/ 3975:
/*!****************************************************************************************!*\
  !*** ./src/app/materials/capabilities/camera/camera-auto-focus-one-push-capability.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraAutoFocusOnePushCapability": () => (/* binding */ CameraAutoFocusOnePushCapability)
/* harmony export */ });
class CameraAutoFocusOnePushCapability {
    constructor(settingCapability) {
        this.id = settingCapability.id;
        this.capabilityType = "CameraAutoFocusOnePush" /* CameraAutoFocusOnePush */;
    }
    autoFocusOnePush() {
        var _a;
        if (this.material == null)
            return;
        if (this.material.unit == null)
            return;
        (_a = this.material) === null || _a === void 0 ? void 0 : _a.wsService.cameraAutoFocusOnePush(this.material.unit.id, this.material.id);
    }
    setState(valueState) {
    }
}


/***/ }),

/***/ 1490:
/*!*******************************************************************************************!*\
  !*** ./src/app/materials/capabilities/camera/camera-zoom-absolute-position-capability.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraZoomAbsolutePositionCapability": () => (/* binding */ CameraZoomAbsolutePositionCapability)
/* harmony export */ });
class CameraZoomAbsolutePositionCapability {
    constructor(settingCapability) {
        this.zoomMultiplier = 1;
        this.horizontalFieldOfView = 25;
        this.id = settingCapability.id;
        this.capabilityType = "CameraZoomAbsolutePosition" /* CameraZoomAbsolutePosition */;
    }
    setState(valueState) {
        let state = valueState;
        this.zoomMultiplier = state.zoomMultiplier;
        this.horizontalFieldOfView = state.horizontalFieldOfView;
    }
}


/***/ }),

/***/ 7599:
/*!************************************************************************************!*\
  !*** ./src/app/materials/capabilities/camera/camera-zoom-continuous-capability.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraZoomContinuousCapability": () => (/* binding */ CameraZoomContinuousCapability)
/* harmony export */ });
class CameraZoomContinuousCapability {
    constructor(settingCapability) {
        this.id = settingCapability.id;
        this.capabilityType = "CameraZoomContinuous" /* CameraZoomContinuous */;
    }
    zoomOutStart() {
        var _a;
        if (this.material == null)
            return;
        if (this.material.unit == null)
            return;
        (_a = this.material) === null || _a === void 0 ? void 0 : _a.wsService.cameraZoomOutStart(this.material.unit.id, this.material.id);
    }
    zoomStop() {
        var _a;
        if (this.material == null)
            return;
        if (this.material.unit == null)
            return;
        (_a = this.material) === null || _a === void 0 ? void 0 : _a.wsService.cameraZoomStop(this.material.unit.id, this.material.id);
    }
    zoomInStart() {
        var _a;
        if (this.material == null)
            return;
        if (this.material.unit == null)
            return;
        (_a = this.material) === null || _a === void 0 ? void 0 : _a.wsService.cameraZoomInStart(this.material.unit.id, this.material.id);
    }
    setState(valueState) {
    }
}


/***/ }),

/***/ 7412:
/*!*******************************************************************!*\
  !*** ./src/app/materials/capabilities/double-value-capability.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DoubleValueCapability": () => (/* binding */ DoubleValueCapability)
/* harmony export */ });
class DoubleValueCapability {
    constructor(settingCapability) {
        this.minValue = 0;
        this.maxValue = 0;
        this.value = 0;
        this._editValue = 0;
        this.id = settingCapability.id;
        this.capabilityType = "DoubleValue" /* DoubleValue */;
        this.doubleValueType = settingCapability.doubleValueType;
        this.value = 0;
        this.minValue = settingCapability.minValue;
        this.maxValue = settingCapability.maxValue;
    }
    get editValue() {
        return this._editValue;
    }
    set editValue(val) {
        var _a;
        this._editValue = val;
        (_a = this.material) === null || _a === void 0 ? void 0 : _a.wsService.doubleValueSet(this.material.unit.id, this.material.id, this.id, this._editValue);
    }
    beginEdit() {
        this._editValue = this.value;
    }
    setState(valueState) {
        let state = valueState;
        this.value = state.value;
    }
}


/***/ }),

/***/ 3990:
/*!*************************************************************!*\
  !*** ./src/app/materials/capabilities/double-value-type.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DoubleValueType": () => (/* binding */ DoubleValueType)
/* harmony export */ });
var DoubleValueType;
(function (DoubleValueType) {
    DoubleValueType["Luminosity"] = "Luminosity";
    DoubleValueType["Contrast"] = "Contrast";
    DoubleValueType["Saturation"] = "Saturation";
    DoubleValueType["Quality"] = "Quality";
    DoubleValueType["BlackLevel"] = "BlackLevel";
    DoubleValueType["ExposureTime"] = "ExposureTime";
    DoubleValueType["Gain"] = "Gain";
    DoubleValueType["Gamma"] = "Gamma";
    DoubleValueType["WhiteBalance"] = "WhiteBalance";
})(DoubleValueType || (DoubleValueType = {}));


/***/ }),

/***/ 7856:
/*!************************************************************************************************!*\
  !*** ./src/app/materials/capabilities/lazer-measurement/lazer-measurement-shoot-capability.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LazerMeasurementShootCapability": () => (/* binding */ LazerMeasurementShootCapability)
/* harmony export */ });
class LazerMeasurementShootCapability {
    constructor(settingCapability) {
        this.isOn = false;
        this.id = settingCapability.id;
        this.capabilityType = "LazerMeasurementShootCapability" /* LazerMeasurementShootCapability */;
    }
    setState(valueState) {
        var _a;
        let state = valueState;
        this.isOn = state.isOn;
        this.error = state.error;
        this.lastShootDistance = state.lastShootDistance;
        if (state.lastShootDate == null) {
            this.lastShootDate = undefined;
        }
        else {
            this.lastShootDate = new Date((_a = state.lastShootDate) === null || _a === void 0 ? void 0 : _a.toString());
        }
    }
    shootMeasure() {
        var _a;
        if (this.material == null)
            return;
        if (this.material.unit == null)
            return;
        (_a = this.material) === null || _a === void 0 ? void 0 : _a.wsService.lazerMeasurementShoot(this.material.unit.id, this.material.id);
    }
}


/***/ }),

/***/ 8035:
/*!*******************************************************************!*\
  !*** ./src/app/materials/capabilities/switch-value-capability.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SwitchValueCapability": () => (/* binding */ SwitchValueCapability)
/* harmony export */ });
class SwitchValueCapability {
    constructor(settingCapability) {
        this.id = settingCapability.id;
        this.capabilityType = "SwitchValue" /* SwitchValue */;
        this.switchValueType = settingCapability.switchValueType;
        this.values = settingCapability.values;
        this.value = this.values[0];
        this._editValue = this.values[0];
    }
    get editValue() {
        return this._editValue;
    }
    set editValue(val) {
        var _a;
        this._editValue = val;
        (_a = this.material) === null || _a === void 0 ? void 0 : _a.wsService.switchValueSet(this.material.unit.id, this.material.id, this.id, this._editValue);
    }
    beginEdit() {
        this._editValue = this.value;
    }
    setState(valueState) {
        let state = valueState;
        let value = this.values.find((val) => {
            return val.value === state.value.value;
        });
        if (value != null) {
            this.value = value;
        }
    }
}


/***/ }),

/***/ 2063:
/*!*************************************************************!*\
  !*** ./src/app/materials/capabilities/switch-value-type.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SwitchValueType": () => (/* binding */ SwitchValueType)
/* harmony export */ });
var SwitchValueType;
(function (SwitchValueType) {
    SwitchValueType["ExposureTimeMode"] = "ExposureTimeMode";
    SwitchValueType["GainMode"] = "GainMode";
    SwitchValueType["WhiteBalanceMode"] = "WhiteBalanceMode";
})(SwitchValueType || (SwitchValueType = {}));


/***/ }),

/***/ 7767:
/*!**************************************************************************************!*\
  !*** ./src/app/materials/capabilities/turret/turret-absolute-position-capability.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TurretAbsolutePositionCapability": () => (/* binding */ TurretAbsolutePositionCapability)
/* harmony export */ });
class TurretAbsolutePositionCapability {
    constructor(settingCapability) {
        this.pan = 0;
        this.tilt = 0;
        this.id = settingCapability.id;
        this.capabilityType = "TurretAbsolutePosition" /* TurretAbsolutePosition */;
    }
    setState(valueState) {
        if (valueState.$type === 'TurretAbsolutePositionState') {
            let turretAbsolutePositionState = valueState;
            this.pan = turretAbsolutePositionState.pan;
            this.tilt = turretAbsolutePositionState.tilt;
        }
    }
}


/***/ }),

/***/ 911:
/*!**************************************************************************************!*\
  !*** ./src/app/materials/capabilities/turret/turret-gyrostabilization-capability.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TurretGyrostabilizationCapability": () => (/* binding */ TurretGyrostabilizationCapability)
/* harmony export */ });
class TurretGyrostabilizationCapability {
    constructor(settingCapability) {
        this.isGyrostabilizationEnabled = false;
        this.id = settingCapability.id;
        this.capabilityType = "TurretGyrostabilization" /* TurretGyrostabilization */;
    }
    setState(valueState) {
        let state = valueState;
        this.isGyrostabilizationEnabled = state.isEnabled;
    }
    setGyrostabilization(enabled) {
        var _a;
        if (this.material == null)
            return;
        if (this.material.unit == null)
            return;
        (_a = this.material) === null || _a === void 0 ? void 0 : _a.wsService.turretGyrostabilization(this.material.unit.id, this.material.id, enabled);
    }
}


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
        this.pan = 0;
        this.tilt = 0;
        this.id = settingCapability.id;
        this.capabilityType = "TurretMoveAbsolute" /* TurretMoveAbsolute */;
    }
    setState(valueState) {
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
        console.log("Call wsService.turretMoveSpeed " + axisX + " " + axisY);
        (_a = this.material) === null || _a === void 0 ? void 0 : _a.wsService.turretMoveSpeed(this.material.unit.id, this.material.id, axisX, axisY);
    }
    setState(valueState) {
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
    setState(valueState) {
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
/* harmony import */ var _camera__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./camera */ 118);

class DayCamera extends _camera__WEBPACK_IMPORTED_MODULE_0__.Camera {
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
/* harmony import */ var _capabilities_turret_turret_absolute_position_capability__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./capabilities/turret/turret-absolute-position-capability */ 7767);
/* harmony import */ var _capabilities_camera_camera_zoom_absolute_position_capability__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./capabilities/camera/camera-zoom-absolute-position-capability */ 1490);
/* harmony import */ var _capabilities_camera_camera_zoom_continuous_capability__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./capabilities/camera/camera-zoom-continuous-capability */ 7599);
/* harmony import */ var _capabilities_turret_turret_gyrostabilization_capability__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./capabilities/turret/turret-gyrostabilization-capability */ 911);
/* harmony import */ var _capabilities_camera_camera_auto_focus_one_push_capability__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./capabilities/camera/camera-auto-focus-one-push-capability */ 3975);
/* harmony import */ var _capabilities_lazer_measurement_lazer_measurement_shoot_capability__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./capabilities/lazer-measurement/lazer-measurement-shoot-capability */ 7856);
/* harmony import */ var _capabilities_double_value_capability__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./capabilities/double-value-capability */ 7412);
/* harmony import */ var _capabilities_switch_value_capability__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./capabilities/switch-value-capability */ 8035);

















class Factory {
    createMessage(data) {
        let typeName = data.$type;
        switch (typeName) {
            case 'WsGetStateResponse':
                let response = data;
                response.site.capabilities = response.site.capabilities.map((value) => { return this.mapCapabilityState(value); });
                response.site.units = response.site.units.map((value) => { return this.mapUnitState(value); });
                response.site.units.forEach((unitState) => {
                    unitState.capabilities = unitState.capabilities.map((value) => { return this.mapCapabilityState(value); });
                    unitState.materials = unitState.materials.map((value) => { return this.mapMaterialState(value); });
                    unitState.materials.forEach((valueMat) => {
                        this.recurseCreateMaterialState(valueMat);
                    });
                });
                return response;
            case "WsValidResponse":
                let validResponse = data;
                return validResponse;
                break;
            case "WsErrorResponse":
                let errorResponse = data;
                return errorResponse;
                break;
            default:
                console.error("No creation implemtation in facotry for type " + typeName);
                throw "No creation implemtation in facotry for type " + typeName;
        }
    }
    mapMaterialState(value) {
        return value;
    }
    mapUnitState(value) {
        return value;
    }
    mapCapabilityState(value) {
        if (value.$type === 'TurretAbsolutePositionState') {
            let state = value;
            return state;
        }
        return value;
    }
    recurseCreateMaterialState(materailState) {
        materailState.materials = materailState.materials.map((childMaterialState) => { return childMaterialState; });
        materailState.capabilities = materailState.capabilities.map((value) => { return this.mapCapabilityState(value); });
        materailState.materials.forEach((childMaterialState) => { this.recurseCreateMaterialState(childMaterialState); });
    }
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
            case "TurretAbsolutePosition" /* TurretAbsolutePosition */:
                capability = new _capabilities_turret_turret_absolute_position_capability__WEBPACK_IMPORTED_MODULE_9__.TurretAbsolutePositionCapability(settingCapability);
                break;
            case "CameraZoomAbsolutePosition" /* CameraZoomAbsolutePosition */:
                capability = new _capabilities_camera_camera_zoom_absolute_position_capability__WEBPACK_IMPORTED_MODULE_10__.CameraZoomAbsolutePositionCapability(settingCapability);
                break;
            case "CameraZoomContinuous" /* CameraZoomContinuous */:
                capability = new _capabilities_camera_camera_zoom_continuous_capability__WEBPACK_IMPORTED_MODULE_11__.CameraZoomContinuousCapability(settingCapability);
                break;
            case "TurretGyrostabilization" /* TurretGyrostabilization */:
                capability = new _capabilities_turret_turret_gyrostabilization_capability__WEBPACK_IMPORTED_MODULE_12__.TurretGyrostabilizationCapability(settingCapability);
                break;
            case "CameraAutoFocusOnePush" /* CameraAutoFocusOnePush */:
                capability = new _capabilities_camera_camera_auto_focus_one_push_capability__WEBPACK_IMPORTED_MODULE_13__.CameraAutoFocusOnePushCapability(settingCapability);
                break;
            case "LazerMeasurementShootCapability" /* LazerMeasurementShootCapability */:
                capability = new _capabilities_lazer_measurement_lazer_measurement_shoot_capability__WEBPACK_IMPORTED_MODULE_14__.LazerMeasurementShootCapability(settingCapability);
                break;
            case "DoubleValue" /* DoubleValue */:
                capability = new _capabilities_double_value_capability__WEBPACK_IMPORTED_MODULE_15__.DoubleValueCapability(settingCapability);
                break;
            case "SwitchValue" /* SwitchValue */:
                capability = new _capabilities_switch_value_capability__WEBPACK_IMPORTED_MODULE_16__.SwitchValueCapability(settingCapability);
                break;
        }
        if (capability == null) {
            console.error('Capability ' + settingCapability.capabilityType + ' not implemented !!!');
            throw 'Capability ' + settingCapability.capabilityType + ' not implemented !!!';
        }
        return capability;
    }
    createMaterial(settingMaterial, site, unit, wsService) {
        let material = null;
        switch (settingMaterial.materialType) {
            case "DayCamera" /* DayCamera */:
                material = new _day_camera__WEBPACK_IMPORTED_MODULE_0__.DayCamera(settingMaterial, site, unit, wsService, this);
                break;
            case "ThermalCamera" /* ThermalCamera */:
                material = new _thermal_camera__WEBPACK_IMPORTED_MODULE_1__.ThermalCamera(settingMaterial, site, unit, wsService, this);
                break;
            case "InertialMeasurement" /* InertialMeasurement */:
                material = new _inertial_measurement__WEBPACK_IMPORTED_MODULE_2__.InertialMeasurement(settingMaterial, site, unit, wsService, this);
                break;
            case "LazerMeasurement" /* LazerMeasurement */:
                material = new _lazer_measurement__WEBPACK_IMPORTED_MODULE_3__.LazerMeasurement(settingMaterial, site, unit, wsService, this);
                break;
            case "Unit" /* Unit */:
                material = new _unit__WEBPACK_IMPORTED_MODULE_4__.Unit(settingMaterial, site, wsService, this);
                break;
            case "Turret" /* Turret */:
                material = new _turret__WEBPACK_IMPORTED_MODULE_5__.Turret(settingMaterial, site, unit, wsService, this);
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
class InertialMeasurement {
    constructor(settingMaterial, site, unit, wsService, factory) {
        this.capabilities = [];
        this.id = settingMaterial.id;
        this.materials = [];
        this.wsService = wsService;
        this.site = site;
        this.unit = unit;
        this.materialType = "InertialMeasurement" /* InertialMeasurement */;
        this.displayName = settingMaterial.displayName;
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
    getCapability(capabilityType) {
        let cap = this.capabilities.find((value) => { return value.capabilityType === capabilityType; });
        return cap;
    }
    setState(state) {
        state.capabilities.forEach((valueState) => {
            let cap = this.capabilities.find((valueCap) => { return valueCap.id === valueState.id; });
            if (cap != null) {
                cap.setState(valueState);
            }
        });
        state.materials.forEach((valueState) => {
            let mat = this.materials.find((valueMat) => { return valueMat.id === valueState.id; });
            if (mat != null) {
                mat.setState(valueState);
            }
        });
    }
    hasCapability(capabilityType) {
        let cap = this.capabilities.find((value) => { return value.capabilityType === capabilityType; });
        return cap !== undefined;
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
class LazerMeasurement {
    constructor(settingMaterial, site, unit, wsService, factory) {
        this.capabilities = [];
        this.id = settingMaterial.id;
        this.materials = [];
        this.wsService = wsService;
        this.site = site;
        this.unit = unit;
        this.materialType = "LazerMeasurement" /* LazerMeasurement */;
        this.displayName = settingMaterial.displayName;
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
    getCapability(capabilityType) {
        let cap = this.capabilities.find((value) => { return value.capabilityType === capabilityType; });
        return cap;
    }
    setState(state) {
        state.capabilities.forEach((valueState) => {
            let cap = this.capabilities.find((valueCap) => { return valueCap.id === valueState.id; });
            if (cap != null) {
                cap.setState(valueState);
            }
        });
        state.materials.forEach((valueState) => {
            let mat = this.materials.find((valueMat) => { return valueMat.id === valueState.id; });
            if (mat != null) {
                mat.setState(valueState);
            }
        });
    }
    hasCapability(capabilityType) {
        let cap = this.capabilities.find((value) => { return value.capabilityType === capabilityType; });
        return cap !== undefined;
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
/* harmony import */ var _unit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unit */ 5396);

class Site {
    constructor(settingSite, wsService, factory) {
        this.units = [];
        this.capabilities = [];
        this.id = settingSite.id;
        settingSite.units.forEach((settingUnit) => {
            let unit = new _unit__WEBPACK_IMPORTED_MODULE_0__.Unit(settingUnit, this, wsService, factory);
            this.units.push(unit);
        });
        settingSite.capabilities.forEach((settingCapability) => {
            let capability = factory.createCapability(settingCapability);
            this.capabilities.push(capability);
        });
    }
    setState(siteState) {
        siteState.units.forEach((valueState) => {
            let unit = this.units.find((valueUnit) => { return valueUnit.id === valueState.id; });
            if (unit != null) {
                unit.setState(valueState);
            }
        });
        siteState.capabilities.forEach((valueState) => {
            let cap = this.capabilities.find((valueCap) => { return valueCap.id === valueState.id; });
            if (cap != null) {
                cap.setState(valueState);
            }
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
/* harmony import */ var _camera__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./camera */ 118);

class ThermalCamera extends _camera__WEBPACK_IMPORTED_MODULE_0__.Camera {
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
class Turret {
    constructor(settingMaterial, site, unit, wsService, factory) {
        this.capabilities = [];
        this.id = settingMaterial.id;
        this.materials = [];
        this.site = site;
        this.unit = unit;
        this.materialType = "Turret" /* Turret */;
        this.wsService = wsService;
        this.displayName = settingMaterial.displayName;
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
    hasCapability(capabilityType) {
        let cap = this.capabilities.find((value) => { return value.capabilityType === capabilityType; });
        return cap !== undefined;
    }
    getCapability(capabilityType) {
        let cap = this.capabilities.find((value) => { return value.capabilityType === capabilityType; });
        return cap;
    }
    setState(state) {
        state.capabilities.forEach((valueState) => {
            let cap = this.capabilities.find((valueCap) => { return valueCap.id === valueState.id; });
            if (cap != null) {
                cap.setState(valueState);
            }
        });
        state.materials.forEach((valueState) => {
            let mat = this.materials.find((valueMat) => { return valueMat.id === valueState.id; });
            if (mat != null) {
                mat.setState(valueState);
            }
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
class Unit {
    constructor(settingMaterial, site, wsService, factory) {
        this.capabilities = [];
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
    hasCapability(capabilityType) {
        let cap = this.capabilities.find((value) => { return value.capabilityType === capabilityType; });
        return cap !== undefined;
    }
    getCapability(capabilityType) {
        let cap = this.capabilities.find((value) => { return value.capabilityType === capabilityType; });
        return cap;
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
    setState(unitState) {
        unitState.capabilities.forEach((valueState) => {
            let cap = this.capabilities.find((valueCap) => { return valueCap.id === valueState.id; });
            if (cap != null) {
                cap.setState(valueState);
            }
        });
        unitState.materials.forEach((valueState) => {
            let mat = this.materials.find((valueMat) => { return valueMat.id === valueState.id; });
            if (mat != null) {
                mat.setState(valueState);
            }
        });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Base URL");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ConfigurationComponent_mat_card_16_div_7_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r31.selectedNode.item.baseUrl = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-form-field", 26)(10, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Stream URL");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ConfigurationComponent_mat_card_16_div_7_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r32.selectedNode.item.streamUrl = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r12.selectedNode.item.displayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r12.selectedNode.item.baseUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r12.selectedNode.item.streamUrl);
} }
function ConfigurationComponent_mat_card_16_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 35)(1, "mat-form-field", 26)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Display name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ConfigurationComponent_mat_card_16_div_8_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r33.selectedNode.item.displayName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-form-field", 26)(6, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Stream URL");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ConfigurationComponent_mat_card_16_div_8_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r34); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r35.selectedNode.item.streamUrl = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r13.selectedNode.item.displayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r13.selectedNode.item.streamUrl);
} }
function ConfigurationComponent_mat_card_16_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 24)(1, "mat-form-field", 26)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Display name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ConfigurationComponent_mat_card_16_div_9_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r36.selectedNode.item.displayName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r14.selectedNode.item.displayName);
} }
function ConfigurationComponent_mat_card_16_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 24)(1, "mat-form-field", 26)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Display name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ConfigurationComponent_mat_card_16_div_10_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r38.selectedNode.item.displayName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r15.selectedNode.item.displayName);
} }
function ConfigurationComponent_mat_card_16_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 24)(1, "mat-form-field", 26)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Display name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ConfigurationComponent_mat_card_16_div_11_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r40.selectedNode.item.displayName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r16.selectedNode.item.displayName);
} }
function ConfigurationComponent_mat_card_16_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 24)(1, "div", 25)(2, "mat-form-field", 26)(3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Max Pan Speed (\u00B0/sec)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ConfigurationComponent_mat_card_16_div_12_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r42.selectedNode.item.maxPanSpeed = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-form-field", 26)(7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Max Tilt Speed (\u00B0/sec)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ConfigurationComponent_mat_card_16_div_12_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r43); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r44.selectedNode.item.maxTiltSpeed = $event; });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, ConfigurationComponent_mat_card_16_div_7_Template, 13, 3, "div", 23);
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
ConfigurationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ConfigurationComponent, selectors: [["app-configuration"]], decls: 24, vars: 5, consts: [[1, "card-configuration"], [1, "icon-title"], [1, "display-flex", "flex-1"], [1, "configuration-tree-container"], [1, "configuration-tree", 3, "dataSource", "treeControl"], ["matTreeNodeToggle", "", 4, "matTreeNodeDef"], [4, "matTreeNodeDef", "matTreeNodeDefWhen"], ["vertical", "true"], [1, "flex-1", "display-flex"], ["class", "display-flex flex-1 mat-elevation-z0", 4, "ngIf"], [4, "ngIf"], [1, "display-flex"], ["mat-button", "", 1, "full-width", 3, "click"], ["matTreeNodeToggle", ""], ["mat-button", "", 3, "click"], [1, "mat-tree-node"], ["mat-icon-button", "", "matTreeNodeToggle", ""], [1, "mat-icon-rtl-mirror"], ["role", "group"], ["matTreeNodeOutlet", ""], [1, "display-flex", "flex-1", "mat-elevation-z0"], [1, "full-size", "flex-1", "display-flex"], ["class", "full-size display-flex", 4, "ngIf"], ["class", "full-size display-flex flex-dir-col", 4, "ngIf"], [1, "full-size", "display-flex"], [1, "flex-1", "display-flex", "flex-dir-col"], ["appearance", "fill", 1, "full-width"], ["name", "displayName", "matInput", "", 3, "ngModel", "ngModelChange"], [1, "flex-1"], [1, "flex-dir-row", "display-flex", "flex-align-center"], [1, "margin-4"], [1, "flex-1", "margin-4", 3, "value", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-button", "", 1, "flex-1", "margin-4", 3, "disabled", "click"], [3, "value"], [1, "full-size", "display-flex", "flex-dir-col"], ["name", "hardwareIP", "matInput", "", 3, "ngModel", "ngModelChange"], ["name", "hardwarePort", "matInput", "", 3, "ngModel", "ngModelChange"], ["name", "baseUrl", "matInput", "", 3, "ngModel", "ngModelChange"], ["name", "streamUrl", "matInput", "", 3, "ngModel", "ngModelChange"], ["name", "maxPanSpeed", "matInput", "", 3, "ngModel", "ngModelChange"], ["name", "maxTiltSpeed", "matInput", "", 3, "ngModel", "ngModelChange"]], template: function ConfigurationComponent_Template(rf, ctx) { if (rf & 1) {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/http.service */ 6858);
/* harmony import */ var _services_site_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/site.service */ 6633);
/* harmony import */ var _services_ui_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/ui.service */ 9846);
/* harmony import */ var _components_hud_stream_hud_stream_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/hud-stream/hud-stream.component */ 6444);
/* harmony import */ var _components_hud_ruller_pan_hud_ruller_pan_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/hud-ruller-pan/hud-ruller-pan.component */ 4824);
/* harmony import */ var _components_hud_ruller_tilt_hud_ruller_tilt_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/hud-ruller-tilt/hud-ruller-tilt.component */ 5988);
/* harmony import */ var _components_hud_status_hud_status_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/hud-status/hud-status.component */ 973);
/* harmony import */ var _components_hud_ui_hud_ui_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/hud-ui/hud-ui.component */ 8677);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _components_panel_camera_panel_camera_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/panel-camera/panel-camera.component */ 7142);











function HomeComponent_app_panel_camera_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "app-panel-camera");
} }
class HomeComponent {
    constructor(httpService, siteService, uiService) {
        this.httpService = httpService;
        this.siteService = siteService;
        this.uiService = uiService;
        this.isPanelCameraVisible = false;
        this.showPanelCameraSubscription = this.uiService.showPanelCameraSubject.subscribe((value) => { this.isPanelCameraVisible = value; });
    }
    ngOnDestroy() {
        this.showPanelCameraSubscription.unsubscribe();
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
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_http_service__WEBPACK_IMPORTED_MODULE_0__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_site_service__WEBPACK_IMPORTED_MODULE_1__.SiteService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_ui_service__WEBPACK_IMPORTED_MODULE_2__.UiService)); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 6, vars: 1, consts: [[1, "unselectable"], [4, "ngIf"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "app-hud-stream", 0)(1, "app-hud-ruller-pan", 0)(2, "app-hud-ruller-tilt", 0)(3, "app-hud-status", 0)(4, "app-hud-ui", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, HomeComponent_app_panel_camera_5_Template, 1, 0, "app-panel-camera", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.isPanelCameraVisible);
    } }, directives: [_components_hud_stream_hud_stream_component__WEBPACK_IMPORTED_MODULE_3__.HudStreamComponent, _components_hud_ruller_pan_hud_ruller_pan_component__WEBPACK_IMPORTED_MODULE_4__.HudRullerPanComponent, _components_hud_ruller_tilt_hud_ruller_tilt_component__WEBPACK_IMPORTED_MODULE_5__.HudRullerTiltComponent, _components_hud_status_hud_status_component__WEBPACK_IMPORTED_MODULE_6__.HudStatusComponent, _components_hud_ui_hud_ui_component__WEBPACK_IMPORTED_MODULE_7__.HudUiComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _components_panel_camera_panel_camera_component__WEBPACK_IMPORTED_MODULE_8__.PanelCameraComponent], styles: ["[_nghost-%COMP%] {\n  flex: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxPQUFBO0FBQ0oiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xyXG4gICAgZmxleDoxO1xyXG59XHJcbiJdfQ== */"] });


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
/* harmony import */ var C_Dev_Test_Seasense_Exavision_Seasense_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
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

    return (0,C_Dev_Test_Seasense_Exavision_Seasense_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var _materials_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../materials/factory */ 7568);
/* harmony import */ var _materials_site__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../materials/site */ 4753);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ws_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ws.service */ 4885);





class SiteService {
    constructor(wsService) {
        this.wsService = wsService;
        this.siteStateSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.siteLoadedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.unitSelectedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.cameraSelectedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.site = undefined;
        this.selectedUnit = undefined;
        this.selectedCamera = undefined;
        this.siteSetting = {
            id: 'none',
            capabilities: [],
            units: [],
            type: 'Site',
            displayName: 'Site'
        };
        this.wsService.siteStateSubject.subscribe((value) => { this.onStateChange(value); });
    }
    onStateChange(siteState) {
        if (this.site != null) {
            this.site.setState(siteState);
            this.siteStateSubject.next(this.site);
        }
    }
    selectNextCamera() {
        if (this.selectedUnit == null)
            return;
        if (this.selectedCamera == null)
            return;
        let cameraCount = 0;
        let cameras = [];
        this.selectedUnit.materials.forEach((value) => {
            if (value.materialType == "DayCamera" /* DayCamera */ || value.materialType == "ThermalCamera" /* ThermalCamera */) {
                cameraCount++;
                cameras.push(value);
            }
        });
        let index = cameras.indexOf(this.selectedCamera);
        if (index == -1)
            return;
        let targetIndex = index + 1;
        if (targetIndex > cameraCount - 1) {
            targetIndex = 0;
        }
        this.selectedCamera = cameras[targetIndex];
        this.cameraSelectedSubject.next(this.selectedCamera);
        return this.selectedCamera;
    }
    createSite(response) {
        this.site = undefined;
        if (response.site != null) {
            this.siteSetting = response.site;
            let factory = new _materials_factory__WEBPACK_IMPORTED_MODULE_0__.Factory();
            this.site = new _materials_site__WEBPACK_IMPORTED_MODULE_1__.Site(response.site, this.wsService, factory);
        }
        if (this.site != null && this.site.units.length > 0) {
            this.selectUnitById(this.site.units[0].id);
            if (this.selectedUnit != null) {
                let dayCamera = this.selectedUnit.getMaterial("DayCamera" /* DayCamera */);
                if (dayCamera != null) {
                    this.selectedCamera = dayCamera;
                }
                else {
                    let thermalCamera = this.selectedUnit.getMaterial("ThermalCamera" /* ThermalCamera */);
                    if (thermalCamera != null) {
                        this.selectedCamera = thermalCamera;
                    }
                    else {
                        this.selectedCamera = undefined;
                    }
                }
            }
        }
        this.siteLoadedSubject.next(this.site);
        this.unitSelectedSubject.next(this.selectedUnit);
        this.cameraSelectedSubject.next(this.selectedCamera);
    }
    selectUnitById(unitId) {
        var _a;
        let unit = (_a = this.site) === null || _a === void 0 ? void 0 : _a.units.find((value) => {
            return value.id == unitId;
        });
        this.selectedUnit = unit;
    }
}
SiteService.ɵfac = function SiteService_Factory(t) { return new (t || SiteService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ws_service__WEBPACK_IMPORTED_MODULE_2__.WsService)); };
SiteService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: SiteService, factory: SiteService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9846:
/*!****************************************!*\
  !*** ./src/app/services/ui.service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UiService": () => (/* binding */ UiService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class UiService {
    constructor() {
        this.showPipZoomSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.showPanelCameraSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.isPipZoomVisible = false;
        this.isPanelCameraVisible = false;
    }
    showHidePipZoom() {
        this.isPipZoomVisible = !this.isPipZoomVisible;
        this.showPipZoomSubject.next(this.isPipZoomVisible);
    }
    showPanelCamera() {
        this.isPanelCameraVisible = true;
        this.showPanelCameraSubject.next(this.isPanelCameraVisible);
    }
    hidePanelCamera() {
        this.isPanelCameraVisible = false;
        this.showPanelCameraSubject.next(this.isPanelCameraVisible);
    }
}
UiService.ɵfac = function UiService_Factory(t) { return new (t || UiService)(); };
UiService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UiService, factory: UiService.ɵfac, providedIn: 'root' });


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
/* harmony import */ var C_Dev_Test_Seasense_Exavision_Seasense_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ 2535);
/* harmony import */ var _materials_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../materials/factory */ 7568);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ 3071);






class WsService {
  constructor(userService) {
    this.userService = userService;
    this.siteStateSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
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
      var _ref = (0,C_Dev_Test_Seasense_Exavision_Seasense_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (event) {
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
    if (event.data != null) {
      let obj = JSON.parse(event.data);

      if (obj.$type != null) {
        let factory = new _materials_factory__WEBPACK_IMPORTED_MODULE_1__.Factory();
        let response = factory.createMessage(obj);

        if (response.$type === 'WsGetStateResponse') {
          this.siteStateSubject.next(response.site);
        }
      }
    }
  }

  wsClose(event) {
    return (0,C_Dev_Test_Seasense_Exavision_Seasense_Client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
      requestId: uuid__WEBPACK_IMPORTED_MODULE_4__["default"](),
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
      requestId: uuid__WEBPACK_IMPORTED_MODULE_4__["default"](),
      unitId: unitId,
      materialId: materialId,
      speed: {
        x: axisX,
        y: axisY
      },
      token: this.userService.token
    };
    console.log("wsService send turretMoveSpeed " + axisX + " " + axisY);
    let data = JSON.stringify(request);
    (_a = this.socket) === null || _a === void 0 ? void 0 : _a.send(data);
  }

  cameraZoomStop(unitId, materialId) {
    var _a;

    if (this.userService.token == null) return;
    let request = {
      $type: "WsCameraZoomStopRequest",
      unitId: unitId,
      requestId: uuid__WEBPACK_IMPORTED_MODULE_4__["default"](),
      materialId: materialId,
      token: this.userService.token
    };
    console.log("WebSocket send stopZoom");
    let data = JSON.stringify(request);
    (_a = this.socket) === null || _a === void 0 ? void 0 : _a.send(data);
  }

  cameraZoomInStart(unitId, materialId) {
    var _a;

    if (this.userService.token == null) return;
    let request = {
      $type: "WsCameraZoomInStartRequest",
      unitId: unitId,
      requestId: uuid__WEBPACK_IMPORTED_MODULE_4__["default"](),
      materialId: materialId,
      token: this.userService.token
    };
    console.log("WebSocket send cameraZoomInStart");
    let data = JSON.stringify(request);
    (_a = this.socket) === null || _a === void 0 ? void 0 : _a.send(data);
  }

  cameraZoomOutStart(unitId, materialId) {
    var _a;

    if (this.userService.token == null) return;
    let request = {
      $type: "WsCameraZoomOutStartRequest",
      unitId: unitId,
      requestId: uuid__WEBPACK_IMPORTED_MODULE_4__["default"](),
      materialId: materialId,
      token: this.userService.token
    };
    console.log("WebSocket send cameraZoomOutStart");
    let data = JSON.stringify(request);
    (_a = this.socket) === null || _a === void 0 ? void 0 : _a.send(data);
  }

  turretGyrostabilization(unitId, materialId, enabled) {
    var _a;

    if (this.userService.token == null) return;
    let request = {
      $type: "WsTurretGyrostabilizationRequest",
      unitId: unitId,
      requestId: uuid__WEBPACK_IMPORTED_MODULE_4__["default"](),
      materialId: materialId,
      token: this.userService.token,
      enabled: enabled
    };
    console.log("WebSocket send WsTurretGyrostabilizationRequest");
    let data = JSON.stringify(request);
    (_a = this.socket) === null || _a === void 0 ? void 0 : _a.send(data);
  }

  cameraAutoFocusOnePush(unitId, materialId) {
    var _a;

    if (this.userService.token == null) return;
    let request = {
      $type: "WsCameraAutoFocusOnePushRequest",
      unitId: unitId,
      requestId: uuid__WEBPACK_IMPORTED_MODULE_4__["default"](),
      materialId: materialId,
      token: this.userService.token
    };
    console.log("WebSocket send WsCameraAutoFocusOnePushRequest");
    let data = JSON.stringify(request);
    (_a = this.socket) === null || _a === void 0 ? void 0 : _a.send(data);
  }

  lazerMeasurementShoot(unitId, materialId) {
    var _a;

    if (this.userService.token == null) return;
    let request = {
      $type: "WsLazerMeasurementShootRequest",
      unitId: unitId,
      requestId: uuid__WEBPACK_IMPORTED_MODULE_4__["default"](),
      materialId: materialId,
      token: this.userService.token
    };
    console.log("WebSocket send WsLazerMeasurementShootRequest");
    let data = JSON.stringify(request);
    (_a = this.socket) === null || _a === void 0 ? void 0 : _a.send(data);
  }

  doubleValueSet(unitId, materialId, capabilityId, value) {
    var _a;

    if (this.userService.token == null) return;
    let request = {
      $type: "WsDoubleValueSetRequest",
      unitId: unitId,
      requestId: uuid__WEBPACK_IMPORTED_MODULE_4__["default"](),
      materialId: materialId,
      token: this.userService.token,
      capabilityId: capabilityId,
      value: value
    };
    console.log("WebSocket send WsDoubleValueSetRequest");
    let data = JSON.stringify(request);
    (_a = this.socket) === null || _a === void 0 ? void 0 : _a.send(data);
  }

  switchValueSet(unitId, materialId, capabilityId, value) {
    var _a;

    if (this.userService.token == null) return;
    let request = {
      $type: "WsSwitchValueSetRequest",
      unitId: unitId,
      requestId: uuid__WEBPACK_IMPORTED_MODULE_4__["default"](),
      materialId: materialId,
      token: this.userService.token,
      capabilityId: capabilityId,
      value: value.value
    };
    console.log("WebSocket send WsSwitchValueSetRequest");
    let data = JSON.stringify(request);
    (_a = this.socket) === null || _a === void 0 ? void 0 : _a.send(data);
  }

}

WsService.ɵfac = function WsService_Factory(t) {
  return new (t || WsService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService));
};

WsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
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