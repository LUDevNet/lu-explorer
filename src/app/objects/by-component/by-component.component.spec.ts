import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute, Router, RouterModule, Params, convertToParamMap } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of } from 'rxjs';
import { ServicesModule } from '../../util/services/services.module';
import { UtilModule } from '../../util/util.module';

import { ObjectsByComponentComponent } from './by-component.component';

describe('ObjectsByComponentComponent', () => {
  let component: ObjectsByComponentComponent;
  let fixture: ComponentFixture<ObjectsByComponentComponent>;

  beforeEach(waitForAsync(() => {
    let params = {component: 2};
    let mockRouter = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      imports: [ServicesModule, UtilModule, RouterTestingModule.withRoutes([])],
      declarations: [ObjectsByComponentComponent],
      providers: [
        {
          provide: ActivatedRoute, useValue: {
            paramMap: of(convertToParamMap(params)),
            params: of(params)
          }
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectsByComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
