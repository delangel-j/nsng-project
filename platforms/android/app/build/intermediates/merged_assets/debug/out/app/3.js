(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[3],{

/***/ "./app/login/login-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/login/login.component.ts");



var routes = [
    { path: "", component: _login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] }
];
var LoginRoutingModule = /** @class */ (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forChild(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());



/***/ }),

/***/ "./app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = "/* Add mobile styles for the component here.  */\n.form {\n    align-items: center;\n    justify-content: center;\n    margin: 40;\n    margin-top: 100;\n}\n"

/***/ }),

/***/ "./app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<StackLayout class=\"form\" [formGroup]=\"form\">\n    <StackLayout class=\"input-field\">\n        <Label\n        class=\"label\"\n        text=\"Email\"\n      ></Label>\n      <TextField\n        class=\"input\"\n        returnKeyType=\"next\"\n        keyboardType=\"email\"\n        [autocorrect]=\"false\"\n        autocapitalizationType=\"none\"\n        formControlName=\"email\"\n        #emailEl\n      ></TextField>\n    </StackLayout>\n    <StackLayout class=\"input-field\">\n      <Label\n        class=\"label\"\n        text=\"Contraseña\"\n      ></Label>\n      <TextField\n        class=\"input\"\n        returnKeyType=\"done\"\n        [autocorrect]=\"false\"\n        autocapitalizationType=\"none\"\n        [secure]=\"true\"\n        hint=\"Min 6 characters\"\n        formControlName=\"password\"\n        (returnPress)=\"onDone()\"\n        #passwordEl\n      ></TextField>\n    </StackLayout>\n    <Button\n      text=\"Login\"\n      class=\"btn btn-primary btn-rounded-lg\"\n      (tap)=\"onSubmit()\"\n    ></Button>\n  </StackLayout>\n"

/***/ }),

/***/ "./app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@nativescript/angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tns_core_modules_ui_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@nativescript/core/ui/page/page.js");
/* harmony import */ var tns_core_modules_ui_page_page__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_page_page__WEBPACK_IMPORTED_MODULE_3__);




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, page) {
        this.router = router;
        this.page = page;
        this.emailControlIsValid = true;
        this.passwordControlIsValid = true;
        this.isLogin = true;
        this.page.actionBarHidden = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]
            }),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]
            })
        });
        this.form.get('email').statusChanges.subscribe(function (status) {
            _this.emailControlIsValid = status === 'VALID';
        });
        this.form.get('password').statusChanges.subscribe(function (status) {
            _this.passwordControlIsValid = status === 'VALID';
        });
    };
    LoginComponent.prototype.onSubmit = function () {
        this.emailEl.nativeElement.focus();
        this.passwordEl.nativeElement.focus();
        this.passwordEl.nativeElement.dismissSoftInput();
        //if (!this.form.valid) {
        //  return;
        // }
        //const email = this.form.get('email').value;
        //const password = this.form.get('password').value;
        this.form.reset();
        //this.emailControlIsValid = true;
        //this.passwordControlIsValid = true;
        //if (this.isLogin) {
        //  console.log('Logging in...');
        //} else {
        // console.log('Signing up ...');
        //}
        this.router.navigate(['/home']);
    };
    LoginComponent.prototype.onDone = function () {
        this.emailEl.nativeElement.focus();
        this.passwordEl.nativeElement.focus();
        this.passwordEl.nativeElement.dismissSoftInput();
    };
    LoginComponent.prototype.onSwitch = function () {
        this.isLogin = !this.isLogin;
    };
    LoginComponent.ctorParameters = function () { return [
        { type: nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"] },
        { type: tns_core_modules_ui_page_page__WEBPACK_IMPORTED_MODULE_3__["Page"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('passwordEl', null),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LoginComponent.prototype, "passwordEl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('emailEl', null),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LoginComponent.prototype, "emailEl", void 0);
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ns-login',
            template: __webpack_require__("./app/login/login.component.html"),
            styles: [__webpack_require__("./app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"], tns_core_modules_ui_page_page__WEBPACK_IMPORTED_MODULE_3__["Page"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./app/login/login.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/common.js");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/login/login-routing.module.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/login/login.component.ts");




var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__["NativeScriptCommonModule"],
                _login_routing_module__WEBPACK_IMPORTED_MODULE_2__["LoginRoutingModule"]
            ],
            declarations: [
                _login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]
            ]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvbG9naW4vbG9naW4tcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xvZ2luL2xvZ2luLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUM7QUFFOEI7QUFFcEI7QUFFbkQsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSwrREFBYyxFQUFFO0NBQzFDLENBQUM7QUFNRjtJQUFBO0lBQWtDLENBQUM7SUFBdEIsa0JBQWtCO1FBSjlCLDhEQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxvRkFBd0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEQsT0FBTyxFQUFFLENBQUMsb0ZBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLGtCQUFrQixDQUFJO0lBQUQseUJBQUM7Q0FBQTtBQUFKOzs7Ozs7OztBQ2QvQiwyRUFBMkUsMEJBQTBCLDhCQUE4QixpQkFBaUIsc0JBQXNCLEdBQUcsRzs7Ozs7OztBQ0E3Syw4akM7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5RTtBQUNMO0FBQ0w7QUFFVjtBQVNyRDtJQVFFLHdCQUFvQixNQUF3QixFQUFVLElBQVU7UUFBNUMsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBTmhFLHdCQUFtQixHQUFHLElBQUksQ0FBQztRQUMzQiwyQkFBc0IsR0FBRyxJQUFJLENBQUM7UUFDOUIsWUFBTyxHQUFHLElB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Q0FBQztJQUFmLFdBQVc7UUFadkIsOERBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxvRkFBd0I7Z0JBQ3hCLHdFQUFrQjthQUNyQjtZQUNELFlBQVksRUFBRTtnQkFDViwrREFBYzthQUNqQjtZQUNELE9BQU8sRUFBRTtnQkFDTCw4REFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csV0FBVyxDQUFJO0lBQUQsa0JBQUM7Q0FBQTtBQUFKIiwiZmlsZSI6IjMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSBcIi4vbG9naW4uY29tcG9uZW50XCI7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHsgcGF0aDogXCJcIiwgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudCB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Sb3V0aW5nTW9kdWxlIHsgfVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qIEFkZCBtb2JpbGUgc3R5bGVzIGZvciB0aGUgY29tcG9uZW50IGhlcmUuICAqL1xcbi5mb3JtIHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbjogNDA7XFxuICAgIG1hcmdpbi10b3A6IDEwMDtcXG59XFxuXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJmb3JtXFxcIiBbZm9ybUdyb3VwXT1cXFwiZm9ybVxcXCI+XFxuICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaW5wdXQtZmllbGRcXFwiPlxcbiAgICAgICAgPExhYmVsXFxuICAgICAgICBjbGFzcz1cXFwibGFiZWxcXFwiXFxuICAgICAgICB0ZXh0PVxcXCJFbWFpbFxcXCJcXG4gICAgICA+PC9MYWJlbD5cXG4gICAgICA8VGV4dEZpZWxkXFxuICAgICAgICBjbGFzcz1cXFwiaW5wdXRcXFwiXFxuICAgICAgICByZXR1cm5LZXlUeXBlPVxcXCJuZXh0XFxcIlxcbiAgICAgICAga2V5Ym9hcmRUeXBlPVxcXCJlbWFpbFxcXCJcXG4gICAgICAgIFthdXRvY29ycmVjdF09XFxcImZhbHNlXFxcIlxcbiAgICAgICAgYXV0b2NhcGl0YWxpemF0aW9uVHlwZT1cXFwibm9uZVxcXCJcXG4gICAgICAgIGZvcm1Db250cm9sTmFtZT1cXFwiZW1haWxcXFwiXFxuICAgICAgICAjZW1haWxFbFxcbiAgICAgID48L1RleHRGaWVsZD5cXG4gICAgPC9TdGFja0xheW91dD5cXG4gICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJpbnB1dC1maWVsZFxcXCI+XFxuICAgICAgPExhYmVsXFxuICAgICAgICBjbGFzcz1cXFwibGFiZWxcXFwiXFxuICAgICAgICB0ZXh0PVxcXCJDb250cmFzZcOxYVxcXCJcXG4gICAgICA+PC9MYWJlbD5cXG4gICAgICA8VGV4dEZpZWxkXFxuICAgICAgICBjbGFzcz1cXFwiaW5wdXRcXFwiXFxuICAgICAgICByZXR1cm5LZXlUeXBlPVxcXCJkb25lXFxcIlxcbiAgICAgICAgW2F1dG9jb3JyZWN0XT1cXFwiZmFsc2VcXFwiXFxuICAgICAgICBhdXRvY2FwaXRhbGl6YXRpb25UeXBlPVxcXCJub25lXFxcIlxcbiAgICAgICAgW3NlY3VyZV09XFxcInRydWVcXFwiXFxuICAgICAgICBoaW50PVxcXCJNaW4gNiBjaGFyYWN0ZXJzXFxcIlxcbiAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVxcXCJwYXNzd29yZFxcXCJcXG4gICAgICAgIChyZXR1cm5QcmVzcyk9XFxcIm9uRG9uZSgpXFxcIlxcbiAgICAgICAgI3Bhc3N3b3JkRWxcXG4gICAgICA+PC9UZXh0RmllbGQ+XFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgIDxCdXR0b25cXG4gICAgICB0ZXh0PVxcXCJMb2dpblxcXCJcXG4gICAgICBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1yb3VuZGVkLWxnXFxcIlxcbiAgICAgICh0YXApPVxcXCJvblN1Ym1pdCgpXFxcIlxcbiAgICA+PC9CdXR0b24+XFxuICA8L1N0YWNrTGF5b3V0PlxcblwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS90ZXh0LWZpZWxkJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZSc7XG5pbXBvcnQgeyB0b3Btb3N0IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZS9mcmFtZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLWxvZ2luJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xvZ2luLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbG9naW4uY29tcG9uZW50LmNzcyddLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZm9ybTogRm9ybUdyb3VwO1xuICBlbWFpbENvbnRyb2xJc1ZhbGlkID0gdHJ1ZTtcbiAgcGFzc3dvcmRDb250cm9sSXNWYWxpZCA9IHRydWU7XG4gIGlzTG9naW4gPSB0cnVlO1xuICBAVmlld0NoaWxkKCdwYXNzd29yZEVsJywgbnVsbCkgcGFzc3dvcmRFbDogRWxlbWVudFJlZjxUZXh0RmllbGQ+O1xuICBAVmlld0NoaWxkKCdlbWFpbEVsJywgbnVsbCkgZW1haWxFbDogRWxlbWVudFJlZjxUZXh0RmllbGQ+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIHBhZ2U6IFBhZ2UpIHtcbiAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgICB0aGlzLmZvcm0gPSBuZXcgRm9ybUdyb3VwKHtcbiAgICAgIGVtYWlsOiBuZXcgRm9ybUNvbnRyb2wobnVsbCwge1xuICAgICAgICB1cGRhdGVPbjogJ2JsdXInLFxuICAgICAgICB2YWxpZGF0b3JzOiBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5lbWFpbF1cbiAgICAgIH0pLFxuICAgICAgcGFzc3dvcmQ6IG5ldyBGb3JtQ29udHJvbChudWxsLCB7XG4gICAgICAgIHVwZGF0ZU9uOiAnYmx1cicsXG4gICAgICAgIHZhbGlkYXRvcnM6IFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCg2KV1cbiAgICAgIH0pXG4gICAgfSk7XG5cbiAgICB0aGlzLmZvcm0uZ2V0KCdlbWFpbCcpLnN0YXR1c0NoYW5nZXMuc3Vic2NyaWJlKHN0YXR1cyA9PiB7XG4gICAgICB0aGlzLmVtYWlsQ29udHJvbElzVmFsaWQgPSBzdGF0dXMgPT09ICdWQUxJRCc7XG4gICAgfSk7XG5cbiAgICB0aGlzLmZvcm0uZ2V0KCdwYXNzd29yZCcpLnN0YXR1c0NoYW5nZXMuc3Vic2NyaWJlKHN0YXR1cyA9PiB7XG4gICAgICB0aGlzLnBhc3N3b3JkQ29udHJvbElzVmFsaWQgPSBzdGF0dXMgPT09ICdWQUxJRCc7XG4gICAgfSk7XG4gIH1cblxuICBvblN1Ym1pdCgpIHtcbiAgICB0aGlzLmVtYWlsRWwubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIHRoaXMucGFzc3dvcmRFbC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgdGhpcy5wYXNzd29yZEVsLm5hdGl2ZUVsZW1lbnQuZGlzbWlzc1NvZnRJbnB1dCgpO1xuXG4gICAgLy9pZiAoIXRoaXMuZm9ybS52YWxpZCkge1xuICAgIC8vICByZXR1cm47XG4gICAvLyB9XG5cbiAgICAvL2NvbnN0IGVtYWlsID0gdGhpcy5mb3JtLmdldCgnZW1haWwnKS52YWx1ZTtcbiAgICAvL2NvbnN0IHBhc3N3b3JkID0gdGhpcy5mb3JtLmdldCgncGFzc3dvcmQnKS52YWx1ZTtcbiAgICB0aGlzLmZvcm0ucmVzZXQoKTtcbiAgICAvL3RoaXMuZW1haWxDb250cm9sSXNWYWxpZCA9IHRydWU7XG4gICAgLy90aGlzLnBhc3N3b3JkQ29udHJvbElzVmFsaWQgPSB0cnVlO1xuICAgIC8vaWYgKHRoaXMuaXNMb2dpbikge1xuICAgIC8vICBjb25zb2xlLmxvZygnTG9nZ2luZyBpbi4uLicpO1xuICAgIC8vfSBlbHNlIHtcbiAgICAgLy8gY29uc29sZS5sb2coJ1NpZ25pbmcgdXAgLi4uJyk7XG4gICAgLy99XG5cbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9ob21lJ10pO1xuICB9XG5cbiAgb25Eb25lKCkge1xuICAgIHRoaXMuZW1haWxFbC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgdGhpcy5wYXNzd29yZEVsLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB0aGlzLnBhc3N3b3JkRWwubmF0aXZlRWxlbWVudC5kaXNtaXNzU29mdElucHV0KCk7XG4gIH1cblxuICBvblN3aXRjaCgpIHtcbiAgICB0aGlzLmlzTG9naW4gPSAhdGhpcy5pc0xvZ2luO1xuICB9XG59XG5cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcblxuaW1wb3J0IHsgTG9naW5Sb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vbG9naW4tcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSBcIi4vbG9naW4uY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgICAgIExvZ2luUm91dGluZ01vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIExvZ2luQ29tcG9uZW50XG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luTW9kdWxlIHsgfVxuIl0sInNvdXJjZVJvb3QiOiIifQ==