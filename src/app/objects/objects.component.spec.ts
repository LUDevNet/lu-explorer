import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ServicesModule } from '../util/services/services.module';
import { UtilModule } from '../util/util.module';

import { ObjectsComponent } from './objects.component';

describe('ObjectsComponent', () => {
  let component: ObjectsComponent;
  let fixture: ComponentFixture<ObjectsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ServicesModule, UtilModule, RouterTestingModule.withRoutes([])],
      declarations: [ ObjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
