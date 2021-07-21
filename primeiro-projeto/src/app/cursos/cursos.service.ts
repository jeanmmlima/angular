import { Injectable } from '@angular/core';

/*
classe com métodos que vão realizar lógica
e acessar serviços.
Lógica no componente só para mostrar informações ou
chamar funcionalidades de acordo com o uso

Classe cursos precisa ser importada no component
para que o component tenha acesso a seus métodos
*/

/*
Decortaro Injectable - indica que a classe
pode ser "injetada" isto é a injeção de dependencia.
fazer com que o angular forneça uma instância de
uma classe sem se preocupar em instanciar
manualmente uma classe, por exemplo, uma classe
de serviço - injeção via construtor!!
*/
@Injectable({
  providedIn: 'root'
})
export class CursosService {



  constructor() { }

  getCursos(){
    return ['Java','Ext JS', 'Angular', 'NodeJs'];
  }
}
