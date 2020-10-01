import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  wsGetTodos(): Observable<any> {    
    return this.http.get("http://localhost:5000/todos").pipe(
      //catchError(this.handleError)
    );
  }
}