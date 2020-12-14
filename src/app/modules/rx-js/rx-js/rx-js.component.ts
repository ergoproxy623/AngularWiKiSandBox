import {Component, OnDestroy, OnInit} from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { debounce, debounceTime, delay, flatMap, map, tap } from 'rxjs/operators'

@Component({
  selector: 'app-rx-js',
  templateUrl: './rx-js.component.html',
  styleUrls: ['./rx-js.component.scss']
})
export class RxJsComponent implements OnInit, OnDestroy {

   subscriber: Subscription[] = [];

  constructor() { }

  ngOnInit() {
     this.showInterval();
     this.showOf();
  }

  showInterval() {
    const interval$ = interval(1000).subscribe( c => {
        console.log(c);
    });
    this.subscriber.push(interval$);
  }

  showOf() {
    const  of$ = of([1, 2 , 4])
    .pipe(
        tap( i => {
            console.log('tap ' + i);
            return i;
        }),
        flatMap( a => a),
        delay(2000),
        map( i =>  i),

    )
    .subscribe( c =>  console.log('of' + c));
    this.subscriber.push(of$);
  }


  ngOnDestroy(): void {

      this.subscriber.forEach( (i: Subscription) =>  i.unsubscribe() );
  }

}
