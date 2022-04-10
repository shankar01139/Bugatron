import { Injectable } from '@angular/core';
import { DeveloperInfo } from '../model/developer-info.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
const baseURL = environment.url + "/developer";
@Injectable({
  providedIn: 'root'
})
export class DeveloperInfoService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<DeveloperInfo[]> {
    return this.http.get<DeveloperInfo[]>(baseURL);
  }

  get(id: any): Observable<DeveloperInfo> {
    return this.http.get(`${baseURL}/${id}`);
  }

  create(data: any): Observable<DeveloperInfo> {
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

