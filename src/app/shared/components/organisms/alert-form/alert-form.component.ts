import { Component } from '@angular/core';

@Component({
  selector: 'app-alert-form',
  templateUrl: './alert-form.component.html',
  styleUrls: ['./alert-form.component.css']
})
export class AlertFormComponent {
  showAlert: boolean = false;
  alertMessage: string = '';
  alertClass: string = '';

  showSuccessAlert() {
    this.showAlert = true;
    this.alertMessage = 'Operación realizada con éxito!';
    this.alertClass = 'alert success';
  }

  showErrorAlert() {
    this.showAlert = true;
    this.alertMessage = 'Hubo un error al procesar la solicitud.';
    this.alertClass = 'alert error';
  }

  showInfoAlert() {
    this.showAlert = true;
    this.alertMessage = 'Este es un mensaje informativo.';
    this.alertClass = 'alert info';
  }

  showWarningAlert() {
    this.showAlert = true;
    this.alertMessage = 'Advertencia: Verifica los datos ingresados.';
    this.alertClass = 'alert warning';
  }

  closeAlert() {
    this.showAlert = false;
  }
}
