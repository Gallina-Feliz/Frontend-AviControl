import { Component, OnInit } from '@angular/core';
import { GallinaService } from '../../../../core/services/gallinaservice/gallina.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  razas: string[] = ['Raza 1', 'Raza 2', 'Raza 3']; // Lista de razas disponibles
  gallinas: any[] = [];
  selectedGallina: any ;

  constructor(private gallinaService: GallinaService) {}

  ngOnInit(): void {
    this.loadGallinas();
  }

  loadGallinas(): void {
    this.gallinaService.getGallinas().subscribe(
      (data) => {
        this.gallinas = data;
      },
      (error) => {
        
        Swal.fire('Error', 'Error al cargar las gallinas', 'error');
        console.error('Error al cargar datos', error);
      }
    );
  }

  editGallina(gallina: any): void {
    this.selectedGallina = { ...gallina }; // Clonar el objeto para editarlo
  }

  cancelEdit(): void {
    this.selectedGallina = null;
  }

  updateGallina(): void {
    if (this.selectedGallina) {
      this.gallinaService.updateGallina(this.selectedGallina).subscribe(
        () => {
          Swal.fire('Éxito', 'La gallina ha sido actualizada con éxito', 'success');
          this.loadGallinas();
          this.selectedGallina = null;
        },
        (error) => {
          Swal.fire('Error', 'Error al actualizar la gallina', 'error');
          console.error('Error al actualizar la gallina', error);
        }
      );
    }
  }

  deleteGallina(codigoGallina: number): void {
    // Mostrar una alerta de confirmación antes de eliminar
    Swal.fire({
      title: '¿Estás seguro?',
      text: "Esta acción no se puede deshacer",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#F1AB0F',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.gallinaService.deleteGallina(codigoGallina).subscribe(
          () => {
            Swal.fire('Eliminado', 'La gallina ha sido eliminada con éxito', 'success');
            this.loadGallinas();
          },
          (error) => {
            Swal.fire('Error', 'Error al eliminar la gallina', 'error');
            console.error('Error al eliminar la gallina', error);
          }
        );
      }
    });
  }
}
