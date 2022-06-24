import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor(public httpService: HttpService) {}
  usersList: any = [];
  heading = [
    { headings: 'ID' },
    { headings: 'Email' },
    { headings: 'First Name' },
    { headings: 'Last Name' },
    { headings: 'Avatar' },
  ];

  ngOnInit(): void {
    this.httpService.getUsers().subscribe((resp: any) => {
      this.usersList = resp.data;
      console.log(this.usersList);
    });
    // this.httpService.createUsers().subscribe((data: any) => {
    //   this.usersList.push(data.data);
    // });
  }
}
