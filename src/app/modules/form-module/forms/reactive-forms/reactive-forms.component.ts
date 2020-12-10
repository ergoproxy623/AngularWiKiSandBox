import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FireServiceService} from '../../../../services/fire-service/fire-service.service';
import {UserDto} from '../../../../classDTO/userDto/userDto';
import {CustomValidators} from '../validators/custom.validators';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {
  createUserForm: FormGroup;
  constructor(
      private fb: FormBuilder,
      private fireService: FireServiceService
  ) { }

  ngOnInit(): void {
     this.initForm();
  }

  initForm() {
      this.createUserForm = this.fb.group({
          name: ['', Validators.required],
          age: [ 0, Validators.min(1) ],
          email: [ '', CustomValidators.fakeEmail, CustomValidators.emailExist ],
          address: this.fb.group({
              street: ['', Validators.required],
              country: ['']
          }),
          auto: this.fb.array([])
      });
  }

  createUser(): void {
      const newUser: UserDto = this.createUserForm.value;
      this.fireService.addUser(newUser);
  }

    resetForm(): void {
        this.createUserForm.reset();
        this.createUserForm.enable();
    }

    disableAll(): void {
        this.createUserForm.disable();
    }

    enableAll(): void {
        this.createUserForm.enable();
    }

    disableAddressGroup() {
        this.createUserForm.get('address').disable();
    }

    enableAddressGroup() {
        this.createUserForm.get('address').enable();
    }

    disableCountry() {
        this.createUserForm.get('address').get('country').disable();
    }

    enableCountry() {
        this.createUserForm.get('address').get('country').enable();
    }

    setUsername() {
        this.createUserForm.get('name').setValue('Arthur');
    }

    setAll() {
        this.createUserForm.patchValue({
            name: 'Arthur',
            age: 32,
            address: {
                street: '123 str',
                country: 'Antarktida',
            }
        });
    }

    setAddress() {
        this.createUserForm.patchValue({
            address: {
                street: '123 str',
                country: 'Antarktida',
            }
        });
    }

    addAuto() {
      const autoArr = this.createUserForm.get('auto') as FormArray;
      const control = this.fb.group({
          mark: ['', Validators.required],
          model: ['', Validators.required],
      });
      autoArr.push(control);
    }
}
