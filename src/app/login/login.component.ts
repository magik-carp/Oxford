import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private http: HttpClient, private authService: AuthService) {}

  ngOnInit(): void {}
  userInputPassword: string = '';
  userInputs: any = [];
  onSubmission(form: NgForm) {
    console.log(form);
    this.userInputs.push(
      { email: form.value.email },
      { password: form.value.password }
    );
    console.log(this.userInputs);
    const model = {
      email: form.value.email,
      password: form.value.password,
    };
    this.http
      .post('https://reqres.in/api/login', model)
      .subscribe((data) => (this.authService.respFromLoginApi = data));
  }
}
