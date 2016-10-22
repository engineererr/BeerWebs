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
var common_1 = require('@angular/common');
var coaster_service_1 = require('./coaster.service');
var CoasterDetailComponent = (function () {
    function CoasterDetailComponent(coasterService, route, location) {
        this.coasterService = coasterService;
        this.route = route;
        this.location = location;
    }
    CoasterDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.coasterService.getCoaster(id).then(function (coaster) { return _this.coaster = coaster; });
        });
    };
    CoasterDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    CoasterDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-coaster-detail',
            templateUrl: 'coaster-detail.component.html',
            styleUrls: ['coaster-detail.component.css']
        }), 
        __metadata('design:paramtypes', [coaster_service_1.CoasterService, router_1.ActivatedRoute, common_1.Location])
    ], CoasterDetailComponent);
    return CoasterDetailComponent;
}());
exports.CoasterDetailComponent = CoasterDetailComponent;
//# sourceMappingURL=coaster-detail.component.js.map