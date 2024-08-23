import { Component, AfterViewInit , ViewEncapsulation } from '@angular/core';
import { AuthService } from '../../../../core/services/auth/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements AfterViewInit {
  correo: string = '';
  clave: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  // Lógica de la animación
  ngAfterViewInit() {
    const container = document.getElementById('container');
    const overlayBtn = document.getElementById('overlayBtn');

    overlayBtn?.addEventListener('click', () => {
      container?.classList.toggle('right-panel-active');
      overlayBtn.classList.remove('btnScaled');
      window.requestAnimationFrame(() => {
        overlayBtn.classList.add('btnScaled');
      });
    });
  }

  // Lógica del login
  login() {
    this.authService.login({ correo: this.correo, clave: this.clave }).subscribe(
      () => 
        this.router.navigate(['/Home']),
      (error) => console.error('Login failed', error)
    );
  }
}