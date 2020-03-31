(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[5],{

/***/ "./app/shared/terapia/terapia.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Terapia", function() { return Terapia; });
var Terapia = /** @class */ (function () {
    function Terapia() {
    }
    return Terapia;
}());



/***/ }),

/***/ "./app/terapias/terapias-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerapiasRoutingModule", function() { return TerapiasRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _terapias_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/terapias/terapias.component.ts");



var routes = [
    { path: "", component: _terapias_component__WEBPACK_IMPORTED_MODULE_2__["TerapiasComponent"] }
];
var TerapiasRoutingModule = /** @class */ (function () {
    function TerapiasRoutingModule() {
    }
    TerapiasRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forChild(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], TerapiasRoutingModule);
    return TerapiasRoutingModule;
}());



/***/ }),

/***/ "./app/terapias/terapias.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar>\n    <!--\n    Use the NavigationButton as a side-drawer button in Android\n    because ActionItems are shown on the right side of the ActionBar\n    -->\n    <NavigationButton ios:visibility=\"collapsed\" icon=\"res://menu\" (tap)=\"onDrawerButtonTap()\"></NavigationButton>\n    <!--\n    Use the ActionItem for IOS with position set to left. Using the\n    NavigationButton as a side-drawer button in iOS is not possible,\n    because its function is to always navigate back in the application.\n    -->\n    <ActionItem icon=\"res://menu\" android:visibility=\"collapsed\" (tap)=\"onDrawerButtonTap()\"\n        ios.position=\"left\">\n    </ActionItem>\n    <Label text=\"Terapias\"></Label>\n</ActionBar>\n\n<ListView [items]=\"terapias\" iosEstimatedRowHeight=\"65\" (tap)=\"onSelect($event)\">\n    <ng-template let-terapia=\"item\" let-i=\"index\">\n        <GridLayout rows=\"40,auto\" columns=\"50,*\">\n            <Image [src]=\"terapia.img\"></Image>\n            <Label [(ngModel)]=\"prueba\" [text]=\"terapia.terapia\" row=\"0\" col=\"1\"></Label>\n        </GridLayout>\n    </ng-template>\n</ListView>\n"

/***/ }),

/***/ "./app/terapias/terapias.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerapiasComponent", function() { return TerapiasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_shared_terapia_terapia_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/shared/terapia/terapia.model.ts");



var TerapiasComponent = /** @class */ (function () {
    function TerapiasComponent() {
        this.prueba = '';
        this.terapias = [
            {
                idTerapia: 1,
                terapia: "Respiración y relajación",
                img: "~/images/respiracion.jpg"
            },
            {
                idTerapia: 2,
                terapia: "Prefonatorios",
                img: "~/images/prefonatorios.jpg"
            },
            {
                idTerapia: 3,
                terapia: "Praxias orofaciales",
                img: "~/images/praxias.jpg"
            },
            {
                terapia: "Ejercicios de fonemas",
                img: "~/images/fonemas.jpg"
            }
        ];
        this.terapia = new _app_shared_terapia_terapia_model__WEBPACK_IMPORTED_MODULE_2__["Terapia"]();
    }
    TerapiasComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
    };
    TerapiasComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1__["getRootView"]();
        sideDrawer.showDrawer();
    };
    TerapiasComponent.prototype.onSelect = function (args) {
    };
    TerapiasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Terapias",
            template: __webpack_require__("./app/terapias/terapias.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], TerapiasComponent);
    return TerapiasComponent;
}());



/***/ }),

/***/ "./app/terapias/terapias.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerapiasModule", function() { return TerapiasModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/common.js");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _terapias_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/terapias/terapias-routing.module.ts");
/* harmony import */ var _terapias_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/terapias/terapias.component.ts");




var TerapiasModule = /** @class */ (function () {
    function TerapiasModule() {
    }
    TerapiasModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__["NativeScriptCommonModule"],
                _terapias_routing_module__WEBPACK_IMPORTED_MODULE_2__["TerapiasRoutingModule"]
            ],
            declarations: [
                _terapias_component__WEBPACK_IMPORTED_MODULE_3__["TerapiasComponent"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]
            ]
        })
    ], TerapiasModule);
    return TerapiasModule;
}());



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvc2hhcmVkL3RlcmFwaWEvdGVyYXBpYS5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvdGVyYXBpYXMvdGVyYXBpYXMtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3RlcmFwaWFzL3RlcmFwaWFzLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC90ZXJhcGlhcy90ZXJhcGlhcy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3RlcmFwaWFzL3RlcmFwaWFzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFBO0FBQUE7SUFBQTtJQVFBLENBQUM7SUFBRCxjQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7OztBQ1JEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5QztBQUU4QjtBQUVkO0FBRXpELElBQU0sTUFBTSxHQUFXO0lBQ25CLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUscUVBQWlCLEVBQUU7Q0FDN0MsQ0FBQztBQU1GO0lBQUE7SUFBcUMsQ0FBQztJQUF6QixxQkFBcUI7UUFKakMsOERBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLG9GQUF3QixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwRCxPQUFPLEVBQUUsQ0FBQyxvRkFBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1cscUJBQXFCLENBQUk7SUFBRCw0QkFBQztDQUFBO0FBQUo7Ozs7Ozs7O0FDZGxDLGdvQzs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0Q7QUFFRTtBQUNRO0FBUTVEO0lBMEJJO1FBeEJBLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFFWixhQUFRLEdBQUc7WUFDUDtnQkFDSSxTQUFTLEVBQUUsQ0FBQztnQkFDWixPQUFPLEVBQUUsMEJBQTBCO2dCQUNuQyxHQUFHLEVBQUUsMEJBQTBCO2FBQ2xDO1lBQ0Q7Z0JBQ0ksU0FBUyxFQUFFLENBQUM7Z0JBQ1osT0FBTyxFQUFFLGVBQWU7Z0JBQ3hCLEdBQUcsRUFBRSw0QkFBNEI7YUFDcEM7WUFDRDtnQkFDSSxTQUFTLEVBQUUsQ0FBQztnQkFDWixPQUFPLEVBQUUscUJBQXFCO2dCQUM5QixHQUFHLEVBQUUsc0JBQXNCO2FBQzlCO1lBQ0Q7Z0JBQ0ksT0FBTyxFQUFFLHVCQUF1QjtnQkFDaEMsR0FBRyxFQUFFLHNCQUFzQjthQUM5QjtTQUNKO1FBR0csSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLHlFQUFPLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBRUQsb0NBQVEsR0FBUjtRQUNJLHVDQUF1QztJQUMzQyxDQUFDO0lBRUQsNkNBQWlCLEdBQWpCO1FBQ0ksSUFBTSxVQUFVLEdBQWtCLHdFQUFlLEVBQUUsQ0FBQztRQUNwRCxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELG9DQUFRLEdBQVIsVUFBUyxJQUFtQjtJQUc1QixDQUFDO0lBMUNRLGlCQUFpQjtRQUo3QiwrREFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsdUVBQXdDO1NBQzNDLENBQUM7O09BQ1csaUJBQWlCLENBMkM3QjtJQUFELHdCQUFDO0NBQUE7QUEzQzZCOzs7Ozs7Ozs7QUNYOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkQ7QUFDWTtBQUVMO0FBQ1Q7QUFjekQ7SUFBQTtJQUE4QixDQUFDO0lBQWxCLGNBQWM7UUFaMUIsOERBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxvRkFBd0I7Z0JBQ3hCLDhFQUFxQjthQUN4QjtZQUNELFlBQVksRUFBRTtnQkFDVixxRUFBaUI7YUFDcEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsOERBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLGNBQWMsQ0FBSTtJQUFELHFCQUFDO0NBQUE7QUFBSiIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFRlcmFwaWEge1xuICAgICAgICBpZFRlcmFwaWE6IG51bWJlcjtcbiAgICAgICAgZGVzY3JpcGNpb246IHN0cmluZztcbiAgICAgICAgZW5sYWNlOiBzdHJpbmc7XG4gICAgICAgIGltYWdlbjogc3RyaW5nO1xuICAgICAgICBpZEZvbmVtYTogbnVtYmVyO1xuXG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgVGVyYXBpYXNDb21wb25lbnQgfSBmcm9tIFwiLi90ZXJhcGlhcy5jb21wb25lbnRcIjtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiBcIlwiLCBjb21wb25lbnQ6IFRlcmFwaWFzQ29tcG9uZW50IH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBUZXJhcGlhc1JvdXRpbmdNb2R1bGUgeyB9XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEFjdGlvbkJhcj5cXG4gICAgPCEtLVxcbiAgICBVc2UgdGhlIE5hdmlnYXRpb25CdXR0b24gYXMgYSBzaWRlLWRyYXdlciBidXR0b24gaW4gQW5kcm9pZFxcbiAgICBiZWNhdXNlIEFjdGlvbkl0ZW1zIGFyZSBzaG93biBvbiB0aGUgcmlnaHQgc2lkZSBvZiB0aGUgQWN0aW9uQmFyXFxuICAgIC0tPlxcbiAgICA8TmF2aWdhdGlvbkJ1dHRvbiBpb3M6dmlzaWJpbGl0eT1cXFwiY29sbGFwc2VkXFxcIiBpY29uPVxcXCJyZXM6Ly9tZW51XFxcIiAodGFwKT1cXFwib25EcmF3ZXJCdXR0b25UYXAoKVxcXCI+PC9OYXZpZ2F0aW9uQnV0dG9uPlxcbiAgICA8IS0tXFxuICAgIFVzZSB0aGUgQWN0aW9uSXRlbSBmb3IgSU9TIHdpdGggcG9zaXRpb24gc2V0IHRvIGxlZnQuIFVzaW5nIHRoZVxcbiAgICBOYXZpZ2F0aW9uQnV0dG9uIGFzIGEgc2lkZS1kcmF3ZXIgYnV0dG9uIGluIGlPUyBpcyBub3QgcG9zc2libGUsXFxuICAgIGJlY2F1c2UgaXRzIGZ1bmN0aW9uIGlzIHRvIGFsd2F5cyBuYXZpZ2F0ZSBiYWNrIGluIHRoZSBhcHBsaWNhdGlvbi5cXG4gICAgLS0+XFxuICAgIDxBY3Rpb25JdGVtIGljb249XFxcInJlczovL21lbnVcXFwiIGFuZHJvaWQ6dmlzaWJpbGl0eT1cXFwiY29sbGFwc2VkXFxcIiAodGFwKT1cXFwib25EcmF3ZXJCdXR0b25UYXAoKVxcXCJcXG4gICAgICAgIGlvcy5wb3NpdGlvbj1cXFwibGVmdFxcXCI+XFxuICAgIDwvQWN0aW9uSXRlbT5cXG4gICAgPExhYmVsIHRleHQ9XFxcIlRlcmFwaWFzXFxcIj48L0xhYmVsPlxcbjwvQWN0aW9uQmFyPlxcblxcbjxMaXN0VmlldyBbaXRlbXNdPVxcXCJ0ZXJhcGlhc1xcXCIgaW9zRXN0aW1hdGVkUm93SGVpZ2h0PVxcXCI2NVxcXCIgKHRhcCk9XFxcIm9uU2VsZWN0KCRldmVudClcXFwiPlxcbiAgICA8bmctdGVtcGxhdGUgbGV0LXRlcmFwaWE9XFxcIml0ZW1cXFwiIGxldC1pPVxcXCJpbmRleFxcXCI+XFxuICAgICAgICA8R3JpZExheW91dCByb3dzPVxcXCI0MCxhdXRvXFxcIiBjb2x1bW5zPVxcXCI1MCwqXFxcIj5cXG4gICAgICAgICAgICA8SW1hZ2UgW3NyY109XFxcInRlcmFwaWEuaW1nXFxcIj48L0ltYWdlPlxcbiAgICAgICAgICAgIDxMYWJlbCBbKG5nTW9kZWwpXT1cXFwicHJ1ZWJhXFxcIiBbdGV4dF09XFxcInRlcmFwaWEudGVyYXBpYVxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjFcXFwiPjwvTGFiZWw+XFxuICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgIDwvbmctdGVtcGxhdGU+XFxuPC9MaXN0Vmlldz5cXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIjtcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xuaW1wb3J0IHsgVGVyYXBpYSB9IGZyb20gJ34vYXBwL3NoYXJlZC90ZXJhcGlhL3RlcmFwaWEubW9kZWwnXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZS9wYWdlXCI7XG5pbXBvcnQgeyBJdGVtRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC12aWV3L2xpc3Qtdmlld1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJUZXJhcGlhc1wiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vdGVyYXBpYXMuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBUZXJhcGlhc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgdGVyYXBpYTogVGVyYXBpYTtcbiAgICBwcnVlYmEgPSAnJztcblxuICAgIHRlcmFwaWFzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBpZFRlcmFwaWE6IDEsXG4gICAgICAgICAgICB0ZXJhcGlhOiBcIlJlc3BpcmFjacOzbiB5IHJlbGFqYWNpw7NuXCIsXG4gICAgICAgICAgICBpbWc6IFwifi9pbWFnZXMvcmVzcGlyYWNpb24uanBnXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWRUZXJhcGlhOiAyLFxuICAgICAgICAgICAgdGVyYXBpYTogXCJQcmVmb25hdG9yaW9zXCIsXG4gICAgICAgICAgICBpbWc6IFwifi9pbWFnZXMvcHJlZm9uYXRvcmlvcy5qcGdcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZFRlcmFwaWE6IDMsXG4gICAgICAgICAgICB0ZXJhcGlhOiBcIlByYXhpYXMgb3JvZmFjaWFsZXNcIixcbiAgICAgICAgICAgIGltZzogXCJ+L2ltYWdlcy9wcmF4aWFzLmpwZ1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRlcmFwaWE6IFwiRWplcmNpY2lvcyBkZSBmb25lbWFzXCIsXG4gICAgICAgICAgICBpbWc6IFwifi9pbWFnZXMvZm9uZW1hcy5qcGdcIlxuICAgICAgICB9XG4gICAgXVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudGVyYXBpYSA9IG5ldyBUZXJhcGlhKCk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIC8vIEluaXQgeW91ciBjb21wb25lbnQgcHJvcGVydGllcyBoZXJlLlxuICAgIH1cblxuICAgIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XG4gICAgICAgIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xuICAgIH1cblxuICAgIG9uU2VsZWN0KGFyZ3M6IEl0ZW1FdmVudERhdGEpIHtcblxuXG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xuXG5pbXBvcnQgeyBUZXJhcGlhc1JvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi90ZXJhcGlhcy1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgVGVyYXBpYXNDb21wb25lbnQgfSBmcm9tIFwiLi90ZXJhcGlhcy5jb21wb25lbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcbiAgICAgICAgVGVyYXBpYXNSb3V0aW5nTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgVGVyYXBpYXNDb21wb25lbnRcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgVGVyYXBpYXNNb2R1bGUgeyB9XG4iXSwic291cmNlUm9vdCI6IiJ9