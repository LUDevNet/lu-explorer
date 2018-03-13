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
