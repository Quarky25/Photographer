import { Component, OnInit } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isLoading = true;
  constructor(private contexts: ChildrenOutletContexts) {
   
  }
  ngOnInit() {
    setTimeout(() => {
      this.fadeOutLoadingScreen();
    }, 3000);
  }

  fadeOutLoadingScreen() {
    const loadingScreen = document.querySelector(
      '.loading-screen'
    ) as HTMLElement;

    if (loadingScreen) {
      loadingScreen.classList.add('fade-out');
    }

    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }
  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
  if () {
    
  }
}
