import { Component, OnInit } from '@angular/core';
import { fadInUp, routeAnimation } from '../services/route-animation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css'],
  animations: [fadInUp, routeAnimation],
})
export class LoadingComponent implements OnInit {
  fadeOut = false;
<<<<<<< HEAD
  isLoading: boolean = true
  constructor(private router: Router ) {

  }
=======
  isLoading: boolean = true;
  constructor(private router: Router) {}
>>>>>>> 2a6a77f5a7dc58a53f4296446a2d0dbe2b9377f2
  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }

  triggerFadeOut(): void {
    this.fadeOut = true;
<<<<<<< HEAD
    this.router.navigate(['/home'])
    
=======
    this.router.navigate(['/home']);
>>>>>>> 2a6a77f5a7dc58a53f4296446a2d0dbe2b9377f2
    setTimeout(() => {
      this.fadeOut = false;
    }, 500);
  }

  ngOnDestroy(): void {
    this.fadeOut = false;
  }
}
