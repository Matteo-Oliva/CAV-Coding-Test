import { ArchivedComponent } from './components/archived/archived.component';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './components/container/container.component';
import { DislikeComponent } from './components/dislike/dislike.component';
import { FetchedComponent } from './components/fetched/fetched.component';
import { JokesRoutingModule } from './jokes-routing.module';
import { LikeComponent } from './components/like/like.component';
import { MaterialModule } from './../../shared/material.module';
import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';

@NgModule({
  declarations: [ContainerComponent, LikeComponent, DislikeComponent, ArchivedComponent, FetchedComponent],
  imports: [
    CommonModule,
    JokesRoutingModule,
    MaterialModule,
    SharedModule

  ]
})
export class JokesModule { }
