import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}
  headings = [
    { title: 'Sl.no' },
    { title: 'Sourses' },
    { title: 'Intake' },
    { title: 'Govt Seats' },
    { title: 'Fee For Indian Students' },
    { title: 'Fee For Forign Students' },
  ];
  courses = [
    {
      courses: 'CSE',
      intake: 60,
      govtseats: 40,
      IndianFee: 60000,
      ForignFee: 9000,
    },
    {
      courses: 'ece',
      intake: 50,
      govtseats: 30,
      IndianFee: 70000,
      ForignFee: 10000,
    },
    {
      courses: 'EEE',
      intake: 40,
      govtseats: 10,
      IndianFee: 50000,
      ForignFee: 8500,
    },
    {
      courses: 'MEC',
      intake: 60,
      govtseats: 40,
      IndianFee: 60000,
      ForignFee: 9000,
    },
    {
      courses: 'CIVIL',
      intake: 30,
      govtseats: 20,
      IndianFee: 45000,
      ForignFee: 7500,
    },
  ];
  // clicked = false;
  // changes() {
  //   this.clicked
  //     ? (this.courses[0].intake = 60)
  //     : (this.courses[0].intake = 120);
  //   this.clicked = !this.clicked;
  // }
  changes() {
    this.courses[0].intake == 120
      ? (this.courses[0].intake = 60)
      : (this.courses[0].intake = 120);
  }
}
