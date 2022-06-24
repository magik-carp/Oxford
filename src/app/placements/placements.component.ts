import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-placements',
  templateUrl: './placements.component.html',
  styleUrls: ['./placements.component.scss'],
})
export class PlacementsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  company = [
    {
      name: 'FaceBook',
      img: '../../assets/facebook.jfif',
      key1: 'Location',
      location: 'Bangalore',
      key2: 'Package',
      package: '10 l.p.a',
      key3: 'Position',
      position: 'Jr.Full Stack Dev',
    },
    {
      name: 'Google',
      img: '../../assets/Google.jpg',
      key1: 'Location',
      location: 'Bangalore',
      key2: 'Package',
      package: '10 l.p.a',
      key3: 'Position',
      position: 'Jr.Full Stack Dev',
    },
    {
      name: 'Tesla',
      img: '../../assets/tesla.jfif',
      key1: 'Location',
      location: 'Hyderabad',
      key2: 'Package',
      package: '10 l.p.a',
      key3: 'Position',
      position: 'Jr.Full Stack Dev',
    },
    {
      name: 'IBM',
      img: '../../assets/IBM.jpg',
      key1: 'Location',
      location: 'Chennai',
      key2: 'Package',
      package: '12 l.p.a',
      key3: 'Position',
      position: 'A.I Dev',
    },
    {
      name: 'TCS',
      img: '../../assets/tcs.png',
      key1: 'Location',
      location: 'Gurgaon',
      key2: 'Package',
      package: '6 l.p.a',
      key3: 'Position',
      position: 'Software Engineer',
    },
    {
      name: 'Infosys',
      img: '../../assets/infosys.jpg',
      key1: 'Location',
      location: 'Gurgaon',
      key2: 'Package',
      package: '6 l.p.a',
      key3: 'Position',
      position: 'Software Engineer',
    },
  ];
}
