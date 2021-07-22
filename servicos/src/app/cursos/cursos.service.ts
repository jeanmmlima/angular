import { LogService } from './../shared/log.service';
import { EventEmitter } from '@angular/core';

//para tornar a classe injetável: decorator Injectable
//preciso dizer também que essa classe é um PROVIDER
//em app.module.ts

import { Injectable } from "@angular/core";

@Injectable()
export class CursosService{

  //evento para comunicar aos componentes que o curso foi criado;
  emitirCursoCriado = new EventEmitter<string>();

  /*
  estático - nao precisa a instancia da classe para acessar
  o atributo!!!
  */
  static criouNovoCurso = new EventEmitter<string>();


  private cursos: string[] = ['Angular 2', 'Java', 'Ionic'];

  constructor(private logService: LogService){
    console.log('CursosService')
  }

  getCursos(){
    this.logService.consoleLog('Obtendo lista de cursos');
    return this.cursos;
  }

  addCurso(curso: string){
    //this.logService.consoleLog('Criando um novo curso'+curso);
    this.logService.consoleLog(`Criando um novo curso ${curso}`);
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
    //acesso sem o this quando é estático;
    CursosService.criouNovoCurso.emit(curso);
  }

}
