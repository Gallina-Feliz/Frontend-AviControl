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
  isMainDropdownVisible = false;
  isNestedDropdownVisible = false;
  isUserDropdownVisible = false; // Nueva propiedad para el dropdown de usuario

  constructor(private authService: AuthService, private router: Router) {}

  toggleMainDropdown() {
    this.isMainDropdownVisible = !this.isMainDropdownVisible;
    // Close the nested dropdown if main dropdown is toggled
    if (!this.isMainDropdownVisible) {
      this.isNestedDropdownVisible = false;
    }
  }

  toggleNestedDropdown() {
    this.isNestedDropdownVisible = !this.isNestedDropdownVisible;
  }

  toggleUserDropdown() {
    this.isUserDropdownVisible = !this.isUserDropdownVisible; // Método para alternar la visibilidad del dropdown de usuario
  }

  signOut() {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Quieres cerrar sesión?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#F1AB0F',
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
