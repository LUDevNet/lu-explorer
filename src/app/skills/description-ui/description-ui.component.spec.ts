import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionUiComponent } from './description-ui.component';

describe('DescriptionUiComponent', () => {
  let component: DescriptionUiComponent;
  let fixture: ComponentFixture<DescriptionUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptionUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
