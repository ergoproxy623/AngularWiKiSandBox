import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {
  @Input() color: string;
  @Input() text: string;
  prevValue: string;

  constructor(private el: ElementRef,
              private renderer: Renderer2) {
  }

    @HostListener('click', ['$event.target']) onClick = event => {
        if (event) {
            this.prevValue = event.textContent;
             if (this.prevValue !== this.text) {
                 this.renderer.setStyle(this.el.nativeElement, 'color', this.color);
                 event.textContent = this.text;
             }
        }
    }

}
