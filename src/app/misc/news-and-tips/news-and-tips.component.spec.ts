import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsAndTipsComponent } from './news-and-tips.component';

describe('NewsAndTipsComponent', () => {
  let component: NewsAndTipsComponent;
  let fixture: ComponentFixture<NewsAndTipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsAndTipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsAndTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
