import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LuaComponent } from './lua.component';

describe('LuaComponent', () => {
  let component: LuaComponent;
  let fixture: ComponentFixture<LuaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LuaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
