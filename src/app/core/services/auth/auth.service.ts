import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';  // Importa SweetAlert2

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5159/api/Acceso';
  private requirePasswordChangeSubject = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router) {}

  login(credentials: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/Login`, credentials).pipe(
      tap(response => {
        if (response && response.isSuccess) {
          // Guarda el token y los datos del usuario en localStorage
          this.saveToken(response.token);
          this.saveUserData(response.user);  // Guarda los datos del usuario

          // Redirige al usuario según la necesidad de cambio de contraseña
          if (response.RequirePasswordChange) {
            this.router.navigate(['/change-password']);
          } else {
            this.router.navigate(['/Home']);
          }
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Credenciales incorrectas'
          });
          throw new Error('No se recibió la información de autenticación esperada');
        }
      }),
      catchError(error => this.handleErrorWithAlert(error))  // Manejo de errores con SweetAlert2
    );
  }

  // Método para guardar el token
  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  // Método para guardar los datos del usuario
  saveUserData(user: any): void {
    localStorage.setItem('userData', JSON.stringify(user));  // Almacena los datos del usuario
  }

  // Método para obtener los datos del usuario
  getUserData(): any {
    const userData = localStorage.getItem('userData');
    return userData ? JSON.parse(userData) : null;
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('userData');  // Limpia los datos del usuario
    this.router.navigate(['/login']);

    Swal.fire({
      icon: 'info',
      title: 'Cierre de sesión exitoso',
      showConfirmButton: false,
      timer: 1500
    });
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }

  getAuthToken(): string | null {
    return localStorage.getItem('token');
  }

  private handleErrorWithAlert(error: HttpErrorResponse) {
    let errorMessage = 'Ocurrió un error desconocido.';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error del lado del cliente: ${error.error.message}`;
    } else {
      errorMessage = `Código de error: ${error.status}\nMensaje: ${error.message}`;
      if (error.error && error.error.message) {
        errorMessage += `\nDetalles: ${error.error.message}`;
      }
    }

    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: errorMessage
    });

    return throwError(() => new Error(errorMessage));
  }
}
