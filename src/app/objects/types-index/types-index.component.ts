import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LuJsonService, LuLocaleService } from '../../services';

@Component({
  selector: 'app-types-index',
  templateUrl: './types-index.component.html',
  styleUrls: ['./types-index.component.css']
})
export class ObjectTypesIndexComponent implements OnInit {

  $types: Observable<string[]>;

  constructor(private luJsonService: LuJsonService, private luLocaleService: LuLocaleService) { }

  ngOnInit() {
    this.$types = this.luJsonService.getObjectTypes();
  }

}
