import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'uppercase', standalone: true })
export class UppercasePipe implements PipeTransform {
  constructor() {
    console.log('UppercasePipe');
  }

  transform(value: string): string {
    return value.toUpperCase();
  }
}
