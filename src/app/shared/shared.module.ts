import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';
import { H2Component } from './components/atoms/h2/h2.component';




@NgModule({
  declarations: [
  H2Component
  ],
  imports: [
   FormsModule,
    CommonModule
  ],
  exports: [
      H2Component
  ]
})
export class SharedModule { }
