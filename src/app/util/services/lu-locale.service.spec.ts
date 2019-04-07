import { TestBed, inject } from '@angular/core/testing';

import { LuLocaleService } from './lu-locale.service';

describe('LuLocaleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LuLocaleService]
    });
  });

  it('should be created', inject([LuLocaleService], (service: LuLocaleService) => {
    expect(service).toBeTruthy();
  }));
});
