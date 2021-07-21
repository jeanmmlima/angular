
/*
BrowserModule prepara aplicação para rodar em um browser
*/
import { BrowserModule } from '@angular/platform-browser';
/*
formularios do angular
*/
//import { FormsModule } from '@angular/forms';
/*
modulo que contem objeto http utilizado para requisições ajax.
*/
//import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';



//importa os componentes declarados no projeto
import { AppComponent } from './app.component';
//importar meu primeiro component
import { MeuPrimeiroComponent } from './meu-primero/meu-primeiro.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';

//importanto um Module - Cursos Module
import { CursosModule } from './cursos/cursos.module';
/*
Decorator NgModule já que a classe AppModule representa um modulo
Decorator é IMPORTADO (NgModule) de angular/core
*/
@NgModule({
  /*
  Análise de metadados
  Declarations: lista todos os componentes, direticas e pipes
  nesse modulo
  */
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    MeuPrimeiro2Component
  ],
  /*
  Imports: outros módulos que serão utilizados nesse modulo ou
  dentro de algum componente declarado nesse modulo
  */
  imports: [
    BrowserModule,
    CursosModule
  ],
  /*
  providers: colocamos os serviços que vão ficar disponiveis
  para todos os componentes declarados no módulo
  ex: guardas de rota, servicos de autenticacao
  */
  providers: [],
  /*
  bootstrap: componente que deve ser instanciado
  quando iniciar a aplicação - vai ser
  o componente que serve como CONTAINER
  SPA - aplicação de apenas uma pagina
  Nesse caso instanciamos a appComponent
  que instancia rotas e chama outras views
  VIEW PORT.
  */
  bootstrap: [AppComponent]
})

//exporta modulo como nome da classe
//convencao nome do arquivo: app.module.ts
export class AppModule { }
