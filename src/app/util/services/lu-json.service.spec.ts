import { HttpClientModule } from '@angular/common/http';
import { TestBed, inject } from '@angular/core/testing';

import { LuJsonService } from './lu-json.service';
import { MessageService } from './message.service';

describe('LuJsonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [MessageService, LuJsonService]
    });
  });

  it('should be created', inject([LuJsonService], (service: LuJsonService) => {
    expect(service).toBeTruthy();
  }));
});
