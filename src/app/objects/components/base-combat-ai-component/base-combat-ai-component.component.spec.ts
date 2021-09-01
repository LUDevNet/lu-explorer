import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServicesModule } from '../../../util/services/services.module';

import { BaseCombatAiComponentComponent } from './base-combat-ai-component.component';

describe('BaseCombatAiComponentComponent', () => {
  let component: BaseCombatAiComponentComponent;
  let fixture: ComponentFixture<BaseCombatAiComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesModule],
      declarations: [ BaseCombatAiComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseCombatAiComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
