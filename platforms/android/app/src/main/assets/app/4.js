(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[4],{

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
        // Init your component properties here.
    };
    ProgresoComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1__["getRootView"]();
        sideDrawer.showDrawer();
    };
    ProgresoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Progreso",
            template: __webpack_require__("./app/progreso/progreso.component.html")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvcHJvZ3Jlc28vcHJvZ3Jlc28tcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3Byb2dyZXNvL3Byb2dyZXNvLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9wcm9ncmVzby9wcm9ncmVzby5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3Byb2dyZXNvL3Byb2dyZXNvLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUM7QUFFOEI7QUFFZDtBQUV6RCxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLHFFQUFpQixFQUFFO0NBQzdDLENBQUM7QUFNRjtJQUFBO0lBQXFDLENBQUM7SUFBekIscUJBQXFCO1FBSmpDLDhEQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxvRkFBd0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEQsT0FBTyxFQUFFLENBQUMsb0ZBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLHFCQUFxQixDQUFJO0lBQUQsNEJBQUM7Q0FBQTtBQUFKOzs7Ozs7OztBQ2RsQyxzL0M7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFrRDtBQUVFO0FBTXBEO0lBMEJJO1FBeEJBLGNBQVMsR0FBb0Q7WUFDekQ7Z0JBQ0ksTUFBTSxFQUFFLFVBQVU7Z0JBQ2xCLE1BQU0sRUFBRSxZQUFZO2dCQUNwQixHQUFHLEVBQUUsWUFBWTthQUNwQjtZQUNEO2dCQUNJLE1BQU0sRUFBRSxVQUFVO2dCQUNsQixNQUFNLEVBQUUsWUFBWTtnQkFDcEIsR0FBRyxFQUFFLFlBQVk7YUFDcEI7WUFDRDtnQkFDSSxNQUFNLEVBQUUsVUFBVTtnQkFDbEIsTUFBTSxFQUFFLFlBQVk7Z0JBQ3BCLEdBQUcsRUFBRSxZQUFZO2FBQ3BCO1lBQ0Q7Z0JBQ0ksTUFBTSxFQUFFLFVBQVU7Z0JBQ2xCLE1BQU0sRUFBRSxZQUFZO2dCQUNwQixHQUFHLEVBQUUsWUFBWTthQUNwQjtTQUVBO1FBR0QscURBQXFEO0lBQ3pELENBQUM7SUFFRCxvQ0FBUSxHQUFSO1FBQ0ksdUNBQXVDO0lBQzNDLENBQUM7SUFFRCw2Q0FBaUIsR0FBakI7UUFDSSxJQUFNLFVBQVUsR0FBa0Isd0VBQWUsRUFBRSxDQUFDO1FBQ3BELFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBckNRLGlCQUFpQjtRQUo3QiwrREFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsdUVBQXdDO1NBQzNDLENBQUM7O09BQ1csaUJBQWlCLENBc0M3QjtJQUFELHdCQUFDO0NBQUE7QUF0QzZCOzs7Ozs7Ozs7QUNSOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkQ7QUFDWTtBQUVMO0FBQ1Q7QUFjekQ7SUFBQTtJQUE4QixDQUFDO0lBQWxCLGNBQWM7UUFaMUIsOERBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxvRkFBd0I7Z0JBQ3hCLDhFQUFxQjthQUN4QjtZQUNELFlBQVksRUFBRTtnQkFDVixxRUFBaUI7YUFDcEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsOERBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLGNBQWMsQ0FBSTtJQUFELHFCQUFDO0NBQUE7QUFBSiIsImZpbGUiOiI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBQcm9ncmVzb0NvbXBvbmVudCB9IGZyb20gXCIuL3Byb2dyZXNvLmNvbXBvbmVudFwiO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6IFwiXCIsIGNvbXBvbmVudDogUHJvZ3Jlc29Db21wb25lbnQgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIFByb2dyZXNvUm91dGluZ01vZHVsZSB7IH1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8QWN0aW9uQmFyPlxcbiAgICA8IS0tXFxuICAgIFVzZSB0aGUgTmF2aWdhdGlvbkJ1dHRvbiBhcyBhIHNpZGUtZHJhd2VyIGJ1dHRvbiBpbiBBbmRyb2lkXFxuICAgIGJlY2F1c2UgQWN0aW9uSXRlbXMgYXJlIHNob3duIG9uIHRoZSByaWdodCBzaWRlIG9mIHRoZSBBY3Rpb25CYXJcXG4gICAgLS0+XFxuICAgIDxOYXZpZ2F0aW9uQnV0dG9uIGlvczp2aXNpYmlsaXR5PVxcXCJjb2xsYXBzZWRcXFwiIGljb249XFxcInJlczovL21lbnVcXFwiICh0YXApPVxcXCJvbkRyYXdlckJ1dHRvblRhcCgpXFxcIj48L05hdmlnYXRpb25CdXR0b24+XFxuICAgIDwhLS1cXG4gICAgVXNlIHRoZSBBY3Rpb25JdGVtIGZvciBJT1Mgd2l0aCBwb3NpdGlvbiBzZXQgdG8gbGVmdC4gVXNpbmcgdGhlXFxuICAgIE5hdmlnYXRpb25CdXR0b24gYXMgYSBzaWRlLWRyYXdlciBidXR0b24gaW4gaU9TIGlzIG5vdCBwb3NzaWJsZSxcXG4gICAgYmVjYXVzZSBpdHMgZnVuY3Rpb24gaXMgdG8gYWx3YXlzIG5hdmlnYXRlIGJhY2sgaW4gdGhlIGFwcGxpY2F0aW9uLlxcbiAgICAtLT5cXG4gICAgPEFjdGlvbkl0ZW0gaWNvbj1cXFwicmVzOi8vbWVudVxcXCIgYW5kcm9pZDp2aXNpYmlsaXR5PVxcXCJjb2xsYXBzZWRcXFwiICh0YXApPVxcXCJvbkRyYXdlckJ1dHRvblRhcCgpXFxcIlxcbiAgICAgICAgaW9zLnBvc2l0aW9uPVxcXCJsZWZ0XFxcIj5cXG4gICAgPC9BY3Rpb25JdGVtPlxcbiAgICA8TGFiZWwgdGV4dD1cXFwiUHJvZ3Jlc28gZGVsIHBhY2llbnRlXFxcIj48L0xhYmVsPlxcbjwvQWN0aW9uQmFyPlxcblxcbjxMaXN0VmlldyBbaXRlbXNdPVxcXCJwcm9ncmVzb3NcXFwiIGlvc0VzdGltYXRlZFJvd0hlaWdodD1cXFwiNjVcXFwiPlxcbiAgICA8bmctdGVtcGxhdGUgbGV0LXByb2dyZXNvPVxcXCJpdGVtXFxcIiBsZXQtaT1cXFwiaW5kZXhcXFwiPlxcbiAgICAgICAgPEdyaWRMYXlvdXQgcm93cz1cXFwiMjUsMjVcXFwiPlxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgcm93PVxcXCIwXFxcIj5cXG4gICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cXG4gICAgICAgICAgICAgICAgICAgIDxTcGFuIFt0ZXh0XT1cXFwicHJvZ3Jlc28uYmxvcXVlXFxcIj48L1NwYW4+XFxuICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxcbiAgICAgICAgICAgIDwvTGFiZWw+XFxuICAgICAgICAgICAgPExhYmVsICByb3c9XFxcIjFcXFwiPlxcbiAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxcbiAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cXFwiRmVjaGE6IERlbCBcXFwiPjwvU3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgIDxTcGFuIFt0ZXh0XT1cXFwicHJvZ3Jlc28uaW5pY2lvXFxcIj48L1NwYW4+XFxuICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVxcXCIgYWwgXFxcIj48L1NwYW4+XFxuICAgICAgICAgICAgICAgICAgICA8U3BhbiBbdGV4dF09XFxcInByb2dyZXNvLmZpblxcXCI+PC9TcGFuPlxcbiAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cXG4gICAgICAgICAgICA8L0xhYmVsPlxcbiAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICA8L25nLXRlbXBsYXRlPlxcbjwvTGlzdFZpZXc+XFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiUHJvZ3Jlc29cIixcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3Byb2dyZXNvLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc29Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgcHJvZ3Jlc29zOiB7YmxvcXVlOiBzdHJpbmcsIGluaWNpbzogc3RyaW5nLCBmaW46IHN0cmluZ31bXSA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgYmxvcXVlOiBcIkJsb3F1ZSA0XCIsXG4gICAgICAgICAgICBpbmljaW86IFwiMjAxOC8wOC8zMFwiLFxuICAgICAgICAgICAgZmluOiBcIjIwMTkvMTAvMjJcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBibG9xdWU6IFwiQmxvcXVlIDNcIixcbiAgICAgICAgICAgIGluaWNpbzogXCIyMDE5LzAzLzEwXCIsXG4gICAgICAgICAgICBmaW46IFwiMjAxOS8wOC8zMFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGJsb3F1ZTogXCJCbG9xdWUgMlwiLFxuICAgICAgICAgICAgaW5pY2lvOiBcIjIwMTkvMDEvMTVcIixcbiAgICAgICAgICAgIGZpbjogXCIyMDE5LzAzLzEwXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgYmxvcXVlOiBcIkJsb3F1ZSAxXCIsXG4gICAgICAgICAgICBpbmljaW86IFwiMjAxOC8xMS8xNVwiLFxuICAgICAgICAgICAgZmluOiBcIjIwMTgvMDEvMTVcIlxuICAgICAgICB9XG5cbiAgICAgICAgXVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vIFVzZSB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yIHRvIGluamVjdCBwcm92aWRlcnMuXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIC8vIEluaXQgeW91ciBjb21wb25lbnQgcHJvcGVydGllcyBoZXJlLlxuICAgIH1cblxuICAgIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XG4gICAgICAgIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcblxuaW1wb3J0IHsgUHJvZ3Jlc29Sb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vcHJvZ3Jlc28tcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IFByb2dyZXNvQ29tcG9uZW50IH0gZnJvbSBcIi4vcHJvZ3Jlc28uY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgICAgIFByb2dyZXNvUm91dGluZ01vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFByb2dyZXNvQ29tcG9uZW50XG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFByb2dyZXNvTW9kdWxlIHsgfVxuIl0sInNvdXJjZVJvb3QiOiIifQ==