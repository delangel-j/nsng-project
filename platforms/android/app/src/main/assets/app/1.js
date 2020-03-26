(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[1],{

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
/* harmony import */ var _shared_persona_persona_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/shared/persona/persona.service.ts");



var ProgresoComponent = /** @class */ (function () {
    function ProgresoComponent(personaService) {
        this.personaService = personaService;
        this.personaList = [];
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
        var _this = this;
        // Init your component properties here.
        this.personaService.load()
            .subscribe(function (loadedPersonas) {
            loadedPersonas.forEach(function (personaObject) {
                _this.personaList.unshift(personaObject);
            });
        });
    };
    ProgresoComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1__["getRootView"]();
        sideDrawer.showDrawer();
    };
    ProgresoComponent.ctorParameters = function () { return [
        { type: _shared_persona_persona_service__WEBPACK_IMPORTED_MODULE_2__["PersonaService"] }
    ]; };
    ProgresoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Progreso",
            template: __webpack_require__("./app/progreso/progreso.component.html"),
            providers: [_shared_persona_persona_service__WEBPACK_IMPORTED_MODULE_2__["PersonaService"]]
        }),
        __metadata("design:paramtypes", [_shared_persona_persona_service__WEBPACK_IMPORTED_MODULE_2__["PersonaService"]])
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



/***/ }),

/***/ "./app/shared/persona/persona.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Persona", function() { return Persona; });
var Persona = /** @class */ (function () {
    function Persona(id, nombre, correo, idCasa) {
        this.id = id;
        this.nombre = nombre;
        this.correo = correo;
        this.idCasa = idCasa;
    }
    Persona.ctorParameters = function () { return [
        { type: Number },
        { type: String },
        { type: String },
        { type: Number }
    ]; };
    return Persona;
}());



/***/ }),

/***/ "./app/shared/persona/persona.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonaService", function() { return PersonaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _persona_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/shared/persona/persona.model.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/rxjs/_esm5/index.js");





var PersonaService = /** @class */ (function () {
    function PersonaService(http) {
        this.http = http;
    }
    PersonaService.prototype.load = function () {
        return this.http.get('http://192.140.25.7:9898/personas')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            var personaLista = [];
            data.forEach(function (persona) {
                personaLista.push(new _persona_model__WEBPACK_IMPORTED_MODULE_3__["Persona"](persona._id, persona.nombre, persona.correo, persona.idCasa));
            });
            return personaLista;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleErrors));
    };
    PersonaService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
    };
    PersonaService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    PersonaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PersonaService);
    return PersonaService;
}());



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvcHJvZ3Jlc28vcHJvZ3Jlc28tcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3Byb2dyZXNvL3Byb2dyZXNvLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9wcm9ncmVzby9wcm9ncmVzby5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3Byb2dyZXNvL3Byb2dyZXNvLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvc2hhcmVkL3BlcnNvbmEvcGVyc29uYS5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvc2hhcmVkL3BlcnNvbmEvcGVyc29uYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5QztBQUU4QjtBQUVkO0FBRXpELElBQU0sTUFBTSxHQUFXO0lBQ25CLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUscUVBQWlCLEVBQUU7Q0FDN0MsQ0FBQztBQU1GO0lBQUE7SUFBcUMsQ0FBQztJQUF6QixxQkFBcUI7UUFKakMsOERBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLG9GQUF3QixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwRCxPQUFPLEVBQUUsQ0FBQyxvRkFBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1cscUJBQXFCLENBQUk7SUFBRCw0QkFBQztDQUFBO0FBQUo7Ozs7Ozs7O0FDZGxDLHMvQzs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0Q7QUFFRTtBQUdlO0FBT25FO0lBNkJJLDJCQUFvQixjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUEzQmxELGdCQUFXLEdBQW1CLEVBQUUsQ0FBQztRQUdqQyxjQUFTLEdBQW9EO1lBQ3pEO2dCQUNJLE1BQU0sRUFBRSxVQUFVO2dCQUNsQixNQUFNLEVBQUUsWUFB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QyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQ2hDO0lBQ0wsQ0FBQztJQUVELHFDQUFZLEdBQVosVUFBYSxLQUFlO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ25DLE9BQU8sdURBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDOztnQkFuQnlCLCtEQUFVOztJQUYzQixjQUFjO1FBRDFCLGdFQUFVLEVBQUU7eUNBR2lCLCtEQUFVO09BRjNCLGNBQWMsQ0FzQjFCO0lBQUQscUJBQUM7Q0FBQTtBQXRCMEIiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgUHJvZ3Jlc29Db21wb25lbnQgfSBmcm9tIFwiLi9wcm9ncmVzby5jb21wb25lbnRcIjtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiBcIlwiLCBjb21wb25lbnQ6IFByb2dyZXNvQ29tcG9uZW50IH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBQcm9ncmVzb1JvdXRpbmdNb2R1bGUgeyB9XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEFjdGlvbkJhcj5cXG4gICAgPCEtLVxcbiAgICBVc2UgdGhlIE5hdmlnYXRpb25CdXR0b24gYXMgYSBzaWRlLWRyYXdlciBidXR0b24gaW4gQW5kcm9pZFxcbiAgICBiZWNhdXNlIEFjdGlvbkl0ZW1zIGFyZSBzaG93biBvbiB0aGUgcmlnaHQgc2lkZSBvZiB0aGUgQWN0aW9uQmFyXFxuICAgIC0tPlxcbiAgICA8TmF2aWdhdGlvbkJ1dHRvbiBpb3M6dmlzaWJpbGl0eT1cXFwiY29sbGFwc2VkXFxcIiBpY29uPVxcXCJyZXM6Ly9tZW51XFxcIiAodGFwKT1cXFwib25EcmF3ZXJCdXR0b25UYXAoKVxcXCI+PC9OYXZpZ2F0aW9uQnV0dG9uPlxcbiAgICA8IS0tXFxuICAgIFVzZSB0aGUgQWN0aW9uSXRlbSBmb3IgSU9TIHdpdGggcG9zaXRpb24gc2V0IHRvIGxlZnQuIFVzaW5nIHRoZVxcbiAgICBOYXZpZ2F0aW9uQnV0dG9uIGFzIGEgc2lkZS1kcmF3ZXIgYnV0dG9uIGluIGlPUyBpcyBub3QgcG9zc2libGUsXFxuICAgIGJlY2F1c2UgaXRzIGZ1bmN0aW9uIGlzIHRvIGFsd2F5cyBuYXZpZ2F0ZSBiYWNrIGluIHRoZSBhcHBsaWNhdGlvbi5cXG4gICAgLS0+XFxuICAgIDxBY3Rpb25JdGVtIGljb249XFxcInJlczovL21lbnVcXFwiIGFuZHJvaWQ6dmlzaWJpbGl0eT1cXFwiY29sbGFwc2VkXFxcIiAodGFwKT1cXFwib25EcmF3ZXJCdXR0b25UYXAoKVxcXCJcXG4gICAgICAgIGlvcy5wb3NpdGlvbj1cXFwibGVmdFxcXCI+XFxuICAgIDwvQWN0aW9uSXRlbT5cXG4gICAgPExhYmVsIHRleHQ9XFxcIlByb2dyZXNvIGRlbCBwYWNpZW50ZVxcXCI+PC9MYWJlbD5cXG48L0FjdGlvbkJhcj5cXG5cXG48TGlzdFZpZXcgW2l0ZW1zXT1cXFwicHJvZ3Jlc29zXFxcIiBpb3NFc3RpbWF0ZWRSb3dIZWlnaHQ9XFxcIjY1XFxcIj5cXG4gICAgPG5nLXRlbXBsYXRlIGxldC1wcm9ncmVzbz1cXFwiaXRlbVxcXCIgbGV0LWk9XFxcImluZGV4XFxcIj5cXG4gICAgICAgIDxHcmlkTGF5b3V0IHJvd3M9XFxcIjI1LDI1XFxcIj5cXG4gICAgICAgICAgICA8TGFiZWwgdGV4dFdyYXA9XFxcInRydWVcXFwiIHJvdz1cXFwiMFxcXCI+XFxuICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XFxuICAgICAgICAgICAgICAgICAgICA8U3BhbiBbdGV4dF09XFxcInByb2dyZXNvLmJsb3F1ZVxcXCI+PC9TcGFuPlxcbiAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cXG4gICAgICAgICAgICA8L0xhYmVsPlxcbiAgICAgICAgICAgIDxMYWJlbCAgcm93PVxcXCIxXFxcIj5cXG4gICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cXG4gICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XFxcIkZlY2hhOiBEZWwgXFxcIj48L1NwYW4+XFxuICAgICAgICAgICAgICAgICAgICA8U3BhbiBbdGV4dF09XFxcInByb2dyZXNvLmluaWNpb1xcXCI+PC9TcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cXFwiIGFsIFxcXCI+PC9TcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgPFNwYW4gW3RleHRdPVxcXCJwcm9ncmVzby5maW5cXFwiPjwvU3Bhbj5cXG4gICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XFxuICAgICAgICAgICAgPC9MYWJlbD5cXG4gICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgPC9uZy10ZW1wbGF0ZT5cXG48L0xpc3RWaWV3PlxcblwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlclwiO1xuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCI7XG5cbmltcG9ydCB7IFBlcnNvbmEgfSBmcm9tIFwiLi4vc2hhcmVkL3BlcnNvbmEvcGVyc29uYS5tb2RlbFwiO1xuaW1wb3J0IHsgUGVyc29uYVNlcnZpY2UgfSBmcm9tIFwiLi4vc2hhcmVkL3BlcnNvbmEvcGVyc29uYS5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIlByb2dyZXNvXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9wcm9ncmVzby5jb21wb25lbnQuaHRtbFwiLFxuICAgIHByb3ZpZGVyczogW1BlcnNvbmFTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBQcm9ncmVzb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBwZXJzb25hTGlzdDogQXJyYXk8UGVyc29uYT4gPSBbXTtcblxuXG4gICAgcHJvZ3Jlc29zOiB7YmxvcXVlOiBzdHJpbmcsIGluaWNpbzogc3RyaW5nLCBmaW46IHN0cmluZ31bXSA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgYmxvcXVlOiBcIkJsb3F1ZSA0XCIsXG4gICAgICAgICAgICBpbmljaW86IFwiMjAxOC8wOC8zMFwiLFxuICAgICAgICAgICAgZmluOiBcIjIwMTkvMTAvMjJcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBibG9xdWU6IFwiQmxvcXVlIDNcIixcbiAgICAgICAgICAgIGluaWNpbzogXCIyMDE5LzAzLzEwXCIsXG4gICAgICAgICAgICBmaW46IFwiMjAxOS8wOC8zMFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGJsb3F1ZTogXCJCbG9xdWUgMlwiLFxuICAgICAgICAgICAgaW5pY2lvOiBcIjIwMTkvMDEvMTVcIixcbiAgICAgICAgICAgIGZpbjogXCIyMDE5LzAzLzEwXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgYmxvcXVlOiBcIkJsb3F1ZSAxXCIsXG4gICAgICAgICAgICBpbmljaW86IFwiMjAxOC8xMS8xNVwiLFxuICAgICAgICAgICAgZmluOiBcIjIwMTgvMDEvMTVcIlxuICAgICAgICB9XG5cbiAgICAgICAgXVxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwZXJzb25hU2VydmljZTogUGVyc29uYVNlcnZpY2UpIHtcbiAgICAgICAgLy8gVXNlIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IgdG8gaW5qZWN0IHByb3ZpZGVycy5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgLy8gSW5pdCB5b3VyIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGhlcmUuXG4gICAgICAgIHRoaXMucGVyc29uYVNlcnZpY2UubG9hZCgpXG4gICAgICAgIC5zdWJzY3JpYmUoKGxvYWRlZFBlcnNvbmFzOiBbXSkgPT4ge1xuICAgICAgICAgICAgbG9hZGVkUGVyc29uYXMuZm9yRWFjaCgocGVyc29uYU9iamVjdDogUGVyc29uYSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucGVyc29uYUxpc3QudW5zaGlmdChwZXJzb25hT2JqZWN0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgc2lkZURyYXdlciA9IDxSYWRTaWRlRHJhd2VyPmFwcC5nZXRSb290VmlldygpO1xuICAgICAgICBzaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XG5cbmltcG9ydCB7IFByb2dyZXNvUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL3Byb2dyZXNvLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBQcm9ncmVzb0NvbXBvbmVudCB9IGZyb20gXCIuL3Byb2dyZXNvLmNvbXBvbmVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxuICAgICAgICBQcm9ncmVzb1JvdXRpbmdNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBQcm9ncmVzb0NvbXBvbmVudFxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBQcm9ncmVzb01vZHVsZSB7IH1cbiIsImV4cG9ydCBjbGFzcyBQZXJzb25hIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIGlkOiBudW1iZXIsXG4gICAgICAgIHB1YmxpYyBub21icmU6IHN0cmluZyxcbiAgICAgICAgcHVibGljIGNvcnJlbzogc3RyaW5nLFxuICAgICAgICBwdWJsaWMgaWRDYXNhOiBudW1iZXJcbiAgICApXG4gICAge31cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHsgbWFwLCBjYXRjaEVycm9yIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5pbXBvcnQgeyBQZXJzb25hIH0gZnJvbSBcIi4vcGVyc29uYS5tb2RlbFwiXG5pbXBvcnQgeyB0aHJvd0Vycm9yIH0gZnJvbSBcInJ4anNcIjtcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQZXJzb25hU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHt9XG5cbiAgICBsb2FkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnaHR0cDovLzE5Mi4xNDAuMjUuNzo5ODk4L3BlcnNvbmFzJylcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICBtYXAoKGRhdGE6IFtdKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHBlcnNvbmFMaXN0YSA9IFtdO1xuICAgICAgICAgICAgICAgIGRhdGEuZm9yRWFjaCgocGVyc29uYSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBwZXJzb25hTGlzdGEucHVzaChuZXcgUGVyc29uYSggKDxhbnk+cGVyc29uYSkuX2lkLCAoPGFueT5wZXJzb25hKS5ub21icmUsICg8YW55PnBlcnNvbmEpLmNvcnJlbywgKDxhbnk+cGVyc29uYSkuaWRDYXNhKSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBlcnNvbmFMaXN0YTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9ycylcbiAgICAgICAgKVxuICAgIH1cblxuICAgIGhhbmRsZUVycm9ycyhlcnJvcjogUmVzcG9uc2UpIHtcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyb3IpKTtcbiAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXJyb3IpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=