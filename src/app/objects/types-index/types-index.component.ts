import { Component, OnInit } from '@angular/core';
import { LuJsonService, LuLocaleService } from '../../services';

@Component({
  selector: 'app-types-index',
  templateUrl: './types-index.component.html',
  styleUrls: ['./types-index.component.css']
})
export class ObjectTypesIndexComponent implements OnInit {

  types: any;

  constructor(private luJsonService: LuJsonService, private luLocaleService: LuLocaleService) { }

  ngOnInit() {
    this.luJsonService.getObjectTypes().subscribe(data => this.types = data['types']);
  }

}
