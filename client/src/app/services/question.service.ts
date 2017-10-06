import { Injectable } from '@angular/core';
import {Question} from '../models/question';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';
import {AuthHttp} from "angular2-jwt";

@Injectable()
export class QuestionService {

  baseUrl: string;

  constructor(private http: Http, private authHttp: AuthHttp) {
    this.baseUrl = 'http://localhost:3000/api/v1/questions';
  }

  getQuestions(): Observable<Question[]> {
    return this.http.get(this.baseUrl)
        .map((response: Response) => response.json());
  }

  addQuestion(question: Object): Observable<Question[]> {
      return this.http.post(this.baseUrl, question)
          .map((response: Response) => response.json())
          .catch((error: any) => Observable.throw(error.json().error || {message: "Server Error"} ));
  }

  deleteQuestion(id: string): Observable<Question[]> {
      return this.authHttp.delete(`${this.baseUrl}/${id}`)
          .map((response: Response) => response.json())
          .catch((error: any) => Observable.throw(error.json().error || {message: "Server Error"} ));
  }

  raiseQuestion(id: string): Observable<Question[]> {
      return this.http.get(`${this.baseUrl}/raise/${id}`)
          .map((response: Response) => response.json());
  }

  answerQuestion(id: string): Observable<Question[]> {
      return this.authHttp.get(`${this.baseUrl}/answered/${id}`)
          .map((response: Response) => response.json());
  }

}
