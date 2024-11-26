import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.css'
})
export class StarRatingComponent implements OnChanges {
  @Input() rating: number = 0;
  @Input() maxRating: number = 5;

  fullStars: number[] = [];
  emptyStars: number[] = [];

ngOnChanges(changes: SimpleChanges): void {
  if(changes['rating']) {
    this.calculateStars();
  }
}

  private calculateStars(): void {
    this.fullStars = Array(Math.floor(this.rating)).fill(0);
    this.emptyStars = Array(this.maxRating - this.fullStars.length).fill(0)
  }
}
