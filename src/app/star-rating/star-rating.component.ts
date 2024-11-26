import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrl: './star-rating.component.css'
})
export class StarRatingComponent {
  @Input() rating: number = 0;
  @Input() maxRating: number = 5;

  fullStars: number = 0;
  emptyStars: number = 0;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['rating']) {
      this.calculateStars();
    }
  }

  private calculateStars(): void {
    this.fullStars = Math.floor(this.rating);
    this.emptyStars = this.maxRating - this.fullStars;
  }
}

