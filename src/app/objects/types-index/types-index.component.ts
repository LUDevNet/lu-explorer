import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LuCoreDataService } from '../../services';

@Component({
  selector: 'app-types-index',
  templateUrl: './types-index.component.html',
  styleUrls: ['./types-index.component.css']
})
export class ObjectTypesIndexComponent implements OnInit {

  $types: Observable<string[]>;

  constructor(private coreData: LuCoreDataService) { }

  ngOnInit() {
    this.$types = this.coreData.getRev('object_types');
  }

}
