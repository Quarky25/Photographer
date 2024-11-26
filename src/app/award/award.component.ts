import { Component } from '@angular/core';

@Component({
  selector: 'app-award',
  templateUrl: './award.component.html',
  styleUrl: './award.component.css'
})
export class AwardComponent {
  awardTitle: string = "Photography Excellence Award";
  awardedTo: string = "John Doe";
  description: string = "For outstanding achievement in capturing breathtaking moments and emotions.";
  awardDate: string = "March 27, 2024"; // Example date
}
