import { Component } from '@angular/core';
import { BannerComponent } from 'src/app/components/banner.component';

@Component({
  selector: 'on-timer',
  template: `
   <h2>On Timer</h2>

    @defer (on timer(1500ms)) {
      <app-banner />
    } @placeholder {
      <p>The content is not visible yet</p>
    }
  `,
  standalone: true,
  imports: [BannerComponent],
  styles: [
    `
      :host {
        display: block;
        width: 100%;
        height: 100%;
      }
    `,
  ]
})
export class OnTimerComponent { }