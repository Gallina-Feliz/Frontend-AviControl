import { NgModule } from '@angular/core';
import { SharedModule } from '../app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './features/salud-gallinas/pages/home/login-page/login-page.component';


const routes: Routes = [
  {
    path: 'login',
    component : LoginPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
