import { Component } from '@angular/core';
import { OnInteractionComponent } from './on/on-interaction';
import { OnHoverComponent } from './on/on-hover';
import { OnTimerComponent } from './on/on-timer';
import { OnImmediateComponent } from './on/on-immediate';
import { OnIdleComponent } from './on/on-idle';
import { OnViewportComponent } from './on/on-viewport';

@Component({
  selector: 'app-defer-on',
  template: `
    <on-immediate />
    <!-- <on-idle /> -->
    <!-- <on-interaction /> -->
    <!-- <on-hover /> -->
    <!-- <on-timer /> -->
    <!-- <on-viewport /> -->
  `,
  standalone: true,
  imports: [ 
    OnInteractionComponent, 
    OnHoverComponent, 
    OnTimerComponent, 
    OnImmediateComponent, 
    OnIdleComponent,
    OnViewportComponent
  ],
})
export class DeferOnComponent { }
