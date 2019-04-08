import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrickAttributesComponent } from './brick-attributes.component';

describe('BrickAttributesComponent', () => {
  let component: BrickAttributesComponent;
  let fixture: ComponentFixture<BrickAttributesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrickAttributesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrickAttributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
