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

module.exports = ".paciente {\n    background-color: #3f3f3f;\n    color: white;\n    align-items: center;\n    align-content: center;\n}\n\n.diagnosticoLabel {\n    padding-left: 25;\n}\n\n.title {\n    font-size: 23;\n}\n\n.icon{\n    height: 24;\n    width: 80;\n    transition: .3s transform ease-in-out;\n}\n\n.collapse{\n\n    transform: rotate(270deg);\n  }\n\n\n"

/***/ }),

/***/ "./app/diagnosticos/diagnosticos.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar>\n    <!--\n    Use the NavigationButton as a side-drawer button in Android\n    because ActionItems are shown on the right side of the ActionBar\n    -->\n    <NavigationButton ios:visibility=\"collapsed\" icon=\"res://menu\" (tap)=\"onDrawerButtonTap()\"></NavigationButton>\n    <!--\n    Use the ActionItem for IOS with position set to left. Using the\n    NavigationButton as a side-drawer button in iOS is not possible,\n    because its function is to always navigate back in the application.\n    -->\n    <ActionItem icon=\"res://menu\" android:visibility=\"collapsed\" (tap)=\"onDrawerButtonTap()\"\n        ios.position=\"left\">\n    </ActionItem>\n    <Label text=\"Reporte de diagnósticos\"></Label>\n</ActionBar>\n\n<ScrollView>\n<StackLayout>\n<GridLayout rows=\"0,20,20,20\" columns=\"40,50,auto\" class='paciente'>\n    <Image row=\"1\" col=\"1\" class=\"nt-drawer__header-image fas t-36 p-t-5\" src=\"font://&#xf2bd;\"></Image>\n    <Label row=\"1\" col=\"2\" class=\"nt-drawer__header-brand\" text=\"Francisco Santiago Morales Roa\"></Label>\n    <Label row=\"2\" col=\"2\" class=\"nt-drawer__header-brand\" text=\"Exp: 1659-09\"></Label>\n    <Label row=\"3\" col=\"2\" class=\"nt-drawer__header-brand\" text=\"5 años\"></Label>\n</GridLayout>\n\n     <!-- Diagnostico / Collapse-->\n     <FlexboxLayout class=\"m-t-20 m-l-30\" justifyContent=\"space-between\"\n     alignItems=\"center\" alignContent=\"center\" >\n     <Label text=\"Diagnóstico\"  class=\"title\" (tap)=\"goCollapse($event)\">\n     </Label>\n     <Image src=\"res://down\" class=\"icon\" [ngClass]='{ collapse: isCollapsed }' (tap)=\"goCollapse($event)\"></Image>\n     </FlexboxLayout>\n            <ListView [items]=\"diagnosticos\" [visibility]=\"showCollapseBox ? 'visible' : 'collapse'\">\n                <ng-template let-diag=\"item\">\n                    <StackLayout borderWidth=\"1\">\n                        <Label class=\"diagnosticoLabel\" [text]=\"diag.diagnostico1\" row='0' col='1'></Label>\n                        <Label class=\"diagnosticoLabel\" [text]=\"diag.diagnostico2\" row=\"1\" col=\"1\"></Label>\n                        <Label class=\"diagnosticoLabel\" [text]=\"diag.diagnostico3\" row=\"1\" col=\"1\"></Label>\n                    </StackLayout>\n                </ng-template>\n            </ListView>\n\n         <!-- Terapia del lenguaje /Collapse -->\n    <FlexboxLayout class=\"m-t-20 m-l-30\" justifyContent=\"space-between\"\n      alignItems=\"center\" alignContent=\"center\">\n      <Label text=\"Terapia de lenguaje\" (tap)=\"goCollapse2()\" class=\"title\">\n      </Label>\n      <Image src=\"res://down\" class=\"icon\" [ngClass]='{ collapse: isCollapsed2 }' (tap)=\"goCollapse2($event)\"></Image>\n  </FlexboxLayout>\n       <ListView [items]=\"terapias\" [visibility]= \"showCollapseBox2 ? 'visible' : 'collapse'\">\n        <ng-template let-ter=\"item\" >\n            <StackLayout borderWidth=\"1\">\n                <Label textWrap=\"true\" [text]=\"ter.terapia1\"></Label>\n                <Label textWrap=\"true\" [text]=\"ter.terapia2\"></Label>\n                <Label textWrap=\"true\" [text]=\"ter.terapia3\"></Label>\n                <Label textWrap=\"true\" [text]=\"ter.terapia4\"></Label>\n                <Label textWrap=\"true\" [text]=\"ter.terapia5\"></Label>\n            </StackLayout>\n        </ng-template>\n       </ListView>\n\n                 <!-- Educación especial /Collapse -->\n <FlexboxLayout class=\"m-t-20 m-l-30\" justifyContent=\"space-between\"\n     alignItems=\"center\" alignContent=\"center\">\n     <Label text=\"Educación especial\" (tap)=\"goCollapse3($event)\" class=\"title\">\n     </Label>\n     <Image src=\"res://down\" class=\"icon\" [ngClass]='{ collapse: isCollapsed3 }' (tap)=\"goCollapse3($event)\"></Image>\n</FlexboxLayout>\n <StackLayout borderWidth=\"1\">\n     <Label text=\"Prueba\" class=\"box pull-left\"\n         [visibility]= \"showCollapseBox3 ? 'visible' : 'collapse'\">\n     </Label>\n </StackLayout>\n                 <!-- Plan de trabajo /Collapse -->\n <FlexboxLayout class=\"m-t-20 m-l-30\" justifyContent=\"space-between\"\n     alignItems=\"center\" alignContent=\"center\">\n     <Label text=\"Plan de trabajo\" (tap)=\"goCollapse4($event)\" class=\"title\">\n     </Label>\n     <Image src=\"res://down\" class=\"icon\" [ngClass]='{ collapse: isCollapsed4 }' (tap)=\"goCollapse4($event)\"></Image>\n</FlexboxLayout>\n<ListView [items]=\"planTrabajo\" [visibility]= \"showCollapseBox4 ? 'visible' : 'collapse'\">\n    <ng-template let-plan=\"item\" >\n        <StackLayout borderWidth=\"1\">\n            <Label textWrap=\"true\" [text]=\"plan.plan1\"></Label>\n            <Label textWrap=\"true\" [text]=\"plan.plan2\"></Label>\n        </StackLayout>\n    </ng-template>\n   </ListView>\n</StackLayout>\n</ScrollView>\n"

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvZGlhZ25vc3RpY29zL2RpYWdub3N0aWNvcy1yb3V0aW5nLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvZGlhZ25vc3RpY29zL2RpYWdub3N0aWNvcy5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9kaWFnbm9zdGljb3MvZGlhZ25vc3RpY29zLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9kaWFnbm9zdGljb3MvZGlhZ25vc3RpY29zLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvZGlhZ25vc3RpY29zL2RpYWdub3N0aWNvcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlDO0FBRThCO0FBRU47QUFFakUsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSw2RUFBcUIsRUFBRTtDQUNqRCxDQUFDO0FBTUY7SUFBQTtJQUF5QyxDQUFDO0lBQTdCLHlCQUF5QjtRQUpyQyw4REFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsb0ZBQXdCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BELE9BQU8sRUFBRSxDQUFDLG9GQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FDVyx5QkFBeUIsQ0FBSTtJQUFELGdDQUFDO0NBQUE7QUFBSjs7Ozs7Ozs7QUNkdEMsNkJBQTZCLGdDQUFnQyxtQkFBbUIsMEJBQTBCLDRCQUE0QixHQUFHLHVCQUF1Qix1QkFBdUIsR0FBRyxZQUFZLG9CQUFvQixHQUFHLFVBQVUsaUJBQWlCLGdCQUFnQiw0Q0FBNEMsR0FBRyxjQUFjLGtDQUFrQyxLQUFLLE87Ozs7Ozs7QUNBNVcsbThCQUFtOEIsZ3BCQUFncEIsd0JBQXdCLCtoQ0FBK2hDLHlCQUF5QixpaENBQWloQyx5QkFBeUIsNGtCQUE0a0IseUJBQXlCLGlkOzs7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Q0FBQztJQUM1QixDQUFDO0lBcEZRLHFCQUFxQjtRQUxqQywrREFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGNBQWM7WUFDeEIsK0VBQTRDOztTQUUvQyxDQUFDOztPQUNXLHFCQUFxQixDQXVGakM7SUFBRCw0QkFBQztDQUFBO0FBdkZpQzs7Ozs7Ozs7O0FDVGxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJEO0FBQ1k7QUFFRztBQUNUO0FBY2pFO0lBQUE7SUFBa0MsQ0FBQztJQUF0QixrQkFBa0I7UUFaOUIsOERBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxvRkFBd0I7Z0JBQ3hCLHNGQUF5QjthQUM1QjtZQUNELFlBQVksRUFBRTtnQkFDViw2RUFBcUI7YUFDeEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsOERBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLGtCQUFrQixDQUFJO0lBQUQseUJBQUM7Q0FBQTtBQUFKIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IERpYWdub3N0aWNvc0NvbXBvbmVudCB9IGZyb20gXCIuL2RpYWdub3N0aWNvcy5jb21wb25lbnRcIjtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiBcIlwiLCBjb21wb25lbnQ6IERpYWdub3N0aWNvc0NvbXBvbmVudCB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgRGlhZ25vc3RpY29zUm91dGluZ01vZHVsZSB7IH1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCIucGFjaWVudGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2YzZjNmO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmRpYWdub3N0aWNvTGFiZWwge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDI1O1xcbn1cXG5cXG4udGl0bGUge1xcbiAgICBmb250LXNpemU6IDIzO1xcbn1cXG5cXG4uaWNvbntcXG4gICAgaGVpZ2h0OiAyNDtcXG4gICAgd2lkdGg6IDgwO1xcbiAgICB0cmFuc2l0aW9uOiAuM3MgdHJhbnNmb3JtIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uY29sbGFwc2V7XFxuXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XFxuICB9XFxuXFxuXFxuXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEFjdGlvbkJhcj5cXG4gICAgPCEtLVxcbiAgICBVc2UgdGhlIE5hdmlnYXRpb25CdXR0b24gYXMgYSBzaWRlLWRyYXdlciBidXR0b24gaW4gQW5kcm9pZFxcbiAgICBiZWNhdXNlIEFjdGlvbkl0ZW1zIGFyZSBzaG93biBvbiB0aGUgcmlnaHQgc2lkZSBvZiB0aGUgQWN0aW9uQmFyXFxuICAgIC0tPlxcbiAgICA8TmF2aWdhdGlvbkJ1dHRvbiBpb3M6dmlzaWJpbGl0eT1cXFwiY29sbGFwc2VkXFxcIiBpY29uPVxcXCJyZXM6Ly9tZW51XFxcIiAodGFwKT1cXFwib25EcmF3ZXJCdXR0b25UYXAoKVxcXCI+PC9OYXZpZ2F0aW9uQnV0dG9uPlxcbiAgICA8IS0tXFxuICAgIFVzZSB0aGUgQWN0aW9uSXRlbSBmb3IgSU9TIHdpdGggcG9zaXRpb24gc2V0IHRvIGxlZnQuIFVzaW5nIHRoZVxcbiAgICBOYXZpZ2F0aW9uQnV0dG9uIGFzIGEgc2lkZS1kcmF3ZXIgYnV0dG9uIGluIGlPUyBpcyBub3QgcG9zc2libGUsXFxuICAgIGJlY2F1c2UgaXRzIGZ1bmN0aW9uIGlzIHRvIGFsd2F5cyBuYXZpZ2F0ZSBiYWNrIGluIHRoZSBhcHBsaWNhdGlvbi5cXG4gICAgLS0+XFxuICAgIDxBY3Rpb25JdGVtIGljb249XFxcInJlczovL21lbnVcXFwiIGFuZHJvaWQ6dmlzaWJpbGl0eT1cXFwiY29sbGFwc2VkXFxcIiAodGFwKT1cXFwib25EcmF3ZXJCdXR0b25UYXAoKVxcXCJcXG4gICAgICAgIGlvcy5wb3NpdGlvbj1cXFwibGVmdFxcXCI+XFxuICAgIDwvQWN0aW9uSXRlbT5cXG4gICAgPExhYmVsIHRleHQ9XFxcIlJlcG9ydGUgZGUgZGlhZ27Ds3N0aWNvc1xcXCI+PC9MYWJlbD5cXG48L0FjdGlvbkJhcj5cXG5cXG48U2Nyb2xsVmlldz5cXG48U3RhY2tMYXlvdXQ+XFxuPEdyaWRMYXlvdXQgcm93cz1cXFwiMCwyMCwyMCwyMFxcXCIgY29sdW1ucz1cXFwiNDAsNTAsYXV0b1xcXCIgY2xhc3M9J3BhY2llbnRlJz5cXG4gICAgPEltYWdlIHJvdz1cXFwiMVxcXCIgY29sPVxcXCIxXFxcIiBjbGFzcz1cXFwibnQtZHJhd2VyX19oZWFkZXItaW1hZ2UgZmFzIHQtMzYgcC10LTVcXFwiIHNyYz1cXFwiZm9udDovLyYjeGYyYmQ7XFxcIj48L0ltYWdlPlxcbiAgICA8TGFiZWwgcm93PVxcXCIxXFxcIiBjb2w9XFxcIjJcXFwiIGNsYXNzPVxcXCJudC1kcmF3ZXJfX2hlYWRlci1icmFuZFxcXCIgdGV4dD1cXFwiRnJhbmNpc2NvIFNhbnRpYWdvIE1vcmFsZXMgUm9hXFxcIj48L0xhYmVsPlxcbiAgICA8TGFiZWwgcm93PVxcXCIyXFxcIiBjb2w9XFxcIjJcXFwiIGNsYXNzPVxcXCJudC1kcmF3ZXJfX2hlYWRlci1icmFuZFxcXCIgdGV4dD1cXFwiRXhwOiAxNjU5LTA5XFxcIj48L0xhYmVsPlxcbiAgICA8TGFiZWwgcm93PVxcXCIzXFxcIiBjb2w9XFxcIjJcXFwiIGNsYXNzPVxcXCJudC1kcmF3ZXJfX2hlYWRlci1icmFuZFxcXCIgdGV4dD1cXFwiNSBhw7Fvc1xcXCI+PC9MYWJlbD5cXG48L0dyaWRMYXlvdXQ+XFxuXFxuICAgICA8IS0tIERpYWdub3N0aWNvIC8gQ29sbGFwc2UtLT5cXG4gICAgIDxGbGV4Ym94TGF5b3V0IGNsYXNzPVxcXCJtLXQtMjAgbS1sLTMwXFxcIiBqdXN0aWZ5Q29udGVudD1cXFwic3BhY2UtYmV0d2VlblxcXCJcXG4gICAgIGFsaWduSXRlbXM9XFxcImNlbnRlclxcXCIgYWxpZ25Db250ZW50PVxcXCJjZW50ZXJcXFwiID5cXG4gICAgIDxMYWJlbCB0ZXh0PVxcXCJEaWFnbsOzc3RpY29cXFwiICBjbGFzcz1cXFwidGl0bGVcXFwiICh0YXApPVxcXCJnb0NvbGxhcHNlKCRldmVudClcXFwiPlxcbiAgICAgPC9MYWJlbD5cXG4gICAgIDxJbWFnZSBzcmM9XFxcInJlczovL2Rvd25cXFwiIGNsYXNzPVxcXCJpY29uXFxcIiBbbmdDbGFzc109J3sgY29sbGFwc2U6IGlzQ29sbGFwc2VkIH0nICh0YXApPVxcXCJnb0NvbGxhcHNlKCRldmVudClcXFwiPjwvSW1hZ2U+XFxuICAgICA8L0ZsZXhib3hMYXlvdXQ+XFxuICAgICAgICAgICAgPExpc3RWaWV3IFtpdGVtc109XFxcImRpYWdub3N0aWNvc1xcXCIgW3Zpc2liaWxpdHldPVxcXCJzaG93Q29sbGFwc2VCb3ggPyAndmlzaWJsZScgOiAnY29sbGFwc2UnXFxcIj5cXG4gICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1kaWFnPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBib3JkZXJXaWR0aD1cXFwiMVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJkaWFnbm9zdGljb0xhYmVsXFxcIiBbdGV4dF09XFxcImRpYWcuZGlhZ25vc3RpY28xXFxcIiByb3c9JzAnIGNvbD0nMSc+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImRpYWdub3N0aWNvTGFiZWxcXFwiIFt0ZXh0XT1cXFwiZGlhZy5kaWFnbm9zdGljbzJcXFwiIHJvdz1cXFwiMVxcXCIgY29sPVxcXCIxXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwiZGlhZ25vc3RpY29MYWJlbFxcXCIgW3RleHRdPVxcXCJkaWFnLmRpYWdub3N0aWNvM1xcXCIgcm93PVxcXCIxXFxcIiBjb2w9XFxcIjFcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcbiAgICAgICAgICAgIDwvTGlzdFZpZXc+XFxuXFxuICAgICAgICAgPCEtLSBUZXJhcGlhIGRlbCBsZW5ndWFqZSAvQ29sbGFwc2UgLS0+XFxuICAgIDxGbGV4Ym94TGF5b3V0IGNsYXNzPVxcXCJtLXQtMjAgbS1sLTMwXFxcIiBqdXN0aWZ5Q29udGVudD1cXFwic3BhY2UtYmV0d2VlblxcXCJcXG4gICAgICBhbGlnbkl0ZW1zPVxcXCJjZW50ZXJcXFwiIGFsaWduQ29udGVudD1cXFwiY2VudGVyXFxcIj5cXG4gICAgICA8TGFiZWwgdGV4dD1cXFwiVGVyYXBpYSBkZSBsZW5ndWFqZVxcXCIgKHRhcCk9XFxcImdvQ29sbGFwc2UyKClcXFwiIGNsYXNzPVxcXCJ0aXRsZVxcXCI+XFxuICAgICAgPC9MYWJlbD5cXG4gICAgICA8SW1hZ2Ugc3JjPVxcXCJyZXM6Ly9kb3duXFxcIiBjbGFzcz1cXFwiaWNvblxcXCIgW25nQ2xhc3NdPSd7IGNvbGxhcHNlOiBpc0NvbGxhcHNlZDIgfScgKHRhcCk9XFxcImdvQ29sbGFwc2UyKCRldmVudClcXFwiPjwvSW1hZ2U+XFxuICA8L0ZsZXhib3hMYXlvdXQ+XFxuICAgICAgIDxMaXN0VmlldyBbaXRlbXNdPVxcXCJ0ZXJhcGlhc1xcXCIgW3Zpc2liaWxpdHldPSBcXFwic2hvd0NvbGxhcHNlQm94MiA/ICd2aXNpYmxlJyA6ICdjb2xsYXBzZSdcXFwiPlxcbiAgICAgICAgPG5nLXRlbXBsYXRlIGxldC10ZXI9XFxcIml0ZW1cXFwiID5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgYm9yZGVyV2lkdGg9XFxcIjFcXFwiPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dFdyYXA9XFxcInRydWVcXFwiIFt0ZXh0XT1cXFwidGVyLnRlcmFwaWExXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dFdyYXA9XFxcInRydWVcXFwiIFt0ZXh0XT1cXFwidGVyLnRlcmFwaWEyXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dFdyYXA9XFxcInRydWVcXFwiIFt0ZXh0XT1cXFwidGVyLnRlcmFwaWEzXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dFdyYXA9XFxcInRydWVcXFwiIFt0ZXh0XT1cXFwidGVyLnRlcmFwaWE0XFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dFdyYXA9XFxcInRydWVcXFwiIFt0ZXh0XT1cXFwidGVyLnRlcmFwaWE1XFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICA8L25nLXRlbXBsYXRlPlxcbiAgICAgICA8L0xpc3RWaWV3PlxcblxcbiAgICAgICAgICAgICAgICAgPCEtLSBFZHVjYWNpw7NuIGVzcGVjaWFsIC9Db2xsYXBzZSAtLT5cXG4gPEZsZXhib3hMYXlvdXQgY2xhc3M9XFxcIm0tdC0yMCBtLWwtMzBcXFwiIGp1c3RpZnlDb250ZW50PVxcXCJzcGFjZS1iZXR3ZWVuXFxcIlxcbiAgICAgYWxpZ25JdGVtcz1cXFwiY2VudGVyXFxcIiBhbGlnbkNvbnRlbnQ9XFxcImNlbnRlclxcXCI+XFxuICAgICA8TGFiZWwgdGV4dD1cXFwiRWR1Y2FjacOzbiBlc3BlY2lhbFxcXCIgKHRhcCk9XFxcImdvQ29sbGFwc2UzKCRldmVudClcXFwiIGNsYXNzPVxcXCJ0aXRsZVxcXCI+XFxuICAgICA8L0xhYmVsPlxcbiAgICAgPEltYWdlIHNyYz1cXFwicmVzOi8vZG93blxcXCIgY2xhc3M9XFxcImljb25cXFwiIFtuZ0NsYXNzXT0neyBjb2xsYXBzZTogaXNDb2xsYXBzZWQzIH0nICh0YXApPVxcXCJnb0NvbGxhcHNlMygkZXZlbnQpXFxcIj48L0ltYWdlPlxcbjwvRmxleGJveExheW91dD5cXG4gPFN0YWNrTGF5b3V0IGJvcmRlcldpZHRoPVxcXCIxXFxcIj5cXG4gICAgIDxMYWJlbCB0ZXh0PVxcXCJQcnVlYmFcXFwiIGNsYXNzPVxcXCJib3ggcHVsbC1sZWZ0XFxcIlxcbiAgICAgICAgIFt2aXNpYmlsaXR5XT0gXFxcInNob3dDb2xsYXBzZUJveDMgPyAndmlzaWJsZScgOiAnY29sbGFwc2UnXFxcIj5cXG4gICAgIDwvTGFiZWw+XFxuIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgICAgICA8IS0tIFBsYW4gZGUgdHJhYmFqbyAvQ29sbGFwc2UgLS0+XFxuIDxGbGV4Ym94TGF5b3V0IGNsYXNzPVxcXCJtLXQtMjAgbS1sLTMwXFxcIiBqdXN0aWZ5Q29udGVudD1cXFwic3BhY2UtYmV0d2VlblxcXCJcXG4gICAgIGFsaWduSXRlbXM9XFxcImNlbnRlclxcXCIgYWxpZ25Db250ZW50PVxcXCJjZW50ZXJcXFwiPlxcbiAgICAgPExhYmVsIHRleHQ9XFxcIlBsYW4gZGUgdHJhYmFqb1xcXCIgKHRhcCk9XFxcImdvQ29sbGFwc2U0KCRldmVudClcXFwiIGNsYXNzPVxcXCJ0aXRsZVxcXCI+XFxuICAgICA8L0xhYmVsPlxcbiAgICAgPEltYWdlIHNyYz1cXFwicmVzOi8vZG93blxcXCIgY2xhc3M9XFxcImljb25cXFwiIFtuZ0NsYXNzXT0neyBjb2xsYXBzZTogaXNDb2xsYXBzZWQ0IH0nICh0YXApPVxcXCJnb0NvbGxhcHNlNCgkZXZlbnQpXFxcIj48L0ltYWdlPlxcbjwvRmxleGJveExheW91dD5cXG48TGlzdFZpZXcgW2l0ZW1zXT1cXFwicGxhblRyYWJham9cXFwiIFt2aXNpYmlsaXR5XT0gXFxcInNob3dDb2xsYXBzZUJveDQgPyAndmlzaWJsZScgOiAnY29sbGFwc2UnXFxcIj5cXG4gICAgPG5nLXRlbXBsYXRlIGxldC1wbGFuPVxcXCJpdGVtXFxcIiA+XFxuICAgICAgICA8U3RhY2tMYXlvdXQgYm9yZGVyV2lkdGg9XFxcIjFcXFwiPlxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgW3RleHRdPVxcXCJwbGFuLnBsYW4xXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgW3RleHRdPVxcXCJwbGFuLnBsYW4yXFxcIj48L0xhYmVsPlxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgPC9uZy10ZW1wbGF0ZT5cXG4gICA8L0xpc3RWaWV3PlxcbjwvU3RhY2tMYXlvdXQ+XFxuPC9TY3JvbGxWaWV3PlxcblwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlclwiO1xuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkRpYWdub3N0aWNvc1wiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vZGlhZ25vc3RpY29zLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzIDogW1wiLi9kaWFnbm9zdGljb3MuY29tcG9uZW50LmNzc1wiIF1cbn0pXG5leHBvcnQgY2xhc3MgRGlhZ25vc3RpY29zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGRpYWdub3N0aWNvczoge2RpYWdub3N0aWNvMTogc3RyaW5nLCBkaWFnbm9zdGljbzI6IHN0cmluZywgZGlhZ25vc3RpY28zOiBzdHJpbmcgfVtdID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBkaWFnbm9zdGljbzE6ICdSZXRhcmRvIGRlIGxlbmd1YWplIGFuw6FydGljbyBtb2RlcmFkbycsXG4gICAgICAgICAgICBkaWFnbm9zdGljbzI6ICdBdWRpY2nDs24gbm9ybWFsJyxcbiAgICAgICAgICAgIGRpYWdub3N0aWNvMzogJ0F1ZHVjacOzbiBiaWxhdGVyYWwnXG4gICAgICAgIH1cbiAgICBdXG4gICAgdGVyYXBpYXM6IHsgdGVyYXBpYTE6IHN0cmluZywgdGVyYXBpYTI6IHN0cmluZywgdGVyYXBpYTM6IHN0cmluZywgdGVyYXBpYTQ6IHN0cmluZywgdGVyYXBpYTU6IHN0cmluZ31bXSA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgdGVyYXBpYTE6ICcxLiBFamVyY2ljaW9zIGRlIHJlc3BpcmFjacOzbiB5IHJlbGFqYWNpw7NuLicsXG4gICAgICAgICAgICB0ZXJhcGlhMjogJzIuIEVqZXJjaWNpb3MgcHJlZm9uYXRvcmlvcyB5IHByYXhpYXMgb3JvZmFjaWFsZXMuJyxcbiAgICAgICAgICAgIHRlcmFwaWEzOiAnMy4gRWplcmNpY2lvcyBwYXJhIGZvbmVtYXMgL3IvLCAvcnIvLCAvbC8sIC9jaC8sIC9mLywgL2svLCAvcy8sIGludGVybWVkaWEnLFxuICAgICAgICAgICAgdGVyYXBpYTQ6ICc0LiBUcmFiYWphciBhdW1lbnRvIGRlIHZvY2FidWxhcmlvIGFjb3JkZSBhIGxhIGVkYWQgeSBjbGFzaWZpY2FjacOzbiBwb3IgY2FtcG9zIHNlbcOhbnRpY29zLiBIYWNlciBsw6FtaW5hcyBjb24gZmlndXJhcyBkZSBidWVuIHRhbWHDsW8gcGFyYSBxdWUgbGFzIGFwcmVuZGEgYSBlc2NyaWJpcicsXG4gICAgICAgICAgICB0ZXJhcGlhNTogJzUuIFRyYWJhamFyIGVzdGltdWxhY2nDs24gZGUgYXNwZWN0byBwcmFnbcOhdGljbyBtZWRpYW50ZSBjYW50b3MsIGp1ZWdvcyB5IGN1ZW50b3MuJ1xuICAgICAgICB9XG4gICAgXVxuICAgIHBsYW5UcmFiYWpvOiB7cGxhbjE6IHN0cmluZywgcGxhbjI6IHN0cmluZ31bXSA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgcGxhbjE6ICcxLiBDb250aW51YXIgdGVyYXBpYSBkZSBsZW5ndWFqZSB5IGFwcmVuZGl6YWplIHNlbWFuYWwnLFxuICAgICAgICAgICAgcGxhbjI6ICcyLiBDaXRhIGFsIHRlcm1pbmFyIHRlcmFwaWFzJ1xuICAgICAgICB9XG4gICAgXVxuICAgICAgICAgcHVibGljIHNob3dDb2xsYXBzZUJveCA9IGZhbHNlO1xuICAgICAgICAgcHVibGljIHNob3dDb2xsYXBzZUJveDIgPSBmYWxzZTtcbiAgICAgICAgIHB1YmxpYyBzaG93Q29sbGFwc2VCb3gzID0gZmFsc2U7XG4gICAgICAgICBwdWJsaWMgc2hvd0NvbGxhcHNlQm94NCA9IGZhbHNlO1xuICAgICAgICAgaXNDb2xsYXBzZWQgPSB0cnVlO1xuICAgICAgICAgaXNDb2xsYXBzZWQyID0gdHJ1ZTtcbiAgICAgICAgIGlzQ29sbGFwc2VkMyA9IHRydWU7XG4gICAgICAgICBpc0NvbGxhcHNlZDQgPSB0cnVlO1xuXG4gICAgICAgICBnb0NvbGxhcHNlKGFyZ3MpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNob3dDb2xsYXBzZUJveCl7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Q29sbGFwc2VCb3ggPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmlzQ29sbGFwc2VkID0gIXRoaXMuaXNDb2xsYXBzZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0NvbGxhcHNlQm94ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmlzQ29sbGFwc2VkID0gIXRoaXMuaXNDb2xsYXBzZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZ29Db2xsYXBzZTIoYXJncykge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2hvd0NvbGxhcHNlQm94Mil7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Q29sbGFwc2VCb3gyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0NvbGxhcHNlZDIgPSAhdGhpcy5pc0NvbGxhcHNlZDI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0NvbGxhcHNlQm94MiA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0NvbGxhcHNlZDIgPSAhdGhpcy5pc0NvbGxhcHNlZDI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZ29Db2xsYXBzZTMoYXJncykge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2hvd0NvbGxhcHNlQm94Myl7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Q29sbGFwc2VCb3gzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0NvbGxhcHNlZDMgPSAhdGhpcy5pc0NvbGxhcHNlZDM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0NvbGxhcHNlQm94MyA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0NvbGxhcHNlZDMgPSAhdGhpcy5pc0NvbGxhcHNlZDM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZ29Db2xsYXBzZTQoYXJncykge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2hvd0NvbGxhcHNlQm94NCl7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Q29sbGFwc2VCb3g0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0NvbGxhcHNlZDQgPSAhdGhpcy5pc0NvbGxhcHNlZDQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0NvbGxhcHNlQm94NCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0NvbGxhcHNlZDQgPSAhdGhpcy5pc0NvbGxhcHNlZDQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy8gVXNlIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IgdG8gaW5qZWN0IHByb3ZpZGVycy5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgLy8gSW5pdCB5b3VyIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGhlcmUuXG4gICAgfVxuXG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcbiAgICAgICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gICAgfVxuXG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcblxuaW1wb3J0IHsgRGlhZ25vc3RpY29zUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2RpYWdub3N0aWNvcy1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgRGlhZ25vc3RpY29zQ29tcG9uZW50IH0gZnJvbSBcIi4vZGlhZ25vc3RpY29zLmNvbXBvbmVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxuICAgICAgICBEaWFnbm9zdGljb3NSb3V0aW5nTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgRGlhZ25vc3RpY29zQ29tcG9uZW50XG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIERpYWdub3N0aWNvc01vZHVsZSB7IH1cbiJdLCJzb3VyY2VSb290IjoiIn0=