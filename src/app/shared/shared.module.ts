import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UrlComponent } from './components/atoms/url/url.component';


@NgModule({
  declarations: [
    UrlComponent
  ],
  imports: [
  
    CommonModule
  ],
  exports: [
    UrlComponent
  ]
})
export class SharedModule { }