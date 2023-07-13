import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {EMPTY, from, fromEvent, interval, Observable, Subscription, throwError} from 'rxjs';
import {of} from 'rxjs/internal/observable/of';
import {
    catchError,
    debounce,
    debounceTime,
    delay,
    distinctUntilChanged, filter,
    flatMap,
    map, mergeMap,
    startWith,
    switchMap,
    tap,
    timeout
} from 'rxjs/operators'
import {GitService} from "../../../services/git-api/git.service";

@Component({
    selector: 'app-rx-js',
    templateUrl: './rx-js.component.html',
    styleUrls: ['./rx-js.component.scss']
})
export class RxJsComponent implements OnInit, OnDestroy, AfterViewInit {

    subscriber: Subscription[] = [];
    gitSearch$: Observable<any>;

    @ViewChild('search') search: ElementRef;

    constructor(private gitService: GitService
    ) {
    }

    ngOnInit() {
        this.showInterval();
        this.showOf();


    }

    ngAfterViewInit() {
        this.gitSearch$ = fromEvent(this.search.nativeElement, 'keyup').pipe(
            map( (e: KeyboardEvent) => {
                return e.target['value'];
            }),
            startWith(''),
            debounceTime(400),
            distinctUntilChanged(),
            filter( v => v.trim() ),
            switchMap(v =>  from(this.gitService.searchUsers(v)
                .pipe(
                catchError( () => EMPTY),
                )
            )),
            map( r => r.items ),
            timeout(20000),
            catchError( (err) => throwError(err))
        );

        this.gitSearch$.subscribe( r =>  {
        });

    }

    showInterval() {
        const interval$ = interval(1000).subscribe(c => {
            console.log(c);
        });
        this.subscriber.push(interval$);
    }

    showOf() {
        const of$ = of([1, 2, 4])
            .pipe(
                tap(i => {
                    console.log('tap ' + i);
                    return i;
                }),
                flatMap(a => a),
                delay(2000),
                map(i => i),
            )
            .subscribe(c => console.log('of' + c));
        this.subscriber.push(of$);
    }


    ngOnDestroy(): void {

        this.subscriber.forEach((i: Subscription) => i.unsubscribe());
    }

}
