import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';
import { ServicesModule } from '../../util/services/services.module';

import { BehaviorDetailAltComponent } from './behavior-detail-alt.component';

describe('BehaviorDetailAltComponent', () => {
  let component: BehaviorDetailAltComponent;
  let fixture: ComponentFixture<BehaviorDetailAltComponent>;

  beforeEach(waitForAsync(() => {
    let params = { id: 1000 };
    let paramMap = convertToParamMap(params);
    TestBed.configureTestingModule({
      imports: [ServicesModule],
      declarations: [ BehaviorDetailAltComponent ],
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
    fixture = TestBed.createComponent(BehaviorDetailAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
