import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreconditionComponent } from './precondition.component';

describe('PreconditionComponent', () => {
  let component: PreconditionComponent;
  let fixture: ComponentFixture<PreconditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreconditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreconditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
