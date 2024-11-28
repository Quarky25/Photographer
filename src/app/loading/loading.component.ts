import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css'],
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
    this.router.navigate(['/home']);
    this.router.navigate(['/home']);
  }

  ngOnDestroy(): void {
    this.fadeOut = false;
  }
}
