import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuLateralComponent } from './components/molecules/menu-lateral/menu-lateral.component';
import { FlechaDespliegueComponent } from './components/atoms/flecha-despliegue/flecha-despliegue.component';




@NgModule({
  declarations: [
    MenuLateralComponent,
    FlechaDespliegueComponent
  ],
  imports: [
  
    CommonModule
  ],
  exports: [
    MenuLateralComponent,
    FlechaDespliegueComponent
  ]
})
export class SharedModule { }
