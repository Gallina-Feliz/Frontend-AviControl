import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      console.log('AuthGuard: Usuario autenticado');
      return true;
    } else {
      console.log('AuthGuard: Usuario no autenticado');
      this.router.navigate(['/login']);
      return false;
    }
  }
}
