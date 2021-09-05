import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServicesModule } from '../../../util/services/services.module';

import { MinifigComponentComponent } from './minifig-component.component';

describe('MinifigComponentComponent', () => {
  let component: MinifigComponentComponent;
  let fixture: ComponentFixture<MinifigComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesModule],
      declarations: [MinifigComponentComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinifigComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
