import { Pipe, PipeTransform } from '@angular/core';

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
    if (value == null) return null;
    let dict = {};
    for (var i = 0; i < value.length; i++) {
      dict[String(value[i][arg])] = value[i];
    }
    return dict;
  }
}

@Pipe({name: 'range'})
export class RangePipe implements PipeTransform {
  transform(range: number) : number[] {
    var array = [];
    for (var i = 0; i < range; i++) {
      array.push(i);
    }
    return array;
  }
}

@Pipe({name: 'elem'})
export class ElementPipe implements PipeTransform {
  transform(value: Object, arg: string) : any {
    return value ? value[arg] : null;
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
