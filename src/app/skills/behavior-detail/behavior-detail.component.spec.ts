import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { ServicesModule } from '../../util/services/services.module';

import { BehaviorDetailComponent } from './behavior-detail.component';

describe('BehaviorDetailComponent', () => {
  let component: BehaviorDetailComponent;
  let fixture: ComponentFixture<BehaviorDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ServicesModule, RouterModule.forRoot([])],
      declarations: [ BehaviorDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BehaviorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
