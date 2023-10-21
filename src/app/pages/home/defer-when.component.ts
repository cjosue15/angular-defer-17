import { Component, signal } from '@angular/core';
import { BannerComponent } from 'src/app/components/banner.component';
import { LoggerDirective } from 'src/app/shared/directives/logger.directive';
import { UppercasePipe } from 'src/app/shared/pipes/uppercase.pipe';

@Component({
  selector: 'app-defer-when',
  template: `
    <h1>{{ '@' }}defer when (condition)</h1>

    <!-- @defer (when isVisible()) {
    <app-banner logger />

    <p>{{ 'Angular defer block 💪' | uppercase }}</p>
    } @placeholder {
    <p>Defer block is not visible yet</p>
    }

    <button (click)="isVisible.set(true)">Click here to defer content</button> -->

    <!-- Revert isVisible to false -->

    @defer (when isVisible()) {
      <!-- @if (isVisible()) { -->
        <app-banner logger />
        <p>{{ 'Angular defer block 💪' | uppercase }}</p>
      <!-- } -->
    } @placeholder {
        <p>Defer block is not visible yet</p>
    }

    <button (click)="isVisible.set(!isVisible())">
      Click here to defer content
    </button>

    <p>Signal: {{ isVisible() }}</p>
  `,
  standalone: true,
  imports: [BannerComponent, LoggerDirective, UppercasePipe],
})
export class DeferWhenComponent {
  isVisible = signal(false);
}
