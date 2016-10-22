import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Coaster } from './coaster';

@Injectable()
export class CoasterService {
    private coastersUrl = 'app/coasters';

    constructor (private http: Http) {}

    getCoasters(): Promise<Coaster[]> {
        return this.http.get(this.coastersUrl)
            .toPromise()
            .then(response => response.json().data as Coaster[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    getCoastersSlowly(): Promise<Coaster[]> {
    return new Promise<Coaster[]>(resolve =>
        setTimeout(resolve, 2000)) // delay 2 seconds
        .then(() => this.getCoasters());
    }

    getCoaster(id: number): Promise<Coaster> {
        return this.getCoasters().then(coasters => coasters.find(coaster => coaster.id === id));
    }

}
