import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {
  tests = [1.234234, 2.324534, 545645.5675, 7.23423];
  constructor() { }

  ngOnInit(): void {
  }

}
