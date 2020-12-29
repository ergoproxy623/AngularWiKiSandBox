import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appResolve]'
})
export class ResolveDirective {

  constructor(public containerRef: ViewContainerRef) { }

}
