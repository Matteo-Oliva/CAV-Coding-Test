import { Component, OnInit } from '@angular/core';

import { IJokes } from './../../../../../shared/models/interface/jokes';
import { JokesService } from './../../../../shared/services/jokes/jokes.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  likes: IJokes[] = [];
  dislikes: IJokes[] = [];
  archived: IJokes[] = [];
  constructor(private jokesService: JokesService) { }

  ngOnInit(): void {
    this.likes = this.jokesService.likes;
    this.dislikes = this.jokesService.dislikes;
    this.archived = this.jokesService.archived;

  }

  onLike(joke: IJokes): void {
    this.jokesService.onLike(joke);
  }

  onDislike(joke: IJokes): void {
    this.jokesService.onDislike(joke);
  }

  onDisliked(joke: IJokes): void {
    this.jokesService.onDisliked(joke);
  }

  onLiked(joke: IJokes): void {
    this.jokesService.onLiked(joke);
  }

  onArchive(joke: IJokes, array: IJokes[]): void {
    this.jokesService.onArchive(joke, array);
  }

  deleteJoke(joke: IJokes, array: IJokes[]): void {
    this.jokesService.delete(joke, array);
  }
 }



