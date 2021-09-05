import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MessageService } from '../../../util/services/message.service';
import { LuJsonService, UtilModule } from '../../../util/util.module';
import { ComponentsModule } from '../components.module';

import { CollectibleComponentComponent } from './collectible-component.component';

describe('CollectibleComponentComponent', () => {
  let component: CollectibleComponentComponent;
  let fixture: ComponentFixture<CollectibleComponentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [LuJsonService, MessageService],
      imports: [ComponentsModule, UtilModule, HttpClientModule],
      declarations: [CollectibleComponentComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectibleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
