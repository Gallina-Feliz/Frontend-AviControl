import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/molecules/login/login.component';
import { ButtonsComponent } from './components/atoms/buttons/buttons.component';
import { AvatarComponent } from './components/atoms/avatar/avatar.component';
import { IconComponent } from './components/atoms/icon/icon.component';
import { InputsComponent } from './components/atoms/inputs/inputs.component';






@NgModule({
  declarations: [
    LoginComponent,
    ButtonsComponent,
    AvatarComponent,
    IconComponent,
    InputsComponent

  ],
  imports: [
  
    CommonModule
  ],
  exports: [
    LoginComponent,
    ButtonsComponent,
    AvatarComponent,
    IconComponent
  ]
})
export class SharedModule { }
