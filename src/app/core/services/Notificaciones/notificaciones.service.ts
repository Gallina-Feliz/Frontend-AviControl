import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificacionesService {
  private apiUrl = 'http://localhost:20821/api/Notificaciones'; // Ajusta la URL de acuerdo a tu configuración

  constructor(private http: HttpClient) {}

  // Obtener todas las notificaciones
  getNotificaciones(): Observable<Notificacion[]> {
    return this.http.get<Notificacion[]>(this.apiUrl);
  }

  // Enviar una nueva notificación
  enviarNotificacion(notificacion: Notificacion): Observable<any> {
    return this.http.post<any>(this.apiUrl, notificacion);
  }
}

export interface Notificacion {
  id: number;
  tipo: string;
  mensaje: string;
  timestamp: Date;
}
