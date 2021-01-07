import { IJokes, IJokesResponse } from './../../../../shared/models/interface/jokes';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, } from 'rxjs';
import { map } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class JokesService {
  jokesUrl = 'http://api.icndb.com/jokes/random';
  likes: IJokes[] = [];
  dislikes: IJokes[] = [];
  archived: IJokes[] = [];

  constructor(private http: HttpClient) { }


  getJokes(): Observable<IJokes> {
    return this.http.get<IJokesResponse>(this.jokesUrl).
      pipe(map(data => data.value));
  }

  private mapId(array: IJokes[]): number[] {
    return array.map(item => item.id);
  }

  private archiveControl(archived: number[], joke: IJokes): void {
    if (archived.indexOf(joke.id) === -1) {
      this.archived.push(joke);
    }
  }

  private getIndex(ids: number[], joke: IJokes): number {
    return ids.indexOf(joke.id);
  }

  likedContainer(joke: IJokes): void {
    if (joke) {
      const ids = this.mapId(this.likes);
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
      const ids = this.mapId(this.likes);
      const index = this.getIndex(ids, joke);
      this.likes.splice(index, 1);
      this.dislikes.push(joke);
    }
  }

  onLiked(joke: IJokes): void {
    if (joke) {
      const ids = this.dislikes.map(item => item.id);
      const index = this.getIndex(ids, joke);
      this.dislikes.splice(index, 1);
      this.likes.push(joke);
    }
  }

  onArchive(joke: IJokes, array: IJokes[]): void {
    const archived = this.mapId(this.archived);
    if (joke && array === this.likes) {
      const ids = this.mapId(this.likes);
      const index = this.getIndex(ids, joke);
      this.likes.splice(index, 1);
      this.archiveControl(archived, joke);
    }
    if (joke && array === this.dislikes) {
      const ids = this.mapId(this.dislikes);
      const index = this.getIndex(ids, joke);
      this.dislikes.splice(index, 1);
      this.archiveControl(archived, joke);

    }
  }

  delete(joke: IJokes, array: IJokes[]): void {
    if (joke && array === this.likes) {
      const ids = this.mapId(this.likes);
      const index = this.getIndex(ids, joke);
      this.likes.splice(index, 1);
    }
    if (joke && array === this.dislikes) {
      const ids = this.mapId(this.likes);
      const index = ids.indexOf(joke.id);
      this.dislikes.splice(index, 1);
    }
  }
}

