import { Component } from '@angular/core';
import { HuevoService } from '../../../../core/services/Huevo/huevo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-conteo',
  templateUrl: './form-conteo.component.html',
  styleUrls: ['./form-conteo.component.css']
})
export class FormConteoComponent {
  huevo = {
    Cantidad: 0,
    Id_TipoHuevo: 0,
    Numero_Galpon: 0
  };

  constructor(private huevoService: HuevoService) {}

  registrarHuevo() {
    // Validar que los campos no sean menores a 0
    if (this.huevo.Cantidad <= 0 || this.huevo.Id_TipoHuevo <= 0 || this.huevo.Numero_Galpon <= 0) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Los valores no pueden ser menores o iguales a 0'
      });
      return;
    }

    // Validar que los campos no estén vacíos
    if (!this.huevo.Cantidad || !this.huevo.Id_TipoHuevo || !this.huevo.Numero_Galpon) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, complete todos los campos.'
      });
      return;
    }

    // Mostrar alerta de carga
    Swal.fire({
      title: 'Registrando...',
      text: 'Por favor, espere mientras se registran los datos.',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    // Consumir el servicio para registrar los datos
    this.huevoService.insertHuevo(this.huevo).subscribe(
      response => {
        Swal.fire({
          icon: 'success',
          title: 'Registro exitoso',
          text: 'Los datos del huevo han sido registrados correctamente.'
        });
      },
      error => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Hubo un error al registrar los datos.'
        });
      }
    );
  }
}
