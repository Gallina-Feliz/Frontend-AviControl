import { NgModule } from '@angular/core';
import { SharedModule } from '../app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './features/salud-gallinas/pages/home/login-page/login-page.component';
import { HomePageComponent} from "./features/salud-gallinas/pages/home/home-page/home-page.component";
import { AuthGuard } from '../app/core/guards/auth-guard/auth.guard';
import { LoginComponent } from './shared/components/molecules/login/login.component';
import { FormPageComponent } from "../app/features/salud-gallinas/pages/dashboard/form-page/form-page.component";
import { FormComponent } from "../app/shared/components/molecules/form/form.component";
import { TableComponent } from "../app/shared/components/molecules/table/table.component";


const routes: Routes = [
  { path: 'login', component: LoginComponent },           // De ambos códigos      // Del primer bloque
  { path: 'Home', component: HomePageComponent, canActivate: [AuthGuard] },
  { path: 'FormularioGallinas', component: FormComponent, canActivate: [AuthGuard] },
  { path: 'TablaGallinas', component: TableComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
