import { Component } from '@angular/core';
import { IPhotos, photoList  } from '../model/photos.module';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
photos: IPhotos[] = photoList;
photo: IPhotos = {} as IPhotos;
id: string = "";
index: number = 0;
randPhotos: IPhotos[] = this.shuffleArray(this.photos);

// onHover: boolean = true;


constructor(private router: ActivatedRoute){
  this.router.params.subscribe(params => {
    const id = params['id']
    if(id !== null) {
      this.photo = this.photos[this.index]
    }
  })
  };

  
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




}
