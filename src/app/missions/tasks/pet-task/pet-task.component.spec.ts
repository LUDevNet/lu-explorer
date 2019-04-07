import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetTaskComponent } from './pet-task.component';

describe('PetTaskComponent', () => {
  let component: PetTaskComponent;
  let fixture: ComponentFixture<PetTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
