import { Component } from '@angular/core';
import { BannerComponent } from 'src/app/components/banner.component';
import { LoggerDirective } from 'src/app/shared/directives/logger.directive';
import { UppercasePipe } from 'src/app/shared/pipes/uppercase.pipe';

@Component({
  selector: 'app-defer-basic',
  template: `
    <h1>Defer basic</h1>

    @defer {
      <app-banner logger />
      <p>{{ 'Angular defer block 💪' | uppercase }}</p>
    } 

    <!-- @defer {
      <app-banner logger />
      <p>{{ 'Angular defer block 💪' | uppercase }}</p>
    } @placeholder {
      <p>Defer block is not visible yet</p>
    } @loading {
      <p>Loading...</p>
    } @error {
      <p>Error!</p>
    } -->
  `,
  standalone: true,
  imports: [BannerComponent, LoggerDirective, UppercasePipe],
})
export class DeferBasicComponent {}
