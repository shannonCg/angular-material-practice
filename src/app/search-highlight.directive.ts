import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appSearchHighlight]',
})
export class SearchHighlightDirective implements OnChanges{

  @Input()
  searchWord: string = '';

  @Input()
  text: string = '';

  @Input()
  highlightClass: string = '';

  constructor(
    private el: ElementRef,
    private render: Renderer2
  ) { 
  }

  ngOnChanges(changes: SimpleChanges): void {
    const word = this.text;
    const highlightWord = changes.searchWord.currentValue;
    const applyClass = this.highlightClass;
    const formatTexts = this.highlightText(word, highlightWord, applyClass);
    // console.log(highlightWord); 
    
    if(this.el.nativeElement.children.length == 0){ //因為有重複
      if(formatTexts.length >= 1){
        const t1 = this.render.createText(formatTexts[0]);
        this.render.appendChild(this.el.nativeElement, t1);
      }
      
      if (formatTexts.length == 3){
        const t2 = this.render.createText(formatTexts[1]);
        const span = this.render.createElement('span');
        this.render.addClass(span, applyClass);
        this.render.appendChild(span, t2);
        this.render.appendChild(this.el.nativeElement, span);
  
        const t3 = this.render.createText(formatTexts[2]);
        this.render.appendChild(this.el.nativeElement, t3);
      }
    }
  }

  private highlightText(word: string, highlightWord: string, applyClass: string):string[]{
    if(highlightWord){
      return [word.substring(0, word.indexOf(highlightWord)), highlightWord, word.substring(word.indexOf(highlightWord)+highlightWord.length)];
    }else{
      return [word];
    }
  }
}
