import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClienttestService {
  constructor() {}

  isLoggedIn() {
    return sessionStorage.getItem('user') != null; // it returns true when user is exist
  }
  isAdminLoggedIn() {
    return sessionStorage.getItem('adminuser') != null; // it returns true when user is exist
  }
}
