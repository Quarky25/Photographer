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

  constructor(private router: Router, private contexts: ChildrenOutletContexts) {}

  ngOnInit() {
    if (!this.animationPlayed) {
      // Simulate loading time
      setTimeout(() => {
        this.isLoading = false;
        // Add a delay before navigating to allow for fade-out animation
        setTimeout(() => {
          this.animationPlayed = true;
          this.router.navigate(['/home']);
        }, 500); // Adjust this time to match your fade-out animation duration
      }, 600); // Adjust this time to set how long the loading screen shows
    }
  }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
