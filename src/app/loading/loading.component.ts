<<<<<<< HEAD
import { Component, OnChanges, OnInit } from '@angular/core';
import { fadInUp, routeAnimation } from '../services/route-animation.service';
import { Router } from '@angular/router';
=======
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
>>>>>>> 16770fee3363a530df1a86eecffc3a0e9ff60742

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css'],
  animations: [fadInUp, routeAnimation]
})
<<<<<<< HEAD
export class LoadingComponent implements OnInit{
  fadeOut = false;
  
  constructor(private router: Router, ) {

  }
  ngOnInit(): void {
    setTimeout(() => {
=======
export class LoadingComponent implements OnChanges {
  @Input() isLoading: boolean = true;
  fadeOut: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isLoading'] && !changes['isLoading'].currentValue) {
>>>>>>> 16770fee3363a530df1a86eecffc3a0e9ff60742
      this.triggerFadeOut();
    }
  }

  triggerFadeOut(): void {
    this.fadeOut = true;
    this.router.navigate(['/home'])
    setTimeout(() => {
<<<<<<< HEAD
      this.fadeOut = false;
    }, 500);
  }

  ngOnDestroy(): void {
    this.fadeOut = false;
    
  }
 
=======
      this.isLoading = false;
    }, 1500);
  }
>>>>>>> 16770fee3363a530df1a86eecffc3a0e9ff60742
}
