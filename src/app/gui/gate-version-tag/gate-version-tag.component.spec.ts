import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GateVersionTagComponent } from './gate-version-tag.component';

describe('GateVersionTagComponent', () => {
  let component: GateVersionTagComponent;
  let fixture: ComponentFixture<GateVersionTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GateVersionTagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GateVersionTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
