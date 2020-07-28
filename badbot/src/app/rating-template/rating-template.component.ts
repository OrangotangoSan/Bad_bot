import { Component, OnInit } from '@angular/core';

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
  constructor() {
    this.currentRate = 5;
  }

  ngOnInit(): void {
  }

}
