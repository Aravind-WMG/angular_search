import { Injectable, Input } from '@angular/core';
import { Headers, Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ArtistService{

    private leaveURL = 'https://jsonplaceholder.typicode.com/posts';
    constructor(private http: Http) { }

    getArtistList(){
       return  this.http.get(this.leaveURL)
        .map((res:Response)=>res.json())
        .catch(this.httpError);
    }
    private httpError(error:any){
        let errMsg = error.message || 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);

    }
}