import { UsuarioDetalheResolver } from './guards/usuario-detalhe.resolver';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { UsuarioDetalheComponent } from './usuario-detalhe/usuario-detalhe.component';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const usuariosRoutes = [
  { path: '', component: HomeComponent,
  children:[
    { path: ':id', component: UsuarioDetalheComponent,
      resolve: { usuario: UsuarioDetalheResolver}
    },
    { path: ':id/editar', component: UsuarioFormComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(usuariosRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
