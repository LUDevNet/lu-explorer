import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { ServicesModule } from '../../util/services/services.module';

import { MissionDetailComponent } from './detail.component';

describe('MissionDetailComponent', () => {
  let component: MissionDetailComponent;
  let fixture: ComponentFixture<MissionDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([]), ServicesModule],
      declarations: [ MissionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
