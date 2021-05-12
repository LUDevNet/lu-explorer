import { ComponentFixture, TestBed } from "@angular/core/testing";

import { UscoreComponent } from "./uscore.component";

describe("UscoreComponent", () => {
  let component: UscoreComponent;
  let fixture: ComponentFixture<UscoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UscoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UscoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
