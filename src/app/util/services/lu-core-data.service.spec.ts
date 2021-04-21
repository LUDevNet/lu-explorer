import { TestBed } from '@angular/core/testing';

import { LuCoreDataService } from './lu-core-data.service';

describe('LuCoreDataService', () => {
  let service: LuCoreDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LuCoreDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
