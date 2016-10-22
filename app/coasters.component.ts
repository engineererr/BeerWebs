import { Component }            from '@angular/core';
import { OnInit }               from '@angular/core';
import { Coaster }              from './coaster'
import { CoasterService }       from './coaster.service';
import { Router }         from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'my-coasters',
  templateUrl: 'coasters.component.html',
  styleUrls: [ 'coasters.component.css' ]
})

export class CoastersComponent implements OnInit{ 
  coasters: Coaster[];
  selectedCoaster: Coaster;

  ngOnInit(): void {
    this.getCoasters();
  }
  
  constructor(private router: Router, private coasterService: CoasterService) {  }
  
  getCoasters(): void {
      this.coasterService.getCoasters().then(coasters => this.coasters = coasters);
    }

  onSelect(coaster: Coaster): void {
  this.selectedCoaster = coaster;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedCoaster.id]);
  }
}
