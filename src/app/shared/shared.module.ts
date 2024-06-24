import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuLateralComponent } from './components/molecules/menu-lateral/menu-lateral.component';
import { FlechaDespliegueComponent } from './components/atoms/flecha-despliegue/flecha-despliegue.component';
import { ButtonDismissComponent } from './components/atoms/button-dismiss/button-dismiss.component';
import { TablaSeleccionarComponent } from './components/molecules/tabla-seleccionar/tabla-seleccionar.component';
import { TablaGallinasComponent } from './components/molecules/tabla-gallinas/tabla-gallinas.component';
import { AlertComponent } from './components/organisms/alert/alert.component';




@NgModule({
  declarations: [
    MenuLateralComponent,
    FlechaDespliegueComponent,
    ButtonDismissComponent,
    TablaSeleccionarComponent,
    TablaGallinasComponent,
    AlertComponent
  ],
  imports: [
  
    CommonModule
  ],
  exports: [
    MenuLateralComponent,
    FlechaDespliegueComponent,
    ButtonDismissComponent,
    TablaSeleccionarComponent,
    TablaGallinasComponent,
    AlertComponent
  ]
})
export class SharedModule { }
