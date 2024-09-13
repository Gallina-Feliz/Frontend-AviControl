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
          title: 'Error',
          text: 'Error al cargar los datos de salud',
          imageUrl : "../../../../../assets/icons/2.png",
          imageWidth: 130,  // Ajusta el ancho de la imagen
          imageHeight: 150, 
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
      this.saludGallinasService.actualizarSaludGallina(this.selectedSalud.id_SaludGallina, this.selectedSalud).subscribe(
        () => {
          Swal.fire({
            title: 'Éxito',
            text: 'Los datos de salud han sido actualizados con éxito',
            icon: 'success',
            confirmButtonText: 'Aceptar'
          });
          this.loadSaludGallinas();  // Recargar los datos actualizados
          this.cancelEdit();  // Cerrar el formulario de edición
        },
        (error) => {
          Swal.fire({
            title: 'Error',
            text: 'Error al actualizar los datos de salud',
            imageUrl : "../../../../../assets/icons/2.png",
            imageWidth: 130,  // Ajusta el ancho de la imagen
            imageHeight: 150, 
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
      imageUrl : "../../../../../assets/icons/ad.png",
      imageWidth: 130,  // Ajusta el ancho de la imagen
      imageHeight: 150, 
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
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
              confirmButtonText: 'Aceptar'
            });
            this.loadSaludGallinas();  // Recargar los datos tras la eliminación
          },
          (error) => {
            Swal.fire({
              title: 'Error',
              text: 'Error al eliminar los datos de salud',
              imageUrl : "../../../../../assets/icons/2.png",
              imageWidth: 130,  // Ajusta el ancho de la imagen
              imageHeight: 150, 
              confirmButtonText: 'Aceptar'
            });
            console.error('Error al eliminar datos de salud:', error);
          }
        );
      }
    });
  }
}
