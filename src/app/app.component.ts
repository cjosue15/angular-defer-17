import { Component, signal } from '@angular/core';
import { StepOne } from './components/stepper/step-one';
import { StepTwo } from './components/stepper/step-two';
import { StepThree } from './components/stepper/step-three';

@Component({
  selector: 'app-root',
  template: `
    @defer (on immediate) {
      @if (step() === 1) {
          <app-step-one #trigger/>
          <button (click)="step.set(2)">Move to Step 2</button>
      }
    }

    @defer (when step() === 2) {
        @if (step() === 2) {
            <app-step-two />
            <button (click)="step.set(3)">Move to Step 3</button>
        }
    }

    @defer (when step() === 3) {
        @if (step() === 3) {
            <app-step-three />
        }               
    }
  `,
  standalone: true,
  imports: [StepOne, StepTwo, StepThree],
})
export class AppComponent {
  step = signal(1);
}


// import { Component, signal } from '@angular/core';
// import { VideoComponent } from './components/youtube/video';
// import { CommentComponent } from './components/youtube/comment';

// import { DATA } from './data';


// interface Comments {
//   id: string;
//   text: string;
//   avatarName: string;
// }

// @Component({
//   selector: 'app-root',
//   template: `
//    <app-video (onReady)="onVideoReady()" />

//    @defer (when isReady()) {
//       @for (comment of comments(); track comment.id) {
//         <app-comment [avatar]="comment.avatarName" [text]="comment.text" />
//       }
//    }   @placeholder (minimum 1500ms) {
//     <span>The comments should be load when the video loaded</span>
//    }  @loading (minimum 1000ms) {
//       <span class="loader"></span>
//    }
//   `,
//   standalone: true,
//   imports: [VideoComponent, CommentComponent],
// })
// export class AppComponent {
//   step = signal(1);

//   comments = signal<Comments[]>(DATA);

//   isReady = signal(false);

//   onVideoReady(): void {
//       this.isReady.set(true);
//   }
// }