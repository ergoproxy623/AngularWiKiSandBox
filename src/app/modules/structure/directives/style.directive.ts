import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from "@angular/core";

@Directive({
    selector: "[appStyle]"
})
export class StyleDirective {
    @Input() color: string;
    @Input() text: string;
    prevValue: string;
    @HostBinding("style.color") eColor = null;

    constructor(private el: ElementRef,
                private renderer: Renderer2) {
    }

    @HostListener("mouseenter") onEnter() {
        console.log(this.el.nativeElement);
        this.eColor = this.color;
    }

    @HostListener("click", ["$event.target"]) onClick() {
        if (this.el) {
            this.renderer.setStyle(this.el.nativeElement, "color", this.color);
            this.el.nativeElement.textContent = this.text;
        }
    }

}
