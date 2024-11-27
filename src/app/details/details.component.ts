import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap} from '@angular/router';
import { IPhotos, photoList  } from '../model/photos.module';



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  photo: IPhotos = {} as IPhotos;
  index: number = 0;
  
  constructor(private router: ActivatedRoute) {
    this.router.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      if(id !== null) {
        this.index = +id;
        this.photo = photoList[this.index]
      }
    })
  }
}
