import { Component } from '@angular/core';
import { BannerComponent } from './components/banner.component';
import { LoggerDirective } from './shared/directives/logger.directive';
import { UppercasePipe } from './shared/pipes/uppercase.pipe';

@Component({
  selector: 'app-root',
  template: `
    <h1>Defer basic</h1>
    
    @defer {
      <app-banner logger />
      <p>{{ 'Angular defer block 💪' | uppercase }}</p>
    } @placeholder {
      <p>placeholder</p>
    } @loading {
      <p>Loading...</p>
    } @error {
      <p>Error</p>
    }
  `,
  standalone: true,
  imports: [BannerComponent, LoggerDirective, UppercasePipe],
})
export class AppComponent {
  title = 'angular-defer-v17';
}