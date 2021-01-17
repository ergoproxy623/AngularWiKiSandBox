import {Component, Input, OnInit} from '@angular/core';
import {ICard} from '../../../interfaces/card-interface/card';

@Component({
    selector: 'app-card-item',
    templateUrl: './card-item.component.html',
    styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {
    @Input() card: ICard;

    constructor() {
    }

    ngOnInit(): void {
        console.log(this.card);
    }

}
