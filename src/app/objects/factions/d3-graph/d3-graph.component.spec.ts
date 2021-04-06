import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D3GraphComponent } from './d3-graph.component';

describe('D3GraphComponent', () => {
  let component: D3GraphComponent;
  let fixture: ComponentFixture<D3GraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D3GraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D3GraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
