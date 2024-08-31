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
import { TableGalponesComponent } from './components/molecules/table-galpones/table-galpones.component';



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
    TableGalponesComponent
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
    SidebarComponent,
    FormComponent,
    TableComponent,
    AlertFormComponent,
    Login2Component,
    LoginPageTComponent,
    HomePageTComponent,
    TablePageTComponent,
    LineChartComponent,
    PieChartComponent,
    FormGalponComponent


  ]
})
export class SharedModule { }
