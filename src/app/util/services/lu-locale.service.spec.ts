import { HttpClientModule } from '@angular/common/http';
import { TestBed, inject } from '@angular/core/testing';
import { LuJsonService } from './lu-json.service';

import { LuLocaleService } from './lu-locale.service';
import { MessageService } from './message.service';
import { ServicesModule } from './services.module';

describe('LuLocaleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [LuLocaleService, LuJsonService, MessageService],
    });
  });

  it('should be created', inject([LuLocaleService], (service: LuLocaleService) => {
    expect(service).toBeTruthy();
  }));
});
