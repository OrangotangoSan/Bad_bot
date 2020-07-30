import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating-template',
  templateUrl: './rating-template.component.html',
  styles: [`
  .star {
    font-size: 1.5rem;
    color: #b0c4de;
  }
  .filled {
    color: gold;
  }
  .bad {
    color: #deb0b0;
  }
  .filled.bad {
    color: #ff1e1e;
  }
`]
})
export class RatingTemplateComponent implements OnInit {
  public currentRate: number;
  @Output() rating = new EventEmitter();

  constructor() {
    this.currentRate = 0;
  }
  ngOnInit(): void {
  }
  getRating(): void {
    this.rating.emit(this.currentRate);
  }

}
