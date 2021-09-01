import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { GithubSpaComponent } from './github-spa.component';

describe('GithubSpaComponent', () => {
  let component: GithubSpaComponent;
  let fixture: ComponentFixture<GithubSpaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([
        {path: "dashboard", redirectTo: "https://lu-explorer.xiphoseer.de" }
      ])],
      declarations: [ GithubSpaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubSpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
