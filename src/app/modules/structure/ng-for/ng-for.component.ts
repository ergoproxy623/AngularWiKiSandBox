import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent implements OnInit {
  tests = [1, 2, 3, 4, 5, 6, 7];
  constructor() { }

  ngOnInit(): void {
  }

}
