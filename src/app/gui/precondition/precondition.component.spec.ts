import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServicesModule } from '../../util/services/services.module';

import { PreconditionComponent } from './precondition.component';

describe('PreconditionComponent', () => {
  let component: PreconditionComponent;
  let fixture: ComponentFixture<PreconditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesModule],
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
