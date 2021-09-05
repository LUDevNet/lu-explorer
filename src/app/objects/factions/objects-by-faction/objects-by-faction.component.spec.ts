import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { ServicesModule } from '../../../util/services/services.module';
import { LuJsonService } from '../../../util/util.module';
import { FactionsModule } from '../factions.module';

import { ObjectsByFactionComponent } from './objects-by-faction.component';

describe('ObjectsByFactionComponent', () => {
  let component: ObjectsByFactionComponent;
  let fixture: ComponentFixture<ObjectsByFactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesModule, RouterModule.forRoot([])],
      declarations: [ ObjectsByFactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectsByFactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
