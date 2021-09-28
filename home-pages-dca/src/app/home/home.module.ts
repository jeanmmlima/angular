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



@NgModule({
  declarations: [
    HomeComponent,
    MainInfoComponent,
    UsuarioDetalheComponent,
    UsuarioFormComponent
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
