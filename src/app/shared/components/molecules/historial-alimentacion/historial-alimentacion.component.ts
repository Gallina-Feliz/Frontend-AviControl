import { Component, OnInit } from '@angular/core';
import { AlimentacionService } from '../../../../core/services/AlimetacionService/alimetacion.service'; // Asegúrate de que la ruta es correcta
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
    this.selectedAlimentacion = { ...alimentacion };
  }

  // Cancelar la edición
  cancelEdit(): void {
    this.selectedAlimentacion = null;
  }

  // Actualizar una alimentación
  updateAlimentacion(): void {
    this.alimentacionService.updateAlimentacion(this.selectedAlimentacion).subscribe(
      (response) => {
        Swal.fire('Actualizado', 'Alimentación actualizada con éxito', 'success');
        this.getAlimentaciones(); // Recargar la lista después de la actualización
        this.cancelEdit(); // Cerrar el modal de edición
      },
      (error) => {
        console.error('Error al actualizar la alimentación', error);
        Swal.fire('Error', 'No se pudo actualizar la alimentación', 'error');
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
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.alimentacionService.listarAlimentaciones(id).subscribe(
          () => {
            Swal.fire('Eliminado', 'La alimentación ha sido eliminada', 'success');
            this.getAlimentaciones(); // Recargar la lista después de eliminar
          },
          (error) => {
            console.error('Error al eliminar la alimentación', error);
            Swal.fire('Error', 'No se pudo eliminar la alimentación', 'error');
          }
        );
      }
    });
  }
}
