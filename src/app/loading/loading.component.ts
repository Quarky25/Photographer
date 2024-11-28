import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css'],
})
export class LoadingComponent implements OnChanges {
  @Input() isLoading: boolean = true;
  fadeOut: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isLoading'] && !changes['isLoading'].currentValue) {
      this.triggerFadeOut();
    }
  }

  triggerFadeOut(): void {
    this.fadeOut = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }
}
