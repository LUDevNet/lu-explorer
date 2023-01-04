import { Component, OnInit, Input } from '@angular/core';
import { LuCoreDataService } from '../../../services';

@Component({
  selector: 'app-rebuild-component',
  templateUrl: './rebuild-component.component.html',
  styleUrls: ['./rebuild-component.component.css']
})
export class RebuildComponentComponent implements OnInit {

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
