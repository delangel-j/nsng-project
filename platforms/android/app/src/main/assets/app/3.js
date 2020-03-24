(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[3],{

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

module.exports = "<ActionBar>\n    <!--\n    Use the NavigationButton as a side-drawer button in Android\n    because ActionItems are shown on the right side of the ActionBar\n    -->\n    <NavigationButton ios:visibility=\"collapsed\" icon=\"res://menu\" (tap)=\"onDrawerButtonTap()\"></NavigationButton>\n    <!--\n    Use the ActionItem for IOS with position set to left. Using the\n    NavigationButton as a side-drawer button in iOS is not possible,\n    because its function is to always navigate back in the application.\n    -->\n    <ActionItem icon=\"res://menu\" android:visibility=\"collapsed\" (tap)=\"onDrawerButtonTap()\"\n        ios.position=\"left\">\n    </ActionItem>\n    <Label text=\"Notificaciones\"></Label>\n</ActionBar>\n\n<ScrollView orientation=\"vertical\">\n    <StackLayout orientation=\"vertical\">\n       <GridLayout rows=\"30, 50,30, 50,30, 50,30, 50,30\" columns=\"20,280, auto\">\n\n           <Label textWrap=\"true\" row=\"1\"  col=\"1\" class=\"titulo\" text=\"Terapias\"> </Label>\n           <Switch row=\"1\" col=\"2\"  checked=\"false\" backgroundColor=\"green\"></Switch>\n           <Label row=\"1\" col=\"1\" class=\"subtitulo\" text=\"Recibe notificaciones diarias para ver vídeos\" > </Label>\n\n           <Label textWrap=\"true\" row=\"3\" col=\"1\" class=\"titulo\" text=\"Progreso del paciente\"> </Label>\n           <Switch row=\"3\" col=\"2\" checked=\"false\" backgroundColor=\"green\"></Switch>\n           <Label class=\"subtitulo\" row=\"3\" col=\"1\" text=\"Recibe notificaciones al recibir el avance\"> </Label>\n\n           <Label textWrap=\"true\" row=\"5\" col=\"1\" class=\"titulo\" text=\"Citas\" > </Label>\n           <Switch row=\"5\" col=\"2\" checked=\"false\" backgroundColor=\"green\"></Switch>\n           <Label  row=\"5\" col=\"1\" class=\"subtitulo\" text=\"Recibe más de una notificación\"> </Label>\n\n\n           <Label textWrap=\"true\" row=\"7\" col=\"1\" class=\"titulo\" text=\"Reportes de progreso\"> </Label>\n           <Switch row=\"7\" col=\"2\" checked=\"false\" backgroundColor=\"green\"></Switch>\n           <Label row=\"7\" col=\"1\" class=\"subtitulo\"  text=\"Recibe notificaciones al llegar el reporte\"> </Label>\n\n       </GridLayout>\n    </StackLayout>\n </ScrollView>\n"

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvbm90aWZpY2FjaW9uZXMvbm90aWZpY2FjaW9uZXMtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL25vdGlmaWNhY2lvbmVzL25vdGlmaWNhY2lvbmVzLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL25vdGlmaWNhY2lvbmVzL25vdGlmaWNhY2lvbmVzLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9ub3RpZmljYWNpb25lcy9ub3RpZmljYWNpb25lcy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL25vdGlmaWNhY2lvbmVzL25vdGlmaWNhY2lvbmVzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUM7QUFFOEI7QUFFRjtBQUVyRSxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLGlGQUF1QixFQUFFO0NBQ25ELENBQUM7QUFNRjtJQUFBO0lBQTJDLENBQUM7SUFBL0IsMkJBQTJCO1FBSnZDLDhEQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxvRkFBd0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEQsT0FBTyxFQUFFLENBQUMsb0ZBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLDJCQUEyQixDQUFJO0lBQUQsa0NBQUM7Q0FBQTtBQUFKOzs7Ozs7OztBQ2R4QywyQkFBMkIsb0JBQW9CLEdBQUcsY0FBYyxxQkFBcUIsR0FBRyxHOzs7Ozs7O0FDQXhGLHF1RTs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtEO0FBRUU7QUFPcEQ7SUFFSTtRQUNJLHFEQUFxRDtJQUN6RCxDQUFDO0lBRUQsMENBQVEsR0FBUjtRQUNJLHVDQUF1QztJQUMzQyxDQUFDO0lBRUQsbURBQWlCLEdBQWpCO1FBQ0ksSUFBTSxVQUFVLEdBQWtCLHdFQUFlLEVBQUUsQ0FBQztRQUNwRCxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQWJRLHVCQUF1QjtRQUxuQywrREFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixtRkFBOEM7O1NBRWpELENBQUM7O09BQ1csdUJBQXVCLENBY25DO0lBQUQsOEJBQUM7Q0FBQTtBQWRtQzs7Ozs7Ozs7O0FDVHBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJEO0FBQ1k7QUFFTztBQUNUO0FBY3JFO0lBQUE7SUFBb0MsQ0FBQztJQUF4QixvQkFBb0I7UUFaaEMsOERBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxvRkFBd0I7Z0JBQ3hCLDBGQUEyQjthQUM5QjtZQUNELFlBQVksRUFBRTtnQkFDVixpRkFBdUI7YUFDMUI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsOERBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLG9CQUFvQixDQUFJO0lBQUQsMkJBQUM7Q0FBQTtBQUFKIiwiZmlsZSI6IjMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IE5vdGlmaWNhY2lvbmVzQ29tcG9uZW50IH0gZnJvbSBcIi4vbm90aWZpY2FjaW9uZXMuY29tcG9uZW50XCI7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHsgcGF0aDogXCJcIiwgY29tcG9uZW50OiBOb3RpZmljYWNpb25lc0NvbXBvbmVudCB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgTm90aWZpY2FjaW9uZXNSb3V0aW5nTW9kdWxlIHsgfVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi50aXR1bG8ge1xcbiAgICBmb250LXNpemU6IDIwO1xcbn1cXG4uc3VidGl0dWxvIHtcXG4gICAgbWFyZ2luLXRvcDogMjU7XFxufVxcblwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXI+XFxuICAgIDwhLS1cXG4gICAgVXNlIHRoZSBOYXZpZ2F0aW9uQnV0dG9uIGFzIGEgc2lkZS1kcmF3ZXIgYnV0dG9uIGluIEFuZHJvaWRcXG4gICAgYmVjYXVzZSBBY3Rpb25JdGVtcyBhcmUgc2hvd24gb24gdGhlIHJpZ2h0IHNpZGUgb2YgdGhlIEFjdGlvbkJhclxcbiAgICAtLT5cXG4gICAgPE5hdmlnYXRpb25CdXR0b24gaW9zOnZpc2liaWxpdHk9XFxcImNvbGxhcHNlZFxcXCIgaWNvbj1cXFwicmVzOi8vbWVudVxcXCIgKHRhcCk9XFxcIm9uRHJhd2VyQnV0dG9uVGFwKClcXFwiPjwvTmF2aWdhdGlvbkJ1dHRvbj5cXG4gICAgPCEtLVxcbiAgICBVc2UgdGhlIEFjdGlvbkl0ZW0gZm9yIElPUyB3aXRoIHBvc2l0aW9uIHNldCB0byBsZWZ0LiBVc2luZyB0aGVcXG4gICAgTmF2aWdhdGlvbkJ1dHRvbiBhcyBhIHNpZGUtZHJhd2VyIGJ1dHRvbiBpbiBpT1MgaXMgbm90IHBvc3NpYmxlLFxcbiAgICBiZWNhdXNlIGl0cyBmdW5jdGlvbiBpcyB0byBhbHdheXMgbmF2aWdhdGUgYmFjayBpbiB0aGUgYXBwbGljYXRpb24uXFxuICAgIC0tPlxcbiAgICA8QWN0aW9uSXRlbSBpY29uPVxcXCJyZXM6Ly9tZW51XFxcIiBhbmRyb2lkOnZpc2liaWxpdHk9XFxcImNvbGxhcHNlZFxcXCIgKHRhcCk9XFxcIm9uRHJhd2VyQnV0dG9uVGFwKClcXFwiXFxuICAgICAgICBpb3MucG9zaXRpb249XFxcImxlZnRcXFwiPlxcbiAgICA8L0FjdGlvbkl0ZW0+XFxuICAgIDxMYWJlbCB0ZXh0PVxcXCJOb3RpZmljYWNpb25lc1xcXCI+PC9MYWJlbD5cXG48L0FjdGlvbkJhcj5cXG5cXG48U2Nyb2xsVmlldyBvcmllbnRhdGlvbj1cXFwidmVydGljYWxcXFwiPlxcbiAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcInZlcnRpY2FsXFxcIj5cXG4gICAgICAgPEdyaWRMYXlvdXQgcm93cz1cXFwiMzAsIDUwLDMwLCA1MCwzMCwgNTAsMzAsIDUwLDMwXFxcIiBjb2x1bW5zPVxcXCIyMCwyODAsIGF1dG9cXFwiPlxcblxcbiAgICAgICAgICAgPExhYmVsIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiByb3c9XFxcIjFcXFwiICBjb2w9XFxcIjFcXFwiIGNsYXNzPVxcXCJ0aXR1bG9cXFwiIHRleHQ9XFxcIlRlcmFwaWFzXFxcIj4gPC9MYWJlbD5cXG4gICAgICAgICAgIDxTd2l0Y2ggcm93PVxcXCIxXFxcIiBjb2w9XFxcIjJcXFwiICBjaGVja2VkPVxcXCJmYWxzZVxcXCIgYmFja2dyb3VuZENvbG9yPVxcXCJncmVlblxcXCI+PC9Td2l0Y2g+XFxuICAgICAgICAgICA8TGFiZWwgcm93PVxcXCIxXFxcIiBjb2w9XFxcIjFcXFwiIGNsYXNzPVxcXCJzdWJ0aXR1bG9cXFwiIHRleHQ9XFxcIlJlY2liZSBub3RpZmljYWNpb25lcyBkaWFyaWFzIHBhcmEgdmVyIHbDrWRlb3NcXFwiID4gPC9MYWJlbD5cXG5cXG4gICAgICAgICAgIDxMYWJlbCB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgcm93PVxcXCIzXFxcIiBjb2w9XFxcIjFcXFwiIGNsYXNzPVxcXCJ0aXR1bG9cXFwiIHRleHQ9XFxcIlByb2dyZXNvIGRlbCBwYWNpZW50ZVxcXCI+IDwvTGFiZWw+XFxuICAgICAgICAgICA8U3dpdGNoIHJvdz1cXFwiM1xcXCIgY29sPVxcXCIyXFxcIiBjaGVja2VkPVxcXCJmYWxzZVxcXCIgYmFja2dyb3VuZENvbG9yPVxcXCJncmVlblxcXCI+PC9Td2l0Y2g+XFxuICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcInN1YnRpdHVsb1xcXCIgcm93PVxcXCIzXFxcIiBjb2w9XFxcIjFcXFwiIHRleHQ9XFxcIlJlY2liZSBub3RpZmljYWNpb25lcyBhbCByZWNpYmlyIGVsIGF2YW5jZVxcXCI+IDwvTGFiZWw+XFxuXFxuICAgICAgICAgICA8TGFiZWwgdGV4dFdyYXA9XFxcInRydWVcXFwiIHJvdz1cXFwiNVxcXCIgY29sPVxcXCIxXFxcIiBjbGFzcz1cXFwidGl0dWxvXFxcIiB0ZXh0PVxcXCJDaXRhc1xcXCIgPiA8L0xhYmVsPlxcbiAgICAgICAgICAgPFN3aXRjaCByb3c9XFxcIjVcXFwiIGNvbD1cXFwiMlxcXCIgY2hlY2tlZD1cXFwiZmFsc2VcXFwiIGJhY2tncm91bmRDb2xvcj1cXFwiZ3JlZW5cXFwiPjwvU3dpdGNoPlxcbiAgICAgICAgICAgPExhYmVsICByb3c9XFxcIjVcXFwiIGNvbD1cXFwiMVxcXCIgY2xhc3M9XFxcInN1YnRpdHVsb1xcXCIgdGV4dD1cXFwiUmVjaWJlIG3DoXMgZGUgdW5hIG5vdGlmaWNhY2nDs25cXFwiPiA8L0xhYmVsPlxcblxcblxcbiAgICAgICAgICAgPExhYmVsIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiByb3c9XFxcIjdcXFwiIGNvbD1cXFwiMVxcXCIgY2xhc3M9XFxcInRpdHVsb1xcXCIgdGV4dD1cXFwiUmVwb3J0ZXMgZGUgcHJvZ3Jlc29cXFwiPiA8L0xhYmVsPlxcbiAgICAgICAgICAgPFN3aXRjaCByb3c9XFxcIjdcXFwiIGNvbD1cXFwiMlxcXCIgY2hlY2tlZD1cXFwiZmFsc2VcXFwiIGJhY2tncm91bmRDb2xvcj1cXFwiZ3JlZW5cXFwiPjwvU3dpdGNoPlxcbiAgICAgICAgICAgPExhYmVsIHJvdz1cXFwiN1xcXCIgY29sPVxcXCIxXFxcIiBjbGFzcz1cXFwic3VidGl0dWxvXFxcIiAgdGV4dD1cXFwiUmVjaWJlIG5vdGlmaWNhY2lvbmVzIGFsIGxsZWdhciBlbCByZXBvcnRlXFxcIj4gPC9MYWJlbD5cXG5cXG4gICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICA8L1N0YWNrTGF5b3V0PlxcbiA8L1Njcm9sbFZpZXc+XFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiTm90aWZpY2FjaW9uZXNcIixcbiAgICB0ZW1wbGF0ZVVybDogXCIuL25vdGlmaWNhY2lvbmVzLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbJy4vbm90aWZpY2FjaW9uZXMuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIE5vdGlmaWNhY2lvbmVzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyBVc2UgdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvciB0byBpbmplY3QgcHJvdmlkZXJzLlxuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICAvLyBJbml0IHlvdXIgY29tcG9uZW50IHByb3BlcnRpZXMgaGVyZS5cbiAgICB9XG5cbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgc2lkZURyYXdlciA9IDxSYWRTaWRlRHJhd2VyPmFwcC5nZXRSb290VmlldygpO1xuICAgICAgICBzaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XG5cbmltcG9ydCB7IE5vdGlmaWNhY2lvbmVzUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL25vdGlmaWNhY2lvbmVzLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBOb3RpZmljYWNpb25lc0NvbXBvbmVudCB9IGZyb20gXCIuL25vdGlmaWNhY2lvbmVzLmNvbXBvbmVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxuICAgICAgICBOb3RpZmljYWNpb25lc1JvdXRpbmdNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBOb3RpZmljYWNpb25lc0NvbXBvbmVudFxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBOb3RpZmljYWNpb25lc01vZHVsZSB7IH1cbiJdLCJzb3VyY2VSb290IjoiIn0=