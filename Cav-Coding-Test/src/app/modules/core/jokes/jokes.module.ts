import { ArchivedComponent } from './archived/archived.component';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './components/container/container.component';
import { DislikeComponent } from './dislike/dislike.component';
import { FetchedComponent } from './fetched/fetched.component';
import {HttpClientModule} from '@angular/common/http/http';
import { JokesRoutingModule } from './jokes-routing.module';
import { LikeComponent } from './like/like.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [ContainerComponent, LikeComponent, DislikeComponent, ArchivedComponent, FetchedComponent],
  imports: [
    CommonModule,
    JokesRoutingModule,
    HttpClientModule,
  ]
})
export class JokesModule { }
