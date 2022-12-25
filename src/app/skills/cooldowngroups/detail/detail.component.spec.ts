import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CooldownGroupDetailComponent } from './detail.component';

describe('DetailComponent', () => {
  let component: CooldownGroupDetailComponent;
  let fixture: ComponentFixture<CooldownGroupDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CooldownGroupDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CooldownGroupDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
