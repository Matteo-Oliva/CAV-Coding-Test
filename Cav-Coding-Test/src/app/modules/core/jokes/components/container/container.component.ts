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

  private mapLikes(): number[] {
    return this.likes.map(item => item.id);
  }

  private mapDislikes(): number[] {
    return this.dislikes.map(item => item.id);
  }

  private mapArchived(): number[] {
    return this.archived.map(item => item.id);
  }

  private archiveControl(archived: number[], joke: IJokes): void {
    if (archived.indexOf(joke.id) === -1) {
      this.archived.push(joke);
    }
  }

  likedContainer(joke: IJokes): void {
    if (joke) {
      const ids = this.mapLikes();
      if (ids.indexOf(joke.id) === -1) {
        this.likes.push(joke);
      }
    }
  }

  dislikedContainer(joke: IJokes): void {
    if (joke) {
      const ids = this.dislikes.map(item => item.id);
      if (ids.indexOf(joke.id) === -1) {
        this.dislikes.push(joke);
      }
    }
  }

  onDisliked(joke: IJokes): void {
    if (joke) {
      const ids = this.mapLikes();
      const idLike = ids.indexOf(joke.id);
      this.likes.splice(idLike, 1);
      this.dislikes.push(joke);
    }
  }

  onLiked(joke: IJokes): void {
    if (joke) {
      const ids = this.dislikes.map(item => item.id);
      const idDisliked = ids.indexOf(joke.id);
      this.dislikes.splice(idDisliked, 1);
      this.likes.push(joke);
    }
  }



  onArchiveLiked(joke: IJokes): void {
    if (joke) {
      const archived = this.mapArchived();
      const ids = this.mapLikes();
      const idLike = ids.indexOf(joke.id);
      this.likes.splice(idLike, 1);
      this.archiveControl(archived, joke);

    }
  }

  onArchiveDisLiked(joke: IJokes): void {
    if (joke) {
      const archived = this.mapArchived();
      const ids = this.dislikes.map(item => item.id);
      const idDislike = ids.indexOf(joke.id);
      this.dislikes.splice(idDislike, 1);
      this.archiveControl(archived, joke);
    }
  }

  deleteLikes(joke: IJokes): void {
    if (joke) {
      const ids = this.mapLikes();
      const idLike = ids.indexOf(joke.id);
      this.likes.splice(idLike, 1);
    }
  }

  deleteDislikes(joke: IJokes): void {
    if (joke) {
      const ids = this.mapDislikes();
      const idDislike = ids.indexOf(joke.id);
      this.dislikes.splice(idDislike, 1);
    }

  }
}



