import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'todate'})
export class DatePipe implements PipeTransform {
  transform(value: number) : any {
    return new Date(+value * 1000);
  }
}

@Pipe({name: 'fixednum'})
export class FixedNumPipe implements PipeTransform {
  transform(value: number, precision: number): string {
    return value.toPrecision(precision).replace(/\.?0+$/, "");
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
