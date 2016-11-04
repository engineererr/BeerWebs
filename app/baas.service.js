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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var Observable_1 = require('rxjs/Observable');
//import { MyTypedItem } from '../models/MyTypedItem';
var app_constants_1 = require('./app.constants');
var BaasService = (function () {
    function BaasService(http, _configuration) {
        this.http = http;
        this._configuration = _configuration;
        this.serverWithLoginUrl = _configuration.ServerWithLoginUrl;
        this.headers = new http_1.Headers();
        this.headers.append('Content-Type', 'application/json');
        //this.headers.append('Accept', 'application/json');
    }
    BaasService.prototype.login = function (username, password, appcode) {
        var toAdd = JSON.stringify({ username: username, password: password, appcode: appcode });
        console.log(toAdd);
        console.log(this.serverWithLoginUrl);
        return this.http.post(this.serverWithLoginUrl, toAdd, { headers: this.headers })
            .map(this.extractData)
            .catch(this.handleError);
    };
    BaasService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data.signUpDate || {};
    };
    BaasService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    BaasService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, app_constants_1.Configuration])
    ], BaasService);
    return BaasService;
}());
exports.BaasService = BaasService;
//# sourceMappingURL=baas.service.js.map