import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent {
  @Input() currentRating: number = 0;
  @Output() rated = new EventEmitter();
  onRatingClicked(ratingNumber:number){
    this.rated.emit(ratingNumber);
  }
}
