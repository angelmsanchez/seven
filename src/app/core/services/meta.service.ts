import { Injectable } from '@angular/core';

import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MetaService {
  private appTitle: 'ComicStore';
  private appDescription: 'DC Comics';

  constructor(
    private meta: Meta,
    private title: Title,
  ) { }

  setMetaData(config): void {
    const description = config.description || this.appDescription;
    const title = config.title || this.appTitle;
    this.title.setTitle(title);
    const tags = [
      { name: 'description', content: description },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      { name: 'apple-mobile-web-app-title', content: title },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
    ];
    tags.map(tag => this.meta.updateTag(tag));
  }
}
