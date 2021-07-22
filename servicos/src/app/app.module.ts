import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CursosModule } from './cursos/cursos.module';

import { CursosService } from './cursos/cursos.service';
import { CriarCursoModule } from './criar-curso/criar-curso.module';

import { LogService } from './shared/log.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CriarCursoModule,
    CursosModule
  ],
  //declarando serviço em providers
  //fica disponivel para TODA a aplicação
  //caso nao seja necessario/desejado
  //declarar provider dentro do module do escopo de uso
  //providers: [CursosService],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
