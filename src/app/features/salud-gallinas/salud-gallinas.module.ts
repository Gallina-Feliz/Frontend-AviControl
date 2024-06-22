import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaludGallinasRoutingModule } from './salud-gallinas-routing.module';
import { MonitoreoComponent } from './monitoreo/monitoreo.component';


@NgModule({
  declarations: [
    MonitoreoComponent
  ],
  imports: [
    CommonModule,
    SaludGallinasRoutingModule
  ]
})
export class SaludGallinasModule { }
