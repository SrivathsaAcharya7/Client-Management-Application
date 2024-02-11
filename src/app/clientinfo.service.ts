import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from './client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientinfoService {
  constructor(private httpclient: HttpClient) {}

  private apiUrl = 'http://localhost:3000/Clients';

  addNewClient(cli: Client): Observable<Object> {
    return this.httpclient.post(`${this.apiUrl}`, cli);
  }

  showAllClients(): Observable<Client[]> {
    return this.httpclient.get<Client[]>(`${this.apiUrl}`);
  }

  getClientBasedOnId(id: any): Observable<Client> {
    return this.httpclient.get<Client>(`${this.apiUrl}/${id}`);
  }

  updateClient(id: any, cli: Client): Observable<Object> {
    return this.httpclient.put(`${this.apiUrl}/${id}`, cli);
  }

  deleteCLient(id: any): Observable<Object> {
    return this.httpclient.delete(`${this.apiUrl}/${id}`);
  }
}
