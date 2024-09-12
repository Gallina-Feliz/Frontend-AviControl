import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HuevoService {
  private apiUrl = 'http://localhost:20821/api/Huevo/Insertar'; // Ajusta la URL según tu configuración de API

  constructor(private http: HttpClient) { }

  insertHuevo(huevo: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, huevo);
  }
}
