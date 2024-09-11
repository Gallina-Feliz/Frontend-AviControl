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
      id_Alimentacion: alimentacion.id_Alimentacion,
      cantidadAlimento: alimentacion.cantidadAlimento,
      tipoAlimento: alimentacion.tipoAlimento,
      fecha: alimentacion.fecha,
      numero_Galpon: alimentacion.numero_Galpon,
      tipo_Galpon: alimentacion.tipo_Galpon
    };

    return this.http.put<any>(`${this.apiUrl}/Alimentacion/Actualizar`, body);
  }

  // Método para listar alimentaciones (mismo que getAlimentaciones, puedes dejar solo uno)
  listarAlimentaciones(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/Listar`);
  }
  
  // Método para eliminar una alimentación por ID
  eliminarAlimentacion(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/EliminarAlimentacion/${id}`);
  }

  // Método para registrar una nueva alimentación
  registrarAlimentacion(alimentacionData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/Insertar`, alimentacionData);
  }

  // Método duplicado eliminado (deleteAlimentacion)
}
