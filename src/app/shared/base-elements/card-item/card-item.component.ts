import {Component, Input, OnInit} from '@angular/core';
import {ICard} from '../../../interfaces/card-interface/card';
import {GitService} from 'src/app/services/git-api/git.service';

@Component({
    selector: 'app-card-item',
    templateUrl: './card-item.component.html',
    styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {
    @Input() public card: ICard;

    constructor(private userService: GitService) {
    }

 public ngOnInit(): void {
        console.log(this.card);
        console.log(this.userService.url);
        console.log(this.userService.url);
    }

}
