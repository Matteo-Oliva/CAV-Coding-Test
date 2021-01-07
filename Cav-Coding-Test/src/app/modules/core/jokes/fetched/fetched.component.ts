import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';

import { IJokes } from './../../../../shared/models/interface/jokes';
import { JokesService } from './../../../shared/services/jokes/jokes.service';
import { switchMap } from 'rxjs/internal/operators';

@Component({
  selector: 'app-fetched',
  templateUrl: './fetched.component.html',
  styleUrls: ['./fetched.component.css']
})
export class FetchedComponent implements OnInit, OnDestroy {
  @Output() liked = new EventEmitter<IJokes>();
  @Output() disliked = new EventEmitter<IJokes>();
  jokes$: Observable<IJokes>;
  joke: IJokes;

  startSubscription: Subscription;
  jokeSubscription: Subscription;
  _fetchTime = 5;

  constructor(private jokesService: JokesService) { }


  ngOnInit(): void {
    this.startSubscription = this.jokesService.getJokes().subscribe(joke => this.joke = joke)
    this.jokeSubscription = this.getJokeSubscription(this._fetchTime);
  }

  set fetchTime(time: number) {
    this._fetchTime = time;
    this.jokeUnsubscribe();
    this.jokeSubscription = this.getJokeSubscription(time);
  }

  get fetchTime(): number {
    return this._fetchTime;
  }

  getJokeSubscription(time: number): Subscription {
    return interval(time * 1000).pipe(
      switchMap(() => this.jokesService.getJokes())
    ).subscribe(joke => this.joke = joke);
  }

  ngOnDestroy(): void {
    this.startSubscription.unsubscribe();
  }

  private jokeUnsubscribe(): void {
    if (this.jokeSubscription) {
      this.jokeSubscription.unsubscribe();
    }
  }

  onLike(joke: IJokes): void {
    this.liked.emit(joke);
  }

  onDislike(joke: IJokes): void {
    this.disliked.emit(joke);

  }

}
