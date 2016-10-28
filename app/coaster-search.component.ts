import { Component, OnInit }    from '@angular/core';
import { Router }               from '@angular/router';
import { Observable }           from 'rxjs/Observable';
import { Subject }              from 'rxjs/Subject';

import { CoasterSearchService } from './coaster-search.service';
import { Coaster }              from './coaster';

@Component({
    moduleId: module.id,
    selector: 'coaster-search',
    templateUrl: 'coaster-search.component.html',
    styleUrls: [ 'coaster-search.component.css' ],
    providers: [CoasterSearchService]
})

export class CoasterSearchComponent implements OnInit {
    coasters: Observable<Coaster[]>;
    private searchTerms = new Subject<string>();

    constructor(
        private coasterSearchService: CoasterSearchService,
        private router: Router) {}
    
    search(term: string): void {
        this.searchTerms.next(term);
    }

    ngOnInit(): void {
        this.coasters = this.searchTerms
            .debounceTime(300)        // wait for 300ms pause in events
            .distinctUntilChanged()   // ignore if next search term is same as previous
            .switchMap(term => term   // switch to new observable each time
                // return the http search observable
                ? this.coasterSearchService.search(term)
                // or the observable of empty heroes if no search term
                : Observable.of<Coaster[]>([]))
            .catch(error => {
            // TODO: real error handling
            console.log(error);
            return Observable.of<Coaster[]>([]);
      });
    }

    gotoDetail(coaster: Coaster): void {
        let link = ['/detail', coaster.id];
        this.router.navigate(link);
    }
}