import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private setServiceMessage = new BehaviorSubject<any>({});
  public getServiceMessage = this.setServiceMessage.asObservable();

  constructor(private http: HttpClient) { }
  setServiceMessageFn(message?:any) {
    this.setServiceMessage.next(message);
  }
  get(params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${environment.api_Url}`, { params });
  }
}
