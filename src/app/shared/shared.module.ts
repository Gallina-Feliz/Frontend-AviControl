import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlechaDespliegueComponent } from './components/atoms/flecha-despliegue/flecha-despliegue.component';
import { ButtonDismissComponent } from './components/atoms/button-dismiss/button-dismiss.component';
import { TablaSeleccionarComponent } from './components/molecules/tabla-seleccionar/tabla-seleccionar.component';
import { TablaGallinasComponent } from './components/molecules/tabla-gallinas/tabla-gallinas.component';
import { AlertComponent } from './components/organisms/alert/alert.component';
import { DescripcionGalponesComponent } from './components/molecules/descripcion-galpones/descripcion-galpones.component';
import { DescripcionGallinasComponent } from './components/molecules/descripcion-gallinas/descripcion-gallinas.component';
import { HeaderComponent } from './components/molecules/header/header.component';
import { SideNavComponent } from './components/molecules/side-nav/side-nav.component';




@NgModule({
  declarations: [
    FlechaDespliegueComponent,
    ButtonDismissComponent,
    TablaSeleccionarComponent,
    TablaGallinasComponent,
    AlertComponent,
    DescripcionGalponesComponent,
    DescripcionGallinasComponent,
    HeaderComponent,
    SideNavComponent
  ],
  imports: [
  
    CommonModule
  ],
  exports: [
    FlechaDespliegueComponent,
    ButtonDismissComponent,
    TablaSeleccionarComponent,
    TablaGallinasComponent,
    AlertComponent,
    DescripcionGalponesComponent,
    DescripcionGallinasComponent,
    HeaderComponent,
    SideNavComponent
  ]
})
export class SharedModule { }
