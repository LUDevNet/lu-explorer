import { Component, OnInit, Input } from '@angular/core';
import { LuCoreDataService } from '../../../services';

@Component({
  selector: 'app-quick-build-component',
  templateUrl: './quick-build-component.component.html',
  styleUrls: ['./quick-build-component.component.css']
})
export class QuickBuildComponentComponent implements OnInit {

  @Input() id: number;
  component: any;

  constructor(private coreData: LuCoreDataService) { }

  ngOnInit() {
    this.getComponent();
  }

  getComponent(): void {
    this.coreData.getSingleTableEntry("RebuildComponent", this.id)
      .subscribe(component => this.component = component);
  }

}
