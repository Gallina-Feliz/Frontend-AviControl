import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Asegúrate de tener HttpClientModule importado en tu app.module.ts
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-galpon',
  templateUrl: './form-galpon.component.html',
  styleUrls: ['./form-galpon.component.css']
})
export class FormGalponComponent {
  // Datos del formulario, inicializados con valores vacíos o predeterminados
  galpon = {
    numero_galpon: 0, // Inicializa con un número
    tipo_galpon: '',
    huevos_diarios: 0,
    numero_gallinas: 0, // Inicializa con un número
    alimento_diario: '',
    que_alimento: ''
  };

  // Opciones para los campos select
  numeroGalponOptions = [0, 1, 2, 3];
  huevosDiariosOptions = Array.from({ length: 101 }, (_, i) => i); // Opciones de 0 a 100
  numeroGallinasOptions = Array.from({ length: 1001 }, (_, i) => i); // Opciones de 0 a 1000

  // Constructor con la inyección de dependencias de HttpClient
  constructor(private http: HttpClient) {}

  // Método para validar y registrar el galpón
  registerGalpon() {
    // Validar el campo numero_galpon
    if (this.galpon.numero_galpon < 0 || this.galpon.numero_galpon > 3) {
      Swal.fire({
        icon: 'error',
        title: 'Error en los datos',
        text: 'El número del galpón debe estar entre 0 y 3.',
        confirmButtonColor: '#d33'
      });
      return; // Detener el registro si la validación falla
    }

    // Validar el campo numero_gallinas
    if (this.galpon.numero_gallinas < 0) {
      Swal.fire({
        icon: 'error',
        title: 'Error en los datos',
        text: 'El número de gallinas no puede ser negativo.',
        confirmButtonColor: '#d33'
      });
      return; // Detener el registro si la validación falla
    }

    const url = 'URL_DE_TU_API';  // Reemplaza con la URL de tu API
    this.http.post(url, this.galpon).subscribe(
      response => {
        // Mostrar alerta de éxito
        Swal.fire({
          icon: 'success',
          title: 'Registro exitoso',
          text: 'El galpón ha sido registrado con éxito.',
          confirmButtonColor: '#F1AB0F'
        });
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
}
