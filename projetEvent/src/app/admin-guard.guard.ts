import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AdminAuthService } from "./admin/admin-auth.service";
@Injectable({
  providedIn: 'root'
})
export class AdminGuardGuard implements CanActivate {
  success: boolean | undefined;
  constructor(private adminService: AdminAuthService, private router:Router){}

  canActivate(): boolean {
    if (this.adminService.isLoggedIn) {
      return true;
    } else {
      this.router.navigate(['/admin/login']);
      return false;
    }
  }
}
