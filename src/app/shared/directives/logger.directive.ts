import { Directive } from '@angular/core';

@Directive({
  selector: '[logger]',
  standalone: true,
})
export class LoggerDirective {
  constructor() {
    console.log('LoggerDirective');
  }
}
