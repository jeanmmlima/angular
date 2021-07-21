import { Directive, HostListener,ElementRef, Renderer2,HostBinding } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  //@hostlister(''nome_do_evento') nome_do_metodo_que_qeuro_dar(){}
  @HostListener('mouseenter') onMouseOver(){
   /*this._renderer.setStyle(
      this._elementRef.nativeElement,
      'background-color','yellow'
    );*/
    this.backgroundColor ='yellow';
  }

  @HostListener('mouseleave') onMouseLeave(){
    /*this._renderer.setStyle(
      this._elementRef.nativeElement,
      'background-color','white'
    );*/
    this.backgroundColor ='white';
  }

  @HostBinding('style.backgroundColor') get setColor(){
    //qualquer código extra
    return this.backgroundColor;
  }
  private backgroundColor: string;

  constructor(

  )
    /*
    private _elementRef: ElementRef,
    private _renderer: Renderer2
    )*/ {this.backgroundColor = 'yello';}
}
