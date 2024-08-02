import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-h2',
  templateUrl: './h2.component.html',
  styleUrl: './h2.component.css'
})
export class H2Component {
  @Input() text: string = '';  // Texto del encabezado
  @Input() class: string = ''; // Clases CSS adicionales
}
