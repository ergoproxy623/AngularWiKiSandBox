import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {
  createUserForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
     this.initForm();
  }

  initForm() {
      this.createUserForm = this.fb.group({
          name: ['', Validators.required],
          age: [ 0, Validators.min(1) ]
      });
  }

  createUser() {

    }
}
