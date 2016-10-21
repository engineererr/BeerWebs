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
var coaster_1 = require('./coaster');
var CoasterDetailComponent = (function () {
    function CoasterDetailComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', coaster_1.Coaster)
    ], CoasterDetailComponent.prototype, "coaster", void 0);
    CoasterDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-coaster-detail',
            template: "\n    <div *ngIf=\"coaster\">\n        <h2>{{coaster.name}} details!</h2>\n        <div><label>id: </label>{{coaster.id}}</div>\n        <div>\n        <label>name: </label>\n        <input [(ngModel)]=\"coaster.name\" placeholder=\"name\"/>\n        </div>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], CoasterDetailComponent);
    return CoasterDetailComponent;
}());
exports.CoasterDetailComponent = CoasterDetailComponent;
//# sourceMappingURL=coaster-detail.component.js.map