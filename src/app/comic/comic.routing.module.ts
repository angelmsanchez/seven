import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import {
  ComicListComponent
} from './components';

export const routes: Route[] = [
  {
    path: '',
    component: ComicListComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ComicRoutingModule { }
