import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing.module';
import { HomeModule } from './home/home.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EnsinoComponent } from './ensino/ensino.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { ExtensaoComponent } from './extensao/extensao.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { FooterInfoComponent } from './footer-info/footer-info.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { SideInfoComponent } from './side-info/side-info.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guard/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    //SideInfoComponent,
    FooterInfoComponent,
    EnsinoComponent,
    PesquisaComponent,
    ExtensaoComponent,
    PaginaNaoEncontradaComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  //  HomeModule,
    AppRoutingModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
