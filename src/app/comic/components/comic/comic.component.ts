import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { ComicService } from './../../services/comic.service';
import { MetaService } from '../../../core/services';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.scss']
})

export class ComicComponent implements OnInit {
  @Input() comic: any;

  constructor(
    private metaService: MetaService,
  ) { }

  ngOnInit(): void {
    this.metaData(this.comic);
  }

  private metaData(comic: any) {
    this.metaService.setMetaData({
      title: this.comic.name,
      description: this.comic.description
    });
  }
}
