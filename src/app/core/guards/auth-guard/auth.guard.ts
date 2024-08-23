import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    const userId = this.authService.getUserId();
    if (this.authService.isAuthenticated() && userId) {
      console.log(`AuthGuard: Usuario autenticado con ID: ${userId}`);
      return true;
    } else {
      console.log('AuthGuard: Usuario no autenticado');
      this.router.navigate(['/login']);
      return false;
    }
  }
}