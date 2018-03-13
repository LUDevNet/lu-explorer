import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderComponent } from './render.component';

describe('RenderComponent', () => {
  let component: RenderComponent;
  let fixture: ComponentFixture<RenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
