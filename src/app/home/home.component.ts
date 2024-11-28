import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  slides = [
    {
      id: 0,
      header: 'Meaningful Moments',
      body: 'Turn ordinary moments into extraordinary memories.',
      colour: '#242846',
      img: './images/home/ocean.jpg',
    },
    {
      id: 1,
      header: 'Creative Compositions',
      body: 'Creating something unforgettable.',
      colour: '#ba9077',
      img: './images/home/park.webp',
    },
    {
      id: 2,
      header: 'Breathtaking Landscapes',
      body: 'Capturing moments, emotions, and stories.',
      colour: '#1ABC9C',
      img: './images/home/sunset.jpg',
    },
    {
      id: 3,
      header: 'Meaningful Moments',
      body: 'Turn ordinary moments into extraordinary memories.',
      colour: '#1ABC9C',
      img: './images/home/ocean.jpg',
    },
    {
      id: 4,
      header: 'Creative Compositions',
      body: 'Creating something unforgettable.',
      colour: '#1ABC9C',
      img: './images/home/park.webp',
    },
    {
      id: 5,
      header: 'Breathtaking Landscapes',
      body: 'Capturing moments, emotions, and stories.',
      colour: '#1ABC9C',
      img: './images/home/sunset.jpg',
    },
  ];

  activeID = 0;
  wrapperStyle = {
    backgroundImage: `url('${this.slides[0].img}')`,
  };
  panelStyle = {
    background: this.slides[0].colour,
  };
  buttonHover = false;
  buttonStyle = {
    color: '#ffffff',
  };

  isLoading = true;

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }

  changeActive(id: number) {
    this.activeID = id;
    this.wrapperStyle = {
      backgroundImage: `url('${this.slides[id].img}')`,
    };
    this.panelStyle = {
      background: this.slides[id].colour,
    };
  }

  buttonColour() {
    if (!this.buttonHover) {
      this.buttonHover = true;
      this.buttonStyle = {
        color: this.slides[this.activeID].colour,
      };
    } else {
      this.buttonHover = false;
      this.buttonStyle = {
        color: '#ffffff',
      };
    }
  }
}
