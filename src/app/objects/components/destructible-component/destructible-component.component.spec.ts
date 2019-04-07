import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestructibleComponentComponent } from './destructible-component.component';

describe('DestructibleComponentComponent', () => {
  let component: DestructibleComponentComponent;
  let fixture: ComponentFixture<DestructibleComponentComponent>;

  beforeEach(async(() => {
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
