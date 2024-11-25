// home.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  slides = [
    {
      id: 0,
      header: 'First slide label',
      body: 'Some representative placeholder content for the first slide.',
      colour: '#242846',
      img: './assets/images/ocean.jpg'
    },
    {
      id: 1,
      header: 'Second slide label',
      body: 'Some representative placeholder content for the second slide.',
      colour: '#ba9077',
      img: './assets/images/park.webp'
    },
    {
      id: 2,
      header: 'Third slide label',
      body: 'Some representative placeholder content for the third slide.',
      colour: '#1ABC9C',
      img: './assets/images/sunset.jpg'
    }
  ];

  activeID = 0;
  wrapperStyle = {
    backgroundImage: `url('${this.slides[0].img}')`
  };
  panelStyle = {
    background: this.slides[0].colour
  };
  buttonHover = false;
  buttonStyle = {
    color: '#ffffff'
  };

  constructor() { }

  ngOnInit(): void { }

  changeActive(id: number) {
    this.activeID = id;
    this.wrapperStyle = {
      backgroundImage: `url('${this.slides[id].img}')`
    };
    this.panelStyle = {
      background: this.slides[id].colour
    };
  }

  buttonColour() {
    if (!this.buttonHover) {
      this.buttonHover = true;
      this.buttonStyle = {
        color: this.slides[this.activeID].colour
      };
    } else {
      this.buttonHover = false;
      this.buttonStyle = {
        color: '#ffffff'
      };
    }
  }
}