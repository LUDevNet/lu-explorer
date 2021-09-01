import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ServicesModule } from '../../util/services/services.module';
import { UtilModule } from '../../util/util.module';

import { BrickColorsComponent } from './brick-colors.component';

describe('BrickColorsComponent', () => {
  let component: BrickColorsComponent;
  let fixture: ComponentFixture<BrickColorsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ServicesModule, UtilModule],
      declarations: [ BrickColorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrickColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
