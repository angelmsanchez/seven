import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComicRoutingModule } from './comic.routing.module';
import { ComicListComponent, ComicComponent } from './components';

@NgModule({
  imports: [
    CommonModule,
    ComicRoutingModule,
  ],
  declarations: [
    ComicListComponent,
    ComicComponent,
  ],
})
export class ComicModule { }
