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
  isUserDropdownVisible = false;
  isHistorialGallinasVisible = false;
  isVacunacionVisible = false;
  isBitacoraVisible = false;
  isMonitoreoGalponesVisible = false;
  isCuidadoGalponesVisible = false;
  isEstadoGalponesVisible = false;// Nueva propiedad para el dropdown de usuario

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

  toggleHistorialGallinas() {
    this.isHistorialGallinasVisible = !this.isHistorialGallinasVisible;
    if (this.isHistorialGallinasVisible) {
      this.isVacunacionVisible = false;
      this.isBitacoraVisible = false;
    }
  }

  toggleVacunacion() {
    this.isVacunacionVisible = !this.isVacunacionVisible;
    if (this.isVacunacionVisible) {
      this.isHistorialGallinasVisible = false;
      this.isBitacoraVisible = false;
    }
  }

  toggleBitacora() {
    this.isBitacoraVisible = !this.isBitacoraVisible;
    if (this.isBitacoraVisible) {
      this.isHistorialGallinasVisible = false;
      this.isVacunacionVisible = false;
    }
  }

  closeDropdowns(event: MouseEvent) {
    const clickedInsideSidebar = (event.target as HTMLElement).closest('aside');
    if (!clickedInsideSidebar) {
      this.isHistorialGallinasVisible = false;
      this.isVacunacionVisible = false;
      this.isBitacoraVisible = false;
    }
  }
  

  ngOnInit() {
    document.addEventListener('click', this.closeDropdowns.bind(this));
  }

  ngOnDestroy() {
    document.removeEventListener('click', this.closeDropdowns.bind(this));
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
