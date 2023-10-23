import { Component, Input } from "@angular/core";
import { NamePipe } from "./name.pipe";

@Component({
    selector: 'app-comment',
    template: `
        <div class="video-comment">
           <div class="avatar">{{ avatar | name }}</div>
           <div class="comment-content">
                <h4>{{ avatar }}</h4>
                <p class="text">{{ text }}</p>
           </div>
           
        </div>
    `,
    standalone: true,
    imports: [NamePipe],
    styleUrls: ['./comment.scss']
})
export class CommentComponent {
    @Input() text: string = '';

    @Input() avatar: string = '';
}
