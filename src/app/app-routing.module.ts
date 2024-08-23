import { NgModule } from '@angular/core';
import { SharedModule } from '../app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './features/salud-gallinas/pages/home/login-page/login-page.component';
import { HomePageComponent} from "./features/salud-gallinas/pages/home/home-page/home-page.component";

const routes: Routes = [
  {
    path: 'login',
    component : LoginPageComponent
  },
  {
    path: 'home',
    component: HomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
