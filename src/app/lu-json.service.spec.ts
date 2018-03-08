import { TestBed, inject } from '@angular/core/testing';

import { LuJsonService } from './lu-json.service';

describe('LuJsonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LuJsonService]
    });
  });

  it('should be created', inject([LuJsonService], (service: LuJsonService) => {
    expect(service).toBeTruthy();
  }));
});
