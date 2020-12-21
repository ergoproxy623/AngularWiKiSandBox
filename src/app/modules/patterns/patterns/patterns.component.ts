import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patterns',
  templateUrl: './patterns.component.html',
  styleUrls: ['./patterns.component.scss']
})
export class PatternsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
       // pattern  constructor
      const aws = new Server('AWS Europe', '81.2.1.21.32');
      console.log(aws);
      console.log(aws.getUrl());
  }

}

export class Server {

    constructor(private name, private ip) {}

    getUrl = () => {
        return `https://${this.ip}:80`;
    }

}
