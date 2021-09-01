import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';

import { MiscComponent } from './misc.component';

describe('MiscComponent', () => {
  let component: MiscComponent;
  let fixture: ComponentFixture<MiscComponent>;

  beforeEach(waitForAsync(() => {
    let params = {};
    TestBed.configureTestingModule({
      declarations: [ MiscComponent ],
      providers: [
        {
          provide: ActivatedRoute, useValue: {
            paramMap: of(convertToParamMap(params)),
            params: of(params),
          }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
