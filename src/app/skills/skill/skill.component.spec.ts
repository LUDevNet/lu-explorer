import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';
import { ServicesModule } from '../../util/services/services.module';
import { UtilModule } from '../../util/util.module';
import { SkillsModule } from '../skills.module';

import { SkillComponent } from './skill.component';

describe('SkillComponent', () => {
  let component: SkillComponent;
  let fixture: ComponentFixture<SkillComponent>;

  beforeEach(waitForAsync(() => {
    let params = {id: 1000};
    TestBed.configureTestingModule({
      imports: [ServicesModule, UtilModule, SkillsModule],
      declarations: [ SkillComponent ],
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
    fixture = TestBed.createComponent(SkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
