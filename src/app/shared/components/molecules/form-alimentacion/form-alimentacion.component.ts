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
    // Validación de campos obligatorios
    if (!this.alimentacion.cantidadAlimento || this.alimentacion.cantidadAlimento <= 0) {
      Swal.fire({
        icon: 'warning',
        title: 'Cantidad de alimento inválida',
        text: 'La cantidad de alimento debe ser un valor positivo.',
        confirmButtonColor: '#14532D',
        confirmButtonText: 'Confirmar'
      });
      return;
    }
  
    if (!this.alimentacion.tipoAlimento) {
      Swal.fire({
        icon: 'warning',
        title: 'Tipo de alimento requerido',
        text: 'Por favor, especifica el tipo de alimento.',
        confirmButtonColor: '#14532D',
        confirmButtonText: 'Confirmar'
      });
      return;
    }
  
    if (!this.alimentacion.fecha) {
      Swal.fire({
        icon: 'warning',
        title: 'Fecha requerida',
        text: 'Por favor, proporciona una fecha para la alimentación.',
        confirmButtonColor: '#14532D',
        confirmButtonText: 'Confirmar'
      });
      return;
    }
  
    if (!this.alimentacion.numero_Galpon) {
      Swal.fire({
        icon: 'warning',
        title: 'Número de galpón requerido',
        text: 'Por favor, especifica el número de galpón.',
        confirmButtonColor: '#14532D',
        confirmButtonText: 'Confirmar'
      });
      return;
    }
  
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
          confirmButtonText: 'Aceptar',
          confirmButtonColor: '#14532D'
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
          confirmButtonText: 'Aceptar',
          confirmButtonColor: '#14532D'
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