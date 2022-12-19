import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GateVersionTocComponent } from './gate-version-toc.component';

describe('GateVersionTocComponent', () => {
  let component: GateVersionTocComponent;
  let fixture: ComponentFixture<GateVersionTocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GateVersionTocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GateVersionTocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
