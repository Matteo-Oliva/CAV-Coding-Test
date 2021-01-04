import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { IJokes } from './../../../../shared/models/interface/jokes';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  @Input() likes: IJokes[]
  @Output() dislike = new EventEmitter()
  @Output() archiv = new EventEmitter()
  @Output() deleteLike = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  disliked(joke: IJokes): void {
    this.dislike.emit(joke);
  }

  archive(joke: IJokes): void {
    this.archiv.emit(joke)

  }

  deleteLiked(joke: IJokes): void {
    this.deleteLike.emit(joke)
  }
}
