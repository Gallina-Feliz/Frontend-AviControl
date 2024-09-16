import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../../../core/services/auth/auth.service';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {
  loginModel = {
    Email: '',
    Password: ''
  };

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    const inputs = document.querySelectorAll('.input');

    inputs.forEach(input => {
      input.addEventListener('focus', this.addcl);
      input.addEventListener('blur', this.remcl);
    });
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }

  addcl(this: HTMLInputElement) {
    const parent = this.parentNode?.parentNode as HTMLElement;
    parent.classList.add('focus');
  }

  remcl(this: HTMLInputElement) {
    const parent = this.parentNode?.parentNode as HTMLElement;
    if (this.value === '') {
      parent.classList.remove('focus');
    }
  }

  onLogin() {
    if (this.loginModel.Email && this.loginModel.Password) {
      // Mostrar la alerta de cargando
      Swal.fire({
        title: 'Cargando',
        text: 'Por favor, espere...',
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        }
      });

      this.authService.login(this.loginModel).subscribe(
        (response) => {
          // Retrasar el cierre de la alerta para que se vea más tiempo
          setTimeout(() => {
            Swal.close(); // Cerrar la alerta de cargando

            if (response && response.isSuccess) {
              this.authService.saveToken(response.token);

              if (response.RequirePasswordChange) {
                this.router.navigate(['/change-password']);
              } else {
                this.router.navigate(['/Home']);
              }
            } else {
              Swal.fire({
                icon: 'error',
                title: 'Error',
                text: response.message || 'Error en el inicio de sesión',
                confirmButtonColor: '#F1AB0F',
                confirmButtonText: 'Aceptar',
              });
            }
          }, 1000);  // Esperar 1 segundo antes de cerrar la alerta
        },
         // Esperar 1 segundo antes de cerrar la alerta
      );
    }  else {
      Swal.fire({
        icon:'info',
        title: 'Advertencia',
        text: 'Por favor, complete todos los campos correctamente',
        confirmButtonColor: '#14532D',
        confirmButtonText: 'Aceptar'
        
      });
    }
  }
}