import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from './client';
import { Project } from './project';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Projectservice {
  constructor(private httpclient: HttpClient) {}

  private apiUrl = 'http://localhost:3000/Projects';

  addNewProject(pro: Project): Observable<Object> {
    return this.httpclient.post(`${this.apiUrl}`, pro);
  }

  showAllProjects(): Observable<Project[]> {
    return this.httpclient.get<Project[]>(`${this.apiUrl}`);
  }

  getProjectsByClientId(clientId: any): Observable<Project[]> {
    return this.httpclient.get<Project[]>(
      `${this.apiUrl}?ClientID=${clientId}`
    );
  }

  getProjectBasedOnId(id: any): Observable<Project> {
    return this.httpclient.get<Project>(`${this.apiUrl}/${id}`);
  }

  updateProject(id: any, pro: Project): Observable<Object> {
    return this.httpclient.put(`${this.apiUrl}/${id}`, pro);
  }

  deleteProject(id: any): Observable<Object> {
    return this.httpclient.delete(`${this.apiUrl}/${id}`);
  }
}
