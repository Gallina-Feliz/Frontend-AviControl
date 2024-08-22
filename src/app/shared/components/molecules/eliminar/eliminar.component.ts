// delete-gallina.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent{
  gallinas = [
    { id: 1, nombre: 'Gallina 1' },
    { id: 2, nombre: 'Gallina 2' },
    { id: 3, nombre: 'Gallina 3' }
  ];

  deleteGallina(id: number): void {
    this.gallinas = this.gallinas.filter(gallina => gallina.id !== id);
  }
}