import { Component, AfterViewInit, ViewEncapsulation } from '@angular/core';
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
  userId: string = '';


  ngOnInit(): void {
    this.userId = this.authService.getUserId();
  }

  constructor(private authService: AuthService, private router: Router) {}

  ngAfterViewInit() {
    const container = document.getElementById('container');
    const overlayBtn = document.getElementById('overlayBtn');
    const signInBtn = document.getElementById('signInBtn');
    const signUpBtn = document.getElementById('signUpBtn');

    overlayBtn?.addEventListener('click', () => {
      container?.classList.toggle('right-panel-active');
    });

    signInBtn?.addEventListener('click', () => {
      container?.classList.remove('right-panel-active');
    });

    signUpBtn?.addEventListener('click', () => {
      container?.classList.add('right-panel-active');
    });
  }

  login() {
    this.authService.login({ correo: this.correo, clave: this.clave }).subscribe(
      () => {
        this.router.navigate(['/Home']);
      },
      (error) => console.error('Login failed', error)
    );
  }
}
