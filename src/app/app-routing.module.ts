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


const routes: Routes = [
  { path: 'login', component: Login2Component },           // De ambos códigos      // Del primer bloque
  { path: 'Home', component: SidebarComponent, canActivate: [AuthGuard] },
  { path: 'FormularioGallinas', component: FormComponent, canActivate: [AuthGuard] },
  { path: 'TablaGallinas', component: TableComponent, canActivate: [AuthGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
