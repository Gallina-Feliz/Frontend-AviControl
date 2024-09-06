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
    codigo_gallina: '',
    raza: '',
    edad: 0,
    numero_galpon: 0,
    temp: null,
    esta_enferma: 'No', // Por defecto, no está enferma
    que_enfermedad: '',
    medicamentos: ''
  };

  constructor(private gallinaService: GallinaService) {}

  // Método para manejar el estado del checkbox
  toggleEnfermedad() {
    this.gallina.esta_enferma = this.gallina.esta_enferma === 'Sí' ? 'No' : 'Sí';
  }

  // Método para registrar la gallina
  registrarGallina() {
    // Mapear los datos del formulario al formato esperado por la API
    const gallinaData = {
      codigo_Gallinas: this.gallina.Codigo_Gallina,
      fecha_ingreso: new Date().toISOString(), // La fecha de ingreso se genera automáticamente
      fecha_Nacimiento: this.calcularFechaNacimiento(this.gallina.edad), // Ejemplo para calcular la fecha de nacimiento
      id_Raza: this.gallina.raza, // Se puede adaptar si usas un id en lugar del nombre de la raza
      numero_Galpon: this.gallina.numero_galpon
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

  // Método auxiliar para calcular la fecha de nacimiento
  calcularFechaNacimiento(edad: number): string {
    const hoy = new Date();
    const fechaNacimiento = new Date(hoy.setFullYear(hoy.getFullYear() - edad));
    return fechaNacimiento.toISOString();
  }

  // Método para limpiar el formulario
  limpiarFormulario() {
    this.gallina = {
      codigo_gallina: '',
      raza: '',
      edad: 0,
      numero_galpon: 0,
      temp: null,
      esta_enferma: 'No',
      que_enfermedad: '',
      medicamentos: ''
    };
  }
}
