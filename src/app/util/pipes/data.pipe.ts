import { Pipe, PipeTransform } from '@angular/core';

interface KeyValue<K, T> {
  key: K,
  value: T,
}

// https://stackoverflow.com/questions/35534959/access-key-and-value-of-object-using-ngfor
@Pipe({ name: 'keys' })
export class KeysPipe implements PipeTransform {
  transform<K extends string, V>(value: Record<K, V>): KeyValue<K, V>[] {
    let keys: KeyValue<K, V>[] = [];
    for (let key in value) {
      keys.push({ key: key, value: value[key] });
    }
    return keys;
  }
}

@Pipe({ name: 'keyset' })
export class KeySetPipe implements PipeTransform {
  transform<V>(value: { [key: string]: V }): Set<string> {
    let keyset: Set<string> = new Set();
    for (let key in value) {
      keyset.add(key);
    }
    return keyset;
  }
}

@Pipe({ name: 'paramset' })
export class ParamSetPipe implements PipeTransform {
  transform(value: { [key: string]: any }, arg: string): Set<string> {
    let keyset: Set<string> = new Set();
    for (let key in value) {
      keyset.add(value[key][arg] || "");
    }
    return keyset;
  }
}

@Pipe({ name: 'arrkeys' })
export class ArrKeysPipe implements PipeTransform {
  transform<V>(value: V[]): KeyValue<number, V>[] {
    let keys: KeyValue<number, V>[] = [];
    for (let key in value) {
      keys.push({ key: Number(key), value: value[key] });
    }
    return keys;
  }
}

@Pipe({ name: 'dict' })
export class DictPipe implements PipeTransform {
  transform<T, K extends keyof T>(value: T[], arg: K): Record<string | number, T> {
    if (value == null) return null;
    let dict = {};
    for (var i = 0; i < value.length; i++) {
      dict[String(value[i][arg])] = value[i];
    }
    return dict;
  }
}

@Pipe({ name: 'group' })
export class GroupPipe implements PipeTransform {
  transform<T>(value: T[], arg: string): { [key: string]: T[] } {
    if (value == null) return null;
    let dict = {};
    for (var i = 0; i < value.length; i++) {
      let attr = String(value[i][arg] || "");
      if (!dict.hasOwnProperty(attr)) {
        dict[attr] = [];
      }
      dict[attr].push(value[i]);
    }
    return dict;
  }
}

@Pipe({ name: 'range' })
export class RangePipe implements PipeTransform {
  transform(range: number): number[] {
    var array = [];
    for (var i = 0; i < range; i++) {
      array.push(i);
    }
    return array;
  }
}

@Pipe({ name: 'limit' })
export class LimitPipe implements PipeTransform {
  transform<T>(list: T[], limit: number, skip?: number): T[] {
    if (list) {
      console.log(skip);
      var array = [];
      let min = Math.min(skip || 0, list.length);
      let max = Math.min(min + limit, list.length);
      for (var i = min; i < max; i++) {
        array.push(list[i]);
      }
      return array;
    }
  }
}

@Pipe({ name: 'elem' })
export class ElementPipe implements PipeTransform {
  transform(value: Object, arg: string | number): any {
    return value ? value[arg] : null;
  }
}

@Pipe({ name: 'default' })
export class DefaultPipe implements PipeTransform {
  transform<T>(value: T, arg: T): T {
    return value == null ? arg : value;
  }
}

// https://stackoverflow.com/questions/35534959/access-key-and-value-of-object-using-ngfor
@Pipe({ name: 'remove' })
export class RemovePipe implements PipeTransform {
  transform(value, filter: string): any {
    let copy = Object.assign({}, value);
    delete copy[filter];
    return copy;
  }
}

@Pipe({ name: 'nonnull' })
export class NonNullPipe implements PipeTransform {
  transform(value: { key: any, value: any }[]): any {
    return value.filter(obj => obj.value != undefined);
  }
}

// https://stackoverflow.com/questions/35158817/orderby-pipe-issue
@Pipe({
  name: "sort",
})
export class ArraySortPipe implements PipeTransform {
  transform(array: any, field: string): any[] {
    if (!Array.isArray(array)) {
      return;
    }
    return array.slice(0).sort((a: any, b: any) => {
      if (a[field] < b[field]) {
        return -1;
      } else if (a[field] > b[field]) {
        return 1;
      } else {
        return 0;
      }
    });
  }
}

@Pipe({
  name: "sortNum"
})
export class ArraySortNumPipe implements PipeTransform {
  transform(array: any, field: string): any[] {
    if (!Array.isArray(array)) {
      return;
    }
    array.sort((a: any, b: any) => {
      if (+a[field] < +b[field]) {
        return -1;
      } else if (+a[field] > +b[field]) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }
}

@Pipe({
  name: "as_array"
})
export class AsArrayPipe implements PipeTransform {
  transform<T>(input: Iterable<T>): T[] {
    return Array(...input);
  }
}

@Pipe({
  name: "maxUpTo"
})
export class MaxUpToPipe implements PipeTransform {
  transform<T>(array: T[], field: string, value: number): T {
    if (!Array.isArray(array)) {
      return;
    }
    let max = -1;
    let curr = null;
    for (let entry of array) {
      let next = +entry[field];
      console.log(entry, next, max);
      if (next > max && next <= value) {
        curr = entry;
        max = next;
      }
    }
    return curr;
  }
}
