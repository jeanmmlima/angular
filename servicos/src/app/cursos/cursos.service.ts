
//para tornar a classe injetável: decorator Injectable
//preciso dizer também que essa classe é um PROVIDER
//em app.module.ts

import { Injectable } from "@angular/core";

@Injectable()
export class CursosService{

  constructor(){
    console.log('CursosService')
  }

  getCursos(){
    return ['Angular 2','Java','Ionic'];
  }

}
