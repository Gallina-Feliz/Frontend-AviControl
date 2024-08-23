import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  } from "../app/features/salud-gallinas/pages/home/home.module";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { authInterceptor } from '../app/core/interceptor/auth-interceptor/auth.interceptor';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent
   
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: authInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
