import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectibleComponent } from './collectible.component';

describe('CollectibleComponent', () => {
  let component: CollectibleComponent;
  let fixture: ComponentFixture<CollectibleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectibleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
