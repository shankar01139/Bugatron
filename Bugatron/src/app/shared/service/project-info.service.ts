import { Injectable } from '@angular/core';
import { ProjectInfo } from '../model/project-info.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
const baseURL = environment.url + "/project";
@Injectable({
  providedIn: 'root'
})
export class ProjectInfoService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<ProjectInfo[]> {
    return this.http.get<ProjectInfo[]>(baseURL);
  }

  get(id: any): Observable<ProjectInfo> {
    return this.http.get(`${baseURL}/${id}`);
  }

  create(data: any): Observable<ProjectInfo> {
    return this.http.post(baseURL, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseURL}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseURL}?id=${id}`);
  }
}




