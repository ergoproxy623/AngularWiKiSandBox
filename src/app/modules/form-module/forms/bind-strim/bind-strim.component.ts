import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-bind-strim',
  templateUrl: './bind-strim.component.html',
  styleUrls: ['./bind-strim.component.scss']
})
export class BindStrimComponent implements OnInit {

    inputBind: FormControl = new FormControl()
    bindingStrim$: Observable<string>;

    constructor() { }

   ngOnInit(): void {

    this.bindingStrim$ = this.inputBind.valueChanges.pipe(
        startWith(),
        distinctUntilChanged(),
        debounceTime(2000)
    )
   }

}
