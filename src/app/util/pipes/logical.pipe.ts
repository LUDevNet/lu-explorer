import { Pipe, PipeTransform } from '@angular/core';


@Pipe({name: 'bits'})
export class BitsPipe implements PipeTransform {
  transform(value: any) : any {
    var flags = [];
    var m = Math.floor(value);
    for (var i = 0; i < 64; i++) {
      if ((m % 2) == 1) {
        flags.push(i);
      }
      if (m < 2) break;
      m = Math.floor(m / 2);
    }
    return flags;
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

@Pipe({name: 'some'})
export class SomePipe implements PipeTransform {
  transform(value: Object) : any {
    return value == 0 || Boolean(value);
  }
}

@Pipe({name: 'divceil'})
export class DivCeilPipe implements PipeTransform {
  transform(value: number, param: number) : any {
    return Math.ceil(value / param);
  }
}
