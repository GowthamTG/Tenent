import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AdminSevice {
  private isAdmin = false;
  private AdminStatusListener = new Subject<boolean>();
  private admin!: string | null;
  result!: boolean;
  constructor() {}

  getEmail() {
    return localStorage.getItem('email');
  }

  getIsAdmin() {
    return localStorage.getItem('role') === 'admin';
  }

  getAdminStatusListener() {
    return this.AdminStatusListener.asObservable();
  }

  autoAdminUser() {
    const AdminInformation = this.getAdminData();
    if (AdminInformation?.Admin !== 'admin') {
      return;
    }
    this.isAdmin = true;
    this.AdminStatusListener.next(true);
  }

  private getAdminData() {
    const Admin = localStorage.getItem('role');
    if (!Admin) {
      return;
    }
    return {
      Admin: Admin,
    };
  }
}
