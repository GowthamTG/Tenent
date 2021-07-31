import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalDataService {
  constructor() {}
  getGlobalStore() {
    return {
      token: localStorage.getItem('token'),
      userName: localStorage.getItem('username'),
      email: localStorage.getItem('email'),
      role: localStorage.getItem('role'),
    };
  }

  setGlobalStore(token: string, role: string, userName: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('role', role);
    localStorage.setItem('name', userName);
  }
}
