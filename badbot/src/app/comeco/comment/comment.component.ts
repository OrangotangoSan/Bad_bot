import { Component, OnInit } from '@angular/core';
import { Comment } from '../../models/comment';

import { InsultService } from './../../services/insult.service';
import { Insult } from './../../models/insult';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  insult: Insult;
  commentText: string;
  comments: Comment[];
  rating: number;

  constructor(private insultService: InsultService) { }

  ngOnInit(): void {
    this.getInsult(this.rating);
  }
  saveComment(): void {
    console.log(this.rating);
  }
  getRating(event): void {
    console.log('Ta no comment: ' + event);
  }
  getInsult(rating): void {

    this.insultService.getInsult().subscribe((data: Insult) => this.insult = data);
  }
}

