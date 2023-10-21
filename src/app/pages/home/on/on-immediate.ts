import { Component } from '@angular/core';
import { BannerComponent } from 'src/app/components/banner.component';

@Component({
  selector: 'on-immediate',
  template: `
   <h2>On Immediate</h2>

    @defer (on immediate) {
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
export class OnImmediateComponent { }