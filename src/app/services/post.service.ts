import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class PostService {

    constructor(private http: HttpClient) { }
    postData() {

        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        const url = 'https://7iza7s43oc.execute-api.us-east-1.amazonaws.com/new';
        const data = {
            content: ["racecar",
                "A man, a plan, a canal: Panama.",
                "A test"]
        };

        return this.http.post(url, JSON.stringify(data), { headers: headers });
    }
}