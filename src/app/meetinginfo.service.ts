import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Meeting } from './meeting';

@Injectable({
  providedIn: 'root',
})
export class MeetinginfoService {
  constructor(private httpclient: HttpClient) {}

  private apiUrl = 'http://localhost:3000/Client_Meetings';

  addNewMeeting(mt: Meeting): Observable<Object> {
    return this.httpclient.post(`${this.apiUrl}`, mt);
  }

  showAllMeetings(): Observable<Meeting[]> {
    return this.httpclient.get<Meeting[]>(`${this.apiUrl}`);
  }

  getMeetingBasedOnId(id: any): Observable<Meeting> {
    return this.httpclient.get<Meeting>(`${this.apiUrl}/${id}`);
  }

  updateMeeting(id: any, mt: Meeting): Observable<Object> {
    return this.httpclient.put(`${this.apiUrl}/${id}`, mt);
  }

  deleteMeeting(id: any): Observable<Object> {
    return this.httpclient.delete(`${this.apiUrl}/${id}`);
  }
}
