import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminAuthService } from '../admin-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  constructor(private router: Router, private adminAuthService: AdminAuthService) {}


  onSubmit(): void {
    if (this.adminAuthService.login(this.email, this.password)) {
      this.router.navigate(['admin/dashboard']);
    } else {
      // Handle login failure (e.g., show error message)
      console.error('Login failed. Incorrect credentials.');
    }
  }
}
