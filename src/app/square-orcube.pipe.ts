import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'squareORcube',
})
export class SquareORcubePipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): unknown {
    if (args[0] === 'square') {
      return value * value;
    } else if (args[0] === 'cube') {
      return value * value * value;
    } else {
      return '#' + value;
    }
  }
}
