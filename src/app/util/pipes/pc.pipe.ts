import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pc'
})
export class PcPipe implements PipeTransform {

  transform(value: number): unknown {
    return value.toFixed(2) + "%";
  }

}
