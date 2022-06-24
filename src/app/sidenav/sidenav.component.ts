import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  Home: string = 'Home';
  About: string = 'About';
  Courses: string = 'Courses';
  Placements: string = 'Placements';
  Results: string = 'Results';
  Faculty: string = 'Faculty';
  Alumni: string = 'Alumni';
  Activities: string = 'Activities';
  FeePayment: string = 'Fee Payment';
  StaffOnly: string = 'StaffOnly';
  ContactUs: string = 'ContactUs';
  srcPath: string = '../../assets/uni-logo.jpg';
  size: number = 25;
  buttons = [
    { BtnContent: 'Home', link: '/' },
    { BtnContent: 'About', link: '/about' },
    { BtnContent: 'Placements', link: '/placements' },
    { BtnContent: 'Courses', link: '/courses' },
    { BtnContent: 'ContactUs', link: '/contact' },
  ];
}
