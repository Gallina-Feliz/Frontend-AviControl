import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-h1',
  templateUrl: './h1.component.html',
  styleUrl: './h1.component.css'
})
export class H1Component {
  @Input() text: string = '';  // Texto del encabezado
  @Input() class: string = ''; // Clases CSS adicionales
}
