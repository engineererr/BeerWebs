import './rxjs-extensions';

import { NgModule }               from '@angular/core';
import { BrowserModule }          from '@angular/platform-browser';
import { FormsModule }            from '@angular/forms';
import { HttpModule }             from '@angular/http';

import { AppRoutingModule }       from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule }   from 'angular-in-memory-web-api';
import { InMemoryDataService }    from './in-memory-data.service';

import { AppComponent }           from './app.component';
import { DashboardComponent }     from './dashboard.component';
import { CoasterDetailComponent } from './coaster-detail.component';
import { CoastersComponent }      from './coasters.component';
import { CoasterService }         from './coaster.service';
import { CoasterSearchComponent } from './coaster-search.component';
import { BaasService }            from './baas.service';
import { Configuration }          from './app.constants';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [ 
    AppComponent, 
    DashboardComponent,
    CoasterDetailComponent, 
    CoastersComponent,
    CoasterSearchComponent 
  ],
  providers: [CoasterService, BaasService, Configuration],
  bootstrap: [AppComponent ]
})

export class AppModule { }