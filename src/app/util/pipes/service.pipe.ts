import { Pipe, PipeTransform } from '@angular/core';
import { LuDocsService, LuResService } from '../../services';

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
