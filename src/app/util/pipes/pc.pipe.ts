import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pc'
})
export class PcPipe implements PipeTransform {

  transform(value: number): string {
    return (value * 100).toFixed(2) + "%";
  }

}
