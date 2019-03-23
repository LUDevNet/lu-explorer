import { TestBed } from '@angular/core/testing';

import { LuResService } from './lu-res.service';

describe('LuResService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LuResService = TestBed.get(LuResService);
    expect(service).toBeTruthy();
  });
});
