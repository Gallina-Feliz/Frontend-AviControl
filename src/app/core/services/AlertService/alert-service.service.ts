import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router, NavigationStart } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private alertSubject = new BehaviorSubject<any>(null);

  constructor(private router: Router) {
    // Suscribirse a los eventos de navegación
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        // Cerrar la alerta al iniciar la navegación
        this.clearAlert();
      }
    });
  }

  getAlert() {
    return this.alertSubject.asObservable();
  }

  setAlert(type: string, label: string, message: string) {
    this.alertSubject.next({ type, label, message });
  }

  clearAlert() {
    this.alertSubject.next(null);
  }
}
