import { Component, OnInit } from '@angular/core';
import { Router}           from '@angular/router';

import { Coaster } from './coaster';
import { CoasterService } from './coaster.service';

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    coasters: Coaster[] = [];

    constructor(private router: Router, 
    private coasterService: CoasterService) {}

    ngOnInit(): void {
        this.coasterService.getCoasters().then(coasters => this.coasters = coasters.slice(1,5));
    }

    gotoDetail(coaster: Coaster): void {
        let link = ['/detail', coaster.id];
        this.router.navigate(link);
    }
 }
