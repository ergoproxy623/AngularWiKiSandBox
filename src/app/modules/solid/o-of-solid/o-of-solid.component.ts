import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-o-of-solid',
  templateUrl: './o-of-solid.component.html',
  styleUrls: ['./o-of-solid.component.scss']
})
export class OOfSolidComponent implements OnInit {
  carO = new CarO('BMV', 1);
  constructor() { }

  ngOnInit(): void {
  }

}

abstract class GetPrice {
    abstract getName(): string;
}
export class CarO extends GetPrice{
    name: string;
    price: number;
    constructor(name: string, price: number) {
        super();
        this.name = name;
        this.price = price;
    }

    getName(): string {
        return this.name;
    }
}
