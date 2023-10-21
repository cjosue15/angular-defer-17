import { Component, signal } from '@angular/core';
import { BannerComponent } from 'src/app/components/banner.component';

@Component({
  selector: 'app-defer-prefetch',
  template: `
    <h2>Prefetching</h2>

    @defer (on interaction; prefetch on hover) {
      <app-banner/>
    } @placeholder {
      <span>Placeholder (hover it, then click on it!)</span>
    }


    <!-- @defer (when show(); prefetch when prefetch()) {
      <app-banner/>
    }

    <button (click)="prefetch.set(true)">Click me to prefetch!</button>
    <button (click)="show.set(true)">Click me to show!</button> -->


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
export class DeferPrefetchComponent { 
  prefetch = signal(false)

  show = signal(false);
}