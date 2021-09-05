import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServicesModule } from '../../../util/services/services.module';
import { UtilModule } from '../../../util/util.module';

import { FactionIndexComponent } from './index.component';

describe('FactionIndexComponent', () => {
  let component: FactionIndexComponent;
  let fixture: ComponentFixture<FactionIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesModule, UtilModule],
      declarations: [ FactionIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FactionIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
