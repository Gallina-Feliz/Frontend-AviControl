import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuLateralComponent } from './components/molecules/menu-lateral/menu-lateral.component';
import { FlechaDespliegueComponent } from './components/atoms/flecha-despliegue/flecha-despliegue.component';
import { ButtonDismissComponent } from './components/atoms/button-dismiss/button-dismiss.component';




@NgModule({
  declarations: [
    MenuLateralComponent,
    FlechaDespliegueComponent,
    ButtonDismissComponent
  ],
  imports: [
  
    CommonModule
  ],
  exports: [
    MenuLateralComponent,
    FlechaDespliegueComponent,
    ButtonDismissComponent
  ]
})
export class SharedModule { }
