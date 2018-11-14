import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { ComicRoutingModule } from './comic.routing.module';
import { ComicListComponent, ComicComponent } from './components';

@NgModule({
  imports: [
    ComicRoutingModule,
    ScrollingModule,
    DragDropModule,
    CommonModule,
  ],
  declarations: [
    ComicListComponent,
    ComicComponent,
  ],
})
export class ComicModule { }
