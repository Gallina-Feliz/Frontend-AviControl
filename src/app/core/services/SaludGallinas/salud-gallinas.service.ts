import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaludGallinasService {

  private baseApiUrl = 'http://localhost:20821/SaludGallinas';  // URL base de la API

  constructor(private http: HttpClient) { }

  // Método para registrar salud de gallina
  registrarSaludGallina(saludGallina: any): Observable<any> {
    const url = `${this.baseApiUrl}/Insertar`;
    return this.http.post<any>(url, saludGallina);
  }

  // Método para obtener los datos de una gallina por ID
  obtenerSaludGallina(id_Gallina: number): Observable<any> {
    const url = `${this.baseApiUrl}/salud/${id_Gallina}`;
    return this.http.get<any>(url);
  }

  // Método para actualizar datos de salud de gallina
  actualizarSaludGallina(id_Gallina: number, saludGallina: any): Observable<any> {
    const url = `${this.baseApiUrl}/salud/${id_Gallina}`;
    return this.http.put<any>(url, saludGallina);
  }

  // Método para eliminar un registro de salud de gallina
  eliminarSaludGallina(id_Gallina: number): Observable<any> {
    const url = `${this.baseApiUrl}/salud/${id_Gallina}`;
    return this.http.delete<any>(url);
  }
}
