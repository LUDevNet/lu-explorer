import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { ServicesModule } from '../../util/services/services.module';
import { UtilModule } from '../../util/util.module';

import { ObjectsByTypeComponent } from './by-type.component';

describe('ObjectsByTypeComponent', () => {
  let component: ObjectsByTypeComponent;
  let fixture: ComponentFixture<ObjectsByTypeComponent>;

  beforeEach(waitForAsync(() => {
    let params = { type: "Environmental" };
    let paramMap = convertToParamMap(params);

    TestBed.configureTestingModule({
      imports: [ServicesModule, UtilModule, RouterTestingModule.withRoutes([])],
      declarations: [ObjectsByTypeComponent],
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
    fixture = TestBed.createComponent(ObjectsByTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
