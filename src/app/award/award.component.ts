import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-award',
  templateUrl: './award.component.html',
  styleUrl: './award.component.css'
})
export class AwardComponent {
awardTitle: string = 'Photography Excellence Award';
awardedTo: string = 'John Doe';
description: string = 'For outstanding achievement in capturing breathtaking moments and emotions';

backgroundImages: string[] = [
  './images/home/ocean.jpg',
  './images/home/park.webp',
  './images/home/sunset.jpg',
  './images/portfolio/events/wedding.jpg',
  './images/portfolio/nature/snail.jpg',
  './images/portfolio/events/family.jpg',
];
currentBackgroundIndex = 0;
@HostBinding('style.--bg-image') get bgImage() {
  return `url(${this.backgroundImages[this.currentBackgroundIndex]})`;
}
changeBackground() {
  this.currentBackgroundIndex = (this.currentBackgroundIndex + 1) % this.backgroundImages.length;
}
}
