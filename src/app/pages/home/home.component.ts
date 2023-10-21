import { Component } from '@angular/core';
import { BannerComponent } from 'src/app/components/banner.component';
import { LoggerDirective } from 'src/app/shared/directives/logger.directive';
import { UppercasePipe } from 'src/app/shared/pipes/uppercase.pipe';

@Component({
  selector: 'app-home',
  template: `
    <h1>Defer example</h1>

    @defer {
    <app-banner logger />

    <p>{{ 'Angular defer block 💪' | uppercase }}</p>
    }
  `,
  standalone: true,
  imports: [BannerComponent, LoggerDirective, UppercasePipe],
})
export class HomeComponent {}
