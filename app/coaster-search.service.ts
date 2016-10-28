import { Injectable }       from '@angular/core';
import { Http, Response }   from '@angular/http';
import { Observable }       from 'rxjs';

import { Coaster }          from './coaster';

@Injectable()
export class CoasterSearchService {
    constructor(private http: Http) {}

    search(term: string): Observable<Coaster[]> {
        return this.http.get(`app/coasters/?name=${term}`).map((r: Response) => r.json().data as Coaster[]);
    }
}