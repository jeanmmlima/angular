import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { EnsinoComponent } from './ensino/ensino.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { ExtensaoComponent } from './extensao/extensao.component';
import { AuthGuard } from './guard/auth.guard';
import { LoginComponent } from './login/login.component';
//import { PageNotFoundComponent } from './';

const appRoutes: Routes = [
  { path: 'home',
  loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  //canActivateChild:[AuthGuard]
  },
  { path: 'ensino', component: EnsinoComponent },
  { path: 'pesquisa', component: PesquisaComponent },
  { path: 'extensao', component: ExtensaoComponent },
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PaginaNaoEncontradaComponent }
  //{ path: '**', component: PageNotFoundComponent },

  //{ path: 'path/:routeParam', component: MyComponent },
  //{ path: 'staticPath', component: ... },
  //{ path: '**', component: ... },
  //{ path: 'oldPath', redirectTo: '/staticPath' },
  //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
