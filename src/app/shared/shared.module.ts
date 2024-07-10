import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuLateralComponent } from './components/molecules/menu-lateral/menu-lateral.component';
import { FlechaDespliegueComponent } from './components/atoms/flecha-despliegue/flecha-despliegue.component';
import { UrlComponent } from './components/atoms/404/url/url.component';
import { H1Component } from './components/atoms/404/h1/h1.component';
import { DecriptionComponent } from './components/atoms/404/decription/decription.component';




@NgModule({
  declarations: [
    MenuLateralComponent,
    FlechaDespliegueComponent,
    UrlComponent,
    H1Component,
    DecriptionComponent
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
