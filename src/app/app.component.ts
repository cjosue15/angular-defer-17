import { Component } from '@angular/core';

import { DeferBasicComponent, DeferWhenComponent } from './pages/home';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [DeferBasicComponent, DeferWhenComponent],
})
export class AppComponent {
  title = 'angular-defer-v17';
}
