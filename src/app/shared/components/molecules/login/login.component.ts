import { Component, AfterViewInit, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../../../../core/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit, AfterViewInit {
  loginModel = { correo: '', clave: '' };
  registerModel = { correo: '', clave: '' };
  successMessage: string = '';
  errorMessage: string = '';
  isMobileView: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.checkScreenSize();
    window.addEventListener('resize', () => this.checkScreenSize());
  }

  ngAfterViewInit() {
    this.initializeOverlayToggle();

    const container = document.getElementById('container');
    const overlayBtn = document.getElementById('overlayBtn');
    if (overlayBtn) {
      overlayBtn.addEventListener('click', () => {
        container?.classList.toggle('right-panel-active');
        overlayBtn.classList.remove('btnScaled');
        window.requestAnimationFrame(() => {
          overlayBtn.classList.add('btnScaled');
        });
      });
    }
  }

  initializeOverlayToggle() {
    const signUpButton = document.getElementById('signUp') as HTMLElement;
    const signInButton = document.getElementById('signIn') as HTMLElement;

    if (signUpButton) {
      signUpButton.addEventListener('click', () => this.showSignUp());
    }

    if (signInButton) {
      signInButton.addEventListener('click', () => this.showSignIn());
    }
  }

  onLogin() {
    if (this.loginModel.correo && this.loginModel.clave) {
      this.authService.login(this.loginModel).subscribe(
        (response) => {
          if (response.success) {
            const userId = this.authService.getUserId();
            if (response.RequirePasswordChange) {
              this.router.navigate(['/change-password', response.userId]);
            } else {
              this.router.navigate(['/Home']);
            }
            this.successMessage = 'Inicio de sesión exitoso';
          } else {
            this.errorMessage = response.message || 'Error en el inicio de sesión';
          }
        },
        (error) => {
          this.errorMessage = error.message || 'Ocurrió un error durante el inicio de sesión';
        }
      );
    } else {
      this.errorMessage = 'Por favor, complete todos los campos correctamente';
    }
  }

  onRegister() {
    if (this.registerModel.correo && this.registerModel.clave) {
      this.authService.register(this.registerModel).subscribe({
        next: (response) => {
          this.successMessage = 'Registro exitoso. Por favor, inicie sesión.';
          this.showSignIn(); // Cambiar al formulario de inicio de sesión
        },
        error: (error) => {
          this.handleError(error, 'Error en el registro');
        }
      });
    } else {
      this.showTemporaryMessage('Por favor, complete todos los campos requeridos correctamente', true);
    }
  }

  private showTemporaryMessage(message: string, isError: boolean, duration: number = 2000) {
    if (isError) {
      this.errorMessage = message;
      this.successMessage = '';
    } else {
      this.successMessage = message;
      this.errorMessage = '';
    }

    setTimeout(() => {
      this.clearMessages();
    }, duration);
  }

  private handleError(error: any, defaultMessage: string) {
    let errorMsg = defaultMessage;
    if (error.error instanceof ErrorEvent) {
      errorMsg = `Error: ${error.error.message}`;
    } else {
      errorMsg = `Código de Error: ${error.status}\nMensaje: ${error.message}`;
    }
    this.showTemporaryMessage(errorMsg, true);
  }

  showSignIn() {
    const container = document.getElementById('container');
    container?.classList.remove('right-panel-active');
  }

  showSignUp() {
    const container = document.getElementById('container');
    container?.classList.add('right-panel-active');
  }

  checkScreenSize() {
    this.isMobileView = window.innerWidth <= 767;

    if (this.isMobileView) {
      this.showSignIn(); // Muestra siempre el formulario de inicio de sesión en móviles
    }

    const overlayContainerMobile = document.querySelector('.overlay-container-mobile') as HTMLElement;
    if (overlayContainerMobile) {
      overlayContainerMobile.style.display = this.isMobileView ? 'block' : 'none';
    }
  }

  toggleMobileForm() {
    const signUpContainer = document.getElementById('signUpContainer') as HTMLElement;
    const signInContainer = document.getElementById('signInContainer') as HTMLElement;

    if (signUpContainer && signInContainer) {
      if (signUpContainer.style.display === 'none' || signUpContainer.style.display === '') {
        signUpContainer.style.display = 'block';
        signInContainer.style.display = 'none';
      } else {
        signUpContainer.style.display = 'none';
        signInContainer.style.display = 'block';
      }
    }
  }

  private clearMessages() {
    this.successMessage = '';
    this.errorMessage = '';
  }
}
