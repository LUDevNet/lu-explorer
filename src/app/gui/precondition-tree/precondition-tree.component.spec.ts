import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreconditionTreeComponent } from './precondition-tree.component';

describe('PreconditionTreeComponent', () => {
  let component: PreconditionTreeComponent;
  let fixture: ComponentFixture<PreconditionTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreconditionTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreconditionTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
