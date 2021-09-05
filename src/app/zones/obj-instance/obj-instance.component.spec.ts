import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServicesModule } from '../../util/services/services.module';

import { ObjInstanceComponent } from './obj-instance.component';

describe('ObjInstanceComponent', () => {
  let component: ObjInstanceComponent;
  let fixture: ComponentFixture<ObjInstanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesModule],
      declarations: [ ObjInstanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjInstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
