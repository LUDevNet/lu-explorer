import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { LuResService } from './lu-res.service';

describe('LuResService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
  }));

  it('should be created', () => {
    const service: LuResService = TestBed.inject(LuResService);
    expect(service).toBeTruthy();
  });
});
