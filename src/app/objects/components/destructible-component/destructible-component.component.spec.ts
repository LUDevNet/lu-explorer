import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DestructibleComponentComponent } from './destructible-component.component';

describe('DestructibleComponentComponent', () => {
  let component: DestructibleComponentComponent;
  let fixture: ComponentFixture<DestructibleComponentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DestructibleComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestructibleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
