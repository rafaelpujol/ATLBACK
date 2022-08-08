import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import {Observable, throwError} from 'rxjs';
import {Contact} from '../models/contact';
import {ApiResponse} from 'src/app/models/apiresponse';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ContactService {

  private contactDb = 'contact';
  Contact = {} as Contact;
  baseUrl: string;
  usingApi: boolean;
  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };


  constructor(private router: Router, private httpClient: HttpClient) {
    this.baseUrl =  environment.server + '/contact.php';
    const api = localStorage.getItem('usingApi');
    if (api == null || api === undefined || api === '0') {
      localStorage.setItem('usingApi', '0');
      this.usingApi = false;
    }else {
      localStorage.setItem('usingApi', '1');
      this.usingApi = true;
    }
  }

  create(item: Contact): Observable<ApiResponse<string>> {
    if (!this.usingApi) {
        const temp = localStorage.getItem(this.contactDb);
        if ( temp != null){
          const json  = JSON.parse(temp)  ;
          json.push(item);
          localStorage.setItem(this.contactDb, JSON.stringify(json));
        }else {

          const json  = [] as Contact[];
          json.push(item);
          localStorage.setItem(this.contactDb, JSON.stringify(json));
        }
        return new Observable<ApiResponse<string>>();
    }else
      {
        return this.httpClient.post<ApiResponse<string>>(this.baseUrl, item, this.httpHeader)
          .pipe(catchError((errorReponse: HttpErrorResponse) => {
            return throwError(`${errorReponse.error.message}`);
          }));
      }
  }

  update(item: Contact): Observable<ApiResponse<string>> {
    return this.httpClient.put<ApiResponse<string>>(this.baseUrl, item,  this.httpHeader)
      .pipe(  catchError((errorReponse: HttpErrorResponse) => {
        return throwError(`${errorReponse.error.message}`);
      }));
  }
  get(id: string): Observable<ApiResponse<Contact>> {
    return this.httpClient.get<ApiResponse<Contact>>(`${this.baseUrl}?id=${id}`, this.httpHeader)
      .pipe(  catchError((errorReponse: HttpErrorResponse) => {
        return throwError(`${errorReponse.error.message}`);
      }));
  }

  delete(id: string): Observable<ApiResponse<string>> {
    return this.httpClient.delete<ApiResponse<string>>(`${this.baseUrl}?id=${id}`, this.httpHeader)
      .pipe(  catchError((errorReponse: HttpErrorResponse) => {
        return throwError(`${errorReponse.error.message}`);
      }));
  }

  grid(): Observable<ApiResponse<Contact[]>> {
     return this.httpClient.get<ApiResponse<Contact[]>>(this.baseUrl).pipe(catchError((errorReponse: HttpErrorResponse) => {
        return throwError(`${errorReponse.error.message}`);
      }));
  }
}
