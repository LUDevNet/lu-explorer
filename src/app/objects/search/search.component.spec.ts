import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectsSearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: ObjectsSearchComponent;
  let fixture: ComponentFixture<ObjectsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectsSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
