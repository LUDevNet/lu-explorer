import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({name: 'replace'})
export class ReplacePipe implements PipeTransform {
  transform(value: string, pattern: string, instead:string): string {
    return value.replace(pattern, instead);
  }
}