import { Component } from '@angular/core';
import { GallinaService } from '../../../../core/services/gallinaservice/gallina.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  gallina: any = {}; // Aquí se almacena la información de la gallina

  constructor(private gallinaService: GallinaService) {}

  // Método para manejar el estado del checkbox
  toggleEnfermedad() {
    this.gallina.esta_enferma = this.gallina.esta_enferma ? 'Sí' : 'No';
  }

  // Método para registrar la gallina
  registerGallina() {
    this.gallinaService.registerGallina(this.gallina).subscribe(
      response => {
        Swal.fire({
          icon: 'success',
          title: 'Registro exitoso',
          text: 'La gallina ha sido registrada con éxito.',
          confirmButtonColor: '#F1AB0F'
        });
      },
      error => {
        Swal.fire({
          icon: 'error',
          title: 'Error al registrar',
          text: 'Ocurrió un error al registrar la gallina. Inténtalo nuevamente.',
          confirmButtonColor: '#d33'
        });
      }
    );
  }
}
