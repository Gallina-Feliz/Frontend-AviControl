import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UrlComponent } from './components/atoms/404/url/url.component';
import { H1Component } from './components/atoms/404/h1/h1.component';
import { DecriptionComponent } from './components/atoms/404/decription/decription.component';
import { H2Component } from './components/atoms/home/h2/h2.component';
import { PComponent } from './components/atoms/home/p/p.component';
import { ButtonComponent } from './components/atoms/home/button/button.component';
import { HomeComponent } from './components/molecules/home/home.component';
import { h1homeComponent } from './components/atoms/home/h1home/h1home.component';
import { H1adminComponent } from './components/atoms/homeadmin/h1admin/h1admin.component';

import { LogoadminComponent } from './components/atoms/homeadmin/logoadmin/logoadmin.component';
import { PadminComponent } from './components/atoms/homeadmin/padmin/padmin.component';
import { AdminComponent } from './components/molecules/admin/admin.component';
import { Parte1Component } from './components/atoms/descripgallina/parte1/parte1.component';
import { H2desComponent } from './components/atoms/descripgallina/h2des/h2des.component';
import { H3regristroComponent } from './components/atoms/descripgallina/h3regristro/h3regristro.component';
import { H3moniComponent } from './components/atoms/descripgallina/h3moni/h3moni.component';
import { H3produComponent } from './components/atoms/descripgallina/h3produ/h3produ.component';
import { H3accesoComponent } from './components/atoms/descripgallina/h3acceso/h3acceso.component';
import { H3analisisComponent } from './components/atoms/descripgallina/h3analisis/h3analisis.component';
import { DescripcionGallinaComponent } from './components/molecules/descripcion-gallina/descripcion-gallina.component';
import { IntroComponent } from './components/atoms/descrigalpones/intro/intro.component';
import { H2proceComponent } from './components/atoms/descrigalpones/h2proce/h2proce.component';
import { H3instaComponent } from './components/atoms/descrigalpones/h3insta/h3insta.component';
import { H3resComponent } from './components/atoms/descrigalpones/h3res/h3res.component';
import { H3evaComponent } from './components/atoms/descrigalpones/h3eva/h3eva.component';
import { H3aliComponent } from './components/atoms/descrigalpones/h3ali/h3ali.component';
import { H3accComponent } from './components/atoms/descrigalpones/h3acc/h3acc.component';
import { H3tomaComponent } from './components/atoms/descrigalpones/h3toma/h3toma.component';
import { H3beneComponent } from './components/atoms/descrigalpones/h3bene/h3bene.component';
import { DescrigalponesComponent } from './components/molecules/descrigalpones/descrigalpones.component';
import { LoginComponent } from './components/molecules/login/login.component';
import { RDstateVirutaComponent } from './components/atoms/radioButtons/rdstate-viruta/rdstate-viruta.component';
import { RDstateViruta2Component } from './components/atoms/radioButtons/rdstate-viruta2/rdstate-viruta2.component';
import { RDstateCubiculosComponent } from './components/atoms/radioButtons/rdstate-cubiculos/rdstate-cubiculos.component';
import { RDstateCubiculos2Component } from './components/atoms/radioButtons/rdstate-cubiculos2/rdstate-cubiculos2.component';
import { RDstateComederosComponent } from './components/atoms/radioButtons/rdstate-comederos/rdstate-comederos.component';
import { RDstateComederos2Component } from './components/atoms/radioButtons/rdstate-comederos2/rdstate-comederos2.component';
import { RDstateComidaComponent } from './components/atoms/radioButtons/rdstate-comida/rdstate-comida.component';
import { RDstateComida2Component } from './components/atoms/radioButtons/rdstate-comida2/rdstate-comida2.component';
import { RDstateAguaComponent } from './components/atoms/radioButtons/rdstate-agua/rdstate-agua.component';
import { RDstateAgua2Component } from './components/atoms/radioButtons/rdstate-agua2/rdstate-agua2.component';
import { DivFormStateGallinaComponent } from './components/molecules/radioButtons/div-form-state-gallina/div-form-state-gallina.component';
import { FormStateGallinasComponent } from './components/organisms/radioButtons/form-state-gallinas/form-state-gallinas.component';
import { FormStateGallinasTComponent } from './components/templates/radioButtons/form-state-gallinas-t/form-state-gallinas-t.component';




@NgModule({
  declarations: [

    UrlComponent,
    H1Component,
    DecriptionComponent,
    PComponent,
    ButtonComponent,
    HomeComponent,
    h1homeComponent,
    H1adminComponent,
    LogoadminComponent,
    PadminComponent,
    H2Component,
    AdminComponent,
    Parte1Component,
    H2desComponent,
    H3regristroComponent,
    H3moniComponent,
    H3produComponent,
    H3accesoComponent,
    H3analisisComponent,
    DescripcionGallinaComponent,
    IntroComponent,
    H2proceComponent,
    H3instaComponent,
    H3resComponent,
    H3evaComponent,
    H3aliComponent,
    H3accComponent,
    H3tomaComponent,
    H3beneComponent,
    DescrigalponesComponent,
    LoginComponent,
    RDstateVirutaComponent,
    RDstateViruta2Component,
    RDstateCubiculosComponent,
    RDstateCubiculos2Component,
    RDstateComederosComponent,
    RDstateComederos2Component,
    RDstateComidaComponent,
    RDstateComida2Component,
    RDstateAguaComponent,
    RDstateAgua2Component,
    DivFormStateGallinaComponent,
    FormStateGallinasComponent,
    FormStateGallinasTComponent 
  ],
  imports: [
  
    CommonModule
  ],
  exports: [
    UrlComponent,
    H1Component,
    DecriptionComponent,
    H2Component,
    PComponent,
    ButtonComponent,
    HomeComponent,
    h1homeComponent,
    AdminComponent,
    Parte1Component,
    H2desComponent,
    H3regristroComponent,
    H3moniComponent,
    H3produComponent,
    H3accesoComponent,
    H3analisisComponent,
    DescripcionGallinaComponent,
    IntroComponent,
    H2proceComponent,
    H3instaComponent,
    H3resComponent,
    H3evaComponent,
    H3aliComponent,
    H3accComponent,
    H3tomaComponent,
    H3beneComponent,
    DescrigalponesComponent,
    LoginComponent,
    RDstateVirutaComponent,
    RDstateViruta2Component,
    RDstateCubiculosComponent,
    RDstateCubiculos2Component,
    RDstateComederosComponent,
    RDstateComederos2Component,
    RDstateComidaComponent,
    RDstateComida2Component,
    RDstateAguaComponent,
    RDstateAgua2Component,
    DivFormStateGallinaComponent,
    FormStateGallinasComponent 
]})

export class SharedModule { }
