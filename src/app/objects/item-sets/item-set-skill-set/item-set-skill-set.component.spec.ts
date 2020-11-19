import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ItemSetSkillSetComponent } from './item-set-skill-set.component';

describe('ItemSetSkillSetComponent', () => {
  let component: ItemSetSkillSetComponent;
  let fixture: ComponentFixture<ItemSetSkillSetComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemSetSkillSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemSetSkillSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
