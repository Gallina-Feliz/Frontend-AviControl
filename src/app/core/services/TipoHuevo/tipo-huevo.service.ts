import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoHuevoService {
  private apiUrl = 'http://localhost:20821/api/TipoHuevo';

  constructor(private http: HttpClient) { }

  getTiposHuevo(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/Listar`);
  }

  deleteTipoHuevo(id_TipoHuevo: number): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/Eliminar`, { id_TipoHuevo });
  }
}
