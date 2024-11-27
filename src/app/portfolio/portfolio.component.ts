import { Component } from '@angular/core';
import { IPhotos, photoList  } from '../model/photos.module';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
photos: IPhotos[] = photoList;
id: string = "";
// onHover: boolean = true;


setID(paramID: string): any {
this.id = paramID; 
console.log(this.id);

};
shuffleArray(array:{}[]):any {
  for (let i = array.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array
};

randPhotos: IPhotos[] = this.shuffleArray(this.photos);


}
