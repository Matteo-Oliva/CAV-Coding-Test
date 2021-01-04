import { Component, Input, OnInit } from '@angular/core';

import { IJokes } from './../../../../shared/models/interface/jokes';

@Component({
  selector: 'app-dislike',
  templateUrl: './dislike.component.html',
  styleUrls: ['./dislike.component.css']
})
export class DislikeComponent implements OnInit {
  @Input() dislikes: IJokes[];
  constructor() { }

  ngOnInit(): void {
  }

}
