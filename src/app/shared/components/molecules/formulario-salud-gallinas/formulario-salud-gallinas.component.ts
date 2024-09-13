import { Component } from '@angular/core';
import { SaludGallinasService } from '../../../../core/services/SaludGallinas/salud-gallinas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-salud-gallinas',
  templateUrl: './formulario-salud-gallinas.component.html',
  styleUrls: ['./formulario-salud-gallinas.component.css']
})
export class FormularioSaludGallinasComponent {
  // Estructura de los datos que se van a registrar
  saludGallina = {
    id_Gallina: '',
    tipo_Registro: '',
    detalle: '',
    medicamentos: '',
    dosis: '',
    fecha_vacuna: '',
    enfermedad: '',
    peso: 0,
    temperatura: 0
  };

  tiposRegistro = ['vacuna', 'enfermedad']; // Tipos de registro disponibles
  // Variables que controlan la visibilidad de los campos
  mostrarDetalle = false;
  mostrarMedicamentos = false;
  mostrarDosis = false;
  mostrarFechaVacuna = false;
  mostrarEnfermedad = false;

  constructor(private saludGallinasService: SaludGallinasService) {}

  // Función que controla qué campos se muestran según el tipo de registro seleccionado
  onTipoRegistroChange(event: Event) {
    const tipoRegistro = (event.target as HTMLSelectElement).value;
    this.mostrarDetalle = true;
    this.mostrarMedicamentos = tipoRegistro === 'vacuna';
    this.mostrarDosis = tipoRegistro === 'vacuna';
    this.mostrarFechaVacuna = tipoRegistro === 'vacuna';
    this.mostrarEnfermedad = tipoRegistro === 'enfermedad';
    // Limpia los valores de los campos no visibles para evitar enviar datos innecesarios
    if (tipoRegistro === 'vacuna') {
      this.saludGallina.enfermedad = '';
    } else if (tipoRegistro === 'enfermedad') {
      this.saludGallina.medicamentos = '';
      this.saludGallina.dosis = '';
      this.saludGallina.fecha_vacuna = '';
    }
  }

  // Función que valida los campos antes de hacer el registro
  // Función que valida los campos antes de hacer el registro
registrarSaludGallina() {
  // Validación de id_Gallina
  if (!this.saludGallina.id_Gallina) {
    Swal.fire({
      icon: 'warning',
      title: 'ID de Gallina requerido',
      text: 'Por favor, selecciona una gallina.',
      confirmButtonColor: '#14532D',
      confirmButtonText: 'Confirmar'
    });
    return;
  }

  // Validación de detalle
  if (!this.saludGallina.detalle) {
    Swal.fire({
      icon: 'warning',
      title: 'Detalle requerido',
      text: 'Por favor, proporciona un detalle para el registro.',
      confirmButtonColor: '#14532D',
      confirmButtonText: 'Confirmar'
    });
    return;
  }

  // Validación de peso
  if (this.saludGallina.peso < 0) {
    Swal.fire({
      icon: 'warning',
      title: 'Peso inválido',
      text: 'El peso no puede ser menor a 0.',
      confirmButtonColor: '#14532D',
      confirmButtonText: 'Confirmar'
    });
    return;
  }

  // Validación de temperatura
  if (this.saludGallina.temperatura < 0 || this.saludGallina.temperatura > 100) {
    Swal.fire({
      icon: 'warning',
      title: 'Temperatura inválida',
      text: 'La temperatura debe estar entre 0 y 100 grados centígrados.',
      confirmButtonColor: '#14532D',
      confirmButtonText: 'Confirmar'
    });
    return;
  }

  // Validación de campos obligatorios según el tipo de registro
  if (this.saludGallina.tipo_Registro === 'vacuna' && 
    (!this.saludGallina.medicamentos || !this.saludGallina.dosis || !this.saludGallina.fecha_vacuna)) {
    Swal.fire({
      icon: 'warning',
      title: 'Datos incompletos',
      text: 'Por favor, completa todos los campos relacionados con la vacuna.',
      confirmButtonColor: '#14532D',
      confirmButtonText: 'Confirmar'
    });
    return;
  } else if (this.saludGallina.tipo_Registro === 'enfermedad' && !this.saludGallina.enfermedad) {
    Swal.fire({
      icon: 'warning',
      title: 'Datos incompletos',
      text: 'Por favor, especifica la enfermedad.',
      confirmButtonColor: '#14532D',
      confirmButtonText: 'Confirmar'
    });
    return;
  }

  // Mensaje de carga mientras se procesa el registro
  Swal.fire({
    title: 'Registrando datos...',
    text: 'Por favor espera mientras se completan los datos.',
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    }
  });

  // Enviar los datos al servicio
  this.saludGallinasService.registrarSaludGallina(this.saludGallina)
    .subscribe(response => {
      Swal.fire({
        icon: 'success',
        title: 'Registro Exitoso',
        confirmButtonColor: '#14532D',
        confirmButtonText: 'Confirmar'
      });
      this.limpiarFormulario(); // Limpiar el formulario después del registro exitoso
    }, error => {
      // Manejo de errores
      Swal.fire({
        icon: 'warning',
        title: 'Error al Registrar',
        text: 'Hubo un problema al intentar registrar los datos de salud.',
        confirmButtonColor: '#14532D',
        confirmButtonText: 'Confirmar'
      }).then((result) => {
        if (result.isConfirmed) {
          this.registrarSaludGallina(); // Reintenta el registro si el usuario confirma
        }
      });
    });
}


  // Función para limpiar el formulario
  limpiarFormulario() {
    this.saludGallina = {
      id_Gallina: '',
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
