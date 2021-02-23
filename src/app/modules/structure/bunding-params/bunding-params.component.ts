import { Component, OnInit } from '@angular/core';
import {ICard} from '../../../interfaces/card-interface/card';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-bunding-params',
  templateUrl: './bunding-params.component.html',
  styleUrls: ['./bunding-params.component.scss']
})
export class BundingParamsComponent implements OnInit {
  cards: ICard[] = null;
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.cards = [{ title: 'Test Title',
                   cardBody: 'Lorem 100',
                   linkOne: 'url',
                   linkTwo: 'url'}];
  }


  getParams() {
    this.route.params.subscribe( params => {
      console.log(params);
      
      
    }  )

  }
}
