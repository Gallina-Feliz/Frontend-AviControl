import { Component } from '@angular/core';
import { GalponService } from '../../../../core/services/Galponservice/galpon.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-galpon',
  templateUrl: './form-galpon.component.html',
  styleUrls: ['./form-galpon.component.css']
})
export class FormGalponComponent {
  // Datos del formulario, inicializados con valores vacíos o predeterminados
  galpones = {
    numero_galpon: 0,
    tipo_galpon: ''
  };

  // Constructor con la inyección de dependencias de GalponService
  constructor(private galponService: GalponService) {}

  // Método para validar y registrar el galpón
  registerGalpon() {
    // Validar el campo numero_galpon
    if (this.galpones.numero_galpon < 0 || this.galpones.numero_galpon > 10) {
      Swal.fire({
        imageUrl : "../../../../../assets/icons/2.png",
        imageWidth: 130,  // Ajusta el ancho de la imagen
        imageHeight: 150, 
        title: 'Error en los datos',
        text: 'El número del galpón debe estar entre 0 y 10.',
        confirmButtonColor: '#d33'
      });
      return; // Detener el registro si la validación falla
    }

    this.galponService.createGalpon(this.galpones).subscribe(
      response => {
        // Mostrar alerta de éxito
        Swal.fire({
          icon: 'success',
          title: 'Registro exitoso',
          text: 'El galpón ha sido registrado con éxito.',
          confirmButtonColor: '#F1AB0F'
        });

        // Limpiar el formulario después de registrar exitosamente
        this.resetForm();
      },
      error => {
        // Mostrar alerta de error
        Swal.fire({
          icon: 'error',
          title: 'Error al registrar',
          text: 'Ocurrió un error al registrar el galpón. Inténtalo nuevamente.',
          confirmButtonColor: '#d33'
        });
      }
    );
  }

  // Método para limpiar el formulario
  resetForm() {
    this.galpones = {
      numero_galpon: 0,
      tipo_galpon: ''
    };
  }
}
