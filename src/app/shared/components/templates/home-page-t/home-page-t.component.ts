import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../core/services/auth/auth.service';
import { EstadisticasGeneralesService } from '../../../../core/services/EstadisticasGenerales/estadisticas-generales.service'; // Importa el servicio
import { EstadisticasGenerales } from '../../../../core/models/estadisticas-generales.model'; // Importa el modelo

@Component({
  selector: 'app-home-page-t',
  templateUrl: './home-page-t.component.html',
  styleUrls: ['./home-page-t.component.css']
})
export class HomePageTComponent implements OnInit {
  userName: string | null = '';
  estadisticas: EstadisticasGenerales | undefined; // Para almacenar las estadísticas
  loading = true;  // Estado de carga
  error: string | null = null;  // Estado de error

  constructor(private authService: AuthService, private estadisticasService: EstadisticasGeneralesService) {}

  ngOnInit(): void {
    // Obtener el nombre del usuario desde el AuthService o el localStorage
    const user = this.authService.getUserData();

    if (user) {
      this.userName = user.nombre; // Cambia 'nombre' si usas una clave diferente
    }

    // Obtener las estadísticas generales
    this.estadisticasService.getEstadisticasGenerales().subscribe({
      next: (data) => {
        this.estadisticas = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Error al cargar las estadísticas';
        this.loading = false;
      }
    });
  }
}
