import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelProgressionComponent } from './level-progression.component';

describe('LevelProgressionComponent', () => {
  let component: LevelProgressionComponent;
  let fixture: ComponentFixture<LevelProgressionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelProgressionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelProgressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
