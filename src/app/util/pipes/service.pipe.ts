import { Pipe, PipeTransform } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DB_Icons } from '../../../defs/cdclient';
import { LuDocsService, LuResService, LuLocaleService, LuJsonService } from '../../services';

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
    let icon_path = (typeof value === "string") ? value : value.IconPath;
    let path = value ? icon_path.toLowerCase().replace(/dds$/, "png") : "inventory/unknown.png";
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

  constructor(private luJson: LuJsonService) { }

  transform(value: number, arg: string): any {
    let call = {
      object: x => this.luJson.getObject(x),
      renderComponent: x => this.luJson.getRenderComponent(x),
      lootTable: x => this.luJson.getLootTableGroupByIndex(x),
      faction: x => this.luJson.getFaction(x),
    }[arg];
    return arg ? call(value) : of(null);
  }

}
