import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:1777'; // URL base de tu backend

  constructor(private http: HttpClient) { }

  crearGallina(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/Gallina/Crear`, data);
  }

  listarGallina(): Observable<any> {
    return this.http.get(`${this.baseUrl}/Gallina/Listar`);
  }

  eliminarGallina(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/Eliminar/${id}`);
  }

  modificarGallina(Gallina: Gallina): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/Gallina/Modificar`, Gallina)
      .pipe(
        catchError(this.handleError)
      );
    }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente o de red.
      console.error('Ocurrió un error:', error.error.message);
    } else {
      // El backend retornó un código de respuesta sin éxito.
      console.error(
        `Backend retornó código ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Retorna un observable con un mensaje de error orientado al usuario
    return throwError('Algo malo sucedió; por favor, inténtalo de nuevo más tarde.');
  }
  // listarMonitoreo(): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/api/Monitoreo/Leer`);
  // }
}

 export interface Gallina
  {
  codigo_gallina: number;
  raza : string;
  edad : number;
  numero_galpon: number;
  huevos_diarios: number;
  temp: number;
  esta_enferma: string;
  que_enfermedad: string ;
  medicamentos: string;
  
}