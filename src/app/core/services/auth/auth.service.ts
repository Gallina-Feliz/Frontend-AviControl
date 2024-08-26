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
          // Guarda el token en localStorage usando el nuevo método saveToken
          this.saveToken(response.token);

          // Muestra la alerta de éxito
          Swal.fire({
            icon: 'success',
            title: 'Inicio de sesión exitoso',
            showConfirmButton: false,
            timer: 1500
          });

          // Redirige al usuario según la necesidad de cambio de contraseña
          if (response.RequirePasswordChange) {
            this.router.navigate(['/change-password']);
          } else {
            this.router.navigate(['/Home']);
          }
        } else {
          // Muestra alerta si las credenciales son incorrectas
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

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);

    // Alerta de cierre de sesión
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

    // Muestra la alerta de error con SweetAlert2
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: errorMessage
    });

    return throwError(() => new Error(errorMessage));
  }
}
