import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ServicesModule } from '../../util/services/services.module';

import { ObjectTypesIndexComponent } from './types-index.component';

describe('ObjectTypesIndexComponent', () => {
  let component: ObjectTypesIndexComponent;
  let fixture: ComponentFixture<ObjectTypesIndexComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ServicesModule],
      declarations: [ ObjectTypesIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectTypesIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
