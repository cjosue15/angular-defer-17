import { Component } from '@angular/core';
import { BannerComponent } from 'src/app/components/banner.component';

@Component({
  selector: 'on-hover',
  template: `
   <h2>On Hover</h2>

    @defer (on hover) {
      <app-banner />
    } @placeholder {
      <button tabindex="0">Placeholder (hover it!)</button>
    }

    <!-- @defer (on hover(trigger)) {
      <app-banner />
    } @placeholder {
      <p>The content is not visible yet</p>
    }

    <button #trigger>Hover to render the content</button> -->
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
export class OnHoverComponent { }
