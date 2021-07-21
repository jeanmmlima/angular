import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css']
  //inputs:[nomeCurso:nome]
})
export class InputPropertyComponent implements OnInit {

  /*propriedade do componente app-curso
  como receber tal informação via form? @Input
  asssim propriedade nome fica acessivel pelo seletor
  appp-curso

  @Input('nome') -> nome da propriedade chamada
  no template externo.
  nomeCurso propriedade local, realmente afetada

  Caso o nome da variável seja o memso utilizado
  como propriedade
  @Input() nome: string = '';
  */


  @Input('nome') nomeCurso: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
