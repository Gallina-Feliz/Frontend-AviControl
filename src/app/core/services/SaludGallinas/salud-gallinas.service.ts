import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SaludGallinasService {

  private baseApiUrl = 'http://localhost:20821/SaludGallinas';  // URL base de la API

  constructor(private http: HttpClient) { }

  // Método para listar la salud de las gallinas
  getSaludGallinas(): Observable<any[]> {
    const url = `${this.baseApiUrl}/Listar`;
    return this.http.get<any[]>(url).pipe(
      catchError(this.handleError)
    );
  }

  // Método para manejar errores HTTP
  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage: string;
    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente o red
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Error del lado del servidor
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

  // Método para registrar salud de gallina
  registrarSaludGallina(saludGallina: any): Observable<any> {
    const url = `${this.baseApiUrl}/Insertar`;
    return this.http.post<any>(url, saludGallina).pipe(
      catchError(this.handleError)
    );
  }

  // Método para obtener los datos de salud de una gallina por ID
  obtenerSaludGallina(id_Gallina: number): Observable<any> {
    const url = `${this.baseApiUrl}/salud/${id_Gallina}`;
    return this.http.get<any>(url).pipe(
      catchError(this.handleError)
    );
  }

  // Método para actualizar datos de salud de gallina
  actualizarSaludGallina(id_Gallina: number, saludGallina: any): Observable<any> {
    const url = `${this.baseApiUrl}/salud/${id_Gallina}`;
    return this.http.put<any>(url, saludGallina).pipe(
      catchError(this.handleError)
    );
  }

  // Método para eliminar un registro de salud de gallina
  eliminarSaludGallina(id_Gallina: number): Observable<any> {
    const url = `${this.baseApiUrl}/salud/${id_Gallina}`;
    return this.http.delete<any>(url).pipe(
      catchError(this.handleError)
    );
  }
}
