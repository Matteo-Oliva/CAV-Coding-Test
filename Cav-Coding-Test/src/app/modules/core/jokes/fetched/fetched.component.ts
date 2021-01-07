import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { IJokes } from './../../../../shared/models/interface/jokes';
import { JokesService } from './../../../shared/services/jokes/jokes.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';

@Component({
  selector: 'app-fetched',
  templateUrl: './fetched.component.html',
  styleUrls: ['./fetched.component.css']
})
export class FetchedComponent implements OnInit {
  @Output() liked = new EventEmitter()
  @Output() disliked = new EventEmitter()
  jokes$: Observable<IJokes>;
  jokes: IJokes

  constructor(private jokesService: JokesService) { }

  ngOnInit(): void {
    this.callJokes()
    this.getJokes()
  }

  getJokes() {
    setInterval(() => {
      this.callJokes();
    }, 5000)
  }

  private callJokes() {
    this.jokesService.getJokes().pipe(
      map((data: IJokes) => {
        this.jokes = {
          id: data.id,
          joke: data.joke
        };
      }
      )).subscribe();
  }

onLike(joke){
this.liked.emit(joke)
}

onDislike(joke){
  this.disliked.emit(joke)

}

}
