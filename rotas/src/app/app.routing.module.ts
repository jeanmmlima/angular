import { NgModule } from "@angular/core";

import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursosComponent } from './cursos/cursos.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router'
import { ModuleWithProviders } from '@angular/core';

import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: '', component: HomeComponent },
  { path: 'cursos', component: CursosComponent},
  { path: 'curso/:id', component: CursoDetalheComponent},
  { path: 'naoEncontrado', component: CursoNaoEncontradoComponent}
];

@NgModule({
  imports:[
    RouterModule.forRoot(appRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule{}
