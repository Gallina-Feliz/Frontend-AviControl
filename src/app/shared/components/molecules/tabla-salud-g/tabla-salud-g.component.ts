import { Component, OnInit } from '@angular/core';
import { SaludGallinasService } from '../../../../core/services/SaludGallinas/salud-gallinas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-salud-gallinas',
  templateUrl: './tabla-salud-g.component.html',
  styleUrls: ['./tabla-salud-g.component.css']
})
export class TablaSaludGComponent implements OnInit {
  saludGallinas: any[] = [];  // Array para almacenar los datos de salud
  selectedSalud: any = null;  // Objeto para manejar la edición de un registro seleccionado

  constructor(private saludGallinasService: SaludGallinasService) {}

  ngOnInit(): void {
    this.loadSaludGallinas();  // Cargar los datos al inicializar el componente
  }

  // Método para cargar los datos de salud de las gallinas
  loadSaludGallinas(): void {
    this.saludGallinasService.getSaludGallinas().subscribe(
      (data) => {
        this.saludGallinas = data;  // Asignar los datos a la variable saludGallinas
      },
      (error) => {
        Swal.fire({
          icon: 'warning',
          title: 'Error',
          text: 'Error al cargar los datos de salud',
          confirmButtonColor: '#14532D',
          confirmButtonText: 'Aceptar'
         
        });
        console.error('Error al cargar datos de salud:', error);
      }
    );
  }

  // Método para seleccionar un registro para su edición
  editSalud(salud: any): void {
    this.selectedSalud = { ...salud };  // Clonar el objeto para evitar mutaciones no deseadas
  }

  // Método para cancelar la edición
  cancelEdit(): void {
    this.selectedSalud = null;  // Limpiar el objeto seleccionado
  }

  // Método para actualizar los datos de salud
  updateSalud(): void {
    if (this.selectedSalud) {
      // No es necesario solicitar el id_SaludGallina en el formulario, ya que lo tienes en selectedSalud
      this.saludGallinasService.actualizarSaludGallina(this.selectedSalud.id_SaludGallina, this.selectedSalud).subscribe(
        () => {
          Swal.fire({
            title: 'Éxito',
            text: 'Los datos de salud han sido actualizados con éxito',
            icon: 'success',
            confirmButtonColor: '#14532D',
            confirmButtonText: 'Aceptar'
          });
          this.loadSaludGallinas();  // Recargar los datos actualizados
          this.cancelEdit();  // Cerrar el formulario de edición
        },
        (error) => {
          Swal.fire({
            icon: 'warning',
            title: 'Error',
            text: 'Error al actualizar los datos de salud',
            confirmButtonColor: '#14532D',
            confirmButtonText: 'Aceptar'
          });
          console.error('Error al actualizar datos de salud:', error);
        }
      );
    }
  }
  

  // Método para eliminar un registro de salud
  deleteSalud(id_SaludGallina: number): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción no se puede deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#14532D',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.saludGallinasService.eliminarSaludGallina(id_SaludGallina).subscribe(
          () => {
            Swal.fire({
              title: 'Eliminado',
              text: 'El registro de salud ha sido eliminado con éxito',
              icon: 'success',
              confirmButtonColor: '#14532D',
              confirmButtonText: 'Aceptar'
            });
            this.loadSaludGallinas();  // Recargar los datos tras la eliminación
          },
          (error) => {
            Swal.fire({
              icon: 'warning',
              title: 'Error',
              text: 'Error al eliminar los datos de salud',
              confirmButtonColor: '#14532D',
              confirmButtonText: 'Aceptar'
            });
            console.error('Error al eliminar datos de salud:', error);
          }
        );
      }
    });
  }
}
