import { Component } from '@angular/core';

import { DeferBasicComponent, DeferOnComponent, DeferWhenComponent } from './pages/home';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [DeferBasicComponent, DeferWhenComponent, DeferOnComponent],
})
export class AppComponent {
  title = 'angular-defer-v17';
}
