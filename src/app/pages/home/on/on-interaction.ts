import { Component } from '@angular/core';
import { BannerComponent } from 'src/app/components/banner.component';

@Component({
  selector: 'on-interaction',
  template: `
   <h2>On Interaction</h2>

    @defer (on interaction) {
      <app-banner />
    } @placeholder {
      <button tabindex="0">I'm the Placeholder (click on it!)</button>
    }

    <!-- @defer (on interaction(trigger)) {
      <app-banner />
    } @placeholder {
      <p>The content is not visible yet</p>
    }

    <button #trigger>Click to render the content</button> -->
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
export class OnInteractionComponent { }
