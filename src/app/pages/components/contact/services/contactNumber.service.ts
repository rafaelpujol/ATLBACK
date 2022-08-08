import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {environment} from '../../../../../environments/environment';
import {Observable, throwError} from 'rxjs';
import {ApiResponse} from '../../../../models/apiresponse';
import {catchError} from 'rxjs/operators';
import {ContactNumber} from '../models/contactNumber';

@Injectable({
  providedIn: 'root',
})
export class ContactNumberService {

  baseUrl: string;
  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };


  constructor(private router: Router, private httpClient: HttpClient) {
    this.baseUrl =  environment.server + '/contactnumber.php';
  }

  create(item: ContactNumber): Observable<ApiResponse<string>> {
    return this.httpClient.post<ApiResponse<string>>(this.baseUrl, item,  this.httpHeader)
      .pipe(  catchError((errorReponse: HttpErrorResponse) => {
        return throwError(`${errorReponse.error.message}`);
      }));
  }

  update(item: ContactNumber): Observable<ApiResponse<string>> {
    return this.httpClient.put<ApiResponse<string>>(this.baseUrl, item,  this.httpHeader)
      .pipe(  catchError((errorReponse: HttpErrorResponse) => {
        return throwError(`${errorReponse.error.message}`);
      }));
  }
  get(id: number): Observable<ApiResponse<ContactNumber>> {
    return this.httpClient.get<ApiResponse<ContactNumber>>(`${this.baseUrl}?id=${id}`, this.httpHeader)
      .pipe(  catchError((errorReponse: HttpErrorResponse) => {
        return throwError(`${errorReponse.error.message}`);
      }));
  }

  delete(id: number): Observable<ApiResponse<string>> {
    return this.httpClient.delete<ApiResponse<string>>(`${this.baseUrl}?id=${id}`, this.httpHeader)
      .pipe(  catchError((errorReponse: HttpErrorResponse) => {
        return throwError(`${errorReponse.error.message}`);
      }));
  }

  grid(contactid: string): Observable<ApiResponse<ContactNumber[]>> {
    return this.httpClient.get<ApiResponse<ContactNumber[]>>(`${this.baseUrl}?contactid=${contactid}`
      , this.httpHeader).pipe(  catchError((errorReponse: HttpErrorResponse) => {
      return throwError(`${errorReponse.error.message}`);
    }));
  }
}
