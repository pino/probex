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
var core_1 = require('angular2/core');
var http_1 = require('angular2/http');
require('rxjs/Rx');
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.serviceUrl = "http://localhost:8080/ProbexService/rest/users";
    }
    UserService.prototype.listAll = function () {
        return this.http.get(this.serviceUrl).map(function (res) { return res.json(); });
    };
    UserService.prototype.insert = function (user) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var body = JSON.stringify(user);
        return this.http.post(this.serviceUrl, body, options).map(function (res) { return res.text(); });
    };
    UserService.prototype.update = function (user) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var body = JSON.stringify(user);
        return this.http.put(this.serviceUrl, body, options).map(function (res) { return res.text(); });
    };
    UserService.prototype.delete = function (id) {
        var url = this.serviceUrl + '/' + id;
        return this.http.delete(url).map(function (res) { return res.text(); });
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
    ], UserService);
    return UserService;
    var _a;
}());
exports.UserService = UserService;
//# sourceMappingURL=user-service.js.map