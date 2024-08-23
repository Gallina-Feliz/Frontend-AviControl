import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:5159'; // URL de la API

  constructor(private http: HttpClient) {}

  login(credentials: { correo : string; clave: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/Acceso/Login`, credentials).pipe(
      tap((response: any) => {
        // Guardar el token en el localStorage
        localStorage.setItem('token', response.token);
      })
    );
  }

  register(user: { nombre: string; correo: string; clave: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/Acceso/Registrarse`, user);
  }

  // Obtener el token desde el localStorage
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token');
  }
}
