import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared.module';


import { GestionDeParametrosRoutingModule } from './gestion-de-parametros-routing.module';
import { HistorialYEstadisticasComponent } from './historial-y-estadisticas/historial-y-estadisticas.component';


@NgModule({
  declarations: [
    HistorialYEstadisticasComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    GestionDeParametrosRoutingModule
  ]
})
export class GestionDeParametrosModule { }
