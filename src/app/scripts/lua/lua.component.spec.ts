import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LuaComponent } from './lua.component';

describe('LuaComponent', () => {
  let component: LuaComponent;
  let fixture: ComponentFixture<LuaComponent>;

  beforeEach(async(() => {
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
