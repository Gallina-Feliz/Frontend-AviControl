import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GalponService {
  private apiUrl = 'https://localhost:44347/galpones'; // URL de tu API

  constructor(private http: HttpClient) { }

  // Obtener todos los galpones
  getGalpones(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  // Obtener un galpón por ID
  getGalponById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // Crear un nuevo galpón
  createGalpon(galpon: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, galpon).pipe(
      catchError(this.handleError)
    );
  }

  // Actualizar un galpón
  updateGalpon(id: number, galpon: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, galpon).pipe(
      catchError(this.handleError)
    );
  }

  // Eliminar un galpón
  deleteGalpon(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // Manejo de errores
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Ocurrió un error desconocido.';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error del lado del cliente: ${error.error.message}`;
    } else {
      errorMessage = `Código de error: ${error.status}\nMensaje: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
