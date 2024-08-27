import { Component } from '@angular/core';
import { GallinaService } from '../../../../core/services/gallinaservice/gallina.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  gallina = {
    raza: '',
    edad: '',
    numero_galpon: ''
  };

  constructor(private gallinaService: GallinaService) {}

  registerGallina() {
    this.gallinaService.registerGallina(this.gallina).subscribe(
      response => {
        // Mostrar alerta de éxito
        Swal.fire({
          icon: 'success',
          title: 'Registro exitoso',
          text: 'La gallina ha sido registrada con éxito.',
          confirmButtonColor: '#F1AB0F'
        });
      },
      error => {
        // Mostrar alerta de error
        Swal.fire({
          icon: 'error',
          title: 'Error al registrar',
          text: 'Ocurrió un error al registrar la gallina. Inténtalo nuevamente.',
          confirmButtonColor: '#d33¿'
        });
      }
    );
  }
}
