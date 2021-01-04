import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { jokesRoutes } from './modules/core/jokes/jokes-routing.module';

const jokesModule = () => import('./modules/core/jokes/jokes.module').then((m) => m.JokesModule)

const routes: Routes = [{
  path: '', children: [...jokesRoutes]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
