import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Coaster } from './coaster';

@Injectable()
export class CoasterService {
    private coastersUrl = 'app/coasters';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor (private http: Http) { }

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

    update(coaster : Coaster): Promise<Coaster> {
        const url = `${this.coastersUrl}/${coaster.id}`;
        return this.http.put(url, JSON.stringify(coaster), {headers: this.headers}).toPromise().then(() => coaster).catch(this.handleError);
    }

    create(name: string): Promise<Coaster> {
        return this.http.post(this.coastersUrl, JSON.stringify({name: name}), {headers: this.headers}).toPromise().then(res => res.json().data).catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.coastersUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers}).toPromise().then(() => null).catch(this.handleError);
    }

}
