import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {User} from '../models/user';
import {AuthHttp} from "angular2-jwt";

@Injectable()
export class UserService {

    baseUrl: string;

    constructor(private http: AuthHttp) {
        this.baseUrl = 'http://localhost:3000/api/v1/users';
    }

    addUser(user: Object): Observable<User[]> {
      return this.http.post(this.baseUrl, user)
          .map((response: Response) => response.json())
          .catch((error: any) => Observable.throw(error.json().error || { message: 'Server Error' }));
    }

    getUsers(): Observable<User[]> {
        return this.http.get(this.baseUrl)
            .map((response: Response) => response.json())
            .catch((error: any) => Observable.throw(error.json().error || { message: "Server Error" }));
    }

    deleteUser(id: string): Observable<User[]> {
        return this.http.delete(`${this.baseUrl}/${id}`)
            .map((response: Response) => response.json())
            .catch((error: any) => Observable.throw(error.json().error || {message: "Server Error"} ));
    }

}
