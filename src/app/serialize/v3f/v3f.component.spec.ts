import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { V3fComponent } from './v3f.component';

describe('V3fComponent', () => {
  let component: V3fComponent;
  let fixture: ComponentFixture<V3fComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V3fComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V3fComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
