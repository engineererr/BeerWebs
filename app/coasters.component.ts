import { Component, OnInit }    from '@angular/core';
import { Router }               from '@angular/router';

import { Coaster }              from './coaster'
import { CoasterService }       from './coaster.service';


@Component({
  moduleId: module.id,
  selector: 'my-coasters',
  templateUrl: 'coasters.component.html',
  styleUrls: [ 'coasters.component.css' ]
})

export class CoastersComponent implements OnInit{ 
  coasters: Coaster[];
  selectedCoaster: Coaster;

  constructor(
    private router: Router, 
    private coasterService: CoasterService) {  }

  ngOnInit(): void {
    this.getCoasters();
  }
  
  getCoasters(): void {
      this.coasterService.getCoasters().then(coasters => this.coasters = coasters);
    }

  onSelect(coaster: Coaster): void {
  this.selectedCoaster = coaster;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedCoaster.id]);
  }

  add(name: string): void{
    name = name.trim();
    if (!name) { return; }
    this.coasterService.create(name).then(coaster => {
      this.coasters.push(coaster);
      this.selectedCoaster = null;
    });
  }

  delete(coaster: Coaster): void {
    this.coasterService.delete(coaster.id).then(() => {
      this.coasters = this.coasters.filter(c => c !== coaster);
      if (this.selectedCoaster === coaster) {this.selectedCoaster = null; }
    });
  }
}
