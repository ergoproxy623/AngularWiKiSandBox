import { Directive, ElementRef, HostListener } from '@angular/core';
import { ResizeService } from '@app/shared/services/resize.service';

@Directive({
  selector: '[kbsBlockDotAndComa]'
})
export class BlockDotAndComaDirective {
  navigationKeys = ['.', ','];

  constructor(private resizeService: ResizeService, private el: ElementRef) {
  }

  @HostListener('keydown', ['$event']) onKeyDown(event) {
    const key = (event as KeyboardEvent).key;
    if (
      // Allow: Delete, Backspace, Tab, Escape, Enter, etc
      this.navigationKeys.indexOf(key) > -1
    ) {
      event.preventDefault();
    } else {
      return;
    }
  }

  @HostListener('textInput', ['$event']) textInput(event) {
    if (!this.resizeService.isAndroidWeb) {
      return;
    }
    const key = event.data;

    let val: string = this.el.nativeElement.value;
    const position = this.el.nativeElement.selectionStart;
    // Ensure that it is a number and stop the keypress
    if (this.navigationKeys.indexOf(key) > -1) {
      this.el.nativeElement.value = val.slice(0, position - 1);
    }
  }
}
