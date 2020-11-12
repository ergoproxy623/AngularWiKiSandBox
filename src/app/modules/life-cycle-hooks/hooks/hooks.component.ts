import {
    AfterViewChecked,
    AfterViewInit,
    Component,
    ContentChild, ElementRef,
    OnChanges,
    OnDestroy,
    OnInit,
    SimpleChanges
} from '@angular/core';
import {ICard} from '../../../interfaces/card-interface/card';
import {Card} from '../../../classDTO/cardDTO/cardDTO';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.scss']
})
export class HooksComponent implements OnInit, AfterViewInit, OnDestroy, AfterViewChecked, OnChanges {
    cards: ICard[] = null;
    @ContentChild('genTemplate', {static: true}) genTemplate: ElementRef;
  constructor() { }

    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes);
    }

    ngOnInit(): void {
        this.cards = [{ title: 'Test Title',
            cardBody: 'Lorem 100',
            linkOne: 'url',
            linkTwo: 'url'}];
    }

    addCards(): any {
        const card: ICard = new Card();
        card.title = 'Test Title ' + this.cards.length;
        card.cardBody = 'Lorem 100 ' + this.cards.length;
        this.cards.push(card);
    }


  ngAfterViewChecked(): void {
  }

  ngAfterViewInit(): void {
  }

  ngOnDestroy(): void {
  }


}
