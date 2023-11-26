import { Directive, ElementRef, HostListener } from '@angular/core';
import { ResizeService } from '@app/shared/services/resize.service';

@Directive({
  selector: '[kbsOnlyNumbers]'
})
export class OnlyNumbersDirective {
  navigationKeys = [
    'Backspace',
    'Delete',
    'Tab',
    'Escape',
    'Enter',
    'Home',
    'End',
    'ArrowLeft',
    'ArrowRight',
    'ArrowUp',
    'ArrowDown',
    'Clear',
    'Copy',
    'Paste',
    '.',
    ','
  ];

  constructor(private resizeService: ResizeService, private el: ElementRef) {
  }

  @HostListener('keydown', ['$event']) onKeyDown(event) {
    const key = this.resizeService.isAndroidWeb
      ? event.target.value?.length === 1
        ? event.target.value
        : event.target.value.slice(-1)
      : (event as KeyboardEvent).key;
    if (
      // Allow: Delete, Backspace, Tab, Escape, Enter, etc
      this.navigationKeys.indexOf(key) > -1 ||
      (key === 'a' && event.ctrlKey === true) || // Allow: Ctrl+A
      (key === 'c' && event.ctrlKey === true) || // Allow: Ctrl+C
      (key === 'v' && event.ctrlKey === true) || // Allow: Ctrl+V
      (key === 'x' && event.ctrlKey === true) || // Allow: Ctrl+X
      (key === 'a' && event.metaKey === true) || // Cmd+A (Mac)
      (key === 'c' && event.metaKey === true) || // Cmd+C (Mac)
      (key === 'v' && event.metaKey === true) || // Cmd+V (Mac)
      (key === 'x' && event.metaKey === true) // Cmd+X (Mac)
    ) {
      return; // let it happen, don't do anything
    }
    // Ensure that it is a number and stop the keypress
    if (key === ' ' || isNaN(Number(key))) {
      event.preventDefault();
    }
  }

  @HostListener('input', ['$event']) textInput(event) {
    if (!this.resizeService.isAndroidWeb) {
      return;
    }
    const key = event.data;
    let val: string = this.el.nativeElement.value;
    const position = this.el.nativeElement.selectionStart;
    if (
      // Allow: Delete, Backspace, Tab, Escape, Enter, etc
      this.navigationKeys.indexOf(key) > -1 ||
      (key === 'a' && event.ctrlKey === true) || // Allow: Ctrl+A
      (key === 'c' && event.ctrlKey === true) || // Allow: Ctrl+C
      (key === 'v' && event.ctrlKey === true) || // Allow: Ctrl+V
      (key === 'x' && event.ctrlKey === true) || // Allow: Ctrl+X
      (key === 'a' && event.metaKey === true) || // Cmd+A (Mac)
      (key === 'c' && event.metaKey === true) || // Cmd+C (Mac)
      (key === 'v' && event.metaKey === true) || // Cmd+V (Mac)
      (key === 'x' && event.metaKey === true) // Cmd+X (Mac)
    ) {
      return; // let it happen, don't do anything
    }
    // Ensure that it is a number and stop the keypress
    if (key === ' ' || isNaN(Number(key))) {
      this.el.nativeElement.value = val.slice(0, position - 1);
    }
  }
}
