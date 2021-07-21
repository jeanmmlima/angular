import { Component, OnInit,Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor: number = 0;

  //emissor de eventos! emite evento para componente pai!
  //no caso é o data binding
  @Output() mudouValor = new EventEmitter();

  incrementa(){
    console.log(this.campoValorInput);
    //this.valor++;
    this.campoValorInput.nativeElement.value++;
    this.mudouValor.emit({novoValor: this.valor});
  }

  decrementa(){
    //this.valor--;
    this.campoValorInput.nativeElement.value--;
    this.mudouValor.emit({novoValor: this.valor});
  }

  //acessando variavel
  //variavel do template e variavel do componnet
  @ViewChild('campoInput') campoValorInput: ElementRef;



  constructor() { }

  ngOnInit(): void {
  }

}
