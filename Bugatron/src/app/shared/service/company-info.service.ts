import { Injectable } from '@angular/core';
import { CompanyInfo } from '../model/company-info.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
const baseURL = environment.url + "/company";

@Injectable({
  providedIn: 'root'
})
export class CompanyInfoService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<CompanyInfo[]> {
    return this.http.get<CompanyInfo[]>(baseURL);
  }

  get(id: any): Observable<CompanyInfo> {
    return this.http.get(`${baseURL}/${id}`);
  }

  create(data: any): Observable<CompanyInfo> {
    return this.http.post(baseURL, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseURL}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseURL}?id=${id}`);
  }
}

 





