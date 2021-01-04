import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { IJokes } from './../../../../shared/models/interface/jokes';

@Component({
  selector: 'app-dislike',
  templateUrl: './dislike.component.html',
  styleUrls: ['./dislike.component.css']
})
export class DislikeComponent implements OnInit {
  @Input() dislikes: IJokes[];
  @Output() like = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onLike(joke){
    this.like.emit(joke)
  }

}
