import {Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef, ViewRef} from '@angular/core';

@Directive({ selector: '[timeout]' })
export class TimeoutDirective<C = null> implements OnInit, OnDestroy {
  @Input()
  public timeout: number = null;

  private viewRef: ViewRef = null;

  constructor(private viewContainerRef: ViewContainerRef, private templateRef: TemplateRef<C>) {
  }

  public ngOnInit(): void {
    setTimeout(() => {
      this.viewRef = this.viewContainerRef.insert(
          this.templateRef.createEmbeddedView(null)
      );
    }, this.timeout);
  }

  public ngOnDestroy(): void {
    this.viewRef.destroy();
    this.viewRef = null;
  }
}
