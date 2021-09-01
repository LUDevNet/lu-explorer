import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { ServicesModule } from '../../util/services/services.module';

import { ZoneDetailComponent } from './zone-detail.component';

describe('ZoneDetailComponent', () => {
  let component: ZoneDetailComponent;
  let fixture: ComponentFixture<ZoneDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ServicesModule, RouterModule.forRoot([])],
      declarations: [ ZoneDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoneDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
