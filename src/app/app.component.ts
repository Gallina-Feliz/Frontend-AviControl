import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from './features/salud-gallinas/services/api-form/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  GallinaForm: FormGroup;

  constructor(private fb: FormBuilder, private ApiService: ApiService) {
    this.GallinaForm = this.fb.group({
      codigo_gallina: ['', Validators.required],
      raza: ['', Validators.required],
      edad: ['', Validators.required],
      numero_galpon: ['', Validators.required],
      huevos_diarios: ['', Validators.required],
      temp: ['', Validators.required],
      esta_enferma: ['', Validators.required],
      que_enfermedad: ['',Validators.required],
      medicamentos: ['',Validators.required]
    });
  }
}