import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../core/services/auth/auth.service'; // Asegúrate de que esté bien importado

@Component({
  selector: 'app-home-page-t',
  templateUrl: './home-page-t.component.html',
  styleUrls: ['./home-page-t.component.css']
})
export class HomePageTComponent implements OnInit {
  userName: string | null = '';

  constructor(private authService: AuthService) {}


  ngOnInit(): void {
    // Obtener el nombre del usuario desde el localStorage o hacer una solicitud a tu API
    const user = this.authService.getUserData(); // Esto dependerá de cómo estés gestionando el almacenamiento del usuario

    if (user) {
      this.userName = user.nombre;  // Cambia 'Name' a 'Nombre' si es la clave correcta
    }
    
  }
}
