(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[0],{

/***/ "./app/diagnosticos/diagnosticos-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiagnosticosRoutingModule", function() { return DiagnosticosRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _diagnosticos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/diagnosticos/diagnosticos.component.ts");



var routes = [
    { path: "", component: _diagnosticos_component__WEBPACK_IMPORTED_MODULE_2__["DiagnosticosComponent"] }
];
var DiagnosticosRoutingModule = /** @class */ (function () {
    function DiagnosticosRoutingModule() {
    }
    DiagnosticosRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forChild(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], DiagnosticosRoutingModule);
    return DiagnosticosRoutingModule;
}());



/***/ }),

/***/ "./app/diagnosticos/diagnosticos.component.css":
/***/ (function(module, exports) {

module.exports = ".paciente {\n    background-color: #3f3f3f;\n    color: white;\n    align-items: center;\n    align-content: center;\n}\n\n.diagnosticoLabel {\n    padding-left: 25;\n}\n\n.title {\n    font-size: 23;\n}\n\n.icon{\n    height: 24;\n    width: 80;\n    transition: .3s transform ease-in-out;\n}\n\n.collapse{\n\n    transform: rotate(270deg);\n  }\n\n  .lista {\n      height: 300;\n      align-items: center;\n  }\n\n\n"

/***/ }),

/***/ "./app/diagnosticos/diagnosticos.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar>\n    <!--\n    Use the NavigationButton as a side-drawer button in Android\n    because ActionItems are shown on the right side of the ActionBar\n    -->\n    <NavigationButton ios:visibility=\"collapsed\" icon=\"res://menu\" (tap)=\"onDrawerButtonTap()\"></NavigationButton>\n    <!--\n    Use the ActionItem for IOS with position set to left. Using the\n    NavigationButton as a side-drawer button in iOS is not possible,\n    because its function is to always navigate back in the application.\n    -->\n    <ActionItem icon=\"res://menu\" android:visibility=\"collapsed\" (tap)=\"onDrawerButtonTap()\"\n        ios.position=\"left\">\n    </ActionItem>\n    <Label text=\"Reporte de diagnósticos\"></Label>\n</ActionBar>\n\n<StackLayout>\n<GridLayout rows=\"0,20,20,20\" columns=\"40,50,auto\" class='paciente'>\n    <Image row=\"1\" col=\"1\" class=\"nt-drawer__header-image fas t-36 p-t-5\" src=\"font://&#xf2bd;\"></Image>\n    <Label row=\"1\" col=\"2\" class=\"nt-drawer__header-brand\" text=\"Francisco Santiago Morales Roa\"></Label>\n    <Label row=\"2\" col=\"2\" class=\"nt-drawer__header-brand\" text=\"Exp: 1659-09\"></Label>\n    <Label row=\"3\" col=\"2\" class=\"nt-drawer__header-brand\" text=\"5 años\"></Label>\n</GridLayout>\n\n     <!-- Diagnostico / Collapse-->\n     <FlexboxLayout class=\"m-t-20 m-l-30\" justifyContent=\"space-between\"\n     alignItems=\"center\" alignContent=\"center\" >\n     <Label text=\"Diagnóstico\"  class=\"title\" (tap)=\"goCollapse($event)\">\n     </Label>\n     <Image src=\"res://down\" class=\"icon\" [ngClass]='{ collapse: isCollapsed }' (tap)=\"goCollapse($event)\"></Image>\n     </FlexboxLayout>\n            <ListView [items]=\"diagnosticos\" [visibility]=\"showCollapseBox ? 'visible' : 'collapse'\">\n                <ng-template let-diag=\"item\">\n                    <StackLayout borderWidth=\"1\">\n                        <Label class=\"diagnosticoLabel\" [text]=\"diag.diagnostico1\" row='0' col='1'></Label>\n                        <Label class=\"diagnosticoLabel\" [text]=\"diag.diagnostico2\" row=\"1\" col=\"1\"></Label>\n                        <Label class=\"diagnosticoLabel\" [text]=\"diag.diagnostico3\" row=\"1\" col=\"1\"></Label>\n                    </StackLayout>\n                </ng-template>\n            </ListView>\n\n         <!-- Terapia del lenguaje /Collapse -->\n    <FlexboxLayout class=\"m-t-20 m-l-30\" justifyContent=\"space-between\"\n      alignItems=\"center\" alignContent=\"center\">\n      <Label text=\"Terapia de lenguaje\" (tap)=\"goCollapse2()\" class=\"title\">\n      </Label>\n      <Image src=\"res://down\" class=\"icon\" [ngClass]='{ collapse: isCollapsed2 }' (tap)=\"goCollapse2($event)\"></Image>\n  </FlexboxLayout>\n       <ListView [items]=\"terapias\" [visibility]= \"showCollapseBox2 ? 'visible' : 'collapse'\">\n        <ng-template let-ter=\"item\" >\n            <StackLayout borderWidth=\"1\">\n                <Label textWrap=\"true\" [text]=\"ter.terapia1\"></Label>\n                <Label textWrap=\"true\" [text]=\"ter.terapia2\"></Label>\n                <Label textWrap=\"true\" [text]=\"ter.terapia3\"></Label>\n                <Label textWrap=\"true\" [text]=\"ter.terapia4\"></Label>\n                <Label textWrap=\"true\" [text]=\"ter.terapia5\"></Label>\n            </StackLayout>\n        </ng-template>\n       </ListView>\n\n                 <!-- Educación especial /Collapse -->\n <FlexboxLayout class=\"m-t-20 m-l-30\" justifyContent=\"space-between\"\n     alignItems=\"center\" alignContent=\"center\">\n     <Label text=\"Educación especial\" (tap)=\"goCollapse3($event)\" class=\"title\">\n     </Label>\n     <Image src=\"res://down\" class=\"icon\" [ngClass]='{ collapse: isCollapsed3 }' (tap)=\"goCollapse3($event)\"></Image>\n</FlexboxLayout>\n <StackLayout borderWidth=\"1\">\n     <Label text=\"Prueba\" class=\"box pull-left\"\n         [visibility]= \"showCollapseBox3 ? 'visible' : 'collapse'\">\n     </Label>\n </StackLayout>\n                 <!-- Plan de trabajo /Collapse -->\n <FlexboxLayout class=\"m-t-20 m-l-30\" justifyContent=\"space-between\"\n     alignItems=\"center\" alignContent=\"center\">\n     <Label text=\"Plan de trabajo\" (tap)=\"goCollapse4($event)\" class=\"title\">\n     </Label>\n     <Image src=\"res://down\" class=\"icon\" [ngClass]='{ collapse: isCollapsed4 }' (tap)=\"goCollapse4($event)\"></Image>\n</FlexboxLayout>\n<ListView [items]=\"listaPlanTrabajo\" iosEstimatedRowHeight=\"65\" class=\"lista\" [visibility]= \"showCollapseBox4 ? 'visible' : 'collapse'\">\n    <ng-template let-plan=\"item\" let-i=\"index\">\n        <GridLayout rows=\"30\" >\n            <Label textWrap=\"true\" [text]=\"plan.indicacionesProcedimiento\"></Label>\n        </GridLayout>\n    </ng-template>\n</ListView>\n</StackLayout>\n\n"

/***/ }),

/***/ "./app/diagnosticos/diagnosticos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiagnosticosComponent", function() { return DiagnosticosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_plan_trabajo_plan_trabajo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/shared/plan_trabajo/plan-trabajo.service.ts");



var DiagnosticosComponent = /** @class */ (function () {
    function DiagnosticosComponent(planTrabajoService) {
        this.planTrabajoService = planTrabajoService;
        this.listaPlanTrabajo = [];
        this.diagnosticos = [
            {
                diagnostico1: 'Retardo de lenguaje anártico moderado',
                diagnostico2: 'Audición normal',
                diagnostico3: 'Audución bilateral'
            }
        ];
        this.terapias = [
            {
                terapia1: '1. Ejercicios de respiración y relajación.',
                terapia2: '2. Ejercicios prefonatorios y praxias orofaciales.',
                terapia3: '3. Ejercicios para fonemas /r/, /rr/, /l/, /ch/, /f/, /k/, /s/, intermedia',
                terapia4: '4. Trabajar aumento de vocabulario acorde a la edad y clasificación por campos semánticos. Hacer láminas con figuras de buen tamaño para que las aprenda a escribir',
                terapia5: '5. Trabajar estimulación de aspecto pragmático mediante cantos, juegos y cuentos.'
            }
        ];
        this.showCollapseBox = false;
        this.showCollapseBox2 = false;
        this.showCollapseBox3 = false;
        this.showCollapseBox4 = false;
        this.isCollapsed = true;
        this.isCollapsed2 = true;
        this.isCollapsed3 = true;
        this.isCollapsed4 = true;
        // Use the component constructor to inject providers.
    }
    DiagnosticosComponent.prototype.goCollapse = function (args) {
        if (this.showCollapseBox) {
            this.showCollapseBox = false;
            this.isCollapsed = !this.isCollapsed;
        }
        else {
            this.showCollapseBox = true;
            this.isCollapsed = !this.isCollapsed;
        }
    };
    DiagnosticosComponent.prototype.goCollapse2 = function (args) {
        if (this.showCollapseBox2) {
            this.showCollapseBox2 = false;
            this.isCollapsed2 = !this.isCollapsed2;
        }
        else {
            this.showCollapseBox2 = true;
            this.isCollapsed2 = !this.isCollapsed2;
        }
    };
    DiagnosticosComponent.prototype.goCollapse3 = function (args) {
        if (this.showCollapseBox3) {
            this.showCollapseBox3 = false;
            this.isCollapsed3 = !this.isCollapsed3;
        }
        else {
            this.showCollapseBox3 = true;
            this.isCollapsed3 = !this.isCollapsed3;
        }
    };
    DiagnosticosComponent.prototype.goCollapse4 = function (args) {
        if (this.showCollapseBox4) {
            this.showCollapseBox4 = false;
            this.isCollapsed4 = !this.isCollapsed4;
        }
        else {
            this.showCollapseBox4 = true;
            this.isCollapsed4 = !this.isCollapsed4;
        }
    };
    DiagnosticosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.planTrabajoService.obtenerPlanTrabajo()
            .subscribe(function (fetchPlanTrabajo) {
            fetchPlanTrabajo.forEach(function (planTrabajoObject) {
                _this.listaPlanTrabajo.unshift(planTrabajoObject);
            });
        });
    };
    DiagnosticosComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1__["getRootView"]();
        sideDrawer.showDrawer();
    };
    DiagnosticosComponent.ctorParameters = function () { return [
        { type: _shared_plan_trabajo_plan_trabajo_service__WEBPACK_IMPORTED_MODULE_2__["PlanTrabajoService"] }
    ]; };
    DiagnosticosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Diagnosticos",
            template: __webpack_require__("./app/diagnosticos/diagnosticos.component.html"),
            providers: [_shared_plan_trabajo_plan_trabajo_service__WEBPACK_IMPORTED_MODULE_2__["PlanTrabajoService"]],
            styles: [__webpack_require__("./app/diagnosticos/diagnosticos.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_plan_trabajo_plan_trabajo_service__WEBPACK_IMPORTED_MODULE_2__["PlanTrabajoService"]])
    ], DiagnosticosComponent);
    return DiagnosticosComponent;
}());



/***/ }),

/***/ "./app/diagnosticos/diagnosticos.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiagnosticosModule", function() { return DiagnosticosModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/common.js");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _diagnosticos_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/diagnosticos/diagnosticos-routing.module.ts");
/* harmony import */ var _diagnosticos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/diagnosticos/diagnosticos.component.ts");




var DiagnosticosModule = /** @class */ (function () {
    function DiagnosticosModule() {
    }
    DiagnosticosModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__["NativeScriptCommonModule"],
                _diagnosticos_routing_module__WEBPACK_IMPORTED_MODULE_2__["DiagnosticosRoutingModule"]
            ],
            declarations: [
                _diagnosticos_component__WEBPACK_IMPORTED_MODULE_3__["DiagnosticosComponent"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]
            ]
        })
    ], DiagnosticosModule);
    return DiagnosticosModule;
}());



/***/ }),

/***/ "./app/shared/plan_trabajo/plan-trabajo.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanTrabajo", function() { return PlanTrabajo; });
var PlanTrabajo = /** @class */ (function () {
    function PlanTrabajo(idPlanTrabajo, idPaciente, fechaPlanTrabajo, estadoPlanTrabajo, indicacionesProcedimiento, numeroSesiones, numeroBloque, temporalidad) {
        this.idPlanTrabajo = idPlanTrabajo;
        this.idPaciente = idPaciente;
        this.fechaPlanTrabajo = fechaPlanTrabajo;
        this.estadoPlanTrabajo = estadoPlanTrabajo;
        this.indicacionesProcedimiento = indicacionesProcedimiento;
        this.numeroSesiones = numeroSesiones;
        this.numeroBloque = numeroBloque;
        this.temporalidad = temporalidad;
    }
    PlanTrabajo.ctorParameters = function () { return [
        { type: Number },
        { type: Number },
        { type: String },
        { type: String },
        { type: String },
        { type: Number },
        { type: Number },
        { type: String }
    ]; };
    return PlanTrabajo;
}());



/***/ }),

/***/ "./app/shared/plan_trabajo/plan-trabajo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanTrabajoService", function() { return PlanTrabajoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _plan_trabajo_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/shared/plan_trabajo/plan-trabajo.model.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/rxjs/_esm5/index.js");





var PlanTrabajoService = /** @class */ (function () {
    function PlanTrabajoService(http) {
        this.http = http;
    }
    PlanTrabajoService.prototype.obtenerPlanTrabajo = function () {
        return this.http.get('http://192.140.25.7:8080/api/plan_trabajo/paciente/1')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            var listaPlanTrabajo = [];
            data.forEach(function (plan_trabajo) {
                listaPlanTrabajo.push(new _plan_trabajo_model__WEBPACK_IMPORTED_MODULE_3__["PlanTrabajo"](plan_trabajo.idPlanTrabajo, plan_trabajo.idPaciente, plan_trabajo.fechaPlanTrabajo, plan_trabajo.estadoPlanTrabajo, plan_trabajo.indicacionesProcedimiento, plan_trabajo.numeroSesiones, plan_trabajo.numeroBloque, plan_trabajo.temporalidad));
            });
            return listaPlanTrabajo;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleErrors));
    };
    PlanTrabajoService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
    };
    PlanTrabajoService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    PlanTrabajoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PlanTrabajoService);
    return PlanTrabajoService;
}());



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvZGlhZ25vc3RpY29zL2RpYWdub3N0aWNvcy1yb3V0aW5nLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvZGlhZ25vc3RpY29zL2RpYWdub3N0aWNvcy5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9kaWFnbm9zdGljb3MvZGlhZ25vc3RpY29zLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9kaWFnbm9zdGljb3MvZGlhZ25vc3RpY29zLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvZGlhZ25vc3RpY29zL2RpYWdub3N0aWNvcy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NoYXJlZC9wbGFuX3RyYWJham8vcGxhbi10cmFiYWpvLm1vZGVsLnRzIiwid2VicGFjazovLy8uL2FwcC9zaGFyZWQvcGxhbl90cmFiYWpvL3BsYW4tdHJhYmFqby5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5QztBQUU4QjtBQUVOO0FBRWpFLElBQU0sTUFBTSxHQUFXO0lBQ25CLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsNkVBQXFCLEVBQUU7Q0FDakQsQ0FBQztBQU1GO0lBQUE7SUFBeUMsQ0FBQztJQUE3Qix5QkFBeUI7UUFKckMsOERBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLG9GQUF3QixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwRCxPQUFPLEVBQUUsQ0FBQyxvRkFBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1cseUJBQXlCLENBQUk7SUFBRCxnQ0FBQztDQUFBO0FBQUo7Ozs7Ozs7O0FDZHRDLDZCQUE2QixnQ0FBZ0MsbUJBQW1CLDBCQUEwQiw0QkFBNEIsR0FBRyx1QkFBdUIsdUJBQXVCLEdBQUcsWUFBWSxvQkFBb0IsR0FBRyxVQUFVLGlCQUFpQixnQkFB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QUFPLGdCQUFnQjtRQUMzQixDQUFDLENBQUMsRUFDRixpRUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FDaEM7SUFDTCxDQUFDO0lBRUQseUNBQVksR0FBWixVQUFhLEtBQWU7UUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDbkMsT0FBTyx1REFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUM7O2dCQTVCeUIsK0RBQVU7O0lBRjNCLGtCQUFrQjtRQUQ5QixnRUFBVSxFQUFFO3lDQUdpQiwrREFBVTtPQUYzQixrQkFBa0IsQ0FnQzlCO0lBQUQseUJBQUM7Q0FBQTtBQWhDOEIiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgRGlhZ25vc3RpY29zQ29tcG9uZW50IH0gZnJvbSBcIi4vZGlhZ25vc3RpY29zLmNvbXBvbmVudFwiO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6IFwiXCIsIGNvbXBvbmVudDogRGlhZ25vc3RpY29zQ29tcG9uZW50IH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBEaWFnbm9zdGljb3NSb3V0aW5nTW9kdWxlIHsgfVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5wYWNpZW50ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjNmM2Y7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZGlhZ25vc3RpY29MYWJlbCB7XFxuICAgIHBhZGRpbmctbGVmdDogMjU7XFxufVxcblxcbi50aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMjM7XFxufVxcblxcbi5pY29ue1xcbiAgICBoZWlnaHQ6IDI0O1xcbiAgICB3aWR0aDogODA7XFxuICAgIHRyYW5zaXRpb246IC4zcyB0cmFuc2Zvcm0gZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5jb2xsYXBzZXtcXG5cXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcXG4gIH1cXG5cXG4gIC5saXN0YSB7XFxuICAgICAgaGVpZ2h0OiAzMDA7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG5cXG5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8QWN0aW9uQmFyPlxcbiAgICA8IS0tXFxuICAgIFVzZSB0aGUgTmF2aWdhdGlvbkJ1dHRvbiBhcyBhIHNpZGUtZHJhd2VyIGJ1dHRvbiBpbiBBbmRyb2lkXFxuICAgIGJlY2F1c2UgQWN0aW9uSXRlbXMgYXJlIHNob3duIG9uIHRoZSByaWdodCBzaWRlIG9mIHRoZSBBY3Rpb25CYXJcXG4gICAgLS0+XFxuICAgIDxOYXZpZ2F0aW9uQnV0dG9uIGlvczp2aXNpYmlsaXR5PVxcXCJjb2xsYXBzZWRcXFwiIGljb249XFxcInJlczovL21lbnVcXFwiICh0YXApPVxcXCJvbkRyYXdlckJ1dHRvblRhcCgpXFxcIj48L05hdmlnYXRpb25CdXR0b24+XFxuICAgIDwhLS1cXG4gICAgVXNlIHRoZSBBY3Rpb25JdGVtIGZvciBJT1Mgd2l0aCBwb3NpdGlvbiBzZXQgdG8gbGVmdC4gVXNpbmcgdGhlXFxuICAgIE5hdmlnYXRpb25CdXR0b24gYXMgYSBzaWRlLWRyYXdlciBidXR0b24gaW4gaU9TIGlzIG5vdCBwb3NzaWJsZSxcXG4gICAgYmVjYXVzZSBpdHMgZnVuY3Rpb24gaXMgdG8gYWx3YXlzIG5hdmlnYXRlIGJhY2sgaW4gdGhlIGFwcGxpY2F0aW9uLlxcbiAgICAtLT5cXG4gICAgPEFjdGlvbkl0ZW0gaWNvbj1cXFwicmVzOi8vbWVudVxcXCIgYW5kcm9pZDp2aXNpYmlsaXR5PVxcXCJjb2xsYXBzZWRcXFwiICh0YXApPVxcXCJvbkRyYXdlckJ1dHRvblRhcCgpXFxcIlxcbiAgICAgICAgaW9zLnBvc2l0aW9uPVxcXCJsZWZ0XFxcIj5cXG4gICAgPC9BY3Rpb25JdGVtPlxcbiAgICA8TGFiZWwgdGV4dD1cXFwiUmVwb3J0ZSBkZSBkaWFnbsOzc3RpY29zXFxcIj48L0xhYmVsPlxcbjwvQWN0aW9uQmFyPlxcblxcbjxTdGFja0xheW91dD5cXG48R3JpZExheW91dCByb3dzPVxcXCIwLDIwLDIwLDIwXFxcIiBjb2x1bW5zPVxcXCI0MCw1MCxhdXRvXFxcIiBjbGFzcz0ncGFjaWVudGUnPlxcbiAgICA8SW1hZ2Ugcm93PVxcXCIxXFxcIiBjb2w9XFxcIjFcXFwiIGNsYXNzPVxcXCJudC1kcmF3ZXJfX2hlYWRlci1pbWFnZSBmYXMgdC0zNiBwLXQtNVxcXCIgc3JjPVxcXCJmb250Oi8vJiN4ZjJiZDtcXFwiPjwvSW1hZ2U+XFxuICAgIDxMYWJlbCByb3c9XFxcIjFcXFwiIGNvbD1cXFwiMlxcXCIgY2xhc3M9XFxcIm50LWRyYXdlcl9faGVhZGVyLWJyYW5kXFxcIiB0ZXh0PVxcXCJGcmFuY2lzY28gU2FudGlhZ28gTW9yYWxlcyBSb2FcXFwiPjwvTGFiZWw+XFxuICAgIDxMYWJlbCByb3c9XFxcIjJcXFwiIGNvbD1cXFwiMlxcXCIgY2xhc3M9XFxcIm50LWRyYXdlcl9faGVhZGVyLWJyYW5kXFxcIiB0ZXh0PVxcXCJFeHA6IDE2NTktMDlcXFwiPjwvTGFiZWw+XFxuICAgIDxMYWJlbCByb3c9XFxcIjNcXFwiIGNvbD1cXFwiMlxcXCIgY2xhc3M9XFxcIm50LWRyYXdlcl9faGVhZGVyLWJyYW5kXFxcIiB0ZXh0PVxcXCI1IGHDsW9zXFxcIj48L0xhYmVsPlxcbjwvR3JpZExheW91dD5cXG5cXG4gICAgIDwhLS0gRGlhZ25vc3RpY28gLyBDb2xsYXBzZS0tPlxcbiAgICAgPEZsZXhib3hMYXlvdXQgY2xhc3M9XFxcIm0tdC0yMCBtLWwtMzBcXFwiIGp1c3RpZnlDb250ZW50PVxcXCJzcGFjZS1iZXR3ZWVuXFxcIlxcbiAgICAgYWxpZ25JdGVtcz1cXFwiY2VudGVyXFxcIiBhbGlnbkNvbnRlbnQ9XFxcImNlbnRlclxcXCIgPlxcbiAgICAgPExhYmVsIHRleHQ9XFxcIkRpYWduw7NzdGljb1xcXCIgIGNsYXNzPVxcXCJ0aXRsZVxcXCIgKHRhcCk9XFxcImdvQ29sbGFwc2UoJGV2ZW50KVxcXCI+XFxuICAgICA8L0xhYmVsPlxcbiAgICAgPEltYWdlIHNyYz1cXFwicmVzOi8vZG93blxcXCIgY2xhc3M9XFxcImljb25cXFwiIFtuZ0NsYXNzXT0neyBjb2xsYXBzZTogaXNDb2xsYXBzZWQgfScgKHRhcCk9XFxcImdvQ29sbGFwc2UoJGV2ZW50KVxcXCI+PC9JbWFnZT5cXG4gICAgIDwvRmxleGJveExheW91dD5cXG4gICAgICAgICAgICA8TGlzdFZpZXcgW2l0ZW1zXT1cXFwiZGlhZ25vc3RpY29zXFxcIiBbdmlzaWJpbGl0eV09XFxcInNob3dDb2xsYXBzZUJveCA/ICd2aXNpYmxlJyA6ICdjb2xsYXBzZSdcXFwiPlxcbiAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWRpYWc9XFxcIml0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGJvcmRlcldpZHRoPVxcXCIxXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImRpYWdub3N0aWNvTGFiZWxcXFwiIFt0ZXh0XT1cXFwiZGlhZy5kaWFnbm9zdGljbzFcXFwiIHJvdz0nMCcgY29sPScxJz48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwiZGlhZ25vc3RpY29MYWJlbFxcXCIgW3RleHRdPVxcXCJkaWFnLmRpYWdub3N0aWNvMlxcXCIgcm93PVxcXCIxXFxcIiBjb2w9XFxcIjFcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJkaWFnbm9zdGljb0xhYmVsXFxcIiBbdGV4dF09XFxcImRpYWcuZGlhZ25vc3RpY28zXFxcIiByb3c9XFxcIjFcXFwiIGNvbD1cXFwiMVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxuICAgICAgICAgICAgPC9MaXN0Vmlldz5cXG5cXG4gICAgICAgICA8IS0tIFRlcmFwaWEgZGVsIGxlbmd1YWplIC9Db2xsYXBzZSAtLT5cXG4gICAgPEZsZXhib3hMYXlvdXQgY2xhc3M9XFxcIm0tdC0yMCBtLWwtMzBcXFwiIGp1c3RpZnlDb250ZW50PVxcXCJzcGFjZS1iZXR3ZWVuXFxcIlxcbiAgICAgIGFsaWduSXRlbXM9XFxcImNlbnRlclxcXCIgYWxpZ25Db250ZW50PVxcXCJjZW50ZXJcXFwiPlxcbiAgICAgIDxMYWJlbCB0ZXh0PVxcXCJUZXJhcGlhIGRlIGxlbmd1YWplXFxcIiAodGFwKT1cXFwiZ29Db2xsYXBzZTIoKVxcXCIgY2xhc3M9XFxcInRpdGxlXFxcIj5cXG4gICAgICA8L0xhYmVsPlxcbiAgICAgIDxJbWFnZSBzcmM9XFxcInJlczovL2Rvd25cXFwiIGNsYXNzPVxcXCJpY29uXFxcIiBbbmdDbGFzc109J3sgY29sbGFwc2U6IGlzQ29sbGFwc2VkMiB9JyAodGFwKT1cXFwiZ29Db2xsYXBzZTIoJGV2ZW50KVxcXCI+PC9JbWFnZT5cXG4gIDwvRmxleGJveExheW91dD5cXG4gICAgICAgPExpc3RWaWV3IFtpdGVtc109XFxcInRlcmFwaWFzXFxcIiBbdmlzaWJpbGl0eV09IFxcXCJzaG93Q29sbGFwc2VCb3gyID8gJ3Zpc2libGUnIDogJ2NvbGxhcHNlJ1xcXCI+XFxuICAgICAgICA8bmctdGVtcGxhdGUgbGV0LXRlcj1cXFwiaXRlbVxcXCIgPlxcbiAgICAgICAgICAgIDxTdGFja0xheW91dCBib3JkZXJXaWR0aD1cXFwiMVxcXCI+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgW3RleHRdPVxcXCJ0ZXIudGVyYXBpYTFcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgW3RleHRdPVxcXCJ0ZXIudGVyYXBpYTJcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgW3RleHRdPVxcXCJ0ZXIudGVyYXBpYTNcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgW3RleHRdPVxcXCJ0ZXIudGVyYXBpYTRcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgW3RleHRdPVxcXCJ0ZXIudGVyYXBpYTVcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XFxuICAgICAgIDwvTGlzdFZpZXc+XFxuXFxuICAgICAgICAgICAgICAgICA8IS0tIEVkdWNhY2nDs24gZXNwZWNpYWwgL0NvbGxhcHNlIC0tPlxcbiA8RmxleGJveExheW91dCBjbGFzcz1cXFwibS10LTIwIG0tbC0zMFxcXCIganVzdGlmeUNvbnRlbnQ9XFxcInNwYWNlLWJldHdlZW5cXFwiXFxuICAgICBhbGlnbkl0ZW1zPVxcXCJjZW50ZXJcXFwiIGFsaWduQ29udGVudD1cXFwiY2VudGVyXFxcIj5cXG4gICAgIDxMYWJlbCB0ZXh0PVxcXCJFZHVjYWNpw7NuIGVzcGVjaWFsXFxcIiAodGFwKT1cXFwiZ29Db2xsYXBzZTMoJGV2ZW50KVxcXCIgY2xhc3M9XFxcInRpdGxlXFxcIj5cXG4gICAgIDwvTGFiZWw+XFxuICAgICA8SW1hZ2Ugc3JjPVxcXCJyZXM6Ly9kb3duXFxcIiBjbGFzcz1cXFwiaWNvblxcXCIgW25nQ2xhc3NdPSd7IGNvbGxhcHNlOiBpc0NvbGxhcHNlZDMgfScgKHRhcCk9XFxcImdvQ29sbGFwc2UzKCRldmVudClcXFwiPjwvSW1hZ2U+XFxuPC9GbGV4Ym94TGF5b3V0PlxcbiA8U3RhY2tMYXlvdXQgYm9yZGVyV2lkdGg9XFxcIjFcXFwiPlxcbiAgICAgPExhYmVsIHRleHQ9XFxcIlBydWViYVxcXCIgY2xhc3M9XFxcImJveCBwdWxsLWxlZnRcXFwiXFxuICAgICAgICAgW3Zpc2liaWxpdHldPSBcXFwic2hvd0NvbGxhcHNlQm94MyA/ICd2aXNpYmxlJyA6ICdjb2xsYXBzZSdcXFwiPlxcbiAgICAgPC9MYWJlbD5cXG4gPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICAgICAgIDwhLS0gUGxhbiBkZSB0cmFiYWpvIC9Db2xsYXBzZSAtLT5cXG4gPEZsZXhib3hMYXlvdXQgY2xhc3M9XFxcIm0tdC0yMCBtLWwtMzBcXFwiIGp1c3RpZnlDb250ZW50PVxcXCJzcGFjZS1iZXR3ZWVuXFxcIlxcbiAgICAgYWxpZ25JdGVtcz1cXFwiY2VudGVyXFxcIiBhbGlnbkNvbnRlbnQ9XFxcImNlbnRlclxcXCI+XFxuICAgICA8TGFiZWwgdGV4dD1cXFwiUGxhbiBkZSB0cmFiYWpvXFxcIiAodGFwKT1cXFwiZ29Db2xsYXBzZTQoJGV2ZW50KVxcXCIgY2xhc3M9XFxcInRpdGxlXFxcIj5cXG4gICAgIDwvTGFiZWw+XFxuICAgICA8SW1hZ2Ugc3JjPVxcXCJyZXM6Ly9kb3duXFxcIiBjbGFzcz1cXFwiaWNvblxcXCIgW25nQ2xhc3NdPSd7IGNvbGxhcHNlOiBpc0NvbGxhcHNlZDQgfScgKHRhcCk9XFxcImdvQ29sbGFwc2U0KCRldmVudClcXFwiPjwvSW1hZ2U+XFxuPC9GbGV4Ym94TGF5b3V0PlxcbjxMaXN0VmlldyBbaXRlbXNdPVxcXCJsaXN0YVBsYW5UcmFiYWpvXFxcIiBpb3NFc3RpbWF0ZWRSb3dIZWlnaHQ9XFxcIjY1XFxcIiBjbGFzcz1cXFwibGlzdGFcXFwiIFt2aXNpYmlsaXR5XT0gXFxcInNob3dDb2xsYXBzZUJveDQgPyAndmlzaWJsZScgOiAnY29sbGFwc2UnXFxcIj5cXG4gICAgPG5nLXRlbXBsYXRlIGxldC1wbGFuPVxcXCJpdGVtXFxcIiBsZXQtaT1cXFwiaW5kZXhcXFwiPlxcbiAgICAgICAgPEdyaWRMYXlvdXQgcm93cz1cXFwiMzBcXFwiID5cXG4gICAgICAgICAgICA8TGFiZWwgdGV4dFdyYXA9XFxcInRydWVcXFwiIFt0ZXh0XT1cXFwicGxhbi5pbmRpY2FjaW9uZXNQcm9jZWRpbWllbnRvXFxcIj48L0xhYmVsPlxcbiAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICA8L25nLXRlbXBsYXRlPlxcbjwvTGlzdFZpZXc+XFxuPC9TdGFja0xheW91dD5cXG5cXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIjtcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xuaW1wb3J0IHsgUGxhblRyYWJham9TZXJ2aWNlIH0gZnJvbSBcIi4uL3NoYXJlZC9wbGFuX3RyYWJham8vcGxhbi10cmFiYWpvLnNlcnZpY2VcIlxuaW1wb3J0IHsgUGxhblRyYWJham8gfSBmcm9tIFwiLi4vc2hhcmVkL3BsYW5fdHJhYmFqby9wbGFuLXRyYWJham8ubW9kZWxcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiRGlhZ25vc3RpY29zXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9kaWFnbm9zdGljb3MuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHMgOiBbXCIuL2RpYWdub3N0aWNvcy5jb21wb25lbnQuY3NzXCIgXSxcbiAgICBwcm92aWRlcnM6IFtQbGFuVHJhYmFqb1NlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIERpYWdub3N0aWNvc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBsaXN0YVBsYW5UcmFiYWpvOiBBcnJheTxQbGFuVHJhYmFqbz4gPSBbXTtcblxuICAgIGRpYWdub3N0aWNvczoge2RpYWdub3N0aWNvMTogc3RyaW5nLCBkaWFnbm9zdGljbzI6IHN0cmluZywgZGlhZ25vc3RpY28zOiBzdHJpbmcgfVtdID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBkaWFnbm9zdGljbzE6ICdSZXRhcmRvIGRlIGxlbmd1YWplIGFuw6FydGljbyBtb2RlcmFkbycsXG4gICAgICAgICAgICBkaWFnbm9zdGljbzI6ICdBdWRpY2nDs24gbm9ybWFsJyxcbiAgICAgICAgICAgIGRpYWdub3N0aWNvMzogJ0F1ZHVjacOzbiBiaWxhdGVyYWwnXG4gICAgICAgIH1cbiAgICBdXG4gICAgdGVyYXBpYXM6IHsgdGVyYXBpYTE6IHN0cmluZywgdGVyYXBpYTI6IHN0cmluZywgdGVyYXBpYTM6IHN0cmluZywgdGVyYXBpYTQ6IHN0cmluZywgdGVyYXBpYTU6IHN0cmluZ31bXSA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgdGVyYXBpYTE6ICcxLiBFamVyY2ljaW9zIGRlIHJlc3BpcmFjacOzbiB5IHJlbGFqYWNpw7NuLicsXG4gICAgICAgICAgICB0ZXJhcGlhMjogJzIuIEVqZXJjaWNpb3MgcHJlZm9uYXRvcmlvcyB5IHByYXhpYXMgb3JvZmFjaWFsZXMuJyxcbiAgICAgICAgICAgIHRlcmFwaWEzOiAnMy4gRWplcmNpY2lvcyBwYXJhIGZvbmVtYXMgL3IvLCAvcnIvLCAvbC8sIC9jaC8sIC9mLywgL2svLCAvcy8sIGludGVybWVkaWEnLFxuICAgICAgICAgICAgdGVyYXBpYTQ6ICc0LiBUcmFiYWphciBhdW1lbnRvIGRlIHZvY2FidWxhcmlvIGFjb3JkZSBhIGxhIGVkYWQgeSBjbGFzaWZpY2FjacOzbiBwb3IgY2FtcG9zIHNlbcOhbnRpY29zLiBIYWNlciBsw6FtaW5hcyBjb24gZmlndXJhcyBkZSBidWVuIHRhbWHDsW8gcGFyYSBxdWUgbGFzIGFwcmVuZGEgYSBlc2NyaWJpcicsXG4gICAgICAgICAgICB0ZXJhcGlhNTogJzUuIFRyYWJhamFyIGVzdGltdWxhY2nDs24gZGUgYXNwZWN0byBwcmFnbcOhdGljbyBtZWRpYW50ZSBjYW50b3MsIGp1ZWdvcyB5IGN1ZW50b3MuJ1xuICAgICAgICB9XG4gICAgXVxuICAgICAgICAgcHVibGljIHNob3dDb2xsYXBzZUJveCA9IGZhbHNlO1xuICAgICAgICAgcHVibGljIHNob3dDb2xsYXBzZUJveDIgPSBmYWxzZTtcbiAgICAgICAgIHB1YmxpYyBzaG93Q29sbGFwc2VCb3gzID0gZmFsc2U7XG4gICAgICAgICBwdWJsaWMgc2hvd0NvbGxhcHNlQm94NCA9IGZhbHNlO1xuICAgICAgICAgaXNDb2xsYXBzZWQgPSB0cnVlO1xuICAgICAgICAgaXNDb2xsYXBzZWQyID0gdHJ1ZTtcbiAgICAgICAgIGlzQ29sbGFwc2VkMyA9IHRydWU7XG4gICAgICAgICBpc0NvbGxhcHNlZDQgPSB0cnVlO1xuXG4gICAgICAgICBnb0NvbGxhcHNlKGFyZ3MpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNob3dDb2xsYXBzZUJveCl7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Q29sbGFwc2VCb3ggPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmlzQ29sbGFwc2VkID0gIXRoaXMuaXNDb2xsYXBzZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0NvbGxhcHNlQm94ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmlzQ29sbGFwc2VkID0gIXRoaXMuaXNDb2xsYXBzZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZ29Db2xsYXBzZTIoYXJncykge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2hvd0NvbGxhcHNlQm94Mil7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Q29sbGFwc2VCb3gyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0NvbGxhcHNlZDIgPSAhdGhpcy5pc0NvbGxhcHNlZDI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0NvbGxhcHNlQm94MiA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0NvbGxhcHNlZDIgPSAhdGhpcy5pc0NvbGxhcHNlZDI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZ29Db2xsYXBzZTMoYXJncykge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2hvd0NvbGxhcHNlQm94Myl7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Q29sbGFwc2VCb3gzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0NvbGxhcHNlZDMgPSAhdGhpcy5pc0NvbGxhcHNlZDM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0NvbGxhcHNlQm94MyA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0NvbGxhcHNlZDMgPSAhdGhpcy5pc0NvbGxhcHNlZDM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZ29Db2xsYXBzZTQoYXJncykge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2hvd0NvbGxhcHNlQm94NCl7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Q29sbGFwc2VCb3g0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0NvbGxhcHNlZDQgPSAhdGhpcy5pc0NvbGxhcHNlZDQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0NvbGxhcHNlQm94NCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0NvbGxhcHNlZDQgPSAhdGhpcy5pc0NvbGxhcHNlZDQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBsYW5UcmFiYWpvU2VydmljZTogUGxhblRyYWJham9TZXJ2aWNlKSB7XG4gICAgICAgIC8vIFVzZSB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yIHRvIGluamVjdCBwcm92aWRlcnMuXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucGxhblRyYWJham9TZXJ2aWNlLm9idGVuZXJQbGFuVHJhYmFqbygpXG4gICAgICAgIC5zdWJzY3JpYmUoKGZldGNoUGxhblRyYWJham86IFtdKSA9PiB7XG4gICAgICAgICAgICBmZXRjaFBsYW5UcmFiYWpvLmZvckVhY2goKHBsYW5UcmFiYWpvT2JqZWN0OiBQbGFuVHJhYmFqbykgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubGlzdGFQbGFuVHJhYmFqby51bnNoaWZ0KHBsYW5UcmFiYWpvT2JqZWN0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgc2lkZURyYXdlciA9IDxSYWRTaWRlRHJhd2VyPmFwcC5nZXRSb290VmlldygpO1xuICAgICAgICBzaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcbiAgICB9XG5cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xuXG5pbXBvcnQgeyBEaWFnbm9zdGljb3NSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vZGlhZ25vc3RpY29zLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBEaWFnbm9zdGljb3NDb21wb25lbnQgfSBmcm9tIFwiLi9kaWFnbm9zdGljb3MuY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgICAgIERpYWdub3N0aWNvc1JvdXRpbmdNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBEaWFnbm9zdGljb3NDb21wb25lbnRcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgRGlhZ25vc3RpY29zTW9kdWxlIHsgfVxuIiwiZXhwb3J0IGNsYXNzIFBsYW5UcmFiYWpvIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIGlkUGxhblRyYWJham86IG51bWJlcixcbiAgICAgICAgcHVibGljIGlkUGFjaWVudGU6IG51bWJlcixcbiAgICAgICAgcHVibGljIGZlY2hhUGxhblRyYWJham86IHN0cmluZyxcbiAgICAgICAgcHVibGljIGVzdGFkb1BsYW5UcmFiYWpvOiBzdHJpbmcsXG4gICAgICAgIHB1YmxpYyBpbmRpY2FjaW9uZXNQcm9jZWRpbWllbnRvOiBzdHJpbmcsXG4gICAgICAgIHB1YmxpYyBudW1lcm9TZXNpb25lczogbnVtYmVyLFxuICAgICAgICBwdWJsaWMgbnVtZXJvQmxvcXVlOiBudW1iZXIsXG4gICAgICAgIHB1YmxpYyB0ZW1wb3JhbGlkYWQ6IHN0cmluZyxcblxuICAgICkge31cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHsgbWFwLCBjYXRjaEVycm9yIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5pbXBvcnQgeyBQbGFuVHJhYmFqbyB9IGZyb20gXCIuL3BsYW4tdHJhYmFqby5tb2RlbFwiO1xuaW1wb3J0IHsgdGhyb3dFcnJvciB9IGZyb20gXCJyeGpzXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQbGFuVHJhYmFqb1NlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxuXG4gICAgb2J0ZW5lclBsYW5UcmFiYWpvKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnaHR0cDovLzE5Mi4xNDAuMjUuNzo4MDgwL2FwaS9wbGFuX3RyYWJham8vcGFjaWVudGUvMScpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgICAgbWFwKChkYXRhOiBbXSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBsaXN0YVBsYW5UcmFiYWpvID0gW107XG4gICAgICAgICAgICAgICAgZGF0YS5mb3JFYWNoKChwbGFuX3RyYWJham8pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdGFQbGFuVHJhYmFqby5wdXNoKG5ldyBQbGFuVHJhYmFqbyhcbiAgICAgICAgICAgICAgICAgICAgICAgICg8YW55PnBsYW5fdHJhYmFqbykuaWRQbGFuVHJhYmFqbyxcbiAgICAgICAgICAgICAgICAgICAgICAgICg8YW55PnBsYW5fdHJhYmFqbykuaWRQYWNpZW50ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICg8YW55PnBsYW5fdHJhYmFqbykuZmVjaGFQbGFuVHJhYmFqbyxcbiAgICAgICAgICAgICAgICAgICAgICAgICg8YW55PnBsYW5fdHJhYmFqbykuZXN0YWRvUGxhblRyYWJham8sXG4gICAgICAgICAgICAgICAgICAgICAgICAoPGFueT5wbGFuX3RyYWJham8pLmluZGljYWNpb25lc1Byb2NlZGltaWVudG8sXG4gICAgICAgICAgICAgICAgICAgICAgICAoPGFueT5wbGFuX3RyYWJham8pLm51bWVyb1Nlc2lvbmVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgKDxhbnk+cGxhbl90cmFiYWpvKS5udW1lcm9CbG9xdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAoPGFueT5wbGFuX3RyYWJham8pLnRlbXBvcmFsaWRhZFxuICAgICAgICAgICAgICAgICAgICApKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbGlzdGFQbGFuVHJhYmFqb1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3JzKVxuICAgICAgICApXG4gICAgfVxuXG4gICAgaGFuZGxlRXJyb3JzKGVycm9yOiBSZXNwb25zZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvcikpO1xuICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnJvcik7XG4gICAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6IiJ9