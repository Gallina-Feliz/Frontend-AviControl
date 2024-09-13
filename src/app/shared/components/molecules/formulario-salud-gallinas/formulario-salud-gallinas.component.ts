import { Component } from '@angular/core';
import { SaludGallinasService } from '../../../../core/services/SaludGallinas/salud-gallinas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-salud-gallinas',
  templateUrl: './formulario-salud-gallinas.component.html',
  styleUrls: ['./formulario-salud-gallinas.component.css']
})
export class FormularioSaludGallinasComponent {
  saludGallina = {
    id_Gallina: 0,
    tipo_Registro: '',
    detalle: '',
    medicamentos: '',
    dosis: '',
    fecha_vacuna: '',
    enfermedad: '',
    peso: 0,
    temperatura: 0
  };

  tiposRegistro = ['vacuna', 'enfermedad'];
  mostrarDetalle = false;
  mostrarMedicamentos = false;
  mostrarDosis = false;
  mostrarFechaVacuna = false;
  mostrarEnfermedad = false;

  constructor(private saludGallinasService: SaludGallinasService) {}

  onTipoRegistroChange(event: Event) {
    const tipoRegistro = (event.target as HTMLSelectElement).value;
    this.mostrarDetalle = true;
    this.mostrarMedicamentos = tipoRegistro === 'vacuna';
    this.mostrarDosis = tipoRegistro === 'vacuna';
    this.mostrarFechaVacuna = tipoRegistro === 'vacuna';
    this.mostrarEnfermedad = tipoRegistro === 'enfermedad';
  }

  registrarSaludGallina() {
    // Validación de campos
    if (this.saludGallina.peso < 0) {
      Swal.fire({
        icon: 'warning',
        title: 'Peso inválido',
        text: 'El peso no puede ser menor a 0.'
      });
      return;
    }

    if (this.saludGallina.temperatura < 0 || this.saludGallina.temperatura > 100) {
      Swal.fire({
        imageUrl : "../../../../../assets/icons/ad.png",
        imageWidth: 130,  // Ajusta el ancho de la imagen
        imageHeight: 150, 
        title: 'Temperatura inválida',
        text: 'La temperatura debe estar entre 0 y 100 grados centígrados.'
      });
      return;
    }

    Swal.fire({
      title: 'Registrando datos...',
      text: 'Por favor espera mientras se completan los datos.',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    this.saludGallinasService.registrarSaludGallina(this.saludGallina)
      .subscribe(response => {
        Swal.fire({
          icon: 'success',
          title: 'Registro Exitoso',
          html: `
            <p>Los datos de salud de la gallina han sido registrados correctamente.</p>
            <ul style="text-align: left;">
              <li><b>ID Gallina:</b> ${response.id_Gallina}</li>
              <li><b>Temperatura:</b> ${response.temperatura} °C</li>
            </ul>`,
          showConfirmButton: true,
          confirmButtonText: 'Aceptar',
          customClass: {
            confirmButton: 'btn btn-success',
          },
          buttonsStyling: false,
          timer: 5000
        });
        this.limpiarFormulario();
      }, error => {
        Swal.fire({
          imageUrl : "../../../../../assets/icons/2.png",
          imageWidth: 130,  // Ajusta el ancho de la imagen
          imageHeight: 150, 
          title: 'Error al Registrar',
          text: 'Hubo un problema al intentar registrar los datos de salud. ¿Deseas intentar nuevamente?',
          showCancelButton: true,
          confirmButtonText: 'Reintentar',
          cancelButtonText: 'Cancelar',
          customClass: {
            confirmButton: 'btn btn-danger',
            cancelButton: 'btn btn-secondary',
          },
          buttonsStyling: false
        }).then((result) => {
          if (result.isConfirmed) {
            this.registrarSaludGallina(); // Reintenta el registro si el usuario confirma
          }
        });
      });
  }

  limpiarFormulario() {
    this.saludGallina = {
      id_Gallina: 0,
      tipo_Registro: '',
      detalle: '',
      medicamentos: '',
      dosis: '',
      fecha_vacuna: '',
      enfermedad: '',
      peso: 0,
      temperatura: 0
    };
    this.mostrarDetalle = false;
    this.mostrarMedicamentos = false;
    this.mostrarDosis = false;
    this.mostrarFechaVacuna = false;
    this.mostrarEnfermedad = false;
  }
}
