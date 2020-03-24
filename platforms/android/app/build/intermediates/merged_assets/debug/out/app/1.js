(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[1],{

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

module.exports = ".paciente {\n    background-color: #3f3f3f;\n    color: white;\n    align-items: center;\n    align-content: center;\n}\n\n.diagnosticoLabel {\n    padding-left: 25;\n}\n\n.title {\n    font-size: 23;\n}\n\n\n"

/***/ }),

/***/ "./app/diagnosticos/diagnosticos.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar>\n    <!--\n    Use the NavigationButton as a side-drawer button in Android\n    because ActionItems are shown on the right side of the ActionBar\n    -->\n    <NavigationButton ios:visibility=\"collapsed\" icon=\"res://menu\" (tap)=\"onDrawerButtonTap()\"></NavigationButton>\n    <!--\n    Use the ActionItem for IOS with position set to left. Using the\n    NavigationButton as a side-drawer button in iOS is not possible,\n    because its function is to always navigate back in the application.\n    -->\n    <ActionItem icon=\"res://menu\" android:visibility=\"collapsed\" (tap)=\"onDrawerButtonTap()\"\n        ios.position=\"left\">\n    </ActionItem>\n    <Label text=\"Reporte de diagnósticos\"></Label>\n</ActionBar>\n\n<ScrollView>\n<StackLayout>\n<GridLayout rows=\"0,20,20,20\" columns=\"40,50,auto\" class='paciente'>\n    <Image row=\"1\" col=\"1\" class=\"nt-drawer__header-image fas t-36 p-t-5\" src=\"font://&#xf2bd;\"></Image>\n    <Label row=\"1\" col=\"2\" class=\"nt-drawer__header-brand\" text=\"Francisco Santiago Morales Roa\"></Label>\n    <Label row=\"2\" col=\"2\" class=\"nt-drawer__header-brand\" text=\"Exp: 1659-09\"></Label>\n    <Label row=\"3\" col=\"2\" class=\"nt-drawer__header-brand\" text=\"5 años\"></Label>\n</GridLayout>\n\n     <!-- Diagnostico / Collapse-->\n     <FlexboxLayout class=\"m-t-20 m-l-30\" justifyContent=\"space-between\"\n     alignItems=\"center\" alignContent=\"center\" >\n     <Label text=\"Diagnóstico\"  class=\"title\" (tap)=\"goCollapse($event)\">\n     </Label>\n     </FlexboxLayout>\n            <ListView [items]=\"diagnosticos\" [visibility]=\"showCollapseBox ? 'visible' : 'collapse'\">\n                <ng-template let-diag=\"item\">\n                    <StackLayout borderWidth=\"1\">\n                        <Label class=\"diagnosticoLabel\" [text]=\"diag.diagnostico1\" row='0' col='1'></Label>\n                        <Label class=\"diagnosticoLabel\" [text]=\"diag.diagnostico2\" row=\"1\" col=\"1\"></Label>\n                        <Label class=\"diagnosticoLabel\" [text]=\"diag.diagnostico3\" row=\"1\" col=\"1\"></Label>\n                    </StackLayout>\n                </ng-template>\n            </ListView>\n\n         <!-- Terapia del lenguaje /Collapse -->\n    <FlexboxLayout class=\"m-t-20 m-l-30\" justifyContent=\"space-between\"\n      alignItems=\"center\" alignContent=\"center\">\n      <Label text=\"Terapia de lenguaje\" (tap)=\"goCollapse2()\" class=\"title\">\n      </Label>\n  </FlexboxLayout>\n       <ListView [items]=\"terapias\" [visibility]= \"showCollapseBox2 ? 'visible' : 'collapse'\">\n        <ng-template let-ter=\"item\" >\n            <StackLayout borderWidth=\"1\">\n                <Label textWrap=\"true\" [text]=\"ter.terapia1\"></Label>\n                <Label textWrap=\"true\" [text]=\"ter.terapia2\"></Label>\n                <Label textWrap=\"true\" [text]=\"ter.terapia3\"></Label>\n                <Label textWrap=\"true\" [text]=\"ter.terapia4\"></Label>\n                <Label textWrap=\"true\" [text]=\"ter.terapia5\"></Label>\n            </StackLayout>\n        </ng-template>\n       </ListView>\n\n                 <!-- Educación especial /Collapse -->\n <FlexboxLayout class=\"m-t-20 m-l-30\" justifyContent=\"space-between\"\n     alignItems=\"center\" alignContent=\"center\">\n     <Label text=\"Educación especial\" (tap)=\"goCollapse3($event)\" class=\"title\">\n     </Label>\n</FlexboxLayout>\n <StackLayout borderWidth=\"1\">\n     <Label text=\"Prueba\" class=\"box pull-left\"\n         [visibility]= \"showCollapseBox3 ? 'visible' : 'collapse'\">\n     </Label>\n </StackLayout>\n                 <!-- Plan de trabajo /Collapse -->\n <FlexboxLayout class=\"m-t-20 m-l-30\" justifyContent=\"space-between\"\n     alignItems=\"center\" alignContent=\"center\">\n     <Label text=\"Plan de trabajo\" (tap)=\"goCollapse4($event)\" class=\"title\">\n     </Label>\n</FlexboxLayout>\n<ListView [items]=\"planTrabajo\" [visibility]= \"showCollapseBox4 ? 'visible' : 'collapse'\">\n    <ng-template let-plan=\"item\" >\n        <StackLayout borderWidth=\"1\">\n            <Label textWrap=\"true\" [text]=\"plan.plan1\"></Label>\n            <Label textWrap=\"true\" [text]=\"plan.plan2\"></Label>\n        </StackLayout>\n    </ng-template>\n   </ListView>\n</StackLayout>\n</ScrollView>\n"

/***/ }),

/***/ "./app/diagnosticos/diagnosticos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiagnosticosComponent", function() { return DiagnosticosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1__);


var DiagnosticosComponent = /** @class */ (function () {
    function DiagnosticosComponent() {
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
        // Use the component constructor to inject providers.
    }
    DiagnosticosComponent.prototype.goCollapse = function (args) {
        if (this.showCollapseBox)
            this.showCollapseBox = false;
        else
            this.showCollapseBox = true;
    };
    DiagnosticosComponent.prototype.goCollapse2 = function (args) {
        if (this.showCollapseBox2)
            this.showCollapseBox2 = false;
        else
            this.showCollapseBox2 = true;
    };
    DiagnosticosComponent.prototype.goCollapse3 = function (args) {
        if (this.showCollapseBox3)
            this.showCollapseBox3 = false;
        else
            this.showCollapseBox3 = true;
    };
    DiagnosticosComponent.prototype.goCollapse4 = function (args) {
        if (this.showCollapseBox4)
            this.showCollapseBox4 = false;
        else
            this.showCollapseBox4 = true;
    };
    DiagnosticosComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
    };
    DiagnosticosComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1__["getRootView"]();
        sideDrawer.showDrawer();
    };
    DiagnosticosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Diagnosticos",
            template: __webpack_require__("./app/diagnosticos/diagnosticos.component.html"),
            styles: [__webpack_require__("./app/diagnosticos/diagnosticos.component.css")]
        }),
        __metadata("design:paramtypes", [])
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



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvZGlhZ25vc3RpY29zL2RpYWdub3N0aWNvcy1yb3V0aW5nLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvZGlhZ25vc3RpY29zL2RpYWdub3N0aWNvcy5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9kaWFnbm9zdGljb3MvZGlhZ25vc3RpY29zLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9kaWFnbm9zdGljb3MvZGlhZ25vc3RpY29zLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvZGlhZ25vc3RpY29zL2RpYWdub3N0aWNvcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlDO0FBRThCO0FBRU47QUFFakUsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSw2RUFBcUIsRUFBRTtDQUNqRCxDQUFDO0FBTUY7SUFBQTtJQUF5QyxDQUFDO0lBQTdCLHlCQUF5QjtRQUpyQyw4REFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsb0ZBQXdCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BELE9BQU8sRUFBRSxDQUFDLG9GQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FDVyx5QkFBeUIsQ0FBSTtJQUFELGdDQUFDO0NBQUE7QUFBSjs7Ozs7Ozs7QUNkdEMsNkJBQTZCLGdDQUFnQyxtQkFBbUIsMEJBQTBCLDRCQUE0QixHQUFHLHVCQUF1Qix1QkFBdUIsR0FBRyxZQUFZLG9CQUFvQixHQUFHLE87Ozs7Ozs7QUNBN04sbThCQUFtOEIsNjBHOzs7Ozs7OztBQ0FuOEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFrRDtBQUVFO0FBT3BEO0lBc0RJO1FBcERBLGlCQUFZLEdBQTBFO1lBQ2xGO2dCQUNJLFlBQVksRUFBRSx1Q0FBdUM7Z0JBQ3JELFlBQVksRUFBRSxpQkFBaUI7Z0JBQy9CLFlBQVksRUFBRSxvQkFBb0I7YUFDckM7U0FDSjtRQUNELGFBQVEsR0FBa0c7WUFDdEc7Z0JBQ0ksUUFBUSxFQUFFLDRDQUE0QztnQkFDdEQsUUFBUSxFQUFFLG9EQUFvRDtnQkFDOUQsUUFBUSxFQUFFLDRFQUE0RTtnQkFDdEYsUUFBUSxFQUFFLHFLQUFxSztnQkFDL0ssUUFBUSxFQUFFLG1GQUFtRjthQUNoRztTQUNKO1FBQ0QsZ0JBQVcsR0FBcUM7WUFDNUM7Z0JBQ0ksS0FBSyxFQUFFLHdEQUF3RDtnQkFDL0QsS0FBSyxFQUFFLDhCQUE4QjthQUN4QztTQUNKO1FBQ1csb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFDeEIscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUN6QixxQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUE0QmpDLHFEQUFxRDtJQUN6RCxDQUFDO0lBM0JJLDBDQUFVLEdBQVYsVUFBVyxJQUFJO1FBQ1osSUFBSSxJQUFJLENBQUMsZUFBZTtZQUNwQixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQzs7WUFFN0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFFcEMsQ0FBQztJQUNELDJDQUFXLEdBQVgsVUFBWSxJQUFJO1FBQ1osSUFBSSxJQUFJLENBQUMsZ0JBQWdCO1lBQ3JCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7O1lBRTlCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7SUFDckMsQ0FBQztJQUNGLDJDQUFXLEdBQVgsVUFBWSxJQUFJO1FBQ1gsSUFBSSxJQUFJLENBQUMsZ0JBQWdCO1lBQ3JCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7O1lBRTlCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7SUFDckMsQ0FBQztJQUNELDJDQUFXLEdBQVgsVUFBWSxJQUFJO1FBQ1osSUFBSSxJQUFJLENBQUMsZ0JBQWdCO1lBQ3JCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7O1lBRTlCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7SUFDckMsQ0FBQztJQUtMLHdDQUFRLEdBQVI7UUFDSSx1Q0FBdUM7SUFDM0MsQ0FBQztJQUVELGlEQUFpQixHQUFqQjtRQUNJLElBQU0sVUFBVSxHQUFrQix3RUFBZSxFQUFFLENBQUM7UUFDcEQsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFqRVEscUJBQXFCO1FBTGpDLCtEQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsY0FBYztZQUN4QiwrRUFBNEM7O1NBRS9DLENBQUM7O09BQ1cscUJBQXFCLENBb0VqQztJQUFELDRCQUFDO0NBQUE7QUFwRWlDOzs7Ozs7Ozs7QUNUbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkQ7QUFDWTtBQUVHO0FBQ1Q7QUFjakU7SUFBQTtJQUFrQyxDQUFDO0lBQXRCLGtCQUFrQjtRQVo5Qiw4REFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLG9GQUF3QjtnQkFDeEIsc0ZBQXlCO2FBQzVCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDZFQUFxQjthQUN4QjtZQUNELE9BQU8sRUFBRTtnQkFDTCw4REFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csa0JBQWtCLENBQUk7SUFBRCx5QkFBQztDQUFBO0FBQUoiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgRGlhZ25vc3RpY29zQ29tcG9uZW50IH0gZnJvbSBcIi4vZGlhZ25vc3RpY29zLmNvbXBvbmVudFwiO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6IFwiXCIsIGNvbXBvbmVudDogRGlhZ25vc3RpY29zQ29tcG9uZW50IH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBEaWFnbm9zdGljb3NSb3V0aW5nTW9kdWxlIHsgfVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5wYWNpZW50ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjNmM2Y7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZGlhZ25vc3RpY29MYWJlbCB7XFxuICAgIHBhZGRpbmctbGVmdDogMjU7XFxufVxcblxcbi50aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMjM7XFxufVxcblxcblxcblwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXI+XFxuICAgIDwhLS1cXG4gICAgVXNlIHRoZSBOYXZpZ2F0aW9uQnV0dG9uIGFzIGEgc2lkZS1kcmF3ZXIgYnV0dG9uIGluIEFuZHJvaWRcXG4gICAgYmVjYXVzZSBBY3Rpb25JdGVtcyBhcmUgc2hvd24gb24gdGhlIHJpZ2h0IHNpZGUgb2YgdGhlIEFjdGlvbkJhclxcbiAgICAtLT5cXG4gICAgPE5hdmlnYXRpb25CdXR0b24gaW9zOnZpc2liaWxpdHk9XFxcImNvbGxhcHNlZFxcXCIgaWNvbj1cXFwicmVzOi8vbWVudVxcXCIgKHRhcCk9XFxcIm9uRHJhd2VyQnV0dG9uVGFwKClcXFwiPjwvTmF2aWdhdGlvbkJ1dHRvbj5cXG4gICAgPCEtLVxcbiAgICBVc2UgdGhlIEFjdGlvbkl0ZW0gZm9yIElPUyB3aXRoIHBvc2l0aW9uIHNldCB0byBsZWZ0LiBVc2luZyB0aGVcXG4gICAgTmF2aWdhdGlvbkJ1dHRvbiBhcyBhIHNpZGUtZHJhd2VyIGJ1dHRvbiBpbiBpT1MgaXMgbm90IHBvc3NpYmxlLFxcbiAgICBiZWNhdXNlIGl0cyBmdW5jdGlvbiBpcyB0byBhbHdheXMgbmF2aWdhdGUgYmFjayBpbiB0aGUgYXBwbGljYXRpb24uXFxuICAgIC0tPlxcbiAgICA8QWN0aW9uSXRlbSBpY29uPVxcXCJyZXM6Ly9tZW51XFxcIiBhbmRyb2lkOnZpc2liaWxpdHk9XFxcImNvbGxhcHNlZFxcXCIgKHRhcCk9XFxcIm9uRHJhd2VyQnV0dG9uVGFwKClcXFwiXFxuICAgICAgICBpb3MucG9zaXRpb249XFxcImxlZnRcXFwiPlxcbiAgICA8L0FjdGlvbkl0ZW0+XFxuICAgIDxMYWJlbCB0ZXh0PVxcXCJSZXBvcnRlIGRlIGRpYWduw7NzdGljb3NcXFwiPjwvTGFiZWw+XFxuPC9BY3Rpb25CYXI+XFxuXFxuPFNjcm9sbFZpZXc+XFxuPFN0YWNrTGF5b3V0PlxcbjxHcmlkTGF5b3V0IHJvd3M9XFxcIjAsMjAsMjAsMjBcXFwiIGNvbHVtbnM9XFxcIjQwLDUwLGF1dG9cXFwiIGNsYXNzPSdwYWNpZW50ZSc+XFxuICAgIDxJbWFnZSByb3c9XFxcIjFcXFwiIGNvbD1cXFwiMVxcXCIgY2xhc3M9XFxcIm50LWRyYXdlcl9faGVhZGVyLWltYWdlIGZhcyB0LTM2IHAtdC01XFxcIiBzcmM9XFxcImZvbnQ6Ly8mI3hmMmJkO1xcXCI+PC9JbWFnZT5cXG4gICAgPExhYmVsIHJvdz1cXFwiMVxcXCIgY29sPVxcXCIyXFxcIiBjbGFzcz1cXFwibnQtZHJhd2VyX19oZWFkZXItYnJhbmRcXFwiIHRleHQ9XFxcIkZyYW5jaXNjbyBTYW50aWFnbyBNb3JhbGVzIFJvYVxcXCI+PC9MYWJlbD5cXG4gICAgPExhYmVsIHJvdz1cXFwiMlxcXCIgY29sPVxcXCIyXFxcIiBjbGFzcz1cXFwibnQtZHJhd2VyX19oZWFkZXItYnJhbmRcXFwiIHRleHQ9XFxcIkV4cDogMTY1OS0wOVxcXCI+PC9MYWJlbD5cXG4gICAgPExhYmVsIHJvdz1cXFwiM1xcXCIgY29sPVxcXCIyXFxcIiBjbGFzcz1cXFwibnQtZHJhd2VyX19oZWFkZXItYnJhbmRcXFwiIHRleHQ9XFxcIjUgYcOxb3NcXFwiPjwvTGFiZWw+XFxuPC9HcmlkTGF5b3V0PlxcblxcbiAgICAgPCEtLSBEaWFnbm9zdGljbyAvIENvbGxhcHNlLS0+XFxuICAgICA8RmxleGJveExheW91dCBjbGFzcz1cXFwibS10LTIwIG0tbC0zMFxcXCIganVzdGlmeUNvbnRlbnQ9XFxcInNwYWNlLWJldHdlZW5cXFwiXFxuICAgICBhbGlnbkl0ZW1zPVxcXCJjZW50ZXJcXFwiIGFsaWduQ29udGVudD1cXFwiY2VudGVyXFxcIiA+XFxuICAgICA8TGFiZWwgdGV4dD1cXFwiRGlhZ27Ds3N0aWNvXFxcIiAgY2xhc3M9XFxcInRpdGxlXFxcIiAodGFwKT1cXFwiZ29Db2xsYXBzZSgkZXZlbnQpXFxcIj5cXG4gICAgIDwvTGFiZWw+XFxuICAgICA8L0ZsZXhib3hMYXlvdXQ+XFxuICAgICAgICAgICAgPExpc3RWaWV3IFtpdGVtc109XFxcImRpYWdub3N0aWNvc1xcXCIgW3Zpc2liaWxpdHldPVxcXCJzaG93Q29sbGFwc2VCb3ggPyAndmlzaWJsZScgOiAnY29sbGFwc2UnXFxcIj5cXG4gICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1kaWFnPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBib3JkZXJXaWR0aD1cXFwiMVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJkaWFnbm9zdGljb0xhYmVsXFxcIiBbdGV4dF09XFxcImRpYWcuZGlhZ25vc3RpY28xXFxcIiByb3c9JzAnIGNvbD0nMSc+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImRpYWdub3N0aWNvTGFiZWxcXFwiIFt0ZXh0XT1cXFwiZGlhZy5kaWFnbm9zdGljbzJcXFwiIHJvdz1cXFwiMVxcXCIgY29sPVxcXCIxXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwiZGlhZ25vc3RpY29MYWJlbFxcXCIgW3RleHRdPVxcXCJkaWFnLmRpYWdub3N0aWNvM1xcXCIgcm93PVxcXCIxXFxcIiBjb2w9XFxcIjFcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcbiAgICAgICAgICAgIDwvTGlzdFZpZXc+XFxuXFxuICAgICAgICAgPCEtLSBUZXJhcGlhIGRlbCBsZW5ndWFqZSAvQ29sbGFwc2UgLS0+XFxuICAgIDxGbGV4Ym94TGF5b3V0IGNsYXNzPVxcXCJtLXQtMjAgbS1sLTMwXFxcIiBqdXN0aWZ5Q29udGVudD1cXFwic3BhY2UtYmV0d2VlblxcXCJcXG4gICAgICBhbGlnbkl0ZW1zPVxcXCJjZW50ZXJcXFwiIGFsaWduQ29udGVudD1cXFwiY2VudGVyXFxcIj5cXG4gICAgICA8TGFiZWwgdGV4dD1cXFwiVGVyYXBpYSBkZSBsZW5ndWFqZVxcXCIgKHRhcCk9XFxcImdvQ29sbGFwc2UyKClcXFwiIGNsYXNzPVxcXCJ0aXRsZVxcXCI+XFxuICAgICAgPC9MYWJlbD5cXG4gIDwvRmxleGJveExheW91dD5cXG4gICAgICAgPExpc3RWaWV3IFtpdGVtc109XFxcInRlcmFwaWFzXFxcIiBbdmlzaWJpbGl0eV09IFxcXCJzaG93Q29sbGFwc2VCb3gyID8gJ3Zpc2libGUnIDogJ2NvbGxhcHNlJ1xcXCI+XFxuICAgICAgICA8bmctdGVtcGxhdGUgbGV0LXRlcj1cXFwiaXRlbVxcXCIgPlxcbiAgICAgICAgICAgIDxTdGFja0xheW91dCBib3JkZXJXaWR0aD1cXFwiMVxcXCI+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgW3RleHRdPVxcXCJ0ZXIudGVyYXBpYTFcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgW3RleHRdPVxcXCJ0ZXIudGVyYXBpYTJcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgW3RleHRdPVxcXCJ0ZXIudGVyYXBpYTNcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgW3RleHRdPVxcXCJ0ZXIudGVyYXBpYTRcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgW3RleHRdPVxcXCJ0ZXIudGVyYXBpYTVcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XFxuICAgICAgIDwvTGlzdFZpZXc+XFxuXFxuICAgICAgICAgICAgICAgICA8IS0tIEVkdWNhY2nDs24gZXNwZWNpYWwgL0NvbGxhcHNlIC0tPlxcbiA8RmxleGJveExheW91dCBjbGFzcz1cXFwibS10LTIwIG0tbC0zMFxcXCIganVzdGlmeUNvbnRlbnQ9XFxcInNwYWNlLWJldHdlZW5cXFwiXFxuICAgICBhbGlnbkl0ZW1zPVxcXCJjZW50ZXJcXFwiIGFsaWduQ29udGVudD1cXFwiY2VudGVyXFxcIj5cXG4gICAgIDxMYWJlbCB0ZXh0PVxcXCJFZHVjYWNpw7NuIGVzcGVjaWFsXFxcIiAodGFwKT1cXFwiZ29Db2xsYXBzZTMoJGV2ZW50KVxcXCIgY2xhc3M9XFxcInRpdGxlXFxcIj5cXG4gICAgIDwvTGFiZWw+XFxuPC9GbGV4Ym94TGF5b3V0PlxcbiA8U3RhY2tMYXlvdXQgYm9yZGVyV2lkdGg9XFxcIjFcXFwiPlxcbiAgICAgPExhYmVsIHRleHQ9XFxcIlBydWViYVxcXCIgY2xhc3M9XFxcImJveCBwdWxsLWxlZnRcXFwiXFxuICAgICAgICAgW3Zpc2liaWxpdHldPSBcXFwic2hvd0NvbGxhcHNlQm94MyA/ICd2aXNpYmxlJyA6ICdjb2xsYXBzZSdcXFwiPlxcbiAgICAgPC9MYWJlbD5cXG4gPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICAgICAgIDwhLS0gUGxhbiBkZSB0cmFiYWpvIC9Db2xsYXBzZSAtLT5cXG4gPEZsZXhib3hMYXlvdXQgY2xhc3M9XFxcIm0tdC0yMCBtLWwtMzBcXFwiIGp1c3RpZnlDb250ZW50PVxcXCJzcGFjZS1iZXR3ZWVuXFxcIlxcbiAgICAgYWxpZ25JdGVtcz1cXFwiY2VudGVyXFxcIiBhbGlnbkNvbnRlbnQ9XFxcImNlbnRlclxcXCI+XFxuICAgICA8TGFiZWwgdGV4dD1cXFwiUGxhbiBkZSB0cmFiYWpvXFxcIiAodGFwKT1cXFwiZ29Db2xsYXBzZTQoJGV2ZW50KVxcXCIgY2xhc3M9XFxcInRpdGxlXFxcIj5cXG4gICAgIDwvTGFiZWw+XFxuPC9GbGV4Ym94TGF5b3V0PlxcbjxMaXN0VmlldyBbaXRlbXNdPVxcXCJwbGFuVHJhYmFqb1xcXCIgW3Zpc2liaWxpdHldPSBcXFwic2hvd0NvbGxhcHNlQm94NCA/ICd2aXNpYmxlJyA6ICdjb2xsYXBzZSdcXFwiPlxcbiAgICA8bmctdGVtcGxhdGUgbGV0LXBsYW49XFxcIml0ZW1cXFwiID5cXG4gICAgICAgIDxTdGFja0xheW91dCBib3JkZXJXaWR0aD1cXFwiMVxcXCI+XFxuICAgICAgICAgICAgPExhYmVsIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBbdGV4dF09XFxcInBsYW4ucGxhbjFcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgPExhYmVsIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBbdGV4dF09XFxcInBsYW4ucGxhbjJcXFwiPjwvTGFiZWw+XFxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICA8L25nLXRlbXBsYXRlPlxcbiAgIDwvTGlzdFZpZXc+XFxuPC9TdGFja0xheW91dD5cXG48L1Njcm9sbFZpZXc+XFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiRGlhZ25vc3RpY29zXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9kaWFnbm9zdGljb3MuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHMgOiBbXCIuL2RpYWdub3N0aWNvcy5jb21wb25lbnQuY3NzXCIgXVxufSlcbmV4cG9ydCBjbGFzcyBEaWFnbm9zdGljb3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgZGlhZ25vc3RpY29zOiB7ZGlhZ25vc3RpY28xOiBzdHJpbmcsIGRpYWdub3N0aWNvMjogc3RyaW5nLCBkaWFnbm9zdGljbzM6IHN0cmluZyB9W10gPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGRpYWdub3N0aWNvMTogJ1JldGFyZG8gZGUgbGVuZ3VhamUgYW7DoXJ0aWNvIG1vZGVyYWRvJyxcbiAgICAgICAgICAgIGRpYWdub3N0aWNvMjogJ0F1ZGljacOzbiBub3JtYWwnLFxuICAgICAgICAgICAgZGlhZ25vc3RpY28zOiAnQXVkdWNpw7NuIGJpbGF0ZXJhbCdcbiAgICAgICAgfVxuICAgIF1cbiAgICB0ZXJhcGlhczogeyB0ZXJhcGlhMTogc3RyaW5nLCB0ZXJhcGlhMjogc3RyaW5nLCB0ZXJhcGlhMzogc3RyaW5nLCB0ZXJhcGlhNDogc3RyaW5nLCB0ZXJhcGlhNTogc3RyaW5nfVtdID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICB0ZXJhcGlhMTogJzEuIEVqZXJjaWNpb3MgZGUgcmVzcGlyYWNpw7NuIHkgcmVsYWphY2nDs24uJyxcbiAgICAgICAgICAgIHRlcmFwaWEyOiAnMi4gRWplcmNpY2lvcyBwcmVmb25hdG9yaW9zIHkgcHJheGlhcyBvcm9mYWNpYWxlcy4nLFxuICAgICAgICAgICAgdGVyYXBpYTM6ICczLiBFamVyY2ljaW9zIHBhcmEgZm9uZW1hcyAvci8sIC9yci8sIC9sLywgL2NoLywgL2YvLCAvay8sIC9zLywgaW50ZXJtZWRpYScsXG4gICAgICAgICAgICB0ZXJhcGlhNDogJzQuIFRyYWJhamFyIGF1bWVudG8gZGUgdm9jYWJ1bGFyaW8gYWNvcmRlIGEgbGEgZWRhZCB5IGNsYXNpZmljYWNpw7NuIHBvciBjYW1wb3Mgc2Vtw6FudGljb3MuIEhhY2VyIGzDoW1pbmFzIGNvbiBmaWd1cmFzIGRlIGJ1ZW4gdGFtYcOxbyBwYXJhIHF1ZSBsYXMgYXByZW5kYSBhIGVzY3JpYmlyJyxcbiAgICAgICAgICAgIHRlcmFwaWE1OiAnNS4gVHJhYmFqYXIgZXN0aW11bGFjacOzbiBkZSBhc3BlY3RvIHByYWdtw6F0aWNvIG1lZGlhbnRlIGNhbnRvcywganVlZ29zIHkgY3VlbnRvcy4nXG4gICAgICAgIH1cbiAgICBdXG4gICAgcGxhblRyYWJham86IHtwbGFuMTogc3RyaW5nLCBwbGFuMjogc3RyaW5nfVtdID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBwbGFuMTogJzEuIENvbnRpbnVhciB0ZXJhcGlhIGRlIGxlbmd1YWplIHkgYXByZW5kaXphamUgc2VtYW5hbCcsXG4gICAgICAgICAgICBwbGFuMjogJzIuIENpdGEgYWwgdGVybWluYXIgdGVyYXBpYXMnXG4gICAgICAgIH1cbiAgICBdXG4gICAgICAgICBwdWJsaWMgc2hvd0NvbGxhcHNlQm94ID0gZmFsc2U7XG4gICAgICAgICBwdWJsaWMgc2hvd0NvbGxhcHNlQm94MiA9IGZhbHNlO1xuICAgICAgICAgcHVibGljIHNob3dDb2xsYXBzZUJveDMgPSBmYWxzZTtcbiAgICAgICAgIHB1YmxpYyBzaG93Q29sbGFwc2VCb3g0ID0gZmFsc2U7XG5cbiAgICAgICAgIGdvQ29sbGFwc2UoYXJncykge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2hvd0NvbGxhcHNlQm94KVxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0NvbGxhcHNlQm94ID0gZmFsc2U7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Q29sbGFwc2VCb3ggPSB0cnVlO1xuXG4gICAgICAgIH1cbiAgICAgICAgZ29Db2xsYXBzZTIoYXJncykge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2hvd0NvbGxhcHNlQm94MilcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dDb2xsYXBzZUJveDIgPSBmYWxzZTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dDb2xsYXBzZUJveDIgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgZ29Db2xsYXBzZTMoYXJncykge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2hvd0NvbGxhcHNlQm94MylcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dDb2xsYXBzZUJveDMgPSBmYWxzZTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dDb2xsYXBzZUJveDMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGdvQ29sbGFwc2U0KGFyZ3MpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNob3dDb2xsYXBzZUJveDQpXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Q29sbGFwc2VCb3g0ID0gZmFsc2U7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Q29sbGFwc2VCb3g0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyBVc2UgdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvciB0byBpbmplY3QgcHJvdmlkZXJzLlxuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICAvLyBJbml0IHlvdXIgY29tcG9uZW50IHByb3BlcnRpZXMgaGVyZS5cbiAgICB9XG5cbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgc2lkZURyYXdlciA9IDxSYWRTaWRlRHJhd2VyPmFwcC5nZXRSb290VmlldygpO1xuICAgICAgICBzaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcbiAgICB9XG5cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xuXG5pbXBvcnQgeyBEaWFnbm9zdGljb3NSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vZGlhZ25vc3RpY29zLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBEaWFnbm9zdGljb3NDb21wb25lbnQgfSBmcm9tIFwiLi9kaWFnbm9zdGljb3MuY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgICAgIERpYWdub3N0aWNvc1JvdXRpbmdNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBEaWFnbm9zdGljb3NDb21wb25lbnRcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgRGlhZ25vc3RpY29zTW9kdWxlIHsgfVxuIl0sInNvdXJjZVJvb3QiOiIifQ==