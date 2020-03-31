(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[6],{

/***/ "./app/progreso/progreso-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgresoRoutingModule", function() { return ProgresoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _progreso_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/progreso/progreso.component.ts");



var routes = [
    { path: "", component: _progreso_component__WEBPACK_IMPORTED_MODULE_2__["ProgresoComponent"] }
];
var ProgresoRoutingModule = /** @class */ (function () {
    function ProgresoRoutingModule() {
    }
    ProgresoRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forChild(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], ProgresoRoutingModule);
    return ProgresoRoutingModule;
}());



/***/ }),

/***/ "./app/progreso/progreso.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar>\n    <!--\n    Use the NavigationButton as a side-drawer button in Android\n    because ActionItems are shown on the right side of the ActionBar\n    -->\n    <NavigationButton ios:visibility=\"collapsed\" icon=\"res://menu\" (tap)=\"onDrawerButtonTap()\"></NavigationButton>\n    <!--\n    Use the ActionItem for IOS with position set to left. Using the\n    NavigationButton as a side-drawer button in iOS is not possible,\n    because its function is to always navigate back in the application.\n    -->\n    <ActionItem icon=\"res://menu\" android:visibility=\"collapsed\" (tap)=\"onDrawerButtonTap()\"\n        ios.position=\"left\">\n    </ActionItem>\n    <Label text=\"Progreso del paciente\"></Label>\n</ActionBar>\n\n<ListView [items]=\"progresos\" iosEstimatedRowHeight=\"65\">\n    <ng-template let-progreso=\"item\" let-i=\"index\">\n        <GridLayout rows=\"25,25\">\n            <Label textWrap=\"true\" row=\"0\">\n                <FormattedString>\n                    <Span [text]=\"progreso.bloque\"></Span>\n                </FormattedString>\n            </Label>\n            <Label  row=\"1\">\n                <FormattedString>\n                    <Span text=\"Fecha: Del \"></Span>\n                    <Span [text]=\"progreso.inicio\"></Span>\n                    <Span text=\" al \"></Span>\n                    <Span [text]=\"progreso.fin\"></Span>\n                </FormattedString>\n            </Label>\n        </GridLayout>\n    </ng-template>\n</ListView>\n"

/***/ }),

/***/ "./app/progreso/progreso.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgresoComponent", function() { return ProgresoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1__);


var ProgresoComponent = /** @class */ (function () {
    function ProgresoComponent() {
        this.progresos = [
            {
                bloque: "Bloque 4",
                inicio: "2018/08/30",
                fin: "2019/10/22"
            },
            {
                bloque: "Bloque 3",
                inicio: "2019/03/10",
                fin: "2019/08/30"
            },
            {
                bloque: "Bloque 2",
                inicio: "2019/01/15",
                fin: "2019/03/10"
            },
            {
                bloque: "Bloque 1",
                inicio: "2018/11/15",
                fin: "2018/01/15"
            }
        ];
        // Use the component constructor to inject providers.
    }
    ProgresoComponent.prototype.ngOnInit = function () {
    };
    ProgresoComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1__["getRootView"]();
        sideDrawer.showDrawer();
    };
    ProgresoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Progreso",
            template: __webpack_require__("./app/progreso/progreso.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], ProgresoComponent);
    return ProgresoComponent;
}());



/***/ }),

/***/ "./app/progreso/progreso.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgresoModule", function() { return ProgresoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/common.js");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _progreso_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/progreso/progreso-routing.module.ts");
/* harmony import */ var _progreso_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/progreso/progreso.component.ts");




var ProgresoModule = /** @class */ (function () {
    function ProgresoModule() {
    }
    ProgresoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__["NativeScriptCommonModule"],
                _progreso_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProgresoRoutingModule"]
            ],
            declarations: [
                _progreso_component__WEBPACK_IMPORTED_MODULE_3__["ProgresoComponent"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]
            ]
        })
    ], ProgresoModule);
    return ProgresoModule;
}());



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvcHJvZ3Jlc28vcHJvZ3Jlc28tcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3Byb2dyZXNvL3Byb2dyZXNvLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9wcm9ncmVzby9wcm9ncmVzby5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3Byb2dyZXNvL3Byb2dyZXNvLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUM7QUFFOEI7QUFFZDtBQUV6RCxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLHFFQUFpQixFQUFFO0NBQzdDLENBQUM7QUFNRjtJQUFBO0lBQXFDLENBQUM7SUFBekIscUJBQXFCO1FBSmpDLDhEQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxvRkFBd0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEQsT0FBTyxFQUFFLENBQUMsb0ZBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLHFCQUFxQixDQUFJO0lBQUQsNEJBQUM7Q0FBQTtBQUFKOzs7Ozs7OztBQ2RsQyxzL0M7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFrRDtBQUVFO0FBT3BEO0lBMEJJO1FBeEJBLGNBQVMsR0FBb0Q7WUFDekQ7Z0JBQ0ksTUFBTSxFQUFFLFVBQVU7Z0JBQ2xCLE1BQU0sRUFBRSxZQUFZO2dCQUNwQixHQUFHLEVBQUUsWUFBWTthQUNwQjtZQUNEO2dCQUNJLE1BQU0sRUFBRSxVQUFVO2dCQUNsQixNQUFNLEVBQUUsWUFBWTtnQkFDcEIsR0FBRyxFQUFFLFlBQVk7YUFDcEI7WUFDRDtnQkFDSSxNQUFNLEVBQUUsVUFBVTtnQkFDbEIsTUFBTSxFQUFFLFlBQVk7Z0JBQ3BCLEdBQUcsRUFBRSxZQUFZO2FBQ3BCO1lBQ0Q7Z0JBQ0ksTUFBTSxFQUFFLFVBQVU7Z0JBQ2xCLE1BQU0sRUFBRSxZQUFZO2dCQUNwQixHQUFHLEVBQUUsWUFBWTthQUNwQjtTQUVBO1FBR0QscURBQXFEO0lBQ3pELENBQUM7SUFFRCxvQ0FBUSxHQUFSO0lBRUEsQ0FBQztJQUVELDZDQUFpQixHQUFqQjtRQUNJLElBQU0sVUFBVSxHQUFrQix3RUFBZSxFQUFFLENBQUM7UUFDcEQsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFyQ1EsaUJBQWlCO1FBSjdCLCtEQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQix1RUFBd0M7U0FDM0MsQ0FBQzs7T0FDVyxpQkFBaUIsQ0FzQzdCO0lBQUQsd0JBQUM7Q0FBQTtBQXRDNkI7Ozs7Ozs7OztBQ1Q5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEyRDtBQUNZO0FBRUw7QUFDVDtBQWN6RDtJQUFBO0lBQThCLENBQUM7SUFBbEIsY0FBYztRQVoxQiw4REFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLG9GQUF3QjtnQkFDeEIsOEVBQXFCO2FBQ3hCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLHFFQUFpQjthQUNwQjtZQUNELE9BQU8sRUFBRTtnQkFDTCw4REFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csY0FBYyxDQUFJO0lBQUQscUJBQUM7Q0FBQTtBQUFKIiwiZmlsZSI6IjYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IFByb2dyZXNvQ29tcG9uZW50IH0gZnJvbSBcIi4vcHJvZ3Jlc28uY29tcG9uZW50XCI7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHsgcGF0aDogXCJcIiwgY29tcG9uZW50OiBQcm9ncmVzb0NvbXBvbmVudCB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc29Sb3V0aW5nTW9kdWxlIHsgfVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXI+XFxuICAgIDwhLS1cXG4gICAgVXNlIHRoZSBOYXZpZ2F0aW9uQnV0dG9uIGFzIGEgc2lkZS1kcmF3ZXIgYnV0dG9uIGluIEFuZHJvaWRcXG4gICAgYmVjYXVzZSBBY3Rpb25JdGVtcyBhcmUgc2hvd24gb24gdGhlIHJpZ2h0IHNpZGUgb2YgdGhlIEFjdGlvbkJhclxcbiAgICAtLT5cXG4gICAgPE5hdmlnYXRpb25CdXR0b24gaW9zOnZpc2liaWxpdHk9XFxcImNvbGxhcHNlZFxcXCIgaWNvbj1cXFwicmVzOi8vbWVudVxcXCIgKHRhcCk9XFxcIm9uRHJhd2VyQnV0dG9uVGFwKClcXFwiPjwvTmF2aWdhdGlvbkJ1dHRvbj5cXG4gICAgPCEtLVxcbiAgICBVc2UgdGhlIEFjdGlvbkl0ZW0gZm9yIElPUyB3aXRoIHBvc2l0aW9uIHNldCB0byBsZWZ0LiBVc2luZyB0aGVcXG4gICAgTmF2aWdhdGlvbkJ1dHRvbiBhcyBhIHNpZGUtZHJhd2VyIGJ1dHRvbiBpbiBpT1MgaXMgbm90IHBvc3NpYmxlLFxcbiAgICBiZWNhdXNlIGl0cyBmdW5jdGlvbiBpcyB0byBhbHdheXMgbmF2aWdhdGUgYmFjayBpbiB0aGUgYXBwbGljYXRpb24uXFxuICAgIC0tPlxcbiAgICA8QWN0aW9uSXRlbSBpY29uPVxcXCJyZXM6Ly9tZW51XFxcIiBhbmRyb2lkOnZpc2liaWxpdHk9XFxcImNvbGxhcHNlZFxcXCIgKHRhcCk9XFxcIm9uRHJhd2VyQnV0dG9uVGFwKClcXFwiXFxuICAgICAgICBpb3MucG9zaXRpb249XFxcImxlZnRcXFwiPlxcbiAgICA8L0FjdGlvbkl0ZW0+XFxuICAgIDxMYWJlbCB0ZXh0PVxcXCJQcm9ncmVzbyBkZWwgcGFjaWVudGVcXFwiPjwvTGFiZWw+XFxuPC9BY3Rpb25CYXI+XFxuXFxuPExpc3RWaWV3IFtpdGVtc109XFxcInByb2dyZXNvc1xcXCIgaW9zRXN0aW1hdGVkUm93SGVpZ2h0PVxcXCI2NVxcXCI+XFxuICAgIDxuZy10ZW1wbGF0ZSBsZXQtcHJvZ3Jlc289XFxcIml0ZW1cXFwiIGxldC1pPVxcXCJpbmRleFxcXCI+XFxuICAgICAgICA8R3JpZExheW91dCByb3dzPVxcXCIyNSwyNVxcXCI+XFxuICAgICAgICAgICAgPExhYmVsIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiByb3c9XFxcIjBcXFwiPlxcbiAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxcbiAgICAgICAgICAgICAgICAgICAgPFNwYW4gW3RleHRdPVxcXCJwcm9ncmVzby5ibG9xdWVcXFwiPjwvU3Bhbj5cXG4gICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XFxuICAgICAgICAgICAgPC9MYWJlbD5cXG4gICAgICAgICAgICA8TGFiZWwgIHJvdz1cXFwiMVxcXCI+XFxuICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XFxuICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVxcXCJGZWNoYTogRGVsIFxcXCI+PC9TcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgPFNwYW4gW3RleHRdPVxcXCJwcm9ncmVzby5pbmljaW9cXFwiPjwvU3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XFxcIiBhbCBcXFwiPjwvU3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgIDxTcGFuIFt0ZXh0XT1cXFwicHJvZ3Jlc28uZmluXFxcIj48L1NwYW4+XFxuICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxcbiAgICAgICAgICAgIDwvTGFiZWw+XFxuICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgIDwvbmctdGVtcGxhdGU+XFxuPC9MaXN0Vmlldz5cXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIjtcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIlByb2dyZXNvXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9wcm9ncmVzby5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9ncmVzb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBwcm9ncmVzb3M6IHtibG9xdWU6IHN0cmluZywgaW5pY2lvOiBzdHJpbmcsIGZpbjogc3RyaW5nfVtdID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBibG9xdWU6IFwiQmxvcXVlIDRcIixcbiAgICAgICAgICAgIGluaWNpbzogXCIyMDE4LzA4LzMwXCIsXG4gICAgICAgICAgICBmaW46IFwiMjAxOS8xMC8yMlwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGJsb3F1ZTogXCJCbG9xdWUgM1wiLFxuICAgICAgICAgICAgaW5pY2lvOiBcIjIwMTkvMDMvMTBcIixcbiAgICAgICAgICAgIGZpbjogXCIyMDE5LzA4LzMwXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgYmxvcXVlOiBcIkJsb3F1ZSAyXCIsXG4gICAgICAgICAgICBpbmljaW86IFwiMjAxOS8wMS8xNVwiLFxuICAgICAgICAgICAgZmluOiBcIjIwMTkvMDMvMTBcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBibG9xdWU6IFwiQmxvcXVlIDFcIixcbiAgICAgICAgICAgIGluaWNpbzogXCIyMDE4LzExLzE1XCIsXG4gICAgICAgICAgICBmaW46IFwiMjAxOC8wMS8xNVwiXG4gICAgICAgIH1cblxuICAgICAgICBdXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy8gVXNlIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IgdG8gaW5qZWN0IHByb3ZpZGVycy5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuICAgIH1cblxuICAgIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XG4gICAgICAgIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcblxuaW1wb3J0IHsgUHJvZ3Jlc29Sb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vcHJvZ3Jlc28tcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IFByb2dyZXNvQ29tcG9uZW50IH0gZnJvbSBcIi4vcHJvZ3Jlc28uY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgICAgIFByb2dyZXNvUm91dGluZ01vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFByb2dyZXNvQ29tcG9uZW50XG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFByb2dyZXNvTW9kdWxlIHsgfVxuIl0sInNvdXJjZVJvb3QiOiIifQ==