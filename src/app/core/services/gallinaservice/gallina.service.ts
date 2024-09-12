import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GallinaService {
  private apiUrl = `http://localhost:20821/Gallina`; // URL base de tu API

  constructor(private http: HttpClient) { }

  // Método para obtener todas las gallinas
  getGallinas(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/Listar`);
  }

// Método para actualizar una gallina
updateGallina(gallina: any): Observable<any> {
  const body = {
    Codigo_Gallinas: gallina.Codigo_Gallinas,
    Id_Raza: gallina.id_Raza,
    Fecha_Nacimiento: gallina.fecha_Nacimiento,
    Numero_Galpon: gallina.numero_Galpon
  };

  return this.http.put<any>(`http://localhost:20821/Gallina/Modificar`, body);
}

listarGallinas() {
  return this.http.get(`${this.apiUrl}/Listar`);
}

registrarGallina(gallinaData: any): Observable<any> {
  return this.http.post(`${this.apiUrl}/Crear`, {
    Codigo_Gallinas: gallinaData.codigo_Gallinas,
    Id_Raza: gallinaData.id_Raza,
    Fecha_Nacimiento: gallinaData.fecha_Nacimiento,
    Numero_Galpon: gallinaData.numero_Galpon
  });
}



  // Método para eliminar una gallina
  deleteGallina(codigo_Gallinas: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:20821/Eliminar/${codigo_Gallinas}`);
  }

  
}
