import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
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

  transform(value: string): any {
    return this.luRes.getResolvedResUrl(value);
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
      activityRewards: x => this.luJson.getActivityRewards(x),
    }[arg];
    if (arg) return call(value);
  }

}
