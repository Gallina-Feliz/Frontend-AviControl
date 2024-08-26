import { NgModule } from '@angular/core';
import { SharedModule } from '../app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './features/salud-gallinas/pages/home-page/home-page.component';
import { AuthGuard } from '../app/core/guards/auth-guard/auth.guard';
import { Login2Component } from './shared/components/molecules/login2/login2.component';
import { FormComponent } from "../app/shared/components/molecules/form/form.component";
import { TableComponent } from "../app/shared/components/molecules/table/table.component";
import { LoginPageComponent } from './features/salud-gallinas/pages/login-page/login-page.component';
import { SidebarComponent } from './shared/components/molecules/sidebar/sidebar.component';
import { BarChartComponent } from './shared/components/organisms/bar-chart/bar-chart.component';
import { LineChartComponent } from './shared/components/organisms/line-chart/line-chart.component';
import { PieChartComponent } from './shared/components/organisms/pie-chart/pie-chart.component';

const routes: Routes = [
  { path: 'login', component: Login2Component },           // De ambos códigos      // Del primer bloque
  { path: 'Home', component: SidebarComponent, canActivate: [AuthGuard] },
  { path: 'FormularioGallinas', component: FormComponent, canActivate: [AuthGuard] },
  { path: 'TablaGallinas', component: TableComponent, canActivate: [AuthGuard] },
  { path: 'line-chart', component: LineChartComponent },
  { path: 'bar-chart', component: BarChartComponent },
  { path: 'pie-chart', component: PieChartComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'line-chart'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
