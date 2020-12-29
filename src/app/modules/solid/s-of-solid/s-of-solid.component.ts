import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-s-of-solid',
  templateUrl: './s-of-solid.component.html',
  styleUrls: ['./s-of-solid.component.scss']
})
export class SOfSolidComponent implements OnInit {
  car: Car = new Car('Amulet', 0);
  fix = new FixCar(this.car);
  constructor() { }

  ngOnInit(): void {
      this.repairCar();
  }


  repairCar() {
      setTimeout( () => {
          this.fix.fixCar(122);
          console.log(this.car);
      }, 5000);


  }
}
export class Car {
    name: string;
    price: number;
    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
}

export class FixCar {
    car: Car;
    constructor(car: Car) {
        this.car = car;
    }

    fixCar(price) {
        this.car.price += price;
    }

}
