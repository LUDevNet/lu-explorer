import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderComponentComponent } from './render.component';

describe('RenderComponentComponent', () => {
  let component: RenderComponentComponent;
  let fixture: ComponentFixture<RenderComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenderComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
