
import { Component, OnInit } from '@angular/core';
import { fadInUp, routeAnimation } from '../services/route-animation.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css'],
  animations: [fadInUp, routeAnimation]
})

export class LoadingComponent implements OnInit{
  fadeOut = false;
  isLoading: boolean = true
  constructor(private router: Router, ) {

  }
  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }

  triggerFadeOut(): void {
    this.fadeOut = true;
    this.router.navigate(['/home'])
    setTimeout(() => {

      this.fadeOut = false;
    }, 500);
  }

  ngOnDestroy(): void {
    this.fadeOut = false;
    
  }
 

     

}
