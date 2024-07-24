import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlechaDespliegueComponent } from './components/atoms/flecha-despliegue/flecha-despliegue.component';
import { ButtonDismissComponent } from './components/atoms/button-dismiss/button-dismiss.component';
import { AlertComponent } from './components/organisms/alert/alert.component';

import { HeaderComponent } from './components/molecules/header/header.component';
import { SideNavComponent } from './components/molecules/side-nav/side-nav.component';




@NgModule({
  declarations: [
    AlertComponent,
    HeaderComponent,
    SideNavComponent
  ],
  imports: [
  
    CommonModule
  ],
  exports: [
    AlertComponent,
    HeaderComponent,
    SideNavComponent
  ]
})
export class SharedModule { }
