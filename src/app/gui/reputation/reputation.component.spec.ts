import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ReputationComponent } from "./reputation.component";

describe("ReputationComponent", () => {
  let component: ReputationComponent;
  let fixture: ComponentFixture<ReputationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReputationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReputationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
