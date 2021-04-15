import { Component, OnInit } from '@angular/core';
import {GitService} from "../../../../services/git-api/git.service";
import {first, withLatestFrom} from "rxjs/operators";

@Component({
  selector: 'app-directive-test',
  templateUrl: './directive-test.component.html',
  styleUrls: ['./directive-test.component.scss']
})
export class DirectiveTestComponent implements OnInit {

  constructor(
      private gitService: GitService,
  ) { }

  ngOnInit(): void {
      const first$ = this.gitService.searchUsers('ergo').pipe(
          withLatestFrom(this.gitService.searchUsers("ergoproxy")),
          first()
      );
      first$.subscribe(([f, s]) => {
          console.log(f);
          console.log(s);
      });
  }

}
