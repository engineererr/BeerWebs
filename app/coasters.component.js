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
var coaster_service_1 = require('./coaster.service');
var router_1 = require('@angular/router');
var CoastersComponent = (function () {
    function CoastersComponent(router, coasterService) {
        this.router = router;
        this.coasterService = coasterService;
    }
    CoastersComponent.prototype.ngOnInit = function () {
        this.getCoasters();
    };
    CoastersComponent.prototype.getCoasters = function () {
        var _this = this;
        this.coasterService.getCoasters().then(function (coasters) { return _this.coasters = coasters; });
    };
    CoastersComponent.prototype.onSelect = function (coaster) {
        this.selectedCoaster = coaster;
    };
    CoastersComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedCoaster.id]);
    };
    CoastersComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-coasters',
            templateUrl: 'coasters.component.html',
            styleUrls: ['coasters.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, coaster_service_1.CoasterService])
    ], CoastersComponent);
    return CoastersComponent;
}());
exports.CoastersComponent = CoastersComponent;
//# sourceMappingURL=coasters.component.js.map