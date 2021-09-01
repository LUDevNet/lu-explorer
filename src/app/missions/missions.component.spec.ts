import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ServicesModule } from '../util/services/services.module';
import { UtilModule } from '../util/util.module';

import { MissionsComponent } from './missions.component';

describe('MissionsComponent', () => {
  let component: MissionsComponent;
  let fixture: ComponentFixture<MissionsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ServicesModule, UtilModule],
      declarations: [ MissionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
