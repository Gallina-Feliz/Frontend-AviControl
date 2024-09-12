import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RazaService {
  private apiUrl = 'api/raza';

  constructor(private http: HttpClient) { }

  getRazas(): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:20821/api/Raza/Listar`);
  }

  deleteRaza(id_Raza: number): Observable<void> {
    return this.http.post<void>(`http://localhost:20821/api/Raza/Eliminar`, { id_Raza });
  }
}
