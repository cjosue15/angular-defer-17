import { Component } from '@angular/core';

import { HomeComponent } from './pages/home/home.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [HomeComponent],
})
export class AppComponent {
  title = 'angular-defer-v17';
}
