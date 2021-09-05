import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { ServicesModule } from '../../util/services/services.module';
import { ScriptsModule } from '../scripts.module';

import { ScriptFileComponent } from './script-file.component';

describe('ScriptFileComponent', () => {
  
  let component: ScriptFileComponent;
  let fixture: ComponentFixture<ScriptFileComponent>;

  beforeEach(waitForAsync(() => {
    let params = { path: "o_mis.lua" };
    let paramMap = convertToParamMap(params);

    TestBed.configureTestingModule({
      imports: [ServicesModule, ScriptsModule, RouterTestingModule.withRoutes([])],
      declarations: [ ScriptFileComponent ],
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
    fixture = TestBed.createComponent(ScriptFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
