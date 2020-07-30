import { Component, OnInit } from '@angular/core';
import { Comment } from '../../models/comment';

import { InsultService } from './../../services/insult.service';
import { Insult } from './../../models/insult';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {
  insult: Insult;
  commentText: string;
  comments: Comment[];
  rating: number;

  constructor(private insultService: InsultService) {
    this.comments = [
      {
        comment: 'Olá Mundo',
        rating: 4,
      },
    ];
  }

  ngOnInit(): void {}
  saveComment(): void {
    if (this.rating < 3) {
      this.getInsult();
      this.comments.push({
        comment: this.commentText,
        rating: this.rating,
        insult: this.insult.insult,
      });
    } else
      this.comments.push({ comment: this.commentText, rating: this.rating });
  }
  getRating(event): void {
    this.rating = event;
  }
  getInsult(): void {
    this.insultService
      .getInsult()
      .subscribe((data: Insult) => (this.insult = data));
  }
}
