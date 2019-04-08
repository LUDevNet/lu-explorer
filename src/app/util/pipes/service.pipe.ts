import { Pipe, PipeTransform } from '@angular/core';
import { LuDocsService, LuResService, LuLocaleService } from '../../services';

@Pipe({name: 'docs'})
export class DocsPipe implements PipeTransform {

  constructor(private luDocs: LuDocsService) {}

  transform(value: string) : any {
    return this.luDocs.link(value);
  }
}

@Pipe({name: 'res'})
export class ResourcePipe implements PipeTransform {

  constructor(private luRes: LuResService) {}

  transform(value: string) : any {
    return this.luRes.getResolvedResUrl(value);
  }
}

@Pipe({name: 'loc'})
export class LocalePipe implements PipeTransform {

  constructor(private luLocale: LuLocaleService) {}

  transform(value: number, arg: string) : any {
    return this.luLocale.getLocaleEntry(arg, value);
  }

}
