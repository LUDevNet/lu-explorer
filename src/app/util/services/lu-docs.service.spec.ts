import { TestBed } from '@angular/core/testing';

import { LuDocsService } from './lu-docs.service';

describe('LuDocsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LuDocsService = TestBed.get(LuDocsService);
    expect(service).toBeTruthy();
  });
});
