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
  galponExiste: boolean = false; // Variable para verificar si el galpón existe

  constructor(private gallinaService: GallinaService) {}

  // Método para verificar si el número del galpón existe
  checkNumeroGalpon() {
    this.gallinaService.checkNumeroGalpon(this.gallina.numero_galpon).subscribe(
      response => {
        this.galponExiste = response.exists;
        if (this.galponExiste) {
          this.registerGallina();
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Galpón no encontrado',
            text: 'El número del galpón no existe. Por favor, verifique e intente nuevamente.',
            confirmButtonColor: '#d33'
          });
        }
      },
      error => {
        Swal.fire({
          icon: 'error',
          title: 'Error al verificar',
          text: 'Ocurrió un error al verificar el número del galpón.',
          confirmButtonColor: '#d33'
        });
      }
    );
  }

  // Método para manejar el estado del checkbox
  toggleEnfermedad() {
    this.gallina.esta_enferma = this.gallina.esta_enferma ? 'Sí' : 'No';
  }

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
