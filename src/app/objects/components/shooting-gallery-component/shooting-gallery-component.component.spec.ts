import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShootingGalleryComponentComponent } from './shooting-gallery-component.component';

describe('ShootingGalleryComponentComponent', () => {
  let component: ShootingGalleryComponentComponent;
  let fixture: ComponentFixture<ShootingGalleryComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShootingGalleryComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShootingGalleryComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
