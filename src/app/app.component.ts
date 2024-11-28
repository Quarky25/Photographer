import { Component, OnInit } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Photographer';
  isLoading = true;
  constructor(private contexts: ChildrenOutletContexts) {
   
  }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
  if () {
    
  }
}
