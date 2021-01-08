import { Component, Input, OnInit } from '@angular/core';

import { IJokes } from '../../../../../shared/models/interface/jokes';

@Component({
  selector: 'app-archived',
  templateUrl: './archived.component.html',
  styleUrls: ['./archived.component.css']
})
export class ArchivedComponent implements OnInit {
  @Input() archived: IJokes[];
  constructor() { }

  ngOnInit(): void {
  }

}
