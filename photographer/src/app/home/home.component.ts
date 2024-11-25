import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  slides = [
    {
      img: './assets/images/ocean.jpg',
      caption: 'First slide label',
      description:
        'Some representative placeholder content for the first slide.',
    },
    {
      img: './assets/images/park.jpg',
      caption: 'Second slide label',
      description:
        'Some representative placeholder content for the second slide.',
    },
    {
      img: './assets/images/sunset.jpg',
      caption: 'Third slide label',
      description:
        'Some representative placeholder content for the third slide.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
