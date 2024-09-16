import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificacionService {
  private apiUrl = 'http://localhost:20821/api/notificaciones'; // Ajusta la URL según tu configuración de API

  constructor(private http: HttpClient) { }

  postNotificacion(notificacion: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, notificacion);
  }
}
