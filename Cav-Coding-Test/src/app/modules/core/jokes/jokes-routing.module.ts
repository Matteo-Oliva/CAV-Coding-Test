import { RouterModule, Routes } from '@angular/router';

import { ContainerComponent } from './components/container/container.component';
import { NgModule } from '@angular/core';

export const jokesRoutes: Routes = [
  { path: '', redirectTo: 'jokes', pathMatch: 'full' },
  { path: 'jokes', component: ContainerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(jokesRoutes)],
  exports: [RouterModule]
})
export class JokesRoutingModule { }
