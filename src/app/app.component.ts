import { Component } from '@angular/core';

import { HomeComponent, DeferWhenComponent } from './pages/home';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [HomeComponent, DeferWhenComponent],
})
export class AppComponent {
  title = 'angular-defer-v17';
}
