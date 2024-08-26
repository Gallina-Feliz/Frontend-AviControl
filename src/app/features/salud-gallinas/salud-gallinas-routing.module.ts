import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AuthGuard } from '../../core/guards/auth-guard/auth.guard';

const routes: Routes = [
  {path: 'login', component: LoginPageComponent},

  {path: 'Home', component: HomePageComponent , canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaludGallinasRoutingModule { }
