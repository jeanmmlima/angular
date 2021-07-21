import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { CursosService } from '../cursos/cursos.service';
import { CriarCursoComponent } from './criar-curso.component';

@NgModule({
  declarations: [
    CriarCursoComponent
  ],
  imports: [
    CommonModule
  ],
  //declarando serviço em providers, ficando disponivel
  //para toda a aplicação
  exports:[CriarCursoComponent],
  providers: [CursosService],
})
export class CriarCursoModule { }
