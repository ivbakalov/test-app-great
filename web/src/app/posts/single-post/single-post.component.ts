import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { postsInterface } from '@great-shared/interfaces/posts.interface';

@Component({
  selector: 'app-great-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SinglePostComponent implements OnInit {
  @Input() post: postsInterface | undefined;

  constructor() {}

  ngOnInit(): void {}
}
