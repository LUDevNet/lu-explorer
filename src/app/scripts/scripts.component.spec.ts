import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ServicesModule } from '../util/services/services.module';

import { ScriptsComponent } from './scripts.component';

describe('ScriptsComponent', () => {
  let component: ScriptsComponent;
  let fixture: ComponentFixture<ScriptsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ServicesModule],
      declarations: [ ScriptsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScriptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
