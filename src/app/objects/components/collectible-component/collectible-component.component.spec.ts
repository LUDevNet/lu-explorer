import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CollectibleComponentComponent } from './collectible-component.component';

describe('CollectibleComponentComponent', () => {
  let component: CollectibleComponentComponent;
  let fixture: ComponentFixture<CollectibleComponentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectibleComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectibleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
