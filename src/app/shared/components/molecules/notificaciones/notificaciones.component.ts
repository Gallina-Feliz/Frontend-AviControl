import { Component, OnInit } from '@angular/core';
import { NotificacionesService, Notificacion } from '../../../../core/services/Notificaciones/notificaciones.service';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.css']
})
export class NotificacionesComponent implements OnInit {
  notificaciones: Notificacion[] = [];
  mostrarNotificaciones: boolean = false;
  hayNuevasNotificaciones: boolean = false;

  constructor(private notificacionesService: NotificacionesService) { }

  ngOnInit(): void {
    this.obtenerNotificaciones();
  }

  obtenerNotificaciones(): void {
    this.notificacionesService.getNotificaciones().subscribe((data: Notificacion[]) => {
      this.notificaciones = data;
      this.hayNuevasNotificaciones = this.notificaciones.length > 0; // Detectar si hay nuevas notificaciones
    });
  }

  // Método que se ejecuta cuando se hace clic en la campanita
  toggleNotificaciones(): void {
    this.mostrarNotificaciones = !this.mostrarNotificaciones;
  }
}
