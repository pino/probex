"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var signin_service_1 = require('../../services/signin-service');
var SignoutComponent = (function () {
    function SignoutComponent(router, signinService) {
        this.router = router;
        this.signinService = signinService;
    }
    SignoutComponent.prototype.ngOnInit = function () {
        this.signout();
    };
    SignoutComponent.prototype.signout = function () {
        this.signinService.signout();
        this.router.navigate(['/signin']);
    };
    SignoutComponent = __decorate([
        core_1.Component({
            selector: 'signout',
            template: '',
            providers: [signin_service_1.SigninService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, signin_service_1.SigninService])
    ], SignoutComponent);
    return SignoutComponent;
}());
exports.SignoutComponent = SignoutComponent;
//# sourceMappingURL=signout-component.js.map