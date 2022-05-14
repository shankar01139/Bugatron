import { Injectable } from '@angular/core';
import { CustomerInfo } from '../model/customer-info.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
const baseURL = environment.url + "/customer";
@Injectable({
  providedIn: 'root'
})
export class CustomerInfoService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<CustomerInfo[]> {
    return this.http.get<CustomerInfo[]>(baseURL);
  }

  getBycomp(name: any): Observable<CustomerInfo> {
    return this.http.get(`${baseURL}/GetByComp/${name}`);
  }

  get(id: any): Observable<CustomerInfo> {
    return this.http.get(`${baseURL}/${id}`);
  }

  create(data: any): Observable<CustomerInfo> {
    return this.http.post(baseURL, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseURL}/${id}`, data);
  }
  login(mail:any,pass:any){
    return this.http.get(`${baseURL}/${mail}/${pass}`);
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${baseURL}?id=${id}`);
  }
}
