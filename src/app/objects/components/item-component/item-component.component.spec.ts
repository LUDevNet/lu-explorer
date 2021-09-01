import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ServicesModule } from '../../../util/services/services.module';
import { LuJsonService } from '../../../util/util.module';
import { ObjectsModule } from '../../objects.module';

import { ItemComponentComponent } from './item-component.component';

describe('ItemComponentComponent', () => {
  let component: ItemComponentComponent;
  let fixture: ComponentFixture<ItemComponentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ObjectsModule, ServicesModule, RouterTestingModule.withRoutes([])],
      declarations: [ ItemComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
