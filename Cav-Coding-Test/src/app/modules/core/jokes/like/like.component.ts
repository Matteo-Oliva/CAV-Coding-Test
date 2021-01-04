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
  constructor() { }

  ngOnInit(): void {
  }

  disliked(joke) {
    this.dislike.emit(joke);
  }
}
