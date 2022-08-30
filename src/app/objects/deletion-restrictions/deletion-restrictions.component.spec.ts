import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletionRestrictionsComponent } from './deletion-restrictions.component';

describe('DeletionRestrictionsComponent', () => {
  let component: DeletionRestrictionsComponent;
  let fixture: ComponentFixture<DeletionRestrictionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletionRestrictionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletionRestrictionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
