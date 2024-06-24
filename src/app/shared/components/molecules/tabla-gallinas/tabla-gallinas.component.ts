import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../features/salud-gallinas/services/api-form/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

interface Gallina {
  codigo_gallina: number;
  raza: string;
  edad: number;
  numero_galpon: number;
  huevos_diarios: number;
  temp: number;
  esta_enferma: string;
  que_enfermedad: string;
  medicamentos: string;
}

@Component({
  selector: 'app-tabla-gallinas',
  templateUrl: './tabla-gallinas.component.html',
  styleUrls: ['./tabla-gallinas.component.css'] // Aquí el cambio a 'styleUrls'
})
export class TablaGallinasComponent implements OnInit {
  gallinas: Gallina[] = [];
  GallinasFiltradas: Gallina[] = [];
  searchText: string = '';

  showAlert: boolean = false;
  alertType: 'success' | 'danger' | 'warning' = 'success';
  alertTitle: string = '';
  alertContent: string = '';
  alertConfirmAction: (() => void) | null = null;
  alertCancelAction: (() => void) | null = null;

  GallinaForm: FormGroup;
  GallinaSeleccionada: Gallina | null = null;

  constructor(private apiService: ApiService, private fb: FormBuilder) {
    this.GallinaForm = this.fb.group({
      codigo_gallina: [0, Validators.required],
      raza: ['', Validators.required],
      edad: [0, Validators.required],
      numero_galpon: [0, Validators.required],
      huevos_diarios: [0, Validators.required],
      temp: [0, Validators.required],
      esta_enferma: ['', Validators.required],
      que_enfermedad: ['', Validators.required],
      medicamentos: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.obtenerGallinas();
  }

  actualizarGallinas(): void {
    this.obtenerGallinas();
  }

  obtenerGallinas(): void {
    this.apiService.listarGallina().subscribe(
      (response: Gallina[]) => {
        this.gallinas = response;
        this.filtrarGallinas();
      },
      (error: HttpErrorResponse) => {
        console.error('Error al obtener los datos de las gallinas:', error);
        this.mostrarAlerta('danger', 'Error', 'Error al obtener los datos de las gallinas');
      }
    );
  }

  filtrarGallinas(): void {
    if (this.searchText) {
      this.GallinasFiltradas = this.gallinas.filter(gallina =>
        gallina.raza.toLowerCase().includes(this.searchText.toLowerCase())
      );
    } else {
      this.GallinasFiltradas = this.gallinas;
    }
  }

  mostrarAlerta(type: 'success' | 'danger' | 'warning', title: string, content: string): void {
    this.showAlert = true;
    this.alertType = type;
    this.alertTitle = title;
    this.alertContent = content;
    this.alertConfirmAction = null;
    this.alertCancelAction = null;

    setTimeout(() => {
      this.cerrarAlerta();
    }, 5000);
  }

  cerrarAlerta(): void {
    this.showAlert = false;
  }

  eliminarGallina(id: number): void {
    this.mostrarAlertaConfirmacion(id);
  }

  mostrarAlertaConfirmacion(id: number): void {
    this.showAlert = true;
    this.alertType = 'warning';
    this.alertTitle = 'Confirmar eliminación';
    this.alertContent = '¿Estás seguro de que deseas eliminar esta gallina?';
    this.alertConfirmAction = () => this.confirmarEliminacion(id);
    this.alertCancelAction = () => this.cancelarEliminacion();
  }

  confirmarEliminacion(id: number): void {
    this.apiService.eliminarGallina(id).subscribe(
      () => {
        this.obtenerGallinas();
        this.mostrarAlerta('success', 'Éxito', 'Gallina eliminada correctamente');
      },
      (error: HttpErrorResponse) => {
        console.error('Error al eliminar la gallina:', error);
        this.mostrarAlerta('danger', 'Error', 'Error al eliminar la gallina');
      }
    );
  }

  cancelarEliminacion(): void {
    this.mostrarAlerta('danger', 'Cancelado', 'La eliminación de la gallina ha sido cancelada');
  }

  editarGallina(gallina: Gallina): void {
    this.GallinaSeleccionada = gallina;
    this.GallinaForm.patchValue(gallina);

    setTimeout(() => {
      const element = document.getElementById('editarGallinaForm');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  }

  onSubmit(): void {
    if (this.GallinaForm.valid) {
      if (this.GallinaSeleccionada) {
        this.modificarGallina();
      } else {
        // Código para crear gallina
      }
    }
  }

  modificarGallina(): void {
    if (this.GallinaSeleccionada) {
      const gallinaModificada: Gallina = {
        ...this.GallinaSeleccionada,
        ...this.GallinaForm.value
      };
      console.log('Datos de la gallina a modificar:', gallinaModificada);
      this.apiService.modificarGallina(gallinaModificada).subscribe(
        () => {
          this.obtenerGallinas();
          this.mostrarAlerta('success', 'Éxito', 'Gallina modificada correctamente');
          this.GallinaSeleccionada = null;
          this.GallinaForm.reset();
        },
        (error: HttpErrorResponse) => {
          console.error('Error al modificar la gallina:', error);
          let mensajeError = 'Error al modificar la gallina';
          if (error.error instanceof ErrorEvent) {
            // Error del lado del cliente
            mensajeError += `: ${error.error.message}`;
          } else {
            // El backend retornó un código de error
            mensajeError += `: ${error.status}, ${error.error}`;
          }
          this.mostrarAlerta('danger', 'Error', mensajeError);
        }
      );
    }
  }
}
