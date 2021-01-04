import { Component, OnInit } from '@angular/core';

import { IJokes } from './../../../../../shared/models/interface/jokes';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  likes: IJokes[] = [];
  dislikes: IJokes[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  likedContainer(ev) {
    if (ev) {
      let ids = this.likes.map(item => item.id)
      if (ids.indexOf(ev.id) === -1) {
        this.likes.push(ev)
      }
    }
  }

  dislikedContainer(ev) {
    if (ev) {
      let ids = this.dislikes.map(item => item.id)
      if (ids.indexOf(ev.id) === -1) {
        this.dislikes.push(ev)
      }
    }
  }

  onDisliked(ev) {
    if (ev) {
      let ids = this.likes.map(item => item.id);
      let idLike = ids.indexOf(ev.id);
      this.likes.splice(idLike, 1);
      this.dislikes.push(ev);
    }
  }

  onLiked(ev){
    if (ev) {
      let ids = this.dislikes.map(item => item.id);
      let idDisliked = ids.indexOf(ev.id);
      this.dislikes.splice(idDisliked, 1);
      this.likes.push(ev);
    }
  }

}
