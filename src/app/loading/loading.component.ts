import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css'],
})
export class LoadingComponent implements OnChanges {
  fadeOut = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.triggerFadeOut();
    }, 3000);
  }

  triggerFadeOut(): void {
    this.fadeOut = true;
    setTimeout(() => {
      this.fadeOut = false;
    }, 1500);
  }

  ngOnDestroy(): void {
    this.fadeOut = false;
  }
}
