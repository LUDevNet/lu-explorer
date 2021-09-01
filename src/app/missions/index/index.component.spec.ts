import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ServicesModule } from '../../util/services/services.module';
import { UtilModule } from '../../util/util.module';

import { MissionIndexComponent } from './index.component';

describe('MissionIndexComponent', () => {
  let component: MissionIndexComponent;
  let fixture: ComponentFixture<MissionIndexComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ServicesModule, UtilModule],
      declarations: [ MissionIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
