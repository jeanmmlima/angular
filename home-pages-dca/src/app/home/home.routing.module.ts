import { UsuarioInfosComponent } from './usuario-infos/usuario-infos.component';
import { UsuarioDetalheResolver } from './guards/usuario-detalhe.resolver';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { UsuarioDetalheComponent } from './usuario-detalhe/usuario-detalhe.component';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainInfoComponent } from './main-info/main-info.component';

const usuariosRoutes = [
  { path: '', component: MainInfoComponent,
  /*children:[
    { path: ':id', component: UsuarioDetalheComponent,
      resolve: { usuario: UsuarioDetalheResolver}
    },
    { path: ':id/editar', component: UsuarioFormComponent }
  ]*/},
  { path: ':id', component: UsuarioDetalheComponent,
  resolve: { usuario: UsuarioDetalheResolver},
  children:[
    { path: ':id/editar', component: UsuarioFormComponent }
  ]
},
{ path: ':id/editar', component: UsuarioInfosComponent,
  resolve: { usuario: UsuarioDetalheResolver} }
];

@NgModule({
  imports: [RouterModule.forChild(usuariosRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
