// src/app/estadisticas-generales.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EstadisticasGenerales } from '../../models/estadisticas-generales.model';

@Injectable({
  providedIn: 'root'
})
export class EstadisticasGeneralesService {
  private apiUrl = 'http://localhost:20821/api/EstadisticasGenerales'; // Ajusta la URL según tu configuración de API

  constructor(private http: HttpClient) { }

  getEstadisticasGenerales(): Observable<EstadisticasGenerales> {
    return this.http.get<EstadisticasGenerales>(this.apiUrl);
  }
}
