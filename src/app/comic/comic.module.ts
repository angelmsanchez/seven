import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { ComicRoutingModule } from './comic.routing.module';
import { ComicListComponent, ComicComponent } from './components';

@NgModule({
  imports: [
    CommonModule,
    ComicRoutingModule,
    ScrollingModule,
  ],
  declarations: [
    ComicListComponent,
    ComicComponent,
  ],
})
export class ComicModule { }
