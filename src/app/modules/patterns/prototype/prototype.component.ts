import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prototype',
  templateUrl: './prototype.component.html',
  styleUrls: ['./prototype.component.scss']
})
export class PrototypeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
      const car = {
          wheels: 4,
          init() {
              console.log(`i have ${ this.wheels} wheels, my master is ${this.owner}`);
          }
      };

      const carWithOwner = Object.create(car, {
          owner: {
              value: 'Arthur',
          }
      });
      console.log(carWithOwner);
      console.log(carWithOwner.__proto__ === car);
      carWithOwner.init();
  }

}
