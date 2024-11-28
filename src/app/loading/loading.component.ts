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
<<<<<<< HEAD

=======
>>>>>>> de25069d0889a6b048c1db1d343bd58456eef6f7
  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
      this.triggerFadeOut();
    }, 500);
  }

  triggerFadeOut(): void {
    this.fadeOut = true;
<<<<<<< HEAD
=======
    this.router.navigate(['/home']);
>>>>>>> de25069d0889a6b048c1db1d343bd58456eef6f7
    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 1000);
  }

  ngOnDestroy(): void {
    this.fadeOut = false;
  }
}