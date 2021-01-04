import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { IJokes } from './../../../../shared/models/interface/jokes';

@Component({
  selector: 'app-dislike',
  templateUrl: './dislike.component.html',
  styleUrls: ['./dislike.component.css']
})
export class DislikeComponent implements OnInit {
  @Input() dislikes: IJokes[];
  @Output() like = new EventEmitter();
  @Output() archive = new EventEmitter();
  @Output() deleteDislike = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onLike(joke): void {
    this.like.emit(joke);
  }
  onArchive(joke): void {
    this.archive.emit(joke);

  }

  onDelete(joke): void {
    this.deleteDislike.emit(joke);

  }

}
