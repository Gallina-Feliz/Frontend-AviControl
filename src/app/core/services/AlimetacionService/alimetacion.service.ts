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
    // Aquí el id se pasa como parte de la URL
    const url = `http://localhost:20821/Alimentacion/Alimentacion/Modificar/${alimentacion.id_Alimentacion}`;
  
    const body = {
      cantidadAlimento: alimentacion.cantidadAlimento,
      tipoAlimento: alimentacion.tipoAlimento,
      numero_Galpon: alimentacion.numero_Galpon
      // No necesitas incluir la fecha, ya que se maneja automáticamente en el backend
    };
  
    return this.http.put(url, body); // Realiza la solicitud PUT
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
