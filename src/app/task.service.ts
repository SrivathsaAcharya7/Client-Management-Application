import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from './task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private httpclient: HttpClient) {}

  private apiUrl = 'http://localhost:3000/Project_Tasks';

  addNewTask(pt: Task): Observable<Object> {
    return this.httpclient.post(`${this.apiUrl}`, pt);
  }

  showAllTasks(): Observable<Task[]> {
    return this.httpclient.get<Task[]>(`${this.apiUrl}`);
  }

  getTaskBasedOnId(id: any): Observable<Task> {
    return this.httpclient.get<Task>(`${this.apiUrl}/${id}`);
  }

  getTasksByProjectId(projectId: any): Observable<Task[]> {
    return this.httpclient.get<Task[]>(`${this.apiUrl}?ProjectID=${projectId}`);
  }

  updateTask(id: any, pt: Task): Observable<Object> {
    return this.httpclient.put(`${this.apiUrl}/${id}`, pt);
  }

  deleteTask(id: any): Observable<Object> {
    return this.httpclient.delete(`${this.apiUrl}/${id}`);
  }
}
