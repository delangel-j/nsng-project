webpackHotUpdate(3,{

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



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5RTtBQUNMO0FBQ0w7QUFXL0Q7SUFTRSx3QkFBb0IsTUFBd0I7UUFBeEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFQNUMsd0JBQW1CLEdBQUcsSUFBSSxDQUFDO1FBQzNCLDJCQUFzQixHQUFHLElBQUksQ0FBQztRQUM5QixZQUFPLEdBQUcsSUFBSSxDQUFDO0lBS2dDLENBQUM7SUFFaEQsaUNBQVEsR0FBUjtRQUFBLGlCQXFCQztRQXBCRSwyQ0FBMkM7UUFDNUMsb0NBQW9DO1FBQ3BDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSx3REFBUyxDQUFDO1lBQ3hCLEtBQUssRUFBRSxJQUFJLDBEQUFXLENBQUMsSUFBSSxFQUFFO2dCQUMzQixRQUFRLEVBQUUsTUFBTTtnQkFDaEIsVUFBVSxFQUFFLENBQUMseURBQVUsQ0FBQyxRQUFRLEVBQUUseURBQVUsQ0FBQyxLQUFLLENBQUM7YUFDcEQsQ0FBQztZQUNGLFFBQVEsRUFBRSxJQUFJLDBEQUFXLENBQUMsSUFBSSxFQUFFO2dCQUM5QixRQUFRLEVBQUUsTUFBTTtnQkFDaEIsVUFBVSxFQUFFLENBQUMseURBQVUsQ0FBQyxRQUFRLEVBQUUseURBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDM0QsQ0FBQztTQUNILENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsZ0JBQU07WUFDbkQsS0FBSSxDQUFDLG1CQUFtQixHQUFHLE1BQU0sS0FBSyxPQUFPLENBQUM7UUFDaEQsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLGdCQUFNO1lBQ3RELEtBQUksQ0FBQyxzQkFBc0IsR0FBRyxNQUFNLEtBQUssT0FBTyxDQUFDO1FBQ25ELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNuQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN0QyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBRWpELHlCQUF5QjtRQUN6QixXQUFXO1FBQ1osSUFBSTtRQUVILDZDQUE2QztRQUM3QyxtREFBbUQ7UUFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNsQixrQ0FBa0M7UUFDbEMscUNBQXFDO1FBQ3JDLHFCQUFxQjtRQUNyQixpQ0FBaUM7UUFDakMsVUFBVTtRQUNULGlDQUFpQztRQUNsQyxHQUFHO1FBRUgsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCwrQkFBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUNuRCxDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQy9CLENBQUM7O2dCQXhEMkIsNEVBQWdCOztJQUpiO1FBQTlCLCtEQUFTLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQztrQ0FBYSx3REFBVTtzREFBWTtJQUNyQztRQUEzQiwrREFBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUM7a0NBQVUsd0RBQVU7bURBQVk7SUFOaEQsY0FBYztRQU4xQiwrREFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFVBQVU7WUFDcEIsaUVBQXFDOztTQUd0QyxDQUFDO3lDQVU0Qiw0RUFBZ0I7T0FUakMsY0FBYyxDQWtFMUI7SUFBRCxxQkFBQztDQUFBO0FBbEUwQiIsImZpbGUiOiIzLmZlYTY0MmY5MTI3ZWM1ZmU4ODRkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3RleHQtZmllbGQnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvcGFnZS9wYWdlJztcbmltcG9ydCB7IHRvcG1vc3QgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lL2ZyYW1lJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnMtbG9naW4nLFxuICB0ZW1wbGF0ZVVybDogJy4vbG9naW4uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9sb2dpbi5jb21wb25lbnQuY3NzJ10sXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWRcbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBmb3JtOiBGb3JtR3JvdXA7XG4gIGVtYWlsQ29udHJvbElzVmFsaWQgPSB0cnVlO1xuICBwYXNzd29yZENvbnRyb2xJc1ZhbGlkID0gdHJ1ZTtcbiAgaXNMb2dpbiA9IHRydWU7XG4gIEBWaWV3Q2hpbGQoJ3Bhc3N3b3JkRWwnLCBudWxsKSBwYXNzd29yZEVsOiBFbGVtZW50UmVmPFRleHRGaWVsZD47XG4gIEBWaWV3Q2hpbGQoJ2VtYWlsRWwnLCBudWxsKSBlbWFpbEVsOiBFbGVtZW50UmVmPFRleHRGaWVsZD47XG4gIHBhZ2U6IFBhZ2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgIC8vIHRoaXMucGFnZSA9IDxQYWdlPnRvcG1vc3QoKS5jdXJyZW50UGFnZTtcbiAgICAvLyAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbj0gdHJ1ZTtcbiAgICB0aGlzLmZvcm0gPSBuZXcgRm9ybUdyb3VwKHtcbiAgICAgIGVtYWlsOiBuZXcgRm9ybUNvbnRyb2wobnVsbCwge1xuICAgICAgICB1cGRhdGVPbjogJ2JsdXInLFxuICAgICAgICB2YWxpZGF0b3JzOiBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5lbWFpbF1cbiAgICAgIH0pLFxuICAgICAgcGFzc3dvcmQ6IG5ldyBGb3JtQ29udHJvbChudWxsLCB7XG4gICAgICAgIHVwZGF0ZU9uOiAnYmx1cicsXG4gICAgICAgIHZhbGlkYXRvcnM6IFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCg2KV1cbiAgICAgIH0pXG4gICAgfSk7XG5cbiAgICB0aGlzLmZvcm0uZ2V0KCdlbWFpbCcpLnN0YXR1c0NoYW5nZXMuc3Vic2NyaWJlKHN0YXR1cyA9PiB7XG4gICAgICB0aGlzLmVtYWlsQ29udHJvbElzVmFsaWQgPSBzdGF0dXMgPT09ICdWQUxJRCc7XG4gICAgfSk7XG5cbiAgICB0aGlzLmZvcm0uZ2V0KCdwYXNzd29yZCcpLnN0YXR1c0NoYW5nZXMuc3Vic2NyaWJlKHN0YXR1cyA9PiB7XG4gICAgICB0aGlzLnBhc3N3b3JkQ29udHJvbElzVmFsaWQgPSBzdGF0dXMgPT09ICdWQUxJRCc7XG4gICAgfSk7XG4gIH1cblxuICBvblN1Ym1pdCgpIHtcbiAgICB0aGlzLmVtYWlsRWwubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIHRoaXMucGFzc3dvcmRFbC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgdGhpcy5wYXNzd29yZEVsLm5hdGl2ZUVsZW1lbnQuZGlzbWlzc1NvZnRJbnB1dCgpO1xuXG4gICAgLy9pZiAoIXRoaXMuZm9ybS52YWxpZCkge1xuICAgIC8vICByZXR1cm47XG4gICAvLyB9XG5cbiAgICAvL2NvbnN0IGVtYWlsID0gdGhpcy5mb3JtLmdldCgnZW1haWwnKS52YWx1ZTtcbiAgICAvL2NvbnN0IHBhc3N3b3JkID0gdGhpcy5mb3JtLmdldCgncGFzc3dvcmQnKS52YWx1ZTtcbiAgICB0aGlzLmZvcm0ucmVzZXQoKTtcbiAgICAvL3RoaXMuZW1haWxDb250cm9sSXNWYWxpZCA9IHRydWU7XG4gICAgLy90aGlzLnBhc3N3b3JkQ29udHJvbElzVmFsaWQgPSB0cnVlO1xuICAgIC8vaWYgKHRoaXMuaXNMb2dpbikge1xuICAgIC8vICBjb25zb2xlLmxvZygnTG9nZ2luZyBpbi4uLicpO1xuICAgIC8vfSBlbHNlIHtcbiAgICAgLy8gY29uc29sZS5sb2coJ1NpZ25pbmcgdXAgLi4uJyk7XG4gICAgLy99XG5cbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9ob21lJ10pO1xuICB9XG5cbiAgb25Eb25lKCkge1xuICAgIHRoaXMuZW1haWxFbC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgdGhpcy5wYXNzd29yZEVsLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB0aGlzLnBhc3N3b3JkRWwubmF0aXZlRWxlbWVudC5kaXNtaXNzU29mdElucHV0KCk7XG4gIH1cblxuICBvblN3aXRjaCgpIHtcbiAgICB0aGlzLmlzTG9naW4gPSAhdGhpcy5pc0xvZ2luO1xuICB9XG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=