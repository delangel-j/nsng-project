(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[4],{

/***/ "./app/notificaciones/notificaciones-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificacionesRoutingModule", function() { return NotificacionesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _notificaciones_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/notificaciones/notificaciones.component.ts");



var routes = [
    { path: "", component: _notificaciones_component__WEBPACK_IMPORTED_MODULE_2__["NotificacionesComponent"] }
];
var NotificacionesRoutingModule = /** @class */ (function () {
    function NotificacionesRoutingModule() {
    }
    NotificacionesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forChild(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], NotificacionesRoutingModule);
    return NotificacionesRoutingModule;
}());



/***/ }),

/***/ "./app/notificaciones/notificaciones.component.css":
/***/ (function(module, exports) {

module.exports = ".titulo {\n    font-size: 20;\n}\n.subtitulo {\n    margin-top: 25;\n}\n"

/***/ }),

/***/ "./app/notificaciones/notificaciones.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar>\n    <!--\n    Use the NavigationButton as a side-drawer button in Android\n    because ActionItems are shown on the right side of the ActionBar\n    -->\n    <NavigationButton ios:visibility=\"collapsed\" icon=\"res://menu\" (tap)=\"onDrawerButtonTap()\"></NavigationButton>\n    <!--\n    Use the ActionItem for IOS with position set to left. Using the\n    NavigationButton as a side-drawer button in iOS is not possible,\n    because its function is to always navigate back in the application.\n    -->\n    <ActionItem icon=\"res://menu\" android:visibility=\"collapsed\" (tap)=\"onDrawerButtonTap()\"\n        ios.position=\"left\">\n    </ActionItem>\n    <Label text=\"Notificaciones\"></Label>\n</ActionBar>\n\n<ScrollView>\n    <StackLayout orientation=\"vertical\">\n       <GridLayout rows=\"30, 50,30, 50,30, 50,30, 50,30\" columns=\"20,280, auto\">\n\n           <Label textWrap=\"true\" row=\"1\"  col=\"1\" class=\"titulo\" text=\"Terapias\"> </Label>\n           <Switch row=\"1\" col=\"2\"  checked=\"false\" backgroundColor=\"green\"></Switch>\n           <Label row=\"1\" col=\"1\" class=\"subtitulo\" text=\"Recibe notificaciones diarias para ver vídeos\" > </Label>\n\n           <Label textWrap=\"true\" row=\"3\" col=\"1\" class=\"titulo\" text=\"Progreso del paciente\"> </Label>\n           <Switch row=\"3\" col=\"2\" checked=\"false\" backgroundColor=\"green\"></Switch>\n           <Label class=\"subtitulo\" row=\"3\" col=\"1\" text=\"Recibe notificaciones al recibir el avance\"> </Label>\n\n           <Label textWrap=\"true\" row=\"5\" col=\"1\" class=\"titulo\" text=\"Citas\" > </Label>\n           <Switch row=\"5\" col=\"2\" checked=\"false\" backgroundColor=\"green\"></Switch>\n           <Label  row=\"5\" col=\"1\" class=\"subtitulo\" text=\"Recibe más de una notificación\"> </Label>\n\n\n           <Label textWrap=\"true\" row=\"7\" col=\"1\" class=\"titulo\" text=\"Reportes de progreso\"> </Label>\n           <Switch row=\"7\" col=\"2\" checked=\"false\" backgroundColor=\"green\"></Switch>\n           <Label row=\"7\" col=\"1\" class=\"subtitulo\"  text=\"Recibe notificaciones al llegar el reporte\"> </Label>\n\n       </GridLayout>\n    </StackLayout>\n </ScrollView>\n"

/***/ }),

/***/ "./app/notificaciones/notificaciones.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificacionesComponent", function() { return NotificacionesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1__);


var NotificacionesComponent = /** @class */ (function () {
    function NotificacionesComponent() {
        // Use the component constructor to inject providers.
    }
    NotificacionesComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
    };
    NotificacionesComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1__["getRootView"]();
        sideDrawer.showDrawer();
    };
    NotificacionesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Notificaciones",
            template: __webpack_require__("./app/notificaciones/notificaciones.component.html"),
            styles: [__webpack_require__("./app/notificaciones/notificaciones.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotificacionesComponent);
    return NotificacionesComponent;
}());



/***/ }),

/***/ "./app/notificaciones/notificaciones.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificacionesModule", function() { return NotificacionesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/common.js");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _notificaciones_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/notificaciones/notificaciones-routing.module.ts");
/* harmony import */ var _notificaciones_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/notificaciones/notificaciones.component.ts");




var NotificacionesModule = /** @class */ (function () {
    function NotificacionesModule() {
    }
    NotificacionesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__["NativeScriptCommonModule"],
                _notificaciones_routing_module__WEBPACK_IMPORTED_MODULE_2__["NotificacionesRoutingModule"]
            ],
            declarations: [
                _notificaciones_component__WEBPACK_IMPORTED_MODULE_3__["NotificacionesComponent"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]
            ]
        })
    ], NotificacionesModule);
    return NotificacionesModule;
}());



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvbm90aWZpY2FjaW9uZXMvbm90aWZpY2FjaW9uZXMtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL25vdGlmaWNhY2lvbmVzL25vdGlmaWNhY2lvbmVzLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL25vdGlmaWNhY2lvbmVzL25vdGlmaWNhY2lvbmVzLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9ub3RpZmljYWNpb25lcy9ub3RpZmljYWNpb25lcy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL25vdGlmaWNhY2lvbmVzL25vdGlmaWNhY2lvbmVzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUM7QUFFOEI7QUFFRjtBQUVyRSxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLGlGQUF1QixFQUFFO0NBQ25ELENBQUM7QUFNRjtJQUFBO0lBQTJDLENBQUM7SUFBL0IsMkJBQTJCO1FBSnZDLDhEQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxvRkFBd0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEQsT0FBTyxFQUFFLENBQUMsb0ZBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLDJCQUEyQixDQUFJO0lBQUQsa0NBQUM7Q0FBQTtBQUFKOzs7Ozs7OztBQ2R4QywyQkFBMkIsb0JBQW9CLEdBQUcsY0FBYyxxQkFBcUIsR0FBRyxHOzs7Ozs7O0FDQXhGLDRzRTs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtEO0FBRUU7QUFPcEQ7SUFFSTtRQUNJLHFEQUFxRDtJQUN6RCxDQUFDO0lBRUQsMENBQVEsR0FBUjtRQUNJLHVDQUF1QztJQUMzQyxDQUFDO0lBRUQsbURBQWlCLEdBQWpCO1FBQ0ksSUFBTSxVQUFVLEdBQWtCLHdFQUFlLEVBQUUsQ0FBQztRQUNwRCxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQWJRLHVCQUF1QjtRQUxuQywrREFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixtRkFBOEM7O1NBRWpELENBQUM7O09BQ1csdUJBQXVCLENBY25DO0lBQUQsOEJBQUM7Q0FBQTtBQWRtQzs7Ozs7Ozs7O0FDVHBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJEO0FBQ1k7QUFFTztBQUNUO0FBY3JFO0lBQUE7SUFBb0MsQ0FBQztJQUF4QixvQkFBb0I7UUFaaEMsOERBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxvRkFBd0I7Z0JBQ3hCLDBGQUEyQjthQUM5QjtZQUNELFlBQVksRUFBRTtnQkFDVixpRkFBdUI7YUFDMUI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsOERBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLG9CQUFvQixDQUFJO0lBQUQsMkJBQUM7Q0FBQTtBQUFKIiwiZmlsZSI6IjQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IE5vdGlmaWNhY2lvbmVzQ29tcG9uZW50IH0gZnJvbSBcIi4vbm90aWZpY2FjaW9uZXMuY29tcG9uZW50XCI7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHsgcGF0aDogXCJcIiwgY29tcG9uZW50OiBOb3RpZmljYWNpb25lc0NvbXBvbmVudCB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgTm90aWZpY2FjaW9uZXNSb3V0aW5nTW9kdWxlIHsgfVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi50aXR1bG8ge1xcbiAgICBmb250LXNpemU6IDIwO1xcbn1cXG4uc3VidGl0dWxvIHtcXG4gICAgbWFyZ2luLXRvcDogMjU7XFxufVxcblwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXI+XFxuICAgIDwhLS1cXG4gICAgVXNlIHRoZSBOYXZpZ2F0aW9uQnV0dG9uIGFzIGEgc2lkZS1kcmF3ZXIgYnV0dG9uIGluIEFuZHJvaWRcXG4gICAgYmVjYXVzZSBBY3Rpb25JdGVtcyBhcmUgc2hvd24gb24gdGhlIHJpZ2h0IHNpZGUgb2YgdGhlIEFjdGlvbkJhclxcbiAgICAtLT5cXG4gICAgPE5hdmlnYXRpb25CdXR0b24gaW9zOnZpc2liaWxpdHk9XFxcImNvbGxhcHNlZFxcXCIgaWNvbj1cXFwicmVzOi8vbWVudVxcXCIgKHRhcCk9XFxcIm9uRHJhd2VyQnV0dG9uVGFwKClcXFwiPjwvTmF2aWdhdGlvbkJ1dHRvbj5cXG4gICAgPCEtLVxcbiAgICBVc2UgdGhlIEFjdGlvbkl0ZW0gZm9yIElPUyB3aXRoIHBvc2l0aW9uIHNldCB0byBsZWZ0LiBVc2luZyB0aGVcXG4gICAgTmF2aWdhdGlvbkJ1dHRvbiBhcyBhIHNpZGUtZHJhd2VyIGJ1dHRvbiBpbiBpT1MgaXMgbm90IHBvc3NpYmxlLFxcbiAgICBiZWNhdXNlIGl0cyBmdW5jdGlvbiBpcyB0byBhbHdheXMgbmF2aWdhdGUgYmFjayBpbiB0aGUgYXBwbGljYXRpb24uXFxuICAgIC0tPlxcbiAgICA8QWN0aW9uSXRlbSBpY29uPVxcXCJyZXM6Ly9tZW51XFxcIiBhbmRyb2lkOnZpc2liaWxpdHk9XFxcImNvbGxhcHNlZFxcXCIgKHRhcCk9XFxcIm9uRHJhd2VyQnV0dG9uVGFwKClcXFwiXFxuICAgICAgICBpb3MucG9zaXRpb249XFxcImxlZnRcXFwiPlxcbiAgICA8L0FjdGlvbkl0ZW0+XFxuICAgIDxMYWJlbCB0ZXh0PVxcXCJOb3RpZmljYWNpb25lc1xcXCI+PC9MYWJlbD5cXG48L0FjdGlvbkJhcj5cXG5cXG48U2Nyb2xsVmlldz5cXG4gICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCI+XFxuICAgICAgIDxHcmlkTGF5b3V0IHJvd3M9XFxcIjMwLCA1MCwzMCwgNTAsMzAsIDUwLDMwLCA1MCwzMFxcXCIgY29sdW1ucz1cXFwiMjAsMjgwLCBhdXRvXFxcIj5cXG5cXG4gICAgICAgICAgIDxMYWJlbCB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgcm93PVxcXCIxXFxcIiAgY29sPVxcXCIxXFxcIiBjbGFzcz1cXFwidGl0dWxvXFxcIiB0ZXh0PVxcXCJUZXJhcGlhc1xcXCI+IDwvTGFiZWw+XFxuICAgICAgICAgICA8U3dpdGNoIHJvdz1cXFwiMVxcXCIgY29sPVxcXCIyXFxcIiAgY2hlY2tlZD1cXFwiZmFsc2VcXFwiIGJhY2tncm91bmRDb2xvcj1cXFwiZ3JlZW5cXFwiPjwvU3dpdGNoPlxcbiAgICAgICAgICAgPExhYmVsIHJvdz1cXFwiMVxcXCIgY29sPVxcXCIxXFxcIiBjbGFzcz1cXFwic3VidGl0dWxvXFxcIiB0ZXh0PVxcXCJSZWNpYmUgbm90aWZpY2FjaW9uZXMgZGlhcmlhcyBwYXJhIHZlciB2w61kZW9zXFxcIiA+IDwvTGFiZWw+XFxuXFxuICAgICAgICAgICA8TGFiZWwgdGV4dFdyYXA9XFxcInRydWVcXFwiIHJvdz1cXFwiM1xcXCIgY29sPVxcXCIxXFxcIiBjbGFzcz1cXFwidGl0dWxvXFxcIiB0ZXh0PVxcXCJQcm9ncmVzbyBkZWwgcGFjaWVudGVcXFwiPiA8L0xhYmVsPlxcbiAgICAgICAgICAgPFN3aXRjaCByb3c9XFxcIjNcXFwiIGNvbD1cXFwiMlxcXCIgY2hlY2tlZD1cXFwiZmFsc2VcXFwiIGJhY2tncm91bmRDb2xvcj1cXFwiZ3JlZW5cXFwiPjwvU3dpdGNoPlxcbiAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJzdWJ0aXR1bG9cXFwiIHJvdz1cXFwiM1xcXCIgY29sPVxcXCIxXFxcIiB0ZXh0PVxcXCJSZWNpYmUgbm90aWZpY2FjaW9uZXMgYWwgcmVjaWJpciBlbCBhdmFuY2VcXFwiPiA8L0xhYmVsPlxcblxcbiAgICAgICAgICAgPExhYmVsIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiByb3c9XFxcIjVcXFwiIGNvbD1cXFwiMVxcXCIgY2xhc3M9XFxcInRpdHVsb1xcXCIgdGV4dD1cXFwiQ2l0YXNcXFwiID4gPC9MYWJlbD5cXG4gICAgICAgICAgIDxTd2l0Y2ggcm93PVxcXCI1XFxcIiBjb2w9XFxcIjJcXFwiIGNoZWNrZWQ9XFxcImZhbHNlXFxcIiBiYWNrZ3JvdW5kQ29sb3I9XFxcImdyZWVuXFxcIj48L1N3aXRjaD5cXG4gICAgICAgICAgIDxMYWJlbCAgcm93PVxcXCI1XFxcIiBjb2w9XFxcIjFcXFwiIGNsYXNzPVxcXCJzdWJ0aXR1bG9cXFwiIHRleHQ9XFxcIlJlY2liZSBtw6FzIGRlIHVuYSBub3RpZmljYWNpw7NuXFxcIj4gPC9MYWJlbD5cXG5cXG5cXG4gICAgICAgICAgIDxMYWJlbCB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgcm93PVxcXCI3XFxcIiBjb2w9XFxcIjFcXFwiIGNsYXNzPVxcXCJ0aXR1bG9cXFwiIHRleHQ9XFxcIlJlcG9ydGVzIGRlIHByb2dyZXNvXFxcIj4gPC9MYWJlbD5cXG4gICAgICAgICAgIDxTd2l0Y2ggcm93PVxcXCI3XFxcIiBjb2w9XFxcIjJcXFwiIGNoZWNrZWQ9XFxcImZhbHNlXFxcIiBiYWNrZ3JvdW5kQ29sb3I9XFxcImdyZWVuXFxcIj48L1N3aXRjaD5cXG4gICAgICAgICAgIDxMYWJlbCByb3c9XFxcIjdcXFwiIGNvbD1cXFwiMVxcXCIgY2xhc3M9XFxcInN1YnRpdHVsb1xcXCIgIHRleHQ9XFxcIlJlY2liZSBub3RpZmljYWNpb25lcyBhbCBsbGVnYXIgZWwgcmVwb3J0ZVxcXCI+IDwvTGFiZWw+XFxuXFxuICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgPC9TdGFja0xheW91dD5cXG4gPC9TY3JvbGxWaWV3PlxcblwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlclwiO1xuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIk5vdGlmaWNhY2lvbmVzXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ub3RpZmljYWNpb25lcy5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogWycuL25vdGlmaWNhY2lvbmVzLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOb3RpZmljYWNpb25lc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy8gVXNlIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IgdG8gaW5qZWN0IHByb3ZpZGVycy5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgLy8gSW5pdCB5b3VyIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGhlcmUuXG4gICAgfVxuXG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcbiAgICAgICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xuXG5pbXBvcnQgeyBOb3RpZmljYWNpb25lc1JvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9ub3RpZmljYWNpb25lcy1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgTm90aWZpY2FjaW9uZXNDb21wb25lbnQgfSBmcm9tIFwiLi9ub3RpZmljYWNpb25lcy5jb21wb25lbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcbiAgICAgICAgTm90aWZpY2FjaW9uZXNSb3V0aW5nTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgTm90aWZpY2FjaW9uZXNDb21wb25lbnRcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgTm90aWZpY2FjaW9uZXNNb2R1bGUgeyB9XG4iXSwic291cmNlUm9vdCI6IiJ9