import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-factory',
  templateUrl: './factory.component.html',
  styleUrls: ['./factory.component.scss']
})
export class FactoryComponent implements OnInit {
  auto: any[];
  constructor() { }

  ngOnInit(): void {
      const factory = new AutoFactory();
      this.auto = [
          factory.create('Kwin', 8, 'mac'),
          factory.create('Demon', 6, 'kamaz'),
          factory.create('Diablo', 4, 'kamaz')
      ];
      console.log(this.auto);
      this.auto.forEach( a => a.cost());
  }

}


export class Ferary {
    constructor(private name, private wheels) {
    }
}

export class Mac {
    constructor(private name, private wheels) {
    }
}

export class Kamaz {
    constructor(private name, private wheels) {
    }
}

export class AutoFactory {
    static list = {
        ferary: Ferary,
        mac: Mac,
        kamaz: Kamaz
    };

    create(name, wheels, type) {
        const Auto = AutoFactory.list[type] || AutoFactory.list.kamaz;
        const auto = new Auto(name, wheels);
        auto.type = 'Shkarabanka';
        auto.cost = () => {
            console.log(`${name} cost dofiga`);
        };
        return auto;
    }
}
