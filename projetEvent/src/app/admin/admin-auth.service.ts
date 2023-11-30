import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {

  constructor() { }

  isLoggedIn: boolean = false;

  login(email: string, password: string): boolean {
    // Simulated authentication logic (replace with actual logic)
    if (email === 'admin' && password === 'admin123') {
      this.isLoggedIn = true;
      return true;
    }
    return false;
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
