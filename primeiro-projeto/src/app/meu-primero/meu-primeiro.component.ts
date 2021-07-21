
//decorator component para informar ao angular que a classe
//declarada é um componente do angular - anotação: passa
//informações adicionais para o compilador

//metadados do component ({})
//decorator echemascript

//importar classe da diretiva component no pacote do core
import { Component } from '@angular/core';

@Component({
  //passar metadados do component
  //Angular baseado em boas práticas:
    //1. Web Components - criar componentes html customizados.
  //nome da tag html
  selector: 'meu-primeiro-component',
  templateUrl: './meu-primeiro.component.html'
  //couteudo que a tag apresentará quando chamada - template INLINE
  //template: `<p> Meu primeiro componente com Angular!</p>`
})
//exportar como modulo no arquivo "app.module.ts" com nome abaixo
export class MeuPrimeiroComponent { }
