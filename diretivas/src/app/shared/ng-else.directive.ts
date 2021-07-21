import { Directive, Input,
TemplateRef,ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngElse]'
})
export class NgElseDirective {

  //escutar a input toda vez que for modificado(set)
  /*
  Usa duas classes:templateRef fazendo referencia ao template
  e View Container Ref: referencia ao container da view.
  1. ao proprio template. 2. ao conteudoq que se quer renderizar
  */
  @Input() set ngElse(condition: boolean){
    if (!condition){
      //renderiza o conteudo se a condição for false
      this._viewContainerRef.createEmbeddedView(
        this._templateRef
      );
    }else {
      //se a diretiva é verdadeira, não pode renderizar mais
      //destruindo o elemento
      this._viewContainerRef.clear();

    }
  }

  constructor(
//injeção de dependencia:
//usar diretiva em qualquer tag <any>
private _templateRef: TemplateRef<any>,
private _viewContainerRef: ViewContainerRef

  ) {


  }

}
