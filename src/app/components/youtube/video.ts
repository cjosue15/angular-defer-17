import { Component, EventEmitter, OnInit, Output, signal } from "@angular/core";
import { take, timer } from "rxjs";

@Component({
    selector: 'app-video',
    template: `
        <div class="video-content">
            @if (isLoading()) {
                <span class="loader"></span>
            } @else {
                <span>The video is ready!!!</span>
            }
        </div>
    `,
    standalone: true,
    styles: [
        `
            :host {
                height: 500px;
                background: black;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        `
    ]
})
export class VideoComponent implements OnInit {
    @Output() onReady = new EventEmitter();

    isLoading = signal(true);
    
    ngOnInit(): void {
        timer(0, 1000).pipe(take(3)).subscribe((value) => {
            if (value === 2) {
                this.isLoading.set(false);
                this.onReady.emit();
            }
        });
    }
}
