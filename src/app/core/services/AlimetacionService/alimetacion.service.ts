import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlimentacionService {
  private apiUrl = 'http://localhost:20821/Alimentacion'; // URL base de tu API para alimentación

  constructor(private http: HttpClient) { }

  // Método para obtener todas las alimentaciones
  getAlimentaciones(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/Listar`);
  }

  // Método para actualizar una alimentación
  updateAlimentacion(alimentacion: any): Observable<any> {
    const body = {
      Codigo_Alimentacion: alimentacion.Codigo_Alimentacion,
      Codigo_Gallina: alimentacion.Codigo_Gallina,
      Fecha_Alimentacion: alimentacion.Fecha_Alimentacion,
      Cantidad: alimentacion.Cantidad,
      Tipo_Alimento: alimentacion.Tipo_Alimento
    };

    return this.http.put<any>(`${this.apiUrl}/Modificar`, body);
  }

  // Método para listar alimentaciones
  listarAlimentaciones() {
    return this.http.get(`${this.apiUrl}/Listar`);
  }

  // Método para registrar una nueva alimentación
  registrarAlimentacion(alimentacionData: any) {
    return this.http.post(`${this.apiUrl}/Insertar`, alimentacionData);
  }

  // Método para eliminar una alimentación
  deleteAlimentacion(codigo_Alimentacion: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/Eliminar/${codigo_Alimentacion}`);
  }
}