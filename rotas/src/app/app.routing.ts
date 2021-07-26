import { CursosComponent } from './cursos/cursos.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router'
import { ModuleWithProviders } from '@angular/core';


const APP_ROUTES: Routes = [
  { path: 'login', component: LoginComponent},
  { path: '', component: HomeComponent },
  { path: 'cursos', component: CursosComponent}
];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(APP_ROUTES);
