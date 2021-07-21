import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosService } from './cursos.service';



@NgModule({
  declarations: [CursosComponent, CursoDetalheComponent],
  imports: [
    CommonModule
  ],
  /*
  exports: informa quais componentes, diretivas ou pipes
  queros exportar desse modulo
  por exemplo para usar no modulo RAIZ
  */
  exports:[
    CursosComponent
  ],
  //prover o serviço para o componente!
  providers: [CursosService]
})
export class CursosModule { }
