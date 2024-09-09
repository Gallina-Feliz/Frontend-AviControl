import { Component } from '@angular/core';
import { AlimentacionService } from '../../../../core/services/AlimetacionService/alimetacion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-alimentacion',
  templateUrl: './form-alimentacion.component.html',
  styleUrls: ['./form-alimentacion.component.css']
})
export class FormAlimentacionComponent {
  alimentacion = {
    cantidadAlimento: 0,
    tipoAlimento: '',
    fecha: new Date().toISOString().split('T')[0],
    numero_Galpon: 0
  };

  constructor(private alimentacionService: AlimentacionService) {}

  registrarAlimentacion() {
    // Mostrar alerta de carga
    Swal.fire({
      title: 'Registrando alimentación',
      text: 'Por favor, espere...',
      icon: 'info',
      allowOutsideClick: false,
      showConfirmButton: false,
      willOpen: () => {
        Swal.showLoading();
      }
    });

    this.alimentacionService.registrarAlimentacion(this.alimentacion).subscribe(
      response => {
        // Cerrar alerta de carga
        Swal.close();

        // Mostrar alerta de éxito
        Swal.fire({
          title: '¡Éxito!',
          text: 'Alimentación registrada correctamente',
          icon: 'success',
          confirmButtonText: 'OK',
          confirmButtonColor: '#F1AB0F'
        });

        // Aquí puedes agregar lógica adicional después del registro exitoso
        // Por ejemplo, limpiar el formulario:
        this.resetForm();
      },
      error => {
        // Cerrar alerta de carga
        Swal.close();

        // Mostrar alerta de error
        Swal.fire({
          title: 'Error',
          text: 'No se pudo registrar la alimentación',
          icon: 'error',
          confirmButtonText: 'OK',
          confirmButtonColor: '#F1AB0F'
        });

        console.error('Error al registrar la alimentación', error);
      }
    );
  }

  resetForm() {
    this.alimentacion = {
      cantidadAlimento: 0,
      tipoAlimento: '',
      fecha: new Date().toISOString().split('T')[0],
      numero_Galpon: 0
    };
  }
}