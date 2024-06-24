import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module'; // Ajusta la ruta según corresponda
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MenuLateralComponent } from './shared/components/molecules/menu-lateral/menu-lateral.component';
// import { MenuLateralComponent } from './shared/components/molecules/menu-lateral/menu-lateral.component';


@NgModule({
  declarations: [
    AppComponent,
    // MenuLateralComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


