import { Component, OnInit } from '@angular/core';
import { Router}           from '@angular/router';

import { Coaster } from './coaster';
import { CoasterService } from './coaster.service';
import { BaasService } from './baas.service';

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    coasters: Coaster[] = [];

    constructor(private router: Router, 
    private coasterService: CoasterService,
    private baasService: BaasService) {}

    ngOnInit(): void {
        this.coasterService.getCoasters().then(coasters => this.coasters = coasters.slice(1,5));
    }

    gotoDetail(coaster: Coaster): void {
        let link = ['/detail', coaster.id];
        this.router.navigate(link);
    }

    login(): void {
        this.baasService.login("admin", "kugelschreiber", "1234567890").subscribe(
            result => console.log("result: " + result),
            error => console.log("error: " + error)
            );
    }
 }
