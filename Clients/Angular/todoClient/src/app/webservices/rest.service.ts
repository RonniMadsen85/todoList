import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      alert(error.error.detail)
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was:`, error.error);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }

  wsGetTodos(): Observable<any> {    
    return this.http.get("http://localhost:5000/todos").pipe(
      catchError(this.handleError)
    );
  }
}