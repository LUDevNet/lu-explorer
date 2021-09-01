import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { ServicesModule } from '../../util/services/services.module';

import { MissionsBySubtypeComponent } from './by-subtype.component';

describe('MissionsBySubtypeComponent', () => {
  let component: MissionsBySubtypeComponent;
  let fixture: ComponentFixture<MissionsBySubtypeComponent>;

  beforeEach(waitForAsync(() => {
    let params = { type: "Location", subtype: "Avant Gardens" };
    let paramMap = convertToParamMap(params);

    TestBed.configureTestingModule({
      imports: [ServicesModule, RouterTestingModule.withRoutes([])],
      declarations: [MissionsBySubtypeComponent],
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
    fixture = TestBed.createComponent(MissionsBySubtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
