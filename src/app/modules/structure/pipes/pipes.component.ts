import { Component, OnInit } from '@angular/core';
import {observable, Observable} from "rxjs";
import {TestRequestService} from "../../../services/test-request.service";

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {
  tests = [0.12, 1.234234, 2.324534, 545645.5675, 7.23423];
  date = new Date();
  obj = {
      name: 'JSON',
      line: 2
  };
  p: Promise<string> = new Promise<string>( resolve => {
      setTimeout( () => {
          resolve('Promise done');
      }, 3000);
  });
  o: Observable<string> = new Observable<string>( observer => {
      setTimeout( () => {
          observer.next('Observable next for 5 sec.');
      }, 5000);
      setTimeout( () => {
          observer.next('Observable next for 7 sec.');
          observer.complete();
      }, 7000);
  });

  constructor(private usersService: TestRequestService) { }

  ngOnInit(): void {
      this.usersService.getUsers().subscribe( res => {
          console.log(res);
      });
  }

}
