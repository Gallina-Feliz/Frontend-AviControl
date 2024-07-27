import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { NavbarComponent } from './components/molecules/navbar/navbar.component';

@NgModule({
  declarations: [
    
    NavbarComponent
  ],
  imports: [
    MatIconModule,
    CommonModule
  ],
  exports: [
    NavbarComponent
  ]

})
export class SharedModule { }
