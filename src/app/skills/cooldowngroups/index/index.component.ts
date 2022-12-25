import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LuCoreDataService } from '../../../services';

@Component({
  selector: 'lux-cooldowngroups-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class CooldownGroupIndexComponent {
  $cooldowngroups: Observable<number[]>

  constructor(private luCoreData: LuCoreDataService) {
    this.$cooldowngroups = this.luCoreData.getRev<number[]>("skills/cooldowngroups")
  }
}
