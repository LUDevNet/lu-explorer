import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { ServicesModule } from '../../util/services/services.module';

import { LvlFileComponent } from './lvl-file.component';

describe('LvlFileComponent', () => {
  let component: LvlFileComponent;
  let fixture: ComponentFixture<LvlFileComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ServicesModule, RouterModule.forRoot([])],
      declarations: [LvlFileComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LvlFileComponent);
    component = fixture.componentInstance;
    component.ref = {
      path: "foo",
      name: "bar",
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
