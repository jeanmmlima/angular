import { AppRoutingModule } from './app.routing.module';
import { HomeModule } from './home/home.module';
import { FormsModule } from '@angular/forms';
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

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    //SideInfoComponent,
    FooterInfoComponent,
    EnsinoComponent,
    PesquisaComponent,
    ExtensaoComponent,
    PaginaNaoEncontradaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  //  HomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
