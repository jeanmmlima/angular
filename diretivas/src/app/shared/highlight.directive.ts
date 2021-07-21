import { Directive,HostListener,Renderer2,
  ElementRef,HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') onMouseOver(){
     this.backgroundColor = this.highlightColor;
   }

   @HostListener('mouseleave') onMouseLeave(){
     this.backgroundColor = this.defaultColor;
   }

   //sempe que modifica a variavel backgroundColor
   //mudo a propriedade associada a variável
   //no caso, style.back...
   @HostBinding('style.backgroundColor') backgroundColor: string;

   @Input() defaultColor: string = 'white';
   @Input() highlightColor: string = 'yellow';
   //seletor com mesmo nome da diretiva
   //@Input(highlight) highlightColor: string = 'yellow';

  constructor() {
    this.backgroundColor = '';
  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.backgroundColor = this.defaultColor;

  }

}
