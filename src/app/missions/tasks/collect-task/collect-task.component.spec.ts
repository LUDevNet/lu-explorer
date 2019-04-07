import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectTaskComponent } from './collect-task.component';

describe('CollectTaskComponent', () => {
  let component: CollectTaskComponent;
  let fixture: ComponentFixture<CollectTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
