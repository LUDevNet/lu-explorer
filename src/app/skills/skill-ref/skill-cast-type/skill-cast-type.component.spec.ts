import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SkillCastTypeComponent } from './skill-cast-type.component';

describe('SkillCastTypeComponent', () => {
  let component: SkillCastTypeComponent;
  let fixture: ComponentFixture<SkillCastTypeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillCastTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillCastTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
