import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-banner',
  template: `Banner Component`,
  standalone: true,
  host: {
    class: 'app-banner',
  },
  styles: [
    `
      .app-banner {
        display: block;
        width: 100%;
        height: 100%;
        border: 1px solid #b3bdc7;
        padding: 16px;
        border-radius: 8px;
        box-sizing: border-box;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class BannerComponent {
  constructor() {
    console.log('BannerComponent');
  }
}
