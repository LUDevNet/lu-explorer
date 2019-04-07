import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoiTaskComponent } from './poi-task.component';

describe('PoiTaskComponent', () => {
  let component: PoiTaskComponent;
  let fixture: ComponentFixture<PoiTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoiTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoiTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
