import { InsultService } from './../../services/insult.service';
import { Insult } from './../../models/insult';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public insult: Insult;
  constructor(private insultService: InsultService) { }

  ngOnInit(): void {
    this.getInsult();
  }

  getInsult(): void {
    this.insultService.getInsult().subscribe((data: Insult) => this.insult = data);
  }

}
