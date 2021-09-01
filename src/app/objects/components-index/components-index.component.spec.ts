import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ServicesModule } from '../../util/services/services.module';

import { ObjectComponentsIndexComponent } from './components-index.component';

describe('ObjectComponentsIndexComponent', () => {
  let component: ObjectComponentsIndexComponent;
  let fixture: ComponentFixture<ObjectComponentsIndexComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ServicesModule],
      declarations: [ ObjectComponentsIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectComponentsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
