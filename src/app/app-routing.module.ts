import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HistorialYEstadisticasComponent } from '../app/features/salud-gallinas/pages/gestion-de-parametros/historial-y-estadisticas/historial-y-estadisticas.component';
const routes: Routes = [
  {
    path: 'gestion-de-parametros',
    loadChildren: () => import('./features/salud-gallinas/pages/gestion-de-parametros/gestion-de-parametros.module').then(m => m.GestionDeParametrosModule)
  },
  {
    path: 'Historial-y-Estadisticas',
    component: HistorialYEstadisticasComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
