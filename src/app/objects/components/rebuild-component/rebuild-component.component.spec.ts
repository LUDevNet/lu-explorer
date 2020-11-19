import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RebuildComponentComponent } from './rebuild-component.component';

describe('RebuildComponentComponent', () => {
  let component: RebuildComponentComponent;
  let fixture: ComponentFixture<RebuildComponentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RebuildComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RebuildComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
