import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UrlComponent } from './components/atoms/url/url.component';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';
import { H1Component } from './components/atoms/h1/h1.component';
import { SidebarComponent } from './components/molecules/sidebar/sidebar.component';




@NgModule({
  declarations: [
    UrlComponent,
    H1Component,
    SidebarComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [
    UrlComponent,
    H1Component,
    SidebarComponent
  ]
})
export class SharedModule { }
