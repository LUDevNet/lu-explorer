import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadersComponent } from './shaders.component';

describe('ShadersComponent', () => {
  let component: ShadersComponent;
  let fixture: ComponentFixture<ShadersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShadersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
