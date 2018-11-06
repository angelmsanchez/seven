import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ComicService } from './../../services/comic.service';
import { MetaService } from '../../../core/services';

@Component({
  selector: 'app-comic-list',
  templateUrl: './comic-list.component.html',
  styleUrls: ['./comic-list.component.scss']
})

export class ComicListComponent implements OnInit {
  comics: any[];

  constructor(
    private comicService: ComicService,
    private metaService: MetaService,
  ) { }

  ngOnInit(): void {
    this.comicService.getComics()
      .subscribe(data => {
        this.comics = data;
        this.metaData(this.comics);
      });
  }

  private metaData(comics: any[]) {
    this.metaService.setMetaData({
      title: 'Comics',
      description: `Displaying a list of ${comics.length} comics by DC Comics`
    });
  }
}
