import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GalponService {
  private apiUrl = 'http://localhost:20821/Galpones'; // Cambia la URL a la correcta

  constructor(private http: HttpClient) { }

  // Obtener lista de galpones
  getGalpones(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/Listar`)
      .pipe(catchError(this.handleError));
  }

  // Registrar un nuevo galpón
  createGalpon(galpon: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/Crear`, galpon)
      .pipe(catchError(this.handleError));
  }

  // Actualizar un galpón existente
  updateGalpon(galpon: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/Actualizar`, galpon)
      .pipe(catchError(this.handleError));
  }
  


  // Método para eliminar un galpón
  deleteGalpon(data: { numero_Galpon: number, nuevo_Numero_Galpon: number }): Observable<any> {
    const url = `http://localhost:20821/Galpones/Eliminar`;
    return this.http.delete<any>(url, {
      body: data // Pasamos los datos en el cuerpo de la solicitud
    }).pipe(catchError(this.handleError));
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
