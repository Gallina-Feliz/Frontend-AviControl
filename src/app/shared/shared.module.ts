import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';
import { H1Component } from './components/atoms/h1/h1.component';




@NgModule({
  declarations: [
  H1Component
  ],
  imports: [
   FormsModule,
    CommonModule
  ],
  exports: [
      H1Component
  ]
})
export class SharedModule { }
