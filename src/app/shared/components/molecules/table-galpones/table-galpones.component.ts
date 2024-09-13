import { Component, OnInit } from '@angular/core';
import { GalponService } from '../../../../core/services/Galponservice/galpon.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-table-galpones',
  templateUrl: './table-galpones.component.html',
  styleUrls: ['./table-galpones.component.css']
})
export class TableGalponesComponent implements OnInit {
  galpones: any[] = [];
  selectedGalpon: any = null;
  deleteGalponId: number | null = null;
  deleteGalponData = {
    numero_Galpon: 0,
    nuevo_Numero_Galpon: 1
  };

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
        Swal.fire({
          title:'Error', 
          text:'Error al cargar los galpones', 
          confirmButtonColor: '#14532D',
          icon:'error',
          confirmButtonText: 'Aceptar'
      });
        console.error('Error al cargar datos', error);
      }
    );
  }

  editGalpon(galpon: any): void {
    this.selectedGalpon = { ...galpon }; // Clona el objeto para editarlo
  }

  cancelEdit(): void {
    this.selectedGalpon = null;
  }

  updateGalpon(): void {
    if (this.selectedGalpon) {
      this.galponService.updateGalpon(this.selectedGalpon).subscribe(
        () => {
          Swal.fire({
            title:'Éxito', 
            text:'El galpón ha sido actualizado con éxito', 
            confirmButtonColor: '#14532D',
            icon:'success',
            confirmButtonText: 'Aceptar'
        });
          this.getGalpones(); // Actualiza la lista después de la actualización
          this.selectedGalpon = null;
        },
        (error) => {
          Swal.fire({
            title:'Error', 
            text:'Error al actualizar el galpón', 
            confirmButtonColor: '#14532D',
            icon:'error',
            confirmButtonText:'Aceptar'
        });
          console.error('Error al actualizar el galpón', error);
        }
      );
    }
  }

  openDeleteModal(id: number): void {
    this.deleteGalponId = id;
    this.deleteGalponData.numero_Galpon = id;
  }

  cancelDelete(): void {
    this.deleteGalponId = null;
    this.deleteGalponData = {
      numero_Galpon: 0,
      nuevo_Numero_Galpon: 1
    };
  }

  deleteGalpon(): void {
    if (this.deleteGalponId !== null) {
      this.deleteGalponData.numero_Galpon = this.deleteGalponId;
      
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
          // Llamamos al servicio para eliminar el galpón
          this.galponService.deleteGalpon(this.deleteGalponData).subscribe(
            () => {
              Swal.fire({
                title: 'Eliminado',
                text: 'El galpón ha sido eliminado con éxito',
                confirmButtonColor: '#14532D',
                icon: 'success',
                confirmButtonText: 'Aceptar'
              });
              this.getGalpones(); // Actualiza la lista después de la eliminación
              this.cancelDelete(); // Cierra el formulario de eliminación
            },
            (error) => {
              Swal.fire({
                title: 'Error',
                text: 'Error al eliminar el galpón',
                confirmButtonColor: '#14532D',
                icon: 'error',
                confirmButtonText: 'Aceptar'
              });
              console.error('Error al eliminar el galpón', error);
            }
          );
        }
      });
    }
  }
  
  
}
