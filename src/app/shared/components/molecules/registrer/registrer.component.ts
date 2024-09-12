import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../../../core/services/auth/auth.service';

@Component({
  selector: 'app-registrer',
  templateUrl: './registrer.component.html',
  styleUrl: './registrer.component.css'
})
export class RegistrerComponent implements OnInit {
  loginModel = {
    Username: '',
    Email: '',
    Password: '',
    ConfirmPassword: ''
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
        (error) => {
          // Retrasar el cierre de la alerta en caso de error
          setTimeout(() => {
            Swal.close(); // Cerrar la alerta de cargando
            console.error('Error en el inicio de sesión:', error);
            Swal.fire({
              imageUrl : "../../../../../assets/icons/2.png",
              imageWidth: 130,  // Ajusta el ancho de la imagen
              imageHeight: 150, 
              title: 'Error',
              text:'Ocurrió un error durante la creación del usuario',
              confirmButtonColor: '#F1AB0F',
              confirmButtonText: 'Aceptar'
            });
          }, 1000);  // Esperar 1 segundo antes de cerrar la alerta
        }
      );
    }  else {
      Swal.fire({
        imageUrl : "../../../../../assets/icons/ad.png",
        imageWidth: 130,  // Ajusta el ancho de la imagen
        imageHeight: 150, 
        title: 'Advertencia',
        text: 'Por favor, complete todos los campos correctamente',
        confirmButtonColor: '#F1AB0F',
        confirmButtonText: 'Aceptar'
        
      });
    }
  }
}