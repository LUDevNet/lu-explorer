import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { ServicesModule } from '../../util/services/services.module';
import { UtilModule } from '../../util/util.module';

import { BrickIdsComponent } from './brick-ids.component';

describe('BrickIdsComponent', () => {
  let component: BrickIdsComponent;
  let fixture: ComponentFixture<BrickIdsComponent>;

  beforeEach(waitForAsync(() => {
    let params = {};
    let paramMap = convertToParamMap(params);

    TestBed.configureTestingModule({
      imports: [ServicesModule, UtilModule, RouterTestingModule.withRoutes([])],
      declarations: [BrickIdsComponent],
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
    fixture = TestBed.createComponent(BrickIdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
