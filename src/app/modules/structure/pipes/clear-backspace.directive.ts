import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '([formControlName], [formControl])[kbsClearBackspace]'
})
export class ClearBackspaceDirective {
  isFocused = false;

  @HostListener('focus', ['$event']) onFocus(e: FocusEvent) {
    this.isFocused = true;
  }

  @HostListener('keydown', ['$event']) onKeyDown(e: KeyboardEvent) {
    if (
      (e.target as HTMLInputElement).value &&
      (e.target as HTMLInputElement).value.length >= 10 &&
      this.isFocused &&
      (e.code === 'Backspace' ||
        e.code.includes('Digit') ||
        e.code.includes('Numpad'))
    ) {
      this.ngControl.reset('');
      (e.target as HTMLInputElement).value = '';
    }
    this.isFocused = false;
  }

  constructor(private readonly ngControl: NgControl) {
  }
}
