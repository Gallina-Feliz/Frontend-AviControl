import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';  // Importa SweetAlert2
import { AuthService } from '../../../../core/services/auth/auth.service';  // Asegúrate de que esté bien importado tu AuthService

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
    private authService: AuthService,  // Servicio de autenticación
    private router: Router  // Router para la navegación
  ) {}

  ngOnInit() {
    const inputs = document.querySelectorAll('.input');

    inputs.forEach(input => {
      input.addEventListener('focus', this.addcl);
      input.addEventListener('blur', this.remcl);
    });
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

  // Lógica de inicio de sesión
  onLogin() {
    if (this.loginModel.Email && this.loginModel.Password) {
      this.authService.login(this.loginModel).subscribe(
        (response) => {
          console.log('Respuesta del servidor:', response);
  
          if (response && response.isSuccess) {
            // Usa el método saveToken para guardar el token
            this.authService.saveToken(response.token);
  
            // Aquí eliminas o comentas la alerta de éxito
            /*
            Swal.fire({
              icon: 'success',
              title: 'Inicio de sesión exitoso',  // Color azul para el botón "OK"
              timer: 1800
            });
            */
  
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
        },
        (error) => {
          console.error('Error en el inicio de sesión:', error);
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: error.message || 'Ocurrió un error durante el inicio de sesión',
            confirmButtonColor: '#F1AB0F',
            confirmButtonText: 'Aceptar'
          });
        }
      );
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Advertencia',
        text: 'Por favor, complete todos los campos correctamente',
        confirmButtonColor: '#F1AB0F',
        confirmButtonText: 'Aceptar'
      });
    }
  }
  
}
