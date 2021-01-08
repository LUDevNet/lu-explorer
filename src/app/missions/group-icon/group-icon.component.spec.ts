import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupIconComponent } from './group-icon.component';

describe('GroupIconComponent', () => {
  let component: GroupIconComponent;
  let fixture: ComponentFixture<GroupIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
