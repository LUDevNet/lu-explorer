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
    component.ref = {type: 'lit', value: 1000};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
