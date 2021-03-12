import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-value-accesorr-form-group',
  templateUrl: './value-accesorr-form-group.component.html',
  styleUrls: ['./value-accesorr-form-group.component.scss']
})
export class ValueAccesorrFormGroupComponent implements OnInit {

  bigForm: FormGroup;

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
    this.initForm();
  }


  initForm() {
    this.bigForm = this.fb.group({
      childGroup: [null]
    });
  }
}
