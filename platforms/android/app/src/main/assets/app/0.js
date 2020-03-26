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

module.exports = ".paciente {\n    background-color: #3f3f3f;\n    color: white;\n    align-items: center;\n    align-content: center;\n}\n\n.diagnosticoLabel {\n    padding-left: 25;\n}\n\n.title {\n    font-size: 23;\n}\n\n.icon{\n    height: 24;\n    width: 80;\n    transition: .3s transform ease-in-out;\n}\n\n.collapse{\n\n    transform: rotate(270deg);\n  }\n\n\n"

/***/ }),

/***/ "./app/diagnosticos/diagnosticos.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar>\n    <!--\n    Use the NavigationButton as a side-drawer button in Android\n    because ActionItems are shown on the right side of the ActionBar\n    -->\n    <NavigationButton ios:visibility=\"collapsed\" icon=\"res://menu\" (tap)=\"onDrawerButtonTap()\"></NavigationButton>\n    <!--\n    Use the ActionItem for IOS with position set to left. Using the\n    NavigationButton as a side-drawer button in iOS is not possible,\n    because its function is to always navigate back in the application.\n    -->\n    <ActionItem icon=\"res://menu\" android:visibility=\"collapsed\" (tap)=\"onDrawerButtonTap()\"\n        ios.position=\"left\">\n    </ActionItem>\n    <Label text=\"Reporte de diagnósticos\"></Label>\n</ActionBar>\n\n<ScrollView>\n<StackLayout>\n<GridLayout rows=\"0,20,20,20\" columns=\"40,50,auto\" class='paciente'>\n    <Image row=\"1\" col=\"1\" class=\"nt-drawer__header-image fas t-36 p-t-5\" src=\"font://&#xf2bd;\"></Image>\n    <Label row=\"1\" col=\"2\" class=\"nt-drawer__header-brand\" text=\"Francisco Santiago Morales Roa\"></Label>\n    <Label row=\"2\" col=\"2\" class=\"nt-drawer__header-brand\" text=\"Exp: 1659-09\"></Label>\n    <Label row=\"3\" col=\"2\" class=\"nt-drawer__header-brand\" text=\"5 años\"></Label>\n</GridLayout>\n\n     <!-- Diagnostico / Collapse-->\n     <FlexboxLayout class=\"m-t-20 m-l-30\" justifyContent=\"space-between\"\n     alignItems=\"center\" alignContent=\"center\" >\n     <Label text=\"Diagnóstico\"  class=\"title\" (tap)=\"goCollapse($event)\">\n     </Label>\n     <Image src=\"res://down\" class=\"icon\" [ngClass]='{ collapse: isCollapsed }' (tap)=\"goCollapse($event)\"></Image>\n     </FlexboxLayout>\n            <ListView [items]=\"diagnosticos\" [visibility]=\"showCollapseBox ? 'visible' : 'collapse'\">\n                <ng-template let-diag=\"item\">\n                    <StackLayout borderWidth=\"1\">\n                        <Label class=\"diagnosticoLabel\" [text]=\"diag.diagnostico1\" row='0' col='1'></Label>\n                        <Label class=\"diagnosticoLabel\" [text]=\"diag.diagnostico2\" row=\"1\" col=\"1\"></Label>\n                        <Label class=\"diagnosticoLabel\" [text]=\"diag.diagnostico3\" row=\"1\" col=\"1\"></Label>\n                    </StackLayout>\n                </ng-template>\n            </ListView>\n\n         <!-- Terapia del lenguaje /Collapse -->\n    <FlexboxLayout class=\"m-t-20 m-l-30\" justifyContent=\"space-between\"\n      alignItems=\"center\" alignContent=\"center\">\n      <Label text=\"Terapia de lenguaje\" (tap)=\"goCollapse2()\" class=\"title\">\n      </Label>\n      <Image src=\"res://down\" class=\"icon\" [ngClass]='{ collapse: isCollapsed2 }' (tap)=\"goCollapse2($event)\"></Image>\n  </FlexboxLayout>\n       <ListView [items]=\"listaPaciente\" [visibility]= \"showCollapseBox2 ? 'visible' : 'collapse'\">\n        <ng-template let-ter=\"item\" >\n            <StackLayout borderWidth=\"1\">\n                <Label textWrap=\"true\" [text]=\"ter.idPaciente\"></Label>\n                <Label textWrap=\"true\" [text]=\"ter.nombrePaciente\"></Label>\n                <Label textWrap=\"true\" [text]=\"ter.apellidoPaciente\"></Label>\n                <Label textWrap=\"true\" [text]=\"ter.edadPaciente\"></Label>\n                <Label textWrap=\"true\" [text]=\"ter.numero_expediente\"></Label>\n            </StackLayout>\n        </ng-template>\n       </ListView>\n\n                 <!-- Educación especial /Collapse -->\n <FlexboxLayout class=\"m-t-20 m-l-30\" justifyContent=\"space-between\"\n     alignItems=\"center\" alignContent=\"center\">\n     <Label text=\"Educación especial\" (tap)=\"goCollapse3($event)\" class=\"title\">\n     </Label>\n     <Image src=\"res://down\" class=\"icon\" [ngClass]='{ collapse: isCollapsed3 }' (tap)=\"goCollapse3($event)\"></Image>\n</FlexboxLayout>\n <StackLayout borderWidth=\"1\">\n     <Label text=\"Prueba\" class=\"box pull-left\"\n         [visibility]= \"showCollapseBox3 ? 'visible' : 'collapse'\">\n     </Label>\n </StackLayout>\n                 <!-- Plan de trabajo /Collapse -->\n <FlexboxLayout class=\"m-t-20 m-l-30\" justifyContent=\"space-between\"\n     alignItems=\"center\" alignContent=\"center\">\n     <Label text=\"Plan de trabajo\" (tap)=\"goCollapse4($event)\" class=\"title\">\n     </Label>\n     <Image src=\"res://down\" class=\"icon\" [ngClass]='{ collapse: isCollapsed4 }' (tap)=\"goCollapse4($event)\"></Image>\n</FlexboxLayout>\n<ListView [items]=\"planTrabajo\" [visibility]= \"showCollapseBox4 ? 'visible' : 'collapse'\">\n    <ng-template let-plan=\"item\" >\n        <StackLayout borderWidth=\"1\">\n            <Label textWrap=\"true\" [text]=\"plan.plan1\"></Label>\n            <Label textWrap=\"true\" [text]=\"plan.plan2\"></Label>\n        </StackLayout>\n    </ng-template>\n   </ListView>\n</StackLayout>\n</ScrollView>\n"

/***/ }),

/***/ "./app/diagnosticos/diagnosticos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiagnosticosComponent", function() { return DiagnosticosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_pacientes_paciente_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/shared/pacientes/paciente.service.ts");



var DiagnosticosComponent = /** @class */ (function () {
    function DiagnosticosComponent(pacienteService) {
        this.pacienteService = pacienteService;
        this.listaPaciente = [];
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
        this.planTrabajo = [
            {
                plan1: '1. Continuar terapia de lenguaje y aprendizaje semanal',
                plan2: '2. Cita al terminar terapias'
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
        this.pacienteService.obtenerPacientes()
            .subscribe(function (fetchPaciente) {
            fetchPaciente.forEach(function (pacienteObject) {
                _this.listaPaciente.unshift(pacienteObject);
            });
        });
    };
    DiagnosticosComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1__["getRootView"]();
        sideDrawer.showDrawer();
    };
    DiagnosticosComponent.ctorParameters = function () { return [
        { type: _shared_pacientes_paciente_service__WEBPACK_IMPORTED_MODULE_2__["PacienteService"] }
    ]; };
    DiagnosticosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Diagnosticos",
            template: __webpack_require__("./app/diagnosticos/diagnosticos.component.html"),
            providers: [_shared_pacientes_paciente_service__WEBPACK_IMPORTED_MODULE_2__["PacienteService"]],
            styles: [__webpack_require__("./app/diagnosticos/diagnosticos.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_pacientes_paciente_service__WEBPACK_IMPORTED_MODULE_2__["PacienteService"]])
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

/***/ "./app/shared/pacientes/paciente.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Paciente", function() { return Paciente; });
var Paciente = /** @class */ (function () {
    function Paciente(idPaciente, nombrePaciente, apellidoPaciente, edadPaciente, numero_expediente, usuarioAppMovil) {
        this.idPaciente = idPaciente;
        this.nombrePaciente = nombrePaciente;
        this.apellidoPaciente = apellidoPaciente;
        this.edadPaciente = edadPaciente;
        this.numero_expediente = numero_expediente;
        this.usuarioAppMovil = usuarioAppMovil;
    }
    Paciente.ctorParameters = function () { return [
        { type: Number },
        { type: String },
        { type: String },
        { type: Number },
        { type: String },
        { type: String }
    ]; };
    return Paciente;
}());



/***/ }),

/***/ "./app/shared/pacientes/paciente.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PacienteService", function() { return PacienteService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _paciente_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/shared/pacientes/paciente.model.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/rxjs/_esm5/index.js");





var PacienteService = /** @class */ (function () {
    function PacienteService(http) {
        this.http = http;
    }
    PacienteService.prototype.obtenerPacientes = function () {
        return this.http.get('http://192.140.25.7:8080/paciente')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            var listaPaciente = [];
            data.forEach(function (paciente) {
                listaPaciente.push(new _paciente_model__WEBPACK_IMPORTED_MODULE_3__["Paciente"](paciente.idPaciente, paciente.nombrePaciente, paciente.apellidoPaciente, paciente.edadPaciente, paciente.numero_expediente, paciente.usuarioAppMovil));
            });
            return listaPaciente;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleErrors));
    };
    PacienteService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
    };
    PacienteService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    PacienteService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PacienteService);
    return PacienteService;
}());



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvZGlhZ25vc3RpY29zL2RpYWdub3N0aWNvcy1yb3V0aW5nLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvZGlhZ25vc3RpY29zL2RpYWdub3N0aWNvcy5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9kaWFnbm9zdGljb3MvZGlhZ25vc3RpY29zLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9kaWFnbm9zdGljb3MvZGlhZ25vc3RpY29zLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvZGlhZ25vc3RpY29zL2RpYWdub3N0aWNvcy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NoYXJlZC9wYWNpZW50ZXMvcGFjaWVudGUubW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NoYXJlZC9wYWNpZW50ZXMvcGFjaWVudGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUM7QUFFOEI7QUFFTjtBQUVqRSxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLDZFQUFxQixFQUFFO0NBQ2pELENBQUM7QUFNRjtJQUFBO0lBQXlDLENBQUM7SUFBN0IseUJBQXlCO1FBSnJDLDhEQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxvRkFBd0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEQsT0FBTyxFQUFFLENBQUMsb0ZBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLHlCQUF5QixDQUFJO0lBQUQsZ0NBQUM7Q0FBQTtBQUFKOzs7Ozs7OztBQ2R0Qyw2QkFBNkIsZ0NBQWdDLG1CQUFtQiwwQkFBMEIsNEJBQTRCLEdBQUcsdUJBQXVCLHVCQUF1QixHQUFHLFlBQVksb0JBQW9CLEdBQUcsVUFBVSxpQkFBaUIsZ0JBQWdCLDRDQUE0QyxHQUFH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QU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ25DLE9BQU8sdURBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDOztnQkExQnlCLCtEQUFVOztJQUYzQixlQUFlO1FBRDNCLGdFQUFVLEVBQUU7eUNBR2lCLCtEQUFVO09BRjNCLGVBQWUsQ0E4QjNCO0lBQUQsc0JBQUM7Q0FBQTtBQTlCMkIiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgRGlhZ25vc3RpY29zQ29tcG9uZW50IH0gZnJvbSBcIi4vZGlhZ25vc3RpY29zLmNvbXBvbmVudFwiO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6IFwiXCIsIGNvbXBvbmVudDogRGlhZ25vc3RpY29zQ29tcG9uZW50IH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBEaWFnbm9zdGljb3NSb3V0aW5nTW9kdWxlIHsgfVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5wYWNpZW50ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjNmM2Y7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZGlhZ25vc3RpY29MYWJlbCB7XFxuICAgIHBhZGRpbmctbGVmdDogMjU7XFxufVxcblxcbi50aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMjM7XFxufVxcblxcbi5pY29ue1xcbiAgICBoZWlnaHQ6IDI0O1xcbiAgICB3aWR0aDogODA7XFxuICAgIHRyYW5zaXRpb246IC4zcyB0cmFuc2Zvcm0gZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5jb2xsYXBzZXtcXG5cXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcXG4gIH1cXG5cXG5cXG5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8QWN0aW9uQmFyPlxcbiAgICA8IS0tXFxuICAgIFVzZSB0aGUgTmF2aWdhdGlvbkJ1dHRvbiBhcyBhIHNpZGUtZHJhd2VyIGJ1dHRvbiBpbiBBbmRyb2lkXFxuICAgIGJlY2F1c2UgQWN0aW9uSXRlbXMgYXJlIHNob3duIG9uIHRoZSByaWdodCBzaWRlIG9mIHRoZSBBY3Rpb25CYXJcXG4gICAgLS0+XFxuICAgIDxOYXZpZ2F0aW9uQnV0dG9uIGlvczp2aXNpYmlsaXR5PVxcXCJjb2xsYXBzZWRcXFwiIGljb249XFxcInJlczovL21lbnVcXFwiICh0YXApPVxcXCJvbkRyYXdlckJ1dHRvblRhcCgpXFxcIj48L05hdmlnYXRpb25CdXR0b24+XFxuICAgIDwhLS1cXG4gICAgVXNlIHRoZSBBY3Rpb25JdGVtIGZvciBJT1Mgd2l0aCBwb3NpdGlvbiBzZXQgdG8gbGVmdC4gVXNpbmcgdGhlXFxuICAgIE5hdmlnYXRpb25CdXR0b24gYXMgYSBzaWRlLWRyYXdlciBidXR0b24gaW4gaU9TIGlzIG5vdCBwb3NzaWJsZSxcXG4gICAgYmVjYXVzZSBpdHMgZnVuY3Rpb24gaXMgdG8gYWx3YXlzIG5hdmlnYXRlIGJhY2sgaW4gdGhlIGFwcGxpY2F0aW9uLlxcbiAgICAtLT5cXG4gICAgPEFjdGlvbkl0ZW0gaWNvbj1cXFwicmVzOi8vbWVudVxcXCIgYW5kcm9pZDp2aXNpYmlsaXR5PVxcXCJjb2xsYXBzZWRcXFwiICh0YXApPVxcXCJvbkRyYXdlckJ1dHRvblRhcCgpXFxcIlxcbiAgICAgICAgaW9zLnBvc2l0aW9uPVxcXCJsZWZ0XFxcIj5cXG4gICAgPC9BY3Rpb25JdGVtPlxcbiAgICA8TGFiZWwgdGV4dD1cXFwiUmVwb3J0ZSBkZSBkaWFnbsOzc3RpY29zXFxcIj48L0xhYmVsPlxcbjwvQWN0aW9uQmFyPlxcblxcbjxTY3JvbGxWaWV3PlxcbjxTdGFja0xheW91dD5cXG48R3JpZExheW91dCByb3dzPVxcXCIwLDIwLDIwLDIwXFxcIiBjb2x1bW5zPVxcXCI0MCw1MCxhdXRvXFxcIiBjbGFzcz0ncGFjaWVudGUnPlxcbiAgICA8SW1hZ2Ugcm93PVxcXCIxXFxcIiBjb2w9XFxcIjFcXFwiIGNsYXNzPVxcXCJudC1kcmF3ZXJfX2hlYWRlci1pbWFnZSBmYXMgdC0zNiBwLXQtNVxcXCIgc3JjPVxcXCJmb250Oi8vJiN4ZjJiZDtcXFwiPjwvSW1hZ2U+XFxuICAgIDxMYWJlbCByb3c9XFxcIjFcXFwiIGNvbD1cXFwiMlxcXCIgY2xhc3M9XFxcIm50LWRyYXdlcl9faGVhZGVyLWJyYW5kXFxcIiB0ZXh0PVxcXCJGcmFuY2lzY28gU2FudGlhZ28gTW9yYWxlcyBSb2FcXFwiPjwvTGFiZWw+XFxuICAgIDxMYWJlbCByb3c9XFxcIjJcXFwiIGNvbD1cXFwiMlxcXCIgY2xhc3M9XFxcIm50LWRyYXdlcl9faGVhZGVyLWJyYW5kXFxcIiB0ZXh0PVxcXCJFeHA6IDE2NTktMDlcXFwiPjwvTGFiZWw+XFxuICAgIDxMYWJlbCByb3c9XFxcIjNcXFwiIGNvbD1cXFwiMlxcXCIgY2xhc3M9XFxcIm50LWRyYXdlcl9faGVhZGVyLWJyYW5kXFxcIiB0ZXh0PVxcXCI1IGHDsW9zXFxcIj48L0xhYmVsPlxcbjwvR3JpZExheW91dD5cXG5cXG4gICAgIDwhLS0gRGlhZ25vc3RpY28gLyBDb2xsYXBzZS0tPlxcbiAgICAgPEZsZXhib3hMYXlvdXQgY2xhc3M9XFxcIm0tdC0yMCBtLWwtMzBcXFwiIGp1c3RpZnlDb250ZW50PVxcXCJzcGFjZS1iZXR3ZWVuXFxcIlxcbiAgICAgYWxpZ25JdGVtcz1cXFwiY2VudGVyXFxcIiBhbGlnbkNvbnRlbnQ9XFxcImNlbnRlclxcXCIgPlxcbiAgICAgPExhYmVsIHRleHQ9XFxcIkRpYWduw7NzdGljb1xcXCIgIGNsYXNzPVxcXCJ0aXRsZVxcXCIgKHRhcCk9XFxcImdvQ29sbGFwc2UoJGV2ZW50KVxcXCI+XFxuICAgICA8L0xhYmVsPlxcbiAgICAgPEltYWdlIHNyYz1cXFwicmVzOi8vZG93blxcXCIgY2xhc3M9XFxcImljb25cXFwiIFtuZ0NsYXNzXT0neyBjb2xsYXBzZTogaXNDb2xsYXBzZWQgfScgKHRhcCk9XFxcImdvQ29sbGFwc2UoJGV2ZW50KVxcXCI+PC9JbWFnZT5cXG4gICAgIDwvRmxleGJveExheW91dD5cXG4gICAgICAgICAgICA8TGlzdFZpZXcgW2l0ZW1zXT1cXFwiZGlhZ25vc3RpY29zXFxcIiBbdmlzaWJpbGl0eV09XFxcInNob3dDb2xsYXBzZUJveCA/ICd2aXNpYmxlJyA6ICdjb2xsYXBzZSdcXFwiPlxcbiAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWRpYWc9XFxcIml0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGJvcmRlcldpZHRoPVxcXCIxXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImRpYWdub3N0aWNvTGFiZWxcXFwiIFt0ZXh0XT1cXFwiZGlhZy5kaWFnbm9zdGljbzFcXFwiIHJvdz0nMCcgY29sPScxJz48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwiZGlhZ25vc3RpY29MYWJlbFxcXCIgW3RleHRdPVxcXCJkaWFnLmRpYWdub3N0aWNvMlxcXCIgcm93PVxcXCIxXFxcIiBjb2w9XFxcIjFcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJkaWFnbm9zdGljb0xhYmVsXFxcIiBbdGV4dF09XFxcImRpYWcuZGlhZ25vc3RpY28zXFxcIiByb3c9XFxcIjFcXFwiIGNvbD1cXFwiMVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxuICAgICAgICAgICAgPC9MaXN0Vmlldz5cXG5cXG4gICAgICAgICA8IS0tIFRlcmFwaWEgZGVsIGxlbmd1YWplIC9Db2xsYXBzZSAtLT5cXG4gICAgPEZsZXhib3hMYXlvdXQgY2xhc3M9XFxcIm0tdC0yMCBtLWwtMzBcXFwiIGp1c3RpZnlDb250ZW50PVxcXCJzcGFjZS1iZXR3ZWVuXFxcIlxcbiAgICAgIGFsaWduSXRlbXM9XFxcImNlbnRlclxcXCIgYWxpZ25Db250ZW50PVxcXCJjZW50ZXJcXFwiPlxcbiAgICAgIDxMYWJlbCB0ZXh0PVxcXCJUZXJhcGlhIGRlIGxlbmd1YWplXFxcIiAodGFwKT1cXFwiZ29Db2xsYXBzZTIoKVxcXCIgY2xhc3M9XFxcInRpdGxlXFxcIj5cXG4gICAgICA8L0xhYmVsPlxcbiAgICAgIDxJbWFnZSBzcmM9XFxcInJlczovL2Rvd25cXFwiIGNsYXNzPVxcXCJpY29uXFxcIiBbbmdDbGFzc109J3sgY29sbGFwc2U6IGlzQ29sbGFwc2VkMiB9JyAodGFwKT1cXFwiZ29Db2xsYXBzZTIoJGV2ZW50KVxcXCI+PC9JbWFnZT5cXG4gIDwvRmxleGJveExheW91dD5cXG4gICAgICAgPExpc3RWaWV3IFtpdGVtc109XFxcImxpc3RhUGFjaWVudGVcXFwiIFt2aXNpYmlsaXR5XT0gXFxcInNob3dDb2xsYXBzZUJveDIgPyAndmlzaWJsZScgOiAnY29sbGFwc2UnXFxcIj5cXG4gICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtdGVyPVxcXCJpdGVtXFxcIiA+XFxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGJvcmRlcldpZHRoPVxcXCIxXFxcIj5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBbdGV4dF09XFxcInRlci5pZFBhY2llbnRlXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dFdyYXA9XFxcInRydWVcXFwiIFt0ZXh0XT1cXFwidGVyLm5vbWJyZVBhY2llbnRlXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dFdyYXA9XFxcInRydWVcXFwiIFt0ZXh0XT1cXFwidGVyLmFwZWxsaWRvUGFjaWVudGVcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgW3RleHRdPVxcXCJ0ZXIuZWRhZFBhY2llbnRlXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dFdyYXA9XFxcInRydWVcXFwiIFt0ZXh0XT1cXFwidGVyLm51bWVyb19leHBlZGllbnRlXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICA8L25nLXRlbXBsYXRlPlxcbiAgICAgICA8L0xpc3RWaWV3PlxcblxcbiAgICAgICAgICAgICAgICAgPCEtLSBFZHVjYWNpw7NuIGVzcGVjaWFsIC9Db2xsYXBzZSAtLT5cXG4gPEZsZXhib3hMYXlvdXQgY2xhc3M9XFxcIm0tdC0yMCBtLWwtMzBcXFwiIGp1c3RpZnlDb250ZW50PVxcXCJzcGFjZS1iZXR3ZWVuXFxcIlxcbiAgICAgYWxpZ25JdGVtcz1cXFwiY2VudGVyXFxcIiBhbGlnbkNvbnRlbnQ9XFxcImNlbnRlclxcXCI+XFxuICAgICA8TGFiZWwgdGV4dD1cXFwiRWR1Y2FjacOzbiBlc3BlY2lhbFxcXCIgKHRhcCk9XFxcImdvQ29sbGFwc2UzKCRldmVudClcXFwiIGNsYXNzPVxcXCJ0aXRsZVxcXCI+XFxuICAgICA8L0xhYmVsPlxcbiAgICAgPEltYWdlIHNyYz1cXFwicmVzOi8vZG93blxcXCIgY2xhc3M9XFxcImljb25cXFwiIFtuZ0NsYXNzXT0neyBjb2xsYXBzZTogaXNDb2xsYXBzZWQzIH0nICh0YXApPVxcXCJnb0NvbGxhcHNlMygkZXZlbnQpXFxcIj48L0ltYWdlPlxcbjwvRmxleGJveExheW91dD5cXG4gPFN0YWNrTGF5b3V0IGJvcmRlcldpZHRoPVxcXCIxXFxcIj5cXG4gICAgIDxMYWJlbCB0ZXh0PVxcXCJQcnVlYmFcXFwiIGNsYXNzPVxcXCJib3ggcHVsbC1sZWZ0XFxcIlxcbiAgICAgICAgIFt2aXNpYmlsaXR5XT0gXFxcInNob3dDb2xsYXBzZUJveDMgPyAndmlzaWJsZScgOiAnY29sbGFwc2UnXFxcIj5cXG4gICAgIDwvTGFiZWw+XFxuIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgICAgICA8IS0tIFBsYW4gZGUgdHJhYmFqbyAvQ29sbGFwc2UgLS0+XFxuIDxGbGV4Ym94TGF5b3V0IGNsYXNzPVxcXCJtLXQtMjAgbS1sLTMwXFxcIiBqdXN0aWZ5Q29udGVudD1cXFwic3BhY2UtYmV0d2VlblxcXCJcXG4gICAgIGFsaWduSXRlbXM9XFxcImNlbnRlclxcXCIgYWxpZ25Db250ZW50PVxcXCJjZW50ZXJcXFwiPlxcbiAgICAgPExhYmVsIHRleHQ9XFxcIlBsYW4gZGUgdHJhYmFqb1xcXCIgKHRhcCk9XFxcImdvQ29sbGFwc2U0KCRldmVudClcXFwiIGNsYXNzPVxcXCJ0aXRsZVxcXCI+XFxuICAgICA8L0xhYmVsPlxcbiAgICAgPEltYWdlIHNyYz1cXFwicmVzOi8vZG93blxcXCIgY2xhc3M9XFxcImljb25cXFwiIFtuZ0NsYXNzXT0neyBjb2xsYXBzZTogaXNDb2xsYXBzZWQ0IH0nICh0YXApPVxcXCJnb0NvbGxhcHNlNCgkZXZlbnQpXFxcIj48L0ltYWdlPlxcbjwvRmxleGJveExheW91dD5cXG48TGlzdFZpZXcgW2l0ZW1zXT1cXFwicGxhblRyYWJham9cXFwiIFt2aXNpYmlsaXR5XT0gXFxcInNob3dDb2xsYXBzZUJveDQgPyAndmlzaWJsZScgOiAnY29sbGFwc2UnXFxcIj5cXG4gICAgPG5nLXRlbXBsYXRlIGxldC1wbGFuPVxcXCJpdGVtXFxcIiA+XFxuICAgICAgICA8U3RhY2tMYXlvdXQgYm9yZGVyV2lkdGg9XFxcIjFcXFwiPlxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgW3RleHRdPVxcXCJwbGFuLnBsYW4xXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgW3RleHRdPVxcXCJwbGFuLnBsYW4yXFxcIj48L0xhYmVsPlxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgPC9uZy10ZW1wbGF0ZT5cXG4gICA8L0xpc3RWaWV3PlxcbjwvU3RhY2tMYXlvdXQ+XFxuPC9TY3JvbGxWaWV3PlxcblwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlclwiO1xuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCI7XG5pbXBvcnQgeyBQYWNpZW50ZSB9IGZyb20gXCIuLi9zaGFyZWQvcGFjaWVudGVzL3BhY2llbnRlLm1vZGVsXCI7XG5pbXBvcnQgeyBQYWNpZW50ZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2hhcmVkL3BhY2llbnRlcy9wYWNpZW50ZS5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkRpYWdub3N0aWNvc1wiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vZGlhZ25vc3RpY29zLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzIDogW1wiLi9kaWFnbm9zdGljb3MuY29tcG9uZW50LmNzc1wiIF0sXG4gICAgcHJvdmlkZXJzOiBbUGFjaWVudGVTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBEaWFnbm9zdGljb3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgbGlzdGFQYWNpZW50ZTogQXJyYXk8UGFjaWVudGU+ID0gW107XG5cbiAgICBkaWFnbm9zdGljb3M6IHtkaWFnbm9zdGljbzE6IHN0cmluZywgZGlhZ25vc3RpY28yOiBzdHJpbmcsIGRpYWdub3N0aWNvMzogc3RyaW5nIH1bXSA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgZGlhZ25vc3RpY28xOiAnUmV0YXJkbyBkZSBsZW5ndWFqZSBhbsOhcnRpY28gbW9kZXJhZG8nLFxuICAgICAgICAgICAgZGlhZ25vc3RpY28yOiAnQXVkaWNpw7NuIG5vcm1hbCcsXG4gICAgICAgICAgICBkaWFnbm9zdGljbzM6ICdBdWR1Y2nDs24gYmlsYXRlcmFsJ1xuICAgICAgICB9XG4gICAgXVxuICAgIHRlcmFwaWFzOiB7IHRlcmFwaWExOiBzdHJpbmcsIHRlcmFwaWEyOiBzdHJpbmcsIHRlcmFwaWEzOiBzdHJpbmcsIHRlcmFwaWE0OiBzdHJpbmcsIHRlcmFwaWE1OiBzdHJpbmd9W10gPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRlcmFwaWExOiAnMS4gRWplcmNpY2lvcyBkZSByZXNwaXJhY2nDs24geSByZWxhamFjacOzbi4nLFxuICAgICAgICAgICAgdGVyYXBpYTI6ICcyLiBFamVyY2ljaW9zIHByZWZvbmF0b3Jpb3MgeSBwcmF4aWFzIG9yb2ZhY2lhbGVzLicsXG4gICAgICAgICAgICB0ZXJhcGlhMzogJzMuIEVqZXJjaWNpb3MgcGFyYSBmb25lbWFzIC9yLywgL3JyLywgL2wvLCAvY2gvLCAvZi8sIC9rLywgL3MvLCBpbnRlcm1lZGlhJyxcbiAgICAgICAgICAgIHRlcmFwaWE0OiAnNC4gVHJhYmFqYXIgYXVtZW50byBkZSB2b2NhYnVsYXJpbyBhY29yZGUgYSBsYSBlZGFkIHkgY2xhc2lmaWNhY2nDs24gcG9yIGNhbXBvcyBzZW3DoW50aWNvcy4gSGFjZXIgbMOhbWluYXMgY29uIGZpZ3VyYXMgZGUgYnVlbiB0YW1hw7FvIHBhcmEgcXVlIGxhcyBhcHJlbmRhIGEgZXNjcmliaXInLFxuICAgICAgICAgICAgdGVyYXBpYTU6ICc1LiBUcmFiYWphciBlc3RpbXVsYWNpw7NuIGRlIGFzcGVjdG8gcHJhZ23DoXRpY28gbWVkaWFudGUgY2FudG9zLCBqdWVnb3MgeSBjdWVudG9zLidcbiAgICAgICAgfVxuICAgIF1cbiAgICBwbGFuVHJhYmFqbzoge3BsYW4xOiBzdHJpbmcsIHBsYW4yOiBzdHJpbmd9W10gPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBsYW4xOiAnMS4gQ29udGludWFyIHRlcmFwaWEgZGUgbGVuZ3VhamUgeSBhcHJlbmRpemFqZSBzZW1hbmFsJyxcbiAgICAgICAgICAgIHBsYW4yOiAnMi4gQ2l0YSBhbCB0ZXJtaW5hciB0ZXJhcGlhcydcbiAgICAgICAgfVxuICAgIF1cbiAgICAgICAgIHB1YmxpYyBzaG93Q29sbGFwc2VCb3ggPSBmYWxzZTtcbiAgICAgICAgIHB1YmxpYyBzaG93Q29sbGFwc2VCb3gyID0gZmFsc2U7XG4gICAgICAgICBwdWJsaWMgc2hvd0NvbGxhcHNlQm94MyA9IGZhbHNlO1xuICAgICAgICAgcHVibGljIHNob3dDb2xsYXBzZUJveDQgPSBmYWxzZTtcbiAgICAgICAgIGlzQ29sbGFwc2VkID0gdHJ1ZTtcbiAgICAgICAgIGlzQ29sbGFwc2VkMiA9IHRydWU7XG4gICAgICAgICBpc0NvbGxhcHNlZDMgPSB0cnVlO1xuICAgICAgICAgaXNDb2xsYXBzZWQ0ID0gdHJ1ZTtcblxuICAgICAgICAgZ29Db2xsYXBzZShhcmdzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zaG93Q29sbGFwc2VCb3gpe1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0NvbGxhcHNlQm94ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0NvbGxhcHNlZCA9ICF0aGlzLmlzQ29sbGFwc2VkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dDb2xsYXBzZUJveCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0NvbGxhcHNlZCA9ICF0aGlzLmlzQ29sbGFwc2VkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGdvQ29sbGFwc2UyKGFyZ3MpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNob3dDb2xsYXBzZUJveDIpe1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0NvbGxhcHNlQm94MiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNDb2xsYXBzZWQyID0gIXRoaXMuaXNDb2xsYXBzZWQyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dDb2xsYXBzZUJveDIgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNDb2xsYXBzZWQyID0gIXRoaXMuaXNDb2xsYXBzZWQyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGdvQ29sbGFwc2UzKGFyZ3MpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNob3dDb2xsYXBzZUJveDMpe1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0NvbGxhcHNlQm94MyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNDb2xsYXBzZWQzID0gIXRoaXMuaXNDb2xsYXBzZWQzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dDb2xsYXBzZUJveDMgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNDb2xsYXBzZWQzID0gIXRoaXMuaXNDb2xsYXBzZWQzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGdvQ29sbGFwc2U0KGFyZ3MpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNob3dDb2xsYXBzZUJveDQpe1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0NvbGxhcHNlQm94NCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNDb2xsYXBzZWQ0ID0gIXRoaXMuaXNDb2xsYXBzZWQ0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dDb2xsYXBzZUJveDQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNDb2xsYXBzZWQ0ID0gIXRoaXMuaXNDb2xsYXBzZWQ0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWNpZW50ZVNlcnZpY2U6IFBhY2llbnRlU2VydmljZSkge1xuICAgICAgICAvLyBVc2UgdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvciB0byBpbmplY3QgcHJvdmlkZXJzLlxuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnBhY2llbnRlU2VydmljZS5vYnRlbmVyUGFjaWVudGVzKClcbiAgICAgICAgLnN1YnNjcmliZSgoZmV0Y2hQYWNpZW50ZTogW10pID0+IHtcbiAgICAgICAgICAgIGZldGNoUGFjaWVudGUuZm9yRWFjaCgocGFjaWVudGVPYmplY3Q6IFBhY2llbnRlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5saXN0YVBhY2llbnRlLnVuc2hpZnQocGFjaWVudGVPYmplY3QpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XG4gICAgICAgIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xuICAgIH1cblxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XG5cbmltcG9ydCB7IERpYWdub3N0aWNvc1JvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9kaWFnbm9zdGljb3Mtcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IERpYWdub3N0aWNvc0NvbXBvbmVudCB9IGZyb20gXCIuL2RpYWdub3N0aWNvcy5jb21wb25lbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcbiAgICAgICAgRGlhZ25vc3RpY29zUm91dGluZ01vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIERpYWdub3N0aWNvc0NvbXBvbmVudFxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBEaWFnbm9zdGljb3NNb2R1bGUgeyB9XG4iLCJleHBvcnQgY2xhc3MgUGFjaWVudGUge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgaWRQYWNpZW50ZTogbnVtYmVyLFxuICAgICAgICBwdWJsaWMgbm9tYnJlUGFjaWVudGU6IHN0cmluZyxcbiAgICAgICAgcHVibGljIGFwZWxsaWRvUGFjaWVudGU6IHN0cmluZyxcbiAgICAgICAgcHVibGljIGVkYWRQYWNpZW50ZTogbnVtYmVyLFxuICAgICAgICBwdWJsaWMgbnVtZXJvX2V4cGVkaWVudGU6IHN0cmluZyxcbiAgICAgICAgcHVibGljIHVzdWFyaW9BcHBNb3ZpbDogc3RyaW5nLFxuICAgICkge31cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHsgbWFwLCBjYXRjaEVycm9yIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5pbXBvcnQgeyBQYWNpZW50ZSB9IGZyb20gXCIuL3BhY2llbnRlLm1vZGVsXCI7XG5pbXBvcnQgeyB0aHJvd0Vycm9yIH0gZnJvbSBcInJ4anNcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBhY2llbnRlU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHt9XG5cbiAgICBvYnRlbmVyUGFjaWVudGVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnaHR0cDovLzE5Mi4xNDAuMjUuNzo4MDgwL3BhY2llbnRlJylcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICBtYXAoKGRhdGE6IFtdKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGxpc3RhUGFjaWVudGUgPSBbXTtcbiAgICAgICAgICAgICAgICBkYXRhLmZvckVhY2goKHBhY2llbnRlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RhUGFjaWVudGUucHVzaChuZXcgUGFjaWVudGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAoPGFueT5wYWNpZW50ZSkuaWRQYWNpZW50ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICg8YW55PnBhY2llbnRlKS5ub21icmVQYWNpZW50ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICg8YW55PnBhY2llbnRlKS5hcGVsbGlkb1BhY2llbnRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgKDxhbnk+cGFjaWVudGUpLmVkYWRQYWNpZW50ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICg8YW55PnBhY2llbnRlKS5udW1lcm9fZXhwZWRpZW50ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICg8YW55PnBhY2llbnRlKS51c3VhcmlvQXBwTW92aWxcbiAgICAgICAgICAgICAgICAgICAgKSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxpc3RhUGFjaWVudGVcbiAgICAgICAgICAgIH0pICAgICAgICAgLFxuICAgICAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9ycylcbiAgICAgICAgKVxuICAgIH1cblxuICAgIGhhbmRsZUVycm9ycyhlcnJvcjogUmVzcG9uc2UpIHtcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyb3IpKTtcbiAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXJyb3IpO1xuICAgIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==