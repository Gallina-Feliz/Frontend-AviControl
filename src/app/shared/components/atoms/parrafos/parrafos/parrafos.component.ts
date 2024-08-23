import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parrafos',
  templateUrl: './parrafos.component.html',
  styleUrl: './parrafos.component.css'
})
export class ParrafosComponent {
  @Input() text: string = '';  // Texto de la etiqueta p
  @Input() class: string = ''; // Clases de estilos adicionales
}
