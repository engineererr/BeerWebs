import { Component, Input } from '@angular/core';
import { Coaster } from './coaster'

@Component({
  selector: 'my-coaster-detail',
  template: `
    <div *ngIf="coaster">
        <h2>{{coaster.name}} details!</h2>
        <div><label>id: </label>{{coaster.id}}</div>
        <div>
        <label>name: </label>
        <input [(ngModel)]="coaster.name" placeholder="name"/>
        </div>
        </div>
    `
})
export class CoasterDetailComponent {
    @Input()
    coaster : Coaster;
}
