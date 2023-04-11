import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent {
  @Output() rated = new EventEmitter();
  onRatingClicked(ratingNumber:any){
    this.rated.emit(ratingNumber);
  }
}
