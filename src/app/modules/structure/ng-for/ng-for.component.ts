import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent implements OnInit {
  tests = [1, 2, 3, 4, 5, 6, 7];
  testsGenerated = new Array(10).fill(null).map(e => ({name: "", value: ""}))
  constructor() { }

  ngOnInit(): void {
      let outputArray = Array.from(new Set(this.testsGenerated));
      console.log(outputArray);
  }

}
