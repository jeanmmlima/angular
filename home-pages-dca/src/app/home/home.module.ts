import { NavMenuComponent } from './../nav-menu/nav-menu.component';
import { UsuarioDetalheResolver } from './guards/usuario-detalhe.resolver';
import { HomeRoutingModule } from './home.routing.module';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { HomeService } from './home.service';
import { HomeComponent } from './home.component';
import { MainInfoComponent } from './main-info/main-info.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioDetalheComponent } from './usuario-detalhe/usuario-detalhe.component';
import { SideInfoComponent } from '../side-info/side-info.component';
import { FooterInfoComponent } from '../footer-info/footer-info.component';
import { UsuarioInfosComponent } from './usuario-infos/usuario-infos.component';



@NgModule({
  declarations: [
    HomeComponent,
    MainInfoComponent,
    UsuarioDetalheComponent,
    UsuarioFormComponent,
    SideInfoComponent,
    UsuarioInfosComponent,
    //NavMenuComponent,
    //FooterInfoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule
  ],
  exports:[
    //HomeComponent
  ],
  providers:[HomeService, UsuarioDetalheResolver]
})
export class HomeModule { }
