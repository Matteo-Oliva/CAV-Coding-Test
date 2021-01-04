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
      if (ids.indexOf(ev.id) !== 0) {
        this.likes.push(ev)
      }
    }
  }

  dislikedContainer(ev) {
    if (ev) {
      let ids = this.dislikes.map(item => item.id)
      if (ids.indexOf(ev.id) !== 0) {
        this.dislikes.push(ev)
      }
    }
  }

}
