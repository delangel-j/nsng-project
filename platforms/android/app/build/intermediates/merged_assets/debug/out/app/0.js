(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[0],{

/***/ "./app/citas/citas-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitasRoutingModule", function() { return CitasRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _citas_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/citas/citas.component.ts");



var routes = [
    { path: "", component: _citas_component__WEBPACK_IMPORTED_MODULE_2__["CitasComponent"] }
];
var CitasRoutingModule = /** @class */ (function () {
    function CitasRoutingModule() {
    }
    CitasRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forChild(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], CitasRoutingModule);
    return CitasRoutingModule;
}());



/***/ }),

/***/ "./app/citas/citas.component.css":
/***/ (function(module, exports) {

module.exports = ".lista{\n    color: white;\n    background-color: #48A1CA;\n    font-size: 14px;\n}\n"

/***/ }),

/***/ "./app/citas/citas.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar>\n    <!--\n    Use the NavigationButton as a side-drawer button in Android\n    because ActionItems are shown on the right side of the ActionBar\n    -->\n    <NavigationButton ios:visibility=\"collapsed\" icon=\"res://menu\" (tap)=\"onDrawerButtonTap()\"></NavigationButton>\n    <!--\n    Use the ActionItem for IOS with position set to left. Using the\n    NavigationButton as a side-drawer button in iOS is not possible,\n    because its function is to always navigate back in the application.\n    -->\n    <ActionItem icon=\"res://menu\" android:visibility=\"collapsed\" (tap)=\"onDrawerButtonTap()\"\n        ios.position=\"left\">\n    </ActionItem>\n    <Label text=\"Reporte de citas\"></Label>\n</ActionBar>\n\n<TabView selectedTabTextColor=\"blue\" tabBackgroundColor=\"white\"\n    tabTextFontSize=\"16\" androidSelectedTabHighlightColor=\"gray\">\n    <StackLayout\n        *tabItem=\"{title: 'Progreso', iconSource: 'res://progreso', textTransform: 'lowercase'}\">\n        <GridLayout rows=\"*\" height=\"1000px\">\n            <RadCartesianChart row=\"0\" style=\"font-size: 12;\">\n                <CategoricalAxis tkCartesianHorizontalAxis></CategoricalAxis>\n                <LinearAxis tkCartesianVerticalAxis></LinearAxis>\n                <BarSeries tkCartesianSeries [items]=\"citas\"\n                    categoryProperty=\"Citas\" valueProperty=\"Cantidad\"></BarSeries>\n            </RadCartesianChart>\n        </GridLayout>\n    </StackLayout>\n    <StackLayout\n        *tabItem=\"{title: 'Calendario', iconSource: 'res://calendario', textTransform: 'lowercase'}\">\n        <RadCalendar\n        [eventSource]=\"calendarEvents\"\n\n        eventsViewMode=\"Inline\"\n        selectionMode=\"Single\"\n        viewMode=\"Month\"\n        transitionMode=\"Stack\"\n        locale=\"en-US\"\n\n        (dateSelected)=\"onDateSelected($event)\"\n        (dateDeselected)=\"onDateDeselected($event)\"\n        (navigatedToDate)=\"onNavigatedToDate($event)\"\n        (navigatingToDateStarted)=\"onNavigatingToDateStarted($event)\"\n        (viewModeChanged)=\"onViewModeChanged($event)\"\n        ></RadCalendar>\n    </StackLayout>\n    <StackLayout\n        *tabItem=\"{title: 'Lista de citas', iconSource: 'res://listacitas', textTransform: 'lowercase', tabBackgroundColor: 'red'}\">\n        <ListView [items]=\"reporteCitas\" >\n            <ng-template let-item=\"item\">\n                <GridLayout columns=\"80,50,200,50\" rows=\"28,28\">\n                    <Label  row=\"0\" col=\"0\" [text]=\"item.fecha\"></Label>\n                    <Label row=\"0\" class=\"lista\" col=\"1\" [text]=\"item.idExpediente\"></Label>\n                     <Label row=\"0\" class=\"lista\" col=\"2\" [text]=\"item.nombre\"></Label>\n\n                     <Label row=\"1\" class=\"lista\" col=\"1\" [text]=\"item.horaInicio\" > </Label>\n                     <Label row=\"1\" class=\"lista\" col=\"2\" [text]=\"item.horaFin\"></Label>\n                </GridLayout>\n            </ng-template>\n        </ListView>\n    </StackLayout>\n</TabView>\n\n\n\n"

/***/ }),

/***/ "./app/citas/citas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitasComponent", function() { return CitasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_ui_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-ui-calendar/ui-calendar.js");
/* harmony import */ var nativescript_ui_calendar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_calendar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tns_core_modules_color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@nativescript/core/color/color.js");
/* harmony import */ var tns_core_modules_color__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_color__WEBPACK_IMPORTED_MODULE_3__);




var CitasComponent = /** @class */ (function () {
    function CitasComponent() {
        this.calendarEvents = [];
        this.reporteCitas = [
            { fecha: "14/02/2020", idExpediente: "LTF18", nombre: "José Carlos Huerta Gonzáles", horaInicio: "12:00", horaFin: "13:30" },
            { fecha: "21/02/2020", idExpediente: "LTF18", nombre: "José Carlos Huerta Gonzáles", horaInicio: "12:00", horaFin: "13:30" },
            { fecha: "28/02/2020", idExpediente: "LTF18", nombre: "José Carlos Huerta Gonzáles", horaInicio: "12:00", horaFin: "13:30" }
        ];
        this.categoricalSource = [
            { Country: "Germany", Amount: 15, SecondVal: 14, ThirdVal: 24 },
            { Country: "France", Amount: 13, SecondVal: 23, ThirdVal: 25 },
            { Country: "Bulgaria", Amount: 24, SecondVal: 17, ThirdVal: 23 },
            { Country: "Spain", Amount: 11, SecondVal: 19, ThirdVal: 24 },
            { Country: "USA", Amount: 18, SecondVal: 8, ThirdVal: 21 }
        ];
        this.citas = [{
                Citas: "Citas de asistencia",
                Cantidad: 3
            },
            {
                Citas: "Citas perdidas",
                Cantidad: 1
            },
            {
                Citas: "Citas restantes",
                Cantidad: 8
            }
        ];
        // Use the component constructor to inject providers.
        // Creating dummy events
        var events = [];
        var now = new Date();
        var startDate;
        var endDate;
        var colors = [new tns_core_modules_color__WEBPACK_IMPORTED_MODULE_3__["Color"](200, 188, 26, 214), new tns_core_modules_color__WEBPACK_IMPORTED_MODULE_3__["Color"](220, 255, 109, 130), new tns_core_modules_color__WEBPACK_IMPORTED_MODULE_3__["Color"](255, 55, 45, 255), new tns_core_modules_color__WEBPACK_IMPORTED_MODULE_3__["Color"](199, 17, 227, 10), new tns_core_modules_color__WEBPACK_IMPORTED_MODULE_3__["Color"](255, 255, 54, 3)];
        for (var i = 1; i < 10; i++) {
            startDate = new Date(now.getFullYear(), now.getMonth(), i * 2, 1);
            endDate = new Date(now.getFullYear(), now.getMonth(), (i * 2), 3);
            var event_1 = new nativescript_ui_calendar__WEBPACK_IMPORTED_MODULE_2__["CalendarEvent"]("event " + i, startDate, endDate, false, colors[i * 10 % (colors.length - 1)]);
            events.push(event_1);
            if (i % 3 == 0) {
                event_1 = new nativescript_ui_calendar__WEBPACK_IMPORTED_MODULE_2__["CalendarEvent"]("second " + i, startDate, endDate, true, colors[i * 5 % (colors.length - 1)]);
                events.push(event_1);
            }
        }
        this.calendarEvents = events;
    }
    CitasComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
    };
    CitasComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1__["getRootView"]();
        sideDrawer.showDrawer();
    };
    CitasComponent.prototype.onDateSelected = function (args) {
        console.log("onDateSelected: " + args.date);
    };
    CitasComponent.prototype.onDateDeselected = function (args) {
        console.log("onDateDeselected: " + args.date);
    };
    CitasComponent.prototype.onNavigatedToDate = function (args) {
        console.log("onNavigatedToDate: " + args.date);
    };
    CitasComponent.prototype.onNavigatingToDateStarted = function (args) {
        console.log("onNavigatingToDateStarted: " + args.date);
    };
    CitasComponent.prototype.onViewModeChanged = function (args) {
        console.log("onViewModeChanged: " + args.newValue);
    };
    CitasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Citas",
            template: __webpack_require__("./app/citas/citas.component.html"),
            styles: [__webpack_require__("./app/citas/citas.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CitasComponent);
    return CitasComponent;
}());



/***/ }),

/***/ "./app/citas/citas.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitasModule", function() { return CitasModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/common.js");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _citas_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/citas/citas-routing.module.ts");
/* harmony import */ var _citas_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/citas/citas.component.ts");
/* harmony import */ var nativescript_ui_chart_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/nativescript-ui-chart/angular/chart-directives.js");
/* harmony import */ var nativescript_ui_chart_angular__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_chart_angular__WEBPACK_IMPORTED_MODULE_4__);





var CitasModule = /** @class */ (function () {
    function CitasModule() {
    }
    CitasModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__["NativeScriptCommonModule"],
                _citas_routing_module__WEBPACK_IMPORTED_MODULE_2__["CitasRoutingModule"],
                nativescript_ui_chart_angular__WEBPACK_IMPORTED_MODULE_4__["NativeScriptUIChartModule"],
            ],
            declarations: [
                _citas_component__WEBPACK_IMPORTED_MODULE_3__["CitasComponent"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]
            ]
        })
    ], CitasModule);
    return CitasModule;
}());



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY2l0YXMvY2l0YXMtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NpdGFzL2NpdGFzLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NpdGFzL2NpdGFzLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9jaXRhcy9jaXRhcy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NpdGFzL2NpdGFzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUM7QUFFOEI7QUFFcEI7QUFFbkQsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSwrREFBYyxFQUFFO0NBQzFDLENBQUM7QUFNRjtJQUFBO0lBQWtDLENBQUM7SUFBdEIsa0JBQWtCO1FBSjlCLDhEQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxvRkFBd0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEQsT0FBTyxFQUFFLENBQUMsb0ZBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLGtCQUFrQixDQUFJO0lBQUQseUJBQUM7Q0FBQTtBQUFKOzs7Ozs7OztBQ2QvQix5QkFBeUIsbUJBQW1CLGdDQUFnQyxzQkFBc0IsR0FBRyxHOzs7Ozs7O0FDQXJHLGs2QkFBazZCLDRFQUE0RSx1SEFBdUgsa2FBQWthLGdGQUFnRiw4bEJBQThsQiwrR0FBK0csK3ZCOzs7Ozs7OztBQ0FweUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtEO0FBRUU7QUFDTztBQUNaO0FBTy9DO0lBaUNJO1FBaENBLG1CQUFjLEdBQUcsRUFBRSxDQUFDO1FBRXBCLGlCQUFZLEdBQWlHO1lBQ3pHLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFH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QUNuRCxDQUFDO0lBRUQsa0RBQXlCLEdBQXpCLFVBQTBCLElBQUk7UUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVELDBDQUFpQixHQUFqQixVQUFrQixJQUFJO1FBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFqRlEsY0FBYztRQUwxQiwrREFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE9BQU87WUFDakIsaUVBQXFDOztTQUV4QyxDQUFDOztPQUNXLGNBQWMsQ0FrRjFCO0lBQUQscUJBQUM7Q0FBQTtBQWxGMEI7Ozs7Ozs7OztBQ1gzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkQ7QUFDWTtBQUVYO0FBQ1Q7QUFFdUI7QUFlMUU7SUFBQTtJQUEyQixDQUFDO0lBQWYsV0FBVztRQWJ2Qiw4REFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLG9GQUF3QjtnQkFDeEIsd0VBQWtCO2dCQUNsQix1RkFBeUI7YUFDNUI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsK0RBQWM7YUFDakI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsOERBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLFdBQVcsQ0FBSTtJQUFELGtCQUFDO0NBQUE7QUFBSiIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBDaXRhc0NvbXBvbmVudCB9IGZyb20gXCIuL2NpdGFzLmNvbXBvbmVudFwiO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6IFwiXCIsIGNvbXBvbmVudDogQ2l0YXNDb21wb25lbnQgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIENpdGFzUm91dGluZ01vZHVsZSB7IH1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCIubGlzdGF7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ4QTFDQTtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8QWN0aW9uQmFyPlxcbiAgICA8IS0tXFxuICAgIFVzZSB0aGUgTmF2aWdhdGlvbkJ1dHRvbiBhcyBhIHNpZGUtZHJhd2VyIGJ1dHRvbiBpbiBBbmRyb2lkXFxuICAgIGJlY2F1c2UgQWN0aW9uSXRlbXMgYXJlIHNob3duIG9uIHRoZSByaWdodCBzaWRlIG9mIHRoZSBBY3Rpb25CYXJcXG4gICAgLS0+XFxuICAgIDxOYXZpZ2F0aW9uQnV0dG9uIGlvczp2aXNpYmlsaXR5PVxcXCJjb2xsYXBzZWRcXFwiIGljb249XFxcInJlczovL21lbnVcXFwiICh0YXApPVxcXCJvbkRyYXdlckJ1dHRvblRhcCgpXFxcIj48L05hdmlnYXRpb25CdXR0b24+XFxuICAgIDwhLS1cXG4gICAgVXNlIHRoZSBBY3Rpb25JdGVtIGZvciBJT1Mgd2l0aCBwb3NpdGlvbiBzZXQgdG8gbGVmdC4gVXNpbmcgdGhlXFxuICAgIE5hdmlnYXRpb25CdXR0b24gYXMgYSBzaWRlLWRyYXdlciBidXR0b24gaW4gaU9TIGlzIG5vdCBwb3NzaWJsZSxcXG4gICAgYmVjYXVzZSBpdHMgZnVuY3Rpb24gaXMgdG8gYWx3YXlzIG5hdmlnYXRlIGJhY2sgaW4gdGhlIGFwcGxpY2F0aW9uLlxcbiAgICAtLT5cXG4gICAgPEFjdGlvbkl0ZW0gaWNvbj1cXFwicmVzOi8vbWVudVxcXCIgYW5kcm9pZDp2aXNpYmlsaXR5PVxcXCJjb2xsYXBzZWRcXFwiICh0YXApPVxcXCJvbkRyYXdlckJ1dHRvblRhcCgpXFxcIlxcbiAgICAgICAgaW9zLnBvc2l0aW9uPVxcXCJsZWZ0XFxcIj5cXG4gICAgPC9BY3Rpb25JdGVtPlxcbiAgICA8TGFiZWwgdGV4dD1cXFwiUmVwb3J0ZSBkZSBjaXRhc1xcXCI+PC9MYWJlbD5cXG48L0FjdGlvbkJhcj5cXG5cXG48VGFiVmlldyBzZWxlY3RlZFRhYlRleHRDb2xvcj1cXFwiYmx1ZVxcXCIgdGFiQmFja2dyb3VuZENvbG9yPVxcXCJ3aGl0ZVxcXCJcXG4gICAgdGFiVGV4dEZvbnRTaXplPVxcXCIxNlxcXCIgYW5kcm9pZFNlbGVjdGVkVGFiSGlnaGxpZ2h0Q29sb3I9XFxcImdyYXlcXFwiPlxcbiAgICA8U3RhY2tMYXlvdXRcXG4gICAgICAgICp0YWJJdGVtPVxcXCJ7dGl0bGU6ICdQcm9ncmVzbycsIGljb25Tb3VyY2U6ICdyZXM6Ly9wcm9ncmVzbycsIHRleHRUcmFuc2Zvcm06ICdsb3dlcmNhc2UnfVxcXCI+XFxuICAgICAgICA8R3JpZExheW91dCByb3dzPVxcXCIqXFxcIiBoZWlnaHQ9XFxcIjEwMDBweFxcXCI+XFxuICAgICAgICAgICAgPFJhZENhcnRlc2lhbkNoYXJ0IHJvdz1cXFwiMFxcXCIgc3R5bGU9XFxcImZvbnQtc2l6ZTogMTI7XFxcIj5cXG4gICAgICAgICAgICAgICAgPENhdGVnb3JpY2FsQXhpcyB0a0NhcnRlc2lhbkhvcml6b250YWxBeGlzPjwvQ2F0ZWdvcmljYWxBeGlzPlxcbiAgICAgICAgICAgICAgICA8TGluZWFyQXhpcyB0a0NhcnRlc2lhblZlcnRpY2FsQXhpcz48L0xpbmVhckF4aXM+XFxuICAgICAgICAgICAgICAgIDxCYXJTZXJpZXMgdGtDYXJ0ZXNpYW5TZXJpZXMgW2l0ZW1zXT1cXFwiY2l0YXNcXFwiXFxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeVByb3BlcnR5PVxcXCJDaXRhc1xcXCIgdmFsdWVQcm9wZXJ0eT1cXFwiQ2FudGlkYWRcXFwiPjwvQmFyU2VyaWVzPlxcbiAgICAgICAgICAgIDwvUmFkQ2FydGVzaWFuQ2hhcnQ+XFxuICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgIDxTdGFja0xheW91dFxcbiAgICAgICAgKnRhYkl0ZW09XFxcInt0aXRsZTogJ0NhbGVuZGFyaW8nLCBpY29uU291cmNlOiAncmVzOi8vY2FsZW5kYXJpbycsIHRleHRUcmFuc2Zvcm06ICdsb3dlcmNhc2UnfVxcXCI+XFxuICAgICAgICA8UmFkQ2FsZW5kYXJcXG4gICAgICAgIFtldmVudFNvdXJjZV09XFxcImNhbGVuZGFyRXZlbnRzXFxcIlxcblxcbiAgICAgICAgZXZlbnRzVmlld01vZGU9XFxcIklubGluZVxcXCJcXG4gICAgICAgIHNlbGVjdGlvbk1vZGU9XFxcIlNpbmdsZVxcXCJcXG4gICAgICAgIHZpZXdNb2RlPVxcXCJNb250aFxcXCJcXG4gICAgICAgIHRyYW5zaXRpb25Nb2RlPVxcXCJTdGFja1xcXCJcXG4gICAgICAgIGxvY2FsZT1cXFwiZW4tVVNcXFwiXFxuXFxuICAgICAgICAoZGF0ZVNlbGVjdGVkKT1cXFwib25EYXRlU2VsZWN0ZWQoJGV2ZW50KVxcXCJcXG4gICAgICAgIChkYXRlRGVzZWxlY3RlZCk9XFxcIm9uRGF0ZURlc2VsZWN0ZWQoJGV2ZW50KVxcXCJcXG4gICAgICAgIChuYXZpZ2F0ZWRUb0RhdGUpPVxcXCJvbk5hdmlnYXRlZFRvRGF0ZSgkZXZlbnQpXFxcIlxcbiAgICAgICAgKG5hdmlnYXRpbmdUb0RhdGVTdGFydGVkKT1cXFwib25OYXZpZ2F0aW5nVG9EYXRlU3RhcnRlZCgkZXZlbnQpXFxcIlxcbiAgICAgICAgKHZpZXdNb2RlQ2hhbmdlZCk9XFxcIm9uVmlld01vZGVDaGFuZ2VkKCRldmVudClcXFwiXFxuICAgICAgICA+PC9SYWRDYWxlbmRhcj5cXG4gICAgPC9TdGFja0xheW91dD5cXG4gICAgPFN0YWNrTGF5b3V0XFxuICAgICAgICAqdGFiSXRlbT1cXFwie3RpdGxlOiAnTGlzdGEgZGUgY2l0YXMnLCBpY29uU291cmNlOiAncmVzOi8vbGlzdGFjaXRhcycsIHRleHRUcmFuc2Zvcm06ICdsb3dlcmNhc2UnLCB0YWJCYWNrZ3JvdW5kQ29sb3I6ICdyZWQnfVxcXCI+XFxuICAgICAgICA8TGlzdFZpZXcgW2l0ZW1zXT1cXFwicmVwb3J0ZUNpdGFzXFxcIiA+XFxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1pdGVtPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiODAsNTAsMjAwLDUwXFxcIiByb3dzPVxcXCIyOCwyOFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIwXFxcIiBbdGV4dF09XFxcIml0ZW0uZmVjaGFcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVxcXCIwXFxcIiBjbGFzcz1cXFwibGlzdGFcXFwiIGNvbD1cXFwiMVxcXCIgW3RleHRdPVxcXCJpdGVtLmlkRXhwZWRpZW50ZVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVxcXCIwXFxcIiBjbGFzcz1cXFwibGlzdGFcXFwiIGNvbD1cXFwiMlxcXCIgW3RleHRdPVxcXCJpdGVtLm5vbWJyZVxcXCI+PC9MYWJlbD5cXG5cXG4gICAgICAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVxcXCIxXFxcIiBjbGFzcz1cXFwibGlzdGFcXFwiIGNvbD1cXFwiMVxcXCIgW3RleHRdPVxcXCJpdGVtLmhvcmFJbmljaW9cXFwiID4gPC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVxcXCIxXFxcIiBjbGFzcz1cXFwibGlzdGFcXFwiIGNvbD1cXFwiMlxcXCIgW3RleHRdPVxcXCJpdGVtLmhvcmFGaW5cXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcbiAgICAgICAgPC9MaXN0Vmlldz5cXG4gICAgPC9TdGFja0xheW91dD5cXG48L1RhYlZpZXc+XFxuXFxuXFxuXFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcbmltcG9ydCAqIGFzIGNhbGVuZGFyTW9kdWxlIGZyb20gXCJuYXRpdmVzY3JpcHQtdWktY2FsZW5kYXJcIjtcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvY29sb3JcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiQ2l0YXNcIixcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2NpdGFzLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbJy4vY2l0YXMuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIENpdGFzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBjYWxlbmRhckV2ZW50cyA9IFtdO1xuXG4gICAgcmVwb3J0ZUNpdGFzOiB7ZmVjaGE6IHN0cmluZywgaWRFeHBlZGllbnRlOiBzdHJpbmcsIG5vbWJyZTogc3RyaW5nLCBob3JhSW5pY2lvOiBzdHJpbmcsIGhvcmFGaW46IHN0cmluZ31bXSA9IFtcbiAgICAgICAgeyBmZWNoYTogXCIxNC8wMi8yMDIwXCIsIGlkRXhwZWRpZW50ZTogXCJMVEYxOFwiICwgbm9tYnJlOiBcIkpvc8OpIENhcmxvcyBIdWVydGEgR29uesOhbGVzXCIsIGhvcmFJbmljaW86IFwiMTI6MDBcIiwgaG9yYUZpbjogXCIxMzozMFwiIH0sXG4gICAgICAgIHsgZmVjaGE6IFwiMjEvMDIvMjAyMFwiLCBpZEV4cGVkaWVudGU6IFwiTFRGMThcIiAsIG5vbWJyZTogXCJKb3PDqSBDYXJsb3MgSHVlcnRhIEdvbnrDoWxlc1wiLCBob3JhSW5pY2lvOiBcIjEyOjAwXCIsIGhvcmFGaW46IFwiMTM6MzBcIiB9LFxuICAgICAgICB7IGZlY2hhOiBcIjI4LzAyLzIwMjBcIiwgaWRFeHBlZGllbnRlOiBcIkxURjE4XCIgLCBub21icmU6IFwiSm9zw6kgQ2FybG9zIEh1ZXJ0YSBHb256w6FsZXNcIiwgaG9yYUluaWNpbzogXCIxMjowMFwiLCBob3JhRmluOiBcIjEzOjMwXCIgfVxuICAgIF07XG5cbiAgICBjYXRlZ29yaWNhbFNvdXJjZTogeyBDb3VudHJ5OiBzdHJpbmcsIEFtb3VudDogbnVtYmVyLCBTZWNvbmRWYWw6IG51bWJlciwgVGhpcmRWYWw6IG51bWJlciB9W10gPSBbXG4gICAgICAgIHsgQ291bnRyeTogXCJHZXJtYW55XCIsIEFtb3VudDogMTUsIFNlY29uZFZhbDogMTQsIFRoaXJkVmFsOiAyNCB9LFxuICAgICAgICB7IENvdW50cnk6IFwiRnJhbmNlXCIsIEFtb3VudDogMTMsIFNlY29uZFZhbDogMjMsIFRoaXJkVmFsOiAyNSB9LFxuICAgICAgICB7IENvdW50cnk6IFwiQnVsZ2FyaWFcIiwgQW1vdW50OiAyNCwgU2Vjb25kVmFsOiAxNywgVGhpcmRWYWw6IDIzIH0sXG4gICAgICAgIHsgQ291bnRyeTogXCJTcGFpblwiLCBBbW91bnQ6IDExLCBTZWNvbmRWYWw6IDE5LCBUaGlyZFZhbDogMjQgfSxcbiAgICAgICAgeyBDb3VudHJ5OiBcIlVTQVwiLCBBbW91bnQ6IDE4LCBTZWNvbmRWYWw6IDgsIFRoaXJkVmFsOiAyMSB9XG4gICAgXTtcblxuICAgIGNpdGFzOiB7Q2l0YXM6IHN0cmluZywgQ2FudGlkYWQ6IG51bWJlciB9W10gPSBbe1xuICAgICAgICBDaXRhczogXCJDaXRhcyBkZSBhc2lzdGVuY2lhXCIsXG4gICAgICAgICAgICAgICAgQ2FudGlkYWQ6IDNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgQ2l0YXM6IFwiQ2l0YXMgcGVyZGlkYXNcIixcbiAgICAgICAgICAgICAgICBDYW50aWRhZDogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBDaXRhczogXCJDaXRhcyByZXN0YW50ZXNcIixcbiAgICAgICAgICAgICAgICBDYW50aWRhZDogOFxuICAgICAgICAgICAgfVxuICAgICAgICBdXG5cblxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vIFVzZSB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yIHRvIGluamVjdCBwcm92aWRlcnMuXG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRpbmcgZHVtbXkgZXZlbnRzXG4gICAgICAgICAgICAgICAgbGV0IGV2ZW50cyA9IFtdO1xuICAgICAgICAgICAgICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgICAgIGxldCBzdGFydERhdGU7XG4gICAgICAgICAgICAgICAgbGV0IGVuZERhdGU7XG4gICAgICAgICAgICAgICAgbGV0IGNvbG9ycyA9IFtuZXcgQ29sb3IoMjAwLCAxODgsIDI2LCAyMTQpLCBuZXcgQ29sb3IoMjIwLCAyNTUsIDEwOSwgMTMwKSwgbmV3IENvbG9yKDI1NSwgNTUsIDQ1LCAyNTUpLCBuZXcgQ29sb3IoMTk5LCAxNywgMjI3LCAxMCksIG5ldyBDb2xvcigyNTUsIDI1NSwgNTQsIDMpXTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnREYXRlID0gbmV3IERhdGUobm93LmdldEZ1bGxZZWFyKCksIG5vdy5nZXRNb250aCgpLCBpICogMiwgMSk7XG4gICAgICAgICAgICAgICAgICAgIGVuZERhdGUgPSBuZXcgRGF0ZShub3cuZ2V0RnVsbFllYXIoKSwgbm93LmdldE1vbnRoKCksIChpICogMiksIDMpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZXZlbnQgPSBuZXcgY2FsZW5kYXJNb2R1bGUuQ2FsZW5kYXJFdmVudChcImV2ZW50IFwiICsgaSwgc3RhcnREYXRlLCBlbmREYXRlLCBmYWxzZSwgY29sb3JzW2kgKiAxMCAlIChjb2xvcnMubGVuZ3RoIC0gMSldKTtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRzLnB1c2goZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSAlIDMgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQgPSBuZXcgY2FsZW5kYXJNb2R1bGUuQ2FsZW5kYXJFdmVudChcInNlY29uZCBcIiArIGksIHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgdHJ1ZSwgY29sb3JzW2kgKiA1ICUgKGNvbG9ycy5sZW5ndGggLSAxKV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRzLnB1c2goZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuY2FsZW5kYXJFdmVudHMgPSBldmVudHM7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIC8vIEluaXQgeW91ciBjb21wb25lbnQgcHJvcGVydGllcyBoZXJlLlxuICAgIH1cblxuICAgIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XG4gICAgICAgIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xuICAgIH1cblxuICAgIG9uRGF0ZVNlbGVjdGVkKGFyZ3MpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJvbkRhdGVTZWxlY3RlZDogXCIgKyBhcmdzLmRhdGUpO1xuICAgIH1cblxuICAgIG9uRGF0ZURlc2VsZWN0ZWQoYXJncykge1xuICAgICAgICBjb25zb2xlLmxvZyhcIm9uRGF0ZURlc2VsZWN0ZWQ6IFwiICsgYXJncy5kYXRlKTtcbiAgICB9XG5cbiAgICBvbk5hdmlnYXRlZFRvRGF0ZShhcmdzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwib25OYXZpZ2F0ZWRUb0RhdGU6IFwiICsgYXJncy5kYXRlKTtcbiAgICB9XG5cbiAgICBvbk5hdmlnYXRpbmdUb0RhdGVTdGFydGVkKGFyZ3MpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJvbk5hdmlnYXRpbmdUb0RhdGVTdGFydGVkOiBcIiArIGFyZ3MuZGF0ZSk7XG4gICAgfVxuXG4gICAgb25WaWV3TW9kZUNoYW5nZWQoYXJncykge1xuICAgICAgICBjb25zb2xlLmxvZyhcIm9uVmlld01vZGVDaGFuZ2VkOiBcIiArIGFyZ3MubmV3VmFsdWUpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcblxuaW1wb3J0IHsgQ2l0YXNSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vY2l0YXMtcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IENpdGFzQ29tcG9uZW50IH0gZnJvbSBcIi4vY2l0YXMuY29tcG9uZW50XCI7XG5cbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJQ2hhcnRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWNoYXJ0L2FuZ3VsYXJcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcbiAgICAgICAgQ2l0YXNSb3V0aW5nTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUNoYXJ0TW9kdWxlLFxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIENpdGFzQ29tcG9uZW50XG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIENpdGFzTW9kdWxlIHsgfVxuIl0sInNvdXJjZVJvb3QiOiIifQ==