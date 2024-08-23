import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { FormPageComponent } from './form-page/form-page.component';
import { TablaPageComponent } from './tabla-page/tabla-page.component';
import { SharedModule } from "../../../../shared/shared.module";


@NgModule({
  declarations: [
    FormPageComponent,
    TablaPageComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
]
})
export class DashboardModule { }
