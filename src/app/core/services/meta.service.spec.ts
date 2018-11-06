import { TestBed, inject } from '@angular/core/testing';

import { MetaService } from './meta.service';

describe('UiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MetaService]
    });
  });

  it('should be created', inject([MetaService], (service: MetaService) => {
    expect(service).toBeTruthy();
  }));
});
