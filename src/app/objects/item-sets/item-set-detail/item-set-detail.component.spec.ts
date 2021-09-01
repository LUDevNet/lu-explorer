import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { ServicesModule } from '../../../util/services/services.module';

import { ItemSetDetailComponent } from './item-set-detail.component';

describe('ItemSetDetailComponent', () => {
  let component: ItemSetDetailComponent;
  let fixture: ComponentFixture<ItemSetDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ServicesModule, RouterModule.forRoot([])],
      declarations: [ ItemSetDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemSetDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
