import { Component } from '@angular/core';
import { BannerComponent } from 'src/app/components/banner.component';

@Component({
  selector: 'on-viewport',
  template: `
   <h2>On Viewport</h2>

    <div style="height: 1500px;"></div>

    @defer (on viewport) {
      <app-banner />
    } @placeholder {
      <p>The content is not visible yet</p>
    }

    <!-- @defer (on viewport(trigger)) {
      <app-banner />
    }

    <div #trigger>
      Content is visible
    </div> -->
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
export class OnViewportComponent { }