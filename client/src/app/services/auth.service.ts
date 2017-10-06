import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {Http, Response} from '@angular/http';
import {tokenNotExpired} from 'angular2-jwt';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {

  token: string;
  userType: string;
  baseUrl: string;

  constructor(private http: Http, private router: Router) {
    this.baseUrl = 'http://localhost:3000/api/v1';
  }

  login (user: Object): Observable<any> {
    return this.http.post(`${this.baseUrl}/authenticate`, user)
        .map((response: Response) => {
      const token = response.json().token;
      const userType = response.json().userType;

      console.log('Token : ' + token);
      console.log('User Type : ' + userType);

      if (token) {
        this.token = token;
        this.userType = userType;
        localStorage.setItem('token', this.token);
        localStorage.setItem('userType', this.userType);
        return true;
      } else {
        return false;
      }
    })
    .catch((error: any) => Observable.throw(error.json().error || { message: 'Server Error' }));
  }

  loggedIn() {
    return tokenNotExpired();
  }

  logout(): void {
    this.token = null;
    localStorage.removeItem('token');
    localStorage.removeItem('userType');
    console.log('you are logged out!');
    this.router.navigate(['/']);
  }

}
