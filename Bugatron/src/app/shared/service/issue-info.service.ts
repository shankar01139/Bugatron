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
  getAll(id:any): Observable<IssueInfo[]> {
    return this.http.get<IssueInfo[]>(`${baseURL}/GetAll/${id}`);
  }
  getUnassigned(id:any): Observable<IssueInfo[]> {
    return this.http.get<IssueInfo[]>(`${baseURL}/GetUnassigned/${id}`);
  }
  getUnassignedIssues(): Observable<IssueInfo[]> {
    return this.http.get<IssueInfo[]>(`${baseURL}/GetUnassignedIssues`);
  }
  getResolved(id:any): Observable<IssueInfo[]> {
    return this.http.get<IssueInfo[]>(`${baseURL}/GetResolved/${id}`);
  }
  getResolvedIssues(): Observable<IssueInfo[]> {
    return this.http.get<IssueInfo[]>(`${baseURL}/GetResolvedIssues`);
  }
  getAssignedforMe(id:any): Observable<IssueInfo[]> {
    return this.http.get<IssueInfo[]>(`${baseURL}/GetAssigned/${id}`);
  }
  getIssueCount(date:any): Observable<IssueInfo[]> {
    return this.http.get<IssueInfo[]>(`${baseURL}/GetIssueCount/${date}`);
  }
  getCustIssueCount(date:any,id:any): Observable<IssueInfo[]> {
    return this.http.get<IssueInfo[]>(`${baseURL}/GetCustIssueCount/${date}/${id}`);
  }
  get(id: any): Observable<IssueInfo> {
    return this.http.get(`${baseURL}/${id}`);
  }
  getAllIssue(): Observable<IssueInfo[]> {
    return this.http.get<IssueInfo[]>(`${baseURL}/GetAll`);
  }
  create(data: any): Observable<IssueInfo> {
    return this.http.post(baseURL, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseURL}/${id}`, data);
  }
  updateAction(id: any, data: any): Observable<any> {
    return this.http.put(`${baseURL}/Action/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseURL}?id=${id}`);
  }
}



