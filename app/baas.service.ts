import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';
//import { MyTypedItem } from '../models/MyTypedItem';
import { Configuration } from './app.constants';

@Injectable()
export class BaasService {

    private serverWithLoginUrl: string;
    private headers: Headers;

    constructor(private http: Http, private _configuration: Configuration) {

        this.serverWithLoginUrl = _configuration.ServerWithLoginUrl;

        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        //this.headers.append('Accept', 'application/json');
    }

    login(username: string, password: string, appcode: string): Observable<string> {
        let toAdd = JSON.stringify({ username, password, appcode });
        console.log(toAdd);
        console.log(this.serverWithLoginUrl);
        return this.http.post(this.serverWithLoginUrl, toAdd, { headers: this.headers })
            .map(this.extractData)
            .catch(this.handleError);
    }
    
    private extractData(res: Response) {
        let body = res.json();
        return body.data.signUpDate || { };
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}