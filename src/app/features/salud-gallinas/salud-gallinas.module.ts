import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaludGallinasRoutingModule } from './salud-gallinas-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    HomePageComponent,
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    SaludGallinasRoutingModule,
    SharedModule
]
})
export class SaludGallinasModule { }
