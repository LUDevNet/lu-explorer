import { TestBed, inject } from '@angular/core/testing';

import { LocaleService } from './locale.service';

describe('LocaleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocaleService]
    });
  });

  it('should be created', inject([LocaleService], (service: LocaleService) => {
    expect(service).toBeTruthy();
  }));
});
