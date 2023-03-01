import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { PAGINATOR_SIZE } from '@great-shared/configs/paginator-size.config';
import { postResponseInterface } from '@great-shared/interfaces/posts.interface';
import { PostsService } from '@great-web/shared/services/posts.service';
import { filter, Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-great-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsComponent implements OnInit {
  posts$: Observable<postResponseInterface | undefined>;
  page: number;
  paginatorSize = PAGINATOR_SIZE;

  constructor(private _postService: PostsService, private _activatedRoute: ActivatedRoute, private _router: Router) {}

  ngOnInit(): void {
    this.posts$ = this._activatedRoute.queryParams.pipe(
      filter((params) => !this.page || +params?.page !== this.page),
      switchMap((param: Params) => {
        this.page = param?.page ? +param?.page : this.page;

        return this._postService.getPosts({ page: this.page ? this.page : 1 });
      })
    );
  }

  onPaginationChange(event: PageEvent) {
    void this._router.navigate([], {
      replaceUrl: true,
      queryParams: {
        page: event.pageIndex + 1,
      },
      queryParamsHandling: 'merge',
    });
  }
}
