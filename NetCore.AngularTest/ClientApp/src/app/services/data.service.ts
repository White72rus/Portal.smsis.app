import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from "rxjs/operators";
import { environment } from 'src/environments/environment';
import { TestData } from '../models/testData';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private client: HttpClient) {

    }

    public getData() : Observable<TestData[]> {
        return this.client.get<TestData[]>(environment.baseUrl + "api/baseapi").pipe(
            map((response)=>{
                return response;
            }),
            catchError((error)=>{
                return throwError(error);
            })
        );
    }

    public getDataApi() : Observable<HttpResponse<Object>> {
        return this.client.get(environment.baseUrl + "api/baseapi", {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                // 'Authorization': `Bearer ${this._token}`,
            }),
            observe: "response",
            params: new HttpParams({})
        });
    }

    public getDataApiPost(query: any) : Observable<HttpResponse<Object>> {
        let raw = JSON.stringify(query);
        return this.client.post(environment.baseUrl + "api/baseapi", raw, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                // 'Authorization': `Bearer ${this._token}`,
            }),
            observe: "response",
            params: new HttpParams({})
        });
    }
}
