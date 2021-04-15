import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-bind-strim',
  templateUrl: './child-bind-strim.component.html',
  styleUrls: ['./child-bind-strim.component.scss']
})
export class ChildBindStrimComponent implements OnInit, OnChanges {
  @Input() valueStrim: string;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
   console.log(changes)
 }

  ngOnInit(): void {
  }

}
