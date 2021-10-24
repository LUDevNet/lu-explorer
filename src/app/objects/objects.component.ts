import { Component, OnInit } from '@angular/core';
import { Locale_Objects } from '../../defs/locale';

type ObjectDict = { [key: string]: Locale_Objects };

@Component({
  selector: 'app-objects',
  templateUrl: './objects.component.html',
  styleUrls: ['./objects.component.css']
})
export class ObjectsComponent implements OnInit {

  objects: ObjectDict = {};
  filteredObjects: ObjectDict = {};
  needle: string = "";

  constructor() { }

  ngOnInit() {
    //this.getObjects();
  }

  /*
  filter(obj: any, predicate: any, max_size: number)
  {
    let keys = Object.keys(obj).filter( key => predicate(obj[key]))
    let to = Math.min(max_size, keys.length);
    return keys.slice(0, to).reduce( (res, key) => (res[key] = obj[key], res), {});
  }

  updateFilterList()
  {
    this.filteredObjects = Object.assign({},this.filter(this.objects, object => object.name.includes(this.needle), 100));
  }

  getObjects():void
  {
    this.luLocaleService.getLocaleTable("Objects").subscribe(index => this.processObjectIndex(index));
  }

  processObjectIndex(index: any):void
  {
    for (let page of index.pages)
    {
      this.luLocaleService.getLocalePage("Objects", page).subscribe(page => this.processObjectPage(page));
    }
  }

  processObjectPage(page: any):void
  {
    this.objects = Object.assign({}, this.objects, page);
    this.updateFilterList();
  }*/
}
