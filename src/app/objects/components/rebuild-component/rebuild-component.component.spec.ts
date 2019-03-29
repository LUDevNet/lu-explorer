import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RebuildComponentComponent } from './rebuild-component.component';

describe('RebuildComponentComponent', () => {
  let component: RebuildComponentComponent;
  let fixture: ComponentFixture<RebuildComponentComponent>;

  beforeEach(async(() => {
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
