import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'replace'})
export class ReplacePipe implements PipeTransform {
  transform(value: string, pattern: string, instead:string): string {
    let re = new RegExp(pattern, 'g');
    return value.replace(re, instead);
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

// https://stackoverflow.com/questions/35534959/access-key-and-value-of-object-using-ngfor
@Pipe({name: 'remove'})
export class RemovePipe implements PipeTransform {
  transform(value, filter:string) : any {
    let copy = Object.assign({}, value);
    delete copy[filter];
    return copy;
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
