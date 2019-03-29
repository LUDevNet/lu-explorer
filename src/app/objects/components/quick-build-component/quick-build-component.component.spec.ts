import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickBuildComponentComponent } from './quick-build-component.component';

describe('QuickBuildComponentComponent', () => {
  let component: QuickBuildComponentComponent;
  let fixture: ComponentFixture<QuickBuildComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickBuildComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickBuildComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
