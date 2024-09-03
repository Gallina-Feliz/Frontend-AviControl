import { Component, OnInit} from '@angular/core';
import { GalponService } from '../../../../core/services/Galponservice/galpon.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-table-galpones',
  templateUrl: './table-galpones.component.html',
  styleUrl: './table-galpones.component.css'
})
export class TableGalponesComponent  implements OnInit {
  galpones: any[] = [];
  selectedGalpon: any;

  constructor(private galponService: GalponService) {}

  ngOnInit(): void {
    this.getGalpones();
    
  }

  getGalpones(): void {
    this.galponService.getGalpones().subscribe(
      (data) => {
        this.galpones = data;
      },
      (error) => {
        Swal.fire('Error', 'Error al cargar los galpones', 'error');
        console.error('Error al cargar datos', error);
      }
    );
  }

  editGalpon(galpon: any): void {
    this.selectedGalpon = { ...galpon }; // Clonar el objeto para editarlo
  }

  cancelEdit(): void {
    this.selectedGalpon = null;
  }

  updateGalpon(): void {
    if (this.selectedGalpon) {
      this.galponService.updateGalpon(this.selectedGalpon.id, this.selectedGalpon).subscribe(
        () => {
          Swal.fire('Éxito', 'El galpón ha sido actualizado con éxito', 'success');
          this.getGalpones();
          this.selectedGalpon = null;
        },
        (error) => {
          Swal.fire('Error', 'Error al actualizar el galpón', 'error');
          console.error('Error al actualizar el galpón', error);
        }
      );
    }
  }

  deleteGalpon(id: number): void {
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
        this.galponService.deleteGalpon(id).subscribe(
          () => {
            Swal.fire('Eliminado', 'El galpón ha sido eliminado con éxito', 'success');
            this.getGalpones();
          },
          (error) => {
            Swal.fire('Error', 'Error al eliminar el galpón', 'error');
            console.error('Error al eliminar el galpón', error);
          }
        );
      }
    });
  }
}
