import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuLateralComponent } from './components/molecules/menu-lateral/menu-lateral.component';
import { FlechaDespliegueComponent } from './components/atoms/flecha-despliegue/flecha-despliegue.component';
import { UrlComponent } from './components/atoms/404/url/url.component';
import { H1Component } from './components/atoms/404/h1/h1.component';
import { DecriptionComponent } from './components/atoms/404/decription/decription.component';
import { H2Component } from './components/atoms/home/h2/h2.component';
import { PComponent } from './components/atoms/home/p/p.component';
import { ButtonComponent } from './components/atoms/home/button/button.component';
import { HomeComponent } from './components/molecules/home/home.component';
import { h1homeComponent } from './components/atoms/home/h1home/h1home.component';
import { H1adminComponent } from './components/atoms/homeadmin/h1admin/h1admin.component';

import { LogoadminComponent } from './components/atoms/homeadmin/logoadmin/logoadmin.component';
import { PadminComponent } from './components/atoms/homeadmin/padmin/padmin.component';
import { AdminComponent } from './components/molecules/admin/admin.component';




@NgModule({
  declarations: [
    MenuLateralComponent,
    FlechaDespliegueComponent,
    UrlComponent,
    H1Component,
    DecriptionComponent,
    PComponent,
    ButtonComponent,
    HomeComponent,
    h1homeComponent,
    H1adminComponent,
    LogoadminComponent,
    PadminComponent,
    H2Component,
    AdminComponent 
  ],
  imports: [
  
    CommonModule
  ],
  exports: [
    MenuLateralComponent,
    FlechaDespliegueComponent,
    UrlComponent,
    H1Component,
    DecriptionComponent,
    H2Component,
    PComponent,
    ButtonComponent,
    HomeComponent,
    h1homeComponent,
    AdminComponent 
]})
export class SharedModule { }
