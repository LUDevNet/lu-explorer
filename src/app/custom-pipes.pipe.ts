import { Pipe, PipeTransform } from '@angular/core';
import { LuDocsService } from './services';

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
