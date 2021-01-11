import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectsByFactionComponent } from './objects-by-faction.component';

describe('ObjectsByFactionComponent', () => {
  let component: ObjectsByFactionComponent;
  let fixture: ComponentFixture<ObjectsByFactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectsByFactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectsByFactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
