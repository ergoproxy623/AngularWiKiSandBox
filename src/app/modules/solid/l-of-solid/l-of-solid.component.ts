import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-l-of-solid',
  templateUrl: './l-of-solid.component.html',
  styleUrls: ['./l-of-solid.component.scss']
})
export class LOfSolidComponent implements OnInit {
  sqr: Square = new Square();
  constructor() { }

  ngOnInit(): void {
      console.log(this.sqr);
  }

}

export interface Figure {
    setWidth(width: number): void;
    setHeight(height: number): void;
    areOf(): void;
}

export class Square implements Figure {
    areOf(): void {
    }

    setHeight(height: number): void {
    }

    setWidth(width: number): void {
    }

}
