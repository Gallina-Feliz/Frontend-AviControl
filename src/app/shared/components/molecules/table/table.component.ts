import { Component, OnInit } from '@angular/core';
import { GallinaService } from '../../../../core/services/gallinaservice/gallina.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  gallinas: any[] = [];
  selectedGallina: any;

  constructor(private gallinaService: GallinaService) {}

  ngOnInit(): void {
    this.loadGallinas(); // Cargar los datos al inicializar el componente
  }

  loadGallinas(): void {
    this.gallinaService.getGallinas().subscribe(
      (data) => {
        this.gallinas = data; // Asignar los datos recibidos a la variable gallinas
      },
      (error) => {
        Swal.fire({
          title: 'Error',
          text: 'Error al cargar las gallinas',
          imageUrl : "../../../../../assets/icons/2.png",
          imageWidth: 130,  // Ajusta el ancho de la imagen
          imageHeight: 150, 
          confirmButtonText: 'Ok'
        });
        console.error('Error al cargar datos', error); // Loguear el error para depuración
      }
    );
  }

  editGallina(gallina: any): void {
    this.selectedGallina = { ...gallina }; // Clonar el objeto para editarlo, evitando modificar el objeto original
  }

  cancelEdit(): void {
    this.selectedGallina = null; // Cerrar el formulario de edición
  }
  updateGallina(): void {
    if (this.selectedGallina) {
      const updatedGallina = {
        Codigo_Gallinas: this.selectedGallina.Codigo_Gallinas,
        id_Raza: Number(this.selectedGallina.id_Raza),
        fecha_Nacimiento: this.selectedGallina.fecha_Nacimiento,
        numero_Galpon: this.selectedGallina.numero_Galpon
      };
  
      this.gallinaService.updateGallina(updatedGallina).subscribe(
        () => {
          Swal.fire({
            title: 'Éxito',
            text: 'La gallina ha sido actualizada con éxito',
            icon: 'success',

            confirmButtonText: 'Aceptar'
          });
          this.loadGallinas();  // Recargar datos después de la actualización
          this.cancelEdit();  // Cerrar el formulario de edición
        },
        (error) => {
          Swal.fire({
            title: 'Error',
            text: `Error al actualizar la gallina: ${error.message}`,
            imageUrl : "../../../../../assets/icons/2.png",
            imageWidth: 130,  // Ajusta el ancho de la imagen
            imageHeight: 150, 
            confirmButtonText: 'Aceptar'
          });
          console.error('Error al actualizar la gallina', error);
        }
      );
    }
  }
  
  
  
  

  deleteGallina(codigoGallinas: number): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción no se puede deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#F1AB0F',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.gallinaService.deleteGallina(codigoGallinas).subscribe(
          () => {
            Swal.fire({
              title: 'Eliminado',
              text: 'La gallina ha sido eliminada con éxito',
              icon: 'success',
              confirmButtonText: 'Ok'
            });
            this.loadGallinas(); // Recargar los datos de gallinas
          },
          (error) => {
            Swal.fire({
              title: 'Error',
              text: 'Error al eliminar la gallina',
              icon: 'error',
              confirmButtonText: 'Ok'
            });
            console.error('Error al eliminar la gallina', error); // Loguear el error para depuración
          }
        );
      }
    });
  }
}
