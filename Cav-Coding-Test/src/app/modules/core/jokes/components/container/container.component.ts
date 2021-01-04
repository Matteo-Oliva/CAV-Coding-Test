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
  archived: IJokes[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  likedContainer(joke: IJokes):void {
    if (joke) {
      let ids = this.likes.map(item => item.id)
      if (ids.indexOf(joke.id) === -1) {
        this.likes.push(joke)
      }
    }
  }

  dislikedContainer(joke: IJokes):void {
    if (joke) {
      let ids = this.dislikes.map(item => item.id)
      if (ids.indexOf(joke.id) === -1) {
        this.dislikes.push(joke)
      }
    }
  }

  onDisliked(joke: IJokes):void {
    if (joke) {
      let ids = this.likes.map(item => item.id);
      let idLike = ids.indexOf(joke.id);
      this.likes.splice(idLike, 1);
      this.dislikes.push(joke);
    }
  }

  onLiked(joke: IJokes):void {
    if (joke) {
      let ids = this.dislikes.map(item => item.id);
      let idDisliked = ids.indexOf(joke.id);
      this.dislikes.splice(idDisliked, 1);
      this.likes.push(joke);
    }
  }

  archiveControl(archived: number[], joke: any):void {
    if (archived.indexOf(joke.id) === -1) {
      this.archived.push(joke);
    }
  }

  onArchiveLiked(joke: IJokes):void {
    if (joke) {
      let archived = this.archived.map(item => item.id)
      let ids = this.likes.map(item => item.id);
      let idLike = ids.indexOf(joke.id)
      this.likes.splice(idLike, 1)
      this.archiveControl(archived, joke);

    }
  }


  onArchiveDisLiked(joke: IJokes):void {
    if (joke) {
      let archived = this.archived.map(item => item.id)
      let ids = this.dislikes.map(item => item.id);
      let idDislike = ids.indexOf(joke.id)
      this.dislikes.splice(idDislike, 1)
      this.archiveControl(archived, joke);
    }

  }
}
