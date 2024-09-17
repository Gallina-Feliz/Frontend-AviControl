import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UrlComponent } from './components/atoms/url/url.component';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';
import { H1Component } from './components/atoms/h1/h1.component';
import { SidebarComponent } from './components/molecules/sidebar/sidebar.component';

import { ButtonsComponent } from './components/atoms/buttons/buttons.component';
import { AvatarComponent } from './components/atoms/avatar/avatar.component';
import { IconComponent } from './components/atoms/icon/icon.component';
import { InputsComponent } from './components/atoms/inputs/inputs.component';
import { FormComponent } from './components/molecules/form/form.component';
import { TableComponent } from './components/molecules/table/table.component';
import { AlertFormComponent } from './components/organisms/alert-form/alert-form.component';
import { Login2Component } from './components/molecules/login2/login2.component';

import { LoginPageTComponent } from './components/templates/login-page-t/login-page-t.component';
import { HomePageTComponent } from './components/templates/home-page-t/home-page-t.component';
import { TablePageTComponent } from './components/templates/table-page-t/table-page-t.component';
import { FormGallinaTComponent } from './components/templates/form-gallina-t/form-gallina-t.component';
import { FormGalponComponent } from './components/molecules/form-galpon/form-galpon.component';

import { LineChartComponent } from './components/organisms/line-chart/line-chart.component';
import { PieChartComponent } from './components/organisms/pie-chart/pie-chart.component';
import { FormGalponTComponent } from './components/templates/form-galpon-t/form-galpon-t.component';
import { InicioComponent } from './components/molecules/inicio/inicio.component';
import { TableGalponPageTComponent } from './components/templates/table-galpon-page-t/table-galpon-page-t.component';
import { TableGalponesComponent } from './components/molecules/table-galpones/table-galpones.component';
import { EstadisticaGallinaTComponent } from './components/templates/estadistica-gallina-t/estadistica-gallina-t.component';
import { FormularioSaludGallinasComponent } from './components/molecules/formulario-salud-gallinas/formulario-salud-gallinas.component';
import { SaludGallinaPageTComponent } from './components/templates/salud-gallina-page-t/salud-gallina-page-t.component';
import { TablaSaludGComponent } from './components/molecules/tabla-salud-g/tabla-salud-g.component';
import { TablaSaludGallinasComponent } from './components/templates/tabla-salud-gallinas/tabla-salud-gallinas.component';
import { FormAlimentacionComponent } from './components/molecules/form-alimentacion/form-alimentacion.component';
import { AlimetacionPageTComponent } from './components/templates/alimetacion-page-t/alimetacion-page-t.component';
import { HistorialAlimentacionComponent } from './components/molecules/historial-alimentacion/historial-alimentacion.component';
import { HistorialAlimentacionTComponent } from './components/templates/historial-alimentacion-t/historial-alimentacion-t.component';
import { RazaComponent } from './components/molecules/raza/raza.component';
import { RegistrerComponent } from './components/molecules/registrer/registrer.component';
import { FormConteoComponent } from './components/molecules/form-conteo/form-conteo.component';
import { HuevosConteoTComponent } from './components/templates/huevos-conteo-t/huevos-conteo-t.component';
import { TipoHuevoTableComponent } from './components/molecules/tipo-huevo-table/tipo-huevo-table.component';
import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';
import { NotificacionesComponent } from './components/molecules/notificaciones/notificaciones.component';


@NgModule({
  declarations: [
    UrlComponent,
    H1Component,
    ButtonsComponent,
    AvatarComponent,
    IconComponent,
    InputsComponent,
    SidebarComponent,
    FormComponent,
    TableComponent,
    AlertFormComponent,
    Login2Component,
    LoginPageTComponent,
    HomePageTComponent,
    TablePageTComponent,
    FormGallinaTComponent,
    LineChartComponent,
    PieChartComponent,
    FormGalponComponent,
    FormGalponTComponent,
    InicioComponent,
    TableGalponPageTComponent,
    TableGalponesComponent,
    EstadisticaGallinaTComponent,
    FormularioSaludGallinasComponent,
    SaludGallinaPageTComponent,
    TablaSaludGComponent,
    TablaSaludGallinasComponent,
    FormAlimentacionComponent,
    AlimetacionPageTComponent,
    HistorialAlimentacionComponent,
    HistorialAlimentacionTComponent,
    RazaComponent,
    RegistrerComponent,
    FormConteoComponent,
    HuevosConteoTComponent,
    TipoHuevoTableComponent,
    MenuLateralComponent,
    NotificacionesComponent

  ],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [
    UrlComponent,
    H1Component,
    ButtonsComponent,
    AvatarComponent,
    IconComponent,
    InputsComponent,
    SidebarComponent,
    FormComponent,
    TableComponent,
    AlertFormComponent,
    Login2Component,
    LoginPageTComponent,
    HomePageTComponent,
    TablePageTComponent,
    FormGallinaTComponent,
    LineChartComponent,
    PieChartComponent,
    FormGalponComponent,
    FormGalponTComponent,
    InicioComponent,
    TableGalponPageTComponent,
    TableGalponesComponent,
    EstadisticaGallinaTComponent,
    FormularioSaludGallinasComponent,
    SaludGallinaPageTComponent,
    TablaSaludGComponent,
    TablaSaludGallinasComponent,
    FormAlimentacionComponent,
    AlimetacionPageTComponent,
    HistorialAlimentacionComponent,
    HistorialAlimentacionTComponent,
    RazaComponent,
    RegistrerComponent,
    FormConteoComponent,
    HuevosConteoTComponent,
    TipoHuevoTableComponent,
    MenuLateralComponent

  ]
})
export class SharedModule { }
