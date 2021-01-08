import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { IJokes } from '../../../../../shared/models/interface/jokes';

@Component({
  selector: 'app-dislike',
  templateUrl: './dislike.component.html',
  styleUrls: ['./dislike.component.css']
})
export class DislikeComponent implements OnInit {
  @Input() dislikes: IJokes[];
  @Output() like = new EventEmitter<IJokes>();
  @Output() archive = new EventEmitter<IJokes>();
  @Output() deleteDislike = new EventEmitter<IJokes>();

  constructor() { }

  ngOnInit(): void {
  }

  onLike(joke: IJokes): void {
    this.like.emit(joke);

  }
  onArchive(joke: IJokes): void {
    this.archive.emit(joke);

  }

  onDelete(joke: IJokes): void {
    this.deleteDislike.emit(joke);

  }

}
