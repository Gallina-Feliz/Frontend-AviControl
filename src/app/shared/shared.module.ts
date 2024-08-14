import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/molecules/login/login.component';
import { ButtonsComponent } from "./components/atoms/buttons/buttons.component";
import { AvatarComponent } from "./components/atoms/avatar/avatar.component";
import {IconComponent} from "./components/atoms/icon/icon.component";






@NgModule({
  declarations: [
    
  
  ButtonsComponent,
  AvatarComponent,
  IconComponent,
    LoginComponent
  ],
  imports: [
  
    CommonModule
  ],
  exports: [
    ButtonsComponent,
    AvatarComponent,
    IconComponent,
    LoginComponent
  ]
})
export class SharedModule { }
