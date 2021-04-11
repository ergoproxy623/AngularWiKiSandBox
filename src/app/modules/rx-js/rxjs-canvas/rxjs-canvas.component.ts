import {AfterViewInit, Component, ElementRef, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {fromEvent, Observable} from "rxjs";
import {map, pairwise, startWith, switchMap, takeUntil, withLatestFrom} from "rxjs/operators";

@Component({
    selector: 'app-rxjs-canvas',
    templateUrl: './rxjs-canvas.component.html',
    styleUrls: ['./rxjs-canvas.component.scss']
})
export class RxjsCanvasComponent implements OnInit, AfterViewInit {
    @ViewChild('canvas', {static: true}) canvas: ElementRef;
    @ViewChild('range', {static: true}) range: ElementRef;
    @ViewChild('color', {static: true}) color: ElementRef;
    mouseMove$: Observable<any>;
    mouseUp$: Observable<any>;
    mouseDown$: Observable<any>;
    mouseOut$: Observable<any>;
    range$: Observable<any>;
    color$: Observable<any>;

    constructor() {
    }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
        const canvas = this.canvas.nativeElement;
        const ctx = canvas.getContext('2d');
        const rect = canvas.getBoundingClientRect();
        const scale = window.devicePixelRatio;
        canvas.width = rect.width * scale;
        canvas.height = rect.height * scale;

        ctx.scale(scale, scale);
        this.mouseDown$ = fromEvent(canvas, 'mousedown');
        this.mouseUp$ = fromEvent(canvas, 'mouseup');
        this.mouseMove$ = fromEvent(canvas, 'mousemove');
        this.mouseOut$ = fromEvent(canvas, 'mouseout');
        this.range$ = fromEvent(this.range.nativeElement, 'input')
            .pipe(
                map( (e: any) => e.target.value),
                startWith(this.range.nativeElement.value),
            );
        this.color$ = fromEvent(this.color.nativeElement, 'input')
            .pipe(
                map( (e: any) => e.target.value),
                startWith(this.color.nativeElement.value),
            );

        const stream$ =  this.mouseDown$.pipe(
            withLatestFrom(this.range$, this.color$, (_, lineWidth, color) => {
                return {
                    lineWidth,
                    color,
                };
            }),
            switchMap( (options) => {
                return this.mouseMove$.pipe(
                    map(e => ({
                        x: e.offsetX,
                        y: e.offsetY,
                        options,
                    })),
                    pairwise(),
                    takeUntil(this.mouseUp$),
                    takeUntil(this.mouseOut$),
                );
            }),
        );

        stream$.subscribe( ([from, to]) => {
            const {lineWidth, color} = from.options;
            ctx.lineWidth = lineWidth;
            ctx.strokeStyle = color;
            ctx.beginPath();
            ctx.moveTo(from.x, from.y);
            ctx.lineTo(to.x, to.y);
            ctx.stroke();
        });
    }
}
