import { Component, OnInit } from '@angular/core';
import { Observable, interval, timer } from 'rxjs';
import { map, timeout } from 'rxjs/internal/operators';

import { IJokes } from './../../../../shared/models/interface/jokes';
import { JokesService } from './../../../shared/services/jokes/jokes.service';

@Component({
  selector: 'app-fetched',
  templateUrl: './fetched.component.html',
  styleUrls: ['./fetched.component.css']
})
export class FetchedComponent implements OnInit {

  jokes$: Observable<IJokes>;
  jokesList = []
  constructor(private jokesService: JokesService) { }

  ngOnInit(): void {
    this.getJokes();
  }




  getJokes() {
    this.jokesService.getJokes().pipe(
      map((data: any) => {
        const item = {
          joke: data.value.joke
        };
        this.jokesList.push(item);
      }
      )).subscribe();
  }



}
