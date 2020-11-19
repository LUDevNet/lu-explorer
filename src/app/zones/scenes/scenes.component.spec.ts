import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ScenesComponent } from './scenes.component';

describe('ScenesComponent', () => {
  let component: ScenesComponent;
  let fixture: ComponentFixture<ScenesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
