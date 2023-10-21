import { Component } from '@angular/core';

import { DeferBasicComponent, DeferOnComponent, DeferPrefetchComponent, DeferWhenComponent } from './pages/home';
@Component({
  selector: 'app-root',
  template: `
    <!-- <app-defer-basic /> -->
    <!-- <app-defer-when /> -->
    <!-- <app-defer-on /> -->
    <!-- <app-defer-prefetch /> -->
  `,
  standalone: true,
  imports: [DeferBasicComponent, DeferWhenComponent, DeferOnComponent, DeferPrefetchComponent],
})
export class AppComponent {
  title = 'angular-defer-v17';
}
