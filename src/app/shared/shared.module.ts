import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/atoms/input/input.component';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';



@NgModule({
  declarations: [
    
  
 
    InputComponent
  ],
  imports: [
   FormsModule,
    CommonModule
  ],
  exports: [
      

  InputComponent
  ]
})
export class SharedModule { }
