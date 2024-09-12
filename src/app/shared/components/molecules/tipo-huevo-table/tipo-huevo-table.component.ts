import { Component, OnInit } from '@angular/core';
import { TipoHuevoService } from '../../../../core/services/TipoHuevo/tipo-huevo.service';

@Component({
  selector: 'app-tipo-huevo-table',
  templateUrl: './tipo-huevo-table.component.html',
  styleUrls: ['./tipo-huevo-table.component.css']
})
export class TipoHuevoTableComponent implements OnInit {
  tiposHuevo: any[] = [];

  constructor(private tipoHuevoService: TipoHuevoService) {}

  ngOnInit(): void {
    this.cargarTiposHuevo();
  }

  cargarTiposHuevo(): void {
    this.tipoHuevoService.getTiposHuevo().subscribe((data) => {
      this.tiposHuevo = data;
    });
  }
}
