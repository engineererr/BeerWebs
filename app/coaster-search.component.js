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
var Observable_1 = require('rxjs/Observable');
var Subject_1 = require('rxjs/Subject');
var coaster_search_service_1 = require('./coaster-search.service');
var CoasterSearchComponent = (function () {
    function CoasterSearchComponent(coasterSearchService, router) {
        this.coasterSearchService = coasterSearchService;
        this.router = router;
        this.searchTerms = new Subject_1.Subject();
    }
    CoasterSearchComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    CoasterSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.coasters = this.searchTerms
            .debounceTime(300) // wait for 300ms pause in events
            .distinctUntilChanged() // ignore if next search term is same as previous
            .switchMap(function (term) { return term // switch to new observable each time
            ? _this.coasterSearchService.search(term)
            : Observable_1.Observable.of([]); })
            .catch(function (error) {
            // TODO: real error handling
            console.log(error);
            return Observable_1.Observable.of([]);
        });
    };
    CoasterSearchComponent.prototype.gotoDetail = function (coaster) {
        var link = ['/detail', coaster.id];
        this.router.navigate(link);
    };
    CoasterSearchComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'coaster-search',
            templateUrl: 'coaster-search.component.html',
            styleUrls: ['coaster-search.component.css'],
            providers: [coaster_search_service_1.CoasterSearchService]
        }), 
        __metadata('design:paramtypes', [coaster_search_service_1.CoasterSearchService, router_1.Router])
    ], CoasterSearchComponent);
    return CoasterSearchComponent;
}());
exports.CoasterSearchComponent = CoasterSearchComponent;
//# sourceMappingURL=coaster-search.component.js.map