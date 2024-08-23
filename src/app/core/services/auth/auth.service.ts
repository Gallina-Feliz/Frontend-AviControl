import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

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
          // Guarda el IdUsuario y el token en localStorage
          localStorage.setItem('userId', response.IdUsuario);
          localStorage.setItem('token', response.token);
          this.router.navigate(['/Home']);
        } else {
          throw new Error('No se recibió la información de autenticación esperada');
        }
      }),
      catchError(this.handleError)
    );
  }

  register(user: any): Observable<any> {
    console.log('Datos enviados al servidor:', user);
    return this.http.post<any>(`${this.apiUrl}/Registrarse`, user).pipe(
      catchError(error => {
        console.error('Error en el registro:', error);
        console.error('Error response:', error.error);
        return throwError(() => new Error(error.error?.message || 'Ocurrió un error desconocido'));
      })
    );
  }

  logout(): void {
    localStorage.removeItem('userId');
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }

  getUserId(): string {
    return localStorage.getItem('userId') || '';
  }

  getAuthToken(): string | null {
    return localStorage.getItem('token');
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // El backend devolvió un código de respuesta sin éxito
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      if (error.error) {
        errorMessage += `\nDetails: ${JSON.stringify(error.error)}`;
      }
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
