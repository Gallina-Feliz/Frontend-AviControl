import { Component } from '@angular/core';
import { GallinaService } from '../../../../core/services/gallinaservice/gallina.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  gallina: any = {
    codigo_Gallinas: 0,
    id_Raza: 0,
    numero_Galpon: 0,
    fecha_Nacimiento: '' // Esto será una fecha en formato ISO
  };

  constructor(private gallinaService: GallinaService) {}

  // Método para registrar la gallina
  registrarGallina() {
    // Validaciones
    if (this.gallina.codigo_Gallinas <= 0) {
      Swal.fire('Advertencia', 'El código de la gallina debe ser mayor que 0', 'warning');
      return;
    }

    if (this.gallina.id_Raza <= 0) {
      Swal.fire('Advertencia', 'El ID de la raza debe ser mayor que 0', 'warning');
      return;
    }

    const fechaNacimiento = new Date(this.gallina.fecha_Nacimiento);
    const fechaActual = new Date();

    if (fechaNacimiento > fechaActual) {
      Swal.fire('Advertencia', 'La fecha de nacimiento no puede ser posterior a la fecha actual', 'warning');
      return;
    }

    // Asegurarse de que los datos se envíen correctamente al servicio
    const gallinaData = {
      codigo_Gallinas: this.gallina.codigo_Gallinas,
      id_Raza: this.gallina.id_Raza,
      numero_Galpon: this.gallina.numero_Galpon,
      fecha_Nacimiento: fechaNacimiento.toISOString() // Convertir la fecha al formato ISO
    };

    this.gallinaService.registrarGallina(gallinaData).subscribe(
      (response) => {
        Swal.fire('Éxito', 'Gallina registrada correctamente', 'success');
        // Limpiar el formulario después de registrar
        this.limpiarFormulario();
      },
      (error) => {
        Swal.fire('Error', 'Hubo un problema al registrar la gallina', 'error');
      }
    );
  }

  // Método para limpiar el formulario
  limpiarFormulario() {
    this.gallina = {
      codigo_Gallinas: 0,
      id_Raza: 0,
      numero_Galpon: 0,
      fecha_Nacimiento: ''
    };
  }
}
