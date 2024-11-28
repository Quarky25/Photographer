import {Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { IPhotos, photoList, PhotosModule } from '../model/photos.module';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit{
  isLoading: boolean = true;
  photos: IPhotos[] = photoList;
  photo: IPhotos = {} as IPhotos;
  id: string = "";
  index: number = 0;
  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }

  constructor(private router: ActivatedRoute) {
    this.router.params.subscribe(params => {
      const id = params['id']
      if(id !== null) {
        this.photo = this.photos[this.index]
      }
    })
  }
  toggleSubmenu(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    const submenu = (event.target as HTMLElement).nextElementSibling as HTMLElement;
    submenu.classList.toggle('show');
  }
  setID(paramID : string): any {
    this.id = paramID 
  }
}

