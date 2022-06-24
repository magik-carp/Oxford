import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  title: string = 'The Oxford University';
  srcPath: string = '../../assets/uni-logo.jpg';
  size: number = 80;
  ShowNotification = false;
  ShowLogin = false;

  togglenotifications() {
    this.ShowNotification = !this.ShowNotification;
    this.ShowLogin = false;
  }
  togglelogin() {
    this.ShowLogin = !this.ShowLogin;
    this.ShowNotification = false;
  }
}
