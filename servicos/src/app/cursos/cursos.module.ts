import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { CursosService } from './cursos.service';
import { CursosComponent } from './cursos.component';

@NgModule({
  declarations: [
    CursosComponent
  ],
  imports: [
    CommonModule
  ],
  //declarando serviço em providers, ficando disponivel
  //para toda a aplicação
  exports:[CursosComponent],
  providers: [CursosService],
})
export class CursosModule { }
