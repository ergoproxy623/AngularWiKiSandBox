import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appStructure]'
})
export class StructureDirective {
@Input('appStructure') set appStructure(cond: boolean) {
    // console.log(cond);
    // if (!cond) {
    //    this.viewCont.createEmbeddedView(this.templateRef);
    // } else {
    //     this.viewCont.clear();
    // }
}
  constructor(
      private templateRef: TemplateRef<any>,
      private viewCont: ViewContainerRef
  ) { }


}
