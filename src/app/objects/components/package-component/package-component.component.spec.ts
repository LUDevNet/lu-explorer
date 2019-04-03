import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageComponentComponent } from './package-component.component';

describe('PackageComponentComponent', () => {
  let component: PackageComponentComponent;
  let fixture: ComponentFixture<PackageComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackageComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
