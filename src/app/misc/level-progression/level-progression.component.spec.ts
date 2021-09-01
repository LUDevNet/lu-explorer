import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ServicesModule } from '../../util/services/services.module';

import { LevelProgressionComponent } from './level-progression.component';

describe('LevelProgressionComponent', () => {
  let component: LevelProgressionComponent;
  let fixture: ComponentFixture<LevelProgressionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ServicesModule],
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
