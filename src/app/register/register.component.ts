import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor() {}

  signupForms: FormGroup = new FormGroup({
    email: new FormControl(null, Validators.email),
    password: new FormControl(null, [
      Validators.minLength(8),
      Validators.maxLength(12),
    ]),
    age: new FormControl(null, Validators.min(18)),
    name: new FormControl(null, Validators.required),
    phone: new FormControl('+91', Validators.pattern('[6-9][0-9]{9}')),
    address: new FormControl(null, Validators.maxLength(50)),
  });
  inputForm: any = [];
  ngOnInit(): void {}
  onSubmission() {
    console.log(this.signupForms);
    this.inputForm.push({
      name: this.signupForms.value.name,
      email: this.signupForms.value.email,
      password: this.signupForms.value.password,
      age: this.signupForms.value.age,
      addres: this.signupForms.value.address,
      phone: this.signupForms.value.phone,
    });
    console.log(this.inputForm);
  }
}
