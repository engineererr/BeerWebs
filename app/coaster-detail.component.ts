import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { Coaster } from './coaster'
import { CoasterService } from './coaster.service';

@Component({
    moduleId: module.id,
    selector: 'my-coaster-detail',
    templateUrl: 'coaster-detail.component.html',
    styleUrls: ['coaster-detail.component.css']
})
export class CoasterDetailComponent implements OnInit {
    constructor(
        private coasterService: CoasterService,
        private route: ActivatedRoute,
        private location: Location
        ) {}

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.coasterService.getCoaster(id).then(coaster => this.coaster = coaster);
        });
    }

    coaster : Coaster;

    goBack(): void {
        this.location.back();
    }
}