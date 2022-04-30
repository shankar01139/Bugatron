import { Injectable } from '@angular/core';
import { IssueInfo } from '../model/issue-info.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
const baseURL = environment.url + "/issue";
@Injectable({
  providedIn: 'root'
})
export class IssueInfoService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<IssueInfo[]> {
    return this.http.get<IssueInfo[]>(baseURL);
  }
  getUnassigned(): Observable<IssueInfo[]> {
    return this.http.get<IssueInfo[]>(`${baseURL}/GetUnassigned`);
  }
  getResolved(): Observable<IssueInfo[]> {
    return this.http.get<IssueInfo[]>(`${baseURL}/GetResolved`);
  }
  getAssignedforMe(id:any): Observable<IssueInfo[]> {
    return this.http.get<IssueInfo[]>(`${baseURL}/GetAssigned/${id}`);
  }
  get(id: any): Observable<IssueInfo> {
    return this.http.get(`${baseURL}/${id}`);
  }

  create(data: any): Observable<IssueInfo> {
    return this.http.post(baseURL, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseURL}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseURL}?id=${id}`);
  }
}



