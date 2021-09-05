import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { UtilModule } from '../../../util/util.module';

import { ItemTaskComponent } from './item-task.component';

describe('ItemTaskComponent', () => {
  let component: ItemTaskComponent;
  let fixture: ComponentFixture<ItemTaskComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [UtilModule],
      declarations: [ItemTaskComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemTaskComponent);
    component = fixture.componentInstance;
    component.task = {
      id: 100,
      localize: true,
      locStatus: 2,
      target: 1000,
      targetGroup: "",
      taskType: 11,
      targetValue: 1,
      uid: 1000,
      taskParam1: null,
      largeTaskIcon: null,
      IconID: null,
      largeTaskIconID: null,
      gate_version: "mock",
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
