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
  isCuidadoGalponesVisible = false; // Nueva propiedad para el submenú "Cuidado Galpones"
  isEstadoGalponesVisible = false;

  constructor(private authService: AuthService, private router: Router) {}

  toggleMainDropdown() {
    this.isMainDropdownVisible = !this.isMainDropdownVisible;
    if (!this.isMainDropdownVisible) {
      this.isNestedDropdownVisible = false;
    }
  }

  toggleNestedDropdown() {
    this.isNestedDropdownVisible = !this.isNestedDropdownVisible;
  }

  toggleUserDropdown() {
    this.isUserDropdownVisible = !this.isUserDropdownVisible;
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

  toggleMonitoreoGalpones() {
    this.isMonitoreoGalponesVisible = !this.isMonitoreoGalponesVisible;
    if (this.isMonitoreoGalponesVisible) {
      this.isCuidadoGalponesVisible = false;
      this.isEstadoGalponesVisible = false;
    }
  }

  toggleCuidadoGalpones() {
    this.isCuidadoGalponesVisible = !this.isCuidadoGalponesVisible;
    if (this.isCuidadoGalponesVisible) {
      this.isMonitoreoGalponesVisible = false;
      this.isEstadoGalponesVisible = false;
    }
  }

  toggleEstadoGalpones() {
    this.isEstadoGalponesVisible = !this.isEstadoGalponesVisible;
    if (this.isEstadoGalponesVisible) {
      this.isMonitoreoGalponesVisible = false;
      this.isCuidadoGalponesVisible = false;
    }
  }

  closeDropdowns(event: MouseEvent) {
    const clickedInsideSidebar = (event.target as HTMLElement).closest('aside');
    if (!clickedInsideSidebar) {
      this.isHistorialGallinasVisible = false;
      this.isVacunacionVisible = false;
      this.isBitacoraVisible = false;
      this.isMonitoreoGalponesVisible = false;
      this.isCuidadoGalponesVisible = false;
      this.isEstadoGalponesVisible = false;
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
      imageUrl : "../../../../../assets/icons/ad.png",
      imageWidth: 130,  // Ajusta el ancho de la imagen
      imageHeight: 150,
      showCancelButton: true,
      confirmButtonColor: '#F1AB0F',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, cerrar sesión',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.authService.logout();
        Swal.fire({
          icon: 'success',
          title: 'Cierre de sesión exitoso',
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          this.router.navigate(['/login']);
        });
      }
    });
  }
}
