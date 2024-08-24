import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/SharedModule';
import { GraficaRadioComponent } from './shared/components/molecules/grafica-radio/grafica-radio.component';
import { GraficaBarrasComponent } from './shared/components/molecules/grafica-barras/grafica-barras.component';



@NgModule({
  declarations: [
    AppComponent,
    GraficaRadioComponent,
    GraficaBarrasComponent,

   
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
