import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GallinaService {
  private apiUrl = 'https://localhost:44347/gallinas'; // Ajusta la URL según tu configuración

  constructor(private http: HttpClient) {}

  registerGallina(gallina: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, gallina); // Ajusta el endpoint según tu API
  }


  getGallinas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  updateGallina(gallina: any): Observable<any> {
    // Asegúrate de enviar los parámetros correctos para que coincidan con lo que espera el procedimiento almacenado
    const body = {
      codigo_gallina: gallina.codigo_gallina,
      raza: gallina.raza,
      edad: gallina.edad,
      numero_galpon: gallina.numero_galpon,
      huevos_diarios: gallina.huevos_diarios,
      temp: gallina.temp,
      esta_enferma: gallina.esta_enferma,
      que_enfermedad: gallina.que_enfermedad,
      medicamentos: gallina.medicamentos
    };
    return this.http.put(`${this.apiUrl}/update`, body); // Asegúrate de que el endpoint coincide
  }

  deleteGallina(codigoGallina: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${codigoGallina}`);
  }
}
