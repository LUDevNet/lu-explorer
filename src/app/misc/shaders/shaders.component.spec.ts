import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServicesModule } from '../../util/services/services.module';
import { UtilModule } from '../../util/util.module';

import { ShadersComponent } from './shaders.component';

describe('ShadersComponent', () => {
  let component: ShadersComponent;
  let fixture: ComponentFixture<ShadersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesModule, UtilModule],
      declarations: [ ShadersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
