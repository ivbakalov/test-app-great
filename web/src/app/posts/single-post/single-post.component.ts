import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { postsInterface } from '@great-shared/interfaces/posts.interface';

@Component({
  selector: 'app-great-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SinglePostComponent {
  @Input() post: postsInterface | undefined;
}
