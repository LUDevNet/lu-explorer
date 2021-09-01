import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { ServicesModule } from '../../util/services/services.module';

import { LuzFileComponent } from './luz-file.component';

describe('LuzFileComponent', () => {
  let component: LuzFileComponent;
  let fixture: ComponentFixture<LuzFileComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        ServicesModule,
        RouterModule.forRoot([])
      ],
      declarations: [ LuzFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuzFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
