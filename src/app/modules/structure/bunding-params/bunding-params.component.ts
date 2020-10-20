import { Component, OnInit } from '@angular/core';
import {ICard} from '../../../interfaces/card-interface/card';

@Component({
  selector: 'app-bunding-params',
  templateUrl: './bunding-params.component.html',
  styleUrls: ['./bunding-params.component.scss']
})
export class BundingParamsComponent implements OnInit {
  cards: ICard[] = null;
  constructor() { }

  ngOnInit(): void {
    this.cards = [{ title: "Test Title",
                   cardBody: "Lorem 100",
                   linkOne: "url",
                   linkTwo: "url"}];
  }

}
