import { Component, OnInit } from '@angular/core';
import { RazaService } from '../../../../core/services/RazaService/raza.service'; // Ajusta la ruta según tu estructura de carpetas

@Component({
  selector: 'app-raza',
  templateUrl: './raza.component.html',
  styleUrls: ['./raza.component.css'] // Cambia 'styleUrl' a 'styleUrls'
})
export class RazaComponent implements OnInit {
  razas: any[] = []; // Usa 'any' en lugar de un modelo específico

  constructor(private razaService: RazaService) { }

  ngOnInit(): void {
    this.loadRazas();
  }

  loadRazas(): void {
    this.razaService.getRazas().subscribe(data => {
      this.razas = data;
    });
  }

  deleteRaza(id_Raza: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar esta raza?')) {
      this.razaService.deleteRaza(id_Raza).subscribe(() => {
        this.loadRazas();
      });
    }
  }
}
