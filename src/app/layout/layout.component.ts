import { Component, OnInit } from '@angular/core';
import { routeAnimation } from '../services/route-animation.service';
import { ChildrenOutletContexts, Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
  animations: [routeAnimation]
})
export class LayoutComponent {
  isLoading: boolean = true;
  animationPlayed: boolean = false;

  constructor(private router: Router, private contexts: ChildrenOutletContexts){
   
    if (!this.animationPlayed) {
      setTimeout(() => {
        this.isLoading = false;
        this.animationPlayed = true;
        this.router.navigate(['/home'])
      }, 500);
    }
  }
  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
  if () {
    
  }
}
