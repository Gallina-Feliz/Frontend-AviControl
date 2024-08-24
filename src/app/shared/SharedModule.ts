import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AvatarComponent } from "./components/atoms/avatar/avatar.component";
import { ButtonsComponent } from "./components/atoms/buttons/buttons.component";
import { H1Component } from "./components/atoms/h1/h1.component";
import { IconComponent } from "./components/atoms/icon/icon.component";
import { InputsComponent } from "./components/atoms/inputs/inputs.component";
import { UrlComponent } from "./components/atoms/url/url.component";
import { DiagramaComponent } from './components/molecules/diagrama/diagrama.component';
import { FormComponent } from "./components/molecules/form/form.component";
import { LoginComponent } from "./components/molecules/login/login.component";
import { SidebarComponent } from "./components/molecules/sidebar/sidebar.component";
import { TableComponent } from "./components/molecules/table/table.component";

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
    DiagramaComponent
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
    DiagramaComponent
  ]
})
export class SharedModule {
}
