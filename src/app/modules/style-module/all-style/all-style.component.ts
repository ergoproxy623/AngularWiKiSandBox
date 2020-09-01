import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-style',
  templateUrl: './all-style.component.html',
  styleUrls: ['./all-style.component.scss']
})
export class AllStyleComponent implements OnInit {
  chooseBlue = false;
  chooseGreen = true;
  constructor() { }

  ngOnInit(): void {
  }

}
