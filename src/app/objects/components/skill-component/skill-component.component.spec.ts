import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SkillComponentComponent } from './skill-component.component';

describe('SkillComponentComponent', () => {
  let component: SkillComponentComponent;
  let fixture: ComponentFixture<SkillComponentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
