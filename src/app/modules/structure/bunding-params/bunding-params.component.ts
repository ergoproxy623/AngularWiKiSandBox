import {Component, ContentChild, ElementRef, OnInit } from '@angular/core';
import {ICard} from '../../../interfaces/card-interface/card';
import {Card} from '../../../classDTO/cardDTO/cardDTO';

@Component({
  selector: 'app-bunding-params',
  templateUrl: './bunding-params.component.html',
  styleUrls: ['./bunding-params.component.scss']
})
export class BundingParamsComponent implements OnInit {

    cards: ICard[] = null;
    @ContentChild("genTemplate", {static: true}) genTemplate: ElementRef;

  constructor() { }

  ngOnInit(): void {
      console.log(this.genTemplate.nativeElement);
      this.cards = [{ title: "Test Title",
                   cardBody: "Lorem 100",
                   linkOne: "url",
                   linkTwo: "url"}];
  }

    addCards(): any {
        const card: ICard = new Card();
        card.title = 'Test Title ' + this.cards.length;
        card.cardBody = 'Lorem 100 ' + this.cards.length;
        this.cards.push(card);
    }
}
