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

module.exports = "/* Add mobile styles for the component here.  */\n"

/***/ }),

/***/ "./app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<StackLayout class=\"form\" [formGroup]=\"form\">\n    <StackLayout class=\"input-field\">\n        <Label\n        class=\"label\"\n        text=\"Email\"\n      ></Label>\n      <TextField\n        class=\"input\"\n        returnKeyType=\"next\"\n        keyboardType=\"email\"\n        [autocorrect]=\"false\"\n        autocapitalizationType=\"none\"\n        formControlName=\"email\"\n        #emailEl\n      ></TextField>\n    </StackLayout>\n    <StackLayout class=\"input-field\">\n      <Label\n        class=\"label\"\n        text=\"Password\"\n      ></Label>\n      <TextField\n        class=\"input\"\n        returnKeyType=\"done\"\n        [autocorrect]=\"false\"\n        autocapitalizationType=\"none\"\n        [secure]=\"true\"\n        hint=\"Min 6 characters\"\n        formControlName=\"password\"\n        (returnPress)=\"onDone()\"\n        #passwordEl\n      ></TextField>\n    </StackLayout>\n    <Button\n      text=\"Login\"\n      class=\"btn btn-primary btn-rounded-lg\"\n      (tap)=\"onSubmit()\"\n    ></Button>\n  </StackLayout>\n"

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



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router) {
        this.router = router;
        this.emailControlIsValid = true;
        this.passwordControlIsValid = true;
        this.isLogin = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.page = <Page>topmost().currentPage;
        //  this.page.actionBarHidden= true;
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
        { type: nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"] }
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
        __metadata("design:paramtypes", [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"]])
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvbG9naW4vbG9naW4tcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xvZ2luL2xvZ2luLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUM7QUFFOEI7QUFFcEI7QUFFbkQsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSwrREFBYyxFQUFFO0NBQzFDLENBQUM7QUFNRjtJQUFBO0lBQWtDLENBQUM7SUFBdEIsa0JBQWtCO1FBSjlCLDhEQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxvRkFBd0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEQsT0FBTyxFQUFFLENBQUMsb0ZBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLGtCQUFrQixDQUFJO0lBQUQseUJBQUM7Q0FBQTtBQUFKOzs7Ozs7OztBQ2QvQixxRTs7Ozs7OztBQ0FBLDRqQzs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUU7QUFDTDtBQUNMO0FBVy9EO0lBU0Usd0JBQW9CLE1BQXdCO1FBQXhCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBUDVDLHdCQUFtQixHQUFHLElBQUksQ0FBQztRQUMzQiwyQkFBc0IsR0FBRyxJQUFJLENBQUM7UUFDOUIsWUFBTyxHQUFHLElBQUksQ0FBQztJQUtnQyxDQUFDO0lBRWhELGlDQUFRLEdBQVI7UUFBQSxpQkFxQkM7UUFwQkUsMkNBQTJDO1FBQzVDLG9DQUFvQztRQUNwQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksd0RBQVMsQ0FBQztZQUN4QixLQUFLLEVBQUUsSUFBSSwwREFBVyxDQUFDLElBQUksRUFBRTtnQkFDM0IsUUFBUSxFQUFFLE1BQU07Z0JBQ2hCLFVBQVUsRUFBRSxDQUFDLHlEQUFVLENBQUMsUUFBUSxFQUFFLHlEQUFVLENBQUMsS0FBSyxDQUFDO2FBQ3BELENBQUM7WUFDRixRQUFRLEVBQUUsSUFBSSwwREFBVyxDQUFDLElBQUksRUFBRTtnQkFDOUIsUUFBUSxFQUFFLE1BQU07Z0JBQ2hCLFVBQVUsRUFBRSxDQUFDLHlEQUFVLENBQUMsUUFBUSxFQUFFLHlEQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzNELENBQUM7U0FDSCxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLGdCQUFNO1lBQ25ELEtBQUksQ0FBQyxtQkFBbUIsR0FBRyxNQUFNLEtBQUssT0FBTyxDQUFDO1FBQ2hELENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxnQkFBTTtZQUN0RCxLQUFJLENBQUMsc0JBQXNCLEdBQUcsTUFBTSxLQUFLLE9BQU8sQ0FBQztRQUNuRCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUVqRCx5QkFBeUI7UUFDekIsV0FBVztRQUNaLElBQUk7UUFFSCw2Q0FBNkM7UUFDN0MsbURBQW1EO1FBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbEIsa0NBQWtDO1FBQ2xDLHFDQUFxQztRQUNyQyxxQkFBcUI7UUFDckIsaUNBQWlDO1FBQ2pDLFVBQVU7UUFDVCxpQ0FBaUM7UUFDbEMsR0FBRztRQUVILElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsK0JBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ25DLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDbkQsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUMvQixDQUFDOztnQkF4RDJCLDRFQUFnQjs7SUFKYjtRQUE5QiwrREFBUyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUM7a0NBQWEsd0RBQVU7c0RBQVk7SUFDckM7UUFBM0IsK0RBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDO2tDQUFVLHdEQUFVO21EQUFZO0lBTmhELGNBQWM7UUFOMUIsK0RBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxVQUFVO1lBQ3BCLGlFQUFxQzs7U0FHdEMsQ0FBQzt5Q0FVNEIsNEVBQWdCO09BVGpDLGNBQWMsQ0FrRTFCO0lBQUQscUJBQUM7Q0FBQTtBQWxFMEI7Ozs7Ozs7OztBQ2IzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEyRDtBQUNZO0FBRVg7QUFDVDtBQWNuRDtJQUFBO0lBQTJCLENBQUM7SUFBZixXQUFXO1FBWnZCLDhEQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsb0ZBQXdCO2dCQUN4Qix3RUFBa0I7YUFDckI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsK0RBQWM7YUFDakI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsOERBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLFdBQVcsQ0FBSTtJQUFELGtCQUFDO0NBQUE7QUFBSiIsImZpbGUiOiIzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gXCIuL2xvZ2luLmNvbXBvbmVudFwiO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6IFwiXCIsIGNvbXBvbmVudDogTG9naW5Db21wb25lbnQgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luUm91dGluZ01vZHVsZSB7IH1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvKiBBZGQgbW9iaWxlIHN0eWxlcyBmb3IgdGhlIGNvbXBvbmVudCBoZXJlLiAgKi9cXG5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImZvcm1cXFwiIFtmb3JtR3JvdXBdPVxcXCJmb3JtXFxcIj5cXG4gICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJpbnB1dC1maWVsZFxcXCI+XFxuICAgICAgICA8TGFiZWxcXG4gICAgICAgIGNsYXNzPVxcXCJsYWJlbFxcXCJcXG4gICAgICAgIHRleHQ9XFxcIkVtYWlsXFxcIlxcbiAgICAgID48L0xhYmVsPlxcbiAgICAgIDxUZXh0RmllbGRcXG4gICAgICAgIGNsYXNzPVxcXCJpbnB1dFxcXCJcXG4gICAgICAgIHJldHVybktleVR5cGU9XFxcIm5leHRcXFwiXFxuICAgICAgICBrZXlib2FyZFR5cGU9XFxcImVtYWlsXFxcIlxcbiAgICAgICAgW2F1dG9jb3JyZWN0XT1cXFwiZmFsc2VcXFwiXFxuICAgICAgICBhdXRvY2FwaXRhbGl6YXRpb25UeXBlPVxcXCJub25lXFxcIlxcbiAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVxcXCJlbWFpbFxcXCJcXG4gICAgICAgICNlbWFpbEVsXFxuICAgICAgPjwvVGV4dEZpZWxkPlxcbiAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImlucHV0LWZpZWxkXFxcIj5cXG4gICAgICA8TGFiZWxcXG4gICAgICAgIGNsYXNzPVxcXCJsYWJlbFxcXCJcXG4gICAgICAgIHRleHQ9XFxcIlBhc3N3b3JkXFxcIlxcbiAgICAgID48L0xhYmVsPlxcbiAgICAgIDxUZXh0RmllbGRcXG4gICAgICAgIGNsYXNzPVxcXCJpbnB1dFxcXCJcXG4gICAgICAgIHJldHVybktleVR5cGU9XFxcImRvbmVcXFwiXFxuICAgICAgICBbYXV0b2NvcnJlY3RdPVxcXCJmYWxzZVxcXCJcXG4gICAgICAgIGF1dG9jYXBpdGFsaXphdGlvblR5cGU9XFxcIm5vbmVcXFwiXFxuICAgICAgICBbc2VjdXJlXT1cXFwidHJ1ZVxcXCJcXG4gICAgICAgIGhpbnQ9XFxcIk1pbiA2IGNoYXJhY3RlcnNcXFwiXFxuICAgICAgICBmb3JtQ29udHJvbE5hbWU9XFxcInBhc3N3b3JkXFxcIlxcbiAgICAgICAgKHJldHVyblByZXNzKT1cXFwib25Eb25lKClcXFwiXFxuICAgICAgICAjcGFzc3dvcmRFbFxcbiAgICAgID48L1RleHRGaWVsZD5cXG4gICAgPC9TdGFja0xheW91dD5cXG4gICAgPEJ1dHRvblxcbiAgICAgIHRleHQ9XFxcIkxvZ2luXFxcIlxcbiAgICAgIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgYnRuLXJvdW5kZWQtbGdcXFwiXFxuICAgICAgKHRhcCk9XFxcIm9uU3VibWl0KClcXFwiXFxuICAgID48L0J1dHRvbj5cXG4gIDwvU3RhY2tMYXlvdXQ+XFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3RleHQtZmllbGQnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvcGFnZS9wYWdlJztcbmltcG9ydCB7IHRvcG1vc3QgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lL2ZyYW1lJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnMtbG9naW4nLFxuICB0ZW1wbGF0ZVVybDogJy4vbG9naW4uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9sb2dpbi5jb21wb25lbnQuY3NzJ10sXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWRcbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBmb3JtOiBGb3JtR3JvdXA7XG4gIGVtYWlsQ29udHJvbElzVmFsaWQgPSB0cnVlO1xuICBwYXNzd29yZENvbnRyb2xJc1ZhbGlkID0gdHJ1ZTtcbiAgaXNMb2dpbiA9IHRydWU7XG4gIEBWaWV3Q2hpbGQoJ3Bhc3N3b3JkRWwnLCBudWxsKSBwYXNzd29yZEVsOiBFbGVtZW50UmVmPFRleHRGaWVsZD47XG4gIEBWaWV3Q2hpbGQoJ2VtYWlsRWwnLCBudWxsKSBlbWFpbEVsOiBFbGVtZW50UmVmPFRleHRGaWVsZD47XG4gIHBhZ2U6IFBhZ2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgIC8vIHRoaXMucGFnZSA9IDxQYWdlPnRvcG1vc3QoKS5jdXJyZW50UGFnZTtcbiAgICAvLyAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbj0gdHJ1ZTtcbiAgICB0aGlzLmZvcm0gPSBuZXcgRm9ybUdyb3VwKHtcbiAgICAgIGVtYWlsOiBuZXcgRm9ybUNvbnRyb2wobnVsbCwge1xuICAgICAgICB1cGRhdGVPbjogJ2JsdXInLFxuICAgICAgICB2YWxpZGF0b3JzOiBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5lbWFpbF1cbiAgICAgIH0pLFxuICAgICAgcGFzc3dvcmQ6IG5ldyBGb3JtQ29udHJvbChudWxsLCB7XG4gICAgICAgIHVwZGF0ZU9uOiAnYmx1cicsXG4gICAgICAgIHZhbGlkYXRvcnM6IFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCg2KV1cbiAgICAgIH0pXG4gICAgfSk7XG5cbiAgICB0aGlzLmZvcm0uZ2V0KCdlbWFpbCcpLnN0YXR1c0NoYW5nZXMuc3Vic2NyaWJlKHN0YXR1cyA9PiB7XG4gICAgICB0aGlzLmVtYWlsQ29udHJvbElzVmFsaWQgPSBzdGF0dXMgPT09ICdWQUxJRCc7XG4gICAgfSk7XG5cbiAgICB0aGlzLmZvcm0uZ2V0KCdwYXNzd29yZCcpLnN0YXR1c0NoYW5nZXMuc3Vic2NyaWJlKHN0YXR1cyA9PiB7XG4gICAgICB0aGlzLnBhc3N3b3JkQ29udHJvbElzVmFsaWQgPSBzdGF0dXMgPT09ICdWQUxJRCc7XG4gICAgfSk7XG4gIH1cblxuICBvblN1Ym1pdCgpIHtcbiAgICB0aGlzLmVtYWlsRWwubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIHRoaXMucGFzc3dvcmRFbC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgdGhpcy5wYXNzd29yZEVsLm5hdGl2ZUVsZW1lbnQuZGlzbWlzc1NvZnRJbnB1dCgpO1xuXG4gICAgLy9pZiAoIXRoaXMuZm9ybS52YWxpZCkge1xuICAgIC8vICByZXR1cm47XG4gICAvLyB9XG5cbiAgICAvL2NvbnN0IGVtYWlsID0gdGhpcy5mb3JtLmdldCgnZW1haWwnKS52YWx1ZTtcbiAgICAvL2NvbnN0IHBhc3N3b3JkID0gdGhpcy5mb3JtLmdldCgncGFzc3dvcmQnKS52YWx1ZTtcbiAgICB0aGlzLmZvcm0ucmVzZXQoKTtcbiAgICAvL3RoaXMuZW1haWxDb250cm9sSXNWYWxpZCA9IHRydWU7XG4gICAgLy90aGlzLnBhc3N3b3JkQ29udHJvbElzVmFsaWQgPSB0cnVlO1xuICAgIC8vaWYgKHRoaXMuaXNMb2dpbikge1xuICAgIC8vICBjb25zb2xlLmxvZygnTG9nZ2luZyBpbi4uLicpO1xuICAgIC8vfSBlbHNlIHtcbiAgICAgLy8gY29uc29sZS5sb2coJ1NpZ25pbmcgdXAgLi4uJyk7XG4gICAgLy99XG5cbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9ob21lJ10pO1xuICB9XG5cbiAgb25Eb25lKCkge1xuICAgIHRoaXMuZW1haWxFbC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgdGhpcy5wYXNzd29yZEVsLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB0aGlzLnBhc3N3b3JkRWwubmF0aXZlRWxlbWVudC5kaXNtaXNzU29mdElucHV0KCk7XG4gIH1cblxuICBvblN3aXRjaCgpIHtcbiAgICB0aGlzLmlzTG9naW4gPSAhdGhpcy5pc0xvZ2luO1xuICB9XG59XG5cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcblxuaW1wb3J0IHsgTG9naW5Sb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vbG9naW4tcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSBcIi4vbG9naW4uY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgICAgIExvZ2luUm91dGluZ01vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIExvZ2luQ29tcG9uZW50XG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luTW9kdWxlIHsgfVxuIl0sInNvdXJjZVJvb3QiOiIifQ==