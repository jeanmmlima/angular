import { AfterContentInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})

//implementar as interfaces utilizadas!
//boa prática do angular
//interfaces de CICLO DE VIDA DO ANGULAR
export class CicloComponent implements OnInit,
OnChanges, OnDestroy, AfterContentInit, DoCheck{

  @Input() valorInicial: number = 10;

  constructor() {
    this.log('Constructor');
  }

  /*
  INTERFACES DE CICLO DE VIDA DO ANGULAR

  ngOnInit()
  Normalmente dentro desse método chamamos os servicos do servidor
  para preencher o componente com dados
  por isso já fica com padrão.

  Outros métodos importantes:
  ngOnChanges - quando trabalhamos com input property e ele muda
  ngOnDestroy - destruir a inscrição no observable para liberar a memoria
  */
  ngOnInit(): void {
    this.log('OnInit');
  }

  ngOnChanges() {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.log('ngOnChanges');
  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    this.log('ngDoCheck');

  }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    this.log('ngAfterContentInit');

  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.log('ngOnDestroy');
  }

  private log(hook: string){
    console.log(hook);
  }

}
