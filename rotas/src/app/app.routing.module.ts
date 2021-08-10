import { CursosGuard } from './guards/cursos.guard';
import { AuthGuard } from './guards/auth.guard';
import { NgModule } from "@angular/core";

//import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';
//import { CursosComponent } from './cursos/cursos.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router'
import { ModuleWithProviders } from '@angular/core';

//import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';


const appRoutes: Routes = [
  //lazy load
  {path: 'cursos',
  loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule),
  canActivate: [AuthGuard]
  //canActivateChild:[CursosGuard]
  },
  {path: 'alunos',
  loadChildren: () => import('./alunos/alunos.module').then(m => m.AlunosModule),
  canActivate: [AuthGuard]
  },

  { path: 'login', component: LoginComponent},
  { path: '', component: HomeComponent,
  canActivate:[AuthGuard] }
  //{ path: 'cursos', component: CursosComponent},
  //{ path: 'curso/:id', component: CursoDetalheComponent},
  //{ path: 'naoEncontrado', component: CursoNaoEncontradoComponent}
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
