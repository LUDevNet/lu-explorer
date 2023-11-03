import { Pipe, PipeTransform } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable, of, zip } from 'rxjs';
import { map } from 'rxjs/operators';
import { DB_Icons } from '../../../defs/cdclient';
import { LuDocsService, LuResService, LuLocaleService, LuCoreDataService } from '../../services';

@Pipe({ name: 'docs' })
export class DocsPipe implements PipeTransform {

  constructor(private luDocs: LuDocsService) { }

  transform(value: string): any {
    return this.luDocs.link(value);
  }
}

@Pipe({ name: 'res' })
export class ResourcePipe implements PipeTransform {

  constructor(private luRes: LuResService) { }

  transform(value: string): string {
    return this.luRes.getResolvedResUrl(value);
  }
}

@Pipe({ name: 'icon' })
export class IconPipe implements PipeTransform {
  constructor(private luRes: LuResService) { }

  transform(value?: DB_Icons | string): string | null {
    let path;
    if (value === null || value === undefined) {
      path = "inventory/unknown.png"
    } else {
      if (typeof value === "string") {
        path = value;
      } else {
        path = value.IconPath;
      }
      path = path.toLowerCase().replace(/dds$/, "png");
    }
    return this.luRes.getResolvedResUrl(`textures/ui/${path}`);
  }
}

@Pipe({ name: 'loc' })
export class LocalePipe implements PipeTransform {

  constructor(private luLocale: LuLocaleService) { }

  transform(value: number, arg: string): any {
    return this.luLocale.getLocaleEntry(arg, value);
  }

}

@Pipe({ name: 'trans' })
export class TranslatePipe implements PipeTransform {

  constructor(private luLocale: LuLocaleService) { }

  transform(value: string): Observable<string> {
    return this.luLocale.translate(value);
  }
}


@Pipe({ name: 'data' })
export class DataPipe implements PipeTransform {

  constructor(private coreData: LuCoreDataService) { }

  getObject(id: number): Observable<any> {
    const obj = this.coreData.getTableEntry('Objects', id);
    const cr = this.coreData.getTableEntry('ComponentsRegistry', id);
    const skills = this.coreData.getTableEntry('ObjectSkills', id);
    return zip(obj, cr, skills).pipe(map(([obj, comp, skills]) => {
      let components = {};
      comp.forEach(x => { components[x.component_type] = x.component_id; });
      return Object.assign(obj[0], {
        components,
        skills
      })
    }));
  }

  transform(value: number, arg: string): any {
    let call = {
      object: x => this.getObject(x),
      renderComponent: x => this.coreData.getSingleTableEntry("RenderComponent", x),
      lootTable: x => this.coreData.getRevEntry("loot_table_index", x),
    }[arg];
    return arg ? call(value) : of(null);
  }
}

@Pipe({ name: 'query', pure: false })
export class QueryPipe implements PipeTransform {

  constructor(private luCoreData: LuCoreDataService, private asyncPipe: AsyncPipe) { }

  transform(value: string): any[] {
    return this.asyncPipe.transform(this.luCoreData.querySql(value));
  }
}
