import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { ServicesModule } from '../../util/services/services.module';

import { MissionsByTypeComponent } from './by-type.component';

describe('MissionsByTypeComponent', () => {
  let component: MissionsByTypeComponent;
  let fixture: ComponentFixture<MissionsByTypeComponent>;

  beforeEach(waitForAsync(() => {
    let params = { type: "Location" };
    let paramMap = convertToParamMap(params);

    TestBed.configureTestingModule({
      imports: [ServicesModule, RouterTestingModule.withRoutes([])],
      declarations: [ MissionsByTypeComponent ],
      providers: [
        {
          provide: ActivatedRoute, useValue: {
            paramMap: of(paramMap),
            params: of(params),
            snapshot: { paramMap, params },
          },
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionsByTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
