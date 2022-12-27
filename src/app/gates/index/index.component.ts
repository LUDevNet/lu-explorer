import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LuCoreDataService } from '../../services';

@Component({
  selector: 'lux-gate-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class GateIndexComponent implements OnInit {
  constructor(private luCoreData: LuCoreDataService) { }

  $gate_versions: Observable<string[]>

  ngOnInit(): void {
    this.$gate_versions = this.luCoreData.getRev<string[]>("gate-versions");
  }

}
