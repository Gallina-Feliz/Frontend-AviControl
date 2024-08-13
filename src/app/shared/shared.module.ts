import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { NavbarComponent } from './components/molecules/navbar/navbar.component';
import { SideNavbarContentComponent } from './components/molecules/side-navbar-content/side-navbar-content.component';

@NgModule({
  declarations: [
    
    NavbarComponent,
    SideNavbarContentComponent,

  ],
  imports: [
    MatIconModule,
    CommonModule
  ],
  exports: [
    NavbarComponent,
    SideNavbarContentComponent
  ]

})
export class SharedModule { }
