import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-d-of-solid',
  templateUrl: './d-of-solid.component.html',
  styleUrls: ['./d-of-solid.component.scss']
})
export class DOfSolidComponent implements OnInit {
  dbF = new DataBase(new Fetch());
  dbL = new DataBase(new Locale());
  constructor() { }
// Dependency inversion principle
  ngOnInit(): void {
      this.dbF.getData('https://api.github.com/search/users?q=ergoproxy623').then( r => {
          console.log(r);
      });

      console.log(this.dbL.getData('enums_ru'));
  }

}

export class Fetch {
    request(url) {
        return fetch(url).then( f => f.json());
    }
}

export class Locale {
    request(key) {
        return JSON.parse( localStorage.getItem(key));
    }
}

export class  DataBase {
    client: any;
    constructor(client) {
        this.client = client;
    }

    getData(url) {
      return   this.client.request(url);
    }
}
