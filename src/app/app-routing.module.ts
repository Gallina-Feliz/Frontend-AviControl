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
import { LoginPageTComponent } from './shared/components/templates/login-page-t/login-page-t.component';
import { HomePageTComponent } from './shared/components/templates/home-page-t/home-page-t.component';
import { TablePageTComponent } from './shared/components/templates/table-page-t/table-page-t.component';
import { FormGallinaTComponent } from './shared/components/templates/form-gallina-t/form-gallina-t.component';


const routes: Routes = [
  { path: 'login', component: LoginPageTComponent },           // De ambos códigos      // Del primer bloque
  { path: 'Home', component: HomePageTComponent, canActivate: [AuthGuard] },
  { path: 'FormularioGallinas', component: FormGallinaTComponent, canActivate: [AuthGuard] },
  { path: 'TablaGallinas', component: TablePageTComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
