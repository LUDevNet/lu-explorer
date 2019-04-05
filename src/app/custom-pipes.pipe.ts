import { Pipe, PipeTransform } from '@angular/core';
import { LuDocsService, LuResService } from './services';

@Pipe({name: 'replace'})
export class ReplacePipe implements PipeTransform {
  transform(value: string, pattern: string, instead:string): string {
    if (value) {
      let re = new RegExp(pattern, 'g');
      return value.replace(re, instead);
    }
    return value;
  }
}

// https://stackoverflow.com/questions/35534959/access-key-and-value-of-object-using-ngfor
@Pipe({name: 'keys'})
export class KeysPipe implements PipeTransform {
  transform(value, args:string[]) : any {
    let keys = [];
    for (let key in value) {
      keys.push({key: key, value: value[key]});
    }
    return keys;
  }
}

@Pipe({name: 'dict'})
export class DictPipe implements PipeTransform {
  transform(value: Object[], arg: string) : any {
    let dict = {};
    for (var i = 0; i < value.length; i++) {
      dict[String(value[i][arg])] = value[i];
    }
    return dict;
  }
}

@Pipe({name: 'elem'})
export class ElementPipe implements PipeTransform {
  transform(value: Object, arg: string) : any {
    return value[arg];
  }
}

@Pipe({name: 'some'})
export class SomePipe implements PipeTransform {
  transform(value: Object) : any {
    return value == 0 || Boolean(value);
  }
}


@Pipe({name: 'percent'})
export class PercentPipe implements PipeTransform {
  transform(value) : any {
    let percent = 100 * value;
    return 100 + '%';
  }
}

@Pipe({name: 'to'})
export class ToPipe implements PipeTransform {
  transform(value: number, other: number) : string {
    if (value == other) return String(value);
    return value + " to " + other;
  }
}

// https://stackoverflow.com/questions/35534959/access-key-and-value-of-object-using-ngfor
@Pipe({name: 'remove'})
export class RemovePipe implements PipeTransform {
  transform(value, filter:string) : any {
    let copy = Object.assign({}, value);
    delete copy[filter];
    return copy;
  }
}

@Pipe({name: 'bitset'})
export class BitSetPipe implements PipeTransform {
  transform(value: any, key: number) : any {
    let val = value ? +value : 0;
    return (val & key) != 0;
  }
}

@Pipe({name: 'bitand'})
export class BitAndPipe implements PipeTransform {
  transform(value: any, key: number) : any {
    let val = value ? +value : 0;
    return (val & key);
  }
}

@Pipe({name: 'bitor'})
export class BitOrPipe implements PipeTransform {
  transform(value: any, key: number) : any {
    let val = value ? +value : 0;
    return (val | key);
  }
}

@Pipe({name: 'bitshr'})
export class BitShiftRightPipe implements PipeTransform {
  transform(value: any, key: number) : any {
    let val = value ? +value : 0;
    return (val >> key);
  }
}

@Pipe({name: 'bitshl'})
export class BitShiftLeftPipe implements PipeTransform {
  transform(value: any, key: number) : any {
    let val = value ? +value : 0;
    return (val << key);
  }
}

@Pipe({name: 'not'})
export class NotPipe implements PipeTransform {
  transform(value: any) : any {
    return !value;
  }
}

@Pipe({name: 'nonnull'})
export class NonNullPipe implements PipeTransform {
  transform(value) : any {
    return value.filter(obj => obj.value != undefined);
  }
}

@Pipe({name: 'todate'})
export class DatePipe implements PipeTransform {
  transform(value: number) : any {
    return new Date(+value * 1000);
  }
}

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


@Pipe({name: 'html'})
export class HtmlPipe implements PipeTransform {

  element: any = document.createElement('div');

  transform(str: string) : any
  {
    if (str)
    {
      // strip script/html tags
      str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
      //str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
      this.element.innerHTML = str;
      console.log(str);
      //str = this.element.textContent;
      console.log(str);
      this.element.textContent = '';
    }

    return str;
  }
}
