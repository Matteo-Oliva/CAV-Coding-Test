import { HttpClient } from '@angular/common/http';
import { IJokes } from './../../../../shared/models/interface/jokes';
import { Injectable } from '@angular/core';
import { Observable, } from 'rxjs';
import { timeout } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class JokesService {
  jokesUrl = 'http://api.icndb.com/jokes/random'
  constructor(private http: HttpClient) { }


  getJokes(): Observable<IJokes> {
    return this.http.get<IJokes>(this.jokesUrl).pipe(timeout(1000))

  }
}

