import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {




  /*
  constructor() {

    cria instancia da classe cursoService
    mas não é o mais adequado, dependendo da complexidade
    das funções da classe serviço

    O ideal é usar injeção de dependencia:
     cria a instancia AUTOMATICAMENTE!!!

   this.cursosService = new CursosService();

  }
  */
 /*cursos component devem chamar um método da classs
  de serviços.
  */
  cursos: string[] = [];
  //comentada caso use o private no construtor
  cursosService: CursosService;

  //COM INJEÇÃO DE DEPENDENCIA
  constructor(_cursoService: CursosService){
    this.cursosService = _cursoService;
  }

  /*
  quando lidamos com dados, é interessante usar o ngOnInit()
  */
  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();
  }

}
