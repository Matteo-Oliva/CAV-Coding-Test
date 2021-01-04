import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JokesService {
  jokesUrl = 'api/jokes'
  constructor(private http:HttpClient) { }
}
