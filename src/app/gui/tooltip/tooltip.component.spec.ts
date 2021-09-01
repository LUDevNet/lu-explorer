import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoinsComponent } from '../coins/coins.component';

import { TooltipComponent } from './tooltip.component';

describe('TooltipComponent', () => {
  let component: TooltipComponent;
  let fixture: ComponentFixture<TooltipComponent>;

  beforeEach(async () => {
    //let elem = new HTMLDivElement();
    await TestBed.configureTestingModule({
      declarations: [TooltipComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    /*
    FIXME: use directive
    fixture = TestBed.createComponent(TooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    */
  });

  it('should create', () => {
    //expect(component).toBeTruthy();
  });
});
