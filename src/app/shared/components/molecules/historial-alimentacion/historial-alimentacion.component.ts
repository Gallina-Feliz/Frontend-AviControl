import { Component, OnInit } from '@angular/core';
import { AlimentacionService } from '../../../../core/services/AlimetacionService/alimetacion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-historial-alimentacion',
  templateUrl: './historial-alimentacion.component.html',
  styleUrls: ['./historial-alimentacion.component.css']
})
export class HistorialAlimentacionComponent implements OnInit {
  alimentaciones: any[] = [];
  selectedAlimentacion: any = null;

  constructor(private alimentacionService: AlimentacionService) {}

  ngOnInit(): void {
    this.getAlimentaciones();
  }

  // Obtener todas las alimentaciones
  getAlimentaciones(): void {
    this.alimentacionService.getAlimentaciones().subscribe(
      (data: any[]) => {
        this.alimentaciones = data;
      },
      (error) => {
        console.error('Error al obtener alimentaciones', error);
      }
    );
  }

  // Seleccionar una alimentación para editar
  editAlimentacion(alimentacion: any): void {
    this.selectedAlimentacion = { ...alimentacion }; // Copia el objeto seleccionado
  }

  // Cancelar la edición
  cancelEdit(): void {
    this.selectedAlimentacion = null;
  }

  // Actualizar una alimentación
 // Actualizar una alimentación
updateAlimentacion(): void {
  // Asignar automáticamente la fecha actual antes de actualizar
  this.selectedAlimentacion.fecha = new Date().toISOString();

  this.alimentacionService.updateAlimentacion(this.selectedAlimentacion).subscribe(
    (response) => {
      Swal.fire({
        title:'Actualizado', 
        text:'Alimentación actualizada con éxito', 
        confirmButtonColor: '#14532D',
        icon:'success',
        confirmButtonText:'Aceptar'
    });
      this.getAlimentaciones(); // Recargar la lista después de la actualización
      this.cancelEdit(); // Cerrar el modal de edición
    },
    (error) => {
      console.error('Error al actualizar la alimentación', error);
      Swal.fire({
        title:'Error', 
        text:'No se pudo actualizar la alimentación', 
        confirmButtonColor: '#14532D',
        icon:'error',
        confirmButtonText:'Aceptar'
    });
    }
  );
}


  // Eliminar una alimentación
  deleteAlimentacion(id: number): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'No podrás revertir esto',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#14532D',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText:'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.alimentacionService.eliminarAlimentacion(id).subscribe(
          () => {
            Swal.fire({
            title:'Eliminado', 
            text:'La alimentación ha sido eliminada', 
            confirmButtonColor: '#14532D',
            icon:'success',
            confirmButtonText:'Aceptar'
          });
            this.getAlimentaciones(); // Recargar la lista después de eliminar
          },
          (error) => {
            console.error('Error al eliminar la alimentación', error);
            Swal.fire({
              title:'Error', 
              text:'No se pudo eliminar la alimentación', 
              confirmButtonColor: '#14532D',
              icon:'error',
              confirmButtonText:'Aceptar'
          });
          }
        );
      }
    });
  }
}
