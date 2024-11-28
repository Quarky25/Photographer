import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit, OnDestroy {
  fadeOut = false;
  isLoading: boolean = true;

  constructor(private router: Router) {}




  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
      this.triggerFadeOut();
    }, 500);
  }
  
  triggerFadeOut(): void {
    this.fadeOut = true;
    
    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 1000); // Adjust this timing to match your fade-out animation duration
  }
  
  ngOnDestroy(): void {
    this.fadeOut = false;
  }
}