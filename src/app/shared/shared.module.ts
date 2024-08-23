import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UrlComponent } from './components/atoms/url/url.component';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';
import { H1Component } from './components/atoms/h1/h1.component';
import { SidebarComponent } from './components/molecules/sidebar/sidebar.component';

import { LoginComponent } from './components/molecules/login/login.component';
import { ButtonsComponent } from './components/atoms/buttons/buttons.component';
import { AvatarComponent } from './components/atoms/avatar/avatar.component';
import { IconComponent } from './components/atoms/icon/icon.component';
import { InputsComponent } from './components/atoms/inputs/inputs.component';
import { FormComponent } from './components/molecules/form/form.component';
import { TableComponent } from './components/molecules/table/table.component';
import { AlertFormComponent } from './components/organisms/alert-form/alert-form.component';

@NgModule({
  declarations: [

    UrlComponent,
    H1Component,
    LoginComponent,
    ButtonsComponent,
    AvatarComponent,
    IconComponent,
    InputsComponent,
    SidebarComponent,
    FormComponent,
    TableComponent,
    AlertFormComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [
    UrlComponent,
    H1Component,
    LoginComponent,
    ButtonsComponent,
    AvatarComponent,
    IconComponent,
    SidebarComponent,
    FormComponent,
    TableComponent,
    AlertFormComponent
  ]
})
export class SharedModule { }
