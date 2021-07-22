import { Component, OnInit } from '@angular/core';

import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-receber-curso-criado',
  templateUrl: './receber-curso-criado.component.html',
  styleUrls: ['./receber-curso-criado.component.scss']
})
export class ReceberCursoCriadoComponent implements OnInit {

  /*
  Usa a mesma instancia de serviço usada pela seu
  componente pai, no caso criar-curso module
  já que essa classe (receberCurso) está declarada
  no NgModule de criar-curso
  */
  curso: string;

  constructor(private cursoService: CursosService) {
    this.curso = "";
   }

  ngOnInit(): void {
    this.cursoService.emitirCursoCriado.subscribe(
      cursoCriado => this.curso = cursoCriado
    )
  }

}
