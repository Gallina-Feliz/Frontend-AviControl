import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  isDropdownVisible = false;
  isUserDropdownVisible = false;

  constructor(private authService: AuthService, private router: Router) {}

  toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }

  toggleUserDropdown() {
    this.isUserDropdownVisible = !this.isUserDropdownVisible;
  }

  signOut() {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Quieres cerrar sesión?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, cerrar sesión',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.authService.logout();  // Llama al método de cierre de sesión del AuthService
        Swal.fire({
          icon: 'success',
          title: 'Cierre de sesión exitoso',
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          this.router.navigate(['/login']);  // Redirige al usuario a la página de login
        });
      }
    });
  }
}
