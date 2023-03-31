import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/response-model';


@Injectable({
    providedIn: 'root'
})
export class PostService {

    constructor(private http: HttpClient) { }
    postData(payload: any): Observable<ResponseModel[]> {

        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        const url = 'https://7iza7s43oc.execute-api.us-east-1.amazonaws.com/new';

        return this.http.post<ResponseModel[]>(url, payload, { headers: headers });
    }
}