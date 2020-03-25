(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[6],{

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

module.exports = "<ActionBar>\n    <!--\n    Use the NavigationButton as a side-drawer button in Android\n    because ActionItems are shown on the right side of the ActionBar\n    -->\n    <NavigationButton ios:visibility=\"collapsed\" icon=\"res://menu\" (tap)=\"onDrawerButtonTap()\"></NavigationButton>\n    <!--\n    Use the ActionItem for IOS with position set to left. Using the\n    NavigationButton as a side-drawer button in iOS is not possible,\n    because its function is to always navigate back in the application.\n    -->\n    <ActionItem icon=\"res://menu\" android:visibility=\"collapsed\" (tap)=\"onDrawerButtonTap()\"\n        ios.position=\"left\">\n    </ActionItem>\n    <Label text=\"Terapias\"></Label>\n</ActionBar>\n\n<ListView [items]=\"terapias\" iosEstimatedRowHeight=\"65\">\n    <ng-template let-terapia=\"item\" let-i=\"index\">\n        <GridLayout rows=\"40,auto\" columns=\"50,*\">\n            <Image [src]=\"terapia.img\"></Image>\n            <Label [text]=\"terapia.terapia\" row=\"0\" col=\"1\"></Label>\n        </GridLayout>\n    </ng-template>\n</ListView>\n"

/***/ }),

/***/ "./app/terapias/terapias.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerapiasComponent", function() { return TerapiasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1__);


var TerapiasComponent = /** @class */ (function () {
    function TerapiasComponent() {
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
        // Use the component constructor to inject providers.
    }
    TerapiasComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
    };
    TerapiasComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1__["getRootView"]();
        sideDrawer.showDrawer();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvdGVyYXBpYXMvdGVyYXBpYXMtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3RlcmFwaWFzL3RlcmFwaWFzLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC90ZXJhcGlhcy90ZXJhcGlhcy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3RlcmFwaWFzL3RlcmFwaWFzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUM7QUFFOEI7QUFFZDtBQUV6RCxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLHFFQUFpQixFQUFFO0NBQzdDLENBQUM7QUFNRjtJQUFBO0lBQXFDLENBQUM7SUFBekIscUJBQXFCO1FBSmpDLDhEQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxvRkFBd0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEQsT0FBTyxFQUFFLENBQUMsb0ZBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLHFCQUFxQixDQUFJO0lBQUQsNEJBQUM7Q0FBQTtBQUFKOzs7Ozs7OztBQ2RsQyw4a0M7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFrRDtBQUVFO0FBTXBEO0lBd0JJO1FBdEJBLGFBQVEsR0FBRztZQUNQO2dCQUNJLFNBQVMsRUFBRSxDQUFDO2dCQUNaLE9BQU8sRUFBRSwwQkFBMEI7Z0JBQ25DLEdBQUcsRUFBRSwwQkFBMEI7YUFDbEM7WUFDRDtnQkFDSSxTQUFTLEVBQUUsQ0FBQztnQkFDWixPQUFPLEVBQUUsZUFBZTtnQkFDeEIsR0FBRyxFQUFFLDRCQUE0QjthQUNwQztZQUNEO2dCQUNJLFNBQVMsRUFBRSxDQUFDO2dCQUNaLE9BQU8sRUFBRSxxQkFBcUI7Z0JBQzlCLEdBQUcsRUFBRSxzQkFBc0I7YUFDOUI7WUFDRDtnQkFDSSxPQUFPLEVBQUUsdUJBQXVCO2dCQUNoQyxHQUFHLEVBQUUsc0JBQXNCO2FBQzlCO1NBQ0o7UUFHRyxxREFBcUQ7SUFDekQsQ0FBQztJQUVELG9DQUFRLEdBQVI7UUFDSSx1Q0FBdUM7SUFDM0MsQ0FBQztJQUVELDZDQUFpQixHQUFqQjtRQUNJLElBQU0sVUFBVSxHQUFrQix3RUFBZSxFQUFFLENBQUM7UUFDcEQsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFuQ1EsaUJBQWlCO1FBSjdCLCtEQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQix1RUFBd0M7U0FDM0MsQ0FBQzs7T0FDVyxpQkFBaUIsQ0FvQzdCO0lBQUQsd0JBQUM7Q0FBQTtBQXBDNkI7Ozs7Ozs7OztBQ1I5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEyRDtBQUNZO0FBRUw7QUFDVDtBQWN6RDtJQUFBO0lBQThCLENBQUM7SUFBbEIsY0FBYztRQVoxQiw4REFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLG9GQUF3QjtnQkFDeEIsOEVBQXFCO2FBQ3hCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLHFFQUFpQjthQUNwQjtZQUNELE9BQU8sRUFBRTtnQkFDTCw4REFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csY0FBYyxDQUFJO0lBQUQscUJBQUM7Q0FBQTtBQUFKIiwiZmlsZSI6IjYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IFRlcmFwaWFzQ29tcG9uZW50IH0gZnJvbSBcIi4vdGVyYXBpYXMuY29tcG9uZW50XCI7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHsgcGF0aDogXCJcIiwgY29tcG9uZW50OiBUZXJhcGlhc0NvbXBvbmVudCB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgVGVyYXBpYXNSb3V0aW5nTW9kdWxlIHsgfVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXI+XFxuICAgIDwhLS1cXG4gICAgVXNlIHRoZSBOYXZpZ2F0aW9uQnV0dG9uIGFzIGEgc2lkZS1kcmF3ZXIgYnV0dG9uIGluIEFuZHJvaWRcXG4gICAgYmVjYXVzZSBBY3Rpb25JdGVtcyBhcmUgc2hvd24gb24gdGhlIHJpZ2h0IHNpZGUgb2YgdGhlIEFjdGlvbkJhclxcbiAgICAtLT5cXG4gICAgPE5hdmlnYXRpb25CdXR0b24gaW9zOnZpc2liaWxpdHk9XFxcImNvbGxhcHNlZFxcXCIgaWNvbj1cXFwicmVzOi8vbWVudVxcXCIgKHRhcCk9XFxcIm9uRHJhd2VyQnV0dG9uVGFwKClcXFwiPjwvTmF2aWdhdGlvbkJ1dHRvbj5cXG4gICAgPCEtLVxcbiAgICBVc2UgdGhlIEFjdGlvbkl0ZW0gZm9yIElPUyB3aXRoIHBvc2l0aW9uIHNldCB0byBsZWZ0LiBVc2luZyB0aGVcXG4gICAgTmF2aWdhdGlvbkJ1dHRvbiBhcyBhIHNpZGUtZHJhd2VyIGJ1dHRvbiBpbiBpT1MgaXMgbm90IHBvc3NpYmxlLFxcbiAgICBiZWNhdXNlIGl0cyBmdW5jdGlvbiBpcyB0byBhbHdheXMgbmF2aWdhdGUgYmFjayBpbiB0aGUgYXBwbGljYXRpb24uXFxuICAgIC0tPlxcbiAgICA8QWN0aW9uSXRlbSBpY29uPVxcXCJyZXM6Ly9tZW51XFxcIiBhbmRyb2lkOnZpc2liaWxpdHk9XFxcImNvbGxhcHNlZFxcXCIgKHRhcCk9XFxcIm9uRHJhd2VyQnV0dG9uVGFwKClcXFwiXFxuICAgICAgICBpb3MucG9zaXRpb249XFxcImxlZnRcXFwiPlxcbiAgICA8L0FjdGlvbkl0ZW0+XFxuICAgIDxMYWJlbCB0ZXh0PVxcXCJUZXJhcGlhc1xcXCI+PC9MYWJlbD5cXG48L0FjdGlvbkJhcj5cXG5cXG48TGlzdFZpZXcgW2l0ZW1zXT1cXFwidGVyYXBpYXNcXFwiIGlvc0VzdGltYXRlZFJvd0hlaWdodD1cXFwiNjVcXFwiPlxcbiAgICA8bmctdGVtcGxhdGUgbGV0LXRlcmFwaWE9XFxcIml0ZW1cXFwiIGxldC1pPVxcXCJpbmRleFxcXCI+XFxuICAgICAgICA8R3JpZExheW91dCByb3dzPVxcXCI0MCxhdXRvXFxcIiBjb2x1bW5zPVxcXCI1MCwqXFxcIj5cXG4gICAgICAgICAgICA8SW1hZ2UgW3NyY109XFxcInRlcmFwaWEuaW1nXFxcIj48L0ltYWdlPlxcbiAgICAgICAgICAgIDxMYWJlbCBbdGV4dF09XFxcInRlcmFwaWEudGVyYXBpYVxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjFcXFwiPjwvTGFiZWw+XFxuICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgIDwvbmctdGVtcGxhdGU+XFxuPC9MaXN0Vmlldz5cXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIjtcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJUZXJhcGlhc1wiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vdGVyYXBpYXMuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBUZXJhcGlhc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICB0ZXJhcGlhcyA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgaWRUZXJhcGlhOiAxLFxuICAgICAgICAgICAgdGVyYXBpYTogXCJSZXNwaXJhY2nDs24geSByZWxhamFjacOzblwiLFxuICAgICAgICAgICAgaW1nOiBcIn4vaW1hZ2VzL3Jlc3BpcmFjaW9uLmpwZ1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkVGVyYXBpYTogMixcbiAgICAgICAgICAgIHRlcmFwaWE6IFwiUHJlZm9uYXRvcmlvc1wiLFxuICAgICAgICAgICAgaW1nOiBcIn4vaW1hZ2VzL3ByZWZvbmF0b3Jpb3MuanBnXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWRUZXJhcGlhOiAzLFxuICAgICAgICAgICAgdGVyYXBpYTogXCJQcmF4aWFzIG9yb2ZhY2lhbGVzXCIsXG4gICAgICAgICAgICBpbWc6IFwifi9pbWFnZXMvcHJheGlhcy5qcGdcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0ZXJhcGlhOiBcIkVqZXJjaWNpb3MgZGUgZm9uZW1hc1wiLFxuICAgICAgICAgICAgaW1nOiBcIn4vaW1hZ2VzL2ZvbmVtYXMuanBnXCJcbiAgICAgICAgfVxuICAgIF1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyBVc2UgdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvciB0byBpbmplY3QgcHJvdmlkZXJzLlxuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICAvLyBJbml0IHlvdXIgY29tcG9uZW50IHByb3BlcnRpZXMgaGVyZS5cbiAgICB9XG5cbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgc2lkZURyYXdlciA9IDxSYWRTaWRlRHJhd2VyPmFwcC5nZXRSb290VmlldygpO1xuICAgICAgICBzaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XG5cbmltcG9ydCB7IFRlcmFwaWFzUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL3RlcmFwaWFzLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBUZXJhcGlhc0NvbXBvbmVudCB9IGZyb20gXCIuL3RlcmFwaWFzLmNvbXBvbmVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxuICAgICAgICBUZXJhcGlhc1JvdXRpbmdNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBUZXJhcGlhc0NvbXBvbmVudFxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBUZXJhcGlhc01vZHVsZSB7IH1cbiJdLCJzb3VyY2VSb290IjoiIn0=