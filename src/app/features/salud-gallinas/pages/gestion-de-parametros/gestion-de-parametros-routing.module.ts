import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistorialYEstadisticasComponent } from './historial-y-estadisticas/historial-y-estadisticas.component';

const routes: Routes = [
  { path: 'Historial-y-Estadisticas', component: HistorialYEstadisticasComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionDeParametrosRoutingModule { }
