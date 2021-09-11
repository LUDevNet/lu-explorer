import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsCoolItemsComponent } from './whats-cool-items.component';

describe('WhatsCoolItemsComponent', () => {
  let component: WhatsCoolItemsComponent;
  let fixture: ComponentFixture<WhatsCoolItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatsCoolItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatsCoolItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
